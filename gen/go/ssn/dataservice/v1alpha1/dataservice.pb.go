// Code generated by protoc-gen-go. DO NOT EDIT.
// source: ssn/dataservice/v1alpha1/dataservice.proto

package dataservice

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import _ "github.com/GoogleCloudPlatform/protoc-gen-bq-schema/protos"
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
	XXX_NoUnkeyedLiteral struct{}              `json:"-"`
	XXX_unrecognized     []byte                `json:"-"`
	XXX_sizecache        int32                 `json:"-"`
}

func (m *Document) Reset()         { *m = Document{} }
func (m *Document) String() string { return proto.CompactTextString(m) }
func (*Document) ProtoMessage()    {}
func (*Document) Descriptor() ([]byte, []int) {
	return fileDescriptor_dataservice_f947abe7695fd761, []int{0}
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
	return fileDescriptor_dataservice_f947abe7695fd761, []int{1}
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
	return fileDescriptor_dataservice_f947abe7695fd761, []int{2}
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
	return fileDescriptor_dataservice_f947abe7695fd761, []int{3}
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
	return fileDescriptor_dataservice_f947abe7695fd761, []int{4}
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
	return fileDescriptor_dataservice_f947abe7695fd761, []int{5}
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
	return fileDescriptor_dataservice_f947abe7695fd761, []int{6}
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
	return fileDescriptor_dataservice_f947abe7695fd761, []int{7}
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
	proto.RegisterFile("ssn/dataservice/v1alpha1/dataservice.proto", fileDescriptor_dataservice_f947abe7695fd761)
}

