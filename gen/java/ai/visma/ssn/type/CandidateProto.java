// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: ssn/type/candidate.proto

package ai.visma.ssn.type;

public final class CandidateProto {
  private CandidateProto() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ssn_type_Confidence_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ssn_type_Confidence_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ssn_type_Candidate_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ssn_type_Candidate_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ssn_type_ModelSpec_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ssn_type_ModelSpec_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ssn_type_LineCandidate_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ssn_type_LineCandidate_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\030ssn/type/candidate.proto\022\010ssn.type\032\036go" +
      "ogle/protobuf/wrappers.proto\032\027ssn/type/g" +
      "eometry.proto\"\300\001\n\nConfidence\0220\n\005level\030\001 " +
      "\001(\0162\032.ssn.type.Confidence.LevelR\005level\0221" +
      "\n\005value\030\002 \001(\0132\033.google.protobuf.FloatVal" +
      "ueR\005value\"M\n\005Level\022\013\n\007UNKNOWN\020\000\022\014\n\010VERY_" +
      "LOW\020\001\022\007\n\003LOW\020\002\022\007\n\003MID\020\003\022\010\n\004HIGH\020\004\022\r\n\tVER" +
      "Y_HIGH\020\005\"\331\002\n\tCandidate\022\024\n\005value\030\001 \001(\tR\005v" +
      "alue\022\022\n\004text\030\002 \001(\tR\004text\0224\n\nconfidence\030\003" +
      " \001(\0132\024.ssn.type.ConfidenceR\nconfidence\0229" +
      "\n\014bounding_box\030\004 \001(\0132\026.ssn.type.Bounding" +
      "PolyR\013boundingBox\022,\n\004type\030\005 \001(\0162\030.ssn.ty" +
      "pe.Candidate.TypeR\004type\022\031\n\010page_ref\030\006 \001(" +
      "\rR\007pageRef\022:\n\016model_metadata\030\007 \001(\0132\023.ssn" +
      ".type.ModelSpecR\rmodelMetadata\",\n\004Type\022\013" +
      "\n\007UNKNOWN\020\000\022\t\n\005FIELD\020\001\022\014\n\010DOCUMENT\020\002\"d\n\t" +
      "ModelSpec\022\035\n\nmodel_name\030\001 \001(\tR\tmodelName" +
      "\0228\n\tmodel_ver\030\002 \001(\0132\033.google.protobuf.In" +
      "t64ValueR\010modelVer\"V\n\rLineCandidate\022\022\n\004t" +
      "ext\030\001 \001(\tR\004text\022\026\n\006amount\030\002 \001(\001R\006amount\022" +
      "\031\n\010page_ref\030\006 \001(\rR\007pageRefB\232\001\n\021ai.visma." +
      "ssn.typeB\016CandidateProtoP\001Z4github.com/e" +
      "-conomic/vmlapis/gen/go/ssn/type;ssntype" +
      "\242\002\003STX\252\002\010Ssn.Type\312\002\010Ssn\\Type\342\002\024Ssn\\Type\\" +
      "GPBMetadata\352\002\tSsn::Typeb\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          com.google.protobuf.WrappersProto.getDescriptor(),
          ai.visma.ssn.type.GeometryProto.getDescriptor(),
        });
    internal_static_ssn_type_Confidence_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_ssn_type_Confidence_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ssn_type_Confidence_descriptor,
        new java.lang.String[] { "Level", "Value", });
    internal_static_ssn_type_Candidate_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_ssn_type_Candidate_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ssn_type_Candidate_descriptor,
        new java.lang.String[] { "Value", "Text", "Confidence", "BoundingBox", "Type", "PageRef", "ModelMetadata", });
    internal_static_ssn_type_ModelSpec_descriptor =
      getDescriptor().getMessageTypes().get(2);
    internal_static_ssn_type_ModelSpec_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ssn_type_ModelSpec_descriptor,
        new java.lang.String[] { "ModelName", "ModelVer", });
    internal_static_ssn_type_LineCandidate_descriptor =
      getDescriptor().getMessageTypes().get(3);
    internal_static_ssn_type_LineCandidate_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ssn_type_LineCandidate_descriptor,
        new java.lang.String[] { "Text", "Amount", "PageRef", });
    com.google.protobuf.WrappersProto.getDescriptor();
    ai.visma.ssn.type.GeometryProto.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}
