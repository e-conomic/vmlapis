// Code generated by protoc-gen-go. DO NOT EDIT.
// source: asgt/dataservice/v1alpha1/dataset_service.proto

package dataservice

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import timestamp "github.com/golang/protobuf/ptypes/timestamp"

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

type GetDatasetRequest struct {
	Consumer             string   `protobuf:"bytes,1,opt,name=consumer,proto3" json:"consumer,omitempty"`
	DatasetName          string   `protobuf:"bytes,2,opt,name=dataset_name,json=datasetName,proto3" json:"dataset_name,omitempty"`
	DatasetType          string   `protobuf:"bytes,3,opt,name=dataset_type,json=datasetType,proto3" json:"dataset_type,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetDatasetRequest) Reset()         { *m = GetDatasetRequest{} }
func (m *GetDatasetRequest) String() string { return proto.CompactTextString(m) }
func (*GetDatasetRequest) ProtoMessage()    {}
func (*GetDatasetRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_dataset_service_12d6783f8673f9bc, []int{0}
}
func (m *GetDatasetRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetDatasetRequest.Unmarshal(m, b)
}
func (m *GetDatasetRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetDatasetRequest.Marshal(b, m, deterministic)
}
func (dst *GetDatasetRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetDatasetRequest.Merge(dst, src)
}
func (m *GetDatasetRequest) XXX_Size() int {
	return xxx_messageInfo_GetDatasetRequest.Size(m)
}
func (m *GetDatasetRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetDatasetRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetDatasetRequest proto.InternalMessageInfo

func (m *GetDatasetRequest) GetConsumer() string {
	if m != nil {
		return m.Consumer
	}
	return ""
}

func (m *GetDatasetRequest) GetDatasetName() string {
	if m != nil {
		return m.DatasetName
	}
	return ""
}

func (m *GetDatasetRequest) GetDatasetType() string {
	if m != nil {
		return m.DatasetType
	}
	return ""
}

type DatasetInfo struct {
	Consumer               string               `protobuf:"bytes,1,opt,name=consumer,proto3" json:"consumer,omitempty"`
	Name                   string               `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Type                   string               `protobuf:"bytes,3,opt,name=type,proto3" json:"type,omitempty"`
	RetentionPolicy        *RetentionPolicy     `protobuf:"bytes,9,opt,name=retention_policy,json=retentionPolicy,proto3" json:"retention_policy,omitempty"`
	TrainingGracePeriodEnd *timestamp.Timestamp `protobuf:"bytes,10,opt,name=training_grace_period_end,json=trainingGracePeriodEnd,proto3" json:"training_grace_period_end,omitempty"`
	XXX_NoUnkeyedLiteral   struct{}             `json:"-"`
	XXX_unrecognized       []byte               `json:"-"`
	XXX_sizecache          int32                `json:"-"`
}

func (m *DatasetInfo) Reset()         { *m = DatasetInfo{} }
func (m *DatasetInfo) String() string { return proto.CompactTextString(m) }
func (*DatasetInfo) ProtoMessage()    {}
func (*DatasetInfo) Descriptor() ([]byte, []int) {
	return fileDescriptor_dataset_service_12d6783f8673f9bc, []int{1}
}
func (m *DatasetInfo) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DatasetInfo.Unmarshal(m, b)
}
func (m *DatasetInfo) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DatasetInfo.Marshal(b, m, deterministic)
}
func (dst *DatasetInfo) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DatasetInfo.Merge(dst, src)
}
func (m *DatasetInfo) XXX_Size() int {
	return xxx_messageInfo_DatasetInfo.Size(m)
}
func (m *DatasetInfo) XXX_DiscardUnknown() {
	xxx_messageInfo_DatasetInfo.DiscardUnknown(m)
}

var xxx_messageInfo_DatasetInfo proto.InternalMessageInfo

func (m *DatasetInfo) GetConsumer() string {
	if m != nil {
		return m.Consumer
	}
	return ""
}

func (m *DatasetInfo) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *DatasetInfo) GetType() string {
	if m != nil {
		return m.Type
	}
	return ""
}

func (m *DatasetInfo) GetRetentionPolicy() *RetentionPolicy {
	if m != nil {
		return m.RetentionPolicy
	}
	return nil
}

func (m *DatasetInfo) GetTrainingGracePeriodEnd() *timestamp.Timestamp {
	if m != nil {
		return m.TrainingGracePeriodEnd
	}
	return nil
}

