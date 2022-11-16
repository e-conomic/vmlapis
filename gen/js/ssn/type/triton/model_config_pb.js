// source: ssn/type/triton/model_config.proto
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

goog.exportSymbol('proto.inference.BatchInput', null, global);
goog.exportSymbol('proto.inference.BatchInput.Kind', null, global);
goog.exportSymbol('proto.inference.BatchOutput', null, global);
goog.exportSymbol('proto.inference.BatchOutput.Kind', null, global);
goog.exportSymbol('proto.inference.DataType', null, global);
goog.exportSymbol('proto.inference.ModelConfig', null, global);
goog.exportSymbol('proto.inference.ModelConfig.SchedulingChoiceCase', null, global);
goog.exportSymbol('proto.inference.ModelDynamicBatching', null, global);
goog.exportSymbol('proto.inference.ModelEnsembling', null, global);
goog.exportSymbol('proto.inference.ModelEnsembling.Step', null, global);
goog.exportSymbol('proto.inference.ModelInput', null, global);
goog.exportSymbol('proto.inference.ModelInput.Format', null, global);
goog.exportSymbol('proto.inference.ModelInstanceGroup', null, global);
goog.exportSymbol('proto.inference.ModelInstanceGroup.Kind', null, global);
goog.exportSymbol('proto.inference.ModelInstanceGroup.SecondaryDevice', null, global);
goog.exportSymbol('proto.inference.ModelInstanceGroup.SecondaryDevice.SecondaryDeviceKind', null, global);
goog.exportSymbol('proto.inference.ModelOperations', null, global);
goog.exportSymbol('proto.inference.ModelOptimizationPolicy', null, global);
goog.exportSymbol('proto.inference.ModelOptimizationPolicy.Cuda', null, global);
goog.exportSymbol('proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec', null, global);
goog.exportSymbol('proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.LowerBound', null, global);
goog.exportSymbol('proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape', null, global);
goog.exportSymbol('proto.inference.ModelOptimizationPolicy.ExecutionAccelerators', null, global);
goog.exportSymbol('proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator', null, global);
goog.exportSymbol('proto.inference.ModelOptimizationPolicy.Graph', null, global);
goog.exportSymbol('proto.inference.ModelOptimizationPolicy.ModelPriority', null, global);
goog.exportSymbol('proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer', null, global);
goog.exportSymbol('proto.inference.ModelOutput', null, global);
goog.exportSymbol('proto.inference.ModelParameter', null, global);
goog.exportSymbol('proto.inference.ModelQueuePolicy', null, global);
goog.exportSymbol('proto.inference.ModelQueuePolicy.TimeoutAction', null, global);
goog.exportSymbol('proto.inference.ModelRateLimiter', null, global);
goog.exportSymbol('proto.inference.ModelRateLimiter.Resource', null, global);
goog.exportSymbol('proto.inference.ModelRepositoryAgents', null, global);
goog.exportSymbol('proto.inference.ModelRepositoryAgents.Agent', null, global);
goog.exportSymbol('proto.inference.ModelResponseCache', null, global);
goog.exportSymbol('proto.inference.ModelSequenceBatching', null, global);
goog.exportSymbol('proto.inference.ModelSequenceBatching.Control', null, global);
goog.exportSymbol('proto.inference.ModelSequenceBatching.Control.Kind', null, global);
goog.exportSymbol('proto.inference.ModelSequenceBatching.ControlInput', null, global);
goog.exportSymbol('proto.inference.ModelSequenceBatching.InitialState', null, global);
goog.exportSymbol('proto.inference.ModelSequenceBatching.InitialState.StateDataCase', null, global);
goog.exportSymbol('proto.inference.ModelSequenceBatching.State', null, global);
goog.exportSymbol('proto.inference.ModelSequenceBatching.StrategyChoiceCase', null, global);
goog.exportSymbol('proto.inference.ModelSequenceBatching.StrategyDirect', null, global);
goog.exportSymbol('proto.inference.ModelSequenceBatching.StrategyOldest', null, global);
goog.exportSymbol('proto.inference.ModelTensorReshape', null, global);
goog.exportSymbol('proto.inference.ModelTransactionPolicy', null, global);
goog.exportSymbol('proto.inference.ModelVersionPolicy', null, global);
goog.exportSymbol('proto.inference.ModelVersionPolicy.All', null, global);
goog.exportSymbol('proto.inference.ModelVersionPolicy.Latest', null, global);
goog.exportSymbol('proto.inference.ModelVersionPolicy.PolicyChoiceCase', null, global);
goog.exportSymbol('proto.inference.ModelVersionPolicy.Specific', null, global);
goog.exportSymbol('proto.inference.ModelWarmup', null, global);
goog.exportSymbol('proto.inference.ModelWarmup.Input', null, global);
goog.exportSymbol('proto.inference.ModelWarmup.Input.InputDataTypeCase', null, global);
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
proto.inference.ModelRateLimiter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.inference.ModelRateLimiter.repeatedFields_, null);
};
goog.inherits(proto.inference.ModelRateLimiter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelRateLimiter.displayName = 'proto.inference.ModelRateLimiter';
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
proto.inference.ModelRateLimiter.Resource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.ModelRateLimiter.Resource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelRateLimiter.Resource.displayName = 'proto.inference.ModelRateLimiter.Resource';
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
proto.inference.ModelInstanceGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.inference.ModelInstanceGroup.repeatedFields_, null);
};
goog.inherits(proto.inference.ModelInstanceGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelInstanceGroup.displayName = 'proto.inference.ModelInstanceGroup';
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
proto.inference.ModelInstanceGroup.SecondaryDevice = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.ModelInstanceGroup.SecondaryDevice, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelInstanceGroup.SecondaryDevice.displayName = 'proto.inference.ModelInstanceGroup.SecondaryDevice';
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
proto.inference.ModelTensorReshape = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.inference.ModelTensorReshape.repeatedFields_, null);
};
goog.inherits(proto.inference.ModelTensorReshape, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelTensorReshape.displayName = 'proto.inference.ModelTensorReshape';
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
proto.inference.ModelInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.inference.ModelInput.repeatedFields_, null);
};
goog.inherits(proto.inference.ModelInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelInput.displayName = 'proto.inference.ModelInput';
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
proto.inference.ModelOutput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.inference.ModelOutput.repeatedFields_, null);
};
goog.inherits(proto.inference.ModelOutput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelOutput.displayName = 'proto.inference.ModelOutput';
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
proto.inference.BatchInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.inference.BatchInput.repeatedFields_, null);
};
goog.inherits(proto.inference.BatchInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.BatchInput.displayName = 'proto.inference.BatchInput';
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
proto.inference.BatchOutput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.inference.BatchOutput.repeatedFields_, null);
};
goog.inherits(proto.inference.BatchOutput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.BatchOutput.displayName = 'proto.inference.BatchOutput';
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
proto.inference.ModelVersionPolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.inference.ModelVersionPolicy.oneofGroups_);
};
goog.inherits(proto.inference.ModelVersionPolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelVersionPolicy.displayName = 'proto.inference.ModelVersionPolicy';
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
proto.inference.ModelVersionPolicy.Latest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.ModelVersionPolicy.Latest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelVersionPolicy.Latest.displayName = 'proto.inference.ModelVersionPolicy.Latest';
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
proto.inference.ModelVersionPolicy.All = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.ModelVersionPolicy.All, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelVersionPolicy.All.displayName = 'proto.inference.ModelVersionPolicy.All';
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
proto.inference.ModelVersionPolicy.Specific = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.inference.ModelVersionPolicy.Specific.repeatedFields_, null);
};
goog.inherits(proto.inference.ModelVersionPolicy.Specific, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelVersionPolicy.Specific.displayName = 'proto.inference.ModelVersionPolicy.Specific';
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
proto.inference.ModelOptimizationPolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.ModelOptimizationPolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelOptimizationPolicy.displayName = 'proto.inference.ModelOptimizationPolicy';
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
proto.inference.ModelOptimizationPolicy.Graph = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.ModelOptimizationPolicy.Graph, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelOptimizationPolicy.Graph.displayName = 'proto.inference.ModelOptimizationPolicy.Graph';
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
proto.inference.ModelOptimizationPolicy.Cuda = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.inference.ModelOptimizationPolicy.Cuda.repeatedFields_, null);
};
goog.inherits(proto.inference.ModelOptimizationPolicy.Cuda, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelOptimizationPolicy.Cuda.displayName = 'proto.inference.ModelOptimizationPolicy.Cuda';
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
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.displayName = 'proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec';
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
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape.repeatedFields_, null);
};
goog.inherits(proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape.displayName = 'proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape';
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
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.LowerBound = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.LowerBound, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.LowerBound.displayName = 'proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.LowerBound';
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
proto.inference.ModelOptimizationPolicy.ExecutionAccelerators = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.repeatedFields_, null);
};
goog.inherits(proto.inference.ModelOptimizationPolicy.ExecutionAccelerators, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.displayName = 'proto.inference.ModelOptimizationPolicy.ExecutionAccelerators';
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
proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator.displayName = 'proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator';
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
proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer.displayName = 'proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer';
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
proto.inference.ModelQueuePolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.ModelQueuePolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelQueuePolicy.displayName = 'proto.inference.ModelQueuePolicy';
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
proto.inference.ModelDynamicBatching = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.inference.ModelDynamicBatching.repeatedFields_, null);
};
goog.inherits(proto.inference.ModelDynamicBatching, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelDynamicBatching.displayName = 'proto.inference.ModelDynamicBatching';
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
proto.inference.ModelSequenceBatching = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.inference.ModelSequenceBatching.repeatedFields_, proto.inference.ModelSequenceBatching.oneofGroups_);
};
goog.inherits(proto.inference.ModelSequenceBatching, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelSequenceBatching.displayName = 'proto.inference.ModelSequenceBatching';
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
proto.inference.ModelSequenceBatching.Control = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.inference.ModelSequenceBatching.Control.repeatedFields_, null);
};
goog.inherits(proto.inference.ModelSequenceBatching.Control, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelSequenceBatching.Control.displayName = 'proto.inference.ModelSequenceBatching.Control';
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
proto.inference.ModelSequenceBatching.ControlInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.inference.ModelSequenceBatching.ControlInput.repeatedFields_, null);
};
goog.inherits(proto.inference.ModelSequenceBatching.ControlInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelSequenceBatching.ControlInput.displayName = 'proto.inference.ModelSequenceBatching.ControlInput';
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
proto.inference.ModelSequenceBatching.InitialState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.inference.ModelSequenceBatching.InitialState.repeatedFields_, proto.inference.ModelSequenceBatching.InitialState.oneofGroups_);
};
goog.inherits(proto.inference.ModelSequenceBatching.InitialState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelSequenceBatching.InitialState.displayName = 'proto.inference.ModelSequenceBatching.InitialState';
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
proto.inference.ModelSequenceBatching.State = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.inference.ModelSequenceBatching.State.repeatedFields_, null);
};
goog.inherits(proto.inference.ModelSequenceBatching.State, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelSequenceBatching.State.displayName = 'proto.inference.ModelSequenceBatching.State';
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
proto.inference.ModelSequenceBatching.StrategyDirect = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.ModelSequenceBatching.StrategyDirect, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelSequenceBatching.StrategyDirect.displayName = 'proto.inference.ModelSequenceBatching.StrategyDirect';
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
proto.inference.ModelSequenceBatching.StrategyOldest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.inference.ModelSequenceBatching.StrategyOldest.repeatedFields_, null);
};
goog.inherits(proto.inference.ModelSequenceBatching.StrategyOldest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelSequenceBatching.StrategyOldest.displayName = 'proto.inference.ModelSequenceBatching.StrategyOldest';
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
proto.inference.ModelEnsembling = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.inference.ModelEnsembling.repeatedFields_, null);
};
goog.inherits(proto.inference.ModelEnsembling, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelEnsembling.displayName = 'proto.inference.ModelEnsembling';
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
proto.inference.ModelEnsembling.Step = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.ModelEnsembling.Step, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelEnsembling.Step.displayName = 'proto.inference.ModelEnsembling.Step';
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
proto.inference.ModelParameter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.ModelParameter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelParameter.displayName = 'proto.inference.ModelParameter';
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
proto.inference.ModelWarmup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.ModelWarmup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelWarmup.displayName = 'proto.inference.ModelWarmup';
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
proto.inference.ModelWarmup.Input = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.inference.ModelWarmup.Input.repeatedFields_, proto.inference.ModelWarmup.Input.oneofGroups_);
};
goog.inherits(proto.inference.ModelWarmup.Input, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelWarmup.Input.displayName = 'proto.inference.ModelWarmup.Input';
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
proto.inference.ModelOperations = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.inference.ModelOperations.repeatedFields_, null);
};
goog.inherits(proto.inference.ModelOperations, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelOperations.displayName = 'proto.inference.ModelOperations';
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
proto.inference.ModelTransactionPolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.ModelTransactionPolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelTransactionPolicy.displayName = 'proto.inference.ModelTransactionPolicy';
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
proto.inference.ModelRepositoryAgents = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.inference.ModelRepositoryAgents.repeatedFields_, null);
};
goog.inherits(proto.inference.ModelRepositoryAgents, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelRepositoryAgents.displayName = 'proto.inference.ModelRepositoryAgents';
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
proto.inference.ModelRepositoryAgents.Agent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.ModelRepositoryAgents.Agent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelRepositoryAgents.Agent.displayName = 'proto.inference.ModelRepositoryAgents.Agent';
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
proto.inference.ModelResponseCache = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.inference.ModelResponseCache, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelResponseCache.displayName = 'proto.inference.ModelResponseCache';
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
proto.inference.ModelConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.inference.ModelConfig.repeatedFields_, proto.inference.ModelConfig.oneofGroups_);
};
goog.inherits(proto.inference.ModelConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.inference.ModelConfig.displayName = 'proto.inference.ModelConfig';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.inference.ModelRateLimiter.repeatedFields_ = [1];



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
proto.inference.ModelRateLimiter.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelRateLimiter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelRateLimiter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelRateLimiter.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourcesList: jspb.Message.toObjectList(msg.getResourcesList(),
    proto.inference.ModelRateLimiter.Resource.toObject, includeInstance),
    priority: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.inference.ModelRateLimiter}
 */
proto.inference.ModelRateLimiter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelRateLimiter;
  return proto.inference.ModelRateLimiter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelRateLimiter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelRateLimiter}
 */
proto.inference.ModelRateLimiter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.inference.ModelRateLimiter.Resource;
      reader.readMessage(value,proto.inference.ModelRateLimiter.Resource.deserializeBinaryFromReader);
      msg.addResources(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPriority(value);
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
proto.inference.ModelRateLimiter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelRateLimiter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelRateLimiter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelRateLimiter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourcesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.inference.ModelRateLimiter.Resource.serializeBinaryToWriter
    );
  }
  f = message.getPriority();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
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
proto.inference.ModelRateLimiter.Resource.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelRateLimiter.Resource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelRateLimiter.Resource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelRateLimiter.Resource.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    global: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    count: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.inference.ModelRateLimiter.Resource}
 */
proto.inference.ModelRateLimiter.Resource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelRateLimiter.Resource;
  return proto.inference.ModelRateLimiter.Resource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelRateLimiter.Resource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelRateLimiter.Resource}
 */
proto.inference.ModelRateLimiter.Resource.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGlobal(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCount(value);
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
proto.inference.ModelRateLimiter.Resource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelRateLimiter.Resource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelRateLimiter.Resource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelRateLimiter.Resource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGlobal();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.inference.ModelRateLimiter.Resource.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelRateLimiter.Resource} returns this
 */
proto.inference.ModelRateLimiter.Resource.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool global = 2;
 * @return {boolean}
 */
proto.inference.ModelRateLimiter.Resource.prototype.getGlobal = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.inference.ModelRateLimiter.Resource} returns this
 */
proto.inference.ModelRateLimiter.Resource.prototype.setGlobal = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional uint32 count = 3;
 * @return {number}
 */
proto.inference.ModelRateLimiter.Resource.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.ModelRateLimiter.Resource} returns this
 */
proto.inference.ModelRateLimiter.Resource.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated Resource resources = 1;
 * @return {!Array<!proto.inference.ModelRateLimiter.Resource>}
 */
proto.inference.ModelRateLimiter.prototype.getResourcesList = function() {
  return /** @type{!Array<!proto.inference.ModelRateLimiter.Resource>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.inference.ModelRateLimiter.Resource, 1));
};


/**
 * @param {!Array<!proto.inference.ModelRateLimiter.Resource>} value
 * @return {!proto.inference.ModelRateLimiter} returns this
*/
proto.inference.ModelRateLimiter.prototype.setResourcesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.inference.ModelRateLimiter.Resource=} opt_value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelRateLimiter.Resource}
 */
proto.inference.ModelRateLimiter.prototype.addResources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.inference.ModelRateLimiter.Resource, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelRateLimiter} returns this
 */
proto.inference.ModelRateLimiter.prototype.clearResourcesList = function() {
  return this.setResourcesList([]);
};


/**
 * optional uint32 priority = 2;
 * @return {number}
 */
proto.inference.ModelRateLimiter.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.ModelRateLimiter} returns this
 */
proto.inference.ModelRateLimiter.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.inference.ModelInstanceGroup.repeatedFields_ = [3,8,5];



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
proto.inference.ModelInstanceGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelInstanceGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelInstanceGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelInstanceGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    kind: jspb.Message.getFieldWithDefault(msg, 4, 0),
    count: jspb.Message.getFieldWithDefault(msg, 2, 0),
    rateLimiter: (f = msg.getRateLimiter()) && proto.inference.ModelRateLimiter.toObject(includeInstance, f),
    gpusList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    secondaryDevicesList: jspb.Message.toObjectList(msg.getSecondaryDevicesList(),
    proto.inference.ModelInstanceGroup.SecondaryDevice.toObject, includeInstance),
    profileList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    passive: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    hostPolicy: jspb.Message.getFieldWithDefault(msg, 9, "")
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
 * @return {!proto.inference.ModelInstanceGroup}
 */
proto.inference.ModelInstanceGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelInstanceGroup;
  return proto.inference.ModelInstanceGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelInstanceGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelInstanceGroup}
 */
