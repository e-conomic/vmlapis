// Code generated by MockGen. DO NOT EDIT.
// Source: gen/go/ssn/ocrservice/v1/ocrservice_grpc.pb.go

// Package mock_ocrservice is a generated GoMock package.
package mock_ocrservice

import (
	context "context"
	reflect "reflect"

	ocrservice "github.com/e-conomic/vmlapis/gen/go/ssn/ocrservice/v1"
	gomock "github.com/golang/mock/gomock"
	grpc "google.golang.org/grpc"
	metadata "google.golang.org/grpc/metadata"
)

// MockOcrServiceClient is a mock of OcrServiceClient interface.
type MockOcrServiceClient struct {
	ctrl     *gomock.Controller
	recorder *MockOcrServiceClientMockRecorder
}

// MockOcrServiceClientMockRecorder is the mock recorder for MockOcrServiceClient.
type MockOcrServiceClientMockRecorder struct {
	mock *MockOcrServiceClient
}

// NewMockOcrServiceClient creates a new mock instance.
func NewMockOcrServiceClient(ctrl *gomock.Controller) *MockOcrServiceClient {
	mock := &MockOcrServiceClient{ctrl: ctrl}
	mock.recorder = &MockOcrServiceClientMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockOcrServiceClient) EXPECT() *MockOcrServiceClientMockRecorder {
	return m.recorder
}

// GetTextAnnotation mocks base method.
func (m *MockOcrServiceClient) GetTextAnnotation(ctx context.Context, in *ocrservice.GetTextAnnotationRequest, opts ...grpc.CallOption) (*ocrservice.GetTextAnnotationResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "GetTextAnnotation", varargs...)
	ret0, _ := ret[0].(*ocrservice.GetTextAnnotationResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetTextAnnotation indicates an expected call of GetTextAnnotation.
func (mr *MockOcrServiceClientMockRecorder) GetTextAnnotation(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetTextAnnotation", reflect.TypeOf((*MockOcrServiceClient)(nil).GetTextAnnotation), varargs...)
}

// GetTextAnnotations mocks base method.
func (m *MockOcrServiceClient) GetTextAnnotations(ctx context.Context, in *ocrservice.GetTextAnnotationsRequest, opts ...grpc.CallOption) (ocrservice.OcrService_GetTextAnnotationsClient, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "GetTextAnnotations", varargs...)
	ret0, _ := ret[0].(ocrservice.OcrService_GetTextAnnotationsClient)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetTextAnnotations indicates an expected call of GetTextAnnotations.
func (mr *MockOcrServiceClientMockRecorder) GetTextAnnotations(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetTextAnnotations", reflect.TypeOf((*MockOcrServiceClient)(nil).GetTextAnnotations), varargs...)
}

// OcrScanImage mocks base method.
func (m *MockOcrServiceClient) OcrScanImage(ctx context.Context, in *ocrservice.OcrScanImageRequest, opts ...grpc.CallOption) (*ocrservice.OcrScanImageResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "OcrScanImage", varargs...)
	ret0, _ := ret[0].(*ocrservice.OcrScanImageResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// OcrScanImage indicates an expected call of OcrScanImage.
func (mr *MockOcrServiceClientMockRecorder) OcrScanImage(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "OcrScanImage", reflect.TypeOf((*MockOcrServiceClient)(nil).OcrScanImage), varargs...)
}

// MockOcrService_GetTextAnnotationsClient is a mock of OcrService_GetTextAnnotationsClient interface.
type MockOcrService_GetTextAnnotationsClient struct {
	ctrl     *gomock.Controller
	recorder *MockOcrService_GetTextAnnotationsClientMockRecorder
}

// MockOcrService_GetTextAnnotationsClientMockRecorder is the mock recorder for MockOcrService_GetTextAnnotationsClient.
type MockOcrService_GetTextAnnotationsClientMockRecorder struct {
	mock *MockOcrService_GetTextAnnotationsClient
}

// NewMockOcrService_GetTextAnnotationsClient creates a new mock instance.
func NewMockOcrService_GetTextAnnotationsClient(ctrl *gomock.Controller) *MockOcrService_GetTextAnnotationsClient {
	mock := &MockOcrService_GetTextAnnotationsClient{ctrl: ctrl}
	mock.recorder = &MockOcrService_GetTextAnnotationsClientMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockOcrService_GetTextAnnotationsClient) EXPECT() *MockOcrService_GetTextAnnotationsClientMockRecorder {
	return m.recorder
}

// CloseSend mocks base method.
func (m *MockOcrService_GetTextAnnotationsClient) CloseSend() error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "CloseSend")
	ret0, _ := ret[0].(error)
	return ret0
}

