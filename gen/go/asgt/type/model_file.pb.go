// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.31.0
// 	protoc        (unknown)
// source: asgt/type/model_file.proto

package asgttype

import (
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

type ModelFile struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Data []byte `protobuf:"bytes,2,opt,name=data,proto3" json:"data,omitempty"`
}

func (x *ModelFile) Reset() {
	*x = ModelFile{}
	if protoimpl.UnsafeEnabled {
		mi := &file_asgt_type_model_file_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ModelFile) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ModelFile) ProtoMessage() {}

func (x *ModelFile) ProtoReflect() protoreflect.Message {
	mi := &file_asgt_type_model_file_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ModelFile.ProtoReflect.Descriptor instead.
func (*ModelFile) Descriptor() ([]byte, []int) {
	return file_asgt_type_model_file_proto_rawDescGZIP(), []int{0}
}

func (x *ModelFile) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *ModelFile) GetData() []byte {
	if x != nil {
		return x.Data
	}
	return nil
}

var File_asgt_type_model_file_proto protoreflect.FileDescriptor

var file_asgt_type_model_file_proto_rawDesc = []byte{
	0x0a, 0x1a, 0x61, 0x73, 0x67, 0x74, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x2f, 0x6d, 0x6f, 0x64, 0x65,
	0x6c, 0x5f, 0x66, 0x69, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x09, 0x61, 0x73,
	0x67, 0x74, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x22, 0x33, 0x0a, 0x09, 0x4d, 0x6f, 0x64, 0x65, 0x6c,
	0x46, 0x69, 0x6c, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x42, 0xa1, 0x01, 0x0a,
	0x12, 0x61, 0x69, 0x2e, 0x76, 0x69, 0x73, 0x6d, 0x61, 0x2e, 0x61, 0x73, 0x67, 0x74, 0x2e, 0x74,
	0x79, 0x70, 0x65, 0x42, 0x0e, 0x4d, 0x6f, 0x64, 0x65, 0x6c, 0x46, 0x69, 0x6c, 0x65, 0x50, 0x72,
	0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x36, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f,
	0x6d, 0x2f, 0x65, 0x2d, 0x63, 0x6f, 0x6e, 0x6f, 0x6d, 0x69, 0x63, 0x2f, 0x76, 0x6d, 0x6c, 0x61,
	0x70, 0x69, 0x73, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x73, 0x67, 0x74, 0x2f,
	0x74, 0x79, 0x70, 0x65, 0x3b, 0x61, 0x73, 0x67, 0x74, 0x74, 0x79, 0x70, 0x65, 0xa2, 0x02, 0x03,
	0x41, 0x54, 0x58, 0xaa, 0x02, 0x09, 0x41, 0x73, 0x67, 0x74, 0x2e, 0x54, 0x79, 0x70, 0x65, 0xca,
	0x02, 0x09, 0x41, 0x73, 0x67, 0x74, 0x5c, 0x54, 0x79, 0x70, 0x65, 0xe2, 0x02, 0x15, 0x41, 0x73,
	0x67, 0x74, 0x5c, 0x54, 0x79, 0x70, 0x65, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64,
	0x61, 0x74, 0x61, 0xea, 0x02, 0x0a, 0x41, 0x73, 0x67, 0x74, 0x3a, 0x3a, 0x54, 0x79, 0x70, 0x65,
	0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_asgt_type_model_file_proto_rawDescOnce sync.Once
	file_asgt_type_model_file_proto_rawDescData = file_asgt_type_model_file_proto_rawDesc
)

func file_asgt_type_model_file_proto_rawDescGZIP() []byte {
	file_asgt_type_model_file_proto_rawDescOnce.Do(func() {
		file_asgt_type_model_file_proto_rawDescData = protoimpl.X.CompressGZIP(file_asgt_type_model_file_proto_rawDescData)
	})
	return file_asgt_type_model_file_proto_rawDescData
}

var file_asgt_type_model_file_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_asgt_type_model_file_proto_goTypes = []interface{}{
	(*ModelFile)(nil), // 0: asgt.type.ModelFile
}
var file_asgt_type_model_file_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_asgt_type_model_file_proto_init() }
func file_asgt_type_model_file_proto_init() {
	if File_asgt_type_model_file_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_asgt_type_model_file_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ModelFile); i {
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
			RawDescriptor: file_asgt_type_model_file_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_asgt_type_model_file_proto_goTypes,
		DependencyIndexes: file_asgt_type_model_file_proto_depIdxs,
		MessageInfos:      file_asgt_type_model_file_proto_msgTypes,
	}.Build()
	File_asgt_type_model_file_proto = out.File
	file_asgt_type_model_file_proto_rawDesc = nil
	file_asgt_type_model_file_proto_goTypes = nil
	file_asgt_type_model_file_proto_depIdxs = nil
}
