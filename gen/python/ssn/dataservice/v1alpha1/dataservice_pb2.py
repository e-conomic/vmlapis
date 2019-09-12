# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ssn/dataservice/v1alpha1/dataservice.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from gen_bq_schema import bq_field_pb2 as gen__bq__schema_dot_bq__field__pb2
from gen_bq_schema import bq_table_pb2 as gen__bq__schema_dot_bq__table__pb2
from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2
from google.protobuf import wrappers_pb2 as google_dot_protobuf_dot_wrappers__pb2
from google.type import date_pb2 as google_dot_type_dot_date__pb2
from ssn.type import text_annotation_pb2 as ssn_dot_type_dot_text__annotation__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='ssn/dataservice/v1alpha1/dataservice.proto',
  package='ssn.dataservice.v1alpha1',
  syntax='proto3',
  serialized_options=_b('Z\013dataservice'),
  serialized_pb=_b('\n*ssn/dataservice/v1alpha1/dataservice.proto\x12\x18ssn.dataservice.v1alpha1\x1a\x1cgen-bq-schema/bq_field.proto\x1a\x1cgen-bq-schema/bq_table.proto\x1a\x1cgoogle/api/annotations.proto\x1a\x1bgoogle/protobuf/empty.proto\x1a\x1egoogle/protobuf/wrappers.proto\x1a\x16google/type/date.proto\x1a\x1essn/type/text_annotation.proto\"\xe0\x02\n\x08\x44ocument\x12+\n\x02ta\x18\x01 \x01(\x0b\x32\x18.ssn.type.TextAnnotationB\x05\xea?\x02\x18\x01\x12\x14\n\x05\x62ytes\x18\x02 \x01(\x0c\x42\x05\xea?\x02\x18\x01\x12;\n\x02id\x18\x03 \x01(\tB/\xea?\'\"%Feedback ID, same as Envoy request id\xea?\x02\x08\x01\x12\x17\n\x08\x63onsumer\x18\x04 \x01(\tB\x05\xea?\x02\x08\x01\x12T\n\x04tags\x18\x05 \x03(\tBF\xea?C\"ATags defined by consumer, enriched by service if valetkey is used\x12\x39\n\x0btrue_values\x18\x06 \x01(\x0b\x32$.ssn.dataservice.v1alpha1.TrueValues\x12\x16\n\x0emissing_values\x18\x07 \x03(\t:\x12\xea?\x0f\n\rtraining_data\"\xd8\t\n\nTrueValues\x12\x34\n\x0etotal_incl_vat\x18\x01 \x01(\x0b\x32\x1c.google.protobuf.DoubleValue\x12/\n\ttotal_vat\x18\x02 \x01(\x0b\x32\x1c.google.protobuf.DoubleValue\x12\x34\n\x0etotal_excl_vat\x18\x03 \x01(\x0b\x32\x1c.google.protobuf.DoubleValue\x12\x30\n\norder_date\x18\x04 \x01(\x0b\x32\x11.google.type.DateB\t\xea?\x06\x12\x04\x44\x41TE\x12\x36\n\x10payment_due_date\x18\x05 \x01(\x0b\x32\x11.google.type.DateB\t\xea?\x06\x12\x04\x44\x41TE\x12\x33\n\rdocument_type\x18\x06 \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12.\n\x08\x63urrency\x18\x07 \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12;\n\x15\x63redit_card_last_four\x18\x08 \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12\x34\n\x0epayment_method\x18\t \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12\x36\n\x10ocr_line_dk_type\x18\n \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12<\n\x16ocr_line_dk_payment_id\x18\x0b \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12=\n\x17ocr_line_dk_creditor_id\x18\x0c \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12<\n\x16ocr_line_se_payment_id\x18\r \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12\x46\n ocr_line_se_bankgiro_creditor_id\x18\x0e \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12\x46\n ocr_line_se_plusgiro_creditor_id\x18\x0f \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12<\n\x16ocr_line_no_payment_id\x18\x10 \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12<\n\x16ocr_line_fi_payment_id\x18\x11 \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12<\n\x16ocr_line_nl_payment_id\x18\x12 \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12;\n\x15supplier_corporate_id\x18\x13 \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12;\n\x15supplier_country_code\x18\x14 \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12\x34\n\x0einvoice_number\x18\x15 \x01(\x0b\x32\x1c.google.protobuf.StringValue\"M\n\x15\x43reateDocumentRequest\x12\x34\n\x08\x64ocument\x18\x01 \x01(\x0b\x32\".ssn.dataservice.v1alpha1.Document\"$\n\x16\x43reateDocumentResponse\x12\n\n\x02id\x18\x01 \x01(\t\"!\n\x13ReadDocumentRequest\x12\n\n\x02id\x18\x01 \x01(\t\"L\n\x14ReadDocumentResponse\x12\x34\n\x08\x64ocument\x18\x01 \x01(\x0b\x32\".ssn.dataservice.v1alpha1.Document\"b\n\x16PrepareFeedbackRequest\x12\n\n\x02id\x18\x01 \x01(\t\x12$\n\x02ta\x18\x02 \x01(\x0b\x32\x18.ssn.type.TextAnnotation\x12\x16\n\x0e\x64ocument_bytes\x18\x03 \x01(\x0c\"f\n\x0f\x46\x65\x65\x64\x62\x61\x63kRequest\x12\n\n\x02id\x18\x01 \x01(\t\x12\x39\n\x0btrue_values\x18\x02 \x01(\x0b\x32$.ssn.dataservice.v1alpha1.TrueValues\x12\x0c\n\x04tags\x18\x03 \x03(\t2\xbc\x03\n\x0b\x44\x61taService\x12s\n\x0e\x43reateDocument\x12/.ssn.dataservice.v1alpha1.CreateDocumentRequest\x1a\x30.ssn.dataservice.v1alpha1.CreateDocumentResponse\x12m\n\x0cReadDocument\x12-.ssn.dataservice.v1alpha1.ReadDocumentRequest\x1a..ssn.dataservice.v1alpha1.ReadDocumentResponse\x12[\n\x0fPrepareFeedback\x12\x30.ssn.dataservice.v1alpha1.PrepareFeedbackRequest\x1a\x16.google.protobuf.Empty\x12l\n\x08\x46\x65\x65\x64\x62\x61\x63k\x12).ssn.dataservice.v1alpha1.FeedbackRequest\x1a\x16.google.protobuf.Empty\"\x1d\x82\xd3\xe4\x93\x02\x17\"\x12/v1alpha1/feedback:\x01*B\rZ\x0b\x64\x61taserviceb\x06proto3')
  ,
  dependencies=[gen__bq__schema_dot_bq__field__pb2.DESCRIPTOR,gen__bq__schema_dot_bq__table__pb2.DESCRIPTOR,google_dot_api_dot_annotations__pb2.DESCRIPTOR,google_dot_protobuf_dot_empty__pb2.DESCRIPTOR,google_dot_protobuf_dot_wrappers__pb2.DESCRIPTOR,google_dot_type_dot_date__pb2.DESCRIPTOR,ssn_dot_type_dot_text__annotation__pb2.DESCRIPTOR,])




