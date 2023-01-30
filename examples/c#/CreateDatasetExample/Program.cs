using Asgt.Dataservice.V1;
using Asgt.Type;
using Grpc.Core;
using Grpc.Net.Client;
using Ssn.Annotator.V1;
using Confidence = Ssn.Type.Confidence;
using DataService = Asgt.Dataservice.V1.DataService;
using Document = Ssn.Annotator.V1.Document;

namespace ConsoleApp1;

static class Program {
    public static void Main(string[] args) {
        createDataset("test_001", "bank", "./dummy-data.pb");
    }

    static void createDataset(String datasetName, String datasetType, String datasetFile)
    {
        // create a client
        // todo change address to stag
        using var channel = GrpcChannel.ForAddress("https://api.snbx.asgt.visma.ai:443");
        var client = new DataService.DataServiceClient(channel);

        // load the dataset file
        byte[] datasetBytes = File.ReadAllBytes(datasetFile);
        AppendDataRequest data = AppendDataRequest.Parser.ParseFrom(datasetBytes);

        // request to create a dataset
        CreateRequest createRequest = new CreateRequest
        {
            Name = datasetName,
            Type = datasetType,
            Targets = { "loremipsum" },
            Samples = { data.Samples },
            RetentionPolicy = new RetentionPolicy { MaxDays = 89 }
        };

        var metadata = new Metadata();
        metadata.Add("authorization", "Bearer demo");

        var response = client.CreateDataset(createRequest, metadata); 
        Console.WriteLine(response);
    }
}
