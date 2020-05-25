# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ssn/annotator/v1/annotator.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from vml_proto.ssn.type import candidate_pb2 as ssn_dot_type_dot_candidate__pb2
from vml_proto.ssn.type import text_annotation_pb2 as ssn_dot_type_dot_text__annotation__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='ssn/annotator/v1/annotator.proto',
  package='ssn.annotator.v1',
  syntax='proto3',
  serialized_options=_b('Z\tannotator'),
  serialized_pb=_b('\n ssn/annotator/v1/annotator.proto\x12\x10ssn.annotator.v1\x1a\x1cgoogle/api/annotations.proto\x1a\x18ssn/type/candidate.proto\x1a\x1essn/type/text_annotation.proto\"\xd9\x05\n\x07\x46\x65\x61ture\x12,\n\x04type\x18\x01 \x01(\x0e\x32\x1e.ssn.annotator.v1.Feature.Type\x12\x13\n\x0bmax_results\x18\x02 \x01(\x05\x12\x32\n\x0emin_confidence\x18\x03 \x01(\x0e\x32\x1a.ssn.type.Confidence.Level\"\xd6\x04\n\x04Type\x12\x0b\n\x07\x44\x45\x46\x41ULT\x10\x00\x12\x13\n\x0fTEXT_ANNOTATION\x10\x01\x12\x0e\n\nORDER_DATE\x10\x02\x12\x14\n\x10PAYMENT_DUE_DATE\x10\x03\x12\x0c\n\x08\x43URRENCY\x10\x04\x12\r\n\tTOTAL_VAT\x10\x05\x12\x12\n\x0eTOTAL_INCL_VAT\x10\x06\x12\x12\n\x0eTOTAL_EXCL_VAT\x10\x07\x12\x19\n\x15SUPPLIER_CORPORATE_ID\x10\x08\x12\x19\n\x15SUPPLIER_COUNTRY_CODE\x10\t\x12\x11\n\rDOCUMENT_TYPE\x10\n\x12\x12\n\x0ePAYMENT_METHOD\x10\x0b\x12\x19\n\x15\x43REDIT_CARD_LAST_FOUR\x10\x0c\x12\x12\n\x0eINVOICE_NUMBER\x10\r\x12\x14\n\x10OCR_LINE_DK_TYPE\x10\x0e\x12\x1a\n\x16OCR_LINE_DK_PAYMENT_ID\x10\x0f\x12\x1b\n\x17OCR_LINE_DK_CREDITOR_ID\x10\x10\x12\x1a\n\x16OCR_LINE_SE_PAYMENT_ID\x10\x11\x12$\n OCR_LINE_SE_BANKGIRO_CREDITOR_ID\x10\x12\x12$\n OCR_LINE_SE_PLUSGIRO_CREDITOR_ID\x10\x13\x12\x1a\n\x16OCR_LINE_NO_PAYMENT_ID\x10\x14\x12\x1a\n\x16OCR_LINE_FI_PAYMENT_ID\x10\x15\x12\x1a\n\x16OCR_LINE_NL_PAYMENT_ID\x10\x16\x12\x08\n\x04TEXT\x10\x17\x12\x08\n\x04IBAN\x10\x18\x12\t\n\x05LINES\x10\x19\x12\x0b\n\x07PREVIEW\x10\x1a\"\x83\x01\n\x18\x44ocumentAnnotatorRequest\x12,\n\x08\x64ocument\x18\x01 \x01(\x0b\x32\x1a.ssn.annotator.v1.Document\x12+\n\x08\x66\x65\x61tures\x18\x02 \x03(\x0b\x32\x19.ssn.annotator.v1.Feature\x12\x0c\n\x04tags\x18\x03 \x03(\t\"\xdc\t\n\x19\x44ocumentAnnotatorResponse\x12\'\n\norder_date\x18\x01 \x03(\x0b\x32\x13.ssn.type.Candidate\x12-\n\x10payment_due_date\x18\x02 \x03(\x0b\x32\x13.ssn.type.Candidate\x12%\n\x08\x63urrency\x18\x03 \x03(\x0b\x32\x13.ssn.type.Candidate\x12&\n\ttotal_vat\x18\x04 \x03(\x0b\x32\x13.ssn.type.Candidate\x12+\n\x0etotal_incl_vat\x18\x05 \x03(\x0b\x32\x13.ssn.type.Candidate\x12+\n\x0etotal_excl_vat\x18\x06 \x03(\x0b\x32\x13.ssn.type.Candidate\x12\x32\n\x15supplier_corporate_id\x18\x07 \x03(\x0b\x32\x13.ssn.type.Candidate\x12\x32\n\x15supplier_country_code\x18\x08 \x03(\x0b\x32\x13.ssn.type.Candidate\x12*\n\rdocument_type\x18\t \x03(\x0b\x32\x13.ssn.type.Candidate\x12+\n\x0epayment_method\x18\n \x03(\x0b\x32\x13.ssn.type.Candidate\x12\x32\n\x15\x63redit_card_last_four\x18\x0b \x03(\x0b\x32\x13.ssn.type.Candidate\x12+\n\x0einvoice_number\x18\x0c \x03(\x0b\x32\x13.ssn.type.Candidate\x12\x31\n\x0ftext_annotation\x18\r \x01(\x0b\x32\x18.ssn.type.TextAnnotation\x12-\n\x10ocr_line_dk_type\x18\x0e \x03(\x0b\x32\x13.ssn.type.Candidate\x12\x33\n\x16ocr_line_dk_payment_id\x18\x0f \x03(\x0b\x32\x13.ssn.type.Candidate\x12\x34\n\x17ocr_line_dk_creditor_id\x18\x10 \x03(\x0b\x32\x13.ssn.type.Candidate\x12\x33\n\x16ocr_line_se_payment_id\x18\x11 \x03(\x0b\x32\x13.ssn.type.Candidate\x12=\n ocr_line_se_bankgiro_creditor_id\x18\x12 \x03(\x0b\x32\x13.ssn.type.Candidate\x12=\n ocr_line_se_plusgiro_creditor_id\x18\x13 \x03(\x0b\x32\x13.ssn.type.Candidate\x12\x33\n\x16ocr_line_no_payment_id\x18\x14 \x03(\x0b\x32\x13.ssn.type.Candidate\x12\x33\n\x16ocr_line_fi_payment_id\x18\x15 \x03(\x0b\x32\x13.ssn.type.Candidate\x12\x33\n\x16ocr_line_nl_payment_id\x18\x16 \x03(\x0b\x32\x13.ssn.type.Candidate\x12\x0c\n\x04text\x18\x17 \x01(\t\x12\x13\n\x0b\x66\x65\x65\x64\x62\x61\x63k_id\x18\x18 \x01(\t\x12!\n\x04iban\x18\x19 \x03(\x0b\x32\x13.ssn.type.Candidate\x12&\n\x05lines\x18\x1a \x03(\x0b\x32\x17.ssn.type.LineCandidate\x12\x0f\n\x07preview\x18\x1b \x01(\t\"M\n\x08\x44ocument\x12\x0f\n\x07\x63ontent\x18\x01 \x01(\x0c\x12\x30\n\x06source\x18\x02 \x01(\x0b\x32 .ssn.annotator.v1.DocumentSource\"\"\n\x0e\x44ocumentSource\x12\x10\n\x08http_uri\x18\x01 \x01(\t2\xa3\x01\n\x11\x44ocumentAnnotator\x12\x8d\x01\n\x10\x41nnotateDocument\x12*.ssn.annotator.v1.DocumentAnnotatorRequest\x1a+.ssn.annotator.v1.DocumentAnnotatorResponse\" \x82\xd3\xe4\x93\x02\x1a\"\x15/v1/document:annotate:\x01*B\x0bZ\tannotatorb\x06proto3')
  ,
  dependencies=[google_dot_api_dot_annotations__pb2.DESCRIPTOR,ssn_dot_type_dot_candidate__pb2.DESCRIPTOR,ssn_dot_type_dot_text__annotation__pb2.DESCRIPTOR,])