proto.inference.ModelInstanceGroup.deserializeBinaryFromReader = function(msg, reader) {
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
    case 4:
      var value = /** @type {!proto.inference.ModelInstanceGroup.Kind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
      break;
    case 6:
      var value = new proto.inference.ModelRateLimiter;
      reader.readMessage(value,proto.inference.ModelRateLimiter.deserializeBinaryFromReader);
      msg.setRateLimiter(value);
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addGpus(values[i]);
      }
      break;
    case 8:
      var value = new proto.inference.ModelInstanceGroup.SecondaryDevice;
      reader.readMessage(value,proto.inference.ModelInstanceGroup.SecondaryDevice.deserializeBinaryFromReader);
      msg.addSecondaryDevices(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addProfile(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPassive(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostPolicy(value);
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
proto.inference.ModelInstanceGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelInstanceGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelInstanceGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelInstanceGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getRateLimiter();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.inference.ModelRateLimiter.serializeBinaryToWriter
    );
  }
  f = message.getGpusList();
  if (f.length > 0) {
    writer.writePackedInt32(
      3,
      f
    );
  }
  f = message.getSecondaryDevicesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.inference.ModelInstanceGroup.SecondaryDevice.serializeBinaryToWriter
    );
  }
  f = message.getProfileList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getPassive();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getHostPolicy();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.inference.ModelInstanceGroup.Kind = {
  KIND_AUTO: 0,
  KIND_GPU: 1,
  KIND_CPU: 2,
  KIND_MODEL: 3
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
proto.inference.ModelInstanceGroup.SecondaryDevice.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelInstanceGroup.SecondaryDevice.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelInstanceGroup.SecondaryDevice} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelInstanceGroup.SecondaryDevice.toObject = function(includeInstance, msg) {
  var f, obj = {
    kind: jspb.Message.getFieldWithDefault(msg, 1, 0),
    deviceId: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.inference.ModelInstanceGroup.SecondaryDevice}
 */
proto.inference.ModelInstanceGroup.SecondaryDevice.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelInstanceGroup.SecondaryDevice;
  return proto.inference.ModelInstanceGroup.SecondaryDevice.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelInstanceGroup.SecondaryDevice} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelInstanceGroup.SecondaryDevice}
 */
proto.inference.ModelInstanceGroup.SecondaryDevice.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.inference.ModelInstanceGroup.SecondaryDevice.SecondaryDeviceKind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDeviceId(value);
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
proto.inference.ModelInstanceGroup.SecondaryDevice.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelInstanceGroup.SecondaryDevice.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelInstanceGroup.SecondaryDevice} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelInstanceGroup.SecondaryDevice.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDeviceId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.inference.ModelInstanceGroup.SecondaryDevice.SecondaryDeviceKind = {
  KIND_NVDLA: 0
};

/**
 * optional SecondaryDeviceKind kind = 1;
 * @return {!proto.inference.ModelInstanceGroup.SecondaryDevice.SecondaryDeviceKind}
 */
proto.inference.ModelInstanceGroup.SecondaryDevice.prototype.getKind = function() {
  return /** @type {!proto.inference.ModelInstanceGroup.SecondaryDevice.SecondaryDeviceKind} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.inference.ModelInstanceGroup.SecondaryDevice.SecondaryDeviceKind} value
 * @return {!proto.inference.ModelInstanceGroup.SecondaryDevice} returns this
 */
proto.inference.ModelInstanceGroup.SecondaryDevice.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int64 device_id = 2;
 * @return {number}
 */
proto.inference.ModelInstanceGroup.SecondaryDevice.prototype.getDeviceId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.ModelInstanceGroup.SecondaryDevice} returns this
 */
proto.inference.ModelInstanceGroup.SecondaryDevice.prototype.setDeviceId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.inference.ModelInstanceGroup.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelInstanceGroup} returns this
 */
proto.inference.ModelInstanceGroup.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Kind kind = 4;
 * @return {!proto.inference.ModelInstanceGroup.Kind}
 */
proto.inference.ModelInstanceGroup.prototype.getKind = function() {
  return /** @type {!proto.inference.ModelInstanceGroup.Kind} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.inference.ModelInstanceGroup.Kind} value
 * @return {!proto.inference.ModelInstanceGroup} returns this
 */
proto.inference.ModelInstanceGroup.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional int32 count = 2;
 * @return {number}
 */
proto.inference.ModelInstanceGroup.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.ModelInstanceGroup} returns this
 */
proto.inference.ModelInstanceGroup.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional ModelRateLimiter rate_limiter = 6;
 * @return {?proto.inference.ModelRateLimiter}
 */
proto.inference.ModelInstanceGroup.prototype.getRateLimiter = function() {
  return /** @type{?proto.inference.ModelRateLimiter} */ (
    jspb.Message.getWrapperField(this, proto.inference.ModelRateLimiter, 6));
};


/**
 * @param {?proto.inference.ModelRateLimiter|undefined} value
 * @return {!proto.inference.ModelInstanceGroup} returns this
*/
proto.inference.ModelInstanceGroup.prototype.setRateLimiter = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.ModelInstanceGroup} returns this
 */
proto.inference.ModelInstanceGroup.prototype.clearRateLimiter = function() {
  return this.setRateLimiter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelInstanceGroup.prototype.hasRateLimiter = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated int32 gpus = 3;
 * @return {!Array<number>}
 */
proto.inference.ModelInstanceGroup.prototype.getGpusList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.inference.ModelInstanceGroup} returns this
 */
proto.inference.ModelInstanceGroup.prototype.setGpusList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelInstanceGroup} returns this
 */
proto.inference.ModelInstanceGroup.prototype.addGpus = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelInstanceGroup} returns this
 */
proto.inference.ModelInstanceGroup.prototype.clearGpusList = function() {
  return this.setGpusList([]);
};


/**
 * repeated SecondaryDevice secondary_devices = 8;
 * @return {!Array<!proto.inference.ModelInstanceGroup.SecondaryDevice>}
 */
proto.inference.ModelInstanceGroup.prototype.getSecondaryDevicesList = function() {
  return /** @type{!Array<!proto.inference.ModelInstanceGroup.SecondaryDevice>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.inference.ModelInstanceGroup.SecondaryDevice, 8));
};


/**
 * @param {!Array<!proto.inference.ModelInstanceGroup.SecondaryDevice>} value
 * @return {!proto.inference.ModelInstanceGroup} returns this
*/
proto.inference.ModelInstanceGroup.prototype.setSecondaryDevicesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.inference.ModelInstanceGroup.SecondaryDevice=} opt_value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelInstanceGroup.SecondaryDevice}
 */
proto.inference.ModelInstanceGroup.prototype.addSecondaryDevices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.inference.ModelInstanceGroup.SecondaryDevice, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelInstanceGroup} returns this
 */
proto.inference.ModelInstanceGroup.prototype.clearSecondaryDevicesList = function() {
  return this.setSecondaryDevicesList([]);
};


/**
 * repeated string profile = 5;
 * @return {!Array<string>}
 */
proto.inference.ModelInstanceGroup.prototype.getProfileList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.inference.ModelInstanceGroup} returns this
 */
proto.inference.ModelInstanceGroup.prototype.setProfileList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelInstanceGroup} returns this
 */
proto.inference.ModelInstanceGroup.prototype.addProfile = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelInstanceGroup} returns this
 */
proto.inference.ModelInstanceGroup.prototype.clearProfileList = function() {
  return this.setProfileList([]);
};


/**
 * optional bool passive = 7;
 * @return {boolean}
 */
proto.inference.ModelInstanceGroup.prototype.getPassive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.inference.ModelInstanceGroup} returns this
 */
proto.inference.ModelInstanceGroup.prototype.setPassive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional string host_policy = 9;
 * @return {string}
 */
proto.inference.ModelInstanceGroup.prototype.getHostPolicy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelInstanceGroup} returns this
 */
proto.inference.ModelInstanceGroup.prototype.setHostPolicy = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.inference.ModelTensorReshape.repeatedFields_ = [1];



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
proto.inference.ModelTensorReshape.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelTensorReshape.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelTensorReshape} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelTensorReshape.toObject = function(includeInstance, msg) {
  var f, obj = {
    shapeList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.inference.ModelTensorReshape}
 */
proto.inference.ModelTensorReshape.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelTensorReshape;
  return proto.inference.ModelTensorReshape.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelTensorReshape} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelTensorReshape}
 */
proto.inference.ModelTensorReshape.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
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
proto.inference.ModelTensorReshape.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelTensorReshape.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelTensorReshape} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelTensorReshape.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShapeList();
  if (f.length > 0) {
    writer.writePackedInt64(
      1,
      f
    );
  }
};


/**
 * repeated int64 shape = 1;
 * @return {!Array<number>}
 */
proto.inference.ModelTensorReshape.prototype.getShapeList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.inference.ModelTensorReshape} returns this
 */
proto.inference.ModelTensorReshape.prototype.setShapeList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelTensorReshape} returns this
 */
proto.inference.ModelTensorReshape.prototype.addShape = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelTensorReshape} returns this
 */
proto.inference.ModelTensorReshape.prototype.clearShapeList = function() {
  return this.setShapeList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.inference.ModelInput.repeatedFields_ = [4];



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
proto.inference.ModelInput.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dataType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    format: jspb.Message.getFieldWithDefault(msg, 3, 0),
    dimsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    reshape: (f = msg.getReshape()) && proto.inference.ModelTensorReshape.toObject(includeInstance, f),
    isShapeTensor: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    allowRaggedBatch: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    optional: jspb.Message.getBooleanFieldWithDefault(msg, 8, false)
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
 * @return {!proto.inference.ModelInput}
 */
proto.inference.ModelInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelInput;
  return proto.inference.ModelInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelInput}
 */
proto.inference.ModelInput.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.inference.DataType} */ (reader.readEnum());
      msg.setDataType(value);
      break;
    case 3:
      var value = /** @type {!proto.inference.ModelInput.Format} */ (reader.readEnum());
      msg.setFormat(value);
      break;
    case 4:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addDims(values[i]);
      }
      break;
    case 5:
      var value = new proto.inference.ModelTensorReshape;
      reader.readMessage(value,proto.inference.ModelTensorReshape.deserializeBinaryFromReader);
      msg.setReshape(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsShapeTensor(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowRaggedBatch(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOptional(value);
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
proto.inference.ModelInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDataType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getFormat();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getDimsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      4,
      f
    );
  }
  f = message.getReshape();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.inference.ModelTensorReshape.serializeBinaryToWriter
    );
  }
  f = message.getIsShapeTensor();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getAllowRaggedBatch();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getOptional();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.inference.ModelInput.Format = {
  FORMAT_NONE: 0,
  FORMAT_NHWC: 1,
  FORMAT_NCHW: 2
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.inference.ModelInput.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelInput} returns this
 */
proto.inference.ModelInput.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DataType data_type = 2;
 * @return {!proto.inference.DataType}
 */
proto.inference.ModelInput.prototype.getDataType = function() {
  return /** @type {!proto.inference.DataType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.inference.DataType} value
 * @return {!proto.inference.ModelInput} returns this
 */
proto.inference.ModelInput.prototype.setDataType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional Format format = 3;
 * @return {!proto.inference.ModelInput.Format}
 */
proto.inference.ModelInput.prototype.getFormat = function() {
  return /** @type {!proto.inference.ModelInput.Format} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.inference.ModelInput.Format} value
 * @return {!proto.inference.ModelInput} returns this
 */
proto.inference.ModelInput.prototype.setFormat = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated int64 dims = 4;
 * @return {!Array<number>}
 */
proto.inference.ModelInput.prototype.getDimsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.inference.ModelInput} returns this
 */
proto.inference.ModelInput.prototype.setDimsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelInput} returns this
 */
proto.inference.ModelInput.prototype.addDims = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelInput} returns this
 */
proto.inference.ModelInput.prototype.clearDimsList = function() {
  return this.setDimsList([]);
};


/**
 * optional ModelTensorReshape reshape = 5;
 * @return {?proto.inference.ModelTensorReshape}
 */
proto.inference.ModelInput.prototype.getReshape = function() {
  return /** @type{?proto.inference.ModelTensorReshape} */ (
    jspb.Message.getWrapperField(this, proto.inference.ModelTensorReshape, 5));
};


/**
 * @param {?proto.inference.ModelTensorReshape|undefined} value
 * @return {!proto.inference.ModelInput} returns this
*/
proto.inference.ModelInput.prototype.setReshape = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.ModelInput} returns this
 */
proto.inference.ModelInput.prototype.clearReshape = function() {
  return this.setReshape(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelInput.prototype.hasReshape = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool is_shape_tensor = 6;
 * @return {boolean}
 */
proto.inference.ModelInput.prototype.getIsShapeTensor = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.inference.ModelInput} returns this
 */
proto.inference.ModelInput.prototype.setIsShapeTensor = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool allow_ragged_batch = 7;
 * @return {boolean}
 */
proto.inference.ModelInput.prototype.getAllowRaggedBatch = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.inference.ModelInput} returns this
 */
proto.inference.ModelInput.prototype.setAllowRaggedBatch = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool optional = 8;
 * @return {boolean}
 */
proto.inference.ModelInput.prototype.getOptional = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.inference.ModelInput} returns this
 */
proto.inference.ModelInput.prototype.setOptional = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.inference.ModelOutput.repeatedFields_ = [3];



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
proto.inference.ModelOutput.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelOutput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelOutput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelOutput.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dataType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    dimsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    reshape: (f = msg.getReshape()) && proto.inference.ModelTensorReshape.toObject(includeInstance, f),
    labelFilename: jspb.Message.getFieldWithDefault(msg, 4, ""),
    isShapeTensor: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.inference.ModelOutput}
 */
proto.inference.ModelOutput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelOutput;
  return proto.inference.ModelOutput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelOutput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelOutput}
 */
proto.inference.ModelOutput.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.inference.DataType} */ (reader.readEnum());
      msg.setDataType(value);
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addDims(values[i]);
      }
      break;
    case 5:
      var value = new proto.inference.ModelTensorReshape;
      reader.readMessage(value,proto.inference.ModelTensorReshape.deserializeBinaryFromReader);
      msg.setReshape(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabelFilename(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsShapeTensor(value);
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
proto.inference.ModelOutput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelOutput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelOutput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelOutput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDataType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getDimsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      3,
      f
    );
  }
  f = message.getReshape();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.inference.ModelTensorReshape.serializeBinaryToWriter
    );
  }
  f = message.getLabelFilename();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIsShapeTensor();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.inference.ModelOutput.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelOutput} returns this
 */
proto.inference.ModelOutput.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DataType data_type = 2;
 * @return {!proto.inference.DataType}
 */
proto.inference.ModelOutput.prototype.getDataType = function() {
  return /** @type {!proto.inference.DataType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.inference.DataType} value
 * @return {!proto.inference.ModelOutput} returns this
 */
proto.inference.ModelOutput.prototype.setDataType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated int64 dims = 3;
 * @return {!Array<number>}
 */
proto.inference.ModelOutput.prototype.getDimsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.inference.ModelOutput} returns this
 */
proto.inference.ModelOutput.prototype.setDimsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelOutput} returns this
 */
proto.inference.ModelOutput.prototype.addDims = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelOutput} returns this
 */
proto.inference.ModelOutput.prototype.clearDimsList = function() {
  return this.setDimsList([]);
};


/**
 * optional ModelTensorReshape reshape = 5;
 * @return {?proto.inference.ModelTensorReshape}
 */
proto.inference.ModelOutput.prototype.getReshape = function() {
  return /** @type{?proto.inference.ModelTensorReshape} */ (
    jspb.Message.getWrapperField(this, proto.inference.ModelTensorReshape, 5));
};


/**
 * @param {?proto.inference.ModelTensorReshape|undefined} value
 * @return {!proto.inference.ModelOutput} returns this
*/
proto.inference.ModelOutput.prototype.setReshape = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.ModelOutput} returns this
 */
proto.inference.ModelOutput.prototype.clearReshape = function() {
  return this.setReshape(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelOutput.prototype.hasReshape = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string label_filename = 4;
 * @return {string}
 */
proto.inference.ModelOutput.prototype.getLabelFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelOutput} returns this
 */
proto.inference.ModelOutput.prototype.setLabelFilename = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool is_shape_tensor = 6;
 * @return {boolean}
 */
proto.inference.ModelOutput.prototype.getIsShapeTensor = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.inference.ModelOutput} returns this
 */
proto.inference.ModelOutput.prototype.setIsShapeTensor = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.inference.BatchInput.repeatedFields_ = [2,4];



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
proto.inference.BatchInput.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.BatchInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.BatchInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.BatchInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    kind: jspb.Message.getFieldWithDefault(msg, 1, 0),
    targetNameList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    dataType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    sourceInputList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.inference.BatchInput}
 */
proto.inference.BatchInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.BatchInput;
  return proto.inference.BatchInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.BatchInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.BatchInput}
 */
proto.inference.BatchInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.inference.BatchInput.Kind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addTargetName(value);
      break;
    case 3:
      var value = /** @type {!proto.inference.DataType} */ (reader.readEnum());
      msg.setDataType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addSourceInput(value);
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
proto.inference.BatchInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.BatchInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.BatchInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.BatchInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getTargetNameList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getDataType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getSourceInputList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.inference.BatchInput.Kind = {
  BATCH_ELEMENT_COUNT: 0,
  BATCH_ACCUMULATED_ELEMENT_COUNT: 1,
  BATCH_ACCUMULATED_ELEMENT_COUNT_WITH_ZERO: 2,
  BATCH_MAX_ELEMENT_COUNT_AS_SHAPE: 3,
  BATCH_ITEM_SHAPE: 4,
  BATCH_ITEM_SHAPE_FLATTEN: 5
};

/**
 * optional Kind kind = 1;
 * @return {!proto.inference.BatchInput.Kind}
 */
proto.inference.BatchInput.prototype.getKind = function() {
  return /** @type {!proto.inference.BatchInput.Kind} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.inference.BatchInput.Kind} value
 * @return {!proto.inference.BatchInput} returns this
 */
proto.inference.BatchInput.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated string target_name = 2;
 * @return {!Array<string>}
 */
proto.inference.BatchInput.prototype.getTargetNameList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.inference.BatchInput} returns this
 */
