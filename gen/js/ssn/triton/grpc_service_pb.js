// source: ssn/triton/grpc_service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

var ssn_triton_model_config_pb = require('../../ssn/triton/model_config_pb.js');
goog.object.extend(proto, ssn_triton_model_config_pb);
goog.exportSymbol('proto.inference.CudaSharedMemoryRegisterRequest', null, global);
goog.exportSymbol('proto.inference.CudaSharedMemoryRegisterResponse', null, global);
goog.exportSymbol('proto.inference.CudaSharedMemoryStatusRequest', null, global);
goog.exportSymbol('proto.inference.CudaSharedMemoryStatusResponse', null, global);
goog.exportSymbol('proto.inference.CudaSharedMemoryStatusResponse.RegionStatus', null, global);
goog.exportSymbol('proto.inference.CudaSharedMemoryUnregisterRequest', null, global);
goog.exportSymbol('proto.inference.CudaSharedMemoryUnregisterResponse', null, global);
goog.exportSymbol('proto.inference.InferBatchStatistics', null, global);
goog.exportSymbol('proto.inference.InferParameter', null, global);
goog.exportSymbol('proto.inference.InferParameter.ParameterChoiceCase', null, global);
goog.exportSymbol('proto.inference.InferStatistics', null, global);
goog.exportSymbol('proto.inference.InferTensorContents', null, global);
goog.exportSymbol('proto.inference.LogSettingsRequest', null, global);
goog.exportSymbol('proto.inference.LogSettingsRequest.SettingValue', null, global);
goog.exportSymbol('proto.inference.LogSettingsRequest.SettingValue.ParameterChoiceCase', null, global);
goog.exportSymbol('proto.inference.LogSettingsResponse', null, global);
goog.exportSymbol('proto.inference.LogSettingsResponse.SettingValue', null, global);
goog.exportSymbol('proto.inference.LogSettingsResponse.SettingValue.ParameterChoiceCase', null, global);
goog.exportSymbol('proto.inference.ModelConfigRequest', null, global);
goog.exportSymbol('proto.inference.ModelConfigResponse', null, global);
goog.exportSymbol('proto.inference.ModelInferRequest', null, global);
goog.exportSymbol('proto.inference.ModelInferRequest.InferInputTensor', null, global);
goog.exportSymbol('proto.inference.ModelInferRequest.InferRequestedOutputTensor', null, global);
goog.exportSymbol('proto.inference.ModelInferResponse', null, global);
goog.exportSymbol('proto.inference.ModelInferResponse.InferOutputTensor', null, global);
goog.exportSymbol('proto.inference.ModelMetadataRequest', null, global);
goog.exportSymbol('proto.inference.ModelMetadataResponse', null, global);
goog.exportSymbol('proto.inference.ModelMetadataResponse.TensorMetadata', null, global);
goog.exportSymbol('proto.inference.ModelReadyRequest', null, global);
goog.exportSymbol('proto.inference.ModelReadyResponse', null, global);
goog.exportSymbol('proto.inference.ModelRepositoryParameter', null, global);
goog.exportSymbol('proto.inference.ModelRepositoryParameter.ParameterChoiceCase', null, global);
goog.exportSymbol('proto.inference.ModelStatistics', null, global);
goog.exportSymbol('proto.inference.ModelStatisticsRequest', null, global);
goog.exportSymbol('proto.inference.ModelStatisticsResponse', null, global);
goog.exportSymbol('proto.inference.ModelStreamInferResponse', null, global);
goog.exportSymbol('proto.inference.RepositoryIndexRequest', null, global);
goog.exportSymbol('proto.inference.RepositoryIndexResponse', null, global);
goog.exportSymbol('proto.inference.RepositoryIndexResponse.ModelIndex', null, global);
goog.exportSymbol('proto.inference.RepositoryModelLoadRequest', null, global);
goog.exportSymbol('proto.inference.RepositoryModelLoadResponse', null, global);
goog.exportSymbol('proto.inference.RepositoryModelUnloadRequest', null, global);
goog.exportSymbol('proto.inference.RepositoryModelUnloadResponse', null, global);
goog.exportSymbol('proto.inference.ServerLiveRequest', null, global);
goog.exportSymbol('proto.inference.ServerLiveResponse', null, global);
goog.exportSymbol('proto.inference.ServerMetadataRequest', null, global);
goog.exportSymbol('proto.inference.ServerMetadataResponse', null, global);
goog.exportSymbol('proto.inference.ServerReadyRequest', null, global);
goog.exportSymbol('proto.inference.ServerReadyResponse', null, global);
goog.exportSymbol('proto.inference.StatisticDuration', null, global);
goog.exportSymbol('proto.inference.SystemSharedMemoryRegisterRequest', null, global);
goog.exportSymbol('proto.inference.SystemSharedMemoryRegisterResponse', null, global);
goog.exportSymbol('proto.inference.SystemSharedMemoryStatusRequest', null, global);
goog.exportSymbol('proto.inference.SystemSharedMemoryStatusResponse', null, global);
goog.exportSymbol('proto.inference.SystemSharedMemoryStatusResponse.RegionStatus', null, global);
goog.exportSymbol('proto.inference.SystemSharedMemoryUnregisterRequest', null, global);
goog.exportSymbol('proto.inference.SystemSharedMemoryUnregisterResponse', null, global);
goog.exportSymbol('proto.inference.TraceSettingRequest', null, global);
goog.exportSymbol('proto.inference.TraceSettingRequest.SettingValue', null, global);
goog.exportSymbol('proto.inference.TraceSettingResponse', null, global);
goog.exportSymbol('proto.inference.TraceSettingResponse.SettingValue', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.ServerLiveRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.ServerLiveRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ServerLiveRequest.displayName = 'proto.inference.ServerLiveRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.ServerLiveResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.ServerLiveResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ServerLiveResponse.displayName = 'proto.inference.ServerLiveResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.ServerReadyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.ServerReadyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ServerReadyRequest.displayName = 'proto.inference.ServerReadyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.ServerReadyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.ServerReadyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ServerReadyResponse.displayName = 'proto.inference.ServerReadyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.ModelReadyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.ModelReadyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelReadyRequest.displayName = 'proto.inference.ModelReadyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.ModelReadyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.ModelReadyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelReadyResponse.displayName = 'proto.inference.ModelReadyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.ServerMetadataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.ServerMetadataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ServerMetadataRequest.displayName = 'proto.inference.ServerMetadataRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.ServerMetadataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.inference.ServerMetadataResponse.repeatedFields_, null);
};
goog.inherits(proto.inference.ServerMetadataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ServerMetadataResponse.displayName = 'proto.inference.ServerMetadataResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.ModelMetadataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.ModelMetadataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelMetadataRequest.displayName = 'proto.inference.ModelMetadataRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.ModelMetadataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.inference.ModelMetadataResponse.repeatedFields_, null);
};
goog.inherits(proto.inference.ModelMetadataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelMetadataResponse.displayName = 'proto.inference.ModelMetadataResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.ModelMetadataResponse.TensorMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.inference.ModelMetadataResponse.TensorMetadata.repeatedFields_, null);
};
goog.inherits(proto.inference.ModelMetadataResponse.TensorMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelMetadataResponse.TensorMetadata.displayName = 'proto.inference.ModelMetadataResponse.TensorMetadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.InferParameter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.inference.InferParameter.oneofGroups_);
};
goog.inherits(proto.inference.InferParameter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.InferParameter.displayName = 'proto.inference.InferParameter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.InferTensorContents = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.inference.InferTensorContents.repeatedFields_, null);
};
goog.inherits(proto.inference.InferTensorContents, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.InferTensorContents.displayName = 'proto.inference.InferTensorContents';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.ModelInferRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.inference.ModelInferRequest.repeatedFields_, null);
};
goog.inherits(proto.inference.ModelInferRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelInferRequest.displayName = 'proto.inference.ModelInferRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.ModelInferRequest.InferInputTensor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.inference.ModelInferRequest.InferInputTensor.repeatedFields_, null);
};
goog.inherits(proto.inference.ModelInferRequest.InferInputTensor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelInferRequest.InferInputTensor.displayName = 'proto.inference.ModelInferRequest.InferInputTensor';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.ModelInferRequest.InferRequestedOutputTensor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.ModelInferRequest.InferRequestedOutputTensor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelInferRequest.InferRequestedOutputTensor.displayName = 'proto.inference.ModelInferRequest.InferRequestedOutputTensor';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.ModelInferResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.inference.ModelInferResponse.repeatedFields_, null);
};
goog.inherits(proto.inference.ModelInferResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelInferResponse.displayName = 'proto.inference.ModelInferResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.ModelInferResponse.InferOutputTensor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.inference.ModelInferResponse.InferOutputTensor.repeatedFields_, null);
};
goog.inherits(proto.inference.ModelInferResponse.InferOutputTensor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelInferResponse.InferOutputTensor.displayName = 'proto.inference.ModelInferResponse.InferOutputTensor';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.ModelStreamInferResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.ModelStreamInferResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelStreamInferResponse.displayName = 'proto.inference.ModelStreamInferResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.ModelConfigRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.ModelConfigRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelConfigRequest.displayName = 'proto.inference.ModelConfigRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.ModelConfigResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.ModelConfigResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelConfigResponse.displayName = 'proto.inference.ModelConfigResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.ModelStatisticsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.ModelStatisticsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelStatisticsRequest.displayName = 'proto.inference.ModelStatisticsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.StatisticDuration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.StatisticDuration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.StatisticDuration.displayName = 'proto.inference.StatisticDuration';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.InferStatistics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.InferStatistics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.InferStatistics.displayName = 'proto.inference.InferStatistics';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.InferBatchStatistics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.InferBatchStatistics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.InferBatchStatistics.displayName = 'proto.inference.InferBatchStatistics';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.ModelStatistics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.inference.ModelStatistics.repeatedFields_, null);
};
goog.inherits(proto.inference.ModelStatistics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelStatistics.displayName = 'proto.inference.ModelStatistics';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.ModelStatisticsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.inference.ModelStatisticsResponse.repeatedFields_, null);
};
goog.inherits(proto.inference.ModelStatisticsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelStatisticsResponse.displayName = 'proto.inference.ModelStatisticsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.ModelRepositoryParameter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.inference.ModelRepositoryParameter.oneofGroups_);
};
goog.inherits(proto.inference.ModelRepositoryParameter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelRepositoryParameter.displayName = 'proto.inference.ModelRepositoryParameter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.RepositoryIndexRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.RepositoryIndexRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.RepositoryIndexRequest.displayName = 'proto.inference.RepositoryIndexRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.RepositoryIndexResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.inference.RepositoryIndexResponse.repeatedFields_, null);
};
goog.inherits(proto.inference.RepositoryIndexResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.RepositoryIndexResponse.displayName = 'proto.inference.RepositoryIndexResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.RepositoryIndexResponse.ModelIndex = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.RepositoryIndexResponse.ModelIndex, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.RepositoryIndexResponse.ModelIndex.displayName = 'proto.inference.RepositoryIndexResponse.ModelIndex';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.RepositoryModelLoadRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.RepositoryModelLoadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.RepositoryModelLoadRequest.displayName = 'proto.inference.RepositoryModelLoadRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.RepositoryModelLoadResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.RepositoryModelLoadResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.RepositoryModelLoadResponse.displayName = 'proto.inference.RepositoryModelLoadResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.RepositoryModelUnloadRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.RepositoryModelUnloadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.RepositoryModelUnloadRequest.displayName = 'proto.inference.RepositoryModelUnloadRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.RepositoryModelUnloadResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.RepositoryModelUnloadResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.RepositoryModelUnloadResponse.displayName = 'proto.inference.RepositoryModelUnloadResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.SystemSharedMemoryStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.SystemSharedMemoryStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.SystemSharedMemoryStatusRequest.displayName = 'proto.inference.SystemSharedMemoryStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.SystemSharedMemoryStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.SystemSharedMemoryStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.SystemSharedMemoryStatusResponse.displayName = 'proto.inference.SystemSharedMemoryStatusResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.SystemSharedMemoryStatusResponse.RegionStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.SystemSharedMemoryStatusResponse.RegionStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.SystemSharedMemoryStatusResponse.RegionStatus.displayName = 'proto.inference.SystemSharedMemoryStatusResponse.RegionStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.SystemSharedMemoryRegisterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.SystemSharedMemoryRegisterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.SystemSharedMemoryRegisterRequest.displayName = 'proto.inference.SystemSharedMemoryRegisterRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.SystemSharedMemoryRegisterResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.SystemSharedMemoryRegisterResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.SystemSharedMemoryRegisterResponse.displayName = 'proto.inference.SystemSharedMemoryRegisterResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.SystemSharedMemoryUnregisterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.SystemSharedMemoryUnregisterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.SystemSharedMemoryUnregisterRequest.displayName = 'proto.inference.SystemSharedMemoryUnregisterRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.SystemSharedMemoryUnregisterResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.SystemSharedMemoryUnregisterResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.SystemSharedMemoryUnregisterResponse.displayName = 'proto.inference.SystemSharedMemoryUnregisterResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.CudaSharedMemoryStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.CudaSharedMemoryStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.CudaSharedMemoryStatusRequest.displayName = 'proto.inference.CudaSharedMemoryStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.CudaSharedMemoryStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.CudaSharedMemoryStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.CudaSharedMemoryStatusResponse.displayName = 'proto.inference.CudaSharedMemoryStatusResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.CudaSharedMemoryStatusResponse.RegionStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.CudaSharedMemoryStatusResponse.RegionStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.CudaSharedMemoryStatusResponse.RegionStatus.displayName = 'proto.inference.CudaSharedMemoryStatusResponse.RegionStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.CudaSharedMemoryRegisterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.CudaSharedMemoryRegisterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.CudaSharedMemoryRegisterRequest.displayName = 'proto.inference.CudaSharedMemoryRegisterRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.CudaSharedMemoryRegisterResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.CudaSharedMemoryRegisterResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.CudaSharedMemoryRegisterResponse.displayName = 'proto.inference.CudaSharedMemoryRegisterResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.CudaSharedMemoryUnregisterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.CudaSharedMemoryUnregisterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.CudaSharedMemoryUnregisterRequest.displayName = 'proto.inference.CudaSharedMemoryUnregisterRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.CudaSharedMemoryUnregisterResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.CudaSharedMemoryUnregisterResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.CudaSharedMemoryUnregisterResponse.displayName = 'proto.inference.CudaSharedMemoryUnregisterResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.TraceSettingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.TraceSettingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.TraceSettingRequest.displayName = 'proto.inference.TraceSettingRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.TraceSettingRequest.SettingValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.inference.TraceSettingRequest.SettingValue.repeatedFields_, null);
};
goog.inherits(proto.inference.TraceSettingRequest.SettingValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.TraceSettingRequest.SettingValue.displayName = 'proto.inference.TraceSettingRequest.SettingValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.TraceSettingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.TraceSettingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.TraceSettingResponse.displayName = 'proto.inference.TraceSettingResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.TraceSettingResponse.SettingValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.inference.TraceSettingResponse.SettingValue.repeatedFields_, null);
};
goog.inherits(proto.inference.TraceSettingResponse.SettingValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.TraceSettingResponse.SettingValue.displayName = 'proto.inference.TraceSettingResponse.SettingValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.LogSettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.LogSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.LogSettingsRequest.displayName = 'proto.inference.LogSettingsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.LogSettingsRequest.SettingValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.inference.LogSettingsRequest.SettingValue.oneofGroups_);
};
goog.inherits(proto.inference.LogSettingsRequest.SettingValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.LogSettingsRequest.SettingValue.displayName = 'proto.inference.LogSettingsRequest.SettingValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.LogSettingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.LogSettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.LogSettingsResponse.displayName = 'proto.inference.LogSettingsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.inference.LogSettingsResponse.SettingValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.inference.LogSettingsResponse.SettingValue.oneofGroups_);
};
goog.inherits(proto.inference.LogSettingsResponse.SettingValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.LogSettingsResponse.SettingValue.displayName = 'proto.inference.LogSettingsResponse.SettingValue';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.ServerLiveRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ServerLiveRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ServerLiveRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ServerLiveRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.ServerLiveRequest}
 */
