// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: asgt/type/sample.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Asgt.Type {

  /// <summary>Holder for reflection information generated from asgt/type/sample.proto</summary>
  public static partial class SampleReflection {

    #region Descriptor
    /// <summary>File descriptor for asgt/type/sample.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static SampleReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "ChZhc2d0L3R5cGUvc2FtcGxlLnByb3RvEglhc2d0LnR5cGUaFGFzZ3QvdHlw",
            "ZS9kYXRhLnByb3RvGhxhc2d0L3R5cGUvdGFyZ2V0X3ZhbHVlLnByb3RvIlYK",
            "BlNhbXBsZRIdCgRkYXRhGAEgASgLMg8uYXNndC50eXBlLkRhdGESLQoNdGFy",
            "Z2V0X3ZhbHVlcxgCIAMoCzIWLmFzZ3QudHlwZS5UYXJnZXRWYWx1ZUI4WjZn",
            "aXRodWIuY29tL2UtY29ub21pYy92bWxhcGlzL2dlbi9nby9hc2d0L3R5cGU7",
            "YXNndHR5cGViBnByb3RvMw=="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Asgt.Type.DataReflection.Descriptor, global::Asgt.Type.TargetValueReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.Type.Sample), global::Asgt.Type.Sample.Parser, new[]{ "Data", "TargetValues" }, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class Sample : pb::IMessage<Sample> {
    private static readonly pb::MessageParser<Sample> _parser = new pb::MessageParser<Sample>(() => new Sample());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<Sample> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Asgt.Type.SampleReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Sample() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Sample(Sample other) : this() {
      data_ = other.data_ != null ? other.data_.Clone() : null;
      targetValues_ = other.targetValues_.Clone();
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Sample Clone() {
      return new Sample(this);
    }

    /// <summary>Field number for the "data" field.</summary>
    public const int DataFieldNumber = 1;
    private global::Asgt.Type.Data data_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Asgt.Type.Data Data {
      get { return data_; }
      set {
        data_ = value;
      }
    }

    /// <summary>Field number for the "target_values" field.</summary>
    public const int TargetValuesFieldNumber = 2;
    private static readonly pb::FieldCodec<global::Asgt.Type.TargetValue> _repeated_targetValues_codec
        = pb::FieldCodec.ForMessage(18, global::Asgt.Type.TargetValue.Parser);
    private readonly pbc::RepeatedField<global::Asgt.Type.TargetValue> targetValues_ = new pbc::RepeatedField<global::Asgt.Type.TargetValue>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<global::Asgt.Type.TargetValue> TargetValues {
      get { return targetValues_; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as Sample);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(Sample other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (!object.Equals(Data, other.Data)) return false;
      if(!targetValues_.Equals(other.targetValues_)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (data_ != null) hash ^= Data.GetHashCode();
      hash ^= targetValues_.GetHashCode();
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
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(Sample other) {
      if (other == null) {
        return;
      }
      if (other.data_ != null) {
        if (data_ == null) {
          data_ = new global::Asgt.Type.Data();
        }
        Data.MergeFrom(other.Data);
      }
      targetValues_.Add(other.targetValues_);
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
              data_ = new global::Asgt.Type.Data();
            }
            input.ReadMessage(data_);
            break;
          }
          case 18: {
            targetValues_.AddEntriesFrom(input, _repeated_targetValues_codec);
            break;
          }
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code
