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
proto.asgt.dataservice.v1alpha1 = require('./scanned_invoice_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.asgt.dataservice.v1alpha1.ScannedInvoiceDataserviceClient =
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
proto.asgt.dataservice.v1alpha1.ScannedInvoiceDataservicePromiseClient =
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
 *   !proto.asgt.dataservice.v1alpha1.PrepareScannedInvoiceRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ScannedInvoiceDataservice_PrepareScannedInvoice = new grpc.web.MethodDescriptor(
  '/asgt.dataservice.v1alpha1.ScannedInvoiceDataservice/PrepareScannedInvoice',
  grpc.web.MethodType.UNARY,
  proto.asgt.dataservice.v1alpha1.PrepareScannedInvoiceRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.PrepareScannedInvoiceRequest} request
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
 *   !proto.asgt.dataservice.v1alpha1.PrepareScannedInvoiceRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ScannedInvoiceDataservice_PrepareScannedInvoice = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.PrepareScannedInvoiceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.asgt.dataservice.v1alpha1.PrepareScannedInvoiceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.dataservice.v1alpha1.ScannedInvoiceDataserviceClient.prototype.prepareScannedInvoice =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ScannedInvoiceDataservice/PrepareScannedInvoice',
      request,
      metadata || {},
      methodDescriptor_ScannedInvoiceDataservice_PrepareScannedInvoice,
      callback);
};


/**
 * @param {!proto.asgt.dataservice.v1alpha1.PrepareScannedInvoiceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.asgt.dataservice.v1alpha1.ScannedInvoiceDataservicePromiseClient.prototype.prepareScannedInvoice =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ScannedInvoiceDataservice/PrepareScannedInvoice',
      request,
      metadata || {},
      methodDescriptor_ScannedInvoiceDataservice_PrepareScannedInvoice);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.dataservice.v1alpha1.FeedbackRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ScannedInvoiceDataservice_ScannedInvoiceFeedback = new grpc.web.MethodDescriptor(
  '/asgt.dataservice.v1alpha1.ScannedInvoiceDataservice/ScannedInvoiceFeedback',
  grpc.web.MethodType.UNARY,
  asgt_dataservice_v1alpha1_data_pb.FeedbackRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.FeedbackRequest} request
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
 *   !proto.asgt.dataservice.v1alpha1.FeedbackRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ScannedInvoiceDataservice_ScannedInvoiceFeedback = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.FeedbackRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.asgt.dataservice.v1alpha1.FeedbackRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.dataservice.v1alpha1.ScannedInvoiceDataserviceClient.prototype.scannedInvoiceFeedback =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ScannedInvoiceDataservice/ScannedInvoiceFeedback',
      request,
      metadata || {},
      methodDescriptor_ScannedInvoiceDataservice_ScannedInvoiceFeedback,
      callback);
};


/**
 * @param {!proto.asgt.dataservice.v1alpha1.FeedbackRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.asgt.dataservice.v1alpha1.ScannedInvoiceDataservicePromiseClient.prototype.scannedInvoiceFeedback =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ScannedInvoiceDataservice/ScannedInvoiceFeedback',
      request,
      metadata || {},
      methodDescriptor_ScannedInvoiceDataservice_ScannedInvoiceFeedback);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.dataservice.v1alpha1.AddScannedInvoiceDataRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ScannedInvoiceDataservice_AddScannedInvoiceData = new grpc.web.MethodDescriptor(
  '/asgt.dataservice.v1alpha1.ScannedInvoiceDataservice/AddScannedInvoiceData',
  grpc.web.MethodType.UNARY,
  proto.asgt.dataservice.v1alpha1.AddScannedInvoiceDataRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.AddScannedInvoiceDataRequest} request
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
 *   !proto.asgt.dataservice.v1alpha1.AddScannedInvoiceDataRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ScannedInvoiceDataservice_AddScannedInvoiceData = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.AddScannedInvoiceDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.asgt.dataservice.v1alpha1.AddScannedInvoiceDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.dataservice.v1alpha1.ScannedInvoiceDataserviceClient.prototype.addScannedInvoiceData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ScannedInvoiceDataservice/AddScannedInvoiceData',
      request,
      metadata || {},
      methodDescriptor_ScannedInvoiceDataservice_AddScannedInvoiceData,
      callback);
};


/**
 * @param {!proto.asgt.dataservice.v1alpha1.AddScannedInvoiceDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.asgt.dataservice.v1alpha1.ScannedInvoiceDataservicePromiseClient.prototype.addScannedInvoiceData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ScannedInvoiceDataservice/AddScannedInvoiceData',
      request,
      metadata || {},
      methodDescriptor_ScannedInvoiceDataservice_AddScannedInvoiceData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.dataservice.v1alpha1.DeleteRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ScannedInvoiceDataservice_DeleteScannedInvoice = new grpc.web.MethodDescriptor(
  '/asgt.dataservice.v1alpha1.ScannedInvoiceDataservice/DeleteScannedInvoice',
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
const methodInfo_ScannedInvoiceDataservice_DeleteScannedInvoice = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.asgt.dataservice.v1alpha1.ScannedInvoiceDataserviceClient.prototype.deleteScannedInvoice =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ScannedInvoiceDataservice/DeleteScannedInvoice',
      request,
      metadata || {},
      methodDescriptor_ScannedInvoiceDataservice_DeleteScannedInvoice,
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
proto.asgt.dataservice.v1alpha1.ScannedInvoiceDataservicePromiseClient.prototype.deleteScannedInvoice =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.ScannedInvoiceDataservice/DeleteScannedInvoice',
      request,
      metadata || {},
      methodDescriptor_ScannedInvoiceDataservice_DeleteScannedInvoice);
};


module.exports = proto.asgt.dataservice.v1alpha1;

