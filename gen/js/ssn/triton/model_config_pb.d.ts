import * as jspb from 'google-protobuf'



export class ModelRateLimiter extends jspb.Message {
  getResourcesList(): Array<ModelRateLimiter.Resource>;
  setResourcesList(value: Array<ModelRateLimiter.Resource>): ModelRateLimiter;
  clearResourcesList(): ModelRateLimiter;
  addResources(value?: ModelRateLimiter.Resource, index?: number): ModelRateLimiter.Resource;

  getPriority(): number;
  setPriority(value: number): ModelRateLimiter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelRateLimiter.AsObject;
  static toObject(includeInstance: boolean, msg: ModelRateLimiter): ModelRateLimiter.AsObject;
  static serializeBinaryToWriter(message: ModelRateLimiter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelRateLimiter;
  static deserializeBinaryFromReader(message: ModelRateLimiter, reader: jspb.BinaryReader): ModelRateLimiter;
}

export namespace ModelRateLimiter {
  export type AsObject = {
    resourcesList: Array<ModelRateLimiter.Resource.AsObject>,
    priority: number,
  }

  export class Resource extends jspb.Message {
    getName(): string;
    setName(value: string): Resource;

    getGlobal(): boolean;
    setGlobal(value: boolean): Resource;

    getCount(): number;
    setCount(value: number): Resource;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Resource.AsObject;
    static toObject(includeInstance: boolean, msg: Resource): Resource.AsObject;
    static serializeBinaryToWriter(message: Resource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Resource;
    static deserializeBinaryFromReader(message: Resource, reader: jspb.BinaryReader): Resource;
  }

  export namespace Resource {
    export type AsObject = {
      name: string,
      global: boolean,
      count: number,
    }
  }

}

export class ModelInstanceGroup extends jspb.Message {
  getName(): string;
  setName(value: string): ModelInstanceGroup;

  getKind(): ModelInstanceGroup.Kind;
  setKind(value: ModelInstanceGroup.Kind): ModelInstanceGroup;

  getCount(): number;
  setCount(value: number): ModelInstanceGroup;

  getRateLimiter(): ModelRateLimiter | undefined;
  setRateLimiter(value?: ModelRateLimiter): ModelInstanceGroup;
  hasRateLimiter(): boolean;
  clearRateLimiter(): ModelInstanceGroup;

  getGpusList(): Array<number>;
  setGpusList(value: Array<number>): ModelInstanceGroup;
  clearGpusList(): ModelInstanceGroup;
  addGpus(value: number, index?: number): ModelInstanceGroup;

  getSecondaryDevicesList(): Array<ModelInstanceGroup.SecondaryDevice>;
  setSecondaryDevicesList(value: Array<ModelInstanceGroup.SecondaryDevice>): ModelInstanceGroup;
  clearSecondaryDevicesList(): ModelInstanceGroup;
  addSecondaryDevices(value?: ModelInstanceGroup.SecondaryDevice, index?: number): ModelInstanceGroup.SecondaryDevice;

  getProfileList(): Array<string>;
  setProfileList(value: Array<string>): ModelInstanceGroup;
  clearProfileList(): ModelInstanceGroup;
  addProfile(value: string, index?: number): ModelInstanceGroup;

  getPassive(): boolean;
  setPassive(value: boolean): ModelInstanceGroup;

  getHostPolicy(): string;
  setHostPolicy(value: string): ModelInstanceGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelInstanceGroup.AsObject;
  static toObject(includeInstance: boolean, msg: ModelInstanceGroup): ModelInstanceGroup.AsObject;
  static serializeBinaryToWriter(message: ModelInstanceGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelInstanceGroup;
  static deserializeBinaryFromReader(message: ModelInstanceGroup, reader: jspb.BinaryReader): ModelInstanceGroup;
}

export namespace ModelInstanceGroup {
  export type AsObject = {
    name: string,
    kind: ModelInstanceGroup.Kind,
    count: number,
    rateLimiter?: ModelRateLimiter.AsObject,
    gpusList: Array<number>,
    secondaryDevicesList: Array<ModelInstanceGroup.SecondaryDevice.AsObject>,
    profileList: Array<string>,
    passive: boolean,
    hostPolicy: string,
  }

  export class SecondaryDevice extends jspb.Message {
    getKind(): ModelInstanceGroup.SecondaryDevice.SecondaryDeviceKind;
    setKind(value: ModelInstanceGroup.SecondaryDevice.SecondaryDeviceKind): SecondaryDevice;

    getDeviceId(): number;
    setDeviceId(value: number): SecondaryDevice;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SecondaryDevice.AsObject;
    static toObject(includeInstance: boolean, msg: SecondaryDevice): SecondaryDevice.AsObject;
    static serializeBinaryToWriter(message: SecondaryDevice, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SecondaryDevice;
    static deserializeBinaryFromReader(message: SecondaryDevice, reader: jspb.BinaryReader): SecondaryDevice;
  }

  export namespace SecondaryDevice {
    export type AsObject = {
      kind: ModelInstanceGroup.SecondaryDevice.SecondaryDeviceKind,
      deviceId: number,
    }

    export enum SecondaryDeviceKind { 
      KIND_NVDLA = 0,
    }
  }


  export enum Kind { 
    KIND_AUTO = 0,
    KIND_GPU = 1,
    KIND_CPU = 2,
    KIND_MODEL = 3,
  }
}

export class ModelTensorReshape extends jspb.Message {
  getShapeList(): Array<number>;
  setShapeList(value: Array<number>): ModelTensorReshape;
  clearShapeList(): ModelTensorReshape;
  addShape(value: number, index?: number): ModelTensorReshape;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelTensorReshape.AsObject;
  static toObject(includeInstance: boolean, msg: ModelTensorReshape): ModelTensorReshape.AsObject;
  static serializeBinaryToWriter(message: ModelTensorReshape, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelTensorReshape;
  static deserializeBinaryFromReader(message: ModelTensorReshape, reader: jspb.BinaryReader): ModelTensorReshape;
}

export namespace ModelTensorReshape {
  export type AsObject = {
    shapeList: Array<number>,
  }
}

export class ModelInput extends jspb.Message {
  getName(): string;
  setName(value: string): ModelInput;

  getDataType(): DataType;
  setDataType(value: DataType): ModelInput;

  getFormat(): ModelInput.Format;
  setFormat(value: ModelInput.Format): ModelInput;

  getDimsList(): Array<number>;
  setDimsList(value: Array<number>): ModelInput;
  clearDimsList(): ModelInput;
  addDims(value: number, index?: number): ModelInput;

  getReshape(): ModelTensorReshape | undefined;
  setReshape(value?: ModelTensorReshape): ModelInput;
  hasReshape(): boolean;
  clearReshape(): ModelInput;