_FEATURE_TYPE = _descriptor.EnumDescriptor(
  name='Type',
  full_name='ssn.annotator.v1.Feature.Type',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='DEFAULT', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='TEXT_ANNOTATION', index=1, number=1,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='ORDER_DATE', index=2, number=2,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='PAYMENT_DUE_DATE', index=3, number=3,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CURRENCY', index=4, number=4,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='TOTAL_VAT', index=5, number=5,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='TOTAL_INCL_VAT', index=6, number=6,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='TOTAL_EXCL_VAT', index=7, number=7,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='SUPPLIER_CORPORATE_ID', index=8, number=8,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='SUPPLIER_COUNTRY_CODE', index=9, number=9,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='DOCUMENT_TYPE', index=10, number=10,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='PAYMENT_METHOD', index=11, number=11,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CREDIT_CARD_LAST_FOUR', index=12, number=12,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='INVOICE_NUMBER', index=13, number=13,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='OCR_LINE_DK_TYPE', index=14, number=14,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='OCR_LINE_DK_PAYMENT_ID', index=15, number=15,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='OCR_LINE_DK_CREDITOR_ID', index=16, number=16,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='OCR_LINE_SE_PAYMENT_ID', index=17, number=17,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='OCR_LINE_SE_BANKGIRO_CREDITOR_ID', index=18, number=18,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='OCR_LINE_SE_PLUSGIRO_CREDITOR_ID', index=19, number=19,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='OCR_LINE_NO_PAYMENT_ID', index=20, number=20,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='OCR_LINE_FI_PAYMENT_ID', index=21, number=21,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='OCR_LINE_NL_PAYMENT_ID', index=22, number=22,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='TEXT', index=23, number=23,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='IBAN', index=24, number=24,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='LINES', index=25, number=25,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='PREVIEW', index=26, number=26,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=274,
  serialized_end=872,
)
_sym_db.RegisterEnumDescriptor(_FEATURE_TYPE)


