// package: ssn.pdfservice.v1
// file: ssn/pdfservice/v1/pdfservice.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ssn_pdfservice_v1_pdfservice_pb from "../../../ssn/pdfservice/v1/pdfservice_pb";

interface IPdfServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    rasterizePdf: IPdfServiceService_IRasterizePdf;
}

interface IPdfServiceService_IRasterizePdf extends grpc.MethodDefinition<ssn_pdfservice_v1_pdfservice_pb.RasterizePdfRequest, ssn_pdfservice_v1_pdfservice_pb.RasterizePdfResponse> {
    path: "/ssn.pdfservice.v1.PdfService/RasterizePdf";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<ssn_pdfservice_v1_pdfservice_pb.RasterizePdfRequest>;
    requestDeserialize: grpc.deserialize<ssn_pdfservice_v1_pdfservice_pb.RasterizePdfRequest>;
    responseSerialize: grpc.serialize<ssn_pdfservice_v1_pdfservice_pb.RasterizePdfResponse>;
    responseDeserialize: grpc.deserialize<ssn_pdfservice_v1_pdfservice_pb.RasterizePdfResponse>;
}

export const PdfServiceService: IPdfServiceService;

export interface IPdfServiceServer {
    rasterizePdf: grpc.handleServerStreamingCall<ssn_pdfservice_v1_pdfservice_pb.RasterizePdfRequest, ssn_pdfservice_v1_pdfservice_pb.RasterizePdfResponse>;
}

export interface IPdfServiceClient {
    rasterizePdf(request: ssn_pdfservice_v1_pdfservice_pb.RasterizePdfRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ssn_pdfservice_v1_pdfservice_pb.RasterizePdfResponse>;
    rasterizePdf(request: ssn_pdfservice_v1_pdfservice_pb.RasterizePdfRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ssn_pdfservice_v1_pdfservice_pb.RasterizePdfResponse>;
}

export class PdfServiceClient extends grpc.Client implements IPdfServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public rasterizePdf(request: ssn_pdfservice_v1_pdfservice_pb.RasterizePdfRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ssn_pdfservice_v1_pdfservice_pb.RasterizePdfResponse>;
    public rasterizePdf(request: ssn_pdfservice_v1_pdfservice_pb.RasterizePdfRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ssn_pdfservice_v1_pdfservice_pb.RasterizePdfResponse>;
}
