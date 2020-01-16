# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: asgt/jester/v1alpha1/jester.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from google.protobuf import wrappers_pb2 as google_dot_protobuf_dot_wrappers__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='asgt/jester/v1alpha1/jester.proto',
  package='asgt.jester.v1alpha1',
  syntax='proto3',
  serialized_options=_b('Z\006jester'),
  serialized_pb=_b('\n!asgt/jester/v1alpha1/jester.proto\x12\x14\x61sgt.jester.v1alpha1\x1a\x1cgoogle/api/annotations.proto\x1a\x1egoogle/protobuf/wrappers.proto\"\xbe\x01\n\nConfidence\x12\x35\n\x05level\x18\x01 \x01(\x0e\x32&.asgt.jester.v1alpha1.Confidence.Level\x12*\n\x05value\x18\x02 \x01(\x0b\x32\x1b.google.protobuf.FloatValue\"M\n\x05Level\x12\x0b\n\x07UNKNOWN\x10\x00\x12\x0c\n\x08VERY_LOW\x10\x01\x12\x07\n\x03LOW\x10\x02\x12\x07\n\x03MID\x10\x03\x12\x08\n\x04HIGH\x10\x04\x12\r\n\tVERY_HIGH\x10\x05\"\xae\x01\n\nPrediction\x12\x0e\n\x06target\x18\x01 \x01(\t\x12>\n\ncandidates\x18\x02 \x03(\x0b\x32*.asgt.jester.v1alpha1.Prediction.Candidate\x1aP\n\tCandidate\x12\r\n\x05label\x18\x01 \x01(\t\x12\x34\n\nconfidence\x18\x02 \x01(\x0b\x32 .asgt.jester.v1alpha1.Confidence\"L\n\x13SuggestionsResponse\x12\x35\n\x0bpredictions\x18\x01 \x03(\x0b\x32 .asgt.jester.v1alpha1.Prediction\"m\n\x11SuggestionOptions\x12\x18\n\x10suggestion_limit\x18\x01 \x01(\x05\x12>\n\x0emin_confidence\x18\x02 \x01(\x0e\x32&.asgt.jester.v1alpha1.Confidence.Level\"\xc6\x01\n\x15ScannedInvoiceRequest\x12@\n\x06inputs\x18\x01 \x03(\x0b\x32\x30.asgt.jester.v1alpha1.ScannedInvoiceRequest.Data\x12\x14\n\x0c\x64\x61taset_name\x18\x02 \x01(\t\x12\x38\n\x07options\x18\x03 \x01(\x0b\x32\'.asgt.jester.v1alpha1.SuggestionOptions\x1a\x1b\n\x04\x44\x61ta\x12\x13\n\x0b\x64\x65scription\x18\x01 \x01(\t\"\xf7\x02\n\x1c\x45lectronicInvoiceLineRequest\x12G\n\x06inputs\x18\x01 \x03(\x0b\x32\x37.asgt.jester.v1alpha1.ElectronicInvoiceLineRequest.Data\x12\x14\n\x0c\x64\x61taset_name\x18\x02 \x01(\t\x12\x38\n\x07options\x18\x03 \x01(\x0b\x32\'.asgt.jester.v1alpha1.SuggestionOptions\x1a\xbd\x01\n\x04\x44\x61ta\x12\x12\n\nissue_date\x18\x01 \x01(\t\x12\x10\n\x08\x63urrency\x18\x02 \x01(\t\x12\x13\n\x0bsupplier_id\x18\x03 \x01(\t\x12\x15\n\rsupplier_name\x18\x04 \x01(\t\x12\x1a\n\x12supplier_global_id\x18\x05 \x01(\t\x12\x14\n\x0c\x63ustomer_ref\x18\x06 \x01(\t\x12\r\n\x05total\x18\x07 \x01(\x05\x12\x11\n\tline_text\x18\x08 \x01(\t\x12\x0f\n\x07line_id\x18\t \x01(\t\"\x99\x02\n\x0b\x42\x61nkRequest\x12\x36\n\x06inputs\x18\x01 \x03(\x0b\x32&.asgt.jester.v1alpha1.BankRequest.Data\x12\x14\n\x0c\x64\x61taset_name\x18\x02 \x01(\t\x12\x38\n\x07options\x18\x03 \x01(\x0b\x32\'.asgt.jester.v1alpha1.SuggestionOptions\x1a\x81\x01\n\x04\x44\x61ta\x12\x16\n\x0e\x61\x63\x63ount_number\x18\x01 \x01(\x05\x12+\n\x06\x61mount\x18\x02 \x01(\x0b\x32\x1b.google.protobuf.FloatValue\x12\x12\n\nentry_type\x18\x03 \x01(\x05\x12\x0c\n\x04text\x18\x04 \x01(\t\x12\x12\n\ntime_stamp\x18\x05 \x01(\x05\x32\xd4\x03\n\x06Jester\x12\x9a\x01\n\x19ScannedInvoiceSuggestions\x12+.asgt.jester.v1alpha1.ScannedInvoiceRequest\x1a).asgt.jester.v1alpha1.SuggestionsResponse\"%\x82\xd3\xe4\x93\x02\x1f\"\x1a/v1/suggest:scannedinvoice:\x01*\x12\xae\x01\n\x1f\x45lectronicInvoicLineSuggestions\x12\x32.asgt.jester.v1alpha1.ElectronicInvoiceLineRequest\x1a).asgt.jester.v1alpha1.SuggestionsResponse\",\x82\xd3\xe4\x93\x02&\"!/v1/suggest:electronicinvoiceline:\x01*\x12|\n\x0f\x42\x61nkSuggestions\x12!.asgt.jester.v1alpha1.BankRequest\x1a).asgt.jester.v1alpha1.SuggestionsResponse\"\x1b\x82\xd3\xe4\x93\x02\x15\"\x10/v1/suggest:bank:\x01*B\x08Z\x06jesterb\x06proto3')
  ,
  dependencies=[google_dot_api_dot_annotations__pb2.DESCRIPTOR,google_dot_protobuf_dot_wrappers__pb2.DESCRIPTOR,])



