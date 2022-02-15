// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.12.3
// source: asgt/type/train_statistics.proto

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

type TrainStatistics struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	FeatureCount     float32                                     `protobuf:"fixed32,1,opt,name=feature_count,json=featureCount,proto3" json:"feature_count,omitempty"`                                                                                                   //number of input features for the model
	FeatureNames     []string                                    `protobuf:"bytes,2,rep,name=feature_names,json=featureNames,proto3" json:"feature_names,omitempty"`                                                                                                     //feature names
	TargetNames      []string                                    `protobuf:"bytes,3,rep,name=target_names,json=targetNames,proto3" json:"target_names,omitempty"`                                                                                                        //target names
	TargetCount      map[string]float32                          `protobuf:"bytes,4,rep,name=target_count,json=targetCount,proto3" json:"target_count,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"fixed32,2,opt,name=value,proto3"`              // for each target count of its
	InformationGains map[string]*TrainStatistics_InformationGain `protobuf:"bytes,5,rep,name=information_gains,json=informationGains,proto3" json:"information_gains,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"` //feature information gains for each of the targets
	SimilarityIndex  float32                                     `protobuf:"fixed32,6,opt,name=similarity_index,json=similarityIndex,proto3" json:"similarity_index,omitempty"`                                                                                          // similarity index between train and test dataset
}

func (x *TrainStatistics) Reset() {
	*x = TrainStatistics{}
	if protoimpl.UnsafeEnabled {
		mi := &file_asgt_type_train_statistics_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TrainStatistics) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TrainStatistics) ProtoMessage() {}

func (x *TrainStatistics) ProtoReflect() protoreflect.Message {
	mi := &file_asgt_type_train_statistics_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TrainStatistics.ProtoReflect.Descriptor instead.
func (*TrainStatistics) Descriptor() ([]byte, []int) {
	return file_asgt_type_train_statistics_proto_rawDescGZIP(), []int{0}
}

func (x *TrainStatistics) GetFeatureCount() float32 {
	if x != nil {
		return x.FeatureCount
	}
	return 0
}

func (x *TrainStatistics) GetFeatureNames() []string {
	if x != nil {
		return x.FeatureNames
	}
	return nil
}

func (x *TrainStatistics) GetTargetNames() []string {
	if x != nil {
		return x.TargetNames
	}
	return nil
}

func (x *TrainStatistics) GetTargetCount() map[string]float32 {
	if x != nil {
		return x.TargetCount
	}
	return nil
}

func (x *TrainStatistics) GetInformationGains() map[string]*TrainStatistics_InformationGain {
	if x != nil {
		return x.InformationGains
	}
	return nil
}

func (x *TrainStatistics) GetSimilarityIndex() float32 {
	if x != nil {
		return x.SimilarityIndex
	}
	return 0
}

type TrainStatistics_InformationGain struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	//feature information gains for a single target
	FeatureGains map[string]float32 `protobuf:"bytes,1,rep,name=feature_gains,json=featureGains,proto3" json:"feature_gains,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"fixed32,2,opt,name=value,proto3"`
}

func (x *TrainStatistics_InformationGain) Reset() {
	*x = TrainStatistics_InformationGain{}
	if protoimpl.UnsafeEnabled {
		mi := &file_asgt_type_train_statistics_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TrainStatistics_InformationGain) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TrainStatistics_InformationGain) ProtoMessage() {}

