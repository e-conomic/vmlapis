// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: asgt/type/sample.proto

package asgt.type;

public final class SampleOuterClass {
  private SampleOuterClass() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  public interface SampleOrBuilder extends
      // @@protoc_insertion_point(interface_extends:asgt.type.Sample)
      com.google.protobuf.MessageOrBuilder {

    /**
     * <code>.asgt.type.Data data = 1 [json_name = "data"];</code>
     * @return Whether the data field is set.
     */
    boolean hasData();
    /**
     * <code>.asgt.type.Data data = 1 [json_name = "data"];</code>
     * @return The data.
     */
    asgt.type.DataOuterClass.Data getData();
    /**
     * <code>.asgt.type.Data data = 1 [json_name = "data"];</code>
     */
    asgt.type.DataOuterClass.DataOrBuilder getDataOrBuilder();

    /**
     * <code>repeated .asgt.type.TargetValue target_values = 2 [json_name = "targetValues"];</code>
     */
    java.util.List<asgt.type.TargetValueOuterClass.TargetValue> 
        getTargetValuesList();
    /**
     * <code>repeated .asgt.type.TargetValue target_values = 2 [json_name = "targetValues"];</code>
     */
    asgt.type.TargetValueOuterClass.TargetValue getTargetValues(int index);
    /**
     * <code>repeated .asgt.type.TargetValue target_values = 2 [json_name = "targetValues"];</code>
     */
    int getTargetValuesCount();
    /**
     * <code>repeated .asgt.type.TargetValue target_values = 2 [json_name = "targetValues"];</code>
     */
    java.util.List<? extends asgt.type.TargetValueOuterClass.TargetValueOrBuilder> 
        getTargetValuesOrBuilderList();
    /**
     * <code>repeated .asgt.type.TargetValue target_values = 2 [json_name = "targetValues"];</code>
     */
    asgt.type.TargetValueOuterClass.TargetValueOrBuilder getTargetValuesOrBuilder(
        int index);
  }
  /**
   * Protobuf type {@code asgt.type.Sample}
   */
  public static final class Sample extends
      com.google.protobuf.GeneratedMessageV3 implements
      // @@protoc_insertion_point(message_implements:asgt.type.Sample)
      SampleOrBuilder {
  private static final long serialVersionUID = 0L;
    // Use Sample.newBuilder() to construct.
    private Sample(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
      super(builder);
    }
    private Sample() {
      targetValues_ = java.util.Collections.emptyList();
    }

    @java.lang.Override
    @SuppressWarnings({"unused"})
    protected java.lang.Object newInstance(
        UnusedPrivateParameter unused) {
      return new Sample();
    }

    @java.lang.Override
    public final com.google.protobuf.UnknownFieldSet
    getUnknownFields() {
      return this.unknownFields;
    }
    private Sample(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      this();
      if (extensionRegistry == null) {
        throw new java.lang.NullPointerException();
      }
      int mutable_bitField0_ = 0;
      com.google.protobuf.UnknownFieldSet.Builder unknownFields =
          com.google.protobuf.UnknownFieldSet.newBuilder();
      try {
        boolean done = false;
        while (!done) {
          int tag = input.readTag();
          switch (tag) {
            case 0:
              done = true;
              break;
            case 10: {
              asgt.type.DataOuterClass.Data.Builder subBuilder = null;
              if (data_ != null) {
                subBuilder = data_.toBuilder();
              }
              data_ = input.readMessage(asgt.type.DataOuterClass.Data.parser(), extensionRegistry);
              if (subBuilder != null) {
                subBuilder.mergeFrom(data_);
                data_ = subBuilder.buildPartial();
              }

              break;
            }
            case 18: {
              if (!((mutable_bitField0_ & 0x00000001) != 0)) {
                targetValues_ = new java.util.ArrayList<asgt.type.TargetValueOuterClass.TargetValue>();
                mutable_bitField0_ |= 0x00000001;
              }
              targetValues_.add(
                  input.readMessage(asgt.type.TargetValueOuterClass.TargetValue.parser(), extensionRegistry));
              break;
            }
            default: {
              if (!parseUnknownField(
                  input, unknownFields, extensionRegistry, tag)) {
                done = true;
              }
              break;
            }
          }
        }
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        throw e.setUnfinishedMessage(this);
      } catch (com.google.protobuf.UninitializedMessageException e) {
        throw e.asInvalidProtocolBufferException().setUnfinishedMessage(this);
      } catch (java.io.IOException e) {
        throw new com.google.protobuf.InvalidProtocolBufferException(
            e).setUnfinishedMessage(this);
      } finally {
        if (((mutable_bitField0_ & 0x00000001) != 0)) {
          targetValues_ = java.util.Collections.unmodifiableList(targetValues_);
        }
        this.unknownFields = unknownFields.build();
        makeExtensionsImmutable();
      }
    }
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return asgt.type.SampleOuterClass.internal_static_asgt_type_Sample_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return asgt.type.SampleOuterClass.internal_static_asgt_type_Sample_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              asgt.type.SampleOuterClass.Sample.class, asgt.type.SampleOuterClass.Sample.Builder.class);
    }

    public static final int DATA_FIELD_NUMBER = 1;
    private asgt.type.DataOuterClass.Data data_;
    /**
     * <code>.asgt.type.Data data = 1 [json_name = "data"];</code>
     * @return Whether the data field is set.
     */
    @java.lang.Override
    public boolean hasData() {
      return data_ != null;
    }
    /**
     * <code>.asgt.type.Data data = 1 [json_name = "data"];</code>
     * @return The data.
     */
    @java.lang.Override
    public asgt.type.DataOuterClass.Data getData() {
      return data_ == null ? asgt.type.DataOuterClass.Data.getDefaultInstance() : data_;
    }
    /**
     * <code>.asgt.type.Data data = 1 [json_name = "data"];</code>
     */
    @java.lang.Override
    public asgt.type.DataOuterClass.DataOrBuilder getDataOrBuilder() {
      return getData();
    }

    public static final int TARGET_VALUES_FIELD_NUMBER = 2;
    private java.util.List<asgt.type.TargetValueOuterClass.TargetValue> targetValues_;
    /**
     * <code>repeated .asgt.type.TargetValue target_values = 2 [json_name = "targetValues"];</code>
     */
    @java.lang.Override
    public java.util.List<asgt.type.TargetValueOuterClass.TargetValue> getTargetValuesList() {
      return targetValues_;
    }
    /**
     * <code>repeated .asgt.type.TargetValue target_values = 2 [json_name = "targetValues"];</code>
     */
    @java.lang.Override
    public java.util.List<? extends asgt.type.TargetValueOuterClass.TargetValueOrBuilder> 
        getTargetValuesOrBuilderList() {
      return targetValues_;
    }
    /**
     * <code>repeated .asgt.type.TargetValue target_values = 2 [json_name = "targetValues"];</code>
     */
    @java.lang.Override
    public int getTargetValuesCount() {
      return targetValues_.size();
    }
    /**
     * <code>repeated .asgt.type.TargetValue target_values = 2 [json_name = "targetValues"];</code>
     */
    @java.lang.Override
    public asgt.type.TargetValueOuterClass.TargetValue getTargetValues(int index) {
      return targetValues_.get(index);
    }
    /**
     * <code>repeated .asgt.type.TargetValue target_values = 2 [json_name = "targetValues"];</code>
     */
    @java.lang.Override
    public asgt.type.TargetValueOuterClass.TargetValueOrBuilder getTargetValuesOrBuilder(
        int index) {
      return targetValues_.get(index);
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
      if (data_ != null) {
        output.writeMessage(1, getData());
      }
      for (int i = 0; i < targetValues_.size(); i++) {
        output.writeMessage(2, targetValues_.get(i));
      }
      unknownFields.writeTo(output);
    }

    @java.lang.Override
    public int getSerializedSize() {
      int size = memoizedSize;
      if (size != -1) return size;

      size = 0;
      if (data_ != null) {
        size += com.google.protobuf.CodedOutputStream
          .computeMessageSize(1, getData());
      }
      for (int i = 0; i < targetValues_.size(); i++) {
        size += com.google.protobuf.CodedOutputStream
          .computeMessageSize(2, targetValues_.get(i));
      }
      size += unknownFields.getSerializedSize();
      memoizedSize = size;
      return size;
    }

    @java.lang.Override
    public boolean equals(final java.lang.Object obj) {
      if (obj == this) {
       return true;
      }
      if (!(obj instanceof asgt.type.SampleOuterClass.Sample)) {
        return super.equals(obj);
      }
      asgt.type.SampleOuterClass.Sample other = (asgt.type.SampleOuterClass.Sample) obj;

      if (hasData() != other.hasData()) return false;
      if (hasData()) {
        if (!getData()
            .equals(other.getData())) return false;
      }
      if (!getTargetValuesList()
          .equals(other.getTargetValuesList())) return false;
      if (!unknownFields.equals(other.unknownFields)) return false;
      return true;
    }

    @java.lang.Override
    public int hashCode() {
      if (memoizedHashCode != 0) {
        return memoizedHashCode;
      }
      int hash = 41;
      hash = (19 * hash) + getDescriptor().hashCode();
      if (hasData()) {
        hash = (37 * hash) + DATA_FIELD_NUMBER;
        hash = (53 * hash) + getData().hashCode();
      }
      if (getTargetValuesCount() > 0) {
        hash = (37 * hash) + TARGET_VALUES_FIELD_NUMBER;
        hash = (53 * hash) + getTargetValuesList().hashCode();
      }
      hash = (29 * hash) + unknownFields.hashCode();
      memoizedHashCode = hash;
      return hash;
    }

    public static asgt.type.SampleOuterClass.Sample parseFrom(
        java.nio.ByteBuffer data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static asgt.type.SampleOuterClass.Sample parseFrom(
        java.nio.ByteBuffer data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static asgt.type.SampleOuterClass.Sample parseFrom(
        com.google.protobuf.ByteString data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static asgt.type.SampleOuterClass.Sample parseFrom(
        com.google.protobuf.ByteString data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static asgt.type.SampleOuterClass.Sample parseFrom(byte[] data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static asgt.type.SampleOuterClass.Sample parseFrom(
        byte[] data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static asgt.type.SampleOuterClass.Sample parseFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static asgt.type.SampleOuterClass.Sample parseFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input, extensionRegistry);
    }
    public static asgt.type.SampleOuterClass.Sample parseDelimitedFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input);
    }
    public static asgt.type.SampleOuterClass.Sample parseDelimitedFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
    }
    public static asgt.type.SampleOuterClass.Sample parseFrom(
        com.google.protobuf.CodedInputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static asgt.type.SampleOuterClass.Sample parseFrom(
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
    public static Builder newBuilder(asgt.type.SampleOuterClass.Sample prototype) {
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
     * Protobuf type {@code asgt.type.Sample}
     */
    public static final class Builder extends
        com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
        // @@protoc_insertion_point(builder_implements:asgt.type.Sample)
        asgt.type.SampleOuterClass.SampleOrBuilder {
      public static final com.google.protobuf.Descriptors.Descriptor
          getDescriptor() {
        return asgt.type.SampleOuterClass.internal_static_asgt_type_Sample_descriptor;
      }

      @java.lang.Override
      protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
          internalGetFieldAccessorTable() {
        return asgt.type.SampleOuterClass.internal_static_asgt_type_Sample_fieldAccessorTable
            .ensureFieldAccessorsInitialized(
                asgt.type.SampleOuterClass.Sample.class, asgt.type.SampleOuterClass.Sample.Builder.class);
      }

      // Construct using asgt.type.SampleOuterClass.Sample.newBuilder()
      private Builder() {
        maybeForceBuilderInitialization();
      }

      private Builder(
          com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
        super(parent);
        maybeForceBuilderInitialization();
      }
      private void maybeForceBuilderInitialization() {
        if (com.google.protobuf.GeneratedMessageV3
                .alwaysUseFieldBuilders) {
          getTargetValuesFieldBuilder();
        }
      }
      @java.lang.Override
      public Builder clear() {
        super.clear();
        if (dataBuilder_ == null) {
          data_ = null;
        } else {
          data_ = null;
          dataBuilder_ = null;
        }
        if (targetValuesBuilder_ == null) {
          targetValues_ = java.util.Collections.emptyList();
          bitField0_ = (bitField0_ & ~0x00000001);
        } else {
          targetValuesBuilder_.clear();
        }
        return this;
      }

      @java.lang.Override
      public com.google.protobuf.Descriptors.Descriptor
          getDescriptorForType() {
        return asgt.type.SampleOuterClass.internal_static_asgt_type_Sample_descriptor;
      }

      @java.lang.Override
      public asgt.type.SampleOuterClass.Sample getDefaultInstanceForType() {
        return asgt.type.SampleOuterClass.Sample.getDefaultInstance();
      }

      @java.lang.Override
      public asgt.type.SampleOuterClass.Sample build() {
        asgt.type.SampleOuterClass.Sample result = buildPartial();
        if (!result.isInitialized()) {
          throw newUninitializedMessageException(result);
        }
        return result;
      }

      @java.lang.Override
      public asgt.type.SampleOuterClass.Sample buildPartial() {
        asgt.type.SampleOuterClass.Sample result = new asgt.type.SampleOuterClass.Sample(this);
        int from_bitField0_ = bitField0_;
        if (dataBuilder_ == null) {
          result.data_ = data_;
        } else {
          result.data_ = dataBuilder_.build();
        }
        if (targetValuesBuilder_ == null) {
          if (((bitField0_ & 0x00000001) != 0)) {
            targetValues_ = java.util.Collections.unmodifiableList(targetValues_);
            bitField0_ = (bitField0_ & ~0x00000001);
          }
          result.targetValues_ = targetValues_;
        } else {
          result.targetValues_ = targetValuesBuilder_.build();
        }
        onBuilt();
        return result;
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
        if (other instanceof asgt.type.SampleOuterClass.Sample) {
          return mergeFrom((asgt.type.SampleOuterClass.Sample)other);
        } else {
          super.mergeFrom(other);
          return this;
        }
      }

      public Builder mergeFrom(asgt.type.SampleOuterClass.Sample other) {
        if (other == asgt.type.SampleOuterClass.Sample.getDefaultInstance()) return this;
        if (other.hasData()) {
          mergeData(other.getData());
        }
        if (targetValuesBuilder_ == null) {
          if (!other.targetValues_.isEmpty()) {
            if (targetValues_.isEmpty()) {
              targetValues_ = other.targetValues_;
              bitField0_ = (bitField0_ & ~0x00000001);
            } else {
              ensureTargetValuesIsMutable();
              targetValues_.addAll(other.targetValues_);
            }
            onChanged();
          }
        } else {
          if (!other.targetValues_.isEmpty()) {
            if (targetValuesBuilder_.isEmpty()) {
              targetValuesBuilder_.dispose();
              targetValuesBuilder_ = null;
              targetValues_ = other.targetValues_;
              bitField0_ = (bitField0_ & ~0x00000001);
              targetValuesBuilder_ = 
                com.google.protobuf.GeneratedMessageV3.alwaysUseFieldBuilders ?
                   getTargetValuesFieldBuilder() : null;
            } else {
              targetValuesBuilder_.addAllMessages(other.targetValues_);
            }
          }
        }
        this.mergeUnknownFields(other.unknownFields);
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
        asgt.type.SampleOuterClass.Sample parsedMessage = null;
        try {
          parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
        } catch (com.google.protobuf.InvalidProtocolBufferException e) {
          parsedMessage = (asgt.type.SampleOuterClass.Sample) e.getUnfinishedMessage();
          throw e.unwrapIOException();
        } finally {
          if (parsedMessage != null) {
            mergeFrom(parsedMessage);
          }
        }
        return this;
      }
      private int bitField0_;

      private asgt.type.DataOuterClass.Data data_;
      private com.google.protobuf.SingleFieldBuilderV3<
          asgt.type.DataOuterClass.Data, asgt.type.DataOuterClass.Data.Builder, asgt.type.DataOuterClass.DataOrBuilder> dataBuilder_;
      /**
       * <code>.asgt.type.Data data = 1 [json_name = "data"];</code>
       * @return Whether the data field is set.
       */
      public boolean hasData() {
        return dataBuilder_ != null || data_ != null;
      }
      /**
       * <code>.asgt.type.Data data = 1 [json_name = "data"];</code>
       * @return The data.
       */
      public asgt.type.DataOuterClass.Data getData() {
        if (dataBuilder_ == null) {
          return data_ == null ? asgt.type.DataOuterClass.Data.getDefaultInstance() : data_;
        } else {
          return dataBuilder_.getMessage();
        }
      }
      /**
       * <code>.asgt.type.Data data = 1 [json_name = "data"];</code>
       */
      public Builder setData(asgt.type.DataOuterClass.Data value) {
        if (dataBuilder_ == null) {
          if (value == null) {
            throw new NullPointerException();
          }
          data_ = value;
          onChanged();
        } else {
          dataBuilder_.setMessage(value);
        }

        return this;
      }
      /**
       * <code>.asgt.type.Data data = 1 [json_name = "data"];</code>
       */
      public Builder setData(
          asgt.type.DataOuterClass.Data.Builder builderForValue) {
        if (dataBuilder_ == null) {
          data_ = builderForValue.build();
          onChanged();
        } else {
          dataBuilder_.setMessage(builderForValue.build());
        }

        return this;
      }
      /**
       * <code>.asgt.type.Data data = 1 [json_name = "data"];</code>
       */
      public Builder mergeData(asgt.type.DataOuterClass.Data value) {
        if (dataBuilder_ == null) {
          if (data_ != null) {
            data_ =
              asgt.type.DataOuterClass.Data.newBuilder(data_).mergeFrom(value).buildPartial();
          } else {
            data_ = value;
          }
          onChanged();
        } else {
          dataBuilder_.mergeFrom(value);
        }

        return this;
      }
      /**
       * <code>.asgt.type.Data data = 1 [json_name = "data"];</code>
       */
      public Builder clearData() {
        if (dataBuilder_ == null) {
          data_ = null;
          onChanged();
        } else {
          data_ = null;
          dataBuilder_ = null;
        }

        return this;
      }
      /**
       * <code>.asgt.type.Data data = 1 [json_name = "data"];</code>
       */
      public asgt.type.DataOuterClass.Data.Builder getDataBuilder() {
        
        onChanged();
        return getDataFieldBuilder().getBuilder();
      }
      /**
       * <code>.asgt.type.Data data = 1 [json_name = "data"];</code>
       */
      public asgt.type.DataOuterClass.DataOrBuilder getDataOrBuilder() {
        if (dataBuilder_ != null) {
          return dataBuilder_.getMessageOrBuilder();
        } else {
          return data_ == null ?
              asgt.type.DataOuterClass.Data.getDefaultInstance() : data_;
        }
      }
      /**
       * <code>.asgt.type.Data data = 1 [json_name = "data"];</code>
       */
      private com.google.protobuf.SingleFieldBuilderV3<
          asgt.type.DataOuterClass.Data, asgt.type.DataOuterClass.Data.Builder, asgt.type.DataOuterClass.DataOrBuilder> 
          getDataFieldBuilder() {
        if (dataBuilder_ == null) {
          dataBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
              asgt.type.DataOuterClass.Data, asgt.type.DataOuterClass.Data.Builder, asgt.type.DataOuterClass.DataOrBuilder>(
                  getData(),
                  getParentForChildren(),
                  isClean());
          data_ = null;
        }
        return dataBuilder_;
      }

      private java.util.List<asgt.type.TargetValueOuterClass.TargetValue> targetValues_ =
        java.util.Collections.emptyList();
      private void ensureTargetValuesIsMutable() {
        if (!((bitField0_ & 0x00000001) != 0)) {
          targetValues_ = new java.util.ArrayList<asgt.type.TargetValueOuterClass.TargetValue>(targetValues_);
          bitField0_ |= 0x00000001;
         }
      }

      private com.google.protobuf.RepeatedFieldBuilderV3<
          asgt.type.TargetValueOuterClass.TargetValue, asgt.type.TargetValueOuterClass.TargetValue.Builder, asgt.type.TargetValueOuterClass.TargetValueOrBuilder> targetValuesBuilder_;

      /**
       * <code>repeated .asgt.type.TargetValue target_values = 2 [json_name = "targetValues"];</code>
       */
      public java.util.List<asgt.type.TargetValueOuterClass.TargetValue> getTargetValuesList() {
        if (targetValuesBuilder_ == null) {
          return java.util.Collections.unmodifiableList(targetValues_);
        } else {
          return targetValuesBuilder_.getMessageList();
        }
      }
      /**
       * <code>repeated .asgt.type.TargetValue target_values = 2 [json_name = "targetValues"];</code>
       */
      public int getTargetValuesCount() {
        if (targetValuesBuilder_ == null) {
          return targetValues_.size();
        } else {
          return targetValuesBuilder_.getCount();
        }
      }
      /**
       * <code>repeated .asgt.type.TargetValue target_values = 2 [json_name = "targetValues"];</code>
       */
      public asgt.type.TargetValueOuterClass.TargetValue getTargetValues(int index) {
        if (targetValuesBuilder_ == null) {
          return targetValues_.get(index);
        } else {
          return targetValuesBuilder_.getMessage(index);
        }
      }
      /**
       * <code>repeated .asgt.type.TargetValue target_values = 2 [json_name = "targetValues"];</code>
       */
      public Builder setTargetValues(
          int index, asgt.type.TargetValueOuterClass.TargetValue value) {
        if (targetValuesBuilder_ == null) {
          if (value == null) {
            throw new NullPointerException();
          }
          ensureTargetValuesIsMutable();
          targetValues_.set(index, value);
          onChanged();
        } else {
          targetValuesBuilder_.setMessage(index, value);
        }
        return this;
      }
      /**
       * <code>repeated .asgt.type.TargetValue target_values = 2 [json_name = "targetValues"];</code>
       */
      public Builder setTargetValues(
          int index, asgt.type.TargetValueOuterClass.TargetValue.Builder builderForValue) {
        if (targetValuesBuilder_ == null) {
          ensureTargetValuesIsMutable();
          targetValues_.set(index, builderForValue.build());
          onChanged();
        } else {
          targetValuesBuilder_.setMessage(index, builderForValue.build());
        }
        return this;
      }
      /**
       * <code>repeated .asgt.type.TargetValue target_values = 2 [json_name = "targetValues"];</code>
       */
      public Builder addTargetValues(asgt.type.TargetValueOuterClass.TargetValue value) {
        if (targetValuesBuilder_ == null) {
          if (value == null) {
            throw new NullPointerException();
          }
          ensureTargetValuesIsMutable();
          targetValues_.add(value);
          onChanged();
        } else {
          targetValuesBuilder_.addMessage(value);
        }
        return this;
      }
      /**
       * <code>repeated .asgt.type.TargetValue target_values = 2 [json_name = "targetValues"];</code>
       */
      public Builder addTargetValues(
          int index, asgt.type.TargetValueOuterClass.TargetValue value) {
        if (targetValuesBuilder_ == null) {
          if (value == null) {
            throw new NullPointerException();
          }
          ensureTargetValuesIsMutable();
          targetValues_.add(index, value);
          onChanged();
        } else {
          targetValuesBuilder_.addMessage(index, value);
        }
        return this;
      }
      /**
       * <code>repeated .asgt.type.TargetValue target_values = 2 [json_name = "targetValues"];</code>
       */
      public Builder addTargetValues(
          asgt.type.TargetValueOuterClass.TargetValue.Builder builderForValue) {
        if (targetValuesBuilder_ == null) {
          ensureTargetValuesIsMutable();
          targetValues_.add(builderForValue.build());
          onChanged();
        } else {
          targetValuesBuilder_.addMessage(builderForValue.build());
        }
        return this;
      }
      /**
       * <code>repeated .asgt.type.TargetValue target_values = 2 [json_name = "targetValues"];</code>
       */
      public Builder addTargetValues(
          int index, asgt.type.TargetValueOuterClass.TargetValue.Builder builderForValue) {
        if (targetValuesBuilder_ == null) {
          ensureTargetValuesIsMutable();
          targetValues_.add(index, builderForValue.build());
          onChanged();
        } else {
          targetValuesBuilder_.addMessage(index, builderForValue.build());
        }
        return this;
      }
      /**
       * <code>repeated .asgt.type.TargetValue target_values = 2 [json_name = "targetValues"];</code>
       */
      public Builder addAllTargetValues(
          java.lang.Iterable<? extends asgt.type.TargetValueOuterClass.TargetValue> values) {
        if (targetValuesBuilder_ == null) {
          ensureTargetValuesIsMutable();
          com.google.protobuf.AbstractMessageLite.Builder.addAll(
              values, targetValues_);
          onChanged();
        } else {
          targetValuesBuilder_.addAllMessages(values);
        }
        return this;
      }
      /**
       * <code>repeated .asgt.type.TargetValue target_values = 2 [json_name = "targetValues"];</code>
       */
      public Builder clearTargetValues() {
        if (targetValuesBuilder_ == null) {
          targetValues_ = java.util.Collections.emptyList();
          bitField0_ = (bitField0_ & ~0x00000001);
          onChanged();
        } else {
          targetValuesBuilder_.clear();
        }
        return this;
      }
      /**
       * <code>repeated .asgt.type.TargetValue target_values = 2 [json_name = "targetValues"];</code>
       */
      public Builder removeTargetValues(int index) {
        if (targetValuesBuilder_ == null) {
          ensureTargetValuesIsMutable();
          targetValues_.remove(index);
          onChanged();
        } else {
          targetValuesBuilder_.remove(index);
        }
        return this;
      }
      /**
       * <code>repeated .asgt.type.TargetValue target_values = 2 [json_name = "targetValues"];</code>
       */
      public asgt.type.TargetValueOuterClass.TargetValue.Builder getTargetValuesBuilder(
          int index) {
        return getTargetValuesFieldBuilder().getBuilder(index);
      }
      /**
       * <code>repeated .asgt.type.TargetValue target_values = 2 [json_name = "targetValues"];</code>
       */
      public asgt.type.TargetValueOuterClass.TargetValueOrBuilder getTargetValuesOrBuilder(
          int index) {
        if (targetValuesBuilder_ == null) {
          return targetValues_.get(index);  } else {
          return targetValuesBuilder_.getMessageOrBuilder(index);
        }
      }
      /**
       * <code>repeated .asgt.type.TargetValue target_values = 2 [json_name = "targetValues"];</code>
       */
      public java.util.List<? extends asgt.type.TargetValueOuterClass.TargetValueOrBuilder> 
           getTargetValuesOrBuilderList() {
        if (targetValuesBuilder_ != null) {
          return targetValuesBuilder_.getMessageOrBuilderList();
        } else {
          return java.util.Collections.unmodifiableList(targetValues_);
        }
      }
      /**
       * <code>repeated .asgt.type.TargetValue target_values = 2 [json_name = "targetValues"];</code>
       */
      public asgt.type.TargetValueOuterClass.TargetValue.Builder addTargetValuesBuilder() {
        return getTargetValuesFieldBuilder().addBuilder(
            asgt.type.TargetValueOuterClass.TargetValue.getDefaultInstance());
      }
      /**
       * <code>repeated .asgt.type.TargetValue target_values = 2 [json_name = "targetValues"];</code>
       */
      public asgt.type.TargetValueOuterClass.TargetValue.Builder addTargetValuesBuilder(
          int index) {
        return getTargetValuesFieldBuilder().addBuilder(
            index, asgt.type.TargetValueOuterClass.TargetValue.getDefaultInstance());
      }
      /**
       * <code>repeated .asgt.type.TargetValue target_values = 2 [json_name = "targetValues"];</code>
       */
      public java.util.List<asgt.type.TargetValueOuterClass.TargetValue.Builder> 
           getTargetValuesBuilderList() {
        return getTargetValuesFieldBuilder().getBuilderList();
      }
      private com.google.protobuf.RepeatedFieldBuilderV3<
          asgt.type.TargetValueOuterClass.TargetValue, asgt.type.TargetValueOuterClass.TargetValue.Builder, asgt.type.TargetValueOuterClass.TargetValueOrBuilder> 
          getTargetValuesFieldBuilder() {
        if (targetValuesBuilder_ == null) {
          targetValuesBuilder_ = new com.google.protobuf.RepeatedFieldBuilderV3<
              asgt.type.TargetValueOuterClass.TargetValue, asgt.type.TargetValueOuterClass.TargetValue.Builder, asgt.type.TargetValueOuterClass.TargetValueOrBuilder>(
                  targetValues_,
                  ((bitField0_ & 0x00000001) != 0),
                  getParentForChildren(),
                  isClean());
          targetValues_ = null;
        }
        return targetValuesBuilder_;
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


      // @@protoc_insertion_point(builder_scope:asgt.type.Sample)
    }

    // @@protoc_insertion_point(class_scope:asgt.type.Sample)
    private static final asgt.type.SampleOuterClass.Sample DEFAULT_INSTANCE;
    static {
      DEFAULT_INSTANCE = new asgt.type.SampleOuterClass.Sample();
    }

    public static asgt.type.SampleOuterClass.Sample getDefaultInstance() {
      return DEFAULT_INSTANCE;
    }

    private static final com.google.protobuf.Parser<Sample>
        PARSER = new com.google.protobuf.AbstractParser<Sample>() {
      @java.lang.Override
      public Sample parsePartialFrom(
          com.google.protobuf.CodedInputStream input,
          com.google.protobuf.ExtensionRegistryLite extensionRegistry)
          throws com.google.protobuf.InvalidProtocolBufferException {
        return new Sample(input, extensionRegistry);
      }
    };

    public static com.google.protobuf.Parser<Sample> parser() {
      return PARSER;
    }

    @java.lang.Override
    public com.google.protobuf.Parser<Sample> getParserForType() {
      return PARSER;
    }

    @java.lang.Override
    public asgt.type.SampleOuterClass.Sample getDefaultInstanceForType() {
      return DEFAULT_INSTANCE;
    }

  }

  private static final com.google.protobuf.Descriptors.Descriptor
    internal_static_asgt_type_Sample_descriptor;
  private static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_asgt_type_Sample_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\026asgt/type/sample.proto\022\tasgt.type\032\024asg" +
      "t/type/data.proto\032\034asgt/type/target_valu" +
      "e.proto\"j\n\006Sample\022#\n\004data\030\001 \001(\0132\017.asgt.t" +
      "ype.DataR\004data\022;\n\rtarget_values\030\002 \003(\0132\026." +
      "asgt.type.TargetValueR\014targetValuesB8Z6g" +
      "ithub.com/e-conomic/vmlapis/gen/go/asgt/" +
      "type;asgttypeb\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          asgt.type.DataOuterClass.getDescriptor(),
          asgt.type.TargetValueOuterClass.getDescriptor(),
        });
    internal_static_asgt_type_Sample_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_asgt_type_Sample_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_asgt_type_Sample_descriptor,
        new java.lang.String[] { "Data", "TargetValues", });
    asgt.type.DataOuterClass.getDescriptor();
    asgt.type.TargetValueOuterClass.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}
