// Code generated by protoc-gen-go. DO NOT EDIT.
// source: asgt/dataservice/v1alpha1/bank.proto

package dataservice

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import v1alpha1 "github.com/e-conomic/vmlapis/gen/go/asgt/jester/v1alpha1"
import _ "github.com/e-conomic/vmlapis/gen/go/gen_bq_schema"
import empty "github.com/golang/protobuf/ptypes/empty"
import _ "google.golang.org/genproto/googleapis/api/annotations"

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

// Bank BQ schema gen - could be used for adding direct developer data endpoints
type BankEntry struct {
	Id                   string                     `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Consumer             string                     `protobuf:"bytes,2,opt,name=consumer,proto3" json:"consumer,omitempty"`
	Dataset              string                     `protobuf:"bytes,3,opt,name=dataset,proto3" json:"dataset,omitempty"`
	Tags                 []string                   `protobuf:"bytes,4,rep,name=tags,proto3" json:"tags,omitempty"`
	Input                *v1alpha1.BankRequest_Data `protobuf:"bytes,5,opt,name=input,proto3" json:"input,omitempty"`
	TrueValues           []*DataTuple               `protobuf:"bytes,6,rep,name=true_values,json=trueValues,proto3" json:"true_values,omitempty"`
	PredValues           []*PredictedTuple          `protobuf:"bytes,7,rep,name=pred_values,json=predValues,proto3" json:"pred_values,omitempty"`
	TimeAdded            uint64                     `protobuf:"varint,8,opt,name=time_added,json=timeAdded,proto3" json:"time_added,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                   `json:"-"`
	XXX_unrecognized     []byte                     `json:"-"`
	XXX_sizecache        int32                      `json:"-"`
}

func (m *BankEntry) Reset()         { *m = BankEntry{} }
func (m *BankEntry) String() string { return proto.CompactTextString(m) }
func (*BankEntry) ProtoMessage()    {}
func (*BankEntry) Descriptor() ([]byte, []int) {
	return fileDescriptor_bank_8dabe4524a14e40d, []int{0}
}
func (m *BankEntry) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_BankEntry.Unmarshal(m, b)
}
func (m *BankEntry) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_BankEntry.Marshal(b, m, deterministic)
}
func (dst *BankEntry) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BankEntry.Merge(dst, src)
}
func (m *BankEntry) XXX_Size() int {
	return xxx_messageInfo_BankEntry.Size(m)
}
func (m *BankEntry) XXX_DiscardUnknown() {
	xxx_messageInfo_BankEntry.DiscardUnknown(m)
}

var xxx_messageInfo_BankEntry proto.InternalMessageInfo

func (m *BankEntry) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *BankEntry) GetConsumer() string {
	if m != nil {
		return m.Consumer
	}
	return ""
}

func (m *BankEntry) GetDataset() string {
	if m != nil {
		return m.Dataset
	}
	return ""
}

func (m *BankEntry) GetTags() []string {
	if m != nil {
		return m.Tags
	}
	return nil
}

func (m *BankEntry) GetInput() *v1alpha1.BankRequest_Data {
	if m != nil {
		return m.Input
	}
	return nil
}

func (m *BankEntry) GetTrueValues() []*DataTuple {
	if m != nil {
		return m.TrueValues
	}
	return nil
}

func (m *BankEntry) GetPredValues() []*PredictedTuple {
	if m != nil {
		return m.PredValues
	}
	return nil
}

func (m *BankEntry) GetTimeAdded() uint64 {
	if m != nil {
		return m.TimeAdded
	}
	return 0
}

