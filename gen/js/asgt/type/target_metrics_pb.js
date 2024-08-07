// source: asgt/type/target_metrics.proto
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
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.asgt.type.TargetMetrics', null, global);
goog.exportSymbol('proto.asgt.type.TargetMetrics.Metric', null, global);
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
proto.asgt.type.TargetMetrics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.asgt.type.TargetMetrics.repeatedFields_, null);
};
goog.inherits(proto.asgt.type.TargetMetrics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asgt.type.TargetMetrics.displayName = 'proto.asgt.type.TargetMetrics';
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
proto.asgt.type.TargetMetrics.Metric = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asgt.type.TargetMetrics.Metric, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asgt.type.TargetMetrics.Metric.displayName = 'proto.asgt.type.TargetMetrics.Metric';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.asgt.type.TargetMetrics.repeatedFields_ = [2];



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
proto.asgt.type.TargetMetrics.prototype.toObject = function(opt_includeInstance) {
  return proto.asgt.type.TargetMetrics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asgt.type.TargetMetrics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.type.TargetMetrics.toObject = function(includeInstance, msg) {
  var f, obj = {
    target: jspb.Message.getFieldWithDefault(msg, 1, ""),
    metricsList: jspb.Message.toObjectList(msg.getMetricsList(),
    proto.asgt.type.TargetMetrics.Metric.toObject, includeInstance)
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
 * @return {!proto.asgt.type.TargetMetrics}
 */
proto.asgt.type.TargetMetrics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asgt.type.TargetMetrics;
  return proto.asgt.type.TargetMetrics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asgt.type.TargetMetrics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asgt.type.TargetMetrics}
 */
proto.asgt.type.TargetMetrics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTarget(value);
      break;
    case 2:
      var value = new proto.asgt.type.TargetMetrics.Metric;
      reader.readMessage(value,proto.asgt.type.TargetMetrics.Metric.deserializeBinaryFromReader);
      msg.addMetrics(value);
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
proto.asgt.type.TargetMetrics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asgt.type.TargetMetrics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asgt.type.TargetMetrics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.type.TargetMetrics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTarget();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMetricsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.asgt.type.TargetMetrics.Metric.serializeBinaryToWriter
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
proto.asgt.type.TargetMetrics.Metric.prototype.toObject = function(opt_includeInstance) {
  return proto.asgt.type.TargetMetrics.Metric.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asgt.type.TargetMetrics.Metric} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.type.TargetMetrics.Metric.toObject = function(includeInstance, msg) {
  var f, obj = {
    precision: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    confidence: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    answerRate: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    truePositive: jspb.Message.getFieldWithDefault(msg, 4, 0),
    trueNegative: jspb.Message.getFieldWithDefault(msg, 5, 0),
    falsePositive: jspb.Message.getFieldWithDefault(msg, 6, 0),
    falseNegative: jspb.Message.getFieldWithDefault(msg, 7, 0),
    mcc: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    accuracy: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    balancedAccuracy: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0)
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
 * @return {!proto.asgt.type.TargetMetrics.Metric}
 */
proto.asgt.type.TargetMetrics.Metric.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asgt.type.TargetMetrics.Metric;
  return proto.asgt.type.TargetMetrics.Metric.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asgt.type.TargetMetrics.Metric} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asgt.type.TargetMetrics.Metric}
 */
proto.asgt.type.TargetMetrics.Metric.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPrecision(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setConfidence(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAnswerRate(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTruePositive(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTrueNegative(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFalsePositive(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFalseNegative(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMcc(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAccuracy(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBalancedAccuracy(value);
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
proto.asgt.type.TargetMetrics.Metric.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asgt.type.TargetMetrics.Metric.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asgt.type.TargetMetrics.Metric} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.type.TargetMetrics.Metric.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrecision();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getConfidence();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getAnswerRate();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getTruePositive();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getTrueNegative();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getFalsePositive();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getFalseNegative();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getMcc();
  if (f !== 0.0) {
    writer.writeFloat(
      8,
      f
    );
  }
  f = message.getAccuracy();
  if (f !== 0.0) {
    writer.writeFloat(
      9,
      f
    );
  }
  f = message.getBalancedAccuracy();
  if (f !== 0.0) {
    writer.writeFloat(
      10,
      f
    );
  }
};


/**
 * optional float precision = 1;
 * @return {number}
 */
proto.asgt.type.TargetMetrics.Metric.prototype.getPrecision = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.asgt.type.TargetMetrics.Metric} returns this
 */
proto.asgt.type.TargetMetrics.Metric.prototype.setPrecision = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float confidence = 2;
 * @return {number}
 */
proto.asgt.type.TargetMetrics.Metric.prototype.getConfidence = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.asgt.type.TargetMetrics.Metric} returns this
 */
proto.asgt.type.TargetMetrics.Metric.prototype.setConfidence = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float answer_rate = 3;
 * @return {number}
 */
proto.asgt.type.TargetMetrics.Metric.prototype.getAnswerRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.asgt.type.TargetMetrics.Metric} returns this
 */
proto.asgt.type.TargetMetrics.Metric.prototype.setAnswerRate = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional int32 true_positive = 4;
 * @return {number}
 */
proto.asgt.type.TargetMetrics.Metric.prototype.getTruePositive = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.asgt.type.TargetMetrics.Metric} returns this
 */
proto.asgt.type.TargetMetrics.Metric.prototype.setTruePositive = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 true_negative = 5;
 * @return {number}
 */
proto.asgt.type.TargetMetrics.Metric.prototype.getTrueNegative = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.asgt.type.TargetMetrics.Metric} returns this
 */
proto.asgt.type.TargetMetrics.Metric.prototype.setTrueNegative = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 false_positive = 6;
 * @return {number}
 */
proto.asgt.type.TargetMetrics.Metric.prototype.getFalsePositive = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.asgt.type.TargetMetrics.Metric} returns this
 */
proto.asgt.type.TargetMetrics.Metric.prototype.setFalsePositive = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 false_negative = 7;
 * @return {number}
 */
proto.asgt.type.TargetMetrics.Metric.prototype.getFalseNegative = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.asgt.type.TargetMetrics.Metric} returns this
 */
proto.asgt.type.TargetMetrics.Metric.prototype.setFalseNegative = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional float mcc = 8;
 * @return {number}
 */
proto.asgt.type.TargetMetrics.Metric.prototype.getMcc = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.asgt.type.TargetMetrics.Metric} returns this
 */
proto.asgt.type.TargetMetrics.Metric.prototype.setMcc = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional float accuracy = 9;
 * @return {number}
 */
proto.asgt.type.TargetMetrics.Metric.prototype.getAccuracy = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.asgt.type.TargetMetrics.Metric} returns this
 */
