// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: asgt/modelregistry/v1/model_registry.proto

package ai.visma.asgt.modelregistry.v1;

public final class ModelRegistryProto {
  private ModelRegistryProto() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_asgt_modelregistry_v1_RegisterModelRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_asgt_modelregistry_v1_RegisterModelRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_asgt_modelregistry_v1_RegisterModelRequest_MetricsEntry_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_asgt_modelregistry_v1_RegisterModelRequest_MetricsEntry_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_asgt_modelregistry_v1_GetCurrentModelRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_asgt_modelregistry_v1_GetCurrentModelRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_asgt_modelregistry_v1_GetCurrentModelResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_asgt_modelregistry_v1_GetCurrentModelResponse_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n*asgt/modelregistry/v1/model_registry.p" +
      "roto\022\025asgt.modelregistry.v1\032\027asgt/type/d" +
      "ataset.proto\032\"asgt/type/dataset_statisti" +
      "cs.proto\032\025asgt/type/model.proto\032\030asgt/ty" +
      "pe/revision.proto\032\036asgt/type/target_metr" +
      "ics.proto\032 asgt/type/train_statistics.pr" +
      "oto\032\033google/protobuf/empty.proto\"\272\004\n\024Reg" +
      "isterModelRequest\022,\n\007dataset\030\001 \001(\0132\022.asg" +
      "t.type.DatasetR\007dataset\022/\n\010revision\030\002 \001(" +
      "\0132\023.asgt.type.RevisionR\010revision\022#\n\rmode" +
      "l_version\030\003 \001(\003R\014modelVersion\022R\n\007metrics" +
      "\030\004 \003(\01328.asgt.modelregistry.v1.RegisterM" +
      "odelRequest.MetricsEntryR\007metrics\022?\n\016tar" +
      "get_metrics\030\005 \003(\0132\030.asgt.type.TargetMetr" +
      "icsR\rtargetMetrics\0229\n\ninput_type\030\006 \001(\0162\032" +
      ".asgt.type.Model.InputTypeR\tinputType\022E\n" +
      "\020train_statistics\030\007 \001(\0132\032.asgt.type.Trai" +
      "nStatisticsR\017trainStatistics\022K\n\022dataset_" +
      "statistics\030\010 \001(\0132\034.asgt.type.DatasetStat" +
      "isticsR\021datasetStatistics\032:\n\014MetricsEntr" +
      "y\022\020\n\003key\030\001 \001(\tR\003key\022\024\n\005value\030\002 \001(\005R\005valu" +
      "e:\0028\001\"F\n\026GetCurrentModelRequest\022,\n\007datas" +
      "et\030\001 \001(\0132\022.asgt.type.DatasetR\007dataset\"A\n" +
      "\027GetCurrentModelResponse\022&\n\005model\030\001 \001(\0132" +
      "\020.asgt.type.ModelR\005model2\315\002\n\rModelRegist" +
      "ry\022T\n\rRegisterModel\022+.asgt.modelregistry" +
      ".v1.RegisterModelRequest\032\026.google.protob" +
      "uf.Empty\022p\n\017GetCurrentModel\022-.asgt.model" +
      "registry.v1.GetCurrentModelRequest\032..asg" +
      "t.modelregistry.v1.GetCurrentModelRespon" +
      "se\022t\n\023GetCurrentFullModel\022-.asgt.modelre" +
      "gistry.v1.GetCurrentModelRequest\032..asgt." +
      "modelregistry.v1.GetCurrentModelResponse" +
      "B\363\001\n\036ai.visma.asgt.modelregistry.v1B\022Mod" +
      "elRegistryProtoP\001ZGgithub.com/e-conomic/" +
      "vmlapis/gen/go/asgt/modelregistry/v1;mod" +
      "elregistry\242\002\003AMX\252\002\025Asgt.Modelregistry.V1" +
      "\312\002\025Asgt\\Modelregistry\\V1\342\002!Asgt\\Modelreg" +
      "istry\\V1\\GPBMetadata\352\002\027Asgt::Modelregist" +
      "ry::V1b\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          ai.visma.asgt.type.DatasetProto.getDescriptor(),
          ai.visma.asgt.type.DatasetStatisticsProto.getDescriptor(),
          ai.visma.asgt.type.ModelProto.getDescriptor(),
          ai.visma.asgt.type.RevisionProto.getDescriptor(),
          ai.visma.asgt.type.TargetMetricsProto.getDescriptor(),
          ai.visma.asgt.type.TrainStatisticsProto.getDescriptor(),
          com.google.protobuf.EmptyProto.getDescriptor(),
        });
    internal_static_asgt_modelregistry_v1_RegisterModelRequest_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_asgt_modelregistry_v1_RegisterModelRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_asgt_modelregistry_v1_RegisterModelRequest_descriptor,
        new java.lang.String[] { "Dataset", "Revision", "ModelVersion", "Metrics", "TargetMetrics", "InputType", "TrainStatistics", "DatasetStatistics", });
    internal_static_asgt_modelregistry_v1_RegisterModelRequest_MetricsEntry_descriptor =
      internal_static_asgt_modelregistry_v1_RegisterModelRequest_descriptor.getNestedTypes().get(0);
    internal_static_asgt_modelregistry_v1_RegisterModelRequest_MetricsEntry_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_asgt_modelregistry_v1_RegisterModelRequest_MetricsEntry_descriptor,
        new java.lang.String[] { "Key", "Value", });
    internal_static_asgt_modelregistry_v1_GetCurrentModelRequest_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_asgt_modelregistry_v1_GetCurrentModelRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_asgt_modelregistry_v1_GetCurrentModelRequest_descriptor,
        new java.lang.String[] { "Dataset", });
    internal_static_asgt_modelregistry_v1_GetCurrentModelResponse_descriptor =
      getDescriptor().getMessageTypes().get(2);
    internal_static_asgt_modelregistry_v1_GetCurrentModelResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_asgt_modelregistry_v1_GetCurrentModelResponse_descriptor,
        new java.lang.String[] { "Model", });
    ai.visma.asgt.type.DatasetProto.getDescriptor();
    ai.visma.asgt.type.DatasetStatisticsProto.getDescriptor();
    ai.visma.asgt.type.ModelProto.getDescriptor();
    ai.visma.asgt.type.RevisionProto.getDescriptor();
    ai.visma.asgt.type.TargetMetricsProto.getDescriptor();
    ai.visma.asgt.type.TrainStatisticsProto.getDescriptor();
    com.google.protobuf.EmptyProto.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}
