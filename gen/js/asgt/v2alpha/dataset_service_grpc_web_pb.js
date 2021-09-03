/**
 * @fileoverview gRPC-Web generated client stub for asgt.v2alpha
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var asgt_type_dataset_pb = require('../../asgt/type/dataset_pb.js')

var asgt_type_example_pb = require('../../asgt/type/example_pb.js')

var asgt_type_target_value_pb = require('../../asgt/type/target_value_pb.js')

var google_api_annotations_pb = require('../../google/api/annotations_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var options_annotations_pb = require('../../options/annotations_pb.js')

var validate_validate_pb = require('../../validate/validate_pb.js')
const proto = {};
proto.asgt = {};
proto.asgt.v2alpha = require('./dataset_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.asgt.v2alpha.DatasetServiceClient =
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
proto.asgt.v2alpha.DatasetServicePromiseClient =
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
 *   !proto.asgt.v2alpha.GetDatasetRequest,
 *   !proto.asgt.type.Dataset>}
 */
const methodDescriptor_DatasetService_GetDataset = new grpc.web.MethodDescriptor(
  '/asgt.v2alpha.DatasetService/GetDataset',
  grpc.web.MethodType.UNARY,
  proto.asgt.v2alpha.GetDatasetRequest,
  asgt_type_dataset_pb.Dataset,
  /**
   * @param {!proto.asgt.v2alpha.GetDatasetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  asgt_type_dataset_pb.Dataset.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.asgt.v2alpha.GetDatasetRequest,
 *   !proto.asgt.type.Dataset>}
 */
const methodInfo_DatasetService_GetDataset = new grpc.web.AbstractClientBase.MethodInfo(
  asgt_type_dataset_pb.Dataset,
  /**
   * @param {!proto.asgt.v2alpha.GetDatasetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  asgt_type_dataset_pb.Dataset.deserializeBinary
);


/**
 * @param {!proto.asgt.v2alpha.GetDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.asgt.type.Dataset)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.asgt.type.Dataset>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.v2alpha.DatasetServiceClient.prototype.getDataset =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.v2alpha.DatasetService/GetDataset',
      request,
      metadata || {},
      methodDescriptor_DatasetService_GetDataset,
      callback);
};


/**
 * @param {!proto.asgt.v2alpha.GetDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.asgt.type.Dataset>}
 *     A native promise that resolves to the response
 */
proto.asgt.v2alpha.DatasetServicePromiseClient.prototype.getDataset =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.v2alpha.DatasetService/GetDataset',
      request,
      metadata || {},
      methodDescriptor_DatasetService_GetDataset);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.v2alpha.CreateDatasetRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_DatasetService_CreateDataset = new grpc.web.MethodDescriptor(
  '/asgt.v2alpha.DatasetService/CreateDataset',
  grpc.web.MethodType.UNARY,
  proto.asgt.v2alpha.CreateDatasetRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.v2alpha.CreateDatasetRequest} request
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
 *   !proto.asgt.v2alpha.CreateDatasetRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DatasetService_CreateDataset = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.v2alpha.CreateDatasetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.asgt.v2alpha.CreateDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.v2alpha.DatasetServiceClient.prototype.createDataset =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.v2alpha.DatasetService/CreateDataset',
      request,
      metadata || {},
      methodDescriptor_DatasetService_CreateDataset,
      callback);
};


