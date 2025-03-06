import * as grpcWeb from 'grpc-web';

import * as ssn_pdfservice_v1_pdfservice_pb from '../../../ssn/pdfservice/v1/pdfservice_pb'; // proto import: "ssn/pdfservice/v1/pdfservice.proto"


export class PdfServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  internalRasterizePdf(
    request: ssn_pdfservice_v1_pdfservice_pb.RasterizePdfRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ssn_pdfservice_v1_pdfservice_pb.RasterizePdfResponse>;

  rasterizePdf(
    request: ssn_pdfservice_v1_pdfservice_pb.RasterizePdfRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ssn_pdfservice_v1_pdfservice_pb.RasterizePdfResponse>;

}

export class PdfServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  internalRasterizePdf(
    request: ssn_pdfservice_v1_pdfservice_pb.RasterizePdfRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ssn_pdfservice_v1_pdfservice_pb.RasterizePdfResponse>;

  rasterizePdf(
    request: ssn_pdfservice_v1_pdfservice_pb.RasterizePdfRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ssn_pdfservice_v1_pdfservice_pb.RasterizePdfResponse>;

}

