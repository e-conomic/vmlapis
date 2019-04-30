// Code generated by protoc-gen-go. DO NOT EDIT.
// source: ssn/annotator/v1alpha1/annotator.proto

package annotator

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import _type "github.com/e-conomic/vmlapis/gen/go/ssn/type"
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

type Feature_Type int32

const (
	// Run default feature set
	Feature_DEFAULT Feature_Type = 0
	// Return text annotation
	Feature_TEXT_ANNOTATION Feature_Type = 1
	// Run order date detection
	Feature_ORDER_DATE Feature_Type = 2
	// Run due date detection
	Feature_PAYMENT_DUE_DATE Feature_Type = 3
	// Run currency detection
	Feature_CURRENCY Feature_Type = 4
	// Run total vat detection
	Feature_TOTAL_VAT Feature_Type = 5
	// Run total incl vat detection
	Feature_TOTAL_INCL_VAT Feature_Type = 6
	// Run total excl vat detection
	Feature_TOTAL_EXCL_VAT Feature_Type = 7
	// Run supplier corporate id detection
	Feature_SUPPLIER_CORPORATE_ID Feature_Type = 8
	// Run country code detection
	Feature_SUPPLIER_COUNTRY_CODE Feature_Type = 9
	// Run document type detection
	Feature_DOCUMENT_TYPE Feature_Type = 10
	// Run pyment method detection
	Feature_PAYMENT_METHOD Feature_Type = 11
	// Run credit card number detection
	Feature_CREDIT_CARD_NUMBER Feature_Type = 12
	// Run invoice number detection
	Feature_INVOICE_NUMBER Feature_Type = 13
	// Run danish ocr line detection, for the type
	Feature_OCR_LINE_DK_TYPE Feature_Type = 14
	// Run danish ocr line detection, for the payment id
	Feature_OCR_LINE_DK_PAYMENT_ID Feature_Type = 15
	// Run danish ocr line detection, for the creditor id
	Feature_OCR_LINE_DK_CREDITOR_ID Feature_Type = 16
	// Run swedish ocr line detection for the payment id
	Feature_OCR_LINE_SE_PAYMENT_ID Feature_Type = 17
	// Run swedish ocr line detection for the bankgiro creditor id
	Feature_OCR_LINE_SE_BANKGIRO_CREDITOR_ID Feature_Type = 18
	// Run swedish ocr line detection for the plusgiro creditor id
	Feature_OCR_LINE_SE_PLUSGIRO_CREDITOR_ID Feature_Type = 19
	// Run norwegian ocr line detection or the payment id
	Feature_OCR_LINE_NO_PAYMENT_ID Feature_Type = 20
	// Run finish ocr line detection or the payment id
	Feature_OCR_LINE_FI_PAYMENT_ID Feature_Type = 21
	// Run dutch ocr line detection for the payment id
	Feature_OCR_LINE_NL_PAYMENT_ID Feature_Type = 22
	// Return document text
	Feature_TEXT Feature_Type = 23
)

var Feature_Type_name = map[int32]string{
	0:  "DEFAULT",
	1:  "TEXT_ANNOTATION",
	2:  "ORDER_DATE",
	3:  "PAYMENT_DUE_DATE",
	4:  "CURRENCY",
	5:  "TOTAL_VAT",
	6:  "TOTAL_INCL_VAT",
	7:  "TOTAL_EXCL_VAT",
	8:  "SUPPLIER_CORPORATE_ID",
	9:  "SUPPLIER_COUNTRY_CODE",
	10: "DOCUMENT_TYPE",
	11: "PAYMENT_METHOD",
	12: "CREDIT_CARD_NUMBER",
	13: "INVOICE_NUMBER",
	14: "OCR_LINE_DK_TYPE",
	15: "OCR_LINE_DK_PAYMENT_ID",
	16: "OCR_LINE_DK_CREDITOR_ID",
	17: "OCR_LINE_SE_PAYMENT_ID",
	18: "OCR_LINE_SE_BANKGIRO_CREDITOR_ID",
	19: "OCR_LINE_SE_PLUSGIRO_CREDITOR_ID",
	20: "OCR_LINE_NO_PAYMENT_ID",
	21: "OCR_LINE_FI_PAYMENT_ID",
	22: "OCR_LINE_NL_PAYMENT_ID",
	23: "TEXT",
}
var Feature_Type_value = map[string]int32{
	"DEFAULT":                          0,
	"TEXT_ANNOTATION":                  1,
	"ORDER_DATE":                       2,
	"PAYMENT_DUE_DATE":                 3,
	"CURRENCY":                         4,
	"TOTAL_VAT":                        5,
	"TOTAL_INCL_VAT":                   6,
	"TOTAL_EXCL_VAT":                   7,
	"SUPPLIER_CORPORATE_ID":            8,
	"SUPPLIER_COUNTRY_CODE":            9,
	"DOCUMENT_TYPE":                    10,
	"PAYMENT_METHOD":                   11,
	"CREDIT_CARD_NUMBER":               12,
	"INVOICE_NUMBER":                   13,
	"OCR_LINE_DK_TYPE":                 14,
	"OCR_LINE_DK_PAYMENT_ID":           15,
	"OCR_LINE_DK_CREDITOR_ID":          16,
	"OCR_LINE_SE_PAYMENT_ID":           17,
	"OCR_LINE_SE_BANKGIRO_CREDITOR_ID": 18,
	"OCR_LINE_SE_PLUSGIRO_CREDITOR_ID": 19,
	"OCR_LINE_NO_PAYMENT_ID":           20,
	"OCR_LINE_FI_PAYMENT_ID":           21,
	"OCR_LINE_NL_PAYMENT_ID":           22,
	"TEXT":                             23,
}

