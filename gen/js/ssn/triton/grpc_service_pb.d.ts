import * as jspb from 'google-protobuf'

import * as ssn_triton_model_config_pb from '../../ssn/triton/model_config_pb';


export class ServerLiveRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerLiveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServerLiveRequest): ServerLiveRequest.AsObject;
  static serializeBinaryToWriter(message: ServerLiveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerLiveRequest;
  static deserializeBinaryFromReader(message: ServerLiveRequest, reader: jspb.BinaryReader): ServerLiveRequest;
}

export namespace ServerLiveRequest {
  export type AsObject = {
  }
}

export class ServerLiveResponse extends jspb.Message {
  getLive(): boolean;
  setLive(value: boolean): ServerLiveResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerLiveResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServerLiveResponse): ServerLiveResponse.AsObject;
  static serializeBinaryToWriter(message: ServerLiveResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerLiveResponse;
  static deserializeBinaryFromReader(message: ServerLiveResponse, reader: jspb.BinaryReader): ServerLiveResponse;
}

export namespace ServerLiveResponse {
  export type AsObject = {
    live: boolean,
  }
}

export class ServerReadyRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerReadyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServerReadyRequest): ServerReadyRequest.AsObject;
  static serializeBinaryToWriter(message: ServerReadyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerReadyRequest;
  static deserializeBinaryFromReader(message: ServerReadyRequest, reader: jspb.BinaryReader): ServerReadyRequest;
}

export namespace ServerReadyRequest {
  export type AsObject = {
  }
}

export class ServerReadyResponse extends jspb.Message {
  getReady(): boolean;
  setReady(value: boolean): ServerReadyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerReadyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServerReadyResponse): ServerReadyResponse.AsObject;
  static serializeBinaryToWriter(message: ServerReadyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerReadyResponse;
  static deserializeBinaryFromReader(message: ServerReadyResponse, reader: jspb.BinaryReader): ServerReadyResponse;
}

export namespace ServerReadyResponse {
  export type AsObject = {
    ready: boolean,
  }
}

export class ModelReadyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ModelReadyRequest;

  getVersion(): string;
  setVersion(value: string): ModelReadyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelReadyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ModelReadyRequest): ModelReadyRequest.AsObject;
  static serializeBinaryToWriter(message: ModelReadyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelReadyRequest;
  static deserializeBinaryFromReader(message: ModelReadyRequest, reader: jspb.BinaryReader): ModelReadyRequest;
}

export namespace ModelReadyRequest {
  export type AsObject = {
    name: string,
    version: string,
  }
}

export class ModelReadyResponse extends jspb.Message {
  getReady(): boolean;
  setReady(value: boolean): ModelReadyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelReadyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ModelReadyResponse): ModelReadyResponse.AsObject;
  static serializeBinaryToWriter(message: ModelReadyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelReadyResponse;
  static deserializeBinaryFromReader(message: ModelReadyResponse, reader: jspb.BinaryReader): ModelReadyResponse;
}

export namespace ModelReadyResponse {
  export type AsObject = {
    ready: boolean,
  }
}

export class ServerMetadataRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMetadataRequest): ServerMetadataRequest.AsObject;
  static serializeBinaryToWriter(message: ServerMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMetadataRequest;
  static deserializeBinaryFromReader(message: ServerMetadataRequest, reader: jspb.BinaryReader): ServerMetadataRequest;
}

export namespace ServerMetadataRequest {
  export type AsObject = {
  }
}

export class ServerMetadataResponse extends jspb.Message {
  getName(): string;
  setName(value: string): ServerMetadataResponse;

  getVersion(): string;
  setVersion(value: string): ServerMetadataResponse;

  getExtensionsList(): Array<string>;
  setExtensionsList(value: Array<string>): ServerMetadataResponse;
  clearExtensionsList(): ServerMetadataResponse;
  addExtensions(value: string, index?: number): ServerMetadataResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMetadataResponse): ServerMetadataResponse.AsObject;
  static serializeBinaryToWriter(message: ServerMetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMetadataResponse;
  static deserializeBinaryFromReader(message: ServerMetadataResponse, reader: jspb.BinaryReader): ServerMetadataResponse;
}

export namespace ServerMetadataResponse {
  export type AsObject = {
    name: string,
    version: string,
    extensionsList: Array<string>,
  }
}

export class ModelMetadataRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ModelMetadataRequest;

  getVersion(): string;
  setVersion(value: string): ModelMetadataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ModelMetadataRequest): ModelMetadataRequest.AsObject;
  static serializeBinaryToWriter(message: ModelMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelMetadataRequest;
  static deserializeBinaryFromReader(message: ModelMetadataRequest, reader: jspb.BinaryReader): ModelMetadataRequest;
}

export namespace ModelMetadataRequest {
  export type AsObject = {
    name: string,
    version: string,
  }
}

export class ModelMetadataResponse extends jspb.Message {
  getName(): string;
  setName(value: string): ModelMetadataResponse;

  getVersionsList(): Array<string>;
  setVersionsList(value: Array<string>): ModelMetadataResponse;
  clearVersionsList(): ModelMetadataResponse;
  addVersions(value: string, index?: number): ModelMetadataResponse;

  getPlatform(): string;
  setPlatform(value: string): ModelMetadataResponse;

  getInputsList(): Array<ModelMetadataResponse.TensorMetadata>;
  setInputsList(value: Array<ModelMetadataResponse.TensorMetadata>): ModelMetadataResponse;
  clearInputsList(): ModelMetadataResponse;
  addInputs(value?: ModelMetadataResponse.TensorMetadata, index?: number): ModelMetadataResponse.TensorMetadata;

  getOutputsList(): Array<ModelMetadataResponse.TensorMetadata>;
  setOutputsList(value: Array<ModelMetadataResponse.TensorMetadata>): ModelMetadataResponse;
  clearOutputsList(): ModelMetadataResponse;
  addOutputs(value?: ModelMetadataResponse.TensorMetadata, index?: number): ModelMetadataResponse.TensorMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelMetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ModelMetadataResponse): ModelMetadataResponse.AsObject;
  static serializeBinaryToWriter(message: ModelMetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelMetadataResponse;
  static deserializeBinaryFromReader(message: ModelMetadataResponse, reader: jspb.BinaryReader): ModelMetadataResponse;
}

