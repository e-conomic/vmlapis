// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: ssn/annotator/v1/annotator.proto
// Protobuf Java Version: 4.29.3

package ai.visma.ssn.annotator.v1;

public interface DocumentOrBuilder extends
    // @@protoc_insertion_point(interface_extends:ssn.annotator.v1.Document)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * Document content, represented as a stream of bytes.
   * Note: As with all `bytes` fields, protobuffers use a pure binary
   * representation, whereas JSON representations use base64.
   * </pre>
   *
   * <code>bytes content = 1 [json_name = "content"];</code>
   * @return The content.
   */
  com.google.protobuf.ByteString getContent();

  /**
   * <pre>
   * Google Cloud Storage image location, or publicly-accessible image
   * URL. If both `content` and `source` are provided for a document, `content`
   * takes precedence and is used to perform the scan request.
   * </pre>
   *
   * <code>.ssn.annotator.v1.DocumentSource source = 2 [json_name = "source"];</code>
   * @return Whether the source field is set.
   */
  boolean hasSource();
  /**
   * <pre>
   * Google Cloud Storage image location, or publicly-accessible image
   * URL. If both `content` and `source` are provided for a document, `content`
   * takes precedence and is used to perform the scan request.
   * </pre>
   *
   * <code>.ssn.annotator.v1.DocumentSource source = 2 [json_name = "source"];</code>
   * @return The source.
   */
  ai.visma.ssn.annotator.v1.DocumentSource getSource();
  /**
   * <pre>
   * Google Cloud Storage image location, or publicly-accessible image
   * URL. If both `content` and `source` are provided for a document, `content`
   * takes precedence and is used to perform the scan request.
   * </pre>
   *
   * <code>.ssn.annotator.v1.DocumentSource source = 2 [json_name = "source"];</code>
   */
  ai.visma.ssn.annotator.v1.DocumentSourceOrBuilder getSourceOrBuilder();
}