_CONFIDENCE_LEVEL = _descriptor.EnumDescriptor(
  name='Level',
  full_name='asgt.jester.v1alpha1.Confidence.Level',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='UNKNOWN', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='VERY_LOW', index=1, number=1,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='LOW', index=2, number=2,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='MID', index=3, number=3,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='HIGH', index=4, number=4,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='VERY_HIGH', index=5, number=5,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=235,
  serialized_end=312,
)
_sym_db.RegisterEnumDescriptor(_CONFIDENCE_LEVEL)


_CONFIDENCE = _descriptor.Descriptor(
  name='Confidence',
  full_name='asgt.jester.v1alpha1.Confidence',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='level', full_name='asgt.jester.v1alpha1.Confidence.level', index=0,
      number=1, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='value', full_name='asgt.jester.v1alpha1.Confidence.value', index=1,
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
    _CONFIDENCE_LEVEL,
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=122,
  serialized_end=312,
)


_PREDICTION_CANDIDATE = _descriptor.Descriptor(
  name='Candidate',
  full_name='asgt.jester.v1alpha1.Prediction.Candidate',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='label', full_name='asgt.jester.v1alpha1.Prediction.Candidate.label', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='confidence', full_name='asgt.jester.v1alpha1.Prediction.Candidate.confidence', index=1,
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
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=409,
  serialized_end=489,
)

_PREDICTION = _descriptor.Descriptor(
  name='Prediction',
  full_name='asgt.jester.v1alpha1.Prediction',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='target', full_name='asgt.jester.v1alpha1.Prediction.target', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='candidates', full_name='asgt.jester.v1alpha1.Prediction.candidates', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_PREDICTION_CANDIDATE, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=315,
  serialized_end=489,
)


_SUGGESTIONSRESPONSE = _descriptor.Descriptor(
  name='SuggestionsResponse',
  full_name='asgt.jester.v1alpha1.SuggestionsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='predictions', full_name='asgt.jester.v1alpha1.SuggestionsResponse.predictions', index=0,
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
  serialized_start=491,
  serialized_end=567,
)


_SUGGESTIONOPTIONS = _descriptor.Descriptor(
  name='SuggestionOptions',
  full_name='asgt.jester.v1alpha1.SuggestionOptions',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='suggestion_limit', full_name='asgt.jester.v1alpha1.SuggestionOptions.suggestion_limit', index=0,
      number=1, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='min_confidence', full_name='asgt.jester.v1alpha1.SuggestionOptions.min_confidence', index=1,
      number=2, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
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
  serialized_start=569,
  serialized_end=678,
)


_SCANNEDINVOICEREQUEST_DATA = _descriptor.Descriptor(
  name='Data',
  full_name='asgt.jester.v1alpha1.ScannedInvoiceRequest.Data',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='description', full_name='asgt.jester.v1alpha1.ScannedInvoiceRequest.Data.description', index=0,
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
  serialized_start=852,
  serialized_end=879,
)

