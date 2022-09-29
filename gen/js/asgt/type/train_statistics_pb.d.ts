// package: asgt.type
// file: asgt/type/train_statistics.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class TargetStat extends jspb.Message { 
    getClassName(): string;
    setClassName(value: string): TargetStat;
    getRelativeDatasetProportion(): number;
    setRelativeDatasetProportion(value: number): TargetStat;
    getAbsoluteDatasetProportion(): number;
    setAbsoluteDatasetProportion(value: number): TargetStat;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TargetStat.AsObject;
    static toObject(includeInstance: boolean, msg: TargetStat): TargetStat.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TargetStat, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TargetStat;
    static deserializeBinaryFromReader(message: TargetStat, reader: jspb.BinaryReader): TargetStat;
}

export namespace TargetStat {
    export type AsObject = {
        className: string,
        relativeDatasetProportion: number,
        absoluteDatasetProportion: number,
    }
}

export class TargetStats extends jspb.Message { 
    clearTargetStatsList(): void;
    getTargetStatsList(): Array<TargetStat>;
    setTargetStatsList(value: Array<TargetStat>): TargetStats;
    addTargetStats(value?: TargetStat, index?: number): TargetStat;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TargetStats.AsObject;
    static toObject(includeInstance: boolean, msg: TargetStats): TargetStats.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TargetStats, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TargetStats;
    static deserializeBinaryFromReader(message: TargetStats, reader: jspb.BinaryReader): TargetStats;
}

export namespace TargetStats {
    export type AsObject = {
        targetStatsList: Array<TargetStat.AsObject>,
    }
}

export class FeatureStat extends jspb.Message { 
    getFeatureName(): string;
    setFeatureName(value: string): FeatureStat;
    getFeatureType(): FeatureStat.Type;
    setFeatureType(value: FeatureStat.Type): FeatureStat;
    getInformationGain(): number;
    setInformationGain(value: number): FeatureStat;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FeatureStat.AsObject;
    static toObject(includeInstance: boolean, msg: FeatureStat): FeatureStat.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FeatureStat, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FeatureStat;
    static deserializeBinaryFromReader(message: FeatureStat, reader: jspb.BinaryReader): FeatureStat;
}

export namespace FeatureStat {
    export type AsObject = {
        featureName: string,
        featureType: FeatureStat.Type,
        informationGain: number,
    }

    export enum Type {
    INT = 0,
    FLOAT = 1,
    STRING = 2,
    BYTES = 3,
    STRUCT = 4,
    }

}

export class FeatureStats extends jspb.Message { 
    clearFeatureStatsList(): void;
    getFeatureStatsList(): Array<FeatureStat>;
    setFeatureStatsList(value: Array<FeatureStat>): FeatureStats;
    addFeatureStats(value?: FeatureStat, index?: number): FeatureStat;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FeatureStats.AsObject;
    static toObject(includeInstance: boolean, msg: FeatureStats): FeatureStats.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FeatureStats, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FeatureStats;
    static deserializeBinaryFromReader(message: FeatureStats, reader: jspb.BinaryReader): FeatureStats;
}

export namespace FeatureStats {
    export type AsObject = {
        featureStatsList: Array<FeatureStat.AsObject>,
    }
}

export class TrainStatistics extends jspb.Message { 

    getTargetStatsByTargetMap(): jspb.Map<string, TargetStats>;
    clearTargetStatsByTargetMap(): void;

    getFeatureStatsByTargetMap(): jspb.Map<string, FeatureStats>;
    clearFeatureStatsByTargetMap(): void;
    getSimilarityIndex(): number;
    setSimilarityIndex(value: number): TrainStatistics;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrainStatistics.AsObject;
    static toObject(includeInstance: boolean, msg: TrainStatistics): TrainStatistics.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrainStatistics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrainStatistics;
    static deserializeBinaryFromReader(message: TrainStatistics, reader: jspb.BinaryReader): TrainStatistics;
}

export namespace TrainStatistics {
    export type AsObject = {

        targetStatsByTargetMap: Array<[string, TargetStats.AsObject]>,

        featureStatsByTargetMap: Array<[string, FeatureStats.AsObject]>,
        similarityIndex: number,
    }
}
