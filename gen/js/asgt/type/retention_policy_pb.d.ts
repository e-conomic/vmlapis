// package: asgt.type
// file: asgt/type/retention_policy.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class RetentionPolicy extends jspb.Message { 
    getMaxDays(): number;
    setMaxDays(value: number): RetentionPolicy;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RetentionPolicy.AsObject;
    static toObject(includeInstance: boolean, msg: RetentionPolicy): RetentionPolicy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RetentionPolicy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RetentionPolicy;
    static deserializeBinaryFromReader(message: RetentionPolicy, reader: jspb.BinaryReader): RetentionPolicy;
}

export namespace RetentionPolicy {
    export type AsObject = {
        maxDays: number,
    }
}
