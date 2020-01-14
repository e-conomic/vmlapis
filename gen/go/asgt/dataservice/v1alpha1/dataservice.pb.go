// Code generated by protoc-gen-go. DO NOT EDIT.
// source: asgt/dataservice/v1alpha1/dataservice.proto

package dataservice

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import v1alpha1 "github.com/e-conomic/vmlapis/gen/go/asgt/jester/v1alpha1"
import _ "github.com/e-conomic/vmlapis/gen/go/gen_bq_schema"
import empty "github.com/golang/protobuf/ptypes/empty"
import wrappers "github.com/golang/protobuf/ptypes/wrappers"
import _ "google.golang.org/genproto/googleapis/api/annotations"

import (
	context "golang.org/x/net/context"
	grpc "google.golang.org/grpc"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

type Entry struct {
	Id                   string                        `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Consumer             string                        `protobuf:"bytes,2,opt,name=consumer,proto3" json:"consumer,omitempty"`
	User                 string                        `protobuf:"bytes,3,opt,name=user,proto3" json:"user,omitempty"`
	Tags                 []string                      `protobuf:"bytes,4,rep,name=tags,proto3" json:"tags,omitempty"`
	Input                map[string]*FeedbackValue     `protobuf:"bytes,5,rep,name=input,proto3" json:"input,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	TrueValues           map[string]*FeedbackValue     `protobuf:"bytes,6,rep,name=true_values,json=trueValues,proto3" json:"true_values,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	PredictionValues     map[string]*FeedbackValueList `protobuf:"bytes,7,rep,name=prediction_values,json=predictionValues,proto3" json:"prediction_values,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	FeedbackTime         uint64                        `protobuf:"varint,8,opt,name=feedback_time,json=feedbackTime,proto3" json:"feedback_time,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                      `json:"-"`
	XXX_unrecognized     []byte                        `json:"-"`
	XXX_sizecache        int32                         `json:"-"`
}

func (m *Entry) Reset()         { *m = Entry{} }
func (m *Entry) String() string { return proto.CompactTextString(m) }
func (*Entry) ProtoMessage()    {}
func (*Entry) Descriptor() ([]byte, []int) {
	return fileDescriptor_dataservice_cea8d559dc51d3d5, []int{0}
}
func (m *Entry) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Entry.Unmarshal(m, b)
}
func (m *Entry) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Entry.Marshal(b, m, deterministic)
}
func (dst *Entry) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Entry.Merge(dst, src)
}
func (m *Entry) XXX_Size() int {
	return xxx_messageInfo_Entry.Size(m)
}
func (m *Entry) XXX_DiscardUnknown() {
	xxx_messageInfo_Entry.DiscardUnknown(m)
}

var xxx_messageInfo_Entry proto.InternalMessageInfo

func (m *Entry) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *Entry) GetConsumer() string {
	if m != nil {
		return m.Consumer
	}
	return ""
}

func (m *Entry) GetUser() string {
	if m != nil {
		return m.User
	}
	return ""
}

func (m *Entry) GetTags() []string {
	if m != nil {
		return m.Tags
	}
	return nil
}

func (m *Entry) GetInput() map[string]*FeedbackValue {
	if m != nil {
		return m.Input
	}
	return nil
}

func (m *Entry) GetTrueValues() map[string]*FeedbackValue {
	if m != nil {
		return m.TrueValues
	}
	return nil
}

func (m *Entry) GetPredictionValues() map[string]*FeedbackValueList {
	if m != nil {
		return m.PredictionValues
	}
	return nil
}

func (m *Entry) GetFeedbackTime() uint64 {
	if m != nil {
		return m.FeedbackTime
	}
	return 0
}

