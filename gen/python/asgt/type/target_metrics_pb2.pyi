from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class TargetMetrics(_message.Message):
    __slots__ = ["target", "metrics", "classes_ordered"]
    class ConfusionMetricRow(_message.Message):
        __slots__ = ["counts"]
        COUNTS_FIELD_NUMBER: _ClassVar[int]
        counts: _containers.RepeatedScalarFieldContainer[int]
        def __init__(self, counts: _Optional[_Iterable[int]] = ...) -> None: ...
    class Metric(_message.Message):
        __slots__ = ["precision", "confidence", "answer_rate", "true_positive", "true_negative", "false_positive", "false_negative", "ConfusionMetrics"]
        PRECISION_FIELD_NUMBER: _ClassVar[int]
        CONFIDENCE_FIELD_NUMBER: _ClassVar[int]
        ANSWER_RATE_FIELD_NUMBER: _ClassVar[int]
        TRUE_POSITIVE_FIELD_NUMBER: _ClassVar[int]
        TRUE_NEGATIVE_FIELD_NUMBER: _ClassVar[int]
        FALSE_POSITIVE_FIELD_NUMBER: _ClassVar[int]
        FALSE_NEGATIVE_FIELD_NUMBER: _ClassVar[int]
        CONFUSIONMETRICS_FIELD_NUMBER: _ClassVar[int]
        precision: float
        confidence: float
        answer_rate: float
        true_positive: int
        true_negative: int
        false_positive: int
        false_negative: int
        ConfusionMetrics: _containers.RepeatedCompositeFieldContainer[TargetMetrics.ConfusionMetricRow]
        def __init__(self, precision: _Optional[float] = ..., confidence: _Optional[float] = ..., answer_rate: _Optional[float] = ..., true_positive: _Optional[int] = ..., true_negative: _Optional[int] = ..., false_positive: _Optional[int] = ..., false_negative: _Optional[int] = ..., ConfusionMetrics: _Optional[_Iterable[_Union[TargetMetrics.ConfusionMetricRow, _Mapping]]] = ...) -> None: ...
    TARGET_FIELD_NUMBER: _ClassVar[int]
    METRICS_FIELD_NUMBER: _ClassVar[int]
    CLASSES_ORDERED_FIELD_NUMBER: _ClassVar[int]
    target: str
    metrics: _containers.RepeatedCompositeFieldContainer[TargetMetrics.Metric]
    classes_ordered: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, target: _Optional[str] = ..., metrics: _Optional[_Iterable[_Union[TargetMetrics.Metric, _Mapping]]] = ..., classes_ordered: _Optional[_Iterable[str]] = ...) -> None: ...
