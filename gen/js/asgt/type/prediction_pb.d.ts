// package: asgt.type
// file: asgt/type/prediction.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gen_bq_schema_bq_field_pb from "../../gen_bq_schema/bq_field_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

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

export class Prediction extends jspb.Message { 
    clearTargetsList(): void;
    getTargetsList(): Array<Prediction.Target>;
    setTargetsList(value: Array<Prediction.Target>): Prediction;
    addTargets(value?: Prediction.Target, index?: number): Prediction.Target;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Prediction.AsObject;
    static toObject(includeInstance: boolean, msg: Prediction): Prediction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Prediction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Prediction;
    static deserializeBinaryFromReader(message: Prediction, reader: jspb.BinaryReader): Prediction;
}

export namespace Prediction {
    export type AsObject = {
        targetsList: Array<Prediction.Target.AsObject>,
    }


    export class Target extends jspb.Message { 
        getName(): string;
        setName(value: string): Target;
        clearCandidatesList(): void;
        getCandidatesList(): Array<Prediction.Target.Candidate>;
        setCandidatesList(value: Array<Prediction.Target.Candidate>): Target;
        addCandidates(value?: Prediction.Target.Candidate, index?: number): Prediction.Target.Candidate;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Target.AsObject;
        static toObject(includeInstance: boolean, msg: Target): Target.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Target, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Target;
        static deserializeBinaryFromReader(message: Target, reader: jspb.BinaryReader): Target;
    }

    export namespace Target {
        export type AsObject = {
            name: string,
            candidatesList: Array<Prediction.Target.Candidate.AsObject>,
        }


        export class Candidate extends jspb.Message { 
            getValue(): string;
            setValue(value: string): Candidate;

            hasConfidence(): boolean;
            clearConfidence(): void;
            getConfidence(): Confidence | undefined;
            setConfidence(value?: Confidence): Candidate;

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
                confidence?: Confidence.AsObject,
            }
        }

    }

}
