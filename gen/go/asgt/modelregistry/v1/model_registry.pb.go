// Code generated by protoc-gen-go. DO NOT EDIT.
// source: asgt/modelregistry/v1/model_registry.proto

package modelregistry

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import _type "github.com/e-conomic/vmlapis/gen/go/asgt/type"
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
	Dataset              *_type.Dataset         `protobuf:"bytes,1,opt,name=dataset,proto3" json:"dataset,omitempty"`
	Revision             *_type.Revision        `protobuf:"bytes,2,opt,name=revision,proto3" json:"revision,omitempty"`
	ModelVersion         int64                  `protobuf:"varint,3,opt,name=model_version,json=modelVersion,proto3" json:"model_version,omitempty"`
	TotalSampleSize      int32                  `protobuf:"varint,4,opt,name=total_sample_size,json=totalSampleSize,proto3" json:"total_sample_size,omitempty"`
	TrainingSampleSize   int32                  `protobuf:"varint,5,opt,name=training_sample_size,json=trainingSampleSize,proto3" json:"training_sample_size,omitempty"`
	ValidationSampleSize int32                  `protobuf:"varint,6,opt,name=validation_sample_size,json=validationSampleSize,proto3" json:"validation_sample_size,omitempty"`
	TargetMetrics        []*_type.TargetMetrics `protobuf:"bytes,7,rep,name=target_metrics,json=targetMetrics,proto3" json:"target_metrics,omitempty"`
	XXX_NoUnkeyedLiteral struct{}               `json:"-"`
	XXX_unrecognized     []byte                 `json:"-"`
	XXX_sizecache        int32                  `json:"-"`
}

