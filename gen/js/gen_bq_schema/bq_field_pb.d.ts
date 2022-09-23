// package: gen_bq_schema
// file: gen_bq_schema/bq_field.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";

export class BigQueryFieldOptions extends jspb.Message { 
    getRequire(): boolean;
    setRequire(value: boolean): BigQueryFieldOptions;

    getTypeOverride(): string;
    setTypeOverride(value: string): BigQueryFieldOptions;

    getIgnore(): boolean;
    setIgnore(value: boolean): BigQueryFieldOptions;

    getDescription(): string;
    setDescription(value: string): BigQueryFieldOptions;

    getName(): string;
    setName(value: string): BigQueryFieldOptions;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BigQueryFieldOptions.AsObject;
    static toObject(includeInstance: boolean, msg: BigQueryFieldOptions): BigQueryFieldOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BigQueryFieldOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BigQueryFieldOptions;
    static deserializeBinaryFromReader(message: BigQueryFieldOptions, reader: jspb.BinaryReader): BigQueryFieldOptions;
}

export namespace BigQueryFieldOptions {
    export type AsObject = {
        require: boolean,
        typeOverride: string,
        ignore: boolean,
        description: string,
        name: string,
    }
}

export const bigquery: jspb.ExtensionFieldInfo<BigQueryFieldOptions>;
