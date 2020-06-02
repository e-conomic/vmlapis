/**
 * @fileoverview gRPC-Web generated client stub for asgt.dataservice.v1alpha1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var asgt_data_v1alpha1_create_pb = require('../../../asgt/data/v1alpha1/create_pb.js')

var asgt_data_v1alpha1_delete_pb = require('../../../asgt/data/v1alpha1/delete_pb.js')

var asgt_data_v1alpha1_info_pb = require('../../../asgt/data/v1alpha1/info_pb.js')

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.asgt = {};
proto.asgt.dataservice = {};
proto.asgt.dataservice.v1alpha1 = require('./data_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.asgt.dataservice.v1alpha1.DataClient =
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
proto.asgt.dataservice.v1alpha1.DataPromiseClient =
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
 *   !proto.asgt.dataservice.v1alpha1.CreateRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Data_CreateDataset = new grpc.web.MethodDescriptor(
  '/asgt.dataservice.v1alpha1.Data/CreateDataset',
  grpc.web.MethodType.UNARY,
  asgt_data_v1alpha1_create_pb.CreateRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.CreateRequest} request
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
 *   !proto.asgt.dataservice.v1alpha1.CreateRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Data_CreateDataset = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.CreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.asgt.dataservice.v1alpha1.CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.dataservice.v1alpha1.DataClient.prototype.createDataset =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.Data/CreateDataset',
      request,
      metadata || {},
      methodDescriptor_Data_CreateDataset,
      callback);
};


/**
 * @param {!proto.asgt.dataservice.v1alpha1.CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.asgt.dataservice.v1alpha1.DataPromiseClient.prototype.createDataset =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.Data/CreateDataset',
      request,
      metadata || {},
      methodDescriptor_Data_CreateDataset);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.dataservice.v1alpha1.AppendDataRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Data_AppendData = new grpc.web.MethodDescriptor(
  '/asgt.dataservice.v1alpha1.Data/AppendData',
  grpc.web.MethodType.UNARY,
  asgt_data_v1alpha1_create_pb.AppendDataRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.AppendDataRequest} request
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
 *   !proto.asgt.dataservice.v1alpha1.AppendDataRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Data_AppendData = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.AppendDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.asgt.dataservice.v1alpha1.AppendDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.dataservice.v1alpha1.DataClient.prototype.appendData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.Data/AppendData',
      request,
      metadata || {},
      methodDescriptor_Data_AppendData,
      callback);
};


/**
 * @param {!proto.asgt.dataservice.v1alpha1.AppendDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.asgt.dataservice.v1alpha1.DataPromiseClient.prototype.appendData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.Data/AppendData',
      request,
      metadata || {},
      methodDescriptor_Data_AppendData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.dataservice.v1alpha1.DeleteRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Data_DeleteData = new grpc.web.MethodDescriptor(
  '/asgt.dataservice.v1alpha1.Data/DeleteData',
  grpc.web.MethodType.UNARY,
  asgt_data_v1alpha1_delete_pb.DeleteRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.DeleteRequest} request
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
 *   !proto.asgt.dataservice.v1alpha1.DeleteRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Data_DeleteData = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.DeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.asgt.dataservice.v1alpha1.DeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.dataservice.v1alpha1.DataClient.prototype.deleteData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.Data/DeleteData',
      request,
      metadata || {},
      methodDescriptor_Data_DeleteData,
      callback);
};


/**
 * @param {!proto.asgt.dataservice.v1alpha1.DeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.asgt.dataservice.v1alpha1.DataPromiseClient.prototype.deleteData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.Data/DeleteData',
      request,
      metadata || {},
      methodDescriptor_Data_DeleteData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.dataservice.v1alpha1.GetInfoRequest,
 *   !proto.asgt.dataservice.v1alpha1.GetInfoResponse>}
 */
const methodDescriptor_Data_GetInfo = new grpc.web.MethodDescriptor(
  '/asgt.dataservice.v1alpha1.Data/GetInfo',
  grpc.web.MethodType.UNARY,
  asgt_data_v1alpha1_info_pb.GetInfoRequest,
  asgt_data_v1alpha1_info_pb.GetInfoResponse,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.GetInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  asgt_data_v1alpha1_info_pb.GetInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.asgt.dataservice.v1alpha1.GetInfoRequest,
 *   !proto.asgt.dataservice.v1alpha1.GetInfoResponse>}
 */
const methodInfo_Data_GetInfo = new grpc.web.AbstractClientBase.MethodInfo(
  asgt_data_v1alpha1_info_pb.GetInfoResponse,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.GetInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  asgt_data_v1alpha1_info_pb.GetInfoResponse.deserializeBinary
);


/**
 * @param {!proto.asgt.dataservice.v1alpha1.GetInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.asgt.dataservice.v1alpha1.GetInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.asgt.dataservice.v1alpha1.GetInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.dataservice.v1alpha1.DataClient.prototype.getInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.Data/GetInfo',
      request,
      metadata || {},
      methodDescriptor_Data_GetInfo,
      callback);
};


/**
 * @param {!proto.asgt.dataservice.v1alpha1.GetInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.asgt.dataservice.v1alpha1.GetInfoResponse>}
 *     A native promise that resolves to the response
 */
proto.asgt.dataservice.v1alpha1.DataPromiseClient.prototype.getInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.Data/GetInfo',
      request,
      metadata || {},
      methodDescriptor_Data_GetInfo);
};


module.exports = proto.asgt.dataservice.v1alpha1;

