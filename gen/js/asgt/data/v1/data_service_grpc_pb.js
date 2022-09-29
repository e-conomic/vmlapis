// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var asgt_data_v1_data_service_pb = require('../../../asgt/data/v1/data_service_pb.js');
var asgt_type_dataset_pb = require('../../../asgt/type/dataset_pb.js');
var asgt_type_model_pb = require('../../../asgt/type/model_pb.js');
var asgt_type_retention_policy_pb = require('../../../asgt/type/retention_policy_pb.js');
var asgt_type_sample_pb = require('../../../asgt/type/sample_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var ssn_dataservice_v1_dataservice_pb = require('../../../ssn/dataservice/v1/dataservice_pb.js');

function serialize_asgt_dataservice_v1_AppendDataRequest(arg) {
  if (!(arg instanceof asgt_data_v1_data_service_pb.AppendDataRequest)) {
    throw new Error('Expected argument of type asgt.dataservice.v1.AppendDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_asgt_dataservice_v1_AppendDataRequest(buffer_arg) {
  return asgt_data_v1_data_service_pb.AppendDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asgt_dataservice_v1_CalculateMetricsRequest(arg) {
  if (!(arg instanceof asgt_data_v1_data_service_pb.CalculateMetricsRequest)) {
    throw new Error('Expected argument of type asgt.dataservice.v1.CalculateMetricsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_asgt_dataservice_v1_CalculateMetricsRequest(buffer_arg) {
  return asgt_data_v1_data_service_pb.CalculateMetricsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asgt_dataservice_v1_CalculateMetricsResponse(arg) {
  if (!(arg instanceof asgt_data_v1_data_service_pb.CalculateMetricsResponse)) {
    throw new Error('Expected argument of type asgt.dataservice.v1.CalculateMetricsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_asgt_dataservice_v1_CalculateMetricsResponse(buffer_arg) {
  return asgt_data_v1_data_service_pb.CalculateMetricsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asgt_dataservice_v1_CreateRequest(arg) {
  if (!(arg instanceof asgt_data_v1_data_service_pb.CreateRequest)) {
    throw new Error('Expected argument of type asgt.dataservice.v1.CreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_asgt_dataservice_v1_CreateRequest(buffer_arg) {
  return asgt_data_v1_data_service_pb.CreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asgt_dataservice_v1_DeleteRequest(arg) {
  if (!(arg instanceof asgt_data_v1_data_service_pb.DeleteRequest)) {
    throw new Error('Expected argument of type asgt.dataservice.v1.DeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_asgt_dataservice_v1_DeleteRequest(buffer_arg) {
  return asgt_data_v1_data_service_pb.DeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asgt_dataservice_v1_GetInfoRequest(arg) {
  if (!(arg instanceof asgt_data_v1_data_service_pb.GetInfoRequest)) {
    throw new Error('Expected argument of type asgt.dataservice.v1.GetInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_asgt_dataservice_v1_GetInfoRequest(buffer_arg) {
  return asgt_data_v1_data_service_pb.GetInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asgt_dataservice_v1_GetInfoResponse(arg) {
  if (!(arg instanceof asgt_data_v1_data_service_pb.GetInfoResponse)) {
    throw new Error('Expected argument of type asgt.dataservice.v1.GetInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_asgt_dataservice_v1_GetInfoResponse(buffer_arg) {
  return asgt_data_v1_data_service_pb.GetInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asgt_dataservice_v1_RegisterQueryStatsRequest(arg) {
  if (!(arg instanceof asgt_data_v1_data_service_pb.RegisterQueryStatsRequest)) {
    throw new Error('Expected argument of type asgt.dataservice.v1.RegisterQueryStatsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_asgt_dataservice_v1_RegisterQueryStatsRequest(buffer_arg) {
  return asgt_data_v1_data_service_pb.RegisterQueryStatsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asgt_dataservice_v1_UpdateDatasetRequest(arg) {
  if (!(arg instanceof asgt_data_v1_data_service_pb.UpdateDatasetRequest)) {
    throw new Error('Expected argument of type asgt.dataservice.v1.UpdateDatasetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_asgt_dataservice_v1_UpdateDatasetRequest(buffer_arg) {
  return asgt_data_v1_data_service_pb.UpdateDatasetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ssn_dataservice_v1_CallsPerMonthResponse(arg) {
  if (!(arg instanceof ssn_dataservice_v1_dataservice_pb.CallsPerMonthResponse)) {
    throw new Error('Expected argument of type ssn.dataservice.v1.CallsPerMonthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ssn_dataservice_v1_CallsPerMonthResponse(buffer_arg) {
  return ssn_dataservice_v1_dataservice_pb.CallsPerMonthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var DataServiceService = exports.DataServiceService = {
  createDataset: {
    path: '/asgt.dataservice.v1.DataService/CreateDataset',
    requestStream: false,
    responseStream: false,
    requestType: asgt_data_v1_data_service_pb.CreateRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_asgt_dataservice_v1_CreateRequest,
    requestDeserialize: deserialize_asgt_dataservice_v1_CreateRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  appendData: {
    path: '/asgt.dataservice.v1.DataService/AppendData',
    requestStream: false,
    responseStream: false,
    requestType: asgt_data_v1_data_service_pb.AppendDataRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_asgt_dataservice_v1_AppendDataRequest,
    requestDeserialize: deserialize_asgt_dataservice_v1_AppendDataRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  deleteData: {
    path: '/asgt.dataservice.v1.DataService/DeleteData',
    requestStream: false,
    responseStream: false,
    requestType: asgt_data_v1_data_service_pb.DeleteRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_asgt_dataservice_v1_DeleteRequest,
    requestDeserialize: deserialize_asgt_dataservice_v1_DeleteRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getInfo: {
    path: '/asgt.dataservice.v1.DataService/GetInfo',
    requestStream: false,
    responseStream: false,
    requestType: asgt_data_v1_data_service_pb.GetInfoRequest,
    responseType: asgt_data_v1_data_service_pb.GetInfoResponse,
    requestSerialize: serialize_asgt_dataservice_v1_GetInfoRequest,
    requestDeserialize: deserialize_asgt_dataservice_v1_GetInfoRequest,
    responseSerialize: serialize_asgt_dataservice_v1_GetInfoResponse,
    responseDeserialize: deserialize_asgt_dataservice_v1_GetInfoResponse,
  },
  updateDataset: {
    path: '/asgt.dataservice.v1.DataService/UpdateDataset',
    requestStream: false,
    responseStream: false,
    requestType: asgt_data_v1_data_service_pb.UpdateDatasetRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_asgt_dataservice_v1_UpdateDatasetRequest,
    requestDeserialize: deserialize_asgt_dataservice_v1_UpdateDatasetRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  registerQueryStats: {
    path: '/asgt.dataservice.v1.DataService/RegisterQueryStats',
    requestStream: false,
    responseStream: false,
    requestType: asgt_data_v1_data_service_pb.RegisterQueryStatsRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_asgt_dataservice_v1_RegisterQueryStatsRequest,
    requestDeserialize: deserialize_asgt_dataservice_v1_RegisterQueryStatsRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  callsPerMonthMetric: {
    path: '/asgt.dataservice.v1.DataService/CallsPerMonthMetric',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: ssn_dataservice_v1_dataservice_pb.CallsPerMonthResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_ssn_dataservice_v1_CallsPerMonthResponse,
    responseDeserialize: deserialize_ssn_dataservice_v1_CallsPerMonthResponse,
  },
  calculateMetrics: {
    path: '/asgt.dataservice.v1.DataService/CalculateMetrics',
    requestStream: false,
    responseStream: false,
    requestType: asgt_data_v1_data_service_pb.CalculateMetricsRequest,
    responseType: asgt_data_v1_data_service_pb.CalculateMetricsResponse,
    requestSerialize: serialize_asgt_dataservice_v1_CalculateMetricsRequest,
    requestDeserialize: deserialize_asgt_dataservice_v1_CalculateMetricsRequest,
    responseSerialize: serialize_asgt_dataservice_v1_CalculateMetricsResponse,
    responseDeserialize: deserialize_asgt_dataservice_v1_CalculateMetricsResponse,
  },
};

exports.DataServiceClient = grpc.makeGenericClientConstructor(DataServiceService);
