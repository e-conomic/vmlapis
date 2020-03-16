# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: asgt/modelregistry/v1alpha1/modelregistry.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='asgt/modelregistry/v1alpha1/modelregistry.proto',
  package='asgt.modelregistry.v1alpha1',
  syntax='proto3',
  serialized_options=_b('Z\rmodelregistry'),
  serialized_pb=_b('\n/asgt/modelregistry/v1alpha1/modelregistry.proto\x12\x1b\x61sgt.modelregistry.v1alpha1\x1a\x1bgoogle/protobuf/empty.proto\"<\n\x14RegisterModelRequest\x12\x12\n\nmodel_type\x18\x01 \x01(\t\x12\x10\n\x08model_id\x18\x02 \x01(\t\"+\n\x15RegisterModelResponse\x12\x12\n\nshard_name\x18\x01 \x01(\t\"N\n\x12\x44\x65leteModelRequest\x12\x12\n\nshard_name\x18\x01 \x01(\t\x12\x12\n\nmodel_type\x18\x02 \x01(\t\x12\x10\n\x08model_id\x18\x03 \x01(\t\"P\n\x12LocateModelRequest\x12\x10\n\x08\x63onsumer\x18\x01 \x01(\t\x12\x14\n\x0c\x64\x61taset_name\x18\x02 \x01(\t\x12\x12\n\nmodel_type\x18\x03 \x01(\t\"\x9a\x01\n\x13LocateModelResponse\x12M\n\x06latest\x18\x01 \x01(\x0b\x32=.asgt.modelregistry.v1alpha1.LocateModelResponse.LocationInfo\x1a\x34\n\x0cLocationInfo\x12\x12\n\nshard_name\x18\x01 \x01(\t\x12\x10\n\x08model_id\x18\x02 \x01(\t2\xd1\x02\n\rModelRegistry\x12v\n\rRegisterModel\x12\x31.asgt.modelregistry.v1alpha1.RegisterModelRequest\x1a\x32.asgt.modelregistry.v1alpha1.RegisterModelResponse\x12V\n\x0b\x44\x65leteModel\x12/.asgt.modelregistry.v1alpha1.DeleteModelRequest\x1a\x16.google.protobuf.Empty\x12p\n\x0bLocateModel\x12/.asgt.modelregistry.v1alpha1.LocateModelRequest\x1a\x30.asgt.modelregistry.v1alpha1.LocateModelResponseB\x0fZ\rmodelregistryb\x06proto3')
  ,
  dependencies=[google_dot_protobuf_dot_empty__pb2.DESCRIPTOR,])




_REGISTERMODELREQUEST = _descriptor.Descriptor(
  name='RegisterModelRequest',
  full_name='asgt.modelregistry.v1alpha1.RegisterModelRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='model_type', full_name='asgt.modelregistry.v1alpha1.RegisterModelRequest.model_type', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='model_id', full_name='asgt.modelregistry.v1alpha1.RegisterModelRequest.model_id', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
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
  serialized_start=109,
  serialized_end=169,
)


_REGISTERMODELRESPONSE = _descriptor.Descriptor(
  name='RegisterModelResponse',
  full_name='asgt.modelregistry.v1alpha1.RegisterModelResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='shard_name', full_name='asgt.modelregistry.v1alpha1.RegisterModelResponse.shard_name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
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
  serialized_start=171,
  serialized_end=214,
)


_DELETEMODELREQUEST = _descriptor.Descriptor(
  name='DeleteModelRequest',
  full_name='asgt.modelregistry.v1alpha1.DeleteModelRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='shard_name', full_name='asgt.modelregistry.v1alpha1.DeleteModelRequest.shard_name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='model_type', full_name='asgt.modelregistry.v1alpha1.DeleteModelRequest.model_type', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='model_id', full_name='asgt.modelregistry.v1alpha1.DeleteModelRequest.model_id', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
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
  serialized_start=216,
  serialized_end=294,
)


_LOCATEMODELREQUEST = _descriptor.Descriptor(
  name='LocateModelRequest',
  full_name='asgt.modelregistry.v1alpha1.LocateModelRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='consumer', full_name='asgt.modelregistry.v1alpha1.LocateModelRequest.consumer', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='dataset_name', full_name='asgt.modelregistry.v1alpha1.LocateModelRequest.dataset_name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='model_type', full_name='asgt.modelregistry.v1alpha1.LocateModelRequest.model_type', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
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
  serialized_start=296,
  serialized_end=376,
)


_LOCATEMODELRESPONSE_LOCATIONINFO = _descriptor.Descriptor(
  name='LocationInfo',
  full_name='asgt.modelregistry.v1alpha1.LocateModelResponse.LocationInfo',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='shard_name', full_name='asgt.modelregistry.v1alpha1.LocateModelResponse.LocationInfo.shard_name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='model_id', full_name='asgt.modelregistry.v1alpha1.LocateModelResponse.LocationInfo.model_id', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
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
  serialized_start=481,
  serialized_end=533,
)

