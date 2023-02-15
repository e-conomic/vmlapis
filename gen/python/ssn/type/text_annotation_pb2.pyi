from ssn.type import geometry_pb2 as _geometry_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Block(_message.Message):
    __slots__ = ["block_type", "bounding_box", "confidence", "paragraphs", "property"]
    class BlockType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
    BARCODE: Block.BlockType
    BLOCK_TYPE_FIELD_NUMBER: _ClassVar[int]
    BOUNDING_BOX_FIELD_NUMBER: _ClassVar[int]
    CONFIDENCE_FIELD_NUMBER: _ClassVar[int]
    PARAGRAPHS_FIELD_NUMBER: _ClassVar[int]
    PICTURE: Block.BlockType
    PROPERTY_FIELD_NUMBER: _ClassVar[int]
    RULER: Block.BlockType
    TABLE: Block.BlockType
    TEXT: Block.BlockType
    UNKNOWN: Block.BlockType
    block_type: Block.BlockType
    bounding_box: _geometry_pb2.BoundingPoly
    confidence: float
    paragraphs: _containers.RepeatedCompositeFieldContainer[Paragraph]
    property: TextAnnotation.TextProperty
    def __init__(self, property: _Optional[_Union[TextAnnotation.TextProperty, _Mapping]] = ..., bounding_box: _Optional[_Union[_geometry_pb2.BoundingPoly, _Mapping]] = ..., paragraphs: _Optional[_Iterable[_Union[Paragraph, _Mapping]]] = ..., block_type: _Optional[_Union[Block.BlockType, str]] = ..., confidence: _Optional[float] = ...) -> None: ...

class Page(_message.Message):
    __slots__ = ["blocks", "confidence", "height", "property", "width"]
    BLOCKS_FIELD_NUMBER: _ClassVar[int]
    CONFIDENCE_FIELD_NUMBER: _ClassVar[int]
    HEIGHT_FIELD_NUMBER: _ClassVar[int]
    PROPERTY_FIELD_NUMBER: _ClassVar[int]
    WIDTH_FIELD_NUMBER: _ClassVar[int]
    blocks: _containers.RepeatedCompositeFieldContainer[Block]
    confidence: float
    height: int
    property: TextAnnotation.TextProperty
    width: int
    def __init__(self, property: _Optional[_Union[TextAnnotation.TextProperty, _Mapping]] = ..., width: _Optional[int] = ..., height: _Optional[int] = ..., blocks: _Optional[_Iterable[_Union[Block, _Mapping]]] = ..., confidence: _Optional[float] = ...) -> None: ...

class Paragraph(_message.Message):
    __slots__ = ["bounding_box", "confidence", "property", "words"]
    BOUNDING_BOX_FIELD_NUMBER: _ClassVar[int]
    CONFIDENCE_FIELD_NUMBER: _ClassVar[int]
    PROPERTY_FIELD_NUMBER: _ClassVar[int]
    WORDS_FIELD_NUMBER: _ClassVar[int]
    bounding_box: _geometry_pb2.BoundingPoly
    confidence: float
    property: TextAnnotation.TextProperty
    words: _containers.RepeatedCompositeFieldContainer[Word]
    def __init__(self, property: _Optional[_Union[TextAnnotation.TextProperty, _Mapping]] = ..., bounding_box: _Optional[_Union[_geometry_pb2.BoundingPoly, _Mapping]] = ..., words: _Optional[_Iterable[_Union[Word, _Mapping]]] = ..., confidence: _Optional[float] = ...) -> None: ...

class Symbol(_message.Message):
    __slots__ = ["bounding_box", "confidence", "property", "text"]
    BOUNDING_BOX_FIELD_NUMBER: _ClassVar[int]
    CONFIDENCE_FIELD_NUMBER: _ClassVar[int]
    PROPERTY_FIELD_NUMBER: _ClassVar[int]
    TEXT_FIELD_NUMBER: _ClassVar[int]
    bounding_box: _geometry_pb2.BoundingPoly
    confidence: float
    property: TextAnnotation.TextProperty
    text: str
    def __init__(self, property: _Optional[_Union[TextAnnotation.TextProperty, _Mapping]] = ..., bounding_box: _Optional[_Union[_geometry_pb2.BoundingPoly, _Mapping]] = ..., text: _Optional[str] = ..., confidence: _Optional[float] = ...) -> None: ...

