// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var ssn_dataservice_v1_dataservice_pb = require('../../../ssn/dataservice/v1/dataservice_pb.js');
var gen_bq_schema_bq_field_pb = require('../../../gen_bq_schema/bq_field_pb.js');
var gen_bq_schema_bq_table_pb = require('../../../gen_bq_schema/bq_table_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_type_date_pb = require('../../../google/type/date_pb.js');
var ssn_type_candidate_pb = require('../../../ssn/type/candidate_pb.js');
var ssn_type_text_annotation_pb = require('../../../ssn/type/text_annotation_pb.js');
var ssn_type_tier_pb = require('../../../ssn/type/tier_pb.js');

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

function serialize_ssn_dataservice_v1_CreateDocumentRequest(arg) {
  if (!(arg instanceof ssn_dataservice_v1_dataservice_pb.CreateDocumentRequest)) {
    throw new Error('Expected argument of type ssn.dataservice.v1.CreateDocumentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ssn_dataservice_v1_CreateDocumentRequest(buffer_arg) {
  return ssn_dataservice_v1_dataservice_pb.CreateDocumentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ssn_dataservice_v1_CreateDocumentResponse(arg) {
  if (!(arg instanceof ssn_dataservice_v1_dataservice_pb.CreateDocumentResponse)) {
    throw new Error('Expected argument of type ssn.dataservice.v1.CreateDocumentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ssn_dataservice_v1_CreateDocumentResponse(buffer_arg) {
  return ssn_dataservice_v1_dataservice_pb.CreateDocumentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ssn_dataservice_v1_DeleteRequest(arg) {
  if (!(arg instanceof ssn_dataservice_v1_dataservice_pb.DeleteRequest)) {
    throw new Error('Expected argument of type ssn.dataservice.v1.DeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ssn_dataservice_v1_DeleteRequest(buffer_arg) {
  return ssn_dataservice_v1_dataservice_pb.DeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ssn_dataservice_v1_FeedbackMetrics(arg) {
  if (!(arg instanceof ssn_dataservice_v1_dataservice_pb.FeedbackMetrics)) {
    throw new Error('Expected argument of type ssn.dataservice.v1.FeedbackMetrics');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ssn_dataservice_v1_FeedbackMetrics(buffer_arg) {
  return ssn_dataservice_v1_dataservice_pb.FeedbackMetrics.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ssn_dataservice_v1_FeedbackRequest(arg) {
  if (!(arg instanceof ssn_dataservice_v1_dataservice_pb.FeedbackRequest)) {
    throw new Error('Expected argument of type ssn.dataservice.v1.FeedbackRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ssn_dataservice_v1_FeedbackRequest(buffer_arg) {
  return ssn_dataservice_v1_dataservice_pb.FeedbackRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ssn_dataservice_v1_MetricsRequest(arg) {
  if (!(arg instanceof ssn_dataservice_v1_dataservice_pb.MetricsRequest)) {
    throw new Error('Expected argument of type ssn.dataservice.v1.MetricsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ssn_dataservice_v1_MetricsRequest(buffer_arg) {
  return ssn_dataservice_v1_dataservice_pb.MetricsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ssn_dataservice_v1_PrepareFeedbackRequest(arg) {
  if (!(arg instanceof ssn_dataservice_v1_dataservice_pb.PrepareFeedbackRequest)) {
    throw new Error('Expected argument of type ssn.dataservice.v1.PrepareFeedbackRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ssn_dataservice_v1_PrepareFeedbackRequest(buffer_arg) {
  return ssn_dataservice_v1_dataservice_pb.PrepareFeedbackRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ssn_dataservice_v1_ReadDocumentRequest(arg) {
  if (!(arg instanceof ssn_dataservice_v1_dataservice_pb.ReadDocumentRequest)) {
    throw new Error('Expected argument of type ssn.dataservice.v1.ReadDocumentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ssn_dataservice_v1_ReadDocumentRequest(buffer_arg) {
  return ssn_dataservice_v1_dataservice_pb.ReadDocumentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ssn_dataservice_v1_ReadDocumentResponse(arg) {
  if (!(arg instanceof ssn_dataservice_v1_dataservice_pb.ReadDocumentResponse)) {
    throw new Error('Expected argument of type ssn.dataservice.v1.ReadDocumentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ssn_dataservice_v1_ReadDocumentResponse(buffer_arg) {
  return ssn_dataservice_v1_dataservice_pb.ReadDocumentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var DataServiceService = exports.DataServiceService = {
  createDocument: {
    path: '/ssn.dataservice.v1.DataService/CreateDocument',
    requestStream: false,
    responseStream: false,
    requestType: ssn_dataservice_v1_dataservice_pb.CreateDocumentRequest,
    responseType: ssn_dataservice_v1_dataservice_pb.CreateDocumentResponse,
    requestSerialize: serialize_ssn_dataservice_v1_CreateDocumentRequest,
    requestDeserialize: deserialize_ssn_dataservice_v1_CreateDocumentRequest,
    responseSerialize: serialize_ssn_dataservice_v1_CreateDocumentResponse,
    responseDeserialize: deserialize_ssn_dataservice_v1_CreateDocumentResponse,
  },
  readDocument: {
    path: '/ssn.dataservice.v1.DataService/ReadDocument',
    requestStream: false,
    responseStream: false,
    requestType: ssn_dataservice_v1_dataservice_pb.ReadDocumentRequest,
    responseType: ssn_dataservice_v1_dataservice_pb.ReadDocumentResponse,
    requestSerialize: serialize_ssn_dataservice_v1_ReadDocumentRequest,
    requestDeserialize: deserialize_ssn_dataservice_v1_ReadDocumentRequest,
    responseSerialize: serialize_ssn_dataservice_v1_ReadDocumentResponse,
    responseDeserialize: deserialize_ssn_dataservice_v1_ReadDocumentResponse,
  },
  // For feedback
prepareFeedback: {
    path: '/ssn.dataservice.v1.DataService/PrepareFeedback',
    requestStream: false,
    responseStream: false,
    requestType: ssn_dataservice_v1_dataservice_pb.PrepareFeedbackRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ssn_dataservice_v1_PrepareFeedbackRequest,
    requestDeserialize: deserialize_ssn_dataservice_v1_PrepareFeedbackRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  feedback: {
    path: '/ssn.dataservice.v1.DataService/Feedback',
    requestStream: false,
    responseStream: false,
    requestType: ssn_dataservice_v1_dataservice_pb.FeedbackRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ssn_dataservice_v1_FeedbackRequest,
    requestDeserialize: deserialize_ssn_dataservice_v1_FeedbackRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  calculateMetrics: {
    path: '/ssn.dataservice.v1.DataService/CalculateMetrics',
    requestStream: false,
    responseStream: false,
    requestType: ssn_dataservice_v1_dataservice_pb.MetricsRequest,
    responseType: ssn_dataservice_v1_dataservice_pb.FeedbackMetrics,
    requestSerialize: serialize_ssn_dataservice_v1_MetricsRequest,
    requestDeserialize: deserialize_ssn_dataservice_v1_MetricsRequest,
    responseSerialize: serialize_ssn_dataservice_v1_FeedbackMetrics,
    responseDeserialize: deserialize_ssn_dataservice_v1_FeedbackMetrics,
  },
  delete: {
    path: '/ssn.dataservice.v1.DataService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: ssn_dataservice_v1_dataservice_pb.DeleteRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ssn_dataservice_v1_DeleteRequest,
    requestDeserialize: deserialize_ssn_dataservice_v1_DeleteRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  callsPerMonthMetric: {
    path: '/ssn.dataservice.v1.DataService/CallsPerMonthMetric',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: ssn_dataservice_v1_dataservice_pb.CallsPerMonthResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_ssn_dataservice_v1_CallsPerMonthResponse,
    responseDeserialize: deserialize_ssn_dataservice_v1_CallsPerMonthResponse,
  },
};

exports.DataServiceClient = grpc.makeGenericClientConstructor(DataServiceService);
