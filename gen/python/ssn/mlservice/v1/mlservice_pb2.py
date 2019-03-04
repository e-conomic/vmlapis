# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ssn/mlservice/v1/mlservice.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from ssn.ocrservice.v1 import ocrservice_pb2 as ssn_dot_ocrservice_dot_v1_dot_ocrservice__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='ssn/mlservice/v1/mlservice.proto',
  package='ssn.mlservice.v1',
  syntax='proto3',
  serialized_options=_b('Z\tmlservice'),
  serialized_pb=_b('\n ssn/mlservice/v1/mlservice.proto\x12\x10ssn.mlservice.v1\x1a\"ssn/ocrservice/v1/ocrservice.proto\"3\n\x0ePredictedField\x12\r\n\x05value\x18\x01 \x01(\t\x12\x12\n\nconfidence\x18\x02 \x01(\x02\"K\n\tMlRequest\x12>\n\rocr_responses\x18\x01 \x03(\x0b\x32\'.ssn.ocrservice.v1.OcrScanImageResponse\"\xcf\x0c\n\nMlResponse\x12\x34\n\norder_date\x18\x01 \x01(\x0b\x32 .ssn.mlservice.v1.PredictedField\x12:\n\x10payment_due_date\x18\x02 \x01(\x0b\x32 .ssn.mlservice.v1.PredictedField\x12\x32\n\x08\x63urrency\x18\x03 \x01(\x0b\x32 .ssn.mlservice.v1.PredictedField\x12\x33\n\ttotal_vat\x18\x04 \x01(\x0b\x32 .ssn.mlservice.v1.PredictedField\x12\x38\n\x0etotal_incl_vat\x18\x05 \x01(\x0b\x32 .ssn.mlservice.v1.PredictedField\x12\x38\n\x0etotal_excl_vat\x18\x06 \x01(\x0b\x32 .ssn.mlservice.v1.PredictedField\x12?\n\x15supplier_corporate_id\x18\x07 \x03(\x0b\x32 .ssn.mlservice.v1.PredictedField\x12?\n\x15supplier_country_code\x18\x08 \x01(\x0b\x32 .ssn.mlservice.v1.PredictedField\x12\x37\n\rdocument_type\x18\t \x01(\x0b\x32 .ssn.mlservice.v1.PredictedField\x12\x38\n\x0epayment_method\x18\n \x01(\x0b\x32 .ssn.mlservice.v1.PredictedField\x12\x46\n\x1c\x63redit_card_last_four_digits\x18\x0b \x01(\x0b\x32 .ssn.mlservice.v1.PredictedField\x12\x38\n\x0einvoice_number\x18\x11 \x01(\x0b\x32 .ssn.mlservice.v1.PredictedField\x12<\n\nocr_ine_dk\x18\x0c \x01(\x0b\x32&.ssn.mlservice.v1.MlResponse.OcrLineDkH\x00\x12=\n\x0bocr_line_se\x18\r \x01(\x0b\x32&.ssn.mlservice.v1.MlResponse.OcrLineSeH\x00\x12=\n\x0bocr_line_no\x18\x0e \x01(\x0b\x32&.ssn.mlservice.v1.MlResponse.OcrLineNoH\x00\x12=\n\x0bocr_line_fi\x18\x0f \x01(\x0b\x32&.ssn.mlservice.v1.MlResponse.OcrLineFiH\x00\x12=\n\x0bocr_line_nl\x18\x10 \x01(\x0b\x32&.ssn.mlservice.v1.MlResponse.OcrLineNlH\x00\x1a\xa8\x01\n\tOcrLineDk\x12.\n\x04type\x18\x01 \x01(\x0b\x32 .ssn.mlservice.v1.PredictedField\x12\x34\n\npayment_id\x18\x02 \x01(\x0b\x32 .ssn.mlservice.v1.PredictedField\x12\x35\n\x0b\x63reditor_id\x18\x03 \x01(\x0b\x32 .ssn.mlservice.v1.PredictedField\x1a\xc1\x01\n\tOcrLineSe\x12\x34\n\npayment_id\x18\x01 \x01(\x0b\x32 .ssn.mlservice.v1.PredictedField\x12>\n\x14\x62\x61nkgiro_creditor_id\x18\x02 \x01(\x0b\x32 .ssn.mlservice.v1.PredictedField\x12>\n\x14plusgiro_creditor_id\x18\x03 \x01(\x0b\x32 .ssn.mlservice.v1.PredictedField\x1a\x41\n\tOcrLineNo\x12\x34\n\npayment_id\x18\x01 \x01(\x0b\x32 .ssn.mlservice.v1.PredictedField\x1a\x41\n\tOcrLineNl\x12\x34\n\npayment_id\x18\x01 \x01(\x0b\x32 .ssn.mlservice.v1.PredictedField\x1a\x41\n\tOcrLineFi\x12\x34\n\npayment_id\x18\x01 \x01(\x0b\x32 .ssn.mlservice.v1.PredictedFieldB\t\n\x07ocrLine2W\n\tMlService\x12J\n\rGetPrediction\x12\x1b.ssn.mlservice.v1.MlRequest\x1a\x1c.ssn.mlservice.v1.MlResponseB\x0bZ\tmlserviceb\x06proto3')
  ,
  dependencies=[ssn_dot_ocrservice_dot_v1_dot_ocrservice__pb2.DESCRIPTOR,])