class TextAnnotation(_message.Message):
    __slots__ = ["pages", "text"]
    class DetectedBreak(_message.Message):
        __slots__ = ["is_prefix", "type"]
        class BreakType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
            __slots__ = []
        EOL_SURE_SPACE: TextAnnotation.DetectedBreak.BreakType
        HYPHEN: TextAnnotation.DetectedBreak.BreakType
        IS_PREFIX_FIELD_NUMBER: _ClassVar[int]
        LINE_BREAK: TextAnnotation.DetectedBreak.BreakType
        SPACE: TextAnnotation.DetectedBreak.BreakType
        SURE_SPACE: TextAnnotation.DetectedBreak.BreakType
        TYPE_FIELD_NUMBER: _ClassVar[int]
        UNKNOWN: TextAnnotation.DetectedBreak.BreakType
        is_prefix: bool
        type: TextAnnotation.DetectedBreak.BreakType
        def __init__(self, type: _Optional[_Union[TextAnnotation.DetectedBreak.BreakType, str]] = ..., is_prefix: bool = ...) -> None: ...
    class DetectedLanguage(_message.Message):
        __slots__ = ["confidence", "language_code"]
        CONFIDENCE_FIELD_NUMBER: _ClassVar[int]
        LANGUAGE_CODE_FIELD_NUMBER: _ClassVar[int]
        confidence: float
        language_code: str
        def __init__(self, language_code: _Optional[str] = ..., confidence: _Optional[float] = ...) -> None: ...
    class TextProperty(_message.Message):
        __slots__ = ["detected_break", "detected_languages"]
        DETECTED_BREAK_FIELD_NUMBER: _ClassVar[int]
        DETECTED_LANGUAGES_FIELD_NUMBER: _ClassVar[int]
        detected_break: TextAnnotation.DetectedBreak
        detected_languages: _containers.RepeatedCompositeFieldContainer[TextAnnotation.DetectedLanguage]
        def __init__(self, detected_languages: _Optional[_Iterable[_Union[TextAnnotation.DetectedLanguage, _Mapping]]] = ..., detected_break: _Optional[_Union[TextAnnotation.DetectedBreak, _Mapping]] = ...) -> None: ...
    PAGES_FIELD_NUMBER: _ClassVar[int]
    TEXT_FIELD_NUMBER: _ClassVar[int]
    pages: _containers.RepeatedCompositeFieldContainer[Page]
    text: str
    def __init__(self, pages: _Optional[_Iterable[_Union[Page, _Mapping]]] = ..., text: _Optional[str] = ...) -> None: ...

class Word(_message.Message):
    __slots__ = ["bounding_box", "confidence", "property", "symbols"]
    BOUNDING_BOX_FIELD_NUMBER: _ClassVar[int]
    CONFIDENCE_FIELD_NUMBER: _ClassVar[int]
    PROPERTY_FIELD_NUMBER: _ClassVar[int]
    SYMBOLS_FIELD_NUMBER: _ClassVar[int]
    bounding_box: _geometry_pb2.BoundingPoly
    confidence: float
    property: TextAnnotation.TextProperty
    symbols: _containers.RepeatedCompositeFieldContainer[Symbol]
    def __init__(self, property: _Optional[_Union[TextAnnotation.TextProperty, _Mapping]] = ..., bounding_box: _Optional[_Union[_geometry_pb2.BoundingPoly, _Mapping]] = ..., symbols: _Optional[_Iterable[_Union[Symbol, _Mapping]]] = ..., confidence: _Optional[float] = ...) -> None: ...
