from google.api import annotations_pb2 as _annotations_pb2
from protoc_gen_openapiv2.options import annotations_pb2 as _annotations_pb2_1
from ssn.type import candidate_pb2 as _candidate_pb2
from ssn.type import text_annotation_pb2 as _text_annotation_pb2
from ssn.type import tier_pb2 as _tier_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Document(_message.Message):
    __slots__ = ["content", "source"]
    CONTENT_FIELD_NUMBER: _ClassVar[int]
    SOURCE_FIELD_NUMBER: _ClassVar[int]
    content: bytes
    source: DocumentSource
    def __init__(self, content: _Optional[bytes] = ..., source: _Optional[_Union[DocumentSource, _Mapping]] = ...) -> None: ...

class DocumentAnnotatorRequest(_message.Message):
    __slots__ = ["document", "features", "segments", "tags", "tier"]
    DOCUMENT_FIELD_NUMBER: _ClassVar[int]
    FEATURES_FIELD_NUMBER: _ClassVar[int]
    SEGMENTS_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    TIER_FIELD_NUMBER: _ClassVar[int]
    document: Document
    features: _containers.RepeatedCompositeFieldContainer[Feature]
    segments: _containers.RepeatedScalarFieldContainer[str]
    tags: _containers.RepeatedScalarFieldContainer[str]
    tier: _tier_pb2.Tier
    def __init__(self, document: _Optional[_Union[Document, _Mapping]] = ..., features: _Optional[_Iterable[_Union[Feature, _Mapping]]] = ..., tags: _Optional[_Iterable[str]] = ..., tier: _Optional[_Union[_tier_pb2.Tier, str]] = ..., segments: _Optional[_Iterable[str]] = ...) -> None: ...

class DocumentAnnotatorResponse(_message.Message):
    __slots__ = ["bank_account_number", "bank_registration_number", "bic", "credit_card_last_four", "currency", "customer_number", "document_date", "document_number", "document_type", "feedback_id", "iban", "invoice_number", "lines", "ocr_line_dk_creditor_id", "ocr_line_dk_payment_id", "ocr_line_dk_type", "ocr_line_fi_payment_id", "ocr_line_nl_payment_id", "ocr_line_no_payment_id", "ocr_line_se_bankgiro_creditor_id", "ocr_line_se_payment_id", "ocr_line_se_plusgiro_creditor_id", "order_date", "order_number", "payment_due_date", "payment_method", "preview", "supplier_address", "supplier_corporate_id", "supplier_country_code", "supplier_name", "supplier_organisation_number", "supplier_vat_number", "text", "text_annotation", "total_excl_vat", "total_incl_vat", "total_vat"]
    BANK_ACCOUNT_NUMBER_FIELD_NUMBER: _ClassVar[int]
    BANK_REGISTRATION_NUMBER_FIELD_NUMBER: _ClassVar[int]
    BIC_FIELD_NUMBER: _ClassVar[int]
    CREDIT_CARD_LAST_FOUR_FIELD_NUMBER: _ClassVar[int]
    CURRENCY_FIELD_NUMBER: _ClassVar[int]
    CUSTOMER_NUMBER_FIELD_NUMBER: _ClassVar[int]
    DOCUMENT_DATE_FIELD_NUMBER: _ClassVar[int]
    DOCUMENT_NUMBER_FIELD_NUMBER: _ClassVar[int]
    DOCUMENT_TYPE_FIELD_NUMBER: _ClassVar[int]
    FEEDBACK_ID_FIELD_NUMBER: _ClassVar[int]
    IBAN_FIELD_NUMBER: _ClassVar[int]
    INVOICE_NUMBER_FIELD_NUMBER: _ClassVar[int]
    LINES_FIELD_NUMBER: _ClassVar[int]
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
    PAYMENT_DUE_DATE_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_METHOD_FIELD_NUMBER: _ClassVar[int]
    PREVIEW_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_CORPORATE_ID_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_COUNTRY_CODE_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_NAME_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_ORGANISATION_NUMBER_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_VAT_NUMBER_FIELD_NUMBER: _ClassVar[int]
    TEXT_ANNOTATION_FIELD_NUMBER: _ClassVar[int]
    TEXT_FIELD_NUMBER: _ClassVar[int]
    TOTAL_EXCL_VAT_FIELD_NUMBER: _ClassVar[int]
    TOTAL_INCL_VAT_FIELD_NUMBER: _ClassVar[int]
    TOTAL_VAT_FIELD_NUMBER: _ClassVar[int]
    bank_account_number: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    bank_registration_number: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    bic: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    credit_card_last_four: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    currency: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    customer_number: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    document_date: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    document_number: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    document_type: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    feedback_id: str
    iban: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    invoice_number: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    lines: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.LineCandidate]
    ocr_line_dk_creditor_id: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    ocr_line_dk_payment_id: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    ocr_line_dk_type: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    ocr_line_fi_payment_id: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    ocr_line_nl_payment_id: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    ocr_line_no_payment_id: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    ocr_line_se_bankgiro_creditor_id: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    ocr_line_se_payment_id: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    ocr_line_se_plusgiro_creditor_id: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    order_date: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    order_number: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    payment_due_date: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    payment_method: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    preview: str
    supplier_address: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    supplier_corporate_id: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    supplier_country_code: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    supplier_name: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    supplier_organisation_number: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    supplier_vat_number: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    text: str
    text_annotation: _text_annotation_pb2.TextAnnotation
    total_excl_vat: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    total_incl_vat: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    total_vat: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    def __init__(self, order_date: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., payment_due_date: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., currency: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., total_vat: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., total_incl_vat: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., total_excl_vat: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., supplier_corporate_id: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., supplier_country_code: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., document_type: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., payment_method: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., credit_card_last_four: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., invoice_number: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., text_annotation: _Optional[_Union[_text_annotation_pb2.TextAnnotation, _Mapping]] = ..., ocr_line_dk_type: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., ocr_line_dk_payment_id: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., ocr_line_dk_creditor_id: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., ocr_line_se_payment_id: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., ocr_line_se_bankgiro_creditor_id: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., ocr_line_se_plusgiro_creditor_id: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., ocr_line_no_payment_id: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., ocr_line_fi_payment_id: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., ocr_line_nl_payment_id: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., text: _Optional[str] = ..., feedback_id: _Optional[str] = ..., iban: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., lines: _Optional[_Iterable[_Union[_candidate_pb2.LineCandidate, _Mapping]]] = ..., preview: _Optional[str] = ..., bank_account_number: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., bank_registration_number: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., bic: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., document_number: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., document_date: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., order_number: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., supplier_name: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., supplier_vat_number: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., supplier_organisation_number: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., supplier_address: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., customer_number: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ...) -> None: ...

