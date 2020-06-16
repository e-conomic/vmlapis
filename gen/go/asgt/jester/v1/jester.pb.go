// Code generated by protoc-gen-go. DO NOT EDIT.
// source: asgt/jester/v1/jester.proto

package jester

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import _type "github.com/e-conomic/vmlapis/gen/go/asgt/type"
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

// AutoSuggest
type SuggestionResponse struct {
	Predictions          []*_type.Prediction `protobuf:"bytes,1,rep,name=predictions,proto3" json:"predictions,omitempty"`
	Model                *_type.Model        `protobuf:"bytes,2,opt,name=model,proto3" json:"model,omitempty"`
	XXX_NoUnkeyedLiteral struct{}            `json:"-"`
	XXX_unrecognized     []byte              `json:"-"`
	XXX_sizecache        int32               `json:"-"`
}

func (m *SuggestionResponse) Reset()         { *m = SuggestionResponse{} }
func (m *SuggestionResponse) String() string { return proto.CompactTextString(m) }
func (*SuggestionResponse) ProtoMessage()    {}
func (*SuggestionResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_jester_d34dc0af403940d4, []int{0}
}
func (m *SuggestionResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SuggestionResponse.Unmarshal(m, b)
}
func (m *SuggestionResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SuggestionResponse.Marshal(b, m, deterministic)
}
func (dst *SuggestionResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SuggestionResponse.Merge(dst, src)
}
func (m *SuggestionResponse) XXX_Size() int {
	return xxx_messageInfo_SuggestionResponse.Size(m)
}
func (m *SuggestionResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_SuggestionResponse.DiscardUnknown(m)
}

var xxx_messageInfo_SuggestionResponse proto.InternalMessageInfo

func (m *SuggestionResponse) GetPredictions() []*_type.Prediction {
	if m != nil {
		return m.Predictions
	}
	return nil
}

func (m *SuggestionResponse) GetModel() *_type.Model {
	if m != nil {
		return m.Model
	}
	return nil
}

type SuggestionOptions struct {
	SuggestionLimit      int32                  `protobuf:"varint,1,opt,name=suggestion_limit,json=suggestionLimit,proto3" json:"suggestion_limit,omitempty"`
	MinConfidence        _type.Confidence_Level `protobuf:"varint,2,opt,name=min_confidence,json=minConfidence,proto3,enum=asgt.type.Confidence_Level" json:"min_confidence,omitempty"`
	XXX_NoUnkeyedLiteral struct{}               `json:"-"`
	XXX_unrecognized     []byte                 `json:"-"`
	XXX_sizecache        int32                  `json:"-"`
}

func (m *SuggestionOptions) Reset()         { *m = SuggestionOptions{} }
func (m *SuggestionOptions) String() string { return proto.CompactTextString(m) }
func (*SuggestionOptions) ProtoMessage()    {}
func (*SuggestionOptions) Descriptor() ([]byte, []int) {
	return fileDescriptor_jester_d34dc0af403940d4, []int{1}
}
func (m *SuggestionOptions) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SuggestionOptions.Unmarshal(m, b)
}
func (m *SuggestionOptions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SuggestionOptions.Marshal(b, m, deterministic)
}
func (dst *SuggestionOptions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SuggestionOptions.Merge(dst, src)
}
func (m *SuggestionOptions) XXX_Size() int {
	return xxx_messageInfo_SuggestionOptions.Size(m)
}
func (m *SuggestionOptions) XXX_DiscardUnknown() {
	xxx_messageInfo_SuggestionOptions.DiscardUnknown(m)
}

var xxx_messageInfo_SuggestionOptions proto.InternalMessageInfo

func (m *SuggestionOptions) GetSuggestionLimit() int32 {
	if m != nil {
		return m.SuggestionLimit
	}
	return 0
}

func (m *SuggestionOptions) GetMinConfidence() _type.Confidence_Level {
	if m != nil {
		return m.MinConfidence
	}
	return _type.Confidence_UNKNOWN
}