  getIsShapeTensor(): boolean;
  setIsShapeTensor(value: boolean): ModelInput;

  getAllowRaggedBatch(): boolean;
  setAllowRaggedBatch(value: boolean): ModelInput;

  getOptional(): boolean;
  setOptional(value: boolean): ModelInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelInput.AsObject;
  static toObject(includeInstance: boolean, msg: ModelInput): ModelInput.AsObject;
  static serializeBinaryToWriter(message: ModelInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelInput;
  static deserializeBinaryFromReader(message: ModelInput, reader: jspb.BinaryReader): ModelInput;
}

export namespace ModelInput {
  export type AsObject = {
    name: string,
    dataType: DataType,
    format: ModelInput.Format,
    dimsList: Array<number>,
    reshape?: ModelTensorReshape.AsObject,
    isShapeTensor: boolean,
    allowRaggedBatch: boolean,
    optional: boolean,
  }

  export enum Format { 
    FORMAT_NONE = 0,
    FORMAT_NHWC = 1,
    FORMAT_NCHW = 2,
  }
}

export class ModelOutput extends jspb.Message {
  getName(): string;
  setName(value: string): ModelOutput;

  getDataType(): DataType;
  setDataType(value: DataType): ModelOutput;

  getDimsList(): Array<number>;
  setDimsList(value: Array<number>): ModelOutput;
  clearDimsList(): ModelOutput;
  addDims(value: number, index?: number): ModelOutput;

  getReshape(): ModelTensorReshape | undefined;
  setReshape(value?: ModelTensorReshape): ModelOutput;
  hasReshape(): boolean;
  clearReshape(): ModelOutput;

  getLabelFilename(): string;
  setLabelFilename(value: string): ModelOutput;

  getIsShapeTensor(): boolean;
  setIsShapeTensor(value: boolean): ModelOutput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelOutput.AsObject;
  static toObject(includeInstance: boolean, msg: ModelOutput): ModelOutput.AsObject;
  static serializeBinaryToWriter(message: ModelOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelOutput;
  static deserializeBinaryFromReader(message: ModelOutput, reader: jspb.BinaryReader): ModelOutput;
}

export namespace ModelOutput {
  export type AsObject = {
    name: string,
    dataType: DataType,
    dimsList: Array<number>,
    reshape?: ModelTensorReshape.AsObject,
    labelFilename: string,
    isShapeTensor: boolean,
  }
}

export class BatchInput extends jspb.Message {
  getKind(): BatchInput.Kind;
  setKind(value: BatchInput.Kind): BatchInput;

  getTargetNameList(): Array<string>;
  setTargetNameList(value: Array<string>): BatchInput;
  clearTargetNameList(): BatchInput;
  addTargetName(value: string, index?: number): BatchInput;

  getDataType(): DataType;
  setDataType(value: DataType): BatchInput;

  getSourceInputList(): Array<string>;
  setSourceInputList(value: Array<string>): BatchInput;
  clearSourceInputList(): BatchInput;
  addSourceInput(value: string, index?: number): BatchInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchInput.AsObject;
  static toObject(includeInstance: boolean, msg: BatchInput): BatchInput.AsObject;
  static serializeBinaryToWriter(message: BatchInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchInput;
  static deserializeBinaryFromReader(message: BatchInput, reader: jspb.BinaryReader): BatchInput;
}

export namespace BatchInput {
  export type AsObject = {
    kind: BatchInput.Kind,
    targetNameList: Array<string>,
    dataType: DataType,
    sourceInputList: Array<string>,
  }

  export enum Kind { 
    BATCH_ELEMENT_COUNT = 0,
    BATCH_ACCUMULATED_ELEMENT_COUNT = 1,
    BATCH_ACCUMULATED_ELEMENT_COUNT_WITH_ZERO = 2,
    BATCH_MAX_ELEMENT_COUNT_AS_SHAPE = 3,
    BATCH_ITEM_SHAPE = 4,
    BATCH_ITEM_SHAPE_FLATTEN = 5,
  }
}

export class BatchOutput extends jspb.Message {
  getTargetNameList(): Array<string>;
  setTargetNameList(value: Array<string>): BatchOutput;
  clearTargetNameList(): BatchOutput;
  addTargetName(value: string, index?: number): BatchOutput;

  getKind(): BatchOutput.Kind;
  setKind(value: BatchOutput.Kind): BatchOutput;

  getSourceInputList(): Array<string>;
  setSourceInputList(value: Array<string>): BatchOutput;
  clearSourceInputList(): BatchOutput;
  addSourceInput(value: string, index?: number): BatchOutput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchOutput.AsObject;
  static toObject(includeInstance: boolean, msg: BatchOutput): BatchOutput.AsObject;
  static serializeBinaryToWriter(message: BatchOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchOutput;
  static deserializeBinaryFromReader(message: BatchOutput, reader: jspb.BinaryReader): BatchOutput;
}

export namespace BatchOutput {
  export type AsObject = {
    targetNameList: Array<string>,
    kind: BatchOutput.Kind,
    sourceInputList: Array<string>,
  }

  export enum Kind { 
    BATCH_SCATTER_WITH_INPUT_SHAPE = 0,
  }
}

export class ModelVersionPolicy extends jspb.Message {
  getLatest(): ModelVersionPolicy.Latest | undefined;
  setLatest(value?: ModelVersionPolicy.Latest): ModelVersionPolicy;
  hasLatest(): boolean;
  clearLatest(): ModelVersionPolicy;

  getAll(): ModelVersionPolicy.All | undefined;
  setAll(value?: ModelVersionPolicy.All): ModelVersionPolicy;
  hasAll(): boolean;
  clearAll(): ModelVersionPolicy;

  getSpecific(): ModelVersionPolicy.Specific | undefined;
  setSpecific(value?: ModelVersionPolicy.Specific): ModelVersionPolicy;
  hasSpecific(): boolean;
  clearSpecific(): ModelVersionPolicy;

  getPolicyChoiceCase(): ModelVersionPolicy.PolicyChoiceCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelVersionPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: ModelVersionPolicy): ModelVersionPolicy.AsObject;
  static serializeBinaryToWriter(message: ModelVersionPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelVersionPolicy;
  static deserializeBinaryFromReader(message: ModelVersionPolicy, reader: jspb.BinaryReader): ModelVersionPolicy;
}

export namespace ModelVersionPolicy {
  export type AsObject = {
    latest?: ModelVersionPolicy.Latest.AsObject,
    all?: ModelVersionPolicy.All.AsObject,
    specific?: ModelVersionPolicy.Specific.AsObject,
  }

