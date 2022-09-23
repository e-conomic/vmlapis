// package: asgt.jester.v1
// file: asgt/jester/v1/jester.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as protoc_gen_openapiv2_options_annotations_pb from "../../../protoc-gen-openapiv2/options/annotations_pb";
import * as asgt_type_prediction_pb from "../../../asgt/type/prediction_pb";
import * as asgt_type_model_pb from "../../../asgt/type/model_pb";
import * as asgt_type_data_pb from "../../../asgt/type/data_pb";

export class SuggestionResponse extends jspb.Message { 
    clearPredictionsList(): void;
    getPredictionsList(): Array<asgt_type_prediction_pb.Prediction>;
    setPredictionsList(value: Array<asgt_type_prediction_pb.Prediction>): SuggestionResponse;
    addPredictions(value?: asgt_type_prediction_pb.Prediction, index?: number): asgt_type_prediction_pb.Prediction;


    hasModel(): boolean;
    clearModel(): void;
    getModel(): asgt_type_model_pb.Model | undefined;
    setModel(value?: asgt_type_model_pb.Model): SuggestionResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuggestionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SuggestionResponse): SuggestionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuggestionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuggestionResponse;
    static deserializeBinaryFromReader(message: SuggestionResponse, reader: jspb.BinaryReader): SuggestionResponse;
}

export namespace SuggestionResponse {
    export type AsObject = {
        predictionsList: Array<asgt_type_prediction_pb.Prediction.AsObject>,
        model?: asgt_type_model_pb.Model.AsObject,
    }
}

export class SuggestionOptions extends jspb.Message { 
    getSuggestionLimit(): number;
    setSuggestionLimit(value: number): SuggestionOptions;

    getMinConfidence(): asgt_type_prediction_pb.Confidence.Level;
    setMinConfidence(value: asgt_type_prediction_pb.Confidence.Level): SuggestionOptions;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuggestionOptions.AsObject;
    static toObject(includeInstance: boolean, msg: SuggestionOptions): SuggestionOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuggestionOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuggestionOptions;
    static deserializeBinaryFromReader(message: SuggestionOptions, reader: jspb.BinaryReader): SuggestionOptions;
}

export namespace SuggestionOptions {
    export type AsObject = {
        suggestionLimit: number,
        minConfidence: asgt_type_prediction_pb.Confidence.Level,
    }
}

export class SuggestionRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): SuggestionRequest;

    getType(): string;
    setType(value: string): SuggestionRequest;

    clearInputsList(): void;
    getInputsList(): Array<asgt_type_data_pb.Data>;
    setInputsList(value: Array<asgt_type_data_pb.Data>): SuggestionRequest;
    addInputs(value?: asgt_type_data_pb.Data, index?: number): asgt_type_data_pb.Data;


    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): SuggestionOptions | undefined;
    setOptions(value?: SuggestionOptions): SuggestionRequest;

    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): SuggestionRequest;
    addTags(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuggestionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SuggestionRequest): SuggestionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuggestionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuggestionRequest;
    static deserializeBinaryFromReader(message: SuggestionRequest, reader: jspb.BinaryReader): SuggestionRequest;
}

export namespace SuggestionRequest {
    export type AsObject = {
        name: string,
        type: string,
        inputsList: Array<asgt_type_data_pb.Data.AsObject>,
        options?: SuggestionOptions.AsObject,
        tagsList: Array<string>,
    }
}
