/**
 * @fileoverview gRPC-Web generated client stub for asgt.modelregistry.v1alpha1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.asgt = {};
proto.asgt.modelregistry = {};
proto.asgt.modelregistry.v1alpha1 = require('./modelregistry_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.asgt.modelregistry.v1alpha1.ModelRegistryClient =
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
proto.asgt.modelregistry.v1alpha1.ModelRegistryPromiseClient =
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
 *   !proto.asgt.modelregistry.v1alpha1.RegisterModelRequest,
 *   !proto.asgt.modelregistry.v1alpha1.RegisterModelResponse>}
 */
const methodDescriptor_ModelRegistry_RegisterModel = new grpc.web.MethodDescriptor(
  '/asgt.modelregistry.v1alpha1.ModelRegistry/RegisterModel',
  grpc.web.MethodType.UNARY,
  proto.asgt.modelregistry.v1alpha1.RegisterModelRequest,
  proto.asgt.modelregistry.v1alpha1.RegisterModelResponse,
  /**
   * @param {!proto.asgt.modelregistry.v1alpha1.RegisterModelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.asgt.modelregistry.v1alpha1.RegisterModelResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.asgt.modelregistry.v1alpha1.RegisterModelRequest,
 *   !proto.asgt.modelregistry.v1alpha1.RegisterModelResponse>}
 */
const methodInfo_ModelRegistry_RegisterModel = new grpc.web.AbstractClientBase.MethodInfo(
  proto.asgt.modelregistry.v1alpha1.RegisterModelResponse,
  /**
   * @param {!proto.asgt.modelregistry.v1alpha1.RegisterModelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.asgt.modelregistry.v1alpha1.RegisterModelResponse.deserializeBinary
);


/**
 * @param {!proto.asgt.modelregistry.v1alpha1.RegisterModelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.asgt.modelregistry.v1alpha1.RegisterModelResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.asgt.modelregistry.v1alpha1.RegisterModelResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.modelregistry.v1alpha1.ModelRegistryClient.prototype.registerModel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.modelregistry.v1alpha1.ModelRegistry/RegisterModel',
      request,
      metadata || {},
      methodDescriptor_ModelRegistry_RegisterModel,
      callback);
};


/**
 * @param {!proto.asgt.modelregistry.v1alpha1.RegisterModelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.asgt.modelregistry.v1alpha1.RegisterModelResponse>}
 *     A native promise that resolves to the response
 */
proto.asgt.modelregistry.v1alpha1.ModelRegistryPromiseClient.prototype.registerModel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.modelregistry.v1alpha1.ModelRegistry/RegisterModel',
      request,
      metadata || {},
      methodDescriptor_ModelRegistry_RegisterModel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.modelregistry.v1alpha1.DeleteModelRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ModelRegistry_DeleteModel = new grpc.web.MethodDescriptor(
  '/asgt.modelregistry.v1alpha1.ModelRegistry/DeleteModel',
  grpc.web.MethodType.UNARY,
  proto.asgt.modelregistry.v1alpha1.DeleteModelRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.modelregistry.v1alpha1.DeleteModelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.asgt.modelregistry.v1alpha1.DeleteModelRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ModelRegistry_DeleteModel = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.modelregistry.v1alpha1.DeleteModelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.asgt.modelregistry.v1alpha1.DeleteModelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.modelregistry.v1alpha1.ModelRegistryClient.prototype.deleteModel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.modelregistry.v1alpha1.ModelRegistry/DeleteModel',
      request,
      metadata || {},
      methodDescriptor_ModelRegistry_DeleteModel,
      callback);
};


/**
 * @param {!proto.asgt.modelregistry.v1alpha1.DeleteModelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.asgt.modelregistry.v1alpha1.ModelRegistryPromiseClient.prototype.deleteModel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.modelregistry.v1alpha1.ModelRegistry/DeleteModel',
      request,
      metadata || {},
      methodDescriptor_ModelRegistry_DeleteModel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsRequest,
 *   !proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse>}
 */
const methodDescriptor_ModelRegistry_GetLatestModelVersions = new grpc.web.MethodDescriptor(
  '/asgt.modelregistry.v1alpha1.ModelRegistry/GetLatestModelVersions',
  grpc.web.MethodType.UNARY,
  proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsRequest,
  proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse,
  /**
   * @param {!proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsRequest,
 *   !proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse>}
 */
const methodInfo_ModelRegistry_GetLatestModelVersions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse,
  /**
   * @param {!proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.deserializeBinary
);


/**
 * @param {!proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.modelregistry.v1alpha1.ModelRegistryClient.prototype.getLatestModelVersions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.modelregistry.v1alpha1.ModelRegistry/GetLatestModelVersions',
      request,
      metadata || {},
      methodDescriptor_ModelRegistry_GetLatestModelVersions,
      callback);
};


/**
 * @param {!proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse>}
 *     A native promise that resolves to the response
 */
proto.asgt.modelregistry.v1alpha1.ModelRegistryPromiseClient.prototype.getLatestModelVersions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.modelregistry.v1alpha1.ModelRegistry/GetLatestModelVersions',
      request,
      metadata || {},
      methodDescriptor_ModelRegistry_GetLatestModelVersions);
};


module.exports = proto.asgt.modelregistry.v1alpha1;

