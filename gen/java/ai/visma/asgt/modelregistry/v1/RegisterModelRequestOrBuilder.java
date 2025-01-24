// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: asgt/modelregistry/v1/model_registry.proto

package ai.visma.asgt.modelregistry.v1;

public interface RegisterModelRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:asgt.modelregistry.v1.RegisterModelRequest)
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
   * <code>.asgt.type.Revision revision = 2 [json_name = "revision"];</code>
   * @return Whether the revision field is set.
   */
  boolean hasRevision();
  /**
   * <code>.asgt.type.Revision revision = 2 [json_name = "revision"];</code>
   * @return The revision.
   */
  ai.visma.asgt.type.Revision getRevision();
  /**
   * <code>.asgt.type.Revision revision = 2 [json_name = "revision"];</code>
   */
  ai.visma.asgt.type.RevisionOrBuilder getRevisionOrBuilder();

  /**
   * <code>int64 model_version = 3 [json_name = "modelVersion"];</code>
   * @return The modelVersion.
   */
  long getModelVersion();

  /**
   * <code>map&lt;string, int32&gt; metrics = 4 [json_name = "metrics"];</code>
   */
  int getMetricsCount();
  /**
   * <code>map&lt;string, int32&gt; metrics = 4 [json_name = "metrics"];</code>
   */
  boolean containsMetrics(
      java.lang.String key);
  /**
   * Use {@link #getMetricsMap()} instead.
   */
  @java.lang.Deprecated
  java.util.Map<java.lang.String, java.lang.Integer>
  getMetrics();
  /**
   * <code>map&lt;string, int32&gt; metrics = 4 [json_name = "metrics"];</code>
   */
  java.util.Map<java.lang.String, java.lang.Integer>
  getMetricsMap();
  /**
   * <code>map&lt;string, int32&gt; metrics = 4 [json_name = "metrics"];</code>
   */
  int getMetricsOrDefault(
      java.lang.String key,
      int defaultValue);
  /**
   * <code>map&lt;string, int32&gt; metrics = 4 [json_name = "metrics"];</code>
   */
  int getMetricsOrThrow(
      java.lang.String key);

  /**
   * <code>repeated .asgt.type.TargetMetrics target_metrics = 5 [json_name = "targetMetrics"];</code>
   */
  java.util.List<ai.visma.asgt.type.TargetMetrics> 
      getTargetMetricsList();
  /**
   * <code>repeated .asgt.type.TargetMetrics target_metrics = 5 [json_name = "targetMetrics"];</code>
   */
  ai.visma.asgt.type.TargetMetrics getTargetMetrics(int index);
  /**
   * <code>repeated .asgt.type.TargetMetrics target_metrics = 5 [json_name = "targetMetrics"];</code>
   */
  int getTargetMetricsCount();
  /**
   * <code>repeated .asgt.type.TargetMetrics target_metrics = 5 [json_name = "targetMetrics"];</code>
   */
  java.util.List<? extends ai.visma.asgt.type.TargetMetricsOrBuilder> 
      getTargetMetricsOrBuilderList();
  /**
   * <code>repeated .asgt.type.TargetMetrics target_metrics = 5 [json_name = "targetMetrics"];</code>
   */
  ai.visma.asgt.type.TargetMetricsOrBuilder getTargetMetricsOrBuilder(
      int index);

  /**
   * <code>.asgt.type.Model.InputType input_type = 6 [json_name = "inputType"];</code>
   * @return The enum numeric value on the wire for inputType.
   */
  int getInputTypeValue();
  /**
   * <code>.asgt.type.Model.InputType input_type = 6 [json_name = "inputType"];</code>
   * @return The inputType.
   */
  ai.visma.asgt.type.Model.InputType getInputType();

  /**
   * <code>.asgt.type.TrainStatistics train_statistics = 7 [json_name = "trainStatistics"];</code>
   * @return Whether the trainStatistics field is set.
   */
  boolean hasTrainStatistics();
  /**
   * <code>.asgt.type.TrainStatistics train_statistics = 7 [json_name = "trainStatistics"];</code>
   * @return The trainStatistics.
   */
  ai.visma.asgt.type.TrainStatistics getTrainStatistics();
  /**
   * <code>.asgt.type.TrainStatistics train_statistics = 7 [json_name = "trainStatistics"];</code>
   */
  ai.visma.asgt.type.TrainStatisticsOrBuilder getTrainStatisticsOrBuilder();

  /**
   * <code>.asgt.type.DatasetStatistics dataset_statistics = 8 [json_name = "datasetStatistics"];</code>
   * @return Whether the datasetStatistics field is set.
   */
  boolean hasDatasetStatistics();
  /**
   * <code>.asgt.type.DatasetStatistics dataset_statistics = 8 [json_name = "datasetStatistics"];</code>
   * @return The datasetStatistics.
   */
  ai.visma.asgt.type.DatasetStatistics getDatasetStatistics();
  /**
   * <code>.asgt.type.DatasetStatistics dataset_statistics = 8 [json_name = "datasetStatistics"];</code>
   */
  ai.visma.asgt.type.DatasetStatisticsOrBuilder getDatasetStatisticsOrBuilder();

  /**
   * <code>map&lt;string, .asgt.type.ConfidenceThresholds&gt; target_to_confidence_thresholds = 10 [json_name = "targetToConfidenceThresholds"];</code>
   */
  int getTargetToConfidenceThresholdsCount();
  /**
   * <code>map&lt;string, .asgt.type.ConfidenceThresholds&gt; target_to_confidence_thresholds = 10 [json_name = "targetToConfidenceThresholds"];</code>
   */
  boolean containsTargetToConfidenceThresholds(
      java.lang.String key);
  /**
   * Use {@link #getTargetToConfidenceThresholdsMap()} instead.
   */
  @java.lang.Deprecated
  java.util.Map<java.lang.String, ai.visma.asgt.type.ConfidenceThresholds>
  getTargetToConfidenceThresholds();
  /**
   * <code>map&lt;string, .asgt.type.ConfidenceThresholds&gt; target_to_confidence_thresholds = 10 [json_name = "targetToConfidenceThresholds"];</code>
   */
  java.util.Map<java.lang.String, ai.visma.asgt.type.ConfidenceThresholds>
  getTargetToConfidenceThresholdsMap();
  /**
   * <code>map&lt;string, .asgt.type.ConfidenceThresholds&gt; target_to_confidence_thresholds = 10 [json_name = "targetToConfidenceThresholds"];</code>
   */
  /* nullable */
