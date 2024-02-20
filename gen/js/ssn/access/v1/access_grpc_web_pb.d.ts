import * as grpcWeb from 'grpc-web';

import * as ssn_access_v1_access_pb from '../../../ssn/access/v1/access_pb';


export class AccessClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  generateValetKey(
    request: ssn_access_v1_access_pb.ValetKeyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ssn_access_v1_access_pb.ValetKeyResponse) => void
  ): grpcWeb.ClientReadableStream<ssn_access_v1_access_pb.ValetKeyResponse>;

}

export class AccessPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  generateValetKey(
    request: ssn_access_v1_access_pb.ValetKeyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ssn_access_v1_access_pb.ValetKeyResponse>;

}

