# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: asgt/v2alpha/dataset_service.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from vml_proto.asgt.type import dataset_pb2 as asgt_dot_type_dot_dataset__pb2
from vml_proto.asgt.type import example_pb2 as asgt_dot_type_dot_example__pb2
from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2
from options import annotations_pb2 as options_dot_annotations__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='asgt/v2alpha/dataset_service.proto',
  package='asgt.v2alpha',
  syntax='proto3',
  serialized_options=b'Z0github.com/e-conomic/vmlapis/gen/go/asgt/v2alpha',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\"asgt/v2alpha/dataset_service.proto\x12\x0c\x61sgt.v2alpha\x1a\x17\x61sgt/type/dataset.proto\x1a\x17\x61sgt/type/example.proto\x1a\x1cgoogle/api/annotations.proto\x1a\x1bgoogle/protobuf/empty.proto\x1a\x19options/annotations.proto\"!\n\x11GetDatasetRequest\x12\x0c\n\x04name\x18\x01 \x01(\t\"2\n\x14\x43reateDatasetRequest\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x0c\n\x04tags\x18\x02 \x03(\t\"$\n\x14\x44\x65leteDatasetRequest\x12\x0c\n\x04name\x18\x01 \x01(\t\" \n\x10\x44\x65leteTagRequest\x12\x0c\n\x04name\x18\x01 \x01(\t\"Q\n\x14\x43reateExampleRequest\x12\x14\n\x0c\x64\x61taset_name\x18\x01 \x01(\t\x12#\n\x07\x65xample\x18\x02 \x01(\x0b\x32\x12.asgt.type.Example\"Y\n\x1c\x43reateOrUpdateExampleRequest\x12\x14\n\x0c\x64\x61taset_name\x18\x01 \x01(\t\x12#\n\x07\x65xample\x18\x02 \x01(\x0b\x32\x12.asgt.type.Example\"W\n\x19\x42\x61tchCreateExampleRequest\x12\x14\n\x0c\x64\x61taset_name\x18\x01 \x01(\t\x12$\n\x08\x65xamples\x18\x02 \x03(\x0b\x32\x12.asgt.type.Example\"&\n\x16TruncateDatasetRequest\x12\x0c\n\x04name\x18\x01 \x01(\t2\x8b\t\n\x0e\x44\x61tasetService\x12^\n\nGetDataset\x12\x1f.asgt.v2alpha.GetDatasetRequest\x1a\x12.asgt.type.Dataset\"\x1b\x82\xd3\xe4\x93\x02\x15\x12\x13/v2/datasets/{name}\x12\x64\n\rCreateDataset\x12\".asgt.v2alpha.CreateDatasetRequest\x1a\x16.google.protobuf.Empty\"\x17\x82\xd3\xe4\x93\x02\x11\"\x0c/v2/datasets:\x01*\x12s\n\x15\x43reateOrUpdateDataset\x12\".asgt.v2alpha.CreateDatasetRequest\x1a\x16.google.protobuf.Empty\"\x1e\x82\xd3\xe4\x93\x02\x18\x1a\x13/v2/datasets/{name}:\x01*\x12\x64\n\rDeleteDataset\x12\".asgt.v2alpha.DeleteDatasetRequest\x1a\x12.asgt.type.Dataset\"\x1b\x82\xd3\xe4\x93\x02\x15*\x13/v2/datasets/{name}\x12\\\n\tDeleteTag\x12\x1e.asgt.v2alpha.DeleteTagRequest\x1a\x16.google.protobuf.Empty\"\x17\x82\xd3\xe4\x93\x02\x11*\x0f/v2/tags/{name}\x12\x82\x01\n\rCreateExample\x12\".asgt.v2alpha.CreateExampleRequest\x1a\x16.google.protobuf.Empty\"5\x82\xd3\xe4\x93\x02/\"$/v2/datasets/{dataset_name}/examples:\x07\x65xample\x12\x9f\x01\n\x15\x43reateOrUpdateExample\x12*.asgt.v2alpha.CreateOrUpdateExampleRequest\x1a\x16.google.protobuf.Empty\"B\x82\xd3\xe4\x93\x02<\x1a\x31/v2/datasets/{dataset_name}/examples/{example.id}:\x07\x65xample\x12\x92\x01\n\x12\x42\x61tchCreateExample\x12\'.asgt.v2alpha.BatchCreateExampleRequest\x1a\x16.google.protobuf.Empty\";\x82\xd3\xe4\x93\x02\x35\"0/v2/datasets/{dataset_name}/examples:batchCreate:\x01*\x12u\n\x0fTruncateDataset\x12$.asgt.v2alpha.TruncateDatasetRequest\x1a\x16.google.protobuf.Empty\"$\x82\xd3\xe4\x93\x02\x1e*\x1c/v2/datasets/{name}/examples\x1aG\x92\x41\x44\x12\x42Manage datasets and examples used for training AutoSuggest models.B2Z0github.com/e-conomic/vmlapis/gen/go/asgt/v2alphab\x06proto3'
  ,
  dependencies=[asgt_dot_type_dot_dataset__pb2.DESCRIPTOR,asgt_dot_type_dot_example__pb2.DESCRIPTOR,google_dot_api_dot_annotations__pb2.DESCRIPTOR,google_dot_protobuf_dot_empty__pb2.DESCRIPTOR,options_dot_annotations__pb2.DESCRIPTOR,])




