/**
 * @fileoverview gRPC-Web generated client stub for asgt.modelregistry.v1alpha1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var asgt_type_model_pb = require('../../../asgt/type/model_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.asgt = {};
proto.asgt.modelregistry = {};
proto.asgt.modelregistry.v1alpha1 = require('./model_registry_pb.js');

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
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ModelRegistry_RegisterModel = new grpc.web.MethodDescriptor(
  '/asgt.modelregistry.v1alpha1.ModelRegistry/RegisterModel',
  grpc.web.MethodType.UNARY,
  proto.asgt.modelregistry.v1alpha1.RegisterModelRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.modelregistry.v1alpha1.RegisterModelRequest} request
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
 *   !proto.asgt.modelregistry.v1alpha1.RegisterModelRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ModelRegistry_RegisterModel = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.modelregistry.v1alpha1.RegisterModelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.asgt.modelregistry.v1alpha1.RegisterModelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
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
 * @return {!Promise<!proto.google.protobuf.Empty>}
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
 *   !proto.asgt.modelregistry.v1alpha1.ListModelVersionsRequest,
 *   !proto.asgt.modelregistry.v1alpha1.ListModelVersionsResponse>}
 */
const methodDescriptor_ModelRegistry_ListModelVersions = new grpc.web.MethodDescriptor(
  '/asgt.modelregistry.v1alpha1.ModelRegistry/ListModelVersions',
  grpc.web.MethodType.UNARY,
  proto.asgt.modelregistry.v1alpha1.ListModelVersionsRequest,
  proto.asgt.modelregistry.v1alpha1.ListModelVersionsResponse,
  /**
   * @param {!proto.asgt.modelregistry.v1alpha1.ListModelVersionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.asgt.modelregistry.v1alpha1.ListModelVersionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.asgt.modelregistry.v1alpha1.ListModelVersionsRequest,
 *   !proto.asgt.modelregistry.v1alpha1.ListModelVersionsResponse>}
 */
const methodInfo_ModelRegistry_ListModelVersions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.asgt.modelregistry.v1alpha1.ListModelVersionsResponse,
  /**
   * @param {!proto.asgt.modelregistry.v1alpha1.ListModelVersionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.asgt.modelregistry.v1alpha1.ListModelVersionsResponse.deserializeBinary
);


/**
 * @param {!proto.asgt.modelregistry.v1alpha1.ListModelVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.asgt.modelregistry.v1alpha1.ListModelVersionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.asgt.modelregistry.v1alpha1.ListModelVersionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.modelregistry.v1alpha1.ModelRegistryClient.prototype.listModelVersions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.modelregistry.v1alpha1.ModelRegistry/ListModelVersions',
      request,
      metadata || {},
      methodDescriptor_ModelRegistry_ListModelVersions,
      callback);
};


/**
 * @param {!proto.asgt.modelregistry.v1alpha1.ListModelVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.asgt.modelregistry.v1alpha1.ListModelVersionsResponse>}
 *     A native promise that resolves to the response
 */
proto.asgt.modelregistry.v1alpha1.ModelRegistryPromiseClient.prototype.listModelVersions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.modelregistry.v1alpha1.ModelRegistry/ListModelVersions',
      request,
      metadata || {},
      methodDescriptor_ModelRegistry_ListModelVersions);
};


module.exports = proto.asgt.modelregistry.v1alpha1;

