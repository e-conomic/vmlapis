// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.31.0
// 	protoc        (unknown)
// source: ssn/type/candidate.proto

package ssntype

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	wrapperspb "google.golang.org/protobuf/types/known/wrapperspb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Confidence_Level int32

const (
	Confidence_UNKNOWN   Confidence_Level = 0
	Confidence_VERY_LOW  Confidence_Level = 1
	Confidence_LOW       Confidence_Level = 2
	Confidence_MID       Confidence_Level = 3
	Confidence_HIGH      Confidence_Level = 4
	Confidence_VERY_HIGH Confidence_Level = 5
)

// Enum value maps for Confidence_Level.
var (
	Confidence_Level_name = map[int32]string{
		0: "UNKNOWN",
		1: "VERY_LOW",
		2: "LOW",
		3: "MID",
		4: "HIGH",
		5: "VERY_HIGH",
	}
	Confidence_Level_value = map[string]int32{
		"UNKNOWN":   0,
		"VERY_LOW":  1,
		"LOW":       2,
		"MID":       3,
		"HIGH":      4,
		"VERY_HIGH": 5,
	}
)

func (x Confidence_Level) Enum() *Confidence_Level {
	p := new(Confidence_Level)
	*p = x
	return p
}

func (x Confidence_Level) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Confidence_Level) Descriptor() protoreflect.EnumDescriptor {
	return file_ssn_type_candidate_proto_enumTypes[0].Descriptor()
}

func (Confidence_Level) Type() protoreflect.EnumType {
	return &file_ssn_type_candidate_proto_enumTypes[0]
}

func (x Confidence_Level) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Confidence_Level.Descriptor instead.
func (Confidence_Level) EnumDescriptor() ([]byte, []int) {
	return file_ssn_type_candidate_proto_rawDescGZIP(), []int{0, 0}
}

type Candidate_Type int32

const (
	Candidate_UNKNOWN  Candidate_Type = 0
	Candidate_FIELD    Candidate_Type = 1
	Candidate_DOCUMENT Candidate_Type = 2
)

// Enum value maps for Candidate_Type.
var (
	Candidate_Type_name = map[int32]string{
		0: "UNKNOWN",
		1: "FIELD",
		2: "DOCUMENT",
	}
	Candidate_Type_value = map[string]int32{
		"UNKNOWN":  0,
		"FIELD":    1,
		"DOCUMENT": 2,
	}
)

func (x Candidate_Type) Enum() *Candidate_Type {
	p := new(Candidate_Type)
	*p = x
	return p
}

func (x Candidate_Type) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Candidate_Type) Descriptor() protoreflect.EnumDescriptor {
	return file_ssn_type_candidate_proto_enumTypes[1].Descriptor()
}

func (Candidate_Type) Type() protoreflect.EnumType {
	return &file_ssn_type_candidate_proto_enumTypes[1]
}

func (x Candidate_Type) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Candidate_Type.Descriptor instead.
func (Candidate_Type) EnumDescriptor() ([]byte, []int) {
	return file_ssn_type_candidate_proto_rawDescGZIP(), []int{1, 0}
}

type Confidence struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// A bucketized representation of confidence, which is intended to give clients
	// highly stable results across model upgrades.
	Level Confidence_Level `protobuf:"varint,1,opt,name=level,proto3,enum=ssn.type.Confidence_Level" json:"level,omitempty"`
	// The confidence value
	Value *wrapperspb.FloatValue `protobuf:"bytes,2,opt,name=value,proto3" json:"value,omitempty"`
}

func (x *Confidence) Reset() {
	*x = Confidence{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ssn_type_candidate_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Confidence) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Confidence) ProtoMessage() {}

func (x *Confidence) ProtoReflect() protoreflect.Message {
	mi := &file_ssn_type_candidate_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Confidence.ProtoReflect.Descriptor instead.
func (*Confidence) Descriptor() ([]byte, []int) {
	return file_ssn_type_candidate_proto_rawDescGZIP(), []int{0}
}

func (x *Confidence) GetLevel() Confidence_Level {
	if x != nil {
		return x.Level
	}
	return Confidence_UNKNOWN
}

func (x *Confidence) GetValue() *wrapperspb.FloatValue {
	if x != nil {
		return x.Value
	}
	return nil
}

type Candidate struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Normalized value 01-01-2019
	Value string `protobuf:"bytes,1,opt,name=value,proto3" json:"value,omitempty"`
	// The text as found on the document "1. Jan"
	// useful for overlays
	Text string `protobuf:"bytes,2,opt,name=text,proto3" json:"text,omitempty"`
	// Confidence
	Confidence *Confidence `protobuf:"bytes,3,opt,name=confidence,proto3" json:"confidence,omitempty"`
	// The bounding box for the block.
	// The vertices are in the order of top-left, top-right, bottom-right,
	// bottom-left. When a rotation of the bounding box is detected the rotation
	// is represented as around the top-left corner as defined when the text is
	// read in the 'natural' orientation.
	// For example:
	//
	// * when the text is horizontal it might look like:
	//
	//	0----1
	//	|    |
	//	3----2
	//
	// * when it's rotated 180 degrees around the top-left corner it becomes:
	//
	//	      2----3
	//	      |    |
	//	      1----0
	//
	//	and the vertex order will still be (0, 1, 2, 3).
	BoundingBox *BoundingPoly `protobuf:"bytes,4,opt,name=bounding_box,json=boundingBox,proto3" json:"bounding_box,omitempty"`
	// Indicate the type of the candidate
	Type Candidate_Type `protobuf:"varint,5,opt,name=type,proto3,enum=ssn.type.Candidate_Type" json:"type,omitempty"`
	// A reference to the page where the candidate was found.
	// page_ref start from 1.
	PageRef uint32 `protobuf:"varint,6,opt,name=page_ref,json=pageRef,proto3" json:"page_ref,omitempty"`
	// Model spec of the TensorFlow Serving model that predicted this candidate
	ModelMetadata *ModelSpec `protobuf:"bytes,7,opt,name=model_metadata,json=modelMetadata,proto3" json:"model_metadata,omitempty"`
}

