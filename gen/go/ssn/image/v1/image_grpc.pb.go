// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             (unknown)
// source: ssn/image/v1/image.proto

package imageservice

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	ImageService_CreateImage_FullMethodName = "/ssn.imageservice.v1.ImageService/CreateImage"
)

// ImageServiceClient is the client API for ImageService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ImageServiceClient interface {
	CreateImage(ctx context.Context, in *CreateImageRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
}

type imageServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewImageServiceClient(cc grpc.ClientConnInterface) ImageServiceClient {
	return &imageServiceClient{cc}
}

func (c *imageServiceClient) CreateImage(ctx context.Context, in *CreateImageRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, ImageService_CreateImage_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ImageServiceServer is the server API for ImageService service.
// All implementations should embed UnimplementedImageServiceServer
// for forward compatibility
type ImageServiceServer interface {
	CreateImage(context.Context, *CreateImageRequest) (*emptypb.Empty, error)
}

// UnimplementedImageServiceServer should be embedded to have forward compatible implementations.
type UnimplementedImageServiceServer struct {
}

func (UnimplementedImageServiceServer) CreateImage(context.Context, *CreateImageRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateImage not implemented")
}

// UnsafeImageServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ImageServiceServer will
// result in compilation errors.
type UnsafeImageServiceServer interface {
	mustEmbedUnimplementedImageServiceServer()
}

func RegisterImageServiceServer(s grpc.ServiceRegistrar, srv ImageServiceServer) {
	s.RegisterService(&ImageService_ServiceDesc, srv)
}

func _ImageService_CreateImage_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateImageRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ImageServiceServer).CreateImage(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ImageService_CreateImage_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ImageServiceServer).CreateImage(ctx, req.(*CreateImageRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// ImageService_ServiceDesc is the grpc.ServiceDesc for ImageService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ImageService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "ssn.imageservice.v1.ImageService",
	HandlerType: (*ImageServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateImage",
			Handler:    _ImageService_CreateImage_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "ssn/image/v1/image.proto",
}
