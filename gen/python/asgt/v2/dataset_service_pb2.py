# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: asgt/v2/dataset_service.proto

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from vml_proto.asgt.type import dataset_pb2 as asgt_dot_type_dot_dataset__pb2
from vml_proto.asgt.v2.type import example_pb2 as asgt_dot_v2_dot_type_dot_example__pb2
from vml_proto.asgt.v2.type import training_pb2 as asgt_dot_v2_dot_type_dot_training__pb2
from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2
from options import annotations_pb2 as options_dot_annotations__pb2
from validate import validate_pb2 as validate_dot_validate__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='asgt/v2/dataset_service.proto',
  package='asgt.v2',
  syntax='proto3',
  serialized_options=b'Z+github.com/e-conomic/vmlapis/gen/go/asgt/v2',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\x1d\x61sgt/v2/dataset_service.proto\x12\x07\x61sgt.v2\x1a\x17\x61sgt/type/dataset.proto\x1a\x1a\x61sgt/v2/type/example.proto\x1a\x1b\x61sgt/v2/type/training.proto\x1a\x1cgoogle/api/annotations.proto\x1a\x1bgoogle/protobuf/empty.proto\x1a\x19options/annotations.proto\x1a\x17validate/validate.proto\"S\n\x11GetDatasetRequest\x12>\n\x0c\x64\x61taset_name\x18\x01 \x01(\tB(\xfa\x42%r#(\x80\x02\x32\x1e^[A-Za-z0-9.][A-Za-z0-9_.>-]*$\"\x90\x01\n\x14\x43reateDatasetRequest\x12>\n\x0c\x64\x61taset_name\x18\x01 \x01(\tB(\xfa\x42%r#(\x80\x02\x32\x1e^[A-Za-z0-9.][A-Za-z0-9_.>-]*$\x12\x38\n\x04tags\x18\x02 \x03(\tB*\xfa\x42\x1f\x92\x01\x1c\"\x1ar\x18(@2\x14^[A-Za-z0-9\\s_.>-]*$\xfa\x42\x05\x92\x01\x02\x18\x01\"^\n\x1c\x43reateOrUpdateDatasetRequest\x12>\n\x0c\x64\x61taset_name\x18\x01 \x01(\tB(\xfa\x42%r#(\x80\x02\x32\x1e^[A-Za-z0-9.][A-Za-z0-9_.>-]*$\"V\n\x14\x44\x65leteDatasetRequest\x12>\n\x0c\x64\x61taset_name\x18\x01 \x01(\tB(\xfa\x42%r#(\x80\x02\x32\x1e^[A-Za-z0-9.][A-Za-z0-9_.>-]*$\"N\n\x10\x44\x65leteTagRequest\x12:\n\x08tag_name\x18\x01 \x01(\tB(\xfa\x42%r#(\x80\x02\x32\x1e^[A-Za-z0-9.][A-Za-z0-9_.>-]*$\"~\n\x14\x43reateExampleRequest\x12>\n\x0c\x64\x61taset_name\x18\x01 \x01(\tB(\xfa\x42%r#(\x80\x02\x32\x1e^[A-Za-z0-9.][A-Za-z0-9_.>-]*$\x12&\n\x07\x65xample\x18\x02 \x01(\x0b\x32\x15.asgt.v2.type.Example\"\x86\x01\n\x1c\x43reateOrUpdateExampleRequest\x12>\n\x0c\x64\x61taset_name\x18\x01 \x01(\tB(\xfa\x42%r#(\x80\x02\x32\x1e^[A-Za-z0-9.][A-Za-z0-9_.>-]*$\x12&\n\x07\x65xample\x18\x02 \x01(\x0b\x32\x15.asgt.v2.type.Example\"\x84\x01\n\x19\x42\x61tchCreateExampleRequest\x12>\n\x0c\x64\x61taset_name\x18\x01 \x01(\tB(\xfa\x42%r#(\x80\x02\x32\x1e^[A-Za-z0-9.][A-Za-z0-9_.>-]*$\x12\'\n\x08\x65xamples\x18\x02 \x03(\x0b\x32\x15.asgt.v2.type.Example\"X\n\x16TruncateDatasetRequest\x12>\n\x0c\x64\x61taset_name\x18\x01 \x01(\tB(\xfa\x42%r#(\x80\x02\x32\x1e^[A-Za-z0-9.][A-Za-z0-9_.>-]*$\"2\n\x16TrainingRequestOptions\x12\x18\n\x05limit\x18\x01 \x01(\x03\x42\t\xfa\x42\x06\"\x04\x18\x64 \x00\"\x8e\x01\n\x1aGetDatasetTrainingsRequest\x12>\n\x0c\x64\x61taset_name\x18\x01 \x01(\tB(\xfa\x42%r#(\x80\x02\x32\x1e^[A-Za-z0-9.][A-Za-z0-9_.>-]*$\x12\x30\n\x07options\x18\x02 \x01(\x0b\x32\x1f.asgt.v2.TrainingRequestOptions\"G\n\x13GetTrainingsRequest\x12\x30\n\x07options\x18\x01 \x01(\x0b\x32\x1f.asgt.v2.TrainingRequestOptions\">\n\x11TrainingsResponse\x12)\n\ttrainings\x18\x01 \x03(\x0b\x32\x16.asgt.v2.type.Training2\xe3\n\n\x0e\x44\x61tasetService\x12\x61\n\nGetDataset\x12\x1a.asgt.v2.GetDatasetRequest\x1a\x12.asgt.type.Dataset\"#\x82\xd3\xe4\x93\x02\x1d\x12\x1b/v2/datasets/{dataset_name}\x12_\n\rCreateDataset\x12\x1d.asgt.v2.CreateDatasetRequest\x1a\x16.google.protobuf.Empty\"\x17\x82\xd3\xe4\x93\x02\x11\"\x0c/v2/datasets:\x01*\x12{\n\x15\x43reateOrUpdateDataset\x12%.asgt.v2.CreateOrUpdateDatasetRequest\x1a\x16.google.protobuf.Empty\"#\x82\xd3\xe4\x93\x02\x1d\x1a\x1b/v2/datasets/{dataset_name}\x12g\n\rDeleteDataset\x12\x1d.asgt.v2.DeleteDatasetRequest\x1a\x12.asgt.type.Dataset\"#\x82\xd3\xe4\x93\x02\x1d*\x1b/v2/datasets/{dataset_name}\x12[\n\tDeleteTag\x12\x19.asgt.v2.DeleteTagRequest\x1a\x16.google.protobuf.Empty\"\x1b\x82\xd3\xe4\x93\x02\x15*\x13/v2/tags/{tag_name}\x12w\n\rCreateExample\x12\x1d.asgt.v2.CreateExampleRequest\x1a\x16.google.protobuf.Empty\"/\x82\xd3\xe4\x93\x02)\"$/v2/datasets/{dataset_name}/examples:\x01*\x12\x94\x01\n\x15\x43reateOrUpdateExample\x12%.asgt.v2.CreateOrUpdateExampleRequest\x1a\x16.google.protobuf.Empty\"<\x82\xd3\xe4\x93\x02\x36\x1a\x31/v2/datasets/{dataset_name}/examples/{example.id}:\x01*\x12\x8d\x01\n\x12\x42\x61tchCreateExample\x12\".asgt.v2.BatchCreateExampleRequest\x1a\x16.google.protobuf.Empty\";\x82\xd3\xe4\x93\x02\x35\"0/v2/datasets/{dataset_name}/examples:batchCreate:\x01*\x12x\n\x0fTruncateDataset\x12\x1f.asgt.v2.TruncateDatasetRequest\x1a\x16.google.protobuf.Empty\",\x82\xd3\xe4\x93\x02&*$/v2/datasets/{dataset_name}/examples\x12\x85\x01\n\x13GetDatasetTrainings\x12#.asgt.v2.GetDatasetTrainingsRequest\x1a\x1a.asgt.v2.TrainingsResponse\"-\x82\xd3\xe4\x93\x02\'\x12%/v2/datasets/{dataset_name}/trainings\x12_\n\x0cGetTrainings\x12\x1c.asgt.v2.GetTrainingsRequest\x1a\x1a.asgt.v2.TrainingsResponse\"\x15\x82\xd3\xe4\x93\x02\x0f\x12\r/v2/trainings\x1aG\x92\x41\x44\x12\x42Manage datasets and examples used for training AutoSuggest models.B-Z+github.com/e-conomic/vmlapis/gen/go/asgt/v2b\x06proto3'
  ,
  dependencies=[asgt_dot_type_dot_dataset__pb2.DESCRIPTOR,asgt_dot_v2_dot_type_dot_example__pb2.DESCRIPTOR,asgt_dot_v2_dot_type_dot_training__pb2.DESCRIPTOR,google_dot_api_dot_annotations__pb2.DESCRIPTOR,google_dot_protobuf_dot_empty__pb2.DESCRIPTOR,options_dot_annotations__pb2.DESCRIPTOR,validate_dot_validate__pb2.DESCRIPTOR,])




