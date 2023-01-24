// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: ssn/dataservice/v1/dataservice.proto

package ai.visma.ssn.dataservice.v1;

public final class DataserviceProto {
  private DataserviceProto() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ssn_dataservice_v1_Document_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ssn_dataservice_v1_Document_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ssn_dataservice_v1_TrueValues_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ssn_dataservice_v1_TrueValues_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ssn_dataservice_v1_PredictionValues_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ssn_dataservice_v1_PredictionValues_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ssn_dataservice_v1_PredictionConfidences_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ssn_dataservice_v1_PredictionConfidences_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ssn_dataservice_v1_PredictionMetadata_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ssn_dataservice_v1_PredictionMetadata_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ssn_dataservice_v1_CreateDocumentRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ssn_dataservice_v1_CreateDocumentRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ssn_dataservice_v1_CreateDocumentResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ssn_dataservice_v1_CreateDocumentResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ssn_dataservice_v1_ReadDocumentRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ssn_dataservice_v1_ReadDocumentRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ssn_dataservice_v1_ReadDocumentResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ssn_dataservice_v1_ReadDocumentResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ssn_dataservice_v1_PrepareFeedbackRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ssn_dataservice_v1_PrepareFeedbackRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ssn_dataservice_v1_FeedbackRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ssn_dataservice_v1_FeedbackRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ssn_dataservice_v1_MetricsRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ssn_dataservice_v1_MetricsRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ssn_dataservice_v1_FeedbackMetrics_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ssn_dataservice_v1_FeedbackMetrics_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ssn_dataservice_v1_Correctness_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ssn_dataservice_v1_Correctness_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ssn_dataservice_v1_DeleteRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ssn_dataservice_v1_DeleteRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ssn_dataservice_v1_CallsPerMonth_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ssn_dataservice_v1_CallsPerMonth_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ssn_dataservice_v1_CallsPerMonthResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ssn_dataservice_v1_CallsPerMonthResponse_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n$ssn/dataservice/v1/dataservice.proto\022\022" +
      "ssn.dataservice.v1\032\034gen_bq_schema/bq_fie" +
      "ld.proto\032\034gen_bq_schema/bq_table.proto\032\034" +
      "google/api/annotations.proto\032\033google/pro" +
      "tobuf/empty.proto\032\036google/protobuf/wrapp" +
      "ers.proto\032\026google/type/date.proto\032\030ssn/t" +
      "ype/candidate.proto\032\036ssn/type/text_annot" +
      "ation.proto\032\023ssn/type/tier.proto\"\257\005\n\010Doc" +
      "ument\022/\n\002ta\030\001 \001(\0132\030.ssn.type.TextAnnotat" +
      "ionB\005\352?\002\030\001R\002ta\022\033\n\005bytes\030\002 \001(\014B\005\352?\002\030\001R\005by" +
      "tes\022<\n\002id\030\003 \001(\tB,\352?)\010\001\"%Feedback ID, sam" +
      "e as Envoy request idR\002id\022!\n\010consumer\030\004 " +
      "\001(\tB\005\352?\002\010\001R\010consumer\022Z\n\004tags\030\005 \003(\tBF\352?C\"" +
      "ATags defined by consumer, enriched by s" +
      "ervice if valetkey is usedR\004tags\022?\n\013true" +
      "_values\030\006 \001(\0132\036.ssn.dataservice.v1.TrueV" +
      "aluesR\ntrueValues\022Q\n\021prediction_values\030\007" +
      " \001(\0132$.ssn.dataservice.v1.PredictionValu" +
      "esR\020predictionValues\0225\n\rfeedback_time\030\010 " +
      "\001(\004B\020\352?\r\010\001\022\tTIMESTAMPR\014feedbackTime\022`\n\026p" +
      "rediction_confidences\030\t \001(\0132).ssn.datase" +
      "rvice.v1.PredictionConfidencesR\025predicti" +
      "onConfidences\022W\n\023prediction_metadata\030\n \001" +
      "(\0132&.ssn.dataservice.v1.PredictionMetada" +
      "taR\022predictionMetadata:\022\352?\017\n\rtraining_da" +
      "ta\"\352\023\n\nTrueValues\022B\n\016total_incl_vat\030\001 \001(" +
      "\0132\034.google.protobuf.DoubleValueR\014totalIn" +
      "clVat\0229\n\ttotal_vat\030\002 \001(\0132\034.google.protob" +
      "uf.DoubleValueR\010totalVat\022B\n\016total_excl_v" +
      "at\030\003 \001(\0132\034.google.protobuf.DoubleValueR\014" +
      "totalExclVat\022;\n\norder_date\030\004 \001(\0132\021.googl" +
      "e.type.DateB\t\352?\006\022\004DATER\torderDate\022F\n\020pay" +
      "ment_due_date\030\005 \001(\0132\021.google.type.DateB\t" +
      "\352?\006\022\004DATER\016paymentDueDate\022A\n\rdocument_ty" +
      "pe\030\006 \001(\0132\034.google.protobuf.StringValueR\014" +
      "documentType\0228\n\010currency\030\007 \001(\0132\034.google." +
      "protobuf.StringValueR\010currency\022O\n\025credit" +
      "_card_last_four\030\010 \001(\0132\034.google.protobuf." +
      "StringValueR\022creditCardLastFour\022C\n\016payme" +
      "nt_method\030\t \001(\0132\034.google.protobuf.String" +
      "ValueR\rpaymentMethod\022E\n\020ocr_line_dk_type" +
      "\030\n \001(\0132\034.google.protobuf.StringValueR\roc" +
      "rLineDkType\022P\n\026ocr_line_dk_payment_id\030\013 " +
      "\001(\0132\034.google.protobuf.StringValueR\022ocrLi" +
      "neDkPaymentId\022R\n\027ocr_line_dk_creditor_id" +
      "\030\014 \001(\0132\034.google.protobuf.StringValueR\023oc" +
      "rLineDkCreditorId\022P\n\026ocr_line_se_payment" +
      "_id\030\r \001(\0132\034.google.protobuf.StringValueR" +
      "\022ocrLineSePaymentId\022c\n ocr_line_se_bankg" +
      "iro_creditor_id\030\016 \001(\0132\034.google.protobuf." +
      "StringValueR\033ocrLineSeBankgiroCreditorId" +
      "\022c\n ocr_line_se_plusgiro_creditor_id\030\017 \001" +
      "(\0132\034.google.protobuf.StringValueR\033ocrLin" +
      "eSePlusgiroCreditorId\022P\n\026ocr_line_no_pay" +
      "ment_id\030\020 \001(\0132\034.google.protobuf.StringVa" +
      "lueR\022ocrLineNoPaymentId\022P\n\026ocr_line_fi_p" +
      "ayment_id\030\021 \001(\0132\034.google.protobuf.String" +
      "ValueR\022ocrLineFiPaymentId\022P\n\026ocr_line_nl" +
      "_payment_id\030\022 \001(\0132\034.google.protobuf.Stri" +
      "ngValueR\022ocrLineNlPaymentId\022P\n\025supplier_" +
      "corporate_id\030\023 \001(\0132\034.google.protobuf.Str" +
      "ingValueR\023supplierCorporateId\022P\n\025supplie" +
      "r_country_code\030\024 \001(\0132\034.google.protobuf.S" +
      "tringValueR\023supplierCountryCode\022C\n\016invoi" +
      "ce_number\030\025 \001(\0132\034.google.protobuf.String" +
      "ValueR\rinvoiceNumber\0220\n\004iban\030\026 \001(\0132\034.goo" +
      "gle.protobuf.StringValueR\004iban\022E\n\017order_" +
      "reference\030\027 \001(\0132\034.google.protobuf.String" +
      "ValueR\016orderReference\022L\n\023bank_account_nu" +
      "mber\030\030 \001(\0132\034.google.protobuf.StringValue" +
      "R\021bankAccountNumber\022V\n\030bank_registration" +
      "_number\030\031 \001(\0132\034.google.protobuf.StringVa" +
      "lueR\026bankRegistrationNumber\022A\n\rsupplier_" +
      "name\030\032 \001(\0132\034.google.protobuf.StringValue" +
      "R\014supplierName\022.\n\003bic\030\033 \001(\0132\034.google.pro" +
      "tobuf.StringValueR\003bic\022E\n\017document_numbe" +
      "r\030\034 \001(\0132\034.google.protobuf.StringValueR\016d" +
      "ocumentNumber\022A\n\rdocument_date\030\035 \001(\0132\021.g" +
      "oogle.type.DateB\t\352?\006\022\004DATER\014documentDate" +
      "\022?\n\014order_number\030\036 \001(\0132\034.google.protobuf" +
      ".StringValueR\013orderNumber\022L\n\023supplier_va" +
      "t_number\030\037 \001(\0132\034.google.protobuf.StringV" +
      "alueR\021supplierVatNumber\022^\n\034supplier_orga" +
      "nisation_number\030  \001(\0132\034.google.protobuf." +
      "StringValueR\032supplierOrganisationNumber\022" +
      "G\n\020supplier_address\030! \001(\0132\034.google.proto" +
      "buf.StringValueR\017supplierAddress\022E\n\017cust" +
      "omer_number\030\" \001(\0132\034.google.protobuf.Stri" +
      "ngValueR\016customerNumber\"\360\023\n\020PredictionVa" +
      "lues\022B\n\016total_incl_vat\030\001 \003(\0132\034.google.pr" +
      "otobuf.DoubleValueR\014totalInclVat\0229\n\ttota" +
      "l_vat\030\002 \003(\0132\034.google.protobuf.DoubleValu" +
      "eR\010totalVat\022B\n\016total_excl_vat\030\003 \003(\0132\034.go" +
      "ogle.protobuf.DoubleValueR\014totalExclVat\022" +
      ";\n\norder_date\030\004 \003(\0132\021.google.type.DateB\t" +
      "\352?\006\022\004DATER\torderDate\022F\n\020payment_due_date" +
      "\030\005 \003(\0132\021.google.type.DateB\t\352?\006\022\004DATER\016pa" +
      "ymentDueDate\022A\n\rdocument_type\030\006 \003(\0132\034.go" +
      "ogle.protobuf.StringValueR\014documentType\022" +
      "8\n\010currency\030\007 \003(\0132\034.google.protobuf.Stri" +
      "ngValueR\010currency\022O\n\025credit_card_last_fo" +
      "ur\030\010 \003(\0132\034.google.protobuf.StringValueR\022" +
      "creditCardLastFour\022C\n\016payment_method\030\t \003" +
      "(\0132\034.google.protobuf.StringValueR\rpaymen" +
      "tMethod\022E\n\020ocr_line_dk_type\030\n \003(\0132\034.goog" +
      "le.protobuf.StringValueR\rocrLineDkType\022P" +
      "\n\026ocr_line_dk_payment_id\030\013 \003(\0132\034.google." +
      "protobuf.StringValueR\022ocrLineDkPaymentId" +
      "\022R\n\027ocr_line_dk_creditor_id\030\014 \003(\0132\034.goog" +
      "le.protobuf.StringValueR\023ocrLineDkCredit" +
      "orId\022P\n\026ocr_line_se_payment_id\030\r \003(\0132\034.g" +
      "oogle.protobuf.StringValueR\022ocrLineSePay" +
      "mentId\022c\n ocr_line_se_bankgiro_creditor_" +
      "id\030\016 \003(\0132\034.google.protobuf.StringValueR\033" +
      "ocrLineSeBankgiroCreditorId\022c\n ocr_line_" +
      "se_plusgiro_creditor_id\030\017 \003(\0132\034.google.p" +
      "rotobuf.StringValueR\033ocrLineSePlusgiroCr" +
      "editorId\022P\n\026ocr_line_no_payment_id\030\020 \003(\013" +
      "2\034.google.protobuf.StringValueR\022ocrLineN" +
      "oPaymentId\022P\n\026ocr_line_fi_payment_id\030\021 \003" +
      "(\0132\034.google.protobuf.StringValueR\022ocrLin" +
      "eFiPaymentId\022P\n\026ocr_line_nl_payment_id\030\022" +
      " \003(\0132\034.google.protobuf.StringValueR\022ocrL" +
      "ineNlPaymentId\022P\n\025supplier_corporate_id\030" +
      "\023 \003(\0132\034.google.protobuf.StringValueR\023sup" +
      "plierCorporateId\022P\n\025supplier_country_cod" +
      "e\030\024 \003(\0132\034.google.protobuf.StringValueR\023s" +
      "upplierCountryCode\022C\n\016invoice_number\030\025 \003" +
      "(\0132\034.google.protobuf.StringValueR\rinvoic" +
      "eNumber\0220\n\004iban\030\026 \003(\0132\034.google.protobuf." +
      "StringValueR\004iban\022E\n\017order_reference\030\027 \003" +
      "(\0132\034.google.protobuf.StringValueR\016orderR" +
      "eference\022L\n\023bank_account_number\030\030 \003(\0132\034." +
      "google.protobuf.StringValueR\021bankAccount" +
      "Number\022V\n\030bank_registration_number\030\031 \003(\013" +
      "2\034.google.protobuf.StringValueR\026bankRegi" +
      "strationNumber\022A\n\rsupplier_name\030\032 \003(\0132\034." +
      "google.protobuf.StringValueR\014supplierNam" +
      "e\022.\n\003bic\030\033 \003(\0132\034.google.protobuf.StringV" +
      "alueR\003bic\022E\n\017document_number\030\034 \003(\0132\034.goo" +
      "gle.protobuf.StringValueR\016documentNumber" +
      "\022A\n\rdocument_date\030\035 \003(\0132\021.google.type.Da" +
      "teB\t\352?\006\022\004DATER\014documentDate\022?\n\014order_num" +
      "ber\030\036 \003(\0132\034.google.protobuf.StringValueR" +
      "\013orderNumber\022L\n\023supplier_vat_number\030\037 \003(" +
      "\0132\034.google.protobuf.StringValueR\021supplie" +
      "rVatNumber\022^\n\034supplier_organisation_numb" +
      "er\030  \003(\0132\034.google.protobuf.StringValueR\032" +
      "supplierOrganisationNumber\022G\n\020supplier_a" +
      "ddress\030! \003(\0132\034.google.protobuf.StringVal" +
      "ueR\017supplierAddress\022E\n\017customer_number\030\"" +
      " \003(\0132\034.google.protobuf.StringValueR\016cust" +
      "omerNumber\"\323\023\n\025PredictionConfidences\022A\n\016" +
      "total_incl_vat\030\001 \003(\0132\033.google.protobuf.F" +
      "loatValueR\014totalInclVat\0228\n\ttotal_vat\030\002 \003" +
      "(\0132\033.google.protobuf.FloatValueR\010totalVa" +
      "t\022A\n\016total_excl_vat\030\003 \003(\0132\033.google.proto" +
      "buf.FloatValueR\014totalExclVat\022:\n\norder_da" +
      "te\030\004 \003(\0132\033.google.protobuf.FloatValueR\to" +
      "rderDate\022E\n\020payment_due_date\030\005 \003(\0132\033.goo" +
      "gle.protobuf.FloatValueR\016paymentDueDate\022" +
      "@\n\rdocument_type\030\006 \003(\0132\033.google.protobuf" +
      ".FloatValueR\014documentType\0227\n\010currency\030\007 " +
      "\003(\0132\033.google.protobuf.FloatValueR\010curren" +
      "cy\022N\n\025credit_card_last_four\030\010 \003(\0132\033.goog" +
      "le.protobuf.FloatValueR\022creditCardLastFo" +
      "ur\022B\n\016payment_method\030\t \003(\0132\033.google.prot" +
      "obuf.FloatValueR\rpaymentMethod\022D\n\020ocr_li" +
      "ne_dk_type\030\n \003(\0132\033.google.protobuf.Float" +
      "ValueR\rocrLineDkType\022O\n\026ocr_line_dk_paym" +
      "ent_id\030\013 \003(\0132\033.google.protobuf.FloatValu" +
      "eR\022ocrLineDkPaymentId\022Q\n\027ocr_line_dk_cre" +
      "ditor_id\030\014 \003(\0132\033.google.protobuf.FloatVa" +
      "lueR\023ocrLineDkCreditorId\022O\n\026ocr_line_se_" +
      "payment_id\030\r \003(\0132\033.google.protobuf.Float" +
      "ValueR\022ocrLineSePaymentId\022b\n ocr_line_se" +
      "_bankgiro_creditor_id\030\016 \003(\0132\033.google.pro" +
      "tobuf.FloatValueR\033ocrLineSeBankgiroCredi" +
      "torId\022b\n ocr_line_se_plusgiro_creditor_i" +
      "d\030\017 \003(\0132\033.google.protobuf.FloatValueR\033oc" +
      "rLineSePlusgiroCreditorId\022O\n\026ocr_line_no" +
      "_payment_id\030\020 \003(\0132\033.google.protobuf.Floa" +
      "tValueR\022ocrLineNoPaymentId\022O\n\026ocr_line_f" +
      "i_payment_id\030\021 \003(\0132\033.google.protobuf.Flo" +
      "atValueR\022ocrLineFiPaymentId\022O\n\026ocr_line_" +
      "nl_payment_id\030\022 \003(\0132\033.google.protobuf.Fl" +
      "oatValueR\022ocrLineNlPaymentId\022O\n\025supplier" +
      "_corporate_id\030\023 \003(\0132\033.google.protobuf.Fl" +
      "oatValueR\023supplierCorporateId\022O\n\025supplie" +
      "r_country_code\030\024 \003(\0132\033.google.protobuf.F" +
      "loatValueR\023supplierCountryCode\022B\n\016invoic" +
      "e_number\030\025 \003(\0132\033.google.protobuf.FloatVa" +
      "lueR\rinvoiceNumber\022/\n\004iban\030\026 \003(\0132\033.googl" +
      "e.protobuf.FloatValueR\004iban\022D\n\017order_ref" +
      "erence\030\027 \003(\0132\033.google.protobuf.FloatValu" +
      "eR\016orderReference\022K\n\023bank_account_number" +
      "\030\030 \003(\0132\033.google.protobuf.FloatValueR\021ban" +
      "kAccountNumber\022U\n\030bank_registration_numb" +
      "er\030\031 \003(\0132\033.google.protobuf.FloatValueR\026b" +
      "ankRegistrationNumber\022@\n\rsupplier_name\030\032" +
      " \003(\0132\033.google.protobuf.FloatValueR\014suppl" +
      "ierName\022-\n\003bic\030\033 \003(\0132\033.google.protobuf.F" +
      "loatValueR\003bic\022D\n\017document_number\030\034 \003(\0132" +
      "\033.google.protobuf.FloatValueR\016documentNu" +
      "mber\022@\n\rdocument_date\030\035 \003(\0132\033.google.pro" +
      "tobuf.FloatValueR\014documentDate\022>\n\014order_" +
      "number\030\036 \003(\0132\033.google.protobuf.FloatValu" +
      "eR\013orderNumber\022K\n\023supplier_vat_number\030\037 " +
      "\003(\0132\033.google.protobuf.FloatValueR\021suppli" +
      "erVatNumber\022]\n\034supplier_organisation_num" +
      "ber\030  \003(\0132\033.google.protobuf.FloatValueR\032" +
      "supplierOrganisationNumber\022F\n\020supplier_a" +
      "ddress\030! \003(\0132\033.google.protobuf.FloatValu" +
      "eR\017supplierAddress\022D\n\017customer_number\030\" " +
      "\003(\0132\033.google.protobuf.FloatValueR\016custom" +
      "erNumber\"\300\021\n\022PredictionMetadata\0229\n\016total" +
      "_incl_vat\030\001 \003(\0132\023.ssn.type.ModelSpecR\014to" +
      "talInclVat\0220\n\ttotal_vat\030\002 \003(\0132\023.ssn.type" +
      ".ModelSpecR\010totalVat\0229\n\016total_excl_vat\030\003" +
      " \003(\0132\023.ssn.type.ModelSpecR\014totalExclVat\022" +
      "2\n\norder_date\030\004 \003(\0132\023.ssn.type.ModelSpec" +
      "R\torderDate\022=\n\020payment_due_date\030\005 \003(\0132\023." +
      "ssn.type.ModelSpecR\016paymentDueDate\0228\n\rdo" +
      "cument_type\030\006 \003(\0132\023.ssn.type.ModelSpecR\014" +
      "documentType\022/\n\010currency\030\007 \003(\0132\023.ssn.typ" +
      "e.ModelSpecR\010currency\022F\n\025credit_card_las" +
      "t_four\030\010 \003(\0132\023.ssn.type.ModelSpecR\022credi" +
      "tCardLastFour\022:\n\016payment_method\030\t \003(\0132\023." +
      "ssn.type.ModelSpecR\rpaymentMethod\022<\n\020ocr" +
      "_line_dk_type\030\n \003(\0132\023.ssn.type.ModelSpec" +
      "R\rocrLineDkType\022G\n\026ocr_line_dk_payment_i" +
      "d\030\013 \003(\0132\023.ssn.type.ModelSpecR\022ocrLineDkP" +
      "aymentId\022I\n\027ocr_line_dk_creditor_id\030\014 \003(" +
      "\0132\023.ssn.type.ModelSpecR\023ocrLineDkCredito" +
      "rId\022G\n\026ocr_line_se_payment_id\030\r \003(\0132\023.ss" +
      "n.type.ModelSpecR\022ocrLineSePaymentId\022Z\n " +
      "ocr_line_se_bankgiro_creditor_id\030\016 \003(\0132\023" +
      ".ssn.type.ModelSpecR\033ocrLineSeBankgiroCr" +
      "editorId\022Z\n ocr_line_se_plusgiro_credito" +
      "r_id\030\017 \003(\0132\023.ssn.type.ModelSpecR\033ocrLine" +
      "SePlusgiroCreditorId\022G\n\026ocr_line_no_paym" +
      "ent_id\030\020 \003(\0132\023.ssn.type.ModelSpecR\022ocrLi" +
      "neNoPaymentId\022G\n\026ocr_line_fi_payment_id\030" +
      "\021 \003(\0132\023.ssn.type.ModelSpecR\022ocrLineFiPay" +
      "mentId\022G\n\026ocr_line_nl_payment_id\030\022 \003(\0132\023" +
      ".ssn.type.ModelSpecR\022ocrLineNlPaymentId\022" +
      "G\n\025supplier_corporate_id\030\023 \003(\0132\023.ssn.typ" +
      "e.ModelSpecR\023supplierCorporateId\022G\n\025supp" +
      "lier_country_code\030\024 \003(\0132\023.ssn.type.Model" +
      "SpecR\023supplierCountryCode\022:\n\016invoice_num" +
      "ber\030\025 \003(\0132\023.ssn.type.ModelSpecR\rinvoiceN" +
      "umber\022\'\n\004iban\030\026 \003(\0132\023.ssn.type.ModelSpec" +
      "R\004iban\022<\n\017order_reference\030\027 \003(\0132\023.ssn.ty" +
      "pe.ModelSpecR\016orderReference\022C\n\023bank_acc" +
      "ount_number\030\030 \003(\0132\023.ssn.type.ModelSpecR\021" +
      "bankAccountNumber\022M\n\030bank_registration_n" +
      "umber\030\031 \003(\0132\023.ssn.type.ModelSpecR\026bankRe" +
      "gistrationNumber\0228\n\rsupplier_name\030\032 \003(\0132" +
      "\023.ssn.type.ModelSpecR\014supplierName\022%\n\003bi" +
      "c\030\033 \003(\0132\023.ssn.type.ModelSpecR\003bic\022<\n\017doc" +
      "ument_number\030\034 \003(\0132\023.ssn.type.ModelSpecR" +
      "\016documentNumber\0228\n\rdocument_date\030\035 \003(\0132\023" +
      ".ssn.type.ModelSpecR\014documentDate\0226\n\014ord" +
      "er_number\030\036 \003(\0132\023.ssn.type.ModelSpecR\013or" +
      "derNumber\022C\n\023supplier_vat_number\030\037 \003(\0132\023" +
      ".ssn.type.ModelSpecR\021supplierVatNumber\022U" +
      "\n\034supplier_organisation_number\030  \003(\0132\023.s" +
      "sn.type.ModelSpecR\032supplierOrganisationN" +
      "umber\022>\n\020supplier_address\030! \003(\0132\023.ssn.ty" +
      "pe.ModelSpecR\017supplierAddress\022<\n\017custome" +
      "r_number\030\" \003(\0132\023.ssn.type.ModelSpecR\016cus" +
      "tomerNumber\"Q\n\025CreateDocumentRequest\0228\n\010" +
      "document\030\001 \001(\0132\034.ssn.dataservice.v1.Docu" +
      "mentR\010document\"(\n\026CreateDocumentResponse" +
      "\022\016\n\002id\030\001 \001(\tR\002id\"%\n\023ReadDocumentRequest\022" +
      "\016\n\002id\030\001 \001(\tR\002id\"P\n\024ReadDocumentResponse\022" +
      "8\n\010document\030\001 \001(\0132\034.ssn.dataservice.v1.D" +
      "ocumentR\010document\"\273\003\n\026PrepareFeedbackReq" +
      "uest\022\016\n\002id\030\001 \001(\tR\002id\022(\n\002ta\030\002 \001(\0132\030.ssn.t" +
      "ype.TextAnnotationR\002ta\022%\n\016document_bytes" +
      "\030\003 \001(\014R\rdocumentBytes\022F\n\013predictions\030\004 \001" +
      "(\0132$.ssn.dataservice.v1.PredictionValues" +
      "R\013predictions\022\022\n\004tags\030\005 \003(\tR\004tags\022K\n\013con" +
      "fidences\030\006 \001(\0132).ssn.dataservice.v1.Pred" +
      "ictionConfidencesR\013confidences\022W\n\023predic" +
      "tion_metadata\030\007 \001(\0132&.ssn.dataservice.v1" +
      ".PredictionMetadataR\022predictionMetadata\022" +
      "\"\n\004tier\030\010 \001(\0162\016.ssn.type.TierR\004tier\022\032\n\010s" +
      "egments\030\t \003(\tR\010segments\"v\n\017FeedbackReque" +
      "st\022\016\n\002id\030\001 \001(\tR\002id\022?\n\013true_values\030\002 \001(\0132" +
      "\036.ssn.dataservice.v1.TrueValuesR\ntrueVal" +
      "ues\022\022\n\004tags\030\003 \003(\tR\004tags\"v\n\016MetricsReques" +
      "t\022\035\n\nstart_time\030\002 \001(\003R\tstartTime\022\031\n\010end_" +
      "time\030\003 \001(\003R\007endTime\022\026\n\006fields\030\004 \003(\tR\006fie" +
      "lds\022\022\n\004tags\030\005 \003(\tR\004tags\"\377\001\n\017FeedbackMetr" +
      "ics\022%\n\016document_count\030\001 \001(\005R\rdocumentCou" +
      "nt\022%\n\016feedback_count\030\002 \001(\005R\rfeedbackCoun" +
      "t\022P\n\023overall_correctness\030\003 \001(\0132\037.ssn.dat" +
      "aservice.v1.CorrectnessR\022overallCorrectn" +
      "ess\022L\n\021field_correctness\030\004 \003(\0132\037.ssn.dat" +
      "aservice.v1.CorrectnessR\020fieldCorrectnes" +
      "s\"\314\001\n\013Correctness\022\024\n\005field\030\001 \001(\tR\005field\022" +
      "-\n\022correct_percentage\030\002 \001(\002R\021correctPerc" +
      "entage\0223\n\025incomplete_percentage\030\003 \001(\002R\024i" +
      "ncompletePercentage\022)\n\020error_percentage\030" +
      "\004 \001(\002R\017errorPercentage\022\030\n\007support\030\005 \001(\005R" +
      "\007support\"#\n\rDeleteRequest\022\022\n\004tags\030\001 \003(\tR" +
      "\004tags\"D\n\rCallsPerMonth\022\024\n\005calls\030\001 \001(\003R\005c" +
      "alls\022\035\n\nmonth_name\030\002 \001(\tR\tmonthName\"b\n\025C" +
      "allsPerMonthResponse\022I\n\017calls_per_month\030" +
      "\001 \003(\0132!.ssn.dataservice.v1.CallsPerMonth" +
      "R\rcallsPerMonth2\265\005\n\013DataService\022g\n\016Creat" +
      "eDocument\022).ssn.dataservice.v1.CreateDoc" +
      "umentRequest\032*.ssn.dataservice.v1.Create" +
      "DocumentResponse\022a\n\014ReadDocument\022\'.ssn.d" +
      "ataservice.v1.ReadDocumentRequest\032(.ssn." +
      "dataservice.v1.ReadDocumentResponse\022U\n\017P" +
      "repareFeedback\022*.ssn.dataservice.v1.Prep" +
      "areFeedbackRequest\032\026.google.protobuf.Emp" +
      "ty\022g\n\010Feedback\022#.ssn.dataservice.v1.Feed" +
      "backRequest\032\026.google.protobuf.Empty\"\036\202\323\344" +
      "\223\002\030:\001*\"\023/v1/feedback:create\022[\n\020Calculate" +
      "Metrics\022\".ssn.dataservice.v1.MetricsRequ" +
      "est\032#.ssn.dataservice.v1.FeedbackMetrics" +
      "\022c\n\006Delete\022!.ssn.dataservice.v1.DeleteRe" +
      "quest\032\026.google.protobuf.Empty\"\036\202\323\344\223\002\030:\001*" +
      "\"\023/v1/feedback:delete\022X\n\023CallsPerMonthMe" +
      "tric\022\026.google.protobuf.Empty\032).ssn.datas" +
      "ervice.v1.CallsPerMonthResponseB\335\001\n\033ai.v" +
      "isma.ssn.dataservice.v1B\020DataserviceProt" +
      "oP\001ZBgithub.com/e-conomic/vmlapis/gen/go" +
      "/ssn/dataservice/v1;dataservice\242\002\003SDX\252\002\022" +
      "Ssn.Dataservice.V1\312\002\022Ssn\\Dataservice\\V1\342" +
      "\002\036Ssn\\Dataservice\\V1\\GPBMetadata\352\002\024Ssn::" +
      "Dataservice::V1b\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          ai.visma.gen_bq_schema.BqFieldProto.getDescriptor(),
          ai.visma.gen_bq_schema.BqTableProto.getDescriptor(),
          com.google.api.AnnotationsProto.getDescriptor(),
          com.google.protobuf.EmptyProto.getDescriptor(),
          com.google.protobuf.WrappersProto.getDescriptor(),
          com.google.type.DateProto.getDescriptor(),
          ai.visma.ssn.type.CandidateProto.getDescriptor(),
          ai.visma.ssn.type.TextAnnotationProto.getDescriptor(),
          ai.visma.ssn.type.TierProto.getDescriptor(),
        });
    internal_static_ssn_dataservice_v1_Document_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_ssn_dataservice_v1_Document_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ssn_dataservice_v1_Document_descriptor,
        new java.lang.String[] { "Ta", "Bytes", "Id", "Consumer", "Tags", "TrueValues", "PredictionValues", "FeedbackTime", "PredictionConfidences", "PredictionMetadata", });
    internal_static_ssn_dataservice_v1_TrueValues_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_ssn_dataservice_v1_TrueValues_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ssn_dataservice_v1_TrueValues_descriptor,
        new java.lang.String[] { "TotalInclVat", "TotalVat", "TotalExclVat", "OrderDate", "PaymentDueDate", "DocumentType", "Currency", "CreditCardLastFour", "PaymentMethod", "OcrLineDkType", "OcrLineDkPaymentId", "OcrLineDkCreditorId", "OcrLineSePaymentId", "OcrLineSeBankgiroCreditorId", "OcrLineSePlusgiroCreditorId", "OcrLineNoPaymentId", "OcrLineFiPaymentId", "OcrLineNlPaymentId", "SupplierCorporateId", "SupplierCountryCode", "InvoiceNumber", "Iban", "OrderReference", "BankAccountNumber", "BankRegistrationNumber", "SupplierName", "Bic", "DocumentNumber", "DocumentDate", "OrderNumber", "SupplierVatNumber", "SupplierOrganisationNumber", "SupplierAddress", "CustomerNumber", });
    internal_static_ssn_dataservice_v1_PredictionValues_descriptor =
      getDescriptor().getMessageTypes().get(2);
    internal_static_ssn_dataservice_v1_PredictionValues_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ssn_dataservice_v1_PredictionValues_descriptor,
        new java.lang.String[] { "TotalInclVat", "TotalVat", "TotalExclVat", "OrderDate", "PaymentDueDate", "DocumentType", "Currency", "CreditCardLastFour", "PaymentMethod", "OcrLineDkType", "OcrLineDkPaymentId", "OcrLineDkCreditorId", "OcrLineSePaymentId", "OcrLineSeBankgiroCreditorId", "OcrLineSePlusgiroCreditorId", "OcrLineNoPaymentId", "OcrLineFiPaymentId", "OcrLineNlPaymentId", "SupplierCorporateId", "SupplierCountryCode", "InvoiceNumber", "Iban", "OrderReference", "BankAccountNumber", "BankRegistrationNumber", "SupplierName", "Bic", "DocumentNumber", "DocumentDate", "OrderNumber", "SupplierVatNumber", "SupplierOrganisationNumber", "SupplierAddress", "CustomerNumber", });
    internal_static_ssn_dataservice_v1_PredictionConfidences_descriptor =
      getDescriptor().getMessageTypes().get(3);
    internal_static_ssn_dataservice_v1_PredictionConfidences_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ssn_dataservice_v1_PredictionConfidences_descriptor,
        new java.lang.String[] { "TotalInclVat", "TotalVat", "TotalExclVat", "OrderDate", "PaymentDueDate", "DocumentType", "Currency", "CreditCardLastFour", "PaymentMethod", "OcrLineDkType", "OcrLineDkPaymentId", "OcrLineDkCreditorId", "OcrLineSePaymentId", "OcrLineSeBankgiroCreditorId", "OcrLineSePlusgiroCreditorId", "OcrLineNoPaymentId", "OcrLineFiPaymentId", "OcrLineNlPaymentId", "SupplierCorporateId", "SupplierCountryCode", "InvoiceNumber", "Iban", "OrderReference", "BankAccountNumber", "BankRegistrationNumber", "SupplierName", "Bic", "DocumentNumber", "DocumentDate", "OrderNumber", "SupplierVatNumber", "SupplierOrganisationNumber", "SupplierAddress", "CustomerNumber", });
    internal_static_ssn_dataservice_v1_PredictionMetadata_descriptor =
      getDescriptor().getMessageTypes().get(4);
    internal_static_ssn_dataservice_v1_PredictionMetadata_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ssn_dataservice_v1_PredictionMetadata_descriptor,
        new java.lang.String[] { "TotalInclVat", "TotalVat", "TotalExclVat", "OrderDate", "PaymentDueDate", "DocumentType", "Currency", "CreditCardLastFour", "PaymentMethod", "OcrLineDkType", "OcrLineDkPaymentId", "OcrLineDkCreditorId", "OcrLineSePaymentId", "OcrLineSeBankgiroCreditorId", "OcrLineSePlusgiroCreditorId", "OcrLineNoPaymentId", "OcrLineFiPaymentId", "OcrLineNlPaymentId", "SupplierCorporateId", "SupplierCountryCode", "InvoiceNumber", "Iban", "OrderReference", "BankAccountNumber", "BankRegistrationNumber", "SupplierName", "Bic", "DocumentNumber", "DocumentDate", "OrderNumber", "SupplierVatNumber", "SupplierOrganisationNumber", "SupplierAddress", "CustomerNumber", });
    internal_static_ssn_dataservice_v1_CreateDocumentRequest_descriptor =
      getDescriptor().getMessageTypes().get(5);
    internal_static_ssn_dataservice_v1_CreateDocumentRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ssn_dataservice_v1_CreateDocumentRequest_descriptor,
        new java.lang.String[] { "Document", });
    internal_static_ssn_dataservice_v1_CreateDocumentResponse_descriptor =
      getDescriptor().getMessageTypes().get(6);
    internal_static_ssn_dataservice_v1_CreateDocumentResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ssn_dataservice_v1_CreateDocumentResponse_descriptor,
        new java.lang.String[] { "Id", });
    internal_static_ssn_dataservice_v1_ReadDocumentRequest_descriptor =
      getDescriptor().getMessageTypes().get(7);
    internal_static_ssn_dataservice_v1_ReadDocumentRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ssn_dataservice_v1_ReadDocumentRequest_descriptor,
        new java.lang.String[] { "Id", });
    internal_static_ssn_dataservice_v1_ReadDocumentResponse_descriptor =
      getDescriptor().getMessageTypes().get(8);
    internal_static_ssn_dataservice_v1_ReadDocumentResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ssn_dataservice_v1_ReadDocumentResponse_descriptor,
        new java.lang.String[] { "Document", });
    internal_static_ssn_dataservice_v1_PrepareFeedbackRequest_descriptor =
      getDescriptor().getMessageTypes().get(9);
    internal_static_ssn_dataservice_v1_PrepareFeedbackRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ssn_dataservice_v1_PrepareFeedbackRequest_descriptor,
        new java.lang.String[] { "Id", "Ta", "DocumentBytes", "Predictions", "Tags", "Confidences", "PredictionMetadata", "Tier", "Segments", });
    internal_static_ssn_dataservice_v1_FeedbackRequest_descriptor =
      getDescriptor().getMessageTypes().get(10);
    internal_static_ssn_dataservice_v1_FeedbackRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ssn_dataservice_v1_FeedbackRequest_descriptor,
        new java.lang.String[] { "Id", "TrueValues", "Tags", });
    internal_static_ssn_dataservice_v1_MetricsRequest_descriptor =
      getDescriptor().getMessageTypes().get(11);
    internal_static_ssn_dataservice_v1_MetricsRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ssn_dataservice_v1_MetricsRequest_descriptor,
        new java.lang.String[] { "StartTime", "EndTime", "Fields", "Tags", });
    internal_static_ssn_dataservice_v1_FeedbackMetrics_descriptor =
      getDescriptor().getMessageTypes().get(12);
    internal_static_ssn_dataservice_v1_FeedbackMetrics_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ssn_dataservice_v1_FeedbackMetrics_descriptor,
        new java.lang.String[] { "DocumentCount", "FeedbackCount", "OverallCorrectness", "FieldCorrectness", });
    internal_static_ssn_dataservice_v1_Correctness_descriptor =
      getDescriptor().getMessageTypes().get(13);
    internal_static_ssn_dataservice_v1_Correctness_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ssn_dataservice_v1_Correctness_descriptor,
        new java.lang.String[] { "Field", "CorrectPercentage", "IncompletePercentage", "ErrorPercentage", "Support", });
    internal_static_ssn_dataservice_v1_DeleteRequest_descriptor =
      getDescriptor().getMessageTypes().get(14);
    internal_static_ssn_dataservice_v1_DeleteRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ssn_dataservice_v1_DeleteRequest_descriptor,
        new java.lang.String[] { "Tags", });
    internal_static_ssn_dataservice_v1_CallsPerMonth_descriptor =
      getDescriptor().getMessageTypes().get(15);
    internal_static_ssn_dataservice_v1_CallsPerMonth_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ssn_dataservice_v1_CallsPerMonth_descriptor,
        new java.lang.String[] { "Calls", "MonthName", });
    internal_static_ssn_dataservice_v1_CallsPerMonthResponse_descriptor =
      getDescriptor().getMessageTypes().get(16);
    internal_static_ssn_dataservice_v1_CallsPerMonthResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ssn_dataservice_v1_CallsPerMonthResponse_descriptor,
        new java.lang.String[] { "CallsPerMonth", });
    com.google.protobuf.ExtensionRegistry registry =
        com.google.protobuf.ExtensionRegistry.newInstance();
    registry.add(ai.visma.gen_bq_schema.BqFieldProto.bigquery);
    registry.add(ai.visma.gen_bq_schema.BqTableProto.bigqueryOpts);
    registry.add(com.google.api.AnnotationsProto.http);
    com.google.protobuf.Descriptors.FileDescriptor
        .internalUpdateFileDescriptor(descriptor, registry);
    ai.visma.gen_bq_schema.BqFieldProto.getDescriptor();
    ai.visma.gen_bq_schema.BqTableProto.getDescriptor();
    com.google.api.AnnotationsProto.getDescriptor();
    com.google.protobuf.EmptyProto.getDescriptor();
    com.google.protobuf.WrappersProto.getDescriptor();
    com.google.type.DateProto.getDescriptor();
    ai.visma.ssn.type.CandidateProto.getDescriptor();
    ai.visma.ssn.type.TextAnnotationProto.getDescriptor();
    ai.visma.ssn.type.TierProto.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}