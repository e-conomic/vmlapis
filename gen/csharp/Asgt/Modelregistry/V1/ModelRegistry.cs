// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: asgt/modelregistry/v1/model_registry.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021, 8981
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Asgt.Modelregistry.V1 {

  /// <summary>Holder for reflection information generated from asgt/modelregistry/v1/model_registry.proto</summary>
  public static partial class ModelRegistryReflection {

    #region Descriptor
    /// <summary>File descriptor for asgt/modelregistry/v1/model_registry.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static ModelRegistryReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "Ciphc2d0L21vZGVscmVnaXN0cnkvdjEvbW9kZWxfcmVnaXN0cnkucHJvdG8S",
            "FWFzZ3QubW9kZWxyZWdpc3RyeS52MRoXYXNndC90eXBlL2RhdGFzZXQucHJv",
            "dG8aImFzZ3QvdHlwZS9kYXRhc2V0X3N0YXRpc3RpY3MucHJvdG8aFWFzZ3Qv",
            "dHlwZS9tb2RlbC5wcm90bxoYYXNndC90eXBlL3JldmlzaW9uLnByb3RvGh5h",
            "c2d0L3R5cGUvdGFyZ2V0X21ldHJpY3MucHJvdG8aIGFzZ3QvdHlwZS90cmFp",
            "bl9zdGF0aXN0aWNzLnByb3RvGhtnb29nbGUvcHJvdG9idWYvZW1wdHkucHJv",
            "dG8iugQKFFJlZ2lzdGVyTW9kZWxSZXF1ZXN0EiwKB2RhdGFzZXQYASABKAsy",
            "Ei5hc2d0LnR5cGUuRGF0YXNldFIHZGF0YXNldBIvCghyZXZpc2lvbhgCIAEo",
            "CzITLmFzZ3QudHlwZS5SZXZpc2lvblIIcmV2aXNpb24SIwoNbW9kZWxfdmVy",
            "c2lvbhgDIAEoA1IMbW9kZWxWZXJzaW9uElIKB21ldHJpY3MYBCADKAsyOC5h",
            "c2d0Lm1vZGVscmVnaXN0cnkudjEuUmVnaXN0ZXJNb2RlbFJlcXVlc3QuTWV0",
            "cmljc0VudHJ5UgdtZXRyaWNzEj8KDnRhcmdldF9tZXRyaWNzGAUgAygLMhgu",
            "YXNndC50eXBlLlRhcmdldE1ldHJpY3NSDXRhcmdldE1ldHJpY3MSOQoKaW5w",
            "dXRfdHlwZRgGIAEoDjIaLmFzZ3QudHlwZS5Nb2RlbC5JbnB1dFR5cGVSCWlu",
            "cHV0VHlwZRJFChB0cmFpbl9zdGF0aXN0aWNzGAcgASgLMhouYXNndC50eXBl",
            "LlRyYWluU3RhdGlzdGljc1IPdHJhaW5TdGF0aXN0aWNzEksKEmRhdGFzZXRf",
            "c3RhdGlzdGljcxgIIAEoCzIcLmFzZ3QudHlwZS5EYXRhc2V0U3RhdGlzdGlj",
            "c1IRZGF0YXNldFN0YXRpc3RpY3MaOgoMTWV0cmljc0VudHJ5EhAKA2tleRgB",
            "IAEoCVIDa2V5EhQKBXZhbHVlGAIgASgFUgV2YWx1ZToCOAEiRgoWR2V0Q3Vy",
            "cmVudE1vZGVsUmVxdWVzdBIsCgdkYXRhc2V0GAEgASgLMhIuYXNndC50eXBl",
            "LkRhdGFzZXRSB2RhdGFzZXQiQQoXR2V0Q3VycmVudE1vZGVsUmVzcG9uc2US",
            "JgoFbW9kZWwYASABKAsyEC5hc2d0LnR5cGUuTW9kZWxSBW1vZGVsMs0CCg1N",
            "b2RlbFJlZ2lzdHJ5ElQKDVJlZ2lzdGVyTW9kZWwSKy5hc2d0Lm1vZGVscmVn",
            "aXN0cnkudjEuUmVnaXN0ZXJNb2RlbFJlcXVlc3QaFi5nb29nbGUucHJvdG9i",
            "dWYuRW1wdHkScAoPR2V0Q3VycmVudE1vZGVsEi0uYXNndC5tb2RlbHJlZ2lz",
            "dHJ5LnYxLkdldEN1cnJlbnRNb2RlbFJlcXVlc3QaLi5hc2d0Lm1vZGVscmVn",
            "aXN0cnkudjEuR2V0Q3VycmVudE1vZGVsUmVzcG9uc2USdAoTR2V0Q3VycmVu",
            "dEZ1bGxNb2RlbBItLmFzZ3QubW9kZWxyZWdpc3RyeS52MS5HZXRDdXJyZW50",
            "TW9kZWxSZXF1ZXN0Gi4uYXNndC5tb2RlbHJlZ2lzdHJ5LnYxLkdldEN1cnJl",
            "bnRNb2RlbFJlc3BvbnNlQvMBCh5haS52aXNtYS5hc2d0Lm1vZGVscmVnaXN0",
            "cnkudjFCEk1vZGVsUmVnaXN0cnlQcm90b1ABWkdnaXRodWIuY29tL2UtY29u",
            "b21pYy92bWxhcGlzL2dlbi9nby9hc2d0L21vZGVscmVnaXN0cnkvdjE7bW9k",
            "ZWxyZWdpc3RyeaICA0FNWKoCFUFzZ3QuTW9kZWxyZWdpc3RyeS5WMcoCFUFz",
            "Z3RcTW9kZWxyZWdpc3RyeVxWMeICIUFzZ3RcTW9kZWxyZWdpc3RyeVxWMVxH",
            "UEJNZXRhZGF0YeoCF0FzZ3Q6Ok1vZGVscmVnaXN0cnk6OlYxYgZwcm90bzM="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Asgt.Type.DatasetReflection.Descriptor, global::Asgt.Type.DatasetStatisticsReflection.Descriptor, global::Asgt.Type.ModelReflection.Descriptor, global::Asgt.Type.RevisionReflection.Descriptor, global::Asgt.Type.TargetMetricsReflection.Descriptor, global::Asgt.Type.TrainStatisticsReflection.Descriptor, global::Google.Protobuf.WellKnownTypes.EmptyReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.Modelregistry.V1.RegisterModelRequest), global::Asgt.Modelregistry.V1.RegisterModelRequest.Parser, new[]{ "Dataset", "Revision", "ModelVersion", "Metrics", "TargetMetrics", "InputType", "TrainStatistics", "DatasetStatistics" }, null, null, null, new pbr::GeneratedClrTypeInfo[] { null, }),
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.Modelregistry.V1.GetCurrentModelRequest), global::Asgt.Modelregistry.V1.GetCurrentModelRequest.Parser, new[]{ "Dataset" }, null, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.Modelregistry.V1.GetCurrentModelResponse), global::Asgt.Modelregistry.V1.GetCurrentModelResponse.Parser, new[]{ "Model" }, null, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class RegisterModelRequest : pb::IMessage<RegisterModelRequest>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<RegisterModelRequest> _parser = new pb::MessageParser<RegisterModelRequest>(() => new RegisterModelRequest());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pb::MessageParser<RegisterModelRequest> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Asgt.Modelregistry.V1.ModelRegistryReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public RegisterModelRequest() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public RegisterModelRequest(RegisterModelRequest other) : this() {
      dataset_ = other.dataset_ != null ? other.dataset_.Clone() : null;
      revision_ = other.revision_ != null ? other.revision_.Clone() : null;
      modelVersion_ = other.modelVersion_;
      metrics_ = other.metrics_.Clone();
      targetMetrics_ = other.targetMetrics_.Clone();
      inputType_ = other.inputType_;
      trainStatistics_ = other.trainStatistics_ != null ? other.trainStatistics_.Clone() : null;
      datasetStatistics_ = other.datasetStatistics_ != null ? other.datasetStatistics_.Clone() : null;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public RegisterModelRequest Clone() {
      return new RegisterModelRequest(this);
    }

    /// <summary>Field number for the "dataset" field.</summary>
    public const int DatasetFieldNumber = 1;
    private global::Asgt.Type.Dataset dataset_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public global::Asgt.Type.Dataset Dataset {
      get { return dataset_; }
      set {
        dataset_ = value;
      }
    }

    /// <summary>Field number for the "revision" field.</summary>
    public const int RevisionFieldNumber = 2;
    private global::Asgt.Type.Revision revision_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public global::Asgt.Type.Revision Revision {
      get { return revision_; }
      set {
        revision_ = value;
      }
    }

    /// <summary>Field number for the "model_version" field.</summary>
    public const int ModelVersionFieldNumber = 3;
    private long modelVersion_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public long ModelVersion {
      get { return modelVersion_; }
      set {
        modelVersion_ = value;
      }
    }

    /// <summary>Field number for the "metrics" field.</summary>
    public const int MetricsFieldNumber = 4;
    private static readonly pbc::MapField<string, int>.Codec _map_metrics_codec
        = new pbc::MapField<string, int>.Codec(pb::FieldCodec.ForString(10, ""), pb::FieldCodec.ForInt32(16, 0), 34);
    private readonly pbc::MapField<string, int> metrics_ = new pbc::MapField<string, int>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public pbc::MapField<string, int> Metrics {
      get { return metrics_; }
    }

    /// <summary>Field number for the "target_metrics" field.</summary>
    public const int TargetMetricsFieldNumber = 5;
    private static readonly pb::FieldCodec<global::Asgt.Type.TargetMetrics> _repeated_targetMetrics_codec
        = pb::FieldCodec.ForMessage(42, global::Asgt.Type.TargetMetrics.Parser);
    private readonly pbc::RepeatedField<global::Asgt.Type.TargetMetrics> targetMetrics_ = new pbc::RepeatedField<global::Asgt.Type.TargetMetrics>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public pbc::RepeatedField<global::Asgt.Type.TargetMetrics> TargetMetrics {
      get { return targetMetrics_; }
    }

    /// <summary>Field number for the "input_type" field.</summary>
    public const int InputTypeFieldNumber = 6;
    private global::Asgt.Type.Model.Types.InputType inputType_ = global::Asgt.Type.Model.Types.InputType.FeatureTensors;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public global::Asgt.Type.Model.Types.InputType InputType {
      get { return inputType_; }
      set {
        inputType_ = value;
      }
    }

    /// <summary>Field number for the "train_statistics" field.</summary>
    public const int TrainStatisticsFieldNumber = 7;
    private global::Asgt.Type.TrainStatistics trainStatistics_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public global::Asgt.Type.TrainStatistics TrainStatistics {
      get { return trainStatistics_; }
      set {
        trainStatistics_ = value;
      }
    }

    /// <summary>Field number for the "dataset_statistics" field.</summary>
    public const int DatasetStatisticsFieldNumber = 8;
    private global::Asgt.Type.DatasetStatistics datasetStatistics_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public global::Asgt.Type.DatasetStatistics DatasetStatistics {
      get { return datasetStatistics_; }
      set {
        datasetStatistics_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override bool Equals(object other) {
      return Equals(other as RegisterModelRequest);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public bool Equals(RegisterModelRequest other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (!object.Equals(Dataset, other.Dataset)) return false;
      if (!object.Equals(Revision, other.Revision)) return false;
      if (ModelVersion != other.ModelVersion) return false;
      if (!Metrics.Equals(other.Metrics)) return false;
      if(!targetMetrics_.Equals(other.targetMetrics_)) return false;
      if (InputType != other.InputType) return false;
      if (!object.Equals(TrainStatistics, other.TrainStatistics)) return false;
      if (!object.Equals(DatasetStatistics, other.DatasetStatistics)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override int GetHashCode() {
      int hash = 1;
      if (dataset_ != null) hash ^= Dataset.GetHashCode();
      if (revision_ != null) hash ^= Revision.GetHashCode();
      if (ModelVersion != 0L) hash ^= ModelVersion.GetHashCode();
      hash ^= Metrics.GetHashCode();
      hash ^= targetMetrics_.GetHashCode();
      if (InputType != global::Asgt.Type.Model.Types.InputType.FeatureTensors) hash ^= InputType.GetHashCode();
      if (trainStatistics_ != null) hash ^= TrainStatistics.GetHashCode();
      if (datasetStatistics_ != null) hash ^= DatasetStatistics.GetHashCode();
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
      if (dataset_ != null) {
        output.WriteRawTag(10);
        output.WriteMessage(Dataset);
      }
      if (revision_ != null) {
        output.WriteRawTag(18);
        output.WriteMessage(Revision);
      }
      if (ModelVersion != 0L) {
        output.WriteRawTag(24);
        output.WriteInt64(ModelVersion);
      }
      metrics_.WriteTo(output, _map_metrics_codec);
      targetMetrics_.WriteTo(output, _repeated_targetMetrics_codec);
      if (InputType != global::Asgt.Type.Model.Types.InputType.FeatureTensors) {
        output.WriteRawTag(48);
        output.WriteEnum((int) InputType);
      }
      if (trainStatistics_ != null) {
        output.WriteRawTag(58);
        output.WriteMessage(TrainStatistics);
      }
      if (datasetStatistics_ != null) {
        output.WriteRawTag(66);
        output.WriteMessage(DatasetStatistics);
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
      if (dataset_ != null) {
        output.WriteRawTag(10);
        output.WriteMessage(Dataset);
      }
      if (revision_ != null) {
        output.WriteRawTag(18);
        output.WriteMessage(Revision);
      }
      if (ModelVersion != 0L) {
        output.WriteRawTag(24);
        output.WriteInt64(ModelVersion);
      }
      metrics_.WriteTo(ref output, _map_metrics_codec);
      targetMetrics_.WriteTo(ref output, _repeated_targetMetrics_codec);
      if (InputType != global::Asgt.Type.Model.Types.InputType.FeatureTensors) {
        output.WriteRawTag(48);
        output.WriteEnum((int) InputType);
      }
      if (trainStatistics_ != null) {
        output.WriteRawTag(58);
        output.WriteMessage(TrainStatistics);
      }
      if (datasetStatistics_ != null) {
        output.WriteRawTag(66);
        output.WriteMessage(DatasetStatistics);
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
      if (dataset_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Dataset);
      }
      if (revision_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Revision);
      }
      if (ModelVersion != 0L) {
        size += 1 + pb::CodedOutputStream.ComputeInt64Size(ModelVersion);
      }
      size += metrics_.CalculateSize(_map_metrics_codec);
      size += targetMetrics_.CalculateSize(_repeated_targetMetrics_codec);
      if (InputType != global::Asgt.Type.Model.Types.InputType.FeatureTensors) {
        size += 1 + pb::CodedOutputStream.ComputeEnumSize((int) InputType);
      }
      if (trainStatistics_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(TrainStatistics);
      }
      if (datasetStatistics_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(DatasetStatistics);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(RegisterModelRequest other) {
      if (other == null) {
        return;
      }
      if (other.dataset_ != null) {
        if (dataset_ == null) {
          Dataset = new global::Asgt.Type.Dataset();
        }
        Dataset.MergeFrom(other.Dataset);
      }
      if (other.revision_ != null) {
        if (revision_ == null) {
          Revision = new global::Asgt.Type.Revision();
        }
        Revision.MergeFrom(other.Revision);
      }
      if (other.ModelVersion != 0L) {
        ModelVersion = other.ModelVersion;
      }
      metrics_.MergeFrom(other.metrics_);
      targetMetrics_.Add(other.targetMetrics_);
      if (other.InputType != global::Asgt.Type.Model.Types.InputType.FeatureTensors) {
        InputType = other.InputType;
      }
      if (other.trainStatistics_ != null) {
        if (trainStatistics_ == null) {
          TrainStatistics = new global::Asgt.Type.TrainStatistics();
        }
        TrainStatistics.MergeFrom(other.TrainStatistics);
      }
      if (other.datasetStatistics_ != null) {
        if (datasetStatistics_ == null) {
          DatasetStatistics = new global::Asgt.Type.DatasetStatistics();
        }
        DatasetStatistics.MergeFrom(other.DatasetStatistics);
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
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 10: {
            if (dataset_ == null) {
              Dataset = new global::Asgt.Type.Dataset();
            }
            input.ReadMessage(Dataset);
            break;
          }
          case 18: {
            if (revision_ == null) {
              Revision = new global::Asgt.Type.Revision();
            }
            input.ReadMessage(Revision);
            break;
          }
          case 24: {
            ModelVersion = input.ReadInt64();
            break;
          }
          case 34: {
            metrics_.AddEntriesFrom(input, _map_metrics_codec);
            break;
          }
          case 42: {
            targetMetrics_.AddEntriesFrom(input, _repeated_targetMetrics_codec);
            break;
          }
          case 48: {
            InputType = (global::Asgt.Type.Model.Types.InputType) input.ReadEnum();
            break;
          }
          case 58: {
            if (trainStatistics_ == null) {
              TrainStatistics = new global::Asgt.Type.TrainStatistics();
            }
            input.ReadMessage(TrainStatistics);
            break;
          }
          case 66: {
            if (datasetStatistics_ == null) {
              DatasetStatistics = new global::Asgt.Type.DatasetStatistics();
            }
            input.ReadMessage(DatasetStatistics);
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
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, ref input);
            break;
          case 10: {
            if (dataset_ == null) {
              Dataset = new global::Asgt.Type.Dataset();
            }
            input.ReadMessage(Dataset);
            break;
          }
          case 18: {
            if (revision_ == null) {
              Revision = new global::Asgt.Type.Revision();
            }
            input.ReadMessage(Revision);
            break;
          }
          case 24: {
            ModelVersion = input.ReadInt64();
            break;
          }
          case 34: {
            metrics_.AddEntriesFrom(ref input, _map_metrics_codec);
            break;
          }
          case 42: {
            targetMetrics_.AddEntriesFrom(ref input, _repeated_targetMetrics_codec);
            break;
          }
          case 48: {
            InputType = (global::Asgt.Type.Model.Types.InputType) input.ReadEnum();
            break;
          }
          case 58: {
            if (trainStatistics_ == null) {
              TrainStatistics = new global::Asgt.Type.TrainStatistics();
            }
            input.ReadMessage(TrainStatistics);
            break;
          }
          case 66: {
            if (datasetStatistics_ == null) {
              DatasetStatistics = new global::Asgt.Type.DatasetStatistics();
            }
            input.ReadMessage(DatasetStatistics);
            break;
          }
        }
      }
    }
    #endif

  }

  public sealed partial class GetCurrentModelRequest : pb::IMessage<GetCurrentModelRequest>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<GetCurrentModelRequest> _parser = new pb::MessageParser<GetCurrentModelRequest>(() => new GetCurrentModelRequest());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pb::MessageParser<GetCurrentModelRequest> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Asgt.Modelregistry.V1.ModelRegistryReflection.Descriptor.MessageTypes[1]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public GetCurrentModelRequest() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public GetCurrentModelRequest(GetCurrentModelRequest other) : this() {
      dataset_ = other.dataset_ != null ? other.dataset_.Clone() : null;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public GetCurrentModelRequest Clone() {
      return new GetCurrentModelRequest(this);
    }

    /// <summary>Field number for the "dataset" field.</summary>
    public const int DatasetFieldNumber = 1;
    private global::Asgt.Type.Dataset dataset_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public global::Asgt.Type.Dataset Dataset {
      get { return dataset_; }
      set {
        dataset_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override bool Equals(object other) {
      return Equals(other as GetCurrentModelRequest);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public bool Equals(GetCurrentModelRequest other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (!object.Equals(Dataset, other.Dataset)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override int GetHashCode() {
      int hash = 1;
      if (dataset_ != null) hash ^= Dataset.GetHashCode();
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
      if (dataset_ != null) {
        output.WriteRawTag(10);
        output.WriteMessage(Dataset);
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
      if (dataset_ != null) {
        output.WriteRawTag(10);
        output.WriteMessage(Dataset);
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
      if (dataset_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Dataset);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(GetCurrentModelRequest other) {
      if (other == null) {
        return;
      }
      if (other.dataset_ != null) {
        if (dataset_ == null) {
          Dataset = new global::Asgt.Type.Dataset();
        }
        Dataset.MergeFrom(other.Dataset);
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
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 10: {
            if (dataset_ == null) {
              Dataset = new global::Asgt.Type.Dataset();
            }
            input.ReadMessage(Dataset);
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
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, ref input);
            break;
          case 10: {
            if (dataset_ == null) {
              Dataset = new global::Asgt.Type.Dataset();
            }
            input.ReadMessage(Dataset);
            break;
          }
        }
      }
    }
    #endif

  }

  public sealed partial class GetCurrentModelResponse : pb::IMessage<GetCurrentModelResponse>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<GetCurrentModelResponse> _parser = new pb::MessageParser<GetCurrentModelResponse>(() => new GetCurrentModelResponse());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pb::MessageParser<GetCurrentModelResponse> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Asgt.Modelregistry.V1.ModelRegistryReflection.Descriptor.MessageTypes[2]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public GetCurrentModelResponse() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public GetCurrentModelResponse(GetCurrentModelResponse other) : this() {
      model_ = other.model_ != null ? other.model_.Clone() : null;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public GetCurrentModelResponse Clone() {
      return new GetCurrentModelResponse(this);
    }

    /// <summary>Field number for the "model" field.</summary>
    public const int ModelFieldNumber = 1;
    private global::Asgt.Type.Model model_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public global::Asgt.Type.Model Model {
      get { return model_; }
      set {
        model_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override bool Equals(object other) {
      return Equals(other as GetCurrentModelResponse);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public bool Equals(GetCurrentModelResponse other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (!object.Equals(Model, other.Model)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override int GetHashCode() {
      int hash = 1;
      if (model_ != null) hash ^= Model.GetHashCode();
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
      if (model_ != null) {
        output.WriteRawTag(10);
        output.WriteMessage(Model);
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
      if (model_ != null) {
        output.WriteRawTag(10);
        output.WriteMessage(Model);
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
      if (model_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Model);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(GetCurrentModelResponse other) {
      if (other == null) {
        return;
      }
      if (other.model_ != null) {
        if (model_ == null) {
          Model = new global::Asgt.Type.Model();
        }
        Model.MergeFrom(other.Model);
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
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 10: {
            if (model_ == null) {
              Model = new global::Asgt.Type.Model();
            }
            input.ReadMessage(Model);
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
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, ref input);
            break;
          case 10: {
            if (model_ == null) {
              Model = new global::Asgt.Type.Model();
            }
            input.ReadMessage(Model);
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