proto.inference.ServerLiveRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ServerLiveRequest;
  return proto.inference.ServerLiveRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ServerLiveRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ServerLiveRequest}
 */
proto.inference.ServerLiveRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.ServerLiveRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ServerLiveRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ServerLiveRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ServerLiveRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.ServerLiveResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ServerLiveResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ServerLiveResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ServerLiveResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    live: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.ServerLiveResponse}
 */
proto.inference.ServerLiveResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ServerLiveResponse;
  return proto.inference.ServerLiveResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ServerLiveResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ServerLiveResponse}
 */
proto.inference.ServerLiveResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLive(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.ServerLiveResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ServerLiveResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ServerLiveResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ServerLiveResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLive();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool live = 1;
 * @return {boolean}
 */
proto.inference.ServerLiveResponse.prototype.getLive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.inference.ServerLiveResponse} returns this
 */
proto.inference.ServerLiveResponse.prototype.setLive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.ServerReadyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ServerReadyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ServerReadyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ServerReadyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.ServerReadyRequest}
 */
proto.inference.ServerReadyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ServerReadyRequest;
  return proto.inference.ServerReadyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ServerReadyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ServerReadyRequest}
 */
proto.inference.ServerReadyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.ServerReadyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ServerReadyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ServerReadyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ServerReadyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.ServerReadyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ServerReadyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ServerReadyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ServerReadyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ready: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.ServerReadyResponse}
 */
proto.inference.ServerReadyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ServerReadyResponse;
  return proto.inference.ServerReadyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ServerReadyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ServerReadyResponse}
 */
proto.inference.ServerReadyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReady(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.ServerReadyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ServerReadyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ServerReadyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ServerReadyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReady();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool ready = 1;
 * @return {boolean}
 */
proto.inference.ServerReadyResponse.prototype.getReady = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.inference.ServerReadyResponse} returns this
 */
proto.inference.ServerReadyResponse.prototype.setReady = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.ModelReadyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelReadyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelReadyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelReadyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.ModelReadyRequest}
 */
proto.inference.ModelReadyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelReadyRequest;
  return proto.inference.ModelReadyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelReadyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelReadyRequest}
 */
proto.inference.ModelReadyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.ModelReadyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelReadyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelReadyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelReadyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.inference.ModelReadyRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelReadyRequest} returns this
 */
proto.inference.ModelReadyRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.inference.ModelReadyRequest.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelReadyRequest} returns this
 */
proto.inference.ModelReadyRequest.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.ModelReadyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelReadyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelReadyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelReadyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ready: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.ModelReadyResponse}
 */
proto.inference.ModelReadyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelReadyResponse;
  return proto.inference.ModelReadyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelReadyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelReadyResponse}
 */
proto.inference.ModelReadyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReady(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.ModelReadyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelReadyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelReadyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelReadyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReady();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool ready = 1;
 * @return {boolean}
 */
proto.inference.ModelReadyResponse.prototype.getReady = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.inference.ModelReadyResponse} returns this
 */
proto.inference.ModelReadyResponse.prototype.setReady = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.ServerMetadataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ServerMetadataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ServerMetadataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ServerMetadataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.ServerMetadataRequest}
 */
proto.inference.ServerMetadataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ServerMetadataRequest;
  return proto.inference.ServerMetadataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ServerMetadataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ServerMetadataRequest}
 */
proto.inference.ServerMetadataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.ServerMetadataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ServerMetadataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ServerMetadataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ServerMetadataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.inference.ServerMetadataResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.ServerMetadataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ServerMetadataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ServerMetadataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ServerMetadataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, ""),
    extensionsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.ServerMetadataResponse}
 */
proto.inference.ServerMetadataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ServerMetadataResponse;
  return proto.inference.ServerMetadataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ServerMetadataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ServerMetadataResponse}
 */
proto.inference.ServerMetadataResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addExtensions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.ServerMetadataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ServerMetadataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ServerMetadataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ServerMetadataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getExtensionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.inference.ServerMetadataResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ServerMetadataResponse} returns this
 */
proto.inference.ServerMetadataResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.inference.ServerMetadataResponse.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ServerMetadataResponse} returns this
 */
proto.inference.ServerMetadataResponse.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string extensions = 3;
 * @return {!Array<string>}
 */
proto.inference.ServerMetadataResponse.prototype.getExtensionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.inference.ServerMetadataResponse} returns this
 */
proto.inference.ServerMetadataResponse.prototype.setExtensionsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.inference.ServerMetadataResponse} returns this
 */
proto.inference.ServerMetadataResponse.prototype.addExtensions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ServerMetadataResponse} returns this
 */
proto.inference.ServerMetadataResponse.prototype.clearExtensionsList = function() {
  return this.setExtensionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.ModelMetadataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelMetadataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelMetadataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelMetadataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.ModelMetadataRequest}
 */
proto.inference.ModelMetadataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelMetadataRequest;
  return proto.inference.ModelMetadataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelMetadataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelMetadataRequest}
 */
proto.inference.ModelMetadataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.ModelMetadataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelMetadataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelMetadataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelMetadataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.inference.ModelMetadataRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelMetadataRequest} returns this
 */
proto.inference.ModelMetadataRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.inference.ModelMetadataRequest.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelMetadataRequest} returns this
 */
proto.inference.ModelMetadataRequest.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.inference.ModelMetadataResponse.repeatedFields_ = [2,4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.ModelMetadataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelMetadataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelMetadataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelMetadataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    versionsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    platform: jspb.Message.getFieldWithDefault(msg, 3, ""),
    inputsList: jspb.Message.toObjectList(msg.getInputsList(),
    proto.inference.ModelMetadataResponse.TensorMetadata.toObject, includeInstance),
    outputsList: jspb.Message.toObjectList(msg.getOutputsList(),
    proto.inference.ModelMetadataResponse.TensorMetadata.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.ModelMetadataResponse}
 */
proto.inference.ModelMetadataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelMetadataResponse;
  return proto.inference.ModelMetadataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelMetadataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelMetadataResponse}
 */
proto.inference.ModelMetadataResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addVersions(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatform(value);
      break;
    case 4:
      var value = new proto.inference.ModelMetadataResponse.TensorMetadata;
      reader.readMessage(value,proto.inference.ModelMetadataResponse.TensorMetadata.deserializeBinaryFromReader);
      msg.addInputs(value);
      break;
    case 5:
      var value = new proto.inference.ModelMetadataResponse.TensorMetadata;
      reader.readMessage(value,proto.inference.ModelMetadataResponse.TensorMetadata.deserializeBinaryFromReader);
      msg.addOutputs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.ModelMetadataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelMetadataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelMetadataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelMetadataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getPlatform();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.inference.ModelMetadataResponse.TensorMetadata.serializeBinaryToWriter
    );
  }
  f = message.getOutputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.inference.ModelMetadataResponse.TensorMetadata.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.inference.ModelMetadataResponse.TensorMetadata.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.ModelMetadataResponse.TensorMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelMetadataResponse.TensorMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelMetadataResponse.TensorMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelMetadataResponse.TensorMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    datatype: jspb.Message.getFieldWithDefault(msg, 2, ""),
    shapeList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.ModelMetadataResponse.TensorMetadata}
 */
proto.inference.ModelMetadataResponse.TensorMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelMetadataResponse.TensorMetadata;
  return proto.inference.ModelMetadataResponse.TensorMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelMetadataResponse.TensorMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelMetadataResponse.TensorMetadata}
 */
proto.inference.ModelMetadataResponse.TensorMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatatype(value);
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addShape(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.ModelMetadataResponse.TensorMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelMetadataResponse.TensorMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelMetadataResponse.TensorMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelMetadataResponse.TensorMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDatatype();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getShapeList();
  if (f.length > 0) {
    writer.writePackedInt64(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.inference.ModelMetadataResponse.TensorMetadata.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelMetadataResponse.TensorMetadata} returns this
 */
proto.inference.ModelMetadataResponse.TensorMetadata.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string datatype = 2;
 * @return {string}
 */
proto.inference.ModelMetadataResponse.TensorMetadata.prototype.getDatatype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelMetadataResponse.TensorMetadata} returns this
 */
proto.inference.ModelMetadataResponse.TensorMetadata.prototype.setDatatype = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated int64 shape = 3;
 * @return {!Array<number>}
 */
proto.inference.ModelMetadataResponse.TensorMetadata.prototype.getShapeList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.inference.ModelMetadataResponse.TensorMetadata} returns this
 */
proto.inference.ModelMetadataResponse.TensorMetadata.prototype.setShapeList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelMetadataResponse.TensorMetadata} returns this
 */
proto.inference.ModelMetadataResponse.TensorMetadata.prototype.addShape = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelMetadataResponse.TensorMetadata} returns this
 */
proto.inference.ModelMetadataResponse.TensorMetadata.prototype.clearShapeList = function() {
  return this.setShapeList([]);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.inference.ModelMetadataResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelMetadataResponse} returns this
 */
proto.inference.ModelMetadataResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string versions = 2;
 * @return {!Array<string>}
 */
proto.inference.ModelMetadataResponse.prototype.getVersionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.inference.ModelMetadataResponse} returns this
 */
proto.inference.ModelMetadataResponse.prototype.setVersionsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelMetadataResponse} returns this
 */
proto.inference.ModelMetadataResponse.prototype.addVersions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelMetadataResponse} returns this
 */
proto.inference.ModelMetadataResponse.prototype.clearVersionsList = function() {
  return this.setVersionsList([]);
};


/**
 * optional string platform = 3;
 * @return {string}
 */
proto.inference.ModelMetadataResponse.prototype.getPlatform = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelMetadataResponse} returns this
 */
proto.inference.ModelMetadataResponse.prototype.setPlatform = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated TensorMetadata inputs = 4;
 * @return {!Array<!proto.inference.ModelMetadataResponse.TensorMetadata>}
 */
proto.inference.ModelMetadataResponse.prototype.getInputsList = function() {
  return /** @type{!Array<!proto.inference.ModelMetadataResponse.TensorMetadata>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.inference.ModelMetadataResponse.TensorMetadata, 4));
};


/**
 * @param {!Array<!proto.inference.ModelMetadataResponse.TensorMetadata>} value
 * @return {!proto.inference.ModelMetadataResponse} returns this
*/
proto.inference.ModelMetadataResponse.prototype.setInputsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.inference.ModelMetadataResponse.TensorMetadata=} opt_value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelMetadataResponse.TensorMetadata}
 */
proto.inference.ModelMetadataResponse.prototype.addInputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.inference.ModelMetadataResponse.TensorMetadata, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelMetadataResponse} returns this
 */
proto.inference.ModelMetadataResponse.prototype.clearInputsList = function() {
  return this.setInputsList([]);
};


/**
 * repeated TensorMetadata outputs = 5;
 * @return {!Array<!proto.inference.ModelMetadataResponse.TensorMetadata>}
 */
proto.inference.ModelMetadataResponse.prototype.getOutputsList = function() {
  return /** @type{!Array<!proto.inference.ModelMetadataResponse.TensorMetadata>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.inference.ModelMetadataResponse.TensorMetadata, 5));
};


/**
 * @param {!Array<!proto.inference.ModelMetadataResponse.TensorMetadata>} value
 * @return {!proto.inference.ModelMetadataResponse} returns this
*/
proto.inference.ModelMetadataResponse.prototype.setOutputsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.inference.ModelMetadataResponse.TensorMetadata=} opt_value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelMetadataResponse.TensorMetadata}
 */
proto.inference.ModelMetadataResponse.prototype.addOutputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.inference.ModelMetadataResponse.TensorMetadata, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelMetadataResponse} returns this
 */
proto.inference.ModelMetadataResponse.prototype.clearOutputsList = function() {
  return this.setOutputsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.inference.InferParameter.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.inference.InferParameter.ParameterChoiceCase = {
  PARAMETER_CHOICE_NOT_SET: 0,
  BOOL_PARAM: 1,
  INT64_PARAM: 2,
  STRING_PARAM: 3
};

/**
 * @return {proto.inference.InferParameter.ParameterChoiceCase}
 */
proto.inference.InferParameter.prototype.getParameterChoiceCase = function() {
  return /** @type {proto.inference.InferParameter.ParameterChoiceCase} */(jspb.Message.computeOneofCase(this, proto.inference.InferParameter.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.InferParameter.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.InferParameter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.InferParameter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.InferParameter.toObject = function(includeInstance, msg) {
  var f, obj = {
    boolParam: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    int64Param: jspb.Message.getFieldWithDefault(msg, 2, 0),
    stringParam: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.InferParameter}
 */
proto.inference.InferParameter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.InferParameter;
  return proto.inference.InferParameter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.InferParameter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.InferParameter}
 */
proto.inference.InferParameter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBoolParam(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInt64Param(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringParam(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.InferParameter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.InferParameter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.InferParameter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.InferParameter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional bool bool_param = 1;
 * @return {boolean}
 */
proto.inference.InferParameter.prototype.getBoolParam = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.inference.InferParameter} returns this
 */
proto.inference.InferParameter.prototype.setBoolParam = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.inference.InferParameter.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.inference.InferParameter} returns this
 */
proto.inference.InferParameter.prototype.clearBoolParam = function() {
  return jspb.Message.setOneofField(this, 1, proto.inference.InferParameter.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.InferParameter.prototype.hasBoolParam = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 int64_param = 2;
 * @return {number}
 */
proto.inference.InferParameter.prototype.getInt64Param = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.InferParameter} returns this
 */
proto.inference.InferParameter.prototype.setInt64Param = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.inference.InferParameter.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.inference.InferParameter} returns this
 */
proto.inference.InferParameter.prototype.clearInt64Param = function() {
  return jspb.Message.setOneofField(this, 2, proto.inference.InferParameter.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.InferParameter.prototype.hasInt64Param = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string string_param = 3;
 * @return {string}
 */
proto.inference.InferParameter.prototype.getStringParam = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.InferParameter} returns this
 */
proto.inference.InferParameter.prototype.setStringParam = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.inference.InferParameter.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.inference.InferParameter} returns this
 */
proto.inference.InferParameter.prototype.clearStringParam = function() {
  return jspb.Message.setOneofField(this, 3, proto.inference.InferParameter.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.InferParameter.prototype.hasStringParam = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.inference.InferTensorContents.repeatedFields_ = [1,2,3,4,5,6,7,8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.InferTensorContents.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.InferTensorContents.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.InferTensorContents} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.InferTensorContents.toObject = function(includeInstance, msg) {
  var f, obj = {
    boolContentsList: (f = jspb.Message.getRepeatedBooleanField(msg, 1)) == null ? undefined : f,
    intContentsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    int64ContentsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    uintContentsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    uint64ContentsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    fp32ContentsList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 6)) == null ? undefined : f,
    fp64ContentsList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 7)) == null ? undefined : f,
    bytesContentsList: msg.getBytesContentsList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.InferTensorContents}
 */
proto.inference.InferTensorContents.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.InferTensorContents;
  return proto.inference.InferTensorContents.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.InferTensorContents} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.InferTensorContents}
 */
proto.inference.InferTensorContents.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<boolean>} */ (reader.isDelimited() ? reader.readPackedBool() : [reader.readBool()]);
      for (var i = 0; i < values.length; i++) {
        msg.addBoolContents(values[i]);
      }
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addIntContents(values[i]);
      }
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addInt64Contents(values[i]);
      }
      break;
    case 4:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint32() : [reader.readUint32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addUintContents(values[i]);
      }
      break;
    case 5:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint64() : [reader.readUint64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addUint64Contents(values[i]);
      }
      break;
    case 6:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addFp32Contents(values[i]);
      }
      break;
    case 7:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addFp64Contents(values[i]);
      }
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addBytesContents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.InferTensorContents.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.InferTensorContents.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.InferTensorContents} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.InferTensorContents.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBoolContentsList();
  if (f.length > 0) {
    writer.writePackedBool(
      1,
      f
    );
  }
  f = message.getIntContentsList();
  if (f.length > 0) {
    writer.writePackedInt32(
      2,
      f
    );
  }
  f = message.getInt64ContentsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      3,
      f
    );
  }
  f = message.getUintContentsList();
  if (f.length > 0) {
    writer.writePackedUint32(
      4,
      f
    );
  }
  f = message.getUint64ContentsList();
  if (f.length > 0) {
    writer.writePackedUint64(
      5,
      f
    );
  }
  f = message.getFp32ContentsList();
  if (f.length > 0) {
    writer.writePackedFloat(
      6,
      f
    );
  }
  f = message.getFp64ContentsList();
  if (f.length > 0) {
    writer.writePackedDouble(
      7,
      f
    );
  }
  f = message.getBytesContentsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      8,
      f
    );
  }
};


