// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package access

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// AccessClient is the client API for Access service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type AccessClient interface {
	GenerateValetKey(ctx context.Context, in *ValetKeyRequest, opts ...grpc.CallOption) (*ValetKeyResponse, error)
}

type accessClient struct {
	cc grpc.ClientConnInterface
}

func NewAccessClient(cc grpc.ClientConnInterface) AccessClient {
	return &accessClient{cc}
}

func (c *accessClient) GenerateValetKey(ctx context.Context, in *ValetKeyRequest, opts ...grpc.CallOption) (*ValetKeyResponse, error) {
	out := new(ValetKeyResponse)
	err := c.cc.Invoke(ctx, "/ssn.access.v1.Access/GenerateValetKey", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AccessServer is the server API for Access service.
// All implementations must embed UnimplementedAccessServer
// for forward compatibility
type AccessServer interface {
	GenerateValetKey(context.Context, *ValetKeyRequest) (*ValetKeyResponse, error)
	mustEmbedUnimplementedAccessServer()
}

// UnimplementedAccessServer must be embedded to have forward compatible implementations.
type UnimplementedAccessServer struct {
}

func (*UnimplementedAccessServer) GenerateValetKey(context.Context, *ValetKeyRequest) (*ValetKeyResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GenerateValetKey not implemented")
}
func (*UnimplementedAccessServer) mustEmbedUnimplementedAccessServer() {}

func RegisterAccessServer(s *grpc.Server, srv AccessServer) {
	s.RegisterService(&_Access_serviceDesc, srv)
}

func _Access_GenerateValetKey_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ValetKeyRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AccessServer).GenerateValetKey(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ssn.access.v1.Access/GenerateValetKey",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AccessServer).GenerateValetKey(ctx, req.(*ValetKeyRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Access_serviceDesc = grpc.ServiceDesc{
	ServiceName: "ssn.access.v1.Access",
	HandlerType: (*AccessServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GenerateValetKey",
			Handler:    _Access_GenerateValetKey_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "ssn/access/v1/access.proto",
}