package ai.visma.asgt.modelregistry.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.70.0)",
    comments = "Source: asgt/modelregistry/v1/model_registry.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class ModelRegistryGrpc {

  private ModelRegistryGrpc() {}

  public static final java.lang.String SERVICE_NAME = "asgt.modelregistry.v1.ModelRegistry";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<ai.visma.asgt.modelregistry.v1.RegisterModelRequest,
      com.google.protobuf.Empty> getRegisterModelMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "RegisterModel",
      requestType = ai.visma.asgt.modelregistry.v1.RegisterModelRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<ai.visma.asgt.modelregistry.v1.RegisterModelRequest,
      com.google.protobuf.Empty> getRegisterModelMethod() {
    io.grpc.MethodDescriptor<ai.visma.asgt.modelregistry.v1.RegisterModelRequest, com.google.protobuf.Empty> getRegisterModelMethod;
    if ((getRegisterModelMethod = ModelRegistryGrpc.getRegisterModelMethod) == null) {
      synchronized (ModelRegistryGrpc.class) {
        if ((getRegisterModelMethod = ModelRegistryGrpc.getRegisterModelMethod) == null) {
          ModelRegistryGrpc.getRegisterModelMethod = getRegisterModelMethod =
              io.grpc.MethodDescriptor.<ai.visma.asgt.modelregistry.v1.RegisterModelRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "RegisterModel"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ai.visma.asgt.modelregistry.v1.RegisterModelRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new ModelRegistryMethodDescriptorSupplier("RegisterModel"))
              .build();
        }
      }
    }
    return getRegisterModelMethod;
  }

  private static volatile io.grpc.MethodDescriptor<ai.visma.asgt.modelregistry.v1.GetCurrentModelRequest,
      ai.visma.asgt.modelregistry.v1.GetCurrentModelResponse> getGetCurrentModelMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetCurrentModel",
      requestType = ai.visma.asgt.modelregistry.v1.GetCurrentModelRequest.class,
      responseType = ai.visma.asgt.modelregistry.v1.GetCurrentModelResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<ai.visma.asgt.modelregistry.v1.GetCurrentModelRequest,
      ai.visma.asgt.modelregistry.v1.GetCurrentModelResponse> getGetCurrentModelMethod() {
    io.grpc.MethodDescriptor<ai.visma.asgt.modelregistry.v1.GetCurrentModelRequest, ai.visma.asgt.modelregistry.v1.GetCurrentModelResponse> getGetCurrentModelMethod;
    if ((getGetCurrentModelMethod = ModelRegistryGrpc.getGetCurrentModelMethod) == null) {
      synchronized (ModelRegistryGrpc.class) {
        if ((getGetCurrentModelMethod = ModelRegistryGrpc.getGetCurrentModelMethod) == null) {
          ModelRegistryGrpc.getGetCurrentModelMethod = getGetCurrentModelMethod =
              io.grpc.MethodDescriptor.<ai.visma.asgt.modelregistry.v1.GetCurrentModelRequest, ai.visma.asgt.modelregistry.v1.GetCurrentModelResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetCurrentModel"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ai.visma.asgt.modelregistry.v1.GetCurrentModelRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ai.visma.asgt.modelregistry.v1.GetCurrentModelResponse.getDefaultInstance()))
              .setSchemaDescriptor(new ModelRegistryMethodDescriptorSupplier("GetCurrentModel"))
              .build();
        }
      }
    }
    return getGetCurrentModelMethod;
  }

  private static volatile io.grpc.MethodDescriptor<ai.visma.asgt.modelregistry.v1.GetCurrentModelRequest,
      ai.visma.asgt.modelregistry.v1.GetCurrentModelResponse> getGetCurrentFullModelMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetCurrentFullModel",
      requestType = ai.visma.asgt.modelregistry.v1.GetCurrentModelRequest.class,
      responseType = ai.visma.asgt.modelregistry.v1.GetCurrentModelResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<ai.visma.asgt.modelregistry.v1.GetCurrentModelRequest,
      ai.visma.asgt.modelregistry.v1.GetCurrentModelResponse> getGetCurrentFullModelMethod() {
    io.grpc.MethodDescriptor<ai.visma.asgt.modelregistry.v1.GetCurrentModelRequest, ai.visma.asgt.modelregistry.v1.GetCurrentModelResponse> getGetCurrentFullModelMethod;
    if ((getGetCurrentFullModelMethod = ModelRegistryGrpc.getGetCurrentFullModelMethod) == null) {
      synchronized (ModelRegistryGrpc.class) {
        if ((getGetCurrentFullModelMethod = ModelRegistryGrpc.getGetCurrentFullModelMethod) == null) {
          ModelRegistryGrpc.getGetCurrentFullModelMethod = getGetCurrentFullModelMethod =
              io.grpc.MethodDescriptor.<ai.visma.asgt.modelregistry.v1.GetCurrentModelRequest, ai.visma.asgt.modelregistry.v1.GetCurrentModelResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetCurrentFullModel"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ai.visma.asgt.modelregistry.v1.GetCurrentModelRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ai.visma.asgt.modelregistry.v1.GetCurrentModelResponse.getDefaultInstance()))
              .setSchemaDescriptor(new ModelRegistryMethodDescriptorSupplier("GetCurrentFullModel"))
              .build();
        }
      }
    }
    return getGetCurrentFullModelMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static ModelRegistryStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<ModelRegistryStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<ModelRegistryStub>() {
        @java.lang.Override
        public ModelRegistryStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new ModelRegistryStub(channel, callOptions);
        }
      };
    return ModelRegistryStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports all types of calls on the service
   */
  public static ModelRegistryBlockingV2Stub newBlockingV2Stub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<ModelRegistryBlockingV2Stub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<ModelRegistryBlockingV2Stub>() {
        @java.lang.Override
        public ModelRegistryBlockingV2Stub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new ModelRegistryBlockingV2Stub(channel, callOptions);
        }
      };
    return ModelRegistryBlockingV2Stub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static ModelRegistryBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<ModelRegistryBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<ModelRegistryBlockingStub>() {
        @java.lang.Override
        public ModelRegistryBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new ModelRegistryBlockingStub(channel, callOptions);
        }
      };
    return ModelRegistryBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static ModelRegistryFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<ModelRegistryFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<ModelRegistryFutureStub>() {
        @java.lang.Override
        public ModelRegistryFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new ModelRegistryFutureStub(channel, callOptions);
        }
      };
    return ModelRegistryFutureStub.newStub(factory, channel);
  }

  /**
   */
  public interface AsyncService {

    /**
     * <pre>
     *  rpc DeleteModel (DeleteModelRequest) returns (google.protobuf.Empty);
     * </pre>
     */
    default void registerModel(ai.visma.asgt.modelregistry.v1.RegisterModelRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getRegisterModelMethod(), responseObserver);
    }

    /**
     */
    default void getCurrentModel(ai.visma.asgt.modelregistry.v1.GetCurrentModelRequest request,
        io.grpc.stub.StreamObserver<ai.visma.asgt.modelregistry.v1.GetCurrentModelResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetCurrentModelMethod(), responseObserver);
    }

    /**
     */
    default void getCurrentFullModel(ai.visma.asgt.modelregistry.v1.GetCurrentModelRequest request,
        io.grpc.stub.StreamObserver<ai.visma.asgt.modelregistry.v1.GetCurrentModelResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetCurrentFullModelMethod(), responseObserver);
    }
  }

  /**
   * Base class for the server implementation of the service ModelRegistry.
   */
  public static abstract class ModelRegistryImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return ModelRegistryGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service ModelRegistry.
   */
  public static final class ModelRegistryStub
      extends io.grpc.stub.AbstractAsyncStub<ModelRegistryStub> {
    private ModelRegistryStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ModelRegistryStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new ModelRegistryStub(channel, callOptions);
    }

    /**
     * <pre>
     *  rpc DeleteModel (DeleteModelRequest) returns (google.protobuf.Empty);
     * </pre>
     */
    public void registerModel(ai.visma.asgt.modelregistry.v1.RegisterModelRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getRegisterModelMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getCurrentModel(ai.visma.asgt.modelregistry.v1.GetCurrentModelRequest request,
        io.grpc.stub.StreamObserver<ai.visma.asgt.modelregistry.v1.GetCurrentModelResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetCurrentModelMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getCurrentFullModel(ai.visma.asgt.modelregistry.v1.GetCurrentModelRequest request,
        io.grpc.stub.StreamObserver<ai.visma.asgt.modelregistry.v1.GetCurrentModelResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetCurrentFullModelMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service ModelRegistry.
   */
  public static final class ModelRegistryBlockingV2Stub
      extends io.grpc.stub.AbstractBlockingStub<ModelRegistryBlockingV2Stub> {
    private ModelRegistryBlockingV2Stub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ModelRegistryBlockingV2Stub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new ModelRegistryBlockingV2Stub(channel, callOptions);
    }

    /**
     * <pre>
     *  rpc DeleteModel (DeleteModelRequest) returns (google.protobuf.Empty);
     * </pre>
     */
    public com.google.protobuf.Empty registerModel(ai.visma.asgt.modelregistry.v1.RegisterModelRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getRegisterModelMethod(), getCallOptions(), request);
    }

    /**
     */
    public ai.visma.asgt.modelregistry.v1.GetCurrentModelResponse getCurrentModel(ai.visma.asgt.modelregistry.v1.GetCurrentModelRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetCurrentModelMethod(), getCallOptions(), request);
    }

    /**
     */
    public ai.visma.asgt.modelregistry.v1.GetCurrentModelResponse getCurrentFullModel(ai.visma.asgt.modelregistry.v1.GetCurrentModelRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetCurrentFullModelMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do limited synchronous rpc calls to service ModelRegistry.
   */
  public static final class ModelRegistryBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<ModelRegistryBlockingStub> {
    private ModelRegistryBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ModelRegistryBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new ModelRegistryBlockingStub(channel, callOptions);
    }

    /**
     * <pre>
     *  rpc DeleteModel (DeleteModelRequest) returns (google.protobuf.Empty);
     * </pre>
     */
    public com.google.protobuf.Empty registerModel(ai.visma.asgt.modelregistry.v1.RegisterModelRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getRegisterModelMethod(), getCallOptions(), request);
    }

    /**
     */
    public ai.visma.asgt.modelregistry.v1.GetCurrentModelResponse getCurrentModel(ai.visma.asgt.modelregistry.v1.GetCurrentModelRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetCurrentModelMethod(), getCallOptions(), request);
    }

    /**
     */
    public ai.visma.asgt.modelregistry.v1.GetCurrentModelResponse getCurrentFullModel(ai.visma.asgt.modelregistry.v1.GetCurrentModelRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetCurrentFullModelMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service ModelRegistry.
   */
  public static final class ModelRegistryFutureStub
      extends io.grpc.stub.AbstractFutureStub<ModelRegistryFutureStub> {
    private ModelRegistryFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ModelRegistryFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new ModelRegistryFutureStub(channel, callOptions);
    }

    /**
     * <pre>
     *  rpc DeleteModel (DeleteModelRequest) returns (google.protobuf.Empty);
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> registerModel(
        ai.visma.asgt.modelregistry.v1.RegisterModelRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getRegisterModelMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<ai.visma.asgt.modelregistry.v1.GetCurrentModelResponse> getCurrentModel(
        ai.visma.asgt.modelregistry.v1.GetCurrentModelRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetCurrentModelMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<ai.visma.asgt.modelregistry.v1.GetCurrentModelResponse> getCurrentFullModel(
        ai.visma.asgt.modelregistry.v1.GetCurrentModelRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetCurrentFullModelMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_REGISTER_MODEL = 0;
  private static final int METHODID_GET_CURRENT_MODEL = 1;
  private static final int METHODID_GET_CURRENT_FULL_MODEL = 2;

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
        case METHODID_REGISTER_MODEL:
          serviceImpl.registerModel((ai.visma.asgt.modelregistry.v1.RegisterModelRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_GET_CURRENT_MODEL:
          serviceImpl.getCurrentModel((ai.visma.asgt.modelregistry.v1.GetCurrentModelRequest) request,
              (io.grpc.stub.StreamObserver<ai.visma.asgt.modelregistry.v1.GetCurrentModelResponse>) responseObserver);
          break;
        case METHODID_GET_CURRENT_FULL_MODEL:
          serviceImpl.getCurrentFullModel((ai.visma.asgt.modelregistry.v1.GetCurrentModelRequest) request,
              (io.grpc.stub.StreamObserver<ai.visma.asgt.modelregistry.v1.GetCurrentModelResponse>) responseObserver);
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
          getRegisterModelMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              ai.visma.asgt.modelregistry.v1.RegisterModelRequest,
              com.google.protobuf.Empty>(
                service, METHODID_REGISTER_MODEL)))
        .addMethod(
          getGetCurrentModelMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              ai.visma.asgt.modelregistry.v1.GetCurrentModelRequest,
              ai.visma.asgt.modelregistry.v1.GetCurrentModelResponse>(
                service, METHODID_GET_CURRENT_MODEL)))
        .addMethod(
          getGetCurrentFullModelMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              ai.visma.asgt.modelregistry.v1.GetCurrentModelRequest,
              ai.visma.asgt.modelregistry.v1.GetCurrentModelResponse>(
                service, METHODID_GET_CURRENT_FULL_MODEL)))
        .build();
  }

  private static abstract class ModelRegistryBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    ModelRegistryBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return ai.visma.asgt.modelregistry.v1.ModelRegistryProto.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("ModelRegistry");
    }
  }

  private static final class ModelRegistryFileDescriptorSupplier
      extends ModelRegistryBaseDescriptorSupplier {
    ModelRegistryFileDescriptorSupplier() {}
  }

  private static final class ModelRegistryMethodDescriptorSupplier
      extends ModelRegistryBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final java.lang.String methodName;

    ModelRegistryMethodDescriptorSupplier(java.lang.String methodName) {
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
      synchronized (ModelRegistryGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new ModelRegistryFileDescriptorSupplier())
              .addMethod(getRegisterModelMethod())
              .addMethod(getGetCurrentModelMethod())
              .addMethod(getGetCurrentFullModelMethod())
              .build();
        }
      }
    }
    return result;
  }
}
