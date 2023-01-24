// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: asgt/v2/type/data.proto

package ai.visma.asgt.v2.type;

public interface TransactionOrBuilder extends
    // @@protoc_insertion_point(interface_extends:asgt.v2.type.Transaction)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * Text of the bank transaction.
   * </pre>
   *
   * <code>string text = 1 [json_name = "text"];</code>
   * @return The text.
   */
  java.lang.String getText();
  /**
   * <pre>
   * Text of the bank transaction.
   * </pre>
   *
   * <code>string text = 1 [json_name = "text"];</code>
   * @return The bytes for text.
   */
  com.google.protobuf.ByteString
      getTextBytes();

  /**
   * <pre>
   * Amount of the transaction.
   * </pre>
   *
   * <code>float amount = 2 [json_name = "amount"];</code>
   * @return The amount.
   */
  float getAmount();
}