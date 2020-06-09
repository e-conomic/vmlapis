// Code generated by protoc-gen-go. DO NOT EDIT.
// source: ssn/type/candidate.proto

package _type

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import wrappers "github.com/golang/protobuf/ptypes/wrappers"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

type Confidence_Level int32

const (
	Confidence_UNKNOWN   Confidence_Level = 0
	Confidence_VERY_LOW  Confidence_Level = 1
	Confidence_LOW       Confidence_Level = 2
	Confidence_MID       Confidence_Level = 3
	Confidence_HIGH      Confidence_Level = 4
	Confidence_VERY_HIGH Confidence_Level = 5
)

var Confidence_Level_name = map[int32]string{
	0: "UNKNOWN",
	1: "VERY_LOW",
	2: "LOW",
	3: "MID",
	4: "HIGH",
	5: "VERY_HIGH",
}
var Confidence_Level_value = map[string]int32{
	"UNKNOWN":   0,
	"VERY_LOW":  1,
	"LOW":       2,
	"MID":       3,
	"HIGH":      4,
	"VERY_HIGH": 5,
}

func (x Confidence_Level) String() string {
	return proto.EnumName(Confidence_Level_name, int32(x))
}
func (Confidence_Level) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_candidate_7d7f7733c95f5bdf, []int{0, 0}
}

type Candidate_Type int32

const (
	Candidate_UNKNOWN  Candidate_Type = 0
	Candidate_FIELD    Candidate_Type = 1
	Candidate_DOCUMENT Candidate_Type = 2
)

var Candidate_Type_name = map[int32]string{
	0: "UNKNOWN",
	1: "FIELD",
	2: "DOCUMENT",
}
var Candidate_Type_value = map[string]int32{
	"UNKNOWN":  0,
	"FIELD":    1,
	"DOCUMENT": 2,
}

func (x Candidate_Type) String() string {
	return proto.EnumName(Candidate_Type_name, int32(x))
}
func (Candidate_Type) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_candidate_7d7f7733c95f5bdf, []int{1, 0}
}

