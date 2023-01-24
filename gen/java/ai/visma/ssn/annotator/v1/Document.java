// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: ssn/annotator/v1/annotator.proto

package ai.visma.ssn.annotator.v1;

/**
 * Protobuf type {@code ssn.annotator.v1.Document}
 */
public final class Document extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:ssn.annotator.v1.Document)
    DocumentOrBuilder {
private static final long serialVersionUID = 0L;
  // Use Document.newBuilder() to construct.
  private Document(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private Document() {
    content_ = com.google.protobuf.ByteString.EMPTY;
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new Document();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return ai.visma.ssn.annotator.v1.AnnotatorProto.internal_static_ssn_annotator_v1_Document_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return ai.visma.ssn.annotator.v1.AnnotatorProto.internal_static_ssn_annotator_v1_Document_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            ai.visma.ssn.annotator.v1.Document.class, ai.visma.ssn.annotator.v1.Document.Builder.class);
  }

  public static final int CONTENT_FIELD_NUMBER = 1;
  private com.google.protobuf.ByteString content_ = com.google.protobuf.ByteString.EMPTY;
  /**
   * <pre>
   * Document content, represented as a stream of bytes.
   * Note: As with all `bytes` fields, protobuffers use a pure binary
   * representation, whereas JSON representations use base64.
   * </pre>
   *
   * <code>bytes content = 1 [json_name = "content"];</code>
   * @return The content.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString getContent() {
    return content_;
  }

  public static final int SOURCE_FIELD_NUMBER = 2;
  private ai.visma.ssn.annotator.v1.DocumentSource source_;
  /**
   * <pre>
   * Google Cloud Storage image location, or publicly-accessible image
   * URL. If both `content` and `source` are provided for a document, `content`
   * takes precedence and is used to perform the scan request.
   * </pre>
   *
   * <code>.ssn.annotator.v1.DocumentSource source = 2 [json_name = "source"];</code>
   * @return Whether the source field is set.
   */
  @java.lang.Override
  public boolean hasSource() {
    return source_ != null;
  }
  /**
   * <pre>
   * Google Cloud Storage image location, or publicly-accessible image
   * URL. If both `content` and `source` are provided for a document, `content`
   * takes precedence and is used to perform the scan request.
   * </pre>
   *
   * <code>.ssn.annotator.v1.DocumentSource source = 2 [json_name = "source"];</code>
   * @return The source.
   */
  @java.lang.Override
  public ai.visma.ssn.annotator.v1.DocumentSource getSource() {
    return source_ == null ? ai.visma.ssn.annotator.v1.DocumentSource.getDefaultInstance() : source_;
  }
  /**
   * <pre>
   * Google Cloud Storage image location, or publicly-accessible image
   * URL. If both `content` and `source` are provided for a document, `content`
   * takes precedence and is used to perform the scan request.
   * </pre>
   *
   * <code>.ssn.annotator.v1.DocumentSource source = 2 [json_name = "source"];</code>
   */
  @java.lang.Override
  public ai.visma.ssn.annotator.v1.DocumentSourceOrBuilder getSourceOrBuilder() {
    return source_ == null ? ai.visma.ssn.annotator.v1.DocumentSource.getDefaultInstance() : source_;
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
    if (!content_.isEmpty()) {
      output.writeBytes(1, content_);
    }
    if (source_ != null) {
      output.writeMessage(2, getSource());
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!content_.isEmpty()) {
      size += com.google.protobuf.CodedOutputStream
        .computeBytesSize(1, content_);
    }
    if (source_ != null) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(2, getSource());
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
    if (!(obj instanceof ai.visma.ssn.annotator.v1.Document)) {
      return super.equals(obj);
    }
    ai.visma.ssn.annotator.v1.Document other = (ai.visma.ssn.annotator.v1.Document) obj;

    if (!getContent()
        .equals(other.getContent())) return false;
    if (hasSource() != other.hasSource()) return false;
    if (hasSource()) {
      if (!getSource()
          .equals(other.getSource())) return false;
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
    hash = (37 * hash) + CONTENT_FIELD_NUMBER;
    hash = (53 * hash) + getContent().hashCode();
    if (hasSource()) {
      hash = (37 * hash) + SOURCE_FIELD_NUMBER;
      hash = (53 * hash) + getSource().hashCode();
    }
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static ai.visma.ssn.annotator.v1.Document parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static ai.visma.ssn.annotator.v1.Document parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static ai.visma.ssn.annotator.v1.Document parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static ai.visma.ssn.annotator.v1.Document parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static ai.visma.ssn.annotator.v1.Document parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static ai.visma.ssn.annotator.v1.Document parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static ai.visma.ssn.annotator.v1.Document parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static ai.visma.ssn.annotator.v1.Document parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static ai.visma.ssn.annotator.v1.Document parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static ai.visma.ssn.annotator.v1.Document parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static ai.visma.ssn.annotator.v1.Document parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static ai.visma.ssn.annotator.v1.Document parseFrom(
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
  public static Builder newBuilder(ai.visma.ssn.annotator.v1.Document prototype) {
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
   * Protobuf type {@code ssn.annotator.v1.Document}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:ssn.annotator.v1.Document)
      ai.visma.ssn.annotator.v1.DocumentOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return ai.visma.ssn.annotator.v1.AnnotatorProto.internal_static_ssn_annotator_v1_Document_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return ai.visma.ssn.annotator.v1.AnnotatorProto.internal_static_ssn_annotator_v1_Document_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              ai.visma.ssn.annotator.v1.Document.class, ai.visma.ssn.annotator.v1.Document.Builder.class);
    }

    // Construct using ai.visma.ssn.annotator.v1.Document.newBuilder()
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
      content_ = com.google.protobuf.ByteString.EMPTY;
      source_ = null;
      if (sourceBuilder_ != null) {
        sourceBuilder_.dispose();
        sourceBuilder_ = null;
      }
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return ai.visma.ssn.annotator.v1.AnnotatorProto.internal_static_ssn_annotator_v1_Document_descriptor;
    }

    @java.lang.Override
    public ai.visma.ssn.annotator.v1.Document getDefaultInstanceForType() {
      return ai.visma.ssn.annotator.v1.Document.getDefaultInstance();
    }

    @java.lang.Override
    public ai.visma.ssn.annotator.v1.Document build() {
      ai.visma.ssn.annotator.v1.Document result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public ai.visma.ssn.annotator.v1.Document buildPartial() {
      ai.visma.ssn.annotator.v1.Document result = new ai.visma.ssn.annotator.v1.Document(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(ai.visma.ssn.annotator.v1.Document result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.content_ = content_;
      }
      if (((from_bitField0_ & 0x00000002) != 0)) {
        result.source_ = sourceBuilder_ == null
            ? source_
            : sourceBuilder_.build();
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
      if (other instanceof ai.visma.ssn.annotator.v1.Document) {
        return mergeFrom((ai.visma.ssn.annotator.v1.Document)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(ai.visma.ssn.annotator.v1.Document other) {
      if (other == ai.visma.ssn.annotator.v1.Document.getDefaultInstance()) return this;
      if (other.getContent() != com.google.protobuf.ByteString.EMPTY) {
        setContent(other.getContent());
      }
      if (other.hasSource()) {
        mergeSource(other.getSource());
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
              content_ = input.readBytes();
              bitField0_ |= 0x00000001;
              break;
            } // case 10
            case 18: {
              input.readMessage(
                  getSourceFieldBuilder().getBuilder(),
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

    private com.google.protobuf.ByteString content_ = com.google.protobuf.ByteString.EMPTY;
    /**
     * <pre>
     * Document content, represented as a stream of bytes.
     * Note: As with all `bytes` fields, protobuffers use a pure binary
     * representation, whereas JSON representations use base64.
     * </pre>
     *
     * <code>bytes content = 1 [json_name = "content"];</code>
     * @return The content.
     */
    @java.lang.Override
    public com.google.protobuf.ByteString getContent() {
      return content_;
    }
    /**
     * <pre>
     * Document content, represented as a stream of bytes.
     * Note: As with all `bytes` fields, protobuffers use a pure binary
     * representation, whereas JSON representations use base64.
     * </pre>
     *
     * <code>bytes content = 1 [json_name = "content"];</code>
     * @param value The content to set.
     * @return This builder for chaining.
     */
    public Builder setContent(com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      content_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * Document content, represented as a stream of bytes.
     * Note: As with all `bytes` fields, protobuffers use a pure binary
     * representation, whereas JSON representations use base64.
     * </pre>
     *
     * <code>bytes content = 1 [json_name = "content"];</code>
     * @return This builder for chaining.
     */
    public Builder clearContent() {
      bitField0_ = (bitField0_ & ~0x00000001);
      content_ = getDefaultInstance().getContent();
      onChanged();
      return this;
    }

    private ai.visma.ssn.annotator.v1.DocumentSource source_;
    private com.google.protobuf.SingleFieldBuilderV3<
        ai.visma.ssn.annotator.v1.DocumentSource, ai.visma.ssn.annotator.v1.DocumentSource.Builder, ai.visma.ssn.annotator.v1.DocumentSourceOrBuilder> sourceBuilder_;
    /**
     * <pre>
     * Google Cloud Storage image location, or publicly-accessible image
     * URL. If both `content` and `source` are provided for a document, `content`
     * takes precedence and is used to perform the scan request.
     * </pre>
     *
     * <code>.ssn.annotator.v1.DocumentSource source = 2 [json_name = "source"];</code>
     * @return Whether the source field is set.
     */
    public boolean hasSource() {
      return ((bitField0_ & 0x00000002) != 0);
    }
    /**
     * <pre>
     * Google Cloud Storage image location, or publicly-accessible image
     * URL. If both `content` and `source` are provided for a document, `content`
     * takes precedence and is used to perform the scan request.
     * </pre>
     *
     * <code>.ssn.annotator.v1.DocumentSource source = 2 [json_name = "source"];</code>
     * @return The source.
     */
    public ai.visma.ssn.annotator.v1.DocumentSource getSource() {
      if (sourceBuilder_ == null) {
        return source_ == null ? ai.visma.ssn.annotator.v1.DocumentSource.getDefaultInstance() : source_;
      } else {
        return sourceBuilder_.getMessage();
      }
    }
    /**
     * <pre>
     * Google Cloud Storage image location, or publicly-accessible image
     * URL. If both `content` and `source` are provided for a document, `content`
     * takes precedence and is used to perform the scan request.
     * </pre>
     *
     * <code>.ssn.annotator.v1.DocumentSource source = 2 [json_name = "source"];</code>
     */
    public Builder setSource(ai.visma.ssn.annotator.v1.DocumentSource value) {
      if (sourceBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        source_ = value;
      } else {
        sourceBuilder_.setMessage(value);
      }
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * Google Cloud Storage image location, or publicly-accessible image
     * URL. If both `content` and `source` are provided for a document, `content`
     * takes precedence and is used to perform the scan request.
     * </pre>
     *
     * <code>.ssn.annotator.v1.DocumentSource source = 2 [json_name = "source"];</code>
     */
    public Builder setSource(
        ai.visma.ssn.annotator.v1.DocumentSource.Builder builderForValue) {
      if (sourceBuilder_ == null) {
        source_ = builderForValue.build();
      } else {
        sourceBuilder_.setMessage(builderForValue.build());
      }
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * Google Cloud Storage image location, or publicly-accessible image
     * URL. If both `content` and `source` are provided for a document, `content`
     * takes precedence and is used to perform the scan request.
     * </pre>
     *
     * <code>.ssn.annotator.v1.DocumentSource source = 2 [json_name = "source"];</code>
     */
    public Builder mergeSource(ai.visma.ssn.annotator.v1.DocumentSource value) {
      if (sourceBuilder_ == null) {
        if (((bitField0_ & 0x00000002) != 0) &&
          source_ != null &&
          source_ != ai.visma.ssn.annotator.v1.DocumentSource.getDefaultInstance()) {
          getSourceBuilder().mergeFrom(value);
        } else {
          source_ = value;
        }
      } else {
        sourceBuilder_.mergeFrom(value);
      }
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * Google Cloud Storage image location, or publicly-accessible image
     * URL. If both `content` and `source` are provided for a document, `content`
     * takes precedence and is used to perform the scan request.
     * </pre>
     *
     * <code>.ssn.annotator.v1.DocumentSource source = 2 [json_name = "source"];</code>
     */
    public Builder clearSource() {
      bitField0_ = (bitField0_ & ~0x00000002);
      source_ = null;
      if (sourceBuilder_ != null) {
        sourceBuilder_.dispose();
        sourceBuilder_ = null;
      }
      onChanged();
      return this;
    }
    /**
     * <pre>
     * Google Cloud Storage image location, or publicly-accessible image
     * URL. If both `content` and `source` are provided for a document, `content`
     * takes precedence and is used to perform the scan request.
     * </pre>
     *
     * <code>.ssn.annotator.v1.DocumentSource source = 2 [json_name = "source"];</code>
     */
    public ai.visma.ssn.annotator.v1.DocumentSource.Builder getSourceBuilder() {
      bitField0_ |= 0x00000002;
      onChanged();
      return getSourceFieldBuilder().getBuilder();
    }
    /**
     * <pre>
     * Google Cloud Storage image location, or publicly-accessible image
     * URL. If both `content` and `source` are provided for a document, `content`
     * takes precedence and is used to perform the scan request.
     * </pre>
     *
     * <code>.ssn.annotator.v1.DocumentSource source = 2 [json_name = "source"];</code>
     */
    public ai.visma.ssn.annotator.v1.DocumentSourceOrBuilder getSourceOrBuilder() {
      if (sourceBuilder_ != null) {
        return sourceBuilder_.getMessageOrBuilder();
      } else {
        return source_ == null ?
            ai.visma.ssn.annotator.v1.DocumentSource.getDefaultInstance() : source_;
      }
    }
    /**
     * <pre>
     * Google Cloud Storage image location, or publicly-accessible image
     * URL. If both `content` and `source` are provided for a document, `content`
     * takes precedence and is used to perform the scan request.
     * </pre>
     *
     * <code>.ssn.annotator.v1.DocumentSource source = 2 [json_name = "source"];</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        ai.visma.ssn.annotator.v1.DocumentSource, ai.visma.ssn.annotator.v1.DocumentSource.Builder, ai.visma.ssn.annotator.v1.DocumentSourceOrBuilder> 
        getSourceFieldBuilder() {
      if (sourceBuilder_ == null) {
        sourceBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            ai.visma.ssn.annotator.v1.DocumentSource, ai.visma.ssn.annotator.v1.DocumentSource.Builder, ai.visma.ssn.annotator.v1.DocumentSourceOrBuilder>(
                getSource(),
                getParentForChildren(),
                isClean());
        source_ = null;
      }
      return sourceBuilder_;
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


    // @@protoc_insertion_point(builder_scope:ssn.annotator.v1.Document)
  }

  // @@protoc_insertion_point(class_scope:ssn.annotator.v1.Document)
  private static final ai.visma.ssn.annotator.v1.Document DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new ai.visma.ssn.annotator.v1.Document();
  }

  public static ai.visma.ssn.annotator.v1.Document getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<Document>
      PARSER = new com.google.protobuf.AbstractParser<Document>() {
    @java.lang.Override
    public Document parsePartialFrom(
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

  public static com.google.protobuf.Parser<Document> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<Document> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public ai.visma.ssn.annotator.v1.Document getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}
