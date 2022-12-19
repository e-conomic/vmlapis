/**
 * @fileoverview gRPC-Web generated client stub for ssn.annotator.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v0.0.0
// source: ssn/annotator/v1/annotator.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var ssn_type_candidate_pb = require('../../../ssn/type/candidate_pb.js')

var ssn_type_text_annotation_pb = require('../../../ssn/type/text_annotation_pb.js')

var ssn_type_tier_pb = require('../../../ssn/type/tier_pb.js')
const proto = {};
proto.ssn = {};
proto.ssn.annotator = {};
proto.ssn.annotator.v1 = require('./annotator_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ssn.annotator.v1.DocumentAnnotatorClient =
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
proto.ssn.annotator.v1.DocumentAnnotatorPromiseClient =
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
 *   !proto.ssn.annotator.v1.DocumentAnnotatorRequest,
 *   !proto.ssn.annotator.v1.DocumentAnnotatorResponse>}
 */
const methodDescriptor_DocumentAnnotator_AnnotateDocument = new grpc.web.MethodDescriptor(
  '/ssn.annotator.v1.DocumentAnnotator/AnnotateDocument',
  grpc.web.MethodType.UNARY,
  proto.ssn.annotator.v1.DocumentAnnotatorRequest,
  proto.ssn.annotator.v1.DocumentAnnotatorResponse,
  /**
   * @param {!proto.ssn.annotator.v1.DocumentAnnotatorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ssn.annotator.v1.DocumentAnnotatorResponse.deserializeBinary
);


/**
 * @param {!proto.ssn.annotator.v1.DocumentAnnotatorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ssn.annotator.v1.DocumentAnnotatorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ssn.annotator.v1.DocumentAnnotatorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ssn.annotator.v1.DocumentAnnotatorClient.prototype.annotateDocument =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ssn.annotator.v1.DocumentAnnotator/AnnotateDocument',
      request,
      metadata || {},
      methodDescriptor_DocumentAnnotator_AnnotateDocument,
      callback);
};


/**
 * @param {!proto.ssn.annotator.v1.DocumentAnnotatorRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ssn.annotator.v1.DocumentAnnotatorResponse>}
 *     Promise that resolves to the response
 */
proto.ssn.annotator.v1.DocumentAnnotatorPromiseClient.prototype.annotateDocument =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ssn.annotator.v1.DocumentAnnotator/AnnotateDocument',
      request,
      metadata || {},
      methodDescriptor_DocumentAnnotator_AnnotateDocument);
};


module.exports = proto.ssn.annotator.v1;