type FeedbackValue struct {
	// Types that are valid to be assigned to Type:
	//	*FeedbackValue_FeedbackString
	//	*FeedbackValue_FeedbackInt
	//	*FeedbackValue_FeedbackFloat
	Type                 isFeedbackValue_Type `protobuf_oneof:"type"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *FeedbackValue) Reset()         { *m = FeedbackValue{} }
func (m *FeedbackValue) String() string { return proto.CompactTextString(m) }
func (*FeedbackValue) ProtoMessage()    {}
func (*FeedbackValue) Descriptor() ([]byte, []int) {
	return fileDescriptor_dataservice_cea8d559dc51d3d5, []int{1}
}
func (m *FeedbackValue) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_FeedbackValue.Unmarshal(m, b)
}
func (m *FeedbackValue) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_FeedbackValue.Marshal(b, m, deterministic)
}
func (dst *FeedbackValue) XXX_Merge(src proto.Message) {
	xxx_messageInfo_FeedbackValue.Merge(dst, src)
}
func (m *FeedbackValue) XXX_Size() int {
	return xxx_messageInfo_FeedbackValue.Size(m)
}
func (m *FeedbackValue) XXX_DiscardUnknown() {
	xxx_messageInfo_FeedbackValue.DiscardUnknown(m)
}

var xxx_messageInfo_FeedbackValue proto.InternalMessageInfo

type isFeedbackValue_Type interface {
	isFeedbackValue_Type()
}

type FeedbackValue_FeedbackString struct {
	FeedbackString string `protobuf:"bytes,1,opt,name=feedback_string,json=feedbackString,proto3,oneof"`
}

type FeedbackValue_FeedbackInt struct {
	FeedbackInt int32 `protobuf:"varint,2,opt,name=feedback_int,json=feedbackInt,proto3,oneof"`
}

type FeedbackValue_FeedbackFloat struct {
	FeedbackFloat *wrappers.FloatValue `protobuf:"bytes,3,opt,name=feedback_float,json=feedbackFloat,proto3,oneof"`
}

func (*FeedbackValue_FeedbackString) isFeedbackValue_Type() {}

func (*FeedbackValue_FeedbackInt) isFeedbackValue_Type() {}

func (*FeedbackValue_FeedbackFloat) isFeedbackValue_Type() {}

func (m *FeedbackValue) GetType() isFeedbackValue_Type {
	if m != nil {
		return m.Type
	}
	return nil
}

func (m *FeedbackValue) GetFeedbackString() string {
	if x, ok := m.GetType().(*FeedbackValue_FeedbackString); ok {
		return x.FeedbackString
	}
	return ""
}

func (m *FeedbackValue) GetFeedbackInt() int32 {
	if x, ok := m.GetType().(*FeedbackValue_FeedbackInt); ok {
		return x.FeedbackInt
	}
	return 0
}

func (m *FeedbackValue) GetFeedbackFloat() *wrappers.FloatValue {
	if x, ok := m.GetType().(*FeedbackValue_FeedbackFloat); ok {
		return x.FeedbackFloat
	}
	return nil
}

// XXX_OneofFuncs is for the internal use of the proto package.
func (*FeedbackValue) XXX_OneofFuncs() (func(msg proto.Message, b *proto.Buffer) error, func(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error), func(msg proto.Message) (n int), []interface{}) {
	return _FeedbackValue_OneofMarshaler, _FeedbackValue_OneofUnmarshaler, _FeedbackValue_OneofSizer, []interface{}{
		(*FeedbackValue_FeedbackString)(nil),
		(*FeedbackValue_FeedbackInt)(nil),
		(*FeedbackValue_FeedbackFloat)(nil),
	}
}

func _FeedbackValue_OneofMarshaler(msg proto.Message, b *proto.Buffer) error {
	m := msg.(*FeedbackValue)
	// type
	switch x := m.Type.(type) {
	case *FeedbackValue_FeedbackString:
		b.EncodeVarint(1<<3 | proto.WireBytes)
		b.EncodeStringBytes(x.FeedbackString)
	case *FeedbackValue_FeedbackInt:
		b.EncodeVarint(2<<3 | proto.WireVarint)
		b.EncodeVarint(uint64(x.FeedbackInt))
	case *FeedbackValue_FeedbackFloat:
		b.EncodeVarint(3<<3 | proto.WireBytes)
		if err := b.EncodeMessage(x.FeedbackFloat); err != nil {
			return err
		}
	case nil:
	default:
		return fmt.Errorf("FeedbackValue.Type has unexpected type %T", x)
	}
	return nil
}

func _FeedbackValue_OneofUnmarshaler(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error) {
	m := msg.(*FeedbackValue)
	switch tag {
	case 1: // type.feedback_string
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		x, err := b.DecodeStringBytes()
		m.Type = &FeedbackValue_FeedbackString{x}
		return true, err
	case 2: // type.feedback_int
		if wire != proto.WireVarint {
			return true, proto.ErrInternalBadWireType
		}
		x, err := b.DecodeVarint()
		m.Type = &FeedbackValue_FeedbackInt{int32(x)}
		return true, err
	case 3: // type.feedback_float
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		msg := new(wrappers.FloatValue)
		err := b.DecodeMessage(msg)
		m.Type = &FeedbackValue_FeedbackFloat{msg}
		return true, err
	default:
		return false, nil
	}
}

func _FeedbackValue_OneofSizer(msg proto.Message) (n int) {
	m := msg.(*FeedbackValue)
	// type
	switch x := m.Type.(type) {
	case *FeedbackValue_FeedbackString:
		n += 1 // tag and wire
		n += proto.SizeVarint(uint64(len(x.FeedbackString)))
		n += len(x.FeedbackString)
	case *FeedbackValue_FeedbackInt:
		n += 1 // tag and wire
		n += proto.SizeVarint(uint64(x.FeedbackInt))
	case *FeedbackValue_FeedbackFloat:
		s := proto.Size(x.FeedbackFloat)
		n += 1 // tag and wire
		n += proto.SizeVarint(uint64(s))
		n += s
	case nil:
	default:
		panic(fmt.Sprintf("proto: unexpected type %T in oneof", x))
	}
	return n
}

type FeedbackValueList struct {
	Values               []*FeedbackValue `protobuf:"bytes,1,rep,name=values,proto3" json:"values,omitempty"`
	XXX_NoUnkeyedLiteral struct{}         `json:"-"`
	XXX_unrecognized     []byte           `json:"-"`
	XXX_sizecache        int32            `json:"-"`
}

func (m *FeedbackValueList) Reset()         { *m = FeedbackValueList{} }
func (m *FeedbackValueList) String() string { return proto.CompactTextString(m) }
func (*FeedbackValueList) ProtoMessage()    {}
func (*FeedbackValueList) Descriptor() ([]byte, []int) {
	return fileDescriptor_dataservice_cea8d559dc51d3d5, []int{2}
}
func (m *FeedbackValueList) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_FeedbackValueList.Unmarshal(m, b)
}
func (m *FeedbackValueList) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_FeedbackValueList.Marshal(b, m, deterministic)
}
func (dst *FeedbackValueList) XXX_Merge(src proto.Message) {
	xxx_messageInfo_FeedbackValueList.Merge(dst, src)
}
func (m *FeedbackValueList) XXX_Size() int {
	return xxx_messageInfo_FeedbackValueList.Size(m)
}
func (m *FeedbackValueList) XXX_DiscardUnknown() {
	xxx_messageInfo_FeedbackValueList.DiscardUnknown(m)
}

var xxx_messageInfo_FeedbackValueList proto.InternalMessageInfo

func (m *FeedbackValueList) GetValues() []*FeedbackValue {
	if m != nil {
		return m.Values
	}
	return nil
}

type PrepareFeedbackRequest struct {
	Id   string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	User string `protobuf:"bytes,2,opt,name=user,proto3" json:"user,omitempty"`
	// Types that are valid to be assigned to Input:
	//	*PrepareFeedbackRequest_ScannedInvoiceInput
	//	*PrepareFeedbackRequest_ElectronicInvoiceLineInput
	//	*PrepareFeedbackRequest_BankInput
	Input                isPrepareFeedbackRequest_Input `protobuf_oneof:"input"`
	Predictions          []*v1alpha1.Prediction         `protobuf:"bytes,6,rep,name=predictions,proto3" json:"predictions,omitempty"`
	Tags                 []string                       `protobuf:"bytes,7,rep,name=tags,proto3" json:"tags,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                       `json:"-"`
	XXX_unrecognized     []byte                         `json:"-"`
	XXX_sizecache        int32                          `json:"-"`
}

