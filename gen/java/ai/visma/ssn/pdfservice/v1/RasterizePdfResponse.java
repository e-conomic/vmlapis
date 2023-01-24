// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: ssn/pdfservice/v1/pdfservice.proto

package ai.visma.ssn.pdfservice.v1;

/**
 * Protobuf type {@code ssn.pdfservice.v1.RasterizePdfResponse}
 */
public final class RasterizePdfResponse extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:ssn.pdfservice.v1.RasterizePdfResponse)
    RasterizePdfResponseOrBuilder {
private static final long serialVersionUID = 0L;
  // Use RasterizePdfResponse.newBuilder() to construct.
  private RasterizePdfResponse(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private RasterizePdfResponse() {
    data_ = com.google.protobuf.ByteString.EMPTY;
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new RasterizePdfResponse();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return ai.visma.ssn.pdfservice.v1.PdfserviceProto.internal_static_ssn_pdfservice_v1_RasterizePdfResponse_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return ai.visma.ssn.pdfservice.v1.PdfserviceProto.internal_static_ssn_pdfservice_v1_RasterizePdfResponse_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            ai.visma.ssn.pdfservice.v1.RasterizePdfResponse.class, ai.visma.ssn.pdfservice.v1.RasterizePdfResponse.Builder.class);
  }

  public static final int INDEX_FIELD_NUMBER = 1;
  private int index_ = 0;
  /**
   * <code>uint32 index = 1 [json_name = "index"];</code>
   * @return The index.
   */
  @java.lang.Override
  public int getIndex() {
    return index_;
  }

  public static final int DATA_FIELD_NUMBER = 2;
  private com.google.protobuf.ByteString data_ = com.google.protobuf.ByteString.EMPTY;
  /**
   * <code>bytes data = 2 [json_name = "data"];</code>
   * @return The data.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString getData() {
    return data_;
  }

  public static final int WIDTH_FIELD_NUMBER = 3;
  private int width_ = 0;
  /**
   * <code>uint32 width = 3 [json_name = "width"];</code>
   * @return The width.
   */
  @java.lang.Override
  public int getWidth() {
    return width_;
  }

  public static final int HEIGHT_FIELD_NUMBER = 4;
  private int height_ = 0;
  /**
   * <code>uint32 height = 4 [json_name = "height"];</code>
   * @return The height.
   */
  @java.lang.Override
  public int getHeight() {
    return height_;
  }

  public static final int SCALE_FIELD_NUMBER = 5;
  private double scale_ = 0D;
  /**
   * <pre>
   * Compared to a 72 dpi page
   * </pre>
   *
   * <code>double scale = 5 [json_name = "scale"];</code>
   * @return The scale.
   */
  @java.lang.Override
  public double getScale() {
    return scale_;
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
    if (index_ != 0) {
      output.writeUInt32(1, index_);
    }
    if (!data_.isEmpty()) {
      output.writeBytes(2, data_);
    }
    if (width_ != 0) {
      output.writeUInt32(3, width_);
    }
    if (height_ != 0) {
      output.writeUInt32(4, height_);
    }
    if (java.lang.Double.doubleToRawLongBits(scale_) != 0) {
      output.writeDouble(5, scale_);
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (index_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeUInt32Size(1, index_);
    }
    if (!data_.isEmpty()) {
      size += com.google.protobuf.CodedOutputStream
        .computeBytesSize(2, data_);
    }
    if (width_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeUInt32Size(3, width_);
    }
    if (height_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeUInt32Size(4, height_);
    }
    if (java.lang.Double.doubleToRawLongBits(scale_) != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeDoubleSize(5, scale_);
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
    if (!(obj instanceof ai.visma.ssn.pdfservice.v1.RasterizePdfResponse)) {
      return super.equals(obj);
    }
    ai.visma.ssn.pdfservice.v1.RasterizePdfResponse other = (ai.visma.ssn.pdfservice.v1.RasterizePdfResponse) obj;

    if (getIndex()
        != other.getIndex()) return false;
    if (!getData()
        .equals(other.getData())) return false;
    if (getWidth()
        != other.getWidth()) return false;
    if (getHeight()
        != other.getHeight()) return false;
    if (java.lang.Double.doubleToLongBits(getScale())
        != java.lang.Double.doubleToLongBits(
            other.getScale())) return false;
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
    hash = (37 * hash) + INDEX_FIELD_NUMBER;
    hash = (53 * hash) + getIndex();
    hash = (37 * hash) + DATA_FIELD_NUMBER;
    hash = (53 * hash) + getData().hashCode();
    hash = (37 * hash) + WIDTH_FIELD_NUMBER;
    hash = (53 * hash) + getWidth();
    hash = (37 * hash) + HEIGHT_FIELD_NUMBER;
    hash = (53 * hash) + getHeight();
    hash = (37 * hash) + SCALE_FIELD_NUMBER;
    hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
        java.lang.Double.doubleToLongBits(getScale()));
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static ai.visma.ssn.pdfservice.v1.RasterizePdfResponse parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static ai.visma.ssn.pdfservice.v1.RasterizePdfResponse parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static ai.visma.ssn.pdfservice.v1.RasterizePdfResponse parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static ai.visma.ssn.pdfservice.v1.RasterizePdfResponse parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static ai.visma.ssn.pdfservice.v1.RasterizePdfResponse parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static ai.visma.ssn.pdfservice.v1.RasterizePdfResponse parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static ai.visma.ssn.pdfservice.v1.RasterizePdfResponse parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static ai.visma.ssn.pdfservice.v1.RasterizePdfResponse parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static ai.visma.ssn.pdfservice.v1.RasterizePdfResponse parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static ai.visma.ssn.pdfservice.v1.RasterizePdfResponse parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static ai.visma.ssn.pdfservice.v1.RasterizePdfResponse parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static ai.visma.ssn.pdfservice.v1.RasterizePdfResponse parseFrom(
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
  public static Builder newBuilder(ai.visma.ssn.pdfservice.v1.RasterizePdfResponse prototype) {
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
   * Protobuf type {@code ssn.pdfservice.v1.RasterizePdfResponse}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:ssn.pdfservice.v1.RasterizePdfResponse)
      ai.visma.ssn.pdfservice.v1.RasterizePdfResponseOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return ai.visma.ssn.pdfservice.v1.PdfserviceProto.internal_static_ssn_pdfservice_v1_RasterizePdfResponse_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return ai.visma.ssn.pdfservice.v1.PdfserviceProto.internal_static_ssn_pdfservice_v1_RasterizePdfResponse_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              ai.visma.ssn.pdfservice.v1.RasterizePdfResponse.class, ai.visma.ssn.pdfservice.v1.RasterizePdfResponse.Builder.class);
    }

    // Construct using ai.visma.ssn.pdfservice.v1.RasterizePdfResponse.newBuilder()
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
      index_ = 0;
      data_ = com.google.protobuf.ByteString.EMPTY;
      width_ = 0;
      height_ = 0;
      scale_ = 0D;
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return ai.visma.ssn.pdfservice.v1.PdfserviceProto.internal_static_ssn_pdfservice_v1_RasterizePdfResponse_descriptor;
    }

    @java.lang.Override
    public ai.visma.ssn.pdfservice.v1.RasterizePdfResponse getDefaultInstanceForType() {
      return ai.visma.ssn.pdfservice.v1.RasterizePdfResponse.getDefaultInstance();
    }

    @java.lang.Override
    public ai.visma.ssn.pdfservice.v1.RasterizePdfResponse build() {
      ai.visma.ssn.pdfservice.v1.RasterizePdfResponse result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public ai.visma.ssn.pdfservice.v1.RasterizePdfResponse buildPartial() {
      ai.visma.ssn.pdfservice.v1.RasterizePdfResponse result = new ai.visma.ssn.pdfservice.v1.RasterizePdfResponse(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(ai.visma.ssn.pdfservice.v1.RasterizePdfResponse result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.index_ = index_;
      }
      if (((from_bitField0_ & 0x00000002) != 0)) {
        result.data_ = data_;
      }
      if (((from_bitField0_ & 0x00000004) != 0)) {
        result.width_ = width_;
      }
      if (((from_bitField0_ & 0x00000008) != 0)) {
        result.height_ = height_;
      }
      if (((from_bitField0_ & 0x00000010) != 0)) {
        result.scale_ = scale_;
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
      if (other instanceof ai.visma.ssn.pdfservice.v1.RasterizePdfResponse) {
        return mergeFrom((ai.visma.ssn.pdfservice.v1.RasterizePdfResponse)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(ai.visma.ssn.pdfservice.v1.RasterizePdfResponse other) {
      if (other == ai.visma.ssn.pdfservice.v1.RasterizePdfResponse.getDefaultInstance()) return this;
      if (other.getIndex() != 0) {
        setIndex(other.getIndex());
      }
      if (other.getData() != com.google.protobuf.ByteString.EMPTY) {
        setData(other.getData());
      }
      if (other.getWidth() != 0) {
        setWidth(other.getWidth());
      }
      if (other.getHeight() != 0) {
        setHeight(other.getHeight());
      }
      if (other.getScale() != 0D) {
        setScale(other.getScale());
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
              index_ = input.readUInt32();
              bitField0_ |= 0x00000001;
              break;
            } // case 8
            case 18: {
              data_ = input.readBytes();
              bitField0_ |= 0x00000002;
              break;
            } // case 18
            case 24: {
              width_ = input.readUInt32();
              bitField0_ |= 0x00000004;
              break;
            } // case 24
            case 32: {
              height_ = input.readUInt32();
              bitField0_ |= 0x00000008;
              break;
            } // case 32
            case 41: {
              scale_ = input.readDouble();
              bitField0_ |= 0x00000010;
              break;
            } // case 41
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

    private int index_ ;
    /**
     * <code>uint32 index = 1 [json_name = "index"];</code>
     * @return The index.
     */
    @java.lang.Override
    public int getIndex() {
      return index_;
    }
    /**
     * <code>uint32 index = 1 [json_name = "index"];</code>
     * @param value The index to set.
     * @return This builder for chaining.
     */
    public Builder setIndex(int value) {
      
      index_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>uint32 index = 1 [json_name = "index"];</code>
     * @return This builder for chaining.
     */
    public Builder clearIndex() {
      bitField0_ = (bitField0_ & ~0x00000001);
      index_ = 0;
      onChanged();
      return this;
    }

    private com.google.protobuf.ByteString data_ = com.google.protobuf.ByteString.EMPTY;
    /**
     * <code>bytes data = 2 [json_name = "data"];</code>
     * @return The data.
     */
    @java.lang.Override
    public com.google.protobuf.ByteString getData() {
      return data_;
    }
    /**
     * <code>bytes data = 2 [json_name = "data"];</code>
     * @param value The data to set.
     * @return This builder for chaining.
     */
    public Builder setData(com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      data_ = value;
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>bytes data = 2 [json_name = "data"];</code>
     * @return This builder for chaining.
     */
    public Builder clearData() {
      bitField0_ = (bitField0_ & ~0x00000002);
      data_ = getDefaultInstance().getData();
      onChanged();
      return this;
    }

    private int width_ ;
    /**
     * <code>uint32 width = 3 [json_name = "width"];</code>
     * @return The width.
     */
    @java.lang.Override
    public int getWidth() {
      return width_;
    }
    /**
     * <code>uint32 width = 3 [json_name = "width"];</code>
     * @param value The width to set.
     * @return This builder for chaining.
     */
    public Builder setWidth(int value) {
      
      width_ = value;
      bitField0_ |= 0x00000004;
      onChanged();
      return this;
    }
    /**
     * <code>uint32 width = 3 [json_name = "width"];</code>
     * @return This builder for chaining.
     */
    public Builder clearWidth() {
      bitField0_ = (bitField0_ & ~0x00000004);
      width_ = 0;
      onChanged();
      return this;
    }

    private int height_ ;
    /**
     * <code>uint32 height = 4 [json_name = "height"];</code>
     * @return The height.
     */
    @java.lang.Override
    public int getHeight() {
      return height_;
    }
    /**
     * <code>uint32 height = 4 [json_name = "height"];</code>
     * @param value The height to set.
     * @return This builder for chaining.
     */
    public Builder setHeight(int value) {
      
      height_ = value;
      bitField0_ |= 0x00000008;
      onChanged();
      return this;
    }
    /**
     * <code>uint32 height = 4 [json_name = "height"];</code>
     * @return This builder for chaining.
     */
    public Builder clearHeight() {
      bitField0_ = (bitField0_ & ~0x00000008);
      height_ = 0;
      onChanged();
      return this;
    }

    private double scale_ ;
    /**
     * <pre>
     * Compared to a 72 dpi page
     * </pre>
     *
     * <code>double scale = 5 [json_name = "scale"];</code>
     * @return The scale.
     */
    @java.lang.Override
    public double getScale() {
      return scale_;
    }
    /**
     * <pre>
     * Compared to a 72 dpi page
     * </pre>
     *
     * <code>double scale = 5 [json_name = "scale"];</code>
     * @param value The scale to set.
     * @return This builder for chaining.
     */
    public Builder setScale(double value) {
      
      scale_ = value;
      bitField0_ |= 0x00000010;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * Compared to a 72 dpi page
     * </pre>
     *
     * <code>double scale = 5 [json_name = "scale"];</code>
     * @return This builder for chaining.
     */
    public Builder clearScale() {
      bitField0_ = (bitField0_ & ~0x00000010);
      scale_ = 0D;
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


    // @@protoc_insertion_point(builder_scope:ssn.pdfservice.v1.RasterizePdfResponse)
  }

  // @@protoc_insertion_point(class_scope:ssn.pdfservice.v1.RasterizePdfResponse)
  private static final ai.visma.ssn.pdfservice.v1.RasterizePdfResponse DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new ai.visma.ssn.pdfservice.v1.RasterizePdfResponse();
  }

  public static ai.visma.ssn.pdfservice.v1.RasterizePdfResponse getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<RasterizePdfResponse>
      PARSER = new com.google.protobuf.AbstractParser<RasterizePdfResponse>() {
    @java.lang.Override
    public RasterizePdfResponse parsePartialFrom(
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

  public static com.google.protobuf.Parser<RasterizePdfResponse> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<RasterizePdfResponse> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public ai.visma.ssn.pdfservice.v1.RasterizePdfResponse getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}
