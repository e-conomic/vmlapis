// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: ssn/ocrservice/v1/ocrservice.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Ssn.Ocrservice.V1 {

  /// <summary>Holder for reflection information generated from ssn/ocrservice/v1/ocrservice.proto</summary>
  public static partial class OcrserviceReflection {

    #region Descriptor
    /// <summary>File descriptor for ssn/ocrservice/v1/ocrservice.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static OcrserviceReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "CiJzc24vb2Nyc2VydmljZS92MS9vY3JzZXJ2aWNlLnByb3RvEhFzc24ub2Ny",
            "c2VydmljZS52MRoeZ29vZ2xlL3Byb3RvYnVmL3dyYXBwZXJzLnByb3RvGiBz",
            "c24vYW5ub3RhdG9yL3YxL2Fubm90YXRvci5wcm90bxoec3NuL3R5cGUvdGV4",
            "dF9hbm5vdGF0aW9uLnByb3RvIlkKGEdldFRleHRBbm5vdGF0aW9uUmVxdWVz",
            "dBIsCghkb2N1bWVudBgCIAEoCzIaLnNzbi5hbm5vdGF0b3IudjEuRG9jdW1l",
            "bnQSDwoHcHJldmlldxgDIAEoCCJ6ChlHZXRUZXh0QW5ub3RhdGlvblJlc3Bv",
            "bnNlEjEKD3RleHRfYW5ub3RhdGlvbhgCIAEoCzIYLnNzbi50eXBlLlRleHRB",
            "bm5vdGF0aW9uEioKBWltYWdlGAMgASgLMhsuZ29vZ2xlLnByb3RvYnVmLkJ5",
            "dGVzVmFsdWUiIwoTT2NyU2NhbkltYWdlUmVxdWVzdBIMCgRkYXRhGAEgASgM",
            "IikKFE9jclNjYW5JbWFnZVJlc3BvbnNlEhEKCXRlc3NfaG9jchgBIAEoCTLd",
            "AQoKT2NyU2VydmljZRJfCgxPY3JTY2FuSW1hZ2USJi5zc24ub2Nyc2Vydmlj",
            "ZS52MS5PY3JTY2FuSW1hZ2VSZXF1ZXN0Gicuc3NuLm9jcnNlcnZpY2UudjEu",
            "T2NyU2NhbkltYWdlUmVzcG9uc2USbgoRR2V0VGV4dEFubm90YXRpb24SKy5z",
            "c24ub2Nyc2VydmljZS52MS5HZXRUZXh0QW5ub3RhdGlvblJlcXVlc3QaLC5z",
            "c24ub2Nyc2VydmljZS52MS5HZXRUZXh0QW5ub3RhdGlvblJlc3BvbnNlQkJa",
            "QGdpdGh1Yi5jb20vZS1jb25vbWljL3ZtbGFwaXMvZ2VuL2dvL3Nzbi9vY3Jz",
            "ZXJ2aWNlL3YxO29jcnNlcnZpY2ViBnByb3RvMw=="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Google.Protobuf.WellKnownTypes.WrappersReflection.Descriptor, global::Ssn.Annotator.V1.AnnotatorReflection.Descriptor, global::Ssn.Type.TextAnnotationReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Ssn.Ocrservice.V1.GetTextAnnotationRequest), global::Ssn.Ocrservice.V1.GetTextAnnotationRequest.Parser, new[]{ "Document", "Preview" }, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::Ssn.Ocrservice.V1.GetTextAnnotationResponse), global::Ssn.Ocrservice.V1.GetTextAnnotationResponse.Parser, new[]{ "TextAnnotation", "Image" }, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::Ssn.Ocrservice.V1.OcrScanImageRequest), global::Ssn.Ocrservice.V1.OcrScanImageRequest.Parser, new[]{ "Data" }, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::Ssn.Ocrservice.V1.OcrScanImageResponse), global::Ssn.Ocrservice.V1.OcrScanImageResponse.Parser, new[]{ "TessHocr" }, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class GetTextAnnotationRequest : pb::IMessage<GetTextAnnotationRequest> {
    private static readonly pb::MessageParser<GetTextAnnotationRequest> _parser = new pb::MessageParser<GetTextAnnotationRequest>(() => new GetTextAnnotationRequest());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<GetTextAnnotationRequest> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Ssn.Ocrservice.V1.OcrserviceReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GetTextAnnotationRequest() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GetTextAnnotationRequest(GetTextAnnotationRequest other) : this() {
      document_ = other.document_ != null ? other.document_.Clone() : null;
      preview_ = other.preview_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GetTextAnnotationRequest Clone() {
      return new GetTextAnnotationRequest(this);
    }

    /// <summary>Field number for the "document" field.</summary>
    public const int DocumentFieldNumber = 2;
    private global::Ssn.Annotator.V1.Document document_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Ssn.Annotator.V1.Document Document {
      get { return document_; }
      set {
        document_ = value;
      }
    }

    /// <summary>Field number for the "preview" field.</summary>
    public const int PreviewFieldNumber = 3;
    private bool preview_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Preview {
      get { return preview_; }
      set {
        preview_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as GetTextAnnotationRequest);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(GetTextAnnotationRequest other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (!object.Equals(Document, other.Document)) return false;
      if (Preview != other.Preview) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (document_ != null) hash ^= Document.GetHashCode();
      if (Preview != false) hash ^= Preview.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void WriteTo(pb::CodedOutputStream output) {
      if (document_ != null) {
        output.WriteRawTag(18);
        output.WriteMessage(Document);
      }
      if (Preview != false) {
        output.WriteRawTag(24);
        output.WriteBool(Preview);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (document_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Document);
      }
      if (Preview != false) {
        size += 1 + 1;
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(GetTextAnnotationRequest other) {
      if (other == null) {
        return;
      }
      if (other.document_ != null) {
        if (document_ == null) {
          document_ = new global::Ssn.Annotator.V1.Document();
        }
        Document.MergeFrom(other.Document);
      }
      if (other.Preview != false) {
        Preview = other.Preview;
      }
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(pb::CodedInputStream input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 18: {
            if (document_ == null) {
              document_ = new global::Ssn.Annotator.V1.Document();
            }
            input.ReadMessage(document_);
            break;
          }
          case 24: {
            Preview = input.ReadBool();
            break;
          }
        }
      }
    }

  }

  public sealed partial class GetTextAnnotationResponse : pb::IMessage<GetTextAnnotationResponse> {
    private static readonly pb::MessageParser<GetTextAnnotationResponse> _parser = new pb::MessageParser<GetTextAnnotationResponse>(() => new GetTextAnnotationResponse());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<GetTextAnnotationResponse> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Ssn.Ocrservice.V1.OcrserviceReflection.Descriptor.MessageTypes[1]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GetTextAnnotationResponse() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GetTextAnnotationResponse(GetTextAnnotationResponse other) : this() {
      textAnnotation_ = other.textAnnotation_ != null ? other.textAnnotation_.Clone() : null;
      Image = other.Image;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GetTextAnnotationResponse Clone() {
      return new GetTextAnnotationResponse(this);
    }

    /// <summary>Field number for the "text_annotation" field.</summary>
    public const int TextAnnotationFieldNumber = 2;
    private global::Ssn.Type.TextAnnotation textAnnotation_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Ssn.Type.TextAnnotation TextAnnotation {
      get { return textAnnotation_; }
      set {
        textAnnotation_ = value;
      }
    }

    /// <summary>Field number for the "image" field.</summary>
    public const int ImageFieldNumber = 3;
    private static readonly pb::FieldCodec<pb::ByteString> _single_image_codec = pb::FieldCodec.ForClassWrapper<pb::ByteString>(26);
    private pb::ByteString image_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pb::ByteString Image {
      get { return image_; }
      set {
        image_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as GetTextAnnotationResponse);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(GetTextAnnotationResponse other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (!object.Equals(TextAnnotation, other.TextAnnotation)) return false;
      if (Image != other.Image) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (textAnnotation_ != null) hash ^= TextAnnotation.GetHashCode();
      if (image_ != null) hash ^= Image.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void WriteTo(pb::CodedOutputStream output) {
      if (textAnnotation_ != null) {
        output.WriteRawTag(18);
        output.WriteMessage(TextAnnotation);
      }
      if (image_ != null) {
        _single_image_codec.WriteTagAndValue(output, Image);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (textAnnotation_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(TextAnnotation);
      }
      if (image_ != null) {
        size += _single_image_codec.CalculateSizeWithTag(Image);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(GetTextAnnotationResponse other) {
      if (other == null) {
        return;
      }
      if (other.textAnnotation_ != null) {
        if (textAnnotation_ == null) {
          textAnnotation_ = new global::Ssn.Type.TextAnnotation();
        }
        TextAnnotation.MergeFrom(other.TextAnnotation);
      }
      if (other.image_ != null) {
        if (image_ == null || other.Image != pb::ByteString.Empty) {
          Image = other.Image;
        }
      }
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(pb::CodedInputStream input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 18: {
            if (textAnnotation_ == null) {
              textAnnotation_ = new global::Ssn.Type.TextAnnotation();
            }
            input.ReadMessage(textAnnotation_);
            break;
          }
          case 26: {
            pb::ByteString value = _single_image_codec.Read(input);
            if (image_ == null || value != pb::ByteString.Empty) {
              Image = value;
            }
            break;
          }
        }
      }
    }

  }

  public sealed partial class OcrScanImageRequest : pb::IMessage<OcrScanImageRequest> {
    private static readonly pb::MessageParser<OcrScanImageRequest> _parser = new pb::MessageParser<OcrScanImageRequest>(() => new OcrScanImageRequest());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<OcrScanImageRequest> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Ssn.Ocrservice.V1.OcrserviceReflection.Descriptor.MessageTypes[2]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public OcrScanImageRequest() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public OcrScanImageRequest(OcrScanImageRequest other) : this() {
      data_ = other.data_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public OcrScanImageRequest Clone() {
      return new OcrScanImageRequest(this);
    }

    /// <summary>Field number for the "data" field.</summary>
    public const int DataFieldNumber = 1;
    private pb::ByteString data_ = pb::ByteString.Empty;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pb::ByteString Data {
      get { return data_; }
      set {
        data_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as OcrScanImageRequest);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(OcrScanImageRequest other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Data != other.Data) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (Data.Length != 0) hash ^= Data.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void WriteTo(pb::CodedOutputStream output) {
      if (Data.Length != 0) {
        output.WriteRawTag(10);
        output.WriteBytes(Data);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (Data.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeBytesSize(Data);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(OcrScanImageRequest other) {
      if (other == null) {
        return;
      }
      if (other.Data.Length != 0) {
        Data = other.Data;
      }
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(pb::CodedInputStream input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 10: {
            Data = input.ReadBytes();
            break;
          }
        }
      }
    }

  }

  public sealed partial class OcrScanImageResponse : pb::IMessage<OcrScanImageResponse> {
    private static readonly pb::MessageParser<OcrScanImageResponse> _parser = new pb::MessageParser<OcrScanImageResponse>(() => new OcrScanImageResponse());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<OcrScanImageResponse> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Ssn.Ocrservice.V1.OcrserviceReflection.Descriptor.MessageTypes[3]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public OcrScanImageResponse() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public OcrScanImageResponse(OcrScanImageResponse other) : this() {
      tessHocr_ = other.tessHocr_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public OcrScanImageResponse Clone() {
      return new OcrScanImageResponse(this);
    }

    /// <summary>Field number for the "tess_hocr" field.</summary>
    public const int TessHocrFieldNumber = 1;
    private string tessHocr_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string TessHocr {
      get { return tessHocr_; }
      set {
        tessHocr_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as OcrScanImageResponse);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(OcrScanImageResponse other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (TessHocr != other.TessHocr) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (TessHocr.Length != 0) hash ^= TessHocr.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void WriteTo(pb::CodedOutputStream output) {
      if (TessHocr.Length != 0) {
        output.WriteRawTag(10);
        output.WriteString(TessHocr);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (TessHocr.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(TessHocr);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(OcrScanImageResponse other) {
      if (other == null) {
        return;
      }
      if (other.TessHocr.Length != 0) {
        TessHocr = other.TessHocr;
      }
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(pb::CodedInputStream input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 10: {
            TessHocr = input.ReadString();
            break;
          }
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code
