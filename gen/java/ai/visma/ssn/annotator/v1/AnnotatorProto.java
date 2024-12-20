// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: ssn/annotator/v1/annotator.proto

package ai.visma.ssn.annotator.v1;

public final class AnnotatorProto {
  private AnnotatorProto() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ssn_annotator_v1_Feature_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ssn_annotator_v1_Feature_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ssn_annotator_v1_DocumentAnnotatorRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ssn_annotator_v1_DocumentAnnotatorRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ssn_annotator_v1_DocumentAnnotatorResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ssn_annotator_v1_DocumentAnnotatorResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ssn_annotator_v1_Document_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ssn_annotator_v1_Document_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ssn_annotator_v1_DocumentSource_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ssn_annotator_v1_DocumentSource_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ssn_annotator_v1_DocumentQuestionRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ssn_annotator_v1_DocumentQuestionRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ssn_annotator_v1_DocumentQuestionResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ssn_annotator_v1_DocumentQuestionResponse_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n ssn/annotator/v1/annotator.proto\022\020ssn." +
      "annotator.v1\032\034google/api/annotations.pro" +
      "to\032.protoc-gen-openapiv2/options/annotat" +
      "ions.proto\032\030ssn/type/candidate.proto\032\036ss" +
      "n/type/text_annotation.proto\032\023ssn/type/t" +
      "ier.proto\"\273\t\n\007Feature\0222\n\004type\030\001 \001(\0162\036.ss" +
      "n.annotator.v1.Feature.TypeR\004type\022\037\n\013max" +
      "_results\030\002 \001(\005R\nmaxResults\022A\n\016min_confid" +
      "ence\030\003 \001(\0162\032.ssn.type.Confidence.LevelR\r" +
      "minConfidence\"\227\010\n\004Type\022\013\n\007DEFAULT\020\000\022\023\n\017T" +
      "EXT_ANNOTATION\020\001\022\016\n\nORDER_DATE\020\002\022\024\n\020PAYM" +
      "ENT_DUE_DATE\020\003\022\014\n\010CURRENCY\020\004\022\r\n\tTOTAL_VA" +
      "T\020\005\022\022\n\016TOTAL_INCL_VAT\020\006\022\022\n\016TOTAL_EXCL_VA" +
      "T\020\007\022\031\n\025SUPPLIER_CORPORATE_ID\020\010\022\031\n\025SUPPLI" +
      "ER_COUNTRY_CODE\020\t\022\021\n\rDOCUMENT_TYPE\020\n\022\022\n\016" +
      "PAYMENT_METHOD\020\013\022\031\n\025CREDIT_CARD_LAST_FOU" +
      "R\020\014\022\022\n\016INVOICE_NUMBER\020\r\022\024\n\020OCR_LINE_DK_T" +
      "YPE\020\016\022\032\n\026OCR_LINE_DK_PAYMENT_ID\020\017\022\033\n\027OCR" +
      "_LINE_DK_CREDITOR_ID\020\020\022\032\n\026OCR_LINE_SE_PA" +
      "YMENT_ID\020\021\022$\n OCR_LINE_SE_BANKGIRO_CREDI" +
      "TOR_ID\020\022\022$\n OCR_LINE_SE_PLUSGIRO_CREDITO" +
      "R_ID\020\023\022\032\n\026OCR_LINE_NO_PAYMENT_ID\020\024\022\032\n\026OC" +
      "R_LINE_FI_PAYMENT_ID\020\025\022\032\n\026OCR_LINE_NL_PA" +
      "YMENT_ID\020\026\022\032\n\026OCR_LINE_BE_PAYMENT_ID\020\'\022\010" +
      "\n\004TEXT\020\027\022\010\n\004IBAN\020\030\022\t\n\005LINES\020\031\022\013\n\007PREVIEW" +
      "\020\032\022\027\n\023BANK_ACCOUNT_NUMBER\020\033\022\034\n\030BANK_REGI" +
      "STRATION_NUMBER\020\034\022\007\n\003BIC\020\035\022\023\n\017DOCUMENT_N" +
      "UMBER\020\036\022\021\n\rDOCUMENT_DATE\020\037\022\020\n\014ORDER_NUMB" +
      "ER\020 \022\021\n\rSUPPLIER_NAME\020!\022\027\n\023SUPPLIER_VAT_" +
      "NUMBER\020\"\022 \n\034SUPPLIER_ORGANISATION_NUMBER" +
      "\020#\022\024\n\020SUPPLIER_ADDRESS\020$\022\023\n\017CUSTOMER_NUM" +
      "BER\020%\022\031\n\025RECEIVER_ORDER_NUMBER\020&\022\024\n\020RECE" +
      "IVER_ADDRESS\020(\022\031\n\025RECEIVER_COUNTRY_CODE\020" +
      ")\022\021\n\rRECEIVER_NAME\020*\022\027\n\023RECEIVER_VAT_NUM" +
      "BER\020+\022\022\n\016PURCHASE_LINES\020,\022\016\n\nPAGE_TEXTS\020" +
      "-\022\024\n\020VAT_DISTRIBUTION\020.\"\373\001\n\030DocumentAnno" +
      "tatorRequest\0226\n\010document\030\001 \001(\0132\032.ssn.ann" +
      "otator.v1.DocumentR\010document\0225\n\010features" +
      "\030\002 \003(\0132\031.ssn.annotator.v1.FeatureR\010featu" +
      "res\022\022\n\004tags\030\003 \003(\tR\004tags\022\"\n\004tier\030\004 \001(\0162\016." +
      "ssn.type.TierR\004tier\022\032\n\010segments\030\005 \003(\tR\010s" +
      "egments\022\034\n\tquestions\030\006 \003(\tR\tquestions\"\254\030" +
      "\n\031DocumentAnnotatorResponse\0222\n\norder_dat" +
      "e\030\001 \003(\0132\023.ssn.type.CandidateR\torderDate\022" +
      "=\n\020payment_due_date\030\002 \003(\0132\023.ssn.type.Can" +
      "didateR\016paymentDueDate\022/\n\010currency\030\003 \003(\013" +
      "2\023.ssn.type.CandidateR\010currency\0220\n\ttotal" +
      "_vat\030\004 \003(\0132\023.ssn.type.CandidateR\010totalVa" +
      "t\0229\n\016total_incl_vat\030\005 \003(\0132\023.ssn.type.Can" +
      "didateR\014totalInclVat\0229\n\016total_excl_vat\030\006" +
      " \003(\0132\023.ssn.type.CandidateR\014totalExclVat\022" +
      "G\n\025supplier_corporate_id\030\007 \003(\0132\023.ssn.typ" +
      "e.CandidateR\023supplierCorporateId\022G\n\025supp" +
      "lier_country_code\030\010 \003(\0132\023.ssn.type.Candi" +
      "dateR\023supplierCountryCode\0228\n\rdocument_ty" +
      "pe\030\t \003(\0132\023.ssn.type.CandidateR\014documentT" +
      "ype\022:\n\016payment_method\030\n \003(\0132\023.ssn.type.C" +
      "andidateR\rpaymentMethod\022F\n\025credit_card_l" +
      "ast_four\030\013 \003(\0132\023.ssn.type.CandidateR\022cre" +
      "ditCardLastFour\022:\n\016invoice_number\030\014 \003(\0132" +
      "\023.ssn.type.CandidateR\rinvoiceNumber\022A\n\017t" +
      "ext_annotation\030\r \001(\0132\030.ssn.type.TextAnno" +
      "tationR\016textAnnotation\022<\n\020ocr_line_dk_ty" +
      "pe\030\016 \003(\0132\023.ssn.type.CandidateR\rocrLineDk" +
      "Type\022G\n\026ocr_line_dk_payment_id\030\017 \003(\0132\023.s" +
      "sn.type.CandidateR\022ocrLineDkPaymentId\022I\n" +
      "\027ocr_line_dk_creditor_id\030\020 \003(\0132\023.ssn.typ" +
      "e.CandidateR\023ocrLineDkCreditorId\022G\n\026ocr_" +
      "line_se_payment_id\030\021 \003(\0132\023.ssn.type.Cand" +
      "idateR\022ocrLineSePaymentId\022Z\n ocr_line_se" +
      "_bankgiro_creditor_id\030\022 \003(\0132\023.ssn.type.C" +
      "andidateR\033ocrLineSeBankgiroCreditorId\022Z\n" +
      " ocr_line_se_plusgiro_creditor_id\030\023 \003(\0132" +
      "\023.ssn.type.CandidateR\033ocrLineSePlusgiroC" +
      "reditorId\022G\n\026ocr_line_no_payment_id\030\024 \003(" +
      "\0132\023.ssn.type.CandidateR\022ocrLineNoPayment" +
      "Id\022G\n\026ocr_line_fi_payment_id\030\025 \003(\0132\023.ssn" +
      ".type.CandidateR\022ocrLineFiPaymentId\022G\n\026o" +
      "cr_line_nl_payment_id\030\026 \003(\0132\023.ssn.type.C" +
      "andidateR\022ocrLineNlPaymentId\022G\n\026ocr_line" +
      "_be_payment_id\030( \003(\0132\023.ssn.type.Candidat" +
      "eR\022ocrLineBePaymentId\022\022\n\004text\030\027 \001(\tR\004tex" +
      "t\022\037\n\013feedback_id\030\030 \001(\tR\nfeedbackId\022\'\n\004ib" +
      "an\030\031 \003(\0132\023.ssn.type.CandidateR\004iban\022-\n\005l" +
      "ines\030\032 \003(\0132\027.ssn.type.LineCandidateR\005lin" +
      "es\022\030\n\007preview\030\033 \001(\tR\007preview\022C\n\023bank_acc" +
      "ount_number\030\034 \003(\0132\023.ssn.type.CandidateR\021" +
      "bankAccountNumber\022M\n\030bank_registration_n" +
      "umber\030\035 \003(\0132\023.ssn.type.CandidateR\026bankRe" +
      "gistrationNumber\022%\n\003bic\030\036 \003(\0132\023.ssn.type" +
      ".CandidateR\003bic\022<\n\017document_number\030\037 \003(\013" +
      "2\023.ssn.type.CandidateR\016documentNumber\0228\n" +
      "\rdocument_date\030  \003(\0132\023.ssn.type.Candidat" +
      "eR\014documentDate\0226\n\014order_number\030! \003(\0132\023." +
      "ssn.type.CandidateR\013orderNumber\0228\n\rsuppl" +
      "ier_name\030\" \003(\0132\023.ssn.type.CandidateR\014sup" +
      "plierName\022C\n\023supplier_vat_number\030# \003(\0132\023" +
      ".ssn.type.CandidateR\021supplierVatNumber\022U" +
      "\n\034supplier_organisation_number\030$ \003(\0132\023.s" +
      "sn.type.CandidateR\032supplierOrganisationN" +
      "umber\022>\n\020supplier_address\030% \003(\0132\023.ssn.ty" +
      "pe.CandidateR\017supplierAddress\022<\n\017custome" +
      "r_number\030& \003(\0132\023.ssn.type.CandidateR\016cus" +
      "tomerNumber\022G\n\025receiver_order_number\030\' \003" +
      "(\0132\023.ssn.type.CandidateR\023receiverOrderNu" +
      "mber\022>\n\020receiver_address\030) \003(\0132\023.ssn.typ" +
      "e.CandidateR\017receiverAddress\022G\n\025receiver" +
      "_country_code\030* \003(\0132\023.ssn.type.Candidate" +
      "R\023receiverCountryCode\0228\n\rreceiver_name\030+" +
      " \003(\0132\023.ssn.type.CandidateR\014receiverName\022" +
      "C\n\023receiver_vat_number\030, \003(\0132\023.ssn.type." +
      "CandidateR\021receiverVatNumber\022F\n\016purchase" +
      "_lines\030- \003(\0132\037.ssn.type.PurchaseLineCand" +
      "idateR\rpurchaseLines\0223\n\007answers\030. \003(\0132\031." +
      "ssn.type.AnswerCandidateR\007answers\0221\n\npag" +
      "e_texts\030/ \003(\0132\022.ssn.type.PageTextR\tpageT" +
      "exts\022M\n\020vat_distribution\0300 \003(\0132\".ssn.typ" +
      "e.VatDistributionCandidateR\017vatDistribut" +
      "ion\022G\n\021document_metadata\0301 \001(\0132\032.ssn.typ" +
      "e.DocumentMetadataR\020documentMetadata\"^\n\010" +
      "Document\022\030\n\007content\030\001 \001(\014R\007content\0228\n\006so" +
      "urce\030\002 \001(\0132 .ssn.annotator.v1.DocumentSo" +
      "urceR\006source\"+\n\016DocumentSource\022\031\n\010http_u" +
      "ri\030\001 \001(\tR\007httpUri\"o\n\027DocumentQuestionReq" +
      "uest\0226\n\010document\030\001 \001(\0132\032.ssn.annotator.v" +
      "1.DocumentR\010document\022\034\n\tquestions\030\002 \003(\tR" +
      "\tquestions\"U\n\030DocumentQuestionResponse\0223" +
      "\n\007answers\030\002 \003(\0132\031.ssn.type.AnswerCandida" +
      "teR\007answersJ\004\010\001\020\0022\275\002\n\021DocumentAnnotator\022" +
      "\215\001\n\020AnnotateDocument\022*.ssn.annotator.v1." +
      "DocumentAnnotatorRequest\032+.ssn.annotator" +
      ".v1.DocumentAnnotatorResponse\" \202\323\344\223\002\032\"\025/" +
      "v1/document:annotate:\001*\022\227\001\n\026AnswerDocume" +
      "ntQuestion\022).ssn.annotator.v1.DocumentQu" +
      "estionRequest\032*.ssn.annotator.v1.Documen" +
      "tQuestionResponse\"&\202\323\344\223\002 \"\033/v1/document:" +
      "answerquestion:\001*B\210\002\n\031ai.visma.ssn.annot" +
      "ator.v1B\016AnnotatorProtoP\001Z>github.com/e-" +
      "conomic/vmlapis/gen/go/ssn/annotator/v1;" +
      "annotator\242\002\003SAX\252\002\020Ssn.Annotator.V1\312\002\020Ssn" +
      "\\Annotator\\V1\342\002\034Ssn\\Annotator\\V1\\GPBMeta" +
      "data\352\002\022Ssn::Annotator::V1\222A8\022\017\n\tSmartSca" +
      "n2\002v1*\001\0022\020application/json:\020application/" +
      "jsonb\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          com.google.api.AnnotationsProto.getDescriptor(),
          ai.visma.grpc.gateway.protoc_gen_openapiv2.options.AnnotationsProto.getDescriptor(),
          ai.visma.ssn.type.CandidateProto.getDescriptor(),
          ai.visma.ssn.type.TextAnnotationProto.getDescriptor(),
          ai.visma.ssn.type.TierProto.getDescriptor(),
        });
    internal_static_ssn_annotator_v1_Feature_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_ssn_annotator_v1_Feature_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ssn_annotator_v1_Feature_descriptor,
        new java.lang.String[] { "Type", "MaxResults", "MinConfidence", });
    internal_static_ssn_annotator_v1_DocumentAnnotatorRequest_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_ssn_annotator_v1_DocumentAnnotatorRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ssn_annotator_v1_DocumentAnnotatorRequest_descriptor,
        new java.lang.String[] { "Document", "Features", "Tags", "Tier", "Segments", "Questions", });
    internal_static_ssn_annotator_v1_DocumentAnnotatorResponse_descriptor =
      getDescriptor().getMessageTypes().get(2);
    internal_static_ssn_annotator_v1_DocumentAnnotatorResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ssn_annotator_v1_DocumentAnnotatorResponse_descriptor,
        new java.lang.String[] { "OrderDate", "PaymentDueDate", "Currency", "TotalVat", "TotalInclVat", "TotalExclVat", "SupplierCorporateId", "SupplierCountryCode", "DocumentType", "PaymentMethod", "CreditCardLastFour", "InvoiceNumber", "TextAnnotation", "OcrLineDkType", "OcrLineDkPaymentId", "OcrLineDkCreditorId", "OcrLineSePaymentId", "OcrLineSeBankgiroCreditorId", "OcrLineSePlusgiroCreditorId", "OcrLineNoPaymentId", "OcrLineFiPaymentId", "OcrLineNlPaymentId", "OcrLineBePaymentId", "Text", "FeedbackId", "Iban", "Lines", "Preview", "BankAccountNumber", "BankRegistrationNumber", "Bic", "DocumentNumber", "DocumentDate", "OrderNumber", "SupplierName", "SupplierVatNumber", "SupplierOrganisationNumber", "SupplierAddress", "CustomerNumber", "ReceiverOrderNumber", "ReceiverAddress", "ReceiverCountryCode", "ReceiverName", "ReceiverVatNumber", "PurchaseLines", "Answers", "PageTexts", "VatDistribution", "DocumentMetadata", });
    internal_static_ssn_annotator_v1_Document_descriptor =
      getDescriptor().getMessageTypes().get(3);
    internal_static_ssn_annotator_v1_Document_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ssn_annotator_v1_Document_descriptor,
        new java.lang.String[] { "Content", "Source", });
    internal_static_ssn_annotator_v1_DocumentSource_descriptor =
      getDescriptor().getMessageTypes().get(4);
    internal_static_ssn_annotator_v1_DocumentSource_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ssn_annotator_v1_DocumentSource_descriptor,
        new java.lang.String[] { "HttpUri", });
    internal_static_ssn_annotator_v1_DocumentQuestionRequest_descriptor =
      getDescriptor().getMessageTypes().get(5);
    internal_static_ssn_annotator_v1_DocumentQuestionRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ssn_annotator_v1_DocumentQuestionRequest_descriptor,
        new java.lang.String[] { "Document", "Questions", });
    internal_static_ssn_annotator_v1_DocumentQuestionResponse_descriptor =
      getDescriptor().getMessageTypes().get(6);
    internal_static_ssn_annotator_v1_DocumentQuestionResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ssn_annotator_v1_DocumentQuestionResponse_descriptor,
        new java.lang.String[] { "Answers", });
    com.google.protobuf.ExtensionRegistry registry =
        com.google.protobuf.ExtensionRegistry.newInstance();
    registry.add(com.google.api.AnnotationsProto.http);
    registry.add(ai.visma.grpc.gateway.protoc_gen_openapiv2.options.AnnotationsProto.openapiv2Swagger);
    com.google.protobuf.Descriptors.FileDescriptor
        .internalUpdateFileDescriptor(descriptor, registry);
    com.google.api.AnnotationsProto.getDescriptor();
    ai.visma.grpc.gateway.protoc_gen_openapiv2.options.AnnotationsProto.getDescriptor();
    ai.visma.ssn.type.CandidateProto.getDescriptor();
    ai.visma.ssn.type.TextAnnotationProto.getDescriptor();
    ai.visma.ssn.type.TierProto.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}
