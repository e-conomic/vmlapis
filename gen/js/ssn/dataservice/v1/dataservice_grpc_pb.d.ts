// package: ssn.dataservice.v1
// file: ssn/dataservice/v1/dataservice.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ssn_dataservice_v1_dataservice_pb from "../../../ssn/dataservice/v1/dataservice_pb";
import * as gen_bq_schema_bq_field_pb from "../../../gen_bq_schema/bq_field_pb";
import * as gen_bq_schema_bq_table_pb from "../../../gen_bq_schema/bq_table_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_type_date_pb from "../../../google/type/date_pb";
import * as ssn_type_candidate_pb from "../../../ssn/type/candidate_pb";
import * as ssn_type_text_annotation_pb from "../../../ssn/type/text_annotation_pb";
import * as ssn_type_tier_pb from "../../../ssn/type/tier_pb";

interface IDataServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createDocument: IDataServiceService_ICreateDocument;
    readDocument: IDataServiceService_IReadDocument;
    prepareFeedback: IDataServiceService_IPrepareFeedback;
    feedback: IDataServiceService_IFeedback;
    calculateMetrics: IDataServiceService_ICalculateMetrics;
    delete: IDataServiceService_IDelete;
    callsPerMonthMetric: IDataServiceService_ICallsPerMonthMetric;
}

