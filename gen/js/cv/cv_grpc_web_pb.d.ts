import * as grpcWeb from 'grpc-web';

import * as cv_cv_pb from '../cv/cv_pb';


export class CvScannerClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  scanDocument(
    request: cv_cv_pb.ScanDocumentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: cv_cv_pb.ScanDocumentResponse) => void
  ): grpcWeb.ClientReadableStream<cv_cv_pb.ScanDocumentResponse>;

}

export class CvScannerPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  scanDocument(
    request: cv_cv_pb.ScanDocumentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<cv_cv_pb.ScanDocumentResponse>;

}

