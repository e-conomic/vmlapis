// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: asgt/type/target_metrics.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021, 8981
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Asgt.Type {

  /// <summary>Holder for reflection information generated from asgt/type/target_metrics.proto</summary>
  public static partial class TargetMetricsReflection {

    #region Descriptor
    /// <summary>File descriptor for asgt/type/target_metrics.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static TargetMetricsReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "Ch5hc2d0L3R5cGUvdGFyZ2V0X21ldHJpY3MucHJvdG8SCWFzZ3QudHlwZSK/",
            "AwoNVGFyZ2V0TWV0cmljcxIWCgZ0YXJnZXQYASABKAlSBnRhcmdldBI5Cgdt",
            "ZXRyaWNzGAIgAygLMh8uYXNndC50eXBlLlRhcmdldE1ldHJpY3MuTWV0cmlj",
            "UgdtZXRyaWNzEhAKA21jYxgDIAMoAlIDbWNjEhoKCGFjY3VyYWN5GAQgAygC",
            "UghhY2N1cmFjeRIrChFiYWxhbmNlZF9hY2N1cmFjeRgFIAMoAlIQYmFsYW5j",
            "ZWRBY2N1cmFjeRr/AQoGTWV0cmljEhwKCXByZWNpc2lvbhgBIAEoAlIJcHJl",
            "Y2lzaW9uEh4KCmNvbmZpZGVuY2UYAiABKAJSCmNvbmZpZGVuY2USHwoLYW5z",
            "d2VyX3JhdGUYAyABKAJSCmFuc3dlclJhdGUSIwoNdHJ1ZV9wb3NpdGl2ZRgE",
            "IAEoBVIMdHJ1ZVBvc2l0aXZlEiMKDXRydWVfbmVnYXRpdmUYBSABKAVSDHRy",
            "dWVOZWdhdGl2ZRIlCg5mYWxzZV9wb3NpdGl2ZRgGIAEoBVINZmFsc2VQb3Np",
            "dGl2ZRIlCg5mYWxzZV9uZWdhdGl2ZRgHIAEoBVINZmFsc2VOZWdhdGl2ZUKl",
            "AQoSYWkudmlzbWEuYXNndC50eXBlQhJUYXJnZXRNZXRyaWNzUHJvdG9QAVo2",
            "Z2l0aHViLmNvbS9lLWNvbm9taWMvdm1sYXBpcy9nZW4vZ28vYXNndC90eXBl",
            "O2FzZ3R0eXBlogIDQVRYqgIJQXNndC5UeXBlygIJQXNndFxUeXBl4gIVQXNn",
            "dFxUeXBlXEdQQk1ldGFkYXRh6gIKQXNndDo6VHlwZWIGcHJvdG8z"));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.Type.TargetMetrics), global::Asgt.Type.TargetMetrics.Parser, new[]{ "Target", "Metrics", "Mcc", "Accuracy", "BalancedAccuracy" }, null, null, null, new pbr::GeneratedClrTypeInfo[] { new pbr::GeneratedClrTypeInfo(typeof(global::Asgt.Type.TargetMetrics.Types.Metric), global::Asgt.Type.TargetMetrics.Types.Metric.Parser, new[]{ "Precision", "Confidence", "AnswerRate", "TruePositive", "TrueNegative", "FalsePositive", "FalseNegative" }, null, null, null, null)})
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class TargetMetrics : pb::IMessage<TargetMetrics>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<TargetMetrics> _parser = new pb::MessageParser<TargetMetrics>(() => new TargetMetrics());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pb::MessageParser<TargetMetrics> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Asgt.Type.TargetMetricsReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public TargetMetrics() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public TargetMetrics(TargetMetrics other) : this() {
      target_ = other.target_;
      metrics_ = other.metrics_.Clone();
      mcc_ = other.mcc_.Clone();
      accuracy_ = other.accuracy_.Clone();
      balancedAccuracy_ = other.balancedAccuracy_.Clone();
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public TargetMetrics Clone() {
      return new TargetMetrics(this);
    }

    /// <summary>Field number for the "target" field.</summary>
    public const int TargetFieldNumber = 1;
    private string target_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public string Target {
      get { return target_; }
      set {
        target_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "metrics" field.</summary>
    public const int MetricsFieldNumber = 2;
    private static readonly pb::FieldCodec<global::Asgt.Type.TargetMetrics.Types.Metric> _repeated_metrics_codec
        = pb::FieldCodec.ForMessage(18, global::Asgt.Type.TargetMetrics.Types.Metric.Parser);
    private readonly pbc::RepeatedField<global::Asgt.Type.TargetMetrics.Types.Metric> metrics_ = new pbc::RepeatedField<global::Asgt.Type.TargetMetrics.Types.Metric>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public pbc::RepeatedField<global::Asgt.Type.TargetMetrics.Types.Metric> Metrics {
      get { return metrics_; }
    }

    /// <summary>Field number for the "mcc" field.</summary>
    public const int MccFieldNumber = 3;
    private static readonly pb::FieldCodec<float> _repeated_mcc_codec
        = pb::FieldCodec.ForFloat(26);
    private readonly pbc::RepeatedField<float> mcc_ = new pbc::RepeatedField<float>();
    /// <summary>
    /// Matthews correlation coefficient
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public pbc::RepeatedField<float> Mcc {
      get { return mcc_; }
    }

    /// <summary>Field number for the "accuracy" field.</summary>
    public const int AccuracyFieldNumber = 4;
    private static readonly pb::FieldCodec<float> _repeated_accuracy_codec
        = pb::FieldCodec.ForFloat(34);
    private readonly pbc::RepeatedField<float> accuracy_ = new pbc::RepeatedField<float>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public pbc::RepeatedField<float> Accuracy {
      get { return accuracy_; }
    }

    /// <summary>Field number for the "balanced_accuracy" field.</summary>
    public const int BalancedAccuracyFieldNumber = 5;
    private static readonly pb::FieldCodec<float> _repeated_balancedAccuracy_codec
        = pb::FieldCodec.ForFloat(42);
    private readonly pbc::RepeatedField<float> balancedAccuracy_ = new pbc::RepeatedField<float>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public pbc::RepeatedField<float> BalancedAccuracy {
      get { return balancedAccuracy_; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override bool Equals(object other) {
      return Equals(other as TargetMetrics);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public bool Equals(TargetMetrics other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Target != other.Target) return false;
      if(!metrics_.Equals(other.metrics_)) return false;
      if(!mcc_.Equals(other.mcc_)) return false;
      if(!accuracy_.Equals(other.accuracy_)) return false;
      if(!balancedAccuracy_.Equals(other.balancedAccuracy_)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override int GetHashCode() {
      int hash = 1;
      if (Target.Length != 0) hash ^= Target.GetHashCode();
      hash ^= metrics_.GetHashCode();
      hash ^= mcc_.GetHashCode();
      hash ^= accuracy_.GetHashCode();
      hash ^= balancedAccuracy_.GetHashCode();
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
      if (Target.Length != 0) {
        output.WriteRawTag(10);
        output.WriteString(Target);
      }
      metrics_.WriteTo(output, _repeated_metrics_codec);
      mcc_.WriteTo(output, _repeated_mcc_codec);
      accuracy_.WriteTo(output, _repeated_accuracy_codec);
      balancedAccuracy_.WriteTo(output, _repeated_balancedAccuracy_codec);
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      if (Target.Length != 0) {
        output.WriteRawTag(10);
        output.WriteString(Target);
      }
      metrics_.WriteTo(ref output, _repeated_metrics_codec);
      mcc_.WriteTo(ref output, _repeated_mcc_codec);
      accuracy_.WriteTo(ref output, _repeated_accuracy_codec);
      balancedAccuracy_.WriteTo(ref output, _repeated_balancedAccuracy_codec);
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int CalculateSize() {
      int size = 0;
      if (Target.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Target);
      }
      size += metrics_.CalculateSize(_repeated_metrics_codec);
      size += mcc_.CalculateSize(_repeated_mcc_codec);
      size += accuracy_.CalculateSize(_repeated_accuracy_codec);
      size += balancedAccuracy_.CalculateSize(_repeated_balancedAccuracy_codec);
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(TargetMetrics other) {
      if (other == null) {
        return;
      }
      if (other.Target.Length != 0) {
        Target = other.Target;
      }
      metrics_.Add(other.metrics_);
      mcc_.Add(other.mcc_);
      accuracy_.Add(other.accuracy_);
      balancedAccuracy_.Add(other.balancedAccuracy_);
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
            Target = input.ReadString();
            break;
          }
          case 18: {
            metrics_.AddEntriesFrom(input, _repeated_metrics_codec);
            break;
          }
          case 26:
          case 29: {
            mcc_.AddEntriesFrom(input, _repeated_mcc_codec);
            break;
          }
          case 34:
          case 37: {
            accuracy_.AddEntriesFrom(input, _repeated_accuracy_codec);
            break;
          }
          case 42:
          case 45: {
            balancedAccuracy_.AddEntriesFrom(input, _repeated_balancedAccuracy_codec);
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
            Target = input.ReadString();
            break;
          }
          case 18: {
            metrics_.AddEntriesFrom(ref input, _repeated_metrics_codec);
            break;
          }
          case 26:
          case 29: {
            mcc_.AddEntriesFrom(ref input, _repeated_mcc_codec);
            break;
          }
          case 34:
          case 37: {
            accuracy_.AddEntriesFrom(ref input, _repeated_accuracy_codec);
            break;
          }
          case 42:
          case 45: {
            balancedAccuracy_.AddEntriesFrom(ref input, _repeated_balancedAccuracy_codec);
            break;
          }
        }
      }
    }
    #endif

    #region Nested types
    /// <summary>Container for nested types declared in the TargetMetrics message type.</summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static partial class Types {
      public sealed partial class Metric : pb::IMessage<Metric>
      #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
          , pb::IBufferMessage
      #endif
      {
        private static readonly pb::MessageParser<Metric> _parser = new pb::MessageParser<Metric>(() => new Metric());
        private pb::UnknownFieldSet _unknownFields;
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public static pb::MessageParser<Metric> Parser { get { return _parser; } }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public static pbr::MessageDescriptor Descriptor {
          get { return global::Asgt.Type.TargetMetrics.Descriptor.NestedTypes[0]; }
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        pbr::MessageDescriptor pb::IMessage.Descriptor {
          get { return Descriptor; }
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public Metric() {
          OnConstruction();
        }

        partial void OnConstruction();

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public Metric(Metric other) : this() {
          precision_ = other.precision_;
          confidence_ = other.confidence_;
          answerRate_ = other.answerRate_;
          truePositive_ = other.truePositive_;
          trueNegative_ = other.trueNegative_;
          falsePositive_ = other.falsePositive_;
          falseNegative_ = other.falseNegative_;
          _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public Metric Clone() {
          return new Metric(this);
        }

        /// <summary>Field number for the "precision" field.</summary>
        public const int PrecisionFieldNumber = 1;
        private float precision_;
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public float Precision {
          get { return precision_; }
          set {
            precision_ = value;
          }
        }

        /// <summary>Field number for the "confidence" field.</summary>
        public const int ConfidenceFieldNumber = 2;
        private float confidence_;
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public float Confidence {
          get { return confidence_; }
          set {
            confidence_ = value;
          }
        }

        /// <summary>Field number for the "answer_rate" field.</summary>
        public const int AnswerRateFieldNumber = 3;
        private float answerRate_;
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public float AnswerRate {
          get { return answerRate_; }
          set {
            answerRate_ = value;
          }
        }

        /// <summary>Field number for the "true_positive" field.</summary>
        public const int TruePositiveFieldNumber = 4;
        private int truePositive_;
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public int TruePositive {
          get { return truePositive_; }
          set {
            truePositive_ = value;
          }
        }

        /// <summary>Field number for the "true_negative" field.</summary>
        public const int TrueNegativeFieldNumber = 5;
        private int trueNegative_;
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public int TrueNegative {
          get { return trueNegative_; }
          set {
            trueNegative_ = value;
          }
        }

        /// <summary>Field number for the "false_positive" field.</summary>
        public const int FalsePositiveFieldNumber = 6;
        private int falsePositive_;
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public int FalsePositive {
          get { return falsePositive_; }
          set {
            falsePositive_ = value;
          }
        }

        /// <summary>Field number for the "false_negative" field.</summary>
        public const int FalseNegativeFieldNumber = 7;
        private int falseNegative_;
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public int FalseNegative {
          get { return falseNegative_; }
          set {
            falseNegative_ = value;
          }
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public override bool Equals(object other) {
          return Equals(other as Metric);
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public bool Equals(Metric other) {
          if (ReferenceEquals(other, null)) {
            return false;
          }
          if (ReferenceEquals(other, this)) {
            return true;
          }
          if (!pbc::ProtobufEqualityComparers.BitwiseSingleEqualityComparer.Equals(Precision, other.Precision)) return false;
          if (!pbc::ProtobufEqualityComparers.BitwiseSingleEqualityComparer.Equals(Confidence, other.Confidence)) return false;
          if (!pbc::ProtobufEqualityComparers.BitwiseSingleEqualityComparer.Equals(AnswerRate, other.AnswerRate)) return false;
          if (TruePositive != other.TruePositive) return false;
          if (TrueNegative != other.TrueNegative) return false;
          if (FalsePositive != other.FalsePositive) return false;
          if (FalseNegative != other.FalseNegative) return false;
          return Equals(_unknownFields, other._unknownFields);
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public override int GetHashCode() {
          int hash = 1;
          if (Precision != 0F) hash ^= pbc::ProtobufEqualityComparers.BitwiseSingleEqualityComparer.GetHashCode(Precision);
          if (Confidence != 0F) hash ^= pbc::ProtobufEqualityComparers.BitwiseSingleEqualityComparer.GetHashCode(Confidence);
          if (AnswerRate != 0F) hash ^= pbc::ProtobufEqualityComparers.BitwiseSingleEqualityComparer.GetHashCode(AnswerRate);
          if (TruePositive != 0) hash ^= TruePositive.GetHashCode();
          if (TrueNegative != 0) hash ^= TrueNegative.GetHashCode();
          if (FalsePositive != 0) hash ^= FalsePositive.GetHashCode();
          if (FalseNegative != 0) hash ^= FalseNegative.GetHashCode();
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
          if (Precision != 0F) {
            output.WriteRawTag(13);
            output.WriteFloat(Precision);
          }
          if (Confidence != 0F) {
            output.WriteRawTag(21);
            output.WriteFloat(Confidence);
          }
          if (AnswerRate != 0F) {
            output.WriteRawTag(29);
            output.WriteFloat(AnswerRate);
          }
          if (TruePositive != 0) {
            output.WriteRawTag(32);
            output.WriteInt32(TruePositive);
          }
          if (TrueNegative != 0) {
            output.WriteRawTag(40);
            output.WriteInt32(TrueNegative);
          }
          if (FalsePositive != 0) {
            output.WriteRawTag(48);
            output.WriteInt32(FalsePositive);
          }
          if (FalseNegative != 0) {
            output.WriteRawTag(56);
            output.WriteInt32(FalseNegative);
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
          if (Precision != 0F) {
            output.WriteRawTag(13);
            output.WriteFloat(Precision);
          }
          if (Confidence != 0F) {
            output.WriteRawTag(21);
            output.WriteFloat(Confidence);
          }
          if (AnswerRate != 0F) {
            output.WriteRawTag(29);
            output.WriteFloat(AnswerRate);
          }
          if (TruePositive != 0) {
            output.WriteRawTag(32);
            output.WriteInt32(TruePositive);
          }
          if (TrueNegative != 0) {
            output.WriteRawTag(40);
            output.WriteInt32(TrueNegative);
          }
          if (FalsePositive != 0) {
            output.WriteRawTag(48);
            output.WriteInt32(FalsePositive);
          }
          if (FalseNegative != 0) {
            output.WriteRawTag(56);
            output.WriteInt32(FalseNegative);
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
          if (Precision != 0F) {
            size += 1 + 4;
          }
          if (Confidence != 0F) {
            size += 1 + 4;
          }
          if (AnswerRate != 0F) {
            size += 1 + 4;
          }
          if (TruePositive != 0) {
            size += 1 + pb::CodedOutputStream.ComputeInt32Size(TruePositive);
          }
          if (TrueNegative != 0) {
            size += 1 + pb::CodedOutputStream.ComputeInt32Size(TrueNegative);
          }
          if (FalsePositive != 0) {
            size += 1 + pb::CodedOutputStream.ComputeInt32Size(FalsePositive);
          }
          if (FalseNegative != 0) {
            size += 1 + pb::CodedOutputStream.ComputeInt32Size(FalseNegative);
          }
          if (_unknownFields != null) {
            size += _unknownFields.CalculateSize();
          }
          return size;
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public void MergeFrom(Metric other) {
          if (other == null) {
            return;
          }
          if (other.Precision != 0F) {
            Precision = other.Precision;
          }
          if (other.Confidence != 0F) {
            Confidence = other.Confidence;
          }
          if (other.AnswerRate != 0F) {
            AnswerRate = other.AnswerRate;
          }
          if (other.TruePositive != 0) {
            TruePositive = other.TruePositive;
          }
          if (other.TrueNegative != 0) {
            TrueNegative = other.TrueNegative;
          }
          if (other.FalsePositive != 0) {
            FalsePositive = other.FalsePositive;
          }
          if (other.FalseNegative != 0) {
            FalseNegative = other.FalseNegative;
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
              case 13: {
                Precision = input.ReadFloat();
                break;
              }
              case 21: {
                Confidence = input.ReadFloat();
                break;
              }
              case 29: {
                AnswerRate = input.ReadFloat();
                break;
              }
              case 32: {
                TruePositive = input.ReadInt32();
                break;
              }
              case 40: {
                TrueNegative = input.ReadInt32();
                break;
              }
              case 48: {
                FalsePositive = input.ReadInt32();
                break;
              }
              case 56: {
                FalseNegative = input.ReadInt32();
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
              case 13: {
                Precision = input.ReadFloat();
                break;
              }
              case 21: {
                Confidence = input.ReadFloat();
                break;
              }
              case 29: {
                AnswerRate = input.ReadFloat();
                break;
              }
              case 32: {
                TruePositive = input.ReadInt32();
                break;
              }
              case 40: {
                TrueNegative = input.ReadInt32();
                break;
              }
              case 48: {
                FalsePositive = input.ReadInt32();
                break;
              }
              case 56: {
                FalseNegative = input.ReadInt32();
                break;
              }
            }
          }
        }
        #endif

      }

    }
    #endregion

  }

  #endregion

}

#endregion Designer generated code
