// Code generated by protoc-gen-go. DO NOT EDIT.
// source: ssn/imageservice/imageservice.proto

package imageservice // import "github.com/e-conomic/proto/ssn/imageservice"

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"

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

type ImageFormat int32

const (
	ImageFormat_PNG  ImageFormat = 0
	ImageFormat_JPEG ImageFormat = 1
)

var ImageFormat_name = map[int32]string{
	0: "PNG",
	1: "JPEG",
}
var ImageFormat_value = map[string]int32{
	"PNG":  0,
	"JPEG": 1,
}

func (x ImageFormat) String() string {
	return proto.EnumName(ImageFormat_name, int32(x))
}
func (ImageFormat) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_imageservice_a11bca3ccf1b4595, []int{0}
}

type Language int32

const (
	Language_ENG Language = 0
	Language_DAN Language = 1
	Language_SWE Language = 2
	Language_NOR Language = 3
	Language_FIN Language = 4
	Language_NLD Language = 5
)

var Language_name = map[int32]string{
	0: "ENG",
	1: "DAN",
	2: "SWE",
	3: "NOR",
	4: "FIN",
	5: "NLD",
}
var Language_value = map[string]int32{
	"ENG": 0,
	"DAN": 1,
	"SWE": 2,
	"NOR": 3,
	"FIN": 4,
	"NLD": 5,
}

func (x Language) String() string {
	return proto.EnumName(Language_name, int32(x))
}
func (Language) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_imageservice_a11bca3ccf1b4595, []int{1}
}

type Image struct {
	Data                 []byte      `protobuf:"bytes,1,opt,name=data,proto3" json:"data,omitempty"`
	Format               ImageFormat `protobuf:"varint,2,opt,name=format,proto3,enum=imageservice.ImageFormat" json:"format,omitempty"`
	XXX_NoUnkeyedLiteral struct{}    `json:"-"`
	XXX_unrecognized     []byte      `json:"-"`
	XXX_sizecache        int32       `json:"-"`
}

func (m *Image) Reset()         { *m = Image{} }
func (m *Image) String() string { return proto.CompactTextString(m) }
func (*Image) ProtoMessage()    {}
func (*Image) Descriptor() ([]byte, []int) {
	return fileDescriptor_imageservice_a11bca3ccf1b4595, []int{0}
}
func (m *Image) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Image.Unmarshal(m, b)
}
func (m *Image) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Image.Marshal(b, m, deterministic)
}
func (dst *Image) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Image.Merge(dst, src)
}
func (m *Image) XXX_Size() int {
	return xxx_messageInfo_Image.Size(m)
}
func (m *Image) XXX_DiscardUnknown() {
	xxx_messageInfo_Image.DiscardUnknown(m)
}

var xxx_messageInfo_Image proto.InternalMessageInfo

func (m *Image) GetData() []byte {
	if m != nil {
		return m.Data
	}
	return nil
}

func (m *Image) GetFormat() ImageFormat {
	if m != nil {
		return m.Format
	}
	return ImageFormat_PNG
}

