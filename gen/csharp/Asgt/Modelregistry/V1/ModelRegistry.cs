// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: asgt/modelregistry/v1/model_registry.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
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
            "dG8aFWFzZ3QvdHlwZS9tb2RlbC5wcm90bxoYYXNndC90eXBlL3JldmlzaW9u",
            "LnByb3RvGh5hc2d0L3R5cGUvdGFyZ2V0X21ldHJpY3MucHJvdG8aG2dvb2ds",
            "ZS9wcm90b2J1Zi9lbXB0eS5wcm90byLWAgoUUmVnaXN0ZXJNb2RlbFJlcXVl",
            "c3QSIwoHZGF0YXNldBgBIAEoCzISLmFzZ3QudHlwZS5EYXRhc2V0EiUKCHJl",
            "dmlzaW9uGAIgASgLMhMuYXNndC50eXBlLlJldmlzaW9uEhUKDW1vZGVsX3Zl",
            "cnNpb24YAyABKAMSSQoHbWV0cmljcxgEIAMoCzI4LmFzZ3QubW9kZWxyZWdp",
            "c3RyeS52MS5SZWdpc3Rlck1vZGVsUmVxdWVzdC5NZXRyaWNzRW50cnkSMAoO",
            "dGFyZ2V0X21ldHJpY3MYBSADKAsyGC5hc2d0LnR5cGUuVGFyZ2V0TWV0cmlj",
            "cxIuCgppbnB1dF90eXBlGAYgASgOMhouYXNndC50eXBlLk1vZGVsLklucHV0",
            "VHlwZRouCgxNZXRyaWNzRW50cnkSCwoDa2V5GAEgASgJEg0KBXZhbHVlGAIg",
            "ASgFOgI4ASI9ChZHZXRDdXJyZW50TW9kZWxSZXF1ZXN0EiMKB2RhdGFzZXQY",
            "ASABKAsyEi5hc2d0LnR5cGUuRGF0YXNldCI6ChdHZXRDdXJyZW50TW9kZWxS",
            "ZXNwb25zZRIfCgVtb2RlbBgBIAEoCzIQLmFzZ3QudHlwZS5Nb2RlbDLXAQoN",
            "TW9kZWxSZWdpc3RyeRJUCg1SZWdpc3Rlck1vZGVsEisuYXNndC5tb2RlbHJl",
            "Z2lzdHJ5LnYxLlJlZ2lzdGVyTW9kZWxSZXF1ZXN0GhYuZ29vZ2xlLnByb3Rv",
            "YnVmLkVtcHR5EnAKD0dldEN1cnJlbnRNb2RlbBItLmFzZ3QubW9kZWxyZWdp",
            "c3RyeS52MS5HZXRDdXJyZW50TW9kZWxSZXF1ZXN0Gi4uYXNndC5tb2RlbHJl",
            "Z2lzdHJ5LnYxLkdldEN1cnJlbnRNb2RlbFJlc3BvbnNlQklaR2dpdGh1Yi5j",
            "b20vZS1jb25vbWljL3ZtbGFwaXMvZ2VuL2dvL2FzZ3QvbW9kZWxyZWdpc3Ry",
            "eS92MTttb2RlbHJlZ2lzdHJ5YgZwcm90bzM="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Asgt.Type.DatasetReflection.Descriptor, global::Asgt.Type.ModelReflection.Descriptor, global::Asgt.Type.RevisionReflection.Descriptor, global::Asgt.Type.TargetMetricsReflection.Descriptor, global::Google.Protobuf.WellKnownTypes.EmptyReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.Modelregistry.V1.RegisterModelRequest), global::Asgt.Modelregistry.V1.RegisterModelRequest.Parser, new[]{ "Dataset", "Revision", "ModelVersion", "Metrics", "TargetMetrics", "InputType" }, null, null, new pbr::GeneratedClrTypeInfo[] { null, }),
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.Modelregistry.V1.GetCurrentModelRequest), global::Asgt.Modelregistry.V1.GetCurrentModelRequest.Parser, new[]{ "Dataset" }, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.Modelregistry.V1.GetCurrentModelResponse), global::Asgt.Modelregistry.V1.GetCurrentModelResponse.Parser, new[]{ "Model" }, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class RegisterModelRequest : pb::IMessage<RegisterModelRequest> {
    private static readonly pb::MessageParser<RegisterModelRequest> _parser = new pb::MessageParser<RegisterModelRequest>(() => new RegisterModelRequest());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<RegisterModelRequest> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Asgt.Modelregistry.V1.ModelRegistryReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public RegisterModelRequest() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public RegisterModelRequest(RegisterModelRequest other) : this() {
      dataset_ = other.dataset_ != null ? other.dataset_.Clone() : null;
      revision_ = other.revision_ != null ? other.revision_.Clone() : null;
      modelVersion_ = other.modelVersion_;
      metrics_ = other.metrics_.Clone();
      targetMetrics_ = other.targetMetrics_.Clone();
      inputType_ = other.inputType_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public RegisterModelRequest Clone() {
      return new RegisterModelRequest(this);
    }

    /// <summary>Field number for the "dataset" field.</summary>
    public const int DatasetFieldNumber = 1;
    private global::Asgt.Type.Dataset dataset_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
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
    public long ModelVersion {
      get { return modelVersion_; }
      set {
        modelVersion_ = value;
      }
    }

    /// <summary>Field number for the "metrics" field.</summary>
    public const int MetricsFieldNumber = 4;
    private static readonly pbc::MapField<string, int>.Codec _map_metrics_codec
        = new pbc::MapField<string, int>.Codec(pb::FieldCodec.ForString(10), pb::FieldCodec.ForInt32(16), 34);
    private readonly pbc::MapField<string, int> metrics_ = new pbc::MapField<string, int>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::MapField<string, int> Metrics {
      get { return metrics_; }
    }

    /// <summary>Field number for the "target_metrics" field.</summary>
    public const int TargetMetricsFieldNumber = 5;
    private static readonly pb::FieldCodec<global::Asgt.Type.TargetMetrics> _repeated_targetMetrics_codec
        = pb::FieldCodec.ForMessage(42, global::Asgt.Type.TargetMetrics.Parser);
    private readonly pbc::RepeatedField<global::Asgt.Type.TargetMetrics> targetMetrics_ = new pbc::RepeatedField<global::Asgt.Type.TargetMetrics>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<global::Asgt.Type.TargetMetrics> TargetMetrics {
      get { return targetMetrics_; }
    }

    /// <summary>Field number for the "input_type" field.</summary>
    public const int InputTypeFieldNumber = 6;
    private global::Asgt.Type.Model.Types.InputType inputType_ = 0;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Asgt.Type.Model.Types.InputType InputType {
      get { return inputType_; }
      set {
        inputType_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as RegisterModelRequest);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
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
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (dataset_ != null) hash ^= Dataset.GetHashCode();
      if (revision_ != null) hash ^= Revision.GetHashCode();
      if (ModelVersion != 0L) hash ^= ModelVersion.GetHashCode();
      hash ^= Metrics.GetHashCode();
      hash ^= targetMetrics_.GetHashCode();
      if (InputType != 0) hash ^= InputType.GetHashCode();
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
      if (InputType != 0) {
        output.WriteRawTag(48);
        output.WriteEnum((int) InputType);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
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
      if (InputType != 0) {
        size += 1 + pb::CodedOutputStream.ComputeEnumSize((int) InputType);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(RegisterModelRequest other) {
      if (other == null) {
        return;
      }
      if (other.dataset_ != null) {
        if (dataset_ == null) {
          dataset_ = new global::Asgt.Type.Dataset();
        }
        Dataset.MergeFrom(other.Dataset);
      }
      if (other.revision_ != null) {
        if (revision_ == null) {
          revision_ = new global::Asgt.Type.Revision();
        }
        Revision.MergeFrom(other.Revision);
      }
      if (other.ModelVersion != 0L) {
        ModelVersion = other.ModelVersion;
      }
      metrics_.Add(other.metrics_);
      targetMetrics_.Add(other.targetMetrics_);
      if (other.InputType != 0) {
        InputType = other.InputType;
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
            if (dataset_ == null) {
              dataset_ = new global::Asgt.Type.Dataset();
            }
            input.ReadMessage(dataset_);
            break;
          }
          case 18: {
            if (revision_ == null) {
              revision_ = new global::Asgt.Type.Revision();
            }
            input.ReadMessage(revision_);
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
            inputType_ = (global::Asgt.Type.Model.Types.InputType) input.ReadEnum();
            break;
          }
        }
      }
    }

  }

  public sealed partial class GetCurrentModelRequest : pb::IMessage<GetCurrentModelRequest> {
    private static readonly pb::MessageParser<GetCurrentModelRequest> _parser = new pb::MessageParser<GetCurrentModelRequest>(() => new GetCurrentModelRequest());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<GetCurrentModelRequest> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Asgt.Modelregistry.V1.ModelRegistryReflection.Descriptor.MessageTypes[1]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GetCurrentModelRequest() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GetCurrentModelRequest(GetCurrentModelRequest other) : this() {
      dataset_ = other.dataset_ != null ? other.dataset_.Clone() : null;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GetCurrentModelRequest Clone() {
      return new GetCurrentModelRequest(this);
    }

    /// <summary>Field number for the "dataset" field.</summary>
    public const int DatasetFieldNumber = 1;
    private global::Asgt.Type.Dataset dataset_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Asgt.Type.Dataset Dataset {
      get { return dataset_; }
      set {
        dataset_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as GetCurrentModelRequest);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
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
    public override int GetHashCode() {
      int hash = 1;
      if (dataset_ != null) hash ^= Dataset.GetHashCode();
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
      if (dataset_ != null) {
        output.WriteRawTag(10);
        output.WriteMessage(Dataset);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
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
    public void MergeFrom(GetCurrentModelRequest other) {
      if (other == null) {
        return;
      }
      if (other.dataset_ != null) {
        if (dataset_ == null) {
          dataset_ = new global::Asgt.Type.Dataset();
        }
        Dataset.MergeFrom(other.Dataset);
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
            if (dataset_ == null) {
              dataset_ = new global::Asgt.Type.Dataset();
            }
            input.ReadMessage(dataset_);
            break;
          }
        }
      }
    }

  }

  public sealed partial class GetCurrentModelResponse : pb::IMessage<GetCurrentModelResponse> {
    private static readonly pb::MessageParser<GetCurrentModelResponse> _parser = new pb::MessageParser<GetCurrentModelResponse>(() => new GetCurrentModelResponse());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<GetCurrentModelResponse> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Asgt.Modelregistry.V1.ModelRegistryReflection.Descriptor.MessageTypes[2]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GetCurrentModelResponse() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GetCurrentModelResponse(GetCurrentModelResponse other) : this() {
      model_ = other.model_ != null ? other.model_.Clone() : null;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GetCurrentModelResponse Clone() {
      return new GetCurrentModelResponse(this);
    }

    /// <summary>Field number for the "model" field.</summary>
    public const int ModelFieldNumber = 1;
    private global::Asgt.Type.Model model_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Asgt.Type.Model Model {
      get { return model_; }
      set {
        model_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as GetCurrentModelResponse);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
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
    public override int GetHashCode() {
      int hash = 1;
      if (model_ != null) hash ^= Model.GetHashCode();
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
      if (model_ != null) {
        output.WriteRawTag(10);
        output.WriteMessage(Model);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
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
    public void MergeFrom(GetCurrentModelResponse other) {
      if (other == null) {
        return;
      }
      if (other.model_ != null) {
        if (model_ == null) {
          model_ = new global::Asgt.Type.Model();
        }
        Model.MergeFrom(other.Model);
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
            if (model_ == null) {
              model_ = new global::Asgt.Type.Model();
            }
            input.ReadMessage(model_);
            break;
          }
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code
