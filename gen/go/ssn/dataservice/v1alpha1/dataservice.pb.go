// Code generated by protoc-gen-go. DO NOT EDIT.
// source: ssn/dataservice/v1alpha1/dataservice.proto

package dataservice

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import _ "gen-bq-schema"
import _type "github.com/e-conomic/vmlapis/gen/go/ssn/type"
import empty "github.com/golang/protobuf/ptypes/empty"
import wrappers "github.com/golang/protobuf/ptypes/wrappers"
import _ "google.golang.org/genproto/googleapis/api/annotations"
import date "google.golang.org/genproto/googleapis/type/date"

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

type Document struct {
	Ta                   *_type.TextAnnotation `protobuf:"bytes,1,opt,name=ta,proto3" json:"ta,omitempty"`
	Bytes                []byte                `protobuf:"bytes,2,opt,name=bytes,proto3" json:"bytes,omitempty"`
	Id                   string                `protobuf:"bytes,3,opt,name=id,proto3" json:"id,omitempty"`
	Consumer             string                `protobuf:"bytes,4,opt,name=consumer,proto3" json:"consumer,omitempty"`
	Tags                 []string              `protobuf:"bytes,5,rep,name=tags,proto3" json:"tags,omitempty"`
	TrueValues           *TrueValues           `protobuf:"bytes,6,opt,name=true_values,json=trueValues,proto3" json:"true_values,omitempty"`
	MissingValues        []string              `protobuf:"bytes,7,rep,name=missing_values,json=missingValues,proto3" json:"missing_values,omitempty"`
	XXX_NoUnkeyedLiteral struct{}              `json:"-"`
	XXX_unrecognized     []byte                `json:"-"`
	XXX_sizecache        int32                 `json:"-"`
}

func (m *Document) Reset()         { *m = Document{} }
func (m *Document) String() string { return proto.CompactTextString(m) }
func (*Document) ProtoMessage()    {}
func (*Document) Descriptor() ([]byte, []int) {
	return fileDescriptor_dataservice_f5ef0777894982a4, []int{0}
}
func (m *Document) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Document.Unmarshal(m, b)
}
func (m *Document) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Document.Marshal(b, m, deterministic)
}
func (dst *Document) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Document.Merge(dst, src)
}
func (m *Document) XXX_Size() int {
	return xxx_messageInfo_Document.Size(m)
}
func (m *Document) XXX_DiscardUnknown() {
	xxx_messageInfo_Document.DiscardUnknown(m)
}

var xxx_messageInfo_Document proto.InternalMessageInfo

func (m *Document) GetTa() *_type.TextAnnotation {
	if m != nil {
		return m.Ta
	}
	return nil
}

func (m *Document) GetBytes() []byte {
	if m != nil {
		return m.Bytes
	}
	return nil
}

func (m *Document) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *Document) GetConsumer() string {
	if m != nil {
		return m.Consumer
	}
	return ""
}

func (m *Document) GetTags() []string {
	if m != nil {
		return m.Tags
	}
	return nil
}

func (m *Document) GetTrueValues() *TrueValues {
	if m != nil {
		return m.TrueValues
	}
	return nil
}

func (m *Document) GetMissingValues() []string {
	if m != nil {
		return m.MissingValues
	}
	return nil
}

