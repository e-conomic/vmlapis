# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: asgt/modelregistry/v1/model_registry.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from vml_proto.asgt.type import dataset_pb2 as asgt_dot_type_dot_dataset__pb2
from vml_proto.asgt.type import model_pb2 as asgt_dot_type_dot_model__pb2
from vml_proto.asgt.type import revision_pb2 as asgt_dot_type_dot_revision__pb2
from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='asgt/modelregistry/v1/model_registry.proto',
  package='asgt.modelregistry.v1',
  syntax='proto3',
  serialized_options=_b('Z\rmodelregistry'),
  serialized_pb=_b('\n*asgt/modelregistry/v1/model_registry.proto\x12\x15\x61sgt.modelregistry.v1\x1a\x17\x61sgt/type/dataset.proto\x1a\x15\x61sgt/type/model.proto\x1a\x18\x61sgt/type/revision.proto\x1a\x1bgoogle/protobuf/empty.proto\"y\n\x14RegisterModelRequest\x12#\n\x07\x64\x61taset\x18\x01 \x01(\x0b\x32\x12.asgt.type.Dataset\x12%\n\x08revision\x18\x02 \x01(\x0b\x32\x13.asgt.type.Revision\x12\x15\n\rmodel_version\x18\x03 \x01(\x03\"=\n\x16GetCurrentModelRequest\x12#\n\x07\x64\x61taset\x18\x01 \x01(\x0b\x32\x12.asgt.type.Dataset\":\n\x17GetCurrentModelResponse\x12\x1f\n\x05model\x18\x01 \x01(\x0b\x32\x10.asgt.type.Model2\xd7\x01\n\rModelRegistry\x12T\n\rRegisterModel\x12+.asgt.modelregistry.v1.RegisterModelRequest\x1a\x16.google.protobuf.Empty\x12p\n\x0fGetCurrentModel\x12-.asgt.modelregistry.v1.GetCurrentModelRequest\x1a..asgt.modelregistry.v1.GetCurrentModelResponseB\x0fZ\rmodelregistryb\x06proto3')
  ,
  dependencies=[asgt_dot_type_dot_dataset__pb2.DESCRIPTOR,asgt_dot_type_dot_model__pb2.DESCRIPTOR,asgt_dot_type_dot_revision__pb2.DESCRIPTOR,google_dot_protobuf_dot_empty__pb2.DESCRIPTOR,])




_REGISTERMODELREQUEST = _descriptor.Descriptor(
  name='RegisterModelRequest',
  full_name='asgt.modelregistry.v1.RegisterModelRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='dataset', full_name='asgt.modelregistry.v1.RegisterModelRequest.dataset', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='revision', full_name='asgt.modelregistry.v1.RegisterModelRequest.revision', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='model_version', full_name='asgt.modelregistry.v1.RegisterModelRequest.model_version', index=2,
      number=3, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
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
  serialized_start=172,
  serialized_end=293,
)


_GETCURRENTMODELREQUEST = _descriptor.Descriptor(
  name='GetCurrentModelRequest',
  full_name='asgt.modelregistry.v1.GetCurrentModelRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='dataset', full_name='asgt.modelregistry.v1.GetCurrentModelRequest.dataset', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
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
  serialized_start=295,
  serialized_end=356,
)


_GETCURRENTMODELRESPONSE = _descriptor.Descriptor(
  name='GetCurrentModelResponse',
  full_name='asgt.modelregistry.v1.GetCurrentModelResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='model', full_name='asgt.modelregistry.v1.GetCurrentModelResponse.model', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
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
  serialized_start=358,
  serialized_end=416,
)

_REGISTERMODELREQUEST.fields_by_name['dataset'].message_type = asgt_dot_type_dot_dataset__pb2._DATASET
_REGISTERMODELREQUEST.fields_by_name['revision'].message_type = asgt_dot_type_dot_revision__pb2._REVISION
_GETCURRENTMODELREQUEST.fields_by_name['dataset'].message_type = asgt_dot_type_dot_dataset__pb2._DATASET
_GETCURRENTMODELRESPONSE.fields_by_name['model'].message_type = asgt_dot_type_dot_model__pb2._MODEL
DESCRIPTOR.message_types_by_name['RegisterModelRequest'] = _REGISTERMODELREQUEST
DESCRIPTOR.message_types_by_name['GetCurrentModelRequest'] = _GETCURRENTMODELREQUEST
DESCRIPTOR.message_types_by_name['GetCurrentModelResponse'] = _GETCURRENTMODELRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

RegisterModelRequest = _reflection.GeneratedProtocolMessageType('RegisterModelRequest', (_message.Message,), dict(
  DESCRIPTOR = _REGISTERMODELREQUEST,
  __module__ = 'asgt.modelregistry.v1.model_registry_pb2'
  # @@protoc_insertion_point(class_scope:asgt.modelregistry.v1.RegisterModelRequest)
  ))
_sym_db.RegisterMessage(RegisterModelRequest)

GetCurrentModelRequest = _reflection.GeneratedProtocolMessageType('GetCurrentModelRequest', (_message.Message,), dict(
  DESCRIPTOR = _GETCURRENTMODELREQUEST,
  __module__ = 'asgt.modelregistry.v1.model_registry_pb2'
  # @@protoc_insertion_point(class_scope:asgt.modelregistry.v1.GetCurrentModelRequest)
  ))
_sym_db.RegisterMessage(GetCurrentModelRequest)

GetCurrentModelResponse = _reflection.GeneratedProtocolMessageType('GetCurrentModelResponse', (_message.Message,), dict(
  DESCRIPTOR = _GETCURRENTMODELRESPONSE,
  __module__ = 'asgt.modelregistry.v1.model_registry_pb2'
  # @@protoc_insertion_point(class_scope:asgt.modelregistry.v1.GetCurrentModelResponse)
  ))
_sym_db.RegisterMessage(GetCurrentModelResponse)


DESCRIPTOR._options = None

_MODELREGISTRY = _descriptor.ServiceDescriptor(
  name='ModelRegistry',
  full_name='asgt.modelregistry.v1.ModelRegistry',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=419,
  serialized_end=634,
  methods=[
  _descriptor.MethodDescriptor(
    name='RegisterModel',
    full_name='asgt.modelregistry.v1.ModelRegistry.RegisterModel',
    index=0,
    containing_service=None,
    input_type=_REGISTERMODELREQUEST,
    output_type=google_dot_protobuf_dot_empty__pb2._EMPTY,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='GetCurrentModel',
    full_name='asgt.modelregistry.v1.ModelRegistry.GetCurrentModel',
    index=1,
    containing_service=None,
    input_type=_GETCURRENTMODELREQUEST,
    output_type=_GETCURRENTMODELRESPONSE,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_MODELREGISTRY)

DESCRIPTOR.services_by_name['ModelRegistry'] = _MODELREGISTRY

# @@protoc_insertion_point(module_scope)