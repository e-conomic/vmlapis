import * as grpcWeb from 'grpc-web';

import * as cv_scanner_v1_scanner_pb from '../../../cv/scanner/v1/scanner_pb'; // proto import: "cv/scanner/v1/scanner.proto"


export class ScannerClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  scanCV(
    request: cv_scanner_v1_scanner_pb.ScanCVRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: cv_scanner_v1_scanner_pb.ScanCVResponse) => void
  ): grpcWeb.ClientReadableStream<cv_scanner_v1_scanner_pb.ScanCVResponse>;

}

export class ScannerPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  scanCV(
    request: cv_scanner_v1_scanner_pb.ScanCVRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<cv_scanner_v1_scanner_pb.ScanCVResponse>;

}

