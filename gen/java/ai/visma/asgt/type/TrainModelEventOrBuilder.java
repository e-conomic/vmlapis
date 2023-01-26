// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: asgt/type/train_model_event.proto

package ai.visma.asgt.type;

public interface TrainModelEventOrBuilder extends
    // @@protoc_insertion_point(interface_extends:asgt.type.TrainModelEvent)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>.asgt.type.Dataset dataset = 1 [json_name = "dataset"];</code>
   * @return Whether the dataset field is set.
   */
  boolean hasDataset();
  /**
   * <code>.asgt.type.Dataset dataset = 1 [json_name = "dataset"];</code>
   * @return The dataset.
   */
  ai.visma.asgt.type.Dataset getDataset();
  /**
   * <code>.asgt.type.Dataset dataset = 1 [json_name = "dataset"];</code>
   */
  ai.visma.asgt.type.DatasetOrBuilder getDatasetOrBuilder();

  /**
   * <code>int64 model_version = 4 [json_name = "modelVersion"];</code>
   * @return The modelVersion.
   */
  long getModelVersion();

  /**
   * <code>string status = 5 [json_name = "status"];</code>
   * @return The status.
   */
  java.lang.String getStatus();
  /**
   * <code>string status = 5 [json_name = "status"];</code>
   * @return The bytes for status.
   */
  com.google.protobuf.ByteString
      getStatusBytes();

  /**
   * <code>string status_message = 6 [json_name = "statusMessage"];</code>
   * @return The statusMessage.
   */
  java.lang.String getStatusMessage();
  /**
   * <code>string status_message = 6 [json_name = "statusMessage"];</code>
   * @return The bytes for statusMessage.
   */
  com.google.protobuf.ByteString
      getStatusMessageBytes();

  /**
   * <code>repeated .asgt.type.TrainModelEvent.Artifact artifacts = 7 [json_name = "artifacts"];</code>
   */
  java.util.List<ai.visma.asgt.type.TrainModelEvent.Artifact> 
      getArtifactsList();
  /**
   * <code>repeated .asgt.type.TrainModelEvent.Artifact artifacts = 7 [json_name = "artifacts"];</code>
   */
  ai.visma.asgt.type.TrainModelEvent.Artifact getArtifacts(int index);
  /**
   * <code>repeated .asgt.type.TrainModelEvent.Artifact artifacts = 7 [json_name = "artifacts"];</code>
   */
  int getArtifactsCount();
  /**
   * <code>repeated .asgt.type.TrainModelEvent.Artifact artifacts = 7 [json_name = "artifacts"];</code>
   */
  java.util.List<? extends ai.visma.asgt.type.TrainModelEvent.ArtifactOrBuilder> 
      getArtifactsOrBuilderList();
  /**
   * <code>repeated .asgt.type.TrainModelEvent.Artifact artifacts = 7 [json_name = "artifacts"];</code>
   */
  ai.visma.asgt.type.TrainModelEvent.ArtifactOrBuilder getArtifactsOrBuilder(
      int index);
}
