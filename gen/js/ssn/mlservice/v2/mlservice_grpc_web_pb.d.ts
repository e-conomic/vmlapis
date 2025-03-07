import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb'; // proto import: "google/protobuf/wrappers.proto"
import * as ssn_mlservice_v2_mlservice_pb from '../../../ssn/mlservice/v2/mlservice_pb'; // proto import: "ssn/mlservice/v2/mlservice.proto"


export class MlServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  featureGen(
    request: ssn_mlservice_v2_mlservice_pb.FeatureGenRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ssn_mlservice_v2_mlservice_pb.FeatureGenResponse) => void
  ): grpcWeb.ClientReadableStream<ssn_mlservice_v2_mlservice_pb.FeatureGenResponse>;

  predict(
    request: ssn_mlservice_v2_mlservice_pb.PredictRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ssn_mlservice_v2_mlservice_pb.PredictResponse) => void
  ): grpcWeb.ClientReadableStream<ssn_mlservice_v2_mlservice_pb.PredictResponse>;

  featureGenPredict(
    request: ssn_mlservice_v2_mlservice_pb.FeatureGenPredictRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ssn_mlservice_v2_mlservice_pb.PredictResponse) => void
  ): grpcWeb.ClientReadableStream<ssn_mlservice_v2_mlservice_pb.PredictResponse>;

}

export class PurchaseLinesClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  inferPurchaseLines(
    request: ssn_mlservice_v2_mlservice_pb.PurchaseLinesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ssn_mlservice_v2_mlservice_pb.PurchaseLinesResponse) => void
  ): grpcWeb.ClientReadableStream<ssn_mlservice_v2_mlservice_pb.PurchaseLinesResponse>;

  healthCheck(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_wrappers_pb.StringValue) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_wrappers_pb.StringValue>;

}

export class MlServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  featureGen(
    request: ssn_mlservice_v2_mlservice_pb.FeatureGenRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ssn_mlservice_v2_mlservice_pb.FeatureGenResponse>;

  predict(
    request: ssn_mlservice_v2_mlservice_pb.PredictRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ssn_mlservice_v2_mlservice_pb.PredictResponse>;

  featureGenPredict(
    request: ssn_mlservice_v2_mlservice_pb.FeatureGenPredictRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ssn_mlservice_v2_mlservice_pb.PredictResponse>;

}

export class PurchaseLinesPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  inferPurchaseLines(
    request: ssn_mlservice_v2_mlservice_pb.PurchaseLinesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ssn_mlservice_v2_mlservice_pb.PurchaseLinesResponse>;

  healthCheck(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_wrappers_pb.StringValue>;

}

