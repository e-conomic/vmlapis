/**
 * @fileoverview gRPC-Web generated client stub for asgt.trainingservice.v1alpha1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.asgt = {};
proto.asgt.trainingservice = {};
proto.asgt.trainingservice.v1alpha1 = require('./trainingservice_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.asgt.trainingservice.v1alpha1.TrainingServiceClient =
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
proto.asgt.trainingservice.v1alpha1.TrainingServicePromiseClient =
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
 *   !proto.asgt.trainingservice.v1alpha1.TrainModelRequest,
 *   !proto.asgt.trainingservice.v1alpha1.TrainModelResponse>}
 */
const methodDescriptor_TrainingService_TrainModel = new grpc.web.MethodDescriptor(
  '/asgt.trainingservice.v1alpha1.TrainingService/TrainModel',
  grpc.web.MethodType.UNARY,
  proto.asgt.trainingservice.v1alpha1.TrainModelRequest,
  proto.asgt.trainingservice.v1alpha1.TrainModelResponse,
  /**
   * @param {!proto.asgt.trainingservice.v1alpha1.TrainModelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.asgt.trainingservice.v1alpha1.TrainModelResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.asgt.trainingservice.v1alpha1.TrainModelRequest,
 *   !proto.asgt.trainingservice.v1alpha1.TrainModelResponse>}
 */
const methodInfo_TrainingService_TrainModel = new grpc.web.AbstractClientBase.MethodInfo(
  proto.asgt.trainingservice.v1alpha1.TrainModelResponse,
  /**
   * @param {!proto.asgt.trainingservice.v1alpha1.TrainModelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.asgt.trainingservice.v1alpha1.TrainModelResponse.deserializeBinary
);


/**
 * @param {!proto.asgt.trainingservice.v1alpha1.TrainModelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.asgt.trainingservice.v1alpha1.TrainModelResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.asgt.trainingservice.v1alpha1.TrainModelResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.trainingservice.v1alpha1.TrainingServiceClient.prototype.trainModel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.trainingservice.v1alpha1.TrainingService/TrainModel',
      request,
      metadata || {},
      methodDescriptor_TrainingService_TrainModel,
      callback);
};


/**
 * @param {!proto.asgt.trainingservice.v1alpha1.TrainModelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.asgt.trainingservice.v1alpha1.TrainModelResponse>}
 *     A native promise that resolves to the response
 */
proto.asgt.trainingservice.v1alpha1.TrainingServicePromiseClient.prototype.trainModel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.trainingservice.v1alpha1.TrainingService/TrainModel',
      request,
      metadata || {},
      methodDescriptor_TrainingService_TrainModel);
};


module.exports = proto.asgt.trainingservice.v1alpha1;

