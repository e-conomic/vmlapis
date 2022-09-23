// package: cv.scanner.v1
// file: cv/cv.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as cv_cv_pb from "../cv/cv_pb";
import * as google_api_http_pb from "../google/api/http_pb";
import * as ssn_type_candidate_pb from "../ssn/type/candidate_pb";

interface ICvScannerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    scanDocument: ICvScannerService_IScanDocument;
}

interface ICvScannerService_IScanDocument extends grpc.MethodDefinition<cv_cv_pb.ScanDocumentRequest, cv_cv_pb.ScanDocumentResponse> {
    path: "/cv.scanner.v1.CvScanner/ScanDocument";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cv_cv_pb.ScanDocumentRequest>;
    requestDeserialize: grpc.deserialize<cv_cv_pb.ScanDocumentRequest>;
    responseSerialize: grpc.serialize<cv_cv_pb.ScanDocumentResponse>;
    responseDeserialize: grpc.deserialize<cv_cv_pb.ScanDocumentResponse>;
}

export const CvScannerService: ICvScannerService;

export interface ICvScannerServer {
    scanDocument: grpc.handleUnaryCall<cv_cv_pb.ScanDocumentRequest, cv_cv_pb.ScanDocumentResponse>;
}

export interface ICvScannerClient {
    scanDocument(request: cv_cv_pb.ScanDocumentRequest, callback: (error: grpc.ServiceError | null, response: cv_cv_pb.ScanDocumentResponse) => void): grpc.ClientUnaryCall;
    scanDocument(request: cv_cv_pb.ScanDocumentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cv_cv_pb.ScanDocumentResponse) => void): grpc.ClientUnaryCall;
    scanDocument(request: cv_cv_pb.ScanDocumentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cv_cv_pb.ScanDocumentResponse) => void): grpc.ClientUnaryCall;
}

export class CvScannerClient extends grpc.Client implements ICvScannerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public scanDocument(request: cv_cv_pb.ScanDocumentRequest, callback: (error: grpc.ServiceError | null, response: cv_cv_pb.ScanDocumentResponse) => void): grpc.ClientUnaryCall;
    public scanDocument(request: cv_cv_pb.ScanDocumentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cv_cv_pb.ScanDocumentResponse) => void): grpc.ClientUnaryCall;
    public scanDocument(request: cv_cv_pb.ScanDocumentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cv_cv_pb.ScanDocumentResponse) => void): grpc.ClientUnaryCall;
}
