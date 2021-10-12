// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v3.12.3
// source: asgt/v2alpha/dataset_service.proto

package v2alpha

import (
	_type1 "github.com/e-conomic/vmlapis/gen/go/asgt/type"
	_type "github.com/e-conomic/vmlapis/gen/go/asgt/v2alpha/type"
	_ "github.com/envoyproxy/protoc-gen-validate/validate"
	empty "github.com/golang/protobuf/ptypes/empty"
	_ "github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2/options"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type GetDatasetRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"` // text-no-spaces
}

func (x *GetDatasetRequest) Reset() {
	*x = GetDatasetRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_asgt_v2alpha_dataset_service_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetDatasetRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetDatasetRequest) ProtoMessage() {}

func (x *GetDatasetRequest) ProtoReflect() protoreflect.Message {
	mi := &file_asgt_v2alpha_dataset_service_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetDatasetRequest.ProtoReflect.Descriptor instead.
func (*GetDatasetRequest) Descriptor() ([]byte, []int) {
	return file_asgt_v2alpha_dataset_service_proto_rawDescGZIP(), []int{0}
}

func (x *GetDatasetRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type CreateDatasetRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string   `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"` // text-no-spaces
	Tags []string `protobuf:"bytes,2,rep,name=tags,proto3" json:"tags,omitempty"` // text-no-spaces
}

func (x *CreateDatasetRequest) Reset() {
	*x = CreateDatasetRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_asgt_v2alpha_dataset_service_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateDatasetRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateDatasetRequest) ProtoMessage() {}

func (x *CreateDatasetRequest) ProtoReflect() protoreflect.Message {
	mi := &file_asgt_v2alpha_dataset_service_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateDatasetRequest.ProtoReflect.Descriptor instead.
func (*CreateDatasetRequest) Descriptor() ([]byte, []int) {
	return file_asgt_v2alpha_dataset_service_proto_rawDescGZIP(), []int{1}
}

func (x *CreateDatasetRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *CreateDatasetRequest) GetTags() []string {
	if x != nil {
		return x.Tags
	}
	return nil
}

type DeleteDatasetRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"` // text-no-spaces
}

func (x *DeleteDatasetRequest) Reset() {
	*x = DeleteDatasetRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_asgt_v2alpha_dataset_service_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteDatasetRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteDatasetRequest) ProtoMessage() {}

func (x *DeleteDatasetRequest) ProtoReflect() protoreflect.Message {
	mi := &file_asgt_v2alpha_dataset_service_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteDatasetRequest.ProtoReflect.Descriptor instead.
func (*DeleteDatasetRequest) Descriptor() ([]byte, []int) {
	return file_asgt_v2alpha_dataset_service_proto_rawDescGZIP(), []int{2}
}

func (x *DeleteDatasetRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type DeleteTagRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"` // text-no-spaces
}

func (x *DeleteTagRequest) Reset() {
	*x = DeleteTagRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_asgt_v2alpha_dataset_service_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteTagRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteTagRequest) ProtoMessage() {}

func (x *DeleteTagRequest) ProtoReflect() protoreflect.Message {
	mi := &file_asgt_v2alpha_dataset_service_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteTagRequest.ProtoReflect.Descriptor instead.
func (*DeleteTagRequest) Descriptor() ([]byte, []int) {
	return file_asgt_v2alpha_dataset_service_proto_rawDescGZIP(), []int{3}
}

func (x *DeleteTagRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type CreateExampleRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name    string         `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"` // text-no-spaces
	Example *_type.Example `protobuf:"bytes,2,opt,name=example,proto3" json:"example,omitempty"`
}

func (x *CreateExampleRequest) Reset() {
	*x = CreateExampleRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_asgt_v2alpha_dataset_service_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateExampleRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateExampleRequest) ProtoMessage() {}

func (x *CreateExampleRequest) ProtoReflect() protoreflect.Message {
	mi := &file_asgt_v2alpha_dataset_service_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateExampleRequest.ProtoReflect.Descriptor instead.
func (*CreateExampleRequest) Descriptor() ([]byte, []int) {
	return file_asgt_v2alpha_dataset_service_proto_rawDescGZIP(), []int{4}
}

func (x *CreateExampleRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *CreateExampleRequest) GetExample() *_type.Example {
	if x != nil {
		return x.Example
	}
	return nil
}

type CreateOrUpdateExampleRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name    string         `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"` // text-no-spaces
	Example *_type.Example `protobuf:"bytes,2,opt,name=example,proto3" json:"example,omitempty"`
}

func (x *CreateOrUpdateExampleRequest) Reset() {
	*x = CreateOrUpdateExampleRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_asgt_v2alpha_dataset_service_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateOrUpdateExampleRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateOrUpdateExampleRequest) ProtoMessage() {}

func (x *CreateOrUpdateExampleRequest) ProtoReflect() protoreflect.Message {
	mi := &file_asgt_v2alpha_dataset_service_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateOrUpdateExampleRequest.ProtoReflect.Descriptor instead.
func (*CreateOrUpdateExampleRequest) Descriptor() ([]byte, []int) {
	return file_asgt_v2alpha_dataset_service_proto_rawDescGZIP(), []int{5}
}

func (x *CreateOrUpdateExampleRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *CreateOrUpdateExampleRequest) GetExample() *_type.Example {
	if x != nil {
		return x.Example
	}
	return nil
}

type BatchCreateExampleRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name     string           `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"` // text-no-spaces
	Examples []*_type.Example `protobuf:"bytes,2,rep,name=examples,proto3" json:"examples,omitempty"`
}

func (x *BatchCreateExampleRequest) Reset() {
	*x = BatchCreateExampleRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_asgt_v2alpha_dataset_service_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *BatchCreateExampleRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*BatchCreateExampleRequest) ProtoMessage() {}

func (x *BatchCreateExampleRequest) ProtoReflect() protoreflect.Message {
	mi := &file_asgt_v2alpha_dataset_service_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use BatchCreateExampleRequest.ProtoReflect.Descriptor instead.
func (*BatchCreateExampleRequest) Descriptor() ([]byte, []int) {
	return file_asgt_v2alpha_dataset_service_proto_rawDescGZIP(), []int{6}
}

func (x *BatchCreateExampleRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *BatchCreateExampleRequest) GetExamples() []*_type.Example {
	if x != nil {
		return x.Examples
	}
	return nil
}

type TruncateDatasetRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"` // text-no-spaces
}

func (x *TruncateDatasetRequest) Reset() {
	*x = TruncateDatasetRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_asgt_v2alpha_dataset_service_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TruncateDatasetRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TruncateDatasetRequest) ProtoMessage() {}

func (x *TruncateDatasetRequest) ProtoReflect() protoreflect.Message {
	mi := &file_asgt_v2alpha_dataset_service_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TruncateDatasetRequest.ProtoReflect.Descriptor instead.
func (*TruncateDatasetRequest) Descriptor() ([]byte, []int) {
	return file_asgt_v2alpha_dataset_service_proto_rawDescGZIP(), []int{7}
}

func (x *TruncateDatasetRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type TrainingInfoRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"` // text-no-spaces
}

func (x *TrainingInfoRequest) Reset() {
	*x = TrainingInfoRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_asgt_v2alpha_dataset_service_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TrainingInfoRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TrainingInfoRequest) ProtoMessage() {}

func (x *TrainingInfoRequest) ProtoReflect() protoreflect.Message {
	mi := &file_asgt_v2alpha_dataset_service_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TrainingInfoRequest.ProtoReflect.Descriptor instead.
func (*TrainingInfoRequest) Descriptor() ([]byte, []int) {
	return file_asgt_v2alpha_dataset_service_proto_rawDescGZIP(), []int{8}
}

func (x *TrainingInfoRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

var File_asgt_v2alpha_dataset_service_proto protoreflect.FileDescriptor

var file_asgt_v2alpha_dataset_service_proto_rawDesc = []byte{
	0x0a, 0x22, 0x61, 0x73, 0x67, 0x74, 0x2f, 0x76, 0x32, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x2f, 0x64,
	0x61, 0x74, 0x61, 0x73, 0x65, 0x74, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0c, 0x61, 0x73, 0x67, 0x74, 0x2e, 0x76, 0x32, 0x61, 0x6c, 0x70,
	0x68, 0x61, 0x1a, 0x17, 0x61, 0x73, 0x67, 0x74, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x2f, 0x64, 0x61,
	0x74, 0x61, 0x73, 0x65, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x61, 0x73, 0x67,
	0x74, 0x2f, 0x76, 0x32, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x2f, 0x65,
	0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x25, 0x61, 0x73,
	0x67, 0x74, 0x2f, 0x76, 0x32, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x2f,
	0x74, 0x72, 0x61, 0x69, 0x6e, 0x69, 0x6e, 0x67, 0x5f, 0x69, 0x6e, 0x66, 0x6f, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f,
	0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x1a, 0x1b, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x2f, 0x65, 0x6d, 0x70, 0x74, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x19,
	0x6f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x17, 0x76, 0x61, 0x6c, 0x69, 0x64,
	0x61, 0x74, 0x65, 0x2f, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x22, 0x51, 0x0a, 0x11, 0x47, 0x65, 0x74, 0x44, 0x61, 0x74, 0x61, 0x73, 0x65, 0x74,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x3c, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x42, 0x28, 0xfa, 0x42, 0x25, 0x72, 0x23, 0x28, 0x80, 0x02, 0x32,
	0x1e, 0x5e, 0x5b, 0x41, 0x2d, 0x5a, 0x61, 0x2d, 0x7a, 0x30, 0x2d, 0x39, 0x2e, 0x5d, 0x5b, 0x41,
	0x2d, 0x5a, 0x61, 0x2d, 0x7a, 0x30, 0x2d, 0x39, 0x5f, 0x2e, 0x3e, 0x2d, 0x5d, 0x2a, 0x24, 0x52,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x22, 0x94, 0x01, 0x0a, 0x14, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65,
	0x44, 0x61, 0x74, 0x61, 0x73, 0x65, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x3c,
	0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x42, 0x28, 0xfa, 0x42,
	0x25, 0x72, 0x23, 0x28, 0x80, 0x02, 0x32, 0x1e, 0x5e, 0x5b, 0x41, 0x2d, 0x5a, 0x61, 0x2d, 0x7a,
	0x30, 0x2d, 0x39, 0x2e, 0x5d, 0x5b, 0x41, 0x2d, 0x5a, 0x61, 0x2d, 0x7a, 0x30, 0x2d, 0x39, 0x5f,
	0x2e, 0x3e, 0x2d, 0x5d, 0x2a, 0x24, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x3e, 0x0a, 0x04,
	0x74, 0x61, 0x67, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x09, 0x42, 0x2a, 0xfa, 0x42, 0x1f, 0x92,
	0x01, 0x1c, 0x22, 0x1a, 0x72, 0x18, 0x28, 0x40, 0x32, 0x14, 0x5e, 0x5b, 0x41, 0x2d, 0x5a, 0x61,
	0x2d, 0x7a, 0x30, 0x2d, 0x39, 0x5c, 0x73, 0x5f, 0x2e, 0x3e, 0x2d, 0x5d, 0x2a, 0x24, 0xfa, 0x42,
	0x05, 0x92, 0x01, 0x02, 0x18, 0x01, 0x52, 0x04, 0x74, 0x61, 0x67, 0x73, 0x22, 0x54, 0x0a, 0x14,
	0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x44, 0x61, 0x74, 0x61, 0x73, 0x65, 0x74, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x3c, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x42, 0x28, 0xfa, 0x42, 0x25, 0x72, 0x23, 0x28, 0x80, 0x02, 0x32, 0x1e, 0x5e, 0x5b,
	0x41, 0x2d, 0x5a, 0x61, 0x2d, 0x7a, 0x30, 0x2d, 0x39, 0x2e, 0x5d, 0x5b, 0x41, 0x2d, 0x5a, 0x61,
	0x2d, 0x7a, 0x30, 0x2d, 0x39, 0x5f, 0x2e, 0x3e, 0x2d, 0x5d, 0x2a, 0x24, 0x52, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x22, 0x50, 0x0a, 0x10, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x54, 0x61, 0x67, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x3c, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x42, 0x28, 0xfa, 0x42, 0x25, 0x72, 0x23, 0x28, 0x80, 0x02, 0x32, 0x1e,
	0x5e, 0x5b, 0x41, 0x2d, 0x5a, 0x61, 0x2d, 0x7a, 0x30, 0x2d, 0x39, 0x2e, 0x5d, 0x5b, 0x41, 0x2d,
	0x5a, 0x61, 0x2d, 0x7a, 0x30, 0x2d, 0x39, 0x5f, 0x2e, 0x3e, 0x2d, 0x5d, 0x2a, 0x24, 0x52, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x22, 0x8a, 0x01, 0x0a, 0x14, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x45,
	0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x3c, 0x0a,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x42, 0x28, 0xfa, 0x42, 0x25,
	0x72, 0x23, 0x28, 0x80, 0x02, 0x32, 0x1e, 0x5e, 0x5b, 0x41, 0x2d, 0x5a, 0x61, 0x2d, 0x7a, 0x30,
	0x2d, 0x39, 0x2e, 0x5d, 0x5b, 0x41, 0x2d, 0x5a, 0x61, 0x2d, 0x7a, 0x30, 0x2d, 0x39, 0x5f, 0x2e,
	0x3e, 0x2d, 0x5d, 0x2a, 0x24, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x34, 0x0a, 0x07, 0x65,
	0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x61,
	0x73, 0x67, 0x74, 0x2e, 0x76, 0x32, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x2e, 0x74, 0x79, 0x70, 0x65,
	0x2e, 0x45, 0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x52, 0x07, 0x65, 0x78, 0x61, 0x6d, 0x70, 0x6c,
	0x65, 0x22, 0x92, 0x01, 0x0a, 0x1c, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x4f, 0x72, 0x55, 0x70,
	0x64, 0x61, 0x74, 0x65, 0x45, 0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x12, 0x3c, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x42, 0x28, 0xfa, 0x42, 0x25, 0x72, 0x23, 0x28, 0x80, 0x02, 0x32, 0x1e, 0x5e, 0x5b, 0x41, 0x2d,
	0x5a, 0x61, 0x2d, 0x7a, 0x30, 0x2d, 0x39, 0x2e, 0x5d, 0x5b, 0x41, 0x2d, 0x5a, 0x61, 0x2d, 0x7a,
	0x30, 0x2d, 0x39, 0x5f, 0x2e, 0x3e, 0x2d, 0x5d, 0x2a, 0x24, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x12, 0x34, 0x0a, 0x07, 0x65, 0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x1a, 0x2e, 0x61, 0x73, 0x67, 0x74, 0x2e, 0x76, 0x32, 0x61, 0x6c, 0x70, 0x68, 0x61,
	0x2e, 0x74, 0x79, 0x70, 0x65, 0x2e, 0x45, 0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x52, 0x07, 0x65,
	0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x22, 0x91, 0x01, 0x0a, 0x19, 0x42, 0x61, 0x74, 0x63, 0x68,
	0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x45, 0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x3c, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x42, 0x28, 0xfa, 0x42, 0x25, 0x72, 0x23, 0x28, 0x80, 0x02, 0x32, 0x1e, 0x5e, 0x5b,
	0x41, 0x2d, 0x5a, 0x61, 0x2d, 0x7a, 0x30, 0x2d, 0x39, 0x2e, 0x5d, 0x5b, 0x41, 0x2d, 0x5a, 0x61,
	0x2d, 0x7a, 0x30, 0x2d, 0x39, 0x5f, 0x2e, 0x3e, 0x2d, 0x5d, 0x2a, 0x24, 0x52, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x12, 0x36, 0x0a, 0x08, 0x65, 0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x73, 0x18, 0x02,
	0x20, 0x03, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x61, 0x73, 0x67, 0x74, 0x2e, 0x76, 0x32, 0x61, 0x6c,
	0x70, 0x68, 0x61, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x2e, 0x45, 0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65,
	0x52, 0x08, 0x65, 0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x73, 0x22, 0x56, 0x0a, 0x16, 0x54, 0x72,
	0x75, 0x6e, 0x63, 0x61, 0x74, 0x65, 0x44, 0x61, 0x74, 0x61, 0x73, 0x65, 0x74, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x3c, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x42, 0x28, 0xfa, 0x42, 0x25, 0x72, 0x23, 0x28, 0x80, 0x02, 0x32, 0x1e, 0x5e, 0x5b,
	0x41, 0x2d, 0x5a, 0x61, 0x2d, 0x7a, 0x30, 0x2d, 0x39, 0x2e, 0x5d, 0x5b, 0x41, 0x2d, 0x5a, 0x61,
	0x2d, 0x7a, 0x30, 0x2d, 0x39, 0x5f, 0x2e, 0x3e, 0x2d, 0x5d, 0x2a, 0x24, 0x52, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x22, 0x53, 0x0a, 0x13, 0x54, 0x72, 0x61, 0x69, 0x6e, 0x69, 0x6e, 0x67, 0x49, 0x6e,
	0x66, 0x6f, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x3c, 0x0a, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x42, 0x28, 0xfa, 0x42, 0x25, 0x72, 0x23, 0x28, 0x80,
	0x02, 0x32, 0x1e, 0x5e, 0x5b, 0x41, 0x2d, 0x5a, 0x61, 0x2d, 0x7a, 0x30, 0x2d, 0x39, 0x2e, 0x5d,
	0x5b, 0x41, 0x2d, 0x5a, 0x61, 0x2d, 0x7a, 0x30, 0x2d, 0x39, 0x5f, 0x2e, 0x3e, 0x2d, 0x5d, 0x2a,
	0x24, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x32, 0xf0, 0x09, 0x0a, 0x0e, 0x44, 0x61, 0x74, 0x61,
	0x73, 0x65, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x5e, 0x0a, 0x0a, 0x47, 0x65,
	0x74, 0x44, 0x61, 0x74, 0x61, 0x73, 0x65, 0x74, 0x12, 0x1f, 0x2e, 0x61, 0x73, 0x67, 0x74, 0x2e,
	0x76, 0x32, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x2e, 0x47, 0x65, 0x74, 0x44, 0x61, 0x74, 0x61, 0x73,
	0x65, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x12, 0x2e, 0x61, 0x73, 0x67, 0x74,
	0x2e, 0x74, 0x79, 0x70, 0x65, 0x2e, 0x44, 0x61, 0x74, 0x61, 0x73, 0x65, 0x74, 0x22, 0x1b, 0x82,
	0xd3, 0xe4, 0x93, 0x02, 0x15, 0x12, 0x13, 0x2f, 0x76, 0x32, 0x2f, 0x64, 0x61, 0x74, 0x61, 0x73,
	0x65, 0x74, 0x73, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x7d, 0x12, 0x64, 0x0a, 0x0d, 0x43, 0x72,
	0x65, 0x61, 0x74, 0x65, 0x44, 0x61, 0x74, 0x61, 0x73, 0x65, 0x74, 0x12, 0x22, 0x2e, 0x61, 0x73,
	0x67, 0x74, 0x2e, 0x76, 0x32, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74,
	0x65, 0x44, 0x61, 0x74, 0x61, 0x73, 0x65, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x16, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x22, 0x17, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x11, 0x22,
	0x0c, 0x2f, 0x76, 0x32, 0x2f, 0x64, 0x61, 0x74, 0x61, 0x73, 0x65, 0x74, 0x73, 0x3a, 0x01, 0x2a,
	0x12, 0x73, 0x0a, 0x15, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x4f, 0x72, 0x55, 0x70, 0x64, 0x61,
	0x74, 0x65, 0x44, 0x61, 0x74, 0x61, 0x73, 0x65, 0x74, 0x12, 0x22, 0x2e, 0x61, 0x73, 0x67, 0x74,
	0x2e, 0x76, 0x32, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x44,
	0x61, 0x74, 0x61, 0x73, 0x65, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x16, 0x2e,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e,
	0x45, 0x6d, 0x70, 0x74, 0x79, 0x22, 0x1e, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x18, 0x1a, 0x13, 0x2f,
	0x76, 0x32, 0x2f, 0x64, 0x61, 0x74, 0x61, 0x73, 0x65, 0x74, 0x73, 0x2f, 0x7b, 0x6e, 0x61, 0x6d,
	0x65, 0x7d, 0x3a, 0x01, 0x2a, 0x12, 0x64, 0x0a, 0x0d, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x44,
	0x61, 0x74, 0x61, 0x73, 0x65, 0x74, 0x12, 0x22, 0x2e, 0x61, 0x73, 0x67, 0x74, 0x2e, 0x76, 0x32,
	0x61, 0x6c, 0x70, 0x68, 0x61, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x44, 0x61, 0x74, 0x61,
	0x73, 0x65, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x12, 0x2e, 0x61, 0x73, 0x67,
	0x74, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x2e, 0x44, 0x61, 0x74, 0x61, 0x73, 0x65, 0x74, 0x22, 0x1b,
	0x82, 0xd3, 0xe4, 0x93, 0x02, 0x15, 0x2a, 0x13, 0x2f, 0x76, 0x32, 0x2f, 0x64, 0x61, 0x74, 0x61,
	0x73, 0x65, 0x74, 0x73, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x7d, 0x12, 0x5c, 0x0a, 0x09, 0x44,
	0x65, 0x6c, 0x65, 0x74, 0x65, 0x54, 0x61, 0x67, 0x12, 0x1e, 0x2e, 0x61, 0x73, 0x67, 0x74, 0x2e,
	0x76, 0x32, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x54, 0x61,
	0x67, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x16, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79,
	0x22, 0x17, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x11, 0x2a, 0x0f, 0x2f, 0x76, 0x32, 0x2f, 0x74, 0x61,
	0x67, 0x73, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x7d, 0x12, 0x7a, 0x0a, 0x0d, 0x43, 0x72, 0x65,
	0x61, 0x74, 0x65, 0x45, 0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x12, 0x22, 0x2e, 0x61, 0x73, 0x67,
	0x74, 0x2e, 0x76, 0x32, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65,
	0x45, 0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x16,
	0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x22, 0x2d, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x27, 0x22, 0x1c,
	0x2f, 0x76, 0x32, 0x2f, 0x64, 0x61, 0x74, 0x61, 0x73, 0x65, 0x74, 0x73, 0x2f, 0x7b, 0x6e, 0x61,
	0x6d, 0x65, 0x7d, 0x2f, 0x65, 0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x73, 0x3a, 0x07, 0x65, 0x78,
	0x61, 0x6d, 0x70, 0x6c, 0x65, 0x12, 0x97, 0x01, 0x0a, 0x15, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65,
	0x4f, 0x72, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x45, 0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x12,
	0x2a, 0x2e, 0x61, 0x73, 0x67, 0x74, 0x2e, 0x76, 0x32, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x2e, 0x43,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x4f, 0x72, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x45, 0x78, 0x61,
	0x6d, 0x70, 0x6c, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x16, 0x2e, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x45, 0x6d,
	0x70, 0x74, 0x79, 0x22, 0x3a, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x34, 0x1a, 0x29, 0x2f, 0x76, 0x32,
	0x2f, 0x64, 0x61, 0x74, 0x61, 0x73, 0x65, 0x74, 0x73, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x7d,
	0x2f, 0x65, 0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x73, 0x2f, 0x7b, 0x65, 0x78, 0x61, 0x6d, 0x70,
	0x6c, 0x65, 0x2e, 0x69, 0x64, 0x7d, 0x3a, 0x07, 0x65, 0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x12,
	0x8a, 0x01, 0x0a, 0x12, 0x42, 0x61, 0x74, 0x63, 0x68, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x45,
	0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x12, 0x27, 0x2e, 0x61, 0x73, 0x67, 0x74, 0x2e, 0x76, 0x32,
	0x61, 0x6c, 0x70, 0x68, 0x61, 0x2e, 0x42, 0x61, 0x74, 0x63, 0x68, 0x43, 0x72, 0x65, 0x61, 0x74,
	0x65, 0x45, 0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x16, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x22, 0x33, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x2d, 0x22,
	0x28, 0x2f, 0x76, 0x32, 0x2f, 0x64, 0x61, 0x74, 0x61, 0x73, 0x65, 0x74, 0x73, 0x2f, 0x7b, 0x6e,
	0x61, 0x6d, 0x65, 0x7d, 0x2f, 0x65, 0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x73, 0x3a, 0x62, 0x61,
	0x74, 0x63, 0x68, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x3a, 0x01, 0x2a, 0x12, 0x75, 0x0a, 0x0f,
	0x54, 0x72, 0x75, 0x6e, 0x63, 0x61, 0x74, 0x65, 0x44, 0x61, 0x74, 0x61, 0x73, 0x65, 0x74, 0x12,
	0x24, 0x2e, 0x61, 0x73, 0x67, 0x74, 0x2e, 0x76, 0x32, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x2e, 0x54,
	0x72, 0x75, 0x6e, 0x63, 0x61, 0x74, 0x65, 0x44, 0x61, 0x74, 0x61, 0x73, 0x65, 0x74, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x16, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x22, 0x24, 0x82,
	0xd3, 0xe4, 0x93, 0x02, 0x1e, 0x2a, 0x1c, 0x2f, 0x76, 0x32, 0x2f, 0x64, 0x61, 0x74, 0x61, 0x73,
	0x65, 0x74, 0x73, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x7d, 0x2f, 0x65, 0x78, 0x61, 0x6d, 0x70,
	0x6c, 0x65, 0x73, 0x12, 0x7c, 0x0a, 0x0c, 0x54, 0x72, 0x61, 0x69, 0x6e, 0x69, 0x6e, 0x67, 0x49,
	0x6e, 0x66, 0x6f, 0x12, 0x21, 0x2e, 0x61, 0x73, 0x67, 0x74, 0x2e, 0x76, 0x32, 0x61, 0x6c, 0x70,
	0x68, 0x61, 0x2e, 0x54, 0x72, 0x61, 0x69, 0x6e, 0x69, 0x6e, 0x67, 0x49, 0x6e, 0x66, 0x6f, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1f, 0x2e, 0x61, 0x73, 0x67, 0x74, 0x2e, 0x76, 0x32,
	0x61, 0x6c, 0x70, 0x68, 0x61, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x2e, 0x54, 0x72, 0x61, 0x69, 0x6e,
	0x69, 0x6e, 0x67, 0x49, 0x6e, 0x66, 0x6f, 0x22, 0x28, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x22, 0x12,
	0x20, 0x2f, 0x76, 0x32, 0x2f, 0x64, 0x61, 0x74, 0x61, 0x73, 0x65, 0x74, 0x73, 0x2f, 0x7b, 0x6e,
	0x61, 0x6d, 0x65, 0x7d, 0x2f, 0x74, 0x72, 0x61, 0x69, 0x6e, 0x69, 0x6e, 0x67, 0x69, 0x6e, 0x66,
	0x6f, 0x1a, 0x47, 0x92, 0x41, 0x44, 0x12, 0x42, 0x4d, 0x61, 0x6e, 0x61, 0x67, 0x65, 0x20, 0x64,
	0x61, 0x74, 0x61, 0x73, 0x65, 0x74, 0x73, 0x20, 0x61, 0x6e, 0x64, 0x20, 0x65, 0x78, 0x61, 0x6d,
	0x70, 0x6c, 0x65, 0x73, 0x20, 0x75, 0x73, 0x65, 0x64, 0x20, 0x66, 0x6f, 0x72, 0x20, 0x74, 0x72,
	0x61, 0x69, 0x6e, 0x69, 0x6e, 0x67, 0x20, 0x41, 0x75, 0x74, 0x6f, 0x53, 0x75, 0x67, 0x67, 0x65,
	0x73, 0x74, 0x20, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x73, 0x2e, 0x42, 0x32, 0x5a, 0x30, 0x67, 0x69,
	0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x65, 0x2d, 0x63, 0x6f, 0x6e, 0x6f, 0x6d,
	0x69, 0x63, 0x2f, 0x76, 0x6d, 0x6c, 0x61, 0x70, 0x69, 0x73, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67,
	0x6f, 0x2f, 0x61, 0x73, 0x67, 0x74, 0x2f, 0x76, 0x32, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_asgt_v2alpha_dataset_service_proto_rawDescOnce sync.Once
	file_asgt_v2alpha_dataset_service_proto_rawDescData = file_asgt_v2alpha_dataset_service_proto_rawDesc
)

func file_asgt_v2alpha_dataset_service_proto_rawDescGZIP() []byte {
	file_asgt_v2alpha_dataset_service_proto_rawDescOnce.Do(func() {
		file_asgt_v2alpha_dataset_service_proto_rawDescData = protoimpl.X.CompressGZIP(file_asgt_v2alpha_dataset_service_proto_rawDescData)
	})
	return file_asgt_v2alpha_dataset_service_proto_rawDescData
}

var file_asgt_v2alpha_dataset_service_proto_msgTypes = make([]protoimpl.MessageInfo, 9)
var file_asgt_v2alpha_dataset_service_proto_goTypes = []interface{}{
	(*GetDatasetRequest)(nil),            // 0: asgt.v2alpha.GetDatasetRequest
	(*CreateDatasetRequest)(nil),         // 1: asgt.v2alpha.CreateDatasetRequest
	(*DeleteDatasetRequest)(nil),         // 2: asgt.v2alpha.DeleteDatasetRequest
	(*DeleteTagRequest)(nil),             // 3: asgt.v2alpha.DeleteTagRequest
	(*CreateExampleRequest)(nil),         // 4: asgt.v2alpha.CreateExampleRequest
	(*CreateOrUpdateExampleRequest)(nil), // 5: asgt.v2alpha.CreateOrUpdateExampleRequest
	(*BatchCreateExampleRequest)(nil),    // 6: asgt.v2alpha.BatchCreateExampleRequest
	(*TruncateDatasetRequest)(nil),       // 7: asgt.v2alpha.TruncateDatasetRequest
	(*TrainingInfoRequest)(nil),          // 8: asgt.v2alpha.TrainingInfoRequest
	(*_type.Example)(nil),                // 9: asgt.v2alpha.type.Example
	(*_type1.Dataset)(nil),               // 10: asgt.type.Dataset
	(*empty.Empty)(nil),                  // 11: google.protobuf.Empty
	(*_type.TrainingInfo)(nil),           // 12: asgt.v2alpha.type.TrainingInfo
}
var file_asgt_v2alpha_dataset_service_proto_depIdxs = []int32{
	9,  // 0: asgt.v2alpha.CreateExampleRequest.example:type_name -> asgt.v2alpha.type.Example
	9,  // 1: asgt.v2alpha.CreateOrUpdateExampleRequest.example:type_name -> asgt.v2alpha.type.Example
	9,  // 2: asgt.v2alpha.BatchCreateExampleRequest.examples:type_name -> asgt.v2alpha.type.Example
	0,  // 3: asgt.v2alpha.DatasetService.GetDataset:input_type -> asgt.v2alpha.GetDatasetRequest
	1,  // 4: asgt.v2alpha.DatasetService.CreateDataset:input_type -> asgt.v2alpha.CreateDatasetRequest
	1,  // 5: asgt.v2alpha.DatasetService.CreateOrUpdateDataset:input_type -> asgt.v2alpha.CreateDatasetRequest
	2,  // 6: asgt.v2alpha.DatasetService.DeleteDataset:input_type -> asgt.v2alpha.DeleteDatasetRequest
	3,  // 7: asgt.v2alpha.DatasetService.DeleteTag:input_type -> asgt.v2alpha.DeleteTagRequest
	4,  // 8: asgt.v2alpha.DatasetService.CreateExample:input_type -> asgt.v2alpha.CreateExampleRequest
	5,  // 9: asgt.v2alpha.DatasetService.CreateOrUpdateExample:input_type -> asgt.v2alpha.CreateOrUpdateExampleRequest
	6,  // 10: asgt.v2alpha.DatasetService.BatchCreateExample:input_type -> asgt.v2alpha.BatchCreateExampleRequest
	7,  // 11: asgt.v2alpha.DatasetService.TruncateDataset:input_type -> asgt.v2alpha.TruncateDatasetRequest
	8,  // 12: asgt.v2alpha.DatasetService.TrainingInfo:input_type -> asgt.v2alpha.TrainingInfoRequest
	10, // 13: asgt.v2alpha.DatasetService.GetDataset:output_type -> asgt.type.Dataset
	11, // 14: asgt.v2alpha.DatasetService.CreateDataset:output_type -> google.protobuf.Empty
	11, // 15: asgt.v2alpha.DatasetService.CreateOrUpdateDataset:output_type -> google.protobuf.Empty
	10, // 16: asgt.v2alpha.DatasetService.DeleteDataset:output_type -> asgt.type.Dataset
	11, // 17: asgt.v2alpha.DatasetService.DeleteTag:output_type -> google.protobuf.Empty
	11, // 18: asgt.v2alpha.DatasetService.CreateExample:output_type -> google.protobuf.Empty
	11, // 19: asgt.v2alpha.DatasetService.CreateOrUpdateExample:output_type -> google.protobuf.Empty
	11, // 20: asgt.v2alpha.DatasetService.BatchCreateExample:output_type -> google.protobuf.Empty
	11, // 21: asgt.v2alpha.DatasetService.TruncateDataset:output_type -> google.protobuf.Empty
	12, // 22: asgt.v2alpha.DatasetService.TrainingInfo:output_type -> asgt.v2alpha.type.TrainingInfo
	13, // [13:23] is the sub-list for method output_type
	3,  // [3:13] is the sub-list for method input_type
	3,  // [3:3] is the sub-list for extension type_name
	3,  // [3:3] is the sub-list for extension extendee
	0,  // [0:3] is the sub-list for field type_name
}

func init() { file_asgt_v2alpha_dataset_service_proto_init() }
func file_asgt_v2alpha_dataset_service_proto_init() {
	if File_asgt_v2alpha_dataset_service_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_asgt_v2alpha_dataset_service_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetDatasetRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_asgt_v2alpha_dataset_service_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateDatasetRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_asgt_v2alpha_dataset_service_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteDatasetRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_asgt_v2alpha_dataset_service_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteTagRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_asgt_v2alpha_dataset_service_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateExampleRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_asgt_v2alpha_dataset_service_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateOrUpdateExampleRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_asgt_v2alpha_dataset_service_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*BatchCreateExampleRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_asgt_v2alpha_dataset_service_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TruncateDatasetRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_asgt_v2alpha_dataset_service_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TrainingInfoRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_asgt_v2alpha_dataset_service_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   9,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_asgt_v2alpha_dataset_service_proto_goTypes,
		DependencyIndexes: file_asgt_v2alpha_dataset_service_proto_depIdxs,
		MessageInfos:      file_asgt_v2alpha_dataset_service_proto_msgTypes,
	}.Build()
	File_asgt_v2alpha_dataset_service_proto = out.File
	file_asgt_v2alpha_dataset_service_proto_rawDesc = nil
	file_asgt_v2alpha_dataset_service_proto_goTypes = nil
	file_asgt_v2alpha_dataset_service_proto_depIdxs = nil
}
