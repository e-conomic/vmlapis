// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: ssn/pdfservice/v1/pdfservice.proto
// Protobuf Java Version: 4.29.3

package ai.visma.ssn.pdfservice.v1;

/**
 * Protobuf type {@code ssn.pdfservice.v1.RasterizePdfRequest}
 */
public final class RasterizePdfRequest extends
    com.google.protobuf.GeneratedMessage implements
    // @@protoc_insertion_point(message_implements:ssn.pdfservice.v1.RasterizePdfRequest)
    RasterizePdfRequestOrBuilder {
private static final long serialVersionUID = 0L;
  static {
    com.google.protobuf.RuntimeVersion.validateProtobufGencodeVersion(
      com.google.protobuf.RuntimeVersion.RuntimeDomain.PUBLIC,
      /* major= */ 4,
      /* minor= */ 29,
      /* patch= */ 3,
      /* suffix= */ "",
      RasterizePdfRequest.class.getName());
  }
  // Use RasterizePdfRequest.newBuilder() to construct.
  private RasterizePdfRequest(com.google.protobuf.GeneratedMessage.Builder<?> builder) {
    super(builder);
  }
  private RasterizePdfRequest() {
    data_ = com.google.protobuf.ByteString.EMPTY;
    format_ = 0;
    color_ = 0;
    pages_ = 0;
  }

  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return ai.visma.ssn.pdfservice.v1.PdfserviceProto.internal_static_ssn_pdfservice_v1_RasterizePdfRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return ai.visma.ssn.pdfservice.v1.PdfserviceProto.internal_static_ssn_pdfservice_v1_RasterizePdfRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.class, ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.Builder.class);
  }

  /**
   * Protobuf enum {@code ssn.pdfservice.v1.RasterizePdfRequest.Format}
   */
  public enum Format
      implements com.google.protobuf.ProtocolMessageEnum {
    /**
     * <code>PNG = 0;</code>
     */
    PNG(0),
    /**
     * <code>JPEG = 1;</code>
     */
    JPEG(1),
    /**
     * <code>WEBP = 2;</code>
     */
    WEBP(2),
    UNRECOGNIZED(-1),
    ;

    static {
      com.google.protobuf.RuntimeVersion.validateProtobufGencodeVersion(
        com.google.protobuf.RuntimeVersion.RuntimeDomain.PUBLIC,
        /* major= */ 4,
        /* minor= */ 29,
        /* patch= */ 3,
        /* suffix= */ "",
        Format.class.getName());
    }
    /**
     * <code>PNG = 0;</code>
     */
    public static final int PNG_VALUE = 0;
    /**
     * <code>JPEG = 1;</code>
     */
    public static final int JPEG_VALUE = 1;
    /**
     * <code>WEBP = 2;</code>
     */
    public static final int WEBP_VALUE = 2;


    public final int getNumber() {
      if (this == UNRECOGNIZED) {
        throw new java.lang.IllegalArgumentException(
            "Can't get the number of an unknown enum value.");
      }
      return value;
    }

    /**
     * @param value The numeric wire value of the corresponding enum entry.
     * @return The enum associated with the given numeric wire value.
     * @deprecated Use {@link #forNumber(int)} instead.
     */
    @java.lang.Deprecated
    public static Format valueOf(int value) {
      return forNumber(value);
    }

    /**
     * @param value The numeric wire value of the corresponding enum entry.
     * @return The enum associated with the given numeric wire value.
     */
    public static Format forNumber(int value) {
      switch (value) {
        case 0: return PNG;
        case 1: return JPEG;
        case 2: return WEBP;
        default: return null;
      }
    }

    public static com.google.protobuf.Internal.EnumLiteMap<Format>
        internalGetValueMap() {
      return internalValueMap;
    }
    private static final com.google.protobuf.Internal.EnumLiteMap<
        Format> internalValueMap =
          new com.google.protobuf.Internal.EnumLiteMap<Format>() {
            public Format findValueByNumber(int number) {
              return Format.forNumber(number);
            }
          };

    public final com.google.protobuf.Descriptors.EnumValueDescriptor
        getValueDescriptor() {
      if (this == UNRECOGNIZED) {
        throw new java.lang.IllegalStateException(
            "Can't get the descriptor of an unrecognized enum value.");
      }
      return getDescriptor().getValues().get(ordinal());
    }
    public final com.google.protobuf.Descriptors.EnumDescriptor
        getDescriptorForType() {
      return getDescriptor();
    }
    public static final com.google.protobuf.Descriptors.EnumDescriptor
        getDescriptor() {
      return ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.getDescriptor().getEnumTypes().get(0);
    }

    private static final Format[] VALUES = values();

    public static Format valueOf(
        com.google.protobuf.Descriptors.EnumValueDescriptor desc) {
      if (desc.getType() != getDescriptor()) {
        throw new java.lang.IllegalArgumentException(
          "EnumValueDescriptor is not for this type.");
      }
      if (desc.getIndex() == -1) {
        return UNRECOGNIZED;
      }
      return VALUES[desc.getIndex()];
    }

    private final int value;

    private Format(int value) {
      this.value = value;
    }

    // @@protoc_insertion_point(enum_scope:ssn.pdfservice.v1.RasterizePdfRequest.Format)
  }

  /**
   * Protobuf enum {@code ssn.pdfservice.v1.RasterizePdfRequest.ColorSpace}
   */
  public enum ColorSpace
      implements com.google.protobuf.ProtocolMessageEnum {
    /**
     * <code>GRAY = 0;</code>
     */
    GRAY(0),
    /**
     * <code>COLOR = 1;</code>
     */
    COLOR(1),
    UNRECOGNIZED(-1),
    ;

    static {
      com.google.protobuf.RuntimeVersion.validateProtobufGencodeVersion(
        com.google.protobuf.RuntimeVersion.RuntimeDomain.PUBLIC,
        /* major= */ 4,
        /* minor= */ 29,
        /* patch= */ 3,
        /* suffix= */ "",
        ColorSpace.class.getName());
    }
    /**
     * <code>GRAY = 0;</code>
     */
    public static final int GRAY_VALUE = 0;
    /**
     * <code>COLOR = 1;</code>
     */
    public static final int COLOR_VALUE = 1;


    public final int getNumber() {
      if (this == UNRECOGNIZED) {
        throw new java.lang.IllegalArgumentException(
            "Can't get the number of an unknown enum value.");
      }
      return value;
    }

    /**
     * @param value The numeric wire value of the corresponding enum entry.
     * @return The enum associated with the given numeric wire value.
     * @deprecated Use {@link #forNumber(int)} instead.
     */
    @java.lang.Deprecated
    public static ColorSpace valueOf(int value) {
      return forNumber(value);
    }

    /**
     * @param value The numeric wire value of the corresponding enum entry.
     * @return The enum associated with the given numeric wire value.
     */
    public static ColorSpace forNumber(int value) {
      switch (value) {
        case 0: return GRAY;
        case 1: return COLOR;
        default: return null;
      }
    }

    public static com.google.protobuf.Internal.EnumLiteMap<ColorSpace>
        internalGetValueMap() {
      return internalValueMap;
    }
    private static final com.google.protobuf.Internal.EnumLiteMap<
        ColorSpace> internalValueMap =
          new com.google.protobuf.Internal.EnumLiteMap<ColorSpace>() {
            public ColorSpace findValueByNumber(int number) {
              return ColorSpace.forNumber(number);
            }
          };

    public final com.google.protobuf.Descriptors.EnumValueDescriptor
        getValueDescriptor() {
      if (this == UNRECOGNIZED) {
        throw new java.lang.IllegalStateException(
            "Can't get the descriptor of an unrecognized enum value.");
      }
      return getDescriptor().getValues().get(ordinal());
    }
    public final com.google.protobuf.Descriptors.EnumDescriptor
        getDescriptorForType() {
      return getDescriptor();
    }
    public static final com.google.protobuf.Descriptors.EnumDescriptor
        getDescriptor() {
      return ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.getDescriptor().getEnumTypes().get(1);
    }

    private static final ColorSpace[] VALUES = values();

    public static ColorSpace valueOf(
        com.google.protobuf.Descriptors.EnumValueDescriptor desc) {
      if (desc.getType() != getDescriptor()) {
        throw new java.lang.IllegalArgumentException(
          "EnumValueDescriptor is not for this type.");
      }
      if (desc.getIndex() == -1) {
        return UNRECOGNIZED;
      }
      return VALUES[desc.getIndex()];
    }

    private final int value;

    private ColorSpace(int value) {
      this.value = value;
    }

    // @@protoc_insertion_point(enum_scope:ssn.pdfservice.v1.RasterizePdfRequest.ColorSpace)
  }

  /**
   * Protobuf enum {@code ssn.pdfservice.v1.RasterizePdfRequest.PageOption}
   */
  public enum PageOption
      implements com.google.protobuf.ProtocolMessageEnum {
    /**
     * <code>FIRST_LAST = 0;</code>
     */
    FIRST_LAST(0),
    /**
     * <code>FIRST = 1;</code>
     */
    FIRST(1),
    /**
     * <code>LAST = 2;</code>
     */
    LAST(2),
    /**
     * <code>ALL = 3;</code>
     */
    ALL(3),
    /**
     * <code>FIRST_FIVE = 4;</code>
     */
    FIRST_FIVE(4),
    UNRECOGNIZED(-1),
    ;

    static {
      com.google.protobuf.RuntimeVersion.validateProtobufGencodeVersion(
        com.google.protobuf.RuntimeVersion.RuntimeDomain.PUBLIC,
        /* major= */ 4,
        /* minor= */ 29,
        /* patch= */ 3,
        /* suffix= */ "",
        PageOption.class.getName());
    }
    /**
     * <code>FIRST_LAST = 0;</code>
     */
    public static final int FIRST_LAST_VALUE = 0;
    /**
     * <code>FIRST = 1;</code>
     */
    public static final int FIRST_VALUE = 1;
    /**
     * <code>LAST = 2;</code>
     */
    public static final int LAST_VALUE = 2;
    /**
     * <code>ALL = 3;</code>
     */
    public static final int ALL_VALUE = 3;
    /**
     * <code>FIRST_FIVE = 4;</code>
     */
    public static final int FIRST_FIVE_VALUE = 4;


    public final int getNumber() {
      if (this == UNRECOGNIZED) {
        throw new java.lang.IllegalArgumentException(
            "Can't get the number of an unknown enum value.");
      }
      return value;
    }

    /**
     * @param value The numeric wire value of the corresponding enum entry.
     * @return The enum associated with the given numeric wire value.
     * @deprecated Use {@link #forNumber(int)} instead.
     */
    @java.lang.Deprecated
    public static PageOption valueOf(int value) {
      return forNumber(value);
    }

    /**
     * @param value The numeric wire value of the corresponding enum entry.
     * @return The enum associated with the given numeric wire value.
     */
    public static PageOption forNumber(int value) {
      switch (value) {
        case 0: return FIRST_LAST;
        case 1: return FIRST;
        case 2: return LAST;
        case 3: return ALL;
        case 4: return FIRST_FIVE;
        default: return null;
      }
    }

    public static com.google.protobuf.Internal.EnumLiteMap<PageOption>
        internalGetValueMap() {
      return internalValueMap;
    }
    private static final com.google.protobuf.Internal.EnumLiteMap<
        PageOption> internalValueMap =
          new com.google.protobuf.Internal.EnumLiteMap<PageOption>() {
            public PageOption findValueByNumber(int number) {
              return PageOption.forNumber(number);
            }
          };

    public final com.google.protobuf.Descriptors.EnumValueDescriptor
        getValueDescriptor() {
      if (this == UNRECOGNIZED) {
        throw new java.lang.IllegalStateException(
            "Can't get the descriptor of an unrecognized enum value.");
      }
      return getDescriptor().getValues().get(ordinal());
    }
    public final com.google.protobuf.Descriptors.EnumDescriptor
        getDescriptorForType() {
      return getDescriptor();
    }
    public static final com.google.protobuf.Descriptors.EnumDescriptor
        getDescriptor() {
      return ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.getDescriptor().getEnumTypes().get(2);
    }

    private static final PageOption[] VALUES = values();

    public static PageOption valueOf(
        com.google.protobuf.Descriptors.EnumValueDescriptor desc) {
      if (desc.getType() != getDescriptor()) {
        throw new java.lang.IllegalArgumentException(
          "EnumValueDescriptor is not for this type.");
      }
      if (desc.getIndex() == -1) {
        return UNRECOGNIZED;
      }
      return VALUES[desc.getIndex()];
    }

    private final int value;

    private PageOption(int value) {
      this.value = value;
    }

    // @@protoc_insertion_point(enum_scope:ssn.pdfservice.v1.RasterizePdfRequest.PageOption)
  }

  public static final int DATA_FIELD_NUMBER = 1;
  private com.google.protobuf.ByteString data_ = com.google.protobuf.ByteString.EMPTY;
  /**
   * <code>bytes data = 1 [json_name = "data"];</code>
   * @return The data.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString getData() {
    return data_;
  }

  public static final int DPI_FIELD_NUMBER = 2;
  private int dpi_ = 0;
  /**
   * <code>uint32 dpi = 2 [json_name = "dpi"];</code>
   * @return The dpi.
   */
  @java.lang.Override
  public int getDpi() {
    return dpi_;
  }

  public static final int FORMAT_FIELD_NUMBER = 3;
  private int format_ = 0;
  /**
   * <code>.ssn.pdfservice.v1.RasterizePdfRequest.Format format = 3 [json_name = "format"];</code>
   * @return The enum numeric value on the wire for format.
   */
  @java.lang.Override public int getFormatValue() {
    return format_;
  }
  /**
   * <code>.ssn.pdfservice.v1.RasterizePdfRequest.Format format = 3 [json_name = "format"];</code>
   * @return The format.
   */
  @java.lang.Override public ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.Format getFormat() {
    ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.Format result = ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.Format.forNumber(format_);
    return result == null ? ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.Format.UNRECOGNIZED : result;
  }

  public static final int COLOR_FIELD_NUMBER = 4;
  private int color_ = 0;
  /**
   * <code>.ssn.pdfservice.v1.RasterizePdfRequest.ColorSpace color = 4 [json_name = "color"];</code>
   * @return The enum numeric value on the wire for color.
   */
  @java.lang.Override public int getColorValue() {
    return color_;
  }
  /**
   * <code>.ssn.pdfservice.v1.RasterizePdfRequest.ColorSpace color = 4 [json_name = "color"];</code>
   * @return The color.
   */
  @java.lang.Override public ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.ColorSpace getColor() {
    ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.ColorSpace result = ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.ColorSpace.forNumber(color_);
    return result == null ? ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.ColorSpace.UNRECOGNIZED : result;
  }

  public static final int PAGES_FIELD_NUMBER = 5;
  private int pages_ = 0;
  /**
   * <code>.ssn.pdfservice.v1.RasterizePdfRequest.PageOption pages = 5 [json_name = "pages"];</code>
   * @return The enum numeric value on the wire for pages.
   */
  @java.lang.Override public int getPagesValue() {
    return pages_;
  }
  /**
   * <code>.ssn.pdfservice.v1.RasterizePdfRequest.PageOption pages = 5 [json_name = "pages"];</code>
   * @return The pages.
   */
  @java.lang.Override public ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.PageOption getPages() {
    ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.PageOption result = ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.PageOption.forNumber(pages_);
    return result == null ? ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.PageOption.UNRECOGNIZED : result;
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
    if (!data_.isEmpty()) {
      output.writeBytes(1, data_);
    }
    if (dpi_ != 0) {
      output.writeUInt32(2, dpi_);
    }
    if (format_ != ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.Format.PNG.getNumber()) {
      output.writeEnum(3, format_);
    }
    if (color_ != ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.ColorSpace.GRAY.getNumber()) {
      output.writeEnum(4, color_);
    }
    if (pages_ != ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.PageOption.FIRST_LAST.getNumber()) {
      output.writeEnum(5, pages_);
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!data_.isEmpty()) {
      size += com.google.protobuf.CodedOutputStream
        .computeBytesSize(1, data_);
    }
    if (dpi_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeUInt32Size(2, dpi_);
    }
    if (format_ != ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.Format.PNG.getNumber()) {
      size += com.google.protobuf.CodedOutputStream
        .computeEnumSize(3, format_);
    }
    if (color_ != ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.ColorSpace.GRAY.getNumber()) {
      size += com.google.protobuf.CodedOutputStream
        .computeEnumSize(4, color_);
    }
    if (pages_ != ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.PageOption.FIRST_LAST.getNumber()) {
      size += com.google.protobuf.CodedOutputStream
        .computeEnumSize(5, pages_);
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
    if (!(obj instanceof ai.visma.ssn.pdfservice.v1.RasterizePdfRequest)) {
      return super.equals(obj);
    }
    ai.visma.ssn.pdfservice.v1.RasterizePdfRequest other = (ai.visma.ssn.pdfservice.v1.RasterizePdfRequest) obj;

    if (!getData()
        .equals(other.getData())) return false;
    if (getDpi()
        != other.getDpi()) return false;
    if (format_ != other.format_) return false;
    if (color_ != other.color_) return false;
    if (pages_ != other.pages_) return false;
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
    hash = (37 * hash) + DATA_FIELD_NUMBER;
    hash = (53 * hash) + getData().hashCode();
    hash = (37 * hash) + DPI_FIELD_NUMBER;
    hash = (53 * hash) + getDpi();
    hash = (37 * hash) + FORMAT_FIELD_NUMBER;
    hash = (53 * hash) + format_;
    hash = (37 * hash) + COLOR_FIELD_NUMBER;
    hash = (53 * hash) + color_;
    hash = (37 * hash) + PAGES_FIELD_NUMBER;
    hash = (53 * hash) + pages_;
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static ai.visma.ssn.pdfservice.v1.RasterizePdfRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static ai.visma.ssn.pdfservice.v1.RasterizePdfRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static ai.visma.ssn.pdfservice.v1.RasterizePdfRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static ai.visma.ssn.pdfservice.v1.RasterizePdfRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static ai.visma.ssn.pdfservice.v1.RasterizePdfRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static ai.visma.ssn.pdfservice.v1.RasterizePdfRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static ai.visma.ssn.pdfservice.v1.RasterizePdfRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input);
  }
  public static ai.visma.ssn.pdfservice.v1.RasterizePdfRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  public static ai.visma.ssn.pdfservice.v1.RasterizePdfRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseDelimitedWithIOException(PARSER, input);
  }

  public static ai.visma.ssn.pdfservice.v1.RasterizePdfRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static ai.visma.ssn.pdfservice.v1.RasterizePdfRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input);
  }
  public static ai.visma.ssn.pdfservice.v1.RasterizePdfRequest parseFrom(
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
  public static Builder newBuilder(ai.visma.ssn.pdfservice.v1.RasterizePdfRequest prototype) {
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
   * Protobuf type {@code ssn.pdfservice.v1.RasterizePdfRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessage.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:ssn.pdfservice.v1.RasterizePdfRequest)
      ai.visma.ssn.pdfservice.v1.RasterizePdfRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return ai.visma.ssn.pdfservice.v1.PdfserviceProto.internal_static_ssn_pdfservice_v1_RasterizePdfRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessage.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return ai.visma.ssn.pdfservice.v1.PdfserviceProto.internal_static_ssn_pdfservice_v1_RasterizePdfRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.class, ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.Builder.class);
    }

    // Construct using ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.newBuilder()
    private Builder() {

    }

    private Builder(
        com.google.protobuf.GeneratedMessage.BuilderParent parent) {
      super(parent);

    }
    @java.lang.Override
    public Builder clear() {
      super.clear();
      bitField0_ = 0;
      data_ = com.google.protobuf.ByteString.EMPTY;
      dpi_ = 0;
      format_ = 0;
      color_ = 0;
      pages_ = 0;
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return ai.visma.ssn.pdfservice.v1.PdfserviceProto.internal_static_ssn_pdfservice_v1_RasterizePdfRequest_descriptor;
    }

    @java.lang.Override
    public ai.visma.ssn.pdfservice.v1.RasterizePdfRequest getDefaultInstanceForType() {
      return ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.getDefaultInstance();
    }

    @java.lang.Override
    public ai.visma.ssn.pdfservice.v1.RasterizePdfRequest build() {
      ai.visma.ssn.pdfservice.v1.RasterizePdfRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public ai.visma.ssn.pdfservice.v1.RasterizePdfRequest buildPartial() {
      ai.visma.ssn.pdfservice.v1.RasterizePdfRequest result = new ai.visma.ssn.pdfservice.v1.RasterizePdfRequest(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(ai.visma.ssn.pdfservice.v1.RasterizePdfRequest result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.data_ = data_;
      }
      if (((from_bitField0_ & 0x00000002) != 0)) {
        result.dpi_ = dpi_;
      }
      if (((from_bitField0_ & 0x00000004) != 0)) {
        result.format_ = format_;
      }
      if (((from_bitField0_ & 0x00000008) != 0)) {
        result.color_ = color_;
      }
      if (((from_bitField0_ & 0x00000010) != 0)) {
        result.pages_ = pages_;
      }
    }

    @java.lang.Override
    public Builder mergeFrom(com.google.protobuf.Message other) {
      if (other instanceof ai.visma.ssn.pdfservice.v1.RasterizePdfRequest) {
        return mergeFrom((ai.visma.ssn.pdfservice.v1.RasterizePdfRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(ai.visma.ssn.pdfservice.v1.RasterizePdfRequest other) {
      if (other == ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.getDefaultInstance()) return this;
      if (other.getData() != com.google.protobuf.ByteString.EMPTY) {
        setData(other.getData());
      }
      if (other.getDpi() != 0) {
        setDpi(other.getDpi());
      }
      if (other.format_ != 0) {
        setFormatValue(other.getFormatValue());
      }
      if (other.color_ != 0) {
        setColorValue(other.getColorValue());
      }
      if (other.pages_ != 0) {
        setPagesValue(other.getPagesValue());
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
              data_ = input.readBytes();
              bitField0_ |= 0x00000001;
              break;
            } // case 10
            case 16: {
              dpi_ = input.readUInt32();
              bitField0_ |= 0x00000002;
              break;
            } // case 16
            case 24: {
              format_ = input.readEnum();
              bitField0_ |= 0x00000004;
              break;
            } // case 24
            case 32: {
              color_ = input.readEnum();
              bitField0_ |= 0x00000008;
              break;
            } // case 32
            case 40: {
              pages_ = input.readEnum();
              bitField0_ |= 0x00000010;
              break;
            } // case 40
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

    private com.google.protobuf.ByteString data_ = com.google.protobuf.ByteString.EMPTY;
    /**
     * <code>bytes data = 1 [json_name = "data"];</code>
     * @return The data.
     */
    @java.lang.Override
    public com.google.protobuf.ByteString getData() {
      return data_;
    }
    /**
     * <code>bytes data = 1 [json_name = "data"];</code>
     * @param value The data to set.
     * @return This builder for chaining.
     */
    public Builder setData(com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      data_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>bytes data = 1 [json_name = "data"];</code>
     * @return This builder for chaining.
     */
    public Builder clearData() {
      bitField0_ = (bitField0_ & ~0x00000001);
      data_ = getDefaultInstance().getData();
      onChanged();
      return this;
    }

    private int dpi_ ;
    /**
     * <code>uint32 dpi = 2 [json_name = "dpi"];</code>
     * @return The dpi.
     */
    @java.lang.Override
    public int getDpi() {
      return dpi_;
    }
    /**
     * <code>uint32 dpi = 2 [json_name = "dpi"];</code>
     * @param value The dpi to set.
     * @return This builder for chaining.
     */
    public Builder setDpi(int value) {

      dpi_ = value;
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>uint32 dpi = 2 [json_name = "dpi"];</code>
     * @return This builder for chaining.
     */
    public Builder clearDpi() {
      bitField0_ = (bitField0_ & ~0x00000002);
      dpi_ = 0;
      onChanged();
      return this;
    }

    private int format_ = 0;
    /**
     * <code>.ssn.pdfservice.v1.RasterizePdfRequest.Format format = 3 [json_name = "format"];</code>
     * @return The enum numeric value on the wire for format.
     */
    @java.lang.Override public int getFormatValue() {
      return format_;
    }
    /**
     * <code>.ssn.pdfservice.v1.RasterizePdfRequest.Format format = 3 [json_name = "format"];</code>
     * @param value The enum numeric value on the wire for format to set.
     * @return This builder for chaining.
     */
    public Builder setFormatValue(int value) {
      format_ = value;
      bitField0_ |= 0x00000004;
      onChanged();
      return this;
    }
    /**
     * <code>.ssn.pdfservice.v1.RasterizePdfRequest.Format format = 3 [json_name = "format"];</code>
     * @return The format.
     */
    @java.lang.Override
    public ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.Format getFormat() {
      ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.Format result = ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.Format.forNumber(format_);
      return result == null ? ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.Format.UNRECOGNIZED : result;
    }
    /**
     * <code>.ssn.pdfservice.v1.RasterizePdfRequest.Format format = 3 [json_name = "format"];</code>
     * @param value The format to set.
     * @return This builder for chaining.
     */
    public Builder setFormat(ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.Format value) {
      if (value == null) {
        throw new NullPointerException();
      }
      bitField0_ |= 0x00000004;
      format_ = value.getNumber();
      onChanged();
      return this;
    }
    /**
     * <code>.ssn.pdfservice.v1.RasterizePdfRequest.Format format = 3 [json_name = "format"];</code>
     * @return This builder for chaining.
     */
    public Builder clearFormat() {
      bitField0_ = (bitField0_ & ~0x00000004);
      format_ = 0;
      onChanged();
      return this;
    }

    private int color_ = 0;
    /**
     * <code>.ssn.pdfservice.v1.RasterizePdfRequest.ColorSpace color = 4 [json_name = "color"];</code>
     * @return The enum numeric value on the wire for color.
     */
    @java.lang.Override public int getColorValue() {
      return color_;
    }
    /**
     * <code>.ssn.pdfservice.v1.RasterizePdfRequest.ColorSpace color = 4 [json_name = "color"];</code>
     * @param value The enum numeric value on the wire for color to set.
     * @return This builder for chaining.
     */
    public Builder setColorValue(int value) {
      color_ = value;
      bitField0_ |= 0x00000008;
      onChanged();
      return this;
    }
    /**
     * <code>.ssn.pdfservice.v1.RasterizePdfRequest.ColorSpace color = 4 [json_name = "color"];</code>
     * @return The color.
     */
    @java.lang.Override
    public ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.ColorSpace getColor() {
      ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.ColorSpace result = ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.ColorSpace.forNumber(color_);
      return result == null ? ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.ColorSpace.UNRECOGNIZED : result;
    }
    /**
     * <code>.ssn.pdfservice.v1.RasterizePdfRequest.ColorSpace color = 4 [json_name = "color"];</code>
     * @param value The color to set.
     * @return This builder for chaining.
     */
    public Builder setColor(ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.ColorSpace value) {
      if (value == null) {
        throw new NullPointerException();
      }
      bitField0_ |= 0x00000008;
      color_ = value.getNumber();
      onChanged();
      return this;
    }
    /**
     * <code>.ssn.pdfservice.v1.RasterizePdfRequest.ColorSpace color = 4 [json_name = "color"];</code>
     * @return This builder for chaining.
     */
    public Builder clearColor() {
      bitField0_ = (bitField0_ & ~0x00000008);
      color_ = 0;
      onChanged();
      return this;
    }

    private int pages_ = 0;
    /**
     * <code>.ssn.pdfservice.v1.RasterizePdfRequest.PageOption pages = 5 [json_name = "pages"];</code>
     * @return The enum numeric value on the wire for pages.
     */
    @java.lang.Override public int getPagesValue() {
      return pages_;
    }
    /**
     * <code>.ssn.pdfservice.v1.RasterizePdfRequest.PageOption pages = 5 [json_name = "pages"];</code>
     * @param value The enum numeric value on the wire for pages to set.
     * @return This builder for chaining.
     */
    public Builder setPagesValue(int value) {
      pages_ = value;
      bitField0_ |= 0x00000010;
      onChanged();
      return this;
    }
    /**
     * <code>.ssn.pdfservice.v1.RasterizePdfRequest.PageOption pages = 5 [json_name = "pages"];</code>
     * @return The pages.
     */
    @java.lang.Override
    public ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.PageOption getPages() {
      ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.PageOption result = ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.PageOption.forNumber(pages_);
      return result == null ? ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.PageOption.UNRECOGNIZED : result;
    }
    /**
     * <code>.ssn.pdfservice.v1.RasterizePdfRequest.PageOption pages = 5 [json_name = "pages"];</code>
     * @param value The pages to set.
     * @return This builder for chaining.
     */
    public Builder setPages(ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.PageOption value) {
      if (value == null) {
        throw new NullPointerException();
      }
      bitField0_ |= 0x00000010;
      pages_ = value.getNumber();
      onChanged();
      return this;
    }
    /**
     * <code>.ssn.pdfservice.v1.RasterizePdfRequest.PageOption pages = 5 [json_name = "pages"];</code>
     * @return This builder for chaining.
     */
    public Builder clearPages() {
      bitField0_ = (bitField0_ & ~0x00000010);
      pages_ = 0;
      onChanged();
      return this;
    }

    // @@protoc_insertion_point(builder_scope:ssn.pdfservice.v1.RasterizePdfRequest)
  }

  // @@protoc_insertion_point(class_scope:ssn.pdfservice.v1.RasterizePdfRequest)
  private static final ai.visma.ssn.pdfservice.v1.RasterizePdfRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new ai.visma.ssn.pdfservice.v1.RasterizePdfRequest();
  }

  public static ai.visma.ssn.pdfservice.v1.RasterizePdfRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<RasterizePdfRequest>
      PARSER = new com.google.protobuf.AbstractParser<RasterizePdfRequest>() {
    @java.lang.Override
    public RasterizePdfRequest parsePartialFrom(
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

  public static com.google.protobuf.Parser<RasterizePdfRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<RasterizePdfRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public ai.visma.ssn.pdfservice.v1.RasterizePdfRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

