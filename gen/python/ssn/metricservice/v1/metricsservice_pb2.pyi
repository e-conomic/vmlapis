from google.protobuf import empty_pb2 as _empty_pb2
from google.protobuf import wrappers_pb2 as _wrappers_pb2
from ssn.dataservice.v1 import dataservice_pb2 as _dataservice_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class CalculateMetricsRequest(_message.Message):
    __slots__ = ["prediction_values", "true_values"]
    PREDICTION_VALUES_FIELD_NUMBER: _ClassVar[int]
    TRUE_VALUES_FIELD_NUMBER: _ClassVar[int]
    prediction_values: _dataservice_pb2.PredictionValues
    true_values: _dataservice_pb2.TrueValues
    def __init__(self, prediction_values: _Optional[_Union[_dataservice_pb2.PredictionValues, _Mapping]] = ..., true_values: _Optional[_Union[_dataservice_pb2.TrueValues, _Mapping]] = ...) -> None: ...

class CalculateMetricsResponse(_message.Message):
    __slots__ = ["document_similarity"]
    DOCUMENT_SIMILARITY_FIELD_NUMBER: _ClassVar[int]
    document_similarity: float
    def __init__(self, document_similarity: _Optional[float] = ...) -> None: ...
