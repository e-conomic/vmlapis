from google.protobuf import wrappers_pb2 as _wrappers_pb2
from ssn.annotator.v1 import annotator_pb2 as _annotator_pb2
from ssn.type import text_annotation_pb2 as _text_annotation_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class GetTextAnnotationRequest(_message.Message):
    __slots__ = ["document", "preview"]
    DOCUMENT_FIELD_NUMBER: _ClassVar[int]
    PREVIEW_FIELD_NUMBER: _ClassVar[int]
    document: _annotator_pb2.Document
    preview: bool
    def __init__(self, document: _Optional[_Union[_annotator_pb2.Document, _Mapping]] = ..., preview: bool = ...) -> None: ...

class GetTextAnnotationResponse(_message.Message):
    __slots__ = ["image", "text_annotation"]
    IMAGE_FIELD_NUMBER: _ClassVar[int]
    TEXT_ANNOTATION_FIELD_NUMBER: _ClassVar[int]
    image: _wrappers_pb2.BytesValue
    text_annotation: _text_annotation_pb2.TextAnnotation
    def __init__(self, text_annotation: _Optional[_Union[_text_annotation_pb2.TextAnnotation, _Mapping]] = ..., image: _Optional[_Union[_wrappers_pb2.BytesValue, _Mapping]] = ...) -> None: ...

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
