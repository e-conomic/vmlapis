// package: ssn.access.v1
// file: ssn/access/v1/access.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ssn_access_v1_access_pb from "../../../ssn/access/v1/access_pb";

interface IAccessService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    generateValetKey: IAccessService_IGenerateValetKey;
}

interface IAccessService_IGenerateValetKey extends grpc.MethodDefinition<ssn_access_v1_access_pb.ValetKeyRequest, ssn_access_v1_access_pb.ValetKeyResponse> {
    path: "/ssn.access.v1.Access/GenerateValetKey";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ssn_access_v1_access_pb.ValetKeyRequest>;
    requestDeserialize: grpc.deserialize<ssn_access_v1_access_pb.ValetKeyRequest>;
    responseSerialize: grpc.serialize<ssn_access_v1_access_pb.ValetKeyResponse>;
    responseDeserialize: grpc.deserialize<ssn_access_v1_access_pb.ValetKeyResponse>;
}

export const AccessService: IAccessService;

export interface IAccessServer {
    generateValetKey: grpc.handleUnaryCall<ssn_access_v1_access_pb.ValetKeyRequest, ssn_access_v1_access_pb.ValetKeyResponse>;
}

export interface IAccessClient {
    generateValetKey(request: ssn_access_v1_access_pb.ValetKeyRequest, callback: (error: grpc.ServiceError | null, response: ssn_access_v1_access_pb.ValetKeyResponse) => void): grpc.ClientUnaryCall;
    generateValetKey(request: ssn_access_v1_access_pb.ValetKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ssn_access_v1_access_pb.ValetKeyResponse) => void): grpc.ClientUnaryCall;
    generateValetKey(request: ssn_access_v1_access_pb.ValetKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ssn_access_v1_access_pb.ValetKeyResponse) => void): grpc.ClientUnaryCall;
}

export class AccessClient extends grpc.Client implements IAccessClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public generateValetKey(request: ssn_access_v1_access_pb.ValetKeyRequest, callback: (error: grpc.ServiceError | null, response: ssn_access_v1_access_pb.ValetKeyResponse) => void): grpc.ClientUnaryCall;
    public generateValetKey(request: ssn_access_v1_access_pb.ValetKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ssn_access_v1_access_pb.ValetKeyResponse) => void): grpc.ClientUnaryCall;
    public generateValetKey(request: ssn_access_v1_access_pb.ValetKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ssn_access_v1_access_pb.ValetKeyResponse) => void): grpc.ClientUnaryCall;
}
