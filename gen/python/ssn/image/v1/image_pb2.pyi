from google.protobuf import empty_pb2 as _empty_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class CreateImageRequest(_message.Message):
    __slots__ = ["input_paths", "output_path"]
    INPUT_PATHS_FIELD_NUMBER: _ClassVar[int]
    OUTPUT_PATH_FIELD_NUMBER: _ClassVar[int]
    input_paths: _containers.RepeatedScalarFieldContainer[str]
    output_path: str
    def __init__(self, input_paths: _Optional[_Iterable[str]] = ..., output_path: _Optional[str] = ...) -> None: ...