_FEATURE = _descriptor.Descriptor(
  name='Feature',
  full_name='ssn.annotator.v1.Feature',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='type', full_name='ssn.annotator.v1.Feature.type', index=0,
      number=1, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='max_results', full_name='ssn.annotator.v1.Feature.max_results', index=1,
      number=2, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='min_confidence', full_name='ssn.annotator.v1.Feature.min_confidence', index=2,
      number=3, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
    _FEATURE_TYPE,
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=143,
  serialized_end=872,
)


_DOCUMENTANNOTATORREQUEST = _descriptor.Descriptor(
  name='DocumentAnnotatorRequest',
  full_name='ssn.annotator.v1.DocumentAnnotatorRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='document', full_name='ssn.annotator.v1.DocumentAnnotatorRequest.document', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='features', full_name='ssn.annotator.v1.DocumentAnnotatorRequest.features', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='tags', full_name='ssn.annotator.v1.DocumentAnnotatorRequest.tags', index=2,
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
  serialized_start=875,
  serialized_end=1006,
)


_DOCUMENTANNOTATORRESPONSE = _descriptor.Descriptor(
  name='DocumentAnnotatorResponse',
  full_name='ssn.annotator.v1.DocumentAnnotatorResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='order_date', full_name='ssn.annotator.v1.DocumentAnnotatorResponse.order_date', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='payment_due_date', full_name='ssn.annotator.v1.DocumentAnnotatorResponse.payment_due_date', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='currency', full_name='ssn.annotator.v1.DocumentAnnotatorResponse.currency', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='total_vat', full_name='ssn.annotator.v1.DocumentAnnotatorResponse.total_vat', index=3,
      number=4, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='total_incl_vat', full_name='ssn.annotator.v1.DocumentAnnotatorResponse.total_incl_vat', index=4,
      number=5, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='total_excl_vat', full_name='ssn.annotator.v1.DocumentAnnotatorResponse.total_excl_vat', index=5,
      number=6, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='supplier_corporate_id', full_name='ssn.annotator.v1.DocumentAnnotatorResponse.supplier_corporate_id', index=6,
      number=7, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='supplier_country_code', full_name='ssn.annotator.v1.DocumentAnnotatorResponse.supplier_country_code', index=7,
      number=8, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='document_type', full_name='ssn.annotator.v1.DocumentAnnotatorResponse.document_type', index=8,
      number=9, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='payment_method', full_name='ssn.annotator.v1.DocumentAnnotatorResponse.payment_method', index=9,
      number=10, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='credit_card_last_four', full_name='ssn.annotator.v1.DocumentAnnotatorResponse.credit_card_last_four', index=10,
      number=11, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='invoice_number', full_name='ssn.annotator.v1.DocumentAnnotatorResponse.invoice_number', index=11,
      number=12, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='text_annotation', full_name='ssn.annotator.v1.DocumentAnnotatorResponse.text_annotation', index=12,
      number=13, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='ocr_line_dk_type', full_name='ssn.annotator.v1.DocumentAnnotatorResponse.ocr_line_dk_type', index=13,
      number=14, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='ocr_line_dk_payment_id', full_name='ssn.annotator.v1.DocumentAnnotatorResponse.ocr_line_dk_payment_id', index=14,
      number=15, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='ocr_line_dk_creditor_id', full_name='ssn.annotator.v1.DocumentAnnotatorResponse.ocr_line_dk_creditor_id', index=15,
      number=16, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='ocr_line_se_payment_id', full_name='ssn.annotator.v1.DocumentAnnotatorResponse.ocr_line_se_payment_id', index=16,
      number=17, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='ocr_line_se_bankgiro_creditor_id', full_name='ssn.annotator.v1.DocumentAnnotatorResponse.ocr_line_se_bankgiro_creditor_id', index=17,
      number=18, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='ocr_line_se_plusgiro_creditor_id', full_name='ssn.annotator.v1.DocumentAnnotatorResponse.ocr_line_se_plusgiro_creditor_id', index=18,
      number=19, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='ocr_line_no_payment_id', full_name='ssn.annotator.v1.DocumentAnnotatorResponse.ocr_line_no_payment_id', index=19,
      number=20, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='ocr_line_fi_payment_id', full_name='ssn.annotator.v1.DocumentAnnotatorResponse.ocr_line_fi_payment_id', index=20,
      number=21, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='ocr_line_nl_payment_id', full_name='ssn.annotator.v1.DocumentAnnotatorResponse.ocr_line_nl_payment_id', index=21,
      number=22, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='text', full_name='ssn.annotator.v1.DocumentAnnotatorResponse.text', index=22,
      number=23, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='feedback_id', full_name='ssn.annotator.v1.DocumentAnnotatorResponse.feedback_id', index=23,
      number=24, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='iban', full_name='ssn.annotator.v1.DocumentAnnotatorResponse.iban', index=24,
      number=25, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='lines', full_name='ssn.annotator.v1.DocumentAnnotatorResponse.lines', index=25,
      number=26, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='preview', full_name='ssn.annotator.v1.DocumentAnnotatorResponse.preview', index=26,
      number=27, type=9, cpp_type=9, label=1,
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
  serialized_start=1009,
  serialized_end=2253,
)