_LOCATEMODELRESPONSE = _descriptor.Descriptor(
  name='LocateModelResponse',
  full_name='asgt.modelregistry.v1alpha1.LocateModelResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='latest', full_name='asgt.modelregistry.v1alpha1.LocateModelResponse.latest', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_LOCATEMODELRESPONSE_LOCATIONINFO, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=379,
  serialized_end=533,
)

_LOCATEMODELRESPONSE_LOCATIONINFO.containing_type = _LOCATEMODELRESPONSE
_LOCATEMODELRESPONSE.fields_by_name['latest'].message_type = _LOCATEMODELRESPONSE_LOCATIONINFO
DESCRIPTOR.message_types_by_name['RegisterModelRequest'] = _REGISTERMODELREQUEST
DESCRIPTOR.message_types_by_name['RegisterModelResponse'] = _REGISTERMODELRESPONSE
DESCRIPTOR.message_types_by_name['DeleteModelRequest'] = _DELETEMODELREQUEST
DESCRIPTOR.message_types_by_name['LocateModelRequest'] = _LOCATEMODELREQUEST
DESCRIPTOR.message_types_by_name['LocateModelResponse'] = _LOCATEMODELRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

RegisterModelRequest = _reflection.GeneratedProtocolMessageType('RegisterModelRequest', (_message.Message,), dict(
  DESCRIPTOR = _REGISTERMODELREQUEST,
  __module__ = 'asgt.modelregistry.v1alpha1.modelregistry_pb2'
  # @@protoc_insertion_point(class_scope:asgt.modelregistry.v1alpha1.RegisterModelRequest)
  ))
_sym_db.RegisterMessage(RegisterModelRequest)

RegisterModelResponse = _reflection.GeneratedProtocolMessageType('RegisterModelResponse', (_message.Message,), dict(
  DESCRIPTOR = _REGISTERMODELRESPONSE,
  __module__ = 'asgt.modelregistry.v1alpha1.modelregistry_pb2'
  # @@protoc_insertion_point(class_scope:asgt.modelregistry.v1alpha1.RegisterModelResponse)
  ))
_sym_db.RegisterMessage(RegisterModelResponse)

DeleteModelRequest = _reflection.GeneratedProtocolMessageType('DeleteModelRequest', (_message.Message,), dict(
  DESCRIPTOR = _DELETEMODELREQUEST,
  __module__ = 'asgt.modelregistry.v1alpha1.modelregistry_pb2'
  # @@protoc_insertion_point(class_scope:asgt.modelregistry.v1alpha1.DeleteModelRequest)
  ))
_sym_db.RegisterMessage(DeleteModelRequest)

LocateModelRequest = _reflection.GeneratedProtocolMessageType('LocateModelRequest', (_message.Message,), dict(
  DESCRIPTOR = _LOCATEMODELREQUEST,
  __module__ = 'asgt.modelregistry.v1alpha1.modelregistry_pb2'
  # @@protoc_insertion_point(class_scope:asgt.modelregistry.v1alpha1.LocateModelRequest)
  ))
_sym_db.RegisterMessage(LocateModelRequest)

LocateModelResponse = _reflection.GeneratedProtocolMessageType('LocateModelResponse', (_message.Message,), dict(

  LocationInfo = _reflection.GeneratedProtocolMessageType('LocationInfo', (_message.Message,), dict(
    DESCRIPTOR = _LOCATEMODELRESPONSE_LOCATIONINFO,
    __module__ = 'asgt.modelregistry.v1alpha1.modelregistry_pb2'
    # @@protoc_insertion_point(class_scope:asgt.modelregistry.v1alpha1.LocateModelResponse.LocationInfo)
    ))
  ,
  DESCRIPTOR = _LOCATEMODELRESPONSE,
  __module__ = 'asgt.modelregistry.v1alpha1.modelregistry_pb2'
  # @@protoc_insertion_point(class_scope:asgt.modelregistry.v1alpha1.LocateModelResponse)
  ))
_sym_db.RegisterMessage(LocateModelResponse)
_sym_db.RegisterMessage(LocateModelResponse.LocationInfo)


DESCRIPTOR._options = None

_MODELREGISTRY = _descriptor.ServiceDescriptor(
  name='ModelRegistry',
  full_name='asgt.modelregistry.v1alpha1.ModelRegistry',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=536,
  serialized_end=873,
  methods=[
  _descriptor.MethodDescriptor(
    name='RegisterModel',
    full_name='asgt.modelregistry.v1alpha1.ModelRegistry.RegisterModel',
    index=0,
    containing_service=None,
    input_type=_REGISTERMODELREQUEST,
    output_type=_REGISTERMODELRESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteModel',
    full_name='asgt.modelregistry.v1alpha1.ModelRegistry.DeleteModel',
    index=1,
    containing_service=None,
    input_type=_DELETEMODELREQUEST,
    output_type=google_dot_protobuf_dot_empty__pb2._EMPTY,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='LocateModel',
    full_name='asgt.modelregistry.v1alpha1.ModelRegistry.LocateModel',
    index=2,
    containing_service=None,
    input_type=_LOCATEMODELREQUEST,
    output_type=_LOCATEMODELRESPONSE,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_MODELREGISTRY)

DESCRIPTOR.services_by_name['ModelRegistry'] = _MODELREGISTRY

# @@protoc_insertion_point(module_scope)
