package ai.visma.ssn.pdfservice.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.56.1)",
    comments = "Source: ssn/pdfservice/v1/pdfservice.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class PdfServiceGrpc {

  private PdfServiceGrpc() {}

  public static final String SERVICE_NAME = "ssn.pdfservice.v1.PdfService";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<ai.visma.ssn.pdfservice.v1.RasterizePdfRequest,
      ai.visma.ssn.pdfservice.v1.RasterizePdfResponse> getInternalRasterizePdfMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "InternalRasterizePdf",
      requestType = ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.class,
      responseType = ai.visma.ssn.pdfservice.v1.RasterizePdfResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<ai.visma.ssn.pdfservice.v1.RasterizePdfRequest,
      ai.visma.ssn.pdfservice.v1.RasterizePdfResponse> getInternalRasterizePdfMethod() {
    io.grpc.MethodDescriptor<ai.visma.ssn.pdfservice.v1.RasterizePdfRequest, ai.visma.ssn.pdfservice.v1.RasterizePdfResponse> getInternalRasterizePdfMethod;
    if ((getInternalRasterizePdfMethod = PdfServiceGrpc.getInternalRasterizePdfMethod) == null) {
      synchronized (PdfServiceGrpc.class) {
        if ((getInternalRasterizePdfMethod = PdfServiceGrpc.getInternalRasterizePdfMethod) == null) {
          PdfServiceGrpc.getInternalRasterizePdfMethod = getInternalRasterizePdfMethod =
              io.grpc.MethodDescriptor.<ai.visma.ssn.pdfservice.v1.RasterizePdfRequest, ai.visma.ssn.pdfservice.v1.RasterizePdfResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "InternalRasterizePdf"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ai.visma.ssn.pdfservice.v1.RasterizePdfResponse.getDefaultInstance()))
              .setSchemaDescriptor(new PdfServiceMethodDescriptorSupplier("InternalRasterizePdf"))
              .build();
        }
      }
    }
    return getInternalRasterizePdfMethod;
  }

  private static volatile io.grpc.MethodDescriptor<ai.visma.ssn.pdfservice.v1.RasterizePdfRequest,
      ai.visma.ssn.pdfservice.v1.RasterizePdfResponse> getRasterizePdfMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "RasterizePdf",
      requestType = ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.class,
      responseType = ai.visma.ssn.pdfservice.v1.RasterizePdfResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<ai.visma.ssn.pdfservice.v1.RasterizePdfRequest,
      ai.visma.ssn.pdfservice.v1.RasterizePdfResponse> getRasterizePdfMethod() {
    io.grpc.MethodDescriptor<ai.visma.ssn.pdfservice.v1.RasterizePdfRequest, ai.visma.ssn.pdfservice.v1.RasterizePdfResponse> getRasterizePdfMethod;
    if ((getRasterizePdfMethod = PdfServiceGrpc.getRasterizePdfMethod) == null) {
      synchronized (PdfServiceGrpc.class) {
        if ((getRasterizePdfMethod = PdfServiceGrpc.getRasterizePdfMethod) == null) {
          PdfServiceGrpc.getRasterizePdfMethod = getRasterizePdfMethod =
              io.grpc.MethodDescriptor.<ai.visma.ssn.pdfservice.v1.RasterizePdfRequest, ai.visma.ssn.pdfservice.v1.RasterizePdfResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "RasterizePdf"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ai.visma.ssn.pdfservice.v1.RasterizePdfResponse.getDefaultInstance()))
              .setSchemaDescriptor(new PdfServiceMethodDescriptorSupplier("RasterizePdf"))
              .build();
        }
      }
    }
    return getRasterizePdfMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static PdfServiceStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<PdfServiceStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<PdfServiceStub>() {
        @java.lang.Override
        public PdfServiceStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new PdfServiceStub(channel, callOptions);
        }
      };
    return PdfServiceStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static PdfServiceBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<PdfServiceBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<PdfServiceBlockingStub>() {
        @java.lang.Override
        public PdfServiceBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new PdfServiceBlockingStub(channel, callOptions);
        }
      };
    return PdfServiceBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static PdfServiceFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<PdfServiceFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<PdfServiceFutureStub>() {
        @java.lang.Override
        public PdfServiceFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new PdfServiceFutureStub(channel, callOptions);
        }
      };
    return PdfServiceFutureStub.newStub(factory, channel);
  }

  /**
   */
  public interface AsyncService {

    /**
     */
    default void internalRasterizePdf(ai.visma.ssn.pdfservice.v1.RasterizePdfRequest request,
        io.grpc.stub.StreamObserver<ai.visma.ssn.pdfservice.v1.RasterizePdfResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getInternalRasterizePdfMethod(), responseObserver);
    }

    /**
     */
    default void rasterizePdf(ai.visma.ssn.pdfservice.v1.RasterizePdfRequest request,
        io.grpc.stub.StreamObserver<ai.visma.ssn.pdfservice.v1.RasterizePdfResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getRasterizePdfMethod(), responseObserver);
    }
  }

  /**
   * Base class for the server implementation of the service PdfService.
   */
  public static abstract class PdfServiceImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return PdfServiceGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service PdfService.
   */
  public static final class PdfServiceStub
      extends io.grpc.stub.AbstractAsyncStub<PdfServiceStub> {
    private PdfServiceStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected PdfServiceStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new PdfServiceStub(channel, callOptions);
    }

    /**
     */
    public void internalRasterizePdf(ai.visma.ssn.pdfservice.v1.RasterizePdfRequest request,
        io.grpc.stub.StreamObserver<ai.visma.ssn.pdfservice.v1.RasterizePdfResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncServerStreamingCall(
          getChannel().newCall(getInternalRasterizePdfMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void rasterizePdf(ai.visma.ssn.pdfservice.v1.RasterizePdfRequest request,
        io.grpc.stub.StreamObserver<ai.visma.ssn.pdfservice.v1.RasterizePdfResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncServerStreamingCall(
          getChannel().newCall(getRasterizePdfMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service PdfService.
   */
  public static final class PdfServiceBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<PdfServiceBlockingStub> {
    private PdfServiceBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected PdfServiceBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new PdfServiceBlockingStub(channel, callOptions);
    }

    /**
     */
    public java.util.Iterator<ai.visma.ssn.pdfservice.v1.RasterizePdfResponse> internalRasterizePdf(
        ai.visma.ssn.pdfservice.v1.RasterizePdfRequest request) {
      return io.grpc.stub.ClientCalls.blockingServerStreamingCall(
          getChannel(), getInternalRasterizePdfMethod(), getCallOptions(), request);
    }

    /**
     */
    public java.util.Iterator<ai.visma.ssn.pdfservice.v1.RasterizePdfResponse> rasterizePdf(
        ai.visma.ssn.pdfservice.v1.RasterizePdfRequest request) {
      return io.grpc.stub.ClientCalls.blockingServerStreamingCall(
          getChannel(), getRasterizePdfMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service PdfService.
   */
  public static final class PdfServiceFutureStub
      extends io.grpc.stub.AbstractFutureStub<PdfServiceFutureStub> {
    private PdfServiceFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected PdfServiceFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new PdfServiceFutureStub(channel, callOptions);
    }
  }

  private static final int METHODID_INTERNAL_RASTERIZE_PDF = 0;
  private static final int METHODID_RASTERIZE_PDF = 1;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final AsyncService serviceImpl;
    private final int methodId;

    MethodHandlers(AsyncService serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_INTERNAL_RASTERIZE_PDF:
          serviceImpl.internalRasterizePdf((ai.visma.ssn.pdfservice.v1.RasterizePdfRequest) request,
              (io.grpc.stub.StreamObserver<ai.visma.ssn.pdfservice.v1.RasterizePdfResponse>) responseObserver);
          break;
        case METHODID_RASTERIZE_PDF:
          serviceImpl.rasterizePdf((ai.visma.ssn.pdfservice.v1.RasterizePdfRequest) request,
              (io.grpc.stub.StreamObserver<ai.visma.ssn.pdfservice.v1.RasterizePdfResponse>) responseObserver);
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

  public static final io.grpc.ServerServiceDefinition bindService(AsyncService service) {
    return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
        .addMethod(
          getInternalRasterizePdfMethod(),
          io.grpc.stub.ServerCalls.asyncServerStreamingCall(
            new MethodHandlers<
              ai.visma.ssn.pdfservice.v1.RasterizePdfRequest,
              ai.visma.ssn.pdfservice.v1.RasterizePdfResponse>(
                service, METHODID_INTERNAL_RASTERIZE_PDF)))
        .addMethod(
          getRasterizePdfMethod(),
          io.grpc.stub.ServerCalls.asyncServerStreamingCall(
            new MethodHandlers<
              ai.visma.ssn.pdfservice.v1.RasterizePdfRequest,
              ai.visma.ssn.pdfservice.v1.RasterizePdfResponse>(
                service, METHODID_RASTERIZE_PDF)))
        .build();
  }

  private static abstract class PdfServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    PdfServiceBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return ai.visma.ssn.pdfservice.v1.PdfserviceProto.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("PdfService");
    }
  }

  private static final class PdfServiceFileDescriptorSupplier
      extends PdfServiceBaseDescriptorSupplier {
    PdfServiceFileDescriptorSupplier() {}
  }

  private static final class PdfServiceMethodDescriptorSupplier
      extends PdfServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    PdfServiceMethodDescriptorSupplier(String methodName) {
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
      synchronized (PdfServiceGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new PdfServiceFileDescriptorSupplier())
              .addMethod(getInternalRasterizePdfMethod())
              .addMethod(getRasterizePdfMethod())
              .build();
        }
      }
    }
    return result;
  }
}
