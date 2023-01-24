// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: asgt/v2/type/data.proto

package ai.visma.asgt.v2.type;

public interface DataOrBuilder extends
    // @@protoc_insertion_point(interface_extends:asgt.v2.type.Data)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * Transaction-level information; at this time used only with bank transactions
   * </pre>
   *
   * <code>.asgt.v2.type.Transaction transaction = 1 [json_name = "transaction"];</code>
   * @return Whether the transaction field is set.
   */
  boolean hasTransaction();
  /**
   * <pre>
   * Transaction-level information; at this time used only with bank transactions
   * </pre>
   *
   * <code>.asgt.v2.type.Transaction transaction = 1 [json_name = "transaction"];</code>
   * @return The transaction.
   */
  ai.visma.asgt.v2.type.Transaction getTransaction();
  /**
   * <pre>
   * Transaction-level information; at this time used only with bank transactions
   * </pre>
   *
   * <code>.asgt.v2.type.Transaction transaction = 1 [json_name = "transaction"];</code>
   */
  ai.visma.asgt.v2.type.TransactionOrBuilder getTransactionOrBuilder();

  /**
   * <pre>
   * Invoice-level information for e-invoices and scanned invoices and receipts
   * </pre>
   *
   * <code>.asgt.v2.type.Invoice invoice = 2 [json_name = "invoice"];</code>
   * @return Whether the invoice field is set.
   */
  boolean hasInvoice();
  /**
   * <pre>
   * Invoice-level information for e-invoices and scanned invoices and receipts
   * </pre>
   *
   * <code>.asgt.v2.type.Invoice invoice = 2 [json_name = "invoice"];</code>
   * @return The invoice.
   */
  ai.visma.asgt.v2.type.Invoice getInvoice();
  /**
   * <pre>
   * Invoice-level information for e-invoices and scanned invoices and receipts
   * </pre>
   *
   * <code>.asgt.v2.type.Invoice invoice = 2 [json_name = "invoice"];</code>
   */
  ai.visma.asgt.v2.type.InvoiceOrBuilder getInvoiceOrBuilder();

  /**
   * <pre>
   * Line-level information for e-invoices; use one sample per invoice line
   * </pre>
   *
   * <code>.asgt.v2.type.InvoiceLine invoice_line = 3 [json_name = "invoiceLine"];</code>
   * @return Whether the invoiceLine field is set.
   */
  boolean hasInvoiceLine();
  /**
   * <pre>
   * Line-level information for e-invoices; use one sample per invoice line
   * </pre>
   *
   * <code>.asgt.v2.type.InvoiceLine invoice_line = 3 [json_name = "invoiceLine"];</code>
   * @return The invoiceLine.
   */
  ai.visma.asgt.v2.type.InvoiceLine getInvoiceLine();
  /**
   * <pre>
   * Line-level information for e-invoices; use one sample per invoice line
   * </pre>
   *
   * <code>.asgt.v2.type.InvoiceLine invoice_line = 3 [json_name = "invoiceLine"];</code>
   */
  ai.visma.asgt.v2.type.InvoiceLineOrBuilder getInvoiceLineOrBuilder();

  public ai.visma.asgt.v2.type.Data.DataStructureCase getDataStructureCase();
}