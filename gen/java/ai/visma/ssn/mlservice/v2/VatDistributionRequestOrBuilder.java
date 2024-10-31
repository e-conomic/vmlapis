// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: ssn/mlservice/v2/mlservice.proto

package ai.visma.ssn.mlservice.v2;

public interface VatDistributionRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:ssn.mlservice.v2.VatDistributionRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>.ssn.type.TextAnnotation text_annotation = 1 [json_name = "textAnnotation"];</code>
   * @return Whether the textAnnotation field is set.
   */
  boolean hasTextAnnotation();
  /**
   * <code>.ssn.type.TextAnnotation text_annotation = 1 [json_name = "textAnnotation"];</code>
   * @return The textAnnotation.
   */
  ai.visma.ssn.type.TextAnnotation getTextAnnotation();
  /**
   * <code>.ssn.type.TextAnnotation text_annotation = 1 [json_name = "textAnnotation"];</code>
   */
  ai.visma.ssn.type.TextAnnotationOrBuilder getTextAnnotationOrBuilder();

  /**
   * <code>string country_code = 3 [json_name = "countryCode"];</code>
   * @return The countryCode.
   */
  java.lang.String getCountryCode();
  /**
   * <code>string country_code = 3 [json_name = "countryCode"];</code>
   * @return The bytes for countryCode.
   */
  com.google.protobuf.ByteString
      getCountryCodeBytes();

  /**
   * <code>repeated bytes images = 4 [json_name = "images"];</code>
   * @return A list containing the images.
   */
  java.util.List<com.google.protobuf.ByteString> getImagesList();
  /**
   * <code>repeated bytes images = 4 [json_name = "images"];</code>
   * @return The count of images.
   */
  int getImagesCount();
  /**
   * <code>repeated bytes images = 4 [json_name = "images"];</code>
   * @param index The index of the element to return.
   * @return The images at the given index.
   */
  com.google.protobuf.ByteString getImages(int index);
}