_GETDATASETREQUEST = _descriptor.Descriptor(
  name='GetDatasetRequest',
  full_name='asgt.v2.GetDatasetRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='dataset_name', full_name='asgt.v2.GetDatasetRequest.dataset_name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=b'\372B%r#(\200\0022\036^[A-Za-z0-9.][A-Za-z0-9_.>-]*$', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=235,
  serialized_end=318,
)


_CREATEDATASETREQUEST = _descriptor.Descriptor(
  name='CreateDatasetRequest',
  full_name='asgt.v2.CreateDatasetRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='dataset_name', full_name='asgt.v2.CreateDatasetRequest.dataset_name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=b'\372B%r#(\200\0022\036^[A-Za-z0-9.][A-Za-z0-9_.>-]*$', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='tags', full_name='asgt.v2.CreateDatasetRequest.tags', index=1,
      number=2, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=b'\372B\037\222\001\034\"\032r\030(@2\024^[A-Za-z0-9\\s_.>-]*$\372B\005\222\001\002\030\001', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=321,
  serialized_end=465,
)


_CREATEORUPDATEDATASETREQUEST = _descriptor.Descriptor(
  name='CreateOrUpdateDatasetRequest',
  full_name='asgt.v2.CreateOrUpdateDatasetRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='dataset_name', full_name='asgt.v2.CreateOrUpdateDatasetRequest.dataset_name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=b'\372B%r#(\200\0022\036^[A-Za-z0-9.][A-Za-z0-9_.>-]*$', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=467,
  serialized_end=561,
)


