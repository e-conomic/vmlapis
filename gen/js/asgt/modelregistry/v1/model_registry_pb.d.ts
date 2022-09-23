// package: asgt.modelregistry.v1
// file: asgt/modelregistry/v1/model_registry.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as asgt_type_model_pb from "../../../asgt/type/model_pb";
import * as asgt_type_dataset_pb from "../../../asgt/type/dataset_pb";
import * as asgt_type_revision_pb from "../../../asgt/type/revision_pb";
import * as asgt_type_target_metrics_pb from "../../../asgt/type/target_metrics_pb";
import * as asgt_type_train_statistics_pb from "../../../asgt/type/train_statistics_pb";

export class RegisterModelRequest extends jspb.Message { 

    hasDataset(): boolean;
    clearDataset(): void;
    getDataset(): asgt_type_dataset_pb.Dataset | undefined;
    setDataset(value?: asgt_type_dataset_pb.Dataset): RegisterModelRequest;


    hasRevision(): boolean;
    clearRevision(): void;
    getRevision(): asgt_type_revision_pb.Revision | undefined;
    setRevision(value?: asgt_type_revision_pb.Revision): RegisterModelRequest;

    getModelVersion(): number;
    setModelVersion(value: number): RegisterModelRequest;


    getMetricsMap(): jspb.Map<string, number>;
    clearMetricsMap(): void;

    clearTargetMetricsList(): void;
    getTargetMetricsList(): Array<asgt_type_target_metrics_pb.TargetMetrics>;
    setTargetMetricsList(value: Array<asgt_type_target_metrics_pb.TargetMetrics>): RegisterModelRequest;
    addTargetMetrics(value?: asgt_type_target_metrics_pb.TargetMetrics, index?: number): asgt_type_target_metrics_pb.TargetMetrics;

    getInputType(): asgt_type_model_pb.Model.InputType;
    setInputType(value: asgt_type_model_pb.Model.InputType): RegisterModelRequest;


    hasTrainStatistics(): boolean;
    clearTrainStatistics(): void;
    getTrainStatistics(): asgt_type_train_statistics_pb.TrainStatistics | undefined;
    setTrainStatistics(value?: asgt_type_train_statistics_pb.TrainStatistics): RegisterModelRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterModelRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterModelRequest): RegisterModelRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterModelRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterModelRequest;
    static deserializeBinaryFromReader(message: RegisterModelRequest, reader: jspb.BinaryReader): RegisterModelRequest;
}

export namespace RegisterModelRequest {
    export type AsObject = {
        dataset?: asgt_type_dataset_pb.Dataset.AsObject,
        revision?: asgt_type_revision_pb.Revision.AsObject,
        modelVersion: number,

        metricsMap: Array<[string, number]>,
        targetMetricsList: Array<asgt_type_target_metrics_pb.TargetMetrics.AsObject>,
        inputType: asgt_type_model_pb.Model.InputType,
        trainStatistics?: asgt_type_train_statistics_pb.TrainStatistics.AsObject,
    }
}

export class GetCurrentModelRequest extends jspb.Message { 

    hasDataset(): boolean;
    clearDataset(): void;
    getDataset(): asgt_type_dataset_pb.Dataset | undefined;
    setDataset(value?: asgt_type_dataset_pb.Dataset): GetCurrentModelRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCurrentModelRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetCurrentModelRequest): GetCurrentModelRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCurrentModelRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCurrentModelRequest;
    static deserializeBinaryFromReader(message: GetCurrentModelRequest, reader: jspb.BinaryReader): GetCurrentModelRequest;
}

export namespace GetCurrentModelRequest {
    export type AsObject = {
        dataset?: asgt_type_dataset_pb.Dataset.AsObject,
    }
}

export class GetCurrentModelResponse extends jspb.Message { 

    hasModel(): boolean;
    clearModel(): void;
    getModel(): asgt_type_model_pb.Model | undefined;
    setModel(value?: asgt_type_model_pb.Model): GetCurrentModelResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCurrentModelResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetCurrentModelResponse): GetCurrentModelResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCurrentModelResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCurrentModelResponse;
    static deserializeBinaryFromReader(message: GetCurrentModelResponse, reader: jspb.BinaryReader): GetCurrentModelResponse;
}

export namespace GetCurrentModelResponse {
    export type AsObject = {
        model?: asgt_type_model_pb.Model.AsObject,
    }
}
