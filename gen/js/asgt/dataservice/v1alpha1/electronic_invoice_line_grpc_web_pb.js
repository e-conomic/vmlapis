/**
 * @fileoverview gRPC-Web generated client stub for asgt.dataservice.v1alpha1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var asgt_dataservice_v1alpha1_data_pb = require('../../../asgt/dataservice/v1alpha1/data_pb.js')

var asgt_jester_v1alpha1_jester_pb = require('../../../asgt/jester/v1alpha1/jester_pb.js')

var gen_bq_schema_bq_field_pb = require('../../../gen_bq_schema/bq_field_pb.js')

var gen_bq_schema_bq_table_pb = require('../../../gen_bq_schema/bq_table_pb.js')

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.asgt = {};
proto.asgt.dataservice = {};
proto.asgt.dataservice.v1alpha1 = require('./electronic_invoice_line_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataserviceClient =
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
proto.asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataservicePromiseClient =
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
const methodDescriptor_ElectronicInvoiceLineDataservice_CreateElectronicInvoiceLineDataset = new grpc.web.MethodDescriptor(
  '/asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataservice/CreateElectronicInvoiceLineDataset',
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
const methodInfo_ElectronicInvoiceLineDataservice_CreateElectronicInvoiceLineDataset = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataserviceClient.prototype.createElectronicInvoiceLineDataset =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataservice/CreateElectronicInvoiceLineDataset',
      request,
      metadata || {},
      methodDescriptor_ElectronicInvoiceLineDataservice_CreateElectronicInvoiceLineDataset,
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
proto.asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataservicePromiseClient.prototype.createElectronicInvoiceLineDataset =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataservice/CreateElectronicInvoiceLineDataset',
      request,
      metadata || {},
      methodDescriptor_ElectronicInvoiceLineDataservice_CreateElectronicInvoiceLineDataset);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.dataservice.v1alpha1.AppendElectronicInvoiceLineDataRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ElectronicInvoiceLineDataservice_AppendElectronicInvoiceLineData = new grpc.web.MethodDescriptor(
  '/asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataservice/AppendElectronicInvoiceLineData',
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
const methodInfo_ElectronicInvoiceLineDataservice_AppendElectronicInvoiceLineData = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataserviceClient.prototype.appendElectronicInvoiceLineData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataservice/AppendElectronicInvoiceLineData',
      request,
      metadata || {},
      methodDescriptor_ElectronicInvoiceLineDataservice_AppendElectronicInvoiceLineData,
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
proto.asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataservicePromiseClient.prototype.appendElectronicInvoiceLineData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataservice/AppendElectronicInvoiceLineData',
      request,
      metadata || {},
      methodDescriptor_ElectronicInvoiceLineDataservice_AppendElectronicInvoiceLineData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.dataservice.v1alpha1.DeleteRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ElectronicInvoiceLineDataservice_DeleteElectronicInvoiceLineData = new grpc.web.MethodDescriptor(
  '/asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataservice/DeleteElectronicInvoiceLineData',
  grpc.web.MethodType.UNARY,
  asgt_dataservice_v1alpha1_data_pb.DeleteRequest,
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
const methodInfo_ElectronicInvoiceLineDataservice_DeleteElectronicInvoiceLineData = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataserviceClient.prototype.deleteElectronicInvoiceLineData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataservice/DeleteElectronicInvoiceLineData',
      request,
      metadata || {},
      methodDescriptor_ElectronicInvoiceLineDataservice_DeleteElectronicInvoiceLineData,
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
proto.asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataservicePromiseClient.prototype.deleteElectronicInvoiceLineData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ElectronicInvoiceLineDataservice/DeleteElectronicInvoiceLineData',
      request,
      metadata || {},
      methodDescriptor_ElectronicInvoiceLineDataservice_DeleteElectronicInvoiceLineData);
};


module.exports = proto.asgt.dataservice.v1alpha1;

