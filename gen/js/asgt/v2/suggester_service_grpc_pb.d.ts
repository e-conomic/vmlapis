// package: asgt.v2
// file: asgt/v2/suggester_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as asgt_v2_suggester_service_pb from "../../asgt/v2/suggester_service_pb";
import * as protoc_gen_openapiv2_options_annotations_pb from "../../protoc-gen-openapiv2/options/annotations_pb";
import * as validate_validate_pb from "../../validate/validate_pb";
import * as asgt_type_prediction_pb from "../../asgt/type/prediction_pb";
import * as asgt_type_model_pb from "../../asgt/type/model_pb";
import * as asgt_v2_type_data_pb from "../../asgt/v2/type/data_pb";

interface ISuggesterServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    suggest: ISuggesterServiceService_ISuggest;
    batchSuggest: ISuggesterServiceService_IBatchSuggest;
    modelBatchSuggest: ISuggesterServiceService_IModelBatchSuggest;
}

interface ISuggesterServiceService_ISuggest extends grpc.MethodDefinition<asgt_v2_suggester_service_pb.SuggestRequest, asgt_v2_suggester_service_pb.SuggestResponse> {
    path: "/asgt.v2.SuggesterService/Suggest";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<asgt_v2_suggester_service_pb.SuggestRequest>;
    requestDeserialize: grpc.deserialize<asgt_v2_suggester_service_pb.SuggestRequest>;
    responseSerialize: grpc.serialize<asgt_v2_suggester_service_pb.SuggestResponse>;
    responseDeserialize: grpc.deserialize<asgt_v2_suggester_service_pb.SuggestResponse>;
}
interface ISuggesterServiceService_IBatchSuggest extends grpc.MethodDefinition<asgt_v2_suggester_service_pb.BatchSuggestRequest, asgt_v2_suggester_service_pb.BatchSuggestResponse> {
    path: "/asgt.v2.SuggesterService/BatchSuggest";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<asgt_v2_suggester_service_pb.BatchSuggestRequest>;
    requestDeserialize: grpc.deserialize<asgt_v2_suggester_service_pb.BatchSuggestRequest>;
    responseSerialize: grpc.serialize<asgt_v2_suggester_service_pb.BatchSuggestResponse>;
    responseDeserialize: grpc.deserialize<asgt_v2_suggester_service_pb.BatchSuggestResponse>;
}
interface ISuggesterServiceService_IModelBatchSuggest extends grpc.MethodDefinition<asgt_v2_suggester_service_pb.BatchSuggestRequest, asgt_v2_suggester_service_pb.BatchSuggestResponse> {
    path: "/asgt.v2.SuggesterService/ModelBatchSuggest";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<asgt_v2_suggester_service_pb.BatchSuggestRequest>;
    requestDeserialize: grpc.deserialize<asgt_v2_suggester_service_pb.BatchSuggestRequest>;
    responseSerialize: grpc.serialize<asgt_v2_suggester_service_pb.BatchSuggestResponse>;
    responseDeserialize: grpc.deserialize<asgt_v2_suggester_service_pb.BatchSuggestResponse>;
}

export const SuggesterServiceService: ISuggesterServiceService;

export interface ISuggesterServiceServer {
    suggest: grpc.handleUnaryCall<asgt_v2_suggester_service_pb.SuggestRequest, asgt_v2_suggester_service_pb.SuggestResponse>;
    batchSuggest: grpc.handleUnaryCall<asgt_v2_suggester_service_pb.BatchSuggestRequest, asgt_v2_suggester_service_pb.BatchSuggestResponse>;
    modelBatchSuggest: grpc.handleUnaryCall<asgt_v2_suggester_service_pb.BatchSuggestRequest, asgt_v2_suggester_service_pb.BatchSuggestResponse>;
}

