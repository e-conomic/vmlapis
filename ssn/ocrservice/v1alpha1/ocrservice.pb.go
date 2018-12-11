// Code generated by protoc-gen-go. DO NOT EDIT.
// source: ssn/ocrservice/v1alpha1/ocrservice.proto

package ocrservice // import "github.com/e-conomic/proto/ssn/ocrservice/v1alpha1"

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
	return fileDescriptor_ocrservice_16d9ed9068a8d574, []int{0}
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
	return fileDescriptor_ocrservice_16d9ed9068a8d574, []int{1}
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
	proto.RegisterType((*OcrScanImageRequest)(nil), "ocrservice.OcrScanImageRequest")
	proto.RegisterType((*OcrScanImageResponse)(nil), "ocrservice.OcrScanImageResponse")
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
	err := c.cc.Invoke(ctx, "/ocrservice.OcrService/OcrScanImage", in, out, opts...)
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
		FullMethod: "/ocrservice.OcrService/OcrScanImage",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OcrServiceServer).OcrScanImage(ctx, req.(*OcrScanImageRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _OcrService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "ocrservice.OcrService",
	HandlerType: (*OcrServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "OcrScanImage",
			Handler:    _OcrService_OcrScanImage_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "ssn/ocrservice/v1alpha1/ocrservice.proto",
}

func init() {
	proto.RegisterFile("ssn/ocrservice/v1alpha1/ocrservice.proto", fileDescriptor_ocrservice_16d9ed9068a8d574)
}

var fileDescriptor_ocrservice_16d9ed9068a8d574 = []byte{
	// 200 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0xd2, 0x28, 0x2e, 0xce, 0xd3,
	0xcf, 0x4f, 0x2e, 0x2a, 0x4e, 0x2d, 0x2a, 0xcb, 0x4c, 0x4e, 0xd5, 0x2f, 0x33, 0x4c, 0xcc, 0x29,
	0xc8, 0x48, 0x34, 0x44, 0x12, 0xd3, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0xe2, 0x42, 0x88, 0x28,
	0x69, 0x72, 0x09, 0xfb, 0x27, 0x17, 0x05, 0x27, 0x27, 0xe6, 0x79, 0xe6, 0x26, 0xa6, 0xa7, 0x06,
	0xa5, 0x16, 0x96, 0xa6, 0x16, 0x97, 0x08, 0x09, 0x71, 0xb1, 0xa4, 0x24, 0x96, 0x24, 0x4a, 0x30,
	0x2a, 0x30, 0x6a, 0xf0, 0x04, 0x81, 0xd9, 0x4a, 0x46, 0x5c, 0x22, 0xa8, 0x4a, 0x8b, 0x0b, 0xf2,
	0xf3, 0x8a, 0x53, 0x85, 0xa4, 0xb8, 0x38, 0x4a, 0x52, 0x8b, 0x8b, 0x3d, 0xf2, 0x93, 0x8b, 0xc0,
	0xea, 0x39, 0x83, 0xe0, 0x7c, 0xa3, 0x44, 0x2e, 0x2e, 0x90, 0x1e, 0x88, 0x65, 0x42, 0xc1, 0x5c,
	0x3c, 0xc8, 0x26, 0x08, 0xc9, 0xeb, 0x21, 0xb9, 0x0d, 0x8b, 0x33, 0xa4, 0x14, 0x70, 0x2b, 0x80,
	0x58, 0xae, 0xc4, 0xe0, 0x64, 0x1f, 0x65, 0x9b, 0x9e, 0x59, 0x92, 0x51, 0x9a, 0xa4, 0x97, 0x9c,
	0x9f, 0xab, 0x9f, 0xaa, 0x9b, 0x9c, 0x9f, 0x97, 0x9f, 0x9b, 0x99, 0xac, 0x0f, 0xf6, 0xab, 0x3e,
	0x8e, 0x40, 0xb1, 0x46, 0x88, 0x25, 0xb1, 0x81, 0x55, 0x1a, 0x03, 0x02, 0x00, 0x00, 0xff, 0xff,
	0xcc, 0xb6, 0x9b, 0xd1, 0x41, 0x01, 0x00, 0x00,
}