  export class Latest extends jspb.Message {
    getNumVersions(): number;
    setNumVersions(value: number): Latest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Latest.AsObject;
    static toObject(includeInstance: boolean, msg: Latest): Latest.AsObject;
    static serializeBinaryToWriter(message: Latest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Latest;
    static deserializeBinaryFromReader(message: Latest, reader: jspb.BinaryReader): Latest;
  }

  export namespace Latest {
    export type AsObject = {
      numVersions: number,
    }
  }


  export class All extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): All.AsObject;
    static toObject(includeInstance: boolean, msg: All): All.AsObject;
    static serializeBinaryToWriter(message: All, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): All;
    static deserializeBinaryFromReader(message: All, reader: jspb.BinaryReader): All;
  }

  export namespace All {
    export type AsObject = {
    }
  }


  export class Specific extends jspb.Message {
    getVersionsList(): Array<number>;
    setVersionsList(value: Array<number>): Specific;
    clearVersionsList(): Specific;
    addVersions(value: number, index?: number): Specific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Specific.AsObject;
    static toObject(includeInstance: boolean, msg: Specific): Specific.AsObject;
    static serializeBinaryToWriter(message: Specific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Specific;
    static deserializeBinaryFromReader(message: Specific, reader: jspb.BinaryReader): Specific;
  }

  export namespace Specific {
    export type AsObject = {
      versionsList: Array<number>,
    }
  }


  export enum PolicyChoiceCase { 
    POLICY_CHOICE_NOT_SET = 0,
    LATEST = 1,
    ALL = 2,
    SPECIFIC = 3,
  }
}

export class ModelOptimizationPolicy extends jspb.Message {
  getGraph(): ModelOptimizationPolicy.Graph | undefined;
  setGraph(value?: ModelOptimizationPolicy.Graph): ModelOptimizationPolicy;
  hasGraph(): boolean;
  clearGraph(): ModelOptimizationPolicy;

  getPriority(): ModelOptimizationPolicy.ModelPriority;
  setPriority(value: ModelOptimizationPolicy.ModelPriority): ModelOptimizationPolicy;

  getCuda(): ModelOptimizationPolicy.Cuda | undefined;
  setCuda(value?: ModelOptimizationPolicy.Cuda): ModelOptimizationPolicy;
  hasCuda(): boolean;
  clearCuda(): ModelOptimizationPolicy;

  getExecutionAccelerators(): ModelOptimizationPolicy.ExecutionAccelerators | undefined;
  setExecutionAccelerators(value?: ModelOptimizationPolicy.ExecutionAccelerators): ModelOptimizationPolicy;
  hasExecutionAccelerators(): boolean;
  clearExecutionAccelerators(): ModelOptimizationPolicy;

  getInputPinnedMemory(): ModelOptimizationPolicy.PinnedMemoryBuffer | undefined;
  setInputPinnedMemory(value?: ModelOptimizationPolicy.PinnedMemoryBuffer): ModelOptimizationPolicy;
  hasInputPinnedMemory(): boolean;
  clearInputPinnedMemory(): ModelOptimizationPolicy;

  getOutputPinnedMemory(): ModelOptimizationPolicy.PinnedMemoryBuffer | undefined;
  setOutputPinnedMemory(value?: ModelOptimizationPolicy.PinnedMemoryBuffer): ModelOptimizationPolicy;
  hasOutputPinnedMemory(): boolean;
  clearOutputPinnedMemory(): ModelOptimizationPolicy;

  getGatherKernelBufferThreshold(): number;
  setGatherKernelBufferThreshold(value: number): ModelOptimizationPolicy;

  getEagerBatching(): boolean;
  setEagerBatching(value: boolean): ModelOptimizationPolicy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelOptimizationPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: ModelOptimizationPolicy): ModelOptimizationPolicy.AsObject;
  static serializeBinaryToWriter(message: ModelOptimizationPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelOptimizationPolicy;
  static deserializeBinaryFromReader(message: ModelOptimizationPolicy, reader: jspb.BinaryReader): ModelOptimizationPolicy;
}

export namespace ModelOptimizationPolicy {
  export type AsObject = {
    graph?: ModelOptimizationPolicy.Graph.AsObject,
    priority: ModelOptimizationPolicy.ModelPriority,
    cuda?: ModelOptimizationPolicy.Cuda.AsObject,
    executionAccelerators?: ModelOptimizationPolicy.ExecutionAccelerators.AsObject,
    inputPinnedMemory?: ModelOptimizationPolicy.PinnedMemoryBuffer.AsObject,
    outputPinnedMemory?: ModelOptimizationPolicy.PinnedMemoryBuffer.AsObject,
    gatherKernelBufferThreshold: number,
    eagerBatching: boolean,
  }

  export class Graph extends jspb.Message {
    getLevel(): number;
    setLevel(value: number): Graph;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Graph.AsObject;
    static toObject(includeInstance: boolean, msg: Graph): Graph.AsObject;
    static serializeBinaryToWriter(message: Graph, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Graph;
    static deserializeBinaryFromReader(message: Graph, reader: jspb.BinaryReader): Graph;
  }

  export namespace Graph {
    export type AsObject = {
      level: number,
    }
  }


  export class Cuda extends jspb.Message {
    getGraphs(): boolean;
    setGraphs(value: boolean): Cuda;

    getBusyWaitEvents(): boolean;
    setBusyWaitEvents(value: boolean): Cuda;

    getGraphSpecList(): Array<ModelOptimizationPolicy.Cuda.GraphSpec>;
    setGraphSpecList(value: Array<ModelOptimizationPolicy.Cuda.GraphSpec>): Cuda;
    clearGraphSpecList(): Cuda;
    addGraphSpec(value?: ModelOptimizationPolicy.Cuda.GraphSpec, index?: number): ModelOptimizationPolicy.Cuda.GraphSpec;

    getOutputCopyStream(): boolean;
    setOutputCopyStream(value: boolean): Cuda;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Cuda.AsObject;
    static toObject(includeInstance: boolean, msg: Cuda): Cuda.AsObject;
    static serializeBinaryToWriter(message: Cuda, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Cuda;
    static deserializeBinaryFromReader(message: Cuda, reader: jspb.BinaryReader): Cuda;
  }

  export namespace Cuda {
    export type AsObject = {
      graphs: boolean,
      busyWaitEvents: boolean,
      graphSpecList: Array<ModelOptimizationPolicy.Cuda.GraphSpec.AsObject>,
      outputCopyStream: boolean,
    }

    export class GraphSpec extends jspb.Message {
      getBatchSize(): number;
      setBatchSize(value: number): GraphSpec;

      getInputMap(): jspb.Map<string, ModelOptimizationPolicy.Cuda.GraphSpec.Shape>;
      clearInputMap(): GraphSpec;

