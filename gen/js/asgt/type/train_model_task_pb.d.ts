// package: asgt.type
// file: asgt/type/train_model_task.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as asgt_type_dataset_pb from "../../asgt/type/dataset_pb";
import * as asgt_type_revision_pb from "../../asgt/type/revision_pb";

export class TrainModelTask extends jspb.Message { 

    hasDataset(): boolean;
    clearDataset(): void;
    getDataset(): asgt_type_dataset_pb.Dataset | undefined;
    setDataset(value?: asgt_type_dataset_pb.Dataset): TrainModelTask;

    hasRevision(): boolean;
    clearRevision(): void;
    getRevision(): asgt_type_revision_pb.Revision | undefined;
    setRevision(value?: asgt_type_revision_pb.Revision): TrainModelTask;
    getModelVersion(): number;
    setModelVersion(value: number): TrainModelTask;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrainModelTask.AsObject;
    static toObject(includeInstance: boolean, msg: TrainModelTask): TrainModelTask.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrainModelTask, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrainModelTask;
    static deserializeBinaryFromReader(message: TrainModelTask, reader: jspb.BinaryReader): TrainModelTask;
}

export namespace TrainModelTask {
    export type AsObject = {
        dataset?: asgt_type_dataset_pb.Dataset.AsObject,
        revision?: asgt_type_revision_pb.Revision.AsObject,
        modelVersion: number,
    }
}