func (x *Candidate) Reset() {
	*x = Candidate{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ssn_type_candidate_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Candidate) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Candidate) ProtoMessage() {}

func (x *Candidate) ProtoReflect() protoreflect.Message {
	mi := &file_ssn_type_candidate_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Candidate.ProtoReflect.Descriptor instead.
func (*Candidate) Descriptor() ([]byte, []int) {
	return file_ssn_type_candidate_proto_rawDescGZIP(), []int{1}
}

func (x *Candidate) GetValue() string {
	if x != nil {
		return x.Value
	}
	return ""
}

func (x *Candidate) GetText() string {
	if x != nil {
		return x.Text
	}
	return ""
}

func (x *Candidate) GetConfidence() *Confidence {
	if x != nil {
		return x.Confidence
	}
	return nil
}

func (x *Candidate) GetBoundingBox() *BoundingPoly {
	if x != nil {
		return x.BoundingBox
	}
	return nil
}

func (x *Candidate) GetType() Candidate_Type {
	if x != nil {
		return x.Type
	}
	return Candidate_UNKNOWN
}

func (x *Candidate) GetPageRef() uint32 {
	if x != nil {
		return x.PageRef
	}
	return 0
}

func (x *Candidate) GetModelMetadata() *ModelSpec {
	if x != nil {
		return x.ModelMetadata
	}
	return nil
}

type ModelSpec struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name of the TensorFlow Serving model
	ModelName string `protobuf:"bytes,1,opt,name=model_name,json=modelName,proto3" json:"model_name,omitempty"`
	// The version number of the TensorFlow Serving model
	ModelVer *wrapperspb.Int64Value `protobuf:"bytes,2,opt,name=model_ver,json=modelVer,proto3" json:"model_ver,omitempty"`
}

func (x *ModelSpec) Reset() {
	*x = ModelSpec{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ssn_type_candidate_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ModelSpec) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ModelSpec) ProtoMessage() {}

func (x *ModelSpec) ProtoReflect() protoreflect.Message {
	mi := &file_ssn_type_candidate_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ModelSpec.ProtoReflect.Descriptor instead.
func (*ModelSpec) Descriptor() ([]byte, []int) {
	return file_ssn_type_candidate_proto_rawDescGZIP(), []int{2}
}

func (x *ModelSpec) GetModelName() string {
	if x != nil {
		return x.ModelName
	}
	return ""
}

func (x *ModelSpec) GetModelVer() *wrapperspb.Int64Value {
	if x != nil {
		return x.ModelVer
	}
	return nil
}

type LineCandidate struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Text of the line without the amount
	// Example: "3 Dark and Stormy"
	Text string `protobuf:"bytes,1,opt,name=text,proto3" json:"text,omitempty"`
	// Normalized amount (price) of the line
	// Example: 300.0
	Amount float64 `protobuf:"fixed64,2,opt,name=amount,proto3" json:"amount,omitempty"`
	// A reference to the page where the line was found.
	// page_ref start from 1.
	PageRef uint32 `protobuf:"varint,6,opt,name=page_ref,json=pageRef,proto3" json:"page_ref,omitempty"`
}

func (x *LineCandidate) Reset() {
	*x = LineCandidate{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ssn_type_candidate_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *LineCandidate) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*LineCandidate) ProtoMessage() {}

