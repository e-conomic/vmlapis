/**
 * @fileoverview gRPC-Web generated client stub for ssn.access.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')
const proto = {};
proto.ssn = {};
proto.ssn.access = {};
proto.ssn.access.v1 = require('./access_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ssn.access.v1.AccessClient =
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
proto.ssn.access.v1.AccessPromiseClient =
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
 *   !proto.ssn.access.v1.ValetKeyRequest,
 *   !proto.ssn.access.v1.ValetKeyResponse>}
 */
const methodDescriptor_Access_GenerateValetKey = new grpc.web.MethodDescriptor(
  '/ssn.access.v1.Access/GenerateValetKey',
  grpc.web.MethodType.UNARY,
  proto.ssn.access.v1.ValetKeyRequest,
  proto.ssn.access.v1.ValetKeyResponse,
  /**
   * @param {!proto.ssn.access.v1.ValetKeyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ssn.access.v1.ValetKeyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ssn.access.v1.ValetKeyRequest,
 *   !proto.ssn.access.v1.ValetKeyResponse>}
 */
const methodInfo_Access_GenerateValetKey = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ssn.access.v1.ValetKeyResponse,
  /**
   * @param {!proto.ssn.access.v1.ValetKeyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ssn.access.v1.ValetKeyResponse.deserializeBinary
);


/**
 * @param {!proto.ssn.access.v1.ValetKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ssn.access.v1.ValetKeyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ssn.access.v1.ValetKeyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ssn.access.v1.AccessClient.prototype.generateValetKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ssn.access.v1.Access/GenerateValetKey',
      request,
      metadata || {},
      methodDescriptor_Access_GenerateValetKey,
      callback);
};


/**
 * @param {!proto.ssn.access.v1.ValetKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ssn.access.v1.ValetKeyResponse>}
 *     A native promise that resolves to the response
 */
proto.ssn.access.v1.AccessPromiseClient.prototype.generateValetKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ssn.access.v1.Access/GenerateValetKey',
      request,
      metadata || {},
      methodDescriptor_Access_GenerateValetKey);
};


module.exports = proto.ssn.access.v1;

