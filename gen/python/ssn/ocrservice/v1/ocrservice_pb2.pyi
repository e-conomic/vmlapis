from google.protobuf import wrappers_pb2 as _wrappers_pb2
from ssn.annotator.v1 import annotator_pb2 as _annotator_pb2
from ssn.type import text_annotation_pb2 as _text_annotation_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class GetTextAnnotationRequest(_message.Message):
    __slots__ = ["document", "preview"]
    DOCUMENT_FIELD_NUMBER: _ClassVar[int]
    PREVIEW_FIELD_NUMBER: _ClassVar[int]
    document: _annotator_pb2.Document
    preview: bool
    def __init__(self, document: _Optional[_Union[_annotator_pb2.Document, _Mapping]] = ..., preview: bool = ...) -> None: ...

class GetTextAnnotationResponse(_message.Message):
    __slots__ = ["text_annotation", "image"]
    TEXT_ANNOTATION_FIELD_NUMBER: _ClassVar[int]
    IMAGE_FIELD_NUMBER: _ClassVar[int]
    text_annotation: _text_annotation_pb2.TextAnnotation
    image: _wrappers_pb2.BytesValue
    def __init__(self, text_annotation: _Optional[_Union[_text_annotation_pb2.TextAnnotation, _Mapping]] = ..., image: _Optional[_Union[_wrappers_pb2.BytesValue, _Mapping]] = ...) -> None: ...

class AsyncCreateOperationRequest(_message.Message):
    __slots__ = ["document"]
    DOCUMENT_FIELD_NUMBER: _ClassVar[int]
    document: _annotator_pb2.Document
    def __init__(self, document: _Optional[_Union[_annotator_pb2.Document, _Mapping]] = ...) -> None: ...

class AsyncCreateOperationResponse(_message.Message):
    __slots__ = ["operation_name"]
    OPERATION_NAME_FIELD_NUMBER: _ClassVar[int]
    operation_name: str
    def __init__(self, operation_name: _Optional[str] = ...) -> None: ...

class AsyncGetOperationStatusRequest(_message.Message):
    __slots__ = ["operation_name"]
    OPERATION_NAME_FIELD_NUMBER: _ClassVar[int]
    operation_name: str
    def __init__(self, operation_name: _Optional[str] = ...) -> None: ...

class AsyncGetOperationStatusResponse(_message.Message):
    __slots__ = ["operation_name", "done"]
    OPERATION_NAME_FIELD_NUMBER: _ClassVar[int]
    DONE_FIELD_NUMBER: _ClassVar[int]
    operation_name: str
    done: bool
    def __init__(self, operation_name: _Optional[str] = ..., done: bool = ...) -> None: ...

class AsyncGetOperationResultRequest(_message.Message):
    __slots__ = ["operation_name"]
    OPERATION_NAME_FIELD_NUMBER: _ClassVar[int]
    operation_name: str
    def __init__(self, operation_name: _Optional[str] = ...) -> None: ...

class AsyncGetOperationResultResponse(_message.Message):
    __slots__ = ["error", "text_annotation", "image"]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    TEXT_ANNOTATION_FIELD_NUMBER: _ClassVar[int]
    IMAGE_FIELD_NUMBER: _ClassVar[int]
    error: str
    text_annotation: _containers.RepeatedCompositeFieldContainer[_text_annotation_pb2.TextAnnotation]
    image: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.BytesValue]
    def __init__(self, error: _Optional[str] = ..., text_annotation: _Optional[_Iterable[_Union[_text_annotation_pb2.TextAnnotation, _Mapping]]] = ..., image: _Optional[_Iterable[_Union[_wrappers_pb2.BytesValue, _Mapping]]] = ...) -> None: ...

class OcrScanImageRequest(_message.Message):
    __slots__ = ["data"]
    DATA_FIELD_NUMBER: _ClassVar[int]
    data: bytes
    def __init__(self, data: _Optional[bytes] = ...) -> None: ...

class OcrScanImageResponse(_message.Message):
    __slots__ = ["tess_hocr"]
    TESS_HOCR_FIELD_NUMBER: _ClassVar[int]
    tess_hocr: str
    def __init__(self, tess_hocr: _Optional[str] = ...) -> None: ...
