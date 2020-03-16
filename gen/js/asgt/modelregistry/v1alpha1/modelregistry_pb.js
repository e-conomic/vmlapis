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

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.exportSymbol('proto.asgt.modelregistry.v1alpha1.DeleteModelRequest', null, global);
goog.exportSymbol('proto.asgt.modelregistry.v1alpha1.LocateModelRequest', null, global);
goog.exportSymbol('proto.asgt.modelregistry.v1alpha1.LocateModelResponse', null, global);
goog.exportSymbol('proto.asgt.modelregistry.v1alpha1.LocateModelResponse.LocationInfo', null, global);
goog.exportSymbol('proto.asgt.modelregistry.v1alpha1.RegisterModelRequest', null, global);
goog.exportSymbol('proto.asgt.modelregistry.v1alpha1.RegisterModelResponse', null, global);

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
proto.asgt.modelregistry.v1alpha1.RegisterModelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asgt.modelregistry.v1alpha1.RegisterModelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.asgt.modelregistry.v1alpha1.RegisterModelRequest.displayName = 'proto.asgt.modelregistry.v1alpha1.RegisterModelRequest';
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
proto.asgt.modelregistry.v1alpha1.RegisterModelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.asgt.modelregistry.v1alpha1.RegisterModelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asgt.modelregistry.v1alpha1.RegisterModelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.modelregistry.v1alpha1.RegisterModelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelType: jspb.Message.getFieldWithDefault(msg, 1, ""),
    modelId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.asgt.modelregistry.v1alpha1.RegisterModelRequest}
 */
proto.asgt.modelregistry.v1alpha1.RegisterModelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asgt.modelregistry.v1alpha1.RegisterModelRequest;
  return proto.asgt.modelregistry.v1alpha1.RegisterModelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asgt.modelregistry.v1alpha1.RegisterModelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asgt.modelregistry.v1alpha1.RegisterModelRequest}
 */
proto.asgt.modelregistry.v1alpha1.RegisterModelRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setModelId(value);
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
proto.asgt.modelregistry.v1alpha1.RegisterModelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asgt.modelregistry.v1alpha1.RegisterModelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asgt.modelregistry.v1alpha1.RegisterModelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.modelregistry.v1alpha1.RegisterModelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModelType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModelId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string model_type = 1;
 * @return {string}
 */
proto.asgt.modelregistry.v1alpha1.RegisterModelRequest.prototype.getModelType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.asgt.modelregistry.v1alpha1.RegisterModelRequest.prototype.setModelType = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string model_id = 2;
 * @return {string}
 */
proto.asgt.modelregistry.v1alpha1.RegisterModelRequest.prototype.getModelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.asgt.modelregistry.v1alpha1.RegisterModelRequest.prototype.setModelId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
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
proto.asgt.modelregistry.v1alpha1.RegisterModelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asgt.modelregistry.v1alpha1.RegisterModelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.asgt.modelregistry.v1alpha1.RegisterModelResponse.displayName = 'proto.asgt.modelregistry.v1alpha1.RegisterModelResponse';
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
proto.asgt.modelregistry.v1alpha1.RegisterModelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.asgt.modelregistry.v1alpha1.RegisterModelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asgt.modelregistry.v1alpha1.RegisterModelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.modelregistry.v1alpha1.RegisterModelResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    shardName: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.asgt.modelregistry.v1alpha1.RegisterModelResponse}
 */
proto.asgt.modelregistry.v1alpha1.RegisterModelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asgt.modelregistry.v1alpha1.RegisterModelResponse;
  return proto.asgt.modelregistry.v1alpha1.RegisterModelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asgt.modelregistry.v1alpha1.RegisterModelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asgt.modelregistry.v1alpha1.RegisterModelResponse}
 */
proto.asgt.modelregistry.v1alpha1.RegisterModelResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setShardName(value);
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
proto.asgt.modelregistry.v1alpha1.RegisterModelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asgt.modelregistry.v1alpha1.RegisterModelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asgt.modelregistry.v1alpha1.RegisterModelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.modelregistry.v1alpha1.RegisterModelResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShardName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string shard_name = 1;
 * @return {string}
 */
