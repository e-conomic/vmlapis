// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: asgt/v2/dataset_service.proto

package ai.visma.asgt.v2;

/**
 * Protobuf type {@code asgt.v2.TrainingRequestOptions}
 */
public final class TrainingRequestOptions extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:asgt.v2.TrainingRequestOptions)
    TrainingRequestOptionsOrBuilder {
private static final long serialVersionUID = 0L;
  // Use TrainingRequestOptions.newBuilder() to construct.
  private TrainingRequestOptions(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private TrainingRequestOptions() {
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new TrainingRequestOptions();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return ai.visma.asgt.v2.DatasetServiceProto.internal_static_asgt_v2_TrainingRequestOptions_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return ai.visma.asgt.v2.DatasetServiceProto.internal_static_asgt_v2_TrainingRequestOptions_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            ai.visma.asgt.v2.TrainingRequestOptions.class, ai.visma.asgt.v2.TrainingRequestOptions.Builder.class);
  }

  public static final int LIMIT_FIELD_NUMBER = 1;
  private long limit_ = 0L;
  /**
   * <pre>
   * The number of trainings to return. Ranges from 1 to 100.
   * </pre>
   *
   * <code>int64 limit = 1 [json_name = "limit", (.validate.rules) = { ... }</code>
   * @return The limit.
   */
  @java.lang.Override
  public long getLimit() {
    return limit_;
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
    if (limit_ != 0L) {
      output.writeInt64(1, limit_);
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (limit_ != 0L) {
      size += com.google.protobuf.CodedOutputStream
        .computeInt64Size(1, limit_);
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
    if (!(obj instanceof ai.visma.asgt.v2.TrainingRequestOptions)) {
      return super.equals(obj);
    }
    ai.visma.asgt.v2.TrainingRequestOptions other = (ai.visma.asgt.v2.TrainingRequestOptions) obj;

    if (getLimit()
        != other.getLimit()) return false;
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
    hash = (37 * hash) + LIMIT_FIELD_NUMBER;
    hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
        getLimit());
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static ai.visma.asgt.v2.TrainingRequestOptions parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static ai.visma.asgt.v2.TrainingRequestOptions parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static ai.visma.asgt.v2.TrainingRequestOptions parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static ai.visma.asgt.v2.TrainingRequestOptions parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static ai.visma.asgt.v2.TrainingRequestOptions parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static ai.visma.asgt.v2.TrainingRequestOptions parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static ai.visma.asgt.v2.TrainingRequestOptions parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static ai.visma.asgt.v2.TrainingRequestOptions parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static ai.visma.asgt.v2.TrainingRequestOptions parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static ai.visma.asgt.v2.TrainingRequestOptions parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static ai.visma.asgt.v2.TrainingRequestOptions parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static ai.visma.asgt.v2.TrainingRequestOptions parseFrom(
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
  public static Builder newBuilder(ai.visma.asgt.v2.TrainingRequestOptions prototype) {
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
   * Protobuf type {@code asgt.v2.TrainingRequestOptions}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:asgt.v2.TrainingRequestOptions)
      ai.visma.asgt.v2.TrainingRequestOptionsOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return ai.visma.asgt.v2.DatasetServiceProto.internal_static_asgt_v2_TrainingRequestOptions_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return ai.visma.asgt.v2.DatasetServiceProto.internal_static_asgt_v2_TrainingRequestOptions_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              ai.visma.asgt.v2.TrainingRequestOptions.class, ai.visma.asgt.v2.TrainingRequestOptions.Builder.class);
    }

    // Construct using ai.visma.asgt.v2.TrainingRequestOptions.newBuilder()
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
      limit_ = 0L;
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return ai.visma.asgt.v2.DatasetServiceProto.internal_static_asgt_v2_TrainingRequestOptions_descriptor;
    }

    @java.lang.Override
    public ai.visma.asgt.v2.TrainingRequestOptions getDefaultInstanceForType() {
      return ai.visma.asgt.v2.TrainingRequestOptions.getDefaultInstance();
    }

    @java.lang.Override
    public ai.visma.asgt.v2.TrainingRequestOptions build() {
      ai.visma.asgt.v2.TrainingRequestOptions result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public ai.visma.asgt.v2.TrainingRequestOptions buildPartial() {
      ai.visma.asgt.v2.TrainingRequestOptions result = new ai.visma.asgt.v2.TrainingRequestOptions(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(ai.visma.asgt.v2.TrainingRequestOptions result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.limit_ = limit_;
      }
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
      if (other instanceof ai.visma.asgt.v2.TrainingRequestOptions) {
        return mergeFrom((ai.visma.asgt.v2.TrainingRequestOptions)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(ai.visma.asgt.v2.TrainingRequestOptions other) {
      if (other == ai.visma.asgt.v2.TrainingRequestOptions.getDefaultInstance()) return this;
      if (other.getLimit() != 0L) {
        setLimit(other.getLimit());
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
            case 8: {
              limit_ = input.readInt64();
              bitField0_ |= 0x00000001;
              break;
            } // case 8
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

    private long limit_ ;
    /**
     * <pre>
     * The number of trainings to return. Ranges from 1 to 100.
     * </pre>
     *
     * <code>int64 limit = 1 [json_name = "limit", (.validate.rules) = { ... }</code>
     * @return The limit.
     */
    @java.lang.Override
    public long getLimit() {
      return limit_;
    }
    /**
     * <pre>
     * The number of trainings to return. Ranges from 1 to 100.
     * </pre>
     *
     * <code>int64 limit = 1 [json_name = "limit", (.validate.rules) = { ... }</code>
     * @param value The limit to set.
     * @return This builder for chaining.
     */
    public Builder setLimit(long value) {
      
      limit_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * The number of trainings to return. Ranges from 1 to 100.
     * </pre>
     *
     * <code>int64 limit = 1 [json_name = "limit", (.validate.rules) = { ... }</code>
     * @return This builder for chaining.
     */
    public Builder clearLimit() {
      bitField0_ = (bitField0_ & ~0x00000001);
      limit_ = 0L;
      onChanged();
      return this;
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


    // @@protoc_insertion_point(builder_scope:asgt.v2.TrainingRequestOptions)
  }

  // @@protoc_insertion_point(class_scope:asgt.v2.TrainingRequestOptions)
  private static final ai.visma.asgt.v2.TrainingRequestOptions DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new ai.visma.asgt.v2.TrainingRequestOptions();
  }

  public static ai.visma.asgt.v2.TrainingRequestOptions getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<TrainingRequestOptions>
      PARSER = new com.google.protobuf.AbstractParser<TrainingRequestOptions>() {
    @java.lang.Override
    public TrainingRequestOptions parsePartialFrom(
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

  public static com.google.protobuf.Parser<TrainingRequestOptions> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<TrainingRequestOptions> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public ai.visma.asgt.v2.TrainingRequestOptions getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

