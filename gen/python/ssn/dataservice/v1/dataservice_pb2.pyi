from gen_bq_schema import bq_field_pb2 as _bq_field_pb2
from gen_bq_schema import bq_table_pb2 as _bq_table_pb2
from google.api import annotations_pb2 as _annotations_pb2
from google.protobuf import empty_pb2 as _empty_pb2
from google.protobuf import wrappers_pb2 as _wrappers_pb2
from google.type import date_pb2 as _date_pb2
from ssn.type import candidate_pb2 as _candidate_pb2
from ssn.type import text_annotation_pb2 as _text_annotation_pb2
from ssn.type import tier_pb2 as _tier_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class CallsPerMonth(_message.Message):
    __slots__ = ["calls", "month_name"]
    CALLS_FIELD_NUMBER: _ClassVar[int]
    MONTH_NAME_FIELD_NUMBER: _ClassVar[int]
    calls: int
    month_name: str
    def __init__(self, calls: _Optional[int] = ..., month_name: _Optional[str] = ...) -> None: ...

class CallsPerMonthResponse(_message.Message):
    __slots__ = ["calls_per_month"]
    CALLS_PER_MONTH_FIELD_NUMBER: _ClassVar[int]
    calls_per_month: _containers.RepeatedCompositeFieldContainer[CallsPerMonth]
    def __init__(self, calls_per_month: _Optional[_Iterable[_Union[CallsPerMonth, _Mapping]]] = ...) -> None: ...

class Correctness(_message.Message):
    __slots__ = ["correct_percentage", "error_percentage", "field", "incomplete_percentage", "support"]
    CORRECT_PERCENTAGE_FIELD_NUMBER: _ClassVar[int]
    ERROR_PERCENTAGE_FIELD_NUMBER: _ClassVar[int]
    FIELD_FIELD_NUMBER: _ClassVar[int]
    INCOMPLETE_PERCENTAGE_FIELD_NUMBER: _ClassVar[int]
    SUPPORT_FIELD_NUMBER: _ClassVar[int]
    correct_percentage: float
    error_percentage: float
    field: str
    incomplete_percentage: float
    support: int
    def __init__(self, field: _Optional[str] = ..., correct_percentage: _Optional[float] = ..., incomplete_percentage: _Optional[float] = ..., error_percentage: _Optional[float] = ..., support: _Optional[int] = ...) -> None: ...

class CreateDocumentRequest(_message.Message):
    __slots__ = ["document"]
    DOCUMENT_FIELD_NUMBER: _ClassVar[int]
    document: Document
    def __init__(self, document: _Optional[_Union[Document, _Mapping]] = ...) -> None: ...

class CreateDocumentResponse(_message.Message):
    __slots__ = ["id"]
    ID_FIELD_NUMBER: _ClassVar[int]
    id: str
    def __init__(self, id: _Optional[str] = ...) -> None: ...

class DeleteRequest(_message.Message):
    __slots__ = ["tags"]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    tags: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, tags: _Optional[_Iterable[str]] = ...) -> None: ...

class Document(_message.Message):
    __slots__ = ["bytes", "consumer", "feedback_time", "id", "prediction_confidences", "prediction_metadata", "prediction_values", "ta", "tags", "true_values"]
    BYTES_FIELD_NUMBER: _ClassVar[int]
    CONSUMER_FIELD_NUMBER: _ClassVar[int]
    FEEDBACK_TIME_FIELD_NUMBER: _ClassVar[int]
    ID_FIELD_NUMBER: _ClassVar[int]
    PREDICTION_CONFIDENCES_FIELD_NUMBER: _ClassVar[int]
    PREDICTION_METADATA_FIELD_NUMBER: _ClassVar[int]
    PREDICTION_VALUES_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    TA_FIELD_NUMBER: _ClassVar[int]
    TRUE_VALUES_FIELD_NUMBER: _ClassVar[int]
    bytes: bytes
    consumer: str
    feedback_time: int
    id: str
    prediction_confidences: PredictionConfidences
    prediction_metadata: PredictionMetadata
    prediction_values: PredictionValues
    ta: _text_annotation_pb2.TextAnnotation
    tags: _containers.RepeatedScalarFieldContainer[str]
    true_values: TrueValues
    def __init__(self, ta: _Optional[_Union[_text_annotation_pb2.TextAnnotation, _Mapping]] = ..., bytes: _Optional[bytes] = ..., id: _Optional[str] = ..., consumer: _Optional[str] = ..., tags: _Optional[_Iterable[str]] = ..., true_values: _Optional[_Union[TrueValues, _Mapping]] = ..., prediction_values: _Optional[_Union[PredictionValues, _Mapping]] = ..., feedback_time: _Optional[int] = ..., prediction_confidences: _Optional[_Union[PredictionConfidences, _Mapping]] = ..., prediction_metadata: _Optional[_Union[PredictionMetadata, _Mapping]] = ...) -> None: ...

class FeedbackMetrics(_message.Message):
    __slots__ = ["document_count", "feedback_count", "field_correctness", "overall_correctness"]
    DOCUMENT_COUNT_FIELD_NUMBER: _ClassVar[int]
    FEEDBACK_COUNT_FIELD_NUMBER: _ClassVar[int]
    FIELD_CORRECTNESS_FIELD_NUMBER: _ClassVar[int]
    OVERALL_CORRECTNESS_FIELD_NUMBER: _ClassVar[int]
    document_count: int
    feedback_count: int
    field_correctness: _containers.RepeatedCompositeFieldContainer[Correctness]
    overall_correctness: Correctness
    def __init__(self, document_count: _Optional[int] = ..., feedback_count: _Optional[int] = ..., overall_correctness: _Optional[_Union[Correctness, _Mapping]] = ..., field_correctness: _Optional[_Iterable[_Union[Correctness, _Mapping]]] = ...) -> None: ...

