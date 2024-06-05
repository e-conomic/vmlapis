from asgt.type import data_pb2 as _data_pb2
from asgt.type import model_pb2 as _model_pb2
from asgt.type import prediction_pb2 as _prediction_pb2
from google.api import annotations_pb2 as _annotations_pb2
from protoc_gen_openapiv2.options import annotations_pb2 as _annotations_pb2_1
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class SuggestionResponse(_message.Message):
    __slots__ = ["predictions", "model"]
    PREDICTIONS_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    predictions: _containers.RepeatedCompositeFieldContainer[_prediction_pb2.Prediction]
    model: _model_pb2.Model
    def __init__(self, predictions: _Optional[_Iterable[_Union[_prediction_pb2.Prediction, _Mapping]]] = ..., model: _Optional[_Union[_model_pb2.Model, _Mapping]] = ...) -> None: ...

class SuggestionOptions(_message.Message):
    __slots__ = ["suggestion_limit", "min_confidence"]
    SUGGESTION_LIMIT_FIELD_NUMBER: _ClassVar[int]
    MIN_CONFIDENCE_FIELD_NUMBER: _ClassVar[int]
    suggestion_limit: int
    min_confidence: _prediction_pb2.Confidence.Level
    def __init__(self, suggestion_limit: _Optional[int] = ..., min_confidence: _Optional[_Union[_prediction_pb2.Confidence.Level, str]] = ...) -> None: ...

class SuggestionRequest(_message.Message):
    __slots__ = ["name", "type", "inputs", "options", "tags", "model"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    INPUTS_FIELD_NUMBER: _ClassVar[int]
    OPTIONS_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    name: str
    type: str
    inputs: _containers.RepeatedCompositeFieldContainer[_data_pb2.Data]
    options: SuggestionOptions
    tags: _containers.RepeatedScalarFieldContainer[str]
    model: _model_pb2.Model
    def __init__(self, name: _Optional[str] = ..., type: _Optional[str] = ..., inputs: _Optional[_Iterable[_Union[_data_pb2.Data, _Mapping]]] = ..., options: _Optional[_Union[SuggestionOptions, _Mapping]] = ..., tags: _Optional[_Iterable[str]] = ..., model: _Optional[_Union[_model_pb2.Model, _Mapping]] = ...) -> None: ...
