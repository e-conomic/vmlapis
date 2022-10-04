import * as grpcWeb from 'grpc-web';

import * as asgt_jester_v1_jester_pb from '../../../asgt/jester/v1/jester_pb';


export class JesterClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  suggest(
    request: asgt_jester_v1_jester_pb.SuggestionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: asgt_jester_v1_jester_pb.SuggestionResponse) => void
  ): grpcWeb.ClientReadableStream<asgt_jester_v1_jester_pb.SuggestionResponse>;

}

export class JesterPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  suggest(
    request: asgt_jester_v1_jester_pb.SuggestionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<asgt_jester_v1_jester_pb.SuggestionResponse>;

}