_SCANNEDINVOICEREQUEST = _descriptor.Descriptor(
  name='ScannedInvoiceRequest',
  full_name='asgt.jester.v1alpha1.ScannedInvoiceRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='inputs', full_name='asgt.jester.v1alpha1.ScannedInvoiceRequest.inputs', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='dataset_name', full_name='asgt.jester.v1alpha1.ScannedInvoiceRequest.dataset_name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='options', full_name='asgt.jester.v1alpha1.ScannedInvoiceRequest.options', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_SCANNEDINVOICEREQUEST_DATA, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=681,
  serialized_end=879,
)


_ELECTRONICINVOICELINEREQUEST_DATA = _descriptor.Descriptor(
  name='Data',
  full_name='asgt.jester.v1alpha1.ElectronicInvoiceLineRequest.Data',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='issue_date', full_name='asgt.jester.v1alpha1.ElectronicInvoiceLineRequest.Data.issue_date', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='currency', full_name='asgt.jester.v1alpha1.ElectronicInvoiceLineRequest.Data.currency', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='supplier_id', full_name='asgt.jester.v1alpha1.ElectronicInvoiceLineRequest.Data.supplier_id', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='supplier_name', full_name='asgt.jester.v1alpha1.ElectronicInvoiceLineRequest.Data.supplier_name', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='supplier_global_id', full_name='asgt.jester.v1alpha1.ElectronicInvoiceLineRequest.Data.supplier_global_id', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='customer_ref', full_name='asgt.jester.v1alpha1.ElectronicInvoiceLineRequest.Data.customer_ref', index=5,
      number=6, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='total', full_name='asgt.jester.v1alpha1.ElectronicInvoiceLineRequest.Data.total', index=6,
      number=7, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='line_text', full_name='asgt.jester.v1alpha1.ElectronicInvoiceLineRequest.Data.line_text', index=7,
      number=8, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='line_id', full_name='asgt.jester.v1alpha1.ElectronicInvoiceLineRequest.Data.line_id', index=8,
      number=9, type=9, cpp_type=9, label=1,
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
  serialized_start=1068,
  serialized_end=1257,
)

_ELECTRONICINVOICELINEREQUEST = _descriptor.Descriptor(
  name='ElectronicInvoiceLineRequest',
  full_name='asgt.jester.v1alpha1.ElectronicInvoiceLineRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='inputs', full_name='asgt.jester.v1alpha1.ElectronicInvoiceLineRequest.inputs', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='dataset_name', full_name='asgt.jester.v1alpha1.ElectronicInvoiceLineRequest.dataset_name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='options', full_name='asgt.jester.v1alpha1.ElectronicInvoiceLineRequest.options', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_ELECTRONICINVOICELINEREQUEST_DATA, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=882,
  serialized_end=1257,
)


_BANKREQUEST_DATA = _descriptor.Descriptor(
  name='Data',
  full_name='asgt.jester.v1alpha1.BankRequest.Data',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='account_number', full_name='asgt.jester.v1alpha1.BankRequest.Data.account_number', index=0,
      number=1, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='amount', full_name='asgt.jester.v1alpha1.BankRequest.Data.amount', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='entry_type', full_name='asgt.jester.v1alpha1.BankRequest.Data.entry_type', index=2,
      number=3, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='text', full_name='asgt.jester.v1alpha1.BankRequest.Data.text', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='time_stamp', full_name='asgt.jester.v1alpha1.BankRequest.Data.time_stamp', index=4,
      number=5, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
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
  serialized_start=1412,
  serialized_end=1541,
)

_BANKREQUEST = _descriptor.Descriptor(
  name='BankRequest',
  full_name='asgt.jester.v1alpha1.BankRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='inputs', full_name='asgt.jester.v1alpha1.BankRequest.inputs', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='dataset_name', full_name='asgt.jester.v1alpha1.BankRequest.dataset_name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='options', full_name='asgt.jester.v1alpha1.BankRequest.options', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_BANKREQUEST_DATA, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1260,
  serialized_end=1541,
)