func (m *PrepareFeedbackRequest) Reset()         { *m = PrepareFeedbackRequest{} }
func (m *PrepareFeedbackRequest) String() string { return proto.CompactTextString(m) }
func (*PrepareFeedbackRequest) ProtoMessage()    {}
func (*PrepareFeedbackRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_dataservice_cea8d559dc51d3d5, []int{3}
}
func (m *PrepareFeedbackRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_PrepareFeedbackRequest.Unmarshal(m, b)
}
func (m *PrepareFeedbackRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_PrepareFeedbackRequest.Marshal(b, m, deterministic)
}
func (dst *PrepareFeedbackRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PrepareFeedbackRequest.Merge(dst, src)
}
func (m *PrepareFeedbackRequest) XXX_Size() int {
	return xxx_messageInfo_PrepareFeedbackRequest.Size(m)
}
func (m *PrepareFeedbackRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_PrepareFeedbackRequest.DiscardUnknown(m)
}

var xxx_messageInfo_PrepareFeedbackRequest proto.InternalMessageInfo

func (m *PrepareFeedbackRequest) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *PrepareFeedbackRequest) GetUser() string {
	if m != nil {
		return m.User
	}
	return ""
}

type isPrepareFeedbackRequest_Input interface {
	isPrepareFeedbackRequest_Input()
}

type PrepareFeedbackRequest_ScannedInvoiceInput struct {
	ScannedInvoiceInput *v1alpha1.ScannedInvoiceRequest_Input `protobuf:"bytes,3,opt,name=scanned_invoice_input,json=scannedInvoiceInput,proto3,oneof"`
}

type PrepareFeedbackRequest_ElectronicInvoiceLineInput struct {
	ElectronicInvoiceLineInput *v1alpha1.ElectronicInvoicLineRequest_Input `protobuf:"bytes,4,opt,name=electronic_invoice_line_input,json=electronicInvoiceLineInput,proto3,oneof"`
}

type PrepareFeedbackRequest_BankInput struct {
	BankInput *v1alpha1.BankRequest_Input `protobuf:"bytes,5,opt,name=bank_input,json=bankInput,proto3,oneof"`
}

func (*PrepareFeedbackRequest_ScannedInvoiceInput) isPrepareFeedbackRequest_Input() {}

func (*PrepareFeedbackRequest_ElectronicInvoiceLineInput) isPrepareFeedbackRequest_Input() {}

func (*PrepareFeedbackRequest_BankInput) isPrepareFeedbackRequest_Input() {}

func (m *PrepareFeedbackRequest) GetInput() isPrepareFeedbackRequest_Input {
	if m != nil {
		return m.Input
	}
	return nil
}

func (m *PrepareFeedbackRequest) GetScannedInvoiceInput() *v1alpha1.ScannedInvoiceRequest_Input {
	if x, ok := m.GetInput().(*PrepareFeedbackRequest_ScannedInvoiceInput); ok {
		return x.ScannedInvoiceInput
	}
	return nil
}

