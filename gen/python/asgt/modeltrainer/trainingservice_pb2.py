# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: asgt/modeltrainer/trainingservice.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='asgt/modeltrainer/trainingservice.proto',
  package='asgt.trainingservice.v1alpha1',
  syntax='proto3',
  serialized_options=_b('Z\017trainingservice'),
  serialized_pb=_b('\n\'asgt/modeltrainer/trainingservice.proto\x12\x1d\x61sgt.trainingservice.v1alpha1\"o\n\x11TrainModelRequest\x12\x12\n\nmodel_type\x18\x01 \x01(\t\x12\x10\n\x08\x63onsumer\x18\x02 \x01(\t\x12\x0f\n\x07\x64\x61taset\x18\x03 \x01(\t\x12\x11\n\timage_tag\x18\x04 \x01(\t\x12\x10\n\x08run_name\x18\x05 \x01(\t\"*\n\x12TrainModelResponse\x12\x14\n\x0cversion_name\x18\x01 \x01(\t2\x84\x01\n\x0fTrainingService\x12q\n\nTrainModel\x12\x30.asgt.trainingservice.v1alpha1.TrainModelRequest\x1a\x31.asgt.trainingservice.v1alpha1.TrainModelResponseB\x11Z\x0ftrainingserviceb\x06proto3')
)




_TRAINMODELREQUEST = _descriptor.Descriptor(
  name='TrainModelRequest',
  full_name='asgt.trainingservice.v1alpha1.TrainModelRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='model_type', full_name='asgt.trainingservice.v1alpha1.TrainModelRequest.model_type', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='consumer', full_name='asgt.trainingservice.v1alpha1.TrainModelRequest.consumer', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='dataset', full_name='asgt.trainingservice.v1alpha1.TrainModelRequest.dataset', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='image_tag', full_name='asgt.trainingservice.v1alpha1.TrainModelRequest.image_tag', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='run_name', full_name='asgt.trainingservice.v1alpha1.TrainModelRequest.run_name', index=4,
      number=5, type=9, cpp_type=9, label=1,
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
  serialized_start=74,
  serialized_end=185,
)


_TRAINMODELRESPONSE = _descriptor.Descriptor(
  name='TrainModelResponse',
  full_name='asgt.trainingservice.v1alpha1.TrainModelResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='version_name', full_name='asgt.trainingservice.v1alpha1.TrainModelResponse.version_name', index=0,
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
  serialized_start=187,
  serialized_end=229,
)

DESCRIPTOR.message_types_by_name['TrainModelRequest'] = _TRAINMODELREQUEST
DESCRIPTOR.message_types_by_name['TrainModelResponse'] = _TRAINMODELRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

TrainModelRequest = _reflection.GeneratedProtocolMessageType('TrainModelRequest', (_message.Message,), dict(
  DESCRIPTOR = _TRAINMODELREQUEST,
  __module__ = 'asgt.modeltrainer.trainingservice_pb2'
  # @@protoc_insertion_point(class_scope:asgt.trainingservice.v1alpha1.TrainModelRequest)
  ))
_sym_db.RegisterMessage(TrainModelRequest)

TrainModelResponse = _reflection.GeneratedProtocolMessageType('TrainModelResponse', (_message.Message,), dict(
  DESCRIPTOR = _TRAINMODELRESPONSE,
  __module__ = 'asgt.modeltrainer.trainingservice_pb2'
  # @@protoc_insertion_point(class_scope:asgt.trainingservice.v1alpha1.TrainModelResponse)
  ))
_sym_db.RegisterMessage(TrainModelResponse)


DESCRIPTOR._options = None

_TRAININGSERVICE = _descriptor.ServiceDescriptor(
  name='TrainingService',
  full_name='asgt.trainingservice.v1alpha1.TrainingService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=232,
  serialized_end=364,
  methods=[
  _descriptor.MethodDescriptor(
    name='TrainModel',
    full_name='asgt.trainingservice.v1alpha1.TrainingService.TrainModel',
    index=0,
    containing_service=None,
    input_type=_TRAINMODELREQUEST,
    output_type=_TRAINMODELRESPONSE,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_TRAININGSERVICE)

DESCRIPTOR.services_by_name['TrainingService'] = _TRAININGSERVICE

# @@protoc_insertion_point(module_scope)