_PREDICTEDFIELD = _descriptor.Descriptor(
  name='PredictedField',
  full_name='ssn.mlservice.v1.PredictedField',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='value', full_name='ssn.mlservice.v1.PredictedField.value', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='confidence', full_name='ssn.mlservice.v1.PredictedField.confidence', index=1,
      number=2, type=2, cpp_type=6, label=1,
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
  serialized_start=90,
  serialized_end=141,
)


_MLREQUEST = _descriptor.Descriptor(
  name='MlRequest',
  full_name='ssn.mlservice.v1.MlRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='ocr_responses', full_name='ssn.mlservice.v1.MlRequest.ocr_responses', index=0,
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
  serialized_start=143,
  serialized_end=218,
)


_MLRESPONSE_OCRLINEDK = _descriptor.Descriptor(
  name='OcrLineDk',
  full_name='ssn.mlservice.v1.MlResponse.OcrLineDk',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='type', full_name='ssn.mlservice.v1.MlResponse.OcrLineDk.type', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='payment_id', full_name='ssn.mlservice.v1.MlResponse.OcrLineDk.payment_id', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='creditor_id', full_name='ssn.mlservice.v1.MlResponse.OcrLineDk.creditor_id', index=2,
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
  ],
  serialized_start=1260,
  serialized_end=1428,
)

_MLRESPONSE_OCRLINESE = _descriptor.Descriptor(
  name='OcrLineSe',
  full_name='ssn.mlservice.v1.MlResponse.OcrLineSe',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='payment_id', full_name='ssn.mlservice.v1.MlResponse.OcrLineSe.payment_id', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='bankgiro_creditor_id', full_name='ssn.mlservice.v1.MlResponse.OcrLineSe.bankgiro_creditor_id', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='plusgiro_creditor_id', full_name='ssn.mlservice.v1.MlResponse.OcrLineSe.plusgiro_creditor_id', index=2,
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
  ],
  serialized_start=1431,
  serialized_end=1624,
)

_MLRESPONSE_OCRLINENO = _descriptor.Descriptor(
  name='OcrLineNo',
  full_name='ssn.mlservice.v1.MlResponse.OcrLineNo',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='payment_id', full_name='ssn.mlservice.v1.MlResponse.OcrLineNo.payment_id', index=0,
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
  serialized_start=1626,
  serialized_end=1691,
)

_MLRESPONSE_OCRLINENL = _descriptor.Descriptor(
  name='OcrLineNl',
  full_name='ssn.mlservice.v1.MlResponse.OcrLineNl',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='payment_id', full_name='ssn.mlservice.v1.MlResponse.OcrLineNl.payment_id', index=0,
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
  serialized_start=1693,
  serialized_end=1758,
)

