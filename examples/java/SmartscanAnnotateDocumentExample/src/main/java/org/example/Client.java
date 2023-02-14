package org.example;

import ai.visma.ssn.annotator.v1.*;
import ai.visma.ssn.type.Confidence;
import com.google.protobuf.ByteString;
import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;

public class Client {
    public static void main(String[] args) throws IOException {
        annotateDocument();
    }

    public static void annotateDocument() throws IOException {
        // create a client stub for calling Smartscan (SSN)
        ManagedChannel channel = ManagedChannelBuilder.forAddress("api.stag.ssn.visma.ai", 443).build();
        DocumentAnnotatorGrpc.DocumentAnnotatorBlockingStub stub = DocumentAnnotatorGrpc.newBlockingStub(channel);


        // load image to ByteString
        ByteString content = ByteString.copyFrom(Files.readAllBytes(Paths.get("example.png")));

        // request to annotate a document
        DocumentAnnotatorRequest createRequest = DocumentAnnotatorRequest.newBuilder()
                .setDocument(Document.newBuilder()
                        .setContent(content))
                .addAllFeatures(Arrays.asList(
                        Feature.newBuilder().setType(Feature.Type.DEFAULT).build(),
                        Feature.newBuilder()
                                .setType(Feature.Type.CURRENCY)
                                .setMaxResults(2)
                                .setMinConfidenceValue(Confidence.Level.VERY_LOW_VALUE).build(),
                        Feature.newBuilder().setType(Feature.Type.TEXT).build()))
                .build();

        // see the class for more info
        AuthenticationCallCredentials credentials = new AuthenticationCallCredentials("demo");

        DocumentAnnotatorResponse result = stub.withCallCredentials(credentials).annotateDocument(createRequest);

        System.out.println(result.toString());
    }

}
