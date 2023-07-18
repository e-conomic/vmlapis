import * as jspb from 'google-protobuf'

import * as asgt_type_dataset_pb from '../../../asgt/type/dataset_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Training extends jspb.Message {
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Training;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Training;

  getStatus(): string;
  setStatus(value: string): Training;

  getTrainingStatus(): string;
  setTrainingStatus(value: string): Training;

  getTrainingStatusMessage(): string;
  setTrainingStatusMessage(value: string): Training;

  getFinishTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFinishTime(value?: google_protobuf_timestamp_pb.Timestamp): Training;
  hasFinishTime(): boolean;
  clearFinishTime(): Training;

  getDataset(): asgt_type_dataset_pb.Dataset | undefined;
  setDataset(value?: asgt_type_dataset_pb.Dataset): Training;
  hasDataset(): boolean;
  clearDataset(): Training;

  getScheduleTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setScheduleTime(value?: google_protobuf_timestamp_pb.Timestamp): Training;
  hasScheduleTime(): boolean;
  clearScheduleTime(): Training;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Training.AsObject;
  static toObject(includeInstance: boolean, msg: Training): Training.AsObject;
  static serializeBinaryToWriter(message: Training, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Training;
  static deserializeBinaryFromReader(message: Training, reader: jspb.BinaryReader): Training;
}

export namespace Training {
  export type AsObject = {
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: string,
    trainingStatus: string,
    trainingStatusMessage: string,
    finishTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dataset?: asgt_type_dataset_pb.Dataset.AsObject,
    scheduleTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

