// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: asgt/type/train_statistics.proto

package ai.visma.asgt.type;

public interface TrainStatisticsOrBuilder extends
    // @@protoc_insertion_point(interface_extends:asgt.type.TrainStatistics)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * target statistics for each target (classification task)
   * </pre>
   *
   * <code>map&lt;string, .asgt.type.TargetStats&gt; target_stats_by_target = 1 [json_name = "targetStatsByTarget"];</code>
   */
  int getTargetStatsByTargetCount();
  /**
   * <pre>
   * target statistics for each target (classification task)
   * </pre>
   *
   * <code>map&lt;string, .asgt.type.TargetStats&gt; target_stats_by_target = 1 [json_name = "targetStatsByTarget"];</code>
   */
  boolean containsTargetStatsByTarget(
      java.lang.String key);
  /**
   * Use {@link #getTargetStatsByTargetMap()} instead.
   */
  @java.lang.Deprecated
  java.util.Map<java.lang.String, ai.visma.asgt.type.TargetStats>
  getTargetStatsByTarget();
  /**
   * <pre>
   * target statistics for each target (classification task)
   * </pre>
   *
   * <code>map&lt;string, .asgt.type.TargetStats&gt; target_stats_by_target = 1 [json_name = "targetStatsByTarget"];</code>
   */
  java.util.Map<java.lang.String, ai.visma.asgt.type.TargetStats>
  getTargetStatsByTargetMap();
  /**
   * <pre>
   * target statistics for each target (classification task)
   * </pre>
   *
   * <code>map&lt;string, .asgt.type.TargetStats&gt; target_stats_by_target = 1 [json_name = "targetStatsByTarget"];</code>
   */
  /* nullable */
ai.visma.asgt.type.TargetStats getTargetStatsByTargetOrDefault(
      java.lang.String key,
      /* nullable */
ai.visma.asgt.type.TargetStats defaultValue);
  /**
   * <pre>
   * target statistics for each target (classification task)
   * </pre>
   *
   * <code>map&lt;string, .asgt.type.TargetStats&gt; target_stats_by_target = 1 [json_name = "targetStatsByTarget"];</code>
   */
  ai.visma.asgt.type.TargetStats getTargetStatsByTargetOrThrow(
      java.lang.String key);

  /**
   * <pre>
   * feature statistics for each target (classification task)
   * </pre>
   *
   * <code>map&lt;string, .asgt.type.FeatureStats&gt; feature_stats_by_target = 2 [json_name = "featureStatsByTarget"];</code>
   */
  int getFeatureStatsByTargetCount();
  /**
   * <pre>
   * feature statistics for each target (classification task)
   * </pre>
   *
   * <code>map&lt;string, .asgt.type.FeatureStats&gt; feature_stats_by_target = 2 [json_name = "featureStatsByTarget"];</code>
   */
  boolean containsFeatureStatsByTarget(
      java.lang.String key);
  /**
   * Use {@link #getFeatureStatsByTargetMap()} instead.
   */
  @java.lang.Deprecated
  java.util.Map<java.lang.String, ai.visma.asgt.type.FeatureStats>
  getFeatureStatsByTarget();
  /**
   * <pre>
   * feature statistics for each target (classification task)
   * </pre>
   *
   * <code>map&lt;string, .asgt.type.FeatureStats&gt; feature_stats_by_target = 2 [json_name = "featureStatsByTarget"];</code>
   */
  java.util.Map<java.lang.String, ai.visma.asgt.type.FeatureStats>
  getFeatureStatsByTargetMap();
  /**
   * <pre>
   * feature statistics for each target (classification task)
   * </pre>
   *
   * <code>map&lt;string, .asgt.type.FeatureStats&gt; feature_stats_by_target = 2 [json_name = "featureStatsByTarget"];</code>
   */
  /* nullable */
ai.visma.asgt.type.FeatureStats getFeatureStatsByTargetOrDefault(
      java.lang.String key,
      /* nullable */
ai.visma.asgt.type.FeatureStats defaultValue);
  /**
   * <pre>
   * feature statistics for each target (classification task)
   * </pre>
   *
   * <code>map&lt;string, .asgt.type.FeatureStats&gt; feature_stats_by_target = 2 [json_name = "featureStatsByTarget"];</code>
   */
  ai.visma.asgt.type.FeatureStats getFeatureStatsByTargetOrThrow(
      java.lang.String key);

  /**
   * <pre>
   * measure of train/test similarity
   * </pre>
   *
   * <code>float similarity_index = 3 [json_name = "similarityIndex"];</code>
   * @return The similarityIndex.
   */
  float getSimilarityIndex();
}