func (x *LineCandidate) ProtoReflect() protoreflect.Message {
	mi := &file_ssn_type_candidate_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use LineCandidate.ProtoReflect.Descriptor instead.
func (*LineCandidate) Descriptor() ([]byte, []int) {
	return file_ssn_type_candidate_proto_rawDescGZIP(), []int{3}
}

func (x *LineCandidate) GetText() string {
	if x != nil {
		return x.Text
	}
	return ""
}

func (x *LineCandidate) GetAmount() float64 {
	if x != nil {
		return x.Amount
	}
	return 0
}

func (x *LineCandidate) GetPageRef() uint32 {
	if x != nil {
		return x.PageRef
	}
	return 0
}

type PurchaseLineCandidate struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// A reference to the page where the line was found.
	// page_ref start from 1.
	PageRef uint32 `protobuf:"varint,1,opt,name=page_ref,json=pageRef,proto3" json:"page_ref,omitempty"`
	// Code is an ID that supplier uses to identify the item
	Code string `protobuf:"bytes,2,opt,name=code,proto3" json:"code,omitempty"`
	// Description is a piece of text that describes the item
	Description string `protobuf:"bytes,3,opt,name=description,proto3" json:"description,omitempty"`
	// Quantity is the number of items
	Quantity string `protobuf:"bytes,4,opt,name=quantity,proto3" json:"quantity,omitempty"`
	// ItemNumber is the number of the item
	ItemNumber string `protobuf:"bytes,5,opt,name=item_number,json=itemNumber,proto3" json:"item_number,omitempty"`
	// Unit is the unit of the item
	Unit string `protobuf:"bytes,6,opt,name=unit,proto3" json:"unit,omitempty"`
	// Total discount is the total discount of the line
	TotalDiscount string `protobuf:"bytes,7,opt,name=total_discount,json=totalDiscount,proto3" json:"total_discount,omitempty"`
	// Percentage discount is the percentage discount of the line
	PercentageDiscount string `protobuf:"bytes,8,opt,name=percentage_discount,json=percentageDiscount,proto3" json:"percentage_discount,omitempty"`
	// Total incl vat is the total price of the line including vat
	TotalInclVat string `protobuf:"bytes,9,opt,name=total_incl_vat,json=totalInclVat,proto3" json:"total_incl_vat,omitempty"`
	// Total excl vat is the total price of the line excluding vat
	TotalExclVat string `protobuf:"bytes,10,opt,name=total_excl_vat,json=totalExclVat,proto3" json:"total_excl_vat,omitempty"`
	// Total vat is the total vat of the line
	TotalVat string `protobuf:"bytes,11,opt,name=total_vat,json=totalVat,proto3" json:"total_vat,omitempty"`
	// Percentage vat is the percentage vat of the line
	PercentageVat string `protobuf:"bytes,12,opt,name=percentage_vat,json=percentageVat,proto3" json:"percentage_vat,omitempty"`
	// Unit price incl vat is the unit price of the line including vat
	UnitPriceInclVat string `protobuf:"bytes,13,opt,name=unit_price_incl_vat,json=unitPriceInclVat,proto3" json:"unit_price_incl_vat,omitempty"`
	// Unit price excl vat is the unit price of the line excluding vat
	UnitPriceExclVat string `protobuf:"bytes,14,opt,name=unit_price_excl_vat,json=unitPriceExclVat,proto3" json:"unit_price_excl_vat,omitempty"`
	// Total is the total price of the line (with/without vat)
	Total string `protobuf:"bytes,17,opt,name=total,proto3" json:"total,omitempty"`
	// Unit price is the unit price of the line (with/without vat)
	UnitPrice string `protobuf:"bytes,18,opt,name=unit_price,json=unitPrice,proto3" json:"unit_price,omitempty"`
	// Model metadata
	ModelMetadata *ModelSpec `protobuf:"bytes,19,opt,name=model_metadata,json=modelMetadata,proto3" json:"model_metadata,omitempty"`
}

func (x *PurchaseLineCandidate) Reset() {
	*x = PurchaseLineCandidate{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ssn_type_candidate_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PurchaseLineCandidate) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PurchaseLineCandidate) ProtoMessage() {}

func (x *PurchaseLineCandidate) ProtoReflect() protoreflect.Message {
	mi := &file_ssn_type_candidate_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PurchaseLineCandidate.ProtoReflect.Descriptor instead.
func (*PurchaseLineCandidate) Descriptor() ([]byte, []int) {
	return file_ssn_type_candidate_proto_rawDescGZIP(), []int{4}
}

func (x *PurchaseLineCandidate) GetPageRef() uint32 {
	if x != nil {
		return x.PageRef
	}
	return 0
}

func (x *PurchaseLineCandidate) GetCode() string {
	if x != nil {
		return x.Code
	}
	return ""
}

func (x *PurchaseLineCandidate) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *PurchaseLineCandidate) GetQuantity() string {
	if x != nil {
		return x.Quantity
	}
	return ""
}

func (x *PurchaseLineCandidate) GetItemNumber() string {
	if x != nil {
		return x.ItemNumber
	}
	return ""
}

func (x *PurchaseLineCandidate) GetUnit() string {
	if x != nil {
		return x.Unit
	}
	return ""
}

func (x *PurchaseLineCandidate) GetTotalDiscount() string {
	if x != nil {
		return x.TotalDiscount
	}
	return ""
}

func (x *PurchaseLineCandidate) GetPercentageDiscount() string {
	if x != nil {
		return x.PercentageDiscount
	}
	return ""
}

func (x *PurchaseLineCandidate) GetTotalInclVat() string {
	if x != nil {
		return x.TotalInclVat
	}
	return ""
}

func (x *PurchaseLineCandidate) GetTotalExclVat() string {
	if x != nil {
		return x.TotalExclVat
	}
	return ""
}

func (x *PurchaseLineCandidate) GetTotalVat() string {
	if x != nil {
		return x.TotalVat
	}
	return ""
}

func (x *PurchaseLineCandidate) GetPercentageVat() string {
	if x != nil {
		return x.PercentageVat
	}
	return ""
}