_DOCUMENT = _descriptor.Descriptor(
  name='Document',
  full_name='ssn.dataservice.v1alpha1.Document',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='ta', full_name='ssn.dataservice.v1alpha1.Document.ta', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\352?\002\030\001'), file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='bytes', full_name='ssn.dataservice.v1alpha1.Document.bytes', index=1,
      number=2, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\352?\002\030\001'), file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='id', full_name='ssn.dataservice.v1alpha1.Document.id', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\352?\'\"%Feedback ID, same as Envoy request id\352?\002\010\001'), file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='consumer', full_name='ssn.dataservice.v1alpha1.Document.consumer', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\352?\002\010\001'), file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='tags', full_name='ssn.dataservice.v1alpha1.Document.tags', index=4,
      number=5, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\352?C\"ATags defined by consumer, enriched by service if valetkey is used'), file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='true_values', full_name='ssn.dataservice.v1alpha1.Document.true_values', index=5,
      number=6, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='missing_values', full_name='ssn.dataservice.v1alpha1.Document.missing_values', index=6,
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
  serialized_options=_b('\352?\017\n\rtraining_data'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=280,
  serialized_end=632,
)


_TRUEVALUES = _descriptor.Descriptor(
  name='TrueValues',
  full_name='ssn.dataservice.v1alpha1.TrueValues',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='total_incl_vat', full_name='ssn.dataservice.v1alpha1.TrueValues.total_incl_vat', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='total_vat', full_name='ssn.dataservice.v1alpha1.TrueValues.total_vat', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='total_excl_vat', full_name='ssn.dataservice.v1alpha1.TrueValues.total_excl_vat', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='order_date', full_name='ssn.dataservice.v1alpha1.TrueValues.order_date', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\352?\006\022\004DATE'), file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='payment_due_date', full_name='ssn.dataservice.v1alpha1.TrueValues.payment_due_date', index=4,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\352?\006\022\004DATE'), file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='document_type', full_name='ssn.dataservice.v1alpha1.TrueValues.document_type', index=5,
      number=6, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='currency', full_name='ssn.dataservice.v1alpha1.TrueValues.currency', index=6,
      number=7, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='credit_card_last_four', full_name='ssn.dataservice.v1alpha1.TrueValues.credit_card_last_four', index=7,
      number=8, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='payment_method', full_name='ssn.dataservice.v1alpha1.TrueValues.payment_method', index=8,
      number=9, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='ocr_line_dk_type', full_name='ssn.dataservice.v1alpha1.TrueValues.ocr_line_dk_type', index=9,
      number=10, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='ocr_line_dk_payment_id', full_name='ssn.dataservice.v1alpha1.TrueValues.ocr_line_dk_payment_id', index=10,
      number=11, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='ocr_line_dk_creditor_id', full_name='ssn.dataservice.v1alpha1.TrueValues.ocr_line_dk_creditor_id', index=11,
      number=12, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='ocr_line_se_payment_id', full_name='ssn.dataservice.v1alpha1.TrueValues.ocr_line_se_payment_id', index=12,
      number=13, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='ocr_line_se_bankgiro_creditor_id', full_name='ssn.dataservice.v1alpha1.TrueValues.ocr_line_se_bankgiro_creditor_id', index=13,
      number=14, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='ocr_line_se_plusgiro_creditor_id', full_name='ssn.dataservice.v1alpha1.TrueValues.ocr_line_se_plusgiro_creditor_id', index=14,
      number=15, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='ocr_line_no_payment_id', full_name='ssn.dataservice.v1alpha1.TrueValues.ocr_line_no_payment_id', index=15,
      number=16, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='ocr_line_fi_payment_id', full_name='ssn.dataservice.v1alpha1.TrueValues.ocr_line_fi_payment_id', index=16,
      number=17, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='ocr_line_nl_payment_id', full_name='ssn.dataservice.v1alpha1.TrueValues.ocr_line_nl_payment_id', index=17,
      number=18, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='supplier_corporate_id', full_name='ssn.dataservice.v1alpha1.TrueValues.supplier_corporate_id', index=18,
      number=19, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='supplier_country_code', full_name='ssn.dataservice.v1alpha1.TrueValues.supplier_country_code', index=19,
      number=20, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='invoice_number', full_name='ssn.dataservice.v1alpha1.TrueValues.invoice_number', index=20,
      number=21, type=11, cpp_type=10, label=1,
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
  serialized_start=635,
  serialized_end=1875,
)


