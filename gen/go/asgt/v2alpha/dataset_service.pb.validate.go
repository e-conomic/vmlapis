// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: asgt/v2alpha/dataset_service.proto

package v2alpha

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
)

// Validate checks the field values on GetDatasetRequest with the rules defined
// in the proto definition for this message. If any rules are violated, an
// error is returned.
func (m *GetDatasetRequest) Validate() error {
	if m == nil {
		return nil
	}

	if len(m.GetName()) > 256 {
		return GetDatasetRequestValidationError{
			field:  "Name",
			reason: "value length must be at most 256 bytes",
		}
	}

	if !_GetDatasetRequest_Name_Pattern.MatchString(m.GetName()) {
		return GetDatasetRequestValidationError{
			field:  "Name",
			reason: "value does not match regex pattern \"^[A-Za-z0-9.][A-Za-z0-9_.>-]*$\"",
		}
	}

	return nil
}

// GetDatasetRequestValidationError is the validation error returned by
// GetDatasetRequest.Validate if the designated constraints aren't met.
type GetDatasetRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e GetDatasetRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e GetDatasetRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e GetDatasetRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e GetDatasetRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e GetDatasetRequestValidationError) ErrorName() string {
	return "GetDatasetRequestValidationError"
}

// Error satisfies the builtin error interface
func (e GetDatasetRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sGetDatasetRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = GetDatasetRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = GetDatasetRequestValidationError{}

var _GetDatasetRequest_Name_Pattern = regexp.MustCompile("^[A-Za-z0-9.][A-Za-z0-9_.>-]*$")

// Validate checks the field values on CreateDatasetRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, an error is returned.
func (m *CreateDatasetRequest) Validate() error {
	if m == nil {
		return nil
	}

	if len(m.GetName()) > 256 {
		return CreateDatasetRequestValidationError{
			field:  "Name",
			reason: "value length must be at most 256 bytes",
		}
	}

	if !_CreateDatasetRequest_Name_Pattern.MatchString(m.GetName()) {
		return CreateDatasetRequestValidationError{
			field:  "Name",
			reason: "value does not match regex pattern \"^[A-Za-z0-9.][A-Za-z0-9_.>-]*$\"",
		}
	}

	_CreateDatasetRequest_Tags_Unique := make(map[string]struct{}, len(m.GetTags()))

	for idx, item := range m.GetTags() {
		_, _ = idx, item

		if _, exists := _CreateDatasetRequest_Tags_Unique[item]; exists {
			return CreateDatasetRequestValidationError{
				field:  fmt.Sprintf("Tags[%v]", idx),
				reason: "repeated value must contain unique items",
			}
		} else {
			_CreateDatasetRequest_Tags_Unique[item] = struct{}{}
		}

		if len(item) > 64 {
			return CreateDatasetRequestValidationError{
				field:  fmt.Sprintf("Tags[%v]", idx),
				reason: "value length must be at most 64 bytes",
			}
		}

		if !_CreateDatasetRequest_Tags_Pattern.MatchString(item) {
			return CreateDatasetRequestValidationError{
				field:  fmt.Sprintf("Tags[%v]", idx),
				reason: "value does not match regex pattern \"^[A-Za-z0-9\\\\s_.>-]*$\"",
			}
		}

	}

	return nil
}

// CreateDatasetRequestValidationError is the validation error returned by
// CreateDatasetRequest.Validate if the designated constraints aren't met.
type CreateDatasetRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e CreateDatasetRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e CreateDatasetRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e CreateDatasetRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e CreateDatasetRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e CreateDatasetRequestValidationError) ErrorName() string {
	return "CreateDatasetRequestValidationError"
}

// Error satisfies the builtin error interface
func (e CreateDatasetRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sCreateDatasetRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = CreateDatasetRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = CreateDatasetRequestValidationError{}

var _CreateDatasetRequest_Name_Pattern = regexp.MustCompile("^[A-Za-z0-9.][A-Za-z0-9_.>-]*$")

var _CreateDatasetRequest_Tags_Pattern = regexp.MustCompile("^[A-Za-z0-9\\s_.>-]*$")

// Validate checks the field values on DeleteDatasetRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, an error is returned.
func (m *DeleteDatasetRequest) Validate() error {
	if m == nil {
		return nil
	}

	if len(m.GetName()) > 256 {
		return DeleteDatasetRequestValidationError{
			field:  "Name",
			reason: "value length must be at most 256 bytes",
		}
	}

	if !_DeleteDatasetRequest_Name_Pattern.MatchString(m.GetName()) {
		return DeleteDatasetRequestValidationError{
			field:  "Name",
			reason: "value does not match regex pattern \"^[A-Za-z0-9.][A-Za-z0-9_.>-]*$\"",
		}
	}

	return nil
}

// DeleteDatasetRequestValidationError is the validation error returned by
// DeleteDatasetRequest.Validate if the designated constraints aren't met.
type DeleteDatasetRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e DeleteDatasetRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e DeleteDatasetRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e DeleteDatasetRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e DeleteDatasetRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e DeleteDatasetRequestValidationError) ErrorName() string {
	return "DeleteDatasetRequestValidationError"
}

