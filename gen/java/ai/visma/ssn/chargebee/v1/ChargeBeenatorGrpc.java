package ai.visma.ssn.chargebee.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 * <pre>
 * :D
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.51.0)",
    comments = "Source: ssn/chargebee/v1/chargebee.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class ChargeBeenatorGrpc {

  private ChargeBeenatorGrpc() {}

  public static final String SERVICE_NAME = "ssn.chargebee.v1.ChargeBeenator";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<ai.visma.ssn.chargebee.v1.ChargebeeConnectionRequest,
      ai.visma.ssn.chargebee.v1.ChargebeeConnectionResponse> getConnectMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Connect",
      requestType = ai.visma.ssn.chargebee.v1.ChargebeeConnectionRequest.class,
      responseType = ai.visma.ssn.chargebee.v1.ChargebeeConnectionResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<ai.visma.ssn.chargebee.v1.ChargebeeConnectionRequest,
      ai.visma.ssn.chargebee.v1.ChargebeeConnectionResponse> getConnectMethod() {
    io.grpc.MethodDescriptor<ai.visma.ssn.chargebee.v1.ChargebeeConnectionRequest, ai.visma.ssn.chargebee.v1.ChargebeeConnectionResponse> getConnectMethod;
    if ((getConnectMethod = ChargeBeenatorGrpc.getConnectMethod) == null) {
      synchronized (ChargeBeenatorGrpc.class) {
        if ((getConnectMethod = ChargeBeenatorGrpc.getConnectMethod) == null) {
          ChargeBeenatorGrpc.getConnectMethod = getConnectMethod =
              io.grpc.MethodDescriptor.<ai.visma.ssn.chargebee.v1.ChargebeeConnectionRequest, ai.visma.ssn.chargebee.v1.ChargebeeConnectionResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Connect"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ai.visma.ssn.chargebee.v1.ChargebeeConnectionRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ai.visma.ssn.chargebee.v1.ChargebeeConnectionResponse.getDefaultInstance()))
              .setSchemaDescriptor(new ChargeBeenatorMethodDescriptorSupplier("Connect"))
              .build();
        }
      }
    }
    return getConnectMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static ChargeBeenatorStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<ChargeBeenatorStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<ChargeBeenatorStub>() {
        @java.lang.Override
        public ChargeBeenatorStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new ChargeBeenatorStub(channel, callOptions);
        }
      };
    return ChargeBeenatorStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static ChargeBeenatorBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<ChargeBeenatorBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<ChargeBeenatorBlockingStub>() {
        @java.lang.Override
        public ChargeBeenatorBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new ChargeBeenatorBlockingStub(channel, callOptions);
        }
      };
    return ChargeBeenatorBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static ChargeBeenatorFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<ChargeBeenatorFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<ChargeBeenatorFutureStub>() {
        @java.lang.Override
        public ChargeBeenatorFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new ChargeBeenatorFutureStub(channel, callOptions);
        }
      };
    return ChargeBeenatorFutureStub.newStub(factory, channel);
  }

  /**
   * <pre>
   * :D
   * </pre>
   */
  public static abstract class ChargeBeenatorImplBase implements io.grpc.BindableService {

    /**
     */
    public void connect(ai.visma.ssn.chargebee.v1.ChargebeeConnectionRequest request,
        io.grpc.stub.StreamObserver<ai.visma.ssn.chargebee.v1.ChargebeeConnectionResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getConnectMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getConnectMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                ai.visma.ssn.chargebee.v1.ChargebeeConnectionRequest,
                ai.visma.ssn.chargebee.v1.ChargebeeConnectionResponse>(
                  this, METHODID_CONNECT)))
          .build();
    }
  }

  /**
   * <pre>
   * :D
   * </pre>
   */
  public static final class ChargeBeenatorStub extends io.grpc.stub.AbstractAsyncStub<ChargeBeenatorStub> {
    private ChargeBeenatorStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ChargeBeenatorStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new ChargeBeenatorStub(channel, callOptions);
    }

    /**
     */
    public void connect(ai.visma.ssn.chargebee.v1.ChargebeeConnectionRequest request,
        io.grpc.stub.StreamObserver<ai.visma.ssn.chargebee.v1.ChargebeeConnectionResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getConnectMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * <pre>
   * :D
   * </pre>
   */
  public static final class ChargeBeenatorBlockingStub extends io.grpc.stub.AbstractBlockingStub<ChargeBeenatorBlockingStub> {
    private ChargeBeenatorBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ChargeBeenatorBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new ChargeBeenatorBlockingStub(channel, callOptions);
    }

    /**
     */
    public ai.visma.ssn.chargebee.v1.ChargebeeConnectionResponse connect(ai.visma.ssn.chargebee.v1.ChargebeeConnectionRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getConnectMethod(), getCallOptions(), request);
    }
  }

  /**
   * <pre>
   * :D
   * </pre>
   */
  public static final class ChargeBeenatorFutureStub extends io.grpc.stub.AbstractFutureStub<ChargeBeenatorFutureStub> {
    private ChargeBeenatorFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ChargeBeenatorFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new ChargeBeenatorFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<ai.visma.ssn.chargebee.v1.ChargebeeConnectionResponse> connect(
        ai.visma.ssn.chargebee.v1.ChargebeeConnectionRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getConnectMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_CONNECT = 0;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final ChargeBeenatorImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(ChargeBeenatorImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_CONNECT:
          serviceImpl.connect((ai.visma.ssn.chargebee.v1.ChargebeeConnectionRequest) request,
              (io.grpc.stub.StreamObserver<ai.visma.ssn.chargebee.v1.ChargebeeConnectionResponse>) responseObserver);
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

  private static abstract class ChargeBeenatorBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    ChargeBeenatorBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return ai.visma.ssn.chargebee.v1.ChargebeeProto.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("ChargeBeenator");
    }
  }

  private static final class ChargeBeenatorFileDescriptorSupplier
      extends ChargeBeenatorBaseDescriptorSupplier {
    ChargeBeenatorFileDescriptorSupplier() {}
  }

  private static final class ChargeBeenatorMethodDescriptorSupplier
      extends ChargeBeenatorBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    ChargeBeenatorMethodDescriptorSupplier(String methodName) {
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
      synchronized (ChargeBeenatorGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new ChargeBeenatorFileDescriptorSupplier())
              .addMethod(getConnectMethod())
              .build();
        }
      }
    }
    return result;
  }
}
