// Code generated by protoc-gen-go. DO NOT EDIT.
// source: showmethemoney.proto

package ssn

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"

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

type PredictedField struct {
	Value                string   `protobuf:"bytes,1,opt,name=value,proto3" json:"value,omitempty"`
	Confidence           uint32   `protobuf:"varint,2,opt,name=confidence,proto3" json:"confidence,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *PredictedField) Reset()         { *m = PredictedField{} }
func (m *PredictedField) String() string { return proto.CompactTextString(m) }
func (*PredictedField) ProtoMessage()    {}
func (*PredictedField) Descriptor() ([]byte, []int) {
	return fileDescriptor_aee26f7e28f14559, []int{0}
}
func (m *PredictedField) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_PredictedField.Unmarshal(m, b)
}
func (m *PredictedField) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_PredictedField.Marshal(b, m, deterministic)
}
func (dst *PredictedField) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PredictedField.Merge(dst, src)
}
func (m *PredictedField) XXX_Size() int {
	return xxx_messageInfo_PredictedField.Size(m)
}
func (m *PredictedField) XXX_DiscardUnknown() {
	xxx_messageInfo_PredictedField.DiscardUnknown(m)
}

var xxx_messageInfo_PredictedField proto.InternalMessageInfo

func (m *PredictedField) GetValue() string {
	if m != nil {
		return m.Value
	}
	return ""
}

func (m *PredictedField) GetConfidence() uint32 {
	if m != nil {
		return m.Confidence
	}
	return 0
}

type VoucherExtractionRequest struct {
	Ocr                  string   `protobuf:"bytes,1,opt,name=ocr,proto3" json:"ocr,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *VoucherExtractionRequest) Reset()         { *m = VoucherExtractionRequest{} }
func (m *VoucherExtractionRequest) String() string { return proto.CompactTextString(m) }
func (*VoucherExtractionRequest) ProtoMessage()    {}
func (*VoucherExtractionRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_aee26f7e28f14559, []int{1}
}
func (m *VoucherExtractionRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_VoucherExtractionRequest.Unmarshal(m, b)
}
func (m *VoucherExtractionRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_VoucherExtractionRequest.Marshal(b, m, deterministic)
}
func (dst *VoucherExtractionRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_VoucherExtractionRequest.Merge(dst, src)
}
func (m *VoucherExtractionRequest) XXX_Size() int {
	return xxx_messageInfo_VoucherExtractionRequest.Size(m)
}
func (m *VoucherExtractionRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_VoucherExtractionRequest.DiscardUnknown(m)
}

var xxx_messageInfo_VoucherExtractionRequest proto.InternalMessageInfo

func (m *VoucherExtractionRequest) GetOcr() string {
	if m != nil {
		return m.Ocr
	}
	return ""
}

type VoucherExtractionResponse struct {
	TotalIncludingVat    *PredictedField `protobuf:"bytes,1,opt,name=totalIncludingVat,proto3" json:"totalIncludingVat,omitempty"`
	VatDistributionSE12  *PredictedField `protobuf:"bytes,2,opt,name=vatDistributionSE12,proto3" json:"vatDistributionSE12,omitempty"`
	VatDistributionSE25  *PredictedField `protobuf:"bytes,3,opt,name=vatDistributionSE25,proto3" json:"vatDistributionSE25,omitempty"`
	XXX_NoUnkeyedLiteral struct{}        `json:"-"`
	XXX_unrecognized     []byte          `json:"-"`
	XXX_sizecache        int32           `json:"-"`
}

func (m *VoucherExtractionResponse) Reset()         { *m = VoucherExtractionResponse{} }
func (m *VoucherExtractionResponse) String() string { return proto.CompactTextString(m) }
func (*VoucherExtractionResponse) ProtoMessage()    {}
func (*VoucherExtractionResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_aee26f7e28f14559, []int{2}
}
func (m *VoucherExtractionResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_VoucherExtractionResponse.Unmarshal(m, b)
}
func (m *VoucherExtractionResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_VoucherExtractionResponse.Marshal(b, m, deterministic)
}
func (dst *VoucherExtractionResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_VoucherExtractionResponse.Merge(dst, src)
}
func (m *VoucherExtractionResponse) XXX_Size() int {
	return xxx_messageInfo_VoucherExtractionResponse.Size(m)
}
func (m *VoucherExtractionResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_VoucherExtractionResponse.DiscardUnknown(m)
}

var xxx_messageInfo_VoucherExtractionResponse proto.InternalMessageInfo

func (m *VoucherExtractionResponse) GetTotalIncludingVat() *PredictedField {
	if m != nil {
		return m.TotalIncludingVat
	}
	return nil
}

func (m *VoucherExtractionResponse) GetVatDistributionSE12() *PredictedField {
	if m != nil {
		return m.VatDistributionSE12
	}
	return nil
}

func (m *VoucherExtractionResponse) GetVatDistributionSE25() *PredictedField {
	if m != nil {
		return m.VatDistributionSE25
	}
	return nil
}

func init() {
	proto.RegisterType((*PredictedField)(nil), "ssn.PredictedField")
	proto.RegisterType((*VoucherExtractionRequest)(nil), "ssn.VoucherExtractionRequest")
	proto.RegisterType((*VoucherExtractionResponse)(nil), "ssn.VoucherExtractionResponse")
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// VoucherExtractionServiceClient is the client API for VoucherExtractionService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type VoucherExtractionServiceClient interface {
	GetPrediction(ctx context.Context, in *VoucherExtractionRequest, opts ...grpc.CallOption) (*VoucherExtractionResponse, error)
}

type voucherExtractionServiceClient struct {
	cc *grpc.ClientConn
}

func NewVoucherExtractionServiceClient(cc *grpc.ClientConn) VoucherExtractionServiceClient {
	return &voucherExtractionServiceClient{cc}
}

func (c *voucherExtractionServiceClient) GetPrediction(ctx context.Context, in *VoucherExtractionRequest, opts ...grpc.CallOption) (*VoucherExtractionResponse, error) {
	out := new(VoucherExtractionResponse)
	err := c.cc.Invoke(ctx, "/ssn.VoucherExtractionService/GetPrediction", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// VoucherExtractionServiceServer is the server API for VoucherExtractionService service.
type VoucherExtractionServiceServer interface {
	GetPrediction(context.Context, *VoucherExtractionRequest) (*VoucherExtractionResponse, error)
}

func RegisterVoucherExtractionServiceServer(s *grpc.Server, srv VoucherExtractionServiceServer) {
	s.RegisterService(&_VoucherExtractionService_serviceDesc, srv)
}

func _VoucherExtractionService_GetPrediction_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(VoucherExtractionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(VoucherExtractionServiceServer).GetPrediction(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ssn.VoucherExtractionService/GetPrediction",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(VoucherExtractionServiceServer).GetPrediction(ctx, req.(*VoucherExtractionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _VoucherExtractionService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "ssn.VoucherExtractionService",
	HandlerType: (*VoucherExtractionServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetPrediction",
			Handler:    _VoucherExtractionService_GetPrediction_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "showmethemoney.proto",
}

func init() { proto.RegisterFile("showmethemoney.proto", fileDescriptor_aee26f7e28f14559) }

var fileDescriptor_aee26f7e28f14559 = []byte{
	// 271 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x91, 0x4f, 0x4b, 0xf3, 0x40,
	0x10, 0xc6, 0xdf, 0xbc, 0x41, 0xc1, 0x91, 0x8a, 0x6e, 0x7b, 0x88, 0x82, 0xa5, 0xe4, 0xd4, 0x83,
	0x04, 0x8c, 0xf4, 0x03, 0x08, 0xa6, 0xe2, 0xad, 0xa4, 0xd0, 0x7b, 0xba, 0x19, 0xcd, 0x42, 0x3a,
	0x53, 0x77, 0x67, 0xa3, 0x7e, 0x67, 0x3f, 0x84, 0x34, 0xed, 0x41, 0x31, 0x39, 0x78, 0x9b, 0x3f,
	0xcf, 0xfc, 0x78, 0x78, 0x06, 0x46, 0xae, 0xe2, 0xb7, 0x0d, 0x4a, 0x85, 0x1b, 0x26, 0xfc, 0x48,
	0xb6, 0x96, 0x85, 0x55, 0xe8, 0x1c, 0xc5, 0x73, 0x38, 0x5b, 0x58, 0x2c, 0x8d, 0x16, 0x2c, 0xe7,
	0x06, 0xeb, 0x52, 0x8d, 0xe0, 0xa8, 0x29, 0x6a, 0x8f, 0x51, 0x30, 0x09, 0xa6, 0x27, 0xf9, 0xbe,
	0x51, 0x63, 0x00, 0xcd, 0xf4, 0x6c, 0x4a, 0x24, 0x8d, 0xd1, 0xff, 0x49, 0x30, 0x1d, 0xe4, 0xdf,
	0x26, 0xf1, 0x0d, 0x44, 0x2b, 0xf6, 0xba, 0x42, 0x9b, 0xbd, 0x8b, 0x2d, 0xb4, 0x18, 0xa6, 0x1c,
	0x5f, 0x3d, 0x3a, 0x51, 0xe7, 0x10, 0xb2, 0xb6, 0x07, 0xde, 0xae, 0x8c, 0x3f, 0x03, 0xb8, 0xec,
	0x90, 0xbb, 0x2d, 0x93, 0x43, 0x75, 0x0f, 0x17, 0xc2, 0x52, 0xd4, 0x4f, 0xa4, 0x6b, 0x5f, 0x1a,
	0x7a, 0x59, 0x15, 0xd2, 0x5e, 0x9f, 0xa6, 0xc3, 0xc4, 0x39, 0x4a, 0x7e, 0x3a, 0xce, 0x7f, 0xab,
	0x55, 0x06, 0xc3, 0xa6, 0x90, 0x07, 0xe3, 0xc4, 0x9a, 0xb5, 0xdf, 0xd1, 0x97, 0xd9, 0x6d, 0xda,
	0xfa, 0xee, 0x81, 0x74, 0xe9, 0x3b, 0x31, 0xe9, 0x2c, 0x0a, 0xff, 0x82, 0x49, 0x67, 0x69, 0xdd,
	0x11, 0xce, 0x12, 0x6d, 0x63, 0x34, 0xaa, 0x05, 0x0c, 0x1e, 0x51, 0x0e, 0x14, 0xc3, 0xa4, 0xae,
	0x5b, 0x6c, 0x5f, 0x98, 0x57, 0xe3, 0xbe, 0xf5, 0x3e, 0xbc, 0xf8, 0xdf, 0xfa, 0xb8, 0x7d, 0xef,
	0xdd, 0x57, 0x00, 0x00, 0x00, 0xff, 0xff, 0x2a, 0x8e, 0xe6, 0x0d, 0xf6, 0x01, 0x00, 0x00,
}