      getGraphLowerBound(): ModelOptimizationPolicy.Cuda.GraphSpec.LowerBound | undefined;
      setGraphLowerBound(value?: ModelOptimizationPolicy.Cuda.GraphSpec.LowerBound): GraphSpec;
      hasGraphLowerBound(): boolean;
      clearGraphLowerBound(): GraphSpec;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): GraphSpec.AsObject;
      static toObject(includeInstance: boolean, msg: GraphSpec): GraphSpec.AsObject;
      static serializeBinaryToWriter(message: GraphSpec, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): GraphSpec;
      static deserializeBinaryFromReader(message: GraphSpec, reader: jspb.BinaryReader): GraphSpec;
    }

    export namespace GraphSpec {
      export type AsObject = {
        batchSize: number,
        inputMap: Array<[string, ModelOptimizationPolicy.Cuda.GraphSpec.Shape.AsObject]>,
        graphLowerBound?: ModelOptimizationPolicy.Cuda.GraphSpec.LowerBound.AsObject,
      }

      export class Shape extends jspb.Message {
        getDimList(): Array<number>;
        setDimList(value: Array<number>): Shape;
        clearDimList(): Shape;
        addDim(value: number, index?: number): Shape;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Shape.AsObject;
        static toObject(includeInstance: boolean, msg: Shape): Shape.AsObject;
        static serializeBinaryToWriter(message: Shape, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Shape;
        static deserializeBinaryFromReader(message: Shape, reader: jspb.BinaryReader): Shape;
      }

      export namespace Shape {
        export type AsObject = {
          dimList: Array<number>,
        }
      }


      export class LowerBound extends jspb.Message {
        getBatchSize(): number;
        setBatchSize(value: number): LowerBound;

        getInputMap(): jspb.Map<string, ModelOptimizationPolicy.Cuda.GraphSpec.Shape>;
        clearInputMap(): LowerBound;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): LowerBound.AsObject;
        static toObject(includeInstance: boolean, msg: LowerBound): LowerBound.AsObject;
        static serializeBinaryToWriter(message: LowerBound, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): LowerBound;
        static deserializeBinaryFromReader(message: LowerBound, reader: jspb.BinaryReader): LowerBound;
      }

      export namespace LowerBound {
        export type AsObject = {
          batchSize: number,
          inputMap: Array<[string, ModelOptimizationPolicy.Cuda.GraphSpec.Shape.AsObject]>,
        }
      }

    }

  }


  export class ExecutionAccelerators extends jspb.Message {
    getGpuExecutionAcceleratorList(): Array<ModelOptimizationPolicy.ExecutionAccelerators.Accelerator>;
    setGpuExecutionAcceleratorList(value: Array<ModelOptimizationPolicy.ExecutionAccelerators.Accelerator>): ExecutionAccelerators;
    clearGpuExecutionAcceleratorList(): ExecutionAccelerators;
    addGpuExecutionAccelerator(value?: ModelOptimizationPolicy.ExecutionAccelerators.Accelerator, index?: number): ModelOptimizationPolicy.ExecutionAccelerators.Accelerator;

    getCpuExecutionAcceleratorList(): Array<ModelOptimizationPolicy.ExecutionAccelerators.Accelerator>;
    setCpuExecutionAcceleratorList(value: Array<ModelOptimizationPolicy.ExecutionAccelerators.Accelerator>): ExecutionAccelerators;
    clearCpuExecutionAcceleratorList(): ExecutionAccelerators;
    addCpuExecutionAccelerator(value?: ModelOptimizationPolicy.ExecutionAccelerators.Accelerator, index?: number): ModelOptimizationPolicy.ExecutionAccelerators.Accelerator;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecutionAccelerators.AsObject;
    static toObject(includeInstance: boolean, msg: ExecutionAccelerators): ExecutionAccelerators.AsObject;
    static serializeBinaryToWriter(message: ExecutionAccelerators, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExecutionAccelerators;
    static deserializeBinaryFromReader(message: ExecutionAccelerators, reader: jspb.BinaryReader): ExecutionAccelerators;
  }

  export namespace ExecutionAccelerators {
    export type AsObject = {
      gpuExecutionAcceleratorList: Array<ModelOptimizationPolicy.ExecutionAccelerators.Accelerator.AsObject>,
      cpuExecutionAcceleratorList: Array<ModelOptimizationPolicy.ExecutionAccelerators.Accelerator.AsObject>,
    }

    export class Accelerator extends jspb.Message {
      getName(): string;
      setName(value: string): Accelerator;

      getParametersMap(): jspb.Map<string, string>;
      clearParametersMap(): Accelerator;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Accelerator.AsObject;
      static toObject(includeInstance: boolean, msg: Accelerator): Accelerator.AsObject;
      static serializeBinaryToWriter(message: Accelerator, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Accelerator;
      static deserializeBinaryFromReader(message: Accelerator, reader: jspb.BinaryReader): Accelerator;
    }

    export namespace Accelerator {
      export type AsObject = {
        name: string,
        parametersMap: Array<[string, string]>,
      }
    }

  }


  export class PinnedMemoryBuffer extends jspb.Message {
    getEnable(): boolean;
    setEnable(value: boolean): PinnedMemoryBuffer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PinnedMemoryBuffer.AsObject;
    static toObject(includeInstance: boolean, msg: PinnedMemoryBuffer): PinnedMemoryBuffer.AsObject;
    static serializeBinaryToWriter(message: PinnedMemoryBuffer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PinnedMemoryBuffer;
    static deserializeBinaryFromReader(message: PinnedMemoryBuffer, reader: jspb.BinaryReader): PinnedMemoryBuffer;
  }

  export namespace PinnedMemoryBuffer {
    export type AsObject = {
      enable: boolean,
    }
  }


  export enum ModelPriority { 
    PRIORITY_DEFAULT = 0,
    PRIORITY_MAX = 1,
    PRIORITY_MIN = 2,
  }
}

export class ModelQueuePolicy extends jspb.Message {
  getTimeoutAction(): ModelQueuePolicy.TimeoutAction;
  setTimeoutAction(value: ModelQueuePolicy.TimeoutAction): ModelQueuePolicy;

  getDefaultTimeoutMicroseconds(): number;
  setDefaultTimeoutMicroseconds(value: number): ModelQueuePolicy;

  getAllowTimeoutOverride(): boolean;
  setAllowTimeoutOverride(value: boolean): ModelQueuePolicy;

