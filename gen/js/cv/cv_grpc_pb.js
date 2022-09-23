// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var cv_cv_pb = require('../cv/cv_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var google_api_http_pb = require('../google/api/http_pb.js');
var ssn_type_candidate_pb = require('../ssn/type/candidate_pb.js');

function serialize_cv_scanner_v1_ScanDocumentRequest(arg) {
  if (!(arg instanceof cv_cv_pb.ScanDocumentRequest)) {
    throw new Error('Expected argument of type cv.scanner.v1.ScanDocumentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cv_scanner_v1_ScanDocumentRequest(buffer_arg) {
  return cv_cv_pb.ScanDocumentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cv_scanner_v1_ScanDocumentResponse(arg) {
  if (!(arg instanceof cv_cv_pb.ScanDocumentResponse)) {
    throw new Error('Expected argument of type cv.scanner.v1.ScanDocumentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cv_scanner_v1_ScanDocumentResponse(buffer_arg) {
  return cv_cv_pb.ScanDocumentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CvScannerService = exports.CvScannerService = {
  scanDocument: {
    path: '/cv.scanner.v1.CvScanner/ScanDocument',
    requestStream: false,
    responseStream: false,
    requestType: cv_cv_pb.ScanDocumentRequest,
    responseType: cv_cv_pb.ScanDocumentResponse,
    requestSerialize: serialize_cv_scanner_v1_ScanDocumentRequest,
    requestDeserialize: deserialize_cv_scanner_v1_ScanDocumentRequest,
    responseSerialize: serialize_cv_scanner_v1_ScanDocumentResponse,
    responseDeserialize: deserialize_cv_scanner_v1_ScanDocumentResponse,
  },
};

exports.CvScannerClient = grpc.makeGenericClientConstructor(CvScannerService);
