/**
 * @fileoverview gRPC-Web generated client stub for asgt.jester.v1alpha1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var asgt_type_model_info_pb = require('../../../asgt/type/model_info_pb.js')

var asgt_type_prediction_pb = require('../../../asgt/type/prediction_pb.js')

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')
const proto = {};
proto.asgt = {};
proto.asgt.jester = {};
proto.asgt.jester.v1alpha1 = require('./jester_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.asgt.jester.v1alpha1.JesterClient =
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
proto.asgt.jester.v1alpha1.JesterPromiseClient =
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
 *   !proto.asgt.jester.v1alpha1.ScannedInvoiceRequest,
 *   !proto.asgt.jester.v1alpha1.SuggestionsResponse>}
 */
const methodDescriptor_Jester_ScannedInvoiceSuggestions = new grpc.web.MethodDescriptor(
  '/asgt.jester.v1alpha1.Jester/ScannedInvoiceSuggestions',
  grpc.web.MethodType.UNARY,
  proto.asgt.jester.v1alpha1.ScannedInvoiceRequest,
  proto.asgt.jester.v1alpha1.SuggestionsResponse,
  /**
   * @param {!proto.asgt.jester.v1alpha1.ScannedInvoiceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.asgt.jester.v1alpha1.SuggestionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.asgt.jester.v1alpha1.ScannedInvoiceRequest,
 *   !proto.asgt.jester.v1alpha1.SuggestionsResponse>}
 */
const methodInfo_Jester_ScannedInvoiceSuggestions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.asgt.jester.v1alpha1.SuggestionsResponse,
  /**
   * @param {!proto.asgt.jester.v1alpha1.ScannedInvoiceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.asgt.jester.v1alpha1.SuggestionsResponse.deserializeBinary
);


/**
 * @param {!proto.asgt.jester.v1alpha1.ScannedInvoiceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.asgt.jester.v1alpha1.SuggestionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.asgt.jester.v1alpha1.SuggestionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.jester.v1alpha1.JesterClient.prototype.scannedInvoiceSuggestions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.jester.v1alpha1.Jester/ScannedInvoiceSuggestions',
      request,
      metadata || {},
      methodDescriptor_Jester_ScannedInvoiceSuggestions,
      callback);
};


/**
 * @param {!proto.asgt.jester.v1alpha1.ScannedInvoiceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.asgt.jester.v1alpha1.SuggestionsResponse>}
 *     A native promise that resolves to the response
 */
proto.asgt.jester.v1alpha1.JesterPromiseClient.prototype.scannedInvoiceSuggestions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.jester.v1alpha1.Jester/ScannedInvoiceSuggestions',
      request,
      metadata || {},
      methodDescriptor_Jester_ScannedInvoiceSuggestions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.jester.v1alpha1.ElectronicInvoiceLineRequest,
 *   !proto.asgt.jester.v1alpha1.SuggestionsResponse>}
 */
const methodDescriptor_Jester_ElectronicInvoiceLineSuggestions = new grpc.web.MethodDescriptor(
  '/asgt.jester.v1alpha1.Jester/ElectronicInvoiceLineSuggestions',
  grpc.web.MethodType.UNARY,
  proto.asgt.jester.v1alpha1.ElectronicInvoiceLineRequest,
  proto.asgt.jester.v1alpha1.SuggestionsResponse,
  /**
   * @param {!proto.asgt.jester.v1alpha1.ElectronicInvoiceLineRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.asgt.jester.v1alpha1.SuggestionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.asgt.jester.v1alpha1.ElectronicInvoiceLineRequest,
 *   !proto.asgt.jester.v1alpha1.SuggestionsResponse>}
 */
const methodInfo_Jester_ElectronicInvoiceLineSuggestions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.asgt.jester.v1alpha1.SuggestionsResponse,
  /**
   * @param {!proto.asgt.jester.v1alpha1.ElectronicInvoiceLineRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.asgt.jester.v1alpha1.SuggestionsResponse.deserializeBinary
);


/**
 * @param {!proto.asgt.jester.v1alpha1.ElectronicInvoiceLineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.asgt.jester.v1alpha1.SuggestionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.asgt.jester.v1alpha1.SuggestionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.jester.v1alpha1.JesterClient.prototype.electronicInvoiceLineSuggestions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.jester.v1alpha1.Jester/ElectronicInvoiceLineSuggestions',
      request,
      metadata || {},
      methodDescriptor_Jester_ElectronicInvoiceLineSuggestions,
      callback);
};


/**
 * @param {!proto.asgt.jester.v1alpha1.ElectronicInvoiceLineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.asgt.jester.v1alpha1.SuggestionsResponse>}
 *     A native promise that resolves to the response
 */
proto.asgt.jester.v1alpha1.JesterPromiseClient.prototype.electronicInvoiceLineSuggestions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.jester.v1alpha1.Jester/ElectronicInvoiceLineSuggestions',
      request,
      metadata || {},
      methodDescriptor_Jester_ElectronicInvoiceLineSuggestions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.jester.v1alpha1.BankRequest,
 *   !proto.asgt.jester.v1alpha1.SuggestionsResponse>}
 */
const methodDescriptor_Jester_BankSuggestions = new grpc.web.MethodDescriptor(
  '/asgt.jester.v1alpha1.Jester/BankSuggestions',
  grpc.web.MethodType.UNARY,
  proto.asgt.jester.v1alpha1.BankRequest,
  proto.asgt.jester.v1alpha1.SuggestionsResponse,
  /**
   * @param {!proto.asgt.jester.v1alpha1.BankRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.asgt.jester.v1alpha1.SuggestionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.asgt.jester.v1alpha1.BankRequest,
 *   !proto.asgt.jester.v1alpha1.SuggestionsResponse>}
 */
const methodInfo_Jester_BankSuggestions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.asgt.jester.v1alpha1.SuggestionsResponse,
  /**
   * @param {!proto.asgt.jester.v1alpha1.BankRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.asgt.jester.v1alpha1.SuggestionsResponse.deserializeBinary
);


/**
 * @param {!proto.asgt.jester.v1alpha1.BankRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.asgt.jester.v1alpha1.SuggestionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.asgt.jester.v1alpha1.SuggestionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.jester.v1alpha1.JesterClient.prototype.bankSuggestions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.jester.v1alpha1.Jester/BankSuggestions',
      request,
      metadata || {},
      methodDescriptor_Jester_BankSuggestions,
      callback);
};


/**
 * @param {!proto.asgt.jester.v1alpha1.BankRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.asgt.jester.v1alpha1.SuggestionsResponse>}
 *     A native promise that resolves to the response
 */
proto.asgt.jester.v1alpha1.JesterPromiseClient.prototype.bankSuggestions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.jester.v1alpha1.Jester/BankSuggestions',
      request,
      metadata || {},
      methodDescriptor_Jester_BankSuggestions);
};


module.exports = proto.asgt.jester.v1alpha1;

