# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ssn/async/v1/async.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from vml_proto.google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2
from vml_proto.protoc_gen_openapiv2.options import annotations_pb2 as protoc__gen__openapiv2_dot_options_dot_annotations__pb2
from vml_proto.ssn.annotator.v1 import annotator_pb2 as ssn_dot_annotator_dot_v1_dot_annotator__pb2
from vml_proto.ssn.type import candidate_pb2 as ssn_dot_type_dot_candidate__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x18ssn/async/v1/async.proto\x12\x0cssn.async.v1\x1a\x1cgoogle/api/annotations.proto\x1a\x1bgoogle/protobuf/empty.proto\x1a.protoc-gen-openapiv2/options/annotations.proto\x1a ssn/annotator/v1/annotator.proto\x1a\x18ssn/type/candidate.proto\"\x9f\x01\n\x18\x43reateTransactionRequest\x12\x36\n\x08\x64ocument\x18\x01 \x01(\x0b\x32\x1a.ssn.annotator.v1.DocumentR\x08\x64ocument\x12\x12\n\x04tags\x18\x02 \x03(\tR\x04tags\x12\x1a\n\x08\x66\x65\x61tures\x18\x03 \x03(\tR\x08\x66\x65\x61tures\x12\x1b\n\tcustom_id\x18\x04 \x01(\tR\x08\x63ustomId\"+\n\x19\x43reateTransactionResponse\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\".\n\x1cGetTransactionResultsRequest\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\"k\n\x1dGetTransactionResultsResponse\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12:\n\x0b\x61nnotations\x18\x02 \x03(\x0b\x32\x18.ssn.async.v1.AnnotationR\x0b\x61nnotations\">\n\tCandidate\x12\x31\n\tcandidate\x18\x01 \x03(\x0b\x32\x13.ssn.type.CandidateR\tcandidate\"p\n\x15PurchaseLineCandidate\x12W\n\x17purchase_line_candidate\x18\x01 \x03(\x0b\x32\x1f.ssn.type.PurchaseLineCandidateR\x15purchaseLineCandidate\"\xcc\x01\n\nAnnotation\x12\x18\n\x07\x66\x65\x61ture\x18\x01 \x01(\tR\x07\x66\x65\x61ture\x12\x37\n\tcandidate\x18\x02 \x01(\x0b\x32\x17.ssn.async.v1.CandidateH\x00R\tcandidate\x12]\n\x17purchase_line_candidate\x18\x03 \x01(\x0b\x32#.ssn.async.v1.PurchaseLineCandidateH\x00R\x15purchaseLineCandidateB\x0c\n\ncandidates\"-\n\x1bGetTransactionStatusRequest\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\"k\n\x1cGetTransactionStatusResponse\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x16\n\x06status\x18\x02 \x01(\tR\x06status\x12#\n\rerror_message\x18\x03 \x01(\tR\x0c\x65rrorMessage\"*\n\x18\x44\x65leteTransactionRequest\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id2\xbc\x04\n\x12TransactionService\x12\x81\x01\n\x11\x43reateTransaction\x12&.ssn.async.v1.CreateTransactionRequest\x1a\'.ssn.async.v1.CreateTransactionResponse\"\x1b\x82\xd3\xe4\x93\x02\x15\"\x10/v1/transactions:\x01*\x12\x97\x01\n\x15GetTransactionResults\x12*.ssn.async.v1.GetTransactionResultsRequest\x1a+.ssn.async.v1.GetTransactionResultsResponse\"%\x82\xd3\xe4\x93\x02\x1f\x12\x1d/v1/transactions/{id}/results\x12\x93\x01\n\x14GetTransactionStatus\x12).ssn.async.v1.GetTransactionStatusRequest\x1a*.ssn.async.v1.GetTransactionStatusResponse\"$\x82\xd3\xe4\x93\x02\x1e\x12\x1c/v1/transactions/{id}/status\x12r\n\x11\x44\x65leteTransaction\x12&.ssn.async.v1.DeleteTransactionRequest\x1a\x16.google.protobuf.Empty\"\x1d\x82\xd3\xe4\x93\x02\x17*\x15/v1/transactions/{id}ByZ<github.com/e-conomic/vmlapis/gen/go/ssn/async/v1;transaction\x92\x41\x38\x12\x0f\n\tAsync API2\x02v1*\x01\x02\x32\x10\x61pplication/json:\x10\x61pplication/jsonb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'ssn.async.v1.async_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z<github.com/e-conomic/vmlapis/gen/go/ssn/async/v1;transaction\222A8\022\017\n\tAsync API2\002v1*\001\0022\020application/json:\020application/json'
  _TRANSACTIONSERVICE.methods_by_name['CreateTransaction']._options = None
  _TRANSACTIONSERVICE.methods_by_name['CreateTransaction']._serialized_options = b'\202\323\344\223\002\025\"\020/v1/transactions:\001*'
  _TRANSACTIONSERVICE.methods_by_name['GetTransactionResults']._options = None
  _TRANSACTIONSERVICE.methods_by_name['GetTransactionResults']._serialized_options = b'\202\323\344\223\002\037\022\035/v1/transactions/{id}/results'
  _TRANSACTIONSERVICE.methods_by_name['GetTransactionStatus']._options = None
  _TRANSACTIONSERVICE.methods_by_name['GetTransactionStatus']._serialized_options = b'\202\323\344\223\002\036\022\034/v1/transactions/{id}/status'
  _TRANSACTIONSERVICE.methods_by_name['DeleteTransaction']._options = None
  _TRANSACTIONSERVICE.methods_by_name['DeleteTransaction']._serialized_options = b'\202\323\344\223\002\027*\025/v1/transactions/{id}'
  _globals['_CREATETRANSACTIONREQUEST']._serialized_start=210
  _globals['_CREATETRANSACTIONREQUEST']._serialized_end=369
  _globals['_CREATETRANSACTIONRESPONSE']._serialized_start=371
  _globals['_CREATETRANSACTIONRESPONSE']._serialized_end=414
  _globals['_GETTRANSACTIONRESULTSREQUEST']._serialized_start=416
  _globals['_GETTRANSACTIONRESULTSREQUEST']._serialized_end=462
  _globals['_GETTRANSACTIONRESULTSRESPONSE']._serialized_start=464
  _globals['_GETTRANSACTIONRESULTSRESPONSE']._serialized_end=571
  _globals['_CANDIDATE']._serialized_start=573
  _globals['_CANDIDATE']._serialized_end=635
  _globals['_PURCHASELINECANDIDATE']._serialized_start=637
  _globals['_PURCHASELINECANDIDATE']._serialized_end=749
  _globals['_ANNOTATION']._serialized_start=752
  _globals['_ANNOTATION']._serialized_end=956
  _globals['_GETTRANSACTIONSTATUSREQUEST']._serialized_start=958
  _globals['_GETTRANSACTIONSTATUSREQUEST']._serialized_end=1003
  _globals['_GETTRANSACTIONSTATUSRESPONSE']._serialized_start=1005
  _globals['_GETTRANSACTIONSTATUSRESPONSE']._serialized_end=1112
  _globals['_DELETETRANSACTIONREQUEST']._serialized_start=1114
  _globals['_DELETETRANSACTIONREQUEST']._serialized_end=1156
  _globals['_TRANSACTIONSERVICE']._serialized_start=1159
  _globals['_TRANSACTIONSERVICE']._serialized_end=1731
# @@protoc_insertion_point(module_scope)
