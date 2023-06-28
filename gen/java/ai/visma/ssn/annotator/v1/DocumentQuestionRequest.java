// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: ssn/annotator/v1/annotator.proto

package ai.visma.ssn.annotator.v1;

/**
 * Protobuf type {@code ssn.annotator.v1.DocumentQuestionRequest}
 */
public final class DocumentQuestionRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:ssn.annotator.v1.DocumentQuestionRequest)
    DocumentQuestionRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use DocumentQuestionRequest.newBuilder() to construct.
  private DocumentQuestionRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private DocumentQuestionRequest() {
    question_ = com.google.protobuf.LazyStringArrayList.EMPTY;
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new DocumentQuestionRequest();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return ai.visma.ssn.annotator.v1.AnnotatorProto.internal_static_ssn_annotator_v1_DocumentQuestionRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return ai.visma.ssn.annotator.v1.AnnotatorProto.internal_static_ssn_annotator_v1_DocumentQuestionRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            ai.visma.ssn.annotator.v1.DocumentQuestionRequest.class, ai.visma.ssn.annotator.v1.DocumentQuestionRequest.Builder.class);
  }

  public static final int DOCUMENT_FIELD_NUMBER = 1;
  private ai.visma.ssn.annotator.v1.Document document_;
  /**
   * <code>.ssn.annotator.v1.Document document = 1 [json_name = "document"];</code>
   * @return Whether the document field is set.
   */
  @java.lang.Override
  public boolean hasDocument() {
    return document_ != null;
  }
  /**
   * <code>.ssn.annotator.v1.Document document = 1 [json_name = "document"];</code>
   * @return The document.
   */
  @java.lang.Override
  public ai.visma.ssn.annotator.v1.Document getDocument() {
    return document_ == null ? ai.visma.ssn.annotator.v1.Document.getDefaultInstance() : document_;
  }
  /**
   * <code>.ssn.annotator.v1.Document document = 1 [json_name = "document"];</code>
   */
  @java.lang.Override
  public ai.visma.ssn.annotator.v1.DocumentOrBuilder getDocumentOrBuilder() {
    return document_ == null ? ai.visma.ssn.annotator.v1.Document.getDefaultInstance() : document_;
  }

  public static final int QUESTION_FIELD_NUMBER = 2;
  @SuppressWarnings("serial")
  private com.google.protobuf.LazyStringList question_;
  /**
   * <code>repeated string question = 2 [json_name = "question"];</code>
   * @return A list containing the question.
   */
  public com.google.protobuf.ProtocolStringList
      getQuestionList() {
    return question_;
  }
  /**
   * <code>repeated string question = 2 [json_name = "question"];</code>
   * @return The count of question.
   */
  public int getQuestionCount() {
    return question_.size();
  }
  /**
   * <code>repeated string question = 2 [json_name = "question"];</code>
   * @param index The index of the element to return.
   * @return The question at the given index.
   */
  public java.lang.String getQuestion(int index) {
    return question_.get(index);
  }
  /**
   * <code>repeated string question = 2 [json_name = "question"];</code>
   * @param index The index of the value to return.
   * @return The bytes of the question at the given index.
   */
  public com.google.protobuf.ByteString
      getQuestionBytes(int index) {
    return question_.getByteString(index);
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
      output.writeMessage(1, getDocument());
    }
    for (int i = 0; i < question_.size(); i++) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 2, question_.getRaw(i));
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
        .computeMessageSize(1, getDocument());
    }
    {
      int dataSize = 0;
      for (int i = 0; i < question_.size(); i++) {
        dataSize += computeStringSizeNoTag(question_.getRaw(i));
      }
      size += dataSize;
      size += 1 * getQuestionList().size();
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
    if (!(obj instanceof ai.visma.ssn.annotator.v1.DocumentQuestionRequest)) {
      return super.equals(obj);
    }
    ai.visma.ssn.annotator.v1.DocumentQuestionRequest other = (ai.visma.ssn.annotator.v1.DocumentQuestionRequest) obj;

    if (hasDocument() != other.hasDocument()) return false;
    if (hasDocument()) {
      if (!getDocument()
          .equals(other.getDocument())) return false;
    }
    if (!getQuestionList()
        .equals(other.getQuestionList())) return false;
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
    if (getQuestionCount() > 0) {
      hash = (37 * hash) + QUESTION_FIELD_NUMBER;
      hash = (53 * hash) + getQuestionList().hashCode();
    }
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static ai.visma.ssn.annotator.v1.DocumentQuestionRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static ai.visma.ssn.annotator.v1.DocumentQuestionRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static ai.visma.ssn.annotator.v1.DocumentQuestionRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static ai.visma.ssn.annotator.v1.DocumentQuestionRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static ai.visma.ssn.annotator.v1.DocumentQuestionRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static ai.visma.ssn.annotator.v1.DocumentQuestionRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static ai.visma.ssn.annotator.v1.DocumentQuestionRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static ai.visma.ssn.annotator.v1.DocumentQuestionRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static ai.visma.ssn.annotator.v1.DocumentQuestionRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static ai.visma.ssn.annotator.v1.DocumentQuestionRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static ai.visma.ssn.annotator.v1.DocumentQuestionRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static ai.visma.ssn.annotator.v1.DocumentQuestionRequest parseFrom(
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
  public static Builder newBuilder(ai.visma.ssn.annotator.v1.DocumentQuestionRequest prototype) {
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
   * Protobuf type {@code ssn.annotator.v1.DocumentQuestionRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:ssn.annotator.v1.DocumentQuestionRequest)
      ai.visma.ssn.annotator.v1.DocumentQuestionRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return ai.visma.ssn.annotator.v1.AnnotatorProto.internal_static_ssn_annotator_v1_DocumentQuestionRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return ai.visma.ssn.annotator.v1.AnnotatorProto.internal_static_ssn_annotator_v1_DocumentQuestionRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              ai.visma.ssn.annotator.v1.DocumentQuestionRequest.class, ai.visma.ssn.annotator.v1.DocumentQuestionRequest.Builder.class);
    }

    // Construct using ai.visma.ssn.annotator.v1.DocumentQuestionRequest.newBuilder()
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
      question_ = com.google.protobuf.LazyStringArrayList.EMPTY;
      bitField0_ = (bitField0_ & ~0x00000002);
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return ai.visma.ssn.annotator.v1.AnnotatorProto.internal_static_ssn_annotator_v1_DocumentQuestionRequest_descriptor;
    }

    @java.lang.Override
    public ai.visma.ssn.annotator.v1.DocumentQuestionRequest getDefaultInstanceForType() {
      return ai.visma.ssn.annotator.v1.DocumentQuestionRequest.getDefaultInstance();
    }

    @java.lang.Override
    public ai.visma.ssn.annotator.v1.DocumentQuestionRequest build() {
      ai.visma.ssn.annotator.v1.DocumentQuestionRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public ai.visma.ssn.annotator.v1.DocumentQuestionRequest buildPartial() {
      ai.visma.ssn.annotator.v1.DocumentQuestionRequest result = new ai.visma.ssn.annotator.v1.DocumentQuestionRequest(this);
      buildPartialRepeatedFields(result);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartialRepeatedFields(ai.visma.ssn.annotator.v1.DocumentQuestionRequest result) {
      if (((bitField0_ & 0x00000002) != 0)) {
        question_ = question_.getUnmodifiableView();
        bitField0_ = (bitField0_ & ~0x00000002);
      }
      result.question_ = question_;
    }

    private void buildPartial0(ai.visma.ssn.annotator.v1.DocumentQuestionRequest result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.document_ = documentBuilder_ == null
            ? document_
            : documentBuilder_.build();
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
      if (other instanceof ai.visma.ssn.annotator.v1.DocumentQuestionRequest) {
        return mergeFrom((ai.visma.ssn.annotator.v1.DocumentQuestionRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(ai.visma.ssn.annotator.v1.DocumentQuestionRequest other) {
      if (other == ai.visma.ssn.annotator.v1.DocumentQuestionRequest.getDefaultInstance()) return this;
      if (other.hasDocument()) {
        mergeDocument(other.getDocument());
      }
      if (!other.question_.isEmpty()) {
        if (question_.isEmpty()) {
          question_ = other.question_;
          bitField0_ = (bitField0_ & ~0x00000002);
        } else {
          ensureQuestionIsMutable();
          question_.addAll(other.question_);
        }
        onChanged();
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
              input.readMessage(
                  getDocumentFieldBuilder().getBuilder(),
                  extensionRegistry);
              bitField0_ |= 0x00000001;
              break;
            } // case 10
            case 18: {
              java.lang.String s = input.readStringRequireUtf8();
              ensureQuestionIsMutable();
              question_.add(s);
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

    private ai.visma.ssn.annotator.v1.Document document_;
    private com.google.protobuf.SingleFieldBuilderV3<
        ai.visma.ssn.annotator.v1.Document, ai.visma.ssn.annotator.v1.Document.Builder, ai.visma.ssn.annotator.v1.DocumentOrBuilder> documentBuilder_;
    /**
     * <code>.ssn.annotator.v1.Document document = 1 [json_name = "document"];</code>
     * @return Whether the document field is set.
     */
    public boolean hasDocument() {
      return ((bitField0_ & 0x00000001) != 0);
    }
    /**
     * <code>.ssn.annotator.v1.Document document = 1 [json_name = "document"];</code>
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
     * <code>.ssn.annotator.v1.Document document = 1 [json_name = "document"];</code>
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
     * <code>.ssn.annotator.v1.Document document = 1 [json_name = "document"];</code>
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
     * <code>.ssn.annotator.v1.Document document = 1 [json_name = "document"];</code>
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
     * <code>.ssn.annotator.v1.Document document = 1 [json_name = "document"];</code>
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
     * <code>.ssn.annotator.v1.Document document = 1 [json_name = "document"];</code>
     */
    public ai.visma.ssn.annotator.v1.Document.Builder getDocumentBuilder() {
      bitField0_ |= 0x00000001;
      onChanged();
      return getDocumentFieldBuilder().getBuilder();
    }
    /**
     * <code>.ssn.annotator.v1.Document document = 1 [json_name = "document"];</code>
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
     * <code>.ssn.annotator.v1.Document document = 1 [json_name = "document"];</code>
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

    private com.google.protobuf.LazyStringList question_ = com.google.protobuf.LazyStringArrayList.EMPTY;
    private void ensureQuestionIsMutable() {
      if (!((bitField0_ & 0x00000002) != 0)) {
        question_ = new com.google.protobuf.LazyStringArrayList(question_);
        bitField0_ |= 0x00000002;
       }
    }
    /**
     * <code>repeated string question = 2 [json_name = "question"];</code>
     * @return A list containing the question.
     */
    public com.google.protobuf.ProtocolStringList
        getQuestionList() {
      return question_.getUnmodifiableView();
    }
    /**
     * <code>repeated string question = 2 [json_name = "question"];</code>
     * @return The count of question.
     */
    public int getQuestionCount() {
      return question_.size();
    }
    /**
     * <code>repeated string question = 2 [json_name = "question"];</code>
     * @param index The index of the element to return.
     * @return The question at the given index.
     */
    public java.lang.String getQuestion(int index) {
      return question_.get(index);
    }
    /**
     * <code>repeated string question = 2 [json_name = "question"];</code>
     * @param index The index of the value to return.
     * @return The bytes of the question at the given index.
     */
    public com.google.protobuf.ByteString
        getQuestionBytes(int index) {
      return question_.getByteString(index);
    }
    /**
     * <code>repeated string question = 2 [json_name = "question"];</code>
     * @param index The index to set the value at.
     * @param value The question to set.
     * @return This builder for chaining.
     */
    public Builder setQuestion(
        int index, java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      ensureQuestionIsMutable();
      question_.set(index, value);
      onChanged();
      return this;
    }
    /**
     * <code>repeated string question = 2 [json_name = "question"];</code>
     * @param value The question to add.
     * @return This builder for chaining.
     */
    public Builder addQuestion(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      ensureQuestionIsMutable();
      question_.add(value);
      onChanged();
      return this;
    }
    /**
     * <code>repeated string question = 2 [json_name = "question"];</code>
     * @param values The question to add.
     * @return This builder for chaining.
     */
    public Builder addAllQuestion(
        java.lang.Iterable<java.lang.String> values) {
      ensureQuestionIsMutable();
      com.google.protobuf.AbstractMessageLite.Builder.addAll(
          values, question_);
      onChanged();
      return this;
    }
    /**
     * <code>repeated string question = 2 [json_name = "question"];</code>
     * @return This builder for chaining.
     */
    public Builder clearQuestion() {
      question_ = com.google.protobuf.LazyStringArrayList.EMPTY;
      bitField0_ = (bitField0_ & ~0x00000002);
      onChanged();
      return this;
    }
    /**
     * <code>repeated string question = 2 [json_name = "question"];</code>
     * @param value The bytes of the question to add.
     * @return This builder for chaining.
     */
    public Builder addQuestionBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      ensureQuestionIsMutable();
      question_.add(value);
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


    // @@protoc_insertion_point(builder_scope:ssn.annotator.v1.DocumentQuestionRequest)
  }

  // @@protoc_insertion_point(class_scope:ssn.annotator.v1.DocumentQuestionRequest)
  private static final ai.visma.ssn.annotator.v1.DocumentQuestionRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new ai.visma.ssn.annotator.v1.DocumentQuestionRequest();
  }

  public static ai.visma.ssn.annotator.v1.DocumentQuestionRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<DocumentQuestionRequest>
      PARSER = new com.google.protobuf.AbstractParser<DocumentQuestionRequest>() {
    @java.lang.Override
    public DocumentQuestionRequest parsePartialFrom(
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

  public static com.google.protobuf.Parser<DocumentQuestionRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<DocumentQuestionRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public ai.visma.ssn.annotator.v1.DocumentQuestionRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

