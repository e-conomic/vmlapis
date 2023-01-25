// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: asgt/type/train_statistics.proto

package ai.visma.asgt.type;

/**
 * Protobuf type {@code asgt.type.TargetStats}
 */
public final class TargetStats extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:asgt.type.TargetStats)
    TargetStatsOrBuilder {
private static final long serialVersionUID = 0L;
  // Use TargetStats.newBuilder() to construct.
  private TargetStats(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private TargetStats() {
    targetStats_ = java.util.Collections.emptyList();
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new TargetStats();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return ai.visma.asgt.type.TrainStatisticsProto.internal_static_asgt_type_TargetStats_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return ai.visma.asgt.type.TrainStatisticsProto.internal_static_asgt_type_TargetStats_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            ai.visma.asgt.type.TargetStats.class, ai.visma.asgt.type.TargetStats.Builder.class);
  }

  public static final int TARGET_STATS_FIELD_NUMBER = 1;
  @SuppressWarnings("serial")
  private java.util.List<ai.visma.asgt.type.TargetStat> targetStats_;
  /**
   * <pre>
   * statistics of classes in a single target (classification task)
   * </pre>
   *
   * <code>repeated .asgt.type.TargetStat target_stats = 1 [json_name = "targetStats"];</code>
   */
  @java.lang.Override
  public java.util.List<ai.visma.asgt.type.TargetStat> getTargetStatsList() {
    return targetStats_;
  }
  /**
   * <pre>
   * statistics of classes in a single target (classification task)
   * </pre>
   *
   * <code>repeated .asgt.type.TargetStat target_stats = 1 [json_name = "targetStats"];</code>
   */
  @java.lang.Override
  public java.util.List<? extends ai.visma.asgt.type.TargetStatOrBuilder> 
      getTargetStatsOrBuilderList() {
    return targetStats_;
  }
  /**
   * <pre>
   * statistics of classes in a single target (classification task)
   * </pre>
   *
   * <code>repeated .asgt.type.TargetStat target_stats = 1 [json_name = "targetStats"];</code>
   */
  @java.lang.Override
  public int getTargetStatsCount() {
    return targetStats_.size();
  }
  /**
   * <pre>
   * statistics of classes in a single target (classification task)
   * </pre>
   *
   * <code>repeated .asgt.type.TargetStat target_stats = 1 [json_name = "targetStats"];</code>
   */
  @java.lang.Override
  public ai.visma.asgt.type.TargetStat getTargetStats(int index) {
    return targetStats_.get(index);
  }
  /**
   * <pre>
   * statistics of classes in a single target (classification task)
   * </pre>
   *
   * <code>repeated .asgt.type.TargetStat target_stats = 1 [json_name = "targetStats"];</code>
   */
  @java.lang.Override
  public ai.visma.asgt.type.TargetStatOrBuilder getTargetStatsOrBuilder(
      int index) {
    return targetStats_.get(index);
  }

  private byte memoizedIsInitialized = -1;
  @java.lang.Override
  public final boolean isInitialized() {
    byte isInitialized = memoizedIsInitialized;
    if (isInitialized == 1) return true;
    if (isInitialized == 0) return false;

    memoizedIsInitialized = 1;
    return true;
  }

  @java.lang.Override
  public void writeTo(com.google.protobuf.CodedOutputStream output)
                      throws java.io.IOException {
    for (int i = 0; i < targetStats_.size(); i++) {
      output.writeMessage(1, targetStats_.get(i));
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    for (int i = 0; i < targetStats_.size(); i++) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(1, targetStats_.get(i));
    }
    size += getUnknownFields().getSerializedSize();
    memoizedSize = size;
    return size;
  }

  @java.lang.Override
  public boolean equals(final java.lang.Object obj) {
    if (obj == this) {
     return true;
    }
    if (!(obj instanceof ai.visma.asgt.type.TargetStats)) {
      return super.equals(obj);
    }
    ai.visma.asgt.type.TargetStats other = (ai.visma.asgt.type.TargetStats) obj;

    if (!getTargetStatsList()
        .equals(other.getTargetStatsList())) return false;
    if (!getUnknownFields().equals(other.getUnknownFields())) return false;
    return true;
  }

  @java.lang.Override
  public int hashCode() {
    if (memoizedHashCode != 0) {
      return memoizedHashCode;
    }
    int hash = 41;
    hash = (19 * hash) + getDescriptor().hashCode();
    if (getTargetStatsCount() > 0) {
      hash = (37 * hash) + TARGET_STATS_FIELD_NUMBER;
      hash = (53 * hash) + getTargetStatsList().hashCode();
    }
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static ai.visma.asgt.type.TargetStats parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static ai.visma.asgt.type.TargetStats parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static ai.visma.asgt.type.TargetStats parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static ai.visma.asgt.type.TargetStats parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static ai.visma.asgt.type.TargetStats parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static ai.visma.asgt.type.TargetStats parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static ai.visma.asgt.type.TargetStats parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static ai.visma.asgt.type.TargetStats parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static ai.visma.asgt.type.TargetStats parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static ai.visma.asgt.type.TargetStats parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static ai.visma.asgt.type.TargetStats parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static ai.visma.asgt.type.TargetStats parseFrom(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  @java.lang.Override
  public Builder newBuilderForType() { return newBuilder(); }
  public static Builder newBuilder() {
    return DEFAULT_INSTANCE.toBuilder();
  }
  public static Builder newBuilder(ai.visma.asgt.type.TargetStats prototype) {
    return DEFAULT_INSTANCE.toBuilder().mergeFrom(prototype);
  }
  @java.lang.Override
  public Builder toBuilder() {
    return this == DEFAULT_INSTANCE
        ? new Builder() : new Builder().mergeFrom(this);
  }

  @java.lang.Override
  protected Builder newBuilderForType(
      com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
    Builder builder = new Builder(parent);
    return builder;
  }
  /**
   * Protobuf type {@code asgt.type.TargetStats}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:asgt.type.TargetStats)
      ai.visma.asgt.type.TargetStatsOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return ai.visma.asgt.type.TrainStatisticsProto.internal_static_asgt_type_TargetStats_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return ai.visma.asgt.type.TrainStatisticsProto.internal_static_asgt_type_TargetStats_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              ai.visma.asgt.type.TargetStats.class, ai.visma.asgt.type.TargetStats.Builder.class);
    }

    // Construct using ai.visma.asgt.type.TargetStats.newBuilder()
    private Builder() {

    }

    private Builder(
        com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
      super(parent);

    }
    @java.lang.Override
    public Builder clear() {
      super.clear();
      bitField0_ = 0;
      if (targetStatsBuilder_ == null) {
        targetStats_ = java.util.Collections.emptyList();
      } else {
        targetStats_ = null;
        targetStatsBuilder_.clear();
      }
      bitField0_ = (bitField0_ & ~0x00000001);
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return ai.visma.asgt.type.TrainStatisticsProto.internal_static_asgt_type_TargetStats_descriptor;
    }

    @java.lang.Override
    public ai.visma.asgt.type.TargetStats getDefaultInstanceForType() {
      return ai.visma.asgt.type.TargetStats.getDefaultInstance();
    }

    @java.lang.Override
    public ai.visma.asgt.type.TargetStats build() {
      ai.visma.asgt.type.TargetStats result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public ai.visma.asgt.type.TargetStats buildPartial() {
      ai.visma.asgt.type.TargetStats result = new ai.visma.asgt.type.TargetStats(this);
      buildPartialRepeatedFields(result);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartialRepeatedFields(ai.visma.asgt.type.TargetStats result) {
      if (targetStatsBuilder_ == null) {
        if (((bitField0_ & 0x00000001) != 0)) {
          targetStats_ = java.util.Collections.unmodifiableList(targetStats_);
          bitField0_ = (bitField0_ & ~0x00000001);
        }
        result.targetStats_ = targetStats_;
      } else {
        result.targetStats_ = targetStatsBuilder_.build();
      }
    }

    private void buildPartial0(ai.visma.asgt.type.TargetStats result) {
      int from_bitField0_ = bitField0_;
    }

    @java.lang.Override
    public Builder clone() {
      return super.clone();
    }
    @java.lang.Override
    public Builder setField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        java.lang.Object value) {
      return super.setField(field, value);
    }
    @java.lang.Override
    public Builder clearField(
        com.google.protobuf.Descriptors.FieldDescriptor field) {
      return super.clearField(field);
    }
    @java.lang.Override
    public Builder clearOneof(
        com.google.protobuf.Descriptors.OneofDescriptor oneof) {
      return super.clearOneof(oneof);
    }
    @java.lang.Override
    public Builder setRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        int index, java.lang.Object value) {
      return super.setRepeatedField(field, index, value);
    }
    @java.lang.Override
    public Builder addRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        java.lang.Object value) {
      return super.addRepeatedField(field, value);
    }
    @java.lang.Override
    public Builder mergeFrom(com.google.protobuf.Message other) {
      if (other instanceof ai.visma.asgt.type.TargetStats) {
        return mergeFrom((ai.visma.asgt.type.TargetStats)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(ai.visma.asgt.type.TargetStats other) {
      if (other == ai.visma.asgt.type.TargetStats.getDefaultInstance()) return this;
      if (targetStatsBuilder_ == null) {
        if (!other.targetStats_.isEmpty()) {
          if (targetStats_.isEmpty()) {
            targetStats_ = other.targetStats_;
            bitField0_ = (bitField0_ & ~0x00000001);
          } else {
            ensureTargetStatsIsMutable();
            targetStats_.addAll(other.targetStats_);
          }
          onChanged();
        }
      } else {
        if (!other.targetStats_.isEmpty()) {
          if (targetStatsBuilder_.isEmpty()) {
            targetStatsBuilder_.dispose();
            targetStatsBuilder_ = null;
            targetStats_ = other.targetStats_;
            bitField0_ = (bitField0_ & ~0x00000001);
            targetStatsBuilder_ = 
              com.google.protobuf.GeneratedMessageV3.alwaysUseFieldBuilders ?
                 getTargetStatsFieldBuilder() : null;
          } else {
            targetStatsBuilder_.addAllMessages(other.targetStats_);
          }
        }
      }
      this.mergeUnknownFields(other.getUnknownFields());
      onChanged();
      return this;
    }

    @java.lang.Override
    public final boolean isInitialized() {
      return true;
    }

    @java.lang.Override
    public Builder mergeFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      if (extensionRegistry == null) {
        throw new java.lang.NullPointerException();
      }
      try {
        boolean done = false;
        while (!done) {
          int tag = input.readTag();
          switch (tag) {
            case 0:
              done = true;
              break;
            case 10: {
              ai.visma.asgt.type.TargetStat m =
                  input.readMessage(
                      ai.visma.asgt.type.TargetStat.parser(),
                      extensionRegistry);
              if (targetStatsBuilder_ == null) {
                ensureTargetStatsIsMutable();
                targetStats_.add(m);
              } else {
                targetStatsBuilder_.addMessage(m);
              }
              break;
            } // case 10
            default: {
              if (!super.parseUnknownField(input, extensionRegistry, tag)) {
                done = true; // was an endgroup tag
              }
              break;
            } // default:
          } // switch (tag)
        } // while (!done)
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        throw e.unwrapIOException();
      } finally {
        onChanged();
      } // finally
      return this;
    }
    private int bitField0_;

    private java.util.List<ai.visma.asgt.type.TargetStat> targetStats_ =
      java.util.Collections.emptyList();
    private void ensureTargetStatsIsMutable() {
      if (!((bitField0_ & 0x00000001) != 0)) {
        targetStats_ = new java.util.ArrayList<ai.visma.asgt.type.TargetStat>(targetStats_);
        bitField0_ |= 0x00000001;
       }
    }

    private com.google.protobuf.RepeatedFieldBuilderV3<
        ai.visma.asgt.type.TargetStat, ai.visma.asgt.type.TargetStat.Builder, ai.visma.asgt.type.TargetStatOrBuilder> targetStatsBuilder_;

    /**
     * <pre>
     * statistics of classes in a single target (classification task)
     * </pre>
     *
     * <code>repeated .asgt.type.TargetStat target_stats = 1 [json_name = "targetStats"];</code>
     */
    public java.util.List<ai.visma.asgt.type.TargetStat> getTargetStatsList() {
      if (targetStatsBuilder_ == null) {
        return java.util.Collections.unmodifiableList(targetStats_);
      } else {
        return targetStatsBuilder_.getMessageList();
      }
    }
    /**
     * <pre>
     * statistics of classes in a single target (classification task)
     * </pre>
     *
     * <code>repeated .asgt.type.TargetStat target_stats = 1 [json_name = "targetStats"];</code>
     */
    public int getTargetStatsCount() {
      if (targetStatsBuilder_ == null) {
        return targetStats_.size();
      } else {
        return targetStatsBuilder_.getCount();
      }
    }
    /**
     * <pre>
     * statistics of classes in a single target (classification task)
     * </pre>
     *
     * <code>repeated .asgt.type.TargetStat target_stats = 1 [json_name = "targetStats"];</code>
     */
    public ai.visma.asgt.type.TargetStat getTargetStats(int index) {
      if (targetStatsBuilder_ == null) {
        return targetStats_.get(index);
      } else {
        return targetStatsBuilder_.getMessage(index);
      }
    }
    /**
     * <pre>
     * statistics of classes in a single target (classification task)
     * </pre>
     *
     * <code>repeated .asgt.type.TargetStat target_stats = 1 [json_name = "targetStats"];</code>
     */
    public Builder setTargetStats(
        int index, ai.visma.asgt.type.TargetStat value) {
      if (targetStatsBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureTargetStatsIsMutable();
        targetStats_.set(index, value);
        onChanged();
      } else {
        targetStatsBuilder_.setMessage(index, value);
      }
      return this;
    }
    /**
     * <pre>
     * statistics of classes in a single target (classification task)
     * </pre>
     *
     * <code>repeated .asgt.type.TargetStat target_stats = 1 [json_name = "targetStats"];</code>
     */
    public Builder setTargetStats(
        int index, ai.visma.asgt.type.TargetStat.Builder builderForValue) {
      if (targetStatsBuilder_ == null) {
        ensureTargetStatsIsMutable();
        targetStats_.set(index, builderForValue.build());
        onChanged();
      } else {
        targetStatsBuilder_.setMessage(index, builderForValue.build());
      }
      return this;
    }
    /**
     * <pre>
     * statistics of classes in a single target (classification task)
     * </pre>
     *
     * <code>repeated .asgt.type.TargetStat target_stats = 1 [json_name = "targetStats"];</code>
     */
    public Builder addTargetStats(ai.visma.asgt.type.TargetStat value) {
      if (targetStatsBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureTargetStatsIsMutable();
        targetStats_.add(value);
        onChanged();
      } else {
        targetStatsBuilder_.addMessage(value);
      }
      return this;
    }
    /**
     * <pre>
     * statistics of classes in a single target (classification task)
     * </pre>
     *
     * <code>repeated .asgt.type.TargetStat target_stats = 1 [json_name = "targetStats"];</code>
     */
    public Builder addTargetStats(
        int index, ai.visma.asgt.type.TargetStat value) {
      if (targetStatsBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureTargetStatsIsMutable();
        targetStats_.add(index, value);
        onChanged();
      } else {
        targetStatsBuilder_.addMessage(index, value);
      }
      return this;
    }
    /**
     * <pre>
     * statistics of classes in a single target (classification task)
     * </pre>
     *
     * <code>repeated .asgt.type.TargetStat target_stats = 1 [json_name = "targetStats"];</code>
     */
    public Builder addTargetStats(
        ai.visma.asgt.type.TargetStat.Builder builderForValue) {
      if (targetStatsBuilder_ == null) {
        ensureTargetStatsIsMutable();
        targetStats_.add(builderForValue.build());
        onChanged();
      } else {
        targetStatsBuilder_.addMessage(builderForValue.build());
      }
      return this;
    }
    /**
     * <pre>
     * statistics of classes in a single target (classification task)
     * </pre>
     *
     * <code>repeated .asgt.type.TargetStat target_stats = 1 [json_name = "targetStats"];</code>
     */
    public Builder addTargetStats(
        int index, ai.visma.asgt.type.TargetStat.Builder builderForValue) {
      if (targetStatsBuilder_ == null) {
        ensureTargetStatsIsMutable();
        targetStats_.add(index, builderForValue.build());
        onChanged();
      } else {
        targetStatsBuilder_.addMessage(index, builderForValue.build());
      }
      return this;
    }
    /**
     * <pre>
     * statistics of classes in a single target (classification task)
     * </pre>
     *
     * <code>repeated .asgt.type.TargetStat target_stats = 1 [json_name = "targetStats"];</code>
     */
    public Builder addAllTargetStats(
        java.lang.Iterable<? extends ai.visma.asgt.type.TargetStat> values) {
      if (targetStatsBuilder_ == null) {
        ensureTargetStatsIsMutable();
        com.google.protobuf.AbstractMessageLite.Builder.addAll(
            values, targetStats_);
        onChanged();
      } else {
        targetStatsBuilder_.addAllMessages(values);
      }
      return this;
    }
    /**
     * <pre>
     * statistics of classes in a single target (classification task)
     * </pre>
     *
     * <code>repeated .asgt.type.TargetStat target_stats = 1 [json_name = "targetStats"];</code>
     */
    public Builder clearTargetStats() {
      if (targetStatsBuilder_ == null) {
        targetStats_ = java.util.Collections.emptyList();
        bitField0_ = (bitField0_ & ~0x00000001);
        onChanged();
      } else {
        targetStatsBuilder_.clear();
      }
      return this;
    }
    /**
     * <pre>
     * statistics of classes in a single target (classification task)
     * </pre>
     *
     * <code>repeated .asgt.type.TargetStat target_stats = 1 [json_name = "targetStats"];</code>
     */
    public Builder removeTargetStats(int index) {
      if (targetStatsBuilder_ == null) {
        ensureTargetStatsIsMutable();
        targetStats_.remove(index);
        onChanged();
      } else {
        targetStatsBuilder_.remove(index);
      }
      return this;
    }
    /**
     * <pre>
     * statistics of classes in a single target (classification task)
     * </pre>
     *
     * <code>repeated .asgt.type.TargetStat target_stats = 1 [json_name = "targetStats"];</code>
     */
    public ai.visma.asgt.type.TargetStat.Builder getTargetStatsBuilder(
        int index) {
      return getTargetStatsFieldBuilder().getBuilder(index);
    }
    /**
     * <pre>
     * statistics of classes in a single target (classification task)
     * </pre>
     *
     * <code>repeated .asgt.type.TargetStat target_stats = 1 [json_name = "targetStats"];</code>
     */
    public ai.visma.asgt.type.TargetStatOrBuilder getTargetStatsOrBuilder(
        int index) {
      if (targetStatsBuilder_ == null) {
        return targetStats_.get(index);  } else {
        return targetStatsBuilder_.getMessageOrBuilder(index);
      }
    }
    /**
     * <pre>
     * statistics of classes in a single target (classification task)
     * </pre>
     *
     * <code>repeated .asgt.type.TargetStat target_stats = 1 [json_name = "targetStats"];</code>
     */
    public java.util.List<? extends ai.visma.asgt.type.TargetStatOrBuilder> 
         getTargetStatsOrBuilderList() {
      if (targetStatsBuilder_ != null) {
        return targetStatsBuilder_.getMessageOrBuilderList();
      } else {
        return java.util.Collections.unmodifiableList(targetStats_);
      }
    }
    /**
     * <pre>
     * statistics of classes in a single target (classification task)
     * </pre>
     *
     * <code>repeated .asgt.type.TargetStat target_stats = 1 [json_name = "targetStats"];</code>
     */
    public ai.visma.asgt.type.TargetStat.Builder addTargetStatsBuilder() {
      return getTargetStatsFieldBuilder().addBuilder(
          ai.visma.asgt.type.TargetStat.getDefaultInstance());
    }
    /**
     * <pre>
     * statistics of classes in a single target (classification task)
     * </pre>
     *
     * <code>repeated .asgt.type.TargetStat target_stats = 1 [json_name = "targetStats"];</code>
     */
    public ai.visma.asgt.type.TargetStat.Builder addTargetStatsBuilder(
        int index) {
      return getTargetStatsFieldBuilder().addBuilder(
          index, ai.visma.asgt.type.TargetStat.getDefaultInstance());
    }
    /**
     * <pre>
     * statistics of classes in a single target (classification task)
     * </pre>
     *
     * <code>repeated .asgt.type.TargetStat target_stats = 1 [json_name = "targetStats"];</code>
     */
    public java.util.List<ai.visma.asgt.type.TargetStat.Builder> 
         getTargetStatsBuilderList() {
      return getTargetStatsFieldBuilder().getBuilderList();
    }
    private com.google.protobuf.RepeatedFieldBuilderV3<
        ai.visma.asgt.type.TargetStat, ai.visma.asgt.type.TargetStat.Builder, ai.visma.asgt.type.TargetStatOrBuilder> 
        getTargetStatsFieldBuilder() {
      if (targetStatsBuilder_ == null) {
        targetStatsBuilder_ = new com.google.protobuf.RepeatedFieldBuilderV3<
            ai.visma.asgt.type.TargetStat, ai.visma.asgt.type.TargetStat.Builder, ai.visma.asgt.type.TargetStatOrBuilder>(
                targetStats_,
                ((bitField0_ & 0x00000001) != 0),
                getParentForChildren(),
                isClean());
        targetStats_ = null;
      }
      return targetStatsBuilder_;
    }
    @java.lang.Override
    public final Builder setUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return super.setUnknownFields(unknownFields);
    }

    @java.lang.Override
    public final Builder mergeUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return super.mergeUnknownFields(unknownFields);
    }


    // @@protoc_insertion_point(builder_scope:asgt.type.TargetStats)
  }

  // @@protoc_insertion_point(class_scope:asgt.type.TargetStats)
  private static final ai.visma.asgt.type.TargetStats DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new ai.visma.asgt.type.TargetStats();
  }

  public static ai.visma.asgt.type.TargetStats getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<TargetStats>
      PARSER = new com.google.protobuf.AbstractParser<TargetStats>() {
    @java.lang.Override
    public TargetStats parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      Builder builder = newBuilder();
      try {
        builder.mergeFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        throw e.setUnfinishedMessage(builder.buildPartial());
      } catch (com.google.protobuf.UninitializedMessageException e) {
        throw e.asInvalidProtocolBufferException().setUnfinishedMessage(builder.buildPartial());
      } catch (java.io.IOException e) {
        throw new com.google.protobuf.InvalidProtocolBufferException(e)
            .setUnfinishedMessage(builder.buildPartial());
      }
      return builder.buildPartial();
    }
  };

  public static com.google.protobuf.Parser<TargetStats> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<TargetStats> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public ai.visma.asgt.type.TargetStats getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

