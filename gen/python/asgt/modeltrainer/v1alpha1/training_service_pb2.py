# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: asgt/modeltrainer/v1alpha1/training_service.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from vml_proto.asgt.modeltrainer.v1alpha1 import training_task_pb2 as asgt_dot_modeltrainer_dot_v1alpha1_dot_training__task__pb2
from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='asgt/modeltrainer/v1alpha1/training_service.proto',
  package='asgt.modeltrainer.v1alpha1',
  syntax='proto3',
  serialized_options=_b('Z\014modeltrainer'),
  serialized_pb=_b('\n1asgt/modeltrainer/v1alpha1/training_service.proto\x12\x1a\x61sgt.modeltrainer.v1alpha1\x1a.asgt/modeltrainer/v1alpha1/training_task.proto\x1a\x1bgoogle/protobuf/empty.proto\"O\n\x11TrainModelRequest\x12\x10\n\x08\x63onsumer\x18\x01 \x01(\t\x12\x12\n\nmodel_type\x18\x02 \x01(\t\x12\x14\n\x0c\x64\x61taset_name\x18\x03 \x01(\t\"\x15\n\x13RunSchedulerRequest\"P\n\x14SetTaskStatusRequest\x12\x38\n\x04task\x18\x01 \x01(\x0b\x32*.asgt.modeltrainer.v1alpha1.TrainModelTask2\x9a\x02\n\x0fTrainingService\x12S\n\nTrainModel\x12-.asgt.modeltrainer.v1alpha1.TrainModelRequest\x1a\x16.google.protobuf.Empty\x12W\n\x0cRunScheduler\x12/.asgt.modeltrainer.v1alpha1.RunSchedulerRequest\x1a\x16.google.protobuf.Empty\x12Y\n\rSetTaskStatus\x12\x30.asgt.modeltrainer.v1alpha1.SetTaskStatusRequest\x1a\x16.google.protobuf.EmptyB\x0eZ\x0cmodeltrainerb\x06proto3')
  ,
  dependencies=[asgt_dot_modeltrainer_dot_v1alpha1_dot_training__task__pb2.DESCRIPTOR,google_dot_protobuf_dot_empty__pb2.DESCRIPTOR,])




_TRAINMODELREQUEST = _descriptor.Descriptor(
  name='TrainModelRequest',
  full_name='asgt.modeltrainer.v1alpha1.TrainModelRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='consumer', full_name='asgt.modeltrainer.v1alpha1.TrainModelRequest.consumer', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='model_type', full_name='asgt.modeltrainer.v1alpha1.TrainModelRequest.model_type', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='dataset_name', full_name='asgt.modeltrainer.v1alpha1.TrainModelRequest.dataset_name', index=2,
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
  serialized_start=158,
  serialized_end=237,
)


_RUNSCHEDULERREQUEST = _descriptor.Descriptor(
  name='RunSchedulerRequest',
  full_name='asgt.modeltrainer.v1alpha1.RunSchedulerRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
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
  serialized_start=239,
  serialized_end=260,
)


_SETTASKSTATUSREQUEST = _descriptor.Descriptor(
  name='SetTaskStatusRequest',
  full_name='asgt.modeltrainer.v1alpha1.SetTaskStatusRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='task', full_name='asgt.modeltrainer.v1alpha1.SetTaskStatusRequest.task', index=0,
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
  serialized_start=262,
  serialized_end=342,
)

_SETTASKSTATUSREQUEST.fields_by_name['task'].message_type = asgt_dot_modeltrainer_dot_v1alpha1_dot_training__task__pb2._TRAINMODELTASK
DESCRIPTOR.message_types_by_name['TrainModelRequest'] = _TRAINMODELREQUEST
DESCRIPTOR.message_types_by_name['RunSchedulerRequest'] = _RUNSCHEDULERREQUEST
DESCRIPTOR.message_types_by_name['SetTaskStatusRequest'] = _SETTASKSTATUSREQUEST
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

TrainModelRequest = _reflection.GeneratedProtocolMessageType('TrainModelRequest', (_message.Message,), dict(
  DESCRIPTOR = _TRAINMODELREQUEST,
  __module__ = 'asgt.modeltrainer.v1alpha1.training_service_pb2'
  # @@protoc_insertion_point(class_scope:asgt.modeltrainer.v1alpha1.TrainModelRequest)
  ))
_sym_db.RegisterMessage(TrainModelRequest)

RunSchedulerRequest = _reflection.GeneratedProtocolMessageType('RunSchedulerRequest', (_message.Message,), dict(
  DESCRIPTOR = _RUNSCHEDULERREQUEST,
  __module__ = 'asgt.modeltrainer.v1alpha1.training_service_pb2'
  # @@protoc_insertion_point(class_scope:asgt.modeltrainer.v1alpha1.RunSchedulerRequest)
  ))
_sym_db.RegisterMessage(RunSchedulerRequest)

SetTaskStatusRequest = _reflection.GeneratedProtocolMessageType('SetTaskStatusRequest', (_message.Message,), dict(
  DESCRIPTOR = _SETTASKSTATUSREQUEST,
  __module__ = 'asgt.modeltrainer.v1alpha1.training_service_pb2'
  # @@protoc_insertion_point(class_scope:asgt.modeltrainer.v1alpha1.SetTaskStatusRequest)
  ))
_sym_db.RegisterMessage(SetTaskStatusRequest)


DESCRIPTOR._options = None

_TRAININGSERVICE = _descriptor.ServiceDescriptor(
  name='TrainingService',
  full_name='asgt.modeltrainer.v1alpha1.TrainingService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=345,
  serialized_end=627,
  methods=[
  _descriptor.MethodDescriptor(
    name='TrainModel',
    full_name='asgt.modeltrainer.v1alpha1.TrainingService.TrainModel',
    index=0,
    containing_service=None,
    input_type=_TRAINMODELREQUEST,
    output_type=google_dot_protobuf_dot_empty__pb2._EMPTY,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='RunScheduler',
    full_name='asgt.modeltrainer.v1alpha1.TrainingService.RunScheduler',
    index=1,
    containing_service=None,
    input_type=_RUNSCHEDULERREQUEST,
    output_type=google_dot_protobuf_dot_empty__pb2._EMPTY,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='SetTaskStatus',
    full_name='asgt.modeltrainer.v1alpha1.TrainingService.SetTaskStatus',
    index=2,
    containing_service=None,
    input_type=_SETTASKSTATUSREQUEST,
    output_type=google_dot_protobuf_dot_empty__pb2._EMPTY,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_TRAININGSERVICE)

DESCRIPTOR.services_by_name['TrainingService'] = _TRAININGSERVICE

# @@protoc_insertion_point(module_scope)
