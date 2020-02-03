// Code generated by protoc-gen-go. DO NOT EDIT.
// source: asgt/jester/v1alpha1/jester.proto

package jester

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import _type "github.com/e-conomic/vmlapis/gen/go/asgt/type"
import timestamp "github.com/golang/protobuf/ptypes/timestamp"
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

// AutoSuggest
type SuggestionsResponse struct {
	Predictions          []*_type.Prediction `protobuf:"bytes,1,rep,name=predictions,proto3" json:"predictions,omitempty"`
	XXX_NoUnkeyedLiteral struct{}            `json:"-"`
	XXX_unrecognized     []byte              `json:"-"`
	XXX_sizecache        int32               `json:"-"`
}

func (m *SuggestionsResponse) Reset()         { *m = SuggestionsResponse{} }
func (m *SuggestionsResponse) String() string { return proto.CompactTextString(m) }
func (*SuggestionsResponse) ProtoMessage()    {}
func (*SuggestionsResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_jester_983d223ed1410ef2, []int{0}
}
func (m *SuggestionsResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SuggestionsResponse.Unmarshal(m, b)
}
func (m *SuggestionsResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SuggestionsResponse.Marshal(b, m, deterministic)
}
func (dst *SuggestionsResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SuggestionsResponse.Merge(dst, src)
}
func (m *SuggestionsResponse) XXX_Size() int {
	return xxx_messageInfo_SuggestionsResponse.Size(m)
}
func (m *SuggestionsResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_SuggestionsResponse.DiscardUnknown(m)
}

var xxx_messageInfo_SuggestionsResponse proto.InternalMessageInfo

func (m *SuggestionsResponse) GetPredictions() []*_type.Prediction {
	if m != nil {
		return m.Predictions
	}
	return nil
}

type SuggestionOptions struct {
	SuggestionLimit      int32                  `protobuf:"varint,1,opt,name=suggestion_limit,json=suggestionLimit,proto3" json:"suggestion_limit,omitempty"`
	MinConfidence        _type.Confidence_Level `protobuf:"varint,2,opt,name=min_confidence,json=minConfidence,proto3,enum=asgt.type.Confidence_Level" json:"min_confidence,omitempty"`
	XXX_NoUnkeyedLiteral struct{}               `json:"-"`
	XXX_unrecognized     []byte                 `json:"-"`
	XXX_sizecache        int32                  `json:"-"`
}

func (m *SuggestionOptions) Reset()         { *m = SuggestionOptions{} }
func (m *SuggestionOptions) String() string { return proto.CompactTextString(m) }
func (*SuggestionOptions) ProtoMessage()    {}
func (*SuggestionOptions) Descriptor() ([]byte, []int) {
	return fileDescriptor_jester_983d223ed1410ef2, []int{1}
}
func (m *SuggestionOptions) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SuggestionOptions.Unmarshal(m, b)
}
func (m *SuggestionOptions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SuggestionOptions.Marshal(b, m, deterministic)
}
func (dst *SuggestionOptions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SuggestionOptions.Merge(dst, src)
}
func (m *SuggestionOptions) XXX_Size() int {
	return xxx_messageInfo_SuggestionOptions.Size(m)
}
func (m *SuggestionOptions) XXX_DiscardUnknown() {
	xxx_messageInfo_SuggestionOptions.DiscardUnknown(m)
}

var xxx_messageInfo_SuggestionOptions proto.InternalMessageInfo

func (m *SuggestionOptions) GetSuggestionLimit() int32 {
	if m != nil {
		return m.SuggestionLimit
	}
	return 0
}

func (m *SuggestionOptions) GetMinConfidence() _type.Confidence_Level {
	if m != nil {
		return m.MinConfidence
	}
	return _type.Confidence_UNKNOWN
}