_CREATEDOCUMENTREQUEST = _descriptor.Descriptor(
  name='CreateDocumentRequest',
  full_name='ssn.dataservice.v1alpha1.CreateDocumentRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='document', full_name='ssn.dataservice.v1alpha1.CreateDocumentRequest.document', index=0,
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
  serialized_start=1877,
  serialized_end=1954,
)


_CREATEDOCUMENTRESPONSE = _descriptor.Descriptor(
  name='CreateDocumentResponse',
  full_name='ssn.dataservice.v1alpha1.CreateDocumentResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='ssn.dataservice.v1alpha1.CreateDocumentResponse.id', index=0,
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
  serialized_start=1956,
  serialized_end=1992,
)


_READDOCUMENTREQUEST = _descriptor.Descriptor(
  name='ReadDocumentRequest',
  full_name='ssn.dataservice.v1alpha1.ReadDocumentRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='ssn.dataservice.v1alpha1.ReadDocumentRequest.id', index=0,
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
  serialized_start=1994,
  serialized_end=2027,
)


_READDOCUMENTRESPONSE = _descriptor.Descriptor(
  name='ReadDocumentResponse',
  full_name='ssn.dataservice.v1alpha1.ReadDocumentResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='document', full_name='ssn.dataservice.v1alpha1.ReadDocumentResponse.document', index=0,
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
  serialized_start=2029,
  serialized_end=2105,
)


