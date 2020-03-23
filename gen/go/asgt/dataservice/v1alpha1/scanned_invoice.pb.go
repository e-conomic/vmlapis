// Code generated by protoc-gen-go. DO NOT EDIT.
// source: asgt/dataservice/v1alpha1/scanned_invoice.proto

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

// Scanned Invoice BQ schema gen - could be used for adding direct developer data endpoints
type ScannedInvoiceEntry struct {
	Id                   string                               `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Consumer             string                               `protobuf:"bytes,2,opt,name=consumer,proto3" json:"consumer,omitempty"`
	Dataset              string                               `protobuf:"bytes,3,opt,name=dataset,proto3" json:"dataset,omitempty"`
	Tags                 []string                             `protobuf:"bytes,4,rep,name=tags,proto3" json:"tags,omitempty"`
	Input                *v1alpha1.ScannedInvoiceRequest_Data `protobuf:"bytes,5,opt,name=input,proto3" json:"input,omitempty"`
	TrueValues           []*DataTuple                         `protobuf:"bytes,6,rep,name=true_values,json=trueValues,proto3" json:"true_values,omitempty"`
	PredValues           []*PredictedTuple                    `protobuf:"bytes,7,rep,name=pred_values,json=predValues,proto3" json:"pred_values,omitempty"`
	TimeAdded            uint64                               `protobuf:"varint,8,opt,name=time_added,json=timeAdded,proto3" json:"time_added,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                             `json:"-"`
	XXX_unrecognized     []byte                               `json:"-"`
	XXX_sizecache        int32                                `json:"-"`
}

func (m *ScannedInvoiceEntry) Reset()         { *m = ScannedInvoiceEntry{} }
func (m *ScannedInvoiceEntry) String() string { return proto.CompactTextString(m) }
func (*ScannedInvoiceEntry) ProtoMessage()    {}
func (*ScannedInvoiceEntry) Descriptor() ([]byte, []int) {
	return fileDescriptor_scanned_invoice_96c5454b85c09adc, []int{0}
}
func (m *ScannedInvoiceEntry) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ScannedInvoiceEntry.Unmarshal(m, b)
}
func (m *ScannedInvoiceEntry) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ScannedInvoiceEntry.Marshal(b, m, deterministic)
}
func (dst *ScannedInvoiceEntry) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ScannedInvoiceEntry.Merge(dst, src)
}
func (m *ScannedInvoiceEntry) XXX_Size() int {
	return xxx_messageInfo_ScannedInvoiceEntry.Size(m)
}
func (m *ScannedInvoiceEntry) XXX_DiscardUnknown() {
	xxx_messageInfo_ScannedInvoiceEntry.DiscardUnknown(m)
}

var xxx_messageInfo_ScannedInvoiceEntry proto.InternalMessageInfo

func (m *ScannedInvoiceEntry) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *ScannedInvoiceEntry) GetConsumer() string {
	if m != nil {
		return m.Consumer
	}
	return ""
}

func (m *ScannedInvoiceEntry) GetDataset() string {
	if m != nil {
		return m.Dataset
	}
	return ""
}

func (m *ScannedInvoiceEntry) GetTags() []string {
	if m != nil {
		return m.Tags
	}
	return nil
}

func (m *ScannedInvoiceEntry) GetInput() *v1alpha1.ScannedInvoiceRequest_Data {
	if m != nil {
		return m.Input
	}
	return nil
}

func (m *ScannedInvoiceEntry) GetTrueValues() []*DataTuple {
	if m != nil {
		return m.TrueValues
	}
	return nil
}

func (m *ScannedInvoiceEntry) GetPredValues() []*PredictedTuple {
	if m != nil {
		return m.PredValues
	}
	return nil
}

func (m *ScannedInvoiceEntry) GetTimeAdded() uint64 {
	if m != nil {
		return m.TimeAdded
	}
	return 0
}