proto.asgt.type.TargetMetrics.Metric.prototype.setAccuracy = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional float balanced_accuracy = 10;
 * @return {number}
 */
proto.asgt.type.TargetMetrics.Metric.prototype.getBalancedAccuracy = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.asgt.type.TargetMetrics.Metric} returns this
 */
proto.asgt.type.TargetMetrics.Metric.prototype.setBalancedAccuracy = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional string target = 1;
 * @return {string}
 */
proto.asgt.type.TargetMetrics.prototype.getTarget = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.asgt.type.TargetMetrics} returns this
 */
proto.asgt.type.TargetMetrics.prototype.setTarget = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Metric metrics = 2;
 * @return {!Array<!proto.asgt.type.TargetMetrics.Metric>}
 */
proto.asgt.type.TargetMetrics.prototype.getMetricsList = function() {
  return /** @type{!Array<!proto.asgt.type.TargetMetrics.Metric>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.asgt.type.TargetMetrics.Metric, 2));
};


/**
 * @param {!Array<!proto.asgt.type.TargetMetrics.Metric>} value
 * @return {!proto.asgt.type.TargetMetrics} returns this
*/
proto.asgt.type.TargetMetrics.prototype.setMetricsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.asgt.type.TargetMetrics.Metric=} opt_value
 * @param {number=} opt_index
 * @return {!proto.asgt.type.TargetMetrics.Metric}
 */
proto.asgt.type.TargetMetrics.prototype.addMetrics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.asgt.type.TargetMetrics.Metric, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.asgt.type.TargetMetrics} returns this
 */
proto.asgt.type.TargetMetrics.prototype.clearMetricsList = function() {
  return this.setMetricsList([]);
};


goog.object.extend(exports, proto.asgt.type);