_PREPAREFEEDBACKREQUEST = _descriptor.Descriptor(
  name='PrepareFeedbackRequest',
  full_name='ssn.dataservice.v1alpha1.PrepareFeedbackRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='ssn.dataservice.v1alpha1.PrepareFeedbackRequest.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='ta', full_name='ssn.dataservice.v1alpha1.PrepareFeedbackRequest.ta', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='document_bytes', full_name='ssn.dataservice.v1alpha1.PrepareFeedbackRequest.document_bytes', index=2,
      number=3, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
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
  serialized_start=2107,
  serialized_end=2205,
)


_FEEDBACKREQUEST = _descriptor.Descriptor(
  name='FeedbackRequest',
  full_name='ssn.dataservice.v1alpha1.FeedbackRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='ssn.dataservice.v1alpha1.FeedbackRequest.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='true_values', full_name='ssn.dataservice.v1alpha1.FeedbackRequest.true_values', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='tags', full_name='ssn.dataservice.v1alpha1.FeedbackRequest.tags', index=2,
      number=3, type=9, cpp_type=9, label=3,
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
  serialized_start=2207,
  serialized_end=2309,
)

_DOCUMENT.fields_by_name['ta'].message_type = ssn_dot_type_dot_text__annotation__pb2._TEXTANNOTATION
_DOCUMENT.fields_by_name['true_values'].message_type = _TRUEVALUES
_TRUEVALUES.fields_by_name['total_incl_vat'].message_type = google_dot_protobuf_dot_wrappers__pb2._DOUBLEVALUE
_TRUEVALUES.fields_by_name['total_vat'].message_type = google_dot_protobuf_dot_wrappers__pb2._DOUBLEVALUE
_TRUEVALUES.fields_by_name['total_excl_vat'].message_type = google_dot_protobuf_dot_wrappers__pb2._DOUBLEVALUE
_TRUEVALUES.fields_by_name['order_date'].message_type = google_dot_type_dot_date__pb2._DATE
_TRUEVALUES.fields_by_name['payment_due_date'].message_type = google_dot_type_dot_date__pb2._DATE
_TRUEVALUES.fields_by_name['document_type'].message_type = google_dot_protobuf_dot_wrappers__pb2._STRINGVALUE
_TRUEVALUES.fields_by_name['currency'].message_type = google_dot_protobuf_dot_wrappers__pb2._STRINGVALUE
_TRUEVALUES.fields_by_name['credit_card_last_four'].message_type = google_dot_protobuf_dot_wrappers__pb2._STRINGVALUE
_TRUEVALUES.fields_by_name['payment_method'].message_type = google_dot_protobuf_dot_wrappers__pb2._STRINGVALUE
_TRUEVALUES.fields_by_name['ocr_line_dk_type'].message_type = google_dot_protobuf_dot_wrappers__pb2._STRINGVALUE
_TRUEVALUES.fields_by_name['ocr_line_dk_payment_id'].message_type = google_dot_protobuf_dot_wrappers__pb2._STRINGVALUE
_TRUEVALUES.fields_by_name['ocr_line_dk_creditor_id'].message_type = google_dot_protobuf_dot_wrappers__pb2._STRINGVALUE
_TRUEVALUES.fields_by_name['ocr_line_se_payment_id'].message_type = google_dot_protobuf_dot_wrappers__pb2._STRINGVALUE
_TRUEVALUES.fields_by_name['ocr_line_se_bankgiro_creditor_id'].message_type = google_dot_protobuf_dot_wrappers__pb2._STRINGVALUE
_TRUEVALUES.fields_by_name['ocr_line_se_plusgiro_creditor_id'].message_type = google_dot_protobuf_dot_wrappers__pb2._STRINGVALUE
_TRUEVALUES.fields_by_name['ocr_line_no_payment_id'].message_type = google_dot_protobuf_dot_wrappers__pb2._STRINGVALUE
_TRUEVALUES.fields_by_name['ocr_line_fi_payment_id'].message_type = google_dot_protobuf_dot_wrappers__pb2._STRINGVALUE
_TRUEVALUES.fields_by_name['ocr_line_nl_payment_id'].message_type = google_dot_protobuf_dot_wrappers__pb2._STRINGVALUE
_TRUEVALUES.fields_by_name['supplier_corporate_id'].message_type = google_dot_protobuf_dot_wrappers__pb2._STRINGVALUE
_TRUEVALUES.fields_by_name['supplier_country_code'].message_type = google_dot_protobuf_dot_wrappers__pb2._STRINGVALUE
_TRUEVALUES.fields_by_name['invoice_number'].message_type = google_dot_protobuf_dot_wrappers__pb2._STRINGVALUE
_CREATEDOCUMENTREQUEST.fields_by_name['document'].message_type = _DOCUMENT
_READDOCUMENTRESPONSE.fields_by_name['document'].message_type = _DOCUMENT
_PREPAREFEEDBACKREQUEST.fields_by_name['ta'].message_type = ssn_dot_type_dot_text__annotation__pb2._TEXTANNOTATION
_FEEDBACKREQUEST.fields_by_name['true_values'].message_type = _TRUEVALUES
DESCRIPTOR.message_types_by_name['Document'] = _DOCUMENT
DESCRIPTOR.message_types_by_name['TrueValues'] = _TRUEVALUES
DESCRIPTOR.message_types_by_name['CreateDocumentRequest'] = _CREATEDOCUMENTREQUEST
DESCRIPTOR.message_types_by_name['CreateDocumentResponse'] = _CREATEDOCUMENTRESPONSE
DESCRIPTOR.message_types_by_name['ReadDocumentRequest'] = _READDOCUMENTREQUEST
DESCRIPTOR.message_types_by_name['ReadDocumentResponse'] = _READDOCUMENTRESPONSE
DESCRIPTOR.message_types_by_name['PrepareFeedbackRequest'] = _PREPAREFEEDBACKREQUEST
DESCRIPTOR.message_types_by_name['FeedbackRequest'] = _FEEDBACKREQUEST
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Document = _reflection.GeneratedProtocolMessageType('Document', (_message.Message,), dict(
  DESCRIPTOR = _DOCUMENT,
  __module__ = 'ssn.dataservice.v1alpha1.dataservice_pb2'
  # @@protoc_insertion_point(class_scope:ssn.dataservice.v1alpha1.Document)
  ))