type TrueValues struct {
	TotalInclVat                *wrappers.DoubleValue `protobuf:"bytes,1,opt,name=total_incl_vat,json=totalInclVat,proto3" json:"total_incl_vat,omitempty"`
	TotalVat                    *wrappers.DoubleValue `protobuf:"bytes,2,opt,name=total_vat,json=totalVat,proto3" json:"total_vat,omitempty"`
	TotalExclVat                *wrappers.DoubleValue `protobuf:"bytes,3,opt,name=total_excl_vat,json=totalExclVat,proto3" json:"total_excl_vat,omitempty"`
	OrderDate                   *date.Date            `protobuf:"bytes,4,opt,name=order_date,json=orderDate,proto3" json:"order_date,omitempty"`
	PaymentDueDate              *date.Date            `protobuf:"bytes,5,opt,name=payment_due_date,json=paymentDueDate,proto3" json:"payment_due_date,omitempty"`
	DocumentType                *wrappers.StringValue `protobuf:"bytes,6,opt,name=document_type,json=documentType,proto3" json:"document_type,omitempty"`
	Currency                    *wrappers.StringValue `protobuf:"bytes,7,opt,name=currency,proto3" json:"currency,omitempty"`
	CreditCardLastFour          *wrappers.StringValue `protobuf:"bytes,8,opt,name=credit_card_last_four,json=creditCardLastFour,proto3" json:"credit_card_last_four,omitempty"`
	PaymentMethod               *wrappers.StringValue `protobuf:"bytes,9,opt,name=payment_method,json=paymentMethod,proto3" json:"payment_method,omitempty"`
	OcrLineDkType               *wrappers.StringValue `protobuf:"bytes,10,opt,name=ocr_line_dk_type,json=ocrLineDkType,proto3" json:"ocr_line_dk_type,omitempty"`
	OcrLineDkPaymentId          *wrappers.StringValue `protobuf:"bytes,11,opt,name=ocr_line_dk_payment_id,json=ocrLineDkPaymentId,proto3" json:"ocr_line_dk_payment_id,omitempty"`
	OcrLineDkCreditorId         *wrappers.StringValue `protobuf:"bytes,12,opt,name=ocr_line_dk_creditor_id,json=ocrLineDkCreditorId,proto3" json:"ocr_line_dk_creditor_id,omitempty"`
	OcrLineSePaymentId          *wrappers.StringValue `protobuf:"bytes,13,opt,name=ocr_line_se_payment_id,json=ocrLineSePaymentId,proto3" json:"ocr_line_se_payment_id,omitempty"`
	OcrLineSeBankgiroCreditorId *wrappers.StringValue `protobuf:"bytes,14,opt,name=ocr_line_se_bankgiro_creditor_id,json=ocrLineSeBankgiroCreditorId,proto3" json:"ocr_line_se_bankgiro_creditor_id,omitempty"`
	OcrLineSePlusgiroCreditorId *wrappers.StringValue `protobuf:"bytes,15,opt,name=ocr_line_se_plusgiro_creditor_id,json=ocrLineSePlusgiroCreditorId,proto3" json:"ocr_line_se_plusgiro_creditor_id,omitempty"`
	OcrLineNoPaymentId          *wrappers.StringValue `protobuf:"bytes,16,opt,name=ocr_line_no_payment_id,json=ocrLineNoPaymentId,proto3" json:"ocr_line_no_payment_id,omitempty"`
	OcrLineFiPaymentId          *wrappers.StringValue `protobuf:"bytes,17,opt,name=ocr_line_fi_payment_id,json=ocrLineFiPaymentId,proto3" json:"ocr_line_fi_payment_id,omitempty"`
	OcrLineNlPaymentId          *wrappers.StringValue `protobuf:"bytes,18,opt,name=ocr_line_nl_payment_id,json=ocrLineNlPaymentId,proto3" json:"ocr_line_nl_payment_id,omitempty"`
	SupplierCorporateId         *wrappers.StringValue `protobuf:"bytes,19,opt,name=supplier_corporate_id,json=supplierCorporateId,proto3" json:"supplier_corporate_id,omitempty"`
	SupplierCountryCode         *wrappers.StringValue `protobuf:"bytes,20,opt,name=supplier_country_code,json=supplierCountryCode,proto3" json:"supplier_country_code,omitempty"`
	InvoiceNumber               *wrappers.StringValue `protobuf:"bytes,21,opt,name=invoice_number,json=invoiceNumber,proto3" json:"invoice_number,omitempty"`
	XXX_NoUnkeyedLiteral        struct{}              `json:"-"`
	XXX_unrecognized            []byte                `json:"-"`
	XXX_sizecache               int32                 `json:"-"`
}

func (m *TrueValues) Reset()         { *m = TrueValues{} }
func (m *TrueValues) String() string { return proto.CompactTextString(m) }
func (*TrueValues) ProtoMessage()    {}
func (*TrueValues) Descriptor() ([]byte, []int) {
	return fileDescriptor_dataservice_f5ef0777894982a4, []int{1}
}
func (m *TrueValues) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TrueValues.Unmarshal(m, b)
}
func (m *TrueValues) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TrueValues.Marshal(b, m, deterministic)
}
func (dst *TrueValues) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TrueValues.Merge(dst, src)
}
func (m *TrueValues) XXX_Size() int {
	return xxx_messageInfo_TrueValues.Size(m)
}
func (m *TrueValues) XXX_DiscardUnknown() {
	xxx_messageInfo_TrueValues.DiscardUnknown(m)
}

var xxx_messageInfo_TrueValues proto.InternalMessageInfo

func (m *TrueValues) GetTotalInclVat() *wrappers.DoubleValue {
	if m != nil {
		return m.TotalInclVat
	}
	return nil
}

func (m *TrueValues) GetTotalVat() *wrappers.DoubleValue {
	if m != nil {
		return m.TotalVat
	}
	return nil
}

func (m *TrueValues) GetTotalExclVat() *wrappers.DoubleValue {
	if m != nil {
		return m.TotalExclVat
	}
	return nil
}

func (m *TrueValues) GetOrderDate() *date.Date {
	if m != nil {
		return m.OrderDate
	}
	return nil
}

func (m *TrueValues) GetPaymentDueDate() *date.Date {
	if m != nil {
		return m.PaymentDueDate
	}
	return nil
}

func (m *TrueValues) GetDocumentType() *wrappers.StringValue {
	if m != nil {
		return m.DocumentType
	}
	return nil
}

func (m *TrueValues) GetCurrency() *wrappers.StringValue {
	if m != nil {
		return m.Currency
	}
	return nil
}

func (m *TrueValues) GetCreditCardLastFour() *wrappers.StringValue {
	if m != nil {
		return m.CreditCardLastFour
	}
	return nil
}

