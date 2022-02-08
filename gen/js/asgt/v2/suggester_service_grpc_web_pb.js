/**
 * @fileoverview gRPC-Web generated client stub for asgt.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var asgt_type_model_pb = require('../../asgt/type/model_pb.js')

var asgt_type_prediction_pb = require('../../asgt/type/prediction_pb.js')

var asgt_v2_type_data_pb = require('../../asgt/v2/type/data_pb.js')

var google_api_annotations_pb = require('../../google/api/annotations_pb.js')

var options_annotations_pb = require('../../options/annotations_pb.js')

var validate_validate_pb = require('../../validate/validate_pb.js')
const proto = {};
proto.asgt = {};
proto.asgt.v2 = require('./suggester_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.asgt.v2.SuggesterServiceClient =
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
proto.asgt.v2.SuggesterServicePromiseClient =
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
 *   !proto.asgt.v2.SuggestRequest,
 *   !proto.asgt.v2.SuggestResponse>}
 */
const methodDescriptor_SuggesterService_Suggest = new grpc.web.MethodDescriptor(
  '/asgt.v2.SuggesterService/Suggest',
  grpc.web.MethodType.UNARY,
  proto.asgt.v2.SuggestRequest,
  proto.asgt.v2.SuggestResponse,
  /**
   * @param {!proto.asgt.v2.SuggestRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.asgt.v2.SuggestResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.asgt.v2.SuggestRequest,
 *   !proto.asgt.v2.SuggestResponse>}
 */
const methodInfo_SuggesterService_Suggest = new grpc.web.AbstractClientBase.MethodInfo(
  proto.asgt.v2.SuggestResponse,
  /**
   * @param {!proto.asgt.v2.SuggestRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.asgt.v2.SuggestResponse.deserializeBinary
);


/**
 * @param {!proto.asgt.v2.SuggestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.asgt.v2.SuggestResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.asgt.v2.SuggestResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.v2.SuggesterServiceClient.prototype.suggest =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.v2.SuggesterService/Suggest',
      request,
      metadata || {},
      methodDescriptor_SuggesterService_Suggest,
      callback);
};


/**
 * @param {!proto.asgt.v2.SuggestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.asgt.v2.SuggestResponse>}
 *     A native promise that resolves to the response
 */
proto.asgt.v2.SuggesterServicePromiseClient.prototype.suggest =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.v2.SuggesterService/Suggest',
      request,
      metadata || {},
      methodDescriptor_SuggesterService_Suggest);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.v2.BatchSuggestRequest,
 *   !proto.asgt.v2.BatchSuggestResponse>}
 */
const methodDescriptor_SuggesterService_BatchSuggest = new grpc.web.MethodDescriptor(
  '/asgt.v2.SuggesterService/BatchSuggest',
  grpc.web.MethodType.UNARY,
  proto.asgt.v2.BatchSuggestRequest,
  proto.asgt.v2.BatchSuggestResponse,
  /**
   * @param {!proto.asgt.v2.BatchSuggestRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.asgt.v2.BatchSuggestResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.asgt.v2.BatchSuggestRequest,
 *   !proto.asgt.v2.BatchSuggestResponse>}
 */
const methodInfo_SuggesterService_BatchSuggest = new grpc.web.AbstractClientBase.MethodInfo(
  proto.asgt.v2.BatchSuggestResponse,
  /**
   * @param {!proto.asgt.v2.BatchSuggestRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.asgt.v2.BatchSuggestResponse.deserializeBinary
);


/**
 * @param {!proto.asgt.v2.BatchSuggestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.asgt.v2.BatchSuggestResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.asgt.v2.BatchSuggestResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.v2.SuggesterServiceClient.prototype.batchSuggest =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.v2.SuggesterService/BatchSuggest',
      request,
      metadata || {},
      methodDescriptor_SuggesterService_BatchSuggest,
      callback);
};


/**
 * @param {!proto.asgt.v2.BatchSuggestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.asgt.v2.BatchSuggestResponse>}
 *     A native promise that resolves to the response
 */
proto.asgt.v2.SuggesterServicePromiseClient.prototype.batchSuggest =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.v2.SuggesterService/BatchSuggest',
      request,
      metadata || {},
      methodDescriptor_SuggesterService_BatchSuggest);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.v2.BatchSuggestRequest,
 *   !proto.asgt.v2.BatchSuggestResponse>}
 */
const methodDescriptor_SuggesterService_ModelBatchSuggest = new grpc.web.MethodDescriptor(
  '/asgt.v2.SuggesterService/ModelBatchSuggest',
  grpc.web.MethodType.UNARY,
  proto.asgt.v2.BatchSuggestRequest,
  proto.asgt.v2.BatchSuggestResponse,
  /**
   * @param {!proto.asgt.v2.BatchSuggestRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.asgt.v2.BatchSuggestResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.asgt.v2.BatchSuggestRequest,
 *   !proto.asgt.v2.BatchSuggestResponse>}
 */
const methodInfo_SuggesterService_ModelBatchSuggest = new grpc.web.AbstractClientBase.MethodInfo(
  proto.asgt.v2.BatchSuggestResponse,
  /**
   * @param {!proto.asgt.v2.BatchSuggestRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.asgt.v2.BatchSuggestResponse.deserializeBinary
);


/**
 * @param {!proto.asgt.v2.BatchSuggestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.asgt.v2.BatchSuggestResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.asgt.v2.BatchSuggestResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.v2.SuggesterServiceClient.prototype.modelBatchSuggest =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.v2.SuggesterService/ModelBatchSuggest',
      request,
      metadata || {},
      methodDescriptor_SuggesterService_ModelBatchSuggest,
      callback);
};


/**
 * @param {!proto.asgt.v2.BatchSuggestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.asgt.v2.BatchSuggestResponse>}
 *     A native promise that resolves to the response
 */
proto.asgt.v2.SuggesterServicePromiseClient.prototype.modelBatchSuggest =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.v2.SuggesterService/ModelBatchSuggest',
      request,
      metadata || {},
      methodDescriptor_SuggesterService_ModelBatchSuggest);
};


module.exports = proto.asgt.v2;

