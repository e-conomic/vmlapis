// source: ssn/pdfservice/v1/pdfservice.proto
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

goog.exportSymbol('proto.ssn.pdfservice.v1.RasterizePdfRequest', null, global);
goog.exportSymbol('proto.ssn.pdfservice.v1.RasterizePdfRequest.ColorSpace', null, global);
goog.exportSymbol('proto.ssn.pdfservice.v1.RasterizePdfRequest.Format', null, global);
goog.exportSymbol('proto.ssn.pdfservice.v1.RasterizePdfRequest.PageOption', null, global);
goog.exportSymbol('proto.ssn.pdfservice.v1.RasterizePdfResponse', null, global);
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
proto.ssn.pdfservice.v1.RasterizePdfRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ssn.pdfservice.v1.RasterizePdfRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ssn.pdfservice.v1.RasterizePdfRequest.displayName = 'proto.ssn.pdfservice.v1.RasterizePdfRequest';
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
proto.ssn.pdfservice.v1.RasterizePdfResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ssn.pdfservice.v1.RasterizePdfResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ssn.pdfservice.v1.RasterizePdfResponse.displayName = 'proto.ssn.pdfservice.v1.RasterizePdfResponse';
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
proto.ssn.pdfservice.v1.RasterizePdfRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ssn.pdfservice.v1.RasterizePdfRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ssn.pdfservice.v1.RasterizePdfRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ssn.pdfservice.v1.RasterizePdfRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: msg.getData_asB64(),
    dpi: jspb.Message.getFieldWithDefault(msg, 2, 0),
    format: jspb.Message.getFieldWithDefault(msg, 3, 0),
    color: jspb.Message.getFieldWithDefault(msg, 4, 0),
    pages: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.ssn.pdfservice.v1.RasterizePdfRequest}
 */
proto.ssn.pdfservice.v1.RasterizePdfRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ssn.pdfservice.v1.RasterizePdfRequest;
  return proto.ssn.pdfservice.v1.RasterizePdfRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ssn.pdfservice.v1.RasterizePdfRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ssn.pdfservice.v1.RasterizePdfRequest}
 */
proto.ssn.pdfservice.v1.RasterizePdfRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDpi(value);
      break;
    case 3:
      var value = /** @type {!proto.ssn.pdfservice.v1.RasterizePdfRequest.Format} */ (reader.readEnum());
      msg.setFormat(value);
      break;
    case 4:
      var value = /** @type {!proto.ssn.pdfservice.v1.RasterizePdfRequest.ColorSpace} */ (reader.readEnum());
      msg.setColor(value);
      break;
    case 5:
      var value = /** @type {!proto.ssn.pdfservice.v1.RasterizePdfRequest.PageOption} */ (reader.readEnum());
      msg.setPages(value);
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
proto.ssn.pdfservice.v1.RasterizePdfRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ssn.pdfservice.v1.RasterizePdfRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ssn.pdfservice.v1.RasterizePdfRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ssn.pdfservice.v1.RasterizePdfRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getDpi();
  if (f !== 0) {
    writer.writeUint32(
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
  f = message.getColor();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getPages();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.ssn.pdfservice.v1.RasterizePdfRequest.Format = {
  PNG: 0,
  JPEG: 1,
  WEBP: 2
};

/**
 * @enum {number}
 */
proto.ssn.pdfservice.v1.RasterizePdfRequest.ColorSpace = {
  GRAY: 0,
  COLOR: 1
};

/**
 * @enum {number}
 */
proto.ssn.pdfservice.v1.RasterizePdfRequest.PageOption = {
  FIRST_LAST: 0,
  FIRST: 1,
  LAST: 2,
  ALL: 3
};

/**
 * optional bytes data = 1;
 * @return {string}
 */
proto.ssn.pdfservice.v1.RasterizePdfRequest.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.ssn.pdfservice.v1.RasterizePdfRequest.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.ssn.pdfservice.v1.RasterizePdfRequest.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ssn.pdfservice.v1.RasterizePdfRequest} returns this
 */
proto.ssn.pdfservice.v1.RasterizePdfRequest.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional uint32 dpi = 2;
 * @return {number}
 */
proto.ssn.pdfservice.v1.RasterizePdfRequest.prototype.getDpi = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ssn.pdfservice.v1.RasterizePdfRequest} returns this
 */
proto.ssn.pdfservice.v1.RasterizePdfRequest.prototype.setDpi = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Format format = 3;
 * @return {!proto.ssn.pdfservice.v1.RasterizePdfRequest.Format}
 */
