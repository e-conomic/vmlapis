// package: asgt.v2
// file: asgt/v2/dataset_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as asgt_v2_dataset_service_pb from "../../asgt/v2/dataset_service_pb";
import * as asgt_type_dataset_pb from "../../asgt/type/dataset_pb";
import * as asgt_v2_type_example_pb from "../../asgt/v2/type/example_pb";
import * as asgt_v2_type_training_pb from "../../asgt/v2/type/training_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as protoc_gen_openapiv2_options_annotations_pb from "../../protoc-gen-openapiv2/options/annotations_pb";
import * as validate_validate_pb from "../../validate/validate_pb";

interface IDatasetServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getDataset: IDatasetServiceService_IGetDataset;
    createDataset: IDatasetServiceService_ICreateDataset;
    createOrUpdateDataset: IDatasetServiceService_ICreateOrUpdateDataset;
    deleteDataset: IDatasetServiceService_IDeleteDataset;
    deleteTag: IDatasetServiceService_IDeleteTag;
    createExample: IDatasetServiceService_ICreateExample;
    createOrUpdateExample: IDatasetServiceService_ICreateOrUpdateExample;
    batchCreateExample: IDatasetServiceService_IBatchCreateExample;
    truncateDataset: IDatasetServiceService_ITruncateDataset;
    getDatasetTrainings: IDatasetServiceService_IGetDatasetTrainings;
    getTrainings: IDatasetServiceService_IGetTrainings;
}

