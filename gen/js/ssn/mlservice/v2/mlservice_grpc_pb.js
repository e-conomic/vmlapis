// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var ssn_mlservice_v2_mlservice_pb = require('../../../ssn/mlservice/v2/mlservice_pb.js');
var google_type_date_pb = require('../../../google/type/date_pb.js');
var ssn_type_candidate_pb = require('../../../ssn/type/candidate_pb.js');
var ssn_type_text_annotation_pb = require('../../../ssn/type/text_annotation_pb.js');
var ssn_mlservice_v2_example_pb = require('../../../ssn/mlservice/v2/example_pb.js');

function serialize_ssn_mlservice_v2_FeatureGenPredictRequest(arg) {
  if (!(arg instanceof ssn_mlservice_v2_mlservice_pb.FeatureGenPredictRequest)) {
    throw new Error('Expected argument of type ssn.mlservice.v2.FeatureGenPredictRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ssn_mlservice_v2_FeatureGenPredictRequest(buffer_arg) {
  return ssn_mlservice_v2_mlservice_pb.FeatureGenPredictRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ssn_mlservice_v2_FeatureGenRequest(arg) {
  if (!(arg instanceof ssn_mlservice_v2_mlservice_pb.FeatureGenRequest)) {
    throw new Error('Expected argument of type ssn.mlservice.v2.FeatureGenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ssn_mlservice_v2_FeatureGenRequest(buffer_arg) {
  return ssn_mlservice_v2_mlservice_pb.FeatureGenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ssn_mlservice_v2_FeatureGenResponse(arg) {
  if (!(arg instanceof ssn_mlservice_v2_mlservice_pb.FeatureGenResponse)) {
    throw new Error('Expected argument of type ssn.mlservice.v2.FeatureGenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ssn_mlservice_v2_FeatureGenResponse(buffer_arg) {
  return ssn_mlservice_v2_mlservice_pb.FeatureGenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ssn_mlservice_v2_PredictRequest(arg) {
  if (!(arg instanceof ssn_mlservice_v2_mlservice_pb.PredictRequest)) {
    throw new Error('Expected argument of type ssn.mlservice.v2.PredictRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ssn_mlservice_v2_PredictRequest(buffer_arg) {
  return ssn_mlservice_v2_mlservice_pb.PredictRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ssn_mlservice_v2_PredictResponse(arg) {
  if (!(arg instanceof ssn_mlservice_v2_mlservice_pb.PredictResponse)) {
    throw new Error('Expected argument of type ssn.mlservice.v2.PredictResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ssn_mlservice_v2_PredictResponse(buffer_arg) {
  return ssn_mlservice_v2_mlservice_pb.PredictResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Feature Generation Service
var MlServiceService = exports.MlServiceService = {
  featureGen: {
    path: '/ssn.mlservice.v2.MlService/FeatureGen',
    requestStream: false,
    responseStream: false,
    requestType: ssn_mlservice_v2_mlservice_pb.FeatureGenRequest,
    responseType: ssn_mlservice_v2_mlservice_pb.FeatureGenResponse,
    requestSerialize: serialize_ssn_mlservice_v2_FeatureGenRequest,
    requestDeserialize: deserialize_ssn_mlservice_v2_FeatureGenRequest,
    responseSerialize: serialize_ssn_mlservice_v2_FeatureGenResponse,
    responseDeserialize: deserialize_ssn_mlservice_v2_FeatureGenResponse,
  },
  predict: {
    path: '/ssn.mlservice.v2.MlService/Predict',
    requestStream: false,
    responseStream: false,
    requestType: ssn_mlservice_v2_mlservice_pb.PredictRequest,
    responseType: ssn_mlservice_v2_mlservice_pb.PredictResponse,
    requestSerialize: serialize_ssn_mlservice_v2_PredictRequest,
    requestDeserialize: deserialize_ssn_mlservice_v2_PredictRequest,
    responseSerialize: serialize_ssn_mlservice_v2_PredictResponse,
    responseDeserialize: deserialize_ssn_mlservice_v2_PredictResponse,
  },
  // Convinienve method
featureGenPredict: {
    path: '/ssn.mlservice.v2.MlService/FeatureGenPredict',
    requestStream: false,
    responseStream: false,
    requestType: ssn_mlservice_v2_mlservice_pb.FeatureGenPredictRequest,
    responseType: ssn_mlservice_v2_mlservice_pb.PredictResponse,
    requestSerialize: serialize_ssn_mlservice_v2_FeatureGenPredictRequest,
    requestDeserialize: deserialize_ssn_mlservice_v2_FeatureGenPredictRequest,
    responseSerialize: serialize_ssn_mlservice_v2_PredictResponse,
    responseDeserialize: deserialize_ssn_mlservice_v2_PredictResponse,
  },
};

exports.MlServiceClient = grpc.makeGenericClientConstructor(MlServiceService);
