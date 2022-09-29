// package: ssn.mlservice.v2
// file: ssn/mlservice/v2/mlservice.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_type_date_pb from "../../../google/type/date_pb";
import * as ssn_mlservice_v2_example_pb from "../../../ssn/mlservice/v2/example_pb";
import * as ssn_type_candidate_pb from "../../../ssn/type/candidate_pb";
import * as ssn_type_text_annotation_pb from "../../../ssn/type/text_annotation_pb";

export class FeatureGenRequest extends jspb.Message { 

    hasTruthLabels(): boolean;
    clearTruthLabels(): void;
    getTruthLabels(): FeatureGenRequest.TruthLabels | undefined;
    setTruthLabels(value?: FeatureGenRequest.TruthLabels): FeatureGenRequest;

    hasTextAnnotation(): boolean;
    clearTextAnnotation(): void;
    getTextAnnotation(): ssn_type_text_annotation_pb.TextAnnotation | undefined;
    setTextAnnotation(value?: ssn_type_text_annotation_pb.TextAnnotation): FeatureGenRequest;
    getId(): string;
    setId(value: string): FeatureGenRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FeatureGenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FeatureGenRequest): FeatureGenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FeatureGenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FeatureGenRequest;
    static deserializeBinaryFromReader(message: FeatureGenRequest, reader: jspb.BinaryReader): FeatureGenRequest;
}

export namespace FeatureGenRequest {
    export type AsObject = {
        truthLabels?: FeatureGenRequest.TruthLabels.AsObject,
        textAnnotation?: ssn_type_text_annotation_pb.TextAnnotation.AsObject,
        id: string,
    }


    export class TruthLabels extends jspb.Message { 
        getTotalInclVat(): number;
        setTotalInclVat(value: number): TruthLabels;
        getTotalVat(): number;
        setTotalVat(value: number): TruthLabels;
        getTotalExclVat(): number;
        setTotalExclVat(value: number): TruthLabels;

        hasOrderDate(): boolean;
        clearOrderDate(): void;
        getOrderDate(): google_type_date_pb.Date | undefined;
        setOrderDate(value?: google_type_date_pb.Date): TruthLabels;

        hasPaymentDueDate(): boolean;
        clearPaymentDueDate(): void;
        getPaymentDueDate(): google_type_date_pb.Date | undefined;
        setPaymentDueDate(value?: google_type_date_pb.Date): TruthLabels;
        getDocumentType(): string;
        setDocumentType(value: string): TruthLabels;
        getCurrency(): string;
        setCurrency(value: string): TruthLabels;
        getCreditCardNumber(): string;
        setCreditCardNumber(value: string): TruthLabels;
        getPaymentMethod(): string;
        setPaymentMethod(value: string): TruthLabels;
        getOcrLineDkType(): string;
        setOcrLineDkType(value: string): TruthLabels;
        getOcrLineDkPaymentId(): string;
        setOcrLineDkPaymentId(value: string): TruthLabels;
        getOcrLineDkCreditorId(): string;
        setOcrLineDkCreditorId(value: string): TruthLabels;
        getOcrLineSePaymentId(): string;
        setOcrLineSePaymentId(value: string): TruthLabels;
        getOcrLineSeBankgiroCreditorId(): string;
        setOcrLineSeBankgiroCreditorId(value: string): TruthLabels;
        getOcrLineSePlusgiroCreditorId(): string;
        setOcrLineSePlusgiroCreditorId(value: string): TruthLabels;
        getOcrLineNoPaymentId(): string;
        setOcrLineNoPaymentId(value: string): TruthLabels;
        getOcrLineFiPaymentId(): string;
        setOcrLineFiPaymentId(value: string): TruthLabels;
        getOcrLineNlPaymentId(): string;
        setOcrLineNlPaymentId(value: string): TruthLabels;
        getSupplierCorporateId(): string;
        setSupplierCorporateId(value: string): TruthLabels;
        getSupplierCountryCode(): string;
        setSupplierCountryCode(value: string): TruthLabels;
        getInvoiceNumber(): string;
        setInvoiceNumber(value: string): TruthLabels;
        getIban(): string;
        setIban(value: string): TruthLabels;
        getBankAccountNumber(): string;
        setBankAccountNumber(value: string): TruthLabels;
        getBankRegistrationNumber(): string;
        setBankRegistrationNumber(value: string): TruthLabels;
        getSupplierName(): string;
        setSupplierName(value: string): TruthLabels;
        getBic(): string;
        setBic(value: string): TruthLabels;
        getDocumentNumber(): string;
        setDocumentNumber(value: string): TruthLabels;

