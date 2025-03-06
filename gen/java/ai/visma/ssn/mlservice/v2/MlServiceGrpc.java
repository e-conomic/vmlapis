package ai.visma.ssn.mlservice.v2;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 * <pre>
 * Feature Generation Service
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.70.0)",
    comments = "Source: ssn/mlservice/v2/mlservice.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class MlServiceGrpc {

  private MlServiceGrpc() {}

  public static final java.lang.String SERVICE_NAME = "ssn.mlservice.v2.MlService";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<ai.visma.ssn.mlservice.v2.FeatureGenRequest,
      ai.visma.ssn.mlservice.v2.FeatureGenResponse> getFeatureGenMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "FeatureGen",
      requestType = ai.visma.ssn.mlservice.v2.FeatureGenRequest.class,
      responseType = ai.visma.ssn.mlservice.v2.FeatureGenResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<ai.visma.ssn.mlservice.v2.FeatureGenRequest,
      ai.visma.ssn.mlservice.v2.FeatureGenResponse> getFeatureGenMethod() {
    io.grpc.MethodDescriptor<ai.visma.ssn.mlservice.v2.FeatureGenRequest, ai.visma.ssn.mlservice.v2.FeatureGenResponse> getFeatureGenMethod;
    if ((getFeatureGenMethod = MlServiceGrpc.getFeatureGenMethod) == null) {
      synchronized (MlServiceGrpc.class) {
        if ((getFeatureGenMethod = MlServiceGrpc.getFeatureGenMethod) == null) {
          MlServiceGrpc.getFeatureGenMethod = getFeatureGenMethod =
              io.grpc.MethodDescriptor.<ai.visma.ssn.mlservice.v2.FeatureGenRequest, ai.visma.ssn.mlservice.v2.FeatureGenResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "FeatureGen"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ai.visma.ssn.mlservice.v2.FeatureGenRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ai.visma.ssn.mlservice.v2.FeatureGenResponse.getDefaultInstance()))
              .setSchemaDescriptor(new MlServiceMethodDescriptorSupplier("FeatureGen"))
              .build();
        }
      }
    }
    return getFeatureGenMethod;
  }

  private static volatile io.grpc.MethodDescriptor<ai.visma.ssn.mlservice.v2.PredictRequest,
      ai.visma.ssn.mlservice.v2.PredictResponse> getPredictMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Predict",
      requestType = ai.visma.ssn.mlservice.v2.PredictRequest.class,
      responseType = ai.visma.ssn.mlservice.v2.PredictResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<ai.visma.ssn.mlservice.v2.PredictRequest,
      ai.visma.ssn.mlservice.v2.PredictResponse> getPredictMethod() {
    io.grpc.MethodDescriptor<ai.visma.ssn.mlservice.v2.PredictRequest, ai.visma.ssn.mlservice.v2.PredictResponse> getPredictMethod;
    if ((getPredictMethod = MlServiceGrpc.getPredictMethod) == null) {
      synchronized (MlServiceGrpc.class) {
        if ((getPredictMethod = MlServiceGrpc.getPredictMethod) == null) {
          MlServiceGrpc.getPredictMethod = getPredictMethod =
              io.grpc.MethodDescriptor.<ai.visma.ssn.mlservice.v2.PredictRequest, ai.visma.ssn.mlservice.v2.PredictResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Predict"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ai.visma.ssn.mlservice.v2.PredictRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ai.visma.ssn.mlservice.v2.PredictResponse.getDefaultInstance()))
              .setSchemaDescriptor(new MlServiceMethodDescriptorSupplier("Predict"))
              .build();
        }
      }
    }
    return getPredictMethod;
  }

  private static volatile io.grpc.MethodDescriptor<ai.visma.ssn.mlservice.v2.FeatureGenPredictRequest,
      ai.visma.ssn.mlservice.v2.PredictResponse> getFeatureGenPredictMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "FeatureGenPredict",
      requestType = ai.visma.ssn.mlservice.v2.FeatureGenPredictRequest.class,
      responseType = ai.visma.ssn.mlservice.v2.PredictResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<ai.visma.ssn.mlservice.v2.FeatureGenPredictRequest,
      ai.visma.ssn.mlservice.v2.PredictResponse> getFeatureGenPredictMethod() {
    io.grpc.MethodDescriptor<ai.visma.ssn.mlservice.v2.FeatureGenPredictRequest, ai.visma.ssn.mlservice.v2.PredictResponse> getFeatureGenPredictMethod;
    if ((getFeatureGenPredictMethod = MlServiceGrpc.getFeatureGenPredictMethod) == null) {
      synchronized (MlServiceGrpc.class) {
        if ((getFeatureGenPredictMethod = MlServiceGrpc.getFeatureGenPredictMethod) == null) {
          MlServiceGrpc.getFeatureGenPredictMethod = getFeatureGenPredictMethod =
              io.grpc.MethodDescriptor.<ai.visma.ssn.mlservice.v2.FeatureGenPredictRequest, ai.visma.ssn.mlservice.v2.PredictResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "FeatureGenPredict"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ai.visma.ssn.mlservice.v2.FeatureGenPredictRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ai.visma.ssn.mlservice.v2.PredictResponse.getDefaultInstance()))
              .setSchemaDescriptor(new MlServiceMethodDescriptorSupplier("FeatureGenPredict"))
              .build();
        }
      }
    }
    return getFeatureGenPredictMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static MlServiceStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<MlServiceStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<MlServiceStub>() {
        @java.lang.Override
        public MlServiceStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new MlServiceStub(channel, callOptions);
        }
      };
    return MlServiceStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports all types of calls on the service
   */
  public static MlServiceBlockingV2Stub newBlockingV2Stub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<MlServiceBlockingV2Stub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<MlServiceBlockingV2Stub>() {
        @java.lang.Override
        public MlServiceBlockingV2Stub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new MlServiceBlockingV2Stub(channel, callOptions);
        }
      };
    return MlServiceBlockingV2Stub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static MlServiceBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<MlServiceBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<MlServiceBlockingStub>() {
        @java.lang.Override
        public MlServiceBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new MlServiceBlockingStub(channel, callOptions);
        }
      };
    return MlServiceBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static MlServiceFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<MlServiceFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<MlServiceFutureStub>() {
        @java.lang.Override
        public MlServiceFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new MlServiceFutureStub(channel, callOptions);
        }
      };
    return MlServiceFutureStub.newStub(factory, channel);
  }

  /**
   * <pre>
   * Feature Generation Service
   * </pre>
   */
  public interface AsyncService {

    /**
     */
    default void featureGen(ai.visma.ssn.mlservice.v2.FeatureGenRequest request,
        io.grpc.stub.StreamObserver<ai.visma.ssn.mlservice.v2.FeatureGenResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getFeatureGenMethod(), responseObserver);
    }

    /**
     */
    default void predict(ai.visma.ssn.mlservice.v2.PredictRequest request,
        io.grpc.stub.StreamObserver<ai.visma.ssn.mlservice.v2.PredictResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getPredictMethod(), responseObserver);
    }

    /**
     * <pre>
     * Convinienve method
     * </pre>
     */
    default void featureGenPredict(ai.visma.ssn.mlservice.v2.FeatureGenPredictRequest request,
        io.grpc.stub.StreamObserver<ai.visma.ssn.mlservice.v2.PredictResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getFeatureGenPredictMethod(), responseObserver);
    }
  }

  /**
   * Base class for the server implementation of the service MlService.
   * <pre>
   * Feature Generation Service
   * </pre>
   */
  public static abstract class MlServiceImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return MlServiceGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service MlService.
   * <pre>
   * Feature Generation Service
   * </pre>
   */
  public static final class MlServiceStub
      extends io.grpc.stub.AbstractAsyncStub<MlServiceStub> {
    private MlServiceStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected MlServiceStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new MlServiceStub(channel, callOptions);
    }

    /**
     */
    public void featureGen(ai.visma.ssn.mlservice.v2.FeatureGenRequest request,
        io.grpc.stub.StreamObserver<ai.visma.ssn.mlservice.v2.FeatureGenResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getFeatureGenMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void predict(ai.visma.ssn.mlservice.v2.PredictRequest request,
        io.grpc.stub.StreamObserver<ai.visma.ssn.mlservice.v2.PredictResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getPredictMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Convinienve method
     * </pre>
     */
    public void featureGenPredict(ai.visma.ssn.mlservice.v2.FeatureGenPredictRequest request,
        io.grpc.stub.StreamObserver<ai.visma.ssn.mlservice.v2.PredictResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getFeatureGenPredictMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service MlService.
   * <pre>
   * Feature Generation Service
   * </pre>
   */
  public static final class MlServiceBlockingV2Stub
      extends io.grpc.stub.AbstractBlockingStub<MlServiceBlockingV2Stub> {
    private MlServiceBlockingV2Stub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected MlServiceBlockingV2Stub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new MlServiceBlockingV2Stub(channel, callOptions);
    }

    /**
     */
    public ai.visma.ssn.mlservice.v2.FeatureGenResponse featureGen(ai.visma.ssn.mlservice.v2.FeatureGenRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getFeatureGenMethod(), getCallOptions(), request);
    }

    /**
     */
    public ai.visma.ssn.mlservice.v2.PredictResponse predict(ai.visma.ssn.mlservice.v2.PredictRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getPredictMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Convinienve method
     * </pre>
     */
    public ai.visma.ssn.mlservice.v2.PredictResponse featureGenPredict(ai.visma.ssn.mlservice.v2.FeatureGenPredictRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getFeatureGenPredictMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do limited synchronous rpc calls to service MlService.
   * <pre>
   * Feature Generation Service
   * </pre>
   */
  public static final class MlServiceBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<MlServiceBlockingStub> {
    private MlServiceBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected MlServiceBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new MlServiceBlockingStub(channel, callOptions);
    }

    /**
     */
    public ai.visma.ssn.mlservice.v2.FeatureGenResponse featureGen(ai.visma.ssn.mlservice.v2.FeatureGenRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getFeatureGenMethod(), getCallOptions(), request);
    }

    /**
     */
    public ai.visma.ssn.mlservice.v2.PredictResponse predict(ai.visma.ssn.mlservice.v2.PredictRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getPredictMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Convinienve method
     * </pre>
     */
    public ai.visma.ssn.mlservice.v2.PredictResponse featureGenPredict(ai.visma.ssn.mlservice.v2.FeatureGenPredictRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getFeatureGenPredictMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service MlService.
   * <pre>
   * Feature Generation Service
   * </pre>
   */
  public static final class MlServiceFutureStub
      extends io.grpc.stub.AbstractFutureStub<MlServiceFutureStub> {
    private MlServiceFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected MlServiceFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new MlServiceFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<ai.visma.ssn.mlservice.v2.FeatureGenResponse> featureGen(
        ai.visma.ssn.mlservice.v2.FeatureGenRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getFeatureGenMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<ai.visma.ssn.mlservice.v2.PredictResponse> predict(
        ai.visma.ssn.mlservice.v2.PredictRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getPredictMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Convinienve method
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<ai.visma.ssn.mlservice.v2.PredictResponse> featureGenPredict(
        ai.visma.ssn.mlservice.v2.FeatureGenPredictRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getFeatureGenPredictMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_FEATURE_GEN = 0;
  private static final int METHODID_PREDICT = 1;
  private static final int METHODID_FEATURE_GEN_PREDICT = 2;

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
        case METHODID_FEATURE_GEN:
          serviceImpl.featureGen((ai.visma.ssn.mlservice.v2.FeatureGenRequest) request,
              (io.grpc.stub.StreamObserver<ai.visma.ssn.mlservice.v2.FeatureGenResponse>) responseObserver);
          break;
        case METHODID_PREDICT:
          serviceImpl.predict((ai.visma.ssn.mlservice.v2.PredictRequest) request,
              (io.grpc.stub.StreamObserver<ai.visma.ssn.mlservice.v2.PredictResponse>) responseObserver);
          break;
        case METHODID_FEATURE_GEN_PREDICT:
          serviceImpl.featureGenPredict((ai.visma.ssn.mlservice.v2.FeatureGenPredictRequest) request,
              (io.grpc.stub.StreamObserver<ai.visma.ssn.mlservice.v2.PredictResponse>) responseObserver);
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
          getFeatureGenMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              ai.visma.ssn.mlservice.v2.FeatureGenRequest,
              ai.visma.ssn.mlservice.v2.FeatureGenResponse>(
                service, METHODID_FEATURE_GEN)))
        .addMethod(
          getPredictMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              ai.visma.ssn.mlservice.v2.PredictRequest,
              ai.visma.ssn.mlservice.v2.PredictResponse>(
                service, METHODID_PREDICT)))
        .addMethod(
          getFeatureGenPredictMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              ai.visma.ssn.mlservice.v2.FeatureGenPredictRequest,
              ai.visma.ssn.mlservice.v2.PredictResponse>(
                service, METHODID_FEATURE_GEN_PREDICT)))
        .build();
  }

  private static abstract class MlServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    MlServiceBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return ai.visma.ssn.mlservice.v2.MlserviceProto.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("MlService");
    }
  }

  private static final class MlServiceFileDescriptorSupplier
      extends MlServiceBaseDescriptorSupplier {
    MlServiceFileDescriptorSupplier() {}
  }

  private static final class MlServiceMethodDescriptorSupplier
      extends MlServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final java.lang.String methodName;

    MlServiceMethodDescriptorSupplier(java.lang.String methodName) {
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
      synchronized (MlServiceGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new MlServiceFileDescriptorSupplier())
              .addMethod(getFeatureGenMethod())
              .addMethod(getPredictMethod())
              .addMethod(getFeatureGenPredictMethod())
              .build();
        }
      }
    }
    return result;
  }
}
