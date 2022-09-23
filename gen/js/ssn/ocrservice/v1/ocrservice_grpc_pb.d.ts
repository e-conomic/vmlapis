// package: ssn.ocrservice.v1
// file: ssn/ocrservice/v1/ocrservice.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ssn_ocrservice_v1_ocrservice_pb from "../../../ssn/ocrservice/v1/ocrservice_pb";
import * as ssn_annotator_v1_annotator_pb from "../../../ssn/annotator/v1/annotator_pb";
import * as ssn_type_text_annotation_pb from "../../../ssn/type/text_annotation_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

interface IOcrServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    ocrScanImage: IOcrServiceService_IOcrScanImage;
    getTextAnnotation: IOcrServiceService_IGetTextAnnotation;
}

interface IOcrServiceService_IOcrScanImage extends grpc.MethodDefinition<ssn_ocrservice_v1_ocrservice_pb.OcrScanImageRequest, ssn_ocrservice_v1_ocrservice_pb.OcrScanImageResponse> {
    path: "/ssn.ocrservice.v1.OcrService/OcrScanImage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ssn_ocrservice_v1_ocrservice_pb.OcrScanImageRequest>;
    requestDeserialize: grpc.deserialize<ssn_ocrservice_v1_ocrservice_pb.OcrScanImageRequest>;
    responseSerialize: grpc.serialize<ssn_ocrservice_v1_ocrservice_pb.OcrScanImageResponse>;
    responseDeserialize: grpc.deserialize<ssn_ocrservice_v1_ocrservice_pb.OcrScanImageResponse>;
}
interface IOcrServiceService_IGetTextAnnotation extends grpc.MethodDefinition<ssn_ocrservice_v1_ocrservice_pb.GetTextAnnotationRequest, ssn_ocrservice_v1_ocrservice_pb.GetTextAnnotationResponse> {
    path: "/ssn.ocrservice.v1.OcrService/GetTextAnnotation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ssn_ocrservice_v1_ocrservice_pb.GetTextAnnotationRequest>;
    requestDeserialize: grpc.deserialize<ssn_ocrservice_v1_ocrservice_pb.GetTextAnnotationRequest>;
    responseSerialize: grpc.serialize<ssn_ocrservice_v1_ocrservice_pb.GetTextAnnotationResponse>;
    responseDeserialize: grpc.deserialize<ssn_ocrservice_v1_ocrservice_pb.GetTextAnnotationResponse>;
}

export const OcrServiceService: IOcrServiceService;

export interface IOcrServiceServer {
    ocrScanImage: grpc.handleUnaryCall<ssn_ocrservice_v1_ocrservice_pb.OcrScanImageRequest, ssn_ocrservice_v1_ocrservice_pb.OcrScanImageResponse>;
    getTextAnnotation: grpc.handleUnaryCall<ssn_ocrservice_v1_ocrservice_pb.GetTextAnnotationRequest, ssn_ocrservice_v1_ocrservice_pb.GetTextAnnotationResponse>;
}

export interface IOcrServiceClient {
    ocrScanImage(request: ssn_ocrservice_v1_ocrservice_pb.OcrScanImageRequest, callback: (error: grpc.ServiceError | null, response: ssn_ocrservice_v1_ocrservice_pb.OcrScanImageResponse) => void): grpc.ClientUnaryCall;
    ocrScanImage(request: ssn_ocrservice_v1_ocrservice_pb.OcrScanImageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ssn_ocrservice_v1_ocrservice_pb.OcrScanImageResponse) => void): grpc.ClientUnaryCall;
    ocrScanImage(request: ssn_ocrservice_v1_ocrservice_pb.OcrScanImageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ssn_ocrservice_v1_ocrservice_pb.OcrScanImageResponse) => void): grpc.ClientUnaryCall;
    getTextAnnotation(request: ssn_ocrservice_v1_ocrservice_pb.GetTextAnnotationRequest, callback: (error: grpc.ServiceError | null, response: ssn_ocrservice_v1_ocrservice_pb.GetTextAnnotationResponse) => void): grpc.ClientUnaryCall;
    getTextAnnotation(request: ssn_ocrservice_v1_ocrservice_pb.GetTextAnnotationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ssn_ocrservice_v1_ocrservice_pb.GetTextAnnotationResponse) => void): grpc.ClientUnaryCall;
    getTextAnnotation(request: ssn_ocrservice_v1_ocrservice_pb.GetTextAnnotationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ssn_ocrservice_v1_ocrservice_pb.GetTextAnnotationResponse) => void): grpc.ClientUnaryCall;
}

export class OcrServiceClient extends grpc.Client implements IOcrServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public ocrScanImage(request: ssn_ocrservice_v1_ocrservice_pb.OcrScanImageRequest, callback: (error: grpc.ServiceError | null, response: ssn_ocrservice_v1_ocrservice_pb.OcrScanImageResponse) => void): grpc.ClientUnaryCall;
    public ocrScanImage(request: ssn_ocrservice_v1_ocrservice_pb.OcrScanImageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ssn_ocrservice_v1_ocrservice_pb.OcrScanImageResponse) => void): grpc.ClientUnaryCall;
    public ocrScanImage(request: ssn_ocrservice_v1_ocrservice_pb.OcrScanImageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ssn_ocrservice_v1_ocrservice_pb.OcrScanImageResponse) => void): grpc.ClientUnaryCall;
    public getTextAnnotation(request: ssn_ocrservice_v1_ocrservice_pb.GetTextAnnotationRequest, callback: (error: grpc.ServiceError | null, response: ssn_ocrservice_v1_ocrservice_pb.GetTextAnnotationResponse) => void): grpc.ClientUnaryCall;
    public getTextAnnotation(request: ssn_ocrservice_v1_ocrservice_pb.GetTextAnnotationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ssn_ocrservice_v1_ocrservice_pb.GetTextAnnotationResponse) => void): grpc.ClientUnaryCall;
    public getTextAnnotation(request: ssn_ocrservice_v1_ocrservice_pb.GetTextAnnotationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ssn_ocrservice_v1_ocrservice_pb.GetTextAnnotationResponse) => void): grpc.ClientUnaryCall;
}
