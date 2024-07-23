import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as ssn_async_v1_async_pb from '../../../ssn/async/v1/async_pb';


export class TransactionServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createTransaction(
    request: ssn_async_v1_async_pb.CreateTransactionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ssn_async_v1_async_pb.CreateTransactionResponse) => void
  ): grpcWeb.ClientReadableStream<ssn_async_v1_async_pb.CreateTransactionResponse>;

  getTransactionResults(
    request: ssn_async_v1_async_pb.GetTransactionResultsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ssn_async_v1_async_pb.GetTransactionResultsResponse) => void
  ): grpcWeb.ClientReadableStream<ssn_async_v1_async_pb.GetTransactionResultsResponse>;

  getTransactionStatus(
    request: ssn_async_v1_async_pb.GetTransactionStatusRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ssn_async_v1_async_pb.GetTransactionStatusResponse) => void
  ): grpcWeb.ClientReadableStream<ssn_async_v1_async_pb.GetTransactionStatusResponse>;

  deleteTransaction(
    request: ssn_async_v1_async_pb.DeleteTransactionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteTag(
    request: ssn_async_v1_async_pb.DeleteTagRequest,
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
    request: ssn_async_v1_async_pb.CreateTransactionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ssn_async_v1_async_pb.CreateTransactionResponse>;

  getTransactionResults(
    request: ssn_async_v1_async_pb.GetTransactionResultsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ssn_async_v1_async_pb.GetTransactionResultsResponse>;

  getTransactionStatus(
    request: ssn_async_v1_async_pb.GetTransactionStatusRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ssn_async_v1_async_pb.GetTransactionStatusResponse>;

  deleteTransaction(
    request: ssn_async_v1_async_pb.DeleteTransactionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  deleteTag(
    request: ssn_async_v1_async_pb.DeleteTagRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