/**
 * repeated bool bool_contents = 1;
 * @return {!Array<boolean>}
 */
proto.inference.InferTensorContents.prototype.getBoolContentsList = function() {
  return /** @type {!Array<boolean>} */ (jspb.Message.getRepeatedBooleanField(this, 1));
};


/**
 * @param {!Array<boolean>} value
 * @return {!proto.inference.InferTensorContents} returns this
 */
proto.inference.InferTensorContents.prototype.setBoolContentsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {boolean} value
 * @param {number=} opt_index
 * @return {!proto.inference.InferTensorContents} returns this
 */
proto.inference.InferTensorContents.prototype.addBoolContents = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.InferTensorContents} returns this
 */
proto.inference.InferTensorContents.prototype.clearBoolContentsList = function() {
  return this.setBoolContentsList([]);
};


/**
 * repeated int32 int_contents = 2;
 * @return {!Array<number>}
 */
proto.inference.InferTensorContents.prototype.getIntContentsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.inference.InferTensorContents} returns this
 */
proto.inference.InferTensorContents.prototype.setIntContentsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.inference.InferTensorContents} returns this
 */
proto.inference.InferTensorContents.prototype.addIntContents = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.InferTensorContents} returns this
 */
proto.inference.InferTensorContents.prototype.clearIntContentsList = function() {
  return this.setIntContentsList([]);
};


/**
 * repeated int64 int64_contents = 3;
 * @return {!Array<number>}
 */
proto.inference.InferTensorContents.prototype.getInt64ContentsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.inference.InferTensorContents} returns this
 */
proto.inference.InferTensorContents.prototype.setInt64ContentsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.inference.InferTensorContents} returns this
 */
proto.inference.InferTensorContents.prototype.addInt64Contents = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.InferTensorContents} returns this
 */
proto.inference.InferTensorContents.prototype.clearInt64ContentsList = function() {
  return this.setInt64ContentsList([]);
};


/**
 * repeated uint32 uint_contents = 4;
 * @return {!Array<number>}
 */
proto.inference.InferTensorContents.prototype.getUintContentsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.inference.InferTensorContents} returns this
 */
proto.inference.InferTensorContents.prototype.setUintContentsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.inference.InferTensorContents} returns this
 */
proto.inference.InferTensorContents.prototype.addUintContents = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.InferTensorContents} returns this
 */
proto.inference.InferTensorContents.prototype.clearUintContentsList = function() {
  return this.setUintContentsList([]);
};


/**
 * repeated uint64 uint64_contents = 5;
 * @return {!Array<number>}
 */
proto.inference.InferTensorContents.prototype.getUint64ContentsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.inference.InferTensorContents} returns this
 */
proto.inference.InferTensorContents.prototype.setUint64ContentsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.inference.InferTensorContents} returns this
 */
proto.inference.InferTensorContents.prototype.addUint64Contents = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.InferTensorContents} returns this
 */
proto.inference.InferTensorContents.prototype.clearUint64ContentsList = function() {
  return this.setUint64ContentsList([]);
};


/**
 * repeated float fp32_contents = 6;
 * @return {!Array<number>}
 */
proto.inference.InferTensorContents.prototype.getFp32ContentsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 6));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.inference.InferTensorContents} returns this
 */
proto.inference.InferTensorContents.prototype.setFp32ContentsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.inference.InferTensorContents} returns this
 */
proto.inference.InferTensorContents.prototype.addFp32Contents = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.InferTensorContents} returns this
 */
proto.inference.InferTensorContents.prototype.clearFp32ContentsList = function() {
  return this.setFp32ContentsList([]);
};


/**
 * repeated double fp64_contents = 7;
 * @return {!Array<number>}
 */
proto.inference.InferTensorContents.prototype.getFp64ContentsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 7));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.inference.InferTensorContents} returns this
 */
proto.inference.InferTensorContents.prototype.setFp64ContentsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.inference.InferTensorContents} returns this
 */
proto.inference.InferTensorContents.prototype.addFp64Contents = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.InferTensorContents} returns this
 */
proto.inference.InferTensorContents.prototype.clearFp64ContentsList = function() {
  return this.setFp64ContentsList([]);
};


/**
 * repeated bytes bytes_contents = 8;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.inference.InferTensorContents.prototype.getBytesContentsList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * repeated bytes bytes_contents = 8;
 * This is a type-conversion wrapper around `getBytesContentsList()`
 * @return {!Array<string>}
 */
proto.inference.InferTensorContents.prototype.getBytesContentsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getBytesContentsList()));
};


/**
 * repeated bytes bytes_contents = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBytesContentsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.inference.InferTensorContents.prototype.getBytesContentsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getBytesContentsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.inference.InferTensorContents} returns this
 */
proto.inference.InferTensorContents.prototype.setBytesContentsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.inference.InferTensorContents} returns this
 */
proto.inference.InferTensorContents.prototype.addBytesContents = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.InferTensorContents} returns this
 */
proto.inference.InferTensorContents.prototype.clearBytesContentsList = function() {
  return this.setBytesContentsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.inference.ModelInferRequest.repeatedFields_ = [5,6,7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.ModelInferRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelInferRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelInferRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelInferRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    modelVersion: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, ""),
    parametersMap: (f = msg.getParametersMap()) ? f.toObject(includeInstance, proto.inference.InferParameter.toObject) : [],
    inputsList: jspb.Message.toObjectList(msg.getInputsList(),
    proto.inference.ModelInferRequest.InferInputTensor.toObject, includeInstance),
    outputsList: jspb.Message.toObjectList(msg.getOutputsList(),
    proto.inference.ModelInferRequest.InferRequestedOutputTensor.toObject, includeInstance),
    rawInputContentsList: msg.getRawInputContentsList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.ModelInferRequest}
 */
proto.inference.ModelInferRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelInferRequest;
  return proto.inference.ModelInferRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelInferRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelInferRequest}
 */
proto.inference.ModelInferRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelVersion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = msg.getParametersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.inference.InferParameter.deserializeBinaryFromReader, "", new proto.inference.InferParameter());
         });
      break;
    case 5:
      var value = new proto.inference.ModelInferRequest.InferInputTensor;
      reader.readMessage(value,proto.inference.ModelInferRequest.InferInputTensor.deserializeBinaryFromReader);
      msg.addInputs(value);
      break;
    case 6:
      var value = new proto.inference.ModelInferRequest.InferRequestedOutputTensor;
      reader.readMessage(value,proto.inference.ModelInferRequest.InferRequestedOutputTensor.deserializeBinaryFromReader);
      msg.addOutputs(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addRawInputContents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.ModelInferRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelInferRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelInferRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelInferRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModelName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModelVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getParametersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.inference.InferParameter.serializeBinaryToWriter);
  }
  f = message.getInputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.inference.ModelInferRequest.InferInputTensor.serializeBinaryToWriter
    );
  }
  f = message.getOutputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.inference.ModelInferRequest.InferRequestedOutputTensor.serializeBinaryToWriter
    );
  }
  f = message.getRawInputContentsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      7,
      f
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.inference.ModelInferRequest.InferInputTensor.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.ModelInferRequest.InferInputTensor.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelInferRequest.InferInputTensor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelInferRequest.InferInputTensor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelInferRequest.InferInputTensor.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    datatype: jspb.Message.getFieldWithDefault(msg, 2, ""),
    shapeList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    parametersMap: (f = msg.getParametersMap()) ? f.toObject(includeInstance, proto.inference.InferParameter.toObject) : [],
    contents: (f = msg.getContents()) && proto.inference.InferTensorContents.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.ModelInferRequest.InferInputTensor}
 */
proto.inference.ModelInferRequest.InferInputTensor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelInferRequest.InferInputTensor;
  return proto.inference.ModelInferRequest.InferInputTensor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelInferRequest.InferInputTensor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelInferRequest.InferInputTensor}
 */
proto.inference.ModelInferRequest.InferInputTensor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatatype(value);
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addShape(values[i]);
      }
      break;
    case 4:
      var value = msg.getParametersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.inference.InferParameter.deserializeBinaryFromReader, "", new proto.inference.InferParameter());
         });
      break;
    case 5:
      var value = new proto.inference.InferTensorContents;
      reader.readMessage(value,proto.inference.InferTensorContents.deserializeBinaryFromReader);
      msg.setContents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.ModelInferRequest.InferInputTensor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelInferRequest.InferInputTensor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelInferRequest.InferInputTensor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelInferRequest.InferInputTensor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDatatype();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getShapeList();
  if (f.length > 0) {
    writer.writePackedInt64(
      3,
      f
    );
  }
  f = message.getParametersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.inference.InferParameter.serializeBinaryToWriter);
  }
  f = message.getContents();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.inference.InferTensorContents.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.inference.ModelInferRequest.InferInputTensor.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelInferRequest.InferInputTensor} returns this
 */
proto.inference.ModelInferRequest.InferInputTensor.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string datatype = 2;
 * @return {string}
 */
proto.inference.ModelInferRequest.InferInputTensor.prototype.getDatatype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelInferRequest.InferInputTensor} returns this
 */
proto.inference.ModelInferRequest.InferInputTensor.prototype.setDatatype = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated int64 shape = 3;
 * @return {!Array<number>}
 */
proto.inference.ModelInferRequest.InferInputTensor.prototype.getShapeList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.inference.ModelInferRequest.InferInputTensor} returns this
 */
proto.inference.ModelInferRequest.InferInputTensor.prototype.setShapeList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelInferRequest.InferInputTensor} returns this
 */
proto.inference.ModelInferRequest.InferInputTensor.prototype.addShape = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelInferRequest.InferInputTensor} returns this
 */
proto.inference.ModelInferRequest.InferInputTensor.prototype.clearShapeList = function() {
  return this.setShapeList([]);
};


/**
 * map<string, InferParameter> parameters = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.inference.InferParameter>}
 */
proto.inference.ModelInferRequest.InferInputTensor.prototype.getParametersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.inference.InferParameter>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.inference.InferParameter));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.inference.ModelInferRequest.InferInputTensor} returns this
 */
proto.inference.ModelInferRequest.InferInputTensor.prototype.clearParametersMap = function() {
  this.getParametersMap().clear();
  return this;};


/**
 * optional InferTensorContents contents = 5;
 * @return {?proto.inference.InferTensorContents}
 */
proto.inference.ModelInferRequest.InferInputTensor.prototype.getContents = function() {
  return /** @type{?proto.inference.InferTensorContents} */ (
    jspb.Message.getWrapperField(this, proto.inference.InferTensorContents, 5));
};


/**
 * @param {?proto.inference.InferTensorContents|undefined} value
 * @return {!proto.inference.ModelInferRequest.InferInputTensor} returns this
*/
proto.inference.ModelInferRequest.InferInputTensor.prototype.setContents = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.ModelInferRequest.InferInputTensor} returns this
 */
proto.inference.ModelInferRequest.InferInputTensor.prototype.clearContents = function() {
  return this.setContents(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelInferRequest.InferInputTensor.prototype.hasContents = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.ModelInferRequest.InferRequestedOutputTensor.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelInferRequest.InferRequestedOutputTensor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelInferRequest.InferRequestedOutputTensor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelInferRequest.InferRequestedOutputTensor.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    parametersMap: (f = msg.getParametersMap()) ? f.toObject(includeInstance, proto.inference.InferParameter.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.ModelInferRequest.InferRequestedOutputTensor}
 */
proto.inference.ModelInferRequest.InferRequestedOutputTensor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelInferRequest.InferRequestedOutputTensor;
  return proto.inference.ModelInferRequest.InferRequestedOutputTensor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelInferRequest.InferRequestedOutputTensor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelInferRequest.InferRequestedOutputTensor}
 */
proto.inference.ModelInferRequest.InferRequestedOutputTensor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = msg.getParametersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.inference.InferParameter.deserializeBinaryFromReader, "", new proto.inference.InferParameter());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.ModelInferRequest.InferRequestedOutputTensor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelInferRequest.InferRequestedOutputTensor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelInferRequest.InferRequestedOutputTensor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelInferRequest.InferRequestedOutputTensor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParametersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.inference.InferParameter.serializeBinaryToWriter);
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.inference.ModelInferRequest.InferRequestedOutputTensor.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelInferRequest.InferRequestedOutputTensor} returns this
 */
proto.inference.ModelInferRequest.InferRequestedOutputTensor.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, InferParameter> parameters = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.inference.InferParameter>}
 */
proto.inference.ModelInferRequest.InferRequestedOutputTensor.prototype.getParametersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.inference.InferParameter>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.inference.InferParameter));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.inference.ModelInferRequest.InferRequestedOutputTensor} returns this
 */
proto.inference.ModelInferRequest.InferRequestedOutputTensor.prototype.clearParametersMap = function() {
  this.getParametersMap().clear();
  return this;};


/**
 * optional string model_name = 1;
 * @return {string}
 */
proto.inference.ModelInferRequest.prototype.getModelName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelInferRequest} returns this
 */
proto.inference.ModelInferRequest.prototype.setModelName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string model_version = 2;
 * @return {string}
 */
proto.inference.ModelInferRequest.prototype.getModelVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelInferRequest} returns this
 */
proto.inference.ModelInferRequest.prototype.setModelVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.inference.ModelInferRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelInferRequest} returns this
 */
proto.inference.ModelInferRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, InferParameter> parameters = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.inference.InferParameter>}
 */
proto.inference.ModelInferRequest.prototype.getParametersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.inference.InferParameter>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.inference.InferParameter));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.inference.ModelInferRequest} returns this
 */
proto.inference.ModelInferRequest.prototype.clearParametersMap = function() {
  this.getParametersMap().clear();
  return this;};


/**
 * repeated InferInputTensor inputs = 5;
 * @return {!Array<!proto.inference.ModelInferRequest.InferInputTensor>}
 */
proto.inference.ModelInferRequest.prototype.getInputsList = function() {
  return /** @type{!Array<!proto.inference.ModelInferRequest.InferInputTensor>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.inference.ModelInferRequest.InferInputTensor, 5));
};


/**
 * @param {!Array<!proto.inference.ModelInferRequest.InferInputTensor>} value
 * @return {!proto.inference.ModelInferRequest} returns this
*/
proto.inference.ModelInferRequest.prototype.setInputsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.inference.ModelInferRequest.InferInputTensor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelInferRequest.InferInputTensor}
 */
proto.inference.ModelInferRequest.prototype.addInputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.inference.ModelInferRequest.InferInputTensor, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelInferRequest} returns this
 */
proto.inference.ModelInferRequest.prototype.clearInputsList = function() {
  return this.setInputsList([]);
};


/**
 * repeated InferRequestedOutputTensor outputs = 6;
 * @return {!Array<!proto.inference.ModelInferRequest.InferRequestedOutputTensor>}
 */
proto.inference.ModelInferRequest.prototype.getOutputsList = function() {
  return /** @type{!Array<!proto.inference.ModelInferRequest.InferRequestedOutputTensor>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.inference.ModelInferRequest.InferRequestedOutputTensor, 6));
};


/**
 * @param {!Array<!proto.inference.ModelInferRequest.InferRequestedOutputTensor>} value
 * @return {!proto.inference.ModelInferRequest} returns this
*/
proto.inference.ModelInferRequest.prototype.setOutputsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.inference.ModelInferRequest.InferRequestedOutputTensor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelInferRequest.InferRequestedOutputTensor}
 */
proto.inference.ModelInferRequest.prototype.addOutputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.inference.ModelInferRequest.InferRequestedOutputTensor, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelInferRequest} returns this
 */
proto.inference.ModelInferRequest.prototype.clearOutputsList = function() {
  return this.setOutputsList([]);
};


