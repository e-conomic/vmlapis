import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../google/api/annotations_pb';
import * as google_api_http_pb from '../google/api/http_pb';
import * as ssn_type_candidate_pb from '../ssn/type/candidate_pb';


export class ScanDocumentRequest extends jspb.Message {
  getDocument(): Document | undefined;
  setDocument(value?: Document): ScanDocumentRequest;
  hasDocument(): boolean;
  clearDocument(): ScanDocumentRequest;

  getFeaturesList(): Array<Feature>;
  setFeaturesList(value: Array<Feature>): ScanDocumentRequest;
  clearFeaturesList(): ScanDocumentRequest;
  addFeatures(value?: Feature, index?: number): Feature;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): ScanDocumentRequest;
  clearTagsList(): ScanDocumentRequest;
  addTags(value: string, index?: number): ScanDocumentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScanDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ScanDocumentRequest): ScanDocumentRequest.AsObject;
  static serializeBinaryToWriter(message: ScanDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScanDocumentRequest;
  static deserializeBinaryFromReader(message: ScanDocumentRequest, reader: jspb.BinaryReader): ScanDocumentRequest;
}

export namespace ScanDocumentRequest {
  export type AsObject = {
    document?: Document.AsObject,
    featuresList: Array<Feature.AsObject>,
    tagsList: Array<string>,
  }
}

export class ScanDocumentResponse extends jspb.Message {
  getOrderDateList(): Array<ssn_type_candidate_pb.Candidate>;
  setOrderDateList(value: Array<ssn_type_candidate_pb.Candidate>): ScanDocumentResponse;
  clearOrderDateList(): ScanDocumentResponse;
  addOrderDate(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScanDocumentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ScanDocumentResponse): ScanDocumentResponse.AsObject;
  static serializeBinaryToWriter(message: ScanDocumentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScanDocumentResponse;
  static deserializeBinaryFromReader(message: ScanDocumentResponse, reader: jspb.BinaryReader): ScanDocumentResponse;
}

export namespace ScanDocumentResponse {
  export type AsObject = {
    orderDateList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
  }
}

export class Feature extends jspb.Message {
  getType(): Feature.Type;
  setType(value: Feature.Type): Feature;

  getMaxResults(): number;
  setMaxResults(value: number): Feature;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Feature.AsObject;
  static toObject(includeInstance: boolean, msg: Feature): Feature.AsObject;
  static serializeBinaryToWriter(message: Feature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Feature;
  static deserializeBinaryFromReader(message: Feature, reader: jspb.BinaryReader): Feature;
}

export namespace Feature {
  export type AsObject = {
    type: Feature.Type,
    maxResults: number,
  }

  export enum Type { 
    FIRST_NAME = 0,
    LAST_NAME = 1,
    DATE_OF_BIRTH = 2,
    PHONE = 3,
    EMAIL = 4,
    COUNTRY = 5,
    NATIONALITY = 6,
    POSTAL_CODE = 7,
    POSTAL_AREA = 8,
    MUNICIPALITY = 9,
    COUNTY = 10,
    ADDRESS = 11,
    EMPLOYER_NAME = 12,
    POSITION_TITLE = 13,
    DATE = 14,
    INSTITUTE_NAME = 15,
    INSTITUTE_TYPE = 16,
    AREA_OF_EDUCATION = 17,
    DEGREE = 18,
    AVERAGE_GRADE = 19,
    NAME = 20,
    LEVEL = 21,
  }
}

export class Document extends jspb.Message {
  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): Document;

  getSource(): DocumentSource | undefined;
  setSource(value?: DocumentSource): Document;
  hasSource(): boolean;
  clearSource(): Document;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Document.AsObject;
  static toObject(includeInstance: boolean, msg: Document): Document.AsObject;
  static serializeBinaryToWriter(message: Document, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Document;
  static deserializeBinaryFromReader(message: Document, reader: jspb.BinaryReader): Document;
}

export namespace Document {
  export type AsObject = {
    content: Uint8Array | string,
    source?: DocumentSource.AsObject,
  }
}

export class DocumentSource extends jspb.Message {
  getHttpUri(): string;
  setHttpUri(value: string): DocumentSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentSource.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentSource): DocumentSource.AsObject;
  static serializeBinaryToWriter(message: DocumentSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentSource;
  static deserializeBinaryFromReader(message: DocumentSource, reader: jspb.BinaryReader): DocumentSource;
}

export namespace DocumentSource {
  export type AsObject = {
    httpUri: string,
  }
}

