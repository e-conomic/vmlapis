// Code generated by protoc-gen-go. DO NOT EDIT.
// source: ssn/dataservice/v1alpha1/dataservice.proto

package dataservice

import (
	_ "."
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	_ "github.com/golang/protobuf/ptypes/empty"
	wrappers "github.com/golang/protobuf/ptypes/wrappers"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	date "google.golang.org/genproto/googleapis/type/date"
	math "math"
	_type "ssn/type"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

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
	return fileDescriptor_883d2597e3f7b414, []int{0}
}

func (m *Document) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Document.Unmarshal(m, b)
}
func (m *Document) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Document.Marshal(b, m, deterministic)
}
func (m *Document) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Document.Merge(m, src)
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
	return fileDescriptor_883d2597e3f7b414, []int{1}
}

func (m *TrueValues) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TrueValues.Unmarshal(m, b)
}
func (m *TrueValues) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TrueValues.Marshal(b, m, deterministic)
}
func (m *TrueValues) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TrueValues.Merge(m, src)
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
	return fileDescriptor_883d2597e3f7b414, []int{2}
}

func (m *CreateDocumentRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateDocumentRequest.Unmarshal(m, b)
}
func (m *CreateDocumentRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateDocumentRequest.Marshal(b, m, deterministic)
}
func (m *CreateDocumentRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateDocumentRequest.Merge(m, src)
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
	return fileDescriptor_883d2597e3f7b414, []int{3}
}

func (m *CreateDocumentResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateDocumentResponse.Unmarshal(m, b)
}
func (m *CreateDocumentResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateDocumentResponse.Marshal(b, m, deterministic)
}
func (m *CreateDocumentResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateDocumentResponse.Merge(m, src)
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
	return fileDescriptor_883d2597e3f7b414, []int{4}
}

func (m *ReadDocumentRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ReadDocumentRequest.Unmarshal(m, b)
}
func (m *ReadDocumentRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ReadDocumentRequest.Marshal(b, m, deterministic)
}
func (m *ReadDocumentRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ReadDocumentRequest.Merge(m, src)
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
	return fileDescriptor_883d2597e3f7b414, []int{5}
}

func (m *ReadDocumentResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ReadDocumentResponse.Unmarshal(m, b)
}
func (m *ReadDocumentResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ReadDocumentResponse.Marshal(b, m, deterministic)
}
func (m *ReadDocumentResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ReadDocumentResponse.Merge(m, src)
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
	return fileDescriptor_883d2597e3f7b414, []int{6}
}

func (m *PrepareFeedbackRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_PrepareFeedbackRequest.Unmarshal(m, b)
}
func (m *PrepareFeedbackRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_PrepareFeedbackRequest.Marshal(b, m, deterministic)
}
func (m *PrepareFeedbackRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PrepareFeedbackRequest.Merge(m, src)
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
	return fileDescriptor_883d2597e3f7b414, []int{7}
}

