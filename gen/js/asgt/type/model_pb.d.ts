import * as jspb from 'google-protobuf'

import * as asgt_type_model_file_pb from '../../asgt/type/model_file_pb';
import * as asgt_type_target_metrics_pb from '../../asgt/type/target_metrics_pb';
import * as gen_bq_schema_bq_field_pb from '../../gen_bq_schema/bq_field_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Model extends jspb.Message {
  getVersion(): number;
  setVersion(value: number): Model;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Model;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Model;

  getDatasetSize(): number;
  setDatasetSize(value: number): Model;

  getTrainingSize(): number;
  setTrainingSize(value: number): Model;

  getConfidenceScoresList(): Array<asgt_type_target_metrics_pb.TargetMetrics>;
  setConfidenceScoresList(value: Array<asgt_type_target_metrics_pb.TargetMetrics>): Model;
  clearConfidenceScoresList(): Model;
  addConfidenceScores(value?: asgt_type_target_metrics_pb.TargetMetrics, index?: number): asgt_type_target_metrics_pb.TargetMetrics;

  getInputType(): Model.InputType;
  setInputType(value: Model.InputType): Model;

  getDatasetType(): string;
  setDatasetType(value: string): Model;

  getModelFilesList(): Array<asgt_type_model_file_pb.ModelFile>;
  setModelFilesList(value: Array<asgt_type_model_file_pb.ModelFile>): Model;
  clearModelFilesList(): Model;
  addModelFiles(value?: asgt_type_model_file_pb.ModelFile, index?: number): asgt_type_model_file_pb.ModelFile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Model.AsObject;
  static toObject(includeInstance: boolean, msg: Model): Model.AsObject;
  static serializeBinaryToWriter(message: Model, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Model;
  static deserializeBinaryFromReader(message: Model, reader: jspb.BinaryReader): Model;
}

export namespace Model {
  export type AsObject = {
    version: number,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    datasetSize: number,
    trainingSize: number,
    confidenceScoresList: Array<asgt_type_target_metrics_pb.TargetMetrics.AsObject>,
    inputType: Model.InputType,
    datasetType: string,
    modelFilesList: Array<asgt_type_model_file_pb.ModelFile.AsObject>,
  }

  export enum InputType { 
    FEATURE_TENSORS = 0,
    EXAMPLE_TENSOR = 1,
  }
}