proto.inference.BatchInput.prototype.setTargetNameList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.inference.BatchInput} returns this
 */
proto.inference.BatchInput.prototype.addTargetName = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.BatchInput} returns this
 */
proto.inference.BatchInput.prototype.clearTargetNameList = function() {
  return this.setTargetNameList([]);
};


/**
 * optional DataType data_type = 3;
 * @return {!proto.inference.DataType}
 */
proto.inference.BatchInput.prototype.getDataType = function() {
  return /** @type {!proto.inference.DataType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.inference.DataType} value
 * @return {!proto.inference.BatchInput} returns this
 */
proto.inference.BatchInput.prototype.setDataType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated string source_input = 4;
 * @return {!Array<string>}
 */
proto.inference.BatchInput.prototype.getSourceInputList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.inference.BatchInput} returns this
 */
proto.inference.BatchInput.prototype.setSourceInputList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.inference.BatchInput} returns this
 */
proto.inference.BatchInput.prototype.addSourceInput = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.BatchInput} returns this
 */
proto.inference.BatchInput.prototype.clearSourceInputList = function() {
  return this.setSourceInputList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.inference.BatchOutput.repeatedFields_ = [1,3];



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
proto.inference.BatchOutput.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.BatchOutput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.BatchOutput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.BatchOutput.toObject = function(includeInstance, msg) {
  var f, obj = {
    targetNameList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    kind: jspb.Message.getFieldWithDefault(msg, 2, 0),
    sourceInputList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.inference.BatchOutput}
 */
proto.inference.BatchOutput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.BatchOutput;
  return proto.inference.BatchOutput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.BatchOutput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.BatchOutput}
 */
proto.inference.BatchOutput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addTargetName(value);
      break;
    case 2:
      var value = /** @type {!proto.inference.BatchOutput.Kind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addSourceInput(value);
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
proto.inference.BatchOutput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.BatchOutput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.BatchOutput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.BatchOutput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTargetNameList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getSourceInputList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.inference.BatchOutput.Kind = {
  BATCH_SCATTER_WITH_INPUT_SHAPE: 0
};

/**
 * repeated string target_name = 1;
 * @return {!Array<string>}
 */
proto.inference.BatchOutput.prototype.getTargetNameList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.inference.BatchOutput} returns this
 */
proto.inference.BatchOutput.prototype.setTargetNameList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.inference.BatchOutput} returns this
 */
proto.inference.BatchOutput.prototype.addTargetName = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.BatchOutput} returns this
 */
proto.inference.BatchOutput.prototype.clearTargetNameList = function() {
  return this.setTargetNameList([]);
};


/**
 * optional Kind kind = 2;
 * @return {!proto.inference.BatchOutput.Kind}
 */
proto.inference.BatchOutput.prototype.getKind = function() {
  return /** @type {!proto.inference.BatchOutput.Kind} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.inference.BatchOutput.Kind} value
 * @return {!proto.inference.BatchOutput} returns this
 */
proto.inference.BatchOutput.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated string source_input = 3;
 * @return {!Array<string>}
 */
proto.inference.BatchOutput.prototype.getSourceInputList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.inference.BatchOutput} returns this
 */
proto.inference.BatchOutput.prototype.setSourceInputList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.inference.BatchOutput} returns this
 */
proto.inference.BatchOutput.prototype.addSourceInput = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.BatchOutput} returns this
 */
proto.inference.BatchOutput.prototype.clearSourceInputList = function() {
  return this.setSourceInputList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.inference.ModelVersionPolicy.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.inference.ModelVersionPolicy.PolicyChoiceCase = {
  POLICY_CHOICE_NOT_SET: 0,
  LATEST: 1,
  ALL: 2,
  SPECIFIC: 3
};

/**
 * @return {proto.inference.ModelVersionPolicy.PolicyChoiceCase}
 */
proto.inference.ModelVersionPolicy.prototype.getPolicyChoiceCase = function() {
  return /** @type {proto.inference.ModelVersionPolicy.PolicyChoiceCase} */(jspb.Message.computeOneofCase(this, proto.inference.ModelVersionPolicy.oneofGroups_[0]));
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
proto.inference.ModelVersionPolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelVersionPolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelVersionPolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelVersionPolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    latest: (f = msg.getLatest()) && proto.inference.ModelVersionPolicy.Latest.toObject(includeInstance, f),
    all: (f = msg.getAll()) && proto.inference.ModelVersionPolicy.All.toObject(includeInstance, f),
    specific: (f = msg.getSpecific()) && proto.inference.ModelVersionPolicy.Specific.toObject(includeInstance, f)
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
 * @return {!proto.inference.ModelVersionPolicy}
 */
proto.inference.ModelVersionPolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelVersionPolicy;
  return proto.inference.ModelVersionPolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelVersionPolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelVersionPolicy}
 */
proto.inference.ModelVersionPolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.inference.ModelVersionPolicy.Latest;
      reader.readMessage(value,proto.inference.ModelVersionPolicy.Latest.deserializeBinaryFromReader);
      msg.setLatest(value);
      break;
    case 2:
      var value = new proto.inference.ModelVersionPolicy.All;
      reader.readMessage(value,proto.inference.ModelVersionPolicy.All.deserializeBinaryFromReader);
      msg.setAll(value);
      break;
    case 3:
      var value = new proto.inference.ModelVersionPolicy.Specific;
      reader.readMessage(value,proto.inference.ModelVersionPolicy.Specific.deserializeBinaryFromReader);
      msg.setSpecific(value);
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
proto.inference.ModelVersionPolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelVersionPolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelVersionPolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelVersionPolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLatest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.inference.ModelVersionPolicy.Latest.serializeBinaryToWriter
    );
  }
  f = message.getAll();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.inference.ModelVersionPolicy.All.serializeBinaryToWriter
    );
  }
  f = message.getSpecific();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.inference.ModelVersionPolicy.Specific.serializeBinaryToWriter
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
proto.inference.ModelVersionPolicy.Latest.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelVersionPolicy.Latest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelVersionPolicy.Latest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelVersionPolicy.Latest.toObject = function(includeInstance, msg) {
  var f, obj = {
    numVersions: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.inference.ModelVersionPolicy.Latest}
 */
proto.inference.ModelVersionPolicy.Latest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelVersionPolicy.Latest;
  return proto.inference.ModelVersionPolicy.Latest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelVersionPolicy.Latest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelVersionPolicy.Latest}
 */
proto.inference.ModelVersionPolicy.Latest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumVersions(value);
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
proto.inference.ModelVersionPolicy.Latest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelVersionPolicy.Latest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelVersionPolicy.Latest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelVersionPolicy.Latest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumVersions();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 num_versions = 1;
 * @return {number}
 */
proto.inference.ModelVersionPolicy.Latest.prototype.getNumVersions = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.ModelVersionPolicy.Latest} returns this
 */
proto.inference.ModelVersionPolicy.Latest.prototype.setNumVersions = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.inference.ModelVersionPolicy.All.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelVersionPolicy.All.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelVersionPolicy.All} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelVersionPolicy.All.toObject = function(includeInstance, msg) {
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
 * @return {!proto.inference.ModelVersionPolicy.All}
 */
proto.inference.ModelVersionPolicy.All.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelVersionPolicy.All;
  return proto.inference.ModelVersionPolicy.All.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelVersionPolicy.All} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelVersionPolicy.All}
 */
proto.inference.ModelVersionPolicy.All.deserializeBinaryFromReader = function(msg, reader) {
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
proto.inference.ModelVersionPolicy.All.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelVersionPolicy.All.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelVersionPolicy.All} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelVersionPolicy.All.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.inference.ModelVersionPolicy.Specific.repeatedFields_ = [1];



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
proto.inference.ModelVersionPolicy.Specific.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelVersionPolicy.Specific.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelVersionPolicy.Specific} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelVersionPolicy.Specific.toObject = function(includeInstance, msg) {
  var f, obj = {
    versionsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.inference.ModelVersionPolicy.Specific}
 */
proto.inference.ModelVersionPolicy.Specific.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelVersionPolicy.Specific;
  return proto.inference.ModelVersionPolicy.Specific.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelVersionPolicy.Specific} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelVersionPolicy.Specific}
 */
proto.inference.ModelVersionPolicy.Specific.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addVersions(values[i]);
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
proto.inference.ModelVersionPolicy.Specific.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelVersionPolicy.Specific.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelVersionPolicy.Specific} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelVersionPolicy.Specific.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersionsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      1,
      f
    );
  }
};


/**
 * repeated int64 versions = 1;
 * @return {!Array<number>}
 */
proto.inference.ModelVersionPolicy.Specific.prototype.getVersionsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.inference.ModelVersionPolicy.Specific} returns this
 */
proto.inference.ModelVersionPolicy.Specific.prototype.setVersionsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelVersionPolicy.Specific} returns this
 */
proto.inference.ModelVersionPolicy.Specific.prototype.addVersions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelVersionPolicy.Specific} returns this
 */
proto.inference.ModelVersionPolicy.Specific.prototype.clearVersionsList = function() {
  return this.setVersionsList([]);
};


/**
 * optional Latest latest = 1;
 * @return {?proto.inference.ModelVersionPolicy.Latest}
 */
proto.inference.ModelVersionPolicy.prototype.getLatest = function() {
  return /** @type{?proto.inference.ModelVersionPolicy.Latest} */ (
    jspb.Message.getWrapperField(this, proto.inference.ModelVersionPolicy.Latest, 1));
};


/**
 * @param {?proto.inference.ModelVersionPolicy.Latest|undefined} value
 * @return {!proto.inference.ModelVersionPolicy} returns this
*/
proto.inference.ModelVersionPolicy.prototype.setLatest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.inference.ModelVersionPolicy.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.ModelVersionPolicy} returns this
 */
proto.inference.ModelVersionPolicy.prototype.clearLatest = function() {
  return this.setLatest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelVersionPolicy.prototype.hasLatest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional All all = 2;
 * @return {?proto.inference.ModelVersionPolicy.All}
 */
proto.inference.ModelVersionPolicy.prototype.getAll = function() {
  return /** @type{?proto.inference.ModelVersionPolicy.All} */ (
    jspb.Message.getWrapperField(this, proto.inference.ModelVersionPolicy.All, 2));
};


/**
 * @param {?proto.inference.ModelVersionPolicy.All|undefined} value
 * @return {!proto.inference.ModelVersionPolicy} returns this
*/
proto.inference.ModelVersionPolicy.prototype.setAll = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.inference.ModelVersionPolicy.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.ModelVersionPolicy} returns this
 */
proto.inference.ModelVersionPolicy.prototype.clearAll = function() {
  return this.setAll(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelVersionPolicy.prototype.hasAll = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Specific specific = 3;
 * @return {?proto.inference.ModelVersionPolicy.Specific}
 */
proto.inference.ModelVersionPolicy.prototype.getSpecific = function() {
  return /** @type{?proto.inference.ModelVersionPolicy.Specific} */ (
    jspb.Message.getWrapperField(this, proto.inference.ModelVersionPolicy.Specific, 3));
};


/**
 * @param {?proto.inference.ModelVersionPolicy.Specific|undefined} value
 * @return {!proto.inference.ModelVersionPolicy} returns this
*/
proto.inference.ModelVersionPolicy.prototype.setSpecific = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.inference.ModelVersionPolicy.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.ModelVersionPolicy} returns this
 */
proto.inference.ModelVersionPolicy.prototype.clearSpecific = function() {
  return this.setSpecific(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelVersionPolicy.prototype.hasSpecific = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.inference.ModelOptimizationPolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelOptimizationPolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelOptimizationPolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelOptimizationPolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    graph: (f = msg.getGraph()) && proto.inference.ModelOptimizationPolicy.Graph.toObject(includeInstance, f),
    priority: jspb.Message.getFieldWithDefault(msg, 2, 0),
    cuda: (f = msg.getCuda()) && proto.inference.ModelOptimizationPolicy.Cuda.toObject(includeInstance, f),
    executionAccelerators: (f = msg.getExecutionAccelerators()) && proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.toObject(includeInstance, f),
    inputPinnedMemory: (f = msg.getInputPinnedMemory()) && proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer.toObject(includeInstance, f),
    outputPinnedMemory: (f = msg.getOutputPinnedMemory()) && proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer.toObject(includeInstance, f),
    gatherKernelBufferThreshold: jspb.Message.getFieldWithDefault(msg, 7, 0),
    eagerBatching: jspb.Message.getBooleanFieldWithDefault(msg, 8, false)
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
 * @return {!proto.inference.ModelOptimizationPolicy}
 */
proto.inference.ModelOptimizationPolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelOptimizationPolicy;
  return proto.inference.ModelOptimizationPolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelOptimizationPolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelOptimizationPolicy}
 */
proto.inference.ModelOptimizationPolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.inference.ModelOptimizationPolicy.Graph;
      reader.readMessage(value,proto.inference.ModelOptimizationPolicy.Graph.deserializeBinaryFromReader);
      msg.setGraph(value);
      break;
    case 2:
      var value = /** @type {!proto.inference.ModelOptimizationPolicy.ModelPriority} */ (reader.readEnum());
      msg.setPriority(value);
      break;
    case 3:
      var value = new proto.inference.ModelOptimizationPolicy.Cuda;
      reader.readMessage(value,proto.inference.ModelOptimizationPolicy.Cuda.deserializeBinaryFromReader);
      msg.setCuda(value);
      break;
    case 4:
      var value = new proto.inference.ModelOptimizationPolicy.ExecutionAccelerators;
      reader.readMessage(value,proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.deserializeBinaryFromReader);
      msg.setExecutionAccelerators(value);
      break;
    case 5:
      var value = new proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer;
      reader.readMessage(value,proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer.deserializeBinaryFromReader);
      msg.setInputPinnedMemory(value);
      break;
    case 6:
      var value = new proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer;
      reader.readMessage(value,proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer.deserializeBinaryFromReader);
      msg.setOutputPinnedMemory(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGatherKernelBufferThreshold(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEagerBatching(value);
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
proto.inference.ModelOptimizationPolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelOptimizationPolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelOptimizationPolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelOptimizationPolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGraph();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.inference.ModelOptimizationPolicy.Graph.serializeBinaryToWriter
    );
  }
  f = message.getPriority();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getCuda();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.inference.ModelOptimizationPolicy.Cuda.serializeBinaryToWriter
    );
  }
  f = message.getExecutionAccelerators();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.serializeBinaryToWriter
    );
  }
  f = message.getInputPinnedMemory();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer.serializeBinaryToWriter
    );
  }
  f = message.getOutputPinnedMemory();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer.serializeBinaryToWriter
    );
  }
  f = message.getGatherKernelBufferThreshold();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getEagerBatching();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.inference.ModelOptimizationPolicy.ModelPriority = {
  PRIORITY_DEFAULT: 0,
  PRIORITY_MAX: 1,
  PRIORITY_MIN: 2
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
proto.inference.ModelOptimizationPolicy.Graph.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelOptimizationPolicy.Graph.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelOptimizationPolicy.Graph} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelOptimizationPolicy.Graph.toObject = function(includeInstance, msg) {
  var f, obj = {
    level: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.inference.ModelOptimizationPolicy.Graph}
 */
proto.inference.ModelOptimizationPolicy.Graph.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelOptimizationPolicy.Graph;
  return proto.inference.ModelOptimizationPolicy.Graph.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelOptimizationPolicy.Graph} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelOptimizationPolicy.Graph}
 */
proto.inference.ModelOptimizationPolicy.Graph.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLevel(value);
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
proto.inference.ModelOptimizationPolicy.Graph.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelOptimizationPolicy.Graph.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelOptimizationPolicy.Graph} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelOptimizationPolicy.Graph.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLevel();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 level = 1;
 * @return {number}
 */
proto.inference.ModelOptimizationPolicy.Graph.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.ModelOptimizationPolicy.Graph} returns this
 */
proto.inference.ModelOptimizationPolicy.Graph.prototype.setLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.inference.ModelOptimizationPolicy.Cuda.repeatedFields_ = [3];



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
proto.inference.ModelOptimizationPolicy.Cuda.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelOptimizationPolicy.Cuda.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelOptimizationPolicy.Cuda} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelOptimizationPolicy.Cuda.toObject = function(includeInstance, msg) {
  var f, obj = {
    graphs: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    busyWaitEvents: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    graphSpecList: jspb.Message.toObjectList(msg.getGraphSpecList(),
    proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.toObject, includeInstance),
    outputCopyStream: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.inference.ModelOptimizationPolicy.Cuda}
 */
proto.inference.ModelOptimizationPolicy.Cuda.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelOptimizationPolicy.Cuda;
  return proto.inference.ModelOptimizationPolicy.Cuda.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelOptimizationPolicy.Cuda} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelOptimizationPolicy.Cuda}
 */
proto.inference.ModelOptimizationPolicy.Cuda.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGraphs(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBusyWaitEvents(value);
      break;
    case 3:
      var value = new proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec;
      reader.readMessage(value,proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.deserializeBinaryFromReader);
      msg.addGraphSpec(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOutputCopyStream(value);
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
proto.inference.ModelOptimizationPolicy.Cuda.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelOptimizationPolicy.Cuda.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelOptimizationPolicy.Cuda} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelOptimizationPolicy.Cuda.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGraphs();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getBusyWaitEvents();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getGraphSpecList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.serializeBinaryToWriter
    );
  }
  f = message.getOutputCopyStream();
  if (f) {
    writer.writeBool(
      4,
      f
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
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    batchSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
    inputMap: (f = msg.getInputMap()) ? f.toObject(includeInstance, proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape.toObject) : [],
    graphLowerBound: (f = msg.getGraphLowerBound()) && proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.LowerBound.toObject(includeInstance, f)
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
 * @return {!proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec}
 */
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec;
  return proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec}
 */
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBatchSize(value);
      break;
    case 2:
      var value = msg.getInputMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape.deserializeBinaryFromReader, "", new proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape());
         });
      break;
    case 3:
      var value = new proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.LowerBound;
      reader.readMessage(value,proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.LowerBound.deserializeBinaryFromReader);
      msg.setGraphLowerBound(value);
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
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBatchSize();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getInputMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape.serializeBinaryToWriter);
  }
  f = message.getGraphLowerBound();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.LowerBound.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape.repeatedFields_ = [1];



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
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape.toObject = function(includeInstance, msg) {
  var f, obj = {
    dimList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape}
 */
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape;
  return proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape}
 */
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addDim(values[i]);
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
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDimList();
  if (f.length > 0) {
    writer.writePackedInt64(
      1,
      f
    );
  }
};