_GETDATASETREQUEST = _descriptor.Descriptor(
  name='GetDatasetRequest',
  full_name='asgt.v2alpha.GetDatasetRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='asgt.v2alpha.GetDatasetRequest.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
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
  serialized_start=188,
  serialized_end=221,
)


_CREATEDATASETREQUEST = _descriptor.Descriptor(
  name='CreateDatasetRequest',
  full_name='asgt.v2alpha.CreateDatasetRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='asgt.v2alpha.CreateDatasetRequest.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='tags', full_name='asgt.v2alpha.CreateDatasetRequest.tags', index=1,
      number=2, type=9, cpp_type=9, label=3,
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
  serialized_start=223,
  serialized_end=273,
)


_DELETEDATASETREQUEST = _descriptor.Descriptor(
  name='DeleteDatasetRequest',
  full_name='asgt.v2alpha.DeleteDatasetRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='asgt.v2alpha.DeleteDatasetRequest.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
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
  serialized_start=275,
  serialized_end=311,
)


_DELETETAGREQUEST = _descriptor.Descriptor(
  name='DeleteTagRequest',
  full_name='asgt.v2alpha.DeleteTagRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='asgt.v2alpha.DeleteTagRequest.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
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
  serialized_start=313,
  serialized_end=345,
)


_CREATEEXAMPLEREQUEST = _descriptor.Descriptor(
  name='CreateExampleRequest',
  full_name='asgt.v2alpha.CreateExampleRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='dataset_name', full_name='asgt.v2alpha.CreateExampleRequest.dataset_name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='example', full_name='asgt.v2alpha.CreateExampleRequest.example', index=1,
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
  serialized_start=347,
  serialized_end=428,
)


_CREATEORUPDATEEXAMPLEREQUEST = _descriptor.Descriptor(
  name='CreateOrUpdateExampleRequest',
  full_name='asgt.v2alpha.CreateOrUpdateExampleRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='dataset_name', full_name='asgt.v2alpha.CreateOrUpdateExampleRequest.dataset_name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='example', full_name='asgt.v2alpha.CreateOrUpdateExampleRequest.example', index=1,
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
  serialized_start=430,
  serialized_end=519,
)


_BATCHCREATEEXAMPLEREQUEST = _descriptor.Descriptor(
  name='BatchCreateExampleRequest',
  full_name='asgt.v2alpha.BatchCreateExampleRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='dataset_name', full_name='asgt.v2alpha.BatchCreateExampleRequest.dataset_name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='examples', full_name='asgt.v2alpha.BatchCreateExampleRequest.examples', index=1,
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
  serialized_start=521,
  serialized_end=608,
)


_TRUNCATEDATASETREQUEST = _descriptor.Descriptor(
  name='TruncateDatasetRequest',
  full_name='asgt.v2alpha.TruncateDatasetRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='asgt.v2alpha.TruncateDatasetRequest.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
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
  serialized_start=610,
  serialized_end=648,
)

