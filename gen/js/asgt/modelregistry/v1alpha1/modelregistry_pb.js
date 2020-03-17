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
goog.exportSymbol('proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsRequest', null, global);
goog.exportSymbol('proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse', null, global);
goog.exportSymbol('proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.VersionInfo', null, global);
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
    consumer: jspb.Message.getFieldWithDefault(msg, 3, ""),
    modelName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    modelVersion: jspb.Message.getFieldWithDefault(msg, 2, 0),
    datasetName: jspb.Message.getFieldWithDefault(msg, 4, "")
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
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setConsumer(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setModelVersion(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasetName(value);
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
  f = message.getConsumer();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
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
  f = message.getDatasetName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string consumer = 3;
 * @return {string}
 */
proto.asgt.modelregistry.v1alpha1.RegisterModelRequest.prototype.getConsumer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.asgt.modelregistry.v1alpha1.RegisterModelRequest.prototype.setConsumer = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string model_name = 1;
 * @return {string}
 */
proto.asgt.modelregistry.v1alpha1.RegisterModelRequest.prototype.getModelName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.asgt.modelregistry.v1alpha1.RegisterModelRequest.prototype.setModelName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 model_version = 2;
 * @return {number}
 */
proto.asgt.modelregistry.v1alpha1.RegisterModelRequest.prototype.getModelVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.asgt.modelregistry.v1alpha1.RegisterModelRequest.prototype.setModelVersion = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string dataset_name = 4;
 * @return {string}
 */
proto.asgt.modelregistry.v1alpha1.RegisterModelRequest.prototype.getDatasetName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.asgt.modelregistry.v1alpha1.RegisterModelRequest.prototype.setDatasetName = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
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
    modelName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    modelVersion: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setModelVersion(value);
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
  f = message.getModelName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getModelVersion();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string model_name = 2;
 * @return {string}
 */
proto.asgt.modelregistry.v1alpha1.DeleteModelRequest.prototype.getModelName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.asgt.modelregistry.v1alpha1.DeleteModelRequest.prototype.setModelName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 model_version = 3;
 * @return {number}
 */
proto.asgt.modelregistry.v1alpha1.DeleteModelRequest.prototype.getModelVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.asgt.modelregistry.v1alpha1.DeleteModelRequest.prototype.setModelVersion = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
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
proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsRequest.displayName = 'proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsRequest';
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
proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    consumer: jspb.Message.getFieldWithDefault(msg, 1, ""),
    datasetName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    modelName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    maxResults: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsRequest}
 */
proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsRequest;
  return proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsRequest}
 */
proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setModelName(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxResults(value);
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
proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getModelName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMaxResults();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional string consumer = 1;
 * @return {string}
 */
proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsRequest.prototype.getConsumer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsRequest.prototype.setConsumer = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string dataset_name = 2;
 * @return {string}
 */
proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsRequest.prototype.getDatasetName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsRequest.prototype.setDatasetName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string model_name = 3;
 * @return {string}
 */
proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsRequest.prototype.getModelName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsRequest.prototype.setModelName = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 max_results = 4;
 * @return {number}
 */
proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsRequest.prototype.getMaxResults = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsRequest.prototype.setMaxResults = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
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
proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.repeatedFields_, null);
};
goog.inherits(proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.displayName = 'proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.repeatedFields_ = [1];



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
proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.VersionInfo.toObject, includeInstance)
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
 * @return {!proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse}
 */
proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse;
  return proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse}
 */
proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.VersionInfo;
      reader.readMessage(value,proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.VersionInfo.deserializeBinaryFromReader);
      msg.addResults(value);
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
proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.VersionInfo.serializeBinaryToWriter
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
proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.VersionInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.VersionInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.VersionInfo.displayName = 'proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.VersionInfo';
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
proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.VersionInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.VersionInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.VersionInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.VersionInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, 0),
    shardName: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.VersionInfo}
 */
proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.VersionInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.VersionInfo;
  return proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.VersionInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.VersionInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.VersionInfo}
 */
proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.VersionInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVersion(value);
      break;
    case 2:
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
proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.VersionInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.VersionInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.VersionInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.VersionInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getShardName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 version = 1;
 * @return {number}
 */
proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.VersionInfo.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.VersionInfo.prototype.setVersion = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string shard_name = 2;
 * @return {string}
 */
proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.VersionInfo.prototype.getShardName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.VersionInfo.prototype.setShardName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated VersionInfo results = 1;
 * @return {!Array<!proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.VersionInfo>}
 */
proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.VersionInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.VersionInfo, 1));
};


/** @param {!Array<!proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.VersionInfo>} value */
proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.prototype.setResultsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.VersionInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.VersionInfo}
 */
proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.VersionInfo, opt_index);
};


proto.asgt.modelregistry.v1alpha1.GetLatestModelVersionsResponse.prototype.clearResultsList = function() {
  this.setResultsList([]);
};


goog.object.extend(exports, proto.asgt.modelregistry.v1alpha1);
