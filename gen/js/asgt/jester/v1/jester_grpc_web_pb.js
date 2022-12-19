/**
 * @fileoverview gRPC-Web generated client stub for asgt.jester.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v0.0.0
// source: asgt/jester/v1/jester.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var asgt_type_data_pb = require('../../../asgt/type/data_pb.js')

var asgt_type_model_pb = require('../../../asgt/type/model_pb.js')

var asgt_type_prediction_pb = require('../../../asgt/type/prediction_pb.js')

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')
const proto = {};
proto.asgt = {};
proto.asgt.jester = {};
proto.asgt.jester.v1 = require('./jester_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.asgt.jester.v1.JesterClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.asgt.jester.v1.JesterPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.jester.v1.SuggestionRequest,
 *   !proto.asgt.jester.v1.SuggestionResponse>}
 */
const methodDescriptor_Jester_Suggest = new grpc.web.MethodDescriptor(
  '/asgt.jester.v1.Jester/Suggest',
  grpc.web.MethodType.UNARY,
  proto.asgt.jester.v1.SuggestionRequest,
  proto.asgt.jester.v1.SuggestionResponse,
  /**
   * @param {!proto.asgt.jester.v1.SuggestionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.asgt.jester.v1.SuggestionResponse.deserializeBinary
);


/**
 * @param {!proto.asgt.jester.v1.SuggestionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.asgt.jester.v1.SuggestionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.asgt.jester.v1.SuggestionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.jester.v1.JesterClient.prototype.suggest =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.jester.v1.Jester/Suggest',
      request,
      metadata || {},
      methodDescriptor_Jester_Suggest,
      callback);
};


/**
 * @param {!proto.asgt.jester.v1.SuggestionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.asgt.jester.v1.SuggestionResponse>}
 *     Promise that resolves to the response
 */
proto.asgt.jester.v1.JesterPromiseClient.prototype.suggest =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.jester.v1.Jester/Suggest',
      request,
      metadata || {},
      methodDescriptor_Jester_Suggest);
};


module.exports = proto.asgt.jester.v1;

