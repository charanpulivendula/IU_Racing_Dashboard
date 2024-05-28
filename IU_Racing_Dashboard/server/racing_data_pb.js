// source: server/racing_data.proto
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

goog.exportSymbol('proto.RacecarData', null, global);
goog.exportSymbol('proto.RacecarData.Speed', null, global);
goog.exportSymbol('proto.RacecarData.Tire', null, global);
goog.exportSymbol('proto.RacecarData.Trajectory', null, global);
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
proto.RacecarData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RacecarData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RacecarData.displayName = 'proto.RacecarData';
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
proto.RacecarData.Speed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RacecarData.Speed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RacecarData.Speed.displayName = 'proto.RacecarData.Speed';
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
proto.RacecarData.Tire = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RacecarData.Tire, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RacecarData.Tire.displayName = 'proto.RacecarData.Tire';
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
proto.RacecarData.Trajectory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.RacecarData.Trajectory.repeatedFields_, null);
};
goog.inherits(proto.RacecarData.Trajectory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RacecarData.Trajectory.displayName = 'proto.RacecarData.Trajectory';
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
proto.RacecarData.prototype.toObject = function(opt_includeInstance) {
  return proto.RacecarData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RacecarData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RacecarData.toObject = function(includeInstance, msg) {
  var f, obj = {
    speed: (f = msg.getSpeed()) && proto.RacecarData.Speed.toObject(includeInstance, f),
    tireTemp: (f = msg.getTireTemp()) && proto.RacecarData.Tire.toObject(includeInstance, f),
    throttle: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    brake: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    gear: jspb.Message.getFieldWithDefault(msg, 5, 0),
    ctState: jspb.Message.getFieldWithDefault(msg, 6, 0),
    heartbeat: jspb.Message.getFieldWithDefault(msg, 7, 0),
    system: jspb.Message.getFieldWithDefault(msg, 8, ""),
    rpm: jspb.Message.getFieldWithDefault(msg, 9, 0),
    steeringAngle: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
    disconnected: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    laps: jspb.Message.getFieldWithDefault(msg, 12, 0),
    trackFlag: jspb.Message.getFieldWithDefault(msg, 13, 0),
    vehicleFlag: jspb.Message.getFieldWithDefault(msg, 14, 0),
    planningTrajectory: (f = msg.getPlanningTrajectory()) && proto.RacecarData.Trajectory.toObject(includeInstance, f)
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
 * @return {!proto.RacecarData}
 */
proto.RacecarData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RacecarData;
  return proto.RacecarData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RacecarData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RacecarData}
 */
proto.RacecarData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.RacecarData.Speed;
      reader.readMessage(value,proto.RacecarData.Speed.deserializeBinaryFromReader);
      msg.setSpeed(value);
      break;
    case 2:
      var value = new proto.RacecarData.Tire;
      reader.readMessage(value,proto.RacecarData.Tire.deserializeBinaryFromReader);
      msg.setTireTemp(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setThrottle(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBrake(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGear(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCtState(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHeartbeat(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSystem(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRpm(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSteeringAngle(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisconnected(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLaps(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTrackFlag(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVehicleFlag(value);
      break;
    case 15:
      var value = new proto.RacecarData.Trajectory;
      reader.readMessage(value,proto.RacecarData.Trajectory.deserializeBinaryFromReader);
      msg.setPlanningTrajectory(value);
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
proto.RacecarData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RacecarData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RacecarData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RacecarData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpeed();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.RacecarData.Speed.serializeBinaryToWriter
    );
  }
  f = message.getTireTemp();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.RacecarData.Tire.serializeBinaryToWriter
    );
  }
  f = message.getThrottle();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getBrake();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getGear();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getCtState();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getHeartbeat();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getSystem();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getRpm();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getSteeringAngle();
  if (f !== 0.0) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = message.getDisconnected();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getLaps();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getTrackFlag();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
  f = message.getVehicleFlag();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = message.getPlanningTrajectory();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.RacecarData.Trajectory.serializeBinaryToWriter
    );
  }
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
proto.RacecarData.Speed.prototype.toObject = function(opt_includeInstance) {
  return proto.RacecarData.Speed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RacecarData.Speed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RacecarData.Speed.toObject = function(includeInstance, msg) {
  var f, obj = {
    max: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    min: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    current: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.RacecarData.Speed}
 */
proto.RacecarData.Speed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RacecarData.Speed;
  return proto.RacecarData.Speed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RacecarData.Speed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RacecarData.Speed}
 */
proto.RacecarData.Speed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMax(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMin(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCurrent(value);
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
proto.RacecarData.Speed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RacecarData.Speed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RacecarData.Speed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RacecarData.Speed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMax();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getMin();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getCurrent();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * optional double max = 1;
 * @return {number}
 */
proto.RacecarData.Speed.prototype.getMax = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.RacecarData.Speed} returns this
 */
proto.RacecarData.Speed.prototype.setMax = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double min = 2;
 * @return {number}
 */
proto.RacecarData.Speed.prototype.getMin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.RacecarData.Speed} returns this
 */
proto.RacecarData.Speed.prototype.setMin = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double current = 3;
 * @return {number}
 */
proto.RacecarData.Speed.prototype.getCurrent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.RacecarData.Speed} returns this
 */
proto.RacecarData.Speed.prototype.setCurrent = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
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
proto.RacecarData.Tire.prototype.toObject = function(opt_includeInstance) {
  return proto.RacecarData.Tire.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RacecarData.Tire} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RacecarData.Tire.toObject = function(includeInstance, msg) {
  var f, obj = {
    frontRight: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    frontLeft: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    rearRight: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    rearLeft: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
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
 * @return {!proto.RacecarData.Tire}
 */
proto.RacecarData.Tire.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RacecarData.Tire;
  return proto.RacecarData.Tire.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RacecarData.Tire} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RacecarData.Tire}
 */
proto.RacecarData.Tire.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFrontRight(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFrontLeft(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRearRight(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRearLeft(value);
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
proto.RacecarData.Tire.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RacecarData.Tire.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RacecarData.Tire} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RacecarData.Tire.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrontRight();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getFrontLeft();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getRearRight();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getRearLeft();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * optional double front_right = 1;
 * @return {number}
 */
proto.RacecarData.Tire.prototype.getFrontRight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.RacecarData.Tire} returns this
 */
proto.RacecarData.Tire.prototype.setFrontRight = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double front_left = 2;
 * @return {number}
 */
proto.RacecarData.Tire.prototype.getFrontLeft = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.RacecarData.Tire} returns this
 */
proto.RacecarData.Tire.prototype.setFrontLeft = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double rear_right = 3;
 * @return {number}
 */
proto.RacecarData.Tire.prototype.getRearRight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.RacecarData.Tire} returns this
 */
proto.RacecarData.Tire.prototype.setRearRight = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double rear_left = 4;
 * @return {number}
 */
proto.RacecarData.Tire.prototype.getRearLeft = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.RacecarData.Tire} returns this
 */
proto.RacecarData.Tire.prototype.setRearLeft = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.RacecarData.Trajectory.repeatedFields_ = [1,2,3];



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
proto.RacecarData.Trajectory.prototype.toObject = function(opt_includeInstance) {
  return proto.RacecarData.Trajectory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RacecarData.Trajectory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RacecarData.Trajectory.toObject = function(includeInstance, msg) {
  var f, obj = {
    xMList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 1)) == null ? undefined : f,
    yMList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 2)) == null ? undefined : f,
    velMphList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.RacecarData.Trajectory}
 */
proto.RacecarData.Trajectory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RacecarData.Trajectory;
  return proto.RacecarData.Trajectory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RacecarData.Trajectory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RacecarData.Trajectory}
 */
proto.RacecarData.Trajectory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedDouble());
      msg.setXMList(value);
      break;
    case 2:
      var value = /** @type {!Array<number>} */ (reader.readPackedDouble());
      msg.setYMList(value);
      break;
    case 3:
      var value = /** @type {!Array<number>} */ (reader.readPackedDouble());
      msg.setVelMphList(value);
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
proto.RacecarData.Trajectory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RacecarData.Trajectory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RacecarData.Trajectory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RacecarData.Trajectory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getXMList();
  if (f.length > 0) {
    writer.writePackedDouble(
      1,
      f
    );
  }
  f = message.getYMList();
  if (f.length > 0) {
    writer.writePackedDouble(
      2,
      f
    );
  }
  f = message.getVelMphList();
  if (f.length > 0) {
    writer.writePackedDouble(
      3,
      f
    );
  }
};


/**
 * repeated double x_m = 1;
 * @return {!Array<number>}
 */
proto.RacecarData.Trajectory.prototype.getXMList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.RacecarData.Trajectory} returns this
 */
proto.RacecarData.Trajectory.prototype.setXMList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.RacecarData.Trajectory} returns this
 */