var fileDescriptor_dataservice_f947abe7695fd761 = []byte{
	// 1106 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xa4, 0x97, 0xcd, 0x4e, 0x23, 0x47,
	0x10, 0xc7, 0xe5, 0x61, 0xd9, 0xd8, 0x6d, 0x63, 0xd8, 0x66, 0x61, 0x47, 0xb0, 0x59, 0x4d, 0xac,
	0xa0, 0x38, 0xab, 0x8d, 0x9d, 0x25, 0x97, 0x64, 0x23, 0xc5, 0xc2, 0x1f, 0x48, 0x48, 0x9b, 0x0d,
	0x32, 0x88, 0x48, 0x9b, 0xc3, 0xa8, 0x3d, 0x5d, 0x36, 0x2d, 0xc6, 0xdd, 0x43, 0x77, 0x8f, 0xc3,
	0x48, 0x39, 0xe5, 0x15, 0xf2, 0x3a, 0x79, 0x87, 0x1c, 0xf2, 0x0a, 0x39, 0xf9, 0x9a, 0x17, 0x88,
	0xe6, 0x93, 0xc1, 0xe0, 0xcd, 0x38, 0xb9, 0x41, 0x57, 0xfd, 0x7f, 0x55, 0xdd, 0x55, 0x43, 0x15,
	0xe8, 0xa5, 0x52, 0xbc, 0x4d, 0x89, 0x26, 0x0a, 0xe4, 0x8c, 0x39, 0xd0, 0x9e, 0xbd, 0x26, 0xae,
	0x77, 0x49, 0x5e, 0xe7, 0x0f, 0x5b, 0x9e, 0x14, 0x5a, 0x60, 0x53, 0x29, 0xde, 0xca, 0x1f, 0xa7,
	0xbe, 0x7b, 0xcf, 0x27, 0xc0, 0xed, 0xd1, 0xb5, 0xad, 0x9c, 0x4b, 0x98, 0x92, 0xf6, 0xe8, 0xda,
	0x1e, 0x33, 0x70, 0x69, 0xac, 0x7b, 0xc0, 0xaa, 0xc9, 0xc8, 0x85, 0xcc, 0x2a, 0xc4, 0xc4, 0x85,
	0x36, 0xf1, 0x58, 0x9b, 0x70, 0x2e, 0x34, 0xd1, 0x4c, 0x70, 0x95, 0x58, 0xf7, 0x13, 0x6b, 0xf4,
	0xdb, 0xc8, 0x1f, 0xb7, 0x61, 0xea, 0xe9, 0x20, 0x31, 0xbe, 0x58, 0x34, 0xfe, 0x2c, 0x89, 0xe7,
	0x81, 0x4c, 0xc5, 0xbb, 0x89, 0x5d, 0x07, 0x1e, 0x84, 0xf7, 0x49, 0x43, 0xbe, 0x08, 0x2f, 0x1d,
	0x1d, 0x6a, 0xb8, 0xd1, 0xf6, 0x6d, 0xd4, 0xd8, 0xde, 0xf8, 0xdb, 0x40, 0xe5, 0xbe, 0x70, 0xfc,
	0x29, 0x70, 0x8d, 0xdb, 0xc8, 0xd0, 0xc4, 0x2c, 0x59, 0xa5, 0x66, 0xf5, 0xd0, 0x6c, 0x85, 0x4f,
	0x10, 0x2a, 0x5b, 0xe7, 0x70, 0xa3, 0x8f, 0x32, 0x61, 0x77, 0x7d, 0xde, 0x31, 0xcc, 0xd2, 0xd0,
	0xd0, 0x04, 0xef, 0xa3, 0xf5, 0x51, 0xa0, 0x41, 0x99, 0x86, 0x55, 0x6a, 0xd6, 0x52, 0x4b, 0x7c,
	0x86, 0x3b, 0xc8, 0x60, 0xd4, 0x5c, 0xb3, 0x4a, 0xcd, 0x4a, 0xb7, 0x3d, 0xef, 0x7c, 0xd6, 0x38,
	0x38, 0x06, 0xa0, 0x23, 0xe2, 0x5c, 0x59, 0x27, 0xfd, 0x57, 0x96, 0x22, 0x53, 0xb0, 0x88, 0xb2,
	0x06, 0x7c, 0x26, 0x02, 0x4b, 0xc2, 0xb5, 0x0f, 0x4a, 0x5b, 0x8c, 0xce, 0x3b, 0x46, 0xb9, 0x34,
	0x34, 0x18, 0xc5, 0x9f, 0xa0, 0xb2, 0x23, 0xb8, 0xf2, 0xa7, 0x20, 0xcd, 0x47, 0x11, 0x66, 0x3d,
	0x36, 0x66, 0xc7, 0xf8, 0x3d, 0x7a, 0xa4, 0xc9, 0x44, 0x99, 0xeb, 0xd6, 0x5a, 0xb3, 0xd2, 0x3d,
	0x9e, 0x77, 0x7a, 0x8d, 0xa3, 0x73, 0x32, 0x51, 0x16, 0x85, 0x31, 0xe3, 0x40, 0xad, 0x51, 0x60,
	0xa5, 0xce, 0xaf, 0x2c, 0xe0, 0x92, 0x39, 0x97, 0xf1, 0x69, 0x52, 0x58, 0x8b, 0x8d, 0xad, 0x19,
	0x71, 0x41, 0x5f, 0x41, 0x60, 0x31, 0x65, 0xf9, 0x0a, 0xe8, 0x30, 0x62, 0xe2, 0x01, 0xaa, 0x6a,
	0xe9, 0x83, 0x3d, 0x23, 0xae, 0x0f, 0xca, 0x7c, 0x1c, 0x3d, 0xcb, 0xa7, 0xad, 0x65, 0x9d, 0xd1,
	0x3a, 0x97, 0x3e, 0x5c, 0x44, 0xbe, 0x43, 0xa4, 0xb3, 0x9f, 0xdf, 0xe0, 0x79, 0x67, 0x13, 0x6d,
	0x68, 0x49, 0x18, 0x67, 0x7c, 0x62, 0x87, 0xd2, 0xc6, 0x1f, 0x35, 0x84, 0x6e, 0xdd, 0x71, 0x17,
	0xd5, 0xb5, 0xd0, 0xc4, 0xb5, 0x19, 0x77, 0x5c, 0x7b, 0x46, 0x74, 0x52, 0x83, 0xe7, 0xad, 0xb8,
	0xaa, 0xad, 0xb4, 0xea, 0xad, 0xbe, 0xf0, 0x47, 0x6e, 0x2c, 0x1b, 0xd6, 0x22, 0xcd, 0x09, 0x77,
	0xdc, 0x0b, 0xa2, 0xf1, 0x37, 0xa8, 0x12, 0x33, 0x42, 0xb9, 0x51, 0x40, 0x5e, 0x8e, 0xdc, 0x43,
	0x69, 0x16, 0x1e, 0x6e, 0x92, 0xf0, 0x6b, 0x85, 0xc3, 0x0f, 0x6e, 0xe2, 0xf0, 0xdf, 0x22, 0x24,
	0x24, 0x05, 0x19, 0xde, 0x0f, 0xa2, 0x6a, 0x55, 0x0f, 0x9f, 0xa4, 0xfa, 0xa8, 0x8b, 0xfa, 0x44,
	0x43, 0xb7, 0x32, 0xef, 0x3c, 0xc6, 0x8f, 0xfa, 0x47, 0xe7, 0x83, 0x61, 0x25, 0xf2, 0x0f, 0x4f,
	0xf1, 0x31, 0xda, 0xf2, 0x48, 0x10, 0xb6, 0xa0, 0x4d, 0x7d, 0x88, 0x11, 0xeb, 0x05, 0x10, 0xf5,
	0x44, 0xd5, 0xf7, 0x21, 0xe2, 0x1c, 0xa1, 0x0d, 0x9a, 0xf4, 0xb2, 0x1d, 0x0a, 0x92, 0x9a, 0xdd,
	0xbf, 0xc7, 0x99, 0x96, 0x8c, 0x4f, 0x92, 0x7b, 0xa4, 0x92, 0xf3, 0xc0, 0x03, 0xfc, 0x35, 0x2a,
	0x3b, 0xbe, 0x94, 0xc0, 0x9d, 0xc0, 0xfc, 0xa8, 0x80, 0x3a, 0xf3, 0xc6, 0x3f, 0xa0, 0x1d, 0x47,
	0x02, 0x65, 0xda, 0x76, 0x88, 0xa4, 0xb6, 0x4b, 0x94, 0xb6, 0xc7, 0xc2, 0x97, 0x66, 0xb9, 0x00,
	0x06, 0xc7, 0xd2, 0x1e, 0x91, 0xf4, 0x2d, 0x51, 0xfa, 0x58, 0xf8, 0x12, 0xf7, 0x50, 0x7a, 0x3f,
	0x7b, 0x0a, 0xfa, 0x52, 0x50, 0xb3, 0x52, 0x80, 0xb4, 0x91, 0x68, 0xbe, 0x8f, 0x24, 0x78, 0x80,
	0xb6, 0x84, 0x23, 0x6d, 0x97, 0x71, 0xb0, 0xe9, 0x55, 0xfc, 0x2a, 0xa8, 0x08, 0x46, 0x38, 0xf2,
	0x2d, 0xe3, 0xd0, 0xbf, 0x8a, 0x9e, 0xe5, 0x14, 0xed, 0xe6, 0x31, 0x69, 0x5e, 0x8c, 0x9a, 0xd5,
	0x22, 0xb7, 0xcb, 0x60, 0xa7, 0xb1, 0xf0, 0x84, 0xe2, 0x21, 0x7a, 0x96, 0x27, 0xc6, 0xf7, 0x17,
	0x32, 0x44, 0xd6, 0x0a, 0x20, 0xb7, 0x33, 0x64, 0x2f, 0x51, 0x9e, 0xd0, 0x3b, 0x59, 0x2a, 0xc8,
	0x67, 0xb9, 0xb1, 0x42, 0x96, 0x67, 0x70, 0x9b, 0xa5, 0x83, 0xac, 0x3c, 0x71, 0x44, 0xf8, 0xd5,
	0x84, 0x49, 0x71, 0x27, 0xdd, 0x7a, 0x01, 0xf6, 0x7e, 0xc6, 0xee, 0x26, 0x88, 0x5c, 0xda, 0x0b,
	0x41, 0x3c, 0xd7, 0x57, 0xf7, 0x82, 0x6c, 0xae, 0x14, 0xe4, 0x34, 0x41, 0x2c, 0x79, 0x1b, 0x2e,
	0xf2, 0x6f, 0xb3, 0xb5, 0xc2, 0xdb, 0xbc, 0x13, 0xb7, 0x6f, 0x93, 0x27, 0x8e, 0x59, 0x9e, 0xf8,
	0x64, 0x05, 0xe2, 0x31, 0x7b, 0x98, 0xc8, 0xdd, 0x3c, 0x11, 0xaf, 0x92, 0xa3, 0x9b, 0x27, 0xee,
	0x28, 0xdf, 0xf3, 0x5c, 0x06, 0xd2, 0x76, 0x84, 0xf4, 0x84, 0x24, 0x1a, 0x42, 0xe0, 0x76, 0x91,
	0x1e, 0x4b, 0xa5, 0xbd, 0x54, 0x79, 0x8f, 0xe8, 0x73, 0x2d, 0x03, 0xdb, 0x11, 0x14, 0xcc, 0xa7,
	0xab, 0x11, 0x23, 0x65, 0x4f, 0x50, 0x08, 0xbf, 0x73, 0xc6, 0x67, 0x82, 0x39, 0x60, 0x73, 0x7f,
	0x3a, 0x02, 0x69, 0xee, 0x14, 0xf9, 0x40, 0x13, 0xcd, 0xbb, 0x48, 0xd2, 0xf8, 0x11, 0xed, 0xf4,
	0x24, 0x10, 0x0d, 0xe9, 0x30, 0x1f, 0xc6, 0x03, 0x15, 0x7f, 0x87, 0xca, 0xe9, 0x1f, 0xb8, 0x64,
	0xaa, 0x34, 0x96, 0x8f, 0xb0, 0x4c, 0x9c, 0x69, 0x1a, 0x4d, 0xb4, 0xbb, 0x08, 0x56, 0x9e, 0xe0,
	0x0a, 0x70, 0x3d, 0x9a, 0xef, 0x21, 0xb3, 0x12, 0x8e, 0xeb, 0xc6, 0x01, 0xda, 0x1e, 0x02, 0xa1,
	0x8b, 0x09, 0x2c, 0xba, 0x5d, 0xa0, 0xa7, 0x77, 0xdd, 0x12, 0xdc, 0xff, 0x4d, 0x34, 0x40, 0xbb,
	0xa7, 0x12, 0x3c, 0x22, 0x21, 0x5d, 0x33, 0x96, 0x64, 0x80, 0x9b, 0xd1, 0x9a, 0x63, 0x7c, 0x78,
	0xcd, 0x89, 0xf6, 0x9b, 0x03, 0x54, 0xcf, 0x06, 0x4a, 0xbc, 0xe8, 0x84, 0x93, 0xb1, 0x36, 0xcc,
	0xc6, 0x4c, 0x37, 0x3c, 0x6c, 0xfc, 0x82, 0x36, 0xff, 0x2d, 0xe6, 0xc2, 0x32, 0x61, 0xfc, 0xb7,
	0x65, 0x02, 0xe3, 0x64, 0xdf, 0x59, 0x0b, 0xf7, 0x9d, 0x78, 0x4f, 0x39, 0xfc, 0x7d, 0x0d, 0x55,
	0xfb, 0x44, 0x93, 0xb3, 0x98, 0x81, 0x15, 0xaa, 0xdf, 0xad, 0x18, 0x6e, 0x2f, 0x8f, 0xf3, 0x60,
	0xd3, 0xec, 0x7d, 0x59, 0x5c, 0x90, 0x54, 0x6f, 0x8a, 0x6a, 0xf9, 0xaa, 0xe2, 0x2f, 0x96, 0x13,
	0x1e, 0x68, 0x92, 0xbd, 0x56, 0x51, 0xf7, 0x24, 0xdc, 0x4f, 0x68, 0x73, 0xa1, 0xd8, 0xf8, 0x03,
	0x39, 0x3f, 0xdc, 0x17, 0x7b, 0xbb, 0xf7, 0x3e, 0xb0, 0x41, 0xb8, 0x71, 0x63, 0x17, 0x95, 0x33,
	0xea, 0xe7, 0xcb, 0xa9, 0x05, 0x71, 0x8d, 0x8f, 0x7f, 0xfd, 0xf3, 0xaf, 0xdf, 0x8c, 0x67, 0x0d,
	0x7c, 0xfb, 0x0f, 0xc7, 0x38, 0x91, 0xbe, 0x29, 0xbd, 0xec, 0x6e, 0xbc, 0xaf, 0xe6, 0xf0, 0xa3,
	0xc7, 0x91, 0xfa, 0xab, 0x7f, 0x02, 0x00, 0x00, 0xff, 0xff, 0xae, 0x9d, 0x9c, 0x66, 0xae, 0x0c,
	0x00, 0x00,
}
