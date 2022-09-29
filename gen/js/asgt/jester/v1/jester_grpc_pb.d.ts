// package: asgt.jester.v1
// file: asgt/jester/v1/jester.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as asgt_jester_v1_jester_pb from "../../../asgt/jester/v1/jester_pb";
import * as asgt_type_data_pb from "../../../asgt/type/data_pb";
import * as asgt_type_model_pb from "../../../asgt/type/model_pb";
import * as asgt_type_prediction_pb from "../../../asgt/type/prediction_pb";
import * as protoc_gen_openapiv2_options_annotations_pb from "../../../protoc-gen-openapiv2/options/annotations_pb";

interface IJesterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    suggest: IJesterService_ISuggest;
}

interface IJesterService_ISuggest extends grpc.MethodDefinition<asgt_jester_v1_jester_pb.SuggestionRequest, asgt_jester_v1_jester_pb.SuggestionResponse> {
    path: "/asgt.jester.v1.Jester/Suggest";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<asgt_jester_v1_jester_pb.SuggestionRequest>;
    requestDeserialize: grpc.deserialize<asgt_jester_v1_jester_pb.SuggestionRequest>;
    responseSerialize: grpc.serialize<asgt_jester_v1_jester_pb.SuggestionResponse>;
    responseDeserialize: grpc.deserialize<asgt_jester_v1_jester_pb.SuggestionResponse>;
}

export const JesterService: IJesterService;

export interface IJesterServer {
    suggest: grpc.handleUnaryCall<asgt_jester_v1_jester_pb.SuggestionRequest, asgt_jester_v1_jester_pb.SuggestionResponse>;
}

export interface IJesterClient {
    suggest(request: asgt_jester_v1_jester_pb.SuggestionRequest, callback: (error: grpc.ServiceError | null, response: asgt_jester_v1_jester_pb.SuggestionResponse) => void): grpc.ClientUnaryCall;
    suggest(request: asgt_jester_v1_jester_pb.SuggestionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: asgt_jester_v1_jester_pb.SuggestionResponse) => void): grpc.ClientUnaryCall;
    suggest(request: asgt_jester_v1_jester_pb.SuggestionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: asgt_jester_v1_jester_pb.SuggestionResponse) => void): grpc.ClientUnaryCall;
}

export class JesterClient extends grpc.Client implements IJesterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public suggest(request: asgt_jester_v1_jester_pb.SuggestionRequest, callback: (error: grpc.ServiceError | null, response: asgt_jester_v1_jester_pb.SuggestionResponse) => void): grpc.ClientUnaryCall;
    public suggest(request: asgt_jester_v1_jester_pb.SuggestionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: asgt_jester_v1_jester_pb.SuggestionResponse) => void): grpc.ClientUnaryCall;
    public suggest(request: asgt_jester_v1_jester_pb.SuggestionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: asgt_jester_v1_jester_pb.SuggestionResponse) => void): grpc.ClientUnaryCall;
}
