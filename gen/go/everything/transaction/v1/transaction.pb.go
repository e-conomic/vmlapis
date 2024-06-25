// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.31.0
// 	protoc        (unknown)
// source: everything/transaction/v1/transaction.proto

package transaction

import (
	v1 "github.com/e-conomic/vmlapis/gen/go/ssn/annotator/v1"
	_type "github.com/e-conomic/vmlapis/gen/go/ssn/type"
	_ "github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2/options"
	_ "google.golang.org/genproto/googleapis/api/annotations"
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

// --- post: "/v1/transactions" ---
type CreateTransactionRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// we could have an ID here, in case they wanted to provide their own
	Document *v1.Document `protobuf:"bytes,1,opt,name=document,proto3" json:"document,omitempty"`
	// Let's enforce the tags
	Tags []string `protobuf:"bytes,2,rep,name=tags,proto3" json:"tags,omitempty"`
	// e.g. "TOTAL_INCL_VAT", "PURCHASE_LINES"
	Features []string `protobuf:"bytes,3,rep,name=features,proto3" json:"features,omitempty"`
}

func (x *CreateTransactionRequest) Reset() {
	*x = CreateTransactionRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_everything_transaction_v1_transaction_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateTransactionRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateTransactionRequest) ProtoMessage() {}

func (x *CreateTransactionRequest) ProtoReflect() protoreflect.Message {
	mi := &file_everything_transaction_v1_transaction_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateTransactionRequest.ProtoReflect.Descriptor instead.
func (*CreateTransactionRequest) Descriptor() ([]byte, []int) {
	return file_everything_transaction_v1_transaction_proto_rawDescGZIP(), []int{0}
}

func (x *CreateTransactionRequest) GetDocument() *v1.Document {
	if x != nil {
		return x.Document
	}
	return nil
}

func (x *CreateTransactionRequest) GetTags() []string {
	if x != nil {
		return x.Tags
	}
	return nil
}

func (x *CreateTransactionRequest) GetFeatures() []string {
	if x != nil {
		return x.Features
	}
	return nil
}

type CreateTransactionResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *CreateTransactionResponse) Reset() {
	*x = CreateTransactionResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_everything_transaction_v1_transaction_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateTransactionResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateTransactionResponse) ProtoMessage() {}

func (x *CreateTransactionResponse) ProtoReflect() protoreflect.Message {
	mi := &file_everything_transaction_v1_transaction_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateTransactionResponse.ProtoReflect.Descriptor instead.
func (*CreateTransactionResponse) Descriptor() ([]byte, []int) {
	return file_everything_transaction_v1_transaction_proto_rawDescGZIP(), []int{1}
}

func (x *CreateTransactionResponse) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

// --- get: "/v1/transactions/{id}/results" ---
type GetTransactionResultsRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *GetTransactionResultsRequest) Reset() {
	*x = GetTransactionResultsRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_everything_transaction_v1_transaction_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetTransactionResultsRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetTransactionResultsRequest) ProtoMessage() {}

func (x *GetTransactionResultsRequest) ProtoReflect() protoreflect.Message {
	mi := &file_everything_transaction_v1_transaction_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetTransactionResultsRequest.ProtoReflect.Descriptor instead.
func (*GetTransactionResultsRequest) Descriptor() ([]byte, []int) {
	return file_everything_transaction_v1_transaction_proto_rawDescGZIP(), []int{2}
}

func (x *GetTransactionResultsRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type GetTransactionResultsResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// map: FEATURE NAME --> SSN CANDIDATES
	// empty when processing is still running
	Annotations []*Annotation `protobuf:"bytes,2,rep,name=annotations,proto3" json:"annotations,omitempty"`
}

func (x *GetTransactionResultsResponse) Reset() {
	*x = GetTransactionResultsResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_everything_transaction_v1_transaction_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetTransactionResultsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetTransactionResultsResponse) ProtoMessage() {}

func (x *GetTransactionResultsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_everything_transaction_v1_transaction_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetTransactionResultsResponse.ProtoReflect.Descriptor instead.
func (*GetTransactionResultsResponse) Descriptor() ([]byte, []int) {
	return file_everything_transaction_v1_transaction_proto_rawDescGZIP(), []int{3}
}

func (x *GetTransactionResultsResponse) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *GetTransactionResultsResponse) GetAnnotations() []*Annotation {
	if x != nil {
		return x.Annotations
	}
	return nil
}

// Wrappers for repeated Candidate
type Candidate struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Candidate []*_type.Candidate `protobuf:"bytes,1,rep,name=candidate,proto3" json:"candidate,omitempty"`
}

