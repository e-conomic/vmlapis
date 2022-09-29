// package: ssn.mlservice.v2
// file: ssn/mlservice/v2/mlservice.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ssn_mlservice_v2_mlservice_pb from "../../../ssn/mlservice/v2/mlservice_pb";
import * as google_type_date_pb from "../../../google/type/date_pb";
import * as ssn_mlservice_v2_example_pb from "../../../ssn/mlservice/v2/example_pb";
import * as ssn_type_candidate_pb from "../../../ssn/type/candidate_pb";
import * as ssn_type_text_annotation_pb from "../../../ssn/type/text_annotation_pb";

interface IMlServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    featureGen: IMlServiceService_IFeatureGen;
    predict: IMlServiceService_IPredict;
    featureGenPredict: IMlServiceService_IFeatureGenPredict;
}

interface IMlServiceService_IFeatureGen extends grpc.MethodDefinition<ssn_mlservice_v2_mlservice_pb.FeatureGenRequest, ssn_mlservice_v2_mlservice_pb.FeatureGenResponse> {
    path: "/ssn.mlservice.v2.MlService/FeatureGen";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ssn_mlservice_v2_mlservice_pb.FeatureGenRequest>;
    requestDeserialize: grpc.deserialize<ssn_mlservice_v2_mlservice_pb.FeatureGenRequest>;
    responseSerialize: grpc.serialize<ssn_mlservice_v2_mlservice_pb.FeatureGenResponse>;
    responseDeserialize: grpc.deserialize<ssn_mlservice_v2_mlservice_pb.FeatureGenResponse>;
}
interface IMlServiceService_IPredict extends grpc.MethodDefinition<ssn_mlservice_v2_mlservice_pb.PredictRequest, ssn_mlservice_v2_mlservice_pb.PredictResponse> {
    path: "/ssn.mlservice.v2.MlService/Predict";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ssn_mlservice_v2_mlservice_pb.PredictRequest>;
    requestDeserialize: grpc.deserialize<ssn_mlservice_v2_mlservice_pb.PredictRequest>;
    responseSerialize: grpc.serialize<ssn_mlservice_v2_mlservice_pb.PredictResponse>;
    responseDeserialize: grpc.deserialize<ssn_mlservice_v2_mlservice_pb.PredictResponse>;
}
interface IMlServiceService_IFeatureGenPredict extends grpc.MethodDefinition<ssn_mlservice_v2_mlservice_pb.FeatureGenPredictRequest, ssn_mlservice_v2_mlservice_pb.PredictResponse> {
    path: "/ssn.mlservice.v2.MlService/FeatureGenPredict";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ssn_mlservice_v2_mlservice_pb.FeatureGenPredictRequest>;
    requestDeserialize: grpc.deserialize<ssn_mlservice_v2_mlservice_pb.FeatureGenPredictRequest>;
    responseSerialize: grpc.serialize<ssn_mlservice_v2_mlservice_pb.PredictResponse>;
    responseDeserialize: grpc.deserialize<ssn_mlservice_v2_mlservice_pb.PredictResponse>;
}

export const MlServiceService: IMlServiceService;

export interface IMlServiceServer {
    featureGen: grpc.handleUnaryCall<ssn_mlservice_v2_mlservice_pb.FeatureGenRequest, ssn_mlservice_v2_mlservice_pb.FeatureGenResponse>;
    predict: grpc.handleUnaryCall<ssn_mlservice_v2_mlservice_pb.PredictRequest, ssn_mlservice_v2_mlservice_pb.PredictResponse>;
    featureGenPredict: grpc.handleUnaryCall<ssn_mlservice_v2_mlservice_pb.FeatureGenPredictRequest, ssn_mlservice_v2_mlservice_pb.PredictResponse>;
}

