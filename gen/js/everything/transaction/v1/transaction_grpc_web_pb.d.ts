import * as grpcWeb from 'grpc-web';

import * as everything_transaction_v1_transaction_pb from '../../../everything/transaction/v1/transaction_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class TransactionServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createTransaction(
    request: everything_transaction_v1_transaction_pb.CreateTransactionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: everything_transaction_v1_transaction_pb.CreateTransactionResponse) => void
  ): grpcWeb.ClientReadableStream<everything_transaction_v1_transaction_pb.CreateTransactionResponse>;

  getTransactionResults(
    request: everything_transaction_v1_transaction_pb.GetTransactionResultsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: everything_transaction_v1_transaction_pb.GetTransactionResultsResponse) => void
  ): grpcWeb.ClientReadableStream<everything_transaction_v1_transaction_pb.GetTransactionResultsResponse>;

  getTransactionStatus(
    request: everything_transaction_v1_transaction_pb.GetTransactionStatusRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: everything_transaction_v1_transaction_pb.GetTransactionStatusResponse) => void
  ): grpcWeb.ClientReadableStream<everything_transaction_v1_transaction_pb.GetTransactionStatusResponse>;

  deleteTransaction(
    request: everything_transaction_v1_transaction_pb.DeleteTransactionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class TransactionServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createTransaction(
    request: everything_transaction_v1_transaction_pb.CreateTransactionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<everything_transaction_v1_transaction_pb.CreateTransactionResponse>;

  getTransactionResults(
    request: everything_transaction_v1_transaction_pb.GetTransactionResultsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<everything_transaction_v1_transaction_pb.GetTransactionResultsResponse>;

  getTransactionStatus(
    request: everything_transaction_v1_transaction_pb.GetTransactionStatusRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<everything_transaction_v1_transaction_pb.GetTransactionStatusResponse>;

  deleteTransaction(
    request: everything_transaction_v1_transaction_pb.DeleteTransactionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

