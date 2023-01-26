# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: asgt/modelregistry/v1/model_registry.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from vml_proto.asgt.type import dataset_pb2 as asgt_dot_type_dot_dataset__pb2
from vml_proto.asgt.type import dataset_statistics_pb2 as asgt_dot_type_dot_dataset__statistics__pb2
from vml_proto.asgt.type import model_pb2 as asgt_dot_type_dot_model__pb2
from vml_proto.asgt.type import revision_pb2 as asgt_dot_type_dot_revision__pb2
from vml_proto.asgt.type import target_metrics_pb2 as asgt_dot_type_dot_target__metrics__pb2
from vml_proto.asgt.type import train_statistics_pb2 as asgt_dot_type_dot_train__statistics__pb2
from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n*asgt/modelregistry/v1/model_registry.proto\x12\x15\x61sgt.modelregistry.v1\x1a\x17\x61sgt/type/dataset.proto\x1a\"asgt/type/dataset_statistics.proto\x1a\x15\x61sgt/type/model.proto\x1a\x18\x61sgt/type/revision.proto\x1a\x1e\x61sgt/type/target_metrics.proto\x1a asgt/type/train_statistics.proto\x1a\x1bgoogle/protobuf/empty.proto\"\xba\x04\n\x14RegisterModelRequest\x12,\n\x07\x64\x61taset\x18\x01 \x01(\x0b\x32\x12.asgt.type.DatasetR\x07\x64\x61taset\x12/\n\x08revision\x18\x02 \x01(\x0b\x32\x13.asgt.type.RevisionR\x08revision\x12#\n\rmodel_version\x18\x03 \x01(\x03R\x0cmodelVersion\x12R\n\x07metrics\x18\x04 \x03(\x0b\x32\x38.asgt.modelregistry.v1.RegisterModelRequest.MetricsEntryR\x07metrics\x12?\n\x0etarget_metrics\x18\x05 \x03(\x0b\x32\x18.asgt.type.TargetMetricsR\rtargetMetrics\x12\x39\n\ninput_type\x18\x06 \x01(\x0e\x32\x1a.asgt.type.Model.InputTypeR\tinputType\x12\x45\n\x10train_statistics\x18\x07 \x01(\x0b\x32\x1a.asgt.type.TrainStatisticsR\x0ftrainStatistics\x12K\n\x12\x64\x61taset_statistics\x18\x08 \x01(\x0b\x32\x1c.asgt.type.DatasetStatisticsR\x11\x64\x61tasetStatistics\x1a:\n\x0cMetricsEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\x05R\x05value:\x02\x38\x01\"F\n\x16GetCurrentModelRequest\x12,\n\x07\x64\x61taset\x18\x01 \x01(\x0b\x32\x12.asgt.type.DatasetR\x07\x64\x61taset\"A\n\x17GetCurrentModelResponse\x12&\n\x05model\x18\x01 \x01(\x0b\x32\x10.asgt.type.ModelR\x05model2\xd7\x01\n\rModelRegistry\x12T\n\rRegisterModel\x12+.asgt.modelregistry.v1.RegisterModelRequest\x1a\x16.google.protobuf.Empty\x12p\n\x0fGetCurrentModel\x12-.asgt.modelregistry.v1.GetCurrentModelRequest\x1a..asgt.modelregistry.v1.GetCurrentModelResponseB\xf3\x01\n\x1e\x61i.visma.asgt.modelregistry.v1B\x12ModelRegistryProtoP\x01ZGgithub.com/e-conomic/vmlapis/gen/go/asgt/modelregistry/v1;modelregistry\xa2\x02\x03\x41MX\xaa\x02\x15\x41sgt.Modelregistry.V1\xca\x02\x15\x41sgt\\Modelregistry\\V1\xe2\x02!Asgt\\Modelregistry\\V1\\GPBMetadata\xea\x02\x17\x41sgt::Modelregistry::V1b\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'asgt.modelregistry.v1.model_registry_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n\036ai.visma.asgt.modelregistry.v1B\022ModelRegistryProtoP\001ZGgithub.com/e-conomic/vmlapis/gen/go/asgt/modelregistry/v1;modelregistry\242\002\003AMX\252\002\025Asgt.Modelregistry.V1\312\002\025Asgt\\Modelregistry\\V1\342\002!Asgt\\Modelregistry\\V1\\GPBMetadata\352\002\027Asgt::Modelregistry::V1'
  _REGISTERMODELREQUEST_METRICSENTRY._options = None
  _REGISTERMODELREQUEST_METRICSENTRY._serialized_options = b'8\001'
  _REGISTERMODELREQUEST._serialized_start=275
  _REGISTERMODELREQUEST._serialized_end=845
  _REGISTERMODELREQUEST_METRICSENTRY._serialized_start=787
  _REGISTERMODELREQUEST_METRICSENTRY._serialized_end=845
  _GETCURRENTMODELREQUEST._serialized_start=847
  _GETCURRENTMODELREQUEST._serialized_end=917
  _GETCURRENTMODELRESPONSE._serialized_start=919
  _GETCURRENTMODELRESPONSE._serialized_end=984
  _MODELREGISTRY._serialized_start=987
  _MODELREGISTRY._serialized_end=1202
# @@protoc_insertion_point(module_scope)
