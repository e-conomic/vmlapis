# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: asgt/v2alpha/type/training_info.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='asgt/v2alpha/type/training_info.proto',
  package='asgt.v2alpha.type',
  syntax='proto3',
  serialized_options=b'Z>github.com/e-conomic/vmlapis/gen/go/asgt/v2alpha/type;asgttype',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n%asgt/v2alpha/type/training_info.proto\x12\x11\x61sgt.v2alpha.type\x1a\x1fgoogle/protobuf/timestamp.proto\"\x85\x01\n\x0cTrainingInfo\x12.\n\nstarted_at\x18\x01 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12,\n\x08\x65nded_at\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12\x17\n\x0ftraining_status\x18\x03 \x01(\tB@Z>github.com/e-conomic/vmlapis/gen/go/asgt/v2alpha/type;asgttypeb\x06proto3'
  ,
  dependencies=[google_dot_protobuf_dot_timestamp__pb2.DESCRIPTOR,])




_TRAININGINFO = _descriptor.Descriptor(
  name='TrainingInfo',
  full_name='asgt.v2alpha.type.TrainingInfo',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='started_at', full_name='asgt.v2alpha.type.TrainingInfo.started_at', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='ended_at', full_name='asgt.v2alpha.type.TrainingInfo.ended_at', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='training_status', full_name='asgt.v2alpha.type.TrainingInfo.training_status', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=94,
  serialized_end=227,
)

_TRAININGINFO.fields_by_name['started_at'].message_type = google_dot_protobuf_dot_timestamp__pb2._TIMESTAMP
_TRAININGINFO.fields_by_name['ended_at'].message_type = google_dot_protobuf_dot_timestamp__pb2._TIMESTAMP
DESCRIPTOR.message_types_by_name['TrainingInfo'] = _TRAININGINFO
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

TrainingInfo = _reflection.GeneratedProtocolMessageType('TrainingInfo', (_message.Message,), {
  'DESCRIPTOR' : _TRAININGINFO,
  '__module__' : 'asgt.v2alpha.type.training_info_pb2'
  # @@protoc_insertion_point(class_scope:asgt.v2alpha.type.TrainingInfo)
  })
_sym_db.RegisterMessage(TrainingInfo)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
