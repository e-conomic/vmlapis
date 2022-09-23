// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var ssn_access_v1_access_pb = require('../../../ssn/access/v1/access_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');

function serialize_ssn_access_v1_ValetKeyRequest(arg) {
  if (!(arg instanceof ssn_access_v1_access_pb.ValetKeyRequest)) {
    throw new Error('Expected argument of type ssn.access.v1.ValetKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ssn_access_v1_ValetKeyRequest(buffer_arg) {
  return ssn_access_v1_access_pb.ValetKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ssn_access_v1_ValetKeyResponse(arg) {
  if (!(arg instanceof ssn_access_v1_access_pb.ValetKeyResponse)) {
    throw new Error('Expected argument of type ssn.access.v1.ValetKeyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ssn_access_v1_ValetKeyResponse(buffer_arg) {
  return ssn_access_v1_access_pb.ValetKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AccessService = exports.AccessService = {
  generateValetKey: {
    path: '/ssn.access.v1.Access/GenerateValetKey',
    requestStream: false,
    responseStream: false,
    requestType: ssn_access_v1_access_pb.ValetKeyRequest,
    responseType: ssn_access_v1_access_pb.ValetKeyResponse,
    requestSerialize: serialize_ssn_access_v1_ValetKeyRequest,
    requestDeserialize: deserialize_ssn_access_v1_ValetKeyRequest,
    responseSerialize: serialize_ssn_access_v1_ValetKeyResponse,
    responseDeserialize: deserialize_ssn_access_v1_ValetKeyResponse,
  },
};

exports.AccessClient = grpc.makeGenericClientConstructor(AccessService);