type ScannedInvoiceEntryInput struct {
	Input                *v1alpha1.ScannedInvoiceRequest_Data `protobuf:"bytes,1,opt,name=input,proto3" json:"input,omitempty"`
	TrueValues           []*DataTuple                         `protobuf:"bytes,2,rep,name=true_values,json=trueValues,proto3" json:"true_values,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                             `json:"-"`
	XXX_unrecognized     []byte                               `json:"-"`
	XXX_sizecache        int32                                `json:"-"`
}

func (m *ScannedInvoiceEntryInput) Reset()         { *m = ScannedInvoiceEntryInput{} }
func (m *ScannedInvoiceEntryInput) String() string { return proto.CompactTextString(m) }
func (*ScannedInvoiceEntryInput) ProtoMessage()    {}
func (*ScannedInvoiceEntryInput) Descriptor() ([]byte, []int) {
	return fileDescriptor_scanned_invoice_96c5454b85c09adc, []int{1}
}
func (m *ScannedInvoiceEntryInput) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ScannedInvoiceEntryInput.Unmarshal(m, b)
}
func (m *ScannedInvoiceEntryInput) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ScannedInvoiceEntryInput.Marshal(b, m, deterministic)
}
func (dst *ScannedInvoiceEntryInput) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ScannedInvoiceEntryInput.Merge(dst, src)
}
func (m *ScannedInvoiceEntryInput) XXX_Size() int {
	return xxx_messageInfo_ScannedInvoiceEntryInput.Size(m)
}
func (m *ScannedInvoiceEntryInput) XXX_DiscardUnknown() {
	xxx_messageInfo_ScannedInvoiceEntryInput.DiscardUnknown(m)
}

var xxx_messageInfo_ScannedInvoiceEntryInput proto.InternalMessageInfo

func (m *ScannedInvoiceEntryInput) GetInput() *v1alpha1.ScannedInvoiceRequest_Data {
	if m != nil {
		return m.Input
	}
	return nil
}

func (m *ScannedInvoiceEntryInput) GetTrueValues() []*DataTuple {
	if m != nil {
		return m.TrueValues
	}
	return nil
}

type CreateScannedInvoiceDatasetRequest struct {
	DatasetName          string                      `protobuf:"bytes,1,opt,name=dataset_name,json=datasetName,proto3" json:"dataset_name,omitempty"`
	Tags                 []string                    `protobuf:"bytes,2,rep,name=tags,proto3" json:"tags,omitempty"`
	Entries              []*ScannedInvoiceEntryInput `protobuf:"bytes,3,rep,name=entries,proto3" json:"entries,omitempty"`
	RetentionPolicy      *RetentionPolicy            `protobuf:"bytes,4,opt,name=retention_policy,json=retentionPolicy,proto3" json:"retention_policy,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                    `json:"-"`
	XXX_unrecognized     []byte                      `json:"-"`
	XXX_sizecache        int32                       `json:"-"`
}

func (m *CreateScannedInvoiceDatasetRequest) Reset()         { *m = CreateScannedInvoiceDatasetRequest{} }
func (m *CreateScannedInvoiceDatasetRequest) String() string { return proto.CompactTextString(m) }
func (*CreateScannedInvoiceDatasetRequest) ProtoMessage()    {}
func (*CreateScannedInvoiceDatasetRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_scanned_invoice_96c5454b85c09adc, []int{2}
}
func (m *CreateScannedInvoiceDatasetRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateScannedInvoiceDatasetRequest.Unmarshal(m, b)
}
func (m *CreateScannedInvoiceDatasetRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateScannedInvoiceDatasetRequest.Marshal(b, m, deterministic)
}
func (dst *CreateScannedInvoiceDatasetRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateScannedInvoiceDatasetRequest.Merge(dst, src)
}
func (m *CreateScannedInvoiceDatasetRequest) XXX_Size() int {
	return xxx_messageInfo_CreateScannedInvoiceDatasetRequest.Size(m)
}
func (m *CreateScannedInvoiceDatasetRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateScannedInvoiceDatasetRequest.DiscardUnknown(m)
}

var xxx_messageInfo_CreateScannedInvoiceDatasetRequest proto.InternalMessageInfo

func (m *CreateScannedInvoiceDatasetRequest) GetDatasetName() string {
	if m != nil {
		return m.DatasetName
	}
	return ""
}

func (m *CreateScannedInvoiceDatasetRequest) GetTags() []string {
	if m != nil {
		return m.Tags
	}
	return nil
}

func (m *CreateScannedInvoiceDatasetRequest) GetEntries() []*ScannedInvoiceEntryInput {
	if m != nil {
		return m.Entries
	}
	return nil
}

func (m *CreateScannedInvoiceDatasetRequest) GetRetentionPolicy() *RetentionPolicy {
	if m != nil {
		return m.RetentionPolicy
	}
	return nil
}

