// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.31.0
// 	protoc        (unknown)
// source: ssn/image/v1/image.proto

package imageservice

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type CreateImageRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	InputPaths []string `protobuf:"bytes,1,rep,name=input_paths,json=inputPaths,proto3" json:"input_paths,omitempty"`
	OutputPath string   `protobuf:"bytes,2,opt,name=output_path,json=outputPath,proto3" json:"output_path,omitempty"`
}

func (x *CreateImageRequest) Reset() {
	*x = CreateImageRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ssn_image_v1_image_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateImageRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateImageRequest) ProtoMessage() {}

func (x *CreateImageRequest) ProtoReflect() protoreflect.Message {
	mi := &file_ssn_image_v1_image_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateImageRequest.ProtoReflect.Descriptor instead.
func (*CreateImageRequest) Descriptor() ([]byte, []int) {
	return file_ssn_image_v1_image_proto_rawDescGZIP(), []int{0}
}

func (x *CreateImageRequest) GetInputPaths() []string {
	if x != nil {
		return x.InputPaths
	}
	return nil
}

func (x *CreateImageRequest) GetOutputPath() string {
	if x != nil {
		return x.OutputPath
	}
	return ""
}

var File_ssn_image_v1_image_proto protoreflect.FileDescriptor

var file_ssn_image_v1_image_proto_rawDesc = []byte{
	0x0a, 0x18, 0x73, 0x73, 0x6e, 0x2f, 0x69, 0x6d, 0x61, 0x67, 0x65, 0x2f, 0x76, 0x31, 0x2f, 0x69,
	0x6d, 0x61, 0x67, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x13, 0x73, 0x73, 0x6e, 0x2e,
	0x69, 0x6d, 0x61, 0x67, 0x65, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x1a,
	0x1b, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2f, 0x65, 0x6d, 0x70, 0x74, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x56, 0x0a, 0x12,
	0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x49, 0x6d, 0x61, 0x67, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x12, 0x1f, 0x0a, 0x0b, 0x69, 0x6e, 0x70, 0x75, 0x74, 0x5f, 0x70, 0x61, 0x74, 0x68,
	0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x09, 0x52, 0x0a, 0x69, 0x6e, 0x70, 0x75, 0x74, 0x50, 0x61,
	0x74, 0x68, 0x73, 0x12, 0x1f, 0x0a, 0x0b, 0x6f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x5f, 0x70, 0x61,
	0x74, 0x68, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x6f, 0x75, 0x74, 0x70, 0x75, 0x74,
	0x50, 0x61, 0x74, 0x68, 0x32, 0x5e, 0x0a, 0x0c, 0x49, 0x6d, 0x61, 0x67, 0x65, 0x53, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x12, 0x4e, 0x0a, 0x0b, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x49, 0x6d,
	0x61, 0x67, 0x65, 0x12, 0x27, 0x2e, 0x73, 0x73, 0x6e, 0x2e, 0x69, 0x6d, 0x61, 0x67, 0x65, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65,
	0x49, 0x6d, 0x61, 0x67, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x16, 0x2e, 0x67,
	0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x45,
	0x6d, 0x70, 0x74, 0x79, 0x42, 0xde, 0x01, 0x0a, 0x1c, 0x61, 0x69, 0x2e, 0x76, 0x69, 0x73, 0x6d,
	0x61, 0x2e, 0x73, 0x73, 0x6e, 0x2e, 0x69, 0x6d, 0x61, 0x67, 0x65, 0x73, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x2e, 0x76, 0x31, 0x42, 0x0a, 0x49, 0x6d, 0x61, 0x67, 0x65, 0x50, 0x72, 0x6f, 0x74,
	0x6f, 0x50, 0x01, 0x5a, 0x44, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f,
	0x65, 0x2d, 0x63, 0x6f, 0x6e, 0x6f, 0x6d, 0x69, 0x63, 0x2f, 0x76, 0x6d, 0x6c, 0x61, 0x70, 0x69,
	0x73, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f, 0x2f, 0x73, 0x73, 0x6e, 0x2f, 0x69, 0x6d, 0x61,
	0x67, 0x65, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2f, 0x76, 0x31, 0x3b, 0x69, 0x6d, 0x61,
	0x67, 0x65, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0xa2, 0x02, 0x03, 0x53, 0x49, 0x58, 0xaa,
	0x02, 0x13, 0x53, 0x73, 0x6e, 0x2e, 0x49, 0x6d, 0x61, 0x67, 0x65, 0x73, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x2e, 0x56, 0x31, 0xca, 0x02, 0x13, 0x53, 0x73, 0x6e, 0x5c, 0x49, 0x6d, 0x61, 0x67,
	0x65, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x5c, 0x56, 0x31, 0xe2, 0x02, 0x1f, 0x53, 0x73,
	0x6e, 0x5c, 0x49, 0x6d, 0x61, 0x67, 0x65, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x5c, 0x56,
	0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x15,
	0x53, 0x73, 0x6e, 0x3a, 0x3a, 0x49, 0x6d, 0x61, 0x67, 0x65, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x3a, 0x3a, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_ssn_image_v1_image_proto_rawDescOnce sync.Once
	file_ssn_image_v1_image_proto_rawDescData = file_ssn_image_v1_image_proto_rawDesc
)

func file_ssn_image_v1_image_proto_rawDescGZIP() []byte {
	file_ssn_image_v1_image_proto_rawDescOnce.Do(func() {
		file_ssn_image_v1_image_proto_rawDescData = protoimpl.X.CompressGZIP(file_ssn_image_v1_image_proto_rawDescData)
	})
	return file_ssn_image_v1_image_proto_rawDescData
}

var file_ssn_image_v1_image_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_ssn_image_v1_image_proto_goTypes = []interface{}{
	(*CreateImageRequest)(nil), // 0: ssn.imageservice.v1.CreateImageRequest
	(*emptypb.Empty)(nil),      // 1: google.protobuf.Empty
}
var file_ssn_image_v1_image_proto_depIdxs = []int32{
	0, // 0: ssn.imageservice.v1.ImageService.CreateImage:input_type -> ssn.imageservice.v1.CreateImageRequest
	1, // 1: ssn.imageservice.v1.ImageService.CreateImage:output_type -> google.protobuf.Empty
	1, // [1:2] is the sub-list for method output_type
	0, // [0:1] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_ssn_image_v1_image_proto_init() }
func file_ssn_image_v1_image_proto_init() {
	if File_ssn_image_v1_image_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_ssn_image_v1_image_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateImageRequest); i {
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
			RawDescriptor: file_ssn_image_v1_image_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_ssn_image_v1_image_proto_goTypes,
		DependencyIndexes: file_ssn_image_v1_image_proto_depIdxs,
		MessageInfos:      file_ssn_image_v1_image_proto_msgTypes,
	}.Build()
	File_ssn_image_v1_image_proto = out.File
	file_ssn_image_v1_image_proto_rawDesc = nil
	file_ssn_image_v1_image_proto_goTypes = nil
	file_ssn_image_v1_image_proto_depIdxs = nil
}
