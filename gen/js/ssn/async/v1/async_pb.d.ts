import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb';
import * as ssn_annotator_v1_annotator_pb from '../../../ssn/annotator/v1/annotator_pb';
import * as ssn_type_candidate_pb from '../../../ssn/type/candidate_pb';


export class CreateTransactionRequest extends jspb.Message {
  getDocument(): ssn_annotator_v1_annotator_pb.Document | undefined;
  setDocument(value?: ssn_annotator_v1_annotator_pb.Document): CreateTransactionRequest;
  hasDocument(): boolean;
  clearDocument(): CreateTransactionRequest;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): CreateTransactionRequest;
  clearTagsList(): CreateTransactionRequest;
  addTags(value: string, index?: number): CreateTransactionRequest;

  getFeaturesList(): Array<string>;
  setFeaturesList(value: Array<string>): CreateTransactionRequest;
  clearFeaturesList(): CreateTransactionRequest;
  addFeatures(value: string, index?: number): CreateTransactionRequest;

  getCustomId(): string;
  setCustomId(value: string): CreateTransactionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTransactionRequest): CreateTransactionRequest.AsObject;
  static serializeBinaryToWriter(message: CreateTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTransactionRequest;
  static deserializeBinaryFromReader(message: CreateTransactionRequest, reader: jspb.BinaryReader): CreateTransactionRequest;
}

export namespace CreateTransactionRequest {
  export type AsObject = {
    document?: ssn_annotator_v1_annotator_pb.Document.AsObject,
    tagsList: Array<string>,
    featuresList: Array<string>,
    customId: string,
  }
}

export class CreateTransactionResponse extends jspb.Message {
  getId(): string;
  setId(value: string): CreateTransactionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTransactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTransactionResponse): CreateTransactionResponse.AsObject;
  static serializeBinaryToWriter(message: CreateTransactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTransactionResponse;
  static deserializeBinaryFromReader(message: CreateTransactionResponse, reader: jspb.BinaryReader): CreateTransactionResponse;
}

export namespace CreateTransactionResponse {
  export type AsObject = {
    id: string,
  }
}

export class GetTransactionResultsRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetTransactionResultsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionResultsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionResultsRequest): GetTransactionResultsRequest.AsObject;
  static serializeBinaryToWriter(message: GetTransactionResultsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionResultsRequest;
  static deserializeBinaryFromReader(message: GetTransactionResultsRequest, reader: jspb.BinaryReader): GetTransactionResultsRequest;
}

export namespace GetTransactionResultsRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetTransactionResultsResponse extends jspb.Message {
  getId(): string;
  setId(value: string): GetTransactionResultsResponse;

  getAnnotationsList(): Array<Annotation>;
  setAnnotationsList(value: Array<Annotation>): GetTransactionResultsResponse;
  clearAnnotationsList(): GetTransactionResultsResponse;
  addAnnotations(value?: Annotation, index?: number): Annotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionResultsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionResultsResponse): GetTransactionResultsResponse.AsObject;
  static serializeBinaryToWriter(message: GetTransactionResultsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionResultsResponse;
  static deserializeBinaryFromReader(message: GetTransactionResultsResponse, reader: jspb.BinaryReader): GetTransactionResultsResponse;
}

export namespace GetTransactionResultsResponse {
  export type AsObject = {
    id: string,
    annotationsList: Array<Annotation.AsObject>,
  }
}

