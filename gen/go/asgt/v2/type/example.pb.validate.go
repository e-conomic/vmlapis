// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: asgt/v2/type/example.proto

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

// define the regex for a UUID once up-front
var _example_uuidPattern = regexp.MustCompile("^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$")

// Validate checks the field values on Example with the rules defined in the
// proto definition for this message. If any rules are violated, an error is returned.
func (m *Example) Validate() error {
	if m == nil {
		return nil
	}

	if v, ok := interface{}(m.GetData()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return ExampleValidationError{
				field:  "Data",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if len(m.GetTargetValues()) < 1 {
		return ExampleValidationError{
			field:  "TargetValues",
			reason: "value must contain at least 1 item(s)",
		}
	}

	for idx, item := range m.GetTargetValues() {
		_, _ = idx, item

		if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return ExampleValidationError{
					field:  fmt.Sprintf("TargetValues[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	if m.GetId() != "" {

		if err := m._validateUuid(m.GetId()); err != nil {
			return ExampleValidationError{
				field:  "Id",
				reason: "value must be a valid UUID",
				cause:  err,
			}
		}

	}

	return nil
}

func (m *Example) _validateUuid(uuid string) error {
	if matched := _example_uuidPattern.MatchString(uuid); !matched {
		return errors.New("invalid uuid format")
	}

	return nil
}

// ExampleValidationError is the validation error returned by Example.Validate
// if the designated constraints aren't met.
type ExampleValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e ExampleValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e ExampleValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e ExampleValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e ExampleValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e ExampleValidationError) ErrorName() string { return "ExampleValidationError" }

// Error satisfies the builtin error interface
func (e ExampleValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sExample.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = ExampleValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = ExampleValidationError{}