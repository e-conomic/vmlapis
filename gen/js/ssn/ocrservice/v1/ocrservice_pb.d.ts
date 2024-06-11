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

export class AsyncCreateOperationRequest extends jspb.Message {
  getDocument(): ssn_annotator_v1_annotator_pb.Document | undefined;
  setDocument(value?: ssn_annotator_v1_annotator_pb.Document): AsyncCreateOperationRequest;
  hasDocument(): boolean;
  clearDocument(): AsyncCreateOperationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AsyncCreateOperationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AsyncCreateOperationRequest): AsyncCreateOperationRequest.AsObject;
  static serializeBinaryToWriter(message: AsyncCreateOperationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AsyncCreateOperationRequest;
  static deserializeBinaryFromReader(message: AsyncCreateOperationRequest, reader: jspb.BinaryReader): AsyncCreateOperationRequest;
}

export namespace AsyncCreateOperationRequest {
  export type AsObject = {
    document?: ssn_annotator_v1_annotator_pb.Document.AsObject,
  }
}

export class AsyncCreateOperationResponse extends jspb.Message {
  getOperationName(): string;
  setOperationName(value: string): AsyncCreateOperationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AsyncCreateOperationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AsyncCreateOperationResponse): AsyncCreateOperationResponse.AsObject;
  static serializeBinaryToWriter(message: AsyncCreateOperationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AsyncCreateOperationResponse;
  static deserializeBinaryFromReader(message: AsyncCreateOperationResponse, reader: jspb.BinaryReader): AsyncCreateOperationResponse;
}

export namespace AsyncCreateOperationResponse {
  export type AsObject = {
    operationName: string,
  }
}

export class AsyncGetOperationStatusRequest extends jspb.Message {
  getOperationName(): string;
  setOperationName(value: string): AsyncGetOperationStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AsyncGetOperationStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AsyncGetOperationStatusRequest): AsyncGetOperationStatusRequest.AsObject;
  static serializeBinaryToWriter(message: AsyncGetOperationStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AsyncGetOperationStatusRequest;
  static deserializeBinaryFromReader(message: AsyncGetOperationStatusRequest, reader: jspb.BinaryReader): AsyncGetOperationStatusRequest;
}

export namespace AsyncGetOperationStatusRequest {
  export type AsObject = {
    operationName: string,
  }
}

export class AsyncGetOperationStatusResponse extends jspb.Message {
  getOperationName(): string;
  setOperationName(value: string): AsyncGetOperationStatusResponse;

  getDone(): boolean;
  setDone(value: boolean): AsyncGetOperationStatusResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AsyncGetOperationStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AsyncGetOperationStatusResponse): AsyncGetOperationStatusResponse.AsObject;
  static serializeBinaryToWriter(message: AsyncGetOperationStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AsyncGetOperationStatusResponse;
  static deserializeBinaryFromReader(message: AsyncGetOperationStatusResponse, reader: jspb.BinaryReader): AsyncGetOperationStatusResponse;
}

export namespace AsyncGetOperationStatusResponse {
  export type AsObject = {
    operationName: string,
    done: boolean,
  }
}

export class AsyncGetOperationResultRequest extends jspb.Message {
  getOperationName(): string;
  setOperationName(value: string): AsyncGetOperationResultRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AsyncGetOperationResultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AsyncGetOperationResultRequest): AsyncGetOperationResultRequest.AsObject;
  static serializeBinaryToWriter(message: AsyncGetOperationResultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AsyncGetOperationResultRequest;
  static deserializeBinaryFromReader(message: AsyncGetOperationResultRequest, reader: jspb.BinaryReader): AsyncGetOperationResultRequest;
}

export namespace AsyncGetOperationResultRequest {
  export type AsObject = {
    operationName: string,
  }
}

export class AsyncGetOperationResultResponse extends jspb.Message {
  getError(): string;
  setError(value: string): AsyncGetOperationResultResponse;

  getTextAnnotationList(): Array<ssn_type_text_annotation_pb.TextAnnotation>;
  setTextAnnotationList(value: Array<ssn_type_text_annotation_pb.TextAnnotation>): AsyncGetOperationResultResponse;
  clearTextAnnotationList(): AsyncGetOperationResultResponse;
  addTextAnnotation(value?: ssn_type_text_annotation_pb.TextAnnotation, index?: number): ssn_type_text_annotation_pb.TextAnnotation;

  getImageList(): Array<google_protobuf_wrappers_pb.BytesValue>;
  setImageList(value: Array<google_protobuf_wrappers_pb.BytesValue>): AsyncGetOperationResultResponse;
  clearImageList(): AsyncGetOperationResultResponse;
  addImage(value?: google_protobuf_wrappers_pb.BytesValue, index?: number): google_protobuf_wrappers_pb.BytesValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AsyncGetOperationResultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AsyncGetOperationResultResponse): AsyncGetOperationResultResponse.AsObject;
  static serializeBinaryToWriter(message: AsyncGetOperationResultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AsyncGetOperationResultResponse;
  static deserializeBinaryFromReader(message: AsyncGetOperationResultResponse, reader: jspb.BinaryReader): AsyncGetOperationResultResponse;
}

export namespace AsyncGetOperationResultResponse {
  export type AsObject = {
    error: string,
    textAnnotationList: Array<ssn_type_text_annotation_pb.TextAnnotation.AsObject>,
    imageList: Array<google_protobuf_wrappers_pb.BytesValue.AsObject>,
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

