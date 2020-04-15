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

goog.exportSymbol('proto.asgt.modeltrainer.v1alpha1.TrainModelRequest', null, global);
goog.exportSymbol('proto.asgt.modeltrainer.v1alpha1.TrainModelResponse', null, global);

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
proto.asgt.modeltrainer.v1alpha1.TrainModelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asgt.modeltrainer.v1alpha1.TrainModelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.asgt.modeltrainer.v1alpha1.TrainModelRequest.displayName = 'proto.asgt.modeltrainer.v1alpha1.TrainModelRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asgt.modeltrainer.v1alpha1.TrainModelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.asgt.modeltrainer.v1alpha1.TrainModelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asgt.modeltrainer.v1alpha1.TrainModelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.modeltrainer.v1alpha1.TrainModelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelType: jspb.Message.getFieldWithDefault(msg, 1, ""),
    consumer: jspb.Message.getFieldWithDefault(msg, 2, ""),
    datasetName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    imageTag: jspb.Message.getFieldWithDefault(msg, 4, ""),
    runName: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.asgt.modeltrainer.v1alpha1.TrainModelRequest}
 */
proto.asgt.modeltrainer.v1alpha1.TrainModelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asgt.modeltrainer.v1alpha1.TrainModelRequest;
  return proto.asgt.modeltrainer.v1alpha1.TrainModelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asgt.modeltrainer.v1alpha1.TrainModelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asgt.modeltrainer.v1alpha1.TrainModelRequest}
 */
proto.asgt.modeltrainer.v1alpha1.TrainModelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setConsumer(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasetName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageTag(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRunName(value);
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
proto.asgt.modeltrainer.v1alpha1.TrainModelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asgt.modeltrainer.v1alpha1.TrainModelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asgt.modeltrainer.v1alpha1.TrainModelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.modeltrainer.v1alpha1.TrainModelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModelType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConsumer();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDatasetName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getImageTag();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRunName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string model_type = 1;
 * @return {string}
 */
proto.asgt.modeltrainer.v1alpha1.TrainModelRequest.prototype.getModelType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.asgt.modeltrainer.v1alpha1.TrainModelRequest.prototype.setModelType = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string consumer = 2;
 * @return {string}
 */
proto.asgt.modeltrainer.v1alpha1.TrainModelRequest.prototype.getConsumer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.asgt.modeltrainer.v1alpha1.TrainModelRequest.prototype.setConsumer = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string dataset_name = 3;
 * @return {string}
 */
proto.asgt.modeltrainer.v1alpha1.TrainModelRequest.prototype.getDatasetName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.asgt.modeltrainer.v1alpha1.TrainModelRequest.prototype.setDatasetName = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string image_tag = 4;
 * @return {string}
 */
proto.asgt.modeltrainer.v1alpha1.TrainModelRequest.prototype.getImageTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.asgt.modeltrainer.v1alpha1.TrainModelRequest.prototype.setImageTag = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string run_name = 5;
 * @return {string}
 */
proto.asgt.modeltrainer.v1alpha1.TrainModelRequest.prototype.getRunName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.asgt.modeltrainer.v1alpha1.TrainModelRequest.prototype.setRunName = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};



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
proto.asgt.modeltrainer.v1alpha1.TrainModelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asgt.modeltrainer.v1alpha1.TrainModelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.asgt.modeltrainer.v1alpha1.TrainModelResponse.displayName = 'proto.asgt.modeltrainer.v1alpha1.TrainModelResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asgt.modeltrainer.v1alpha1.TrainModelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.asgt.modeltrainer.v1alpha1.TrainModelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asgt.modeltrainer.v1alpha1.TrainModelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.modeltrainer.v1alpha1.TrainModelResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    versionName: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.asgt.modeltrainer.v1alpha1.TrainModelResponse}
 */
proto.asgt.modeltrainer.v1alpha1.TrainModelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asgt.modeltrainer.v1alpha1.TrainModelResponse;
  return proto.asgt.modeltrainer.v1alpha1.TrainModelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asgt.modeltrainer.v1alpha1.TrainModelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asgt.modeltrainer.v1alpha1.TrainModelResponse}
 */
proto.asgt.modeltrainer.v1alpha1.TrainModelResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersionName(value);
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
proto.asgt.modeltrainer.v1alpha1.TrainModelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asgt.modeltrainer.v1alpha1.TrainModelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asgt.modeltrainer.v1alpha1.TrainModelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.modeltrainer.v1alpha1.TrainModelResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersionName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string version_name = 1;
 * @return {string}
 */
proto.asgt.modeltrainer.v1alpha1.TrainModelResponse.prototype.getVersionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.asgt.modeltrainer.v1alpha1.TrainModelResponse.prototype.setVersionName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.asgt.modeltrainer.v1alpha1);
