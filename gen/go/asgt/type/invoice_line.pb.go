// Code generated by protoc-gen-go. DO NOT EDIT.
// source: asgt/type/invoice_line.proto

package _type

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import timestamp "github.com/golang/protobuf/ptypes/timestamp"
import wrappers "github.com/golang/protobuf/ptypes/wrappers"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

// NOTE(lys) previously: ElectronicInvoiceLine
// NOTE(lys) review whether all these values are nullable
type InvoiceLine struct {
	// NOTE(lys) why is this called a date when it is not a date?
	IssueDate *timestamp.Timestamp `protobuf:"bytes,1,opt,name=issue_date,json=issueDate,proto3" json:"issue_date,omitempty"`
	// name of the currency as a string
	Currency *wrappers.StringValue `protobuf:"bytes,2,opt,name=currency,proto3" json:"currency,omitempty"`
	//  id of the supplier, not nullable
	SupplierId string `protobuf:"bytes,3,opt,name=supplier_id,json=supplierId,proto3" json:"supplier_id,omitempty"`
	// name of the supplier
	SupplierName *wrappers.StringValue `protobuf:"bytes,4,opt,name=supplier_name,json=supplierName,proto3" json:"supplier_name,omitempty"`
	// global id of the supplier
	SupplierGlobalId *wrappers.StringValue `protobuf:"bytes,5,opt,name=supplier_global_id,json=supplierGlobalId,proto3" json:"supplier_global_id,omitempty"`
	// reference of the customer
	CustomerRef *wrappers.StringValue `protobuf:"bytes,6,opt,name=customer_ref,json=customerRef,proto3" json:"customer_ref,omitempty"`
	// total of the invoice
	Total *wrappers.FloatValue `protobuf:"bytes,7,opt,name=total,proto3" json:"total,omitempty"`
	// text of the invoice line
	LineText *wrappers.StringValue `protobuf:"bytes,8,opt,name=line_text,json=lineText,proto3" json:"line_text,omitempty"`
	// id of the line
	LineId               *wrappers.StringValue `protobuf:"bytes,9,opt,name=line_id,json=lineId,proto3" json:"line_id,omitempty"`
	XXX_NoUnkeyedLiteral struct{}              `json:"-"`
	XXX_unrecognized     []byte                `json:"-"`
	XXX_sizecache        int32                 `json:"-"`
}

func (m *InvoiceLine) Reset()         { *m = InvoiceLine{} }
func (m *InvoiceLine) String() string { return proto.CompactTextString(m) }
func (*InvoiceLine) ProtoMessage()    {}
func (*InvoiceLine) Descriptor() ([]byte, []int) {
	return fileDescriptor_invoice_line_5aa0fa5aaec7a23a, []int{0}
}
func (m *InvoiceLine) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_InvoiceLine.Unmarshal(m, b)
}
func (m *InvoiceLine) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_InvoiceLine.Marshal(b, m, deterministic)
}
func (dst *InvoiceLine) XXX_Merge(src proto.Message) {
	xxx_messageInfo_InvoiceLine.Merge(dst, src)
}
func (m *InvoiceLine) XXX_Size() int {
	return xxx_messageInfo_InvoiceLine.Size(m)
}
func (m *InvoiceLine) XXX_DiscardUnknown() {
	xxx_messageInfo_InvoiceLine.DiscardUnknown(m)
}

var xxx_messageInfo_InvoiceLine proto.InternalMessageInfo

func (m *InvoiceLine) GetIssueDate() *timestamp.Timestamp {
	if m != nil {
		return m.IssueDate
	}
	return nil
}

func (m *InvoiceLine) GetCurrency() *wrappers.StringValue {
	if m != nil {
		return m.Currency
	}
	return nil
}

func (m *InvoiceLine) GetSupplierId() string {
	if m != nil {
		return m.SupplierId
	}
	return ""
}

func (m *InvoiceLine) GetSupplierName() *wrappers.StringValue {
	if m != nil {
		return m.SupplierName
	}
	return nil
}

func (m *InvoiceLine) GetSupplierGlobalId() *wrappers.StringValue {
	if m != nil {
		return m.SupplierGlobalId
	}
	return nil
}

func (m *InvoiceLine) GetCustomerRef() *wrappers.StringValue {
	if m != nil {
		return m.CustomerRef
	}
	return nil
}

func (m *InvoiceLine) GetTotal() *wrappers.FloatValue {
	if m != nil {
		return m.Total
	}
	return nil
}

func (m *InvoiceLine) GetLineText() *wrappers.StringValue {
	if m != nil {
		return m.LineText
	}
	return nil
}

func (m *InvoiceLine) GetLineId() *wrappers.StringValue {
	if m != nil {
		return m.LineId
	}
	return nil
}

func init() {
	proto.RegisterType((*InvoiceLine)(nil), "asgt.type.InvoiceLine")
}

