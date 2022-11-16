import * as grpcWeb from 'grpc-web';

import * as ssn_triton_grpc_service_pb from '../../ssn/triton/grpc_service_pb';


export class GRPCInferenceServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  serverLive(
    request: ssn_triton_grpc_service_pb.ServerLiveRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ssn_triton_grpc_service_pb.ServerLiveResponse) => void
  ): grpcWeb.ClientReadableStream<ssn_triton_grpc_service_pb.ServerLiveResponse>;

  serverReady(
    request: ssn_triton_grpc_service_pb.ServerReadyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ssn_triton_grpc_service_pb.ServerReadyResponse) => void
  ): grpcWeb.ClientReadableStream<ssn_triton_grpc_service_pb.ServerReadyResponse>;

  modelReady(
    request: ssn_triton_grpc_service_pb.ModelReadyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ssn_triton_grpc_service_pb.ModelReadyResponse) => void
  ): grpcWeb.ClientReadableStream<ssn_triton_grpc_service_pb.ModelReadyResponse>;

  serverMetadata(
    request: ssn_triton_grpc_service_pb.ServerMetadataRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ssn_triton_grpc_service_pb.ServerMetadataResponse) => void
  ): grpcWeb.ClientReadableStream<ssn_triton_grpc_service_pb.ServerMetadataResponse>;

  modelMetadata(
    request: ssn_triton_grpc_service_pb.ModelMetadataRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ssn_triton_grpc_service_pb.ModelMetadataResponse) => void
  ): grpcWeb.ClientReadableStream<ssn_triton_grpc_service_pb.ModelMetadataResponse>;

  modelInfer(
    request: ssn_triton_grpc_service_pb.ModelInferRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ssn_triton_grpc_service_pb.ModelInferResponse) => void
  ): grpcWeb.ClientReadableStream<ssn_triton_grpc_service_pb.ModelInferResponse>;

  modelConfig(
    request: ssn_triton_grpc_service_pb.ModelConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ssn_triton_grpc_service_pb.ModelConfigResponse) => void
  ): grpcWeb.ClientReadableStream<ssn_triton_grpc_service_pb.ModelConfigResponse>;

  modelStatistics(
    request: ssn_triton_grpc_service_pb.ModelStatisticsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ssn_triton_grpc_service_pb.ModelStatisticsResponse) => void
  ): grpcWeb.ClientReadableStream<ssn_triton_grpc_service_pb.ModelStatisticsResponse>;

  repositoryIndex(
    request: ssn_triton_grpc_service_pb.RepositoryIndexRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ssn_triton_grpc_service_pb.RepositoryIndexResponse) => void
  ): grpcWeb.ClientReadableStream<ssn_triton_grpc_service_pb.RepositoryIndexResponse>;

  repositoryModelLoad(
    request: ssn_triton_grpc_service_pb.RepositoryModelLoadRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ssn_triton_grpc_service_pb.RepositoryModelLoadResponse) => void
  ): grpcWeb.ClientReadableStream<ssn_triton_grpc_service_pb.RepositoryModelLoadResponse>;

  repositoryModelUnload(
    request: ssn_triton_grpc_service_pb.RepositoryModelUnloadRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ssn_triton_grpc_service_pb.RepositoryModelUnloadResponse) => void
  ): grpcWeb.ClientReadableStream<ssn_triton_grpc_service_pb.RepositoryModelUnloadResponse>;

  systemSharedMemoryStatus(
    request: ssn_triton_grpc_service_pb.SystemSharedMemoryStatusRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ssn_triton_grpc_service_pb.SystemSharedMemoryStatusResponse) => void
  ): grpcWeb.ClientReadableStream<ssn_triton_grpc_service_pb.SystemSharedMemoryStatusResponse>;

  systemSharedMemoryRegister(
    request: ssn_triton_grpc_service_pb.SystemSharedMemoryRegisterRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ssn_triton_grpc_service_pb.SystemSharedMemoryRegisterResponse) => void
  ): grpcWeb.ClientReadableStream<ssn_triton_grpc_service_pb.SystemSharedMemoryRegisterResponse>;

  systemSharedMemoryUnregister(
    request: ssn_triton_grpc_service_pb.SystemSharedMemoryUnregisterRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ssn_triton_grpc_service_pb.SystemSharedMemoryUnregisterResponse) => void
  ): grpcWeb.ClientReadableStream<ssn_triton_grpc_service_pb.SystemSharedMemoryUnregisterResponse>;

  cudaSharedMemoryStatus(
    request: ssn_triton_grpc_service_pb.CudaSharedMemoryStatusRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ssn_triton_grpc_service_pb.CudaSharedMemoryStatusResponse) => void
  ): grpcWeb.ClientReadableStream<ssn_triton_grpc_service_pb.CudaSharedMemoryStatusResponse>;

  cudaSharedMemoryRegister(
    request: ssn_triton_grpc_service_pb.CudaSharedMemoryRegisterRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ssn_triton_grpc_service_pb.CudaSharedMemoryRegisterResponse) => void
  ): grpcWeb.ClientReadableStream<ssn_triton_grpc_service_pb.CudaSharedMemoryRegisterResponse>;

  cudaSharedMemoryUnregister(
    request: ssn_triton_grpc_service_pb.CudaSharedMemoryUnregisterRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ssn_triton_grpc_service_pb.CudaSharedMemoryUnregisterResponse) => void
  ): grpcWeb.ClientReadableStream<ssn_triton_grpc_service_pb.CudaSharedMemoryUnregisterResponse>;

  traceSetting(
    request: ssn_triton_grpc_service_pb.TraceSettingRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ssn_triton_grpc_service_pb.TraceSettingResponse) => void
  ): grpcWeb.ClientReadableStream<ssn_triton_grpc_service_pb.TraceSettingResponse>;

  logSettings(
    request: ssn_triton_grpc_service_pb.LogSettingsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ssn_triton_grpc_service_pb.LogSettingsResponse) => void
  ): grpcWeb.ClientReadableStream<ssn_triton_grpc_service_pb.LogSettingsResponse>;

}

