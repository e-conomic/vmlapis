from google.type import date_pb2 as _date_pb2
from ssn.type import candidate_pb2 as _candidate_pb2
from ssn.type import text_annotation_pb2 as _text_annotation_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class FeatureGenPredictRequest(_message.Message):
    __slots__ = ["feature_gen_request", "predict_request"]
    FEATURE_GEN_REQUEST_FIELD_NUMBER: _ClassVar[int]
    PREDICT_REQUEST_FIELD_NUMBER: _ClassVar[int]
    feature_gen_request: FeatureGenRequest
    predict_request: PredictRequest
    def __init__(self, feature_gen_request: _Optional[_Union[FeatureGenRequest, _Mapping]] = ..., predict_request: _Optional[_Union[PredictRequest, _Mapping]] = ...) -> None: ...

class FeatureGenRequest(_message.Message):
    __slots__ = ["id", "text_annotation", "truth_labels"]
    class TruthLabels(_message.Message):
        __slots__ = ["bank_account_number", "bank_registration_number", "bic", "credit_card_last_four", "credit_card_number", "currency", "customer_number", "document_date", "document_number", "document_type", "iban", "invoice_number", "ocr_line_dk_creditor_id", "ocr_line_dk_payment_id", "ocr_line_dk_type", "ocr_line_fi_payment_id", "ocr_line_nl_payment_id", "ocr_line_no_payment_id", "ocr_line_se_bankgiro_creditor_id", "ocr_line_se_payment_id", "ocr_line_se_plusgiro_creditor_id", "order_date", "order_number", "payment_due_date", "payment_method", "supplier_address", "supplier_corporate_id", "supplier_country_code", "supplier_name", "supplier_organisation_number", "supplier_vat_number", "total_excl_vat", "total_incl_vat", "total_vat"]
        BANK_ACCOUNT_NUMBER_FIELD_NUMBER: _ClassVar[int]
        BANK_REGISTRATION_NUMBER_FIELD_NUMBER: _ClassVar[int]
        BIC_FIELD_NUMBER: _ClassVar[int]
        CREDIT_CARD_LAST_FOUR_FIELD_NUMBER: _ClassVar[int]
        CREDIT_CARD_NUMBER_FIELD_NUMBER: _ClassVar[int]
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
        bank_account_number: str
        bank_registration_number: str
        bic: str
        credit_card_last_four: str
        credit_card_number: str
        currency: str
        customer_number: str
        document_date: _date_pb2.Date
        document_number: str
        document_type: str
        iban: str
        invoice_number: str
        ocr_line_dk_creditor_id: str
        ocr_line_dk_payment_id: str
        ocr_line_dk_type: str
        ocr_line_fi_payment_id: str
        ocr_line_nl_payment_id: str
        ocr_line_no_payment_id: str
        ocr_line_se_bankgiro_creditor_id: str
        ocr_line_se_payment_id: str
        ocr_line_se_plusgiro_creditor_id: str
        order_date: _date_pb2.Date
        order_number: str
        payment_due_date: _date_pb2.Date
        payment_method: str
        supplier_address: str
        supplier_corporate_id: str
        supplier_country_code: str
        supplier_name: str
        supplier_organisation_number: str
        supplier_vat_number: str
        total_excl_vat: float
        total_incl_vat: float
        total_vat: float
        def __init__(self, total_incl_vat: _Optional[float] = ..., total_vat: _Optional[float] = ..., total_excl_vat: _Optional[float] = ..., order_date: _Optional[_Union[_date_pb2.Date, _Mapping]] = ..., payment_due_date: _Optional[_Union[_date_pb2.Date, _Mapping]] = ..., document_type: _Optional[str] = ..., currency: _Optional[str] = ..., credit_card_number: _Optional[str] = ..., payment_method: _Optional[str] = ..., ocr_line_dk_type: _Optional[str] = ..., ocr_line_dk_payment_id: _Optional[str] = ..., ocr_line_dk_creditor_id: _Optional[str] = ..., ocr_line_se_payment_id: _Optional[str] = ..., ocr_line_se_bankgiro_creditor_id: _Optional[str] = ..., ocr_line_se_plusgiro_creditor_id: _Optional[str] = ..., ocr_line_no_payment_id: _Optional[str] = ..., ocr_line_fi_payment_id: _Optional[str] = ..., ocr_line_nl_payment_id: _Optional[str] = ..., supplier_corporate_id: _Optional[str] = ..., supplier_country_code: _Optional[str] = ..., invoice_number: _Optional[str] = ..., iban: _Optional[str] = ..., bank_account_number: _Optional[str] = ..., bank_registration_number: _Optional[str] = ..., supplier_name: _Optional[str] = ..., bic: _Optional[str] = ..., document_number: _Optional[str] = ..., document_date: _Optional[_Union[_date_pb2.Date, _Mapping]] = ..., order_number: _Optional[str] = ..., supplier_vat_number: _Optional[str] = ..., supplier_organisation_number: _Optional[str] = ..., supplier_address: _Optional[str] = ..., credit_card_last_four: _Optional[str] = ..., customer_number: _Optional[str] = ...) -> None: ...
    ID_FIELD_NUMBER: _ClassVar[int]
    TEXT_ANNOTATION_FIELD_NUMBER: _ClassVar[int]
    TRUTH_LABELS_FIELD_NUMBER: _ClassVar[int]
    id: str
    text_annotation: _text_annotation_pb2.TextAnnotation
    truth_labels: FeatureGenRequest.TruthLabels
    def __init__(self, truth_labels: _Optional[_Union[FeatureGenRequest.TruthLabels, _Mapping]] = ..., text_annotation: _Optional[_Union[_text_annotation_pb2.TextAnnotation, _Mapping]] = ..., id: _Optional[str] = ...) -> None: ...

class FeatureGenResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class PredictRequest(_message.Message):
    __slots__ = ["top_n_most_confident"]
    TOP_N_MOST_CONFIDENT_FIELD_NUMBER: _ClassVar[int]
    top_n_most_confident: int
    def __init__(self, top_n_most_confident: _Optional[int] = ...) -> None: ...

class PredictResponse(_message.Message):
    __slots__ = ["bank_account_number", "bank_registration_number", "bic", "credit_card_last_four", "credit_card_number", "currency", "customer_number", "document_date", "document_number", "document_type", "iban", "invoice_number", "lines", "ocr_line_dk_creditor_id", "ocr_line_dk_payment_id", "ocr_line_dk_type", "ocr_line_fi_payment_id", "ocr_line_nl_payment_id", "ocr_line_no_payment_id", "ocr_line_se_bankgiro_creditor_id", "ocr_line_se_payment_id", "ocr_line_se_plusgiro_creditor_id", "order_date", "order_number", "payment_due_date", "payment_method", "supplier_address", "supplier_corporate_id", "supplier_country_code", "supplier_name", "supplier_organisation_number", "supplier_vat_number", "total_excl_vat", "total_incl_vat", "total_vat"]
    BANK_ACCOUNT_NUMBER_FIELD_NUMBER: _ClassVar[int]
    BANK_REGISTRATION_NUMBER_FIELD_NUMBER: _ClassVar[int]
    BIC_FIELD_NUMBER: _ClassVar[int]
    CREDIT_CARD_LAST_FOUR_FIELD_NUMBER: _ClassVar[int]
    CREDIT_CARD_NUMBER_FIELD_NUMBER: _ClassVar[int]
    CURRENCY_FIELD_NUMBER: _ClassVar[int]
    CUSTOMER_NUMBER_FIELD_NUMBER: _ClassVar[int]
    DOCUMENT_DATE_FIELD_NUMBER: _ClassVar[int]
    DOCUMENT_NUMBER_FIELD_NUMBER: _ClassVar[int]
    DOCUMENT_TYPE_FIELD_NUMBER: _ClassVar[int]
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
    SUPPLIER_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_CORPORATE_ID_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_COUNTRY_CODE_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_NAME_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_ORGANISATION_NUMBER_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_VAT_NUMBER_FIELD_NUMBER: _ClassVar[int]
    TOTAL_EXCL_VAT_FIELD_NUMBER: _ClassVar[int]
    TOTAL_INCL_VAT_FIELD_NUMBER: _ClassVar[int]
    TOTAL_VAT_FIELD_NUMBER: _ClassVar[int]
    bank_account_number: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    bank_registration_number: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    bic: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    credit_card_last_four: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    credit_card_number: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    currency: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    customer_number: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    document_date: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    document_number: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    document_type: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
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
    supplier_address: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    supplier_corporate_id: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    supplier_country_code: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    supplier_name: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    supplier_organisation_number: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    supplier_vat_number: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    total_excl_vat: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    total_incl_vat: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    total_vat: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    def __init__(self, order_date: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., payment_due_date: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., currency: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., total_vat: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., total_incl_vat: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., total_excl_vat: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., supplier_corporate_id: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., supplier_country_code: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., document_type: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., payment_method: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., credit_card_number: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., invoice_number: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., ocr_line_dk_type: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., ocr_line_dk_payment_id: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., ocr_line_dk_creditor_id: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., ocr_line_se_payment_id: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., ocr_line_se_bankgiro_creditor_id: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., ocr_line_se_plusgiro_creditor_id: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., ocr_line_no_payment_id: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., ocr_line_fi_payment_id: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., ocr_line_nl_payment_id: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., iban: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., lines: _Optional[_Iterable[_Union[_candidate_pb2.LineCandidate, _Mapping]]] = ..., bank_account_number: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., bank_registration_number: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., bic: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., document_number: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., document_date: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., order_number: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., supplier_name: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., supplier_vat_number: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., supplier_organisation_number: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., supplier_address: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., credit_card_last_four: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ..., customer_number: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ...) -> None: ...
