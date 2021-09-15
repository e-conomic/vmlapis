// source: asgt/v2alpha/suggester_service.proto
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

var asgt_type_model_pb = require('../../asgt/type/model_pb.js');
goog.object.extend(proto, asgt_type_model_pb);
var asgt_type_prediction_pb = require('../../asgt/type/prediction_pb.js');
goog.object.extend(proto, asgt_type_prediction_pb);
var asgt_v2alpha_type_data_pb = require('../../asgt/v2alpha/type/data_pb.js');
goog.object.extend(proto, asgt_v2alpha_type_data_pb);
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var options_annotations_pb = require('../../options/annotations_pb.js');
goog.object.extend(proto, options_annotations_pb);
var validate_validate_pb = require('../../validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
goog.exportSymbol('proto.asgt.v2alpha.BatchSuggestRequest', null, global);
goog.exportSymbol('proto.asgt.v2alpha.BatchSuggestResponse', null, global);
goog.exportSymbol('proto.asgt.v2alpha.SuggestOptions', null, global);
goog.exportSymbol('proto.asgt.v2alpha.SuggestRequest', null, global);
goog.exportSymbol('proto.asgt.v2alpha.SuggestResponse', null, global);
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
proto.asgt.v2alpha.SuggestOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asgt.v2alpha.SuggestOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asgt.v2alpha.SuggestOptions.displayName = 'proto.asgt.v2alpha.SuggestOptions';
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
proto.asgt.v2alpha.SuggestRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asgt.v2alpha.SuggestRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asgt.v2alpha.SuggestRequest.displayName = 'proto.asgt.v2alpha.SuggestRequest';
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
proto.asgt.v2alpha.SuggestResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asgt.v2alpha.SuggestResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asgt.v2alpha.SuggestResponse.displayName = 'proto.asgt.v2alpha.SuggestResponse';
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
proto.asgt.v2alpha.BatchSuggestRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.asgt.v2alpha.BatchSuggestRequest.repeatedFields_, null);
};
goog.inherits(proto.asgt.v2alpha.BatchSuggestRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asgt.v2alpha.BatchSuggestRequest.displayName = 'proto.asgt.v2alpha.BatchSuggestRequest';
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
proto.asgt.v2alpha.BatchSuggestResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.asgt.v2alpha.BatchSuggestResponse.repeatedFields_, null);
};
goog.inherits(proto.asgt.v2alpha.BatchSuggestResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asgt.v2alpha.BatchSuggestResponse.displayName = 'proto.asgt.v2alpha.BatchSuggestResponse';
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
proto.asgt.v2alpha.SuggestOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.asgt.v2alpha.SuggestOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asgt.v2alpha.SuggestOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.v2alpha.SuggestOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    suggestLimit: jspb.Message.getFieldWithDefault(msg, 1, 0),
    minConfidence: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.asgt.v2alpha.SuggestOptions}
 */
proto.asgt.v2alpha.SuggestOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asgt.v2alpha.SuggestOptions;
  return proto.asgt.v2alpha.SuggestOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asgt.v2alpha.SuggestOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asgt.v2alpha.SuggestOptions}
 */
proto.asgt.v2alpha.SuggestOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSuggestLimit(value);
      break;
    case 2:
      var value = /** @type {!proto.asgt.type.Confidence.Level} */ (reader.readEnum());
      msg.setMinConfidence(value);
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
proto.asgt.v2alpha.SuggestOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asgt.v2alpha.SuggestOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asgt.v2alpha.SuggestOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.v2alpha.SuggestOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuggestLimit();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMinConfidence();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional int32 suggest_limit = 1;
 * @return {number}
 */
proto.asgt.v2alpha.SuggestOptions.prototype.getSuggestLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.asgt.v2alpha.SuggestOptions} returns this
 */
proto.asgt.v2alpha.SuggestOptions.prototype.setSuggestLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional asgt.type.Confidence.Level min_confidence = 2;
 * @return {!proto.asgt.type.Confidence.Level}
 */