export namespace ModelMetadataResponse {
  export type AsObject = {
    name: string,
    versionsList: Array<string>,
    platform: string,
    inputsList: Array<ModelMetadataResponse.TensorMetadata.AsObject>,
    outputsList: Array<ModelMetadataResponse.TensorMetadata.AsObject>,
  }

  export class TensorMetadata extends jspb.Message {
    getName(): string;
    setName(value: string): TensorMetadata;

    getDatatype(): string;
    setDatatype(value: string): TensorMetadata;

    getShapeList(): Array<number>;
    setShapeList(value: Array<number>): TensorMetadata;
    clearShapeList(): TensorMetadata;
    addShape(value: number, index?: number): TensorMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TensorMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: TensorMetadata): TensorMetadata.AsObject;
    static serializeBinaryToWriter(message: TensorMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TensorMetadata;
    static deserializeBinaryFromReader(message: TensorMetadata, reader: jspb.BinaryReader): TensorMetadata;
  }

  export namespace TensorMetadata {
    export type AsObject = {
      name: string,
      datatype: string,
      shapeList: Array<number>,
    }
  }

}

export class InferParameter extends jspb.Message {
  getBoolParam(): boolean;
  setBoolParam(value: boolean): InferParameter;

  getInt64Param(): number;
  setInt64Param(value: number): InferParameter;

  getStringParam(): string;
  setStringParam(value: string): InferParameter;

  getParameterChoiceCase(): InferParameter.ParameterChoiceCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InferParameter.AsObject;
  static toObject(includeInstance: boolean, msg: InferParameter): InferParameter.AsObject;
  static serializeBinaryToWriter(message: InferParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InferParameter;
  static deserializeBinaryFromReader(message: InferParameter, reader: jspb.BinaryReader): InferParameter;
}

export namespace InferParameter {
  export type AsObject = {
    boolParam: boolean,
    int64Param: number,
    stringParam: string,
  }

  export enum ParameterChoiceCase { 
    PARAMETER_CHOICE_NOT_SET = 0,
    BOOL_PARAM = 1,
    INT64_PARAM = 2,
    STRING_PARAM = 3,
  }
}

export class InferTensorContents extends jspb.Message {
  getBoolContentsList(): Array<boolean>;
  setBoolContentsList(value: Array<boolean>): InferTensorContents;
  clearBoolContentsList(): InferTensorContents;
  addBoolContents(value: boolean, index?: number): InferTensorContents;

  getIntContentsList(): Array<number>;
  setIntContentsList(value: Array<number>): InferTensorContents;
  clearIntContentsList(): InferTensorContents;
  addIntContents(value: number, index?: number): InferTensorContents;

  getInt64ContentsList(): Array<number>;
  setInt64ContentsList(value: Array<number>): InferTensorContents;
  clearInt64ContentsList(): InferTensorContents;
  addInt64Contents(value: number, index?: number): InferTensorContents;

  getUintContentsList(): Array<number>;
  setUintContentsList(value: Array<number>): InferTensorContents;
  clearUintContentsList(): InferTensorContents;
  addUintContents(value: number, index?: number): InferTensorContents;

  getUint64ContentsList(): Array<number>;
  setUint64ContentsList(value: Array<number>): InferTensorContents;
  clearUint64ContentsList(): InferTensorContents;
  addUint64Contents(value: number, index?: number): InferTensorContents;

  getFp32ContentsList(): Array<number>;
  setFp32ContentsList(value: Array<number>): InferTensorContents;
  clearFp32ContentsList(): InferTensorContents;
  addFp32Contents(value: number, index?: number): InferTensorContents;

  getFp64ContentsList(): Array<number>;
  setFp64ContentsList(value: Array<number>): InferTensorContents;
  clearFp64ContentsList(): InferTensorContents;
  addFp64Contents(value: number, index?: number): InferTensorContents;

  getBytesContentsList(): Array<Uint8Array | string>;
  setBytesContentsList(value: Array<Uint8Array | string>): InferTensorContents;
  clearBytesContentsList(): InferTensorContents;
  addBytesContents(value: Uint8Array | string, index?: number): InferTensorContents;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InferTensorContents.AsObject;
  static toObject(includeInstance: boolean, msg: InferTensorContents): InferTensorContents.AsObject;
  static serializeBinaryToWriter(message: InferTensorContents, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InferTensorContents;
  static deserializeBinaryFromReader(message: InferTensorContents, reader: jspb.BinaryReader): InferTensorContents;
}

export namespace InferTensorContents {
  export type AsObject = {
    boolContentsList: Array<boolean>,
    intContentsList: Array<number>,
    int64ContentsList: Array<number>,
    uintContentsList: Array<number>,
    uint64ContentsList: Array<number>,
    fp32ContentsList: Array<number>,
    fp64ContentsList: Array<number>,
    bytesContentsList: Array<Uint8Array | string>,
  }
}

export class ModelInferRequest extends jspb.Message {
  getModelName(): string;
  setModelName(value: string): ModelInferRequest;

  getModelVersion(): string;
  setModelVersion(value: string): ModelInferRequest;

  getId(): string;
  setId(value: string): ModelInferRequest;

  getParametersMap(): jspb.Map<string, InferParameter>;
  clearParametersMap(): ModelInferRequest;

  getInputsList(): Array<ModelInferRequest.InferInputTensor>;
  setInputsList(value: Array<ModelInferRequest.InferInputTensor>): ModelInferRequest;
  clearInputsList(): ModelInferRequest;
  addInputs(value?: ModelInferRequest.InferInputTensor, index?: number): ModelInferRequest.InferInputTensor;

  getOutputsList(): Array<ModelInferRequest.InferRequestedOutputTensor>;
  setOutputsList(value: Array<ModelInferRequest.InferRequestedOutputTensor>): ModelInferRequest;
  clearOutputsList(): ModelInferRequest;
  addOutputs(value?: ModelInferRequest.InferRequestedOutputTensor, index?: number): ModelInferRequest.InferRequestedOutputTensor;

  getRawInputContentsList(): Array<Uint8Array | string>;
  setRawInputContentsList(value: Array<Uint8Array | string>): ModelInferRequest;
  clearRawInputContentsList(): ModelInferRequest;
  addRawInputContents(value: Uint8Array | string, index?: number): ModelInferRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelInferRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ModelInferRequest): ModelInferRequest.AsObject;
  static serializeBinaryToWriter(message: ModelInferRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelInferRequest;
  static deserializeBinaryFromReader(message: ModelInferRequest, reader: jspb.BinaryReader): ModelInferRequest;
}

export namespace ModelInferRequest {
  export type AsObject = {
    modelName: string,
    modelVersion: string,
    id: string,
    parametersMap: Array<[string, InferParameter.AsObject]>,
    inputsList: Array<ModelInferRequest.InferInputTensor.AsObject>,
    outputsList: Array<ModelInferRequest.InferRequestedOutputTensor.AsObject>,
    rawInputContentsList: Array<Uint8Array | string>,
  }

