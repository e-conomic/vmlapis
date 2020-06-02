/**
 * @fileoverview gRPC-Web generated client stub for asgt.jester.v1alpha1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var asgt_type_data_pb = require('../../../asgt/type/data_pb.js')

var asgt_type_model_pb = require('../../../asgt/type/model_pb.js')

var asgt_type_prediction_pb = require('../../../asgt/type/prediction_pb.js')

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')
const proto = {};
proto.asgt = {};
proto.asgt.jester = {};
proto.asgt.jester.v1alpha1 = require('./jester_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.asgt.jester.v1alpha1.JesterClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.asgt.jester.v1alpha1.JesterPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.jester.v1alpha1.SuggestionRequest,
 *   !proto.asgt.jester.v1alpha1.SuggestionResponse>}
 */
const methodDescriptor_Jester_Suggest = new grpc.web.MethodDescriptor(
  '/asgt.jester.v1alpha1.Jester/Suggest',
  grpc.web.MethodType.UNARY,
  proto.asgt.jester.v1alpha1.SuggestionRequest,
  proto.asgt.jester.v1alpha1.SuggestionResponse,
  /**
   * @param {!proto.asgt.jester.v1alpha1.SuggestionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.asgt.jester.v1alpha1.SuggestionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.asgt.jester.v1alpha1.SuggestionRequest,
 *   !proto.asgt.jester.v1alpha1.SuggestionResponse>}
 */
const methodInfo_Jester_Suggest = new grpc.web.AbstractClientBase.MethodInfo(
  proto.asgt.jester.v1alpha1.SuggestionResponse,
  /**
   * @param {!proto.asgt.jester.v1alpha1.SuggestionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.asgt.jester.v1alpha1.SuggestionResponse.deserializeBinary
);


/**
 * @param {!proto.asgt.jester.v1alpha1.SuggestionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.asgt.jester.v1alpha1.SuggestionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.asgt.jester.v1alpha1.SuggestionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.jester.v1alpha1.JesterClient.prototype.suggest =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.jester.v1alpha1.Jester/Suggest',
      request,
      metadata || {},
      methodDescriptor_Jester_Suggest,
      callback);
};


/**
 * @param {!proto.asgt.jester.v1alpha1.SuggestionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.asgt.jester.v1alpha1.SuggestionResponse>}
 *     A native promise that resolves to the response
 */
proto.asgt.jester.v1alpha1.JesterPromiseClient.prototype.suggest =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.jester.v1alpha1.Jester/Suggest',
      request,
      metadata || {},
      methodDescriptor_Jester_Suggest);
};


module.exports = proto.asgt.jester.v1alpha1;

