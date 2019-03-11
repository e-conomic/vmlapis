// Code generated by protoc-gen-go. DO NOT EDIT.
// source: ssn/scanner/v1/scanner_internal.proto

package scanner

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import _ "github.com/e-conomic/vmlapis/gen/go/lyft/validate"
import v1 "github.com/e-conomic/vmlapis/gen/go/ssn/ocrservice/v1"
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

type InternalScanResponse struct {
	ScanResponse         *ScanResponse              `protobuf:"bytes,1,opt,name=scan_response,json=scanResponse,proto3" json:"scan_response,omitempty"`
	OcrResponses         []*v1.OcrScanImageResponse `protobuf:"bytes,2,rep,name=ocr_responses,json=ocrResponses,proto3" json:"ocr_responses,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                   `json:"-"`
	XXX_unrecognized     []byte                     `json:"-"`
	XXX_sizecache        int32                      `json:"-"`
}

func (m *InternalScanResponse) Reset()         { *m = InternalScanResponse{} }
func (m *InternalScanResponse) String() string { return proto.CompactTextString(m) }
func (*InternalScanResponse) ProtoMessage()    {}
func (*InternalScanResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_scanner_internal_3d5c7252be05bf71, []int{0}
}
func (m *InternalScanResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_InternalScanResponse.Unmarshal(m, b)
}
func (m *InternalScanResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_InternalScanResponse.Marshal(b, m, deterministic)
}
func (dst *InternalScanResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_InternalScanResponse.Merge(dst, src)
}
func (m *InternalScanResponse) XXX_Size() int {
	return xxx_messageInfo_InternalScanResponse.Size(m)
}
func (m *InternalScanResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_InternalScanResponse.DiscardUnknown(m)
}

var xxx_messageInfo_InternalScanResponse proto.InternalMessageInfo

func (m *InternalScanResponse) GetScanResponse() *ScanResponse {
	if m != nil {
		return m.ScanResponse
	}
	return nil
}

func (m *InternalScanResponse) GetOcrResponses() []*v1.OcrScanImageResponse {
	if m != nil {
		return m.OcrResponses
	}
	return nil
}

func init() {
	proto.RegisterType((*InternalScanResponse)(nil), "ssn.scanner.v1.InternalScanResponse")
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// InternalScannerClient is the client API for InternalScanner service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type InternalScannerClient interface {
	InternalScan(ctx context.Context, in *ScanRequest, opts ...grpc.CallOption) (*InternalScanResponse, error)
}

type internalScannerClient struct {
	cc *grpc.ClientConn
}

func NewInternalScannerClient(cc *grpc.ClientConn) InternalScannerClient {
	return &internalScannerClient{cc}
}

func (c *internalScannerClient) InternalScan(ctx context.Context, in *ScanRequest, opts ...grpc.CallOption) (*InternalScanResponse, error) {
	out := new(InternalScanResponse)
	err := c.cc.Invoke(ctx, "/ssn.scanner.v1.InternalScanner/InternalScan", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// InternalScannerServer is the server API for InternalScanner service.
type InternalScannerServer interface {
	InternalScan(context.Context, *ScanRequest) (*InternalScanResponse, error)
}

func RegisterInternalScannerServer(s *grpc.Server, srv InternalScannerServer) {
	s.RegisterService(&_InternalScanner_serviceDesc, srv)
}

func _InternalScanner_InternalScan_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ScanRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InternalScannerServer).InternalScan(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ssn.scanner.v1.InternalScanner/InternalScan",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InternalScannerServer).InternalScan(ctx, req.(*ScanRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _InternalScanner_serviceDesc = grpc.ServiceDesc{
	ServiceName: "ssn.scanner.v1.InternalScanner",
	HandlerType: (*InternalScannerServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "InternalScan",
			Handler:    _InternalScanner_InternalScan_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "ssn/scanner/v1/scanner_internal.proto",
}

func init() {
	proto.RegisterFile("ssn/scanner/v1/scanner_internal.proto", fileDescriptor_scanner_internal_3d5c7252be05bf71)
}

var fileDescriptor_scanner_internal_3d5c7252be05bf71 = []byte{
	// 262 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x6c, 0x90, 0xc1, 0x4a, 0xc3, 0x40,
	0x10, 0x86, 0x89, 0x82, 0xe2, 0xb6, 0x55, 0x08, 0x1e, 0x4a, 0xcc, 0xa1, 0x14, 0xc5, 0x9e, 0x36,
	0x24, 0x3e, 0x81, 0xde, 0x0a, 0x82, 0x58, 0x6f, 0x5e, 0xca, 0xba, 0x1d, 0x43, 0x20, 0xce, 0xc4,
	0x99, 0x35, 0xe0, 0x13, 0xf9, 0x9a, 0x92, 0x76, 0xd3, 0xae, 0x92, 0xdb, 0xcc, 0xfc, 0x93, 0x6f,
	0xbe, 0xac, 0xba, 0x11, 0xc1, 0x4c, 0xac, 0x41, 0x04, 0xce, 0xda, 0xbc, 0x2f, 0xd7, 0x15, 0x3a,
	0x60, 0x34, 0xb5, 0x6e, 0x98, 0x1c, 0xc5, 0xe7, 0x22, 0xa8, 0x7d, 0xa6, 0xdb, 0x3c, 0x49, 0x4b,
	0xa2, 0xb2, 0x86, 0xcc, 0x34, 0x55, 0x66, 0x10, 0xc9, 0x19, 0x57, 0x11, 0xca, 0x6e, 0x3b, 0x49,
	0xeb, 0xef, 0x77, 0x97, 0xb5, 0xa6, 0xae, 0x36, 0xc6, 0xc1, 0xbe, 0xf0, 0xe9, 0xbc, 0x3b, 0x49,
	0x96, 0x05, 0xb8, 0xad, 0x2c, 0x74, 0x57, 0x0f, 0x5d, 0x4f, 0x18, 0xd6, 0xda, 0xa5, 0xf3, 0x9f,
	0x48, 0x5d, 0x2e, 0xbd, 0xe0, 0x8b, 0x35, 0xb8, 0x02, 0x69, 0x08, 0x05, 0xe2, 0x7b, 0x35, 0xe9,
	0x36, 0xd7, 0xec, 0x07, 0xd3, 0x68, 0x16, 0x2d, 0x46, 0x45, 0xaa, 0xff, 0xea, 0xeb, 0xf0, 0xa3,
	0xd5, 0x58, 0x42, 0xc4, 0xa3, 0x9a, 0x90, 0xe5, 0x3d, 0x41, 0xa6, 0x47, 0xb3, 0xe3, 0xc5, 0xa8,
	0xb8, 0xdd, 0x22, 0x02, 0xcf, 0x36, 0xd7, 0x4f, 0x96, 0x3b, 0xd0, 0xf2, 0xc3, 0x94, 0x70, 0xa0,
	0x91, 0xe5, 0xbe, 0x91, 0x62, 0xa3, 0x2e, 0x42, 0x51, 0x04, 0x8e, 0x9f, 0xd5, 0x38, 0x1c, 0xc5,
	0x57, 0xc3, 0x72, 0x9f, 0x5f, 0x20, 0x2e, 0xb9, 0xfe, 0x1f, 0x0e, 0xfd, 0xf6, 0xc3, 0xd9, 0xeb,
	0xa9, 0x5f, 0x79, 0x3b, 0xd9, 0xbe, 0xd0, 0xdd, 0x6f, 0x00, 0x00, 0x00, 0xff, 0xff, 0xff, 0xea,
	0x6a, 0x7d, 0xd8, 0x01, 0x00, 0x00,
}
