from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from typing import ClassVar as _ClassVar

DEFAULT: Tier
DESCRIPTOR: _descriptor.FileDescriptor
PREMIUM: Tier
STANDARD: Tier

class Tier(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