proto.RacecarData.Trajectory.prototype.addXM = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.RacecarData.Trajectory} returns this
 */
proto.RacecarData.Trajectory.prototype.clearXMList = function() {
  return this.setXMList([]);
};


/**
 * repeated double y_m = 2;
 * @return {!Array<number>}
 */
proto.RacecarData.Trajectory.prototype.getYMList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.RacecarData.Trajectory} returns this
 */
proto.RacecarData.Trajectory.prototype.setYMList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.RacecarData.Trajectory} returns this
 */
proto.RacecarData.Trajectory.prototype.addYM = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.RacecarData.Trajectory} returns this
 */
proto.RacecarData.Trajectory.prototype.clearYMList = function() {
  return this.setYMList([]);
};


/**
 * repeated double vel_mph = 3;
 * @return {!Array<number>}
 */
proto.RacecarData.Trajectory.prototype.getVelMphList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.RacecarData.Trajectory} returns this
 */
proto.RacecarData.Trajectory.prototype.setVelMphList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.RacecarData.Trajectory} returns this
 */
proto.RacecarData.Trajectory.prototype.addVelMph = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.RacecarData.Trajectory} returns this
 */
proto.RacecarData.Trajectory.prototype.clearVelMphList = function() {
  return this.setVelMphList([]);
};


