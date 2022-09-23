// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var ssn_annotator_v1_annotator_pb = require('../../../ssn/annotator/v1/annotator_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var protoc$gen$openapiv2_options_annotations_pb = require('../../../protoc-gen-openapiv2/options/annotations_pb.js');
var ssn_type_candidate_pb = require('../../../ssn/type/candidate_pb.js');
var ssn_type_text_annotation_pb = require('../../../ssn/type/text_annotation_pb.js');
var ssn_type_tier_pb = require('../../../ssn/type/tier_pb.js');

function serialize_ssn_annotator_v1_DocumentAnnotatorRequest(arg) {
  if (!(arg instanceof ssn_annotator_v1_annotator_pb.DocumentAnnotatorRequest)) {
    throw new Error('Expected argument of type ssn.annotator.v1.DocumentAnnotatorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ssn_annotator_v1_DocumentAnnotatorRequest(buffer_arg) {
  return ssn_annotator_v1_annotator_pb.DocumentAnnotatorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ssn_annotator_v1_DocumentAnnotatorResponse(arg) {
  if (!(arg instanceof ssn_annotator_v1_annotator_pb.DocumentAnnotatorResponse)) {
    throw new Error('Expected argument of type ssn.annotator.v1.DocumentAnnotatorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ssn_annotator_v1_DocumentAnnotatorResponse(buffer_arg) {
  return ssn_annotator_v1_annotator_pb.DocumentAnnotatorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var DocumentAnnotatorService = exports.DocumentAnnotatorService = {
  annotateDocument: {
    path: '/ssn.annotator.v1.DocumentAnnotator/AnnotateDocument',
    requestStream: false,
    responseStream: false,
    requestType: ssn_annotator_v1_annotator_pb.DocumentAnnotatorRequest,
    responseType: ssn_annotator_v1_annotator_pb.DocumentAnnotatorResponse,
    requestSerialize: serialize_ssn_annotator_v1_DocumentAnnotatorRequest,
    requestDeserialize: deserialize_ssn_annotator_v1_DocumentAnnotatorRequest,
    responseSerialize: serialize_ssn_annotator_v1_DocumentAnnotatorResponse,
    responseDeserialize: deserialize_ssn_annotator_v1_DocumentAnnotatorResponse,
  },
};

exports.DocumentAnnotatorClient = grpc.makeGenericClientConstructor(DocumentAnnotatorService);
