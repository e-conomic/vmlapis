// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: ssn/mlservice/v2/example.proto

package org.tensorflow.example;

public interface SequenceExampleOrBuilder extends
    // @@protoc_insertion_point(interface_extends:tensorflow.SequenceExample)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>.tensorflow.Features context = 1 [json_name = "context"];</code>
   * @return Whether the context field is set.
   */
  boolean hasContext();
  /**
   * <code>.tensorflow.Features context = 1 [json_name = "context"];</code>
   * @return The context.
   */
  org.tensorflow.example.Features getContext();
  /**
   * <code>.tensorflow.Features context = 1 [json_name = "context"];</code>
   */
  org.tensorflow.example.FeaturesOrBuilder getContextOrBuilder();

  /**
   * <code>.tensorflow.FeatureLists feature_lists = 2 [json_name = "featureLists"];</code>
   * @return Whether the featureLists field is set.
   */
  boolean hasFeatureLists();
  /**
   * <code>.tensorflow.FeatureLists feature_lists = 2 [json_name = "featureLists"];</code>
   * @return The featureLists.
   */
  org.tensorflow.example.FeatureLists getFeatureLists();
  /**
   * <code>.tensorflow.FeatureLists feature_lists = 2 [json_name = "featureLists"];</code>
   */
  org.tensorflow.example.FeatureListsOrBuilder getFeatureListsOrBuilder();
}