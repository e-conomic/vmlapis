import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class CreateImageRequest extends jspb.Message {
  getInputPathsList(): Array<string>;
  setInputPathsList(value: Array<string>): CreateImageRequest;
  clearInputPathsList(): CreateImageRequest;
  addInputPaths(value: string, index?: number): CreateImageRequest;

  getOutputPath(): string;
  setOutputPath(value: string): CreateImageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateImageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateImageRequest): CreateImageRequest.AsObject;
  static serializeBinaryToWriter(message: CreateImageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateImageRequest;
  static deserializeBinaryFromReader(message: CreateImageRequest, reader: jspb.BinaryReader): CreateImageRequest;
}

export namespace CreateImageRequest {
  export type AsObject = {
    inputPathsList: Array<string>,
    outputPath: string,
  }
}

