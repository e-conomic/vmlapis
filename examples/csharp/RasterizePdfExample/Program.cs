using System.Net.Mime;
using Google.Protobuf;
using Grpc.Core;
using Grpc.Net.Client;
using Ssn.Pdfservice.V1;
using System.Drawing;

namespace ConsoleApp1;

static class Program
{
    static async Task Main(string[] args)
    {
        await rasterizePDF();

    }

    static async Task rasterizePDF()
    {
        // create a client
        using var channel = GrpcChannel.ForAddress("https://api.stag.ssn.visma.ai:443");
        var client = new PdfService.PdfServiceClient(channel);

        var document = ByteString.CopyFrom(File.ReadAllBytes("../../../example.pdf"));


        // request to rasterize a document

        var request = new RasterizePdfRequest
        {
            Data = document,
            Dpi = 300,
            Format = RasterizePdfRequest.Types.Format.Png,
            Color = RasterizePdfRequest.Types.ColorSpace.Color,
            Pages = RasterizePdfRequest.Types.PageOption.All
        };


        var metadata = new Metadata();
        metadata.Add("authorization", "Bearer demo");

        var response = client.RasterizePdf(request, metadata);
        ByteString b = ByteString.Empty;
        while (await response.ResponseStream.MoveNext())
        {
            var current = response.ResponseStream.Current;
            Console.WriteLine(current.ToString());
        }
    }
    

}
