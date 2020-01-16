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

var asgt_type_prediction_pb = require('../../../asgt/type/prediction_pb.js')

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
proto.asgt.dataservice.v1alpha1.ElectronicInvoiceLineClient =
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
proto.asgt.dataservice.v1alpha1.ElectronicInvoiceLinePromiseClient =
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
 *   !proto.asgt.dataservice.v1alpha1.PrepareElectronicInvoiceLineRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ElectronicInvoiceLine_PrepareElectronicInvoiceLine = new grpc.web.MethodDescriptor(
  '/asgt.dataservice.v1alpha1.ElectronicInvoiceLine/PrepareElectronicInvoiceLine',
  grpc.web.MethodType.UNARY,
  proto.asgt.dataservice.v1alpha1.PrepareElectronicInvoiceLineRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.PrepareElectronicInvoiceLineRequest} request
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
 *   !proto.asgt.dataservice.v1alpha1.PrepareElectronicInvoiceLineRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ElectronicInvoiceLine_PrepareElectronicInvoiceLine = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.PrepareElectronicInvoiceLineRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.asgt.dataservice.v1alpha1.PrepareElectronicInvoiceLineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.dataservice.v1alpha1.ElectronicInvoiceLineClient.prototype.prepareElectronicInvoiceLine =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ElectronicInvoiceLine/PrepareElectronicInvoiceLine',
      request,
      metadata || {},
      methodDescriptor_ElectronicInvoiceLine_PrepareElectronicInvoiceLine,
      callback);
};


/**
 * @param {!proto.asgt.dataservice.v1alpha1.PrepareElectronicInvoiceLineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.asgt.dataservice.v1alpha1.ElectronicInvoiceLinePromiseClient.prototype.prepareElectronicInvoiceLine =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ElectronicInvoiceLine/PrepareElectronicInvoiceLine',
      request,
      metadata || {},
      methodDescriptor_ElectronicInvoiceLine_PrepareElectronicInvoiceLine);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.dataservice.v1alpha1.ElectronicInvoiceLineFeedbackRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ElectronicInvoiceLine_ElectronicInvoiceLineFeedback = new grpc.web.MethodDescriptor(
  '/asgt.dataservice.v1alpha1.ElectronicInvoiceLine/ElectronicInvoiceLineFeedback',
  grpc.web.MethodType.UNARY,
  proto.asgt.dataservice.v1alpha1.ElectronicInvoiceLineFeedbackRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.ElectronicInvoiceLineFeedbackRequest} request
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
 *   !proto.asgt.dataservice.v1alpha1.ElectronicInvoiceLineFeedbackRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ElectronicInvoiceLine_ElectronicInvoiceLineFeedback = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.ElectronicInvoiceLineFeedbackRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.asgt.dataservice.v1alpha1.ElectronicInvoiceLineFeedbackRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.dataservice.v1alpha1.ElectronicInvoiceLineClient.prototype.electronicInvoiceLineFeedback =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ElectronicInvoiceLine/ElectronicInvoiceLineFeedback',
      request,
      metadata || {},
      methodDescriptor_ElectronicInvoiceLine_ElectronicInvoiceLineFeedback,
      callback);
};


/**
 * @param {!proto.asgt.dataservice.v1alpha1.ElectronicInvoiceLineFeedbackRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.asgt.dataservice.v1alpha1.ElectronicInvoiceLinePromiseClient.prototype.electronicInvoiceLineFeedback =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ElectronicInvoiceLine/ElectronicInvoiceLineFeedback',
      request,
      metadata || {},
      methodDescriptor_ElectronicInvoiceLine_ElectronicInvoiceLineFeedback);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.dataservice.v1alpha1.AddElectronicInvoiceLineDataRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ElectronicInvoiceLine_AddElectronicInvoiceLineData = new grpc.web.MethodDescriptor(
  '/asgt.dataservice.v1alpha1.ElectronicInvoiceLine/AddElectronicInvoiceLineData',
  grpc.web.MethodType.UNARY,
  proto.asgt.dataservice.v1alpha1.AddElectronicInvoiceLineDataRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.AddElectronicInvoiceLineDataRequest} request
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
 *   !proto.asgt.dataservice.v1alpha1.AddElectronicInvoiceLineDataRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ElectronicInvoiceLine_AddElectronicInvoiceLineData = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.AddElectronicInvoiceLineDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.asgt.dataservice.v1alpha1.AddElectronicInvoiceLineDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.dataservice.v1alpha1.ElectronicInvoiceLineClient.prototype.addElectronicInvoiceLineData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ElectronicInvoiceLine/AddElectronicInvoiceLineData',
      request,
      metadata || {},
      methodDescriptor_ElectronicInvoiceLine_AddElectronicInvoiceLineData,
      callback);
};


/**
 * @param {!proto.asgt.dataservice.v1alpha1.AddElectronicInvoiceLineDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.asgt.dataservice.v1alpha1.ElectronicInvoiceLinePromiseClient.prototype.addElectronicInvoiceLineData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ElectronicInvoiceLine/AddElectronicInvoiceLineData',
      request,
      metadata || {},
      methodDescriptor_ElectronicInvoiceLine_AddElectronicInvoiceLineData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.dataservice.v1alpha1.DeleteRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ElectronicInvoiceLine_DeleteElectronicInvoiceLine = new grpc.web.MethodDescriptor(
  '/asgt.dataservice.v1alpha1.ElectronicInvoiceLine/DeleteElectronicInvoiceLine',
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
const methodInfo_ElectronicInvoiceLine_DeleteElectronicInvoiceLine = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.asgt.dataservice.v1alpha1.ElectronicInvoiceLineClient.prototype.deleteElectronicInvoiceLine =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ElectronicInvoiceLine/DeleteElectronicInvoiceLine',
      request,
      metadata || {},
      methodDescriptor_ElectronicInvoiceLine_DeleteElectronicInvoiceLine,
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
proto.asgt.dataservice.v1alpha1.ElectronicInvoiceLinePromiseClient.prototype.deleteElectronicInvoiceLine =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ElectronicInvoiceLine/DeleteElectronicInvoiceLine',
      request,
      metadata || {},
      methodDescriptor_ElectronicInvoiceLine_DeleteElectronicInvoiceLine);
};


module.exports = proto.asgt.dataservice.v1alpha1;

