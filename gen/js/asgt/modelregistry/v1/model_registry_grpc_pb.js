// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var asgt_modelregistry_v1_model_registry_pb = require('../../../asgt/modelregistry/v1/model_registry_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var asgt_type_model_pb = require('../../../asgt/type/model_pb.js');
var asgt_type_dataset_pb = require('../../../asgt/type/dataset_pb.js');
var asgt_type_revision_pb = require('../../../asgt/type/revision_pb.js');
var asgt_type_target_metrics_pb = require('../../../asgt/type/target_metrics_pb.js');
var asgt_type_train_statistics_pb = require('../../../asgt/type/train_statistics_pb.js');

function serialize_asgt_modelregistry_v1_GetCurrentModelRequest(arg) {
  if (!(arg instanceof asgt_modelregistry_v1_model_registry_pb.GetCurrentModelRequest)) {
    throw new Error('Expected argument of type asgt.modelregistry.v1.GetCurrentModelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_asgt_modelregistry_v1_GetCurrentModelRequest(buffer_arg) {
  return asgt_modelregistry_v1_model_registry_pb.GetCurrentModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asgt_modelregistry_v1_GetCurrentModelResponse(arg) {
  if (!(arg instanceof asgt_modelregistry_v1_model_registry_pb.GetCurrentModelResponse)) {
    throw new Error('Expected argument of type asgt.modelregistry.v1.GetCurrentModelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_asgt_modelregistry_v1_GetCurrentModelResponse(buffer_arg) {
  return asgt_modelregistry_v1_model_registry_pb.GetCurrentModelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asgt_modelregistry_v1_RegisterModelRequest(arg) {
  if (!(arg instanceof asgt_modelregistry_v1_model_registry_pb.RegisterModelRequest)) {
    throw new Error('Expected argument of type asgt.modelregistry.v1.RegisterModelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_asgt_modelregistry_v1_RegisterModelRequest(buffer_arg) {
  return asgt_modelregistry_v1_model_registry_pb.RegisterModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


var ModelRegistryService = exports.ModelRegistryService = {
  registerModel: {
    path: '/asgt.modelregistry.v1.ModelRegistry/RegisterModel',
    requestStream: false,
    responseStream: false,
    requestType: asgt_modelregistry_v1_model_registry_pb.RegisterModelRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_asgt_modelregistry_v1_RegisterModelRequest,
    requestDeserialize: deserialize_asgt_modelregistry_v1_RegisterModelRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  //  rpc DeleteModel (DeleteModelRequest) returns (google.protobuf.Empty);
getCurrentModel: {
    path: '/asgt.modelregistry.v1.ModelRegistry/GetCurrentModel',
    requestStream: false,
    responseStream: false,
    requestType: asgt_modelregistry_v1_model_registry_pb.GetCurrentModelRequest,
    responseType: asgt_modelregistry_v1_model_registry_pb.GetCurrentModelResponse,
    requestSerialize: serialize_asgt_modelregistry_v1_GetCurrentModelRequest,
    requestDeserialize: deserialize_asgt_modelregistry_v1_GetCurrentModelRequest,
    responseSerialize: serialize_asgt_modelregistry_v1_GetCurrentModelResponse,
    responseDeserialize: deserialize_asgt_modelregistry_v1_GetCurrentModelResponse,
  },
};

exports.ModelRegistryClient = grpc.makeGenericClientConstructor(ModelRegistryService);