func init() {
	proto.RegisterFile("asgt/type/invoice_line.proto", fileDescriptor_invoice_line_5aa0fa5aaec7a23a)
}

var fileDescriptor_invoice_line_5aa0fa5aaec7a23a = []byte{
	// 336 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x92, 0x41, 0x4b, 0xe3, 0x40,
	0x18, 0x86, 0xe9, 0x6e, 0x9b, 0x36, 0x93, 0x2e, 0x2c, 0x73, 0x1a, 0xba, 0x65, 0x5b, 0x3c, 0xf5,
	0x94, 0xa0, 0x22, 0xd8, 0x93, 0x28, 0xa2, 0x44, 0xc4, 0x43, 0x2c, 0x1e, 0xbc, 0x84, 0x69, 0xf2,
	0x35, 0x0c, 0x4c, 0x32, 0x61, 0xe6, 0x8b, 0xb6, 0xff, 0xc4, 0x9f, 0x2b, 0x33, 0x21, 0x3d, 0xd8,
	0x4b, 0xae, 0xf3, 0x3e, 0xcf, 0xfb, 0xc2, 0xf0, 0x91, 0x39, 0x37, 0x05, 0x46, 0x78, 0xa8, 0x21,
	0x12, 0xd5, 0x87, 0x12, 0x19, 0xa4, 0x52, 0x54, 0x10, 0xd6, 0x5a, 0xa1, 0xa2, 0xbe, 0x4d, 0x43,
	0x9b, 0xce, 0x16, 0x85, 0x52, 0x85, 0x84, 0xc8, 0x05, 0xdb, 0x66, 0x17, 0xa1, 0x28, 0xc1, 0x20,
	0x2f, 0xeb, 0x96, 0x9d, 0xfd, 0xff, 0x09, 0x7c, 0x6a, 0x5e, 0xd7, 0xa0, 0x4d, 0x9b, 0x9f, 0x7d,
	0x0d, 0x49, 0x10, 0xb7, 0x13, 0xcf, 0xa2, 0x02, 0xba, 0x26, 0x44, 0x18, 0xd3, 0x40, 0x9a, 0x73,
	0x04, 0x36, 0x58, 0x0e, 0x56, 0xc1, 0xc5, 0x2c, 0x6c, 0x4b, 0xc2, 0xae, 0x24, 0xdc, 0x74, 0x2b,
	0x89, 0xef, 0xe8, 0x7b, 0x8e, 0x40, 0xaf, 0xc9, 0x24, 0x6b, 0xb4, 0x86, 0x2a, 0x3b, 0xb0, 0x5f,
	0x4e, 0x9c, 0x9f, 0x88, 0xaf, 0xa8, 0x45, 0x55, 0xbc, 0x71, 0xd9, 0x40, 0x72, 0xa4, 0xe9, 0x82,
	0x04, 0xa6, 0xa9, 0x6b, 0x29, 0x40, 0xa7, 0x22, 0x67, 0xbf, 0x97, 0x83, 0x95, 0x9f, 0x90, 0xee,
	0x29, 0xce, 0xe9, 0x2d, 0xf9, 0x73, 0x04, 0x2a, 0x5e, 0x02, 0x1b, 0xf6, 0xe8, 0x9f, 0x76, 0xca,
	0x0b, 0x2f, 0x81, 0x3e, 0x11, 0x7a, 0xac, 0x28, 0xa4, 0xda, 0x72, 0x69, 0xa7, 0x46, 0x3d, 0x7a,
	0xfe, 0x76, 0xde, 0xa3, 0xd3, 0xe2, 0x9c, 0xde, 0x90, 0x69, 0xd6, 0x18, 0x54, 0x25, 0xe8, 0x54,
	0xc3, 0x8e, 0x79, 0x3d, 0x5a, 0x82, 0xce, 0x48, 0x60, 0x47, 0xcf, 0xc9, 0x08, 0x15, 0x72, 0xc9,
	0xc6, 0xce, 0xfc, 0x77, 0x62, 0x3e, 0x48, 0xc5, 0xb1, 0x15, 0x5b, 0x92, 0xae, 0x89, 0x6f, 0x4f,
	0x20, 0x45, 0xd8, 0x23, 0x9b, 0xf4, 0xf9, 0x5e, 0x8b, 0x6f, 0x60, 0x8f, 0xf4, 0x8a, 0x8c, 0x9d,
	0x2a, 0x72, 0xe6, 0xf7, 0x10, 0x3d, 0x0b, 0xc7, 0xf9, 0x9d, 0xf7, 0x3e, 0xb4, 0x37, 0xb6, 0xf5,
	0x1c, 0x75, 0xf9, 0x1d, 0x00, 0x00, 0xff, 0xff, 0xfd, 0xbd, 0xde, 0x57, 0x95, 0x02, 0x00, 0x00,
}