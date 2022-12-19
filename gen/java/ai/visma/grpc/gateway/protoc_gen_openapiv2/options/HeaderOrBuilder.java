// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: protoc-gen-openapiv2/options/openapiv2.proto

package ai.visma.grpc.gateway.protoc_gen_openapiv2.options;

public interface HeaderOrBuilder extends
    // @@protoc_insertion_point(interface_extends:grpc.gateway.protoc_gen_openapiv2.options.Header)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * `Description` is a short description of the header.
   * </pre>
   *
   * <code>string description = 1 [json_name = "description"];</code>
   * @return The description.
   */
  java.lang.String getDescription();
  /**
   * <pre>
   * `Description` is a short description of the header.
   * </pre>
   *
   * <code>string description = 1 [json_name = "description"];</code>
   * @return The bytes for description.
   */
  com.google.protobuf.ByteString
      getDescriptionBytes();

  /**
   * <pre>
   * The type of the object. The value MUST be one of "string", "number", "integer", or "boolean". The "array" type is not supported.
   * </pre>
   *
   * <code>string type = 2 [json_name = "type"];</code>
   * @return The type.
   */
  java.lang.String getType();
  /**
   * <pre>
   * The type of the object. The value MUST be one of "string", "number", "integer", or "boolean". The "array" type is not supported.
   * </pre>
   *
   * <code>string type = 2 [json_name = "type"];</code>
   * @return The bytes for type.
   */
  com.google.protobuf.ByteString
      getTypeBytes();

  /**
   * <pre>
   * `Format` The extending format for the previously mentioned type.
   * </pre>
   *
   * <code>string format = 3 [json_name = "format"];</code>
   * @return The format.
   */
  java.lang.String getFormat();
  /**
   * <pre>
   * `Format` The extending format for the previously mentioned type.
   * </pre>
   *
   * <code>string format = 3 [json_name = "format"];</code>
   * @return The bytes for format.
   */
  com.google.protobuf.ByteString
      getFormatBytes();

  /**
   * <pre>
   * `Default` Declares the value of the header that the server will use if none is provided.
   * See: https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-6.2.
   * Unlike JSON Schema this value MUST conform to the defined type for the header.
   * </pre>
   *
   * <code>string default = 6 [json_name = "default"];</code>
   * @return The default.
   */
  java.lang.String getDefault();
  /**
   * <pre>
   * `Default` Declares the value of the header that the server will use if none is provided.
   * See: https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-6.2.
   * Unlike JSON Schema this value MUST conform to the defined type for the header.
   * </pre>
   *
   * <code>string default = 6 [json_name = "default"];</code>
   * @return The bytes for default.
   */
  com.google.protobuf.ByteString
      getDefaultBytes();

  /**
   * <pre>
   * 'Pattern' See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.3.
   * </pre>
   *
   * <code>string pattern = 13 [json_name = "pattern"];</code>
   * @return The pattern.
   */
  java.lang.String getPattern();
  /**
   * <pre>
   * 'Pattern' See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.3.
   * </pre>
   *
   * <code>string pattern = 13 [json_name = "pattern"];</code>
   * @return The bytes for pattern.
   */
  com.google.protobuf.ByteString
      getPatternBytes();
}
