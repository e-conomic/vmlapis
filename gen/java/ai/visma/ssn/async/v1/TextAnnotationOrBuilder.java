// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: ssn/async/v1/async.proto

package ai.visma.ssn.async.v1;

public interface TextAnnotationOrBuilder extends
    // @@protoc_insertion_point(interface_extends:ssn.async.v1.TextAnnotation)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>repeated .ssn.type.TextAnnotation text_annotation = 1 [json_name = "textAnnotation"];</code>
   */
  java.util.List<ai.visma.ssn.type.TextAnnotation> 
      getTextAnnotationList();
  /**
   * <code>repeated .ssn.type.TextAnnotation text_annotation = 1 [json_name = "textAnnotation"];</code>
   */
  ai.visma.ssn.type.TextAnnotation getTextAnnotation(int index);
  /**
   * <code>repeated .ssn.type.TextAnnotation text_annotation = 1 [json_name = "textAnnotation"];</code>
   */
  int getTextAnnotationCount();
  /**
   * <code>repeated .ssn.type.TextAnnotation text_annotation = 1 [json_name = "textAnnotation"];</code>
   */
  java.util.List<? extends ai.visma.ssn.type.TextAnnotationOrBuilder> 
      getTextAnnotationOrBuilderList();
  /**
   * <code>repeated .ssn.type.TextAnnotation text_annotation = 1 [json_name = "textAnnotation"];</code>
   */
  ai.visma.ssn.type.TextAnnotationOrBuilder getTextAnnotationOrBuilder(
      int index);
}