class FeedbackRequest(_message.Message):
    __slots__ = ["id", "tags", "true_values"]
    ID_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    TRUE_VALUES_FIELD_NUMBER: _ClassVar[int]
    id: str
    tags: _containers.RepeatedScalarFieldContainer[str]
    true_values: TrueValues
    def __init__(self, id: _Optional[str] = ..., true_values: _Optional[_Union[TrueValues, _Mapping]] = ..., tags: _Optional[_Iterable[str]] = ...) -> None: ...

class MetricsRequest(_message.Message):
    __slots__ = ["end_time", "fields", "start_time", "tags"]
    END_TIME_FIELD_NUMBER: _ClassVar[int]
    FIELDS_FIELD_NUMBER: _ClassVar[int]
    START_TIME_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    end_time: int
    fields: _containers.RepeatedScalarFieldContainer[str]
    start_time: int
    tags: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, start_time: _Optional[int] = ..., end_time: _Optional[int] = ..., fields: _Optional[_Iterable[str]] = ..., tags: _Optional[_Iterable[str]] = ...) -> None: ...

class PredictionConfidences(_message.Message):
    __slots__ = ["bank_account_number", "bank_registration_number", "bic", "credit_card_last_four", "currency", "customer_number", "document_date", "document_number", "document_type", "iban", "invoice_number", "ocr_line_dk_creditor_id", "ocr_line_dk_payment_id", "ocr_line_dk_type", "ocr_line_fi_payment_id", "ocr_line_nl_payment_id", "ocr_line_no_payment_id", "ocr_line_se_bankgiro_creditor_id", "ocr_line_se_payment_id", "ocr_line_se_plusgiro_creditor_id", "order_date", "order_number", "order_reference", "payment_due_date", "payment_method", "supplier_address", "supplier_corporate_id", "supplier_country_code", "supplier_name", "supplier_organisation_number", "supplier_vat_number", "total_excl_vat", "total_incl_vat", "total_vat"]
    BANK_ACCOUNT_NUMBER_FIELD_NUMBER: _ClassVar[int]
    BANK_REGISTRATION_NUMBER_FIELD_NUMBER: _ClassVar[int]
    BIC_FIELD_NUMBER: _ClassVar[int]
    CREDIT_CARD_LAST_FOUR_FIELD_NUMBER: _ClassVar[int]
    CURRENCY_FIELD_NUMBER: _ClassVar[int]
    CUSTOMER_NUMBER_FIELD_NUMBER: _ClassVar[int]
    DOCUMENT_DATE_FIELD_NUMBER: _ClassVar[int]
    DOCUMENT_NUMBER_FIELD_NUMBER: _ClassVar[int]
    DOCUMENT_TYPE_FIELD_NUMBER: _ClassVar[int]
    IBAN_FIELD_NUMBER: _ClassVar[int]
    INVOICE_NUMBER_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_DK_CREDITOR_ID_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_DK_PAYMENT_ID_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_DK_TYPE_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_FI_PAYMENT_ID_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_NL_PAYMENT_ID_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_NO_PAYMENT_ID_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_SE_BANKGIRO_CREDITOR_ID_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_SE_PAYMENT_ID_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_SE_PLUSGIRO_CREDITOR_ID_FIELD_NUMBER: _ClassVar[int]
    ORDER_DATE_FIELD_NUMBER: _ClassVar[int]
    ORDER_NUMBER_FIELD_NUMBER: _ClassVar[int]
    ORDER_REFERENCE_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_DUE_DATE_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_METHOD_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_CORPORATE_ID_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_COUNTRY_CODE_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_NAME_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_ORGANISATION_NUMBER_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_VAT_NUMBER_FIELD_NUMBER: _ClassVar[int]
    TOTAL_EXCL_VAT_FIELD_NUMBER: _ClassVar[int]
    TOTAL_INCL_VAT_FIELD_NUMBER: _ClassVar[int]
    TOTAL_VAT_FIELD_NUMBER: _ClassVar[int]
    bank_account_number: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.FloatValue]
    bank_registration_number: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.FloatValue]
    bic: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.FloatValue]
    credit_card_last_four: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.FloatValue]
    currency: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.FloatValue]
    customer_number: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.FloatValue]
    document_date: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.FloatValue]
    document_number: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.FloatValue]
    document_type: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.FloatValue]
    iban: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.FloatValue]
    invoice_number: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.FloatValue]
    ocr_line_dk_creditor_id: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.FloatValue]
    ocr_line_dk_payment_id: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.FloatValue]
    ocr_line_dk_type: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.FloatValue]
    ocr_line_fi_payment_id: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.FloatValue]
    ocr_line_nl_payment_id: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.FloatValue]
    ocr_line_no_payment_id: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.FloatValue]
    ocr_line_se_bankgiro_creditor_id: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.FloatValue]
    ocr_line_se_payment_id: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.FloatValue]
    ocr_line_se_plusgiro_creditor_id: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.FloatValue]
    order_date: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.FloatValue]
    order_number: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.FloatValue]
    order_reference: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.FloatValue]
    payment_due_date: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.FloatValue]
    payment_method: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.FloatValue]
    supplier_address: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.FloatValue]
    supplier_corporate_id: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.FloatValue]
    supplier_country_code: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.FloatValue]
    supplier_name: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.FloatValue]
    supplier_organisation_number: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.FloatValue]
    supplier_vat_number: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.FloatValue]
    total_excl_vat: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.FloatValue]
    total_incl_vat: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.FloatValue]
    total_vat: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.FloatValue]
    def __init__(self, total_incl_vat: _Optional[_Iterable[_Union[_wrappers_pb2.FloatValue, _Mapping]]] = ..., total_vat: _Optional[_Iterable[_Union[_wrappers_pb2.FloatValue, _Mapping]]] = ..., total_excl_vat: _Optional[_Iterable[_Union[_wrappers_pb2.FloatValue, _Mapping]]] = ..., order_date: _Optional[_Iterable[_Union[_wrappers_pb2.FloatValue, _Mapping]]] = ..., payment_due_date: _Optional[_Iterable[_Union[_wrappers_pb2.FloatValue, _Mapping]]] = ..., document_type: _Optional[_Iterable[_Union[_wrappers_pb2.FloatValue, _Mapping]]] = ..., currency: _Optional[_Iterable[_Union[_wrappers_pb2.FloatValue, _Mapping]]] = ..., credit_card_last_four: _Optional[_Iterable[_Union[_wrappers_pb2.FloatValue, _Mapping]]] = ..., payment_method: _Optional[_Iterable[_Union[_wrappers_pb2.FloatValue, _Mapping]]] = ..., ocr_line_dk_type: _Optional[_Iterable[_Union[_wrappers_pb2.FloatValue, _Mapping]]] = ..., ocr_line_dk_payment_id: _Optional[_Iterable[_Union[_wrappers_pb2.FloatValue, _Mapping]]] = ..., ocr_line_dk_creditor_id: _Optional[_Iterable[_Union[_wrappers_pb2.FloatValue, _Mapping]]] = ..., ocr_line_se_payment_id: _Optional[_Iterable[_Union[_wrappers_pb2.FloatValue, _Mapping]]] = ..., ocr_line_se_bankgiro_creditor_id: _Optional[_Iterable[_Union[_wrappers_pb2.FloatValue, _Mapping]]] = ..., ocr_line_se_plusgiro_creditor_id: _Optional[_Iterable[_Union[_wrappers_pb2.FloatValue, _Mapping]]] = ..., ocr_line_no_payment_id: _Optional[_Iterable[_Union[_wrappers_pb2.FloatValue, _Mapping]]] = ..., ocr_line_fi_payment_id: _Optional[_Iterable[_Union[_wrappers_pb2.FloatValue, _Mapping]]] = ..., ocr_line_nl_payment_id: _Optional[_Iterable[_Union[_wrappers_pb2.FloatValue, _Mapping]]] = ..., supplier_corporate_id: _Optional[_Iterable[_Union[_wrappers_pb2.FloatValue, _Mapping]]] = ..., supplier_country_code: _Optional[_Iterable[_Union[_wrappers_pb2.FloatValue, _Mapping]]] = ..., invoice_number: _Optional[_Iterable[_Union[_wrappers_pb2.FloatValue, _Mapping]]] = ..., iban: _Optional[_Iterable[_Union[_wrappers_pb2.FloatValue, _Mapping]]] = ..., order_reference: _Optional[_Iterable[_Union[_wrappers_pb2.FloatValue, _Mapping]]] = ..., bank_account_number: _Optional[_Iterable[_Union[_wrappers_pb2.FloatValue, _Mapping]]] = ..., bank_registration_number: _Optional[_Iterable[_Union[_wrappers_pb2.FloatValue, _Mapping]]] = ..., supplier_name: _Optional[_Iterable[_Union[_wrappers_pb2.FloatValue, _Mapping]]] = ..., bic: _Optional[_Iterable[_Union[_wrappers_pb2.FloatValue, _Mapping]]] = ..., document_number: _Optional[_Iterable[_Union[_wrappers_pb2.FloatValue, _Mapping]]] = ..., document_date: _Optional[_Iterable[_Union[_wrappers_pb2.FloatValue, _Mapping]]] = ..., order_number: _Optional[_Iterable[_Union[_wrappers_pb2.FloatValue, _Mapping]]] = ..., supplier_vat_number: _Optional[_Iterable[_Union[_wrappers_pb2.FloatValue, _Mapping]]] = ..., supplier_organisation_number: _Optional[_Iterable[_Union[_wrappers_pb2.FloatValue, _Mapping]]] = ..., supplier_address: _Optional[_Iterable[_Union[_wrappers_pb2.FloatValue, _Mapping]]] = ..., customer_number: _Optional[_Iterable[_Union[_wrappers_pb2.FloatValue, _Mapping]]] = ...) -> None: ...

