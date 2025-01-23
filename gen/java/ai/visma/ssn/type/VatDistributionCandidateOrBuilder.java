// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: ssn/type/candidate.proto

package ai.visma.ssn.type;

public interface VatDistributionCandidateOrBuilder extends
    // @@protoc_insertion_point(interface_extends:ssn.type.VatDistributionCandidate)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * The vat distribution candidate percentage
   * </pre>
   *
   * <code>string percentage = 1 [json_name = "percentage"];</code>
   * @return The percentage.
   */
  java.lang.String getPercentage();
  /**
   * <pre>
   * The vat distribution candidate percentage
   * </pre>
   *
   * <code>string percentage = 1 [json_name = "percentage"];</code>
   * @return The bytes for percentage.
   */
  com.google.protobuf.ByteString
      getPercentageBytes();

  /**
   * <pre>
   * The vat distribution candidate amount
   * </pre>
   *
   * <code>string amount = 2 [json_name = "amount"];</code>
   * @return The amount.
   */
  java.lang.String getAmount();
  /**
   * <pre>
   * The vat distribution candidate amount
   * </pre>
   *
   * <code>string amount = 2 [json_name = "amount"];</code>
   * @return The bytes for amount.
   */
  com.google.protobuf.ByteString
      getAmountBytes();

  /**
   * <pre>
   * Model metadata
   * </pre>
   *
   * <code>.ssn.type.ModelSpec model_metadata = 3 [json_name = "modelMetadata"];</code>
   * @return Whether the modelMetadata field is set.
   */
  boolean hasModelMetadata();
  /**
   * <pre>
   * Model metadata
   * </pre>
   *
   * <code>.ssn.type.ModelSpec model_metadata = 3 [json_name = "modelMetadata"];</code>
   * @return The modelMetadata.
   */
  ai.visma.ssn.type.ModelSpec getModelMetadata();
  /**
   * <pre>
   * Model metadata
   * </pre>
   *
   * <code>.ssn.type.ModelSpec model_metadata = 3 [json_name = "modelMetadata"];</code>
   */
  ai.visma.ssn.type.ModelSpecOrBuilder getModelMetadataOrBuilder();

  /**
   * <pre>
   * A reference to the page where the candidate was found.
   * </pre>
   *
   * <code>uint32 page_ref = 4 [json_name = "pageRef"];</code>
   * @return The pageRef.
   */
  int getPageRef();

  /**
   * <pre>
   * The vat distribution candidate excl vat
   * </pre>
   *
   * <code>string excl_vat = 5 [json_name = "exclVat"];</code>
   * @return The exclVat.
   */
  java.lang.String getExclVat();
  /**
   * <pre>
   * The vat distribution candidate excl vat
   * </pre>
   *
   * <code>string excl_vat = 5 [json_name = "exclVat"];</code>
   * @return The bytes for exclVat.
   */
  com.google.protobuf.ByteString
      getExclVatBytes();

  /**
   * <pre>
   * The vat distribution candidate incl vat
   * </pre>
   *
   * <code>string incl_vat = 6 [json_name = "inclVat"];</code>
   * @return The inclVat.
   */
  java.lang.String getInclVat();
  /**
   * <pre>
   * The vat distribution candidate incl vat
   * </pre>
   *
   * <code>string incl_vat = 6 [json_name = "inclVat"];</code>
   * @return The bytes for inclVat.
   */
  com.google.protobuf.ByteString
      getInclVatBytes();
}