_DELETEDATASETREQUEST = _descriptor.Descriptor(
  name='DeleteDatasetRequest',
  full_name='asgt.v2.DeleteDatasetRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='dataset_name', full_name='asgt.v2.DeleteDatasetRequest.dataset_name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=b'\372B%r#(\200\0022\036^[A-Za-z0-9.][A-Za-z0-9_.>-]*$', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=563,
  serialized_end=649,
)


_DELETETAGREQUEST = _descriptor.Descriptor(
  name='DeleteTagRequest',
  full_name='asgt.v2.DeleteTagRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='tag_name', full_name='asgt.v2.DeleteTagRequest.tag_name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=b'\372B%r#(\200\0022\036^[A-Za-z0-9.][A-Za-z0-9_.>-]*$', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=651,
  serialized_end=729,
)


_CREATEEXAMPLEREQUEST = _descriptor.Descriptor(
  name='CreateExampleRequest',
  full_name='asgt.v2.CreateExampleRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='dataset_name', full_name='asgt.v2.CreateExampleRequest.dataset_name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=b'\372B%r#(\200\0022\036^[A-Za-z0-9.][A-Za-z0-9_.>-]*$', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='example', full_name='asgt.v2.CreateExampleRequest.example', index=1,
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
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=731,
  serialized_end=857,
)