proto.asgt.v2alpha.SuggestOptions.prototype.getMinConfidence = function() {
  return /** @type {!proto.asgt.type.Confidence.Level} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.asgt.type.Confidence.Level} value
 * @return {!proto.asgt.v2alpha.SuggestOptions} returns this
 */
proto.asgt.v2alpha.SuggestOptions.prototype.setMinConfidence = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
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
proto.asgt.v2alpha.SuggestRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.asgt.v2alpha.SuggestRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asgt.v2alpha.SuggestRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.v2alpha.SuggestRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    input: (f = msg.getInput()) && asgt_v2alpha_type_data_pb.Data.toObject(includeInstance, f),
    options: (f = msg.getOptions()) && proto.asgt.v2alpha.SuggestOptions.toObject(includeInstance, f)
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
 * @return {!proto.asgt.v2alpha.SuggestRequest}
 */
proto.asgt.v2alpha.SuggestRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asgt.v2alpha.SuggestRequest;
  return proto.asgt.v2alpha.SuggestRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asgt.v2alpha.SuggestRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asgt.v2alpha.SuggestRequest}
 */
proto.asgt.v2alpha.SuggestRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new asgt_v2alpha_type_data_pb.Data;
      reader.readMessage(value,asgt_v2alpha_type_data_pb.Data.deserializeBinaryFromReader);
      msg.setInput(value);
      break;
    case 3:
      var value = new proto.asgt.v2alpha.SuggestOptions;
      reader.readMessage(value,proto.asgt.v2alpha.SuggestOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
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
proto.asgt.v2alpha.SuggestRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asgt.v2alpha.SuggestRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asgt.v2alpha.SuggestRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.v2alpha.SuggestRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInput();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      asgt_v2alpha_type_data_pb.Data.serializeBinaryToWriter
    );
  }
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.asgt.v2alpha.SuggestOptions.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.asgt.v2alpha.SuggestRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.asgt.v2alpha.SuggestRequest} returns this
 */
proto.asgt.v2alpha.SuggestRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional type.Data input = 2;
 * @return {?proto.asgt.v2alpha.type.Data}
 */
proto.asgt.v2alpha.SuggestRequest.prototype.getInput = function() {
  return /** @type{?proto.asgt.v2alpha.type.Data} */ (
    jspb.Message.getWrapperField(this, asgt_v2alpha_type_data_pb.Data, 2));
};


/**
 * @param {?proto.asgt.v2alpha.type.Data|undefined} value
 * @return {!proto.asgt.v2alpha.SuggestRequest} returns this
*/
proto.asgt.v2alpha.SuggestRequest.prototype.setInput = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.asgt.v2alpha.SuggestRequest} returns this
 */
proto.asgt.v2alpha.SuggestRequest.prototype.clearInput = function() {
  return this.setInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.asgt.v2alpha.SuggestRequest.prototype.hasInput = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SuggestOptions options = 3;
 * @return {?proto.asgt.v2alpha.SuggestOptions}
 */
proto.asgt.v2alpha.SuggestRequest.prototype.getOptions = function() {
  return /** @type{?proto.asgt.v2alpha.SuggestOptions} */ (
    jspb.Message.getWrapperField(this, proto.asgt.v2alpha.SuggestOptions, 3));
};


/**
 * @param {?proto.asgt.v2alpha.SuggestOptions|undefined} value
 * @return {!proto.asgt.v2alpha.SuggestRequest} returns this
*/
proto.asgt.v2alpha.SuggestRequest.prototype.setOptions = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.asgt.v2alpha.SuggestRequest} returns this
 */
proto.asgt.v2alpha.SuggestRequest.prototype.clearOptions = function() {
  return this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.asgt.v2alpha.SuggestRequest.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.asgt.v2alpha.SuggestResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.asgt.v2alpha.SuggestResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asgt.v2alpha.SuggestResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.v2alpha.SuggestResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    prediction: (f = msg.getPrediction()) && asgt_type_prediction_pb.Prediction.toObject(includeInstance, f),
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
 * @return {!proto.asgt.v2alpha.SuggestResponse}
 */
proto.asgt.v2alpha.SuggestResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asgt.v2alpha.SuggestResponse;
  return proto.asgt.v2alpha.SuggestResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asgt.v2alpha.SuggestResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asgt.v2alpha.SuggestResponse}
 */
proto.asgt.v2alpha.SuggestResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new asgt_type_prediction_pb.Prediction;
      reader.readMessage(value,asgt_type_prediction_pb.Prediction.deserializeBinaryFromReader);
      msg.setPrediction(value);
      break;
    case 2:
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
proto.asgt.v2alpha.SuggestResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asgt.v2alpha.SuggestResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asgt.v2alpha.SuggestResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.v2alpha.SuggestResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrediction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      asgt_type_prediction_pb.Prediction.serializeBinaryToWriter
    );
  }
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      asgt_type_model_pb.Model.serializeBinaryToWriter
    );
  }
};


/**
 * optional asgt.type.Prediction prediction = 1;
 * @return {?proto.asgt.type.Prediction}
 */