interface IDataServiceService_ICreateDocument extends grpc.MethodDefinition<ssn_dataservice_v1_dataservice_pb.CreateDocumentRequest, ssn_dataservice_v1_dataservice_pb.CreateDocumentResponse> {
    path: "/ssn.dataservice.v1.DataService/CreateDocument";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ssn_dataservice_v1_dataservice_pb.CreateDocumentRequest>;
    requestDeserialize: grpc.deserialize<ssn_dataservice_v1_dataservice_pb.CreateDocumentRequest>;
    responseSerialize: grpc.serialize<ssn_dataservice_v1_dataservice_pb.CreateDocumentResponse>;
    responseDeserialize: grpc.deserialize<ssn_dataservice_v1_dataservice_pb.CreateDocumentResponse>;
}
interface IDataServiceService_IReadDocument extends grpc.MethodDefinition<ssn_dataservice_v1_dataservice_pb.ReadDocumentRequest, ssn_dataservice_v1_dataservice_pb.ReadDocumentResponse> {
    path: "/ssn.dataservice.v1.DataService/ReadDocument";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ssn_dataservice_v1_dataservice_pb.ReadDocumentRequest>;
    requestDeserialize: grpc.deserialize<ssn_dataservice_v1_dataservice_pb.ReadDocumentRequest>;
    responseSerialize: grpc.serialize<ssn_dataservice_v1_dataservice_pb.ReadDocumentResponse>;
    responseDeserialize: grpc.deserialize<ssn_dataservice_v1_dataservice_pb.ReadDocumentResponse>;
}
interface IDataServiceService_IPrepareFeedback extends grpc.MethodDefinition<ssn_dataservice_v1_dataservice_pb.PrepareFeedbackRequest, google_protobuf_empty_pb.Empty> {
    path: "/ssn.dataservice.v1.DataService/PrepareFeedback";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ssn_dataservice_v1_dataservice_pb.PrepareFeedbackRequest>;
    requestDeserialize: grpc.deserialize<ssn_dataservice_v1_dataservice_pb.PrepareFeedbackRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IDataServiceService_IFeedback extends grpc.MethodDefinition<ssn_dataservice_v1_dataservice_pb.FeedbackRequest, google_protobuf_empty_pb.Empty> {
    path: "/ssn.dataservice.v1.DataService/Feedback";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ssn_dataservice_v1_dataservice_pb.FeedbackRequest>;
    requestDeserialize: grpc.deserialize<ssn_dataservice_v1_dataservice_pb.FeedbackRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IDataServiceService_ICalculateMetrics extends grpc.MethodDefinition<ssn_dataservice_v1_dataservice_pb.MetricsRequest, ssn_dataservice_v1_dataservice_pb.FeedbackMetrics> {
    path: "/ssn.dataservice.v1.DataService/CalculateMetrics";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ssn_dataservice_v1_dataservice_pb.MetricsRequest>;
    requestDeserialize: grpc.deserialize<ssn_dataservice_v1_dataservice_pb.MetricsRequest>;
    responseSerialize: grpc.serialize<ssn_dataservice_v1_dataservice_pb.FeedbackMetrics>;
    responseDeserialize: grpc.deserialize<ssn_dataservice_v1_dataservice_pb.FeedbackMetrics>;
}
interface IDataServiceService_IDelete extends grpc.MethodDefinition<ssn_dataservice_v1_dataservice_pb.DeleteRequest, google_protobuf_empty_pb.Empty> {
    path: "/ssn.dataservice.v1.DataService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ssn_dataservice_v1_dataservice_pb.DeleteRequest>;
    requestDeserialize: grpc.deserialize<ssn_dataservice_v1_dataservice_pb.DeleteRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IDataServiceService_ICallsPerMonthMetric extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, ssn_dataservice_v1_dataservice_pb.CallsPerMonthResponse> {
    path: "/ssn.dataservice.v1.DataService/CallsPerMonthMetric";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<ssn_dataservice_v1_dataservice_pb.CallsPerMonthResponse>;
    responseDeserialize: grpc.deserialize<ssn_dataservice_v1_dataservice_pb.CallsPerMonthResponse>;
}

export const DataServiceService: IDataServiceService;

export interface IDataServiceServer {
    createDocument: grpc.handleUnaryCall<ssn_dataservice_v1_dataservice_pb.CreateDocumentRequest, ssn_dataservice_v1_dataservice_pb.CreateDocumentResponse>;
    readDocument: grpc.handleUnaryCall<ssn_dataservice_v1_dataservice_pb.ReadDocumentRequest, ssn_dataservice_v1_dataservice_pb.ReadDocumentResponse>;
    prepareFeedback: grpc.handleUnaryCall<ssn_dataservice_v1_dataservice_pb.PrepareFeedbackRequest, google_protobuf_empty_pb.Empty>;
    feedback: grpc.handleUnaryCall<ssn_dataservice_v1_dataservice_pb.FeedbackRequest, google_protobuf_empty_pb.Empty>;
    calculateMetrics: grpc.handleUnaryCall<ssn_dataservice_v1_dataservice_pb.MetricsRequest, ssn_dataservice_v1_dataservice_pb.FeedbackMetrics>;
    delete: grpc.handleUnaryCall<ssn_dataservice_v1_dataservice_pb.DeleteRequest, google_protobuf_empty_pb.Empty>;
    callsPerMonthMetric: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, ssn_dataservice_v1_dataservice_pb.CallsPerMonthResponse>;
}

export interface IDataServiceClient {
    createDocument(request: ssn_dataservice_v1_dataservice_pb.CreateDocumentRequest, callback: (error: grpc.ServiceError | null, response: ssn_dataservice_v1_dataservice_pb.CreateDocumentResponse) => void): grpc.ClientUnaryCall;
    createDocument(request: ssn_dataservice_v1_dataservice_pb.CreateDocumentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ssn_dataservice_v1_dataservice_pb.CreateDocumentResponse) => void): grpc.ClientUnaryCall;
    createDocument(request: ssn_dataservice_v1_dataservice_pb.CreateDocumentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ssn_dataservice_v1_dataservice_pb.CreateDocumentResponse) => void): grpc.ClientUnaryCall;
    readDocument(request: ssn_dataservice_v1_dataservice_pb.ReadDocumentRequest, callback: (error: grpc.ServiceError | null, response: ssn_dataservice_v1_dataservice_pb.ReadDocumentResponse) => void): grpc.ClientUnaryCall;
    readDocument(request: ssn_dataservice_v1_dataservice_pb.ReadDocumentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ssn_dataservice_v1_dataservice_pb.ReadDocumentResponse) => void): grpc.ClientUnaryCall;
    readDocument(request: ssn_dataservice_v1_dataservice_pb.ReadDocumentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ssn_dataservice_v1_dataservice_pb.ReadDocumentResponse) => void): grpc.ClientUnaryCall;
    prepareFeedback(request: ssn_dataservice_v1_dataservice_pb.PrepareFeedbackRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    prepareFeedback(request: ssn_dataservice_v1_dataservice_pb.PrepareFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    prepareFeedback(request: ssn_dataservice_v1_dataservice_pb.PrepareFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    feedback(request: ssn_dataservice_v1_dataservice_pb.FeedbackRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    feedback(request: ssn_dataservice_v1_dataservice_pb.FeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    feedback(request: ssn_dataservice_v1_dataservice_pb.FeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    calculateMetrics(request: ssn_dataservice_v1_dataservice_pb.MetricsRequest, callback: (error: grpc.ServiceError | null, response: ssn_dataservice_v1_dataservice_pb.FeedbackMetrics) => void): grpc.ClientUnaryCall;
    calculateMetrics(request: ssn_dataservice_v1_dataservice_pb.MetricsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ssn_dataservice_v1_dataservice_pb.FeedbackMetrics) => void): grpc.ClientUnaryCall;
    calculateMetrics(request: ssn_dataservice_v1_dataservice_pb.MetricsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ssn_dataservice_v1_dataservice_pb.FeedbackMetrics) => void): grpc.ClientUnaryCall;
    delete(request: ssn_dataservice_v1_dataservice_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    delete(request: ssn_dataservice_v1_dataservice_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    delete(request: ssn_dataservice_v1_dataservice_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    callsPerMonthMetric(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: ssn_dataservice_v1_dataservice_pb.CallsPerMonthResponse) => void): grpc.ClientUnaryCall;
    callsPerMonthMetric(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ssn_dataservice_v1_dataservice_pb.CallsPerMonthResponse) => void): grpc.ClientUnaryCall;
    callsPerMonthMetric(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ssn_dataservice_v1_dataservice_pb.CallsPerMonthResponse) => void): grpc.ClientUnaryCall;
}

export class DataServiceClient extends grpc.Client implements IDataServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createDocument(request: ssn_dataservice_v1_dataservice_pb.CreateDocumentRequest, callback: (error: grpc.ServiceError | null, response: ssn_dataservice_v1_dataservice_pb.CreateDocumentResponse) => void): grpc.ClientUnaryCall;
    public createDocument(request: ssn_dataservice_v1_dataservice_pb.CreateDocumentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ssn_dataservice_v1_dataservice_pb.CreateDocumentResponse) => void): grpc.ClientUnaryCall;
    public createDocument(request: ssn_dataservice_v1_dataservice_pb.CreateDocumentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ssn_dataservice_v1_dataservice_pb.CreateDocumentResponse) => void): grpc.ClientUnaryCall;
    public readDocument(request: ssn_dataservice_v1_dataservice_pb.ReadDocumentRequest, callback: (error: grpc.ServiceError | null, response: ssn_dataservice_v1_dataservice_pb.ReadDocumentResponse) => void): grpc.ClientUnaryCall;
    public readDocument(request: ssn_dataservice_v1_dataservice_pb.ReadDocumentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ssn_dataservice_v1_dataservice_pb.ReadDocumentResponse) => void): grpc.ClientUnaryCall;
    public readDocument(request: ssn_dataservice_v1_dataservice_pb.ReadDocumentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ssn_dataservice_v1_dataservice_pb.ReadDocumentResponse) => void): grpc.ClientUnaryCall;
    public prepareFeedback(request: ssn_dataservice_v1_dataservice_pb.PrepareFeedbackRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public prepareFeedback(request: ssn_dataservice_v1_dataservice_pb.PrepareFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public prepareFeedback(request: ssn_dataservice_v1_dataservice_pb.PrepareFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public feedback(request: ssn_dataservice_v1_dataservice_pb.FeedbackRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public feedback(request: ssn_dataservice_v1_dataservice_pb.FeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public feedback(request: ssn_dataservice_v1_dataservice_pb.FeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public calculateMetrics(request: ssn_dataservice_v1_dataservice_pb.MetricsRequest, callback: (error: grpc.ServiceError | null, response: ssn_dataservice_v1_dataservice_pb.FeedbackMetrics) => void): grpc.ClientUnaryCall;
    public calculateMetrics(request: ssn_dataservice_v1_dataservice_pb.MetricsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ssn_dataservice_v1_dataservice_pb.FeedbackMetrics) => void): grpc.ClientUnaryCall;
    public calculateMetrics(request: ssn_dataservice_v1_dataservice_pb.MetricsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ssn_dataservice_v1_dataservice_pb.FeedbackMetrics) => void): grpc.ClientUnaryCall;
    public delete(request: ssn_dataservice_v1_dataservice_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public delete(request: ssn_dataservice_v1_dataservice_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public delete(request: ssn_dataservice_v1_dataservice_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public callsPerMonthMetric(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: ssn_dataservice_v1_dataservice_pb.CallsPerMonthResponse) => void): grpc.ClientUnaryCall;
    public callsPerMonthMetric(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ssn_dataservice_v1_dataservice_pb.CallsPerMonthResponse) => void): grpc.ClientUnaryCall;
    public callsPerMonthMetric(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ssn_dataservice_v1_dataservice_pb.CallsPerMonthResponse) => void): grpc.ClientUnaryCall;
}