/**
 * @param {!proto.asgt.v2alpha.CreateDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.asgt.v2alpha.DatasetServicePromiseClient.prototype.createDataset =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.v2alpha.DatasetService/CreateDataset',
      request,
      metadata || {},
      methodDescriptor_DatasetService_CreateDataset);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.v2alpha.CreateDatasetRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_DatasetService_CreateOrUpdateDataset = new grpc.web.MethodDescriptor(
  '/asgt.v2alpha.DatasetService/CreateOrUpdateDataset',
  grpc.web.MethodType.UNARY,
  proto.asgt.v2alpha.CreateDatasetRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.v2alpha.CreateDatasetRequest} request
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
 *   !proto.asgt.v2alpha.CreateDatasetRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DatasetService_CreateOrUpdateDataset = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.v2alpha.CreateDatasetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.asgt.v2alpha.CreateDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.v2alpha.DatasetServiceClient.prototype.createOrUpdateDataset =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.v2alpha.DatasetService/CreateOrUpdateDataset',
      request,
      metadata || {},
      methodDescriptor_DatasetService_CreateOrUpdateDataset,
      callback);
};


/**
 * @param {!proto.asgt.v2alpha.CreateDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.asgt.v2alpha.DatasetServicePromiseClient.prototype.createOrUpdateDataset =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.v2alpha.DatasetService/CreateOrUpdateDataset',
      request,
      metadata || {},
      methodDescriptor_DatasetService_CreateOrUpdateDataset);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.v2alpha.DeleteDatasetRequest,
 *   !proto.asgt.type.Dataset>}
 */
const methodDescriptor_DatasetService_DeleteDataset = new grpc.web.MethodDescriptor(
  '/asgt.v2alpha.DatasetService/DeleteDataset',
  grpc.web.MethodType.UNARY,
  proto.asgt.v2alpha.DeleteDatasetRequest,
  asgt_type_dataset_pb.Dataset,
  /**
   * @param {!proto.asgt.v2alpha.DeleteDatasetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  asgt_type_dataset_pb.Dataset.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.asgt.v2alpha.DeleteDatasetRequest,
 *   !proto.asgt.type.Dataset>}
 */
const methodInfo_DatasetService_DeleteDataset = new grpc.web.AbstractClientBase.MethodInfo(
  asgt_type_dataset_pb.Dataset,
  /**
   * @param {!proto.asgt.v2alpha.DeleteDatasetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  asgt_type_dataset_pb.Dataset.deserializeBinary
);


/**
 * @param {!proto.asgt.v2alpha.DeleteDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.asgt.type.Dataset)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.asgt.type.Dataset>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.v2alpha.DatasetServiceClient.prototype.deleteDataset =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.v2alpha.DatasetService/DeleteDataset',
      request,
      metadata || {},
      methodDescriptor_DatasetService_DeleteDataset,
      callback);
};


/**
 * @param {!proto.asgt.v2alpha.DeleteDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.asgt.type.Dataset>}
 *     A native promise that resolves to the response
 */
proto.asgt.v2alpha.DatasetServicePromiseClient.prototype.deleteDataset =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.v2alpha.DatasetService/DeleteDataset',
      request,
      metadata || {},
      methodDescriptor_DatasetService_DeleteDataset);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.v2alpha.DeleteTagRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_DatasetService_DeleteTag = new grpc.web.MethodDescriptor(
  '/asgt.v2alpha.DatasetService/DeleteTag',
  grpc.web.MethodType.UNARY,
  proto.asgt.v2alpha.DeleteTagRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.v2alpha.DeleteTagRequest} request
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
 *   !proto.asgt.v2alpha.DeleteTagRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DatasetService_DeleteTag = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.v2alpha.DeleteTagRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.asgt.v2alpha.DeleteTagRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.v2alpha.DatasetServiceClient.prototype.deleteTag =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.v2alpha.DatasetService/DeleteTag',
      request,
      metadata || {},
      methodDescriptor_DatasetService_DeleteTag,
      callback);
};


