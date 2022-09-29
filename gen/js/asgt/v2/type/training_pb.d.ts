// package: asgt.v2.type
// file: asgt/v2/type/training.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as asgt_type_dataset_pb from "../../../asgt/type/dataset_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Training extends jspb.Message { 

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Training;
    getStatus(): string;
    setStatus(value: string): Training;
    getTrainingStatus(): string;
    setTrainingStatus(value: string): Training;
    getTrainingStatusMessage(): string;
    setTrainingStatusMessage(value: string): Training;

    hasFinishTime(): boolean;
    clearFinishTime(): void;
    getFinishTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFinishTime(value?: google_protobuf_timestamp_pb.Timestamp): Training;

    hasDataset(): boolean;
    clearDataset(): void;
    getDataset(): asgt_type_dataset_pb.Dataset | undefined;
    setDataset(value?: asgt_type_dataset_pb.Dataset): Training;

    hasScheduleTime(): boolean;
    clearScheduleTime(): void;
    getScheduleTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setScheduleTime(value?: google_protobuf_timestamp_pb.Timestamp): Training;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Training.AsObject;
    static toObject(includeInstance: boolean, msg: Training): Training.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