_CREATEORUPDATEEXAMPLEREQUEST = _descriptor.Descriptor(
  name='CreateOrUpdateExampleRequest',
  full_name='asgt.v2.CreateOrUpdateExampleRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='dataset_name', full_name='asgt.v2.CreateOrUpdateExampleRequest.dataset_name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=b'\372B%r#(\200\0022\036^[A-Za-z0-9.][A-Za-z0-9_.>-]*$', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='example', full_name='asgt.v2.CreateOrUpdateExampleRequest.example', index=1,
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
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=860,
  serialized_end=994,
)


_BATCHCREATEEXAMPLEREQUEST = _descriptor.Descriptor(
  name='BatchCreateExampleRequest',
  full_name='asgt.v2.BatchCreateExampleRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='dataset_name', full_name='asgt.v2.BatchCreateExampleRequest.dataset_name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=b'\372B%r#(\200\0022\036^[A-Za-z0-9.][A-Za-z0-9_.>-]*$', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='examples', full_name='asgt.v2.BatchCreateExampleRequest.examples', index=1,
      number=2, type=11, cpp_type=10, label=3,
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
  serialized_start=997,
  serialized_end=1129,
)


_TRUNCATEDATASETREQUEST = _descriptor.Descriptor(
  name='TruncateDatasetRequest',
  full_name='asgt.v2.TruncateDatasetRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='dataset_name', full_name='asgt.v2.TruncateDatasetRequest.dataset_name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=b'\372B%r#(\200\0022\036^[A-Za-z0-9.][A-Za-z0-9_.>-]*$', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=1131,
  serialized_end=1219,
)


_TRAININGREQUESTOPTIONS = _descriptor.Descriptor(
  name='TrainingRequestOptions',
  full_name='asgt.v2.TrainingRequestOptions',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='limit', full_name='asgt.v2.TrainingRequestOptions.limit', index=0,
      number=1, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=b'\372B\006\"\004\030d \000', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=1221,
  serialized_end=1271,
)


_GETDATASETTRAININGSREQUEST = _descriptor.Descriptor(
  name='GetDatasetTrainingsRequest',
  full_name='asgt.v2.GetDatasetTrainingsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='dataset_name', full_name='asgt.v2.GetDatasetTrainingsRequest.dataset_name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=b'\372B%r#(\200\0022\036^[A-Za-z0-9.][A-Za-z0-9_.>-]*$', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='options', full_name='asgt.v2.GetDatasetTrainingsRequest.options', index=1,
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
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1274,
  serialized_end=1416,
)


_GETTRAININGSREQUEST = _descriptor.Descriptor(
  name='GetTrainingsRequest',
  full_name='asgt.v2.GetTrainingsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='options', full_name='asgt.v2.GetTrainingsRequest.options', index=0,
      number=1, type=11, cpp_type=10, label=1,
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
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1418,
  serialized_end=1489,
)


_TRAININGSRESPONSE = _descriptor.Descriptor(
  name='TrainingsResponse',
  full_name='asgt.v2.TrainingsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='trainings', full_name='asgt.v2.TrainingsResponse.trainings', index=0,
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
  serialized_start=1491,
  serialized_end=1553,
)

