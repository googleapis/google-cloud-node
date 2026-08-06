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
import {
  OutcomeSender,
  ExecutionFlowContextInterface,
  CloudExecutor,
} from './cloud-executor';
import spanner = protos.google.spanner;
import SpannerAsyncActionRequest = spanner.executor.v1.SpannerAsyncActionRequest;
import SpannerAsyncActionResponse = spanner.executor.v1.SpannerAsyncActionResponse;
import SpannerActionOutcome = spanner.executor.v1.SpannerActionOutcome;
import ISpannerAction = spanner.executor.v1.ISpannerAction;
import IAdminAction = spanner.executor.v1.IAdminAction;
import ICreateCloudInstanceAction = spanner.executor.v1.ICreateCloudInstanceAction;
import IUpdateCloudInstanceAction = spanner.executor.v1.IUpdateCloudInstanceAction;
import IDeleteCloudInstanceAction = spanner.executor.v1.IDeleteCloudInstanceAction;
import IListCloudInstancesAction = spanner.executor.v1.IListCloudInstancesAction;
import IGetCloudInstanceAction = spanner.executor.v1.IGetCloudInstanceAction;

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
    if (
      this.call.cancelled ||
      this.call.destroyed ||
      this.call.writable === false
    ) {
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
    updateCloudInstance: (action, sender) =>
      this.executeUpdateCloudInstance(
        action as IUpdateCloudInstanceAction,
        sender,
      ),
    deleteCloudInstance: (action, sender) =>
      this.executeDeleteCloudInstance(
        action as IDeleteCloudInstanceAction,
        sender,
      ),
    listCloudInstances: (action, sender) =>
      this.executeListCloudInstances(
        action as IListCloudInstancesAction,
        sender,
      ),
    getCloudInstance: (action, sender) =>
      this.executeGetCloudInstance(action as IGetCloudInstanceAction, sender),
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
      Object.keys(this.actionRegistry).find(
        k => action[k as keyof typeof action] !== undefined,
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
      const adminType = Object.keys(this.adminActionRegistry).find(
        k => action[k as keyof typeof action] !== undefined,
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
      const projectId = action.projectId || CloudExecutor.PROJECT_ID;
      const configId = action.instanceConfigId!;

      const instanceAdminClient = this.spanner.getInstanceAdminClient();

      const instancePayload: any = {
        config: instanceAdminClient.instanceConfigPath(projectId, configId),
        displayName: instanceId,
        labels: action.labels || {},
      };

      if (action.nodeCount !== undefined) {
        instancePayload.nodeCount = action.nodeCount;
      }
      if (action.processingUnits !== undefined) {
        instancePayload.processingUnits = action.processingUnits;
      }

      const [operation] = await instanceAdminClient.createInstance({
        parent: instanceAdminClient.projectPath(projectId),
        instanceId: instanceId,
        instance: instancePayload,
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

  private async executeUpdateCloudInstance(
    action: IUpdateCloudInstanceAction,
    sender: OutcomeSender,
  ): Promise<void> {
    try {
      console.log(`Updating instance: \n${JSON.stringify(action, null, 2)}`);

      const instanceId = action.instanceId!;
      const projectId = action.projectId || CloudExecutor.PROJECT_ID;

      const instanceAdminClient = this.spanner.getInstanceAdminClient();

      const paths: string[] = [];
      if (action.displayName !== undefined) paths.push('display_name');
      if (action.nodeCount !== undefined) paths.push('node_count');
      if (action.processingUnits !== undefined) paths.push('processing_units');
      if (action.labels && Object.keys(action.labels).length > 0)
        paths.push('labels');

      const [operation] = await instanceAdminClient.updateInstance({
        instance: {
          name: instanceAdminClient.instancePath(projectId, instanceId),
          displayName: action.displayName,
          nodeCount: action.nodeCount,
          processingUnits: action.processingUnits,
          labels: action.labels,
        },
        fieldMask: {paths: paths},
      });

      console.log('Waiting for instance update operation to complete...');
      await operation.promise();

      console.log(`Instance ${instanceId} updated successfully.`);

      sender.finishWithOK();
    } catch (err: any) {
      console.error('Failed to update instance:', err);
      sender.finishWithError(err);
    }
  }

  private async executeDeleteCloudInstance(
    action: IDeleteCloudInstanceAction,
    sender: OutcomeSender,
  ): Promise<void> {
    try {
      console.log(`Deleting instance: \n${JSON.stringify(action, null, 2)}`);

      const instanceId = action.instanceId!;
      const projectId = action.projectId || CloudExecutor.PROJECT_ID;

      const instanceAdminClient = this.spanner.getInstanceAdminClient();

      await instanceAdminClient.deleteInstance({
        name: instanceAdminClient.instancePath(projectId, instanceId),
      });

      console.log(`Instance ${instanceId} deleted successfully.`);

      sender.finishWithOK();
    } catch (err: any) {
      console.error('Failed to delete instance:', err);
      sender.finishWithError(err);
    }
  }

  private async executeListCloudInstances(
    action: IListCloudInstancesAction,
    sender: OutcomeSender,
  ): Promise<void> {
    try {
      console.log(`Listing instances: \n${JSON.stringify(action, null, 2)}`);

      const projectId = action.projectId || CloudExecutor.PROJECT_ID;

      const instanceAdminClient = this.spanner.getInstanceAdminClient();

      const [instances, , response] = await instanceAdminClient.listInstances({
        parent: instanceAdminClient.projectPath(projectId),
        filter: action.filter,
        pageSize: action.pageSize,
        pageToken: action.pageToken,
      });

      console.log(`Found ${instances.length} instances.`);

      const outcome = SpannerActionOutcome.create({
        status: CloudExecutor.toProto(status.OK),
        commitTime: {seconds: 0, nanos: 0},
        adminResult: {
          instanceResponse: {
            listedInstances: instances,
            nextPageToken: response?.nextPageToken || '',
          },
        },
      });

      sender.sendOutcome(outcome);
    } catch (err: any) {
      console.error('Failed to list instances:', err);
      sender.finishWithError(err);
    }
  }

  private async executeGetCloudInstance(
    action: IGetCloudInstanceAction,
    sender: OutcomeSender,
  ): Promise<void> {
    try {
      console.log(`Getting instance: \n${JSON.stringify(action, null, 2)}`);

      const instanceId = action.instanceId!;
      const projectId = action.projectId || CloudExecutor.PROJECT_ID;

      const instanceAdminClient = this.spanner.getInstanceAdminClient();

      const [instance] = await instanceAdminClient.getInstance({
        name: instanceAdminClient.instancePath(projectId, instanceId),
      });

      console.log(`Found instance: ${instance.name}`);

      const outcome = SpannerActionOutcome.create({
        status: CloudExecutor.toProto(status.OK),
        commitTime: {seconds: 0, nanos: 0},
        adminResult: {
          instanceResponse: {
            instance: instance,
          },
        },
      });

      sender.sendOutcome(outcome);
    } catch (err: any) {
      console.error('Failed to get instance:', err);
      sender.finishWithError(err);
    }
  }
}
