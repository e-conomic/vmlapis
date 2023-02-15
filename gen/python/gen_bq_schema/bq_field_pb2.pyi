from google.protobuf import descriptor_pb2 as _descriptor_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional

BIGQUERY_FIELD_NUMBER: _ClassVar[int]
DESCRIPTOR: _descriptor.FileDescriptor
bigquery: _descriptor.FieldDescriptor

class BigQueryFieldOptions(_message.Message):
    __slots__ = ["description", "ignore", "name", "require", "type_override"]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    IGNORE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    REQUIRE_FIELD_NUMBER: _ClassVar[int]
    TYPE_OVERRIDE_FIELD_NUMBER: _ClassVar[int]
    description: str
    ignore: bool
    name: str
    require: bool
    type_override: str
    def __init__(self, require: bool = ..., type_override: _Optional[str] = ..., ignore: bool = ..., description: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...