func (m *TrueValues) GetPaymentMethod() *wrappers.StringValue {
	if m != nil {
		return m.PaymentMethod
	}
	return nil
}

func (m *TrueValues) GetOcrLineDkType() *wrappers.StringValue {
	if m != nil {
		return m.OcrLineDkType
	}
	return nil
}

func (m *TrueValues) GetOcrLineDkPaymentId() *wrappers.StringValue {
	if m != nil {
		return m.OcrLineDkPaymentId
	}
	return nil
}

func (m *TrueValues) GetOcrLineDkCreditorId() *wrappers.StringValue {
	if m != nil {
		return m.OcrLineDkCreditorId
	}
	return nil
}

func (m *TrueValues) GetOcrLineSePaymentId() *wrappers.StringValue {
	if m != nil {
		return m.OcrLineSePaymentId
	}
	return nil
}

func (m *TrueValues) GetOcrLineSeBankgiroCreditorId() *wrappers.StringValue {
	if m != nil {
		return m.OcrLineSeBankgiroCreditorId
	}
	return nil
}

func (m *TrueValues) GetOcrLineSePlusgiroCreditorId() *wrappers.StringValue {
	if m != nil {
		return m.OcrLineSePlusgiroCreditorId
	}
	return nil
}

func (m *TrueValues) GetOcrLineNoPaymentId() *wrappers.StringValue {
	if m != nil {
		return m.OcrLineNoPaymentId
	}
	return nil
}

func (m *TrueValues) GetOcrLineFiPaymentId() *wrappers.StringValue {
	if m != nil {
		return m.OcrLineFiPaymentId
	}
	return nil
}

func (m *TrueValues) GetOcrLineNlPaymentId() *wrappers.StringValue {
	if m != nil {
		return m.OcrLineNlPaymentId
	}
	return nil
}

func (m *TrueValues) GetSupplierCorporateId() *wrappers.StringValue {
	if m != nil {
		return m.SupplierCorporateId
	}
	return nil
}

func (m *TrueValues) GetSupplierCountryCode() *wrappers.StringValue {
	if m != nil {
		return m.SupplierCountryCode
	}
	return nil
}

func (m *TrueValues) GetInvoiceNumber() *wrappers.StringValue {
	if m != nil {
		return m.InvoiceNumber
	}
	return nil
}

type CreateDocumentRequest struct {
	Document             *Document `protobuf:"bytes,1,opt,name=document,proto3" json:"document,omitempty"`
	XXX_NoUnkeyedLiteral struct{}  `json:"-"`
	XXX_unrecognized     []byte    `json:"-"`
	XXX_sizecache        int32     `json:"-"`
}

func (m *CreateDocumentRequest) Reset()         { *m = CreateDocumentRequest{} }
func (m *CreateDocumentRequest) String() string { return proto.CompactTextString(m) }
func (*CreateDocumentRequest) ProtoMessage()    {}
func (*CreateDocumentRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_dataservice_f5ef0777894982a4, []int{2}
}
func (m *CreateDocumentRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateDocumentRequest.Unmarshal(m, b)
}
func (m *CreateDocumentRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateDocumentRequest.Marshal(b, m, deterministic)
}
func (dst *CreateDocumentRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateDocumentRequest.Merge(dst, src)
}
func (m *CreateDocumentRequest) XXX_Size() int {
	return xxx_messageInfo_CreateDocumentRequest.Size(m)
}
func (m *CreateDocumentRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateDocumentRequest.DiscardUnknown(m)
}

var xxx_messageInfo_CreateDocumentRequest proto.InternalMessageInfo

func (m *CreateDocumentRequest) GetDocument() *Document {
	if m != nil {
		return m.Document
	}
	return nil
}

type CreateDocumentResponse struct {
	Id                   string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *CreateDocumentResponse) Reset()         { *m = CreateDocumentResponse{} }
func (m *CreateDocumentResponse) String() string { return proto.CompactTextString(m) }
func (*CreateDocumentResponse) ProtoMessage()    {}
func (*CreateDocumentResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_dataservice_f5ef0777894982a4, []int{3}
}
func (m *CreateDocumentResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateDocumentResponse.Unmarshal(m, b)
}
func (m *CreateDocumentResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateDocumentResponse.Marshal(b, m, deterministic)
}
func (dst *CreateDocumentResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateDocumentResponse.Merge(dst, src)
}
func (m *CreateDocumentResponse) XXX_Size() int {
	return xxx_messageInfo_CreateDocumentResponse.Size(m)
}
func (m *CreateDocumentResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateDocumentResponse.DiscardUnknown(m)
}

var xxx_messageInfo_CreateDocumentResponse proto.InternalMessageInfo

func (m *CreateDocumentResponse) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

type ReadDocumentRequest struct {
	Id                   string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ReadDocumentRequest) Reset()         { *m = ReadDocumentRequest{} }
