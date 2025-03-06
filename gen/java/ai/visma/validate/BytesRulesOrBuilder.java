// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: validate/validate.proto
// Protobuf Java Version: 4.29.3

package ai.visma.validate;

public interface BytesRulesOrBuilder extends
    // @@protoc_insertion_point(interface_extends:validate.BytesRules)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * Const specifies that this field must be exactly the specified value
   * </pre>
   *
   * <code>optional bytes const = 1 [json_name = "const"];</code>
   * @return Whether the const field is set.
   */
  boolean hasConst();
  /**
   * <pre>
   * Const specifies that this field must be exactly the specified value
   * </pre>
   *
   * <code>optional bytes const = 1 [json_name = "const"];</code>
   * @return The const.
   */
  com.google.protobuf.ByteString getConst();

  /**
   * <pre>
   * Len specifies that this field must be the specified number of bytes
   * </pre>
   *
   * <code>optional uint64 len = 13 [json_name = "len"];</code>
   * @return Whether the len field is set.
   */
  boolean hasLen();
  /**
   * <pre>
   * Len specifies that this field must be the specified number of bytes
   * </pre>
   *
   * <code>optional uint64 len = 13 [json_name = "len"];</code>
   * @return The len.
   */
  long getLen();

  /**
   * <pre>
   * MinLen specifies that this field must be the specified number of bytes
   * at a minimum
   * </pre>
   *
   * <code>optional uint64 min_len = 2 [json_name = "minLen"];</code>
   * @return Whether the minLen field is set.
   */
  boolean hasMinLen();
  /**
   * <pre>
   * MinLen specifies that this field must be the specified number of bytes
   * at a minimum
   * </pre>
   *
   * <code>optional uint64 min_len = 2 [json_name = "minLen"];</code>
   * @return The minLen.
   */
  long getMinLen();

  /**
   * <pre>
   * MaxLen specifies that this field must be the specified number of bytes
   * at a maximum
   * </pre>
   *
   * <code>optional uint64 max_len = 3 [json_name = "maxLen"];</code>
   * @return Whether the maxLen field is set.
   */
  boolean hasMaxLen();
  /**
   * <pre>
   * MaxLen specifies that this field must be the specified number of bytes
   * at a maximum
   * </pre>
   *
   * <code>optional uint64 max_len = 3 [json_name = "maxLen"];</code>
   * @return The maxLen.
   */
  long getMaxLen();

  /**
   * <pre>
   * Pattern specifes that this field must match against the specified
   * regular expression (RE2 syntax). The included expression should elide
   * any delimiters.
   * </pre>
   *
   * <code>optional string pattern = 4 [json_name = "pattern"];</code>
   * @return Whether the pattern field is set.
   */
  boolean hasPattern();
  /**
   * <pre>
   * Pattern specifes that this field must match against the specified
   * regular expression (RE2 syntax). The included expression should elide
   * any delimiters.
   * </pre>
   *
   * <code>optional string pattern = 4 [json_name = "pattern"];</code>
   * @return The pattern.
   */
  java.lang.String getPattern();
  /**
   * <pre>
   * Pattern specifes that this field must match against the specified
   * regular expression (RE2 syntax). The included expression should elide
   * any delimiters.
   * </pre>
   *
   * <code>optional string pattern = 4 [json_name = "pattern"];</code>
   * @return The bytes for pattern.
   */
  com.google.protobuf.ByteString
      getPatternBytes();

  /**
   * <pre>
   * Prefix specifies that this field must have the specified bytes at the
   * beginning of the string.
   * </pre>
   *
   * <code>optional bytes prefix = 5 [json_name = "prefix"];</code>
   * @return Whether the prefix field is set.
   */
  boolean hasPrefix();
  /**
   * <pre>
   * Prefix specifies that this field must have the specified bytes at the
   * beginning of the string.
   * </pre>
   *
   * <code>optional bytes prefix = 5 [json_name = "prefix"];</code>
   * @return The prefix.
   */
  com.google.protobuf.ByteString getPrefix();

  /**
   * <pre>
   * Suffix specifies that this field must have the specified bytes at the
   * end of the string.
   * </pre>
   *
   * <code>optional bytes suffix = 6 [json_name = "suffix"];</code>
   * @return Whether the suffix field is set.
   */
  boolean hasSuffix();
  /**
   * <pre>
   * Suffix specifies that this field must have the specified bytes at the
   * end of the string.
   * </pre>
   *
   * <code>optional bytes suffix = 6 [json_name = "suffix"];</code>
   * @return The suffix.
   */
  com.google.protobuf.ByteString getSuffix();

  /**
   * <pre>
   * Contains specifies that this field must have the specified bytes
   * anywhere in the string.
   * </pre>
   *
   * <code>optional bytes contains = 7 [json_name = "contains"];</code>
   * @return Whether the contains field is set.
   */
  boolean hasContains();
  /**
   * <pre>
   * Contains specifies that this field must have the specified bytes
   * anywhere in the string.
   * </pre>
   *
   * <code>optional bytes contains = 7 [json_name = "contains"];</code>
   * @return The contains.
   */
  com.google.protobuf.ByteString getContains();

  /**
   * <pre>
   * In specifies that this field must be equal to one of the specified
   * values
   * </pre>
   *
   * <code>repeated bytes in = 8 [json_name = "in"];</code>
   * @return A list containing the in.
   */
  java.util.List<com.google.protobuf.ByteString> getInList();
  /**
   * <pre>
   * In specifies that this field must be equal to one of the specified
   * values
   * </pre>
   *
   * <code>repeated bytes in = 8 [json_name = "in"];</code>
   * @return The count of in.
   */
  int getInCount();
  /**
   * <pre>
   * In specifies that this field must be equal to one of the specified
   * values
   * </pre>
   *
   * <code>repeated bytes in = 8 [json_name = "in"];</code>
   * @param index The index of the element to return.
   * @return The in at the given index.
   */
  com.google.protobuf.ByteString getIn(int index);

  /**
   * <pre>
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   * </pre>
   *
   * <code>repeated bytes not_in = 9 [json_name = "notIn"];</code>
   * @return A list containing the notIn.
   */
  java.util.List<com.google.protobuf.ByteString> getNotInList();
  /**
   * <pre>
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   * </pre>
   *
   * <code>repeated bytes not_in = 9 [json_name = "notIn"];</code>
   * @return The count of notIn.
   */
  int getNotInCount();
  /**
   * <pre>
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   * </pre>
   *
   * <code>repeated bytes not_in = 9 [json_name = "notIn"];</code>
   * @param index The index of the element to return.
   * @return The notIn at the given index.
   */
  com.google.protobuf.ByteString getNotIn(int index);

  /**
   * <pre>
   * Ip specifies that the field must be a valid IP (v4 or v6) address in
   * byte format
   * </pre>
   *
   * <code>bool ip = 10 [json_name = "ip"];</code>
   * @return Whether the ip field is set.
   */
  boolean hasIp();
  /**
   * <pre>
   * Ip specifies that the field must be a valid IP (v4 or v6) address in
   * byte format
   * </pre>
   *
   * <code>bool ip = 10 [json_name = "ip"];</code>
   * @return The ip.
   */
  boolean getIp();

  /**
   * <pre>
   * Ipv4 specifies that the field must be a valid IPv4 address in byte
   * format
   * </pre>
   *
   * <code>bool ipv4 = 11 [json_name = "ipv4"];</code>
   * @return Whether the ipv4 field is set.
   */
  boolean hasIpv4();
  /**
   * <pre>
   * Ipv4 specifies that the field must be a valid IPv4 address in byte
   * format
   * </pre>
   *
   * <code>bool ipv4 = 11 [json_name = "ipv4"];</code>
   * @return The ipv4.
   */
  boolean getIpv4();

  /**
   * <pre>
   * Ipv6 specifies that the field must be a valid IPv6 address in byte
   * format
   * </pre>
   *
   * <code>bool ipv6 = 12 [json_name = "ipv6"];</code>
   * @return Whether the ipv6 field is set.
   */
  boolean hasIpv6();
  /**
   * <pre>
   * Ipv6 specifies that the field must be a valid IPv6 address in byte
   * format
   * </pre>
   *
   * <code>bool ipv6 = 12 [json_name = "ipv6"];</code>
   * @return The ipv6.
   */
  boolean getIpv6();

  /**
   * <pre>
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   * </pre>
   *
   * <code>optional bool ignore_empty = 14 [json_name = "ignoreEmpty"];</code>
   * @return Whether the ignoreEmpty field is set.
   */
  boolean hasIgnoreEmpty();
  /**
   * <pre>
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   * </pre>
   *
   * <code>optional bool ignore_empty = 14 [json_name = "ignoreEmpty"];</code>
   * @return The ignoreEmpty.
   */
  boolean getIgnoreEmpty();

  ai.visma.validate.BytesRules.WellKnownCase getWellKnownCase();
}
