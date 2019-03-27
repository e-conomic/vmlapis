// Code generated by protoc-gen-go. DO NOT EDIT.
// source: ssn/type/geometry.proto

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

// A vertex represents a 2D point in the image.
// NOTE: the vertex coordinates are in the same scale as the original image.
type Vertex struct {
	// X coordinate.
	X int32 `protobuf:"varint,1,opt,name=x,proto3" json:"x,omitempty"`
	// Y coordinate.
	Y                    int32    `protobuf:"varint,2,opt,name=y,proto3" json:"y,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Vertex) Reset()         { *m = Vertex{} }
func (m *Vertex) String() string { return proto.CompactTextString(m) }
func (*Vertex) ProtoMessage()    {}
func (*Vertex) Descriptor() ([]byte, []int) {
	return fileDescriptor_geometry_a6349cc078a74f63, []int{0}
}
func (m *Vertex) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Vertex.Unmarshal(m, b)
}
func (m *Vertex) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Vertex.Marshal(b, m, deterministic)
}
func (dst *Vertex) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Vertex.Merge(dst, src)
}
func (m *Vertex) XXX_Size() int {
	return xxx_messageInfo_Vertex.Size(m)
}
func (m *Vertex) XXX_DiscardUnknown() {
	xxx_messageInfo_Vertex.DiscardUnknown(m)
}

var xxx_messageInfo_Vertex proto.InternalMessageInfo

func (m *Vertex) GetX() int32 {
	if m != nil {
		return m.X
	}
	return 0
}

func (m *Vertex) GetY() int32 {
	if m != nil {
		return m.Y
	}
	return 0
}

// A vertex represents a 2D point in the image.
// NOTE: the normalized vertex coordinates are relative to the original image
// and range from 0 to 1.
type NormalizedVertex struct {
	// X coordinate.
	X float32 `protobuf:"fixed32,1,opt,name=x,proto3" json:"x,omitempty"`
	// Y coordinate.
	Y                    float32  `protobuf:"fixed32,2,opt,name=y,proto3" json:"y,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *NormalizedVertex) Reset()         { *m = NormalizedVertex{} }
func (m *NormalizedVertex) String() string { return proto.CompactTextString(m) }
func (*NormalizedVertex) ProtoMessage()    {}
func (*NormalizedVertex) Descriptor() ([]byte, []int) {
	return fileDescriptor_geometry_a6349cc078a74f63, []int{1}
}
func (m *NormalizedVertex) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_NormalizedVertex.Unmarshal(m, b)
}
func (m *NormalizedVertex) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_NormalizedVertex.Marshal(b, m, deterministic)
}
func (dst *NormalizedVertex) XXX_Merge(src proto.Message) {
	xxx_messageInfo_NormalizedVertex.Merge(dst, src)
}
func (m *NormalizedVertex) XXX_Size() int {
	return xxx_messageInfo_NormalizedVertex.Size(m)
}
func (m *NormalizedVertex) XXX_DiscardUnknown() {
	xxx_messageInfo_NormalizedVertex.DiscardUnknown(m)
}

var xxx_messageInfo_NormalizedVertex proto.InternalMessageInfo

func (m *NormalizedVertex) GetX() float32 {
	if m != nil {
		return m.X
	}
	return 0
}

func (m *NormalizedVertex) GetY() float32 {
	if m != nil {
		return m.Y
	}
	return 0
}

// A bounding polygon for the detected image annotation.
type BoundingPoly struct {
	// The bounding polygon vertices.
	Vertices []*Vertex `protobuf:"bytes,1,rep,name=vertices,proto3" json:"vertices,omitempty"`
	// The bounding polygon normalized vertices.
	NormalizedVertices   []*NormalizedVertex `protobuf:"bytes,2,rep,name=normalized_vertices,json=normalizedVertices,proto3" json:"normalized_vertices,omitempty"`
	XXX_NoUnkeyedLiteral struct{}            `json:"-"`
	XXX_unrecognized     []byte              `json:"-"`
	XXX_sizecache        int32               `json:"-"`
}

