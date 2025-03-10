// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: asgt/v2/type/training.proto
// Protobuf Java Version: 4.29.3

package ai.visma.asgt.v2.type;

public interface TrainingOrBuilder extends
    // @@protoc_insertion_point(interface_extends:asgt.v2.type.Training)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * Creation time of the training
   * </pre>
   *
   * <code>.google.protobuf.Timestamp created_at = 1 [json_name = "createdAt"];</code>
   * @return Whether the createdAt field is set.
   */
  boolean hasCreatedAt();
  /**
   * <pre>
   * Creation time of the training
   * </pre>
   *
   * <code>.google.protobuf.Timestamp created_at = 1 [json_name = "createdAt"];</code>
   * @return The createdAt.
   */
  com.google.protobuf.Timestamp getCreatedAt();
  /**
   * <pre>
   * Creation time of the training
   * </pre>
   *
   * <code>.google.protobuf.Timestamp created_at = 1 [json_name = "createdAt"];</code>
   */
  com.google.protobuf.TimestampOrBuilder getCreatedAtOrBuilder();

  /**
   * <code>string status = 2 [json_name = "status"];</code>
   * @return The status.
   */
  java.lang.String getStatus();
  /**
   * <code>string status = 2 [json_name = "status"];</code>
   * @return The bytes for status.
   */
  com.google.protobuf.ByteString
      getStatusBytes();

  /**
   * <pre>
   * Status of the training.
   * SCHEDULED - Training is scheduled to be run in a specific time. This
   * could be in between 1 minute or 24 hours depending on how recently the dataset
   * was created
   * PENDING - The training is ready to be picked up by a worker.
   * RUNNING - The training is currently running.
   * DONE - The training has completed successfully.
   * FAILED - The training failed due to an error. See training status for
   * more information.
   * </pre>
   *
   * <code>string training_status = 3 [json_name = "trainingStatus"];</code>
   * @return The trainingStatus.
   */
  java.lang.String getTrainingStatus();
  /**
   * <pre>
   * Status of the training.
   * SCHEDULED - Training is scheduled to be run in a specific time. This
   * could be in between 1 minute or 24 hours depending on how recently the dataset
   * was created
   * PENDING - The training is ready to be picked up by a worker.
   * RUNNING - The training is currently running.
   * DONE - The training has completed successfully.
   * FAILED - The training failed due to an error. See training status for
   * more information.
   * </pre>
   *
   * <code>string training_status = 3 [json_name = "trainingStatus"];</code>
   * @return The bytes for trainingStatus.
   */
  com.google.protobuf.ByteString
      getTrainingStatusBytes();

  /**
   * <pre>
   * Additional information about the training status.
   * </pre>
   *
   * <code>string training_status_message = 4 [json_name = "trainingStatusMessage"];</code>
   * @return The trainingStatusMessage.
   */
  java.lang.String getTrainingStatusMessage();
  /**
   * <pre>
   * Additional information about the training status.
   * </pre>
   *
   * <code>string training_status_message = 4 [json_name = "trainingStatusMessage"];</code>
   * @return The bytes for trainingStatusMessage.
   */
  com.google.protobuf.ByteString
      getTrainingStatusMessageBytes();

  /**
   * <pre>
   * Specifies when did the training finish.
   * </pre>
   *
   * <code>.google.protobuf.Timestamp finish_time = 5 [json_name = "finishTime"];</code>
   * @return Whether the finishTime field is set.
   */
  boolean hasFinishTime();
  /**
   * <pre>
   * Specifies when did the training finish.
   * </pre>
   *
   * <code>.google.protobuf.Timestamp finish_time = 5 [json_name = "finishTime"];</code>
   * @return The finishTime.
   */
  com.google.protobuf.Timestamp getFinishTime();
  /**
   * <pre>
   * Specifies when did the training finish.
   * </pre>
   *
   * <code>.google.protobuf.Timestamp finish_time = 5 [json_name = "finishTime"];</code>
   */
  com.google.protobuf.TimestampOrBuilder getFinishTimeOrBuilder();

  /**
   * <pre>
   * Specifies dataset the training ran on.
   * </pre>
   *
   * <code>.asgt.type.Dataset dataset = 6 [json_name = "dataset"];</code>
   * @return Whether the dataset field is set.
   */
  boolean hasDataset();
  /**
   * <pre>
   * Specifies dataset the training ran on.
   * </pre>
   *
   * <code>.asgt.type.Dataset dataset = 6 [json_name = "dataset"];</code>
   * @return The dataset.
   */
  ai.visma.asgt.type.Dataset getDataset();
  /**
   * <pre>
   * Specifies dataset the training ran on.
   * </pre>
   *
   * <code>.asgt.type.Dataset dataset = 6 [json_name = "dataset"];</code>
   */
  ai.visma.asgt.type.DatasetOrBuilder getDatasetOrBuilder();

  /**
   * <pre>
   * Specifies when the training is scheduled.
   * </pre>
   *
   * <code>.google.protobuf.Timestamp schedule_time = 7 [json_name = "scheduleTime"];</code>
   * @return Whether the scheduleTime field is set.
   */
  boolean hasScheduleTime();
  /**
   * <pre>
   * Specifies when the training is scheduled.
   * </pre>
   *
   * <code>.google.protobuf.Timestamp schedule_time = 7 [json_name = "scheduleTime"];</code>
   * @return The scheduleTime.
   */
  com.google.protobuf.Timestamp getScheduleTime();
  /**
   * <pre>
   * Specifies when the training is scheduled.
   * </pre>
   *
   * <code>.google.protobuf.Timestamp schedule_time = 7 [json_name = "scheduleTime"];</code>
   */
  com.google.protobuf.TimestampOrBuilder getScheduleTimeOrBuilder();
}
