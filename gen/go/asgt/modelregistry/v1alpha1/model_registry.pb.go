// Code generated by protoc-gen-go. DO NOT EDIT.
// source: asgt/modelregistry/v1alpha1/model_registry.proto

package modelregistry

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import empty "github.com/golang/protobuf/ptypes/empty"

import (
	context "golang.org/x/net/context"
	grpc "google.golang.org/grpc"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

type RegisterModelRequest struct {
	Consumer             string   `protobuf:"bytes,3,opt,name=consumer,proto3" json:"consumer,omitempty"`
	ModelType            string   `protobuf:"bytes,1,opt,name=model_type,json=modelType,proto3" json:"model_type,omitempty"`
	ModelVersion         int64    `protobuf:"varint,2,opt,name=model_version,json=modelVersion,proto3" json:"model_version,omitempty"`
	DatasetName          string   `protobuf:"bytes,4,opt,name=dataset_name,json=datasetName,proto3" json:"dataset_name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *RegisterModelRequest) Reset()         { *m = RegisterModelRequest{} }
func (m *RegisterModelRequest) String() string { return proto.CompactTextString(m) }
func (*RegisterModelRequest) ProtoMessage()    {}
func (*RegisterModelRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_model_registry_3c9113177a4d70dd, []int{0}
}
func (m *RegisterModelRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RegisterModelRequest.Unmarshal(m, b)
}
func (m *RegisterModelRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RegisterModelRequest.Marshal(b, m, deterministic)
}
func (dst *RegisterModelRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RegisterModelRequest.Merge(dst, src)
}
func (m *RegisterModelRequest) XXX_Size() int {
	return xxx_messageInfo_RegisterModelRequest.Size(m)
}
func (m *RegisterModelRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_RegisterModelRequest.DiscardUnknown(m)
}

var xxx_messageInfo_RegisterModelRequest proto.InternalMessageInfo

func (m *RegisterModelRequest) GetConsumer() string {
	if m != nil {
		return m.Consumer
	}
	return ""
}

func (m *RegisterModelRequest) GetModelType() string {
	if m != nil {
		return m.ModelType
	}
	return ""
}

func (m *RegisterModelRequest) GetModelVersion() int64 {
	if m != nil {
		return m.ModelVersion
	}
	return 0
}

func (m *RegisterModelRequest) GetDatasetName() string {
	if m != nil {
		return m.DatasetName
	}
	return ""
}

type RegisterModelResponse struct {
	ShardName            string   `protobuf:"bytes,1,opt,name=shard_name,json=shardName,proto3" json:"shard_name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *RegisterModelResponse) Reset()         { *m = RegisterModelResponse{} }
func (m *RegisterModelResponse) String() string { return proto.CompactTextString(m) }
func (*RegisterModelResponse) ProtoMessage()    {}
func (*RegisterModelResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_model_registry_3c9113177a4d70dd, []int{1}
}
func (m *RegisterModelResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RegisterModelResponse.Unmarshal(m, b)
}
func (m *RegisterModelResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RegisterModelResponse.Marshal(b, m, deterministic)
}
func (dst *RegisterModelResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RegisterModelResponse.Merge(dst, src)
}
func (m *RegisterModelResponse) XXX_Size() int {
	return xxx_messageInfo_RegisterModelResponse.Size(m)
}
func (m *RegisterModelResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_RegisterModelResponse.DiscardUnknown(m)
}

var xxx_messageInfo_RegisterModelResponse proto.InternalMessageInfo

func (m *RegisterModelResponse) GetShardName() string {
	if m != nil {
		return m.ShardName
	}
	return ""
}

type DeleteModelRequest struct {
	ModelType            string   `protobuf:"bytes,2,opt,name=model_type,json=modelType,proto3" json:"model_type,omitempty"`
	ModelVersion         int64    `protobuf:"varint,3,opt,name=model_version,json=modelVersion,proto3" json:"model_version,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *DeleteModelRequest) Reset()         { *m = DeleteModelRequest{} }
func (m *DeleteModelRequest) String() string { return proto.CompactTextString(m) }
func (*DeleteModelRequest) ProtoMessage()    {}
func (*DeleteModelRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_model_registry_3c9113177a4d70dd, []int{2}
}
func (m *DeleteModelRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DeleteModelRequest.Unmarshal(m, b)
}
func (m *DeleteModelRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DeleteModelRequest.Marshal(b, m, deterministic)
}
func (dst *DeleteModelRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DeleteModelRequest.Merge(dst, src)
}
func (m *DeleteModelRequest) XXX_Size() int {
	return xxx_messageInfo_DeleteModelRequest.Size(m)
}
func (m *DeleteModelRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_DeleteModelRequest.DiscardUnknown(m)
}

var xxx_messageInfo_DeleteModelRequest proto.InternalMessageInfo

func (m *DeleteModelRequest) GetModelType() string {
	if m != nil {
		return m.ModelType
	}
	return ""
}

func (m *DeleteModelRequest) GetModelVersion() int64 {
	if m != nil {
		return m.ModelVersion
	}
	return 0
}

type GetLatestModelVersionsRequest struct {
	Consumer             string   `protobuf:"bytes,1,opt,name=consumer,proto3" json:"consumer,omitempty"`
	DatasetName          string   `protobuf:"bytes,2,opt,name=dataset_name,json=datasetName,proto3" json:"dataset_name,omitempty"`
	ModelType            string   `protobuf:"bytes,3,opt,name=model_type,json=modelType,proto3" json:"model_type,omitempty"`
	MaxResults           int32    `protobuf:"varint,4,opt,name=max_results,json=maxResults,proto3" json:"max_results,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetLatestModelVersionsRequest) Reset()         { *m = GetLatestModelVersionsRequest{} }
func (m *GetLatestModelVersionsRequest) String() string { return proto.CompactTextString(m) }
func (*GetLatestModelVersionsRequest) ProtoMessage()    {}
func (*GetLatestModelVersionsRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_model_registry_3c9113177a4d70dd, []int{3}
}
func (m *GetLatestModelVersionsRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetLatestModelVersionsRequest.Unmarshal(m, b)
}
func (m *GetLatestModelVersionsRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetLatestModelVersionsRequest.Marshal(b, m, deterministic)
}
func (dst *GetLatestModelVersionsRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetLatestModelVersionsRequest.Merge(dst, src)
}
func (m *GetLatestModelVersionsRequest) XXX_Size() int {
	return xxx_messageInfo_GetLatestModelVersionsRequest.Size(m)
}
func (m *GetLatestModelVersionsRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetLatestModelVersionsRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetLatestModelVersionsRequest proto.InternalMessageInfo

func (m *GetLatestModelVersionsRequest) GetConsumer() string {
	if m != nil {
		return m.Consumer
	}
	return ""
}

func (m *GetLatestModelVersionsRequest) GetDatasetName() string {
	if m != nil {
		return m.DatasetName
	}
	return ""
}

func (m *GetLatestModelVersionsRequest) GetModelType() string {
	if m != nil {
		return m.ModelType
	}
	return ""
}

func (m *GetLatestModelVersionsRequest) GetMaxResults() int32 {
	if m != nil {
		return m.MaxResults
	}
	return 0
}

type GetLatestModelVersionsResponse struct {
	Results              []*GetLatestModelVersionsResponse_VersionInfo `protobuf:"bytes,1,rep,name=results,proto3" json:"results,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                                      `json:"-"`
	XXX_unrecognized     []byte                                        `json:"-"`
	XXX_sizecache        int32                                         `json:"-"`
}

func (m *GetLatestModelVersionsResponse) Reset()         { *m = GetLatestModelVersionsResponse{} }
func (m *GetLatestModelVersionsResponse) String() string { return proto.CompactTextString(m) }
func (*GetLatestModelVersionsResponse) ProtoMessage()    {}
func (*GetLatestModelVersionsResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_model_registry_3c9113177a4d70dd, []int{4}
}
func (m *GetLatestModelVersionsResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetLatestModelVersionsResponse.Unmarshal(m, b)
}
func (m *GetLatestModelVersionsResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetLatestModelVersionsResponse.Marshal(b, m, deterministic)
}
func (dst *GetLatestModelVersionsResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetLatestModelVersionsResponse.Merge(dst, src)
}
func (m *GetLatestModelVersionsResponse) XXX_Size() int {
	return xxx_messageInfo_GetLatestModelVersionsResponse.Size(m)
}
func (m *GetLatestModelVersionsResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_GetLatestModelVersionsResponse.DiscardUnknown(m)
}

var xxx_messageInfo_GetLatestModelVersionsResponse proto.InternalMessageInfo

func (m *GetLatestModelVersionsResponse) GetResults() []*GetLatestModelVersionsResponse_VersionInfo {
	if m != nil {
		return m.Results
	}
	return nil
}

type GetLatestModelVersionsResponse_VersionInfo struct {
	Version              int64    `protobuf:"varint,1,opt,name=version,proto3" json:"version,omitempty"`
	ShardName            string   `protobuf:"bytes,2,opt,name=shard_name,json=shardName,proto3" json:"shard_name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetLatestModelVersionsResponse_VersionInfo) Reset() {
	*m = GetLatestModelVersionsResponse_VersionInfo{}
}
func (m *GetLatestModelVersionsResponse_VersionInfo) String() string {
	return proto.CompactTextString(m)
}
func (*GetLatestModelVersionsResponse_VersionInfo) ProtoMessage() {}
func (*GetLatestModelVersionsResponse_VersionInfo) Descriptor() ([]byte, []int) {
	return fileDescriptor_model_registry_3c9113177a4d70dd, []int{4, 0}
}
func (m *GetLatestModelVersionsResponse_VersionInfo) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetLatestModelVersionsResponse_VersionInfo.Unmarshal(m, b)
}
func (m *GetLatestModelVersionsResponse_VersionInfo) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetLatestModelVersionsResponse_VersionInfo.Marshal(b, m, deterministic)
}
func (dst *GetLatestModelVersionsResponse_VersionInfo) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetLatestModelVersionsResponse_VersionInfo.Merge(dst, src)
}
func (m *GetLatestModelVersionsResponse_VersionInfo) XXX_Size() int {
	return xxx_messageInfo_GetLatestModelVersionsResponse_VersionInfo.Size(m)
}
func (m *GetLatestModelVersionsResponse_VersionInfo) XXX_DiscardUnknown() {
	xxx_messageInfo_GetLatestModelVersionsResponse_VersionInfo.DiscardUnknown(m)
}

var xxx_messageInfo_GetLatestModelVersionsResponse_VersionInfo proto.InternalMessageInfo

func (m *GetLatestModelVersionsResponse_VersionInfo) GetVersion() int64 {
	if m != nil {
		return m.Version
	}
	return 0
}

func (m *GetLatestModelVersionsResponse_VersionInfo) GetShardName() string {
	if m != nil {
		return m.ShardName
	}
	return ""
}

func init() {
	proto.RegisterType((*RegisterModelRequest)(nil), "asgt.modelregistry.v1alpha1.RegisterModelRequest")
	proto.RegisterType((*RegisterModelResponse)(nil), "asgt.modelregistry.v1alpha1.RegisterModelResponse")
	proto.RegisterType((*DeleteModelRequest)(nil), "asgt.modelregistry.v1alpha1.DeleteModelRequest")
	proto.RegisterType((*GetLatestModelVersionsRequest)(nil), "asgt.modelregistry.v1alpha1.GetLatestModelVersionsRequest")
	proto.RegisterType((*GetLatestModelVersionsResponse)(nil), "asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse")
	proto.RegisterType((*GetLatestModelVersionsResponse_VersionInfo)(nil), "asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.VersionInfo")
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// ModelRegistryClient is the client API for ModelRegistry service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type ModelRegistryClient interface {
	RegisterModel(ctx context.Context, in *RegisterModelRequest, opts ...grpc.CallOption) (*RegisterModelResponse, error)
	DeleteModel(ctx context.Context, in *DeleteModelRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	// List the most recent versions of a model trained with a specified dataset
	GetLatestModelVersions(ctx context.Context, in *GetLatestModelVersionsRequest, opts ...grpc.CallOption) (*GetLatestModelVersionsResponse, error)
}

type modelRegistryClient struct {
	cc *grpc.ClientConn
}

func NewModelRegistryClient(cc *grpc.ClientConn) ModelRegistryClient {
	return &modelRegistryClient{cc}
}

func (c *modelRegistryClient) RegisterModel(ctx context.Context, in *RegisterModelRequest, opts ...grpc.CallOption) (*RegisterModelResponse, error) {
	out := new(RegisterModelResponse)
	err := c.cc.Invoke(ctx, "/asgt.modelregistry.v1alpha1.ModelRegistry/RegisterModel", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *modelRegistryClient) DeleteModel(ctx context.Context, in *DeleteModelRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/asgt.modelregistry.v1alpha1.ModelRegistry/DeleteModel", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *modelRegistryClient) GetLatestModelVersions(ctx context.Context, in *GetLatestModelVersionsRequest, opts ...grpc.CallOption) (*GetLatestModelVersionsResponse, error) {
	out := new(GetLatestModelVersionsResponse)
	err := c.cc.Invoke(ctx, "/asgt.modelregistry.v1alpha1.ModelRegistry/GetLatestModelVersions", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ModelRegistryServer is the server API for ModelRegistry service.
type ModelRegistryServer interface {
	RegisterModel(context.Context, *RegisterModelRequest) (*RegisterModelResponse, error)
	DeleteModel(context.Context, *DeleteModelRequest) (*empty.Empty, error)
	// List the most recent versions of a model trained with a specified dataset
	GetLatestModelVersions(context.Context, *GetLatestModelVersionsRequest) (*GetLatestModelVersionsResponse, error)
}

func RegisterModelRegistryServer(s *grpc.Server, srv ModelRegistryServer) {
	s.RegisterService(&_ModelRegistry_serviceDesc, srv)
}

func _ModelRegistry_RegisterModel_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RegisterModelRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ModelRegistryServer).RegisterModel(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asgt.modelregistry.v1alpha1.ModelRegistry/RegisterModel",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ModelRegistryServer).RegisterModel(ctx, req.(*RegisterModelRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ModelRegistry_DeleteModel_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteModelRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ModelRegistryServer).DeleteModel(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asgt.modelregistry.v1alpha1.ModelRegistry/DeleteModel",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ModelRegistryServer).DeleteModel(ctx, req.(*DeleteModelRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ModelRegistry_GetLatestModelVersions_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetLatestModelVersionsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ModelRegistryServer).GetLatestModelVersions(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asgt.modelregistry.v1alpha1.ModelRegistry/GetLatestModelVersions",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ModelRegistryServer).GetLatestModelVersions(ctx, req.(*GetLatestModelVersionsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _ModelRegistry_serviceDesc = grpc.ServiceDesc{
	ServiceName: "asgt.modelregistry.v1alpha1.ModelRegistry",
	HandlerType: (*ModelRegistryServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "RegisterModel",
			Handler:    _ModelRegistry_RegisterModel_Handler,
		},
		{
			MethodName: "DeleteModel",
			Handler:    _ModelRegistry_DeleteModel_Handler,
		},
		{
			MethodName: "GetLatestModelVersions",
			Handler:    _ModelRegistry_GetLatestModelVersions_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "asgt/modelregistry/v1alpha1/model_registry.proto",
}

func init() {
	proto.RegisterFile("asgt/modelregistry/v1alpha1/model_registry.proto", fileDescriptor_model_registry_3c9113177a4d70dd)
}

var fileDescriptor_model_registry_3c9113177a4d70dd = []byte{
	// 445 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xa4, 0x53, 0xc1, 0x8e, 0xd3, 0x30,
	0x10, 0x95, 0x13, 0x60, 0xd9, 0xc9, 0x46, 0x48, 0x16, 0xac, 0xa2, 0xac, 0x16, 0x4a, 0xb8, 0xf4,
	0xe4, 0xd0, 0x22, 0x71, 0x80, 0x1b, 0x02, 0x56, 0x48, 0x2c, 0x87, 0x08, 0xad, 0x10, 0x97, 0xca,
	0x4b, 0xa7, 0x69, 0xa5, 0x24, 0x0e, 0xb6, 0x53, 0xb5, 0x9f, 0xc1, 0x91, 0x0b, 0x3f, 0xc4, 0xe7,
	0xf0, 0x03, 0x28, 0x76, 0x82, 0x9a, 0xb4, 0x04, 0x01, 0x47, 0xbf, 0xf1, 0x9b, 0x79, 0xf3, 0x66,
	0x06, 0x1e, 0x73, 0x95, 0xea, 0x38, 0x17, 0x73, 0xcc, 0x24, 0xa6, 0x2b, 0xa5, 0xe5, 0x36, 0x5e,
	0x4f, 0x78, 0x56, 0x2e, 0xf9, 0xc4, 0xc2, 0xb3, 0x16, 0x67, 0xa5, 0x14, 0x5a, 0xd0, 0xb3, 0x9a,
	0xc1, 0x3a, 0x0c, 0xd6, 0x32, 0xc2, 0xb3, 0x54, 0x88, 0x34, 0xc3, 0xd8, 0x7c, 0xbd, 0xae, 0x16,
	0x31, 0xe6, 0xa5, 0x6e, 0x98, 0xd1, 0x57, 0x02, 0x77, 0x13, 0x43, 0x41, 0x79, 0x59, 0xf3, 0x13,
	0xfc, 0x5c, 0xa1, 0xd2, 0x34, 0x84, 0xdb, 0x9f, 0x44, 0xa1, 0xaa, 0x1c, 0x65, 0xe0, 0x8e, 0xc8,
	0xf8, 0x38, 0xf9, 0xf5, 0xa6, 0xe7, 0x00, 0x56, 0x86, 0xde, 0x96, 0x18, 0x10, 0x13, 0x3d, 0x36,
	0xc8, 0xfb, 0x6d, 0x89, 0xf4, 0x11, 0xf8, 0x36, 0xbc, 0x46, 0xa9, 0x56, 0xa2, 0x08, 0x9c, 0x11,
	0x19, 0xbb, 0xc9, 0x89, 0x01, 0xaf, 0x2c, 0x46, 0x1f, 0xc2, 0xc9, 0x9c, 0x6b, 0xae, 0x50, 0xcf,
	0x0a, 0x9e, 0x63, 0x70, 0xc3, 0x64, 0xf1, 0x1a, 0xec, 0x1d, 0xcf, 0x31, 0x7a, 0x0a, 0xf7, 0x7a,
	0xd2, 0x54, 0x29, 0x0a, 0x85, 0x75, 0x7d, 0xb5, 0xe4, 0x72, 0x6e, 0x99, 0x4d, 0x7d, 0x83, 0x18,
	0xde, 0x07, 0xa0, 0x2f, 0x31, 0x43, 0x8d, 0x9d, 0x86, 0xba, 0xa2, 0x9d, 0x3f, 0x8a, 0x76, 0xf7,
	0x45, 0x47, 0xdf, 0x08, 0x9c, 0x5f, 0xa0, 0x7e, 0xcb, 0x35, 0x2a, 0x7d, 0xb9, 0x13, 0x51, 0x87,
	0x6c, 0x23, 0x3d, 0xdb, 0xfa, 0x2d, 0x3b, 0x7b, 0x2d, 0xf7, 0x44, 0xba, 0x7d, 0x91, 0x0f, 0xc0,
	0xcb, 0xf9, 0x66, 0x26, 0x51, 0x55, 0x99, 0x56, 0xc6, 0xb3, 0x9b, 0x09, 0xe4, 0x7c, 0x93, 0x58,
	0x24, 0xfa, 0x4e, 0xe0, 0xfe, 0xef, 0x04, 0x36, 0xe6, 0x71, 0x38, 0x6a, 0xf9, 0x64, 0xe4, 0x8e,
	0xbd, 0xe9, 0x05, 0x1b, 0xd8, 0x1e, 0x36, 0x9c, 0x8d, 0x35, 0xc0, 0x9b, 0x62, 0x21, 0x92, 0x36,
	0x6f, 0xf8, 0x1a, 0xbc, 0x1d, 0x9c, 0x06, 0x70, 0xd4, 0x9a, 0x4a, 0x8c, 0xa9, 0xed, 0xb3, 0x37,
	0x48, 0xa7, 0x37, 0xc8, 0xe9, 0x0f, 0x07, 0xfc, 0x66, 0x86, 0x56, 0x16, 0x5d, 0x83, 0xdf, 0x59,
	0x09, 0x3a, 0x19, 0x14, 0x7f, 0x68, 0xb3, 0xc3, 0xe9, 0xdf, 0x50, 0x1a, 0xd3, 0xae, 0xc0, 0xdb,
	0x59, 0x29, 0x1a, 0x0f, 0xa6, 0xd8, 0x5f, 0xbe, 0xf0, 0x94, 0xd9, 0x23, 0x64, 0xed, 0x11, 0xb2,
	0x57, 0xf5, 0x11, 0xd2, 0x2f, 0x04, 0x4e, 0x0f, 0x3b, 0x4c, 0x9f, 0xfd, 0xd3, 0x58, 0x6c, 0xb9,
	0xe7, 0xff, 0x31, 0xd2, 0x17, 0x77, 0x3e, 0xfa, 0x1d, 0xe2, 0xf5, 0x2d, 0x23, 0xfa, 0xc9, 0xcf,
	0x00, 0x00, 0x00, 0xff, 0xff, 0x9c, 0x9c, 0x7d, 0x04, 0x98, 0x04, 0x00, 0x00,
}