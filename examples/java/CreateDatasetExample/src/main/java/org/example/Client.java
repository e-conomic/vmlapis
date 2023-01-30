package org.example;

import ai.visma.asgt.dataservice.v1.AppendDataRequest;
import ai.visma.asgt.dataservice.v1.CreateRequest;
import ai.visma.asgt.dataservice.v1.DataServiceGrpc;
import ai.visma.asgt.type.RetentionPolicy;
import com.google.common.io.Files;
import com.google.protobuf.Empty;
import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;

import java.io.File;
import java.io.IOException;
import java.util.Arrays;

public class Client {
    public static void main(String[] args) throws IOException {
        createDataset("test_001", "bank", "./dummy-data.pb");
    }

    public static void createDataset(String datasetName, String datasetType, String datasetFile) throws IOException {
        // create a client stub for calling asgt
        ManagedChannel channel = ManagedChannelBuilder.forAddress("api.stag.asgt.visma.ai", 443).build();
        DataServiceGrpc.DataServiceBlockingStub stub = DataServiceGrpc.newBlockingStub(channel);

        // load the dataset file
        byte[] datasetBytes = Files.toByteArray(new File(datasetFile));
        AppendDataRequest data = AppendDataRequest.parseFrom(datasetBytes);

        // request to create a dataset
        CreateRequest createRequest = CreateRequest.newBuilder()
                .setType(datasetType)
                .setName(datasetName)
                .addAllTargets(Arrays.asList("loremipsum"))
                .addAllSamples(data.getSamplesList())
                .setRetentionPolicy(RetentionPolicy.newBuilder().setMaxDays(89).build())
                .build();

        // see the class for more info
        AuthenticationCallCredentials credentials = new AuthenticationCallCredentials("demo");

        Empty result = stub.withCallCredentials(credentials).createDataset(createRequest);

        System.out.println(result.toString());
    }
}
