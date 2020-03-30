/**
 * @fileoverview gRPC-Web generated client stub for asgt.dataservice.v1alpha1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var asgt_dataservice_v1alpha1_data_pb = require('../../../asgt/dataservice/v1alpha1/data_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.asgt = {};
proto.asgt.dataservice = {};
proto.asgt.dataservice.v1alpha1 = require('./dataset_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.asgt.dataservice.v1alpha1.DatasetServiceClient =
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
proto.asgt.dataservice.v1alpha1.DatasetServicePromiseClient =
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
 *   !proto.asgt.dataservice.v1alpha1.GetDatasetRequest,
 *   !proto.asgt.dataservice.v1alpha1.GetDatasetResponse>}
 */
const methodDescriptor_DatasetService_GetDataset = new grpc.web.MethodDescriptor(
  '/asgt.dataservice.v1alpha1.DatasetService/GetDataset',
  grpc.web.MethodType.UNARY,
  proto.asgt.dataservice.v1alpha1.GetDatasetRequest,
  proto.asgt.dataservice.v1alpha1.GetDatasetResponse,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.GetDatasetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.asgt.dataservice.v1alpha1.GetDatasetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.asgt.dataservice.v1alpha1.GetDatasetRequest,
 *   !proto.asgt.dataservice.v1alpha1.GetDatasetResponse>}
 */
const methodInfo_DatasetService_GetDataset = new grpc.web.AbstractClientBase.MethodInfo(
  proto.asgt.dataservice.v1alpha1.GetDatasetResponse,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.GetDatasetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.asgt.dataservice.v1alpha1.GetDatasetResponse.deserializeBinary
);


/**
 * @param {!proto.asgt.dataservice.v1alpha1.GetDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.asgt.dataservice.v1alpha1.GetDatasetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.asgt.dataservice.v1alpha1.GetDatasetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.dataservice.v1alpha1.DatasetServiceClient.prototype.getDataset =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.DatasetService/GetDataset',
      request,
      metadata || {},
      methodDescriptor_DatasetService_GetDataset,
      callback);
};


/**
 * @param {!proto.asgt.dataservice.v1alpha1.GetDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.asgt.dataservice.v1alpha1.GetDatasetResponse>}
 *     A native promise that resolves to the response
 */
proto.asgt.dataservice.v1alpha1.DatasetServicePromiseClient.prototype.getDataset =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.DatasetService/GetDataset',
      request,
      metadata || {},
      methodDescriptor_DatasetService_GetDataset);
};


module.exports = proto.asgt.dataservice.v1alpha1;
