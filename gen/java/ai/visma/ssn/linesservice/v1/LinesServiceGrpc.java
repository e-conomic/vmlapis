package ai.visma.ssn.linesservice.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.70.0)",
    comments = "Source: ssn/linesservice/v1/linesservice.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class LinesServiceGrpc {

  private LinesServiceGrpc() {}

  public static final java.lang.String SERVICE_NAME = "ssn.linesservice.v1.LinesService";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<ai.visma.ssn.linesservice.v1.LinesRequest,
      ai.visma.ssn.linesservice.v1.LinesResponse> getPredictMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Predict",
      requestType = ai.visma.ssn.linesservice.v1.LinesRequest.class,
      responseType = ai.visma.ssn.linesservice.v1.LinesResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<ai.visma.ssn.linesservice.v1.LinesRequest,
      ai.visma.ssn.linesservice.v1.LinesResponse> getPredictMethod() {
    io.grpc.MethodDescriptor<ai.visma.ssn.linesservice.v1.LinesRequest, ai.visma.ssn.linesservice.v1.LinesResponse> getPredictMethod;
    if ((getPredictMethod = LinesServiceGrpc.getPredictMethod) == null) {
      synchronized (LinesServiceGrpc.class) {
        if ((getPredictMethod = LinesServiceGrpc.getPredictMethod) == null) {
          LinesServiceGrpc.getPredictMethod = getPredictMethod =
              io.grpc.MethodDescriptor.<ai.visma.ssn.linesservice.v1.LinesRequest, ai.visma.ssn.linesservice.v1.LinesResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Predict"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ai.visma.ssn.linesservice.v1.LinesRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ai.visma.ssn.linesservice.v1.LinesResponse.getDefaultInstance()))
              .setSchemaDescriptor(new LinesServiceMethodDescriptorSupplier("Predict"))
              .build();
        }
      }
    }
    return getPredictMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static LinesServiceStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<LinesServiceStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<LinesServiceStub>() {
        @java.lang.Override
        public LinesServiceStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new LinesServiceStub(channel, callOptions);
        }
      };
    return LinesServiceStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports all types of calls on the service
   */
  public static LinesServiceBlockingV2Stub newBlockingV2Stub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<LinesServiceBlockingV2Stub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<LinesServiceBlockingV2Stub>() {
        @java.lang.Override
        public LinesServiceBlockingV2Stub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new LinesServiceBlockingV2Stub(channel, callOptions);
        }
      };
    return LinesServiceBlockingV2Stub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static LinesServiceBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<LinesServiceBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<LinesServiceBlockingStub>() {
        @java.lang.Override
        public LinesServiceBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new LinesServiceBlockingStub(channel, callOptions);
        }
      };
    return LinesServiceBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static LinesServiceFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<LinesServiceFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<LinesServiceFutureStub>() {
        @java.lang.Override
        public LinesServiceFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new LinesServiceFutureStub(channel, callOptions);
        }
      };
    return LinesServiceFutureStub.newStub(factory, channel);
  }

  /**
   */
  public interface AsyncService {

    /**
     */
    default void predict(ai.visma.ssn.linesservice.v1.LinesRequest request,
        io.grpc.stub.StreamObserver<ai.visma.ssn.linesservice.v1.LinesResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getPredictMethod(), responseObserver);
    }
  }

  /**
   * Base class for the server implementation of the service LinesService.
   */
  public static abstract class LinesServiceImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return LinesServiceGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service LinesService.
   */
  public static final class LinesServiceStub
      extends io.grpc.stub.AbstractAsyncStub<LinesServiceStub> {
    private LinesServiceStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected LinesServiceStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new LinesServiceStub(channel, callOptions);
    }

    /**
     */
    public void predict(ai.visma.ssn.linesservice.v1.LinesRequest request,
        io.grpc.stub.StreamObserver<ai.visma.ssn.linesservice.v1.LinesResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getPredictMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service LinesService.
   */
  public static final class LinesServiceBlockingV2Stub
      extends io.grpc.stub.AbstractBlockingStub<LinesServiceBlockingV2Stub> {
    private LinesServiceBlockingV2Stub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected LinesServiceBlockingV2Stub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new LinesServiceBlockingV2Stub(channel, callOptions);
    }

    /**
     */
    public ai.visma.ssn.linesservice.v1.LinesResponse predict(ai.visma.ssn.linesservice.v1.LinesRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getPredictMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do limited synchronous rpc calls to service LinesService.
   */
  public static final class LinesServiceBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<LinesServiceBlockingStub> {
    private LinesServiceBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected LinesServiceBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new LinesServiceBlockingStub(channel, callOptions);
    }

    /**
     */
    public ai.visma.ssn.linesservice.v1.LinesResponse predict(ai.visma.ssn.linesservice.v1.LinesRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getPredictMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service LinesService.
   */
  public static final class LinesServiceFutureStub
      extends io.grpc.stub.AbstractFutureStub<LinesServiceFutureStub> {
    private LinesServiceFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected LinesServiceFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new LinesServiceFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<ai.visma.ssn.linesservice.v1.LinesResponse> predict(
        ai.visma.ssn.linesservice.v1.LinesRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getPredictMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_PREDICT = 0;

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
        case METHODID_PREDICT:
          serviceImpl.predict((ai.visma.ssn.linesservice.v1.LinesRequest) request,
              (io.grpc.stub.StreamObserver<ai.visma.ssn.linesservice.v1.LinesResponse>) responseObserver);
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
          getPredictMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              ai.visma.ssn.linesservice.v1.LinesRequest,
              ai.visma.ssn.linesservice.v1.LinesResponse>(
                service, METHODID_PREDICT)))
        .build();
  }

  private static abstract class LinesServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    LinesServiceBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return ai.visma.ssn.linesservice.v1.LinesserviceProto.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("LinesService");
    }
  }

  private static final class LinesServiceFileDescriptorSupplier
      extends LinesServiceBaseDescriptorSupplier {
    LinesServiceFileDescriptorSupplier() {}
  }

  private static final class LinesServiceMethodDescriptorSupplier
      extends LinesServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final java.lang.String methodName;

    LinesServiceMethodDescriptorSupplier(java.lang.String methodName) {
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
      synchronized (LinesServiceGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new LinesServiceFileDescriptorSupplier())
              .addMethod(getPredictMethod())
              .build();
        }
      }
    }
    return result;
  }
}
