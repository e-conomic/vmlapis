// package: asgt.v2
// file: asgt/v2/suggester_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as asgt_type_model_pb from "../../asgt/type/model_pb";
import * as asgt_type_prediction_pb from "../../asgt/type/prediction_pb";
import * as asgt_v2_type_data_pb from "../../asgt/v2/type/data_pb";
import * as protoc_gen_openapiv2_options_annotations_pb from "../../protoc-gen-openapiv2/options/annotations_pb";
import * as validate_validate_pb from "../../validate/validate_pb";

export class SuggestOptions extends jspb.Message { 
    getSuggestLimit(): number;
    setSuggestLimit(value: number): SuggestOptions;
    getMinConfidence(): asgt_type_prediction_pb.Confidence.Level;
    setMinConfidence(value: asgt_type_prediction_pb.Confidence.Level): SuggestOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuggestOptions.AsObject;
    static toObject(includeInstance: boolean, msg: SuggestOptions): SuggestOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuggestOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuggestOptions;
    static deserializeBinaryFromReader(message: SuggestOptions, reader: jspb.BinaryReader): SuggestOptions;
}

export namespace SuggestOptions {
    export type AsObject = {
        suggestLimit: number,
        minConfidence: asgt_type_prediction_pb.Confidence.Level,
    }
}

export class SuggestRequest extends jspb.Message { 
    getDatasetName(): string;
    setDatasetName(value: string): SuggestRequest;

    hasInput(): boolean;
    clearInput(): void;
    getInput(): asgt_v2_type_data_pb.Data | undefined;
    setInput(value?: asgt_v2_type_data_pb.Data): SuggestRequest;

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): SuggestOptions | undefined;
    setOptions(value?: SuggestOptions): SuggestRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuggestRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SuggestRequest): SuggestRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuggestRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuggestRequest;
    static deserializeBinaryFromReader(message: SuggestRequest, reader: jspb.BinaryReader): SuggestRequest;
}

export namespace SuggestRequest {
    export type AsObject = {
        datasetName: string,
        input?: asgt_v2_type_data_pb.Data.AsObject,
        options?: SuggestOptions.AsObject,
    }
}

export class SuggestResponse extends jspb.Message { 

    hasPrediction(): boolean;
    clearPrediction(): void;
    getPrediction(): asgt_type_prediction_pb.Prediction | undefined;
    setPrediction(value?: asgt_type_prediction_pb.Prediction): SuggestResponse;

    hasModel(): boolean;
    clearModel(): void;
    getModel(): asgt_type_model_pb.Model | undefined;
    setModel(value?: asgt_type_model_pb.Model): SuggestResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuggestResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SuggestResponse): SuggestResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuggestResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuggestResponse;
    static deserializeBinaryFromReader(message: SuggestResponse, reader: jspb.BinaryReader): SuggestResponse;
}

export namespace SuggestResponse {
    export type AsObject = {
        prediction?: asgt_type_prediction_pb.Prediction.AsObject,
        model?: asgt_type_model_pb.Model.AsObject,
    }
}

export class BatchSuggestRequest extends jspb.Message { 
    getDatasetName(): string;
    setDatasetName(value: string): BatchSuggestRequest;
    clearInputsList(): void;
    getInputsList(): Array<asgt_v2_type_data_pb.Data>;
    setInputsList(value: Array<asgt_v2_type_data_pb.Data>): BatchSuggestRequest;
    addInputs(value?: asgt_v2_type_data_pb.Data, index?: number): asgt_v2_type_data_pb.Data;

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): SuggestOptions | undefined;
    setOptions(value?: SuggestOptions): BatchSuggestRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchSuggestRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BatchSuggestRequest): BatchSuggestRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchSuggestRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchSuggestRequest;
    static deserializeBinaryFromReader(message: BatchSuggestRequest, reader: jspb.BinaryReader): BatchSuggestRequest;
}

export namespace BatchSuggestRequest {
    export type AsObject = {
        datasetName: string,
        inputsList: Array<asgt_v2_type_data_pb.Data.AsObject>,
        options?: SuggestOptions.AsObject,
    }
}

export class BatchSuggestResponse extends jspb.Message { 
    clearPredictionsList(): void;
    getPredictionsList(): Array<asgt_type_prediction_pb.Prediction>;
    setPredictionsList(value: Array<asgt_type_prediction_pb.Prediction>): BatchSuggestResponse;
    addPredictions(value?: asgt_type_prediction_pb.Prediction, index?: number): asgt_type_prediction_pb.Prediction;

    hasModel(): boolean;
    clearModel(): void;
    getModel(): asgt_type_model_pb.Model | undefined;
    setModel(value?: asgt_type_model_pb.Model): BatchSuggestResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchSuggestResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BatchSuggestResponse): BatchSuggestResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchSuggestResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchSuggestResponse;
    static deserializeBinaryFromReader(message: BatchSuggestResponse, reader: jspb.BinaryReader): BatchSuggestResponse;
}

export namespace BatchSuggestResponse {
    export type AsObject = {
        predictionsList: Array<asgt_type_prediction_pb.Prediction.AsObject>,
        model?: asgt_type_model_pb.Model.AsObject,
    }
}
