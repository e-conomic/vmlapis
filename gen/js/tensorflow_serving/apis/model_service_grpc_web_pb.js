/**
 * @fileoverview gRPC-Web generated client stub for tensorflow.serving
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var tensorflow_serving_apis_get_model_status_pb = require('../../tensorflow_serving/apis/get_model_status_pb.js')

var tensorflow_serving_apis_model_management_pb = require('../../tensorflow_serving/apis/model_management_pb.js')
const proto = {};
proto.tensorflow = {};
proto.tensorflow.serving = require('./model_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.tensorflow.serving.ModelServiceClient =
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
proto.tensorflow.serving.ModelServicePromiseClient =
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
 *   !proto.tensorflow.serving.GetModelStatusRequest,
 *   !proto.tensorflow.serving.GetModelStatusResponse>}
 */
const methodDescriptor_ModelService_GetModelStatus = new grpc.web.MethodDescriptor(
  '/tensorflow.serving.ModelService/GetModelStatus',
  grpc.web.MethodType.UNARY,
  tensorflow_serving_apis_get_model_status_pb.GetModelStatusRequest,
  tensorflow_serving_apis_get_model_status_pb.GetModelStatusResponse,
  /**
   * @param {!proto.tensorflow.serving.GetModelStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_serving_apis_get_model_status_pb.GetModelStatusResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.serving.GetModelStatusRequest,
 *   !proto.tensorflow.serving.GetModelStatusResponse>}
 */
const methodInfo_ModelService_GetModelStatus = new grpc.web.AbstractClientBase.MethodInfo(
  tensorflow_serving_apis_get_model_status_pb.GetModelStatusResponse,
  /**
   * @param {!proto.tensorflow.serving.GetModelStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_serving_apis_get_model_status_pb.GetModelStatusResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.serving.GetModelStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.serving.GetModelStatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.serving.GetModelStatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.serving.ModelServiceClient.prototype.getModelStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.serving.ModelService/GetModelStatus',
      request,
      metadata || {},
      methodDescriptor_ModelService_GetModelStatus,
      callback);
};


/**
 * @param {!proto.tensorflow.serving.GetModelStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.serving.GetModelStatusResponse>}
 *     A native promise that resolves to the response
 */
proto.tensorflow.serving.ModelServicePromiseClient.prototype.getModelStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/tensorflow.serving.ModelService/GetModelStatus',
      request,
      metadata || {},
      methodDescriptor_ModelService_GetModelStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.tensorflow.serving.ReloadConfigRequest,
 *   !proto.tensorflow.serving.ReloadConfigResponse>}
 */
const methodDescriptor_ModelService_HandleReloadConfigRequest = new grpc.web.MethodDescriptor(
  '/tensorflow.serving.ModelService/HandleReloadConfigRequest',
  grpc.web.MethodType.UNARY,
  tensorflow_serving_apis_model_management_pb.ReloadConfigRequest,
  tensorflow_serving_apis_model_management_pb.ReloadConfigResponse,
  /**
   * @param {!proto.tensorflow.serving.ReloadConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_serving_apis_model_management_pb.ReloadConfigResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.serving.ReloadConfigRequest,
 *   !proto.tensorflow.serving.ReloadConfigResponse>}
 */
const methodInfo_ModelService_HandleReloadConfigRequest = new grpc.web.AbstractClientBase.MethodInfo(
  tensorflow_serving_apis_model_management_pb.ReloadConfigResponse,
  /**
   * @param {!proto.tensorflow.serving.ReloadConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_serving_apis_model_management_pb.ReloadConfigResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.serving.ReloadConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.serving.ReloadConfigResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.serving.ReloadConfigResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.serving.ModelServiceClient.prototype.handleReloadConfigRequest =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.serving.ModelService/HandleReloadConfigRequest',
      request,
      metadata || {},
      methodDescriptor_ModelService_HandleReloadConfigRequest,
      callback);
};


/**
 * @param {!proto.tensorflow.serving.ReloadConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.serving.ReloadConfigResponse>}
 *     A native promise that resolves to the response
 */
proto.tensorflow.serving.ModelServicePromiseClient.prototype.handleReloadConfigRequest =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/tensorflow.serving.ModelService/HandleReloadConfigRequest',
      request,
      metadata || {},
      methodDescriptor_ModelService_HandleReloadConfigRequest);
};


module.exports = proto.tensorflow.serving;

