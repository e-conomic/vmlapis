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

var asgt_type_dataset_pb = require('../../../asgt/type/dataset_pb.js');
var asgt_type_model_pb = require('../../../asgt/type/model_pb.js');
var asgt_type_model_metadata_pb = require('../../../asgt/type/model_metadata_pb.js');
var asgt_type_revision_pb = require('../../../asgt/type/revision_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.exportSymbol('proto.asgt.modelregistry.v1.GetCurrentModelRequest', null, global);
goog.exportSymbol('proto.asgt.modelregistry.v1.GetCurrentModelResponse', null, global);
goog.exportSymbol('proto.asgt.modelregistry.v1.RegisterModelRequest', null, global);

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
proto.asgt.modelregistry.v1.RegisterModelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asgt.modelregistry.v1.RegisterModelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.asgt.modelregistry.v1.RegisterModelRequest.displayName = 'proto.asgt.modelregistry.v1.RegisterModelRequest';
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
proto.asgt.modelregistry.v1.RegisterModelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.asgt.modelregistry.v1.RegisterModelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asgt.modelregistry.v1.RegisterModelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.modelregistry.v1.RegisterModelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataset: (f = msg.getDataset()) && asgt_type_dataset_pb.Dataset.toObject(includeInstance, f),
    revision: (f = msg.getRevision()) && asgt_type_revision_pb.Revision.toObject(includeInstance, f),
    modelVersion: jspb.Message.getFieldWithDefault(msg, 3, 0),
    modelMetadata: (f = msg.getModelMetadata()) && asgt_type_model_metadata_pb.ModelMetadata.toObject(includeInstance, f)
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
 * @return {!proto.asgt.modelregistry.v1.RegisterModelRequest}
 */
proto.asgt.modelregistry.v1.RegisterModelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asgt.modelregistry.v1.RegisterModelRequest;
  return proto.asgt.modelregistry.v1.RegisterModelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asgt.modelregistry.v1.RegisterModelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asgt.modelregistry.v1.RegisterModelRequest}
 */
proto.asgt.modelregistry.v1.RegisterModelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new asgt_type_dataset_pb.Dataset;
      reader.readMessage(value,asgt_type_dataset_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 2:
      var value = new asgt_type_revision_pb.Revision;
      reader.readMessage(value,asgt_type_revision_pb.Revision.deserializeBinaryFromReader);
      msg.setRevision(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setModelVersion(value);
      break;
    case 4:
      var value = new asgt_type_model_metadata_pb.ModelMetadata;
      reader.readMessage(value,asgt_type_model_metadata_pb.ModelMetadata.deserializeBinaryFromReader);
      msg.setModelMetadata(value);
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
proto.asgt.modelregistry.v1.RegisterModelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asgt.modelregistry.v1.RegisterModelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asgt.modelregistry.v1.RegisterModelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.modelregistry.v1.RegisterModelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      asgt_type_dataset_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getRevision();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      asgt_type_revision_pb.Revision.serializeBinaryToWriter
    );
  }
  f = message.getModelVersion();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getModelMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      asgt_type_model_metadata_pb.ModelMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional asgt.type.Dataset dataset = 1;
 * @return {?proto.asgt.type.Dataset}
 */
proto.asgt.modelregistry.v1.RegisterModelRequest.prototype.getDataset = function() {
  return /** @type{?proto.asgt.type.Dataset} */ (
    jspb.Message.getWrapperField(this, asgt_type_dataset_pb.Dataset, 1));
};


/** @param {?proto.asgt.type.Dataset|undefined} value */
proto.asgt.modelregistry.v1.RegisterModelRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.asgt.modelregistry.v1.RegisterModelRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.asgt.modelregistry.v1.RegisterModelRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional asgt.type.Revision revision = 2;
 * @return {?proto.asgt.type.Revision}
 */
proto.asgt.modelregistry.v1.RegisterModelRequest.prototype.getRevision = function() {
  return /** @type{?proto.asgt.type.Revision} */ (
    jspb.Message.getWrapperField(this, asgt_type_revision_pb.Revision, 2));
};


