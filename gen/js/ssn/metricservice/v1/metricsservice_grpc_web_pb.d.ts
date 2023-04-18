import * as grpcWeb from 'grpc-web';

import * as ssn_metricservice_v1_metricsservice_pb from '../../../ssn/metricservice/v1/metricsservice_pb';


export class MetricsServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  calculateMetrics(
    request: ssn_metricservice_v1_metricsservice_pb.CalculateMetricsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ssn_metricservice_v1_metricsservice_pb.CalculateMetricsResponse) => void
  ): grpcWeb.ClientReadableStream<ssn_metricservice_v1_metricsservice_pb.CalculateMetricsResponse>;

}

export class MetricsServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  calculateMetrics(
    request: ssn_metricservice_v1_metricsservice_pb.CalculateMetricsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ssn_metricservice_v1_metricsservice_pb.CalculateMetricsResponse>;

}

