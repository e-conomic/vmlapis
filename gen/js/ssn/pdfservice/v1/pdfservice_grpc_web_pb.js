/**
 * @fileoverview gRPC-Web generated client stub for ssn.pdfservice.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v0.0.0
// source: ssn/pdfservice/v1/pdfservice.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.ssn = {};
proto.ssn.pdfservice = {};
proto.ssn.pdfservice.v1 = require('./pdfservice_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ssn.pdfservice.v1.PdfServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ssn.pdfservice.v1.PdfServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ssn.pdfservice.v1.RasterizePdfRequest,
 *   !proto.ssn.pdfservice.v1.RasterizePdfResponse>}
 */
const methodDescriptor_PdfService_InternalRasterizePdf = new grpc.web.MethodDescriptor(
  '/ssn.pdfservice.v1.PdfService/InternalRasterizePdf',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.ssn.pdfservice.v1.RasterizePdfRequest,
  proto.ssn.pdfservice.v1.RasterizePdfResponse,
  /**
   * @param {!proto.ssn.pdfservice.v1.RasterizePdfRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ssn.pdfservice.v1.RasterizePdfResponse.deserializeBinary
);


/**
 * @param {!proto.ssn.pdfservice.v1.RasterizePdfRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.ssn.pdfservice.v1.RasterizePdfResponse>}
 *     The XHR Node Readable Stream
 */
proto.ssn.pdfservice.v1.PdfServiceClient.prototype.internalRasterizePdf =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/ssn.pdfservice.v1.PdfService/InternalRasterizePdf',
      request,
      metadata || {},
      methodDescriptor_PdfService_InternalRasterizePdf);
};


/**
 * @param {!proto.ssn.pdfservice.v1.RasterizePdfRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.ssn.pdfservice.v1.RasterizePdfResponse>}
 *     The XHR Node Readable Stream
 */
proto.ssn.pdfservice.v1.PdfServicePromiseClient.prototype.internalRasterizePdf =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/ssn.pdfservice.v1.PdfService/InternalRasterizePdf',
      request,
      metadata || {},
      methodDescriptor_PdfService_InternalRasterizePdf);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ssn.pdfservice.v1.RasterizePdfRequest,
 *   !proto.ssn.pdfservice.v1.RasterizePdfResponse>}
 */
const methodDescriptor_PdfService_RasterizePdf = new grpc.web.MethodDescriptor(
  '/ssn.pdfservice.v1.PdfService/RasterizePdf',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.ssn.pdfservice.v1.RasterizePdfRequest,
  proto.ssn.pdfservice.v1.RasterizePdfResponse,
  /**
   * @param {!proto.ssn.pdfservice.v1.RasterizePdfRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ssn.pdfservice.v1.RasterizePdfResponse.deserializeBinary
);


/**
 * @param {!proto.ssn.pdfservice.v1.RasterizePdfRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.ssn.pdfservice.v1.RasterizePdfResponse>}
 *     The XHR Node Readable Stream
 */
proto.ssn.pdfservice.v1.PdfServiceClient.prototype.rasterizePdf =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/ssn.pdfservice.v1.PdfService/RasterizePdf',
      request,
      metadata || {},
      methodDescriptor_PdfService_RasterizePdf);
};


/**
 * @param {!proto.ssn.pdfservice.v1.RasterizePdfRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.ssn.pdfservice.v1.RasterizePdfResponse>}
 *     The XHR Node Readable Stream
 */
proto.ssn.pdfservice.v1.PdfServicePromiseClient.prototype.rasterizePdf =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/ssn.pdfservice.v1.PdfService/RasterizePdf',
      request,
      metadata || {},
      methodDescriptor_PdfService_RasterizePdf);
};


module.exports = proto.ssn.pdfservice.v1;