/**
 * repeated bytes raw_input_contents = 7;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.inference.ModelInferRequest.prototype.getRawInputContentsList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * repeated bytes raw_input_contents = 7;
 * This is a type-conversion wrapper around `getRawInputContentsList()`
 * @return {!Array<string>}
 */
proto.inference.ModelInferRequest.prototype.getRawInputContentsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getRawInputContentsList()));
};


/**
 * repeated bytes raw_input_contents = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRawInputContentsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.inference.ModelInferRequest.prototype.getRawInputContentsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getRawInputContentsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.inference.ModelInferRequest} returns this
 */
proto.inference.ModelInferRequest.prototype.setRawInputContentsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelInferRequest} returns this
 */
proto.inference.ModelInferRequest.prototype.addRawInputContents = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelInferRequest} returns this
 */
proto.inference.ModelInferRequest.prototype.clearRawInputContentsList = function() {
  return this.setRawInputContentsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.inference.ModelInferResponse.repeatedFields_ = [5,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.ModelInferResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelInferResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelInferResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelInferResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    modelVersion: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, ""),
    parametersMap: (f = msg.getParametersMap()) ? f.toObject(includeInstance, proto.inference.InferParameter.toObject) : [],
    outputsList: jspb.Message.toObjectList(msg.getOutputsList(),
    proto.inference.ModelInferResponse.InferOutputTensor.toObject, includeInstance),
    rawOutputContentsList: msg.getRawOutputContentsList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.ModelInferResponse}
 */
proto.inference.ModelInferResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelInferResponse;
  return proto.inference.ModelInferResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelInferResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelInferResponse}
 */
proto.inference.ModelInferResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelVersion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = msg.getParametersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.inference.InferParameter.deserializeBinaryFromReader, "", new proto.inference.InferParameter());
         });
      break;
    case 5:
      var value = new proto.inference.ModelInferResponse.InferOutputTensor;
      reader.readMessage(value,proto.inference.ModelInferResponse.InferOutputTensor.deserializeBinaryFromReader);
      msg.addOutputs(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addRawOutputContents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.ModelInferResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelInferResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelInferResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelInferResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModelName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModelVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getParametersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.inference.InferParameter.serializeBinaryToWriter);
  }
  f = message.getOutputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.inference.ModelInferResponse.InferOutputTensor.serializeBinaryToWriter
    );
  }
  f = message.getRawOutputContentsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      6,
      f
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.inference.ModelInferResponse.InferOutputTensor.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.ModelInferResponse.InferOutputTensor.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelInferResponse.InferOutputTensor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelInferResponse.InferOutputTensor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelInferResponse.InferOutputTensor.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    datatype: jspb.Message.getFieldWithDefault(msg, 2, ""),
    shapeList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    parametersMap: (f = msg.getParametersMap()) ? f.toObject(includeInstance, proto.inference.InferParameter.toObject) : [],
    contents: (f = msg.getContents()) && proto.inference.InferTensorContents.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.ModelInferResponse.InferOutputTensor}
 */
proto.inference.ModelInferResponse.InferOutputTensor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelInferResponse.InferOutputTensor;
  return proto.inference.ModelInferResponse.InferOutputTensor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelInferResponse.InferOutputTensor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelInferResponse.InferOutputTensor}
 */
proto.inference.ModelInferResponse.InferOutputTensor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatatype(value);
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addShape(values[i]);
      }
      break;
    case 4:
      var value = msg.getParametersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.inference.InferParameter.deserializeBinaryFromReader, "", new proto.inference.InferParameter());
         });
      break;
    case 5:
      var value = new proto.inference.InferTensorContents;
      reader.readMessage(value,proto.inference.InferTensorContents.deserializeBinaryFromReader);
      msg.setContents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.ModelInferResponse.InferOutputTensor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelInferResponse.InferOutputTensor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelInferResponse.InferOutputTensor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelInferResponse.InferOutputTensor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDatatype();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getShapeList();
  if (f.length > 0) {
    writer.writePackedInt64(
      3,
      f
    );
  }
  f = message.getParametersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.inference.InferParameter.serializeBinaryToWriter);
  }
  f = message.getContents();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.inference.InferTensorContents.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.inference.ModelInferResponse.InferOutputTensor.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelInferResponse.InferOutputTensor} returns this
 */
proto.inference.ModelInferResponse.InferOutputTensor.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string datatype = 2;
 * @return {string}
 */
proto.inference.ModelInferResponse.InferOutputTensor.prototype.getDatatype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelInferResponse.InferOutputTensor} returns this
 */
proto.inference.ModelInferResponse.InferOutputTensor.prototype.setDatatype = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated int64 shape = 3;
 * @return {!Array<number>}
 */
proto.inference.ModelInferResponse.InferOutputTensor.prototype.getShapeList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.inference.ModelInferResponse.InferOutputTensor} returns this
 */
proto.inference.ModelInferResponse.InferOutputTensor.prototype.setShapeList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelInferResponse.InferOutputTensor} returns this
 */
proto.inference.ModelInferResponse.InferOutputTensor.prototype.addShape = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelInferResponse.InferOutputTensor} returns this
 */
proto.inference.ModelInferResponse.InferOutputTensor.prototype.clearShapeList = function() {
  return this.setShapeList([]);
};


/**
 * map<string, InferParameter> parameters = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.inference.InferParameter>}
 */
proto.inference.ModelInferResponse.InferOutputTensor.prototype.getParametersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.inference.InferParameter>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.inference.InferParameter));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.inference.ModelInferResponse.InferOutputTensor} returns this
 */
proto.inference.ModelInferResponse.InferOutputTensor.prototype.clearParametersMap = function() {
  this.getParametersMap().clear();
  return this;};


/**
 * optional InferTensorContents contents = 5;
 * @return {?proto.inference.InferTensorContents}
 */
proto.inference.ModelInferResponse.InferOutputTensor.prototype.getContents = function() {
  return /** @type{?proto.inference.InferTensorContents} */ (
    jspb.Message.getWrapperField(this, proto.inference.InferTensorContents, 5));
};


/**
 * @param {?proto.inference.InferTensorContents|undefined} value
 * @return {!proto.inference.ModelInferResponse.InferOutputTensor} returns this
*/
proto.inference.ModelInferResponse.InferOutputTensor.prototype.setContents = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.ModelInferResponse.InferOutputTensor} returns this
 */
proto.inference.ModelInferResponse.InferOutputTensor.prototype.clearContents = function() {
  return this.setContents(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelInferResponse.InferOutputTensor.prototype.hasContents = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string model_name = 1;
 * @return {string}
 */
proto.inference.ModelInferResponse.prototype.getModelName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelInferResponse} returns this
 */
proto.inference.ModelInferResponse.prototype.setModelName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string model_version = 2;
 * @return {string}
 */
proto.inference.ModelInferResponse.prototype.getModelVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelInferResponse} returns this
 */
proto.inference.ModelInferResponse.prototype.setModelVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.inference.ModelInferResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelInferResponse} returns this
 */
proto.inference.ModelInferResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, InferParameter> parameters = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.inference.InferParameter>}
 */
proto.inference.ModelInferResponse.prototype.getParametersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.inference.InferParameter>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.inference.InferParameter));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.inference.ModelInferResponse} returns this
 */
proto.inference.ModelInferResponse.prototype.clearParametersMap = function() {
  this.getParametersMap().clear();
  return this;};


/**
 * repeated InferOutputTensor outputs = 5;
 * @return {!Array<!proto.inference.ModelInferResponse.InferOutputTensor>}
 */
proto.inference.ModelInferResponse.prototype.getOutputsList = function() {
  return /** @type{!Array<!proto.inference.ModelInferResponse.InferOutputTensor>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.inference.ModelInferResponse.InferOutputTensor, 5));
};


/**
 * @param {!Array<!proto.inference.ModelInferResponse.InferOutputTensor>} value
 * @return {!proto.inference.ModelInferResponse} returns this
*/
proto.inference.ModelInferResponse.prototype.setOutputsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.inference.ModelInferResponse.InferOutputTensor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelInferResponse.InferOutputTensor}
 */
proto.inference.ModelInferResponse.prototype.addOutputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.inference.ModelInferResponse.InferOutputTensor, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelInferResponse} returns this
 */
proto.inference.ModelInferResponse.prototype.clearOutputsList = function() {
  return this.setOutputsList([]);
};


/**
 * repeated bytes raw_output_contents = 6;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.inference.ModelInferResponse.prototype.getRawOutputContentsList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * repeated bytes raw_output_contents = 6;
 * This is a type-conversion wrapper around `getRawOutputContentsList()`
 * @return {!Array<string>}
 */
proto.inference.ModelInferResponse.prototype.getRawOutputContentsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getRawOutputContentsList()));
};


/**
 * repeated bytes raw_output_contents = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRawOutputContentsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.inference.ModelInferResponse.prototype.getRawOutputContentsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getRawOutputContentsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.inference.ModelInferResponse} returns this
 */
proto.inference.ModelInferResponse.prototype.setRawOutputContentsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelInferResponse} returns this
 */
proto.inference.ModelInferResponse.prototype.addRawOutputContents = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelInferResponse} returns this
 */
proto.inference.ModelInferResponse.prototype.clearRawOutputContentsList = function() {
  return this.setRawOutputContentsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.ModelStreamInferResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelStreamInferResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelStreamInferResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelStreamInferResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    errorMessage: jspb.Message.getFieldWithDefault(msg, 1, ""),
    inferResponse: (f = msg.getInferResponse()) && proto.inference.ModelInferResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.ModelStreamInferResponse}
 */
proto.inference.ModelStreamInferResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelStreamInferResponse;
  return proto.inference.ModelStreamInferResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelStreamInferResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelStreamInferResponse}
 */
proto.inference.ModelStreamInferResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorMessage(value);
      break;
    case 2:
      var value = new proto.inference.ModelInferResponse;
      reader.readMessage(value,proto.inference.ModelInferResponse.deserializeBinaryFromReader);
      msg.setInferResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.ModelStreamInferResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelStreamInferResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelStreamInferResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelStreamInferResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrorMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInferResponse();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.inference.ModelInferResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional string error_message = 1;
 * @return {string}
 */
proto.inference.ModelStreamInferResponse.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelStreamInferResponse} returns this
 */
proto.inference.ModelStreamInferResponse.prototype.setErrorMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ModelInferResponse infer_response = 2;
 * @return {?proto.inference.ModelInferResponse}
 */
proto.inference.ModelStreamInferResponse.prototype.getInferResponse = function() {
  return /** @type{?proto.inference.ModelInferResponse} */ (
    jspb.Message.getWrapperField(this, proto.inference.ModelInferResponse, 2));
};


/**
 * @param {?proto.inference.ModelInferResponse|undefined} value
 * @return {!proto.inference.ModelStreamInferResponse} returns this
*/
proto.inference.ModelStreamInferResponse.prototype.setInferResponse = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.ModelStreamInferResponse} returns this
 */
proto.inference.ModelStreamInferResponse.prototype.clearInferResponse = function() {
  return this.setInferResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelStreamInferResponse.prototype.hasInferResponse = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.ModelConfigRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelConfigRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelConfigRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelConfigRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.ModelConfigRequest}
 */
proto.inference.ModelConfigRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelConfigRequest;
  return proto.inference.ModelConfigRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelConfigRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelConfigRequest}
 */
proto.inference.ModelConfigRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.ModelConfigRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelConfigRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelConfigRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelConfigRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.inference.ModelConfigRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelConfigRequest} returns this
 */
proto.inference.ModelConfigRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.inference.ModelConfigRequest.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelConfigRequest} returns this
 */
proto.inference.ModelConfigRequest.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.ModelConfigResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelConfigResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelConfigResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelConfigResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && ssn_triton_model_config_pb.ModelConfig.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.ModelConfigResponse}
 */
proto.inference.ModelConfigResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelConfigResponse;
  return proto.inference.ModelConfigResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelConfigResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelConfigResponse}
 */
proto.inference.ModelConfigResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ssn_triton_model_config_pb.ModelConfig;
      reader.readMessage(value,ssn_triton_model_config_pb.ModelConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.ModelConfigResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelConfigResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelConfigResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelConfigResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ssn_triton_model_config_pb.ModelConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional ModelConfig config = 1;
 * @return {?proto.inference.ModelConfig}
 */
proto.inference.ModelConfigResponse.prototype.getConfig = function() {
  return /** @type{?proto.inference.ModelConfig} */ (
    jspb.Message.getWrapperField(this, ssn_triton_model_config_pb.ModelConfig, 1));
};


/**
 * @param {?proto.inference.ModelConfig|undefined} value
 * @return {!proto.inference.ModelConfigResponse} returns this
*/
proto.inference.ModelConfigResponse.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.ModelConfigResponse} returns this
 */
proto.inference.ModelConfigResponse.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelConfigResponse.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.ModelStatisticsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelStatisticsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelStatisticsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelStatisticsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.ModelStatisticsRequest}
 */
proto.inference.ModelStatisticsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelStatisticsRequest;
  return proto.inference.ModelStatisticsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelStatisticsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelStatisticsRequest}
 */
proto.inference.ModelStatisticsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.ModelStatisticsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelStatisticsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelStatisticsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelStatisticsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.inference.ModelStatisticsRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelStatisticsRequest} returns this
 */
proto.inference.ModelStatisticsRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.inference.ModelStatisticsRequest.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelStatisticsRequest} returns this
 */
proto.inference.ModelStatisticsRequest.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.StatisticDuration.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.StatisticDuration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.StatisticDuration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.StatisticDuration.toObject = function(includeInstance, msg) {
  var f, obj = {
    count: jspb.Message.getFieldWithDefault(msg, 1, 0),
    ns: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.StatisticDuration}
 */
proto.inference.StatisticDuration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.StatisticDuration;
  return proto.inference.StatisticDuration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.StatisticDuration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.StatisticDuration}
 */
proto.inference.StatisticDuration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.StatisticDuration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.StatisticDuration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.StatisticDuration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.StatisticDuration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getNs();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 count = 1;
 * @return {number}
 */
proto.inference.StatisticDuration.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.StatisticDuration} returns this
 */
proto.inference.StatisticDuration.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 ns = 2;
 * @return {number}
 */
proto.inference.StatisticDuration.prototype.getNs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.StatisticDuration} returns this
 */
proto.inference.StatisticDuration.prototype.setNs = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.InferStatistics.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.InferStatistics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.InferStatistics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.InferStatistics.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: (f = msg.getSuccess()) && proto.inference.StatisticDuration.toObject(includeInstance, f),
    fail: (f = msg.getFail()) && proto.inference.StatisticDuration.toObject(includeInstance, f),
    queue: (f = msg.getQueue()) && proto.inference.StatisticDuration.toObject(includeInstance, f),
    computeInput: (f = msg.getComputeInput()) && proto.inference.StatisticDuration.toObject(includeInstance, f),
    computeInfer: (f = msg.getComputeInfer()) && proto.inference.StatisticDuration.toObject(includeInstance, f),
    computeOutput: (f = msg.getComputeOutput()) && proto.inference.StatisticDuration.toObject(includeInstance, f),
    cacheHit: (f = msg.getCacheHit()) && proto.inference.StatisticDuration.toObject(includeInstance, f),
    cacheMiss: (f = msg.getCacheMiss()) && proto.inference.StatisticDuration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.InferStatistics}
 */
proto.inference.InferStatistics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.InferStatistics;
  return proto.inference.InferStatistics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.InferStatistics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.InferStatistics}
 */
