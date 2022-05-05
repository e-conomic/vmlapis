# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: asgt/v2/type/data.proto

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2
from validate import validate_pb2 as validate_dot_validate__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='asgt/v2/type/data.proto',
  package='asgt.v2.type',
  syntax='proto3',
  serialized_options=b'Z9github.com/e-conomic/vmlapis/gen/go/asgt/v2/type;asgttype',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\x17\x61sgt/v2/type/data.proto\x12\x0c\x61sgt.v2.type\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x17validate/validate.proto\"\x17\n\x07Invoice\x12\x0c\n\x04text\x18\x01 \x01(\t\"+\n\x0bTransaction\x12\x0c\n\x04text\x18\x01 \x01(\t\x12\x0e\n\x06\x61mount\x18\x02 \x01(\x02\"\xac\x01\n\x0bInvoiceLine\x12\x0f\n\x07item_id\x18\x01 \x01(\t\x12\x0c\n\x04text\x18\x02 \x01(\t\x12.\n\nissue_date\x18\x03 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12(\n\x08supplier\x18\x04 \x01(\x0b\x32\x16.asgt.v2.type.Supplier\x12\x14\n\x0c\x63ustomer_ref\x18\x05 \x01(\t\x12\x0e\n\x06\x61mount\x18\x07 \x01(\x02\"P\n\x08Supplier\x12#\n\x02id\x18\x01 \x01(\tB\x17\xfa\x42\x14r\x12(@2\x0e^[A-Za-z0-9]*$\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x11\n\tglobal_id\x18\x03 \x01(\t\"\xa7\x01\n\x04\x44\x61ta\x12\x30\n\x0btransaction\x18\x01 \x01(\x0b\x32\x19.asgt.v2.type.TransactionH\x00\x12(\n\x07invoice\x18\x02 \x01(\x0b\x32\x15.asgt.v2.type.InvoiceH\x00\x12\x31\n\x0cinvoice_line\x18\x03 \x01(\x0b\x32\x19.asgt.v2.type.InvoiceLineH\x00\x42\x10\n\x0e\x64\x61ta_structureB;Z9github.com/e-conomic/vmlapis/gen/go/asgt/v2/type;asgttypeb\x06proto3'
  ,
  dependencies=[google_dot_protobuf_dot_timestamp__pb2.DESCRIPTOR,validate_dot_validate__pb2.DESCRIPTOR,])




_INVOICE = _descriptor.Descriptor(
  name='Invoice',
  full_name='asgt.v2.type.Invoice',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='text', full_name='asgt.v2.type.Invoice.text', index=0,
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
  serialized_start=99,
  serialized_end=122,
)


_TRANSACTION = _descriptor.Descriptor(
  name='Transaction',
  full_name='asgt.v2.type.Transaction',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='text', full_name='asgt.v2.type.Transaction.text', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='amount', full_name='asgt.v2.type.Transaction.amount', index=1,
      number=2, type=2, cpp_type=6, label=1,
      has_default_value=False, default_value=float(0),
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
  serialized_start=124,
  serialized_end=167,
)


_INVOICELINE = _descriptor.Descriptor(
  name='InvoiceLine',
  full_name='asgt.v2.type.InvoiceLine',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item_id', full_name='asgt.v2.type.InvoiceLine.item_id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='text', full_name='asgt.v2.type.InvoiceLine.text', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='issue_date', full_name='asgt.v2.type.InvoiceLine.issue_date', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='supplier', full_name='asgt.v2.type.InvoiceLine.supplier', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='customer_ref', full_name='asgt.v2.type.InvoiceLine.customer_ref', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='amount', full_name='asgt.v2.type.InvoiceLine.amount', index=5,
      number=7, type=2, cpp_type=6, label=1,
      has_default_value=False, default_value=float(0),
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
  serialized_start=170,
  serialized_end=342,
)


