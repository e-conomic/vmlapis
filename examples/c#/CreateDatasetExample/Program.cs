using Asgt.Dataservice.V1;
using Asgt.Type;
using Grpc.Core;
using Grpc.Net.Client;
using DataService = Asgt.Dataservice.V1.DataService;
using TargetValue = Asgt.Type.TargetValue;

namespace ConsoleApp1;

static class Program
{
    public static void Main(string[] args)
    {
        createDataset("test_001", "bank");
    }

    static void createDataset(String datasetName, String datasetType)
    {
        // create a client
        using var channel = GrpcChannel.ForAddress("https://api.stag.asgt.visma.ai:443");
        var client = new DataService.DataServiceClient(channel);

        // build samples according to samples.json
        var samples = createSamples();

        // request to create a dataset
        CreateRequest createRequest = new CreateRequest
        {
            Name = datasetName,
            Type = datasetType,
            Targets = { "loremipsum" },
            Samples = { samples },
            RetentionPolicy = new RetentionPolicy { MaxDays = 89 }
        };

        var metadata = new Metadata();
        metadata.Add("authorization", "Bearer demo");

        var response = client.CreateDataset(createRequest, metadata);
        Console.WriteLine(response);
    }

    static List<Sample> createSamples()
    {
        var targetValues = new List<TargetValue>();
        targetValues.Add(new() { Name = "IsItPricy", Value = "No" });

        var samples = new List<Sample>();
        samples.Add(new Sample
            {
                Data = new Data
                {
                    Invoice = new Invoice
                    {
                        Currency = "EUR",
                        CustomerRef = "custom_reference",
                        IssueDate = null,
                        Supplier = new Supplier
                        {
                            GlobalId = "DK30402499",
                            Id = "0001",
                            Name = "Acme Inc"
                        },
                        Text = "Four have Information Operations",
                        Total = 2948.3949676931375f
                    },
                    InvoiceLine = new InvoiceLine
                    {
                        ItemId = "0000001",
                        Text = "Occupy ecological in 1897 near Blacksburg."
                    },
                    Transaction = new Transaction
                    {
                        Amount = 2948.3949676931375f,
                        Text = "Are simply this, along with some larger stones or cobbles, leaving a desert"
                    }
                },
                TargetValues = { targetValues }
            }
        );
        return samples;
    }
}