package ai.visma.ssn.ocrservice.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 * <pre>
 * Interface exported by the server.
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.56.1)",
    comments = "Source: ssn/ocrservice/v1/ocrservice.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class OcrServiceGrpc {

  private OcrServiceGrpc() {}

  public static final String SERVICE_NAME = "ssn.ocrservice.v1.OcrService";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<ai.visma.ssn.ocrservice.v1.OcrScanImageRequest,
      ai.visma.ssn.ocrservice.v1.OcrScanImageResponse> getOcrScanImageMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "OcrScanImage",
      requestType = ai.visma.ssn.ocrservice.v1.OcrScanImageRequest.class,
      responseType = ai.visma.ssn.ocrservice.v1.OcrScanImageResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<ai.visma.ssn.ocrservice.v1.OcrScanImageRequest,
      ai.visma.ssn.ocrservice.v1.OcrScanImageResponse> getOcrScanImageMethod() {
    io.grpc.MethodDescriptor<ai.visma.ssn.ocrservice.v1.OcrScanImageRequest, ai.visma.ssn.ocrservice.v1.OcrScanImageResponse> getOcrScanImageMethod;
    if ((getOcrScanImageMethod = OcrServiceGrpc.getOcrScanImageMethod) == null) {
      synchronized (OcrServiceGrpc.class) {
        if ((getOcrScanImageMethod = OcrServiceGrpc.getOcrScanImageMethod) == null) {
          OcrServiceGrpc.getOcrScanImageMethod = getOcrScanImageMethod =
              io.grpc.MethodDescriptor.<ai.visma.ssn.ocrservice.v1.OcrScanImageRequest, ai.visma.ssn.ocrservice.v1.OcrScanImageResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "OcrScanImage"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ai.visma.ssn.ocrservice.v1.OcrScanImageRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ai.visma.ssn.ocrservice.v1.OcrScanImageResponse.getDefaultInstance()))
              .setSchemaDescriptor(new OcrServiceMethodDescriptorSupplier("OcrScanImage"))
              .build();
        }
      }
    }
    return getOcrScanImageMethod;
  }

  private static volatile io.grpc.MethodDescriptor<ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest,
      ai.visma.ssn.ocrservice.v1.GetTextAnnotationResponse> getGetTextAnnotationMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetTextAnnotation",
      requestType = ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest.class,
      responseType = ai.visma.ssn.ocrservice.v1.GetTextAnnotationResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest,
      ai.visma.ssn.ocrservice.v1.GetTextAnnotationResponse> getGetTextAnnotationMethod() {
    io.grpc.MethodDescriptor<ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest, ai.visma.ssn.ocrservice.v1.GetTextAnnotationResponse> getGetTextAnnotationMethod;
    if ((getGetTextAnnotationMethod = OcrServiceGrpc.getGetTextAnnotationMethod) == null) {
      synchronized (OcrServiceGrpc.class) {
        if ((getGetTextAnnotationMethod = OcrServiceGrpc.getGetTextAnnotationMethod) == null) {
          OcrServiceGrpc.getGetTextAnnotationMethod = getGetTextAnnotationMethod =
              io.grpc.MethodDescriptor.<ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest, ai.visma.ssn.ocrservice.v1.GetTextAnnotationResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetTextAnnotation"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ai.visma.ssn.ocrservice.v1.GetTextAnnotationResponse.getDefaultInstance()))
              .setSchemaDescriptor(new OcrServiceMethodDescriptorSupplier("GetTextAnnotation"))
              .build();
        }
      }
    }
    return getGetTextAnnotationMethod;
  }

  private static volatile io.grpc.MethodDescriptor<ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest,
      ai.visma.ssn.ocrservice.v1.GetTextAnnotationResponse> getGetTextAnnotationsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetTextAnnotations",
      requestType = ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest.class,
      responseType = ai.visma.ssn.ocrservice.v1.GetTextAnnotationResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest,
      ai.visma.ssn.ocrservice.v1.GetTextAnnotationResponse> getGetTextAnnotationsMethod() {
    io.grpc.MethodDescriptor<ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest, ai.visma.ssn.ocrservice.v1.GetTextAnnotationResponse> getGetTextAnnotationsMethod;
    if ((getGetTextAnnotationsMethod = OcrServiceGrpc.getGetTextAnnotationsMethod) == null) {
      synchronized (OcrServiceGrpc.class) {
        if ((getGetTextAnnotationsMethod = OcrServiceGrpc.getGetTextAnnotationsMethod) == null) {
          OcrServiceGrpc.getGetTextAnnotationsMethod = getGetTextAnnotationsMethod =
              io.grpc.MethodDescriptor.<ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest, ai.visma.ssn.ocrservice.v1.GetTextAnnotationResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetTextAnnotations"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ai.visma.ssn.ocrservice.v1.GetTextAnnotationResponse.getDefaultInstance()))
              .setSchemaDescriptor(new OcrServiceMethodDescriptorSupplier("GetTextAnnotations"))
              .build();
        }
      }
    }
    return getGetTextAnnotationsMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static OcrServiceStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<OcrServiceStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<OcrServiceStub>() {
        @java.lang.Override
        public OcrServiceStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new OcrServiceStub(channel, callOptions);
        }
      };
    return OcrServiceStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static OcrServiceBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<OcrServiceBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<OcrServiceBlockingStub>() {
        @java.lang.Override
        public OcrServiceBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new OcrServiceBlockingStub(channel, callOptions);
        }
      };
    return OcrServiceBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static OcrServiceFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<OcrServiceFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<OcrServiceFutureStub>() {
        @java.lang.Override
        public OcrServiceFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new OcrServiceFutureStub(channel, callOptions);
        }
      };
    return OcrServiceFutureStub.newStub(factory, channel);
  }

  /**
   * <pre>
   * Interface exported by the server.
   * </pre>
   */
  public interface AsyncService {

    /**
     */
    default void ocrScanImage(ai.visma.ssn.ocrservice.v1.OcrScanImageRequest request,
        io.grpc.stub.StreamObserver<ai.visma.ssn.ocrservice.v1.OcrScanImageResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getOcrScanImageMethod(), responseObserver);
    }

    /**
     */
    default void getTextAnnotation(ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest request,
        io.grpc.stub.StreamObserver<ai.visma.ssn.ocrservice.v1.GetTextAnnotationResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetTextAnnotationMethod(), responseObserver);
    }

    /**
     */
    default void getTextAnnotations(ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest request,
        io.grpc.stub.StreamObserver<ai.visma.ssn.ocrservice.v1.GetTextAnnotationResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetTextAnnotationsMethod(), responseObserver);
    }
  }

  /**
   * Base class for the server implementation of the service OcrService.
   * <pre>
   * Interface exported by the server.
   * </pre>
   */
  public static abstract class OcrServiceImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return OcrServiceGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service OcrService.
   * <pre>
   * Interface exported by the server.
   * </pre>
   */
  public static final class OcrServiceStub
      extends io.grpc.stub.AbstractAsyncStub<OcrServiceStub> {
    private OcrServiceStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected OcrServiceStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new OcrServiceStub(channel, callOptions);
    }

    /**
     */
    public void ocrScanImage(ai.visma.ssn.ocrservice.v1.OcrScanImageRequest request,
        io.grpc.stub.StreamObserver<ai.visma.ssn.ocrservice.v1.OcrScanImageResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getOcrScanImageMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getTextAnnotation(ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest request,
        io.grpc.stub.StreamObserver<ai.visma.ssn.ocrservice.v1.GetTextAnnotationResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetTextAnnotationMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getTextAnnotations(ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest request,
        io.grpc.stub.StreamObserver<ai.visma.ssn.ocrservice.v1.GetTextAnnotationResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncServerStreamingCall(
          getChannel().newCall(getGetTextAnnotationsMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service OcrService.
   * <pre>
   * Interface exported by the server.
   * </pre>
   */
  public static final class OcrServiceBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<OcrServiceBlockingStub> {
    private OcrServiceBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected OcrServiceBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new OcrServiceBlockingStub(channel, callOptions);
    }

    /**
     */
    public ai.visma.ssn.ocrservice.v1.OcrScanImageResponse ocrScanImage(ai.visma.ssn.ocrservice.v1.OcrScanImageRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getOcrScanImageMethod(), getCallOptions(), request);
    }

    /**
     */
    public ai.visma.ssn.ocrservice.v1.GetTextAnnotationResponse getTextAnnotation(ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetTextAnnotationMethod(), getCallOptions(), request);
    }

    /**
     */
    public java.util.Iterator<ai.visma.ssn.ocrservice.v1.GetTextAnnotationResponse> getTextAnnotations(
        ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest request) {
      return io.grpc.stub.ClientCalls.blockingServerStreamingCall(
          getChannel(), getGetTextAnnotationsMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service OcrService.
   * <pre>
   * Interface exported by the server.
   * </pre>
   */
  public static final class OcrServiceFutureStub
      extends io.grpc.stub.AbstractFutureStub<OcrServiceFutureStub> {
    private OcrServiceFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected OcrServiceFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new OcrServiceFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<ai.visma.ssn.ocrservice.v1.OcrScanImageResponse> ocrScanImage(
        ai.visma.ssn.ocrservice.v1.OcrScanImageRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getOcrScanImageMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<ai.visma.ssn.ocrservice.v1.GetTextAnnotationResponse> getTextAnnotation(
        ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetTextAnnotationMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_OCR_SCAN_IMAGE = 0;
  private static final int METHODID_GET_TEXT_ANNOTATION = 1;
  private static final int METHODID_GET_TEXT_ANNOTATIONS = 2;

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
        case METHODID_OCR_SCAN_IMAGE:
          serviceImpl.ocrScanImage((ai.visma.ssn.ocrservice.v1.OcrScanImageRequest) request,
              (io.grpc.stub.StreamObserver<ai.visma.ssn.ocrservice.v1.OcrScanImageResponse>) responseObserver);
          break;
        case METHODID_GET_TEXT_ANNOTATION:
          serviceImpl.getTextAnnotation((ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest) request,
              (io.grpc.stub.StreamObserver<ai.visma.ssn.ocrservice.v1.GetTextAnnotationResponse>) responseObserver);
          break;
        case METHODID_GET_TEXT_ANNOTATIONS:
          serviceImpl.getTextAnnotations((ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest) request,
              (io.grpc.stub.StreamObserver<ai.visma.ssn.ocrservice.v1.GetTextAnnotationResponse>) responseObserver);
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
          getOcrScanImageMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              ai.visma.ssn.ocrservice.v1.OcrScanImageRequest,
              ai.visma.ssn.ocrservice.v1.OcrScanImageResponse>(
                service, METHODID_OCR_SCAN_IMAGE)))
        .addMethod(
          getGetTextAnnotationMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest,
              ai.visma.ssn.ocrservice.v1.GetTextAnnotationResponse>(
                service, METHODID_GET_TEXT_ANNOTATION)))
        .addMethod(
          getGetTextAnnotationsMethod(),
          io.grpc.stub.ServerCalls.asyncServerStreamingCall(
            new MethodHandlers<
              ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest,
              ai.visma.ssn.ocrservice.v1.GetTextAnnotationResponse>(
                service, METHODID_GET_TEXT_ANNOTATIONS)))
        .build();
  }

  private static abstract class OcrServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    OcrServiceBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return ai.visma.ssn.ocrservice.v1.OcrserviceProto.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("OcrService");
    }
  }

  private static final class OcrServiceFileDescriptorSupplier
      extends OcrServiceBaseDescriptorSupplier {
    OcrServiceFileDescriptorSupplier() {}
  }

  private static final class OcrServiceMethodDescriptorSupplier
      extends OcrServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    OcrServiceMethodDescriptorSupplier(String methodName) {
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
      synchronized (OcrServiceGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new OcrServiceFileDescriptorSupplier())
              .addMethod(getOcrScanImageMethod())
              .addMethod(getGetTextAnnotationMethod())
              .addMethod(getGetTextAnnotationsMethod())
              .build();
        }
      }
    }
    return result;
  }
}