_CONFIDENCE.fields_by_name['level'].enum_type = _CONFIDENCE_LEVEL
_CONFIDENCE.fields_by_name['value'].message_type = google_dot_protobuf_dot_wrappers__pb2._FLOATVALUE
_CONFIDENCE_LEVEL.containing_type = _CONFIDENCE
_PREDICTION_CANDIDATE.fields_by_name['confidence'].message_type = _CONFIDENCE
_PREDICTION_CANDIDATE.containing_type = _PREDICTION
_PREDICTION.fields_by_name['candidates'].message_type = _PREDICTION_CANDIDATE
_SUGGESTIONSRESPONSE.fields_by_name['predictions'].message_type = _PREDICTION
_SUGGESTIONOPTIONS.fields_by_name['min_confidence'].enum_type = _CONFIDENCE_LEVEL
_SCANNEDINVOICEREQUEST_DATA.containing_type = _SCANNEDINVOICEREQUEST
_SCANNEDINVOICEREQUEST.fields_by_name['inputs'].message_type = _SCANNEDINVOICEREQUEST_DATA
_SCANNEDINVOICEREQUEST.fields_by_name['options'].message_type = _SUGGESTIONOPTIONS
_ELECTRONICINVOICELINEREQUEST_DATA.containing_type = _ELECTRONICINVOICELINEREQUEST
_ELECTRONICINVOICELINEREQUEST.fields_by_name['inputs'].message_type = _ELECTRONICINVOICELINEREQUEST_DATA
_ELECTRONICINVOICELINEREQUEST.fields_by_name['options'].message_type = _SUGGESTIONOPTIONS
_BANKREQUEST_DATA.fields_by_name['amount'].message_type = google_dot_protobuf_dot_wrappers__pb2._FLOATVALUE
_BANKREQUEST_DATA.containing_type = _BANKREQUEST
_BANKREQUEST.fields_by_name['inputs'].message_type = _BANKREQUEST_DATA
_BANKREQUEST.fields_by_name['options'].message_type = _SUGGESTIONOPTIONS
DESCRIPTOR.message_types_by_name['Confidence'] = _CONFIDENCE
DESCRIPTOR.message_types_by_name['Prediction'] = _PREDICTION
DESCRIPTOR.message_types_by_name['SuggestionsResponse'] = _SUGGESTIONSRESPONSE
DESCRIPTOR.message_types_by_name['SuggestionOptions'] = _SUGGESTIONOPTIONS
DESCRIPTOR.message_types_by_name['ScannedInvoiceRequest'] = _SCANNEDINVOICEREQUEST
DESCRIPTOR.message_types_by_name['ElectronicInvoiceLineRequest'] = _ELECTRONICINVOICELINEREQUEST
DESCRIPTOR.message_types_by_name['BankRequest'] = _BANKREQUEST
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Confidence = _reflection.GeneratedProtocolMessageType('Confidence', (_message.Message,), dict(
  DESCRIPTOR = _CONFIDENCE,
  __module__ = 'asgt.jester.v1alpha1.jester_pb2'
  # @@protoc_insertion_point(class_scope:asgt.jester.v1alpha1.Confidence)
  ))
_sym_db.RegisterMessage(Confidence)

Prediction = _reflection.GeneratedProtocolMessageType('Prediction', (_message.Message,), dict(

  Candidate = _reflection.GeneratedProtocolMessageType('Candidate', (_message.Message,), dict(
    DESCRIPTOR = _PREDICTION_CANDIDATE,
    __module__ = 'asgt.jester.v1alpha1.jester_pb2'
    # @@protoc_insertion_point(class_scope:asgt.jester.v1alpha1.Prediction.Candidate)
    ))
  ,
  DESCRIPTOR = _PREDICTION,
  __module__ = 'asgt.jester.v1alpha1.jester_pb2'
  # @@protoc_insertion_point(class_scope:asgt.jester.v1alpha1.Prediction)
  ))
_sym_db.RegisterMessage(Prediction)
_sym_db.RegisterMessage(Prediction.Candidate)

SuggestionsResponse = _reflection.GeneratedProtocolMessageType('SuggestionsResponse', (_message.Message,), dict(
  DESCRIPTOR = _SUGGESTIONSRESPONSE,
  __module__ = 'asgt.jester.v1alpha1.jester_pb2'
  # @@protoc_insertion_point(class_scope:asgt.jester.v1alpha1.SuggestionsResponse)
  ))
_sym_db.RegisterMessage(SuggestionsResponse)

SuggestionOptions = _reflection.GeneratedProtocolMessageType('SuggestionOptions', (_message.Message,), dict(
  DESCRIPTOR = _SUGGESTIONOPTIONS,
  __module__ = 'asgt.jester.v1alpha1.jester_pb2'
  # @@protoc_insertion_point(class_scope:asgt.jester.v1alpha1.SuggestionOptions)
  ))
_sym_db.RegisterMessage(SuggestionOptions)

