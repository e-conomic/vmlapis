// package: ssn.ocrservice.v1
// file: ssn/ocrservice/v1/ocrservice.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as ssn_annotator_v1_annotator_pb from "../../../ssn/annotator/v1/annotator_pb";
import * as ssn_type_text_annotation_pb from "../../../ssn/type/text_annotation_pb";

export class GetTextAnnotationRequest extends jspb.Message { 

    hasDocument(): boolean;
    clearDocument(): void;
    getDocument(): ssn_annotator_v1_annotator_pb.Document | undefined;
    setDocument(value?: ssn_annotator_v1_annotator_pb.Document): GetTextAnnotationRequest;
    getPreview(): boolean;
    setPreview(value: boolean): GetTextAnnotationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTextAnnotationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTextAnnotationRequest): GetTextAnnotationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTextAnnotationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTextAnnotationRequest;
    static deserializeBinaryFromReader(message: GetTextAnnotationRequest, reader: jspb.BinaryReader): GetTextAnnotationRequest;
}

export namespace GetTextAnnotationRequest {
    export type AsObject = {
        document?: ssn_annotator_v1_annotator_pb.Document.AsObject,
        preview: boolean,
    }
}

export class GetTextAnnotationResponse extends jspb.Message { 

    hasTextAnnotation(): boolean;
    clearTextAnnotation(): void;
    getTextAnnotation(): ssn_type_text_annotation_pb.TextAnnotation | undefined;
    setTextAnnotation(value?: ssn_type_text_annotation_pb.TextAnnotation): GetTextAnnotationResponse;

    hasImage(): boolean;
    clearImage(): void;
    getImage(): google_protobuf_wrappers_pb.BytesValue | undefined;
    setImage(value?: google_protobuf_wrappers_pb.BytesValue): GetTextAnnotationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTextAnnotationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTextAnnotationResponse): GetTextAnnotationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTextAnnotationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTextAnnotationResponse;
    static deserializeBinaryFromReader(message: GetTextAnnotationResponse, reader: jspb.BinaryReader): GetTextAnnotationResponse;
}

export namespace GetTextAnnotationResponse {
    export type AsObject = {
        textAnnotation?: ssn_type_text_annotation_pb.TextAnnotation.AsObject,
        image?: google_protobuf_wrappers_pb.BytesValue.AsObject,
    }
}

export class OcrScanImageRequest extends jspb.Message { 
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): OcrScanImageRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OcrScanImageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OcrScanImageRequest): OcrScanImageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OcrScanImageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OcrScanImageRequest;
    static deserializeBinaryFromReader(message: OcrScanImageRequest, reader: jspb.BinaryReader): OcrScanImageRequest;
}

export namespace OcrScanImageRequest {
    export type AsObject = {
        data: Uint8Array | string,
    }
}

export class OcrScanImageResponse extends jspb.Message { 
    getTessHocr(): string;
    setTessHocr(value: string): OcrScanImageResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OcrScanImageResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OcrScanImageResponse): OcrScanImageResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OcrScanImageResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OcrScanImageResponse;
    static deserializeBinaryFromReader(message: OcrScanImageResponse, reader: jspb.BinaryReader): OcrScanImageResponse;
}

export namespace OcrScanImageResponse {
    export type AsObject = {
        tessHocr: string,
    }
}
