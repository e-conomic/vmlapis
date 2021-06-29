/**
 * @fileoverview gRPC-Web generated client stub for asgt.v2alpha
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
proto.asgt.v2alpha = require('./suggester_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.asgt.v2alpha.SuggesterServiceClient =
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
proto.asgt.v2alpha.SuggesterServicePromiseClient =
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
 *   !proto.asgt.v2alpha.SuggestRequest,
 *   !proto.asgt.v2alpha.SuggestResponse>}
 */
const methodDescriptor_SuggesterService_Suggest = new grpc.web.MethodDescriptor(
  '/asgt.v2alpha.SuggesterService/Suggest',
  grpc.web.MethodType.UNARY,
  proto.asgt.v2alpha.SuggestRequest,
  proto.asgt.v2alpha.SuggestResponse,
  /**
   * @param {!proto.asgt.v2alpha.SuggestRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.asgt.v2alpha.SuggestResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.asgt.v2alpha.SuggestRequest,
 *   !proto.asgt.v2alpha.SuggestResponse>}
 */
const methodInfo_SuggesterService_Suggest = new grpc.web.AbstractClientBase.MethodInfo(
  proto.asgt.v2alpha.SuggestResponse,
  /**
   * @param {!proto.asgt.v2alpha.SuggestRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.asgt.v2alpha.SuggestResponse.deserializeBinary
);


/**
 * @param {!proto.asgt.v2alpha.SuggestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.asgt.v2alpha.SuggestResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.asgt.v2alpha.SuggestResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.v2alpha.SuggesterServiceClient.prototype.suggest =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.v2alpha.SuggesterService/Suggest',
      request,
      metadata || {},
      methodDescriptor_SuggesterService_Suggest,
      callback);
};


/**
 * @param {!proto.asgt.v2alpha.SuggestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.asgt.v2alpha.SuggestResponse>}
 *     A native promise that resolves to the response
 */
proto.asgt.v2alpha.SuggesterServicePromiseClient.prototype.suggest =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.v2alpha.SuggesterService/Suggest',
      request,
      metadata || {},
      methodDescriptor_SuggesterService_Suggest);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.v2alpha.BatchSuggestRequest,
 *   !proto.asgt.v2alpha.BatchSuggestResponse>}
 */
const methodDescriptor_SuggesterService_BatchSuggest = new grpc.web.MethodDescriptor(
  '/asgt.v2alpha.SuggesterService/BatchSuggest',
  grpc.web.MethodType.UNARY,
  proto.asgt.v2alpha.BatchSuggestRequest,
  proto.asgt.v2alpha.BatchSuggestResponse,
  /**
   * @param {!proto.asgt.v2alpha.BatchSuggestRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.asgt.v2alpha.BatchSuggestResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.asgt.v2alpha.BatchSuggestRequest,
 *   !proto.asgt.v2alpha.BatchSuggestResponse>}
 */
const methodInfo_SuggesterService_BatchSuggest = new grpc.web.AbstractClientBase.MethodInfo(
  proto.asgt.v2alpha.BatchSuggestResponse,
  /**
   * @param {!proto.asgt.v2alpha.BatchSuggestRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.asgt.v2alpha.BatchSuggestResponse.deserializeBinary
);


/**
 * @param {!proto.asgt.v2alpha.BatchSuggestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.asgt.v2alpha.BatchSuggestResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.asgt.v2alpha.BatchSuggestResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.v2alpha.SuggesterServiceClient.prototype.batchSuggest =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.v2alpha.SuggesterService/BatchSuggest',
      request,
      metadata || {},
      methodDescriptor_SuggesterService_BatchSuggest,
      callback);
};


/**
 * @param {!proto.asgt.v2alpha.BatchSuggestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.asgt.v2alpha.BatchSuggestResponse>}
 *     A native promise that resolves to the response
 */
proto.asgt.v2alpha.SuggesterServicePromiseClient.prototype.batchSuggest =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.v2alpha.SuggesterService/BatchSuggest',
      request,
      metadata || {},
      methodDescriptor_SuggesterService_BatchSuggest);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.v2alpha.BatchSuggestRequest,
 *   !proto.asgt.v2alpha.BatchSuggestResponse>}
 */
const methodDescriptor_SuggesterService_ModelBatchSuggest = new grpc.web.MethodDescriptor(
  '/asgt.v2alpha.SuggesterService/ModelBatchSuggest',
  grpc.web.MethodType.UNARY,
  proto.asgt.v2alpha.BatchSuggestRequest,
  proto.asgt.v2alpha.BatchSuggestResponse,
  /**
   * @param {!proto.asgt.v2alpha.BatchSuggestRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.asgt.v2alpha.BatchSuggestResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.asgt.v2alpha.BatchSuggestRequest,
 *   !proto.asgt.v2alpha.BatchSuggestResponse>}
 */
const methodInfo_SuggesterService_ModelBatchSuggest = new grpc.web.AbstractClientBase.MethodInfo(
  proto.asgt.v2alpha.BatchSuggestResponse,
  /**
   * @param {!proto.asgt.v2alpha.BatchSuggestRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.asgt.v2alpha.BatchSuggestResponse.deserializeBinary
);


/**
 * @param {!proto.asgt.v2alpha.BatchSuggestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.asgt.v2alpha.BatchSuggestResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.asgt.v2alpha.BatchSuggestResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.v2alpha.SuggesterServiceClient.prototype.modelBatchSuggest =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.v2alpha.SuggesterService/ModelBatchSuggest',
      request,
      metadata || {},
      methodDescriptor_SuggesterService_ModelBatchSuggest,
      callback);
};


/**
 * @param {!proto.asgt.v2alpha.BatchSuggestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.asgt.v2alpha.BatchSuggestResponse>}
 *     A native promise that resolves to the response
 */
proto.asgt.v2alpha.SuggesterServicePromiseClient.prototype.modelBatchSuggest =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.v2alpha.SuggesterService/ModelBatchSuggest',
      request,
      metadata || {},
      methodDescriptor_SuggesterService_ModelBatchSuggest);
};


module.exports = proto.asgt.v2alpha;