ScannedInvoiceRequest = _reflection.GeneratedProtocolMessageType('ScannedInvoiceRequest', (_message.Message,), dict(

  Data = _reflection.GeneratedProtocolMessageType('Data', (_message.Message,), dict(
    DESCRIPTOR = _SCANNEDINVOICEREQUEST_DATA,
    __module__ = 'asgt.jester.v1alpha1.jester_pb2'
    # @@protoc_insertion_point(class_scope:asgt.jester.v1alpha1.ScannedInvoiceRequest.Data)
    ))
  ,
  DESCRIPTOR = _SCANNEDINVOICEREQUEST,
  __module__ = 'asgt.jester.v1alpha1.jester_pb2'
  # @@protoc_insertion_point(class_scope:asgt.jester.v1alpha1.ScannedInvoiceRequest)
  ))
_sym_db.RegisterMessage(ScannedInvoiceRequest)
_sym_db.RegisterMessage(ScannedInvoiceRequest.Data)

ElectronicInvoiceLineRequest = _reflection.GeneratedProtocolMessageType('ElectronicInvoiceLineRequest', (_message.Message,), dict(

  Data = _reflection.GeneratedProtocolMessageType('Data', (_message.Message,), dict(
    DESCRIPTOR = _ELECTRONICINVOICELINEREQUEST_DATA,
    __module__ = 'asgt.jester.v1alpha1.jester_pb2'
    # @@protoc_insertion_point(class_scope:asgt.jester.v1alpha1.ElectronicInvoiceLineRequest.Data)
    ))
  ,
  DESCRIPTOR = _ELECTRONICINVOICELINEREQUEST,
  __module__ = 'asgt.jester.v1alpha1.jester_pb2'
  # @@protoc_insertion_point(class_scope:asgt.jester.v1alpha1.ElectronicInvoiceLineRequest)
  ))
_sym_db.RegisterMessage(ElectronicInvoiceLineRequest)
_sym_db.RegisterMessage(ElectronicInvoiceLineRequest.Data)

BankRequest = _reflection.GeneratedProtocolMessageType('BankRequest', (_message.Message,), dict(

  Data = _reflection.GeneratedProtocolMessageType('Data', (_message.Message,), dict(
    DESCRIPTOR = _BANKREQUEST_DATA,
    __module__ = 'asgt.jester.v1alpha1.jester_pb2'
    # @@protoc_insertion_point(class_scope:asgt.jester.v1alpha1.BankRequest.Data)
    ))
  ,
  DESCRIPTOR = _BANKREQUEST,
  __module__ = 'asgt.jester.v1alpha1.jester_pb2'
  # @@protoc_insertion_point(class_scope:asgt.jester.v1alpha1.BankRequest)
  ))
_sym_db.RegisterMessage(BankRequest)
_sym_db.RegisterMessage(BankRequest.Data)


DESCRIPTOR._options = None

_JESTER = _descriptor.ServiceDescriptor(
  name='Jester',
  full_name='asgt.jester.v1alpha1.Jester',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=1544,
  serialized_end=2012,
  methods=[
  _descriptor.MethodDescriptor(
    name='ScannedInvoiceSuggestions',
    full_name='asgt.jester.v1alpha1.Jester.ScannedInvoiceSuggestions',
    index=0,
    containing_service=None,
    input_type=_SCANNEDINVOICEREQUEST,
    output_type=_SUGGESTIONSRESPONSE,
    serialized_options=_b('\202\323\344\223\002\037\"\032/v1/suggest:scannedinvoice:\001*'),
  ),
  _descriptor.MethodDescriptor(
    name='ElectronicInvoicLineSuggestions',
    full_name='asgt.jester.v1alpha1.Jester.ElectronicInvoicLineSuggestions',
    index=1,
    containing_service=None,
    input_type=_ELECTRONICINVOICELINEREQUEST,
    output_type=_SUGGESTIONSRESPONSE,
    serialized_options=_b('\202\323\344\223\002&\"!/v1/suggest:electronicinvoiceline:\001*'),
  ),
  _descriptor.MethodDescriptor(
    name='BankSuggestions',
    full_name='asgt.jester.v1alpha1.Jester.BankSuggestions',
    index=2,
    containing_service=None,
    input_type=_BANKREQUEST,
    output_type=_SUGGESTIONSRESPONSE,
    serialized_options=_b('\202\323\344\223\002\025\"\020/v1/suggest:bank:\001*'),
  ),
])
_sym_db.RegisterServiceDescriptor(_JESTER)

DESCRIPTOR.services_by_name['Jester'] = _JESTER

# @@protoc_insertion_point(module_scope)
