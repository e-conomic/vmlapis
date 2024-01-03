import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as ssn_type_geometry_pb from '../../ssn/type/geometry_pb';


export class Confidence extends jspb.Message {
  getLevel(): Confidence.Level;
  setLevel(value: Confidence.Level): Confidence;

  getValue(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setValue(value?: google_protobuf_wrappers_pb.FloatValue): Confidence;
  hasValue(): boolean;
  clearValue(): Confidence;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Confidence.AsObject;
  static toObject(includeInstance: boolean, msg: Confidence): Confidence.AsObject;
  static serializeBinaryToWriter(message: Confidence, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Confidence;
  static deserializeBinaryFromReader(message: Confidence, reader: jspb.BinaryReader): Confidence;
}

export namespace Confidence {
  export type AsObject = {
    level: Confidence.Level,
    value?: google_protobuf_wrappers_pb.FloatValue.AsObject,
  }

  export enum Level { 
    UNKNOWN = 0,
    VERY_LOW = 1,
    LOW = 2,
    MID = 3,
    HIGH = 4,
    VERY_HIGH = 5,
  }
}

export class Candidate extends jspb.Message {
  getValue(): string;
  setValue(value: string): Candidate;

  getText(): string;
  setText(value: string): Candidate;

  getConfidence(): Confidence | undefined;
  setConfidence(value?: Confidence): Candidate;
  hasConfidence(): boolean;
  clearConfidence(): Candidate;

  getBoundingBox(): ssn_type_geometry_pb.BoundingPoly | undefined;
  setBoundingBox(value?: ssn_type_geometry_pb.BoundingPoly): Candidate;
  hasBoundingBox(): boolean;
  clearBoundingBox(): Candidate;

  getType(): Candidate.Type;
  setType(value: Candidate.Type): Candidate;

  getPageRef(): number;
  setPageRef(value: number): Candidate;

  getModelMetadata(): ModelSpec | undefined;
  setModelMetadata(value?: ModelSpec): Candidate;
  hasModelMetadata(): boolean;
  clearModelMetadata(): Candidate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Candidate.AsObject;
  static toObject(includeInstance: boolean, msg: Candidate): Candidate.AsObject;
  static serializeBinaryToWriter(message: Candidate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Candidate;
  static deserializeBinaryFromReader(message: Candidate, reader: jspb.BinaryReader): Candidate;
}

export namespace Candidate {
  export type AsObject = {
    value: string,
    text: string,
    confidence?: Confidence.AsObject,
    boundingBox?: ssn_type_geometry_pb.BoundingPoly.AsObject,
    type: Candidate.Type,
    pageRef: number,
    modelMetadata?: ModelSpec.AsObject,
  }

  export enum Type { 
    UNKNOWN = 0,
    FIELD = 1,
    DOCUMENT = 2,
  }
}

export class ModelSpec extends jspb.Message {
  getModelName(): string;
  setModelName(value: string): ModelSpec;

  getModelVer(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setModelVer(value?: google_protobuf_wrappers_pb.Int64Value): ModelSpec;
  hasModelVer(): boolean;
  clearModelVer(): ModelSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ModelSpec): ModelSpec.AsObject;
  static serializeBinaryToWriter(message: ModelSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelSpec;
  static deserializeBinaryFromReader(message: ModelSpec, reader: jspb.BinaryReader): ModelSpec;
}

export namespace ModelSpec {
  export type AsObject = {
    modelName: string,
    modelVer?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class LineCandidate extends jspb.Message {
  getText(): string;
  setText(value: string): LineCandidate;

  getAmount(): number;
  setAmount(value: number): LineCandidate;

  getPageRef(): number;
  setPageRef(value: number): LineCandidate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LineCandidate.AsObject;
  static toObject(includeInstance: boolean, msg: LineCandidate): LineCandidate.AsObject;
  static serializeBinaryToWriter(message: LineCandidate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LineCandidate;
  static deserializeBinaryFromReader(message: LineCandidate, reader: jspb.BinaryReader): LineCandidate;
}

export namespace LineCandidate {
  export type AsObject = {
    text: string,
    amount: number,
    pageRef: number,
  }
}

export class PurchaseLineCandidate extends jspb.Message {
  getPageRef(): number;
  setPageRef(value: number): PurchaseLineCandidate;

  getCode(): string;
  setCode(value: string): PurchaseLineCandidate;

  getDescription(): string;
  setDescription(value: string): PurchaseLineCandidate;

  getQuantity(): string;
  setQuantity(value: string): PurchaseLineCandidate;

  getItemNumber(): string;
  setItemNumber(value: string): PurchaseLineCandidate;

  getUnit(): string;
  setUnit(value: string): PurchaseLineCandidate;

  getTotalDiscount(): string;
  setTotalDiscount(value: string): PurchaseLineCandidate;

  getPercentageDiscount(): string;
  setPercentageDiscount(value: string): PurchaseLineCandidate;

  getTotalInclVat(): string;
  setTotalInclVat(value: string): PurchaseLineCandidate;

  getTotalExclVat(): string;
  setTotalExclVat(value: string): PurchaseLineCandidate;

  getTotalVat(): string;
  setTotalVat(value: string): PurchaseLineCandidate;

  getPercentageVat(): string;
  setPercentageVat(value: string): PurchaseLineCandidate;

  getUnitPriceInclVat(): string;
  setUnitPriceInclVat(value: string): PurchaseLineCandidate;

  getUnitPriceExclVat(): string;
  setUnitPriceExclVat(value: string): PurchaseLineCandidate;

  getLineTotal(): string;
  setLineTotal(value: string): PurchaseLineCandidate;

  getLineUnitPrice(): string;
  setLineUnitPrice(value: string): PurchaseLineCandidate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PurchaseLineCandidate.AsObject;
  static toObject(includeInstance: boolean, msg: PurchaseLineCandidate): PurchaseLineCandidate.AsObject;
  static serializeBinaryToWriter(message: PurchaseLineCandidate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PurchaseLineCandidate;
  static deserializeBinaryFromReader(message: PurchaseLineCandidate, reader: jspb.BinaryReader): PurchaseLineCandidate;
}

export namespace PurchaseLineCandidate {
  export type AsObject = {
    pageRef: number,
    code: string,
    description: string,
    quantity: string,
    itemNumber: string,
    unit: string,
    totalDiscount: string,
    percentageDiscount: string,
    totalInclVat: string,
    totalExclVat: string,
    totalVat: string,
    percentageVat: string,
    unitPriceInclVat: string,
    unitPriceExclVat: string,
    lineTotal: string,
    lineUnitPrice: string,
  }
}

