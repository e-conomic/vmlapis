// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: asgt/v2alpha/suggester.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Asgt.V2Alpha.Suggester {

  /// <summary>Holder for reflection information generated from asgt/v2alpha/suggester.proto</summary>
  public static partial class SuggesterReflection {

    #region Descriptor
    /// <summary>File descriptor for asgt/v2alpha/suggester.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static SuggesterReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "Chxhc2d0L3YyYWxwaGEvc3VnZ2VzdGVyLnByb3RvEhZhc2d0LnYyYWxwaGEu",
            "c3VnZ2VzdGVyGhRhc2d0L3R5cGUvZGF0YS5wcm90bxoVYXNndC90eXBlL21v",
            "ZGVsLnByb3RvGhphc2d0L3R5cGUvcHJlZGljdGlvbi5wcm90bxocZ29vZ2xl",
            "L2FwaS9hbm5vdGF0aW9ucy5wcm90bxoZb3B0aW9ucy9hbm5vdGF0aW9ucy5w",
            "cm90byKFAQoOU3VnZ2VzdFJlcXVlc3QSDAoEbmFtZRgBIAEoCRIeCgVpbnB1",
            "dBgDIAEoCzIPLmFzZ3QudHlwZS5EYXRhEjcKB29wdGlvbnMYBCABKAsyJi5h",
            "c2d0LnYyYWxwaGEuc3VnZ2VzdGVyLlN1Z2dlc3RPcHRpb25zEgwKBHRhZ3MY",
            "BSADKAkiXQoPU3VnZ2VzdFJlc3BvbnNlEikKCnByZWRpY3Rpb24YASABKAsy",
            "FS5hc2d0LnR5cGUuUHJlZGljdGlvbhIfCgVtb2RlbBgCIAEoCzIQLmFzZ3Qu",
            "dHlwZS5Nb2RlbCJ3Cg5TdWdnZXN0T3B0aW9ucxIVCg1zdWdnZXN0X2xpbWl0",
            "GAEgASgFEjMKDm1pbl9jb25maWRlbmNlGAIgASgOMhsuYXNndC50eXBlLkNv",
            "bmZpZGVuY2UuTGV2ZWw6GZJBFjIUeyJzdWdnZXN0X2xpbWl0IjogM30iiwEK",
            "E0JhdGNoU3VnZ2VzdFJlcXVlc3QSDAoEbmFtZRgBIAEoCRIfCgZpbnB1dHMY",
            "AyADKAsyDy5hc2d0LnR5cGUuRGF0YRI3CgdvcHRpb25zGAQgASgLMiYuYXNn",
            "dC52MmFscGhhLnN1Z2dlc3Rlci5TdWdnZXN0T3B0aW9ucxIMCgR0YWdzGAUg",
            "AygJImMKFEJhdGNoU3VnZ2VzdFJlc3BvbnNlEioKC3ByZWRpY3Rpb25zGAEg",
            "AygLMhUuYXNndC50eXBlLlByZWRpY3Rpb24SHwoFbW9kZWwYAiABKAsyEC5h",
            "c2d0LnR5cGUuTW9kZWwyuQMKCVN1Z2dlc3RlchKCAQoHU3VnZ2VzdBImLmFz",
            "Z3QudjJhbHBoYS5zdWdnZXN0ZXIuU3VnZ2VzdFJlcXVlc3QaJy5hc2d0LnYy",
            "YWxwaGEuc3VnZ2VzdGVyLlN1Z2dlc3RSZXNwb25zZSImgtPkkwIgIhsvdjIv",
            "ZGF0YXNldHMve25hbWV9OnN1Z2dlc3Q6ASoSjAEKDEJhdGNoU3VnZ2VzdBIm",
            "LmFzZ3QudjJhbHBoYS5zdWdnZXN0ZXIuU3VnZ2VzdFJlcXVlc3QaJy5hc2d0",
            "LnYyYWxwaGEuc3VnZ2VzdGVyLlN1Z2dlc3RSZXNwb25zZSIrgtPkkwIlIiAv",
            "djIvZGF0YXNldHMve25hbWV9OmJhdGNoU3VnZ2VzdDoBKhKXAQoRTW9kZWxC",
            "YXRjaFN1Z2dlc3QSJi5hc2d0LnYyYWxwaGEuc3VnZ2VzdGVyLlN1Z2dlc3RS",
            "ZXF1ZXN0GicuYXNndC52MmFscGhhLnN1Z2dlc3Rlci5TdWdnZXN0UmVzcG9u",
            "c2UiMYLT5JMCKyImL3YyL2RhdGFzZXRzL3tuYW1lfS9tb2RlbDpiYXRjaFN1",
            "Z2dlc3Q6ASpCPFo6Z2l0aHViLmNvbS9lLWNvbm9taWMvdm1sYXBpcy9nZW4v",
            "Z28vYXNndC92MmFscGhhO3N1Z2dlc3RlcmIGcHJvdG8z"));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Asgt.Type.DataReflection.Descriptor, global::Asgt.Type.ModelReflection.Descriptor, global::Asgt.Type.PredictionReflection.Descriptor, global::Google.Api.AnnotationsReflection.Descriptor, global::Grpc.Gateway.ProtocGenOpenapiv2.Options.AnnotationsReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.V2Alpha.Suggester.SuggestRequest), global::Asgt.V2Alpha.Suggester.SuggestRequest.Parser, new[]{ "Name", "Input", "Options", "Tags" }, null, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.V2Alpha.Suggester.SuggestResponse), global::Asgt.V2Alpha.Suggester.SuggestResponse.Parser, new[]{ "Prediction", "Model" }, null, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.V2Alpha.Suggester.SuggestOptions), global::Asgt.V2Alpha.Suggester.SuggestOptions.Parser, new[]{ "SuggestLimit", "MinConfidence" }, null, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.V2Alpha.Suggester.BatchSuggestRequest), global::Asgt.V2Alpha.Suggester.BatchSuggestRequest.Parser, new[]{ "Name", "Inputs", "Options", "Tags" }, null, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.V2Alpha.Suggester.BatchSuggestResponse), global::Asgt.V2Alpha.Suggester.BatchSuggestResponse.Parser, new[]{ "Predictions", "Model" }, null, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class SuggestRequest : pb::IMessage<SuggestRequest> {
    private static readonly pb::MessageParser<SuggestRequest> _parser = new pb::MessageParser<SuggestRequest>(() => new SuggestRequest());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<SuggestRequest> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Asgt.V2Alpha.Suggester.SuggesterReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public SuggestRequest() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public SuggestRequest(SuggestRequest other) : this() {
      name_ = other.name_;
      input_ = other.input_ != null ? other.input_.Clone() : null;
      options_ = other.options_ != null ? other.options_.Clone() : null;
      tags_ = other.tags_.Clone();
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public SuggestRequest Clone() {
      return new SuggestRequest(this);
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

    /// <summary>Field number for the "input" field.</summary>
    public const int InputFieldNumber = 3;
    private global::Asgt.Type.Data input_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Asgt.Type.Data Input {
      get { return input_; }
      set {
        input_ = value;
      }
    }

    /// <summary>Field number for the "options" field.</summary>
    public const int OptionsFieldNumber = 4;
    private global::Asgt.V2Alpha.Suggester.SuggestOptions options_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Asgt.V2Alpha.Suggester.SuggestOptions Options {
      get { return options_; }
      set {
        options_ = value;
      }
    }

    /// <summary>Field number for the "tags" field.</summary>
    public const int TagsFieldNumber = 5;
    private static readonly pb::FieldCodec<string> _repeated_tags_codec
        = pb::FieldCodec.ForString(42);
    private readonly pbc::RepeatedField<string> tags_ = new pbc::RepeatedField<string>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<string> Tags {
      get { return tags_; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as SuggestRequest);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(SuggestRequest other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Name != other.Name) return false;
      if (!object.Equals(Input, other.Input)) return false;
      if (!object.Equals(Options, other.Options)) return false;
      if(!tags_.Equals(other.tags_)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (Name.Length != 0) hash ^= Name.GetHashCode();
      if (input_ != null) hash ^= Input.GetHashCode();
      if (options_ != null) hash ^= Options.GetHashCode();
      hash ^= tags_.GetHashCode();
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
      if (input_ != null) {
        output.WriteRawTag(26);
        output.WriteMessage(Input);
      }
      if (options_ != null) {
        output.WriteRawTag(34);
        output.WriteMessage(Options);
      }
      tags_.WriteTo(output, _repeated_tags_codec);
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
      if (input_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Input);
      }
      if (options_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Options);
      }
      size += tags_.CalculateSize(_repeated_tags_codec);
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(SuggestRequest other) {
      if (other == null) {
        return;
      }
      if (other.Name.Length != 0) {
        Name = other.Name;
      }
      if (other.input_ != null) {
        if (input_ == null) {
          Input = new global::Asgt.Type.Data();
        }
        Input.MergeFrom(other.Input);
      }
      if (other.options_ != null) {
        if (options_ == null) {
          Options = new global::Asgt.V2Alpha.Suggester.SuggestOptions();
        }
        Options.MergeFrom(other.Options);
      }
      tags_.Add(other.tags_);
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
          case 26: {
            if (input_ == null) {
              Input = new global::Asgt.Type.Data();
            }
            input.ReadMessage(Input);
            break;
          }
          case 34: {
            if (options_ == null) {
              Options = new global::Asgt.V2Alpha.Suggester.SuggestOptions();
            }
            input.ReadMessage(Options);
            break;
          }
          case 42: {
            tags_.AddEntriesFrom(input, _repeated_tags_codec);
            break;
          }
        }
      }
    }

  }

  public sealed partial class SuggestResponse : pb::IMessage<SuggestResponse> {
    private static readonly pb::MessageParser<SuggestResponse> _parser = new pb::MessageParser<SuggestResponse>(() => new SuggestResponse());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<SuggestResponse> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Asgt.V2Alpha.Suggester.SuggesterReflection.Descriptor.MessageTypes[1]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public SuggestResponse() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public SuggestResponse(SuggestResponse other) : this() {
      prediction_ = other.prediction_ != null ? other.prediction_.Clone() : null;
      model_ = other.model_ != null ? other.model_.Clone() : null;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public SuggestResponse Clone() {
      return new SuggestResponse(this);
    }

    /// <summary>Field number for the "prediction" field.</summary>
    public const int PredictionFieldNumber = 1;
    private global::Asgt.Type.Prediction prediction_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Asgt.Type.Prediction Prediction {
      get { return prediction_; }
      set {
        prediction_ = value;
      }
    }

    /// <summary>Field number for the "model" field.</summary>
    public const int ModelFieldNumber = 2;
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
      return Equals(other as SuggestResponse);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(SuggestResponse other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (!object.Equals(Prediction, other.Prediction)) return false;
      if (!object.Equals(Model, other.Model)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (prediction_ != null) hash ^= Prediction.GetHashCode();
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
      if (prediction_ != null) {
        output.WriteRawTag(10);
        output.WriteMessage(Prediction);
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
      if (prediction_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Prediction);
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
    public void MergeFrom(SuggestResponse other) {
      if (other == null) {
        return;
      }
      if (other.prediction_ != null) {
        if (prediction_ == null) {
          Prediction = new global::Asgt.Type.Prediction();
        }
        Prediction.MergeFrom(other.Prediction);
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
    public void MergeFrom(pb::CodedInputStream input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 10: {
            if (prediction_ == null) {
              Prediction = new global::Asgt.Type.Prediction();
            }
            input.ReadMessage(Prediction);
            break;
          }
          case 18: {
            if (model_ == null) {
              Model = new global::Asgt.Type.Model();
            }
            input.ReadMessage(Model);
            break;
          }
        }
      }
    }

  }

  public sealed partial class SuggestOptions : pb::IMessage<SuggestOptions> {
    private static readonly pb::MessageParser<SuggestOptions> _parser = new pb::MessageParser<SuggestOptions>(() => new SuggestOptions());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<SuggestOptions> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Asgt.V2Alpha.Suggester.SuggesterReflection.Descriptor.MessageTypes[2]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public SuggestOptions() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public SuggestOptions(SuggestOptions other) : this() {
      suggestLimit_ = other.suggestLimit_;
      minConfidence_ = other.minConfidence_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public SuggestOptions Clone() {
      return new SuggestOptions(this);
    }

    /// <summary>Field number for the "suggest_limit" field.</summary>
    public const int SuggestLimitFieldNumber = 1;
    private int suggestLimit_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int SuggestLimit {
      get { return suggestLimit_; }
      set {
        suggestLimit_ = value;
      }
    }

    /// <summary>Field number for the "min_confidence" field.</summary>
    public const int MinConfidenceFieldNumber = 2;
    private global::Asgt.Type.Confidence.Types.Level minConfidence_ = global::Asgt.Type.Confidence.Types.Level.Unknown;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Asgt.Type.Confidence.Types.Level MinConfidence {
      get { return minConfidence_; }
      set {
        minConfidence_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as SuggestOptions);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(SuggestOptions other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (SuggestLimit != other.SuggestLimit) return false;
      if (MinConfidence != other.MinConfidence) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (SuggestLimit != 0) hash ^= SuggestLimit.GetHashCode();
      if (MinConfidence != global::Asgt.Type.Confidence.Types.Level.Unknown) hash ^= MinConfidence.GetHashCode();
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
      if (SuggestLimit != 0) {
        output.WriteRawTag(8);
        output.WriteInt32(SuggestLimit);
      }
      if (MinConfidence != global::Asgt.Type.Confidence.Types.Level.Unknown) {
        output.WriteRawTag(16);
        output.WriteEnum((int) MinConfidence);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (SuggestLimit != 0) {
        size += 1 + pb::CodedOutputStream.ComputeInt32Size(SuggestLimit);
      }
      if (MinConfidence != global::Asgt.Type.Confidence.Types.Level.Unknown) {
        size += 1 + pb::CodedOutputStream.ComputeEnumSize((int) MinConfidence);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(SuggestOptions other) {
      if (other == null) {
        return;
      }
      if (other.SuggestLimit != 0) {
        SuggestLimit = other.SuggestLimit;
      }
      if (other.MinConfidence != global::Asgt.Type.Confidence.Types.Level.Unknown) {
        MinConfidence = other.MinConfidence;
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
            SuggestLimit = input.ReadInt32();
            break;
          }
          case 16: {
            MinConfidence = (global::Asgt.Type.Confidence.Types.Level) input.ReadEnum();
            break;
          }
        }
      }
    }

  }

  public sealed partial class BatchSuggestRequest : pb::IMessage<BatchSuggestRequest> {
    private static readonly pb::MessageParser<BatchSuggestRequest> _parser = new pb::MessageParser<BatchSuggestRequest>(() => new BatchSuggestRequest());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<BatchSuggestRequest> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Asgt.V2Alpha.Suggester.SuggesterReflection.Descriptor.MessageTypes[3]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public BatchSuggestRequest() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public BatchSuggestRequest(BatchSuggestRequest other) : this() {
      name_ = other.name_;
      inputs_ = other.inputs_.Clone();
      options_ = other.options_ != null ? other.options_.Clone() : null;
      tags_ = other.tags_.Clone();
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public BatchSuggestRequest Clone() {
      return new BatchSuggestRequest(this);
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

    /// <summary>Field number for the "inputs" field.</summary>
    public const int InputsFieldNumber = 3;
    private static readonly pb::FieldCodec<global::Asgt.Type.Data> _repeated_inputs_codec
        = pb::FieldCodec.ForMessage(26, global::Asgt.Type.Data.Parser);
    private readonly pbc::RepeatedField<global::Asgt.Type.Data> inputs_ = new pbc::RepeatedField<global::Asgt.Type.Data>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<global::Asgt.Type.Data> Inputs {
      get { return inputs_; }
    }

    /// <summary>Field number for the "options" field.</summary>
    public const int OptionsFieldNumber = 4;
    private global::Asgt.V2Alpha.Suggester.SuggestOptions options_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Asgt.V2Alpha.Suggester.SuggestOptions Options {
      get { return options_; }
      set {
        options_ = value;
      }
    }

    /// <summary>Field number for the "tags" field.</summary>
    public const int TagsFieldNumber = 5;
    private static readonly pb::FieldCodec<string> _repeated_tags_codec
        = pb::FieldCodec.ForString(42);
    private readonly pbc::RepeatedField<string> tags_ = new pbc::RepeatedField<string>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<string> Tags {
      get { return tags_; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as BatchSuggestRequest);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(BatchSuggestRequest other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Name != other.Name) return false;
      if(!inputs_.Equals(other.inputs_)) return false;
      if (!object.Equals(Options, other.Options)) return false;
      if(!tags_.Equals(other.tags_)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (Name.Length != 0) hash ^= Name.GetHashCode();
      hash ^= inputs_.GetHashCode();
      if (options_ != null) hash ^= Options.GetHashCode();
      hash ^= tags_.GetHashCode();
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
      inputs_.WriteTo(output, _repeated_inputs_codec);
      if (options_ != null) {
        output.WriteRawTag(34);
        output.WriteMessage(Options);
      }
      tags_.WriteTo(output, _repeated_tags_codec);
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
      size += inputs_.CalculateSize(_repeated_inputs_codec);
      if (options_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Options);
      }
      size += tags_.CalculateSize(_repeated_tags_codec);
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(BatchSuggestRequest other) {
      if (other == null) {
        return;
      }
      if (other.Name.Length != 0) {
        Name = other.Name;
      }
      inputs_.Add(other.inputs_);
      if (other.options_ != null) {
        if (options_ == null) {
          Options = new global::Asgt.V2Alpha.Suggester.SuggestOptions();
        }
        Options.MergeFrom(other.Options);
      }
      tags_.Add(other.tags_);
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
          case 26: {
            inputs_.AddEntriesFrom(input, _repeated_inputs_codec);
            break;
          }
          case 34: {
            if (options_ == null) {
              Options = new global::Asgt.V2Alpha.Suggester.SuggestOptions();
            }
            input.ReadMessage(Options);
            break;
          }
          case 42: {
            tags_.AddEntriesFrom(input, _repeated_tags_codec);
            break;
          }
        }
      }
    }

  }

  public sealed partial class BatchSuggestResponse : pb::IMessage<BatchSuggestResponse> {
    private static readonly pb::MessageParser<BatchSuggestResponse> _parser = new pb::MessageParser<BatchSuggestResponse>(() => new BatchSuggestResponse());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<BatchSuggestResponse> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Asgt.V2Alpha.Suggester.SuggesterReflection.Descriptor.MessageTypes[4]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public BatchSuggestResponse() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public BatchSuggestResponse(BatchSuggestResponse other) : this() {
      predictions_ = other.predictions_.Clone();
      model_ = other.model_ != null ? other.model_.Clone() : null;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public BatchSuggestResponse Clone() {
      return new BatchSuggestResponse(this);
    }

    /// <summary>Field number for the "predictions" field.</summary>
    public const int PredictionsFieldNumber = 1;
    private static readonly pb::FieldCodec<global::Asgt.Type.Prediction> _repeated_predictions_codec
        = pb::FieldCodec.ForMessage(10, global::Asgt.Type.Prediction.Parser);
    private readonly pbc::RepeatedField<global::Asgt.Type.Prediction> predictions_ = new pbc::RepeatedField<global::Asgt.Type.Prediction>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<global::Asgt.Type.Prediction> Predictions {
      get { return predictions_; }
    }

    /// <summary>Field number for the "model" field.</summary>
    public const int ModelFieldNumber = 2;
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
      return Equals(other as BatchSuggestResponse);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(BatchSuggestResponse other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if(!predictions_.Equals(other.predictions_)) return false;
      if (!object.Equals(Model, other.Model)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      hash ^= predictions_.GetHashCode();
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
      predictions_.WriteTo(output, _repeated_predictions_codec);
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
      size += predictions_.CalculateSize(_repeated_predictions_codec);
      if (model_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Model);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(BatchSuggestResponse other) {
      if (other == null) {
        return;
      }
      predictions_.Add(other.predictions_);
      if (other.model_ != null) {
        if (model_ == null) {
          Model = new global::Asgt.Type.Model();
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
            predictions_.AddEntriesFrom(input, _repeated_predictions_codec);
            break;
          }
          case 18: {
            if (model_ == null) {
              Model = new global::Asgt.Type.Model();
            }
            input.ReadMessage(Model);
            break;
          }
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code
