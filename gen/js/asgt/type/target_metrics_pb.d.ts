import * as jspb from 'google-protobuf'



export class TargetMetrics extends jspb.Message {
  getTarget(): string;
  setTarget(value: string): TargetMetrics;

  getMetricsList(): Array<TargetMetrics.Metric>;
  setMetricsList(value: Array<TargetMetrics.Metric>): TargetMetrics;
  clearMetricsList(): TargetMetrics;
  addMetrics(value?: TargetMetrics.Metric, index?: number): TargetMetrics.Metric;

  getMccList(): Array<number>;
  setMccList(value: Array<number>): TargetMetrics;
  clearMccList(): TargetMetrics;
  addMcc(value: number, index?: number): TargetMetrics;

  getAccuracyList(): Array<number>;
  setAccuracyList(value: Array<number>): TargetMetrics;
  clearAccuracyList(): TargetMetrics;
  addAccuracy(value: number, index?: number): TargetMetrics;

  getBalancedAccuracyList(): Array<number>;
  setBalancedAccuracyList(value: Array<number>): TargetMetrics;
  clearBalancedAccuracyList(): TargetMetrics;
  addBalancedAccuracy(value: number, index?: number): TargetMetrics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: TargetMetrics): TargetMetrics.AsObject;
  static serializeBinaryToWriter(message: TargetMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetMetrics;
  static deserializeBinaryFromReader(message: TargetMetrics, reader: jspb.BinaryReader): TargetMetrics;
}

export namespace TargetMetrics {
  export type AsObject = {
    target: string,
    metricsList: Array<TargetMetrics.Metric.AsObject>,
    mccList: Array<number>,
    accuracyList: Array<number>,
    balancedAccuracyList: Array<number>,
  }

  export class Metric extends jspb.Message {
    getPrecision(): number;
    setPrecision(value: number): Metric;

    getConfidence(): number;
    setConfidence(value: number): Metric;

    getAnswerRate(): number;
    setAnswerRate(value: number): Metric;

    getTruePositive(): number;
    setTruePositive(value: number): Metric;

    getTrueNegative(): number;
    setTrueNegative(value: number): Metric;

    getFalsePositive(): number;
    setFalsePositive(value: number): Metric;

    getFalseNegative(): number;
    setFalseNegative(value: number): Metric;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Metric.AsObject;
    static toObject(includeInstance: boolean, msg: Metric): Metric.AsObject;
    static serializeBinaryToWriter(message: Metric, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Metric;
    static deserializeBinaryFromReader(message: Metric, reader: jspb.BinaryReader): Metric;
  }

  export namespace Metric {
    export type AsObject = {
      precision: number,
      confidence: number,
      answerRate: number,
      truePositive: number,
      trueNegative: number,
      falsePositive: number,
      falseNegative: number,
    }
  }

}

