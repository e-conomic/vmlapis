// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: google/api/httpbody.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021, 8981
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Google.Api {

  /// <summary>Holder for reflection information generated from google/api/httpbody.proto</summary>
  public static partial class HttpbodyReflection {

    #region Descriptor
    /// <summary>File descriptor for google/api/httpbody.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static HttpbodyReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "Chlnb29nbGUvYXBpL2h0dHBib2R5LnByb3RvEgpnb29nbGUuYXBpGhlnb29n",
            "bGUvcHJvdG9idWYvYW55LnByb3RvIncKCEh0dHBCb2R5EiEKDGNvbnRlbnRf",
            "dHlwZRgBIAEoCVILY29udGVudFR5cGUSEgoEZGF0YRgCIAEoDFIEZGF0YRI0",
            "CgpleHRlbnNpb25zGAMgAygLMhQuZ29vZ2xlLnByb3RvYnVmLkFueVIKZXh0",
            "ZW5zaW9uc0KtAQoTYWkudmlzbWEuZ29vZ2xlLmFwaUINSHR0cGJvZHlQcm90",
            "b1ABWjtnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fw",
            "aS9odHRwYm9keTtodHRwYm9kefgBAaICA0dBWKoCCkdvb2dsZS5BcGnKAgpH",
            "b29nbGVcQXBp4gIWR29vZ2xlXEFwaVxHUEJNZXRhZGF0YeoCC0dvb2dsZTo6",
            "QXBpYgZwcm90bzM="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Google.Protobuf.WellKnownTypes.AnyReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Google.Api.HttpBody), global::Google.Api.HttpBody.Parser, new[]{ "ContentType", "Data", "Extensions" }, null, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  /// <summary>
  /// Message that represents an arbitrary HTTP body. It should only be used for
  /// payload formats that can't be represented as JSON, such as raw binary or
  /// an HTML page.
  ///
  /// This message can be used both in streaming and non-streaming API methods in
  /// the request as well as the response.
  ///
  /// It can be used as a top-level request field, which is convenient if one
  /// wants to extract parameters from either the URL or HTTP template into the
  /// request fields and also want access to the raw HTTP body.
  ///
  /// Example:
  ///
  ///     message GetResourceRequest {
  ///       // A unique request id.
  ///       string request_id = 1;
  ///
  ///       // The raw HTTP body is bound to this field.
  ///       google.api.HttpBody http_body = 2;
  ///
  ///     }
  ///
  ///     service ResourceService {
  ///       rpc GetResource(GetResourceRequest)
  ///         returns (google.api.HttpBody);
  ///       rpc UpdateResource(google.api.HttpBody)
  ///         returns (google.protobuf.Empty);
  ///
  ///     }
  ///
  /// Example with streaming methods:
  ///
  ///     service CaldavService {
  ///       rpc GetCalendar(stream google.api.HttpBody)
  ///         returns (stream google.api.HttpBody);
  ///       rpc UpdateCalendar(stream google.api.HttpBody)
  ///         returns (stream google.api.HttpBody);
  ///
  ///     }
  ///
  /// Use of this type only changes how the request and response bodies are
  /// handled, all other features will continue to work unchanged.
  /// </summary>
  [global::System.Diagnostics.DebuggerDisplayAttribute("{ToString(),nq}")]
  public sealed partial class HttpBody : pb::IMessage<HttpBody>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<HttpBody> _parser = new pb::MessageParser<HttpBody>(() => new HttpBody());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pb::MessageParser<HttpBody> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Google.Api.HttpbodyReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public HttpBody() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public HttpBody(HttpBody other) : this() {
      contentType_ = other.contentType_;
      data_ = other.data_;
      extensions_ = other.extensions_.Clone();
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public HttpBody Clone() {
      return new HttpBody(this);
    }

    /// <summary>Field number for the "content_type" field.</summary>
    public const int ContentTypeFieldNumber = 1;
    private string contentType_ = "";
    /// <summary>
    /// The HTTP Content-Type header value specifying the content type of the body.
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public string ContentType {
      get { return contentType_; }
      set {
        contentType_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "data" field.</summary>
    public const int DataFieldNumber = 2;
    private pb::ByteString data_ = pb::ByteString.Empty;
    /// <summary>
    /// The HTTP request/response body as raw binary.
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public pb::ByteString Data {
      get { return data_; }
      set {
        data_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "extensions" field.</summary>
    public const int ExtensionsFieldNumber = 3;
    private static readonly pb::FieldCodec<global::Google.Protobuf.WellKnownTypes.Any> _repeated_extensions_codec
        = pb::FieldCodec.ForMessage(26, global::Google.Protobuf.WellKnownTypes.Any.Parser);
    private readonly pbc::RepeatedField<global::Google.Protobuf.WellKnownTypes.Any> extensions_ = new pbc::RepeatedField<global::Google.Protobuf.WellKnownTypes.Any>();
    /// <summary>
    /// Application specific response metadata. Must be set in the first response
    /// for streaming APIs.
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public pbc::RepeatedField<global::Google.Protobuf.WellKnownTypes.Any> Extensions {
      get { return extensions_; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override bool Equals(object other) {
      return Equals(other as HttpBody);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public bool Equals(HttpBody other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (ContentType != other.ContentType) return false;
      if (Data != other.Data) return false;
      if(!extensions_.Equals(other.extensions_)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override int GetHashCode() {
      int hash = 1;
      if (ContentType.Length != 0) hash ^= ContentType.GetHashCode();
      if (Data.Length != 0) hash ^= Data.GetHashCode();
      hash ^= extensions_.GetHashCode();
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
      if (ContentType.Length != 0) {
        output.WriteRawTag(10);
        output.WriteString(ContentType);
      }
      if (Data.Length != 0) {
        output.WriteRawTag(18);
        output.WriteBytes(Data);
      }
      extensions_.WriteTo(output, _repeated_extensions_codec);
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      if (ContentType.Length != 0) {
        output.WriteRawTag(10);
        output.WriteString(ContentType);
      }
      if (Data.Length != 0) {
        output.WriteRawTag(18);
        output.WriteBytes(Data);
      }
      extensions_.WriteTo(ref output, _repeated_extensions_codec);
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int CalculateSize() {
      int size = 0;
      if (ContentType.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(ContentType);
      }
      if (Data.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeBytesSize(Data);
      }
      size += extensions_.CalculateSize(_repeated_extensions_codec);
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(HttpBody other) {
      if (other == null) {
        return;
      }
      if (other.ContentType.Length != 0) {
        ContentType = other.ContentType;
      }
      if (other.Data.Length != 0) {
        Data = other.Data;
      }
      extensions_.Add(other.extensions_);
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
            ContentType = input.ReadString();
            break;
          }
          case 18: {
            Data = input.ReadBytes();
            break;
          }
          case 26: {
            extensions_.AddEntriesFrom(input, _repeated_extensions_codec);
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
            ContentType = input.ReadString();
            break;
          }
          case 18: {
            Data = input.ReadBytes();
            break;
          }
          case 26: {
            extensions_.AddEntriesFrom(ref input, _repeated_extensions_codec);
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
