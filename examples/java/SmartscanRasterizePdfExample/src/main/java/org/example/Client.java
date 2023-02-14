package org.example;

import ai.visma.ssn.pdfservice.v1.PdfServiceGrpc;
import ai.visma.ssn.pdfservice.v1.RasterizePdfRequest;
import ai.visma.ssn.pdfservice.v1.RasterizePdfResponse;
import com.google.protobuf.ByteString;
import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Iterator;

public class Client {
    public static void main(String[] args) throws IOException {
        rasterizePdf();
    }

    public static void rasterizePdf() throws IOException {
        // create a client stub for calling Smartscan (SSN)
        ManagedChannel channel = ManagedChannelBuilder.forAddress("api.stag.ssn.visma.ai", 443).build();
        PdfServiceGrpc.PdfServiceBlockingStub stub = PdfServiceGrpc.newBlockingStub(channel);

        // load image to ByteString
        ByteString content = ByteString.copyFrom(Files.readAllBytes(Paths.get("example.pdf")));

        // request to annotate a document
        RasterizePdfRequest createRequest = RasterizePdfRequest.newBuilder()
                .setData(content)
                .setDpi(300)
                .setFormat(RasterizePdfRequest.Format.PNG)
                .setColor(RasterizePdfRequest.ColorSpace.COLOR)
                .setPages(RasterizePdfRequest.PageOption.ALL)
                .build();

        // see the class for more info
        AuthenticationCallCredentials credentials = new AuthenticationCallCredentials("demo");

        Iterator<RasterizePdfResponse> result = stub.withCallCredentials(credentials).rasterizePdf(createRequest);

        while (result.hasNext()) {
            RasterizePdfResponse response = result.next();
            System.out.println(response);
        }
    }
}
