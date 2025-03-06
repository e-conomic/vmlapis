// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: ssn/pdfservice/v1/pdfservice.proto
// Protobuf Java Version: 4.29.3

package ai.visma.ssn.pdfservice.v1;

public interface RasterizePdfRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:ssn.pdfservice.v1.RasterizePdfRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>bytes data = 1 [json_name = "data"];</code>
   * @return The data.
   */
  com.google.protobuf.ByteString getData();

  /**
   * <code>uint32 dpi = 2 [json_name = "dpi"];</code>
   * @return The dpi.
   */
  int getDpi();

  /**
   * <code>.ssn.pdfservice.v1.RasterizePdfRequest.Format format = 3 [json_name = "format"];</code>
   * @return The enum numeric value on the wire for format.
   */
  int getFormatValue();
  /**
   * <code>.ssn.pdfservice.v1.RasterizePdfRequest.Format format = 3 [json_name = "format"];</code>
   * @return The format.
   */
  ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.Format getFormat();

  /**
   * <code>.ssn.pdfservice.v1.RasterizePdfRequest.ColorSpace color = 4 [json_name = "color"];</code>
   * @return The enum numeric value on the wire for color.
   */
  int getColorValue();
  /**
   * <code>.ssn.pdfservice.v1.RasterizePdfRequest.ColorSpace color = 4 [json_name = "color"];</code>
   * @return The color.
   */
  ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.ColorSpace getColor();

  /**
   * <code>.ssn.pdfservice.v1.RasterizePdfRequest.PageOption pages = 5 [json_name = "pages"];</code>
   * @return The enum numeric value on the wire for pages.
   */
  int getPagesValue();
  /**
   * <code>.ssn.pdfservice.v1.RasterizePdfRequest.PageOption pages = 5 [json_name = "pages"];</code>
   * @return The pages.
   */
  ai.visma.ssn.pdfservice.v1.RasterizePdfRequest.PageOption getPages();
}
