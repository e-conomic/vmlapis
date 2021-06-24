/**
 * @fileoverview gRPC-Web generated client stub for asgt.v2alpha.suggester
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var asgt_type_data_pb = require('../../asgt/type/data_pb.js')

var asgt_type_model_pb = require('../../asgt/type/model_pb.js')

var asgt_type_prediction_pb = require('../../asgt/type/prediction_pb.js')

var google_api_annotations_pb = require('../../google/api/annotations_pb.js')

var options_annotations_pb = require('../../options/annotations_pb.js')
const proto = {};
proto.asgt = {};
proto.asgt.v2alpha = {};
proto.asgt.v2alpha.suggester = require('./suggester_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.asgt.v2alpha.suggester.SuggesterClient =
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
proto.asgt.v2alpha.suggester.SuggesterPromiseClient =
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
 *   !proto.asgt.v2alpha.suggester.SuggestRequest,
 *   !proto.asgt.v2alpha.suggester.SuggestResponse>}
 */
const methodDescriptor_Suggester_Suggest = new grpc.web.MethodDescriptor(
  '/asgt.v2alpha.suggester.Suggester/Suggest',
  grpc.web.MethodType.UNARY,
  proto.asgt.v2alpha.suggester.SuggestRequest,
  proto.asgt.v2alpha.suggester.SuggestResponse,
  /**
   * @param {!proto.asgt.v2alpha.suggester.SuggestRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.asgt.v2alpha.suggester.SuggestResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.asgt.v2alpha.suggester.SuggestRequest,
 *   !proto.asgt.v2alpha.suggester.SuggestResponse>}
 */
const methodInfo_Suggester_Suggest = new grpc.web.AbstractClientBase.MethodInfo(
  proto.asgt.v2alpha.suggester.SuggestResponse,
  /**
   * @param {!proto.asgt.v2alpha.suggester.SuggestRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.asgt.v2alpha.suggester.SuggestResponse.deserializeBinary
);


/**
 * @param {!proto.asgt.v2alpha.suggester.SuggestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.asgt.v2alpha.suggester.SuggestResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.asgt.v2alpha.suggester.SuggestResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.v2alpha.suggester.SuggesterClient.prototype.suggest =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.v2alpha.suggester.Suggester/Suggest',
      request,
      metadata || {},
      methodDescriptor_Suggester_Suggest,
      callback);
};


/**
 * @param {!proto.asgt.v2alpha.suggester.SuggestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.asgt.v2alpha.suggester.SuggestResponse>}
 *     A native promise that resolves to the response
 */
proto.asgt.v2alpha.suggester.SuggesterPromiseClient.prototype.suggest =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.v2alpha.suggester.Suggester/Suggest',
      request,
      metadata || {},
      methodDescriptor_Suggester_Suggest);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.v2alpha.suggester.SuggestRequest,
 *   !proto.asgt.v2alpha.suggester.SuggestResponse>}
 */
const methodDescriptor_Suggester_BatchSuggest = new grpc.web.MethodDescriptor(
  '/asgt.v2alpha.suggester.Suggester/BatchSuggest',
  grpc.web.MethodType.UNARY,
  proto.asgt.v2alpha.suggester.SuggestRequest,
  proto.asgt.v2alpha.suggester.SuggestResponse,
  /**
   * @param {!proto.asgt.v2alpha.suggester.SuggestRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.asgt.v2alpha.suggester.SuggestResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.asgt.v2alpha.suggester.SuggestRequest,
 *   !proto.asgt.v2alpha.suggester.SuggestResponse>}
 */
const methodInfo_Suggester_BatchSuggest = new grpc.web.AbstractClientBase.MethodInfo(
  proto.asgt.v2alpha.suggester.SuggestResponse,
  /**
   * @param {!proto.asgt.v2alpha.suggester.SuggestRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.asgt.v2alpha.suggester.SuggestResponse.deserializeBinary
);


/**
 * @param {!proto.asgt.v2alpha.suggester.SuggestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.asgt.v2alpha.suggester.SuggestResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.asgt.v2alpha.suggester.SuggestResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.v2alpha.suggester.SuggesterClient.prototype.batchSuggest =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.v2alpha.suggester.Suggester/BatchSuggest',
      request,
      metadata || {},
      methodDescriptor_Suggester_BatchSuggest,
      callback);
};


/**
 * @param {!proto.asgt.v2alpha.suggester.SuggestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.asgt.v2alpha.suggester.SuggestResponse>}
 *     A native promise that resolves to the response
 */
proto.asgt.v2alpha.suggester.SuggesterPromiseClient.prototype.batchSuggest =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.v2alpha.suggester.Suggester/BatchSuggest',
      request,
      metadata || {},
      methodDescriptor_Suggester_BatchSuggest);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.v2alpha.suggester.SuggestRequest,
 *   !proto.asgt.v2alpha.suggester.SuggestResponse>}
 */
const methodDescriptor_Suggester_ModelBatchSuggest = new grpc.web.MethodDescriptor(
  '/asgt.v2alpha.suggester.Suggester/ModelBatchSuggest',
  grpc.web.MethodType.UNARY,
  proto.asgt.v2alpha.suggester.SuggestRequest,
  proto.asgt.v2alpha.suggester.SuggestResponse,
  /**
   * @param {!proto.asgt.v2alpha.suggester.SuggestRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.asgt.v2alpha.suggester.SuggestResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.asgt.v2alpha.suggester.SuggestRequest,
 *   !proto.asgt.v2alpha.suggester.SuggestResponse>}
 */
const methodInfo_Suggester_ModelBatchSuggest = new grpc.web.AbstractClientBase.MethodInfo(
  proto.asgt.v2alpha.suggester.SuggestResponse,
  /**
   * @param {!proto.asgt.v2alpha.suggester.SuggestRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.asgt.v2alpha.suggester.SuggestResponse.deserializeBinary
);


/**
 * @param {!proto.asgt.v2alpha.suggester.SuggestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.asgt.v2alpha.suggester.SuggestResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.asgt.v2alpha.suggester.SuggestResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.v2alpha.suggester.SuggesterClient.prototype.modelBatchSuggest =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.v2alpha.suggester.Suggester/ModelBatchSuggest',
      request,
      metadata || {},
      methodDescriptor_Suggester_ModelBatchSuggest,
      callback);
};


/**
 * @param {!proto.asgt.v2alpha.suggester.SuggestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.asgt.v2alpha.suggester.SuggestResponse>}
 *     A native promise that resolves to the response
 */
proto.asgt.v2alpha.suggester.SuggesterPromiseClient.prototype.modelBatchSuggest =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.v2alpha.suggester.Suggester/ModelBatchSuggest',
      request,
      metadata || {},
      methodDescriptor_Suggester_ModelBatchSuggest);
};


module.exports = proto.asgt.v2alpha.suggester;

