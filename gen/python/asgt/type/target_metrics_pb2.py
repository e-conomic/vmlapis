# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: asgt/type/target_metrics.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='asgt/type/target_metrics.proto',
  package='asgt.type',
  syntax='proto3',
  serialized_options=_b('Z6github.com/e-conomic/vmlapis/gen/go/asgt/type;asgttype'),
  serialized_pb=_b('\n\x1e\x61sgt/type/target_metrics.proto\x12\tasgt.type\"\x97\x01\n\rTargetMetrics\x12\x0e\n\x06target\x18\x01 \x01(\t\x12\x30\n\x07metrics\x18\x02 \x03(\x0b\x32\x1f.asgt.type.TargetMetrics.Metric\x1a\x44\n\x06Metric\x12\x11\n\tprecision\x18\x01 \x01(\x02\x12\x12\n\nconfidence\x18\x02 \x01(\x02\x12\x13\n\x0b\x61nswer_rate\x18\x03 \x01(\x02\x42\x38Z6github.com/e-conomic/vmlapis/gen/go/asgt/type;asgttypeb\x06proto3')
)




_TARGETMETRICS_METRIC = _descriptor.Descriptor(
  name='Metric',
  full_name='asgt.type.TargetMetrics.Metric',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='precision', full_name='asgt.type.TargetMetrics.Metric.precision', index=0,
      number=1, type=2, cpp_type=6, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='confidence', full_name='asgt.type.TargetMetrics.Metric.confidence', index=1,
      number=2, type=2, cpp_type=6, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='answer_rate', full_name='asgt.type.TargetMetrics.Metric.answer_rate', index=2,
      number=3, type=2, cpp_type=6, label=1,
      has_default_value=False, default_value=float(0),
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
  serialized_start=129,
  serialized_end=197,
)

_TARGETMETRICS = _descriptor.Descriptor(
  name='TargetMetrics',
  full_name='asgt.type.TargetMetrics',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='target', full_name='asgt.type.TargetMetrics.target', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='metrics', full_name='asgt.type.TargetMetrics.metrics', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_TARGETMETRICS_METRIC, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=46,
  serialized_end=197,
)

_TARGETMETRICS_METRIC.containing_type = _TARGETMETRICS
_TARGETMETRICS.fields_by_name['metrics'].message_type = _TARGETMETRICS_METRIC
DESCRIPTOR.message_types_by_name['TargetMetrics'] = _TARGETMETRICS
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

TargetMetrics = _reflection.GeneratedProtocolMessageType('TargetMetrics', (_message.Message,), dict(

  Metric = _reflection.GeneratedProtocolMessageType('Metric', (_message.Message,), dict(
    DESCRIPTOR = _TARGETMETRICS_METRIC,
    __module__ = 'asgt.type.target_metrics_pb2'
    # @@protoc_insertion_point(class_scope:asgt.type.TargetMetrics.Metric)
    ))
  ,
  DESCRIPTOR = _TARGETMETRICS,
  __module__ = 'asgt.type.target_metrics_pb2'
  # @@protoc_insertion_point(class_scope:asgt.type.TargetMetrics)
  ))
_sym_db.RegisterMessage(TargetMetrics)
_sym_db.RegisterMessage(TargetMetrics.Metric)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