/**
 * repeated int64 dim = 1;
 * @return {!Array<number>}
 */
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape.prototype.getDimList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape} returns this
 */
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape.prototype.setDimList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape} returns this
 */
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape.prototype.addDim = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape} returns this
 */
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape.prototype.clearDimList = function() {
  return this.setDimList([]);
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
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.LowerBound.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.LowerBound.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.LowerBound} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.LowerBound.toObject = function(includeInstance, msg) {
  var f, obj = {
    batchSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
    inputMap: (f = msg.getInputMap()) ? f.toObject(includeInstance, proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape.toObject) : []
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
 * @return {!proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.LowerBound}
 */
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.LowerBound.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.LowerBound;
  return proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.LowerBound.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.LowerBound} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.LowerBound}
 */
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.LowerBound.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBatchSize(value);
      break;
    case 2:
      var value = msg.getInputMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape.deserializeBinaryFromReader, "", new proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape());
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
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.LowerBound.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.LowerBound.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.LowerBound} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.LowerBound.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBatchSize();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getInputMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape.serializeBinaryToWriter);
  }
};


/**
 * optional int32 batch_size = 1;
 * @return {number}
 */
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.LowerBound.prototype.getBatchSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.LowerBound} returns this
 */
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.LowerBound.prototype.setBatchSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * map<string, Shape> input = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape>}
 */
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.LowerBound.prototype.getInputMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.LowerBound} returns this
 */
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.LowerBound.prototype.clearInputMap = function() {
  this.getInputMap().clear();
  return this;};


/**
 * optional int32 batch_size = 1;
 * @return {number}
 */
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.prototype.getBatchSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec} returns this
 */
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.prototype.setBatchSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * map<string, Shape> input = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape>}
 */
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.prototype.getInputMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.Shape));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec} returns this
 */
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.prototype.clearInputMap = function() {
  this.getInputMap().clear();
  return this;};


/**
 * optional LowerBound graph_lower_bound = 3;
 * @return {?proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.LowerBound}
 */
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.prototype.getGraphLowerBound = function() {
  return /** @type{?proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.LowerBound} */ (
    jspb.Message.getWrapperField(this, proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.LowerBound, 3));
};


/**
 * @param {?proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.LowerBound|undefined} value
 * @return {!proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec} returns this
*/
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.prototype.setGraphLowerBound = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec} returns this
 */
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.prototype.clearGraphLowerBound = function() {
  return this.setGraphLowerBound(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec.prototype.hasGraphLowerBound = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool graphs = 1;
 * @return {boolean}
 */
proto.inference.ModelOptimizationPolicy.Cuda.prototype.getGraphs = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.inference.ModelOptimizationPolicy.Cuda} returns this
 */
proto.inference.ModelOptimizationPolicy.Cuda.prototype.setGraphs = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool busy_wait_events = 2;
 * @return {boolean}
 */
proto.inference.ModelOptimizationPolicy.Cuda.prototype.getBusyWaitEvents = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.inference.ModelOptimizationPolicy.Cuda} returns this
 */
proto.inference.ModelOptimizationPolicy.Cuda.prototype.setBusyWaitEvents = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * repeated GraphSpec graph_spec = 3;
 * @return {!Array<!proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec>}
 */
proto.inference.ModelOptimizationPolicy.Cuda.prototype.getGraphSpecList = function() {
  return /** @type{!Array<!proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec, 3));
};


/**
 * @param {!Array<!proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec>} value
 * @return {!proto.inference.ModelOptimizationPolicy.Cuda} returns this
*/
proto.inference.ModelOptimizationPolicy.Cuda.prototype.setGraphSpecList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec}
 */
proto.inference.ModelOptimizationPolicy.Cuda.prototype.addGraphSpec = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.inference.ModelOptimizationPolicy.Cuda.GraphSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelOptimizationPolicy.Cuda} returns this
 */
proto.inference.ModelOptimizationPolicy.Cuda.prototype.clearGraphSpecList = function() {
  return this.setGraphSpecList([]);
};


/**
 * optional bool output_copy_stream = 4;
 * @return {boolean}
 */
proto.inference.ModelOptimizationPolicy.Cuda.prototype.getOutputCopyStream = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.inference.ModelOptimizationPolicy.Cuda} returns this
 */
proto.inference.ModelOptimizationPolicy.Cuda.prototype.setOutputCopyStream = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.repeatedFields_ = [1,2];



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
proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelOptimizationPolicy.ExecutionAccelerators} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.toObject = function(includeInstance, msg) {
  var f, obj = {
    gpuExecutionAcceleratorList: jspb.Message.toObjectList(msg.getGpuExecutionAcceleratorList(),
    proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator.toObject, includeInstance),
    cpuExecutionAcceleratorList: jspb.Message.toObjectList(msg.getCpuExecutionAcceleratorList(),
    proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator.toObject, includeInstance)
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
 * @return {!proto.inference.ModelOptimizationPolicy.ExecutionAccelerators}
 */
proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelOptimizationPolicy.ExecutionAccelerators;
  return proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelOptimizationPolicy.ExecutionAccelerators} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelOptimizationPolicy.ExecutionAccelerators}
 */
proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator;
      reader.readMessage(value,proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator.deserializeBinaryFromReader);
      msg.addGpuExecutionAccelerator(value);
      break;
    case 2:
      var value = new proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator;
      reader.readMessage(value,proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator.deserializeBinaryFromReader);
      msg.addCpuExecutionAccelerator(value);
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
proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelOptimizationPolicy.ExecutionAccelerators} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGpuExecutionAcceleratorList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator.serializeBinaryToWriter
    );
  }
  f = message.getCpuExecutionAcceleratorList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator.serializeBinaryToWriter
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
proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    parametersMap: (f = msg.getParametersMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator}
 */
proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator;
  return proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator}
 */
proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator.deserializeBinaryFromReader = function(msg, reader) {
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
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
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
proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator.serializeBinaryToWriter = function(message, writer) {
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
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator} returns this
 */
proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, string> parameters = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator.prototype.getParametersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator} returns this
 */
proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator.prototype.clearParametersMap = function() {
  this.getParametersMap().clear();
  return this;};


/**
 * repeated Accelerator gpu_execution_accelerator = 1;
 * @return {!Array<!proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator>}
 */
proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.prototype.getGpuExecutionAcceleratorList = function() {
  return /** @type{!Array<!proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator, 1));
};


/**
 * @param {!Array<!proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator>} value
 * @return {!proto.inference.ModelOptimizationPolicy.ExecutionAccelerators} returns this
*/
proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.prototype.setGpuExecutionAcceleratorList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator=} opt_value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator}
 */
proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.prototype.addGpuExecutionAccelerator = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelOptimizationPolicy.ExecutionAccelerators} returns this
 */
proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.prototype.clearGpuExecutionAcceleratorList = function() {
  return this.setGpuExecutionAcceleratorList([]);
};


/**
 * repeated Accelerator cpu_execution_accelerator = 2;
 * @return {!Array<!proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator>}
 */
proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.prototype.getCpuExecutionAcceleratorList = function() {
  return /** @type{!Array<!proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator, 2));
};


/**
 * @param {!Array<!proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator>} value
 * @return {!proto.inference.ModelOptimizationPolicy.ExecutionAccelerators} returns this
*/
proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.prototype.setCpuExecutionAcceleratorList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator=} opt_value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator}
 */
proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.prototype.addCpuExecutionAccelerator = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.Accelerator, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelOptimizationPolicy.ExecutionAccelerators} returns this
 */
proto.inference.ModelOptimizationPolicy.ExecutionAccelerators.prototype.clearCpuExecutionAcceleratorList = function() {
  return this.setCpuExecutionAcceleratorList([]);
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
proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer.toObject = function(includeInstance, msg) {
  var f, obj = {
    enable: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer}
 */
proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer;
  return proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer}
 */
proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnable(value);
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
proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnable();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool enable = 1;
 * @return {boolean}
 */
proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer.prototype.getEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer} returns this
 */
proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer.prototype.setEnable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional Graph graph = 1;
 * @return {?proto.inference.ModelOptimizationPolicy.Graph}
 */
proto.inference.ModelOptimizationPolicy.prototype.getGraph = function() {
  return /** @type{?proto.inference.ModelOptimizationPolicy.Graph} */ (
    jspb.Message.getWrapperField(this, proto.inference.ModelOptimizationPolicy.Graph, 1));
};


/**
 * @param {?proto.inference.ModelOptimizationPolicy.Graph|undefined} value
 * @return {!proto.inference.ModelOptimizationPolicy} returns this
*/
proto.inference.ModelOptimizationPolicy.prototype.setGraph = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.ModelOptimizationPolicy} returns this
 */
proto.inference.ModelOptimizationPolicy.prototype.clearGraph = function() {
  return this.setGraph(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelOptimizationPolicy.prototype.hasGraph = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ModelPriority priority = 2;
 * @return {!proto.inference.ModelOptimizationPolicy.ModelPriority}
 */
proto.inference.ModelOptimizationPolicy.prototype.getPriority = function() {
  return /** @type {!proto.inference.ModelOptimizationPolicy.ModelPriority} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.inference.ModelOptimizationPolicy.ModelPriority} value
 * @return {!proto.inference.ModelOptimizationPolicy} returns this
 */
proto.inference.ModelOptimizationPolicy.prototype.setPriority = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional Cuda cuda = 3;
 * @return {?proto.inference.ModelOptimizationPolicy.Cuda}
 */
proto.inference.ModelOptimizationPolicy.prototype.getCuda = function() {
  return /** @type{?proto.inference.ModelOptimizationPolicy.Cuda} */ (
    jspb.Message.getWrapperField(this, proto.inference.ModelOptimizationPolicy.Cuda, 3));
};


/**
 * @param {?proto.inference.ModelOptimizationPolicy.Cuda|undefined} value
 * @return {!proto.inference.ModelOptimizationPolicy} returns this
*/
proto.inference.ModelOptimizationPolicy.prototype.setCuda = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.ModelOptimizationPolicy} returns this
 */
proto.inference.ModelOptimizationPolicy.prototype.clearCuda = function() {
  return this.setCuda(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelOptimizationPolicy.prototype.hasCuda = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ExecutionAccelerators execution_accelerators = 4;
 * @return {?proto.inference.ModelOptimizationPolicy.ExecutionAccelerators}
 */
proto.inference.ModelOptimizationPolicy.prototype.getExecutionAccelerators = function() {
  return /** @type{?proto.inference.ModelOptimizationPolicy.ExecutionAccelerators} */ (
    jspb.Message.getWrapperField(this, proto.inference.ModelOptimizationPolicy.ExecutionAccelerators, 4));
};


/**
 * @param {?proto.inference.ModelOptimizationPolicy.ExecutionAccelerators|undefined} value
 * @return {!proto.inference.ModelOptimizationPolicy} returns this
*/
proto.inference.ModelOptimizationPolicy.prototype.setExecutionAccelerators = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.ModelOptimizationPolicy} returns this
 */
proto.inference.ModelOptimizationPolicy.prototype.clearExecutionAccelerators = function() {
  return this.setExecutionAccelerators(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelOptimizationPolicy.prototype.hasExecutionAccelerators = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional PinnedMemoryBuffer input_pinned_memory = 5;
 * @return {?proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer}
 */
proto.inference.ModelOptimizationPolicy.prototype.getInputPinnedMemory = function() {
  return /** @type{?proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer} */ (
    jspb.Message.getWrapperField(this, proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer, 5));
};


/**
 * @param {?proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer|undefined} value
 * @return {!proto.inference.ModelOptimizationPolicy} returns this
*/
proto.inference.ModelOptimizationPolicy.prototype.setInputPinnedMemory = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.ModelOptimizationPolicy} returns this
 */
proto.inference.ModelOptimizationPolicy.prototype.clearInputPinnedMemory = function() {
  return this.setInputPinnedMemory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelOptimizationPolicy.prototype.hasInputPinnedMemory = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional PinnedMemoryBuffer output_pinned_memory = 6;
 * @return {?proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer}
 */
proto.inference.ModelOptimizationPolicy.prototype.getOutputPinnedMemory = function() {
  return /** @type{?proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer} */ (
    jspb.Message.getWrapperField(this, proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer, 6));
};


/**
 * @param {?proto.inference.ModelOptimizationPolicy.PinnedMemoryBuffer|undefined} value
 * @return {!proto.inference.ModelOptimizationPolicy} returns this
*/
proto.inference.ModelOptimizationPolicy.prototype.setOutputPinnedMemory = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.ModelOptimizationPolicy} returns this
 */
proto.inference.ModelOptimizationPolicy.prototype.clearOutputPinnedMemory = function() {
  return this.setOutputPinnedMemory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelOptimizationPolicy.prototype.hasOutputPinnedMemory = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 gather_kernel_buffer_threshold = 7;
 * @return {number}
 */
proto.inference.ModelOptimizationPolicy.prototype.getGatherKernelBufferThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.ModelOptimizationPolicy} returns this
 */
proto.inference.ModelOptimizationPolicy.prototype.setGatherKernelBufferThreshold = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional bool eager_batching = 8;
 * @return {boolean}
 */
proto.inference.ModelOptimizationPolicy.prototype.getEagerBatching = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.inference.ModelOptimizationPolicy} returns this
 */
proto.inference.ModelOptimizationPolicy.prototype.setEagerBatching = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
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
proto.inference.ModelQueuePolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelQueuePolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelQueuePolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelQueuePolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    timeoutAction: jspb.Message.getFieldWithDefault(msg, 1, 0),
    defaultTimeoutMicroseconds: jspb.Message.getFieldWithDefault(msg, 2, 0),
    allowTimeoutOverride: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    maxQueueSize: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.inference.ModelQueuePolicy}
 */
proto.inference.ModelQueuePolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelQueuePolicy;
  return proto.inference.ModelQueuePolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelQueuePolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelQueuePolicy}
 */
proto.inference.ModelQueuePolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.inference.ModelQueuePolicy.TimeoutAction} */ (reader.readEnum());
      msg.setTimeoutAction(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDefaultTimeoutMicroseconds(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowTimeoutOverride(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxQueueSize(value);
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
proto.inference.ModelQueuePolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelQueuePolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelQueuePolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelQueuePolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimeoutAction();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDefaultTimeoutMicroseconds();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getAllowTimeoutOverride();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getMaxQueueSize();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.inference.ModelQueuePolicy.TimeoutAction = {
  REJECT: 0,
  DELAY: 1
};

/**
 * optional TimeoutAction timeout_action = 1;
 * @return {!proto.inference.ModelQueuePolicy.TimeoutAction}
 */
proto.inference.ModelQueuePolicy.prototype.getTimeoutAction = function() {
  return /** @type {!proto.inference.ModelQueuePolicy.TimeoutAction} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.inference.ModelQueuePolicy.TimeoutAction} value
 * @return {!proto.inference.ModelQueuePolicy} returns this
 */
proto.inference.ModelQueuePolicy.prototype.setTimeoutAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint64 default_timeout_microseconds = 2;
 * @return {number}
 */
proto.inference.ModelQueuePolicy.prototype.getDefaultTimeoutMicroseconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.ModelQueuePolicy} returns this
 */
proto.inference.ModelQueuePolicy.prototype.setDefaultTimeoutMicroseconds = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool allow_timeout_override = 3;
 * @return {boolean}
 */
proto.inference.ModelQueuePolicy.prototype.getAllowTimeoutOverride = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.inference.ModelQueuePolicy} returns this
 */
proto.inference.ModelQueuePolicy.prototype.setAllowTimeoutOverride = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional uint32 max_queue_size = 4;
 * @return {number}
 */
proto.inference.ModelQueuePolicy.prototype.getMaxQueueSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.ModelQueuePolicy} returns this
 */
proto.inference.ModelQueuePolicy.prototype.setMaxQueueSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.inference.ModelDynamicBatching.repeatedFields_ = [1];



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
proto.inference.ModelDynamicBatching.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelDynamicBatching.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelDynamicBatching} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelDynamicBatching.toObject = function(includeInstance, msg) {
  var f, obj = {
    preferredBatchSizeList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    maxQueueDelayMicroseconds: jspb.Message.getFieldWithDefault(msg, 2, 0),
    preserveOrdering: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    priorityLevels: jspb.Message.getFieldWithDefault(msg, 4, 0),
    defaultPriorityLevel: jspb.Message.getFieldWithDefault(msg, 5, 0),
    defaultQueuePolicy: (f = msg.getDefaultQueuePolicy()) && proto.inference.ModelQueuePolicy.toObject(includeInstance, f),
    priorityQueuePolicyMap: (f = msg.getPriorityQueuePolicyMap()) ? f.toObject(includeInstance, proto.inference.ModelQueuePolicy.toObject) : []
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
 * @return {!proto.inference.ModelDynamicBatching}
 */
proto.inference.ModelDynamicBatching.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelDynamicBatching;
  return proto.inference.ModelDynamicBatching.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelDynamicBatching} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelDynamicBatching}
 */
