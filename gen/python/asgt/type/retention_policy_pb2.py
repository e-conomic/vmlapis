# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: asgt/type/retention_policy.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='asgt/type/retention_policy.proto',
  package='asgt.type',
  syntax='proto3',
  serialized_options=b'Z6github.com/e-conomic/vmlapis/gen/go/asgt/type;asgttype',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n asgt/type/retention_policy.proto\x12\tasgt.type\"#\n\x0fRetentionPolicy\x12\x10\n\x08max_days\x18\x01 \x01(\x03\x42\x38Z6github.com/e-conomic/vmlapis/gen/go/asgt/type;asgttypeb\x06proto3'
)




_RETENTIONPOLICY = _descriptor.Descriptor(
  name='RetentionPolicy',
  full_name='asgt.type.RetentionPolicy',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='max_days', full_name='asgt.type.RetentionPolicy.max_days', index=0,
      number=1, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
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
  serialized_start=47,
  serialized_end=82,
)

DESCRIPTOR.message_types_by_name['RetentionPolicy'] = _RETENTIONPOLICY
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

RetentionPolicy = _reflection.GeneratedProtocolMessageType('RetentionPolicy', (_message.Message,), {
  'DESCRIPTOR' : _RETENTIONPOLICY,
  '__module__' : 'asgt.type.retention_policy_pb2'
  # @@protoc_insertion_point(class_scope:asgt.type.RetentionPolicy)
  })
_sym_db.RegisterMessage(RetentionPolicy)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
