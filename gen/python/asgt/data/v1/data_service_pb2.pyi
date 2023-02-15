from asgt.type import dataset_pb2 as _dataset_pb2
from asgt.type import model_pb2 as _model_pb2
from asgt.type import retention_policy_pb2 as _retention_policy_pb2
from asgt.type import sample_pb2 as _sample_pb2
from google.api import annotations_pb2 as _annotations_pb2
from google.protobuf import empty_pb2 as _empty_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf import wrappers_pb2 as _wrappers_pb2
from ssn.dataservice.v1 import dataservice_pb2 as _dataservice_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class AppendDataRequest(_message.Message):
    __slots__ = ["name", "samples", "type"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    SAMPLES_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    name: str
    samples: _containers.RepeatedCompositeFieldContainer[_sample_pb2.Sample]
    type: str
    def __init__(self, name: _Optional[str] = ..., type: _Optional[str] = ..., samples: _Optional[_Iterable[_Union[_sample_pb2.Sample, _Mapping]]] = ...) -> None: ...

class CalculateMetricsRequest(_message.Message):
    __slots__ = ["end_time", "start_time", "tags"]
    END_TIME_FIELD_NUMBER: _ClassVar[int]
    START_TIME_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    end_time: _timestamp_pb2.Timestamp
    start_time: _timestamp_pb2.Timestamp
    tags: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, start_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., end_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., tags: _Optional[_Iterable[str]] = ...) -> None: ...

class CalculateMetricsResponse(_message.Message):
    __slots__ = ["metrics"]
    class MetricRow(_message.Message):
        __slots__ = ["confidence", "correct", "incorrect", "target"]
        CONFIDENCE_FIELD_NUMBER: _ClassVar[int]
        CORRECT_FIELD_NUMBER: _ClassVar[int]
        INCORRECT_FIELD_NUMBER: _ClassVar[int]
        TARGET_FIELD_NUMBER: _ClassVar[int]
        confidence: _wrappers_pb2.FloatValue
        correct: int
        incorrect: int
        target: str
        def __init__(self, target: _Optional[str] = ..., confidence: _Optional[_Union[_wrappers_pb2.FloatValue, _Mapping]] = ..., correct: _Optional[int] = ..., incorrect: _Optional[int] = ...) -> None: ...
    METRICS_FIELD_NUMBER: _ClassVar[int]
    metrics: _containers.RepeatedCompositeFieldContainer[CalculateMetricsResponse.MetricRow]
    def __init__(self, metrics: _Optional[_Iterable[_Union[CalculateMetricsResponse.MetricRow, _Mapping]]] = ...) -> None: ...

class CreateRequest(_message.Message):
    __slots__ = ["name", "retention_policy", "samples", "tags", "targets", "type"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    RETENTION_POLICY_FIELD_NUMBER: _ClassVar[int]
    SAMPLES_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    TARGETS_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    name: str
    retention_policy: _retention_policy_pb2.RetentionPolicy
    samples: _containers.RepeatedCompositeFieldContainer[_sample_pb2.Sample]
    tags: _containers.RepeatedScalarFieldContainer[str]
    targets: _containers.RepeatedScalarFieldContainer[str]
    type: str
    def __init__(self, name: _Optional[str] = ..., type: _Optional[str] = ..., tags: _Optional[_Iterable[str]] = ..., targets: _Optional[_Iterable[str]] = ..., samples: _Optional[_Iterable[_Union[_sample_pb2.Sample, _Mapping]]] = ..., retention_policy: _Optional[_Union[_retention_policy_pb2.RetentionPolicy, _Mapping]] = ...) -> None: ...

class DeleteRequest(_message.Message):
    __slots__ = ["name", "tag", "type"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    TAG_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    name: str
    tag: str
    type: str
    def __init__(self, type: _Optional[str] = ..., name: _Optional[str] = ..., tag: _Optional[str] = ...) -> None: ...

class GetInfoRequest(_message.Message):
    __slots__ = ["name", "type"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    name: str
    type: str
    def __init__(self, name: _Optional[str] = ..., type: _Optional[str] = ...) -> None: ...

class GetInfoResponse(_message.Message):
    __slots__ = ["dataset", "model"]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    dataset: _dataset_pb2.Dataset
    model: _model_pb2.Model
    def __init__(self, dataset: _Optional[_Union[_dataset_pb2.Dataset, _Mapping]] = ..., model: _Optional[_Union[_model_pb2.Model, _Mapping]] = ...) -> None: ...

class RegisterQueryStatsRequest(_message.Message):
    __slots__ = ["batch_size", "dataset", "model_type", "tags"]
    BATCH_SIZE_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    MODEL_TYPE_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    batch_size: int
    dataset: str
    model_type: str
    tags: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, dataset: _Optional[str] = ..., model_type: _Optional[str] = ..., batch_size: _Optional[int] = ..., tags: _Optional[_Iterable[str]] = ...) -> None: ...

class UpdateDatasetRequest(_message.Message):
    __slots__ = ["name", "retention_policy", "type"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    RETENTION_POLICY_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    name: str
    retention_policy: _retention_policy_pb2.RetentionPolicy
    type: str
    def __init__(self, name: _Optional[str] = ..., type: _Optional[str] = ..., retention_policy: _Optional[_Union[_retention_policy_pb2.RetentionPolicy, _Mapping]] = ...) -> None: ...
