// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: asgt/modeltrainer/v1alpha1/training_task.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Asgt.Modeltrainer.V1Alpha1 {

  /// <summary>Holder for reflection information generated from asgt/modeltrainer/v1alpha1/training_task.proto</summary>
  public static partial class TrainingTaskReflection {

    #region Descriptor
    /// <summary>File descriptor for asgt/modeltrainer/v1alpha1/training_task.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static TrainingTaskReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "Ci5hc2d0L21vZGVsdHJhaW5lci92MWFscGhhMS90cmFpbmluZ190YXNrLnBy",
            "b3RvEhphc2d0Lm1vZGVsdHJhaW5lci52MWFscGhhMRocYXNndC90eXBlL2Rh",
            "dGFzZXRfaW5mby5wcm90byLyAQoOVHJhaW5Nb2RlbFRhc2sSCgoCaWQYASAB",
            "KAkSLAoMZGF0YXNldF9pbmZvGAIgASgLMhYuYXNndC50eXBlLkRhdGFzZXRJ",
            "bmZvEhUKDW1vZGVsX3ZlcnNpb24YAyABKAMSQQoGc3RhdHVzGAQgASgOMjEu",
            "YXNndC5tb2RlbHRyYWluZXIudjFhbHBoYTEuVHJhaW5Nb2RlbFRhc2suU3Rh",
            "dHVzIkwKBlN0YXR1cxILCgdVTktOT1dOEAASDQoJU0NIRURVTEVEEAESCwoH",
            "U1RBUlRFRBADEg0KCVNVQ0NFRURFRBAEEgoKBkZBSUxFRBAFQg5aDG1vZGVs",
            "dHJhaW5lcmIGcHJvdG8z"));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Asgt.Type.DatasetInfoReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.Modeltrainer.V1Alpha1.TrainModelTask), global::Asgt.Modeltrainer.V1Alpha1.TrainModelTask.Parser, new[]{ "Id", "DatasetInfo", "ModelVersion", "Status" }, null, new[]{ typeof(global::Asgt.Modeltrainer.V1Alpha1.TrainModelTask.Types.Status) }, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class TrainModelTask : pb::IMessage<TrainModelTask> {
    private static readonly pb::MessageParser<TrainModelTask> _parser = new pb::MessageParser<TrainModelTask>(() => new TrainModelTask());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<TrainModelTask> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Asgt.Modeltrainer.V1Alpha1.TrainingTaskReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public TrainModelTask() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public TrainModelTask(TrainModelTask other) : this() {
      id_ = other.id_;
      datasetInfo_ = other.datasetInfo_ != null ? other.datasetInfo_.Clone() : null;
      modelVersion_ = other.modelVersion_;
      status_ = other.status_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public TrainModelTask Clone() {
      return new TrainModelTask(this);
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

    /// <summary>Field number for the "dataset_info" field.</summary>
    public const int DatasetInfoFieldNumber = 2;
    private global::Asgt.Type.DatasetInfo datasetInfo_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Asgt.Type.DatasetInfo DatasetInfo {
      get { return datasetInfo_; }
      set {
        datasetInfo_ = value;
      }
    }

    /// <summary>Field number for the "model_version" field.</summary>
    public const int ModelVersionFieldNumber = 3;
    private long modelVersion_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public long ModelVersion {
      get { return modelVersion_; }
      set {
        modelVersion_ = value;
      }
    }

    /// <summary>Field number for the "status" field.</summary>
    public const int StatusFieldNumber = 4;
    private global::Asgt.Modeltrainer.V1Alpha1.TrainModelTask.Types.Status status_ = 0;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Asgt.Modeltrainer.V1Alpha1.TrainModelTask.Types.Status Status {
      get { return status_; }
      set {
        status_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as TrainModelTask);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(TrainModelTask other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Id != other.Id) return false;
      if (!object.Equals(DatasetInfo, other.DatasetInfo)) return false;
      if (ModelVersion != other.ModelVersion) return false;
      if (Status != other.Status) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (Id.Length != 0) hash ^= Id.GetHashCode();
      if (datasetInfo_ != null) hash ^= DatasetInfo.GetHashCode();
      if (ModelVersion != 0L) hash ^= ModelVersion.GetHashCode();
      if (Status != 0) hash ^= Status.GetHashCode();
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
      if (datasetInfo_ != null) {
        output.WriteRawTag(18);
        output.WriteMessage(DatasetInfo);
      }
      if (ModelVersion != 0L) {
        output.WriteRawTag(24);
        output.WriteInt64(ModelVersion);
      }
      if (Status != 0) {
        output.WriteRawTag(32);
        output.WriteEnum((int) Status);
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
      if (datasetInfo_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(DatasetInfo);
      }
      if (ModelVersion != 0L) {
        size += 1 + pb::CodedOutputStream.ComputeInt64Size(ModelVersion);
      }
      if (Status != 0) {
        size += 1 + pb::CodedOutputStream.ComputeEnumSize((int) Status);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(TrainModelTask other) {
      if (other == null) {
        return;
      }
      if (other.Id.Length != 0) {
        Id = other.Id;
      }
      if (other.datasetInfo_ != null) {
        if (datasetInfo_ == null) {
          datasetInfo_ = new global::Asgt.Type.DatasetInfo();
        }
        DatasetInfo.MergeFrom(other.DatasetInfo);
      }
      if (other.ModelVersion != 0L) {
        ModelVersion = other.ModelVersion;
      }
      if (other.Status != 0) {
        Status = other.Status;
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
            if (datasetInfo_ == null) {
              datasetInfo_ = new global::Asgt.Type.DatasetInfo();
            }
            input.ReadMessage(datasetInfo_);
            break;
          }
          case 24: {
            ModelVersion = input.ReadInt64();
            break;
          }
          case 32: {
            status_ = (global::Asgt.Modeltrainer.V1Alpha1.TrainModelTask.Types.Status) input.ReadEnum();
            break;
          }
        }
      }
    }

    #region Nested types
    /// <summary>Container for nested types declared in the TrainModelTask message type.</summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static partial class Types {
      public enum Status {
        [pbr::OriginalName("UNKNOWN")] Unknown = 0,
        [pbr::OriginalName("SCHEDULED")] Scheduled = 1,
        [pbr::OriginalName("STARTED")] Started = 3,
        [pbr::OriginalName("SUCCEEDED")] Succeeded = 4,
        [pbr::OriginalName("FAILED")] Failed = 5,
      }

    }
    #endregion

  }

  #endregion

}

#endregion Designer generated code