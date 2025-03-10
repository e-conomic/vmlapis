import * as grpcWeb from 'grpc-web';

import * as ssn_linesservice_v1_linesservice_pb from '../../../ssn/linesservice/v1/linesservice_pb'; // proto import: "ssn/linesservice/v1/linesservice.proto"


export class LinesServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  predict(
    request: ssn_linesservice_v1_linesservice_pb.LinesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ssn_linesservice_v1_linesservice_pb.LinesResponse) => void
  ): grpcWeb.ClientReadableStream<ssn_linesservice_v1_linesservice_pb.LinesResponse>;

}

export class LinesServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  predict(
    request: ssn_linesservice_v1_linesservice_pb.LinesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ssn_linesservice_v1_linesservice_pb.LinesResponse>;

}