_DOCUMENT = _descriptor.Descriptor(
  name='Document',
  full_name='ssn.annotator.v1.Document',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='content', full_name='ssn.annotator.v1.Document.content', index=0,
      number=1, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='source', full_name='ssn.annotator.v1.Document.source', index=1,
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
  serialized_start=2255,
  serialized_end=2332,
)


_DOCUMENTSOURCE = _descriptor.Descriptor(
  name='DocumentSource',
  full_name='ssn.annotator.v1.DocumentSource',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='http_uri', full_name='ssn.annotator.v1.DocumentSource.http_uri', index=0,
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
  serialized_start=2334,
  serialized_end=2368,
)

_FEATURE.fields_by_name['type'].enum_type = _FEATURE_TYPE
_FEATURE.fields_by_name['min_confidence'].enum_type = ssn_dot_type_dot_candidate__pb2._CONFIDENCE_LEVEL
_FEATURE_TYPE.containing_type = _FEATURE
_DOCUMENTANNOTATORREQUEST.fields_by_name['document'].message_type = _DOCUMENT
_DOCUMENTANNOTATORREQUEST.fields_by_name['features'].message_type = _FEATURE
_DOCUMENTANNOTATORRESPONSE.fields_by_name['order_date'].message_type = ssn_dot_type_dot_candidate__pb2._CANDIDATE
_DOCUMENTANNOTATORRESPONSE.fields_by_name['payment_due_date'].message_type = ssn_dot_type_dot_candidate__pb2._CANDIDATE
_DOCUMENTANNOTATORRESPONSE.fields_by_name['currency'].message_type = ssn_dot_type_dot_candidate__pb2._CANDIDATE
_DOCUMENTANNOTATORRESPONSE.fields_by_name['total_vat'].message_type = ssn_dot_type_dot_candidate__pb2._CANDIDATE
_DOCUMENTANNOTATORRESPONSE.fields_by_name['total_incl_vat'].message_type = ssn_dot_type_dot_candidate__pb2._CANDIDATE
_DOCUMENTANNOTATORRESPONSE.fields_by_name['total_excl_vat'].message_type = ssn_dot_type_dot_candidate__pb2._CANDIDATE
_DOCUMENTANNOTATORRESPONSE.fields_by_name['supplier_corporate_id'].message_type = ssn_dot_type_dot_candidate__pb2._CANDIDATE
_DOCUMENTANNOTATORRESPONSE.fields_by_name['supplier_country_code'].message_type = ssn_dot_type_dot_candidate__pb2._CANDIDATE
_DOCUMENTANNOTATORRESPONSE.fields_by_name['document_type'].message_type = ssn_dot_type_dot_candidate__pb2._CANDIDATE
_DOCUMENTANNOTATORRESPONSE.fields_by_name['payment_method'].message_type = ssn_dot_type_dot_candidate__pb2._CANDIDATE
_DOCUMENTANNOTATORRESPONSE.fields_by_name['credit_card_last_four'].message_type = ssn_dot_type_dot_candidate__pb2._CANDIDATE
_DOCUMENTANNOTATORRESPONSE.fields_by_name['invoice_number'].message_type = ssn_dot_type_dot_candidate__pb2._CANDIDATE
_DOCUMENTANNOTATORRESPONSE.fields_by_name['text_annotation'].message_type = ssn_dot_type_dot_text__annotation__pb2._TEXTANNOTATION
_DOCUMENTANNOTATORRESPONSE.fields_by_name['ocr_line_dk_type'].message_type = ssn_dot_type_dot_candidate__pb2._CANDIDATE
_DOCUMENTANNOTATORRESPONSE.fields_by_name['ocr_line_dk_payment_id'].message_type = ssn_dot_type_dot_candidate__pb2._CANDIDATE
_DOCUMENTANNOTATORRESPONSE.fields_by_name['ocr_line_dk_creditor_id'].message_type = ssn_dot_type_dot_candidate__pb2._CANDIDATE
_DOCUMENTANNOTATORRESPONSE.fields_by_name['ocr_line_se_payment_id'].message_type = ssn_dot_type_dot_candidate__pb2._CANDIDATE
_DOCUMENTANNOTATORRESPONSE.fields_by_name['ocr_line_se_bankgiro_creditor_id'].message_type = ssn_dot_type_dot_candidate__pb2._CANDIDATE
_DOCUMENTANNOTATORRESPONSE.fields_by_name['ocr_line_se_plusgiro_creditor_id'].message_type = ssn_dot_type_dot_candidate__pb2._CANDIDATE
_DOCUMENTANNOTATORRESPONSE.fields_by_name['ocr_line_no_payment_id'].message_type = ssn_dot_type_dot_candidate__pb2._CANDIDATE
_DOCUMENTANNOTATORRESPONSE.fields_by_name['ocr_line_fi_payment_id'].message_type = ssn_dot_type_dot_candidate__pb2._CANDIDATE
_DOCUMENTANNOTATORRESPONSE.fields_by_name['ocr_line_nl_payment_id'].message_type = ssn_dot_type_dot_candidate__pb2._CANDIDATE
_DOCUMENTANNOTATORRESPONSE.fields_by_name['iban'].message_type = ssn_dot_type_dot_candidate__pb2._CANDIDATE
_DOCUMENTANNOTATORRESPONSE.fields_by_name['lines'].message_type = ssn_dot_type_dot_candidate__pb2._LINECANDIDATE
_DOCUMENT.fields_by_name['source'].message_type = _DOCUMENTSOURCE
DESCRIPTOR.message_types_by_name['Feature'] = _FEATURE
DESCRIPTOR.message_types_by_name['DocumentAnnotatorRequest'] = _DOCUMENTANNOTATORREQUEST
DESCRIPTOR.message_types_by_name['DocumentAnnotatorResponse'] = _DOCUMENTANNOTATORRESPONSE
DESCRIPTOR.message_types_by_name['Document'] = _DOCUMENT
DESCRIPTOR.message_types_by_name['DocumentSource'] = _DOCUMENTSOURCE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Feature = _reflection.GeneratedProtocolMessageType('Feature', (_message.Message,), dict(
  DESCRIPTOR = _FEATURE,
  __module__ = 'ssn.annotator.v1.annotator_pb2'
  # @@protoc_insertion_point(class_scope:ssn.annotator.v1.Feature)
  ))