func (x *TrainStatistics_InformationGain) ProtoReflect() protoreflect.Message {
	mi := &file_asgt_type_train_statistics_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TrainStatistics_InformationGain.ProtoReflect.Descriptor instead.
func (*TrainStatistics_InformationGain) Descriptor() ([]byte, []int) {
	return file_asgt_type_train_statistics_proto_rawDescGZIP(), []int{0, 0}
}

func (x *TrainStatistics_InformationGain) GetFeatureGains() map[string]float32 {
	if x != nil {
		return x.FeatureGains
	}
	return nil
}

var File_asgt_type_train_statistics_proto protoreflect.FileDescriptor

var file_asgt_type_train_statistics_proto_rawDesc = []byte{
	0x0a, 0x20, 0x61, 0x73, 0x67, 0x74, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x2f, 0x74, 0x72, 0x61, 0x69,
	0x6e, 0x5f, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x12, 0x09, 0x61, 0x73, 0x67, 0x74, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x22, 0xc1, 0x05,
	0x0a, 0x0f, 0x54, 0x72, 0x61, 0x69, 0x6e, 0x53, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63,
	0x73, 0x12, 0x23, 0x0a, 0x0d, 0x66, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x5f, 0x63, 0x6f, 0x75,
	0x6e, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x02, 0x52, 0x0c, 0x66, 0x65, 0x61, 0x74, 0x75, 0x72,
	0x65, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x23, 0x0a, 0x0d, 0x66, 0x65, 0x61, 0x74, 0x75, 0x72,
	0x65, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x09, 0x52, 0x0c, 0x66,
	0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x4e, 0x61, 0x6d, 0x65, 0x73, 0x12, 0x21, 0x0a, 0x0c, 0x74,
	0x61, 0x72, 0x67, 0x65, 0x74, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28,
	0x09, 0x52, 0x0b, 0x74, 0x61, 0x72, 0x67, 0x65, 0x74, 0x4e, 0x61, 0x6d, 0x65, 0x73, 0x12, 0x4e,
	0x0a, 0x0c, 0x74, 0x61, 0x72, 0x67, 0x65, 0x74, 0x5f, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x04,
	0x20, 0x03, 0x28, 0x0b, 0x32, 0x2b, 0x2e, 0x61, 0x73, 0x67, 0x74, 0x2e, 0x74, 0x79, 0x70, 0x65,
	0x2e, 0x54, 0x72, 0x61, 0x69, 0x6e, 0x53, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73,
	0x2e, 0x54, 0x61, 0x72, 0x67, 0x65, 0x74, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x45, 0x6e, 0x74, 0x72,
	0x79, 0x52, 0x0b, 0x74, 0x61, 0x72, 0x67, 0x65, 0x74, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x5d,
	0x0a, 0x11, 0x69, 0x6e, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x67, 0x61,
	0x69, 0x6e, 0x73, 0x18, 0x05, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x30, 0x2e, 0x61, 0x73, 0x67, 0x74,
	0x2e, 0x74, 0x79, 0x70, 0x65, 0x2e, 0x54, 0x72, 0x61, 0x69, 0x6e, 0x53, 0x74, 0x61, 0x74, 0x69,
	0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x49, 0x6e, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x47, 0x61, 0x69, 0x6e, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x10, 0x69, 0x6e, 0x66,
	0x6f, 0x72, 0x6d, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x47, 0x61, 0x69, 0x6e, 0x73, 0x12, 0x29, 0x0a,
	0x10, 0x73, 0x69, 0x6d, 0x69, 0x6c, 0x61, 0x72, 0x69, 0x74, 0x79, 0x5f, 0x69, 0x6e, 0x64, 0x65,
	0x78, 0x18, 0x06, 0x20, 0x01, 0x28, 0x02, 0x52, 0x0f, 0x73, 0x69, 0x6d, 0x69, 0x6c, 0x61, 0x72,
	0x69, 0x74, 0x79, 0x49, 0x6e, 0x64, 0x65, 0x78, 0x1a, 0xb5, 0x01, 0x0a, 0x0f, 0x49, 0x6e, 0x66,
	0x6f, 0x72, 0x6d, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x47, 0x61, 0x69, 0x6e, 0x12, 0x61, 0x0a, 0x0d,
	0x66, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x5f, 0x67, 0x61, 0x69, 0x6e, 0x73, 0x18, 0x01, 0x20,
	0x03, 0x28, 0x0b, 0x32, 0x3c, 0x2e, 0x61, 0x73, 0x67, 0x74, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x2e,
	0x54, 0x72, 0x61, 0x69, 0x6e, 0x53, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e,
	0x49, 0x6e, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x47, 0x61, 0x69, 0x6e, 0x2e,
	0x46, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x47, 0x61, 0x69, 0x6e, 0x73, 0x45, 0x6e, 0x74, 0x72,
	0x79, 0x52, 0x0c, 0x66, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x47, 0x61, 0x69, 0x6e, 0x73, 0x1a,
	0x3f, 0x0a, 0x11, 0x46, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x47, 0x61, 0x69, 0x6e, 0x73, 0x45,
	0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x02, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01,
	0x1a, 0x3e, 0x0a, 0x10, 0x54, 0x61, 0x72, 0x67, 0x65, 0x74, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x45,
	0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x02, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01,
	0x1a, 0x6f, 0x0a, 0x15, 0x49, 0x6e, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x47,
	0x61, 0x69, 0x6e, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x40, 0x0a, 0x05, 0x76,
	0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x2a, 0x2e, 0x61, 0x73, 0x67,
	0x74, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x2e, 0x54, 0x72, 0x61, 0x69, 0x6e, 0x53, 0x74, 0x61, 0x74,
	0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x49, 0x6e, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x47, 0x61, 0x69, 0x6e, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38,
	0x01, 0x42, 0x38, 0x5a, 0x36, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f,
	0x65, 0x2d, 0x63, 0x6f, 0x6e, 0x6f, 0x6d, 0x69, 0x63, 0x2f, 0x76, 0x6d, 0x6c, 0x61, 0x70, 0x69,
	0x73, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x73, 0x67, 0x74, 0x2f, 0x74, 0x79,
	0x70, 0x65, 0x3b, 0x61, 0x73, 0x67, 0x74, 0x74, 0x79, 0x70, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x33,
}

var (
	file_asgt_type_train_statistics_proto_rawDescOnce sync.Once
	file_asgt_type_train_statistics_proto_rawDescData = file_asgt_type_train_statistics_proto_rawDesc
)

func file_asgt_type_train_statistics_proto_rawDescGZIP() []byte {
	file_asgt_type_train_statistics_proto_rawDescOnce.Do(func() {
		file_asgt_type_train_statistics_proto_rawDescData = protoimpl.X.CompressGZIP(file_asgt_type_train_statistics_proto_rawDescData)
	})
	return file_asgt_type_train_statistics_proto_rawDescData
}

var file_asgt_type_train_statistics_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_asgt_type_train_statistics_proto_goTypes = []interface{}{
	(*TrainStatistics)(nil),                 // 0: asgt.type.TrainStatistics
	(*TrainStatistics_InformationGain)(nil), // 1: asgt.type.TrainStatistics.InformationGain
	nil,                                     // 2: asgt.type.TrainStatistics.TargetCountEntry
	nil,                                     // 3: asgt.type.TrainStatistics.InformationGainsEntry
	nil,                                     // 4: asgt.type.TrainStatistics.InformationGain.FeatureGainsEntry
}
var file_asgt_type_train_statistics_proto_depIdxs = []int32{
	2, // 0: asgt.type.TrainStatistics.target_count:type_name -> asgt.type.TrainStatistics.TargetCountEntry
	3, // 1: asgt.type.TrainStatistics.information_gains:type_name -> asgt.type.TrainStatistics.InformationGainsEntry
	4, // 2: asgt.type.TrainStatistics.InformationGain.feature_gains:type_name -> asgt.type.TrainStatistics.InformationGain.FeatureGainsEntry
	1, // 3: asgt.type.TrainStatistics.InformationGainsEntry.value:type_name -> asgt.type.TrainStatistics.InformationGain
	4, // [4:4] is the sub-list for method output_type
	4, // [4:4] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_asgt_type_train_statistics_proto_init() }
func file_asgt_type_train_statistics_proto_init() {
	if File_asgt_type_train_statistics_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_asgt_type_train_statistics_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TrainStatistics); i {
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
		file_asgt_type_train_statistics_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TrainStatistics_InformationGain); i {
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
			RawDescriptor: file_asgt_type_train_statistics_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_asgt_type_train_statistics_proto_goTypes,
		DependencyIndexes: file_asgt_type_train_statistics_proto_depIdxs,
		MessageInfos:      file_asgt_type_train_statistics_proto_msgTypes,
	}.Build()
	File_asgt_type_train_statistics_proto = out.File
	file_asgt_type_train_statistics_proto_rawDesc = nil
	file_asgt_type_train_statistics_proto_goTypes = nil
	file_asgt_type_train_statistics_proto_depIdxs = nil
}
