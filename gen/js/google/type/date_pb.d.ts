import * as jspb from 'google-protobuf'



export class Date extends jspb.Message {
  getYear(): number;
  setYear(value: number): Date;

  getMonth(): number;
  setMonth(value: number): Date;

  getDay(): number;
  setDay(value: number): Date;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Date.AsObject;
  static toObject(includeInstance: boolean, msg: Date): Date.AsObject;
  static serializeBinaryToWriter(message: Date, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Date;
  static deserializeBinaryFromReader(message: Date, reader: jspb.BinaryReader): Date;
}

export namespace Date {
  export type AsObject = {
    year: number,
    month: number,
    day: number,
  }
}

