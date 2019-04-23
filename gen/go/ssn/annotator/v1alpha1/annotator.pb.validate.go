// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: ssn/annotator/v1alpha1/annotator.proto

package annotator

import (
	"bytes"
	"errors"
	"fmt"
	"net"
	"net/mail"
	"net/url"
	"regexp"
	"strings"
	"time"
	"unicode/utf8"

	"github.com/golang/protobuf/ptypes"
)

// ensure the imports are used
var (
	_ = bytes.MinRead
	_ = errors.New("")
	_ = fmt.Print
	_ = utf8.UTFMax
	_ = (*regexp.Regexp)(nil)
	_ = (*strings.Reader)(nil)
	_ = net.IPv4len
	_ = time.Duration(0)
	_ = (*url.URL)(nil)
	_ = (*mail.Address)(nil)
	_ = ptypes.DynamicAny{}
)

// Validate checks the field values on Feature with the rules defined in the
// proto definition for this message. If any rules are violated, an error is returned.
func (m *Feature) Validate() error {
	if m == nil {
		return nil
	}

	// no validation rules for Type

	// no validation rules for MaxResults

	// no validation rules for MinConfidence

	return nil
}

// FeatureValidationError is the validation error returned by Feature.Validate
// if the designated constraints aren't met.
type FeatureValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e FeatureValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e FeatureValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e FeatureValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e FeatureValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e FeatureValidationError) ErrorName() string { return "FeatureValidationError" }

