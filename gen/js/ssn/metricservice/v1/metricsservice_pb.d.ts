import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as ssn_dataservice_v1_dataservice_pb from '../../../ssn/dataservice/v1/dataservice_pb';


export class CalculateMetricsRequest extends jspb.Message {
  getPredictionValues(): ssn_dataservice_v1_dataservice_pb.PredictionValues | undefined;
  setPredictionValues(value?: ssn_dataservice_v1_dataservice_pb.PredictionValues): CalculateMetricsRequest;
  hasPredictionValues(): boolean;
  clearPredictionValues(): CalculateMetricsRequest;

  getTrueValues(): ssn_dataservice_v1_dataservice_pb.TrueValues | undefined;
  setTrueValues(value?: ssn_dataservice_v1_dataservice_pb.TrueValues): CalculateMetricsRequest;
  hasTrueValues(): boolean;
  clearTrueValues(): CalculateMetricsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalculateMetricsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CalculateMetricsRequest): CalculateMetricsRequest.AsObject;
  static serializeBinaryToWriter(message: CalculateMetricsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalculateMetricsRequest;
  static deserializeBinaryFromReader(message: CalculateMetricsRequest, reader: jspb.BinaryReader): CalculateMetricsRequest;
}

export namespace CalculateMetricsRequest {
  export type AsObject = {
    predictionValues?: ssn_dataservice_v1_dataservice_pb.PredictionValues.AsObject,
    trueValues?: ssn_dataservice_v1_dataservice_pb.TrueValues.AsObject,
  }
}

export class CalculateMetricsResponse extends jspb.Message {
  getDocumentSimilarity(): number;
  setDocumentSimilarity(value: number): CalculateMetricsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalculateMetricsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CalculateMetricsResponse): CalculateMetricsResponse.AsObject;
  static serializeBinaryToWriter(message: CalculateMetricsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalculateMetricsResponse;
  static deserializeBinaryFromReader(message: CalculateMetricsResponse, reader: jspb.BinaryReader): CalculateMetricsResponse;
}

export namespace CalculateMetricsResponse {
  export type AsObject = {
    documentSimilarity: number,
  }
}

