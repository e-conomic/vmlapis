// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: ssn/ocrservice/v1/ocrservice.proto

package ai.visma.ssn.ocrservice.v1;

/**
 * Protobuf type {@code ssn.ocrservice.v1.GetTextAnnotationRequest}
 */
public final class GetTextAnnotationRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:ssn.ocrservice.v1.GetTextAnnotationRequest)
    GetTextAnnotationRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use GetTextAnnotationRequest.newBuilder() to construct.
  private GetTextAnnotationRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private GetTextAnnotationRequest() {
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new GetTextAnnotationRequest();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return ai.visma.ssn.ocrservice.v1.OcrserviceProto.internal_static_ssn_ocrservice_v1_GetTextAnnotationRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return ai.visma.ssn.ocrservice.v1.OcrserviceProto.internal_static_ssn_ocrservice_v1_GetTextAnnotationRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest.class, ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest.Builder.class);
  }

  public static final int DOCUMENT_FIELD_NUMBER = 2;
  private ai.visma.ssn.annotator.v1.Document document_;
  /**
   * <code>.ssn.annotator.v1.Document document = 2 [json_name = "document"];</code>
   * @return Whether the document field is set.
   */
  @java.lang.Override
  public boolean hasDocument() {
    return document_ != null;
  }
  /**
   * <code>.ssn.annotator.v1.Document document = 2 [json_name = "document"];</code>
   * @return The document.
   */
  @java.lang.Override
  public ai.visma.ssn.annotator.v1.Document getDocument() {
    return document_ == null ? ai.visma.ssn.annotator.v1.Document.getDefaultInstance() : document_;
  }
  /**
   * <code>.ssn.annotator.v1.Document document = 2 [json_name = "document"];</code>
   */
  @java.lang.Override
  public ai.visma.ssn.annotator.v1.DocumentOrBuilder getDocumentOrBuilder() {
    return document_ == null ? ai.visma.ssn.annotator.v1.Document.getDefaultInstance() : document_;
  }

  public static final int PREVIEW_FIELD_NUMBER = 3;
  private boolean preview_ = false;
  /**
   * <code>bool preview = 3 [json_name = "preview"];</code>
   * @return The preview.
   */
  @java.lang.Override
  public boolean getPreview() {
    return preview_;
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
    if (document_ != null) {
      output.writeMessage(2, getDocument());
    }
    if (preview_ != false) {
      output.writeBool(3, preview_);
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (document_ != null) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(2, getDocument());
    }
    if (preview_ != false) {
      size += com.google.protobuf.CodedOutputStream
        .computeBoolSize(3, preview_);
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
    if (!(obj instanceof ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest)) {
      return super.equals(obj);
    }
    ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest other = (ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest) obj;

    if (hasDocument() != other.hasDocument()) return false;
    if (hasDocument()) {
      if (!getDocument()
          .equals(other.getDocument())) return false;
    }
    if (getPreview()
        != other.getPreview()) return false;
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
    if (hasDocument()) {
      hash = (37 * hash) + DOCUMENT_FIELD_NUMBER;
      hash = (53 * hash) + getDocument().hashCode();
    }
    hash = (37 * hash) + PREVIEW_FIELD_NUMBER;
    hash = (53 * hash) + com.google.protobuf.Internal.hashBoolean(
        getPreview());
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest parseFrom(
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
  public static Builder newBuilder(ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest prototype) {
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
   * Protobuf type {@code ssn.ocrservice.v1.GetTextAnnotationRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:ssn.ocrservice.v1.GetTextAnnotationRequest)
      ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return ai.visma.ssn.ocrservice.v1.OcrserviceProto.internal_static_ssn_ocrservice_v1_GetTextAnnotationRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return ai.visma.ssn.ocrservice.v1.OcrserviceProto.internal_static_ssn_ocrservice_v1_GetTextAnnotationRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest.class, ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest.Builder.class);
    }

    // Construct using ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest.newBuilder()
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
      document_ = null;
      if (documentBuilder_ != null) {
        documentBuilder_.dispose();
        documentBuilder_ = null;
      }
      preview_ = false;
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return ai.visma.ssn.ocrservice.v1.OcrserviceProto.internal_static_ssn_ocrservice_v1_GetTextAnnotationRequest_descriptor;
    }

    @java.lang.Override
    public ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest getDefaultInstanceForType() {
      return ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest.getDefaultInstance();
    }

    @java.lang.Override
    public ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest build() {
      ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest buildPartial() {
      ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest result = new ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.document_ = documentBuilder_ == null
            ? document_
            : documentBuilder_.build();
      }
      if (((from_bitField0_ & 0x00000002) != 0)) {
        result.preview_ = preview_;
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
      if (other instanceof ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest) {
        return mergeFrom((ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest other) {
      if (other == ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest.getDefaultInstance()) return this;
      if (other.hasDocument()) {
        mergeDocument(other.getDocument());
      }
      if (other.getPreview() != false) {
        setPreview(other.getPreview());
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
            case 18: {
              input.readMessage(
                  getDocumentFieldBuilder().getBuilder(),
                  extensionRegistry);
              bitField0_ |= 0x00000001;
              break;
            } // case 18
            case 24: {
              preview_ = input.readBool();
              bitField0_ |= 0x00000002;
              break;
            } // case 24
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

    private ai.visma.ssn.annotator.v1.Document document_;
    private com.google.protobuf.SingleFieldBuilderV3<
        ai.visma.ssn.annotator.v1.Document, ai.visma.ssn.annotator.v1.Document.Builder, ai.visma.ssn.annotator.v1.DocumentOrBuilder> documentBuilder_;
    /**
     * <code>.ssn.annotator.v1.Document document = 2 [json_name = "document"];</code>
     * @return Whether the document field is set.
     */
    public boolean hasDocument() {
      return ((bitField0_ & 0x00000001) != 0);
    }
    /**
     * <code>.ssn.annotator.v1.Document document = 2 [json_name = "document"];</code>
     * @return The document.
     */
    public ai.visma.ssn.annotator.v1.Document getDocument() {
      if (documentBuilder_ == null) {
        return document_ == null ? ai.visma.ssn.annotator.v1.Document.getDefaultInstance() : document_;
      } else {
        return documentBuilder_.getMessage();
      }
    }
    /**
     * <code>.ssn.annotator.v1.Document document = 2 [json_name = "document"];</code>
     */
    public Builder setDocument(ai.visma.ssn.annotator.v1.Document value) {
      if (documentBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        document_ = value;
      } else {
        documentBuilder_.setMessage(value);
      }
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>.ssn.annotator.v1.Document document = 2 [json_name = "document"];</code>
     */
    public Builder setDocument(
        ai.visma.ssn.annotator.v1.Document.Builder builderForValue) {
      if (documentBuilder_ == null) {
        document_ = builderForValue.build();
      } else {
        documentBuilder_.setMessage(builderForValue.build());
      }
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>.ssn.annotator.v1.Document document = 2 [json_name = "document"];</code>
     */
    public Builder mergeDocument(ai.visma.ssn.annotator.v1.Document value) {
      if (documentBuilder_ == null) {
        if (((bitField0_ & 0x00000001) != 0) &&
          document_ != null &&
          document_ != ai.visma.ssn.annotator.v1.Document.getDefaultInstance()) {
          getDocumentBuilder().mergeFrom(value);
        } else {
          document_ = value;
        }
      } else {
        documentBuilder_.mergeFrom(value);
      }
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>.ssn.annotator.v1.Document document = 2 [json_name = "document"];</code>
     */
    public Builder clearDocument() {
      bitField0_ = (bitField0_ & ~0x00000001);
      document_ = null;
      if (documentBuilder_ != null) {
        documentBuilder_.dispose();
        documentBuilder_ = null;
      }
      onChanged();
      return this;
    }
    /**
     * <code>.ssn.annotator.v1.Document document = 2 [json_name = "document"];</code>
     */
    public ai.visma.ssn.annotator.v1.Document.Builder getDocumentBuilder() {
      bitField0_ |= 0x00000001;
      onChanged();
      return getDocumentFieldBuilder().getBuilder();
    }
    /**
     * <code>.ssn.annotator.v1.Document document = 2 [json_name = "document"];</code>
     */
    public ai.visma.ssn.annotator.v1.DocumentOrBuilder getDocumentOrBuilder() {
      if (documentBuilder_ != null) {
        return documentBuilder_.getMessageOrBuilder();
      } else {
        return document_ == null ?
            ai.visma.ssn.annotator.v1.Document.getDefaultInstance() : document_;
      }
    }
    /**
     * <code>.ssn.annotator.v1.Document document = 2 [json_name = "document"];</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        ai.visma.ssn.annotator.v1.Document, ai.visma.ssn.annotator.v1.Document.Builder, ai.visma.ssn.annotator.v1.DocumentOrBuilder> 
        getDocumentFieldBuilder() {
      if (documentBuilder_ == null) {
        documentBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            ai.visma.ssn.annotator.v1.Document, ai.visma.ssn.annotator.v1.Document.Builder, ai.visma.ssn.annotator.v1.DocumentOrBuilder>(
                getDocument(),
                getParentForChildren(),
                isClean());
        document_ = null;
      }
      return documentBuilder_;
    }

    private boolean preview_ ;
    /**
     * <code>bool preview = 3 [json_name = "preview"];</code>
     * @return The preview.
     */
    @java.lang.Override
    public boolean getPreview() {
      return preview_;
    }
    /**
     * <code>bool preview = 3 [json_name = "preview"];</code>
     * @param value The preview to set.
     * @return This builder for chaining.
     */
    public Builder setPreview(boolean value) {
      
      preview_ = value;
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>bool preview = 3 [json_name = "preview"];</code>
     * @return This builder for chaining.
     */
    public Builder clearPreview() {
      bitField0_ = (bitField0_ & ~0x00000002);
      preview_ = false;
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


    // @@protoc_insertion_point(builder_scope:ssn.ocrservice.v1.GetTextAnnotationRequest)
  }

  // @@protoc_insertion_point(class_scope:ssn.ocrservice.v1.GetTextAnnotationRequest)
  private static final ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest();
  }

  public static ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<GetTextAnnotationRequest>
      PARSER = new com.google.protobuf.AbstractParser<GetTextAnnotationRequest>() {
    @java.lang.Override
    public GetTextAnnotationRequest parsePartialFrom(
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

  public static com.google.protobuf.Parser<GetTextAnnotationRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<GetTextAnnotationRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public ai.visma.ssn.ocrservice.v1.GetTextAnnotationRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

