// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: asgt/dataservice/v1alpha1/info.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Asgt.Dataservice.V1Alpha1 {

  /// <summary>Holder for reflection information generated from asgt/dataservice/v1alpha1/info.proto</summary>
  public static partial class InfoReflection {

    #region Descriptor
    /// <summary>File descriptor for asgt/dataservice/v1alpha1/info.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static InfoReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "CiRhc2d0L2RhdGFzZXJ2aWNlL3YxYWxwaGExL2luZm8ucHJvdG8SGWFzZ3Qu",
            "ZGF0YXNlcnZpY2UudjFhbHBoYTEaF2FzZ3QvdHlwZS9kYXRhc2V0LnByb3Rv",
            "GhVhc2d0L3R5cGUvbW9kZWwucHJvdG8aIGFzZ3QvdHlwZS9yZXRlbnRpb25f",
            "cG9saWN5LnByb3RvGh9nb29nbGUvcHJvdG9idWYvdGltZXN0YW1wLnByb3Rv",
            "IiYKDkdldEluZm9SZXF1ZXN0EhQKDGRhdGFzZXRfbmFtZRgBIAEoCSJsCg9H",
            "ZXRJbmZvUmVzcG9uc2USIwoHZGF0YXNldBgBIAEoCzISLmFzZ3QudHlwZS5E",
            "YXRhc2V0Eh8KBW1vZGVsGAIgASgLMhAuYXNndC50eXBlLk1vZGVsEhMKC2Vu",
            "dHJ5X2NvdW50GAMgASgDQg1aC2RhdGFzZXJ2aWNlYgZwcm90bzM="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Asgt.Type.DatasetReflection.Descriptor, global::Asgt.Type.ModelReflection.Descriptor, global::Asgt.Type.RetentionPolicyReflection.Descriptor, global::Google.Protobuf.WellKnownTypes.TimestampReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.Dataservice.V1Alpha1.GetInfoRequest), global::Asgt.Dataservice.V1Alpha1.GetInfoRequest.Parser, new[]{ "DatasetName" }, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.Dataservice.V1Alpha1.GetInfoResponse), global::Asgt.Dataservice.V1Alpha1.GetInfoResponse.Parser, new[]{ "Dataset", "Model", "EntryCount" }, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class GetInfoRequest : pb::IMessage<GetInfoRequest> {
    private static readonly pb::MessageParser<GetInfoRequest> _parser = new pb::MessageParser<GetInfoRequest>(() => new GetInfoRequest());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<GetInfoRequest> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Asgt.Dataservice.V1Alpha1.InfoReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GetInfoRequest() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GetInfoRequest(GetInfoRequest other) : this() {
      datasetName_ = other.datasetName_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GetInfoRequest Clone() {
      return new GetInfoRequest(this);
    }

    /// <summary>Field number for the "dataset_name" field.</summary>
    public const int DatasetNameFieldNumber = 1;
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
      return Equals(other as GetInfoRequest);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(GetInfoRequest other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (DatasetName != other.DatasetName) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
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
      if (DatasetName.Length != 0) {
        output.WriteRawTag(10);
        output.WriteString(DatasetName);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (DatasetName.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(DatasetName);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(GetInfoRequest other) {
      if (other == null) {
        return;
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
            DatasetName = input.ReadString();
            break;
          }
        }
      }
    }

  }

  public sealed partial class GetInfoResponse : pb::IMessage<GetInfoResponse> {
    private static readonly pb::MessageParser<GetInfoResponse> _parser = new pb::MessageParser<GetInfoResponse>(() => new GetInfoResponse());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<GetInfoResponse> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Asgt.Dataservice.V1Alpha1.InfoReflection.Descriptor.MessageTypes[1]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GetInfoResponse() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GetInfoResponse(GetInfoResponse other) : this() {
      dataset_ = other.dataset_ != null ? other.dataset_.Clone() : null;
      model_ = other.model_ != null ? other.model_.Clone() : null;
      entryCount_ = other.entryCount_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GetInfoResponse Clone() {
      return new GetInfoResponse(this);
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

    /// <summary>Field number for the "model" field.</summary>
    public const int ModelFieldNumber = 2;
    private global::Asgt.Type.Model model_;
    /// <summary>
    /// The most recently trained model; empty if no model has been trained
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Asgt.Type.Model Model {
      get { return model_; }
      set {
        model_ = value;
      }
    }

    /// <summary>Field number for the "entry_count" field.</summary>
    public const int EntryCountFieldNumber = 3;
    private long entryCount_;
    /// <summary>
    /// Number of entries added to the dataset; does not reflect entries that have expired due to the retention policy
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public long EntryCount {
      get { return entryCount_; }
      set {
        entryCount_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as GetInfoResponse);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(GetInfoResponse other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (!object.Equals(Dataset, other.Dataset)) return false;
      if (!object.Equals(Model, other.Model)) return false;
      if (EntryCount != other.EntryCount) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (dataset_ != null) hash ^= Dataset.GetHashCode();
      if (model_ != null) hash ^= Model.GetHashCode();
      if (EntryCount != 0L) hash ^= EntryCount.GetHashCode();
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
      if (model_ != null) {
        output.WriteRawTag(18);
        output.WriteMessage(Model);
      }
      if (EntryCount != 0L) {
        output.WriteRawTag(24);
        output.WriteInt64(EntryCount);
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
      if (model_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Model);
      }
      if (EntryCount != 0L) {
        size += 1 + pb::CodedOutputStream.ComputeInt64Size(EntryCount);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(GetInfoResponse other) {
      if (other == null) {
        return;
      }
      if (other.dataset_ != null) {
        if (dataset_ == null) {
          dataset_ = new global::Asgt.Type.Dataset();
        }
        Dataset.MergeFrom(other.Dataset);
      }
      if (other.model_ != null) {
        if (model_ == null) {
          model_ = new global::Asgt.Type.Model();
        }
        Model.MergeFrom(other.Model);
      }
      if (other.EntryCount != 0L) {
        EntryCount = other.EntryCount;
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
            if (model_ == null) {
              model_ = new global::Asgt.Type.Model();
            }
            input.ReadMessage(model_);
            break;
          }
          case 24: {
            EntryCount = input.ReadInt64();
            break;
          }
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code