func (m *BoundingPoly) Reset()         { *m = BoundingPoly{} }
func (m *BoundingPoly) String() string { return proto.CompactTextString(m) }
func (*BoundingPoly) ProtoMessage()    {}
func (*BoundingPoly) Descriptor() ([]byte, []int) {
	return fileDescriptor_geometry_a6349cc078a74f63, []int{2}
}
func (m *BoundingPoly) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_BoundingPoly.Unmarshal(m, b)
}
func (m *BoundingPoly) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_BoundingPoly.Marshal(b, m, deterministic)
}
func (dst *BoundingPoly) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BoundingPoly.Merge(dst, src)
}
func (m *BoundingPoly) XXX_Size() int {
	return xxx_messageInfo_BoundingPoly.Size(m)
}
func (m *BoundingPoly) XXX_DiscardUnknown() {
	xxx_messageInfo_BoundingPoly.DiscardUnknown(m)
}

var xxx_messageInfo_BoundingPoly proto.InternalMessageInfo

func (m *BoundingPoly) GetVertices() []*Vertex {
	if m != nil {
		return m.Vertices
	}
	return nil
}

func (m *BoundingPoly) GetNormalizedVertices() []*NormalizedVertex {
	if m != nil {
		return m.NormalizedVertices
	}
	return nil
}

func init() {
	proto.RegisterType((*Vertex)(nil), "ssn.type.Vertex")
	proto.RegisterType((*NormalizedVertex)(nil), "ssn.type.NormalizedVertex")
	proto.RegisterType((*BoundingPoly)(nil), "ssn.type.BoundingPoly")
}

func init() { proto.RegisterFile("ssn/type/geometry.proto", fileDescriptor_geometry_a6349cc078a74f63) }

var fileDescriptor_geometry_a6349cc078a74f63 = []byte{
	// 192 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0x2f, 0x2e, 0xce, 0xd3,
	0x2f, 0xa9, 0x2c, 0x48, 0xd5, 0x4f, 0x4f, 0xcd, 0xcf, 0x4d, 0x2d, 0x29, 0xaa, 0xd4, 0x2b, 0x28,
	0xca, 0x2f, 0xc9, 0x17, 0xe2, 0x28, 0x2e, 0xce, 0xd3, 0x03, 0x49, 0x28, 0xa9, 0x70, 0xb1, 0x85,
	0xa5, 0x16, 0x95, 0xa4, 0x56, 0x08, 0xf1, 0x70, 0x31, 0x56, 0x48, 0x30, 0x2a, 0x30, 0x6a, 0xb0,
	0x06, 0x31, 0x82, 0x79, 0x95, 0x12, 0x4c, 0x10, 0x5e, 0xa5, 0x92, 0x1e, 0x97, 0x80, 0x5f, 0x7e,
	0x51, 0x6e, 0x62, 0x4e, 0x66, 0x55, 0x6a, 0x0a, 0xba, 0x7a, 0x26, 0x14, 0xf5, 0x4c, 0x20, 0xf5,
	0x9d, 0x8c, 0x5c, 0x3c, 0x4e, 0xf9, 0xa5, 0x79, 0x29, 0x99, 0x79, 0xe9, 0x01, 0xf9, 0x39, 0x95,
	0x42, 0x3a, 0x5c, 0x1c, 0x65, 0xa9, 0x45, 0x25, 0x99, 0xc9, 0xa9, 0xc5, 0x12, 0x8c, 0x0a, 0xcc,
	0x1a, 0xdc, 0x46, 0x02, 0x7a, 0x30, 0x37, 0xe8, 0x41, 0x0c, 0x0c, 0x82, 0xab, 0x10, 0xf2, 0xe6,
	0x12, 0xce, 0x83, 0x5b, 0x17, 0x0f, 0xd7, 0xc8, 0x04, 0xd6, 0x28, 0x85, 0xd0, 0x88, 0xee, 0xa6,
	0x20, 0xa1, 0x3c, 0x14, 0x11, 0x90, 0x2e, 0x27, 0xb6, 0x28, 0x16, 0x90, 0xe2, 0x24, 0x36, 0xb0,
	0xd7, 0x8d, 0x01, 0x01, 0x00, 0x00, 0xff, 0xff, 0x7d, 0x3e, 0x68, 0xe2, 0x15, 0x01, 0x00, 0x00,
}