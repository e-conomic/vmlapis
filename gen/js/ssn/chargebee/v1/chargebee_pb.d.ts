import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb';


export class ChargebeeConnectionRequest extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): ChargebeeConnectionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChargebeeConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChargebeeConnectionRequest): ChargebeeConnectionRequest.AsObject;
  static serializeBinaryToWriter(message: ChargebeeConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChargebeeConnectionRequest;
  static deserializeBinaryFromReader(message: ChargebeeConnectionRequest, reader: jspb.BinaryReader): ChargebeeConnectionRequest;
}

export namespace ChargebeeConnectionRequest {
  export type AsObject = {
    message: string,
  }
}

export class ChargebeeConnectionResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): ChargebeeConnectionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChargebeeConnectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChargebeeConnectionResponse): ChargebeeConnectionResponse.AsObject;
  static serializeBinaryToWriter(message: ChargebeeConnectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChargebeeConnectionResponse;
  static deserializeBinaryFromReader(message: ChargebeeConnectionResponse, reader: jspb.BinaryReader): ChargebeeConnectionResponse;
}

export namespace ChargebeeConnectionResponse {
  export type AsObject = {
    message: string,
  }
}

