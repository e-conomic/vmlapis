// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: asgt/v2/type/example.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Asgt.V2.Type {

  /// <summary>Holder for reflection information generated from asgt/v2/type/example.proto</summary>
  public static partial class ExampleReflection {

    #region Descriptor
    /// <summary>File descriptor for asgt/v2/type/example.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static ExampleReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "Chphc2d0L3YyL3R5cGUvZXhhbXBsZS5wcm90bxIMYXNndC52Mi50eXBlGhdh",
            "c2d0L3YyL3R5cGUvZGF0YS5wcm90bxofYXNndC92Mi90eXBlL3RhcmdldF92",
            "YWx1ZS5wcm90bxoXdmFsaWRhdGUvdmFsaWRhdGUucHJvdG8iggEKB0V4YW1w",
            "bGUSIAoEZGF0YRgBIAEoCzISLmFzZ3QudjIudHlwZS5EYXRhEjwKDXRhcmdl",
            "dF92YWx1ZXMYAiADKAsyGS5hc2d0LnYyLnR5cGUuVGFyZ2V0VmFsdWVCCvpC",
            "B5IBBAgBKAASFwoCaWQYAyABKAlCC/pCCHIGsAEB0AEBQjtaOWdpdGh1Yi5j",
            "b20vZS1jb25vbWljL3ZtbGFwaXMvZ2VuL2dvL2FzZ3QvdjIvdHlwZTthc2d0",
            "dHlwZWIGcHJvdG8z"));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Asgt.V2.Type.DataReflection.Descriptor, global::Asgt.V2.Type.TargetValueReflection.Descriptor, global::Validate.ValidateReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.V2.Type.Example), global::Asgt.V2.Type.Example.Parser, new[]{ "Data", "TargetValues", "Id" }, null, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  /// <summary>
  /// A pair of example data and example target values
  /// </summary>
  public sealed partial class Example : pb::IMessage<Example> {
    private static readonly pb::MessageParser<Example> _parser = new pb::MessageParser<Example>(() => new Example());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<Example> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Asgt.V2.Type.ExampleReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Example() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Example(Example other) : this() {
      data_ = other.data_ != null ? other.data_.Clone() : null;
      targetValues_ = other.targetValues_.Clone();
      id_ = other.id_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Example Clone() {
      return new Example(this);
    }

    /// <summary>Field number for the "data" field.</summary>
    public const int DataFieldNumber = 1;
    private global::Asgt.V2.Type.Data data_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Asgt.V2.Type.Data Data {
      get { return data_; }
      set {
        data_ = value;
      }
    }

    /// <summary>Field number for the "target_values" field.</summary>
    public const int TargetValuesFieldNumber = 2;
    private static readonly pb::FieldCodec<global::Asgt.V2.Type.TargetValue> _repeated_targetValues_codec
        = pb::FieldCodec.ForMessage(18, global::Asgt.V2.Type.TargetValue.Parser);
    private readonly pbc::RepeatedField<global::Asgt.V2.Type.TargetValue> targetValues_ = new pbc::RepeatedField<global::Asgt.V2.Type.TargetValue>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<global::Asgt.V2.Type.TargetValue> TargetValues {
      get { return targetValues_; }
    }

    /// <summary>Field number for the "id" field.</summary>
    public const int IdFieldNumber = 3;
    private string id_ = "";
    /// <summary>
    /// Not implemented yet.
    /// An optional id to provide individual corrections to examples, for example when a user updates their initial feedback.
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string Id {
      get { return id_; }
      set {
        id_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as Example);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(Example other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (!object.Equals(Data, other.Data)) return false;
      if(!targetValues_.Equals(other.targetValues_)) return false;
      if (Id != other.Id) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (data_ != null) hash ^= Data.GetHashCode();
      hash ^= targetValues_.GetHashCode();
      if (Id.Length != 0) hash ^= Id.GetHashCode();
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
      if (data_ != null) {
        output.WriteRawTag(10);
        output.WriteMessage(Data);
      }
      targetValues_.WriteTo(output, _repeated_targetValues_codec);
      if (Id.Length != 0) {
        output.WriteRawTag(26);
        output.WriteString(Id);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (data_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Data);
      }
      size += targetValues_.CalculateSize(_repeated_targetValues_codec);
      if (Id.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Id);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(Example other) {
      if (other == null) {
        return;
      }
      if (other.data_ != null) {
        if (data_ == null) {
          Data = new global::Asgt.V2.Type.Data();
        }
        Data.MergeFrom(other.Data);
      }
      targetValues_.Add(other.targetValues_);
      if (other.Id.Length != 0) {
        Id = other.Id;
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
            if (data_ == null) {
              Data = new global::Asgt.V2.Type.Data();
            }
            input.ReadMessage(Data);
            break;
          }
          case 18: {
            targetValues_.AddEntriesFrom(input, _repeated_targetValues_codec);
            break;
          }
          case 26: {
            Id = input.ReadString();
            break;
          }
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code
