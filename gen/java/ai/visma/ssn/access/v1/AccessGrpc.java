package ai.visma.ssn.access.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.51.0)",
    comments = "Source: ssn/access/v1/access.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class AccessGrpc {

  private AccessGrpc() {}

  public static final String SERVICE_NAME = "ssn.access.v1.Access";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<ai.visma.ssn.access.v1.ValetKeyRequest,
      ai.visma.ssn.access.v1.ValetKeyResponse> getGenerateValetKeyMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GenerateValetKey",
      requestType = ai.visma.ssn.access.v1.ValetKeyRequest.class,
      responseType = ai.visma.ssn.access.v1.ValetKeyResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<ai.visma.ssn.access.v1.ValetKeyRequest,
      ai.visma.ssn.access.v1.ValetKeyResponse> getGenerateValetKeyMethod() {
    io.grpc.MethodDescriptor<ai.visma.ssn.access.v1.ValetKeyRequest, ai.visma.ssn.access.v1.ValetKeyResponse> getGenerateValetKeyMethod;
    if ((getGenerateValetKeyMethod = AccessGrpc.getGenerateValetKeyMethod) == null) {
      synchronized (AccessGrpc.class) {
        if ((getGenerateValetKeyMethod = AccessGrpc.getGenerateValetKeyMethod) == null) {
          AccessGrpc.getGenerateValetKeyMethod = getGenerateValetKeyMethod =
              io.grpc.MethodDescriptor.<ai.visma.ssn.access.v1.ValetKeyRequest, ai.visma.ssn.access.v1.ValetKeyResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GenerateValetKey"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ai.visma.ssn.access.v1.ValetKeyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ai.visma.ssn.access.v1.ValetKeyResponse.getDefaultInstance()))
              .setSchemaDescriptor(new AccessMethodDescriptorSupplier("GenerateValetKey"))
              .build();
        }
      }
    }
    return getGenerateValetKeyMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static AccessStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<AccessStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<AccessStub>() {
        @java.lang.Override
        public AccessStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new AccessStub(channel, callOptions);
        }
      };
    return AccessStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static AccessBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<AccessBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<AccessBlockingStub>() {
        @java.lang.Override
        public AccessBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new AccessBlockingStub(channel, callOptions);
        }
      };
    return AccessBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static AccessFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<AccessFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<AccessFutureStub>() {
        @java.lang.Override
        public AccessFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new AccessFutureStub(channel, callOptions);
        }
      };
    return AccessFutureStub.newStub(factory, channel);
  }

  /**
   */
  public static abstract class AccessImplBase implements io.grpc.BindableService {

    /**
     */
    public void generateValetKey(ai.visma.ssn.access.v1.ValetKeyRequest request,
        io.grpc.stub.StreamObserver<ai.visma.ssn.access.v1.ValetKeyResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGenerateValetKeyMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getGenerateValetKeyMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                ai.visma.ssn.access.v1.ValetKeyRequest,
                ai.visma.ssn.access.v1.ValetKeyResponse>(
                  this, METHODID_GENERATE_VALET_KEY)))
          .build();
    }
  }

  /**
   */
  public static final class AccessStub extends io.grpc.stub.AbstractAsyncStub<AccessStub> {
    private AccessStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected AccessStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new AccessStub(channel, callOptions);
    }

    /**
     */
    public void generateValetKey(ai.visma.ssn.access.v1.ValetKeyRequest request,
        io.grpc.stub.StreamObserver<ai.visma.ssn.access.v1.ValetKeyResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGenerateValetKeyMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class AccessBlockingStub extends io.grpc.stub.AbstractBlockingStub<AccessBlockingStub> {
    private AccessBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected AccessBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new AccessBlockingStub(channel, callOptions);
    }

    /**
     */
    public ai.visma.ssn.access.v1.ValetKeyResponse generateValetKey(ai.visma.ssn.access.v1.ValetKeyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGenerateValetKeyMethod(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class AccessFutureStub extends io.grpc.stub.AbstractFutureStub<AccessFutureStub> {
    private AccessFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected AccessFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new AccessFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<ai.visma.ssn.access.v1.ValetKeyResponse> generateValetKey(
        ai.visma.ssn.access.v1.ValetKeyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGenerateValetKeyMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_GENERATE_VALET_KEY = 0;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final AccessImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(AccessImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_GENERATE_VALET_KEY:
          serviceImpl.generateValetKey((ai.visma.ssn.access.v1.ValetKeyRequest) request,
              (io.grpc.stub.StreamObserver<ai.visma.ssn.access.v1.ValetKeyResponse>) responseObserver);
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

  private static abstract class AccessBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    AccessBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return ai.visma.ssn.access.v1.AccessProto.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Access");
    }
  }

  private static final class AccessFileDescriptorSupplier
      extends AccessBaseDescriptorSupplier {
    AccessFileDescriptorSupplier() {}
  }

  private static final class AccessMethodDescriptorSupplier
      extends AccessBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    AccessMethodDescriptorSupplier(String methodName) {
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
      synchronized (AccessGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new AccessFileDescriptorSupplier())
              .addMethod(getGenerateValetKeyMethod())
              .build();
        }
      }
    }
    return result;
  }
}
