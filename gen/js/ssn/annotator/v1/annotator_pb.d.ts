// package: ssn.annotator.v1
// file: ssn/annotator/v1/annotator.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as protoc_gen_openapiv2_options_annotations_pb from "../../../protoc-gen-openapiv2/options/annotations_pb";
import * as ssn_type_candidate_pb from "../../../ssn/type/candidate_pb";
import * as ssn_type_text_annotation_pb from "../../../ssn/type/text_annotation_pb";
import * as ssn_type_tier_pb from "../../../ssn/type/tier_pb";

export class Feature extends jspb.Message { 
    getType(): Feature.Type;
    setType(value: Feature.Type): Feature;
    getMaxResults(): number;
    setMaxResults(value: number): Feature;
    getMinConfidence(): ssn_type_candidate_pb.Confidence.Level;
    setMinConfidence(value: ssn_type_candidate_pb.Confidence.Level): Feature;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Feature.AsObject;
    static toObject(includeInstance: boolean, msg: Feature): Feature.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Feature, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Feature;
    static deserializeBinaryFromReader(message: Feature, reader: jspb.BinaryReader): Feature;
}

export namespace Feature {
    export type AsObject = {
        type: Feature.Type,
        maxResults: number,
        minConfidence: ssn_type_candidate_pb.Confidence.Level,
    }

    export enum Type {
    DEFAULT = 0,
    TEXT_ANNOTATION = 1,
    ORDER_DATE = 2,
    PAYMENT_DUE_DATE = 3,
    CURRENCY = 4,
    TOTAL_VAT = 5,
    TOTAL_INCL_VAT = 6,
    TOTAL_EXCL_VAT = 7,
    SUPPLIER_CORPORATE_ID = 8,
    SUPPLIER_COUNTRY_CODE = 9,
    DOCUMENT_TYPE = 10,
    PAYMENT_METHOD = 11,
    CREDIT_CARD_LAST_FOUR = 12,
    INVOICE_NUMBER = 13,
    OCR_LINE_DK_TYPE = 14,
    OCR_LINE_DK_PAYMENT_ID = 15,
    OCR_LINE_DK_CREDITOR_ID = 16,
    OCR_LINE_SE_PAYMENT_ID = 17,
    OCR_LINE_SE_BANKGIRO_CREDITOR_ID = 18,
    OCR_LINE_SE_PLUSGIRO_CREDITOR_ID = 19,
    OCR_LINE_NO_PAYMENT_ID = 20,
    OCR_LINE_FI_PAYMENT_ID = 21,
    OCR_LINE_NL_PAYMENT_ID = 22,
    TEXT = 23,
    IBAN = 24,
    LINES = 25,
    PREVIEW = 26,
    BANK_ACCOUNT_NUMBER = 27,
    BANK_REGISTRATION_NUMBER = 28,
    BIC = 29,
    DOCUMENT_NUMBER = 30,
    DOCUMENT_DATE = 31,
    ORDER_NUMBER = 32,
    SUPPLIER_NAME = 33,
    SUPPLIER_VAT_NUMBER = 34,
    SUPPLIER_ORGANISATION_NUMBER = 35,
    SUPPLIER_ADDRESS = 36,
    }

}

export class DocumentAnnotatorRequest extends jspb.Message { 

    hasDocument(): boolean;
    clearDocument(): void;
    getDocument(): Document | undefined;
    setDocument(value?: Document): DocumentAnnotatorRequest;
    clearFeaturesList(): void;
    getFeaturesList(): Array<Feature>;
    setFeaturesList(value: Array<Feature>): DocumentAnnotatorRequest;
    addFeatures(value?: Feature, index?: number): Feature;
    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): DocumentAnnotatorRequest;
    addTags(value: string, index?: number): string;
    getTier(): ssn_type_tier_pb.Tier;
    setTier(value: ssn_type_tier_pb.Tier): DocumentAnnotatorRequest;
    clearSegmentsList(): void;
    getSegmentsList(): Array<string>;
    setSegmentsList(value: Array<string>): DocumentAnnotatorRequest;
    addSegments(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DocumentAnnotatorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DocumentAnnotatorRequest): DocumentAnnotatorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DocumentAnnotatorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DocumentAnnotatorRequest;
    static deserializeBinaryFromReader(message: DocumentAnnotatorRequest, reader: jspb.BinaryReader): DocumentAnnotatorRequest;
}

