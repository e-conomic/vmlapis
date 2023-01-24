// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: ssn/type/candidate.proto

package ai.visma.ssn.type;

public interface LineCandidateOrBuilder extends
    // @@protoc_insertion_point(interface_extends:ssn.type.LineCandidate)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * Text of the line without the amount
   * Example: "3 Dark and Stormy"
   * </pre>
   *
   * <code>string text = 1 [json_name = "text"];</code>
   * @return The text.
   */
  java.lang.String getText();
  /**
   * <pre>
   * Text of the line without the amount
   * Example: "3 Dark and Stormy"
   * </pre>
   *
   * <code>string text = 1 [json_name = "text"];</code>
   * @return The bytes for text.
   */
  com.google.protobuf.ByteString
      getTextBytes();

  /**
   * <pre>
   * Normalized amount (price) of the line
   * Example: 300.0
   * </pre>
   *
   * <code>double amount = 2 [json_name = "amount"];</code>
   * @return The amount.
   */
  double getAmount();

  /**
   * <pre>
   * A reference to the page where the line was found.
   * page_ref start from 1.
   * </pre>
   *
   * <code>uint32 page_ref = 6 [json_name = "pageRef"];</code>
   * @return The pageRef.
   */
  int getPageRef();
}