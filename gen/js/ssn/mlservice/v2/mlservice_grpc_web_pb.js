/**
 * @fileoverview gRPC-Web generated client stub for ssn.mlservice.v2
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v0.0.0
// source: ssn/mlservice/v2/mlservice.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_type_date_pb = require('../../../google/type/date_pb.js')

var ssn_mlservice_v2_example_pb = require('../../../ssn/mlservice/v2/example_pb.js')

var ssn_type_candidate_pb = require('../../../ssn/type/candidate_pb.js')

var ssn_type_text_annotation_pb = require('../../../ssn/type/text_annotation_pb.js')
const proto = {};
proto.ssn = {};
proto.ssn.mlservice = {};
proto.ssn.mlservice.v2 = require('./mlservice_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ssn.mlservice.v2.MlServiceClient =
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
proto.ssn.mlservice.v2.MlServicePromiseClient =
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
 *   !proto.ssn.mlservice.v2.FeatureGenRequest,
 *   !proto.ssn.mlservice.v2.FeatureGenResponse>}
 */
const methodDescriptor_MlService_FeatureGen = new grpc.web.MethodDescriptor(
  '/ssn.mlservice.v2.MlService/FeatureGen',
  grpc.web.MethodType.UNARY,
  proto.ssn.mlservice.v2.FeatureGenRequest,
  proto.ssn.mlservice.v2.FeatureGenResponse,
  /**
   * @param {!proto.ssn.mlservice.v2.FeatureGenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ssn.mlservice.v2.FeatureGenResponse.deserializeBinary
);


/**
 * @param {!proto.ssn.mlservice.v2.FeatureGenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ssn.mlservice.v2.FeatureGenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ssn.mlservice.v2.FeatureGenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ssn.mlservice.v2.MlServiceClient.prototype.featureGen =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ssn.mlservice.v2.MlService/FeatureGen',
      request,
      metadata || {},
      methodDescriptor_MlService_FeatureGen,
      callback);
};


/**
 * @param {!proto.ssn.mlservice.v2.FeatureGenRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ssn.mlservice.v2.FeatureGenResponse>}
 *     Promise that resolves to the response
 */
proto.ssn.mlservice.v2.MlServicePromiseClient.prototype.featureGen =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ssn.mlservice.v2.MlService/FeatureGen',
      request,
      metadata || {},
      methodDescriptor_MlService_FeatureGen);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ssn.mlservice.v2.PredictRequest,
 *   !proto.ssn.mlservice.v2.PredictResponse>}
 */
const methodDescriptor_MlService_Predict = new grpc.web.MethodDescriptor(
  '/ssn.mlservice.v2.MlService/Predict',
  grpc.web.MethodType.UNARY,
  proto.ssn.mlservice.v2.PredictRequest,
  proto.ssn.mlservice.v2.PredictResponse,
  /**
   * @param {!proto.ssn.mlservice.v2.PredictRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ssn.mlservice.v2.PredictResponse.deserializeBinary
);


/**
 * @param {!proto.ssn.mlservice.v2.PredictRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ssn.mlservice.v2.PredictResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ssn.mlservice.v2.PredictResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ssn.mlservice.v2.MlServiceClient.prototype.predict =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ssn.mlservice.v2.MlService/Predict',
      request,
      metadata || {},
      methodDescriptor_MlService_Predict,
      callback);
};


/**
 * @param {!proto.ssn.mlservice.v2.PredictRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ssn.mlservice.v2.PredictResponse>}
 *     Promise that resolves to the response
 */
proto.ssn.mlservice.v2.MlServicePromiseClient.prototype.predict =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ssn.mlservice.v2.MlService/Predict',
      request,
      metadata || {},
      methodDescriptor_MlService_Predict);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ssn.mlservice.v2.FeatureGenPredictRequest,
 *   !proto.ssn.mlservice.v2.PredictResponse>}
 */
const methodDescriptor_MlService_FeatureGenPredict = new grpc.web.MethodDescriptor(
  '/ssn.mlservice.v2.MlService/FeatureGenPredict',
  grpc.web.MethodType.UNARY,
  proto.ssn.mlservice.v2.FeatureGenPredictRequest,
  proto.ssn.mlservice.v2.PredictResponse,
  /**
   * @param {!proto.ssn.mlservice.v2.FeatureGenPredictRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ssn.mlservice.v2.PredictResponse.deserializeBinary
);


/**
 * @param {!proto.ssn.mlservice.v2.FeatureGenPredictRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ssn.mlservice.v2.PredictResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ssn.mlservice.v2.PredictResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ssn.mlservice.v2.MlServiceClient.prototype.featureGenPredict =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ssn.mlservice.v2.MlService/FeatureGenPredict',
      request,
      metadata || {},
      methodDescriptor_MlService_FeatureGenPredict,
      callback);
};


/**
 * @param {!proto.ssn.mlservice.v2.FeatureGenPredictRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ssn.mlservice.v2.PredictResponse>}
 *     Promise that resolves to the response
 */
proto.ssn.mlservice.v2.MlServicePromiseClient.prototype.featureGenPredict =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ssn.mlservice.v2.MlService/FeatureGenPredict',
      request,
      metadata || {},
      methodDescriptor_MlService_FeatureGenPredict);
};


module.exports = proto.ssn.mlservice.v2;