proto.inference.ModelDynamicBatching.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPreferredBatchSize(values[i]);
      }
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxQueueDelayMicroseconds(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPreserveOrdering(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPriorityLevels(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDefaultPriorityLevel(value);
      break;
    case 6:
      var value = new proto.inference.ModelQueuePolicy;
      reader.readMessage(value,proto.inference.ModelQueuePolicy.deserializeBinaryFromReader);
      msg.setDefaultQueuePolicy(value);
      break;
    case 7:
      var value = msg.getPriorityQueuePolicyMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint32, jspb.BinaryReader.prototype.readMessage, proto.inference.ModelQueuePolicy.deserializeBinaryFromReader, 0, new proto.inference.ModelQueuePolicy());
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
proto.inference.ModelDynamicBatching.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelDynamicBatching.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelDynamicBatching} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelDynamicBatching.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPreferredBatchSizeList();
  if (f.length > 0) {
    writer.writePackedInt32(
      1,
      f
    );
  }
  f = message.getMaxQueueDelayMicroseconds();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getPreserveOrdering();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getPriorityLevels();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getDefaultPriorityLevel();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getDefaultQueuePolicy();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.inference.ModelQueuePolicy.serializeBinaryToWriter
    );
  }
  f = message.getPriorityQueuePolicyMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeUint32, jspb.BinaryWriter.prototype.writeMessage, proto.inference.ModelQueuePolicy.serializeBinaryToWriter);
  }
};


/**
 * repeated int32 preferred_batch_size = 1;
 * @return {!Array<number>}
 */
proto.inference.ModelDynamicBatching.prototype.getPreferredBatchSizeList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.inference.ModelDynamicBatching} returns this
 */
proto.inference.ModelDynamicBatching.prototype.setPreferredBatchSizeList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelDynamicBatching} returns this
 */
proto.inference.ModelDynamicBatching.prototype.addPreferredBatchSize = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelDynamicBatching} returns this
 */
proto.inference.ModelDynamicBatching.prototype.clearPreferredBatchSizeList = function() {
  return this.setPreferredBatchSizeList([]);
};


/**
 * optional uint64 max_queue_delay_microseconds = 2;
 * @return {number}
 */
proto.inference.ModelDynamicBatching.prototype.getMaxQueueDelayMicroseconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.ModelDynamicBatching} returns this
 */
proto.inference.ModelDynamicBatching.prototype.setMaxQueueDelayMicroseconds = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool preserve_ordering = 3;
 * @return {boolean}
 */
proto.inference.ModelDynamicBatching.prototype.getPreserveOrdering = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.inference.ModelDynamicBatching} returns this
 */
proto.inference.ModelDynamicBatching.prototype.setPreserveOrdering = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional uint32 priority_levels = 4;
 * @return {number}
 */
proto.inference.ModelDynamicBatching.prototype.getPriorityLevels = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.ModelDynamicBatching} returns this
 */
proto.inference.ModelDynamicBatching.prototype.setPriorityLevels = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 default_priority_level = 5;
 * @return {number}
 */
proto.inference.ModelDynamicBatching.prototype.getDefaultPriorityLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.ModelDynamicBatching} returns this
 */
proto.inference.ModelDynamicBatching.prototype.setDefaultPriorityLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional ModelQueuePolicy default_queue_policy = 6;
 * @return {?proto.inference.ModelQueuePolicy}
 */
proto.inference.ModelDynamicBatching.prototype.getDefaultQueuePolicy = function() {
  return /** @type{?proto.inference.ModelQueuePolicy} */ (
    jspb.Message.getWrapperField(this, proto.inference.ModelQueuePolicy, 6));
};


/**
 * @param {?proto.inference.ModelQueuePolicy|undefined} value
 * @return {!proto.inference.ModelDynamicBatching} returns this
*/
proto.inference.ModelDynamicBatching.prototype.setDefaultQueuePolicy = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.ModelDynamicBatching} returns this
 */
proto.inference.ModelDynamicBatching.prototype.clearDefaultQueuePolicy = function() {
  return this.setDefaultQueuePolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelDynamicBatching.prototype.hasDefaultQueuePolicy = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * map<uint32, ModelQueuePolicy> priority_queue_policy = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.inference.ModelQueuePolicy>}
 */
proto.inference.ModelDynamicBatching.prototype.getPriorityQueuePolicyMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.inference.ModelQueuePolicy>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      proto.inference.ModelQueuePolicy));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.inference.ModelDynamicBatching} returns this
 */
proto.inference.ModelDynamicBatching.prototype.clearPriorityQueuePolicyMap = function() {
  this.getPriorityQueuePolicyMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.inference.ModelSequenceBatching.repeatedFields_ = [2,5];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.inference.ModelSequenceBatching.oneofGroups_ = [[3,4]];

/**
 * @enum {number}
 */
proto.inference.ModelSequenceBatching.StrategyChoiceCase = {
  STRATEGY_CHOICE_NOT_SET: 0,
  DIRECT: 3,
  OLDEST: 4
};

/**
 * @return {proto.inference.ModelSequenceBatching.StrategyChoiceCase}
 */
proto.inference.ModelSequenceBatching.prototype.getStrategyChoiceCase = function() {
  return /** @type {proto.inference.ModelSequenceBatching.StrategyChoiceCase} */(jspb.Message.computeOneofCase(this, proto.inference.ModelSequenceBatching.oneofGroups_[0]));
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
proto.inference.ModelSequenceBatching.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelSequenceBatching.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelSequenceBatching} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelSequenceBatching.toObject = function(includeInstance, msg) {
  var f, obj = {
    direct: (f = msg.getDirect()) && proto.inference.ModelSequenceBatching.StrategyDirect.toObject(includeInstance, f),
    oldest: (f = msg.getOldest()) && proto.inference.ModelSequenceBatching.StrategyOldest.toObject(includeInstance, f),
    maxSequenceIdleMicroseconds: jspb.Message.getFieldWithDefault(msg, 1, 0),
    controlInputList: jspb.Message.toObjectList(msg.getControlInputList(),
    proto.inference.ModelSequenceBatching.ControlInput.toObject, includeInstance),
    stateList: jspb.Message.toObjectList(msg.getStateList(),
    proto.inference.ModelSequenceBatching.State.toObject, includeInstance)
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
 * @return {!proto.inference.ModelSequenceBatching}
 */
proto.inference.ModelSequenceBatching.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelSequenceBatching;
  return proto.inference.ModelSequenceBatching.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelSequenceBatching} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelSequenceBatching}
 */
proto.inference.ModelSequenceBatching.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new proto.inference.ModelSequenceBatching.StrategyDirect;
      reader.readMessage(value,proto.inference.ModelSequenceBatching.StrategyDirect.deserializeBinaryFromReader);
      msg.setDirect(value);
      break;
    case 4:
      var value = new proto.inference.ModelSequenceBatching.StrategyOldest;
      reader.readMessage(value,proto.inference.ModelSequenceBatching.StrategyOldest.deserializeBinaryFromReader);
      msg.setOldest(value);
      break;
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxSequenceIdleMicroseconds(value);
      break;
    case 2:
      var value = new proto.inference.ModelSequenceBatching.ControlInput;
      reader.readMessage(value,proto.inference.ModelSequenceBatching.ControlInput.deserializeBinaryFromReader);
      msg.addControlInput(value);
      break;
    case 5:
      var value = new proto.inference.ModelSequenceBatching.State;
      reader.readMessage(value,proto.inference.ModelSequenceBatching.State.deserializeBinaryFromReader);
      msg.addState(value);
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
proto.inference.ModelSequenceBatching.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelSequenceBatching.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelSequenceBatching} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelSequenceBatching.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDirect();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.inference.ModelSequenceBatching.StrategyDirect.serializeBinaryToWriter
    );
  }
  f = message.getOldest();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.inference.ModelSequenceBatching.StrategyOldest.serializeBinaryToWriter
    );
  }
  f = message.getMaxSequenceIdleMicroseconds();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getControlInputList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.inference.ModelSequenceBatching.ControlInput.serializeBinaryToWriter
    );
  }
  f = message.getStateList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.inference.ModelSequenceBatching.State.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.inference.ModelSequenceBatching.Control.repeatedFields_ = [2,3,5];



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
proto.inference.ModelSequenceBatching.Control.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelSequenceBatching.Control.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelSequenceBatching.Control} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelSequenceBatching.Control.toObject = function(includeInstance, msg) {
  var f, obj = {
    kind: jspb.Message.getFieldWithDefault(msg, 1, 0),
    int32FalseTrueList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    fp32FalseTrueList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 3)) == null ? undefined : f,
    boolFalseTrueList: (f = jspb.Message.getRepeatedBooleanField(msg, 5)) == null ? undefined : f,
    dataType: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.inference.ModelSequenceBatching.Control}
 */
proto.inference.ModelSequenceBatching.Control.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelSequenceBatching.Control;
  return proto.inference.ModelSequenceBatching.Control.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelSequenceBatching.Control} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelSequenceBatching.Control}
 */
proto.inference.ModelSequenceBatching.Control.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.inference.ModelSequenceBatching.Control.Kind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addInt32FalseTrue(values[i]);
      }
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addFp32FalseTrue(values[i]);
      }
      break;
    case 5:
      var values = /** @type {!Array<boolean>} */ (reader.isDelimited() ? reader.readPackedBool() : [reader.readBool()]);
      for (var i = 0; i < values.length; i++) {
        msg.addBoolFalseTrue(values[i]);
      }
      break;
    case 4:
      var value = /** @type {!proto.inference.DataType} */ (reader.readEnum());
      msg.setDataType(value);
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
proto.inference.ModelSequenceBatching.Control.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelSequenceBatching.Control.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelSequenceBatching.Control} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelSequenceBatching.Control.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getInt32FalseTrueList();
  if (f.length > 0) {
    writer.writePackedInt32(
      2,
      f
    );
  }
  f = message.getFp32FalseTrueList();
  if (f.length > 0) {
    writer.writePackedFloat(
      3,
      f
    );
  }
  f = message.getBoolFalseTrueList();
  if (f.length > 0) {
    writer.writePackedBool(
      5,
      f
    );
  }
  f = message.getDataType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.inference.ModelSequenceBatching.Control.Kind = {
  CONTROL_SEQUENCE_START: 0,
  CONTROL_SEQUENCE_READY: 1,
  CONTROL_SEQUENCE_END: 2,
  CONTROL_SEQUENCE_CORRID: 3
};

/**
 * optional Kind kind = 1;
 * @return {!proto.inference.ModelSequenceBatching.Control.Kind}
 */
proto.inference.ModelSequenceBatching.Control.prototype.getKind = function() {
  return /** @type {!proto.inference.ModelSequenceBatching.Control.Kind} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.inference.ModelSequenceBatching.Control.Kind} value
 * @return {!proto.inference.ModelSequenceBatching.Control} returns this
 */
proto.inference.ModelSequenceBatching.Control.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated int32 int32_false_true = 2;
 * @return {!Array<number>}
 */
proto.inference.ModelSequenceBatching.Control.prototype.getInt32FalseTrueList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.inference.ModelSequenceBatching.Control} returns this
 */
proto.inference.ModelSequenceBatching.Control.prototype.setInt32FalseTrueList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelSequenceBatching.Control} returns this
 */
proto.inference.ModelSequenceBatching.Control.prototype.addInt32FalseTrue = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelSequenceBatching.Control} returns this
 */
proto.inference.ModelSequenceBatching.Control.prototype.clearInt32FalseTrueList = function() {
  return this.setInt32FalseTrueList([]);
};


/**
 * repeated float fp32_false_true = 3;
 * @return {!Array<number>}
 */
proto.inference.ModelSequenceBatching.Control.prototype.getFp32FalseTrueList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.inference.ModelSequenceBatching.Control} returns this
 */
proto.inference.ModelSequenceBatching.Control.prototype.setFp32FalseTrueList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelSequenceBatching.Control} returns this
 */
proto.inference.ModelSequenceBatching.Control.prototype.addFp32FalseTrue = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelSequenceBatching.Control} returns this
 */
proto.inference.ModelSequenceBatching.Control.prototype.clearFp32FalseTrueList = function() {
  return this.setFp32FalseTrueList([]);
};


/**
 * repeated bool bool_false_true = 5;
 * @return {!Array<boolean>}
 */
proto.inference.ModelSequenceBatching.Control.prototype.getBoolFalseTrueList = function() {
  return /** @type {!Array<boolean>} */ (jspb.Message.getRepeatedBooleanField(this, 5));
};


/**
 * @param {!Array<boolean>} value
 * @return {!proto.inference.ModelSequenceBatching.Control} returns this
 */
proto.inference.ModelSequenceBatching.Control.prototype.setBoolFalseTrueList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {boolean} value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelSequenceBatching.Control} returns this
 */
proto.inference.ModelSequenceBatching.Control.prototype.addBoolFalseTrue = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelSequenceBatching.Control} returns this
 */
proto.inference.ModelSequenceBatching.Control.prototype.clearBoolFalseTrueList = function() {
  return this.setBoolFalseTrueList([]);
};


/**
 * optional DataType data_type = 4;
 * @return {!proto.inference.DataType}
 */
proto.inference.ModelSequenceBatching.Control.prototype.getDataType = function() {
  return /** @type {!proto.inference.DataType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.inference.DataType} value
 * @return {!proto.inference.ModelSequenceBatching.Control} returns this
 */
proto.inference.ModelSequenceBatching.Control.prototype.setDataType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.inference.ModelSequenceBatching.ControlInput.repeatedFields_ = [2];



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
proto.inference.ModelSequenceBatching.ControlInput.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelSequenceBatching.ControlInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelSequenceBatching.ControlInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelSequenceBatching.ControlInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    controlList: jspb.Message.toObjectList(msg.getControlList(),
    proto.inference.ModelSequenceBatching.Control.toObject, includeInstance)
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
 * @return {!proto.inference.ModelSequenceBatching.ControlInput}
 */
proto.inference.ModelSequenceBatching.ControlInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelSequenceBatching.ControlInput;
  return proto.inference.ModelSequenceBatching.ControlInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelSequenceBatching.ControlInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelSequenceBatching.ControlInput}
 */
proto.inference.ModelSequenceBatching.ControlInput.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.inference.ModelSequenceBatching.Control;
      reader.readMessage(value,proto.inference.ModelSequenceBatching.Control.deserializeBinaryFromReader);
      msg.addControl(value);
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
proto.inference.ModelSequenceBatching.ControlInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelSequenceBatching.ControlInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelSequenceBatching.ControlInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelSequenceBatching.ControlInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getControlList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.inference.ModelSequenceBatching.Control.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.inference.ModelSequenceBatching.ControlInput.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelSequenceBatching.ControlInput} returns this
 */
proto.inference.ModelSequenceBatching.ControlInput.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Control control = 2;
 * @return {!Array<!proto.inference.ModelSequenceBatching.Control>}
 */
proto.inference.ModelSequenceBatching.ControlInput.prototype.getControlList = function() {
  return /** @type{!Array<!proto.inference.ModelSequenceBatching.Control>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.inference.ModelSequenceBatching.Control, 2));
};


/**
 * @param {!Array<!proto.inference.ModelSequenceBatching.Control>} value
 * @return {!proto.inference.ModelSequenceBatching.ControlInput} returns this
*/
proto.inference.ModelSequenceBatching.ControlInput.prototype.setControlList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.inference.ModelSequenceBatching.Control=} opt_value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelSequenceBatching.Control}
 */
proto.inference.ModelSequenceBatching.ControlInput.prototype.addControl = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.inference.ModelSequenceBatching.Control, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelSequenceBatching.ControlInput} returns this
 */
proto.inference.ModelSequenceBatching.ControlInput.prototype.clearControlList = function() {
  return this.setControlList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.inference.ModelSequenceBatching.InitialState.repeatedFields_ = [2];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.inference.ModelSequenceBatching.InitialState.oneofGroups_ = [[3,4]];

/**
 * @enum {number}
 */
proto.inference.ModelSequenceBatching.InitialState.StateDataCase = {
  STATE_DATA_NOT_SET: 0,
  ZERO_DATA: 3,
  DATA_FILE: 4
};

/**
 * @return {proto.inference.ModelSequenceBatching.InitialState.StateDataCase}
 */
proto.inference.ModelSequenceBatching.InitialState.prototype.getStateDataCase = function() {
  return /** @type {proto.inference.ModelSequenceBatching.InitialState.StateDataCase} */(jspb.Message.computeOneofCase(this, proto.inference.ModelSequenceBatching.InitialState.oneofGroups_[0]));
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
proto.inference.ModelSequenceBatching.InitialState.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelSequenceBatching.InitialState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelSequenceBatching.InitialState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelSequenceBatching.InitialState.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dimsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    zeroData: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    dataFile: jspb.Message.getFieldWithDefault(msg, 4, ""),
    name: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.inference.ModelSequenceBatching.InitialState}
 */
proto.inference.ModelSequenceBatching.InitialState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelSequenceBatching.InitialState;
  return proto.inference.ModelSequenceBatching.InitialState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelSequenceBatching.InitialState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelSequenceBatching.InitialState}
 */
proto.inference.ModelSequenceBatching.InitialState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.inference.DataType} */ (reader.readEnum());
      msg.setDataType(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addDims(values[i]);
      }
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setZeroData(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDataFile(value);
      break;
    case 5:
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
proto.inference.ModelSequenceBatching.InitialState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelSequenceBatching.InitialState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelSequenceBatching.InitialState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelSequenceBatching.InitialState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDimsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional DataType data_type = 1;
 * @return {!proto.inference.DataType}
 */
proto.inference.ModelSequenceBatching.InitialState.prototype.getDataType = function() {
  return /** @type {!proto.inference.DataType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.inference.DataType} value
 * @return {!proto.inference.ModelSequenceBatching.InitialState} returns this
 */
proto.inference.ModelSequenceBatching.InitialState.prototype.setDataType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated int64 dims = 2;
 * @return {!Array<number>}
 */
proto.inference.ModelSequenceBatching.InitialState.prototype.getDimsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.inference.ModelSequenceBatching.InitialState} returns this
 */
proto.inference.ModelSequenceBatching.InitialState.prototype.setDimsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelSequenceBatching.InitialState} returns this
 */
proto.inference.ModelSequenceBatching.InitialState.prototype.addDims = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelSequenceBatching.InitialState} returns this
 */
proto.inference.ModelSequenceBatching.InitialState.prototype.clearDimsList = function() {
  return this.setDimsList([]);
};


/**
 * optional bool zero_data = 3;
 * @return {boolean}
 */
proto.inference.ModelSequenceBatching.InitialState.prototype.getZeroData = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.inference.ModelSequenceBatching.InitialState} returns this
 */