func (x Feature_Type) String() string {
	return proto.EnumName(Feature_Type_name, int32(x))
}
func (Feature_Type) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_annotator_cd00d75023b08e65, []int{0, 0}
}

type Feature struct {
	// The feature type.
	Type Feature_Type `protobuf:"varint,1,opt,name=type,proto3,enum=ssn.annotator.v1alpha1.Feature_Type" json:"type,omitempty"`
	// Maximum number of results of this type. Does not apply to
	// `TEXT_ANNOTATION` or `DOCUMENT_TYPE`.
	MaxResults int32 `protobuf:"varint,2,opt,name=max_results,json=maxResults,proto3" json:"max_results,omitempty"`
	// The minimum confidence for predictions that the caller wants returned
	MinConfidence        _type.Confidence_Level `protobuf:"varint,3,opt,name=min_confidence,json=minConfidence,proto3,enum=ssn.type.Confidence_Level" json:"min_confidence,omitempty"`
	XXX_NoUnkeyedLiteral struct{}               `json:"-"`
	XXX_unrecognized     []byte                 `json:"-"`
	XXX_sizecache        int32                  `json:"-"`
}

func (m *Feature) Reset()         { *m = Feature{} }
func (m *Feature) String() string { return proto.CompactTextString(m) }
func (*Feature) ProtoMessage()    {}
func (*Feature) Descriptor() ([]byte, []int) {
	return fileDescriptor_annotator_cd00d75023b08e65, []int{0}
}
func (m *Feature) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Feature.Unmarshal(m, b)
}
func (m *Feature) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Feature.Marshal(b, m, deterministic)
}
func (dst *Feature) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Feature.Merge(dst, src)
}
func (m *Feature) XXX_Size() int {
	return xxx_messageInfo_Feature.Size(m)
}
func (m *Feature) XXX_DiscardUnknown() {
	xxx_messageInfo_Feature.DiscardUnknown(m)
}

var xxx_messageInfo_Feature proto.InternalMessageInfo

func (m *Feature) GetType() Feature_Type {
	if m != nil {
		return m.Type
	}
	return Feature_DEFAULT
}

func (m *Feature) GetMaxResults() int32 {
	if m != nil {
		return m.MaxResults
	}
	return 0
}

func (m *Feature) GetMinConfidence() _type.Confidence_Level {
	if m != nil {
		return m.MinConfidence
	}
	return _type.Confidence_UNKNOWN
}

type DocumentAnnotatorRequest struct {
	Document             *Document  `protobuf:"bytes,1,opt,name=document,proto3" json:"document,omitempty"`
	Features             []*Feature `protobuf:"bytes,2,rep,name=features,proto3" json:"features,omitempty"`
	XXX_NoUnkeyedLiteral struct{}   `json:"-"`
	XXX_unrecognized     []byte     `json:"-"`
	XXX_sizecache        int32      `json:"-"`
}

func (m *DocumentAnnotatorRequest) Reset()         { *m = DocumentAnnotatorRequest{} }
func (m *DocumentAnnotatorRequest) String() string { return proto.CompactTextString(m) }
func (*DocumentAnnotatorRequest) ProtoMessage()    {}
func (*DocumentAnnotatorRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_annotator_cd00d75023b08e65, []int{1}
}
func (m *DocumentAnnotatorRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DocumentAnnotatorRequest.Unmarshal(m, b)
}
func (m *DocumentAnnotatorRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DocumentAnnotatorRequest.Marshal(b, m, deterministic)
}
func (dst *DocumentAnnotatorRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DocumentAnnotatorRequest.Merge(dst, src)
}
func (m *DocumentAnnotatorRequest) XXX_Size() int {
	return xxx_messageInfo_DocumentAnnotatorRequest.Size(m)
}
func (m *DocumentAnnotatorRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_DocumentAnnotatorRequest.DiscardUnknown(m)
}

var xxx_messageInfo_DocumentAnnotatorRequest proto.InternalMessageInfo

func (m *DocumentAnnotatorRequest) GetDocument() *Document {
	if m != nil {
		return m.Document
	}
	return nil
}

func (m *DocumentAnnotatorRequest) GetFeatures() []*Feature {
	if m != nil {
		return m.Features
	}
	return nil
}

