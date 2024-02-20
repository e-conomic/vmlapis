from asgt.type import model_file_pb2 as _model_file_pb2
from asgt.type import target_metrics_pb2 as _target_metrics_pb2
from gen_bq_schema import bq_field_pb2 as _bq_field_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Model(_message.Message):
    __slots__ = ["version", "created_at", "dataset_size", "training_size", "confidence_scores", "input_type", "dataset_type", "model_files"]
    class InputType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
        FEATURE_TENSORS: _ClassVar[Model.InputType]
        EXAMPLE_TENSOR: _ClassVar[Model.InputType]
    FEATURE_TENSORS: Model.InputType
    EXAMPLE_TENSOR: Model.InputType
    VERSION_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    DATASET_SIZE_FIELD_NUMBER: _ClassVar[int]
    TRAINING_SIZE_FIELD_NUMBER: _ClassVar[int]
    CONFIDENCE_SCORES_FIELD_NUMBER: _ClassVar[int]
    INPUT_TYPE_FIELD_NUMBER: _ClassVar[int]
    DATASET_TYPE_FIELD_NUMBER: _ClassVar[int]
    MODEL_FILES_FIELD_NUMBER: _ClassVar[int]
    version: int
    created_at: _timestamp_pb2.Timestamp
    dataset_size: int
    training_size: int
    confidence_scores: _containers.RepeatedCompositeFieldContainer[_target_metrics_pb2.TargetMetrics]
    input_type: Model.InputType
    dataset_type: str
    model_files: _containers.RepeatedCompositeFieldContainer[_model_file_pb2.ModelFile]
    def __init__(self, version: _Optional[int] = ..., created_at: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., dataset_size: _Optional[int] = ..., training_size: _Optional[int] = ..., confidence_scores: _Optional[_Iterable[_Union[_target_metrics_pb2.TargetMetrics, _Mapping]]] = ..., input_type: _Optional[_Union[Model.InputType, str]] = ..., dataset_type: _Optional[str] = ..., model_files: _Optional[_Iterable[_Union[_model_file_pb2.ModelFile, _Mapping]]] = ...) -> None: ...
