// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: asgt/v2/suggester_service.proto

package ai.visma.asgt.v2;

/**
 * Protobuf type {@code asgt.v2.BatchSuggestResponse}
 */
public final class BatchSuggestResponse extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:asgt.v2.BatchSuggestResponse)
    BatchSuggestResponseOrBuilder {
private static final long serialVersionUID = 0L;
  // Use BatchSuggestResponse.newBuilder() to construct.
  private BatchSuggestResponse(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private BatchSuggestResponse() {
    predictions_ = java.util.Collections.emptyList();
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new BatchSuggestResponse();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return ai.visma.asgt.v2.SuggesterServiceProto.internal_static_asgt_v2_BatchSuggestResponse_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return ai.visma.asgt.v2.SuggesterServiceProto.internal_static_asgt_v2_BatchSuggestResponse_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            ai.visma.asgt.v2.BatchSuggestResponse.class, ai.visma.asgt.v2.BatchSuggestResponse.Builder.class);
  }

  public static final int PREDICTIONS_FIELD_NUMBER = 1;
  @SuppressWarnings("serial")
  private java.util.List<ai.visma.asgt.type.Prediction> predictions_;
  /**
   * <code>repeated .asgt.type.Prediction predictions = 1 [json_name = "predictions"];</code>
   */
  @java.lang.Override
  public java.util.List<ai.visma.asgt.type.Prediction> getPredictionsList() {
    return predictions_;
  }
  /**
   * <code>repeated .asgt.type.Prediction predictions = 1 [json_name = "predictions"];</code>
   */
  @java.lang.Override
  public java.util.List<? extends ai.visma.asgt.type.PredictionOrBuilder> 
      getPredictionsOrBuilderList() {
    return predictions_;
  }
  /**
   * <code>repeated .asgt.type.Prediction predictions = 1 [json_name = "predictions"];</code>
   */
  @java.lang.Override
  public int getPredictionsCount() {
    return predictions_.size();
  }
  /**
   * <code>repeated .asgt.type.Prediction predictions = 1 [json_name = "predictions"];</code>
   */
  @java.lang.Override
  public ai.visma.asgt.type.Prediction getPredictions(int index) {
    return predictions_.get(index);
  }
  /**
   * <code>repeated .asgt.type.Prediction predictions = 1 [json_name = "predictions"];</code>
   */
  @java.lang.Override
  public ai.visma.asgt.type.PredictionOrBuilder getPredictionsOrBuilder(
      int index) {
    return predictions_.get(index);
  }

  public static final int MODEL_FIELD_NUMBER = 2;
  private ai.visma.asgt.type.Model model_;
  /**
   * <code>.asgt.type.Model model = 2 [json_name = "model"];</code>
   * @return Whether the model field is set.
   */
  @java.lang.Override
  public boolean hasModel() {
    return model_ != null;
  }
  /**
   * <code>.asgt.type.Model model = 2 [json_name = "model"];</code>
   * @return The model.
   */
  @java.lang.Override
  public ai.visma.asgt.type.Model getModel() {
    return model_ == null ? ai.visma.asgt.type.Model.getDefaultInstance() : model_;
  }
  /**
   * <code>.asgt.type.Model model = 2 [json_name = "model"];</code>
   */
  @java.lang.Override
  public ai.visma.asgt.type.ModelOrBuilder getModelOrBuilder() {
    return model_ == null ? ai.visma.asgt.type.Model.getDefaultInstance() : model_;
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
    for (int i = 0; i < predictions_.size(); i++) {
      output.writeMessage(1, predictions_.get(i));
    }
    if (model_ != null) {
      output.writeMessage(2, getModel());
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    for (int i = 0; i < predictions_.size(); i++) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(1, predictions_.get(i));
    }
    if (model_ != null) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(2, getModel());
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
    if (!(obj instanceof ai.visma.asgt.v2.BatchSuggestResponse)) {
      return super.equals(obj);
    }
    ai.visma.asgt.v2.BatchSuggestResponse other = (ai.visma.asgt.v2.BatchSuggestResponse) obj;

    if (!getPredictionsList()
        .equals(other.getPredictionsList())) return false;
    if (hasModel() != other.hasModel()) return false;
    if (hasModel()) {
      if (!getModel()
          .equals(other.getModel())) return false;
    }
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
    if (getPredictionsCount() > 0) {
      hash = (37 * hash) + PREDICTIONS_FIELD_NUMBER;
      hash = (53 * hash) + getPredictionsList().hashCode();
    }
    if (hasModel()) {
      hash = (37 * hash) + MODEL_FIELD_NUMBER;
      hash = (53 * hash) + getModel().hashCode();
    }
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static ai.visma.asgt.v2.BatchSuggestResponse parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static ai.visma.asgt.v2.BatchSuggestResponse parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static ai.visma.asgt.v2.BatchSuggestResponse parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static ai.visma.asgt.v2.BatchSuggestResponse parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static ai.visma.asgt.v2.BatchSuggestResponse parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static ai.visma.asgt.v2.BatchSuggestResponse parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static ai.visma.asgt.v2.BatchSuggestResponse parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static ai.visma.asgt.v2.BatchSuggestResponse parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static ai.visma.asgt.v2.BatchSuggestResponse parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static ai.visma.asgt.v2.BatchSuggestResponse parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static ai.visma.asgt.v2.BatchSuggestResponse parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static ai.visma.asgt.v2.BatchSuggestResponse parseFrom(
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
  public static Builder newBuilder(ai.visma.asgt.v2.BatchSuggestResponse prototype) {
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
   * Protobuf type {@code asgt.v2.BatchSuggestResponse}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:asgt.v2.BatchSuggestResponse)
      ai.visma.asgt.v2.BatchSuggestResponseOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return ai.visma.asgt.v2.SuggesterServiceProto.internal_static_asgt_v2_BatchSuggestResponse_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return ai.visma.asgt.v2.SuggesterServiceProto.internal_static_asgt_v2_BatchSuggestResponse_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              ai.visma.asgt.v2.BatchSuggestResponse.class, ai.visma.asgt.v2.BatchSuggestResponse.Builder.class);
    }

    // Construct using ai.visma.asgt.v2.BatchSuggestResponse.newBuilder()
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
      if (predictionsBuilder_ == null) {
        predictions_ = java.util.Collections.emptyList();
      } else {
        predictions_ = null;
        predictionsBuilder_.clear();
      }
      bitField0_ = (bitField0_ & ~0x00000001);
      model_ = null;
      if (modelBuilder_ != null) {
        modelBuilder_.dispose();
        modelBuilder_ = null;
      }
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return ai.visma.asgt.v2.SuggesterServiceProto.internal_static_asgt_v2_BatchSuggestResponse_descriptor;
    }

    @java.lang.Override
    public ai.visma.asgt.v2.BatchSuggestResponse getDefaultInstanceForType() {
      return ai.visma.asgt.v2.BatchSuggestResponse.getDefaultInstance();
    }

    @java.lang.Override
    public ai.visma.asgt.v2.BatchSuggestResponse build() {
      ai.visma.asgt.v2.BatchSuggestResponse result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public ai.visma.asgt.v2.BatchSuggestResponse buildPartial() {
      ai.visma.asgt.v2.BatchSuggestResponse result = new ai.visma.asgt.v2.BatchSuggestResponse(this);
      buildPartialRepeatedFields(result);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartialRepeatedFields(ai.visma.asgt.v2.BatchSuggestResponse result) {
      if (predictionsBuilder_ == null) {
        if (((bitField0_ & 0x00000001) != 0)) {
          predictions_ = java.util.Collections.unmodifiableList(predictions_);
          bitField0_ = (bitField0_ & ~0x00000001);
        }
        result.predictions_ = predictions_;
      } else {
        result.predictions_ = predictionsBuilder_.build();
      }
    }

    private void buildPartial0(ai.visma.asgt.v2.BatchSuggestResponse result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000002) != 0)) {
        result.model_ = modelBuilder_ == null
            ? model_
            : modelBuilder_.build();
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
      if (other instanceof ai.visma.asgt.v2.BatchSuggestResponse) {
        return mergeFrom((ai.visma.asgt.v2.BatchSuggestResponse)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(ai.visma.asgt.v2.BatchSuggestResponse other) {
      if (other == ai.visma.asgt.v2.BatchSuggestResponse.getDefaultInstance()) return this;
      if (predictionsBuilder_ == null) {
        if (!other.predictions_.isEmpty()) {
          if (predictions_.isEmpty()) {
            predictions_ = other.predictions_;
            bitField0_ = (bitField0_ & ~0x00000001);
          } else {
            ensurePredictionsIsMutable();
            predictions_.addAll(other.predictions_);
          }
          onChanged();
        }
      } else {
        if (!other.predictions_.isEmpty()) {
          if (predictionsBuilder_.isEmpty()) {
            predictionsBuilder_.dispose();
            predictionsBuilder_ = null;
            predictions_ = other.predictions_;
            bitField0_ = (bitField0_ & ~0x00000001);
            predictionsBuilder_ = 
              com.google.protobuf.GeneratedMessageV3.alwaysUseFieldBuilders ?
                 getPredictionsFieldBuilder() : null;
          } else {
            predictionsBuilder_.addAllMessages(other.predictions_);
          }
        }
      }
      if (other.hasModel()) {
        mergeModel(other.getModel());
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
              ai.visma.asgt.type.Prediction m =
                  input.readMessage(
                      ai.visma.asgt.type.Prediction.parser(),
                      extensionRegistry);
              if (predictionsBuilder_ == null) {
                ensurePredictionsIsMutable();
                predictions_.add(m);
              } else {
                predictionsBuilder_.addMessage(m);
              }
              break;
            } // case 10
            case 18: {
              input.readMessage(
                  getModelFieldBuilder().getBuilder(),
                  extensionRegistry);
              bitField0_ |= 0x00000002;
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

    private java.util.List<ai.visma.asgt.type.Prediction> predictions_ =
      java.util.Collections.emptyList();
    private void ensurePredictionsIsMutable() {
      if (!((bitField0_ & 0x00000001) != 0)) {
        predictions_ = new java.util.ArrayList<ai.visma.asgt.type.Prediction>(predictions_);
        bitField0_ |= 0x00000001;
       }
    }

    private com.google.protobuf.RepeatedFieldBuilderV3<
        ai.visma.asgt.type.Prediction, ai.visma.asgt.type.Prediction.Builder, ai.visma.asgt.type.PredictionOrBuilder> predictionsBuilder_;

    /**
     * <code>repeated .asgt.type.Prediction predictions = 1 [json_name = "predictions"];</code>
     */
    public java.util.List<ai.visma.asgt.type.Prediction> getPredictionsList() {
      if (predictionsBuilder_ == null) {
        return java.util.Collections.unmodifiableList(predictions_);
      } else {
        return predictionsBuilder_.getMessageList();
      }
    }
    /**
     * <code>repeated .asgt.type.Prediction predictions = 1 [json_name = "predictions"];</code>
     */
    public int getPredictionsCount() {
      if (predictionsBuilder_ == null) {
        return predictions_.size();
      } else {
        return predictionsBuilder_.getCount();
      }
    }
    /**
     * <code>repeated .asgt.type.Prediction predictions = 1 [json_name = "predictions"];</code>
     */
    public ai.visma.asgt.type.Prediction getPredictions(int index) {
      if (predictionsBuilder_ == null) {
        return predictions_.get(index);
      } else {
        return predictionsBuilder_.getMessage(index);
      }
    }
    /**
     * <code>repeated .asgt.type.Prediction predictions = 1 [json_name = "predictions"];</code>
     */
    public Builder setPredictions(
        int index, ai.visma.asgt.type.Prediction value) {
      if (predictionsBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensurePredictionsIsMutable();
        predictions_.set(index, value);
        onChanged();
      } else {
        predictionsBuilder_.setMessage(index, value);
      }
      return this;
    }
    /**
     * <code>repeated .asgt.type.Prediction predictions = 1 [json_name = "predictions"];</code>
     */
    public Builder setPredictions(
        int index, ai.visma.asgt.type.Prediction.Builder builderForValue) {
      if (predictionsBuilder_ == null) {
        ensurePredictionsIsMutable();
        predictions_.set(index, builderForValue.build());
        onChanged();
      } else {
        predictionsBuilder_.setMessage(index, builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .asgt.type.Prediction predictions = 1 [json_name = "predictions"];</code>
     */
    public Builder addPredictions(ai.visma.asgt.type.Prediction value) {
      if (predictionsBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensurePredictionsIsMutable();
        predictions_.add(value);
        onChanged();
      } else {
        predictionsBuilder_.addMessage(value);
      }
      return this;
    }
    /**
     * <code>repeated .asgt.type.Prediction predictions = 1 [json_name = "predictions"];</code>
     */
    public Builder addPredictions(
        int index, ai.visma.asgt.type.Prediction value) {
      if (predictionsBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensurePredictionsIsMutable();
        predictions_.add(index, value);
        onChanged();
      } else {
        predictionsBuilder_.addMessage(index, value);
      }
      return this;
    }
    /**
     * <code>repeated .asgt.type.Prediction predictions = 1 [json_name = "predictions"];</code>
     */
    public Builder addPredictions(
        ai.visma.asgt.type.Prediction.Builder builderForValue) {
      if (predictionsBuilder_ == null) {
        ensurePredictionsIsMutable();
        predictions_.add(builderForValue.build());
        onChanged();
      } else {
        predictionsBuilder_.addMessage(builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .asgt.type.Prediction predictions = 1 [json_name = "predictions"];</code>
     */
    public Builder addPredictions(
        int index, ai.visma.asgt.type.Prediction.Builder builderForValue) {
      if (predictionsBuilder_ == null) {
        ensurePredictionsIsMutable();
        predictions_.add(index, builderForValue.build());
        onChanged();
      } else {
        predictionsBuilder_.addMessage(index, builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .asgt.type.Prediction predictions = 1 [json_name = "predictions"];</code>
     */
    public Builder addAllPredictions(
        java.lang.Iterable<? extends ai.visma.asgt.type.Prediction> values) {
      if (predictionsBuilder_ == null) {
        ensurePredictionsIsMutable();
        com.google.protobuf.AbstractMessageLite.Builder.addAll(
            values, predictions_);
        onChanged();
      } else {
        predictionsBuilder_.addAllMessages(values);
      }
      return this;
    }
    /**
     * <code>repeated .asgt.type.Prediction predictions = 1 [json_name = "predictions"];</code>
     */
    public Builder clearPredictions() {
      if (predictionsBuilder_ == null) {
        predictions_ = java.util.Collections.emptyList();
        bitField0_ = (bitField0_ & ~0x00000001);
        onChanged();
      } else {
        predictionsBuilder_.clear();
      }
      return this;
    }
    /**
     * <code>repeated .asgt.type.Prediction predictions = 1 [json_name = "predictions"];</code>
     */
    public Builder removePredictions(int index) {
      if (predictionsBuilder_ == null) {
        ensurePredictionsIsMutable();
        predictions_.remove(index);
        onChanged();
      } else {
        predictionsBuilder_.remove(index);
      }
      return this;
    }
    /**
     * <code>repeated .asgt.type.Prediction predictions = 1 [json_name = "predictions"];</code>
     */
    public ai.visma.asgt.type.Prediction.Builder getPredictionsBuilder(
        int index) {
      return getPredictionsFieldBuilder().getBuilder(index);
    }
    /**
     * <code>repeated .asgt.type.Prediction predictions = 1 [json_name = "predictions"];</code>
     */
    public ai.visma.asgt.type.PredictionOrBuilder getPredictionsOrBuilder(
        int index) {
      if (predictionsBuilder_ == null) {
        return predictions_.get(index);  } else {
        return predictionsBuilder_.getMessageOrBuilder(index);
      }
    }
    /**
     * <code>repeated .asgt.type.Prediction predictions = 1 [json_name = "predictions"];</code>
     */
    public java.util.List<? extends ai.visma.asgt.type.PredictionOrBuilder> 
         getPredictionsOrBuilderList() {
      if (predictionsBuilder_ != null) {
        return predictionsBuilder_.getMessageOrBuilderList();
      } else {
        return java.util.Collections.unmodifiableList(predictions_);
      }
    }
    /**
     * <code>repeated .asgt.type.Prediction predictions = 1 [json_name = "predictions"];</code>
     */
    public ai.visma.asgt.type.Prediction.Builder addPredictionsBuilder() {
      return getPredictionsFieldBuilder().addBuilder(
          ai.visma.asgt.type.Prediction.getDefaultInstance());
    }
    /**
     * <code>repeated .asgt.type.Prediction predictions = 1 [json_name = "predictions"];</code>
     */
    public ai.visma.asgt.type.Prediction.Builder addPredictionsBuilder(
        int index) {
      return getPredictionsFieldBuilder().addBuilder(
          index, ai.visma.asgt.type.Prediction.getDefaultInstance());
    }
    /**
     * <code>repeated .asgt.type.Prediction predictions = 1 [json_name = "predictions"];</code>
     */
    public java.util.List<ai.visma.asgt.type.Prediction.Builder> 
         getPredictionsBuilderList() {
      return getPredictionsFieldBuilder().getBuilderList();
    }
    private com.google.protobuf.RepeatedFieldBuilderV3<
        ai.visma.asgt.type.Prediction, ai.visma.asgt.type.Prediction.Builder, ai.visma.asgt.type.PredictionOrBuilder> 
        getPredictionsFieldBuilder() {
      if (predictionsBuilder_ == null) {
        predictionsBuilder_ = new com.google.protobuf.RepeatedFieldBuilderV3<
            ai.visma.asgt.type.Prediction, ai.visma.asgt.type.Prediction.Builder, ai.visma.asgt.type.PredictionOrBuilder>(
                predictions_,
                ((bitField0_ & 0x00000001) != 0),
                getParentForChildren(),
                isClean());
        predictions_ = null;
      }
      return predictionsBuilder_;
    }

    private ai.visma.asgt.type.Model model_;
    private com.google.protobuf.SingleFieldBuilderV3<
        ai.visma.asgt.type.Model, ai.visma.asgt.type.Model.Builder, ai.visma.asgt.type.ModelOrBuilder> modelBuilder_;
    /**
     * <code>.asgt.type.Model model = 2 [json_name = "model"];</code>
     * @return Whether the model field is set.
     */
    public boolean hasModel() {
      return ((bitField0_ & 0x00000002) != 0);
    }
    /**
     * <code>.asgt.type.Model model = 2 [json_name = "model"];</code>
     * @return The model.
     */
    public ai.visma.asgt.type.Model getModel() {
      if (modelBuilder_ == null) {
        return model_ == null ? ai.visma.asgt.type.Model.getDefaultInstance() : model_;
      } else {
        return modelBuilder_.getMessage();
      }
    }
    /**
     * <code>.asgt.type.Model model = 2 [json_name = "model"];</code>
     */
    public Builder setModel(ai.visma.asgt.type.Model value) {
      if (modelBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        model_ = value;
      } else {
        modelBuilder_.setMessage(value);
      }
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>.asgt.type.Model model = 2 [json_name = "model"];</code>
     */
    public Builder setModel(
        ai.visma.asgt.type.Model.Builder builderForValue) {
      if (modelBuilder_ == null) {
        model_ = builderForValue.build();
      } else {
        modelBuilder_.setMessage(builderForValue.build());
      }
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>.asgt.type.Model model = 2 [json_name = "model"];</code>
     */
    public Builder mergeModel(ai.visma.asgt.type.Model value) {
      if (modelBuilder_ == null) {
        if (((bitField0_ & 0x00000002) != 0) &&
          model_ != null &&
          model_ != ai.visma.asgt.type.Model.getDefaultInstance()) {
          getModelBuilder().mergeFrom(value);
        } else {
          model_ = value;
        }
      } else {
        modelBuilder_.mergeFrom(value);
      }
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>.asgt.type.Model model = 2 [json_name = "model"];</code>
     */
    public Builder clearModel() {
      bitField0_ = (bitField0_ & ~0x00000002);
      model_ = null;
      if (modelBuilder_ != null) {
        modelBuilder_.dispose();
        modelBuilder_ = null;
      }
      onChanged();
      return this;
    }
    /**
     * <code>.asgt.type.Model model = 2 [json_name = "model"];</code>
     */
    public ai.visma.asgt.type.Model.Builder getModelBuilder() {
      bitField0_ |= 0x00000002;
      onChanged();
      return getModelFieldBuilder().getBuilder();
    }
    /**
     * <code>.asgt.type.Model model = 2 [json_name = "model"];</code>
     */
    public ai.visma.asgt.type.ModelOrBuilder getModelOrBuilder() {
      if (modelBuilder_ != null) {
        return modelBuilder_.getMessageOrBuilder();
      } else {
        return model_ == null ?
            ai.visma.asgt.type.Model.getDefaultInstance() : model_;
      }
    }
    /**
     * <code>.asgt.type.Model model = 2 [json_name = "model"];</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        ai.visma.asgt.type.Model, ai.visma.asgt.type.Model.Builder, ai.visma.asgt.type.ModelOrBuilder> 
        getModelFieldBuilder() {
      if (modelBuilder_ == null) {
        modelBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            ai.visma.asgt.type.Model, ai.visma.asgt.type.Model.Builder, ai.visma.asgt.type.ModelOrBuilder>(
                getModel(),
                getParentForChildren(),
                isClean());
        model_ = null;
      }
      return modelBuilder_;
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


    // @@protoc_insertion_point(builder_scope:asgt.v2.BatchSuggestResponse)
  }

  // @@protoc_insertion_point(class_scope:asgt.v2.BatchSuggestResponse)
  private static final ai.visma.asgt.v2.BatchSuggestResponse DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new ai.visma.asgt.v2.BatchSuggestResponse();
  }

  public static ai.visma.asgt.v2.BatchSuggestResponse getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<BatchSuggestResponse>
      PARSER = new com.google.protobuf.AbstractParser<BatchSuggestResponse>() {
    @java.lang.Override
    public BatchSuggestResponse parsePartialFrom(
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

  public static com.google.protobuf.Parser<BatchSuggestResponse> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<BatchSuggestResponse> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public ai.visma.asgt.v2.BatchSuggestResponse getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

