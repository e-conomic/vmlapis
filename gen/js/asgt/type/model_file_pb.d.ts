import * as jspb from 'google-protobuf'



export class ModelFile extends jspb.Message {
  getName(): string;
  setName(value: string): ModelFile;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): ModelFile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelFile.AsObject;
  static toObject(includeInstance: boolean, msg: ModelFile): ModelFile.AsObject;
  static serializeBinaryToWriter(message: ModelFile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelFile;
  static deserializeBinaryFromReader(message: ModelFile, reader: jspb.BinaryReader): ModelFile;
}

export namespace ModelFile {
  export type AsObject = {
    name: string,
    data: Uint8Array | string,
  }
}

