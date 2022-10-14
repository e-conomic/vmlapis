import * as grpcWeb from 'grpc-web';

import * as asgt_modelregistry_v1_model_registry_pb from '../../../asgt/modelregistry/v1/model_registry_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class ModelRegistryClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  registerModel(
    request: asgt_modelregistry_v1_model_registry_pb.RegisterModelRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  getCurrentModel(
    request: asgt_modelregistry_v1_model_registry_pb.GetCurrentModelRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: asgt_modelregistry_v1_model_registry_pb.GetCurrentModelResponse) => void
  ): grpcWeb.ClientReadableStream<asgt_modelregistry_v1_model_registry_pb.GetCurrentModelResponse>;

}

export class ModelRegistryPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  registerModel(
    request: asgt_modelregistry_v1_model_registry_pb.RegisterModelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  getCurrentModel(
    request: asgt_modelregistry_v1_model_registry_pb.GetCurrentModelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<asgt_modelregistry_v1_model_registry_pb.GetCurrentModelResponse>;

}

