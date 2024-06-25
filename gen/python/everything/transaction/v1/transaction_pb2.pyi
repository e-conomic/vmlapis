from google.api import annotations_pb2 as _annotations_pb2
from google.protobuf import empty_pb2 as _empty_pb2
from protoc_gen_openapiv2.options import annotations_pb2 as _annotations_pb2_1
from ssn.annotator.v1 import annotator_pb2 as _annotator_pb2
from ssn.type import candidate_pb2 as _candidate_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class CreateTransactionRequest(_message.Message):
    __slots__ = ["document", "tags", "features"]
    DOCUMENT_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    FEATURES_FIELD_NUMBER: _ClassVar[int]
    document: _annotator_pb2.Document
    tags: _containers.RepeatedScalarFieldContainer[str]
    features: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, document: _Optional[_Union[_annotator_pb2.Document, _Mapping]] = ..., tags: _Optional[_Iterable[str]] = ..., features: _Optional[_Iterable[str]] = ...) -> None: ...

class CreateTransactionResponse(_message.Message):
    __slots__ = ["id"]
    ID_FIELD_NUMBER: _ClassVar[int]
    id: str
    def __init__(self, id: _Optional[str] = ...) -> None: ...

class GetTransactionResultsRequest(_message.Message):
    __slots__ = ["id"]
    ID_FIELD_NUMBER: _ClassVar[int]
    id: str
    def __init__(self, id: _Optional[str] = ...) -> None: ...

class GetTransactionResultsResponse(_message.Message):
    __slots__ = ["id", "annotations"]
    ID_FIELD_NUMBER: _ClassVar[int]
    ANNOTATIONS_FIELD_NUMBER: _ClassVar[int]
    id: str
    annotations: _containers.RepeatedCompositeFieldContainer[Annotation]
    def __init__(self, id: _Optional[str] = ..., annotations: _Optional[_Iterable[_Union[Annotation, _Mapping]]] = ...) -> None: ...

class Candidate(_message.Message):
    __slots__ = ["candidate"]
    CANDIDATE_FIELD_NUMBER: _ClassVar[int]
    candidate: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.Candidate]
    def __init__(self, candidate: _Optional[_Iterable[_Union[_candidate_pb2.Candidate, _Mapping]]] = ...) -> None: ...

class PurchaseLineCandidate(_message.Message):
    __slots__ = ["purchase_line_candidate"]
    PURCHASE_LINE_CANDIDATE_FIELD_NUMBER: _ClassVar[int]
    purchase_line_candidate: _containers.RepeatedCompositeFieldContainer[_candidate_pb2.PurchaseLineCandidate]
    def __init__(self, purchase_line_candidate: _Optional[_Iterable[_Union[_candidate_pb2.PurchaseLineCandidate, _Mapping]]] = ...) -> None: ...

class Annotation(_message.Message):
    __slots__ = ["feature", "candidate", "purchase_line_candidate"]
    FEATURE_FIELD_NUMBER: _ClassVar[int]
    CANDIDATE_FIELD_NUMBER: _ClassVar[int]
    PURCHASE_LINE_CANDIDATE_FIELD_NUMBER: _ClassVar[int]
    feature: str
    candidate: Candidate
    purchase_line_candidate: PurchaseLineCandidate
    def __init__(self, feature: _Optional[str] = ..., candidate: _Optional[_Union[Candidate, _Mapping]] = ..., purchase_line_candidate: _Optional[_Union[PurchaseLineCandidate, _Mapping]] = ...) -> None: ...

class GetTransactionStatusRequest(_message.Message):
    __slots__ = ["id"]
    ID_FIELD_NUMBER: _ClassVar[int]
    id: str
    def __init__(self, id: _Optional[str] = ...) -> None: ...

class GetTransactionStatusResponse(_message.Message):
    __slots__ = ["id", "status", "error_message"]
    ID_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    ERROR_MESSAGE_FIELD_NUMBER: _ClassVar[int]
    id: str
    status: str
    error_message: str
    def __init__(self, id: _Optional[str] = ..., status: _Optional[str] = ..., error_message: _Optional[str] = ...) -> None: ...

class DeleteTransactionRequest(_message.Message):
    __slots__ = ["id"]
    ID_FIELD_NUMBER: _ClassVar[int]
    id: str
    def __init__(self, id: _Optional[str] = ...) -> None: ...
