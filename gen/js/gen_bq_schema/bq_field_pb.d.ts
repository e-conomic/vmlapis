import * as jspb from 'google-protobuf'

import * as google_protobuf_descriptor_pb from 'google-protobuf/google/protobuf/descriptor_pb';


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

