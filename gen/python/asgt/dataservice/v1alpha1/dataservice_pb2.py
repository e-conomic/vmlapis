# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: asgt/dataservice/v1alpha1/dataservice.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from asgt.jester.v1alpha1 import jester_pb2 as asgt_dot_jester_dot_v1alpha1_dot_jester__pb2
from gen_bq_schema import bq_field_pb2 as gen__bq__schema_dot_bq__field__pb2
from gen_bq_schema import bq_table_pb2 as gen__bq__schema_dot_bq__table__pb2
from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2
from google.protobuf import wrappers_pb2 as google_dot_protobuf_dot_wrappers__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='asgt/dataservice/v1alpha1/dataservice.proto',
  package='asgt.dataservice.v1alpha1',
  syntax='proto3',
  serialized_options=_b('Z\013dataservice'),
  serialized_pb=_b('\n+asgt/dataservice/v1alpha1/dataservice.proto\x12\x19\x61sgt.dataservice.v1alpha1\x1a!asgt/jester/v1alpha1/jester.proto\x1a\x1cgen_bq_schema/bq_field.proto\x1a\x1cgen_bq_schema/bq_table.proto\x1a\x1cgoogle/api/annotations.proto\x1a\x1bgoogle/protobuf/empty.proto\x1a\x1egoogle/protobuf/wrappers.proto\"\xf7\x05\n\x05\x45ntry\x12;\n\x02id\x18\x01 \x01(\tB/\xea?\'\"%Feedback ID, same as Envoy request id\xea?\x02\x08\x01\x12\x17\n\x08\x63onsumer\x18\x02 \x01(\tB\x05\xea?\x02\x08\x01\x12\x13\n\x04user\x18\x03 \x01(\tB\x05\xea?\x02\x08\x01\x12T\n\x04tags\x18\x04 \x03(\tBF\xea?C\"ATags defined by consumer, enriched by service if valetkey is used\x12:\n\x05input\x18\x05 \x03(\x0b\x32+.asgt.dataservice.v1alpha1.Entry.InputEntry\x12\x45\n\x0btrue_values\x18\x06 \x03(\x0b\x32\x30.asgt.dataservice.v1alpha1.Entry.TrueValuesEntry\x12Q\n\x11prediction_values\x18\x07 \x03(\x0b\x32\x36.asgt.dataservice.v1alpha1.Entry.PredictionValuesEntry\x12\'\n\rfeedback_time\x18\x08 \x01(\x04\x42\x10\xea?\r\x08\x01\x12\tTIMESTAMP\x1aV\n\nInputEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\x37\n\x05value\x18\x02 \x01(\x0b\x32(.asgt.dataservice.v1alpha1.FeedbackValue:\x02\x38\x01\x1a[\n\x0fTrueValuesEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\x37\n\x05value\x18\x02 \x01(\x0b\x32(.asgt.dataservice.v1alpha1.FeedbackValue:\x02\x38\x01\x1a\x65\n\x15PredictionValuesEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12;\n\x05value\x18\x02 \x01(\x0b\x32,.asgt.dataservice.v1alpha1.FeedbackValueList:\x02\x38\x01:\x12\xea?\x0f\n\rtraining_data\"\x81\x01\n\rFeedbackValue\x12\x19\n\x0f\x66\x65\x65\x64\x62\x61\x63k_string\x18\x01 \x01(\tH\x00\x12\x16\n\x0c\x66\x65\x65\x64\x62\x61\x63k_int\x18\x02 \x01(\x05H\x00\x12\x35\n\x0e\x66\x65\x65\x64\x62\x61\x63k_float\x18\x03 \x01(\x0b\x32\x1b.google.protobuf.FloatValueH\x00\x42\x06\n\x04type\"M\n\x11\x46\x65\x65\x64\x62\x61\x63kValueList\x12\x38\n\x06values\x18\x01 \x03(\x0b\x32(.asgt.dataservice.v1alpha1.FeedbackValue\"\xf5\x02\n\x16PrepareFeedbackRequest\x12\n\n\x02id\x18\x01 \x01(\t\x12\x0c\n\x04user\x18\x02 \x01(\t\x12R\n\x15scanned_invoice_input\x18\x03 \x01(\x0b\x32\x31.asgt.jester.v1alpha1.ScannedInvoiceRequest.InputH\x00\x12`\n\x1d\x65lectronic_invoice_line_input\x18\x04 \x01(\x0b\x32\x37.asgt.jester.v1alpha1.ElectronicInvoicLineRequest.InputH\x00\x12=\n\nbank_input\x18\x05 \x01(\x0b\x32\'.asgt.jester.v1alpha1.BankRequest.InputH\x00\x12\x35\n\x0bpredictions\x18\x06 \x03(\x0b\x32 .asgt.jester.v1alpha1.Prediction\x12\x0c\n\x04tags\x18\x07 \x03(\tB\x07\n\x05input\"\xd9\x01\n\x0f\x46\x65\x65\x64\x62\x61\x63kRequest\x12\n\n\x02id\x18\x01 \x01(\t\x12\x0c\n\x04tags\x18\x02 \x03(\t\x12O\n\x0btrue_values\x18\x03 \x03(\x0b\x32:.asgt.dataservice.v1alpha1.FeedbackRequest.TrueValuesEntry\x1a[\n\x0fTrueValuesEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\x37\n\x05value\x18\x02 \x01(\x0b\x32(.asgt.dataservice.v1alpha1.FeedbackValue:\x02\x38\x01\"\x1d\n\rDeleteRequest\x12\x0c\n\x04tags\x18\x01 \x03(\t2\xd3\x02\n\x0b\x44\x61taService\x12\\\n\x0fPrepareFeedback\x12\x31.asgt.dataservice.v1alpha1.PrepareFeedbackRequest\x1a\x16.google.protobuf.Empty\x12t\n\x08\x46\x65\x65\x64\x62\x61\x63k\x12*.asgt.dataservice.v1alpha1.FeedbackRequest\x1a\x16.google.protobuf.Empty\"$\x82\xd3\xe4\x93\x02\x1e\"\x19/v1alpha1/feedback:create:\x01*\x12p\n\x06\x44\x65lete\x12(.asgt.dataservice.v1alpha1.DeleteRequest\x1a\x16.google.protobuf.Empty\"$\x82\xd3\xe4\x93\x02\x1e\"\x19/v1alpha1/feedback:delete:\x01*B\rZ\x0b\x64\x61taserviceb\x06proto3')
  ,
  dependencies=[asgt_dot_jester_dot_v1alpha1_dot_jester__pb2.DESCRIPTOR,gen__bq__schema_dot_bq__field__pb2.DESCRIPTOR,gen__bq__schema_dot_bq__table__pb2.DESCRIPTOR,google_dot_api_dot_annotations__pb2.DESCRIPTOR,google_dot_protobuf_dot_empty__pb2.DESCRIPTOR,google_dot_protobuf_dot_wrappers__pb2.DESCRIPTOR,])