// CloseSend indicates an expected call of CloseSend.
func (mr *MockOcrService_GetTextAnnotationsClientMockRecorder) CloseSend() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "CloseSend", reflect.TypeOf((*MockOcrService_GetTextAnnotationsClient)(nil).CloseSend))
}

// Context mocks base method.
func (m *MockOcrService_GetTextAnnotationsClient) Context() context.Context {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Context")
	ret0, _ := ret[0].(context.Context)
	return ret0
}

// Context indicates an expected call of Context.
func (mr *MockOcrService_GetTextAnnotationsClientMockRecorder) Context() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Context", reflect.TypeOf((*MockOcrService_GetTextAnnotationsClient)(nil).Context))
}

// Header mocks base method.
func (m *MockOcrService_GetTextAnnotationsClient) Header() (metadata.MD, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Header")
	ret0, _ := ret[0].(metadata.MD)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// Header indicates an expected call of Header.
func (mr *MockOcrService_GetTextAnnotationsClientMockRecorder) Header() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Header", reflect.TypeOf((*MockOcrService_GetTextAnnotationsClient)(nil).Header))
}

// Recv mocks base method.
func (m *MockOcrService_GetTextAnnotationsClient) Recv() (*ocrservice.GetTextAnnotationsResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Recv")
	ret0, _ := ret[0].(*ocrservice.GetTextAnnotationsResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// Recv indicates an expected call of Recv.
func (mr *MockOcrService_GetTextAnnotationsClientMockRecorder) Recv() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Recv", reflect.TypeOf((*MockOcrService_GetTextAnnotationsClient)(nil).Recv))
}

// RecvMsg mocks base method.
func (m_2 *MockOcrService_GetTextAnnotationsClient) RecvMsg(m interface{}) error {
	m_2.ctrl.T.Helper()
	ret := m_2.ctrl.Call(m_2, "RecvMsg", m)
	ret0, _ := ret[0].(error)
	return ret0
}

// RecvMsg indicates an expected call of RecvMsg.
func (mr *MockOcrService_GetTextAnnotationsClientMockRecorder) RecvMsg(m interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "RecvMsg", reflect.TypeOf((*MockOcrService_GetTextAnnotationsClient)(nil).RecvMsg), m)
}

// SendMsg mocks base method.
func (m_2 *MockOcrService_GetTextAnnotationsClient) SendMsg(m interface{}) error {
	m_2.ctrl.T.Helper()
	ret := m_2.ctrl.Call(m_2, "SendMsg", m)
	ret0, _ := ret[0].(error)
	return ret0
}

// SendMsg indicates an expected call of SendMsg.
func (mr *MockOcrService_GetTextAnnotationsClientMockRecorder) SendMsg(m interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "SendMsg", reflect.TypeOf((*MockOcrService_GetTextAnnotationsClient)(nil).SendMsg), m)
}

// Trailer mocks base method.
func (m *MockOcrService_GetTextAnnotationsClient) Trailer() metadata.MD {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Trailer")
	ret0, _ := ret[0].(metadata.MD)
	return ret0
}

// Trailer indicates an expected call of Trailer.
func (mr *MockOcrService_GetTextAnnotationsClientMockRecorder) Trailer() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Trailer", reflect.TypeOf((*MockOcrService_GetTextAnnotationsClient)(nil).Trailer))
}

// MockOcrServiceServer is a mock of OcrServiceServer interface.
type MockOcrServiceServer struct {
	ctrl     *gomock.Controller
	recorder *MockOcrServiceServerMockRecorder
}

// MockOcrServiceServerMockRecorder is the mock recorder for MockOcrServiceServer.
type MockOcrServiceServerMockRecorder struct {
	mock *MockOcrServiceServer
}

// NewMockOcrServiceServer creates a new mock instance.
func NewMockOcrServiceServer(ctrl *gomock.Controller) *MockOcrServiceServer {
	mock := &MockOcrServiceServer{ctrl: ctrl}
	mock.recorder = &MockOcrServiceServerMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockOcrServiceServer) EXPECT() *MockOcrServiceServerMockRecorder {
	return m.recorder
}

