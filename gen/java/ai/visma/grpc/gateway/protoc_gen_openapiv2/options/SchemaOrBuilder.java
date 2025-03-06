// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: protoc-gen-openapiv2/options/openapiv2.proto
// Protobuf Java Version: 4.29.3

package ai.visma.grpc.gateway.protoc_gen_openapiv2.options;

public interface SchemaOrBuilder extends
    // @@protoc_insertion_point(interface_extends:grpc.gateway.protoc_gen_openapiv2.options.Schema)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>.grpc.gateway.protoc_gen_openapiv2.options.JSONSchema json_schema = 1 [json_name = "jsonSchema"];</code>
   * @return Whether the jsonSchema field is set.
   */
  boolean hasJsonSchema();
  /**
   * <code>.grpc.gateway.protoc_gen_openapiv2.options.JSONSchema json_schema = 1 [json_name = "jsonSchema"];</code>
   * @return The jsonSchema.
   */
  ai.visma.grpc.gateway.protoc_gen_openapiv2.options.JSONSchema getJsonSchema();
  /**
   * <code>.grpc.gateway.protoc_gen_openapiv2.options.JSONSchema json_schema = 1 [json_name = "jsonSchema"];</code>
   */
  ai.visma.grpc.gateway.protoc_gen_openapiv2.options.JSONSchemaOrBuilder getJsonSchemaOrBuilder();

  /**
   * <pre>
   * Adds support for polymorphism. The discriminator is the schema property
   * name that is used to differentiate between other schema that inherit this
   * schema. The property name used MUST be defined at this schema and it MUST
   * be in the required property list. When used, the value MUST be the name of
   * this schema or any schema that inherits it.
   * </pre>
   *
   * <code>string discriminator = 2 [json_name = "discriminator"];</code>
   * @return The discriminator.
   */
  java.lang.String getDiscriminator();
  /**
   * <pre>
   * Adds support for polymorphism. The discriminator is the schema property
   * name that is used to differentiate between other schema that inherit this
   * schema. The property name used MUST be defined at this schema and it MUST
   * be in the required property list. When used, the value MUST be the name of
   * this schema or any schema that inherits it.
   * </pre>
   *
   * <code>string discriminator = 2 [json_name = "discriminator"];</code>
   * @return The bytes for discriminator.
   */
  com.google.protobuf.ByteString
      getDiscriminatorBytes();

  /**
   * <pre>
   * Relevant only for Schema "properties" definitions. Declares the property as
   * "read only". This means that it MAY be sent as part of a response but MUST
   * NOT be sent as part of the request. Properties marked as readOnly being
   * true SHOULD NOT be in the required list of the defined schema. Default
   * value is false.
   * </pre>
   *
   * <code>bool read_only = 3 [json_name = "readOnly"];</code>
   * @return The readOnly.
   */
  boolean getReadOnly();

  /**
   * <pre>
   * Additional external documentation for this schema.
   * </pre>
   *
   * <code>.grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation external_docs = 5 [json_name = "externalDocs"];</code>
   * @return Whether the externalDocs field is set.
   */
  boolean hasExternalDocs();
  /**
   * <pre>
   * Additional external documentation for this schema.
   * </pre>
   *
   * <code>.grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation external_docs = 5 [json_name = "externalDocs"];</code>
   * @return The externalDocs.
   */
  ai.visma.grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation getExternalDocs();
  /**
   * <pre>
   * Additional external documentation for this schema.
   * </pre>
   *
   * <code>.grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation external_docs = 5 [json_name = "externalDocs"];</code>
   */
  ai.visma.grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentationOrBuilder getExternalDocsOrBuilder();

  /**
   * <pre>
   * A free-form property to include an example of an instance for this schema in JSON.
   * This is copied verbatim to the output.
   * </pre>
   *
   * <code>string example = 6 [json_name = "example"];</code>
   * @return The example.
   */
  java.lang.String getExample();
  /**
   * <pre>
   * A free-form property to include an example of an instance for this schema in JSON.
   * This is copied verbatim to the output.
   * </pre>
   *
   * <code>string example = 6 [json_name = "example"];</code>
   * @return The bytes for example.
   */
  com.google.protobuf.ByteString
      getExampleBytes();
}