/** @param {?proto.asgt.type.Revision|undefined} value */
proto.asgt.modelregistry.v1.RegisterModelRequest.prototype.setRevision = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.asgt.modelregistry.v1.RegisterModelRequest.prototype.clearRevision = function() {
  this.setRevision(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.asgt.modelregistry.v1.RegisterModelRequest.prototype.hasRevision = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 model_version = 3;
 * @return {number}
 */
proto.asgt.modelregistry.v1.RegisterModelRequest.prototype.getModelVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.asgt.modelregistry.v1.RegisterModelRequest.prototype.setModelVersion = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional asgt.type.ModelMetadata model_metadata = 4;
 * @return {?proto.asgt.type.ModelMetadata}
 */
proto.asgt.modelregistry.v1.RegisterModelRequest.prototype.getModelMetadata = function() {
  return /** @type{?proto.asgt.type.ModelMetadata} */ (
    jspb.Message.getWrapperField(this, asgt_type_model_metadata_pb.ModelMetadata, 4));
};


/** @param {?proto.asgt.type.ModelMetadata|undefined} value */
proto.asgt.modelregistry.v1.RegisterModelRequest.prototype.setModelMetadata = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.asgt.modelregistry.v1.RegisterModelRequest.prototype.clearModelMetadata = function() {
  this.setModelMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.asgt.modelregistry.v1.RegisterModelRequest.prototype.hasModelMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.asgt.modelregistry.v1.GetCurrentModelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asgt.modelregistry.v1.GetCurrentModelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.asgt.modelregistry.v1.GetCurrentModelRequest.displayName = 'proto.asgt.modelregistry.v1.GetCurrentModelRequest';
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
proto.asgt.modelregistry.v1.GetCurrentModelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.asgt.modelregistry.v1.GetCurrentModelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asgt.modelregistry.v1.GetCurrentModelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.modelregistry.v1.GetCurrentModelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataset: (f = msg.getDataset()) && asgt_type_dataset_pb.Dataset.toObject(includeInstance, f)
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
 * @return {!proto.asgt.modelregistry.v1.GetCurrentModelRequest}
 */
proto.asgt.modelregistry.v1.GetCurrentModelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asgt.modelregistry.v1.GetCurrentModelRequest;
  return proto.asgt.modelregistry.v1.GetCurrentModelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asgt.modelregistry.v1.GetCurrentModelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asgt.modelregistry.v1.GetCurrentModelRequest}
 */
proto.asgt.modelregistry.v1.GetCurrentModelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new asgt_type_dataset_pb.Dataset;
      reader.readMessage(value,asgt_type_dataset_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
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
proto.asgt.modelregistry.v1.GetCurrentModelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asgt.modelregistry.v1.GetCurrentModelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asgt.modelregistry.v1.GetCurrentModelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.modelregistry.v1.GetCurrentModelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      asgt_type_dataset_pb.Dataset.serializeBinaryToWriter
    );
  }
};


/**
 * optional asgt.type.Dataset dataset = 1;
 * @return {?proto.asgt.type.Dataset}
 */
proto.asgt.modelregistry.v1.GetCurrentModelRequest.prototype.getDataset = function() {
  return /** @type{?proto.asgt.type.Dataset} */ (
    jspb.Message.getWrapperField(this, asgt_type_dataset_pb.Dataset, 1));
};


/** @param {?proto.asgt.type.Dataset|undefined} value */
proto.asgt.modelregistry.v1.GetCurrentModelRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.asgt.modelregistry.v1.GetCurrentModelRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.asgt.modelregistry.v1.GetCurrentModelRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.asgt.modelregistry.v1.GetCurrentModelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asgt.modelregistry.v1.GetCurrentModelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.asgt.modelregistry.v1.GetCurrentModelResponse.displayName = 'proto.asgt.modelregistry.v1.GetCurrentModelResponse';
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
proto.asgt.modelregistry.v1.GetCurrentModelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.asgt.modelregistry.v1.GetCurrentModelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asgt.modelregistry.v1.GetCurrentModelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.modelregistry.v1.GetCurrentModelResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    model: (f = msg.getModel()) && asgt_type_model_pb.Model.toObject(includeInstance, f)
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
 * @return {!proto.asgt.modelregistry.v1.GetCurrentModelResponse}
 */
proto.asgt.modelregistry.v1.GetCurrentModelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asgt.modelregistry.v1.GetCurrentModelResponse;
  return proto.asgt.modelregistry.v1.GetCurrentModelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asgt.modelregistry.v1.GetCurrentModelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asgt.modelregistry.v1.GetCurrentModelResponse}
 */
proto.asgt.modelregistry.v1.GetCurrentModelResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new asgt_type_model_pb.Model;
      reader.readMessage(value,asgt_type_model_pb.Model.deserializeBinaryFromReader);
      msg.setModel(value);
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
proto.asgt.modelregistry.v1.GetCurrentModelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asgt.modelregistry.v1.GetCurrentModelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asgt.modelregistry.v1.GetCurrentModelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.modelregistry.v1.GetCurrentModelResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      asgt_type_model_pb.Model.serializeBinaryToWriter
    );
  }
};


/**
 * optional asgt.type.Model model = 1;
 * @return {?proto.asgt.type.Model}
 */
proto.asgt.modelregistry.v1.GetCurrentModelResponse.prototype.getModel = function() {
  return /** @type{?proto.asgt.type.Model} */ (
    jspb.Message.getWrapperField(this, asgt_type_model_pb.Model, 1));
};


/** @param {?proto.asgt.type.Model|undefined} value */
proto.asgt.modelregistry.v1.GetCurrentModelResponse.prototype.setModel = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.asgt.modelregistry.v1.GetCurrentModelResponse.prototype.clearModel = function() {
  this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.asgt.modelregistry.v1.GetCurrentModelResponse.prototype.hasModel = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.asgt.modelregistry.v1);
