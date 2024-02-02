import * as grpcWeb from 'grpc-web';

import * as asgt_data_v1_data_service_pb from '../../../asgt/data/v1/data_service_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as ssn_dataservice_v1_dataservice_pb from '../../../ssn/dataservice/v1/dataservice_pb';


export class DataServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createDataset(
    request: asgt_data_v1_data_service_pb.CreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  appendData(
    request: asgt_data_v1_data_service_pb.AppendDataRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteData(
    request: asgt_data_v1_data_service_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  getInfo(
    request: asgt_data_v1_data_service_pb.GetInfoRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: asgt_data_v1_data_service_pb.GetInfoResponse) => void
  ): grpcWeb.ClientReadableStream<asgt_data_v1_data_service_pb.GetInfoResponse>;

  updateDataset(
    request: asgt_data_v1_data_service_pb.UpdateDatasetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  registerQueryStats(
    request: asgt_data_v1_data_service_pb.RegisterQueryStatsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  callsPerMonthMetric(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ssn_dataservice_v1_dataservice_pb.CallsPerMonthResponse) => void
  ): grpcWeb.ClientReadableStream<ssn_dataservice_v1_dataservice_pb.CallsPerMonthResponse>;

  calculateMetrics(
    request: asgt_data_v1_data_service_pb.CalculateMetricsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: asgt_data_v1_data_service_pb.CalculateMetricsResponse) => void
  ): grpcWeb.ClientReadableStream<asgt_data_v1_data_service_pb.CalculateMetricsResponse>;

  trainDataset(
    request: asgt_data_v1_data_service_pb.TrainDatasetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class DataServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createDataset(
    request: asgt_data_v1_data_service_pb.CreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  appendData(
    request: asgt_data_v1_data_service_pb.AppendDataRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  deleteData(
    request: asgt_data_v1_data_service_pb.DeleteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  getInfo(
    request: asgt_data_v1_data_service_pb.GetInfoRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<asgt_data_v1_data_service_pb.GetInfoResponse>;

  updateDataset(
    request: asgt_data_v1_data_service_pb.UpdateDatasetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  registerQueryStats(
    request: asgt_data_v1_data_service_pb.RegisterQueryStatsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  callsPerMonthMetric(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<ssn_dataservice_v1_dataservice_pb.CallsPerMonthResponse>;

  calculateMetrics(
    request: asgt_data_v1_data_service_pb.CalculateMetricsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<asgt_data_v1_data_service_pb.CalculateMetricsResponse>;

  trainDataset(
    request: asgt_data_v1_data_service_pb.TrainDatasetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

