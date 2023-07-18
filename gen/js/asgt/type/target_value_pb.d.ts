import * as jspb from 'google-protobuf'



export class TargetValue extends jspb.Message {
  getName(): string;
  setName(value: string): TargetValue;

  getValue(): string;
  setValue(value: string): TargetValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetValue.AsObject;
  static toObject(includeInstance: boolean, msg: TargetValue): TargetValue.AsObject;
  static serializeBinaryToWriter(message: TargetValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetValue;
  static deserializeBinaryFromReader(message: TargetValue, reader: jspb.BinaryReader): TargetValue;
}

export namespace TargetValue {
  export type AsObject = {
    name: string,
    value: string,
  }
}