type Confidence struct {
	// A bucketized representation of confidence, which is intended to give clients
	// highly stable results across model upgrades.
	Level Confidence_Level `protobuf:"varint,1,opt,name=level,proto3,enum=ssn.type.Confidence_Level" json:"level,omitempty"`
	// The confidence value
	Value                *wrappers.FloatValue `protobuf:"bytes,2,opt,name=value,proto3" json:"value,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *Confidence) Reset()         { *m = Confidence{} }
func (m *Confidence) String() string { return proto.CompactTextString(m) }
func (*Confidence) ProtoMessage()    {}
func (*Confidence) Descriptor() ([]byte, []int) {
	return fileDescriptor_candidate_7d7f7733c95f5bdf, []int{0}
}
func (m *Confidence) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Confidence.Unmarshal(m, b)
}
func (m *Confidence) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Confidence.Marshal(b, m, deterministic)
}
func (dst *Confidence) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Confidence.Merge(dst, src)
}
func (m *Confidence) XXX_Size() int {
	return xxx_messageInfo_Confidence.Size(m)
}
func (m *Confidence) XXX_DiscardUnknown() {
	xxx_messageInfo_Confidence.DiscardUnknown(m)
}

var xxx_messageInfo_Confidence proto.InternalMessageInfo

func (m *Confidence) GetLevel() Confidence_Level {
	if m != nil {
		return m.Level
	}
	return Confidence_UNKNOWN
}

func (m *Confidence) GetValue() *wrappers.FloatValue {
	if m != nil {
		return m.Value
	}
	return nil
}

type Candidate struct {
	// Normalized value 01-01-2019
	Value string `protobuf:"bytes,1,opt,name=value,proto3" json:"value,omitempty"`
	// The text as found on the document "1. Jan"
	// useful for overlays
	Text string `protobuf:"bytes,2,opt,name=text,proto3" json:"text,omitempty"`
	// Confidence
	Confidence *Confidence `protobuf:"bytes,3,opt,name=confidence,proto3" json:"confidence,omitempty"`
	// The bounding box for the block.
	// The vertices are in the order of top-left, top-right, bottom-right,
	// bottom-left. When a rotation of the bounding box is detected the rotation
	// is represented as around the top-left corner as defined when the text is
	// read in the 'natural' orientation.
	// For example:
	//
	// * when the text is horizontal it might look like:
	//
	//         0----1
	//         |    |
	//         3----2
	//
	// * when it's rotated 180 degrees around the top-left corner it becomes:
	//
	//         2----3
	//         |    |
	//         1----0
	//
	//   and the vertex order will still be (0, 1, 2, 3).
	BoundingBox *BoundingPoly `protobuf:"bytes,4,opt,name=bounding_box,json=boundingBox,proto3" json:"bounding_box,omitempty"`
	// Indicate the type of the candidate
	Type Candidate_Type `protobuf:"varint,5,opt,name=type,proto3,enum=ssn.type.Candidate_Type" json:"type,omitempty"`
	// A reference to the page where the candidate was found.
	// page_ref start from 1.
	PageRef uint32 `protobuf:"varint,6,opt,name=page_ref,json=pageRef,proto3" json:"page_ref,omitempty"`
	// The name of the TensorFlow Serving model that predicted this candidate
	ModelName string `protobuf:"bytes,7,opt,name=model_name,json=modelName,proto3" json:"model_name,omitempty"`
	// The version number of the TensorFlow Serving model that predicted
	// this candidate
	ModelVer             *wrappers.Int64Value `protobuf:"bytes,8,opt,name=model_ver,json=modelVer,proto3" json:"model_ver,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *Candidate) Reset()         { *m = Candidate{} }
func (m *Candidate) String() string { return proto.CompactTextString(m) }
func (*Candidate) ProtoMessage()    {}
func (*Candidate) Descriptor() ([]byte, []int) {
	return fileDescriptor_candidate_7d7f7733c95f5bdf, []int{1}
}
func (m *Candidate) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Candidate.Unmarshal(m, b)
}
func (m *Candidate) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Candidate.Marshal(b, m, deterministic)
}
func (dst *Candidate) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Candidate.Merge(dst, src)
}
func (m *Candidate) XXX_Size() int {
	return xxx_messageInfo_Candidate.Size(m)
}
func (m *Candidate) XXX_DiscardUnknown() {
	xxx_messageInfo_Candidate.DiscardUnknown(m)
}

var xxx_messageInfo_Candidate proto.InternalMessageInfo

func (m *Candidate) GetValue() string {
	if m != nil {
		return m.Value
	}
	return ""
}

func (m *Candidate) GetText() string {
	if m != nil {
		return m.Text
	}
	return ""
}

func (m *Candidate) GetConfidence() *Confidence {
	if m != nil {
		return m.Confidence
	}
	return nil
}

func (m *Candidate) GetBoundingBox() *BoundingPoly {
	if m != nil {
		return m.BoundingBox
	}
	return nil
}

func (m *Candidate) GetType() Candidate_Type {
	if m != nil {
		return m.Type
	}
	return Candidate_UNKNOWN
}

func (m *Candidate) GetPageRef() uint32 {
	if m != nil {
		return m.PageRef
	}
	return 0
}

func (m *Candidate) GetModelName() string {
	if m != nil {
		return m.ModelName
	}
	return ""
}

func (m *Candidate) GetModelVer() *wrappers.Int64Value {
	if m != nil {
		return m.ModelVer
	}
	return nil
}