        hasDocumentDate(): boolean;
        clearDocumentDate(): void;
        getDocumentDate(): google_type_date_pb.Date | undefined;
        setDocumentDate(value?: google_type_date_pb.Date): TruthLabels;
        getOrderNumber(): string;
        setOrderNumber(value: string): TruthLabels;
        getSupplierVatNumber(): string;
        setSupplierVatNumber(value: string): TruthLabels;
        getSupplierOrganisationNumber(): string;
        setSupplierOrganisationNumber(value: string): TruthLabels;
        getSupplierAddress(): string;
        setSupplierAddress(value: string): TruthLabels;
        getCreditCardLastFour(): string;
        setCreditCardLastFour(value: string): TruthLabels;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): TruthLabels.AsObject;
        static toObject(includeInstance: boolean, msg: TruthLabels): TruthLabels.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: TruthLabels, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): TruthLabels;
        static deserializeBinaryFromReader(message: TruthLabels, reader: jspb.BinaryReader): TruthLabels;
    }

    export namespace TruthLabels {
        export type AsObject = {
            totalInclVat: number,
            totalVat: number,
            totalExclVat: number,
            orderDate?: google_type_date_pb.Date.AsObject,
            paymentDueDate?: google_type_date_pb.Date.AsObject,
            documentType: string,
            currency: string,
            creditCardNumber: string,
            paymentMethod: string,
            ocrLineDkType: string,
            ocrLineDkPaymentId: string,
            ocrLineDkCreditorId: string,
            ocrLineSePaymentId: string,
            ocrLineSeBankgiroCreditorId: string,
            ocrLineSePlusgiroCreditorId: string,
            ocrLineNoPaymentId: string,
            ocrLineFiPaymentId: string,
            ocrLineNlPaymentId: string,
            supplierCorporateId: string,
            supplierCountryCode: string,
            invoiceNumber: string,
            iban: string,
            bankAccountNumber: string,
            bankRegistrationNumber: string,
            supplierName: string,
            bic: string,
            documentNumber: string,
            documentDate?: google_type_date_pb.Date.AsObject,
            orderNumber: string,
            supplierVatNumber: string,
            supplierOrganisationNumber: string,
            supplierAddress: string,
            creditCardLastFour: string,
        }
    }

}

export class FeatureGenResponse extends jspb.Message { 

    hasExample(): boolean;
    clearExample(): void;
    getExample(): ssn_mlservice_v2_example_pb.Example | undefined;
    setExample(value?: ssn_mlservice_v2_example_pb.Example): FeatureGenResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FeatureGenResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FeatureGenResponse): FeatureGenResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FeatureGenResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FeatureGenResponse;
    static deserializeBinaryFromReader(message: FeatureGenResponse, reader: jspb.BinaryReader): FeatureGenResponse;
}

export namespace FeatureGenResponse {
    export type AsObject = {
        example?: ssn_mlservice_v2_example_pb.Example.AsObject,
    }
}

export class PredictRequest extends jspb.Message { 

    hasExample(): boolean;
    clearExample(): void;
    getExample(): ssn_mlservice_v2_example_pb.Example | undefined;
    setExample(value?: ssn_mlservice_v2_example_pb.Example): PredictRequest;
    getTopNMostConfident(): number;
    setTopNMostConfident(value: number): PredictRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PredictRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PredictRequest): PredictRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PredictRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PredictRequest;
    static deserializeBinaryFromReader(message: PredictRequest, reader: jspb.BinaryReader): PredictRequest;
}

