# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: asgt/type/train_model_event.proto

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from vml_proto.asgt.type import dataset_pb2 as asgt_dot_type_dot_dataset__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='asgt/type/train_model_event.proto',
  package='asgt.type',
  syntax='proto3',
  serialized_options=b'Z6github.com/e-conomic/vmlapis/gen/go/asgt/type;asgttype',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n!asgt/type/train_model_event.proto\x12\tasgt.type\x1a\x17\x61sgt/type/dataset.proto\"\xd5\x01\n\x0fTrainModelEvent\x12#\n\x07\x64\x61taset\x18\x01 \x01(\x0b\x32\x12.asgt.type.Dataset\x12\x15\n\rmodel_version\x18\x04 \x01(\x03\x12\x0e\n\x06status\x18\x05 \x01(\t\x12\x16\n\x0estatus_message\x18\x06 \x01(\t\x12\x36\n\tartifacts\x18\x07 \x03(\x0b\x32#.asgt.type.TrainModelEvent.Artifact\x1a&\n\x08\x41rtifact\x12\x0c\n\x04type\x18\x01 \x01(\t\x12\x0c\n\x04path\x18\x02 \x01(\tB8Z6github.com/e-conomic/vmlapis/gen/go/asgt/type;asgttypeb\x06proto3'
  ,
  dependencies=[asgt_dot_type_dot_dataset__pb2.DESCRIPTOR,])




_TRAINMODELEVENT_ARTIFACT = _descriptor.Descriptor(
  name='Artifact',
  full_name='asgt.type.TrainModelEvent.Artifact',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='type', full_name='asgt.type.TrainModelEvent.Artifact.type', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='path', full_name='asgt.type.TrainModelEvent.Artifact.path', index=1,
      number=2, type=9, cpp_type=9, label=1,
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
  serialized_start=249,
  serialized_end=287,
)

_TRAINMODELEVENT = _descriptor.Descriptor(
  name='TrainModelEvent',
  full_name='asgt.type.TrainModelEvent',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='dataset', full_name='asgt.type.TrainModelEvent.dataset', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='model_version', full_name='asgt.type.TrainModelEvent.model_version', index=1,
      number=4, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='status', full_name='asgt.type.TrainModelEvent.status', index=2,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='status_message', full_name='asgt.type.TrainModelEvent.status_message', index=3,
      number=6, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='artifacts', full_name='asgt.type.TrainModelEvent.artifacts', index=4,
      number=7, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_TRAINMODELEVENT_ARTIFACT, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=74,
  serialized_end=287,
)

_TRAINMODELEVENT_ARTIFACT.containing_type = _TRAINMODELEVENT
_TRAINMODELEVENT.fields_by_name['dataset'].message_type = asgt_dot_type_dot_dataset__pb2._DATASET
_TRAINMODELEVENT.fields_by_name['artifacts'].message_type = _TRAINMODELEVENT_ARTIFACT
DESCRIPTOR.message_types_by_name['TrainModelEvent'] = _TRAINMODELEVENT
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

TrainModelEvent = _reflection.GeneratedProtocolMessageType('TrainModelEvent', (_message.Message,), {

  'Artifact' : _reflection.GeneratedProtocolMessageType('Artifact', (_message.Message,), {
    'DESCRIPTOR' : _TRAINMODELEVENT_ARTIFACT,
    '__module__' : 'asgt.type.train_model_event_pb2'
    # @@protoc_insertion_point(class_scope:asgt.type.TrainModelEvent.Artifact)
    })
  ,
  'DESCRIPTOR' : _TRAINMODELEVENT,
  '__module__' : 'asgt.type.train_model_event_pb2'
  # @@protoc_insertion_point(class_scope:asgt.type.TrainModelEvent)
  })
_sym_db.RegisterMessage(TrainModelEvent)
_sym_db.RegisterMessage(TrainModelEvent.Artifact)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