proto.asgt.modelregistry.v1alpha1.RegisterModelResponse.prototype.getShardName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.asgt.modelregistry.v1alpha1.RegisterModelResponse.prototype.setShardName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
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
proto.asgt.modelregistry.v1alpha1.DeleteModelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asgt.modelregistry.v1alpha1.DeleteModelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.asgt.modelregistry.v1alpha1.DeleteModelRequest.displayName = 'proto.asgt.modelregistry.v1alpha1.DeleteModelRequest';
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
proto.asgt.modelregistry.v1alpha1.DeleteModelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.asgt.modelregistry.v1alpha1.DeleteModelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asgt.modelregistry.v1alpha1.DeleteModelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.modelregistry.v1alpha1.DeleteModelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    shardName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    modelType: jspb.Message.getFieldWithDefault(msg, 2, ""),
    modelId: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.asgt.modelregistry.v1alpha1.DeleteModelRequest}
 */
proto.asgt.modelregistry.v1alpha1.DeleteModelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asgt.modelregistry.v1alpha1.DeleteModelRequest;
  return proto.asgt.modelregistry.v1alpha1.DeleteModelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asgt.modelregistry.v1alpha1.DeleteModelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asgt.modelregistry.v1alpha1.DeleteModelRequest}
 */
proto.asgt.modelregistry.v1alpha1.DeleteModelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setShardName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelId(value);
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
proto.asgt.modelregistry.v1alpha1.DeleteModelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asgt.modelregistry.v1alpha1.DeleteModelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asgt.modelregistry.v1alpha1.DeleteModelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.modelregistry.v1alpha1.DeleteModelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShardName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModelType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getModelId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string shard_name = 1;
 * @return {string}
 */
proto.asgt.modelregistry.v1alpha1.DeleteModelRequest.prototype.getShardName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.asgt.modelregistry.v1alpha1.DeleteModelRequest.prototype.setShardName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string model_type = 2;
 * @return {string}
 */
proto.asgt.modelregistry.v1alpha1.DeleteModelRequest.prototype.getModelType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.asgt.modelregistry.v1alpha1.DeleteModelRequest.prototype.setModelType = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string model_id = 3;
 * @return {string}
 */
proto.asgt.modelregistry.v1alpha1.DeleteModelRequest.prototype.getModelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.asgt.modelregistry.v1alpha1.DeleteModelRequest.prototype.setModelId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
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
proto.asgt.modelregistry.v1alpha1.LocateModelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asgt.modelregistry.v1alpha1.LocateModelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.asgt.modelregistry.v1alpha1.LocateModelRequest.displayName = 'proto.asgt.modelregistry.v1alpha1.LocateModelRequest';
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
proto.asgt.modelregistry.v1alpha1.LocateModelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.asgt.modelregistry.v1alpha1.LocateModelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asgt.modelregistry.v1alpha1.LocateModelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.modelregistry.v1alpha1.LocateModelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    consumer: jspb.Message.getFieldWithDefault(msg, 1, ""),
    datasetName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    modelType: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.asgt.modelregistry.v1alpha1.LocateModelRequest}
 */
proto.asgt.modelregistry.v1alpha1.LocateModelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asgt.modelregistry.v1alpha1.LocateModelRequest;
  return proto.asgt.modelregistry.v1alpha1.LocateModelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asgt.modelregistry.v1alpha1.LocateModelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asgt.modelregistry.v1alpha1.LocateModelRequest}
 */
proto.asgt.modelregistry.v1alpha1.LocateModelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConsumer(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasetName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelType(value);
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
proto.asgt.modelregistry.v1alpha1.LocateModelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asgt.modelregistry.v1alpha1.LocateModelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asgt.modelregistry.v1alpha1.LocateModelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.modelregistry.v1alpha1.LocateModelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConsumer();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDatasetName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getModelType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string consumer = 1;
 * @return {string}
 */
proto.asgt.modelregistry.v1alpha1.LocateModelRequest.prototype.getConsumer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.asgt.modelregistry.v1alpha1.LocateModelRequest.prototype.setConsumer = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string dataset_name = 2;
 * @return {string}
 */
proto.asgt.modelregistry.v1alpha1.LocateModelRequest.prototype.getDatasetName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.asgt.modelregistry.v1alpha1.LocateModelRequest.prototype.setDatasetName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string model_type = 3;
 * @return {string}
 */
proto.asgt.modelregistry.v1alpha1.LocateModelRequest.prototype.getModelType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.asgt.modelregistry.v1alpha1.LocateModelRequest.prototype.setModelType = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
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
proto.asgt.modelregistry.v1alpha1.LocateModelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asgt.modelregistry.v1alpha1.LocateModelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.asgt.modelregistry.v1alpha1.LocateModelResponse.displayName = 'proto.asgt.modelregistry.v1alpha1.LocateModelResponse';
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
proto.asgt.modelregistry.v1alpha1.LocateModelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.asgt.modelregistry.v1alpha1.LocateModelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asgt.modelregistry.v1alpha1.LocateModelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.modelregistry.v1alpha1.LocateModelResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    latest: (f = msg.getLatest()) && proto.asgt.modelregistry.v1alpha1.LocateModelResponse.LocationInfo.toObject(includeInstance, f)
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
 * @return {!proto.asgt.modelregistry.v1alpha1.LocateModelResponse}
 */
proto.asgt.modelregistry.v1alpha1.LocateModelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asgt.modelregistry.v1alpha1.LocateModelResponse;
  return proto.asgt.modelregistry.v1alpha1.LocateModelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asgt.modelregistry.v1alpha1.LocateModelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asgt.modelregistry.v1alpha1.LocateModelResponse}
 */
