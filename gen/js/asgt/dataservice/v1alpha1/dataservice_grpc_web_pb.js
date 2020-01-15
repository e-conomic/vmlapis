/**
 * @fileoverview gRPC-Web generated client stub for asgt.dataservice.v1alpha1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var asgt_jester_v1alpha1_jester_pb = require('../../../asgt/jester/v1alpha1/jester_pb.js')

var gen_bq_schema_bq_field_pb = require('../../../gen_bq_schema/bq_field_pb.js')

var gen_bq_schema_bq_table_pb = require('../../../gen_bq_schema/bq_table_pb.js')

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.asgt = {};
proto.asgt.dataservice = {};
proto.asgt.dataservice.v1alpha1 = require('./dataservice_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.asgt.dataservice.v1alpha1.DataServiceClient =
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
proto.asgt.dataservice.v1alpha1.DataServicePromiseClient =
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
 *   !proto.asgt.dataservice.v1alpha1.PrepareScannedInvoiceFeedbackRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_DataService_PrepareScannedInvoiceFeedback = new grpc.web.MethodDescriptor(
  '/asgt.dataservice.v1alpha1.DataService/PrepareScannedInvoiceFeedback',
  grpc.web.MethodType.UNARY,
  proto.asgt.dataservice.v1alpha1.PrepareScannedInvoiceFeedbackRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.PrepareScannedInvoiceFeedbackRequest} request
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
 *   !proto.asgt.dataservice.v1alpha1.PrepareScannedInvoiceFeedbackRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DataService_PrepareScannedInvoiceFeedback = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.PrepareScannedInvoiceFeedbackRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.asgt.dataservice.v1alpha1.PrepareScannedInvoiceFeedbackRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.dataservice.v1alpha1.DataServiceClient.prototype.prepareScannedInvoiceFeedback =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.DataService/PrepareScannedInvoiceFeedback',
      request,
      metadata || {},
      methodDescriptor_DataService_PrepareScannedInvoiceFeedback,
      callback);
};


/**
 * @param {!proto.asgt.dataservice.v1alpha1.PrepareScannedInvoiceFeedbackRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.asgt.dataservice.v1alpha1.DataServicePromiseClient.prototype.prepareScannedInvoiceFeedback =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.DataService/PrepareScannedInvoiceFeedback',
      request,
      metadata || {},
      methodDescriptor_DataService_PrepareScannedInvoiceFeedback);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.dataservice.v1alpha1.ScannedInvoiceFeedbackRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_DataService_ScannedInvoiceFeedback = new grpc.web.MethodDescriptor(
  '/asgt.dataservice.v1alpha1.DataService/ScannedInvoiceFeedback',
  grpc.web.MethodType.UNARY,
  proto.asgt.dataservice.v1alpha1.ScannedInvoiceFeedbackRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.ScannedInvoiceFeedbackRequest} request
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
 *   !proto.asgt.dataservice.v1alpha1.ScannedInvoiceFeedbackRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DataService_ScannedInvoiceFeedback = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.ScannedInvoiceFeedbackRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.asgt.dataservice.v1alpha1.ScannedInvoiceFeedbackRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.dataservice.v1alpha1.DataServiceClient.prototype.scannedInvoiceFeedback =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.DataService/ScannedInvoiceFeedback',
      request,
      metadata || {},
      methodDescriptor_DataService_ScannedInvoiceFeedback,
      callback);
};


/**
 * @param {!proto.asgt.dataservice.v1alpha1.ScannedInvoiceFeedbackRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.asgt.dataservice.v1alpha1.DataServicePromiseClient.prototype.scannedInvoiceFeedback =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.DataService/ScannedInvoiceFeedback',
      request,
      metadata || {},
      methodDescriptor_DataService_ScannedInvoiceFeedback);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.dataservice.v1alpha1.PrepareScannedInvoiceFeedbackRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_DataService_PrepareElectronicInvoicLineFeedback = new grpc.web.MethodDescriptor(
  '/asgt.dataservice.v1alpha1.DataService/PrepareElectronicInvoicLineFeedback',
  grpc.web.MethodType.UNARY,
  proto.asgt.dataservice.v1alpha1.PrepareScannedInvoiceFeedbackRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.PrepareScannedInvoiceFeedbackRequest} request
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
 *   !proto.asgt.dataservice.v1alpha1.PrepareScannedInvoiceFeedbackRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DataService_PrepareElectronicInvoicLineFeedback = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.PrepareScannedInvoiceFeedbackRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.asgt.dataservice.v1alpha1.PrepareScannedInvoiceFeedbackRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.dataservice.v1alpha1.DataServiceClient.prototype.prepareElectronicInvoicLineFeedback =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.DataService/PrepareElectronicInvoicLineFeedback',
      request,
      metadata || {},
      methodDescriptor_DataService_PrepareElectronicInvoicLineFeedback,
      callback);
};


/**
 * @param {!proto.asgt.dataservice.v1alpha1.PrepareScannedInvoiceFeedbackRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.asgt.dataservice.v1alpha1.DataServicePromiseClient.prototype.prepareElectronicInvoicLineFeedback =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.DataService/PrepareElectronicInvoicLineFeedback',
      request,
      metadata || {},
      methodDescriptor_DataService_PrepareElectronicInvoicLineFeedback);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.dataservice.v1alpha1.ScannedInvoiceFeedbackRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_DataService_ElectronicInvoicLineFeedback = new grpc.web.MethodDescriptor(
  '/asgt.dataservice.v1alpha1.DataService/ElectronicInvoicLineFeedback',
  grpc.web.MethodType.UNARY,
  proto.asgt.dataservice.v1alpha1.ScannedInvoiceFeedbackRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.ScannedInvoiceFeedbackRequest} request
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
 *   !proto.asgt.dataservice.v1alpha1.ScannedInvoiceFeedbackRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DataService_ElectronicInvoicLineFeedback = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.dataservice.v1alpha1.ScannedInvoiceFeedbackRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.asgt.dataservice.v1alpha1.ScannedInvoiceFeedbackRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.dataservice.v1alpha1.DataServiceClient.prototype.electronicInvoicLineFeedback =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.DataService/ElectronicInvoicLineFeedback',
      request,
      metadata || {},
      methodDescriptor_DataService_ElectronicInvoicLineFeedback,
      callback);
};


/**
 * @param {!proto.asgt.dataservice.v1alpha1.ScannedInvoiceFeedbackRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.asgt.dataservice.v1alpha1.DataServicePromiseClient.prototype.electronicInvoicLineFeedback =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.DataService/ElectronicInvoicLineFeedback',
      request,
      metadata || {},
      methodDescriptor_DataService_ElectronicInvoicLineFeedback);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.dataservice.v1alpha1.DeleteRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_DataService_Delete = new grpc.web.MethodDescriptor(
  '/asgt.dataservice.v1alpha1.DataService/Delete',
  grpc.web.MethodType.UNARY,
  proto.asgt.dataservice.v1alpha1.DeleteRequest,
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
const methodInfo_DataService_Delete = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.asgt.dataservice.v1alpha1.DataServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.DataService/Delete',
      request,
      metadata || {},
      methodDescriptor_DataService_Delete,
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
proto.asgt.dataservice.v1alpha1.DataServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.dataservice.v1alpha1.DataService/Delete',
      request,
      metadata || {},
      methodDescriptor_DataService_Delete);
};


module.exports = proto.asgt.dataservice.v1alpha1;

