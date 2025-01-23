# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ssn/type/candidate.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import wrappers_pb2 as google_dot_protobuf_dot_wrappers__pb2
from vml_proto.ssn.type import geometry_pb2 as ssn_dot_type_dot_geometry__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x18ssn/type/candidate.proto\x12\x08ssn.type\x1a\x1egoogle/protobuf/wrappers.proto\x1a\x17ssn/type/geometry.proto\"\xc0\x01\n\nConfidence\x12\x30\n\x05level\x18\x01 \x01(\x0e\x32\x1a.ssn.type.Confidence.LevelR\x05level\x12\x31\n\x05value\x18\x02 \x01(\x0b\x32\x1b.google.protobuf.FloatValueR\x05value\"M\n\x05Level\x12\x0b\n\x07UNKNOWN\x10\x00\x12\x0c\n\x08VERY_LOW\x10\x01\x12\x07\n\x03LOW\x10\x02\x12\x07\n\x03MID\x10\x03\x12\x08\n\x04HIGH\x10\x04\x12\r\n\tVERY_HIGH\x10\x05\"\xd9\x02\n\tCandidate\x12\x14\n\x05value\x18\x01 \x01(\tR\x05value\x12\x12\n\x04text\x18\x02 \x01(\tR\x04text\x12\x34\n\nconfidence\x18\x03 \x01(\x0b\x32\x14.ssn.type.ConfidenceR\nconfidence\x12\x39\n\x0c\x62ounding_box\x18\x04 \x01(\x0b\x32\x16.ssn.type.BoundingPolyR\x0b\x62oundingBox\x12,\n\x04type\x18\x05 \x01(\x0e\x32\x18.ssn.type.Candidate.TypeR\x04type\x12\x19\n\x08page_ref\x18\x06 \x01(\rR\x07pageRef\x12:\n\x0emodel_metadata\x18\x07 \x01(\x0b\x32\x13.ssn.type.ModelSpecR\rmodelMetadata\",\n\x04Type\x12\x0b\n\x07UNKNOWN\x10\x00\x12\t\n\x05\x46IELD\x10\x01\x12\x0c\n\x08\x44OCUMENT\x10\x02\"d\n\tModelSpec\x12\x1d\n\nmodel_name\x18\x01 \x01(\tR\tmodelName\x12\x38\n\tmodel_ver\x18\x02 \x01(\x0b\x32\x1b.google.protobuf.Int64ValueR\x08modelVer\"V\n\rLineCandidate\x12\x12\n\x04text\x18\x01 \x01(\tR\x04text\x12\x16\n\x06\x61mount\x18\x02 \x01(\x01R\x06\x61mount\x12\x19\n\x08page_ref\x18\x06 \x01(\rR\x07pageRef\"\xfc\x04\n\x15PurchaseLineCandidate\x12\x19\n\x08page_ref\x18\x01 \x01(\rR\x07pageRef\x12\x12\n\x04\x63ode\x18\x02 \x01(\tR\x04\x63ode\x12 \n\x0b\x64\x65scription\x18\x03 \x01(\tR\x0b\x64\x65scription\x12\x1a\n\x08quantity\x18\x04 \x01(\tR\x08quantity\x12\x1f\n\x0bitem_number\x18\x05 \x01(\tR\nitemNumber\x12\x12\n\x04unit\x18\x06 \x01(\tR\x04unit\x12%\n\x0etotal_discount\x18\x07 \x01(\tR\rtotalDiscount\x12/\n\x13percentage_discount\x18\x08 \x01(\tR\x12percentageDiscount\x12$\n\x0etotal_incl_vat\x18\t \x01(\tR\x0ctotalInclVat\x12$\n\x0etotal_excl_vat\x18\n \x01(\tR\x0ctotalExclVat\x12\x1b\n\ttotal_vat\x18\x0b \x01(\tR\x08totalVat\x12%\n\x0epercentage_vat\x18\x0c \x01(\tR\rpercentageVat\x12-\n\x13unit_price_incl_vat\x18\r \x01(\tR\x10unitPriceInclVat\x12-\n\x13unit_price_excl_vat\x18\x0e \x01(\tR\x10unitPriceExclVat\x12\x14\n\x05total\x18\x11 \x01(\tR\x05total\x12\x1d\n\nunit_price\x18\x12 \x01(\tR\tunitPrice\x12:\n\x0emodel_metadata\x18\x13 \x01(\x0b\x32\x13.ssn.type.ModelSpecR\rmodelMetadataJ\x04\x08\x0f\x10\x10J\x04\x08\x10\x10\x11\"\xd2\x01\n\x0f\x41nswerCandidate\x12\x1a\n\x08question\x18\x01 \x01(\tR\x08question\x12\x16\n\x06\x61nswer\x18\x02 \x01(\tR\x06\x61nswer\x12\x34\n\nconfidence\x18\x03 \x01(\x0b\x32\x14.ssn.type.ConfidenceR\nconfidence\x12:\n\x0emodel_metadata\x18\x07 \x01(\x0b\x32\x13.ssn.type.ModelSpecR\rmodelMetadata\x12\x19\n\x08page_ref\x18\x08 \x01(\rR\x07pageRef\"9\n\x08PageText\x12\x19\n\x08page_ref\x18\x01 \x01(\rR\x07pageRef\x12\x12\n\x04text\x18\x02 \x01(\tR\x04text\"\xdf\x01\n\x18VatDistributionCandidate\x12\x1e\n\npercentage\x18\x01 \x01(\tR\npercentage\x12\x16\n\x06\x61mount\x18\x02 \x01(\tR\x06\x61mount\x12:\n\x0emodel_metadata\x18\x03 \x01(\x0b\x32\x13.ssn.type.ModelSpecR\rmodelMetadata\x12\x19\n\x08page_ref\x18\x04 \x01(\rR\x07pageRef\x12\x19\n\x08\x65xcl_vat\x18\x05 \x01(\tR\x07\x65xclVat\x12\x19\n\x08incl_vat\x18\x06 \x01(\tR\x07inclVat\"1\n\x10\x44ocumentMetadata\x12\x1d\n\npage_count\x18\x01 \x01(\rR\tpageCountB6Z4github.com/e-conomic/vmlapis/gen/go/ssn/type;ssntypeb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'ssn.type.candidate_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z4github.com/e-conomic/vmlapis/gen/go/ssn/type;ssntype'
  _globals['_CONFIDENCE']._serialized_start=96
  _globals['_CONFIDENCE']._serialized_end=288
  _globals['_CONFIDENCE_LEVEL']._serialized_start=211
  _globals['_CONFIDENCE_LEVEL']._serialized_end=288
  _globals['_CANDIDATE']._serialized_start=291
  _globals['_CANDIDATE']._serialized_end=636
  _globals['_CANDIDATE_TYPE']._serialized_start=592
  _globals['_CANDIDATE_TYPE']._serialized_end=636
  _globals['_MODELSPEC']._serialized_start=638
  _globals['_MODELSPEC']._serialized_end=738
  _globals['_LINECANDIDATE']._serialized_start=740
  _globals['_LINECANDIDATE']._serialized_end=826
  _globals['_PURCHASELINECANDIDATE']._serialized_start=829
  _globals['_PURCHASELINECANDIDATE']._serialized_end=1465
  _globals['_ANSWERCANDIDATE']._serialized_start=1468
  _globals['_ANSWERCANDIDATE']._serialized_end=1678
  _globals['_PAGETEXT']._serialized_start=1680
  _globals['_PAGETEXT']._serialized_end=1737
  _globals['_VATDISTRIBUTIONCANDIDATE']._serialized_start=1740
  _globals['_VATDISTRIBUTIONCANDIDATE']._serialized_end=1963
  _globals['_DOCUMENTMETADATA']._serialized_start=1965
  _globals['_DOCUMENTMETADATA']._serialized_end=2014
# @@protoc_insertion_point(module_scope)
