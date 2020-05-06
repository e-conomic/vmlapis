# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ssn/type/text_annotation.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from vml_proto.ssn.type import geometry_pb2 as ssn_dot_type_dot_geometry__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='ssn/type/text_annotation.proto',
  package='ssn.type',
  syntax='proto3',
  serialized_options=_b('Z\004type'),
  serialized_pb=_b('\n\x1essn/type/text_annotation.proto\x12\x08ssn.type\x1a\x17ssn/type/geometry.proto\"\xde\x03\n\x0eTextAnnotation\x12\x1d\n\x05pages\x18\x01 \x03(\x0b\x32\x0e.ssn.type.Page\x12\x0c\n\x04text\x18\x02 \x01(\t\x1a=\n\x10\x44\x65tectedLanguage\x12\x15\n\rlanguage_code\x18\x01 \x01(\t\x12\x12\n\nconfidence\x18\x02 \x01(\x02\x1a\xc7\x01\n\rDetectedBreak\x12>\n\x04type\x18\x01 \x01(\x0e\x32\x30.ssn.type.TextAnnotation.DetectedBreak.BreakType\x12\x11\n\tis_prefix\x18\x02 \x01(\x08\"c\n\tBreakType\x12\x0b\n\x07UNKNOWN\x10\x00\x12\t\n\x05SPACE\x10\x01\x12\x0e\n\nSURE_SPACE\x10\x02\x12\x12\n\x0e\x45OL_SURE_SPACE\x10\x03\x12\n\n\x06HYPHEN\x10\x04\x12\x0e\n\nLINE_BREAK\x10\x05\x1a\x95\x01\n\x0cTextProperty\x12\x45\n\x12\x64\x65tected_languages\x18\x01 \x03(\x0b\x32).ssn.type.TextAnnotation.DetectedLanguage\x12>\n\x0e\x64\x65tected_break\x18\x02 \x01(\x0b\x32&.ssn.type.TextAnnotation.DetectedBreak\"\x93\x01\n\x04Page\x12\x37\n\x08property\x18\x01 \x01(\x0b\x32%.ssn.type.TextAnnotation.TextProperty\x12\r\n\x05width\x18\x02 \x01(\x05\x12\x0e\n\x06height\x18\x03 \x01(\x05\x12\x1f\n\x06\x62locks\x18\x04 \x03(\x0b\x32\x0f.ssn.type.Block\x12\x12\n\nconfidence\x18\x05 \x01(\x02\"\xae\x02\n\x05\x42lock\x12\x37\n\x08property\x18\x01 \x01(\x0b\x32%.ssn.type.TextAnnotation.TextProperty\x12,\n\x0c\x62ounding_box\x18\x02 \x01(\x0b\x32\x16.ssn.type.BoundingPoly\x12\'\n\nparagraphs\x18\x03 \x03(\x0b\x32\x13.ssn.type.Paragraph\x12-\n\nblock_type\x18\x04 \x01(\x0e\x32\x19.ssn.type.Block.BlockType\x12\x12\n\nconfidence\x18\x05 \x01(\x02\"R\n\tBlockType\x12\x0b\n\x07UNKNOWN\x10\x00\x12\x08\n\x04TEXT\x10\x01\x12\t\n\x05TABLE\x10\x02\x12\x0b\n\x07PICTURE\x10\x03\x12\t\n\x05RULER\x10\x04\x12\x0b\n\x07\x42\x41RCODE\x10\x05\"\xa5\x01\n\tParagraph\x12\x37\n\x08property\x18\x01 \x01(\x0b\x32%.ssn.type.TextAnnotation.TextProperty\x12,\n\x0c\x62ounding_box\x18\x02 \x01(\x0b\x32\x16.ssn.type.BoundingPoly\x12\x1d\n\x05words\x18\x03 \x03(\x0b\x32\x0e.ssn.type.Word\x12\x12\n\nconfidence\x18\x04 \x01(\x02\"\xa4\x01\n\x04Word\x12\x37\n\x08property\x18\x01 \x01(\x0b\x32%.ssn.type.TextAnnotation.TextProperty\x12,\n\x0c\x62ounding_box\x18\x02 \x01(\x0b\x32\x16.ssn.type.BoundingPoly\x12!\n\x07symbols\x18\x03 \x03(\x0b\x32\x10.ssn.type.Symbol\x12\x12\n\nconfidence\x18\x04 \x01(\x02\"\x91\x01\n\x06Symbol\x12\x37\n\x08property\x18\x01 \x01(\x0b\x32%.ssn.type.TextAnnotation.TextProperty\x12,\n\x0c\x62ounding_box\x18\x02 \x01(\x0b\x32\x16.ssn.type.BoundingPoly\x12\x0c\n\x04text\x18\x03 \x01(\t\x12\x12\n\nconfidence\x18\x04 \x01(\x02\x42\x06Z\x04typeb\x06proto3')
  ,
  dependencies=[ssn_dot_type_dot_geometry__pb2.DESCRIPTOR,])