  export class InferInputTensor extends jspb.Message {
    getName(): string;
    setName(value: string): InferInputTensor;

    getDatatype(): string;
    setDatatype(value: string): InferInputTensor;

    getShapeList(): Array<number>;
    setShapeList(value: Array<number>): InferInputTensor;
    clearShapeList(): InferInputTensor;
    addShape(value: number, index?: number): InferInputTensor;

    getParametersMap(): jspb.Map<string, InferParameter>;
    clearParametersMap(): InferInputTensor;

    getContents(): InferTensorContents | undefined;
    setContents(value?: InferTensorContents): InferInputTensor;
    hasContents(): boolean;
    clearContents(): InferInputTensor;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InferInputTensor.AsObject;
    static toObject(includeInstance: boolean, msg: InferInputTensor): InferInputTensor.AsObject;
    static serializeBinaryToWriter(message: InferInputTensor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InferInputTensor;
    static deserializeBinaryFromReader(message: InferInputTensor, reader: jspb.BinaryReader): InferInputTensor;
  }

  export namespace InferInputTensor {
    export type AsObject = {
      name: string,
      datatype: string,
      shapeList: Array<number>,
      parametersMap: Array<[string, InferParameter.AsObject]>,
      contents?: InferTensorContents.AsObject,
    }
  }


  export class InferRequestedOutputTensor extends jspb.Message {
    getName(): string;
    setName(value: string): InferRequestedOutputTensor;

    getParametersMap(): jspb.Map<string, InferParameter>;
    clearParametersMap(): InferRequestedOutputTensor;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InferRequestedOutputTensor.AsObject;
    static toObject(includeInstance: boolean, msg: InferRequestedOutputTensor): InferRequestedOutputTensor.AsObject;
    static serializeBinaryToWriter(message: InferRequestedOutputTensor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InferRequestedOutputTensor;
    static deserializeBinaryFromReader(message: InferRequestedOutputTensor, reader: jspb.BinaryReader): InferRequestedOutputTensor;
  }

  export namespace InferRequestedOutputTensor {
    export type AsObject = {
      name: string,
      parametersMap: Array<[string, InferParameter.AsObject]>,
    }
  }

}

export class ModelInferResponse extends jspb.Message {
  getModelName(): string;
  setModelName(value: string): ModelInferResponse;

  getModelVersion(): string;
  setModelVersion(value: string): ModelInferResponse;

  getId(): string;
  setId(value: string): ModelInferResponse;

  getParametersMap(): jspb.Map<string, InferParameter>;
  clearParametersMap(): ModelInferResponse;

  getOutputsList(): Array<ModelInferResponse.InferOutputTensor>;
  setOutputsList(value: Array<ModelInferResponse.InferOutputTensor>): ModelInferResponse;
  clearOutputsList(): ModelInferResponse;
  addOutputs(value?: ModelInferResponse.InferOutputTensor, index?: number): ModelInferResponse.InferOutputTensor;

  getRawOutputContentsList(): Array<Uint8Array | string>;
  setRawOutputContentsList(value: Array<Uint8Array | string>): ModelInferResponse;
  clearRawOutputContentsList(): ModelInferResponse;
  addRawOutputContents(value: Uint8Array | string, index?: number): ModelInferResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelInferResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ModelInferResponse): ModelInferResponse.AsObject;
  static serializeBinaryToWriter(message: ModelInferResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelInferResponse;
  static deserializeBinaryFromReader(message: ModelInferResponse, reader: jspb.BinaryReader): ModelInferResponse;
}

export namespace ModelInferResponse {
  export type AsObject = {
    modelName: string,
    modelVersion: string,
    id: string,
    parametersMap: Array<[string, InferParameter.AsObject]>,
    outputsList: Array<ModelInferResponse.InferOutputTensor.AsObject>,
    rawOutputContentsList: Array<Uint8Array | string>,
  }

  export class InferOutputTensor extends jspb.Message {
    getName(): string;
    setName(value: string): InferOutputTensor;

    getDatatype(): string;
    setDatatype(value: string): InferOutputTensor;

    getShapeList(): Array<number>;
    setShapeList(value: Array<number>): InferOutputTensor;
    clearShapeList(): InferOutputTensor;
    addShape(value: number, index?: number): InferOutputTensor;

    getParametersMap(): jspb.Map<string, InferParameter>;
    clearParametersMap(): InferOutputTensor;

    getContents(): InferTensorContents | undefined;
    setContents(value?: InferTensorContents): InferOutputTensor;
    hasContents(): boolean;
    clearContents(): InferOutputTensor;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InferOutputTensor.AsObject;
    static toObject(includeInstance: boolean, msg: InferOutputTensor): InferOutputTensor.AsObject;
    static serializeBinaryToWriter(message: InferOutputTensor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InferOutputTensor;
    static deserializeBinaryFromReader(message: InferOutputTensor, reader: jspb.BinaryReader): InferOutputTensor;
  }

  export namespace InferOutputTensor {
    export type AsObject = {
      name: string,
      datatype: string,
      shapeList: Array<number>,
      parametersMap: Array<[string, InferParameter.AsObject]>,
      contents?: InferTensorContents.AsObject,
    }
  }

}

export class ModelStreamInferResponse extends jspb.Message {
  getErrorMessage(): string;
  setErrorMessage(value: string): ModelStreamInferResponse;

  getInferResponse(): ModelInferResponse | undefined;
  setInferResponse(value?: ModelInferResponse): ModelStreamInferResponse;
  hasInferResponse(): boolean;
  clearInferResponse(): ModelStreamInferResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelStreamInferResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ModelStreamInferResponse): ModelStreamInferResponse.AsObject;
  static serializeBinaryToWriter(message: ModelStreamInferResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelStreamInferResponse;
  static deserializeBinaryFromReader(message: ModelStreamInferResponse, reader: jspb.BinaryReader): ModelStreamInferResponse;
}

export namespace ModelStreamInferResponse {
  export type AsObject = {
    errorMessage: string,
    inferResponse?: ModelInferResponse.AsObject,
  }
}

export class ModelConfigRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ModelConfigRequest;

