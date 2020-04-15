// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: asgt/modeltrainer/v1alpha1/training_service.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Asgt.Trainingservice.V1Alpha1 {

  /// <summary>Holder for reflection information generated from asgt/modeltrainer/v1alpha1/training_service.proto</summary>
  public static partial class TrainingServiceReflection {

    #region Descriptor
    /// <summary>File descriptor for asgt/modeltrainer/v1alpha1/training_service.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static TrainingServiceReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "CjFhc2d0L21vZGVsdHJhaW5lci92MWFscGhhMS90cmFpbmluZ19zZXJ2aWNl",
            "LnByb3RvEh1hc2d0LnRyYWluaW5nc2VydmljZS52MWFscGhhMSJvChFUcmFp",
            "bk1vZGVsUmVxdWVzdBISCgptb2RlbF90eXBlGAEgASgJEhAKCGNvbnN1bWVy",
            "GAIgASgJEg8KB2RhdGFzZXQYAyABKAkSEQoJaW1hZ2VfdGFnGAQgASgJEhAK",
            "CHJ1bl9uYW1lGAUgASgJIhQKElRyYWluTW9kZWxSZXNwb25zZTKEAQoPVHJh",
            "aW5pbmdTZXJ2aWNlEnEKClRyYWluTW9kZWwSMC5hc2d0LnRyYWluaW5nc2Vy",
            "dmljZS52MWFscGhhMS5UcmFpbk1vZGVsUmVxdWVzdBoxLmFzZ3QudHJhaW5p",
            "bmdzZXJ2aWNlLnYxYWxwaGExLlRyYWluTW9kZWxSZXNwb25zZUIRWg90cmFp",
            "bmluZ3NlcnZpY2ViBnByb3RvMw=="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { },
          new pbr::GeneratedClrTypeInfo(null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.Trainingservice.V1Alpha1.TrainModelRequest), global::Asgt.Trainingservice.V1Alpha1.TrainModelRequest.Parser, new[]{ "ModelType", "Consumer", "Dataset", "ImageTag", "RunName" }, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.Trainingservice.V1Alpha1.TrainModelResponse), global::Asgt.Trainingservice.V1Alpha1.TrainModelResponse.Parser, null, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class TrainModelRequest : pb::IMessage<TrainModelRequest> {
    private static readonly pb::MessageParser<TrainModelRequest> _parser = new pb::MessageParser<TrainModelRequest>(() => new TrainModelRequest());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<TrainModelRequest> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Asgt.Trainingservice.V1Alpha1.TrainingServiceReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public TrainModelRequest() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public TrainModelRequest(TrainModelRequest other) : this() {
      modelType_ = other.modelType_;
      consumer_ = other.consumer_;
      dataset_ = other.dataset_;
      imageTag_ = other.imageTag_;
      runName_ = other.runName_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public TrainModelRequest Clone() {
      return new TrainModelRequest(this);
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

    /// <summary>Field number for the "dataset" field.</summary>
    public const int DatasetFieldNumber = 3;
    private string dataset_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string Dataset {
      get { return dataset_; }
      set {
        dataset_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "image_tag" field.</summary>
    public const int ImageTagFieldNumber = 4;
    private string imageTag_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string ImageTag {
      get { return imageTag_; }
      set {
        imageTag_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "run_name" field.</summary>
    public const int RunNameFieldNumber = 5;
    private string runName_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string RunName {
      get { return runName_; }
      set {
        runName_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as TrainModelRequest);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(TrainModelRequest other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (ModelType != other.ModelType) return false;
      if (Consumer != other.Consumer) return false;
      if (Dataset != other.Dataset) return false;
      if (ImageTag != other.ImageTag) return false;
      if (RunName != other.RunName) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (ModelType.Length != 0) hash ^= ModelType.GetHashCode();
      if (Consumer.Length != 0) hash ^= Consumer.GetHashCode();
      if (Dataset.Length != 0) hash ^= Dataset.GetHashCode();
      if (ImageTag.Length != 0) hash ^= ImageTag.GetHashCode();
      if (RunName.Length != 0) hash ^= RunName.GetHashCode();
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
      if (Consumer.Length != 0) {
        output.WriteRawTag(18);
        output.WriteString(Consumer);
      }
      if (Dataset.Length != 0) {
        output.WriteRawTag(26);
        output.WriteString(Dataset);
      }
      if (ImageTag.Length != 0) {
        output.WriteRawTag(34);
        output.WriteString(ImageTag);
      }
      if (RunName.Length != 0) {
        output.WriteRawTag(42);
        output.WriteString(RunName);
      }
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
      if (Consumer.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Consumer);
      }
      if (Dataset.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Dataset);
      }
      if (ImageTag.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(ImageTag);
      }
      if (RunName.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(RunName);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(TrainModelRequest other) {
      if (other == null) {
        return;
      }
      if (other.ModelType.Length != 0) {
        ModelType = other.ModelType;
      }
      if (other.Consumer.Length != 0) {
        Consumer = other.Consumer;
      }
      if (other.Dataset.Length != 0) {
        Dataset = other.Dataset;
      }
      if (other.ImageTag.Length != 0) {
        ImageTag = other.ImageTag;
      }
      if (other.RunName.Length != 0) {
        RunName = other.RunName;
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
            ModelType = input.ReadString();
            break;
          }
          case 18: {
            Consumer = input.ReadString();
            break;
          }
          case 26: {
            Dataset = input.ReadString();
            break;
          }
          case 34: {
            ImageTag = input.ReadString();
            break;
          }
          case 42: {
            RunName = input.ReadString();
            break;
          }
        }
      }
    }

  }

  public sealed partial class TrainModelResponse : pb::IMessage<TrainModelResponse> {
    private static readonly pb::MessageParser<TrainModelResponse> _parser = new pb::MessageParser<TrainModelResponse>(() => new TrainModelResponse());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<TrainModelResponse> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Asgt.Trainingservice.V1Alpha1.TrainingServiceReflection.Descriptor.MessageTypes[1]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public TrainModelResponse() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public TrainModelResponse(TrainModelResponse other) : this() {
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public TrainModelResponse Clone() {
      return new TrainModelResponse(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as TrainModelResponse);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(TrainModelResponse other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
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
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(TrainModelResponse other) {
      if (other == null) {
        return;
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
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code
