// package: asgt.dataservice.v1
// file: asgt/data/v1/data_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as asgt_data_v1_data_service_pb from "../../../asgt/data/v1/data_service_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as asgt_type_retention_policy_pb from "../../../asgt/type/retention_policy_pb";
import * as asgt_type_model_pb from "../../../asgt/type/model_pb";
import * as asgt_type_dataset_pb from "../../../asgt/type/dataset_pb";
import * as asgt_type_sample_pb from "../../../asgt/type/sample_pb";
import * as ssn_dataservice_v1_dataservice_pb from "../../../ssn/dataservice/v1/dataservice_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IDataServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createDataset: IDataServiceService_ICreateDataset;
    appendData: IDataServiceService_IAppendData;
    deleteData: IDataServiceService_IDeleteData;
    getInfo: IDataServiceService_IGetInfo;
    updateDataset: IDataServiceService_IUpdateDataset;
    registerQueryStats: IDataServiceService_IRegisterQueryStats;
    callsPerMonthMetric: IDataServiceService_ICallsPerMonthMetric;
    calculateMetrics: IDataServiceService_ICalculateMetrics;
}

interface IDataServiceService_ICreateDataset extends grpc.MethodDefinition<asgt_data_v1_data_service_pb.CreateRequest, google_protobuf_empty_pb.Empty> {
    path: "/asgt.dataservice.v1.DataService/CreateDataset";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<asgt_data_v1_data_service_pb.CreateRequest>;
    requestDeserialize: grpc.deserialize<asgt_data_v1_data_service_pb.CreateRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IDataServiceService_IAppendData extends grpc.MethodDefinition<asgt_data_v1_data_service_pb.AppendDataRequest, google_protobuf_empty_pb.Empty> {
    path: "/asgt.dataservice.v1.DataService/AppendData";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<asgt_data_v1_data_service_pb.AppendDataRequest>;
    requestDeserialize: grpc.deserialize<asgt_data_v1_data_service_pb.AppendDataRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IDataServiceService_IDeleteData extends grpc.MethodDefinition<asgt_data_v1_data_service_pb.DeleteRequest, google_protobuf_empty_pb.Empty> {
    path: "/asgt.dataservice.v1.DataService/DeleteData";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<asgt_data_v1_data_service_pb.DeleteRequest>;
    requestDeserialize: grpc.deserialize<asgt_data_v1_data_service_pb.DeleteRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IDataServiceService_IGetInfo extends grpc.MethodDefinition<asgt_data_v1_data_service_pb.GetInfoRequest, asgt_data_v1_data_service_pb.GetInfoResponse> {
    path: "/asgt.dataservice.v1.DataService/GetInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<asgt_data_v1_data_service_pb.GetInfoRequest>;
    requestDeserialize: grpc.deserialize<asgt_data_v1_data_service_pb.GetInfoRequest>;
    responseSerialize: grpc.serialize<asgt_data_v1_data_service_pb.GetInfoResponse>;
    responseDeserialize: grpc.deserialize<asgt_data_v1_data_service_pb.GetInfoResponse>;
}
interface IDataServiceService_IUpdateDataset extends grpc.MethodDefinition<asgt_data_v1_data_service_pb.UpdateDatasetRequest, google_protobuf_empty_pb.Empty> {
    path: "/asgt.dataservice.v1.DataService/UpdateDataset";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<asgt_data_v1_data_service_pb.UpdateDatasetRequest>;
    requestDeserialize: grpc.deserialize<asgt_data_v1_data_service_pb.UpdateDatasetRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IDataServiceService_IRegisterQueryStats extends grpc.MethodDefinition<asgt_data_v1_data_service_pb.RegisterQueryStatsRequest, google_protobuf_empty_pb.Empty> {
    path: "/asgt.dataservice.v1.DataService/RegisterQueryStats";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<asgt_data_v1_data_service_pb.RegisterQueryStatsRequest>;
    requestDeserialize: grpc.deserialize<asgt_data_v1_data_service_pb.RegisterQueryStatsRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IDataServiceService_ICallsPerMonthMetric extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, ssn_dataservice_v1_dataservice_pb.CallsPerMonthResponse> {
    path: "/asgt.dataservice.v1.DataService/CallsPerMonthMetric";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<ssn_dataservice_v1_dataservice_pb.CallsPerMonthResponse>;
    responseDeserialize: grpc.deserialize<ssn_dataservice_v1_dataservice_pb.CallsPerMonthResponse>;
}
interface IDataServiceService_ICalculateMetrics extends grpc.MethodDefinition<asgt_data_v1_data_service_pb.CalculateMetricsRequest, asgt_data_v1_data_service_pb.CalculateMetricsResponse> {
    path: "/asgt.dataservice.v1.DataService/CalculateMetrics";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<asgt_data_v1_data_service_pb.CalculateMetricsRequest>;
    requestDeserialize: grpc.deserialize<asgt_data_v1_data_service_pb.CalculateMetricsRequest>;
    responseSerialize: grpc.serialize<asgt_data_v1_data_service_pb.CalculateMetricsResponse>;
    responseDeserialize: grpc.deserialize<asgt_data_v1_data_service_pb.CalculateMetricsResponse>;
}

export const DataServiceService: IDataServiceService;

export interface IDataServiceServer {
    createDataset: grpc.handleUnaryCall<asgt_data_v1_data_service_pb.CreateRequest, google_protobuf_empty_pb.Empty>;
    appendData: grpc.handleUnaryCall<asgt_data_v1_data_service_pb.AppendDataRequest, google_protobuf_empty_pb.Empty>;
    deleteData: grpc.handleUnaryCall<asgt_data_v1_data_service_pb.DeleteRequest, google_protobuf_empty_pb.Empty>;
    getInfo: grpc.handleUnaryCall<asgt_data_v1_data_service_pb.GetInfoRequest, asgt_data_v1_data_service_pb.GetInfoResponse>;
    updateDataset: grpc.handleUnaryCall<asgt_data_v1_data_service_pb.UpdateDatasetRequest, google_protobuf_empty_pb.Empty>;
    registerQueryStats: grpc.handleUnaryCall<asgt_data_v1_data_service_pb.RegisterQueryStatsRequest, google_protobuf_empty_pb.Empty>;
    callsPerMonthMetric: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, ssn_dataservice_v1_dataservice_pb.CallsPerMonthResponse>;
    calculateMetrics: grpc.handleUnaryCall<asgt_data_v1_data_service_pb.CalculateMetricsRequest, asgt_data_v1_data_service_pb.CalculateMetricsResponse>;
}

export interface IDataServiceClient {
    createDataset(request: asgt_data_v1_data_service_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createDataset(request: asgt_data_v1_data_service_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createDataset(request: asgt_data_v1_data_service_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    appendData(request: asgt_data_v1_data_service_pb.AppendDataRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    appendData(request: asgt_data_v1_data_service_pb.AppendDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    appendData(request: asgt_data_v1_data_service_pb.AppendDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteData(request: asgt_data_v1_data_service_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteData(request: asgt_data_v1_data_service_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteData(request: asgt_data_v1_data_service_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getInfo(request: asgt_data_v1_data_service_pb.GetInfoRequest, callback: (error: grpc.ServiceError | null, response: asgt_data_v1_data_service_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    getInfo(request: asgt_data_v1_data_service_pb.GetInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: asgt_data_v1_data_service_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    getInfo(request: asgt_data_v1_data_service_pb.GetInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: asgt_data_v1_data_service_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    updateDataset(request: asgt_data_v1_data_service_pb.UpdateDatasetRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateDataset(request: asgt_data_v1_data_service_pb.UpdateDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateDataset(request: asgt_data_v1_data_service_pb.UpdateDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    registerQueryStats(request: asgt_data_v1_data_service_pb.RegisterQueryStatsRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    registerQueryStats(request: asgt_data_v1_data_service_pb.RegisterQueryStatsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    registerQueryStats(request: asgt_data_v1_data_service_pb.RegisterQueryStatsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    callsPerMonthMetric(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: ssn_dataservice_v1_dataservice_pb.CallsPerMonthResponse) => void): grpc.ClientUnaryCall;
    callsPerMonthMetric(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ssn_dataservice_v1_dataservice_pb.CallsPerMonthResponse) => void): grpc.ClientUnaryCall;
    callsPerMonthMetric(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ssn_dataservice_v1_dataservice_pb.CallsPerMonthResponse) => void): grpc.ClientUnaryCall;
    calculateMetrics(request: asgt_data_v1_data_service_pb.CalculateMetricsRequest, callback: (error: grpc.ServiceError | null, response: asgt_data_v1_data_service_pb.CalculateMetricsResponse) => void): grpc.ClientUnaryCall;
    calculateMetrics(request: asgt_data_v1_data_service_pb.CalculateMetricsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: asgt_data_v1_data_service_pb.CalculateMetricsResponse) => void): grpc.ClientUnaryCall;
    calculateMetrics(request: asgt_data_v1_data_service_pb.CalculateMetricsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: asgt_data_v1_data_service_pb.CalculateMetricsResponse) => void): grpc.ClientUnaryCall;
}

export class DataServiceClient extends grpc.Client implements IDataServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createDataset(request: asgt_data_v1_data_service_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createDataset(request: asgt_data_v1_data_service_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createDataset(request: asgt_data_v1_data_service_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public appendData(request: asgt_data_v1_data_service_pb.AppendDataRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public appendData(request: asgt_data_v1_data_service_pb.AppendDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public appendData(request: asgt_data_v1_data_service_pb.AppendDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteData(request: asgt_data_v1_data_service_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteData(request: asgt_data_v1_data_service_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteData(request: asgt_data_v1_data_service_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getInfo(request: asgt_data_v1_data_service_pb.GetInfoRequest, callback: (error: grpc.ServiceError | null, response: asgt_data_v1_data_service_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    public getInfo(request: asgt_data_v1_data_service_pb.GetInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: asgt_data_v1_data_service_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    public getInfo(request: asgt_data_v1_data_service_pb.GetInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: asgt_data_v1_data_service_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    public updateDataset(request: asgt_data_v1_data_service_pb.UpdateDatasetRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateDataset(request: asgt_data_v1_data_service_pb.UpdateDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateDataset(request: asgt_data_v1_data_service_pb.UpdateDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public registerQueryStats(request: asgt_data_v1_data_service_pb.RegisterQueryStatsRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public registerQueryStats(request: asgt_data_v1_data_service_pb.RegisterQueryStatsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public registerQueryStats(request: asgt_data_v1_data_service_pb.RegisterQueryStatsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public callsPerMonthMetric(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: ssn_dataservice_v1_dataservice_pb.CallsPerMonthResponse) => void): grpc.ClientUnaryCall;
    public callsPerMonthMetric(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ssn_dataservice_v1_dataservice_pb.CallsPerMonthResponse) => void): grpc.ClientUnaryCall;
    public callsPerMonthMetric(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ssn_dataservice_v1_dataservice_pb.CallsPerMonthResponse) => void): grpc.ClientUnaryCall;
    public calculateMetrics(request: asgt_data_v1_data_service_pb.CalculateMetricsRequest, callback: (error: grpc.ServiceError | null, response: asgt_data_v1_data_service_pb.CalculateMetricsResponse) => void): grpc.ClientUnaryCall;
    public calculateMetrics(request: asgt_data_v1_data_service_pb.CalculateMetricsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: asgt_data_v1_data_service_pb.CalculateMetricsResponse) => void): grpc.ClientUnaryCall;
    public calculateMetrics(request: asgt_data_v1_data_service_pb.CalculateMetricsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: asgt_data_v1_data_service_pb.CalculateMetricsResponse) => void): grpc.ClientUnaryCall;
}
