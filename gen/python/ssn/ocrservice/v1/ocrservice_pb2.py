# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ssn/ocrservice/v1/ocrservice.proto

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import wrappers_pb2 as google_dot_protobuf_dot_wrappers__pb2
from vml_proto.ssn.annotator.v1 import annotator_pb2 as ssn_dot_annotator_dot_v1_dot_annotator__pb2
from vml_proto.ssn.type import text_annotation_pb2 as ssn_dot_type_dot_text__annotation__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='ssn/ocrservice/v1/ocrservice.proto',
  package='ssn.ocrservice.v1',
  syntax='proto3',
  serialized_options=b'B\017OcrServiceProtoZ@github.com/e-conomic/vmlapis/gen/go/ssn/ocrservice/v1;ocrservice',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\"ssn/ocrservice/v1/ocrservice.proto\x12\x11ssn.ocrservice.v1\x1a\x1egoogle/protobuf/wrappers.proto\x1a ssn/annotator/v1/annotator.proto\x1a\x1essn/type/text_annotation.proto\"Y\n\x18GetTextAnnotationRequest\x12,\n\x08\x64ocument\x18\x02 \x01(\x0b\x32\x1a.ssn.annotator.v1.Document\x12\x0f\n\x07preview\x18\x03 \x01(\x08\"z\n\x19GetTextAnnotationResponse\x12\x31\n\x0ftext_annotation\x18\x02 \x01(\x0b\x32\x18.ssn.type.TextAnnotation\x12*\n\x05image\x18\x03 \x01(\x0b\x32\x1b.google.protobuf.BytesValue\"#\n\x13OcrScanImageRequest\x12\x0c\n\x04\x64\x61ta\x18\x01 \x01(\x0c\")\n\x14OcrScanImageResponse\x12\x11\n\ttess_hocr\x18\x01 \x01(\t2\xdd\x01\n\nOcrService\x12_\n\x0cOcrScanImage\x12&.ssn.ocrservice.v1.OcrScanImageRequest\x1a\'.ssn.ocrservice.v1.OcrScanImageResponse\x12n\n\x11GetTextAnnotation\x12+.ssn.ocrservice.v1.GetTextAnnotationRequest\x1a,.ssn.ocrservice.v1.GetTextAnnotationResponseBSB\x0fOcrServiceProtoZ@github.com/e-conomic/vmlapis/gen/go/ssn/ocrservice/v1;ocrserviceb\x06proto3'
  ,
  dependencies=[google_dot_protobuf_dot_wrappers__pb2.DESCRIPTOR,ssn_dot_annotator_dot_v1_dot_annotator__pb2.DESCRIPTOR,ssn_dot_type_dot_text__annotation__pb2.DESCRIPTOR,])




_GETTEXTANNOTATIONREQUEST = _descriptor.Descriptor(
  name='GetTextAnnotationRequest',
  full_name='ssn.ocrservice.v1.GetTextAnnotationRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='document', full_name='ssn.ocrservice.v1.GetTextAnnotationRequest.document', index=0,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='preview', full_name='ssn.ocrservice.v1.GetTextAnnotationRequest.preview', index=1,
      number=3, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=155,
  serialized_end=244,
)


_GETTEXTANNOTATIONRESPONSE = _descriptor.Descriptor(
  name='GetTextAnnotationResponse',
  full_name='ssn.ocrservice.v1.GetTextAnnotationResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='text_annotation', full_name='ssn.ocrservice.v1.GetTextAnnotationResponse.text_annotation', index=0,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='image', full_name='ssn.ocrservice.v1.GetTextAnnotationResponse.image', index=1,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=246,
  serialized_end=368,
)


_OCRSCANIMAGEREQUEST = _descriptor.Descriptor(
  name='OcrScanImageRequest',
  full_name='ssn.ocrservice.v1.OcrScanImageRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='data', full_name='ssn.ocrservice.v1.OcrScanImageRequest.data', index=0,
      number=1, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=b"",
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=370,
  serialized_end=405,
)


