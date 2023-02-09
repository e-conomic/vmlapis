from google.protobuf import wrappers_pb2 as _wrappers_pb2
from ssn.type import geometry_pb2 as _geometry_pb2
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Candidate(_message.Message):
    __slots__ = ["bounding_box", "confidence", "model_metadata", "page_ref", "text", "type", "value"]
    class Type(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
    BOUNDING_BOX_FIELD_NUMBER: _ClassVar[int]
    CONFIDENCE_FIELD_NUMBER: _ClassVar[int]
    DOCUMENT: Candidate.Type
    FIELD: Candidate.Type
    MODEL_METADATA_FIELD_NUMBER: _ClassVar[int]
    PAGE_REF_FIELD_NUMBER: _ClassVar[int]
    TEXT_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    UNKNOWN: Candidate.Type
    VALUE_FIELD_NUMBER: _ClassVar[int]
    bounding_box: _geometry_pb2.BoundingPoly
    confidence: Confidence
    model_metadata: ModelSpec
    page_ref: int
    text: str
    type: Candidate.Type
    value: str
    def __init__(self, value: _Optional[str] = ..., text: _Optional[str] = ..., confidence: _Optional[_Union[Confidence, _Mapping]] = ..., bounding_box: _Optional[_Union[_geometry_pb2.BoundingPoly, _Mapping]] = ..., type: _Optional[_Union[Candidate.Type, str]] = ..., page_ref: _Optional[int] = ..., model_metadata: _Optional[_Union[ModelSpec, _Mapping]] = ...) -> None: ...

class Confidence(_message.Message):
    __slots__ = ["level", "value"]
    class Level(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
    HIGH: Confidence.Level
    LEVEL_FIELD_NUMBER: _ClassVar[int]
    LOW: Confidence.Level
    MID: Confidence.Level
    UNKNOWN: Confidence.Level
    VALUE_FIELD_NUMBER: _ClassVar[int]
    VERY_HIGH: Confidence.Level
    VERY_LOW: Confidence.Level
    level: Confidence.Level
    value: _wrappers_pb2.FloatValue
    def __init__(self, level: _Optional[_Union[Confidence.Level, str]] = ..., value: _Optional[_Union[_wrappers_pb2.FloatValue, _Mapping]] = ...) -> None: ...

class LineCandidate(_message.Message):
    __slots__ = ["amount", "page_ref", "text"]
    AMOUNT_FIELD_NUMBER: _ClassVar[int]
    PAGE_REF_FIELD_NUMBER: _ClassVar[int]
    TEXT_FIELD_NUMBER: _ClassVar[int]
    amount: float
    page_ref: int
    text: str
    def __init__(self, text: _Optional[str] = ..., amount: _Optional[float] = ..., page_ref: _Optional[int] = ...) -> None: ...

class ModelSpec(_message.Message):
    __slots__ = ["model_name", "model_ver"]
    MODEL_NAME_FIELD_NUMBER: _ClassVar[int]
    MODEL_VER_FIELD_NUMBER: _ClassVar[int]
    model_name: str
    model_ver: _wrappers_pb2.Int64Value
    def __init__(self, model_name: _Optional[str] = ..., model_ver: _Optional[_Union[_wrappers_pb2.Int64Value, _Mapping]] = ...) -> None: ...