type GetDatasetResponse struct {
	Info                 *DatasetInfo `protobuf:"bytes,1,opt,name=info,proto3" json:"info,omitempty"`
	XXX_NoUnkeyedLiteral struct{}     `json:"-"`
	XXX_unrecognized     []byte       `json:"-"`
	XXX_sizecache        int32        `json:"-"`
}

func (m *GetDatasetResponse) Reset()         { *m = GetDatasetResponse{} }
func (m *GetDatasetResponse) String() string { return proto.CompactTextString(m) }
func (*GetDatasetResponse) ProtoMessage()    {}
func (*GetDatasetResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_dataset_service_12d6783f8673f9bc, []int{2}
}
func (m *GetDatasetResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetDatasetResponse.Unmarshal(m, b)
}
func (m *GetDatasetResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetDatasetResponse.Marshal(b, m, deterministic)
}
func (dst *GetDatasetResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetDatasetResponse.Merge(dst, src)
}
func (m *GetDatasetResponse) XXX_Size() int {
	return xxx_messageInfo_GetDatasetResponse.Size(m)
}
func (m *GetDatasetResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_GetDatasetResponse.DiscardUnknown(m)
}

var xxx_messageInfo_GetDatasetResponse proto.InternalMessageInfo

func (m *GetDatasetResponse) GetInfo() *DatasetInfo {
	if m != nil {
		return m.Info
	}
	return nil
}

func init() {
	proto.RegisterType((*GetDatasetRequest)(nil), "asgt.dataservice.v1alpha1.GetDatasetRequest")
	proto.RegisterType((*DatasetInfo)(nil), "asgt.dataservice.v1alpha1.DatasetInfo")
	proto.RegisterType((*GetDatasetResponse)(nil), "asgt.dataservice.v1alpha1.GetDatasetResponse")
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// DatasetServiceClient is the client API for DatasetService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type DatasetServiceClient interface {
	GetDataset(ctx context.Context, in *GetDatasetRequest, opts ...grpc.CallOption) (*GetDatasetResponse, error)
}

type datasetServiceClient struct {
	cc *grpc.ClientConn
}

func NewDatasetServiceClient(cc *grpc.ClientConn) DatasetServiceClient {
	return &datasetServiceClient{cc}
}