proto.ssn.pdfservice.v1.RasterizePdfRequest.prototype.getFormat = function() {
  return /** @type {!proto.ssn.pdfservice.v1.RasterizePdfRequest.Format} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.ssn.pdfservice.v1.RasterizePdfRequest.Format} value
 * @return {!proto.ssn.pdfservice.v1.RasterizePdfRequest} returns this
 */
proto.ssn.pdfservice.v1.RasterizePdfRequest.prototype.setFormat = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional ColorSpace color = 4;
 * @return {!proto.ssn.pdfservice.v1.RasterizePdfRequest.ColorSpace}
 */
proto.ssn.pdfservice.v1.RasterizePdfRequest.prototype.getColor = function() {
  return /** @type {!proto.ssn.pdfservice.v1.RasterizePdfRequest.ColorSpace} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.ssn.pdfservice.v1.RasterizePdfRequest.ColorSpace} value
 * @return {!proto.ssn.pdfservice.v1.RasterizePdfRequest} returns this
 */
proto.ssn.pdfservice.v1.RasterizePdfRequest.prototype.setColor = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional PageOption pages = 5;
 * @return {!proto.ssn.pdfservice.v1.RasterizePdfRequest.PageOption}
 */
proto.ssn.pdfservice.v1.RasterizePdfRequest.prototype.getPages = function() {
  return /** @type {!proto.ssn.pdfservice.v1.RasterizePdfRequest.PageOption} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.ssn.pdfservice.v1.RasterizePdfRequest.PageOption} value
 * @return {!proto.ssn.pdfservice.v1.RasterizePdfRequest} returns this
 */
proto.ssn.pdfservice.v1.RasterizePdfRequest.prototype.setPages = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
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
proto.ssn.pdfservice.v1.RasterizePdfResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ssn.pdfservice.v1.RasterizePdfResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ssn.pdfservice.v1.RasterizePdfResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ssn.pdfservice.v1.RasterizePdfResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: jspb.Message.getFieldWithDefault(msg, 1, 0),
    data: msg.getData_asB64(),
    width: jspb.Message.getFieldWithDefault(msg, 3, 0),
    height: jspb.Message.getFieldWithDefault(msg, 4, 0),
    scale: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0)
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
 * @return {!proto.ssn.pdfservice.v1.RasterizePdfResponse}
 */
proto.ssn.pdfservice.v1.RasterizePdfResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ssn.pdfservice.v1.RasterizePdfResponse;
  return proto.ssn.pdfservice.v1.RasterizePdfResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ssn.pdfservice.v1.RasterizePdfResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ssn.pdfservice.v1.RasterizePdfResponse}
 */
proto.ssn.pdfservice.v1.RasterizePdfResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWidth(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHeight(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setScale(value);
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
proto.ssn.pdfservice.v1.RasterizePdfResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ssn.pdfservice.v1.RasterizePdfResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ssn.pdfservice.v1.RasterizePdfResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ssn.pdfservice.v1.RasterizePdfResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getWidth();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getScale();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
};


/**
 * optional uint32 index = 1;
 * @return {number}
 */
proto.ssn.pdfservice.v1.RasterizePdfResponse.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ssn.pdfservice.v1.RasterizePdfResponse} returns this
 */
proto.ssn.pdfservice.v1.RasterizePdfResponse.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes data = 2;
 * @return {string}
 */
proto.ssn.pdfservice.v1.RasterizePdfResponse.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes data = 2;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.ssn.pdfservice.v1.RasterizePdfResponse.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.ssn.pdfservice.v1.RasterizePdfResponse.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ssn.pdfservice.v1.RasterizePdfResponse} returns this
 */
proto.ssn.pdfservice.v1.RasterizePdfResponse.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional uint32 width = 3;
 * @return {number}
 */
proto.ssn.pdfservice.v1.RasterizePdfResponse.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ssn.pdfservice.v1.RasterizePdfResponse} returns this
 */
proto.ssn.pdfservice.v1.RasterizePdfResponse.prototype.setWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 height = 4;
 * @return {number}
 */
proto.ssn.pdfservice.v1.RasterizePdfResponse.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ssn.pdfservice.v1.RasterizePdfResponse} returns this
 */
proto.ssn.pdfservice.v1.RasterizePdfResponse.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional double scale = 5;
 * @return {number}
 */
proto.ssn.pdfservice.v1.RasterizePdfResponse.prototype.getScale = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ssn.pdfservice.v1.RasterizePdfResponse} returns this
 */
proto.ssn.pdfservice.v1.RasterizePdfResponse.prototype.setScale = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


goog.object.extend(exports, proto.ssn.pdfservice.v1);
