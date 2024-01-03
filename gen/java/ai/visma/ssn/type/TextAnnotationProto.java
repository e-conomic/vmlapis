// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: ssn/type/text_annotation.proto

package ai.visma.ssn.type;

public final class TextAnnotationProto {
  private TextAnnotationProto() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ssn_type_TextAnnotation_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ssn_type_TextAnnotation_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ssn_type_TextAnnotation_DetectedLanguage_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ssn_type_TextAnnotation_DetectedLanguage_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ssn_type_TextAnnotation_DetectedBreak_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ssn_type_TextAnnotation_DetectedBreak_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ssn_type_TextAnnotation_TextProperty_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ssn_type_TextAnnotation_TextProperty_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ssn_type_Page_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ssn_type_Page_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ssn_type_Block_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ssn_type_Block_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ssn_type_Paragraph_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ssn_type_Paragraph_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ssn_type_Word_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ssn_type_Word_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ssn_type_Symbol_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ssn_type_Symbol_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\036ssn/type/text_annotation.proto\022\010ssn.ty" +
      "pe\032\027ssn/type/geometry.proto\"\267\004\n\016TextAnno" +
      "tation\022$\n\005pages\030\001 \003(\0132\016.ssn.type.PageR\005p" +
      "ages\022\022\n\004text\030\002 \001(\tR\004text\032W\n\020DetectedLang" +
      "uage\022#\n\rlanguage_code\030\001 \001(\tR\014languageCod" +
      "e\022\036\n\nconfidence\030\002 \001(\002R\nconfidence\032\327\001\n\rDe" +
      "tectedBreak\022D\n\004type\030\001 \001(\01620.ssn.type.Tex" +
      "tAnnotation.DetectedBreak.BreakTypeR\004typ" +
      "e\022\033\n\tis_prefix\030\002 \001(\010R\010isPrefix\"c\n\tBreakT" +
      "ype\022\013\n\007UNKNOWN\020\000\022\t\n\005SPACE\020\001\022\016\n\nSURE_SPAC" +
      "E\020\002\022\022\n\016EOL_SURE_SPACE\020\003\022\n\n\006HYPHEN\020\004\022\016\n\nL" +
      "INE_BREAK\020\005\032\267\001\n\014TextProperty\022X\n\022detected" +
      "_languages\030\001 \003(\0132).ssn.type.TextAnnotati" +
      "on.DetectedLanguageR\021detectedLanguages\022M" +
      "\n\016detected_break\030\002 \001(\0132&.ssn.type.TextAn" +
      "notation.DetectedBreakR\rdetectedBreak\"\300\001" +
      "\n\004Page\022A\n\010property\030\001 \001(\0132%.ssn.type.Text" +
      "Annotation.TextPropertyR\010property\022\024\n\005wid" +
      "th\030\002 \001(\005R\005width\022\026\n\006height\030\003 \001(\005R\006height\022" +
      "\'\n\006blocks\030\004 \003(\0132\017.ssn.type.BlockR\006blocks" +
      "\022\036\n\nconfidence\030\005 \001(\002R\nconfidence\"\350\002\n\005Blo" +
      "ck\022A\n\010property\030\001 \001(\0132%.ssn.type.TextAnno" +
      "tation.TextPropertyR\010property\0229\n\014boundin" +
      "g_box\030\002 \001(\0132\026.ssn.type.BoundingPolyR\013bou" +
      "ndingBox\0223\n\nparagraphs\030\003 \003(\0132\023.ssn.type." +
      "ParagraphR\nparagraphs\0228\n\nblock_type\030\004 \001(" +
      "\0162\031.ssn.type.Block.BlockTypeR\tblockType\022" +
      "\036\n\nconfidence\030\005 \001(\002R\nconfidence\"R\n\tBlock" +
      "Type\022\013\n\007UNKNOWN\020\000\022\010\n\004TEXT\020\001\022\t\n\005TABLE\020\002\022\013" +
      "\n\007PICTURE\020\003\022\t\n\005RULER\020\004\022\013\n\007BARCODE\020\005\"\317\001\n\t" +
      "Paragraph\022A\n\010property\030\001 \001(\0132%.ssn.type.T" +
      "extAnnotation.TextPropertyR\010property\0229\n\014" +
      "bounding_box\030\002 \001(\0132\026.ssn.type.BoundingPo" +
      "lyR\013boundingBox\022$\n\005words\030\003 \003(\0132\016.ssn.typ" +
      "e.WordR\005words\022\036\n\nconfidence\030\004 \001(\002R\nconfi" +
      "dence\"\320\001\n\004Word\022A\n\010property\030\001 \001(\0132%.ssn.t" +
      "ype.TextAnnotation.TextPropertyR\010propert" +
      "y\0229\n\014bounding_box\030\002 \001(\0132\026.ssn.type.Bound" +
      "ingPolyR\013boundingBox\022*\n\007symbols\030\003 \003(\0132\020." +
      "ssn.type.SymbolR\007symbols\022\036\n\nconfidence\030\004" +
      " \001(\002R\nconfidence\"\272\001\n\006Symbol\022A\n\010property\030" +
      "\001 \001(\0132%.ssn.type.TextAnnotation.TextProp" +
      "ertyR\010property\0229\n\014bounding_box\030\002 \001(\0132\026.s" +
      "sn.type.BoundingPolyR\013boundingBox\022\022\n\004tex" +
      "t\030\003 \001(\tR\004text\022\036\n\nconfidence\030\004 \001(\002R\nconfi" +
      "denceB\237\001\n\021ai.visma.ssn.typeB\023TextAnnotat" +
      "ionProtoP\001Z4github.com/e-conomic/vmlapis" +
      "/gen/go/ssn/type;ssntype\242\002\003STX\252\002\010Ssn.Typ" +
      "e\312\002\010Ssn\\Type\342\002\024Ssn\\Type\\GPBMetadata\352\002\tSs" +
      "n::Typeb\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          ai.visma.ssn.type.GeometryProto.getDescriptor(),
        });
    internal_static_ssn_type_TextAnnotation_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_ssn_type_TextAnnotation_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ssn_type_TextAnnotation_descriptor,
        new java.lang.String[] { "Pages", "Text", });
    internal_static_ssn_type_TextAnnotation_DetectedLanguage_descriptor =
      internal_static_ssn_type_TextAnnotation_descriptor.getNestedTypes().get(0);
    internal_static_ssn_type_TextAnnotation_DetectedLanguage_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ssn_type_TextAnnotation_DetectedLanguage_descriptor,
        new java.lang.String[] { "LanguageCode", "Confidence", });
    internal_static_ssn_type_TextAnnotation_DetectedBreak_descriptor =
      internal_static_ssn_type_TextAnnotation_descriptor.getNestedTypes().get(1);
    internal_static_ssn_type_TextAnnotation_DetectedBreak_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ssn_type_TextAnnotation_DetectedBreak_descriptor,
        new java.lang.String[] { "Type", "IsPrefix", });
    internal_static_ssn_type_TextAnnotation_TextProperty_descriptor =
      internal_static_ssn_type_TextAnnotation_descriptor.getNestedTypes().get(2);
    internal_static_ssn_type_TextAnnotation_TextProperty_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ssn_type_TextAnnotation_TextProperty_descriptor,
        new java.lang.String[] { "DetectedLanguages", "DetectedBreak", });
    internal_static_ssn_type_Page_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_ssn_type_Page_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ssn_type_Page_descriptor,
        new java.lang.String[] { "Property", "Width", "Height", "Blocks", "Confidence", });
    internal_static_ssn_type_Block_descriptor =
      getDescriptor().getMessageTypes().get(2);
    internal_static_ssn_type_Block_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ssn_type_Block_descriptor,
        new java.lang.String[] { "Property", "BoundingBox", "Paragraphs", "BlockType", "Confidence", });
    internal_static_ssn_type_Paragraph_descriptor =
      getDescriptor().getMessageTypes().get(3);
    internal_static_ssn_type_Paragraph_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ssn_type_Paragraph_descriptor,
        new java.lang.String[] { "Property", "BoundingBox", "Words", "Confidence", });
    internal_static_ssn_type_Word_descriptor =
      getDescriptor().getMessageTypes().get(4);
    internal_static_ssn_type_Word_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ssn_type_Word_descriptor,
        new java.lang.String[] { "Property", "BoundingBox", "Symbols", "Confidence", });
    internal_static_ssn_type_Symbol_descriptor =
      getDescriptor().getMessageTypes().get(5);
    internal_static_ssn_type_Symbol_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ssn_type_Symbol_descriptor,
        new java.lang.String[] { "Property", "BoundingBox", "Text", "Confidence", });
    ai.visma.ssn.type.GeometryProto.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}
