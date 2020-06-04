// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: asgt/data/v1alpha1/delete.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Asgt.Dataservice.V1Alpha1 {

  /// <summary>Holder for reflection information generated from asgt/data/v1alpha1/delete.proto</summary>
  public static partial class DeleteReflection {

    #region Descriptor
    /// <summary>File descriptor for asgt/data/v1alpha1/delete.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static DeleteReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "Ch9hc2d0L2RhdGEvdjFhbHBoYTEvZGVsZXRlLnByb3RvEhlhc2d0LmRhdGFz",
            "ZXJ2aWNlLnYxYWxwaGExIkUKDURlbGV0ZVJlcXVlc3QSDAoEdHlwZRgBIAEo",
            "CRIOCgRuYW1lGAIgASgJSAASDQoDdGFnGAMgASgJSABCBwoFbWF0Y2hCBloE",
            "ZGF0YWIGcHJvdG8z"));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { },
          new pbr::GeneratedClrTypeInfo(null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.Dataservice.V1Alpha1.DeleteRequest), global::Asgt.Dataservice.V1Alpha1.DeleteRequest.Parser, new[]{ "Type", "Name", "Tag" }, new[]{ "Match" }, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class DeleteRequest : pb::IMessage<DeleteRequest> {
    private static readonly pb::MessageParser<DeleteRequest> _parser = new pb::MessageParser<DeleteRequest>(() => new DeleteRequest());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<DeleteRequest> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Asgt.Dataservice.V1Alpha1.DeleteReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public DeleteRequest() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public DeleteRequest(DeleteRequest other) : this() {
      type_ = other.type_;
      switch (other.MatchCase) {
        case MatchOneofCase.Name:
          Name = other.Name;
          break;
        case MatchOneofCase.Tag:
          Tag = other.Tag;
          break;
      }

      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public DeleteRequest Clone() {
      return new DeleteRequest(this);
    }

    /// <summary>Field number for the "type" field.</summary>
    public const int TypeFieldNumber = 1;
    private string type_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string Type {
      get { return type_; }
      set {
        type_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "name" field.</summary>
    public const int NameFieldNumber = 2;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string Name {
      get { return matchCase_ == MatchOneofCase.Name ? (string) match_ : ""; }
      set {
        match_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
        matchCase_ = MatchOneofCase.Name;
      }
    }

    /// <summary>Field number for the "tag" field.</summary>
    public const int TagFieldNumber = 3;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string Tag {
      get { return matchCase_ == MatchOneofCase.Tag ? (string) match_ : ""; }
      set {
        match_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
        matchCase_ = MatchOneofCase.Tag;
      }
    }

    private object match_;
    /// <summary>Enum of possible cases for the "match" oneof.</summary>
    public enum MatchOneofCase {
      None = 0,
      Name = 2,
      Tag = 3,
    }
    private MatchOneofCase matchCase_ = MatchOneofCase.None;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public MatchOneofCase MatchCase {
      get { return matchCase_; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void ClearMatch() {
      matchCase_ = MatchOneofCase.None;
      match_ = null;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as DeleteRequest);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(DeleteRequest other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Type != other.Type) return false;
      if (Name != other.Name) return false;
      if (Tag != other.Tag) return false;
      if (MatchCase != other.MatchCase) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (Type.Length != 0) hash ^= Type.GetHashCode();
      if (matchCase_ == MatchOneofCase.Name) hash ^= Name.GetHashCode();
      if (matchCase_ == MatchOneofCase.Tag) hash ^= Tag.GetHashCode();
      hash ^= (int) matchCase_;
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
      if (Type.Length != 0) {
        output.WriteRawTag(10);
        output.WriteString(Type);
      }
      if (matchCase_ == MatchOneofCase.Name) {
        output.WriteRawTag(18);
        output.WriteString(Name);
      }
      if (matchCase_ == MatchOneofCase.Tag) {
        output.WriteRawTag(26);
        output.WriteString(Tag);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (Type.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Type);
      }
      if (matchCase_ == MatchOneofCase.Name) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Name);
      }
      if (matchCase_ == MatchOneofCase.Tag) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Tag);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(DeleteRequest other) {
      if (other == null) {
        return;
      }
      if (other.Type.Length != 0) {
        Type = other.Type;
      }
      switch (other.MatchCase) {
        case MatchOneofCase.Name:
          Name = other.Name;
          break;
        case MatchOneofCase.Tag:
          Tag = other.Tag;
          break;
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
            Type = input.ReadString();
            break;
          }
          case 18: {
            Name = input.ReadString();
            break;
          }
          case 26: {
            Tag = input.ReadString();
            break;
          }
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code
