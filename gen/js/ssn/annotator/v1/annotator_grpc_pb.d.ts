// package: ssn.annotator.v1
// file: ssn/annotator/v1/annotator.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ssn_annotator_v1_annotator_pb from "../../../ssn/annotator/v1/annotator_pb";
import * as protoc_gen_openapiv2_options_annotations_pb from "../../../protoc-gen-openapiv2/options/annotations_pb";
import * as ssn_type_candidate_pb from "../../../ssn/type/candidate_pb";
import * as ssn_type_text_annotation_pb from "../../../ssn/type/text_annotation_pb";
import * as ssn_type_tier_pb from "../../../ssn/type/tier_pb";

interface IDocumentAnnotatorService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    annotateDocument: IDocumentAnnotatorService_IAnnotateDocument;
}

interface IDocumentAnnotatorService_IAnnotateDocument extends grpc.MethodDefinition<ssn_annotator_v1_annotator_pb.DocumentAnnotatorRequest, ssn_annotator_v1_annotator_pb.DocumentAnnotatorResponse> {
    path: "/ssn.annotator.v1.DocumentAnnotator/AnnotateDocument";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ssn_annotator_v1_annotator_pb.DocumentAnnotatorRequest>;
    requestDeserialize: grpc.deserialize<ssn_annotator_v1_annotator_pb.DocumentAnnotatorRequest>;
    responseSerialize: grpc.serialize<ssn_annotator_v1_annotator_pb.DocumentAnnotatorResponse>;
    responseDeserialize: grpc.deserialize<ssn_annotator_v1_annotator_pb.DocumentAnnotatorResponse>;
}

export const DocumentAnnotatorService: IDocumentAnnotatorService;

export interface IDocumentAnnotatorServer {
    annotateDocument: grpc.handleUnaryCall<ssn_annotator_v1_annotator_pb.DocumentAnnotatorRequest, ssn_annotator_v1_annotator_pb.DocumentAnnotatorResponse>;
}

export interface IDocumentAnnotatorClient {
    annotateDocument(request: ssn_annotator_v1_annotator_pb.DocumentAnnotatorRequest, callback: (error: grpc.ServiceError | null, response: ssn_annotator_v1_annotator_pb.DocumentAnnotatorResponse) => void): grpc.ClientUnaryCall;
    annotateDocument(request: ssn_annotator_v1_annotator_pb.DocumentAnnotatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ssn_annotator_v1_annotator_pb.DocumentAnnotatorResponse) => void): grpc.ClientUnaryCall;
    annotateDocument(request: ssn_annotator_v1_annotator_pb.DocumentAnnotatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ssn_annotator_v1_annotator_pb.DocumentAnnotatorResponse) => void): grpc.ClientUnaryCall;
}

export class DocumentAnnotatorClient extends grpc.Client implements IDocumentAnnotatorClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public annotateDocument(request: ssn_annotator_v1_annotator_pb.DocumentAnnotatorRequest, callback: (error: grpc.ServiceError | null, response: ssn_annotator_v1_annotator_pb.DocumentAnnotatorResponse) => void): grpc.ClientUnaryCall;
    public annotateDocument(request: ssn_annotator_v1_annotator_pb.DocumentAnnotatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ssn_annotator_v1_annotator_pb.DocumentAnnotatorResponse) => void): grpc.ClientUnaryCall;
    public annotateDocument(request: ssn_annotator_v1_annotator_pb.DocumentAnnotatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ssn_annotator_v1_annotator_pb.DocumentAnnotatorResponse) => void): grpc.ClientUnaryCall;
}