func (x *PurchaseLineCandidate) GetUnitPriceInclVat() string {
	if x != nil {
		return x.UnitPriceInclVat
	}
	return ""
}

func (x *PurchaseLineCandidate) GetUnitPriceExclVat() string {
	if x != nil {
		return x.UnitPriceExclVat
	}
	return ""
}

func (x *PurchaseLineCandidate) GetTotal() string {
	if x != nil {
		return x.Total
	}
	return ""
}

func (x *PurchaseLineCandidate) GetUnitPrice() string {
	if x != nil {
		return x.UnitPrice
	}
	return ""
}

func (x *PurchaseLineCandidate) GetModelMetadata() *ModelSpec {
	if x != nil {
		return x.ModelMetadata
	}
	return nil
}

type AnswerCandidate struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Question asked in the request
	Question string `protobuf:"bytes,1,opt,name=question,proto3" json:"question,omitempty"`
	// Model prediction for the question
	Answer string `protobuf:"bytes,2,opt,name=answer,proto3" json:"answer,omitempty"`
	// Confidence of the prediction
	Confidence *Confidence `protobuf:"bytes,3,opt,name=confidence,proto3" json:"confidence,omitempty"`
	// Model metadata
	ModelMetadata *ModelSpec `protobuf:"bytes,7,opt,name=model_metadata,json=modelMetadata,proto3" json:"model_metadata,omitempty"`
	// A reference to the page where the candidate was found.
	PageRef uint32 `protobuf:"varint,8,opt,name=page_ref,json=pageRef,proto3" json:"page_ref,omitempty"`
}

func (x *AnswerCandidate) Reset() {
	*x = AnswerCandidate{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ssn_type_candidate_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AnswerCandidate) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AnswerCandidate) ProtoMessage() {}

func (x *AnswerCandidate) ProtoReflect() protoreflect.Message {
	mi := &file_ssn_type_candidate_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AnswerCandidate.ProtoReflect.Descriptor instead.
func (*AnswerCandidate) Descriptor() ([]byte, []int) {
	return file_ssn_type_candidate_proto_rawDescGZIP(), []int{5}
}

func (x *AnswerCandidate) GetQuestion() string {
	if x != nil {
		return x.Question
	}
	return ""
}

func (x *AnswerCandidate) GetAnswer() string {
	if x != nil {
		return x.Answer
	}
	return ""
}

func (x *AnswerCandidate) GetConfidence() *Confidence {
	if x != nil {
		return x.Confidence
	}
	return nil
}

func (x *AnswerCandidate) GetModelMetadata() *ModelSpec {
	if x != nil {
		return x.ModelMetadata
	}
	return nil
}

func (x *AnswerCandidate) GetPageRef() uint32 {
	if x != nil {
		return x.PageRef
	}
	return 0
}

type PageText struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// A reference to the page where the text was found.
	PageRef uint32 `protobuf:"varint,1,opt,name=page_ref,json=pageRef,proto3" json:"page_ref,omitempty"`
	// The text content of the page
	Text string `protobuf:"bytes,2,opt,name=text,proto3" json:"text,omitempty"`
}

func (x *PageText) Reset() {
	*x = PageText{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ssn_type_candidate_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PageText) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PageText) ProtoMessage() {}

