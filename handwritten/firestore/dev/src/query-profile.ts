/*!
 * Copyright 2024 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as firestore from '@google-cloud/firestore';
import {google} from '../protos/firestore_v1_proto_api';
import {Serializer} from './serializer';
import IPlanSummary = google.firestore.v1.IPlanSummary;
import IExecutionStats = google.firestore.v1.IExecutionStats;
import IExplainMetrics = google.firestore.v1.IExplainMetrics;

/**
 * PlanSummary contains information about the planning stage of a query.
 *
 * @class PlanSummary
 */
export class PlanSummary implements firestore.PlanSummary {
  /**
   * @private
   * @internal
   */
  constructor(readonly indexesUsed: Record<string, unknown>[]) {}

  /**
   * @private
   * @internal
   */
  static _fromProto(
    plan: IPlanSummary | null | undefined,
    serializer: Serializer,
  ): PlanSummary {
    const indexes: Record<string, unknown>[] = [];
    if (plan && plan.indexesUsed) {
      for (const index of plan.indexesUsed) {
        indexes.push(serializer.decodeGoogleProtobufStruct(index));
      }
    }
    return new PlanSummary(indexes);
  }
}

/**
 *  ExecutionStats contains information about the execution of a query.
 *
 * @class ExecutionStats
 */
export class ExecutionStats implements firestore.ExecutionStats {
  /**
   * @private
   * @internal
   */
  constructor(
    readonly resultsReturned: number,
    readonly executionDuration: firestore.Duration,
    readonly readOperations: number,
    readonly debugStats: Record<string, unknown>,
  ) {}

  /**
   * @private
   * @internal
   */
  static _fromProto(
    stats: IExecutionStats | null | undefined,
    serializer: Serializer,
  ): ExecutionStats | null {
    if (stats) {
      return new ExecutionStats(
        Number(stats.resultsReturned),
        {
          seconds: Number(stats.executionDuration?.seconds),
          nanoseconds: Number(stats.executionDuration?.nanos),
        },
        Number(stats.readOperations),
        serializer.decodeGoogleProtobufStruct(stats.debugStats),
      );
    }
    return null;
  }
}

/**
 * ExplainMetrics contains information about planning and execution of a query.
 *
 * @class ExplainMetrics
 */
export class ExplainMetrics implements firestore.ExplainMetrics {
  /**
   * @private
   * @internal
   */
  constructor(
    readonly planSummary: PlanSummary,
    readonly executionStats: ExecutionStats | null,
  ) {}

  /**
   * @private
   * @internal
   */
  static _fromProto(
    metrics: IExplainMetrics,
    serializer: Serializer,
  ): ExplainMetrics {
    return new ExplainMetrics(
      PlanSummary._fromProto(metrics.planSummary, serializer),
      ExecutionStats._fromProto(metrics.executionStats, serializer),
    );
  }
}

/**
 * ExplainResults contains information about planning, execution, and results
 * of a query.
 *
 * @class ExplainResults
 */
export class ExplainResults<T> implements firestore.ExplainResults<T> {
  /**
   * @private
   * @internal
   */
  constructor(
    readonly metrics: ExplainMetrics,
    readonly snapshot: T | null,
  ) {}
}