func (x *Candidate) Reset() {
	*x = Candidate{}
	if protoimpl.UnsafeEnabled {
		mi := &file_everything_transaction_v1_transaction_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Candidate) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Candidate) ProtoMessage() {}

func (x *Candidate) ProtoReflect() protoreflect.Message {
	mi := &file_everything_transaction_v1_transaction_proto_msgTypes[4]
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
	return file_everything_transaction_v1_transaction_proto_rawDescGZIP(), []int{4}
}

func (x *Candidate) GetCandidate() []*_type.Candidate {
	if x != nil {
		return x.Candidate
	}
	return nil
}

// Wrappers for repeated PurchaseLineCandidate
type PurchaseLineCandidate struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PurchaseLineCandidate []*_type.PurchaseLineCandidate `protobuf:"bytes,1,rep,name=purchase_line_candidate,json=purchaseLineCandidate,proto3" json:"purchase_line_candidate,omitempty"`
}

func (x *PurchaseLineCandidate) Reset() {
	*x = PurchaseLineCandidate{}
	if protoimpl.UnsafeEnabled {
		mi := &file_everything_transaction_v1_transaction_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PurchaseLineCandidate) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PurchaseLineCandidate) ProtoMessage() {}

func (x *PurchaseLineCandidate) ProtoReflect() protoreflect.Message {
	mi := &file_everything_transaction_v1_transaction_proto_msgTypes[5]
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
	return file_everything_transaction_v1_transaction_proto_rawDescGZIP(), []int{5}
}

func (x *PurchaseLineCandidate) GetPurchaseLineCandidate() []*_type.PurchaseLineCandidate {
	if x != nil {
		return x.PurchaseLineCandidate
	}
	return nil
}

type Annotation struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Feature string `protobuf:"bytes,1,opt,name=feature,proto3" json:"feature,omitempty"` // feature name e.g. "TOTAL_INCL_VAT"
	// Types that are assignable to Candidates:
	//
	//	*Annotation_Candidate
	//	*Annotation_PurchaseLineCandidate
	Candidates isAnnotation_Candidates `protobuf_oneof:"candidates"`
}

func (x *Annotation) Reset() {
	*x = Annotation{}
	if protoimpl.UnsafeEnabled {
		mi := &file_everything_transaction_v1_transaction_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Annotation) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Annotation) ProtoMessage() {}

func (x *Annotation) ProtoReflect() protoreflect.Message {
	mi := &file_everything_transaction_v1_transaction_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Annotation.ProtoReflect.Descriptor instead.
func (*Annotation) Descriptor() ([]byte, []int) {
	return file_everything_transaction_v1_transaction_proto_rawDescGZIP(), []int{6}
}

func (x *Annotation) GetFeature() string {
	if x != nil {
		return x.Feature
	}
	return ""
}

func (m *Annotation) GetCandidates() isAnnotation_Candidates {
	if m != nil {
		return m.Candidates
	}
	return nil
}

func (x *Annotation) GetCandidate() *Candidate {
	if x, ok := x.GetCandidates().(*Annotation_Candidate); ok {
		return x.Candidate
	}
	return nil
}

func (x *Annotation) GetPurchaseLineCandidate() *PurchaseLineCandidate {
	if x, ok := x.GetCandidates().(*Annotation_PurchaseLineCandidate); ok {
		return x.PurchaseLineCandidate
	}
	return nil
}

type isAnnotation_Candidates interface {
	isAnnotation_Candidates()
}

type Annotation_Candidate struct {
	Candidate *Candidate `protobuf:"bytes,2,opt,name=candidate,proto3,oneof"` // candidate contains a page number
}

type Annotation_PurchaseLineCandidate struct {
	PurchaseLineCandidate *PurchaseLineCandidate `protobuf:"bytes,3,opt,name=purchase_line_candidate,json=purchaseLineCandidate,proto3,oneof"`
}

func (*Annotation_Candidate) isAnnotation_Candidates() {}

func (*Annotation_PurchaseLineCandidate) isAnnotation_Candidates() {}

// --- get: "/v1/transactions/{id}/status" ---
type GetTransactionStatusRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *GetTransactionStatusRequest) Reset() {
	*x = GetTransactionStatusRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_everything_transaction_v1_transaction_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetTransactionStatusRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetTransactionStatusRequest) ProtoMessage() {}

