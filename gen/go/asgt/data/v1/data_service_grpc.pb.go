// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.12.4
// source: asgt/data/v1/data_service.proto

package data

import (
	context "context"
	v1 "github.com/e-conomic/vmlapis/gen/go/ssn/dataservice/v1"
	empty "github.com/golang/protobuf/ptypes/empty"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// DataServiceClient is the client API for DataService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type DataServiceClient interface {
	CreateDataset(ctx context.Context, in *CreateRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	AppendData(ctx context.Context, in *AppendDataRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	DeleteData(ctx context.Context, in *DeleteRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	GetInfo(ctx context.Context, in *GetInfoRequest, opts ...grpc.CallOption) (*GetInfoResponse, error)
	UpdateDataset(ctx context.Context, in *UpdateDatasetRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	RegisterQueryStats(ctx context.Context, in *RegisterQueryStatsRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	CallsPerMonthMetric(ctx context.Context, in *empty.Empty, opts ...grpc.CallOption) (*v1.CallsPerMonthResponse, error)
	CalculateMetrics(ctx context.Context, in *CalculateMetricsRequest, opts ...grpc.CallOption) (*CalculateMetricsResponse, error)
}

type dataServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewDataServiceClient(cc grpc.ClientConnInterface) DataServiceClient {
	return &dataServiceClient{cc}
}

func (c *dataServiceClient) CreateDataset(ctx context.Context, in *CreateRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/asgt.dataservice.v1.DataService/CreateDataset", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataServiceClient) AppendData(ctx context.Context, in *AppendDataRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/asgt.dataservice.v1.DataService/AppendData", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataServiceClient) DeleteData(ctx context.Context, in *DeleteRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/asgt.dataservice.v1.DataService/DeleteData", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataServiceClient) GetInfo(ctx context.Context, in *GetInfoRequest, opts ...grpc.CallOption) (*GetInfoResponse, error) {
	out := new(GetInfoResponse)
	err := c.cc.Invoke(ctx, "/asgt.dataservice.v1.DataService/GetInfo", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataServiceClient) UpdateDataset(ctx context.Context, in *UpdateDatasetRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/asgt.dataservice.v1.DataService/UpdateDataset", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataServiceClient) RegisterQueryStats(ctx context.Context, in *RegisterQueryStatsRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/asgt.dataservice.v1.DataService/RegisterQueryStats", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataServiceClient) CallsPerMonthMetric(ctx context.Context, in *empty.Empty, opts ...grpc.CallOption) (*v1.CallsPerMonthResponse, error) {
	out := new(v1.CallsPerMonthResponse)
	err := c.cc.Invoke(ctx, "/asgt.dataservice.v1.DataService/CallsPerMonthMetric", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataServiceClient) CalculateMetrics(ctx context.Context, in *CalculateMetricsRequest, opts ...grpc.CallOption) (*CalculateMetricsResponse, error) {
	out := new(CalculateMetricsResponse)
	err := c.cc.Invoke(ctx, "/asgt.dataservice.v1.DataService/CalculateMetrics", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// DataServiceServer is the server API for DataService service.
// All implementations must embed UnimplementedDataServiceServer
// for forward compatibility
type DataServiceServer interface {
	CreateDataset(context.Context, *CreateRequest) (*empty.Empty, error)
	AppendData(context.Context, *AppendDataRequest) (*empty.Empty, error)
	DeleteData(context.Context, *DeleteRequest) (*empty.Empty, error)
	GetInfo(context.Context, *GetInfoRequest) (*GetInfoResponse, error)
	UpdateDataset(context.Context, *UpdateDatasetRequest) (*empty.Empty, error)
	RegisterQueryStats(context.Context, *RegisterQueryStatsRequest) (*empty.Empty, error)
	CallsPerMonthMetric(context.Context, *empty.Empty) (*v1.CallsPerMonthResponse, error)
	CalculateMetrics(context.Context, *CalculateMetricsRequest) (*CalculateMetricsResponse, error)
	mustEmbedUnimplementedDataServiceServer()
}

// UnimplementedDataServiceServer must be embedded to have forward compatible implementations.
type UnimplementedDataServiceServer struct {
}

func (UnimplementedDataServiceServer) CreateDataset(context.Context, *CreateRequest) (*empty.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateDataset not implemented")
}
func (UnimplementedDataServiceServer) AppendData(context.Context, *AppendDataRequest) (*empty.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AppendData not implemented")
}
func (UnimplementedDataServiceServer) DeleteData(context.Context, *DeleteRequest) (*empty.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteData not implemented")
}
func (UnimplementedDataServiceServer) GetInfo(context.Context, *GetInfoRequest) (*GetInfoResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetInfo not implemented")
}
func (UnimplementedDataServiceServer) UpdateDataset(context.Context, *UpdateDatasetRequest) (*empty.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateDataset not implemented")
}
func (UnimplementedDataServiceServer) RegisterQueryStats(context.Context, *RegisterQueryStatsRequest) (*empty.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RegisterQueryStats not implemented")
}
func (UnimplementedDataServiceServer) CallsPerMonthMetric(context.Context, *empty.Empty) (*v1.CallsPerMonthResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CallsPerMonthMetric not implemented")
}
func (UnimplementedDataServiceServer) CalculateMetrics(context.Context, *CalculateMetricsRequest) (*CalculateMetricsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CalculateMetrics not implemented")
}
func (UnimplementedDataServiceServer) mustEmbedUnimplementedDataServiceServer() {}

// UnsafeDataServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to DataServiceServer will
// result in compilation errors.
type UnsafeDataServiceServer interface {
	mustEmbedUnimplementedDataServiceServer()
}

func RegisterDataServiceServer(s grpc.ServiceRegistrar, srv DataServiceServer) {
	s.RegisterService(&DataService_ServiceDesc, srv)
}

func _DataService_CreateDataset_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataServiceServer).CreateDataset(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asgt.dataservice.v1.DataService/CreateDataset",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataServiceServer).CreateDataset(ctx, req.(*CreateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataService_AppendData_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AppendDataRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataServiceServer).AppendData(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asgt.dataservice.v1.DataService/AppendData",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataServiceServer).AppendData(ctx, req.(*AppendDataRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataService_DeleteData_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataServiceServer).DeleteData(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asgt.dataservice.v1.DataService/DeleteData",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataServiceServer).DeleteData(ctx, req.(*DeleteRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataService_GetInfo_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetInfoRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataServiceServer).GetInfo(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asgt.dataservice.v1.DataService/GetInfo",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataServiceServer).GetInfo(ctx, req.(*GetInfoRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataService_UpdateDataset_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateDatasetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataServiceServer).UpdateDataset(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asgt.dataservice.v1.DataService/UpdateDataset",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataServiceServer).UpdateDataset(ctx, req.(*UpdateDatasetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataService_RegisterQueryStats_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RegisterQueryStatsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataServiceServer).RegisterQueryStats(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asgt.dataservice.v1.DataService/RegisterQueryStats",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataServiceServer).RegisterQueryStats(ctx, req.(*RegisterQueryStatsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataService_CallsPerMonthMetric_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(empty.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataServiceServer).CallsPerMonthMetric(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asgt.dataservice.v1.DataService/CallsPerMonthMetric",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataServiceServer).CallsPerMonthMetric(ctx, req.(*empty.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataService_CalculateMetrics_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CalculateMetricsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataServiceServer).CalculateMetrics(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asgt.dataservice.v1.DataService/CalculateMetrics",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataServiceServer).CalculateMetrics(ctx, req.(*CalculateMetricsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// DataService_ServiceDesc is the grpc.ServiceDesc for DataService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var DataService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "asgt.dataservice.v1.DataService",
	HandlerType: (*DataServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateDataset",
			Handler:    _DataService_CreateDataset_Handler,
		},
		{
			MethodName: "AppendData",
			Handler:    _DataService_AppendData_Handler,
		},
		{
			MethodName: "DeleteData",
			Handler:    _DataService_DeleteData_Handler,
		},
		{
			MethodName: "GetInfo",
			Handler:    _DataService_GetInfo_Handler,
		},
		{
			MethodName: "UpdateDataset",
			Handler:    _DataService_UpdateDataset_Handler,
		},
		{
			MethodName: "RegisterQueryStats",
			Handler:    _DataService_RegisterQueryStats_Handler,
		},
		{
			MethodName: "CallsPerMonthMetric",
			Handler:    _DataService_CallsPerMonthMetric_Handler,
		},
		{
			MethodName: "CalculateMetrics",
			Handler:    _DataService_CalculateMetrics_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "asgt/data/v1/data_service.proto",
}
