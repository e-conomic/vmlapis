// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: ssn/dataservice/v1/dataservice.proto

package ai.visma.ssn.dataservice.v1;

public interface PredictionValuesOrBuilder extends
    // @@protoc_insertion_point(interface_extends:ssn.dataservice.v1.PredictionValues)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>repeated .google.protobuf.DoubleValue total_incl_vat = 1 [json_name = "totalInclVat"];</code>
   */
  java.util.List<com.google.protobuf.DoubleValue> 
      getTotalInclVatList();
  /**
   * <code>repeated .google.protobuf.DoubleValue total_incl_vat = 1 [json_name = "totalInclVat"];</code>
   */
  com.google.protobuf.DoubleValue getTotalInclVat(int index);
  /**
   * <code>repeated .google.protobuf.DoubleValue total_incl_vat = 1 [json_name = "totalInclVat"];</code>
   */
  int getTotalInclVatCount();
  /**
   * <code>repeated .google.protobuf.DoubleValue total_incl_vat = 1 [json_name = "totalInclVat"];</code>
   */
  java.util.List<? extends com.google.protobuf.DoubleValueOrBuilder> 
      getTotalInclVatOrBuilderList();
  /**
   * <code>repeated .google.protobuf.DoubleValue total_incl_vat = 1 [json_name = "totalInclVat"];</code>
   */
  com.google.protobuf.DoubleValueOrBuilder getTotalInclVatOrBuilder(
      int index);

  /**
   * <code>repeated .google.protobuf.DoubleValue total_vat = 2 [json_name = "totalVat"];</code>
   */
  java.util.List<com.google.protobuf.DoubleValue> 
      getTotalVatList();
  /**
   * <code>repeated .google.protobuf.DoubleValue total_vat = 2 [json_name = "totalVat"];</code>
   */
  com.google.protobuf.DoubleValue getTotalVat(int index);
  /**
   * <code>repeated .google.protobuf.DoubleValue total_vat = 2 [json_name = "totalVat"];</code>
   */
  int getTotalVatCount();
  /**
   * <code>repeated .google.protobuf.DoubleValue total_vat = 2 [json_name = "totalVat"];</code>
   */
  java.util.List<? extends com.google.protobuf.DoubleValueOrBuilder> 
      getTotalVatOrBuilderList();
  /**
   * <code>repeated .google.protobuf.DoubleValue total_vat = 2 [json_name = "totalVat"];</code>
   */
  com.google.protobuf.DoubleValueOrBuilder getTotalVatOrBuilder(
      int index);

  /**
   * <code>repeated .google.protobuf.DoubleValue total_excl_vat = 3 [json_name = "totalExclVat"];</code>
   */
  java.util.List<com.google.protobuf.DoubleValue> 
      getTotalExclVatList();
  /**
   * <code>repeated .google.protobuf.DoubleValue total_excl_vat = 3 [json_name = "totalExclVat"];</code>
   */
  com.google.protobuf.DoubleValue getTotalExclVat(int index);
  /**
   * <code>repeated .google.protobuf.DoubleValue total_excl_vat = 3 [json_name = "totalExclVat"];</code>
   */
  int getTotalExclVatCount();
  /**
   * <code>repeated .google.protobuf.DoubleValue total_excl_vat = 3 [json_name = "totalExclVat"];</code>
   */
  java.util.List<? extends com.google.protobuf.DoubleValueOrBuilder> 
      getTotalExclVatOrBuilderList();
  /**
   * <code>repeated .google.protobuf.DoubleValue total_excl_vat = 3 [json_name = "totalExclVat"];</code>
   */
  com.google.protobuf.DoubleValueOrBuilder getTotalExclVatOrBuilder(
      int index);

  /**
   * <code>repeated .google.type.Date order_date = 4 [json_name = "orderDate", (.gen_bq_schema.bigquery) = { ... }</code>
   */
  java.util.List<com.google.type.Date> 
      getOrderDateList();
  /**
   * <code>repeated .google.type.Date order_date = 4 [json_name = "orderDate", (.gen_bq_schema.bigquery) = { ... }</code>
   */
  com.google.type.Date getOrderDate(int index);
  /**
   * <code>repeated .google.type.Date order_date = 4 [json_name = "orderDate", (.gen_bq_schema.bigquery) = { ... }</code>
   */
  int getOrderDateCount();
  /**
   * <code>repeated .google.type.Date order_date = 4 [json_name = "orderDate", (.gen_bq_schema.bigquery) = { ... }</code>
   */
  java.util.List<? extends com.google.type.DateOrBuilder> 
      getOrderDateOrBuilderList();
  /**
   * <code>repeated .google.type.Date order_date = 4 [json_name = "orderDate", (.gen_bq_schema.bigquery) = { ... }</code>
   */
  com.google.type.DateOrBuilder getOrderDateOrBuilder(
      int index);

  /**
   * <code>repeated .google.type.Date payment_due_date = 5 [json_name = "paymentDueDate", (.gen_bq_schema.bigquery) = { ... }</code>
   */
  java.util.List<com.google.type.Date> 
      getPaymentDueDateList();
  /**
   * <code>repeated .google.type.Date payment_due_date = 5 [json_name = "paymentDueDate", (.gen_bq_schema.bigquery) = { ... }</code>
   */
  com.google.type.Date getPaymentDueDate(int index);
  /**
   * <code>repeated .google.type.Date payment_due_date = 5 [json_name = "paymentDueDate", (.gen_bq_schema.bigquery) = { ... }</code>
   */
  int getPaymentDueDateCount();
  /**
   * <code>repeated .google.type.Date payment_due_date = 5 [json_name = "paymentDueDate", (.gen_bq_schema.bigquery) = { ... }</code>
   */
  java.util.List<? extends com.google.type.DateOrBuilder> 
      getPaymentDueDateOrBuilderList();
  /**
   * <code>repeated .google.type.Date payment_due_date = 5 [json_name = "paymentDueDate", (.gen_bq_schema.bigquery) = { ... }</code>
   */
  com.google.type.DateOrBuilder getPaymentDueDateOrBuilder(
      int index);

  /**
   * <code>repeated .google.protobuf.StringValue document_type = 6 [json_name = "documentType"];</code>
   */
  java.util.List<com.google.protobuf.StringValue> 
      getDocumentTypeList();
  /**
   * <code>repeated .google.protobuf.StringValue document_type = 6 [json_name = "documentType"];</code>
   */
  com.google.protobuf.StringValue getDocumentType(int index);
  /**
   * <code>repeated .google.protobuf.StringValue document_type = 6 [json_name = "documentType"];</code>
   */
  int getDocumentTypeCount();
  /**
   * <code>repeated .google.protobuf.StringValue document_type = 6 [json_name = "documentType"];</code>
   */
  java.util.List<? extends com.google.protobuf.StringValueOrBuilder> 
      getDocumentTypeOrBuilderList();
  /**
   * <code>repeated .google.protobuf.StringValue document_type = 6 [json_name = "documentType"];</code>
   */
  com.google.protobuf.StringValueOrBuilder getDocumentTypeOrBuilder(
      int index);

  /**
   * <code>repeated .google.protobuf.StringValue currency = 7 [json_name = "currency"];</code>
   */
  java.util.List<com.google.protobuf.StringValue> 
      getCurrencyList();
  /**
   * <code>repeated .google.protobuf.StringValue currency = 7 [json_name = "currency"];</code>
   */
  com.google.protobuf.StringValue getCurrency(int index);
  /**
   * <code>repeated .google.protobuf.StringValue currency = 7 [json_name = "currency"];</code>
   */
  int getCurrencyCount();
  /**
   * <code>repeated .google.protobuf.StringValue currency = 7 [json_name = "currency"];</code>
   */
  java.util.List<? extends com.google.protobuf.StringValueOrBuilder> 
      getCurrencyOrBuilderList();
  /**
   * <code>repeated .google.protobuf.StringValue currency = 7 [json_name = "currency"];</code>
   */
  com.google.protobuf.StringValueOrBuilder getCurrencyOrBuilder(
      int index);

  /**
   * <code>repeated .google.protobuf.StringValue credit_card_last_four = 8 [json_name = "creditCardLastFour"];</code>
   */
  java.util.List<com.google.protobuf.StringValue> 
      getCreditCardLastFourList();
  /**
   * <code>repeated .google.protobuf.StringValue credit_card_last_four = 8 [json_name = "creditCardLastFour"];</code>
   */
  com.google.protobuf.StringValue getCreditCardLastFour(int index);
  /**
   * <code>repeated .google.protobuf.StringValue credit_card_last_four = 8 [json_name = "creditCardLastFour"];</code>
   */
  int getCreditCardLastFourCount();
  /**
   * <code>repeated .google.protobuf.StringValue credit_card_last_four = 8 [json_name = "creditCardLastFour"];</code>
   */
  java.util.List<? extends com.google.protobuf.StringValueOrBuilder> 
      getCreditCardLastFourOrBuilderList();
  /**
   * <code>repeated .google.protobuf.StringValue credit_card_last_four = 8 [json_name = "creditCardLastFour"];</code>
   */
  com.google.protobuf.StringValueOrBuilder getCreditCardLastFourOrBuilder(
      int index);

  /**
   * <code>repeated .google.protobuf.StringValue payment_method = 9 [json_name = "paymentMethod"];</code>
   */
  java.util.List<com.google.protobuf.StringValue> 
      getPaymentMethodList();
  /**
   * <code>repeated .google.protobuf.StringValue payment_method = 9 [json_name = "paymentMethod"];</code>
   */
  com.google.protobuf.StringValue getPaymentMethod(int index);
  /**
   * <code>repeated .google.protobuf.StringValue payment_method = 9 [json_name = "paymentMethod"];</code>
   */
  int getPaymentMethodCount();
  /**
   * <code>repeated .google.protobuf.StringValue payment_method = 9 [json_name = "paymentMethod"];</code>
   */
  java.util.List<? extends com.google.protobuf.StringValueOrBuilder> 
      getPaymentMethodOrBuilderList();
  /**
   * <code>repeated .google.protobuf.StringValue payment_method = 9 [json_name = "paymentMethod"];</code>
   */
  com.google.protobuf.StringValueOrBuilder getPaymentMethodOrBuilder(
      int index);

  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_dk_type = 10 [json_name = "ocrLineDkType"];</code>
   */
  java.util.List<com.google.protobuf.StringValue> 
      getOcrLineDkTypeList();
  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_dk_type = 10 [json_name = "ocrLineDkType"];</code>
   */
  com.google.protobuf.StringValue getOcrLineDkType(int index);
  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_dk_type = 10 [json_name = "ocrLineDkType"];</code>
   */
  int getOcrLineDkTypeCount();
  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_dk_type = 10 [json_name = "ocrLineDkType"];</code>
   */
  java.util.List<? extends com.google.protobuf.StringValueOrBuilder> 
      getOcrLineDkTypeOrBuilderList();
  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_dk_type = 10 [json_name = "ocrLineDkType"];</code>
   */
  com.google.protobuf.StringValueOrBuilder getOcrLineDkTypeOrBuilder(
      int index);

  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_dk_payment_id = 11 [json_name = "ocrLineDkPaymentId"];</code>
   */
  java.util.List<com.google.protobuf.StringValue> 
      getOcrLineDkPaymentIdList();
  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_dk_payment_id = 11 [json_name = "ocrLineDkPaymentId"];</code>
   */
  com.google.protobuf.StringValue getOcrLineDkPaymentId(int index);
  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_dk_payment_id = 11 [json_name = "ocrLineDkPaymentId"];</code>
   */
  int getOcrLineDkPaymentIdCount();
  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_dk_payment_id = 11 [json_name = "ocrLineDkPaymentId"];</code>
   */
  java.util.List<? extends com.google.protobuf.StringValueOrBuilder> 
      getOcrLineDkPaymentIdOrBuilderList();
  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_dk_payment_id = 11 [json_name = "ocrLineDkPaymentId"];</code>
   */
  com.google.protobuf.StringValueOrBuilder getOcrLineDkPaymentIdOrBuilder(
      int index);

  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_dk_creditor_id = 12 [json_name = "ocrLineDkCreditorId"];</code>
   */
  java.util.List<com.google.protobuf.StringValue> 
      getOcrLineDkCreditorIdList();
  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_dk_creditor_id = 12 [json_name = "ocrLineDkCreditorId"];</code>
   */
  com.google.protobuf.StringValue getOcrLineDkCreditorId(int index);
  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_dk_creditor_id = 12 [json_name = "ocrLineDkCreditorId"];</code>
   */
  int getOcrLineDkCreditorIdCount();
  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_dk_creditor_id = 12 [json_name = "ocrLineDkCreditorId"];</code>
   */
  java.util.List<? extends com.google.protobuf.StringValueOrBuilder> 
      getOcrLineDkCreditorIdOrBuilderList();
  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_dk_creditor_id = 12 [json_name = "ocrLineDkCreditorId"];</code>
   */
  com.google.protobuf.StringValueOrBuilder getOcrLineDkCreditorIdOrBuilder(
      int index);

  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_se_payment_id = 13 [json_name = "ocrLineSePaymentId"];</code>
   */
  java.util.List<com.google.protobuf.StringValue> 
      getOcrLineSePaymentIdList();
  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_se_payment_id = 13 [json_name = "ocrLineSePaymentId"];</code>
   */
  com.google.protobuf.StringValue getOcrLineSePaymentId(int index);
  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_se_payment_id = 13 [json_name = "ocrLineSePaymentId"];</code>
   */
  int getOcrLineSePaymentIdCount();
  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_se_payment_id = 13 [json_name = "ocrLineSePaymentId"];</code>
   */
  java.util.List<? extends com.google.protobuf.StringValueOrBuilder> 
      getOcrLineSePaymentIdOrBuilderList();
  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_se_payment_id = 13 [json_name = "ocrLineSePaymentId"];</code>
   */
  com.google.protobuf.StringValueOrBuilder getOcrLineSePaymentIdOrBuilder(
      int index);

  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_se_bankgiro_creditor_id = 14 [json_name = "ocrLineSeBankgiroCreditorId"];</code>
   */
  java.util.List<com.google.protobuf.StringValue> 
      getOcrLineSeBankgiroCreditorIdList();
  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_se_bankgiro_creditor_id = 14 [json_name = "ocrLineSeBankgiroCreditorId"];</code>
   */
  com.google.protobuf.StringValue getOcrLineSeBankgiroCreditorId(int index);
  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_se_bankgiro_creditor_id = 14 [json_name = "ocrLineSeBankgiroCreditorId"];</code>
   */
  int getOcrLineSeBankgiroCreditorIdCount();
  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_se_bankgiro_creditor_id = 14 [json_name = "ocrLineSeBankgiroCreditorId"];</code>
   */
  java.util.List<? extends com.google.protobuf.StringValueOrBuilder> 
      getOcrLineSeBankgiroCreditorIdOrBuilderList();
  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_se_bankgiro_creditor_id = 14 [json_name = "ocrLineSeBankgiroCreditorId"];</code>
   */
  com.google.protobuf.StringValueOrBuilder getOcrLineSeBankgiroCreditorIdOrBuilder(
      int index);

  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_se_plusgiro_creditor_id = 15 [json_name = "ocrLineSePlusgiroCreditorId"];</code>
   */
  java.util.List<com.google.protobuf.StringValue> 
      getOcrLineSePlusgiroCreditorIdList();
  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_se_plusgiro_creditor_id = 15 [json_name = "ocrLineSePlusgiroCreditorId"];</code>
   */
  com.google.protobuf.StringValue getOcrLineSePlusgiroCreditorId(int index);
  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_se_plusgiro_creditor_id = 15 [json_name = "ocrLineSePlusgiroCreditorId"];</code>
   */
  int getOcrLineSePlusgiroCreditorIdCount();
  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_se_plusgiro_creditor_id = 15 [json_name = "ocrLineSePlusgiroCreditorId"];</code>
   */
  java.util.List<? extends com.google.protobuf.StringValueOrBuilder> 
      getOcrLineSePlusgiroCreditorIdOrBuilderList();
  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_se_plusgiro_creditor_id = 15 [json_name = "ocrLineSePlusgiroCreditorId"];</code>
   */
  com.google.protobuf.StringValueOrBuilder getOcrLineSePlusgiroCreditorIdOrBuilder(
      int index);

  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_no_payment_id = 16 [json_name = "ocrLineNoPaymentId"];</code>
   */
  java.util.List<com.google.protobuf.StringValue> 
      getOcrLineNoPaymentIdList();
  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_no_payment_id = 16 [json_name = "ocrLineNoPaymentId"];</code>
   */
  com.google.protobuf.StringValue getOcrLineNoPaymentId(int index);
  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_no_payment_id = 16 [json_name = "ocrLineNoPaymentId"];</code>
   */
  int getOcrLineNoPaymentIdCount();
  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_no_payment_id = 16 [json_name = "ocrLineNoPaymentId"];</code>
   */
  java.util.List<? extends com.google.protobuf.StringValueOrBuilder> 
      getOcrLineNoPaymentIdOrBuilderList();
  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_no_payment_id = 16 [json_name = "ocrLineNoPaymentId"];</code>
   */
  com.google.protobuf.StringValueOrBuilder getOcrLineNoPaymentIdOrBuilder(
      int index);

  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_fi_payment_id = 17 [json_name = "ocrLineFiPaymentId"];</code>
   */
  java.util.List<com.google.protobuf.StringValue> 
      getOcrLineFiPaymentIdList();
  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_fi_payment_id = 17 [json_name = "ocrLineFiPaymentId"];</code>
   */
  com.google.protobuf.StringValue getOcrLineFiPaymentId(int index);
  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_fi_payment_id = 17 [json_name = "ocrLineFiPaymentId"];</code>
   */
  int getOcrLineFiPaymentIdCount();
  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_fi_payment_id = 17 [json_name = "ocrLineFiPaymentId"];</code>
   */
  java.util.List<? extends com.google.protobuf.StringValueOrBuilder> 
      getOcrLineFiPaymentIdOrBuilderList();
  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_fi_payment_id = 17 [json_name = "ocrLineFiPaymentId"];</code>
   */
  com.google.protobuf.StringValueOrBuilder getOcrLineFiPaymentIdOrBuilder(
      int index);

  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_nl_payment_id = 18 [json_name = "ocrLineNlPaymentId"];</code>
   */
  java.util.List<com.google.protobuf.StringValue> 
      getOcrLineNlPaymentIdList();
  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_nl_payment_id = 18 [json_name = "ocrLineNlPaymentId"];</code>
   */
  com.google.protobuf.StringValue getOcrLineNlPaymentId(int index);
  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_nl_payment_id = 18 [json_name = "ocrLineNlPaymentId"];</code>
   */
  int getOcrLineNlPaymentIdCount();
  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_nl_payment_id = 18 [json_name = "ocrLineNlPaymentId"];</code>
   */
  java.util.List<? extends com.google.protobuf.StringValueOrBuilder> 
      getOcrLineNlPaymentIdOrBuilderList();
  /**
   * <code>repeated .google.protobuf.StringValue ocr_line_nl_payment_id = 18 [json_name = "ocrLineNlPaymentId"];</code>
   */
  com.google.protobuf.StringValueOrBuilder getOcrLineNlPaymentIdOrBuilder(
      int index);

  /**
   * <code>repeated .google.protobuf.StringValue supplier_corporate_id = 19 [json_name = "supplierCorporateId"];</code>
   */
  java.util.List<com.google.protobuf.StringValue> 
      getSupplierCorporateIdList();
  /**
   * <code>repeated .google.protobuf.StringValue supplier_corporate_id = 19 [json_name = "supplierCorporateId"];</code>
   */
  com.google.protobuf.StringValue getSupplierCorporateId(int index);
  /**
   * <code>repeated .google.protobuf.StringValue supplier_corporate_id = 19 [json_name = "supplierCorporateId"];</code>
   */
  int getSupplierCorporateIdCount();
  /**
   * <code>repeated .google.protobuf.StringValue supplier_corporate_id = 19 [json_name = "supplierCorporateId"];</code>
   */
  java.util.List<? extends com.google.protobuf.StringValueOrBuilder> 
      getSupplierCorporateIdOrBuilderList();
  /**
   * <code>repeated .google.protobuf.StringValue supplier_corporate_id = 19 [json_name = "supplierCorporateId"];</code>
   */
  com.google.protobuf.StringValueOrBuilder getSupplierCorporateIdOrBuilder(
      int index);

  /**
   * <code>repeated .google.protobuf.StringValue supplier_country_code = 20 [json_name = "supplierCountryCode"];</code>
   */
  java.util.List<com.google.protobuf.StringValue> 
      getSupplierCountryCodeList();
  /**
   * <code>repeated .google.protobuf.StringValue supplier_country_code = 20 [json_name = "supplierCountryCode"];</code>
   */
  com.google.protobuf.StringValue getSupplierCountryCode(int index);
  /**
   * <code>repeated .google.protobuf.StringValue supplier_country_code = 20 [json_name = "supplierCountryCode"];</code>
   */
  int getSupplierCountryCodeCount();
  /**
   * <code>repeated .google.protobuf.StringValue supplier_country_code = 20 [json_name = "supplierCountryCode"];</code>
   */
  java.util.List<? extends com.google.protobuf.StringValueOrBuilder> 
      getSupplierCountryCodeOrBuilderList();
  /**
   * <code>repeated .google.protobuf.StringValue supplier_country_code = 20 [json_name = "supplierCountryCode"];</code>
   */
  com.google.protobuf.StringValueOrBuilder getSupplierCountryCodeOrBuilder(
      int index);

  /**
   * <code>repeated .google.protobuf.StringValue invoice_number = 21 [json_name = "invoiceNumber"];</code>
   */
  java.util.List<com.google.protobuf.StringValue> 
      getInvoiceNumberList();
  /**
   * <code>repeated .google.protobuf.StringValue invoice_number = 21 [json_name = "invoiceNumber"];</code>
   */
  com.google.protobuf.StringValue getInvoiceNumber(int index);
  /**
   * <code>repeated .google.protobuf.StringValue invoice_number = 21 [json_name = "invoiceNumber"];</code>
   */
  int getInvoiceNumberCount();
  /**
   * <code>repeated .google.protobuf.StringValue invoice_number = 21 [json_name = "invoiceNumber"];</code>
   */
  java.util.List<? extends com.google.protobuf.StringValueOrBuilder> 
      getInvoiceNumberOrBuilderList();
  /**
   * <code>repeated .google.protobuf.StringValue invoice_number = 21 [json_name = "invoiceNumber"];</code>
   */
  com.google.protobuf.StringValueOrBuilder getInvoiceNumberOrBuilder(
      int index);

  /**
   * <code>repeated .google.protobuf.StringValue iban = 22 [json_name = "iban"];</code>
   */
  java.util.List<com.google.protobuf.StringValue> 
      getIbanList();
  /**
   * <code>repeated .google.protobuf.StringValue iban = 22 [json_name = "iban"];</code>
   */
  com.google.protobuf.StringValue getIban(int index);
  /**
   * <code>repeated .google.protobuf.StringValue iban = 22 [json_name = "iban"];</code>
   */
  int getIbanCount();
  /**
   * <code>repeated .google.protobuf.StringValue iban = 22 [json_name = "iban"];</code>
   */
  java.util.List<? extends com.google.protobuf.StringValueOrBuilder> 
      getIbanOrBuilderList();
  /**
   * <code>repeated .google.protobuf.StringValue iban = 22 [json_name = "iban"];</code>
   */
  com.google.protobuf.StringValueOrBuilder getIbanOrBuilder(
      int index);

  /**
   * <code>repeated .google.protobuf.StringValue order_reference = 23 [json_name = "orderReference"];</code>
   */
  java.util.List<com.google.protobuf.StringValue> 
      getOrderReferenceList();
  /**
   * <code>repeated .google.protobuf.StringValue order_reference = 23 [json_name = "orderReference"];</code>
   */
  com.google.protobuf.StringValue getOrderReference(int index);
  /**
   * <code>repeated .google.protobuf.StringValue order_reference = 23 [json_name = "orderReference"];</code>
   */
  int getOrderReferenceCount();
  /**
   * <code>repeated .google.protobuf.StringValue order_reference = 23 [json_name = "orderReference"];</code>
   */
  java.util.List<? extends com.google.protobuf.StringValueOrBuilder> 
      getOrderReferenceOrBuilderList();
  /**
   * <code>repeated .google.protobuf.StringValue order_reference = 23 [json_name = "orderReference"];</code>
   */
  com.google.protobuf.StringValueOrBuilder getOrderReferenceOrBuilder(
      int index);

  /**
   * <code>repeated .google.protobuf.StringValue bank_account_number = 24 [json_name = "bankAccountNumber"];</code>
   */
  java.util.List<com.google.protobuf.StringValue> 
      getBankAccountNumberList();
  /**
   * <code>repeated .google.protobuf.StringValue bank_account_number = 24 [json_name = "bankAccountNumber"];</code>
   */
  com.google.protobuf.StringValue getBankAccountNumber(int index);
  /**
   * <code>repeated .google.protobuf.StringValue bank_account_number = 24 [json_name = "bankAccountNumber"];</code>
   */
  int getBankAccountNumberCount();
  /**
   * <code>repeated .google.protobuf.StringValue bank_account_number = 24 [json_name = "bankAccountNumber"];</code>
   */
  java.util.List<? extends com.google.protobuf.StringValueOrBuilder> 
      getBankAccountNumberOrBuilderList();
  /**
   * <code>repeated .google.protobuf.StringValue bank_account_number = 24 [json_name = "bankAccountNumber"];</code>
   */
  com.google.protobuf.StringValueOrBuilder getBankAccountNumberOrBuilder(
      int index);

  /**
   * <code>repeated .google.protobuf.StringValue bank_registration_number = 25 [json_name = "bankRegistrationNumber"];</code>
   */
  java.util.List<com.google.protobuf.StringValue> 
      getBankRegistrationNumberList();
  /**
   * <code>repeated .google.protobuf.StringValue bank_registration_number = 25 [json_name = "bankRegistrationNumber"];</code>
   */
  com.google.protobuf.StringValue getBankRegistrationNumber(int index);
  /**
   * <code>repeated .google.protobuf.StringValue bank_registration_number = 25 [json_name = "bankRegistrationNumber"];</code>
   */
  int getBankRegistrationNumberCount();
  /**
   * <code>repeated .google.protobuf.StringValue bank_registration_number = 25 [json_name = "bankRegistrationNumber"];</code>
   */
  java.util.List<? extends com.google.protobuf.StringValueOrBuilder> 
      getBankRegistrationNumberOrBuilderList();
  /**
   * <code>repeated .google.protobuf.StringValue bank_registration_number = 25 [json_name = "bankRegistrationNumber"];</code>
   */
  com.google.protobuf.StringValueOrBuilder getBankRegistrationNumberOrBuilder(
      int index);

  /**
   * <code>repeated .google.protobuf.StringValue supplier_name = 26 [json_name = "supplierName"];</code>
   */
  java.util.List<com.google.protobuf.StringValue> 
      getSupplierNameList();
  /**
   * <code>repeated .google.protobuf.StringValue supplier_name = 26 [json_name = "supplierName"];</code>
   */
  com.google.protobuf.StringValue getSupplierName(int index);
  /**
   * <code>repeated .google.protobuf.StringValue supplier_name = 26 [json_name = "supplierName"];</code>
   */
  int getSupplierNameCount();
  /**
   * <code>repeated .google.protobuf.StringValue supplier_name = 26 [json_name = "supplierName"];</code>
   */
  java.util.List<? extends com.google.protobuf.StringValueOrBuilder> 
      getSupplierNameOrBuilderList();
  /**
   * <code>repeated .google.protobuf.StringValue supplier_name = 26 [json_name = "supplierName"];</code>
   */
  com.google.protobuf.StringValueOrBuilder getSupplierNameOrBuilder(
      int index);

  /**
   * <code>repeated .google.protobuf.StringValue bic = 27 [json_name = "bic"];</code>
   */
  java.util.List<com.google.protobuf.StringValue> 
      getBicList();
  /**
   * <code>repeated .google.protobuf.StringValue bic = 27 [json_name = "bic"];</code>
   */
  com.google.protobuf.StringValue getBic(int index);
  /**
   * <code>repeated .google.protobuf.StringValue bic = 27 [json_name = "bic"];</code>
   */
  int getBicCount();
  /**
   * <code>repeated .google.protobuf.StringValue bic = 27 [json_name = "bic"];</code>
   */
  java.util.List<? extends com.google.protobuf.StringValueOrBuilder> 
      getBicOrBuilderList();
  /**
   * <code>repeated .google.protobuf.StringValue bic = 27 [json_name = "bic"];</code>
   */
  com.google.protobuf.StringValueOrBuilder getBicOrBuilder(
      int index);

  /**
   * <code>repeated .google.protobuf.StringValue document_number = 28 [json_name = "documentNumber"];</code>
   */
  java.util.List<com.google.protobuf.StringValue> 
      getDocumentNumberList();
  /**
   * <code>repeated .google.protobuf.StringValue document_number = 28 [json_name = "documentNumber"];</code>
   */
  com.google.protobuf.StringValue getDocumentNumber(int index);
  /**
   * <code>repeated .google.protobuf.StringValue document_number = 28 [json_name = "documentNumber"];</code>
   */
  int getDocumentNumberCount();
  /**
   * <code>repeated .google.protobuf.StringValue document_number = 28 [json_name = "documentNumber"];</code>
   */
  java.util.List<? extends com.google.protobuf.StringValueOrBuilder> 
      getDocumentNumberOrBuilderList();
  /**
   * <code>repeated .google.protobuf.StringValue document_number = 28 [json_name = "documentNumber"];</code>
   */
  com.google.protobuf.StringValueOrBuilder getDocumentNumberOrBuilder(
      int index);

  /**
   * <code>repeated .google.type.Date document_date = 29 [json_name = "documentDate", (.gen_bq_schema.bigquery) = { ... }</code>
   */
  java.util.List<com.google.type.Date> 
      getDocumentDateList();
  /**
   * <code>repeated .google.type.Date document_date = 29 [json_name = "documentDate", (.gen_bq_schema.bigquery) = { ... }</code>
   */
  com.google.type.Date getDocumentDate(int index);
  /**
   * <code>repeated .google.type.Date document_date = 29 [json_name = "documentDate", (.gen_bq_schema.bigquery) = { ... }</code>
   */
  int getDocumentDateCount();
  /**
   * <code>repeated .google.type.Date document_date = 29 [json_name = "documentDate", (.gen_bq_schema.bigquery) = { ... }</code>
   */
  java.util.List<? extends com.google.type.DateOrBuilder> 
      getDocumentDateOrBuilderList();
  /**
   * <code>repeated .google.type.Date document_date = 29 [json_name = "documentDate", (.gen_bq_schema.bigquery) = { ... }</code>
   */
  com.google.type.DateOrBuilder getDocumentDateOrBuilder(
      int index);

  /**
   * <code>repeated .google.protobuf.StringValue order_number = 30 [json_name = "orderNumber"];</code>
   */
  java.util.List<com.google.protobuf.StringValue> 
      getOrderNumberList();
  /**
   * <code>repeated .google.protobuf.StringValue order_number = 30 [json_name = "orderNumber"];</code>
   */
  com.google.protobuf.StringValue getOrderNumber(int index);
  /**
   * <code>repeated .google.protobuf.StringValue order_number = 30 [json_name = "orderNumber"];</code>
   */
  int getOrderNumberCount();
  /**
   * <code>repeated .google.protobuf.StringValue order_number = 30 [json_name = "orderNumber"];</code>
   */
  java.util.List<? extends com.google.protobuf.StringValueOrBuilder> 
      getOrderNumberOrBuilderList();
  /**
   * <code>repeated .google.protobuf.StringValue order_number = 30 [json_name = "orderNumber"];</code>
   */
  com.google.protobuf.StringValueOrBuilder getOrderNumberOrBuilder(
      int index);

  /**
   * <code>repeated .google.protobuf.StringValue supplier_vat_number = 31 [json_name = "supplierVatNumber"];</code>
   */
  java.util.List<com.google.protobuf.StringValue> 
      getSupplierVatNumberList();
  /**
   * <code>repeated .google.protobuf.StringValue supplier_vat_number = 31 [json_name = "supplierVatNumber"];</code>
   */
  com.google.protobuf.StringValue getSupplierVatNumber(int index);
  /**
   * <code>repeated .google.protobuf.StringValue supplier_vat_number = 31 [json_name = "supplierVatNumber"];</code>
   */
  int getSupplierVatNumberCount();
  /**
   * <code>repeated .google.protobuf.StringValue supplier_vat_number = 31 [json_name = "supplierVatNumber"];</code>
   */
  java.util.List<? extends com.google.protobuf.StringValueOrBuilder> 
      getSupplierVatNumberOrBuilderList();
  /**
   * <code>repeated .google.protobuf.StringValue supplier_vat_number = 31 [json_name = "supplierVatNumber"];</code>
   */
  com.google.protobuf.StringValueOrBuilder getSupplierVatNumberOrBuilder(
      int index);

  /**
   * <code>repeated .google.protobuf.StringValue supplier_organisation_number = 32 [json_name = "supplierOrganisationNumber"];</code>
   */
  java.util.List<com.google.protobuf.StringValue> 
      getSupplierOrganisationNumberList();
  /**
   * <code>repeated .google.protobuf.StringValue supplier_organisation_number = 32 [json_name = "supplierOrganisationNumber"];</code>
   */
  com.google.protobuf.StringValue getSupplierOrganisationNumber(int index);
  /**
   * <code>repeated .google.protobuf.StringValue supplier_organisation_number = 32 [json_name = "supplierOrganisationNumber"];</code>
   */
  int getSupplierOrganisationNumberCount();
  /**
   * <code>repeated .google.protobuf.StringValue supplier_organisation_number = 32 [json_name = "supplierOrganisationNumber"];</code>
   */
  java.util.List<? extends com.google.protobuf.StringValueOrBuilder> 
      getSupplierOrganisationNumberOrBuilderList();
  /**
   * <code>repeated .google.protobuf.StringValue supplier_organisation_number = 32 [json_name = "supplierOrganisationNumber"];</code>
   */
  com.google.protobuf.StringValueOrBuilder getSupplierOrganisationNumberOrBuilder(
      int index);

  /**
   * <code>repeated .google.protobuf.StringValue supplier_address = 33 [json_name = "supplierAddress"];</code>
   */
  java.util.List<com.google.protobuf.StringValue> 
      getSupplierAddressList();
  /**
   * <code>repeated .google.protobuf.StringValue supplier_address = 33 [json_name = "supplierAddress"];</code>
   */
  com.google.protobuf.StringValue getSupplierAddress(int index);
  /**
   * <code>repeated .google.protobuf.StringValue supplier_address = 33 [json_name = "supplierAddress"];</code>
   */
  int getSupplierAddressCount();
  /**
   * <code>repeated .google.protobuf.StringValue supplier_address = 33 [json_name = "supplierAddress"];</code>
   */
  java.util.List<? extends com.google.protobuf.StringValueOrBuilder> 
      getSupplierAddressOrBuilderList();
  /**
   * <code>repeated .google.protobuf.StringValue supplier_address = 33 [json_name = "supplierAddress"];</code>
   */
  com.google.protobuf.StringValueOrBuilder getSupplierAddressOrBuilder(
      int index);

  /**
   * <code>repeated .google.protobuf.StringValue customer_number = 34 [json_name = "customerNumber"];</code>
   */
  java.util.List<com.google.protobuf.StringValue> 
      getCustomerNumberList();
  /**
   * <code>repeated .google.protobuf.StringValue customer_number = 34 [json_name = "customerNumber"];</code>
   */
  com.google.protobuf.StringValue getCustomerNumber(int index);
  /**
   * <code>repeated .google.protobuf.StringValue customer_number = 34 [json_name = "customerNumber"];</code>
   */
  int getCustomerNumberCount();
  /**
   * <code>repeated .google.protobuf.StringValue customer_number = 34 [json_name = "customerNumber"];</code>
   */
  java.util.List<? extends com.google.protobuf.StringValueOrBuilder> 
      getCustomerNumberOrBuilderList();
  /**
   * <code>repeated .google.protobuf.StringValue customer_number = 34 [json_name = "customerNumber"];</code>
   */
  com.google.protobuf.StringValueOrBuilder getCustomerNumberOrBuilder(
      int index);
}