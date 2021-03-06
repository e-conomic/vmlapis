# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: asgt/type/sample.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from vml_proto.asgt.type import data_pb2 as asgt_dot_type_dot_data__pb2
from vml_proto.asgt.type import target_value_pb2 as asgt_dot_type_dot_target__value__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='asgt/type/sample.proto',
  package='asgt.type',
  syntax='proto3',
  serialized_options=_b('Z6github.com/e-conomic/vmlapis/gen/go/asgt/type;asgttype'),
  serialized_pb=_b('\n\x16\x61sgt/type/sample.proto\x12\tasgt.type\x1a\x14\x61sgt/type/data.proto\x1a\x1c\x61sgt/type/target_value.proto\"V\n\x06Sample\x12\x1d\n\x04\x64\x61ta\x18\x01 \x01(\x0b\x32\x0f.asgt.type.Data\x12-\n\rtarget_values\x18\x02 \x03(\x0b\x32\x16.asgt.type.TargetValueB8Z6github.com/e-conomic/vmlapis/gen/go/asgt/type;asgttypeb\x06proto3')
  ,
  dependencies=[asgt_dot_type_dot_data__pb2.DESCRIPTOR,asgt_dot_type_dot_target__value__pb2.DESCRIPTOR,])




_SAMPLE = _descriptor.Descriptor(
  name='Sample',
  full_name='asgt.type.Sample',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='data', full_name='asgt.type.Sample.data', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='target_values', full_name='asgt.type.Sample.target_values', index=1,
      number=2, type=11, cpp_type=10, label=3,
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
  serialized_start=89,
  serialized_end=175,
)

_SAMPLE.fields_by_name['data'].message_type = asgt_dot_type_dot_data__pb2._DATA
_SAMPLE.fields_by_name['target_values'].message_type = asgt_dot_type_dot_target__value__pb2._TARGETVALUE
DESCRIPTOR.message_types_by_name['Sample'] = _SAMPLE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Sample = _reflection.GeneratedProtocolMessageType('Sample', (_message.Message,), dict(
  DESCRIPTOR = _SAMPLE,
  __module__ = 'asgt.type.sample_pb2'
  # @@protoc_insertion_point(class_scope:asgt.type.Sample)
  ))
_sym_db.RegisterMessage(Sample)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
