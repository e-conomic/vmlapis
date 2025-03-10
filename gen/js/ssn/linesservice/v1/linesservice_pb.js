// source: ssn/linesservice/v1/linesservice.proto
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

var ssn_type_candidate_pb = require('../../../ssn/type/candidate_pb.js');
goog.object.extend(proto, ssn_type_candidate_pb);
var ssn_type_text_annotation_pb = require('../../../ssn/type/text_annotation_pb.js');
goog.object.extend(proto, ssn_type_text_annotation_pb);
goog.exportSymbol('proto.ssn.linesservice.v1.LinesRequest', null, global);
goog.exportSymbol('proto.ssn.linesservice.v1.LinesResponse', null, global);
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
proto.ssn.linesservice.v1.LinesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ssn.linesservice.v1.LinesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ssn.linesservice.v1.LinesRequest.displayName = 'proto.ssn.linesservice.v1.LinesRequest';
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
proto.ssn.linesservice.v1.LinesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ssn.linesservice.v1.LinesResponse.repeatedFields_, null);
};
goog.inherits(proto.ssn.linesservice.v1.LinesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ssn.linesservice.v1.LinesResponse.displayName = 'proto.ssn.linesservice.v1.LinesResponse';
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
proto.ssn.linesservice.v1.LinesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ssn.linesservice.v1.LinesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ssn.linesservice.v1.LinesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ssn.linesservice.v1.LinesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    textAnnotation: (f = msg.getTextAnnotation()) && ssn_type_text_annotation_pb.TextAnnotation.toObject(includeInstance, f),
    image: msg.getImage_asB64()
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
 * @return {!proto.ssn.linesservice.v1.LinesRequest}
 */
proto.ssn.linesservice.v1.LinesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ssn.linesservice.v1.LinesRequest;
  return proto.ssn.linesservice.v1.LinesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ssn.linesservice.v1.LinesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ssn.linesservice.v1.LinesRequest}
 */
proto.ssn.linesservice.v1.LinesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ssn_type_text_annotation_pb.TextAnnotation;
      reader.readMessage(value,ssn_type_text_annotation_pb.TextAnnotation.deserializeBinaryFromReader);
      msg.setTextAnnotation(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setImage(value);
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
proto.ssn.linesservice.v1.LinesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ssn.linesservice.v1.LinesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ssn.linesservice.v1.LinesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ssn.linesservice.v1.LinesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTextAnnotation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ssn_type_text_annotation_pb.TextAnnotation.serializeBinaryToWriter
    );
  }
  f = message.getImage_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional ssn.type.TextAnnotation text_annotation = 1;
 * @return {?proto.ssn.type.TextAnnotation}
 */
proto.ssn.linesservice.v1.LinesRequest.prototype.getTextAnnotation = function() {
  return /** @type{?proto.ssn.type.TextAnnotation} */ (
    jspb.Message.getWrapperField(this, ssn_type_text_annotation_pb.TextAnnotation, 1));
};


/**
 * @param {?proto.ssn.type.TextAnnotation|undefined} value
 * @return {!proto.ssn.linesservice.v1.LinesRequest} returns this
*/
proto.ssn.linesservice.v1.LinesRequest.prototype.setTextAnnotation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ssn.linesservice.v1.LinesRequest} returns this
 */
proto.ssn.linesservice.v1.LinesRequest.prototype.clearTextAnnotation = function() {
  return this.setTextAnnotation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ssn.linesservice.v1.LinesRequest.prototype.hasTextAnnotation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes image = 2;
 * @return {!(string|Uint8Array)}
 */
proto.ssn.linesservice.v1.LinesRequest.prototype.getImage = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes image = 2;
 * This is a type-conversion wrapper around `getImage()`
 * @return {string}
 */
proto.ssn.linesservice.v1.LinesRequest.prototype.getImage_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getImage()));
};


/**
 * optional bytes image = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getImage()`
 * @return {!Uint8Array}
 */
proto.ssn.linesservice.v1.LinesRequest.prototype.getImage_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getImage()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ssn.linesservice.v1.LinesRequest} returns this
 */
proto.ssn.linesservice.v1.LinesRequest.prototype.setImage = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ssn.linesservice.v1.LinesResponse.repeatedFields_ = [1];



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
proto.ssn.linesservice.v1.LinesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ssn.linesservice.v1.LinesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ssn.linesservice.v1.LinesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ssn.linesservice.v1.LinesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    purchaseLinesList: jspb.Message.toObjectList(msg.getPurchaseLinesList(),
    ssn_type_candidate_pb.PurchaseLineCandidate.toObject, includeInstance)
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
 * @return {!proto.ssn.linesservice.v1.LinesResponse}
 */
proto.ssn.linesservice.v1.LinesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ssn.linesservice.v1.LinesResponse;
  return proto.ssn.linesservice.v1.LinesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ssn.linesservice.v1.LinesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ssn.linesservice.v1.LinesResponse}
 */
proto.ssn.linesservice.v1.LinesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ssn_type_candidate_pb.PurchaseLineCandidate;
      reader.readMessage(value,ssn_type_candidate_pb.PurchaseLineCandidate.deserializeBinaryFromReader);
      msg.addPurchaseLines(value);
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
proto.ssn.linesservice.v1.LinesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ssn.linesservice.v1.LinesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ssn.linesservice.v1.LinesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ssn.linesservice.v1.LinesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPurchaseLinesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      ssn_type_candidate_pb.PurchaseLineCandidate.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ssn.type.PurchaseLineCandidate purchase_lines = 1;
 * @return {!Array<!proto.ssn.type.PurchaseLineCandidate>}
 */
proto.ssn.linesservice.v1.LinesResponse.prototype.getPurchaseLinesList = function() {
  return /** @type{!Array<!proto.ssn.type.PurchaseLineCandidate>} */ (
    jspb.Message.getRepeatedWrapperField(this, ssn_type_candidate_pb.PurchaseLineCandidate, 1));
};


/**
 * @param {!Array<!proto.ssn.type.PurchaseLineCandidate>} value
 * @return {!proto.ssn.linesservice.v1.LinesResponse} returns this
*/
proto.ssn.linesservice.v1.LinesResponse.prototype.setPurchaseLinesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ssn.type.PurchaseLineCandidate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ssn.type.PurchaseLineCandidate}
 */
proto.ssn.linesservice.v1.LinesResponse.prototype.addPurchaseLines = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ssn.type.PurchaseLineCandidate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ssn.linesservice.v1.LinesResponse} returns this
 */
proto.ssn.linesservice.v1.LinesResponse.prototype.clearPurchaseLinesList = function() {
  return this.setPurchaseLinesList([]);
};


goog.object.extend(exports, proto.ssn.linesservice.v1);