type PdfRasterizerRequest struct {
	PdfBytes             []byte   `protobuf:"bytes,1,opt,name=pdfBytes,proto3" json:"pdfBytes,omitempty"`
	Indecies             []uint32 `protobuf:"varint,2,rep,packed,name=indecies,proto3" json:"indecies,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *PdfRasterizerRequest) Reset()         { *m = PdfRasterizerRequest{} }
func (m *PdfRasterizerRequest) String() string { return proto.CompactTextString(m) }
func (*PdfRasterizerRequest) ProtoMessage()    {}
func (*PdfRasterizerRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_imageservice_a11bca3ccf1b4595, []int{1}
}
func (m *PdfRasterizerRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_PdfRasterizerRequest.Unmarshal(m, b)
}
func (m *PdfRasterizerRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_PdfRasterizerRequest.Marshal(b, m, deterministic)
}
func (dst *PdfRasterizerRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PdfRasterizerRequest.Merge(dst, src)
}
func (m *PdfRasterizerRequest) XXX_Size() int {
	return xxx_messageInfo_PdfRasterizerRequest.Size(m)
}
func (m *PdfRasterizerRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_PdfRasterizerRequest.DiscardUnknown(m)
}

var xxx_messageInfo_PdfRasterizerRequest proto.InternalMessageInfo

func (m *PdfRasterizerRequest) GetPdfBytes() []byte {
	if m != nil {
		return m.PdfBytes
	}
	return nil
}

func (m *PdfRasterizerRequest) GetIndecies() []uint32 {
	if m != nil {
		return m.Indecies
	}
	return nil
}

type PdfRasterizerResponse struct {
	Index                uint32   `protobuf:"varint,1,opt,name=index,proto3" json:"index,omitempty"`
	Image                *Image   `protobuf:"bytes,2,opt,name=image,proto3" json:"image,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *PdfRasterizerResponse) Reset()         { *m = PdfRasterizerResponse{} }
func (m *PdfRasterizerResponse) String() string { return proto.CompactTextString(m) }
func (*PdfRasterizerResponse) ProtoMessage()    {}
func (*PdfRasterizerResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_imageservice_a11bca3ccf1b4595, []int{2}
}
func (m *PdfRasterizerResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_PdfRasterizerResponse.Unmarshal(m, b)
}
func (m *PdfRasterizerResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_PdfRasterizerResponse.Marshal(b, m, deterministic)
}
func (dst *PdfRasterizerResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PdfRasterizerResponse.Merge(dst, src)
}
func (m *PdfRasterizerResponse) XXX_Size() int {
	return xxx_messageInfo_PdfRasterizerResponse.Size(m)
}
func (m *PdfRasterizerResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_PdfRasterizerResponse.DiscardUnknown(m)
}

var xxx_messageInfo_PdfRasterizerResponse proto.InternalMessageInfo

func (m *PdfRasterizerResponse) GetIndex() uint32 {
	if m != nil {
		return m.Index
	}
	return 0
}

func (m *PdfRasterizerResponse) GetImage() *Image {
	if m != nil {
		return m.Image
	}
	return nil
}

type OcrRequest struct {
	Image                *Image   `protobuf:"bytes,1,opt,name=image,proto3" json:"image,omitempty"`
	Lang                 Language `protobuf:"varint,2,opt,name=lang,proto3,enum=imageservice.Language" json:"lang,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *OcrRequest) Reset()         { *m = OcrRequest{} }
func (m *OcrRequest) String() string { return proto.CompactTextString(m) }
func (*OcrRequest) ProtoMessage()    {}
func (*OcrRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_imageservice_a11bca3ccf1b4595, []int{3}
}
func (m *OcrRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_OcrRequest.Unmarshal(m, b)
}
func (m *OcrRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_OcrRequest.Marshal(b, m, deterministic)
}
func (dst *OcrRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_OcrRequest.Merge(dst, src)
}
func (m *OcrRequest) XXX_Size() int {
	return xxx_messageInfo_OcrRequest.Size(m)
}
func (m *OcrRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_OcrRequest.DiscardUnknown(m)
}

var xxx_messageInfo_OcrRequest proto.InternalMessageInfo

func (m *OcrRequest) GetImage() *Image {
	if m != nil {
		return m.Image
	}
	return nil
}

func (m *OcrRequest) GetLang() Language {
	if m != nil {
		return m.Lang
	}
	return Language_ENG
}

type OcrResponse struct {
	Hocr                 string   `protobuf:"bytes,1,opt,name=hocr,proto3" json:"hocr,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *OcrResponse) Reset()         { *m = OcrResponse{} }
func (m *OcrResponse) String() string { return proto.CompactTextString(m) }
func (*OcrResponse) ProtoMessage()    {}
func (*OcrResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_imageservice_a11bca3ccf1b4595, []int{4}
}
func (m *OcrResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_OcrResponse.Unmarshal(m, b)
}
func (m *OcrResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_OcrResponse.Marshal(b, m, deterministic)
}
func (dst *OcrResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_OcrResponse.Merge(dst, src)
}
func (m *OcrResponse) XXX_Size() int {
	return xxx_messageInfo_OcrResponse.Size(m)
}
func (m *OcrResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_OcrResponse.DiscardUnknown(m)
}

var xxx_messageInfo_OcrResponse proto.InternalMessageInfo

func (m *OcrResponse) GetHocr() string {
	if m != nil {
		return m.Hocr
	}
	return ""
}

func init() {
	proto.RegisterType((*Image)(nil), "imageservice.Image")
	proto.RegisterType((*PdfRasterizerRequest)(nil), "imageservice.PdfRasterizerRequest")
	proto.RegisterType((*PdfRasterizerResponse)(nil), "imageservice.PdfRasterizerResponse")
	proto.RegisterType((*OcrRequest)(nil), "imageservice.OcrRequest")
	proto.RegisterType((*OcrResponse)(nil), "imageservice.OcrResponse")
	proto.RegisterEnum("imageservice.ImageFormat", ImageFormat_name, ImageFormat_value)
	proto.RegisterEnum("imageservice.Language", Language_name, Language_value)
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// ImageServiceClient is the client API for ImageService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type ImageServiceClient interface {
	GetOcr(ctx context.Context, in *OcrRequest, opts ...grpc.CallOption) (*OcrResponse, error)
	PdfRasterizer(ctx context.Context, in *PdfRasterizerRequest, opts ...grpc.CallOption) (ImageService_PdfRasterizerClient, error)
}

type imageServiceClient struct {
	cc *grpc.ClientConn
}

func NewImageServiceClient(cc *grpc.ClientConn) ImageServiceClient {
	return &imageServiceClient{cc}
}

func (c *imageServiceClient) GetOcr(ctx context.Context, in *OcrRequest, opts ...grpc.CallOption) (*OcrResponse, error) {
	out := new(OcrResponse)
	err := c.cc.Invoke(ctx, "/imageservice.ImageService/GetOcr", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *imageServiceClient) PdfRasterizer(ctx context.Context, in *PdfRasterizerRequest, opts ...grpc.CallOption) (ImageService_PdfRasterizerClient, error) {
	stream, err := c.cc.NewStream(ctx, &_ImageService_serviceDesc.Streams[0], "/imageservice.ImageService/PdfRasterizer", opts...)
	if err != nil {
		return nil, err
	}
	x := &imageServicePdfRasterizerClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type ImageService_PdfRasterizerClient interface {
	Recv() (*PdfRasterizerResponse, error)
	grpc.ClientStream
}

type imageServicePdfRasterizerClient struct {
	grpc.ClientStream
}

func (x *imageServicePdfRasterizerClient) Recv() (*PdfRasterizerResponse, error) {
	m := new(PdfRasterizerResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// ImageServiceServer is the server API for ImageService service.
type ImageServiceServer interface {
	GetOcr(context.Context, *OcrRequest) (*OcrResponse, error)
	PdfRasterizer(*PdfRasterizerRequest, ImageService_PdfRasterizerServer) error
}

func RegisterImageServiceServer(s *grpc.Server, srv ImageServiceServer) {
	s.RegisterService(&_ImageService_serviceDesc, srv)
}

func _ImageService_GetOcr_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(OcrRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ImageServiceServer).GetOcr(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/imageservice.ImageService/GetOcr",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ImageServiceServer).GetOcr(ctx, req.(*OcrRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ImageService_PdfRasterizer_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(PdfRasterizerRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(ImageServiceServer).PdfRasterizer(m, &imageServicePdfRasterizerServer{stream})
}

type ImageService_PdfRasterizerServer interface {
	Send(*PdfRasterizerResponse) error
	grpc.ServerStream
}

type imageServicePdfRasterizerServer struct {
	grpc.ServerStream
}

func (x *imageServicePdfRasterizerServer) Send(m *PdfRasterizerResponse) error {
	return x.ServerStream.SendMsg(m)
}

var _ImageService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "imageservice.ImageService",
	HandlerType: (*ImageServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetOcr",
			Handler:    _ImageService_GetOcr_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "PdfRasterizer",
			Handler:       _ImageService_PdfRasterizer_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "ssn/imageservice/imageservice.proto",
}

func init() {
	proto.RegisterFile("ssn/imageservice/imageservice.proto", fileDescriptor_imageservice_a11bca3ccf1b4595)
}

var fileDescriptor_imageservice_a11bca3ccf1b4595 = []byte{
	// 407 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x84, 0x52, 0x5d, 0x8f, 0xd2, 0x40,
	0x14, 0xdd, 0xa1, 0x2d, 0x8b, 0x17, 0x30, 0xcd, 0xb8, 0x9a, 0x2e, 0x4f, 0xb5, 0xfb, 0x82, 0x98,
	0xa5, 0x8a, 0x3f, 0x40, 0xdd, 0xf0, 0x11, 0x0c, 0x29, 0x64, 0x78, 0xd0, 0x18, 0x5f, 0xca, 0x74,
	0x28, 0x4d, 0x6c, 0x07, 0x3b, 0x83, 0x51, 0xff, 0x93, 0xff, 0xd1, 0xcc, 0xb4, 0x54, 0x4a, 0x88,
	0xbe, 0x9d, 0x33, 0xf7, 0xdc, 0x73, 0x4f, 0x6f, 0x2f, 0xdc, 0x09, 0x91, 0xf9, 0x49, 0x1a, 0xc6,
	0x4c, 0xb0, 0xfc, 0x7b, 0x42, 0x59, 0x8d, 0x0c, 0xf7, 0x39, 0x97, 0x1c, 0x77, 0x4e, 0xdf, 0xbc,
	0x00, 0xac, 0xb9, 0xe2, 0x18, 0x83, 0x19, 0x85, 0x32, 0x74, 0x90, 0x8b, 0xfa, 0x1d, 0xa2, 0x31,
	0x7e, 0x0d, 0xcd, 0x2d, 0xcf, 0xd3, 0x50, 0x3a, 0x0d, 0x17, 0xf5, 0x1f, 0x8f, 0x6e, 0x87, 0x35,
	0x3f, 0xdd, 0x38, 0xd5, 0x02, 0x52, 0x0a, 0xbd, 0x00, 0x6e, 0x56, 0xd1, 0x96, 0x84, 0x42, 0xb2,
	0x3c, 0xf9, 0xc5, 0x72, 0xc2, 0xbe, 0x1d, 0x98, 0x90, 0xb8, 0x07, 0xad, 0x7d, 0xb4, 0x7d, 0xf8,
	0x29, 0x99, 0x28, 0x47, 0x54, 0x5c, 0xd5, 0x92, 0x2c, 0x62, 0x34, 0x61, 0xc2, 0x69, 0xb8, 0x46,
	0xbf, 0x4b, 0x2a, 0xee, 0x7d, 0x82, 0xa7, 0x67, 0x7e, 0x62, 0xcf, 0x33, 0xc1, 0xf0, 0x0d, 0x58,
	0x4a, 0xf4, 0x43, 0xbb, 0x75, 0x49, 0x41, 0xf0, 0x0b, 0xb0, 0x74, 0x44, 0x1d, 0xb8, 0x3d, 0x7a,
	0x72, 0x21, 0x30, 0x29, 0x14, 0x1e, 0x05, 0x58, 0xd2, 0x2a, 0x5f, 0xd5, 0x88, 0xfe, 0xd7, 0x88,
	0x07, 0x60, 0x7e, 0x0d, 0xb3, 0xb8, 0xdc, 0xc9, 0xb3, 0xba, 0x72, 0x11, 0x66, 0xf1, 0x41, 0x89,
	0xb5, 0xc6, 0x7b, 0x0e, 0x6d, 0x3d, 0xa4, 0x0c, 0x8d, 0xc1, 0xdc, 0x71, 0x9a, 0xeb, 0x21, 0x8f,
	0x88, 0xc6, 0x03, 0x17, 0xda, 0x27, 0x8b, 0xc4, 0xd7, 0x60, 0xac, 0x82, 0x99, 0x7d, 0x85, 0x5b,
	0x60, 0x7e, 0x58, 0x4d, 0x66, 0x36, 0x1a, 0xbc, 0x83, 0xd6, 0xd1, 0x56, 0x95, 0x27, 0xba, 0x7c,
	0x0d, 0xc6, 0xf8, 0x7d, 0x60, 0x23, 0x05, 0xd6, 0x1f, 0x27, 0x76, 0x43, 0x81, 0x60, 0x49, 0x6c,
	0x43, 0x81, 0xe9, 0x3c, 0xb0, 0x4d, 0xfd, 0xb2, 0x18, 0xdb, 0xd6, 0xe8, 0x37, 0x82, 0x8e, 0x1e,
	0xb2, 0x2e, 0x62, 0xe2, 0xb7, 0xd0, 0x9c, 0x31, 0xb9, 0xa4, 0x39, 0x76, 0xea, 0xf9, 0xff, 0xae,
	0xa4, 0x77, 0x7b, 0xa1, 0x52, 0x7c, 0x87, 0x77, 0x85, 0xbf, 0x40, 0xb7, 0xf6, 0x5f, 0xb0, 0x57,
	0x57, 0x5f, 0x3a, 0x82, 0xde, 0xdd, 0x3f, 0x35, 0x47, 0xef, 0x57, 0xe8, 0xe1, 0xfe, 0xf3, 0xcb,
	0x38, 0x91, 0xbb, 0xc3, 0x66, 0x48, 0x79, 0xea, 0xb3, 0x7b, 0xca, 0x33, 0x9e, 0x26, 0xd4, 0xd7,
	0x17, 0xec, 0x9f, 0x5f, 0xf9, 0xa6, 0xa9, 0xdf, 0xdf, 0xfc, 0x09, 0x00, 0x00, 0xff, 0xff, 0x77,
	0x52, 0x46, 0x2c, 0x00, 0x03, 0x00, 0x00,
}