_CREATEEXAMPLEREQUEST.fields_by_name['example'].message_type = asgt_dot_type_dot_example__pb2._EXAMPLE
_CREATEORUPDATEEXAMPLEREQUEST.fields_by_name['example'].message_type = asgt_dot_type_dot_example__pb2._EXAMPLE
_BATCHCREATEEXAMPLEREQUEST.fields_by_name['examples'].message_type = asgt_dot_type_dot_example__pb2._EXAMPLE
DESCRIPTOR.message_types_by_name['GetDatasetRequest'] = _GETDATASETREQUEST
DESCRIPTOR.message_types_by_name['CreateDatasetRequest'] = _CREATEDATASETREQUEST
DESCRIPTOR.message_types_by_name['DeleteDatasetRequest'] = _DELETEDATASETREQUEST
DESCRIPTOR.message_types_by_name['DeleteTagRequest'] = _DELETETAGREQUEST
DESCRIPTOR.message_types_by_name['CreateExampleRequest'] = _CREATEEXAMPLEREQUEST
DESCRIPTOR.message_types_by_name['CreateOrUpdateExampleRequest'] = _CREATEORUPDATEEXAMPLEREQUEST
DESCRIPTOR.message_types_by_name['BatchCreateExampleRequest'] = _BATCHCREATEEXAMPLEREQUEST
DESCRIPTOR.message_types_by_name['TruncateDatasetRequest'] = _TRUNCATEDATASETREQUEST
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

GetDatasetRequest = _reflection.GeneratedProtocolMessageType('GetDatasetRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETDATASETREQUEST,
  '__module__' : 'asgt.v2alpha.dataset_service_pb2'
  # @@protoc_insertion_point(class_scope:asgt.v2alpha.GetDatasetRequest)
  })
_sym_db.RegisterMessage(GetDatasetRequest)

CreateDatasetRequest = _reflection.GeneratedProtocolMessageType('CreateDatasetRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATEDATASETREQUEST,
  '__module__' : 'asgt.v2alpha.dataset_service_pb2'
  # @@protoc_insertion_point(class_scope:asgt.v2alpha.CreateDatasetRequest)
  })
_sym_db.RegisterMessage(CreateDatasetRequest)

DeleteDatasetRequest = _reflection.GeneratedProtocolMessageType('DeleteDatasetRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETEDATASETREQUEST,
  '__module__' : 'asgt.v2alpha.dataset_service_pb2'
  # @@protoc_insertion_point(class_scope:asgt.v2alpha.DeleteDatasetRequest)
  })
_sym_db.RegisterMessage(DeleteDatasetRequest)

DeleteTagRequest = _reflection.GeneratedProtocolMessageType('DeleteTagRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETETAGREQUEST,
  '__module__' : 'asgt.v2alpha.dataset_service_pb2'
  # @@protoc_insertion_point(class_scope:asgt.v2alpha.DeleteTagRequest)
  })
_sym_db.RegisterMessage(DeleteTagRequest)

CreateExampleRequest = _reflection.GeneratedProtocolMessageType('CreateExampleRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATEEXAMPLEREQUEST,
  '__module__' : 'asgt.v2alpha.dataset_service_pb2'
  # @@protoc_insertion_point(class_scope:asgt.v2alpha.CreateExampleRequest)
  })
_sym_db.RegisterMessage(CreateExampleRequest)

CreateOrUpdateExampleRequest = _reflection.GeneratedProtocolMessageType('CreateOrUpdateExampleRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATEORUPDATEEXAMPLEREQUEST,
  '__module__' : 'asgt.v2alpha.dataset_service_pb2'
  # @@protoc_insertion_point(class_scope:asgt.v2alpha.CreateOrUpdateExampleRequest)
  })
_sym_db.RegisterMessage(CreateOrUpdateExampleRequest)

BatchCreateExampleRequest = _reflection.GeneratedProtocolMessageType('BatchCreateExampleRequest', (_message.Message,), {
  'DESCRIPTOR' : _BATCHCREATEEXAMPLEREQUEST,
  '__module__' : 'asgt.v2alpha.dataset_service_pb2'
  # @@protoc_insertion_point(class_scope:asgt.v2alpha.BatchCreateExampleRequest)
  })
_sym_db.RegisterMessage(BatchCreateExampleRequest)