// Error satisfies the builtin error interface
func (e DeleteDatasetRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sDeleteDatasetRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = DeleteDatasetRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = DeleteDatasetRequestValidationError{}

var _DeleteDatasetRequest_Name_Pattern = regexp.MustCompile("^[A-Za-z0-9.][A-Za-z0-9_.>-]*$")

// Validate checks the field values on DeleteTagRequest with the rules defined
// in the proto definition for this message. If any rules are violated, an
// error is returned.
func (m *DeleteTagRequest) Validate() error {
	if m == nil {
		return nil
	}

	if len(m.GetName()) > 256 {
		return DeleteTagRequestValidationError{
			field:  "Name",
			reason: "value length must be at most 256 bytes",
		}
	}

	if !_DeleteTagRequest_Name_Pattern.MatchString(m.GetName()) {
		return DeleteTagRequestValidationError{
			field:  "Name",
			reason: "value does not match regex pattern \"^[A-Za-z0-9.][A-Za-z0-9_.>-]*$\"",
		}
	}

	return nil
}

// DeleteTagRequestValidationError is the validation error returned by
// DeleteTagRequest.Validate if the designated constraints aren't met.
type DeleteTagRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e DeleteTagRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e DeleteTagRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e DeleteTagRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e DeleteTagRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e DeleteTagRequestValidationError) ErrorName() string { return "DeleteTagRequestValidationError" }