func (x *PageText) ProtoReflect() protoreflect.Message {
	mi := &file_ssn_type_candidate_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PageText.ProtoReflect.Descriptor instead.
func (*PageText) Descriptor() ([]byte, []int) {
	return file_ssn_type_candidate_proto_rawDescGZIP(), []int{6}
}

func (x *PageText) GetPageRef() uint32 {
	if x != nil {
		return x.PageRef
	}
	return 0
}

func (x *PageText) GetText() string {
	if x != nil {
		return x.Text
	}
	return ""
}

var File_ssn_type_candidate_proto protoreflect.FileDescriptor

var file_ssn_type_candidate_proto_rawDesc = []byte{
	0x0a, 0x18, 0x73, 0x73, 0x6e, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x2f, 0x63, 0x61, 0x6e, 0x64, 0x69,
	0x64, 0x61, 0x74, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x73, 0x73, 0x6e, 0x2e,
	0x74, 0x79, 0x70, 0x65, 0x1a, 0x1e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x77, 0x72, 0x61, 0x70, 0x70, 0x65, 0x72, 0x73, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x17, 0x73, 0x73, 0x6e, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x2f, 0x67,
	0x65, 0x6f, 0x6d, 0x65, 0x74, 0x72, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xc0, 0x01,
	0x0a, 0x0a, 0x43, 0x6f, 0x6e, 0x66, 0x69, 0x64, 0x65, 0x6e, 0x63, 0x65, 0x12, 0x30, 0x0a, 0x05,
	0x6c, 0x65, 0x76, 0x65, 0x6c, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x1a, 0x2e, 0x73, 0x73,
	0x6e, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x2e, 0x43, 0x6f, 0x6e, 0x66, 0x69, 0x64, 0x65, 0x6e, 0x63,
	0x65, 0x2e, 0x4c, 0x65, 0x76, 0x65, 0x6c, 0x52, 0x05, 0x6c, 0x65, 0x76, 0x65, 0x6c, 0x12, 0x31,
	0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1b, 0x2e,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e,
	0x46, 0x6c, 0x6f, 0x61, 0x74, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75,
	0x65, 0x22, 0x4d, 0x0a, 0x05, 0x4c, 0x65, 0x76, 0x65, 0x6c, 0x12, 0x0b, 0x0a, 0x07, 0x55, 0x4e,
	0x4b, 0x4e, 0x4f, 0x57, 0x4e, 0x10, 0x00, 0x12, 0x0c, 0x0a, 0x08, 0x56, 0x45, 0x52, 0x59, 0x5f,
	0x4c, 0x4f, 0x57, 0x10, 0x01, 0x12, 0x07, 0x0a, 0x03, 0x4c, 0x4f, 0x57, 0x10, 0x02, 0x12, 0x07,
	0x0a, 0x03, 0x4d, 0x49, 0x44, 0x10, 0x03, 0x12, 0x08, 0x0a, 0x04, 0x48, 0x49, 0x47, 0x48, 0x10,
	0x04, 0x12, 0x0d, 0x0a, 0x09, 0x56, 0x45, 0x52, 0x59, 0x5f, 0x48, 0x49, 0x47, 0x48, 0x10, 0x05,
	0x22, 0xd9, 0x02, 0x0a, 0x09, 0x43, 0x61, 0x6e, 0x64, 0x69, 0x64, 0x61, 0x74, 0x65, 0x12, 0x14,
	0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76,
	0x61, 0x6c, 0x75, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x65, 0x78, 0x74, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x04, 0x74, 0x65, 0x78, 0x74, 0x12, 0x34, 0x0a, 0x0a, 0x63, 0x6f, 0x6e, 0x66,
	0x69, 0x64, 0x65, 0x6e, 0x63, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x14, 0x2e, 0x73,
	0x73, 0x6e, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x2e, 0x43, 0x6f, 0x6e, 0x66, 0x69, 0x64, 0x65, 0x6e,
	0x63, 0x65, 0x52, 0x0a, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x64, 0x65, 0x6e, 0x63, 0x65, 0x12, 0x39,
	0x0a, 0x0c, 0x62, 0x6f, 0x75, 0x6e, 0x64, 0x69, 0x6e, 0x67, 0x5f, 0x62, 0x6f, 0x78, 0x18, 0x04,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x16, 0x2e, 0x73, 0x73, 0x6e, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x2e,
	0x42, 0x6f, 0x75, 0x6e, 0x64, 0x69, 0x6e, 0x67, 0x50, 0x6f, 0x6c, 0x79, 0x52, 0x0b, 0x62, 0x6f,
	0x75, 0x6e, 0x64, 0x69, 0x6e, 0x67, 0x42, 0x6f, 0x78, 0x12, 0x2c, 0x0a, 0x04, 0x74, 0x79, 0x70,
	0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x18, 0x2e, 0x73, 0x73, 0x6e, 0x2e, 0x74, 0x79,
	0x70, 0x65, 0x2e, 0x43, 0x61, 0x6e, 0x64, 0x69, 0x64, 0x61, 0x74, 0x65, 0x2e, 0x54, 0x79, 0x70,
	0x65, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x19, 0x0a, 0x08, 0x70, 0x61, 0x67, 0x65, 0x5f,
	0x72, 0x65, 0x66, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x07, 0x70, 0x61, 0x67, 0x65, 0x52,
	0x65, 0x66, 0x12, 0x3a, 0x0a, 0x0e, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x5f, 0x6d, 0x65, 0x74, 0x61,
	0x64, 0x61, 0x74, 0x61, 0x18, 0x07, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x73, 0x73, 0x6e,
	0x2e, 0x74, 0x79, 0x70, 0x65, 0x2e, 0x4d, 0x6f, 0x64, 0x65, 0x6c, 0x53, 0x70, 0x65, 0x63, 0x52,
	0x0d, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x22, 0x2c,
	0x0a, 0x04, 0x54, 0x79, 0x70, 0x65, 0x12, 0x0b, 0x0a, 0x07, 0x55, 0x4e, 0x4b, 0x4e, 0x4f, 0x57,
	0x4e, 0x10, 0x00, 0x12, 0x09, 0x0a, 0x05, 0x46, 0x49, 0x45, 0x4c, 0x44, 0x10, 0x01, 0x12, 0x0c,
	0x0a, 0x08, 0x44, 0x4f, 0x43, 0x55, 0x4d, 0x45, 0x4e, 0x54, 0x10, 0x02, 0x22, 0x64, 0x0a, 0x09,
	0x4d, 0x6f, 0x64, 0x65, 0x6c, 0x53, 0x70, 0x65, 0x63, 0x12, 0x1d, 0x0a, 0x0a, 0x6d, 0x6f, 0x64,
	0x65, 0x6c, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x6d,
	0x6f, 0x64, 0x65, 0x6c, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x38, 0x0a, 0x09, 0x6d, 0x6f, 0x64, 0x65,
	0x6c, 0x5f, 0x76, 0x65, 0x72, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x49, 0x6e,
	0x74, 0x36, 0x34, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x08, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x56,
	0x65, 0x72, 0x22, 0x56, 0x0a, 0x0d, 0x4c, 0x69, 0x6e, 0x65, 0x43, 0x61, 0x6e, 0x64, 0x69, 0x64,
	0x61, 0x74, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x65, 0x78, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x04, 0x74, 0x65, 0x78, 0x74, 0x12, 0x16, 0x0a, 0x06, 0x61, 0x6d, 0x6f, 0x75, 0x6e,
	0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x01, 0x52, 0x06, 0x61, 0x6d, 0x6f, 0x75, 0x6e, 0x74, 0x12,
	0x19, 0x0a, 0x08, 0x70, 0x61, 0x67, 0x65, 0x5f, 0x72, 0x65, 0x66, 0x18, 0x06, 0x20, 0x01, 0x28,
	0x0d, 0x52, 0x07, 0x70, 0x61, 0x67, 0x65, 0x52, 0x65, 0x66, 0x22, 0xfc, 0x04, 0x0a, 0x15, 0x50,
	0x75, 0x72, 0x63, 0x68, 0x61, 0x73, 0x65, 0x4c, 0x69, 0x6e, 0x65, 0x43, 0x61, 0x6e, 0x64, 0x69,
	0x64, 0x61, 0x74, 0x65, 0x12, 0x19, 0x0a, 0x08, 0x70, 0x61, 0x67, 0x65, 0x5f, 0x72, 0x65, 0x66,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x07, 0x70, 0x61, 0x67, 0x65, 0x52, 0x65, 0x66, 0x12,
	0x12, 0x0a, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x63,
	0x6f, 0x64, 0x65, 0x12, 0x20, 0x0a, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69,
	0x6f, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69,
	0x70, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x1a, 0x0a, 0x08, 0x71, 0x75, 0x61, 0x6e, 0x74, 0x69, 0x74,
	0x79, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x71, 0x75, 0x61, 0x6e, 0x74, 0x69, 0x74,
	0x79, 0x12, 0x1f, 0x0a, 0x0b, 0x69, 0x74, 0x65, 0x6d, 0x5f, 0x6e, 0x75, 0x6d, 0x62, 0x65, 0x72,
	0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x69, 0x74, 0x65, 0x6d, 0x4e, 0x75, 0x6d, 0x62,
	0x65, 0x72, 0x12, 0x12, 0x0a, 0x04, 0x75, 0x6e, 0x69, 0x74, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x04, 0x75, 0x6e, 0x69, 0x74, 0x12, 0x25, 0x0a, 0x0e, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x5f,
	0x64, 0x69, 0x73, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d,
	0x74, 0x6f, 0x74, 0x61, 0x6c, 0x44, 0x69, 0x73, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x2f, 0x0a,
	0x13, 0x70, 0x65, 0x72, 0x63, 0x65, 0x6e, 0x74, 0x61, 0x67, 0x65, 0x5f, 0x64, 0x69, 0x73, 0x63,
	0x6f, 0x75, 0x6e, 0x74, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x12, 0x70, 0x65, 0x72, 0x63,
	0x65, 0x6e, 0x74, 0x61, 0x67, 0x65, 0x44, 0x69, 0x73, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x24,
	0x0a, 0x0e, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x5f, 0x69, 0x6e, 0x63, 0x6c, 0x5f, 0x76, 0x61, 0x74,
	0x18, 0x09, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x49, 0x6e, 0x63,
	0x6c, 0x56, 0x61, 0x74, 0x12, 0x24, 0x0a, 0x0e, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x5f, 0x65, 0x78,
	0x63, 0x6c, 0x5f, 0x76, 0x61, 0x74, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x74, 0x6f,
	0x74, 0x61, 0x6c, 0x45, 0x78, 0x63, 0x6c, 0x56, 0x61, 0x74, 0x12, 0x1b, 0x0a, 0x09, 0x74, 0x6f,
	0x74, 0x61, 0x6c, 0x5f, 0x76, 0x61, 0x74, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x74,
	0x6f, 0x74, 0x61, 0x6c, 0x56, 0x61, 0x74, 0x12, 0x25, 0x0a, 0x0e, 0x70, 0x65, 0x72, 0x63, 0x65,
	0x6e, 0x74, 0x61, 0x67, 0x65, 0x5f, 0x76, 0x61, 0x74, 0x18, 0x0c, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x0d, 0x70, 0x65, 0x72, 0x63, 0x65, 0x6e, 0x74, 0x61, 0x67, 0x65, 0x56, 0x61, 0x74, 0x12, 0x2d,
	0x0a, 0x13, 0x75, 0x6e, 0x69, 0x74, 0x5f, 0x70, 0x72, 0x69, 0x63, 0x65, 0x5f, 0x69, 0x6e, 0x63,
	0x6c, 0x5f, 0x76, 0x61, 0x74, 0x18, 0x0d, 0x20, 0x01, 0x28, 0x09, 0x52, 0x10, 0x75, 0x6e, 0x69,
	0x74, 0x50, 0x72, 0x69, 0x63, 0x65, 0x49, 0x6e, 0x63, 0x6c, 0x56, 0x61, 0x74, 0x12, 0x2d, 0x0a,
	0x13, 0x75, 0x6e, 0x69, 0x74, 0x5f, 0x70, 0x72, 0x69, 0x63, 0x65, 0x5f, 0x65, 0x78, 0x63, 0x6c,
	0x5f, 0x76, 0x61, 0x74, 0x18, 0x0e, 0x20, 0x01, 0x28, 0x09, 0x52, 0x10, 0x75, 0x6e, 0x69, 0x74,
	0x50, 0x72, 0x69, 0x63, 0x65, 0x45, 0x78, 0x63, 0x6c, 0x56, 0x61, 0x74, 0x12, 0x14, 0x0a, 0x05,
	0x74, 0x6f, 0x74, 0x61, 0x6c, 0x18, 0x11, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x6f, 0x74,
	0x61, 0x6c, 0x12, 0x1d, 0x0a, 0x0a, 0x75, 0x6e, 0x69, 0x74, 0x5f, 0x70, 0x72, 0x69, 0x63, 0x65,
	0x18, 0x12, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x75, 0x6e, 0x69, 0x74, 0x50, 0x72, 0x69, 0x63,
	0x65, 0x12, 0x3a, 0x0a, 0x0e, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x5f, 0x6d, 0x65, 0x74, 0x61, 0x64,
	0x61, 0x74, 0x61, 0x18, 0x13, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x73, 0x73, 0x6e, 0x2e,
	0x74, 0x79, 0x70, 0x65, 0x2e, 0x4d, 0x6f, 0x64, 0x65, 0x6c, 0x53, 0x70, 0x65, 0x63, 0x52, 0x0d,
	0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x4a, 0x04, 0x08,
	0x0f, 0x10, 0x10, 0x4a, 0x04, 0x08, 0x10, 0x10, 0x11, 0x22, 0xd2, 0x01, 0x0a, 0x0f, 0x41, 0x6e,
	0x73, 0x77, 0x65, 0x72, 0x43, 0x61, 0x6e, 0x64, 0x69, 0x64, 0x61, 0x74, 0x65, 0x12, 0x1a, 0x0a,
	0x08, 0x71, 0x75, 0x65, 0x73, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x08, 0x71, 0x75, 0x65, 0x73, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x16, 0x0a, 0x06, 0x61, 0x6e, 0x73,
	0x77, 0x65, 0x72, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x61, 0x6e, 0x73, 0x77, 0x65,
	0x72, 0x12, 0x34, 0x0a, 0x0a, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x64, 0x65, 0x6e, 0x63, 0x65, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x14, 0x2e, 0x73, 0x73, 0x6e, 0x2e, 0x74, 0x79, 0x70, 0x65,
	0x2e, 0x43, 0x6f, 0x6e, 0x66, 0x69, 0x64, 0x65, 0x6e, 0x63, 0x65, 0x52, 0x0a, 0x63, 0x6f, 0x6e,
	0x66, 0x69, 0x64, 0x65, 0x6e, 0x63, 0x65, 0x12, 0x3a, 0x0a, 0x0e, 0x6d, 0x6f, 0x64, 0x65, 0x6c,
	0x5f, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x18, 0x07, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x13, 0x2e, 0x73, 0x73, 0x6e, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x2e, 0x4d, 0x6f, 0x64, 0x65, 0x6c,
	0x53, 0x70, 0x65, 0x63, 0x52, 0x0d, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x4d, 0x65, 0x74, 0x61, 0x64,
	0x61, 0x74, 0x61, 0x12, 0x19, 0x0a, 0x08, 0x70, 0x61, 0x67, 0x65, 0x5f, 0x72, 0x65, 0x66, 0x18,
	0x08, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x07, 0x70, 0x61, 0x67, 0x65, 0x52, 0x65, 0x66, 0x22, 0x39,
	0x0a, 0x08, 0x50, 0x61, 0x67, 0x65, 0x54, 0x65, 0x78, 0x74, 0x12, 0x19, 0x0a, 0x08, 0x70, 0x61,
	0x67, 0x65, 0x5f, 0x72, 0x65, 0x66, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x07, 0x70, 0x61,
	0x67, 0x65, 0x52, 0x65, 0x66, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x65, 0x78, 0x74, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x74, 0x65, 0x78, 0x74, 0x42, 0x9a, 0x01, 0x0a, 0x11, 0x61, 0x69,
	0x2e, 0x76, 0x69, 0x73, 0x6d, 0x61, 0x2e, 0x73, 0x73, 0x6e, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x42,
	0x0e, 0x43, 0x61, 0x6e, 0x64, 0x69, 0x64, 0x61, 0x74, 0x65, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50,
	0x01, 0x5a, 0x34, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x65, 0x2d,
	0x63, 0x6f, 0x6e, 0x6f, 0x6d, 0x69, 0x63, 0x2f, 0x76, 0x6d, 0x6c, 0x61, 0x70, 0x69, 0x73, 0x2f,
	0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f, 0x2f, 0x73, 0x73, 0x6e, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x3b,
	0x73, 0x73, 0x6e, 0x74, 0x79, 0x70, 0x65, 0xa2, 0x02, 0x03, 0x53, 0x54, 0x58, 0xaa, 0x02, 0x08,
	0x53, 0x73, 0x6e, 0x2e, 0x54, 0x79, 0x70, 0x65, 0xca, 0x02, 0x08, 0x53, 0x73, 0x6e, 0x5c, 0x54,
	0x79, 0x70, 0x65, 0xe2, 0x02, 0x14, 0x53, 0x73, 0x6e, 0x5c, 0x54, 0x79, 0x70, 0x65, 0x5c, 0x47,
	0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x09, 0x53, 0x73, 0x6e,
	0x3a, 0x3a, 0x54, 0x79, 0x70, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_ssn_type_candidate_proto_rawDescOnce sync.Once
	file_ssn_type_candidate_proto_rawDescData = file_ssn_type_candidate_proto_rawDesc
)

func file_ssn_type_candidate_proto_rawDescGZIP() []byte {
	file_ssn_type_candidate_proto_rawDescOnce.Do(func() {
		file_ssn_type_candidate_proto_rawDescData = protoimpl.X.CompressGZIP(file_ssn_type_candidate_proto_rawDescData)
	})
	return file_ssn_type_candidate_proto_rawDescData
}

var file_ssn_type_candidate_proto_enumTypes = make([]protoimpl.EnumInfo, 2)
var file_ssn_type_candidate_proto_msgTypes = make([]protoimpl.MessageInfo, 7)
var file_ssn_type_candidate_proto_goTypes = []interface{}{
	(Confidence_Level)(0),         // 0: ssn.type.Confidence.Level
	(Candidate_Type)(0),           // 1: ssn.type.Candidate.Type
	(*Confidence)(nil),            // 2: ssn.type.Confidence
	(*Candidate)(nil),             // 3: ssn.type.Candidate
	(*ModelSpec)(nil),             // 4: ssn.type.ModelSpec
	(*LineCandidate)(nil),         // 5: ssn.type.LineCandidate
	(*PurchaseLineCandidate)(nil), // 6: ssn.type.PurchaseLineCandidate
	(*AnswerCandidate)(nil),       // 7: ssn.type.AnswerCandidate
	(*PageText)(nil),              // 8: ssn.type.PageText
	(*wrapperspb.FloatValue)(nil), // 9: google.protobuf.FloatValue
	(*BoundingPoly)(nil),          // 10: ssn.type.BoundingPoly
	(*wrapperspb.Int64Value)(nil), // 11: google.protobuf.Int64Value
}
var file_ssn_type_candidate_proto_depIdxs = []int32{
	0,  // 0: ssn.type.Confidence.level:type_name -> ssn.type.Confidence.Level
	9,  // 1: ssn.type.Confidence.value:type_name -> google.protobuf.FloatValue
	2,  // 2: ssn.type.Candidate.confidence:type_name -> ssn.type.Confidence
	10, // 3: ssn.type.Candidate.bounding_box:type_name -> ssn.type.BoundingPoly
	1,  // 4: ssn.type.Candidate.type:type_name -> ssn.type.Candidate.Type
	4,  // 5: ssn.type.Candidate.model_metadata:type_name -> ssn.type.ModelSpec
	11, // 6: ssn.type.ModelSpec.model_ver:type_name -> google.protobuf.Int64Value
	4,  // 7: ssn.type.PurchaseLineCandidate.model_metadata:type_name -> ssn.type.ModelSpec
	2,  // 8: ssn.type.AnswerCandidate.confidence:type_name -> ssn.type.Confidence
	4,  // 9: ssn.type.AnswerCandidate.model_metadata:type_name -> ssn.type.ModelSpec
	10, // [10:10] is the sub-list for method output_type
	10, // [10:10] is the sub-list for method input_type
	10, // [10:10] is the sub-list for extension type_name
	10, // [10:10] is the sub-list for extension extendee
	0,  // [0:10] is the sub-list for field type_name
}

func init() { file_ssn_type_candidate_proto_init() }
func file_ssn_type_candidate_proto_init() {
	if File_ssn_type_candidate_proto != nil {
		return
	}
	file_ssn_type_geometry_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_ssn_type_candidate_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Confidence); i {
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
		file_ssn_type_candidate_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Candidate); i {
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
		file_ssn_type_candidate_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ModelSpec); i {
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
		file_ssn_type_candidate_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*LineCandidate); i {
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
		file_ssn_type_candidate_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PurchaseLineCandidate); i {
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
		file_ssn_type_candidate_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AnswerCandidate); i {
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
		file_ssn_type_candidate_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PageText); i {
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
			RawDescriptor: file_ssn_type_candidate_proto_rawDesc,
			NumEnums:      2,
			NumMessages:   7,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_ssn_type_candidate_proto_goTypes,
		DependencyIndexes: file_ssn_type_candidate_proto_depIdxs,
		EnumInfos:         file_ssn_type_candidate_proto_enumTypes,
		MessageInfos:      file_ssn_type_candidate_proto_msgTypes,
	}.Build()
	File_ssn_type_candidate_proto = out.File
	file_ssn_type_candidate_proto_rawDesc = nil
	file_ssn_type_candidate_proto_goTypes = nil
	file_ssn_type_candidate_proto_depIdxs = nil
}
