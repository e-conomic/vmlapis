// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: ssn/type/candidate.proto

package ai.visma.ssn.type;

public interface PurchaseLineCandidateOrBuilder extends
    // @@protoc_insertion_point(interface_extends:ssn.type.PurchaseLineCandidate)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * A reference to the page where the line was found.
   * page_ref start from 1.
   * </pre>
   *
   * <code>uint32 page_ref = 1 [json_name = "pageRef"];</code>
   * @return The pageRef.
   */
  int getPageRef();

  /**
   * <pre>
   * Code is an ID that supplier uses to identify the item
   * </pre>
   *
   * <code>string code = 2 [json_name = "code"];</code>
   * @return The code.
   */
  java.lang.String getCode();
  /**
   * <pre>
   * Code is an ID that supplier uses to identify the item
   * </pre>
   *
   * <code>string code = 2 [json_name = "code"];</code>
   * @return The bytes for code.
   */
  com.google.protobuf.ByteString
      getCodeBytes();

  /**
   * <pre>
   * Description is a piece of text that describes the item
   * </pre>
   *
   * <code>string description = 3 [json_name = "description"];</code>
   * @return The description.
   */
  java.lang.String getDescription();
  /**
   * <pre>
   * Description is a piece of text that describes the item
   * </pre>
   *
   * <code>string description = 3 [json_name = "description"];</code>
   * @return The bytes for description.
   */
  com.google.protobuf.ByteString
      getDescriptionBytes();

  /**
   * <pre>
   * Quantity is the number of items
   * </pre>
   *
   * <code>string quantity = 4 [json_name = "quantity"];</code>
   * @return The quantity.
   */
  java.lang.String getQuantity();
  /**
   * <pre>
   * Quantity is the number of items
   * </pre>
   *
   * <code>string quantity = 4 [json_name = "quantity"];</code>
   * @return The bytes for quantity.
   */
  com.google.protobuf.ByteString
      getQuantityBytes();

  /**
   * <pre>
   * ItemNumber is the number of the item
   * </pre>
   *
   * <code>string item_number = 5 [json_name = "itemNumber"];</code>
   * @return The itemNumber.
   */
  java.lang.String getItemNumber();
  /**
   * <pre>
   * ItemNumber is the number of the item
   * </pre>
   *
   * <code>string item_number = 5 [json_name = "itemNumber"];</code>
   * @return The bytes for itemNumber.
   */
  com.google.protobuf.ByteString
      getItemNumberBytes();

  /**
   * <pre>
   * Unit is the unit of the item
   * </pre>
   *
   * <code>string unit = 6 [json_name = "unit"];</code>
   * @return The unit.
   */
  java.lang.String getUnit();
  /**
   * <pre>
   * Unit is the unit of the item
   * </pre>
   *
   * <code>string unit = 6 [json_name = "unit"];</code>
   * @return The bytes for unit.
   */
  com.google.protobuf.ByteString
      getUnitBytes();

  /**
   * <pre>
   * Total discount is the total discount of the line
   * </pre>
   *
   * <code>string total_discount = 7 [json_name = "totalDiscount"];</code>
   * @return The totalDiscount.
   */
  java.lang.String getTotalDiscount();
  /**
   * <pre>
   * Total discount is the total discount of the line
   * </pre>
   *
   * <code>string total_discount = 7 [json_name = "totalDiscount"];</code>
   * @return The bytes for totalDiscount.
   */
  com.google.protobuf.ByteString
      getTotalDiscountBytes();

  /**
   * <pre>
   * Percentage discount is the percentage discount of the line
   * </pre>
   *
   * <code>string percentage_discount = 8 [json_name = "percentageDiscount"];</code>
   * @return The percentageDiscount.
   */
  java.lang.String getPercentageDiscount();
  /**
   * <pre>
   * Percentage discount is the percentage discount of the line
   * </pre>
   *
   * <code>string percentage_discount = 8 [json_name = "percentageDiscount"];</code>
   * @return The bytes for percentageDiscount.
   */
  com.google.protobuf.ByteString
      getPercentageDiscountBytes();

  /**
   * <pre>
   * Total incl vat is the total price of the line including vat
   * </pre>
   *
   * <code>string total_incl_vat = 9 [json_name = "totalInclVat"];</code>
   * @return The totalInclVat.
   */
  java.lang.String getTotalInclVat();
  /**
   * <pre>
   * Total incl vat is the total price of the line including vat
   * </pre>
   *
   * <code>string total_incl_vat = 9 [json_name = "totalInclVat"];</code>
   * @return The bytes for totalInclVat.
   */
  com.google.protobuf.ByteString
      getTotalInclVatBytes();

  /**
   * <pre>
   * Total excl vat is the total price of the line excluding vat
   * </pre>
   *
   * <code>string total_excl_vat = 10 [json_name = "totalExclVat"];</code>
   * @return The totalExclVat.
   */
  java.lang.String getTotalExclVat();
  /**
   * <pre>
   * Total excl vat is the total price of the line excluding vat
   * </pre>
   *
   * <code>string total_excl_vat = 10 [json_name = "totalExclVat"];</code>
   * @return The bytes for totalExclVat.
   */
  com.google.protobuf.ByteString
      getTotalExclVatBytes();

  /**
   * <pre>
   * Total vat is the total vat of the line
   * </pre>
   *
   * <code>string total_vat = 11 [json_name = "totalVat"];</code>
   * @return The totalVat.
   */
  java.lang.String getTotalVat();
  /**
   * <pre>
   * Total vat is the total vat of the line
   * </pre>
   *
   * <code>string total_vat = 11 [json_name = "totalVat"];</code>
   * @return The bytes for totalVat.
   */
  com.google.protobuf.ByteString
      getTotalVatBytes();

  /**
   * <pre>
   * Percentage vat is the percentage vat of the line
   * </pre>
   *
   * <code>string percentage_vat = 12 [json_name = "percentageVat"];</code>
   * @return The percentageVat.
   */
  java.lang.String getPercentageVat();
  /**
   * <pre>
   * Percentage vat is the percentage vat of the line
   * </pre>
   *
   * <code>string percentage_vat = 12 [json_name = "percentageVat"];</code>
   * @return The bytes for percentageVat.
   */
  com.google.protobuf.ByteString
      getPercentageVatBytes();

  /**
   * <pre>
   * Unit price incl vat is the unit price of the line including vat
   * </pre>
   *
   * <code>string unit_price_incl_vat = 13 [json_name = "unitPriceInclVat"];</code>
   * @return The unitPriceInclVat.
   */
  java.lang.String getUnitPriceInclVat();
  /**
   * <pre>
   * Unit price incl vat is the unit price of the line including vat
   * </pre>
   *
   * <code>string unit_price_incl_vat = 13 [json_name = "unitPriceInclVat"];</code>
   * @return The bytes for unitPriceInclVat.
   */
  com.google.protobuf.ByteString
      getUnitPriceInclVatBytes();

  /**
   * <pre>
   * Unit price excl vat is the unit price of the line excluding vat
   * </pre>
   *
   * <code>string unit_price_excl_vat = 14 [json_name = "unitPriceExclVat"];</code>
   * @return The unitPriceExclVat.
   */
  java.lang.String getUnitPriceExclVat();
  /**
   * <pre>
   * Unit price excl vat is the unit price of the line excluding vat
   * </pre>
   *
   * <code>string unit_price_excl_vat = 14 [json_name = "unitPriceExclVat"];</code>
   * @return The bytes for unitPriceExclVat.
   */
  com.google.protobuf.ByteString
      getUnitPriceExclVatBytes();
}