proto.asgt.v2alpha.SuggestResponse.prototype.getPrediction = function() {
  return /** @type{?proto.asgt.type.Prediction} */ (
    jspb.Message.getWrapperField(this, asgt_type_prediction_pb.Prediction, 1));
};


/**
 * @param {?proto.asgt.type.Prediction|undefined} value
 * @return {!proto.asgt.v2alpha.SuggestResponse} returns this
*/
proto.asgt.v2alpha.SuggestResponse.prototype.setPrediction = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.asgt.v2alpha.SuggestResponse} returns this
 */
proto.asgt.v2alpha.SuggestResponse.prototype.clearPrediction = function() {
  return this.setPrediction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.asgt.v2alpha.SuggestResponse.prototype.hasPrediction = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional asgt.type.Model model = 2;
 * @return {?proto.asgt.type.Model}
 */
proto.asgt.v2alpha.SuggestResponse.prototype.getModel = function() {
  return /** @type{?proto.asgt.type.Model} */ (
    jspb.Message.getWrapperField(this, asgt_type_model_pb.Model, 2));
};


/**
 * @param {?proto.asgt.type.Model|undefined} value
 * @return {!proto.asgt.v2alpha.SuggestResponse} returns this
*/
proto.asgt.v2alpha.SuggestResponse.prototype.setModel = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.asgt.v2alpha.SuggestResponse} returns this
 */
proto.asgt.v2alpha.SuggestResponse.prototype.clearModel = function() {
  return this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.asgt.v2alpha.SuggestResponse.prototype.hasModel = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.asgt.v2alpha.BatchSuggestRequest.repeatedFields_ = [2];



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
proto.asgt.v2alpha.BatchSuggestRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.asgt.v2alpha.BatchSuggestRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asgt.v2alpha.BatchSuggestRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.v2alpha.BatchSuggestRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    inputsList: jspb.Message.toObjectList(msg.getInputsList(),
    asgt_v2alpha_type_data_pb.Data.toObject, includeInstance),
    options: (f = msg.getOptions()) && proto.asgt.v2alpha.SuggestOptions.toObject(includeInstance, f)
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
 * @return {!proto.asgt.v2alpha.BatchSuggestRequest}
 */
proto.asgt.v2alpha.BatchSuggestRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asgt.v2alpha.BatchSuggestRequest;
  return proto.asgt.v2alpha.BatchSuggestRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asgt.v2alpha.BatchSuggestRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asgt.v2alpha.BatchSuggestRequest}
 */
proto.asgt.v2alpha.BatchSuggestRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new asgt_v2alpha_type_data_pb.Data;
      reader.readMessage(value,asgt_v2alpha_type_data_pb.Data.deserializeBinaryFromReader);
      msg.addInputs(value);
      break;
    case 3:
      var value = new proto.asgt.v2alpha.SuggestOptions;
      reader.readMessage(value,proto.asgt.v2alpha.SuggestOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
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
proto.asgt.v2alpha.BatchSuggestRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asgt.v2alpha.BatchSuggestRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asgt.v2alpha.BatchSuggestRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.v2alpha.BatchSuggestRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      asgt_v2alpha_type_data_pb.Data.serializeBinaryToWriter
    );
  }
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.asgt.v2alpha.SuggestOptions.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.asgt.v2alpha.BatchSuggestRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.asgt.v2alpha.BatchSuggestRequest} returns this
 */
proto.asgt.v2alpha.BatchSuggestRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated type.Data inputs = 2;
 * @return {!Array<!proto.asgt.v2alpha.type.Data>}
 */
proto.asgt.v2alpha.BatchSuggestRequest.prototype.getInputsList = function() {
  return /** @type{!Array<!proto.asgt.v2alpha.type.Data>} */ (
    jspb.Message.getRepeatedWrapperField(this, asgt_v2alpha_type_data_pb.Data, 2));
};


/**
 * @param {!Array<!proto.asgt.v2alpha.type.Data>} value
 * @return {!proto.asgt.v2alpha.BatchSuggestRequest} returns this
*/
proto.asgt.v2alpha.BatchSuggestRequest.prototype.setInputsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.asgt.v2alpha.type.Data=} opt_value
 * @param {number=} opt_index
 * @return {!proto.asgt.v2alpha.type.Data}
 */
proto.asgt.v2alpha.BatchSuggestRequest.prototype.addInputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.asgt.v2alpha.type.Data, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.asgt.v2alpha.BatchSuggestRequest} returns this
 */
