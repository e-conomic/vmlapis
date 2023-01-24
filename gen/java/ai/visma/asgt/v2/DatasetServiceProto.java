// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: asgt/v2/dataset_service.proto

package ai.visma.asgt.v2;

public final class DatasetServiceProto {
  private DatasetServiceProto() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_asgt_v2_GetDatasetRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_asgt_v2_GetDatasetRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_asgt_v2_CreateDatasetRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_asgt_v2_CreateDatasetRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_asgt_v2_CreateOrUpdateDatasetRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_asgt_v2_CreateOrUpdateDatasetRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_asgt_v2_DeleteDatasetRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_asgt_v2_DeleteDatasetRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_asgt_v2_DeleteTagRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_asgt_v2_DeleteTagRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_asgt_v2_CreateExampleRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_asgt_v2_CreateExampleRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_asgt_v2_CreateOrUpdateExampleRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_asgt_v2_CreateOrUpdateExampleRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_asgt_v2_BatchCreateExampleRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_asgt_v2_BatchCreateExampleRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_asgt_v2_TruncateDatasetRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_asgt_v2_TruncateDatasetRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_asgt_v2_TrainingRequestOptions_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_asgt_v2_TrainingRequestOptions_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_asgt_v2_GetDatasetTrainingsRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_asgt_v2_GetDatasetTrainingsRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_asgt_v2_GetTrainingsRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_asgt_v2_GetTrainingsRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_asgt_v2_TrainingsResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_asgt_v2_TrainingsResponse_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\035asgt/v2/dataset_service.proto\022\007asgt.v2" +
      "\032\027asgt/type/dataset.proto\032\032asgt/v2/type/" +
      "example.proto\032\033asgt/v2/type/training.pro" +
      "to\032\034google/api/annotations.proto\032\033google" +
      "/protobuf/empty.proto\032.protoc-gen-openap" +
      "iv2/options/annotations.proto\032\027validate/" +
      "validate.proto\"`\n\021GetDatasetRequest\022K\n\014d" +
      "ataset_name\030\001 \001(\tB(\372B%r#(\200\0022\036^[A-Za-z0-9" +
      ".][A-Za-z0-9_.>-]*$R\013datasetName\"\235\001\n\024Cre" +
      "ateDatasetRequest\022K\n\014dataset_name\030\001 \001(\tB" +
      "(\372B%r#(\200\0022\036^[A-Za-z0-9.][A-Za-z0-9_.>-]*" +
      "$R\013datasetName\0228\n\004tags\030\002 \003(\tB$\372B!\222\001\036\030\001\"\032" +
      "r\030(@2\024^[A-Za-z0-9\\s_.>-]*$R\004tags\"k\n\034Crea" +
      "teOrUpdateDatasetRequest\022K\n\014dataset_name" +
      "\030\001 \001(\tB(\372B%r#(\200\0022\036^[A-Za-z0-9.][A-Za-z0-" +
      "9_.>-]*$R\013datasetName\"c\n\024DeleteDatasetRe" +
      "quest\022K\n\014dataset_name\030\001 \001(\tB(\372B%r#(\200\0022\036^" +
      "[A-Za-z0-9.][A-Za-z0-9_.>-]*$R\013datasetNa" +
      "me\"W\n\020DeleteTagRequest\022C\n\010tag_name\030\001 \001(\t" +
      "B(\372B%r#(\200\0022\036^[A-Za-z0-9.][A-Za-z0-9_.>-]" +
      "*$R\007tagName\"\224\001\n\024CreateExampleRequest\022K\n\014" +
      "dataset_name\030\001 \001(\tB(\372B%r#(\200\0022\036^[A-Za-z0-" +
      "9.][A-Za-z0-9_.>-]*$R\013datasetName\022/\n\007exa" +
      "mple\030\002 \001(\0132\025.asgt.v2.type.ExampleR\007examp" +
      "le\"\234\001\n\034CreateOrUpdateExampleRequest\022K\n\014d" +
      "ataset_name\030\001 \001(\tB(\372B%r#(\200\0022\036^[A-Za-z0-9" +
      ".][A-Za-z0-9_.>-]*$R\013datasetName\022/\n\007exam" +
      "ple\030\002 \001(\0132\025.asgt.v2.type.ExampleR\007exampl" +
      "e\"\233\001\n\031BatchCreateExampleRequest\022K\n\014datas" +
      "et_name\030\001 \001(\tB(\372B%r#(\200\0022\036^[A-Za-z0-9.][A" +
      "-Za-z0-9_.>-]*$R\013datasetName\0221\n\010examples" +
      "\030\002 \003(\0132\025.asgt.v2.type.ExampleR\010examples\"" +
      "e\n\026TruncateDatasetRequest\022K\n\014dataset_nam" +
      "e\030\001 \001(\tB(\372B%r#(\200\0022\036^[A-Za-z0-9.][A-Za-z0" +
      "-9_.>-]*$R\013datasetName\"9\n\026TrainingReques" +
      "tOptions\022\037\n\005limit\030\001 \001(\003B\t\372B\006\"\004\030d \000R\005limi" +
      "t\"\244\001\n\032GetDatasetTrainingsRequest\022K\n\014data" +
      "set_name\030\001 \001(\tB(\372B%r#(\200\0022\036^[A-Za-z0-9.][" +
      "A-Za-z0-9_.>-]*$R\013datasetName\0229\n\007options" +
      "\030\002 \001(\0132\037.asgt.v2.TrainingRequestOptionsR" +
      "\007options\"P\n\023GetTrainingsRequest\0229\n\007optio" +
      "ns\030\001 \001(\0132\037.asgt.v2.TrainingRequestOption" +
      "sR\007options\"I\n\021TrainingsResponse\0224\n\ttrain" +
      "ings\030\001 \003(\0132\026.asgt.v2.type.TrainingR\ttrai" +
      "nings2\343\n\n\016DatasetService\022a\n\nGetDataset\022\032" +
      ".asgt.v2.GetDatasetRequest\032\022.asgt.type.D" +
      "ataset\"#\202\323\344\223\002\035\022\033/v2/datasets/{dataset_na" +
      "me}\022_\n\rCreateDataset\022\035.asgt.v2.CreateDat" +
      "asetRequest\032\026.google.protobuf.Empty\"\027\202\323\344" +
      "\223\002\021:\001*\"\014/v2/datasets\022{\n\025CreateOrUpdateDa" +
      "taset\022%.asgt.v2.CreateOrUpdateDatasetReq" +
      "uest\032\026.google.protobuf.Empty\"#\202\323\344\223\002\035\032\033/v" +
      "2/datasets/{dataset_name}\022g\n\rDeleteDatas" +
      "et\022\035.asgt.v2.DeleteDatasetRequest\032\022.asgt" +
      ".type.Dataset\"#\202\323\344\223\002\035*\033/v2/datasets/{dat" +
      "aset_name}\022[\n\tDeleteTag\022\031.asgt.v2.Delete" +
      "TagRequest\032\026.google.protobuf.Empty\"\033\202\323\344\223" +
      "\002\025*\023/v2/tags/{tag_name}\022w\n\rCreateExample" +
      "\022\035.asgt.v2.CreateExampleRequest\032\026.google" +
      ".protobuf.Empty\"/\202\323\344\223\002):\001*\"$/v2/datasets" +
      "/{dataset_name}/examples\022\224\001\n\025CreateOrUpd" +
      "ateExample\022%.asgt.v2.CreateOrUpdateExamp" +
      "leRequest\032\026.google.protobuf.Empty\"<\202\323\344\223\002" +
      "6:\001*\0321/v2/datasets/{dataset_name}/exampl" +
      "es/{example.id}\022\215\001\n\022BatchCreateExample\022\"" +
      ".asgt.v2.BatchCreateExampleRequest\032\026.goo" +
      "gle.protobuf.Empty\";\202\323\344\223\0025:\001*\"0/v2/datas" +
      "ets/{dataset_name}/examples:batchCreate\022" +
      "x\n\017TruncateDataset\022\037.asgt.v2.TruncateDat" +
      "asetRequest\032\026.google.protobuf.Empty\",\202\323\344" +
      "\223\002&*$/v2/datasets/{dataset_name}/example" +
      "s\022\205\001\n\023GetDatasetTrainings\022#.asgt.v2.GetD" +
      "atasetTrainingsRequest\032\032.asgt.v2.Trainin" +
      "gsResponse\"-\202\323\344\223\002\'\022%/v2/datasets/{datase" +
      "t_name}/trainings\022_\n\014GetTrainings\022\034.asgt" +
      ".v2.GetTrainingsRequest\032\032.asgt.v2.Traini" +
      "ngsResponse\"\025\202\323\344\223\002\017\022\r/v2/trainings\032G\222AD\022" +
      "BManage datasets and examples used for t" +
      "raining AutoSuggest models.B\221\001\n\020ai.visma" +
      ".asgt.v2B\023DatasetServiceProtoP\001Z+github." +
      "com/e-conomic/vmlapis/gen/go/asgt/v2\242\002\003A" +
      "XX\252\002\007Asgt.V2\312\002\007Asgt\\V2\342\002\023Asgt\\V2\\GPBMeta" +
      "data\352\002\010Asgt::V2b\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          ai.visma.asgt.type.DatasetProto.getDescriptor(),
          ai.visma.asgt.v2.type.ExampleProto.getDescriptor(),
          ai.visma.asgt.v2.type.TrainingProto.getDescriptor(),
          com.google.api.AnnotationsProto.getDescriptor(),
          com.google.protobuf.EmptyProto.getDescriptor(),
          ai.visma.grpc.gateway.protoc_gen_openapiv2.options.AnnotationsProto.getDescriptor(),
          ai.visma.validate.ValidateProto.getDescriptor(),
        });
    internal_static_asgt_v2_GetDatasetRequest_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_asgt_v2_GetDatasetRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_asgt_v2_GetDatasetRequest_descriptor,
        new java.lang.String[] { "DatasetName", });
    internal_static_asgt_v2_CreateDatasetRequest_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_asgt_v2_CreateDatasetRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_asgt_v2_CreateDatasetRequest_descriptor,
        new java.lang.String[] { "DatasetName", "Tags", });
    internal_static_asgt_v2_CreateOrUpdateDatasetRequest_descriptor =
      getDescriptor().getMessageTypes().get(2);
    internal_static_asgt_v2_CreateOrUpdateDatasetRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_asgt_v2_CreateOrUpdateDatasetRequest_descriptor,
        new java.lang.String[] { "DatasetName", });
    internal_static_asgt_v2_DeleteDatasetRequest_descriptor =
      getDescriptor().getMessageTypes().get(3);
    internal_static_asgt_v2_DeleteDatasetRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_asgt_v2_DeleteDatasetRequest_descriptor,
        new java.lang.String[] { "DatasetName", });
    internal_static_asgt_v2_DeleteTagRequest_descriptor =
      getDescriptor().getMessageTypes().get(4);
    internal_static_asgt_v2_DeleteTagRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_asgt_v2_DeleteTagRequest_descriptor,
        new java.lang.String[] { "TagName", });
    internal_static_asgt_v2_CreateExampleRequest_descriptor =
      getDescriptor().getMessageTypes().get(5);
    internal_static_asgt_v2_CreateExampleRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_asgt_v2_CreateExampleRequest_descriptor,
        new java.lang.String[] { "DatasetName", "Example", });
    internal_static_asgt_v2_CreateOrUpdateExampleRequest_descriptor =
      getDescriptor().getMessageTypes().get(6);
    internal_static_asgt_v2_CreateOrUpdateExampleRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_asgt_v2_CreateOrUpdateExampleRequest_descriptor,
        new java.lang.String[] { "DatasetName", "Example", });
    internal_static_asgt_v2_BatchCreateExampleRequest_descriptor =
      getDescriptor().getMessageTypes().get(7);
    internal_static_asgt_v2_BatchCreateExampleRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_asgt_v2_BatchCreateExampleRequest_descriptor,
        new java.lang.String[] { "DatasetName", "Examples", });
    internal_static_asgt_v2_TruncateDatasetRequest_descriptor =
      getDescriptor().getMessageTypes().get(8);
    internal_static_asgt_v2_TruncateDatasetRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_asgt_v2_TruncateDatasetRequest_descriptor,
        new java.lang.String[] { "DatasetName", });
    internal_static_asgt_v2_TrainingRequestOptions_descriptor =
      getDescriptor().getMessageTypes().get(9);
    internal_static_asgt_v2_TrainingRequestOptions_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_asgt_v2_TrainingRequestOptions_descriptor,
        new java.lang.String[] { "Limit", });
    internal_static_asgt_v2_GetDatasetTrainingsRequest_descriptor =
      getDescriptor().getMessageTypes().get(10);
    internal_static_asgt_v2_GetDatasetTrainingsRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_asgt_v2_GetDatasetTrainingsRequest_descriptor,
        new java.lang.String[] { "DatasetName", "Options", });
    internal_static_asgt_v2_GetTrainingsRequest_descriptor =
      getDescriptor().getMessageTypes().get(11);
    internal_static_asgt_v2_GetTrainingsRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_asgt_v2_GetTrainingsRequest_descriptor,
        new java.lang.String[] { "Options", });
    internal_static_asgt_v2_TrainingsResponse_descriptor =
      getDescriptor().getMessageTypes().get(12);
    internal_static_asgt_v2_TrainingsResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_asgt_v2_TrainingsResponse_descriptor,
        new java.lang.String[] { "Trainings", });
    com.google.protobuf.ExtensionRegistry registry =
        com.google.protobuf.ExtensionRegistry.newInstance();
    registry.add(com.google.api.AnnotationsProto.http);
    registry.add(ai.visma.grpc.gateway.protoc_gen_openapiv2.options.AnnotationsProto.openapiv2Tag);
    registry.add(ai.visma.validate.ValidateProto.rules);
    com.google.protobuf.Descriptors.FileDescriptor
        .internalUpdateFileDescriptor(descriptor, registry);
    ai.visma.asgt.type.DatasetProto.getDescriptor();
    ai.visma.asgt.v2.type.ExampleProto.getDescriptor();
    ai.visma.asgt.v2.type.TrainingProto.getDescriptor();
    com.google.api.AnnotationsProto.getDescriptor();
    com.google.protobuf.EmptyProto.getDescriptor();
    ai.visma.grpc.gateway.protoc_gen_openapiv2.options.AnnotationsProto.getDescriptor();
    ai.visma.validate.ValidateProto.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}