import * as grpcWeb from 'grpc-web';

import * as asgt_v2_suggester_service_pb from '../../asgt/v2/suggester_service_pb';


export class SuggesterServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  suggest(
    request: asgt_v2_suggester_service_pb.SuggestRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: asgt_v2_suggester_service_pb.SuggestResponse) => void
  ): grpcWeb.ClientReadableStream<asgt_v2_suggester_service_pb.SuggestResponse>;

  batchSuggest(
    request: asgt_v2_suggester_service_pb.BatchSuggestRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: asgt_v2_suggester_service_pb.BatchSuggestResponse) => void
  ): grpcWeb.ClientReadableStream<asgt_v2_suggester_service_pb.BatchSuggestResponse>;

  modelBatchSuggest(
    request: asgt_v2_suggester_service_pb.BatchSuggestRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: asgt_v2_suggester_service_pb.BatchSuggestResponse) => void
  ): grpcWeb.ClientReadableStream<asgt_v2_suggester_service_pb.BatchSuggestResponse>;

}

export class SuggesterServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  suggest(
    request: asgt_v2_suggester_service_pb.SuggestRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<asgt_v2_suggester_service_pb.SuggestResponse>;

  batchSuggest(
    request: asgt_v2_suggester_service_pb.BatchSuggestRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<asgt_v2_suggester_service_pb.BatchSuggestResponse>;

  modelBatchSuggest(
    request: asgt_v2_suggester_service_pb.BatchSuggestRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<asgt_v2_suggester_service_pb.BatchSuggestResponse>;

}