_OCRSCANIMAGERESPONSE = _descriptor.Descriptor(
  name='OcrScanImageResponse',
  full_name='ssn.ocrservice.v1.OcrScanImageResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='tess_hocr', full_name='ssn.ocrservice.v1.OcrScanImageResponse.tess_hocr', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=407,
  serialized_end=448,
)

_GETTEXTANNOTATIONREQUEST.fields_by_name['document'].message_type = ssn_dot_annotator_dot_v1_dot_annotator__pb2._DOCUMENT
_GETTEXTANNOTATIONRESPONSE.fields_by_name['text_annotation'].message_type = ssn_dot_type_dot_text__annotation__pb2._TEXTANNOTATION
_GETTEXTANNOTATIONRESPONSE.fields_by_name['image'].message_type = google_dot_protobuf_dot_wrappers__pb2._BYTESVALUE
DESCRIPTOR.message_types_by_name['GetTextAnnotationRequest'] = _GETTEXTANNOTATIONREQUEST
DESCRIPTOR.message_types_by_name['GetTextAnnotationResponse'] = _GETTEXTANNOTATIONRESPONSE
DESCRIPTOR.message_types_by_name['OcrScanImageRequest'] = _OCRSCANIMAGEREQUEST
DESCRIPTOR.message_types_by_name['OcrScanImageResponse'] = _OCRSCANIMAGERESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

GetTextAnnotationRequest = _reflection.GeneratedProtocolMessageType('GetTextAnnotationRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETTEXTANNOTATIONREQUEST,
  '__module__' : 'ssn.ocrservice.v1.ocrservice_pb2'
  # @@protoc_insertion_point(class_scope:ssn.ocrservice.v1.GetTextAnnotationRequest)
  })
_sym_db.RegisterMessage(GetTextAnnotationRequest)

GetTextAnnotationResponse = _reflection.GeneratedProtocolMessageType('GetTextAnnotationResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETTEXTANNOTATIONRESPONSE,
  '__module__' : 'ssn.ocrservice.v1.ocrservice_pb2'
  # @@protoc_insertion_point(class_scope:ssn.ocrservice.v1.GetTextAnnotationResponse)
  })
_sym_db.RegisterMessage(GetTextAnnotationResponse)

OcrScanImageRequest = _reflection.GeneratedProtocolMessageType('OcrScanImageRequest', (_message.Message,), {
  'DESCRIPTOR' : _OCRSCANIMAGEREQUEST,
  '__module__' : 'ssn.ocrservice.v1.ocrservice_pb2'
  # @@protoc_insertion_point(class_scope:ssn.ocrservice.v1.OcrScanImageRequest)
  })
_sym_db.RegisterMessage(OcrScanImageRequest)

OcrScanImageResponse = _reflection.GeneratedProtocolMessageType('OcrScanImageResponse', (_message.Message,), {
  'DESCRIPTOR' : _OCRSCANIMAGERESPONSE,
  '__module__' : 'ssn.ocrservice.v1.ocrservice_pb2'
  # @@protoc_insertion_point(class_scope:ssn.ocrservice.v1.OcrScanImageResponse)
  })
_sym_db.RegisterMessage(OcrScanImageResponse)


DESCRIPTOR._options = None

_OCRSERVICE = _descriptor.ServiceDescriptor(
  name='OcrService',
  full_name='ssn.ocrservice.v1.OcrService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=451,
  serialized_end=672,
  methods=[
  _descriptor.MethodDescriptor(
    name='OcrScanImage',
    full_name='ssn.ocrservice.v1.OcrService.OcrScanImage',
    index=0,
    containing_service=None,
    input_type=_OCRSCANIMAGEREQUEST,
    output_type=_OCRSCANIMAGERESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetTextAnnotation',
    full_name='ssn.ocrservice.v1.OcrService.GetTextAnnotation',
    index=1,
    containing_service=None,
    input_type=_GETTEXTANNOTATIONREQUEST,
    output_type=_GETTEXTANNOTATIONRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_OCRSERVICE)

DESCRIPTOR.services_by_name['OcrService'] = _OCRSERVICE

# @@protoc_insertion_point(module_scope)