func (m *ReadDocumentRequest) String() string { return proto.CompactTextString(m) }
func (*ReadDocumentRequest) ProtoMessage()    {}
func (*ReadDocumentRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_dataservice_f5ef0777894982a4, []int{4}
}
func (m *ReadDocumentRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ReadDocumentRequest.Unmarshal(m, b)
}
func (m *ReadDocumentRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ReadDocumentRequest.Marshal(b, m, deterministic)
}
func (dst *ReadDocumentRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ReadDocumentRequest.Merge(dst, src)
}
func (m *ReadDocumentRequest) XXX_Size() int {
	return xxx_messageInfo_ReadDocumentRequest.Size(m)
}
func (m *ReadDocumentRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_ReadDocumentRequest.DiscardUnknown(m)
}

var xxx_messageInfo_ReadDocumentRequest proto.InternalMessageInfo

func (m *ReadDocumentRequest) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

type ReadDocumentResponse struct {
	Document             *Document `protobuf:"bytes,1,opt,name=document,proto3" json:"document,omitempty"`
	XXX_NoUnkeyedLiteral struct{}  `json:"-"`
	XXX_unrecognized     []byte    `json:"-"`
	XXX_sizecache        int32     `json:"-"`
}

func (m *ReadDocumentResponse) Reset()         { *m = ReadDocumentResponse{} }
func (m *ReadDocumentResponse) String() string { return proto.CompactTextString(m) }
func (*ReadDocumentResponse) ProtoMessage()    {}
func (*ReadDocumentResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_dataservice_f5ef0777894982a4, []int{5}
}
func (m *ReadDocumentResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ReadDocumentResponse.Unmarshal(m, b)
}
func (m *ReadDocumentResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ReadDocumentResponse.Marshal(b, m, deterministic)
}
func (dst *ReadDocumentResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ReadDocumentResponse.Merge(dst, src)
}
func (m *ReadDocumentResponse) XXX_Size() int {
	return xxx_messageInfo_ReadDocumentResponse.Size(m)
}
func (m *ReadDocumentResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_ReadDocumentResponse.DiscardUnknown(m)
}

var xxx_messageInfo_ReadDocumentResponse proto.InternalMessageInfo

func (m *ReadDocumentResponse) GetDocument() *Document {
	if m != nil {
		return m.Document
	}
	return nil
}

type PrepareFeedbackRequest struct {
	Id                   string                `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Ta                   *_type.TextAnnotation `protobuf:"bytes,2,opt,name=ta,proto3" json:"ta,omitempty"`
	DocumentBytes        []byte                `protobuf:"bytes,3,opt,name=document_bytes,json=documentBytes,proto3" json:"document_bytes,omitempty"`
	XXX_NoUnkeyedLiteral struct{}              `json:"-"`
	XXX_unrecognized     []byte                `json:"-"`
	XXX_sizecache        int32                 `json:"-"`
}

func (m *PrepareFeedbackRequest) Reset()         { *m = PrepareFeedbackRequest{} }
func (m *PrepareFeedbackRequest) String() string { return proto.CompactTextString(m) }
func (*PrepareFeedbackRequest) ProtoMessage()    {}
func (*PrepareFeedbackRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_dataservice_f5ef0777894982a4, []int{6}
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

func (m *PrepareFeedbackRequest) GetTa() *_type.TextAnnotation {
	if m != nil {
		return m.Ta
	}
	return nil
}

func (m *PrepareFeedbackRequest) GetDocumentBytes() []byte {
	if m != nil {
		return m.DocumentBytes
	}
	return nil
}

type FeedbackRequest struct {
	Id                   string      `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	TrueValues           *TrueValues `protobuf:"bytes,2,opt,name=true_values,json=trueValues,proto3" json:"true_values,omitempty"`
	Tags                 []string    `protobuf:"bytes,3,rep,name=tags,proto3" json:"tags,omitempty"`
	XXX_NoUnkeyedLiteral struct{}    `json:"-"`
	XXX_unrecognized     []byte      `json:"-"`
	XXX_sizecache        int32       `json:"-"`
}