class PredictionMetadata(_message.Message):
    __slots__ = ["bank_account_number", "bank_registration_number", "bic", "credit_card_last_four", "currency", "customer_number", "document_date", "document_number", "document_type", "iban", "invoice_number", "ocr_line_dk_creditor_id", "ocr_line_dk_payment_id", "ocr_line_dk_type", "ocr_line_fi_payment_id", "ocr_line_nl_payment_id", "ocr_line_no_payment_id", "ocr_line_se_bankgiro_creditor_id", "ocr_line_se_payment_id", "ocr_line_se_plusgiro_creditor_id", "order_date", "order_number", "order_reference", "payment_due_date", "payment_method", "supplier_address", "supplier_corporate_id", "supplier_country_code", "supplier_name", "supplier_organisation_number", "supplier_vat_number", "total_excl_vat", "total_incl_vat", "total_vat"]
    BANK_ACCOUNT_NUMBER_FIELD_NUMBER: _ClassVar[int]
    BANK_REGISTRATION_NUMBER_FIELD_NUMBER: _ClassVar[int]
    BIC_FIELD_NUMBER: _ClassVar[int]
    CREDIT_CARD_LAST_FOUR_FIELD_NUMBER: _ClassVar[int]
    CURRENCY_FIELD_NUMBER: _ClassVar[int]
    CUSTOMER_NUMBER_FIELD_NUMBER: _ClassVar[int]
    DOCUMENT_DATE_FIELD_NUMBER: _ClassVar[int]
    DOCUMENT_NUMBER_FIELD_NUMBER: _ClassVar[int]
    DOCUMENT_TYPE_FIELD_NUMBER: _ClassVar[int]
    IBAN_FIELD_NUMBER: _ClassVar[int]
    INVOICE_NUMBER_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_DK_CREDITOR_ID_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_DK_PAYMENT_ID_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_DK_TYPE_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_FI_PAYMENT_ID_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_NL_PAYMENT_ID_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_NO_PAYMENT_ID_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_SE_BANKGIRO_CREDITOR_ID_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_SE_PAYMENT_ID_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_SE_PLUSGIRO_CREDITOR_ID_FIELD_NUMBER: _ClassVar[int]
    ORDER_DATE_FIELD_NUMBER: _ClassVar[int]
    ORDER_NUMBER_FIELD_NUMBER: _ClassVar[int]
    ORDER_REFERENCE_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_DUE_DATE_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_METHOD_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_CORPORATE_ID_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_COUNTRY_CODE_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_NAME_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_ORGANISATION_NUMBER_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_VAT_NUMBER_FIELD_NUMBER: _ClassVar[int]
    TOTAL_EXCL_VAT_FIELD_NUMBER: _ClassVar[int]
    TOTAL_INCL_VAT_FIELD_NUMBER: _ClassVar[int]
    TOTAL_VAT_FIELD_NUMBER: _ClassVar[int]
    bank_account_number: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.ModelSpec]
    bank_registration_number: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.ModelSpec]
    bic: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.ModelSpec]
    credit_card_last_four: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.ModelSpec]
    currency: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.ModelSpec]
    customer_number: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.ModelSpec]
    document_date: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.ModelSpec]
    document_number: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.ModelSpec]
    document_type: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.ModelSpec]
    iban: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.ModelSpec]
    invoice_number: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.ModelSpec]
    ocr_line_dk_creditor_id: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.ModelSpec]
    ocr_line_dk_payment_id: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.ModelSpec]
    ocr_line_dk_type: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.ModelSpec]
    ocr_line_fi_payment_id: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.ModelSpec]
    ocr_line_nl_payment_id: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.ModelSpec]
    ocr_line_no_payment_id: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.ModelSpec]
    ocr_line_se_bankgiro_creditor_id: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.ModelSpec]
    ocr_line_se_payment_id: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.ModelSpec]
    ocr_line_se_plusgiro_creditor_id: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.ModelSpec]
    order_date: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.ModelSpec]
    order_number: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.ModelSpec]
    order_reference: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.ModelSpec]
    payment_due_date: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.ModelSpec]
    payment_method: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.ModelSpec]
    supplier_address: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.ModelSpec]
    supplier_corporate_id: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.ModelSpec]
    supplier_country_code: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.ModelSpec]
    supplier_name: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.ModelSpec]
    supplier_organisation_number: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.ModelSpec]
    supplier_vat_number: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.ModelSpec]
    total_excl_vat: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.ModelSpec]
    total_incl_vat: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.ModelSpec]
    total_vat: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.ModelSpec]
    def __init__(self, total_incl_vat: _Optional[_Iterable[_Union[_candidate_pb2.ModelSpec, _Mapping]]] = ..., total_vat: _Optional[_Iterable[_Union[_candidate_pb2.ModelSpec, _Mapping]]] = ..., total_excl_vat: _Optional[_Iterable[_Union[_candidate_pb2.ModelSpec, _Mapping]]] = ..., order_date: _Optional[_Iterable[_Union[_candidate_pb2.ModelSpec, _Mapping]]] = ..., payment_due_date: _Optional[_Iterable[_Union[_candidate_pb2.ModelSpec, _Mapping]]] = ..., document_type: _Optional[_Iterable[_Union[_candidate_pb2.ModelSpec, _Mapping]]] = ..., currency: _Optional[_Iterable[_Union[_candidate_pb2.ModelSpec, _Mapping]]] = ..., credit_card_last_four: _Optional[_Iterable[_Union[_candidate_pb2.ModelSpec, _Mapping]]] = ..., payment_method: _Optional[_Iterable[_Union[_candidate_pb2.ModelSpec, _Mapping]]] = ..., ocr_line_dk_type: _Optional[_Iterable[_Union[_candidate_pb2.ModelSpec, _Mapping]]] = ..., ocr_line_dk_payment_id: _Optional[_Iterable[_Union[_candidate_pb2.ModelSpec, _Mapping]]] = ..., ocr_line_dk_creditor_id: _Optional[_Iterable[_Union[_candidate_pb2.ModelSpec, _Mapping]]] = ..., ocr_line_se_payment_id: _Optional[_Iterable[_Union[_candidate_pb2.ModelSpec, _Mapping]]] = ..., ocr_line_se_bankgiro_creditor_id: _Optional[_Iterable[_Union[_candidate_pb2.ModelSpec, _Mapping]]] = ..., ocr_line_se_plusgiro_creditor_id: _Optional[_Iterable[_Union[_candidate_pb2.ModelSpec, _Mapping]]] = ..., ocr_line_no_payment_id: _Optional[_Iterable[_Union[_candidate_pb2.ModelSpec, _Mapping]]] = ..., ocr_line_fi_payment_id: _Optional[_Iterable[_Union[_candidate_pb2.ModelSpec, _Mapping]]] = ..., ocr_line_nl_payment_id: _Optional[_Iterable[_Union[_candidate_pb2.ModelSpec, _Mapping]]] = ..., supplier_corporate_id: _Optional[_Iterable[_Union[_candidate_pb2.ModelSpec, _Mapping]]] = ..., supplier_country_code: _Optional[_Iterable[_Union[_candidate_pb2.ModelSpec, _Mapping]]] = ..., invoice_number: _Optional[_Iterable[_Union[_candidate_pb2.ModelSpec, _Mapping]]] = ..., iban: _Optional[_Iterable[_Union[_candidate_pb2.ModelSpec, _Mapping]]] = ..., order_reference: _Optional[_Iterable[_Union[_candidate_pb2.ModelSpec, _Mapping]]] = ..., bank_account_number: _Optional[_Iterable[_Union[_candidate_pb2.ModelSpec, _Mapping]]] = ..., bank_registration_number: _Optional[_Iterable[_Union[_candidate_pb2.ModelSpec, _Mapping]]] = ..., supplier_name: _Optional[_Iterable[_Union[_candidate_pb2.ModelSpec, _Mapping]]] = ..., bic: _Optional[_Iterable[_Union[_candidate_pb2.ModelSpec, _Mapping]]] = ..., document_number: _Optional[_Iterable[_Union[_candidate_pb2.ModelSpec, _Mapping]]] = ..., document_date: _Optional[_Iterable[_Union[_candidate_pb2.ModelSpec, _Mapping]]] = ..., order_number: _Optional[_Iterable[_Union[_candidate_pb2.ModelSpec, _Mapping]]] = ..., supplier_vat_number: _Optional[_Iterable[_Union[_candidate_pb2.ModelSpec, _Mapping]]] = ..., supplier_organisation_number: _Optional[_Iterable[_Union[_candidate_pb2.ModelSpec, _Mapping]]] = ..., supplier_address: _Optional[_Iterable[_Union[_candidate_pb2.ModelSpec, _Mapping]]] = ..., customer_number: _Optional[_Iterable[_Union[_candidate_pb2.ModelSpec, _Mapping]]] = ...) -> None: ...

