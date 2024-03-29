// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             (unknown)
// source: ssn/dataservice/v1/dataservice.proto

package dataservice

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
	DataService_CreateDocument_FullMethodName      = "/ssn.dataservice.v1.DataService/CreateDocument"
	DataService_ReadDocument_FullMethodName        = "/ssn.dataservice.v1.DataService/ReadDocument"
	DataService_PrepareFeedback_FullMethodName     = "/ssn.dataservice.v1.DataService/PrepareFeedback"
	DataService_Feedback_FullMethodName            = "/ssn.dataservice.v1.DataService/Feedback"
	DataService_CalculateMetrics_FullMethodName    = "/ssn.dataservice.v1.DataService/CalculateMetrics"
	DataService_Delete_FullMethodName              = "/ssn.dataservice.v1.DataService/Delete"
	DataService_CallsPerMonthMetric_FullMethodName = "/ssn.dataservice.v1.DataService/CallsPerMonthMetric"
)

// DataServiceClient is the client API for DataService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type DataServiceClient interface {
	CreateDocument(ctx context.Context, in *CreateDocumentRequest, opts ...grpc.CallOption) (*CreateDocumentResponse, error)
	ReadDocument(ctx context.Context, in *ReadDocumentRequest, opts ...grpc.CallOption) (*ReadDocumentResponse, error)
	// For feedback
	PrepareFeedback(ctx context.Context, in *PrepareFeedbackRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
	Feedback(ctx context.Context, in *FeedbackRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
	CalculateMetrics(ctx context.Context, in *MetricsRequest, opts ...grpc.CallOption) (*FeedbackMetrics, error)
	Delete(ctx context.Context, in *DeleteRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
	CallsPerMonthMetric(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*CallsPerMonthResponse, error)
}

type dataServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewDataServiceClient(cc grpc.ClientConnInterface) DataServiceClient {
	return &dataServiceClient{cc}
}

func (c *dataServiceClient) CreateDocument(ctx context.Context, in *CreateDocumentRequest, opts ...grpc.CallOption) (*CreateDocumentResponse, error) {
	out := new(CreateDocumentResponse)
	err := c.cc.Invoke(ctx, DataService_CreateDocument_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataServiceClient) ReadDocument(ctx context.Context, in *ReadDocumentRequest, opts ...grpc.CallOption) (*ReadDocumentResponse, error) {
	out := new(ReadDocumentResponse)
	err := c.cc.Invoke(ctx, DataService_ReadDocument_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataServiceClient) PrepareFeedback(ctx context.Context, in *PrepareFeedbackRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, DataService_PrepareFeedback_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataServiceClient) Feedback(ctx context.Context, in *FeedbackRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, DataService_Feedback_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataServiceClient) CalculateMetrics(ctx context.Context, in *MetricsRequest, opts ...grpc.CallOption) (*FeedbackMetrics, error) {
	out := new(FeedbackMetrics)
	err := c.cc.Invoke(ctx, DataService_CalculateMetrics_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataServiceClient) Delete(ctx context.Context, in *DeleteRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, DataService_Delete_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataServiceClient) CallsPerMonthMetric(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*CallsPerMonthResponse, error) {
	out := new(CallsPerMonthResponse)
	err := c.cc.Invoke(ctx, DataService_CallsPerMonthMetric_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// DataServiceServer is the server API for DataService service.
// All implementations should embed UnimplementedDataServiceServer
// for forward compatibility
type DataServiceServer interface {
	CreateDocument(context.Context, *CreateDocumentRequest) (*CreateDocumentResponse, error)
	ReadDocument(context.Context, *ReadDocumentRequest) (*ReadDocumentResponse, error)
	// For feedback
	PrepareFeedback(context.Context, *PrepareFeedbackRequest) (*emptypb.Empty, error)
	Feedback(context.Context, *FeedbackRequest) (*emptypb.Empty, error)
	CalculateMetrics(context.Context, *MetricsRequest) (*FeedbackMetrics, error)
	Delete(context.Context, *DeleteRequest) (*emptypb.Empty, error)
	CallsPerMonthMetric(context.Context, *emptypb.Empty) (*CallsPerMonthResponse, error)
}

// UnimplementedDataServiceServer should be embedded to have forward compatible implementations.
type UnimplementedDataServiceServer struct {
}

func (UnimplementedDataServiceServer) CreateDocument(context.Context, *CreateDocumentRequest) (*CreateDocumentResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateDocument not implemented")
}
func (UnimplementedDataServiceServer) ReadDocument(context.Context, *ReadDocumentRequest) (*ReadDocumentResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ReadDocument not implemented")
}
func (UnimplementedDataServiceServer) PrepareFeedback(context.Context, *PrepareFeedbackRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PrepareFeedback not implemented")
}
func (UnimplementedDataServiceServer) Feedback(context.Context, *FeedbackRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Feedback not implemented")
}
func (UnimplementedDataServiceServer) CalculateMetrics(context.Context, *MetricsRequest) (*FeedbackMetrics, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CalculateMetrics not implemented")
}
func (UnimplementedDataServiceServer) Delete(context.Context, *DeleteRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Delete not implemented")
}
func (UnimplementedDataServiceServer) CallsPerMonthMetric(context.Context, *emptypb.Empty) (*CallsPerMonthResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CallsPerMonthMetric not implemented")
}

// UnsafeDataServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to DataServiceServer will
// result in compilation errors.
type UnsafeDataServiceServer interface {
	mustEmbedUnimplementedDataServiceServer()
}

func RegisterDataServiceServer(s grpc.ServiceRegistrar, srv DataServiceServer) {
	s.RegisterService(&DataService_ServiceDesc, srv)
}

func _DataService_CreateDocument_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateDocumentRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataServiceServer).CreateDocument(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: DataService_CreateDocument_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataServiceServer).CreateDocument(ctx, req.(*CreateDocumentRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataService_ReadDocument_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ReadDocumentRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataServiceServer).ReadDocument(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: DataService_ReadDocument_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataServiceServer).ReadDocument(ctx, req.(*ReadDocumentRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataService_PrepareFeedback_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PrepareFeedbackRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataServiceServer).PrepareFeedback(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: DataService_PrepareFeedback_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataServiceServer).PrepareFeedback(ctx, req.(*PrepareFeedbackRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataService_Feedback_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FeedbackRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataServiceServer).Feedback(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: DataService_Feedback_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataServiceServer).Feedback(ctx, req.(*FeedbackRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataService_CalculateMetrics_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MetricsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataServiceServer).CalculateMetrics(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: DataService_CalculateMetrics_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataServiceServer).CalculateMetrics(ctx, req.(*MetricsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataService_Delete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataServiceServer).Delete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: DataService_Delete_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataServiceServer).Delete(ctx, req.(*DeleteRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataService_CallsPerMonthMetric_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataServiceServer).CallsPerMonthMetric(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: DataService_CallsPerMonthMetric_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataServiceServer).CallsPerMonthMetric(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

// DataService_ServiceDesc is the grpc.ServiceDesc for DataService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var DataService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "ssn.dataservice.v1.DataService",
	HandlerType: (*DataServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateDocument",
			Handler:    _DataService_CreateDocument_Handler,
		},
		{
			MethodName: "ReadDocument",
			Handler:    _DataService_ReadDocument_Handler,
		},
		{
			MethodName: "PrepareFeedback",
			Handler:    _DataService_PrepareFeedback_Handler,
		},
		{
			MethodName: "Feedback",
			Handler:    _DataService_Feedback_Handler,
		},
		{
			MethodName: "CalculateMetrics",
			Handler:    _DataService_CalculateMetrics_Handler,
		},
		{
			MethodName: "Delete",
			Handler:    _DataService_Delete_Handler,
		},
		{
			MethodName: "CallsPerMonthMetric",
			Handler:    _DataService_CallsPerMonthMetric_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "ssn/dataservice/v1/dataservice.proto",
}
