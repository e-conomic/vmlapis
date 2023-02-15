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
    __slots__ = ["confidence_scores", "created_at", "dataset_size", "dataset_type", "input_type", "training_size", "version"]
    class InputType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
    CONFIDENCE_SCORES_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    DATASET_SIZE_FIELD_NUMBER: _ClassVar[int]
    DATASET_TYPE_FIELD_NUMBER: _ClassVar[int]
    EXAMPLE_TENSOR: Model.InputType
    FEATURE_TENSORS: Model.InputType
    INPUT_TYPE_FIELD_NUMBER: _ClassVar[int]
    TRAINING_SIZE_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    confidence_scores: _containers.RepeatedCompositeFieldContainer[_target_metrics_pb2.TargetMetrics]
    created_at: _timestamp_pb2.Timestamp
    dataset_size: int
    dataset_type: str
    input_type: Model.InputType
    training_size: int
    version: int
    def __init__(self, version: _Optional[int] = ..., created_at: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., dataset_size: _Optional[int] = ..., training_size: _Optional[int] = ..., confidence_scores: _Optional[_Iterable[_Union[_target_metrics_pb2.TargetMetrics, _Mapping]]] = ..., input_type: _Optional[_Union[Model.InputType, str]] = ..., dataset_type: _Optional[str] = ...) -> None: ...