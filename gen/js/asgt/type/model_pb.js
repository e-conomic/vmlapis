// source: asgt/type/model.proto
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

var asgt_type_model_file_pb = require('../../asgt/type/model_file_pb.js');
goog.object.extend(proto, asgt_type_model_file_pb);
var asgt_type_prediction_pb = require('../../asgt/type/prediction_pb.js');
goog.object.extend(proto, asgt_type_prediction_pb);
var asgt_type_target_metrics_pb = require('../../asgt/type/target_metrics_pb.js');
goog.object.extend(proto, asgt_type_target_metrics_pb);
var gen_bq_schema_bq_field_pb = require('../../gen_bq_schema/bq_field_pb.js');
goog.object.extend(proto, gen_bq_schema_bq_field_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.asgt.type.Model', null, global);
goog.exportSymbol('proto.asgt.type.Model.InputType', null, global);
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
proto.asgt.type.Model = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.asgt.type.Model.repeatedFields_, null);
};
goog.inherits(proto.asgt.type.Model, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asgt.type.Model.displayName = 'proto.asgt.type.Model';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.asgt.type.Model.repeatedFields_ = [7,10,11,12];



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
proto.asgt.type.Model.prototype.toObject = function(opt_includeInstance) {
  return proto.asgt.type.Model.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asgt.type.Model} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.type.Model.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 3, 0),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    datasetSize: jspb.Message.getFieldWithDefault(msg, 5, 0),
    trainingSize: jspb.Message.getFieldWithDefault(msg, 6, 0),
    confidenceScoresList: jspb.Message.toObjectList(msg.getConfidenceScoresList(),
    asgt_type_target_metrics_pb.TargetMetrics.toObject, includeInstance),
    inputType: jspb.Message.getFieldWithDefault(msg, 8, 0),
    datasetType: jspb.Message.getFieldWithDefault(msg, 9, ""),
    modelFilesList: jspb.Message.toObjectList(msg.getModelFilesList(),
    asgt_type_model_file_pb.ModelFile.toObject, includeInstance),
    confidenceThresholdsList: jspb.Message.toObjectList(msg.getConfidenceThresholdsList(),
    asgt_type_prediction_pb.Confidence.toObject, includeInstance),
    targetConfidenceThresholdsList: jspb.Message.toObjectList(msg.getTargetConfidenceThresholdsList(),
    asgt_type_prediction_pb.Confidence.toObject, includeInstance)
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
 * @return {!proto.asgt.type.Model}
 */
proto.asgt.type.Model.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asgt.type.Model;
  return proto.asgt.type.Model.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asgt.type.Model} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asgt.type.Model}
 */
proto.asgt.type.Model.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVersion(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDatasetSize(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTrainingSize(value);
      break;
    case 7:
      var value = new asgt_type_target_metrics_pb.TargetMetrics;
      reader.readMessage(value,asgt_type_target_metrics_pb.TargetMetrics.deserializeBinaryFromReader);
      msg.addConfidenceScores(value);
      break;
    case 8:
      var value = /** @type {!proto.asgt.type.Model.InputType} */ (reader.readEnum());
      msg.setInputType(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasetType(value);
      break;
    case 10:
      var value = new asgt_type_model_file_pb.ModelFile;
      reader.readMessage(value,asgt_type_model_file_pb.ModelFile.deserializeBinaryFromReader);
      msg.addModelFiles(value);
      break;
    case 11:
      var value = new asgt_type_prediction_pb.Confidence;
      reader.readMessage(value,asgt_type_prediction_pb.Confidence.deserializeBinaryFromReader);
      msg.addConfidenceThresholds(value);
      break;
    case 12:
      var value = new asgt_type_prediction_pb.Confidence;
      reader.readMessage(value,asgt_type_prediction_pb.Confidence.deserializeBinaryFromReader);
      msg.addTargetConfidenceThresholds(value);
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
proto.asgt.type.Model.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asgt.type.Model.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asgt.type.Model} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.type.Model.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDatasetSize();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getTrainingSize();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getConfidenceScoresList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      asgt_type_target_metrics_pb.TargetMetrics.serializeBinaryToWriter
    );
  }
  f = message.getInputType();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getDatasetType();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getModelFilesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      asgt_type_model_file_pb.ModelFile.serializeBinaryToWriter
    );
  }
  f = message.getConfidenceThresholdsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      asgt_type_prediction_pb.Confidence.serializeBinaryToWriter
    );
  }
  f = message.getTargetConfidenceThresholdsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      asgt_type_prediction_pb.Confidence.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.asgt.type.Model.InputType = {
  FEATURE_TENSORS: 0,
  EXAMPLE_TENSOR: 1
};

/**
 * optional int64 version = 3;
 * @return {number}
 */
proto.asgt.type.Model.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.asgt.type.Model} returns this
 */
proto.asgt.type.Model.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.asgt.type.Model.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.asgt.type.Model} returns this
*/
proto.asgt.type.Model.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.asgt.type.Model} returns this
 */
proto.asgt.type.Model.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.asgt.type.Model.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 dataset_size = 5;
 * @return {number}
 */
proto.asgt.type.Model.prototype.getDatasetSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.asgt.type.Model} returns this
 */
