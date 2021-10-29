// source: asgt/v2/type/trainings_response.proto
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
goog.object.extend(proto, asgt_type_dataset_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.asgt.v2.type.ConsumerTraining', null, global);
goog.exportSymbol('proto.asgt.v2.type.ConsumerTrainingsResponse', null, global);
goog.exportSymbol('proto.asgt.v2.type.Training', null, global);
goog.exportSymbol('proto.asgt.v2.type.TrainingsResponse', null, global);
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
proto.asgt.v2.type.Training = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asgt.v2.type.Training, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asgt.v2.type.Training.displayName = 'proto.asgt.v2.type.Training';
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
proto.asgt.v2.type.ConsumerTraining = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asgt.v2.type.ConsumerTraining, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asgt.v2.type.ConsumerTraining.displayName = 'proto.asgt.v2.type.ConsumerTraining';
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
proto.asgt.v2.type.TrainingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.asgt.v2.type.TrainingsResponse.repeatedFields_, null);
};
goog.inherits(proto.asgt.v2.type.TrainingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asgt.v2.type.TrainingsResponse.displayName = 'proto.asgt.v2.type.TrainingsResponse';
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
proto.asgt.v2.type.ConsumerTrainingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.asgt.v2.type.ConsumerTrainingsResponse.repeatedFields_, null);
};
goog.inherits(proto.asgt.v2.type.ConsumerTrainingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asgt.v2.type.ConsumerTrainingsResponse.displayName = 'proto.asgt.v2.type.ConsumerTrainingsResponse';
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
proto.asgt.v2.type.Training.prototype.toObject = function(opt_includeInstance) {
  return proto.asgt.v2.type.Training.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asgt.v2.type.Training} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.v2.type.Training.toObject = function(includeInstance, msg) {
  var f, obj = {
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 2, ""),
    trainingStatus: jspb.Message.getFieldWithDefault(msg, 3, ""),
    trainngStatusMessage: jspb.Message.getFieldWithDefault(msg, 4, ""),
    finishTime: (f = msg.getFinishTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.asgt.v2.type.Training}
 */
proto.asgt.v2.type.Training.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asgt.v2.type.Training;
  return proto.asgt.v2.type.Training.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asgt.v2.type.Training} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asgt.v2.type.Training}
 */
proto.asgt.v2.type.Training.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrainingStatus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrainngStatusMessage(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFinishTime(value);
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
proto.asgt.v2.type.Training.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asgt.v2.type.Training.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asgt.v2.type.Training} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.v2.type.Training.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTrainingStatus();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTrainngStatusMessage();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFinishTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp created_at = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.asgt.v2.type.Training.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.asgt.v2.type.Training} returns this
*/
proto.asgt.v2.type.Training.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.asgt.v2.type.Training} returns this
 */
proto.asgt.v2.type.Training.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.asgt.v2.type.Training.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.asgt.v2.type.Training.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.asgt.v2.type.Training} returns this
 */
proto.asgt.v2.type.Training.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string training_status = 3;
 * @return {string}
 */
proto.asgt.v2.type.Training.prototype.getTrainingStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.asgt.v2.type.Training} returns this
 */
proto.asgt.v2.type.Training.prototype.setTrainingStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string trainng_status_message = 4;
 * @return {string}
 */
proto.asgt.v2.type.Training.prototype.getTrainngStatusMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.asgt.v2.type.Training} returns this
 */
proto.asgt.v2.type.Training.prototype.setTrainngStatusMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp finish_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.asgt.v2.type.Training.prototype.getFinishTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.asgt.v2.type.Training} returns this
*/
proto.asgt.v2.type.Training.prototype.setFinishTime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.asgt.v2.type.Training} returns this
 */