_sym_db.RegisterMessage(Document)

TrueValues = _reflection.GeneratedProtocolMessageType('TrueValues', (_message.Message,), dict(
  DESCRIPTOR = _TRUEVALUES,
  __module__ = 'ssn.dataservice.v1alpha1.dataservice_pb2'
  # @@protoc_insertion_point(class_scope:ssn.dataservice.v1alpha1.TrueValues)
  ))
_sym_db.RegisterMessage(TrueValues)

CreateDocumentRequest = _reflection.GeneratedProtocolMessageType('CreateDocumentRequest', (_message.Message,), dict(
  DESCRIPTOR = _CREATEDOCUMENTREQUEST,
  __module__ = 'ssn.dataservice.v1alpha1.dataservice_pb2'
  # @@protoc_insertion_point(class_scope:ssn.dataservice.v1alpha1.CreateDocumentRequest)
  ))
_sym_db.RegisterMessage(CreateDocumentRequest)

CreateDocumentResponse = _reflection.GeneratedProtocolMessageType('CreateDocumentResponse', (_message.Message,), dict(
  DESCRIPTOR = _CREATEDOCUMENTRESPONSE,
  __module__ = 'ssn.dataservice.v1alpha1.dataservice_pb2'
  # @@protoc_insertion_point(class_scope:ssn.dataservice.v1alpha1.CreateDocumentResponse)
  ))
