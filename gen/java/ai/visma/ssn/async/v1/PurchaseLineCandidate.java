// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: ssn/async/v1/async.proto

package ai.visma.ssn.async.v1;

/**
 * <pre>
 * Wrappers for repeated PurchaseLineCandidate
 * </pre>
 *
 * Protobuf type {@code ssn.async.v1.PurchaseLineCandidate}
 */
public final class PurchaseLineCandidate extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:ssn.async.v1.PurchaseLineCandidate)
    PurchaseLineCandidateOrBuilder {
private static final long serialVersionUID = 0L;
  // Use PurchaseLineCandidate.newBuilder() to construct.
  private PurchaseLineCandidate(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private PurchaseLineCandidate() {
    purchaseLineCandidate_ = java.util.Collections.emptyList();
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new PurchaseLineCandidate();
  }

  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return ai.visma.ssn.async.v1.AsyncProto.internal_static_ssn_async_v1_PurchaseLineCandidate_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return ai.visma.ssn.async.v1.AsyncProto.internal_static_ssn_async_v1_PurchaseLineCandidate_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            ai.visma.ssn.async.v1.PurchaseLineCandidate.class, ai.visma.ssn.async.v1.PurchaseLineCandidate.Builder.class);
  }

  public static final int PURCHASE_LINE_CANDIDATE_FIELD_NUMBER = 1;
  @SuppressWarnings("serial")
  private java.util.List<ai.visma.ssn.type.PurchaseLineCandidate> purchaseLineCandidate_;
  /**
   * <code>repeated .ssn.type.PurchaseLineCandidate purchase_line_candidate = 1 [json_name = "purchaseLineCandidate"];</code>
   */
  @java.lang.Override
  public java.util.List<ai.visma.ssn.type.PurchaseLineCandidate> getPurchaseLineCandidateList() {
    return purchaseLineCandidate_;
  }
  /**
   * <code>repeated .ssn.type.PurchaseLineCandidate purchase_line_candidate = 1 [json_name = "purchaseLineCandidate"];</code>
   */
  @java.lang.Override
  public java.util.List<? extends ai.visma.ssn.type.PurchaseLineCandidateOrBuilder> 
      getPurchaseLineCandidateOrBuilderList() {
    return purchaseLineCandidate_;
  }
  /**
   * <code>repeated .ssn.type.PurchaseLineCandidate purchase_line_candidate = 1 [json_name = "purchaseLineCandidate"];</code>
   */
  @java.lang.Override
  public int getPurchaseLineCandidateCount() {
    return purchaseLineCandidate_.size();
  }
  /**
   * <code>repeated .ssn.type.PurchaseLineCandidate purchase_line_candidate = 1 [json_name = "purchaseLineCandidate"];</code>
   */
  @java.lang.Override
  public ai.visma.ssn.type.PurchaseLineCandidate getPurchaseLineCandidate(int index) {
    return purchaseLineCandidate_.get(index);
  }
  /**
   * <code>repeated .ssn.type.PurchaseLineCandidate purchase_line_candidate = 1 [json_name = "purchaseLineCandidate"];</code>
   */
  @java.lang.Override
  public ai.visma.ssn.type.PurchaseLineCandidateOrBuilder getPurchaseLineCandidateOrBuilder(
      int index) {
    return purchaseLineCandidate_.get(index);
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
    for (int i = 0; i < purchaseLineCandidate_.size(); i++) {
      output.writeMessage(1, purchaseLineCandidate_.get(i));
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    for (int i = 0; i < purchaseLineCandidate_.size(); i++) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(1, purchaseLineCandidate_.get(i));
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
    if (!(obj instanceof ai.visma.ssn.async.v1.PurchaseLineCandidate)) {
      return super.equals(obj);
    }
    ai.visma.ssn.async.v1.PurchaseLineCandidate other = (ai.visma.ssn.async.v1.PurchaseLineCandidate) obj;

    if (!getPurchaseLineCandidateList()
        .equals(other.getPurchaseLineCandidateList())) return false;
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
    if (getPurchaseLineCandidateCount() > 0) {
      hash = (37 * hash) + PURCHASE_LINE_CANDIDATE_FIELD_NUMBER;
      hash = (53 * hash) + getPurchaseLineCandidateList().hashCode();
    }
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static ai.visma.ssn.async.v1.PurchaseLineCandidate parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static ai.visma.ssn.async.v1.PurchaseLineCandidate parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static ai.visma.ssn.async.v1.PurchaseLineCandidate parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static ai.visma.ssn.async.v1.PurchaseLineCandidate parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static ai.visma.ssn.async.v1.PurchaseLineCandidate parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static ai.visma.ssn.async.v1.PurchaseLineCandidate parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static ai.visma.ssn.async.v1.PurchaseLineCandidate parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static ai.visma.ssn.async.v1.PurchaseLineCandidate parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  public static ai.visma.ssn.async.v1.PurchaseLineCandidate parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }

  public static ai.visma.ssn.async.v1.PurchaseLineCandidate parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static ai.visma.ssn.async.v1.PurchaseLineCandidate parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static ai.visma.ssn.async.v1.PurchaseLineCandidate parseFrom(
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
  public static Builder newBuilder(ai.visma.ssn.async.v1.PurchaseLineCandidate prototype) {
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
   * <pre>
   * Wrappers for repeated PurchaseLineCandidate
   * </pre>
   *
   * Protobuf type {@code ssn.async.v1.PurchaseLineCandidate}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:ssn.async.v1.PurchaseLineCandidate)
      ai.visma.ssn.async.v1.PurchaseLineCandidateOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return ai.visma.ssn.async.v1.AsyncProto.internal_static_ssn_async_v1_PurchaseLineCandidate_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return ai.visma.ssn.async.v1.AsyncProto.internal_static_ssn_async_v1_PurchaseLineCandidate_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              ai.visma.ssn.async.v1.PurchaseLineCandidate.class, ai.visma.ssn.async.v1.PurchaseLineCandidate.Builder.class);
    }

    // Construct using ai.visma.ssn.async.v1.PurchaseLineCandidate.newBuilder()
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
      if (purchaseLineCandidateBuilder_ == null) {
        purchaseLineCandidate_ = java.util.Collections.emptyList();
      } else {
        purchaseLineCandidate_ = null;
        purchaseLineCandidateBuilder_.clear();
      }
      bitField0_ = (bitField0_ & ~0x00000001);
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return ai.visma.ssn.async.v1.AsyncProto.internal_static_ssn_async_v1_PurchaseLineCandidate_descriptor;
    }

    @java.lang.Override
    public ai.visma.ssn.async.v1.PurchaseLineCandidate getDefaultInstanceForType() {
      return ai.visma.ssn.async.v1.PurchaseLineCandidate.getDefaultInstance();
    }

    @java.lang.Override
    public ai.visma.ssn.async.v1.PurchaseLineCandidate build() {
      ai.visma.ssn.async.v1.PurchaseLineCandidate result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public ai.visma.ssn.async.v1.PurchaseLineCandidate buildPartial() {
      ai.visma.ssn.async.v1.PurchaseLineCandidate result = new ai.visma.ssn.async.v1.PurchaseLineCandidate(this);
      buildPartialRepeatedFields(result);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartialRepeatedFields(ai.visma.ssn.async.v1.PurchaseLineCandidate result) {
      if (purchaseLineCandidateBuilder_ == null) {
        if (((bitField0_ & 0x00000001) != 0)) {
          purchaseLineCandidate_ = java.util.Collections.unmodifiableList(purchaseLineCandidate_);
          bitField0_ = (bitField0_ & ~0x00000001);
        }
        result.purchaseLineCandidate_ = purchaseLineCandidate_;
      } else {
        result.purchaseLineCandidate_ = purchaseLineCandidateBuilder_.build();
      }
    }

    private void buildPartial0(ai.visma.ssn.async.v1.PurchaseLineCandidate result) {
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
      if (other instanceof ai.visma.ssn.async.v1.PurchaseLineCandidate) {
        return mergeFrom((ai.visma.ssn.async.v1.PurchaseLineCandidate)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(ai.visma.ssn.async.v1.PurchaseLineCandidate other) {
      if (other == ai.visma.ssn.async.v1.PurchaseLineCandidate.getDefaultInstance()) return this;
      if (purchaseLineCandidateBuilder_ == null) {
        if (!other.purchaseLineCandidate_.isEmpty()) {
          if (purchaseLineCandidate_.isEmpty()) {
            purchaseLineCandidate_ = other.purchaseLineCandidate_;
            bitField0_ = (bitField0_ & ~0x00000001);
          } else {
            ensurePurchaseLineCandidateIsMutable();
            purchaseLineCandidate_.addAll(other.purchaseLineCandidate_);
          }
          onChanged();
        }
      } else {
        if (!other.purchaseLineCandidate_.isEmpty()) {
          if (purchaseLineCandidateBuilder_.isEmpty()) {
            purchaseLineCandidateBuilder_.dispose();
            purchaseLineCandidateBuilder_ = null;
            purchaseLineCandidate_ = other.purchaseLineCandidate_;
            bitField0_ = (bitField0_ & ~0x00000001);
            purchaseLineCandidateBuilder_ = 
              com.google.protobuf.GeneratedMessageV3.alwaysUseFieldBuilders ?
                 getPurchaseLineCandidateFieldBuilder() : null;
          } else {
            purchaseLineCandidateBuilder_.addAllMessages(other.purchaseLineCandidate_);
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
              ai.visma.ssn.type.PurchaseLineCandidate m =
                  input.readMessage(
                      ai.visma.ssn.type.PurchaseLineCandidate.parser(),
                      extensionRegistry);
              if (purchaseLineCandidateBuilder_ == null) {
                ensurePurchaseLineCandidateIsMutable();
                purchaseLineCandidate_.add(m);
              } else {
                purchaseLineCandidateBuilder_.addMessage(m);
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

    private java.util.List<ai.visma.ssn.type.PurchaseLineCandidate> purchaseLineCandidate_ =
      java.util.Collections.emptyList();
    private void ensurePurchaseLineCandidateIsMutable() {
      if (!((bitField0_ & 0x00000001) != 0)) {
        purchaseLineCandidate_ = new java.util.ArrayList<ai.visma.ssn.type.PurchaseLineCandidate>(purchaseLineCandidate_);
        bitField0_ |= 0x00000001;
       }
    }

    private com.google.protobuf.RepeatedFieldBuilderV3<
        ai.visma.ssn.type.PurchaseLineCandidate, ai.visma.ssn.type.PurchaseLineCandidate.Builder, ai.visma.ssn.type.PurchaseLineCandidateOrBuilder> purchaseLineCandidateBuilder_;

    /**
     * <code>repeated .ssn.type.PurchaseLineCandidate purchase_line_candidate = 1 [json_name = "purchaseLineCandidate"];</code>
     */
    public java.util.List<ai.visma.ssn.type.PurchaseLineCandidate> getPurchaseLineCandidateList() {
      if (purchaseLineCandidateBuilder_ == null) {
        return java.util.Collections.unmodifiableList(purchaseLineCandidate_);
      } else {
        return purchaseLineCandidateBuilder_.getMessageList();
      }
    }
    /**
     * <code>repeated .ssn.type.PurchaseLineCandidate purchase_line_candidate = 1 [json_name = "purchaseLineCandidate"];</code>
     */
    public int getPurchaseLineCandidateCount() {
      if (purchaseLineCandidateBuilder_ == null) {
        return purchaseLineCandidate_.size();
      } else {
        return purchaseLineCandidateBuilder_.getCount();
      }
    }
    /**
     * <code>repeated .ssn.type.PurchaseLineCandidate purchase_line_candidate = 1 [json_name = "purchaseLineCandidate"];</code>
     */
    public ai.visma.ssn.type.PurchaseLineCandidate getPurchaseLineCandidate(int index) {
      if (purchaseLineCandidateBuilder_ == null) {
        return purchaseLineCandidate_.get(index);
      } else {
        return purchaseLineCandidateBuilder_.getMessage(index);
      }
    }
    /**
     * <code>repeated .ssn.type.PurchaseLineCandidate purchase_line_candidate = 1 [json_name = "purchaseLineCandidate"];</code>
     */
    public Builder setPurchaseLineCandidate(
        int index, ai.visma.ssn.type.PurchaseLineCandidate value) {
      if (purchaseLineCandidateBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensurePurchaseLineCandidateIsMutable();
        purchaseLineCandidate_.set(index, value);
        onChanged();
      } else {
        purchaseLineCandidateBuilder_.setMessage(index, value);
      }
      return this;
    }
    /**
     * <code>repeated .ssn.type.PurchaseLineCandidate purchase_line_candidate = 1 [json_name = "purchaseLineCandidate"];</code>
     */
    public Builder setPurchaseLineCandidate(
        int index, ai.visma.ssn.type.PurchaseLineCandidate.Builder builderForValue) {
      if (purchaseLineCandidateBuilder_ == null) {
        ensurePurchaseLineCandidateIsMutable();
        purchaseLineCandidate_.set(index, builderForValue.build());
        onChanged();
      } else {
        purchaseLineCandidateBuilder_.setMessage(index, builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .ssn.type.PurchaseLineCandidate purchase_line_candidate = 1 [json_name = "purchaseLineCandidate"];</code>
     */
    public Builder addPurchaseLineCandidate(ai.visma.ssn.type.PurchaseLineCandidate value) {
      if (purchaseLineCandidateBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensurePurchaseLineCandidateIsMutable();
        purchaseLineCandidate_.add(value);
        onChanged();
      } else {
        purchaseLineCandidateBuilder_.addMessage(value);
      }
      return this;
    }
    /**
     * <code>repeated .ssn.type.PurchaseLineCandidate purchase_line_candidate = 1 [json_name = "purchaseLineCandidate"];</code>
     */
    public Builder addPurchaseLineCandidate(
        int index, ai.visma.ssn.type.PurchaseLineCandidate value) {
      if (purchaseLineCandidateBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensurePurchaseLineCandidateIsMutable();
        purchaseLineCandidate_.add(index, value);
        onChanged();
      } else {
        purchaseLineCandidateBuilder_.addMessage(index, value);
      }
      return this;
    }
    /**
     * <code>repeated .ssn.type.PurchaseLineCandidate purchase_line_candidate = 1 [json_name = "purchaseLineCandidate"];</code>
     */
    public Builder addPurchaseLineCandidate(
        ai.visma.ssn.type.PurchaseLineCandidate.Builder builderForValue) {
      if (purchaseLineCandidateBuilder_ == null) {
        ensurePurchaseLineCandidateIsMutable();
        purchaseLineCandidate_.add(builderForValue.build());
        onChanged();
      } else {
        purchaseLineCandidateBuilder_.addMessage(builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .ssn.type.PurchaseLineCandidate purchase_line_candidate = 1 [json_name = "purchaseLineCandidate"];</code>
     */
    public Builder addPurchaseLineCandidate(
        int index, ai.visma.ssn.type.PurchaseLineCandidate.Builder builderForValue) {
      if (purchaseLineCandidateBuilder_ == null) {
        ensurePurchaseLineCandidateIsMutable();
        purchaseLineCandidate_.add(index, builderForValue.build());
        onChanged();
      } else {
        purchaseLineCandidateBuilder_.addMessage(index, builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .ssn.type.PurchaseLineCandidate purchase_line_candidate = 1 [json_name = "purchaseLineCandidate"];</code>
     */
    public Builder addAllPurchaseLineCandidate(
        java.lang.Iterable<? extends ai.visma.ssn.type.PurchaseLineCandidate> values) {
      if (purchaseLineCandidateBuilder_ == null) {
        ensurePurchaseLineCandidateIsMutable();
        com.google.protobuf.AbstractMessageLite.Builder.addAll(
            values, purchaseLineCandidate_);
        onChanged();
      } else {
        purchaseLineCandidateBuilder_.addAllMessages(values);
      }
      return this;
    }
    /**
     * <code>repeated .ssn.type.PurchaseLineCandidate purchase_line_candidate = 1 [json_name = "purchaseLineCandidate"];</code>
     */
    public Builder clearPurchaseLineCandidate() {
      if (purchaseLineCandidateBuilder_ == null) {
        purchaseLineCandidate_ = java.util.Collections.emptyList();
        bitField0_ = (bitField0_ & ~0x00000001);
        onChanged();
      } else {
        purchaseLineCandidateBuilder_.clear();
      }
      return this;
    }
    /**
     * <code>repeated .ssn.type.PurchaseLineCandidate purchase_line_candidate = 1 [json_name = "purchaseLineCandidate"];</code>
     */
    public Builder removePurchaseLineCandidate(int index) {
      if (purchaseLineCandidateBuilder_ == null) {
        ensurePurchaseLineCandidateIsMutable();
        purchaseLineCandidate_.remove(index);
        onChanged();
      } else {
        purchaseLineCandidateBuilder_.remove(index);
      }
      return this;
    }
    /**
     * <code>repeated .ssn.type.PurchaseLineCandidate purchase_line_candidate = 1 [json_name = "purchaseLineCandidate"];</code>
     */
    public ai.visma.ssn.type.PurchaseLineCandidate.Builder getPurchaseLineCandidateBuilder(
        int index) {
      return getPurchaseLineCandidateFieldBuilder().getBuilder(index);
    }
    /**
     * <code>repeated .ssn.type.PurchaseLineCandidate purchase_line_candidate = 1 [json_name = "purchaseLineCandidate"];</code>
     */
    public ai.visma.ssn.type.PurchaseLineCandidateOrBuilder getPurchaseLineCandidateOrBuilder(
        int index) {
      if (purchaseLineCandidateBuilder_ == null) {
        return purchaseLineCandidate_.get(index);  } else {
        return purchaseLineCandidateBuilder_.getMessageOrBuilder(index);
      }
    }
    /**
     * <code>repeated .ssn.type.PurchaseLineCandidate purchase_line_candidate = 1 [json_name = "purchaseLineCandidate"];</code>
     */
    public java.util.List<? extends ai.visma.ssn.type.PurchaseLineCandidateOrBuilder> 
         getPurchaseLineCandidateOrBuilderList() {
      if (purchaseLineCandidateBuilder_ != null) {
        return purchaseLineCandidateBuilder_.getMessageOrBuilderList();
      } else {
        return java.util.Collections.unmodifiableList(purchaseLineCandidate_);
      }
    }
    /**
     * <code>repeated .ssn.type.PurchaseLineCandidate purchase_line_candidate = 1 [json_name = "purchaseLineCandidate"];</code>
     */
    public ai.visma.ssn.type.PurchaseLineCandidate.Builder addPurchaseLineCandidateBuilder() {
      return getPurchaseLineCandidateFieldBuilder().addBuilder(
          ai.visma.ssn.type.PurchaseLineCandidate.getDefaultInstance());
    }
    /**
     * <code>repeated .ssn.type.PurchaseLineCandidate purchase_line_candidate = 1 [json_name = "purchaseLineCandidate"];</code>
     */
    public ai.visma.ssn.type.PurchaseLineCandidate.Builder addPurchaseLineCandidateBuilder(
        int index) {
      return getPurchaseLineCandidateFieldBuilder().addBuilder(
          index, ai.visma.ssn.type.PurchaseLineCandidate.getDefaultInstance());
    }
    /**
     * <code>repeated .ssn.type.PurchaseLineCandidate purchase_line_candidate = 1 [json_name = "purchaseLineCandidate"];</code>
     */
    public java.util.List<ai.visma.ssn.type.PurchaseLineCandidate.Builder> 
         getPurchaseLineCandidateBuilderList() {
      return getPurchaseLineCandidateFieldBuilder().getBuilderList();
    }
    private com.google.protobuf.RepeatedFieldBuilderV3<
        ai.visma.ssn.type.PurchaseLineCandidate, ai.visma.ssn.type.PurchaseLineCandidate.Builder, ai.visma.ssn.type.PurchaseLineCandidateOrBuilder> 
        getPurchaseLineCandidateFieldBuilder() {
      if (purchaseLineCandidateBuilder_ == null) {
        purchaseLineCandidateBuilder_ = new com.google.protobuf.RepeatedFieldBuilderV3<
            ai.visma.ssn.type.PurchaseLineCandidate, ai.visma.ssn.type.PurchaseLineCandidate.Builder, ai.visma.ssn.type.PurchaseLineCandidateOrBuilder>(
                purchaseLineCandidate_,
                ((bitField0_ & 0x00000001) != 0),
                getParentForChildren(),
                isClean());
        purchaseLineCandidate_ = null;
      }
      return purchaseLineCandidateBuilder_;
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


    // @@protoc_insertion_point(builder_scope:ssn.async.v1.PurchaseLineCandidate)
  }

  // @@protoc_insertion_point(class_scope:ssn.async.v1.PurchaseLineCandidate)
  private static final ai.visma.ssn.async.v1.PurchaseLineCandidate DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new ai.visma.ssn.async.v1.PurchaseLineCandidate();
  }

  public static ai.visma.ssn.async.v1.PurchaseLineCandidate getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<PurchaseLineCandidate>
      PARSER = new com.google.protobuf.AbstractParser<PurchaseLineCandidate>() {
    @java.lang.Override
    public PurchaseLineCandidate parsePartialFrom(
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

  public static com.google.protobuf.Parser<PurchaseLineCandidate> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<PurchaseLineCandidate> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public ai.visma.ssn.async.v1.PurchaseLineCandidate getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