// Scanned Invoice
type ScannedInvoiceRequest struct {
	Inputs               []*ScannedInvoiceRequest_Data `protobuf:"bytes,1,rep,name=inputs,proto3" json:"inputs,omitempty"`
	DatasetName          string                        `protobuf:"bytes,2,opt,name=dataset_name,json=datasetName,proto3" json:"dataset_name,omitempty"`
	Options              *SuggestionOptions            `protobuf:"bytes,3,opt,name=options,proto3" json:"options,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                      `json:"-"`
	XXX_unrecognized     []byte                        `json:"-"`
	XXX_sizecache        int32                         `json:"-"`
}

func (m *ScannedInvoiceRequest) Reset()         { *m = ScannedInvoiceRequest{} }
func (m *ScannedInvoiceRequest) String() string { return proto.CompactTextString(m) }
func (*ScannedInvoiceRequest) ProtoMessage()    {}
func (*ScannedInvoiceRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_jester_983d223ed1410ef2, []int{2}
}
func (m *ScannedInvoiceRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ScannedInvoiceRequest.Unmarshal(m, b)
}
func (m *ScannedInvoiceRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ScannedInvoiceRequest.Marshal(b, m, deterministic)
}
func (dst *ScannedInvoiceRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ScannedInvoiceRequest.Merge(dst, src)
}
func (m *ScannedInvoiceRequest) XXX_Size() int {
	return xxx_messageInfo_ScannedInvoiceRequest.Size(m)
}
func (m *ScannedInvoiceRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_ScannedInvoiceRequest.DiscardUnknown(m)
}

var xxx_messageInfo_ScannedInvoiceRequest proto.InternalMessageInfo

func (m *ScannedInvoiceRequest) GetInputs() []*ScannedInvoiceRequest_Data {
	if m != nil {
		return m.Inputs
	}
	return nil
}

func (m *ScannedInvoiceRequest) GetDatasetName() string {
	if m != nil {
		return m.DatasetName
	}
	return ""
}

func (m *ScannedInvoiceRequest) GetOptions() *SuggestionOptions {
	if m != nil {
		return m.Options
	}
	return nil
}

type ScannedInvoiceRequest_Data struct {
	Description          string   `protobuf:"bytes,1,opt,name=description,proto3" json:"description,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ScannedInvoiceRequest_Data) Reset()         { *m = ScannedInvoiceRequest_Data{} }
func (m *ScannedInvoiceRequest_Data) String() string { return proto.CompactTextString(m) }
func (*ScannedInvoiceRequest_Data) ProtoMessage()    {}
func (*ScannedInvoiceRequest_Data) Descriptor() ([]byte, []int) {
	return fileDescriptor_jester_983d223ed1410ef2, []int{2, 0}
}
func (m *ScannedInvoiceRequest_Data) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ScannedInvoiceRequest_Data.Unmarshal(m, b)
}
func (m *ScannedInvoiceRequest_Data) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ScannedInvoiceRequest_Data.Marshal(b, m, deterministic)
}
func (dst *ScannedInvoiceRequest_Data) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ScannedInvoiceRequest_Data.Merge(dst, src)
}
func (m *ScannedInvoiceRequest_Data) XXX_Size() int {
	return xxx_messageInfo_ScannedInvoiceRequest_Data.Size(m)
}
func (m *ScannedInvoiceRequest_Data) XXX_DiscardUnknown() {
	xxx_messageInfo_ScannedInvoiceRequest_Data.DiscardUnknown(m)
}

var xxx_messageInfo_ScannedInvoiceRequest_Data proto.InternalMessageInfo

func (m *ScannedInvoiceRequest_Data) GetDescription() string {
	if m != nil {
		return m.Description
	}
	return ""
}

