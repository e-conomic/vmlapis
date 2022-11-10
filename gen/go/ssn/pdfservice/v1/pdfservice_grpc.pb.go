// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             (unknown)
// source: ssn/pdfservice/v1/pdfservice.proto

package pdfservice

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

// PdfServiceClient is the client API for PdfService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type PdfServiceClient interface {
	InternalRasterizePdf(ctx context.Context, in *RasterizePdfRequest, opts ...grpc.CallOption) (PdfService_InternalRasterizePdfClient, error)
	RasterizePdf(ctx context.Context, in *RasterizePdfRequest, opts ...grpc.CallOption) (PdfService_RasterizePdfClient, error)
}

type pdfServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewPdfServiceClient(cc grpc.ClientConnInterface) PdfServiceClient {
	return &pdfServiceClient{cc}
}

func (c *pdfServiceClient) InternalRasterizePdf(ctx context.Context, in *RasterizePdfRequest, opts ...grpc.CallOption) (PdfService_InternalRasterizePdfClient, error) {
	stream, err := c.cc.NewStream(ctx, &PdfService_ServiceDesc.Streams[0], "/ssn.pdfservice.v1.PdfService/InternalRasterizePdf", opts...)
	if err != nil {
		return nil, err
	}
	x := &pdfServiceInternalRasterizePdfClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type PdfService_InternalRasterizePdfClient interface {
	Recv() (*RasterizePdfResponse, error)
	grpc.ClientStream
}

type pdfServiceInternalRasterizePdfClient struct {
	grpc.ClientStream
}

func (x *pdfServiceInternalRasterizePdfClient) Recv() (*RasterizePdfResponse, error) {
	m := new(RasterizePdfResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *pdfServiceClient) RasterizePdf(ctx context.Context, in *RasterizePdfRequest, opts ...grpc.CallOption) (PdfService_RasterizePdfClient, error) {
	stream, err := c.cc.NewStream(ctx, &PdfService_ServiceDesc.Streams[1], "/ssn.pdfservice.v1.PdfService/RasterizePdf", opts...)
	if err != nil {
		return nil, err
	}
	x := &pdfServiceRasterizePdfClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type PdfService_RasterizePdfClient interface {
	Recv() (*RasterizePdfResponse, error)
	grpc.ClientStream
}

type pdfServiceRasterizePdfClient struct {
	grpc.ClientStream
}

func (x *pdfServiceRasterizePdfClient) Recv() (*RasterizePdfResponse, error) {
	m := new(RasterizePdfResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// PdfServiceServer is the server API for PdfService service.
// All implementations should embed UnimplementedPdfServiceServer
// for forward compatibility
type PdfServiceServer interface {
	InternalRasterizePdf(*RasterizePdfRequest, PdfService_InternalRasterizePdfServer) error
	RasterizePdf(*RasterizePdfRequest, PdfService_RasterizePdfServer) error
}

// UnimplementedPdfServiceServer should be embedded to have forward compatible implementations.
type UnimplementedPdfServiceServer struct {
}

func (UnimplementedPdfServiceServer) InternalRasterizePdf(*RasterizePdfRequest, PdfService_InternalRasterizePdfServer) error {
	return status.Errorf(codes.Unimplemented, "method InternalRasterizePdf not implemented")
}
func (UnimplementedPdfServiceServer) RasterizePdf(*RasterizePdfRequest, PdfService_RasterizePdfServer) error {
	return status.Errorf(codes.Unimplemented, "method RasterizePdf not implemented")
}

// UnsafePdfServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to PdfServiceServer will
// result in compilation errors.
type UnsafePdfServiceServer interface {
	mustEmbedUnimplementedPdfServiceServer()
}

func RegisterPdfServiceServer(s grpc.ServiceRegistrar, srv PdfServiceServer) {
	s.RegisterService(&PdfService_ServiceDesc, srv)
}

func _PdfService_InternalRasterizePdf_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(RasterizePdfRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(PdfServiceServer).InternalRasterizePdf(m, &pdfServiceInternalRasterizePdfServer{stream})
}

type PdfService_InternalRasterizePdfServer interface {
	Send(*RasterizePdfResponse) error
	grpc.ServerStream
}

type pdfServiceInternalRasterizePdfServer struct {
	grpc.ServerStream
}

func (x *pdfServiceInternalRasterizePdfServer) Send(m *RasterizePdfResponse) error {
	return x.ServerStream.SendMsg(m)
}

func _PdfService_RasterizePdf_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(RasterizePdfRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(PdfServiceServer).RasterizePdf(m, &pdfServiceRasterizePdfServer{stream})
}

type PdfService_RasterizePdfServer interface {
	Send(*RasterizePdfResponse) error
	grpc.ServerStream
}

type pdfServiceRasterizePdfServer struct {
	grpc.ServerStream
}

func (x *pdfServiceRasterizePdfServer) Send(m *RasterizePdfResponse) error {
	return x.ServerStream.SendMsg(m)
}

// PdfService_ServiceDesc is the grpc.ServiceDesc for PdfService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var PdfService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "ssn.pdfservice.v1.PdfService",
	HandlerType: (*PdfServiceServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "InternalRasterizePdf",
			Handler:       _PdfService_InternalRasterizePdf_Handler,
			ServerStreams: true,
		},
		{
			StreamName:    "RasterizePdf",
			Handler:       _PdfService_RasterizePdf_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "ssn/pdfservice/v1/pdfservice.proto",
}
