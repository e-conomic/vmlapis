// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: asgt/type/sample.proto

package ai.visma.asgt.type;

public final class SampleProto {
  private SampleProto() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_asgt_type_Sample_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_asgt_type_Sample_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\026asgt/type/sample.proto\022\tasgt.type\032\024asg" +
      "t/type/data.proto\032\034asgt/type/target_valu" +
      "e.proto\"j\n\006Sample\022#\n\004data\030\001 \001(\0132\017.asgt.t" +
      "ype.DataR\004data\022;\n\rtarget_values\030\002 \003(\0132\026." +
      "asgt.type.TargetValueR\014targetValuesB\236\001\n\022" +
      "ai.visma.asgt.typeB\013SampleProtoP\001Z6githu" +
      "b.com/e-conomic/vmlapis/gen/go/asgt/type" +
      ";asgttype\242\002\003ATX\252\002\tAsgt.Type\312\002\tAsgt\\Type\342" +
      "\002\025Asgt\\Type\\GPBMetadata\352\002\nAsgt::Typeb\006pr" +
      "oto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          ai.visma.asgt.type.DataProto.getDescriptor(),
          ai.visma.asgt.type.TargetValueProto.getDescriptor(),
        });
    internal_static_asgt_type_Sample_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_asgt_type_Sample_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_asgt_type_Sample_descriptor,
        new java.lang.String[] { "Data", "TargetValues", });
    ai.visma.asgt.type.DataProto.getDescriptor();
    ai.visma.asgt.type.TargetValueProto.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}
