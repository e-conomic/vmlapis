// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: asgt/v2/type/training.proto

package ai.visma.asgt.v2.type;

public final class TrainingProto {
  private TrainingProto() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_asgt_v2_type_Training_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_asgt_v2_type_Training_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\033asgt/v2/type/training.proto\022\014asgt.v2.t" +
      "ype\032\027asgt/type/dataset.proto\032\037google/pro" +
      "tobuf/timestamp.proto\"\352\002\n\010Training\0229\n\ncr" +
      "eated_at\030\001 \001(\0132\032.google.protobuf.Timesta" +
      "mpR\tcreatedAt\022\026\n\006status\030\002 \001(\tR\006status\022\'\n" +
      "\017training_status\030\003 \001(\tR\016trainingStatus\0226" +
      "\n\027training_status_message\030\004 \001(\tR\025trainin" +
      "gStatusMessage\022;\n\013finish_time\030\005 \001(\0132\032.go" +
      "ogle.protobuf.TimestampR\nfinishTime\022,\n\007d" +
      "ataset\030\006 \001(\0132\022.asgt.type.DatasetR\007datase" +
      "t\022?\n\rschedule_time\030\007 \001(\0132\032.google.protob" +
      "uf.TimestampR\014scheduleTimeB\263\001\n\025ai.visma." +
      "asgt.v2.typeB\rTrainingProtoP\001Z9github.co" +
      "m/e-conomic/vmlapis/gen/go/asgt/v2/type;" +
      "asgttype\242\002\003AVT\252\002\014Asgt.V2.Type\312\002\014Asgt\\V2\\" +
      "Type\342\002\030Asgt\\V2\\Type\\GPBMetadata\352\002\016Asgt::" +
      "V2::Typeb\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          ai.visma.asgt.type.DatasetProto.getDescriptor(),
          com.google.protobuf.TimestampProto.getDescriptor(),
        });
    internal_static_asgt_v2_type_Training_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_asgt_v2_type_Training_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_asgt_v2_type_Training_descriptor,
        new java.lang.String[] { "CreatedAt", "Status", "TrainingStatus", "TrainingStatusMessage", "FinishTime", "Dataset", "ScheduleTime", });
    ai.visma.asgt.type.DatasetProto.getDescriptor();
    com.google.protobuf.TimestampProto.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}
