from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Data(_message.Message):
    __slots__ = ["invoice", "invoice_line", "transaction"]
    INVOICE_FIELD_NUMBER: _ClassVar[int]
    INVOICE_LINE_FIELD_NUMBER: _ClassVar[int]
    TRANSACTION_FIELD_NUMBER: _ClassVar[int]
    invoice: Invoice
    invoice_line: InvoiceLine
    transaction: Transaction
    def __init__(self, transaction: _Optional[_Union[Transaction, _Mapping]] = ..., invoice: _Optional[_Union[Invoice, _Mapping]] = ..., invoice_line: _Optional[_Union[InvoiceLine, _Mapping]] = ...) -> None: ...

class Invoice(_message.Message):
    __slots__ = ["currency", "customer_ref", "issue_date", "supplier", "text", "total"]
    CURRENCY_FIELD_NUMBER: _ClassVar[int]
    CUSTOMER_REF_FIELD_NUMBER: _ClassVar[int]
    ISSUE_DATE_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_FIELD_NUMBER: _ClassVar[int]
    TEXT_FIELD_NUMBER: _ClassVar[int]
    TOTAL_FIELD_NUMBER: _ClassVar[int]
    currency: str
    customer_ref: str
    issue_date: _timestamp_pb2.Timestamp
    supplier: Supplier
    text: str
    total: float
    def __init__(self, issue_date: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., supplier: _Optional[_Union[Supplier, _Mapping]] = ..., customer_ref: _Optional[str] = ..., text: _Optional[str] = ..., currency: _Optional[str] = ..., total: _Optional[float] = ...) -> None: ...

class InvoiceLine(_message.Message):
    __slots__ = ["item_id", "text"]
    ITEM_ID_FIELD_NUMBER: _ClassVar[int]
    TEXT_FIELD_NUMBER: _ClassVar[int]
    item_id: str
    text: str
    def __init__(self, text: _Optional[str] = ..., item_id: _Optional[str] = ...) -> None: ...

class Supplier(_message.Message):
    __slots__ = ["global_id", "id", "name"]
    GLOBAL_ID_FIELD_NUMBER: _ClassVar[int]
    ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    global_id: str
    id: str
    name: str
    def __init__(self, id: _Optional[str] = ..., name: _Optional[str] = ..., global_id: _Optional[str] = ...) -> None: ...

class Transaction(_message.Message):
    __slots__ = ["amount", "text"]
    AMOUNT_FIELD_NUMBER: _ClassVar[int]
    TEXT_FIELD_NUMBER: _ClassVar[int]
    amount: float
    text: str
    def __init__(self, text: _Optional[str] = ..., amount: _Optional[float] = ...) -> None: ...
