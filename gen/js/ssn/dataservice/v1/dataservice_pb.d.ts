// package: ssn.dataservice.v1
// file: ssn/dataservice/v1/dataservice.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gen_bq_schema_bq_field_pb from "../../../gen_bq_schema/bq_field_pb";
import * as gen_bq_schema_bq_table_pb from "../../../gen_bq_schema/bq_table_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_type_date_pb from "../../../google/type/date_pb";
import * as ssn_type_candidate_pb from "../../../ssn/type/candidate_pb";
import * as ssn_type_text_annotation_pb from "../../../ssn/type/text_annotation_pb";
import * as ssn_type_tier_pb from "../../../ssn/type/tier_pb";

export class Document extends jspb.Message { 

    hasTa(): boolean;
    clearTa(): void;
    getTa(): ssn_type_text_annotation_pb.TextAnnotation | undefined;
    setTa(value?: ssn_type_text_annotation_pb.TextAnnotation): Document;
    getBytes(): Uint8Array | string;
    getBytes_asU8(): Uint8Array;
    getBytes_asB64(): string;
    setBytes(value: Uint8Array | string): Document;
    getId(): string;
    setId(value: string): Document;
    getConsumer(): string;
    setConsumer(value: string): Document;
    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): Document;
    addTags(value: string, index?: number): string;

    hasTrueValues(): boolean;
    clearTrueValues(): void;
    getTrueValues(): TrueValues | undefined;
    setTrueValues(value?: TrueValues): Document;

    hasPredictionValues(): boolean;
    clearPredictionValues(): void;
    getPredictionValues(): PredictionValues | undefined;
    setPredictionValues(value?: PredictionValues): Document;
    getFeedbackTime(): number;
    setFeedbackTime(value: number): Document;

    hasPredictionConfidences(): boolean;
    clearPredictionConfidences(): void;
    getPredictionConfidences(): PredictionConfidences | undefined;
    setPredictionConfidences(value?: PredictionConfidences): Document;

    hasPredictionMetadata(): boolean;
    clearPredictionMetadata(): void;
    getPredictionMetadata(): PredictionMetadata | undefined;
    setPredictionMetadata(value?: PredictionMetadata): Document;

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
        ta?: ssn_type_text_annotation_pb.TextAnnotation.AsObject,
        bytes: Uint8Array | string,
        id: string,
        consumer: string,
        tagsList: Array<string>,
        trueValues?: TrueValues.AsObject,
        predictionValues?: PredictionValues.AsObject,
        feedbackTime: number,
        predictionConfidences?: PredictionConfidences.AsObject,
        predictionMetadata?: PredictionMetadata.AsObject,
    }
}

export class TrueValues extends jspb.Message { 

