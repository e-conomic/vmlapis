from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class RasterizePdfRequest(_message.Message):
    __slots__ = ["color", "data", "dpi", "format", "pages"]
    class ColorSpace(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
    class Format(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
    class PageOption(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
    ALL: RasterizePdfRequest.PageOption
    COLOR: RasterizePdfRequest.ColorSpace
    COLOR_FIELD_NUMBER: _ClassVar[int]
    DATA_FIELD_NUMBER: _ClassVar[int]
    DPI_FIELD_NUMBER: _ClassVar[int]
    FIRST: RasterizePdfRequest.PageOption
    FIRST_LAST: RasterizePdfRequest.PageOption
    FORMAT_FIELD_NUMBER: _ClassVar[int]
    GRAY: RasterizePdfRequest.ColorSpace
    JPEG: RasterizePdfRequest.Format
    LAST: RasterizePdfRequest.PageOption
    PAGES_FIELD_NUMBER: _ClassVar[int]
    PNG: RasterizePdfRequest.Format
    WEBP: RasterizePdfRequest.Format
    color: RasterizePdfRequest.ColorSpace
    data: bytes
    dpi: int
    format: RasterizePdfRequest.Format
    pages: RasterizePdfRequest.PageOption
    def __init__(self, data: _Optional[bytes] = ..., dpi: _Optional[int] = ..., format: _Optional[_Union[RasterizePdfRequest.Format, str]] = ..., color: _Optional[_Union[RasterizePdfRequest.ColorSpace, str]] = ..., pages: _Optional[_Union[RasterizePdfRequest.PageOption, str]] = ...) -> None: ...

class RasterizePdfResponse(_message.Message):
    __slots__ = ["data", "height", "index", "scale", "width"]
    DATA_FIELD_NUMBER: _ClassVar[int]
    HEIGHT_FIELD_NUMBER: _ClassVar[int]
    INDEX_FIELD_NUMBER: _ClassVar[int]
    SCALE_FIELD_NUMBER: _ClassVar[int]
    WIDTH_FIELD_NUMBER: _ClassVar[int]
    data: bytes
    height: int
    index: int
    scale: float
    width: int
    def __init__(self, index: _Optional[int] = ..., data: _Optional[bytes] = ..., width: _Optional[int] = ..., height: _Optional[int] = ..., scale: _Optional[float] = ...) -> None: ...