_SUPPLIER = _descriptor.Descriptor(
  name='Supplier',
  full_name='asgt.v2.type.Supplier',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='asgt.v2.type.Supplier.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=b'\372B\024r\022(@2\016^[A-Za-z0-9]*$', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='asgt.v2.type.Supplier.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='global_id', full_name='asgt.v2.type.Supplier.global_id', index=2,
      number=3, type=9, cpp_type=9, label=1,
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
  serialized_start=344,
  serialized_end=424,
)


_DATA = _descriptor.Descriptor(
  name='Data',
  full_name='asgt.v2.type.Data',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='transaction', full_name='asgt.v2.type.Data.transaction', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='invoice', full_name='asgt.v2.type.Data.invoice', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='invoice_line', full_name='asgt.v2.type.Data.invoice_line', index=2,
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
    _descriptor.OneofDescriptor(
      name='data_structure', full_name='asgt.v2.type.Data.data_structure',
      index=0, containing_type=None,
      create_key=_descriptor._internal_create_key,
    fields=[]),
  ],
  serialized_start=427,
  serialized_end=594,
)

_INVOICELINE.fields_by_name['issue_date'].message_type = google_dot_protobuf_dot_timestamp__pb2._TIMESTAMP
_INVOICELINE.fields_by_name['supplier'].message_type = _SUPPLIER
_DATA.fields_by_name['transaction'].message_type = _TRANSACTION
_DATA.fields_by_name['invoice'].message_type = _INVOICE
_DATA.fields_by_name['invoice_line'].message_type = _INVOICELINE
_DATA.oneofs_by_name['data_structure'].fields.append(
  _DATA.fields_by_name['transaction'])
_DATA.fields_by_name['transaction'].containing_oneof = _DATA.oneofs_by_name['data_structure']
_DATA.oneofs_by_name['data_structure'].fields.append(
  _DATA.fields_by_name['invoice'])
_DATA.fields_by_name['invoice'].containing_oneof = _DATA.oneofs_by_name['data_structure']
_DATA.oneofs_by_name['data_structure'].fields.append(
  _DATA.fields_by_name['invoice_line'])
_DATA.fields_by_name['invoice_line'].containing_oneof = _DATA.oneofs_by_name['data_structure']
DESCRIPTOR.message_types_by_name['Invoice'] = _INVOICE
DESCRIPTOR.message_types_by_name['Transaction'] = _TRANSACTION
DESCRIPTOR.message_types_by_name['InvoiceLine'] = _INVOICELINE
DESCRIPTOR.message_types_by_name['Supplier'] = _SUPPLIER
DESCRIPTOR.message_types_by_name['Data'] = _DATA
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Invoice = _reflection.GeneratedProtocolMessageType('Invoice', (_message.Message,), {
  'DESCRIPTOR' : _INVOICE,
  '__module__' : 'asgt.v2.type.data_pb2'
  # @@protoc_insertion_point(class_scope:asgt.v2.type.Invoice)
  })
_sym_db.RegisterMessage(Invoice)

Transaction = _reflection.GeneratedProtocolMessageType('Transaction', (_message.Message,), {
  'DESCRIPTOR' : _TRANSACTION,
  '__module__' : 'asgt.v2.type.data_pb2'
  # @@protoc_insertion_point(class_scope:asgt.v2.type.Transaction)
  })
_sym_db.RegisterMessage(Transaction)

InvoiceLine = _reflection.GeneratedProtocolMessageType('InvoiceLine', (_message.Message,), {
  'DESCRIPTOR' : _INVOICELINE,
  '__module__' : 'asgt.v2.type.data_pb2'
  # @@protoc_insertion_point(class_scope:asgt.v2.type.InvoiceLine)
  })
_sym_db.RegisterMessage(InvoiceLine)

Supplier = _reflection.GeneratedProtocolMessageType('Supplier', (_message.Message,), {
  'DESCRIPTOR' : _SUPPLIER,
  '__module__' : 'asgt.v2.type.data_pb2'
  # @@protoc_insertion_point(class_scope:asgt.v2.type.Supplier)
  })
_sym_db.RegisterMessage(Supplier)

Data = _reflection.GeneratedProtocolMessageType('Data', (_message.Message,), {
  'DESCRIPTOR' : _DATA,
  '__module__' : 'asgt.v2.type.data_pb2'
  # @@protoc_insertion_point(class_scope:asgt.v2.type.Data)
  })
_sym_db.RegisterMessage(Data)


DESCRIPTOR._options = None
_SUPPLIER.fields_by_name['id']._options = None
# @@protoc_insertion_point(module_scope)