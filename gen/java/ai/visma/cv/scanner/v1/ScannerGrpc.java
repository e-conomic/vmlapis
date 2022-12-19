package ai.visma.cv.scanner.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.51.0)",
    comments = "Source: cv/scanner/v1/scanner.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class ScannerGrpc {

  private ScannerGrpc() {}

  public static final String SERVICE_NAME = "cv.scanner.v1.Scanner";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<ai.visma.cv.scanner.v1.ScanCVRequest,
      ai.visma.cv.scanner.v1.ScanCVResponse> getScanCVMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ScanCV",
      requestType = ai.visma.cv.scanner.v1.ScanCVRequest.class,
      responseType = ai.visma.cv.scanner.v1.ScanCVResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<ai.visma.cv.scanner.v1.ScanCVRequest,
      ai.visma.cv.scanner.v1.ScanCVResponse> getScanCVMethod() {
    io.grpc.MethodDescriptor<ai.visma.cv.scanner.v1.ScanCVRequest, ai.visma.cv.scanner.v1.ScanCVResponse> getScanCVMethod;
    if ((getScanCVMethod = ScannerGrpc.getScanCVMethod) == null) {
      synchronized (ScannerGrpc.class) {
        if ((getScanCVMethod = ScannerGrpc.getScanCVMethod) == null) {
          ScannerGrpc.getScanCVMethod = getScanCVMethod =
              io.grpc.MethodDescriptor.<ai.visma.cv.scanner.v1.ScanCVRequest, ai.visma.cv.scanner.v1.ScanCVResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ScanCV"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ai.visma.cv.scanner.v1.ScanCVRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ai.visma.cv.scanner.v1.ScanCVResponse.getDefaultInstance()))
              .setSchemaDescriptor(new ScannerMethodDescriptorSupplier("ScanCV"))
              .build();
        }
      }
    }
    return getScanCVMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static ScannerStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<ScannerStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<ScannerStub>() {
        @java.lang.Override
        public ScannerStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new ScannerStub(channel, callOptions);
        }
      };
    return ScannerStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static ScannerBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<ScannerBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<ScannerBlockingStub>() {
        @java.lang.Override
        public ScannerBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new ScannerBlockingStub(channel, callOptions);
        }
      };
    return ScannerBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static ScannerFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<ScannerFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<ScannerFutureStub>() {
        @java.lang.Override
        public ScannerFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new ScannerFutureStub(channel, callOptions);
        }
      };
    return ScannerFutureStub.newStub(factory, channel);
  }

  /**
   */
  public static abstract class ScannerImplBase implements io.grpc.BindableService {

    /**
     */
    public void scanCV(ai.visma.cv.scanner.v1.ScanCVRequest request,
        io.grpc.stub.StreamObserver<ai.visma.cv.scanner.v1.ScanCVResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getScanCVMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getScanCVMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                ai.visma.cv.scanner.v1.ScanCVRequest,
                ai.visma.cv.scanner.v1.ScanCVResponse>(
                  this, METHODID_SCAN_CV)))
          .build();
    }
  }

  /**
   */
  public static final class ScannerStub extends io.grpc.stub.AbstractAsyncStub<ScannerStub> {
    private ScannerStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ScannerStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new ScannerStub(channel, callOptions);
    }

    /**
     */
    public void scanCV(ai.visma.cv.scanner.v1.ScanCVRequest request,
        io.grpc.stub.StreamObserver<ai.visma.cv.scanner.v1.ScanCVResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getScanCVMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class ScannerBlockingStub extends io.grpc.stub.AbstractBlockingStub<ScannerBlockingStub> {
    private ScannerBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ScannerBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new ScannerBlockingStub(channel, callOptions);
    }

    /**
     */
    public ai.visma.cv.scanner.v1.ScanCVResponse scanCV(ai.visma.cv.scanner.v1.ScanCVRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getScanCVMethod(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class ScannerFutureStub extends io.grpc.stub.AbstractFutureStub<ScannerFutureStub> {
    private ScannerFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ScannerFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new ScannerFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<ai.visma.cv.scanner.v1.ScanCVResponse> scanCV(
        ai.visma.cv.scanner.v1.ScanCVRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getScanCVMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_SCAN_CV = 0;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final ScannerImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(ScannerImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_SCAN_CV:
          serviceImpl.scanCV((ai.visma.cv.scanner.v1.ScanCVRequest) request,
              (io.grpc.stub.StreamObserver<ai.visma.cv.scanner.v1.ScanCVResponse>) responseObserver);
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

  private static abstract class ScannerBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    ScannerBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return ai.visma.cv.scanner.v1.ScannerProto.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Scanner");
    }
  }

  private static final class ScannerFileDescriptorSupplier
      extends ScannerBaseDescriptorSupplier {
    ScannerFileDescriptorSupplier() {}
  }

  private static final class ScannerMethodDescriptorSupplier
      extends ScannerBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    ScannerMethodDescriptorSupplier(String methodName) {
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
      synchronized (ScannerGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new ScannerFileDescriptorSupplier())
              .addMethod(getScanCVMethod())
              .build();
        }
      }
    }
    return result;
  }
}
