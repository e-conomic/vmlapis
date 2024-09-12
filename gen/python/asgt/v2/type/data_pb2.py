# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: asgt/v2/type/data.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2
from vml_proto.validate import validate_pb2 as validate_dot_validate__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x17\x61sgt/v2/type/data.proto\x12\x0c\x61sgt.v2.type\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x17validate/validate.proto\"\x1d\n\x07Invoice\x12\x12\n\x04text\x18\x01 \x01(\tR\x04text\"9\n\x0bTransaction\x12\x12\n\x04text\x18\x01 \x01(\tR\x04text\x12\x16\n\x06\x61mount\x18\x02 \x01(\x02R\x06\x61mount\"\xe4\x01\n\x0bInvoiceLine\x12\x17\n\x07item_id\x18\x01 \x01(\tR\x06itemId\x12\x12\n\x04text\x18\x02 \x01(\tR\x04text\x12\x39\n\nissue_date\x18\x03 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\tissueDate\x12\x32\n\x08supplier\x18\x04 \x01(\x0b\x32\x16.asgt.v2.type.SupplierR\x08supplier\x12!\n\x0c\x63ustomer_ref\x18\x05 \x01(\tR\x0b\x63ustomerRef\x12\x16\n\x06\x61mount\x18\x07 \x01(\x02R\x06\x61mount\"d\n\x08Supplier\x12\'\n\x02id\x18\x01 \x01(\tB\x17\xfa\x42\x14r\x12(@2\x0e^[A-Za-z0-9]*$R\x02id\x12\x12\n\x04name\x18\x02 \x01(\tR\x04name\x12\x1b\n\tglobal_id\x18\x03 \x01(\tR\x08globalId\"\xca\x01\n\x04\x44\x61ta\x12=\n\x0btransaction\x18\x01 \x01(\x0b\x32\x19.asgt.v2.type.TransactionH\x00R\x0btransaction\x12\x31\n\x07invoice\x18\x02 \x01(\x0b\x32\x15.asgt.v2.type.InvoiceH\x00R\x07invoice\x12>\n\x0cinvoice_line\x18\x03 \x01(\x0b\x32\x19.asgt.v2.type.InvoiceLineH\x00R\x0binvoiceLineB\x10\n\x0e\x64\x61ta_structureB;Z9github.com/e-conomic/vmlapis/gen/go/asgt/v2/type;asgttypeb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'asgt.v2.type.data_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z9github.com/e-conomic/vmlapis/gen/go/asgt/v2/type;asgttype'
  _SUPPLIER.fields_by_name['id']._options = None
  _SUPPLIER.fields_by_name['id']._serialized_options = b'\372B\024r\022(@2\016^[A-Za-z0-9]*$'
  _globals['_INVOICE']._serialized_start=99
  _globals['_INVOICE']._serialized_end=128
  _globals['_TRANSACTION']._serialized_start=130
  _globals['_TRANSACTION']._serialized_end=187
  _globals['_INVOICELINE']._serialized_start=190
  _globals['_INVOICELINE']._serialized_end=418
  _globals['_SUPPLIER']._serialized_start=420
  _globals['_SUPPLIER']._serialized_end=520
  _globals['_DATA']._serialized_start=523
  _globals['_DATA']._serialized_end=725
# @@protoc_insertion_point(module_scope)