  getVersion(): string;
  setVersion(value: string): ModelConfigRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ModelConfigRequest): ModelConfigRequest.AsObject;
  static serializeBinaryToWriter(message: ModelConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelConfigRequest;
  static deserializeBinaryFromReader(message: ModelConfigRequest, reader: jspb.BinaryReader): ModelConfigRequest;
}

export namespace ModelConfigRequest {
  export type AsObject = {
    name: string,
    version: string,
  }
}

export class ModelConfigResponse extends jspb.Message {
  getConfig(): ssn_triton_model_config_pb.ModelConfig | undefined;
  setConfig(value?: ssn_triton_model_config_pb.ModelConfig): ModelConfigResponse;
  hasConfig(): boolean;
  clearConfig(): ModelConfigResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelConfigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ModelConfigResponse): ModelConfigResponse.AsObject;
  static serializeBinaryToWriter(message: ModelConfigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelConfigResponse;
  static deserializeBinaryFromReader(message: ModelConfigResponse, reader: jspb.BinaryReader): ModelConfigResponse;
}

export namespace ModelConfigResponse {
  export type AsObject = {
    config?: ssn_triton_model_config_pb.ModelConfig.AsObject,
  }
}

export class ModelStatisticsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ModelStatisticsRequest;

  getVersion(): string;
  setVersion(value: string): ModelStatisticsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelStatisticsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ModelStatisticsRequest): ModelStatisticsRequest.AsObject;
  static serializeBinaryToWriter(message: ModelStatisticsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelStatisticsRequest;
  static deserializeBinaryFromReader(message: ModelStatisticsRequest, reader: jspb.BinaryReader): ModelStatisticsRequest;
}

export namespace ModelStatisticsRequest {
  export type AsObject = {
    name: string,
    version: string,
  }
}

export class StatisticDuration extends jspb.Message {
  getCount(): number;
  setCount(value: number): StatisticDuration;

  getNs(): number;
  setNs(value: number): StatisticDuration;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatisticDuration.AsObject;
  static toObject(includeInstance: boolean, msg: StatisticDuration): StatisticDuration.AsObject;
  static serializeBinaryToWriter(message: StatisticDuration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatisticDuration;
  static deserializeBinaryFromReader(message: StatisticDuration, reader: jspb.BinaryReader): StatisticDuration;
}

export namespace StatisticDuration {
  export type AsObject = {
    count: number,
    ns: number,
  }
}

export class InferStatistics extends jspb.Message {
  getSuccess(): StatisticDuration | undefined;
  setSuccess(value?: StatisticDuration): InferStatistics;
  hasSuccess(): boolean;
  clearSuccess(): InferStatistics;

  getFail(): StatisticDuration | undefined;
  setFail(value?: StatisticDuration): InferStatistics;
  hasFail(): boolean;
  clearFail(): InferStatistics;

  getQueue(): StatisticDuration | undefined;
  setQueue(value?: StatisticDuration): InferStatistics;
  hasQueue(): boolean;
  clearQueue(): InferStatistics;

  getComputeInput(): StatisticDuration | undefined;
  setComputeInput(value?: StatisticDuration): InferStatistics;
  hasComputeInput(): boolean;
  clearComputeInput(): InferStatistics;

  getComputeInfer(): StatisticDuration | undefined;
  setComputeInfer(value?: StatisticDuration): InferStatistics;
  hasComputeInfer(): boolean;
  clearComputeInfer(): InferStatistics;

  getComputeOutput(): StatisticDuration | undefined;
  setComputeOutput(value?: StatisticDuration): InferStatistics;
  hasComputeOutput(): boolean;
  clearComputeOutput(): InferStatistics;

  getCacheHit(): StatisticDuration | undefined;
  setCacheHit(value?: StatisticDuration): InferStatistics;
  hasCacheHit(): boolean;
  clearCacheHit(): InferStatistics;

  getCacheMiss(): StatisticDuration | undefined;
  setCacheMiss(value?: StatisticDuration): InferStatistics;
  hasCacheMiss(): boolean;
  clearCacheMiss(): InferStatistics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InferStatistics.AsObject;
  static toObject(includeInstance: boolean, msg: InferStatistics): InferStatistics.AsObject;
  static serializeBinaryToWriter(message: InferStatistics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InferStatistics;
  static deserializeBinaryFromReader(message: InferStatistics, reader: jspb.BinaryReader): InferStatistics;
}

export namespace InferStatistics {
  export type AsObject = {
    success?: StatisticDuration.AsObject,
    fail?: StatisticDuration.AsObject,
    queue?: StatisticDuration.AsObject,
    computeInput?: StatisticDuration.AsObject,
    computeInfer?: StatisticDuration.AsObject,
    computeOutput?: StatisticDuration.AsObject,
    cacheHit?: StatisticDuration.AsObject,
    cacheMiss?: StatisticDuration.AsObject,
  }
}

export class InferBatchStatistics extends jspb.Message {
  getBatchSize(): number;
  setBatchSize(value: number): InferBatchStatistics;

  getComputeInput(): StatisticDuration | undefined;
  setComputeInput(value?: StatisticDuration): InferBatchStatistics;
  hasComputeInput(): boolean;
  clearComputeInput(): InferBatchStatistics;

  getComputeInfer(): StatisticDuration | undefined;
  setComputeInfer(value?: StatisticDuration): InferBatchStatistics;
  hasComputeInfer(): boolean;
  clearComputeInfer(): InferBatchStatistics;

  getComputeOutput(): StatisticDuration | undefined;
  setComputeOutput(value?: StatisticDuration): InferBatchStatistics;
  hasComputeOutput(): boolean;
  clearComputeOutput(): InferBatchStatistics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InferBatchStatistics.AsObject;
  static toObject(includeInstance: boolean, msg: InferBatchStatistics): InferBatchStatistics.AsObject;
  static serializeBinaryToWriter(message: InferBatchStatistics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InferBatchStatistics;
  static deserializeBinaryFromReader(message: InferBatchStatistics, reader: jspb.BinaryReader): InferBatchStatistics;
}

export namespace InferBatchStatistics {
  export type AsObject = {
    batchSize: number,
    computeInput?: StatisticDuration.AsObject,
    computeInfer?: StatisticDuration.AsObject,
    computeOutput?: StatisticDuration.AsObject,
  }
}

export class ModelStatistics extends jspb.Message {
  getName(): string;
  setName(value: string): ModelStatistics;

