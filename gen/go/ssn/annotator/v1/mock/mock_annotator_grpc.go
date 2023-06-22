// Code generated by MockGen. DO NOT EDIT.
// Source: gen/go/ssn/annotator/v1/annotator_grpc.pb.go

// Package mock_annotator is a generated GoMock package.
package mock_annotator

import (
	context "context"
	reflect "reflect"

	annotator "github.com/e-conomic/vmlapis/gen/go/ssn/annotator/v1"
	gomock "github.com/golang/mock/gomock"
	grpc "google.golang.org/grpc"
)

// MockDocumentAnnotatorClient is a mock of DocumentAnnotatorClient interface.
type MockDocumentAnnotatorClient struct {
	ctrl     *gomock.Controller
	recorder *MockDocumentAnnotatorClientMockRecorder
}

// MockDocumentAnnotatorClientMockRecorder is the mock recorder for MockDocumentAnnotatorClient.
type MockDocumentAnnotatorClientMockRecorder struct {
	mock *MockDocumentAnnotatorClient
}

// NewMockDocumentAnnotatorClient creates a new mock instance.
func NewMockDocumentAnnotatorClient(ctrl *gomock.Controller) *MockDocumentAnnotatorClient {
	mock := &MockDocumentAnnotatorClient{ctrl: ctrl}
	mock.recorder = &MockDocumentAnnotatorClientMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockDocumentAnnotatorClient) EXPECT() *MockDocumentAnnotatorClientMockRecorder {
	return m.recorder
}

// AnnotateDocument mocks base method.
func (m *MockDocumentAnnotatorClient) AnnotateDocument(ctx context.Context, in *annotator.DocumentAnnotatorRequest, opts ...grpc.CallOption) (*annotator.DocumentAnnotatorResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "AnnotateDocument", varargs...)
	ret0, _ := ret[0].(*annotator.DocumentAnnotatorResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// AnnotateDocument indicates an expected call of AnnotateDocument.
func (mr *MockDocumentAnnotatorClientMockRecorder) AnnotateDocument(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "AnnotateDocument", reflect.TypeOf((*MockDocumentAnnotatorClient)(nil).AnnotateDocument), varargs...)
}

// AnswerDocumentQuestion mocks base method.
func (m *MockDocumentAnnotatorClient) AnswerDocumentQuestion(ctx context.Context, in *annotator.DocumentQuestionRequest, opts ...grpc.CallOption) (*annotator.DocumentQuestionResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "AnswerDocumentQuestion", varargs...)
	ret0, _ := ret[0].(*annotator.DocumentQuestionResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// AnswerDocumentQuestion indicates an expected call of AnswerDocumentQuestion.
func (mr *MockDocumentAnnotatorClientMockRecorder) AnswerDocumentQuestion(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "AnswerDocumentQuestion", reflect.TypeOf((*MockDocumentAnnotatorClient)(nil).AnswerDocumentQuestion), varargs...)
}

// MockDocumentAnnotatorServer is a mock of DocumentAnnotatorServer interface.
type MockDocumentAnnotatorServer struct {
	ctrl     *gomock.Controller
	recorder *MockDocumentAnnotatorServerMockRecorder
}

// MockDocumentAnnotatorServerMockRecorder is the mock recorder for MockDocumentAnnotatorServer.
type MockDocumentAnnotatorServerMockRecorder struct {
	mock *MockDocumentAnnotatorServer
}

// NewMockDocumentAnnotatorServer creates a new mock instance.
func NewMockDocumentAnnotatorServer(ctrl *gomock.Controller) *MockDocumentAnnotatorServer {
	mock := &MockDocumentAnnotatorServer{ctrl: ctrl}
	mock.recorder = &MockDocumentAnnotatorServerMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockDocumentAnnotatorServer) EXPECT() *MockDocumentAnnotatorServerMockRecorder {
	return m.recorder
}

// AnnotateDocument mocks base method.
func (m *MockDocumentAnnotatorServer) AnnotateDocument(arg0 context.Context, arg1 *annotator.DocumentAnnotatorRequest) (*annotator.DocumentAnnotatorResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "AnnotateDocument", arg0, arg1)
	ret0, _ := ret[0].(*annotator.DocumentAnnotatorResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// AnnotateDocument indicates an expected call of AnnotateDocument.
func (mr *MockDocumentAnnotatorServerMockRecorder) AnnotateDocument(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "AnnotateDocument", reflect.TypeOf((*MockDocumentAnnotatorServer)(nil).AnnotateDocument), arg0, arg1)
}

// AnswerDocumentQuestion mocks base method.
func (m *MockDocumentAnnotatorServer) AnswerDocumentQuestion(arg0 context.Context, arg1 *annotator.DocumentQuestionRequest) (*annotator.DocumentQuestionResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "AnswerDocumentQuestion", arg0, arg1)
	ret0, _ := ret[0].(*annotator.DocumentQuestionResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// AnswerDocumentQuestion indicates an expected call of AnswerDocumentQuestion.
func (mr *MockDocumentAnnotatorServerMockRecorder) AnswerDocumentQuestion(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "AnswerDocumentQuestion", reflect.TypeOf((*MockDocumentAnnotatorServer)(nil).AnswerDocumentQuestion), arg0, arg1)
}

// MockUnsafeDocumentAnnotatorServer is a mock of UnsafeDocumentAnnotatorServer interface.
type MockUnsafeDocumentAnnotatorServer struct {
	ctrl     *gomock.Controller
	recorder *MockUnsafeDocumentAnnotatorServerMockRecorder
}

// MockUnsafeDocumentAnnotatorServerMockRecorder is the mock recorder for MockUnsafeDocumentAnnotatorServer.
type MockUnsafeDocumentAnnotatorServerMockRecorder struct {
	mock *MockUnsafeDocumentAnnotatorServer
}

// NewMockUnsafeDocumentAnnotatorServer creates a new mock instance.
func NewMockUnsafeDocumentAnnotatorServer(ctrl *gomock.Controller) *MockUnsafeDocumentAnnotatorServer {
	mock := &MockUnsafeDocumentAnnotatorServer{ctrl: ctrl}
	mock.recorder = &MockUnsafeDocumentAnnotatorServerMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockUnsafeDocumentAnnotatorServer) EXPECT() *MockUnsafeDocumentAnnotatorServerMockRecorder {
	return m.recorder
}

// mustEmbedUnimplementedDocumentAnnotatorServer mocks base method.
func (m *MockUnsafeDocumentAnnotatorServer) mustEmbedUnimplementedDocumentAnnotatorServer() {
	m.ctrl.T.Helper()
	m.ctrl.Call(m, "mustEmbedUnimplementedDocumentAnnotatorServer")
}

// mustEmbedUnimplementedDocumentAnnotatorServer indicates an expected call of mustEmbedUnimplementedDocumentAnnotatorServer.
func (mr *MockUnsafeDocumentAnnotatorServerMockRecorder) mustEmbedUnimplementedDocumentAnnotatorServer() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "mustEmbedUnimplementedDocumentAnnotatorServer", reflect.TypeOf((*MockUnsafeDocumentAnnotatorServer)(nil).mustEmbedUnimplementedDocumentAnnotatorServer))
}