func (c *datasetServiceClient) GetDataset(ctx context.Context, in *GetDatasetRequest, opts ...grpc.CallOption) (*GetDatasetResponse, error) {
	out := new(GetDatasetResponse)
	err := c.cc.Invoke(ctx, "/asgt.dataservice.v1alpha1.DatasetService/GetDataset", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// DatasetServiceServer is the server API for DatasetService service.
type DatasetServiceServer interface {
	GetDataset(context.Context, *GetDatasetRequest) (*GetDatasetResponse, error)
}

func RegisterDatasetServiceServer(s *grpc.Server, srv DatasetServiceServer) {
	s.RegisterService(&_DatasetService_serviceDesc, srv)
}

func _DatasetService_GetDataset_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetDatasetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DatasetServiceServer).GetDataset(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asgt.dataservice.v1alpha1.DatasetService/GetDataset",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DatasetServiceServer).GetDataset(ctx, req.(*GetDatasetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _DatasetService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "asgt.dataservice.v1alpha1.DatasetService",
	HandlerType: (*DatasetServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetDataset",
			Handler:    _DatasetService_GetDataset_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "asgt/dataservice/v1alpha1/dataset_service.proto",
}

func init() {
	proto.RegisterFile("asgt/dataservice/v1alpha1/dataset_service.proto", fileDescriptor_dataset_service_12d6783f8673f9bc)
}

var fileDescriptor_dataset_service_12d6783f8673f9bc = []byte{
	// 364 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x92, 0xcf, 0x4b, 0xf3, 0x30,
	0x1c, 0xc6, 0xd9, 0xde, 0xf2, 0xb2, 0xa5, 0xef, 0x8f, 0x99, 0x83, 0x74, 0xbd, 0x38, 0x87, 0xc8,
	0x10, 0x4d, 0xd9, 0xbc, 0x79, 0x14, 0x65, 0xe8, 0x41, 0x46, 0xdd, 0x2e, 0x5e, 0x4a, 0xd6, 0x7e,
	0x57, 0x03, 0x6b, 0x12, 0xd3, 0x74, 0x30, 0x3c, 0xfb, 0x7f, 0xcb, 0xd2, 0x56, 0x33, 0xc4, 0xe2,
	0x2d, 0xf9, 0xe6, 0xf9, 0x3c, 0xcf, 0x97, 0x87, 0xa0, 0x80, 0xe6, 0xa9, 0x0e, 0x12, 0xaa, 0x69,
	0x0e, 0x6a, 0xc3, 0x62, 0x08, 0x36, 0x63, 0xba, 0x96, 0xcf, 0x74, 0x5c, 0x0d, 0x75, 0x54, 0x3d,
	0x10, 0xa9, 0x84, 0x16, 0xb8, 0xbf, 0x03, 0x88, 0x05, 0x90, 0x1a, 0xf0, 0x4f, 0x9a, 0xbd, 0x4a,
	0x03, 0xff, 0x28, 0x15, 0x22, 0x5d, 0x43, 0x60, 0x6e, 0xcb, 0x62, 0x15, 0x68, 0x96, 0x41, 0xae,
	0x69, 0x26, 0x4b, 0xc1, 0xb0, 0x40, 0x07, 0x53, 0xd0, 0x37, 0x65, 0x7a, 0x08, 0x2f, 0x05, 0xe4,
	0x1a, 0xfb, 0xa8, 0x13, 0x0b, 0x9e, 0x17, 0x19, 0x28, 0xaf, 0x35, 0x68, 0x8d, 0xba, 0xe1, 0xc7,
	0x1d, 0x1f, 0xa3, 0x3f, 0xf5, 0xae, 0x9c, 0x66, 0xe0, 0xb5, 0xcd, 0xbb, 0x5b, 0xcd, 0x1e, 0x68,
	0x06, 0xb6, 0x44, 0x6f, 0x25, 0x78, 0xbf, 0xf6, 0x24, 0xf3, 0xad, 0x84, 0xe1, 0x5b, 0x1b, 0xb9,
	0x55, 0xe8, 0x1d, 0x5f, 0x89, 0xc6, 0x44, 0x8c, 0x1c, 0x2b, 0xc9, 0x9c, 0x77, 0x33, 0xcb, 0xda,
	0x9c, 0xf1, 0x02, 0xf5, 0x14, 0x68, 0xe0, 0x9a, 0x09, 0x1e, 0x49, 0xb1, 0x66, 0xf1, 0xd6, 0xeb,
	0x0e, 0x5a, 0x23, 0x77, 0x72, 0x46, 0xbe, 0xed, 0x91, 0x84, 0x35, 0x32, 0x33, 0x44, 0xf8, 0x5f,
	0xed, 0x0f, 0xf0, 0x02, 0xf5, 0xb5, 0xa2, 0x8c, 0x33, 0x9e, 0x46, 0xa9, 0xa2, 0x31, 0x44, 0x12,
	0x14, 0x13, 0x49, 0x04, 0x3c, 0xf1, 0x90, 0xf1, 0xf7, 0x49, 0x59, 0x33, 0xa9, 0x6b, 0x26, 0xf3,
	0xba, 0xe6, 0xf0, 0xb0, 0x86, 0xa7, 0x3b, 0x76, 0x66, 0xd0, 0x5b, 0x9e, 0xdc, 0x3b, 0x1d, 0xa7,
	0xd7, 0x1d, 0xce, 0x10, 0xb6, 0xeb, 0xcf, 0xa5, 0xe0, 0x39, 0xe0, 0x2b, 0xe4, 0x30, 0xbe, 0x12,
	0xa6, 0x09, 0x77, 0x72, 0xda, 0xb0, 0xbd, 0xd5, 0x61, 0x68, 0x98, 0xc9, 0x2b, 0xfa, 0x57, 0x0d,
	0x1f, 0x4b, 0x31, 0x66, 0x08, 0x7d, 0x66, 0xe0, 0xf3, 0x06, 0xb7, 0x2f, 0x3f, 0xc1, 0xbf, 0xf8,
	0xa1, 0xba, 0x5c, 0xfc, 0xfa, 0xef, 0x93, 0x6b, 0x49, 0x97, 0xbf, 0x4d, 0x1f, 0x97, 0xef, 0x01,
	0x00, 0x00, 0xff, 0xff, 0xc9, 0x25, 0x41, 0xc4, 0xf8, 0x02, 0x00, 0x00,
}