  getVersion(): string;
  setVersion(value: string): ModelStatistics;

  getLastInference(): number;
  setLastInference(value: number): ModelStatistics;

  getInferenceCount(): number;
  setInferenceCount(value: number): ModelStatistics;

  getExecutionCount(): number;
  setExecutionCount(value: number): ModelStatistics;

  getInferenceStats(): InferStatistics | undefined;
  setInferenceStats(value?: InferStatistics): ModelStatistics;
  hasInferenceStats(): boolean;
  clearInferenceStats(): ModelStatistics;

  getBatchStatsList(): Array<InferBatchStatistics>;
  setBatchStatsList(value: Array<InferBatchStatistics>): ModelStatistics;
  clearBatchStatsList(): ModelStatistics;
  addBatchStats(value?: InferBatchStatistics, index?: number): InferBatchStatistics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelStatistics.AsObject;
  static toObject(includeInstance: boolean, msg: ModelStatistics): ModelStatistics.AsObject;
  static serializeBinaryToWriter(message: ModelStatistics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelStatistics;
  static deserializeBinaryFromReader(message: ModelStatistics, reader: jspb.BinaryReader): ModelStatistics;
}

export namespace ModelStatistics {
  export type AsObject = {
    name: string,
    version: string,
    lastInference: number,
    inferenceCount: number,
    executionCount: number,
    inferenceStats?: InferStatistics.AsObject,
    batchStatsList: Array<InferBatchStatistics.AsObject>,
  }
}

export class ModelStatisticsResponse extends jspb.Message {
  getModelStatsList(): Array<ModelStatistics>;
  setModelStatsList(value: Array<ModelStatistics>): ModelStatisticsResponse;
  clearModelStatsList(): ModelStatisticsResponse;
  addModelStats(value?: ModelStatistics, index?: number): ModelStatistics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelStatisticsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ModelStatisticsResponse): ModelStatisticsResponse.AsObject;
  static serializeBinaryToWriter(message: ModelStatisticsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelStatisticsResponse;
  static deserializeBinaryFromReader(message: ModelStatisticsResponse, reader: jspb.BinaryReader): ModelStatisticsResponse;
}

export namespace ModelStatisticsResponse {
  export type AsObject = {
    modelStatsList: Array<ModelStatistics.AsObject>,
  }
}

export class ModelRepositoryParameter extends jspb.Message {
  getBoolParam(): boolean;
  setBoolParam(value: boolean): ModelRepositoryParameter;

  getInt64Param(): number;
  setInt64Param(value: number): ModelRepositoryParameter;

  getStringParam(): string;
  setStringParam(value: string): ModelRepositoryParameter;

  getBytesParam(): Uint8Array | string;
  getBytesParam_asU8(): Uint8Array;
  getBytesParam_asB64(): string;
  setBytesParam(value: Uint8Array | string): ModelRepositoryParameter;

  getParameterChoiceCase(): ModelRepositoryParameter.ParameterChoiceCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelRepositoryParameter.AsObject;
  static toObject(includeInstance: boolean, msg: ModelRepositoryParameter): ModelRepositoryParameter.AsObject;
  static serializeBinaryToWriter(message: ModelRepositoryParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelRepositoryParameter;
  static deserializeBinaryFromReader(message: ModelRepositoryParameter, reader: jspb.BinaryReader): ModelRepositoryParameter;
}

export namespace ModelRepositoryParameter {
  export type AsObject = {
    boolParam: boolean,
    int64Param: number,
    stringParam: string,
    bytesParam: Uint8Array | string,
  }

  export enum ParameterChoiceCase { 
    PARAMETER_CHOICE_NOT_SET = 0,
    BOOL_PARAM = 1,
    INT64_PARAM = 2,
    STRING_PARAM = 3,
    BYTES_PARAM = 4,
  }
}

export class RepositoryIndexRequest extends jspb.Message {
  getRepositoryName(): string;
  setRepositoryName(value: string): RepositoryIndexRequest;

  getReady(): boolean;
  setReady(value: boolean): RepositoryIndexRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RepositoryIndexRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RepositoryIndexRequest): RepositoryIndexRequest.AsObject;
  static serializeBinaryToWriter(message: RepositoryIndexRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RepositoryIndexRequest;
  static deserializeBinaryFromReader(message: RepositoryIndexRequest, reader: jspb.BinaryReader): RepositoryIndexRequest;
}

export namespace RepositoryIndexRequest {
  export type AsObject = {
    repositoryName: string,
    ready: boolean,
  }
}

export class RepositoryIndexResponse extends jspb.Message {
  getModelsList(): Array<RepositoryIndexResponse.ModelIndex>;
  setModelsList(value: Array<RepositoryIndexResponse.ModelIndex>): RepositoryIndexResponse;
  clearModelsList(): RepositoryIndexResponse;
  addModels(value?: RepositoryIndexResponse.ModelIndex, index?: number): RepositoryIndexResponse.ModelIndex;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RepositoryIndexResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RepositoryIndexResponse): RepositoryIndexResponse.AsObject;
  static serializeBinaryToWriter(message: RepositoryIndexResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RepositoryIndexResponse;
  static deserializeBinaryFromReader(message: RepositoryIndexResponse, reader: jspb.BinaryReader): RepositoryIndexResponse;
}

export namespace RepositoryIndexResponse {
  export type AsObject = {
    modelsList: Array<RepositoryIndexResponse.ModelIndex.AsObject>,
  }

  export class ModelIndex extends jspb.Message {
    getName(): string;
    setName(value: string): ModelIndex;

    getVersion(): string;
    setVersion(value: string): ModelIndex;

    getState(): string;
    setState(value: string): ModelIndex;

    getReason(): string;
    setReason(value: string): ModelIndex;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModelIndex.AsObject;
    static toObject(includeInstance: boolean, msg: ModelIndex): ModelIndex.AsObject;
    static serializeBinaryToWriter(message: ModelIndex, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModelIndex;
    static deserializeBinaryFromReader(message: ModelIndex, reader: jspb.BinaryReader): ModelIndex;
  }

  export namespace ModelIndex {
    export type AsObject = {
      name: string,
      version: string,
      state: string,
      reason: string,
    }
  }

}

export class RepositoryModelLoadRequest extends jspb.Message {
  getRepositoryName(): string;
  setRepositoryName(value: string): RepositoryModelLoadRequest;

