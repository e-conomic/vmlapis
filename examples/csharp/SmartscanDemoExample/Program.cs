using Asgt.V2;
using Asgt.V2.Type;
using Google.Protobuf;
using Google.Protobuf.WellKnownTypes;
using Grpc.Core;
using Grpc.Net.Client;
using Ssn.Annotator.V1;
using Ssn.Dataservice.V1;
using Ssn.Type;
using AsgtDataservice = Asgt.Dataservice.V1.DataService;
using Document = Ssn.Annotator.V1.Document;

namespace ConsoleApp1;

internal static class Smartscan
{
    private static Metadata _metadata;
    private static DocumentAnnotator.DocumentAnnotatorClient _documentAnnotatorClient;
    private static DataService.DataServiceClient _dataServiceClient;

    public static void Main(string[] args)
    {
        var ssnChannel = GrpcChannel.ForAddress("https://api.stag.ssn.visma.ai:443");
        _metadata = new Metadata();
        _metadata.Add("authorization", "Bearer demo");
        _documentAnnotatorClient = new DocumentAnnotator.DocumentAnnotatorClient(ssnChannel);
        _dataServiceClient = new DataService.DataServiceClient(ssnChannel);
        
        var feedbackId = annotateDocument();
        sendFeedback(feedbackId);
    }
    
    private static string annotateDocument()
    {
        var request = new DocumentAnnotatorRequest
        {
            Document = new Document
            {
                Content = ByteString.CopyFrom(File.ReadAllBytes("../../../example_invoice.pdf"))
            },
            Tier = Tier.Premium,
            Features =
            {
                new Feature{ Type = Feature.Types.Type.Default },
                new Feature{ Type = Feature.Types.Type.Text } //invoice text
            }
        };

        var resp = _documentAnnotatorClient.AnnotateDocument(request, _metadata);
        Console.WriteLine(PrettyPrint(resp.ToString()));

        var feedbackId = resp.FeedbackId;
        return feedbackId;
    }

    private static void sendFeedback(string feedbackID = null)
    {
        var request = new FeedbackRequest
        {
            Id = feedbackID,
            TrueValues = new TrueValues
            {
                Currency = "AUD"
            }
        };

        _dataServiceClient.Feedback(request, _metadata);
    }



    static string PrettyPrint(string json)
    {
        const string INDENT_STRING = "    ";
        int indentation = 0;
        int quoteCount = 0;
        var result =
            from ch in json
            let quotes = ch == '"' ? quoteCount++ : quoteCount
            let lineBreak = ch == ',' && quotes % 2 == 0
                ? ch + Environment.NewLine + String.Concat(Enumerable.Repeat(INDENT_STRING, indentation))
                : null
            let openChar = ch == '{' || ch == '['
                ? ch + Environment.NewLine + String.Concat(Enumerable.Repeat(INDENT_STRING, ++indentation))
                : ch.ToString()
            let closeChar = ch == '}' || ch == ']'
                ? Environment.NewLine + String.Concat(Enumerable.Repeat(INDENT_STRING, --indentation)) + ch
                : ch.ToString()
            select lineBreak == null
                ? openChar.Length > 1
                    ? openChar
                    : closeChar
                : lineBreak;

        return String.Concat(result);
    }
}