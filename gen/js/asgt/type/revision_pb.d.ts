import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class Revision extends jspb.Message {
  getNumber(): number;
  setNumber(value: number): Revision;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Revision;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Revision;

  getSize(): number;
  setSize(value: number): Revision;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Revision.AsObject;
  static toObject(includeInstance: boolean, msg: Revision): Revision.AsObject;
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

