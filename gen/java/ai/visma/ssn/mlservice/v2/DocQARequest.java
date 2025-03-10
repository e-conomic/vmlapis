// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: ssn/mlservice/v2/mlservice.proto
// Protobuf Java Version: 4.29.3

package ai.visma.ssn.mlservice.v2;

/**
 * Protobuf type {@code ssn.mlservice.v2.DocQARequest}
 */
public final class DocQARequest extends
    com.google.protobuf.GeneratedMessage implements
    // @@protoc_insertion_point(message_implements:ssn.mlservice.v2.DocQARequest)
    DocQARequestOrBuilder {
private static final long serialVersionUID = 0L;
  static {
    com.google.protobuf.RuntimeVersion.validateProtobufGencodeVersion(
      com.google.protobuf.RuntimeVersion.RuntimeDomain.PUBLIC,
      /* major= */ 4,
      /* minor= */ 29,
      /* patch= */ 3,
      /* suffix= */ "",
      DocQARequest.class.getName());
  }
  // Use DocQARequest.newBuilder() to construct.
  private DocQARequest(com.google.protobuf.GeneratedMessage.Builder<?> builder) {
    super(builder);
  }
  private DocQARequest() {
    image_ = com.google.protobuf.ByteString.EMPTY;
    questions_ =
        com.google.protobuf.LazyStringArrayList.emptyList();
  }

  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return ai.visma.ssn.mlservice.v2.MlserviceProto.internal_static_ssn_mlservice_v2_DocQARequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return ai.visma.ssn.mlservice.v2.MlserviceProto.internal_static_ssn_mlservice_v2_DocQARequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            ai.visma.ssn.mlservice.v2.DocQARequest.class, ai.visma.ssn.mlservice.v2.DocQARequest.Builder.class);
  }

  private int bitField0_;
  public static final int TEXT_ANNOTATION_FIELD_NUMBER = 1;
  private ai.visma.ssn.type.TextAnnotation textAnnotation_;
  /**
   * <code>.ssn.type.TextAnnotation text_annotation = 1 [json_name = "textAnnotation"];</code>
   * @return Whether the textAnnotation field is set.
   */
  @java.lang.Override
  public boolean hasTextAnnotation() {
    return ((bitField0_ & 0x00000001) != 0);
  }
  /**
   * <code>.ssn.type.TextAnnotation text_annotation = 1 [json_name = "textAnnotation"];</code>
   * @return The textAnnotation.
   */
  @java.lang.Override
  public ai.visma.ssn.type.TextAnnotation getTextAnnotation() {
    return textAnnotation_ == null ? ai.visma.ssn.type.TextAnnotation.getDefaultInstance() : textAnnotation_;
  }
  /**
   * <code>.ssn.type.TextAnnotation text_annotation = 1 [json_name = "textAnnotation"];</code>
   */
  @java.lang.Override
  public ai.visma.ssn.type.TextAnnotationOrBuilder getTextAnnotationOrBuilder() {
    return textAnnotation_ == null ? ai.visma.ssn.type.TextAnnotation.getDefaultInstance() : textAnnotation_;
  }

  public static final int IMAGE_FIELD_NUMBER = 2;
  private com.google.protobuf.ByteString image_ = com.google.protobuf.ByteString.EMPTY;
  /**
   * <code>bytes image = 2 [json_name = "image"];</code>
   * @return The image.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString getImage() {
    return image_;
  }

  public static final int QUESTIONS_FIELD_NUMBER = 3;
  @SuppressWarnings("serial")
  private com.google.protobuf.LazyStringArrayList questions_ =
      com.google.protobuf.LazyStringArrayList.emptyList();
  /**
   * <code>repeated string questions = 3 [json_name = "questions"];</code>
   * @return A list containing the questions.
   */
  public com.google.protobuf.ProtocolStringList
      getQuestionsList() {
    return questions_;
  }
  /**
   * <code>repeated string questions = 3 [json_name = "questions"];</code>
   * @return The count of questions.
   */
  public int getQuestionsCount() {
    return questions_.size();
  }
  /**
   * <code>repeated string questions = 3 [json_name = "questions"];</code>
   * @param index The index of the element to return.
   * @return The questions at the given index.
   */
  public java.lang.String getQuestions(int index) {
    return questions_.get(index);
  }
  /**
   * <code>repeated string questions = 3 [json_name = "questions"];</code>
   * @param index The index of the value to return.
   * @return The bytes of the questions at the given index.
   */
  public com.google.protobuf.ByteString
      getQuestionsBytes(int index) {
    return questions_.getByteString(index);
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
    if (((bitField0_ & 0x00000001) != 0)) {
      output.writeMessage(1, getTextAnnotation());
    }
    if (!image_.isEmpty()) {
      output.writeBytes(2, image_);
    }
    for (int i = 0; i < questions_.size(); i++) {
      com.google.protobuf.GeneratedMessage.writeString(output, 3, questions_.getRaw(i));
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (((bitField0_ & 0x00000001) != 0)) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(1, getTextAnnotation());
    }
    if (!image_.isEmpty()) {
      size += com.google.protobuf.CodedOutputStream
        .computeBytesSize(2, image_);
    }
    {
      int dataSize = 0;
      for (int i = 0; i < questions_.size(); i++) {
        dataSize += computeStringSizeNoTag(questions_.getRaw(i));
      }
      size += dataSize;
      size += 1 * getQuestionsList().size();
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
    if (!(obj instanceof ai.visma.ssn.mlservice.v2.DocQARequest)) {
      return super.equals(obj);
    }
    ai.visma.ssn.mlservice.v2.DocQARequest other = (ai.visma.ssn.mlservice.v2.DocQARequest) obj;

    if (hasTextAnnotation() != other.hasTextAnnotation()) return false;
    if (hasTextAnnotation()) {
      if (!getTextAnnotation()
          .equals(other.getTextAnnotation())) return false;
    }
    if (!getImage()
        .equals(other.getImage())) return false;
    if (!getQuestionsList()
        .equals(other.getQuestionsList())) return false;
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
    if (hasTextAnnotation()) {
      hash = (37 * hash) + TEXT_ANNOTATION_FIELD_NUMBER;
      hash = (53 * hash) + getTextAnnotation().hashCode();
    }
    hash = (37 * hash) + IMAGE_FIELD_NUMBER;
    hash = (53 * hash) + getImage().hashCode();
    if (getQuestionsCount() > 0) {
      hash = (37 * hash) + QUESTIONS_FIELD_NUMBER;
      hash = (53 * hash) + getQuestionsList().hashCode();
    }
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static ai.visma.ssn.mlservice.v2.DocQARequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static ai.visma.ssn.mlservice.v2.DocQARequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static ai.visma.ssn.mlservice.v2.DocQARequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static ai.visma.ssn.mlservice.v2.DocQARequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static ai.visma.ssn.mlservice.v2.DocQARequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static ai.visma.ssn.mlservice.v2.DocQARequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static ai.visma.ssn.mlservice.v2.DocQARequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input);
  }
  public static ai.visma.ssn.mlservice.v2.DocQARequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  public static ai.visma.ssn.mlservice.v2.DocQARequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseDelimitedWithIOException(PARSER, input);
  }

  public static ai.visma.ssn.mlservice.v2.DocQARequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static ai.visma.ssn.mlservice.v2.DocQARequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input);
  }
  public static ai.visma.ssn.mlservice.v2.DocQARequest parseFrom(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  @java.lang.Override
  public Builder newBuilderForType() { return newBuilder(); }
  public static Builder newBuilder() {
    return DEFAULT_INSTANCE.toBuilder();
  }
  public static Builder newBuilder(ai.visma.ssn.mlservice.v2.DocQARequest prototype) {
    return DEFAULT_INSTANCE.toBuilder().mergeFrom(prototype);
  }
  @java.lang.Override
  public Builder toBuilder() {
    return this == DEFAULT_INSTANCE
        ? new Builder() : new Builder().mergeFrom(this);
  }

  @java.lang.Override
  protected Builder newBuilderForType(
      com.google.protobuf.GeneratedMessage.BuilderParent parent) {
    Builder builder = new Builder(parent);
    return builder;
  }
  /**
   * Protobuf type {@code ssn.mlservice.v2.DocQARequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessage.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:ssn.mlservice.v2.DocQARequest)
      ai.visma.ssn.mlservice.v2.DocQARequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return ai.visma.ssn.mlservice.v2.MlserviceProto.internal_static_ssn_mlservice_v2_DocQARequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessage.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return ai.visma.ssn.mlservice.v2.MlserviceProto.internal_static_ssn_mlservice_v2_DocQARequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              ai.visma.ssn.mlservice.v2.DocQARequest.class, ai.visma.ssn.mlservice.v2.DocQARequest.Builder.class);
    }

    // Construct using ai.visma.ssn.mlservice.v2.DocQARequest.newBuilder()
    private Builder() {
      maybeForceBuilderInitialization();
    }

    private Builder(
        com.google.protobuf.GeneratedMessage.BuilderParent parent) {
      super(parent);
      maybeForceBuilderInitialization();
    }
    private void maybeForceBuilderInitialization() {
      if (com.google.protobuf.GeneratedMessage
              .alwaysUseFieldBuilders) {
        getTextAnnotationFieldBuilder();
      }
    }
    @java.lang.Override
    public Builder clear() {
      super.clear();
      bitField0_ = 0;
      textAnnotation_ = null;
      if (textAnnotationBuilder_ != null) {
        textAnnotationBuilder_.dispose();
        textAnnotationBuilder_ = null;
      }
      image_ = com.google.protobuf.ByteString.EMPTY;
      questions_ =
          com.google.protobuf.LazyStringArrayList.emptyList();
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return ai.visma.ssn.mlservice.v2.MlserviceProto.internal_static_ssn_mlservice_v2_DocQARequest_descriptor;
    }

    @java.lang.Override
    public ai.visma.ssn.mlservice.v2.DocQARequest getDefaultInstanceForType() {
      return ai.visma.ssn.mlservice.v2.DocQARequest.getDefaultInstance();
    }

    @java.lang.Override
    public ai.visma.ssn.mlservice.v2.DocQARequest build() {
      ai.visma.ssn.mlservice.v2.DocQARequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public ai.visma.ssn.mlservice.v2.DocQARequest buildPartial() {
      ai.visma.ssn.mlservice.v2.DocQARequest result = new ai.visma.ssn.mlservice.v2.DocQARequest(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(ai.visma.ssn.mlservice.v2.DocQARequest result) {
      int from_bitField0_ = bitField0_;
      int to_bitField0_ = 0;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.textAnnotation_ = textAnnotationBuilder_ == null
            ? textAnnotation_
            : textAnnotationBuilder_.build();
        to_bitField0_ |= 0x00000001;
      }
      if (((from_bitField0_ & 0x00000002) != 0)) {
        result.image_ = image_;
      }
      if (((from_bitField0_ & 0x00000004) != 0)) {
        questions_.makeImmutable();
        result.questions_ = questions_;
      }
      result.bitField0_ |= to_bitField0_;
    }

    @java.lang.Override
    public Builder mergeFrom(com.google.protobuf.Message other) {
      if (other instanceof ai.visma.ssn.mlservice.v2.DocQARequest) {
        return mergeFrom((ai.visma.ssn.mlservice.v2.DocQARequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(ai.visma.ssn.mlservice.v2.DocQARequest other) {
      if (other == ai.visma.ssn.mlservice.v2.DocQARequest.getDefaultInstance()) return this;
      if (other.hasTextAnnotation()) {
        mergeTextAnnotation(other.getTextAnnotation());
      }
      if (other.getImage() != com.google.protobuf.ByteString.EMPTY) {
        setImage(other.getImage());
      }
      if (!other.questions_.isEmpty()) {
        if (questions_.isEmpty()) {
          questions_ = other.questions_;
          bitField0_ |= 0x00000004;
        } else {
          ensureQuestionsIsMutable();
          questions_.addAll(other.questions_);
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
                  getTextAnnotationFieldBuilder().getBuilder(),
                  extensionRegistry);
              bitField0_ |= 0x00000001;
              break;
            } // case 10
            case 18: {
              image_ = input.readBytes();
              bitField0_ |= 0x00000002;
              break;
            } // case 18
            case 26: {
              java.lang.String s = input.readStringRequireUtf8();
              ensureQuestionsIsMutable();
              questions_.add(s);
              break;
            } // case 26
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

    private ai.visma.ssn.type.TextAnnotation textAnnotation_;
    private com.google.protobuf.SingleFieldBuilder<
        ai.visma.ssn.type.TextAnnotation, ai.visma.ssn.type.TextAnnotation.Builder, ai.visma.ssn.type.TextAnnotationOrBuilder> textAnnotationBuilder_;
    /**
     * <code>.ssn.type.TextAnnotation text_annotation = 1 [json_name = "textAnnotation"];</code>
     * @return Whether the textAnnotation field is set.
     */
    public boolean hasTextAnnotation() {
      return ((bitField0_ & 0x00000001) != 0);
    }
    /**
     * <code>.ssn.type.TextAnnotation text_annotation = 1 [json_name = "textAnnotation"];</code>
     * @return The textAnnotation.
     */
    public ai.visma.ssn.type.TextAnnotation getTextAnnotation() {
      if (textAnnotationBuilder_ == null) {
        return textAnnotation_ == null ? ai.visma.ssn.type.TextAnnotation.getDefaultInstance() : textAnnotation_;
      } else {
        return textAnnotationBuilder_.getMessage();
      }
    }
    /**
     * <code>.ssn.type.TextAnnotation text_annotation = 1 [json_name = "textAnnotation"];</code>
     */
    public Builder setTextAnnotation(ai.visma.ssn.type.TextAnnotation value) {
      if (textAnnotationBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        textAnnotation_ = value;
      } else {
        textAnnotationBuilder_.setMessage(value);
      }
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>.ssn.type.TextAnnotation text_annotation = 1 [json_name = "textAnnotation"];</code>
     */
    public Builder setTextAnnotation(
        ai.visma.ssn.type.TextAnnotation.Builder builderForValue) {
      if (textAnnotationBuilder_ == null) {
        textAnnotation_ = builderForValue.build();
      } else {
        textAnnotationBuilder_.setMessage(builderForValue.build());
      }
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>.ssn.type.TextAnnotation text_annotation = 1 [json_name = "textAnnotation"];</code>
     */
    public Builder mergeTextAnnotation(ai.visma.ssn.type.TextAnnotation value) {
      if (textAnnotationBuilder_ == null) {
        if (((bitField0_ & 0x00000001) != 0) &&
          textAnnotation_ != null &&
          textAnnotation_ != ai.visma.ssn.type.TextAnnotation.getDefaultInstance()) {
          getTextAnnotationBuilder().mergeFrom(value);
        } else {
          textAnnotation_ = value;
        }
      } else {
        textAnnotationBuilder_.mergeFrom(value);
      }
      if (textAnnotation_ != null) {
        bitField0_ |= 0x00000001;
        onChanged();
      }
      return this;
    }
    /**
     * <code>.ssn.type.TextAnnotation text_annotation = 1 [json_name = "textAnnotation"];</code>
     */
    public Builder clearTextAnnotation() {
      bitField0_ = (bitField0_ & ~0x00000001);
      textAnnotation_ = null;
      if (textAnnotationBuilder_ != null) {
        textAnnotationBuilder_.dispose();
        textAnnotationBuilder_ = null;
      }
      onChanged();
      return this;
    }
    /**
     * <code>.ssn.type.TextAnnotation text_annotation = 1 [json_name = "textAnnotation"];</code>
     */
    public ai.visma.ssn.type.TextAnnotation.Builder getTextAnnotationBuilder() {
      bitField0_ |= 0x00000001;
      onChanged();
      return getTextAnnotationFieldBuilder().getBuilder();
    }
    /**
     * <code>.ssn.type.TextAnnotation text_annotation = 1 [json_name = "textAnnotation"];</code>
     */
    public ai.visma.ssn.type.TextAnnotationOrBuilder getTextAnnotationOrBuilder() {
      if (textAnnotationBuilder_ != null) {
        return textAnnotationBuilder_.getMessageOrBuilder();
      } else {
        return textAnnotation_ == null ?
            ai.visma.ssn.type.TextAnnotation.getDefaultInstance() : textAnnotation_;
      }
    }
    /**
     * <code>.ssn.type.TextAnnotation text_annotation = 1 [json_name = "textAnnotation"];</code>
     */
    private com.google.protobuf.SingleFieldBuilder<
        ai.visma.ssn.type.TextAnnotation, ai.visma.ssn.type.TextAnnotation.Builder, ai.visma.ssn.type.TextAnnotationOrBuilder> 
        getTextAnnotationFieldBuilder() {
      if (textAnnotationBuilder_ == null) {
        textAnnotationBuilder_ = new com.google.protobuf.SingleFieldBuilder<
            ai.visma.ssn.type.TextAnnotation, ai.visma.ssn.type.TextAnnotation.Builder, ai.visma.ssn.type.TextAnnotationOrBuilder>(
                getTextAnnotation(),
                getParentForChildren(),
                isClean());
        textAnnotation_ = null;
      }
      return textAnnotationBuilder_;
    }

    private com.google.protobuf.ByteString image_ = com.google.protobuf.ByteString.EMPTY;
    /**
     * <code>bytes image = 2 [json_name = "image"];</code>
     * @return The image.
     */
    @java.lang.Override
    public com.google.protobuf.ByteString getImage() {
      return image_;
    }
    /**
     * <code>bytes image = 2 [json_name = "image"];</code>
     * @param value The image to set.
     * @return This builder for chaining.
     */
    public Builder setImage(com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      image_ = value;
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>bytes image = 2 [json_name = "image"];</code>
     * @return This builder for chaining.
     */
    public Builder clearImage() {
      bitField0_ = (bitField0_ & ~0x00000002);
      image_ = getDefaultInstance().getImage();
      onChanged();
      return this;
    }

    private com.google.protobuf.LazyStringArrayList questions_ =
        com.google.protobuf.LazyStringArrayList.emptyList();
    private void ensureQuestionsIsMutable() {
      if (!questions_.isModifiable()) {
        questions_ = new com.google.protobuf.LazyStringArrayList(questions_);
      }
      bitField0_ |= 0x00000004;
    }
    /**
     * <code>repeated string questions = 3 [json_name = "questions"];</code>
     * @return A list containing the questions.
     */
    public com.google.protobuf.ProtocolStringList
        getQuestionsList() {
      questions_.makeImmutable();
      return questions_;
    }
    /**
     * <code>repeated string questions = 3 [json_name = "questions"];</code>
     * @return The count of questions.
     */
    public int getQuestionsCount() {
      return questions_.size();
    }
    /**
     * <code>repeated string questions = 3 [json_name = "questions"];</code>
     * @param index The index of the element to return.
     * @return The questions at the given index.
     */
    public java.lang.String getQuestions(int index) {
      return questions_.get(index);
    }
    /**
     * <code>repeated string questions = 3 [json_name = "questions"];</code>
     * @param index The index of the value to return.
     * @return The bytes of the questions at the given index.
     */
    public com.google.protobuf.ByteString
        getQuestionsBytes(int index) {
      return questions_.getByteString(index);
    }
    /**
     * <code>repeated string questions = 3 [json_name = "questions"];</code>
     * @param index The index to set the value at.
     * @param value The questions to set.
     * @return This builder for chaining.
     */
    public Builder setQuestions(
        int index, java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      ensureQuestionsIsMutable();
      questions_.set(index, value);
      bitField0_ |= 0x00000004;
      onChanged();
      return this;
    }
    /**
     * <code>repeated string questions = 3 [json_name = "questions"];</code>
     * @param value The questions to add.
     * @return This builder for chaining.
     */
    public Builder addQuestions(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      ensureQuestionsIsMutable();
      questions_.add(value);
      bitField0_ |= 0x00000004;
      onChanged();
      return this;
    }
    /**
     * <code>repeated string questions = 3 [json_name = "questions"];</code>
     * @param values The questions to add.
     * @return This builder for chaining.
     */
    public Builder addAllQuestions(
        java.lang.Iterable<java.lang.String> values) {
      ensureQuestionsIsMutable();
      com.google.protobuf.AbstractMessageLite.Builder.addAll(
          values, questions_);
      bitField0_ |= 0x00000004;
      onChanged();
      return this;
    }
    /**
     * <code>repeated string questions = 3 [json_name = "questions"];</code>
     * @return This builder for chaining.
     */
    public Builder clearQuestions() {
      questions_ =
        com.google.protobuf.LazyStringArrayList.emptyList();
      bitField0_ = (bitField0_ & ~0x00000004);;
      onChanged();
      return this;
    }
    /**
     * <code>repeated string questions = 3 [json_name = "questions"];</code>
     * @param value The bytes of the questions to add.
     * @return This builder for chaining.
     */
    public Builder addQuestionsBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      ensureQuestionsIsMutable();
      questions_.add(value);
      bitField0_ |= 0x00000004;
      onChanged();
      return this;
    }

    // @@protoc_insertion_point(builder_scope:ssn.mlservice.v2.DocQARequest)
  }

  // @@protoc_insertion_point(class_scope:ssn.mlservice.v2.DocQARequest)
  private static final ai.visma.ssn.mlservice.v2.DocQARequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new ai.visma.ssn.mlservice.v2.DocQARequest();
  }

  public static ai.visma.ssn.mlservice.v2.DocQARequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<DocQARequest>
      PARSER = new com.google.protobuf.AbstractParser<DocQARequest>() {
    @java.lang.Override
    public DocQARequest parsePartialFrom(
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

  public static com.google.protobuf.Parser<DocQARequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<DocQARequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public ai.visma.ssn.mlservice.v2.DocQARequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

