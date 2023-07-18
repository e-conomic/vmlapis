import * as grpcWeb from 'grpc-web';

import * as asgt_type_dataset_pb from '../../asgt/type/dataset_pb';
import * as asgt_v2_dataset_service_pb from '../../asgt/v2/dataset_service_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class DatasetServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getDataset(
    request: asgt_v2_dataset_service_pb.GetDatasetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: asgt_type_dataset_pb.Dataset) => void
  ): grpcWeb.ClientReadableStream<asgt_type_dataset_pb.Dataset>;

  createDataset(
    request: asgt_v2_dataset_service_pb.CreateDatasetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  createOrUpdateDataset(
    request: asgt_v2_dataset_service_pb.CreateOrUpdateDatasetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteDataset(
    request: asgt_v2_dataset_service_pb.DeleteDatasetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: asgt_type_dataset_pb.Dataset) => void
  ): grpcWeb.ClientReadableStream<asgt_type_dataset_pb.Dataset>;

  deleteTag(
    request: asgt_v2_dataset_service_pb.DeleteTagRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  createExample(
    request: asgt_v2_dataset_service_pb.CreateExampleRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  createOrUpdateExample(
    request: asgt_v2_dataset_service_pb.CreateOrUpdateExampleRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  batchCreateExample(
    request: asgt_v2_dataset_service_pb.BatchCreateExampleRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  truncateDataset(
    request: asgt_v2_dataset_service_pb.TruncateDatasetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  getDatasetTrainings(
    request: asgt_v2_dataset_service_pb.GetDatasetTrainingsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: asgt_v2_dataset_service_pb.TrainingsResponse) => void
  ): grpcWeb.ClientReadableStream<asgt_v2_dataset_service_pb.TrainingsResponse>;

  getTrainings(
    request: asgt_v2_dataset_service_pb.GetTrainingsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: asgt_v2_dataset_service_pb.TrainingsResponse) => void
  ): grpcWeb.ClientReadableStream<asgt_v2_dataset_service_pb.TrainingsResponse>;

}

export class DatasetServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getDataset(
    request: asgt_v2_dataset_service_pb.GetDatasetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<asgt_type_dataset_pb.Dataset>;

  createDataset(
    request: asgt_v2_dataset_service_pb.CreateDatasetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  createOrUpdateDataset(
    request: asgt_v2_dataset_service_pb.CreateOrUpdateDatasetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  deleteDataset(
    request: asgt_v2_dataset_service_pb.DeleteDatasetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<asgt_type_dataset_pb.Dataset>;

  deleteTag(
    request: asgt_v2_dataset_service_pb.DeleteTagRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  createExample(
    request: asgt_v2_dataset_service_pb.CreateExampleRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  createOrUpdateExample(
    request: asgt_v2_dataset_service_pb.CreateOrUpdateExampleRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  batchCreateExample(
    request: asgt_v2_dataset_service_pb.BatchCreateExampleRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  truncateDataset(
    request: asgt_v2_dataset_service_pb.TruncateDatasetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  getDatasetTrainings(
    request: asgt_v2_dataset_service_pb.GetDatasetTrainingsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<asgt_v2_dataset_service_pb.TrainingsResponse>;

  getTrainings(
    request: asgt_v2_dataset_service_pb.GetTrainingsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<asgt_v2_dataset_service_pb.TrainingsResponse>;

}