/**
 * @param {!proto.asgt.v2alpha.DeleteTagRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.asgt.v2alpha.DatasetServicePromiseClient.prototype.deleteTag =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.v2alpha.DatasetService/DeleteTag',
      request,
      metadata || {},
      methodDescriptor_DatasetService_DeleteTag);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.v2alpha.CreateExampleRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_DatasetService_CreateExample = new grpc.web.MethodDescriptor(
  '/asgt.v2alpha.DatasetService/CreateExample',
  grpc.web.MethodType.UNARY,
  proto.asgt.v2alpha.CreateExampleRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.v2alpha.CreateExampleRequest} request
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
 *   !proto.asgt.v2alpha.CreateExampleRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DatasetService_CreateExample = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.v2alpha.CreateExampleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.asgt.v2alpha.CreateExampleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.v2alpha.DatasetServiceClient.prototype.createExample =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.v2alpha.DatasetService/CreateExample',
      request,
      metadata || {},
      methodDescriptor_DatasetService_CreateExample,
      callback);
};


/**
 * @param {!proto.asgt.v2alpha.CreateExampleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.asgt.v2alpha.DatasetServicePromiseClient.prototype.createExample =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.v2alpha.DatasetService/CreateExample',
      request,
      metadata || {},
      methodDescriptor_DatasetService_CreateExample);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.v2alpha.CreateOrUpdateExampleRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_DatasetService_CreateOrUpdateExample = new grpc.web.MethodDescriptor(
  '/asgt.v2alpha.DatasetService/CreateOrUpdateExample',
  grpc.web.MethodType.UNARY,
  proto.asgt.v2alpha.CreateOrUpdateExampleRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.v2alpha.CreateOrUpdateExampleRequest} request
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
 *   !proto.asgt.v2alpha.CreateOrUpdateExampleRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DatasetService_CreateOrUpdateExample = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.v2alpha.CreateOrUpdateExampleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.asgt.v2alpha.CreateOrUpdateExampleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.v2alpha.DatasetServiceClient.prototype.createOrUpdateExample =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.v2alpha.DatasetService/CreateOrUpdateExample',
      request,
      metadata || {},
      methodDescriptor_DatasetService_CreateOrUpdateExample,
      callback);
};


/**
 * @param {!proto.asgt.v2alpha.CreateOrUpdateExampleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.asgt.v2alpha.DatasetServicePromiseClient.prototype.createOrUpdateExample =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.v2alpha.DatasetService/CreateOrUpdateExample',
      request,
      metadata || {},
      methodDescriptor_DatasetService_CreateOrUpdateExample);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.v2alpha.BatchCreateExampleRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_DatasetService_BatchCreateExample = new grpc.web.MethodDescriptor(
  '/asgt.v2alpha.DatasetService/BatchCreateExample',
  grpc.web.MethodType.UNARY,
  proto.asgt.v2alpha.BatchCreateExampleRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.v2alpha.BatchCreateExampleRequest} request
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
 *   !proto.asgt.v2alpha.BatchCreateExampleRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DatasetService_BatchCreateExample = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.v2alpha.BatchCreateExampleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.asgt.v2alpha.BatchCreateExampleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.v2alpha.DatasetServiceClient.prototype.batchCreateExample =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.v2alpha.DatasetService/BatchCreateExample',
      request,
      metadata || {},
      methodDescriptor_DatasetService_BatchCreateExample,
      callback);
};


/**
 * @param {!proto.asgt.v2alpha.BatchCreateExampleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.asgt.v2alpha.DatasetServicePromiseClient.prototype.batchCreateExample =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.v2alpha.DatasetService/BatchCreateExample',
      request,
      metadata || {},
      methodDescriptor_DatasetService_BatchCreateExample);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.asgt.v2alpha.TruncateDatasetRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_DatasetService_TruncateDataset = new grpc.web.MethodDescriptor(
  '/asgt.v2alpha.DatasetService/TruncateDataset',
  grpc.web.MethodType.UNARY,
  proto.asgt.v2alpha.TruncateDatasetRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.v2alpha.TruncateDatasetRequest} request
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
 *   !proto.asgt.v2alpha.TruncateDatasetRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DatasetService_TruncateDataset = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.asgt.v2alpha.TruncateDatasetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.asgt.v2alpha.TruncateDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.asgt.v2alpha.DatasetServiceClient.prototype.truncateDataset =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/asgt.v2alpha.DatasetService/TruncateDataset',
      request,
      metadata || {},
      methodDescriptor_DatasetService_TruncateDataset,
      callback);
};


/**
 * @param {!proto.asgt.v2alpha.TruncateDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.asgt.v2alpha.DatasetServicePromiseClient.prototype.truncateDataset =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/asgt.v2alpha.DatasetService/TruncateDataset',
      request,
      metadata || {},
      methodDescriptor_DatasetService_TruncateDataset);
};


module.exports = proto.asgt.v2alpha;