func (m *PrepareFeedbackRequest) GetElectronicInvoiceLineInput() *v1alpha1.ElectronicInvoicLineRequest_Input {
	if x, ok := m.GetInput().(*PrepareFeedbackRequest_ElectronicInvoiceLineInput); ok {
		return x.ElectronicInvoiceLineInput
	}
	return nil
}

func (m *PrepareFeedbackRequest) GetBankInput() *v1alpha1.BankRequest_Input {
	if x, ok := m.GetInput().(*PrepareFeedbackRequest_BankInput); ok {
		return x.BankInput
	}
	return nil
}

func (m *PrepareFeedbackRequest) GetPredictions() []*v1alpha1.Prediction {
	if m != nil {
		return m.Predictions
	}
	return nil
}

func (m *PrepareFeedbackRequest) GetTags() []string {
	if m != nil {
		return m.Tags
	}
	return nil
}

// XXX_OneofFuncs is for the internal use of the proto package.
func (*PrepareFeedbackRequest) XXX_OneofFuncs() (func(msg proto.Message, b *proto.Buffer) error, func(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error), func(msg proto.Message) (n int), []interface{}) {
	return _PrepareFeedbackRequest_OneofMarshaler, _PrepareFeedbackRequest_OneofUnmarshaler, _PrepareFeedbackRequest_OneofSizer, []interface{}{
		(*PrepareFeedbackRequest_ScannedInvoiceInput)(nil),
		(*PrepareFeedbackRequest_ElectronicInvoiceLineInput)(nil),
		(*PrepareFeedbackRequest_BankInput)(nil),
	}
}

func _PrepareFeedbackRequest_OneofMarshaler(msg proto.Message, b *proto.Buffer) error {
	m := msg.(*PrepareFeedbackRequest)
	// input
	switch x := m.Input.(type) {
	case *PrepareFeedbackRequest_ScannedInvoiceInput:
		b.EncodeVarint(3<<3 | proto.WireBytes)
		if err := b.EncodeMessage(x.ScannedInvoiceInput); err != nil {
			return err
		}
	case *PrepareFeedbackRequest_ElectronicInvoiceLineInput:
		b.EncodeVarint(4<<3 | proto.WireBytes)
		if err := b.EncodeMessage(x.ElectronicInvoiceLineInput); err != nil {
			return err
		}
	case *PrepareFeedbackRequest_BankInput:
		b.EncodeVarint(5<<3 | proto.WireBytes)
		if err := b.EncodeMessage(x.BankInput); err != nil {
			return err
		}
	case nil:
	default:
		return fmt.Errorf("PrepareFeedbackRequest.Input has unexpected type %T", x)
	}
	return nil
}

func _PrepareFeedbackRequest_OneofUnmarshaler(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error) {
	m := msg.(*PrepareFeedbackRequest)
	switch tag {
	case 3: // input.scanned_invoice_input
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		msg := new(v1alpha1.ScannedInvoiceRequest_Input)
		err := b.DecodeMessage(msg)
		m.Input = &PrepareFeedbackRequest_ScannedInvoiceInput{msg}
		return true, err
	case 4: // input.electronic_invoice_line_input
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		msg := new(v1alpha1.ElectronicInvoicLineRequest_Input)
		err := b.DecodeMessage(msg)
		m.Input = &PrepareFeedbackRequest_ElectronicInvoiceLineInput{msg}
		return true, err
	case 5: // input.bank_input
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		msg := new(v1alpha1.BankRequest_Input)
		err := b.DecodeMessage(msg)
		m.Input = &PrepareFeedbackRequest_BankInput{msg}
		return true, err
	default:
		return false, nil
	}
}

func _PrepareFeedbackRequest_OneofSizer(msg proto.Message) (n int) {
	m := msg.(*PrepareFeedbackRequest)
	// input
	switch x := m.Input.(type) {
	case *PrepareFeedbackRequest_ScannedInvoiceInput:
		s := proto.Size(x.ScannedInvoiceInput)
		n += 1 // tag and wire
		n += proto.SizeVarint(uint64(s))
		n += s
	case *PrepareFeedbackRequest_ElectronicInvoiceLineInput:
		s := proto.Size(x.ElectronicInvoiceLineInput)
		n += 1 // tag and wire
		n += proto.SizeVarint(uint64(s))
		n += s
	case *PrepareFeedbackRequest_BankInput:
		s := proto.Size(x.BankInput)
		n += 1 // tag and wire
		n += proto.SizeVarint(uint64(s))
		n += s
	case nil:
	default:
		panic(fmt.Sprintf("proto: unexpected type %T in oneof", x))
	}
	return n
}

type FeedbackRequest struct {
	Id                   string                    `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Tags                 []string                  `protobuf:"bytes,2,rep,name=tags,proto3" json:"tags,omitempty"`
	TrueValues           map[string]*FeedbackValue `protobuf:"bytes,3,rep,name=true_values,json=trueValues,proto3" json:"true_values,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	XXX_NoUnkeyedLiteral struct{}                  `json:"-"`
	XXX_unrecognized     []byte                    `json:"-"`
	XXX_sizecache        int32                     `json:"-"`
}

