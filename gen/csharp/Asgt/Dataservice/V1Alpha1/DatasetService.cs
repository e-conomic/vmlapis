// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: asgt/dataservice/v1alpha1/dataset_service.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Asgt.Dataservice.V1Alpha1 {

  /// <summary>Holder for reflection information generated from asgt/dataservice/v1alpha1/dataset_service.proto</summary>
  public static partial class DatasetServiceReflection {

    #region Descriptor
    /// <summary>File descriptor for asgt/dataservice/v1alpha1/dataset_service.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static DatasetServiceReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "Ci9hc2d0L2RhdGFzZXJ2aWNlL3YxYWxwaGExL2RhdGFzZXRfc2VydmljZS5w",
            "cm90bxIZYXNndC5kYXRhc2VydmljZS52MWFscGhhMRofZ29vZ2xlL3Byb3Rv",
            "YnVmL3RpbWVzdGFtcC5wcm90byJRChFHZXREYXRhc2V0UmVxdWVzdBIQCghj",
            "b25zdW1lchgBIAEoCRIUCgxkYXRhc2V0X25hbWUYAiABKAkSFAoMZGF0YXNl",
            "dF90eXBlGAMgASgJIoABCgtEYXRhc2V0SW5mbxIQCghjb25zdW1lchgBIAEo",
            "CRIMCgRuYW1lGAIgASgJEgwKBHR5cGUYAyABKAkSPQoZdHJhaW5pbmdfZ3Jh",
            "Y2VfcGVyaW9kX2VuZBgKIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3Rh",
            "bXBKBAgEEAoiSgoSR2V0RGF0YXNldFJlc3BvbnNlEjQKBGluZm8YASABKAsy",
            "Ji5hc2d0LmRhdGFzZXJ2aWNlLnYxYWxwaGExLkRhdGFzZXRJbmZvMnsKDkRh",
            "dGFzZXRTZXJ2aWNlEmkKCkdldERhdGFzZXQSLC5hc2d0LmRhdGFzZXJ2aWNl",
            "LnYxYWxwaGExLkdldERhdGFzZXRSZXF1ZXN0Gi0uYXNndC5kYXRhc2Vydmlj",
            "ZS52MWFscGhhMS5HZXREYXRhc2V0UmVzcG9uc2VCDVoLZGF0YXNlcnZpY2Vi",
            "BnByb3RvMw=="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Google.Protobuf.WellKnownTypes.TimestampReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.Dataservice.V1Alpha1.GetDatasetRequest), global::Asgt.Dataservice.V1Alpha1.GetDatasetRequest.Parser, new[]{ "Consumer", "DatasetName", "DatasetType" }, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.Dataservice.V1Alpha1.DatasetInfo), global::Asgt.Dataservice.V1Alpha1.DatasetInfo.Parser, new[]{ "Consumer", "Name", "Type", "TrainingGracePeriodEnd" }, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.Dataservice.V1Alpha1.GetDatasetResponse), global::Asgt.Dataservice.V1Alpha1.GetDatasetResponse.Parser, new[]{ "Info" }, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class GetDatasetRequest : pb::IMessage<GetDatasetRequest> {
    private static readonly pb::MessageParser<GetDatasetRequest> _parser = new pb::MessageParser<GetDatasetRequest>(() => new GetDatasetRequest());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<GetDatasetRequest> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Asgt.Dataservice.V1Alpha1.DatasetServiceReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GetDatasetRequest() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GetDatasetRequest(GetDatasetRequest other) : this() {
      consumer_ = other.consumer_;
      datasetName_ = other.datasetName_;
      datasetType_ = other.datasetType_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GetDatasetRequest Clone() {
      return new GetDatasetRequest(this);
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

    /// <summary>Field number for the "dataset_name" field.</summary>
    public const int DatasetNameFieldNumber = 2;
    private string datasetName_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string DatasetName {
      get { return datasetName_; }
      set {
        datasetName_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "dataset_type" field.</summary>
    public const int DatasetTypeFieldNumber = 3;
    private string datasetType_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string DatasetType {
      get { return datasetType_; }
      set {
        datasetType_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as GetDatasetRequest);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(GetDatasetRequest other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Consumer != other.Consumer) return false;
      if (DatasetName != other.DatasetName) return false;
      if (DatasetType != other.DatasetType) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (Consumer.Length != 0) hash ^= Consumer.GetHashCode();
      if (DatasetName.Length != 0) hash ^= DatasetName.GetHashCode();
      if (DatasetType.Length != 0) hash ^= DatasetType.GetHashCode();
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
      if (DatasetName.Length != 0) {
        output.WriteRawTag(18);
        output.WriteString(DatasetName);
      }
      if (DatasetType.Length != 0) {
        output.WriteRawTag(26);
        output.WriteString(DatasetType);
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
      if (DatasetName.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(DatasetName);
      }
      if (DatasetType.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(DatasetType);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(GetDatasetRequest other) {
      if (other == null) {
        return;
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
            Consumer = input.ReadString();
            break;
          }
          case 18: {
            DatasetName = input.ReadString();
            break;
          }
          case 26: {
            DatasetType = input.ReadString();
            break;
          }
        }
      }
    }

  }

  public sealed partial class DatasetInfo : pb::IMessage<DatasetInfo> {
    private static readonly pb::MessageParser<DatasetInfo> _parser = new pb::MessageParser<DatasetInfo>(() => new DatasetInfo());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<DatasetInfo> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Asgt.Dataservice.V1Alpha1.DatasetServiceReflection.Descriptor.MessageTypes[1]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public DatasetInfo() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public DatasetInfo(DatasetInfo other) : this() {
      consumer_ = other.consumer_;
      name_ = other.name_;
      type_ = other.type_;
      trainingGracePeriodEnd_ = other.trainingGracePeriodEnd_ != null ? other.trainingGracePeriodEnd_.Clone() : null;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public DatasetInfo Clone() {
      return new DatasetInfo(this);
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

    /// <summary>Field number for the "training_grace_period_end" field.</summary>
    public const int TrainingGracePeriodEndFieldNumber = 10;
    private global::Google.Protobuf.WellKnownTypes.Timestamp trainingGracePeriodEnd_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Google.Protobuf.WellKnownTypes.Timestamp TrainingGracePeriodEnd {
      get { return trainingGracePeriodEnd_; }
      set {
        trainingGracePeriodEnd_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as DatasetInfo);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(DatasetInfo other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Consumer != other.Consumer) return false;
      if (Name != other.Name) return false;
      if (Type != other.Type) return false;
      if (!object.Equals(TrainingGracePeriodEnd, other.TrainingGracePeriodEnd)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (Consumer.Length != 0) hash ^= Consumer.GetHashCode();
      if (Name.Length != 0) hash ^= Name.GetHashCode();
      if (Type.Length != 0) hash ^= Type.GetHashCode();
      if (trainingGracePeriodEnd_ != null) hash ^= TrainingGracePeriodEnd.GetHashCode();
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
      if (trainingGracePeriodEnd_ != null) {
        output.WriteRawTag(82);
        output.WriteMessage(TrainingGracePeriodEnd);
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
      if (trainingGracePeriodEnd_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(TrainingGracePeriodEnd);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(DatasetInfo other) {
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
      if (other.trainingGracePeriodEnd_ != null) {
        if (trainingGracePeriodEnd_ == null) {
          trainingGracePeriodEnd_ = new global::Google.Protobuf.WellKnownTypes.Timestamp();
        }
        TrainingGracePeriodEnd.MergeFrom(other.TrainingGracePeriodEnd);
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
          case 82: {
            if (trainingGracePeriodEnd_ == null) {
              trainingGracePeriodEnd_ = new global::Google.Protobuf.WellKnownTypes.Timestamp();
            }
            input.ReadMessage(trainingGracePeriodEnd_);
            break;
          }
        }
      }
    }

  }

  public sealed partial class GetDatasetResponse : pb::IMessage<GetDatasetResponse> {
    private static readonly pb::MessageParser<GetDatasetResponse> _parser = new pb::MessageParser<GetDatasetResponse>(() => new GetDatasetResponse());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<GetDatasetResponse> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Asgt.Dataservice.V1Alpha1.DatasetServiceReflection.Descriptor.MessageTypes[2]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GetDatasetResponse() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GetDatasetResponse(GetDatasetResponse other) : this() {
      info_ = other.info_ != null ? other.info_.Clone() : null;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GetDatasetResponse Clone() {
      return new GetDatasetResponse(this);
    }

    /// <summary>Field number for the "info" field.</summary>
    public const int InfoFieldNumber = 1;
    private global::Asgt.Dataservice.V1Alpha1.DatasetInfo info_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Asgt.Dataservice.V1Alpha1.DatasetInfo Info {
      get { return info_; }
      set {
        info_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as GetDatasetResponse);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(GetDatasetResponse other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (!object.Equals(Info, other.Info)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (info_ != null) hash ^= Info.GetHashCode();
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
      if (info_ != null) {
        output.WriteRawTag(10);
        output.WriteMessage(Info);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (info_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Info);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(GetDatasetResponse other) {
      if (other == null) {
        return;
      }
      if (other.info_ != null) {
        if (info_ == null) {
          info_ = new global::Asgt.Dataservice.V1Alpha1.DatasetInfo();
        }
        Info.MergeFrom(other.Info);
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
            if (info_ == null) {
              info_ = new global::Asgt.Dataservice.V1Alpha1.DatasetInfo();
            }
            input.ReadMessage(info_);
            break;
          }
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code