  getMaxQueueSize(): number;
  setMaxQueueSize(value: number): ModelQueuePolicy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelQueuePolicy.AsObject;
  static toObject(includeInstance: boolean, msg: ModelQueuePolicy): ModelQueuePolicy.AsObject;
  static serializeBinaryToWriter(message: ModelQueuePolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelQueuePolicy;
  static deserializeBinaryFromReader(message: ModelQueuePolicy, reader: jspb.BinaryReader): ModelQueuePolicy;
}

export namespace ModelQueuePolicy {
  export type AsObject = {
    timeoutAction: ModelQueuePolicy.TimeoutAction,
    defaultTimeoutMicroseconds: number,
    allowTimeoutOverride: boolean,
    maxQueueSize: number,
  }

  export enum TimeoutAction { 
    REJECT = 0,
    DELAY = 1,
  }
}

export class ModelDynamicBatching extends jspb.Message {
  getPreferredBatchSizeList(): Array<number>;
  setPreferredBatchSizeList(value: Array<number>): ModelDynamicBatching;
  clearPreferredBatchSizeList(): ModelDynamicBatching;
  addPreferredBatchSize(value: number, index?: number): ModelDynamicBatching;

  getMaxQueueDelayMicroseconds(): number;
  setMaxQueueDelayMicroseconds(value: number): ModelDynamicBatching;

  getPreserveOrdering(): boolean;
  setPreserveOrdering(value: boolean): ModelDynamicBatching;

  getPriorityLevels(): number;
  setPriorityLevels(value: number): ModelDynamicBatching;

  getDefaultPriorityLevel(): number;
  setDefaultPriorityLevel(value: number): ModelDynamicBatching;

  getDefaultQueuePolicy(): ModelQueuePolicy | undefined;
  setDefaultQueuePolicy(value?: ModelQueuePolicy): ModelDynamicBatching;
  hasDefaultQueuePolicy(): boolean;
  clearDefaultQueuePolicy(): ModelDynamicBatching;

  getPriorityQueuePolicyMap(): jspb.Map<number, ModelQueuePolicy>;
  clearPriorityQueuePolicyMap(): ModelDynamicBatching;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelDynamicBatching.AsObject;
  static toObject(includeInstance: boolean, msg: ModelDynamicBatching): ModelDynamicBatching.AsObject;
  static serializeBinaryToWriter(message: ModelDynamicBatching, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelDynamicBatching;
  static deserializeBinaryFromReader(message: ModelDynamicBatching, reader: jspb.BinaryReader): ModelDynamicBatching;
}

export namespace ModelDynamicBatching {
  export type AsObject = {
    preferredBatchSizeList: Array<number>,
    maxQueueDelayMicroseconds: number,
    preserveOrdering: boolean,
    priorityLevels: number,
    defaultPriorityLevel: number,
    defaultQueuePolicy?: ModelQueuePolicy.AsObject,
    priorityQueuePolicyMap: Array<[number, ModelQueuePolicy.AsObject]>,
  }
}

export class ModelSequenceBatching extends jspb.Message {
  getDirect(): ModelSequenceBatching.StrategyDirect | undefined;
  setDirect(value?: ModelSequenceBatching.StrategyDirect): ModelSequenceBatching;
  hasDirect(): boolean;
  clearDirect(): ModelSequenceBatching;

  getOldest(): ModelSequenceBatching.StrategyOldest | undefined;
  setOldest(value?: ModelSequenceBatching.StrategyOldest): ModelSequenceBatching;
  hasOldest(): boolean;
  clearOldest(): ModelSequenceBatching;

  getMaxSequenceIdleMicroseconds(): number;
  setMaxSequenceIdleMicroseconds(value: number): ModelSequenceBatching;

  getControlInputList(): Array<ModelSequenceBatching.ControlInput>;
  setControlInputList(value: Array<ModelSequenceBatching.ControlInput>): ModelSequenceBatching;
  clearControlInputList(): ModelSequenceBatching;
  addControlInput(value?: ModelSequenceBatching.ControlInput, index?: number): ModelSequenceBatching.ControlInput;

  getStateList(): Array<ModelSequenceBatching.State>;
  setStateList(value: Array<ModelSequenceBatching.State>): ModelSequenceBatching;
  clearStateList(): ModelSequenceBatching;
  addState(value?: ModelSequenceBatching.State, index?: number): ModelSequenceBatching.State;

  getStrategyChoiceCase(): ModelSequenceBatching.StrategyChoiceCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelSequenceBatching.AsObject;
  static toObject(includeInstance: boolean, msg: ModelSequenceBatching): ModelSequenceBatching.AsObject;
  static serializeBinaryToWriter(message: ModelSequenceBatching, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelSequenceBatching;
  static deserializeBinaryFromReader(message: ModelSequenceBatching, reader: jspb.BinaryReader): ModelSequenceBatching;
}

export namespace ModelSequenceBatching {
  export type AsObject = {
    direct?: ModelSequenceBatching.StrategyDirect.AsObject,
    oldest?: ModelSequenceBatching.StrategyOldest.AsObject,
    maxSequenceIdleMicroseconds: number,
    controlInputList: Array<ModelSequenceBatching.ControlInput.AsObject>,
    stateList: Array<ModelSequenceBatching.State.AsObject>,
  }

  export class Control extends jspb.Message {
    getKind(): ModelSequenceBatching.Control.Kind;
    setKind(value: ModelSequenceBatching.Control.Kind): Control;

    getInt32FalseTrueList(): Array<number>;
    setInt32FalseTrueList(value: Array<number>): Control;
    clearInt32FalseTrueList(): Control;
    addInt32FalseTrue(value: number, index?: number): Control;

    getFp32FalseTrueList(): Array<number>;
    setFp32FalseTrueList(value: Array<number>): Control;
    clearFp32FalseTrueList(): Control;
    addFp32FalseTrue(value: number, index?: number): Control;

    getBoolFalseTrueList(): Array<boolean>;
    setBoolFalseTrueList(value: Array<boolean>): Control;
    clearBoolFalseTrueList(): Control;
    addBoolFalseTrue(value: boolean, index?: number): Control;

    getDataType(): DataType;
    setDataType(value: DataType): Control;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Control.AsObject;
    static toObject(includeInstance: boolean, msg: Control): Control.AsObject;
    static serializeBinaryToWriter(message: Control, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Control;
    static deserializeBinaryFromReader(message: Control, reader: jspb.BinaryReader): Control;
  }

  export namespace Control {
    export type AsObject = {
      kind: ModelSequenceBatching.Control.Kind,
      int32FalseTrueList: Array<number>,
      fp32FalseTrueList: Array<number>,
      boolFalseTrueList: Array<boolean>,
      dataType: DataType,
    }

    export enum Kind { 
      CONTROL_SEQUENCE_START = 0,
      CONTROL_SEQUENCE_READY = 1,
      CONTROL_SEQUENCE_END = 2,
      CONTROL_SEQUENCE_CORRID = 3,
    }
  }


