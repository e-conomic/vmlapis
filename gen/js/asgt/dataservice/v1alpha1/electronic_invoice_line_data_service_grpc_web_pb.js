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

var asgt_type_invoice_line_pb = require('../../../asgt/type/invoice_line_pb.js')

var asgt_type_retention_policy_pb = require('../../../asgt/type/retention_policy_pb.js')

var asgt_type_target_value_pb = require('../../../asgt/type/target_value_pb.js')

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.asgt = {};
proto.asgt.dataservice = {};
proto.asgt.dataservice.v1alpha1 = require('./electronic_invoice_line_data_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataServiceClient =
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
proto.asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataServicePromiseClient =
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
 *   !proto.asgt.dataservice.v1alpha1.CreateElectronicInvoiceLineDatasetRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ElectronicInvoiceLineDataService_CreateElectronicInvoiceLineDataset = new grpc.web.MethodDescriptor(
  '/asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataService/CreateElectronicInvoiceLineDataset',
  grpc.web.MethodType.UNARY,
  proto.asgt.dataservice.v1alpha1.CreateElectronicInvoiceLineDatasetRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.CreateElectronicInvoiceLineDatasetRequest} request
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
 *   !proto.asgt.dataservice.v1alpha1.CreateElectronicInvoiceLineDatasetRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ElectronicInvoiceLineDataService_CreateElectronicInvoiceLineDataset = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.CreateElectronicInvoiceLineDatasetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.asgt.dataservice.v1alpha1.CreateElectronicInvoiceLineDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataServiceClient.prototype.createElectronicInvoiceLineDataset =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataService/CreateElectronicInvoiceLineDataset',
      request,
      metadata || {},
      methodDescriptor_ElectronicInvoiceLineDataService_CreateElectronicInvoiceLineDataset,
      callback);
};


/**
 * @param {!proto.asgt.dataservice.v1alpha1.CreateElectronicInvoiceLineDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataServicePromiseClient.prototype.createElectronicInvoiceLineDataset =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataService/CreateElectronicInvoiceLineDataset',
      request,
      metadata || {},
      methodDescriptor_ElectronicInvoiceLineDataService_CreateElectronicInvoiceLineDataset);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.dataservice.v1alpha1.AppendElectronicInvoiceLineDataRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ElectronicInvoiceLineDataService_AppendElectronicInvoiceLineData = new grpc.web.MethodDescriptor(
  '/asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataService/AppendElectronicInvoiceLineData',
  grpc.web.MethodType.UNARY,
  proto.asgt.dataservice.v1alpha1.AppendElectronicInvoiceLineDataRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.AppendElectronicInvoiceLineDataRequest} request
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
 *   !proto.asgt.dataservice.v1alpha1.AppendElectronicInvoiceLineDataRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ElectronicInvoiceLineDataService_AppendElectronicInvoiceLineData = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.AppendElectronicInvoiceLineDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.asgt.dataservice.v1alpha1.AppendElectronicInvoiceLineDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataServiceClient.prototype.appendElectronicInvoiceLineData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataService/AppendElectronicInvoiceLineData',
      request,
      metadata || {},
      methodDescriptor_ElectronicInvoiceLineDataService_AppendElectronicInvoiceLineData,
      callback);
};


/**
 * @param {!proto.asgt.dataservice.v1alpha1.AppendElectronicInvoiceLineDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataServicePromiseClient.prototype.appendElectronicInvoiceLineData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataService/AppendElectronicInvoiceLineData',
      request,
      metadata || {},
      methodDescriptor_ElectronicInvoiceLineDataService_AppendElectronicInvoiceLineData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.dataservice.v1alpha1.DeleteRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ElectronicInvoiceLineDataService_DeleteElectronicInvoiceLineData = new grpc.web.MethodDescriptor(
  '/asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataService/DeleteElectronicInvoiceLineData',
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
const methodInfo_ElectronicInvoiceLineDataService_DeleteElectronicInvoiceLineData = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataServiceClient.prototype.deleteElectronicInvoiceLineData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataService/DeleteElectronicInvoiceLineData',
      request,
      metadata || {},
      methodDescriptor_ElectronicInvoiceLineDataService_DeleteElectronicInvoiceLineData,
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
proto.asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataServicePromiseClient.prototype.deleteElectronicInvoiceLineData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataService/DeleteElectronicInvoiceLineData',
      request,
      metadata || {},
      methodDescriptor_ElectronicInvoiceLineDataService_DeleteElectronicInvoiceLineData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.dataservice.v1alpha1.GetInfoRequest,
 *   !proto.asgt.dataservice.v1alpha1.GetInfoResponse>}
 */
const methodDescriptor_ElectronicInvoiceLineDataService_GetElectronicInvoiceLineInfo = new grpc.web.MethodDescriptor(
  '/asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataService/GetElectronicInvoiceLineInfo',
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
const methodInfo_ElectronicInvoiceLineDataService_GetElectronicInvoiceLineInfo = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataServiceClient.prototype.getElectronicInvoiceLineInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataService/GetElectronicInvoiceLineInfo',
      request,
      metadata || {},
      methodDescriptor_ElectronicInvoiceLineDataService_GetElectronicInvoiceLineInfo,
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
proto.asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataServicePromiseClient.prototype.getElectronicInvoiceLineInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataService/GetElectronicInvoiceLineInfo',
      request,
      metadata || {},
      methodDescriptor_ElectronicInvoiceLineDataService_GetElectronicInvoiceLineInfo);
};


module.exports = proto.asgt.dataservice.v1alpha1;