type LineCandidate struct {
	// Text of the line without the amount
	// Example: "3 Dark and Stormy"
	Text string `protobuf:"bytes,1,opt,name=text,proto3" json:"text,omitempty"`
	// Normalized amount (price) of the line
	// Example: 300.0
	Amount float64 `protobuf:"fixed64,2,opt,name=amount,proto3" json:"amount,omitempty"`
	// A reference to the page where the line was found.
	// page_ref start from 1.
	PageRef              uint32   `protobuf:"varint,6,opt,name=page_ref,json=pageRef,proto3" json:"page_ref,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *LineCandidate) Reset()         { *m = LineCandidate{} }
func (m *LineCandidate) String() string { return proto.CompactTextString(m) }
func (*LineCandidate) ProtoMessage()    {}
func (*LineCandidate) Descriptor() ([]byte, []int) {
	return fileDescriptor_candidate_7d7f7733c95f5bdf, []int{2}
}
func (m *LineCandidate) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_LineCandidate.Unmarshal(m, b)
}
func (m *LineCandidate) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_LineCandidate.Marshal(b, m, deterministic)
}
func (dst *LineCandidate) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LineCandidate.Merge(dst, src)
}
func (m *LineCandidate) XXX_Size() int {
	return xxx_messageInfo_LineCandidate.Size(m)
}
func (m *LineCandidate) XXX_DiscardUnknown() {
	xxx_messageInfo_LineCandidate.DiscardUnknown(m)
}

var xxx_messageInfo_LineCandidate proto.InternalMessageInfo

func (m *LineCandidate) GetText() string {
	if m != nil {
		return m.Text
	}
	return ""
}

func (m *LineCandidate) GetAmount() float64 {
	if m != nil {
		return m.Amount
	}
	return 0
}

func (m *LineCandidate) GetPageRef() uint32 {
	if m != nil {
		return m.PageRef
	}
	return 0
}

func init() {
	proto.RegisterType((*Confidence)(nil), "ssn.type.Confidence")
	proto.RegisterType((*Candidate)(nil), "ssn.type.Candidate")
	proto.RegisterType((*LineCandidate)(nil), "ssn.type.LineCandidate")
	proto.RegisterEnum("ssn.type.Confidence_Level", Confidence_Level_name, Confidence_Level_value)
	proto.RegisterEnum("ssn.type.Candidate_Type", Candidate_Type_name, Candidate_Type_value)
}

func init() { proto.RegisterFile("ssn/type/candidate.proto", fileDescriptor_candidate_7d7f7733c95f5bdf) }

var fileDescriptor_candidate_7d7f7733c95f5bdf = []byte{
	// 467 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x7c, 0x91, 0x5f, 0x8f, 0xd2, 0x40,
	0x14, 0xc5, 0x2d, 0xb4, 0xd0, 0x5e, 0x16, 0xd3, 0x4c, 0x36, 0xeb, 0x88, 0xd1, 0x10, 0x9e, 0x78,
	0xd8, 0x14, 0x5d, 0x37, 0x46, 0x5f, 0xf9, 0xb3, 0x2e, 0x11, 0x8a, 0x99, 0xec, 0xb2, 0xd1, 0x97,
	0xa6, 0xd0, 0x4b, 0x43, 0xd2, 0xce, 0x34, 0x6d, 0x41, 0xf8, 0x76, 0x7e, 0x2a, 0x9f, 0xcd, 0x4c,
	0x29, 0x60, 0xa2, 0xbe, 0xcd, 0x9d, 0xfb, 0x9b, 0xb9, 0xe7, 0x9e, 0x03, 0x34, 0xcb, 0x78, 0x2f,
	0xdf, 0x27, 0xd8, 0x5b, 0xfa, 0x3c, 0x58, 0x07, 0x7e, 0x8e, 0x4e, 0x92, 0x8a, 0x5c, 0x10, 0x33,
	0xcb, 0xb8, 0x23, 0x3b, 0xad, 0x37, 0xa1, 0x10, 0x61, 0x84, 0x3d, 0x75, 0xbf, 0xd8, 0xac, 0x7a,
	0x3f, 0x52, 0x3f, 0x49, 0x30, 0xcd, 0x0a, 0xb2, 0xf5, 0xe2, 0xf8, 0x47, 0x88, 0x22, 0xc6, 0x3c,
	0xdd, 0x17, 0x8d, 0xce, 0x4f, 0x0d, 0x60, 0x20, 0xf8, 0x6a, 0x1d, 0x20, 0x5f, 0x22, 0x79, 0x0b,
	0x46, 0x84, 0x5b, 0x8c, 0xa8, 0xd6, 0xd6, 0xba, 0xcf, 0x6f, 0x5a, 0x4e, 0x39, 0xc1, 0x39, 0x41,
	0xce, 0x44, 0x12, 0xac, 0x00, 0xc9, 0x3b, 0x30, 0xb6, 0x7e, 0xb4, 0x41, 0x5a, 0x69, 0x6b, 0xdd,
	0xc6, 0xcd, 0x2b, 0xa7, 0x50, 0xe2, 0x94, 0x4a, 0x9c, 0xbb, 0x48, 0xf8, 0xf9, 0x5c, 0x22, 0xac,
	0x20, 0x3b, 0x53, 0x30, 0xd4, 0x17, 0xa4, 0x01, 0xf5, 0x47, 0xf7, 0x8b, 0x3b, 0x7b, 0x72, 0xed,
	0x67, 0xe4, 0x02, 0xcc, 0xf9, 0x88, 0x7d, 0xf3, 0x26, 0xb3, 0x27, 0x5b, 0x23, 0x75, 0xa8, 0xca,
	0x43, 0x45, 0x1e, 0xa6, 0xe3, 0xa1, 0x5d, 0x25, 0x26, 0xe8, 0xf7, 0xe3, 0xcf, 0xf7, 0xb6, 0x4e,
	0x9a, 0x60, 0x29, 0x52, 0x95, 0x46, 0xe7, 0x57, 0x05, 0xac, 0x41, 0xe9, 0x0c, 0xb9, 0x2c, 0xf5,
	0xc8, 0x0d, 0xac, 0xc3, 0x48, 0x42, 0x40, 0xcf, 0x71, 0x97, 0x2b, 0x91, 0x16, 0x53, 0x67, 0x72,
	0x0b, 0xb0, 0x3c, 0x2e, 0x45, 0xab, 0x4a, 0xfe, 0xe5, 0xdf, 0x16, 0x66, 0x67, 0x1c, 0xf9, 0x04,
	0x17, 0x0b, 0xb1, 0xe1, 0xc1, 0x9a, 0x87, 0xde, 0x42, 0xec, 0xa8, 0xae, 0xde, 0x5d, 0x9d, 0xde,
	0xf5, 0x0f, 0xdd, 0xaf, 0x22, 0xda, 0xb3, 0x46, 0xc9, 0xf6, 0xc5, 0x8e, 0x5c, 0x83, 0x2e, 0x09,
	0x6a, 0x28, 0x6f, 0xe9, 0xd9, 0xa8, 0x63, 0xae, 0x0f, 0xfb, 0x04, 0x99, 0xa2, 0xc8, 0x4b, 0x30,
	0x13, 0x3f, 0x44, 0x2f, 0xc5, 0x15, 0xad, 0xb5, 0xb5, 0x6e, 0x93, 0xd5, 0x65, 0xcd, 0x70, 0x45,
	0x5e, 0x03, 0xc4, 0x22, 0xc0, 0xc8, 0xe3, 0x7e, 0x8c, 0xb4, 0xae, 0x76, 0xb2, 0xd4, 0x8d, 0xeb,
	0xc7, 0x48, 0x3e, 0x42, 0x51, 0x78, 0x5b, 0x4c, 0xa9, 0xf9, 0x8f, 0x58, 0xc6, 0x3c, 0xff, 0x70,
	0x5b, 0xc4, 0x62, 0x2a, 0x7a, 0x8e, 0x69, 0xe7, 0x1a, 0x74, 0xa9, 0xe0, 0xcf, 0x60, 0x2c, 0x30,
	0xee, 0xc6, 0xa3, 0xc9, 0xd0, 0xd6, 0x64, 0x46, 0xc3, 0xd9, 0xe0, 0x71, 0x3a, 0x72, 0x1f, 0xec,
	0x4a, 0x67, 0x0e, 0xcd, 0xc9, 0x9a, 0xe3, 0xc9, 0xfb, 0xd2, 0x65, 0xed, 0xcc, 0xe5, 0x2b, 0xa8,
	0xf9, 0xb1, 0xd8, 0xf0, 0xc2, 0x7b, 0x8d, 0x1d, 0xaa, 0xff, 0xac, 0xd7, 0xaf, 0x7d, 0x57, 0x0e,
	0x2c, 0x6a, 0x4a, 0xec, 0xfb, 0xdf, 0x01, 0x00, 0x00, 0xff, 0xff, 0xbe, 0x81, 0x9f, 0xc1, 0x01,
	0x03, 0x00, 0x00,
}
