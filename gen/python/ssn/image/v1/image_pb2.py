# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ssn/image/v1/image.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x18ssn/image/v1/image.proto\x12\x13ssn.imageservice.v1\x1a\x1bgoogle/protobuf/empty.proto\"V\n\x12\x43reateImageRequest\x12\x1f\n\x0binput_paths\x18\x01 \x03(\tR\ninputPaths\x12\x1f\n\x0boutput_path\x18\x02 \x01(\tR\noutputPath2^\n\x0cImageService\x12N\n\x0b\x43reateImage\x12\'.ssn.imageservice.v1.CreateImageRequest\x1a\x16.google.protobuf.EmptyBFZDgithub.com/e-conomic/vmlapis/gen/go/ssn/imageservice/v1;imageserviceb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'ssn.image.v1.image_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'ZDgithub.com/e-conomic/vmlapis/gen/go/ssn/imageservice/v1;imageservice'
  _globals['_CREATEIMAGEREQUEST']._serialized_start=78
  _globals['_CREATEIMAGEREQUEST']._serialized_end=164
  _globals['_IMAGESERVICE']._serialized_start=166
  _globals['_IMAGESERVICE']._serialized_end=260
# @@protoc_insertion_point(module_scope)
