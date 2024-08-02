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
from vml_proto.ssn.type import text_annotation_pb2 as ssn_dot_type_dot_text__annotation__pb2
from validate import validate_pb2 as validate_dot_validate__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x18ssn/async/v1/async.proto\x12\x0cssn.async.v1\x1a\x1cgoogle/api/annotations.proto\x1a\x1bgoogle/protobuf/empty.proto\x1a.protoc-gen-openapiv2/options/annotations.proto\x1a ssn/annotator/v1/annotator.proto\x1a\x18ssn/type/candidate.proto\x1a\x1essn/type/text_annotation.proto\x1a\x17validate/validate.proto\"\x9f\x01\n\x18\x43reateTransactionRequest\x12\x36\n\x08\x64ocument\x18\x01 \x01(\x0b\x32\x1a.ssn.annotator.v1.DocumentR\x08\x64ocument\x12\x12\n\x04tags\x18\x02 \x03(\tR\x04tags\x12\x1a\n\x08\x66\x65\x61tures\x18\x03 \x03(\tR\x08\x66\x65\x61tures\x12\x1b\n\tcustom_id\x18\x04 \x01(\tR\x08\x63ustomId\"H\n\x19\x43reateTransactionResponse\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x1b\n\tcustom_id\x18\x02 \x01(\tR\x08\x63ustomId\"K\n\x1cGetTransactionResultsRequest\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x1b\n\tcustom_id\x18\x02 \x01(\tR\x08\x63ustomId\"\xad\x01\n\x1dGetTransactionResultsResponse\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12:\n\x0b\x61nnotations\x18\x02 \x03(\x0b\x32\x18.ssn.async.v1.AnnotationR\x0b\x61nnotations\x12#\n\rerror_message\x18\x03 \x01(\tR\x0c\x65rrorMessage\x12\x1b\n\tcustom_id\x18\x04 \x01(\tR\x08\x63ustomId\">\n\tCandidate\x12\x31\n\tcandidate\x18\x01 \x03(\x0b\x32\x13.ssn.type.CandidateR\tcandidate\"p\n\x15PurchaseLineCandidate\x12W\n\x17purchase_line_candidate\x18\x01 \x03(\x0b\x32\x1f.ssn.type.PurchaseLineCandidateR\x15purchaseLineCandidate\"Q\n\rLineCandidate\x12@\n\x0fline_candidates\x18\x01 \x03(\x0b\x32\x17.ssn.type.LineCandidateR\x0elineCandidates\"F\n\x0f\x41nswerCandidate\x12\x33\n\x07\x61nswers\x18\x01 \x03(\x0b\x32\x19.ssn.type.AnswerCandidateR\x07\x61nswers\";\n\x08PageText\x12/\n\tpage_text\x18\x01 \x03(\x0b\x32\x12.ssn.type.PageTextR\x08pageText\"S\n\x0eTextAnnotation\x12\x41\n\x0ftext_annotation\x18\x01 \x03(\x0b\x32\x18.ssn.type.TextAnnotationR\x0etextAnnotation\"\xe2\x03\n\nAnnotation\x12\x18\n\x07\x66\x65\x61ture\x18\x01 \x01(\tR\x07\x66\x65\x61ture\x12\x37\n\tcandidate\x18\x02 \x01(\x0b\x32\x17.ssn.async.v1.CandidateH\x00R\tcandidate\x12]\n\x17purchase_line_candidate\x18\x03 \x01(\x0b\x32#.ssn.async.v1.PurchaseLineCandidateH\x00R\x15purchaseLineCandidate\x12L\n\x11\x61nswer_candidates\x18\x04 \x01(\x0b\x32\x1d.ssn.async.v1.AnswerCandidateH\x00R\x10\x61nswerCandidates\x12\x46\n\x0fline_candidates\x18\x05 \x01(\x0b\x32\x1b.ssn.async.v1.LineCandidateH\x00R\x0elineCandidates\x12\x35\n\tpage_text\x18\x06 \x01(\x0b\x32\x16.ssn.async.v1.PageTextH\x00R\x08pageText\x12G\n\x0ftext_annotation\x18\x07 \x01(\x0b\x32\x1c.ssn.async.v1.TextAnnotationH\x00R\x0etextAnnotationB\x0c\n\ncandidates\"J\n\x1bGetTransactionStatusRequest\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x1b\n\tcustom_id\x18\x02 \x01(\tR\x08\x63ustomId\"\x88\x01\n\x1cGetTransactionStatusResponse\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x16\n\x06status\x18\x02 \x01(\tR\x06status\x12#\n\rerror_message\x18\x03 \x01(\tR\x0c\x65rrorMessage\x12\x1b\n\tcustom_id\x18\x04 \x01(\tR\x08\x63ustomId\"G\n\x18\x44\x65leteTransactionRequest\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x1b\n\tcustom_id\x18\x02 \x01(\tR\x08\x63ustomId\"W\n\x10\x44\x65leteTagRequest\x12\x43\n\x08tag_name\x18\x01 \x01(\tB(\xfa\x42%r#(\x80\x02\x32\x1e^[A-Za-z0-9.][A-Za-z0-9_.>-]*$R\x07tagName2\x9e\x05\n\x12TransactionService\x12\x81\x01\n\x11\x43reateTransaction\x12&.ssn.async.v1.CreateTransactionRequest\x1a\'.ssn.async.v1.CreateTransactionResponse\"\x1b\x82\xd3\xe4\x93\x02\x15\"\x10/v1/transactions:\x01*\x12\x97\x01\n\x15GetTransactionResults\x12*.ssn.async.v1.GetTransactionResultsRequest\x1a+.ssn.async.v1.GetTransactionResultsResponse\"%\x82\xd3\xe4\x93\x02\x1f\x12\x1d/v1/transactions/{id}/results\x12\x93\x01\n\x14GetTransactionStatus\x12).ssn.async.v1.GetTransactionStatusRequest\x1a*.ssn.async.v1.GetTransactionStatusResponse\"$\x82\xd3\xe4\x93\x02\x1e\x12\x1c/v1/transactions/{id}/status\x12r\n\x11\x44\x65leteTransaction\x12&.ssn.async.v1.DeleteTransactionRequest\x1a\x16.google.protobuf.Empty\"\x1d\x82\xd3\xe4\x93\x02\x17*\x15/v1/transactions/{id}\x12`\n\tDeleteTag\x12\x1e.ssn.async.v1.DeleteTagRequest\x1a\x16.google.protobuf.Empty\"\x1b\x82\xd3\xe4\x93\x02\x15*\x13/v1/tags/{tag_name}ByZ<github.com/e-conomic/vmlapis/gen/go/ssn/async/v1;transaction\x92\x41\x38\x12\x0f\n\tAsync API2\x02v1*\x01\x02\x32\x10\x61pplication/json:\x10\x61pplication/jsonb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'ssn.async.v1.async_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z<github.com/e-conomic/vmlapis/gen/go/ssn/async/v1;transaction\222A8\022\017\n\tAsync API2\002v1*\001\0022\020application/json:\020application/json'
  _DELETETAGREQUEST.fields_by_name['tag_name']._options = None
  _DELETETAGREQUEST.fields_by_name['tag_name']._serialized_options = b'\372B%r#(\200\0022\036^[A-Za-z0-9.][A-Za-z0-9_.>-]*$'
  _TRANSACTIONSERVICE.methods_by_name['CreateTransaction']._options = None
  _TRANSACTIONSERVICE.methods_by_name['CreateTransaction']._serialized_options = b'\202\323\344\223\002\025\"\020/v1/transactions:\001*'
  _TRANSACTIONSERVICE.methods_by_name['GetTransactionResults']._options = None
  _TRANSACTIONSERVICE.methods_by_name['GetTransactionResults']._serialized_options = b'\202\323\344\223\002\037\022\035/v1/transactions/{id}/results'
  _TRANSACTIONSERVICE.methods_by_name['GetTransactionStatus']._options = None
  _TRANSACTIONSERVICE.methods_by_name['GetTransactionStatus']._serialized_options = b'\202\323\344\223\002\036\022\034/v1/transactions/{id}/status'
  _TRANSACTIONSERVICE.methods_by_name['DeleteTransaction']._options = None
  _TRANSACTIONSERVICE.methods_by_name['DeleteTransaction']._serialized_options = b'\202\323\344\223\002\027*\025/v1/transactions/{id}'
  _TRANSACTIONSERVICE.methods_by_name['DeleteTag']._options = None
  _TRANSACTIONSERVICE.methods_by_name['DeleteTag']._serialized_options = b'\202\323\344\223\002\025*\023/v1/tags/{tag_name}'
  _globals['_CREATETRANSACTIONREQUEST']._serialized_start=267
  _globals['_CREATETRANSACTIONREQUEST']._serialized_end=426
  _globals['_CREATETRANSACTIONRESPONSE']._serialized_start=428
  _globals['_CREATETRANSACTIONRESPONSE']._serialized_end=500
  _globals['_GETTRANSACTIONRESULTSREQUEST']._serialized_start=502
  _globals['_GETTRANSACTIONRESULTSREQUEST']._serialized_end=577
  _globals['_GETTRANSACTIONRESULTSRESPONSE']._serialized_start=580
  _globals['_GETTRANSACTIONRESULTSRESPONSE']._serialized_end=753
  _globals['_CANDIDATE']._serialized_start=755
  _globals['_CANDIDATE']._serialized_end=817
  _globals['_PURCHASELINECANDIDATE']._serialized_start=819
  _globals['_PURCHASELINECANDIDATE']._serialized_end=931
  _globals['_LINECANDIDATE']._serialized_start=933
  _globals['_LINECANDIDATE']._serialized_end=1014
  _globals['_ANSWERCANDIDATE']._serialized_start=1016
  _globals['_ANSWERCANDIDATE']._serialized_end=1086
  _globals['_PAGETEXT']._serialized_start=1088
  _globals['_PAGETEXT']._serialized_end=1147
  _globals['_TEXTANNOTATION']._serialized_start=1149
  _globals['_TEXTANNOTATION']._serialized_end=1232
  _globals['_ANNOTATION']._serialized_start=1235
  _globals['_ANNOTATION']._serialized_end=1717
  _globals['_GETTRANSACTIONSTATUSREQUEST']._serialized_start=1719
  _globals['_GETTRANSACTIONSTATUSREQUEST']._serialized_end=1793
  _globals['_GETTRANSACTIONSTATUSRESPONSE']._serialized_start=1796
  _globals['_GETTRANSACTIONSTATUSRESPONSE']._serialized_end=1932
  _globals['_DELETETRANSACTIONREQUEST']._serialized_start=1934
  _globals['_DELETETRANSACTIONREQUEST']._serialized_end=2005
  _globals['_DELETETAGREQUEST']._serialized_start=2007
  _globals['_DELETETAGREQUEST']._serialized_end=2094
  _globals['_TRANSACTIONSERVICE']._serialized_start=2097
  _globals['_TRANSACTIONSERVICE']._serialized_end=2767
# @@protoc_insertion_point(module_scope)
