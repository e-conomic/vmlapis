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
        createDataset("martin_test_006", "bank", "./dummy-data.pb");
    }

    static void createDataset(String datasetName, String datasetType, String datasetFile)
    {
        // create a client
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
        metadata.Add("authorization", "Bearer " + Authorization.TOKEN);

        var response = client.CreateDataset(createRequest, metadata); 
        Console.WriteLine(response);
        
        
        //channel
        var chnl = GrpcChannel.ForAddress("https://api.snbx.ssn.visma.ai:443");
        //client
        var clnt = new DocumentAnnotator.DocumentAnnotatorClient(chnl);
        //request https://www.africau.edu/images/default/sample.pdf
        var rqst = new DocumentAnnotatorRequest
        {
            Document = new Document
            {
                Source = new DocumentSource
                {
                    HttpUri = "https://www.africau.edu/images/default/sample.pdf"
                }
            },
            Features =
            {
                new Feature { Type = Feature.Types.Type.Default },
                new Feature
                {
                    Type = Feature.Types.Type.Currency, MaxResults = 2, MinConfidence = Confidence.Types.Level.VeryLow
                },
                new Feature { Type = Feature.Types.Type.Text }
            }
        };
        
        //metadata
        //call
        // var response = clnt.AnnotateDocument(rqst, metadata);
        // //response
        // Console.WriteLine(response);
    }
}