proto.inference.InferStatistics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.inference.StatisticDuration;
      reader.readMessage(value,proto.inference.StatisticDuration.deserializeBinaryFromReader);
      msg.setSuccess(value);
      break;
    case 2:
      var value = new proto.inference.StatisticDuration;
      reader.readMessage(value,proto.inference.StatisticDuration.deserializeBinaryFromReader);
      msg.setFail(value);
      break;
    case 3:
      var value = new proto.inference.StatisticDuration;
      reader.readMessage(value,proto.inference.StatisticDuration.deserializeBinaryFromReader);
      msg.setQueue(value);
      break;
    case 4:
      var value = new proto.inference.StatisticDuration;
      reader.readMessage(value,proto.inference.StatisticDuration.deserializeBinaryFromReader);
      msg.setComputeInput(value);
      break;
    case 5:
      var value = new proto.inference.StatisticDuration;
      reader.readMessage(value,proto.inference.StatisticDuration.deserializeBinaryFromReader);
      msg.setComputeInfer(value);
      break;
    case 6:
      var value = new proto.inference.StatisticDuration;
      reader.readMessage(value,proto.inference.StatisticDuration.deserializeBinaryFromReader);
      msg.setComputeOutput(value);
      break;
    case 7:
      var value = new proto.inference.StatisticDuration;
      reader.readMessage(value,proto.inference.StatisticDuration.deserializeBinaryFromReader);
      msg.setCacheHit(value);
      break;
    case 8:
      var value = new proto.inference.StatisticDuration;
      reader.readMessage(value,proto.inference.StatisticDuration.deserializeBinaryFromReader);
      msg.setCacheMiss(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.InferStatistics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.InferStatistics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.InferStatistics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.InferStatistics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.inference.StatisticDuration.serializeBinaryToWriter
    );
  }
  f = message.getFail();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.inference.StatisticDuration.serializeBinaryToWriter
    );
  }
  f = message.getQueue();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.inference.StatisticDuration.serializeBinaryToWriter
    );
  }
  f = message.getComputeInput();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.inference.StatisticDuration.serializeBinaryToWriter
    );
  }
  f = message.getComputeInfer();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.inference.StatisticDuration.serializeBinaryToWriter
    );
  }
  f = message.getComputeOutput();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.inference.StatisticDuration.serializeBinaryToWriter
    );
  }
  f = message.getCacheHit();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.inference.StatisticDuration.serializeBinaryToWriter
    );
  }
  f = message.getCacheMiss();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.inference.StatisticDuration.serializeBinaryToWriter
    );
  }
};


/**
 * optional StatisticDuration success = 1;
 * @return {?proto.inference.StatisticDuration}
 */
proto.inference.InferStatistics.prototype.getSuccess = function() {
  return /** @type{?proto.inference.StatisticDuration} */ (
    jspb.Message.getWrapperField(this, proto.inference.StatisticDuration, 1));
};


/**
 * @param {?proto.inference.StatisticDuration|undefined} value
 * @return {!proto.inference.InferStatistics} returns this
*/
proto.inference.InferStatistics.prototype.setSuccess = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.InferStatistics} returns this
 */
proto.inference.InferStatistics.prototype.clearSuccess = function() {
  return this.setSuccess(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.InferStatistics.prototype.hasSuccess = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional StatisticDuration fail = 2;
 * @return {?proto.inference.StatisticDuration}
 */
proto.inference.InferStatistics.prototype.getFail = function() {
  return /** @type{?proto.inference.StatisticDuration} */ (
    jspb.Message.getWrapperField(this, proto.inference.StatisticDuration, 2));
};


/**
 * @param {?proto.inference.StatisticDuration|undefined} value
 * @return {!proto.inference.InferStatistics} returns this
*/
proto.inference.InferStatistics.prototype.setFail = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.InferStatistics} returns this
 */
proto.inference.InferStatistics.prototype.clearFail = function() {
  return this.setFail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.InferStatistics.prototype.hasFail = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional StatisticDuration queue = 3;
 * @return {?proto.inference.StatisticDuration}
 */
proto.inference.InferStatistics.prototype.getQueue = function() {
  return /** @type{?proto.inference.StatisticDuration} */ (
    jspb.Message.getWrapperField(this, proto.inference.StatisticDuration, 3));
};


/**
 * @param {?proto.inference.StatisticDuration|undefined} value
 * @return {!proto.inference.InferStatistics} returns this
*/
proto.inference.InferStatistics.prototype.setQueue = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.InferStatistics} returns this
 */
proto.inference.InferStatistics.prototype.clearQueue = function() {
  return this.setQueue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.InferStatistics.prototype.hasQueue = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional StatisticDuration compute_input = 4;
 * @return {?proto.inference.StatisticDuration}
 */
proto.inference.InferStatistics.prototype.getComputeInput = function() {
  return /** @type{?proto.inference.StatisticDuration} */ (
    jspb.Message.getWrapperField(this, proto.inference.StatisticDuration, 4));
};


/**
 * @param {?proto.inference.StatisticDuration|undefined} value
 * @return {!proto.inference.InferStatistics} returns this
*/
proto.inference.InferStatistics.prototype.setComputeInput = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.InferStatistics} returns this
 */
proto.inference.InferStatistics.prototype.clearComputeInput = function() {
  return this.setComputeInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.InferStatistics.prototype.hasComputeInput = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional StatisticDuration compute_infer = 5;
 * @return {?proto.inference.StatisticDuration}
 */
proto.inference.InferStatistics.prototype.getComputeInfer = function() {
  return /** @type{?proto.inference.StatisticDuration} */ (
    jspb.Message.getWrapperField(this, proto.inference.StatisticDuration, 5));
};


/**
 * @param {?proto.inference.StatisticDuration|undefined} value
 * @return {!proto.inference.InferStatistics} returns this
*/
proto.inference.InferStatistics.prototype.setComputeInfer = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.InferStatistics} returns this
 */
proto.inference.InferStatistics.prototype.clearComputeInfer = function() {
  return this.setComputeInfer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.InferStatistics.prototype.hasComputeInfer = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional StatisticDuration compute_output = 6;
 * @return {?proto.inference.StatisticDuration}
 */
proto.inference.InferStatistics.prototype.getComputeOutput = function() {
  return /** @type{?proto.inference.StatisticDuration} */ (
    jspb.Message.getWrapperField(this, proto.inference.StatisticDuration, 6));
};


/**
 * @param {?proto.inference.StatisticDuration|undefined} value
 * @return {!proto.inference.InferStatistics} returns this
*/
proto.inference.InferStatistics.prototype.setComputeOutput = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.InferStatistics} returns this
 */
proto.inference.InferStatistics.prototype.clearComputeOutput = function() {
  return this.setComputeOutput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.InferStatistics.prototype.hasComputeOutput = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional StatisticDuration cache_hit = 7;
 * @return {?proto.inference.StatisticDuration}
 */
proto.inference.InferStatistics.prototype.getCacheHit = function() {
  return /** @type{?proto.inference.StatisticDuration} */ (
    jspb.Message.getWrapperField(this, proto.inference.StatisticDuration, 7));
};


/**
 * @param {?proto.inference.StatisticDuration|undefined} value
 * @return {!proto.inference.InferStatistics} returns this
*/
proto.inference.InferStatistics.prototype.setCacheHit = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.InferStatistics} returns this
 */
proto.inference.InferStatistics.prototype.clearCacheHit = function() {
  return this.setCacheHit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.InferStatistics.prototype.hasCacheHit = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional StatisticDuration cache_miss = 8;
 * @return {?proto.inference.StatisticDuration}
 */
proto.inference.InferStatistics.prototype.getCacheMiss = function() {
  return /** @type{?proto.inference.StatisticDuration} */ (
    jspb.Message.getWrapperField(this, proto.inference.StatisticDuration, 8));
};


/**
 * @param {?proto.inference.StatisticDuration|undefined} value
 * @return {!proto.inference.InferStatistics} returns this
*/
proto.inference.InferStatistics.prototype.setCacheMiss = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.InferStatistics} returns this
 */
proto.inference.InferStatistics.prototype.clearCacheMiss = function() {
  return this.setCacheMiss(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.InferStatistics.prototype.hasCacheMiss = function() {
  return jspb.Message.getField(this, 8) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.InferBatchStatistics.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.InferBatchStatistics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.InferBatchStatistics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.InferBatchStatistics.toObject = function(includeInstance, msg) {
  var f, obj = {
    batchSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
    computeInput: (f = msg.getComputeInput()) && proto.inference.StatisticDuration.toObject(includeInstance, f),
    computeInfer: (f = msg.getComputeInfer()) && proto.inference.StatisticDuration.toObject(includeInstance, f),
    computeOutput: (f = msg.getComputeOutput()) && proto.inference.StatisticDuration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.InferBatchStatistics}
 */
proto.inference.InferBatchStatistics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.InferBatchStatistics;
  return proto.inference.InferBatchStatistics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.InferBatchStatistics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.InferBatchStatistics}
 */
proto.inference.InferBatchStatistics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBatchSize(value);
      break;
    case 2:
      var value = new proto.inference.StatisticDuration;
      reader.readMessage(value,proto.inference.StatisticDuration.deserializeBinaryFromReader);
      msg.setComputeInput(value);
      break;
    case 3:
      var value = new proto.inference.StatisticDuration;
      reader.readMessage(value,proto.inference.StatisticDuration.deserializeBinaryFromReader);
      msg.setComputeInfer(value);
      break;
    case 4:
      var value = new proto.inference.StatisticDuration;
      reader.readMessage(value,proto.inference.StatisticDuration.deserializeBinaryFromReader);
      msg.setComputeOutput(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.InferBatchStatistics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.InferBatchStatistics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.InferBatchStatistics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.InferBatchStatistics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBatchSize();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getComputeInput();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.inference.StatisticDuration.serializeBinaryToWriter
    );
  }
  f = message.getComputeInfer();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.inference.StatisticDuration.serializeBinaryToWriter
    );
  }
  f = message.getComputeOutput();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.inference.StatisticDuration.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 batch_size = 1;
 * @return {number}
 */
proto.inference.InferBatchStatistics.prototype.getBatchSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.InferBatchStatistics} returns this
 */
proto.inference.InferBatchStatistics.prototype.setBatchSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional StatisticDuration compute_input = 2;
 * @return {?proto.inference.StatisticDuration}
 */
proto.inference.InferBatchStatistics.prototype.getComputeInput = function() {
  return /** @type{?proto.inference.StatisticDuration} */ (
    jspb.Message.getWrapperField(this, proto.inference.StatisticDuration, 2));
};


/**
 * @param {?proto.inference.StatisticDuration|undefined} value
 * @return {!proto.inference.InferBatchStatistics} returns this
*/
proto.inference.InferBatchStatistics.prototype.setComputeInput = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.InferBatchStatistics} returns this
 */
proto.inference.InferBatchStatistics.prototype.clearComputeInput = function() {
  return this.setComputeInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.InferBatchStatistics.prototype.hasComputeInput = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional StatisticDuration compute_infer = 3;
 * @return {?proto.inference.StatisticDuration}
 */
proto.inference.InferBatchStatistics.prototype.getComputeInfer = function() {
  return /** @type{?proto.inference.StatisticDuration} */ (
    jspb.Message.getWrapperField(this, proto.inference.StatisticDuration, 3));
};


/**
 * @param {?proto.inference.StatisticDuration|undefined} value
 * @return {!proto.inference.InferBatchStatistics} returns this
*/
proto.inference.InferBatchStatistics.prototype.setComputeInfer = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.InferBatchStatistics} returns this
 */
proto.inference.InferBatchStatistics.prototype.clearComputeInfer = function() {
  return this.setComputeInfer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.InferBatchStatistics.prototype.hasComputeInfer = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional StatisticDuration compute_output = 4;
 * @return {?proto.inference.StatisticDuration}
 */
proto.inference.InferBatchStatistics.prototype.getComputeOutput = function() {
  return /** @type{?proto.inference.StatisticDuration} */ (
    jspb.Message.getWrapperField(this, proto.inference.StatisticDuration, 4));
};


/**
 * @param {?proto.inference.StatisticDuration|undefined} value
 * @return {!proto.inference.InferBatchStatistics} returns this
*/
proto.inference.InferBatchStatistics.prototype.setComputeOutput = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.InferBatchStatistics} returns this
 */
proto.inference.InferBatchStatistics.prototype.clearComputeOutput = function() {
  return this.setComputeOutput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.InferBatchStatistics.prototype.hasComputeOutput = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.inference.ModelStatistics.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.ModelStatistics.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelStatistics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelStatistics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelStatistics.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lastInference: jspb.Message.getFieldWithDefault(msg, 3, 0),
    inferenceCount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    executionCount: jspb.Message.getFieldWithDefault(msg, 5, 0),
    inferenceStats: (f = msg.getInferenceStats()) && proto.inference.InferStatistics.toObject(includeInstance, f),
    batchStatsList: jspb.Message.toObjectList(msg.getBatchStatsList(),
    proto.inference.InferBatchStatistics.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.ModelStatistics}
 */
proto.inference.ModelStatistics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelStatistics;
  return proto.inference.ModelStatistics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelStatistics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelStatistics}
 */
proto.inference.ModelStatistics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLastInference(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setInferenceCount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setExecutionCount(value);
      break;
    case 6:
      var value = new proto.inference.InferStatistics;
      reader.readMessage(value,proto.inference.InferStatistics.deserializeBinaryFromReader);
      msg.setInferenceStats(value);
      break;
    case 7:
      var value = new proto.inference.InferBatchStatistics;
      reader.readMessage(value,proto.inference.InferBatchStatistics.deserializeBinaryFromReader);
      msg.addBatchStats(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.ModelStatistics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelStatistics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelStatistics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelStatistics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLastInference();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getInferenceCount();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getExecutionCount();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getInferenceStats();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.inference.InferStatistics.serializeBinaryToWriter
    );
  }
  f = message.getBatchStatsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.inference.InferBatchStatistics.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.inference.ModelStatistics.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelStatistics} returns this
 */
proto.inference.ModelStatistics.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.inference.ModelStatistics.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelStatistics} returns this
 */
proto.inference.ModelStatistics.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 last_inference = 3;
 * @return {number}
 */
proto.inference.ModelStatistics.prototype.getLastInference = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.ModelStatistics} returns this
 */
proto.inference.ModelStatistics.prototype.setLastInference = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 inference_count = 4;
 * @return {number}
 */
proto.inference.ModelStatistics.prototype.getInferenceCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.ModelStatistics} returns this
 */
proto.inference.ModelStatistics.prototype.setInferenceCount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 execution_count = 5;
 * @return {number}
 */
proto.inference.ModelStatistics.prototype.getExecutionCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.ModelStatistics} returns this
 */
proto.inference.ModelStatistics.prototype.setExecutionCount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional InferStatistics inference_stats = 6;
 * @return {?proto.inference.InferStatistics}
 */
proto.inference.ModelStatistics.prototype.getInferenceStats = function() {
  return /** @type{?proto.inference.InferStatistics} */ (
    jspb.Message.getWrapperField(this, proto.inference.InferStatistics, 6));
};


/**
 * @param {?proto.inference.InferStatistics|undefined} value
 * @return {!proto.inference.ModelStatistics} returns this
*/
proto.inference.ModelStatistics.prototype.setInferenceStats = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.ModelStatistics} returns this
 */
proto.inference.ModelStatistics.prototype.clearInferenceStats = function() {
  return this.setInferenceStats(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelStatistics.prototype.hasInferenceStats = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated InferBatchStatistics batch_stats = 7;
 * @return {!Array<!proto.inference.InferBatchStatistics>}
 */
proto.inference.ModelStatistics.prototype.getBatchStatsList = function() {
  return /** @type{!Array<!proto.inference.InferBatchStatistics>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.inference.InferBatchStatistics, 7));
};


/**
 * @param {!Array<!proto.inference.InferBatchStatistics>} value
 * @return {!proto.inference.ModelStatistics} returns this
*/
proto.inference.ModelStatistics.prototype.setBatchStatsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.inference.InferBatchStatistics=} opt_value
 * @param {number=} opt_index
 * @return {!proto.inference.InferBatchStatistics}
 */
proto.inference.ModelStatistics.prototype.addBatchStats = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.inference.InferBatchStatistics, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelStatistics} returns this
 */
proto.inference.ModelStatistics.prototype.clearBatchStatsList = function() {
  return this.setBatchStatsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.inference.ModelStatisticsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.ModelStatisticsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelStatisticsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelStatisticsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelStatisticsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelStatsList: jspb.Message.toObjectList(msg.getModelStatsList(),
    proto.inference.ModelStatistics.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.ModelStatisticsResponse}
 */
proto.inference.ModelStatisticsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelStatisticsResponse;
  return proto.inference.ModelStatisticsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelStatisticsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelStatisticsResponse}
 */
proto.inference.ModelStatisticsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.inference.ModelStatistics;
      reader.readMessage(value,proto.inference.ModelStatistics.deserializeBinaryFromReader);
      msg.addModelStats(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.ModelStatisticsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelStatisticsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelStatisticsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelStatisticsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModelStatsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.inference.ModelStatistics.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ModelStatistics model_stats = 1;
 * @return {!Array<!proto.inference.ModelStatistics>}
 */
proto.inference.ModelStatisticsResponse.prototype.getModelStatsList = function() {
  return /** @type{!Array<!proto.inference.ModelStatistics>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.inference.ModelStatistics, 1));
};


/**
 * @param {!Array<!proto.inference.ModelStatistics>} value
 * @return {!proto.inference.ModelStatisticsResponse} returns this
*/
proto.inference.ModelStatisticsResponse.prototype.setModelStatsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.inference.ModelStatistics=} opt_value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelStatistics}
 */
proto.inference.ModelStatisticsResponse.prototype.addModelStats = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.inference.ModelStatistics, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelStatisticsResponse} returns this
 */