export namespace DocumentAnnotatorRequest {
    export type AsObject = {
        document?: Document.AsObject,
        featuresList: Array<Feature.AsObject>,
        tagsList: Array<string>,
        tier: ssn_type_tier_pb.Tier,
        segmentsList: Array<string>,
    }
}

export class DocumentAnnotatorResponse extends jspb.Message { 
    clearOrderDateList(): void;
    getOrderDateList(): Array<ssn_type_candidate_pb.Candidate>;
    setOrderDateList(value: Array<ssn_type_candidate_pb.Candidate>): DocumentAnnotatorResponse;
    addOrderDate(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearPaymentDueDateList(): void;
    getPaymentDueDateList(): Array<ssn_type_candidate_pb.Candidate>;
    setPaymentDueDateList(value: Array<ssn_type_candidate_pb.Candidate>): DocumentAnnotatorResponse;
    addPaymentDueDate(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearCurrencyList(): void;
    getCurrencyList(): Array<ssn_type_candidate_pb.Candidate>;
    setCurrencyList(value: Array<ssn_type_candidate_pb.Candidate>): DocumentAnnotatorResponse;
    addCurrency(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearTotalVatList(): void;
    getTotalVatList(): Array<ssn_type_candidate_pb.Candidate>;
    setTotalVatList(value: Array<ssn_type_candidate_pb.Candidate>): DocumentAnnotatorResponse;
    addTotalVat(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearTotalInclVatList(): void;
    getTotalInclVatList(): Array<ssn_type_candidate_pb.Candidate>;
    setTotalInclVatList(value: Array<ssn_type_candidate_pb.Candidate>): DocumentAnnotatorResponse;
    addTotalInclVat(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearTotalExclVatList(): void;
    getTotalExclVatList(): Array<ssn_type_candidate_pb.Candidate>;
    setTotalExclVatList(value: Array<ssn_type_candidate_pb.Candidate>): DocumentAnnotatorResponse;
    addTotalExclVat(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearSupplierCorporateIdList(): void;
    getSupplierCorporateIdList(): Array<ssn_type_candidate_pb.Candidate>;
    setSupplierCorporateIdList(value: Array<ssn_type_candidate_pb.Candidate>): DocumentAnnotatorResponse;
    addSupplierCorporateId(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearSupplierCountryCodeList(): void;
    getSupplierCountryCodeList(): Array<ssn_type_candidate_pb.Candidate>;
    setSupplierCountryCodeList(value: Array<ssn_type_candidate_pb.Candidate>): DocumentAnnotatorResponse;
    addSupplierCountryCode(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearDocumentTypeList(): void;
    getDocumentTypeList(): Array<ssn_type_candidate_pb.Candidate>;
    setDocumentTypeList(value: Array<ssn_type_candidate_pb.Candidate>): DocumentAnnotatorResponse;
    addDocumentType(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearPaymentMethodList(): void;
    getPaymentMethodList(): Array<ssn_type_candidate_pb.Candidate>;
    setPaymentMethodList(value: Array<ssn_type_candidate_pb.Candidate>): DocumentAnnotatorResponse;
    addPaymentMethod(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearCreditCardLastFourList(): void;
    getCreditCardLastFourList(): Array<ssn_type_candidate_pb.Candidate>;
    setCreditCardLastFourList(value: Array<ssn_type_candidate_pb.Candidate>): DocumentAnnotatorResponse;
    addCreditCardLastFour(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearInvoiceNumberList(): void;
    getInvoiceNumberList(): Array<ssn_type_candidate_pb.Candidate>;
    setInvoiceNumberList(value: Array<ssn_type_candidate_pb.Candidate>): DocumentAnnotatorResponse;
    addInvoiceNumber(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;

    hasTextAnnotation(): boolean;
    clearTextAnnotation(): void;
    getTextAnnotation(): ssn_type_text_annotation_pb.TextAnnotation | undefined;
    setTextAnnotation(value?: ssn_type_text_annotation_pb.TextAnnotation): DocumentAnnotatorResponse;
    clearOcrLineDkTypeList(): void;
    getOcrLineDkTypeList(): Array<ssn_type_candidate_pb.Candidate>;
    setOcrLineDkTypeList(value: Array<ssn_type_candidate_pb.Candidate>): DocumentAnnotatorResponse;
    addOcrLineDkType(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearOcrLineDkPaymentIdList(): void;
    getOcrLineDkPaymentIdList(): Array<ssn_type_candidate_pb.Candidate>;
    setOcrLineDkPaymentIdList(value: Array<ssn_type_candidate_pb.Candidate>): DocumentAnnotatorResponse;
    addOcrLineDkPaymentId(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearOcrLineDkCreditorIdList(): void;
    getOcrLineDkCreditorIdList(): Array<ssn_type_candidate_pb.Candidate>;
    setOcrLineDkCreditorIdList(value: Array<ssn_type_candidate_pb.Candidate>): DocumentAnnotatorResponse;
    addOcrLineDkCreditorId(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearOcrLineSePaymentIdList(): void;
    getOcrLineSePaymentIdList(): Array<ssn_type_candidate_pb.Candidate>;
    setOcrLineSePaymentIdList(value: Array<ssn_type_candidate_pb.Candidate>): DocumentAnnotatorResponse;
    addOcrLineSePaymentId(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearOcrLineSeBankgiroCreditorIdList(): void;
    getOcrLineSeBankgiroCreditorIdList(): Array<ssn_type_candidate_pb.Candidate>;
    setOcrLineSeBankgiroCreditorIdList(value: Array<ssn_type_candidate_pb.Candidate>): DocumentAnnotatorResponse;
    addOcrLineSeBankgiroCreditorId(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearOcrLineSePlusgiroCreditorIdList(): void;
    getOcrLineSePlusgiroCreditorIdList(): Array<ssn_type_candidate_pb.Candidate>;
    setOcrLineSePlusgiroCreditorIdList(value: Array<ssn_type_candidate_pb.Candidate>): DocumentAnnotatorResponse;
    addOcrLineSePlusgiroCreditorId(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearOcrLineNoPaymentIdList(): void;
    getOcrLineNoPaymentIdList(): Array<ssn_type_candidate_pb.Candidate>;
    setOcrLineNoPaymentIdList(value: Array<ssn_type_candidate_pb.Candidate>): DocumentAnnotatorResponse;
    addOcrLineNoPaymentId(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearOcrLineFiPaymentIdList(): void;
    getOcrLineFiPaymentIdList(): Array<ssn_type_candidate_pb.Candidate>;
    setOcrLineFiPaymentIdList(value: Array<ssn_type_candidate_pb.Candidate>): DocumentAnnotatorResponse;
    addOcrLineFiPaymentId(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearOcrLineNlPaymentIdList(): void;
    getOcrLineNlPaymentIdList(): Array<ssn_type_candidate_pb.Candidate>;
    setOcrLineNlPaymentIdList(value: Array<ssn_type_candidate_pb.Candidate>): DocumentAnnotatorResponse;
    addOcrLineNlPaymentId(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    getText(): string;
    setText(value: string): DocumentAnnotatorResponse;
    getFeedbackId(): string;
    setFeedbackId(value: string): DocumentAnnotatorResponse;
    clearIbanList(): void;
    getIbanList(): Array<ssn_type_candidate_pb.Candidate>;
    setIbanList(value: Array<ssn_type_candidate_pb.Candidate>): DocumentAnnotatorResponse;
    addIban(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearLinesList(): void;
    getLinesList(): Array<ssn_type_candidate_pb.LineCandidate>;
    setLinesList(value: Array<ssn_type_candidate_pb.LineCandidate>): DocumentAnnotatorResponse;
    addLines(value?: ssn_type_candidate_pb.LineCandidate, index?: number): ssn_type_candidate_pb.LineCandidate;
    getPreview(): string;
    setPreview(value: string): DocumentAnnotatorResponse;
    clearBankAccountNumberList(): void;
    getBankAccountNumberList(): Array<ssn_type_candidate_pb.Candidate>;
    setBankAccountNumberList(value: Array<ssn_type_candidate_pb.Candidate>): DocumentAnnotatorResponse;
    addBankAccountNumber(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearBankRegistrationNumberList(): void;
    getBankRegistrationNumberList(): Array<ssn_type_candidate_pb.Candidate>;
    setBankRegistrationNumberList(value: Array<ssn_type_candidate_pb.Candidate>): DocumentAnnotatorResponse;
    addBankRegistrationNumber(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearBicList(): void;
    getBicList(): Array<ssn_type_candidate_pb.Candidate>;
    setBicList(value: Array<ssn_type_candidate_pb.Candidate>): DocumentAnnotatorResponse;
    addBic(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearDocumentNumberList(): void;
    getDocumentNumberList(): Array<ssn_type_candidate_pb.Candidate>;
    setDocumentNumberList(value: Array<ssn_type_candidate_pb.Candidate>): DocumentAnnotatorResponse;
    addDocumentNumber(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearDocumentDateList(): void;
    getDocumentDateList(): Array<ssn_type_candidate_pb.Candidate>;
    setDocumentDateList(value: Array<ssn_type_candidate_pb.Candidate>): DocumentAnnotatorResponse;
    addDocumentDate(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearOrderNumberList(): void;
    getOrderNumberList(): Array<ssn_type_candidate_pb.Candidate>;
    setOrderNumberList(value: Array<ssn_type_candidate_pb.Candidate>): DocumentAnnotatorResponse;
    addOrderNumber(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearSupplierNameList(): void;
    getSupplierNameList(): Array<ssn_type_candidate_pb.Candidate>;
    setSupplierNameList(value: Array<ssn_type_candidate_pb.Candidate>): DocumentAnnotatorResponse;
    addSupplierName(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearSupplierVatNumberList(): void;
    getSupplierVatNumberList(): Array<ssn_type_candidate_pb.Candidate>;
    setSupplierVatNumberList(value: Array<ssn_type_candidate_pb.Candidate>): DocumentAnnotatorResponse;
    addSupplierVatNumber(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearSupplierOrganisationNumberList(): void;
    getSupplierOrganisationNumberList(): Array<ssn_type_candidate_pb.Candidate>;
    setSupplierOrganisationNumberList(value: Array<ssn_type_candidate_pb.Candidate>): DocumentAnnotatorResponse;
    addSupplierOrganisationNumber(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearSupplierAddressList(): void;
    getSupplierAddressList(): Array<ssn_type_candidate_pb.Candidate>;
    setSupplierAddressList(value: Array<ssn_type_candidate_pb.Candidate>): DocumentAnnotatorResponse;
    addSupplierAddress(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DocumentAnnotatorResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DocumentAnnotatorResponse): DocumentAnnotatorResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DocumentAnnotatorResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DocumentAnnotatorResponse;
    static deserializeBinaryFromReader(message: DocumentAnnotatorResponse, reader: jspb.BinaryReader): DocumentAnnotatorResponse;
}

export namespace DocumentAnnotatorResponse {
    export type AsObject = {
        orderDateList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        paymentDueDateList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        currencyList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        totalVatList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        totalInclVatList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        totalExclVatList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        supplierCorporateIdList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        supplierCountryCodeList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        documentTypeList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        paymentMethodList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        creditCardLastFourList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        invoiceNumberList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        textAnnotation?: ssn_type_text_annotation_pb.TextAnnotation.AsObject,
        ocrLineDkTypeList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        ocrLineDkPaymentIdList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        ocrLineDkCreditorIdList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        ocrLineSePaymentIdList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        ocrLineSeBankgiroCreditorIdList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        ocrLineSePlusgiroCreditorIdList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        ocrLineNoPaymentIdList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        ocrLineFiPaymentIdList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        ocrLineNlPaymentIdList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        text: string,
        feedbackId: string,
        ibanList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        linesList: Array<ssn_type_candidate_pb.LineCandidate.AsObject>,
        preview: string,
        bankAccountNumberList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        bankRegistrationNumberList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        bicList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        documentNumberList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        documentDateList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        orderNumberList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        supplierNameList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        supplierVatNumberList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        supplierOrganisationNumberList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        supplierAddressList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
    }
}

export class Document extends jspb.Message { 
    getContent(): Uint8Array | string;
    getContent_asU8(): Uint8Array;
    getContent_asB64(): string;
    setContent(value: Uint8Array | string): Document;

    hasSource(): boolean;
    clearSource(): void;
    getSource(): DocumentSource | undefined;
    setSource(value?: DocumentSource): Document;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Document.AsObject;
    static toObject(includeInstance: boolean, msg: Document): Document.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Document, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Document;
    static deserializeBinaryFromReader(message: Document, reader: jspb.BinaryReader): Document;
}

export namespace Document {
    export type AsObject = {
        content: Uint8Array | string,
        source?: DocumentSource.AsObject,
    }
}

export class DocumentSource extends jspb.Message { 
    getHttpUri(): string;
    setHttpUri(value: string): DocumentSource;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DocumentSource.AsObject;
    static toObject(includeInstance: boolean, msg: DocumentSource): DocumentSource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DocumentSource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DocumentSource;
    static deserializeBinaryFromReader(message: DocumentSource, reader: jspb.BinaryReader): DocumentSource;
}

export namespace DocumentSource {
    export type AsObject = {
        httpUri: string,
    }
}
