from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class TargetMetrics(_message.Message):
    __slots__ = ["metrics", "target"]
    class Metric(_message.Message):
        __slots__ = ["answer_rate", "confidence", "precision"]
        ANSWER_RATE_FIELD_NUMBER: _ClassVar[int]
        CONFIDENCE_FIELD_NUMBER: _ClassVar[int]
        PRECISION_FIELD_NUMBER: _ClassVar[int]
        answer_rate: float
        confidence: float
        precision: float
        def __init__(self, precision: _Optional[float] = ..., confidence: _Optional[float] = ..., answer_rate: _Optional[float] = ...) -> None: ...
    METRICS_FIELD_NUMBER: _ClassVar[int]
    TARGET_FIELD_NUMBER: _ClassVar[int]
    metrics: _containers.RepeatedCompositeFieldContainer[TargetMetrics.Metric]
    target: str
    def __init__(self, target: _Optional[str] = ..., metrics: _Optional[_Iterable[_Union[TargetMetrics.Metric, _Mapping]]] = ...) -> None: ...
