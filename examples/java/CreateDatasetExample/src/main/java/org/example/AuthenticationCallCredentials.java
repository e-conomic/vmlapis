package org.example;

import io.grpc.CallCredentials;
import io.grpc.Metadata;
import io.grpc.Status;

import java.util.concurrent.Executor;


// source: https://mark-cs.co.uk/posts/2020/july/grpc-call-credentials-in-java/
// source in case of deletion: https://web.archive.org/web/20211006231743/https://mark-cs.co.uk/posts/2020/july/grpc-call-credentials-in-java/

public class AuthenticationCallCredentials extends CallCredentials {

    private String token;

    public AuthenticationCallCredentials(String token) {
        this.token = token;
    }

    @Override
    public void applyRequestMetadata(RequestInfo requestInfo, Executor executor, MetadataApplier metadataApplier) {
        executor.execute(() -> {
            try {
                Metadata headers = new Metadata();
                headers.put(Metadata.Key.of("Authorization", Metadata.ASCII_STRING_MARSHALLER), "Bearer " + token);
                metadataApplier.apply(headers);
            } catch (Throwable e) {
                metadataApplier.fail(Status.UNAUTHENTICATED.withCause(e));
            }
        });
    }

    @Override
    public void thisUsesUnstableApi() {
        // yes this is unstable :(
    }
}
