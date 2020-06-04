# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: asgt/data/v1alpha1/create.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from vml_proto.asgt.type import retention_policy_pb2 as asgt_dot_type_dot_retention__policy__pb2
from vml_proto.asgt.type import sample_pb2 as asgt_dot_type_dot_sample__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='asgt/data/v1alpha1/create.proto',
  package='asgt.dataservice.v1alpha1',
  syntax='proto3',
  serialized_options=_b('Z\004data'),
  serialized_pb=_b('\n\x1f\x61sgt/data/v1alpha1/create.proto\x12\x19\x61sgt.dataservice.v1alpha1\x1a asgt/type/retention_policy.proto\x1a\x16\x61sgt/type/sample.proto\"\xa4\x01\n\rCreateRequest\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x0c\n\x04type\x18\x02 \x01(\t\x12\x0c\n\x04tags\x18\x03 \x03(\t\x12\x0f\n\x07targets\x18\x06 \x03(\t\x12\"\n\x07samples\x18\x04 \x03(\x0b\x32\x11.asgt.type.Sample\x12\x34\n\x10retention_policy\x18\x05 \x01(\x0b\x32\x1a.asgt.type.RetentionPolicy\"S\n\x11\x41ppendDataRequest\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x0c\n\x04type\x18\x02 \x01(\t\x12\"\n\x07samples\x18\x03 \x03(\x0b\x32\x11.asgt.type.SampleB\x06Z\x04\x64\x61tab\x06proto3')
  ,
  dependencies=[asgt_dot_type_dot_retention__policy__pb2.DESCRIPTOR,asgt_dot_type_dot_sample__pb2.DESCRIPTOR,])




_CREATEREQUEST = _descriptor.Descriptor(
  name='CreateRequest',
  full_name='asgt.dataservice.v1alpha1.CreateRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='asgt.dataservice.v1alpha1.CreateRequest.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='type', full_name='asgt.dataservice.v1alpha1.CreateRequest.type', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='tags', full_name='asgt.dataservice.v1alpha1.CreateRequest.tags', index=2,
      number=3, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='targets', full_name='asgt.dataservice.v1alpha1.CreateRequest.targets', index=3,
      number=6, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='samples', full_name='asgt.dataservice.v1alpha1.CreateRequest.samples', index=4,
      number=4, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='retention_policy', full_name='asgt.dataservice.v1alpha1.CreateRequest.retention_policy', index=5,
      number=5, type=11, cpp_type=10, label=1,
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
  serialized_start=121,
  serialized_end=285,
)


_APPENDDATAREQUEST = _descriptor.Descriptor(
  name='AppendDataRequest',
  full_name='asgt.dataservice.v1alpha1.AppendDataRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='asgt.dataservice.v1alpha1.AppendDataRequest.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='type', full_name='asgt.dataservice.v1alpha1.AppendDataRequest.type', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='samples', full_name='asgt.dataservice.v1alpha1.AppendDataRequest.samples', index=2,
      number=3, type=11, cpp_type=10, label=3,
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
  serialized_start=287,
  serialized_end=370,
)

_CREATEREQUEST.fields_by_name['samples'].message_type = asgt_dot_type_dot_sample__pb2._SAMPLE
_CREATEREQUEST.fields_by_name['retention_policy'].message_type = asgt_dot_type_dot_retention__policy__pb2._RETENTIONPOLICY
_APPENDDATAREQUEST.fields_by_name['samples'].message_type = asgt_dot_type_dot_sample__pb2._SAMPLE
DESCRIPTOR.message_types_by_name['CreateRequest'] = _CREATEREQUEST
DESCRIPTOR.message_types_by_name['AppendDataRequest'] = _APPENDDATAREQUEST
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

CreateRequest = _reflection.GeneratedProtocolMessageType('CreateRequest', (_message.Message,), dict(
  DESCRIPTOR = _CREATEREQUEST,
  __module__ = 'asgt.data.v1alpha1.create_pb2'
  # @@protoc_insertion_point(class_scope:asgt.dataservice.v1alpha1.CreateRequest)
  ))
_sym_db.RegisterMessage(CreateRequest)

AppendDataRequest = _reflection.GeneratedProtocolMessageType('AppendDataRequest', (_message.Message,), dict(
  DESCRIPTOR = _APPENDDATAREQUEST,
  __module__ = 'asgt.data.v1alpha1.create_pb2'
  # @@protoc_insertion_point(class_scope:asgt.dataservice.v1alpha1.AppendDataRequest)
  ))
_sym_db.RegisterMessage(AppendDataRequest)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
