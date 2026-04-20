/*!
 * Copyright 2026 Google LLC. All Rights Reserved.
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

import {status} from '@grpc/grpc-js';
import * as protos from '../../protos/protos';

// Import Protobuf types
import spanner = protos.google.spanner;
import SpannerActionOutcome = spanner.executor.v1.SpannerActionOutcome;
import SpannerAsyncActionResponse = spanner.executor.v1.SpannerAsyncActionResponse;

/**
 * Defines the interface for sending responses back to the client for a specific
 * gRPC stream. This is implemented by ExecutionFlowContext in
 * cloud-client-executor.ts to avoid circular dependencies.
 */
export interface ExecutionFlowContextInterface {
  onNext(response: SpannerAsyncActionResponse): void;
}

/**
 * A utility class for sending action outcomes back to the client via a gRPC bidirectional stream.
 * It writes SpannerAsyncActionResponse messages directly to the active stream context.
 */
export class OutcomeSender {
  private actionId: number;
  private context: ExecutionFlowContextInterface;
  constructor(actionId: number, context: ExecutionFlowContextInterface) {
    this.actionId = actionId;
    this.context = context;
  }

  public finishWithOK(): {code: number; details: string} {
    const outcome = SpannerActionOutcome.create({
      status: CloudExecutor.toProto(status.OK),
    });
    return this.sendOutcome(outcome);
  }

  public finishWithError(err: any): {code: number; details: string} {
    const s = CloudExecutor.toStatus(err);
    const outcome = SpannerActionOutcome.create({
      status: CloudExecutor.toProto(s.code, s.message),
    });
    return this.sendOutcome(outcome);
  }

  private sendOutcome(outcome: SpannerActionOutcome): {
    code: number;
    details: string;
  } {
    try {
      const response = SpannerAsyncActionResponse.create({
        actionId: this.actionId,
        outcome: outcome,
      });
      this.context.onNext(response);
      return {code: status.OK, details: ''};
    } catch (e: any) {
      console.error('Failed to send outcome', e);
      return {code: status.INTERNAL, details: e.message};
    }
  }
}

/**
 * A utility class providing static helper methods for the Cloud Spanner executor.
 */
export class CloudExecutor {
  public static readonly PROJECT_ID = 'spanner-cloud-systest';

  /**
   * Maps an error object to a gRPC status code and message.
   */
  public static toStatus(err: any): {code: number; message: string} {
    let code = status.UNKNOWN;
    const message = err.message || 'Unknown error';

    if (err.code !== undefined && typeof err.code === 'number') {
      code = err.code;
    }

    return {code, message};
  }

  /** Converts a gRPC status code and message into a protobuf Status object. */
  public static toProto(
    code: number,
    message?: string,
  ): protos.google.rpc.IStatus {
    return {
      code: code,
      message: message || '',
    };
  }
}
