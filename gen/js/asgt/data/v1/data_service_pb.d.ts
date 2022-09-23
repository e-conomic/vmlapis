// package: asgt.dataservice.v1
// file: asgt/data/v1/data_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as asgt_type_retention_policy_pb from "../../../asgt/type/retention_policy_pb";
import * as asgt_type_model_pb from "../../../asgt/type/model_pb";
import * as asgt_type_dataset_pb from "../../../asgt/type/dataset_pb";
import * as asgt_type_sample_pb from "../../../asgt/type/sample_pb";
import * as ssn_dataservice_v1_dataservice_pb from "../../../ssn/dataservice/v1/dataservice_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class CalculateMetricsRequest extends jspb.Message { 

    hasStartTime(): boolean;
    clearStartTime(): void;
    getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): CalculateMetricsRequest;


    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): CalculateMetricsRequest;

    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): CalculateMetricsRequest;
    addTags(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CalculateMetricsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CalculateMetricsRequest): CalculateMetricsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CalculateMetricsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CalculateMetricsRequest;
    static deserializeBinaryFromReader(message: CalculateMetricsRequest, reader: jspb.BinaryReader): CalculateMetricsRequest;
}

export namespace CalculateMetricsRequest {
    export type AsObject = {
        startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        tagsList: Array<string>,
    }
}

export class CalculateMetricsResponse extends jspb.Message { 
    clearMetricsList(): void;
    getMetricsList(): Array<CalculateMetricsResponse.MetricRow>;
    setMetricsList(value: Array<CalculateMetricsResponse.MetricRow>): CalculateMetricsResponse;
    addMetrics(value?: CalculateMetricsResponse.MetricRow, index?: number): CalculateMetricsResponse.MetricRow;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CalculateMetricsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CalculateMetricsResponse): CalculateMetricsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CalculateMetricsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CalculateMetricsResponse;
    static deserializeBinaryFromReader(message: CalculateMetricsResponse, reader: jspb.BinaryReader): CalculateMetricsResponse;
}

export namespace CalculateMetricsResponse {
    export type AsObject = {
        metricsList: Array<CalculateMetricsResponse.MetricRow.AsObject>,
    }


    export class MetricRow extends jspb.Message { 
        getTarget(): string;
        setTarget(value: string): MetricRow;


        hasConfidence(): boolean;
        clearConfidence(): void;
        getConfidence(): google_protobuf_wrappers_pb.FloatValue | undefined;
        setConfidence(value?: google_protobuf_wrappers_pb.FloatValue): MetricRow;

        getCorrect(): number;
        setCorrect(value: number): MetricRow;

        getIncorrect(): number;
        setIncorrect(value: number): MetricRow;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): MetricRow.AsObject;
        static toObject(includeInstance: boolean, msg: MetricRow): MetricRow.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: MetricRow, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): MetricRow;
        static deserializeBinaryFromReader(message: MetricRow, reader: jspb.BinaryReader): MetricRow;
    }

    export namespace MetricRow {
        export type AsObject = {
            target: string,
            confidence?: google_protobuf_wrappers_pb.FloatValue.AsObject,
            correct: number,
            incorrect: number,
        }
    }

}

export class CreateRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): CreateRequest;

    getType(): string;
    setType(value: string): CreateRequest;

    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): CreateRequest;
    addTags(value: string, index?: number): string;

    clearTargetsList(): void;
    getTargetsList(): Array<string>;
    setTargetsList(value: Array<string>): CreateRequest;
    addTargets(value: string, index?: number): string;

    clearSamplesList(): void;
    getSamplesList(): Array<asgt_type_sample_pb.Sample>;
    setSamplesList(value: Array<asgt_type_sample_pb.Sample>): CreateRequest;
    addSamples(value?: asgt_type_sample_pb.Sample, index?: number): asgt_type_sample_pb.Sample;


    hasRetentionPolicy(): boolean;
    clearRetentionPolicy(): void;
    getRetentionPolicy(): asgt_type_retention_policy_pb.RetentionPolicy | undefined;
    setRetentionPolicy(value?: asgt_type_retention_policy_pb.RetentionPolicy): CreateRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateRequest;
    static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
    export type AsObject = {
        name: string,
        type: string,
        tagsList: Array<string>,
        targetsList: Array<string>,
        samplesList: Array<asgt_type_sample_pb.Sample.AsObject>,
        retentionPolicy?: asgt_type_retention_policy_pb.RetentionPolicy.AsObject,
    }
}