proto.asgt.type.Model.prototype.setDatasetSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 training_size = 6;
 * @return {number}
 */
proto.asgt.type.Model.prototype.getTrainingSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.asgt.type.Model} returns this
 */
proto.asgt.type.Model.prototype.setTrainingSize = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * repeated TargetMetrics confidence_scores = 7;
 * @return {!Array<!proto.asgt.type.TargetMetrics>}
 */
proto.asgt.type.Model.prototype.getConfidenceScoresList = function() {
  return /** @type{!Array<!proto.asgt.type.TargetMetrics>} */ (
    jspb.Message.getRepeatedWrapperField(this, asgt_type_target_metrics_pb.TargetMetrics, 7));
};


/**
 * @param {!Array<!proto.asgt.type.TargetMetrics>} value
 * @return {!proto.asgt.type.Model} returns this
*/
proto.asgt.type.Model.prototype.setConfidenceScoresList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.asgt.type.TargetMetrics=} opt_value
 * @param {number=} opt_index
 * @return {!proto.asgt.type.TargetMetrics}
 */
proto.asgt.type.Model.prototype.addConfidenceScores = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.asgt.type.TargetMetrics, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.asgt.type.Model} returns this
 */
proto.asgt.type.Model.prototype.clearConfidenceScoresList = function() {
  return this.setConfidenceScoresList([]);
};


/**
 * optional InputType input_type = 8;
 * @return {!proto.asgt.type.Model.InputType}
 */
proto.asgt.type.Model.prototype.getInputType = function() {
  return /** @type {!proto.asgt.type.Model.InputType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.asgt.type.Model.InputType} value
 * @return {!proto.asgt.type.Model} returns this
 */
proto.asgt.type.Model.prototype.setInputType = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional string dataset_type = 9;
 * @return {string}
 */
proto.asgt.type.Model.prototype.getDatasetType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.asgt.type.Model} returns this
 */
proto.asgt.type.Model.prototype.setDatasetType = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * repeated ModelFile model_files = 10;
 * @return {!Array<!proto.asgt.type.ModelFile>}
 */
proto.asgt.type.Model.prototype.getModelFilesList = function() {
  return /** @type{!Array<!proto.asgt.type.ModelFile>} */ (
    jspb.Message.getRepeatedWrapperField(this, asgt_type_model_file_pb.ModelFile, 10));
};


/**
 * @param {!Array<!proto.asgt.type.ModelFile>} value
 * @return {!proto.asgt.type.Model} returns this
*/
proto.asgt.type.Model.prototype.setModelFilesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.asgt.type.ModelFile=} opt_value
 * @param {number=} opt_index
 * @return {!proto.asgt.type.ModelFile}
 */
proto.asgt.type.Model.prototype.addModelFiles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.asgt.type.ModelFile, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.asgt.type.Model} returns this
 */
proto.asgt.type.Model.prototype.clearModelFilesList = function() {
  return this.setModelFilesList([]);
};


/**
 * repeated Confidence confidence_thresholds = 11;
 * @return {!Array<!proto.asgt.type.Confidence>}
 */
proto.asgt.type.Model.prototype.getConfidenceThresholdsList = function() {
  return /** @type{!Array<!proto.asgt.type.Confidence>} */ (
    jspb.Message.getRepeatedWrapperField(this, asgt_type_prediction_pb.Confidence, 11));
};


/**
 * @param {!Array<!proto.asgt.type.Confidence>} value
 * @return {!proto.asgt.type.Model} returns this
*/
proto.asgt.type.Model.prototype.setConfidenceThresholdsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.asgt.type.Confidence=} opt_value
 * @param {number=} opt_index
 * @return {!proto.asgt.type.Confidence}
 */
proto.asgt.type.Model.prototype.addConfidenceThresholds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.asgt.type.Confidence, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.asgt.type.Model} returns this
 */
proto.asgt.type.Model.prototype.clearConfidenceThresholdsList = function() {
  return this.setConfidenceThresholdsList([]);
};


/**
 * repeated Confidence target_confidence_thresholds = 12;
 * @return {!Array<!proto.asgt.type.Confidence>}
 */
proto.asgt.type.Model.prototype.getTargetConfidenceThresholdsList = function() {
  return /** @type{!Array<!proto.asgt.type.Confidence>} */ (
    jspb.Message.getRepeatedWrapperField(this, asgt_type_prediction_pb.Confidence, 12));
};


/**
 * @param {!Array<!proto.asgt.type.Confidence>} value
 * @return {!proto.asgt.type.Model} returns this
*/
proto.asgt.type.Model.prototype.setTargetConfidenceThresholdsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.asgt.type.Confidence=} opt_value
 * @param {number=} opt_index
 * @return {!proto.asgt.type.Confidence}
 */
proto.asgt.type.Model.prototype.addTargetConfidenceThresholds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.asgt.type.Confidence, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.asgt.type.Model} returns this
 */
proto.asgt.type.Model.prototype.clearTargetConfidenceThresholdsList = function() {
  return this.setTargetConfidenceThresholdsList([]);
};


goog.object.extend(exports, proto.asgt.type);