proto.asgt.v2.type.Training.prototype.clearFinishTime = function() {
  return this.setFinishTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.asgt.v2.type.Training.prototype.hasFinishTime = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.asgt.v2.type.ConsumerTraining.prototype.toObject = function(opt_includeInstance) {
  return proto.asgt.v2.type.ConsumerTraining.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asgt.v2.type.ConsumerTraining} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.v2.type.ConsumerTraining.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataset: (f = msg.getDataset()) && asgt_type_dataset_pb.Dataset.toObject(includeInstance, f),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 3, ""),
    trainingStatus: jspb.Message.getFieldWithDefault(msg, 4, ""),
    trainingStatusMessage: jspb.Message.getFieldWithDefault(msg, 5, ""),
    finishTime: (f = msg.getFinishTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.asgt.v2.type.ConsumerTraining}
 */
proto.asgt.v2.type.ConsumerTraining.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asgt.v2.type.ConsumerTraining;
  return proto.asgt.v2.type.ConsumerTraining.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asgt.v2.type.ConsumerTraining} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asgt.v2.type.ConsumerTraining}
 */
proto.asgt.v2.type.ConsumerTraining.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrainingStatus(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrainingStatusMessage(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFinishTime(value);
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
proto.asgt.v2.type.ConsumerTraining.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asgt.v2.type.ConsumerTraining.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asgt.v2.type.ConsumerTraining} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.v2.type.ConsumerTraining.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      asgt_type_dataset_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTrainingStatus();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTrainingStatusMessage();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getFinishTime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional asgt.type.Dataset dataset = 1;
 * @return {?proto.asgt.type.Dataset}
 */
proto.asgt.v2.type.ConsumerTraining.prototype.getDataset = function() {
  return /** @type{?proto.asgt.type.Dataset} */ (
    jspb.Message.getWrapperField(this, asgt_type_dataset_pb.Dataset, 1));
};


/**
 * @param {?proto.asgt.type.Dataset|undefined} value
 * @return {!proto.asgt.v2.type.ConsumerTraining} returns this
*/
proto.asgt.v2.type.ConsumerTraining.prototype.setDataset = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.asgt.v2.type.ConsumerTraining} returns this
 */
proto.asgt.v2.type.ConsumerTraining.prototype.clearDataset = function() {
  return this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.asgt.v2.type.ConsumerTraining.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.asgt.v2.type.ConsumerTraining.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.asgt.v2.type.ConsumerTraining} returns this
*/
proto.asgt.v2.type.ConsumerTraining.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.asgt.v2.type.ConsumerTraining} returns this
 */
proto.asgt.v2.type.ConsumerTraining.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.asgt.v2.type.ConsumerTraining.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string status = 3;
 * @return {string}
 */
proto.asgt.v2.type.ConsumerTraining.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.asgt.v2.type.ConsumerTraining} returns this
 */
proto.asgt.v2.type.ConsumerTraining.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string training_status = 4;
 * @return {string}
 */
proto.asgt.v2.type.ConsumerTraining.prototype.getTrainingStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.asgt.v2.type.ConsumerTraining} returns this
 */
proto.asgt.v2.type.ConsumerTraining.prototype.setTrainingStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string training_status_message = 5;
 * @return {string}
 */
proto.asgt.v2.type.ConsumerTraining.prototype.getTrainingStatusMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.asgt.v2.type.ConsumerTraining} returns this
 */
proto.asgt.v2.type.ConsumerTraining.prototype.setTrainingStatusMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp finish_time = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.asgt.v2.type.ConsumerTraining.prototype.getFinishTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.asgt.v2.type.ConsumerTraining} returns this
*/
proto.asgt.v2.type.ConsumerTraining.prototype.setFinishTime = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.asgt.v2.type.ConsumerTraining} returns this
 */
proto.asgt.v2.type.ConsumerTraining.prototype.clearFinishTime = function() {
  return this.setFinishTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.asgt.v2.type.ConsumerTraining.prototype.hasFinishTime = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.asgt.v2.type.TrainingsResponse.repeatedFields_ = [1];



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
proto.asgt.v2.type.TrainingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.asgt.v2.type.TrainingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asgt.v2.type.TrainingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.v2.type.TrainingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    trainingsList: jspb.Message.toObjectList(msg.getTrainingsList(),
    proto.asgt.v2.type.Training.toObject, includeInstance)
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
 * @return {!proto.asgt.v2.type.TrainingsResponse}
 */
proto.asgt.v2.type.TrainingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asgt.v2.type.TrainingsResponse;
  return proto.asgt.v2.type.TrainingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asgt.v2.type.TrainingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asgt.v2.type.TrainingsResponse}
 */
