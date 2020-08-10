// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: asgt/data/v1/bq_entries.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Asgt.Dataservice.V1Alpha1 {

  /// <summary>Holder for reflection information generated from asgt/data/v1/bq_entries.proto</summary>
  public static partial class BqEntriesReflection {

    #region Descriptor
    /// <summary>File descriptor for asgt/data/v1/bq_entries.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static BqEntriesReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "Ch1hc2d0L2RhdGEvdjEvYnFfZW50cmllcy5wcm90bxIZYXNndC5kYXRhc2Vy",
            "dmljZS52MWFscGhhMRoUYXNndC90eXBlL2RhdGEucHJvdG8aFWFzZ3QvdHlw",
            "ZS9tb2RlbC5wcm90bxoaYXNndC90eXBlL3ByZWRpY3Rpb24ucHJvdG8aHGFz",
            "Z3QvdHlwZS90YXJnZXRfdmFsdWUucHJvdG8aHGdlbl9icV9zY2hlbWEvYnFf",
            "ZmllbGQucHJvdG8aHGdlbl9icV9zY2hlbWEvYnFfdGFibGUucHJvdG8aHGdv",
            "b2dsZS9hcGkvYW5ub3RhdGlvbnMucHJvdG8i+gMKBUVudHJ5Ej4KAmlkGAEg",
            "ASgJQjLqPy8iLUlELCBtYXRjaGVzIEVudm95IHJlcXVlc3QgaWQgaWYgZmVl",
            "ZGJhY2sgZGF0YRIXCghjb25zdW1lchgCIAEoCUIF6j8CCAESGwoMZGF0YXNl",
            "dF9uYW1lGAMgASgJQgXqPwIIARIbCgxkYXRhc2V0X3R5cGUYDCABKAlCBeo/",
            "AggBEi8KCmRhdGFzZXRfaWQYCyABKAlCG+o/GAgBIhR1bmlxdWUgSUQgb2Yg",
            "ZGF0YXNldBJUCgR0YWdzGAQgAygJQkbqP0MiQVRhZ3MgZGVmaW5lZCBieSBj",
            "b25zdW1lciwgZW5yaWNoZWQgYnkgc2VydmljZSBpZiB2YWxldGtleSBpcyB1",
            "c2VkEh0KBGRhdGEYBSABKAsyDy5hc2d0LnR5cGUuRGF0YRItCg10YXJnZXRf",
            "dmFsdWVzGAYgAygLMhYuYXNndC50eXBlLlRhcmdldFZhbHVlEh8KBW1vZGVs",
            "GAkgASgLMhAuYXNndC50eXBlLk1vZGVsEjAKCnByZWRpY3Rpb24YCiADKAsy",
            "HC5hc2d0LnR5cGUuUHJlZGljdGlvbi5UYXJnZXQSJAoKdGltZV9hZGRlZBgI",
            "IAEoBEIQ6j8NCAESCVRJTUVTVEFNUDoQ6j8NCgtzYW1wbGVfZGF0YUI3WjVn",
            "aXRodWIuY29tL2UtY29ub21pYy92bWxhcGlzL2dlbi9nby9hc2d0L2RhdGEv",
            "djE7ZGF0YWIGcHJvdG8z"));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Asgt.Type.DataReflection.Descriptor, global::Asgt.Type.ModelReflection.Descriptor, global::Asgt.Type.PredictionReflection.Descriptor, global::Asgt.Type.TargetValueReflection.Descriptor, global::GenBqSchema.BqFieldReflection.Descriptor, global::GenBqSchema.BqTableReflection.Descriptor, global::Google.Api.AnnotationsReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.Dataservice.V1Alpha1.Entry), global::Asgt.Dataservice.V1Alpha1.Entry.Parser, new[]{ "Id", "Consumer", "DatasetName", "DatasetType", "DatasetId", "Tags", "Data", "TargetValues", "Model", "Prediction", "TimeAdded" }, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  /// <summary>
  /// BQ schema gen - could be used for adding direct developer data endpoints
  /// </summary>
  public sealed partial class Entry : pb::IMessage<Entry> {
    private static readonly pb::MessageParser<Entry> _parser = new pb::MessageParser<Entry>(() => new Entry());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<Entry> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Asgt.Dataservice.V1Alpha1.BqEntriesReflection.Descriptor.MessageTypes[0]; }
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
      consumer_ = other.consumer_;
      datasetName_ = other.datasetName_;
      datasetType_ = other.datasetType_;
      datasetId_ = other.datasetId_;
      tags_ = other.tags_.Clone();
      data_ = other.data_ != null ? other.data_.Clone() : null;
      targetValues_ = other.targetValues_.Clone();
      model_ = other.model_ != null ? other.model_.Clone() : null;
      prediction_ = other.prediction_.Clone();
      timeAdded_ = other.timeAdded_;
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

    /// <summary>Field number for the "consumer" field.</summary>
    public const int ConsumerFieldNumber = 2;
    private string consumer_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string Consumer {
      get { return consumer_; }
      set {
        consumer_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "dataset_name" field.</summary>
    public const int DatasetNameFieldNumber = 3;
    private string datasetName_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string DatasetName {
      get { return datasetName_; }
      set {
        datasetName_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "dataset_type" field.</summary>
    public const int DatasetTypeFieldNumber = 12;
    private string datasetType_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string DatasetType {
      get { return datasetType_; }
      set {
        datasetType_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "dataset_id" field.</summary>
    public const int DatasetIdFieldNumber = 11;
    private string datasetId_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string DatasetId {
      get { return datasetId_; }
      set {
        datasetId_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
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

    /// <summary>Field number for the "data" field.</summary>
    public const int DataFieldNumber = 5;
    private global::Asgt.Type.Data data_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Asgt.Type.Data Data {
      get { return data_; }
      set {
        data_ = value;
      }
    }

    /// <summary>Field number for the "target_values" field.</summary>
    public const int TargetValuesFieldNumber = 6;
    private static readonly pb::FieldCodec<global::Asgt.Type.TargetValue> _repeated_targetValues_codec
        = pb::FieldCodec.ForMessage(50, global::Asgt.Type.TargetValue.Parser);
    private readonly pbc::RepeatedField<global::Asgt.Type.TargetValue> targetValues_ = new pbc::RepeatedField<global::Asgt.Type.TargetValue>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<global::Asgt.Type.TargetValue> TargetValues {
      get { return targetValues_; }
    }

    /// <summary>Field number for the "model" field.</summary>
    public const int ModelFieldNumber = 9;
    private global::Asgt.Type.Model model_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Asgt.Type.Model Model {
      get { return model_; }
      set {
        model_ = value;
      }
    }

    /// <summary>Field number for the "prediction" field.</summary>
    public const int PredictionFieldNumber = 10;
    private static readonly pb::FieldCodec<global::Asgt.Type.Prediction.Types.Target> _repeated_prediction_codec
        = pb::FieldCodec.ForMessage(82, global::Asgt.Type.Prediction.Types.Target.Parser);
    private readonly pbc::RepeatedField<global::Asgt.Type.Prediction.Types.Target> prediction_ = new pbc::RepeatedField<global::Asgt.Type.Prediction.Types.Target>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<global::Asgt.Type.Prediction.Types.Target> Prediction {
      get { return prediction_; }
    }

    /// <summary>Field number for the "time_added" field.</summary>
    public const int TimeAddedFieldNumber = 8;
    private ulong timeAdded_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public ulong TimeAdded {
      get { return timeAdded_; }
      set {
        timeAdded_ = value;
      }
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
      if (Consumer != other.Consumer) return false;
      if (DatasetName != other.DatasetName) return false;
      if (DatasetType != other.DatasetType) return false;
      if (DatasetId != other.DatasetId) return false;
      if(!tags_.Equals(other.tags_)) return false;
      if (!object.Equals(Data, other.Data)) return false;
      if(!targetValues_.Equals(other.targetValues_)) return false;
      if (!object.Equals(Model, other.Model)) return false;
      if(!prediction_.Equals(other.prediction_)) return false;
      if (TimeAdded != other.TimeAdded) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (Id.Length != 0) hash ^= Id.GetHashCode();
      if (Consumer.Length != 0) hash ^= Consumer.GetHashCode();
      if (DatasetName.Length != 0) hash ^= DatasetName.GetHashCode();
      if (DatasetType.Length != 0) hash ^= DatasetType.GetHashCode();
      if (DatasetId.Length != 0) hash ^= DatasetId.GetHashCode();
      hash ^= tags_.GetHashCode();
      if (data_ != null) hash ^= Data.GetHashCode();
      hash ^= targetValues_.GetHashCode();
      if (model_ != null) hash ^= Model.GetHashCode();
      hash ^= prediction_.GetHashCode();
      if (TimeAdded != 0UL) hash ^= TimeAdded.GetHashCode();
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
      if (Consumer.Length != 0) {
        output.WriteRawTag(18);
        output.WriteString(Consumer);
      }
      if (DatasetName.Length != 0) {
        output.WriteRawTag(26);
        output.WriteString(DatasetName);
      }
      tags_.WriteTo(output, _repeated_tags_codec);
      if (data_ != null) {
        output.WriteRawTag(42);
        output.WriteMessage(Data);
      }
      targetValues_.WriteTo(output, _repeated_targetValues_codec);
      if (TimeAdded != 0UL) {
        output.WriteRawTag(64);
        output.WriteUInt64(TimeAdded);
      }
      if (model_ != null) {
        output.WriteRawTag(74);
        output.WriteMessage(Model);
      }
      prediction_.WriteTo(output, _repeated_prediction_codec);
      if (DatasetId.Length != 0) {
        output.WriteRawTag(90);
        output.WriteString(DatasetId);
      }
      if (DatasetType.Length != 0) {
        output.WriteRawTag(98);
        output.WriteString(DatasetType);
      }
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
      if (Consumer.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Consumer);
      }
      if (DatasetName.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(DatasetName);
      }
      if (DatasetType.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(DatasetType);
      }
      if (DatasetId.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(DatasetId);
      }
      size += tags_.CalculateSize(_repeated_tags_codec);
      if (data_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Data);
      }
      size += targetValues_.CalculateSize(_repeated_targetValues_codec);
      if (model_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Model);
      }
      size += prediction_.CalculateSize(_repeated_prediction_codec);
      if (TimeAdded != 0UL) {
        size += 1 + pb::CodedOutputStream.ComputeUInt64Size(TimeAdded);
      }
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
      if (other.Consumer.Length != 0) {
        Consumer = other.Consumer;
      }
      if (other.DatasetName.Length != 0) {
        DatasetName = other.DatasetName;
      }
      if (other.DatasetType.Length != 0) {
        DatasetType = other.DatasetType;
      }
      if (other.DatasetId.Length != 0) {
        DatasetId = other.DatasetId;
      }
      tags_.Add(other.tags_);
      if (other.data_ != null) {
        if (data_ == null) {
          data_ = new global::Asgt.Type.Data();
        }
        Data.MergeFrom(other.Data);
      }
      targetValues_.Add(other.targetValues_);
      if (other.model_ != null) {
        if (model_ == null) {
          model_ = new global::Asgt.Type.Model();
        }
        Model.MergeFrom(other.Model);
      }
      prediction_.Add(other.prediction_);
      if (other.TimeAdded != 0UL) {
        TimeAdded = other.TimeAdded;
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
            Id = input.ReadString();
            break;
          }
          case 18: {
            Consumer = input.ReadString();
            break;
          }
          case 26: {
            DatasetName = input.ReadString();
            break;
          }
          case 34: {
            tags_.AddEntriesFrom(input, _repeated_tags_codec);
            break;
          }
          case 42: {
            if (data_ == null) {
              data_ = new global::Asgt.Type.Data();
            }
            input.ReadMessage(data_);
            break;
          }
          case 50: {
            targetValues_.AddEntriesFrom(input, _repeated_targetValues_codec);
            break;
          }
          case 64: {
            TimeAdded = input.ReadUInt64();
            break;
          }
          case 74: {
            if (model_ == null) {
              model_ = new global::Asgt.Type.Model();
            }
            input.ReadMessage(model_);
            break;
          }
          case 82: {
            prediction_.AddEntriesFrom(input, _repeated_prediction_codec);
            break;
          }
          case 90: {
            DatasetId = input.ReadString();
            break;
          }
          case 98: {
            DatasetType = input.ReadString();
            break;
          }
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code
