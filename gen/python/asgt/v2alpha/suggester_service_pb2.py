# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: asgt/v2alpha/suggester_service.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from vml_proto.asgt.v2alpha.type import data_pb2 as asgt_dot_v2alpha_dot_type_dot_data__pb2
from vml_proto.asgt.v2alpha.type import model_pb2 as asgt_dot_v2alpha_dot_type_dot_model__pb2
from vml_proto.asgt.v2alpha.type import prediction_pb2 as asgt_dot_v2alpha_dot_type_dot_prediction__pb2
from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from options import annotations_pb2 as options_dot_annotations__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='asgt/v2alpha/suggester_service.proto',
  package='asgt.v2alpha',
  syntax='proto3',
  serialized_options=b'Z0github.com/e-conomic/vmlapis/gen/go/asgt/v2alpha\222A?\022\026\n\013AutoSuggest2\007v2alpha*\001\0022\020application/json:\020application/json',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n$asgt/v2alpha/suggester_service.proto\x12\x0c\x61sgt.v2alpha\x1a\x1c\x61sgt/v2alpha/type/data.proto\x1a\x1d\x61sgt/v2alpha/type/model.proto\x1a\"asgt/v2alpha/type/prediction.proto\x1a\x1cgoogle/api/annotations.proto\x1a\x19options/annotations.proto\"\x7f\n\x0eSuggestOptions\x12\x15\n\rsuggest_limit\x18\x01 \x01(\x05\x12;\n\x0emin_confidence\x18\x02 \x01(\x0e\x32#.asgt.v2alpha.type.Confidence.Level:\x19\x92\x41\x16\x32\x14{\"suggest_limit\": 3}\"u\n\x0eSuggestRequest\x12\x0c\n\x04name\x18\x01 \x01(\t\x12&\n\x05input\x18\x02 \x01(\x0b\x32\x17.asgt.v2alpha.type.Data\x12-\n\x07options\x18\x03 \x01(\x0b\x32\x1c.asgt.v2alpha.SuggestOptions\"m\n\x0fSuggestResponse\x12\x31\n\nprediction\x18\x01 \x01(\x0b\x32\x1d.asgt.v2alpha.type.Prediction\x12\'\n\x05model\x18\x02 \x01(\x0b\x32\x18.asgt.v2alpha.type.Model\"{\n\x13\x42\x61tchSuggestRequest\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\'\n\x06inputs\x18\x02 \x03(\x0b\x32\x17.asgt.v2alpha.type.Data\x12-\n\x07options\x18\x03 \x01(\x0b\x32\x1c.asgt.v2alpha.SuggestOptions\"s\n\x14\x42\x61tchSuggestResponse\x12\x32\n\x0bpredictions\x18\x01 \x03(\x0b\x32\x1d.asgt.v2alpha.type.Prediction\x12\'\n\x05model\x18\x02 \x01(\x0b\x32\x18.asgt.v2alpha.type.Model2\xa8\x07\n\x10SuggesterService\x12\x80\x02\n\x07Suggest\x12\x1c.asgt.v2alpha.SuggestRequest\x1a\x1d.asgt.v2alpha.SuggestResponse\"\xb7\x01\x82\xd3\xe4\x93\x02\xb0\x01\"\x1b/v2/datasets/{name}:suggest:\x01*Z$\"\"/v2/datasets/{name=bank/*}:suggestZ7\"5/v2/datasets/{name=electronic-invoice-line/*}:suggestZ/\"-/v2/datasets/{name=scanned-invoice/*}:suggest\x12\xa3\x02\n\x0c\x42\x61tchSuggest\x12!.asgt.v2alpha.BatchSuggestRequest\x1a\".asgt.v2alpha.BatchSuggestResponse\"\xcb\x01\x82\xd3\xe4\x93\x02\xc4\x01\" /v2/datasets/{name}:batchSuggest:\x01*Z)\"\'/v2/datasets/{name=bank/*}:batchSuggestZ<\":/v2/datasets/{name=electronic-invoice-line/*}:batchSuggestZ4\"2/v2/datasets/{name=scanned-invoice/*}:batchSuggest\x12\xc0\x02\n\x11ModelBatchSuggest\x12!.asgt.v2alpha.BatchSuggestRequest\x1a\".asgt.v2alpha.BatchSuggestResponse\"\xe3\x01\x82\xd3\xe4\x93\x02\xdc\x01\"&/v2/datasets/{name}/model:batchSuggest:\x01*Z/\"-/v2/datasets/{name=bank/*}/model:batchSuggestZB\"@/v2/datasets/{name=electronic-invoice-line/*}/model:batchSuggestZ:\"8/v2/datasets/{name=scanned-invoice/*}/model:batchSuggest\x1a(\x92\x41%\x12#Make predictions against a dataset.BtZ0github.com/e-conomic/vmlapis/gen/go/asgt/v2alpha\x92\x41?\x12\x16\n\x0b\x41utoSuggest2\x07v2alpha*\x01\x02\x32\x10\x61pplication/json:\x10\x61pplication/jsonb\x06proto3'
  ,
  dependencies=[asgt_dot_v2alpha_dot_type_dot_data__pb2.DESCRIPTOR,asgt_dot_v2alpha_dot_type_dot_model__pb2.DESCRIPTOR,asgt_dot_v2alpha_dot_type_dot_prediction__pb2.DESCRIPTOR,google_dot_api_dot_annotations__pb2.DESCRIPTOR,options_dot_annotations__pb2.DESCRIPTOR,])