proto.inference.ModelStatisticsResponse.prototype.clearModelStatsList = function() {
  return this.setModelStatsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.inference.ModelRepositoryParameter.oneofGroups_ = [[1,2,3,4]];

/**
 * @enum {number}
 */
proto.inference.ModelRepositoryParameter.ParameterChoiceCase = {
  PARAMETER_CHOICE_NOT_SET: 0,
  BOOL_PARAM: 1,
  INT64_PARAM: 2,
  STRING_PARAM: 3,
  BYTES_PARAM: 4
};

/**
 * @return {proto.inference.ModelRepositoryParameter.ParameterChoiceCase}
 */
proto.inference.ModelRepositoryParameter.prototype.getParameterChoiceCase = function() {
  return /** @type {proto.inference.ModelRepositoryParameter.ParameterChoiceCase} */(jspb.Message.computeOneofCase(this, proto.inference.ModelRepositoryParameter.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.ModelRepositoryParameter.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelRepositoryParameter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelRepositoryParameter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelRepositoryParameter.toObject = function(includeInstance, msg) {
  var f, obj = {
    boolParam: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    int64Param: jspb.Message.getFieldWithDefault(msg, 2, 0),
    stringParam: jspb.Message.getFieldWithDefault(msg, 3, ""),
    bytesParam: msg.getBytesParam_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.ModelRepositoryParameter}
 */
proto.inference.ModelRepositoryParameter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelRepositoryParameter;
  return proto.inference.ModelRepositoryParameter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelRepositoryParameter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelRepositoryParameter}
 */
proto.inference.ModelRepositoryParameter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBoolParam(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInt64Param(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringParam(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBytesParam(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.ModelRepositoryParameter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelRepositoryParameter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelRepositoryParameter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelRepositoryParameter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * optional bool bool_param = 1;
 * @return {boolean}
 */
proto.inference.ModelRepositoryParameter.prototype.getBoolParam = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.inference.ModelRepositoryParameter} returns this
 */
proto.inference.ModelRepositoryParameter.prototype.setBoolParam = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.inference.ModelRepositoryParameter.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.inference.ModelRepositoryParameter} returns this
 */
proto.inference.ModelRepositoryParameter.prototype.clearBoolParam = function() {
  return jspb.Message.setOneofField(this, 1, proto.inference.ModelRepositoryParameter.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelRepositoryParameter.prototype.hasBoolParam = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 int64_param = 2;
 * @return {number}
 */
proto.inference.ModelRepositoryParameter.prototype.getInt64Param = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.ModelRepositoryParameter} returns this
 */
proto.inference.ModelRepositoryParameter.prototype.setInt64Param = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.inference.ModelRepositoryParameter.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.inference.ModelRepositoryParameter} returns this
 */
proto.inference.ModelRepositoryParameter.prototype.clearInt64Param = function() {
  return jspb.Message.setOneofField(this, 2, proto.inference.ModelRepositoryParameter.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelRepositoryParameter.prototype.hasInt64Param = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string string_param = 3;
 * @return {string}
 */
proto.inference.ModelRepositoryParameter.prototype.getStringParam = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelRepositoryParameter} returns this
 */
proto.inference.ModelRepositoryParameter.prototype.setStringParam = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.inference.ModelRepositoryParameter.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.inference.ModelRepositoryParameter} returns this
 */
proto.inference.ModelRepositoryParameter.prototype.clearStringParam = function() {
  return jspb.Message.setOneofField(this, 3, proto.inference.ModelRepositoryParameter.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelRepositoryParameter.prototype.hasStringParam = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bytes bytes_param = 4;
 * @return {!(string|Uint8Array)}
 */
proto.inference.ModelRepositoryParameter.prototype.getBytesParam = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes bytes_param = 4;
 * This is a type-conversion wrapper around `getBytesParam()`
 * @return {string}
 */
proto.inference.ModelRepositoryParameter.prototype.getBytesParam_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBytesParam()));
};


/**
 * optional bytes bytes_param = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBytesParam()`
 * @return {!Uint8Array}
 */
proto.inference.ModelRepositoryParameter.prototype.getBytesParam_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBytesParam()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.inference.ModelRepositoryParameter} returns this
 */
proto.inference.ModelRepositoryParameter.prototype.setBytesParam = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.inference.ModelRepositoryParameter.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.inference.ModelRepositoryParameter} returns this
 */
proto.inference.ModelRepositoryParameter.prototype.clearBytesParam = function() {
  return jspb.Message.setOneofField(this, 4, proto.inference.ModelRepositoryParameter.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelRepositoryParameter.prototype.hasBytesParam = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.RepositoryIndexRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.RepositoryIndexRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.RepositoryIndexRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.RepositoryIndexRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repositoryName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ready: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.RepositoryIndexRequest}
 */
proto.inference.RepositoryIndexRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.RepositoryIndexRequest;
  return proto.inference.RepositoryIndexRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.RepositoryIndexRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.RepositoryIndexRequest}
 */
proto.inference.RepositoryIndexRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepositoryName(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReady(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.RepositoryIndexRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.RepositoryIndexRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.RepositoryIndexRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.RepositoryIndexRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepositoryName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReady();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string repository_name = 1;
 * @return {string}
 */
proto.inference.RepositoryIndexRequest.prototype.getRepositoryName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.RepositoryIndexRequest} returns this
 */
proto.inference.RepositoryIndexRequest.prototype.setRepositoryName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool ready = 2;
 * @return {boolean}
 */
proto.inference.RepositoryIndexRequest.prototype.getReady = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.inference.RepositoryIndexRequest} returns this
 */
proto.inference.RepositoryIndexRequest.prototype.setReady = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.inference.RepositoryIndexResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.RepositoryIndexResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.RepositoryIndexResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.RepositoryIndexResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.RepositoryIndexResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelsList: jspb.Message.toObjectList(msg.getModelsList(),
    proto.inference.RepositoryIndexResponse.ModelIndex.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.RepositoryIndexResponse}
 */
proto.inference.RepositoryIndexResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.RepositoryIndexResponse;
  return proto.inference.RepositoryIndexResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.RepositoryIndexResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.RepositoryIndexResponse}
 */
proto.inference.RepositoryIndexResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.inference.RepositoryIndexResponse.ModelIndex;
      reader.readMessage(value,proto.inference.RepositoryIndexResponse.ModelIndex.deserializeBinaryFromReader);
      msg.addModels(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.RepositoryIndexResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.RepositoryIndexResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.RepositoryIndexResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.RepositoryIndexResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.inference.RepositoryIndexResponse.ModelIndex.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.RepositoryIndexResponse.ModelIndex.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.RepositoryIndexResponse.ModelIndex.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.RepositoryIndexResponse.ModelIndex} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.RepositoryIndexResponse.ModelIndex.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, ""),
    state: jspb.Message.getFieldWithDefault(msg, 3, ""),
    reason: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.RepositoryIndexResponse.ModelIndex}
 */
proto.inference.RepositoryIndexResponse.ModelIndex.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.RepositoryIndexResponse.ModelIndex;
  return proto.inference.RepositoryIndexResponse.ModelIndex.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.RepositoryIndexResponse.ModelIndex} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.RepositoryIndexResponse.ModelIndex}
 */
proto.inference.RepositoryIndexResponse.ModelIndex.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.RepositoryIndexResponse.ModelIndex.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.RepositoryIndexResponse.ModelIndex.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.RepositoryIndexResponse.ModelIndex} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.RepositoryIndexResponse.ModelIndex.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.inference.RepositoryIndexResponse.ModelIndex.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.RepositoryIndexResponse.ModelIndex} returns this
 */
proto.inference.RepositoryIndexResponse.ModelIndex.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.inference.RepositoryIndexResponse.ModelIndex.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.RepositoryIndexResponse.ModelIndex} returns this
 */
proto.inference.RepositoryIndexResponse.ModelIndex.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string state = 3;
 * @return {string}
 */
proto.inference.RepositoryIndexResponse.ModelIndex.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.RepositoryIndexResponse.ModelIndex} returns this
 */
proto.inference.RepositoryIndexResponse.ModelIndex.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string reason = 4;
 * @return {string}
 */
proto.inference.RepositoryIndexResponse.ModelIndex.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.RepositoryIndexResponse.ModelIndex} returns this
 */
proto.inference.RepositoryIndexResponse.ModelIndex.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated ModelIndex models = 1;
 * @return {!Array<!proto.inference.RepositoryIndexResponse.ModelIndex>}
 */
proto.inference.RepositoryIndexResponse.prototype.getModelsList = function() {
  return /** @type{!Array<!proto.inference.RepositoryIndexResponse.ModelIndex>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.inference.RepositoryIndexResponse.ModelIndex, 1));
};


/**
 * @param {!Array<!proto.inference.RepositoryIndexResponse.ModelIndex>} value
 * @return {!proto.inference.RepositoryIndexResponse} returns this
*/
proto.inference.RepositoryIndexResponse.prototype.setModelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.inference.RepositoryIndexResponse.ModelIndex=} opt_value
 * @param {number=} opt_index
 * @return {!proto.inference.RepositoryIndexResponse.ModelIndex}
 */
proto.inference.RepositoryIndexResponse.prototype.addModels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.inference.RepositoryIndexResponse.ModelIndex, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.RepositoryIndexResponse} returns this
 */
proto.inference.RepositoryIndexResponse.prototype.clearModelsList = function() {
  return this.setModelsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.RepositoryModelLoadRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.RepositoryModelLoadRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.RepositoryModelLoadRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.RepositoryModelLoadRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repositoryName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    modelName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    parametersMap: (f = msg.getParametersMap()) ? f.toObject(includeInstance, proto.inference.ModelRepositoryParameter.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.RepositoryModelLoadRequest}
 */
proto.inference.RepositoryModelLoadRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.RepositoryModelLoadRequest;
  return proto.inference.RepositoryModelLoadRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.RepositoryModelLoadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.RepositoryModelLoadRequest}
 */
proto.inference.RepositoryModelLoadRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepositoryName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelName(value);
      break;
    case 3:
      var value = msg.getParametersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.inference.ModelRepositoryParameter.deserializeBinaryFromReader, "", new proto.inference.ModelRepositoryParameter());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.RepositoryModelLoadRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.RepositoryModelLoadRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.RepositoryModelLoadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.RepositoryModelLoadRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepositoryName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModelName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getParametersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.inference.ModelRepositoryParameter.serializeBinaryToWriter);
  }
};


/**
 * optional string repository_name = 1;
 * @return {string}
 */
proto.inference.RepositoryModelLoadRequest.prototype.getRepositoryName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.RepositoryModelLoadRequest} returns this
 */
proto.inference.RepositoryModelLoadRequest.prototype.setRepositoryName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string model_name = 2;
 * @return {string}
 */
proto.inference.RepositoryModelLoadRequest.prototype.getModelName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.RepositoryModelLoadRequest} returns this
 */
proto.inference.RepositoryModelLoadRequest.prototype.setModelName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<string, ModelRepositoryParameter> parameters = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.inference.ModelRepositoryParameter>}
 */
proto.inference.RepositoryModelLoadRequest.prototype.getParametersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.inference.ModelRepositoryParameter>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.inference.ModelRepositoryParameter));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.inference.RepositoryModelLoadRequest} returns this
 */
proto.inference.RepositoryModelLoadRequest.prototype.clearParametersMap = function() {
  this.getParametersMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.RepositoryModelLoadResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.RepositoryModelLoadResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.RepositoryModelLoadResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.RepositoryModelLoadResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.RepositoryModelLoadResponse}
 */
proto.inference.RepositoryModelLoadResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.RepositoryModelLoadResponse;
  return proto.inference.RepositoryModelLoadResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.RepositoryModelLoadResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.RepositoryModelLoadResponse}
 */
proto.inference.RepositoryModelLoadResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.RepositoryModelLoadResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.RepositoryModelLoadResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.RepositoryModelLoadResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.RepositoryModelLoadResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.RepositoryModelUnloadRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.RepositoryModelUnloadRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.RepositoryModelUnloadRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.RepositoryModelUnloadRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repositoryName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    modelName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    parametersMap: (f = msg.getParametersMap()) ? f.toObject(includeInstance, proto.inference.ModelRepositoryParameter.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.RepositoryModelUnloadRequest}
 */
proto.inference.RepositoryModelUnloadRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.RepositoryModelUnloadRequest;
  return proto.inference.RepositoryModelUnloadRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.RepositoryModelUnloadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.RepositoryModelUnloadRequest}
 */
proto.inference.RepositoryModelUnloadRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepositoryName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelName(value);
      break;
    case 3:
      var value = msg.getParametersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.inference.ModelRepositoryParameter.deserializeBinaryFromReader, "", new proto.inference.ModelRepositoryParameter());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.RepositoryModelUnloadRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.RepositoryModelUnloadRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.RepositoryModelUnloadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.RepositoryModelUnloadRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepositoryName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModelName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getParametersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.inference.ModelRepositoryParameter.serializeBinaryToWriter);
  }
};


/**
 * optional string repository_name = 1;
 * @return {string}
 */
proto.inference.RepositoryModelUnloadRequest.prototype.getRepositoryName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.RepositoryModelUnloadRequest} returns this
 */
proto.inference.RepositoryModelUnloadRequest.prototype.setRepositoryName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string model_name = 2;
 * @return {string}
 */
proto.inference.RepositoryModelUnloadRequest.prototype.getModelName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.RepositoryModelUnloadRequest} returns this
 */
proto.inference.RepositoryModelUnloadRequest.prototype.setModelName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<string, ModelRepositoryParameter> parameters = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.inference.ModelRepositoryParameter>}
 */
proto.inference.RepositoryModelUnloadRequest.prototype.getParametersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.inference.ModelRepositoryParameter>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.inference.ModelRepositoryParameter));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.inference.RepositoryModelUnloadRequest} returns this
 */
proto.inference.RepositoryModelUnloadRequest.prototype.clearParametersMap = function() {
  this.getParametersMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.RepositoryModelUnloadResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.RepositoryModelUnloadResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.RepositoryModelUnloadResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.RepositoryModelUnloadResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.RepositoryModelUnloadResponse}
 */
proto.inference.RepositoryModelUnloadResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.RepositoryModelUnloadResponse;
  return proto.inference.RepositoryModelUnloadResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.RepositoryModelUnloadResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.RepositoryModelUnloadResponse}
 */
proto.inference.RepositoryModelUnloadResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.RepositoryModelUnloadResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.RepositoryModelUnloadResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.RepositoryModelUnloadResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.RepositoryModelUnloadResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.SystemSharedMemoryStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.SystemSharedMemoryStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.SystemSharedMemoryStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.SystemSharedMemoryStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.SystemSharedMemoryStatusRequest}
 */
proto.inference.SystemSharedMemoryStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.SystemSharedMemoryStatusRequest;
  return proto.inference.SystemSharedMemoryStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.SystemSharedMemoryStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.SystemSharedMemoryStatusRequest}
 */