_sym_db.RegisterMessage(Feature)

DocumentAnnotatorRequest = _reflection.GeneratedProtocolMessageType('DocumentAnnotatorRequest', (_message.Message,), dict(
  DESCRIPTOR = _DOCUMENTANNOTATORREQUEST,
  __module__ = 'ssn.annotator.v1.annotator_pb2'
  # @@protoc_insertion_point(class_scope:ssn.annotator.v1.DocumentAnnotatorRequest)
  ))
_sym_db.RegisterMessage(DocumentAnnotatorRequest)

DocumentAnnotatorResponse = _reflection.GeneratedProtocolMessageType('DocumentAnnotatorResponse', (_message.Message,), dict(
  DESCRIPTOR = _DOCUMENTANNOTATORRESPONSE,
  __module__ = 'ssn.annotator.v1.annotator_pb2'
  # @@protoc_insertion_point(class_scope:ssn.annotator.v1.DocumentAnnotatorResponse)
  ))
_sym_db.RegisterMessage(DocumentAnnotatorResponse)

Document = _reflection.GeneratedProtocolMessageType('Document', (_message.Message,), dict(
  DESCRIPTOR = _DOCUMENT,
  __module__ = 'ssn.annotator.v1.annotator_pb2'
  # @@protoc_insertion_point(class_scope:ssn.annotator.v1.Document)
  ))