class PredictionValues(_message.Message):
    __slots__ = ["bank_account_number", "bank_registration_number", "bic", "credit_card_last_four", "currency", "customer_number", "document_date", "document_number", "document_type", "iban", "invoice_number", "ocr_line_dk_creditor_id", "ocr_line_dk_payment_id", "ocr_line_dk_type", "ocr_line_fi_payment_id", "ocr_line_nl_payment_id", "ocr_line_no_payment_id", "ocr_line_se_bankgiro_creditor_id", "ocr_line_se_payment_id", "ocr_line_se_plusgiro_creditor_id", "order_date", "order_number", "order_reference", "payment_due_date", "payment_method", "supplier_address", "supplier_corporate_id", "supplier_country_code", "supplier_name", "supplier_organisation_number", "supplier_vat_number", "total_excl_vat", "total_incl_vat", "total_vat"]
    BANK_ACCOUNT_NUMBER_FIELD_NUMBER: _ClassVar[int]
    BANK_REGISTRATION_NUMBER_FIELD_NUMBER: _ClassVar[int]
    BIC_FIELD_NUMBER: _ClassVar[int]
    CREDIT_CARD_LAST_FOUR_FIELD_NUMBER: _ClassVar[int]
    CURRENCY_FIELD_NUMBER: _ClassVar[int]
    CUSTOMER_NUMBER_FIELD_NUMBER: _ClassVar[int]
    DOCUMENT_DATE_FIELD_NUMBER: _ClassVar[int]
    DOCUMENT_NUMBER_FIELD_NUMBER: _ClassVar[int]
    DOCUMENT_TYPE_FIELD_NUMBER: _ClassVar[int]
    IBAN_FIELD_NUMBER: _ClassVar[int]
    INVOICE_NUMBER_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_DK_CREDITOR_ID_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_DK_PAYMENT_ID_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_DK_TYPE_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_FI_PAYMENT_ID_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_NL_PAYMENT_ID_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_NO_PAYMENT_ID_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_SE_BANKGIRO_CREDITOR_ID_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_SE_PAYMENT_ID_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_SE_PLUSGIRO_CREDITOR_ID_FIELD_NUMBER: _ClassVar[int]
    ORDER_DATE_FIELD_NUMBER: _ClassVar[int]
    ORDER_NUMBER_FIELD_NUMBER: _ClassVar[int]
    ORDER_REFERENCE_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_DUE_DATE_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_METHOD_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_CORPORATE_ID_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_COUNTRY_CODE_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_NAME_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_ORGANISATION_NUMBER_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_VAT_NUMBER_FIELD_NUMBER: _ClassVar[int]
    TOTAL_EXCL_VAT_FIELD_NUMBER: _ClassVar[int]
    TOTAL_INCL_VAT_FIELD_NUMBER: _ClassVar[int]
    TOTAL_VAT_FIELD_NUMBER: _ClassVar[int]
    bank_account_number: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.StringValue]
    bank_registration_number: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.StringValue]
    bic: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.StringValue]
    credit_card_last_four: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.StringValue]
    currency: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.StringValue]
    customer_number: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.StringValue]
    document_date: _containers.RepeatedCompositeFieldContainer[_date_pb2.Date]
    document_number: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.StringValue]
    document_type: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.StringValue]
    iban: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.StringValue]
    invoice_number: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.StringValue]
    ocr_line_dk_creditor_id: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.StringValue]
    ocr_line_dk_payment_id: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.StringValue]
    ocr_line_dk_type: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.StringValue]
    ocr_line_fi_payment_id: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.StringValue]
    ocr_line_nl_payment_id: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.StringValue]
    ocr_line_no_payment_id: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.StringValue]
    ocr_line_se_bankgiro_creditor_id: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.StringValue]
    ocr_line_se_payment_id: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.StringValue]
    ocr_line_se_plusgiro_creditor_id: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.StringValue]
    order_date: _containers.RepeatedCompositeFieldContainer[_date_pb2.Date]
    order_number: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.StringValue]
    order_reference: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.StringValue]
    payment_due_date: _containers.RepeatedCompositeFieldContainer[_date_pb2.Date]
    payment_method: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.StringValue]
    supplier_address: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.StringValue]
    supplier_corporate_id: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.StringValue]
    supplier_country_code: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.StringValue]
    supplier_name: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.StringValue]
    supplier_organisation_number: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.StringValue]
    supplier_vat_number: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.StringValue]
    total_excl_vat: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.DoubleValue]
    total_incl_vat: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.DoubleValue]
    total_vat: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.DoubleValue]
    def __init__(self, total_incl_vat: _Optional[_Iterable[_Union[_wrappers_pb2.DoubleValue, _Mapping]]] = ..., total_vat: _Optional[_Iterable[_Union[_wrappers_pb2.DoubleValue, _Mapping]]] = ..., total_excl_vat: _Optional[_Iterable[_Union[_wrappers_pb2.DoubleValue, _Mapping]]] = ..., order_date: _Optional[_Iterable[_Union[_date_pb2.Date, _Mapping]]] = ..., payment_due_date: _Optional[_Iterable[_Union[_date_pb2.Date, _Mapping]]] = ..., document_type: _Optional[_Iterable[_Union[_wrappers_pb2.StringValue, _Mapping]]] = ..., currency: _Optional[_Iterable[_Union[_wrappers_pb2.StringValue, _Mapping]]] = ..., credit_card_last_four: _Optional[_Iterable[_Union[_wrappers_pb2.StringValue, _Mapping]]] = ..., payment_method: _Optional[_Iterable[_Union[_wrappers_pb2.StringValue, _Mapping]]] = ..., ocr_line_dk_type: _Optional[_Iterable[_Union[_wrappers_pb2.StringValue, _Mapping]]] = ..., ocr_line_dk_payment_id: _Optional[_Iterable[_Union[_wrappers_pb2.StringValue, _Mapping]]] = ..., ocr_line_dk_creditor_id: _Optional[_Iterable[_Union[_wrappers_pb2.StringValue, _Mapping]]] = ..., ocr_line_se_payment_id: _Optional[_Iterable[_Union[_wrappers_pb2.StringValue, _Mapping]]] = ..., ocr_line_se_bankgiro_creditor_id: _Optional[_Iterable[_Union[_wrappers_pb2.StringValue, _Mapping]]] = ..., ocr_line_se_plusgiro_creditor_id: _Optional[_Iterable[_Union[_wrappers_pb2.StringValue, _Mapping]]] = ..., ocr_line_no_payment_id: _Optional[_Iterable[_Union[_wrappers_pb2.StringValue, _Mapping]]] = ..., ocr_line_fi_payment_id: _Optional[_Iterable[_Union[_wrappers_pb2.StringValue, _Mapping]]] = ..., ocr_line_nl_payment_id: _Optional[_Iterable[_Union[_wrappers_pb2.StringValue, _Mapping]]] = ..., supplier_corporate_id: _Optional[_Iterable[_Union[_wrappers_pb2.StringValue, _Mapping]]] = ..., supplier_country_code: _Optional[_Iterable[_Union[_wrappers_pb2.StringValue, _Mapping]]] = ..., invoice_number: _Optional[_Iterable[_Union[_wrappers_pb2.StringValue, _Mapping]]] = ..., iban: _Optional[_Iterable[_Union[_wrappers_pb2.StringValue, _Mapping]]] = ..., order_reference: _Optional[_Iterable[_Union[_wrappers_pb2.StringValue, _Mapping]]] = ..., bank_account_number: _Optional[_Iterable[_Union[_wrappers_pb2.StringValue, _Mapping]]] = ..., bank_registration_number: _Optional[_Iterable[_Union[_wrappers_pb2.StringValue, _Mapping]]] = ..., supplier_name: _Optional[_Iterable[_Union[_wrappers_pb2.StringValue, _Mapping]]] = ..., bic: _Optional[_Iterable[_Union[_wrappers_pb2.StringValue, _Mapping]]] = ..., document_number: _Optional[_Iterable[_Union[_wrappers_pb2.StringValue, _Mapping]]] = ..., document_date: _Optional[_Iterable[_Union[_date_pb2.Date, _Mapping]]] = ..., order_number: _Optional[_Iterable[_Union[_wrappers_pb2.StringValue, _Mapping]]] = ..., supplier_vat_number: _Optional[_Iterable[_Union[_wrappers_pb2.StringValue, _Mapping]]] = ..., supplier_organisation_number: _Optional[_Iterable[_Union[_wrappers_pb2.StringValue, _Mapping]]] = ..., supplier_address: _Optional[_Iterable[_Union[_wrappers_pb2.StringValue, _Mapping]]] = ..., customer_number: _Optional[_Iterable[_Union[_wrappers_pb2.StringValue, _Mapping]]] = ...) -> None: ...