_CREATEEXAMPLEREQUEST.fields_by_name['example'].message_type = asgt_dot_v2_dot_type_dot_example__pb2._EXAMPLE
_CREATEORUPDATEEXAMPLEREQUEST.fields_by_name['example'].message_type = asgt_dot_v2_dot_type_dot_example__pb2._EXAMPLE
_BATCHCREATEEXAMPLEREQUEST.fields_by_name['examples'].message_type = asgt_dot_v2_dot_type_dot_example__pb2._EXAMPLE
_GETDATASETTRAININGSREQUEST.fields_by_name['options'].message_type = _TRAININGREQUESTOPTIONS
_GETTRAININGSREQUEST.fields_by_name['options'].message_type = _TRAININGREQUESTOPTIONS
_TRAININGSRESPONSE.fields_by_name['trainings'].message_type = asgt_dot_v2_dot_type_dot_training__pb2._TRAINING
DESCRIPTOR.message_types_by_name['GetDatasetRequest'] = _GETDATASETREQUEST
DESCRIPTOR.message_types_by_name['CreateDatasetRequest'] = _CREATEDATASETREQUEST
DESCRIPTOR.message_types_by_name['CreateOrUpdateDatasetRequest'] = _CREATEORUPDATEDATASETREQUEST
DESCRIPTOR.message_types_by_name['DeleteDatasetRequest'] = _DELETEDATASETREQUEST
DESCRIPTOR.message_types_by_name['DeleteTagRequest'] = _DELETETAGREQUEST
DESCRIPTOR.message_types_by_name['CreateExampleRequest'] = _CREATEEXAMPLEREQUEST
DESCRIPTOR.message_types_by_name['CreateOrUpdateExampleRequest'] = _CREATEORUPDATEEXAMPLEREQUEST
DESCRIPTOR.message_types_by_name['BatchCreateExampleRequest'] = _BATCHCREATEEXAMPLEREQUEST
DESCRIPTOR.message_types_by_name['TruncateDatasetRequest'] = _TRUNCATEDATASETREQUEST
DESCRIPTOR.message_types_by_name['TrainingRequestOptions'] = _TRAININGREQUESTOPTIONS
DESCRIPTOR.message_types_by_name['GetDatasetTrainingsRequest'] = _GETDATASETTRAININGSREQUEST
DESCRIPTOR.message_types_by_name['GetTrainingsRequest'] = _GETTRAININGSREQUEST
DESCRIPTOR.message_types_by_name['TrainingsResponse'] = _TRAININGSRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

GetDatasetRequest = _reflection.GeneratedProtocolMessageType('GetDatasetRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETDATASETREQUEST,
  '__module__' : 'asgt.v2.dataset_service_pb2'
  # @@protoc_insertion_point(class_scope:asgt.v2.GetDatasetRequest)
  })
_sym_db.RegisterMessage(GetDatasetRequest)

CreateDatasetRequest = _reflection.GeneratedProtocolMessageType('CreateDatasetRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATEDATASETREQUEST,
  '__module__' : 'asgt.v2.dataset_service_pb2'
  # @@protoc_insertion_point(class_scope:asgt.v2.CreateDatasetRequest)
  })
_sym_db.RegisterMessage(CreateDatasetRequest)

CreateOrUpdateDatasetRequest = _reflection.GeneratedProtocolMessageType('CreateOrUpdateDatasetRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATEORUPDATEDATASETREQUEST,
  '__module__' : 'asgt.v2.dataset_service_pb2'
  # @@protoc_insertion_point(class_scope:asgt.v2.CreateOrUpdateDatasetRequest)
  })
_sym_db.RegisterMessage(CreateOrUpdateDatasetRequest)

DeleteDatasetRequest = _reflection.GeneratedProtocolMessageType('DeleteDatasetRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETEDATASETREQUEST,
  '__module__' : 'asgt.v2.dataset_service_pb2'
  # @@protoc_insertion_point(class_scope:asgt.v2.DeleteDatasetRequest)
  })
_sym_db.RegisterMessage(DeleteDatasetRequest)

DeleteTagRequest = _reflection.GeneratedProtocolMessageType('DeleteTagRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETETAGREQUEST,
  '__module__' : 'asgt.v2.dataset_service_pb2'
  # @@protoc_insertion_point(class_scope:asgt.v2.DeleteTagRequest)
  })
_sym_db.RegisterMessage(DeleteTagRequest)

CreateExampleRequest = _reflection.GeneratedProtocolMessageType('CreateExampleRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATEEXAMPLEREQUEST,
  '__module__' : 'asgt.v2.dataset_service_pb2'
  # @@protoc_insertion_point(class_scope:asgt.v2.CreateExampleRequest)
  })
_sym_db.RegisterMessage(CreateExampleRequest)

CreateOrUpdateExampleRequest = _reflection.GeneratedProtocolMessageType('CreateOrUpdateExampleRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATEORUPDATEEXAMPLEREQUEST,
  '__module__' : 'asgt.v2.dataset_service_pb2'
  # @@protoc_insertion_point(class_scope:asgt.v2.CreateOrUpdateExampleRequest)
  })
_sym_db.RegisterMessage(CreateOrUpdateExampleRequest)

