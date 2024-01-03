// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.31.0
// 	protoc        (unknown)
// source: asgt/type/model.proto

package asgttype

import (
	_ "github.com/e-conomic/vmlapis/gen/go/gen_bq_schema"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Model_InputType int32

const (
	Model_FEATURE_TENSORS Model_InputType = 0
	Model_EXAMPLE_TENSOR  Model_InputType = 1
)

// Enum value maps for Model_InputType.
var (
	Model_InputType_name = map[int32]string{
		0: "FEATURE_TENSORS",
		1: "EXAMPLE_TENSOR",
	}
	Model_InputType_value = map[string]int32{
		"FEATURE_TENSORS": 0,
		"EXAMPLE_TENSOR":  1,
	}
)

func (x Model_InputType) Enum() *Model_InputType {
	p := new(Model_InputType)
	*p = x
	return p
}

func (x Model_InputType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Model_InputType) Descriptor() protoreflect.EnumDescriptor {
	return file_asgt_type_model_proto_enumTypes[0].Descriptor()
}

func (Model_InputType) Type() protoreflect.EnumType {
	return &file_asgt_type_model_proto_enumTypes[0]
}

func (x Model_InputType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Model_InputType.Descriptor instead.
func (Model_InputType) EnumDescriptor() ([]byte, []int) {
	return file_asgt_type_model_proto_rawDescGZIP(), []int{0, 0}
}

type Model struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Version          int64                  `protobuf:"varint,3,opt,name=version,proto3" json:"version,omitempty"`
	CreatedAt        *timestamppb.Timestamp `protobuf:"bytes,4,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	DatasetSize      int32                  `protobuf:"varint,5,opt,name=dataset_size,json=datasetSize,proto3" json:"dataset_size,omitempty"`
	TrainingSize     int32                  `protobuf:"varint,6,opt,name=training_size,json=trainingSize,proto3" json:"training_size,omitempty"`
	ConfidenceScores []*TargetMetrics       `protobuf:"bytes,7,rep,name=confidence_scores,json=confidenceScores,proto3" json:"confidence_scores,omitempty"`
	InputType        Model_InputType        `protobuf:"varint,8,opt,name=input_type,json=inputType,proto3,enum=asgt.type.Model_InputType" json:"input_type,omitempty"`
	DatasetType      string                 `protobuf:"bytes,9,opt,name=dataset_type,json=datasetType,proto3" json:"dataset_type,omitempty"`
	ModelFiles       []*ModelFile           `protobuf:"bytes,10,rep,name=model_files,json=modelFiles,proto3" json:"model_files,omitempty"`
}

func (x *Model) Reset() {
	*x = Model{}
	if protoimpl.UnsafeEnabled {
		mi := &file_asgt_type_model_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Model) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Model) ProtoMessage() {}

func (x *Model) ProtoReflect() protoreflect.Message {
	mi := &file_asgt_type_model_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Model.ProtoReflect.Descriptor instead.
func (*Model) Descriptor() ([]byte, []int) {
	return file_asgt_type_model_proto_rawDescGZIP(), []int{0}
}

func (x *Model) GetVersion() int64 {
	if x != nil {
		return x.Version
	}
	return 0
}

func (x *Model) GetCreatedAt() *timestamppb.Timestamp {
	if x != nil {
		return x.CreatedAt
	}
	return nil
}

func (x *Model) GetDatasetSize() int32 {
	if x != nil {
		return x.DatasetSize
	}
	return 0
}

func (x *Model) GetTrainingSize() int32 {
	if x != nil {
		return x.TrainingSize
	}
	return 0
}

func (x *Model) GetConfidenceScores() []*TargetMetrics {
	if x != nil {
		return x.ConfidenceScores
	}
	return nil
}

func (x *Model) GetInputType() Model_InputType {
	if x != nil {
		return x.InputType
	}
	return Model_FEATURE_TENSORS
}

func (x *Model) GetDatasetType() string {
	if x != nil {
		return x.DatasetType
	}
	return ""
}

func (x *Model) GetModelFiles() []*ModelFile {
	if x != nil {
		return x.ModelFiles
	}
	return nil
}

var File_asgt_type_model_proto protoreflect.FileDescriptor

var file_asgt_type_model_proto_rawDesc = []byte{
	0x0a, 0x15, 0x61, 0x73, 0x67, 0x74, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x2f, 0x6d, 0x6f, 0x64, 0x65,
	0x6c, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x09, 0x61, 0x73, 0x67, 0x74, 0x2e, 0x74, 0x79,
	0x70, 0x65, 0x1a, 0x1a, 0x61, 0x73, 0x67, 0x74, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x2f, 0x6d, 0x6f,
	0x64, 0x65, 0x6c, 0x5f, 0x66, 0x69, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1e,
	0x61, 0x73, 0x67, 0x74, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x2f, 0x74, 0x61, 0x72, 0x67, 0x65, 0x74,
	0x5f, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1c,
	0x67, 0x65, 0x6e, 0x5f, 0x62, 0x71, 0x5f, 0x73, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x2f, 0x62, 0x71,
	0x5f, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69,
	0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xdf, 0x03,
	0x0a, 0x05, 0x4d, 0x6f, 0x64, 0x65, 0x6c, 0x12, 0x1f, 0x0a, 0x07, 0x76, 0x65, 0x72, 0x73, 0x69,
	0x6f, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x03, 0x42, 0x05, 0xea, 0x3f, 0x02, 0x08, 0x01, 0x52,
	0x07, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x39, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61,
	0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67,
	0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54,
	0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65,
	0x64, 0x41, 0x74, 0x12, 0x28, 0x0a, 0x0c, 0x64, 0x61, 0x74, 0x61, 0x73, 0x65, 0x74, 0x5f, 0x73,
	0x69, 0x7a, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x05, 0x42, 0x05, 0xea, 0x3f, 0x02, 0x18, 0x01,
	0x52, 0x0b, 0x64, 0x61, 0x74, 0x61, 0x73, 0x65, 0x74, 0x53, 0x69, 0x7a, 0x65, 0x12, 0x2a, 0x0a,
	0x0d, 0x74, 0x72, 0x61, 0x69, 0x6e, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x69, 0x7a, 0x65, 0x18, 0x06,
	0x20, 0x01, 0x28, 0x05, 0x42, 0x05, 0xea, 0x3f, 0x02, 0x18, 0x01, 0x52, 0x0c, 0x74, 0x72, 0x61,
	0x69, 0x6e, 0x69, 0x6e, 0x67, 0x53, 0x69, 0x7a, 0x65, 0x12, 0x4c, 0x0a, 0x11, 0x63, 0x6f, 0x6e,
	0x66, 0x69, 0x64, 0x65, 0x6e, 0x63, 0x65, 0x5f, 0x73, 0x63, 0x6f, 0x72, 0x65, 0x73, 0x18, 0x07,
	0x20, 0x03, 0x28, 0x0b, 0x32, 0x18, 0x2e, 0x61, 0x73, 0x67, 0x74, 0x2e, 0x74, 0x79, 0x70, 0x65,
	0x2e, 0x54, 0x61, 0x72, 0x67, 0x65, 0x74, 0x4d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x42, 0x05,
	0xea, 0x3f, 0x02, 0x18, 0x01, 0x52, 0x10, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x64, 0x65, 0x6e, 0x63,
	0x65, 0x53, 0x63, 0x6f, 0x72, 0x65, 0x73, 0x12, 0x39, 0x0a, 0x0a, 0x69, 0x6e, 0x70, 0x75, 0x74,
	0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x08, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x1a, 0x2e, 0x61, 0x73,
	0x67, 0x74, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x2e, 0x4d, 0x6f, 0x64, 0x65, 0x6c, 0x2e, 0x49, 0x6e,
	0x70, 0x75, 0x74, 0x54, 0x79, 0x70, 0x65, 0x52, 0x09, 0x69, 0x6e, 0x70, 0x75, 0x74, 0x54, 0x79,
	0x70, 0x65, 0x12, 0x21, 0x0a, 0x0c, 0x64, 0x61, 0x74, 0x61, 0x73, 0x65, 0x74, 0x5f, 0x74, 0x79,
	0x70, 0x65, 0x18, 0x09, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x61, 0x74, 0x61, 0x73, 0x65,
	0x74, 0x54, 0x79, 0x70, 0x65, 0x12, 0x3c, 0x0a, 0x0b, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x5f, 0x66,
	0x69, 0x6c, 0x65, 0x73, 0x18, 0x0a, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x14, 0x2e, 0x61, 0x73, 0x67,
	0x74, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x2e, 0x4d, 0x6f, 0x64, 0x65, 0x6c, 0x46, 0x69, 0x6c, 0x65,
	0x42, 0x05, 0xea, 0x3f, 0x02, 0x18, 0x01, 0x52, 0x0a, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x46, 0x69,
	0x6c, 0x65, 0x73, 0x22, 0x34, 0x0a, 0x09, 0x49, 0x6e, 0x70, 0x75, 0x74, 0x54, 0x79, 0x70, 0x65,
	0x12, 0x13, 0x0a, 0x0f, 0x46, 0x45, 0x41, 0x54, 0x55, 0x52, 0x45, 0x5f, 0x54, 0x45, 0x4e, 0x53,
	0x4f, 0x52, 0x53, 0x10, 0x00, 0x12, 0x12, 0x0a, 0x0e, 0x45, 0x58, 0x41, 0x4d, 0x50, 0x4c, 0x45,
	0x5f, 0x54, 0x45, 0x4e, 0x53, 0x4f, 0x52, 0x10, 0x01, 0x4a, 0x04, 0x08, 0x01, 0x10, 0x03, 0x42,
	0x9d, 0x01, 0x0a, 0x12, 0x61, 0x69, 0x2e, 0x76, 0x69, 0x73, 0x6d, 0x61, 0x2e, 0x61, 0x73, 0x67,
	0x74, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x42, 0x0a, 0x4d, 0x6f, 0x64, 0x65, 0x6c, 0x50, 0x72, 0x6f,
	0x74, 0x6f, 0x50, 0x01, 0x5a, 0x36, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d,
	0x2f, 0x65, 0x2d, 0x63, 0x6f, 0x6e, 0x6f, 0x6d, 0x69, 0x63, 0x2f, 0x76, 0x6d, 0x6c, 0x61, 0x70,
	0x69, 0x73, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x73, 0x67, 0x74, 0x2f, 0x74,
	0x79, 0x70, 0x65, 0x3b, 0x61, 0x73, 0x67, 0x74, 0x74, 0x79, 0x70, 0x65, 0xa2, 0x02, 0x03, 0x41,
	0x54, 0x58, 0xaa, 0x02, 0x09, 0x41, 0x73, 0x67, 0x74, 0x2e, 0x54, 0x79, 0x70, 0x65, 0xca, 0x02,
	0x09, 0x41, 0x73, 0x67, 0x74, 0x5c, 0x54, 0x79, 0x70, 0x65, 0xe2, 0x02, 0x15, 0x41, 0x73, 0x67,
	0x74, 0x5c, 0x54, 0x79, 0x70, 0x65, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61,
	0x74, 0x61, 0xea, 0x02, 0x0a, 0x41, 0x73, 0x67, 0x74, 0x3a, 0x3a, 0x54, 0x79, 0x70, 0x65, 0x62,
	0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_asgt_type_model_proto_rawDescOnce sync.Once
	file_asgt_type_model_proto_rawDescData = file_asgt_type_model_proto_rawDesc
)

func file_asgt_type_model_proto_rawDescGZIP() []byte {
	file_asgt_type_model_proto_rawDescOnce.Do(func() {
		file_asgt_type_model_proto_rawDescData = protoimpl.X.CompressGZIP(file_asgt_type_model_proto_rawDescData)
	})
	return file_asgt_type_model_proto_rawDescData
}

var file_asgt_type_model_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_asgt_type_model_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_asgt_type_model_proto_goTypes = []interface{}{
	(Model_InputType)(0),          // 0: asgt.type.Model.InputType
	(*Model)(nil),                 // 1: asgt.type.Model
	(*timestamppb.Timestamp)(nil), // 2: google.protobuf.Timestamp
	(*TargetMetrics)(nil),         // 3: asgt.type.TargetMetrics
	(*ModelFile)(nil),             // 4: asgt.type.ModelFile
}
var file_asgt_type_model_proto_depIdxs = []int32{
	2, // 0: asgt.type.Model.created_at:type_name -> google.protobuf.Timestamp
	3, // 1: asgt.type.Model.confidence_scores:type_name -> asgt.type.TargetMetrics
	0, // 2: asgt.type.Model.input_type:type_name -> asgt.type.Model.InputType
	4, // 3: asgt.type.Model.model_files:type_name -> asgt.type.ModelFile
	4, // [4:4] is the sub-list for method output_type
	4, // [4:4] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_asgt_type_model_proto_init() }
func file_asgt_type_model_proto_init() {
	if File_asgt_type_model_proto != nil {
		return
	}
	file_asgt_type_model_file_proto_init()
	file_asgt_type_target_metrics_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_asgt_type_model_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Model); i {
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
			RawDescriptor: file_asgt_type_model_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_asgt_type_model_proto_goTypes,
		DependencyIndexes: file_asgt_type_model_proto_depIdxs,
		EnumInfos:         file_asgt_type_model_proto_enumTypes,
		MessageInfos:      file_asgt_type_model_proto_msgTypes,
	}.Build()
	File_asgt_type_model_proto = out.File
	file_asgt_type_model_proto_rawDesc = nil
	file_asgt_type_model_proto_goTypes = nil
	file_asgt_type_model_proto_depIdxs = nil
}
