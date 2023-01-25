using Grpc.Core;
using Grpc.Net.Client;
using Ssn.Annotator.V1;
using Confidence = Ssn.Type.Confidence;
using Document = Ssn.Annotator.V1.Document;

namespace ConsoleApp1;

static class Program {
    public static void Main(string[] args) {
        annotateDocument("martin_test_006", "bank", "./dummy-data.pb");
    }

    static void annotateDocument(String datasetName, String datasetType, String datasetFile)
    {
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
        var metadata = new Metadata();
        metadata.Add("authorization", "Bearer " + Authorization.TOKEN);
        
        // call
        var response = clnt.AnnotateDocument(rqst, metadata);
        
        //response
        Console.WriteLine(response);
    }
}