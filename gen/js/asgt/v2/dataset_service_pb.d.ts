// package: asgt.v2
// file: asgt/v2/dataset_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as protoc_gen_openapiv2_options_annotations_pb from "../../protoc-gen-openapiv2/options/annotations_pb";
import * as validate_validate_pb from "../../validate/validate_pb";
import * as asgt_v2_type_example_pb from "../../asgt/v2/type/example_pb";
import * as asgt_v2_type_training_pb from "../../asgt/v2/type/training_pb";
import * as asgt_type_dataset_pb from "../../asgt/type/dataset_pb";

export class GetDatasetRequest extends jspb.Message { 
    getDatasetName(): string;
    setDatasetName(value: string): GetDatasetRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDatasetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDatasetRequest): GetDatasetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDatasetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDatasetRequest;
    static deserializeBinaryFromReader(message: GetDatasetRequest, reader: jspb.BinaryReader): GetDatasetRequest;
}

export namespace GetDatasetRequest {
    export type AsObject = {
        datasetName: string,
    }
}

export class CreateDatasetRequest extends jspb.Message { 
    getDatasetName(): string;
    setDatasetName(value: string): CreateDatasetRequest;

    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): CreateDatasetRequest;
    addTags(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateDatasetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateDatasetRequest): CreateDatasetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateDatasetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateDatasetRequest;
    static deserializeBinaryFromReader(message: CreateDatasetRequest, reader: jspb.BinaryReader): CreateDatasetRequest;
}

export namespace CreateDatasetRequest {
    export type AsObject = {
        datasetName: string,
        tagsList: Array<string>,
    }
}

export class CreateOrUpdateDatasetRequest extends jspb.Message { 
    getDatasetName(): string;
    setDatasetName(value: string): CreateOrUpdateDatasetRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateOrUpdateDatasetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateOrUpdateDatasetRequest): CreateOrUpdateDatasetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateOrUpdateDatasetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateOrUpdateDatasetRequest;
    static deserializeBinaryFromReader(message: CreateOrUpdateDatasetRequest, reader: jspb.BinaryReader): CreateOrUpdateDatasetRequest;
}

export namespace CreateOrUpdateDatasetRequest {
    export type AsObject = {
        datasetName: string,
    }
}

export class DeleteDatasetRequest extends jspb.Message { 
    getDatasetName(): string;
    setDatasetName(value: string): DeleteDatasetRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteDatasetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteDatasetRequest): DeleteDatasetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteDatasetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteDatasetRequest;
    static deserializeBinaryFromReader(message: DeleteDatasetRequest, reader: jspb.BinaryReader): DeleteDatasetRequest;
}

export namespace DeleteDatasetRequest {
    export type AsObject = {
        datasetName: string,
    }
}

export class DeleteTagRequest extends jspb.Message { 
    getTagName(): string;
    setTagName(value: string): DeleteTagRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteTagRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteTagRequest): DeleteTagRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteTagRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteTagRequest;
    static deserializeBinaryFromReader(message: DeleteTagRequest, reader: jspb.BinaryReader): DeleteTagRequest;
}

export namespace DeleteTagRequest {
    export type AsObject = {
        tagName: string,
    }
}

export class CreateExampleRequest extends jspb.Message { 
    getDatasetName(): string;
    setDatasetName(value: string): CreateExampleRequest;


    hasExample(): boolean;
    clearExample(): void;
    getExample(): asgt_v2_type_example_pb.Example | undefined;
    setExample(value?: asgt_v2_type_example_pb.Example): CreateExampleRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateExampleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateExampleRequest): CreateExampleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateExampleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateExampleRequest;
    static deserializeBinaryFromReader(message: CreateExampleRequest, reader: jspb.BinaryReader): CreateExampleRequest;
}

export namespace CreateExampleRequest {
    export type AsObject = {
        datasetName: string,
        example?: asgt_v2_type_example_pb.Example.AsObject,
    }
}

export class CreateOrUpdateExampleRequest extends jspb.Message { 
    getDatasetName(): string;
    setDatasetName(value: string): CreateOrUpdateExampleRequest;


    hasExample(): boolean;
    clearExample(): void;
    getExample(): asgt_v2_type_example_pb.Example | undefined;
    setExample(value?: asgt_v2_type_example_pb.Example): CreateOrUpdateExampleRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateOrUpdateExampleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateOrUpdateExampleRequest): CreateOrUpdateExampleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateOrUpdateExampleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateOrUpdateExampleRequest;
    static deserializeBinaryFromReader(message: CreateOrUpdateExampleRequest, reader: jspb.BinaryReader): CreateOrUpdateExampleRequest;
}

