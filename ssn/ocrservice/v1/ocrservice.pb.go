// Code generated by protoc-gen-go. DO NOT EDIT.
// source: ssn/ocrservice/v1/ocrservice.proto

package ocrservice // import "github.com/e-conomic/proto/ssn/ocrservice/v1"

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

type OcrScanImageRequest struct {
	Data                 []byte   `protobuf:"bytes,1,opt,name=data,proto3" json:"data,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *OcrScanImageRequest) Reset()         { *m = OcrScanImageRequest{} }
func (m *OcrScanImageRequest) String() string { return proto.CompactTextString(m) }
func (*OcrScanImageRequest) ProtoMessage()    {}
func (*OcrScanImageRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_ocrservice_2584c32a2cb5c608, []int{0}
}
func (m *OcrScanImageRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_OcrScanImageRequest.Unmarshal(m, b)
}
func (m *OcrScanImageRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_OcrScanImageRequest.Marshal(b, m, deterministic)
}
func (dst *OcrScanImageRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_OcrScanImageRequest.Merge(dst, src)
}
func (m *OcrScanImageRequest) XXX_Size() int {
	return xxx_messageInfo_OcrScanImageRequest.Size(m)
}
func (m *OcrScanImageRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_OcrScanImageRequest.DiscardUnknown(m)
}

var xxx_messageInfo_OcrScanImageRequest proto.InternalMessageInfo

func (m *OcrScanImageRequest) GetData() []byte {
	if m != nil {
		return m.Data
	}
	return nil
}

type OcrScanImageResponse struct {
	TessHocr             string   `protobuf:"bytes,1,opt,name=tessHocr,proto3" json:"tessHocr,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *OcrScanImageResponse) Reset()         { *m = OcrScanImageResponse{} }
func (m *OcrScanImageResponse) String() string { return proto.CompactTextString(m) }
func (*OcrScanImageResponse) ProtoMessage()    {}
func (*OcrScanImageResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_ocrservice_2584c32a2cb5c608, []int{1}
}
func (m *OcrScanImageResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_OcrScanImageResponse.Unmarshal(m, b)
}
func (m *OcrScanImageResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_OcrScanImageResponse.Marshal(b, m, deterministic)
}
func (dst *OcrScanImageResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_OcrScanImageResponse.Merge(dst, src)
}
func (m *OcrScanImageResponse) XXX_Size() int {
	return xxx_messageInfo_OcrScanImageResponse.Size(m)
}
func (m *OcrScanImageResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_OcrScanImageResponse.DiscardUnknown(m)
}

var xxx_messageInfo_OcrScanImageResponse proto.InternalMessageInfo

func (m *OcrScanImageResponse) GetTessHocr() string {
	if m != nil {
		return m.TessHocr
	}
	return ""
}

func init() {
	proto.RegisterType((*OcrScanImageRequest)(nil), "ssn.ocrservice.v1.OcrScanImageRequest")
	proto.RegisterType((*OcrScanImageResponse)(nil), "ssn.ocrservice.v1.OcrScanImageResponse")
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// OcrServiceClient is the client API for OcrService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type OcrServiceClient interface {
	OcrScanImage(ctx context.Context, in *OcrScanImageRequest, opts ...grpc.CallOption) (*OcrScanImageResponse, error)
}

type ocrServiceClient struct {
	cc *grpc.ClientConn
}

func NewOcrServiceClient(cc *grpc.ClientConn) OcrServiceClient {
	return &ocrServiceClient{cc}
}

func (c *ocrServiceClient) OcrScanImage(ctx context.Context, in *OcrScanImageRequest, opts ...grpc.CallOption) (*OcrScanImageResponse, error) {
	out := new(OcrScanImageResponse)
	err := c.cc.Invoke(ctx, "/ssn.ocrservice.v1.OcrService/OcrScanImage", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// OcrServiceServer is the server API for OcrService service.
type OcrServiceServer interface {
	OcrScanImage(context.Context, *OcrScanImageRequest) (*OcrScanImageResponse, error)
}

func RegisterOcrServiceServer(s *grpc.Server, srv OcrServiceServer) {
	s.RegisterService(&_OcrService_serviceDesc, srv)
}

func _OcrService_OcrScanImage_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(OcrScanImageRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OcrServiceServer).OcrScanImage(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ssn.ocrservice.v1.OcrService/OcrScanImage",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OcrServiceServer).OcrScanImage(ctx, req.(*OcrScanImageRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _OcrService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "ssn.ocrservice.v1.OcrService",
	HandlerType: (*OcrServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "OcrScanImage",
			Handler:    _OcrService_OcrScanImage_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "ssn/ocrservice/v1/ocrservice.proto",
}

func init() {
	proto.RegisterFile("ssn/ocrservice/v1/ocrservice.proto", fileDescriptor_ocrservice_2584c32a2cb5c608)
}

var fileDescriptor_ocrservice_2584c32a2cb5c608 = []byte{
	// 201 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x52, 0x2a, 0x2e, 0xce, 0xd3,
	0xcf, 0x4f, 0x2e, 0x2a, 0x4e, 0x2d, 0x2a, 0xcb, 0x4c, 0x4e, 0xd5, 0x2f, 0x33, 0x44, 0xe2, 0xe9,
	0x15, 0x14, 0xe5, 0x97, 0xe4, 0x0b, 0x09, 0x16, 0x17, 0xe7, 0xe9, 0x21, 0x89, 0x96, 0x19, 0x2a,
	0x69, 0x72, 0x09, 0xfb, 0x27, 0x17, 0x05, 0x27, 0x27, 0xe6, 0x79, 0xe6, 0x26, 0xa6, 0xa7, 0x06,
	0xa5, 0x16, 0x96, 0xa6, 0x16, 0x97, 0x08, 0x09, 0x71, 0xb1, 0xa4, 0x24, 0x96, 0x24, 0x4a, 0x30,
	0x2a, 0x30, 0x6a, 0xf0, 0x04, 0x81, 0xd9, 0x4a, 0x46, 0x5c, 0x22, 0xa8, 0x4a, 0x8b, 0x0b, 0xf2,
	0xf3, 0x8a, 0x53, 0x85, 0xa4, 0xb8, 0x38, 0x4a, 0x52, 0x8b, 0x8b, 0x3d, 0xf2, 0x93, 0x8b, 0xc0,
	0xea, 0x39, 0x83, 0xe0, 0x7c, 0xa3, 0x7c, 0x2e, 0x2e, 0x90, 0x1e, 0x88, 0x7d, 0x42, 0x89, 0x5c,
	0x3c, 0xc8, 0x26, 0x08, 0xa9, 0xe9, 0x61, 0x38, 0x48, 0x0f, 0x8b, 0x6b, 0xa4, 0xd4, 0x09, 0xaa,
	0x83, 0x38, 0x45, 0x89, 0xc1, 0xc9, 0x32, 0xca, 0x3c, 0x3d, 0xb3, 0x24, 0xa3, 0x34, 0x49, 0x2f,
	0x39, 0x3f, 0x57, 0x3f, 0x55, 0x37, 0x39, 0x3f, 0x2f, 0x3f, 0x37, 0x33, 0x59, 0x1f, 0x1c, 0x00,
	0xfa, 0x18, 0x61, 0x64, 0x8d, 0xe0, 0x25, 0xb1, 0x81, 0xd5, 0x18, 0x03, 0x02, 0x00, 0x00, 0xff,
	0xff, 0x4d, 0xc0, 0x20, 0x55, 0x4a, 0x01, 0x00, 0x00,
}