_sym_db.RegisterMessage(CreateDocumentResponse)

ReadDocumentRequest = _reflection.GeneratedProtocolMessageType('ReadDocumentRequest', (_message.Message,), dict(
  DESCRIPTOR = _READDOCUMENTREQUEST,
  __module__ = 'ssn.dataservice.v1alpha1.dataservice_pb2'
  # @@protoc_insertion_point(class_scope:ssn.dataservice.v1alpha1.ReadDocumentRequest)
  ))
_sym_db.RegisterMessage(ReadDocumentRequest)

ReadDocumentResponse = _reflection.GeneratedProtocolMessageType('ReadDocumentResponse', (_message.Message,), dict(
  DESCRIPTOR = _READDOCUMENTRESPONSE,
  __module__ = 'ssn.dataservice.v1alpha1.dataservice_pb2'
  # @@protoc_insertion_point(class_scope:ssn.dataservice.v1alpha1.ReadDocumentResponse)
  ))
_sym_db.RegisterMessage(ReadDocumentResponse)

PrepareFeedbackRequest = _reflection.GeneratedProtocolMessageType('PrepareFeedbackRequest', (_message.Message,), dict(
  DESCRIPTOR = _PREPAREFEEDBACKREQUEST,
  __module__ = 'ssn.dataservice.v1alpha1.dataservice_pb2'
  # @@protoc_insertion_point(class_scope:ssn.dataservice.v1alpha1.PrepareFeedbackRequest)
  ))
_sym_db.RegisterMessage(PrepareFeedbackRequest)

FeedbackRequest = _reflection.GeneratedProtocolMessageType('FeedbackRequest', (_message.Message,), dict(
  DESCRIPTOR = _FEEDBACKREQUEST,
  __module__ = 'ssn.dataservice.v1alpha1.dataservice_pb2'
  # @@protoc_insertion_point(class_scope:ssn.dataservice.v1alpha1.FeedbackRequest)
  ))
_sym_db.RegisterMessage(FeedbackRequest)


DESCRIPTOR._options = None
_DOCUMENT.fields_by_name['ta']._options = None
_DOCUMENT.fields_by_name['bytes']._options = None
_DOCUMENT.fields_by_name['id']._options = None
_DOCUMENT.fields_by_name['consumer']._options = None
_DOCUMENT.fields_by_name['tags']._options = None
_DOCUMENT._options = None
_TRUEVALUES.fields_by_name['order_date']._options = None
_TRUEVALUES.fields_by_name['payment_due_date']._options = None

_DATASERVICE = _descriptor.ServiceDescriptor(
  name='DataService',
  full_name='ssn.dataservice.v1alpha1.DataService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=2312,
  serialized_end=2756,
  methods=[
  _descriptor.MethodDescriptor(
    name='CreateDocument',
    full_name='ssn.dataservice.v1alpha1.DataService.CreateDocument',
    index=0,
    containing_service=None,
    input_type=_CREATEDOCUMENTREQUEST,
    output_type=_CREATEDOCUMENTRESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='ReadDocument',
    full_name='ssn.dataservice.v1alpha1.DataService.ReadDocument',
    index=1,
    containing_service=None,
    input_type=_READDOCUMENTREQUEST,
    output_type=_READDOCUMENTRESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='PrepareFeedback',
    full_name='ssn.dataservice.v1alpha1.DataService.PrepareFeedback',
    index=2,
    containing_service=None,
    input_type=_PREPAREFEEDBACKREQUEST,
    output_type=google_dot_protobuf_dot_empty__pb2._EMPTY,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='Feedback',
    full_name='ssn.dataservice.v1alpha1.DataService.Feedback',
    index=3,
    containing_service=None,
    input_type=_FEEDBACKREQUEST,
    output_type=google_dot_protobuf_dot_empty__pb2._EMPTY,
    serialized_options=_b('\202\323\344\223\002\027\"\022/v1alpha1/feedback:\001*'),
  ),
])
_sym_db.RegisterServiceDescriptor(_DATASERVICE)

DESCRIPTOR.services_by_name['DataService'] = _DATASERVICE

# @@protoc_insertion_point(module_scope)