type SuggestionRequest struct {
	Name                 string             `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Type                 string             `protobuf:"bytes,2,opt,name=type,proto3" json:"type,omitempty"`
	Inputs               []*_type.Data      `protobuf:"bytes,3,rep,name=inputs,proto3" json:"inputs,omitempty"`
	Options              *SuggestionOptions `protobuf:"bytes,4,opt,name=options,proto3" json:"options,omitempty"`
	XXX_NoUnkeyedLiteral struct{}           `json:"-"`
	XXX_unrecognized     []byte             `json:"-"`
	XXX_sizecache        int32              `json:"-"`
}

func (m *SuggestionRequest) Reset()         { *m = SuggestionRequest{} }
func (m *SuggestionRequest) String() string { return proto.CompactTextString(m) }
func (*SuggestionRequest) ProtoMessage()    {}
func (*SuggestionRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_jester_d34dc0af403940d4, []int{2}
}
func (m *SuggestionRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SuggestionRequest.Unmarshal(m, b)
}
func (m *SuggestionRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SuggestionRequest.Marshal(b, m, deterministic)
}
func (dst *SuggestionRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SuggestionRequest.Merge(dst, src)
}
func (m *SuggestionRequest) XXX_Size() int {
	return xxx_messageInfo_SuggestionRequest.Size(m)
}
func (m *SuggestionRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_SuggestionRequest.DiscardUnknown(m)
}

var xxx_messageInfo_SuggestionRequest proto.InternalMessageInfo

func (m *SuggestionRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *SuggestionRequest) GetType() string {
	if m != nil {
		return m.Type
	}
	return ""
}

func (m *SuggestionRequest) GetInputs() []*_type.Data {
	if m != nil {
		return m.Inputs
	}
	return nil
}

func (m *SuggestionRequest) GetOptions() *SuggestionOptions {
	if m != nil {
		return m.Options
	}
	return nil
}

func init() {
	proto.RegisterType((*SuggestionResponse)(nil), "asgt.jester.v1.SuggestionResponse")
	proto.RegisterType((*SuggestionOptions)(nil), "asgt.jester.v1.SuggestionOptions")
	proto.RegisterType((*SuggestionRequest)(nil), "asgt.jester.v1.SuggestionRequest")
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// JesterClient is the client API for Jester service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type JesterClient interface {
	Suggest(ctx context.Context, in *SuggestionRequest, opts ...grpc.CallOption) (*SuggestionResponse, error)
}

type jesterClient struct {
	cc *grpc.ClientConn
}

func NewJesterClient(cc *grpc.ClientConn) JesterClient {
	return &jesterClient{cc}
}

func (c *jesterClient) Suggest(ctx context.Context, in *SuggestionRequest, opts ...grpc.CallOption) (*SuggestionResponse, error) {
	out := new(SuggestionResponse)
	err := c.cc.Invoke(ctx, "/asgt.jester.v1.Jester/Suggest", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// JesterServer is the server API for Jester service.
type JesterServer interface {
	Suggest(context.Context, *SuggestionRequest) (*SuggestionResponse, error)
}

func RegisterJesterServer(s *grpc.Server, srv JesterServer) {
	s.RegisterService(&_Jester_serviceDesc, srv)
}

func _Jester_Suggest_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SuggestionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(JesterServer).Suggest(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asgt.jester.v1.Jester/Suggest",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(JesterServer).Suggest(ctx, req.(*SuggestionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Jester_serviceDesc = grpc.ServiceDesc{
	ServiceName: "asgt.jester.v1.Jester",
	HandlerType: (*JesterServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Suggest",
			Handler:    _Jester_Suggest_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "asgt/jester/v1/jester.proto",
}

func init() { proto.RegisterFile("asgt/jester/v1/jester.proto", fileDescriptor_jester_d34dc0af403940d4) }

var fileDescriptor_jester_d34dc0af403940d4 = []byte{
	// 400 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x7c, 0x92, 0xd1, 0xea, 0xd3, 0x30,
	0x14, 0xc6, 0xe9, 0x7f, 0x5b, 0xe7, 0x32, 0xdc, 0x66, 0x70, 0x50, 0x3b, 0x91, 0x59, 0x44, 0xa7,
	0x17, 0x2d, 0xab, 0x17, 0xc2, 0xbc, 0x9b, 0x5e, 0xc9, 0x44, 0x89, 0x77, 0xde, 0x8c, 0xb8, 0x1e,
	0x4b, 0xa4, 0x4d, 0xea, 0x92, 0x16, 0x64, 0x0c, 0x64, 0xaf, 0xe0, 0x13, 0xf8, 0x4c, 0xbe, 0x82,
	0x0f, 0x22, 0x49, 0xe3, 0xda, 0xf1, 0x87, 0xdd, 0x85, 0xdf, 0xf7, 0xe5, 0x7c, 0xe7, 0x9c, 0x04,
	0xcd, 0xa8, 0x4c, 0x55, 0xf4, 0x0d, 0xa4, 0x82, 0x7d, 0x54, 0x2d, 0xed, 0x29, 0x2c, 0xf6, 0x42,
	0x09, 0x3c, 0xd2, 0x62, 0x68, 0x51, 0xb5, 0xf4, 0xef, 0x1b, 0xb3, 0xfa, 0x51, 0x40, 0x94, 0x50,
	0x45, 0x6b, 0x97, 0x3f, 0x6d, 0x68, 0x2e, 0x12, 0xc8, 0x2c, 0xf6, 0x1b, 0x5c, 0xec, 0x21, 0x61,
	0x3b, 0xc5, 0x04, 0xb7, 0xda, 0xc3, 0x54, 0x88, 0x34, 0x83, 0x88, 0x16, 0x2c, 0xa2, 0x9c, 0x0b,
	0x45, 0xb5, 0x28, 0x6b, 0x35, 0x28, 0x11, 0xfe, 0x54, 0xa6, 0x29, 0x48, 0x0d, 0x09, 0xc8, 0x42,
	0x70, 0x09, 0xf8, 0x15, 0x1a, 0x36, 0x75, 0xa4, 0xe7, 0xcc, 0x3b, 0x8b, 0x61, 0x3c, 0x0d, 0x4d,
	0x8b, 0x3a, 0x25, 0xfc, 0x78, 0x56, 0x49, 0xdb, 0x89, 0x9f, 0xa2, 0x9e, 0xe9, 0xcb, 0xbb, 0x99,
	0x3b, 0x8b, 0x61, 0x3c, 0x69, 0x5d, 0x79, 0xaf, 0x39, 0xa9, 0xe5, 0xe0, 0xe4, 0xa0, 0x7b, 0x4d,
	0xee, 0x87, 0xa2, 0xbe, 0xfd, 0x1c, 0x4d, 0xe4, 0x19, 0x6e, 0x33, 0x96, 0x33, 0xe5, 0x39, 0x73,
	0x67, 0xd1, 0x23, 0xe3, 0x86, 0x6f, 0x34, 0xc6, 0x6b, 0x34, 0xca, 0x19, 0xdf, 0xee, 0x04, 0xff,
	0xca, 0x12, 0xe0, 0x3b, 0x30, 0x89, 0xa3, 0x78, 0xd6, 0x4a, 0x7c, 0x73, 0x16, 0xc3, 0x0d, 0x54,
	0x90, 0x91, 0xbb, 0x39, 0xe3, 0x0d, 0x0c, 0x7e, 0x5f, 0x34, 0x41, 0xe0, 0x7b, 0x09, 0x52, 0x61,
	0x8c, 0xba, 0x9c, 0xe6, 0x60, 0x82, 0x07, 0xc4, 0x9c, 0x35, 0xd3, 0x15, 0x4d, 0xc6, 0x80, 0x98,
	0x33, 0x7e, 0x86, 0x5c, 0xc6, 0x8b, 0x52, 0x49, 0xaf, 0x63, 0xd6, 0x33, 0x6e, 0x25, 0xbf, 0xa5,
	0x8a, 0x12, 0x2b, 0xe3, 0xd7, 0xa8, 0x2f, 0xea, 0x01, 0xbd, 0xae, 0xd9, 0xca, 0xe3, 0xf0, 0xf2,
	0xad, 0xc3, 0x5b, 0x9b, 0x20, 0xff, 0x6f, 0xc4, 0x3f, 0x1d, 0xe4, 0xbe, 0x33, 0x46, 0x5c, 0xa1,
	0xbe, 0x35, 0xe2, 0x2b, 0x15, 0xec, 0x18, 0x7e, 0x70, 0xcd, 0x52, 0x3f, 0x73, 0xf0, 0xe4, 0xf4,
	0xe7, 0xef, 0xaf, 0x9b, 0x47, 0xc1, 0x03, 0xfd, 0x1b, 0x0f, 0xba, 0xf3, 0x63, 0x74, 0xd0, 0x03,
	0x1f, 0x57, 0x76, 0xdf, 0x2b, 0xe7, 0xc5, 0xfa, 0xce, 0x67, 0xb7, 0xae, 0xf2, 0xc5, 0x35, 0x7f,
	0xe6, 0xe5, 0xbf, 0x00, 0x00, 0x00, 0xff, 0xff, 0xe9, 0x9c, 0x13, 0x7c, 0xc9, 0x02, 0x00, 0x00,
}