class PrepareFeedbackRequest(_message.Message):
    __slots__ = ["confidences", "document_bytes", "id", "prediction_metadata", "predictions", "segments", "ta", "tags", "tier"]
    CONFIDENCES_FIELD_NUMBER: _ClassVar[int]
    DOCUMENT_BYTES_FIELD_NUMBER: _ClassVar[int]
    ID_FIELD_NUMBER: _ClassVar[int]
    PREDICTIONS_FIELD_NUMBER: _ClassVar[int]
    PREDICTION_METADATA_FIELD_NUMBER: _ClassVar[int]
    SEGMENTS_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    TA_FIELD_NUMBER: _ClassVar[int]
    TIER_FIELD_NUMBER: _ClassVar[int]
    confidences: PredictionConfidences
    document_bytes: bytes
    id: str
    prediction_metadata: PredictionMetadata
    predictions: PredictionValues
    segments: _containers.RepeatedScalarFieldContainer[str]
    ta: _text_annotation_pb2.TextAnnotation
    tags: _containers.RepeatedScalarFieldContainer[str]
    tier: _tier_pb2.Tier
    def __init__(self, id: _Optional[str] = ..., ta: _Optional[_Union[_text_annotation_pb2.TextAnnotation, _Mapping]] = ..., document_bytes: _Optional[bytes] = ..., predictions: _Optional[_Union[PredictionValues, _Mapping]] = ..., tags: _Optional[_Iterable[str]] = ..., confidences: _Optional[_Union[PredictionConfidences, _Mapping]] = ..., prediction_metadata: _Optional[_Union[PredictionMetadata, _Mapping]] = ..., tier: _Optional[_Union[_tier_pb2.Tier, str]] = ..., segments: _Optional[_Iterable[str]] = ...) -> None: ...