class DocumentSource(_message.Message):
    __slots__ = ["http_uri"]
    HTTP_URI_FIELD_NUMBER: _ClassVar[int]
    http_uri: str
    def __init__(self, http_uri: _Optional[str] = ...) -> None: ...

class Feature(_message.Message):
    __slots__ = ["max_results", "min_confidence", "type"]
    class Type(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
    BANK_ACCOUNT_NUMBER: Feature.Type
    BANK_REGISTRATION_NUMBER: Feature.Type
    BIC: Feature.Type
    CREDIT_CARD_LAST_FOUR: Feature.Type
    CURRENCY: Feature.Type
    CUSTOMER_NUMBER: Feature.Type
    DEFAULT: Feature.Type
    DOCUMENT_DATE: Feature.Type
    DOCUMENT_NUMBER: Feature.Type
    DOCUMENT_TYPE: Feature.Type
    IBAN: Feature.Type
    INVOICE_NUMBER: Feature.Type
    LINES: Feature.Type
    MAX_RESULTS_FIELD_NUMBER: _ClassVar[int]
    MIN_CONFIDENCE_FIELD_NUMBER: _ClassVar[int]
    OCR_LINE_DK_CREDITOR_ID: Feature.Type
    OCR_LINE_DK_PAYMENT_ID: Feature.Type
    OCR_LINE_DK_TYPE: Feature.Type
    OCR_LINE_FI_PAYMENT_ID: Feature.Type
    OCR_LINE_NL_PAYMENT_ID: Feature.Type
    OCR_LINE_NO_PAYMENT_ID: Feature.Type
    OCR_LINE_SE_BANKGIRO_CREDITOR_ID: Feature.Type
    OCR_LINE_SE_PAYMENT_ID: Feature.Type
    OCR_LINE_SE_PLUSGIRO_CREDITOR_ID: Feature.Type
    ORDER_DATE: Feature.Type
    ORDER_NUMBER: Feature.Type
    PAYMENT_DUE_DATE: Feature.Type
    PAYMENT_METHOD: Feature.Type
    PREVIEW: Feature.Type
    SUPPLIER_ADDRESS: Feature.Type
    SUPPLIER_CORPORATE_ID: Feature.Type
    SUPPLIER_COUNTRY_CODE: Feature.Type
    SUPPLIER_NAME: Feature.Type
    SUPPLIER_ORGANISATION_NUMBER: Feature.Type
    SUPPLIER_VAT_NUMBER: Feature.Type
    TEXT: Feature.Type
    TEXT_ANNOTATION: Feature.Type
    TOTAL_EXCL_VAT: Feature.Type
    TOTAL_INCL_VAT: Feature.Type
    TOTAL_VAT: Feature.Type
    TYPE_FIELD_NUMBER: _ClassVar[int]
    max_results: int
    min_confidence: _candidate_pb2.Confidence.Level
    type: Feature.Type
    def __init__(self, type: _Optional[_Union[Feature.Type, str]] = ..., max_results: _Optional[int] = ..., min_confidence: _Optional[_Union[_candidate_pb2.Confidence.Level, str]] = ...) -> None: ...
