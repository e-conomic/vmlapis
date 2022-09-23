// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var ssn_pdfservice_v1_pdfservice_pb = require('../../../ssn/pdfservice/v1/pdfservice_pb.js');

function serialize_ssn_pdfservice_v1_RasterizePdfRequest(arg) {
  if (!(arg instanceof ssn_pdfservice_v1_pdfservice_pb.RasterizePdfRequest)) {
    throw new Error('Expected argument of type ssn.pdfservice.v1.RasterizePdfRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ssn_pdfservice_v1_RasterizePdfRequest(buffer_arg) {
  return ssn_pdfservice_v1_pdfservice_pb.RasterizePdfRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ssn_pdfservice_v1_RasterizePdfResponse(arg) {
  if (!(arg instanceof ssn_pdfservice_v1_pdfservice_pb.RasterizePdfResponse)) {
    throw new Error('Expected argument of type ssn.pdfservice.v1.RasterizePdfResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ssn_pdfservice_v1_RasterizePdfResponse(buffer_arg) {
  return ssn_pdfservice_v1_pdfservice_pb.RasterizePdfResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PdfServiceService = exports.PdfServiceService = {
  rasterizePdf: {
    path: '/ssn.pdfservice.v1.PdfService/RasterizePdf',
    requestStream: false,
    responseStream: true,
    requestType: ssn_pdfservice_v1_pdfservice_pb.RasterizePdfRequest,
    responseType: ssn_pdfservice_v1_pdfservice_pb.RasterizePdfResponse,
    requestSerialize: serialize_ssn_pdfservice_v1_RasterizePdfRequest,
    requestDeserialize: deserialize_ssn_pdfservice_v1_RasterizePdfRequest,
    responseSerialize: serialize_ssn_pdfservice_v1_RasterizePdfResponse,
    responseDeserialize: deserialize_ssn_pdfservice_v1_RasterizePdfResponse,
  },
};

exports.PdfServiceClient = grpc.makeGenericClientConstructor(PdfServiceService);