func (m *FeedbackRequest) Reset()         { *m = FeedbackRequest{} }
func (m *FeedbackRequest) String() string { return proto.CompactTextString(m) }
func (*FeedbackRequest) ProtoMessage()    {}
func (*FeedbackRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_dataservice_cea8d559dc51d3d5, []int{4}
}
func (m *FeedbackRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_FeedbackRequest.Unmarshal(m, b)
}
func (m *FeedbackRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_FeedbackRequest.Marshal(b, m, deterministic)
}
func (dst *FeedbackRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_FeedbackRequest.Merge(dst, src)
}
func (m *FeedbackRequest) XXX_Size() int {
	return xxx_messageInfo_FeedbackRequest.Size(m)
}
func (m *FeedbackRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_FeedbackRequest.DiscardUnknown(m)
}

var xxx_messageInfo_FeedbackRequest proto.InternalMessageInfo

func (m *FeedbackRequest) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *FeedbackRequest) GetTags() []string {
	if m != nil {
		return m.Tags
	}
	return nil
}

func (m *FeedbackRequest) GetTrueValues() map[string]*FeedbackValue {
	if m != nil {
		return m.TrueValues
	}
	return nil
}

type DeleteRequest struct {
	Tags                 []string `protobuf:"bytes,1,rep,name=tags,proto3" json:"tags,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *DeleteRequest) Reset()         { *m = DeleteRequest{} }
func (m *DeleteRequest) String() string { return proto.CompactTextString(m) }
func (*DeleteRequest) ProtoMessage()    {}
func (*DeleteRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_dataservice_cea8d559dc51d3d5, []int{5}
}
func (m *DeleteRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DeleteRequest.Unmarshal(m, b)
}
func (m *DeleteRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DeleteRequest.Marshal(b, m, deterministic)
}
func (dst *DeleteRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DeleteRequest.Merge(dst, src)
}
func (m *DeleteRequest) XXX_Size() int {
	return xxx_messageInfo_DeleteRequest.Size(m)
}
func (m *DeleteRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_DeleteRequest.DiscardUnknown(m)
}

var xxx_messageInfo_DeleteRequest proto.InternalMessageInfo

func (m *DeleteRequest) GetTags() []string {
	if m != nil {
		return m.Tags
	}
	return nil
}

func init() {
	proto.RegisterType((*Entry)(nil), "asgt.dataservice.v1alpha1.Entry")
	proto.RegisterMapType((map[string]*FeedbackValue)(nil), "asgt.dataservice.v1alpha1.Entry.InputEntry")
	proto.RegisterMapType((map[string]*FeedbackValueList)(nil), "asgt.dataservice.v1alpha1.Entry.PredictionValuesEntry")
	proto.RegisterMapType((map[string]*FeedbackValue)(nil), "asgt.dataservice.v1alpha1.Entry.TrueValuesEntry")
	proto.RegisterType((*FeedbackValue)(nil), "asgt.dataservice.v1alpha1.FeedbackValue")
	proto.RegisterType((*FeedbackValueList)(nil), "asgt.dataservice.v1alpha1.FeedbackValueList")
	proto.RegisterType((*PrepareFeedbackRequest)(nil), "asgt.dataservice.v1alpha1.PrepareFeedbackRequest")
	proto.RegisterType((*FeedbackRequest)(nil), "asgt.dataservice.v1alpha1.FeedbackRequest")
	proto.RegisterMapType((map[string]*FeedbackValue)(nil), "asgt.dataservice.v1alpha1.FeedbackRequest.TrueValuesEntry")
	proto.RegisterType((*DeleteRequest)(nil), "asgt.dataservice.v1alpha1.DeleteRequest")
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// DataServiceClient is the client API for DataService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type DataServiceClient interface {
	PrepareFeedback(ctx context.Context, in *PrepareFeedbackRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	Feedback(ctx context.Context, in *FeedbackRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	// TODO(helvind)
	// rpc AppendDataset(AppendDataRequest) returns (google.protobuf.Empty) {
	//   option (google.api.http) = {
	//     post: "/v1alpha1/feedback:append"
	//     body: "*"
	//   };
	// }
	Delete(ctx context.Context, in *DeleteRequest, opts ...grpc.CallOption) (*empty.Empty, error)
}

type dataServiceClient struct {
	cc *grpc.ClientConn
}

func NewDataServiceClient(cc *grpc.ClientConn) DataServiceClient {
	return &dataServiceClient{cc}
}

func (c *dataServiceClient) PrepareFeedback(ctx context.Context, in *PrepareFeedbackRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/asgt.dataservice.v1alpha1.DataService/PrepareFeedback", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataServiceClient) Feedback(ctx context.Context, in *FeedbackRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/asgt.dataservice.v1alpha1.DataService/Feedback", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataServiceClient) Delete(ctx context.Context, in *DeleteRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/asgt.dataservice.v1alpha1.DataService/Delete", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// DataServiceServer is the server API for DataService service.
type DataServiceServer interface {
	PrepareFeedback(context.Context, *PrepareFeedbackRequest) (*empty.Empty, error)
	Feedback(context.Context, *FeedbackRequest) (*empty.Empty, error)
	// TODO(helvind)
	// rpc AppendDataset(AppendDataRequest) returns (google.protobuf.Empty) {
	//   option (google.api.http) = {
	//     post: "/v1alpha1/feedback:append"
	//     body: "*"
	//   };
	// }
	Delete(context.Context, *DeleteRequest) (*empty.Empty, error)
}

func RegisterDataServiceServer(s *grpc.Server, srv DataServiceServer) {
	s.RegisterService(&_DataService_serviceDesc, srv)
}

func _DataService_PrepareFeedback_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PrepareFeedbackRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataServiceServer).PrepareFeedback(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asgt.dataservice.v1alpha1.DataService/PrepareFeedback",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataServiceServer).PrepareFeedback(ctx, req.(*PrepareFeedbackRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataService_Feedback_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FeedbackRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataServiceServer).Feedback(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asgt.dataservice.v1alpha1.DataService/Feedback",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataServiceServer).Feedback(ctx, req.(*FeedbackRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataService_Delete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataServiceServer).Delete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asgt.dataservice.v1alpha1.DataService/Delete",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataServiceServer).Delete(ctx, req.(*DeleteRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _DataService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "asgt.dataservice.v1alpha1.DataService",
	HandlerType: (*DataServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "PrepareFeedback",
			Handler:    _DataService_PrepareFeedback_Handler,
		},
		{
			MethodName: "Feedback",
			Handler:    _DataService_Feedback_Handler,
		},
		{
			MethodName: "Delete",
			Handler:    _DataService_Delete_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "asgt/dataservice/v1alpha1/dataservice.proto",
}

func init() {
	proto.RegisterFile("asgt/dataservice/v1alpha1/dataservice.proto", fileDescriptor_dataservice_cea8d559dc51d3d5)
}

var fileDescriptor_dataservice_cea8d559dc51d3d5 = []byte{
	// 960 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xbc, 0x56, 0xdd, 0x6e, 0x1b, 0x45,
	0x14, 0xce, 0xfa, 0xaf, 0xf6, 0x18, 0xd7, 0xe9, 0xa0, 0x56, 0x8e, 0x0b, 0xd5, 0x76, 0x0b, 0xaa,
	0x49, 0x23, 0x9b, 0x04, 0xf1, 0x23, 0x5f, 0x60, 0x62, 0xe2, 0xc8, 0x96, 0x5a, 0x29, 0x6c, 0x0c,
	0x17, 0x05, 0x69, 0x35, 0xde, 0x3d, 0x76, 0x06, 0xaf, 0x67, 0x37, 0x3b, 0x63, 0x23, 0x4b, 0x5c,
	0xf1, 0x0a, 0x3c, 0x07, 0xaf, 0xc2, 0x4d, 0x5f, 0x81, 0x0b, 0xe4, 0x57, 0xe0, 0x06, 0xed, 0xcc,
	0xee, 0xfa, 0x27, 0x4e, 0x6a, 0x21, 0xd1, 0x3b, 0xef, 0x39, 0xf3, 0x7d, 0xdf, 0x99, 0x73, 0xe6,
	0x7c, 0x09, 0x7a, 0x41, 0xf8, 0x48, 0x34, 0x1c, 0x22, 0x08, 0x87, 0x60, 0x46, 0x6d, 0x68, 0xcc,
	0x8e, 0x89, 0xeb, 0x5f, 0x91, 0xe3, 0xd5, 0x60, 0xdd, 0x0f, 0x3c, 0xe1, 0xe1, 0x83, 0xf0, 0x70,
	0x7d, 0x35, 0x1e, 0x1f, 0xae, 0x3e, 0x95, 0x3c, 0x3f, 0x03, 0x17, 0x10, 0x2c, 0x29, 0xd4, 0xb7,
	0x42, 0x57, 0x3f, 0x18, 0x01, 0xb3, 0x06, 0xd7, 0x16, 0xb7, 0xaf, 0x60, 0x42, 0x1a, 0x83, 0x6b,
	0x6b, 0x48, 0xc1, 0x75, 0x6e, 0xcd, 0x0a, 0x32, 0x70, 0x21, 0xc9, 0x7a, 0xde, 0xc8, 0x85, 0x06,
	0xf1, 0x69, 0x83, 0x30, 0xe6, 0x09, 0x22, 0xa8, 0xc7, 0x78, 0x94, 0x7d, 0x1c, 0x65, 0xe5, 0xd7,
	0x60, 0x3a, 0x6c, 0xc0, 0xc4, 0x17, 0xf3, 0x28, 0xf9, 0x64, 0x33, 0xf9, 0x4b, 0x40, 0x7c, 0x1f,
	0x82, 0x08, 0x6c, 0xfc, 0x9d, 0x43, 0xd9, 0x0e, 0x13, 0xc1, 0x1c, 0xb7, 0x50, 0x8a, 0x3a, 0x15,
	0x4d, 0xd7, 0x6a, 0x85, 0x76, 0x63, 0xd1, 0x7a, 0x6e, 0x7c, 0x7c, 0x0e, 0xe0, 0x0c, 0x88, 0x3d,
	0xd6, 0x7b, 0x67, 0x47, 0x3a, 0x27, 0x13, 0xd0, 0x09, 0xd7, 0x3b, 0x6c, 0xe6, 0xcd, 0xf5, 0x00,
	0xae, 0xa7, 0xc0, 0x85, 0x4e, 0x9d, 0x45, 0x2b, 0x95, 0xd7, 0xcc, 0x14, 0x75, 0xf0, 0x53, 0x94,
	0xb7, 0x3d, 0xc6, 0xa7, 0x13, 0x08, 0x2a, 0x29, 0x49, 0x93, 0x55, 0xc9, 0x24, 0x8c, 0x0f, 0x50,
	0x66, 0xca, 0x21, 0xa8, 0xa4, 0x57, 0xd3, 0x32, 0x84, 0x5f, 0xa3, 0x8c, 0x20, 0x23, 0x5e, 0xc9,
	0xe8, 0xe9, 0x5a, 0xa1, 0x7d, 0xbe, 0x68, 0x7d, 0x6b, 0x9c, 0xf6, 0xc9, 0x88, 0xeb, 0x0e, 0x0c,
	0x29, 0x03, 0x47, 0x1f, 0xcc, 0xf5, 0x98, 0xe7, 0x48, 0x07, 0x16, 0x50, 0xfb, 0x4a, 0x45, 0xa3,
	0x69, 0xe8, 0x74, 0xa8, 0xcf, 0x88, 0x0b, 0x62, 0x0c, 0x73, 0x9d, 0x72, 0x7d, 0xca, 0xc1, 0x31,
	0x25, 0x27, 0x3e, 0x45, 0x59, 0xca, 0xfc, 0xa9, 0xa8, 0x64, 0xf5, 0x74, 0xad, 0x78, 0xf2, 0xa2,
	0x7e, 0xeb, 0x24, 0xeb, 0xb2, 0x17, 0xf5, 0x5e, 0x78, 0x5a, 0xfe, 0x34, 0x15, 0x12, 0x7f, 0x87,
	0x8a, 0x22, 0x98, 0x82, 0x35, 0x23, 0xee, 0x14, 0x78, 0x25, 0x27, 0x89, 0x3e, 0x7d, 0x2b, 0x51,
	0x3f, 0x98, 0xc2, 0x0f, 0x12, 0xa2, 0xd8, 0x90, 0x48, 0x02, 0xd8, 0x46, 0x0f, 0xfc, 0x00, 0x1c,
	0x6a, 0x87, 0xc3, 0x8c, 0x89, 0xef, 0x49, 0xe2, 0x2f, 0xde, 0x4a, 0x7c, 0x91, 0x20, 0x57, 0xe9,
	0xf7, 0xfd, 0x8d, 0x30, 0xfe, 0x1c, 0x95, 0x86, 0xd1, 0x18, 0x2d, 0x41, 0x27, 0x50, 0xc9, 0xeb,
	0x5a, 0x2d, 0xd3, 0xde, 0x5f, 0xb4, 0x4a, 0x79, 0x0d, 0x17, 0xfa, 0xbd, 0x57, 0x9d, 0xcb, 0xfe,
	0xe9, 0xab, 0x0b, 0xf3, 0xbd, 0xf8, 0x58, 0x9f, 0x4e, 0xa0, 0x3a, 0x40, 0x68, 0xd9, 0x03, 0xbc,
	0x8f, 0xd2, 0x63, 0x98, 0xab, 0xb7, 0x61, 0x86, 0x3f, 0xf1, 0xd7, 0x28, 0x2b, 0x0b, 0x96, 0x83,
	0x2e, 0x9e, 0xd4, 0xee, 0xa8, 0x37, 0x7e, 0x45, 0xb2, 0x20, 0x53, 0xc1, 0x9a, 0xa9, 0xaf, 0xb4,
	0xea, 0x08, 0x95, 0x37, 0xda, 0xf3, 0x3f, 0x09, 0x5d, 0xa3, 0x87, 0x5b, 0xdb, 0xb5, 0x45, 0xae,
	0xbd, 0x2e, 0x77, 0xb4, 0xab, 0xdc, 0x4b, 0xca, 0xc5, 0x8a, 0x64, 0x13, 0x2f, 0x5a, 0x65, 0x54,
	0x12, 0x01, 0xa1, 0x8c, 0xb2, 0x91, 0x15, 0x12, 0x18, 0x7f, 0x68, 0xa8, 0xb4, 0x06, 0xc2, 0x9f,
	0xa0, 0x72, 0x32, 0x1c, 0x2e, 0x02, 0xca, 0x46, 0xaa, 0x96, 0xee, 0x9e, 0x79, 0x3f, 0x4e, 0x5c,
	0xca, 0x38, 0x7e, 0x86, 0x92, 0x01, 0x59, 0x94, 0x09, 0x59, 0x5f, 0xb6, 0xbb, 0x67, 0x16, 0xe3,
	0x68, 0x8f, 0x09, 0x7c, 0x86, 0x12, 0x98, 0x35, 0x74, 0x3d, 0x22, 0xe4, 0xa2, 0x15, 0x4f, 0x1e,
	0xd7, 0x95, 0x0b, 0xd4, 0x63, 0x17, 0xa8, 0x9f, 0x87, 0x59, 0x59, 0x44, 0x77, 0xcf, 0x4c, 0x5e,
	0x88, 0x8c, 0xb6, 0x73, 0x28, 0x23, 0xe6, 0x3e, 0x18, 0xdf, 0xa3, 0x07, 0x37, 0xee, 0x88, 0xbf,
	0x41, 0xb9, 0xe8, 0xa5, 0x6a, 0xf2, 0xa5, 0xee, 0x3e, 0x90, 0x08, 0x67, 0xfc, 0x99, 0x46, 0x8f,
	0x2e, 0x02, 0xf0, 0x49, 0x00, 0xf1, 0x01, 0x53, 0xb9, 0x09, 0xbe, 0xbf, 0xb4, 0x20, 0xe9, 0x28,
	0x38, 0xb2, 0x0b, 0xe9, 0x26, 0x91, 0x4f, 0x8c, 0xd0, 0x43, 0x6e, 0x13, 0xc6, 0xc0, 0xb1, 0x28,
	0x9b, 0x79, 0xd4, 0x06, 0x4b, 0xed, 0xb6, 0xba, 0xea, 0xb1, 0xaa, 0x27, 0xb2, 0xde, 0xa4, 0x94,
	0x4b, 0x05, 0xe9, 0x29, 0x44, 0xa4, 0xa7, 0xd6, 0xbc, 0xbb, 0x67, 0xbe, 0xcf, 0xd7, 0xd2, 0x32,
	0x8c, 0x7f, 0x45, 0x1f, 0x82, 0x0b, 0xb6, 0x08, 0x3c, 0x46, 0xed, 0x44, 0xcb, 0xa5, 0x2c, 0x16,
	0xcc, 0x48, 0xc1, 0x2f, 0xb7, 0x0b, 0x76, 0x12, 0xa8, 0x22, 0x7d, 0x49, 0xd9, 0x0d, 0xd9, 0x2a,
	0x6c, 0x1c, 0x82, 0xf0, 0x94, 0x52, 0xef, 0x22, 0x34, 0x20, 0x6c, 0x6c, 0xc5, 0xbe, 0x15, 0x4a,
	0x3d, 0xdf, 0x2e, 0xd5, 0x26, 0x6c, 0xbc, 0x49, 0x5d, 0x08, 0xc1, 0x8a, 0xa9, 0x8d, 0x8a, 0x4b,
	0x57, 0x88, 0x9d, 0x4b, 0xdf, 0x4e, 0xb5, 0x5c, 0x13, 0x73, 0x15, 0x14, 0x0e, 0x42, 0x9a, 0x73,
	0xe8, 0x4e, 0x05, 0x65, 0xaa, 0xed, 0x7b, 0x91, 0xa9, 0x1a, 0xff, 0x68, 0xa8, 0xbc, 0xc3, 0x24,
	0x25, 0x41, 0x6a, 0x49, 0x80, 0x7f, 0x5c, 0xb7, 0xd4, 0xb4, 0x2c, 0xac, 0xb9, 0xc3, 0x7b, 0x8a,
	0x2f, 0x7b, 0x87, 0xb9, 0xbe, 0x33, 0x73, 0x31, 0x9e, 0xa1, 0xd2, 0x19, 0xb8, 0x20, 0xe2, 0xe9,
	0x26, 0x57, 0xd5, 0x96, 0x57, 0x3d, 0x79, 0x93, 0x42, 0xc5, 0x33, 0x22, 0xc8, 0xa5, 0xa2, 0xc5,
	0x3f, 0xa1, 0xf2, 0xc6, 0x0a, 0xe0, 0xe3, 0x3b, 0xc4, 0xb7, 0xaf, 0x4b, 0xf5, 0xd1, 0x8d, 0xb5,
	0xee, 0x84, 0x7f, 0xf9, 0xb1, 0x40, 0xf9, 0x84, 0xf6, 0x70, 0xf7, 0x7e, 0xde, 0xc6, 0x67, 0x7c,
	0xf4, 0xdb, 0x9b, 0xbf, 0x7e, 0x4f, 0x3d, 0x31, 0x0e, 0x96, 0xff, 0xda, 0xc4, 0x8e, 0xd1, 0xb4,
	0x03, 0x20, 0x02, 0x9a, 0xda, 0x21, 0xf6, 0x51, 0x4e, 0x35, 0x02, 0xdf, 0xd5, 0xc7, 0xb5, 0x5e,
	0xfd, 0x27, 0x45, 0x47, 0x32, 0x34, 0xb5, 0xc3, 0x76, 0xe9, 0x75, 0x71, 0x45, 0x63, 0x90, 0x93,
	0x24, 0x9f, 0xfd, 0x1b, 0x00, 0x00, 0xff, 0xff, 0x58, 0x22, 0x05, 0xcd, 0xd5, 0x09, 0x00, 0x00,
}