/**
 * optional Speed speed = 1;
 * @return {?proto.RacecarData.Speed}
 */
proto.RacecarData.prototype.getSpeed = function() {
  return /** @type{?proto.RacecarData.Speed} */ (
    jspb.Message.getWrapperField(this, proto.RacecarData.Speed, 1));
};


/**
 * @param {?proto.RacecarData.Speed|undefined} value
 * @return {!proto.RacecarData} returns this
*/
proto.RacecarData.prototype.setSpeed = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.RacecarData} returns this
 */
proto.RacecarData.prototype.clearSpeed = function() {
  return this.setSpeed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RacecarData.prototype.hasSpeed = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Tire tire_temp = 2;
 * @return {?proto.RacecarData.Tire}
 */
proto.RacecarData.prototype.getTireTemp = function() {
  return /** @type{?proto.RacecarData.Tire} */ (
    jspb.Message.getWrapperField(this, proto.RacecarData.Tire, 2));
};


/**
 * @param {?proto.RacecarData.Tire|undefined} value
 * @return {!proto.RacecarData} returns this
*/
proto.RacecarData.prototype.setTireTemp = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.RacecarData} returns this
 */
proto.RacecarData.prototype.clearTireTemp = function() {
  return this.setTireTemp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RacecarData.prototype.hasTireTemp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double throttle = 3;
 * @return {number}
 */
proto.RacecarData.prototype.getThrottle = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.RacecarData} returns this
 */
proto.RacecarData.prototype.setThrottle = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double brake = 4;
 * @return {number}
 */
proto.RacecarData.prototype.getBrake = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.RacecarData} returns this
 */
proto.RacecarData.prototype.setBrake = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional int32 gear = 5;
 * @return {number}
 */
proto.RacecarData.prototype.getGear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.RacecarData} returns this
 */
proto.RacecarData.prototype.setGear = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 ct_state = 6;
 * @return {number}
 */
proto.RacecarData.prototype.getCtState = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.RacecarData} returns this
 */
proto.RacecarData.prototype.setCtState = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 heartbeat = 7;
 * @return {number}
 */
proto.RacecarData.prototype.getHeartbeat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.RacecarData} returns this
 */
proto.RacecarData.prototype.setHeartbeat = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string system = 8;
 * @return {string}
 */
proto.RacecarData.prototype.getSystem = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.RacecarData} returns this
 */
proto.RacecarData.prototype.setSystem = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int32 rpm = 9;
 * @return {number}
 */
proto.RacecarData.prototype.getRpm = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.RacecarData} returns this
 */
proto.RacecarData.prototype.setRpm = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional double steering_angle = 10;
 * @return {number}
 */
proto.RacecarData.prototype.getSteeringAngle = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.RacecarData} returns this
 */
proto.RacecarData.prototype.setSteeringAngle = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional bool disconnected = 11;
 * @return {boolean}
 */
proto.RacecarData.prototype.getDisconnected = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.RacecarData} returns this
 */
proto.RacecarData.prototype.setDisconnected = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional int32 laps = 12;
 * @return {number}
 */
proto.RacecarData.prototype.getLaps = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.RacecarData} returns this
 */
proto.RacecarData.prototype.setLaps = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int32 track_flag = 13;
 * @return {number}
 */
proto.RacecarData.prototype.getTrackFlag = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.RacecarData} returns this
 */
proto.RacecarData.prototype.setTrackFlag = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional int32 vehicle_flag = 14;
 * @return {number}
 */
proto.RacecarData.prototype.getVehicleFlag = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.RacecarData} returns this
 */
proto.RacecarData.prototype.setVehicleFlag = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional Trajectory planning_trajectory = 15;
 * @return {?proto.RacecarData.Trajectory}
 */
proto.RacecarData.prototype.getPlanningTrajectory = function() {
  return /** @type{?proto.RacecarData.Trajectory} */ (
    jspb.Message.getWrapperField(this, proto.RacecarData.Trajectory, 15));
};


/**
 * @param {?proto.RacecarData.Trajectory|undefined} value
 * @return {!proto.RacecarData} returns this
*/
proto.RacecarData.prototype.setPlanningTrajectory = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.RacecarData} returns this
 */
proto.RacecarData.prototype.clearPlanningTrajectory = function() {
  return this.setPlanningTrajectory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RacecarData.prototype.hasPlanningTrajectory = function() {
  return jspb.Message.getField(this, 15) != null;
};


goog.object.extend(exports, proto);