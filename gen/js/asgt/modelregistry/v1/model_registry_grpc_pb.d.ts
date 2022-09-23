// package: asgt.modelregistry.v1
// file: asgt/modelregistry/v1/model_registry.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as asgt_modelregistry_v1_model_registry_pb from "../../../asgt/modelregistry/v1/model_registry_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as asgt_type_model_pb from "../../../asgt/type/model_pb";
import * as asgt_type_dataset_pb from "../../../asgt/type/dataset_pb";
import * as asgt_type_revision_pb from "../../../asgt/type/revision_pb";
import * as asgt_type_target_metrics_pb from "../../../asgt/type/target_metrics_pb";
import * as asgt_type_train_statistics_pb from "../../../asgt/type/train_statistics_pb";

interface IModelRegistryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    registerModel: IModelRegistryService_IRegisterModel;
    getCurrentModel: IModelRegistryService_IGetCurrentModel;
}

interface IModelRegistryService_IRegisterModel extends grpc.MethodDefinition<asgt_modelregistry_v1_model_registry_pb.RegisterModelRequest, google_protobuf_empty_pb.Empty> {
    path: "/asgt.modelregistry.v1.ModelRegistry/RegisterModel";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<asgt_modelregistry_v1_model_registry_pb.RegisterModelRequest>;
    requestDeserialize: grpc.deserialize<asgt_modelregistry_v1_model_registry_pb.RegisterModelRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IModelRegistryService_IGetCurrentModel extends grpc.MethodDefinition<asgt_modelregistry_v1_model_registry_pb.GetCurrentModelRequest, asgt_modelregistry_v1_model_registry_pb.GetCurrentModelResponse> {
    path: "/asgt.modelregistry.v1.ModelRegistry/GetCurrentModel";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<asgt_modelregistry_v1_model_registry_pb.GetCurrentModelRequest>;
    requestDeserialize: grpc.deserialize<asgt_modelregistry_v1_model_registry_pb.GetCurrentModelRequest>;
    responseSerialize: grpc.serialize<asgt_modelregistry_v1_model_registry_pb.GetCurrentModelResponse>;
    responseDeserialize: grpc.deserialize<asgt_modelregistry_v1_model_registry_pb.GetCurrentModelResponse>;
}

export const ModelRegistryService: IModelRegistryService;

export interface IModelRegistryServer {
    registerModel: grpc.handleUnaryCall<asgt_modelregistry_v1_model_registry_pb.RegisterModelRequest, google_protobuf_empty_pb.Empty>;
    getCurrentModel: grpc.handleUnaryCall<asgt_modelregistry_v1_model_registry_pb.GetCurrentModelRequest, asgt_modelregistry_v1_model_registry_pb.GetCurrentModelResponse>;
}

export interface IModelRegistryClient {
    registerModel(request: asgt_modelregistry_v1_model_registry_pb.RegisterModelRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    registerModel(request: asgt_modelregistry_v1_model_registry_pb.RegisterModelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    registerModel(request: asgt_modelregistry_v1_model_registry_pb.RegisterModelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getCurrentModel(request: asgt_modelregistry_v1_model_registry_pb.GetCurrentModelRequest, callback: (error: grpc.ServiceError | null, response: asgt_modelregistry_v1_model_registry_pb.GetCurrentModelResponse) => void): grpc.ClientUnaryCall;
    getCurrentModel(request: asgt_modelregistry_v1_model_registry_pb.GetCurrentModelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: asgt_modelregistry_v1_model_registry_pb.GetCurrentModelResponse) => void): grpc.ClientUnaryCall;
    getCurrentModel(request: asgt_modelregistry_v1_model_registry_pb.GetCurrentModelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: asgt_modelregistry_v1_model_registry_pb.GetCurrentModelResponse) => void): grpc.ClientUnaryCall;
}

export class ModelRegistryClient extends grpc.Client implements IModelRegistryClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public registerModel(request: asgt_modelregistry_v1_model_registry_pb.RegisterModelRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public registerModel(request: asgt_modelregistry_v1_model_registry_pb.RegisterModelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public registerModel(request: asgt_modelregistry_v1_model_registry_pb.RegisterModelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getCurrentModel(request: asgt_modelregistry_v1_model_registry_pb.GetCurrentModelRequest, callback: (error: grpc.ServiceError | null, response: asgt_modelregistry_v1_model_registry_pb.GetCurrentModelResponse) => void): grpc.ClientUnaryCall;
    public getCurrentModel(request: asgt_modelregistry_v1_model_registry_pb.GetCurrentModelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: asgt_modelregistry_v1_model_registry_pb.GetCurrentModelResponse) => void): grpc.ClientUnaryCall;
    public getCurrentModel(request: asgt_modelregistry_v1_model_registry_pb.GetCurrentModelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: asgt_modelregistry_v1_model_registry_pb.GetCurrentModelResponse) => void): grpc.ClientUnaryCall;
}
