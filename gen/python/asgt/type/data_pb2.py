# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: asgt/type/data.proto
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
    'asgt/type/data.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x14\x61sgt/type/data.proto\x12\tasgt.type\x1a\x1fgoogle/protobuf/timestamp.proto\"\xde\x01\n\x07Invoice\x12\x39\n\nissue_date\x18\x01 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\tissueDate\x12/\n\x08supplier\x18\x02 \x01(\x0b\x32\x13.asgt.type.SupplierR\x08supplier\x12!\n\x0c\x63ustomer_ref\x18\x03 \x01(\tR\x0b\x63ustomerRef\x12\x12\n\x04text\x18\x04 \x01(\tR\x04text\x12\x1a\n\x08\x63urrency\x18\x06 \x01(\tR\x08\x63urrency\x12\x14\n\x05total\x18\x07 \x01(\x02R\x05total\":\n\x0bInvoiceLine\x12\x12\n\x04text\x18\x08 \x01(\tR\x04text\x12\x17\n\x07item_id\x18\t \x01(\tR\x06itemId\"K\n\x08Supplier\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x12\n\x04name\x18\x04 \x01(\tR\x04name\x12\x1b\n\tglobal_id\x18\x05 \x01(\tR\x08globalId\"9\n\x0bTransaction\x12\x12\n\x04text\x18\x01 \x01(\tR\x04text\x12\x16\n\x06\x61mount\x18\x02 \x01(\x02R\x06\x61mount\"\xa9\x01\n\x04\x44\x61ta\x12\x38\n\x0btransaction\x18\x01 \x01(\x0b\x32\x16.asgt.type.TransactionR\x0btransaction\x12,\n\x07invoice\x18\x02 \x01(\x0b\x32\x12.asgt.type.InvoiceR\x07invoice\x12\x39\n\x0cinvoice_line\x18\x03 \x01(\x0b\x32\x16.asgt.type.InvoiceLineR\x0binvoiceLineB8Z6github.com/e-conomic/vmlapis/gen/go/asgt/type;asgttypeb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'asgt.type.data_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z6github.com/e-conomic/vmlapis/gen/go/asgt/type;asgttype'
  _globals['_INVOICE']._serialized_start=69
  _globals['_INVOICE']._serialized_end=291
  _globals['_INVOICELINE']._serialized_start=293
  _globals['_INVOICELINE']._serialized_end=351
  _globals['_SUPPLIER']._serialized_start=353
  _globals['_SUPPLIER']._serialized_end=428
  _globals['_TRANSACTION']._serialized_start=430
  _globals['_TRANSACTION']._serialized_end=487
  _globals['_DATA']._serialized_start=490
  _globals['_DATA']._serialized_end=659
# @@protoc_insertion_point(module_scope)