ai.visma.asgt.type.ConfidenceThresholds getTargetToConfidenceThresholdsOrDefault(
      java.lang.String key,
      /* nullable */
ai.visma.asgt.type.ConfidenceThresholds defaultValue);
  /**
   * <code>map&lt;string, .asgt.type.ConfidenceThresholds&gt; target_to_confidence_thresholds = 10 [json_name = "targetToConfidenceThresholds"];</code>
   */
  ai.visma.asgt.type.ConfidenceThresholds getTargetToConfidenceThresholdsOrThrow(
      java.lang.String key);

  /**
   * <code>string metric_version = 11 [json_name = "metricVersion"];</code>
   * @return The metricVersion.
   */
  java.lang.String getMetricVersion();
  /**
   * <code>string metric_version = 11 [json_name = "metricVersion"];</code>
   * @return The bytes for metricVersion.
   */
  com.google.protobuf.ByteString
      getMetricVersionBytes();

  /**
   * <code>map&lt;string, .asgt.type.ConfidenceThresholds&gt; tail_target_to_confidence_thresholds = 12 [json_name = "tailTargetToConfidenceThresholds"];</code>
   */
  int getTailTargetToConfidenceThresholdsCount();
  /**
   * <code>map&lt;string, .asgt.type.ConfidenceThresholds&gt; tail_target_to_confidence_thresholds = 12 [json_name = "tailTargetToConfidenceThresholds"];</code>
   */
  boolean containsTailTargetToConfidenceThresholds(
      java.lang.String key);
  /**
   * Use {@link #getTailTargetToConfidenceThresholdsMap()} instead.
   */
  @java.lang.Deprecated
  java.util.Map<java.lang.String, ai.visma.asgt.type.ConfidenceThresholds>
  getTailTargetToConfidenceThresholds();
  /**
   * <code>map&lt;string, .asgt.type.ConfidenceThresholds&gt; tail_target_to_confidence_thresholds = 12 [json_name = "tailTargetToConfidenceThresholds"];</code>
   */
  java.util.Map<java.lang.String, ai.visma.asgt.type.ConfidenceThresholds>
  getTailTargetToConfidenceThresholdsMap();
  /**
   * <code>map&lt;string, .asgt.type.ConfidenceThresholds&gt; tail_target_to_confidence_thresholds = 12 [json_name = "tailTargetToConfidenceThresholds"];</code>
   */
  /* nullable */
ai.visma.asgt.type.ConfidenceThresholds getTailTargetToConfidenceThresholdsOrDefault(
      java.lang.String key,
      /* nullable */
ai.visma.asgt.type.ConfidenceThresholds defaultValue);
  /**
   * <code>map&lt;string, .asgt.type.ConfidenceThresholds&gt; tail_target_to_confidence_thresholds = 12 [json_name = "tailTargetToConfidenceThresholds"];</code>
   */
  ai.visma.asgt.type.ConfidenceThresholds getTailTargetToConfidenceThresholdsOrThrow(
      java.lang.String key);
}
