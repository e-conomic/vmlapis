// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: asgt/dataservice/v1alpha1/data.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Asgt.Dataservice.V1Alpha1 {

  /// <summary>Holder for reflection information generated from asgt/dataservice/v1alpha1/data.proto</summary>
  public static partial class DataReflection {

    #region Descriptor
    /// <summary>File descriptor for asgt/dataservice/v1alpha1/data.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static DataReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "CiRhc2d0L2RhdGFzZXJ2aWNlL3YxYWxwaGExL2RhdGEucHJvdG8SGWFzZ3Qu",
            "ZGF0YXNlcnZpY2UudjFhbHBoYTEiKgoJRGF0YVR1cGxlEg4KBnRhcmdldBgB",
            "IAEoCRINCgV2YWx1ZRgCIAEoCSI1Cg5QcmVkaWN0ZWRUdXBsZRIOCgZ0YXJn",
            "ZXQYASABKAkSEwoLcHJlZGljdGlvbnMYAiADKAkiQgoNRGVsZXRlUmVxdWVz",
            "dBISCgptb2RlbF90eXBlGAEgASgJEg8KB2RhdGFzZXQYAiABKAkSDAoEdGFn",
            "cxgDIAMoCSLDAQoPRmVlZGJhY2tSZXF1ZXN0Eg8KB2RhdGFzZXQYASABKAkS",
            "DAoEdGFncxgCIAMoCRJBCgdlbnRyaWVzGAMgAygLMjAuYXNndC5kYXRhc2Vy",
            "dmljZS52MWFscGhhMS5GZWVkYmFja1JlcXVlc3QuRW50cnkaTgoFRW50cnkS",
            "CgoCaWQYASABKAkSOQoLdHJ1ZV92YWx1ZXMYAiADKAsyJC5hc2d0LmRhdGFz",
            "ZXJ2aWNlLnYxYWxwaGExLkRhdGFUdXBsZSJGCg9SZXRlbnRpb25Qb2xpY3kS",
            "EgoIbWF4X2RheXMYASABKAVIABIVCgttYXhfcmVjb3JkcxgCIAEoBUgAQggK",
            "BnBvbGljeUINWgtkYXRhc2VydmljZWIGcHJvdG8z"));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { },
          new pbr::GeneratedClrTypeInfo(null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.Dataservice.V1Alpha1.DataTuple), global::Asgt.Dataservice.V1Alpha1.DataTuple.Parser, new[]{ "Target", "Value" }, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.Dataservice.V1Alpha1.PredictedTuple), global::Asgt.Dataservice.V1Alpha1.PredictedTuple.Parser, new[]{ "Target", "Predictions" }, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.Dataservice.V1Alpha1.DeleteRequest), global::Asgt.Dataservice.V1Alpha1.DeleteRequest.Parser, new[]{ "ModelType", "Dataset", "Tags" }, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.Dataservice.V1Alpha1.FeedbackRequest), global::Asgt.Dataservice.V1Alpha1.FeedbackRequest.Parser, new[]{ "Dataset", "Tags", "Entries" }, null, null, new pbr::GeneratedClrTypeInfo[] { new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.Dataservice.V1Alpha1.FeedbackRequest.Types.Entry), global::Asgt.Dataservice.V1Alpha1.FeedbackRequest.Types.Entry.Parser, new[]{ "Id", "TrueValues" }, null, null, null)}),
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.Dataservice.V1Alpha1.RetentionPolicy), global::Asgt.Dataservice.V1Alpha1.RetentionPolicy.Parser, new[]{ "MaxDays", "MaxRecords" }, new[]{ "Policy" }, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  /// <summary>
  /// Common Data types
  /// </summary>
  public sealed partial class DataTuple : pb::IMessage<DataTuple> {
    private static readonly pb::MessageParser<DataTuple> _parser = new pb::MessageParser<DataTuple>(() => new DataTuple());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<DataTuple> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Asgt.Dataservice.V1Alpha1.DataReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public DataTuple() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public DataTuple(DataTuple other) : this() {
      target_ = other.target_;
      value_ = other.value_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public DataTuple Clone() {
      return new DataTuple(this);
    }

    /// <summary>Field number for the "target" field.</summary>
    public const int TargetFieldNumber = 1;
    private string target_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string Target {
      get { return target_; }
      set {
        target_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "value" field.</summary>
    public const int ValueFieldNumber = 2;
    private string value_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string Value {
      get { return value_; }
      set {
        value_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as DataTuple);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(DataTuple other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Target != other.Target) return false;
      if (Value != other.Value) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (Target.Length != 0) hash ^= Target.GetHashCode();
      if (Value.Length != 0) hash ^= Value.GetHashCode();
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
      if (Target.Length != 0) {
        output.WriteRawTag(10);
        output.WriteString(Target);
      }
      if (Value.Length != 0) {
        output.WriteRawTag(18);
        output.WriteString(Value);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (Target.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Target);
      }
      if (Value.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Value);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(DataTuple other) {
      if (other == null) {
        return;
      }
      if (other.Target.Length != 0) {
        Target = other.Target;
      }
      if (other.Value.Length != 0) {
        Value = other.Value;
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
            Target = input.ReadString();
            break;
          }
          case 18: {
            Value = input.ReadString();
            break;
          }
        }
      }
    }

  }

  public sealed partial class PredictedTuple : pb::IMessage<PredictedTuple> {
    private static readonly pb::MessageParser<PredictedTuple> _parser = new pb::MessageParser<PredictedTuple>(() => new PredictedTuple());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<PredictedTuple> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Asgt.Dataservice.V1Alpha1.DataReflection.Descriptor.MessageTypes[1]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public PredictedTuple() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public PredictedTuple(PredictedTuple other) : this() {
      target_ = other.target_;
      predictions_ = other.predictions_.Clone();
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public PredictedTuple Clone() {
      return new PredictedTuple(this);
    }

    /// <summary>Field number for the "target" field.</summary>
    public const int TargetFieldNumber = 1;
    private string target_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string Target {
      get { return target_; }
      set {
        target_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "predictions" field.</summary>
    public const int PredictionsFieldNumber = 2;
    private static readonly pb::FieldCodec<string> _repeated_predictions_codec
        = pb::FieldCodec.ForString(18);
    private readonly pbc::RepeatedField<string> predictions_ = new pbc::RepeatedField<string>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<string> Predictions {
      get { return predictions_; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as PredictedTuple);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(PredictedTuple other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Target != other.Target) return false;
      if(!predictions_.Equals(other.predictions_)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (Target.Length != 0) hash ^= Target.GetHashCode();
      hash ^= predictions_.GetHashCode();
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
      if (Target.Length != 0) {
        output.WriteRawTag(10);
        output.WriteString(Target);
      }
      predictions_.WriteTo(output, _repeated_predictions_codec);
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (Target.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Target);
      }
      size += predictions_.CalculateSize(_repeated_predictions_codec);
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(PredictedTuple other) {
      if (other == null) {
        return;
      }
      if (other.Target.Length != 0) {
        Target = other.Target;
      }
      predictions_.Add(other.predictions_);
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
            Target = input.ReadString();
            break;
          }
          case 18: {
            predictions_.AddEntriesFrom(input, _repeated_predictions_codec);
            break;
          }
        }
      }
    }

  }

  /// <summary>
  /// Dataservice
  /// </summary>
  public sealed partial class DeleteRequest : pb::IMessage<DeleteRequest> {
    private static readonly pb::MessageParser<DeleteRequest> _parser = new pb::MessageParser<DeleteRequest>(() => new DeleteRequest());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<DeleteRequest> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Asgt.Dataservice.V1Alpha1.DataReflection.Descriptor.MessageTypes[2]; }
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
      modelType_ = other.modelType_;
      dataset_ = other.dataset_;
      tags_ = other.tags_.Clone();
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public DeleteRequest Clone() {
      return new DeleteRequest(this);
    }

    /// <summary>Field number for the "model_type" field.</summary>
    public const int ModelTypeFieldNumber = 1;
    private string modelType_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string ModelType {
      get { return modelType_; }
      set {
        modelType_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "dataset" field.</summary>
    public const int DatasetFieldNumber = 2;
    private string dataset_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string Dataset {
      get { return dataset_; }
      set {
        dataset_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "tags" field.</summary>
    public const int TagsFieldNumber = 3;
    private static readonly pb::FieldCodec<string> _repeated_tags_codec
        = pb::FieldCodec.ForString(26);
    private readonly pbc::RepeatedField<string> tags_ = new pbc::RepeatedField<string>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<string> Tags {
      get { return tags_; }
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
      if (ModelType != other.ModelType) return false;
      if (Dataset != other.Dataset) return false;
      if(!tags_.Equals(other.tags_)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (ModelType.Length != 0) hash ^= ModelType.GetHashCode();
      if (Dataset.Length != 0) hash ^= Dataset.GetHashCode();
      hash ^= tags_.GetHashCode();
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
      if (ModelType.Length != 0) {
        output.WriteRawTag(10);
        output.WriteString(ModelType);
      }
      if (Dataset.Length != 0) {
        output.WriteRawTag(18);
        output.WriteString(Dataset);
      }
      tags_.WriteTo(output, _repeated_tags_codec);
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (ModelType.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(ModelType);
      }
      if (Dataset.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Dataset);
      }
      size += tags_.CalculateSize(_repeated_tags_codec);
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
      if (other.ModelType.Length != 0) {
        ModelType = other.ModelType;
      }
      if (other.Dataset.Length != 0) {
        Dataset = other.Dataset;
      }
      tags_.Add(other.tags_);
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
            ModelType = input.ReadString();
            break;
          }
          case 18: {
            Dataset = input.ReadString();
            break;
          }
          case 26: {
            tags_.AddEntriesFrom(input, _repeated_tags_codec);
            break;
          }
        }
      }
    }

  }

  public sealed partial class FeedbackRequest : pb::IMessage<FeedbackRequest> {
    private static readonly pb::MessageParser<FeedbackRequest> _parser = new pb::MessageParser<FeedbackRequest>(() => new FeedbackRequest());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<FeedbackRequest> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Asgt.Dataservice.V1Alpha1.DataReflection.Descriptor.MessageTypes[3]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public FeedbackRequest() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public FeedbackRequest(FeedbackRequest other) : this() {
      dataset_ = other.dataset_;
      tags_ = other.tags_.Clone();
      entries_ = other.entries_.Clone();
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public FeedbackRequest Clone() {
      return new FeedbackRequest(this);
    }

    /// <summary>Field number for the "dataset" field.</summary>
    public const int DatasetFieldNumber = 1;
    private string dataset_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string Dataset {
      get { return dataset_; }
      set {
        dataset_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "tags" field.</summary>
    public const int TagsFieldNumber = 2;
    private static readonly pb::FieldCodec<string> _repeated_tags_codec
        = pb::FieldCodec.ForString(18);
    private readonly pbc::RepeatedField<string> tags_ = new pbc::RepeatedField<string>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<string> Tags {
      get { return tags_; }
    }

    /// <summary>Field number for the "entries" field.</summary>
    public const int EntriesFieldNumber = 3;
    private static readonly pb::FieldCodec<global::Asgt.Dataservice.V1Alpha1.FeedbackRequest.Types.Entry> _repeated_entries_codec
        = pb::FieldCodec.ForMessage(26, global::Asgt.Dataservice.V1Alpha1.FeedbackRequest.Types.Entry.Parser);
    private readonly pbc::RepeatedField<global::Asgt.Dataservice.V1Alpha1.FeedbackRequest.Types.Entry> entries_ = new pbc::RepeatedField<global::Asgt.Dataservice.V1Alpha1.FeedbackRequest.Types.Entry>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<global::Asgt.Dataservice.V1Alpha1.FeedbackRequest.Types.Entry> Entries {
      get { return entries_; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as FeedbackRequest);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(FeedbackRequest other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Dataset != other.Dataset) return false;
      if(!tags_.Equals(other.tags_)) return false;
      if(!entries_.Equals(other.entries_)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (Dataset.Length != 0) hash ^= Dataset.GetHashCode();
      hash ^= tags_.GetHashCode();
      hash ^= entries_.GetHashCode();
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
      if (Dataset.Length != 0) {
        output.WriteRawTag(10);
        output.WriteString(Dataset);
      }
      tags_.WriteTo(output, _repeated_tags_codec);
      entries_.WriteTo(output, _repeated_entries_codec);
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (Dataset.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Dataset);
      }
      size += tags_.CalculateSize(_repeated_tags_codec);
      size += entries_.CalculateSize(_repeated_entries_codec);
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(FeedbackRequest other) {
      if (other == null) {
        return;
      }
      if (other.Dataset.Length != 0) {
        Dataset = other.Dataset;
      }
      tags_.Add(other.tags_);
      entries_.Add(other.entries_);
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
            Dataset = input.ReadString();
            break;
          }
          case 18: {
            tags_.AddEntriesFrom(input, _repeated_tags_codec);
            break;
          }
          case 26: {
            entries_.AddEntriesFrom(input, _repeated_entries_codec);
            break;
          }
        }
      }
    }

    #region Nested types
    /// <summary>Container for nested types declared in the FeedbackRequest message type.</summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static partial class Types {
      public sealed partial class Entry : pb::IMessage<Entry> {
        private static readonly pb::MessageParser<Entry> _parser = new pb::MessageParser<Entry>(() => new Entry());
        private pb::UnknownFieldSet _unknownFields;
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public static pb::MessageParser<Entry> Parser { get { return _parser; } }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public static pbr::MessageDescriptor Descriptor {
          get { return global::Asgt.Dataservice.V1Alpha1.FeedbackRequest.Descriptor.NestedTypes[0]; }
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        pbr::MessageDescriptor pb::IMessage.Descriptor {
          get { return Descriptor; }
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public Entry() {
          OnConstruction();
        }

        partial void OnConstruction();

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public Entry(Entry other) : this() {
          id_ = other.id_;
          trueValues_ = other.trueValues_.Clone();
          _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public Entry Clone() {
          return new Entry(this);
        }

        /// <summary>Field number for the "id" field.</summary>
        public const int IdFieldNumber = 1;
        private string id_ = "";
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public string Id {
          get { return id_; }
          set {
            id_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
          }
        }

        /// <summary>Field number for the "true_values" field.</summary>
        public const int TrueValuesFieldNumber = 2;
        private static readonly pb::FieldCodec<global::Asgt.Dataservice.V1Alpha1.DataTuple> _repeated_trueValues_codec
            = pb::FieldCodec.ForMessage(18, global::Asgt.Dataservice.V1Alpha1.DataTuple.Parser);
        private readonly pbc::RepeatedField<global::Asgt.Dataservice.V1Alpha1.DataTuple> trueValues_ = new pbc::RepeatedField<global::Asgt.Dataservice.V1Alpha1.DataTuple>();
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public pbc::RepeatedField<global::Asgt.Dataservice.V1Alpha1.DataTuple> TrueValues {
          get { return trueValues_; }
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public override bool Equals(object other) {
          return Equals(other as Entry);
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public bool Equals(Entry other) {
          if (ReferenceEquals(other, null)) {
            return false;
          }
          if (ReferenceEquals(other, this)) {
            return true;
          }
          if (Id != other.Id) return false;
          if(!trueValues_.Equals(other.trueValues_)) return false;
          return Equals(_unknownFields, other._unknownFields);
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public override int GetHashCode() {
          int hash = 1;
          if (Id.Length != 0) hash ^= Id.GetHashCode();
          hash ^= trueValues_.GetHashCode();
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
          if (Id.Length != 0) {
            output.WriteRawTag(10);
            output.WriteString(Id);
          }
          trueValues_.WriteTo(output, _repeated_trueValues_codec);
          if (_unknownFields != null) {
            _unknownFields.WriteTo(output);
          }
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public int CalculateSize() {
          int size = 0;
          if (Id.Length != 0) {
            size += 1 + pb::CodedOutputStream.ComputeStringSize(Id);
          }
          size += trueValues_.CalculateSize(_repeated_trueValues_codec);
          if (_unknownFields != null) {
            size += _unknownFields.CalculateSize();
          }
          return size;
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public void MergeFrom(Entry other) {
          if (other == null) {
            return;
          }
          if (other.Id.Length != 0) {
            Id = other.Id;
          }
          trueValues_.Add(other.trueValues_);
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
                Id = input.ReadString();
                break;
              }
              case 18: {
                trueValues_.AddEntriesFrom(input, _repeated_trueValues_codec);
                break;
              }
            }
          }
        }

      }

    }
    #endregion

  }

  public sealed partial class RetentionPolicy : pb::IMessage<RetentionPolicy> {
    private static readonly pb::MessageParser<RetentionPolicy> _parser = new pb::MessageParser<RetentionPolicy>(() => new RetentionPolicy());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<RetentionPolicy> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Asgt.Dataservice.V1Alpha1.DataReflection.Descriptor.MessageTypes[4]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public RetentionPolicy() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public RetentionPolicy(RetentionPolicy other) : this() {
      switch (other.PolicyCase) {
        case PolicyOneofCase.MaxDays:
          MaxDays = other.MaxDays;
          break;
        case PolicyOneofCase.MaxRecords:
          MaxRecords = other.MaxRecords;
          break;
      }

      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public RetentionPolicy Clone() {
      return new RetentionPolicy(this);
    }

    /// <summary>Field number for the "max_days" field.</summary>
    public const int MaxDaysFieldNumber = 1;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int MaxDays {
      get { return policyCase_ == PolicyOneofCase.MaxDays ? (int) policy_ : 0; }
      set {
        policy_ = value;
        policyCase_ = PolicyOneofCase.MaxDays;
      }
    }

    /// <summary>Field number for the "max_records" field.</summary>
    public const int MaxRecordsFieldNumber = 2;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int MaxRecords {
      get { return policyCase_ == PolicyOneofCase.MaxRecords ? (int) policy_ : 0; }
      set {
        policy_ = value;
        policyCase_ = PolicyOneofCase.MaxRecords;
      }
    }

    private object policy_;
    /// <summary>Enum of possible cases for the "policy" oneof.</summary>
    public enum PolicyOneofCase {
      None = 0,
      MaxDays = 1,
      MaxRecords = 2,
    }
    private PolicyOneofCase policyCase_ = PolicyOneofCase.None;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public PolicyOneofCase PolicyCase {
      get { return policyCase_; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void ClearPolicy() {
      policyCase_ = PolicyOneofCase.None;
      policy_ = null;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as RetentionPolicy);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(RetentionPolicy other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (MaxDays != other.MaxDays) return false;
      if (MaxRecords != other.MaxRecords) return false;
      if (PolicyCase != other.PolicyCase) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (policyCase_ == PolicyOneofCase.MaxDays) hash ^= MaxDays.GetHashCode();
      if (policyCase_ == PolicyOneofCase.MaxRecords) hash ^= MaxRecords.GetHashCode();
      hash ^= (int) policyCase_;
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
      if (policyCase_ == PolicyOneofCase.MaxDays) {
        output.WriteRawTag(8);
        output.WriteInt32(MaxDays);
      }
      if (policyCase_ == PolicyOneofCase.MaxRecords) {
        output.WriteRawTag(16);
        output.WriteInt32(MaxRecords);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (policyCase_ == PolicyOneofCase.MaxDays) {
        size += 1 + pb::CodedOutputStream.ComputeInt32Size(MaxDays);
      }
      if (policyCase_ == PolicyOneofCase.MaxRecords) {
        size += 1 + pb::CodedOutputStream.ComputeInt32Size(MaxRecords);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(RetentionPolicy other) {
      if (other == null) {
        return;
      }
      switch (other.PolicyCase) {
        case PolicyOneofCase.MaxDays:
          MaxDays = other.MaxDays;
          break;
        case PolicyOneofCase.MaxRecords:
          MaxRecords = other.MaxRecords;
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
          case 8: {
            MaxDays = input.ReadInt32();
            break;
          }
          case 16: {
            MaxRecords = input.ReadInt32();
            break;
          }
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code