// Electronic Invoice Line
type ElectronicInvoiceLineRequest struct {
	Inputs               []*ElectronicInvoiceLineRequest_Data `protobuf:"bytes,1,rep,name=inputs,proto3" json:"inputs,omitempty"`
	DatasetName          string                               `protobuf:"bytes,2,opt,name=dataset_name,json=datasetName,proto3" json:"dataset_name,omitempty"`
	Options              *SuggestionOptions                   `protobuf:"bytes,3,opt,name=options,proto3" json:"options,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                             `json:"-"`
	XXX_unrecognized     []byte                               `json:"-"`
	XXX_sizecache        int32                                `json:"-"`
}

func (m *ElectronicInvoiceLineRequest) Reset()         { *m = ElectronicInvoiceLineRequest{} }
func (m *ElectronicInvoiceLineRequest) String() string { return proto.CompactTextString(m) }
func (*ElectronicInvoiceLineRequest) ProtoMessage()    {}
func (*ElectronicInvoiceLineRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_jester_983d223ed1410ef2, []int{3}
}
func (m *ElectronicInvoiceLineRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ElectronicInvoiceLineRequest.Unmarshal(m, b)
}
func (m *ElectronicInvoiceLineRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ElectronicInvoiceLineRequest.Marshal(b, m, deterministic)
}
func (dst *ElectronicInvoiceLineRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ElectronicInvoiceLineRequest.Merge(dst, src)
}
func (m *ElectronicInvoiceLineRequest) XXX_Size() int {
	return xxx_messageInfo_ElectronicInvoiceLineRequest.Size(m)
}
func (m *ElectronicInvoiceLineRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_ElectronicInvoiceLineRequest.DiscardUnknown(m)
}

var xxx_messageInfo_ElectronicInvoiceLineRequest proto.InternalMessageInfo

func (m *ElectronicInvoiceLineRequest) GetInputs() []*ElectronicInvoiceLineRequest_Data {
	if m != nil {
		return m.Inputs
	}
	return nil
}

func (m *ElectronicInvoiceLineRequest) GetDatasetName() string {
	if m != nil {
		return m.DatasetName
	}
	return ""
}

func (m *ElectronicInvoiceLineRequest) GetOptions() *SuggestionOptions {
	if m != nil {
		return m.Options
	}
	return nil
}

type ElectronicInvoiceLineRequest_Data struct {
	IssueDate            *timestamp.Timestamp  `protobuf:"bytes,1,opt,name=issue_date,json=issueDate,proto3" json:"issue_date,omitempty"`
	Currency             *wrappers.StringValue `protobuf:"bytes,2,opt,name=currency,proto3" json:"currency,omitempty"`
	SupplierId           string                `protobuf:"bytes,3,opt,name=supplier_id,json=supplierId,proto3" json:"supplier_id,omitempty"`
	SupplierName         *wrappers.StringValue `protobuf:"bytes,4,opt,name=supplier_name,json=supplierName,proto3" json:"supplier_name,omitempty"`
	SupplierGlobalId     *wrappers.StringValue `protobuf:"bytes,5,opt,name=supplier_global_id,json=supplierGlobalId,proto3" json:"supplier_global_id,omitempty"`
	CustomerRef          *wrappers.StringValue `protobuf:"bytes,6,opt,name=customer_ref,json=customerRef,proto3" json:"customer_ref,omitempty"`
	Total                *wrappers.Int32Value  `protobuf:"bytes,7,opt,name=total,proto3" json:"total,omitempty"`
	LineText             *wrappers.StringValue `protobuf:"bytes,8,opt,name=line_text,json=lineText,proto3" json:"line_text,omitempty"`
	LineId               *wrappers.StringValue `protobuf:"bytes,9,opt,name=line_id,json=lineId,proto3" json:"line_id,omitempty"`
	XXX_NoUnkeyedLiteral struct{}              `json:"-"`
	XXX_unrecognized     []byte                `json:"-"`
	XXX_sizecache        int32                 `json:"-"`
}

func (m *ElectronicInvoiceLineRequest_Data) Reset()         { *m = ElectronicInvoiceLineRequest_Data{} }
func (m *ElectronicInvoiceLineRequest_Data) String() string { return proto.CompactTextString(m) }
func (*ElectronicInvoiceLineRequest_Data) ProtoMessage()    {}
func (*ElectronicInvoiceLineRequest_Data) Descriptor() ([]byte, []int) {
	return fileDescriptor_jester_983d223ed1410ef2, []int{3, 0}
}
func (m *ElectronicInvoiceLineRequest_Data) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ElectronicInvoiceLineRequest_Data.Unmarshal(m, b)
}
func (m *ElectronicInvoiceLineRequest_Data) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ElectronicInvoiceLineRequest_Data.Marshal(b, m, deterministic)
}
func (dst *ElectronicInvoiceLineRequest_Data) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ElectronicInvoiceLineRequest_Data.Merge(dst, src)
}
func (m *ElectronicInvoiceLineRequest_Data) XXX_Size() int {
	return xxx_messageInfo_ElectronicInvoiceLineRequest_Data.Size(m)
}
func (m *ElectronicInvoiceLineRequest_Data) XXX_DiscardUnknown() {
	xxx_messageInfo_ElectronicInvoiceLineRequest_Data.DiscardUnknown(m)
}

var xxx_messageInfo_ElectronicInvoiceLineRequest_Data proto.InternalMessageInfo

func (m *ElectronicInvoiceLineRequest_Data) GetIssueDate() *timestamp.Timestamp {
	if m != nil {
		return m.IssueDate
	}
	return nil
}

func (m *ElectronicInvoiceLineRequest_Data) GetCurrency() *wrappers.StringValue {
	if m != nil {
		return m.Currency
	}
	return nil
}

func (m *ElectronicInvoiceLineRequest_Data) GetSupplierId() string {
	if m != nil {
		return m.SupplierId
	}
	return ""
}

func (m *ElectronicInvoiceLineRequest_Data) GetSupplierName() *wrappers.StringValue {
	if m != nil {
		return m.SupplierName
	}
	return nil
}

func (m *ElectronicInvoiceLineRequest_Data) GetSupplierGlobalId() *wrappers.StringValue {
	if m != nil {
		return m.SupplierGlobalId
	}
	return nil
}

func (m *ElectronicInvoiceLineRequest_Data) GetCustomerRef() *wrappers.StringValue {
	if m != nil {
		return m.CustomerRef
	}
	return nil
}

func (m *ElectronicInvoiceLineRequest_Data) GetTotal() *wrappers.Int32Value {
	if m != nil {
		return m.Total
	}
	return nil
}

func (m *ElectronicInvoiceLineRequest_Data) GetLineText() *wrappers.StringValue {
	if m != nil {
		return m.LineText
	}
	return nil
}

func (m *ElectronicInvoiceLineRequest_Data) GetLineId() *wrappers.StringValue {
	if m != nil {
		return m.LineId
	}
	return nil
}

// Bank
type BankRequest struct {
	Inputs               []*BankRequest_Data `protobuf:"bytes,1,rep,name=inputs,proto3" json:"inputs,omitempty"`
	DatasetName          string              `protobuf:"bytes,2,opt,name=dataset_name,json=datasetName,proto3" json:"dataset_name,omitempty"`
	Options              *SuggestionOptions  `protobuf:"bytes,3,opt,name=options,proto3" json:"options,omitempty"`
	XXX_NoUnkeyedLiteral struct{}            `json:"-"`
	XXX_unrecognized     []byte              `json:"-"`
	XXX_sizecache        int32               `json:"-"`
}

func (m *BankRequest) Reset()         { *m = BankRequest{} }
func (m *BankRequest) String() string { return proto.CompactTextString(m) }
func (*BankRequest) ProtoMessage()    {}
func (*BankRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_jester_983d223ed1410ef2, []int{4}
}
func (m *BankRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_BankRequest.Unmarshal(m, b)
}
func (m *BankRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_BankRequest.Marshal(b, m, deterministic)
}
func (dst *BankRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BankRequest.Merge(dst, src)
}
func (m *BankRequest) XXX_Size() int {
	return xxx_messageInfo_BankRequest.Size(m)
}
func (m *BankRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_BankRequest.DiscardUnknown(m)
}

var xxx_messageInfo_BankRequest proto.InternalMessageInfo

func (m *BankRequest) GetInputs() []*BankRequest_Data {
	if m != nil {
		return m.Inputs
	}
	return nil
}

func (m *BankRequest) GetDatasetName() string {
	if m != nil {
		return m.DatasetName
	}
	return ""
}

func (m *BankRequest) GetOptions() *SuggestionOptions {
	if m != nil {
		return m.Options
	}
	return nil
}

type BankRequest_Data struct {
	AccountNumber        int32                 `protobuf:"varint,1,opt,name=account_number,json=accountNumber,proto3" json:"account_number,omitempty"`
	Amount               *wrappers.DoubleValue `protobuf:"bytes,2,opt,name=amount,proto3" json:"amount,omitempty"`
	EntryType            int32                 `protobuf:"varint,3,opt,name=entry_type,json=entryType,proto3" json:"entry_type,omitempty"`
	Text                 string                `protobuf:"bytes,4,opt,name=text,proto3" json:"text,omitempty"`
	TimeStamp            *timestamp.Timestamp  `protobuf:"bytes,5,opt,name=time_stamp,json=timeStamp,proto3" json:"time_stamp,omitempty"`
	XXX_NoUnkeyedLiteral struct{}              `json:"-"`
	XXX_unrecognized     []byte                `json:"-"`
	XXX_sizecache        int32                 `json:"-"`
}

func (m *BankRequest_Data) Reset()         { *m = BankRequest_Data{} }
func (m *BankRequest_Data) String() string { return proto.CompactTextString(m) }
func (*BankRequest_Data) ProtoMessage()    {}
func (*BankRequest_Data) Descriptor() ([]byte, []int) {
	return fileDescriptor_jester_983d223ed1410ef2, []int{4, 0}
}
func (m *BankRequest_Data) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_BankRequest_Data.Unmarshal(m, b)
}
func (m *BankRequest_Data) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_BankRequest_Data.Marshal(b, m, deterministic)
}
func (dst *BankRequest_Data) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BankRequest_Data.Merge(dst, src)
}
func (m *BankRequest_Data) XXX_Size() int {
	return xxx_messageInfo_BankRequest_Data.Size(m)
}
func (m *BankRequest_Data) XXX_DiscardUnknown() {
	xxx_messageInfo_BankRequest_Data.DiscardUnknown(m)
}

var xxx_messageInfo_BankRequest_Data proto.InternalMessageInfo

func (m *BankRequest_Data) GetAccountNumber() int32 {
	if m != nil {
		return m.AccountNumber
	}
	return 0
}

func (m *BankRequest_Data) GetAmount() *wrappers.DoubleValue {
	if m != nil {
		return m.Amount
	}
	return nil
}

func (m *BankRequest_Data) GetEntryType() int32 {
	if m != nil {
		return m.EntryType
	}
	return 0
}

func (m *BankRequest_Data) GetText() string {
	if m != nil {
		return m.Text
	}
	return ""
}

func (m *BankRequest_Data) GetTimeStamp() *timestamp.Timestamp {
	if m != nil {
		return m.TimeStamp
	}
	return nil
}

func init() {
	proto.RegisterType((*SuggestionsResponse)(nil), "asgt.jester.v1alpha1.SuggestionsResponse")
	proto.RegisterType((*SuggestionOptions)(nil), "asgt.jester.v1alpha1.SuggestionOptions")
	proto.RegisterType((*ScannedInvoiceRequest)(nil), "asgt.jester.v1alpha1.ScannedInvoiceRequest")
	proto.RegisterType((*ScannedInvoiceRequest_Data)(nil), "asgt.jester.v1alpha1.ScannedInvoiceRequest.Data")
	proto.RegisterType((*ElectronicInvoiceLineRequest)(nil), "asgt.jester.v1alpha1.ElectronicInvoiceLineRequest")
	proto.RegisterType((*ElectronicInvoiceLineRequest_Data)(nil), "asgt.jester.v1alpha1.ElectronicInvoiceLineRequest.Data")
	proto.RegisterType((*BankRequest)(nil), "asgt.jester.v1alpha1.BankRequest")
	proto.RegisterType((*BankRequest_Data)(nil), "asgt.jester.v1alpha1.BankRequest.Data")
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// JesterClient is the client API for Jester service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type JesterClient interface {
	ScannedInvoiceSuggestions(ctx context.Context, in *ScannedInvoiceRequest, opts ...grpc.CallOption) (*SuggestionsResponse, error)
	ElectronicInvoicLineSuggestions(ctx context.Context, in *ElectronicInvoiceLineRequest, opts ...grpc.CallOption) (*SuggestionsResponse, error)
	BankSuggestions(ctx context.Context, in *BankRequest, opts ...grpc.CallOption) (*SuggestionsResponse, error)
}

type jesterClient struct {
	cc *grpc.ClientConn
}

func NewJesterClient(cc *grpc.ClientConn) JesterClient {
	return &jesterClient{cc}
}

func (c *jesterClient) ScannedInvoiceSuggestions(ctx context.Context, in *ScannedInvoiceRequest, opts ...grpc.CallOption) (*SuggestionsResponse, error) {
	out := new(SuggestionsResponse)
	err := c.cc.Invoke(ctx, "/asgt.jester.v1alpha1.Jester/ScannedInvoiceSuggestions", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *jesterClient) ElectronicInvoicLineSuggestions(ctx context.Context, in *ElectronicInvoiceLineRequest, opts ...grpc.CallOption) (*SuggestionsResponse, error) {
	out := new(SuggestionsResponse)
	err := c.cc.Invoke(ctx, "/asgt.jester.v1alpha1.Jester/ElectronicInvoicLineSuggestions", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *jesterClient) BankSuggestions(ctx context.Context, in *BankRequest, opts ...grpc.CallOption) (*SuggestionsResponse, error) {
	out := new(SuggestionsResponse)
	err := c.cc.Invoke(ctx, "/asgt.jester.v1alpha1.Jester/BankSuggestions", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// JesterServer is the server API for Jester service.
type JesterServer interface {
	ScannedInvoiceSuggestions(context.Context, *ScannedInvoiceRequest) (*SuggestionsResponse, error)
	ElectronicInvoicLineSuggestions(context.Context, *ElectronicInvoiceLineRequest) (*SuggestionsResponse, error)
	BankSuggestions(context.Context, *BankRequest) (*SuggestionsResponse, error)
}

func RegisterJesterServer(s *grpc.Server, srv JesterServer) {
	s.RegisterService(&_Jester_serviceDesc, srv)
}

func _Jester_ScannedInvoiceSuggestions_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ScannedInvoiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(JesterServer).ScannedInvoiceSuggestions(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asgt.jester.v1alpha1.Jester/ScannedInvoiceSuggestions",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(JesterServer).ScannedInvoiceSuggestions(ctx, req.(*ScannedInvoiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Jester_ElectronicInvoicLineSuggestions_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ElectronicInvoiceLineRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(JesterServer).ElectronicInvoicLineSuggestions(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asgt.jester.v1alpha1.Jester/ElectronicInvoicLineSuggestions",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(JesterServer).ElectronicInvoicLineSuggestions(ctx, req.(*ElectronicInvoiceLineRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Jester_BankSuggestions_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(BankRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(JesterServer).BankSuggestions(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asgt.jester.v1alpha1.Jester/BankSuggestions",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(JesterServer).BankSuggestions(ctx, req.(*BankRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Jester_serviceDesc = grpc.ServiceDesc{
	ServiceName: "asgt.jester.v1alpha1.Jester",
	HandlerType: (*JesterServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ScannedInvoiceSuggestions",
			Handler:    _Jester_ScannedInvoiceSuggestions_Handler,
		},
		{
			MethodName: "ElectronicInvoicLineSuggestions",
			Handler:    _Jester_ElectronicInvoicLineSuggestions_Handler,
		},
		{
			MethodName: "BankSuggestions",
			Handler:    _Jester_BankSuggestions_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "asgt/jester/v1alpha1/jester.proto",
}

func init() {
	proto.RegisterFile("asgt/jester/v1alpha1/jester.proto", fileDescriptor_jester_983d223ed1410ef2)
}

var fileDescriptor_jester_983d223ed1410ef2 = []byte{
	// 850 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xc4, 0x55, 0xd1, 0x6e, 0xdc, 0x44,
	0x14, 0x95, 0x9b, 0xdd, 0x4d, 0xf6, 0x3a, 0x49, 0xcb, 0x40, 0xd1, 0xb2, 0x09, 0x64, 0x63, 0xa9,
	0x74, 0x4b, 0x91, 0x97, 0xb8, 0xa0, 0xd2, 0x3e, 0x80, 0x1a, 0x82, 0x60, 0xab, 0x28, 0x45, 0x4e,
	0xc4, 0x03, 0x2f, 0xd6, 0xac, 0x7d, 0xb3, 0x0c, 0xb5, 0x67, 0x8c, 0x67, 0x1c, 0x9a, 0xd7, 0xbc,
	0xf0, 0x8c, 0xf8, 0x01, 0x3e, 0x82, 0x1f, 0x41, 0xfc, 0x02, 0x12, 0xe2, 0x91, 0x3f, 0x40, 0x33,
	0x1e, 0x7b, 0x97, 0x6d, 0xda, 0x6e, 0x9e, 0xfa, 0x66, 0x9f, 0x39, 0xe7, 0xce, 0x99, 0xeb, 0xe3,
	0x3b, 0xb0, 0x4b, 0xe5, 0x54, 0x8d, 0x7e, 0x40, 0xa9, 0xb0, 0x18, 0x9d, 0xed, 0xd1, 0x34, 0xff,
	0x9e, 0xee, 0xd9, 0x77, 0x3f, 0x2f, 0x84, 0x12, 0xe4, 0x2d, 0x4d, 0xf1, 0x2d, 0x54, 0x53, 0xfa,
	0x7d, 0x23, 0x54, 0xe7, 0x39, 0x8e, 0xf2, 0x02, 0x13, 0x16, 0x2b, 0x26, 0x78, 0xa5, 0xe8, 0x6f,
	0x4f, 0x85, 0x98, 0xa6, 0x38, 0xa2, 0x39, 0x1b, 0x51, 0xce, 0x85, 0xa2, 0x7a, 0x51, 0xda, 0xd5,
	0x1d, 0xbb, 0x6a, 0xde, 0x26, 0xe5, 0xe9, 0x48, 0xb1, 0x0c, 0xa5, 0xa2, 0x59, 0x6e, 0x09, 0xef,
	0x2d, 0x12, 0x7e, 0x2a, 0x68, 0x9e, 0x63, 0x61, 0x0b, 0x78, 0x47, 0xf0, 0xe6, 0x71, 0x39, 0x9d,
	0xa2, 0x34, 0x55, 0x43, 0x94, 0xb9, 0xe0, 0x12, 0xc9, 0x7d, 0x70, 0x67, 0x4e, 0x64, 0xcf, 0x19,
	0xac, 0x0c, 0xdd, 0xe0, 0xa6, 0x6f, 0xdc, 0x6b, 0x9f, 0xfe, 0x37, 0xcd, 0x6a, 0x38, 0xcf, 0xf4,
	0x2e, 0x1c, 0x78, 0x63, 0x56, 0xf0, 0x49, 0x6e, 0x50, 0x72, 0x07, 0x6e, 0xc8, 0x06, 0x8c, 0x52,
	0x96, 0x31, 0xd5, 0x73, 0x06, 0xce, 0xb0, 0x1d, 0x5e, 0x9f, 0xe1, 0x87, 0x1a, 0x26, 0xfb, 0xb0,
	0x99, 0x31, 0x1e, 0xc5, 0x82, 0x9f, 0xb2, 0x04, 0x79, 0x8c, 0xbd, 0x6b, 0x03, 0x67, 0xb8, 0x19,
	0x6c, 0xcd, 0x6d, 0xfe, 0x45, 0xb3, 0xe8, 0x1f, 0xe2, 0x19, 0xa6, 0xe1, 0x46, 0xc6, 0xf8, 0x0c,
	0xf4, 0xfe, 0x75, 0xe0, 0xe6, 0x71, 0x4c, 0x39, 0xc7, 0x64, 0xcc, 0xcf, 0x04, 0x8b, 0x31, 0xc4,
	0x1f, 0x4b, 0x94, 0x8a, 0x7c, 0x0d, 0x1d, 0xc6, 0xf3, 0x52, 0xd5, 0x47, 0xfa, 0xc8, 0xbf, 0xec,
	0x83, 0xf8, 0x97, 0x8a, 0xfd, 0x03, 0xaa, 0x68, 0x68, 0xf5, 0x64, 0x17, 0xd6, 0x13, 0xaa, 0xa8,
	0x44, 0x15, 0x71, 0x9a, 0x55, 0x2e, 0xbb, 0xa1, 0x6b, 0xb1, 0x23, 0x9a, 0x21, 0x79, 0x04, 0xab,
	0xa2, 0x6a, 0x40, 0x6f, 0x65, 0xe0, 0x0c, 0xdd, 0xe0, 0xf6, 0x0b, 0x76, 0x5b, 0xec, 0x57, 0x58,
	0xeb, 0xfa, 0x43, 0x68, 0xe9, 0x5d, 0xc9, 0x00, 0xdc, 0x04, 0x65, 0x5c, 0x30, 0x83, 0x9b, 0xde,
	0xe9, 0xcd, 0x66, 0x90, 0xf7, 0x4f, 0x1b, 0xb6, 0xbf, 0x4c, 0x31, 0x56, 0x85, 0xe0, 0x2c, 0xb6,
	0xce, 0x0f, 0x19, 0x6f, 0x8e, 0xfe, 0x64, 0xe1, 0xe8, 0xf7, 0x2f, 0x37, 0xf3, 0xb2, 0x1a, 0xaf,
	0xa3, 0x03, 0xbf, 0xb4, 0x6c, 0x0b, 0x1e, 0x00, 0x30, 0x29, 0x4b, 0x8c, 0x12, 0xaa, 0xd0, 0x74,
	0xc0, 0x0d, 0xfa, 0x7e, 0x15, 0x6f, 0xbf, 0x8e, 0xb7, 0x7f, 0x52, 0xe7, 0x3f, 0xec, 0x1a, 0xf6,
	0x01, 0x55, 0x48, 0x3e, 0x85, 0xb5, 0xb8, 0x2c, 0x0a, 0xe4, 0xf1, 0xb9, 0x71, 0xe9, 0x06, 0xdb,
	0xcf, 0x09, 0x8f, 0x55, 0xc1, 0xf8, 0xf4, 0x5b, 0x9a, 0x96, 0x18, 0x36, 0x6c, 0xb2, 0x03, 0xae,
	0x2c, 0xf3, 0x3c, 0x65, 0x58, 0x44, 0x2c, 0x31, 0x87, 0xe8, 0x86, 0x50, 0x43, 0xe3, 0x84, 0x3c,
	0x82, 0x8d, 0x86, 0x60, 0xba, 0xd0, 0x5a, 0xa2, 0xfe, 0x7a, 0x2d, 0x31, 0x4d, 0x7a, 0x0c, 0xa4,
	0x29, 0x31, 0x4d, 0xc5, 0x84, 0xa6, 0x7a, 0xab, 0xf6, 0x12, 0x75, 0x6e, 0xd4, 0xba, 0xaf, 0x8c,
	0x6c, 0x9c, 0x90, 0xcf, 0x61, 0x3d, 0x2e, 0xa5, 0x12, 0x19, 0x16, 0x51, 0x81, 0xa7, 0xbd, 0xce,
	0x12, 0x55, 0xdc, 0x5a, 0x11, 0xe2, 0x29, 0xd9, 0x83, 0xb6, 0x12, 0x8a, 0xa6, 0xbd, 0x55, 0xa3,
	0xdc, 0x7a, 0x4e, 0x39, 0xe6, 0xea, 0x5e, 0x50, 0x09, 0x2b, 0x26, 0x79, 0x00, 0xdd, 0x94, 0x71,
	0x8c, 0x14, 0x3e, 0x53, 0xbd, 0xb5, 0x65, 0xda, 0xab, 0xe9, 0x27, 0xf8, 0x4c, 0x91, 0x4f, 0x60,
	0xd5, 0x48, 0x59, 0xd2, 0xeb, 0x2e, 0x21, 0xec, 0x68, 0xf2, 0x38, 0xf1, 0x7e, 0x5e, 0x01, 0x77,
	0x9f, 0xf2, 0xa7, 0x75, 0xb4, 0x3f, 0x5b, 0x88, 0xf6, 0xfb, 0x97, 0xa7, 0x6c, 0x4e, 0xf2, 0x3a,
	0x92, 0xfc, 0x87, 0x63, 0x93, 0x7c, 0x0b, 0x36, 0x69, 0x1c, 0x8b, 0x92, 0xab, 0x88, 0x97, 0xd9,
	0x04, 0x0b, 0x3b, 0x0b, 0x37, 0x2c, 0x7a, 0x64, 0x40, 0xf2, 0x31, 0x74, 0x68, 0xa6, 0xdf, 0x5f,
	0x98, 0xd9, 0x03, 0x51, 0x4e, 0x52, 0xb4, 0xbd, 0xa9, 0xb8, 0xe4, 0x5d, 0x00, 0xe4, 0xaa, 0x38,
	0x8f, 0xf4, 0xa4, 0x34, 0x5e, 0xdb, 0x61, 0xd7, 0x20, 0x27, 0xe7, 0x39, 0x12, 0x02, 0x2d, 0xf3,
	0x9d, 0x5a, 0xe6, 0x88, 0xe6, 0x59, 0xff, 0x59, 0xfa, 0xda, 0x88, 0xcc, 0x7f, 0x63, 0x83, 0xf7,
	0xd2, 0x3f, 0x4b, 0xb3, 0x8f, 0xf5, 0x63, 0xf0, 0xf7, 0x0a, 0x74, 0x1e, 0x9b, 0x16, 0x90, 0xdf,
	0x1c, 0x78, 0xe7, 0xff, 0x73, 0x73, 0xee, 0x62, 0x21, 0x77, 0xaf, 0x30, 0x68, 0xfb, 0x77, 0x5e,
	0xd5, 0xdb, 0xe6, 0xa2, 0xf2, 0xee, 0x5e, 0xfc, 0xf9, 0xd7, 0xaf, 0xd7, 0x6e, 0x79, 0x83, 0xd9,
	0x85, 0x2b, 0xab, 0x9a, 0xac, 0xaa, 0xf9, 0xd0, 0x5e, 0x30, 0x0f, 0x9d, 0x0f, 0xc8, 0xef, 0x0e,
	0xec, 0x2c, 0xce, 0x37, 0x3d, 0xde, 0xe6, 0x8d, 0x06, 0x57, 0x1f, 0x8b, 0x57, 0xf1, 0x1b, 0x18,
	0xbf, 0x1f, 0x7a, 0xb7, 0x67, 0x7e, 0xb1, 0x29, 0x6d, 0x2d, 0xeb, 0x94, 0xcf, 0xdb, 0xbe, 0x70,
	0xe0, 0xba, 0xce, 0xee, 0xbc, 0xcd, 0xdd, 0x57, 0x46, 0xfc, 0x2a, 0xae, 0x76, 0x8d, 0xab, 0x2d,
	0xef, 0xed, 0x99, 0xab, 0x09, 0xe5, 0x4f, 0xe7, 0x4c, 0xec, 0xaf, 0x7d, 0xd7, 0xa9, 0x2a, 0x4d,
	0x3a, 0x26, 0x12, 0xf7, 0xfe, 0x0b, 0x00, 0x00, 0xff, 0xff, 0xae, 0xfa, 0xf4, 0x38, 0xef, 0x08,
	0x00, 0x00,
}