_TEXTANNOTATION_DETECTEDBREAK_BREAKTYPE = _descriptor.EnumDescriptor(
  name='BreakType',
  full_name='ssn.type.TextAnnotation.DetectedBreak.BreakType',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='UNKNOWN', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='SPACE', index=1, number=1,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='SURE_SPACE', index=2, number=2,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='EOL_SURE_SPACE', index=3, number=3,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='HYPHEN', index=4, number=4,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='LINE_BREAK', index=5, number=5,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=297,
  serialized_end=396,
)
_sym_db.RegisterEnumDescriptor(_TEXTANNOTATION_DETECTEDBREAK_BREAKTYPE)

_BLOCK_BLOCKTYPE = _descriptor.EnumDescriptor(
  name='BlockType',
  full_name='ssn.type.Block.BlockType',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='UNKNOWN', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='TEXT', index=1, number=1,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='TABLE', index=2, number=2,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='PICTURE', index=3, number=3,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='RULER', index=4, number=4,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='BARCODE', index=5, number=5,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=921,
  serialized_end=1003,
)
_sym_db.RegisterEnumDescriptor(_BLOCK_BLOCKTYPE)


_TEXTANNOTATION_DETECTEDLANGUAGE = _descriptor.Descriptor(
  name='DetectedLanguage',
  full_name='ssn.type.TextAnnotation.DetectedLanguage',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='language_code', full_name='ssn.type.TextAnnotation.DetectedLanguage.language_code', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='confidence', full_name='ssn.type.TextAnnotation.DetectedLanguage.confidence', index=1,
      number=2, type=2, cpp_type=6, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=133,
  serialized_end=194,
)

_TEXTANNOTATION_DETECTEDBREAK = _descriptor.Descriptor(
  name='DetectedBreak',
  full_name='ssn.type.TextAnnotation.DetectedBreak',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='type', full_name='ssn.type.TextAnnotation.DetectedBreak.type', index=0,
      number=1, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='is_prefix', full_name='ssn.type.TextAnnotation.DetectedBreak.is_prefix', index=1,
      number=2, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
    _TEXTANNOTATION_DETECTEDBREAK_BREAKTYPE,
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=197,
  serialized_end=396,
)

_TEXTANNOTATION_TEXTPROPERTY = _descriptor.Descriptor(
  name='TextProperty',
  full_name='ssn.type.TextAnnotation.TextProperty',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='detected_languages', full_name='ssn.type.TextAnnotation.TextProperty.detected_languages', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='detected_break', full_name='ssn.type.TextAnnotation.TextProperty.detected_break', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=399,
  serialized_end=548,
)

_TEXTANNOTATION = _descriptor.Descriptor(
  name='TextAnnotation',
  full_name='ssn.type.TextAnnotation',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='pages', full_name='ssn.type.TextAnnotation.pages', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='text', full_name='ssn.type.TextAnnotation.text', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_TEXTANNOTATION_DETECTEDLANGUAGE, _TEXTANNOTATION_DETECTEDBREAK, _TEXTANNOTATION_TEXTPROPERTY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=70,
  serialized_end=548,
)


_PAGE = _descriptor.Descriptor(
  name='Page',
  full_name='ssn.type.Page',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='property', full_name='ssn.type.Page.property', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='width', full_name='ssn.type.Page.width', index=1,
      number=2, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='height', full_name='ssn.type.Page.height', index=2,
      number=3, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='blocks', full_name='ssn.type.Page.blocks', index=3,
      number=4, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='confidence', full_name='ssn.type.Page.confidence', index=4,
      number=5, type=2, cpp_type=6, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=551,
  serialized_end=698,
)


