// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.33.0
// 	protoc        (unknown)
// source: asgt/type/target_value.proto

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

// Record mapping a target name to a value
type TargetValue struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name  string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Value string `protobuf:"bytes,2,opt,name=value,proto3" json:"value,omitempty"`
}

func (x *TargetValue) Reset() {
	*x = TargetValue{}
	if protoimpl.UnsafeEnabled {
		mi := &file_asgt_type_target_value_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TargetValue) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TargetValue) ProtoMessage() {}

func (x *TargetValue) ProtoReflect() protoreflect.Message {
	mi := &file_asgt_type_target_value_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TargetValue.ProtoReflect.Descriptor instead.
func (*TargetValue) Descriptor() ([]byte, []int) {
	return file_asgt_type_target_value_proto_rawDescGZIP(), []int{0}
}

func (x *TargetValue) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *TargetValue) GetValue() string {
	if x != nil {
		return x.Value
	}
	return ""
}

var File_asgt_type_target_value_proto protoreflect.FileDescriptor

var file_asgt_type_target_value_proto_rawDesc = []byte{
	0x0a, 0x1c, 0x61, 0x73, 0x67, 0x74, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x2f, 0x74, 0x61, 0x72, 0x67,
	0x65, 0x74, 0x5f, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x09,
	0x61, 0x73, 0x67, 0x74, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x22, 0x37, 0x0a, 0x0b, 0x54, 0x61, 0x72,
	0x67, 0x65, 0x74, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x14, 0x0a, 0x05,
	0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c,
	0x75, 0x65, 0x42, 0xa3, 0x01, 0x0a, 0x12, 0x61, 0x69, 0x2e, 0x76, 0x69, 0x73, 0x6d, 0x61, 0x2e,
	0x61, 0x73, 0x67, 0x74, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x42, 0x10, 0x54, 0x61, 0x72, 0x67, 0x65,
	0x74, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x36, 0x67,
	0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x65, 0x2d, 0x63, 0x6f, 0x6e, 0x6f,
	0x6d, 0x69, 0x63, 0x2f, 0x76, 0x6d, 0x6c, 0x61, 0x70, 0x69, 0x73, 0x2f, 0x67, 0x65, 0x6e, 0x2f,
	0x67, 0x6f, 0x2f, 0x61, 0x73, 0x67, 0x74, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x3b, 0x61, 0x73, 0x67,
	0x74, 0x74, 0x79, 0x70, 0x65, 0xa2, 0x02, 0x03, 0x41, 0x54, 0x58, 0xaa, 0x02, 0x09, 0x41, 0x73,
	0x67, 0x74, 0x2e, 0x54, 0x79, 0x70, 0x65, 0xca, 0x02, 0x09, 0x41, 0x73, 0x67, 0x74, 0x5c, 0x54,
	0x79, 0x70, 0x65, 0xe2, 0x02, 0x15, 0x41, 0x73, 0x67, 0x74, 0x5c, 0x54, 0x79, 0x70, 0x65, 0x5c,
	0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x0a, 0x41, 0x73,
	0x67, 0x74, 0x3a, 0x3a, 0x54, 0x79, 0x70, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_asgt_type_target_value_proto_rawDescOnce sync.Once
	file_asgt_type_target_value_proto_rawDescData = file_asgt_type_target_value_proto_rawDesc
)

func file_asgt_type_target_value_proto_rawDescGZIP() []byte {
	file_asgt_type_target_value_proto_rawDescOnce.Do(func() {
		file_asgt_type_target_value_proto_rawDescData = protoimpl.X.CompressGZIP(file_asgt_type_target_value_proto_rawDescData)
	})
	return file_asgt_type_target_value_proto_rawDescData
}

var file_asgt_type_target_value_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_asgt_type_target_value_proto_goTypes = []interface{}{
	(*TargetValue)(nil), // 0: asgt.type.TargetValue
}
var file_asgt_type_target_value_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_asgt_type_target_value_proto_init() }
func file_asgt_type_target_value_proto_init() {
	if File_asgt_type_target_value_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_asgt_type_target_value_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TargetValue); i {
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
			RawDescriptor: file_asgt_type_target_value_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_asgt_type_target_value_proto_goTypes,
		DependencyIndexes: file_asgt_type_target_value_proto_depIdxs,
		MessageInfos:      file_asgt_type_target_value_proto_msgTypes,
	}.Build()
	File_asgt_type_target_value_proto = out.File
	file_asgt_type_target_value_proto_rawDesc = nil
	file_asgt_type_target_value_proto_goTypes = nil
	file_asgt_type_target_value_proto_depIdxs = nil
}
