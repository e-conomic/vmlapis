// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: asgt/v2alpha/type/model.proto

package asgttype

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

// Validate checks the field values on Model with the rules defined in the
// proto definition for this message. If any rules are violated, an error is returned.
func (m *Model) Validate() error {
	if m == nil {
		return nil
	}

	// no validation rules for Version

	if v, ok := interface{}(m.GetCreatedAt()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return ModelValidationError{
				field:  "CreatedAt",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	// no validation rules for DatasetSize

	// no validation rules for TrainingSize

	for idx, item := range m.GetConfidenceScores() {
		_, _ = idx, item

		if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return ModelValidationError{
					field:  fmt.Sprintf("ConfidenceScores[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	// no validation rules for InputType

	return nil
}

// ModelValidationError is the validation error returned by Model.Validate if
// the designated constraints aren't met.
type ModelValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e ModelValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e ModelValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e ModelValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e ModelValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e ModelValidationError) ErrorName() string { return "ModelValidationError" }

// Error satisfies the builtin error interface
func (e ModelValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sModel.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = ModelValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = ModelValidationError{}