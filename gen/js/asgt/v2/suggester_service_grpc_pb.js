// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var asgt_v2_suggester_service_pb = require('../../asgt/v2/suggester_service_pb.js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var protoc$gen$openapiv2_options_annotations_pb = require('../../protoc-gen-openapiv2/options/annotations_pb.js');
var validate_validate_pb = require('../../validate/validate_pb.js');
var asgt_type_prediction_pb = require('../../asgt/type/prediction_pb.js');
var asgt_type_model_pb = require('../../asgt/type/model_pb.js');
var asgt_v2_type_data_pb = require('../../asgt/v2/type/data_pb.js');

function serialize_asgt_v2_BatchSuggestRequest(arg) {
  if (!(arg instanceof asgt_v2_suggester_service_pb.BatchSuggestRequest)) {
    throw new Error('Expected argument of type asgt.v2.BatchSuggestRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_asgt_v2_BatchSuggestRequest(buffer_arg) {
  return asgt_v2_suggester_service_pb.BatchSuggestRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asgt_v2_BatchSuggestResponse(arg) {
  if (!(arg instanceof asgt_v2_suggester_service_pb.BatchSuggestResponse)) {
    throw new Error('Expected argument of type asgt.v2.BatchSuggestResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_asgt_v2_BatchSuggestResponse(buffer_arg) {
  return asgt_v2_suggester_service_pb.BatchSuggestResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asgt_v2_SuggestRequest(arg) {
  if (!(arg instanceof asgt_v2_suggester_service_pb.SuggestRequest)) {
    throw new Error('Expected argument of type asgt.v2.SuggestRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_asgt_v2_SuggestRequest(buffer_arg) {
  return asgt_v2_suggester_service_pb.SuggestRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asgt_v2_SuggestResponse(arg) {
  if (!(arg instanceof asgt_v2_suggester_service_pb.SuggestResponse)) {
    throw new Error('Expected argument of type asgt.v2.SuggestResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_asgt_v2_SuggestResponse(buffer_arg) {
  return asgt_v2_suggester_service_pb.SuggestResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SuggesterServiceService = exports.SuggesterServiceService = {
  // Suggest target values for some input using a dataset, returning an empty result if no model exists.
suggest: {
    path: '/asgt.v2.SuggesterService/Suggest',
    requestStream: false,
    responseStream: false,
    requestType: asgt_v2_suggester_service_pb.SuggestRequest,
    responseType: asgt_v2_suggester_service_pb.SuggestResponse,
    requestSerialize: serialize_asgt_v2_SuggestRequest,
    requestDeserialize: deserialize_asgt_v2_SuggestRequest,
    responseSerialize: serialize_asgt_v2_SuggestResponse,
    responseDeserialize: deserialize_asgt_v2_SuggestResponse,
  },
  // BatchSuggest target values for multiple inputs using a dataset, returning an empty result if no model exists.
batchSuggest: {
    path: '/asgt.v2.SuggesterService/BatchSuggest',
    requestStream: false,
    responseStream: false,
    requestType: asgt_v2_suggester_service_pb.BatchSuggestRequest,
    responseType: asgt_v2_suggester_service_pb.BatchSuggestResponse,
    requestSerialize: serialize_asgt_v2_BatchSuggestRequest,
    requestDeserialize: deserialize_asgt_v2_BatchSuggestRequest,
    responseSerialize: serialize_asgt_v2_BatchSuggestResponse,
    responseDeserialize: deserialize_asgt_v2_BatchSuggestResponse,
  },
  // Suggest target values for multiple inputs using the most recently trained model in a dataset.
// Returns 404 if a dataset exists, but no model has been trained. This matches the behavior of the v1 API.
modelBatchSuggest: {
    path: '/asgt.v2.SuggesterService/ModelBatchSuggest',
    requestStream: false,
    responseStream: false,
    requestType: asgt_v2_suggester_service_pb.BatchSuggestRequest,
    responseType: asgt_v2_suggester_service_pb.BatchSuggestResponse,
    requestSerialize: serialize_asgt_v2_BatchSuggestRequest,
    requestDeserialize: deserialize_asgt_v2_BatchSuggestRequest,
    responseSerialize: serialize_asgt_v2_BatchSuggestResponse,
    responseDeserialize: deserialize_asgt_v2_BatchSuggestResponse,
  },
};

exports.SuggesterServiceClient = grpc.makeGenericClientConstructor(SuggesterServiceService);