class ReadDocumentRequest(_message.Message):
    __slots__ = ["id"]
    ID_FIELD_NUMBER: _ClassVar[int]
    id: str
    def __init__(self, id: _Optional[str] = ...) -> None: ...

class ReadDocumentResponse(_message.Message):
    __slots__ = ["document"]
    DOCUMENT_FIELD_NUMBER: _ClassVar[int]
    document: Document
    def __init__(self, document: _Optional[_Union[Document, _Mapping]] = ...) -> None: ...

class TrueValues(_message.Message):
    __slots__ = ["bank_account_number", "bank_registration_number", "bic", "credit_card_last_four", "currency", "customer_number", "document_date", "document_number", "document_type", "iban", "invoice_number", "ocr_line_dk_creditor_id", "ocr_line_dk_payment_id", "ocr_line_dk_type", "ocr_line_fi_payment_id", "ocr_line_nl_payment_id", "ocr_line_no_payment_id", "ocr_line_se_bankgiro_creditor_id", "ocr_line_se_payment_id", "ocr_line_se_plusgiro_creditor_id", "order_date", "order_number", "order_reference", "payment_due_date", "payment_method", "supplier_address", "supplier_corporate_id", "supplier_country_code", "supplier_name", "supplier_organisation_number", "supplier_vat_number", "total_excl_vat", "total_incl_vat", "total_vat"]
    BANK_ACCOUNT_NUMBER_FIELD_NUMBER: _ClassVar[int]
    BANK_REGISTRATION_NUMBER_FIELD_NUMBER: _ClassVar[int]
    BIC_FIELD_NUMBER: _ClassVar[int]
    CREDIT_CARD_LAST_FOUR_FIELD_NUMBER: _ClassVar[int]
    CURRENCY_FIELD_NUMBER: _ClassVar[int]
    CUSTOMER_NUMBER_FIELD_NUMBER: _ClassVar[int]
    DOCUMENT_DATE_FIELD_NUMBER: _ClassVar[int]
    DOCUMENT_NUMBER_FIELD_NUMBER: _ClassVar[int]
    DOCUMENT_TYPE_FIELD_NUMBER: _ClassVar[int]
    IBAN_FIELD_NUMBER: _ClassVar[int]
    INVOICE_NUMBER_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_DK_CREDITOR_ID_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_DK_PAYMENT_ID_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_DK_TYPE_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_FI_PAYMENT_ID_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_NL_PAYMENT_ID_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_NO_PAYMENT_ID_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_SE_BANKGIRO_CREDITOR_ID_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_SE_PAYMENT_ID_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_SE_PLUSGIRO_CREDITOR_ID_FIELD_NUMBER: _ClassVar[int]
    ORDER_DATE_FIELD_NUMBER: _ClassVar[int]
    ORDER_NUMBER_FIELD_NUMBER: _ClassVar[int]
    ORDER_REFERENCE_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_DUE_DATE_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_METHOD_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_CORPORATE_ID_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_COUNTRY_CODE_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_NAME_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_ORGANISATION_NUMBER_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_VAT_NUMBER_FIELD_NUMBER: _ClassVar[int]
    TOTAL_EXCL_VAT_FIELD_NUMBER: _ClassVar[int]
    TOTAL_INCL_VAT_FIELD_NUMBER: _ClassVar[int]
    TOTAL_VAT_FIELD_NUMBER: _ClassVar[int]
    bank_account_number: _wrappers_pb2.StringValue
    bank_registration_number: _wrappers_pb2.StringValue
    bic: _wrappers_pb2.StringValue
    credit_card_last_four: _wrappers_pb2.StringValue
    currency: _wrappers_pb2.StringValue
    customer_number: _wrappers_pb2.StringValue
    document_date: _date_pb2.Date
    document_number: _wrappers_pb2.StringValue
    document_type: _wrappers_pb2.StringValue
    iban: _wrappers_pb2.StringValue
    invoice_number: _wrappers_pb2.StringValue
    ocr_line_dk_creditor_id: _wrappers_pb2.StringValue
    ocr_line_dk_payment_id: _wrappers_pb2.StringValue
    ocr_line_dk_type: _wrappers_pb2.StringValue
    ocr_line_fi_payment_id: _wrappers_pb2.StringValue
    ocr_line_nl_payment_id: _wrappers_pb2.StringValue
    ocr_line_no_payment_id: _wrappers_pb2.StringValue
    ocr_line_se_bankgiro_creditor_id: _wrappers_pb2.StringValue
    ocr_line_se_payment_id: _wrappers_pb2.StringValue
    ocr_line_se_plusgiro_creditor_id: _wrappers_pb2.StringValue
    order_date: _date_pb2.Date
    order_number: _wrappers_pb2.StringValue
    order_reference: _wrappers_pb2.StringValue
    payment_due_date: _date_pb2.Date
    payment_method: _wrappers_pb2.StringValue
    supplier_address: _wrappers_pb2.StringValue
    supplier_corporate_id: _wrappers_pb2.StringValue
    supplier_country_code: _wrappers_pb2.StringValue
    supplier_name: _wrappers_pb2.StringValue
    supplier_organisation_number: _wrappers_pb2.StringValue
    supplier_vat_number: _wrappers_pb2.StringValue
    total_excl_vat: _wrappers_pb2.DoubleValue
    total_incl_vat: _wrappers_pb2.DoubleValue
    total_vat: _wrappers_pb2.DoubleValue
    def __init__(self, total_incl_vat: _Optional[_Union[_wrappers_pb2.DoubleValue, _Mapping]] = ..., total_vat: _Optional[_Union[_wrappers_pb2.DoubleValue, _Mapping]] = ..., total_excl_vat: _Optional[_Union[_wrappers_pb2.DoubleValue, _Mapping]] = ..., order_date: _Optional[_Union[_date_pb2.Date, _Mapping]] = ..., payment_due_date: _Optional[_Union[_date_pb2.Date, _Mapping]] = ..., document_type: _Optional[_Union[_wrappers_pb2.StringValue, _Mapping]] = ..., currency: _Optional[_Union[_wrappers_pb2.StringValue, _Mapping]] = ..., credit_card_last_four: _Optional[_Union[_wrappers_pb2.StringValue, _Mapping]] = ..., payment_method: _Optional[_Union[_wrappers_pb2.StringValue, _Mapping]] = ..., ocr_line_dk_type: _Optional[_Union[_wrappers_pb2.StringValue, _Mapping]] = ..., ocr_line_dk_payment_id: _Optional[_Union[_wrappers_pb2.StringValue, _Mapping]] = ..., ocr_line_dk_creditor_id: _Optional[_Union[_wrappers_pb2.StringValue, _Mapping]] = ..., ocr_line_se_payment_id: _Optional[_Union[_wrappers_pb2.StringValue, _Mapping]] = ..., ocr_line_se_bankgiro_creditor_id: _Optional[_Union[_wrappers_pb2.StringValue, _Mapping]] = ..., ocr_line_se_plusgiro_creditor_id: _Optional[_Union[_wrappers_pb2.StringValue, _Mapping]] = ..., ocr_line_no_payment_id: _Optional[_Union[_wrappers_pb2.StringValue, _Mapping]] = ..., ocr_line_fi_payment_id: _Optional[_Union[_wrappers_pb2.StringValue, _Mapping]] = ..., ocr_line_nl_payment_id: _Optional[_Union[_wrappers_pb2.StringValue, _Mapping]] = ..., supplier_corporate_id: _Optional[_Union[_wrappers_pb2.StringValue, _Mapping]] = ..., supplier_country_code: _Optional[_Union[_wrappers_pb2.StringValue, _Mapping]] = ..., invoice_number: _Optional[_Union[_wrappers_pb2.StringValue, _Mapping]] = ..., iban: _Optional[_Union[_wrappers_pb2.StringValue, _Mapping]] = ..., order_reference: _Optional[_Union[_wrappers_pb2.StringValue, _Mapping]] = ..., bank_account_number: _Optional[_Union[_wrappers_pb2.StringValue, _Mapping]] = ..., bank_registration_number: _Optional[_Union[_wrappers_pb2.StringValue, _Mapping]] = ..., supplier_name: _Optional[_Union[_wrappers_pb2.StringValue, _Mapping]] = ..., bic: _Optional[_Union[_wrappers_pb2.StringValue, _Mapping]] = ..., document_number: _Optional[_Union[_wrappers_pb2.StringValue, _Mapping]] = ..., document_date: _Optional[_Union[_date_pb2.Date, _Mapping]] = ..., order_number: _Optional[_Union[_wrappers_pb2.StringValue, _Mapping]] = ..., supplier_vat_number: _Optional[_Union[_wrappers_pb2.StringValue, _Mapping]] = ..., supplier_organisation_number: _Optional[_Union[_wrappers_pb2.StringValue, _Mapping]] = ..., supplier_address: _Optional[_Union[_wrappers_pb2.StringValue, _Mapping]] = ..., customer_number: _Optional[_Union[_wrappers_pb2.StringValue, _Mapping]] = ...) -> None: ...
