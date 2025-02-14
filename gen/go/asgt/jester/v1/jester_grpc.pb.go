// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             (unknown)
// source: asgt/jester/v1/jester.proto

package jester

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
	Jester_Suggest_FullMethodName         = "/asgt.jester.v1.Jester/Suggest"
	Jester_InternalSuggest_FullMethodName = "/asgt.jester.v1.Jester/InternalSuggest"
)

// JesterClient is the client API for Jester service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type JesterClient interface {
	Suggest(ctx context.Context, in *SuggestionRequest, opts ...grpc.CallOption) (*SuggestionResponse, error)
	InternalSuggest(ctx context.Context, in *SuggestionRequest, opts ...grpc.CallOption) (*SuggestionResponse, error)
}

type jesterClient struct {
	cc grpc.ClientConnInterface
}

func NewJesterClient(cc grpc.ClientConnInterface) JesterClient {
	return &jesterClient{cc}
}

func (c *jesterClient) Suggest(ctx context.Context, in *SuggestionRequest, opts ...grpc.CallOption) (*SuggestionResponse, error) {
	out := new(SuggestionResponse)
	err := c.cc.Invoke(ctx, Jester_Suggest_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *jesterClient) InternalSuggest(ctx context.Context, in *SuggestionRequest, opts ...grpc.CallOption) (*SuggestionResponse, error) {
	out := new(SuggestionResponse)
	err := c.cc.Invoke(ctx, Jester_InternalSuggest_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// JesterServer is the server API for Jester service.
// All implementations should embed UnimplementedJesterServer
// for forward compatibility
type JesterServer interface {
	Suggest(context.Context, *SuggestionRequest) (*SuggestionResponse, error)
	InternalSuggest(context.Context, *SuggestionRequest) (*SuggestionResponse, error)
}

// UnimplementedJesterServer should be embedded to have forward compatible implementations.
type UnimplementedJesterServer struct {
}

func (UnimplementedJesterServer) Suggest(context.Context, *SuggestionRequest) (*SuggestionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Suggest not implemented")
}
func (UnimplementedJesterServer) InternalSuggest(context.Context, *SuggestionRequest) (*SuggestionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method InternalSuggest not implemented")
}

// UnsafeJesterServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to JesterServer will
// result in compilation errors.
type UnsafeJesterServer interface {
	mustEmbedUnimplementedJesterServer()
}

func RegisterJesterServer(s grpc.ServiceRegistrar, srv JesterServer) {
	s.RegisterService(&Jester_ServiceDesc, srv)
}

func _Jester_Suggest_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SuggestionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(JesterServer).Suggest(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Jester_Suggest_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(JesterServer).Suggest(ctx, req.(*SuggestionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Jester_InternalSuggest_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SuggestionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(JesterServer).InternalSuggest(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Jester_InternalSuggest_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(JesterServer).InternalSuggest(ctx, req.(*SuggestionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// Jester_ServiceDesc is the grpc.ServiceDesc for Jester service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Jester_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "asgt.jester.v1.Jester",
	HandlerType: (*JesterServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Suggest",
			Handler:    _Jester_Suggest_Handler,
		},
		{
			MethodName: "InternalSuggest",
			Handler:    _Jester_InternalSuggest_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "asgt/jester/v1/jester.proto",
}
