from asgt.type import dataset_pb2 as _dataset_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class TrainModelEvent(_message.Message):
    __slots__ = ["artifacts", "dataset", "model_version", "status", "status_message"]
    class Artifact(_message.Message):
        __slots__ = ["path", "type"]
        PATH_FIELD_NUMBER: _ClassVar[int]
        TYPE_FIELD_NUMBER: _ClassVar[int]
        path: str
        type: str
        def __init__(self, type: _Optional[str] = ..., path: _Optional[str] = ...) -> None: ...
    ARTIFACTS_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    MODEL_VERSION_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    STATUS_MESSAGE_FIELD_NUMBER: _ClassVar[int]
    artifacts: _containers.RepeatedCompositeFieldContainer[TrainModelEvent.Artifact]
    dataset: _dataset_pb2.Dataset
    model_version: int
    status: str
    status_message: str
    def __init__(self, dataset: _Optional[_Union[_dataset_pb2.Dataset, _Mapping]] = ..., model_version: _Optional[int] = ..., status: _Optional[str] = ..., status_message: _Optional[str] = ..., artifacts: _Optional[_Iterable[_Union[TrainModelEvent.Artifact, _Mapping]]] = ...) -> None: ...
