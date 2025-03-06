// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: asgt/v2/suggester_service.proto
// Protobuf Java Version: 4.29.3

package ai.visma.asgt.v2;

public interface SuggestRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:asgt.v2.SuggestRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * Name of the dataset to make prediction against
   * </pre>
   *
   * <code>string dataset_name = 1 [json_name = "datasetName", (.validate.rules) = { ... }</code>
   * @return The datasetName.
   */
  java.lang.String getDatasetName();
  /**
   * <pre>
   * Name of the dataset to make prediction against
   * </pre>
   *
   * <code>string dataset_name = 1 [json_name = "datasetName", (.validate.rules) = { ... }</code>
   * @return The bytes for datasetName.
   */
  com.google.protobuf.ByteString
      getDatasetNameBytes();

  /**
   * <pre>
   * Input data to use for prediction
   * </pre>
   *
   * <code>.asgt.v2.type.Data input = 2 [json_name = "input"];</code>
   * @return Whether the input field is set.
   */
  boolean hasInput();
  /**
   * <pre>
   * Input data to use for prediction
   * </pre>
   *
   * <code>.asgt.v2.type.Data input = 2 [json_name = "input"];</code>
   * @return The input.
   */
  ai.visma.asgt.v2.type.Data getInput();
  /**
   * <pre>
   * Input data to use for prediction
   * </pre>
   *
   * <code>.asgt.v2.type.Data input = 2 [json_name = "input"];</code>
   */
  ai.visma.asgt.v2.type.DataOrBuilder getInputOrBuilder();

  /**
   * <code>.asgt.v2.SuggestOptions options = 3 [json_name = "options"];</code>
   * @return Whether the options field is set.
   */
  boolean hasOptions();
  /**
   * <code>.asgt.v2.SuggestOptions options = 3 [json_name = "options"];</code>
   * @return The options.
   */
  ai.visma.asgt.v2.SuggestOptions getOptions();
  /**
   * <code>.asgt.v2.SuggestOptions options = 3 [json_name = "options"];</code>
   */
  ai.visma.asgt.v2.SuggestOptionsOrBuilder getOptionsOrBuilder();
}