    hasTotalInclVat(): boolean;
    clearTotalInclVat(): void;
    getTotalInclVat(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setTotalInclVat(value?: google_protobuf_wrappers_pb.DoubleValue): TrueValues;

    hasTotalVat(): boolean;
    clearTotalVat(): void;
    getTotalVat(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setTotalVat(value?: google_protobuf_wrappers_pb.DoubleValue): TrueValues;

    hasTotalExclVat(): boolean;
    clearTotalExclVat(): void;
    getTotalExclVat(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setTotalExclVat(value?: google_protobuf_wrappers_pb.DoubleValue): TrueValues;

    hasOrderDate(): boolean;
    clearOrderDate(): void;
    getOrderDate(): google_type_date_pb.Date | undefined;
    setOrderDate(value?: google_type_date_pb.Date): TrueValues;

    hasPaymentDueDate(): boolean;
    clearPaymentDueDate(): void;
    getPaymentDueDate(): google_type_date_pb.Date | undefined;
    setPaymentDueDate(value?: google_type_date_pb.Date): TrueValues;

    hasDocumentType(): boolean;
    clearDocumentType(): void;
    getDocumentType(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDocumentType(value?: google_protobuf_wrappers_pb.StringValue): TrueValues;

    hasCurrency(): boolean;
    clearCurrency(): void;
    getCurrency(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCurrency(value?: google_protobuf_wrappers_pb.StringValue): TrueValues;

    hasCreditCardLastFour(): boolean;
    clearCreditCardLastFour(): void;
    getCreditCardLastFour(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCreditCardLastFour(value?: google_protobuf_wrappers_pb.StringValue): TrueValues;

    hasPaymentMethod(): boolean;
    clearPaymentMethod(): void;
    getPaymentMethod(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPaymentMethod(value?: google_protobuf_wrappers_pb.StringValue): TrueValues;

    hasOcrLineDkType(): boolean;
    clearOcrLineDkType(): void;
    getOcrLineDkType(): google_protobuf_wrappers_pb.StringValue | undefined;
    setOcrLineDkType(value?: google_protobuf_wrappers_pb.StringValue): TrueValues;

    hasOcrLineDkPaymentId(): boolean;
    clearOcrLineDkPaymentId(): void;
    getOcrLineDkPaymentId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setOcrLineDkPaymentId(value?: google_protobuf_wrappers_pb.StringValue): TrueValues;

    hasOcrLineDkCreditorId(): boolean;
    clearOcrLineDkCreditorId(): void;
    getOcrLineDkCreditorId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setOcrLineDkCreditorId(value?: google_protobuf_wrappers_pb.StringValue): TrueValues;

    hasOcrLineSePaymentId(): boolean;
    clearOcrLineSePaymentId(): void;
    getOcrLineSePaymentId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setOcrLineSePaymentId(value?: google_protobuf_wrappers_pb.StringValue): TrueValues;

    hasOcrLineSeBankgiroCreditorId(): boolean;
    clearOcrLineSeBankgiroCreditorId(): void;
    getOcrLineSeBankgiroCreditorId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setOcrLineSeBankgiroCreditorId(value?: google_protobuf_wrappers_pb.StringValue): TrueValues;

    hasOcrLineSePlusgiroCreditorId(): boolean;
    clearOcrLineSePlusgiroCreditorId(): void;
    getOcrLineSePlusgiroCreditorId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setOcrLineSePlusgiroCreditorId(value?: google_protobuf_wrappers_pb.StringValue): TrueValues;

    hasOcrLineNoPaymentId(): boolean;
    clearOcrLineNoPaymentId(): void;
    getOcrLineNoPaymentId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setOcrLineNoPaymentId(value?: google_protobuf_wrappers_pb.StringValue): TrueValues;

    hasOcrLineFiPaymentId(): boolean;
    clearOcrLineFiPaymentId(): void;
    getOcrLineFiPaymentId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setOcrLineFiPaymentId(value?: google_protobuf_wrappers_pb.StringValue): TrueValues;

    hasOcrLineNlPaymentId(): boolean;
    clearOcrLineNlPaymentId(): void;
    getOcrLineNlPaymentId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setOcrLineNlPaymentId(value?: google_protobuf_wrappers_pb.StringValue): TrueValues;

    hasSupplierCorporateId(): boolean;
    clearSupplierCorporateId(): void;
    getSupplierCorporateId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setSupplierCorporateId(value?: google_protobuf_wrappers_pb.StringValue): TrueValues;

    hasSupplierCountryCode(): boolean;
    clearSupplierCountryCode(): void;
    getSupplierCountryCode(): google_protobuf_wrappers_pb.StringValue | undefined;
    setSupplierCountryCode(value?: google_protobuf_wrappers_pb.StringValue): TrueValues;

    hasInvoiceNumber(): boolean;
    clearInvoiceNumber(): void;
    getInvoiceNumber(): google_protobuf_wrappers_pb.StringValue | undefined;
    setInvoiceNumber(value?: google_protobuf_wrappers_pb.StringValue): TrueValues;

    hasIban(): boolean;
    clearIban(): void;
    getIban(): google_protobuf_wrappers_pb.StringValue | undefined;
    setIban(value?: google_protobuf_wrappers_pb.StringValue): TrueValues;

    hasOrderReference(): boolean;
    clearOrderReference(): void;
    getOrderReference(): google_protobuf_wrappers_pb.StringValue | undefined;
    setOrderReference(value?: google_protobuf_wrappers_pb.StringValue): TrueValues;

    hasBankAccountNumber(): boolean;
    clearBankAccountNumber(): void;
    getBankAccountNumber(): google_protobuf_wrappers_pb.StringValue | undefined;
    setBankAccountNumber(value?: google_protobuf_wrappers_pb.StringValue): TrueValues;

    hasBankRegistrationNumber(): boolean;
    clearBankRegistrationNumber(): void;
    getBankRegistrationNumber(): google_protobuf_wrappers_pb.StringValue | undefined;
    setBankRegistrationNumber(value?: google_protobuf_wrappers_pb.StringValue): TrueValues;

    hasSupplierName(): boolean;
    clearSupplierName(): void;
    getSupplierName(): google_protobuf_wrappers_pb.StringValue | undefined;
    setSupplierName(value?: google_protobuf_wrappers_pb.StringValue): TrueValues;

    hasBic(): boolean;
    clearBic(): void;
    getBic(): google_protobuf_wrappers_pb.StringValue | undefined;
    setBic(value?: google_protobuf_wrappers_pb.StringValue): TrueValues;

    hasDocumentNumber(): boolean;
    clearDocumentNumber(): void;
    getDocumentNumber(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDocumentNumber(value?: google_protobuf_wrappers_pb.StringValue): TrueValues;

    hasDocumentDate(): boolean;
    clearDocumentDate(): void;
    getDocumentDate(): google_type_date_pb.Date | undefined;
    setDocumentDate(value?: google_type_date_pb.Date): TrueValues;

    hasOrderNumber(): boolean;
    clearOrderNumber(): void;
    getOrderNumber(): google_protobuf_wrappers_pb.StringValue | undefined;
    setOrderNumber(value?: google_protobuf_wrappers_pb.StringValue): TrueValues;

    hasSupplierVatNumber(): boolean;
    clearSupplierVatNumber(): void;
    getSupplierVatNumber(): google_protobuf_wrappers_pb.StringValue | undefined;
    setSupplierVatNumber(value?: google_protobuf_wrappers_pb.StringValue): TrueValues;

    hasSupplierOrganisationNumber(): boolean;
    clearSupplierOrganisationNumber(): void;
    getSupplierOrganisationNumber(): google_protobuf_wrappers_pb.StringValue | undefined;
    setSupplierOrganisationNumber(value?: google_protobuf_wrappers_pb.StringValue): TrueValues;

    hasSupplierAddress(): boolean;
    clearSupplierAddress(): void;
    getSupplierAddress(): google_protobuf_wrappers_pb.StringValue | undefined;
    setSupplierAddress(value?: google_protobuf_wrappers_pb.StringValue): TrueValues;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrueValues.AsObject;
    static toObject(includeInstance: boolean, msg: TrueValues): TrueValues.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrueValues, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrueValues;
    static deserializeBinaryFromReader(message: TrueValues, reader: jspb.BinaryReader): TrueValues;
}

export namespace TrueValues {
    export type AsObject = {
        totalInclVat?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        totalVat?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        totalExclVat?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        orderDate?: google_type_date_pb.Date.AsObject,
        paymentDueDate?: google_type_date_pb.Date.AsObject,
        documentType?: google_protobuf_wrappers_pb.StringValue.AsObject,
        currency?: google_protobuf_wrappers_pb.StringValue.AsObject,
        creditCardLastFour?: google_protobuf_wrappers_pb.StringValue.AsObject,
        paymentMethod?: google_protobuf_wrappers_pb.StringValue.AsObject,
        ocrLineDkType?: google_protobuf_wrappers_pb.StringValue.AsObject,
        ocrLineDkPaymentId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        ocrLineDkCreditorId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        ocrLineSePaymentId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        ocrLineSeBankgiroCreditorId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        ocrLineSePlusgiroCreditorId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        ocrLineNoPaymentId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        ocrLineFiPaymentId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        ocrLineNlPaymentId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        supplierCorporateId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        supplierCountryCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
        invoiceNumber?: google_protobuf_wrappers_pb.StringValue.AsObject,
        iban?: google_protobuf_wrappers_pb.StringValue.AsObject,
        orderReference?: google_protobuf_wrappers_pb.StringValue.AsObject,
        bankAccountNumber?: google_protobuf_wrappers_pb.StringValue.AsObject,
        bankRegistrationNumber?: google_protobuf_wrappers_pb.StringValue.AsObject,
        supplierName?: google_protobuf_wrappers_pb.StringValue.AsObject,
        bic?: google_protobuf_wrappers_pb.StringValue.AsObject,
        documentNumber?: google_protobuf_wrappers_pb.StringValue.AsObject,
        documentDate?: google_type_date_pb.Date.AsObject,
        orderNumber?: google_protobuf_wrappers_pb.StringValue.AsObject,
        supplierVatNumber?: google_protobuf_wrappers_pb.StringValue.AsObject,
        supplierOrganisationNumber?: google_protobuf_wrappers_pb.StringValue.AsObject,
        supplierAddress?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class PredictionValues extends jspb.Message { 
    clearTotalInclVatList(): void;
    getTotalInclVatList(): Array<google_protobuf_wrappers_pb.DoubleValue>;
    setTotalInclVatList(value: Array<google_protobuf_wrappers_pb.DoubleValue>): PredictionValues;
    addTotalInclVat(value?: google_protobuf_wrappers_pb.DoubleValue, index?: number): google_protobuf_wrappers_pb.DoubleValue;
    clearTotalVatList(): void;
    getTotalVatList(): Array<google_protobuf_wrappers_pb.DoubleValue>;
    setTotalVatList(value: Array<google_protobuf_wrappers_pb.DoubleValue>): PredictionValues;
    addTotalVat(value?: google_protobuf_wrappers_pb.DoubleValue, index?: number): google_protobuf_wrappers_pb.DoubleValue;
    clearTotalExclVatList(): void;
    getTotalExclVatList(): Array<google_protobuf_wrappers_pb.DoubleValue>;
    setTotalExclVatList(value: Array<google_protobuf_wrappers_pb.DoubleValue>): PredictionValues;
    addTotalExclVat(value?: google_protobuf_wrappers_pb.DoubleValue, index?: number): google_protobuf_wrappers_pb.DoubleValue;
    clearOrderDateList(): void;
    getOrderDateList(): Array<google_type_date_pb.Date>;
    setOrderDateList(value: Array<google_type_date_pb.Date>): PredictionValues;
    addOrderDate(value?: google_type_date_pb.Date, index?: number): google_type_date_pb.Date;
    clearPaymentDueDateList(): void;
    getPaymentDueDateList(): Array<google_type_date_pb.Date>;
    setPaymentDueDateList(value: Array<google_type_date_pb.Date>): PredictionValues;
    addPaymentDueDate(value?: google_type_date_pb.Date, index?: number): google_type_date_pb.Date;
    clearDocumentTypeList(): void;
    getDocumentTypeList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setDocumentTypeList(value: Array<google_protobuf_wrappers_pb.StringValue>): PredictionValues;
    addDocumentType(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearCurrencyList(): void;
    getCurrencyList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setCurrencyList(value: Array<google_protobuf_wrappers_pb.StringValue>): PredictionValues;
    addCurrency(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearCreditCardLastFourList(): void;
    getCreditCardLastFourList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setCreditCardLastFourList(value: Array<google_protobuf_wrappers_pb.StringValue>): PredictionValues;
    addCreditCardLastFour(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearPaymentMethodList(): void;
    getPaymentMethodList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setPaymentMethodList(value: Array<google_protobuf_wrappers_pb.StringValue>): PredictionValues;
    addPaymentMethod(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearOcrLineDkTypeList(): void;
    getOcrLineDkTypeList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setOcrLineDkTypeList(value: Array<google_protobuf_wrappers_pb.StringValue>): PredictionValues;
    addOcrLineDkType(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearOcrLineDkPaymentIdList(): void;
    getOcrLineDkPaymentIdList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setOcrLineDkPaymentIdList(value: Array<google_protobuf_wrappers_pb.StringValue>): PredictionValues;
    addOcrLineDkPaymentId(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearOcrLineDkCreditorIdList(): void;
    getOcrLineDkCreditorIdList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setOcrLineDkCreditorIdList(value: Array<google_protobuf_wrappers_pb.StringValue>): PredictionValues;
    addOcrLineDkCreditorId(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearOcrLineSePaymentIdList(): void;
    getOcrLineSePaymentIdList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setOcrLineSePaymentIdList(value: Array<google_protobuf_wrappers_pb.StringValue>): PredictionValues;
    addOcrLineSePaymentId(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearOcrLineSeBankgiroCreditorIdList(): void;
    getOcrLineSeBankgiroCreditorIdList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setOcrLineSeBankgiroCreditorIdList(value: Array<google_protobuf_wrappers_pb.StringValue>): PredictionValues;
    addOcrLineSeBankgiroCreditorId(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearOcrLineSePlusgiroCreditorIdList(): void;
    getOcrLineSePlusgiroCreditorIdList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setOcrLineSePlusgiroCreditorIdList(value: Array<google_protobuf_wrappers_pb.StringValue>): PredictionValues;
    addOcrLineSePlusgiroCreditorId(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearOcrLineNoPaymentIdList(): void;
    getOcrLineNoPaymentIdList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setOcrLineNoPaymentIdList(value: Array<google_protobuf_wrappers_pb.StringValue>): PredictionValues;
    addOcrLineNoPaymentId(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearOcrLineFiPaymentIdList(): void;
    getOcrLineFiPaymentIdList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setOcrLineFiPaymentIdList(value: Array<google_protobuf_wrappers_pb.StringValue>): PredictionValues;
    addOcrLineFiPaymentId(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearOcrLineNlPaymentIdList(): void;
    getOcrLineNlPaymentIdList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setOcrLineNlPaymentIdList(value: Array<google_protobuf_wrappers_pb.StringValue>): PredictionValues;
    addOcrLineNlPaymentId(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearSupplierCorporateIdList(): void;
    getSupplierCorporateIdList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setSupplierCorporateIdList(value: Array<google_protobuf_wrappers_pb.StringValue>): PredictionValues;
    addSupplierCorporateId(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearSupplierCountryCodeList(): void;
    getSupplierCountryCodeList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setSupplierCountryCodeList(value: Array<google_protobuf_wrappers_pb.StringValue>): PredictionValues;
    addSupplierCountryCode(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearInvoiceNumberList(): void;
    getInvoiceNumberList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setInvoiceNumberList(value: Array<google_protobuf_wrappers_pb.StringValue>): PredictionValues;
    addInvoiceNumber(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearIbanList(): void;
    getIbanList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setIbanList(value: Array<google_protobuf_wrappers_pb.StringValue>): PredictionValues;
    addIban(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearOrderReferenceList(): void;
    getOrderReferenceList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setOrderReferenceList(value: Array<google_protobuf_wrappers_pb.StringValue>): PredictionValues;
    addOrderReference(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearBankAccountNumberList(): void;
    getBankAccountNumberList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setBankAccountNumberList(value: Array<google_protobuf_wrappers_pb.StringValue>): PredictionValues;
    addBankAccountNumber(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearBankRegistrationNumberList(): void;
    getBankRegistrationNumberList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setBankRegistrationNumberList(value: Array<google_protobuf_wrappers_pb.StringValue>): PredictionValues;
    addBankRegistrationNumber(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearSupplierNameList(): void;
    getSupplierNameList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setSupplierNameList(value: Array<google_protobuf_wrappers_pb.StringValue>): PredictionValues;
    addSupplierName(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearBicList(): void;
    getBicList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setBicList(value: Array<google_protobuf_wrappers_pb.StringValue>): PredictionValues;
    addBic(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearDocumentNumberList(): void;
    getDocumentNumberList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setDocumentNumberList(value: Array<google_protobuf_wrappers_pb.StringValue>): PredictionValues;
    addDocumentNumber(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearDocumentDateList(): void;
    getDocumentDateList(): Array<google_type_date_pb.Date>;
    setDocumentDateList(value: Array<google_type_date_pb.Date>): PredictionValues;
    addDocumentDate(value?: google_type_date_pb.Date, index?: number): google_type_date_pb.Date;
    clearOrderNumberList(): void;
    getOrderNumberList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setOrderNumberList(value: Array<google_protobuf_wrappers_pb.StringValue>): PredictionValues;
    addOrderNumber(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearSupplierVatNumberList(): void;
    getSupplierVatNumberList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setSupplierVatNumberList(value: Array<google_protobuf_wrappers_pb.StringValue>): PredictionValues;
    addSupplierVatNumber(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearSupplierOrganisationNumberList(): void;
    getSupplierOrganisationNumberList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setSupplierOrganisationNumberList(value: Array<google_protobuf_wrappers_pb.StringValue>): PredictionValues;
    addSupplierOrganisationNumber(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearSupplierAddressList(): void;
    getSupplierAddressList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setSupplierAddressList(value: Array<google_protobuf_wrappers_pb.StringValue>): PredictionValues;
    addSupplierAddress(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PredictionValues.AsObject;
    static toObject(includeInstance: boolean, msg: PredictionValues): PredictionValues.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PredictionValues, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PredictionValues;
    static deserializeBinaryFromReader(message: PredictionValues, reader: jspb.BinaryReader): PredictionValues;
}

export namespace PredictionValues {
    export type AsObject = {
        totalInclVatList: Array<google_protobuf_wrappers_pb.DoubleValue.AsObject>,
        totalVatList: Array<google_protobuf_wrappers_pb.DoubleValue.AsObject>,
        totalExclVatList: Array<google_protobuf_wrappers_pb.DoubleValue.AsObject>,
        orderDateList: Array<google_type_date_pb.Date.AsObject>,
        paymentDueDateList: Array<google_type_date_pb.Date.AsObject>,
        documentTypeList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        currencyList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        creditCardLastFourList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        paymentMethodList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        ocrLineDkTypeList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        ocrLineDkPaymentIdList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        ocrLineDkCreditorIdList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        ocrLineSePaymentIdList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        ocrLineSeBankgiroCreditorIdList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        ocrLineSePlusgiroCreditorIdList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        ocrLineNoPaymentIdList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        ocrLineFiPaymentIdList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        ocrLineNlPaymentIdList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        supplierCorporateIdList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        supplierCountryCodeList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        invoiceNumberList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        ibanList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        orderReferenceList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        bankAccountNumberList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        bankRegistrationNumberList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        supplierNameList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        bicList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        documentNumberList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        documentDateList: Array<google_type_date_pb.Date.AsObject>,
        orderNumberList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        supplierVatNumberList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        supplierOrganisationNumberList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        supplierAddressList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    }
}

export class PredictionConfidences extends jspb.Message { 
    clearTotalInclVatList(): void;
    getTotalInclVatList(): Array<google_protobuf_wrappers_pb.FloatValue>;
    setTotalInclVatList(value: Array<google_protobuf_wrappers_pb.FloatValue>): PredictionConfidences;
    addTotalInclVat(value?: google_protobuf_wrappers_pb.FloatValue, index?: number): google_protobuf_wrappers_pb.FloatValue;
    clearTotalVatList(): void;
    getTotalVatList(): Array<google_protobuf_wrappers_pb.FloatValue>;
    setTotalVatList(value: Array<google_protobuf_wrappers_pb.FloatValue>): PredictionConfidences;
    addTotalVat(value?: google_protobuf_wrappers_pb.FloatValue, index?: number): google_protobuf_wrappers_pb.FloatValue;
    clearTotalExclVatList(): void;
    getTotalExclVatList(): Array<google_protobuf_wrappers_pb.FloatValue>;
    setTotalExclVatList(value: Array<google_protobuf_wrappers_pb.FloatValue>): PredictionConfidences;
    addTotalExclVat(value?: google_protobuf_wrappers_pb.FloatValue, index?: number): google_protobuf_wrappers_pb.FloatValue;
    clearOrderDateList(): void;
    getOrderDateList(): Array<google_protobuf_wrappers_pb.FloatValue>;
    setOrderDateList(value: Array<google_protobuf_wrappers_pb.FloatValue>): PredictionConfidences;
    addOrderDate(value?: google_protobuf_wrappers_pb.FloatValue, index?: number): google_protobuf_wrappers_pb.FloatValue;
    clearPaymentDueDateList(): void;
    getPaymentDueDateList(): Array<google_protobuf_wrappers_pb.FloatValue>;
    setPaymentDueDateList(value: Array<google_protobuf_wrappers_pb.FloatValue>): PredictionConfidences;
    addPaymentDueDate(value?: google_protobuf_wrappers_pb.FloatValue, index?: number): google_protobuf_wrappers_pb.FloatValue;
    clearDocumentTypeList(): void;
    getDocumentTypeList(): Array<google_protobuf_wrappers_pb.FloatValue>;
    setDocumentTypeList(value: Array<google_protobuf_wrappers_pb.FloatValue>): PredictionConfidences;
    addDocumentType(value?: google_protobuf_wrappers_pb.FloatValue, index?: number): google_protobuf_wrappers_pb.FloatValue;
    clearCurrencyList(): void;
    getCurrencyList(): Array<google_protobuf_wrappers_pb.FloatValue>;
    setCurrencyList(value: Array<google_protobuf_wrappers_pb.FloatValue>): PredictionConfidences;
    addCurrency(value?: google_protobuf_wrappers_pb.FloatValue, index?: number): google_protobuf_wrappers_pb.FloatValue;
    clearCreditCardLastFourList(): void;
    getCreditCardLastFourList(): Array<google_protobuf_wrappers_pb.FloatValue>;
    setCreditCardLastFourList(value: Array<google_protobuf_wrappers_pb.FloatValue>): PredictionConfidences;
    addCreditCardLastFour(value?: google_protobuf_wrappers_pb.FloatValue, index?: number): google_protobuf_wrappers_pb.FloatValue;
    clearPaymentMethodList(): void;
    getPaymentMethodList(): Array<google_protobuf_wrappers_pb.FloatValue>;
    setPaymentMethodList(value: Array<google_protobuf_wrappers_pb.FloatValue>): PredictionConfidences;
    addPaymentMethod(value?: google_protobuf_wrappers_pb.FloatValue, index?: number): google_protobuf_wrappers_pb.FloatValue;
    clearOcrLineDkTypeList(): void;
    getOcrLineDkTypeList(): Array<google_protobuf_wrappers_pb.FloatValue>;
    setOcrLineDkTypeList(value: Array<google_protobuf_wrappers_pb.FloatValue>): PredictionConfidences;
    addOcrLineDkType(value?: google_protobuf_wrappers_pb.FloatValue, index?: number): google_protobuf_wrappers_pb.FloatValue;
    clearOcrLineDkPaymentIdList(): void;
    getOcrLineDkPaymentIdList(): Array<google_protobuf_wrappers_pb.FloatValue>;
    setOcrLineDkPaymentIdList(value: Array<google_protobuf_wrappers_pb.FloatValue>): PredictionConfidences;
    addOcrLineDkPaymentId(value?: google_protobuf_wrappers_pb.FloatValue, index?: number): google_protobuf_wrappers_pb.FloatValue;
    clearOcrLineDkCreditorIdList(): void;
    getOcrLineDkCreditorIdList(): Array<google_protobuf_wrappers_pb.FloatValue>;
    setOcrLineDkCreditorIdList(value: Array<google_protobuf_wrappers_pb.FloatValue>): PredictionConfidences;
    addOcrLineDkCreditorId(value?: google_protobuf_wrappers_pb.FloatValue, index?: number): google_protobuf_wrappers_pb.FloatValue;
    clearOcrLineSePaymentIdList(): void;
    getOcrLineSePaymentIdList(): Array<google_protobuf_wrappers_pb.FloatValue>;
    setOcrLineSePaymentIdList(value: Array<google_protobuf_wrappers_pb.FloatValue>): PredictionConfidences;
    addOcrLineSePaymentId(value?: google_protobuf_wrappers_pb.FloatValue, index?: number): google_protobuf_wrappers_pb.FloatValue;
    clearOcrLineSeBankgiroCreditorIdList(): void;
    getOcrLineSeBankgiroCreditorIdList(): Array<google_protobuf_wrappers_pb.FloatValue>;
    setOcrLineSeBankgiroCreditorIdList(value: Array<google_protobuf_wrappers_pb.FloatValue>): PredictionConfidences;
    addOcrLineSeBankgiroCreditorId(value?: google_protobuf_wrappers_pb.FloatValue, index?: number): google_protobuf_wrappers_pb.FloatValue;
    clearOcrLineSePlusgiroCreditorIdList(): void;
    getOcrLineSePlusgiroCreditorIdList(): Array<google_protobuf_wrappers_pb.FloatValue>;
    setOcrLineSePlusgiroCreditorIdList(value: Array<google_protobuf_wrappers_pb.FloatValue>): PredictionConfidences;
    addOcrLineSePlusgiroCreditorId(value?: google_protobuf_wrappers_pb.FloatValue, index?: number): google_protobuf_wrappers_pb.FloatValue;
    clearOcrLineNoPaymentIdList(): void;
    getOcrLineNoPaymentIdList(): Array<google_protobuf_wrappers_pb.FloatValue>;
    setOcrLineNoPaymentIdList(value: Array<google_protobuf_wrappers_pb.FloatValue>): PredictionConfidences;
    addOcrLineNoPaymentId(value?: google_protobuf_wrappers_pb.FloatValue, index?: number): google_protobuf_wrappers_pb.FloatValue;
    clearOcrLineFiPaymentIdList(): void;
    getOcrLineFiPaymentIdList(): Array<google_protobuf_wrappers_pb.FloatValue>;
    setOcrLineFiPaymentIdList(value: Array<google_protobuf_wrappers_pb.FloatValue>): PredictionConfidences;
    addOcrLineFiPaymentId(value?: google_protobuf_wrappers_pb.FloatValue, index?: number): google_protobuf_wrappers_pb.FloatValue;
    clearOcrLineNlPaymentIdList(): void;
    getOcrLineNlPaymentIdList(): Array<google_protobuf_wrappers_pb.FloatValue>;
    setOcrLineNlPaymentIdList(value: Array<google_protobuf_wrappers_pb.FloatValue>): PredictionConfidences;
    addOcrLineNlPaymentId(value?: google_protobuf_wrappers_pb.FloatValue, index?: number): google_protobuf_wrappers_pb.FloatValue;
    clearSupplierCorporateIdList(): void;
    getSupplierCorporateIdList(): Array<google_protobuf_wrappers_pb.FloatValue>;
    setSupplierCorporateIdList(value: Array<google_protobuf_wrappers_pb.FloatValue>): PredictionConfidences;
    addSupplierCorporateId(value?: google_protobuf_wrappers_pb.FloatValue, index?: number): google_protobuf_wrappers_pb.FloatValue;
    clearSupplierCountryCodeList(): void;
    getSupplierCountryCodeList(): Array<google_protobuf_wrappers_pb.FloatValue>;
    setSupplierCountryCodeList(value: Array<google_protobuf_wrappers_pb.FloatValue>): PredictionConfidences;
    addSupplierCountryCode(value?: google_protobuf_wrappers_pb.FloatValue, index?: number): google_protobuf_wrappers_pb.FloatValue;
    clearInvoiceNumberList(): void;
    getInvoiceNumberList(): Array<google_protobuf_wrappers_pb.FloatValue>;
    setInvoiceNumberList(value: Array<google_protobuf_wrappers_pb.FloatValue>): PredictionConfidences;
    addInvoiceNumber(value?: google_protobuf_wrappers_pb.FloatValue, index?: number): google_protobuf_wrappers_pb.FloatValue;
    clearIbanList(): void;
    getIbanList(): Array<google_protobuf_wrappers_pb.FloatValue>;
    setIbanList(value: Array<google_protobuf_wrappers_pb.FloatValue>): PredictionConfidences;
    addIban(value?: google_protobuf_wrappers_pb.FloatValue, index?: number): google_protobuf_wrappers_pb.FloatValue;
    clearOrderReferenceList(): void;
    getOrderReferenceList(): Array<google_protobuf_wrappers_pb.FloatValue>;
    setOrderReferenceList(value: Array<google_protobuf_wrappers_pb.FloatValue>): PredictionConfidences;
    addOrderReference(value?: google_protobuf_wrappers_pb.FloatValue, index?: number): google_protobuf_wrappers_pb.FloatValue;
    clearBankAccountNumberList(): void;
    getBankAccountNumberList(): Array<google_protobuf_wrappers_pb.FloatValue>;
    setBankAccountNumberList(value: Array<google_protobuf_wrappers_pb.FloatValue>): PredictionConfidences;
    addBankAccountNumber(value?: google_protobuf_wrappers_pb.FloatValue, index?: number): google_protobuf_wrappers_pb.FloatValue;
    clearBankRegistrationNumberList(): void;
    getBankRegistrationNumberList(): Array<google_protobuf_wrappers_pb.FloatValue>;
    setBankRegistrationNumberList(value: Array<google_protobuf_wrappers_pb.FloatValue>): PredictionConfidences;
    addBankRegistrationNumber(value?: google_protobuf_wrappers_pb.FloatValue, index?: number): google_protobuf_wrappers_pb.FloatValue;
    clearSupplierNameList(): void;
    getSupplierNameList(): Array<google_protobuf_wrappers_pb.FloatValue>;
    setSupplierNameList(value: Array<google_protobuf_wrappers_pb.FloatValue>): PredictionConfidences;
    addSupplierName(value?: google_protobuf_wrappers_pb.FloatValue, index?: number): google_protobuf_wrappers_pb.FloatValue;
    clearBicList(): void;
    getBicList(): Array<google_protobuf_wrappers_pb.FloatValue>;
    setBicList(value: Array<google_protobuf_wrappers_pb.FloatValue>): PredictionConfidences;
    addBic(value?: google_protobuf_wrappers_pb.FloatValue, index?: number): google_protobuf_wrappers_pb.FloatValue;
    clearDocumentNumberList(): void;
    getDocumentNumberList(): Array<google_protobuf_wrappers_pb.FloatValue>;
    setDocumentNumberList(value: Array<google_protobuf_wrappers_pb.FloatValue>): PredictionConfidences;
    addDocumentNumber(value?: google_protobuf_wrappers_pb.FloatValue, index?: number): google_protobuf_wrappers_pb.FloatValue;
    clearDocumentDateList(): void;
    getDocumentDateList(): Array<google_protobuf_wrappers_pb.FloatValue>;
    setDocumentDateList(value: Array<google_protobuf_wrappers_pb.FloatValue>): PredictionConfidences;
    addDocumentDate(value?: google_protobuf_wrappers_pb.FloatValue, index?: number): google_protobuf_wrappers_pb.FloatValue;
    clearOrderNumberList(): void;
    getOrderNumberList(): Array<google_protobuf_wrappers_pb.FloatValue>;
    setOrderNumberList(value: Array<google_protobuf_wrappers_pb.FloatValue>): PredictionConfidences;
    addOrderNumber(value?: google_protobuf_wrappers_pb.FloatValue, index?: number): google_protobuf_wrappers_pb.FloatValue;
    clearSupplierVatNumberList(): void;
    getSupplierVatNumberList(): Array<google_protobuf_wrappers_pb.FloatValue>;
    setSupplierVatNumberList(value: Array<google_protobuf_wrappers_pb.FloatValue>): PredictionConfidences;
    addSupplierVatNumber(value?: google_protobuf_wrappers_pb.FloatValue, index?: number): google_protobuf_wrappers_pb.FloatValue;
    clearSupplierOrganisationNumberList(): void;
    getSupplierOrganisationNumberList(): Array<google_protobuf_wrappers_pb.FloatValue>;
    setSupplierOrganisationNumberList(value: Array<google_protobuf_wrappers_pb.FloatValue>): PredictionConfidences;
    addSupplierOrganisationNumber(value?: google_protobuf_wrappers_pb.FloatValue, index?: number): google_protobuf_wrappers_pb.FloatValue;
    clearSupplierAddressList(): void;
    getSupplierAddressList(): Array<google_protobuf_wrappers_pb.FloatValue>;
    setSupplierAddressList(value: Array<google_protobuf_wrappers_pb.FloatValue>): PredictionConfidences;
    addSupplierAddress(value?: google_protobuf_wrappers_pb.FloatValue, index?: number): google_protobuf_wrappers_pb.FloatValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PredictionConfidences.AsObject;
    static toObject(includeInstance: boolean, msg: PredictionConfidences): PredictionConfidences.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PredictionConfidences, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PredictionConfidences;
    static deserializeBinaryFromReader(message: PredictionConfidences, reader: jspb.BinaryReader): PredictionConfidences;
}

export namespace PredictionConfidences {
    export type AsObject = {
        totalInclVatList: Array<google_protobuf_wrappers_pb.FloatValue.AsObject>,
        totalVatList: Array<google_protobuf_wrappers_pb.FloatValue.AsObject>,
        totalExclVatList: Array<google_protobuf_wrappers_pb.FloatValue.AsObject>,
        orderDateList: Array<google_protobuf_wrappers_pb.FloatValue.AsObject>,
        paymentDueDateList: Array<google_protobuf_wrappers_pb.FloatValue.AsObject>,
        documentTypeList: Array<google_protobuf_wrappers_pb.FloatValue.AsObject>,
        currencyList: Array<google_protobuf_wrappers_pb.FloatValue.AsObject>,
        creditCardLastFourList: Array<google_protobuf_wrappers_pb.FloatValue.AsObject>,
        paymentMethodList: Array<google_protobuf_wrappers_pb.FloatValue.AsObject>,
        ocrLineDkTypeList: Array<google_protobuf_wrappers_pb.FloatValue.AsObject>,
        ocrLineDkPaymentIdList: Array<google_protobuf_wrappers_pb.FloatValue.AsObject>,
        ocrLineDkCreditorIdList: Array<google_protobuf_wrappers_pb.FloatValue.AsObject>,
        ocrLineSePaymentIdList: Array<google_protobuf_wrappers_pb.FloatValue.AsObject>,
        ocrLineSeBankgiroCreditorIdList: Array<google_protobuf_wrappers_pb.FloatValue.AsObject>,
        ocrLineSePlusgiroCreditorIdList: Array<google_protobuf_wrappers_pb.FloatValue.AsObject>,
        ocrLineNoPaymentIdList: Array<google_protobuf_wrappers_pb.FloatValue.AsObject>,
        ocrLineFiPaymentIdList: Array<google_protobuf_wrappers_pb.FloatValue.AsObject>,
        ocrLineNlPaymentIdList: Array<google_protobuf_wrappers_pb.FloatValue.AsObject>,
        supplierCorporateIdList: Array<google_protobuf_wrappers_pb.FloatValue.AsObject>,
        supplierCountryCodeList: Array<google_protobuf_wrappers_pb.FloatValue.AsObject>,
        invoiceNumberList: Array<google_protobuf_wrappers_pb.FloatValue.AsObject>,
        ibanList: Array<google_protobuf_wrappers_pb.FloatValue.AsObject>,
        orderReferenceList: Array<google_protobuf_wrappers_pb.FloatValue.AsObject>,
        bankAccountNumberList: Array<google_protobuf_wrappers_pb.FloatValue.AsObject>,
        bankRegistrationNumberList: Array<google_protobuf_wrappers_pb.FloatValue.AsObject>,
        supplierNameList: Array<google_protobuf_wrappers_pb.FloatValue.AsObject>,
        bicList: Array<google_protobuf_wrappers_pb.FloatValue.AsObject>,
        documentNumberList: Array<google_protobuf_wrappers_pb.FloatValue.AsObject>,
        documentDateList: Array<google_protobuf_wrappers_pb.FloatValue.AsObject>,
        orderNumberList: Array<google_protobuf_wrappers_pb.FloatValue.AsObject>,
        supplierVatNumberList: Array<google_protobuf_wrappers_pb.FloatValue.AsObject>,
        supplierOrganisationNumberList: Array<google_protobuf_wrappers_pb.FloatValue.AsObject>,
        supplierAddressList: Array<google_protobuf_wrappers_pb.FloatValue.AsObject>,
    }
}

export class PredictionMetadata extends jspb.Message { 
    clearTotalInclVatList(): void;
    getTotalInclVatList(): Array<ssn_type_candidate_pb.ModelSpec>;
    setTotalInclVatList(value: Array<ssn_type_candidate_pb.ModelSpec>): PredictionMetadata;
    addTotalInclVat(value?: ssn_type_candidate_pb.ModelSpec, index?: number): ssn_type_candidate_pb.ModelSpec;
    clearTotalVatList(): void;
    getTotalVatList(): Array<ssn_type_candidate_pb.ModelSpec>;
    setTotalVatList(value: Array<ssn_type_candidate_pb.ModelSpec>): PredictionMetadata;
    addTotalVat(value?: ssn_type_candidate_pb.ModelSpec, index?: number): ssn_type_candidate_pb.ModelSpec;
    clearTotalExclVatList(): void;
    getTotalExclVatList(): Array<ssn_type_candidate_pb.ModelSpec>;
    setTotalExclVatList(value: Array<ssn_type_candidate_pb.ModelSpec>): PredictionMetadata;
    addTotalExclVat(value?: ssn_type_candidate_pb.ModelSpec, index?: number): ssn_type_candidate_pb.ModelSpec;
    clearOrderDateList(): void;
    getOrderDateList(): Array<ssn_type_candidate_pb.ModelSpec>;
    setOrderDateList(value: Array<ssn_type_candidate_pb.ModelSpec>): PredictionMetadata;
    addOrderDate(value?: ssn_type_candidate_pb.ModelSpec, index?: number): ssn_type_candidate_pb.ModelSpec;
    clearPaymentDueDateList(): void;
    getPaymentDueDateList(): Array<ssn_type_candidate_pb.ModelSpec>;
    setPaymentDueDateList(value: Array<ssn_type_candidate_pb.ModelSpec>): PredictionMetadata;
    addPaymentDueDate(value?: ssn_type_candidate_pb.ModelSpec, index?: number): ssn_type_candidate_pb.ModelSpec;
    clearDocumentTypeList(): void;
    getDocumentTypeList(): Array<ssn_type_candidate_pb.ModelSpec>;
    setDocumentTypeList(value: Array<ssn_type_candidate_pb.ModelSpec>): PredictionMetadata;
    addDocumentType(value?: ssn_type_candidate_pb.ModelSpec, index?: number): ssn_type_candidate_pb.ModelSpec;
    clearCurrencyList(): void;
    getCurrencyList(): Array<ssn_type_candidate_pb.ModelSpec>;
    setCurrencyList(value: Array<ssn_type_candidate_pb.ModelSpec>): PredictionMetadata;
    addCurrency(value?: ssn_type_candidate_pb.ModelSpec, index?: number): ssn_type_candidate_pb.ModelSpec;
    clearCreditCardLastFourList(): void;
    getCreditCardLastFourList(): Array<ssn_type_candidate_pb.ModelSpec>;
    setCreditCardLastFourList(value: Array<ssn_type_candidate_pb.ModelSpec>): PredictionMetadata;
    addCreditCardLastFour(value?: ssn_type_candidate_pb.ModelSpec, index?: number): ssn_type_candidate_pb.ModelSpec;
    clearPaymentMethodList(): void;
    getPaymentMethodList(): Array<ssn_type_candidate_pb.ModelSpec>;
    setPaymentMethodList(value: Array<ssn_type_candidate_pb.ModelSpec>): PredictionMetadata;
    addPaymentMethod(value?: ssn_type_candidate_pb.ModelSpec, index?: number): ssn_type_candidate_pb.ModelSpec;
    clearOcrLineDkTypeList(): void;
    getOcrLineDkTypeList(): Array<ssn_type_candidate_pb.ModelSpec>;
    setOcrLineDkTypeList(value: Array<ssn_type_candidate_pb.ModelSpec>): PredictionMetadata;
    addOcrLineDkType(value?: ssn_type_candidate_pb.ModelSpec, index?: number): ssn_type_candidate_pb.ModelSpec;
    clearOcrLineDkPaymentIdList(): void;
    getOcrLineDkPaymentIdList(): Array<ssn_type_candidate_pb.ModelSpec>;
    setOcrLineDkPaymentIdList(value: Array<ssn_type_candidate_pb.ModelSpec>): PredictionMetadata;
    addOcrLineDkPaymentId(value?: ssn_type_candidate_pb.ModelSpec, index?: number): ssn_type_candidate_pb.ModelSpec;
    clearOcrLineDkCreditorIdList(): void;
    getOcrLineDkCreditorIdList(): Array<ssn_type_candidate_pb.ModelSpec>;
    setOcrLineDkCreditorIdList(value: Array<ssn_type_candidate_pb.ModelSpec>): PredictionMetadata;
    addOcrLineDkCreditorId(value?: ssn_type_candidate_pb.ModelSpec, index?: number): ssn_type_candidate_pb.ModelSpec;
    clearOcrLineSePaymentIdList(): void;
    getOcrLineSePaymentIdList(): Array<ssn_type_candidate_pb.ModelSpec>;
    setOcrLineSePaymentIdList(value: Array<ssn_type_candidate_pb.ModelSpec>): PredictionMetadata;
    addOcrLineSePaymentId(value?: ssn_type_candidate_pb.ModelSpec, index?: number): ssn_type_candidate_pb.ModelSpec;
    clearOcrLineSeBankgiroCreditorIdList(): void;
    getOcrLineSeBankgiroCreditorIdList(): Array<ssn_type_candidate_pb.ModelSpec>;
    setOcrLineSeBankgiroCreditorIdList(value: Array<ssn_type_candidate_pb.ModelSpec>): PredictionMetadata;
    addOcrLineSeBankgiroCreditorId(value?: ssn_type_candidate_pb.ModelSpec, index?: number): ssn_type_candidate_pb.ModelSpec;
    clearOcrLineSePlusgiroCreditorIdList(): void;
    getOcrLineSePlusgiroCreditorIdList(): Array<ssn_type_candidate_pb.ModelSpec>;
    setOcrLineSePlusgiroCreditorIdList(value: Array<ssn_type_candidate_pb.ModelSpec>): PredictionMetadata;
    addOcrLineSePlusgiroCreditorId(value?: ssn_type_candidate_pb.ModelSpec, index?: number): ssn_type_candidate_pb.ModelSpec;
    clearOcrLineNoPaymentIdList(): void;
    getOcrLineNoPaymentIdList(): Array<ssn_type_candidate_pb.ModelSpec>;
    setOcrLineNoPaymentIdList(value: Array<ssn_type_candidate_pb.ModelSpec>): PredictionMetadata;
    addOcrLineNoPaymentId(value?: ssn_type_candidate_pb.ModelSpec, index?: number): ssn_type_candidate_pb.ModelSpec;
    clearOcrLineFiPaymentIdList(): void;
    getOcrLineFiPaymentIdList(): Array<ssn_type_candidate_pb.ModelSpec>;
    setOcrLineFiPaymentIdList(value: Array<ssn_type_candidate_pb.ModelSpec>): PredictionMetadata;
    addOcrLineFiPaymentId(value?: ssn_type_candidate_pb.ModelSpec, index?: number): ssn_type_candidate_pb.ModelSpec;
    clearOcrLineNlPaymentIdList(): void;
    getOcrLineNlPaymentIdList(): Array<ssn_type_candidate_pb.ModelSpec>;
    setOcrLineNlPaymentIdList(value: Array<ssn_type_candidate_pb.ModelSpec>): PredictionMetadata;
    addOcrLineNlPaymentId(value?: ssn_type_candidate_pb.ModelSpec, index?: number): ssn_type_candidate_pb.ModelSpec;
    clearSupplierCorporateIdList(): void;
    getSupplierCorporateIdList(): Array<ssn_type_candidate_pb.ModelSpec>;
    setSupplierCorporateIdList(value: Array<ssn_type_candidate_pb.ModelSpec>): PredictionMetadata;
    addSupplierCorporateId(value?: ssn_type_candidate_pb.ModelSpec, index?: number): ssn_type_candidate_pb.ModelSpec;
    clearSupplierCountryCodeList(): void;
    getSupplierCountryCodeList(): Array<ssn_type_candidate_pb.ModelSpec>;
    setSupplierCountryCodeList(value: Array<ssn_type_candidate_pb.ModelSpec>): PredictionMetadata;
    addSupplierCountryCode(value?: ssn_type_candidate_pb.ModelSpec, index?: number): ssn_type_candidate_pb.ModelSpec;
    clearInvoiceNumberList(): void;
    getInvoiceNumberList(): Array<ssn_type_candidate_pb.ModelSpec>;
    setInvoiceNumberList(value: Array<ssn_type_candidate_pb.ModelSpec>): PredictionMetadata;
    addInvoiceNumber(value?: ssn_type_candidate_pb.ModelSpec, index?: number): ssn_type_candidate_pb.ModelSpec;
    clearIbanList(): void;
    getIbanList(): Array<ssn_type_candidate_pb.ModelSpec>;
    setIbanList(value: Array<ssn_type_candidate_pb.ModelSpec>): PredictionMetadata;
    addIban(value?: ssn_type_candidate_pb.ModelSpec, index?: number): ssn_type_candidate_pb.ModelSpec;
    clearOrderReferenceList(): void;
    getOrderReferenceList(): Array<ssn_type_candidate_pb.ModelSpec>;
    setOrderReferenceList(value: Array<ssn_type_candidate_pb.ModelSpec>): PredictionMetadata;
    addOrderReference(value?: ssn_type_candidate_pb.ModelSpec, index?: number): ssn_type_candidate_pb.ModelSpec;
    clearBankAccountNumberList(): void;
    getBankAccountNumberList(): Array<ssn_type_candidate_pb.ModelSpec>;
    setBankAccountNumberList(value: Array<ssn_type_candidate_pb.ModelSpec>): PredictionMetadata;
    addBankAccountNumber(value?: ssn_type_candidate_pb.ModelSpec, index?: number): ssn_type_candidate_pb.ModelSpec;
    clearBankRegistrationNumberList(): void;
    getBankRegistrationNumberList(): Array<ssn_type_candidate_pb.ModelSpec>;
    setBankRegistrationNumberList(value: Array<ssn_type_candidate_pb.ModelSpec>): PredictionMetadata;
    addBankRegistrationNumber(value?: ssn_type_candidate_pb.ModelSpec, index?: number): ssn_type_candidate_pb.ModelSpec;
    clearSupplierNameList(): void;
    getSupplierNameList(): Array<ssn_type_candidate_pb.ModelSpec>;
    setSupplierNameList(value: Array<ssn_type_candidate_pb.ModelSpec>): PredictionMetadata;
    addSupplierName(value?: ssn_type_candidate_pb.ModelSpec, index?: number): ssn_type_candidate_pb.ModelSpec;
    clearBicList(): void;
    getBicList(): Array<ssn_type_candidate_pb.ModelSpec>;
    setBicList(value: Array<ssn_type_candidate_pb.ModelSpec>): PredictionMetadata;
    addBic(value?: ssn_type_candidate_pb.ModelSpec, index?: number): ssn_type_candidate_pb.ModelSpec;
    clearDocumentNumberList(): void;
    getDocumentNumberList(): Array<ssn_type_candidate_pb.ModelSpec>;
    setDocumentNumberList(value: Array<ssn_type_candidate_pb.ModelSpec>): PredictionMetadata;
    addDocumentNumber(value?: ssn_type_candidate_pb.ModelSpec, index?: number): ssn_type_candidate_pb.ModelSpec;
    clearDocumentDateList(): void;
    getDocumentDateList(): Array<ssn_type_candidate_pb.ModelSpec>;
    setDocumentDateList(value: Array<ssn_type_candidate_pb.ModelSpec>): PredictionMetadata;
    addDocumentDate(value?: ssn_type_candidate_pb.ModelSpec, index?: number): ssn_type_candidate_pb.ModelSpec;
    clearOrderNumberList(): void;
    getOrderNumberList(): Array<ssn_type_candidate_pb.ModelSpec>;
    setOrderNumberList(value: Array<ssn_type_candidate_pb.ModelSpec>): PredictionMetadata;
    addOrderNumber(value?: ssn_type_candidate_pb.ModelSpec, index?: number): ssn_type_candidate_pb.ModelSpec;
    clearSupplierVatNumberList(): void;
    getSupplierVatNumberList(): Array<ssn_type_candidate_pb.ModelSpec>;
    setSupplierVatNumberList(value: Array<ssn_type_candidate_pb.ModelSpec>): PredictionMetadata;
    addSupplierVatNumber(value?: ssn_type_candidate_pb.ModelSpec, index?: number): ssn_type_candidate_pb.ModelSpec;
    clearSupplierOrganisationNumberList(): void;
    getSupplierOrganisationNumberList(): Array<ssn_type_candidate_pb.ModelSpec>;
    setSupplierOrganisationNumberList(value: Array<ssn_type_candidate_pb.ModelSpec>): PredictionMetadata;
    addSupplierOrganisationNumber(value?: ssn_type_candidate_pb.ModelSpec, index?: number): ssn_type_candidate_pb.ModelSpec;
    clearSupplierAddressList(): void;
    getSupplierAddressList(): Array<ssn_type_candidate_pb.ModelSpec>;
    setSupplierAddressList(value: Array<ssn_type_candidate_pb.ModelSpec>): PredictionMetadata;
    addSupplierAddress(value?: ssn_type_candidate_pb.ModelSpec, index?: number): ssn_type_candidate_pb.ModelSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PredictionMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: PredictionMetadata): PredictionMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PredictionMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PredictionMetadata;
    static deserializeBinaryFromReader(message: PredictionMetadata, reader: jspb.BinaryReader): PredictionMetadata;
}

export namespace PredictionMetadata {
    export type AsObject = {
        totalInclVatList: Array<ssn_type_candidate_pb.ModelSpec.AsObject>,
        totalVatList: Array<ssn_type_candidate_pb.ModelSpec.AsObject>,
        totalExclVatList: Array<ssn_type_candidate_pb.ModelSpec.AsObject>,
        orderDateList: Array<ssn_type_candidate_pb.ModelSpec.AsObject>,
        paymentDueDateList: Array<ssn_type_candidate_pb.ModelSpec.AsObject>,
        documentTypeList: Array<ssn_type_candidate_pb.ModelSpec.AsObject>,
        currencyList: Array<ssn_type_candidate_pb.ModelSpec.AsObject>,
        creditCardLastFourList: Array<ssn_type_candidate_pb.ModelSpec.AsObject>,
        paymentMethodList: Array<ssn_type_candidate_pb.ModelSpec.AsObject>,
        ocrLineDkTypeList: Array<ssn_type_candidate_pb.ModelSpec.AsObject>,
        ocrLineDkPaymentIdList: Array<ssn_type_candidate_pb.ModelSpec.AsObject>,
        ocrLineDkCreditorIdList: Array<ssn_type_candidate_pb.ModelSpec.AsObject>,
        ocrLineSePaymentIdList: Array<ssn_type_candidate_pb.ModelSpec.AsObject>,
        ocrLineSeBankgiroCreditorIdList: Array<ssn_type_candidate_pb.ModelSpec.AsObject>,
        ocrLineSePlusgiroCreditorIdList: Array<ssn_type_candidate_pb.ModelSpec.AsObject>,
        ocrLineNoPaymentIdList: Array<ssn_type_candidate_pb.ModelSpec.AsObject>,
        ocrLineFiPaymentIdList: Array<ssn_type_candidate_pb.ModelSpec.AsObject>,
        ocrLineNlPaymentIdList: Array<ssn_type_candidate_pb.ModelSpec.AsObject>,
        supplierCorporateIdList: Array<ssn_type_candidate_pb.ModelSpec.AsObject>,
        supplierCountryCodeList: Array<ssn_type_candidate_pb.ModelSpec.AsObject>,
        invoiceNumberList: Array<ssn_type_candidate_pb.ModelSpec.AsObject>,
        ibanList: Array<ssn_type_candidate_pb.ModelSpec.AsObject>,
        orderReferenceList: Array<ssn_type_candidate_pb.ModelSpec.AsObject>,
        bankAccountNumberList: Array<ssn_type_candidate_pb.ModelSpec.AsObject>,
        bankRegistrationNumberList: Array<ssn_type_candidate_pb.ModelSpec.AsObject>,
        supplierNameList: Array<ssn_type_candidate_pb.ModelSpec.AsObject>,
        bicList: Array<ssn_type_candidate_pb.ModelSpec.AsObject>,
        documentNumberList: Array<ssn_type_candidate_pb.ModelSpec.AsObject>,
        documentDateList: Array<ssn_type_candidate_pb.ModelSpec.AsObject>,
        orderNumberList: Array<ssn_type_candidate_pb.ModelSpec.AsObject>,
        supplierVatNumberList: Array<ssn_type_candidate_pb.ModelSpec.AsObject>,
        supplierOrganisationNumberList: Array<ssn_type_candidate_pb.ModelSpec.AsObject>,
        supplierAddressList: Array<ssn_type_candidate_pb.ModelSpec.AsObject>,
    }
}

export class CreateDocumentRequest extends jspb.Message { 

    hasDocument(): boolean;
    clearDocument(): void;
    getDocument(): Document | undefined;
    setDocument(value?: Document): CreateDocumentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateDocumentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateDocumentRequest): CreateDocumentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateDocumentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateDocumentRequest;
    static deserializeBinaryFromReader(message: CreateDocumentRequest, reader: jspb.BinaryReader): CreateDocumentRequest;
}

export namespace CreateDocumentRequest {
    export type AsObject = {
        document?: Document.AsObject,
    }
}

export class CreateDocumentResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): CreateDocumentResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateDocumentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateDocumentResponse): CreateDocumentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateDocumentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateDocumentResponse;
    static deserializeBinaryFromReader(message: CreateDocumentResponse, reader: jspb.BinaryReader): CreateDocumentResponse;
}

export namespace CreateDocumentResponse {
    export type AsObject = {
        id: string,
    }
}

export class ReadDocumentRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): ReadDocumentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadDocumentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReadDocumentRequest): ReadDocumentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadDocumentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadDocumentRequest;
    static deserializeBinaryFromReader(message: ReadDocumentRequest, reader: jspb.BinaryReader): ReadDocumentRequest;
}

export namespace ReadDocumentRequest {
    export type AsObject = {
        id: string,
    }
}

export class ReadDocumentResponse extends jspb.Message { 

    hasDocument(): boolean;
    clearDocument(): void;
    getDocument(): Document | undefined;
    setDocument(value?: Document): ReadDocumentResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadDocumentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ReadDocumentResponse): ReadDocumentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadDocumentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadDocumentResponse;
    static deserializeBinaryFromReader(message: ReadDocumentResponse, reader: jspb.BinaryReader): ReadDocumentResponse;
}

export namespace ReadDocumentResponse {
    export type AsObject = {
        document?: Document.AsObject,
    }
}

export class PrepareFeedbackRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): PrepareFeedbackRequest;

    hasTa(): boolean;
    clearTa(): void;
    getTa(): ssn_type_text_annotation_pb.TextAnnotation | undefined;
    setTa(value?: ssn_type_text_annotation_pb.TextAnnotation): PrepareFeedbackRequest;
    getDocumentBytes(): Uint8Array | string;
    getDocumentBytes_asU8(): Uint8Array;
    getDocumentBytes_asB64(): string;
    setDocumentBytes(value: Uint8Array | string): PrepareFeedbackRequest;

    hasPredictions(): boolean;
    clearPredictions(): void;
    getPredictions(): PredictionValues | undefined;
    setPredictions(value?: PredictionValues): PrepareFeedbackRequest;
    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): PrepareFeedbackRequest;
    addTags(value: string, index?: number): string;

    hasConfidences(): boolean;
    clearConfidences(): void;
    getConfidences(): PredictionConfidences | undefined;
    setConfidences(value?: PredictionConfidences): PrepareFeedbackRequest;

    hasPredictionMetadata(): boolean;
    clearPredictionMetadata(): void;
    getPredictionMetadata(): PredictionMetadata | undefined;
    setPredictionMetadata(value?: PredictionMetadata): PrepareFeedbackRequest;
    getTier(): ssn_type_tier_pb.Tier;
    setTier(value: ssn_type_tier_pb.Tier): PrepareFeedbackRequest;
    clearSegmentsList(): void;
    getSegmentsList(): Array<string>;
    setSegmentsList(value: Array<string>): PrepareFeedbackRequest;
    addSegments(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PrepareFeedbackRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PrepareFeedbackRequest): PrepareFeedbackRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PrepareFeedbackRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PrepareFeedbackRequest;
    static deserializeBinaryFromReader(message: PrepareFeedbackRequest, reader: jspb.BinaryReader): PrepareFeedbackRequest;
}

export namespace PrepareFeedbackRequest {
    export type AsObject = {
        id: string,
        ta?: ssn_type_text_annotation_pb.TextAnnotation.AsObject,
        documentBytes: Uint8Array | string,
        predictions?: PredictionValues.AsObject,
        tagsList: Array<string>,
        confidences?: PredictionConfidences.AsObject,
        predictionMetadata?: PredictionMetadata.AsObject,
        tier: ssn_type_tier_pb.Tier,
        segmentsList: Array<string>,
    }
}

export class FeedbackRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): FeedbackRequest;

    hasTrueValues(): boolean;
    clearTrueValues(): void;
    getTrueValues(): TrueValues | undefined;
    setTrueValues(value?: TrueValues): FeedbackRequest;
    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): FeedbackRequest;
    addTags(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FeedbackRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FeedbackRequest): FeedbackRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FeedbackRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FeedbackRequest;
    static deserializeBinaryFromReader(message: FeedbackRequest, reader: jspb.BinaryReader): FeedbackRequest;
}

export namespace FeedbackRequest {
    export type AsObject = {
        id: string,
        trueValues?: TrueValues.AsObject,
        tagsList: Array<string>,
    }
}

export class MetricsRequest extends jspb.Message { 
    getStartTime(): number;
    setStartTime(value: number): MetricsRequest;
    getEndTime(): number;
    setEndTime(value: number): MetricsRequest;
    clearFieldsList(): void;
    getFieldsList(): Array<string>;
    setFieldsList(value: Array<string>): MetricsRequest;
    addFields(value: string, index?: number): string;
    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): MetricsRequest;
    addTags(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MetricsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MetricsRequest): MetricsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MetricsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MetricsRequest;
    static deserializeBinaryFromReader(message: MetricsRequest, reader: jspb.BinaryReader): MetricsRequest;
}

export namespace MetricsRequest {
    export type AsObject = {
        startTime: number,
        endTime: number,
        fieldsList: Array<string>,
        tagsList: Array<string>,
    }
}

export class FeedbackMetrics extends jspb.Message { 
    getDocumentCount(): number;
    setDocumentCount(value: number): FeedbackMetrics;
    getFeedbackCount(): number;
    setFeedbackCount(value: number): FeedbackMetrics;

    hasOverallCorrectness(): boolean;
    clearOverallCorrectness(): void;
    getOverallCorrectness(): Correctness | undefined;
    setOverallCorrectness(value?: Correctness): FeedbackMetrics;
    clearFieldCorrectnessList(): void;
    getFieldCorrectnessList(): Array<Correctness>;
    setFieldCorrectnessList(value: Array<Correctness>): FeedbackMetrics;
    addFieldCorrectness(value?: Correctness, index?: number): Correctness;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FeedbackMetrics.AsObject;
    static toObject(includeInstance: boolean, msg: FeedbackMetrics): FeedbackMetrics.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FeedbackMetrics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FeedbackMetrics;
    static deserializeBinaryFromReader(message: FeedbackMetrics, reader: jspb.BinaryReader): FeedbackMetrics;
}

export namespace FeedbackMetrics {
    export type AsObject = {
        documentCount: number,
        feedbackCount: number,
        overallCorrectness?: Correctness.AsObject,
        fieldCorrectnessList: Array<Correctness.AsObject>,
    }
}

export class Correctness extends jspb.Message { 
    getField(): string;
    setField(value: string): Correctness;
    getCorrectPercentage(): number;
    setCorrectPercentage(value: number): Correctness;
    getIncompletePercentage(): number;
    setIncompletePercentage(value: number): Correctness;
    getErrorPercentage(): number;
    setErrorPercentage(value: number): Correctness;
    getSupport(): number;
    setSupport(value: number): Correctness;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Correctness.AsObject;
    static toObject(includeInstance: boolean, msg: Correctness): Correctness.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Correctness, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Correctness;
    static deserializeBinaryFromReader(message: Correctness, reader: jspb.BinaryReader): Correctness;
}

export namespace Correctness {
    export type AsObject = {
        field: string,
        correctPercentage: number,
        incompletePercentage: number,
        errorPercentage: number,
        support: number,
    }
}

export class DeleteRequest extends jspb.Message { 
    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): DeleteRequest;
    addTags(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteRequest): DeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteRequest;
    static deserializeBinaryFromReader(message: DeleteRequest, reader: jspb.BinaryReader): DeleteRequest;
}

export namespace DeleteRequest {
    export type AsObject = {
        tagsList: Array<string>,
    }
}

export class CallsPerMonth extends jspb.Message { 
    getCalls(): number;
    setCalls(value: number): CallsPerMonth;
    getMonthName(): string;
    setMonthName(value: string): CallsPerMonth;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallsPerMonth.AsObject;
    static toObject(includeInstance: boolean, msg: CallsPerMonth): CallsPerMonth.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallsPerMonth, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallsPerMonth;
    static deserializeBinaryFromReader(message: CallsPerMonth, reader: jspb.BinaryReader): CallsPerMonth;
}

export namespace CallsPerMonth {
    export type AsObject = {
        calls: number,
        monthName: string,
    }
}

export class CallsPerMonthResponse extends jspb.Message { 
    clearCallsPerMonthList(): void;
    getCallsPerMonthList(): Array<CallsPerMonth>;
    setCallsPerMonthList(value: Array<CallsPerMonth>): CallsPerMonthResponse;
    addCallsPerMonth(value?: CallsPerMonth, index?: number): CallsPerMonth;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallsPerMonthResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CallsPerMonthResponse): CallsPerMonthResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallsPerMonthResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallsPerMonthResponse;
    static deserializeBinaryFromReader(message: CallsPerMonthResponse, reader: jspb.BinaryReader): CallsPerMonthResponse;
}

export namespace CallsPerMonthResponse {
    export type AsObject = {
        callsPerMonthList: Array<CallsPerMonth.AsObject>,
    }
}
