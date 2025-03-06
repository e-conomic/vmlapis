// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: ssn/annotator/v1/annotator.proto
// Protobuf Java Version: 4.29.3

package ai.visma.ssn.annotator.v1;

public interface FeatureOrBuilder extends
    // @@protoc_insertion_point(interface_extends:ssn.annotator.v1.Feature)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * The feature type.
   * </pre>
   *
   * <code>.ssn.annotator.v1.Feature.Type type = 1 [json_name = "type"];</code>
   * @return The enum numeric value on the wire for type.
   */
  int getTypeValue();
  /**
   * <pre>
   * The feature type.
   * </pre>
   *
   * <code>.ssn.annotator.v1.Feature.Type type = 1 [json_name = "type"];</code>
   * @return The type.
   */
  ai.visma.ssn.annotator.v1.Feature.Type getType();

  /**
   * <pre>
   * Maximum number of results of this type. Does not apply to
   * `TEXT_ANNOTATION` or `DOCUMENT_TYPE`.
   * </pre>
   *
   * <code>int32 max_results = 2 [json_name = "maxResults"];</code>
   * @return The maxResults.
   */
  int getMaxResults();

  /**
   * <pre>
   * The minimum confidence for predictions that the caller wants returned
   * </pre>
   *
   * <code>.ssn.type.Confidence.Level min_confidence = 3 [json_name = "minConfidence"];</code>
   * @return The enum numeric value on the wire for minConfidence.
   */
  int getMinConfidenceValue();
  /**
   * <pre>
   * The minimum confidence for predictions that the caller wants returned
   * </pre>
   *
   * <code>.ssn.type.Confidence.Level min_confidence = 3 [json_name = "minConfidence"];</code>
   * @return The minConfidence.
   */
  ai.visma.ssn.type.Confidence.Level getMinConfidence();
}