  export class ControlInput extends jspb.Message {
    getName(): string;
    setName(value: string): ControlInput;

    getControlList(): Array<ModelSequenceBatching.Control>;
    setControlList(value: Array<ModelSequenceBatching.Control>): ControlInput;
    clearControlList(): ControlInput;
    addControl(value?: ModelSequenceBatching.Control, index?: number): ModelSequenceBatching.Control;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ControlInput.AsObject;
    static toObject(includeInstance: boolean, msg: ControlInput): ControlInput.AsObject;
    static serializeBinaryToWriter(message: ControlInput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ControlInput;
    static deserializeBinaryFromReader(message: ControlInput, reader: jspb.BinaryReader): ControlInput;
  }

  export namespace ControlInput {
    export type AsObject = {
      name: string,
      controlList: Array<ModelSequenceBatching.Control.AsObject>,
    }
  }


  export class InitialState extends jspb.Message {
    getDataType(): DataType;
    setDataType(value: DataType): InitialState;

    getDimsList(): Array<number>;
    setDimsList(value: Array<number>): InitialState;
    clearDimsList(): InitialState;
    addDims(value: number, index?: number): InitialState;

    getZeroData(): boolean;
    setZeroData(value: boolean): InitialState;

    getDataFile(): string;
    setDataFile(value: string): InitialState;

    getName(): string;
    setName(value: string): InitialState;

    getStateDataCase(): InitialState.StateDataCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InitialState.AsObject;
    static toObject(includeInstance: boolean, msg: InitialState): InitialState.AsObject;
    static serializeBinaryToWriter(message: InitialState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InitialState;
    static deserializeBinaryFromReader(message: InitialState, reader: jspb.BinaryReader): InitialState;
  }

  export namespace InitialState {
    export type AsObject = {
      dataType: DataType,
      dimsList: Array<number>,
      zeroData: boolean,
      dataFile: string,
      name: string,
    }

    export enum StateDataCase { 
      STATE_DATA_NOT_SET = 0,
      ZERO_DATA = 3,
      DATA_FILE = 4,
    }
  }


  export class State extends jspb.Message {
    getInputName(): string;
    setInputName(value: string): State;

    getOutputName(): string;
    setOutputName(value: string): State;

    getDataType(): DataType;
    setDataType(value: DataType): State;

    getDimsList(): Array<number>;
    setDimsList(value: Array<number>): State;
    clearDimsList(): State;
    addDims(value: number, index?: number): State;

    getInitialStateList(): Array<ModelSequenceBatching.InitialState>;
    setInitialStateList(value: Array<ModelSequenceBatching.InitialState>): State;
    clearInitialStateList(): State;
    addInitialState(value?: ModelSequenceBatching.InitialState, index?: number): ModelSequenceBatching.InitialState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): State.AsObject;
    static toObject(includeInstance: boolean, msg: State): State.AsObject;
    static serializeBinaryToWriter(message: State, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): State;
    static deserializeBinaryFromReader(message: State, reader: jspb.BinaryReader): State;
  }

  export namespace State {
    export type AsObject = {
      inputName: string,
      outputName: string,
      dataType: DataType,
      dimsList: Array<number>,
      initialStateList: Array<ModelSequenceBatching.InitialState.AsObject>,
    }
  }


  export class StrategyDirect extends jspb.Message {
    getMaxQueueDelayMicroseconds(): number;
    setMaxQueueDelayMicroseconds(value: number): StrategyDirect;

    getMinimumSlotUtilization(): number;
    setMinimumSlotUtilization(value: number): StrategyDirect;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StrategyDirect.AsObject;
    static toObject(includeInstance: boolean, msg: StrategyDirect): StrategyDirect.AsObject;
    static serializeBinaryToWriter(message: StrategyDirect, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StrategyDirect;
    static deserializeBinaryFromReader(message: StrategyDirect, reader: jspb.BinaryReader): StrategyDirect;
  }

  export namespace StrategyDirect {
    export type AsObject = {
      maxQueueDelayMicroseconds: number,
      minimumSlotUtilization: number,
    }
  }


  export class StrategyOldest extends jspb.Message {
    getMaxCandidateSequences(): number;
    setMaxCandidateSequences(value: number): StrategyOldest;

    getPreferredBatchSizeList(): Array<number>;
    setPreferredBatchSizeList(value: Array<number>): StrategyOldest;
    clearPreferredBatchSizeList(): StrategyOldest;
    addPreferredBatchSize(value: number, index?: number): StrategyOldest;

    getMaxQueueDelayMicroseconds(): number;
    setMaxQueueDelayMicroseconds(value: number): StrategyOldest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StrategyOldest.AsObject;
    static toObject(includeInstance: boolean, msg: StrategyOldest): StrategyOldest.AsObject;
    static serializeBinaryToWriter(message: StrategyOldest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StrategyOldest;
    static deserializeBinaryFromReader(message: StrategyOldest, reader: jspb.BinaryReader): StrategyOldest;
  }

  export namespace StrategyOldest {
    export type AsObject = {
      maxCandidateSequences: number,
      preferredBatchSizeList: Array<number>,
      maxQueueDelayMicroseconds: number,
    }
  }


  export enum StrategyChoiceCase { 
    STRATEGY_CHOICE_NOT_SET = 0,
    DIRECT = 3,
    OLDEST = 4,
  }
}

export class ModelEnsembling extends jspb.Message {
  getStepList(): Array<ModelEnsembling.Step>;
  setStepList(value: Array<ModelEnsembling.Step>): ModelEnsembling;
  clearStepList(): ModelEnsembling;
  addStep(value?: ModelEnsembling.Step, index?: number): ModelEnsembling.Step;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelEnsembling.AsObject;
  static toObject(includeInstance: boolean, msg: ModelEnsembling): ModelEnsembling.AsObject;
  static serializeBinaryToWriter(message: ModelEnsembling, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelEnsembling;
  static deserializeBinaryFromReader(message: ModelEnsembling, reader: jspb.BinaryReader): ModelEnsembling;
}

export namespace ModelEnsembling {
  export type AsObject = {
    stepList: Array<ModelEnsembling.Step.AsObject>,
  }

  export class Step extends jspb.Message {
    getModelName(): string;
    setModelName(value: string): Step;

    getModelVersion(): number;
    setModelVersion(value: number): Step;

    getInputMapMap(): jspb.Map<string, string>;
    clearInputMapMap(): Step;

    getOutputMapMap(): jspb.Map<string, string>;
    clearOutputMapMap(): Step;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Step.AsObject;
    static toObject(includeInstance: boolean, msg: Step): Step.AsObject;
    static serializeBinaryToWriter(message: Step, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Step;
    static deserializeBinaryFromReader(message: Step, reader: jspb.BinaryReader): Step;
  }

