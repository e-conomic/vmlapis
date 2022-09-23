// package: ssn.access.v1
// file: ssn/access/v1/access.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ValetKeyRequest extends jspb.Message { 
    getSub(): string;
    setSub(value: string): ValetKeyRequest;

    getExp(): number;
    setExp(value: number): ValetKeyRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValetKeyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ValetKeyRequest): ValetKeyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValetKeyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValetKeyRequest;
    static deserializeBinaryFromReader(message: ValetKeyRequest, reader: jspb.BinaryReader): ValetKeyRequest;
}

export namespace ValetKeyRequest {
    export type AsObject = {
        sub: string,
        exp: number,
    }
}

export class ValetKeyResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): ValetKeyResponse;

    getToken(): string;
    setToken(value: string): ValetKeyResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValetKeyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ValetKeyResponse): ValetKeyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValetKeyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValetKeyResponse;
    static deserializeBinaryFromReader(message: ValetKeyResponse, reader: jspb.BinaryReader): ValetKeyResponse;
}

export namespace ValetKeyResponse {
    export type AsObject = {
        id: string,
        token: string,
    }
}
