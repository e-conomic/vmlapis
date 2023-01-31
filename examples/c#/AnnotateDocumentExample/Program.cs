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
        //channel
        var chnl = GrpcChannel.ForAddress("https://api.stag.ssn.visma.ai:443");
        //client
        var clnt = new DocumentAnnotator.DocumentAnnotatorClient(chnl);
        
        //file content
        //you might need to change the argument of File.ReadAllBytes based on whether you're running `dotnet run` 
        //from the root directory or running the compiled binary file from the bin directory 
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
        
        //metadata
        var metadata = new Metadata();
        metadata.Add("authorization", "Bearer demo");
        
        // call and response
        var response = clnt.AnnotateDocument(rqst, metadata); 
        Console.WriteLine(response);
    }
}
