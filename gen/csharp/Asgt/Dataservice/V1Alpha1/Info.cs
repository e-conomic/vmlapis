// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: asgt/data/v1alpha1/info.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Asgt.Dataservice.V1Alpha1 {

  /// <summary>Holder for reflection information generated from asgt/data/v1alpha1/info.proto</summary>
  public static partial class InfoReflection {

    #region Descriptor
    /// <summary>File descriptor for asgt/data/v1alpha1/info.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static InfoReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "Ch1hc2d0L2RhdGEvdjFhbHBoYTEvaW5mby5wcm90bxIZYXNndC5kYXRhc2Vy",
            "dmljZS52MWFscGhhMRoXYXNndC90eXBlL2RhdGFzZXQucHJvdG8aFWFzZ3Qv",
            "dHlwZS9tb2RlbC5wcm90bxogYXNndC90eXBlL3JldGVudGlvbl9wb2xpY3ku",
            "cHJvdG8aH2dvb2dsZS9wcm90b2J1Zi90aW1lc3RhbXAucHJvdG8iLAoOR2V0",
            "SW5mb1JlcXVlc3QSDAoEbmFtZRgBIAEoCRIMCgR0eXBlGAIgASgJIlcKD0dl",
            "dEluZm9SZXNwb25zZRIjCgdkYXRhc2V0GAEgASgLMhIuYXNndC50eXBlLkRh",
            "dGFzZXQSHwoFbW9kZWwYAiABKAsyEC5hc2d0LnR5cGUuTW9kZWxCBloEZGF0",
            "YWIGcHJvdG8z"));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Asgt.Type.DatasetReflection.Descriptor, global::Asgt.Type.ModelReflection.Descriptor, global::Asgt.Type.RetentionPolicyReflection.Descriptor, global::Google.Protobuf.WellKnownTypes.TimestampReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.Dataservice.V1Alpha1.GetInfoRequest), global::Asgt.Dataservice.V1Alpha1.GetInfoRequest.Parser, new[]{ "Name", "Type" }, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.Dataservice.V1Alpha1.GetInfoResponse), global::Asgt.Dataservice.V1Alpha1.GetInfoResponse.Parser, new[]{ "Dataset", "Model" }, null, null, null)
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
      name_ = other.name_;
      type_ = other.type_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GetInfoRequest Clone() {
      return new GetInfoRequest(this);
    }

    /// <summary>Field number for the "name" field.</summary>
    public const int NameFieldNumber = 1;
    private string name_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string Name {
      get { return name_; }
      set {
        name_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "type" field.</summary>
    public const int TypeFieldNumber = 2;
    private string type_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string Type {
      get { return type_; }
      set {
        type_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
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
      if (Name != other.Name) return false;
      if (Type != other.Type) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (Name.Length != 0) hash ^= Name.GetHashCode();
      if (Type.Length != 0) hash ^= Type.GetHashCode();
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
      if (Name.Length != 0) {
        output.WriteRawTag(10);
        output.WriteString(Name);
      }
      if (Type.Length != 0) {
        output.WriteRawTag(18);
        output.WriteString(Type);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (Name.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Name);
      }
      if (Type.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Type);
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
      if (other.Name.Length != 0) {
        Name = other.Name;
      }
      if (other.Type.Length != 0) {
        Type = other.Type;
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
            Name = input.ReadString();
            break;
          }
          case 18: {
            Type = input.ReadString();
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
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (dataset_ != null) hash ^= Dataset.GetHashCode();
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
      if (dataset_ != null) {
        output.WriteRawTag(10);
        output.WriteMessage(Dataset);
      }
      if (model_ != null) {
        output.WriteRawTag(18);
        output.WriteMessage(Model);
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
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code
