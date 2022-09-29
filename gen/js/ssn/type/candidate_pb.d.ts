// package: ssn.type
// file: ssn/type/candidate.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as ssn_type_geometry_pb from "../../ssn/type/geometry_pb";

export class Confidence extends jspb.Message { 
    getLevel(): Confidence.Level;
    setLevel(value: Confidence.Level): Confidence;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): google_protobuf_wrappers_pb.FloatValue | undefined;
    setValue(value?: google_protobuf_wrappers_pb.FloatValue): Confidence;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Confidence.AsObject;
    static toObject(includeInstance: boolean, msg: Confidence): Confidence.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Confidence, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Confidence;
    static deserializeBinaryFromReader(message: Confidence, reader: jspb.BinaryReader): Confidence;
}

export namespace Confidence {
    export type AsObject = {
        level: Confidence.Level,
        value?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    }

    export enum Level {
    UNKNOWN = 0,
    VERY_LOW = 1,
    LOW = 2,
    MID = 3,
    HIGH = 4,
    VERY_HIGH = 5,
    }

}

export class Candidate extends jspb.Message { 
    getValue(): string;
    setValue(value: string): Candidate;
    getText(): string;
    setText(value: string): Candidate;

    hasConfidence(): boolean;
    clearConfidence(): void;
    getConfidence(): Confidence | undefined;
    setConfidence(value?: Confidence): Candidate;

    hasBoundingBox(): boolean;
    clearBoundingBox(): void;
    getBoundingBox(): ssn_type_geometry_pb.BoundingPoly | undefined;
    setBoundingBox(value?: ssn_type_geometry_pb.BoundingPoly): Candidate;
    getType(): Candidate.Type;
    setType(value: Candidate.Type): Candidate;
    getPageRef(): number;
    setPageRef(value: number): Candidate;

    hasModelMetadata(): boolean;
    clearModelMetadata(): void;
    getModelMetadata(): ModelSpec | undefined;
    setModelMetadata(value?: ModelSpec): Candidate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Candidate.AsObject;
    static toObject(includeInstance: boolean, msg: Candidate): Candidate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Candidate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Candidate;
    static deserializeBinaryFromReader(message: Candidate, reader: jspb.BinaryReader): Candidate;
}

export namespace Candidate {
    export type AsObject = {
        value: string,
        text: string,
        confidence?: Confidence.AsObject,
        boundingBox?: ssn_type_geometry_pb.BoundingPoly.AsObject,
        type: Candidate.Type,
        pageRef: number,
        modelMetadata?: ModelSpec.AsObject,
    }

    export enum Type {
    UNKNOWN = 0,
    FIELD = 1,
    DOCUMENT = 2,
    }

}

export class ModelSpec extends jspb.Message { 
    getModelName(): string;
    setModelName(value: string): ModelSpec;

    hasModelVer(): boolean;
    clearModelVer(): void;
    getModelVer(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setModelVer(value?: google_protobuf_wrappers_pb.Int64Value): ModelSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModelSpec.AsObject;
    static toObject(includeInstance: boolean, msg: ModelSpec): ModelSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ModelSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModelSpec;
    static deserializeBinaryFromReader(message: ModelSpec, reader: jspb.BinaryReader): ModelSpec;
}

export namespace ModelSpec {
    export type AsObject = {
        modelName: string,
        modelVer?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
}

export class LineCandidate extends jspb.Message { 
    getText(): string;
    setText(value: string): LineCandidate;
    getAmount(): number;
    setAmount(value: number): LineCandidate;
    getPageRef(): number;
    setPageRef(value: number): LineCandidate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LineCandidate.AsObject;
    static toObject(includeInstance: boolean, msg: LineCandidate): LineCandidate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LineCandidate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LineCandidate;
    static deserializeBinaryFromReader(message: LineCandidate, reader: jspb.BinaryReader): LineCandidate;
}

export namespace LineCandidate {
    export type AsObject = {
        text: string,
        amount: number,
        pageRef: number,
    }
}
