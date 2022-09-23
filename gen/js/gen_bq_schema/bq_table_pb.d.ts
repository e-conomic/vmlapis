// package: gen_bq_schema
// file: gen_bq_schema/bq_table.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";

export class BigQueryMessageOptions extends jspb.Message { 
    getTableName(): string;
    setTableName(value: string): BigQueryMessageOptions;

    getUseJsonNames(): boolean;
    setUseJsonNames(value: boolean): BigQueryMessageOptions;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BigQueryMessageOptions.AsObject;
    static toObject(includeInstance: boolean, msg: BigQueryMessageOptions): BigQueryMessageOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BigQueryMessageOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BigQueryMessageOptions;
    static deserializeBinaryFromReader(message: BigQueryMessageOptions, reader: jspb.BinaryReader): BigQueryMessageOptions;
}

export namespace BigQueryMessageOptions {
    export type AsObject = {
        tableName: string,
        useJsonNames: boolean,
    }
}

export const bigqueryOpts: jspb.ExtensionFieldInfo<BigQueryMessageOptions>;
