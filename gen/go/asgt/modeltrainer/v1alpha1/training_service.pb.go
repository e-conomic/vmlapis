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
	return fileDescriptor_training_service_ea5d89a78c5b9614, []int{0}
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

type RunSchedulerRequest struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *RunSchedulerRequest) Reset()         { *m = RunSchedulerRequest{} }
func (m *RunSchedulerRequest) String() string { return proto.CompactTextString(m) }
func (*RunSchedulerRequest) ProtoMessage()    {}
func (*RunSchedulerRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_training_service_ea5d89a78c5b9614, []int{1}
}
func (m *RunSchedulerRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RunSchedulerRequest.Unmarshal(m, b)
}
func (m *RunSchedulerRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RunSchedulerRequest.Marshal(b, m, deterministic)
}
func (dst *RunSchedulerRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RunSchedulerRequest.Merge(dst, src)
}
func (m *RunSchedulerRequest) XXX_Size() int {
	return xxx_messageInfo_RunSchedulerRequest.Size(m)
}
func (m *RunSchedulerRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_RunSchedulerRequest.DiscardUnknown(m)
}

var xxx_messageInfo_RunSchedulerRequest proto.InternalMessageInfo

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
	return fileDescriptor_training_service_ea5d89a78c5b9614, []int{2}
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
	proto.RegisterType((*RunSchedulerRequest)(nil), "asgt.modeltrainer.v1alpha1.RunSchedulerRequest")
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
	RunScheduler(ctx context.Context, in *RunSchedulerRequest, opts ...grpc.CallOption) (*empty.Empty, error)
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

func (c *trainingServiceClient) RunScheduler(ctx context.Context, in *RunSchedulerRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/asgt.modeltrainer.v1alpha1.TrainingService/RunScheduler", in, out, opts...)
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
	RunScheduler(context.Context, *RunSchedulerRequest) (*empty.Empty, error)
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

func _TrainingService_RunScheduler_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RunSchedulerRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TrainingServiceServer).RunScheduler(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asgt.modeltrainer.v1alpha1.TrainingService/RunScheduler",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TrainingServiceServer).RunScheduler(ctx, req.(*RunSchedulerRequest))
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
			MethodName: "RunScheduler",
			Handler:    _TrainingService_RunScheduler_Handler,
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
	proto.RegisterFile("asgt/modeltrainer/v1alpha1/training_service.proto", fileDescriptor_training_service_ea5d89a78c5b9614)
}

var fileDescriptor_training_service_ea5d89a78c5b9614 = []byte{
	// 325 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x90, 0x4f, 0x4f, 0xf2, 0x40,
	0x10, 0x87, 0x03, 0xef, 0x1b, 0x23, 0x03, 0x6a, 0x5c, 0xff, 0x84, 0xd4, 0x98, 0x28, 0x27, 0x63,
	0xe2, 0x56, 0xf0, 0xee, 0xc1, 0xc4, 0xa3, 0x1e, 0xda, 0x46, 0xa3, 0x17, 0xb2, 0xc0, 0x58, 0x08,
	0x6d, 0xb7, 0xec, 0xce, 0x92, 0xf0, 0x55, 0xfc, 0xb4, 0x66, 0xb7, 0x45, 0x30, 0xa1, 0x84, 0xe3,
	0xce, 0xec, 0xef, 0x99, 0x99, 0x07, 0xba, 0x42, 0xc7, 0xe4, 0xa7, 0x72, 0x84, 0x09, 0x29, 0x31,
	0xc9, 0x50, 0xf9, 0xf3, 0xae, 0x48, 0xf2, 0xb1, 0xe8, 0xfa, 0xae, 0x30, 0xc9, 0xe2, 0xbe, 0x46,
	0x35, 0x9f, 0x0c, 0x91, 0xe7, 0x4a, 0x92, 0x64, 0x9e, 0x8d, 0xf0, 0xf5, 0x08, 0x5f, 0x46, 0x3c,
	0xbe, 0x0b, 0x8e, 0x84, 0x9e, 0x16, 0x2c, 0xef, 0x22, 0x96, 0x32, 0x4e, 0xd0, 0x77, 0xaf, 0x81,
	0xf9, 0xf2, 0x31, 0xcd, 0x69, 0x51, 0x34, 0x3b, 0x33, 0x38, 0x8e, 0x6c, 0xe6, 0xc5, 0xe2, 0x02,
	0x9c, 0x19, 0xd4, 0xc4, 0x3c, 0xd8, 0x1f, 0xca, 0x4c, 0x9b, 0x14, 0x55, 0xbb, 0x76, 0x55, 0xbb,
	0x69, 0x04, 0xbf, 0x6f, 0x76, 0x09, 0xe0, 0x46, 0xf7, 0x69, 0x91, 0x63, 0xbb, 0xee, 0xba, 0x0d,
	0x57, 0x89, 0x16, 0x39, 0xb2, 0x6b, 0x68, 0x8d, 0x04, 0x09, 0x8d, 0xd4, 0xcf, 0x44, 0x8a, 0xed,
	0x7f, 0xee, 0x43, 0xb3, 0xac, 0xbd, 0x8a, 0x14, 0x3b, 0x67, 0x70, 0x12, 0x98, 0x2c, 0x1c, 0x8e,
	0x71, 0x64, 0x12, 0x54, 0xe5, 0xd0, 0xce, 0x1b, 0x9c, 0x86, 0x48, 0x91, 0xd0, 0xd3, 0x90, 0x04,
	0x19, 0xbd, 0x5c, 0xe6, 0x11, 0xfe, 0xdb, 0x63, 0xdc, 0x22, 0xcd, 0xde, 0x2d, 0xaf, 0x36, 0xc3,
	0x57, 0x97, 0x58, 0x4c, 0xe0, 0x72, 0xbd, 0xef, 0x3a, 0x1c, 0x45, 0xa5, 0x96, 0xb0, 0x90, 0xcc,
	0x42, 0x80, 0xd5, 0x5f, 0x76, 0xb7, 0x1b, 0xb3, 0x5c, 0xc8, 0x3b, 0xe7, 0x85, 0x50, 0xbe, 0x14,
	0xca, 0x9f, 0xad, 0x50, 0xf6, 0x0e, 0xad, 0xf5, 0xbb, 0x98, 0xbf, 0x0d, 0xbb, 0xc1, 0x40, 0x25,
	0xf8, 0x03, 0x0e, 0xfe, 0x98, 0x61, 0xf7, 0xdb, 0xc8, 0x9b, 0x24, 0x56, 0xa1, 0x9f, 0x0e, 0x3f,
	0x5b, 0xeb, 0x94, 0xc1, 0x9e, 0xeb, 0x3f, 0xfc, 0x04, 0x00, 0x00, 0xff, 0xff, 0xb6, 0x76, 0xa4,
	0xf9, 0xb3, 0x02, 0x00, 0x00,
}