BatchCreateExampleRequest = _reflection.GeneratedProtocolMessageType('BatchCreateExampleRequest', (_message.Message,), {
  'DESCRIPTOR' : _BATCHCREATEEXAMPLEREQUEST,
  '__module__' : 'asgt.v2.dataset_service_pb2'
  # @@protoc_insertion_point(class_scope:asgt.v2.BatchCreateExampleRequest)
  })
_sym_db.RegisterMessage(BatchCreateExampleRequest)

TruncateDatasetRequest = _reflection.GeneratedProtocolMessageType('TruncateDatasetRequest', (_message.Message,), {
  'DESCRIPTOR' : _TRUNCATEDATASETREQUEST,
  '__module__' : 'asgt.v2.dataset_service_pb2'
  # @@protoc_insertion_point(class_scope:asgt.v2.TruncateDatasetRequest)
  })
_sym_db.RegisterMessage(TruncateDatasetRequest)

TrainingRequestOptions = _reflection.GeneratedProtocolMessageType('TrainingRequestOptions', (_message.Message,), {
  'DESCRIPTOR' : _TRAININGREQUESTOPTIONS,
  '__module__' : 'asgt.v2.dataset_service_pb2'
  # @@protoc_insertion_point(class_scope:asgt.v2.TrainingRequestOptions)
  })
_sym_db.RegisterMessage(TrainingRequestOptions)

GetDatasetTrainingsRequest = _reflection.GeneratedProtocolMessageType('GetDatasetTrainingsRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETDATASETTRAININGSREQUEST,
  '__module__' : 'asgt.v2.dataset_service_pb2'
  # @@protoc_insertion_point(class_scope:asgt.v2.GetDatasetTrainingsRequest)
  })
_sym_db.RegisterMessage(GetDatasetTrainingsRequest)

GetTrainingsRequest = _reflection.GeneratedProtocolMessageType('GetTrainingsRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETTRAININGSREQUEST,
  '__module__' : 'asgt.v2.dataset_service_pb2'
  # @@protoc_insertion_point(class_scope:asgt.v2.GetTrainingsRequest)
  })
_sym_db.RegisterMessage(GetTrainingsRequest)

TrainingsResponse = _reflection.GeneratedProtocolMessageType('TrainingsResponse', (_message.Message,), {
  'DESCRIPTOR' : _TRAININGSRESPONSE,
  '__module__' : 'asgt.v2.dataset_service_pb2'
  # @@protoc_insertion_point(class_scope:asgt.v2.TrainingsResponse)
  })
_sym_db.RegisterMessage(TrainingsResponse)


DESCRIPTOR._options = None
_GETDATASETREQUEST.fields_by_name['dataset_name']._options = None
_CREATEDATASETREQUEST.fields_by_name['dataset_name']._options = None
_CREATEDATASETREQUEST.fields_by_name['tags']._options = None
_CREATEORUPDATEDATASETREQUEST.fields_by_name['dataset_name']._options = None
_DELETEDATASETREQUEST.fields_by_name['dataset_name']._options = None
_DELETETAGREQUEST.fields_by_name['tag_name']._options = None
_CREATEEXAMPLEREQUEST.fields_by_name['dataset_name']._options = None
_CREATEORUPDATEEXAMPLEREQUEST.fields_by_name['dataset_name']._options = None
_BATCHCREATEEXAMPLEREQUEST.fields_by_name['dataset_name']._options = None
_TRUNCATEDATASETREQUEST.fields_by_name['dataset_name']._options = None
_TRAININGREQUESTOPTIONS.fields_by_name['limit']._options = None
_GETDATASETTRAININGSREQUEST.fields_by_name['dataset_name']._options = None