proto.asgt.modelregistry.v1alpha1.LocateModelResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.asgt.modelregistry.v1alpha1.LocateModelResponse.LocationInfo;
      reader.readMessage(value,proto.asgt.modelregistry.v1alpha1.LocateModelResponse.LocationInfo.deserializeBinaryFromReader);
      msg.setLatest(value);
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
proto.asgt.modelregistry.v1alpha1.LocateModelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asgt.modelregistry.v1alpha1.LocateModelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asgt.modelregistry.v1alpha1.LocateModelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.modelregistry.v1alpha1.LocateModelResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLatest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.asgt.modelregistry.v1alpha1.LocateModelResponse.LocationInfo.serializeBinaryToWriter
    );
  }
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
proto.asgt.modelregistry.v1alpha1.LocateModelResponse.LocationInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asgt.modelregistry.v1alpha1.LocateModelResponse.LocationInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.asgt.modelregistry.v1alpha1.LocateModelResponse.LocationInfo.displayName = 'proto.asgt.modelregistry.v1alpha1.LocateModelResponse.LocationInfo';
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
proto.asgt.modelregistry.v1alpha1.LocateModelResponse.LocationInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.asgt.modelregistry.v1alpha1.LocateModelResponse.LocationInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asgt.modelregistry.v1alpha1.LocateModelResponse.LocationInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.modelregistry.v1alpha1.LocateModelResponse.LocationInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    shardName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    modelId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.asgt.modelregistry.v1alpha1.LocateModelResponse.LocationInfo}
 */
proto.asgt.modelregistry.v1alpha1.LocateModelResponse.LocationInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asgt.modelregistry.v1alpha1.LocateModelResponse.LocationInfo;
  return proto.asgt.modelregistry.v1alpha1.LocateModelResponse.LocationInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asgt.modelregistry.v1alpha1.LocateModelResponse.LocationInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asgt.modelregistry.v1alpha1.LocateModelResponse.LocationInfo}
 */
proto.asgt.modelregistry.v1alpha1.LocateModelResponse.LocationInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setShardName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelId(value);
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
proto.asgt.modelregistry.v1alpha1.LocateModelResponse.LocationInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asgt.modelregistry.v1alpha1.LocateModelResponse.LocationInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asgt.modelregistry.v1alpha1.LocateModelResponse.LocationInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.modelregistry.v1alpha1.LocateModelResponse.LocationInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShardName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModelId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string shard_name = 1;
 * @return {string}
 */
proto.asgt.modelregistry.v1alpha1.LocateModelResponse.LocationInfo.prototype.getShardName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.asgt.modelregistry.v1alpha1.LocateModelResponse.LocationInfo.prototype.setShardName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string model_id = 2;
 * @return {string}
 */
proto.asgt.modelregistry.v1alpha1.LocateModelResponse.LocationInfo.prototype.getModelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.asgt.modelregistry.v1alpha1.LocateModelResponse.LocationInfo.prototype.setModelId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional LocationInfo latest = 1;
 * @return {?proto.asgt.modelregistry.v1alpha1.LocateModelResponse.LocationInfo}
 */
proto.asgt.modelregistry.v1alpha1.LocateModelResponse.prototype.getLatest = function() {
  return /** @type{?proto.asgt.modelregistry.v1alpha1.LocateModelResponse.LocationInfo} */ (
    jspb.Message.getWrapperField(this, proto.asgt.modelregistry.v1alpha1.LocateModelResponse.LocationInfo, 1));
};


/** @param {?proto.asgt.modelregistry.v1alpha1.LocateModelResponse.LocationInfo|undefined} value */
proto.asgt.modelregistry.v1alpha1.LocateModelResponse.prototype.setLatest = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.asgt.modelregistry.v1alpha1.LocateModelResponse.prototype.clearLatest = function() {
  this.setLatest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.asgt.modelregistry.v1alpha1.LocateModelResponse.prototype.hasLatest = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.asgt.modelregistry.v1alpha1);