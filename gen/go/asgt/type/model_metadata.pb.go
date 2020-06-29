// Code generated by protoc-gen-go. DO NOT EDIT.
// source: asgt/type/model_metadata.proto

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

type TargetMetrics struct {
	Target               string                  `protobuf:"bytes,1,opt,name=target,proto3" json:"target,omitempty"`
	Metrics              []*TargetMetrics_Metric `protobuf:"bytes,2,rep,name=metrics,proto3" json:"metrics,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                `json:"-"`
	XXX_unrecognized     []byte                  `json:"-"`
	XXX_sizecache        int32                   `json:"-"`
}

func (m *TargetMetrics) Reset()         { *m = TargetMetrics{} }
func (m *TargetMetrics) String() string { return proto.CompactTextString(m) }
func (*TargetMetrics) ProtoMessage()    {}
func (*TargetMetrics) Descriptor() ([]byte, []int) {
	return fileDescriptor_model_metadata_d8337f104dec03b6, []int{0}
}
func (m *TargetMetrics) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TargetMetrics.Unmarshal(m, b)
}
func (m *TargetMetrics) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TargetMetrics.Marshal(b, m, deterministic)
}
func (dst *TargetMetrics) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TargetMetrics.Merge(dst, src)
}
func (m *TargetMetrics) XXX_Size() int {
	return xxx_messageInfo_TargetMetrics.Size(m)
}
func (m *TargetMetrics) XXX_DiscardUnknown() {
	xxx_messageInfo_TargetMetrics.DiscardUnknown(m)
}

var xxx_messageInfo_TargetMetrics proto.InternalMessageInfo

func (m *TargetMetrics) GetTarget() string {
	if m != nil {
		return m.Target
	}
	return ""
}

func (m *TargetMetrics) GetMetrics() []*TargetMetrics_Metric {
	if m != nil {
		return m.Metrics
	}
	return nil
}

type TargetMetrics_Metric struct {
	Precision            float32  `protobuf:"fixed32,1,opt,name=precision,proto3" json:"precision,omitempty"`
	Confidence           float32  `protobuf:"fixed32,2,opt,name=confidence,proto3" json:"confidence,omitempty"`
	AnswerRate           float32  `protobuf:"fixed32,3,opt,name=answer_rate,json=answerRate,proto3" json:"answer_rate,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *TargetMetrics_Metric) Reset()         { *m = TargetMetrics_Metric{} }
func (m *TargetMetrics_Metric) String() string { return proto.CompactTextString(m) }
func (*TargetMetrics_Metric) ProtoMessage()    {}
func (*TargetMetrics_Metric) Descriptor() ([]byte, []int) {
	return fileDescriptor_model_metadata_d8337f104dec03b6, []int{0, 0}
}
func (m *TargetMetrics_Metric) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TargetMetrics_Metric.Unmarshal(m, b)
}
func (m *TargetMetrics_Metric) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TargetMetrics_Metric.Marshal(b, m, deterministic)
}
func (dst *TargetMetrics_Metric) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TargetMetrics_Metric.Merge(dst, src)
}
func (m *TargetMetrics_Metric) XXX_Size() int {
	return xxx_messageInfo_TargetMetrics_Metric.Size(m)
}
func (m *TargetMetrics_Metric) XXX_DiscardUnknown() {
	xxx_messageInfo_TargetMetrics_Metric.DiscardUnknown(m)
}

var xxx_messageInfo_TargetMetrics_Metric proto.InternalMessageInfo

func (m *TargetMetrics_Metric) GetPrecision() float32 {
	if m != nil {
		return m.Precision
	}
	return 0
}

func (m *TargetMetrics_Metric) GetConfidence() float32 {
	if m != nil {
		return m.Confidence
	}
	return 0
}

func (m *TargetMetrics_Metric) GetAnswerRate() float32 {
	if m != nil {
		return m.AnswerRate
	}
	return 0
}

func init() {
	proto.RegisterType((*TargetMetrics)(nil), "asgt.type.TargetMetrics")
	proto.RegisterType((*TargetMetrics_Metric)(nil), "asgt.type.TargetMetrics.Metric")
}

func init() {
	proto.RegisterFile("asgt/type/model_metadata.proto", fileDescriptor_model_metadata_d8337f104dec03b6)
}

var fileDescriptor_model_metadata_d8337f104dec03b6 = []byte{
	// 203 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x54, 0x8f, 0x3f, 0x4b, 0xc6, 0x30,
	0x10, 0xc6, 0x69, 0x5f, 0x89, 0xf4, 0x5e, 0x5c, 0x32, 0x48, 0x10, 0x69, 0x8b, 0x53, 0xa7, 0x14,
	0x74, 0x72, 0x75, 0x77, 0x09, 0x4e, 0x2e, 0xe5, 0x4c, 0xcf, 0x12, 0xb0, 0x49, 0x49, 0x0e, 0xc4,
	0xcf, 0xe8, 0x97, 0x92, 0x26, 0xfe, 0x7b, 0xa7, 0xe3, 0x7e, 0xcf, 0xc3, 0x8f, 0x3b, 0x68, 0x31,
	0x2d, 0x3c, 0xf2, 0xc7, 0x46, 0xe3, 0x1a, 0x66, 0x7a, 0x9b, 0x56, 0x62, 0x9c, 0x91, 0x51, 0x6f,
	0x31, 0x70, 0x90, 0xcd, 0x9e, 0xeb, 0x3d, 0xbf, 0xf9, 0xac, 0xe0, 0xe2, 0x09, 0xe3, 0x42, 0xfc,
	0x48, 0x1c, 0x9d, 0x4d, 0xf2, 0x12, 0x04, 0x67, 0xa0, 0xaa, 0xbe, 0x1a, 0x1a, 0xf3, 0xbd, 0xc9,
	0x7b, 0x38, 0x5f, 0x4b, 0x45, 0xd5, 0xfd, 0x61, 0x38, 0xde, 0x76, 0xfa, 0x57, 0xa3, 0x4f, 0x14,
	0xba, 0x4c, 0xf3, 0xd3, 0xbf, 0x5a, 0x40, 0x14, 0x24, 0xaf, 0xa1, 0xd9, 0x22, 0x59, 0x97, 0x5c,
	0xf0, 0xd9, 0x5f, 0x9b, 0x3f, 0x20, 0x5b, 0x00, 0x1b, 0xfc, 0xab, 0x9b, 0xc9, 0x5b, 0x52, 0x75,
	0x8e, 0xff, 0x11, 0xd9, 0xc1, 0x11, 0x7d, 0x7a, 0xa7, 0x38, 0x45, 0x64, 0x52, 0x87, 0x52, 0x28,
	0xc8, 0x20, 0xd3, 0x83, 0x78, 0x3e, 0xdb, 0xcf, 0x79, 0x11, 0xf9, 0xcf, 0xbb, 0xaf, 0x00, 0x00,
	0x00, 0xff, 0xff, 0x07, 0x73, 0xe9, 0xe1, 0x09, 0x01, 0x00, 0x00,
}