export interface IMlServiceClient {
    featureGen(request: ssn_mlservice_v2_mlservice_pb.FeatureGenRequest, callback: (error: grpc.ServiceError | null, response: ssn_mlservice_v2_mlservice_pb.FeatureGenResponse) => void): grpc.ClientUnaryCall;
    featureGen(request: ssn_mlservice_v2_mlservice_pb.FeatureGenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ssn_mlservice_v2_mlservice_pb.FeatureGenResponse) => void): grpc.ClientUnaryCall;
    featureGen(request: ssn_mlservice_v2_mlservice_pb.FeatureGenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ssn_mlservice_v2_mlservice_pb.FeatureGenResponse) => void): grpc.ClientUnaryCall;
    predict(request: ssn_mlservice_v2_mlservice_pb.PredictRequest, callback: (error: grpc.ServiceError | null, response: ssn_mlservice_v2_mlservice_pb.PredictResponse) => void): grpc.ClientUnaryCall;
    predict(request: ssn_mlservice_v2_mlservice_pb.PredictRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ssn_mlservice_v2_mlservice_pb.PredictResponse) => void): grpc.ClientUnaryCall;
    predict(request: ssn_mlservice_v2_mlservice_pb.PredictRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ssn_mlservice_v2_mlservice_pb.PredictResponse) => void): grpc.ClientUnaryCall;
    featureGenPredict(request: ssn_mlservice_v2_mlservice_pb.FeatureGenPredictRequest, callback: (error: grpc.ServiceError | null, response: ssn_mlservice_v2_mlservice_pb.PredictResponse) => void): grpc.ClientUnaryCall;
    featureGenPredict(request: ssn_mlservice_v2_mlservice_pb.FeatureGenPredictRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ssn_mlservice_v2_mlservice_pb.PredictResponse) => void): grpc.ClientUnaryCall;
    featureGenPredict(request: ssn_mlservice_v2_mlservice_pb.FeatureGenPredictRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ssn_mlservice_v2_mlservice_pb.PredictResponse) => void): grpc.ClientUnaryCall;
}

export class MlServiceClient extends grpc.Client implements IMlServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public featureGen(request: ssn_mlservice_v2_mlservice_pb.FeatureGenRequest, callback: (error: grpc.ServiceError | null, response: ssn_mlservice_v2_mlservice_pb.FeatureGenResponse) => void): grpc.ClientUnaryCall;
    public featureGen(request: ssn_mlservice_v2_mlservice_pb.FeatureGenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ssn_mlservice_v2_mlservice_pb.FeatureGenResponse) => void): grpc.ClientUnaryCall;
    public featureGen(request: ssn_mlservice_v2_mlservice_pb.FeatureGenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ssn_mlservice_v2_mlservice_pb.FeatureGenResponse) => void): grpc.ClientUnaryCall;
    public predict(request: ssn_mlservice_v2_mlservice_pb.PredictRequest, callback: (error: grpc.ServiceError | null, response: ssn_mlservice_v2_mlservice_pb.PredictResponse) => void): grpc.ClientUnaryCall;
    public predict(request: ssn_mlservice_v2_mlservice_pb.PredictRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ssn_mlservice_v2_mlservice_pb.PredictResponse) => void): grpc.ClientUnaryCall;
    public predict(request: ssn_mlservice_v2_mlservice_pb.PredictRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ssn_mlservice_v2_mlservice_pb.PredictResponse) => void): grpc.ClientUnaryCall;
    public featureGenPredict(request: ssn_mlservice_v2_mlservice_pb.FeatureGenPredictRequest, callback: (error: grpc.ServiceError | null, response: ssn_mlservice_v2_mlservice_pb.PredictResponse) => void): grpc.ClientUnaryCall;
    public featureGenPredict(request: ssn_mlservice_v2_mlservice_pb.FeatureGenPredictRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ssn_mlservice_v2_mlservice_pb.PredictResponse) => void): grpc.ClientUnaryCall;
    public featureGenPredict(request: ssn_mlservice_v2_mlservice_pb.FeatureGenPredictRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ssn_mlservice_v2_mlservice_pb.PredictResponse) => void): grpc.ClientUnaryCall;
}
