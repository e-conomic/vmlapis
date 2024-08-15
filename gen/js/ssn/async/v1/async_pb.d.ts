import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb';
import * as ssn_annotator_v1_annotator_pb from '../../../ssn/annotator/v1/annotator_pb';
import * as ssn_type_candidate_pb from '../../../ssn/type/candidate_pb';
import * as ssn_type_text_annotation_pb from '../../../ssn/type/text_annotation_pb';
import * as validate_validate_pb from '../../../validate/validate_pb';


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

  getCustomId(): string;
  setCustomId(value: string): CreateTransactionResponse;

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
    customId: string,
  }
}

export class GetTransactionResultsRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetTransactionResultsRequest;

  getCustomId(): string;
  setCustomId(value: string): GetTransactionResultsRequest;

  getMinConfidence(): ssn_type_candidate_pb.Confidence.Level;
  setMinConfidence(value: ssn_type_candidate_pb.Confidence.Level): GetTransactionResultsRequest;

  getMaxResults(): number;
  setMaxResults(value: number): GetTransactionResultsRequest;

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
    customId: string,
    minConfidence: ssn_type_candidate_pb.Confidence.Level,
    maxResults: number,
  }
}

export class GetTransactionResultsResponse extends jspb.Message {
  getId(): string;
  setId(value: string): GetTransactionResultsResponse;

  getAnnotationsList(): Array<Annotation>;
  setAnnotationsList(value: Array<Annotation>): GetTransactionResultsResponse;
  clearAnnotationsList(): GetTransactionResultsResponse;
  addAnnotations(value?: Annotation, index?: number): Annotation;

  getErrorMessage(): string;
  setErrorMessage(value: string): GetTransactionResultsResponse;

  getCustomId(): string;
  setCustomId(value: string): GetTransactionResultsResponse;

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
    errorMessage: string,
    customId: string,
  }
}

export class Annotation extends jspb.Message {
  getFeature(): string;
  setFeature(value: string): Annotation;

  getCandidateList(): Array<ssn_type_candidate_pb.Candidate>;
  setCandidateList(value: Array<ssn_type_candidate_pb.Candidate>): Annotation;
  clearCandidateList(): Annotation;
  addCandidate(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;

  getPurchaseLineCandidateList(): Array<ssn_type_candidate_pb.PurchaseLineCandidate>;
  setPurchaseLineCandidateList(value: Array<ssn_type_candidate_pb.PurchaseLineCandidate>): Annotation;
  clearPurchaseLineCandidateList(): Annotation;
  addPurchaseLineCandidate(value?: ssn_type_candidate_pb.PurchaseLineCandidate, index?: number): ssn_type_candidate_pb.PurchaseLineCandidate;

  getAnswerCandidatesList(): Array<ssn_type_candidate_pb.AnswerCandidate>;
  setAnswerCandidatesList(value: Array<ssn_type_candidate_pb.AnswerCandidate>): Annotation;
  clearAnswerCandidatesList(): Annotation;
  addAnswerCandidates(value?: ssn_type_candidate_pb.AnswerCandidate, index?: number): ssn_type_candidate_pb.AnswerCandidate;

  getTextAnnotation(): ssn_type_text_annotation_pb.TextAnnotation | undefined;
  setTextAnnotation(value?: ssn_type_text_annotation_pb.TextAnnotation): Annotation;
  hasTextAnnotation(): boolean;
  clearTextAnnotation(): Annotation;

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
    candidateList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
    purchaseLineCandidateList: Array<ssn_type_candidate_pb.PurchaseLineCandidate.AsObject>,
    answerCandidatesList: Array<ssn_type_candidate_pb.AnswerCandidate.AsObject>,
    textAnnotation?: ssn_type_text_annotation_pb.TextAnnotation.AsObject,
  }
}

export class GetTransactionStatusRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetTransactionStatusRequest;

  getCustomId(): string;
  setCustomId(value: string): GetTransactionStatusRequest;

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
    customId: string,
  }
}

export class GetTransactionStatusResponse extends jspb.Message {
  getId(): string;
  setId(value: string): GetTransactionStatusResponse;

  getStatus(): string;
  setStatus(value: string): GetTransactionStatusResponse;

  getErrorMessage(): string;
  setErrorMessage(value: string): GetTransactionStatusResponse;

  getCustomId(): string;
  setCustomId(value: string): GetTransactionStatusResponse;

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
    customId: string,
  }
}

export class DeleteTransactionRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteTransactionRequest;

  getCustomId(): string;
  setCustomId(value: string): DeleteTransactionRequest;

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
    customId: string,
  }
}

export class DeleteTagRequest extends jspb.Message {
  getTagName(): string;
  setTagName(value: string): DeleteTagRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTagRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTagRequest): DeleteTagRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteTagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTagRequest;
  static deserializeBinaryFromReader(message: DeleteTagRequest, reader: jspb.BinaryReader): DeleteTagRequest;
}

export namespace DeleteTagRequest {
  export type AsObject = {
    tagName: string,
  }
}

