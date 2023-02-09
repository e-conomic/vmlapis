from asgt.type import model_pb2 as _model_pb2
from asgt.type import prediction_pb2 as _prediction_pb2
from asgt.v2.type import data_pb2 as _data_pb2
from google.api import annotations_pb2 as _annotations_pb2
from protoc_gen_openapiv2.options import annotations_pb2 as _annotations_pb2_1
from validate import validate_pb2 as _validate_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class BatchSuggestRequest(_message.Message):
    __slots__ = ["dataset_name", "inputs", "options"]
    DATASET_NAME_FIELD_NUMBER: _ClassVar[int]
    INPUTS_FIELD_NUMBER: _ClassVar[int]
    OPTIONS_FIELD_NUMBER: _ClassVar[int]
    dataset_name: str
    inputs: _containers.RepeatedCompositeFieldContainer[_data_pb2.Data]
    options: SuggestOptions
    def __init__(self, dataset_name: _Optional[str] = ..., inputs: _Optional[_Iterable[_Union[_data_pb2.Data, _Mapping]]] = ..., options: _Optional[_Union[SuggestOptions, _Mapping]] = ...) -> None: ...

class BatchSuggestResponse(_message.Message):
    __slots__ = ["model", "predictions"]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    PREDICTIONS_FIELD_NUMBER: _ClassVar[int]
    model: _model_pb2.Model
    predictions: _containers.RepeatedCompositeFieldContainer[_prediction_pb2.Prediction]
    def __init__(self, predictions: _Optional[_Iterable[_Union[_prediction_pb2.Prediction, _Mapping]]] = ..., model: _Optional[_Union[_model_pb2.Model, _Mapping]] = ...) -> None: ...

class SuggestOptions(_message.Message):
    __slots__ = ["min_confidence", "suggest_limit"]
    MIN_CONFIDENCE_FIELD_NUMBER: _ClassVar[int]
    SUGGEST_LIMIT_FIELD_NUMBER: _ClassVar[int]
    min_confidence: _prediction_pb2.Confidence.Level
    suggest_limit: int
    def __init__(self, suggest_limit: _Optional[int] = ..., min_confidence: _Optional[_Union[_prediction_pb2.Confidence.Level, str]] = ...) -> None: ...

class SuggestRequest(_message.Message):
    __slots__ = ["dataset_name", "input", "options"]
    DATASET_NAME_FIELD_NUMBER: _ClassVar[int]
    INPUT_FIELD_NUMBER: _ClassVar[int]
    OPTIONS_FIELD_NUMBER: _ClassVar[int]
    dataset_name: str
    input: _data_pb2.Data
    options: SuggestOptions
    def __init__(self, dataset_name: _Optional[str] = ..., input: _Optional[_Union[_data_pb2.Data, _Mapping]] = ..., options: _Optional[_Union[SuggestOptions, _Mapping]] = ...) -> None: ...

class SuggestResponse(_message.Message):
    __slots__ = ["model", "prediction"]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    PREDICTION_FIELD_NUMBER: _ClassVar[int]
    model: _model_pb2.Model
    prediction: _prediction_pb2.Prediction
    def __init__(self, prediction: _Optional[_Union[_prediction_pb2.Prediction, _Mapping]] = ..., model: _Optional[_Union[_model_pb2.Model, _Mapping]] = ...) -> None: ...
