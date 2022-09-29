// package: asgt.type
// file: asgt/type/target_metrics.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class TargetMetrics extends jspb.Message { 
    getTarget(): string;
    setTarget(value: string): TargetMetrics;
    clearMetricsList(): void;
    getMetricsList(): Array<TargetMetrics.Metric>;
    setMetricsList(value: Array<TargetMetrics.Metric>): TargetMetrics;
    addMetrics(value?: TargetMetrics.Metric, index?: number): TargetMetrics.Metric;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TargetMetrics.AsObject;
    static toObject(includeInstance: boolean, msg: TargetMetrics): TargetMetrics.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TargetMetrics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TargetMetrics;
    static deserializeBinaryFromReader(message: TargetMetrics, reader: jspb.BinaryReader): TargetMetrics;
}

export namespace TargetMetrics {
    export type AsObject = {
        target: string,
        metricsList: Array<TargetMetrics.Metric.AsObject>,
    }


    export class Metric extends jspb.Message { 
        getPrecision(): number;
        setPrecision(value: number): Metric;
        getConfidence(): number;
        setConfidence(value: number): Metric;
        getAnswerRate(): number;
        setAnswerRate(value: number): Metric;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Metric.AsObject;
        static toObject(includeInstance: boolean, msg: Metric): Metric.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Metric, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Metric;
        static deserializeBinaryFromReader(message: Metric, reader: jspb.BinaryReader): Metric;
    }

    export namespace Metric {
        export type AsObject = {
            precision: number,
            confidence: number,
            answerRate: number,
        }
    }

}
