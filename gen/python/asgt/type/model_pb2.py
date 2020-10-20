# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: asgt/type/model.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from vml_proto.asgt.type import target_metrics_pb2 as asgt_dot_type_dot_target__metrics__pb2
from vml_proto.gen_bq_schema import bq_field_pb2 as gen__bq__schema_dot_bq__field__pb2
from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='asgt/type/model.proto',
  package='asgt.type',
  syntax='proto3',
  serialized_options=_b('Z6github.com/e-conomic/vmlapis/gen/go/asgt/type;asgttype'),
  serialized_pb=_b('\n\x15\x61sgt/type/model.proto\x12\tasgt.type\x1a\x1e\x61sgt/type/target_metrics.proto\x1a\x1cgen_bq_schema/bq_field.proto\x1a\x1fgoogle/protobuf/timestamp.proto\"\xa4\x02\n\x05Model\x12\x16\n\x07version\x18\x03 \x01(\x03\x42\x05\xea?\x02\x08\x01\x12.\n\ncreated_at\x18\x04 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12\x1b\n\x0c\x64\x61taset_size\x18\x05 \x01(\x05\x42\x05\xea?\x02\x18\x01\x12\x1c\n\rtraining_size\x18\x06 \x01(\x05\x42\x05\xea?\x02\x18\x01\x12:\n\x11\x63onfidence_scores\x18\x07 \x03(\x0b\x32\x18.asgt.type.TargetMetricsB\x05\xea?\x02\x18\x01\x12.\n\ninput_type\x18\x08 \x01(\x0e\x32\x1a.asgt.type.Model.InputType\"&\n\tInputType\x12\x0c\n\x08\x45XAMPLES\x10\x00\x12\x0b\n\x07TENSORS\x10\x01J\x04\x08\x01\x10\x03\x42\x38Z6github.com/e-conomic/vmlapis/gen/go/asgt/type;asgttypeb\x06proto3')
  ,
  dependencies=[asgt_dot_type_dot_target__metrics__pb2.DESCRIPTOR,gen__bq__schema_dot_bq__field__pb2.DESCRIPTOR,google_dot_protobuf_dot_timestamp__pb2.DESCRIPTOR,])



_MODEL_INPUTTYPE = _descriptor.EnumDescriptor(
  name='InputType',
  full_name='asgt.type.Model.InputType',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='EXAMPLES', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='TENSORS', index=1, number=1,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=380,
  serialized_end=418,
)
_sym_db.RegisterEnumDescriptor(_MODEL_INPUTTYPE)


_MODEL = _descriptor.Descriptor(
  name='Model',
  full_name='asgt.type.Model',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='version', full_name='asgt.type.Model.version', index=0,
      number=3, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\352?\002\010\001'), file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='created_at', full_name='asgt.type.Model.created_at', index=1,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='dataset_size', full_name='asgt.type.Model.dataset_size', index=2,
      number=5, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\352?\002\030\001'), file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='training_size', full_name='asgt.type.Model.training_size', index=3,
      number=6, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\352?\002\030\001'), file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='confidence_scores', full_name='asgt.type.Model.confidence_scores', index=4,
      number=7, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\352?\002\030\001'), file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='input_type', full_name='asgt.type.Model.input_type', index=5,
      number=8, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
    _MODEL_INPUTTYPE,
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=132,
  serialized_end=424,
)

_MODEL.fields_by_name['created_at'].message_type = google_dot_protobuf_dot_timestamp__pb2._TIMESTAMP
_MODEL.fields_by_name['confidence_scores'].message_type = asgt_dot_type_dot_target__metrics__pb2._TARGETMETRICS
_MODEL.fields_by_name['input_type'].enum_type = _MODEL_INPUTTYPE
_MODEL_INPUTTYPE.containing_type = _MODEL
DESCRIPTOR.message_types_by_name['Model'] = _MODEL
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Model = _reflection.GeneratedProtocolMessageType('Model', (_message.Message,), dict(
  DESCRIPTOR = _MODEL,
  __module__ = 'asgt.type.model_pb2'
  # @@protoc_insertion_point(class_scope:asgt.type.Model)
  ))
_sym_db.RegisterMessage(Model)


DESCRIPTOR._options = None
_MODEL.fields_by_name['version']._options = None
_MODEL.fields_by_name['dataset_size']._options = None
_MODEL.fields_by_name['training_size']._options = None
_MODEL.fields_by_name['confidence_scores']._options = None
# @@protoc_insertion_point(module_scope)
