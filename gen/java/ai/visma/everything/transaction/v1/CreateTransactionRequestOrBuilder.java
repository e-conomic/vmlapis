// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: everything/transaction/v1/transaction.proto

package ai.visma.everything.transaction.v1;

public interface CreateTransactionRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:everything.transaction.v1.CreateTransactionRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * we could have an ID here, in case they wanted to provide their own
   * </pre>
   *
   * <code>.ssn.annotator.v1.Document document = 1 [json_name = "document"];</code>
   * @return Whether the document field is set.
   */
  boolean hasDocument();
  /**
   * <pre>
   * we could have an ID here, in case they wanted to provide their own
   * </pre>
   *
   * <code>.ssn.annotator.v1.Document document = 1 [json_name = "document"];</code>
   * @return The document.
   */
  ai.visma.ssn.annotator.v1.Document getDocument();
  /**
   * <pre>
   * we could have an ID here, in case they wanted to provide their own
   * </pre>
   *
   * <code>.ssn.annotator.v1.Document document = 1 [json_name = "document"];</code>
   */
  ai.visma.ssn.annotator.v1.DocumentOrBuilder getDocumentOrBuilder();

  /**
   * <pre>
   * Let's enforce the tags
   * </pre>
   *
   * <code>repeated string tags = 2 [json_name = "tags"];</code>
   * @return A list containing the tags.
   */
  java.util.List<java.lang.String>
      getTagsList();
  /**
   * <pre>
   * Let's enforce the tags
   * </pre>
   *
   * <code>repeated string tags = 2 [json_name = "tags"];</code>
   * @return The count of tags.
   */
  int getTagsCount();
  /**
   * <pre>
   * Let's enforce the tags
   * </pre>
   *
   * <code>repeated string tags = 2 [json_name = "tags"];</code>
   * @param index The index of the element to return.
   * @return The tags at the given index.
   */
  java.lang.String getTags(int index);
  /**
   * <pre>
   * Let's enforce the tags
   * </pre>
   *
   * <code>repeated string tags = 2 [json_name = "tags"];</code>
   * @param index The index of the value to return.
   * @return The bytes of the tags at the given index.
   */
  com.google.protobuf.ByteString
      getTagsBytes(int index);

  /**
   * <pre>
   * e.g. "TOTAL_INCL_VAT", "PURCHASE_LINES"
   * </pre>
   *
   * <code>repeated string features = 3 [json_name = "features"];</code>
   * @return A list containing the features.
   */
  java.util.List<java.lang.String>
      getFeaturesList();
  /**
   * <pre>
   * e.g. "TOTAL_INCL_VAT", "PURCHASE_LINES"
   * </pre>
   *
   * <code>repeated string features = 3 [json_name = "features"];</code>
   * @return The count of features.
   */
  int getFeaturesCount();
  /**
   * <pre>
   * e.g. "TOTAL_INCL_VAT", "PURCHASE_LINES"
   * </pre>
   *
   * <code>repeated string features = 3 [json_name = "features"];</code>
   * @param index The index of the element to return.
   * @return The features at the given index.
   */
  java.lang.String getFeatures(int index);
  /**
   * <pre>
   * e.g. "TOTAL_INCL_VAT", "PURCHASE_LINES"
   * </pre>
   *
   * <code>repeated string features = 3 [json_name = "features"];</code>
   * @param index The index of the value to return.
   * @return The bytes of the features at the given index.
   */
  com.google.protobuf.ByteString
      getFeaturesBytes(int index);
}