  getModelName(): string;
  setModelName(value: string): RepositoryModelLoadRequest;

  getParametersMap(): jspb.Map<string, ModelRepositoryParameter>;
  clearParametersMap(): RepositoryModelLoadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RepositoryModelLoadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RepositoryModelLoadRequest): RepositoryModelLoadRequest.AsObject;
  static serializeBinaryToWriter(message: RepositoryModelLoadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RepositoryModelLoadRequest;
  static deserializeBinaryFromReader(message: RepositoryModelLoadRequest, reader: jspb.BinaryReader): RepositoryModelLoadRequest;
}

export namespace RepositoryModelLoadRequest {
  export type AsObject = {
    repositoryName: string,
    modelName: string,
    parametersMap: Array<[string, ModelRepositoryParameter.AsObject]>,
  }
}

export class RepositoryModelLoadResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RepositoryModelLoadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RepositoryModelLoadResponse): RepositoryModelLoadResponse.AsObject;
  static serializeBinaryToWriter(message: RepositoryModelLoadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RepositoryModelLoadResponse;
  static deserializeBinaryFromReader(message: RepositoryModelLoadResponse, reader: jspb.BinaryReader): RepositoryModelLoadResponse;
}

export namespace RepositoryModelLoadResponse {
  export type AsObject = {
  }
}

export class RepositoryModelUnloadRequest extends jspb.Message {
  getRepositoryName(): string;
  setRepositoryName(value: string): RepositoryModelUnloadRequest;

  getModelName(): string;
  setModelName(value: string): RepositoryModelUnloadRequest;

  getParametersMap(): jspb.Map<string, ModelRepositoryParameter>;
  clearParametersMap(): RepositoryModelUnloadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RepositoryModelUnloadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RepositoryModelUnloadRequest): RepositoryModelUnloadRequest.AsObject;
  static serializeBinaryToWriter(message: RepositoryModelUnloadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RepositoryModelUnloadRequest;
  static deserializeBinaryFromReader(message: RepositoryModelUnloadRequest, reader: jspb.BinaryReader): RepositoryModelUnloadRequest;
}

export namespace RepositoryModelUnloadRequest {
  export type AsObject = {
    repositoryName: string,
    modelName: string,
    parametersMap: Array<[string, ModelRepositoryParameter.AsObject]>,
  }
}

export class RepositoryModelUnloadResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RepositoryModelUnloadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RepositoryModelUnloadResponse): RepositoryModelUnloadResponse.AsObject;
  static serializeBinaryToWriter(message: RepositoryModelUnloadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RepositoryModelUnloadResponse;
  static deserializeBinaryFromReader(message: RepositoryModelUnloadResponse, reader: jspb.BinaryReader): RepositoryModelUnloadResponse;
}

export namespace RepositoryModelUnloadResponse {
  export type AsObject = {
  }
}

export class SystemSharedMemoryStatusRequest extends jspb.Message {
  getName(): string;
  setName(value: string): SystemSharedMemoryStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemSharedMemoryStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SystemSharedMemoryStatusRequest): SystemSharedMemoryStatusRequest.AsObject;
  static serializeBinaryToWriter(message: SystemSharedMemoryStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemSharedMemoryStatusRequest;
  static deserializeBinaryFromReader(message: SystemSharedMemoryStatusRequest, reader: jspb.BinaryReader): SystemSharedMemoryStatusRequest;
}

export namespace SystemSharedMemoryStatusRequest {
  export type AsObject = {
    name: string,
  }
}

export class SystemSharedMemoryStatusResponse extends jspb.Message {
  getRegionsMap(): jspb.Map<string, SystemSharedMemoryStatusResponse.RegionStatus>;
  clearRegionsMap(): SystemSharedMemoryStatusResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemSharedMemoryStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SystemSharedMemoryStatusResponse): SystemSharedMemoryStatusResponse.AsObject;
  static serializeBinaryToWriter(message: SystemSharedMemoryStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemSharedMemoryStatusResponse;
  static deserializeBinaryFromReader(message: SystemSharedMemoryStatusResponse, reader: jspb.BinaryReader): SystemSharedMemoryStatusResponse;
}

export namespace SystemSharedMemoryStatusResponse {
  export type AsObject = {
    regionsMap: Array<[string, SystemSharedMemoryStatusResponse.RegionStatus.AsObject]>,
  }

  export class RegionStatus extends jspb.Message {
    getName(): string;
    setName(value: string): RegionStatus;

    getKey(): string;
    setKey(value: string): RegionStatus;

    getOffset(): number;
    setOffset(value: number): RegionStatus;

    getByteSize(): number;
    setByteSize(value: number): RegionStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegionStatus.AsObject;
    static toObject(includeInstance: boolean, msg: RegionStatus): RegionStatus.AsObject;
    static serializeBinaryToWriter(message: RegionStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegionStatus;
    static deserializeBinaryFromReader(message: RegionStatus, reader: jspb.BinaryReader): RegionStatus;
  }

  export namespace RegionStatus {
    export type AsObject = {
      name: string,
      key: string,
      offset: number,
      byteSize: number,
    }
  }

}

export class SystemSharedMemoryRegisterRequest extends jspb.Message {
  getName(): string;
  setName(value: string): SystemSharedMemoryRegisterRequest;

  getKey(): string;
  setKey(value: string): SystemSharedMemoryRegisterRequest;

  getOffset(): number;
  setOffset(value: number): SystemSharedMemoryRegisterRequest;

