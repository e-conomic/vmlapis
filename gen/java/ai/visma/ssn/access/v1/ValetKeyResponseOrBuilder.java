// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: ssn/access/v1/access.proto

package ai.visma.ssn.access.v1;

public interface ValetKeyResponseOrBuilder extends
    // @@protoc_insertion_point(interface_extends:ssn.access.v1.ValetKeyResponse)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * Key for this key
   * </pre>
   *
   * <code>string id = 1 [json_name = "id"];</code>
   * @return The id.
   */
  java.lang.String getId();
  /**
   * <pre>
   * Key for this key
   * </pre>
   *
   * <code>string id = 1 [json_name = "id"];</code>
   * @return The bytes for id.
   */
  com.google.protobuf.ByteString
      getIdBytes();

  /**
   * <pre>
   * A JWT Token
   * </pre>
   *
   * <code>string token = 2 [json_name = "token"];</code>
   * @return The token.
   */
  java.lang.String getToken();
  /**
   * <pre>
   * A JWT Token
   * </pre>
   *
   * <code>string token = 2 [json_name = "token"];</code>
   * @return The bytes for token.
   */
  com.google.protobuf.ByteString
      getTokenBytes();
}
