// source: asgt/type/sample.proto
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

var asgt_type_data_pb = require('../../asgt/type/data_pb.js');
goog.object.extend(proto, asgt_type_data_pb);
var asgt_type_target_value_pb = require('../../asgt/type/target_value_pb.js');
goog.object.extend(proto, asgt_type_target_value_pb);
goog.exportSymbol('proto.asgt.type.Sample', null, global);
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
proto.asgt.type.Sample = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.asgt.type.Sample.repeatedFields_, null);
};
goog.inherits(proto.asgt.type.Sample, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asgt.type.Sample.displayName = 'proto.asgt.type.Sample';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.asgt.type.Sample.repeatedFields_ = [2];



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
proto.asgt.type.Sample.prototype.toObject = function(opt_includeInstance) {
  return proto.asgt.type.Sample.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asgt.type.Sample} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.type.Sample.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && asgt_type_data_pb.Data.toObject(includeInstance, f),
    targetValuesList: jspb.Message.toObjectList(msg.getTargetValuesList(),
    asgt_type_target_value_pb.TargetValue.toObject, includeInstance)
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
 * @return {!proto.asgt.type.Sample}
 */
proto.asgt.type.Sample.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asgt.type.Sample;
  return proto.asgt.type.Sample.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asgt.type.Sample} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asgt.type.Sample}
 */
proto.asgt.type.Sample.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new asgt_type_data_pb.Data;
      reader.readMessage(value,asgt_type_data_pb.Data.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 2:
      var value = new asgt_type_target_value_pb.TargetValue;
      reader.readMessage(value,asgt_type_target_value_pb.TargetValue.deserializeBinaryFromReader);
      msg.addTargetValues(value);
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
proto.asgt.type.Sample.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asgt.type.Sample.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asgt.type.Sample} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.type.Sample.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      asgt_type_data_pb.Data.serializeBinaryToWriter
    );
  }
  f = message.getTargetValuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      asgt_type_target_value_pb.TargetValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional Data data = 1;
 * @return {?proto.asgt.type.Data}
 */
proto.asgt.type.Sample.prototype.getData = function() {
  return /** @type{?proto.asgt.type.Data} */ (
    jspb.Message.getWrapperField(this, asgt_type_data_pb.Data, 1));
};


/**
 * @param {?proto.asgt.type.Data|undefined} value
 * @return {!proto.asgt.type.Sample} returns this
*/
proto.asgt.type.Sample.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.asgt.type.Sample} returns this
 */
proto.asgt.type.Sample.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.asgt.type.Sample.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated TargetValue target_values = 2;
 * @return {!Array<!proto.asgt.type.TargetValue>}
 */
proto.asgt.type.Sample.prototype.getTargetValuesList = function() {
  return /** @type{!Array<!proto.asgt.type.TargetValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, asgt_type_target_value_pb.TargetValue, 2));
};


/**
 * @param {!Array<!proto.asgt.type.TargetValue>} value
 * @return {!proto.asgt.type.Sample} returns this
*/
proto.asgt.type.Sample.prototype.setTargetValuesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.asgt.type.TargetValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.asgt.type.TargetValue}
 */
proto.asgt.type.Sample.prototype.addTargetValues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.asgt.type.TargetValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.asgt.type.Sample} returns this
 */
proto.asgt.type.Sample.prototype.clearTargetValuesList = function() {
  return this.setTargetValuesList([]);
};


goog.object.extend(exports, proto.asgt.type);
