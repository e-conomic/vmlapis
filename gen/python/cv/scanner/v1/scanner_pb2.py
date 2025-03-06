# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: cv/scanner/v1/scanner.proto
# Protobuf Python Version: 5.29.3
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import runtime_version as _runtime_version
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
_runtime_version.ValidateProtobufRuntimeVersion(
    _runtime_version.Domain.PUBLIC,
    5,
    29,
    3,
    '',
    'cv/scanner/v1/scanner.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from vml_proto.google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from vml_proto.google.api import http_pb2 as google_dot_api_dot_http__pb2
from vml_proto.ssn.annotator.v1 import annotator_pb2 as ssn_dot_annotator_dot_v1_dot_annotator__pb2
from vml_proto.ssn.type import candidate_pb2 as ssn_dot_type_dot_candidate__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x1b\x63v/scanner/v1/scanner.proto\x12\rcv.scanner.v1\x1a\x1cgoogle/api/annotations.proto\x1a\x15google/api/http.proto\x1a ssn/annotator/v1/annotator.proto\x1a\x18ssn/type/candidate.proto\"\x8f\x01\n\rScanCVRequest\x12\x36\n\x08\x64ocument\x18\x01 \x01(\x0b\x32\x1a.ssn.annotator.v1.DocumentR\x08\x64ocument\x12\x32\n\x08\x66\x65\x61tures\x18\x02 \x03(\x0b\x32\x16.cv.scanner.v1.FeatureR\x08\x66\x65\x61tures\x12\x12\n\x04tags\x18\x03 \x03(\tR\x04tags\"\x87\t\n\x0eScanCVResponse\x12\x32\n\nfirst_name\x18\x01 \x03(\x0b\x32\x13.ssn.type.CandidateR\tfirstName\x12\x30\n\tlast_name\x18\x02 \x03(\x0b\x32\x13.ssn.type.CandidateR\x08lastName\x12\x37\n\rdate_of_birth\x18\x03 \x03(\x0b\x32\x13.ssn.type.CandidateR\x0b\x64\x61teOfBirth\x12)\n\x05phone\x18\x04 \x03(\x0b\x32\x13.ssn.type.CandidateR\x05phone\x12)\n\x05\x65mail\x18\x05 \x03(\x0b\x32\x13.ssn.type.CandidateR\x05\x65mail\x12-\n\x07\x63ountry\x18\x06 \x03(\x0b\x32\x13.ssn.type.CandidateR\x07\x63ountry\x12\x35\n\x0bnationality\x18\x07 \x03(\x0b\x32\x13.ssn.type.CandidateR\x0bnationality\x12\x34\n\x0bpostal_code\x18\x08 \x03(\x0b\x32\x13.ssn.type.CandidateR\npostalCode\x12\x34\n\x0bpostal_area\x18\t \x03(\x0b\x32\x13.ssn.type.CandidateR\npostalArea\x12\x37\n\x0cmunicipality\x18\n \x03(\x0b\x32\x13.ssn.type.CandidateR\x0cmunicipality\x12+\n\x06\x63ounty\x18\x0b \x03(\x0b\x32\x13.ssn.type.CandidateR\x06\x63ounty\x12-\n\x07\x61\x64\x64ress\x18\x0c \x03(\x0b\x32\x13.ssn.type.CandidateR\x07\x61\x64\x64ress\x12\x38\n\remployer_name\x18\r \x03(\x0b\x32\x13.ssn.type.CandidateR\x0c\x65mployerName\x12:\n\x0eposition_title\x18\x0e \x03(\x0b\x32\x13.ssn.type.CandidateR\rpositionTitle\x12\'\n\x04\x64\x61te\x18\x0f \x03(\x0b\x32\x13.ssn.type.CandidateR\x04\x64\x61te\x12>\n\x10institution_name\x18\x10 \x03(\x0b\x32\x13.ssn.type.CandidateR\x0finstitutionName\x12>\n\x10institution_type\x18\x11 \x03(\x0b\x32\x13.ssn.type.CandidateR\x0finstitutionType\x12?\n\x11\x61rea_of_education\x18\x12 \x03(\x0b\x32\x13.ssn.type.CandidateR\x0f\x61reaOfEducation\x12+\n\x06\x64\x65gree\x18\x13 \x03(\x0b\x32\x13.ssn.type.CandidateR\x06\x64\x65gree\x12\x38\n\raverage_grade\x18\x14 \x03(\x0b\x32\x13.ssn.type.CandidateR\x0c\x61verageGrade\x12\'\n\x04name\x18\x15 \x03(\x0b\x32\x13.ssn.type.CandidateR\x04name\x12)\n\x05level\x18\x16 \x03(\x0b\x32\x13.ssn.type.CandidateR\x05level\"\xbb\x03\n\x07\x46\x65\x61ture\x12/\n\x04type\x18\x01 \x01(\x0e\x32\x1b.cv.scanner.v1.Feature.TypeR\x04type\x12\x1f\n\x0bmax_results\x18\x02 \x01(\x05R\nmaxResults\"\xdd\x02\n\x04Type\x12\x0e\n\nFIRST_NAME\x10\x00\x12\r\n\tLAST_NAME\x10\x01\x12\x11\n\rDATE_OF_BIRTH\x10\x02\x12\t\n\x05PHONE\x10\x03\x12\t\n\x05\x45MAIL\x10\x04\x12\x0b\n\x07\x43OUNTRY\x10\x05\x12\x0f\n\x0bNATIONALITY\x10\x06\x12\x0f\n\x0bPOSTAL_CODE\x10\x07\x12\x0f\n\x0bPOSTAL_AREA\x10\x08\x12\x10\n\x0cMUNICIPALITY\x10\t\x12\n\n\x06\x43OUNTY\x10\n\x12\x0b\n\x07\x41\x44\x44RESS\x10\x0b\x12\x11\n\rEMPLOYER_NAME\x10\x0c\x12\x12\n\x0ePOSITION_TITLE\x10\r\x12\x08\n\x04\x44\x41TE\x10\x0e\x12\x12\n\x0eINSTITUTE_NAME\x10\x0f\x12\x12\n\x0eINSTITUTE_TYPE\x10\x10\x12\x15\n\x11\x41REA_OF_EDUCATION\x10\x11\x12\n\n\x06\x44\x45GREE\x10\x12\x12\x11\n\rAVERAGE_GRADE\x10\x13\x12\x08\n\x04NAME\x10\x14\x12\t\n\x05LEVEL\x10\x15\x32o\n\x07Scanner\x12\x64\n\x06ScanCV\x12\x1c.cv.scanner.v1.ScanCVRequest\x1a\x1d.cv.scanner.v1.ScanCVResponse\"\x1d\x82\xd3\xe4\x93\x02\x17\"\x12/v1/scanner:scancv:\x01*B6Z4github.com/e-conomic/vmlapis/gen/go/cv/scanner/v1;cvb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'cv.scanner.v1.scanner_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z4github.com/e-conomic/vmlapis/gen/go/cv/scanner/v1;cv'
  _globals['_SCANNER'].methods_by_name['ScanCV']._loaded_options = None
  _globals['_SCANNER'].methods_by_name['ScanCV']._serialized_options = b'\202\323\344\223\002\027\"\022/v1/scanner:scancv:\001*'
  _globals['_SCANCVREQUEST']._serialized_start=160
  _globals['_SCANCVREQUEST']._serialized_end=303
  _globals['_SCANCVRESPONSE']._serialized_start=306
  _globals['_SCANCVRESPONSE']._serialized_end=1465
  _globals['_FEATURE']._serialized_start=1468
  _globals['_FEATURE']._serialized_end=1911
  _globals['_FEATURE_TYPE']._serialized_start=1562
  _globals['_FEATURE_TYPE']._serialized_end=1911
  _globals['_SCANNER']._serialized_start=1913
  _globals['_SCANNER']._serialized_end=2024
# @@protoc_insertion_point(module_scope)