  export namespace Step {
    export type AsObject = {
      modelName: string,
      modelVersion: number,
      inputMapMap: Array<[string, string]>,
      outputMapMap: Array<[string, string]>,
    }
  }

}

export class ModelParameter extends jspb.Message {
  getStringValue(): string;
  setStringValue(value: string): ModelParameter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelParameter.AsObject;
  static toObject(includeInstance: boolean, msg: ModelParameter): ModelParameter.AsObject;
  static serializeBinaryToWriter(message: ModelParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelParameter;
  static deserializeBinaryFromReader(message: ModelParameter, reader: jspb.BinaryReader): ModelParameter;
}

export namespace ModelParameter {
  export type AsObject = {
    stringValue: string,
  }
}

export class ModelWarmup extends jspb.Message {
  getName(): string;
  setName(value: string): ModelWarmup;

  getBatchSize(): number;
  setBatchSize(value: number): ModelWarmup;

  getInputsMap(): jspb.Map<string, ModelWarmup.Input>;
  clearInputsMap(): ModelWarmup;

  getCount(): number;
  setCount(value: number): ModelWarmup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelWarmup.AsObject;
  static toObject(includeInstance: boolean, msg: ModelWarmup): ModelWarmup.AsObject;
  static serializeBinaryToWriter(message: ModelWarmup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelWarmup;
  static deserializeBinaryFromReader(message: ModelWarmup, reader: jspb.BinaryReader): ModelWarmup;
}

export namespace ModelWarmup {
  export type AsObject = {
    name: string,
    batchSize: number,
    inputsMap: Array<[string, ModelWarmup.Input.AsObject]>,
    count: number,
  }

  export class Input extends jspb.Message {
    getDataType(): DataType;
    setDataType(value: DataType): Input;

    getDimsList(): Array<number>;
    setDimsList(value: Array<number>): Input;
    clearDimsList(): Input;
    addDims(value: number, index?: number): Input;

    getZeroData(): boolean;
    setZeroData(value: boolean): Input;

    getRandomData(): boolean;
    setRandomData(value: boolean): Input;

    getInputDataFile(): string;
    setInputDataFile(value: string): Input;

    getInputDataTypeCase(): Input.InputDataTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Input.AsObject;
    static toObject(includeInstance: boolean, msg: Input): Input.AsObject;
    static serializeBinaryToWriter(message: Input, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Input;
    static deserializeBinaryFromReader(message: Input, reader: jspb.BinaryReader): Input;
  }

  export namespace Input {
    export type AsObject = {
      dataType: DataType,
      dimsList: Array<number>,
      zeroData: boolean,
      randomData: boolean,
      inputDataFile: string,
    }

    export enum InputDataTypeCase { 
      INPUT_DATA_TYPE_NOT_SET = 0,
      ZERO_DATA = 3,
      RANDOM_DATA = 4,
      INPUT_DATA_FILE = 5,
    }
  }

}

export class ModelOperations extends jspb.Message {
  getOpLibraryFilenameList(): Array<string>;
  setOpLibraryFilenameList(value: Array<string>): ModelOperations;
  clearOpLibraryFilenameList(): ModelOperations;
  addOpLibraryFilename(value: string, index?: number): ModelOperations;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelOperations.AsObject;
  static toObject(includeInstance: boolean, msg: ModelOperations): ModelOperations.AsObject;
  static serializeBinaryToWriter(message: ModelOperations, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelOperations;
  static deserializeBinaryFromReader(message: ModelOperations, reader: jspb.BinaryReader): ModelOperations;
}

export namespace ModelOperations {
  export type AsObject = {
    opLibraryFilenameList: Array<string>,
  }
}

export class ModelTransactionPolicy extends jspb.Message {
  getDecoupled(): boolean;
  setDecoupled(value: boolean): ModelTransactionPolicy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelTransactionPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: ModelTransactionPolicy): ModelTransactionPolicy.AsObject;
  static serializeBinaryToWriter(message: ModelTransactionPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelTransactionPolicy;
  static deserializeBinaryFromReader(message: ModelTransactionPolicy, reader: jspb.BinaryReader): ModelTransactionPolicy;
}

export namespace ModelTransactionPolicy {
  export type AsObject = {
    decoupled: boolean,
  }
}

export class ModelRepositoryAgents extends jspb.Message {
  getAgentsList(): Array<ModelRepositoryAgents.Agent>;
  setAgentsList(value: Array<ModelRepositoryAgents.Agent>): ModelRepositoryAgents;
  clearAgentsList(): ModelRepositoryAgents;
  addAgents(value?: ModelRepositoryAgents.Agent, index?: number): ModelRepositoryAgents.Agent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelRepositoryAgents.AsObject;
  static toObject(includeInstance: boolean, msg: ModelRepositoryAgents): ModelRepositoryAgents.AsObject;
  static serializeBinaryToWriter(message: ModelRepositoryAgents, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelRepositoryAgents;
  static deserializeBinaryFromReader(message: ModelRepositoryAgents, reader: jspb.BinaryReader): ModelRepositoryAgents;
}

export namespace ModelRepositoryAgents {
  export type AsObject = {
    agentsList: Array<ModelRepositoryAgents.Agent.AsObject>,
  }

  export class Agent extends jspb.Message {
    getName(): string;
    setName(value: string): Agent;

    getParametersMap(): jspb.Map<string, string>;
    clearParametersMap(): Agent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Agent.AsObject;
    static toObject(includeInstance: boolean, msg: Agent): Agent.AsObject;
    static serializeBinaryToWriter(message: Agent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Agent;
    static deserializeBinaryFromReader(message: Agent, reader: jspb.BinaryReader): Agent;
  }

  export namespace Agent {
    export type AsObject = {
      name: string,
      parametersMap: Array<[string, string]>,
    }
  }

}

export class ModelResponseCache extends jspb.Message {
  getEnable(): boolean;
  setEnable(value: boolean): ModelResponseCache;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelResponseCache.AsObject;
  static toObject(includeInstance: boolean, msg: ModelResponseCache): ModelResponseCache.AsObject;
  static serializeBinaryToWriter(message: ModelResponseCache, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelResponseCache;
  static deserializeBinaryFromReader(message: ModelResponseCache, reader: jspb.BinaryReader): ModelResponseCache;
}

export namespace ModelResponseCache {
  export type AsObject = {
    enable: boolean,
  }
}

export class ModelConfig extends jspb.Message {
  getName(): string;
  setName(value: string): ModelConfig;

  getPlatform(): string;
  setPlatform(value: string): ModelConfig;

  getBackend(): string;
  setBackend(value: string): ModelConfig;