_MLRESPONSE_OCRLINEFI = _descriptor.Descriptor(
  name='OcrLineFi',
  full_name='ssn.mlservice.v1.MlResponse.OcrLineFi',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='payment_id', full_name='ssn.mlservice.v1.MlResponse.OcrLineFi.payment_id', index=0,
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
  serialized_start=1760,
  serialized_end=1825,
)

_MLRESPONSE = _descriptor.Descriptor(
  name='MlResponse',
  full_name='ssn.mlservice.v1.MlResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='order_date', full_name='ssn.mlservice.v1.MlResponse.order_date', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='payment_due_date', full_name='ssn.mlservice.v1.MlResponse.payment_due_date', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='currency', full_name='ssn.mlservice.v1.MlResponse.currency', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='total_vat', full_name='ssn.mlservice.v1.MlResponse.total_vat', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='total_incl_vat', full_name='ssn.mlservice.v1.MlResponse.total_incl_vat', index=4,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='total_excl_vat', full_name='ssn.mlservice.v1.MlResponse.total_excl_vat', index=5,
      number=6, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='supplier_corporate_id', full_name='ssn.mlservice.v1.MlResponse.supplier_corporate_id', index=6,
      number=7, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='supplier_country_code', full_name='ssn.mlservice.v1.MlResponse.supplier_country_code', index=7,
      number=8, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='document_type', full_name='ssn.mlservice.v1.MlResponse.document_type', index=8,
      number=9, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='payment_method', full_name='ssn.mlservice.v1.MlResponse.payment_method', index=9,
      number=10, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='credit_card_last_four_digits', full_name='ssn.mlservice.v1.MlResponse.credit_card_last_four_digits', index=10,
      number=11, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='invoice_number', full_name='ssn.mlservice.v1.MlResponse.invoice_number', index=11,
      number=17, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='ocr_ine_dk', full_name='ssn.mlservice.v1.MlResponse.ocr_ine_dk', index=12,
      number=12, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='ocr_line_se', full_name='ssn.mlservice.v1.MlResponse.ocr_line_se', index=13,
      number=13, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='ocr_line_no', full_name='ssn.mlservice.v1.MlResponse.ocr_line_no', index=14,
      number=14, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='ocr_line_fi', full_name='ssn.mlservice.v1.MlResponse.ocr_line_fi', index=15,
      number=15, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='ocr_line_nl', full_name='ssn.mlservice.v1.MlResponse.ocr_line_nl', index=16,
      number=16, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_MLRESPONSE_OCRLINEDK, _MLRESPONSE_OCRLINESE, _MLRESPONSE_OCRLINENO, _MLRESPONSE_OCRLINENL, _MLRESPONSE_OCRLINEFI, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
    _descriptor.OneofDescriptor(
      name='ocrLine', full_name='ssn.mlservice.v1.MlResponse.ocrLine',
      index=0, containing_type=None, fields=[]),
  ],
  serialized_start=221,
  serialized_end=1836,
)

