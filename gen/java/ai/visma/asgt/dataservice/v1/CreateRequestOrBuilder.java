// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: asgt/data/v1/data_service.proto

package ai.visma.asgt.dataservice.v1;

public interface CreateRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:asgt.dataservice.v1.CreateRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string name = 1 [json_name = "name"];</code>
   * @return The name.
   */
  java.lang.String getName();
  /**
   * <code>string name = 1 [json_name = "name"];</code>
   * @return The bytes for name.
   */
  com.google.protobuf.ByteString
      getNameBytes();

  /**
   * <code>string type = 2 [json_name = "type"];</code>
   * @return The type.
   */
  java.lang.String getType();
  /**
   * <code>string type = 2 [json_name = "type"];</code>
   * @return The bytes for type.
   */
  com.google.protobuf.ByteString
      getTypeBytes();

  /**
   * <code>repeated string tags = 3 [json_name = "tags"];</code>
   * @return A list containing the tags.
   */
  java.util.List<java.lang.String>
      getTagsList();
  /**
   * <code>repeated string tags = 3 [json_name = "tags"];</code>
   * @return The count of tags.
   */
  int getTagsCount();
  /**
   * <code>repeated string tags = 3 [json_name = "tags"];</code>
   * @param index The index of the element to return.
   * @return The tags at the given index.
   */
  java.lang.String getTags(int index);
  /**
   * <code>repeated string tags = 3 [json_name = "tags"];</code>
   * @param index The index of the value to return.
   * @return The bytes of the tags at the given index.
   */
  com.google.protobuf.ByteString
      getTagsBytes(int index);

  /**
   * <code>repeated string targets = 6 [json_name = "targets"];</code>
   * @return A list containing the targets.
   */
  java.util.List<java.lang.String>
      getTargetsList();
  /**
   * <code>repeated string targets = 6 [json_name = "targets"];</code>
   * @return The count of targets.
   */
  int getTargetsCount();
  /**
   * <code>repeated string targets = 6 [json_name = "targets"];</code>
   * @param index The index of the element to return.
   * @return The targets at the given index.
   */
  java.lang.String getTargets(int index);
  /**
   * <code>repeated string targets = 6 [json_name = "targets"];</code>
   * @param index The index of the value to return.
   * @return The bytes of the targets at the given index.
   */
  com.google.protobuf.ByteString
      getTargetsBytes(int index);

  /**
   * <code>repeated .asgt.type.Sample samples = 4 [json_name = "samples"];</code>
   */
  java.util.List<ai.visma.asgt.type.Sample> 
      getSamplesList();
  /**
   * <code>repeated .asgt.type.Sample samples = 4 [json_name = "samples"];</code>
   */
  ai.visma.asgt.type.Sample getSamples(int index);
  /**
   * <code>repeated .asgt.type.Sample samples = 4 [json_name = "samples"];</code>
   */
  int getSamplesCount();
  /**
   * <code>repeated .asgt.type.Sample samples = 4 [json_name = "samples"];</code>
   */
  java.util.List<? extends ai.visma.asgt.type.SampleOrBuilder> 
      getSamplesOrBuilderList();
  /**
   * <code>repeated .asgt.type.Sample samples = 4 [json_name = "samples"];</code>
   */
  ai.visma.asgt.type.SampleOrBuilder getSamplesOrBuilder(
      int index);

  /**
   * <code>.asgt.type.RetentionPolicy retention_policy = 5 [json_name = "retentionPolicy"];</code>
   * @return Whether the retentionPolicy field is set.
   */
  boolean hasRetentionPolicy();
  /**
   * <code>.asgt.type.RetentionPolicy retention_policy = 5 [json_name = "retentionPolicy"];</code>
   * @return The retentionPolicy.
   */
  ai.visma.asgt.type.RetentionPolicy getRetentionPolicy();
  /**
   * <code>.asgt.type.RetentionPolicy retention_policy = 5 [json_name = "retentionPolicy"];</code>
   */
  ai.visma.asgt.type.RetentionPolicyOrBuilder getRetentionPolicyOrBuilder();
}