proto.inference.ModelSequenceBatching.InitialState.prototype.setZeroData = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.inference.ModelSequenceBatching.InitialState.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.inference.ModelSequenceBatching.InitialState} returns this
 */
proto.inference.ModelSequenceBatching.InitialState.prototype.clearZeroData = function() {
  return jspb.Message.setOneofField(this, 3, proto.inference.ModelSequenceBatching.InitialState.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelSequenceBatching.InitialState.prototype.hasZeroData = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string data_file = 4;
 * @return {string}
 */
proto.inference.ModelSequenceBatching.InitialState.prototype.getDataFile = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelSequenceBatching.InitialState} returns this
 */
proto.inference.ModelSequenceBatching.InitialState.prototype.setDataFile = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.inference.ModelSequenceBatching.InitialState.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.inference.ModelSequenceBatching.InitialState} returns this
 */
proto.inference.ModelSequenceBatching.InitialState.prototype.clearDataFile = function() {
  return jspb.Message.setOneofField(this, 4, proto.inference.ModelSequenceBatching.InitialState.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelSequenceBatching.InitialState.prototype.hasDataFile = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.inference.ModelSequenceBatching.InitialState.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelSequenceBatching.InitialState} returns this
 */
proto.inference.ModelSequenceBatching.InitialState.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.inference.ModelSequenceBatching.State.repeatedFields_ = [4,5];



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
proto.inference.ModelSequenceBatching.State.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelSequenceBatching.State.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelSequenceBatching.State} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelSequenceBatching.State.toObject = function(includeInstance, msg) {
  var f, obj = {
    inputName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    outputName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dataType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    dimsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    initialStateList: jspb.Message.toObjectList(msg.getInitialStateList(),
    proto.inference.ModelSequenceBatching.InitialState.toObject, includeInstance)
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
 * @return {!proto.inference.ModelSequenceBatching.State}
 */
proto.inference.ModelSequenceBatching.State.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelSequenceBatching.State;
  return proto.inference.ModelSequenceBatching.State.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelSequenceBatching.State} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelSequenceBatching.State}
 */
proto.inference.ModelSequenceBatching.State.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInputName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOutputName(value);
      break;
    case 3:
      var value = /** @type {!proto.inference.DataType} */ (reader.readEnum());
      msg.setDataType(value);
      break;
    case 4:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addDims(values[i]);
      }
      break;
    case 5:
      var value = new proto.inference.ModelSequenceBatching.InitialState;
      reader.readMessage(value,proto.inference.ModelSequenceBatching.InitialState.deserializeBinaryFromReader);
      msg.addInitialState(value);
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
proto.inference.ModelSequenceBatching.State.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelSequenceBatching.State.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelSequenceBatching.State} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelSequenceBatching.State.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInputName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOutputName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDataType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getDimsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      4,
      f
    );
  }
  f = message.getInitialStateList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.inference.ModelSequenceBatching.InitialState.serializeBinaryToWriter
    );
  }
};


/**
 * optional string input_name = 1;
 * @return {string}
 */
proto.inference.ModelSequenceBatching.State.prototype.getInputName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelSequenceBatching.State} returns this
 */
proto.inference.ModelSequenceBatching.State.prototype.setInputName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string output_name = 2;
 * @return {string}
 */
proto.inference.ModelSequenceBatching.State.prototype.getOutputName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelSequenceBatching.State} returns this
 */
proto.inference.ModelSequenceBatching.State.prototype.setOutputName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional DataType data_type = 3;
 * @return {!proto.inference.DataType}
 */
proto.inference.ModelSequenceBatching.State.prototype.getDataType = function() {
  return /** @type {!proto.inference.DataType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.inference.DataType} value
 * @return {!proto.inference.ModelSequenceBatching.State} returns this
 */
proto.inference.ModelSequenceBatching.State.prototype.setDataType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated int64 dims = 4;
 * @return {!Array<number>}
 */
proto.inference.ModelSequenceBatching.State.prototype.getDimsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.inference.ModelSequenceBatching.State} returns this
 */
proto.inference.ModelSequenceBatching.State.prototype.setDimsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelSequenceBatching.State} returns this
 */
proto.inference.ModelSequenceBatching.State.prototype.addDims = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelSequenceBatching.State} returns this
 */
proto.inference.ModelSequenceBatching.State.prototype.clearDimsList = function() {
  return this.setDimsList([]);
};


/**
 * repeated InitialState initial_state = 5;
 * @return {!Array<!proto.inference.ModelSequenceBatching.InitialState>}
 */
proto.inference.ModelSequenceBatching.State.prototype.getInitialStateList = function() {
  return /** @type{!Array<!proto.inference.ModelSequenceBatching.InitialState>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.inference.ModelSequenceBatching.InitialState, 5));
};


/**
 * @param {!Array<!proto.inference.ModelSequenceBatching.InitialState>} value
 * @return {!proto.inference.ModelSequenceBatching.State} returns this
*/
proto.inference.ModelSequenceBatching.State.prototype.setInitialStateList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.inference.ModelSequenceBatching.InitialState=} opt_value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelSequenceBatching.InitialState}
 */
proto.inference.ModelSequenceBatching.State.prototype.addInitialState = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.inference.ModelSequenceBatching.InitialState, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelSequenceBatching.State} returns this
 */
proto.inference.ModelSequenceBatching.State.prototype.clearInitialStateList = function() {
  return this.setInitialStateList([]);
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
proto.inference.ModelSequenceBatching.StrategyDirect.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelSequenceBatching.StrategyDirect.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelSequenceBatching.StrategyDirect} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelSequenceBatching.StrategyDirect.toObject = function(includeInstance, msg) {
  var f, obj = {
    maxQueueDelayMicroseconds: jspb.Message.getFieldWithDefault(msg, 1, 0),
    minimumSlotUtilization: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.inference.ModelSequenceBatching.StrategyDirect}
 */
proto.inference.ModelSequenceBatching.StrategyDirect.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelSequenceBatching.StrategyDirect;
  return proto.inference.ModelSequenceBatching.StrategyDirect.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelSequenceBatching.StrategyDirect} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelSequenceBatching.StrategyDirect}
 */
proto.inference.ModelSequenceBatching.StrategyDirect.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxQueueDelayMicroseconds(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMinimumSlotUtilization(value);
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
proto.inference.ModelSequenceBatching.StrategyDirect.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelSequenceBatching.StrategyDirect.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelSequenceBatching.StrategyDirect} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelSequenceBatching.StrategyDirect.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaxQueueDelayMicroseconds();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getMinimumSlotUtilization();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional uint64 max_queue_delay_microseconds = 1;
 * @return {number}
 */
proto.inference.ModelSequenceBatching.StrategyDirect.prototype.getMaxQueueDelayMicroseconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.ModelSequenceBatching.StrategyDirect} returns this
 */
proto.inference.ModelSequenceBatching.StrategyDirect.prototype.setMaxQueueDelayMicroseconds = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional float minimum_slot_utilization = 2;
 * @return {number}
 */
proto.inference.ModelSequenceBatching.StrategyDirect.prototype.getMinimumSlotUtilization = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.inference.ModelSequenceBatching.StrategyDirect} returns this
 */
proto.inference.ModelSequenceBatching.StrategyDirect.prototype.setMinimumSlotUtilization = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.inference.ModelSequenceBatching.StrategyOldest.repeatedFields_ = [2];



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
proto.inference.ModelSequenceBatching.StrategyOldest.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelSequenceBatching.StrategyOldest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelSequenceBatching.StrategyOldest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelSequenceBatching.StrategyOldest.toObject = function(includeInstance, msg) {
  var f, obj = {
    maxCandidateSequences: jspb.Message.getFieldWithDefault(msg, 1, 0),
    preferredBatchSizeList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    maxQueueDelayMicroseconds: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.inference.ModelSequenceBatching.StrategyOldest}
 */
proto.inference.ModelSequenceBatching.StrategyOldest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelSequenceBatching.StrategyOldest;
  return proto.inference.ModelSequenceBatching.StrategyOldest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelSequenceBatching.StrategyOldest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelSequenceBatching.StrategyOldest}
 */
proto.inference.ModelSequenceBatching.StrategyOldest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxCandidateSequences(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPreferredBatchSize(values[i]);
      }
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxQueueDelayMicroseconds(value);
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
proto.inference.ModelSequenceBatching.StrategyOldest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelSequenceBatching.StrategyOldest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelSequenceBatching.StrategyOldest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelSequenceBatching.StrategyOldest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaxCandidateSequences();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPreferredBatchSizeList();
  if (f.length > 0) {
    writer.writePackedInt32(
      2,
      f
    );
  }
  f = message.getMaxQueueDelayMicroseconds();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional int32 max_candidate_sequences = 1;
 * @return {number}
 */
proto.inference.ModelSequenceBatching.StrategyOldest.prototype.getMaxCandidateSequences = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.ModelSequenceBatching.StrategyOldest} returns this
 */
proto.inference.ModelSequenceBatching.StrategyOldest.prototype.setMaxCandidateSequences = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated int32 preferred_batch_size = 2;
 * @return {!Array<number>}
 */
proto.inference.ModelSequenceBatching.StrategyOldest.prototype.getPreferredBatchSizeList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.inference.ModelSequenceBatching.StrategyOldest} returns this
 */
proto.inference.ModelSequenceBatching.StrategyOldest.prototype.setPreferredBatchSizeList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelSequenceBatching.StrategyOldest} returns this
 */
proto.inference.ModelSequenceBatching.StrategyOldest.prototype.addPreferredBatchSize = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelSequenceBatching.StrategyOldest} returns this
 */
proto.inference.ModelSequenceBatching.StrategyOldest.prototype.clearPreferredBatchSizeList = function() {
  return this.setPreferredBatchSizeList([]);
};


/**
 * optional uint64 max_queue_delay_microseconds = 3;
 * @return {number}
 */
proto.inference.ModelSequenceBatching.StrategyOldest.prototype.getMaxQueueDelayMicroseconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.ModelSequenceBatching.StrategyOldest} returns this
 */
proto.inference.ModelSequenceBatching.StrategyOldest.prototype.setMaxQueueDelayMicroseconds = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional StrategyDirect direct = 3;
 * @return {?proto.inference.ModelSequenceBatching.StrategyDirect}
 */
proto.inference.ModelSequenceBatching.prototype.getDirect = function() {
  return /** @type{?proto.inference.ModelSequenceBatching.StrategyDirect} */ (
    jspb.Message.getWrapperField(this, proto.inference.ModelSequenceBatching.StrategyDirect, 3));
};


/**
 * @param {?proto.inference.ModelSequenceBatching.StrategyDirect|undefined} value
 * @return {!proto.inference.ModelSequenceBatching} returns this
*/
proto.inference.ModelSequenceBatching.prototype.setDirect = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.inference.ModelSequenceBatching.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.ModelSequenceBatching} returns this
 */
proto.inference.ModelSequenceBatching.prototype.clearDirect = function() {
  return this.setDirect(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelSequenceBatching.prototype.hasDirect = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional StrategyOldest oldest = 4;
 * @return {?proto.inference.ModelSequenceBatching.StrategyOldest}
 */
proto.inference.ModelSequenceBatching.prototype.getOldest = function() {
  return /** @type{?proto.inference.ModelSequenceBatching.StrategyOldest} */ (
    jspb.Message.getWrapperField(this, proto.inference.ModelSequenceBatching.StrategyOldest, 4));
};


/**
 * @param {?proto.inference.ModelSequenceBatching.StrategyOldest|undefined} value
 * @return {!proto.inference.ModelSequenceBatching} returns this
*/
proto.inference.ModelSequenceBatching.prototype.setOldest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.inference.ModelSequenceBatching.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.ModelSequenceBatching} returns this
 */
proto.inference.ModelSequenceBatching.prototype.clearOldest = function() {
  return this.setOldest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelSequenceBatching.prototype.hasOldest = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint64 max_sequence_idle_microseconds = 1;
 * @return {number}
 */
proto.inference.ModelSequenceBatching.prototype.getMaxSequenceIdleMicroseconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.ModelSequenceBatching} returns this
 */
proto.inference.ModelSequenceBatching.prototype.setMaxSequenceIdleMicroseconds = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated ControlInput control_input = 2;
 * @return {!Array<!proto.inference.ModelSequenceBatching.ControlInput>}
 */
proto.inference.ModelSequenceBatching.prototype.getControlInputList = function() {
  return /** @type{!Array<!proto.inference.ModelSequenceBatching.ControlInput>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.inference.ModelSequenceBatching.ControlInput, 2));
};


/**
 * @param {!Array<!proto.inference.ModelSequenceBatching.ControlInput>} value
 * @return {!proto.inference.ModelSequenceBatching} returns this
*/
proto.inference.ModelSequenceBatching.prototype.setControlInputList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.inference.ModelSequenceBatching.ControlInput=} opt_value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelSequenceBatching.ControlInput}
 */
proto.inference.ModelSequenceBatching.prototype.addControlInput = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.inference.ModelSequenceBatching.ControlInput, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelSequenceBatching} returns this
 */
proto.inference.ModelSequenceBatching.prototype.clearControlInputList = function() {
  return this.setControlInputList([]);
};


/**
 * repeated State state = 5;
 * @return {!Array<!proto.inference.ModelSequenceBatching.State>}
 */
proto.inference.ModelSequenceBatching.prototype.getStateList = function() {
  return /** @type{!Array<!proto.inference.ModelSequenceBatching.State>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.inference.ModelSequenceBatching.State, 5));
};


/**
 * @param {!Array<!proto.inference.ModelSequenceBatching.State>} value
 * @return {!proto.inference.ModelSequenceBatching} returns this
*/
proto.inference.ModelSequenceBatching.prototype.setStateList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.inference.ModelSequenceBatching.State=} opt_value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelSequenceBatching.State}
 */
proto.inference.ModelSequenceBatching.prototype.addState = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.inference.ModelSequenceBatching.State, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelSequenceBatching} returns this
 */
proto.inference.ModelSequenceBatching.prototype.clearStateList = function() {
  return this.setStateList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.inference.ModelEnsembling.repeatedFields_ = [1];



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
proto.inference.ModelEnsembling.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelEnsembling.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelEnsembling} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelEnsembling.toObject = function(includeInstance, msg) {
  var f, obj = {
    stepList: jspb.Message.toObjectList(msg.getStepList(),
    proto.inference.ModelEnsembling.Step.toObject, includeInstance)
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
 * @return {!proto.inference.ModelEnsembling}
 */
proto.inference.ModelEnsembling.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelEnsembling;
  return proto.inference.ModelEnsembling.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelEnsembling} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelEnsembling}
 */
proto.inference.ModelEnsembling.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.inference.ModelEnsembling.Step;
      reader.readMessage(value,proto.inference.ModelEnsembling.Step.deserializeBinaryFromReader);
      msg.addStep(value);
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
proto.inference.ModelEnsembling.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelEnsembling.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelEnsembling} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelEnsembling.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStepList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.inference.ModelEnsembling.Step.serializeBinaryToWriter
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
proto.inference.ModelEnsembling.Step.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelEnsembling.Step.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelEnsembling.Step} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelEnsembling.Step.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    modelVersion: jspb.Message.getFieldWithDefault(msg, 2, 0),
    inputMapMap: (f = msg.getInputMapMap()) ? f.toObject(includeInstance, undefined) : [],
    outputMapMap: (f = msg.getOutputMapMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.inference.ModelEnsembling.Step}
 */
proto.inference.ModelEnsembling.Step.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelEnsembling.Step;
  return proto.inference.ModelEnsembling.Step.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelEnsembling.Step} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelEnsembling.Step}
 */
proto.inference.ModelEnsembling.Step.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt64());
      msg.setModelVersion(value);
      break;
    case 3:
      var value = msg.getInputMapMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 4:
      var value = msg.getOutputMapMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
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
proto.inference.ModelEnsembling.Step.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelEnsembling.Step.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelEnsembling.Step} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelEnsembling.Step.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModelName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModelVersion();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getInputMapMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getOutputMapMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string model_name = 1;
 * @return {string}
 */
proto.inference.ModelEnsembling.Step.prototype.getModelName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelEnsembling.Step} returns this
 */
proto.inference.ModelEnsembling.Step.prototype.setModelName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 model_version = 2;
 * @return {number}
 */
proto.inference.ModelEnsembling.Step.prototype.getModelVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.ModelEnsembling.Step} returns this
 */
proto.inference.ModelEnsembling.Step.prototype.setModelVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * map<string, string> input_map = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.inference.ModelEnsembling.Step.prototype.getInputMapMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.inference.ModelEnsembling.Step} returns this
 */
proto.inference.ModelEnsembling.Step.prototype.clearInputMapMap = function() {
  this.getInputMapMap().clear();
  return this;};


/**
 * map<string, string> output_map = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.inference.ModelEnsembling.Step.prototype.getOutputMapMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.inference.ModelEnsembling.Step} returns this
 */
proto.inference.ModelEnsembling.Step.prototype.clearOutputMapMap = function() {
  this.getOutputMapMap().clear();
  return this;};


/**
 * repeated Step step = 1;
 * @return {!Array<!proto.inference.ModelEnsembling.Step>}
 */
proto.inference.ModelEnsembling.prototype.getStepList = function() {
  return /** @type{!Array<!proto.inference.ModelEnsembling.Step>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.inference.ModelEnsembling.Step, 1));
};


/**
 * @param {!Array<!proto.inference.ModelEnsembling.Step>} value
 * @return {!proto.inference.ModelEnsembling} returns this
*/
proto.inference.ModelEnsembling.prototype.setStepList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.inference.ModelEnsembling.Step=} opt_value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelEnsembling.Step}
 */
proto.inference.ModelEnsembling.prototype.addStep = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.inference.ModelEnsembling.Step, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelEnsembling} returns this
 */
proto.inference.ModelEnsembling.prototype.clearStepList = function() {
  return this.setStepList([]);
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
proto.inference.ModelParameter.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelParameter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelParameter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelParameter.toObject = function(includeInstance, msg) {
  var f, obj = {
    stringValue: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.inference.ModelParameter}
 */
proto.inference.ModelParameter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelParameter;
  return proto.inference.ModelParameter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelParameter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelParameter}
 */
proto.inference.ModelParameter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringValue(value);
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
proto.inference.ModelParameter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelParameter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelParameter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelParameter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStringValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string string_value = 1;
 * @return {string}
 */
proto.inference.ModelParameter.prototype.getStringValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelParameter} returns this
 */