_ENTRY_INPUTENTRY = _descriptor.Descriptor(
  name='InputEntry',
  full_name='asgt.dataservice.v1alpha1.Entry.InputEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='asgt.dataservice.v1alpha1.Entry.InputEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='value', full_name='asgt.dataservice.v1alpha1.Entry.InputEntry.value', index=1,
      number=2, type=11, cpp_type=10, label=1,
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
  serialized_options=_b('8\001'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=718,
  serialized_end=804,
)

_ENTRY_TRUEVALUESENTRY = _descriptor.Descriptor(
  name='TrueValuesEntry',
  full_name='asgt.dataservice.v1alpha1.Entry.TrueValuesEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='asgt.dataservice.v1alpha1.Entry.TrueValuesEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='value', full_name='asgt.dataservice.v1alpha1.Entry.TrueValuesEntry.value', index=1,
      number=2, type=11, cpp_type=10, label=1,
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
  serialized_options=_b('8\001'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=806,
  serialized_end=897,
)

_ENTRY_PREDICTIONVALUESENTRY = _descriptor.Descriptor(
  name='PredictionValuesEntry',
  full_name='asgt.dataservice.v1alpha1.Entry.PredictionValuesEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='asgt.dataservice.v1alpha1.Entry.PredictionValuesEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='value', full_name='asgt.dataservice.v1alpha1.Entry.PredictionValuesEntry.value', index=1,
      number=2, type=11, cpp_type=10, label=1,
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
  serialized_options=_b('8\001'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=899,
  serialized_end=1000,
)

_ENTRY = _descriptor.Descriptor(
  name='Entry',
  full_name='asgt.dataservice.v1alpha1.Entry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='asgt.dataservice.v1alpha1.Entry.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\352?\'\"%Feedback ID, same as Envoy request id\352?\002\010\001'), file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='consumer', full_name='asgt.dataservice.v1alpha1.Entry.consumer', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\352?\002\010\001'), file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='user', full_name='asgt.dataservice.v1alpha1.Entry.user', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\352?\002\010\001'), file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='tags', full_name='asgt.dataservice.v1alpha1.Entry.tags', index=3,
      number=4, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\352?C\"ATags defined by consumer, enriched by service if valetkey is used'), file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='input', full_name='asgt.dataservice.v1alpha1.Entry.input', index=4,
      number=5, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='true_values', full_name='asgt.dataservice.v1alpha1.Entry.true_values', index=5,
      number=6, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='prediction_values', full_name='asgt.dataservice.v1alpha1.Entry.prediction_values', index=6,
      number=7, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='feedback_time', full_name='asgt.dataservice.v1alpha1.Entry.feedback_time', index=7,
      number=8, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\352?\r\010\001\022\tTIMESTAMP'), file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_ENTRY_INPUTENTRY, _ENTRY_TRUEVALUESENTRY, _ENTRY_PREDICTIONVALUESENTRY, ],
  enum_types=[
  ],
  serialized_options=_b('\352?\017\n\rtraining_data'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=261,
  serialized_end=1020,
)


_FEEDBACKVALUE = _descriptor.Descriptor(
  name='FeedbackValue',
  full_name='asgt.dataservice.v1alpha1.FeedbackValue',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='feedback_string', full_name='asgt.dataservice.v1alpha1.FeedbackValue.feedback_string', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='feedback_int', full_name='asgt.dataservice.v1alpha1.FeedbackValue.feedback_int', index=1,
      number=2, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='feedback_float', full_name='asgt.dataservice.v1alpha1.FeedbackValue.feedback_float', index=2,
      number=3, type=11, cpp_type=10, label=1,
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
    _descriptor.OneofDescriptor(
      name='type', full_name='asgt.dataservice.v1alpha1.FeedbackValue.type',
      index=0, containing_type=None, fields=[]),
  ],
  serialized_start=1023,
  serialized_end=1152,
)


_FEEDBACKVALUELIST = _descriptor.Descriptor(
  name='FeedbackValueList',
  full_name='asgt.dataservice.v1alpha1.FeedbackValueList',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='values', full_name='asgt.dataservice.v1alpha1.FeedbackValueList.values', index=0,
      number=1, type=11, cpp_type=10, label=3,
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
  serialized_start=1154,
  serialized_end=1231,
)


_PREPAREFEEDBACKREQUEST = _descriptor.Descriptor(
  name='PrepareFeedbackRequest',
  full_name='asgt.dataservice.v1alpha1.PrepareFeedbackRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='asgt.dataservice.v1alpha1.PrepareFeedbackRequest.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='user', full_name='asgt.dataservice.v1alpha1.PrepareFeedbackRequest.user', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='scanned_invoice_input', full_name='asgt.dataservice.v1alpha1.PrepareFeedbackRequest.scanned_invoice_input', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='electronic_invoice_line_input', full_name='asgt.dataservice.v1alpha1.PrepareFeedbackRequest.electronic_invoice_line_input', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='bank_input', full_name='asgt.dataservice.v1alpha1.PrepareFeedbackRequest.bank_input', index=4,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='predictions', full_name='asgt.dataservice.v1alpha1.PrepareFeedbackRequest.predictions', index=5,
      number=6, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='tags', full_name='asgt.dataservice.v1alpha1.PrepareFeedbackRequest.tags', index=6,
      number=7, type=9, cpp_type=9, label=3,
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
    _descriptor.OneofDescriptor(
      name='input', full_name='asgt.dataservice.v1alpha1.PrepareFeedbackRequest.input',
      index=0, containing_type=None, fields=[]),
  ],
  serialized_start=1234,
  serialized_end=1607,
)


