// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.33.0
// 	protoc        (unknown)
// source: asgt/type/target_metrics.proto

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

type TargetMetrics struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Target  string                  `protobuf:"bytes,1,opt,name=target,proto3" json:"target,omitempty"`
	Metrics []*TargetMetrics_Metric `protobuf:"bytes,2,rep,name=metrics,proto3" json:"metrics,omitempty"`
}

func (x *TargetMetrics) Reset() {
	*x = TargetMetrics{}
	if protoimpl.UnsafeEnabled {
		mi := &file_asgt_type_target_metrics_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TargetMetrics) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TargetMetrics) ProtoMessage() {}

func (x *TargetMetrics) ProtoReflect() protoreflect.Message {
	mi := &file_asgt_type_target_metrics_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TargetMetrics.ProtoReflect.Descriptor instead.
func (*TargetMetrics) Descriptor() ([]byte, []int) {
	return file_asgt_type_target_metrics_proto_rawDescGZIP(), []int{0}
}

func (x *TargetMetrics) GetTarget() string {
	if x != nil {
		return x.Target
	}
	return ""
}

func (x *TargetMetrics) GetMetrics() []*TargetMetrics_Metric {
	if x != nil {
		return x.Metrics
	}
	return nil
}

type TargetMetrics_Metric struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Precision     float32 `protobuf:"fixed32,1,opt,name=precision,proto3" json:"precision,omitempty"`
	Confidence    float32 `protobuf:"fixed32,2,opt,name=confidence,proto3" json:"confidence,omitempty"`
	AnswerRate    float32 `protobuf:"fixed32,3,opt,name=answer_rate,json=answerRate,proto3" json:"answer_rate,omitempty"`
	TruePositive  int32   `protobuf:"varint,4,opt,name=true_positive,json=truePositive,proto3" json:"true_positive,omitempty"`
	TrueNegative  int32   `protobuf:"varint,5,opt,name=true_negative,json=trueNegative,proto3" json:"true_negative,omitempty"`
	FalsePositive int32   `protobuf:"varint,6,opt,name=false_positive,json=falsePositive,proto3" json:"false_positive,omitempty"`
	FalseNegative int32   `protobuf:"varint,7,opt,name=false_negative,json=falseNegative,proto3" json:"false_negative,omitempty"`
	// Matthews correlation coefficient
	Mcc              float32 `protobuf:"fixed32,8,opt,name=mcc,proto3" json:"mcc,omitempty"`
	Accuracy         float32 `protobuf:"fixed32,9,opt,name=accuracy,proto3" json:"accuracy,omitempty"`
	BalancedAccuracy float32 `protobuf:"fixed32,10,opt,name=balanced_accuracy,json=balancedAccuracy,proto3" json:"balanced_accuracy,omitempty"`
}

func (x *TargetMetrics_Metric) Reset() {
	*x = TargetMetrics_Metric{}
	if protoimpl.UnsafeEnabled {
		mi := &file_asgt_type_target_metrics_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TargetMetrics_Metric) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TargetMetrics_Metric) ProtoMessage() {}

