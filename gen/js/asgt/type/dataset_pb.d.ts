import * as jspb from 'google-protobuf'

import * as asgt_type_retention_policy_pb from '../../asgt/type/retention_policy_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Dataset extends jspb.Message {
  getConsumer(): string;
  setConsumer(value: string): Dataset;

  getName(): string;
  setName(value: string): Dataset;

  getType(): string;
  setType(value: string): Dataset;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): Dataset;
  clearTagsList(): Dataset;
  addTags(value: string, index?: number): Dataset;

  getTargetsList(): Array<string>;
  setTargetsList(value: Array<string>): Dataset;
  clearTargetsList(): Dataset;
  addTargets(value: string, index?: number): Dataset;

  getRetentionPolicy(): asgt_type_retention_policy_pb.RetentionPolicy | undefined;
  setRetentionPolicy(value?: asgt_type_retention_policy_pb.RetentionPolicy): Dataset;
  hasRetentionPolicy(): boolean;
  clearRetentionPolicy(): Dataset;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Dataset;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Dataset;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Dataset;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): Dataset;

  getSize(): number;
  setSize(value: number): Dataset;

  getTruncatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTruncatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Dataset;
  hasTruncatedAt(): boolean;
  clearTruncatedAt(): Dataset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dataset.AsObject;
  static toObject(includeInstance: boolean, msg: Dataset): Dataset.AsObject;
  static serializeBinaryToWriter(message: Dataset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dataset;
  static deserializeBinaryFromReader(message: Dataset, reader: jspb.BinaryReader): Dataset;
}

export namespace Dataset {
  export type AsObject = {
    consumer: string,
    name: string,
    type: string,
    tagsList: Array<string>,
    targetsList: Array<string>,
    retentionPolicy?: asgt_type_retention_policy_pb.RetentionPolicy.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    size: number,
    truncatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