proto.asgt.v2.type.TrainingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.asgt.v2.type.Training;
      reader.readMessage(value,proto.asgt.v2.type.Training.deserializeBinaryFromReader);
      msg.addTrainings(value);
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
proto.asgt.v2.type.TrainingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asgt.v2.type.TrainingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asgt.v2.type.TrainingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.v2.type.TrainingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrainingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.asgt.v2.type.Training.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Training trainings = 1;
 * @return {!Array<!proto.asgt.v2.type.Training>}
 */
proto.asgt.v2.type.TrainingsResponse.prototype.getTrainingsList = function() {
  return /** @type{!Array<!proto.asgt.v2.type.Training>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.asgt.v2.type.Training, 1));
};


/**
 * @param {!Array<!proto.asgt.v2.type.Training>} value
 * @return {!proto.asgt.v2.type.TrainingsResponse} returns this
*/
proto.asgt.v2.type.TrainingsResponse.prototype.setTrainingsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.asgt.v2.type.Training=} opt_value
 * @param {number=} opt_index
 * @return {!proto.asgt.v2.type.Training}
 */
proto.asgt.v2.type.TrainingsResponse.prototype.addTrainings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.asgt.v2.type.Training, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.asgt.v2.type.TrainingsResponse} returns this
 */
proto.asgt.v2.type.TrainingsResponse.prototype.clearTrainingsList = function() {
  return this.setTrainingsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.asgt.v2.type.ConsumerTrainingsResponse.repeatedFields_ = [1];



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
proto.asgt.v2.type.ConsumerTrainingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.asgt.v2.type.ConsumerTrainingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asgt.v2.type.ConsumerTrainingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.v2.type.ConsumerTrainingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    trainingsList: jspb.Message.toObjectList(msg.getTrainingsList(),
    proto.asgt.v2.type.ConsumerTraining.toObject, includeInstance)
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
 * @return {!proto.asgt.v2.type.ConsumerTrainingsResponse}
 */
proto.asgt.v2.type.ConsumerTrainingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asgt.v2.type.ConsumerTrainingsResponse;
  return proto.asgt.v2.type.ConsumerTrainingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asgt.v2.type.ConsumerTrainingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asgt.v2.type.ConsumerTrainingsResponse}
 */
proto.asgt.v2.type.ConsumerTrainingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.asgt.v2.type.ConsumerTraining;
      reader.readMessage(value,proto.asgt.v2.type.ConsumerTraining.deserializeBinaryFromReader);
      msg.addTrainings(value);
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
proto.asgt.v2.type.ConsumerTrainingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asgt.v2.type.ConsumerTrainingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asgt.v2.type.ConsumerTrainingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.v2.type.ConsumerTrainingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrainingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.asgt.v2.type.ConsumerTraining.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ConsumerTraining trainings = 1;
 * @return {!Array<!proto.asgt.v2.type.ConsumerTraining>}
 */
proto.asgt.v2.type.ConsumerTrainingsResponse.prototype.getTrainingsList = function() {
  return /** @type{!Array<!proto.asgt.v2.type.ConsumerTraining>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.asgt.v2.type.ConsumerTraining, 1));
};


/**
 * @param {!Array<!proto.asgt.v2.type.ConsumerTraining>} value
 * @return {!proto.asgt.v2.type.ConsumerTrainingsResponse} returns this
*/
proto.asgt.v2.type.ConsumerTrainingsResponse.prototype.setTrainingsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.asgt.v2.type.ConsumerTraining=} opt_value
 * @param {number=} opt_index
 * @return {!proto.asgt.v2.type.ConsumerTraining}
 */
proto.asgt.v2.type.ConsumerTrainingsResponse.prototype.addTrainings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.asgt.v2.type.ConsumerTraining, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.asgt.v2.type.ConsumerTrainingsResponse} returns this
 */
proto.asgt.v2.type.ConsumerTrainingsResponse.prototype.clearTrainingsList = function() {
  return this.setTrainingsList([]);
};


goog.object.extend(exports, proto.asgt.v2.type);
