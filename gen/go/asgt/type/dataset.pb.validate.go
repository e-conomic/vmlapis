// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: asgt/type/dataset.proto

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

// Validate checks the field values on Dataset with the rules defined in the
// proto definition for this message. If any rules are violated, an error is returned.
func (m *Dataset) Validate() error {
	if m == nil {
		return nil
	}

	// no validation rules for Consumer

	// no validation rules for Name

	// no validation rules for Type

	if v, ok := interface{}(m.GetRetentionPolicy()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return DatasetValidationError{
				field:  "RetentionPolicy",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if v, ok := interface{}(m.GetCreatedAt()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return DatasetValidationError{
				field:  "CreatedAt",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if v, ok := interface{}(m.GetUpdatedAt()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return DatasetValidationError{
				field:  "UpdatedAt",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	// no validation rules for Size

	return nil
}

// DatasetValidationError is the validation error returned by Dataset.Validate
// if the designated constraints aren't met.
type DatasetValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e DatasetValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e DatasetValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e DatasetValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e DatasetValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e DatasetValidationError) ErrorName() string { return "DatasetValidationError" }

// Error satisfies the builtin error interface
func (e DatasetValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sDataset.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = DatasetValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = DatasetValidationError{}
