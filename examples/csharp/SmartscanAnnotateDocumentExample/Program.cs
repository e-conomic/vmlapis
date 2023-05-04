using Google.Protobuf;
using Grpc.Core;
using Grpc.Net.Client;
using Ssn.Annotator.V1;
using Confidence = Ssn.Type.Confidence;
using Document = Ssn.Annotator.V1.Document;

namespace ConsoleApp1;

static class Program {
    public static void Main(string[] args) {
        annotateDocument();
    }

    static void annotateDocument()
    {
        // 1. client
        var channel = GrpcChannel.ForAddress("https://api.stag.ssn.visma.ai:443");
        var client = new DocumentAnnotator.DocumentAnnotatorClient(channel);
        
        // 2. request
        var content = ByteString.CopyFrom(File.ReadAllBytes("../../../example.png"));
        var rqst = new DocumentAnnotatorRequest
        {
            Document = new Document
            {
                Content = content,
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
        
        // 3. metadata
        var metadata = new Metadata { { "authorization", "Bearer demo" } };
        // 4. call
        DocumentAnnotatorResponse response = client.AnnotateDocument(rqst, metadata); 
        // 5. response
        Console.WriteLine(response);
    }
}
