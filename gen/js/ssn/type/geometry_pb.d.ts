// package: ssn.type
// file: ssn/type/geometry.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Vertex extends jspb.Message { 
    getX(): number;
    setX(value: number): Vertex;

    getY(): number;
    setY(value: number): Vertex;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Vertex.AsObject;
    static toObject(includeInstance: boolean, msg: Vertex): Vertex.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Vertex, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Vertex;
    static deserializeBinaryFromReader(message: Vertex, reader: jspb.BinaryReader): Vertex;
}

export namespace Vertex {
    export type AsObject = {
        x: number,
        y: number,
    }
}

export class NormalizedVertex extends jspb.Message { 
    getX(): number;
    setX(value: number): NormalizedVertex;

    getY(): number;
    setY(value: number): NormalizedVertex;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NormalizedVertex.AsObject;
    static toObject(includeInstance: boolean, msg: NormalizedVertex): NormalizedVertex.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NormalizedVertex, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NormalizedVertex;
    static deserializeBinaryFromReader(message: NormalizedVertex, reader: jspb.BinaryReader): NormalizedVertex;
}

export namespace NormalizedVertex {
    export type AsObject = {
        x: number,
        y: number,
    }
}

export class BoundingPoly extends jspb.Message { 
    clearVerticesList(): void;
    getVerticesList(): Array<Vertex>;
    setVerticesList(value: Array<Vertex>): BoundingPoly;
    addVertices(value?: Vertex, index?: number): Vertex;

    clearNormalizedVerticesList(): void;
    getNormalizedVerticesList(): Array<NormalizedVertex>;
    setNormalizedVerticesList(value: Array<NormalizedVertex>): BoundingPoly;
    addNormalizedVertices(value?: NormalizedVertex, index?: number): NormalizedVertex;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BoundingPoly.AsObject;
    static toObject(includeInstance: boolean, msg: BoundingPoly): BoundingPoly.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BoundingPoly, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BoundingPoly;
    static deserializeBinaryFromReader(message: BoundingPoly, reader: jspb.BinaryReader): BoundingPoly;
}

export namespace BoundingPoly {
    export type AsObject = {
        verticesList: Array<Vertex.AsObject>,
        normalizedVerticesList: Array<NormalizedVertex.AsObject>,
    }
}