type AppendScannedInvoiceDataRequest struct {
	DatasetName          string                      `protobuf:"bytes,1,opt,name=dataset_name,json=datasetName,proto3" json:"dataset_name,omitempty"`
	Entries              []*ScannedInvoiceEntryInput `protobuf:"bytes,3,rep,name=entries,proto3" json:"entries,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                    `json:"-"`
	XXX_unrecognized     []byte                      `json:"-"`
	XXX_sizecache        int32                       `json:"-"`
}

func (m *AppendScannedInvoiceDataRequest) Reset()         { *m = AppendScannedInvoiceDataRequest{} }
func (m *AppendScannedInvoiceDataRequest) String() string { return proto.CompactTextString(m) }
func (*AppendScannedInvoiceDataRequest) ProtoMessage()    {}
func (*AppendScannedInvoiceDataRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_scanned_invoice_96c5454b85c09adc, []int{3}
}
func (m *AppendScannedInvoiceDataRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_AppendScannedInvoiceDataRequest.Unmarshal(m, b)
}
func (m *AppendScannedInvoiceDataRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_AppendScannedInvoiceDataRequest.Marshal(b, m, deterministic)
}
func (dst *AppendScannedInvoiceDataRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_AppendScannedInvoiceDataRequest.Merge(dst, src)
}
func (m *AppendScannedInvoiceDataRequest) XXX_Size() int {
	return xxx_messageInfo_AppendScannedInvoiceDataRequest.Size(m)
}
func (m *AppendScannedInvoiceDataRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_AppendScannedInvoiceDataRequest.DiscardUnknown(m)
}

var xxx_messageInfo_AppendScannedInvoiceDataRequest proto.InternalMessageInfo

func (m *AppendScannedInvoiceDataRequest) GetDatasetName() string {
	if m != nil {
		return m.DatasetName
	}
	return ""
}

func (m *AppendScannedInvoiceDataRequest) GetEntries() []*ScannedInvoiceEntryInput {
	if m != nil {
		return m.Entries
	}
	return nil
}

func init() {
	proto.RegisterType((*ScannedInvoiceEntry)(nil), "asgt.dataservice.v1alpha1.ScannedInvoiceEntry")
	proto.RegisterType((*ScannedInvoiceEntryInput)(nil), "asgt.dataservice.v1alpha1.ScannedInvoiceEntryInput")
	proto.RegisterType((*CreateScannedInvoiceDatasetRequest)(nil), "asgt.dataservice.v1alpha1.CreateScannedInvoiceDatasetRequest")
	proto.RegisterType((*AppendScannedInvoiceDataRequest)(nil), "asgt.dataservice.v1alpha1.AppendScannedInvoiceDataRequest")
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// ScannedInvoiceDataserviceClient is the client API for ScannedInvoiceDataservice service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type ScannedInvoiceDataserviceClient interface {
	CreateScannedInvoiceDataset(ctx context.Context, in *CreateScannedInvoiceDatasetRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	AppendScannedInvoiceData(ctx context.Context, in *AppendScannedInvoiceDataRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	DeleteScannedInvoiceData(ctx context.Context, in *DeleteRequest, opts ...grpc.CallOption) (*empty.Empty, error)
}

type scannedInvoiceDataserviceClient struct {
	cc *grpc.ClientConn
}

func NewScannedInvoiceDataserviceClient(cc *grpc.ClientConn) ScannedInvoiceDataserviceClient {
	return &scannedInvoiceDataserviceClient{cc}
}

func (c *scannedInvoiceDataserviceClient) CreateScannedInvoiceDataset(ctx context.Context, in *CreateScannedInvoiceDatasetRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/asgt.dataservice.v1alpha1.ScannedInvoiceDataservice/CreateScannedInvoiceDataset", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *scannedInvoiceDataserviceClient) AppendScannedInvoiceData(ctx context.Context, in *AppendScannedInvoiceDataRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/asgt.dataservice.v1alpha1.ScannedInvoiceDataservice/AppendScannedInvoiceData", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *scannedInvoiceDataserviceClient) DeleteScannedInvoiceData(ctx context.Context, in *DeleteRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/asgt.dataservice.v1alpha1.ScannedInvoiceDataservice/DeleteScannedInvoiceData", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ScannedInvoiceDataserviceServer is the server API for ScannedInvoiceDataservice service.
type ScannedInvoiceDataserviceServer interface {
	CreateScannedInvoiceDataset(context.Context, *CreateScannedInvoiceDatasetRequest) (*empty.Empty, error)
	AppendScannedInvoiceData(context.Context, *AppendScannedInvoiceDataRequest) (*empty.Empty, error)
	DeleteScannedInvoiceData(context.Context, *DeleteRequest) (*empty.Empty, error)
}

func RegisterScannedInvoiceDataserviceServer(s *grpc.Server, srv ScannedInvoiceDataserviceServer) {
	s.RegisterService(&_ScannedInvoiceDataservice_serviceDesc, srv)
}

func _ScannedInvoiceDataservice_CreateScannedInvoiceDataset_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateScannedInvoiceDatasetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ScannedInvoiceDataserviceServer).CreateScannedInvoiceDataset(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asgt.dataservice.v1alpha1.ScannedInvoiceDataservice/CreateScannedInvoiceDataset",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ScannedInvoiceDataserviceServer).CreateScannedInvoiceDataset(ctx, req.(*CreateScannedInvoiceDatasetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ScannedInvoiceDataservice_AppendScannedInvoiceData_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AppendScannedInvoiceDataRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ScannedInvoiceDataserviceServer).AppendScannedInvoiceData(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asgt.dataservice.v1alpha1.ScannedInvoiceDataservice/AppendScannedInvoiceData",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ScannedInvoiceDataserviceServer).AppendScannedInvoiceData(ctx, req.(*AppendScannedInvoiceDataRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ScannedInvoiceDataservice_DeleteScannedInvoiceData_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ScannedInvoiceDataserviceServer).DeleteScannedInvoiceData(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asgt.dataservice.v1alpha1.ScannedInvoiceDataservice/DeleteScannedInvoiceData",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ScannedInvoiceDataserviceServer).DeleteScannedInvoiceData(ctx, req.(*DeleteRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _ScannedInvoiceDataservice_serviceDesc = grpc.ServiceDesc{
	ServiceName: "asgt.dataservice.v1alpha1.ScannedInvoiceDataservice",
	HandlerType: (*ScannedInvoiceDataserviceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateScannedInvoiceDataset",
			Handler:    _ScannedInvoiceDataservice_CreateScannedInvoiceDataset_Handler,
		},
		{
			MethodName: "AppendScannedInvoiceData",
			Handler:    _ScannedInvoiceDataservice_AppendScannedInvoiceData_Handler,
		},
		{
			MethodName: "DeleteScannedInvoiceData",
			Handler:    _ScannedInvoiceDataservice_DeleteScannedInvoiceData_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "asgt/dataservice/v1alpha1/scanned_invoice.proto",
}

func init() {
	proto.RegisterFile("asgt/dataservice/v1alpha1/scanned_invoice.proto", fileDescriptor_scanned_invoice_96c5454b85c09adc)
}

var fileDescriptor_scanned_invoice_96c5454b85c09adc = []byte{
	// 743 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xac, 0x55, 0x41, 0x4f, 0xe3, 0x46,
	0x14, 0x96, 0x93, 0x00, 0xc9, 0xa4, 0xa8, 0x68, 0x5a, 0x21, 0x03, 0x95, 0x18, 0x2c, 0x0e, 0x69,
	0x44, 0xed, 0x12, 0x6e, 0x91, 0xaa, 0x28, 0x21, 0x41, 0x4a, 0x25, 0x2a, 0x64, 0xd2, 0x1e, 0xb8,
	0x58, 0x13, 0xcf, 0x4b, 0x32, 0xc5, 0x19, 0x1b, 0x7b, 0x1c, 0x29, 0xc7, 0xf6, 0xd4, 0x3b, 0xb7,
	0x9e, 0xb8, 0xee, 0xef, 0xd9, 0xbf, 0xb0, 0xda, 0x43, 0x7e, 0xc5, 0xca, 0x63, 0x9b, 0x85, 0x85,
	0x04, 0xed, 0xc2, 0xd1, 0x6f, 0xde, 0xf7, 0xbd, 0xf7, 0xbe, 0xf7, 0xcd, 0x18, 0x59, 0x34, 0x1a,
	0x4b, 0x8b, 0x51, 0x49, 0x23, 0x08, 0x67, 0xdc, 0x05, 0x6b, 0x76, 0x4c, 0xbd, 0x60, 0x42, 0x8f,
	0xad, 0xc8, 0xa5, 0x42, 0x00, 0x73, 0xb8, 0x98, 0xf9, 0xdc, 0x05, 0x33, 0x08, 0x7d, 0xe9, 0xe3,
	0x9d, 0x04, 0x60, 0x3e, 0x00, 0x98, 0x39, 0x60, 0xf7, 0x70, 0x39, 0x57, 0x12, 0x4c, 0x09, 0x76,
	0x0f, 0x54, 0xd6, 0xdf, 0x10, 0x49, 0x08, 0x3f, 0x27, 0xa4, 0xdf, 0x59, 0xca, 0x4f, 0x63, 0x10,
	0xce, 0xf0, 0xc6, 0x89, 0xdc, 0x09, 0x4c, 0xa9, 0x35, 0xbc, 0x71, 0x46, 0x1c, 0x3c, 0xb6, 0xf4,
	0x54, 0xd2, 0xa1, 0x07, 0xf7, 0xa7, 0xbe, 0x3f, 0xf6, 0xc0, 0xa2, 0x01, 0xb7, 0xa8, 0x10, 0xbe,
	0xa4, 0x92, 0xfb, 0x22, 0xca, 0x4e, 0xf7, 0xb2, 0x53, 0xf5, 0x35, 0x8c, 0x47, 0x16, 0x4c, 0x03,
	0x39, 0x4f, 0x0f, 0x8d, 0xbb, 0x12, 0xfa, 0xe1, 0x32, 0x1d, 0xba, 0x9f, 0xce, 0xdc, 0x13, 0x32,
	0x9c, 0xe3, 0x0e, 0x2a, 0x70, 0xa6, 0x6b, 0x44, 0xab, 0x55, 0x3a, 0x8d, 0x45, 0xcb, 0x32, 0x7e,
	0xe9, 0x77, 0x8f, 0xc8, 0x94, 0x4a, 0x77, 0x02, 0x11, 0xe9, 0x89, 0x99, 0x3f, 0x27, 0x21, 0xdc,
	0xc4, 0x10, 0x49, 0xc2, 0x19, 0xe1, 0x23, 0x32, 0x02, 0x60, 0x43, 0xea, 0x5e, 0x93, 0x64, 0x6e,
	0xbb, 0xc0, 0x19, 0x3e, 0x40, 0x65, 0xd7, 0x17, 0x51, 0x3c, 0x85, 0x50, 0x2f, 0x28, 0xa6, 0xb5,
	0x45, 0xab, 0x50, 0xd6, 0xec, 0xfb, 0x30, 0xde, 0x47, 0x1b, 0xa9, 0x76, 0x52, 0x2f, 0x3e, 0xcc,
	0xc8, 0xa3, 0xf8, 0x0a, 0x95, 0x24, 0x1d, 0x47, 0x7a, 0x89, 0x14, 0x6b, 0x95, 0xce, 0xd9, 0xa2,
	0x75, 0x6a, 0xb4, 0x07, 0x74, 0x1c, 0x11, 0x06, 0x23, 0x2e, 0x80, 0x91, 0xe1, 0x9c, 0xe4, 0x6c,
	0x47, 0x04, 0x44, 0xc8, 0xdd, 0x49, 0x1a, 0xcd, 0xf6, 0x91, 0xb4, 0x36, 0xa3, 0x1e, 0xc8, 0x6b,
	0x98, 0x13, 0x1e, 0x91, 0x38, 0x02, 0x66, 0x2b, 0x4e, 0x7c, 0x86, 0xd6, 0xb8, 0x08, 0x62, 0xa9,
	0xaf, 0x11, 0xad, 0x56, 0x6d, 0xfc, 0x6a, 0xaa, 0x35, 0x67, 0x5b, 0xc9, 0xb7, 0x64, 0x3e, 0x56,
	0xc7, 0x4e, 0x67, 0x36, 0xbb, 0xc9, 0x90, 0x29, 0x1c, 0xf7, 0x50, 0x55, 0x86, 0x31, 0x38, 0x33,
	0xea, 0xc5, 0x10, 0xe9, 0xeb, 0xa4, 0x58, 0xab, 0x36, 0x0e, 0xcd, 0xa5, 0xa6, 0x51, 0xe0, 0x41,
	0x1c, 0x78, 0x60, 0xa3, 0x04, 0xf8, 0x97, 0xc2, 0xe1, 0xdf, 0x51, 0x35, 0x08, 0x81, 0xe5, 0x34,
	0x1b, 0x8a, 0xe6, 0xe7, 0x15, 0x34, 0x17, 0x21, 0x30, 0xee, 0x4a, 0x60, 0x19, 0x57, 0x82, 0xce,
	0xb8, 0x2c, 0x84, 0x24, 0x9f, 0x82, 0x43, 0x19, 0x03, 0xa6, 0x97, 0x89, 0x56, 0x2b, 0x75, 0xb6,
	0x16, 0xad, 0xcd, 0xb2, 0x86, 0x2b, 0x83, 0xfe, 0x79, 0xef, 0x72, 0xd0, 0x3e, 0xbf, 0xb0, 0x2b,
	0x49, 0x4e, 0x3b, 0x49, 0x69, 0xee, 0x2c, 0x5a, 0xdb, 0xe8, 0xc7, 0x2f, 0xec, 0xef, 0x24, 0x65,
	0x8d, 0x77, 0x1a, 0xd2, 0x9f, 0xb1, 0x48, 0x5f, 0xcd, 0x7e, 0xaf, 0xa1, 0xf6, 0xa6, 0x1a, 0x16,
	0xbe, 0x4d, 0x43, 0xe3, 0x9f, 0x02, 0x32, 0x4e, 0x43, 0xa0, 0x12, 0x1e, 0x97, 0xec, 0xa6, 0x76,
	0xca, 0x2a, 0xe3, 0x03, 0xf4, 0x5d, 0x66, 0x30, 0x47, 0xd0, 0x29, 0xa4, 0x3e, 0xb7, 0xab, 0x59,
	0xec, 0x0f, 0x3a, 0x05, 0x8c, 0x33, 0xe3, 0x25, 0x9d, 0x54, 0x32, 0xc3, 0x9c, 0xa3, 0x0d, 0x10,
	0x32, 0xe4, 0x10, 0xe9, 0x45, 0xd5, 0xe0, 0xc9, 0x8a, 0x06, 0x97, 0x49, 0x66, 0xe7, 0x1c, 0xf8,
	0x4f, 0xb4, 0x15, 0x82, 0x04, 0x91, 0x5c, 0x56, 0x27, 0xf0, 0x3d, 0xee, 0xce, 0xf5, 0x92, 0x92,
	0xb1, 0xbe, 0x82, 0xd7, 0xce, 0x21, 0x17, 0x0a, 0x61, 0x7f, 0x1f, 0x3e, 0x0e, 0x18, 0xb7, 0x1a,
	0xda, 0x6f, 0x07, 0x01, 0x08, 0xf6, 0x54, 0x83, 0xaf, 0x10, 0xe0, 0x6d, 0x87, 0x6d, 0x7c, 0x2c,
	0xa2, 0x9d, 0xe7, 0x76, 0xa2, 0x88, 0xf0, 0x9d, 0x86, 0xf6, 0x56, 0xec, 0x0d, 0xff, 0xb6, 0xa2,
	0xf6, 0xcb, 0xfb, 0xde, 0xdd, 0x36, 0xd3, 0x37, 0xd0, 0xcc, 0xdf, 0x40, 0xb3, 0x97, 0xbc, 0x81,
	0x46, 0xfd, 0xdf, 0xf7, 0x1f, 0x6e, 0x0b, 0x87, 0xc6, 0xfe, 0x93, 0x3f, 0x40, 0x76, 0x03, 0x9a,
	0xae, 0x22, 0x6f, 0x6a, 0x75, 0xfc, 0xbf, 0x86, 0xf4, 0x65, 0xb2, 0xe2, 0xe6, 0x8a, 0xfe, 0x5e,
	0xd8, 0xc5, 0x2b, 0x9a, 0xa3, 0x8a, 0x39, 0x69, 0xee, 0x3f, 0x0d, 0xe9, 0x5d, 0xf0, 0xe0, 0x39,
	0x1d, 0x70, 0x6d, 0xd5, 0x35, 0x52, 0xa0, 0xd7, 0xb7, 0xc2, 0x14, 0x4f, 0x53, 0xab, 0x77, 0x36,
	0xaf, 0xaa, 0x0f, 0x2a, 0x0d, 0xd7, 0x15, 0xd5, 0xc9, 0xa7, 0x00, 0x00, 0x00, 0xff, 0xff, 0xe4,
	0xa1, 0x88, 0x17, 0x75, 0x07, 0x00, 0x00,
}
