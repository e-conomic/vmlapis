// source: asgt/v2alpha/type/target_metrics.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.asgt.v2alpha.type.TargetMetrics', null, global);
goog.exportSymbol('proto.asgt.v2alpha.type.TargetMetrics.Metric', null, global);
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
proto.asgt.v2alpha.type.TargetMetrics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.asgt.v2alpha.type.TargetMetrics.repeatedFields_, null);
};
goog.inherits(proto.asgt.v2alpha.type.TargetMetrics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asgt.v2alpha.type.TargetMetrics.displayName = 'proto.asgt.v2alpha.type.TargetMetrics';
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
proto.asgt.v2alpha.type.TargetMetrics.Metric = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asgt.v2alpha.type.TargetMetrics.Metric, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asgt.v2alpha.type.TargetMetrics.Metric.displayName = 'proto.asgt.v2alpha.type.TargetMetrics.Metric';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.asgt.v2alpha.type.TargetMetrics.repeatedFields_ = [2];



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
proto.asgt.v2alpha.type.TargetMetrics.prototype.toObject = function(opt_includeInstance) {
  return proto.asgt.v2alpha.type.TargetMetrics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asgt.v2alpha.type.TargetMetrics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.v2alpha.type.TargetMetrics.toObject = function(includeInstance, msg) {
  var f, obj = {
    target: jspb.Message.getFieldWithDefault(msg, 1, ""),
    metricsList: jspb.Message.toObjectList(msg.getMetricsList(),
    proto.asgt.v2alpha.type.TargetMetrics.Metric.toObject, includeInstance)
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
 * @return {!proto.asgt.v2alpha.type.TargetMetrics}
 */
proto.asgt.v2alpha.type.TargetMetrics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asgt.v2alpha.type.TargetMetrics;
  return proto.asgt.v2alpha.type.TargetMetrics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asgt.v2alpha.type.TargetMetrics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asgt.v2alpha.type.TargetMetrics}
 */
proto.asgt.v2alpha.type.TargetMetrics.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.asgt.v2alpha.type.TargetMetrics.Metric;
      reader.readMessage(value,proto.asgt.v2alpha.type.TargetMetrics.Metric.deserializeBinaryFromReader);
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
proto.asgt.v2alpha.type.TargetMetrics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asgt.v2alpha.type.TargetMetrics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asgt.v2alpha.type.TargetMetrics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.v2alpha.type.TargetMetrics.serializeBinaryToWriter = function(message, writer) {
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
      proto.asgt.v2alpha.type.TargetMetrics.Metric.serializeBinaryToWriter
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
proto.asgt.v2alpha.type.TargetMetrics.Metric.prototype.toObject = function(opt_includeInstance) {
  return proto.asgt.v2alpha.type.TargetMetrics.Metric.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asgt.v2alpha.type.TargetMetrics.Metric} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.v2alpha.type.TargetMetrics.Metric.toObject = function(includeInstance, msg) {
  var f, obj = {
    precision: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    confidence: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    answerRate: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.asgt.v2alpha.type.TargetMetrics.Metric}
 */
proto.asgt.v2alpha.type.TargetMetrics.Metric.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asgt.v2alpha.type.TargetMetrics.Metric;
  return proto.asgt.v2alpha.type.TargetMetrics.Metric.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asgt.v2alpha.type.TargetMetrics.Metric} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asgt.v2alpha.type.TargetMetrics.Metric}
 */
proto.asgt.v2alpha.type.TargetMetrics.Metric.deserializeBinaryFromReader = function(msg, reader) {
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
proto.asgt.v2alpha.type.TargetMetrics.Metric.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asgt.v2alpha.type.TargetMetrics.Metric.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asgt.v2alpha.type.TargetMetrics.Metric} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.v2alpha.type.TargetMetrics.Metric.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional float precision = 1;
 * @return {number}
 */
proto.asgt.v2alpha.type.TargetMetrics.Metric.prototype.getPrecision = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.asgt.v2alpha.type.TargetMetrics.Metric} returns this
 */
proto.asgt.v2alpha.type.TargetMetrics.Metric.prototype.setPrecision = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float confidence = 2;
 * @return {number}
 */
proto.asgt.v2alpha.type.TargetMetrics.Metric.prototype.getConfidence = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.asgt.v2alpha.type.TargetMetrics.Metric} returns this
 */
proto.asgt.v2alpha.type.TargetMetrics.Metric.prototype.setConfidence = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float answer_rate = 3;
 * @return {number}
 */
proto.asgt.v2alpha.type.TargetMetrics.Metric.prototype.getAnswerRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.asgt.v2alpha.type.TargetMetrics.Metric} returns this
 */
proto.asgt.v2alpha.type.TargetMetrics.Metric.prototype.setAnswerRate = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional string target = 1;
 * @return {string}
 */
proto.asgt.v2alpha.type.TargetMetrics.prototype.getTarget = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.asgt.v2alpha.type.TargetMetrics} returns this
 */
proto.asgt.v2alpha.type.TargetMetrics.prototype.setTarget = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Metric metrics = 2;
 * @return {!Array<!proto.asgt.v2alpha.type.TargetMetrics.Metric>}
 */
proto.asgt.v2alpha.type.TargetMetrics.prototype.getMetricsList = function() {
  return /** @type{!Array<!proto.asgt.v2alpha.type.TargetMetrics.Metric>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.asgt.v2alpha.type.TargetMetrics.Metric, 2));
};


/**
 * @param {!Array<!proto.asgt.v2alpha.type.TargetMetrics.Metric>} value
 * @return {!proto.asgt.v2alpha.type.TargetMetrics} returns this
*/
proto.asgt.v2alpha.type.TargetMetrics.prototype.setMetricsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.asgt.v2alpha.type.TargetMetrics.Metric=} opt_value
 * @param {number=} opt_index
 * @return {!proto.asgt.v2alpha.type.TargetMetrics.Metric}
 */
proto.asgt.v2alpha.type.TargetMetrics.prototype.addMetrics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.asgt.v2alpha.type.TargetMetrics.Metric, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.asgt.v2alpha.type.TargetMetrics} returns this
 */
proto.asgt.v2alpha.type.TargetMetrics.prototype.clearMetricsList = function() {
  return this.setMetricsList([]);
};


goog.object.extend(exports, proto.asgt.v2alpha.type);