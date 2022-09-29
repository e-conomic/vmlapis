// package: asgt.type
// file: asgt/type/data.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Invoice extends jspb.Message { 

    hasIssueDate(): boolean;
    clearIssueDate(): void;
    getIssueDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setIssueDate(value?: google_protobuf_timestamp_pb.Timestamp): Invoice;

    hasSupplier(): boolean;
    clearSupplier(): void;
    getSupplier(): Supplier | undefined;
    setSupplier(value?: Supplier): Invoice;
    getCustomerRef(): string;
    setCustomerRef(value: string): Invoice;
    getText(): string;
    setText(value: string): Invoice;
    getCurrency(): string;
    setCurrency(value: string): Invoice;
    getTotal(): number;
    setTotal(value: number): Invoice;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Invoice.AsObject;
    static toObject(includeInstance: boolean, msg: Invoice): Invoice.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Invoice, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Invoice;
    static deserializeBinaryFromReader(message: Invoice, reader: jspb.BinaryReader): Invoice;
}

export namespace Invoice {
    export type AsObject = {
        issueDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        supplier?: Supplier.AsObject,
        customerRef: string,
        text: string,
        currency: string,
        total: number,
    }
}

export class InvoiceLine extends jspb.Message { 
    getText(): string;
    setText(value: string): InvoiceLine;
    getItemId(): string;
    setItemId(value: string): InvoiceLine;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InvoiceLine.AsObject;
    static toObject(includeInstance: boolean, msg: InvoiceLine): InvoiceLine.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InvoiceLine, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InvoiceLine;
    static deserializeBinaryFromReader(message: InvoiceLine, reader: jspb.BinaryReader): InvoiceLine;
}

export namespace InvoiceLine {
    export type AsObject = {
        text: string,
        itemId: string,
    }
}

export class Supplier extends jspb.Message { 
    getId(): string;
    setId(value: string): Supplier;
    getName(): string;
    setName(value: string): Supplier;
    getGlobalId(): string;
    setGlobalId(value: string): Supplier;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Supplier.AsObject;
    static toObject(includeInstance: boolean, msg: Supplier): Supplier.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Supplier, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Supplier;
    static deserializeBinaryFromReader(message: Supplier, reader: jspb.BinaryReader): Supplier;
}

export namespace Supplier {
    export type AsObject = {
        id: string,
        name: string,
        globalId: string,
    }
}

export class Transaction extends jspb.Message { 
    getText(): string;
    setText(value: string): Transaction;
    getAmount(): number;
    setAmount(value: number): Transaction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Transaction.AsObject;
    static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Transaction;
    static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
    export type AsObject = {
        text: string,
        amount: number,
    }
}

export class Data extends jspb.Message { 

    hasTransaction(): boolean;
    clearTransaction(): void;
    getTransaction(): Transaction | undefined;
    setTransaction(value?: Transaction): Data;

    hasInvoice(): boolean;
    clearInvoice(): void;
    getInvoice(): Invoice | undefined;
    setInvoice(value?: Invoice): Data;

    hasInvoiceLine(): boolean;
    clearInvoiceLine(): void;
    getInvoiceLine(): InvoiceLine | undefined;
    setInvoiceLine(value?: InvoiceLine): Data;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Data.AsObject;
    static toObject(includeInstance: boolean, msg: Data): Data.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Data, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Data;
    static deserializeBinaryFromReader(message: Data, reader: jspb.BinaryReader): Data;
}

export namespace Data {
    export type AsObject = {
        transaction?: Transaction.AsObject,
        invoice?: Invoice.AsObject,
        invoiceLine?: InvoiceLine.AsObject,
    }
}
