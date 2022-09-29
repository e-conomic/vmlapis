// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var asgt_jester_v1_jester_pb = require('../../../asgt/jester/v1/jester_pb.js');
var asgt_type_data_pb = require('../../../asgt/type/data_pb.js');
var asgt_type_model_pb = require('../../../asgt/type/model_pb.js');
var asgt_type_prediction_pb = require('../../../asgt/type/prediction_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var protoc$gen$openapiv2_options_annotations_pb = require('../../../protoc-gen-openapiv2/options/annotations_pb.js');

function serialize_asgt_jester_v1_SuggestionRequest(arg) {
  if (!(arg instanceof asgt_jester_v1_jester_pb.SuggestionRequest)) {
    throw new Error('Expected argument of type asgt.jester.v1.SuggestionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_asgt_jester_v1_SuggestionRequest(buffer_arg) {
  return asgt_jester_v1_jester_pb.SuggestionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asgt_jester_v1_SuggestionResponse(arg) {
  if (!(arg instanceof asgt_jester_v1_jester_pb.SuggestionResponse)) {
    throw new Error('Expected argument of type asgt.jester.v1.SuggestionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_asgt_jester_v1_SuggestionResponse(buffer_arg) {
  return asgt_jester_v1_jester_pb.SuggestionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var JesterService = exports.JesterService = {
  suggest: {
    path: '/asgt.jester.v1.Jester/Suggest',
    requestStream: false,
    responseStream: false,
    requestType: asgt_jester_v1_jester_pb.SuggestionRequest,
    responseType: asgt_jester_v1_jester_pb.SuggestionResponse,
    requestSerialize: serialize_asgt_jester_v1_SuggestionRequest,
    requestDeserialize: deserialize_asgt_jester_v1_SuggestionRequest,
    responseSerialize: serialize_asgt_jester_v1_SuggestionResponse,
    responseDeserialize: deserialize_asgt_jester_v1_SuggestionResponse,
  },
};

exports.JesterClient = grpc.makeGenericClientConstructor(JesterService);