TruncateDatasetRequest = _reflection.GeneratedProtocolMessageType('TruncateDatasetRequest', (_message.Message,), {
  'DESCRIPTOR' : _TRUNCATEDATASETREQUEST,
  '__module__' : 'asgt.v2alpha.dataset_service_pb2'
  # @@protoc_insertion_point(class_scope:asgt.v2alpha.TruncateDatasetRequest)
  })
_sym_db.RegisterMessage(TruncateDatasetRequest)


DESCRIPTOR._options = None

_DATASETSERVICE = _descriptor.ServiceDescriptor(
  name='DatasetService',
  full_name='asgt.v2alpha.DatasetService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=b'\222AD\022BManage datasets and examples used for training AutoSuggest models.',
  create_key=_descriptor._internal_create_key,
  serialized_start=651,
  serialized_end=1814,
  methods=[
  _descriptor.MethodDescriptor(
    name='GetDataset',
    full_name='asgt.v2alpha.DatasetService.GetDataset',
    index=0,
    containing_service=None,
    input_type=_GETDATASETREQUEST,
    output_type=asgt_dot_type_dot_dataset__pb2._DATASET,
    serialized_options=b'\202\323\344\223\002\025\022\023/v2/datasets/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateDataset',
    full_name='asgt.v2alpha.DatasetService.CreateDataset',
    index=1,
    containing_service=None,
    input_type=_CREATEDATASETREQUEST,
    output_type=google_dot_protobuf_dot_empty__pb2._EMPTY,
    serialized_options=b'\202\323\344\223\002\021\"\014/v2/datasets:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateOrUpdateDataset',
    full_name='asgt.v2alpha.DatasetService.CreateOrUpdateDataset',
    index=2,
    containing_service=None,
    input_type=_CREATEDATASETREQUEST,
    output_type=google_dot_protobuf_dot_empty__pb2._EMPTY,
    serialized_options=b'\202\323\344\223\002\030\032\023/v2/datasets/{name}:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteDataset',
    full_name='asgt.v2alpha.DatasetService.DeleteDataset',
    index=3,
    containing_service=None,
    input_type=_DELETEDATASETREQUEST,
    output_type=asgt_dot_type_dot_dataset__pb2._DATASET,
    serialized_options=b'\202\323\344\223\002\025*\023/v2/datasets/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteTag',
    full_name='asgt.v2alpha.DatasetService.DeleteTag',
    index=4,
    containing_service=None,
    input_type=_DELETETAGREQUEST,
    output_type=google_dot_protobuf_dot_empty__pb2._EMPTY,
    serialized_options=b'\202\323\344\223\002\021*\017/v2/tags/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateExample',
    full_name='asgt.v2alpha.DatasetService.CreateExample',
    index=5,
    containing_service=None,
    input_type=_CREATEEXAMPLEREQUEST,
    output_type=google_dot_protobuf_dot_empty__pb2._EMPTY,
    serialized_options=b'\202\323\344\223\002/\"$/v2/datasets/{dataset_name}/examples:\007example',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateOrUpdateExample',
    full_name='asgt.v2alpha.DatasetService.CreateOrUpdateExample',
    index=6,
    containing_service=None,
    input_type=_CREATEORUPDATEEXAMPLEREQUEST,
    output_type=google_dot_protobuf_dot_empty__pb2._EMPTY,
    serialized_options=b'\202\323\344\223\002<\0321/v2/datasets/{dataset_name}/examples/{example.id}:\007example',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='BatchCreateExample',
    full_name='asgt.v2alpha.DatasetService.BatchCreateExample',
    index=7,
    containing_service=None,
    input_type=_BATCHCREATEEXAMPLEREQUEST,
    output_type=google_dot_protobuf_dot_empty__pb2._EMPTY,
    serialized_options=b'\202\323\344\223\0025\"0/v2/datasets/{dataset_name}/examples:batchCreate:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='TruncateDataset',
    full_name='asgt.v2alpha.DatasetService.TruncateDataset',
    index=8,
    containing_service=None,
    input_type=_TRUNCATEDATASETREQUEST,
    output_type=google_dot_protobuf_dot_empty__pb2._EMPTY,
    serialized_options=b'\202\323\344\223\002\036*\034/v2/datasets/{name}/examples',
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_DATASETSERVICE)

DESCRIPTOR.services_by_name['DatasetService'] = _DATASETSERVICE

# @@protoc_insertion_point(module_scope)