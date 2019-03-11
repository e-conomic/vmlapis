# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ssn/scanner/v1/scanner.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from lyft.validate import validate_pb2 as lyft_dot_validate_dot_validate__pb2
from ssn.mlservice.v1 import mlservice_pb2 as ssn_dot_mlservice_dot_v1_dot_mlservice__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='ssn/scanner/v1/scanner.proto',
  package='ssn.scanner.v1',
  syntax='proto3',
  serialized_options=_b('Z\007scanner'),
  serialized_pb=_b('\n\x1cssn/scanner/v1/scanner.proto\x12\x0essn.scanner.v1\x1a\x1cgoogle/api/annotations.proto\x1a\x1clyft/validate/validate.proto\x1a ssn/mlservice/v1/mlservice.proto\"\x88\x01\n\x07\x46\x65\x61ture\x12*\n\x04type\x18\x01 \x01(\x0e\x32\x1c.ssn.scanner.v1.Feature.Type\"Q\n\x04Type\x12\x1c\n\x18\x44OCUMENT_FIELD_DETECTION\x10\x00\x12\x16\n\x12RAW_TEXT_DETECTION\x10\x01\x12\x13\n\x0f\x41LPHA_TESS_HOCR\x10\x02\"S\n\x0bScanRequest\x12\x19\n\x05image\x18\x01 \x01(\x0c\x42\n\xba\xe9\xc0\x03\x05z\x03\x10\x85\x02\x12)\n\x08\x66\x65\x61tures\x18\x02 \x03(\x0b\x32\x17.ssn.scanner.v1.Feature\"\x83\x01\n\x0cScanResponse\x12>\n\x18\x64ocument_field_detection\x18\x01 \x01(\x0b\x32\x1c.ssn.mlservice.v1.MlResponse\x12\x1a\n\x12raw_text_detection\x18\x02 \x01(\t\x12\x17\n\x0f\x61lpha_tess_hocr\x18\x03 \x03(\t2a\n\x07Scanner\x12V\n\x04Scan\x12\x1b.ssn.scanner.v1.ScanRequest\x1a\x1c.ssn.scanner.v1.ScanResponse\"\x13\x82\xd3\xe4\x93\x02\r\"\x08/v1/scan:\x01*B\tZ\x07scannerb\x06proto3')
  ,
  dependencies=[google_dot_api_dot_annotations__pb2.DESCRIPTOR,lyft_dot_validate_dot_validate__pb2.DESCRIPTOR,ssn_dot_mlservice_dot_v1_dot_mlservice__pb2.DESCRIPTOR,])



_FEATURE_TYPE = _descriptor.EnumDescriptor(
  name='Type',
  full_name='ssn.scanner.v1.Feature.Type',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='DOCUMENT_FIELD_DETECTION', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='RAW_TEXT_DETECTION', index=1, number=1,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='ALPHA_TESS_HOCR', index=2, number=2,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=198,
  serialized_end=279,
)
_sym_db.RegisterEnumDescriptor(_FEATURE_TYPE)


_FEATURE = _descriptor.Descriptor(
  name='Feature',
  full_name='ssn.scanner.v1.Feature',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='type', full_name='ssn.scanner.v1.Feature.type', index=0,
      number=1, type=14, cpp_type=8, label=1,
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
  serialized_end=279,
)


_SCANREQUEST = _descriptor.Descriptor(
  name='ScanRequest',
  full_name='ssn.scanner.v1.ScanRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='image', full_name='ssn.scanner.v1.ScanRequest.image', index=0,
      number=1, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\272\351\300\003\005z\003\020\205\002'), file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='features', full_name='ssn.scanner.v1.ScanRequest.features', index=1,
      number=2, type=11, cpp_type=10, label=3,
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
  serialized_start=281,
  serialized_end=364,
)


_SCANRESPONSE = _descriptor.Descriptor(
  name='ScanResponse',
  full_name='ssn.scanner.v1.ScanResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='document_field_detection', full_name='ssn.scanner.v1.ScanResponse.document_field_detection', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='raw_text_detection', full_name='ssn.scanner.v1.ScanResponse.raw_text_detection', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='alpha_tess_hocr', full_name='ssn.scanner.v1.ScanResponse.alpha_tess_hocr', index=2,
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
  serialized_start=367,
  serialized_end=498,
)

_FEATURE.fields_by_name['type'].enum_type = _FEATURE_TYPE
_FEATURE_TYPE.containing_type = _FEATURE
_SCANREQUEST.fields_by_name['features'].message_type = _FEATURE
_SCANRESPONSE.fields_by_name['document_field_detection'].message_type = ssn_dot_mlservice_dot_v1_dot_mlservice__pb2._MLRESPONSE
DESCRIPTOR.message_types_by_name['Feature'] = _FEATURE
DESCRIPTOR.message_types_by_name['ScanRequest'] = _SCANREQUEST
DESCRIPTOR.message_types_by_name['ScanResponse'] = _SCANRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Feature = _reflection.GeneratedProtocolMessageType('Feature', (_message.Message,), dict(
  DESCRIPTOR = _FEATURE,
  __module__ = 'ssn.scanner.v1.scanner_pb2'
  # @@protoc_insertion_point(class_scope:ssn.scanner.v1.Feature)
  ))
_sym_db.RegisterMessage(Feature)

ScanRequest = _reflection.GeneratedProtocolMessageType('ScanRequest', (_message.Message,), dict(
  DESCRIPTOR = _SCANREQUEST,
  __module__ = 'ssn.scanner.v1.scanner_pb2'
  # @@protoc_insertion_point(class_scope:ssn.scanner.v1.ScanRequest)
  ))
_sym_db.RegisterMessage(ScanRequest)

ScanResponse = _reflection.GeneratedProtocolMessageType('ScanResponse', (_message.Message,), dict(
  DESCRIPTOR = _SCANRESPONSE,
  __module__ = 'ssn.scanner.v1.scanner_pb2'
  # @@protoc_insertion_point(class_scope:ssn.scanner.v1.ScanResponse)
  ))
_sym_db.RegisterMessage(ScanResponse)


DESCRIPTOR._options = None
_SCANREQUEST.fields_by_name['image']._options = None

_SCANNER = _descriptor.ServiceDescriptor(
  name='Scanner',
  full_name='ssn.scanner.v1.Scanner',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=500,
  serialized_end=597,
  methods=[
  _descriptor.MethodDescriptor(
    name='Scan',
    full_name='ssn.scanner.v1.Scanner.Scan',
    index=0,
    containing_service=None,
    input_type=_SCANREQUEST,
    output_type=_SCANRESPONSE,
    serialized_options=_b('\202\323\344\223\002\r\"\010/v1/scan:\001*'),
  ),
])
_sym_db.RegisterServiceDescriptor(_SCANNER)

DESCRIPTOR.services_by_name['Scanner'] = _SCANNER

# @@protoc_insertion_point(module_scope)
