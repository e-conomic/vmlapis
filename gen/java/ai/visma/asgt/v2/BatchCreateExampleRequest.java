// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: asgt/v2/dataset_service.proto

package ai.visma.asgt.v2;

/**
 * Protobuf type {@code asgt.v2.BatchCreateExampleRequest}
 */
public final class BatchCreateExampleRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:asgt.v2.BatchCreateExampleRequest)
    BatchCreateExampleRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use BatchCreateExampleRequest.newBuilder() to construct.
  private BatchCreateExampleRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private BatchCreateExampleRequest() {
    datasetName_ = "";
    examples_ = java.util.Collections.emptyList();
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new BatchCreateExampleRequest();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return ai.visma.asgt.v2.DatasetServiceProto.internal_static_asgt_v2_BatchCreateExampleRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return ai.visma.asgt.v2.DatasetServiceProto.internal_static_asgt_v2_BatchCreateExampleRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            ai.visma.asgt.v2.BatchCreateExampleRequest.class, ai.visma.asgt.v2.BatchCreateExampleRequest.Builder.class);
  }

  public static final int DATASET_NAME_FIELD_NUMBER = 1;
  @SuppressWarnings("serial")
  private volatile java.lang.Object datasetName_ = "";
  /**
   * <pre>
   * text-no-spaces
   * </pre>
   *
   * <code>string dataset_name = 1 [json_name = "datasetName", (.validate.rules) = { ... }</code>
   * @return The datasetName.
   */
  @java.lang.Override
  public java.lang.String getDatasetName() {
    java.lang.Object ref = datasetName_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      datasetName_ = s;
      return s;
    }
  }
  /**
   * <pre>
   * text-no-spaces
   * </pre>
   *
   * <code>string dataset_name = 1 [json_name = "datasetName", (.validate.rules) = { ... }</code>
   * @return The bytes for datasetName.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getDatasetNameBytes() {
    java.lang.Object ref = datasetName_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      datasetName_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int EXAMPLES_FIELD_NUMBER = 2;
  @SuppressWarnings("serial")
  private java.util.List<ai.visma.asgt.v2.type.Example> examples_;
  /**
   * <code>repeated .asgt.v2.type.Example examples = 2 [json_name = "examples"];</code>
   */
  @java.lang.Override
  public java.util.List<ai.visma.asgt.v2.type.Example> getExamplesList() {
    return examples_;
  }
  /**
   * <code>repeated .asgt.v2.type.Example examples = 2 [json_name = "examples"];</code>
   */
  @java.lang.Override
  public java.util.List<? extends ai.visma.asgt.v2.type.ExampleOrBuilder> 
      getExamplesOrBuilderList() {
    return examples_;
  }
  /**
   * <code>repeated .asgt.v2.type.Example examples = 2 [json_name = "examples"];</code>
   */
  @java.lang.Override
  public int getExamplesCount() {
    return examples_.size();
  }
  /**
   * <code>repeated .asgt.v2.type.Example examples = 2 [json_name = "examples"];</code>
   */
  @java.lang.Override
  public ai.visma.asgt.v2.type.Example getExamples(int index) {
    return examples_.get(index);
  }
  /**
   * <code>repeated .asgt.v2.type.Example examples = 2 [json_name = "examples"];</code>
   */
  @java.lang.Override
  public ai.visma.asgt.v2.type.ExampleOrBuilder getExamplesOrBuilder(
      int index) {
    return examples_.get(index);
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
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(datasetName_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, datasetName_);
    }
    for (int i = 0; i < examples_.size(); i++) {
      output.writeMessage(2, examples_.get(i));
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(datasetName_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, datasetName_);
    }
    for (int i = 0; i < examples_.size(); i++) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(2, examples_.get(i));
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
    if (!(obj instanceof ai.visma.asgt.v2.BatchCreateExampleRequest)) {
      return super.equals(obj);
    }
    ai.visma.asgt.v2.BatchCreateExampleRequest other = (ai.visma.asgt.v2.BatchCreateExampleRequest) obj;

    if (!getDatasetName()
        .equals(other.getDatasetName())) return false;
    if (!getExamplesList()
        .equals(other.getExamplesList())) return false;
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
    hash = (37 * hash) + DATASET_NAME_FIELD_NUMBER;
    hash = (53 * hash) + getDatasetName().hashCode();
    if (getExamplesCount() > 0) {
      hash = (37 * hash) + EXAMPLES_FIELD_NUMBER;
      hash = (53 * hash) + getExamplesList().hashCode();
    }
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static ai.visma.asgt.v2.BatchCreateExampleRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static ai.visma.asgt.v2.BatchCreateExampleRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static ai.visma.asgt.v2.BatchCreateExampleRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static ai.visma.asgt.v2.BatchCreateExampleRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static ai.visma.asgt.v2.BatchCreateExampleRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static ai.visma.asgt.v2.BatchCreateExampleRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static ai.visma.asgt.v2.BatchCreateExampleRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static ai.visma.asgt.v2.BatchCreateExampleRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static ai.visma.asgt.v2.BatchCreateExampleRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static ai.visma.asgt.v2.BatchCreateExampleRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static ai.visma.asgt.v2.BatchCreateExampleRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static ai.visma.asgt.v2.BatchCreateExampleRequest parseFrom(
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
  public static Builder newBuilder(ai.visma.asgt.v2.BatchCreateExampleRequest prototype) {
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
   * Protobuf type {@code asgt.v2.BatchCreateExampleRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:asgt.v2.BatchCreateExampleRequest)
      ai.visma.asgt.v2.BatchCreateExampleRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return ai.visma.asgt.v2.DatasetServiceProto.internal_static_asgt_v2_BatchCreateExampleRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return ai.visma.asgt.v2.DatasetServiceProto.internal_static_asgt_v2_BatchCreateExampleRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              ai.visma.asgt.v2.BatchCreateExampleRequest.class, ai.visma.asgt.v2.BatchCreateExampleRequest.Builder.class);
    }

    // Construct using ai.visma.asgt.v2.BatchCreateExampleRequest.newBuilder()
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
      datasetName_ = "";
      if (examplesBuilder_ == null) {
        examples_ = java.util.Collections.emptyList();
      } else {
        examples_ = null;
        examplesBuilder_.clear();
      }
      bitField0_ = (bitField0_ & ~0x00000002);
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return ai.visma.asgt.v2.DatasetServiceProto.internal_static_asgt_v2_BatchCreateExampleRequest_descriptor;
    }

    @java.lang.Override
    public ai.visma.asgt.v2.BatchCreateExampleRequest getDefaultInstanceForType() {
      return ai.visma.asgt.v2.BatchCreateExampleRequest.getDefaultInstance();
    }

    @java.lang.Override
    public ai.visma.asgt.v2.BatchCreateExampleRequest build() {
      ai.visma.asgt.v2.BatchCreateExampleRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public ai.visma.asgt.v2.BatchCreateExampleRequest buildPartial() {
      ai.visma.asgt.v2.BatchCreateExampleRequest result = new ai.visma.asgt.v2.BatchCreateExampleRequest(this);
      buildPartialRepeatedFields(result);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartialRepeatedFields(ai.visma.asgt.v2.BatchCreateExampleRequest result) {
      if (examplesBuilder_ == null) {
        if (((bitField0_ & 0x00000002) != 0)) {
          examples_ = java.util.Collections.unmodifiableList(examples_);
          bitField0_ = (bitField0_ & ~0x00000002);
        }
        result.examples_ = examples_;
      } else {
        result.examples_ = examplesBuilder_.build();
      }
    }

    private void buildPartial0(ai.visma.asgt.v2.BatchCreateExampleRequest result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.datasetName_ = datasetName_;
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
      if (other instanceof ai.visma.asgt.v2.BatchCreateExampleRequest) {
        return mergeFrom((ai.visma.asgt.v2.BatchCreateExampleRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(ai.visma.asgt.v2.BatchCreateExampleRequest other) {
      if (other == ai.visma.asgt.v2.BatchCreateExampleRequest.getDefaultInstance()) return this;
      if (!other.getDatasetName().isEmpty()) {
        datasetName_ = other.datasetName_;
        bitField0_ |= 0x00000001;
        onChanged();
      }
      if (examplesBuilder_ == null) {
        if (!other.examples_.isEmpty()) {
          if (examples_.isEmpty()) {
            examples_ = other.examples_;
            bitField0_ = (bitField0_ & ~0x00000002);
          } else {
            ensureExamplesIsMutable();
            examples_.addAll(other.examples_);
          }
          onChanged();
        }
      } else {
        if (!other.examples_.isEmpty()) {
          if (examplesBuilder_.isEmpty()) {
            examplesBuilder_.dispose();
            examplesBuilder_ = null;
            examples_ = other.examples_;
            bitField0_ = (bitField0_ & ~0x00000002);
            examplesBuilder_ = 
              com.google.protobuf.GeneratedMessageV3.alwaysUseFieldBuilders ?
                 getExamplesFieldBuilder() : null;
          } else {
            examplesBuilder_.addAllMessages(other.examples_);
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
              datasetName_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000001;
              break;
            } // case 10
            case 18: {
              ai.visma.asgt.v2.type.Example m =
                  input.readMessage(
                      ai.visma.asgt.v2.type.Example.parser(),
                      extensionRegistry);
              if (examplesBuilder_ == null) {
                ensureExamplesIsMutable();
                examples_.add(m);
              } else {
                examplesBuilder_.addMessage(m);
              }
              break;
            } // case 18
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

    private java.lang.Object datasetName_ = "";
    /**
     * <pre>
     * text-no-spaces
     * </pre>
     *
     * <code>string dataset_name = 1 [json_name = "datasetName", (.validate.rules) = { ... }</code>
     * @return The datasetName.
     */
    public java.lang.String getDatasetName() {
      java.lang.Object ref = datasetName_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        datasetName_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <pre>
     * text-no-spaces
     * </pre>
     *
     * <code>string dataset_name = 1 [json_name = "datasetName", (.validate.rules) = { ... }</code>
     * @return The bytes for datasetName.
     */
    public com.google.protobuf.ByteString
        getDatasetNameBytes() {
      java.lang.Object ref = datasetName_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        datasetName_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <pre>
     * text-no-spaces
     * </pre>
     *
     * <code>string dataset_name = 1 [json_name = "datasetName", (.validate.rules) = { ... }</code>
     * @param value The datasetName to set.
     * @return This builder for chaining.
     */
    public Builder setDatasetName(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      datasetName_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * text-no-spaces
     * </pre>
     *
     * <code>string dataset_name = 1 [json_name = "datasetName", (.validate.rules) = { ... }</code>
     * @return This builder for chaining.
     */
    public Builder clearDatasetName() {
      datasetName_ = getDefaultInstance().getDatasetName();
      bitField0_ = (bitField0_ & ~0x00000001);
      onChanged();
      return this;
    }
    /**
     * <pre>
     * text-no-spaces
     * </pre>
     *
     * <code>string dataset_name = 1 [json_name = "datasetName", (.validate.rules) = { ... }</code>
     * @param value The bytes for datasetName to set.
     * @return This builder for chaining.
     */
    public Builder setDatasetNameBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      datasetName_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }

    private java.util.List<ai.visma.asgt.v2.type.Example> examples_ =
      java.util.Collections.emptyList();
    private void ensureExamplesIsMutable() {
      if (!((bitField0_ & 0x00000002) != 0)) {
        examples_ = new java.util.ArrayList<ai.visma.asgt.v2.type.Example>(examples_);
        bitField0_ |= 0x00000002;
       }
    }

    private com.google.protobuf.RepeatedFieldBuilderV3<
        ai.visma.asgt.v2.type.Example, ai.visma.asgt.v2.type.Example.Builder, ai.visma.asgt.v2.type.ExampleOrBuilder> examplesBuilder_;

    /**
     * <code>repeated .asgt.v2.type.Example examples = 2 [json_name = "examples"];</code>
     */
    public java.util.List<ai.visma.asgt.v2.type.Example> getExamplesList() {
      if (examplesBuilder_ == null) {
        return java.util.Collections.unmodifiableList(examples_);
      } else {
        return examplesBuilder_.getMessageList();
      }
    }
    /**
     * <code>repeated .asgt.v2.type.Example examples = 2 [json_name = "examples"];</code>
     */
    public int getExamplesCount() {
      if (examplesBuilder_ == null) {
        return examples_.size();
      } else {
        return examplesBuilder_.getCount();
      }
    }
    /**
     * <code>repeated .asgt.v2.type.Example examples = 2 [json_name = "examples"];</code>
     */
    public ai.visma.asgt.v2.type.Example getExamples(int index) {
      if (examplesBuilder_ == null) {
        return examples_.get(index);
      } else {
        return examplesBuilder_.getMessage(index);
      }
    }
    /**
     * <code>repeated .asgt.v2.type.Example examples = 2 [json_name = "examples"];</code>
     */
    public Builder setExamples(
        int index, ai.visma.asgt.v2.type.Example value) {
      if (examplesBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureExamplesIsMutable();
        examples_.set(index, value);
        onChanged();
      } else {
        examplesBuilder_.setMessage(index, value);
      }
      return this;
    }
    /**
     * <code>repeated .asgt.v2.type.Example examples = 2 [json_name = "examples"];</code>
     */
    public Builder setExamples(
        int index, ai.visma.asgt.v2.type.Example.Builder builderForValue) {
      if (examplesBuilder_ == null) {
        ensureExamplesIsMutable();
        examples_.set(index, builderForValue.build());
        onChanged();
      } else {
        examplesBuilder_.setMessage(index, builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .asgt.v2.type.Example examples = 2 [json_name = "examples"];</code>
     */
    public Builder addExamples(ai.visma.asgt.v2.type.Example value) {
      if (examplesBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureExamplesIsMutable();
        examples_.add(value);
        onChanged();
      } else {
        examplesBuilder_.addMessage(value);
      }
      return this;
    }
    /**
     * <code>repeated .asgt.v2.type.Example examples = 2 [json_name = "examples"];</code>
     */
    public Builder addExamples(
        int index, ai.visma.asgt.v2.type.Example value) {
      if (examplesBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureExamplesIsMutable();
        examples_.add(index, value);
        onChanged();
      } else {
        examplesBuilder_.addMessage(index, value);
      }
      return this;
    }
    /**
     * <code>repeated .asgt.v2.type.Example examples = 2 [json_name = "examples"];</code>
     */
    public Builder addExamples(
        ai.visma.asgt.v2.type.Example.Builder builderForValue) {
      if (examplesBuilder_ == null) {
        ensureExamplesIsMutable();
        examples_.add(builderForValue.build());
        onChanged();
      } else {
        examplesBuilder_.addMessage(builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .asgt.v2.type.Example examples = 2 [json_name = "examples"];</code>
     */
    public Builder addExamples(
        int index, ai.visma.asgt.v2.type.Example.Builder builderForValue) {
      if (examplesBuilder_ == null) {
        ensureExamplesIsMutable();
        examples_.add(index, builderForValue.build());
        onChanged();
      } else {
        examplesBuilder_.addMessage(index, builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .asgt.v2.type.Example examples = 2 [json_name = "examples"];</code>
     */
    public Builder addAllExamples(
        java.lang.Iterable<? extends ai.visma.asgt.v2.type.Example> values) {
      if (examplesBuilder_ == null) {
        ensureExamplesIsMutable();
        com.google.protobuf.AbstractMessageLite.Builder.addAll(
            values, examples_);
        onChanged();
      } else {
        examplesBuilder_.addAllMessages(values);
      }
      return this;
    }
    /**
     * <code>repeated .asgt.v2.type.Example examples = 2 [json_name = "examples"];</code>
     */
    public Builder clearExamples() {
      if (examplesBuilder_ == null) {
        examples_ = java.util.Collections.emptyList();
        bitField0_ = (bitField0_ & ~0x00000002);
        onChanged();
      } else {
        examplesBuilder_.clear();
      }
      return this;
    }
    /**
     * <code>repeated .asgt.v2.type.Example examples = 2 [json_name = "examples"];</code>
     */
    public Builder removeExamples(int index) {
      if (examplesBuilder_ == null) {
        ensureExamplesIsMutable();
        examples_.remove(index);
        onChanged();
      } else {
        examplesBuilder_.remove(index);
      }
      return this;
    }
    /**
     * <code>repeated .asgt.v2.type.Example examples = 2 [json_name = "examples"];</code>
     */
    public ai.visma.asgt.v2.type.Example.Builder getExamplesBuilder(
        int index) {
      return getExamplesFieldBuilder().getBuilder(index);
    }
    /**
     * <code>repeated .asgt.v2.type.Example examples = 2 [json_name = "examples"];</code>
     */
    public ai.visma.asgt.v2.type.ExampleOrBuilder getExamplesOrBuilder(
        int index) {
      if (examplesBuilder_ == null) {
        return examples_.get(index);  } else {
        return examplesBuilder_.getMessageOrBuilder(index);
      }
    }
    /**
     * <code>repeated .asgt.v2.type.Example examples = 2 [json_name = "examples"];</code>
     */
    public java.util.List<? extends ai.visma.asgt.v2.type.ExampleOrBuilder> 
         getExamplesOrBuilderList() {
      if (examplesBuilder_ != null) {
        return examplesBuilder_.getMessageOrBuilderList();
      } else {
        return java.util.Collections.unmodifiableList(examples_);
      }
    }
    /**
     * <code>repeated .asgt.v2.type.Example examples = 2 [json_name = "examples"];</code>
     */
    public ai.visma.asgt.v2.type.Example.Builder addExamplesBuilder() {
      return getExamplesFieldBuilder().addBuilder(
          ai.visma.asgt.v2.type.Example.getDefaultInstance());
    }
    /**
     * <code>repeated .asgt.v2.type.Example examples = 2 [json_name = "examples"];</code>
     */
    public ai.visma.asgt.v2.type.Example.Builder addExamplesBuilder(
        int index) {
      return getExamplesFieldBuilder().addBuilder(
          index, ai.visma.asgt.v2.type.Example.getDefaultInstance());
    }
    /**
     * <code>repeated .asgt.v2.type.Example examples = 2 [json_name = "examples"];</code>
     */
    public java.util.List<ai.visma.asgt.v2.type.Example.Builder> 
         getExamplesBuilderList() {
      return getExamplesFieldBuilder().getBuilderList();
    }
    private com.google.protobuf.RepeatedFieldBuilderV3<
        ai.visma.asgt.v2.type.Example, ai.visma.asgt.v2.type.Example.Builder, ai.visma.asgt.v2.type.ExampleOrBuilder> 
        getExamplesFieldBuilder() {
      if (examplesBuilder_ == null) {
        examplesBuilder_ = new com.google.protobuf.RepeatedFieldBuilderV3<
            ai.visma.asgt.v2.type.Example, ai.visma.asgt.v2.type.Example.Builder, ai.visma.asgt.v2.type.ExampleOrBuilder>(
                examples_,
                ((bitField0_ & 0x00000002) != 0),
                getParentForChildren(),
                isClean());
        examples_ = null;
      }
      return examplesBuilder_;
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


    // @@protoc_insertion_point(builder_scope:asgt.v2.BatchCreateExampleRequest)
  }

  // @@protoc_insertion_point(class_scope:asgt.v2.BatchCreateExampleRequest)
  private static final ai.visma.asgt.v2.BatchCreateExampleRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new ai.visma.asgt.v2.BatchCreateExampleRequest();
  }

  public static ai.visma.asgt.v2.BatchCreateExampleRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<BatchCreateExampleRequest>
      PARSER = new com.google.protobuf.AbstractParser<BatchCreateExampleRequest>() {
    @java.lang.Override
    public BatchCreateExampleRequest parsePartialFrom(
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

  public static com.google.protobuf.Parser<BatchCreateExampleRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<BatchCreateExampleRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public ai.visma.asgt.v2.BatchCreateExampleRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

