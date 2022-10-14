import * as jspb from 'google-protobuf'

import * as ssn_mlservice_v2_feature_pb from '../../../ssn/mlservice/v2/feature_pb';


export class Example extends jspb.Message {
  getFeatures(): ssn_mlservice_v2_feature_pb.Features | undefined;
  setFeatures(value?: ssn_mlservice_v2_feature_pb.Features): Example;
  hasFeatures(): boolean;
  clearFeatures(): Example;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Example.AsObject;
  static toObject(includeInstance: boolean, msg: Example): Example.AsObject;
  static serializeBinaryToWriter(message: Example, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Example;
  static deserializeBinaryFromReader(message: Example, reader: jspb.BinaryReader): Example;
}

export namespace Example {
  export type AsObject = {
    features?: ssn_mlservice_v2_feature_pb.Features.AsObject,
  }
}

export class SequenceExample extends jspb.Message {
  getContext(): ssn_mlservice_v2_feature_pb.Features | undefined;
  setContext(value?: ssn_mlservice_v2_feature_pb.Features): SequenceExample;
  hasContext(): boolean;
  clearContext(): SequenceExample;

  getFeatureLists(): ssn_mlservice_v2_feature_pb.FeatureLists | undefined;
  setFeatureLists(value?: ssn_mlservice_v2_feature_pb.FeatureLists): SequenceExample;
  hasFeatureLists(): boolean;
  clearFeatureLists(): SequenceExample;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SequenceExample.AsObject;
  static toObject(includeInstance: boolean, msg: SequenceExample): SequenceExample.AsObject;
  static serializeBinaryToWriter(message: SequenceExample, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SequenceExample;
  static deserializeBinaryFromReader(message: SequenceExample, reader: jspb.BinaryReader): SequenceExample;
}

export namespace SequenceExample {
  export type AsObject = {
    context?: ssn_mlservice_v2_feature_pb.Features.AsObject,
    featureLists?: ssn_mlservice_v2_feature_pb.FeatureLists.AsObject,
  }
}

