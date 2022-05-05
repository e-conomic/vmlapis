// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: asgt/v2/suggester_service.proto

package v2

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

	"google.golang.org/protobuf/types/known/anypb"

	asgttype "github.com/e-conomic/vmlapis/gen/go/asgt/type"
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
	_ = anypb.Any{}

	_ = asgttype.Confidence_Level(0)
)

// Validate checks the field values on SuggestOptions with the rules defined in
// the proto definition for this message. If any rules are violated, an error
// is returned.
func (m *SuggestOptions) Validate() error {
	if m == nil {
		return nil
	}

	// no validation rules for SuggestLimit

	if _, ok := asgttype.Confidence_Level_name[int32(m.GetMinConfidence())]; !ok {
		return SuggestOptionsValidationError{
			field:  "MinConfidence",
			reason: "value must be one of the defined enum values",
		}
	}

	return nil
}

// SuggestOptionsValidationError is the validation error returned by
// SuggestOptions.Validate if the designated constraints aren't met.
type SuggestOptionsValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e SuggestOptionsValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e SuggestOptionsValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e SuggestOptionsValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e SuggestOptionsValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e SuggestOptionsValidationError) ErrorName() string { return "SuggestOptionsValidationError" }

// Error satisfies the builtin error interface
func (e SuggestOptionsValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sSuggestOptions.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = SuggestOptionsValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = SuggestOptionsValidationError{}

// Validate checks the field values on SuggestRequest with the rules defined in
// the proto definition for this message. If any rules are violated, an error
// is returned.
func (m *SuggestRequest) Validate() error {
	if m == nil {
		return nil
	}

	if len(m.GetDatasetName()) > 256 {
		return SuggestRequestValidationError{
			field:  "DatasetName",
			reason: "value length must be at most 256 bytes",
		}
	}

	if !_SuggestRequest_DatasetName_Pattern.MatchString(m.GetDatasetName()) {
		return SuggestRequestValidationError{
			field:  "DatasetName",
			reason: "value does not match regex pattern \"^[A-Za-z0-9.][A-Za-z0-9_.>-]*$\"",
		}
	}

	if v, ok := interface{}(m.GetInput()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return SuggestRequestValidationError{
				field:  "Input",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if v, ok := interface{}(m.GetOptions()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return SuggestRequestValidationError{
				field:  "Options",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	return nil
}

// SuggestRequestValidationError is the validation error returned by
// SuggestRequest.Validate if the designated constraints aren't met.
type SuggestRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e SuggestRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e SuggestRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e SuggestRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e SuggestRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e SuggestRequestValidationError) ErrorName() string { return "SuggestRequestValidationError" }

// Error satisfies the builtin error interface
func (e SuggestRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sSuggestRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = SuggestRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = SuggestRequestValidationError{}

var _SuggestRequest_DatasetName_Pattern = regexp.MustCompile("^[A-Za-z0-9.][A-Za-z0-9_.>-]*$")

// Validate checks the field values on SuggestResponse with the rules defined
// in the proto definition for this message. If any rules are violated, an
// error is returned.
func (m *SuggestResponse) Validate() error {
	if m == nil {
		return nil
	}

	if v, ok := interface{}(m.GetPrediction()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return SuggestResponseValidationError{
				field:  "Prediction",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if v, ok := interface{}(m.GetModel()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return SuggestResponseValidationError{
				field:  "Model",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	return nil
}

// SuggestResponseValidationError is the validation error returned by
// SuggestResponse.Validate if the designated constraints aren't met.
type SuggestResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e SuggestResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e SuggestResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e SuggestResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e SuggestResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e SuggestResponseValidationError) ErrorName() string { return "SuggestResponseValidationError" }

// Error satisfies the builtin error interface
func (e SuggestResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sSuggestResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = SuggestResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = SuggestResponseValidationError{}

// Validate checks the field values on BatchSuggestRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, an error is returned.
func (m *BatchSuggestRequest) Validate() error {
	if m == nil {
		return nil
	}

	if len(m.GetDatasetName()) > 256 {
		return BatchSuggestRequestValidationError{
			field:  "DatasetName",
			reason: "value length must be at most 256 bytes",
		}
	}

	if !_BatchSuggestRequest_DatasetName_Pattern.MatchString(m.GetDatasetName()) {
		return BatchSuggestRequestValidationError{
			field:  "DatasetName",
			reason: "value does not match regex pattern \"^[A-Za-z0-9.][A-Za-z0-9_.>-]*$\"",
		}
	}

	for idx, item := range m.GetInputs() {
		_, _ = idx, item

		if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return BatchSuggestRequestValidationError{
					field:  fmt.Sprintf("Inputs[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	if v, ok := interface{}(m.GetOptions()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return BatchSuggestRequestValidationError{
				field:  "Options",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	return nil
}

// BatchSuggestRequestValidationError is the validation error returned by
// BatchSuggestRequest.Validate if the designated constraints aren't met.
type BatchSuggestRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e BatchSuggestRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e BatchSuggestRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e BatchSuggestRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e BatchSuggestRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e BatchSuggestRequestValidationError) ErrorName() string {
	return "BatchSuggestRequestValidationError"
}

// Error satisfies the builtin error interface
func (e BatchSuggestRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sBatchSuggestRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = BatchSuggestRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = BatchSuggestRequestValidationError{}

var _BatchSuggestRequest_DatasetName_Pattern = regexp.MustCompile("^[A-Za-z0-9.][A-Za-z0-9_.>-]*$")

// Validate checks the field values on BatchSuggestResponse with the rules
// defined in the proto definition for this message. If any rules are
// violated, an error is returned.
func (m *BatchSuggestResponse) Validate() error {
	if m == nil {
		return nil
	}

	for idx, item := range m.GetPredictions() {
		_, _ = idx, item

		if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return BatchSuggestResponseValidationError{
					field:  fmt.Sprintf("Predictions[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	if v, ok := interface{}(m.GetModel()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return BatchSuggestResponseValidationError{
				field:  "Model",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	return nil
}

// BatchSuggestResponseValidationError is the validation error returned by
// BatchSuggestResponse.Validate if the designated constraints aren't met.
type BatchSuggestResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e BatchSuggestResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e BatchSuggestResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e BatchSuggestResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e BatchSuggestResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e BatchSuggestResponseValidationError) ErrorName() string {
	return "BatchSuggestResponseValidationError"
}

// Error satisfies the builtin error interface
func (e BatchSuggestResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sBatchSuggestResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = BatchSuggestResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = BatchSuggestResponseValidationError{}