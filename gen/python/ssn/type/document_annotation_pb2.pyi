from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class DocumentAnnotation(_message.Message):
    __slots__ = ["order_date", "payment_due_date", "currency", "total_vat", "total_incl_vat", "total_excl_vat", "supplier_country_code", "document_type", "payment_method", "credit_card_last_four", "ocr_line_dk_type", "ocr_line_dk_payment_id", "ocr_line_dk_creditor_id", "ocr_line_se_payment_id", "ocr_line_se_bankgiro_creditor_id", "ocr_line_se_plusgiro_creditor_id", "ocr_line_no_payment_id", "ocr_line_fi_payment_id", "ocr_line_nl_payment_id", "ocr_line_be_payment_id", "iban", "bank_account_number", "bank_registration_number", "bic", "document_number", "document_date", "order_number", "supplier_name", "supplier_vat_number", "supplier_organisation_number", "supplier_address", "customer_number", "receiver_order_number", "receiver_address", "receiver_country_code", "receiver_name", "receiver_vat_number", "page_texts", "order_reference"]
    ORDER_DATE_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_DUE_DATE_FIELD_NUMBER: _ClassVar[int]
    CURRENCY_FIELD_NUMBER: _ClassVar[int]
    TOTAL_VAT_FIELD_NUMBER: _ClassVar[int]
    TOTAL_INCL_VAT_FIELD_NUMBER: _ClassVar[int]
    TOTAL_EXCL_VAT_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_COUNTRY_CODE_FIELD_NUMBER: _ClassVar[int]
    DOCUMENT_TYPE_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_METHOD_FIELD_NUMBER: _ClassVar[int]
    CREDIT_CARD_LAST_FOUR_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_DK_TYPE_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_DK_PAYMENT_ID_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_DK_CREDITOR_ID_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_SE_PAYMENT_ID_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_SE_BANKGIRO_CREDITOR_ID_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_SE_PLUSGIRO_CREDITOR_ID_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_NO_PAYMENT_ID_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_FI_PAYMENT_ID_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_NL_PAYMENT_ID_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_BE_PAYMENT_ID_FIELD_NUMBER: _ClassVar[int]
    IBAN_FIELD_NUMBER: _ClassVar[int]
    BANK_ACCOUNT_NUMBER_FIELD_NUMBER: _ClassVar[int]
    BANK_REGISTRATION_NUMBER_FIELD_NUMBER: _ClassVar[int]
    BIC_FIELD_NUMBER: _ClassVar[int]
    DOCUMENT_NUMBER_FIELD_NUMBER: _ClassVar[int]
    DOCUMENT_DATE_FIELD_NUMBER: _ClassVar[int]
    ORDER_NUMBER_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_NAME_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_VAT_NUMBER_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_ORGANISATION_NUMBER_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    CUSTOMER_NUMBER_FIELD_NUMBER: _ClassVar[int]
    RECEIVER_ORDER_NUMBER_FIELD_NUMBER: _ClassVar[int]
    RECEIVER_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    RECEIVER_COUNTRY_CODE_FIELD_NUMBER: _ClassVar[int]
    RECEIVER_NAME_FIELD_NUMBER: _ClassVar[int]
    RECEIVER_VAT_NUMBER_FIELD_NUMBER: _ClassVar[int]
    PAGE_TEXTS_FIELD_NUMBER: _ClassVar[int]
    ORDER_REFERENCE_FIELD_NUMBER: _ClassVar[int]
    order_date: StandardField
    payment_due_date: StandardField
    currency: StandardField
    total_vat: StandardField
    total_incl_vat: StandardField
    total_excl_vat: StandardField
    supplier_country_code: StandardField
    document_type: StandardField
    payment_method: StandardField
    credit_card_last_four: StandardField
    ocr_line_dk_type: StandardField
    ocr_line_dk_payment_id: StandardField
    ocr_line_dk_creditor_id: StandardField
    ocr_line_se_payment_id: StandardField
    ocr_line_se_bankgiro_creditor_id: StandardField
    ocr_line_se_plusgiro_creditor_id: StandardField
    ocr_line_no_payment_id: StandardField
    ocr_line_fi_payment_id: StandardField
    ocr_line_nl_payment_id: StandardField
    ocr_line_be_payment_id: StandardField
    iban: StandardField
    bank_account_number: StandardField
    bank_registration_number: StandardField
    bic: StandardField
    document_number: StandardField
    document_date: StandardField
    order_number: StandardField
    supplier_name: StandardField
    supplier_vat_number: StandardField
    supplier_organisation_number: StandardField
    supplier_address: StandardField
    customer_number: StandardField
    receiver_order_number: StandardField
    receiver_address: StandardField
    receiver_country_code: StandardField
    receiver_name: StandardField
    receiver_vat_number: StandardField
    page_texts: StandardField
    order_reference: StandardField
    def __init__(self, order_date: _Optional[_Union[StandardField, _Mapping]] = ..., payment_due_date: _Optional[_Union[StandardField, _Mapping]] = ..., currency: _Optional[_Union[StandardField, _Mapping]] = ..., total_vat: _Optional[_Union[StandardField, _Mapping]] = ..., total_incl_vat: _Optional[_Union[StandardField, _Mapping]] = ..., total_excl_vat: _Optional[_Union[StandardField, _Mapping]] = ..., supplier_country_code: _Optional[_Union[StandardField, _Mapping]] = ..., document_type: _Optional[_Union[StandardField, _Mapping]] = ..., payment_method: _Optional[_Union[StandardField, _Mapping]] = ..., credit_card_last_four: _Optional[_Union[StandardField, _Mapping]] = ..., ocr_line_dk_type: _Optional[_Union[StandardField, _Mapping]] = ..., ocr_line_dk_payment_id: _Optional[_Union[StandardField, _Mapping]] = ..., ocr_line_dk_creditor_id: _Optional[_Union[StandardField, _Mapping]] = ..., ocr_line_se_payment_id: _Optional[_Union[StandardField, _Mapping]] = ..., ocr_line_se_bankgiro_creditor_id: _Optional[_Union[StandardField, _Mapping]] = ..., ocr_line_se_plusgiro_creditor_id: _Optional[_Union[StandardField, _Mapping]] = ..., ocr_line_no_payment_id: _Optional[_Union[StandardField, _Mapping]] = ..., ocr_line_fi_payment_id: _Optional[_Union[StandardField, _Mapping]] = ..., ocr_line_nl_payment_id: _Optional[_Union[StandardField, _Mapping]] = ..., ocr_line_be_payment_id: _Optional[_Union[StandardField, _Mapping]] = ..., iban: _Optional[_Union[StandardField, _Mapping]] = ..., bank_account_number: _Optional[_Union[StandardField, _Mapping]] = ..., bank_registration_number: _Optional[_Union[StandardField, _Mapping]] = ..., bic: _Optional[_Union[StandardField, _Mapping]] = ..., document_number: _Optional[_Union[StandardField, _Mapping]] = ..., document_date: _Optional[_Union[StandardField, _Mapping]] = ..., order_number: _Optional[_Union[StandardField, _Mapping]] = ..., supplier_name: _Optional[_Union[StandardField, _Mapping]] = ..., supplier_vat_number: _Optional[_Union[StandardField, _Mapping]] = ..., supplier_organisation_number: _Optional[_Union[StandardField, _Mapping]] = ..., supplier_address: _Optional[_Union[StandardField, _Mapping]] = ..., customer_number: _Optional[_Union[StandardField, _Mapping]] = ..., receiver_order_number: _Optional[_Union[StandardField, _Mapping]] = ..., receiver_address: _Optional[_Union[StandardField, _Mapping]] = ..., receiver_country_code: _Optional[_Union[StandardField, _Mapping]] = ..., receiver_name: _Optional[_Union[StandardField, _Mapping]] = ..., receiver_vat_number: _Optional[_Union[StandardField, _Mapping]] = ..., page_texts: _Optional[_Union[StandardField, _Mapping]] = ..., order_reference: _Optional[_Union[StandardField, _Mapping]] = ...) -> None: ...

class StandardField(_message.Message):
    __slots__ = ["page_ref", "value", "type"]
    class annotator(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
        UNKNOWN: _ClassVar[StandardField.annotator]
        OCR: _ClassVar[StandardField.annotator]
        ML: _ClassVar[StandardField.annotator]
        RULE: _ClassVar[StandardField.annotator]
    UNKNOWN: StandardField.annotator
    OCR: StandardField.annotator
    ML: StandardField.annotator
    RULE: StandardField.annotator
    PAGE_REF_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    page_ref: int
    value: str
    type: StandardField.annotator
    def __init__(self, page_ref: _Optional[int] = ..., value: _Optional[str] = ..., type: _Optional[_Union[StandardField.annotator, str]] = ...) -> None: ...