export namespace CreateOrUpdateExampleRequest {
    export type AsObject = {
        datasetName: string,
        example?: asgt_v2_type_example_pb.Example.AsObject,
    }
}

export class BatchCreateExampleRequest extends jspb.Message { 
    getDatasetName(): string;
    setDatasetName(value: string): BatchCreateExampleRequest;

    clearExamplesList(): void;
    getExamplesList(): Array<asgt_v2_type_example_pb.Example>;
    setExamplesList(value: Array<asgt_v2_type_example_pb.Example>): BatchCreateExampleRequest;
    addExamples(value?: asgt_v2_type_example_pb.Example, index?: number): asgt_v2_type_example_pb.Example;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchCreateExampleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BatchCreateExampleRequest): BatchCreateExampleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchCreateExampleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchCreateExampleRequest;
    static deserializeBinaryFromReader(message: BatchCreateExampleRequest, reader: jspb.BinaryReader): BatchCreateExampleRequest;
}

export namespace BatchCreateExampleRequest {
    export type AsObject = {
        datasetName: string,
        examplesList: Array<asgt_v2_type_example_pb.Example.AsObject>,
    }
}

export class TruncateDatasetRequest extends jspb.Message { 
    getDatasetName(): string;
    setDatasetName(value: string): TruncateDatasetRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TruncateDatasetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TruncateDatasetRequest): TruncateDatasetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TruncateDatasetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TruncateDatasetRequest;
    static deserializeBinaryFromReader(message: TruncateDatasetRequest, reader: jspb.BinaryReader): TruncateDatasetRequest;
}

export namespace TruncateDatasetRequest {
    export type AsObject = {
        datasetName: string,
    }
}

export class TrainingRequestOptions extends jspb.Message { 
    getLimit(): number;
    setLimit(value: number): TrainingRequestOptions;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrainingRequestOptions.AsObject;
    static toObject(includeInstance: boolean, msg: TrainingRequestOptions): TrainingRequestOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrainingRequestOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrainingRequestOptions;
    static deserializeBinaryFromReader(message: TrainingRequestOptions, reader: jspb.BinaryReader): TrainingRequestOptions;
}

export namespace TrainingRequestOptions {
    export type AsObject = {
        limit: number,
    }
}

export class GetDatasetTrainingsRequest extends jspb.Message { 
    getDatasetName(): string;
    setDatasetName(value: string): GetDatasetTrainingsRequest;


    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): TrainingRequestOptions | undefined;
    setOptions(value?: TrainingRequestOptions): GetDatasetTrainingsRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDatasetTrainingsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDatasetTrainingsRequest): GetDatasetTrainingsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDatasetTrainingsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDatasetTrainingsRequest;
    static deserializeBinaryFromReader(message: GetDatasetTrainingsRequest, reader: jspb.BinaryReader): GetDatasetTrainingsRequest;
}

export namespace GetDatasetTrainingsRequest {
    export type AsObject = {
        datasetName: string,
        options?: TrainingRequestOptions.AsObject,
    }
}

export class GetTrainingsRequest extends jspb.Message { 

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): TrainingRequestOptions | undefined;
    setOptions(value?: TrainingRequestOptions): GetTrainingsRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTrainingsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTrainingsRequest): GetTrainingsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTrainingsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTrainingsRequest;
    static deserializeBinaryFromReader(message: GetTrainingsRequest, reader: jspb.BinaryReader): GetTrainingsRequest;
}

export namespace GetTrainingsRequest {
    export type AsObject = {
        options?: TrainingRequestOptions.AsObject,
    }
}

export class TrainingsResponse extends jspb.Message { 
    clearTrainingsList(): void;
    getTrainingsList(): Array<asgt_v2_type_training_pb.Training>;
    setTrainingsList(value: Array<asgt_v2_type_training_pb.Training>): TrainingsResponse;
    addTrainings(value?: asgt_v2_type_training_pb.Training, index?: number): asgt_v2_type_training_pb.Training;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrainingsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TrainingsResponse): TrainingsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrainingsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrainingsResponse;
    static deserializeBinaryFromReader(message: TrainingsResponse, reader: jspb.BinaryReader): TrainingsResponse;
}

export namespace TrainingsResponse {
    export type AsObject = {
        trainingsList: Array<asgt_v2_type_training_pb.Training.AsObject>,
    }
}
