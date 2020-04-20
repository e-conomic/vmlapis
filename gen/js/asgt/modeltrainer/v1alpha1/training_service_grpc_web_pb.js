/**
 * @fileoverview gRPC-Web generated client stub for asgt.modeltrainer.v1alpha1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.asgt = {};
proto.asgt.modeltrainer = {};
proto.asgt.modeltrainer.v1alpha1 = require('./training_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.asgt.modeltrainer.v1alpha1.TrainingServiceClient =
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
proto.asgt.modeltrainer.v1alpha1.TrainingServicePromiseClient =
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
 *   !proto.asgt.modeltrainer.v1alpha1.TrainModelRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_TrainingService_TrainModel = new grpc.web.MethodDescriptor(
  '/asgt.modeltrainer.v1alpha1.TrainingService/TrainModel',
  grpc.web.MethodType.UNARY,
  proto.asgt.modeltrainer.v1alpha1.TrainModelRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.modeltrainer.v1alpha1.TrainModelRequest} request
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
 *   !proto.asgt.modeltrainer.v1alpha1.TrainModelRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_TrainingService_TrainModel = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.modeltrainer.v1alpha1.TrainModelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.asgt.modeltrainer.v1alpha1.TrainModelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.modeltrainer.v1alpha1.TrainingServiceClient.prototype.trainModel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.modeltrainer.v1alpha1.TrainingService/TrainModel',
      request,
      metadata || {},
      methodDescriptor_TrainingService_TrainModel,
      callback);
};


/**
 * @param {!proto.asgt.modeltrainer.v1alpha1.TrainModelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.asgt.modeltrainer.v1alpha1.TrainingServicePromiseClient.prototype.trainModel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.modeltrainer.v1alpha1.TrainingService/TrainModel',
      request,
      metadata || {},
      methodDescriptor_TrainingService_TrainModel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.modeltrainer.v1alpha1.RunSchedulerRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_TrainingService_RunScheduler = new grpc.web.MethodDescriptor(
  '/asgt.modeltrainer.v1alpha1.TrainingService/RunScheduler',
  grpc.web.MethodType.UNARY,
  proto.asgt.modeltrainer.v1alpha1.RunSchedulerRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.modeltrainer.v1alpha1.RunSchedulerRequest} request
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
 *   !proto.asgt.modeltrainer.v1alpha1.RunSchedulerRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_TrainingService_RunScheduler = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.modeltrainer.v1alpha1.RunSchedulerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.asgt.modeltrainer.v1alpha1.RunSchedulerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.modeltrainer.v1alpha1.TrainingServiceClient.prototype.runScheduler =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.modeltrainer.v1alpha1.TrainingService/RunScheduler',
      request,
      metadata || {},
      methodDescriptor_TrainingService_RunScheduler,
      callback);
};


/**
 * @param {!proto.asgt.modeltrainer.v1alpha1.RunSchedulerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.asgt.modeltrainer.v1alpha1.TrainingServicePromiseClient.prototype.runScheduler =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.modeltrainer.v1alpha1.TrainingService/RunScheduler',
      request,
      metadata || {},
      methodDescriptor_TrainingService_RunScheduler);
};


module.exports = proto.asgt.modeltrainer.v1alpha1;