type DocumentAnnotatorResponse struct {
	// orderDate
	// ISO 8601 date string, ie. a string of the format "YYYY-MM-DD"
	// Example: "2019-12-31"
	OrderDate []*_type.Candidate `protobuf:"bytes,1,rep,name=order_date,json=orderDate,proto3" json:"order_date,omitempty"`
	// paymentDueDate
	// ISO 8601 date, ie. a string of the format "YYYY-MM-DD"
	// Example: "2019-12-31"
	PaymentDueDate []*_type.Candidate `protobuf:"bytes,2,rep,name=payment_due_date,json=paymentDueDate,proto3" json:"payment_due_date,omitempty"`
	// currency
	// ISO 4217 string, ie. a 3-letter capitalized string
	// Example: "NOK"
	Currency []*_type.Candidate `protobuf:"bytes,3,rep,name=currency,proto3" json:"currency,omitempty"`
	// totalVat
	// A string that parses as a two-decimal number
	// Example: "10.0" or "11.11"
	TotalVat []*_type.Candidate `protobuf:"bytes,4,rep,name=total_vat,json=totalVat,proto3" json:"total_vat,omitempty"`
	// totalInclVat
	// A string that parses as a two-decimal number
	// Example: "10.0" or "11.11"
	TotalInclVat []*_type.Candidate `protobuf:"bytes,5,rep,name=total_incl_vat,json=totalInclVat,proto3" json:"total_incl_vat,omitempty"`
	// totalExclVat
	// A string that parses as a two-decimal number
	// Example: "10.0" or "11.11"
	TotalExclVat []*_type.Candidate `protobuf:"bytes,6,rep,name=total_excl_vat,json=totalExclVat,proto3" json:"total_excl_vat,omitempty"`
	// supplierCorporateId
	// The company VAT number
	// Example: "123456789B01" (for Dutch companies)
	// or "12345678" (for Norwegian companies)
	// Note: The field is repeated because multiple VAT numbers might exist.
	// If you have the VAT number of you customer, you can use this information
	// to find out which VAT number belongs to the supplier of the invoice.
	SupplierCorporateId []*_type.Candidate `protobuf:"bytes,7,rep,name=supplier_corporate_id,json=supplierCorporateId,proto3" json:"supplier_corporate_id,omitempty"`
	// supplierCountryCode
	// ISO 3166-1 alpha-2 string, ei. a two-letter capitalized string
	// Example: "NO"
	SupplierCountryCode []*_type.Candidate `protobuf:"bytes,8,rep,name=supplier_country_code,json=supplierCountryCode,proto3" json:"supplier_country_code,omitempty"`
	// documentType
	// Either "Receipt" or "Invoice"
	DocumentType []*_type.Candidate `protobuf:"bytes,9,rep,name=document_type,json=documentType,proto3" json:"document_type,omitempty"`
	// paymentMethod
	// Either "Cash" or "CreditCard"
	PaymentMethod []*_type.Candidate `protobuf:"bytes,10,rep,name=payment_method,json=paymentMethod,proto3" json:"payment_method,omitempty"`
	// creditCardNumber
	// Four digits
	// Example: "0012"
	CreditCardNumber []*_type.Candidate `protobuf:"bytes,11,rep,name=credit_card_number,json=creditCardNumber,proto3" json:"credit_card_number,omitempty"`
	// invoiceNumber
	// The supplier defined identifier af the invoice
	// Example: "12345-A99"
	InvoiceNumber []*_type.Candidate `protobuf:"bytes,12,rep,name=invoice_number,json=invoiceNumber,proto3" json:"invoice_number,omitempty"`
	// Return text annotation
	TextAnnotation *_type.TextAnnotation `protobuf:"bytes,13,opt,name=text_annotation,json=textAnnotation,proto3" json:"text_annotation,omitempty"`
	// example: "71"
	OcrLineDkType []*_type.Candidate `protobuf:"bytes,14,rep,name=ocr_line_dk_type,json=ocrLineDkType,proto3" json:"ocr_line_dk_type,omitempty"`
	// example: "000002879094031"
	OcrLineDkPaymentId []*_type.Candidate `protobuf:"bytes,15,rep,name=ocr_line_dk_payment_id,json=ocrLineDkPaymentId,proto3" json:"ocr_line_dk_payment_id,omitempty"`
	// example: "86570807"
	OcrLineDkCreditorId []*_type.Candidate `protobuf:"bytes,16,rep,name=ocr_line_dk_creditor_id,json=ocrLineDkCreditorId,proto3" json:"ocr_line_dk_creditor_id,omitempty"`
	// example: "050765098"
	OcrLineSePaymentId []*_type.Candidate `protobuf:"bytes,17,rep,name=ocr_line_se_payment_id,json=ocrLineSePaymentId,proto3" json:"ocr_line_se_payment_id,omitempty"`
	// example: "2654507"
	OcrLineSeBankgiroCreditorId []*_type.Candidate `protobuf:"bytes,18,rep,name=ocr_line_se_bankgiro_creditor_id,json=ocrLineSeBankgiroCreditorId,proto3" json:"ocr_line_se_bankgiro_creditor_id,omitempty"`
	// example: "5000872"
	OcrLineSePlusgiroCreditorId []*_type.Candidate `protobuf:"bytes,19,rep,name=ocr_line_se_plusgiro_creditor_id,json=ocrLineSePlusgiroCreditorId,proto3" json:"ocr_line_se_plusgiro_creditor_id,omitempty"`
	// example: "12345678903"
	OcrLineNoPaymentId []*_type.Candidate `protobuf:"bytes,20,rep,name=ocr_line_no_payment_id,json=ocrLineNoPaymentId,proto3" json:"ocr_line_no_payment_id,omitempty"`
	// example: "0817937867870002"
	OcrLineFiPaymentId []*_type.Candidate `protobuf:"bytes,21,rep,name=ocr_line_fi_payment_id,json=ocrLineFiPaymentId,proto3" json:"ocr_line_fi_payment_id,omitempty"`
	// example: "00000159220010146012"
	OcrLineNlPaymentId []*_type.Candidate `protobuf:"bytes,22,rep,name=ocr_line_nl_payment_id,json=ocrLineNlPaymentId,proto3" json:"ocr_line_nl_payment_id,omitempty"`
	// Return a string containing the text from the document
	Text                 string   `protobuf:"bytes,23,opt,name=text,proto3" json:"text,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *DocumentAnnotatorResponse) Reset()         { *m = DocumentAnnotatorResponse{} }
func (m *DocumentAnnotatorResponse) String() string { return proto.CompactTextString(m) }
func (*DocumentAnnotatorResponse) ProtoMessage()    {}
func (*DocumentAnnotatorResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_annotator_cd00d75023b08e65, []int{2}
}
func (m *DocumentAnnotatorResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DocumentAnnotatorResponse.Unmarshal(m, b)
}
func (m *DocumentAnnotatorResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DocumentAnnotatorResponse.Marshal(b, m, deterministic)
}
func (dst *DocumentAnnotatorResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DocumentAnnotatorResponse.Merge(dst, src)
}
func (m *DocumentAnnotatorResponse) XXX_Size() int {
	return xxx_messageInfo_DocumentAnnotatorResponse.Size(m)
}
func (m *DocumentAnnotatorResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_DocumentAnnotatorResponse.DiscardUnknown(m)
}

var xxx_messageInfo_DocumentAnnotatorResponse proto.InternalMessageInfo

func (m *DocumentAnnotatorResponse) GetOrderDate() []*_type.Candidate {
	if m != nil {
		return m.OrderDate
	}
	return nil
}

func (m *DocumentAnnotatorResponse) GetPaymentDueDate() []*_type.Candidate {
	if m != nil {
		return m.PaymentDueDate
	}
	return nil
}

func (m *DocumentAnnotatorResponse) GetCurrency() []*_type.Candidate {
	if m != nil {
		return m.Currency
	}
	return nil
}

func (m *DocumentAnnotatorResponse) GetTotalVat() []*_type.Candidate {
	if m != nil {
		return m.TotalVat
	}
	return nil
}

func (m *DocumentAnnotatorResponse) GetTotalInclVat() []*_type.Candidate {
	if m != nil {
		return m.TotalInclVat
	}
	return nil
}

func (m *DocumentAnnotatorResponse) GetTotalExclVat() []*_type.Candidate {
	if m != nil {
		return m.TotalExclVat
	}
	return nil
}

func (m *DocumentAnnotatorResponse) GetSupplierCorporateId() []*_type.Candidate {
	if m != nil {
		return m.SupplierCorporateId
	}
	return nil
}

func (m *DocumentAnnotatorResponse) GetSupplierCountryCode() []*_type.Candidate {
	if m != nil {
		return m.SupplierCountryCode
	}
	return nil
}

func (m *DocumentAnnotatorResponse) GetDocumentType() []*_type.Candidate {
	if m != nil {
		return m.DocumentType
	}
	return nil
}

func (m *DocumentAnnotatorResponse) GetPaymentMethod() []*_type.Candidate {
	if m != nil {
		return m.PaymentMethod
	}
	return nil
}

func (m *DocumentAnnotatorResponse) GetCreditCardNumber() []*_type.Candidate {
	if m != nil {
		return m.CreditCardNumber
	}
	return nil
}

func (m *DocumentAnnotatorResponse) GetInvoiceNumber() []*_type.Candidate {
	if m != nil {
		return m.InvoiceNumber
	}
	return nil
}

func (m *DocumentAnnotatorResponse) GetTextAnnotation() *_type.TextAnnotation {
	if m != nil {
		return m.TextAnnotation
	}
	return nil
}

func (m *DocumentAnnotatorResponse) GetOcrLineDkType() []*_type.Candidate {
	if m != nil {
		return m.OcrLineDkType
	}
	return nil
}

func (m *DocumentAnnotatorResponse) GetOcrLineDkPaymentId() []*_type.Candidate {
	if m != nil {
		return m.OcrLineDkPaymentId
	}
	return nil
}

func (m *DocumentAnnotatorResponse) GetOcrLineDkCreditorId() []*_type.Candidate {
	if m != nil {
		return m.OcrLineDkCreditorId
	}
	return nil
}

func (m *DocumentAnnotatorResponse) GetOcrLineSePaymentId() []*_type.Candidate {
	if m != nil {
		return m.OcrLineSePaymentId
	}
	return nil
}

func (m *DocumentAnnotatorResponse) GetOcrLineSeBankgiroCreditorId() []*_type.Candidate {
	if m != nil {
		return m.OcrLineSeBankgiroCreditorId
	}
	return nil
}

func (m *DocumentAnnotatorResponse) GetOcrLineSePlusgiroCreditorId() []*_type.Candidate {
	if m != nil {
		return m.OcrLineSePlusgiroCreditorId
	}
	return nil
}

func (m *DocumentAnnotatorResponse) GetOcrLineNoPaymentId() []*_type.Candidate {
	if m != nil {
		return m.OcrLineNoPaymentId
	}
	return nil
}

func (m *DocumentAnnotatorResponse) GetOcrLineFiPaymentId() []*_type.Candidate {
	if m != nil {
		return m.OcrLineFiPaymentId
	}
	return nil
}

func (m *DocumentAnnotatorResponse) GetOcrLineNlPaymentId() []*_type.Candidate {
	if m != nil {
		return m.OcrLineNlPaymentId
	}
	return nil
}

func (m *DocumentAnnotatorResponse) GetText() string {
	if m != nil {
		return m.Text
	}
	return ""
}

type Document struct {
	// Document content, represented as a stream of bytes.
	// Note: As with all `bytes` fields, protobuffers use a pure binary
	// representation, whereas JSON representations use base64.
	Content []byte `protobuf:"bytes,1,opt,name=content,proto3" json:"content,omitempty"`
	// Google Cloud Storage image location, or publicly-accessible image
	// URL. If both `content` and `source` are provided for a document, `content`
	// takes precedence and is used to perform the scan request.
	Source               *DocumentSource `protobuf:"bytes,2,opt,name=source,proto3" json:"source,omitempty"`
	XXX_NoUnkeyedLiteral struct{}        `json:"-"`
	XXX_unrecognized     []byte          `json:"-"`
	XXX_sizecache        int32           `json:"-"`
}

func (m *Document) Reset()         { *m = Document{} }
func (m *Document) String() string { return proto.CompactTextString(m) }
func (*Document) ProtoMessage()    {}
func (*Document) Descriptor() ([]byte, []int) {
	return fileDescriptor_annotator_cd00d75023b08e65, []int{3}
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

func (m *Document) GetContent() []byte {
	if m != nil {
		return m.Content
	}
	return nil
}

func (m *Document) GetSource() *DocumentSource {
	if m != nil {
		return m.Source
	}
	return nil
}

type DocumentSource struct {
	// The URI of the source document. Can be either:
	//
	// 1. A publicly-accessible image HTTP/HTTPS URL. When fetching images from
	//    HTTP/HTTPS URLs, We cannot guarantee that the request will be
	//    completed. Your request may fail if the specified host denies the
	//    request (e.g. due to request throttling or DOS prevention).
	//
	HttpUri              string   `protobuf:"bytes,1,opt,name=http_uri,json=httpUri,proto3" json:"http_uri,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *DocumentSource) Reset()         { *m = DocumentSource{} }
func (m *DocumentSource) String() string { return proto.CompactTextString(m) }
func (*DocumentSource) ProtoMessage()    {}
func (*DocumentSource) Descriptor() ([]byte, []int) {
	return fileDescriptor_annotator_cd00d75023b08e65, []int{4}
}
func (m *DocumentSource) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DocumentSource.Unmarshal(m, b)
}
func (m *DocumentSource) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DocumentSource.Marshal(b, m, deterministic)
}
func (dst *DocumentSource) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DocumentSource.Merge(dst, src)
}
func (m *DocumentSource) XXX_Size() int {
	return xxx_messageInfo_DocumentSource.Size(m)
}
func (m *DocumentSource) XXX_DiscardUnknown() {
	xxx_messageInfo_DocumentSource.DiscardUnknown(m)
}