_FEEDBACKREQUEST_TRUEVALUESENTRY = _descriptor.Descriptor(
  name='TrueValuesEntry',
  full_name='asgt.dataservice.v1alpha1.FeedbackRequest.TrueValuesEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='asgt.dataservice.v1alpha1.FeedbackRequest.TrueValuesEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='value', full_name='asgt.dataservice.v1alpha1.FeedbackRequest.TrueValuesEntry.value', index=1,
      number=2, type=11, cpp_type=10, label=1,
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
  serialized_options=_b('8\001'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=806,
  serialized_end=897,
)

_FEEDBACKREQUEST = _descriptor.Descriptor(
  name='FeedbackRequest',
  full_name='asgt.dataservice.v1alpha1.FeedbackRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='asgt.dataservice.v1alpha1.FeedbackRequest.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='tags', full_name='asgt.dataservice.v1alpha1.FeedbackRequest.tags', index=1,
      number=2, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='true_values', full_name='asgt.dataservice.v1alpha1.FeedbackRequest.true_values', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_FEEDBACKREQUEST_TRUEVALUESENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1610,
  serialized_end=1827,
)


_DELETEREQUEST = _descriptor.Descriptor(
  name='DeleteRequest',
  full_name='asgt.dataservice.v1alpha1.DeleteRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='tags', full_name='asgt.dataservice.v1alpha1.DeleteRequest.tags', index=0,
      number=1, type=9, cpp_type=9, label=3,
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
  serialized_start=1829,
  serialized_end=1858,
)

_ENTRY_INPUTENTRY.fields_by_name['value'].message_type = _FEEDBACKVALUE
_ENTRY_INPUTENTRY.containing_type = _ENTRY
_ENTRY_TRUEVALUESENTRY.fields_by_name['value'].message_type = _FEEDBACKVALUE
_ENTRY_TRUEVALUESENTRY.containing_type = _ENTRY
_ENTRY_PREDICTIONVALUESENTRY.fields_by_name['value'].message_type = _FEEDBACKVALUELIST
_ENTRY_PREDICTIONVALUESENTRY.containing_type = _ENTRY
_ENTRY.fields_by_name['input'].message_type = _ENTRY_INPUTENTRY
_ENTRY.fields_by_name['true_values'].message_type = _ENTRY_TRUEVALUESENTRY
_ENTRY.fields_by_name['prediction_values'].message_type = _ENTRY_PREDICTIONVALUESENTRY
_FEEDBACKVALUE.fields_by_name['feedback_float'].message_type = google_dot_protobuf_dot_wrappers__pb2._FLOATVALUE
_FEEDBACKVALUE.oneofs_by_name['type'].fields.append(
  _FEEDBACKVALUE.fields_by_name['feedback_string'])
_FEEDBACKVALUE.fields_by_name['feedback_string'].containing_oneof = _FEEDBACKVALUE.oneofs_by_name['type']
_FEEDBACKVALUE.oneofs_by_name['type'].fields.append(
  _FEEDBACKVALUE.fields_by_name['feedback_int'])
_FEEDBACKVALUE.fields_by_name['feedback_int'].containing_oneof = _FEEDBACKVALUE.oneofs_by_name['type']
_FEEDBACKVALUE.oneofs_by_name['type'].fields.append(
  _FEEDBACKVALUE.fields_by_name['feedback_float'])
_FEEDBACKVALUE.fields_by_name['feedback_float'].containing_oneof = _FEEDBACKVALUE.oneofs_by_name['type']
_FEEDBACKVALUELIST.fields_by_name['values'].message_type = _FEEDBACKVALUE
_PREPAREFEEDBACKREQUEST.fields_by_name['scanned_invoice_input'].message_type = asgt_dot_jester_dot_v1alpha1_dot_jester__pb2._SCANNEDINVOICEREQUEST_INPUT
_PREPAREFEEDBACKREQUEST.fields_by_name['electronic_invoice_line_input'].message_type = asgt_dot_jester_dot_v1alpha1_dot_jester__pb2._ELECTRONICINVOICLINEREQUEST_INPUT
_PREPAREFEEDBACKREQUEST.fields_by_name['bank_input'].message_type = asgt_dot_jester_dot_v1alpha1_dot_jester__pb2._BANKREQUEST_INPUT
_PREPAREFEEDBACKREQUEST.fields_by_name['predictions'].message_type = asgt_dot_jester_dot_v1alpha1_dot_jester__pb2._PREDICTION
_PREPAREFEEDBACKREQUEST.oneofs_by_name['input'].fields.append(
  _PREPAREFEEDBACKREQUEST.fields_by_name['scanned_invoice_input'])
_PREPAREFEEDBACKREQUEST.fields_by_name['scanned_invoice_input'].containing_oneof = _PREPAREFEEDBACKREQUEST.oneofs_by_name['input']
_PREPAREFEEDBACKREQUEST.oneofs_by_name['input'].fields.append(
  _PREPAREFEEDBACKREQUEST.fields_by_name['electronic_invoice_line_input'])
_PREPAREFEEDBACKREQUEST.fields_by_name['electronic_invoice_line_input'].containing_oneof = _PREPAREFEEDBACKREQUEST.oneofs_by_name['input']
_PREPAREFEEDBACKREQUEST.oneofs_by_name['input'].fields.append(
  _PREPAREFEEDBACKREQUEST.fields_by_name['bank_input'])
_PREPAREFEEDBACKREQUEST.fields_by_name['bank_input'].containing_oneof = _PREPAREFEEDBACKREQUEST.oneofs_by_name['input']
_FEEDBACKREQUEST_TRUEVALUESENTRY.fields_by_name['value'].message_type = _FEEDBACKVALUE
_FEEDBACKREQUEST_TRUEVALUESENTRY.containing_type = _FEEDBACKREQUEST
_FEEDBACKREQUEST.fields_by_name['true_values'].message_type = _FEEDBACKREQUEST_TRUEVALUESENTRY
DESCRIPTOR.message_types_by_name['Entry'] = _ENTRY
DESCRIPTOR.message_types_by_name['FeedbackValue'] = _FEEDBACKVALUE
DESCRIPTOR.message_types_by_name['FeedbackValueList'] = _FEEDBACKVALUELIST
DESCRIPTOR.message_types_by_name['PrepareFeedbackRequest'] = _PREPAREFEEDBACKREQUEST
DESCRIPTOR.message_types_by_name['FeedbackRequest'] = _FEEDBACKREQUEST
DESCRIPTOR.message_types_by_name['DeleteRequest'] = _DELETEREQUEST
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Entry = _reflection.GeneratedProtocolMessageType('Entry', (_message.Message,), dict(

  InputEntry = _reflection.GeneratedProtocolMessageType('InputEntry', (_message.Message,), dict(
    DESCRIPTOR = _ENTRY_INPUTENTRY,
    __module__ = 'asgt.dataservice.v1alpha1.dataservice_pb2'
    # @@protoc_insertion_point(class_scope:asgt.dataservice.v1alpha1.Entry.InputEntry)
    ))
  ,

  TrueValuesEntry = _reflection.GeneratedProtocolMessageType('TrueValuesEntry', (_message.Message,), dict(
    DESCRIPTOR = _ENTRY_TRUEVALUESENTRY,
    __module__ = 'asgt.dataservice.v1alpha1.dataservice_pb2'
    # @@protoc_insertion_point(class_scope:asgt.dataservice.v1alpha1.Entry.TrueValuesEntry)
    ))
  ,

  PredictionValuesEntry = _reflection.GeneratedProtocolMessageType('PredictionValuesEntry', (_message.Message,), dict(
    DESCRIPTOR = _ENTRY_PREDICTIONVALUESENTRY,
    __module__ = 'asgt.dataservice.v1alpha1.dataservice_pb2'
    # @@protoc_insertion_point(class_scope:asgt.dataservice.v1alpha1.Entry.PredictionValuesEntry)
    ))
  ,
  DESCRIPTOR = _ENTRY,
  __module__ = 'asgt.dataservice.v1alpha1.dataservice_pb2'
  # @@protoc_insertion_point(class_scope:asgt.dataservice.v1alpha1.Entry)
  ))
_sym_db.RegisterMessage(Entry)
_sym_db.RegisterMessage(Entry.InputEntry)
_sym_db.RegisterMessage(Entry.TrueValuesEntry)
_sym_db.RegisterMessage(Entry.PredictionValuesEntry)

FeedbackValue = _reflection.GeneratedProtocolMessageType('FeedbackValue', (_message.Message,), dict(
  DESCRIPTOR = _FEEDBACKVALUE,
  __module__ = 'asgt.dataservice.v1alpha1.dataservice_pb2'
  # @@protoc_insertion_point(class_scope:asgt.dataservice.v1alpha1.FeedbackValue)
  ))
_sym_db.RegisterMessage(FeedbackValue)

FeedbackValueList = _reflection.GeneratedProtocolMessageType('FeedbackValueList', (_message.Message,), dict(
  DESCRIPTOR = _FEEDBACKVALUELIST,
  __module__ = 'asgt.dataservice.v1alpha1.dataservice_pb2'
  # @@protoc_insertion_point(class_scope:asgt.dataservice.v1alpha1.FeedbackValueList)
  ))
_sym_db.RegisterMessage(FeedbackValueList)

PrepareFeedbackRequest = _reflection.GeneratedProtocolMessageType('PrepareFeedbackRequest', (_message.Message,), dict(
  DESCRIPTOR = _PREPAREFEEDBACKREQUEST,
  __module__ = 'asgt.dataservice.v1alpha1.dataservice_pb2'
  # @@protoc_insertion_point(class_scope:asgt.dataservice.v1alpha1.PrepareFeedbackRequest)
  ))
_sym_db.RegisterMessage(PrepareFeedbackRequest)

FeedbackRequest = _reflection.GeneratedProtocolMessageType('FeedbackRequest', (_message.Message,), dict(

  TrueValuesEntry = _reflection.GeneratedProtocolMessageType('TrueValuesEntry', (_message.Message,), dict(
    DESCRIPTOR = _FEEDBACKREQUEST_TRUEVALUESENTRY,
    __module__ = 'asgt.dataservice.v1alpha1.dataservice_pb2'
    # @@protoc_insertion_point(class_scope:asgt.dataservice.v1alpha1.FeedbackRequest.TrueValuesEntry)
    ))
  ,
  DESCRIPTOR = _FEEDBACKREQUEST,
  __module__ = 'asgt.dataservice.v1alpha1.dataservice_pb2'
  # @@protoc_insertion_point(class_scope:asgt.dataservice.v1alpha1.FeedbackRequest)
  ))
_sym_db.RegisterMessage(FeedbackRequest)
_sym_db.RegisterMessage(FeedbackRequest.TrueValuesEntry)

DeleteRequest = _reflection.GeneratedProtocolMessageType('DeleteRequest', (_message.Message,), dict(
  DESCRIPTOR = _DELETEREQUEST,
  __module__ = 'asgt.dataservice.v1alpha1.dataservice_pb2'
  # @@protoc_insertion_point(class_scope:asgt.dataservice.v1alpha1.DeleteRequest)
  ))
_sym_db.RegisterMessage(DeleteRequest)


DESCRIPTOR._options = None
_ENTRY_INPUTENTRY._options = None
_ENTRY_TRUEVALUESENTRY._options = None
_ENTRY_PREDICTIONVALUESENTRY._options = None
_ENTRY.fields_by_name['id']._options = None
_ENTRY.fields_by_name['consumer']._options = None
_ENTRY.fields_by_name['user']._options = None
_ENTRY.fields_by_name['tags']._options = None
_ENTRY.fields_by_name['feedback_time']._options = None
_ENTRY._options = None
_FEEDBACKREQUEST_TRUEVALUESENTRY._options = None

_DATASERVICE = _descriptor.ServiceDescriptor(
  name='DataService',
  full_name='asgt.dataservice.v1alpha1.DataService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=1861,
  serialized_end=2200,
  methods=[
  _descriptor.MethodDescriptor(
    name='PrepareFeedback',
    full_name='asgt.dataservice.v1alpha1.DataService.PrepareFeedback',
    index=0,
    containing_service=None,
    input_type=_PREPAREFEEDBACKREQUEST,
    output_type=google_dot_protobuf_dot_empty__pb2._EMPTY,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='Feedback',
    full_name='asgt.dataservice.v1alpha1.DataService.Feedback',
    index=1,
    containing_service=None,
    input_type=_FEEDBACKREQUEST,
    output_type=google_dot_protobuf_dot_empty__pb2._EMPTY,
    serialized_options=_b('\202\323\344\223\002\036\"\031/v1alpha1/feedback:create:\001*'),
  ),
  _descriptor.MethodDescriptor(
    name='Delete',
    full_name='asgt.dataservice.v1alpha1.DataService.Delete',
    index=2,
    containing_service=None,
    input_type=_DELETEREQUEST,
    output_type=google_dot_protobuf_dot_empty__pb2._EMPTY,
    serialized_options=_b('\202\323\344\223\002\036\"\031/v1alpha1/feedback:delete:\001*'),
  ),
])
_sym_db.RegisterServiceDescriptor(_DATASERVICE)

DESCRIPTOR.services_by_name['DataService'] = _DATASERVICE

# @@protoc_insertion_point(module_scope)