// GetTextAnnotation mocks base method.
func (m *MockOcrServiceServer) GetTextAnnotation(arg0 context.Context, arg1 *ocrservice.GetTextAnnotationRequest) (*ocrservice.GetTextAnnotationResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetTextAnnotation", arg0, arg1)
	ret0, _ := ret[0].(*ocrservice.GetTextAnnotationResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetTextAnnotation indicates an expected call of GetTextAnnotation.
func (mr *MockOcrServiceServerMockRecorder) GetTextAnnotation(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetTextAnnotation", reflect.TypeOf((*MockOcrServiceServer)(nil).GetTextAnnotation), arg0, arg1)
}

// GetTextAnnotations mocks base method.
func (m *MockOcrServiceServer) GetTextAnnotations(arg0 *ocrservice.GetTextAnnotationsRequest, arg1 ocrservice.OcrService_GetTextAnnotationsServer) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetTextAnnotations", arg0, arg1)
	ret0, _ := ret[0].(error)
	return ret0
}

// GetTextAnnotations indicates an expected call of GetTextAnnotations.
func (mr *MockOcrServiceServerMockRecorder) GetTextAnnotations(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetTextAnnotations", reflect.TypeOf((*MockOcrServiceServer)(nil).GetTextAnnotations), arg0, arg1)
}

// OcrScanImage mocks base method.
func (m *MockOcrServiceServer) OcrScanImage(arg0 context.Context, arg1 *ocrservice.OcrScanImageRequest) (*ocrservice.OcrScanImageResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "OcrScanImage", arg0, arg1)
	ret0, _ := ret[0].(*ocrservice.OcrScanImageResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// OcrScanImage indicates an expected call of OcrScanImage.
func (mr *MockOcrServiceServerMockRecorder) OcrScanImage(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "OcrScanImage", reflect.TypeOf((*MockOcrServiceServer)(nil).OcrScanImage), arg0, arg1)
}

// MockUnsafeOcrServiceServer is a mock of UnsafeOcrServiceServer interface.
type MockUnsafeOcrServiceServer struct {
	ctrl     *gomock.Controller
	recorder *MockUnsafeOcrServiceServerMockRecorder
}

// MockUnsafeOcrServiceServerMockRecorder is the mock recorder for MockUnsafeOcrServiceServer.
type MockUnsafeOcrServiceServerMockRecorder struct {
	mock *MockUnsafeOcrServiceServer
}

// NewMockUnsafeOcrServiceServer creates a new mock instance.
func NewMockUnsafeOcrServiceServer(ctrl *gomock.Controller) *MockUnsafeOcrServiceServer {
	mock := &MockUnsafeOcrServiceServer{ctrl: ctrl}
	mock.recorder = &MockUnsafeOcrServiceServerMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockUnsafeOcrServiceServer) EXPECT() *MockUnsafeOcrServiceServerMockRecorder {
	return m.recorder
}

// mustEmbedUnimplementedOcrServiceServer mocks base method.
func (m *MockUnsafeOcrServiceServer) mustEmbedUnimplementedOcrServiceServer() {
	m.ctrl.T.Helper()
	m.ctrl.Call(m, "mustEmbedUnimplementedOcrServiceServer")
}

// mustEmbedUnimplementedOcrServiceServer indicates an expected call of mustEmbedUnimplementedOcrServiceServer.
func (mr *MockUnsafeOcrServiceServerMockRecorder) mustEmbedUnimplementedOcrServiceServer() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "mustEmbedUnimplementedOcrServiceServer", reflect.TypeOf((*MockUnsafeOcrServiceServer)(nil).mustEmbedUnimplementedOcrServiceServer))
}

// MockOcrService_GetTextAnnotationsServer is a mock of OcrService_GetTextAnnotationsServer interface.
type MockOcrService_GetTextAnnotationsServer struct {
	ctrl     *gomock.Controller
	recorder *MockOcrService_GetTextAnnotationsServerMockRecorder
}

// MockOcrService_GetTextAnnotationsServerMockRecorder is the mock recorder for MockOcrService_GetTextAnnotationsServer.
type MockOcrService_GetTextAnnotationsServerMockRecorder struct {
	mock *MockOcrService_GetTextAnnotationsServer
}