var xxx_messageInfo_DocumentSource proto.InternalMessageInfo

func (m *DocumentSource) GetHttpUri() string {
	if m != nil {
		return m.HttpUri
	}
	return ""
}

func init() {
	proto.RegisterType((*Feature)(nil), "ssn.annotator.v1alpha1.Feature")
	proto.RegisterType((*DocumentAnnotatorRequest)(nil), "ssn.annotator.v1alpha1.DocumentAnnotatorRequest")
	proto.RegisterType((*DocumentAnnotatorResponse)(nil), "ssn.annotator.v1alpha1.DocumentAnnotatorResponse")
	proto.RegisterType((*Document)(nil), "ssn.annotator.v1alpha1.Document")
	proto.RegisterType((*DocumentSource)(nil), "ssn.annotator.v1alpha1.DocumentSource")
	proto.RegisterEnum("ssn.annotator.v1alpha1.Feature_Type", Feature_Type_name, Feature_Type_value)
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// DocumentAnnotatorClient is the client API for DocumentAnnotator service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type DocumentAnnotatorClient interface {
	AnnotateDocument(ctx context.Context, in *DocumentAnnotatorRequest, opts ...grpc.CallOption) (*DocumentAnnotatorResponse, error)
}

type documentAnnotatorClient struct {
	cc *grpc.ClientConn
}

