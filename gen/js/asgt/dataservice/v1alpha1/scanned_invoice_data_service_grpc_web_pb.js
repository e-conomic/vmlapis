/**
 * @fileoverview gRPC-Web generated client stub for asgt.dataservice.v1alpha1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var asgt_dataservice_v1alpha1_delete_pb = require('../../../asgt/dataservice/v1alpha1/delete_pb.js')

var asgt_dataservice_v1alpha1_info_pb = require('../../../asgt/dataservice/v1alpha1/info_pb.js')

var asgt_type_retention_policy_pb = require('../../../asgt/type/retention_policy_pb.js')

var asgt_type_scanned_invoice_pb = require('../../../asgt/type/scanned_invoice_pb.js')

var asgt_type_target_value_pb = require('../../../asgt/type/target_value_pb.js')

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.asgt = {};
proto.asgt.dataservice = {};
proto.asgt.dataservice.v1alpha1 = require('./scanned_invoice_data_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.asgt.dataservice.v1alpha1.ScannedInvoiceDataServiceClient =
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
proto.asgt.dataservice.v1alpha1.ScannedInvoiceDataServicePromiseClient =
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
 *   !proto.asgt.dataservice.v1alpha1.CreateScannedInvoiceDatasetRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ScannedInvoiceDataService_CreateScannedInvoiceDataset = new grpc.web.MethodDescriptor(
  '/asgt.dataservice.v1alpha1.ScannedInvoiceDataService/CreateScannedInvoiceDataset',
  grpc.web.MethodType.UNARY,
  proto.asgt.dataservice.v1alpha1.CreateScannedInvoiceDatasetRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.CreateScannedInvoiceDatasetRequest} request
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
 *   !proto.asgt.dataservice.v1alpha1.CreateScannedInvoiceDatasetRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ScannedInvoiceDataService_CreateScannedInvoiceDataset = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.CreateScannedInvoiceDatasetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.asgt.dataservice.v1alpha1.CreateScannedInvoiceDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.dataservice.v1alpha1.ScannedInvoiceDataServiceClient.prototype.createScannedInvoiceDataset =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ScannedInvoiceDataService/CreateScannedInvoiceDataset',
      request,
      metadata || {},
      methodDescriptor_ScannedInvoiceDataService_CreateScannedInvoiceDataset,
      callback);
};


/**
 * @param {!proto.asgt.dataservice.v1alpha1.CreateScannedInvoiceDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.asgt.dataservice.v1alpha1.ScannedInvoiceDataServicePromiseClient.prototype.createScannedInvoiceDataset =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ScannedInvoiceDataService/CreateScannedInvoiceDataset',
      request,
      metadata || {},
      methodDescriptor_ScannedInvoiceDataService_CreateScannedInvoiceDataset);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.dataservice.v1alpha1.AppendScannedInvoiceDataRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ScannedInvoiceDataService_AppendScannedInvoiceData = new grpc.web.MethodDescriptor(
  '/asgt.dataservice.v1alpha1.ScannedInvoiceDataService/AppendScannedInvoiceData',
  grpc.web.MethodType.UNARY,
  proto.asgt.dataservice.v1alpha1.AppendScannedInvoiceDataRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.AppendScannedInvoiceDataRequest} request
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
 *   !proto.asgt.dataservice.v1alpha1.AppendScannedInvoiceDataRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ScannedInvoiceDataService_AppendScannedInvoiceData = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.AppendScannedInvoiceDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.asgt.dataservice.v1alpha1.AppendScannedInvoiceDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.dataservice.v1alpha1.ScannedInvoiceDataServiceClient.prototype.appendScannedInvoiceData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ScannedInvoiceDataService/AppendScannedInvoiceData',
      request,
      metadata || {},
      methodDescriptor_ScannedInvoiceDataService_AppendScannedInvoiceData,
      callback);
};


/**
 * @param {!proto.asgt.dataservice.v1alpha1.AppendScannedInvoiceDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.asgt.dataservice.v1alpha1.ScannedInvoiceDataServicePromiseClient.prototype.appendScannedInvoiceData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ScannedInvoiceDataService/AppendScannedInvoiceData',
      request,
      metadata || {},
      methodDescriptor_ScannedInvoiceDataService_AppendScannedInvoiceData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.dataservice.v1alpha1.DeleteRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ScannedInvoiceDataService_DeleteScannedInvoiceData = new grpc.web.MethodDescriptor(
  '/asgt.dataservice.v1alpha1.ScannedInvoiceDataService/DeleteScannedInvoiceData',
  grpc.web.MethodType.UNARY,
  asgt_dataservice_v1alpha1_delete_pb.DeleteRequest,
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
const methodInfo_ScannedInvoiceDataService_DeleteScannedInvoiceData = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.asgt.dataservice.v1alpha1.ScannedInvoiceDataServiceClient.prototype.deleteScannedInvoiceData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ScannedInvoiceDataService/DeleteScannedInvoiceData',
      request,
      metadata || {},
      methodDescriptor_ScannedInvoiceDataService_DeleteScannedInvoiceData,
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
proto.asgt.dataservice.v1alpha1.ScannedInvoiceDataServicePromiseClient.prototype.deleteScannedInvoiceData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ScannedInvoiceDataService/DeleteScannedInvoiceData',
      request,
      metadata || {},
      methodDescriptor_ScannedInvoiceDataService_DeleteScannedInvoiceData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.dataservice.v1alpha1.GetInfoRequest,
 *   !proto.asgt.dataservice.v1alpha1.GetInfoResponse>}
 */
const methodDescriptor_ScannedInvoiceDataService_GetScannedInvoiceInfo = new grpc.web.MethodDescriptor(
  '/asgt.dataservice.v1alpha1.ScannedInvoiceDataService/GetScannedInvoiceInfo',
  grpc.web.MethodType.UNARY,
  asgt_dataservice_v1alpha1_info_pb.GetInfoRequest,
  asgt_dataservice_v1alpha1_info_pb.GetInfoResponse,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.GetInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  asgt_dataservice_v1alpha1_info_pb.GetInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.asgt.dataservice.v1alpha1.GetInfoRequest,
 *   !proto.asgt.dataservice.v1alpha1.GetInfoResponse>}
 */
const methodInfo_ScannedInvoiceDataService_GetScannedInvoiceInfo = new grpc.web.AbstractClientBase.MethodInfo(
  asgt_dataservice_v1alpha1_info_pb.GetInfoResponse,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.GetInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  asgt_dataservice_v1alpha1_info_pb.GetInfoResponse.deserializeBinary
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
proto.asgt.dataservice.v1alpha1.ScannedInvoiceDataServiceClient.prototype.getScannedInvoiceInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ScannedInvoiceDataService/GetScannedInvoiceInfo',
      request,
      metadata || {},
      methodDescriptor_ScannedInvoiceDataService_GetScannedInvoiceInfo,
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
proto.asgt.dataservice.v1alpha1.ScannedInvoiceDataServicePromiseClient.prototype.getScannedInvoiceInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ScannedInvoiceDataService/GetScannedInvoiceInfo',
      request,
      metadata || {},
      methodDescriptor_ScannedInvoiceDataService_GetScannedInvoiceInfo);
};


module.exports = proto.asgt.dataservice.v1alpha1;

