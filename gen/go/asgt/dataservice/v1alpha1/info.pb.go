// Code generated by protoc-gen-go. DO NOT EDIT.
// source: asgt/dataservice/v1alpha1/info.proto

package dataservice

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
	DatasetName          string   `protobuf:"bytes,1,opt,name=dataset_name,json=datasetName,proto3" json:"dataset_name,omitempty"`
	DatasetType          string   `protobuf:"bytes,2,opt,name=dataset_type,json=datasetType,proto3" json:"dataset_type,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetInfoRequest) Reset()         { *m = GetInfoRequest{} }
func (m *GetInfoRequest) String() string { return proto.CompactTextString(m) }
func (*GetInfoRequest) ProtoMessage()    {}
func (*GetInfoRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_info_cdcdb75a08af7014, []int{0}
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

func (m *GetInfoRequest) GetDatasetName() string {
	if m != nil {
		return m.DatasetName
	}
	return ""
}

func (m *GetInfoRequest) GetDatasetType() string {
	if m != nil {
		return m.DatasetType
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
	return fileDescriptor_info_cdcdb75a08af7014, []int{1}
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

func init() {
	proto.RegisterFile("asgt/dataservice/v1alpha1/info.proto", fileDescriptor_info_cdcdb75a08af7014)
}

var fileDescriptor_info_cdcdb75a08af7014 = []byte{
	// 255 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x54, 0x90, 0x4d, 0x4b, 0x03, 0x31,
	0x10, 0x86, 0xa9, 0xa0, 0x62, 0xd6, 0x2f, 0x02, 0x62, 0xed, 0xc5, 0x5a, 0x44, 0x3c, 0x48, 0x42,
	0xeb, 0x3f, 0x10, 0x41, 0x3c, 0xe8, 0x61, 0x11, 0x0f, 0x5e, 0xca, 0xb4, 0x9d, 0x5d, 0x03, 0x9b,
	0x4c, 0xdc, 0x4c, 0x0b, 0xfb, 0xef, 0x65, 0xb3, 0xa9, 0x5d, 0x8f, 0x79, 0xdf, 0x27, 0xcf, 0x30,
	0x23, 0x6e, 0x21, 0x94, 0xac, 0x57, 0xc0, 0x10, 0xb0, 0xde, 0x98, 0x25, 0xea, 0xcd, 0x14, 0x2a,
	0xff, 0x0d, 0x53, 0x6d, 0x5c, 0x41, 0xca, 0xd7, 0xc4, 0x24, 0xaf, 0x5a, 0x4a, 0xf5, 0x28, 0xb5,
	0xa5, 0x46, 0x97, 0x51, 0xc0, 0x8d, 0xc7, 0x64, 0xe1, 0xee, 0xcf, 0xe8, 0x62, 0x57, 0x58, 0x5a,
	0x61, 0x95, 0xe2, 0xf1, 0x2e, 0xae, 0x91, 0xd1, 0xb1, 0x21, 0x37, 0xf7, 0x54, 0x99, 0x65, 0x93,
	0x88, 0xeb, 0x92, 0xa8, 0xac, 0x50, 0xc7, 0xd7, 0x62, 0x5d, 0x68, 0x36, 0x16, 0x03, 0x83, 0xf5,
	0x1d, 0x30, 0xf9, 0x14, 0xa7, 0x2f, 0xc8, 0xaf, 0xae, 0xa0, 0x1c, 0x7f, 0xd6, 0x18, 0x58, 0xde,
	0x88, 0xe3, 0x34, 0x7c, 0xee, 0xc0, 0xe2, 0x70, 0x30, 0x1e, 0xdc, 0x1f, 0xe5, 0x59, 0xca, 0xde,
	0xc1, 0x62, 0x1f, 0x69, 0x87, 0x0f, 0xf7, 0xfe, 0x21, 0x1f, 0x8d, 0xc7, 0x49, 0x29, 0xce, 0xfe,
	0xbc, 0xc1, 0x93, 0x0b, 0x28, 0x1f, 0xc4, 0x61, 0x22, 0xa2, 0x33, 0x9b, 0x49, 0x15, 0x4f, 0xd1,
	0x2a, 0xd4, 0x73, 0xd7, 0xe4, 0x5b, 0x44, 0xde, 0x89, 0xfd, 0xb8, 0x6a, 0x94, 0x67, 0xb3, 0xf3,
	0x1e, 0xfb, 0xd6, 0xe6, 0x79, 0x57, 0x3f, 0x9d, 0x7c, 0x65, 0xbd, 0x5b, 0x2e, 0x0e, 0xe2, 0x5a,
	0x8f, 0xbf, 0x01, 0x00, 0x00, 0xff, 0xff, 0x4b, 0x95, 0x01, 0xf0, 0x8c, 0x01, 0x00, 0x00,
}