func NewDocumentAnnotatorClient(cc *grpc.ClientConn) DocumentAnnotatorClient {
	return &documentAnnotatorClient{cc}
}

func (c *documentAnnotatorClient) AnnotateDocument(ctx context.Context, in *DocumentAnnotatorRequest, opts ...grpc.CallOption) (*DocumentAnnotatorResponse, error) {
	out := new(DocumentAnnotatorResponse)
	err := c.cc.Invoke(ctx, "/ssn.annotator.v1alpha1.DocumentAnnotator/AnnotateDocument", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// DocumentAnnotatorServer is the server API for DocumentAnnotator service.
type DocumentAnnotatorServer interface {
	AnnotateDocument(context.Context, *DocumentAnnotatorRequest) (*DocumentAnnotatorResponse, error)
}

func RegisterDocumentAnnotatorServer(s *grpc.Server, srv DocumentAnnotatorServer) {
	s.RegisterService(&_DocumentAnnotator_serviceDesc, srv)
}

func _DocumentAnnotator_AnnotateDocument_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DocumentAnnotatorRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DocumentAnnotatorServer).AnnotateDocument(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ssn.annotator.v1alpha1.DocumentAnnotator/AnnotateDocument",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DocumentAnnotatorServer).AnnotateDocument(ctx, req.(*DocumentAnnotatorRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _DocumentAnnotator_serviceDesc = grpc.ServiceDesc{
	ServiceName: "ssn.annotator.v1alpha1.DocumentAnnotator",
	HandlerType: (*DocumentAnnotatorServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "AnnotateDocument",
			Handler:    _DocumentAnnotator_AnnotateDocument_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "ssn/annotator/v1alpha1/annotator.proto",
}

func init() {
	proto.RegisterFile("ssn/annotator/v1alpha1/annotator.proto", fileDescriptor_annotator_cd00d75023b08e65)
}

var fileDescriptor_annotator_cd00d75023b08e65 = []byte{
	// 1144 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x96, 0xcf, 0x6e, 0xdb, 0xc6,
	0x13, 0xc7, 0x7f, 0xb2, 0x65, 0x5b, 0x1a, 0x59, 0x32, 0xbd, 0x8e, 0x65, 0xc6, 0xf9, 0xa1, 0x11,
	0x84, 0x20, 0x30, 0x5a, 0x40, 0x4e, 0xd4, 0x4b, 0x9b, 0xa6, 0x05, 0x68, 0x92, 0x4e, 0x89, 0xc8,
	0xa4, 0xb0, 0xa6, 0x82, 0x38, 0x97, 0x05, 0x43, 0x6e, 0x12, 0x22, 0xd2, 0x2e, 0x4b, 0x2e, 0x0d,
	0xf9, 0xda, 0x57, 0x28, 0x7a, 0xee, 0x33, 0xf4, 0xd0, 0x27, 0xe9, 0xb1, 0xd7, 0xbe, 0x41, 0x5f,
	0xa0, 0xe0, 0x3f, 0x89, 0x52, 0x22, 0xcb, 0xbd, 0x79, 0x67, 0xbe, 0x9f, 0xef, 0x8c, 0xd6, 0xb3,
	0xbb, 0x84, 0xc7, 0x51, 0xc4, 0x4e, 0x1d, 0xc6, 0xb8, 0x70, 0x04, 0x0f, 0x4f, 0xaf, 0x9f, 0x3a,
	0xe3, 0xe0, 0x83, 0xf3, 0x74, 0x1e, 0xea, 0x05, 0x21, 0x17, 0x1c, 0xb5, 0xa3, 0x88, 0xf5, 0xe6,
	0xc1, 0x42, 0x77, 0xfc, 0xff, 0xf7, 0x9c, 0xbf, 0x1f, 0xd3, 0x53, 0x27, 0xf0, 0x0b, 0xc6, 0xe7,
	0x2c, 0xca, 0xa8, 0x63, 0x39, 0x71, 0x17, 0x37, 0x01, 0x3d, 0x75, 0x1d, 0xe6, 0xf9, 0x9e, 0x23,
	0x68, 0x9e, 0xf9, 0x62, 0x96, 0x11, 0x74, 0x2a, 0xc8, 0x1c, 0xcd, 0xf2, 0xdd, 0xbf, 0xb6, 0x60,
	0xe7, 0x9c, 0x3a, 0x22, 0x0e, 0x29, 0xfa, 0x06, 0xaa, 0x89, 0x52, 0xae, 0x74, 0x2a, 0x27, 0xad,
	0xfe, 0xa3, 0xde, 0xe7, 0x5b, 0xe9, 0xe5, 0xf2, 0x9e, 0x7d, 0x13, 0x50, 0x9c, 0x12, 0xe8, 0x21,
	0x34, 0x26, 0xce, 0x94, 0x84, 0x34, 0x8a, 0xc7, 0x22, 0x92, 0x37, 0x3a, 0x95, 0x93, 0x2d, 0x0c,
	0x13, 0x67, 0x8a, 0xb3, 0x08, 0x52, 0xa0, 0x35, 0xf1, 0x19, 0x71, 0x39, 0x7b, 0xe7, 0x7b, 0x94,
	0xb9, 0x54, 0xde, 0x4c, 0x8b, 0x1c, 0xa7, 0x45, 0x12, 0x8f, 0x9e, 0x3a, 0xcb, 0xf5, 0x06, 0xf4,
	0x9a, 0x8e, 0x71, 0x73, 0xe2, 0xb3, 0x79, 0xb0, 0xfb, 0x7b, 0x15, 0xaa, 0x49, 0x49, 0xd4, 0x80,
	0x1d, 0x4d, 0x3f, 0x57, 0x46, 0x03, 0x5b, 0xfa, 0x1f, 0x3a, 0x80, 0x3d, 0x5b, 0x7f, 0x6d, 0x13,
	0xc5, 0x34, 0x2d, 0x5b, 0xb1, 0x0d, 0xcb, 0x94, 0x2a, 0xa8, 0x05, 0x60, 0x61, 0x4d, 0xc7, 0x44,
	0x53, 0x6c, 0x5d, 0xda, 0x40, 0xf7, 0x40, 0x1a, 0x2a, 0x57, 0x17, 0xba, 0x69, 0x13, 0x6d, 0xa4,
	0x67, 0xd1, 0x4d, 0xb4, 0x0b, 0x35, 0x75, 0x84, 0xb1, 0x6e, 0xaa, 0x57, 0x52, 0x15, 0x35, 0xa1,
	0x6e, 0x5b, 0xb6, 0x32, 0x20, 0xaf, 0x14, 0x5b, 0xda, 0x42, 0x08, 0x5a, 0xd9, 0xd2, 0x30, 0xd5,
	0x2c, 0xb6, 0x3d, 0x8f, 0xe9, 0xaf, 0xf3, 0xd8, 0x0e, 0xba, 0x0f, 0x87, 0x97, 0xa3, 0xe1, 0x70,
	0x60, 0xe8, 0x98, 0xa8, 0x16, 0x1e, 0x5a, 0x58, 0xb1, 0x75, 0x62, 0x68, 0x52, 0x6d, 0x29, 0x35,
	0x32, 0x6d, 0x7c, 0x45, 0x54, 0x4b, 0xd3, 0xa5, 0x3a, 0xda, 0x87, 0xa6, 0x66, 0xa9, 0xa3, 0xb4,
	0x23, 0xfb, 0x6a, 0xa8, 0x4b, 0x90, 0x98, 0x17, 0x3d, 0x5e, 0xe8, 0xf6, 0x8f, 0x96, 0x26, 0x35,
	0x50, 0x1b, 0x90, 0x8a, 0x75, 0xcd, 0xb0, 0x89, 0xaa, 0x60, 0x8d, 0x98, 0xa3, 0x8b, 0x33, 0x1d,
	0x4b, 0xbb, 0x89, 0xd6, 0x30, 0x5f, 0x59, 0x86, 0xaa, 0x17, 0xb1, 0x66, 0xf2, 0x1b, 0x2d, 0x15,
	0x93, 0x81, 0x61, 0xea, 0x44, 0x7b, 0x99, 0xb9, 0xb6, 0xd0, 0x31, 0xb4, 0xcb, 0xd1, 0xa2, 0x82,
	0xa1, 0x49, 0x7b, 0xe8, 0x01, 0x1c, 0x95, 0x73, 0x59, 0x25, 0x0b, 0x27, 0x49, 0x69, 0x01, 0xbc,
	0xd4, 0xcb, 0xe0, 0x3e, 0x7a, 0x04, 0x9d, 0x72, 0xee, 0x4c, 0x31, 0x5f, 0xbe, 0x30, 0xb0, 0xb5,
	0xe0, 0x80, 0x96, 0x55, 0xc3, 0xc1, 0xe8, 0xf2, 0x13, 0xd5, 0xc1, 0x42, 0x1d, 0xd3, 0x2a, 0xd7,
	0xb9, 0xb7, 0x90, 0x3b, 0x37, 0xca, 0xb9, 0xc3, 0x45, 0x6e, 0x50, 0xce, 0xb5, 0x51, 0x0d, 0xaa,
	0xc9, 0x4c, 0x48, 0x47, 0xdd, 0x5f, 0x2b, 0x20, 0x6b, 0xdc, 0x8d, 0x27, 0x94, 0x09, 0xa5, 0x98,
	0x64, 0x4c, 0x7f, 0x8a, 0x69, 0x24, 0xd0, 0x73, 0xa8, 0x79, 0x79, 0x2e, 0x1d, 0xf9, 0x46, 0xbf,
	0xb3, 0x6a, 0xe4, 0x0b, 0x0f, 0x3c, 0x23, 0xd0, 0x77, 0x50, 0x7b, 0x97, 0x1d, 0x84, 0x64, 0xde,
	0x37, 0x4f, 0x1a, 0xfd, 0x87, 0x6b, 0x0e, 0x0c, 0x9e, 0x01, 0xdd, 0x7f, 0x1a, 0x70, 0xff, 0x33,
	0x7d, 0x45, 0x01, 0x67, 0x11, 0x45, 0x7d, 0x00, 0x1e, 0x7a, 0x34, 0x24, 0xc9, 0x39, 0x96, 0x2b,
	0xa9, 0xf9, 0x41, 0xe9, 0xa0, 0x14, 0x47, 0x1c, 0xd7, 0x53, 0x99, 0xe6, 0x08, 0x8a, 0xbe, 0x07,
	0x29, 0x70, 0x6e, 0x12, 0x3f, 0xe2, 0xc5, 0x34, 0x23, 0x37, 0x56, 0x93, 0xad, 0x5c, 0xac, 0xc5,
	0x34, 0xc5, 0x4f, 0xa1, 0xe6, 0xc6, 0x61, 0x48, 0x99, 0x7b, 0x23, 0x6f, 0xae, 0xc6, 0x66, 0x22,
	0xf4, 0x04, 0xea, 0x82, 0x0b, 0x67, 0x4c, 0xae, 0x1d, 0x21, 0x57, 0x6f, 0x21, 0x52, 0xd5, 0x2b,
	0x47, 0xa0, 0x6f, 0xa1, 0x95, 0x11, 0x3e, 0x73, 0x33, 0x6c, 0x6b, 0x35, 0xb6, 0x9b, 0x4a, 0x0d,
	0xe6, 0x2e, 0xa2, 0x74, 0x9a, 0xa3, 0xdb, 0xeb, 0x50, 0x7d, 0x9a, 0xa1, 0x2f, 0xe0, 0x30, 0x8a,
	0x83, 0x60, 0xec, 0xd3, 0x90, 0xb8, 0x3c, 0x0c, 0x78, 0xe8, 0x08, 0x4a, 0x7c, 0x4f, 0xde, 0x59,
	0xed, 0x70, 0x50, 0x10, 0x6a, 0x01, 0x18, 0xde, 0x92, 0x51, 0xcc, 0x44, 0x78, 0x43, 0x5c, 0xee,
	0x51, 0xb9, 0x76, 0x27, 0xa3, 0x14, 0x50, 0xb9, 0x97, 0xdc, 0xb2, 0xcd, 0x62, 0x88, 0x48, 0x7a,
	0xdd, 0xd6, 0x6f, 0xf9, 0x2d, 0x85, 0x32, 0xbd, 0xf8, 0x9e, 0x41, 0xf1, 0x6f, 0x23, 0x13, 0x2a,
	0x3e, 0x70, 0x4f, 0x86, 0xd5, 0x68, 0x33, 0x97, 0x5e, 0xa4, 0x4a, 0xa4, 0x00, 0x72, 0x43, 0xea,
	0xf9, 0x82, 0xb8, 0x4e, 0xe8, 0x11, 0x16, 0x4f, 0xde, 0xd2, 0x50, 0x6e, 0xac, 0xe6, 0xa5, 0x4c,
	0xae, 0x3a, 0xa1, 0x67, 0xa6, 0xe2, 0xa4, 0xbc, 0xcf, 0xae, 0xb9, 0xef, 0xd2, 0x02, 0xdf, 0xbd,
	0xa5, 0x7c, 0x2e, 0xcd, 0x59, 0x05, 0xf6, 0x96, 0xde, 0x1f, 0xb9, 0x99, 0x1e, 0x39, 0x79, 0x0e,
	0xdb, 0x74, 0x5a, 0x1c, 0x06, 0x9f, 0x33, 0xdc, 0x12, 0x0b, 0x6b, 0xf4, 0x1c, 0x24, 0xee, 0x86,
	0x64, 0xec, 0x33, 0x4a, 0xbc, 0x8f, 0xd9, 0xd6, 0xb5, 0x6e, 0x69, 0x80, 0xbb, 0xe1, 0xc0, 0x67,
	0x54, 0xfb, 0x98, 0xee, 0xdd, 0x0b, 0x68, 0x97, 0xe9, 0x62, 0x1f, 0x7d, 0x4f, 0xde, 0x5b, 0xed,
	0x81, 0x66, 0x1e, 0xc3, 0x4c, 0x6f, 0x78, 0xc8, 0x80, 0xa3, 0xb2, 0x51, 0xb6, 0x4b, 0x3c, 0x4c,
	0x9c, 0xa4, 0x5b, 0x26, 0x61, 0xe6, 0xa4, 0xe6, 0x40, 0x3a, 0x52, 0xf3, 0x9e, 0x22, 0x5a, 0xee,
	0x69, 0x7f, 0x7d, 0x4f, 0x97, 0x74, 0xde, 0xd3, 0x1b, 0xe8, 0x94, 0x8d, 0xde, 0x3a, 0xec, 0xe3,
	0x7b, 0x3f, 0xe4, 0x0b, 0xcd, 0xa1, 0xd5, 0x96, 0x0f, 0x66, 0x96, 0x67, 0x39, 0x59, 0x6a, 0x72,
	0xc9, 0x3b, 0x18, 0xc7, 0xd1, 0x27, 0xde, 0x07, 0x77, 0xf1, 0x1e, 0xe6, 0xe4, 0x8a, 0x0d, 0x60,
	0xbc, 0xbc, 0x01, 0xf7, 0xd6, 0x6f, 0x80, 0xc9, 0xe7, 0x1b, 0x50, 0x36, 0x7a, 0xe7, 0x97, 0x8d,
	0x0e, 0xd7, 0x1b, 0x9d, 0xfb, 0x9f, 0x37, 0x62, 0xe3, 0xb2, 0x51, 0xfb, 0x0e, 0x1d, 0x8d, 0xe7,
	0x46, 0x08, 0xaa, 0xc9, 0xfc, 0xca, 0x47, 0x9d, 0xca, 0x49, 0x1d, 0xa7, 0x7f, 0x77, 0x3d, 0xa8,
	0x15, 0x97, 0x3e, 0x92, 0x61, 0xc7, 0xe5, 0x4c, 0x14, 0x6f, 0xcf, 0x2e, 0x2e, 0x96, 0xe8, 0x07,
	0xd8, 0x8e, 0x78, 0x1c, 0xba, 0x34, 0xfd, 0x8c, 0x6a, 0xf4, 0x1f, 0xaf, 0x7b, 0x94, 0x2e, 0x53,
	0x35, 0xce, 0xa9, 0xee, 0x57, 0xd0, 0x5a, 0xcc, 0xa0, 0xfb, 0x50, 0xfb, 0x20, 0x44, 0x40, 0xe2,
	0xd0, 0x4f, 0x8b, 0xd5, 0xf1, 0x4e, 0xb2, 0x1e, 0x85, 0x7e, 0xff, 0x8f, 0x0a, 0xec, 0x7f, 0xf2,
	0x10, 0xa1, 0xdf, 0x2a, 0x20, 0xe5, 0x2b, 0x3a, 0xeb, 0xf8, 0xc9, 0xba, 0x3e, 0x96, 0x1f, 0xd8,
	0xe3, 0xa7, 0xff, 0x81, 0xc8, 0x9e, 0xbe, 0xee, 0xe3, 0x9f, 0xff, 0xfc, 0xfb, 0x97, 0x8d, 0x4e,
	0xf7, 0xc1, 0xfc, 0x0b, 0xb9, 0xb8, 0x02, 0x9f, 0xe5, 0x46, 0xf4, 0x59, 0xe5, 0xcb, 0xb3, 0xc6,
	0x9b, 0xfa, 0xcc, 0xf7, 0xed, 0x76, 0xfa, 0x29, 0xfb, 0xf5, 0xbf, 0x01, 0x00, 0x00, 0xff, 0xff,
	0x2f, 0x3f, 0xb4, 0x3c, 0x64, 0x0b, 0x00, 0x00,
}