proto.asgt.v2alpha.BatchSuggestRequest.prototype.clearInputsList = function() {
  return this.setInputsList([]);
};


/**
 * optional SuggestOptions options = 3;
 * @return {?proto.asgt.v2alpha.SuggestOptions}
 */
proto.asgt.v2alpha.BatchSuggestRequest.prototype.getOptions = function() {
  return /** @type{?proto.asgt.v2alpha.SuggestOptions} */ (
    jspb.Message.getWrapperField(this, proto.asgt.v2alpha.SuggestOptions, 3));
};


/**
 * @param {?proto.asgt.v2alpha.SuggestOptions|undefined} value
 * @return {!proto.asgt.v2alpha.BatchSuggestRequest} returns this
*/
proto.asgt.v2alpha.BatchSuggestRequest.prototype.setOptions = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.asgt.v2alpha.BatchSuggestRequest} returns this
 */
proto.asgt.v2alpha.BatchSuggestRequest.prototype.clearOptions = function() {
  return this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.asgt.v2alpha.BatchSuggestRequest.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.asgt.v2alpha.BatchSuggestResponse.repeatedFields_ = [1];



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
proto.asgt.v2alpha.BatchSuggestResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.asgt.v2alpha.BatchSuggestResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asgt.v2alpha.BatchSuggestResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.v2alpha.BatchSuggestResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    predictionsList: jspb.Message.toObjectList(msg.getPredictionsList(),
    asgt_type_prediction_pb.Prediction.toObject, includeInstance),
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
 * @return {!proto.asgt.v2alpha.BatchSuggestResponse}
 */
proto.asgt.v2alpha.BatchSuggestResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asgt.v2alpha.BatchSuggestResponse;
  return proto.asgt.v2alpha.BatchSuggestResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asgt.v2alpha.BatchSuggestResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asgt.v2alpha.BatchSuggestResponse}
 */
proto.asgt.v2alpha.BatchSuggestResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new asgt_type_prediction_pb.Prediction;
      reader.readMessage(value,asgt_type_prediction_pb.Prediction.deserializeBinaryFromReader);
      msg.addPredictions(value);
      break;
    case 2:
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
proto.asgt.v2alpha.BatchSuggestResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asgt.v2alpha.BatchSuggestResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asgt.v2alpha.BatchSuggestResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asgt.v2alpha.BatchSuggestResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPredictionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      asgt_type_prediction_pb.Prediction.serializeBinaryToWriter
    );
  }
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      asgt_type_model_pb.Model.serializeBinaryToWriter
    );
  }
};


/**
 * repeated asgt.type.Prediction predictions = 1;
 * @return {!Array<!proto.asgt.type.Prediction>}
 */
proto.asgt.v2alpha.BatchSuggestResponse.prototype.getPredictionsList = function() {
  return /** @type{!Array<!proto.asgt.type.Prediction>} */ (
    jspb.Message.getRepeatedWrapperField(this, asgt_type_prediction_pb.Prediction, 1));
};


/**
 * @param {!Array<!proto.asgt.type.Prediction>} value
 * @return {!proto.asgt.v2alpha.BatchSuggestResponse} returns this
*/
proto.asgt.v2alpha.BatchSuggestResponse.prototype.setPredictionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.asgt.type.Prediction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.asgt.type.Prediction}
 */
proto.asgt.v2alpha.BatchSuggestResponse.prototype.addPredictions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.asgt.type.Prediction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.asgt.v2alpha.BatchSuggestResponse} returns this
 */
proto.asgt.v2alpha.BatchSuggestResponse.prototype.clearPredictionsList = function() {
  return this.setPredictionsList([]);
};


/**
 * optional asgt.type.Model model = 2;
 * @return {?proto.asgt.type.Model}
 */
proto.asgt.v2alpha.BatchSuggestResponse.prototype.getModel = function() {
  return /** @type{?proto.asgt.type.Model} */ (
    jspb.Message.getWrapperField(this, asgt_type_model_pb.Model, 2));
};


/**
 * @param {?proto.asgt.type.Model|undefined} value
 * @return {!proto.asgt.v2alpha.BatchSuggestResponse} returns this
*/
proto.asgt.v2alpha.BatchSuggestResponse.prototype.setModel = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.asgt.v2alpha.BatchSuggestResponse} returns this
 */
proto.asgt.v2alpha.BatchSuggestResponse.prototype.clearModel = function() {
  return this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.asgt.v2alpha.BatchSuggestResponse.prototype.hasModel = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.asgt.v2alpha);
