// package: asgt.type
// file: asgt/type/revision.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Revision extends jspb.Message { 
    getNumber(): number;
    setNumber(value: number): Revision;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Revision;
    getSize(): number;
    setSize(value: number): Revision;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Revision.AsObject;
    static toObject(includeInstance: boolean, msg: Revision): Revision.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Revision, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Revision;
    static deserializeBinaryFromReader(message: Revision, reader: jspb.BinaryReader): Revision;
}

export namespace Revision {
    export type AsObject = {
        number: number,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        size: number,
    }
}
