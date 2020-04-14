// Code generated by protoc-gen-go. DO NOT EDIT.
// source: asgt/type/model_info.proto

package _type

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

type ModelInfo struct {
	Version              int64    `protobuf:"varint,3,opt,name=version,proto3" json:"version,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ModelInfo) Reset()         { *m = ModelInfo{} }
func (m *ModelInfo) String() string { return proto.CompactTextString(m) }
func (*ModelInfo) ProtoMessage()    {}
func (*ModelInfo) Descriptor() ([]byte, []int) {
	return fileDescriptor_model_info_2564ef0667aeeab6, []int{0}
}
func (m *ModelInfo) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ModelInfo.Unmarshal(m, b)
}
func (m *ModelInfo) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ModelInfo.Marshal(b, m, deterministic)
}
func (dst *ModelInfo) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ModelInfo.Merge(dst, src)
}
func (m *ModelInfo) XXX_Size() int {
	return xxx_messageInfo_ModelInfo.Size(m)
}
func (m *ModelInfo) XXX_DiscardUnknown() {
	xxx_messageInfo_ModelInfo.DiscardUnknown(m)
}

var xxx_messageInfo_ModelInfo proto.InternalMessageInfo

func (m *ModelInfo) GetVersion() int64 {
	if m != nil {
		return m.Version
	}
	return 0
}

func init() {
	proto.RegisterType((*ModelInfo)(nil), "asgt.type.ModelInfo")
}

func init() {
	proto.RegisterFile("asgt/type/model_info.proto", fileDescriptor_model_info_2564ef0667aeeab6)
}

var fileDescriptor_model_info_2564ef0667aeeab6 = []byte{
	// 107 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x4a, 0x2c, 0x4e, 0x2f,
	0xd1, 0x2f, 0xa9, 0x2c, 0x48, 0xd5, 0xcf, 0xcd, 0x4f, 0x49, 0xcd, 0x89, 0xcf, 0xcc, 0x4b, 0xcb,
	0xd7, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0xe2, 0x04, 0xc9, 0xe9, 0x81, 0xe4, 0x94, 0xb4, 0xb9,
	0x38, 0x7d, 0x41, 0xd2, 0x9e, 0x79, 0x69, 0xf9, 0x42, 0x12, 0x5c, 0xec, 0x65, 0xa9, 0x45, 0xc5,
	0x99, 0xf9, 0x79, 0x12, 0xcc, 0x0a, 0x8c, 0x1a, 0xcc, 0x41, 0x30, 0xae, 0x17, 0x0b, 0x07, 0xa3,
	0x00, 0xb3, 0x13, 0x5b, 0x14, 0x0b, 0x48, 0x53, 0x12, 0x1b, 0xd8, 0x18, 0x63, 0x40, 0x00, 0x00,
	0x00, 0xff, 0xff, 0xec, 0x4e, 0x35, 0x5b, 0x64, 0x00, 0x00, 0x00,
}