  getByteSize(): number;
  setByteSize(value: number): SystemSharedMemoryRegisterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemSharedMemoryRegisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SystemSharedMemoryRegisterRequest): SystemSharedMemoryRegisterRequest.AsObject;
  static serializeBinaryToWriter(message: SystemSharedMemoryRegisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemSharedMemoryRegisterRequest;
  static deserializeBinaryFromReader(message: SystemSharedMemoryRegisterRequest, reader: jspb.BinaryReader): SystemSharedMemoryRegisterRequest;
}

export namespace SystemSharedMemoryRegisterRequest {
  export type AsObject = {
    name: string,
    key: string,
    offset: number,
    byteSize: number,
  }
}

export class SystemSharedMemoryRegisterResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemSharedMemoryRegisterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SystemSharedMemoryRegisterResponse): SystemSharedMemoryRegisterResponse.AsObject;
  static serializeBinaryToWriter(message: SystemSharedMemoryRegisterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemSharedMemoryRegisterResponse;
  static deserializeBinaryFromReader(message: SystemSharedMemoryRegisterResponse, reader: jspb.BinaryReader): SystemSharedMemoryRegisterResponse;
}

export namespace SystemSharedMemoryRegisterResponse {
  export type AsObject = {
  }
}

export class SystemSharedMemoryUnregisterRequest extends jspb.Message {
  getName(): string;
  setName(value: string): SystemSharedMemoryUnregisterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemSharedMemoryUnregisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SystemSharedMemoryUnregisterRequest): SystemSharedMemoryUnregisterRequest.AsObject;
  static serializeBinaryToWriter(message: SystemSharedMemoryUnregisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemSharedMemoryUnregisterRequest;
  static deserializeBinaryFromReader(message: SystemSharedMemoryUnregisterRequest, reader: jspb.BinaryReader): SystemSharedMemoryUnregisterRequest;
}

export namespace SystemSharedMemoryUnregisterRequest {
  export type AsObject = {
    name: string,
  }
}

export class SystemSharedMemoryUnregisterResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemSharedMemoryUnregisterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SystemSharedMemoryUnregisterResponse): SystemSharedMemoryUnregisterResponse.AsObject;
  static serializeBinaryToWriter(message: SystemSharedMemoryUnregisterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemSharedMemoryUnregisterResponse;
  static deserializeBinaryFromReader(message: SystemSharedMemoryUnregisterResponse, reader: jspb.BinaryReader): SystemSharedMemoryUnregisterResponse;
}

export namespace SystemSharedMemoryUnregisterResponse {
  export type AsObject = {
  }
}

export class CudaSharedMemoryStatusRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CudaSharedMemoryStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CudaSharedMemoryStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CudaSharedMemoryStatusRequest): CudaSharedMemoryStatusRequest.AsObject;
  static serializeBinaryToWriter(message: CudaSharedMemoryStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CudaSharedMemoryStatusRequest;
  static deserializeBinaryFromReader(message: CudaSharedMemoryStatusRequest, reader: jspb.BinaryReader): CudaSharedMemoryStatusRequest;
}

export namespace CudaSharedMemoryStatusRequest {
  export type AsObject = {
    name: string,
  }
}

export class CudaSharedMemoryStatusResponse extends jspb.Message {
  getRegionsMap(): jspb.Map<string, CudaSharedMemoryStatusResponse.RegionStatus>;
  clearRegionsMap(): CudaSharedMemoryStatusResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CudaSharedMemoryStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CudaSharedMemoryStatusResponse): CudaSharedMemoryStatusResponse.AsObject;
  static serializeBinaryToWriter(message: CudaSharedMemoryStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CudaSharedMemoryStatusResponse;
  static deserializeBinaryFromReader(message: CudaSharedMemoryStatusResponse, reader: jspb.BinaryReader): CudaSharedMemoryStatusResponse;
}

export namespace CudaSharedMemoryStatusResponse {
  export type AsObject = {
    regionsMap: Array<[string, CudaSharedMemoryStatusResponse.RegionStatus.AsObject]>,
  }

  export class RegionStatus extends jspb.Message {
    getName(): string;
    setName(value: string): RegionStatus;

    getDeviceId(): number;
    setDeviceId(value: number): RegionStatus;

    getByteSize(): number;
    setByteSize(value: number): RegionStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegionStatus.AsObject;
    static toObject(includeInstance: boolean, msg: RegionStatus): RegionStatus.AsObject;
    static serializeBinaryToWriter(message: RegionStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegionStatus;
    static deserializeBinaryFromReader(message: RegionStatus, reader: jspb.BinaryReader): RegionStatus;
  }

  export namespace RegionStatus {
    export type AsObject = {
      name: string,
      deviceId: number,
      byteSize: number,
    }
  }

}

export class CudaSharedMemoryRegisterRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CudaSharedMemoryRegisterRequest;

  getRawHandle(): Uint8Array | string;
  getRawHandle_asU8(): Uint8Array;
  getRawHandle_asB64(): string;
  setRawHandle(value: Uint8Array | string): CudaSharedMemoryRegisterRequest;

  getDeviceId(): number;
  setDeviceId(value: number): CudaSharedMemoryRegisterRequest;

  getByteSize(): number;
  setByteSize(value: number): CudaSharedMemoryRegisterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CudaSharedMemoryRegisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CudaSharedMemoryRegisterRequest): CudaSharedMemoryRegisterRequest.AsObject;
  static serializeBinaryToWriter(message: CudaSharedMemoryRegisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CudaSharedMemoryRegisterRequest;
  static deserializeBinaryFromReader(message: CudaSharedMemoryRegisterRequest, reader: jspb.BinaryReader): CudaSharedMemoryRegisterRequest;
}

export namespace CudaSharedMemoryRegisterRequest {
  export type AsObject = {
    name: string,
    rawHandle: Uint8Array | string,
    deviceId: number,
    byteSize: number,
  }
}

export class CudaSharedMemoryRegisterResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CudaSharedMemoryRegisterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CudaSharedMemoryRegisterResponse): CudaSharedMemoryRegisterResponse.AsObject;
  static serializeBinaryToWriter(message: CudaSharedMemoryRegisterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CudaSharedMemoryRegisterResponse;
  static deserializeBinaryFromReader(message: CudaSharedMemoryRegisterResponse, reader: jspb.BinaryReader): CudaSharedMemoryRegisterResponse;
}

export namespace CudaSharedMemoryRegisterResponse {
  export type AsObject = {
  }
}

export class CudaSharedMemoryUnregisterRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CudaSharedMemoryUnregisterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CudaSharedMemoryUnregisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CudaSharedMemoryUnregisterRequest): CudaSharedMemoryUnregisterRequest.AsObject;
  static serializeBinaryToWriter(message: CudaSharedMemoryUnregisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CudaSharedMemoryUnregisterRequest;
  static deserializeBinaryFromReader(message: CudaSharedMemoryUnregisterRequest, reader: jspb.BinaryReader): CudaSharedMemoryUnregisterRequest;
}

export namespace CudaSharedMemoryUnregisterRequest {
  export type AsObject = {
    name: string,
  }
}

export class CudaSharedMemoryUnregisterResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CudaSharedMemoryUnregisterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CudaSharedMemoryUnregisterResponse): CudaSharedMemoryUnregisterResponse.AsObject;
  static serializeBinaryToWriter(message: CudaSharedMemoryUnregisterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CudaSharedMemoryUnregisterResponse;
  static deserializeBinaryFromReader(message: CudaSharedMemoryUnregisterResponse, reader: jspb.BinaryReader): CudaSharedMemoryUnregisterResponse;
}

export namespace CudaSharedMemoryUnregisterResponse {
  export type AsObject = {
  }
}

export class TraceSettingRequest extends jspb.Message {
  getSettingsMap(): jspb.Map<string, TraceSettingRequest.SettingValue>;
  clearSettingsMap(): TraceSettingRequest;