export interface ISuggesterServiceClient {
    suggest(request: asgt_v2_suggester_service_pb.SuggestRequest, callback: (error: grpc.ServiceError | null, response: asgt_v2_suggester_service_pb.SuggestResponse) => void): grpc.ClientUnaryCall;
    suggest(request: asgt_v2_suggester_service_pb.SuggestRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: asgt_v2_suggester_service_pb.SuggestResponse) => void): grpc.ClientUnaryCall;
    suggest(request: asgt_v2_suggester_service_pb.SuggestRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: asgt_v2_suggester_service_pb.SuggestResponse) => void): grpc.ClientUnaryCall;
    batchSuggest(request: asgt_v2_suggester_service_pb.BatchSuggestRequest, callback: (error: grpc.ServiceError | null, response: asgt_v2_suggester_service_pb.BatchSuggestResponse) => void): grpc.ClientUnaryCall;
    batchSuggest(request: asgt_v2_suggester_service_pb.BatchSuggestRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: asgt_v2_suggester_service_pb.BatchSuggestResponse) => void): grpc.ClientUnaryCall;
    batchSuggest(request: asgt_v2_suggester_service_pb.BatchSuggestRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: asgt_v2_suggester_service_pb.BatchSuggestResponse) => void): grpc.ClientUnaryCall;
    modelBatchSuggest(request: asgt_v2_suggester_service_pb.BatchSuggestRequest, callback: (error: grpc.ServiceError | null, response: asgt_v2_suggester_service_pb.BatchSuggestResponse) => void): grpc.ClientUnaryCall;
    modelBatchSuggest(request: asgt_v2_suggester_service_pb.BatchSuggestRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: asgt_v2_suggester_service_pb.BatchSuggestResponse) => void): grpc.ClientUnaryCall;
    modelBatchSuggest(request: asgt_v2_suggester_service_pb.BatchSuggestRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: asgt_v2_suggester_service_pb.BatchSuggestResponse) => void): grpc.ClientUnaryCall;
}

export class SuggesterServiceClient extends grpc.Client implements ISuggesterServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public suggest(request: asgt_v2_suggester_service_pb.SuggestRequest, callback: (error: grpc.ServiceError | null, response: asgt_v2_suggester_service_pb.SuggestResponse) => void): grpc.ClientUnaryCall;
    public suggest(request: asgt_v2_suggester_service_pb.SuggestRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: asgt_v2_suggester_service_pb.SuggestResponse) => void): grpc.ClientUnaryCall;
    public suggest(request: asgt_v2_suggester_service_pb.SuggestRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: asgt_v2_suggester_service_pb.SuggestResponse) => void): grpc.ClientUnaryCall;
    public batchSuggest(request: asgt_v2_suggester_service_pb.BatchSuggestRequest, callback: (error: grpc.ServiceError | null, response: asgt_v2_suggester_service_pb.BatchSuggestResponse) => void): grpc.ClientUnaryCall;
    public batchSuggest(request: asgt_v2_suggester_service_pb.BatchSuggestRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: asgt_v2_suggester_service_pb.BatchSuggestResponse) => void): grpc.ClientUnaryCall;
    public batchSuggest(request: asgt_v2_suggester_service_pb.BatchSuggestRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: asgt_v2_suggester_service_pb.BatchSuggestResponse) => void): grpc.ClientUnaryCall;
    public modelBatchSuggest(request: asgt_v2_suggester_service_pb.BatchSuggestRequest, callback: (error: grpc.ServiceError | null, response: asgt_v2_suggester_service_pb.BatchSuggestResponse) => void): grpc.ClientUnaryCall;
    public modelBatchSuggest(request: asgt_v2_suggester_service_pb.BatchSuggestRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: asgt_v2_suggester_service_pb.BatchSuggestResponse) => void): grpc.ClientUnaryCall;
    public modelBatchSuggest(request: asgt_v2_suggester_service_pb.BatchSuggestRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: asgt_v2_suggester_service_pb.BatchSuggestResponse) => void): grpc.ClientUnaryCall;
}
