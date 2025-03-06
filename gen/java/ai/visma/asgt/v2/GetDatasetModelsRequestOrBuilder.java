// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: asgt/v2/dataset_service.proto
// Protobuf Java Version: 4.29.3

package ai.visma.asgt.v2;

public interface GetDatasetModelsRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:asgt.v2.GetDatasetModelsRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * text-no-spaces
   * </pre>
   *
   * <code>string dataset_name = 1 [json_name = "datasetName", (.validate.rules) = { ... }</code>
   * @return The datasetName.
   */
  java.lang.String getDatasetName();
  /**
   * <pre>
   * text-no-spaces
   * </pre>
   *
   * <code>string dataset_name = 1 [json_name = "datasetName", (.validate.rules) = { ... }</code>
   * @return The bytes for datasetName.
   */
  com.google.protobuf.ByteString
      getDatasetNameBytes();

  /**
   * <code>.asgt.v2.ModelRequestOptions options = 2 [json_name = "options"];</code>
   * @return Whether the options field is set.
   */
  boolean hasOptions();
  /**
   * <code>.asgt.v2.ModelRequestOptions options = 2 [json_name = "options"];</code>
   * @return The options.
   */
  ai.visma.asgt.v2.ModelRequestOptions getOptions();
  /**
   * <code>.asgt.v2.ModelRequestOptions options = 2 [json_name = "options"];</code>
   */
  ai.visma.asgt.v2.ModelRequestOptionsOrBuilder getOptionsOrBuilder();
}
