# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ssn/type/tier.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf.internal import enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='ssn/type/tier.proto',
  package='ssn.type',
  syntax='proto3',
  serialized_options=_b('Z4github.com/e-conomic/vmlapis/gen/go/ssn/type;ssntype'),
  serialized_pb=_b('\n\x13ssn/type/tier.proto\x12\x08ssn.type*.\n\x04Tier\x12\x0b\n\x07\x44\x45\x46\x41ULT\x10\x00\x12\x0c\n\x08STANDARD\x10\x01\x12\x0b\n\x07PREMIUM\x10\x02\x42\x36Z4github.com/e-conomic/vmlapis/gen/go/ssn/type;ssntypeb\x06proto3')
)

_TIER = _descriptor.EnumDescriptor(
  name='Tier',
  full_name='ssn.type.Tier',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='DEFAULT', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='STANDARD', index=1, number=1,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='PREMIUM', index=2, number=2,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=33,
  serialized_end=79,
)
_sym_db.RegisterEnumDescriptor(_TIER)

Tier = enum_type_wrapper.EnumTypeWrapper(_TIER)
DEFAULT = 0
STANDARD = 1
PREMIUM = 2


DESCRIPTOR.enum_types_by_name['Tier'] = _TIER
_sym_db.RegisterFileDescriptor(DESCRIPTOR)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
