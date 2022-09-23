// package: asgt.type
// file: asgt/type/model.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gen_bq_schema_bq_field_pb from "../../gen_bq_schema/bq_field_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as asgt_type_target_metrics_pb from "../../asgt/type/target_metrics_pb";

export class Model extends jspb.Message { 
    getVersion(): number;
    setVersion(value: number): Model;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Model;

    getDatasetSize(): number;
    setDatasetSize(value: number): Model;

    getTrainingSize(): number;
    setTrainingSize(value: number): Model;

    clearConfidenceScoresList(): void;
    getConfidenceScoresList(): Array<asgt_type_target_metrics_pb.TargetMetrics>;
    setConfidenceScoresList(value: Array<asgt_type_target_metrics_pb.TargetMetrics>): Model;
    addConfidenceScores(value?: asgt_type_target_metrics_pb.TargetMetrics, index?: number): asgt_type_target_metrics_pb.TargetMetrics;

    getInputType(): Model.InputType;
    setInputType(value: Model.InputType): Model;

    getDatasetType(): string;
    setDatasetType(value: string): Model;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Model.AsObject;
    static toObject(includeInstance: boolean, msg: Model): Model.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Model, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Model;
    static deserializeBinaryFromReader(message: Model, reader: jspb.BinaryReader): Model;
}

export namespace Model {
    export type AsObject = {
        version: number,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        datasetSize: number,
        trainingSize: number,
        confidenceScoresList: Array<asgt_type_target_metrics_pb.TargetMetrics.AsObject>,
        inputType: Model.InputType,
        datasetType: string,
    }

    export enum InputType {
    FEATURE_TENSORS = 0,
    EXAMPLE_TENSOR = 1,
    }

}