_MLREQUEST.fields_by_name['ocr_responses'].message_type = ssn_dot_ocrservice_dot_v1_dot_ocrservice__pb2._OCRSCANIMAGERESPONSE
_MLRESPONSE_OCRLINEDK.fields_by_name['type'].message_type = _PREDICTEDFIELD
_MLRESPONSE_OCRLINEDK.fields_by_name['payment_id'].message_type = _PREDICTEDFIELD
_MLRESPONSE_OCRLINEDK.fields_by_name['creditor_id'].message_type = _PREDICTEDFIELD
_MLRESPONSE_OCRLINEDK.containing_type = _MLRESPONSE
_MLRESPONSE_OCRLINESE.fields_by_name['payment_id'].message_type = _PREDICTEDFIELD
_MLRESPONSE_OCRLINESE.fields_by_name['bankgiro_creditor_id'].message_type = _PREDICTEDFIELD
_MLRESPONSE_OCRLINESE.fields_by_name['plusgiro_creditor_id'].message_type = _PREDICTEDFIELD
_MLRESPONSE_OCRLINESE.containing_type = _MLRESPONSE
_MLRESPONSE_OCRLINENO.fields_by_name['payment_id'].message_type = _PREDICTEDFIELD
_MLRESPONSE_OCRLINENO.containing_type = _MLRESPONSE
_MLRESPONSE_OCRLINENL.fields_by_name['payment_id'].message_type = _PREDICTEDFIELD
_MLRESPONSE_OCRLINENL.containing_type = _MLRESPONSE
_MLRESPONSE_OCRLINEFI.fields_by_name['payment_id'].message_type = _PREDICTEDFIELD
_MLRESPONSE_OCRLINEFI.containing_type = _MLRESPONSE
_MLRESPONSE.fields_by_name['order_date'].message_type = _PREDICTEDFIELD
_MLRESPONSE.fields_by_name['payment_due_date'].message_type = _PREDICTEDFIELD
_MLRESPONSE.fields_by_name['currency'].message_type = _PREDICTEDFIELD
_MLRESPONSE.fields_by_name['total_vat'].message_type = _PREDICTEDFIELD
_MLRESPONSE.fields_by_name['total_incl_vat'].message_type = _PREDICTEDFIELD
_MLRESPONSE.fields_by_name['total_excl_vat'].message_type = _PREDICTEDFIELD
_MLRESPONSE.fields_by_name['supplier_corporate_id'].message_type = _PREDICTEDFIELD
_MLRESPONSE.fields_by_name['supplier_country_code'].message_type = _PREDICTEDFIELD
_MLRESPONSE.fields_by_name['document_type'].message_type = _PREDICTEDFIELD
_MLRESPONSE.fields_by_name['payment_method'].message_type = _PREDICTEDFIELD
_MLRESPONSE.fields_by_name['credit_card_last_four_digits'].message_type = _PREDICTEDFIELD
_MLRESPONSE.fields_by_name['invoice_number'].message_type = _PREDICTEDFIELD
_MLRESPONSE.fields_by_name['ocr_ine_dk'].message_type = _MLRESPONSE_OCRLINEDK
_MLRESPONSE.fields_by_name['ocr_line_se'].message_type = _MLRESPONSE_OCRLINESE
_MLRESPONSE.fields_by_name['ocr_line_no'].message_type = _MLRESPONSE_OCRLINENO
_MLRESPONSE.fields_by_name['ocr_line_fi'].message_type = _MLRESPONSE_OCRLINEFI
_MLRESPONSE.fields_by_name['ocr_line_nl'].message_type = _MLRESPONSE_OCRLINENL
_MLRESPONSE.oneofs_by_name['ocrLine'].fields.append(
  _MLRESPONSE.fields_by_name['ocr_ine_dk'])
_MLRESPONSE.fields_by_name['ocr_ine_dk'].containing_oneof = _MLRESPONSE.oneofs_by_name['ocrLine']
_MLRESPONSE.oneofs_by_name['ocrLine'].fields.append(
  _MLRESPONSE.fields_by_name['ocr_line_se'])
_MLRESPONSE.fields_by_name['ocr_line_se'].containing_oneof = _MLRESPONSE.oneofs_by_name['ocrLine']
_MLRESPONSE.oneofs_by_name['ocrLine'].fields.append(
  _MLRESPONSE.fields_by_name['ocr_line_no'])
_MLRESPONSE.fields_by_name['ocr_line_no'].containing_oneof = _MLRESPONSE.oneofs_by_name['ocrLine']
_MLRESPONSE.oneofs_by_name['ocrLine'].fields.append(
  _MLRESPONSE.fields_by_name['ocr_line_fi'])
_MLRESPONSE.fields_by_name['ocr_line_fi'].containing_oneof = _MLRESPONSE.oneofs_by_name['ocrLine']
_MLRESPONSE.oneofs_by_name['ocrLine'].fields.append(
  _MLRESPONSE.fields_by_name['ocr_line_nl'])
_MLRESPONSE.fields_by_name['ocr_line_nl'].containing_oneof = _MLRESPONSE.oneofs_by_name['ocrLine']
DESCRIPTOR.message_types_by_name['PredictedField'] = _PREDICTEDFIELD
DESCRIPTOR.message_types_by_name['MlRequest'] = _MLREQUEST
DESCRIPTOR.message_types_by_name['MlResponse'] = _MLRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

