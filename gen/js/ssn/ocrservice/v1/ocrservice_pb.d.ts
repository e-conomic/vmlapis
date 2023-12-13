import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as ssn_annotator_v1_annotator_pb from '../../../ssn/annotator/v1/annotator_pb';
import * as ssn_type_text_annotation_pb from '../../../ssn/type/text_annotation_pb';


export class GetTextAnnotationRequest extends jspb.Message {
  getDocument(): ssn_annotator_v1_annotator_pb.Document | undefined;
  setDocument(value?: ssn_annotator_v1_annotator_pb.Document): GetTextAnnotationRequest;
  hasDocument(): boolean;
  clearDocument(): GetTextAnnotationRequest;

  getPreview(): boolean;
  setPreview(value: boolean): GetTextAnnotationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTextAnnotationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTextAnnotationRequest): GetTextAnnotationRequest.AsObject;
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
  getTextAnnotation(): ssn_type_text_annotation_pb.TextAnnotation | undefined;
  setTextAnnotation(value?: ssn_type_text_annotation_pb.TextAnnotation): GetTextAnnotationResponse;
  hasTextAnnotation(): boolean;
  clearTextAnnotation(): GetTextAnnotationResponse;

  getImage(): google_protobuf_wrappers_pb.BytesValue | undefined;
  setImage(value?: google_protobuf_wrappers_pb.BytesValue): GetTextAnnotationResponse;
  hasImage(): boolean;
  clearImage(): GetTextAnnotationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTextAnnotationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTextAnnotationResponse): GetTextAnnotationResponse.AsObject;
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

export class GetTextAnnotationsRequest extends jspb.Message {
  getDocument(): ssn_annotator_v1_annotator_pb.Document | undefined;
  setDocument(value?: ssn_annotator_v1_annotator_pb.Document): GetTextAnnotationsRequest;
  hasDocument(): boolean;
  clearDocument(): GetTextAnnotationsRequest;

  getPreview(): boolean;
  setPreview(value: boolean): GetTextAnnotationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTextAnnotationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTextAnnotationsRequest): GetTextAnnotationsRequest.AsObject;
  static serializeBinaryToWriter(message: GetTextAnnotationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTextAnnotationsRequest;
  static deserializeBinaryFromReader(message: GetTextAnnotationsRequest, reader: jspb.BinaryReader): GetTextAnnotationsRequest;
}

export namespace GetTextAnnotationsRequest {
  export type AsObject = {
    document?: ssn_annotator_v1_annotator_pb.Document.AsObject,
    preview: boolean,
  }
}

export class GetTextAnnotationsResponse extends jspb.Message {
  getTextAnnotation(): ssn_type_text_annotation_pb.TextAnnotation | undefined;
  setTextAnnotation(value?: ssn_type_text_annotation_pb.TextAnnotation): GetTextAnnotationsResponse;
  hasTextAnnotation(): boolean;
  clearTextAnnotation(): GetTextAnnotationsResponse;

  getImage(): Uint8Array | string;
  getImage_asU8(): Uint8Array;
  getImage_asB64(): string;
  setImage(value: Uint8Array | string): GetTextAnnotationsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTextAnnotationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTextAnnotationsResponse): GetTextAnnotationsResponse.AsObject;
  static serializeBinaryToWriter(message: GetTextAnnotationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTextAnnotationsResponse;
  static deserializeBinaryFromReader(message: GetTextAnnotationsResponse, reader: jspb.BinaryReader): GetTextAnnotationsResponse;
}

export namespace GetTextAnnotationsResponse {
  export type AsObject = {
    textAnnotation?: ssn_type_text_annotation_pb.TextAnnotation.AsObject,
    image: Uint8Array | string,
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
  static serializeBinaryToWriter(message: OcrScanImageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OcrScanImageResponse;
  static deserializeBinaryFromReader(message: OcrScanImageResponse, reader: jspb.BinaryReader): OcrScanImageResponse;
}

export namespace OcrScanImageResponse {
  export type AsObject = {
    tessHocr: string,
  }
}

