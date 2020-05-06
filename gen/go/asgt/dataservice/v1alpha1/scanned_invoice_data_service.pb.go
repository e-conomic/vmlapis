// Code generated by protoc-gen-go. DO NOT EDIT.
// source: asgt/dataservice/v1alpha1/scanned_invoice_data_service.proto

package dataservice

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import _type "github.com/e-conomic/vmlapis/gen/go/asgt/type"
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

type ScannedInvoiceEntryInput struct {
	Data                 *_type.ScannedInvoice `protobuf:"bytes,1,opt,name=data,proto3" json:"data,omitempty"`
	TargetValues         []*_type.TargetValue  `protobuf:"bytes,2,rep,name=target_values,json=targetValues,proto3" json:"target_values,omitempty"`
	XXX_NoUnkeyedLiteral struct{}              `json:"-"`
	XXX_unrecognized     []byte                `json:"-"`
	XXX_sizecache        int32                 `json:"-"`
}

func (m *ScannedInvoiceEntryInput) Reset()         { *m = ScannedInvoiceEntryInput{} }
func (m *ScannedInvoiceEntryInput) String() string { return proto.CompactTextString(m) }
func (*ScannedInvoiceEntryInput) ProtoMessage()    {}
func (*ScannedInvoiceEntryInput) Descriptor() ([]byte, []int) {
	return fileDescriptor_scanned_invoice_data_service_b94afac59764b0c9, []int{0}
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

func (m *ScannedInvoiceEntryInput) GetData() *_type.ScannedInvoice {
	if m != nil {
		return m.Data
	}
	return nil
}

func (m *ScannedInvoiceEntryInput) GetTargetValues() []*_type.TargetValue {
	if m != nil {
		return m.TargetValues
	}
	return nil
}

type CreateScannedInvoiceDatasetRequest struct {
	DatasetName          string                      `protobuf:"bytes,1,opt,name=dataset_name,json=datasetName,proto3" json:"dataset_name,omitempty"`
	Tags                 []string                    `protobuf:"bytes,2,rep,name=tags,proto3" json:"tags,omitempty"`
	Targets              []string                    `protobuf:"bytes,5,rep,name=targets,proto3" json:"targets,omitempty"`
	Entries              []*ScannedInvoiceEntryInput `protobuf:"bytes,3,rep,name=entries,proto3" json:"entries,omitempty"`
	RetentionPolicy      *_type.RetentionPolicy      `protobuf:"bytes,4,opt,name=retention_policy,json=retentionPolicy,proto3" json:"retention_policy,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                    `json:"-"`
	XXX_unrecognized     []byte                      `json:"-"`
	XXX_sizecache        int32                       `json:"-"`
}

func (m *CreateScannedInvoiceDatasetRequest) Reset()         { *m = CreateScannedInvoiceDatasetRequest{} }
func (m *CreateScannedInvoiceDatasetRequest) String() string { return proto.CompactTextString(m) }
func (*CreateScannedInvoiceDatasetRequest) ProtoMessage()    {}
func (*CreateScannedInvoiceDatasetRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_scanned_invoice_data_service_b94afac59764b0c9, []int{1}
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

func (m *CreateScannedInvoiceDatasetRequest) GetTargets() []string {
	if m != nil {
		return m.Targets
	}
	return nil
}

func (m *CreateScannedInvoiceDatasetRequest) GetEntries() []*ScannedInvoiceEntryInput {
	if m != nil {
		return m.Entries
	}
	return nil
}

func (m *CreateScannedInvoiceDatasetRequest) GetRetentionPolicy() *_type.RetentionPolicy {
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
	return fileDescriptor_scanned_invoice_data_service_b94afac59764b0c9, []int{2}
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

// ScannedInvoiceDataServiceClient is the client API for ScannedInvoiceDataService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type ScannedInvoiceDataServiceClient interface {
	CreateScannedInvoiceDataset(ctx context.Context, in *CreateScannedInvoiceDatasetRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	AppendScannedInvoiceData(ctx context.Context, in *AppendScannedInvoiceDataRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	DeleteScannedInvoiceData(ctx context.Context, in *DeleteRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	GetBankInfo(ctx context.Context, in *GetInfoRequest, opts ...grpc.CallOption) (*GetInfoResponse, error)
}

type scannedInvoiceDataServiceClient struct {
	cc *grpc.ClientConn
}

func NewScannedInvoiceDataServiceClient(cc *grpc.ClientConn) ScannedInvoiceDataServiceClient {
	return &scannedInvoiceDataServiceClient{cc}
}

func (c *scannedInvoiceDataServiceClient) CreateScannedInvoiceDataset(ctx context.Context, in *CreateScannedInvoiceDatasetRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/asgt.dataservice.v1alpha1.ScannedInvoiceDataService/CreateScannedInvoiceDataset", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *scannedInvoiceDataServiceClient) AppendScannedInvoiceData(ctx context.Context, in *AppendScannedInvoiceDataRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/asgt.dataservice.v1alpha1.ScannedInvoiceDataService/AppendScannedInvoiceData", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *scannedInvoiceDataServiceClient) DeleteScannedInvoiceData(ctx context.Context, in *DeleteRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/asgt.dataservice.v1alpha1.ScannedInvoiceDataService/DeleteScannedInvoiceData", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *scannedInvoiceDataServiceClient) GetBankInfo(ctx context.Context, in *GetInfoRequest, opts ...grpc.CallOption) (*GetInfoResponse, error) {
	out := new(GetInfoResponse)
	err := c.cc.Invoke(ctx, "/asgt.dataservice.v1alpha1.ScannedInvoiceDataService/GetBankInfo", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ScannedInvoiceDataServiceServer is the server API for ScannedInvoiceDataService service.
type ScannedInvoiceDataServiceServer interface {
	CreateScannedInvoiceDataset(context.Context, *CreateScannedInvoiceDatasetRequest) (*empty.Empty, error)
	AppendScannedInvoiceData(context.Context, *AppendScannedInvoiceDataRequest) (*empty.Empty, error)
	DeleteScannedInvoiceData(context.Context, *DeleteRequest) (*empty.Empty, error)
	GetBankInfo(context.Context, *GetInfoRequest) (*GetInfoResponse, error)
}

func RegisterScannedInvoiceDataServiceServer(s *grpc.Server, srv ScannedInvoiceDataServiceServer) {
	s.RegisterService(&_ScannedInvoiceDataService_serviceDesc, srv)
}

func _ScannedInvoiceDataService_CreateScannedInvoiceDataset_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateScannedInvoiceDatasetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ScannedInvoiceDataServiceServer).CreateScannedInvoiceDataset(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asgt.dataservice.v1alpha1.ScannedInvoiceDataService/CreateScannedInvoiceDataset",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ScannedInvoiceDataServiceServer).CreateScannedInvoiceDataset(ctx, req.(*CreateScannedInvoiceDatasetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ScannedInvoiceDataService_AppendScannedInvoiceData_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AppendScannedInvoiceDataRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ScannedInvoiceDataServiceServer).AppendScannedInvoiceData(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asgt.dataservice.v1alpha1.ScannedInvoiceDataService/AppendScannedInvoiceData",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ScannedInvoiceDataServiceServer).AppendScannedInvoiceData(ctx, req.(*AppendScannedInvoiceDataRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ScannedInvoiceDataService_DeleteScannedInvoiceData_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ScannedInvoiceDataServiceServer).DeleteScannedInvoiceData(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asgt.dataservice.v1alpha1.ScannedInvoiceDataService/DeleteScannedInvoiceData",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ScannedInvoiceDataServiceServer).DeleteScannedInvoiceData(ctx, req.(*DeleteRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ScannedInvoiceDataService_GetBankInfo_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetInfoRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ScannedInvoiceDataServiceServer).GetBankInfo(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asgt.dataservice.v1alpha1.ScannedInvoiceDataService/GetBankInfo",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ScannedInvoiceDataServiceServer).GetBankInfo(ctx, req.(*GetInfoRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _ScannedInvoiceDataService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "asgt.dataservice.v1alpha1.ScannedInvoiceDataService",
	HandlerType: (*ScannedInvoiceDataServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateScannedInvoiceDataset",
			Handler:    _ScannedInvoiceDataService_CreateScannedInvoiceDataset_Handler,
		},
		{
			MethodName: "AppendScannedInvoiceData",
			Handler:    _ScannedInvoiceDataService_AppendScannedInvoiceData_Handler,
		},
		{
			MethodName: "DeleteScannedInvoiceData",
			Handler:    _ScannedInvoiceDataService_DeleteScannedInvoiceData_Handler,
		},
		{
			MethodName: "GetBankInfo",
			Handler:    _ScannedInvoiceDataService_GetBankInfo_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "asgt/dataservice/v1alpha1/scanned_invoice_data_service.proto",
}

func init() {
	proto.RegisterFile("asgt/dataservice/v1alpha1/scanned_invoice_data_service.proto", fileDescriptor_scanned_invoice_data_service_b94afac59764b0c9)
}

var fileDescriptor_scanned_invoice_data_service_b94afac59764b0c9 = []byte{
	// 560 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xac, 0x54, 0xcf, 0x6f, 0xd3, 0x30,
	0x14, 0x56, 0xba, 0xc2, 0x34, 0x77, 0x13, 0xc8, 0x87, 0x29, 0xed, 0x10, 0x2b, 0xe1, 0x87, 0xba,
	0xa2, 0x25, 0x5a, 0x77, 0x2b, 0x70, 0x60, 0xac, 0x9a, 0x7a, 0x00, 0xa1, 0x0c, 0x71, 0xe0, 0x12,
	0x79, 0xed, 0x6b, 0x89, 0x68, 0x6d, 0x13, 0xbf, 0x56, 0xea, 0x95, 0x03, 0x12, 0xe2, 0xc0, 0x61,
	0x47, 0x4e, 0xfc, 0x4d, 0xfc, 0x0b, 0xfc, 0x17, 0x5c, 0x90, 0x1d, 0x87, 0xb6, 0x2b, 0xc9, 0x40,
	0xec, 0x16, 0xfb, 0x7d, 0xef, 0xfb, 0x3e, 0x7f, 0x7e, 0x31, 0x79, 0xcc, 0xd4, 0x10, 0x83, 0x3e,
	0x43, 0xa6, 0x20, 0x99, 0xc6, 0x3d, 0x08, 0xa6, 0x07, 0x6c, 0x24, 0xdf, 0xb2, 0x83, 0x40, 0xf5,
	0x18, 0xe7, 0xd0, 0x8f, 0x62, 0x3e, 0x15, 0x71, 0x0f, 0x22, 0x0d, 0x8a, 0x2c, 0xca, 0x97, 0x89,
	0x40, 0x41, 0xab, 0xba, 0xdb, 0x5f, 0xe8, 0xf6, 0xb3, 0xee, 0xda, 0x83, 0x7c, 0xe2, 0x3e, 0x8c,
	0x00, 0x2d, 0x45, 0xed, 0x5e, 0x3e, 0x2e, 0xe6, 0x03, 0x61, 0x51, 0x75, 0x83, 0xc2, 0x99, 0x84,
	0x20, 0x01, 0x04, 0x8e, 0xb1, 0xe0, 0x91, 0x14, 0xa3, 0xb8, 0x37, 0xb3, 0x88, 0xdd, 0x39, 0xe2,
	0x82, 0x71, 0x0b, 0xb8, 0x35, 0x07, 0x20, 0x4b, 0x86, 0x80, 0xd1, 0x94, 0x8d, 0x26, 0xbf, 0xab,
	0x43, 0x21, 0x86, 0x23, 0x08, 0x98, 0x8c, 0x03, 0xc6, 0xb9, 0x40, 0xa6, 0x25, 0x94, 0xad, 0xee,
	0xd8, 0xaa, 0x59, 0x9d, 0x4d, 0x06, 0x01, 0x8c, 0x25, 0x5a, 0x65, 0xef, 0xa3, 0x43, 0xdc, 0xd3,
	0x54, 0xb2, 0x9b, 0x2a, 0x76, 0x38, 0x26, 0xb3, 0x2e, 0x97, 0x13, 0xa4, 0xfb, 0xa4, 0xac, 0xcf,
	0xe6, 0x3a, 0x75, 0xa7, 0x51, 0x69, 0x55, 0x7d, 0x13, 0x98, 0x36, 0xe1, 0x2f, 0xb7, 0x84, 0x06,
	0x46, 0x1f, 0x91, 0xad, 0x45, 0x73, 0xca, 0x2d, 0xd5, 0xd7, 0x1a, 0x95, 0xd6, 0xf6, 0x42, 0xdf,
	0x2b, 0x53, 0x7f, 0xad, 0xcb, 0xe1, 0x26, 0xce, 0x17, 0xca, 0xfb, 0x5c, 0x22, 0xde, 0xb3, 0x04,
	0x18, 0xc2, 0x32, 0xf7, 0xb1, 0x09, 0x17, 0x43, 0x78, 0x3f, 0x01, 0x85, 0xf4, 0x0e, 0xd9, 0x4c,
	0xe3, 0xc6, 0x88, 0xb3, 0x31, 0x18, 0x6b, 0x1b, 0x61, 0xc5, 0xee, 0xbd, 0x60, 0x63, 0xa0, 0x94,
	0x94, 0x91, 0x0d, 0x53, 0xf5, 0x8d, 0xd0, 0x7c, 0x53, 0x97, 0xac, 0xa7, 0x6a, 0xca, 0xbd, 0x66,
	0xb6, 0xb3, 0x25, 0x7d, 0x4e, 0xd6, 0x81, 0x63, 0x12, 0x83, 0x72, 0xd7, 0x8c, 0xdd, 0x43, 0x3f,
	0x77, 0x2e, 0xfc, 0xbc, 0xa4, 0xc2, 0x8c, 0x83, 0x76, 0xc8, 0xcd, 0x8b, 0x77, 0xec, 0x96, 0x4d,
	0x7c, 0xb5, 0x85, 0x18, 0xc2, 0x0c, 0xf2, 0xd2, 0x20, 0xc2, 0x1b, 0xc9, 0xf2, 0x86, 0x77, 0xee,
	0x90, 0xdd, 0xa7, 0x52, 0x02, 0xef, 0xaf, 0xa6, 0xf1, 0x0f, 0x51, 0x5c, 0xed, 0xe1, 0x5a, 0x3f,
	0xcb, 0xa4, 0xba, 0xea, 0xe7, 0x34, 0x25, 0xa2, 0xdf, 0x1c, 0xb2, 0x53, 0x70, 0x83, 0xf4, 0x49,
	0x81, 0xf6, 0xe5, 0x37, 0x5f, 0xdb, 0xf6, 0xd3, 0x39, 0xf6, 0xb3, 0x39, 0xf6, 0x3b, 0x7a, 0x8e,
	0xbd, 0x87, 0x1f, 0xbe, 0xff, 0x38, 0x2f, 0xdd, 0xf7, 0xea, 0x2b, 0x3f, 0xff, 0xbe, 0xfd, 0x87,
	0xda, 0x3d, 0xc3, 0xde, 0x76, 0x9a, 0xf4, 0xab, 0x43, 0xdc, 0xbc, 0x5c, 0x69, 0xbb, 0xc0, 0xe0,
	0x25, 0x97, 0xf1, 0x3f, 0xee, 0x98, 0xa1, 0xd6, 0xee, 0x3e, 0x39, 0xc4, 0x3d, 0x36, 0xef, 0xcb,
	0x1f, 0xdc, 0x35, 0x0a, 0xdc, 0xa5, 0x4d, 0x57, 0xe0, 0x25, 0x7d, 0xdd, 0xb4, 0x97, 0x2f, 0x0e,
	0xa9, 0x9c, 0x00, 0x1e, 0x31, 0xfe, 0xae, 0xcb, 0x07, 0x82, 0xee, 0x15, 0xc8, 0x9f, 0x00, 0x6a,
	0x4c, 0xa6, 0xdf, 0xfc, 0x1b, 0xa8, 0x92, 0x82, 0x2b, 0xf0, 0xf6, 0x8c, 0xa7, 0xbb, 0xde, 0xed,
	0x7c, 0x4f, 0xfa, 0x25, 0x6d, 0x3b, 0xcd, 0xa3, 0xad, 0x37, 0x95, 0x05, 0xca, 0xb3, 0xeb, 0xe6,
	0x74, 0x87, 0xbf, 0x02, 0x00, 0x00, 0xff, 0xff, 0xab, 0xcd, 0x20, 0xf8, 0x05, 0x06, 0x00, 0x00,
}
