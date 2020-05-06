// Code generated by protoc-gen-go. DO NOT EDIT.
// source: asgt/modeltrainer/v1alpha1/training_service.proto

package modeltrainer

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

type TrainModelRequest struct {
	Consumer             string   `protobuf:"bytes,1,opt,name=consumer,proto3" json:"consumer,omitempty"`
	ModelType            string   `protobuf:"bytes,2,opt,name=model_type,json=modelType,proto3" json:"model_type,omitempty"`
	DatasetName          string   `protobuf:"bytes,3,opt,name=dataset_name,json=datasetName,proto3" json:"dataset_name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *TrainModelRequest) Reset()         { *m = TrainModelRequest{} }
func (m *TrainModelRequest) String() string { return proto.CompactTextString(m) }
func (*TrainModelRequest) ProtoMessage()    {}
func (*TrainModelRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_training_service_add618e2cbbe5828, []int{0}
}
func (m *TrainModelRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TrainModelRequest.Unmarshal(m, b)
}
func (m *TrainModelRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TrainModelRequest.Marshal(b, m, deterministic)
}
func (dst *TrainModelRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TrainModelRequest.Merge(dst, src)
}
func (m *TrainModelRequest) XXX_Size() int {
	return xxx_messageInfo_TrainModelRequest.Size(m)
}
func (m *TrainModelRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_TrainModelRequest.DiscardUnknown(m)
}

var xxx_messageInfo_TrainModelRequest proto.InternalMessageInfo

func (m *TrainModelRequest) GetConsumer() string {
	if m != nil {
		return m.Consumer
	}
	return ""
}

func (m *TrainModelRequest) GetModelType() string {
	if m != nil {
		return m.ModelType
	}
	return ""
}

func (m *TrainModelRequest) GetDatasetName() string {
	if m != nil {
		return m.DatasetName
	}
	return ""
}

type SetTaskStatusRequest struct {
	Task                 *TrainModelTask `protobuf:"bytes,1,opt,name=task,proto3" json:"task,omitempty"`
	XXX_NoUnkeyedLiteral struct{}        `json:"-"`
	XXX_unrecognized     []byte          `json:"-"`
	XXX_sizecache        int32           `json:"-"`
}

func (m *SetTaskStatusRequest) Reset()         { *m = SetTaskStatusRequest{} }
func (m *SetTaskStatusRequest) String() string { return proto.CompactTextString(m) }
func (*SetTaskStatusRequest) ProtoMessage()    {}
func (*SetTaskStatusRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_training_service_add618e2cbbe5828, []int{1}
}
func (m *SetTaskStatusRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SetTaskStatusRequest.Unmarshal(m, b)
}
func (m *SetTaskStatusRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SetTaskStatusRequest.Marshal(b, m, deterministic)
}
func (dst *SetTaskStatusRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SetTaskStatusRequest.Merge(dst, src)
}
func (m *SetTaskStatusRequest) XXX_Size() int {
	return xxx_messageInfo_SetTaskStatusRequest.Size(m)
}
func (m *SetTaskStatusRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_SetTaskStatusRequest.DiscardUnknown(m)
}

var xxx_messageInfo_SetTaskStatusRequest proto.InternalMessageInfo

func (m *SetTaskStatusRequest) GetTask() *TrainModelTask {
	if m != nil {
		return m.Task
	}
	return nil
}

func init() {
	proto.RegisterType((*TrainModelRequest)(nil), "asgt.modeltrainer.v1alpha1.TrainModelRequest")
	proto.RegisterType((*SetTaskStatusRequest)(nil), "asgt.modeltrainer.v1alpha1.SetTaskStatusRequest")
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// TrainingServiceClient is the client API for TrainingService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type TrainingServiceClient interface {
	TrainModel(ctx context.Context, in *TrainModelRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	SetTaskStatus(ctx context.Context, in *SetTaskStatusRequest, opts ...grpc.CallOption) (*empty.Empty, error)
}

type trainingServiceClient struct {
	cc *grpc.ClientConn
}

func NewTrainingServiceClient(cc *grpc.ClientConn) TrainingServiceClient {
	return &trainingServiceClient{cc}
}

func (c *trainingServiceClient) TrainModel(ctx context.Context, in *TrainModelRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/asgt.modeltrainer.v1alpha1.TrainingService/TrainModel", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *trainingServiceClient) SetTaskStatus(ctx context.Context, in *SetTaskStatusRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/asgt.modeltrainer.v1alpha1.TrainingService/SetTaskStatus", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// TrainingServiceServer is the server API for TrainingService service.
type TrainingServiceServer interface {
	TrainModel(context.Context, *TrainModelRequest) (*empty.Empty, error)
	SetTaskStatus(context.Context, *SetTaskStatusRequest) (*empty.Empty, error)
}

func RegisterTrainingServiceServer(s *grpc.Server, srv TrainingServiceServer) {
	s.RegisterService(&_TrainingService_serviceDesc, srv)
}

func _TrainingService_TrainModel_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TrainModelRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TrainingServiceServer).TrainModel(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asgt.modeltrainer.v1alpha1.TrainingService/TrainModel",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TrainingServiceServer).TrainModel(ctx, req.(*TrainModelRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TrainingService_SetTaskStatus_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SetTaskStatusRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TrainingServiceServer).SetTaskStatus(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asgt.modeltrainer.v1alpha1.TrainingService/SetTaskStatus",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TrainingServiceServer).SetTaskStatus(ctx, req.(*SetTaskStatusRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _TrainingService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "asgt.modeltrainer.v1alpha1.TrainingService",
	HandlerType: (*TrainingServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "TrainModel",
			Handler:    _TrainingService_TrainModel_Handler,
		},
		{
			MethodName: "SetTaskStatus",
			Handler:    _TrainingService_SetTaskStatus_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "asgt/modeltrainer/v1alpha1/training_service.proto",
}

func init() {
	proto.RegisterFile("asgt/modeltrainer/v1alpha1/training_service.proto", fileDescriptor_training_service_add618e2cbbe5828)
}

var fileDescriptor_training_service_add618e2cbbe5828 = []byte{
	// 295 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x90, 0x4f, 0x4b, 0xc3, 0x40,
	0x10, 0xc5, 0xa9, 0x8a, 0xd8, 0x69, 0x55, 0x5c, 0x44, 0x4a, 0x44, 0xd0, 0x9e, 0x44, 0x70, 0x63,
	0xeb, 0xdd, 0x83, 0xe0, 0x51, 0x0f, 0x49, 0x10, 0xf4, 0x12, 0xa6, 0xed, 0x18, 0x43, 0x93, 0x6c,
	0x9a, 0x9d, 0x14, 0xf2, 0xf1, 0xfc, 0x66, 0xb2, 0x9b, 0xc4, 0x56, 0xb0, 0xd2, 0xe3, 0xfc, 0x79,
	0xbf, 0x99, 0xf7, 0x60, 0x84, 0x3a, 0x62, 0x37, 0x55, 0x33, 0x4a, 0xb8, 0xc0, 0x38, 0xa3, 0xc2,
	0x5d, 0x8e, 0x30, 0xc9, 0x3f, 0x71, 0xe4, 0xda, 0x46, 0x9c, 0x45, 0xa1, 0xa6, 0x62, 0x19, 0x4f,
	0x49, 0xe6, 0x85, 0x62, 0x25, 0x1c, 0x23, 0x91, 0xeb, 0x12, 0xd9, 0x4a, 0x1c, 0xb9, 0x0d, 0x8e,
	0x51, 0xcf, 0x6b, 0x96, 0x73, 0x1e, 0x29, 0x15, 0x25, 0xe4, 0xda, 0x6a, 0x52, 0x7e, 0xb8, 0x94,
	0xe6, 0x5c, 0xd5, 0xc3, 0xe1, 0x02, 0x4e, 0x02, 0xa3, 0x79, 0x36, 0x38, 0x8f, 0x16, 0x25, 0x69,
	0x16, 0x0e, 0x1c, 0x4c, 0x55, 0xa6, 0xcb, 0x94, 0x8a, 0x41, 0xe7, 0xb2, 0x73, 0xdd, 0xf5, 0x7e,
	0x6a, 0x71, 0x01, 0x60, 0x4f, 0x87, 0x5c, 0xe5, 0x34, 0xd8, 0xb1, 0xd3, 0xae, 0xed, 0x04, 0x55,
	0x4e, 0xe2, 0x0a, 0xfa, 0x33, 0x64, 0xd4, 0xc4, 0x61, 0x86, 0x29, 0x0d, 0x76, 0xed, 0x42, 0xaf,
	0xe9, 0xbd, 0x60, 0x4a, 0xc3, 0x57, 0x38, 0xf5, 0x89, 0x03, 0xd4, 0x73, 0x9f, 0x91, 0x4b, 0xdd,
	0x5e, 0x7d, 0x80, 0x3d, 0xf3, 0xb5, 0xbd, 0xd8, 0x1b, 0xdf, 0xc8, 0xcd, 0x11, 0xc8, 0xd5, 0xcb,
	0x06, 0xe3, 0x59, 0xdd, 0xf8, 0xab, 0x03, 0xc7, 0x41, 0xe3, 0xdf, 0xaf, 0xd3, 0x14, 0x3e, 0xc0,
	0x6a, 0x57, 0xdc, 0x6e, 0xc7, 0x6c, 0x1e, 0x72, 0xce, 0x64, 0x9d, 0x9c, 0x6c, 0x93, 0x93, 0x4f,
	0x26, 0x39, 0xf1, 0x06, 0x87, 0xbf, 0x0c, 0x88, 0xbb, 0xff, 0xb8, 0x7f, 0x79, 0xdd, 0x84, 0x7e,
	0x3c, 0x7a, 0xef, 0xaf, 0x53, 0x26, 0xfb, 0x76, 0x7e, 0xff, 0x1d, 0x00, 0x00, 0xff, 0xff, 0x06,
	0x05, 0x79, 0xb4, 0x43, 0x02, 0x00, 0x00,
}