func (x *TargetMetrics_Metric) ProtoReflect() protoreflect.Message {
	mi := &file_asgt_type_target_metrics_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TargetMetrics_Metric.ProtoReflect.Descriptor instead.
func (*TargetMetrics_Metric) Descriptor() ([]byte, []int) {
	return file_asgt_type_target_metrics_proto_rawDescGZIP(), []int{0, 0}
}

func (x *TargetMetrics_Metric) GetPrecision() float32 {
	if x != nil {
		return x.Precision
	}
	return 0
}

func (x *TargetMetrics_Metric) GetConfidence() float32 {
	if x != nil {
		return x.Confidence
	}
	return 0
}

func (x *TargetMetrics_Metric) GetAnswerRate() float32 {
	if x != nil {
		return x.AnswerRate
	}
	return 0
}

func (x *TargetMetrics_Metric) GetTruePositive() int32 {
	if x != nil {
		return x.TruePositive
	}
	return 0
}

func (x *TargetMetrics_Metric) GetTrueNegative() int32 {
	if x != nil {
		return x.TrueNegative
	}
	return 0
}

func (x *TargetMetrics_Metric) GetFalsePositive() int32 {
	if x != nil {
		return x.FalsePositive
	}
	return 0
}

func (x *TargetMetrics_Metric) GetFalseNegative() int32 {
	if x != nil {
		return x.FalseNegative
	}
	return 0
}

func (x *TargetMetrics_Metric) GetMcc() float32 {
	if x != nil {
		return x.Mcc
	}
	return 0
}

func (x *TargetMetrics_Metric) GetAccuracy() float32 {
	if x != nil {
		return x.Accuracy
	}
	return 0
}

func (x *TargetMetrics_Metric) GetBalancedAccuracy() float32 {
	if x != nil {
		return x.BalancedAccuracy
	}
	return 0
}

var File_asgt_type_target_metrics_proto protoreflect.FileDescriptor

var file_asgt_type_target_metrics_proto_rawDesc = []byte{
	0x0a, 0x1e, 0x61, 0x73, 0x67, 0x74, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x2f, 0x74, 0x61, 0x72, 0x67,
	0x65, 0x74, 0x5f, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x12, 0x09, 0x61, 0x73, 0x67, 0x74, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x22, 0xd1, 0x03, 0x0a, 0x0d,
	0x54, 0x61, 0x72, 0x67, 0x65, 0x74, 0x4d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x12, 0x16, 0x0a,
	0x06, 0x74, 0x61, 0x72, 0x67, 0x65, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x74,
	0x61, 0x72, 0x67, 0x65, 0x74, 0x12, 0x39, 0x0a, 0x07, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73,
	0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1f, 0x2e, 0x61, 0x73, 0x67, 0x74, 0x2e, 0x74, 0x79,
	0x70, 0x65, 0x2e, 0x54, 0x61, 0x72, 0x67, 0x65, 0x74, 0x4d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73,
	0x2e, 0x4d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x52, 0x07, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73,
	0x1a, 0xda, 0x02, 0x0a, 0x06, 0x4d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x12, 0x1c, 0x0a, 0x09, 0x70,
	0x72, 0x65, 0x63, 0x69, 0x73, 0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x02, 0x52, 0x09,
	0x70, 0x72, 0x65, 0x63, 0x69, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x1e, 0x0a, 0x0a, 0x63, 0x6f, 0x6e,
	0x66, 0x69, 0x64, 0x65, 0x6e, 0x63, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x02, 0x52, 0x0a, 0x63,
	0x6f, 0x6e, 0x66, 0x69, 0x64, 0x65, 0x6e, 0x63, 0x65, 0x12, 0x1f, 0x0a, 0x0b, 0x61, 0x6e, 0x73,
	0x77, 0x65, 0x72, 0x5f, 0x72, 0x61, 0x74, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x02, 0x52, 0x0a,
	0x61, 0x6e, 0x73, 0x77, 0x65, 0x72, 0x52, 0x61, 0x74, 0x65, 0x12, 0x23, 0x0a, 0x0d, 0x74, 0x72,
	0x75, 0x65, 0x5f, 0x70, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x76, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28,
	0x05, 0x52, 0x0c, 0x74, 0x72, 0x75, 0x65, 0x50, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x76, 0x65, 0x12,
	0x23, 0x0a, 0x0d, 0x74, 0x72, 0x75, 0x65, 0x5f, 0x6e, 0x65, 0x67, 0x61, 0x74, 0x69, 0x76, 0x65,
	0x18, 0x05, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0c, 0x74, 0x72, 0x75, 0x65, 0x4e, 0x65, 0x67, 0x61,
	0x74, 0x69, 0x76, 0x65, 0x12, 0x25, 0x0a, 0x0e, 0x66, 0x61, 0x6c, 0x73, 0x65, 0x5f, 0x70, 0x6f,
	0x73, 0x69, 0x74, 0x69, 0x76, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0d, 0x66, 0x61,
	0x6c, 0x73, 0x65, 0x50, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x76, 0x65, 0x12, 0x25, 0x0a, 0x0e, 0x66,
	0x61, 0x6c, 0x73, 0x65, 0x5f, 0x6e, 0x65, 0x67, 0x61, 0x74, 0x69, 0x76, 0x65, 0x18, 0x07, 0x20,
	0x01, 0x28, 0x05, 0x52, 0x0d, 0x66, 0x61, 0x6c, 0x73, 0x65, 0x4e, 0x65, 0x67, 0x61, 0x74, 0x69,
	0x76, 0x65, 0x12, 0x10, 0x0a, 0x03, 0x6d, 0x63, 0x63, 0x18, 0x08, 0x20, 0x01, 0x28, 0x02, 0x52,
	0x03, 0x6d, 0x63, 0x63, 0x12, 0x1a, 0x0a, 0x08, 0x61, 0x63, 0x63, 0x75, 0x72, 0x61, 0x63, 0x79,
	0x18, 0x09, 0x20, 0x01, 0x28, 0x02, 0x52, 0x08, 0x61, 0x63, 0x63, 0x75, 0x72, 0x61, 0x63, 0x79,
	0x12, 0x2b, 0x0a, 0x11, 0x62, 0x61, 0x6c, 0x61, 0x6e, 0x63, 0x65, 0x64, 0x5f, 0x61, 0x63, 0x63,
	0x75, 0x72, 0x61, 0x63, 0x79, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x02, 0x52, 0x10, 0x62, 0x61, 0x6c,
	0x61, 0x6e, 0x63, 0x65, 0x64, 0x41, 0x63, 0x63, 0x75, 0x72, 0x61, 0x63, 0x79, 0x4a, 0x04, 0x08,
	0x03, 0x10, 0x04, 0x4a, 0x04, 0x08, 0x04, 0x10, 0x05, 0x4a, 0x04, 0x08, 0x05, 0x10, 0x06, 0x42,
	0xa5, 0x01, 0x0a, 0x12, 0x61, 0x69, 0x2e, 0x76, 0x69, 0x73, 0x6d, 0x61, 0x2e, 0x61, 0x73, 0x67,
	0x74, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x42, 0x12, 0x54, 0x61, 0x72, 0x67, 0x65, 0x74, 0x4d, 0x65,
	0x74, 0x72, 0x69, 0x63, 0x73, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x36, 0x67, 0x69,
	0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x65, 0x2d, 0x63, 0x6f, 0x6e, 0x6f, 0x6d,
	0x69, 0x63, 0x2f, 0x76, 0x6d, 0x6c, 0x61, 0x70, 0x69, 0x73, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67,
	0x6f, 0x2f, 0x61, 0x73, 0x67, 0x74, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x3b, 0x61, 0x73, 0x67, 0x74,
	0x74, 0x79, 0x70, 0x65, 0xa2, 0x02, 0x03, 0x41, 0x54, 0x58, 0xaa, 0x02, 0x09, 0x41, 0x73, 0x67,
	0x74, 0x2e, 0x54, 0x79, 0x70, 0x65, 0xca, 0x02, 0x09, 0x41, 0x73, 0x67, 0x74, 0x5c, 0x54, 0x79,
	0x70, 0x65, 0xe2, 0x02, 0x15, 0x41, 0x73, 0x67, 0x74, 0x5c, 0x54, 0x79, 0x70, 0x65, 0x5c, 0x47,
	0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x0a, 0x41, 0x73, 0x67,
	0x74, 0x3a, 0x3a, 0x54, 0x79, 0x70, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_asgt_type_target_metrics_proto_rawDescOnce sync.Once
	file_asgt_type_target_metrics_proto_rawDescData = file_asgt_type_target_metrics_proto_rawDesc
)

func file_asgt_type_target_metrics_proto_rawDescGZIP() []byte {
	file_asgt_type_target_metrics_proto_rawDescOnce.Do(func() {
		file_asgt_type_target_metrics_proto_rawDescData = protoimpl.X.CompressGZIP(file_asgt_type_target_metrics_proto_rawDescData)
	})
	return file_asgt_type_target_metrics_proto_rawDescData
}

var file_asgt_type_target_metrics_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_asgt_type_target_metrics_proto_goTypes = []interface{}{
	(*TargetMetrics)(nil),        // 0: asgt.type.TargetMetrics
	(*TargetMetrics_Metric)(nil), // 1: asgt.type.TargetMetrics.Metric
}
var file_asgt_type_target_metrics_proto_depIdxs = []int32{
	1, // 0: asgt.type.TargetMetrics.metrics:type_name -> asgt.type.TargetMetrics.Metric
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_asgt_type_target_metrics_proto_init() }
func file_asgt_type_target_metrics_proto_init() {
	if File_asgt_type_target_metrics_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_asgt_type_target_metrics_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TargetMetrics); i {
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
		file_asgt_type_target_metrics_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TargetMetrics_Metric); i {
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
			RawDescriptor: file_asgt_type_target_metrics_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_asgt_type_target_metrics_proto_goTypes,
		DependencyIndexes: file_asgt_type_target_metrics_proto_depIdxs,
		MessageInfos:      file_asgt_type_target_metrics_proto_msgTypes,
	}.Build()
	File_asgt_type_target_metrics_proto = out.File
	file_asgt_type_target_metrics_proto_rawDesc = nil
	file_asgt_type_target_metrics_proto_goTypes = nil
	file_asgt_type_target_metrics_proto_depIdxs = nil
}