_sym_db.RegisterMessage(Document)

DocumentSource = _reflection.GeneratedProtocolMessageType('DocumentSource', (_message.Message,), dict(
  DESCRIPTOR = _DOCUMENTSOURCE,
  __module__ = 'ssn.annotator.v1.annotator_pb2'
  # @@protoc_insertion_point(class_scope:ssn.annotator.v1.DocumentSource)
  ))
_sym_db.RegisterMessage(DocumentSource)


DESCRIPTOR._options = None

_DOCUMENTANNOTATOR = _descriptor.ServiceDescriptor(
  name='DocumentAnnotator',
  full_name='ssn.annotator.v1.DocumentAnnotator',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=2371,
  serialized_end=2534,
  methods=[
  _descriptor.MethodDescriptor(
    name='AnnotateDocument',
    full_name='ssn.annotator.v1.DocumentAnnotator.AnnotateDocument',
    index=0,
    containing_service=None,
    input_type=_DOCUMENTANNOTATORREQUEST,
    output_type=_DOCUMENTANNOTATORRESPONSE,
    serialized_options=_b('\202\323\344\223\002\032\"\025/v1/document:annotate:\001*'),
  ),
])
_sym_db.RegisterServiceDescriptor(_DOCUMENTANNOTATOR)

DESCRIPTOR.services_by_name['DocumentAnnotator'] = _DOCUMENTANNOTATOR

# @@protoc_insertion_point(module_scope)
