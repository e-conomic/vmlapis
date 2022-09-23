// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var ssn_ocrservice_v1_ocrservice_pb = require('../../../ssn/ocrservice/v1/ocrservice_pb.js');
var ssn_annotator_v1_annotator_pb = require('../../../ssn/annotator/v1/annotator_pb.js');
var ssn_type_text_annotation_pb = require('../../../ssn/type/text_annotation_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');

function serialize_ssn_ocrservice_v1_GetTextAnnotationRequest(arg) {
  if (!(arg instanceof ssn_ocrservice_v1_ocrservice_pb.GetTextAnnotationRequest)) {
    throw new Error('Expected argument of type ssn.ocrservice.v1.GetTextAnnotationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ssn_ocrservice_v1_GetTextAnnotationRequest(buffer_arg) {
  return ssn_ocrservice_v1_ocrservice_pb.GetTextAnnotationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ssn_ocrservice_v1_GetTextAnnotationResponse(arg) {
  if (!(arg instanceof ssn_ocrservice_v1_ocrservice_pb.GetTextAnnotationResponse)) {
    throw new Error('Expected argument of type ssn.ocrservice.v1.GetTextAnnotationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ssn_ocrservice_v1_GetTextAnnotationResponse(buffer_arg) {
  return ssn_ocrservice_v1_ocrservice_pb.GetTextAnnotationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ssn_ocrservice_v1_OcrScanImageRequest(arg) {
  if (!(arg instanceof ssn_ocrservice_v1_ocrservice_pb.OcrScanImageRequest)) {
    throw new Error('Expected argument of type ssn.ocrservice.v1.OcrScanImageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ssn_ocrservice_v1_OcrScanImageRequest(buffer_arg) {
  return ssn_ocrservice_v1_ocrservice_pb.OcrScanImageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ssn_ocrservice_v1_OcrScanImageResponse(arg) {
  if (!(arg instanceof ssn_ocrservice_v1_ocrservice_pb.OcrScanImageResponse)) {
    throw new Error('Expected argument of type ssn.ocrservice.v1.OcrScanImageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ssn_ocrservice_v1_OcrScanImageResponse(buffer_arg) {
  return ssn_ocrservice_v1_ocrservice_pb.OcrScanImageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Interface exported by the server.
var OcrServiceService = exports.OcrServiceService = {
  ocrScanImage: {
    path: '/ssn.ocrservice.v1.OcrService/OcrScanImage',
    requestStream: false,
    responseStream: false,
    requestType: ssn_ocrservice_v1_ocrservice_pb.OcrScanImageRequest,
    responseType: ssn_ocrservice_v1_ocrservice_pb.OcrScanImageResponse,
    requestSerialize: serialize_ssn_ocrservice_v1_OcrScanImageRequest,
    requestDeserialize: deserialize_ssn_ocrservice_v1_OcrScanImageRequest,
    responseSerialize: serialize_ssn_ocrservice_v1_OcrScanImageResponse,
    responseDeserialize: deserialize_ssn_ocrservice_v1_OcrScanImageResponse,
  },
  getTextAnnotation: {
    path: '/ssn.ocrservice.v1.OcrService/GetTextAnnotation',
    requestStream: false,
    responseStream: false,
    requestType: ssn_ocrservice_v1_ocrservice_pb.GetTextAnnotationRequest,
    responseType: ssn_ocrservice_v1_ocrservice_pb.GetTextAnnotationResponse,
    requestSerialize: serialize_ssn_ocrservice_v1_GetTextAnnotationRequest,
    requestDeserialize: deserialize_ssn_ocrservice_v1_GetTextAnnotationRequest,
    responseSerialize: serialize_ssn_ocrservice_v1_GetTextAnnotationResponse,
    responseDeserialize: deserialize_ssn_ocrservice_v1_GetTextAnnotationResponse,
  },
};

exports.OcrServiceClient = grpc.makeGenericClientConstructor(OcrServiceService);
