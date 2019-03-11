// Code generated by MockGen. DO NOT EDIT.
// Source: gen/go/ssn/mlservice/v1/mlservice.pb.go

// Package mock_mlservice is a generated GoMock package.
package mock_mlservice

import (
	x "github.com/e-conomic/vmlapis/gen/go/ssn/mlservice/v1"
	gomock "github.com/golang/mock/gomock"
	context "golang.org/x/net/context"
	grpc "google.golang.org/grpc"
	reflect "reflect"
)

// MockisMlResponse_OcrLine is a mock of isMlResponse_OcrLine interface
type MockisMlResponse_OcrLine struct {
	ctrl     *gomock.Controller
	recorder *MockisMlResponse_OcrLineMockRecorder
}

// MockisMlResponse_OcrLineMockRecorder is the mock recorder for MockisMlResponse_OcrLine
type MockisMlResponse_OcrLineMockRecorder struct {
	mock *MockisMlResponse_OcrLine
}

// NewMockisMlResponse_OcrLine creates a new mock instance
func NewMockisMlResponse_OcrLine(ctrl *gomock.Controller) *MockisMlResponse_OcrLine {
	mock := &MockisMlResponse_OcrLine{ctrl: ctrl}
	mock.recorder = &MockisMlResponse_OcrLineMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use
func (m *MockisMlResponse_OcrLine) EXPECT() *MockisMlResponse_OcrLineMockRecorder {
	return m.recorder
}

// isMlResponse_OcrLine mocks base method
func (m *MockisMlResponse_OcrLine) isMlResponse_OcrLine() {
	m.ctrl.T.Helper()
	m.ctrl.Call(m, "isMlResponse_OcrLine")
}

// isMlResponse_OcrLine indicates an expected call of isMlResponse_OcrLine
func (mr *MockisMlResponse_OcrLineMockRecorder) isMlResponse_OcrLine() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "isMlResponse_OcrLine", reflect.TypeOf((*MockisMlResponse_OcrLine)(nil).isMlResponse_OcrLine))
}

// MockMlServiceClient is a mock of MlServiceClient interface
type MockMlServiceClient struct {
	ctrl     *gomock.Controller
	recorder *MockMlServiceClientMockRecorder
}

// MockMlServiceClientMockRecorder is the mock recorder for MockMlServiceClient
type MockMlServiceClientMockRecorder struct {
	mock *MockMlServiceClient
}

// NewMockMlServiceClient creates a new mock instance
func NewMockMlServiceClient(ctrl *gomock.Controller) *MockMlServiceClient {
	mock := &MockMlServiceClient{ctrl: ctrl}
	mock.recorder = &MockMlServiceClientMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use
func (m *MockMlServiceClient) EXPECT() *MockMlServiceClientMockRecorder {
	return m.recorder
}

// GetPrediction mocks base method
func (m *MockMlServiceClient) GetPrediction(ctx context.Context, in *x.MlRequest, opts ...grpc.CallOption) (*x.MlResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "GetPrediction", varargs...)
	ret0, _ := ret[0].(*x.MlResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetPrediction indicates an expected call of GetPrediction
func (mr *MockMlServiceClientMockRecorder) GetPrediction(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetPrediction", reflect.TypeOf((*MockMlServiceClient)(nil).GetPrediction), varargs...)
}

// MockMlServiceServer is a mock of MlServiceServer interface
type MockMlServiceServer struct {
	ctrl     *gomock.Controller
	recorder *MockMlServiceServerMockRecorder
}

// MockMlServiceServerMockRecorder is the mock recorder for MockMlServiceServer
type MockMlServiceServerMockRecorder struct {
	mock *MockMlServiceServer
}

// NewMockMlServiceServer creates a new mock instance
func NewMockMlServiceServer(ctrl *gomock.Controller) *MockMlServiceServer {
	mock := &MockMlServiceServer{ctrl: ctrl}
	mock.recorder = &MockMlServiceServerMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use
func (m *MockMlServiceServer) EXPECT() *MockMlServiceServerMockRecorder {
	return m.recorder
}

// GetPrediction mocks base method
func (m *MockMlServiceServer) GetPrediction(arg0 context.Context, arg1 *x.MlRequest) (*x.MlResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetPrediction", arg0, arg1)
	ret0, _ := ret[0].(*x.MlResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetPrediction indicates an expected call of GetPrediction
func (mr *MockMlServiceServerMockRecorder) GetPrediction(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetPrediction", reflect.TypeOf((*MockMlServiceServer)(nil).GetPrediction), arg0, arg1)
}
