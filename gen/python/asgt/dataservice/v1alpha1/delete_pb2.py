# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: asgt/dataservice/v1alpha1/delete.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='asgt/dataservice/v1alpha1/delete.proto',
  package='asgt.dataservice.v1alpha1',
  syntax='proto3',
  serialized_options=_b('Z\013dataservice'),
  serialized_pb=_b('\n&asgt/dataservice/v1alpha1/delete.proto\x12\x19\x61sgt.dataservice.v1alpha1\"B\n\rDeleteRequest\x12\x12\n\nmodel_type\x18\x01 \x01(\t\x12\x0f\n\x07\x64\x61taset\x18\x02 \x01(\t\x12\x0c\n\x04tags\x18\x03 \x03(\tB\rZ\x0b\x64\x61taserviceb\x06proto3')
)




_DELETEREQUEST = _descriptor.Descriptor(
  name='DeleteRequest',
  full_name='asgt.dataservice.v1alpha1.DeleteRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='model_type', full_name='asgt.dataservice.v1alpha1.DeleteRequest.model_type', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='dataset', full_name='asgt.dataservice.v1alpha1.DeleteRequest.dataset', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='tags', full_name='asgt.dataservice.v1alpha1.DeleteRequest.tags', index=2,
      number=3, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
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
  serialized_start=69,
  serialized_end=135,
)

DESCRIPTOR.message_types_by_name['DeleteRequest'] = _DELETEREQUEST
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

DeleteRequest = _reflection.GeneratedProtocolMessageType('DeleteRequest', (_message.Message,), dict(
  DESCRIPTOR = _DELETEREQUEST,
  __module__ = 'asgt.dataservice.v1alpha1.delete_pb2'
  # @@protoc_insertion_point(class_scope:asgt.dataservice.v1alpha1.DeleteRequest)
  ))
_sym_db.RegisterMessage(DeleteRequest)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