  getModelName(): string;
  setModelName(value: string): TraceSettingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraceSettingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TraceSettingRequest): TraceSettingRequest.AsObject;
  static serializeBinaryToWriter(message: TraceSettingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraceSettingRequest;
  static deserializeBinaryFromReader(message: TraceSettingRequest, reader: jspb.BinaryReader): TraceSettingRequest;
}

export namespace TraceSettingRequest {
  export type AsObject = {
    settingsMap: Array<[string, TraceSettingRequest.SettingValue.AsObject]>,
    modelName: string,
  }

  export class SettingValue extends jspb.Message {
    getValueList(): Array<string>;
    setValueList(value: Array<string>): SettingValue;
    clearValueList(): SettingValue;
    addValue(value: string, index?: number): SettingValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SettingValue.AsObject;
    static toObject(includeInstance: boolean, msg: SettingValue): SettingValue.AsObject;
    static serializeBinaryToWriter(message: SettingValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SettingValue;
    static deserializeBinaryFromReader(message: SettingValue, reader: jspb.BinaryReader): SettingValue;
  }

  export namespace SettingValue {
    export type AsObject = {
      valueList: Array<string>,
    }
  }

}

export class TraceSettingResponse extends jspb.Message {
  getSettingsMap(): jspb.Map<string, TraceSettingResponse.SettingValue>;
  clearSettingsMap(): TraceSettingResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraceSettingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TraceSettingResponse): TraceSettingResponse.AsObject;
  static serializeBinaryToWriter(message: TraceSettingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraceSettingResponse;
  static deserializeBinaryFromReader(message: TraceSettingResponse, reader: jspb.BinaryReader): TraceSettingResponse;
}

export namespace TraceSettingResponse {
  export type AsObject = {
    settingsMap: Array<[string, TraceSettingResponse.SettingValue.AsObject]>,
  }

  export class SettingValue extends jspb.Message {
    getValueList(): Array<string>;
    setValueList(value: Array<string>): SettingValue;
    clearValueList(): SettingValue;
    addValue(value: string, index?: number): SettingValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SettingValue.AsObject;
    static toObject(includeInstance: boolean, msg: SettingValue): SettingValue.AsObject;
    static serializeBinaryToWriter(message: SettingValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SettingValue;
    static deserializeBinaryFromReader(message: SettingValue, reader: jspb.BinaryReader): SettingValue;
  }

  export namespace SettingValue {
    export type AsObject = {
      valueList: Array<string>,
    }
  }

}

export class LogSettingsRequest extends jspb.Message {
  getSettingsMap(): jspb.Map<string, LogSettingsRequest.SettingValue>;
  clearSettingsMap(): LogSettingsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogSettingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LogSettingsRequest): LogSettingsRequest.AsObject;
  static serializeBinaryToWriter(message: LogSettingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogSettingsRequest;
  static deserializeBinaryFromReader(message: LogSettingsRequest, reader: jspb.BinaryReader): LogSettingsRequest;
}

export namespace LogSettingsRequest {
  export type AsObject = {
    settingsMap: Array<[string, LogSettingsRequest.SettingValue.AsObject]>,
  }

  export class SettingValue extends jspb.Message {
    getBoolParam(): boolean;
    setBoolParam(value: boolean): SettingValue;

    getUint32Param(): number;
    setUint32Param(value: number): SettingValue;

    getStringParam(): string;
    setStringParam(value: string): SettingValue;

    getParameterChoiceCase(): SettingValue.ParameterChoiceCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SettingValue.AsObject;
    static toObject(includeInstance: boolean, msg: SettingValue): SettingValue.AsObject;
    static serializeBinaryToWriter(message: SettingValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SettingValue;
    static deserializeBinaryFromReader(message: SettingValue, reader: jspb.BinaryReader): SettingValue;
  }

  export namespace SettingValue {
    export type AsObject = {
      boolParam: boolean,
      uint32Param: number,
      stringParam: string,
    }

    export enum ParameterChoiceCase { 
      PARAMETER_CHOICE_NOT_SET = 0,
      BOOL_PARAM = 1,
      UINT32_PARAM = 2,
      STRING_PARAM = 3,
    }
  }

}

export class LogSettingsResponse extends jspb.Message {
  getSettingsMap(): jspb.Map<string, LogSettingsResponse.SettingValue>;
  clearSettingsMap(): LogSettingsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogSettingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LogSettingsResponse): LogSettingsResponse.AsObject;
  static serializeBinaryToWriter(message: LogSettingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogSettingsResponse;
  static deserializeBinaryFromReader(message: LogSettingsResponse, reader: jspb.BinaryReader): LogSettingsResponse;
}

export namespace LogSettingsResponse {
  export type AsObject = {
    settingsMap: Array<[string, LogSettingsResponse.SettingValue.AsObject]>,
  }

  export class SettingValue extends jspb.Message {
    getBoolParam(): boolean;
    setBoolParam(value: boolean): SettingValue;

    getUint32Param(): number;
    setUint32Param(value: number): SettingValue;

    getStringParam(): string;
    setStringParam(value: string): SettingValue;

    getParameterChoiceCase(): SettingValue.ParameterChoiceCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SettingValue.AsObject;
    static toObject(includeInstance: boolean, msg: SettingValue): SettingValue.AsObject;
    static serializeBinaryToWriter(message: SettingValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SettingValue;
    static deserializeBinaryFromReader(message: SettingValue, reader: jspb.BinaryReader): SettingValue;
  }

  export namespace SettingValue {
    export type AsObject = {
      boolParam: boolean,
      uint32Param: number,
      stringParam: string,
    }

    export enum ParameterChoiceCase { 
      PARAMETER_CHOICE_NOT_SET = 0,
      BOOL_PARAM = 1,
      UINT32_PARAM = 2,
      STRING_PARAM = 3,
    }
  }

}

