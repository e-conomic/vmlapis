import * as grpcWeb from 'grpc-web';

import * as ssn_chargebee_v1_chargebee_pb from '../../../ssn/chargebee/v1/chargebee_pb';


export class ChargeBeenatorClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  connect(
    request: ssn_chargebee_v1_chargebee_pb.ChargebeeConnectionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ssn_chargebee_v1_chargebee_pb.ChargebeeConnectionResponse) => void
  ): grpcWeb.ClientReadableStream<ssn_chargebee_v1_chargebee_pb.ChargebeeConnectionResponse>;

}

export class ChargeBeenatorPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  connect(
    request: ssn_chargebee_v1_chargebee_pb.ChargebeeConnectionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ssn_chargebee_v1_chargebee_pb.ChargebeeConnectionResponse>;

}

