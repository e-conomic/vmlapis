# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: asgt/type/train_statistics.proto

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='asgt/type/train_statistics.proto',
  package='asgt.type',
  syntax='proto3',
  serialized_options=b'Z6github.com/e-conomic/vmlapis/gen/go/asgt/type;asgttype',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n asgt/type/train_statistics.proto\x12\tasgt.type\"j\n\nTargetStat\x12\x12\n\nclass_name\x18\x01 \x01(\t\x12#\n\x1brelative_dataset_proportion\x18\x02 \x01(\x02\x12#\n\x1b\x61\x62solute_dataset_proportion\x18\x03 \x01(\x05\":\n\x0bTargetStats\x12+\n\x0ctarget_stats\x18\x01 \x03(\x0b\x32\x15.asgt.type.TargetStat\"\xaf\x01\n\x0b\x46\x65\x61tureStat\x12\x14\n\x0c\x66\x65\x61ture_name\x18\x01 \x01(\t\x12\x31\n\x0c\x66\x65\x61ture_type\x18\x02 \x01(\x0e\x32\x1b.asgt.type.FeatureStat.Type\x12\x18\n\x10information_gain\x18\x03 \x01(\x02\"=\n\x04Type\x12\x07\n\x03INT\x10\x00\x12\t\n\x05\x46LOAT\x10\x01\x12\n\n\x06STRING\x10\x02\x12\t\n\x05\x42YTES\x10\x03\x12\n\n\x06STRUCT\x10\x04\"=\n\x0c\x46\x65\x61tureStats\x12-\n\rfeature_stats\x18\x01 \x03(\x0b\x32\x16.asgt.type.FeatureStat\"\x81\x03\n\x0fTrainStatistics\x12S\n\x16target_stats_by_target\x18\x01 \x03(\x0b\x32\x33.asgt.type.TrainStatistics.TargetStatsByTargetEntry\x12U\n\x17\x66\x65\x61ture_stats_by_target\x18\x02 \x03(\x0b\x32\x34.asgt.type.TrainStatistics.FeatureStatsByTargetEntry\x12\x18\n\x10similarity_index\x18\x03 \x01(\x02\x1aR\n\x18TargetStatsByTargetEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12%\n\x05value\x18\x02 \x01(\x0b\x32\x16.asgt.type.TargetStats:\x02\x38\x01\x1aT\n\x19\x46\x65\x61tureStatsByTargetEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12&\n\x05value\x18\x02 \x01(\x0b\x32\x17.asgt.type.FeatureStats:\x02\x38\x01\x42\x38Z6github.com/e-conomic/vmlapis/gen/go/asgt/type;asgttypeb\x06proto3'
)