func (m *RegisterModelRequest) Reset()         { *m = RegisterModelRequest{} }
func (m *RegisterModelRequest) String() string { return proto.CompactTextString(m) }
func (*RegisterModelRequest) ProtoMessage()    {}
func (*RegisterModelRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_model_registry_1b4107131884d9c8, []int{0}
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

func (m *RegisterModelRequest) GetDataset() *_type.Dataset {
	if m != nil {
		return m.Dataset
	}
	return nil
}

func (m *RegisterModelRequest) GetRevision() *_type.Revision {
	if m != nil {
		return m.Revision
	}
	return nil
}

func (m *RegisterModelRequest) GetModelVersion() int64 {
	if m != nil {
		return m.ModelVersion
	}
	return 0
}

func (m *RegisterModelRequest) GetTotalSampleSize() int32 {
	if m != nil {
		return m.TotalSampleSize
	}
	return 0
}

func (m *RegisterModelRequest) GetTrainingSampleSize() int32 {
	if m != nil {
		return m.TrainingSampleSize
	}
	return 0
}

func (m *RegisterModelRequest) GetValidationSampleSize() int32 {
	if m != nil {
		return m.ValidationSampleSize
	}
	return 0
}

func (m *RegisterModelRequest) GetTargetMetrics() []*_type.TargetMetrics {
	if m != nil {
		return m.TargetMetrics
	}
	return nil
}

type GetCurrentModelRequest struct {
	Dataset              *_type.Dataset `protobuf:"bytes,1,opt,name=dataset,proto3" json:"dataset,omitempty"`
	XXX_NoUnkeyedLiteral struct{}       `json:"-"`
	XXX_unrecognized     []byte         `json:"-"`
	XXX_sizecache        int32          `json:"-"`
}

func (m *GetCurrentModelRequest) Reset()         { *m = GetCurrentModelRequest{} }
func (m *GetCurrentModelRequest) String() string { return proto.CompactTextString(m) }
func (*GetCurrentModelRequest) ProtoMessage()    {}
func (*GetCurrentModelRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_model_registry_1b4107131884d9c8, []int{1}
}
func (m *GetCurrentModelRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetCurrentModelRequest.Unmarshal(m, b)
}
func (m *GetCurrentModelRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetCurrentModelRequest.Marshal(b, m, deterministic)
}
func (dst *GetCurrentModelRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetCurrentModelRequest.Merge(dst, src)
}
func (m *GetCurrentModelRequest) XXX_Size() int {
	return xxx_messageInfo_GetCurrentModelRequest.Size(m)
}
func (m *GetCurrentModelRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetCurrentModelRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetCurrentModelRequest proto.InternalMessageInfo

func (m *GetCurrentModelRequest) GetDataset() *_type.Dataset {
	if m != nil {
		return m.Dataset
	}
	return nil
}

type GetCurrentModelResponse struct {
	Model                *_type.Model `protobuf:"bytes,1,opt,name=model,proto3" json:"model,omitempty"`
	XXX_NoUnkeyedLiteral struct{}     `json:"-"`
	XXX_unrecognized     []byte       `json:"-"`
	XXX_sizecache        int32        `json:"-"`
}

func (m *GetCurrentModelResponse) Reset()         { *m = GetCurrentModelResponse{} }
func (m *GetCurrentModelResponse) String() string { return proto.CompactTextString(m) }
func (*GetCurrentModelResponse) ProtoMessage()    {}
func (*GetCurrentModelResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_model_registry_1b4107131884d9c8, []int{2}
}
func (m *GetCurrentModelResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetCurrentModelResponse.Unmarshal(m, b)
}
func (m *GetCurrentModelResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetCurrentModelResponse.Marshal(b, m, deterministic)
}
func (dst *GetCurrentModelResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetCurrentModelResponse.Merge(dst, src)
}
func (m *GetCurrentModelResponse) XXX_Size() int {
	return xxx_messageInfo_GetCurrentModelResponse.Size(m)
}
func (m *GetCurrentModelResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_GetCurrentModelResponse.DiscardUnknown(m)
}

var xxx_messageInfo_GetCurrentModelResponse proto.InternalMessageInfo

func (m *GetCurrentModelResponse) GetModel() *_type.Model {
	if m != nil {
		return m.Model
	}
	return nil
}

func init() {
	proto.RegisterType((*RegisterModelRequest)(nil), "asgt.modelregistry.v1.RegisterModelRequest")
	proto.RegisterType((*GetCurrentModelRequest)(nil), "asgt.modelregistry.v1.GetCurrentModelRequest")
	proto.RegisterType((*GetCurrentModelResponse)(nil), "asgt.modelregistry.v1.GetCurrentModelResponse")
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
	RegisterModel(ctx context.Context, in *RegisterModelRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	GetCurrentModel(ctx context.Context, in *GetCurrentModelRequest, opts ...grpc.CallOption) (*GetCurrentModelResponse, error)
}

type modelRegistryClient struct {
	cc *grpc.ClientConn
}

func NewModelRegistryClient(cc *grpc.ClientConn) ModelRegistryClient {
	return &modelRegistryClient{cc}
}

func (c *modelRegistryClient) RegisterModel(ctx context.Context, in *RegisterModelRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/asgt.modelregistry.v1.ModelRegistry/RegisterModel", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *modelRegistryClient) GetCurrentModel(ctx context.Context, in *GetCurrentModelRequest, opts ...grpc.CallOption) (*GetCurrentModelResponse, error) {
	out := new(GetCurrentModelResponse)
	err := c.cc.Invoke(ctx, "/asgt.modelregistry.v1.ModelRegistry/GetCurrentModel", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ModelRegistryServer is the server API for ModelRegistry service.
type ModelRegistryServer interface {
	RegisterModel(context.Context, *RegisterModelRequest) (*empty.Empty, error)
	GetCurrentModel(context.Context, *GetCurrentModelRequest) (*GetCurrentModelResponse, error)
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
		FullMethod: "/asgt.modelregistry.v1.ModelRegistry/RegisterModel",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ModelRegistryServer).RegisterModel(ctx, req.(*RegisterModelRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ModelRegistry_GetCurrentModel_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetCurrentModelRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ModelRegistryServer).GetCurrentModel(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asgt.modelregistry.v1.ModelRegistry/GetCurrentModel",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ModelRegistryServer).GetCurrentModel(ctx, req.(*GetCurrentModelRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _ModelRegistry_serviceDesc = grpc.ServiceDesc{
	ServiceName: "asgt.modelregistry.v1.ModelRegistry",
	HandlerType: (*ModelRegistryServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "RegisterModel",
			Handler:    _ModelRegistry_RegisterModel_Handler,
		},
		{
			MethodName: "GetCurrentModel",
			Handler:    _ModelRegistry_GetCurrentModel_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "asgt/modelregistry/v1/model_registry.proto",
}

func init() {
	proto.RegisterFile("asgt/modelregistry/v1/model_registry.proto", fileDescriptor_model_registry_1b4107131884d9c8)
}

var fileDescriptor_model_registry_1b4107131884d9c8 = []byte{
	// 429 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x9c, 0x92, 0x5f, 0x6b, 0xd4, 0x40,
	0x14, 0xc5, 0x49, 0xd7, 0x6d, 0x65, 0x6a, 0x5c, 0x1d, 0xb7, 0xdb, 0xb0, 0x82, 0x84, 0x15, 0x24,
	0x54, 0x9d, 0xd8, 0xd5, 0x77, 0xf1, 0xff, 0x53, 0x5f, 0xa6, 0xc5, 0x07, 0x5f, 0xc2, 0xd4, 0xbd,
	0x86, 0x81, 0x24, 0x13, 0x67, 0xee, 0x06, 0xda, 0x2f, 0xea, 0xc7, 0xf0, 0x2b, 0x48, 0x66, 0x26,
	0x26, 0xd1, 0x15, 0xa4, 0x8f, 0x39, 0xe7, 0x77, 0x6e, 0xee, 0x5c, 0x0e, 0x39, 0x11, 0x26, 0xc7,
	0xb4, 0x54, 0x1b, 0x28, 0x34, 0xe4, 0xd2, 0xa0, 0xbe, 0x4a, 0x9b, 0x53, 0x27, 0x64, 0x9d, 0xc2,
	0x6a, 0xad, 0x50, 0xd1, 0xa3, 0x96, 0x65, 0x23, 0x96, 0x35, 0xa7, 0xcb, 0x63, 0x3b, 0x02, 0xaf,
	0x6a, 0x48, 0x37, 0x02, 0x85, 0x01, 0x74, 0xfc, 0xf2, 0xa8, 0x37, 0x6c, 0xc8, 0xcb, 0x51, 0x2f,
	0x6b, 0x68, 0xa4, 0x91, 0xaa, 0xf2, 0xce, 0xa3, 0xde, 0x41, 0xa1, 0x73, 0xc0, 0xac, 0x04, 0xd4,
	0xf2, 0xab, 0xf1, 0xfe, 0xc3, 0x5c, 0xa9, 0xbc, 0x80, 0xd4, 0x7e, 0x5d, 0x6e, 0xbf, 0xa5, 0x50,
	0xd6, 0xe8, 0xb7, 0x5b, 0xfd, 0xdc, 0x23, 0x73, 0x6e, 0xd7, 0x02, 0x7d, 0xd6, 0xfe, 0x8e, 0xc3,
	0xf7, 0x2d, 0x18, 0xa4, 0xcf, 0xc8, 0x81, 0xdf, 0x2b, 0x0a, 0xe2, 0x20, 0x39, 0x5c, 0x53, 0x66,
	0x1f, 0xd2, 0xfe, 0x87, 0xbd, 0x77, 0x0e, 0xef, 0x10, 0x9a, 0x92, 0xdb, 0xdd, 0x56, 0xd1, 0x9e,
	0xc5, 0x1f, 0x0c, 0x70, 0xee, 0x2d, 0xfe, 0x1b, 0xa2, 0x8f, 0x49, 0xe8, 0xae, 0xd5, 0x80, 0xb6,
	0xa9, 0x49, 0x1c, 0x24, 0x13, 0x7e, 0xc7, 0x8a, 0x9f, 0x9d, 0x46, 0x4f, 0xc8, 0x7d, 0x54, 0x28,
	0x8a, 0xcc, 0x88, 0xb2, 0x2e, 0x20, 0x33, 0xf2, 0x1a, 0xa2, 0x5b, 0x71, 0x90, 0x4c, 0xf9, 0xcc,
	0x1a, 0xe7, 0x56, 0x3f, 0x97, 0xd7, 0x40, 0x5f, 0x90, 0x39, 0x6a, 0x21, 0x2b, 0x59, 0xe5, 0x23,
	0x7c, 0x6a, 0x71, 0xda, 0x79, 0x83, 0xc4, 0x2b, 0xb2, 0x68, 0x44, 0x21, 0x37, 0x02, 0xa5, 0xaa,
	0x46, 0x99, 0x7d, 0x9b, 0x99, 0xf7, 0xee, 0x20, 0xf5, 0x9a, 0xdc, 0x1d, 0x5f, 0x39, 0x3a, 0x88,
	0x27, 0xc9, 0xe1, 0x3a, 0x1a, 0xbc, 0xf7, 0xc2, 0x02, 0x67, 0xce, 0xe7, 0x21, 0x0e, 0x3f, 0x57,
	0x1f, 0xc9, 0xe2, 0x13, 0xe0, 0xbb, 0xad, 0xd6, 0x50, 0xe1, 0xcd, 0x4f, 0xbe, 0x7a, 0x43, 0x8e,
	0xff, 0x9a, 0x63, 0x6a, 0x55, 0x19, 0xa0, 0x4f, 0xc8, 0xd4, 0xde, 0xd1, 0x8f, 0xb9, 0x37, 0x18,
	0xe3, 0x40, 0x67, 0xaf, 0x7f, 0x04, 0x24, 0xf4, 0x49, 0x57, 0x4c, 0x7a, 0x41, 0xc2, 0x51, 0x1b,
	0xe8, 0x53, 0xb6, 0xb3, 0xbe, 0x6c, 0x57, 0x67, 0x96, 0x0b, 0xe6, 0xaa, 0xc6, 0xba, 0xaa, 0xb1,
	0x0f, 0x6d, 0xd5, 0x68, 0x4d, 0x66, 0x7f, 0xac, 0x4a, 0x9f, 0xff, 0x63, 0xee, 0xee, 0xd3, 0x2c,
	0xd9, 0xff, 0xe2, 0xee, 0x02, 0x6f, 0x67, 0x5f, 0xc2, 0x11, 0x7b, 0xb9, 0x6f, 0x57, 0x7a, 0xf9,
	0x2b, 0x00, 0x00, 0xff, 0xff, 0x4b, 0x40, 0x3c, 0x90, 0xba, 0x03, 0x00, 0x00,
}