// NewMockOcrService_GetTextAnnotationsServer creates a new mock instance.
func NewMockOcrService_GetTextAnnotationsServer(ctrl *gomock.Controller) *MockOcrService_GetTextAnnotationsServer {
	mock := &MockOcrService_GetTextAnnotationsServer{ctrl: ctrl}
	mock.recorder = &MockOcrService_GetTextAnnotationsServerMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockOcrService_GetTextAnnotationsServer) EXPECT() *MockOcrService_GetTextAnnotationsServerMockRecorder {
	return m.recorder
}

// Context mocks base method.
func (m *MockOcrService_GetTextAnnotationsServer) Context() context.Context {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Context")
	ret0, _ := ret[0].(context.Context)
	return ret0
}

// Context indicates an expected call of Context.
func (mr *MockOcrService_GetTextAnnotationsServerMockRecorder) Context() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Context", reflect.TypeOf((*MockOcrService_GetTextAnnotationsServer)(nil).Context))
}

// RecvMsg mocks base method.
func (m_2 *MockOcrService_GetTextAnnotationsServer) RecvMsg(m interface{}) error {
	m_2.ctrl.T.Helper()
	ret := m_2.ctrl.Call(m_2, "RecvMsg", m)
	ret0, _ := ret[0].(error)
	return ret0
}

// RecvMsg indicates an expected call of RecvMsg.
func (mr *MockOcrService_GetTextAnnotationsServerMockRecorder) RecvMsg(m interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "RecvMsg", reflect.TypeOf((*MockOcrService_GetTextAnnotationsServer)(nil).RecvMsg), m)
}

// Send mocks base method.
func (m *MockOcrService_GetTextAnnotationsServer) Send(arg0 *ocrservice.GetTextAnnotationsResponse) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Send", arg0)
	ret0, _ := ret[0].(error)
	return ret0
}

// Send indicates an expected call of Send.
func (mr *MockOcrService_GetTextAnnotationsServerMockRecorder) Send(arg0 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Send", reflect.TypeOf((*MockOcrService_GetTextAnnotationsServer)(nil).Send), arg0)
}

// SendHeader mocks base method.
func (m *MockOcrService_GetTextAnnotationsServer) SendHeader(arg0 metadata.MD) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "SendHeader", arg0)
	ret0, _ := ret[0].(error)
	return ret0
}

// SendHeader indicates an expected call of SendHeader.
func (mr *MockOcrService_GetTextAnnotationsServerMockRecorder) SendHeader(arg0 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "SendHeader", reflect.TypeOf((*MockOcrService_GetTextAnnotationsServer)(nil).SendHeader), arg0)
}

// SendMsg mocks base method.
func (m_2 *MockOcrService_GetTextAnnotationsServer) SendMsg(m interface{}) error {
	m_2.ctrl.T.Helper()
	ret := m_2.ctrl.Call(m_2, "SendMsg", m)
	ret0, _ := ret[0].(error)
	return ret0
}

// SendMsg indicates an expected call of SendMsg.
func (mr *MockOcrService_GetTextAnnotationsServerMockRecorder) SendMsg(m interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "SendMsg", reflect.TypeOf((*MockOcrService_GetTextAnnotationsServer)(nil).SendMsg), m)
}

// SetHeader mocks base method.
func (m *MockOcrService_GetTextAnnotationsServer) SetHeader(arg0 metadata.MD) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "SetHeader", arg0)
	ret0, _ := ret[0].(error)
	return ret0
}

// SetHeader indicates an expected call of SetHeader.
func (mr *MockOcrService_GetTextAnnotationsServerMockRecorder) SetHeader(arg0 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "SetHeader", reflect.TypeOf((*MockOcrService_GetTextAnnotationsServer)(nil).SetHeader), arg0)
}

// SetTrailer mocks base method.
func (m *MockOcrService_GetTextAnnotationsServer) SetTrailer(arg0 metadata.MD) {
	m.ctrl.T.Helper()
	m.ctrl.Call(m, "SetTrailer", arg0)
}

// SetTrailer indicates an expected call of SetTrailer.
func (mr *MockOcrService_GetTextAnnotationsServerMockRecorder) SetTrailer(arg0 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "SetTrailer", reflect.TypeOf((*MockOcrService_GetTextAnnotationsServer)(nil).SetTrailer), arg0)
}
