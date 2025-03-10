import * as jspb from 'google-protobuf'

import * as ssn_type_candidate_pb from '../../../ssn/type/candidate_pb'; // proto import: "ssn/type/candidate.proto"
import * as ssn_type_text_annotation_pb from '../../../ssn/type/text_annotation_pb'; // proto import: "ssn/type/text_annotation.proto"


export class LinesRequest extends jspb.Message {
  getTextAnnotation(): ssn_type_text_annotation_pb.TextAnnotation | undefined;
  setTextAnnotation(value?: ssn_type_text_annotation_pb.TextAnnotation): LinesRequest;
  hasTextAnnotation(): boolean;
  clearTextAnnotation(): LinesRequest;

  getImage(): Uint8Array | string;
  getImage_asU8(): Uint8Array;
  getImage_asB64(): string;
  setImage(value: Uint8Array | string): LinesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LinesRequest): LinesRequest.AsObject;
  static serializeBinaryToWriter(message: LinesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinesRequest;
  static deserializeBinaryFromReader(message: LinesRequest, reader: jspb.BinaryReader): LinesRequest;
}

export namespace LinesRequest {
  export type AsObject = {
    textAnnotation?: ssn_type_text_annotation_pb.TextAnnotation.AsObject,
    image: Uint8Array | string,
  }
}

export class LinesResponse extends jspb.Message {
  getPurchaseLinesList(): Array<ssn_type_candidate_pb.PurchaseLineCandidate>;
  setPurchaseLinesList(value: Array<ssn_type_candidate_pb.PurchaseLineCandidate>): LinesResponse;
  clearPurchaseLinesList(): LinesResponse;
  addPurchaseLines(value?: ssn_type_candidate_pb.PurchaseLineCandidate, index?: number): ssn_type_candidate_pb.PurchaseLineCandidate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LinesResponse): LinesResponse.AsObject;
  static serializeBinaryToWriter(message: LinesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinesResponse;
  static deserializeBinaryFromReader(message: LinesResponse, reader: jspb.BinaryReader): LinesResponse;
}

export namespace LinesResponse {
  export type AsObject = {
    purchaseLinesList: Array<ssn_type_candidate_pb.PurchaseLineCandidate.AsObject>,
  }
}

