// Code generated by MockGen. DO NOT EDIT.
// Source: gen/go/ssn/mlservice/v2/mlservice_grpc.pb.go

// Package mock_mlservice is a generated GoMock package.
package mock_mlservice

import (
	context "context"
	reflect "reflect"

	v2 "github.com/e-conomic/vmlapis/gen/go/ssn/mlservice/v2"
	gomock "github.com/golang/mock/gomock"
	grpc "google.golang.org/grpc"
)

// MockMlServiceClient is a mock of MlServiceClient interface.
type MockMlServiceClient struct {
	ctrl     *gomock.Controller
	recorder *MockMlServiceClientMockRecorder
}

// MockMlServiceClientMockRecorder is the mock recorder for MockMlServiceClient.
type MockMlServiceClientMockRecorder struct {
	mock *MockMlServiceClient
}

// NewMockMlServiceClient creates a new mock instance.
func NewMockMlServiceClient(ctrl *gomock.Controller) *MockMlServiceClient {
	mock := &MockMlServiceClient{ctrl: ctrl}
	mock.recorder = &MockMlServiceClientMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockMlServiceClient) EXPECT() *MockMlServiceClientMockRecorder {
	return m.recorder
}

// FeatureGen mocks base method.
func (m *MockMlServiceClient) FeatureGen(ctx context.Context, in *v2.FeatureGenRequest, opts ...grpc.CallOption) (*v2.FeatureGenResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "FeatureGen", varargs...)
	ret0, _ := ret[0].(*v2.FeatureGenResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// FeatureGen indicates an expected call of FeatureGen.
func (mr *MockMlServiceClientMockRecorder) FeatureGen(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "FeatureGen", reflect.TypeOf((*MockMlServiceClient)(nil).FeatureGen), varargs...)
}

// FeatureGenPredict mocks base method.
func (m *MockMlServiceClient) FeatureGenPredict(ctx context.Context, in *v2.FeatureGenPredictRequest, opts ...grpc.CallOption) (*v2.PredictResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "FeatureGenPredict", varargs...)
	ret0, _ := ret[0].(*v2.PredictResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// FeatureGenPredict indicates an expected call of FeatureGenPredict.
func (mr *MockMlServiceClientMockRecorder) FeatureGenPredict(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "FeatureGenPredict", reflect.TypeOf((*MockMlServiceClient)(nil).FeatureGenPredict), varargs...)
}

// Predict mocks base method.
func (m *MockMlServiceClient) Predict(ctx context.Context, in *v2.PredictRequest, opts ...grpc.CallOption) (*v2.PredictResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "Predict", varargs...)
	ret0, _ := ret[0].(*v2.PredictResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// Predict indicates an expected call of Predict.
func (mr *MockMlServiceClientMockRecorder) Predict(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Predict", reflect.TypeOf((*MockMlServiceClient)(nil).Predict), varargs...)
}

// MockMlServiceServer is a mock of MlServiceServer interface.
type MockMlServiceServer struct {
	ctrl     *gomock.Controller
	recorder *MockMlServiceServerMockRecorder
}

// MockMlServiceServerMockRecorder is the mock recorder for MockMlServiceServer.
type MockMlServiceServerMockRecorder struct {
	mock *MockMlServiceServer
}

// NewMockMlServiceServer creates a new mock instance.
func NewMockMlServiceServer(ctrl *gomock.Controller) *MockMlServiceServer {
	mock := &MockMlServiceServer{ctrl: ctrl}
	mock.recorder = &MockMlServiceServerMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockMlServiceServer) EXPECT() *MockMlServiceServerMockRecorder {
	return m.recorder
}

// FeatureGen mocks base method.
func (m *MockMlServiceServer) FeatureGen(arg0 context.Context, arg1 *v2.FeatureGenRequest) (*v2.FeatureGenResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "FeatureGen", arg0, arg1)
	ret0, _ := ret[0].(*v2.FeatureGenResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// FeatureGen indicates an expected call of FeatureGen.
func (mr *MockMlServiceServerMockRecorder) FeatureGen(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "FeatureGen", reflect.TypeOf((*MockMlServiceServer)(nil).FeatureGen), arg0, arg1)
}

// FeatureGenPredict mocks base method.
func (m *MockMlServiceServer) FeatureGenPredict(arg0 context.Context, arg1 *v2.FeatureGenPredictRequest) (*v2.PredictResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "FeatureGenPredict", arg0, arg1)
	ret0, _ := ret[0].(*v2.PredictResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// FeatureGenPredict indicates an expected call of FeatureGenPredict.
func (mr *MockMlServiceServerMockRecorder) FeatureGenPredict(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "FeatureGenPredict", reflect.TypeOf((*MockMlServiceServer)(nil).FeatureGenPredict), arg0, arg1)
}

// Predict mocks base method.
func (m *MockMlServiceServer) Predict(arg0 context.Context, arg1 *v2.PredictRequest) (*v2.PredictResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Predict", arg0, arg1)
	ret0, _ := ret[0].(*v2.PredictResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// Predict indicates an expected call of Predict.
func (mr *MockMlServiceServerMockRecorder) Predict(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Predict", reflect.TypeOf((*MockMlServiceServer)(nil).Predict), arg0, arg1)
}

// MockUnsafeMlServiceServer is a mock of UnsafeMlServiceServer interface.
type MockUnsafeMlServiceServer struct {
	ctrl     *gomock.Controller
	recorder *MockUnsafeMlServiceServerMockRecorder
}

// MockUnsafeMlServiceServerMockRecorder is the mock recorder for MockUnsafeMlServiceServer.
type MockUnsafeMlServiceServerMockRecorder struct {
	mock *MockUnsafeMlServiceServer
}

// NewMockUnsafeMlServiceServer creates a new mock instance.
func NewMockUnsafeMlServiceServer(ctrl *gomock.Controller) *MockUnsafeMlServiceServer {
	mock := &MockUnsafeMlServiceServer{ctrl: ctrl}
	mock.recorder = &MockUnsafeMlServiceServerMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockUnsafeMlServiceServer) EXPECT() *MockUnsafeMlServiceServerMockRecorder {
	return m.recorder
}

// mustEmbedUnimplementedMlServiceServer mocks base method.
func (m *MockUnsafeMlServiceServer) mustEmbedUnimplementedMlServiceServer() {
	m.ctrl.T.Helper()
	m.ctrl.Call(m, "mustEmbedUnimplementedMlServiceServer")
}

// mustEmbedUnimplementedMlServiceServer indicates an expected call of mustEmbedUnimplementedMlServiceServer.
func (mr *MockUnsafeMlServiceServerMockRecorder) mustEmbedUnimplementedMlServiceServer() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "mustEmbedUnimplementedMlServiceServer", reflect.TypeOf((*MockUnsafeMlServiceServer)(nil).mustEmbedUnimplementedMlServiceServer))
}