_SUGGESTOPTIONS = _descriptor.Descriptor(
  name='SuggestOptions',
  full_name='asgt.v2alpha.SuggestOptions',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='suggest_limit', full_name='asgt.v2alpha.SuggestOptions.suggest_limit', index=0,
      number=1, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='min_confidence', full_name='asgt.v2alpha.SuggestOptions.min_confidence', index=1,
      number=2, type=14, cpp_type=8, label=1,
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
  serialized_options=b'\222A\0262\024{\"suggest_limit\": 3}',
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=208,
  serialized_end=335,
)


_SUGGESTREQUEST = _descriptor.Descriptor(
  name='SuggestRequest',
  full_name='asgt.v2alpha.SuggestRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='asgt.v2alpha.SuggestRequest.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='input', full_name='asgt.v2alpha.SuggestRequest.input', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='options', full_name='asgt.v2alpha.SuggestRequest.options', index=2,
      number=3, type=11, cpp_type=10, label=1,
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
  serialized_start=337,
  serialized_end=454,
)


_SUGGESTRESPONSE = _descriptor.Descriptor(
  name='SuggestResponse',
  full_name='asgt.v2alpha.SuggestResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='prediction', full_name='asgt.v2alpha.SuggestResponse.prediction', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='model', full_name='asgt.v2alpha.SuggestResponse.model', index=1,
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
  serialized_start=456,
  serialized_end=565,
)


_BATCHSUGGESTREQUEST = _descriptor.Descriptor(
  name='BatchSuggestRequest',
  full_name='asgt.v2alpha.BatchSuggestRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='asgt.v2alpha.BatchSuggestRequest.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='inputs', full_name='asgt.v2alpha.BatchSuggestRequest.inputs', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='options', full_name='asgt.v2alpha.BatchSuggestRequest.options', index=2,
      number=3, type=11, cpp_type=10, label=1,
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
  serialized_start=567,
  serialized_end=690,
)


_BATCHSUGGESTRESPONSE = _descriptor.Descriptor(
  name='BatchSuggestResponse',
  full_name='asgt.v2alpha.BatchSuggestResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='predictions', full_name='asgt.v2alpha.BatchSuggestResponse.predictions', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='model', full_name='asgt.v2alpha.BatchSuggestResponse.model', index=1,
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
  serialized_start=692,
  serialized_end=807,
)

_SUGGESTOPTIONS.fields_by_name['min_confidence'].enum_type = asgt_dot_v2alpha_dot_type_dot_prediction__pb2._CONFIDENCE_LEVEL
_SUGGESTREQUEST.fields_by_name['input'].message_type = asgt_dot_v2alpha_dot_type_dot_data__pb2._DATA
_SUGGESTREQUEST.fields_by_name['options'].message_type = _SUGGESTOPTIONS
_SUGGESTRESPONSE.fields_by_name['prediction'].message_type = asgt_dot_v2alpha_dot_type_dot_prediction__pb2._PREDICTION
_SUGGESTRESPONSE.fields_by_name['model'].message_type = asgt_dot_v2alpha_dot_type_dot_model__pb2._MODEL
_BATCHSUGGESTREQUEST.fields_by_name['inputs'].message_type = asgt_dot_v2alpha_dot_type_dot_data__pb2._DATA
_BATCHSUGGESTREQUEST.fields_by_name['options'].message_type = _SUGGESTOPTIONS
_BATCHSUGGESTRESPONSE.fields_by_name['predictions'].message_type = asgt_dot_v2alpha_dot_type_dot_prediction__pb2._PREDICTION
_BATCHSUGGESTRESPONSE.fields_by_name['model'].message_type = asgt_dot_v2alpha_dot_type_dot_model__pb2._MODEL
DESCRIPTOR.message_types_by_name['SuggestOptions'] = _SUGGESTOPTIONS
DESCRIPTOR.message_types_by_name['SuggestRequest'] = _SUGGESTREQUEST
DESCRIPTOR.message_types_by_name['SuggestResponse'] = _SUGGESTRESPONSE
DESCRIPTOR.message_types_by_name['BatchSuggestRequest'] = _BATCHSUGGESTREQUEST
DESCRIPTOR.message_types_by_name['BatchSuggestResponse'] = _BATCHSUGGESTRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