export class Candidate extends jspb.Message {
  getCandidateList(): Array<ssn_type_candidate_pb.Candidate>;
  setCandidateList(value: Array<ssn_type_candidate_pb.Candidate>): Candidate;
  clearCandidateList(): Candidate;
  addCandidate(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Candidate.AsObject;
  static toObject(includeInstance: boolean, msg: Candidate): Candidate.AsObject;
  static serializeBinaryToWriter(message: Candidate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Candidate;
  static deserializeBinaryFromReader(message: Candidate, reader: jspb.BinaryReader): Candidate;
}

export namespace Candidate {
  export type AsObject = {
    candidateList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
  }
}

export class PurchaseLineCandidate extends jspb.Message {
  getPurchaseLineCandidateList(): Array<ssn_type_candidate_pb.PurchaseLineCandidate>;
  setPurchaseLineCandidateList(value: Array<ssn_type_candidate_pb.PurchaseLineCandidate>): PurchaseLineCandidate;
  clearPurchaseLineCandidateList(): PurchaseLineCandidate;
  addPurchaseLineCandidate(value?: ssn_type_candidate_pb.PurchaseLineCandidate, index?: number): ssn_type_candidate_pb.PurchaseLineCandidate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PurchaseLineCandidate.AsObject;
  static toObject(includeInstance: boolean, msg: PurchaseLineCandidate): PurchaseLineCandidate.AsObject;
  static serializeBinaryToWriter(message: PurchaseLineCandidate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PurchaseLineCandidate;
  static deserializeBinaryFromReader(message: PurchaseLineCandidate, reader: jspb.BinaryReader): PurchaseLineCandidate;
}

export namespace PurchaseLineCandidate {
  export type AsObject = {
    purchaseLineCandidateList: Array<ssn_type_candidate_pb.PurchaseLineCandidate.AsObject>,
  }
}

export class Annotation extends jspb.Message {
  getFeature(): string;
  setFeature(value: string): Annotation;

  getCandidate(): Candidate | undefined;
  setCandidate(value?: Candidate): Annotation;
  hasCandidate(): boolean;
  clearCandidate(): Annotation;

  getPurchaseLineCandidate(): PurchaseLineCandidate | undefined;
  setPurchaseLineCandidate(value?: PurchaseLineCandidate): Annotation;
  hasPurchaseLineCandidate(): boolean;
  clearPurchaseLineCandidate(): Annotation;

  getCandidatesCase(): Annotation.CandidatesCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Annotation.AsObject;
  static toObject(includeInstance: boolean, msg: Annotation): Annotation.AsObject;
  static serializeBinaryToWriter(message: Annotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Annotation;
  static deserializeBinaryFromReader(message: Annotation, reader: jspb.BinaryReader): Annotation;
}

export namespace Annotation {
  export type AsObject = {
    feature: string,
    candidate?: Candidate.AsObject,
    purchaseLineCandidate?: PurchaseLineCandidate.AsObject,
  }

  export enum CandidatesCase { 
    CANDIDATES_NOT_SET = 0,
    CANDIDATE = 2,
    PURCHASE_LINE_CANDIDATE = 3,
  }
}

export class GetTransactionStatusRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetTransactionStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionStatusRequest): GetTransactionStatusRequest.AsObject;
  static serializeBinaryToWriter(message: GetTransactionStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionStatusRequest;
  static deserializeBinaryFromReader(message: GetTransactionStatusRequest, reader: jspb.BinaryReader): GetTransactionStatusRequest;
}

export namespace GetTransactionStatusRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetTransactionStatusResponse extends jspb.Message {
  getId(): string;
  setId(value: string): GetTransactionStatusResponse;

  getStatus(): string;
  setStatus(value: string): GetTransactionStatusResponse;

  getErrorMessage(): string;
  setErrorMessage(value: string): GetTransactionStatusResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionStatusResponse): GetTransactionStatusResponse.AsObject;
  static serializeBinaryToWriter(message: GetTransactionStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionStatusResponse;
  static deserializeBinaryFromReader(message: GetTransactionStatusResponse, reader: jspb.BinaryReader): GetTransactionStatusResponse;
}

export namespace GetTransactionStatusResponse {
  export type AsObject = {
    id: string,
    status: string,
    errorMessage: string,
  }
}

export class DeleteTransactionRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteTransactionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTransactionRequest): DeleteTransactionRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTransactionRequest;
  static deserializeBinaryFromReader(message: DeleteTransactionRequest, reader: jspb.BinaryReader): DeleteTransactionRequest;
}

export namespace DeleteTransactionRequest {
  export type AsObject = {
    id: string,
  }
}