export namespace PredictRequest {
    export type AsObject = {
        example?: ssn_mlservice_v2_example_pb.Example.AsObject,
        topNMostConfident: number,
    }
}

export class PredictResponse extends jspb.Message { 
    clearOrderDateList(): void;
    getOrderDateList(): Array<ssn_type_candidate_pb.Candidate>;
    setOrderDateList(value: Array<ssn_type_candidate_pb.Candidate>): PredictResponse;
    addOrderDate(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearPaymentDueDateList(): void;
    getPaymentDueDateList(): Array<ssn_type_candidate_pb.Candidate>;
    setPaymentDueDateList(value: Array<ssn_type_candidate_pb.Candidate>): PredictResponse;
    addPaymentDueDate(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearCurrencyList(): void;
    getCurrencyList(): Array<ssn_type_candidate_pb.Candidate>;
    setCurrencyList(value: Array<ssn_type_candidate_pb.Candidate>): PredictResponse;
    addCurrency(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearTotalVatList(): void;
    getTotalVatList(): Array<ssn_type_candidate_pb.Candidate>;
    setTotalVatList(value: Array<ssn_type_candidate_pb.Candidate>): PredictResponse;
    addTotalVat(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearTotalInclVatList(): void;
    getTotalInclVatList(): Array<ssn_type_candidate_pb.Candidate>;
    setTotalInclVatList(value: Array<ssn_type_candidate_pb.Candidate>): PredictResponse;
    addTotalInclVat(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearTotalExclVatList(): void;
    getTotalExclVatList(): Array<ssn_type_candidate_pb.Candidate>;
    setTotalExclVatList(value: Array<ssn_type_candidate_pb.Candidate>): PredictResponse;
    addTotalExclVat(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearSupplierCorporateIdList(): void;
    getSupplierCorporateIdList(): Array<ssn_type_candidate_pb.Candidate>;
    setSupplierCorporateIdList(value: Array<ssn_type_candidate_pb.Candidate>): PredictResponse;
    addSupplierCorporateId(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearSupplierCountryCodeList(): void;
    getSupplierCountryCodeList(): Array<ssn_type_candidate_pb.Candidate>;
    setSupplierCountryCodeList(value: Array<ssn_type_candidate_pb.Candidate>): PredictResponse;
    addSupplierCountryCode(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearDocumentTypeList(): void;
    getDocumentTypeList(): Array<ssn_type_candidate_pb.Candidate>;
    setDocumentTypeList(value: Array<ssn_type_candidate_pb.Candidate>): PredictResponse;
    addDocumentType(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearPaymentMethodList(): void;
    getPaymentMethodList(): Array<ssn_type_candidate_pb.Candidate>;
    setPaymentMethodList(value: Array<ssn_type_candidate_pb.Candidate>): PredictResponse;
    addPaymentMethod(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearCreditCardNumberList(): void;
    getCreditCardNumberList(): Array<ssn_type_candidate_pb.Candidate>;
    setCreditCardNumberList(value: Array<ssn_type_candidate_pb.Candidate>): PredictResponse;
    addCreditCardNumber(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearInvoiceNumberList(): void;
    getInvoiceNumberList(): Array<ssn_type_candidate_pb.Candidate>;
    setInvoiceNumberList(value: Array<ssn_type_candidate_pb.Candidate>): PredictResponse;
    addInvoiceNumber(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearOcrLineDkTypeList(): void;
    getOcrLineDkTypeList(): Array<ssn_type_candidate_pb.Candidate>;
    setOcrLineDkTypeList(value: Array<ssn_type_candidate_pb.Candidate>): PredictResponse;
    addOcrLineDkType(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearOcrLineDkPaymentIdList(): void;
    getOcrLineDkPaymentIdList(): Array<ssn_type_candidate_pb.Candidate>;
    setOcrLineDkPaymentIdList(value: Array<ssn_type_candidate_pb.Candidate>): PredictResponse;
    addOcrLineDkPaymentId(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearOcrLineDkCreditorIdList(): void;
    getOcrLineDkCreditorIdList(): Array<ssn_type_candidate_pb.Candidate>;
    setOcrLineDkCreditorIdList(value: Array<ssn_type_candidate_pb.Candidate>): PredictResponse;
    addOcrLineDkCreditorId(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearOcrLineSePaymentIdList(): void;
    getOcrLineSePaymentIdList(): Array<ssn_type_candidate_pb.Candidate>;
    setOcrLineSePaymentIdList(value: Array<ssn_type_candidate_pb.Candidate>): PredictResponse;
    addOcrLineSePaymentId(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearOcrLineSeBankgiroCreditorIdList(): void;
    getOcrLineSeBankgiroCreditorIdList(): Array<ssn_type_candidate_pb.Candidate>;
    setOcrLineSeBankgiroCreditorIdList(value: Array<ssn_type_candidate_pb.Candidate>): PredictResponse;
    addOcrLineSeBankgiroCreditorId(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearOcrLineSePlusgiroCreditorIdList(): void;
    getOcrLineSePlusgiroCreditorIdList(): Array<ssn_type_candidate_pb.Candidate>;
    setOcrLineSePlusgiroCreditorIdList(value: Array<ssn_type_candidate_pb.Candidate>): PredictResponse;
    addOcrLineSePlusgiroCreditorId(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearOcrLineNoPaymentIdList(): void;
    getOcrLineNoPaymentIdList(): Array<ssn_type_candidate_pb.Candidate>;
    setOcrLineNoPaymentIdList(value: Array<ssn_type_candidate_pb.Candidate>): PredictResponse;
    addOcrLineNoPaymentId(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearOcrLineFiPaymentIdList(): void;
    getOcrLineFiPaymentIdList(): Array<ssn_type_candidate_pb.Candidate>;
    setOcrLineFiPaymentIdList(value: Array<ssn_type_candidate_pb.Candidate>): PredictResponse;
    addOcrLineFiPaymentId(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearOcrLineNlPaymentIdList(): void;
    getOcrLineNlPaymentIdList(): Array<ssn_type_candidate_pb.Candidate>;
    setOcrLineNlPaymentIdList(value: Array<ssn_type_candidate_pb.Candidate>): PredictResponse;
    addOcrLineNlPaymentId(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearIbanList(): void;
    getIbanList(): Array<ssn_type_candidate_pb.Candidate>;
    setIbanList(value: Array<ssn_type_candidate_pb.Candidate>): PredictResponse;
    addIban(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearLinesList(): void;
    getLinesList(): Array<ssn_type_candidate_pb.LineCandidate>;
    setLinesList(value: Array<ssn_type_candidate_pb.LineCandidate>): PredictResponse;
    addLines(value?: ssn_type_candidate_pb.LineCandidate, index?: number): ssn_type_candidate_pb.LineCandidate;
    clearBankAccountNumberList(): void;
    getBankAccountNumberList(): Array<ssn_type_candidate_pb.Candidate>;
    setBankAccountNumberList(value: Array<ssn_type_candidate_pb.Candidate>): PredictResponse;
    addBankAccountNumber(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearBankRegistrationNumberList(): void;
    getBankRegistrationNumberList(): Array<ssn_type_candidate_pb.Candidate>;
    setBankRegistrationNumberList(value: Array<ssn_type_candidate_pb.Candidate>): PredictResponse;
    addBankRegistrationNumber(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearBicList(): void;
    getBicList(): Array<ssn_type_candidate_pb.Candidate>;
    setBicList(value: Array<ssn_type_candidate_pb.Candidate>): PredictResponse;
    addBic(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearDocumentNumberList(): void;
    getDocumentNumberList(): Array<ssn_type_candidate_pb.Candidate>;
    setDocumentNumberList(value: Array<ssn_type_candidate_pb.Candidate>): PredictResponse;
    addDocumentNumber(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearDocumentDateList(): void;
    getDocumentDateList(): Array<ssn_type_candidate_pb.Candidate>;
    setDocumentDateList(value: Array<ssn_type_candidate_pb.Candidate>): PredictResponse;
    addDocumentDate(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearOrderNumberList(): void;
    getOrderNumberList(): Array<ssn_type_candidate_pb.Candidate>;
    setOrderNumberList(value: Array<ssn_type_candidate_pb.Candidate>): PredictResponse;
    addOrderNumber(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearSupplierNameList(): void;
    getSupplierNameList(): Array<ssn_type_candidate_pb.Candidate>;
    setSupplierNameList(value: Array<ssn_type_candidate_pb.Candidate>): PredictResponse;
    addSupplierName(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearSupplierVatNumberList(): void;
    getSupplierVatNumberList(): Array<ssn_type_candidate_pb.Candidate>;
    setSupplierVatNumberList(value: Array<ssn_type_candidate_pb.Candidate>): PredictResponse;
    addSupplierVatNumber(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearSupplierOrganisationNumberList(): void;
    getSupplierOrganisationNumberList(): Array<ssn_type_candidate_pb.Candidate>;
    setSupplierOrganisationNumberList(value: Array<ssn_type_candidate_pb.Candidate>): PredictResponse;
    addSupplierOrganisationNumber(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearSupplierAddressList(): void;
    getSupplierAddressList(): Array<ssn_type_candidate_pb.Candidate>;
    setSupplierAddressList(value: Array<ssn_type_candidate_pb.Candidate>): PredictResponse;
    addSupplierAddress(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;
    clearCreditCardLastFourList(): void;
    getCreditCardLastFourList(): Array<ssn_type_candidate_pb.Candidate>;
    setCreditCardLastFourList(value: Array<ssn_type_candidate_pb.Candidate>): PredictResponse;
    addCreditCardLastFour(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PredictResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PredictResponse): PredictResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PredictResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PredictResponse;
    static deserializeBinaryFromReader(message: PredictResponse, reader: jspb.BinaryReader): PredictResponse;
}

export namespace PredictResponse {
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
        creditCardNumberList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        invoiceNumberList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        ocrLineDkTypeList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        ocrLineDkPaymentIdList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        ocrLineDkCreditorIdList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        ocrLineSePaymentIdList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        ocrLineSeBankgiroCreditorIdList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        ocrLineSePlusgiroCreditorIdList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        ocrLineNoPaymentIdList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        ocrLineFiPaymentIdList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        ocrLineNlPaymentIdList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        ibanList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
        linesList: Array<ssn_type_candidate_pb.LineCandidate.AsObject>,
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
        creditCardLastFourList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
    }
}

export class FeatureGenPredictRequest extends jspb.Message { 

    hasFeatureGenRequest(): boolean;
    clearFeatureGenRequest(): void;
    getFeatureGenRequest(): FeatureGenRequest | undefined;
    setFeatureGenRequest(value?: FeatureGenRequest): FeatureGenPredictRequest;

    hasPredictRequest(): boolean;
    clearPredictRequest(): void;
    getPredictRequest(): PredictRequest | undefined;
    setPredictRequest(value?: PredictRequest): FeatureGenPredictRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FeatureGenPredictRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FeatureGenPredictRequest): FeatureGenPredictRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FeatureGenPredictRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FeatureGenPredictRequest;
    static deserializeBinaryFromReader(message: FeatureGenPredictRequest, reader: jspb.BinaryReader): FeatureGenPredictRequest;
}

export namespace FeatureGenPredictRequest {
    export type AsObject = {
        featureGenRequest?: FeatureGenRequest.AsObject,
        predictRequest?: PredictRequest.AsObject,
    }
}
