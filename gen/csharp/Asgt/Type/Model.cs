// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: asgt/type/model.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021, 8981
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Asgt.Type {

  /// <summary>Holder for reflection information generated from asgt/type/model.proto</summary>
  public static partial class ModelReflection {

    #region Descriptor
    /// <summary>File descriptor for asgt/type/model.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static ModelReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "ChVhc2d0L3R5cGUvbW9kZWwucHJvdG8SCWFzZ3QudHlwZRoaYXNndC90eXBl",
            "L21vZGVsX2ZpbGUucHJvdG8aHmFzZ3QvdHlwZS90YXJnZXRfbWV0cmljcy5w",
            "cm90bxocZ2VuX2JxX3NjaGVtYS9icV9maWVsZC5wcm90bxofZ29vZ2xlL3By",
            "b3RvYnVmL3RpbWVzdGFtcC5wcm90byLfAwoFTW9kZWwSHwoHdmVyc2lvbhgD",
            "IAEoA0IF6j8CCAFSB3ZlcnNpb24SOQoKY3JlYXRlZF9hdBgEIAEoCzIaLmdv",
            "b2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBSCWNyZWF0ZWRBdBIoCgxkYXRhc2V0",
            "X3NpemUYBSABKAVCBeo/AhgBUgtkYXRhc2V0U2l6ZRIqCg10cmFpbmluZ19z",
            "aXplGAYgASgFQgXqPwIYAVIMdHJhaW5pbmdTaXplEkwKEWNvbmZpZGVuY2Vf",
            "c2NvcmVzGAcgAygLMhguYXNndC50eXBlLlRhcmdldE1ldHJpY3NCBeo/AhgB",
            "UhBjb25maWRlbmNlU2NvcmVzEjkKCmlucHV0X3R5cGUYCCABKA4yGi5hc2d0",
            "LnR5cGUuTW9kZWwuSW5wdXRUeXBlUglpbnB1dFR5cGUSIQoMZGF0YXNldF90",
            "eXBlGAkgASgJUgtkYXRhc2V0VHlwZRI8Cgttb2RlbF9maWxlcxgKIAMoCzIU",
            "LmFzZ3QudHlwZS5Nb2RlbEZpbGVCBeo/AhgBUgptb2RlbEZpbGVzIjQKCUlu",
            "cHV0VHlwZRITCg9GRUFUVVJFX1RFTlNPUlMQABISCg5FWEFNUExFX1RFTlNP",
            "UhABSgQIARADQp0BChJhaS52aXNtYS5hc2d0LnR5cGVCCk1vZGVsUHJvdG9Q",
            "AVo2Z2l0aHViLmNvbS9lLWNvbm9taWMvdm1sYXBpcy9nZW4vZ28vYXNndC90",
            "eXBlO2FzZ3R0eXBlogIDQVRYqgIJQXNndC5UeXBlygIJQXNndFxUeXBl4gIV",
            "QXNndFxUeXBlXEdQQk1ldGFkYXRh6gIKQXNndDo6VHlwZWIGcHJvdG8z"));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Asgt.Type.ModelFileReflection.Descriptor, global::Asgt.Type.TargetMetricsReflection.Descriptor, global::GenBqSchema.BqFieldReflection.Descriptor, global::Google.Protobuf.WellKnownTypes.TimestampReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.Type.Model), global::Asgt.Type.Model.Parser, new[]{ "Version", "CreatedAt", "DatasetSize", "TrainingSize", "ConfidenceScores", "InputType", "DatasetType", "ModelFiles" }, null, new[]{ typeof(global::Asgt.Type.Model.Types.InputType) }, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class Model : pb::IMessage<Model>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<Model> _parser = new pb::MessageParser<Model>(() => new Model());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pb::MessageParser<Model> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Asgt.Type.ModelReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public Model() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public Model(Model other) : this() {
      version_ = other.version_;
      createdAt_ = other.createdAt_ != null ? other.createdAt_.Clone() : null;
      datasetSize_ = other.datasetSize_;
      trainingSize_ = other.trainingSize_;
      confidenceScores_ = other.confidenceScores_.Clone();
      inputType_ = other.inputType_;
      datasetType_ = other.datasetType_;
      modelFiles_ = other.modelFiles_.Clone();
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public Model Clone() {
      return new Model(this);
    }

    /// <summary>Field number for the "version" field.</summary>
    public const int VersionFieldNumber = 3;
    private long version_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public long Version {
      get { return version_; }
      set {
        version_ = value;
      }
    }

    /// <summary>Field number for the "created_at" field.</summary>
    public const int CreatedAtFieldNumber = 4;
    private global::Google.Protobuf.WellKnownTypes.Timestamp createdAt_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public global::Google.Protobuf.WellKnownTypes.Timestamp CreatedAt {
      get { return createdAt_; }
      set {
        createdAt_ = value;
      }
    }

    /// <summary>Field number for the "dataset_size" field.</summary>
    public const int DatasetSizeFieldNumber = 5;
    private int datasetSize_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int DatasetSize {
      get { return datasetSize_; }
      set {
        datasetSize_ = value;
      }
    }

    /// <summary>Field number for the "training_size" field.</summary>
    public const int TrainingSizeFieldNumber = 6;
    private int trainingSize_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int TrainingSize {
      get { return trainingSize_; }
      set {
        trainingSize_ = value;
      }
    }

    /// <summary>Field number for the "confidence_scores" field.</summary>
    public const int ConfidenceScoresFieldNumber = 7;
    private static readonly pb::FieldCodec<global::Asgt.Type.TargetMetrics> _repeated_confidenceScores_codec
        = pb::FieldCodec.ForMessage(58, global::Asgt.Type.TargetMetrics.Parser);
    private readonly pbc::RepeatedField<global::Asgt.Type.TargetMetrics> confidenceScores_ = new pbc::RepeatedField<global::Asgt.Type.TargetMetrics>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public pbc::RepeatedField<global::Asgt.Type.TargetMetrics> ConfidenceScores {
      get { return confidenceScores_; }
    }

    /// <summary>Field number for the "input_type" field.</summary>
    public const int InputTypeFieldNumber = 8;
    private global::Asgt.Type.Model.Types.InputType inputType_ = global::Asgt.Type.Model.Types.InputType.FeatureTensors;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public global::Asgt.Type.Model.Types.InputType InputType {
      get { return inputType_; }
      set {
        inputType_ = value;
      }
    }

    /// <summary>Field number for the "dataset_type" field.</summary>
    public const int DatasetTypeFieldNumber = 9;
    private string datasetType_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public string DatasetType {
      get { return datasetType_; }
      set {
        datasetType_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "model_files" field.</summary>
    public const int ModelFilesFieldNumber = 10;
    private static readonly pb::FieldCodec<global::Asgt.Type.ModelFile> _repeated_modelFiles_codec
        = pb::FieldCodec.ForMessage(82, global::Asgt.Type.ModelFile.Parser);
    private readonly pbc::RepeatedField<global::Asgt.Type.ModelFile> modelFiles_ = new pbc::RepeatedField<global::Asgt.Type.ModelFile>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public pbc::RepeatedField<global::Asgt.Type.ModelFile> ModelFiles {
      get { return modelFiles_; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override bool Equals(object other) {
      return Equals(other as Model);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public bool Equals(Model other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Version != other.Version) return false;
      if (!object.Equals(CreatedAt, other.CreatedAt)) return false;
      if (DatasetSize != other.DatasetSize) return false;
      if (TrainingSize != other.TrainingSize) return false;
      if(!confidenceScores_.Equals(other.confidenceScores_)) return false;
      if (InputType != other.InputType) return false;
      if (DatasetType != other.DatasetType) return false;
      if(!modelFiles_.Equals(other.modelFiles_)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override int GetHashCode() {
      int hash = 1;
      if (Version != 0L) hash ^= Version.GetHashCode();
      if (createdAt_ != null) hash ^= CreatedAt.GetHashCode();
      if (DatasetSize != 0) hash ^= DatasetSize.GetHashCode();
      if (TrainingSize != 0) hash ^= TrainingSize.GetHashCode();
      hash ^= confidenceScores_.GetHashCode();
      if (InputType != global::Asgt.Type.Model.Types.InputType.FeatureTensors) hash ^= InputType.GetHashCode();
      if (DatasetType.Length != 0) hash ^= DatasetType.GetHashCode();
      hash ^= modelFiles_.GetHashCode();
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
      if (Version != 0L) {
        output.WriteRawTag(24);
        output.WriteInt64(Version);
      }
      if (createdAt_ != null) {
        output.WriteRawTag(34);
        output.WriteMessage(CreatedAt);
      }
      if (DatasetSize != 0) {
        output.WriteRawTag(40);
        output.WriteInt32(DatasetSize);
      }
      if (TrainingSize != 0) {
        output.WriteRawTag(48);
        output.WriteInt32(TrainingSize);
      }
      confidenceScores_.WriteTo(output, _repeated_confidenceScores_codec);
      if (InputType != global::Asgt.Type.Model.Types.InputType.FeatureTensors) {
        output.WriteRawTag(64);
        output.WriteEnum((int) InputType);
      }
      if (DatasetType.Length != 0) {
        output.WriteRawTag(74);
        output.WriteString(DatasetType);
      }
      modelFiles_.WriteTo(output, _repeated_modelFiles_codec);
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      if (Version != 0L) {
        output.WriteRawTag(24);
        output.WriteInt64(Version);
      }
      if (createdAt_ != null) {
        output.WriteRawTag(34);
        output.WriteMessage(CreatedAt);
      }
      if (DatasetSize != 0) {
        output.WriteRawTag(40);
        output.WriteInt32(DatasetSize);
      }
      if (TrainingSize != 0) {
        output.WriteRawTag(48);
        output.WriteInt32(TrainingSize);
      }
      confidenceScores_.WriteTo(ref output, _repeated_confidenceScores_codec);
      if (InputType != global::Asgt.Type.Model.Types.InputType.FeatureTensors) {
        output.WriteRawTag(64);
        output.WriteEnum((int) InputType);
      }
      if (DatasetType.Length != 0) {
        output.WriteRawTag(74);
        output.WriteString(DatasetType);
      }
      modelFiles_.WriteTo(ref output, _repeated_modelFiles_codec);
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int CalculateSize() {
      int size = 0;
      if (Version != 0L) {
        size += 1 + pb::CodedOutputStream.ComputeInt64Size(Version);
      }
      if (createdAt_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(CreatedAt);
      }
      if (DatasetSize != 0) {
        size += 1 + pb::CodedOutputStream.ComputeInt32Size(DatasetSize);
      }
      if (TrainingSize != 0) {
        size += 1 + pb::CodedOutputStream.ComputeInt32Size(TrainingSize);
      }
      size += confidenceScores_.CalculateSize(_repeated_confidenceScores_codec);
      if (InputType != global::Asgt.Type.Model.Types.InputType.FeatureTensors) {
        size += 1 + pb::CodedOutputStream.ComputeEnumSize((int) InputType);
      }
      if (DatasetType.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(DatasetType);
      }
      size += modelFiles_.CalculateSize(_repeated_modelFiles_codec);
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(Model other) {
      if (other == null) {
        return;
      }
      if (other.Version != 0L) {
        Version = other.Version;
      }
      if (other.createdAt_ != null) {
        if (createdAt_ == null) {
          CreatedAt = new global::Google.Protobuf.WellKnownTypes.Timestamp();
        }
        CreatedAt.MergeFrom(other.CreatedAt);
      }
      if (other.DatasetSize != 0) {
        DatasetSize = other.DatasetSize;
      }
      if (other.TrainingSize != 0) {
        TrainingSize = other.TrainingSize;
      }
      confidenceScores_.Add(other.confidenceScores_);
      if (other.InputType != global::Asgt.Type.Model.Types.InputType.FeatureTensors) {
        InputType = other.InputType;
      }
      if (other.DatasetType.Length != 0) {
        DatasetType = other.DatasetType;
      }
      modelFiles_.Add(other.modelFiles_);
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
          case 24: {
            Version = input.ReadInt64();
            break;
          }
          case 34: {
            if (createdAt_ == null) {
              CreatedAt = new global::Google.Protobuf.WellKnownTypes.Timestamp();
            }
            input.ReadMessage(CreatedAt);
            break;
          }
          case 40: {
            DatasetSize = input.ReadInt32();
            break;
          }
          case 48: {
            TrainingSize = input.ReadInt32();
            break;
          }
          case 58: {
            confidenceScores_.AddEntriesFrom(input, _repeated_confidenceScores_codec);
            break;
          }
          case 64: {
            InputType = (global::Asgt.Type.Model.Types.InputType) input.ReadEnum();
            break;
          }
          case 74: {
            DatasetType = input.ReadString();
            break;
          }
          case 82: {
            modelFiles_.AddEntriesFrom(input, _repeated_modelFiles_codec);
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
          case 24: {
            Version = input.ReadInt64();
            break;
          }
          case 34: {
            if (createdAt_ == null) {
              CreatedAt = new global::Google.Protobuf.WellKnownTypes.Timestamp();
            }
            input.ReadMessage(CreatedAt);
            break;
          }
          case 40: {
            DatasetSize = input.ReadInt32();
            break;
          }
          case 48: {
            TrainingSize = input.ReadInt32();
            break;
          }
          case 58: {
            confidenceScores_.AddEntriesFrom(ref input, _repeated_confidenceScores_codec);
            break;
          }
          case 64: {
            InputType = (global::Asgt.Type.Model.Types.InputType) input.ReadEnum();
            break;
          }
          case 74: {
            DatasetType = input.ReadString();
            break;
          }
          case 82: {
            modelFiles_.AddEntriesFrom(ref input, _repeated_modelFiles_codec);
            break;
          }
        }
      }
    }
    #endif

    #region Nested types
    /// <summary>Container for nested types declared in the Model message type.</summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static partial class Types {
      public enum InputType {
        [pbr::OriginalName("FEATURE_TENSORS")] FeatureTensors = 0,
        [pbr::OriginalName("EXAMPLE_TENSOR")] ExampleTensor = 1,
      }

    }
    #endregion

  }

  #endregion

}

#endregion Designer generated code
