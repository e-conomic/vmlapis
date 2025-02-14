// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: asgt/v2/dataset_service.proto

package ai.visma.asgt.v2;

public interface ModelRequestOptionsOrBuilder extends
    // @@protoc_insertion_point(interface_extends:asgt.v2.ModelRequestOptions)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * The number of models to return. Ranges from 1 to 100.
   * </pre>
   *
   * <code>int64 limit = 1 [json_name = "limit", (.validate.rules) = { ... }</code>
   * @return The limit.
   */
  long getLimit();
}