func (m *FeedbackRequest) Reset()         { *m = FeedbackRequest{} }
func (m *FeedbackRequest) String() string { return proto.CompactTextString(m) }
func (*FeedbackRequest) ProtoMessage()    {}
func (*FeedbackRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_dataservice_f5ef0777894982a4, []int{7}
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

func (m *FeedbackRequest) GetTrueValues() *TrueValues {
	if m != nil {
		return m.TrueValues
	}
	return nil
}

func (m *FeedbackRequest) GetTags() []string {
	if m != nil {
		return m.Tags
	}
	return nil
}

func init() {
	proto.RegisterType((*Document)(nil), "ssn.dataservice.v1alpha1.Document")
	proto.RegisterType((*TrueValues)(nil), "ssn.dataservice.v1alpha1.TrueValues")
	proto.RegisterType((*CreateDocumentRequest)(nil), "ssn.dataservice.v1alpha1.CreateDocumentRequest")
	proto.RegisterType((*CreateDocumentResponse)(nil), "ssn.dataservice.v1alpha1.CreateDocumentResponse")
	proto.RegisterType((*ReadDocumentRequest)(nil), "ssn.dataservice.v1alpha1.ReadDocumentRequest")
	proto.RegisterType((*ReadDocumentResponse)(nil), "ssn.dataservice.v1alpha1.ReadDocumentResponse")
	proto.RegisterType((*PrepareFeedbackRequest)(nil), "ssn.dataservice.v1alpha1.PrepareFeedbackRequest")
	proto.RegisterType((*FeedbackRequest)(nil), "ssn.dataservice.v1alpha1.FeedbackRequest")
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
	CreateDocument(ctx context.Context, in *CreateDocumentRequest, opts ...grpc.CallOption) (*CreateDocumentResponse, error)
	ReadDocument(ctx context.Context, in *ReadDocumentRequest, opts ...grpc.CallOption) (*ReadDocumentResponse, error)
	// For feedback
	PrepareFeedback(ctx context.Context, in *PrepareFeedbackRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	Feedback(ctx context.Context, in *FeedbackRequest, opts ...grpc.CallOption) (*empty.Empty, error)
}

type dataServiceClient struct {
	cc *grpc.ClientConn
}

func NewDataServiceClient(cc *grpc.ClientConn) DataServiceClient {
	return &dataServiceClient{cc}
}

func (c *dataServiceClient) CreateDocument(ctx context.Context, in *CreateDocumentRequest, opts ...grpc.CallOption) (*CreateDocumentResponse, error) {
	out := new(CreateDocumentResponse)
	err := c.cc.Invoke(ctx, "/ssn.dataservice.v1alpha1.DataService/CreateDocument", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataServiceClient) ReadDocument(ctx context.Context, in *ReadDocumentRequest, opts ...grpc.CallOption) (*ReadDocumentResponse, error) {
	out := new(ReadDocumentResponse)
	err := c.cc.Invoke(ctx, "/ssn.dataservice.v1alpha1.DataService/ReadDocument", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataServiceClient) PrepareFeedback(ctx context.Context, in *PrepareFeedbackRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/ssn.dataservice.v1alpha1.DataService/PrepareFeedback", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataServiceClient) Feedback(ctx context.Context, in *FeedbackRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/ssn.dataservice.v1alpha1.DataService/Feedback", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// DataServiceServer is the server API for DataService service.
type DataServiceServer interface {
	CreateDocument(context.Context, *CreateDocumentRequest) (*CreateDocumentResponse, error)
	ReadDocument(context.Context, *ReadDocumentRequest) (*ReadDocumentResponse, error)
	// For feedback
	PrepareFeedback(context.Context, *PrepareFeedbackRequest) (*empty.Empty, error)
	Feedback(context.Context, *FeedbackRequest) (*empty.Empty, error)
}

func RegisterDataServiceServer(s *grpc.Server, srv DataServiceServer) {
	s.RegisterService(&_DataService_serviceDesc, srv)
}

func _DataService_CreateDocument_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateDocumentRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataServiceServer).CreateDocument(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ssn.dataservice.v1alpha1.DataService/CreateDocument",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataServiceServer).CreateDocument(ctx, req.(*CreateDocumentRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataService_ReadDocument_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ReadDocumentRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataServiceServer).ReadDocument(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ssn.dataservice.v1alpha1.DataService/ReadDocument",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataServiceServer).ReadDocument(ctx, req.(*ReadDocumentRequest))
	}
	return interceptor(ctx, in, info, handler)
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
		FullMethod: "/ssn.dataservice.v1alpha1.DataService/PrepareFeedback",
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
		FullMethod: "/ssn.dataservice.v1alpha1.DataService/Feedback",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataServiceServer).Feedback(ctx, req.(*FeedbackRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _DataService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "ssn.dataservice.v1alpha1.DataService",
	HandlerType: (*DataServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateDocument",
			Handler:    _DataService_CreateDocument_Handler,
		},
		{
			MethodName: "ReadDocument",
			Handler:    _DataService_ReadDocument_Handler,
		},
		{
			MethodName: "PrepareFeedback",
			Handler:    _DataService_PrepareFeedback_Handler,
		},
		{
			MethodName: "Feedback",
			Handler:    _DataService_Feedback_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "ssn/dataservice/v1alpha1/dataservice.proto",
}

func init() {
	proto.RegisterFile("ssn/dataservice/v1alpha1/dataservice.proto", fileDescriptor_dataservice_f5ef0777894982a4)
}

var fileDescriptor_dataservice_f5ef0777894982a4 = []byte{
	// 1123 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xa4, 0x97, 0xcd, 0x6e, 0x1b, 0x37,
	0x10, 0xc7, 0x21, 0x29, 0x4e, 0x24, 0xea, 0xc3, 0x09, 0x13, 0x3b, 0x0b, 0x3b, 0x0d, 0xb6, 0x42,
	0x8d, 0xaa, 0x41, 0x2c, 0x35, 0xee, 0xa5, 0x4d, 0x81, 0x0a, 0xd6, 0x87, 0x01, 0x03, 0x69, 0x6a,
	0xac, 0x0d, 0x17, 0x48, 0x0f, 0x0b, 0x6a, 0x39, 0x92, 0x09, 0xaf, 0xc8, 0x35, 0xc9, 0x55, 0x2d,
	0xa0, 0xa7, 0xbe, 0x42, 0x6f, 0x7d, 0x96, 0xbe, 0x43, 0x0f, 0x7d, 0x85, 0x9e, 0xf4, 0x14, 0xc5,
	0x7e, 0x7a, 0x2d, 0x5b, 0xe9, 0xaa, 0xbd, 0x29, 0x33, 0xf3, 0xff, 0xcd, 0x90, 0x33, 0x1b, 0x8e,
	0xd1, 0x2b, 0xa5, 0x78, 0x87, 0x12, 0x4d, 0x14, 0xc8, 0x19, 0x73, 0xa0, 0x33, 0x7b, 0x43, 0x5c,
	0xef, 0x82, 0xbc, 0xc9, 0x1a, 0xdb, 0x9e, 0x14, 0x5a, 0x60, 0x43, 0x29, 0xde, 0xce, 0x9a, 0x93,
	0xd8, 0x9d, 0x17, 0x13, 0xe0, 0xfb, 0xa3, 0xab, 0x7d, 0xe5, 0x5c, 0xc0, 0x94, 0x74, 0x46, 0x57,
	0xf6, 0x98, 0x81, 0x4b, 0x23, 0xdd, 0x3d, 0x5e, 0x4d, 0x46, 0x2e, 0xa4, 0x5e, 0x21, 0x26, 0x2e,
	0x74, 0x88, 0xc7, 0x3a, 0x84, 0x73, 0xa1, 0x89, 0x66, 0x82, 0xab, 0xd8, 0xbb, 0x1b, 0x7b, 0xc3,
	0x7f, 0x8d, 0xfc, 0x71, 0x07, 0xa6, 0x9e, 0x9e, 0xc7, 0xce, 0x97, 0xcb, 0xce, 0x9f, 0x25, 0xf1,
	0x3c, 0x90, 0x89, 0x78, 0x3b, 0xf6, 0xeb, 0xb9, 0x07, 0xc1, 0x79, 0x92, 0x94, 0x2f, 0x83, 0x43,
	0x87, 0x46, 0x0d, 0xd7, 0xda, 0xbe, 0xc9, 0x1a, 0xf9, 0x9b, 0xbf, 0x97, 0x50, 0x79, 0x20, 0x1c,
	0x7f, 0x0a, 0x5c, 0xe3, 0x0e, 0x2a, 0x6a, 0x62, 0x14, 0xcc, 0x42, 0xab, 0x7a, 0x60, 0xb4, 0x83,
	0x2b, 0x08, 0x94, 0xed, 0x33, 0xb8, 0xd6, 0x87, 0xa9, 0xb0, 0xb7, 0xb1, 0xe8, 0x16, 0x8d, 0x82,
	0x55, 0xd4, 0x04, 0xef, 0xa2, 0x8d, 0xd1, 0x5c, 0x83, 0x32, 0x8a, 0x66, 0xa1, 0x55, 0x4b, 0x3c,
	0x91, 0x0d, 0x77, 0x51, 0x91, 0x51, 0xa3, 0x64, 0x16, 0x5a, 0x95, 0x5e, 0x67, 0xd1, 0xfd, 0xbc,
	0xb9, 0x77, 0x04, 0x40, 0x47, 0xc4, 0xb9, 0x34, 0x8f, 0x07, 0xaf, 0x4d, 0x45, 0xa6, 0x60, 0x12,
	0x65, 0x0e, 0xf9, 0x4c, 0xcc, 0x4d, 0x09, 0x57, 0x3e, 0x28, 0x6d, 0x32, 0xba, 0xe8, 0x16, 0xcb,
	0x05, 0xab, 0xc8, 0x28, 0xfe, 0x14, 0x95, 0x1d, 0xc1, 0x95, 0x3f, 0x05, 0x69, 0x3c, 0x08, 0x31,
	0x1b, 0x91, 0x33, 0x35, 0xe3, 0x0f, 0xe8, 0x81, 0x26, 0x13, 0x65, 0x6c, 0x98, 0xa5, 0x56, 0xa5,
	0x77, 0xb4, 0xe8, 0xf6, 0x9b, 0x87, 0x67, 0x64, 0xa2, 0x4c, 0x0a, 0x63, 0xc6, 0x81, 0x9a, 0xa3,
	0xb9, 0x99, 0x04, 0xbf, 0x36, 0x81, 0x4b, 0xe6, 0x5c, 0x44, 0xd6, 0xb8, 0xb1, 0x26, 0x1b, 0x9b,
	0x33, 0xe2, 0x82, 0xbe, 0x84, 0xb9, 0xc9, 0x94, 0xe9, 0x2b, 0xa0, 0x56, 0xc8, 0xc4, 0x43, 0x54,
	0xd5, 0xd2, 0x07, 0x7b, 0x46, 0x5c, 0x1f, 0x94, 0xf1, 0x30, 0xbc, 0x96, 0xcf, 0xda, 0xab, 0x26,
	0xa3, 0x7d, 0x26, 0x7d, 0x38, 0x0f, 0x63, 0x2d, 0xa4, 0xd3, 0xdf, 0x78, 0x0f, 0x35, 0xa6, 0x4c,
	0x29, 0xc6, 0x27, 0x09, 0xe9, 0x51, 0x50, 0xac, 0x55, 0x8f, 0xad, 0x51, 0xd8, 0x5b, 0xbc, 0xe8,
	0x6e, 0xa2, 0xba, 0x96, 0x84, 0xf1, 0x20, 0x34, 0xc8, 0xd0, 0xfc, 0xb3, 0x86, 0xd0, 0x0d, 0x15,
	0xf7, 0x50, 0x43, 0x0b, 0x4d, 0x5c, 0x9b, 0x71, 0xc7, 0xb5, 0x67, 0x44, 0xc7, 0xad, 0x7a, 0xd1,
	0x8e, 0x9a, 0xdf, 0x4e, 0x86, 0xa3, 0x3d, 0x10, 0xfe, 0xc8, 0x8d, 0x64, 0x56, 0x2d, 0xd4, 0x1c,
	0x73, 0xc7, 0x3d, 0x27, 0x1a, 0x7f, 0x83, 0x2a, 0x11, 0x23, 0x90, 0x17, 0x73, 0xc8, 0xcb, 0x61,
	0x78, 0x20, 0x4d, 0xd3, 0xc3, 0x75, 0x9c, 0xbe, 0x94, 0x3b, 0xfd, 0xf0, 0x3a, 0x4a, 0xff, 0x2d,
	0x42, 0x42, 0x52, 0x90, 0xc1, 0xf9, 0x20, 0x6c, 0x6a, 0xf5, 0xe0, 0x49, 0xa2, 0x0f, 0x87, 0x6d,
	0x40, 0x34, 0xf4, 0x2a, 0x8b, 0xee, 0x43, 0xfc, 0x60, 0x70, 0x78, 0x36, 0xb4, 0x2a, 0x61, 0x7c,
	0x60, 0xc5, 0x47, 0xe8, 0xb1, 0x47, 0xe6, 0xc1, 0xa4, 0xda, 0xd4, 0x87, 0x08, 0xb1, 0x91, 0x03,
	0xd1, 0x88, 0x55, 0x03, 0x1f, 0x42, 0xce, 0x21, 0xaa, 0xd3, 0x78, 0xe4, 0xed, 0x40, 0x10, 0xb7,
	0xf6, 0xee, 0x39, 0x4e, 0xb5, 0x4c, 0x1a, 0x64, 0xd5, 0x12, 0xc9, 0xd9, 0xdc, 0x03, 0xfc, 0x35,
	0x2a, 0x3b, 0xbe, 0x94, 0xc0, 0x9d, 0xb9, 0xf1, 0x28, 0x87, 0x3a, 0x8d, 0xc6, 0x3f, 0xa0, 0x2d,
	0x47, 0x02, 0x65, 0xda, 0x76, 0x88, 0xa4, 0xb6, 0x4b, 0x94, 0xb6, 0xc7, 0xc2, 0x97, 0x46, 0x39,
	0x07, 0x06, 0x47, 0xd2, 0x3e, 0x91, 0xf4, 0x1d, 0x51, 0xfa, 0x48, 0xf8, 0x12, 0xf7, 0x51, 0x72,
	0x3e, 0x7b, 0x0a, 0xfa, 0x42, 0x50, 0xa3, 0x92, 0x83, 0x54, 0x8f, 0x35, 0xdf, 0x87, 0x12, 0x3c,
	0x44, 0x8f, 0x85, 0x23, 0x6d, 0x97, 0x71, 0xb0, 0xe9, 0x65, 0x74, 0x2b, 0x28, 0x0f, 0x46, 0x38,
	0xf2, 0x1d, 0xe3, 0x30, 0xb8, 0x0c, 0xaf, 0xe5, 0x04, 0x6d, 0x67, 0x31, 0x49, 0x5d, 0x8c, 0x1a,
	0xd5, 0x3c, 0xa7, 0x4b, 0x61, 0x27, 0x91, 0xf0, 0x98, 0x62, 0x0b, 0x3d, 0xcf, 0x12, 0xa3, 0xf3,
	0x0b, 0x19, 0x20, 0x6b, 0x39, 0x90, 0x4f, 0x53, 0x64, 0x3f, 0x56, 0x1e, 0xd3, 0x5b, 0x55, 0x2a,
	0xc8, 0x56, 0x59, 0x5f, 0xa3, 0xca, 0x53, 0xb8, 0xa9, 0xd2, 0x41, 0x66, 0x96, 0x38, 0x22, 0xfc,
	0x72, 0xc2, 0xa4, 0xb8, 0x55, 0x6e, 0x23, 0x07, 0x7b, 0x37, 0x65, 0xf7, 0x62, 0x44, 0xa6, 0xec,
	0xa5, 0x24, 0x9e, 0xeb, 0xab, 0x3b, 0x49, 0x36, 0xd7, 0x4a, 0x72, 0x12, 0x23, 0x56, 0xdc, 0x0d,
	0x17, 0xd9, 0xbb, 0x79, 0xbc, 0xc6, 0xdd, 0xbc, 0x17, 0x37, 0x77, 0x93, 0x25, 0x8e, 0x59, 0x96,
	0xf8, 0x64, 0x0d, 0xe2, 0x11, 0xbb, 0x9f, 0xc8, 0xdd, 0x2c, 0x11, 0xaf, 0x53, 0xa3, 0x9b, 0x25,
	0x6e, 0x29, 0xdf, 0xf3, 0x5c, 0x06, 0xd2, 0x76, 0x84, 0xf4, 0x84, 0x24, 0x1a, 0x02, 0xe0, 0xd3,
	0x3c, 0x33, 0x96, 0x48, 0xfb, 0x89, 0xf2, 0x0e, 0xd1, 0xe7, 0x5a, 0xce, 0x6d, 0x47, 0x50, 0x30,
	0x9e, 0xad, 0x47, 0x0c, 0x95, 0x7d, 0x41, 0x21, 0xf8, 0xce, 0x19, 0x9f, 0x09, 0xe6, 0x80, 0xcd,
	0xfd, 0xe9, 0x08, 0xa4, 0xb1, 0x95, 0xe7, 0x03, 0x8d, 0x35, 0xef, 0x43, 0x49, 0xf3, 0x47, 0xb4,
	0xd5, 0x97, 0x40, 0x34, 0x24, 0x6f, 0xbe, 0x15, 0xbd, 0xbb, 0xf8, 0x3b, 0x54, 0x4e, 0xfe, 0x83,
	0x8b, 0x5f, 0x95, 0xe6, 0xea, 0x97, 0x2e, 0x15, 0xa7, 0x9a, 0x66, 0x0b, 0x6d, 0x2f, 0x83, 0x95,
	0x27, 0xb8, 0x02, 0xdc, 0x08, 0xd7, 0x80, 0x80, 0x59, 0x09, 0x5e, 0xf5, 0xe6, 0x1e, 0x7a, 0x6a,
	0x01, 0xa1, 0xcb, 0x05, 0x2c, 0x87, 0x9d, 0xa3, 0x67, 0xb7, 0xc3, 0x62, 0xdc, 0xff, 0x2d, 0x74,
	0x8e, 0xb6, 0x4f, 0x24, 0x78, 0x44, 0x42, 0xb2, 0x8d, 0xac, 0xa8, 0x00, 0xb7, 0xc2, 0x6d, 0xa8,
	0xf8, 0xf1, 0x6d, 0x28, 0x5c, 0x83, 0xf6, 0x50, 0x23, 0x7d, 0x50, 0xa2, 0x7d, 0x28, 0x78, 0x19,
	0x6b, 0x56, 0xfa, 0xcc, 0xf4, 0x02, 0x63, 0xf3, 0x17, 0xb4, 0xf9, 0x6f, 0x39, 0x97, 0x76, 0x8e,
	0xe2, 0x7f, 0xdc, 0x39, 0x70, 0xbc, 0x16, 0x95, 0xc2, 0x4d, 0x23, 0xfc, 0x7d, 0xf0, 0x47, 0x09,
	0x55, 0x07, 0x44, 0x93, 0xd3, 0x88, 0x81, 0x15, 0x6a, 0xdc, 0xee, 0x18, 0xee, 0xac, 0xce, 0x73,
	0xef, 0xd0, 0xec, 0x7c, 0x99, 0x5f, 0x10, 0x77, 0x6f, 0x8a, 0x6a, 0xd9, 0xae, 0xe2, 0xfd, 0xd5,
	0x84, 0x7b, 0x86, 0x64, 0xa7, 0x9d, 0x37, 0x3c, 0x4e, 0xf7, 0x13, 0xda, 0x5c, 0x6a, 0x36, 0xfe,
	0x48, 0xcd, 0xf7, 0xcf, 0xc5, 0xce, 0xf6, 0x9d, 0x0f, 0x6c, 0x18, 0x2c, 0xe6, 0xd8, 0x45, 0xe5,
	0x94, 0xfa, 0xc5, 0x6a, 0x6a, 0x4e, 0x5c, 0xf3, 0x93, 0x5f, 0xff, 0xfa, 0xfb, 0xb7, 0xe2, 0xf3,
	0x26, 0xbe, 0xf9, 0xbb, 0x64, 0x1c, 0x4b, 0xdf, 0x16, 0x5e, 0xf5, 0xea, 0x1f, 0xaa, 0x19, 0xfc,
	0xe8, 0x61, 0xa8, 0xfe, 0xea, 0x9f, 0x00, 0x00, 0x00, 0xff, 0xff, 0xb4, 0x57, 0xdd, 0x9c, 0xd5,
	0x0c, 0x00, 0x00,
}