proto.inference.ModelParameter.prototype.setStringValue = function(value) {
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
proto.inference.ModelWarmup.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelWarmup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelWarmup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelWarmup.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    batchSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    inputsMap: (f = msg.getInputsMap()) ? f.toObject(includeInstance, proto.inference.ModelWarmup.Input.toObject) : [],
    count: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.inference.ModelWarmup}
 */
proto.inference.ModelWarmup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelWarmup;
  return proto.inference.ModelWarmup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelWarmup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelWarmup}
 */
proto.inference.ModelWarmup.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBatchSize(value);
      break;
    case 3:
      var value = msg.getInputsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.inference.ModelWarmup.Input.deserializeBinaryFromReader, "", new proto.inference.ModelWarmup.Input());
         });
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCount(value);
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
proto.inference.ModelWarmup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelWarmup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelWarmup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelWarmup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBatchSize();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getInputsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.inference.ModelWarmup.Input.serializeBinaryToWriter);
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.inference.ModelWarmup.Input.repeatedFields_ = [2];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.inference.ModelWarmup.Input.oneofGroups_ = [[3,4,5]];

/**
 * @enum {number}
 */
proto.inference.ModelWarmup.Input.InputDataTypeCase = {
  INPUT_DATA_TYPE_NOT_SET: 0,
  ZERO_DATA: 3,
  RANDOM_DATA: 4,
  INPUT_DATA_FILE: 5
};

/**
 * @return {proto.inference.ModelWarmup.Input.InputDataTypeCase}
 */
proto.inference.ModelWarmup.Input.prototype.getInputDataTypeCase = function() {
  return /** @type {proto.inference.ModelWarmup.Input.InputDataTypeCase} */(jspb.Message.computeOneofCase(this, proto.inference.ModelWarmup.Input.oneofGroups_[0]));
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
proto.inference.ModelWarmup.Input.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelWarmup.Input.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelWarmup.Input} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelWarmup.Input.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dimsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    zeroData: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    randomData: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    inputDataFile: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.inference.ModelWarmup.Input}
 */
proto.inference.ModelWarmup.Input.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelWarmup.Input;
  return proto.inference.ModelWarmup.Input.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelWarmup.Input} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelWarmup.Input}
 */
proto.inference.ModelWarmup.Input.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.inference.DataType} */ (reader.readEnum());
      msg.setDataType(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addDims(values[i]);
      }
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setZeroData(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRandomData(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setInputDataFile(value);
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
proto.inference.ModelWarmup.Input.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelWarmup.Input.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelWarmup.Input} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelWarmup.Input.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDimsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional DataType data_type = 1;
 * @return {!proto.inference.DataType}
 */
proto.inference.ModelWarmup.Input.prototype.getDataType = function() {
  return /** @type {!proto.inference.DataType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.inference.DataType} value
 * @return {!proto.inference.ModelWarmup.Input} returns this
 */
proto.inference.ModelWarmup.Input.prototype.setDataType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated int64 dims = 2;
 * @return {!Array<number>}
 */
proto.inference.ModelWarmup.Input.prototype.getDimsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.inference.ModelWarmup.Input} returns this
 */
proto.inference.ModelWarmup.Input.prototype.setDimsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelWarmup.Input} returns this
 */
proto.inference.ModelWarmup.Input.prototype.addDims = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelWarmup.Input} returns this
 */
proto.inference.ModelWarmup.Input.prototype.clearDimsList = function() {
  return this.setDimsList([]);
};


/**
 * optional bool zero_data = 3;
 * @return {boolean}
 */
proto.inference.ModelWarmup.Input.prototype.getZeroData = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.inference.ModelWarmup.Input} returns this
 */
proto.inference.ModelWarmup.Input.prototype.setZeroData = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.inference.ModelWarmup.Input.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.inference.ModelWarmup.Input} returns this
 */
proto.inference.ModelWarmup.Input.prototype.clearZeroData = function() {
  return jspb.Message.setOneofField(this, 3, proto.inference.ModelWarmup.Input.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelWarmup.Input.prototype.hasZeroData = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool random_data = 4;
 * @return {boolean}
 */
proto.inference.ModelWarmup.Input.prototype.getRandomData = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.inference.ModelWarmup.Input} returns this
 */
proto.inference.ModelWarmup.Input.prototype.setRandomData = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.inference.ModelWarmup.Input.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.inference.ModelWarmup.Input} returns this
 */
proto.inference.ModelWarmup.Input.prototype.clearRandomData = function() {
  return jspb.Message.setOneofField(this, 4, proto.inference.ModelWarmup.Input.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelWarmup.Input.prototype.hasRandomData = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string input_data_file = 5;
 * @return {string}
 */
proto.inference.ModelWarmup.Input.prototype.getInputDataFile = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelWarmup.Input} returns this
 */
proto.inference.ModelWarmup.Input.prototype.setInputDataFile = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.inference.ModelWarmup.Input.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.inference.ModelWarmup.Input} returns this
 */
proto.inference.ModelWarmup.Input.prototype.clearInputDataFile = function() {
  return jspb.Message.setOneofField(this, 5, proto.inference.ModelWarmup.Input.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelWarmup.Input.prototype.hasInputDataFile = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.inference.ModelWarmup.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelWarmup} returns this
 */
proto.inference.ModelWarmup.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 batch_size = 2;
 * @return {number}
 */
proto.inference.ModelWarmup.prototype.getBatchSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.ModelWarmup} returns this
 */
proto.inference.ModelWarmup.prototype.setBatchSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * map<string, Input> inputs = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.inference.ModelWarmup.Input>}
 */
proto.inference.ModelWarmup.prototype.getInputsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.inference.ModelWarmup.Input>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.inference.ModelWarmup.Input));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.inference.ModelWarmup} returns this
 */
proto.inference.ModelWarmup.prototype.clearInputsMap = function() {
  this.getInputsMap().clear();
  return this;};


/**
 * optional uint32 count = 4;
 * @return {number}
 */
proto.inference.ModelWarmup.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.ModelWarmup} returns this
 */
proto.inference.ModelWarmup.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.inference.ModelOperations.repeatedFields_ = [1];



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
proto.inference.ModelOperations.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelOperations.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelOperations} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelOperations.toObject = function(includeInstance, msg) {
  var f, obj = {
    opLibraryFilenameList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.inference.ModelOperations}
 */
proto.inference.ModelOperations.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelOperations;
  return proto.inference.ModelOperations.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelOperations} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelOperations}
 */
proto.inference.ModelOperations.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addOpLibraryFilename(value);
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
proto.inference.ModelOperations.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelOperations.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelOperations} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelOperations.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpLibraryFilenameList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string op_library_filename = 1;
 * @return {!Array<string>}
 */
proto.inference.ModelOperations.prototype.getOpLibraryFilenameList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.inference.ModelOperations} returns this
 */
proto.inference.ModelOperations.prototype.setOpLibraryFilenameList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelOperations} returns this
 */
proto.inference.ModelOperations.prototype.addOpLibraryFilename = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelOperations} returns this
 */
proto.inference.ModelOperations.prototype.clearOpLibraryFilenameList = function() {
  return this.setOpLibraryFilenameList([]);
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
proto.inference.ModelTransactionPolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelTransactionPolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelTransactionPolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelTransactionPolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    decoupled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.inference.ModelTransactionPolicy}
 */
proto.inference.ModelTransactionPolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelTransactionPolicy;
  return proto.inference.ModelTransactionPolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelTransactionPolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelTransactionPolicy}
 */
proto.inference.ModelTransactionPolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDecoupled(value);
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
proto.inference.ModelTransactionPolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelTransactionPolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelTransactionPolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelTransactionPolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDecoupled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool decoupled = 1;
 * @return {boolean}
 */
proto.inference.ModelTransactionPolicy.prototype.getDecoupled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.inference.ModelTransactionPolicy} returns this
 */
proto.inference.ModelTransactionPolicy.prototype.setDecoupled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.inference.ModelRepositoryAgents.repeatedFields_ = [1];



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
proto.inference.ModelRepositoryAgents.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelRepositoryAgents.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelRepositoryAgents} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelRepositoryAgents.toObject = function(includeInstance, msg) {
  var f, obj = {
    agentsList: jspb.Message.toObjectList(msg.getAgentsList(),
    proto.inference.ModelRepositoryAgents.Agent.toObject, includeInstance)
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
 * @return {!proto.inference.ModelRepositoryAgents}
 */
proto.inference.ModelRepositoryAgents.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelRepositoryAgents;
  return proto.inference.ModelRepositoryAgents.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelRepositoryAgents} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelRepositoryAgents}
 */
proto.inference.ModelRepositoryAgents.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.inference.ModelRepositoryAgents.Agent;
      reader.readMessage(value,proto.inference.ModelRepositoryAgents.Agent.deserializeBinaryFromReader);
      msg.addAgents(value);
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
proto.inference.ModelRepositoryAgents.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelRepositoryAgents.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelRepositoryAgents} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelRepositoryAgents.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.inference.ModelRepositoryAgents.Agent.serializeBinaryToWriter
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
proto.inference.ModelRepositoryAgents.Agent.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelRepositoryAgents.Agent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelRepositoryAgents.Agent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelRepositoryAgents.Agent.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    parametersMap: (f = msg.getParametersMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.inference.ModelRepositoryAgents.Agent}
 */
proto.inference.ModelRepositoryAgents.Agent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelRepositoryAgents.Agent;
  return proto.inference.ModelRepositoryAgents.Agent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelRepositoryAgents.Agent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelRepositoryAgents.Agent}
 */
proto.inference.ModelRepositoryAgents.Agent.deserializeBinaryFromReader = function(msg, reader) {
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
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
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
proto.inference.ModelRepositoryAgents.Agent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelRepositoryAgents.Agent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelRepositoryAgents.Agent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelRepositoryAgents.Agent.serializeBinaryToWriter = function(message, writer) {
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
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.inference.ModelRepositoryAgents.Agent.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelRepositoryAgents.Agent} returns this
 */
proto.inference.ModelRepositoryAgents.Agent.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, string> parameters = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.inference.ModelRepositoryAgents.Agent.prototype.getParametersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.inference.ModelRepositoryAgents.Agent} returns this
 */
proto.inference.ModelRepositoryAgents.Agent.prototype.clearParametersMap = function() {
  this.getParametersMap().clear();
  return this;};


/**
 * repeated Agent agents = 1;
 * @return {!Array<!proto.inference.ModelRepositoryAgents.Agent>}
 */
proto.inference.ModelRepositoryAgents.prototype.getAgentsList = function() {
  return /** @type{!Array<!proto.inference.ModelRepositoryAgents.Agent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.inference.ModelRepositoryAgents.Agent, 1));
};


/**
 * @param {!Array<!proto.inference.ModelRepositoryAgents.Agent>} value
 * @return {!proto.inference.ModelRepositoryAgents} returns this
*/
proto.inference.ModelRepositoryAgents.prototype.setAgentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.inference.ModelRepositoryAgents.Agent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelRepositoryAgents.Agent}
 */
proto.inference.ModelRepositoryAgents.prototype.addAgents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.inference.ModelRepositoryAgents.Agent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelRepositoryAgents} returns this
 */
proto.inference.ModelRepositoryAgents.prototype.clearAgentsList = function() {
  return this.setAgentsList([]);
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
proto.inference.ModelResponseCache.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelResponseCache.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelResponseCache} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelResponseCache.toObject = function(includeInstance, msg) {
  var f, obj = {
    enable: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.inference.ModelResponseCache}
 */
proto.inference.ModelResponseCache.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelResponseCache;
  return proto.inference.ModelResponseCache.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelResponseCache} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelResponseCache}
 */
proto.inference.ModelResponseCache.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnable(value);
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
proto.inference.ModelResponseCache.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelResponseCache.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelResponseCache} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelResponseCache.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnable();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool enable = 1;
 * @return {boolean}
 */
proto.inference.ModelResponseCache.prototype.getEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.inference.ModelResponseCache} returns this
 */
proto.inference.ModelResponseCache.prototype.setEnable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.inference.ModelConfig.repeatedFields_ = [5,6,20,21,7,16];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.inference.ModelConfig.oneofGroups_ = [[11,13,15]];

/**
 * @enum {number}
 */
proto.inference.ModelConfig.SchedulingChoiceCase = {
  SCHEDULING_CHOICE_NOT_SET: 0,
  DYNAMIC_BATCHING: 11,
  SEQUENCE_BATCHING: 13,
  ENSEMBLE_SCHEDULING: 15
};

/**
 * @return {proto.inference.ModelConfig.SchedulingChoiceCase}
 */
proto.inference.ModelConfig.prototype.getSchedulingChoiceCase = function() {
  return /** @type {proto.inference.ModelConfig.SchedulingChoiceCase} */(jspb.Message.computeOneofCase(this, proto.inference.ModelConfig.oneofGroups_[0]));
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
proto.inference.ModelConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.inference.ModelConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.inference.ModelConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    platform: jspb.Message.getFieldWithDefault(msg, 2, ""),
    backend: jspb.Message.getFieldWithDefault(msg, 17, ""),
    versionPolicy: (f = msg.getVersionPolicy()) && proto.inference.ModelVersionPolicy.toObject(includeInstance, f),
    maxBatchSize: jspb.Message.getFieldWithDefault(msg, 4, 0),
    inputList: jspb.Message.toObjectList(msg.getInputList(),
    proto.inference.ModelInput.toObject, includeInstance),
    outputList: jspb.Message.toObjectList(msg.getOutputList(),
    proto.inference.ModelOutput.toObject, includeInstance),
    batchInputList: jspb.Message.toObjectList(msg.getBatchInputList(),
    proto.inference.BatchInput.toObject, includeInstance),
    batchOutputList: jspb.Message.toObjectList(msg.getBatchOutputList(),
    proto.inference.BatchOutput.toObject, includeInstance),
    optimization: (f = msg.getOptimization()) && proto.inference.ModelOptimizationPolicy.toObject(includeInstance, f),
    dynamicBatching: (f = msg.getDynamicBatching()) && proto.inference.ModelDynamicBatching.toObject(includeInstance, f),
    sequenceBatching: (f = msg.getSequenceBatching()) && proto.inference.ModelSequenceBatching.toObject(includeInstance, f),
    ensembleScheduling: (f = msg.getEnsembleScheduling()) && proto.inference.ModelEnsembling.toObject(includeInstance, f),
    instanceGroupList: jspb.Message.toObjectList(msg.getInstanceGroupList(),
    proto.inference.ModelInstanceGroup.toObject, includeInstance),
    defaultModelFilename: jspb.Message.getFieldWithDefault(msg, 8, ""),
    ccModelFilenamesMap: (f = msg.getCcModelFilenamesMap()) ? f.toObject(includeInstance, undefined) : [],
    metricTagsMap: (f = msg.getMetricTagsMap()) ? f.toObject(includeInstance, undefined) : [],
    parametersMap: (f = msg.getParametersMap()) ? f.toObject(includeInstance, proto.inference.ModelParameter.toObject) : [],
    modelWarmupList: jspb.Message.toObjectList(msg.getModelWarmupList(),
    proto.inference.ModelWarmup.toObject, includeInstance),
    modelOperations: (f = msg.getModelOperations()) && proto.inference.ModelOperations.toObject(includeInstance, f),
    modelTransactionPolicy: (f = msg.getModelTransactionPolicy()) && proto.inference.ModelTransactionPolicy.toObject(includeInstance, f),
    modelRepositoryAgents: (f = msg.getModelRepositoryAgents()) && proto.inference.ModelRepositoryAgents.toObject(includeInstance, f),
    responseCache: (f = msg.getResponseCache()) && proto.inference.ModelResponseCache.toObject(includeInstance, f)
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
 * @return {!proto.inference.ModelConfig}
 */
proto.inference.ModelConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.inference.ModelConfig;
  return proto.inference.ModelConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.inference.ModelConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.inference.ModelConfig}
 */
