// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: asgt/jester/v1/jester.proto

package ai.visma.asgt.jester.v1;

public final class JesterProto {
  private JesterProto() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_asgt_jester_v1_SuggestionResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_asgt_jester_v1_SuggestionResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_asgt_jester_v1_SuggestionOptions_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_asgt_jester_v1_SuggestionOptions_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_asgt_jester_v1_SuggestionRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_asgt_jester_v1_SuggestionRequest_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\033asgt/jester/v1/jester.proto\022\016asgt.jest" +
      "er.v1\032\024asgt/type/data.proto\032\025asgt/type/m" +
      "odel.proto\032\032asgt/type/prediction.proto\032\034" +
      "google/api/annotations.proto\032.protoc-gen" +
      "-openapiv2/options/annotations.proto\"u\n\022" +
      "SuggestionResponse\0227\n\013predictions\030\001 \003(\0132" +
      "\025.asgt.type.PredictionR\013predictions\022&\n\005m" +
      "odel\030\002 \001(\0132\020.asgt.type.ModelR\005model\"\202\001\n\021" +
      "SuggestionOptions\022)\n\020suggestion_limit\030\001 " +
      "\001(\005R\017suggestionLimit\022B\n\016min_confidence\030\002" +
      " \001(\0162\033.asgt.type.Confidence.LevelR\rminCo" +
      "nfidence\"\265\001\n\021SuggestionRequest\022\022\n\004name\030\001" +
      " \001(\tR\004name\022\022\n\004type\030\002 \001(\tR\004type\022\'\n\006inputs" +
      "\030\003 \003(\0132\017.asgt.type.DataR\006inputs\022;\n\007optio" +
      "ns\030\004 \001(\0132!.asgt.jester.v1.SuggestionOpti" +
      "onsR\007options\022\022\n\004tags\030\005 \003(\tR\004tags2\200\001\n\006Jes" +
      "ter\022v\n\007Suggest\022!.asgt.jester.v1.Suggesti" +
      "onRequest\032\".asgt.jester.v1.SuggestionRes" +
      "ponse\"$\202\323\344\223\002\036:\001*\"\031/v1/{type}/{name}:sugg" +
      "estB\370\001\n\027ai.visma.asgt.jester.v1B\013JesterP" +
      "rotoP\001Z9github.com/e-conomic/vmlapis/gen" +
      "/go/asgt/jester/v1;jester\242\002\003AJX\252\002\016Asgt.J" +
      "ester.V1\312\002\016Asgt\\Jester\\V1\342\002\032Asgt\\Jester\\" +
      "V1\\GPBMetadata\352\002\020Asgt::Jester::V1\222A:\022\021\n\013" +
      "AutoSuggest2\002v1*\001\0022\020application/json:\020ap" +
      "plication/jsonb\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          ai.visma.asgt.type.DataProto.getDescriptor(),
          ai.visma.asgt.type.ModelProto.getDescriptor(),
          ai.visma.asgt.type.PredictionProto.getDescriptor(),
          com.google.api.AnnotationsProto.getDescriptor(),
          ai.visma.grpc.gateway.protoc_gen_openapiv2.options.AnnotationsProto.getDescriptor(),
        });
    internal_static_asgt_jester_v1_SuggestionResponse_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_asgt_jester_v1_SuggestionResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_asgt_jester_v1_SuggestionResponse_descriptor,
        new java.lang.String[] { "Predictions", "Model", });
    internal_static_asgt_jester_v1_SuggestionOptions_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_asgt_jester_v1_SuggestionOptions_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_asgt_jester_v1_SuggestionOptions_descriptor,
        new java.lang.String[] { "SuggestionLimit", "MinConfidence", });
    internal_static_asgt_jester_v1_SuggestionRequest_descriptor =
      getDescriptor().getMessageTypes().get(2);
    internal_static_asgt_jester_v1_SuggestionRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_asgt_jester_v1_SuggestionRequest_descriptor,
        new java.lang.String[] { "Name", "Type", "Inputs", "Options", "Tags", });
    com.google.protobuf.ExtensionRegistry registry =
        com.google.protobuf.ExtensionRegistry.newInstance();
    registry.add(com.google.api.AnnotationsProto.http);
    registry.add(ai.visma.grpc.gateway.protoc_gen_openapiv2.options.AnnotationsProto.openapiv2Swagger);
    com.google.protobuf.Descriptors.FileDescriptor
        .internalUpdateFileDescriptor(descriptor, registry);
    ai.visma.asgt.type.DataProto.getDescriptor();
    ai.visma.asgt.type.ModelProto.getDescriptor();
    ai.visma.asgt.type.PredictionProto.getDescriptor();
    com.google.api.AnnotationsProto.getDescriptor();
    ai.visma.grpc.gateway.protoc_gen_openapiv2.options.AnnotationsProto.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}