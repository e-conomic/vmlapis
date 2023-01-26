// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: ssn/dataservice/v1/dataservice.proto

package ai.visma.ssn.dataservice.v1;

/**
 * Protobuf type {@code ssn.dataservice.v1.CallsPerMonthResponse}
 */
public final class CallsPerMonthResponse extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:ssn.dataservice.v1.CallsPerMonthResponse)
    CallsPerMonthResponseOrBuilder {
private static final long serialVersionUID = 0L;
  // Use CallsPerMonthResponse.newBuilder() to construct.
  private CallsPerMonthResponse(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private CallsPerMonthResponse() {
    callsPerMonth_ = java.util.Collections.emptyList();
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new CallsPerMonthResponse();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return ai.visma.ssn.dataservice.v1.DataserviceProto.internal_static_ssn_dataservice_v1_CallsPerMonthResponse_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return ai.visma.ssn.dataservice.v1.DataserviceProto.internal_static_ssn_dataservice_v1_CallsPerMonthResponse_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            ai.visma.ssn.dataservice.v1.CallsPerMonthResponse.class, ai.visma.ssn.dataservice.v1.CallsPerMonthResponse.Builder.class);
  }

  public static final int CALLS_PER_MONTH_FIELD_NUMBER = 1;
  @SuppressWarnings("serial")
  private java.util.List<ai.visma.ssn.dataservice.v1.CallsPerMonth> callsPerMonth_;
  /**
   * <code>repeated .ssn.dataservice.v1.CallsPerMonth calls_per_month = 1 [json_name = "callsPerMonth"];</code>
   */
  @java.lang.Override
  public java.util.List<ai.visma.ssn.dataservice.v1.CallsPerMonth> getCallsPerMonthList() {
    return callsPerMonth_;
  }
  /**
   * <code>repeated .ssn.dataservice.v1.CallsPerMonth calls_per_month = 1 [json_name = "callsPerMonth"];</code>
   */
  @java.lang.Override
  public java.util.List<? extends ai.visma.ssn.dataservice.v1.CallsPerMonthOrBuilder> 
      getCallsPerMonthOrBuilderList() {
    return callsPerMonth_;
  }
  /**
   * <code>repeated .ssn.dataservice.v1.CallsPerMonth calls_per_month = 1 [json_name = "callsPerMonth"];</code>
   */
  @java.lang.Override
  public int getCallsPerMonthCount() {
    return callsPerMonth_.size();
  }
  /**
   * <code>repeated .ssn.dataservice.v1.CallsPerMonth calls_per_month = 1 [json_name = "callsPerMonth"];</code>
   */
  @java.lang.Override
  public ai.visma.ssn.dataservice.v1.CallsPerMonth getCallsPerMonth(int index) {
    return callsPerMonth_.get(index);
  }
  /**
   * <code>repeated .ssn.dataservice.v1.CallsPerMonth calls_per_month = 1 [json_name = "callsPerMonth"];</code>
   */
  @java.lang.Override
  public ai.visma.ssn.dataservice.v1.CallsPerMonthOrBuilder getCallsPerMonthOrBuilder(
      int index) {
    return callsPerMonth_.get(index);
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
    for (int i = 0; i < callsPerMonth_.size(); i++) {
      output.writeMessage(1, callsPerMonth_.get(i));
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    for (int i = 0; i < callsPerMonth_.size(); i++) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(1, callsPerMonth_.get(i));
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
    if (!(obj instanceof ai.visma.ssn.dataservice.v1.CallsPerMonthResponse)) {
      return super.equals(obj);
    }
    ai.visma.ssn.dataservice.v1.CallsPerMonthResponse other = (ai.visma.ssn.dataservice.v1.CallsPerMonthResponse) obj;

    if (!getCallsPerMonthList()
        .equals(other.getCallsPerMonthList())) return false;
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
    if (getCallsPerMonthCount() > 0) {
      hash = (37 * hash) + CALLS_PER_MONTH_FIELD_NUMBER;
      hash = (53 * hash) + getCallsPerMonthList().hashCode();
    }
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static ai.visma.ssn.dataservice.v1.CallsPerMonthResponse parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static ai.visma.ssn.dataservice.v1.CallsPerMonthResponse parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static ai.visma.ssn.dataservice.v1.CallsPerMonthResponse parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static ai.visma.ssn.dataservice.v1.CallsPerMonthResponse parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static ai.visma.ssn.dataservice.v1.CallsPerMonthResponse parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static ai.visma.ssn.dataservice.v1.CallsPerMonthResponse parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static ai.visma.ssn.dataservice.v1.CallsPerMonthResponse parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static ai.visma.ssn.dataservice.v1.CallsPerMonthResponse parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static ai.visma.ssn.dataservice.v1.CallsPerMonthResponse parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static ai.visma.ssn.dataservice.v1.CallsPerMonthResponse parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static ai.visma.ssn.dataservice.v1.CallsPerMonthResponse parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static ai.visma.ssn.dataservice.v1.CallsPerMonthResponse parseFrom(
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
  public static Builder newBuilder(ai.visma.ssn.dataservice.v1.CallsPerMonthResponse prototype) {
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
   * Protobuf type {@code ssn.dataservice.v1.CallsPerMonthResponse}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:ssn.dataservice.v1.CallsPerMonthResponse)
      ai.visma.ssn.dataservice.v1.CallsPerMonthResponseOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return ai.visma.ssn.dataservice.v1.DataserviceProto.internal_static_ssn_dataservice_v1_CallsPerMonthResponse_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return ai.visma.ssn.dataservice.v1.DataserviceProto.internal_static_ssn_dataservice_v1_CallsPerMonthResponse_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              ai.visma.ssn.dataservice.v1.CallsPerMonthResponse.class, ai.visma.ssn.dataservice.v1.CallsPerMonthResponse.Builder.class);
    }

    // Construct using ai.visma.ssn.dataservice.v1.CallsPerMonthResponse.newBuilder()
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
      if (callsPerMonthBuilder_ == null) {
        callsPerMonth_ = java.util.Collections.emptyList();
      } else {
        callsPerMonth_ = null;
        callsPerMonthBuilder_.clear();
      }
      bitField0_ = (bitField0_ & ~0x00000001);
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return ai.visma.ssn.dataservice.v1.DataserviceProto.internal_static_ssn_dataservice_v1_CallsPerMonthResponse_descriptor;
    }

    @java.lang.Override
    public ai.visma.ssn.dataservice.v1.CallsPerMonthResponse getDefaultInstanceForType() {
      return ai.visma.ssn.dataservice.v1.CallsPerMonthResponse.getDefaultInstance();
    }

    @java.lang.Override
    public ai.visma.ssn.dataservice.v1.CallsPerMonthResponse build() {
      ai.visma.ssn.dataservice.v1.CallsPerMonthResponse result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public ai.visma.ssn.dataservice.v1.CallsPerMonthResponse buildPartial() {
      ai.visma.ssn.dataservice.v1.CallsPerMonthResponse result = new ai.visma.ssn.dataservice.v1.CallsPerMonthResponse(this);
      buildPartialRepeatedFields(result);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartialRepeatedFields(ai.visma.ssn.dataservice.v1.CallsPerMonthResponse result) {
      if (callsPerMonthBuilder_ == null) {
        if (((bitField0_ & 0x00000001) != 0)) {
          callsPerMonth_ = java.util.Collections.unmodifiableList(callsPerMonth_);
          bitField0_ = (bitField0_ & ~0x00000001);
        }
        result.callsPerMonth_ = callsPerMonth_;
      } else {
        result.callsPerMonth_ = callsPerMonthBuilder_.build();
      }
    }

    private void buildPartial0(ai.visma.ssn.dataservice.v1.CallsPerMonthResponse result) {
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
      if (other instanceof ai.visma.ssn.dataservice.v1.CallsPerMonthResponse) {
        return mergeFrom((ai.visma.ssn.dataservice.v1.CallsPerMonthResponse)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(ai.visma.ssn.dataservice.v1.CallsPerMonthResponse other) {
      if (other == ai.visma.ssn.dataservice.v1.CallsPerMonthResponse.getDefaultInstance()) return this;
      if (callsPerMonthBuilder_ == null) {
        if (!other.callsPerMonth_.isEmpty()) {
          if (callsPerMonth_.isEmpty()) {
            callsPerMonth_ = other.callsPerMonth_;
            bitField0_ = (bitField0_ & ~0x00000001);
          } else {
            ensureCallsPerMonthIsMutable();
            callsPerMonth_.addAll(other.callsPerMonth_);
          }
          onChanged();
        }
      } else {
        if (!other.callsPerMonth_.isEmpty()) {
          if (callsPerMonthBuilder_.isEmpty()) {
            callsPerMonthBuilder_.dispose();
            callsPerMonthBuilder_ = null;
            callsPerMonth_ = other.callsPerMonth_;
            bitField0_ = (bitField0_ & ~0x00000001);
            callsPerMonthBuilder_ = 
              com.google.protobuf.GeneratedMessageV3.alwaysUseFieldBuilders ?
                 getCallsPerMonthFieldBuilder() : null;
          } else {
            callsPerMonthBuilder_.addAllMessages(other.callsPerMonth_);
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
              ai.visma.ssn.dataservice.v1.CallsPerMonth m =
                  input.readMessage(
                      ai.visma.ssn.dataservice.v1.CallsPerMonth.parser(),
                      extensionRegistry);
              if (callsPerMonthBuilder_ == null) {
                ensureCallsPerMonthIsMutable();
                callsPerMonth_.add(m);
              } else {
                callsPerMonthBuilder_.addMessage(m);
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

    private java.util.List<ai.visma.ssn.dataservice.v1.CallsPerMonth> callsPerMonth_ =
      java.util.Collections.emptyList();
    private void ensureCallsPerMonthIsMutable() {
      if (!((bitField0_ & 0x00000001) != 0)) {
        callsPerMonth_ = new java.util.ArrayList<ai.visma.ssn.dataservice.v1.CallsPerMonth>(callsPerMonth_);
        bitField0_ |= 0x00000001;
       }
    }

    private com.google.protobuf.RepeatedFieldBuilderV3<
        ai.visma.ssn.dataservice.v1.CallsPerMonth, ai.visma.ssn.dataservice.v1.CallsPerMonth.Builder, ai.visma.ssn.dataservice.v1.CallsPerMonthOrBuilder> callsPerMonthBuilder_;

    /**
     * <code>repeated .ssn.dataservice.v1.CallsPerMonth calls_per_month = 1 [json_name = "callsPerMonth"];</code>
     */
    public java.util.List<ai.visma.ssn.dataservice.v1.CallsPerMonth> getCallsPerMonthList() {
      if (callsPerMonthBuilder_ == null) {
        return java.util.Collections.unmodifiableList(callsPerMonth_);
      } else {
        return callsPerMonthBuilder_.getMessageList();
      }
    }
    /**
     * <code>repeated .ssn.dataservice.v1.CallsPerMonth calls_per_month = 1 [json_name = "callsPerMonth"];</code>
     */
    public int getCallsPerMonthCount() {
      if (callsPerMonthBuilder_ == null) {
        return callsPerMonth_.size();
      } else {
        return callsPerMonthBuilder_.getCount();
      }
    }
    /**
     * <code>repeated .ssn.dataservice.v1.CallsPerMonth calls_per_month = 1 [json_name = "callsPerMonth"];</code>
     */
    public ai.visma.ssn.dataservice.v1.CallsPerMonth getCallsPerMonth(int index) {
      if (callsPerMonthBuilder_ == null) {
        return callsPerMonth_.get(index);
      } else {
        return callsPerMonthBuilder_.getMessage(index);
      }
    }
    /**
     * <code>repeated .ssn.dataservice.v1.CallsPerMonth calls_per_month = 1 [json_name = "callsPerMonth"];</code>
     */
    public Builder setCallsPerMonth(
        int index, ai.visma.ssn.dataservice.v1.CallsPerMonth value) {
      if (callsPerMonthBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureCallsPerMonthIsMutable();
        callsPerMonth_.set(index, value);
        onChanged();
      } else {
        callsPerMonthBuilder_.setMessage(index, value);
      }
      return this;
    }
    /**
     * <code>repeated .ssn.dataservice.v1.CallsPerMonth calls_per_month = 1 [json_name = "callsPerMonth"];</code>
     */
    public Builder setCallsPerMonth(
        int index, ai.visma.ssn.dataservice.v1.CallsPerMonth.Builder builderForValue) {
      if (callsPerMonthBuilder_ == null) {
        ensureCallsPerMonthIsMutable();
        callsPerMonth_.set(index, builderForValue.build());
        onChanged();
      } else {
        callsPerMonthBuilder_.setMessage(index, builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .ssn.dataservice.v1.CallsPerMonth calls_per_month = 1 [json_name = "callsPerMonth"];</code>
     */
    public Builder addCallsPerMonth(ai.visma.ssn.dataservice.v1.CallsPerMonth value) {
      if (callsPerMonthBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureCallsPerMonthIsMutable();
        callsPerMonth_.add(value);
        onChanged();
      } else {
        callsPerMonthBuilder_.addMessage(value);
      }
      return this;
    }
    /**
     * <code>repeated .ssn.dataservice.v1.CallsPerMonth calls_per_month = 1 [json_name = "callsPerMonth"];</code>
     */
    public Builder addCallsPerMonth(
        int index, ai.visma.ssn.dataservice.v1.CallsPerMonth value) {
      if (callsPerMonthBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureCallsPerMonthIsMutable();
        callsPerMonth_.add(index, value);
        onChanged();
      } else {
        callsPerMonthBuilder_.addMessage(index, value);
      }
      return this;
    }
    /**
     * <code>repeated .ssn.dataservice.v1.CallsPerMonth calls_per_month = 1 [json_name = "callsPerMonth"];</code>
     */
    public Builder addCallsPerMonth(
        ai.visma.ssn.dataservice.v1.CallsPerMonth.Builder builderForValue) {
      if (callsPerMonthBuilder_ == null) {
        ensureCallsPerMonthIsMutable();
        callsPerMonth_.add(builderForValue.build());
        onChanged();
      } else {
        callsPerMonthBuilder_.addMessage(builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .ssn.dataservice.v1.CallsPerMonth calls_per_month = 1 [json_name = "callsPerMonth"];</code>
     */
    public Builder addCallsPerMonth(
        int index, ai.visma.ssn.dataservice.v1.CallsPerMonth.Builder builderForValue) {
      if (callsPerMonthBuilder_ == null) {
        ensureCallsPerMonthIsMutable();
        callsPerMonth_.add(index, builderForValue.build());
        onChanged();
      } else {
        callsPerMonthBuilder_.addMessage(index, builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .ssn.dataservice.v1.CallsPerMonth calls_per_month = 1 [json_name = "callsPerMonth"];</code>
     */
    public Builder addAllCallsPerMonth(
        java.lang.Iterable<? extends ai.visma.ssn.dataservice.v1.CallsPerMonth> values) {
      if (callsPerMonthBuilder_ == null) {
        ensureCallsPerMonthIsMutable();
        com.google.protobuf.AbstractMessageLite.Builder.addAll(
            values, callsPerMonth_);
        onChanged();
      } else {
        callsPerMonthBuilder_.addAllMessages(values);
      }
      return this;
    }
    /**
     * <code>repeated .ssn.dataservice.v1.CallsPerMonth calls_per_month = 1 [json_name = "callsPerMonth"];</code>
     */
    public Builder clearCallsPerMonth() {
      if (callsPerMonthBuilder_ == null) {
        callsPerMonth_ = java.util.Collections.emptyList();
        bitField0_ = (bitField0_ & ~0x00000001);
        onChanged();
      } else {
        callsPerMonthBuilder_.clear();
      }
      return this;
    }
    /**
     * <code>repeated .ssn.dataservice.v1.CallsPerMonth calls_per_month = 1 [json_name = "callsPerMonth"];</code>
     */
    public Builder removeCallsPerMonth(int index) {
      if (callsPerMonthBuilder_ == null) {
        ensureCallsPerMonthIsMutable();
        callsPerMonth_.remove(index);
        onChanged();
      } else {
        callsPerMonthBuilder_.remove(index);
      }
      return this;
    }
    /**
     * <code>repeated .ssn.dataservice.v1.CallsPerMonth calls_per_month = 1 [json_name = "callsPerMonth"];</code>
     */
    public ai.visma.ssn.dataservice.v1.CallsPerMonth.Builder getCallsPerMonthBuilder(
        int index) {
      return getCallsPerMonthFieldBuilder().getBuilder(index);
    }
    /**
     * <code>repeated .ssn.dataservice.v1.CallsPerMonth calls_per_month = 1 [json_name = "callsPerMonth"];</code>
     */
    public ai.visma.ssn.dataservice.v1.CallsPerMonthOrBuilder getCallsPerMonthOrBuilder(
        int index) {
      if (callsPerMonthBuilder_ == null) {
        return callsPerMonth_.get(index);  } else {
        return callsPerMonthBuilder_.getMessageOrBuilder(index);
      }
    }
    /**
     * <code>repeated .ssn.dataservice.v1.CallsPerMonth calls_per_month = 1 [json_name = "callsPerMonth"];</code>
     */
    public java.util.List<? extends ai.visma.ssn.dataservice.v1.CallsPerMonthOrBuilder> 
         getCallsPerMonthOrBuilderList() {
      if (callsPerMonthBuilder_ != null) {
        return callsPerMonthBuilder_.getMessageOrBuilderList();
      } else {
        return java.util.Collections.unmodifiableList(callsPerMonth_);
      }
    }
    /**
     * <code>repeated .ssn.dataservice.v1.CallsPerMonth calls_per_month = 1 [json_name = "callsPerMonth"];</code>
     */
    public ai.visma.ssn.dataservice.v1.CallsPerMonth.Builder addCallsPerMonthBuilder() {
      return getCallsPerMonthFieldBuilder().addBuilder(
          ai.visma.ssn.dataservice.v1.CallsPerMonth.getDefaultInstance());
    }
    /**
     * <code>repeated .ssn.dataservice.v1.CallsPerMonth calls_per_month = 1 [json_name = "callsPerMonth"];</code>
     */
    public ai.visma.ssn.dataservice.v1.CallsPerMonth.Builder addCallsPerMonthBuilder(
        int index) {
      return getCallsPerMonthFieldBuilder().addBuilder(
          index, ai.visma.ssn.dataservice.v1.CallsPerMonth.getDefaultInstance());
    }
    /**
     * <code>repeated .ssn.dataservice.v1.CallsPerMonth calls_per_month = 1 [json_name = "callsPerMonth"];</code>
     */
    public java.util.List<ai.visma.ssn.dataservice.v1.CallsPerMonth.Builder> 
         getCallsPerMonthBuilderList() {
      return getCallsPerMonthFieldBuilder().getBuilderList();
    }
    private com.google.protobuf.RepeatedFieldBuilderV3<
        ai.visma.ssn.dataservice.v1.CallsPerMonth, ai.visma.ssn.dataservice.v1.CallsPerMonth.Builder, ai.visma.ssn.dataservice.v1.CallsPerMonthOrBuilder> 
        getCallsPerMonthFieldBuilder() {
      if (callsPerMonthBuilder_ == null) {
        callsPerMonthBuilder_ = new com.google.protobuf.RepeatedFieldBuilderV3<
            ai.visma.ssn.dataservice.v1.CallsPerMonth, ai.visma.ssn.dataservice.v1.CallsPerMonth.Builder, ai.visma.ssn.dataservice.v1.CallsPerMonthOrBuilder>(
                callsPerMonth_,
                ((bitField0_ & 0x00000001) != 0),
                getParentForChildren(),
                isClean());
        callsPerMonth_ = null;
      }
      return callsPerMonthBuilder_;
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


    // @@protoc_insertion_point(builder_scope:ssn.dataservice.v1.CallsPerMonthResponse)
  }

  // @@protoc_insertion_point(class_scope:ssn.dataservice.v1.CallsPerMonthResponse)
  private static final ai.visma.ssn.dataservice.v1.CallsPerMonthResponse DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new ai.visma.ssn.dataservice.v1.CallsPerMonthResponse();
  }

  public static ai.visma.ssn.dataservice.v1.CallsPerMonthResponse getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<CallsPerMonthResponse>
      PARSER = new com.google.protobuf.AbstractParser<CallsPerMonthResponse>() {
    @java.lang.Override
    public CallsPerMonthResponse parsePartialFrom(
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

  public static com.google.protobuf.Parser<CallsPerMonthResponse> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<CallsPerMonthResponse> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public ai.visma.ssn.dataservice.v1.CallsPerMonthResponse getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