// Error satisfies the builtin error interface
func (e FeatureValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sFeature.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = FeatureValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = FeatureValidationError{}

// Validate checks the field values on DocumentAnnotatorRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, an error is returned.
func (m *DocumentAnnotatorRequest) Validate() error {
	if m == nil {
		return nil
	}

	if v, ok := interface{}(m.GetDocument()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return DocumentAnnotatorRequestValidationError{
				field:  "Document",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	for idx, item := range m.GetFeatures() {
		_, _ = idx, item

		if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return DocumentAnnotatorRequestValidationError{
					field:  fmt.Sprintf("Features[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	return nil
}

// DocumentAnnotatorRequestValidationError is the validation error returned by
// DocumentAnnotatorRequest.Validate if the designated constraints aren't met.
type DocumentAnnotatorRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e DocumentAnnotatorRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e DocumentAnnotatorRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e DocumentAnnotatorRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e DocumentAnnotatorRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e DocumentAnnotatorRequestValidationError) ErrorName() string {
	return "DocumentAnnotatorRequestValidationError"
}

// Error satisfies the builtin error interface
func (e DocumentAnnotatorRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sDocumentAnnotatorRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = DocumentAnnotatorRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = DocumentAnnotatorRequestValidationError{}

// Validate checks the field values on DocumentAnnotatorResponse with the rules
// defined in the proto definition for this message. If any rules are
// violated, an error is returned.
func (m *DocumentAnnotatorResponse) Validate() error {
	if m == nil {
		return nil
	}

	for idx, item := range m.GetOrderDate() {
		_, _ = idx, item

		if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return DocumentAnnotatorResponseValidationError{
					field:  fmt.Sprintf("OrderDate[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	for idx, item := range m.GetPaymentDueDate() {
		_, _ = idx, item

		if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return DocumentAnnotatorResponseValidationError{
					field:  fmt.Sprintf("PaymentDueDate[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	for idx, item := range m.GetCurrency() {
		_, _ = idx, item

		if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return DocumentAnnotatorResponseValidationError{
					field:  fmt.Sprintf("Currency[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	for idx, item := range m.GetTotalVat() {
		_, _ = idx, item

		if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return DocumentAnnotatorResponseValidationError{
					field:  fmt.Sprintf("TotalVat[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	for idx, item := range m.GetTotalInclVat() {
		_, _ = idx, item

		if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return DocumentAnnotatorResponseValidationError{
					field:  fmt.Sprintf("TotalInclVat[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	for idx, item := range m.GetTotalExclVat() {
		_, _ = idx, item

		if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return DocumentAnnotatorResponseValidationError{
					field:  fmt.Sprintf("TotalExclVat[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	for idx, item := range m.GetSupplierCorporateId() {
		_, _ = idx, item

		if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return DocumentAnnotatorResponseValidationError{
					field:  fmt.Sprintf("SupplierCorporateId[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	for idx, item := range m.GetSupplierCountryCode() {
		_, _ = idx, item

		if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return DocumentAnnotatorResponseValidationError{
					field:  fmt.Sprintf("SupplierCountryCode[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	for idx, item := range m.GetDocumentType() {
		_, _ = idx, item

		if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return DocumentAnnotatorResponseValidationError{
					field:  fmt.Sprintf("DocumentType[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	for idx, item := range m.GetPaymentMethod() {
		_, _ = idx, item

		if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return DocumentAnnotatorResponseValidationError{
					field:  fmt.Sprintf("PaymentMethod[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	for idx, item := range m.GetCreditCardNumber() {
		_, _ = idx, item

		if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return DocumentAnnotatorResponseValidationError{
					field:  fmt.Sprintf("CreditCardNumber[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	for idx, item := range m.GetInvoiceNumber() {
		_, _ = idx, item

		if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return DocumentAnnotatorResponseValidationError{
					field:  fmt.Sprintf("InvoiceNumber[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	if v, ok := interface{}(m.GetTextAnnotation()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return DocumentAnnotatorResponseValidationError{
				field:  "TextAnnotation",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	for idx, item := range m.GetOcrLineDkType() {
		_, _ = idx, item

		if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return DocumentAnnotatorResponseValidationError{
					field:  fmt.Sprintf("OcrLineDkType[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	for idx, item := range m.GetOcrLineDkPaymentId() {
		_, _ = idx, item

		if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return DocumentAnnotatorResponseValidationError{
					field:  fmt.Sprintf("OcrLineDkPaymentId[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	for idx, item := range m.GetOcrLineDkCreditorId() {
		_, _ = idx, item

		if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return DocumentAnnotatorResponseValidationError{
					field:  fmt.Sprintf("OcrLineDkCreditorId[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	for idx, item := range m.GetOcrLineSePaymentId() {
		_, _ = idx, item

		if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return DocumentAnnotatorResponseValidationError{
					field:  fmt.Sprintf("OcrLineSePaymentId[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	for idx, item := range m.GetOcrLineSeBankgiroCreditorId() {
		_, _ = idx, item

		if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return DocumentAnnotatorResponseValidationError{
					field:  fmt.Sprintf("OcrLineSeBankgiroCreditorId[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	for idx, item := range m.GetOcrLineSePlusgiroCreditorId() {
		_, _ = idx, item

		if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return DocumentAnnotatorResponseValidationError{
					field:  fmt.Sprintf("OcrLineSePlusgiroCreditorId[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	for idx, item := range m.GetOcrLineNoPaymentId() {
		_, _ = idx, item

		if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return DocumentAnnotatorResponseValidationError{
					field:  fmt.Sprintf("OcrLineNoPaymentId[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	for idx, item := range m.GetOcrLineFiPaymentId() {
		_, _ = idx, item

		if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return DocumentAnnotatorResponseValidationError{
					field:  fmt.Sprintf("OcrLineFiPaymentId[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	for idx, item := range m.GetOcrLineNlPaymentId() {
		_, _ = idx, item

		if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return DocumentAnnotatorResponseValidationError{
					field:  fmt.Sprintf("OcrLineNlPaymentId[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	// no validation rules for Text

	return nil
}

// DocumentAnnotatorResponseValidationError is the validation error returned by
// DocumentAnnotatorResponse.Validate if the designated constraints aren't met.
type DocumentAnnotatorResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e DocumentAnnotatorResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e DocumentAnnotatorResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e DocumentAnnotatorResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e DocumentAnnotatorResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e DocumentAnnotatorResponseValidationError) ErrorName() string {
	return "DocumentAnnotatorResponseValidationError"
}

// Error satisfies the builtin error interface
func (e DocumentAnnotatorResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sDocumentAnnotatorResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = DocumentAnnotatorResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = DocumentAnnotatorResponseValidationError{}

// Validate checks the field values on Document with the rules defined in the
// proto definition for this message. If any rules are violated, an error is returned.
func (m *Document) Validate() error {
	if m == nil {
		return nil
	}

	// no validation rules for Content

	if v, ok := interface{}(m.GetSource()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return DocumentValidationError{
				field:  "Source",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	return nil
}

// DocumentValidationError is the validation error returned by
// Document.Validate if the designated constraints aren't met.
type DocumentValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e DocumentValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e DocumentValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e DocumentValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e DocumentValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e DocumentValidationError) ErrorName() string { return "DocumentValidationError" }

// Error satisfies the builtin error interface
func (e DocumentValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sDocument.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = DocumentValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = DocumentValidationError{}

// Validate checks the field values on DocumentSource with the rules defined in
// the proto definition for this message. If any rules are violated, an error
// is returned.
func (m *DocumentSource) Validate() error {
	if m == nil {
		return nil
	}

	if uri, err := url.Parse(m.GetHttpUri()); err != nil {
		return DocumentSourceValidationError{
			field:  "HttpUri",
			reason: "value must be a valid URI",
			cause:  err,
		}
	} else if !uri.IsAbs() {
		return DocumentSourceValidationError{
			field:  "HttpUri",
			reason: "value must be absolute",
		}
	}

	return nil
}

// DocumentSourceValidationError is the validation error returned by
// DocumentSource.Validate if the designated constraints aren't met.
type DocumentSourceValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e DocumentSourceValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e DocumentSourceValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e DocumentSourceValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e DocumentSourceValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e DocumentSourceValidationError) ErrorName() string { return "DocumentSourceValidationError" }

// Error satisfies the builtin error interface
func (e DocumentSourceValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sDocumentSource.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = DocumentSourceValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = DocumentSourceValidationError{}

// Validate checks the field values on Confidence with the rules defined in the
// proto definition for this message. If any rules are violated, an error is returned.
func (m *Confidence) Validate() error {
	if m == nil {
		return nil
	}

	// no validation rules for Level

	return nil
}

// ConfidenceValidationError is the validation error returned by
// Confidence.Validate if the designated constraints aren't met.
type ConfidenceValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e ConfidenceValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e ConfidenceValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e ConfidenceValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e ConfidenceValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e ConfidenceValidationError) ErrorName() string { return "ConfidenceValidationError" }

// Error satisfies the builtin error interface
func (e ConfidenceValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sConfidence.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = ConfidenceValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = ConfidenceValidationError{}

// Validate checks the field values on PredictedField with the rules defined in
// the proto definition for this message. If any rules are violated, an error
// is returned.
func (m *PredictedField) Validate() error {
	if m == nil {
		return nil
	}

	// no validation rules for Value

	// no validation rules for NormalizedValue

	if v, ok := interface{}(m.GetConfidence()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return PredictedFieldValidationError{
				field:  "Confidence",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if v, ok := interface{}(m.GetBoundingBox()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return PredictedFieldValidationError{
				field:  "BoundingBox",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	return nil
}

// PredictedFieldValidationError is the validation error returned by
// PredictedField.Validate if the designated constraints aren't met.
type PredictedFieldValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e PredictedFieldValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e PredictedFieldValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e PredictedFieldValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e PredictedFieldValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e PredictedFieldValidationError) ErrorName() string { return "PredictedFieldValidationError" }

// Error satisfies the builtin error interface
func (e PredictedFieldValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sPredictedField.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = PredictedFieldValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = PredictedFieldValidationError{}