type BankEntryInput struct {
	Input                *v1alpha1.BankRequest_Data `protobuf:"bytes,1,opt,name=input,proto3" json:"input,omitempty"`
	TrueValues           []*DataTuple               `protobuf:"bytes,2,rep,name=true_values,json=trueValues,proto3" json:"true_values,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                   `json:"-"`
	XXX_unrecognized     []byte                     `json:"-"`
	XXX_sizecache        int32                      `json:"-"`
}

func (m *BankEntryInput) Reset()         { *m = BankEntryInput{} }
func (m *BankEntryInput) String() string { return proto.CompactTextString(m) }
func (*BankEntryInput) ProtoMessage()    {}
func (*BankEntryInput) Descriptor() ([]byte, []int) {
	return fileDescriptor_bank_8dabe4524a14e40d, []int{1}
}
func (m *BankEntryInput) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_BankEntryInput.Unmarshal(m, b)
}
func (m *BankEntryInput) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_BankEntryInput.Marshal(b, m, deterministic)
}
func (dst *BankEntryInput) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BankEntryInput.Merge(dst, src)
}
func (m *BankEntryInput) XXX_Size() int {
	return xxx_messageInfo_BankEntryInput.Size(m)
}
func (m *BankEntryInput) XXX_DiscardUnknown() {
	xxx_messageInfo_BankEntryInput.DiscardUnknown(m)
}

var xxx_messageInfo_BankEntryInput proto.InternalMessageInfo

func (m *BankEntryInput) GetInput() *v1alpha1.BankRequest_Data {
	if m != nil {
		return m.Input
	}
	return nil
}

func (m *BankEntryInput) GetTrueValues() []*DataTuple {
	if m != nil {
		return m.TrueValues
	}
	return nil
}

type CreateBankDatasetRequest struct {
	DatasetName          string            `protobuf:"bytes,1,opt,name=dataset_name,json=datasetName,proto3" json:"dataset_name,omitempty"`
	Tags                 []string          `protobuf:"bytes,2,rep,name=tags,proto3" json:"tags,omitempty"`
	Entries              []*BankEntryInput `protobuf:"bytes,3,rep,name=entries,proto3" json:"entries,omitempty"`
	RetentionPolicy      *RetentionPolicy  `protobuf:"bytes,4,opt,name=retention_policy,json=retentionPolicy,proto3" json:"retention_policy,omitempty"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

func (m *CreateBankDatasetRequest) Reset()         { *m = CreateBankDatasetRequest{} }
func (m *CreateBankDatasetRequest) String() string { return proto.CompactTextString(m) }
func (*CreateBankDatasetRequest) ProtoMessage()    {}
func (*CreateBankDatasetRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_bank_8dabe4524a14e40d, []int{2}
}
func (m *CreateBankDatasetRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateBankDatasetRequest.Unmarshal(m, b)
}
func (m *CreateBankDatasetRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateBankDatasetRequest.Marshal(b, m, deterministic)
}
func (dst *CreateBankDatasetRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateBankDatasetRequest.Merge(dst, src)
}
func (m *CreateBankDatasetRequest) XXX_Size() int {
	return xxx_messageInfo_CreateBankDatasetRequest.Size(m)
}
func (m *CreateBankDatasetRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateBankDatasetRequest.DiscardUnknown(m)
}

var xxx_messageInfo_CreateBankDatasetRequest proto.InternalMessageInfo

func (m *CreateBankDatasetRequest) GetDatasetName() string {
	if m != nil {
		return m.DatasetName
	}
	return ""
}

func (m *CreateBankDatasetRequest) GetTags() []string {
	if m != nil {
		return m.Tags
	}
	return nil
}

func (m *CreateBankDatasetRequest) GetEntries() []*BankEntryInput {
	if m != nil {
		return m.Entries
	}
	return nil
}

func (m *CreateBankDatasetRequest) GetRetentionPolicy() *RetentionPolicy {
	if m != nil {
		return m.RetentionPolicy
	}
	return nil
}

type AppendBankDataRequest struct {
	DatasetName          string            `protobuf:"bytes,1,opt,name=dataset_name,json=datasetName,proto3" json:"dataset_name,omitempty"`
	Entries              []*BankEntryInput `protobuf:"bytes,3,rep,name=entries,proto3" json:"entries,omitempty"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

func (m *AppendBankDataRequest) Reset()         { *m = AppendBankDataRequest{} }
func (m *AppendBankDataRequest) String() string { return proto.CompactTextString(m) }
func (*AppendBankDataRequest) ProtoMessage()    {}
func (*AppendBankDataRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_bank_8dabe4524a14e40d, []int{3}
}
func (m *AppendBankDataRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_AppendBankDataRequest.Unmarshal(m, b)
}
func (m *AppendBankDataRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_AppendBankDataRequest.Marshal(b, m, deterministic)
}
func (dst *AppendBankDataRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_AppendBankDataRequest.Merge(dst, src)
}
func (m *AppendBankDataRequest) XXX_Size() int {
	return xxx_messageInfo_AppendBankDataRequest.Size(m)
}
func (m *AppendBankDataRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_AppendBankDataRequest.DiscardUnknown(m)
}

var xxx_messageInfo_AppendBankDataRequest proto.InternalMessageInfo

func (m *AppendBankDataRequest) GetDatasetName() string {
	if m != nil {
		return m.DatasetName
	}
	return ""
}

func (m *AppendBankDataRequest) GetEntries() []*BankEntryInput {
	if m != nil {
		return m.Entries
	}
	return nil
}

func init() {
	proto.RegisterType((*BankEntry)(nil), "asgt.dataservice.v1alpha1.BankEntry")
	proto.RegisterType((*BankEntryInput)(nil), "asgt.dataservice.v1alpha1.BankEntryInput")
	proto.RegisterType((*CreateBankDatasetRequest)(nil), "asgt.dataservice.v1alpha1.CreateBankDatasetRequest")
	proto.RegisterType((*AppendBankDataRequest)(nil), "asgt.dataservice.v1alpha1.AppendBankDataRequest")
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// BankDataserviceClient is the client API for BankDataservice service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type BankDataserviceClient interface {
	CreateBankDataset(ctx context.Context, in *CreateBankDatasetRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	AppendBankData(ctx context.Context, in *AppendBankDataRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	DeleteBankData(ctx context.Context, in *DeleteRequest, opts ...grpc.CallOption) (*empty.Empty, error)
}

type bankDataserviceClient struct {
	cc *grpc.ClientConn
}

func NewBankDataserviceClient(cc *grpc.ClientConn) BankDataserviceClient {
	return &bankDataserviceClient{cc}
}

func (c *bankDataserviceClient) CreateBankDataset(ctx context.Context, in *CreateBankDatasetRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/asgt.dataservice.v1alpha1.BankDataservice/CreateBankDataset", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bankDataserviceClient) AppendBankData(ctx context.Context, in *AppendBankDataRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/asgt.dataservice.v1alpha1.BankDataservice/AppendBankData", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bankDataserviceClient) DeleteBankData(ctx context.Context, in *DeleteRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/asgt.dataservice.v1alpha1.BankDataservice/DeleteBankData", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// BankDataserviceServer is the server API for BankDataservice service.
type BankDataserviceServer interface {
	CreateBankDataset(context.Context, *CreateBankDatasetRequest) (*empty.Empty, error)
	AppendBankData(context.Context, *AppendBankDataRequest) (*empty.Empty, error)
	DeleteBankData(context.Context, *DeleteRequest) (*empty.Empty, error)
}

func RegisterBankDataserviceServer(s *grpc.Server, srv BankDataserviceServer) {
	s.RegisterService(&_BankDataservice_serviceDesc, srv)
}

func _BankDataservice_CreateBankDataset_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateBankDatasetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BankDataserviceServer).CreateBankDataset(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asgt.dataservice.v1alpha1.BankDataservice/CreateBankDataset",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BankDataserviceServer).CreateBankDataset(ctx, req.(*CreateBankDatasetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BankDataservice_AppendBankData_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AppendBankDataRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BankDataserviceServer).AppendBankData(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asgt.dataservice.v1alpha1.BankDataservice/AppendBankData",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BankDataserviceServer).AppendBankData(ctx, req.(*AppendBankDataRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BankDataservice_DeleteBankData_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BankDataserviceServer).DeleteBankData(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asgt.dataservice.v1alpha1.BankDataservice/DeleteBankData",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BankDataserviceServer).DeleteBankData(ctx, req.(*DeleteRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _BankDataservice_serviceDesc = grpc.ServiceDesc{
	ServiceName: "asgt.dataservice.v1alpha1.BankDataservice",
	HandlerType: (*BankDataserviceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateBankDataset",
			Handler:    _BankDataservice_CreateBankDataset_Handler,
		},
		{
			MethodName: "AppendBankData",
			Handler:    _BankDataservice_AppendBankData_Handler,
		},
		{
			MethodName: "DeleteBankData",
			Handler:    _BankDataservice_DeleteBankData_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "asgt/dataservice/v1alpha1/bank.proto",
}

func init() {
	proto.RegisterFile("asgt/dataservice/v1alpha1/bank.proto", fileDescriptor_bank_8dabe4524a14e40d)
}

var fileDescriptor_bank_8dabe4524a14e40d = []byte{
	// 717 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xac, 0x54, 0x41, 0x6b, 0xeb, 0x46,
	0x10, 0x46, 0xb6, 0xf3, 0x62, 0xaf, 0xfb, 0xfc, 0x5e, 0x17, 0x52, 0x54, 0xb7, 0xd0, 0x8d, 0x08,
	0xc5, 0x0d, 0xa9, 0xd4, 0x38, 0x37, 0x53, 0x30, 0x76, 0xec, 0x42, 0x0a, 0x29, 0x41, 0x75, 0x7b,
	0xc8, 0x45, 0xac, 0xb4, 0x63, 0x7b, 0x6b, 0x79, 0xa5, 0x48, 0x2b, 0x83, 0xa1, 0x50, 0x9a, 0x63,
	0xaf, 0xa5, 0xbf, 0xac, 0x7f, 0xa1, 0x27, 0x43, 0xff, 0x43, 0xd9, 0x95, 0xe4, 0xc4, 0xb4, 0x71,
	0x49, 0xc8, 0x51, 0x33, 0xdf, 0xf7, 0xcd, 0xce, 0x37, 0xa3, 0x41, 0x27, 0x34, 0x9d, 0x49, 0x87,
	0x51, 0x49, 0x53, 0x48, 0x56, 0x3c, 0x00, 0x67, 0x75, 0x4e, 0xc3, 0x78, 0x4e, 0xcf, 0x1d, 0x9f,
	0x8a, 0x85, 0x1d, 0x27, 0x91, 0x8c, 0xf0, 0xc7, 0x0a, 0x65, 0x3f, 0x42, 0xd9, 0x25, 0xaa, 0xbd,
	0x47, 0x40, 0x05, 0x73, 0x81, 0xf6, 0xb1, 0x46, 0xfd, 0x04, 0xa9, 0x84, 0xe4, 0x01, 0x90, 0x7f,
	0x17, 0x90, 0x4f, 0x67, 0x20, 0x3c, 0xff, 0xce, 0x4b, 0x83, 0x39, 0x2c, 0xa9, 0xe3, 0xdf, 0x79,
	0x53, 0x0e, 0x21, 0x7b, 0x32, 0x2b, 0xa9, 0x1f, 0xc2, 0x36, 0x1b, 0x45, 0xb3, 0x10, 0x1c, 0x1a,
	0x73, 0x87, 0x0a, 0x11, 0x49, 0x2a, 0x79, 0x24, 0xd2, 0x22, 0xfb, 0x49, 0x91, 0xd5, 0x5f, 0x7e,
	0x36, 0x75, 0x60, 0x19, 0xcb, 0x75, 0x9e, 0xb4, 0x7e, 0xad, 0xa1, 0xc6, 0x90, 0x8a, 0xc5, 0x58,
	0xc8, 0x64, 0x8d, 0x87, 0xa8, 0xc2, 0x99, 0x69, 0x10, 0xa3, 0xd3, 0x18, 0x76, 0x37, 0x7d, 0xc7,
	0xfa, 0xf2, 0x6a, 0x74, 0x46, 0x96, 0x54, 0x06, 0x73, 0x48, 0xc9, 0x58, 0xac, 0xa2, 0x35, 0x49,
	0xe0, 0x2e, 0x83, 0x54, 0x12, 0xce, 0x08, 0x9f, 0x92, 0x29, 0x00, 0xf3, 0x69, 0xb0, 0x20, 0xaa,
	0x5b, 0xb7, 0xc2, 0x19, 0x3e, 0x46, 0xf5, 0x20, 0x12, 0x69, 0xb6, 0x84, 0xc4, 0xac, 0x68, 0xa5,
	0x83, 0x4d, 0xbf, 0x52, 0x37, 0xdc, 0x6d, 0x18, 0x7f, 0x86, 0x0e, 0x73, 0xc7, 0xa4, 0x59, 0x7d,
	0x8c, 0x28, 0xa3, 0xf8, 0x16, 0xd5, 0x24, 0x9d, 0xa5, 0x66, 0x8d, 0x54, 0x3b, 0x8d, 0xe1, 0x37,
	0x9b, 0xfe, 0xa5, 0x35, 0x98, 0xd0, 0x59, 0x4a, 0x18, 0x4c, 0xb9, 0x00, 0x46, 0xfc, 0x35, 0x29,
	0xd5, 0xce, 0x08, 0x88, 0x84, 0x07, 0xf3, 0x3c, 0x5a, 0x4c, 0x41, 0x3d, 0x6d, 0x45, 0x43, 0x90,
	0x0b, 0x58, 0x13, 0x9e, 0x92, 0x2c, 0x05, 0xe6, 0x6a, 0x4d, 0xfc, 0x35, 0x3a, 0xe0, 0x22, 0xce,
	0xa4, 0x79, 0x40, 0x8c, 0x4e, 0xb3, 0xfb, 0xb9, 0xad, 0x87, 0x5b, 0xcc, 0xa2, 0x9c, 0x8d, 0xad,
	0x3c, 0x71, 0xf3, 0x4e, 0xed, 0x91, 0x6a, 0x2d, 0x27, 0xe1, 0x31, 0x6a, 0xca, 0x24, 0x03, 0x6f,
	0x45, 0xc3, 0x0c, 0x52, 0xf3, 0x0d, 0xa9, 0x76, 0x9a, 0xdd, 0x13, 0xfb, 0xc9, 0x05, 0xd1, 0xe4,
	0x49, 0x16, 0x87, 0xe0, 0x22, 0x45, 0xfc, 0x51, 0xf3, 0xf0, 0xb7, 0xa8, 0x19, 0x27, 0xc0, 0x4a,
	0x99, 0x43, 0x2d, 0xf3, 0xc5, 0x1e, 0x99, 0x9b, 0x04, 0x18, 0x0f, 0x24, 0xb0, 0x42, 0x4b, 0xb1,
	0x0b, 0x2d, 0x07, 0x21, 0xc9, 0x97, 0xe0, 0x51, 0xc6, 0x80, 0x99, 0x75, 0x62, 0x74, 0x6a, 0xc3,
	0xf7, 0x9b, 0xfe, 0xdb, 0xba, 0x81, 0x1b, 0x93, 0xab, 0xeb, 0xf1, 0xf7, 0x93, 0xc1, 0xf5, 0x8d,
	0xdb, 0x50, 0x98, 0x81, 0x82, 0xf4, 0x5a, 0x9b, 0x7e, 0x13, 0x35, 0xd4, 0x7e, 0x7b, 0xaa, 0x96,
	0xf5, 0x87, 0x81, 0x5a, 0xdb, 0x1d, 0xb8, 0xd2, 0x6d, 0x6e, 0x4d, 0x32, 0x5e, 0xc1, 0xa4, 0xca,
	0xcb, 0x4c, 0xb2, 0xfe, 0x36, 0x90, 0x79, 0x99, 0x00, 0x95, 0xa0, 0x0a, 0x8d, 0xf2, 0xdd, 0x28,
	0xea, 0xe1, 0x63, 0xf4, 0x41, 0xb1, 0x2d, 0x9e, 0xa0, 0x4b, 0xc8, 0x97, 0xd6, 0x6d, 0x16, 0xb1,
	0xef, 0xe8, 0x12, 0x30, 0x2e, 0xb6, 0x48, 0xd5, 0x6f, 0x14, 0xd3, 0xbf, 0x44, 0x87, 0x20, 0x64,
	0xc2, 0x21, 0x35, 0xab, 0xff, 0x6b, 0xfa, 0xae, 0x29, 0x6e, 0xc9, 0xc4, 0x3f, 0xa0, 0xf7, 0x09,
	0x48, 0x10, 0xea, 0x2f, 0xf3, 0xe2, 0x28, 0xe4, 0xc1, 0xda, 0xac, 0x69, 0xa3, 0x4e, 0xf7, 0xa8,
	0xb9, 0x25, 0xe5, 0x46, 0x33, 0xdc, 0x77, 0xc9, 0x6e, 0xc0, 0xfa, 0x05, 0x1d, 0x0d, 0xe2, 0x18,
	0x04, 0x2b, 0xdb, 0x7d, 0x46, 0xaf, 0xaf, 0xd1, 0x57, 0xf7, 0xb7, 0x2a, 0x7a, 0xf7, 0x60, 0xb5,
	0x26, 0xe1, 0x7b, 0x03, 0x7d, 0xf8, 0xaf, 0x21, 0xe0, 0x8b, 0x3d, 0xea, 0x4f, 0x8d, 0xac, 0xfd,
	0x91, 0x9d, 0x5f, 0x22, 0xbb, 0xbc, 0x44, 0xf6, 0x58, 0x5d, 0x22, 0x8b, 0xdc, 0xff, 0xf9, 0xd7,
	0xef, 0x95, 0xb6, 0x75, 0xb4, 0x7b, 0x7c, 0x7b, 0x81, 0x16, 0xea, 0x19, 0xa7, 0xf8, 0x67, 0xd4,
	0xda, 0x75, 0x06, 0x7f, 0xb5, 0xe7, 0x01, 0xff, 0x69, 0xe2, 0xb3, 0xab, 0x53, 0xad, 0xa2, 0xaa,
	0x4b, 0xd4, 0x1a, 0x41, 0x08, 0x0f, 0x3d, 0xe1, 0xce, 0xbe, 0x5d, 0xd6, 0xd0, 0x97, 0x56, 0x65,
	0x9a, 0xdd, 0x33, 0x4e, 0x87, 0x6f, 0x6f, 0x9b, 0x8f, 0xf4, 0xfd, 0x37, 0x5a, 0xe0, 0xe2, 0x9f,
	0x00, 0x00, 0x00, 0xff, 0xff, 0x64, 0x10, 0x8d, 0x9e, 0xb2, 0x06, 0x00, 0x00,
}
