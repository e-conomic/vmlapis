// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package pdfservice

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// PdfServiceClient is the client API for PdfService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type PdfServiceClient interface {
	RasterizePdf(ctx context.Context, in *RasterizePdfRequest, opts ...grpc.CallOption) (PdfService_RasterizePdfClient, error)
}

type pdfServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewPdfServiceClient(cc grpc.ClientConnInterface) PdfServiceClient {
	return &pdfServiceClient{cc}
}

func (c *pdfServiceClient) RasterizePdf(ctx context.Context, in *RasterizePdfRequest, opts ...grpc.CallOption) (PdfService_RasterizePdfClient, error) {
	stream, err := c.cc.NewStream(ctx, &_PdfService_serviceDesc.Streams[0], "/ssn.pdfservice.v1.PdfService/RasterizePdf", opts...)
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
// All implementations must embed UnimplementedPdfServiceServer
// for forward compatibility
type PdfServiceServer interface {
	RasterizePdf(*RasterizePdfRequest, PdfService_RasterizePdfServer) error
	mustEmbedUnimplementedPdfServiceServer()
}

// UnimplementedPdfServiceServer must be embedded to have forward compatible implementations.
type UnimplementedPdfServiceServer struct {
}

func (*UnimplementedPdfServiceServer) RasterizePdf(*RasterizePdfRequest, PdfService_RasterizePdfServer) error {
	return status.Errorf(codes.Unimplemented, "method RasterizePdf not implemented")
}
func (*UnimplementedPdfServiceServer) mustEmbedUnimplementedPdfServiceServer() {}

func RegisterPdfServiceServer(s *grpc.Server, srv PdfServiceServer) {
	s.RegisterService(&_PdfService_serviceDesc, srv)
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

var _PdfService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "ssn.pdfservice.v1.PdfService",
	HandlerType: (*PdfServiceServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "RasterizePdf",
			Handler:       _PdfService_RasterizePdf_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "ssn/pdfservice/v1/pdfservice.proto",
}
