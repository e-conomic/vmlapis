package ai.visma.ssn.mlservice.v2;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.70.0)",
    comments = "Source: ssn/mlservice/v2/mlservice.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class PurchaseLinesGrpc {

  private PurchaseLinesGrpc() {}

  public static final java.lang.String SERVICE_NAME = "ssn.mlservice.v2.PurchaseLines";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<ai.visma.ssn.mlservice.v2.PurchaseLinesRequest,
      ai.visma.ssn.mlservice.v2.PurchaseLinesResponse> getInferPurchaseLinesMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "InferPurchaseLines",
      requestType = ai.visma.ssn.mlservice.v2.PurchaseLinesRequest.class,
      responseType = ai.visma.ssn.mlservice.v2.PurchaseLinesResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<ai.visma.ssn.mlservice.v2.PurchaseLinesRequest,
      ai.visma.ssn.mlservice.v2.PurchaseLinesResponse> getInferPurchaseLinesMethod() {
    io.grpc.MethodDescriptor<ai.visma.ssn.mlservice.v2.PurchaseLinesRequest, ai.visma.ssn.mlservice.v2.PurchaseLinesResponse> getInferPurchaseLinesMethod;
    if ((getInferPurchaseLinesMethod = PurchaseLinesGrpc.getInferPurchaseLinesMethod) == null) {
      synchronized (PurchaseLinesGrpc.class) {
        if ((getInferPurchaseLinesMethod = PurchaseLinesGrpc.getInferPurchaseLinesMethod) == null) {
          PurchaseLinesGrpc.getInferPurchaseLinesMethod = getInferPurchaseLinesMethod =
              io.grpc.MethodDescriptor.<ai.visma.ssn.mlservice.v2.PurchaseLinesRequest, ai.visma.ssn.mlservice.v2.PurchaseLinesResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "InferPurchaseLines"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ai.visma.ssn.mlservice.v2.PurchaseLinesRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ai.visma.ssn.mlservice.v2.PurchaseLinesResponse.getDefaultInstance()))
              .setSchemaDescriptor(new PurchaseLinesMethodDescriptorSupplier("InferPurchaseLines"))
              .build();
        }
      }
    }
    return getInferPurchaseLinesMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static PurchaseLinesStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<PurchaseLinesStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<PurchaseLinesStub>() {
        @java.lang.Override
        public PurchaseLinesStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new PurchaseLinesStub(channel, callOptions);
        }
      };
    return PurchaseLinesStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports all types of calls on the service
   */
  public static PurchaseLinesBlockingV2Stub newBlockingV2Stub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<PurchaseLinesBlockingV2Stub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<PurchaseLinesBlockingV2Stub>() {
        @java.lang.Override
        public PurchaseLinesBlockingV2Stub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new PurchaseLinesBlockingV2Stub(channel, callOptions);
        }
      };
    return PurchaseLinesBlockingV2Stub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static PurchaseLinesBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<PurchaseLinesBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<PurchaseLinesBlockingStub>() {
        @java.lang.Override
        public PurchaseLinesBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new PurchaseLinesBlockingStub(channel, callOptions);
        }
      };
    return PurchaseLinesBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static PurchaseLinesFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<PurchaseLinesFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<PurchaseLinesFutureStub>() {
        @java.lang.Override
        public PurchaseLinesFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new PurchaseLinesFutureStub(channel, callOptions);
        }
      };
    return PurchaseLinesFutureStub.newStub(factory, channel);
  }

  /**
   */
  public interface AsyncService {

    /**
     */
    default void inferPurchaseLines(ai.visma.ssn.mlservice.v2.PurchaseLinesRequest request,
        io.grpc.stub.StreamObserver<ai.visma.ssn.mlservice.v2.PurchaseLinesResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getInferPurchaseLinesMethod(), responseObserver);
    }
  }

  /**
   * Base class for the server implementation of the service PurchaseLines.
   */
  public static abstract class PurchaseLinesImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return PurchaseLinesGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service PurchaseLines.
   */
  public static final class PurchaseLinesStub
      extends io.grpc.stub.AbstractAsyncStub<PurchaseLinesStub> {
    private PurchaseLinesStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected PurchaseLinesStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new PurchaseLinesStub(channel, callOptions);
    }

    /**
     */
    public void inferPurchaseLines(ai.visma.ssn.mlservice.v2.PurchaseLinesRequest request,
        io.grpc.stub.StreamObserver<ai.visma.ssn.mlservice.v2.PurchaseLinesResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getInferPurchaseLinesMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service PurchaseLines.
   */
  public static final class PurchaseLinesBlockingV2Stub
      extends io.grpc.stub.AbstractBlockingStub<PurchaseLinesBlockingV2Stub> {
    private PurchaseLinesBlockingV2Stub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected PurchaseLinesBlockingV2Stub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new PurchaseLinesBlockingV2Stub(channel, callOptions);
    }

    /**
     */
    public ai.visma.ssn.mlservice.v2.PurchaseLinesResponse inferPurchaseLines(ai.visma.ssn.mlservice.v2.PurchaseLinesRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getInferPurchaseLinesMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do limited synchronous rpc calls to service PurchaseLines.
   */
  public static final class PurchaseLinesBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<PurchaseLinesBlockingStub> {
    private PurchaseLinesBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected PurchaseLinesBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new PurchaseLinesBlockingStub(channel, callOptions);
    }

    /**
     */
    public ai.visma.ssn.mlservice.v2.PurchaseLinesResponse inferPurchaseLines(ai.visma.ssn.mlservice.v2.PurchaseLinesRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getInferPurchaseLinesMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service PurchaseLines.
   */
  public static final class PurchaseLinesFutureStub
      extends io.grpc.stub.AbstractFutureStub<PurchaseLinesFutureStub> {
    private PurchaseLinesFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected PurchaseLinesFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new PurchaseLinesFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<ai.visma.ssn.mlservice.v2.PurchaseLinesResponse> inferPurchaseLines(
        ai.visma.ssn.mlservice.v2.PurchaseLinesRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getInferPurchaseLinesMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_INFER_PURCHASE_LINES = 0;

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
        case METHODID_INFER_PURCHASE_LINES:
          serviceImpl.inferPurchaseLines((ai.visma.ssn.mlservice.v2.PurchaseLinesRequest) request,
              (io.grpc.stub.StreamObserver<ai.visma.ssn.mlservice.v2.PurchaseLinesResponse>) responseObserver);
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
          getInferPurchaseLinesMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              ai.visma.ssn.mlservice.v2.PurchaseLinesRequest,
              ai.visma.ssn.mlservice.v2.PurchaseLinesResponse>(
                service, METHODID_INFER_PURCHASE_LINES)))
        .build();
  }

  private static abstract class PurchaseLinesBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    PurchaseLinesBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return ai.visma.ssn.mlservice.v2.MlserviceProto.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("PurchaseLines");
    }
  }

  private static final class PurchaseLinesFileDescriptorSupplier
      extends PurchaseLinesBaseDescriptorSupplier {
    PurchaseLinesFileDescriptorSupplier() {}
  }

  private static final class PurchaseLinesMethodDescriptorSupplier
      extends PurchaseLinesBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final java.lang.String methodName;

    PurchaseLinesMethodDescriptorSupplier(java.lang.String methodName) {
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
      synchronized (PurchaseLinesGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new PurchaseLinesFileDescriptorSupplier())
              .addMethod(getInferPurchaseLinesMethod())
              .build();
        }
      }
    }
    return result;
  }
}