PredictedField = _reflection.GeneratedProtocolMessageType('PredictedField', (_message.Message,), dict(
  DESCRIPTOR = _PREDICTEDFIELD,
  __module__ = 'ssn.mlservice.v1.mlservice_pb2'
  # @@protoc_insertion_point(class_scope:ssn.mlservice.v1.PredictedField)
  ))
_sym_db.RegisterMessage(PredictedField)

MlRequest = _reflection.GeneratedProtocolMessageType('MlRequest', (_message.Message,), dict(
  DESCRIPTOR = _MLREQUEST,
  __module__ = 'ssn.mlservice.v1.mlservice_pb2'
  # @@protoc_insertion_point(class_scope:ssn.mlservice.v1.MlRequest)
  ))
_sym_db.RegisterMessage(MlRequest)

MlResponse = _reflection.GeneratedProtocolMessageType('MlResponse', (_message.Message,), dict(

  OcrLineDk = _reflection.GeneratedProtocolMessageType('OcrLineDk', (_message.Message,), dict(
    DESCRIPTOR = _MLRESPONSE_OCRLINEDK,
    __module__ = 'ssn.mlservice.v1.mlservice_pb2'
    # @@protoc_insertion_point(class_scope:ssn.mlservice.v1.MlResponse.OcrLineDk)
    ))
  ,

  OcrLineSe = _reflection.GeneratedProtocolMessageType('OcrLineSe', (_message.Message,), dict(
    DESCRIPTOR = _MLRESPONSE_OCRLINESE,
    __module__ = 'ssn.mlservice.v1.mlservice_pb2'
    # @@protoc_insertion_point(class_scope:ssn.mlservice.v1.MlResponse.OcrLineSe)
    ))
  ,

  OcrLineNo = _reflection.GeneratedProtocolMessageType('OcrLineNo', (_message.Message,), dict(
    DESCRIPTOR = _MLRESPONSE_OCRLINENO,
    __module__ = 'ssn.mlservice.v1.mlservice_pb2'
    # @@protoc_insertion_point(class_scope:ssn.mlservice.v1.MlResponse.OcrLineNo)
    ))
  ,

  OcrLineNl = _reflection.GeneratedProtocolMessageType('OcrLineNl', (_message.Message,), dict(
    DESCRIPTOR = _MLRESPONSE_OCRLINENL,
    __module__ = 'ssn.mlservice.v1.mlservice_pb2'
    # @@protoc_insertion_point(class_scope:ssn.mlservice.v1.MlResponse.OcrLineNl)
    ))
  ,

  OcrLineFi = _reflection.GeneratedProtocolMessageType('OcrLineFi', (_message.Message,), dict(
    DESCRIPTOR = _MLRESPONSE_OCRLINEFI,
    __module__ = 'ssn.mlservice.v1.mlservice_pb2'
    # @@protoc_insertion_point(class_scope:ssn.mlservice.v1.MlResponse.OcrLineFi)
    ))
  ,
  DESCRIPTOR = _MLRESPONSE,
  __module__ = 'ssn.mlservice.v1.mlservice_pb2'
  # @@protoc_insertion_point(class_scope:ssn.mlservice.v1.MlResponse)
  ))
_sym_db.RegisterMessage(MlResponse)
_sym_db.RegisterMessage(MlResponse.OcrLineDk)
_sym_db.RegisterMessage(MlResponse.OcrLineSe)
_sym_db.RegisterMessage(MlResponse.OcrLineNo)
_sym_db.RegisterMessage(MlResponse.OcrLineNl)
_sym_db.RegisterMessage(MlResponse.OcrLineFi)


DESCRIPTOR._options = None

_MLSERVICE = _descriptor.ServiceDescriptor(
  name='MlService',
  full_name='ssn.mlservice.v1.MlService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=1838,
  serialized_end=1925,
  methods=[
  _descriptor.MethodDescriptor(
    name='GetPrediction',
    full_name='ssn.mlservice.v1.MlService.GetPrediction',
    index=0,
    containing_service=None,
    input_type=_MLREQUEST,
    output_type=_MLRESPONSE,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_MLSERVICE)

DESCRIPTOR.services_by_name['MlService'] = _MLSERVICE

# @@protoc_insertion_point(module_scope)