  getVersionPolicy(): ModelVersionPolicy | undefined;
  setVersionPolicy(value?: ModelVersionPolicy): ModelConfig;
  hasVersionPolicy(): boolean;
  clearVersionPolicy(): ModelConfig;

  getMaxBatchSize(): number;
  setMaxBatchSize(value: number): ModelConfig;

  getInputList(): Array<ModelInput>;
  setInputList(value: Array<ModelInput>): ModelConfig;
  clearInputList(): ModelConfig;
  addInput(value?: ModelInput, index?: number): ModelInput;

  getOutputList(): Array<ModelOutput>;
  setOutputList(value: Array<ModelOutput>): ModelConfig;
  clearOutputList(): ModelConfig;
  addOutput(value?: ModelOutput, index?: number): ModelOutput;

  getBatchInputList(): Array<BatchInput>;
  setBatchInputList(value: Array<BatchInput>): ModelConfig;
  clearBatchInputList(): ModelConfig;
  addBatchInput(value?: BatchInput, index?: number): BatchInput;

  getBatchOutputList(): Array<BatchOutput>;
  setBatchOutputList(value: Array<BatchOutput>): ModelConfig;
  clearBatchOutputList(): ModelConfig;
  addBatchOutput(value?: BatchOutput, index?: number): BatchOutput;

  getOptimization(): ModelOptimizationPolicy | undefined;
  setOptimization(value?: ModelOptimizationPolicy): ModelConfig;
  hasOptimization(): boolean;
  clearOptimization(): ModelConfig;

  getDynamicBatching(): ModelDynamicBatching | undefined;
  setDynamicBatching(value?: ModelDynamicBatching): ModelConfig;
  hasDynamicBatching(): boolean;
  clearDynamicBatching(): ModelConfig;

  getSequenceBatching(): ModelSequenceBatching | undefined;
  setSequenceBatching(value?: ModelSequenceBatching): ModelConfig;
  hasSequenceBatching(): boolean;
  clearSequenceBatching(): ModelConfig;

  getEnsembleScheduling(): ModelEnsembling | undefined;
  setEnsembleScheduling(value?: ModelEnsembling): ModelConfig;
  hasEnsembleScheduling(): boolean;
  clearEnsembleScheduling(): ModelConfig;

  getInstanceGroupList(): Array<ModelInstanceGroup>;
  setInstanceGroupList(value: Array<ModelInstanceGroup>): ModelConfig;
  clearInstanceGroupList(): ModelConfig;
  addInstanceGroup(value?: ModelInstanceGroup, index?: number): ModelInstanceGroup;

  getDefaultModelFilename(): string;
  setDefaultModelFilename(value: string): ModelConfig;

  getCcModelFilenamesMap(): jspb.Map<string, string>;
  clearCcModelFilenamesMap(): ModelConfig;

  getMetricTagsMap(): jspb.Map<string, string>;
  clearMetricTagsMap(): ModelConfig;

  getParametersMap(): jspb.Map<string, ModelParameter>;
  clearParametersMap(): ModelConfig;

  getModelWarmupList(): Array<ModelWarmup>;
  setModelWarmupList(value: Array<ModelWarmup>): ModelConfig;
  clearModelWarmupList(): ModelConfig;
  addModelWarmup(value?: ModelWarmup, index?: number): ModelWarmup;

  getModelOperations(): ModelOperations | undefined;
  setModelOperations(value?: ModelOperations): ModelConfig;
  hasModelOperations(): boolean;
  clearModelOperations(): ModelConfig;

  getModelTransactionPolicy(): ModelTransactionPolicy | undefined;
  setModelTransactionPolicy(value?: ModelTransactionPolicy): ModelConfig;
  hasModelTransactionPolicy(): boolean;
  clearModelTransactionPolicy(): ModelConfig;

  getModelRepositoryAgents(): ModelRepositoryAgents | undefined;
  setModelRepositoryAgents(value?: ModelRepositoryAgents): ModelConfig;
  hasModelRepositoryAgents(): boolean;
  clearModelRepositoryAgents(): ModelConfig;

  getResponseCache(): ModelResponseCache | undefined;
  setResponseCache(value?: ModelResponseCache): ModelConfig;
  hasResponseCache(): boolean;
  clearResponseCache(): ModelConfig;

  getSchedulingChoiceCase(): ModelConfig.SchedulingChoiceCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ModelConfig): ModelConfig.AsObject;
  static serializeBinaryToWriter(message: ModelConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelConfig;
  static deserializeBinaryFromReader(message: ModelConfig, reader: jspb.BinaryReader): ModelConfig;
}

export namespace ModelConfig {
  export type AsObject = {
    name: string,
    platform: string,
    backend: string,
    versionPolicy?: ModelVersionPolicy.AsObject,
    maxBatchSize: number,
    inputList: Array<ModelInput.AsObject>,
    outputList: Array<ModelOutput.AsObject>,
    batchInputList: Array<BatchInput.AsObject>,
    batchOutputList: Array<BatchOutput.AsObject>,
    optimization?: ModelOptimizationPolicy.AsObject,
    dynamicBatching?: ModelDynamicBatching.AsObject,
    sequenceBatching?: ModelSequenceBatching.AsObject,
    ensembleScheduling?: ModelEnsembling.AsObject,
    instanceGroupList: Array<ModelInstanceGroup.AsObject>,
    defaultModelFilename: string,
    ccModelFilenamesMap: Array<[string, string]>,
    metricTagsMap: Array<[string, string]>,
    parametersMap: Array<[string, ModelParameter.AsObject]>,
    modelWarmupList: Array<ModelWarmup.AsObject>,
    modelOperations?: ModelOperations.AsObject,
    modelTransactionPolicy?: ModelTransactionPolicy.AsObject,
    modelRepositoryAgents?: ModelRepositoryAgents.AsObject,
    responseCache?: ModelResponseCache.AsObject,
  }

  export enum SchedulingChoiceCase { 
    SCHEDULING_CHOICE_NOT_SET = 0,
    DYNAMIC_BATCHING = 11,
    SEQUENCE_BATCHING = 13,
    ENSEMBLE_SCHEDULING = 15,
  }
}

export enum DataType { 
  TYPE_INVALID = 0,
  TYPE_BOOL = 1,
  TYPE_UINT8 = 2,
  TYPE_UINT16 = 3,
  TYPE_UINT32 = 4,
  TYPE_UINT64 = 5,
  TYPE_INT8 = 6,
  TYPE_INT16 = 7,
  TYPE_INT32 = 8,
  TYPE_INT64 = 9,
  TYPE_FP16 = 10,
  TYPE_FP32 = 11,
  TYPE_FP64 = 12,
  TYPE_STRING = 13,
  TYPE_BF16 = 14,
}
