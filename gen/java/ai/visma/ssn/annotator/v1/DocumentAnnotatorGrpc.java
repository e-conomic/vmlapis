package ai.visma.ssn.annotator.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.51.0)",
    comments = "Source: ssn/annotator/v1/annotator.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class DocumentAnnotatorGrpc {

  private DocumentAnnotatorGrpc() {}

  public static final String SERVICE_NAME = "ssn.annotator.v1.DocumentAnnotator";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<ai.visma.ssn.annotator.v1.DocumentAnnotatorRequest,
      ai.visma.ssn.annotator.v1.DocumentAnnotatorResponse> getAnnotateDocumentMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "AnnotateDocument",
      requestType = ai.visma.ssn.annotator.v1.DocumentAnnotatorRequest.class,
      responseType = ai.visma.ssn.annotator.v1.DocumentAnnotatorResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<ai.visma.ssn.annotator.v1.DocumentAnnotatorRequest,
      ai.visma.ssn.annotator.v1.DocumentAnnotatorResponse> getAnnotateDocumentMethod() {
    io.grpc.MethodDescriptor<ai.visma.ssn.annotator.v1.DocumentAnnotatorRequest, ai.visma.ssn.annotator.v1.DocumentAnnotatorResponse> getAnnotateDocumentMethod;
    if ((getAnnotateDocumentMethod = DocumentAnnotatorGrpc.getAnnotateDocumentMethod) == null) {
      synchronized (DocumentAnnotatorGrpc.class) {
        if ((getAnnotateDocumentMethod = DocumentAnnotatorGrpc.getAnnotateDocumentMethod) == null) {
          DocumentAnnotatorGrpc.getAnnotateDocumentMethod = getAnnotateDocumentMethod =
              io.grpc.MethodDescriptor.<ai.visma.ssn.annotator.v1.DocumentAnnotatorRequest, ai.visma.ssn.annotator.v1.DocumentAnnotatorResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "AnnotateDocument"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ai.visma.ssn.annotator.v1.DocumentAnnotatorRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ai.visma.ssn.annotator.v1.DocumentAnnotatorResponse.getDefaultInstance()))
              .setSchemaDescriptor(new DocumentAnnotatorMethodDescriptorSupplier("AnnotateDocument"))
              .build();
        }
      }
    }
    return getAnnotateDocumentMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static DocumentAnnotatorStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<DocumentAnnotatorStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<DocumentAnnotatorStub>() {
        @java.lang.Override
        public DocumentAnnotatorStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new DocumentAnnotatorStub(channel, callOptions);
        }
      };
    return DocumentAnnotatorStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static DocumentAnnotatorBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<DocumentAnnotatorBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<DocumentAnnotatorBlockingStub>() {
        @java.lang.Override
        public DocumentAnnotatorBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new DocumentAnnotatorBlockingStub(channel, callOptions);
        }
      };
    return DocumentAnnotatorBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static DocumentAnnotatorFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<DocumentAnnotatorFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<DocumentAnnotatorFutureStub>() {
        @java.lang.Override
        public DocumentAnnotatorFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new DocumentAnnotatorFutureStub(channel, callOptions);
        }
      };
    return DocumentAnnotatorFutureStub.newStub(factory, channel);
  }

  /**
   */
  public static abstract class DocumentAnnotatorImplBase implements io.grpc.BindableService {

    /**
     */
    public void annotateDocument(ai.visma.ssn.annotator.v1.DocumentAnnotatorRequest request,
        io.grpc.stub.StreamObserver<ai.visma.ssn.annotator.v1.DocumentAnnotatorResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getAnnotateDocumentMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getAnnotateDocumentMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                ai.visma.ssn.annotator.v1.DocumentAnnotatorRequest,
                ai.visma.ssn.annotator.v1.DocumentAnnotatorResponse>(
                  this, METHODID_ANNOTATE_DOCUMENT)))
          .build();
    }
  }

  /**
   */
  public static final class DocumentAnnotatorStub extends io.grpc.stub.AbstractAsyncStub<DocumentAnnotatorStub> {
    private DocumentAnnotatorStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected DocumentAnnotatorStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new DocumentAnnotatorStub(channel, callOptions);
    }

    /**
     */
    public void annotateDocument(ai.visma.ssn.annotator.v1.DocumentAnnotatorRequest request,
        io.grpc.stub.StreamObserver<ai.visma.ssn.annotator.v1.DocumentAnnotatorResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getAnnotateDocumentMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class DocumentAnnotatorBlockingStub extends io.grpc.stub.AbstractBlockingStub<DocumentAnnotatorBlockingStub> {
    private DocumentAnnotatorBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected DocumentAnnotatorBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new DocumentAnnotatorBlockingStub(channel, callOptions);
    }

    /**
     */
    public ai.visma.ssn.annotator.v1.DocumentAnnotatorResponse annotateDocument(ai.visma.ssn.annotator.v1.DocumentAnnotatorRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getAnnotateDocumentMethod(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class DocumentAnnotatorFutureStub extends io.grpc.stub.AbstractFutureStub<DocumentAnnotatorFutureStub> {
    private DocumentAnnotatorFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected DocumentAnnotatorFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new DocumentAnnotatorFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<ai.visma.ssn.annotator.v1.DocumentAnnotatorResponse> annotateDocument(
        ai.visma.ssn.annotator.v1.DocumentAnnotatorRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getAnnotateDocumentMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_ANNOTATE_DOCUMENT = 0;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final DocumentAnnotatorImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(DocumentAnnotatorImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_ANNOTATE_DOCUMENT:
          serviceImpl.annotateDocument((ai.visma.ssn.annotator.v1.DocumentAnnotatorRequest) request,
              (io.grpc.stub.StreamObserver<ai.visma.ssn.annotator.v1.DocumentAnnotatorResponse>) responseObserver);
          break;
        default:
          throw new AssertionError();
      }
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public io.grpc.stub.StreamObserver<Req> invoke(
        io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        default:
          throw new AssertionError();
      }
    }
  }

  private static abstract class DocumentAnnotatorBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    DocumentAnnotatorBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return ai.visma.ssn.annotator.v1.AnnotatorProto.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("DocumentAnnotator");
    }
  }

  private static final class DocumentAnnotatorFileDescriptorSupplier
      extends DocumentAnnotatorBaseDescriptorSupplier {
    DocumentAnnotatorFileDescriptorSupplier() {}
  }

  private static final class DocumentAnnotatorMethodDescriptorSupplier
      extends DocumentAnnotatorBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    DocumentAnnotatorMethodDescriptorSupplier(String methodName) {
      this.methodName = methodName;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.MethodDescriptor getMethodDescriptor() {
      return getServiceDescriptor().findMethodByName(methodName);
    }
  }

  private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

  public static io.grpc.ServiceDescriptor getServiceDescriptor() {
    io.grpc.ServiceDescriptor result = serviceDescriptor;
    if (result == null) {
      synchronized (DocumentAnnotatorGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new DocumentAnnotatorFileDescriptorSupplier())
              .addMethod(getAnnotateDocumentMethod())
              .build();
        }
      }
    }
    return result;
  }
}