_BLOCK = _descriptor.Descriptor(
  name='Block',
  full_name='ssn.type.Block',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='property', full_name='ssn.type.Block.property', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='bounding_box', full_name='ssn.type.Block.bounding_box', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='paragraphs', full_name='ssn.type.Block.paragraphs', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='block_type', full_name='ssn.type.Block.block_type', index=3,
      number=4, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='confidence', full_name='ssn.type.Block.confidence', index=4,
      number=5, type=2, cpp_type=6, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
    _BLOCK_BLOCKTYPE,
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=701,
  serialized_end=1003,
)


_PARAGRAPH = _descriptor.Descriptor(
  name='Paragraph',
  full_name='ssn.type.Paragraph',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='property', full_name='ssn.type.Paragraph.property', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='bounding_box', full_name='ssn.type.Paragraph.bounding_box', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='words', full_name='ssn.type.Paragraph.words', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='confidence', full_name='ssn.type.Paragraph.confidence', index=3,
      number=4, type=2, cpp_type=6, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1006,
  serialized_end=1171,
)


_WORD = _descriptor.Descriptor(
  name='Word',
  full_name='ssn.type.Word',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='property', full_name='ssn.type.Word.property', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='bounding_box', full_name='ssn.type.Word.bounding_box', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='symbols', full_name='ssn.type.Word.symbols', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='confidence', full_name='ssn.type.Word.confidence', index=3,
      number=4, type=2, cpp_type=6, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1174,
  serialized_end=1338,
)


_SYMBOL = _descriptor.Descriptor(
  name='Symbol',
  full_name='ssn.type.Symbol',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='property', full_name='ssn.type.Symbol.property', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='bounding_box', full_name='ssn.type.Symbol.bounding_box', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='text', full_name='ssn.type.Symbol.text', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='confidence', full_name='ssn.type.Symbol.confidence', index=3,
      number=4, type=2, cpp_type=6, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1341,
  serialized_end=1486,
)

_TEXTANNOTATION_DETECTEDLANGUAGE.containing_type = _TEXTANNOTATION
_TEXTANNOTATION_DETECTEDBREAK.fields_by_name['type'].enum_type = _TEXTANNOTATION_DETECTEDBREAK_BREAKTYPE
_TEXTANNOTATION_DETECTEDBREAK.containing_type = _TEXTANNOTATION
_TEXTANNOTATION_DETECTEDBREAK_BREAKTYPE.containing_type = _TEXTANNOTATION_DETECTEDBREAK
_TEXTANNOTATION_TEXTPROPERTY.fields_by_name['detected_languages'].message_type = _TEXTANNOTATION_DETECTEDLANGUAGE
_TEXTANNOTATION_TEXTPROPERTY.fields_by_name['detected_break'].message_type = _TEXTANNOTATION_DETECTEDBREAK
_TEXTANNOTATION_TEXTPROPERTY.containing_type = _TEXTANNOTATION
_TEXTANNOTATION.fields_by_name['pages'].message_type = _PAGE
_PAGE.fields_by_name['property'].message_type = _TEXTANNOTATION_TEXTPROPERTY
_PAGE.fields_by_name['blocks'].message_type = _BLOCK
_BLOCK.fields_by_name['property'].message_type = _TEXTANNOTATION_TEXTPROPERTY
_BLOCK.fields_by_name['bounding_box'].message_type = ssn_dot_type_dot_geometry__pb2._BOUNDINGPOLY
_BLOCK.fields_by_name['paragraphs'].message_type = _PARAGRAPH
_BLOCK.fields_by_name['block_type'].enum_type = _BLOCK_BLOCKTYPE
_BLOCK_BLOCKTYPE.containing_type = _BLOCK
_PARAGRAPH.fields_by_name['property'].message_type = _TEXTANNOTATION_TEXTPROPERTY
_PARAGRAPH.fields_by_name['bounding_box'].message_type = ssn_dot_type_dot_geometry__pb2._BOUNDINGPOLY
_PARAGRAPH.fields_by_name['words'].message_type = _WORD
_WORD.fields_by_name['property'].message_type = _TEXTANNOTATION_TEXTPROPERTY
_WORD.fields_by_name['bounding_box'].message_type = ssn_dot_type_dot_geometry__pb2._BOUNDINGPOLY
_WORD.fields_by_name['symbols'].message_type = _SYMBOL
_SYMBOL.fields_by_name['property'].message_type = _TEXTANNOTATION_TEXTPROPERTY
_SYMBOL.fields_by_name['bounding_box'].message_type = ssn_dot_type_dot_geometry__pb2._BOUNDINGPOLY
DESCRIPTOR.message_types_by_name['TextAnnotation'] = _TEXTANNOTATION
DESCRIPTOR.message_types_by_name['Page'] = _PAGE
DESCRIPTOR.message_types_by_name['Block'] = _BLOCK
DESCRIPTOR.message_types_by_name['Paragraph'] = _PARAGRAPH
DESCRIPTOR.message_types_by_name['Word'] = _WORD
DESCRIPTOR.message_types_by_name['Symbol'] = _SYMBOL
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