func (x *GetTransactionStatusRequest) ProtoReflect() protoreflect.Message {
	mi := &file_everything_transaction_v1_transaction_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetTransactionStatusRequest.ProtoReflect.Descriptor instead.
func (*GetTransactionStatusRequest) Descriptor() ([]byte, []int) {
	return file_everything_transaction_v1_transaction_proto_rawDescGZIP(), []int{7}
}

func (x *GetTransactionStatusRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type GetTransactionStatusResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// e.g. "RUNNING", "SUCCESSFUL", "PARTIAL", "FAILED"
	// "PARTIAL" is when some features failed - e.g. SSN succeeded but purchase lines failed
	Status string `protobuf:"bytes,2,opt,name=status,proto3" json:"status,omitempty"`
	// Only populated when status == "FAILED" or status == "PARTIAL"
	ErrorMessage string `protobuf:"bytes,3,opt,name=error_message,json=errorMessage,proto3" json:"error_message,omitempty"` // maybe a timestamp on different status would be nice here
}

func (x *GetTransactionStatusResponse) Reset() {
	*x = GetTransactionStatusResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_everything_transaction_v1_transaction_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetTransactionStatusResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetTransactionStatusResponse) ProtoMessage() {}

func (x *GetTransactionStatusResponse) ProtoReflect() protoreflect.Message {
	mi := &file_everything_transaction_v1_transaction_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetTransactionStatusResponse.ProtoReflect.Descriptor instead.
func (*GetTransactionStatusResponse) Descriptor() ([]byte, []int) {
	return file_everything_transaction_v1_transaction_proto_rawDescGZIP(), []int{8}
}

func (x *GetTransactionStatusResponse) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *GetTransactionStatusResponse) GetStatus() string {
	if x != nil {
		return x.Status
	}
	return ""
}

func (x *GetTransactionStatusResponse) GetErrorMessage() string {
	if x != nil {
		return x.ErrorMessage
	}
	return ""
}

// --- delete: "/v1/transactions/{id}" ---
type DeleteTransactionRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *DeleteTransactionRequest) Reset() {
	*x = DeleteTransactionRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_everything_transaction_v1_transaction_proto_msgTypes[9]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteTransactionRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteTransactionRequest) ProtoMessage() {}

