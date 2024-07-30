// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: asgt/type/target_metrics.proto

package ai.visma.asgt.type;

public interface TargetMetricsOrBuilder extends
    // @@protoc_insertion_point(interface_extends:asgt.type.TargetMetrics)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string target = 1 [json_name = "target"];</code>
   * @return The target.
   */
  java.lang.String getTarget();
  /**
   * <code>string target = 1 [json_name = "target"];</code>
   * @return The bytes for target.
   */
  com.google.protobuf.ByteString
      getTargetBytes();

  /**
   * <code>repeated .asgt.type.TargetMetrics.Metric metrics = 2 [json_name = "metrics"];</code>
   */
  java.util.List<ai.visma.asgt.type.TargetMetrics.Metric> 
      getMetricsList();
  /**
   * <code>repeated .asgt.type.TargetMetrics.Metric metrics = 2 [json_name = "metrics"];</code>
   */
  ai.visma.asgt.type.TargetMetrics.Metric getMetrics(int index);
  /**
   * <code>repeated .asgt.type.TargetMetrics.Metric metrics = 2 [json_name = "metrics"];</code>
   */
  int getMetricsCount();
  /**
   * <code>repeated .asgt.type.TargetMetrics.Metric metrics = 2 [json_name = "metrics"];</code>
   */
  java.util.List<? extends ai.visma.asgt.type.TargetMetrics.MetricOrBuilder> 
      getMetricsOrBuilderList();
  /**
   * <code>repeated .asgt.type.TargetMetrics.Metric metrics = 2 [json_name = "metrics"];</code>
   */
  ai.visma.asgt.type.TargetMetrics.MetricOrBuilder getMetricsOrBuilder(
      int index);

  /**
   * <pre>
   * Matthews correlation coefficient
   * </pre>
   *
   * <code>repeated float mcc = 3 [json_name = "mcc"];</code>
   * @return A list containing the mcc.
   */
  java.util.List<java.lang.Float> getMccList();
  /**
   * <pre>
   * Matthews correlation coefficient
   * </pre>
   *
   * <code>repeated float mcc = 3 [json_name = "mcc"];</code>
   * @return The count of mcc.
   */
  int getMccCount();
  /**
   * <pre>
   * Matthews correlation coefficient
   * </pre>
   *
   * <code>repeated float mcc = 3 [json_name = "mcc"];</code>
   * @param index The index of the element to return.
   * @return The mcc at the given index.
   */
  float getMcc(int index);

  /**
   * <code>repeated float accuracy = 4 [json_name = "accuracy"];</code>
   * @return A list containing the accuracy.
   */
  java.util.List<java.lang.Float> getAccuracyList();
  /**
   * <code>repeated float accuracy = 4 [json_name = "accuracy"];</code>
   * @return The count of accuracy.
   */
  int getAccuracyCount();
  /**
   * <code>repeated float accuracy = 4 [json_name = "accuracy"];</code>
   * @param index The index of the element to return.
   * @return The accuracy at the given index.
   */
  float getAccuracy(int index);

  /**
   * <code>repeated float balanced_accuracy = 5 [json_name = "balancedAccuracy"];</code>
   * @return A list containing the balancedAccuracy.
   */
  java.util.List<java.lang.Float> getBalancedAccuracyList();
  /**
   * <code>repeated float balanced_accuracy = 5 [json_name = "balancedAccuracy"];</code>
   * @return The count of balancedAccuracy.
   */
  int getBalancedAccuracyCount();
  /**
   * <code>repeated float balanced_accuracy = 5 [json_name = "balancedAccuracy"];</code>
   * @param index The index of the element to return.
   * @return The balancedAccuracy at the given index.
   */
  float getBalancedAccuracy(int index);
}