export class GRPCInferenceServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  serverLive(
    request: ssn_triton_grpc_service_pb.ServerLiveRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ssn_triton_grpc_service_pb.ServerLiveResponse>;

  serverReady(
    request: ssn_triton_grpc_service_pb.ServerReadyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ssn_triton_grpc_service_pb.ServerReadyResponse>;

  modelReady(
    request: ssn_triton_grpc_service_pb.ModelReadyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ssn_triton_grpc_service_pb.ModelReadyResponse>;

  serverMetadata(
    request: ssn_triton_grpc_service_pb.ServerMetadataRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ssn_triton_grpc_service_pb.ServerMetadataResponse>;

  modelMetadata(
    request: ssn_triton_grpc_service_pb.ModelMetadataRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ssn_triton_grpc_service_pb.ModelMetadataResponse>;

  modelInfer(
    request: ssn_triton_grpc_service_pb.ModelInferRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ssn_triton_grpc_service_pb.ModelInferResponse>;

  modelConfig(
    request: ssn_triton_grpc_service_pb.ModelConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ssn_triton_grpc_service_pb.ModelConfigResponse>;

  modelStatistics(
    request: ssn_triton_grpc_service_pb.ModelStatisticsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ssn_triton_grpc_service_pb.ModelStatisticsResponse>;

  repositoryIndex(
    request: ssn_triton_grpc_service_pb.RepositoryIndexRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ssn_triton_grpc_service_pb.RepositoryIndexResponse>;

  repositoryModelLoad(
    request: ssn_triton_grpc_service_pb.RepositoryModelLoadRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ssn_triton_grpc_service_pb.RepositoryModelLoadResponse>;

  repositoryModelUnload(
    request: ssn_triton_grpc_service_pb.RepositoryModelUnloadRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ssn_triton_grpc_service_pb.RepositoryModelUnloadResponse>;

  systemSharedMemoryStatus(
    request: ssn_triton_grpc_service_pb.SystemSharedMemoryStatusRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ssn_triton_grpc_service_pb.SystemSharedMemoryStatusResponse>;

  systemSharedMemoryRegister(
    request: ssn_triton_grpc_service_pb.SystemSharedMemoryRegisterRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ssn_triton_grpc_service_pb.SystemSharedMemoryRegisterResponse>;

  systemSharedMemoryUnregister(
    request: ssn_triton_grpc_service_pb.SystemSharedMemoryUnregisterRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ssn_triton_grpc_service_pb.SystemSharedMemoryUnregisterResponse>;

  cudaSharedMemoryStatus(
    request: ssn_triton_grpc_service_pb.CudaSharedMemoryStatusRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ssn_triton_grpc_service_pb.CudaSharedMemoryStatusResponse>;

  cudaSharedMemoryRegister(
    request: ssn_triton_grpc_service_pb.CudaSharedMemoryRegisterRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ssn_triton_grpc_service_pb.CudaSharedMemoryRegisterResponse>;

  cudaSharedMemoryUnregister(
    request: ssn_triton_grpc_service_pb.CudaSharedMemoryUnregisterRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ssn_triton_grpc_service_pb.CudaSharedMemoryUnregisterResponse>;

  traceSetting(
    request: ssn_triton_grpc_service_pb.TraceSettingRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ssn_triton_grpc_service_pb.TraceSettingResponse>;

  logSettings(
    request: ssn_triton_grpc_service_pb.LogSettingsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ssn_triton_grpc_service_pb.LogSettingsResponse>;

}

