// package: asgt.type
// file: asgt/type/sample.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as asgt_type_data_pb from "../../asgt/type/data_pb";
import * as asgt_type_target_value_pb from "../../asgt/type/target_value_pb";

export class Sample extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): asgt_type_data_pb.Data | undefined;
    setData(value?: asgt_type_data_pb.Data): Sample;

    clearTargetValuesList(): void;
    getTargetValuesList(): Array<asgt_type_target_value_pb.TargetValue>;
    setTargetValuesList(value: Array<asgt_type_target_value_pb.TargetValue>): Sample;
    addTargetValues(value?: asgt_type_target_value_pb.TargetValue, index?: number): asgt_type_target_value_pb.TargetValue;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Sample.AsObject;
    static toObject(includeInstance: boolean, msg: Sample): Sample.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Sample, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Sample;
    static deserializeBinaryFromReader(message: Sample, reader: jspb.BinaryReader): Sample;
}

export namespace Sample {
    export type AsObject = {
        data?: asgt_type_data_pb.Data.AsObject,
        targetValuesList: Array<asgt_type_target_value_pb.TargetValue.AsObject>,
    }
}
