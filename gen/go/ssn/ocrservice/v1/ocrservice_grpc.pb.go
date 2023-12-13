// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             (unknown)
// source: ssn/ocrservice/v1/ocrservice.proto

package ocrservice

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	OcrService_OcrScanImage_FullMethodName       = "/ssn.ocrservice.v1.OcrService/OcrScanImage"
	OcrService_GetTextAnnotation_FullMethodName  = "/ssn.ocrservice.v1.OcrService/GetTextAnnotation"
	OcrService_GetTextAnnotations_FullMethodName = "/ssn.ocrservice.v1.OcrService/GetTextAnnotations"
)

// OcrServiceClient is the client API for OcrService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type OcrServiceClient interface {
	OcrScanImage(ctx context.Context, in *OcrScanImageRequest, opts ...grpc.CallOption) (*OcrScanImageResponse, error)
	GetTextAnnotation(ctx context.Context, in *GetTextAnnotationRequest, opts ...grpc.CallOption) (*GetTextAnnotationResponse, error)
	GetTextAnnotations(ctx context.Context, in *GetTextAnnotationsRequest, opts ...grpc.CallOption) (OcrService_GetTextAnnotationsClient, error)
}

type ocrServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewOcrServiceClient(cc grpc.ClientConnInterface) OcrServiceClient {
	return &ocrServiceClient{cc}
}

func (c *ocrServiceClient) OcrScanImage(ctx context.Context, in *OcrScanImageRequest, opts ...grpc.CallOption) (*OcrScanImageResponse, error) {
	out := new(OcrScanImageResponse)
	err := c.cc.Invoke(ctx, OcrService_OcrScanImage_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *ocrServiceClient) GetTextAnnotation(ctx context.Context, in *GetTextAnnotationRequest, opts ...grpc.CallOption) (*GetTextAnnotationResponse, error) {
	out := new(GetTextAnnotationResponse)
	err := c.cc.Invoke(ctx, OcrService_GetTextAnnotation_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *ocrServiceClient) GetTextAnnotations(ctx context.Context, in *GetTextAnnotationsRequest, opts ...grpc.CallOption) (OcrService_GetTextAnnotationsClient, error) {
	stream, err := c.cc.NewStream(ctx, &OcrService_ServiceDesc.Streams[0], OcrService_GetTextAnnotations_FullMethodName, opts...)
	if err != nil {
		return nil, err
	}
	x := &ocrServiceGetTextAnnotationsClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type OcrService_GetTextAnnotationsClient interface {
	Recv() (*GetTextAnnotationsResponse, error)
	grpc.ClientStream
}

type ocrServiceGetTextAnnotationsClient struct {
	grpc.ClientStream
}

func (x *ocrServiceGetTextAnnotationsClient) Recv() (*GetTextAnnotationsResponse, error) {
	m := new(GetTextAnnotationsResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// OcrServiceServer is the server API for OcrService service.
// All implementations should embed UnimplementedOcrServiceServer
// for forward compatibility
type OcrServiceServer interface {
	OcrScanImage(context.Context, *OcrScanImageRequest) (*OcrScanImageResponse, error)
	GetTextAnnotation(context.Context, *GetTextAnnotationRequest) (*GetTextAnnotationResponse, error)
	GetTextAnnotations(*GetTextAnnotationsRequest, OcrService_GetTextAnnotationsServer) error
}

// UnimplementedOcrServiceServer should be embedded to have forward compatible implementations.
type UnimplementedOcrServiceServer struct {
}

func (UnimplementedOcrServiceServer) OcrScanImage(context.Context, *OcrScanImageRequest) (*OcrScanImageResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method OcrScanImage not implemented")
}
func (UnimplementedOcrServiceServer) GetTextAnnotation(context.Context, *GetTextAnnotationRequest) (*GetTextAnnotationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetTextAnnotation not implemented")
}
func (UnimplementedOcrServiceServer) GetTextAnnotations(*GetTextAnnotationsRequest, OcrService_GetTextAnnotationsServer) error {
	return status.Errorf(codes.Unimplemented, "method GetTextAnnotations not implemented")
}

// UnsafeOcrServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to OcrServiceServer will
// result in compilation errors.
type UnsafeOcrServiceServer interface {
	mustEmbedUnimplementedOcrServiceServer()
}

func RegisterOcrServiceServer(s grpc.ServiceRegistrar, srv OcrServiceServer) {
	s.RegisterService(&OcrService_ServiceDesc, srv)
}

func _OcrService_OcrScanImage_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(OcrScanImageRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OcrServiceServer).OcrScanImage(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: OcrService_OcrScanImage_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OcrServiceServer).OcrScanImage(ctx, req.(*OcrScanImageRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _OcrService_GetTextAnnotation_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetTextAnnotationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OcrServiceServer).GetTextAnnotation(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: OcrService_GetTextAnnotation_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OcrServiceServer).GetTextAnnotation(ctx, req.(*GetTextAnnotationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _OcrService_GetTextAnnotations_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(GetTextAnnotationsRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(OcrServiceServer).GetTextAnnotations(m, &ocrServiceGetTextAnnotationsServer{stream})
}

type OcrService_GetTextAnnotationsServer interface {
	Send(*GetTextAnnotationsResponse) error
	grpc.ServerStream
}

type ocrServiceGetTextAnnotationsServer struct {
	grpc.ServerStream
}

func (x *ocrServiceGetTextAnnotationsServer) Send(m *GetTextAnnotationsResponse) error {
	return x.ServerStream.SendMsg(m)
}

// OcrService_ServiceDesc is the grpc.ServiceDesc for OcrService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var OcrService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "ssn.ocrservice.v1.OcrService",
	HandlerType: (*OcrServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "OcrScanImage",
			Handler:    _OcrService_OcrScanImage_Handler,
		},
		{
			MethodName: "GetTextAnnotation",
			Handler:    _OcrService_GetTextAnnotation_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "GetTextAnnotations",
			Handler:       _OcrService_GetTextAnnotations_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "ssn/ocrservice/v1/ocrservice.proto",
}
