// Code generated by protoc-gen-go. DO NOT EDIT.
// source: asgt/data/v1alpha1/info.proto

package data

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import _type "github.com/e-conomic/vmlapis/gen/go/asgt/type"
import _ "github.com/golang/protobuf/ptypes/timestamp"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

type GetInfoRequest struct {
	Name                 string   `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Type                 string   `protobuf:"bytes,2,opt,name=type,proto3" json:"type,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetInfoRequest) Reset()         { *m = GetInfoRequest{} }
func (m *GetInfoRequest) String() string { return proto.CompactTextString(m) }
func (*GetInfoRequest) ProtoMessage()    {}
func (*GetInfoRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_info_31e7878d960d87ee, []int{0}
}
func (m *GetInfoRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetInfoRequest.Unmarshal(m, b)
}
func (m *GetInfoRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetInfoRequest.Marshal(b, m, deterministic)
}
func (dst *GetInfoRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetInfoRequest.Merge(dst, src)
}
func (m *GetInfoRequest) XXX_Size() int {
	return xxx_messageInfo_GetInfoRequest.Size(m)
}
func (m *GetInfoRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetInfoRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetInfoRequest proto.InternalMessageInfo

func (m *GetInfoRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *GetInfoRequest) GetType() string {
	if m != nil {
		return m.Type
	}
	return ""
}

type GetInfoResponse struct {
	Dataset *_type.Dataset `protobuf:"bytes,1,opt,name=dataset,proto3" json:"dataset,omitempty"`
	// The most recently trained model; empty if no model has been trained
	Model                *_type.Model `protobuf:"bytes,2,opt,name=model,proto3" json:"model,omitempty"`
	XXX_NoUnkeyedLiteral struct{}     `json:"-"`
	XXX_unrecognized     []byte       `json:"-"`
	XXX_sizecache        int32        `json:"-"`
}

func (m *GetInfoResponse) Reset()         { *m = GetInfoResponse{} }
func (m *GetInfoResponse) String() string { return proto.CompactTextString(m) }
func (*GetInfoResponse) ProtoMessage()    {}
func (*GetInfoResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_info_31e7878d960d87ee, []int{1}
}
func (m *GetInfoResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetInfoResponse.Unmarshal(m, b)
}
func (m *GetInfoResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetInfoResponse.Marshal(b, m, deterministic)
}
func (dst *GetInfoResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetInfoResponse.Merge(dst, src)
}
func (m *GetInfoResponse) XXX_Size() int {
	return xxx_messageInfo_GetInfoResponse.Size(m)
}
func (m *GetInfoResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_GetInfoResponse.DiscardUnknown(m)
}

var xxx_messageInfo_GetInfoResponse proto.InternalMessageInfo

func (m *GetInfoResponse) GetDataset() *_type.Dataset {
	if m != nil {
		return m.Dataset
	}
	return nil
}

func (m *GetInfoResponse) GetModel() *_type.Model {
	if m != nil {
		return m.Model
	}
	return nil
}

func init() {
	proto.RegisterType((*GetInfoRequest)(nil), "asgt.dataservice.v1alpha1.GetInfoRequest")
	proto.RegisterType((*GetInfoResponse)(nil), "asgt.dataservice.v1alpha1.GetInfoResponse")
}

func init() { proto.RegisterFile("asgt/data/v1alpha1/info.proto", fileDescriptor_info_31e7878d960d87ee) }

var fileDescriptor_info_31e7878d960d87ee = []byte{
	// 244 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x4c, 0x8f, 0x41, 0x4b, 0x03, 0x31,
	0x10, 0x85, 0xa9, 0xd4, 0x8a, 0x29, 0xa8, 0x04, 0xc4, 0x5a, 0x10, 0x4b, 0x0f, 0xe2, 0x41, 0x12,
	0x5a, 0x2f, 0x9e, 0x45, 0x10, 0x0f, 0x5e, 0xf6, 0xe8, 0x45, 0xd2, 0x76, 0x76, 0x0d, 0xec, 0x66,
	0xe2, 0x66, 0x5a, 0xe8, 0xbf, 0x97, 0x99, 0x6c, 0xdd, 0xde, 0x66, 0xdf, 0xf7, 0xbd, 0xcd, 0x8c,
	0xba, 0x73, 0xa9, 0x22, 0xbb, 0x71, 0xe4, 0xec, 0x6e, 0xe1, 0xea, 0xf8, 0xe3, 0x16, 0xd6, 0x87,
	0x12, 0x4d, 0x6c, 0x91, 0x50, 0xdf, 0x32, 0x36, 0x8c, 0x13, 0xb4, 0x3b, 0xbf, 0x06, 0x73, 0xb0,
	0xa6, 0x37, 0xd2, 0xa4, 0x7d, 0x04, 0x9b, 0x39, 0xe5, 0xce, 0xf4, 0xba, 0x07, 0x0d, 0x6e, 0xa0,
	0xee, 0xe2, 0x59, 0x1f, 0xb7, 0x40, 0x10, 0xc8, 0x63, 0xf8, 0x8e, 0x58, 0xfb, 0xf5, 0xbe, 0x33,
	0xee, 0x2b, 0xc4, 0xaa, 0x06, 0x2b, 0x5f, 0xab, 0x6d, 0x69, 0xc9, 0x37, 0x90, 0xc8, 0x35, 0x31,
	0x0b, 0xf3, 0x17, 0x75, 0xf1, 0x0e, 0xf4, 0x11, 0x4a, 0x2c, 0xe0, 0x77, 0x0b, 0x89, 0xb4, 0x56,
	0xc3, 0xe0, 0x1a, 0x98, 0x0c, 0x66, 0x83, 0xc7, 0xf3, 0x42, 0x66, 0xce, 0xf8, 0x95, 0xc9, 0x49,
	0xce, 0x78, 0x9e, 0x57, 0xea, 0xf2, 0xbf, 0x99, 0x22, 0x86, 0x04, 0xfa, 0x49, 0x9d, 0x75, 0x7b,
	0x4b, 0x7b, 0xbc, 0xd4, 0x46, 0x8e, 0x65, 0xdf, 0xbc, 0x65, 0x52, 0x1c, 0x14, 0xfd, 0xa0, 0x4e,
	0xe5, 0x18, 0xf9, 0xeb, 0x78, 0x79, 0x75, 0xe4, 0x7e, 0x72, 0x5e, 0x64, 0xfc, 0x3a, 0xfa, 0x1a,
	0x72, 0x65, 0x35, 0x92, 0x8d, 0x9f, 0xff, 0x02, 0x00, 0x00, 0xff, 0xff, 0xf7, 0xa2, 0x69, 0x33,
	0x60, 0x01, 0x00, 0x00,
}