func (m *FeedbackRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_FeedbackRequest.Unmarshal(m, b)
}
func (m *FeedbackRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_FeedbackRequest.Marshal(b, m, deterministic)
}
func (m *FeedbackRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_FeedbackRequest.Merge(m, src)
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

func init() {
	proto.RegisterFile("ssn/dataservice/v1alpha1/dataservice.proto", fileDescriptor_883d2597e3f7b414)
}

var fileDescriptor_883d2597e3f7b414 = []byte{
	// 1115 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xa4, 0x97, 0xdb, 0x6e, 0xdb, 0x46,
	0x13, 0xc7, 0x21, 0x29, 0x76, 0xa4, 0xd5, 0xc1, 0xce, 0x3a, 0x76, 0x08, 0x3b, 0x5f, 0xc0, 0x4f,
	0xa8, 0x51, 0x35, 0x48, 0xa5, 0xc6, 0xbd, 0x69, 0x53, 0xa0, 0x82, 0x75, 0x30, 0x60, 0x20, 0x4d,
	0x0d, 0xda, 0x70, 0x81, 0xf4, 0x82, 0x58, 0x91, 0x23, 0x79, 0x61, 0x6a, 0x97, 0xd9, 0x5d, 0xaa,
	0x16, 0xd0, 0xab, 0xbe, 0x42, 0xef, 0xfa, 0x2c, 0x7d, 0x87, 0x5e, 0xf4, 0x15, 0x7a, 0xa5, 0xa7,
	0x28, 0xb8, 0x3c, 0x98, 0x96, 0xad, 0x94, 0x6a, 0xef, 0xc8, 0xd9, 0xf9, 0xff, 0x66, 0x76, 0x67,
	0xa9, 0x19, 0xa1, 0x97, 0x52, 0xb2, 0x8e, 0x4b, 0x14, 0x91, 0x20, 0x66, 0xd4, 0x81, 0xce, 0xec,
	0x35, 0xf1, 0xfc, 0x2b, 0xf2, 0x3a, 0x6b, 0x6c, 0xfb, 0x82, 0x2b, 0x8e, 0x0d, 0x29, 0x59, 0x3b,
	0x6b, 0x4e, 0x7c, 0xf7, 0x1b, 0xa3, 0x0f, 0xf6, 0x98, 0x82, 0xe7, 0x46, 0x9e, 0xfa, 0x5d, 0x91,
	0x91, 0x17, 0x2b, 0xf7, 0x9f, 0x4f, 0x38, 0x9f, 0x78, 0xd0, 0x21, 0x3e, 0xed, 0x10, 0xc6, 0xb8,
	0x22, 0x8a, 0x72, 0x26, 0xe3, 0xd5, 0x83, 0x78, 0x55, 0xbf, 0x8d, 0x82, 0x71, 0x07, 0xa6, 0xbe,
	0x9a, 0xc7, 0x8b, 0x2f, 0x96, 0x17, 0x7f, 0x12, 0xc4, 0xf7, 0x41, 0x24, 0xe2, 0xbd, 0x78, 0x5d,
	0xcd, 0x7d, 0x08, 0x73, 0x4e, 0x42, 0xbe, 0x08, 0x37, 0xa6, 0x8d, 0x0a, 0x6e, 0x94, 0x7d, 0x1b,
	0x35, 0x5a, 0x6f, 0xfe, 0x56, 0x42, 0xe5, 0x01, 0x77, 0x82, 0x29, 0x30, 0x85, 0x3b, 0xa8, 0xa8,
	0x88, 0x51, 0x30, 0x0b, 0xad, 0xea, 0x91, 0xd1, 0x0e, 0xb7, 0x19, 0x2a, 0xdb, 0x17, 0x70, 0xa3,
	0x8e, 0x53, 0x61, 0x6f, 0x63, 0xd1, 0x2d, 0x1a, 0x05, 0xab, 0xa8, 0x08, 0x3e, 0x40, 0x1b, 0xa3,
	0xb9, 0x02, 0x69, 0x14, 0xcd, 0x42, 0xab, 0x96, 0xac, 0x44, 0x36, 0xdc, 0x45, 0x45, 0xea, 0x1a,
	0x25, 0xb3, 0xd0, 0xaa, 0xf4, 0x3a, 0x8b, 0x6e, 0xb1, 0x5c, 0x58, 0x74, 0x3f, 0x6d, 0x1e, 0x9e,
	0x00, 0xb8, 0x23, 0xe2, 0x5c, 0x9b, 0xa7, 0x83, 0x57, 0xa6, 0x24, 0x53, 0x30, 0x89, 0x34, 0x87,
	0x6c, 0xc6, 0xe7, 0xa6, 0x80, 0x0f, 0x01, 0x48, 0x65, 0x52, 0xd7, 0x2a, 0x52, 0x17, 0xff, 0x1f,
	0x95, 0x1d, 0xce, 0x64, 0x30, 0x05, 0x61, 0x3c, 0xd2, 0x98, 0x0d, 0x8d, 0xb1, 0x52, 0x33, 0x7e,
	0x8f, 0x1e, 0x29, 0x32, 0x91, 0xc6, 0x86, 0x59, 0x6a, 0x55, 0x7a, 0x27, 0x8b, 0x6e, 0xbf, 0x79,
	0x7c, 0x41, 0x26, 0xd2, 0x74, 0x61, 0x4c, 0x19, 0xb8, 0xe6, 0x68, 0x6e, 0x26, 0xce, 0xaf, 0x4c,
	0x60, 0x82, 0x3a, 0x57, 0x91, 0x35, 0x2e, 0x9e, 0x49, 0xc7, 0xe6, 0x8c, 0x78, 0xa0, 0xae, 0x61,
	0x6e, 0x52, 0x69, 0x06, 0x12, 0x5c, 0x4b, 0x33, 0xf1, 0x10, 0x55, 0x95, 0x08, 0xc0, 0x9e, 0x11,
	0x2f, 0x00, 0x69, 0x6c, 0xea, 0x63, 0xf9, 0xa4, 0xbd, 0xaa, 0xfa, 0xed, 0x0b, 0x11, 0xc0, 0xa5,
	0xf6, 0xb5, 0x90, 0x4a, 0x9f, 0xf1, 0x21, 0x6a, 0x4c, 0xa9, 0x94, 0x94, 0x4d, 0x12, 0xd2, 0xe3,
	0x30, 0x59, 0xab, 0x1e, 0x5b, 0x23, 0xb7, 0x37, 0x78, 0xd1, 0xdd, 0x42, 0x75, 0x25, 0x08, 0x65,
	0xa1, 0x6b, 0x18, 0xa1, 0xf9, 0x47, 0x0d, 0xa1, 0x5b, 0x2a, 0xee, 0xa1, 0x86, 0xe2, 0x8a, 0x78,
	0x36, 0x65, 0x8e, 0x67, 0xcf, 0x88, 0x8a, 0x4b, 0xf5, 0xbc, 0x1d, 0x15, 0xbf, 0x9d, 0x5c, 0x8e,
	0xf6, 0x80, 0x07, 0x23, 0x2f, 0x92, 0x59, 0x35, 0xad, 0x39, 0x65, 0x8e, 0x77, 0x49, 0x14, 0xfe,
	0x1a, 0x55, 0x22, 0x46, 0x28, 0x2f, 0xe6, 0x90, 0x97, 0xb5, 0x7b, 0x28, 0x4d, 0xc3, 0xc3, 0x4d,
	0x1c, 0xbe, 0x94, 0x3b, 0xfc, 0xf0, 0x26, 0x0a, 0xff, 0x0d, 0x42, 0x5c, 0xb8, 0x20, 0xc2, 0xfd,
	0x81, 0x2e, 0x6a, 0xf5, 0xe8, 0x49, 0xa2, 0xd7, 0x97, 0x6d, 0x40, 0x14, 0xf4, 0x2a, 0x8b, 0xee,
	0x26, 0x7e, 0x34, 0x38, 0xbe, 0x18, 0x5a, 0x15, 0xed, 0x1f, 0x5a, 0xf1, 0x09, 0xda, 0xf6, 0xc9,
	0x3c, 0xbc, 0xa9, 0xb6, 0x1b, 0x40, 0x84, 0xd8, 0xc8, 0x81, 0x68, 0xc4, 0xaa, 0x41, 0x00, 0x9a,
	0x73, 0x8c, 0xea, 0x6e, 0x7c, 0xe5, 0xed, 0x50, 0x10, 0x97, 0xf6, 0xfe, 0x3e, 0xce, 0x95, 0x48,
	0x0a, 0x64, 0xd5, 0x12, 0xc9, 0xc5, 0xdc, 0x07, 0xfc, 0x15, 0x2a, 0x3b, 0x81, 0x10, 0xc0, 0x9c,
	0xb9, 0xf1, 0x38, 0x87, 0x3a, 0xf5, 0xc6, 0xdf, 0xa3, 0x5d, 0x47, 0x80, 0x4b, 0x95, 0xed, 0x10,
	0xe1, 0xda, 0x1e, 0x91, 0xca, 0x1e, 0xf3, 0x40, 0x18, 0xe5, 0x1c, 0x18, 0x1c, 0x49, 0xfb, 0x44,
	0xb8, 0x6f, 0x89, 0x54, 0x27, 0x3c, 0x10, 0xb8, 0x8f, 0x92, 0xfd, 0xd9, 0x53, 0x50, 0x57, 0xdc,
	0x35, 0x2a, 0x39, 0x48, 0xf5, 0x58, 0xf3, 0x9d, 0x96, 0xe0, 0x21, 0xda, 0xe6, 0x8e, 0xb0, 0x3d,
	0xca, 0xc0, 0x76, 0xaf, 0xa3, 0x53, 0x41, 0x79, 0x30, 0xdc, 0x11, 0x6f, 0x29, 0x83, 0xc1, 0xb5,
	0x3e, 0x96, 0x33, 0xb4, 0x97, 0xc5, 0x24, 0x79, 0x51, 0xd7, 0xa8, 0xe6, 0xd9, 0x5d, 0x0a, 0x3b,
	0x8b, 0x84, 0xa7, 0x2e, 0xb6, 0xd0, 0xb3, 0x2c, 0x31, 0xda, 0x3f, 0x17, 0x21, 0xb2, 0x96, 0x03,
	0xb9, 0x93, 0x22, 0xfb, 0xb1, 0xf2, 0xd4, 0xbd, 0x93, 0xa5, 0x84, 0x6c, 0x96, 0xf5, 0x35, 0xb2,
	0x3c, 0x87, 0xdb, 0x2c, 0x1d, 0x64, 0x66, 0x89, 0x23, 0xc2, 0xae, 0x27, 0x54, 0xf0, 0x3b, 0xe9,
	0x36, 0x72, 0xb0, 0x0f, 0x52, 0x76, 0x2f, 0x46, 0x64, 0xd2, 0x5e, 0x0a, 0xe2, 0x7b, 0x81, 0xbc,
	0x17, 0x64, 0x6b, 0xad, 0x20, 0x67, 0x31, 0x62, 0xc5, 0xd9, 0x30, 0x9e, 0x3d, 0x9b, 0xed, 0x35,
	0xce, 0xe6, 0x1d, 0xbf, 0x3d, 0x9b, 0x2c, 0x71, 0x4c, 0xb3, 0xc4, 0x27, 0x6b, 0x10, 0x4f, 0xe8,
	0xc3, 0x44, 0xe6, 0x65, 0x89, 0x78, 0x9d, 0x1c, 0xbd, 0x2c, 0x71, 0x57, 0x06, 0xbe, 0xef, 0x51,
	0x10, 0xb6, 0xc3, 0x85, 0xcf, 0x05, 0x51, 0x10, 0x02, 0x77, 0xf2, 0xdc, 0xb1, 0x44, 0xda, 0x4f,
	0x94, 0xf7, 0x88, 0x01, 0x53, 0x62, 0x6e, 0x3b, 0xdc, 0x05, 0xe3, 0xe9, 0x7a, 0x44, 0xad, 0xec,
	0x73, 0x17, 0xc2, 0xef, 0x9c, 0xb2, 0x19, 0xa7, 0x0e, 0xd8, 0x2c, 0x98, 0x8e, 0x40, 0x18, 0xbb,
	0x79, 0x3e, 0xd0, 0x58, 0xf3, 0x4e, 0x4b, 0x9a, 0x3f, 0xa0, 0xdd, 0xbe, 0x00, 0xa2, 0x20, 0xe9,
	0xf9, 0x56, 0xd4, 0x72, 0xf1, 0xb7, 0xa8, 0x9c, 0xfc, 0xc0, 0xc5, 0x5d, 0xa5, 0xb9, 0xba, 0xd3,
	0xa5, 0xe2, 0x54, 0xd3, 0x6c, 0xa1, 0xbd, 0x65, 0xb0, 0xf4, 0x39, 0x93, 0x80, 0x1b, 0x7a, 0x0c,
	0x08, 0x99, 0x95, 0xb0, 0xab, 0x37, 0x0f, 0xd1, 0x8e, 0x05, 0xc4, 0x5d, 0x4e, 0x60, 0xd9, 0xed,
	0x12, 0x3d, 0xbd, 0xeb, 0x16, 0xe3, 0xfe, 0x6b, 0xa2, 0x73, 0xb4, 0x77, 0x26, 0xc0, 0x27, 0x02,
	0x92, 0x41, 0x64, 0x45, 0x06, 0xb8, 0xa5, 0xa7, 0xa1, 0xe2, 0xc7, 0xa7, 0x21, 0x3d, 0x06, 0x1d,
	0xa2, 0x46, 0xda, 0x50, 0xa2, 0x79, 0x28, 0xec, 0x8c, 0x35, 0x2b, 0x6d, 0x33, 0xbd, 0xd0, 0xd8,
	0xfc, 0x19, 0x6d, 0xfd, 0x53, 0xcc, 0xa5, 0x99, 0xa3, 0xf8, 0x2f, 0x67, 0x0e, 0x1c, 0x8f, 0x45,
	0x25, 0x3d, 0x69, 0xe8, 0xe7, 0xa3, 0xdf, 0x4b, 0xa8, 0x3a, 0x20, 0x8a, 0x9c, 0x47, 0x0c, 0x2c,
	0x51, 0xe3, 0x6e, 0xc5, 0x70, 0x67, 0x75, 0x9c, 0x07, 0x2f, 0xcd, 0xfe, 0x17, 0xf9, 0x05, 0x71,
	0xf5, 0xa6, 0xa8, 0x96, 0xad, 0x2a, 0xfe, 0x7c, 0x35, 0xe1, 0x81, 0x4b, 0xb2, 0xdf, 0xce, 0xeb,
	0x1e, 0x87, 0xfb, 0x11, 0x6d, 0x2d, 0x15, 0x1b, 0x7f, 0x24, 0xe7, 0x87, 0xef, 0xc5, 0xfe, 0xde,
	0xbd, 0x0f, 0x6c, 0x18, 0x0e, 0xe6, 0xd8, 0x43, 0xe5, 0x94, 0xfa, 0xd9, 0x6a, 0x6a, 0x4e, 0x5c,
	0xf3, 0x7f, 0xbf, 0xfc, 0xf9, 0xd7, 0xaf, 0xc5, 0x67, 0x4d, 0x7c, 0xfb, 0xdf, 0x63, 0x1c, 0x4b,
	0xdf, 0x14, 0x5e, 0xf6, 0xea, 0xef, 0xab, 0x19, 0xfc, 0x68, 0x53, 0xab, 0xbf, 0xfc, 0x3b, 0x00,
	0x00, 0xff, 0xff, 0x34, 0x5f, 0x27, 0x73, 0xb9, 0x0c, 0x00, 0x00,
}
