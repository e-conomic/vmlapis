// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: ssn/linesservice/v1/linesservice.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021, 8981
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Ssn.Linesservice.V1 {

  /// <summary>Holder for reflection information generated from ssn/linesservice/v1/linesservice.proto</summary>
  public static partial class LinesserviceReflection {

    #region Descriptor
    /// <summary>File descriptor for ssn/linesservice/v1/linesservice.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static LinesserviceReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "CiZzc24vbGluZXNzZXJ2aWNlL3YxL2xpbmVzc2VydmljZS5wcm90bxITc3Nu",
            "LmxpbmVzc2VydmljZS52MRoYc3NuL3R5cGUvY2FuZGlkYXRlLnByb3RvGh5z",
            "c24vdHlwZS90ZXh0X2Fubm90YXRpb24ucHJvdG8iZwoMTGluZXNSZXF1ZXN0",
            "EkEKD3RleHRfYW5ub3RhdGlvbhgBIAEoCzIYLnNzbi50eXBlLlRleHRBbm5v",
            "dGF0aW9uUg50ZXh0QW5ub3RhdGlvbhIUCgVpbWFnZRgCIAEoDFIFaW1hZ2Ui",
            "VwoNTGluZXNSZXNwb25zZRJGCg5wdXJjaGFzZV9saW5lcxgBIAMoCzIfLnNz",
            "bi50eXBlLlB1cmNoYXNlTGluZUNhbmRpZGF0ZVINcHVyY2hhc2VMaW5lczJg",
            "CgxMaW5lc1NlcnZpY2USUAoHUHJlZGljdBIhLnNzbi5saW5lc3NlcnZpY2Uu",
            "djEuTGluZXNSZXF1ZXN0GiIuc3NuLmxpbmVzc2VydmljZS52MS5MaW5lc1Jl",
            "c3BvbnNlQuUBChxhaS52aXNtYS5zc24ubGluZXNzZXJ2aWNlLnYxQhFMaW5l",
            "c3NlcnZpY2VQcm90b1ABWkRnaXRodWIuY29tL2UtY29ub21pYy92bWxhcGlz",
            "L2dlbi9nby9zc24vbGluZXNzZXJ2aWNlL3YxO2xpbmVzc2VydmljZaICA1NM",
            "WKoCE1Nzbi5MaW5lc3NlcnZpY2UuVjHKAhNTc25cTGluZXNzZXJ2aWNlXFYx",
            "4gIfU3NuXExpbmVzc2VydmljZVxWMVxHUEJNZXRhZGF0YeoCFVNzbjo6TGlu",
            "ZXNzZXJ2aWNlOjpWMWIGcHJvdG8z"));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Ssn.Type.CandidateReflection.Descriptor, global::Ssn.Type.TextAnnotationReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Ssn.Linesservice.V1.LinesRequest), global::Ssn.Linesservice.V1.LinesRequest.Parser, new[]{ "TextAnnotation", "Image" }, null, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::Ssn.Linesservice.V1.LinesResponse), global::Ssn.Linesservice.V1.LinesResponse.Parser, new[]{ "PurchaseLines" }, null, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  [global::System.Diagnostics.DebuggerDisplayAttribute("{ToString(),nq}")]
  public sealed partial class LinesRequest : pb::IMessage<LinesRequest>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<LinesRequest> _parser = new pb::MessageParser<LinesRequest>(() => new LinesRequest());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pb::MessageParser<LinesRequest> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Ssn.Linesservice.V1.LinesserviceReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public LinesRequest() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public LinesRequest(LinesRequest other) : this() {
      textAnnotation_ = other.textAnnotation_ != null ? other.textAnnotation_.Clone() : null;
      image_ = other.image_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public LinesRequest Clone() {
      return new LinesRequest(this);
    }

    /// <summary>Field number for the "text_annotation" field.</summary>
    public const int TextAnnotationFieldNumber = 1;
    private global::Ssn.Type.TextAnnotation textAnnotation_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public global::Ssn.Type.TextAnnotation TextAnnotation {
      get { return textAnnotation_; }
      set {
        textAnnotation_ = value;
      }
    }

    /// <summary>Field number for the "image" field.</summary>
    public const int ImageFieldNumber = 2;
    private pb::ByteString image_ = pb::ByteString.Empty;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public pb::ByteString Image {
      get { return image_; }
      set {
        image_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override bool Equals(object other) {
      return Equals(other as LinesRequest);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public bool Equals(LinesRequest other) {
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
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override int GetHashCode() {
      int hash = 1;
      if (textAnnotation_ != null) hash ^= TextAnnotation.GetHashCode();
      if (Image.Length != 0) hash ^= Image.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void WriteTo(pb::CodedOutputStream output) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      output.WriteRawMessage(this);
    #else
      if (textAnnotation_ != null) {
        output.WriteRawTag(10);
        output.WriteMessage(TextAnnotation);
      }
      if (Image.Length != 0) {
        output.WriteRawTag(18);
        output.WriteBytes(Image);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      if (textAnnotation_ != null) {
        output.WriteRawTag(10);
        output.WriteMessage(TextAnnotation);
      }
      if (Image.Length != 0) {
        output.WriteRawTag(18);
        output.WriteBytes(Image);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int CalculateSize() {
      int size = 0;
      if (textAnnotation_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(TextAnnotation);
      }
      if (Image.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeBytesSize(Image);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(LinesRequest other) {
      if (other == null) {
        return;
      }
      if (other.textAnnotation_ != null) {
        if (textAnnotation_ == null) {
          TextAnnotation = new global::Ssn.Type.TextAnnotation();
        }
        TextAnnotation.MergeFrom(other.TextAnnotation);
      }
      if (other.Image.Length != 0) {
        Image = other.Image;
      }
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(pb::CodedInputStream input) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      input.ReadRawMessage(this);
    #else
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
      if ((tag & 7) == 4) {
        // Abort on any end group tag.
        return;
      }
      switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 10: {
            if (textAnnotation_ == null) {
              TextAnnotation = new global::Ssn.Type.TextAnnotation();
            }
            input.ReadMessage(TextAnnotation);
            break;
          }
          case 18: {
            Image = input.ReadBytes();
            break;
          }
        }
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalMergeFrom(ref pb::ParseContext input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
      if ((tag & 7) == 4) {
        // Abort on any end group tag.
        return;
      }
      switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, ref input);
            break;
          case 10: {
            if (textAnnotation_ == null) {
              TextAnnotation = new global::Ssn.Type.TextAnnotation();
            }
            input.ReadMessage(TextAnnotation);
            break;
          }
          case 18: {
            Image = input.ReadBytes();
            break;
          }
        }
      }
    }
    #endif

  }

  [global::System.Diagnostics.DebuggerDisplayAttribute("{ToString(),nq}")]
  public sealed partial class LinesResponse : pb::IMessage<LinesResponse>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<LinesResponse> _parser = new pb::MessageParser<LinesResponse>(() => new LinesResponse());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pb::MessageParser<LinesResponse> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Ssn.Linesservice.V1.LinesserviceReflection.Descriptor.MessageTypes[1]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public LinesResponse() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public LinesResponse(LinesResponse other) : this() {
      purchaseLines_ = other.purchaseLines_.Clone();
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public LinesResponse Clone() {
      return new LinesResponse(this);
    }

    /// <summary>Field number for the "purchase_lines" field.</summary>
    public const int PurchaseLinesFieldNumber = 1;
    private static readonly pb::FieldCodec<global::Ssn.Type.PurchaseLineCandidate> _repeated_purchaseLines_codec
        = pb::FieldCodec.ForMessage(10, global::Ssn.Type.PurchaseLineCandidate.Parser);
    private readonly pbc::RepeatedField<global::Ssn.Type.PurchaseLineCandidate> purchaseLines_ = new pbc::RepeatedField<global::Ssn.Type.PurchaseLineCandidate>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public pbc::RepeatedField<global::Ssn.Type.PurchaseLineCandidate> PurchaseLines {
      get { return purchaseLines_; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override bool Equals(object other) {
      return Equals(other as LinesResponse);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public bool Equals(LinesResponse other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if(!purchaseLines_.Equals(other.purchaseLines_)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override int GetHashCode() {
      int hash = 1;
      hash ^= purchaseLines_.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void WriteTo(pb::CodedOutputStream output) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      output.WriteRawMessage(this);
    #else
      purchaseLines_.WriteTo(output, _repeated_purchaseLines_codec);
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      purchaseLines_.WriteTo(ref output, _repeated_purchaseLines_codec);
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int CalculateSize() {
      int size = 0;
      size += purchaseLines_.CalculateSize(_repeated_purchaseLines_codec);
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(LinesResponse other) {
      if (other == null) {
        return;
      }
      purchaseLines_.Add(other.purchaseLines_);
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(pb::CodedInputStream input) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      input.ReadRawMessage(this);
    #else
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
      if ((tag & 7) == 4) {
        // Abort on any end group tag.
        return;
      }
      switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 10: {
            purchaseLines_.AddEntriesFrom(input, _repeated_purchaseLines_codec);
            break;
          }
        }
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalMergeFrom(ref pb::ParseContext input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
      if ((tag & 7) == 4) {
        // Abort on any end group tag.
        return;
      }
      switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, ref input);
            break;
          case 10: {
            purchaseLines_.AddEntriesFrom(ref input, _repeated_purchaseLines_codec);
            break;
          }
        }
      }
    }
    #endif

  }

  #endregion

}

#endregion Designer generated code
