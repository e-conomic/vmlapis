/**
 * @fileoverview gRPC-Web generated client stub for ssn.ocrservice.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var ssn_annotator_v1_annotator_pb = require('../../../ssn/annotator/v1/annotator_pb.js')

var ssn_type_text_annotation_pb = require('../../../ssn/type/text_annotation_pb.js')
const proto = {};
proto.ssn = {};
proto.ssn.ocrservice = {};
proto.ssn.ocrservice.v1 = require('./ocrservice_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ssn.ocrservice.v1.OcrServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

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
proto.ssn.ocrservice.v1.OcrServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

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
 *   !proto.ssn.ocrservice.v1.OcrScanImageRequest,
 *   !proto.ssn.ocrservice.v1.OcrScanImageResponse>}
 */
const methodDescriptor_OcrService_OcrScanImage = new grpc.web.MethodDescriptor(
  '/ssn.ocrservice.v1.OcrService/OcrScanImage',
  grpc.web.MethodType.UNARY,
  proto.ssn.ocrservice.v1.OcrScanImageRequest,
  proto.ssn.ocrservice.v1.OcrScanImageResponse,
  /**
   * @param {!proto.ssn.ocrservice.v1.OcrScanImageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ssn.ocrservice.v1.OcrScanImageResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ssn.ocrservice.v1.OcrScanImageRequest,
 *   !proto.ssn.ocrservice.v1.OcrScanImageResponse>}
 */
const methodInfo_OcrService_OcrScanImage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ssn.ocrservice.v1.OcrScanImageResponse,
  /**
   * @param {!proto.ssn.ocrservice.v1.OcrScanImageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ssn.ocrservice.v1.OcrScanImageResponse.deserializeBinary
);


/**
 * @param {!proto.ssn.ocrservice.v1.OcrScanImageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ssn.ocrservice.v1.OcrScanImageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ssn.ocrservice.v1.OcrScanImageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ssn.ocrservice.v1.OcrServiceClient.prototype.ocrScanImage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ssn.ocrservice.v1.OcrService/OcrScanImage',
      request,
      metadata || {},
      methodDescriptor_OcrService_OcrScanImage,
      callback);
};


/**
 * @param {!proto.ssn.ocrservice.v1.OcrScanImageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ssn.ocrservice.v1.OcrScanImageResponse>}
 *     A native promise that resolves to the response
 */
proto.ssn.ocrservice.v1.OcrServicePromiseClient.prototype.ocrScanImage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ssn.ocrservice.v1.OcrService/OcrScanImage',
      request,
      metadata || {},
      methodDescriptor_OcrService_OcrScanImage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ssn.ocrservice.v1.GetTextAnnotationRequest,
 *   !proto.ssn.ocrservice.v1.GetTextAnnotationResponse>}
 */
const methodDescriptor_OcrService_GetTextAnnotation = new grpc.web.MethodDescriptor(
  '/ssn.ocrservice.v1.OcrService/GetTextAnnotation',
  grpc.web.MethodType.UNARY,
  proto.ssn.ocrservice.v1.GetTextAnnotationRequest,
  proto.ssn.ocrservice.v1.GetTextAnnotationResponse,
  /**
   * @param {!proto.ssn.ocrservice.v1.GetTextAnnotationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ssn.ocrservice.v1.GetTextAnnotationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ssn.ocrservice.v1.GetTextAnnotationRequest,
 *   !proto.ssn.ocrservice.v1.GetTextAnnotationResponse>}
 */
const methodInfo_OcrService_GetTextAnnotation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ssn.ocrservice.v1.GetTextAnnotationResponse,
  /**
   * @param {!proto.ssn.ocrservice.v1.GetTextAnnotationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ssn.ocrservice.v1.GetTextAnnotationResponse.deserializeBinary
);


/**
 * @param {!proto.ssn.ocrservice.v1.GetTextAnnotationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ssn.ocrservice.v1.GetTextAnnotationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ssn.ocrservice.v1.GetTextAnnotationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ssn.ocrservice.v1.OcrServiceClient.prototype.getTextAnnotation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ssn.ocrservice.v1.OcrService/GetTextAnnotation',
      request,
      metadata || {},
      methodDescriptor_OcrService_GetTextAnnotation,
      callback);
};


/**
 * @param {!proto.ssn.ocrservice.v1.GetTextAnnotationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ssn.ocrservice.v1.GetTextAnnotationResponse>}
 *     A native promise that resolves to the response
 */
proto.ssn.ocrservice.v1.OcrServicePromiseClient.prototype.getTextAnnotation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ssn.ocrservice.v1.OcrService/GetTextAnnotation',
      request,
      metadata || {},
      methodDescriptor_OcrService_GetTextAnnotation);
};


module.exports = proto.ssn.ocrservice.v1;

