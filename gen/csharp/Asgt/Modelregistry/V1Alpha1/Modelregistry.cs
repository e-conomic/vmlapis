// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: asgt/modelregistry/v1alpha1/modelregistry.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Asgt.Modelregistry.V1Alpha1 {

  /// <summary>Holder for reflection information generated from asgt/modelregistry/v1alpha1/modelregistry.proto</summary>
  public static partial class ModelregistryReflection {

    #region Descriptor
    /// <summary>File descriptor for asgt/modelregistry/v1alpha1/modelregistry.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static ModelregistryReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "Ci9hc2d0L21vZGVscmVnaXN0cnkvdjFhbHBoYTEvbW9kZWxyZWdpc3RyeS5w",
            "cm90bxIbYXNndC5tb2RlbHJlZ2lzdHJ5LnYxYWxwaGExGhtnb29nbGUvcHJv",
            "dG9idWYvZW1wdHkucHJvdG8iaQoUUmVnaXN0ZXJNb2RlbFJlcXVlc3QSEAoI",
            "Y29uc3VtZXIYAyABKAkSEgoKbW9kZWxfbmFtZRgBIAEoCRIVCg1tb2RlbF92",
            "ZXJzaW9uGAIgASgDEhQKDGRhdGFzZXRfbmFtZRgEIAEoCSIrChVSZWdpc3Rl",
            "ck1vZGVsUmVzcG9uc2USEgoKc2hhcmRfbmFtZRgBIAEoCSI/ChJEZWxldGVN",
            "b2RlbFJlcXVlc3QSEgoKbW9kZWxfbmFtZRgCIAEoCRIVCg1tb2RlbF92ZXJz",
            "aW9uGAMgASgDInAKHUdldExhdGVzdE1vZGVsVmVyc2lvbnNSZXF1ZXN0EhAK",
            "CGNvbnN1bWVyGAEgASgJEhQKDGRhdGFzZXRfbmFtZRgCIAEoCRISCgptb2Rl",
            "bF9uYW1lGAMgASgJEhMKC21heF9yZXN1bHRzGAQgASgFIq4BCh5HZXRMYXRl",
            "c3RNb2RlbFZlcnNpb25zUmVzcG9uc2USWAoHcmVzdWx0cxgBIAMoCzJHLmFz",
            "Z3QubW9kZWxyZWdpc3RyeS52MWFscGhhMS5HZXRMYXRlc3RNb2RlbFZlcnNp",
            "b25zUmVzcG9uc2UuVmVyc2lvbkluZm8aMgoLVmVyc2lvbkluZm8SDwoHdmVy",
            "c2lvbhgBIAEoAxISCgpzaGFyZF9uYW1lGAIgASgJMvMCCg1Nb2RlbFJlZ2lz",
            "dHJ5EnYKDVJlZ2lzdGVyTW9kZWwSMS5hc2d0Lm1vZGVscmVnaXN0cnkudjFh",
            "bHBoYTEuUmVnaXN0ZXJNb2RlbFJlcXVlc3QaMi5hc2d0Lm1vZGVscmVnaXN0",
            "cnkudjFhbHBoYTEuUmVnaXN0ZXJNb2RlbFJlc3BvbnNlElYKC0RlbGV0ZU1v",
            "ZGVsEi8uYXNndC5tb2RlbHJlZ2lzdHJ5LnYxYWxwaGExLkRlbGV0ZU1vZGVs",
            "UmVxdWVzdBoWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eRKRAQoWR2V0TGF0ZXN0",
            "TW9kZWxWZXJzaW9ucxI6LmFzZ3QubW9kZWxyZWdpc3RyeS52MWFscGhhMS5H",
            "ZXRMYXRlc3RNb2RlbFZlcnNpb25zUmVxdWVzdBo7LmFzZ3QubW9kZWxyZWdp",
            "c3RyeS52MWFscGhhMS5HZXRMYXRlc3RNb2RlbFZlcnNpb25zUmVzcG9uc2VC",
            "D1oNbW9kZWxyZWdpc3RyeWIGcHJvdG8z"));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Google.Protobuf.WellKnownTypes.EmptyReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.Modelregistry.V1Alpha1.RegisterModelRequest), global::Asgt.Modelregistry.V1Alpha1.RegisterModelRequest.Parser, new[]{ "Consumer", "ModelName", "ModelVersion", "DatasetName" }, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.Modelregistry.V1Alpha1.RegisterModelResponse), global::Asgt.Modelregistry.V1Alpha1.RegisterModelResponse.Parser, new[]{ "ShardName" }, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.Modelregistry.V1Alpha1.DeleteModelRequest), global::Asgt.Modelregistry.V1Alpha1.DeleteModelRequest.Parser, new[]{ "ModelName", "ModelVersion" }, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.Modelregistry.V1Alpha1.GetLatestModelVersionsRequest), global::Asgt.Modelregistry.V1Alpha1.GetLatestModelVersionsRequest.Parser, new[]{ "Consumer", "DatasetName", "ModelName", "MaxResults" }, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.Modelregistry.V1Alpha1.GetLatestModelVersionsResponse), global::Asgt.Modelregistry.V1Alpha1.GetLatestModelVersionsResponse.Parser, new[]{ "Results" }, null, null, new pbr::GeneratedClrTypeInfo[] { new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.Modelregistry.V1Alpha1.GetLatestModelVersionsResponse.Types.VersionInfo), global::Asgt.Modelregistry.V1Alpha1.GetLatestModelVersionsResponse.Types.VersionInfo.Parser, new[]{ "Version", "ShardName" }, null, null, null)})
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
      get { return global::Asgt.Modelregistry.V1Alpha1.ModelregistryReflection.Descriptor.MessageTypes[0]; }
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
      consumer_ = other.consumer_;
      modelName_ = other.modelName_;
      modelVersion_ = other.modelVersion_;
      datasetName_ = other.datasetName_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public RegisterModelRequest Clone() {
      return new RegisterModelRequest(this);
    }

    /// <summary>Field number for the "consumer" field.</summary>
    public const int ConsumerFieldNumber = 3;
    private string consumer_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string Consumer {
      get { return consumer_; }
      set {
        consumer_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "model_name" field.</summary>
    public const int ModelNameFieldNumber = 1;
    private string modelName_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string ModelName {
      get { return modelName_; }
      set {
        modelName_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "model_version" field.</summary>
    public const int ModelVersionFieldNumber = 2;
    private long modelVersion_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public long ModelVersion {
      get { return modelVersion_; }
      set {
        modelVersion_ = value;
      }
    }

    /// <summary>Field number for the "dataset_name" field.</summary>
    public const int DatasetNameFieldNumber = 4;
    private string datasetName_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string DatasetName {
      get { return datasetName_; }
      set {
        datasetName_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
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
      if (Consumer != other.Consumer) return false;
      if (ModelName != other.ModelName) return false;
      if (ModelVersion != other.ModelVersion) return false;
      if (DatasetName != other.DatasetName) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (Consumer.Length != 0) hash ^= Consumer.GetHashCode();
      if (ModelName.Length != 0) hash ^= ModelName.GetHashCode();
      if (ModelVersion != 0L) hash ^= ModelVersion.GetHashCode();
      if (DatasetName.Length != 0) hash ^= DatasetName.GetHashCode();
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
      if (ModelName.Length != 0) {
        output.WriteRawTag(10);
        output.WriteString(ModelName);
      }
      if (ModelVersion != 0L) {
        output.WriteRawTag(16);
        output.WriteInt64(ModelVersion);
      }
      if (Consumer.Length != 0) {
        output.WriteRawTag(26);
        output.WriteString(Consumer);
      }
      if (DatasetName.Length != 0) {
        output.WriteRawTag(34);
        output.WriteString(DatasetName);
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
      if (ModelName.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(ModelName);
      }
      if (ModelVersion != 0L) {
        size += 1 + pb::CodedOutputStream.ComputeInt64Size(ModelVersion);
      }
      if (DatasetName.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(DatasetName);
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
      if (other.Consumer.Length != 0) {
        Consumer = other.Consumer;
      }
      if (other.ModelName.Length != 0) {
        ModelName = other.ModelName;
      }
      if (other.ModelVersion != 0L) {
        ModelVersion = other.ModelVersion;
      }
      if (other.DatasetName.Length != 0) {
        DatasetName = other.DatasetName;
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
            ModelName = input.ReadString();
            break;
          }
          case 16: {
            ModelVersion = input.ReadInt64();
            break;
          }
          case 26: {
            Consumer = input.ReadString();
            break;
          }
          case 34: {
            DatasetName = input.ReadString();
            break;
          }
        }
      }
    }

  }

  public sealed partial class RegisterModelResponse : pb::IMessage<RegisterModelResponse> {
    private static readonly pb::MessageParser<RegisterModelResponse> _parser = new pb::MessageParser<RegisterModelResponse>(() => new RegisterModelResponse());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<RegisterModelResponse> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Asgt.Modelregistry.V1Alpha1.ModelregistryReflection.Descriptor.MessageTypes[1]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public RegisterModelResponse() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public RegisterModelResponse(RegisterModelResponse other) : this() {
      shardName_ = other.shardName_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public RegisterModelResponse Clone() {
      return new RegisterModelResponse(this);
    }

    /// <summary>Field number for the "shard_name" field.</summary>
    public const int ShardNameFieldNumber = 1;
    private string shardName_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string ShardName {
      get { return shardName_; }
      set {
        shardName_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as RegisterModelResponse);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(RegisterModelResponse other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (ShardName != other.ShardName) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (ShardName.Length != 0) hash ^= ShardName.GetHashCode();
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
      if (ShardName.Length != 0) {
        output.WriteRawTag(10);
        output.WriteString(ShardName);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (ShardName.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(ShardName);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(RegisterModelResponse other) {
      if (other == null) {
        return;
      }
      if (other.ShardName.Length != 0) {
        ShardName = other.ShardName;
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
            ShardName = input.ReadString();
            break;
          }
        }
      }
    }

  }

  public sealed partial class DeleteModelRequest : pb::IMessage<DeleteModelRequest> {
    private static readonly pb::MessageParser<DeleteModelRequest> _parser = new pb::MessageParser<DeleteModelRequest>(() => new DeleteModelRequest());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<DeleteModelRequest> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Asgt.Modelregistry.V1Alpha1.ModelregistryReflection.Descriptor.MessageTypes[2]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public DeleteModelRequest() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public DeleteModelRequest(DeleteModelRequest other) : this() {
      modelName_ = other.modelName_;
      modelVersion_ = other.modelVersion_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public DeleteModelRequest Clone() {
      return new DeleteModelRequest(this);
    }

    /// <summary>Field number for the "model_name" field.</summary>
    public const int ModelNameFieldNumber = 2;
    private string modelName_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string ModelName {
      get { return modelName_; }
      set {
        modelName_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
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

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as DeleteModelRequest);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(DeleteModelRequest other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (ModelName != other.ModelName) return false;
      if (ModelVersion != other.ModelVersion) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (ModelName.Length != 0) hash ^= ModelName.GetHashCode();
      if (ModelVersion != 0L) hash ^= ModelVersion.GetHashCode();
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
      if (ModelName.Length != 0) {
        output.WriteRawTag(18);
        output.WriteString(ModelName);
      }
      if (ModelVersion != 0L) {
        output.WriteRawTag(24);
        output.WriteInt64(ModelVersion);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (ModelName.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(ModelName);
      }
      if (ModelVersion != 0L) {
        size += 1 + pb::CodedOutputStream.ComputeInt64Size(ModelVersion);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(DeleteModelRequest other) {
      if (other == null) {
        return;
      }
      if (other.ModelName.Length != 0) {
        ModelName = other.ModelName;
      }
      if (other.ModelVersion != 0L) {
        ModelVersion = other.ModelVersion;
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
          case 18: {
            ModelName = input.ReadString();
            break;
          }
          case 24: {
            ModelVersion = input.ReadInt64();
            break;
          }
        }
      }
    }

  }

  public sealed partial class GetLatestModelVersionsRequest : pb::IMessage<GetLatestModelVersionsRequest> {
    private static readonly pb::MessageParser<GetLatestModelVersionsRequest> _parser = new pb::MessageParser<GetLatestModelVersionsRequest>(() => new GetLatestModelVersionsRequest());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<GetLatestModelVersionsRequest> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Asgt.Modelregistry.V1Alpha1.ModelregistryReflection.Descriptor.MessageTypes[3]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GetLatestModelVersionsRequest() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GetLatestModelVersionsRequest(GetLatestModelVersionsRequest other) : this() {
      consumer_ = other.consumer_;
      datasetName_ = other.datasetName_;
      modelName_ = other.modelName_;
      maxResults_ = other.maxResults_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GetLatestModelVersionsRequest Clone() {
      return new GetLatestModelVersionsRequest(this);
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

    /// <summary>Field number for the "model_name" field.</summary>
    public const int ModelNameFieldNumber = 3;
    private string modelName_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string ModelName {
      get { return modelName_; }
      set {
        modelName_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "max_results" field.</summary>
    public const int MaxResultsFieldNumber = 4;
    private int maxResults_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int MaxResults {
      get { return maxResults_; }
      set {
        maxResults_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as GetLatestModelVersionsRequest);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(GetLatestModelVersionsRequest other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Consumer != other.Consumer) return false;
      if (DatasetName != other.DatasetName) return false;
      if (ModelName != other.ModelName) return false;
      if (MaxResults != other.MaxResults) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (Consumer.Length != 0) hash ^= Consumer.GetHashCode();
      if (DatasetName.Length != 0) hash ^= DatasetName.GetHashCode();
      if (ModelName.Length != 0) hash ^= ModelName.GetHashCode();
      if (MaxResults != 0) hash ^= MaxResults.GetHashCode();
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
      if (ModelName.Length != 0) {
        output.WriteRawTag(26);
        output.WriteString(ModelName);
      }
      if (MaxResults != 0) {
        output.WriteRawTag(32);
        output.WriteInt32(MaxResults);
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
      if (ModelName.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(ModelName);
      }
      if (MaxResults != 0) {
        size += 1 + pb::CodedOutputStream.ComputeInt32Size(MaxResults);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(GetLatestModelVersionsRequest other) {
      if (other == null) {
        return;
      }
      if (other.Consumer.Length != 0) {
        Consumer = other.Consumer;
      }
      if (other.DatasetName.Length != 0) {
        DatasetName = other.DatasetName;
      }
      if (other.ModelName.Length != 0) {
        ModelName = other.ModelName;
      }
      if (other.MaxResults != 0) {
        MaxResults = other.MaxResults;
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
            ModelName = input.ReadString();
            break;
          }
          case 32: {
            MaxResults = input.ReadInt32();
            break;
          }
        }
      }
    }

  }

  public sealed partial class GetLatestModelVersionsResponse : pb::IMessage<GetLatestModelVersionsResponse> {
    private static readonly pb::MessageParser<GetLatestModelVersionsResponse> _parser = new pb::MessageParser<GetLatestModelVersionsResponse>(() => new GetLatestModelVersionsResponse());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<GetLatestModelVersionsResponse> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Asgt.Modelregistry.V1Alpha1.ModelregistryReflection.Descriptor.MessageTypes[4]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GetLatestModelVersionsResponse() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GetLatestModelVersionsResponse(GetLatestModelVersionsResponse other) : this() {
      results_ = other.results_.Clone();
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GetLatestModelVersionsResponse Clone() {
      return new GetLatestModelVersionsResponse(this);
    }

    /// <summary>Field number for the "results" field.</summary>
    public const int ResultsFieldNumber = 1;
    private static readonly pb::FieldCodec<global::Asgt.Modelregistry.V1Alpha1.GetLatestModelVersionsResponse.Types.VersionInfo> _repeated_results_codec
        = pb::FieldCodec.ForMessage(10, global::Asgt.Modelregistry.V1Alpha1.GetLatestModelVersionsResponse.Types.VersionInfo.Parser);
    private readonly pbc::RepeatedField<global::Asgt.Modelregistry.V1Alpha1.GetLatestModelVersionsResponse.Types.VersionInfo> results_ = new pbc::RepeatedField<global::Asgt.Modelregistry.V1Alpha1.GetLatestModelVersionsResponse.Types.VersionInfo>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<global::Asgt.Modelregistry.V1Alpha1.GetLatestModelVersionsResponse.Types.VersionInfo> Results {
      get { return results_; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as GetLatestModelVersionsResponse);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(GetLatestModelVersionsResponse other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if(!results_.Equals(other.results_)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      hash ^= results_.GetHashCode();
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
      results_.WriteTo(output, _repeated_results_codec);
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      size += results_.CalculateSize(_repeated_results_codec);
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(GetLatestModelVersionsResponse other) {
      if (other == null) {
        return;
      }
      results_.Add(other.results_);
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
            results_.AddEntriesFrom(input, _repeated_results_codec);
            break;
          }
        }
      }
    }

    #region Nested types
    /// <summary>Container for nested types declared in the GetLatestModelVersionsResponse message type.</summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static partial class Types {
      public sealed partial class VersionInfo : pb::IMessage<VersionInfo> {
        private static readonly pb::MessageParser<VersionInfo> _parser = new pb::MessageParser<VersionInfo>(() => new VersionInfo());
        private pb::UnknownFieldSet _unknownFields;
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public static pb::MessageParser<VersionInfo> Parser { get { return _parser; } }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public static pbr::MessageDescriptor Descriptor {
          get { return global::Asgt.Modelregistry.V1Alpha1.GetLatestModelVersionsResponse.Descriptor.NestedTypes[0]; }
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        pbr::MessageDescriptor pb::IMessage.Descriptor {
          get { return Descriptor; }
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public VersionInfo() {
          OnConstruction();
        }

        partial void OnConstruction();

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public VersionInfo(VersionInfo other) : this() {
          version_ = other.version_;
          shardName_ = other.shardName_;
          _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public VersionInfo Clone() {
          return new VersionInfo(this);
        }

        /// <summary>Field number for the "version" field.</summary>
        public const int VersionFieldNumber = 1;
        private long version_;
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public long Version {
          get { return version_; }
          set {
            version_ = value;
          }
        }

        /// <summary>Field number for the "shard_name" field.</summary>
        public const int ShardNameFieldNumber = 2;
        private string shardName_ = "";
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public string ShardName {
          get { return shardName_; }
          set {
            shardName_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
          }
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public override bool Equals(object other) {
          return Equals(other as VersionInfo);
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public bool Equals(VersionInfo other) {
          if (ReferenceEquals(other, null)) {
            return false;
          }
          if (ReferenceEquals(other, this)) {
            return true;
          }
          if (Version != other.Version) return false;
          if (ShardName != other.ShardName) return false;
          return Equals(_unknownFields, other._unknownFields);
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public override int GetHashCode() {
          int hash = 1;
          if (Version != 0L) hash ^= Version.GetHashCode();
          if (ShardName.Length != 0) hash ^= ShardName.GetHashCode();
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
          if (Version != 0L) {
            output.WriteRawTag(8);
            output.WriteInt64(Version);
          }
          if (ShardName.Length != 0) {
            output.WriteRawTag(18);
            output.WriteString(ShardName);
          }
          if (_unknownFields != null) {
            _unknownFields.WriteTo(output);
          }
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public int CalculateSize() {
          int size = 0;
          if (Version != 0L) {
            size += 1 + pb::CodedOutputStream.ComputeInt64Size(Version);
          }
          if (ShardName.Length != 0) {
            size += 1 + pb::CodedOutputStream.ComputeStringSize(ShardName);
          }
          if (_unknownFields != null) {
            size += _unknownFields.CalculateSize();
          }
          return size;
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public void MergeFrom(VersionInfo other) {
          if (other == null) {
            return;
          }
          if (other.Version != 0L) {
            Version = other.Version;
          }
          if (other.ShardName.Length != 0) {
            ShardName = other.ShardName;
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
                Version = input.ReadInt64();
                break;
              }
              case 18: {
                ShardName = input.ReadString();
                break;
              }
            }
          }
        }

      }

    }
    #endregion

  }

  #endregion

}

#endregion Designer generated code