export class AppendDataRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): AppendDataRequest;

    getType(): string;
    setType(value: string): AppendDataRequest;

    clearSamplesList(): void;
    getSamplesList(): Array<asgt_type_sample_pb.Sample>;
    setSamplesList(value: Array<asgt_type_sample_pb.Sample>): AppendDataRequest;
    addSamples(value?: asgt_type_sample_pb.Sample, index?: number): asgt_type_sample_pb.Sample;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AppendDataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AppendDataRequest): AppendDataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AppendDataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AppendDataRequest;
    static deserializeBinaryFromReader(message: AppendDataRequest, reader: jspb.BinaryReader): AppendDataRequest;
}

export namespace AppendDataRequest {
    export type AsObject = {
        name: string,
        type: string,
        samplesList: Array<asgt_type_sample_pb.Sample.AsObject>,
    }
}

export class DeleteRequest extends jspb.Message { 
    getType(): string;
    setType(value: string): DeleteRequest;


    hasName(): boolean;
    clearName(): void;
    getName(): string;
    setName(value: string): DeleteRequest;


    hasTag(): boolean;
    clearTag(): void;
    getTag(): string;
    setTag(value: string): DeleteRequest;


    getMatchCase(): DeleteRequest.MatchCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteRequest): DeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteRequest;
    static deserializeBinaryFromReader(message: DeleteRequest, reader: jspb.BinaryReader): DeleteRequest;
}

export namespace DeleteRequest {
    export type AsObject = {
        type: string,
        name: string,
        tag: string,
    }

    export enum MatchCase {
        MATCH_NOT_SET = 0,
    
    NAME = 2,

    TAG = 3,

    }

}

export class GetInfoRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetInfoRequest;

    getType(): string;
    setType(value: string): GetInfoRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetInfoRequest): GetInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetInfoRequest;
    static deserializeBinaryFromReader(message: GetInfoRequest, reader: jspb.BinaryReader): GetInfoRequest;
}

export namespace GetInfoRequest {
    export type AsObject = {
        name: string,
        type: string,
    }
}

export class UpdateDatasetRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): UpdateDatasetRequest;

    getType(): string;
    setType(value: string): UpdateDatasetRequest;


    hasRetentionPolicy(): boolean;
    clearRetentionPolicy(): void;
    getRetentionPolicy(): asgt_type_retention_policy_pb.RetentionPolicy | undefined;
    setRetentionPolicy(value?: asgt_type_retention_policy_pb.RetentionPolicy): UpdateDatasetRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateDatasetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateDatasetRequest): UpdateDatasetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateDatasetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateDatasetRequest;
    static deserializeBinaryFromReader(message: UpdateDatasetRequest, reader: jspb.BinaryReader): UpdateDatasetRequest;
}

export namespace UpdateDatasetRequest {
    export type AsObject = {
        name: string,
        type: string,
        retentionPolicy?: asgt_type_retention_policy_pb.RetentionPolicy.AsObject,
    }
}

export class GetInfoResponse extends jspb.Message { 

    hasDataset(): boolean;
    clearDataset(): void;
    getDataset(): asgt_type_dataset_pb.Dataset | undefined;
    setDataset(value?: asgt_type_dataset_pb.Dataset): GetInfoResponse;


    hasModel(): boolean;
    clearModel(): void;
    getModel(): asgt_type_model_pb.Model | undefined;
    setModel(value?: asgt_type_model_pb.Model): GetInfoResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetInfoResponse): GetInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetInfoResponse;
    static deserializeBinaryFromReader(message: GetInfoResponse, reader: jspb.BinaryReader): GetInfoResponse;
}

export namespace GetInfoResponse {
    export type AsObject = {
        dataset?: asgt_type_dataset_pb.Dataset.AsObject,
        model?: asgt_type_model_pb.Model.AsObject,
    }
}

export class RegisterQueryStatsRequest extends jspb.Message { 
    getDataset(): string;
    setDataset(value: string): RegisterQueryStatsRequest;

    getModelType(): string;
    setModelType(value: string): RegisterQueryStatsRequest;

    getBatchSize(): number;
    setBatchSize(value: number): RegisterQueryStatsRequest;

    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): RegisterQueryStatsRequest;
    addTags(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterQueryStatsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterQueryStatsRequest): RegisterQueryStatsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterQueryStatsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterQueryStatsRequest;
    static deserializeBinaryFromReader(message: RegisterQueryStatsRequest, reader: jspb.BinaryReader): RegisterQueryStatsRequest;
}

export namespace RegisterQueryStatsRequest {
    export type AsObject = {
        dataset: string,
        modelType: string,
        batchSize: number,
        tagsList: Array<string>,
    }
}