proto.inference.SystemSharedMemoryStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.SystemSharedMemoryStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.SystemSharedMemoryStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.SystemSharedMemoryStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.SystemSharedMemoryStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.inference.SystemSharedMemoryStatusRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.SystemSharedMemoryStatusRequest} returns this
 */
proto.inference.SystemSharedMemoryStatusRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.SystemSharedMemoryStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.SystemSharedMemoryStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.SystemSharedMemoryStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.SystemSharedMemoryStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    regionsMap: (f = msg.getRegionsMap()) ? f.toObject(includeInstance, proto.inference.SystemSharedMemoryStatusResponse.RegionStatus.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.SystemSharedMemoryStatusResponse}
 */
proto.inference.SystemSharedMemoryStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.SystemSharedMemoryStatusResponse;
  return proto.inference.SystemSharedMemoryStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.SystemSharedMemoryStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.SystemSharedMemoryStatusResponse}
 */
proto.inference.SystemSharedMemoryStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getRegionsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.inference.SystemSharedMemoryStatusResponse.RegionStatus.deserializeBinaryFromReader, "", new proto.inference.SystemSharedMemoryStatusResponse.RegionStatus());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.SystemSharedMemoryStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.SystemSharedMemoryStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.SystemSharedMemoryStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.SystemSharedMemoryStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRegionsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.inference.SystemSharedMemoryStatusResponse.RegionStatus.serializeBinaryToWriter);
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.SystemSharedMemoryStatusResponse.RegionStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.SystemSharedMemoryStatusResponse.RegionStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.SystemSharedMemoryStatusResponse.RegionStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.SystemSharedMemoryStatusResponse.RegionStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: jspb.Message.getFieldWithDefault(msg, 2, ""),
    offset: jspb.Message.getFieldWithDefault(msg, 3, 0),
    byteSize: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.SystemSharedMemoryStatusResponse.RegionStatus}
 */
proto.inference.SystemSharedMemoryStatusResponse.RegionStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.SystemSharedMemoryStatusResponse.RegionStatus;
  return proto.inference.SystemSharedMemoryStatusResponse.RegionStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.SystemSharedMemoryStatusResponse.RegionStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.SystemSharedMemoryStatusResponse.RegionStatus}
 */
proto.inference.SystemSharedMemoryStatusResponse.RegionStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setByteSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.SystemSharedMemoryStatusResponse.RegionStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.SystemSharedMemoryStatusResponse.RegionStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.SystemSharedMemoryStatusResponse.RegionStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.SystemSharedMemoryStatusResponse.RegionStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getByteSize();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.inference.SystemSharedMemoryStatusResponse.RegionStatus.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.SystemSharedMemoryStatusResponse.RegionStatus} returns this
 */
proto.inference.SystemSharedMemoryStatusResponse.RegionStatus.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string key = 2;
 * @return {string}
 */
proto.inference.SystemSharedMemoryStatusResponse.RegionStatus.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.SystemSharedMemoryStatusResponse.RegionStatus} returns this
 */
proto.inference.SystemSharedMemoryStatusResponse.RegionStatus.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 offset = 3;
 * @return {number}
 */
proto.inference.SystemSharedMemoryStatusResponse.RegionStatus.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.SystemSharedMemoryStatusResponse.RegionStatus} returns this
 */
proto.inference.SystemSharedMemoryStatusResponse.RegionStatus.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 byte_size = 4;
 * @return {number}
 */
proto.inference.SystemSharedMemoryStatusResponse.RegionStatus.prototype.getByteSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.SystemSharedMemoryStatusResponse.RegionStatus} returns this
 */
proto.inference.SystemSharedMemoryStatusResponse.RegionStatus.prototype.setByteSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * map<string, RegionStatus> regions = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.inference.SystemSharedMemoryStatusResponse.RegionStatus>}
 */
proto.inference.SystemSharedMemoryStatusResponse.prototype.getRegionsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.inference.SystemSharedMemoryStatusResponse.RegionStatus>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.inference.SystemSharedMemoryStatusResponse.RegionStatus));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.inference.SystemSharedMemoryStatusResponse} returns this
 */
proto.inference.SystemSharedMemoryStatusResponse.prototype.clearRegionsMap = function() {
  this.getRegionsMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.SystemSharedMemoryRegisterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.SystemSharedMemoryRegisterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.SystemSharedMemoryRegisterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.SystemSharedMemoryRegisterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: jspb.Message.getFieldWithDefault(msg, 2, ""),
    offset: jspb.Message.getFieldWithDefault(msg, 3, 0),
    byteSize: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.SystemSharedMemoryRegisterRequest}
 */
proto.inference.SystemSharedMemoryRegisterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.SystemSharedMemoryRegisterRequest;
  return proto.inference.SystemSharedMemoryRegisterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.SystemSharedMemoryRegisterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.SystemSharedMemoryRegisterRequest}
 */
proto.inference.SystemSharedMemoryRegisterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setByteSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.SystemSharedMemoryRegisterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.SystemSharedMemoryRegisterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.SystemSharedMemoryRegisterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.SystemSharedMemoryRegisterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getByteSize();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.inference.SystemSharedMemoryRegisterRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.SystemSharedMemoryRegisterRequest} returns this
 */
proto.inference.SystemSharedMemoryRegisterRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string key = 2;
 * @return {string}
 */
proto.inference.SystemSharedMemoryRegisterRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.SystemSharedMemoryRegisterRequest} returns this
 */
proto.inference.SystemSharedMemoryRegisterRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 offset = 3;
 * @return {number}
 */
proto.inference.SystemSharedMemoryRegisterRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.SystemSharedMemoryRegisterRequest} returns this
 */
proto.inference.SystemSharedMemoryRegisterRequest.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 byte_size = 4;
 * @return {number}
 */
proto.inference.SystemSharedMemoryRegisterRequest.prototype.getByteSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.SystemSharedMemoryRegisterRequest} returns this
 */
proto.inference.SystemSharedMemoryRegisterRequest.prototype.setByteSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.SystemSharedMemoryRegisterResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.SystemSharedMemoryRegisterResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.SystemSharedMemoryRegisterResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.SystemSharedMemoryRegisterResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.SystemSharedMemoryRegisterResponse}
 */
proto.inference.SystemSharedMemoryRegisterResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.SystemSharedMemoryRegisterResponse;
  return proto.inference.SystemSharedMemoryRegisterResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.SystemSharedMemoryRegisterResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.SystemSharedMemoryRegisterResponse}
 */
proto.inference.SystemSharedMemoryRegisterResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.SystemSharedMemoryRegisterResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.SystemSharedMemoryRegisterResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.SystemSharedMemoryRegisterResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.SystemSharedMemoryRegisterResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.SystemSharedMemoryUnregisterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.SystemSharedMemoryUnregisterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.SystemSharedMemoryUnregisterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.SystemSharedMemoryUnregisterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.SystemSharedMemoryUnregisterRequest}
 */
proto.inference.SystemSharedMemoryUnregisterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.SystemSharedMemoryUnregisterRequest;
  return proto.inference.SystemSharedMemoryUnregisterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.SystemSharedMemoryUnregisterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.SystemSharedMemoryUnregisterRequest}
 */
proto.inference.SystemSharedMemoryUnregisterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.SystemSharedMemoryUnregisterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.SystemSharedMemoryUnregisterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.SystemSharedMemoryUnregisterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.SystemSharedMemoryUnregisterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.inference.SystemSharedMemoryUnregisterRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.SystemSharedMemoryUnregisterRequest} returns this
 */
proto.inference.SystemSharedMemoryUnregisterRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.SystemSharedMemoryUnregisterResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.SystemSharedMemoryUnregisterResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.SystemSharedMemoryUnregisterResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.SystemSharedMemoryUnregisterResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.SystemSharedMemoryUnregisterResponse}
 */
proto.inference.SystemSharedMemoryUnregisterResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.SystemSharedMemoryUnregisterResponse;
  return proto.inference.SystemSharedMemoryUnregisterResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.SystemSharedMemoryUnregisterResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.SystemSharedMemoryUnregisterResponse}
 */
proto.inference.SystemSharedMemoryUnregisterResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.SystemSharedMemoryUnregisterResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.SystemSharedMemoryUnregisterResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.SystemSharedMemoryUnregisterResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.SystemSharedMemoryUnregisterResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.CudaSharedMemoryStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.CudaSharedMemoryStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.CudaSharedMemoryStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.CudaSharedMemoryStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.CudaSharedMemoryStatusRequest}
 */
proto.inference.CudaSharedMemoryStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.CudaSharedMemoryStatusRequest;
  return proto.inference.CudaSharedMemoryStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.CudaSharedMemoryStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.CudaSharedMemoryStatusRequest}
 */
proto.inference.CudaSharedMemoryStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.CudaSharedMemoryStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.CudaSharedMemoryStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.CudaSharedMemoryStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.CudaSharedMemoryStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.inference.CudaSharedMemoryStatusRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.CudaSharedMemoryStatusRequest} returns this
 */
proto.inference.CudaSharedMemoryStatusRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.CudaSharedMemoryStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.CudaSharedMemoryStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.CudaSharedMemoryStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.CudaSharedMemoryStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    regionsMap: (f = msg.getRegionsMap()) ? f.toObject(includeInstance, proto.inference.CudaSharedMemoryStatusResponse.RegionStatus.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.CudaSharedMemoryStatusResponse}
 */
proto.inference.CudaSharedMemoryStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.CudaSharedMemoryStatusResponse;
  return proto.inference.CudaSharedMemoryStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.CudaSharedMemoryStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.CudaSharedMemoryStatusResponse}
 */
proto.inference.CudaSharedMemoryStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getRegionsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.inference.CudaSharedMemoryStatusResponse.RegionStatus.deserializeBinaryFromReader, "", new proto.inference.CudaSharedMemoryStatusResponse.RegionStatus());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.CudaSharedMemoryStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.CudaSharedMemoryStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.CudaSharedMemoryStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.CudaSharedMemoryStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRegionsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.inference.CudaSharedMemoryStatusResponse.RegionStatus.serializeBinaryToWriter);
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.CudaSharedMemoryStatusResponse.RegionStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.CudaSharedMemoryStatusResponse.RegionStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.CudaSharedMemoryStatusResponse.RegionStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.CudaSharedMemoryStatusResponse.RegionStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    deviceId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    byteSize: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.CudaSharedMemoryStatusResponse.RegionStatus}
 */
proto.inference.CudaSharedMemoryStatusResponse.RegionStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.CudaSharedMemoryStatusResponse.RegionStatus;
  return proto.inference.CudaSharedMemoryStatusResponse.RegionStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.CudaSharedMemoryStatusResponse.RegionStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.CudaSharedMemoryStatusResponse.RegionStatus}
 */
proto.inference.CudaSharedMemoryStatusResponse.RegionStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDeviceId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setByteSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.CudaSharedMemoryStatusResponse.RegionStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.CudaSharedMemoryStatusResponse.RegionStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.CudaSharedMemoryStatusResponse.RegionStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.CudaSharedMemoryStatusResponse.RegionStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDeviceId();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getByteSize();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.inference.CudaSharedMemoryStatusResponse.RegionStatus.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.CudaSharedMemoryStatusResponse.RegionStatus} returns this
 */
proto.inference.CudaSharedMemoryStatusResponse.RegionStatus.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 device_id = 2;
 * @return {number}
 */
proto.inference.CudaSharedMemoryStatusResponse.RegionStatus.prototype.getDeviceId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.CudaSharedMemoryStatusResponse.RegionStatus} returns this
 */
proto.inference.CudaSharedMemoryStatusResponse.RegionStatus.prototype.setDeviceId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 byte_size = 3;
 * @return {number}
 */
proto.inference.CudaSharedMemoryStatusResponse.RegionStatus.prototype.getByteSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.CudaSharedMemoryStatusResponse.RegionStatus} returns this
 */
proto.inference.CudaSharedMemoryStatusResponse.RegionStatus.prototype.setByteSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * map<string, RegionStatus> regions = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.inference.CudaSharedMemoryStatusResponse.RegionStatus>}
 */
proto.inference.CudaSharedMemoryStatusResponse.prototype.getRegionsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.inference.CudaSharedMemoryStatusResponse.RegionStatus>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.inference.CudaSharedMemoryStatusResponse.RegionStatus));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.inference.CudaSharedMemoryStatusResponse} returns this
 */
proto.inference.CudaSharedMemoryStatusResponse.prototype.clearRegionsMap = function() {
  this.getRegionsMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.CudaSharedMemoryRegisterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.CudaSharedMemoryRegisterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.CudaSharedMemoryRegisterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.CudaSharedMemoryRegisterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    rawHandle: msg.getRawHandle_asB64(),
    deviceId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    byteSize: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.CudaSharedMemoryRegisterRequest}
 */
proto.inference.CudaSharedMemoryRegisterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.CudaSharedMemoryRegisterRequest;
  return proto.inference.CudaSharedMemoryRegisterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.CudaSharedMemoryRegisterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.CudaSharedMemoryRegisterRequest}
 */
proto.inference.CudaSharedMemoryRegisterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRawHandle(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDeviceId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setByteSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.CudaSharedMemoryRegisterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.CudaSharedMemoryRegisterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.CudaSharedMemoryRegisterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.CudaSharedMemoryRegisterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRawHandle_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getDeviceId();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getByteSize();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.inference.CudaSharedMemoryRegisterRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.CudaSharedMemoryRegisterRequest} returns this
 */
proto.inference.CudaSharedMemoryRegisterRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes raw_handle = 2;
 * @return {!(string|Uint8Array)}
 */
proto.inference.CudaSharedMemoryRegisterRequest.prototype.getRawHandle = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes raw_handle = 2;
 * This is a type-conversion wrapper around `getRawHandle()`
 * @return {string}
 */
proto.inference.CudaSharedMemoryRegisterRequest.prototype.getRawHandle_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRawHandle()));
};


/**
 * optional bytes raw_handle = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRawHandle()`
 * @return {!Uint8Array}
 */
proto.inference.CudaSharedMemoryRegisterRequest.prototype.getRawHandle_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRawHandle()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.inference.CudaSharedMemoryRegisterRequest} returns this
 */
proto.inference.CudaSharedMemoryRegisterRequest.prototype.setRawHandle = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional int64 device_id = 3;
 * @return {number}
 */
proto.inference.CudaSharedMemoryRegisterRequest.prototype.getDeviceId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.CudaSharedMemoryRegisterRequest} returns this
 */
proto.inference.CudaSharedMemoryRegisterRequest.prototype.setDeviceId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 byte_size = 4;
 * @return {number}
 */
proto.inference.CudaSharedMemoryRegisterRequest.prototype.getByteSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.CudaSharedMemoryRegisterRequest} returns this
 */
proto.inference.CudaSharedMemoryRegisterRequest.prototype.setByteSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.CudaSharedMemoryRegisterResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.CudaSharedMemoryRegisterResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.CudaSharedMemoryRegisterResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.CudaSharedMemoryRegisterResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.CudaSharedMemoryRegisterResponse}
 */
proto.inference.CudaSharedMemoryRegisterResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.CudaSharedMemoryRegisterResponse;
  return proto.inference.CudaSharedMemoryRegisterResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.CudaSharedMemoryRegisterResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.CudaSharedMemoryRegisterResponse}
 */
proto.inference.CudaSharedMemoryRegisterResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.CudaSharedMemoryRegisterResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.CudaSharedMemoryRegisterResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.CudaSharedMemoryRegisterResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.CudaSharedMemoryRegisterResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.CudaSharedMemoryUnregisterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.CudaSharedMemoryUnregisterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.CudaSharedMemoryUnregisterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.CudaSharedMemoryUnregisterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.CudaSharedMemoryUnregisterRequest}
 */
proto.inference.CudaSharedMemoryUnregisterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.CudaSharedMemoryUnregisterRequest;
  return proto.inference.CudaSharedMemoryUnregisterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.CudaSharedMemoryUnregisterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.CudaSharedMemoryUnregisterRequest}
 */
proto.inference.CudaSharedMemoryUnregisterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.CudaSharedMemoryUnregisterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.CudaSharedMemoryUnregisterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.CudaSharedMemoryUnregisterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.CudaSharedMemoryUnregisterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.inference.CudaSharedMemoryUnregisterRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.CudaSharedMemoryUnregisterRequest} returns this
 */
proto.inference.CudaSharedMemoryUnregisterRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.CudaSharedMemoryUnregisterResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.CudaSharedMemoryUnregisterResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.CudaSharedMemoryUnregisterResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.CudaSharedMemoryUnregisterResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.CudaSharedMemoryUnregisterResponse}
 */
proto.inference.CudaSharedMemoryUnregisterResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.CudaSharedMemoryUnregisterResponse;
  return proto.inference.CudaSharedMemoryUnregisterResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.CudaSharedMemoryUnregisterResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.CudaSharedMemoryUnregisterResponse}
 */
proto.inference.CudaSharedMemoryUnregisterResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.CudaSharedMemoryUnregisterResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.CudaSharedMemoryUnregisterResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.CudaSharedMemoryUnregisterResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.CudaSharedMemoryUnregisterResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.TraceSettingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.TraceSettingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.TraceSettingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.TraceSettingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    settingsMap: (f = msg.getSettingsMap()) ? f.toObject(includeInstance, proto.inference.TraceSettingRequest.SettingValue.toObject) : [],
    modelName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.TraceSettingRequest}
 */
proto.inference.TraceSettingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.TraceSettingRequest;
  return proto.inference.TraceSettingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.TraceSettingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.TraceSettingRequest}
 */
proto.inference.TraceSettingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getSettingsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.inference.TraceSettingRequest.SettingValue.deserializeBinaryFromReader, "", new proto.inference.TraceSettingRequest.SettingValue());
         });
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.TraceSettingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.TraceSettingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.TraceSettingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.TraceSettingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSettingsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.inference.TraceSettingRequest.SettingValue.serializeBinaryToWriter);
  }
  f = message.getModelName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.inference.TraceSettingRequest.SettingValue.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.TraceSettingRequest.SettingValue.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.TraceSettingRequest.SettingValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.TraceSettingRequest.SettingValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.TraceSettingRequest.SettingValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    valueList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.TraceSettingRequest.SettingValue}
 */
proto.inference.TraceSettingRequest.SettingValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.TraceSettingRequest.SettingValue;
  return proto.inference.TraceSettingRequest.SettingValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.TraceSettingRequest.SettingValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.TraceSettingRequest.SettingValue}
 */
proto.inference.TraceSettingRequest.SettingValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.TraceSettingRequest.SettingValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.TraceSettingRequest.SettingValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.TraceSettingRequest.SettingValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.TraceSettingRequest.SettingValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValueList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string value = 1;
 * @return {!Array<string>}
 */
proto.inference.TraceSettingRequest.SettingValue.prototype.getValueList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.inference.TraceSettingRequest.SettingValue} returns this
 */
proto.inference.TraceSettingRequest.SettingValue.prototype.setValueList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.inference.TraceSettingRequest.SettingValue} returns this
 */
proto.inference.TraceSettingRequest.SettingValue.prototype.addValue = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.TraceSettingRequest.SettingValue} returns this
 */
proto.inference.TraceSettingRequest.SettingValue.prototype.clearValueList = function() {
  return this.setValueList([]);
};


/**
 * map<string, SettingValue> settings = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.inference.TraceSettingRequest.SettingValue>}
 */
proto.inference.TraceSettingRequest.prototype.getSettingsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.inference.TraceSettingRequest.SettingValue>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.inference.TraceSettingRequest.SettingValue));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.inference.TraceSettingRequest} returns this
 */
proto.inference.TraceSettingRequest.prototype.clearSettingsMap = function() {
  this.getSettingsMap().clear();
  return this;};


/**
 * optional string model_name = 2;
 * @return {string}
 */
proto.inference.TraceSettingRequest.prototype.getModelName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.TraceSettingRequest} returns this
 */
proto.inference.TraceSettingRequest.prototype.setModelName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.TraceSettingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.TraceSettingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.TraceSettingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.TraceSettingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    settingsMap: (f = msg.getSettingsMap()) ? f.toObject(includeInstance, proto.inference.TraceSettingResponse.SettingValue.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.TraceSettingResponse}
 */
proto.inference.TraceSettingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.TraceSettingResponse;
  return proto.inference.TraceSettingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.TraceSettingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.TraceSettingResponse}
 */
proto.inference.TraceSettingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getSettingsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.inference.TraceSettingResponse.SettingValue.deserializeBinaryFromReader, "", new proto.inference.TraceSettingResponse.SettingValue());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.TraceSettingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.TraceSettingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.TraceSettingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.TraceSettingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSettingsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.inference.TraceSettingResponse.SettingValue.serializeBinaryToWriter);
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.inference.TraceSettingResponse.SettingValue.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.TraceSettingResponse.SettingValue.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.TraceSettingResponse.SettingValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.TraceSettingResponse.SettingValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.TraceSettingResponse.SettingValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    valueList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.TraceSettingResponse.SettingValue}
 */
proto.inference.TraceSettingResponse.SettingValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.TraceSettingResponse.SettingValue;
  return proto.inference.TraceSettingResponse.SettingValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.TraceSettingResponse.SettingValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.TraceSettingResponse.SettingValue}
 */
proto.inference.TraceSettingResponse.SettingValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.TraceSettingResponse.SettingValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.TraceSettingResponse.SettingValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.TraceSettingResponse.SettingValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.TraceSettingResponse.SettingValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValueList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string value = 1;
 * @return {!Array<string>}
 */
proto.inference.TraceSettingResponse.SettingValue.prototype.getValueList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.inference.TraceSettingResponse.SettingValue} returns this
 */
proto.inference.TraceSettingResponse.SettingValue.prototype.setValueList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.inference.TraceSettingResponse.SettingValue} returns this
 */
proto.inference.TraceSettingResponse.SettingValue.prototype.addValue = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.TraceSettingResponse.SettingValue} returns this
 */
proto.inference.TraceSettingResponse.SettingValue.prototype.clearValueList = function() {
  return this.setValueList([]);
};


/**
 * map<string, SettingValue> settings = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.inference.TraceSettingResponse.SettingValue>}
 */
proto.inference.TraceSettingResponse.prototype.getSettingsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.inference.TraceSettingResponse.SettingValue>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.inference.TraceSettingResponse.SettingValue));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.inference.TraceSettingResponse} returns this
 */
proto.inference.TraceSettingResponse.prototype.clearSettingsMap = function() {
  this.getSettingsMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.LogSettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.LogSettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.LogSettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.LogSettingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    settingsMap: (f = msg.getSettingsMap()) ? f.toObject(includeInstance, proto.inference.LogSettingsRequest.SettingValue.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.LogSettingsRequest}
 */
proto.inference.LogSettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.LogSettingsRequest;
  return proto.inference.LogSettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.LogSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.LogSettingsRequest}
 */
proto.inference.LogSettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getSettingsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.inference.LogSettingsRequest.SettingValue.deserializeBinaryFromReader, "", new proto.inference.LogSettingsRequest.SettingValue());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.LogSettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.LogSettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.LogSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.LogSettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSettingsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.inference.LogSettingsRequest.SettingValue.serializeBinaryToWriter);
  }
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.inference.LogSettingsRequest.SettingValue.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.inference.LogSettingsRequest.SettingValue.ParameterChoiceCase = {
  PARAMETER_CHOICE_NOT_SET: 0,
  BOOL_PARAM: 1,
  UINT32_PARAM: 2,
  STRING_PARAM: 3
};

/**
 * @return {proto.inference.LogSettingsRequest.SettingValue.ParameterChoiceCase}
 */
proto.inference.LogSettingsRequest.SettingValue.prototype.getParameterChoiceCase = function() {
  return /** @type {proto.inference.LogSettingsRequest.SettingValue.ParameterChoiceCase} */(jspb.Message.computeOneofCase(this, proto.inference.LogSettingsRequest.SettingValue.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.LogSettingsRequest.SettingValue.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.LogSettingsRequest.SettingValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.LogSettingsRequest.SettingValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.LogSettingsRequest.SettingValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    boolParam: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    uint32Param: jspb.Message.getFieldWithDefault(msg, 2, 0),
    stringParam: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.LogSettingsRequest.SettingValue}
 */
proto.inference.LogSettingsRequest.SettingValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.LogSettingsRequest.SettingValue;
  return proto.inference.LogSettingsRequest.SettingValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.LogSettingsRequest.SettingValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.LogSettingsRequest.SettingValue}
 */
proto.inference.LogSettingsRequest.SettingValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBoolParam(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUint32Param(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringParam(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.LogSettingsRequest.SettingValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.LogSettingsRequest.SettingValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.LogSettingsRequest.SettingValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.LogSettingsRequest.SettingValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional bool bool_param = 1;
 * @return {boolean}
 */
proto.inference.LogSettingsRequest.SettingValue.prototype.getBoolParam = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.inference.LogSettingsRequest.SettingValue} returns this
 */
proto.inference.LogSettingsRequest.SettingValue.prototype.setBoolParam = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.inference.LogSettingsRequest.SettingValue.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.inference.LogSettingsRequest.SettingValue} returns this
 */
proto.inference.LogSettingsRequest.SettingValue.prototype.clearBoolParam = function() {
  return jspb.Message.setOneofField(this, 1, proto.inference.LogSettingsRequest.SettingValue.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.LogSettingsRequest.SettingValue.prototype.hasBoolParam = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 uint32_param = 2;
 * @return {number}
 */
proto.inference.LogSettingsRequest.SettingValue.prototype.getUint32Param = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.LogSettingsRequest.SettingValue} returns this
 */
proto.inference.LogSettingsRequest.SettingValue.prototype.setUint32Param = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.inference.LogSettingsRequest.SettingValue.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.inference.LogSettingsRequest.SettingValue} returns this
 */
proto.inference.LogSettingsRequest.SettingValue.prototype.clearUint32Param = function() {
  return jspb.Message.setOneofField(this, 2, proto.inference.LogSettingsRequest.SettingValue.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.LogSettingsRequest.SettingValue.prototype.hasUint32Param = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string string_param = 3;
 * @return {string}
 */
proto.inference.LogSettingsRequest.SettingValue.prototype.getStringParam = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.LogSettingsRequest.SettingValue} returns this
 */
proto.inference.LogSettingsRequest.SettingValue.prototype.setStringParam = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.inference.LogSettingsRequest.SettingValue.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.inference.LogSettingsRequest.SettingValue} returns this
 */
proto.inference.LogSettingsRequest.SettingValue.prototype.clearStringParam = function() {
  return jspb.Message.setOneofField(this, 3, proto.inference.LogSettingsRequest.SettingValue.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.LogSettingsRequest.SettingValue.prototype.hasStringParam = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * map<string, SettingValue> settings = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.inference.LogSettingsRequest.SettingValue>}
 */
proto.inference.LogSettingsRequest.prototype.getSettingsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.inference.LogSettingsRequest.SettingValue>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.inference.LogSettingsRequest.SettingValue));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.inference.LogSettingsRequest} returns this
 */
proto.inference.LogSettingsRequest.prototype.clearSettingsMap = function() {
  this.getSettingsMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.LogSettingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.LogSettingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.LogSettingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.LogSettingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    settingsMap: (f = msg.getSettingsMap()) ? f.toObject(includeInstance, proto.inference.LogSettingsResponse.SettingValue.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.LogSettingsResponse}
 */
proto.inference.LogSettingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.LogSettingsResponse;
  return proto.inference.LogSettingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.LogSettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.LogSettingsResponse}
 */
proto.inference.LogSettingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getSettingsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.inference.LogSettingsResponse.SettingValue.deserializeBinaryFromReader, "", new proto.inference.LogSettingsResponse.SettingValue());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.LogSettingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.LogSettingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.LogSettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.LogSettingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSettingsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.inference.LogSettingsResponse.SettingValue.serializeBinaryToWriter);
  }
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.inference.LogSettingsResponse.SettingValue.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.inference.LogSettingsResponse.SettingValue.ParameterChoiceCase = {
  PARAMETER_CHOICE_NOT_SET: 0,
  BOOL_PARAM: 1,
  UINT32_PARAM: 2,
  STRING_PARAM: 3
};

/**
 * @return {proto.inference.LogSettingsResponse.SettingValue.ParameterChoiceCase}
 */
proto.inference.LogSettingsResponse.SettingValue.prototype.getParameterChoiceCase = function() {
  return /** @type {proto.inference.LogSettingsResponse.SettingValue.ParameterChoiceCase} */(jspb.Message.computeOneofCase(this, proto.inference.LogSettingsResponse.SettingValue.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.inference.LogSettingsResponse.SettingValue.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.LogSettingsResponse.SettingValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.LogSettingsResponse.SettingValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.LogSettingsResponse.SettingValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    boolParam: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    uint32Param: jspb.Message.getFieldWithDefault(msg, 2, 0),
    stringParam: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.inference.LogSettingsResponse.SettingValue}
 */
proto.inference.LogSettingsResponse.SettingValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.LogSettingsResponse.SettingValue;
  return proto.inference.LogSettingsResponse.SettingValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.LogSettingsResponse.SettingValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.LogSettingsResponse.SettingValue}
 */
proto.inference.LogSettingsResponse.SettingValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBoolParam(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUint32Param(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringParam(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.inference.LogSettingsResponse.SettingValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.LogSettingsResponse.SettingValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.LogSettingsResponse.SettingValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.LogSettingsResponse.SettingValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional bool bool_param = 1;
 * @return {boolean}
 */
proto.inference.LogSettingsResponse.SettingValue.prototype.getBoolParam = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.inference.LogSettingsResponse.SettingValue} returns this
 */
proto.inference.LogSettingsResponse.SettingValue.prototype.setBoolParam = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.inference.LogSettingsResponse.SettingValue.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.inference.LogSettingsResponse.SettingValue} returns this
 */
proto.inference.LogSettingsResponse.SettingValue.prototype.clearBoolParam = function() {
  return jspb.Message.setOneofField(this, 1, proto.inference.LogSettingsResponse.SettingValue.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.LogSettingsResponse.SettingValue.prototype.hasBoolParam = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 uint32_param = 2;
 * @return {number}
 */
proto.inference.LogSettingsResponse.SettingValue.prototype.getUint32Param = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.LogSettingsResponse.SettingValue} returns this
 */
proto.inference.LogSettingsResponse.SettingValue.prototype.setUint32Param = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.inference.LogSettingsResponse.SettingValue.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.inference.LogSettingsResponse.SettingValue} returns this
 */
proto.inference.LogSettingsResponse.SettingValue.prototype.clearUint32Param = function() {
  return jspb.Message.setOneofField(this, 2, proto.inference.LogSettingsResponse.SettingValue.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.LogSettingsResponse.SettingValue.prototype.hasUint32Param = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string string_param = 3;
 * @return {string}
 */
proto.inference.LogSettingsResponse.SettingValue.prototype.getStringParam = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.LogSettingsResponse.SettingValue} returns this
 */
proto.inference.LogSettingsResponse.SettingValue.prototype.setStringParam = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.inference.LogSettingsResponse.SettingValue.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.inference.LogSettingsResponse.SettingValue} returns this
 */
proto.inference.LogSettingsResponse.SettingValue.prototype.clearStringParam = function() {
  return jspb.Message.setOneofField(this, 3, proto.inference.LogSettingsResponse.SettingValue.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.LogSettingsResponse.SettingValue.prototype.hasStringParam = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * map<string, SettingValue> settings = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.inference.LogSettingsResponse.SettingValue>}
 */
proto.inference.LogSettingsResponse.prototype.getSettingsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.inference.LogSettingsResponse.SettingValue>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.inference.LogSettingsResponse.SettingValue));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.inference.LogSettingsResponse} returns this
 */
proto.inference.LogSettingsResponse.prototype.clearSettingsMap = function() {
  this.getSettingsMap().clear();
  return this;};


goog.object.extend(exports, proto.inference);
