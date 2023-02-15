package org.example;

import ai.visma.asgt.dataservice.v1.CreateRequest;
import ai.visma.asgt.dataservice.v1.DataServiceGrpc;
import ai.visma.asgt.type.*;
import com.google.protobuf.Empty;
import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;

import java.util.Arrays;

public class Client {
    public static void main(String[] args) {
        createDataset("test_001", "bank");
    }

    public static void createDataset(String datasetName, String datasetType) {
        // create a client stub for calling asgt
        ManagedChannel channel = ManagedChannelBuilder.forAddress("api.stag.asgt.visma.ai", 443).build();
        DataServiceGrpc.DataServiceBlockingStub stub = DataServiceGrpc.newBlockingStub(channel);

        // request to create a dataset
        CreateRequest createRequest = CreateRequest.newBuilder()
                .setType(datasetType)
                .setName(datasetName)
                .addAllTargets(Arrays.asList("loremipsum"))
                .addAllSamples(Arrays.asList(Sample.newBuilder()
                        .setData(Data.newBuilder()
                                .setInvoice(Invoice.newBuilder()
                                        .setCurrency("EUR")
                                        .setCustomerRef("custom_reference")
                                        .setSupplier(Supplier.newBuilder()
                                                .setGlobalId("DK30402499")
                                                .setId("0001")
                                                .setName("Acme Inc")
                                                .build())
                                        .setText("Four have Information Operations")
                                        .setTotal(2948.3949676931375F)
                                        .build())
                                .setInvoiceLine(InvoiceLine.newBuilder()
                                        .setItemId("0000001")
                                        .setText("Occupy ecological in 1897 near Blacksburg.")
                                        .build())
                                .setTransaction(Transaction.newBuilder()
                                        .setAmount(2948.3949676931375F)
                                        .setText("Are simply this, along with some larger stones or cobbles, leaving a desert")
                                        .build())
                                .build())
                        .addAllTargetValues(Arrays.asList(TargetValue.newBuilder().setName("IsItPricy").setValue("No").build()))
                        .build()))
                .setRetentionPolicy(RetentionPolicy.newBuilder().setMaxDays(89).build())
                .build();

        // see the class for more info
        AuthenticationCallCredentials credentials = new AuthenticationCallCredentials("demo");

        // Returns Empty response if successful, or throws ALREADY_EXISTS exception
        Empty response = stub.withCallCredentials(credentials).createDataset(createRequest);
        System.out.println(response);
    }
}
