// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: asgt/type/train_model_task.proto

package ai.visma.asgt.type;

public final class TrainModelTaskProto {
  private TrainModelTaskProto() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_asgt_type_TrainModelTask_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_asgt_type_TrainModelTask_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n asgt/type/train_model_task.proto\022\tasgt" +
      ".type\032\027asgt/type/dataset.proto\032\030asgt/typ" +
      "e/revision.proto\"\224\001\n\016TrainModelTask\022,\n\007d" +
      "ataset\030\001 \001(\0132\022.asgt.type.DatasetR\007datase" +
      "t\022/\n\010revision\030\002 \001(\0132\023.asgt.type.Revision" +
      "R\010revision\022#\n\rmodel_version\030\004 \001(\003R\014model" +
      "VersionB\246\001\n\022ai.visma.asgt.typeB\023TrainMod" +
      "elTaskProtoP\001Z6github.com/e-conomic/vmla" +
      "pis/gen/go/asgt/type;asgttype\242\002\003ATX\252\002\tAs" +
      "gt.Type\312\002\tAsgt\\Type\342\002\025Asgt\\Type\\GPBMetad" +
      "ata\352\002\nAsgt::Typeb\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          ai.visma.asgt.type.DatasetProto.getDescriptor(),
          ai.visma.asgt.type.RevisionProto.getDescriptor(),
        });
    internal_static_asgt_type_TrainModelTask_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_asgt_type_TrainModelTask_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_asgt_type_TrainModelTask_descriptor,
        new java.lang.String[] { "Dataset", "Revision", "ModelVersion", });
    ai.visma.asgt.type.DatasetProto.getDescriptor();
    ai.visma.asgt.type.RevisionProto.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}