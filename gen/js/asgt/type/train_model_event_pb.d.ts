// package: asgt.type
// file: asgt/type/train_model_event.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as asgt_type_dataset_pb from "../../asgt/type/dataset_pb";

export class TrainModelEvent extends jspb.Message { 

    hasDataset(): boolean;
    clearDataset(): void;
    getDataset(): asgt_type_dataset_pb.Dataset | undefined;
    setDataset(value?: asgt_type_dataset_pb.Dataset): TrainModelEvent;
    getModelVersion(): number;
    setModelVersion(value: number): TrainModelEvent;
    getStatus(): string;
    setStatus(value: string): TrainModelEvent;
    getStatusMessage(): string;
    setStatusMessage(value: string): TrainModelEvent;
    clearArtifactsList(): void;
    getArtifactsList(): Array<TrainModelEvent.Artifact>;
    setArtifactsList(value: Array<TrainModelEvent.Artifact>): TrainModelEvent;
    addArtifacts(value?: TrainModelEvent.Artifact, index?: number): TrainModelEvent.Artifact;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrainModelEvent.AsObject;
    static toObject(includeInstance: boolean, msg: TrainModelEvent): TrainModelEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrainModelEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrainModelEvent;
    static deserializeBinaryFromReader(message: TrainModelEvent, reader: jspb.BinaryReader): TrainModelEvent;
}

export namespace TrainModelEvent {
    export type AsObject = {
        dataset?: asgt_type_dataset_pb.Dataset.AsObject,
        modelVersion: number,
        status: string,
        statusMessage: string,
        artifactsList: Array<TrainModelEvent.Artifact.AsObject>,
    }


    export class Artifact extends jspb.Message { 
        getType(): string;
        setType(value: string): Artifact;
        getPath(): string;
        setPath(value: string): Artifact;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Artifact.AsObject;
        static toObject(includeInstance: boolean, msg: Artifact): Artifact.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Artifact, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Artifact;
        static deserializeBinaryFromReader(message: Artifact, reader: jspb.BinaryReader): Artifact;
    }

    export namespace Artifact {
        export type AsObject = {
            type: string,
            path: string,
        }
    }

}
