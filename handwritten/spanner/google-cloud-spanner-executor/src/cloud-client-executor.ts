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

import {ServerDuplexStream, status} from '@grpc/grpc-js';
import {Spanner} from '../../src';
import {trace, context, Tracer} from '@opentelemetry/api';
import * as protos from '../../protos/protos';
import {CloudUtil} from './cloud-util';
import {OutcomeSender, ExecutionFlowContextInterface} from './cloud-executor';
import spanner = protos.google.spanner;
import SpannerAsyncActionRequest = spanner.executor.v1.SpannerAsyncActionRequest;
import SpannerAsyncActionResponse = spanner.executor.v1.SpannerAsyncActionResponse;
import ISpannerAction = spanner.executor.v1.ISpannerAction;
import IAdminAction = spanner.executor.v1.IAdminAction;
import ICreateCloudInstanceAction = spanner.executor.v1.ICreateCloudInstanceAction;

/**
 * Context for a single stream connection.
 */
export class ExecutionFlowContext implements ExecutionFlowContextInterface {
  private call: ServerDuplexStream<
    SpannerAsyncActionRequest,
    SpannerAsyncActionResponse
  >;

  constructor(
    call: ServerDuplexStream<
      SpannerAsyncActionRequest,
      SpannerAsyncActionResponse
    >,
  ) {
    this.call = call;
  }

  /**
   * Sends a response back to the client.
   */
  public onNext(response: SpannerAsyncActionResponse): void {
    // Prevent writing if client cancelled the call, or the underlying Node stream is un-writable/destroyed
    if (
      this.call.cancelled ||
      this.call.destroyed ||
      this.call.writable === false
    ) {
      console.warn('Attempted to write to a closed or cancelled stream.');
      return;
    }

    this.call.write(response);
  }

  /**
   * Sends an error back to the client.
   */
  public onError(error: Error): void {
    const stream = this.call as any;

    if (this.call.cancelled || stream.destroyed || stream.writable === false) {
      console.warn(
        'Attempted to emit error to a closed or cancelled stream.',
        error,
      );
      return;
    }

    this.call.emit('error', error);
  }

  /**
   * Clean up resources associated with the context.
   */
  public cleanup(): void {
    console.log('Cleaning up ExecutionFlowContext');
  }
}

type ActionHandler = (action: any, sender: OutcomeSender) => Promise<void>;

export class CloudClientExecutor {
  private spanner: Spanner;
  private tracer: Tracer;

  private readonly adminActionRegistry: Record<string, ActionHandler> = {
    createCloudInstance: (action, sender) =>
      this.executeCreateCloudInstance(
        action as ICreateCloudInstanceAction,
        sender,
      ),
  };

  private readonly actionRegistry: Record<string, ActionHandler> = {
    admin: (action, sender) =>
      this.executeAdminAction(action as IAdminAction, sender),
  };

  constructor() {
    const spannerOptions = CloudUtil.getSpannerOptions();
    this.spanner = new Spanner(spannerOptions);
    this.tracer = trace.getTracer(CloudClientExecutor.name);
  }

  /**
   * Creates a new ExecutionFlowContext for a stream.
   */
  public createExecutionFlowContext(
    call: ServerDuplexStream<
      SpannerAsyncActionRequest,
      SpannerAsyncActionResponse
    >,
  ): ExecutionFlowContext {
    return new ExecutionFlowContext(call);
  }

  /**
   * Starts handling a SpannerAsyncActionRequest.
   */
  public startHandlingRequest(
    req: SpannerAsyncActionRequest,
    executionContext: ExecutionFlowContext,
  ): {code: number; details: string} {
    const outcomeSender = new OutcomeSender(req.actionId!, executionContext);

    if (!req.action) {
      return outcomeSender.finishWithError({
        code: status.INVALID_ARGUMENT,
        message: 'Invalid request: No action present',
      });
    }
    this.executeAction(outcomeSender, req.action).catch(err => {
      console.error('Unhandled exception in action execution:', err);
      outcomeSender.finishWithError(err);
    });

    return {code: status.OK, details: ''};
  }

  /**
   * Determines the specific Spanner action type and routes it to the appropriate handler.
   */
  private async executeAction(
    outcomeSender: OutcomeSender,
    action: ISpannerAction,
  ): Promise<void> {
    const actionType =
      Object.keys(action).find(
        k =>
          action[k as keyof typeof action] !== undefined &&
          !!this.actionRegistry[k],
      ) || 'unknown';
    const span = this.tracer.startSpan(`performaction_${actionType}`);

    return context.with(trace.setSpan(context.active(), span), async () => {
      try {
        const handler = this.actionRegistry[actionType];
        if (handler) {
          await handler(
            action[actionType as keyof typeof action],
            outcomeSender,
          );
          return;
        }

        outcomeSender.finishWithError({
          code: status.UNIMPLEMENTED,
          message: `Action ${actionType} not implemented yet`,
        });
      } catch (e: any) {
        span.recordException(e);
        console.error('Unexpected error:', e);
        outcomeSender.finishWithError({
          code: status.INVALID_ARGUMENT,
          message: `Unexpected error: ${e.message}`,
        });
      } finally {
        span.end();
      }
    });
  }

  private async executeAdminAction(
    action: IAdminAction,
    sender: OutcomeSender,
  ): Promise<void> {
    try {
      const adminType = Object.keys(action).find(
        k =>
          action[k as keyof typeof action] !== undefined &&
          !!this.adminActionRegistry[k],
      );

      if (adminType && this.adminActionRegistry[adminType]) {
        await this.adminActionRegistry[adminType](
          action[adminType as keyof typeof action],
          sender,
        );
        return;
      }

      sender.finishWithError({
        code: status.UNIMPLEMENTED,
        message: `Admin action ${adminType || 'unknown'} not implemented`,
      });
    } catch (e: any) {
      sender.finishWithError(e);
    }
  }

  private async executeCreateCloudInstance(
    action: ICreateCloudInstanceAction,
    sender: OutcomeSender,
  ): Promise<void> {
    try {
      console.log(`Creating instance: \n${JSON.stringify(action, null, 2)}`);

      const instanceId = action.instanceId!;
      const projectId = action.projectId!;
      const configId = action.instanceConfigId!;

      const instanceAdminClient = this.spanner.getInstanceAdminClient();

      const [operation] = await instanceAdminClient.createInstance({
        parent: instanceAdminClient.projectPath(projectId),
        instanceId: instanceId,
        instance: {
          config: instanceAdminClient.instanceConfigPath(projectId, configId),
          displayName: instanceId,
          nodeCount: action.nodeCount || 1,
          processingUnits: action.processingUnits,
          labels: action.labels || {},
        },
      });

      console.log('Waiting for instance creation operation to complete...');
      await operation.promise();

      console.log(`Instance ${instanceId} created successfully.`);

      sender.finishWithOK();
    } catch (err: any) {
      if (err.code === status.ALREADY_EXISTS) {
        console.log('Instance already exists, returning OK.');
        sender.finishWithOK();
        return;
      }
      console.error('Failed to create instance:', err);
      sender.finishWithError(err);
    }
  }
}