interface IDatasetServiceService_IGetDataset extends grpc.MethodDefinition<asgt_v2_dataset_service_pb.GetDatasetRequest, asgt_type_dataset_pb.Dataset> {
    path: "/asgt.v2.DatasetService/GetDataset";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<asgt_v2_dataset_service_pb.GetDatasetRequest>;
    requestDeserialize: grpc.deserialize<asgt_v2_dataset_service_pb.GetDatasetRequest>;
    responseSerialize: grpc.serialize<asgt_type_dataset_pb.Dataset>;
    responseDeserialize: grpc.deserialize<asgt_type_dataset_pb.Dataset>;
}
interface IDatasetServiceService_ICreateDataset extends grpc.MethodDefinition<asgt_v2_dataset_service_pb.CreateDatasetRequest, google_protobuf_empty_pb.Empty> {
    path: "/asgt.v2.DatasetService/CreateDataset";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<asgt_v2_dataset_service_pb.CreateDatasetRequest>;
    requestDeserialize: grpc.deserialize<asgt_v2_dataset_service_pb.CreateDatasetRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IDatasetServiceService_ICreateOrUpdateDataset extends grpc.MethodDefinition<asgt_v2_dataset_service_pb.CreateOrUpdateDatasetRequest, google_protobuf_empty_pb.Empty> {
    path: "/asgt.v2.DatasetService/CreateOrUpdateDataset";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<asgt_v2_dataset_service_pb.CreateOrUpdateDatasetRequest>;
    requestDeserialize: grpc.deserialize<asgt_v2_dataset_service_pb.CreateOrUpdateDatasetRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IDatasetServiceService_IDeleteDataset extends grpc.MethodDefinition<asgt_v2_dataset_service_pb.DeleteDatasetRequest, asgt_type_dataset_pb.Dataset> {
    path: "/asgt.v2.DatasetService/DeleteDataset";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<asgt_v2_dataset_service_pb.DeleteDatasetRequest>;
    requestDeserialize: grpc.deserialize<asgt_v2_dataset_service_pb.DeleteDatasetRequest>;
    responseSerialize: grpc.serialize<asgt_type_dataset_pb.Dataset>;
    responseDeserialize: grpc.deserialize<asgt_type_dataset_pb.Dataset>;
}
interface IDatasetServiceService_IDeleteTag extends grpc.MethodDefinition<asgt_v2_dataset_service_pb.DeleteTagRequest, google_protobuf_empty_pb.Empty> {
    path: "/asgt.v2.DatasetService/DeleteTag";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<asgt_v2_dataset_service_pb.DeleteTagRequest>;
    requestDeserialize: grpc.deserialize<asgt_v2_dataset_service_pb.DeleteTagRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IDatasetServiceService_ICreateExample extends grpc.MethodDefinition<asgt_v2_dataset_service_pb.CreateExampleRequest, google_protobuf_empty_pb.Empty> {
    path: "/asgt.v2.DatasetService/CreateExample";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<asgt_v2_dataset_service_pb.CreateExampleRequest>;
    requestDeserialize: grpc.deserialize<asgt_v2_dataset_service_pb.CreateExampleRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IDatasetServiceService_ICreateOrUpdateExample extends grpc.MethodDefinition<asgt_v2_dataset_service_pb.CreateOrUpdateExampleRequest, google_protobuf_empty_pb.Empty> {
    path: "/asgt.v2.DatasetService/CreateOrUpdateExample";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<asgt_v2_dataset_service_pb.CreateOrUpdateExampleRequest>;
    requestDeserialize: grpc.deserialize<asgt_v2_dataset_service_pb.CreateOrUpdateExampleRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IDatasetServiceService_IBatchCreateExample extends grpc.MethodDefinition<asgt_v2_dataset_service_pb.BatchCreateExampleRequest, google_protobuf_empty_pb.Empty> {
    path: "/asgt.v2.DatasetService/BatchCreateExample";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<asgt_v2_dataset_service_pb.BatchCreateExampleRequest>;
    requestDeserialize: grpc.deserialize<asgt_v2_dataset_service_pb.BatchCreateExampleRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IDatasetServiceService_ITruncateDataset extends grpc.MethodDefinition<asgt_v2_dataset_service_pb.TruncateDatasetRequest, google_protobuf_empty_pb.Empty> {
    path: "/asgt.v2.DatasetService/TruncateDataset";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<asgt_v2_dataset_service_pb.TruncateDatasetRequest>;
    requestDeserialize: grpc.deserialize<asgt_v2_dataset_service_pb.TruncateDatasetRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IDatasetServiceService_IGetDatasetTrainings extends grpc.MethodDefinition<asgt_v2_dataset_service_pb.GetDatasetTrainingsRequest, asgt_v2_dataset_service_pb.TrainingsResponse> {
    path: "/asgt.v2.DatasetService/GetDatasetTrainings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<asgt_v2_dataset_service_pb.GetDatasetTrainingsRequest>;
    requestDeserialize: grpc.deserialize<asgt_v2_dataset_service_pb.GetDatasetTrainingsRequest>;
    responseSerialize: grpc.serialize<asgt_v2_dataset_service_pb.TrainingsResponse>;
    responseDeserialize: grpc.deserialize<asgt_v2_dataset_service_pb.TrainingsResponse>;
}
interface IDatasetServiceService_IGetTrainings extends grpc.MethodDefinition<asgt_v2_dataset_service_pb.GetTrainingsRequest, asgt_v2_dataset_service_pb.TrainingsResponse> {
    path: "/asgt.v2.DatasetService/GetTrainings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<asgt_v2_dataset_service_pb.GetTrainingsRequest>;
    requestDeserialize: grpc.deserialize<asgt_v2_dataset_service_pb.GetTrainingsRequest>;
    responseSerialize: grpc.serialize<asgt_v2_dataset_service_pb.TrainingsResponse>;
    responseDeserialize: grpc.deserialize<asgt_v2_dataset_service_pb.TrainingsResponse>;
}

export const DatasetServiceService: IDatasetServiceService;

export interface IDatasetServiceServer {
    getDataset: grpc.handleUnaryCall<asgt_v2_dataset_service_pb.GetDatasetRequest, asgt_type_dataset_pb.Dataset>;
    createDataset: grpc.handleUnaryCall<asgt_v2_dataset_service_pb.CreateDatasetRequest, google_protobuf_empty_pb.Empty>;
    createOrUpdateDataset: grpc.handleUnaryCall<asgt_v2_dataset_service_pb.CreateOrUpdateDatasetRequest, google_protobuf_empty_pb.Empty>;
    deleteDataset: grpc.handleUnaryCall<asgt_v2_dataset_service_pb.DeleteDatasetRequest, asgt_type_dataset_pb.Dataset>;
    deleteTag: grpc.handleUnaryCall<asgt_v2_dataset_service_pb.DeleteTagRequest, google_protobuf_empty_pb.Empty>;
    createExample: grpc.handleUnaryCall<asgt_v2_dataset_service_pb.CreateExampleRequest, google_protobuf_empty_pb.Empty>;
    createOrUpdateExample: grpc.handleUnaryCall<asgt_v2_dataset_service_pb.CreateOrUpdateExampleRequest, google_protobuf_empty_pb.Empty>;
    batchCreateExample: grpc.handleUnaryCall<asgt_v2_dataset_service_pb.BatchCreateExampleRequest, google_protobuf_empty_pb.Empty>;
    truncateDataset: grpc.handleUnaryCall<asgt_v2_dataset_service_pb.TruncateDatasetRequest, google_protobuf_empty_pb.Empty>;
    getDatasetTrainings: grpc.handleUnaryCall<asgt_v2_dataset_service_pb.GetDatasetTrainingsRequest, asgt_v2_dataset_service_pb.TrainingsResponse>;
    getTrainings: grpc.handleUnaryCall<asgt_v2_dataset_service_pb.GetTrainingsRequest, asgt_v2_dataset_service_pb.TrainingsResponse>;
}

export interface IDatasetServiceClient {
    getDataset(request: asgt_v2_dataset_service_pb.GetDatasetRequest, callback: (error: grpc.ServiceError | null, response: asgt_type_dataset_pb.Dataset) => void): grpc.ClientUnaryCall;
    getDataset(request: asgt_v2_dataset_service_pb.GetDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: asgt_type_dataset_pb.Dataset) => void): grpc.ClientUnaryCall;
    getDataset(request: asgt_v2_dataset_service_pb.GetDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: asgt_type_dataset_pb.Dataset) => void): grpc.ClientUnaryCall;
    createDataset(request: asgt_v2_dataset_service_pb.CreateDatasetRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createDataset(request: asgt_v2_dataset_service_pb.CreateDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createDataset(request: asgt_v2_dataset_service_pb.CreateDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createOrUpdateDataset(request: asgt_v2_dataset_service_pb.CreateOrUpdateDatasetRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createOrUpdateDataset(request: asgt_v2_dataset_service_pb.CreateOrUpdateDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createOrUpdateDataset(request: asgt_v2_dataset_service_pb.CreateOrUpdateDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteDataset(request: asgt_v2_dataset_service_pb.DeleteDatasetRequest, callback: (error: grpc.ServiceError | null, response: asgt_type_dataset_pb.Dataset) => void): grpc.ClientUnaryCall;
    deleteDataset(request: asgt_v2_dataset_service_pb.DeleteDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: asgt_type_dataset_pb.Dataset) => void): grpc.ClientUnaryCall;
    deleteDataset(request: asgt_v2_dataset_service_pb.DeleteDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: asgt_type_dataset_pb.Dataset) => void): grpc.ClientUnaryCall;
    deleteTag(request: asgt_v2_dataset_service_pb.DeleteTagRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteTag(request: asgt_v2_dataset_service_pb.DeleteTagRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteTag(request: asgt_v2_dataset_service_pb.DeleteTagRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createExample(request: asgt_v2_dataset_service_pb.CreateExampleRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createExample(request: asgt_v2_dataset_service_pb.CreateExampleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createExample(request: asgt_v2_dataset_service_pb.CreateExampleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createOrUpdateExample(request: asgt_v2_dataset_service_pb.CreateOrUpdateExampleRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createOrUpdateExample(request: asgt_v2_dataset_service_pb.CreateOrUpdateExampleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createOrUpdateExample(request: asgt_v2_dataset_service_pb.CreateOrUpdateExampleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    batchCreateExample(request: asgt_v2_dataset_service_pb.BatchCreateExampleRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    batchCreateExample(request: asgt_v2_dataset_service_pb.BatchCreateExampleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    batchCreateExample(request: asgt_v2_dataset_service_pb.BatchCreateExampleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    truncateDataset(request: asgt_v2_dataset_service_pb.TruncateDatasetRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    truncateDataset(request: asgt_v2_dataset_service_pb.TruncateDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    truncateDataset(request: asgt_v2_dataset_service_pb.TruncateDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getDatasetTrainings(request: asgt_v2_dataset_service_pb.GetDatasetTrainingsRequest, callback: (error: grpc.ServiceError | null, response: asgt_v2_dataset_service_pb.TrainingsResponse) => void): grpc.ClientUnaryCall;
    getDatasetTrainings(request: asgt_v2_dataset_service_pb.GetDatasetTrainingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: asgt_v2_dataset_service_pb.TrainingsResponse) => void): grpc.ClientUnaryCall;
    getDatasetTrainings(request: asgt_v2_dataset_service_pb.GetDatasetTrainingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: asgt_v2_dataset_service_pb.TrainingsResponse) => void): grpc.ClientUnaryCall;
    getTrainings(request: asgt_v2_dataset_service_pb.GetTrainingsRequest, callback: (error: grpc.ServiceError | null, response: asgt_v2_dataset_service_pb.TrainingsResponse) => void): grpc.ClientUnaryCall;
    getTrainings(request: asgt_v2_dataset_service_pb.GetTrainingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: asgt_v2_dataset_service_pb.TrainingsResponse) => void): grpc.ClientUnaryCall;
    getTrainings(request: asgt_v2_dataset_service_pb.GetTrainingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: asgt_v2_dataset_service_pb.TrainingsResponse) => void): grpc.ClientUnaryCall;
}

export class DatasetServiceClient extends grpc.Client implements IDatasetServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getDataset(request: asgt_v2_dataset_service_pb.GetDatasetRequest, callback: (error: grpc.ServiceError | null, response: asgt_type_dataset_pb.Dataset) => void): grpc.ClientUnaryCall;
    public getDataset(request: asgt_v2_dataset_service_pb.GetDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: asgt_type_dataset_pb.Dataset) => void): grpc.ClientUnaryCall;
    public getDataset(request: asgt_v2_dataset_service_pb.GetDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: asgt_type_dataset_pb.Dataset) => void): grpc.ClientUnaryCall;
    public createDataset(request: asgt_v2_dataset_service_pb.CreateDatasetRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createDataset(request: asgt_v2_dataset_service_pb.CreateDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createDataset(request: asgt_v2_dataset_service_pb.CreateDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createOrUpdateDataset(request: asgt_v2_dataset_service_pb.CreateOrUpdateDatasetRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createOrUpdateDataset(request: asgt_v2_dataset_service_pb.CreateOrUpdateDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createOrUpdateDataset(request: asgt_v2_dataset_service_pb.CreateOrUpdateDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteDataset(request: asgt_v2_dataset_service_pb.DeleteDatasetRequest, callback: (error: grpc.ServiceError | null, response: asgt_type_dataset_pb.Dataset) => void): grpc.ClientUnaryCall;
    public deleteDataset(request: asgt_v2_dataset_service_pb.DeleteDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: asgt_type_dataset_pb.Dataset) => void): grpc.ClientUnaryCall;
    public deleteDataset(request: asgt_v2_dataset_service_pb.DeleteDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: asgt_type_dataset_pb.Dataset) => void): grpc.ClientUnaryCall;
    public deleteTag(request: asgt_v2_dataset_service_pb.DeleteTagRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteTag(request: asgt_v2_dataset_service_pb.DeleteTagRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteTag(request: asgt_v2_dataset_service_pb.DeleteTagRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createExample(request: asgt_v2_dataset_service_pb.CreateExampleRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createExample(request: asgt_v2_dataset_service_pb.CreateExampleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createExample(request: asgt_v2_dataset_service_pb.CreateExampleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createOrUpdateExample(request: asgt_v2_dataset_service_pb.CreateOrUpdateExampleRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createOrUpdateExample(request: asgt_v2_dataset_service_pb.CreateOrUpdateExampleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createOrUpdateExample(request: asgt_v2_dataset_service_pb.CreateOrUpdateExampleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public batchCreateExample(request: asgt_v2_dataset_service_pb.BatchCreateExampleRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public batchCreateExample(request: asgt_v2_dataset_service_pb.BatchCreateExampleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public batchCreateExample(request: asgt_v2_dataset_service_pb.BatchCreateExampleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public truncateDataset(request: asgt_v2_dataset_service_pb.TruncateDatasetRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public truncateDataset(request: asgt_v2_dataset_service_pb.TruncateDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public truncateDataset(request: asgt_v2_dataset_service_pb.TruncateDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getDatasetTrainings(request: asgt_v2_dataset_service_pb.GetDatasetTrainingsRequest, callback: (error: grpc.ServiceError | null, response: asgt_v2_dataset_service_pb.TrainingsResponse) => void): grpc.ClientUnaryCall;
    public getDatasetTrainings(request: asgt_v2_dataset_service_pb.GetDatasetTrainingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: asgt_v2_dataset_service_pb.TrainingsResponse) => void): grpc.ClientUnaryCall;
    public getDatasetTrainings(request: asgt_v2_dataset_service_pb.GetDatasetTrainingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: asgt_v2_dataset_service_pb.TrainingsResponse) => void): grpc.ClientUnaryCall;
    public getTrainings(request: asgt_v2_dataset_service_pb.GetTrainingsRequest, callback: (error: grpc.ServiceError | null, response: asgt_v2_dataset_service_pb.TrainingsResponse) => void): grpc.ClientUnaryCall;
    public getTrainings(request: asgt_v2_dataset_service_pb.GetTrainingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: asgt_v2_dataset_service_pb.TrainingsResponse) => void): grpc.ClientUnaryCall;
    public getTrainings(request: asgt_v2_dataset_service_pb.GetTrainingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: asgt_v2_dataset_service_pb.TrainingsResponse) => void): grpc.ClientUnaryCall;
}