TextAnnotation = _reflection.GeneratedProtocolMessageType('TextAnnotation', (_message.Message,), dict(

  DetectedLanguage = _reflection.GeneratedProtocolMessageType('DetectedLanguage', (_message.Message,), dict(
    DESCRIPTOR = _TEXTANNOTATION_DETECTEDLANGUAGE,
    __module__ = 'ssn.type.text_annotation_pb2'
    # @@protoc_insertion_point(class_scope:ssn.type.TextAnnotation.DetectedLanguage)
    ))
  ,

  DetectedBreak = _reflection.GeneratedProtocolMessageType('DetectedBreak', (_message.Message,), dict(
    DESCRIPTOR = _TEXTANNOTATION_DETECTEDBREAK,
    __module__ = 'ssn.type.text_annotation_pb2'
    # @@protoc_insertion_point(class_scope:ssn.type.TextAnnotation.DetectedBreak)
    ))
  ,

  TextProperty = _reflection.GeneratedProtocolMessageType('TextProperty', (_message.Message,), dict(
    DESCRIPTOR = _TEXTANNOTATION_TEXTPROPERTY,
    __module__ = 'ssn.type.text_annotation_pb2'
    # @@protoc_insertion_point(class_scope:ssn.type.TextAnnotation.TextProperty)
    ))
  ,
  DESCRIPTOR = _TEXTANNOTATION,
  __module__ = 'ssn.type.text_annotation_pb2'
  # @@protoc_insertion_point(class_scope:ssn.type.TextAnnotation)
  ))
_sym_db.RegisterMessage(TextAnnotation)
_sym_db.RegisterMessage(TextAnnotation.DetectedLanguage)
_sym_db.RegisterMessage(TextAnnotation.DetectedBreak)
_sym_db.RegisterMessage(TextAnnotation.TextProperty)

Page = _reflection.GeneratedProtocolMessageType('Page', (_message.Message,), dict(
  DESCRIPTOR = _PAGE,
  __module__ = 'ssn.type.text_annotation_pb2'
  # @@protoc_insertion_point(class_scope:ssn.type.Page)
  ))
_sym_db.RegisterMessage(Page)

Block = _reflection.GeneratedProtocolMessageType('Block', (_message.Message,), dict(
  DESCRIPTOR = _BLOCK,
  __module__ = 'ssn.type.text_annotation_pb2'
  # @@protoc_insertion_point(class_scope:ssn.type.Block)
  ))
_sym_db.RegisterMessage(Block)

Paragraph = _reflection.GeneratedProtocolMessageType('Paragraph', (_message.Message,), dict(
  DESCRIPTOR = _PARAGRAPH,
  __module__ = 'ssn.type.text_annotation_pb2'
  # @@protoc_insertion_point(class_scope:ssn.type.Paragraph)
  ))
_sym_db.RegisterMessage(Paragraph)

Word = _reflection.GeneratedProtocolMessageType('Word', (_message.Message,), dict(
  DESCRIPTOR = _WORD,
  __module__ = 'ssn.type.text_annotation_pb2'
  # @@protoc_insertion_point(class_scope:ssn.type.Word)
  ))
_sym_db.RegisterMessage(Word)

Symbol = _reflection.GeneratedProtocolMessageType('Symbol', (_message.Message,), dict(
  DESCRIPTOR = _SYMBOL,
  __module__ = 'ssn.type.text_annotation_pb2'
  # @@protoc_insertion_point(class_scope:ssn.type.Symbol)
  ))
_sym_db.RegisterMessage(Symbol)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)