func (x *DeleteTransactionRequest) ProtoReflect() protoreflect.Message {
	mi := &file_everything_transaction_v1_transaction_proto_msgTypes[9]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteTransactionRequest.ProtoReflect.Descriptor instead.
func (*DeleteTransactionRequest) Descriptor() ([]byte, []int) {
	return file_everything_transaction_v1_transaction_proto_rawDescGZIP(), []int{9}
}

func (x *DeleteTransactionRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

var File_everything_transaction_v1_transaction_proto protoreflect.FileDescriptor

var file_everything_transaction_v1_transaction_proto_rawDesc = []byte{
	0x0a, 0x2b, 0x65, 0x76, 0x65, 0x72, 0x79, 0x74, 0x68, 0x69, 0x6e, 0x67, 0x2f, 0x74, 0x72, 0x61,
	0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2f, 0x76, 0x31, 0x2f, 0x74, 0x72, 0x61, 0x6e,
	0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x19, 0x65,
	0x76, 0x65, 0x72, 0x79, 0x74, 0x68, 0x69, 0x6e, 0x67, 0x2e, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61,
	0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2f, 0x61, 0x70, 0x69, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1b, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x65, 0x6d, 0x70, 0x74, 0x79, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x1a, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x63, 0x2d, 0x67, 0x65, 0x6e, 0x2d,
	0x6f, 0x70, 0x65, 0x6e, 0x61, 0x70, 0x69, 0x76, 0x32, 0x2f, 0x6f, 0x70, 0x74, 0x69, 0x6f, 0x6e,
	0x73, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x1a, 0x20, 0x73, 0x73, 0x6e, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74,
	0x6f, 0x72, 0x2f, 0x76, 0x31, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x6f, 0x72, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x18, 0x73, 0x73, 0x6e, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x2f,
	0x63, 0x61, 0x6e, 0x64, 0x69, 0x64, 0x61, 0x74, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22,
	0x82, 0x01, 0x0a, 0x18, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x61,
	0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x36, 0x0a, 0x08,
	0x64, 0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a,
	0x2e, 0x73, 0x73, 0x6e, 0x2e, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x6f, 0x72, 0x2e, 0x76,
	0x31, 0x2e, 0x44, 0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x52, 0x08, 0x64, 0x6f, 0x63, 0x75,
	0x6d, 0x65, 0x6e, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x61, 0x67, 0x73, 0x18, 0x02, 0x20, 0x03,
	0x28, 0x09, 0x52, 0x04, 0x74, 0x61, 0x67, 0x73, 0x12, 0x1a, 0x0a, 0x08, 0x66, 0x65, 0x61, 0x74,
	0x75, 0x72, 0x65, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x09, 0x52, 0x08, 0x66, 0x65, 0x61, 0x74,
	0x75, 0x72, 0x65, 0x73, 0x22, 0x2b, 0x0a, 0x19, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x54, 0x72,
	0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69,
	0x64, 0x22, 0x2e, 0x0a, 0x1c, 0x47, 0x65, 0x74, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74,
	0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69,
	0x64, 0x22, 0x78, 0x0a, 0x1d, 0x47, 0x65, 0x74, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74,
	0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02,
	0x69, 0x64, 0x12, 0x47, 0x0a, 0x0b, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x25, 0x2e, 0x65, 0x76, 0x65, 0x72, 0x79, 0x74,
	0x68, 0x69, 0x6e, 0x67, 0x2e, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e,
	0x2e, 0x76, 0x31, 0x2e, 0x41, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x0b,
	0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x22, 0x3e, 0x0a, 0x09, 0x43,
	0x61, 0x6e, 0x64, 0x69, 0x64, 0x61, 0x74, 0x65, 0x12, 0x31, 0x0a, 0x09, 0x63, 0x61, 0x6e, 0x64,
	0x69, 0x64, 0x61, 0x74, 0x65, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x73, 0x73,
	0x6e, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x2e, 0x43, 0x61, 0x6e, 0x64, 0x69, 0x64, 0x61, 0x74, 0x65,
	0x52, 0x09, 0x63, 0x61, 0x6e, 0x64, 0x69, 0x64, 0x61, 0x74, 0x65, 0x22, 0x70, 0x0a, 0x15, 0x50,
	0x75, 0x72, 0x63, 0x68, 0x61, 0x73, 0x65, 0x4c, 0x69, 0x6e, 0x65, 0x43, 0x61, 0x6e, 0x64, 0x69,
	0x64, 0x61, 0x74, 0x65, 0x12, 0x57, 0x0a, 0x17, 0x70, 0x75, 0x72, 0x63, 0x68, 0x61, 0x73, 0x65,
	0x5f, 0x6c, 0x69, 0x6e, 0x65, 0x5f, 0x63, 0x61, 0x6e, 0x64, 0x69, 0x64, 0x61, 0x74, 0x65, 0x18,
	0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1f, 0x2e, 0x73, 0x73, 0x6e, 0x2e, 0x74, 0x79, 0x70, 0x65,
	0x2e, 0x50, 0x75, 0x72, 0x63, 0x68, 0x61, 0x73, 0x65, 0x4c, 0x69, 0x6e, 0x65, 0x43, 0x61, 0x6e,
	0x64, 0x69, 0x64, 0x61, 0x74, 0x65, 0x52, 0x15, 0x70, 0x75, 0x72, 0x63, 0x68, 0x61, 0x73, 0x65,
	0x4c, 0x69, 0x6e, 0x65, 0x43, 0x61, 0x6e, 0x64, 0x69, 0x64, 0x61, 0x74, 0x65, 0x22, 0xe6, 0x01,
	0x0a, 0x0a, 0x41, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x18, 0x0a, 0x07,
	0x66, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x66,
	0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x12, 0x44, 0x0a, 0x09, 0x63, 0x61, 0x6e, 0x64, 0x69, 0x64,
	0x61, 0x74, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x24, 0x2e, 0x65, 0x76, 0x65, 0x72,
	0x79, 0x74, 0x68, 0x69, 0x6e, 0x67, 0x2e, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69,
	0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x43, 0x61, 0x6e, 0x64, 0x69, 0x64, 0x61, 0x74, 0x65, 0x48,
	0x00, 0x52, 0x09, 0x63, 0x61, 0x6e, 0x64, 0x69, 0x64, 0x61, 0x74, 0x65, 0x12, 0x6a, 0x0a, 0x17,
	0x70, 0x75, 0x72, 0x63, 0x68, 0x61, 0x73, 0x65, 0x5f, 0x6c, 0x69, 0x6e, 0x65, 0x5f, 0x63, 0x61,
	0x6e, 0x64, 0x69, 0x64, 0x61, 0x74, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x30, 0x2e,
	0x65, 0x76, 0x65, 0x72, 0x79, 0x74, 0x68, 0x69, 0x6e, 0x67, 0x2e, 0x74, 0x72, 0x61, 0x6e, 0x73,
	0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x75, 0x72, 0x63, 0x68, 0x61,
	0x73, 0x65, 0x4c, 0x69, 0x6e, 0x65, 0x43, 0x61, 0x6e, 0x64, 0x69, 0x64, 0x61, 0x74, 0x65, 0x48,
	0x00, 0x52, 0x15, 0x70, 0x75, 0x72, 0x63, 0x68, 0x61, 0x73, 0x65, 0x4c, 0x69, 0x6e, 0x65, 0x43,
	0x61, 0x6e, 0x64, 0x69, 0x64, 0x61, 0x74, 0x65, 0x42, 0x0c, 0x0a, 0x0a, 0x63, 0x61, 0x6e, 0x64,
	0x69, 0x64, 0x61, 0x74, 0x65, 0x73, 0x22, 0x2d, 0x0a, 0x1b, 0x47, 0x65, 0x74, 0x54, 0x72, 0x61,
	0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x02, 0x69, 0x64, 0x22, 0x6b, 0x0a, 0x1c, 0x47, 0x65, 0x74, 0x54, 0x72, 0x61, 0x6e,
	0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x23, 0x0a,
	0x0d, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x5f, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x4d, 0x65, 0x73, 0x73, 0x61,
	0x67, 0x65, 0x22, 0x2a, 0x0a, 0x18, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x54, 0x72, 0x61, 0x6e,
	0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x0e,
	0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x32, 0x97,
	0x05, 0x0a, 0x12, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x53, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x9b, 0x01, 0x0a, 0x11, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65,
	0x54, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x33, 0x2e, 0x65, 0x76,
	0x65, 0x72, 0x79, 0x74, 0x68, 0x69, 0x6e, 0x67, 0x2e, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63,
	0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x54, 0x72,
	0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x34, 0x2e, 0x65, 0x76, 0x65, 0x72, 0x79, 0x74, 0x68, 0x69, 0x6e, 0x67, 0x2e, 0x74, 0x72,
	0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x43, 0x72, 0x65,
	0x61, 0x74, 0x65, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x1b, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x15, 0x3a, 0x01,
	0x2a, 0x22, 0x10, 0x2f, 0x76, 0x31, 0x2f, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69,
	0x6f, 0x6e, 0x73, 0x12, 0xb1, 0x01, 0x0a, 0x15, 0x47, 0x65, 0x74, 0x54, 0x72, 0x61, 0x6e, 0x73,
	0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x73, 0x12, 0x37, 0x2e,
	0x65, 0x76, 0x65, 0x72, 0x79, 0x74, 0x68, 0x69, 0x6e, 0x67, 0x2e, 0x74, 0x72, 0x61, 0x6e, 0x73,
	0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x54, 0x72, 0x61,
	0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x73, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x38, 0x2e, 0x65, 0x76, 0x65, 0x72, 0x79, 0x74, 0x68,
	0x69, 0x6e, 0x67, 0x2e, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2e,
	0x76, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f,
	0x6e, 0x52, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x22, 0x25, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x1f, 0x12, 0x1d, 0x2f, 0x76, 0x31, 0x2f, 0x74, 0x72,
	0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2f, 0x7b, 0x69, 0x64, 0x7d, 0x2f,
	0x72, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x73, 0x12, 0xad, 0x01, 0x0a, 0x14, 0x47, 0x65, 0x74, 0x54,
	0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x12, 0x36, 0x2e, 0x65, 0x76, 0x65, 0x72, 0x79, 0x74, 0x68, 0x69, 0x6e, 0x67, 0x2e, 0x74, 0x72,
	0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65, 0x74,
	0x54, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x53, 0x74, 0x61, 0x74, 0x75,
	0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x37, 0x2e, 0x65, 0x76, 0x65, 0x72, 0x79,
	0x74, 0x68, 0x69, 0x6e, 0x67, 0x2e, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f,
	0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74,
	0x69, 0x6f, 0x6e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x22, 0x24, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x1e, 0x12, 0x1c, 0x2f, 0x76, 0x31, 0x2f, 0x74,
	0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2f, 0x7b, 0x69, 0x64, 0x7d,
	0x2f, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x7f, 0x0a, 0x11, 0x44, 0x65, 0x6c, 0x65, 0x74,
	0x65, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x33, 0x2e, 0x65,
	0x76, 0x65, 0x72, 0x79, 0x74, 0x68, 0x69, 0x6e, 0x67, 0x2e, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61,
	0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x54,
	0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x16, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x22, 0x1d, 0x82, 0xd3, 0xe4, 0x93, 0x02,
	0x17, 0x2a, 0x15, 0x2f, 0x76, 0x31, 0x2f, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69,
	0x6f, 0x6e, 0x73, 0x2f, 0x7b, 0x69, 0x64, 0x7d, 0x42, 0xc7, 0x02, 0x92, 0x41, 0x3d, 0x12, 0x14,
	0x0a, 0x0e, 0x45, 0x76, 0x65, 0x72, 0x79, 0x74, 0x68, 0x69, 0x6e, 0x67, 0x20, 0x41, 0x50, 0x49,
	0x32, 0x02, 0x76, 0x31, 0x2a, 0x01, 0x02, 0x32, 0x10, 0x61, 0x70, 0x70, 0x6c, 0x69, 0x63, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x2f, 0x6a, 0x73, 0x6f, 0x6e, 0x3a, 0x10, 0x61, 0x70, 0x70, 0x6c, 0x69,
	0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2f, 0x6a, 0x73, 0x6f, 0x6e, 0x0a, 0x22, 0x61, 0x69, 0x2e,
	0x76, 0x69, 0x73, 0x6d, 0x61, 0x2e, 0x65, 0x76, 0x65, 0x72, 0x79, 0x74, 0x68, 0x69, 0x6e, 0x67,
	0x2e, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x42,
	0x10, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x50, 0x72, 0x6f, 0x74,
	0x6f, 0x50, 0x01, 0x5a, 0x49, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f,
	0x65, 0x2d, 0x63, 0x6f, 0x6e, 0x6f, 0x6d, 0x69, 0x63, 0x2f, 0x76, 0x6d, 0x6c, 0x61, 0x70, 0x69,
	0x73, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f, 0x2f, 0x65, 0x76, 0x65, 0x72, 0x79, 0x74, 0x68,
	0x69, 0x6e, 0x67, 0x2f, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2f,
	0x76, 0x31, 0x3b, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0xa2, 0x02,
	0x03, 0x45, 0x54, 0x58, 0xaa, 0x02, 0x19, 0x45, 0x76, 0x65, 0x72, 0x79, 0x74, 0x68, 0x69, 0x6e,
	0x67, 0x2e, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x56, 0x31,
	0xca, 0x02, 0x19, 0x45, 0x76, 0x65, 0x72, 0x79, 0x74, 0x68, 0x69, 0x6e, 0x67, 0x5c, 0x54, 0x72,
	0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x5c, 0x56, 0x31, 0xe2, 0x02, 0x25, 0x45,
	0x76, 0x65, 0x72, 0x79, 0x74, 0x68, 0x69, 0x6e, 0x67, 0x5c, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x61,
	0x63, 0x74, 0x69, 0x6f, 0x6e, 0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61,
	0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x1b, 0x45, 0x76, 0x65, 0x72, 0x79, 0x74, 0x68, 0x69, 0x6e,
	0x67, 0x3a, 0x3a, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x3a, 0x3a,
	0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_everything_transaction_v1_transaction_proto_rawDescOnce sync.Once
	file_everything_transaction_v1_transaction_proto_rawDescData = file_everything_transaction_v1_transaction_proto_rawDesc
)

func file_everything_transaction_v1_transaction_proto_rawDescGZIP() []byte {
	file_everything_transaction_v1_transaction_proto_rawDescOnce.Do(func() {
		file_everything_transaction_v1_transaction_proto_rawDescData = protoimpl.X.CompressGZIP(file_everything_transaction_v1_transaction_proto_rawDescData)
	})
	return file_everything_transaction_v1_transaction_proto_rawDescData
}

var file_everything_transaction_v1_transaction_proto_msgTypes = make([]protoimpl.MessageInfo, 10)
var file_everything_transaction_v1_transaction_proto_goTypes = []interface{}{
	(*CreateTransactionRequest)(nil),      // 0: everything.transaction.v1.CreateTransactionRequest
	(*CreateTransactionResponse)(nil),     // 1: everything.transaction.v1.CreateTransactionResponse
	(*GetTransactionResultsRequest)(nil),  // 2: everything.transaction.v1.GetTransactionResultsRequest
	(*GetTransactionResultsResponse)(nil), // 3: everything.transaction.v1.GetTransactionResultsResponse
	(*Candidate)(nil),                     // 4: everything.transaction.v1.Candidate
	(*PurchaseLineCandidate)(nil),         // 5: everything.transaction.v1.PurchaseLineCandidate
	(*Annotation)(nil),                    // 6: everything.transaction.v1.Annotation
	(*GetTransactionStatusRequest)(nil),   // 7: everything.transaction.v1.GetTransactionStatusRequest
	(*GetTransactionStatusResponse)(nil),  // 8: everything.transaction.v1.GetTransactionStatusResponse
	(*DeleteTransactionRequest)(nil),      // 9: everything.transaction.v1.DeleteTransactionRequest
	(*v1.Document)(nil),                   // 10: ssn.annotator.v1.Document
	(*_type.Candidate)(nil),               // 11: ssn.type.Candidate
	(*_type.PurchaseLineCandidate)(nil),   // 12: ssn.type.PurchaseLineCandidate
	(*emptypb.Empty)(nil),                 // 13: google.protobuf.Empty
}
var file_everything_transaction_v1_transaction_proto_depIdxs = []int32{
	10, // 0: everything.transaction.v1.CreateTransactionRequest.document:type_name -> ssn.annotator.v1.Document
	6,  // 1: everything.transaction.v1.GetTransactionResultsResponse.annotations:type_name -> everything.transaction.v1.Annotation
	11, // 2: everything.transaction.v1.Candidate.candidate:type_name -> ssn.type.Candidate
	12, // 3: everything.transaction.v1.PurchaseLineCandidate.purchase_line_candidate:type_name -> ssn.type.PurchaseLineCandidate
	4,  // 4: everything.transaction.v1.Annotation.candidate:type_name -> everything.transaction.v1.Candidate
	5,  // 5: everything.transaction.v1.Annotation.purchase_line_candidate:type_name -> everything.transaction.v1.PurchaseLineCandidate
	0,  // 6: everything.transaction.v1.TransactionService.CreateTransaction:input_type -> everything.transaction.v1.CreateTransactionRequest
	2,  // 7: everything.transaction.v1.TransactionService.GetTransactionResults:input_type -> everything.transaction.v1.GetTransactionResultsRequest
	7,  // 8: everything.transaction.v1.TransactionService.GetTransactionStatus:input_type -> everything.transaction.v1.GetTransactionStatusRequest
	9,  // 9: everything.transaction.v1.TransactionService.DeleteTransaction:input_type -> everything.transaction.v1.DeleteTransactionRequest
	1,  // 10: everything.transaction.v1.TransactionService.CreateTransaction:output_type -> everything.transaction.v1.CreateTransactionResponse
	3,  // 11: everything.transaction.v1.TransactionService.GetTransactionResults:output_type -> everything.transaction.v1.GetTransactionResultsResponse
	8,  // 12: everything.transaction.v1.TransactionService.GetTransactionStatus:output_type -> everything.transaction.v1.GetTransactionStatusResponse
	13, // 13: everything.transaction.v1.TransactionService.DeleteTransaction:output_type -> google.protobuf.Empty
	10, // [10:14] is the sub-list for method output_type
	6,  // [6:10] is the sub-list for method input_type
	6,  // [6:6] is the sub-list for extension type_name
	6,  // [6:6] is the sub-list for extension extendee
	0,  // [0:6] is the sub-list for field type_name
}

func init() { file_everything_transaction_v1_transaction_proto_init() }
func file_everything_transaction_v1_transaction_proto_init() {
	if File_everything_transaction_v1_transaction_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_everything_transaction_v1_transaction_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateTransactionRequest); i {
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
		file_everything_transaction_v1_transaction_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateTransactionResponse); i {
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
		file_everything_transaction_v1_transaction_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetTransactionResultsRequest); i {
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
		file_everything_transaction_v1_transaction_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetTransactionResultsResponse); i {
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
		file_everything_transaction_v1_transaction_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
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
		file_everything_transaction_v1_transaction_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
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
		file_everything_transaction_v1_transaction_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Annotation); i {
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
		file_everything_transaction_v1_transaction_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetTransactionStatusRequest); i {
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
		file_everything_transaction_v1_transaction_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetTransactionStatusResponse); i {
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
		file_everything_transaction_v1_transaction_proto_msgTypes[9].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteTransactionRequest); i {
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
	file_everything_transaction_v1_transaction_proto_msgTypes[6].OneofWrappers = []interface{}{
		(*Annotation_Candidate)(nil),
		(*Annotation_PurchaseLineCandidate)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_everything_transaction_v1_transaction_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   10,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_everything_transaction_v1_transaction_proto_goTypes,
		DependencyIndexes: file_everything_transaction_v1_transaction_proto_depIdxs,
		MessageInfos:      file_everything_transaction_v1_transaction_proto_msgTypes,
	}.Build()
	File_everything_transaction_v1_transaction_proto = out.File
	file_everything_transaction_v1_transaction_proto_rawDesc = nil
	file_everything_transaction_v1_transaction_proto_goTypes = nil
	file_everything_transaction_v1_transaction_proto_depIdxs = nil
}