// Error satisfies the builtin error interface
func (e DeleteTagRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sDeleteTagRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = DeleteTagRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = DeleteTagRequestValidationError{}

var _DeleteTagRequest_Name_Pattern = regexp.MustCompile("^[A-Za-z0-9.][A-Za-z0-9_.>-]*$")

// Validate checks the field values on CreateExampleRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, an error is returned.
func (m *CreateExampleRequest) Validate() error {
	if m == nil {
		return nil
	}

	if len(m.GetDatasetName()) > 256 {
		return CreateExampleRequestValidationError{
			field:  "DatasetName",
			reason: "value length must be at most 256 bytes",
		}
	}

	if !_CreateExampleRequest_DatasetName_Pattern.MatchString(m.GetDatasetName()) {
		return CreateExampleRequestValidationError{
			field:  "DatasetName",
			reason: "value does not match regex pattern \"^[A-Za-z0-9.][A-Za-z0-9_.>-]*$\"",
		}
	}

	if v, ok := interface{}(m.GetExample()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return CreateExampleRequestValidationError{
				field:  "Example",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	return nil
}

// CreateExampleRequestValidationError is the validation error returned by
// CreateExampleRequest.Validate if the designated constraints aren't met.
type CreateExampleRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e CreateExampleRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e CreateExampleRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e CreateExampleRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e CreateExampleRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e CreateExampleRequestValidationError) ErrorName() string {
	return "CreateExampleRequestValidationError"
}

// Error satisfies the builtin error interface
func (e CreateExampleRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sCreateExampleRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = CreateExampleRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = CreateExampleRequestValidationError{}

var _CreateExampleRequest_DatasetName_Pattern = regexp.MustCompile("^[A-Za-z0-9.][A-Za-z0-9_.>-]*$")

// Validate checks the field values on CreateOrUpdateExampleRequest with the
// rules defined in the proto definition for this message. If any rules are
// violated, an error is returned.
func (m *CreateOrUpdateExampleRequest) Validate() error {
	if m == nil {
		return nil
	}

	if len(m.GetDatasetName()) > 256 {
		return CreateOrUpdateExampleRequestValidationError{
			field:  "DatasetName",
			reason: "value length must be at most 256 bytes",
		}
	}

	if !_CreateOrUpdateExampleRequest_DatasetName_Pattern.MatchString(m.GetDatasetName()) {
		return CreateOrUpdateExampleRequestValidationError{
			field:  "DatasetName",
			reason: "value does not match regex pattern \"^[A-Za-z0-9.][A-Za-z0-9_.>-]*$\"",
		}
	}

	if v, ok := interface{}(m.GetExample()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return CreateOrUpdateExampleRequestValidationError{
				field:  "Example",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	return nil
}

// CreateOrUpdateExampleRequestValidationError is the validation error returned
// by CreateOrUpdateExampleRequest.Validate if the designated constraints
// aren't met.
type CreateOrUpdateExampleRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e CreateOrUpdateExampleRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e CreateOrUpdateExampleRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e CreateOrUpdateExampleRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e CreateOrUpdateExampleRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e CreateOrUpdateExampleRequestValidationError) ErrorName() string {
	return "CreateOrUpdateExampleRequestValidationError"
}

// Error satisfies the builtin error interface
func (e CreateOrUpdateExampleRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sCreateOrUpdateExampleRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = CreateOrUpdateExampleRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = CreateOrUpdateExampleRequestValidationError{}

var _CreateOrUpdateExampleRequest_DatasetName_Pattern = regexp.MustCompile("^[A-Za-z0-9.][A-Za-z0-9_.>-]*$")

// Validate checks the field values on BatchCreateExampleRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, an error is returned.
func (m *BatchCreateExampleRequest) Validate() error {
	if m == nil {
		return nil
	}

	if len(m.GetDatasetName()) > 256 {
		return BatchCreateExampleRequestValidationError{
			field:  "DatasetName",
			reason: "value length must be at most 256 bytes",
		}
	}

	if !_BatchCreateExampleRequest_DatasetName_Pattern.MatchString(m.GetDatasetName()) {
		return BatchCreateExampleRequestValidationError{
			field:  "DatasetName",
			reason: "value does not match regex pattern \"^[A-Za-z0-9.][A-Za-z0-9_.>-]*$\"",
		}
	}

	for idx, item := range m.GetExamples() {
		_, _ = idx, item

		if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return BatchCreateExampleRequestValidationError{
					field:  fmt.Sprintf("Examples[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	return nil
}

// BatchCreateExampleRequestValidationError is the validation error returned by
// BatchCreateExampleRequest.Validate if the designated constraints aren't met.
type BatchCreateExampleRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e BatchCreateExampleRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e BatchCreateExampleRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e BatchCreateExampleRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e BatchCreateExampleRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e BatchCreateExampleRequestValidationError) ErrorName() string {
	return "BatchCreateExampleRequestValidationError"
}

// Error satisfies the builtin error interface
func (e BatchCreateExampleRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sBatchCreateExampleRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = BatchCreateExampleRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = BatchCreateExampleRequestValidationError{}

var _BatchCreateExampleRequest_DatasetName_Pattern = regexp.MustCompile("^[A-Za-z0-9.][A-Za-z0-9_.>-]*$")

// Validate checks the field values on TruncateDatasetRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, an error is returned.
func (m *TruncateDatasetRequest) Validate() error {
	if m == nil {
		return nil
	}

	if len(m.GetName()) > 256 {
		return TruncateDatasetRequestValidationError{
			field:  "Name",
			reason: "value length must be at most 256 bytes",
		}
	}

	if !_TruncateDatasetRequest_Name_Pattern.MatchString(m.GetName()) {
		return TruncateDatasetRequestValidationError{
			field:  "Name",
			reason: "value does not match regex pattern \"^[A-Za-z0-9.][A-Za-z0-9_.>-]*$\"",
		}
	}

	return nil
}

// TruncateDatasetRequestValidationError is the validation error returned by
// TruncateDatasetRequest.Validate if the designated constraints aren't met.
type TruncateDatasetRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e TruncateDatasetRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e TruncateDatasetRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e TruncateDatasetRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e TruncateDatasetRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e TruncateDatasetRequestValidationError) ErrorName() string {
	return "TruncateDatasetRequestValidationError"
}

// Error satisfies the builtin error interface
func (e TruncateDatasetRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sTruncateDatasetRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = TruncateDatasetRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = TruncateDatasetRequestValidationError{}

var _TruncateDatasetRequest_Name_Pattern = regexp.MustCompile("^[A-Za-z0-9.][A-Za-z0-9_.>-]*$")

// Validate checks the field values on TrainingsRequest with the rules defined
// in the proto definition for this message. If any rules are violated, an
// error is returned.
func (m *TrainingsRequest) Validate() error {
	if m == nil {
		return nil
	}

	if len(m.GetDatasetName()) > 256 {
		return TrainingsRequestValidationError{
			field:  "DatasetName",
			reason: "value length must be at most 256 bytes",
		}
	}

	if !_TrainingsRequest_DatasetName_Pattern.MatchString(m.GetDatasetName()) {
		return TrainingsRequestValidationError{
			field:  "DatasetName",
			reason: "value does not match regex pattern \"^[A-Za-z0-9.][A-Za-z0-9_.>-]*$\"",
		}
	}

	// no validation rules for NumberOfTrainings

	return nil
}

// TrainingsRequestValidationError is the validation error returned by
// TrainingsRequest.Validate if the designated constraints aren't met.
type TrainingsRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e TrainingsRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e TrainingsRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e TrainingsRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e TrainingsRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e TrainingsRequestValidationError) ErrorName() string { return "TrainingsRequestValidationError" }

// Error satisfies the builtin error interface
func (e TrainingsRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sTrainingsRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = TrainingsRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = TrainingsRequestValidationError{}

var _TrainingsRequest_DatasetName_Pattern = regexp.MustCompile("^[A-Za-z0-9.][A-Za-z0-9_.>-]*$")
