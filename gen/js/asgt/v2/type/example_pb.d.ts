// package: asgt.v2.type
// file: asgt/v2/type/example.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as validate_validate_pb from "../../../validate/validate_pb";
import * as asgt_v2_type_data_pb from "../../../asgt/v2/type/data_pb";
import * as asgt_v2_type_target_value_pb from "../../../asgt/v2/type/target_value_pb";

export class Example extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): asgt_v2_type_data_pb.Data | undefined;
    setData(value?: asgt_v2_type_data_pb.Data): Example;

    clearTargetValuesList(): void;
    getTargetValuesList(): Array<asgt_v2_type_target_value_pb.TargetValue>;
    setTargetValuesList(value: Array<asgt_v2_type_target_value_pb.TargetValue>): Example;
    addTargetValues(value?: asgt_v2_type_target_value_pb.TargetValue, index?: number): asgt_v2_type_target_value_pb.TargetValue;

    getId(): string;
    setId(value: string): Example;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Example.AsObject;
    static toObject(includeInstance: boolean, msg: Example): Example.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Example, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Example;
    static deserializeBinaryFromReader(message: Example, reader: jspb.BinaryReader): Example;
}

export namespace Example {
    export type AsObject = {
        data?: asgt_v2_type_data_pb.Data.AsObject,
        targetValuesList: Array<asgt_v2_type_target_value_pb.TargetValue.AsObject>,
        id: string,
    }
}