SuggestOptions = _reflection.GeneratedProtocolMessageType('SuggestOptions', (_message.Message,), {
  'DESCRIPTOR' : _SUGGESTOPTIONS,
  '__module__' : 'asgt.v2alpha.suggester_service_pb2'
  # @@protoc_insertion_point(class_scope:asgt.v2alpha.SuggestOptions)
  })
_sym_db.RegisterMessage(SuggestOptions)

SuggestRequest = _reflection.GeneratedProtocolMessageType('SuggestRequest', (_message.Message,), {
  'DESCRIPTOR' : _SUGGESTREQUEST,
  '__module__' : 'asgt.v2alpha.suggester_service_pb2'
  # @@protoc_insertion_point(class_scope:asgt.v2alpha.SuggestRequest)
  })
_sym_db.RegisterMessage(SuggestRequest)

SuggestResponse = _reflection.GeneratedProtocolMessageType('SuggestResponse', (_message.Message,), {
  'DESCRIPTOR' : _SUGGESTRESPONSE,
  '__module__' : 'asgt.v2alpha.suggester_service_pb2'
  # @@protoc_insertion_point(class_scope:asgt.v2alpha.SuggestResponse)
  })
_sym_db.RegisterMessage(SuggestResponse)

BatchSuggestRequest = _reflection.GeneratedProtocolMessageType('BatchSuggestRequest', (_message.Message,), {
  'DESCRIPTOR' : _BATCHSUGGESTREQUEST,
  '__module__' : 'asgt.v2alpha.suggester_service_pb2'
  # @@protoc_insertion_point(class_scope:asgt.v2alpha.BatchSuggestRequest)
  })
_sym_db.RegisterMessage(BatchSuggestRequest)

BatchSuggestResponse = _reflection.GeneratedProtocolMessageType('BatchSuggestResponse', (_message.Message,), {
  'DESCRIPTOR' : _BATCHSUGGESTRESPONSE,
  '__module__' : 'asgt.v2alpha.suggester_service_pb2'
  # @@protoc_insertion_point(class_scope:asgt.v2alpha.BatchSuggestResponse)
  })
_sym_db.RegisterMessage(BatchSuggestResponse)


DESCRIPTOR._options = None
_SUGGESTOPTIONS._options = None

_SUGGESTERSERVICE = _descriptor.ServiceDescriptor(
  name='SuggesterService',
  full_name='asgt.v2alpha.SuggesterService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=b'\222A%\022#Make predictions against a dataset.',
  create_key=_descriptor._internal_create_key,
  serialized_start=810,
  serialized_end=1746,
  methods=[
  _descriptor.MethodDescriptor(
    name='Suggest',
    full_name='asgt.v2alpha.SuggesterService.Suggest',
    index=0,
    containing_service=None,
    input_type=_SUGGESTREQUEST,
    output_type=_SUGGESTRESPONSE,
    serialized_options=b'\202\323\344\223\002\260\001\"\033/v2/datasets/{name}:suggest:\001*Z$\"\"/v2/datasets/{name=bank/*}:suggestZ7\"5/v2/datasets/{name=electronic-invoice-line/*}:suggestZ/\"-/v2/datasets/{name=scanned-invoice/*}:suggest',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='BatchSuggest',
    full_name='asgt.v2alpha.SuggesterService.BatchSuggest',
    index=1,
    containing_service=None,
    input_type=_BATCHSUGGESTREQUEST,
    output_type=_BATCHSUGGESTRESPONSE,
    serialized_options=b'\202\323\344\223\002\304\001\" /v2/datasets/{name}:batchSuggest:\001*Z)\"\'/v2/datasets/{name=bank/*}:batchSuggestZ<\":/v2/datasets/{name=electronic-invoice-line/*}:batchSuggestZ4\"2/v2/datasets/{name=scanned-invoice/*}:batchSuggest',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='ModelBatchSuggest',
    full_name='asgt.v2alpha.SuggesterService.ModelBatchSuggest',
    index=2,
    containing_service=None,
    input_type=_BATCHSUGGESTREQUEST,
    output_type=_BATCHSUGGESTRESPONSE,
    serialized_options=b'\202\323\344\223\002\334\001\"&/v2/datasets/{name}/model:batchSuggest:\001*Z/\"-/v2/datasets/{name=bank/*}/model:batchSuggestZB\"@/v2/datasets/{name=electronic-invoice-line/*}/model:batchSuggestZ:\"8/v2/datasets/{name=scanned-invoice/*}/model:batchSuggest',
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_SUGGESTERSERVICE)

DESCRIPTOR.services_by_name['SuggesterService'] = _SUGGESTERSERVICE

# @@protoc_insertion_point(module_scope)