_DATASETSERVICE = _descriptor.ServiceDescriptor(
  name='DatasetService',
  full_name='asgt.v2.DatasetService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=b'\222AD\022BManage datasets and examples used for training AutoSuggest models.',
  create_key=_descriptor._internal_create_key,
  serialized_start=1556,
  serialized_end=2935,
  methods=[
  _descriptor.MethodDescriptor(
    name='GetDataset',
    full_name='asgt.v2.DatasetService.GetDataset',
    index=0,
    containing_service=None,
    input_type=_GETDATASETREQUEST,
    output_type=asgt_dot_type_dot_dataset__pb2._DATASET,
    serialized_options=b'\202\323\344\223\002\035\022\033/v2/datasets/{dataset_name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateDataset',
    full_name='asgt.v2.DatasetService.CreateDataset',
    index=1,
    containing_service=None,
    input_type=_CREATEDATASETREQUEST,
    output_type=google_dot_protobuf_dot_empty__pb2._EMPTY,
    serialized_options=b'\202\323\344\223\002\021\"\014/v2/datasets:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateOrUpdateDataset',
    full_name='asgt.v2.DatasetService.CreateOrUpdateDataset',
    index=2,
    containing_service=None,
    input_type=_CREATEORUPDATEDATASETREQUEST,
    output_type=google_dot_protobuf_dot_empty__pb2._EMPTY,
    serialized_options=b'\202\323\344\223\002\035\032\033/v2/datasets/{dataset_name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteDataset',
    full_name='asgt.v2.DatasetService.DeleteDataset',
    index=3,
    containing_service=None,
    input_type=_DELETEDATASETREQUEST,
    output_type=asgt_dot_type_dot_dataset__pb2._DATASET,
    serialized_options=b'\202\323\344\223\002\035*\033/v2/datasets/{dataset_name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteTag',
    full_name='asgt.v2.DatasetService.DeleteTag',
    index=4,
    containing_service=None,
    input_type=_DELETETAGREQUEST,
    output_type=google_dot_protobuf_dot_empty__pb2._EMPTY,
    serialized_options=b'\202\323\344\223\002\025*\023/v2/tags/{tag_name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateExample',
    full_name='asgt.v2.DatasetService.CreateExample',
    index=5,
    containing_service=None,
    input_type=_CREATEEXAMPLEREQUEST,
    output_type=google_dot_protobuf_dot_empty__pb2._EMPTY,
    serialized_options=b'\202\323\344\223\002)\"$/v2/datasets/{dataset_name}/examples:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateOrUpdateExample',
    full_name='asgt.v2.DatasetService.CreateOrUpdateExample',
    index=6,
    containing_service=None,
    input_type=_CREATEORUPDATEEXAMPLEREQUEST,
    output_type=google_dot_protobuf_dot_empty__pb2._EMPTY,
    serialized_options=b'\202\323\344\223\0026\0321/v2/datasets/{dataset_name}/examples/{example.id}:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='BatchCreateExample',
    full_name='asgt.v2.DatasetService.BatchCreateExample',
    index=7,
    containing_service=None,
    input_type=_BATCHCREATEEXAMPLEREQUEST,
    output_type=google_dot_protobuf_dot_empty__pb2._EMPTY,
    serialized_options=b'\202\323\344\223\0025\"0/v2/datasets/{dataset_name}/examples:batchCreate:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='TruncateDataset',
    full_name='asgt.v2.DatasetService.TruncateDataset',
    index=8,
    containing_service=None,
    input_type=_TRUNCATEDATASETREQUEST,
    output_type=google_dot_protobuf_dot_empty__pb2._EMPTY,
    serialized_options=b'\202\323\344\223\002&*$/v2/datasets/{dataset_name}/examples',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetDatasetTrainings',
    full_name='asgt.v2.DatasetService.GetDatasetTrainings',
    index=9,
    containing_service=None,
    input_type=_GETDATASETTRAININGSREQUEST,
    output_type=_TRAININGSRESPONSE,
    serialized_options=b'\202\323\344\223\002\'\022%/v2/datasets/{dataset_name}/trainings',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetTrainings',
    full_name='asgt.v2.DatasetService.GetTrainings',
    index=10,
    containing_service=None,
    input_type=_GETTRAININGSREQUEST,
    output_type=_TRAININGSRESPONSE,
    serialized_options=b'\202\323\344\223\002\017\022\r/v2/trainings',
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_DATASETSERVICE)

DESCRIPTOR.services_by_name['DatasetService'] = _DATASETSERVICE

# @@protoc_insertion_point(module_scope)