proto.inference.ModelConfig.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setPlatform(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackend(value);
      break;
    case 3:
      var value = new proto.inference.ModelVersionPolicy;
      reader.readMessage(value,proto.inference.ModelVersionPolicy.deserializeBinaryFromReader);
      msg.setVersionPolicy(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxBatchSize(value);
      break;
    case 5:
      var value = new proto.inference.ModelInput;
      reader.readMessage(value,proto.inference.ModelInput.deserializeBinaryFromReader);
      msg.addInput(value);
      break;
    case 6:
      var value = new proto.inference.ModelOutput;
      reader.readMessage(value,proto.inference.ModelOutput.deserializeBinaryFromReader);
      msg.addOutput(value);
      break;
    case 20:
      var value = new proto.inference.BatchInput;
      reader.readMessage(value,proto.inference.BatchInput.deserializeBinaryFromReader);
      msg.addBatchInput(value);
      break;
    case 21:
      var value = new proto.inference.BatchOutput;
      reader.readMessage(value,proto.inference.BatchOutput.deserializeBinaryFromReader);
      msg.addBatchOutput(value);
      break;
    case 12:
      var value = new proto.inference.ModelOptimizationPolicy;
      reader.readMessage(value,proto.inference.ModelOptimizationPolicy.deserializeBinaryFromReader);
      msg.setOptimization(value);
      break;
    case 11:
      var value = new proto.inference.ModelDynamicBatching;
      reader.readMessage(value,proto.inference.ModelDynamicBatching.deserializeBinaryFromReader);
      msg.setDynamicBatching(value);
      break;
    case 13:
      var value = new proto.inference.ModelSequenceBatching;
      reader.readMessage(value,proto.inference.ModelSequenceBatching.deserializeBinaryFromReader);
      msg.setSequenceBatching(value);
      break;
    case 15:
      var value = new proto.inference.ModelEnsembling;
      reader.readMessage(value,proto.inference.ModelEnsembling.deserializeBinaryFromReader);
      msg.setEnsembleScheduling(value);
      break;
    case 7:
      var value = new proto.inference.ModelInstanceGroup;
      reader.readMessage(value,proto.inference.ModelInstanceGroup.deserializeBinaryFromReader);
      msg.addInstanceGroup(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultModelFilename(value);
      break;
    case 9:
      var value = msg.getCcModelFilenamesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 10:
      var value = msg.getMetricTagsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 14:
      var value = msg.getParametersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.inference.ModelParameter.deserializeBinaryFromReader, "", new proto.inference.ModelParameter());
         });
      break;
    case 16:
      var value = new proto.inference.ModelWarmup;
      reader.readMessage(value,proto.inference.ModelWarmup.deserializeBinaryFromReader);
      msg.addModelWarmup(value);
      break;
    case 18:
      var value = new proto.inference.ModelOperations;
      reader.readMessage(value,proto.inference.ModelOperations.deserializeBinaryFromReader);
      msg.setModelOperations(value);
      break;
    case 19:
      var value = new proto.inference.ModelTransactionPolicy;
      reader.readMessage(value,proto.inference.ModelTransactionPolicy.deserializeBinaryFromReader);
      msg.setModelTransactionPolicy(value);
      break;
    case 23:
      var value = new proto.inference.ModelRepositoryAgents;
      reader.readMessage(value,proto.inference.ModelRepositoryAgents.deserializeBinaryFromReader);
      msg.setModelRepositoryAgents(value);
      break;
    case 24:
      var value = new proto.inference.ModelResponseCache;
      reader.readMessage(value,proto.inference.ModelResponseCache.deserializeBinaryFromReader);
      msg.setResponseCache(value);
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
proto.inference.ModelConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.inference.ModelConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.inference.ModelConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.inference.ModelConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPlatform();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBackend();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getVersionPolicy();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.inference.ModelVersionPolicy.serializeBinaryToWriter
    );
  }
  f = message.getMaxBatchSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getInputList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.inference.ModelInput.serializeBinaryToWriter
    );
  }
  f = message.getOutputList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.inference.ModelOutput.serializeBinaryToWriter
    );
  }
  f = message.getBatchInputList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      20,
      f,
      proto.inference.BatchInput.serializeBinaryToWriter
    );
  }
  f = message.getBatchOutputList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      21,
      f,
      proto.inference.BatchOutput.serializeBinaryToWriter
    );
  }
  f = message.getOptimization();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.inference.ModelOptimizationPolicy.serializeBinaryToWriter
    );
  }
  f = message.getDynamicBatching();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.inference.ModelDynamicBatching.serializeBinaryToWriter
    );
  }
  f = message.getSequenceBatching();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.inference.ModelSequenceBatching.serializeBinaryToWriter
    );
  }
  f = message.getEnsembleScheduling();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.inference.ModelEnsembling.serializeBinaryToWriter
    );
  }
  f = message.getInstanceGroupList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.inference.ModelInstanceGroup.serializeBinaryToWriter
    );
  }
  f = message.getDefaultModelFilename();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getCcModelFilenamesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(9, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getMetricTagsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(10, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getParametersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(14, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.inference.ModelParameter.serializeBinaryToWriter);
  }
  f = message.getModelWarmupList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      16,
      f,
      proto.inference.ModelWarmup.serializeBinaryToWriter
    );
  }
  f = message.getModelOperations();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.inference.ModelOperations.serializeBinaryToWriter
    );
  }
  f = message.getModelTransactionPolicy();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.inference.ModelTransactionPolicy.serializeBinaryToWriter
    );
  }
  f = message.getModelRepositoryAgents();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.inference.ModelRepositoryAgents.serializeBinaryToWriter
    );
  }
  f = message.getResponseCache();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.inference.ModelResponseCache.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.inference.ModelConfig.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelConfig} returns this
 */
proto.inference.ModelConfig.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string platform = 2;
 * @return {string}
 */
proto.inference.ModelConfig.prototype.getPlatform = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelConfig} returns this
 */
proto.inference.ModelConfig.prototype.setPlatform = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string backend = 17;
 * @return {string}
 */
proto.inference.ModelConfig.prototype.getBackend = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelConfig} returns this
 */
proto.inference.ModelConfig.prototype.setBackend = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional ModelVersionPolicy version_policy = 3;
 * @return {?proto.inference.ModelVersionPolicy}
 */
proto.inference.ModelConfig.prototype.getVersionPolicy = function() {
  return /** @type{?proto.inference.ModelVersionPolicy} */ (
    jspb.Message.getWrapperField(this, proto.inference.ModelVersionPolicy, 3));
};


/**
 * @param {?proto.inference.ModelVersionPolicy|undefined} value
 * @return {!proto.inference.ModelConfig} returns this
*/
proto.inference.ModelConfig.prototype.setVersionPolicy = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.ModelConfig} returns this
 */
proto.inference.ModelConfig.prototype.clearVersionPolicy = function() {
  return this.setVersionPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelConfig.prototype.hasVersionPolicy = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 max_batch_size = 4;
 * @return {number}
 */
proto.inference.ModelConfig.prototype.getMaxBatchSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.inference.ModelConfig} returns this
 */
proto.inference.ModelConfig.prototype.setMaxBatchSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated ModelInput input = 5;
 * @return {!Array<!proto.inference.ModelInput>}
 */
proto.inference.ModelConfig.prototype.getInputList = function() {
  return /** @type{!Array<!proto.inference.ModelInput>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.inference.ModelInput, 5));
};


/**
 * @param {!Array<!proto.inference.ModelInput>} value
 * @return {!proto.inference.ModelConfig} returns this
*/
proto.inference.ModelConfig.prototype.setInputList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.inference.ModelInput=} opt_value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelInput}
 */
proto.inference.ModelConfig.prototype.addInput = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.inference.ModelInput, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelConfig} returns this
 */
proto.inference.ModelConfig.prototype.clearInputList = function() {
  return this.setInputList([]);
};


/**
 * repeated ModelOutput output = 6;
 * @return {!Array<!proto.inference.ModelOutput>}
 */
proto.inference.ModelConfig.prototype.getOutputList = function() {
  return /** @type{!Array<!proto.inference.ModelOutput>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.inference.ModelOutput, 6));
};


/**
 * @param {!Array<!proto.inference.ModelOutput>} value
 * @return {!proto.inference.ModelConfig} returns this
*/
proto.inference.ModelConfig.prototype.setOutputList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.inference.ModelOutput=} opt_value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelOutput}
 */
proto.inference.ModelConfig.prototype.addOutput = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.inference.ModelOutput, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelConfig} returns this
 */
proto.inference.ModelConfig.prototype.clearOutputList = function() {
  return this.setOutputList([]);
};


/**
 * repeated BatchInput batch_input = 20;
 * @return {!Array<!proto.inference.BatchInput>}
 */
proto.inference.ModelConfig.prototype.getBatchInputList = function() {
  return /** @type{!Array<!proto.inference.BatchInput>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.inference.BatchInput, 20));
};


/**
 * @param {!Array<!proto.inference.BatchInput>} value
 * @return {!proto.inference.ModelConfig} returns this
*/
proto.inference.ModelConfig.prototype.setBatchInputList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 20, value);
};


/**
 * @param {!proto.inference.BatchInput=} opt_value
 * @param {number=} opt_index
 * @return {!proto.inference.BatchInput}
 */
proto.inference.ModelConfig.prototype.addBatchInput = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 20, opt_value, proto.inference.BatchInput, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelConfig} returns this
 */
proto.inference.ModelConfig.prototype.clearBatchInputList = function() {
  return this.setBatchInputList([]);
};


/**
 * repeated BatchOutput batch_output = 21;
 * @return {!Array<!proto.inference.BatchOutput>}
 */
proto.inference.ModelConfig.prototype.getBatchOutputList = function() {
  return /** @type{!Array<!proto.inference.BatchOutput>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.inference.BatchOutput, 21));
};


/**
 * @param {!Array<!proto.inference.BatchOutput>} value
 * @return {!proto.inference.ModelConfig} returns this
*/
proto.inference.ModelConfig.prototype.setBatchOutputList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 21, value);
};


/**
 * @param {!proto.inference.BatchOutput=} opt_value
 * @param {number=} opt_index
 * @return {!proto.inference.BatchOutput}
 */
proto.inference.ModelConfig.prototype.addBatchOutput = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 21, opt_value, proto.inference.BatchOutput, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelConfig} returns this
 */
proto.inference.ModelConfig.prototype.clearBatchOutputList = function() {
  return this.setBatchOutputList([]);
};


/**
 * optional ModelOptimizationPolicy optimization = 12;
 * @return {?proto.inference.ModelOptimizationPolicy}
 */
proto.inference.ModelConfig.prototype.getOptimization = function() {
  return /** @type{?proto.inference.ModelOptimizationPolicy} */ (
    jspb.Message.getWrapperField(this, proto.inference.ModelOptimizationPolicy, 12));
};


/**
 * @param {?proto.inference.ModelOptimizationPolicy|undefined} value
 * @return {!proto.inference.ModelConfig} returns this
*/
proto.inference.ModelConfig.prototype.setOptimization = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.ModelConfig} returns this
 */
proto.inference.ModelConfig.prototype.clearOptimization = function() {
  return this.setOptimization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelConfig.prototype.hasOptimization = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional ModelDynamicBatching dynamic_batching = 11;
 * @return {?proto.inference.ModelDynamicBatching}
 */
proto.inference.ModelConfig.prototype.getDynamicBatching = function() {
  return /** @type{?proto.inference.ModelDynamicBatching} */ (
    jspb.Message.getWrapperField(this, proto.inference.ModelDynamicBatching, 11));
};


/**
 * @param {?proto.inference.ModelDynamicBatching|undefined} value
 * @return {!proto.inference.ModelConfig} returns this
*/
proto.inference.ModelConfig.prototype.setDynamicBatching = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.inference.ModelConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.ModelConfig} returns this
 */
proto.inference.ModelConfig.prototype.clearDynamicBatching = function() {
  return this.setDynamicBatching(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelConfig.prototype.hasDynamicBatching = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional ModelSequenceBatching sequence_batching = 13;
 * @return {?proto.inference.ModelSequenceBatching}
 */
proto.inference.ModelConfig.prototype.getSequenceBatching = function() {
  return /** @type{?proto.inference.ModelSequenceBatching} */ (
    jspb.Message.getWrapperField(this, proto.inference.ModelSequenceBatching, 13));
};


/**
 * @param {?proto.inference.ModelSequenceBatching|undefined} value
 * @return {!proto.inference.ModelConfig} returns this
*/
proto.inference.ModelConfig.prototype.setSequenceBatching = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.inference.ModelConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.ModelConfig} returns this
 */
proto.inference.ModelConfig.prototype.clearSequenceBatching = function() {
  return this.setSequenceBatching(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelConfig.prototype.hasSequenceBatching = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional ModelEnsembling ensemble_scheduling = 15;
 * @return {?proto.inference.ModelEnsembling}
 */
proto.inference.ModelConfig.prototype.getEnsembleScheduling = function() {
  return /** @type{?proto.inference.ModelEnsembling} */ (
    jspb.Message.getWrapperField(this, proto.inference.ModelEnsembling, 15));
};


/**
 * @param {?proto.inference.ModelEnsembling|undefined} value
 * @return {!proto.inference.ModelConfig} returns this
*/
proto.inference.ModelConfig.prototype.setEnsembleScheduling = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.inference.ModelConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.ModelConfig} returns this
 */
proto.inference.ModelConfig.prototype.clearEnsembleScheduling = function() {
  return this.setEnsembleScheduling(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelConfig.prototype.hasEnsembleScheduling = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * repeated ModelInstanceGroup instance_group = 7;
 * @return {!Array<!proto.inference.ModelInstanceGroup>}
 */
proto.inference.ModelConfig.prototype.getInstanceGroupList = function() {
  return /** @type{!Array<!proto.inference.ModelInstanceGroup>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.inference.ModelInstanceGroup, 7));
};


/**
 * @param {!Array<!proto.inference.ModelInstanceGroup>} value
 * @return {!proto.inference.ModelConfig} returns this
*/
proto.inference.ModelConfig.prototype.setInstanceGroupList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.inference.ModelInstanceGroup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelInstanceGroup}
 */
proto.inference.ModelConfig.prototype.addInstanceGroup = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.inference.ModelInstanceGroup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelConfig} returns this
 */
proto.inference.ModelConfig.prototype.clearInstanceGroupList = function() {
  return this.setInstanceGroupList([]);
};


/**
 * optional string default_model_filename = 8;
 * @return {string}
 */
proto.inference.ModelConfig.prototype.getDefaultModelFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.inference.ModelConfig} returns this
 */
proto.inference.ModelConfig.prototype.setDefaultModelFilename = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * map<string, string> cc_model_filenames = 9;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.inference.ModelConfig.prototype.getCcModelFilenamesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 9, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.inference.ModelConfig} returns this
 */
proto.inference.ModelConfig.prototype.clearCcModelFilenamesMap = function() {
  this.getCcModelFilenamesMap().clear();
  return this;};


/**
 * map<string, string> metric_tags = 10;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.inference.ModelConfig.prototype.getMetricTagsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 10, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.inference.ModelConfig} returns this
 */
proto.inference.ModelConfig.prototype.clearMetricTagsMap = function() {
  this.getMetricTagsMap().clear();
  return this;};


/**
 * map<string, ModelParameter> parameters = 14;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.inference.ModelParameter>}
 */
proto.inference.ModelConfig.prototype.getParametersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.inference.ModelParameter>} */ (
      jspb.Message.getMapField(this, 14, opt_noLazyCreate,
      proto.inference.ModelParameter));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.inference.ModelConfig} returns this
 */
proto.inference.ModelConfig.prototype.clearParametersMap = function() {
  this.getParametersMap().clear();
  return this;};


/**
 * repeated ModelWarmup model_warmup = 16;
 * @return {!Array<!proto.inference.ModelWarmup>}
 */
proto.inference.ModelConfig.prototype.getModelWarmupList = function() {
  return /** @type{!Array<!proto.inference.ModelWarmup>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.inference.ModelWarmup, 16));
};


/**
 * @param {!Array<!proto.inference.ModelWarmup>} value
 * @return {!proto.inference.ModelConfig} returns this
*/
proto.inference.ModelConfig.prototype.setModelWarmupList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 16, value);
};


/**
 * @param {!proto.inference.ModelWarmup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.inference.ModelWarmup}
 */
proto.inference.ModelConfig.prototype.addModelWarmup = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 16, opt_value, proto.inference.ModelWarmup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.inference.ModelConfig} returns this
 */
proto.inference.ModelConfig.prototype.clearModelWarmupList = function() {
  return this.setModelWarmupList([]);
};


/**
 * optional ModelOperations model_operations = 18;
 * @return {?proto.inference.ModelOperations}
 */
proto.inference.ModelConfig.prototype.getModelOperations = function() {
  return /** @type{?proto.inference.ModelOperations} */ (
    jspb.Message.getWrapperField(this, proto.inference.ModelOperations, 18));
};


/**
 * @param {?proto.inference.ModelOperations|undefined} value
 * @return {!proto.inference.ModelConfig} returns this
*/
proto.inference.ModelConfig.prototype.setModelOperations = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.ModelConfig} returns this
 */
proto.inference.ModelConfig.prototype.clearModelOperations = function() {
  return this.setModelOperations(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelConfig.prototype.hasModelOperations = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional ModelTransactionPolicy model_transaction_policy = 19;
 * @return {?proto.inference.ModelTransactionPolicy}
 */
proto.inference.ModelConfig.prototype.getModelTransactionPolicy = function() {
  return /** @type{?proto.inference.ModelTransactionPolicy} */ (
    jspb.Message.getWrapperField(this, proto.inference.ModelTransactionPolicy, 19));
};


/**
 * @param {?proto.inference.ModelTransactionPolicy|undefined} value
 * @return {!proto.inference.ModelConfig} returns this
*/
proto.inference.ModelConfig.prototype.setModelTransactionPolicy = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.ModelConfig} returns this
 */
proto.inference.ModelConfig.prototype.clearModelTransactionPolicy = function() {
  return this.setModelTransactionPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelConfig.prototype.hasModelTransactionPolicy = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional ModelRepositoryAgents model_repository_agents = 23;
 * @return {?proto.inference.ModelRepositoryAgents}
 */
proto.inference.ModelConfig.prototype.getModelRepositoryAgents = function() {
  return /** @type{?proto.inference.ModelRepositoryAgents} */ (
    jspb.Message.getWrapperField(this, proto.inference.ModelRepositoryAgents, 23));
};


/**
 * @param {?proto.inference.ModelRepositoryAgents|undefined} value
 * @return {!proto.inference.ModelConfig} returns this
*/
proto.inference.ModelConfig.prototype.setModelRepositoryAgents = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.ModelConfig} returns this
 */
proto.inference.ModelConfig.prototype.clearModelRepositoryAgents = function() {
  return this.setModelRepositoryAgents(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelConfig.prototype.hasModelRepositoryAgents = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional ModelResponseCache response_cache = 24;
 * @return {?proto.inference.ModelResponseCache}
 */
proto.inference.ModelConfig.prototype.getResponseCache = function() {
  return /** @type{?proto.inference.ModelResponseCache} */ (
    jspb.Message.getWrapperField(this, proto.inference.ModelResponseCache, 24));
};


/**
 * @param {?proto.inference.ModelResponseCache|undefined} value
 * @return {!proto.inference.ModelConfig} returns this
*/
proto.inference.ModelConfig.prototype.setResponseCache = function(value) {
  return jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.inference.ModelConfig} returns this
 */
proto.inference.ModelConfig.prototype.clearResponseCache = function() {
  return this.setResponseCache(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.inference.ModelConfig.prototype.hasResponseCache = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * @enum {number}
 */
proto.inference.DataType = {
  TYPE_INVALID: 0,
  TYPE_BOOL: 1,
  TYPE_UINT8: 2,
  TYPE_UINT16: 3,
  TYPE_UINT32: 4,
  TYPE_UINT64: 5,
  TYPE_INT8: 6,
  TYPE_INT16: 7,
  TYPE_INT32: 8,
  TYPE_INT64: 9,
  TYPE_FP16: 10,
  TYPE_FP32: 11,
  TYPE_FP64: 12,
  TYPE_STRING: 13,
  TYPE_BF16: 14
};

goog.object.extend(exports, proto.inference);
