// package: asgt.dataservice.v1
// file: asgt/data/v1/bq_entries.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gen_bq_schema_bq_field_pb from "../../../gen_bq_schema/bq_field_pb";
import * as gen_bq_schema_bq_table_pb from "../../../gen_bq_schema/bq_table_pb";
import * as asgt_type_data_pb from "../../../asgt/type/data_pb";
import * as asgt_type_model_pb from "../../../asgt/type/model_pb";
import * as asgt_type_prediction_pb from "../../../asgt/type/prediction_pb";
import * as asgt_type_target_value_pb from "../../../asgt/type/target_value_pb";

export class Entry extends jspb.Message { 
    getId(): string;
    setId(value: string): Entry;
    getConsumer(): string;
    setConsumer(value: string): Entry;
    getDatasetName(): string;
    setDatasetName(value: string): Entry;
    getDatasetType(): string;
    setDatasetType(value: string): Entry;
    getDatasetId(): string;
    setDatasetId(value: string): Entry;
    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): Entry;
    addTags(value: string, index?: number): string;

    hasData(): boolean;
    clearData(): void;
    getData(): asgt_type_data_pb.Data | undefined;
    setData(value?: asgt_type_data_pb.Data): Entry;
    clearTargetValuesList(): void;
    getTargetValuesList(): Array<asgt_type_target_value_pb.TargetValue>;
    setTargetValuesList(value: Array<asgt_type_target_value_pb.TargetValue>): Entry;
    addTargetValues(value?: asgt_type_target_value_pb.TargetValue, index?: number): asgt_type_target_value_pb.TargetValue;

    hasModel(): boolean;
    clearModel(): void;
    getModel(): asgt_type_model_pb.Model | undefined;
    setModel(value?: asgt_type_model_pb.Model): Entry;
    clearPredictionList(): void;
    getPredictionList(): Array<asgt_type_prediction_pb.Prediction.Target>;
    setPredictionList(value: Array<asgt_type_prediction_pb.Prediction.Target>): Entry;
    addPrediction(value?: asgt_type_prediction_pb.Prediction.Target, index?: number): asgt_type_prediction_pb.Prediction.Target;
    getTimeAdded(): number;
    setTimeAdded(value: number): Entry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Entry.AsObject;
    static toObject(includeInstance: boolean, msg: Entry): Entry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Entry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Entry;
    static deserializeBinaryFromReader(message: Entry, reader: jspb.BinaryReader): Entry;
}

export namespace Entry {
    export type AsObject = {
        id: string,
        consumer: string,
        datasetName: string,
        datasetType: string,
        datasetId: string,
        tagsList: Array<string>,
        data?: asgt_type_data_pb.Data.AsObject,
        targetValuesList: Array<asgt_type_target_value_pb.TargetValue.AsObject>,
        model?: asgt_type_model_pb.Model.AsObject,
        predictionList: Array<asgt_type_prediction_pb.Prediction.Target.AsObject>,
        timeAdded: number,
    }
}
