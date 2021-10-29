// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: asgt/type/dataset.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Asgt.Type {

  /// <summary>Holder for reflection information generated from asgt/type/dataset.proto</summary>
  public static partial class DatasetReflection {

    #region Descriptor
    /// <summary>File descriptor for asgt/type/dataset.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static DatasetReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "Chdhc2d0L3R5cGUvZGF0YXNldC5wcm90bxIJYXNndC50eXBlGiBhc2d0L3R5",
            "cGUvcmV0ZW50aW9uX3BvbGljeS5wcm90bxofZ29vZ2xlL3Byb3RvYnVmL3Rp",
            "bWVzdGFtcC5wcm90byKyAgoHRGF0YXNldBIQCghjb25zdW1lchgBIAEoCRIM",
            "CgRuYW1lGAIgASgJEgwKBHR5cGUYAyABKAkSDAoEdGFncxgEIAMoCRIPCgd0",
            "YXJnZXRzGAUgAygJEjAKDHRydW5jYXRlZF9hdBgIIAEoCzIaLmdvb2dsZS5w",
            "cm90b2J1Zi5UaW1lc3RhbXASNAoQcmV0ZW50aW9uX3BvbGljeRgJIAEoCzIa",
            "LmFzZ3QudHlwZS5SZXRlbnRpb25Qb2xpY3kSLgoKY3JlYXRlZF9hdBgKIAEo",
            "CzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASLgoKdXBkYXRlZF9hdBgL",
            "IAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASDAoEc2l6ZRgMIAEo",
            "A0oECAYQCEI4WjZnaXRodWIuY29tL2UtY29ub21pYy92bWxhcGlzL2dlbi9n",
            "by9hc2d0L3R5cGU7YXNndHR5cGViBnByb3RvMw=="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Asgt.Type.RetentionPolicyReflection.Descriptor, global::Google.Protobuf.WellKnownTypes.TimestampReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.Type.Dataset), global::Asgt.Type.Dataset.Parser, new[]{ "Consumer", "Name", "Type", "Tags", "Targets", "TruncatedAt", "RetentionPolicy", "CreatedAt", "UpdatedAt", "Size" }, null, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class Dataset : pb::IMessage<Dataset>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<Dataset> _parser = new pb::MessageParser<Dataset>(() => new Dataset());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<Dataset> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Asgt.Type.DatasetReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Dataset() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Dataset(Dataset other) : this() {
      consumer_ = other.consumer_;
      name_ = other.name_;
      type_ = other.type_;
      tags_ = other.tags_.Clone();
      targets_ = other.targets_.Clone();
      truncatedAt_ = other.truncatedAt_ != null ? other.truncatedAt_.Clone() : null;
      retentionPolicy_ = other.retentionPolicy_ != null ? other.retentionPolicy_.Clone() : null;
      createdAt_ = other.createdAt_ != null ? other.createdAt_.Clone() : null;
      updatedAt_ = other.updatedAt_ != null ? other.updatedAt_.Clone() : null;
      size_ = other.size_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Dataset Clone() {
      return new Dataset(this);
    }

    /// <summary>Field number for the "consumer" field.</summary>
    public const int ConsumerFieldNumber = 1;
    private string consumer_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string Consumer {
      get { return consumer_; }
      set {
        consumer_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "name" field.</summary>
    public const int NameFieldNumber = 2;
    private string name_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string Name {
      get { return name_; }
      set {
        name_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "type" field.</summary>
    public const int TypeFieldNumber = 3;
    private string type_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string Type {
      get { return type_; }
      set {
        type_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "tags" field.</summary>
    public const int TagsFieldNumber = 4;
    private static readonly pb::FieldCodec<string> _repeated_tags_codec
        = pb::FieldCodec.ForString(34);
    private readonly pbc::RepeatedField<string> tags_ = new pbc::RepeatedField<string>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<string> Tags {
      get { return tags_; }
    }

    /// <summary>Field number for the "targets" field.</summary>
    public const int TargetsFieldNumber = 5;
    private static readonly pb::FieldCodec<string> _repeated_targets_codec
        = pb::FieldCodec.ForString(42);
    private readonly pbc::RepeatedField<string> targets_ = new pbc::RepeatedField<string>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<string> Targets {
      get { return targets_; }
    }

    /// <summary>Field number for the "truncated_at" field.</summary>
    public const int TruncatedAtFieldNumber = 8;
    private global::Google.Protobuf.WellKnownTypes.Timestamp truncatedAt_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Google.Protobuf.WellKnownTypes.Timestamp TruncatedAt {
      get { return truncatedAt_; }
      set {
        truncatedAt_ = value;
      }
    }

    /// <summary>Field number for the "retention_policy" field.</summary>
    public const int RetentionPolicyFieldNumber = 9;
    private global::Asgt.Type.RetentionPolicy retentionPolicy_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Asgt.Type.RetentionPolicy RetentionPolicy {
      get { return retentionPolicy_; }
      set {
        retentionPolicy_ = value;
      }
    }

    /// <summary>Field number for the "created_at" field.</summary>
    public const int CreatedAtFieldNumber = 10;
    private global::Google.Protobuf.WellKnownTypes.Timestamp createdAt_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Google.Protobuf.WellKnownTypes.Timestamp CreatedAt {
      get { return createdAt_; }
      set {
        createdAt_ = value;
      }
    }

    /// <summary>Field number for the "updated_at" field.</summary>
    public const int UpdatedAtFieldNumber = 11;
    private global::Google.Protobuf.WellKnownTypes.Timestamp updatedAt_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Google.Protobuf.WellKnownTypes.Timestamp UpdatedAt {
      get { return updatedAt_; }
      set {
        updatedAt_ = value;
      }
    }

    /// <summary>Field number for the "size" field.</summary>
    public const int SizeFieldNumber = 12;
    private long size_;
    /// <summary>
    /// Number of samples in the dataset reflecting added entries that meet the retention policy
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public long Size {
      get { return size_; }
      set {
        size_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as Dataset);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(Dataset other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Consumer != other.Consumer) return false;
      if (Name != other.Name) return false;
      if (Type != other.Type) return false;
      if(!tags_.Equals(other.tags_)) return false;
      if(!targets_.Equals(other.targets_)) return false;
      if (!object.Equals(TruncatedAt, other.TruncatedAt)) return false;
      if (!object.Equals(RetentionPolicy, other.RetentionPolicy)) return false;
      if (!object.Equals(CreatedAt, other.CreatedAt)) return false;
      if (!object.Equals(UpdatedAt, other.UpdatedAt)) return false;
      if (Size != other.Size) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (Consumer.Length != 0) hash ^= Consumer.GetHashCode();
      if (Name.Length != 0) hash ^= Name.GetHashCode();
      if (Type.Length != 0) hash ^= Type.GetHashCode();
      hash ^= tags_.GetHashCode();
      hash ^= targets_.GetHashCode();
      if (truncatedAt_ != null) hash ^= TruncatedAt.GetHashCode();
      if (retentionPolicy_ != null) hash ^= RetentionPolicy.GetHashCode();
      if (createdAt_ != null) hash ^= CreatedAt.GetHashCode();
      if (updatedAt_ != null) hash ^= UpdatedAt.GetHashCode();
      if (Size != 0L) hash ^= Size.GetHashCode();
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
      if (Consumer.Length != 0) {
        output.WriteRawTag(10);
        output.WriteString(Consumer);
      }
      if (Name.Length != 0) {
        output.WriteRawTag(18);
        output.WriteString(Name);
      }
      if (Type.Length != 0) {
        output.WriteRawTag(26);
        output.WriteString(Type);
      }
      tags_.WriteTo(output, _repeated_tags_codec);
      targets_.WriteTo(output, _repeated_targets_codec);
      if (truncatedAt_ != null) {
        output.WriteRawTag(66);
        output.WriteMessage(TruncatedAt);
      }
      if (retentionPolicy_ != null) {
        output.WriteRawTag(74);
        output.WriteMessage(RetentionPolicy);
      }
      if (createdAt_ != null) {
        output.WriteRawTag(82);
        output.WriteMessage(CreatedAt);
      }
      if (updatedAt_ != null) {
        output.WriteRawTag(90);
        output.WriteMessage(UpdatedAt);
      }
      if (Size != 0L) {
        output.WriteRawTag(96);
        output.WriteInt64(Size);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (Consumer.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Consumer);
      }
      if (Name.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Name);
      }
      if (Type.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Type);
      }
      size += tags_.CalculateSize(_repeated_tags_codec);
      size += targets_.CalculateSize(_repeated_targets_codec);
      if (truncatedAt_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(TruncatedAt);
      }
      if (retentionPolicy_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(RetentionPolicy);
      }
      if (createdAt_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(CreatedAt);
      }
      if (updatedAt_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(UpdatedAt);
      }
      if (Size != 0L) {
        size += 1 + pb::CodedOutputStream.ComputeInt64Size(Size);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(Dataset other) {
      if (other == null) {
        return;
      }
      if (other.Consumer.Length != 0) {
        Consumer = other.Consumer;
      }
      if (other.Name.Length != 0) {
        Name = other.Name;
      }
      if (other.Type.Length != 0) {
        Type = other.Type;
      }
      tags_.Add(other.tags_);
      targets_.Add(other.targets_);
      if (other.truncatedAt_ != null) {
        if (truncatedAt_ == null) {
          TruncatedAt = new global::Google.Protobuf.WellKnownTypes.Timestamp();
        }
        TruncatedAt.MergeFrom(other.TruncatedAt);
      }
      if (other.retentionPolicy_ != null) {
        if (retentionPolicy_ == null) {
          RetentionPolicy = new global::Asgt.Type.RetentionPolicy();
        }
        RetentionPolicy.MergeFrom(other.RetentionPolicy);
      }
      if (other.createdAt_ != null) {
        if (createdAt_ == null) {
          CreatedAt = new global::Google.Protobuf.WellKnownTypes.Timestamp();
        }
        CreatedAt.MergeFrom(other.CreatedAt);
      }
      if (other.updatedAt_ != null) {
        if (updatedAt_ == null) {
          UpdatedAt = new global::Google.Protobuf.WellKnownTypes.Timestamp();
        }
        UpdatedAt.MergeFrom(other.UpdatedAt);
      }
      if (other.Size != 0L) {
        Size = other.Size;
      }
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(pb::CodedInputStream input) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      input.ReadRawMessage(this);
    #else
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 10: {
            Consumer = input.ReadString();
            break;
          }
          case 18: {
            Name = input.ReadString();
            break;
          }
          case 26: {
            Type = input.ReadString();
            break;
          }
          case 34: {
            tags_.AddEntriesFrom(input, _repeated_tags_codec);
            break;
          }
          case 42: {
            targets_.AddEntriesFrom(input, _repeated_targets_codec);
            break;
          }
          case 66: {
            if (truncatedAt_ == null) {
              TruncatedAt = new global::Google.Protobuf.WellKnownTypes.Timestamp();
            }
            input.ReadMessage(TruncatedAt);
            break;
          }
          case 74: {
            if (retentionPolicy_ == null) {
              RetentionPolicy = new global::Asgt.Type.RetentionPolicy();
            }
            input.ReadMessage(RetentionPolicy);
            break;
          }
          case 82: {
            if (createdAt_ == null) {
              CreatedAt = new global::Google.Protobuf.WellKnownTypes.Timestamp();
            }
            input.ReadMessage(CreatedAt);
            break;
          }
          case 90: {
            if (updatedAt_ == null) {
              UpdatedAt = new global::Google.Protobuf.WellKnownTypes.Timestamp();
            }
            input.ReadMessage(UpdatedAt);
            break;
          }
          case 96: {
            Size = input.ReadInt64();
            break;
          }
        }
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    void pb::IBufferMessage.InternalMergeFrom(ref pb::ParseContext input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, ref input);
            break;
          case 10: {
            Consumer = input.ReadString();
            break;
          }
          case 18: {
            Name = input.ReadString();
            break;
          }
          case 26: {
            Type = input.ReadString();
            break;
          }
          case 34: {
            tags_.AddEntriesFrom(ref input, _repeated_tags_codec);
            break;
          }
          case 42: {
            targets_.AddEntriesFrom(ref input, _repeated_targets_codec);
            break;
          }
          case 66: {
            if (truncatedAt_ == null) {
              TruncatedAt = new global::Google.Protobuf.WellKnownTypes.Timestamp();
            }
            input.ReadMessage(TruncatedAt);
            break;
          }
          case 74: {
            if (retentionPolicy_ == null) {
              RetentionPolicy = new global::Asgt.Type.RetentionPolicy();
            }
            input.ReadMessage(RetentionPolicy);
            break;
          }
          case 82: {
            if (createdAt_ == null) {
              CreatedAt = new global::Google.Protobuf.WellKnownTypes.Timestamp();
            }
            input.ReadMessage(CreatedAt);
            break;
          }
          case 90: {
            if (updatedAt_ == null) {
              UpdatedAt = new global::Google.Protobuf.WellKnownTypes.Timestamp();
            }
            input.ReadMessage(UpdatedAt);
            break;
          }
          case 96: {
            Size = input.ReadInt64();
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
