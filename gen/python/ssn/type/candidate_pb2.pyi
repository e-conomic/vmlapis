from google.protobuf import wrappers_pb2 as _wrappers_pb2
from ssn.type import geometry_pb2 as _geometry_pb2
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Confidence(_message.Message):
    __slots__ = ["level", "value"]
    class Level(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
        UNKNOWN: _ClassVar[Confidence.Level]
        VERY_LOW: _ClassVar[Confidence.Level]
        LOW: _ClassVar[Confidence.Level]
        MID: _ClassVar[Confidence.Level]
        HIGH: _ClassVar[Confidence.Level]
        VERY_HIGH: _ClassVar[Confidence.Level]
    UNKNOWN: Confidence.Level
    VERY_LOW: Confidence.Level
    LOW: Confidence.Level
    MID: Confidence.Level
    HIGH: Confidence.Level
    VERY_HIGH: Confidence.Level
    LEVEL_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    level: Confidence.Level
    value: _wrappers_pb2.FloatValue
    def __init__(self, level: _Optional[_Union[Confidence.Level, str]] = ..., value: _Optional[_Union[_wrappers_pb2.FloatValue, _Mapping]] = ...) -> None: ...

class Candidate(_message.Message):
    __slots__ = ["value", "text", "confidence", "bounding_box", "type", "page_ref", "model_metadata"]
    class Type(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
        UNKNOWN: _ClassVar[Candidate.Type]
        FIELD: _ClassVar[Candidate.Type]
        DOCUMENT: _ClassVar[Candidate.Type]
    UNKNOWN: Candidate.Type
    FIELD: Candidate.Type
    DOCUMENT: Candidate.Type
    VALUE_FIELD_NUMBER: _ClassVar[int]
    TEXT_FIELD_NUMBER: _ClassVar[int]
    CONFIDENCE_FIELD_NUMBER: _ClassVar[int]
    BOUNDING_BOX_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    PAGE_REF_FIELD_NUMBER: _ClassVar[int]
    MODEL_METADATA_FIELD_NUMBER: _ClassVar[int]
    value: str
    text: str
    confidence: Confidence
    bounding_box: _geometry_pb2.BoundingPoly
    type: Candidate.Type
    page_ref: int
    model_metadata: ModelSpec
    def __init__(self, value: _Optional[str] = ..., text: _Optional[str] = ..., confidence: _Optional[_Union[Confidence, _Mapping]] = ..., bounding_box: _Optional[_Union[_geometry_pb2.BoundingPoly, _Mapping]] = ..., type: _Optional[_Union[Candidate.Type, str]] = ..., page_ref: _Optional[int] = ..., model_metadata: _Optional[_Union[ModelSpec, _Mapping]] = ...) -> None: ...

class ModelSpec(_message.Message):
    __slots__ = ["model_name", "model_ver"]
    MODEL_NAME_FIELD_NUMBER: _ClassVar[int]
    MODEL_VER_FIELD_NUMBER: _ClassVar[int]
    model_name: str
    model_ver: _wrappers_pb2.Int64Value
    def __init__(self, model_name: _Optional[str] = ..., model_ver: _Optional[_Union[_wrappers_pb2.Int64Value, _Mapping]] = ...) -> None: ...

class LineCandidate(_message.Message):
    __slots__ = ["text", "amount", "page_ref"]
    TEXT_FIELD_NUMBER: _ClassVar[int]
    AMOUNT_FIELD_NUMBER: _ClassVar[int]
    PAGE_REF_FIELD_NUMBER: _ClassVar[int]
    text: str
    amount: float
    page_ref: int
    def __init__(self, text: _Optional[str] = ..., amount: _Optional[float] = ..., page_ref: _Optional[int] = ...) -> None: ...
