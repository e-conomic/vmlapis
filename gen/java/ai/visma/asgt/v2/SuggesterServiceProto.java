// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: asgt/v2/suggester_service.proto
// Protobuf Java Version: 4.29.3

package ai.visma.asgt.v2;

public final class SuggesterServiceProto {
  private SuggesterServiceProto() {}
  static {
    com.google.protobuf.RuntimeVersion.validateProtobufGencodeVersion(
      com.google.protobuf.RuntimeVersion.RuntimeDomain.PUBLIC,
      /* major= */ 4,
      /* minor= */ 29,
      /* patch= */ 3,
      /* suffix= */ "",
      SuggesterServiceProto.class.getName());
  }
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_asgt_v2_SuggestOptions_descriptor;
  static final 
    com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internal_static_asgt_v2_SuggestOptions_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_asgt_v2_SuggestRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internal_static_asgt_v2_SuggestRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_asgt_v2_SuggestResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internal_static_asgt_v2_SuggestResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_asgt_v2_BatchSuggestRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internal_static_asgt_v2_BatchSuggestRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_asgt_v2_BatchSuggestResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internal_static_asgt_v2_BatchSuggestResponse_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\037asgt/v2/suggester_service.proto\022\007asgt." +
      "v2\032\025asgt/type/model.proto\032\032asgt/type/pre" +
      "diction.proto\032\027asgt/v2/type/data.proto\032\034" +
      "google/api/annotations.proto\032.protoc-gen" +
      "-openapiv2/options/annotations.proto\032\027va" +
      "lidate/validate.proto\"\236\001\n\016SuggestOptions" +
      "\022#\n\rsuggest_limit\030\001 \001(\005R\014suggestLimit\022L\n" +
      "\016min_confidence\030\002 \001(\0162\033.asgt.type.Confid" +
      "ence.LevelB\010\372B\005\202\001\002\020\001R\rminConfidence:\031\222A\026" +
      "2\024{\"suggest_limit\": 3}\"\272\001\n\016SuggestReques" +
      "t\022K\n\014dataset_name\030\001 \001(\tB(\372B%r#(\200\0022\036^[A-Z" +
      "a-z0-9.][A-Za-z0-9_.>-]*$R\013datasetName\022(" +
      "\n\005input\030\002 \001(\0132\022.asgt.v2.type.DataR\005input" +
      "\0221\n\007options\030\003 \001(\0132\027.asgt.v2.SuggestOptio" +
      "nsR\007options\"p\n\017SuggestResponse\0225\n\npredic" +
      "tion\030\001 \001(\0132\025.asgt.type.PredictionR\npredi" +
      "ction\022&\n\005model\030\002 \001(\0132\020.asgt.type.ModelR\005" +
      "model\"\301\001\n\023BatchSuggestRequest\022K\n\014dataset" +
      "_name\030\001 \001(\tB(\372B%r#(\200\0022\036^[A-Za-z0-9.][A-Z" +
      "a-z0-9_.>-]*$R\013datasetName\022*\n\006inputs\030\002 \003" +
      "(\0132\022.asgt.v2.type.DataR\006inputs\0221\n\007option" +
      "s\030\003 \001(\0132\027.asgt.v2.SuggestOptionsR\007option" +
      "s\"w\n\024BatchSuggestResponse\0227\n\013predictions" +
      "\030\001 \003(\0132\025.asgt.type.PredictionR\013predictio" +
      "ns\022&\n\005model\030\002 \001(\0132\020.asgt.type.ModelR\005mod" +
      "el2\273\003\n\020SuggesterService\022l\n\007Suggest\022\027.asg" +
      "t.v2.SuggestRequest\032\030.asgt.v2.SuggestRes" +
      "ponse\".\202\323\344\223\002(\"#/v2/datasets/{dataset_nam" +
      "e}:suggest:\001*\022\200\001\n\014BatchSuggest\022\034.asgt.v2" +
      ".BatchSuggestRequest\032\035.asgt.v2.BatchSugg" +
      "estResponse\"3\202\323\344\223\002-\"(/v2/datasets/{datas" +
      "et_name}:batchSuggest:\001*\022\213\001\n\021ModelBatchS" +
      "uggest\022\034.asgt.v2.BatchSuggestRequest\032\035.a" +
      "sgt.v2.BatchSuggestResponse\"9\202\323\344\223\0023\"./v2" +
      "/datasets/{dataset_name}/model:batchSugg" +
      "est:\001*\032(\222A%\022#Make predictions against a " +
      "dataset.B\320\001\n\020ai.visma.asgt.v2B\025Suggester" +
      "ServiceProtoP\001Z+github.com/e-conomic/vml" +
      "apis/gen/go/asgt/v2\242\002\003AXX\252\002\007Asgt.V2\312\002\007As" +
      "gt\\V2\342\002\023Asgt\\V2\\GPBMetadata\352\002\010Asgt::V2\222A" +
      ":\022\021\n\013AutoSuggest2\002v2*\001\0022\020application/jso" +
      "n:\020application/jsonb\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          ai.visma.asgt.type.ModelProto.getDescriptor(),
          ai.visma.asgt.type.PredictionProto.getDescriptor(),
          ai.visma.asgt.v2.type.DataProto.getDescriptor(),
          com.google.api.AnnotationsProto.getDescriptor(),
          ai.visma.grpc.gateway.protoc_gen_openapiv2.options.AnnotationsProto.getDescriptor(),
          ai.visma.validate.ValidateProto.getDescriptor(),
        });
    internal_static_asgt_v2_SuggestOptions_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_asgt_v2_SuggestOptions_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessage.FieldAccessorTable(
        internal_static_asgt_v2_SuggestOptions_descriptor,
        new java.lang.String[] { "SuggestLimit", "MinConfidence", });
    internal_static_asgt_v2_SuggestRequest_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_asgt_v2_SuggestRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessage.FieldAccessorTable(
        internal_static_asgt_v2_SuggestRequest_descriptor,
        new java.lang.String[] { "DatasetName", "Input", "Options", });
    internal_static_asgt_v2_SuggestResponse_descriptor =
      getDescriptor().getMessageTypes().get(2);
    internal_static_asgt_v2_SuggestResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessage.FieldAccessorTable(
        internal_static_asgt_v2_SuggestResponse_descriptor,
        new java.lang.String[] { "Prediction", "Model", });
    internal_static_asgt_v2_BatchSuggestRequest_descriptor =
      getDescriptor().getMessageTypes().get(3);
    internal_static_asgt_v2_BatchSuggestRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessage.FieldAccessorTable(
        internal_static_asgt_v2_BatchSuggestRequest_descriptor,
        new java.lang.String[] { "DatasetName", "Inputs", "Options", });
    internal_static_asgt_v2_BatchSuggestResponse_descriptor =
      getDescriptor().getMessageTypes().get(4);
    internal_static_asgt_v2_BatchSuggestResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessage.FieldAccessorTable(
        internal_static_asgt_v2_BatchSuggestResponse_descriptor,
        new java.lang.String[] { "Predictions", "Model", });
    descriptor.resolveAllFeaturesImmutable();
    ai.visma.asgt.type.ModelProto.getDescriptor();
    ai.visma.asgt.type.PredictionProto.getDescriptor();
    ai.visma.asgt.v2.type.DataProto.getDescriptor();
    com.google.api.AnnotationsProto.getDescriptor();
    ai.visma.grpc.gateway.protoc_gen_openapiv2.options.AnnotationsProto.getDescriptor();
    ai.visma.validate.ValidateProto.getDescriptor();
    com.google.protobuf.ExtensionRegistry registry =
        com.google.protobuf.ExtensionRegistry.newInstance();
    registry.add(com.google.api.AnnotationsProto.http);
    registry.add(ai.visma.grpc.gateway.protoc_gen_openapiv2.options.AnnotationsProto.openapiv2Schema);
    registry.add(ai.visma.grpc.gateway.protoc_gen_openapiv2.options.AnnotationsProto.openapiv2Swagger);
    registry.add(ai.visma.grpc.gateway.protoc_gen_openapiv2.options.AnnotationsProto.openapiv2Tag);
    registry.add(ai.visma.validate.ValidateProto.rules);
    com.google.protobuf.Descriptors.FileDescriptor
        .internalUpdateFileDescriptor(descriptor, registry);
  }

  // @@protoc_insertion_point(outer_class_scope)
}
