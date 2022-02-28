# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: asgt/v2/type/training.proto

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from vml_proto.asgt.type import dataset_pb2 as asgt_dot_type_dot_dataset__pb2
from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='asgt/v2/type/training.proto',
  package='asgt.v2.type',
  syntax='proto3',
  serialized_options=b'Z9github.com/e-conomic/vmlapis/gen/go/asgt/v2/type;asgttype',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\x1b\x61sgt/v2/type/training.proto\x12\x0c\x61sgt.v2.type\x1a\x17\x61sgt/type/dataset.proto\x1a\x1fgoogle/protobuf/timestamp.proto\"\xda\x01\n\x08Training\x12.\n\ncreated_at\x18\x01 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12\x0e\n\x06status\x18\x02 \x01(\t\x12\x17\n\x0ftraining_status\x18\x03 \x01(\t\x12\x1f\n\x17training_status_message\x18\x04 \x01(\t\x12/\n\x0b\x66inish_time\x18\x05 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12#\n\x07\x64\x61taset\x18\x06 \x01(\x0b\x32\x12.asgt.type.DatasetB;Z9github.com/e-conomic/vmlapis/gen/go/asgt/v2/type;asgttypeb\x06proto3'
  ,
  dependencies=[asgt_dot_type_dot_dataset__pb2.DESCRIPTOR,google_dot_protobuf_dot_timestamp__pb2.DESCRIPTOR,])




_TRAINING = _descriptor.Descriptor(
  name='Training',
  full_name='asgt.v2.type.Training',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='created_at', full_name='asgt.v2.type.Training.created_at', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='status', full_name='asgt.v2.type.Training.status', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='training_status', full_name='asgt.v2.type.Training.training_status', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='training_status_message', full_name='asgt.v2.type.Training.training_status_message', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='finish_time', full_name='asgt.v2.type.Training.finish_time', index=4,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='dataset', full_name='asgt.v2.type.Training.dataset', index=5,
      number=6, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
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
  serialized_start=104,
  serialized_end=322,
)

_TRAINING.fields_by_name['created_at'].message_type = google_dot_protobuf_dot_timestamp__pb2._TIMESTAMP
_TRAINING.fields_by_name['finish_time'].message_type = google_dot_protobuf_dot_timestamp__pb2._TIMESTAMP
_TRAINING.fields_by_name['dataset'].message_type = asgt_dot_type_dot_dataset__pb2._DATASET
DESCRIPTOR.message_types_by_name['Training'] = _TRAINING
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Training = _reflection.GeneratedProtocolMessageType('Training', (_message.Message,), {
  'DESCRIPTOR' : _TRAINING,
  '__module__' : 'asgt.v2.type.training_pb2'
  # @@protoc_insertion_point(class_scope:asgt.v2.type.Training)
  })
_sym_db.RegisterMessage(Training)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
