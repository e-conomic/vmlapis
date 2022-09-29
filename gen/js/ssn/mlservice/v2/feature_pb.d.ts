// package: tensorflow
// file: ssn/mlservice/v2/feature.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class BytesList extends jspb.Message { 
    clearValueList(): void;
    getValueList(): Array<Uint8Array | string>;
    getValueList_asU8(): Array<Uint8Array>;
    getValueList_asB64(): Array<string>;
    setValueList(value: Array<Uint8Array | string>): BytesList;
    addValue(value: Uint8Array | string, index?: number): Uint8Array | string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BytesList.AsObject;
    static toObject(includeInstance: boolean, msg: BytesList): BytesList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BytesList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BytesList;
    static deserializeBinaryFromReader(message: BytesList, reader: jspb.BinaryReader): BytesList;
}

export namespace BytesList {
    export type AsObject = {
        valueList: Array<Uint8Array | string>,
    }
}

export class FloatList extends jspb.Message { 
    clearValueList(): void;
    getValueList(): Array<number>;
    setValueList(value: Array<number>): FloatList;
    addValue(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FloatList.AsObject;
    static toObject(includeInstance: boolean, msg: FloatList): FloatList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FloatList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FloatList;
    static deserializeBinaryFromReader(message: FloatList, reader: jspb.BinaryReader): FloatList;
}

export namespace FloatList {
    export type AsObject = {
        valueList: Array<number>,
    }
}

export class Int64List extends jspb.Message { 
    clearValueList(): void;
    getValueList(): Array<number>;
    setValueList(value: Array<number>): Int64List;
    addValue(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Int64List.AsObject;
    static toObject(includeInstance: boolean, msg: Int64List): Int64List.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Int64List, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Int64List;
    static deserializeBinaryFromReader(message: Int64List, reader: jspb.BinaryReader): Int64List;
}

export namespace Int64List {
    export type AsObject = {
        valueList: Array<number>,
    }
}

export class Feature extends jspb.Message { 

    hasBytesList(): boolean;
    clearBytesList(): void;
    getBytesList(): BytesList | undefined;
    setBytesList(value?: BytesList): Feature;

    hasFloatList(): boolean;
    clearFloatList(): void;
    getFloatList(): FloatList | undefined;
    setFloatList(value?: FloatList): Feature;

    hasInt64List(): boolean;
    clearInt64List(): void;
    getInt64List(): Int64List | undefined;
    setInt64List(value?: Int64List): Feature;

    getKindCase(): Feature.KindCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Feature.AsObject;
    static toObject(includeInstance: boolean, msg: Feature): Feature.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Feature, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Feature;
    static deserializeBinaryFromReader(message: Feature, reader: jspb.BinaryReader): Feature;
}

export namespace Feature {
    export type AsObject = {
        bytesList?: BytesList.AsObject,
        floatList?: FloatList.AsObject,
        int64List?: Int64List.AsObject,
    }

    export enum KindCase {
        KIND_NOT_SET = 0,
        BYTES_LIST = 1,
        FLOAT_LIST = 2,
        INT64_LIST = 3,
    }

}

export class Features extends jspb.Message { 

    getFeatureMap(): jspb.Map<string, Feature>;
    clearFeatureMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Features.AsObject;
    static toObject(includeInstance: boolean, msg: Features): Features.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Features, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Features;
    static deserializeBinaryFromReader(message: Features, reader: jspb.BinaryReader): Features;
}

export namespace Features {
    export type AsObject = {

        featureMap: Array<[string, Feature.AsObject]>,
    }
}

export class FeatureList extends jspb.Message { 
    clearFeatureList(): void;
    getFeatureList(): Array<Feature>;
    setFeatureList(value: Array<Feature>): FeatureList;
    addFeature(value?: Feature, index?: number): Feature;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FeatureList.AsObject;
    static toObject(includeInstance: boolean, msg: FeatureList): FeatureList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FeatureList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FeatureList;
    static deserializeBinaryFromReader(message: FeatureList, reader: jspb.BinaryReader): FeatureList;
}

export namespace FeatureList {
    export type AsObject = {
        featureList: Array<Feature.AsObject>,
    }
}

export class FeatureLists extends jspb.Message { 

    getFeatureListMap(): jspb.Map<string, FeatureList>;
    clearFeatureListMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FeatureLists.AsObject;
    static toObject(includeInstance: boolean, msg: FeatureLists): FeatureLists.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FeatureLists, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FeatureLists;
    static deserializeBinaryFromReader(message: FeatureLists, reader: jspb.BinaryReader): FeatureLists;
}

export namespace FeatureLists {
    export type AsObject = {

        featureListMap: Array<[string, FeatureList.AsObject]>,
    }
}