_FEATURESTAT_TYPE = _descriptor.EnumDescriptor(
  name='Type',
  full_name='asgt.type.FeatureStat.Type',
  filename=None,
  file=DESCRIPTOR,
  create_key=_descriptor._internal_create_key,
  values=[
    _descriptor.EnumValueDescriptor(
      name='INT', index=0, number=0,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='FLOAT', index=1, number=1,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='STRING', index=2, number=2,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='BYTES', index=3, number=3,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='STRUCT', index=4, number=4,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=330,
  serialized_end=391,
)
_sym_db.RegisterEnumDescriptor(_FEATURESTAT_TYPE)


_TARGETSTAT = _descriptor.Descriptor(
  name='TargetStat',
  full_name='asgt.type.TargetStat',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='class_name', full_name='asgt.type.TargetStat.class_name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='relative_dataset_proportion', full_name='asgt.type.TargetStat.relative_dataset_proportion', index=1,
      number=2, type=2, cpp_type=6, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='absolute_dataset_proportion', full_name='asgt.type.TargetStat.absolute_dataset_proportion', index=2,
      number=3, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=47,
  serialized_end=153,
)


_TARGETSTATS = _descriptor.Descriptor(
  name='TargetStats',
  full_name='asgt.type.TargetStats',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='target_stats', full_name='asgt.type.TargetStats.target_stats', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=155,
  serialized_end=213,
)


_FEATURESTAT = _descriptor.Descriptor(
  name='FeatureStat',
  full_name='asgt.type.FeatureStat',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='feature_name', full_name='asgt.type.FeatureStat.feature_name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='feature_type', full_name='asgt.type.FeatureStat.feature_type', index=1,
      number=2, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='information_gain', full_name='asgt.type.FeatureStat.information_gain', index=2,
      number=3, type=2, cpp_type=6, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
    _FEATURESTAT_TYPE,
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=216,
  serialized_end=391,
)


_FEATURESTATS = _descriptor.Descriptor(
  name='FeatureStats',
  full_name='asgt.type.FeatureStats',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='feature_stats', full_name='asgt.type.FeatureStats.feature_stats', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=393,
  serialized_end=454,
)


_TRAINSTATISTICS_TARGETSTATSBYTARGETENTRY = _descriptor.Descriptor(
  name='TargetStatsByTargetEntry',
  full_name='asgt.type.TrainStatistics.TargetStatsByTargetEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='asgt.type.TrainStatistics.TargetStatsByTargetEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='asgt.type.TrainStatistics.TargetStatsByTargetEntry.value', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=b'8\001',
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=674,
  serialized_end=756,
)

_TRAINSTATISTICS_FEATURESTATSBYTARGETENTRY = _descriptor.Descriptor(
  name='FeatureStatsByTargetEntry',
  full_name='asgt.type.TrainStatistics.FeatureStatsByTargetEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='asgt.type.TrainStatistics.FeatureStatsByTargetEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='asgt.type.TrainStatistics.FeatureStatsByTargetEntry.value', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=b'8\001',
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=758,
  serialized_end=842,
)

_TRAINSTATISTICS = _descriptor.Descriptor(
  name='TrainStatistics',
  full_name='asgt.type.TrainStatistics',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='target_stats_by_target', full_name='asgt.type.TrainStatistics.target_stats_by_target', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='feature_stats_by_target', full_name='asgt.type.TrainStatistics.feature_stats_by_target', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='similarity_index', full_name='asgt.type.TrainStatistics.similarity_index', index=2,
      number=3, type=2, cpp_type=6, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_TRAINSTATISTICS_TARGETSTATSBYTARGETENTRY, _TRAINSTATISTICS_FEATURESTATSBYTARGETENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=457,
  serialized_end=842,
)

_TARGETSTATS.fields_by_name['target_stats'].message_type = _TARGETSTAT
_FEATURESTAT.fields_by_name['feature_type'].enum_type = _FEATURESTAT_TYPE
_FEATURESTAT_TYPE.containing_type = _FEATURESTAT
_FEATURESTATS.fields_by_name['feature_stats'].message_type = _FEATURESTAT
_TRAINSTATISTICS_TARGETSTATSBYTARGETENTRY.fields_by_name['value'].message_type = _TARGETSTATS
_TRAINSTATISTICS_TARGETSTATSBYTARGETENTRY.containing_type = _TRAINSTATISTICS
_TRAINSTATISTICS_FEATURESTATSBYTARGETENTRY.fields_by_name['value'].message_type = _FEATURESTATS
_TRAINSTATISTICS_FEATURESTATSBYTARGETENTRY.containing_type = _TRAINSTATISTICS
_TRAINSTATISTICS.fields_by_name['target_stats_by_target'].message_type = _TRAINSTATISTICS_TARGETSTATSBYTARGETENTRY
_TRAINSTATISTICS.fields_by_name['feature_stats_by_target'].message_type = _TRAINSTATISTICS_FEATURESTATSBYTARGETENTRY
DESCRIPTOR.message_types_by_name['TargetStat'] = _TARGETSTAT
DESCRIPTOR.message_types_by_name['TargetStats'] = _TARGETSTATS
DESCRIPTOR.message_types_by_name['FeatureStat'] = _FEATURESTAT
DESCRIPTOR.message_types_by_name['FeatureStats'] = _FEATURESTATS
DESCRIPTOR.message_types_by_name['TrainStatistics'] = _TRAINSTATISTICS
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

TargetStat = _reflection.GeneratedProtocolMessageType('TargetStat', (_message.Message,), {
  'DESCRIPTOR' : _TARGETSTAT,
  '__module__' : 'asgt.type.train_statistics_pb2'
  # @@protoc_insertion_point(class_scope:asgt.type.TargetStat)
  })
_sym_db.RegisterMessage(TargetStat)

TargetStats = _reflection.GeneratedProtocolMessageType('TargetStats', (_message.Message,), {
  'DESCRIPTOR' : _TARGETSTATS,
  '__module__' : 'asgt.type.train_statistics_pb2'
  # @@protoc_insertion_point(class_scope:asgt.type.TargetStats)
  })
_sym_db.RegisterMessage(TargetStats)

FeatureStat = _reflection.GeneratedProtocolMessageType('FeatureStat', (_message.Message,), {
  'DESCRIPTOR' : _FEATURESTAT,
  '__module__' : 'asgt.type.train_statistics_pb2'
  # @@protoc_insertion_point(class_scope:asgt.type.FeatureStat)
  })
_sym_db.RegisterMessage(FeatureStat)

FeatureStats = _reflection.GeneratedProtocolMessageType('FeatureStats', (_message.Message,), {
  'DESCRIPTOR' : _FEATURESTATS,
  '__module__' : 'asgt.type.train_statistics_pb2'
  # @@protoc_insertion_point(class_scope:asgt.type.FeatureStats)
  })
_sym_db.RegisterMessage(FeatureStats)

TrainStatistics = _reflection.GeneratedProtocolMessageType('TrainStatistics', (_message.Message,), {

  'TargetStatsByTargetEntry' : _reflection.GeneratedProtocolMessageType('TargetStatsByTargetEntry', (_message.Message,), {
    'DESCRIPTOR' : _TRAINSTATISTICS_TARGETSTATSBYTARGETENTRY,
    '__module__' : 'asgt.type.train_statistics_pb2'
    # @@protoc_insertion_point(class_scope:asgt.type.TrainStatistics.TargetStatsByTargetEntry)
    })
  ,

  'FeatureStatsByTargetEntry' : _reflection.GeneratedProtocolMessageType('FeatureStatsByTargetEntry', (_message.Message,), {
    'DESCRIPTOR' : _TRAINSTATISTICS_FEATURESTATSBYTARGETENTRY,
    '__module__' : 'asgt.type.train_statistics_pb2'
    # @@protoc_insertion_point(class_scope:asgt.type.TrainStatistics.FeatureStatsByTargetEntry)
    })
  ,
  'DESCRIPTOR' : _TRAINSTATISTICS,
  '__module__' : 'asgt.type.train_statistics_pb2'
  # @@protoc_insertion_point(class_scope:asgt.type.TrainStatistics)
  })
_sym_db.RegisterMessage(TrainStatistics)
_sym_db.RegisterMessage(TrainStatistics.TargetStatsByTargetEntry)
_sym_db.RegisterMessage(TrainStatistics.FeatureStatsByTargetEntry)


DESCRIPTOR._options = None
_TRAINSTATISTICS_TARGETSTATSBYTARGETENTRY._options = None
_TRAINSTATISTICS_FEATURESTATSBYTARGETENTRY._options = None
# @@protoc_insertion_point(module_scope)