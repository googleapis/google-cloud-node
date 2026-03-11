/**
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

import {Settings} from '@google-cloud/firestore';

import {
  context,
  SpanStatusCode,
  trace,
  Tracer,
  Span as OpenTelemetrySpan,
  TracerProvider,
} from '@opentelemetry/api';

import {Span} from './span';
import {
  ATTRIBUTE_GCP_RESOURCE_NAME,
  ATTRIBUTE_SETTINGS_PREFIX,
  Attributes,
  TraceUtil,
} from './trace-util';

import {interfaces} from '../v1/firestore_client_config.json';
import {FirestoreClient} from '../v1';
import {DEFAULT_DATABASE_ID} from '../path';
import {DEFAULT_MAX_IDLE_CHANNELS} from '../index';
const serviceConfig = interfaces['google.firestore.v1.Firestore'];

/**
 * @private
 * @internal
 */
export class EnabledTraceUtil implements TraceUtil {
  private tracer: Tracer;
  private settingsAttributes: Attributes;

  // Visible for testing
  tracerProvider: TracerProvider;

  constructor(settings: Settings) {
    let provider: TracerProvider | undefined =
      settings.openTelemetry?.tracerProvider;

    // If a TracerProvider has not been given to us, we try to use the global one.
    if (!provider) {
      const {trace} = require('@opentelemetry/api');
      provider = trace.getTracerProvider();
    }

    // At this point provider is guaranteed to be defined because
    // `trace.getTracerProvider()` does not return null or undefined.
    this.tracerProvider = provider!;

    const libVersion = require('../../../package.json').version;
    const libName = require('../../../package.json').name;
    try {
      this.tracer = this.tracerProvider.getTracer(libName, libVersion);
    } catch (e) {
      throw new Error(
        "The object provided for 'tracerProvider' does not conform to the TracerProvider interface.",
      );
    }

    const databaseId: string = settings.databaseId || DEFAULT_DATABASE_ID;
    this.settingsAttributes = {};
    this.settingsAttributes['otel.scope.name'] = libName;
    this.settingsAttributes['otel.scope.version'] = libVersion;

    if (settings.projectId) {
      this.settingsAttributes[`${ATTRIBUTE_SETTINGS_PREFIX}.project_id`] =
        settings.projectId;

      this.settingsAttributes[ATTRIBUTE_GCP_RESOURCE_NAME] =
        `//firestore.googleapis.com/projects/${settings.projectId}/databases/${databaseId}`;
    }

    this.settingsAttributes[`${ATTRIBUTE_SETTINGS_PREFIX}.database_id`] =
      databaseId;

    const host =
      settings.servicePath ?? settings.host ?? 'firestore.googleapis.com';
    const port = settings.port ?? FirestoreClient.port;
    this.settingsAttributes[`${ATTRIBUTE_SETTINGS_PREFIX}.host`] =
      `${host}:${port}`;

    if (settings.preferRest !== undefined) {
      this.settingsAttributes[`${ATTRIBUTE_SETTINGS_PREFIX}.prefer_REST`] =
        settings.preferRest;
    }

    this.settingsAttributes[`${ATTRIBUTE_SETTINGS_PREFIX}.max_idle_channels`] =
      settings.maxIdleChannels ?? DEFAULT_MAX_IDLE_CHANNELS;

    const defaultRetrySettings = serviceConfig.retry_params.default;
    const customRetrySettings =
      settings.clientConfig?.interfaces?.['google.firestore.v1.Firestore']?.[
        'retry_params'
      ]?.['default'];
    this.settingsAttributes[
      `${ATTRIBUTE_SETTINGS_PREFIX}.initial_retry_delay`
    ] = this.millisToSecondString(
      customRetrySettings?.initial_retry_delay_millis ??
        defaultRetrySettings.initial_retry_delay_millis,
    );
    this.settingsAttributes[
      `${ATTRIBUTE_SETTINGS_PREFIX}.initial_rpc_timeout`
    ] = this.millisToSecondString(
      customRetrySettings?.initial_rpc_timeout_millis ??
        defaultRetrySettings.initial_rpc_timeout_millis,
    );
    this.settingsAttributes[`${ATTRIBUTE_SETTINGS_PREFIX}.total_timeout`] =
      this.millisToSecondString(
        customRetrySettings?.total_timeout_millis ??
          defaultRetrySettings.total_timeout_millis,
      );
    this.settingsAttributes[`${ATTRIBUTE_SETTINGS_PREFIX}.max_retry_delay`] =
      this.millisToSecondString(
        customRetrySettings?.max_retry_delay_millis ??
          defaultRetrySettings.max_retry_delay_millis,
      );
    this.settingsAttributes[`${ATTRIBUTE_SETTINGS_PREFIX}.max_rpc_timeout`] =
      this.millisToSecondString(
        customRetrySettings?.max_rpc_timeout_millis ??
          defaultRetrySettings.max_rpc_timeout_millis,
      );
    this.settingsAttributes[
      `${ATTRIBUTE_SETTINGS_PREFIX}.retry_delay_multiplier`
    ] =
      customRetrySettings?.retry_delay_multiplier.toString() ??
      defaultRetrySettings.retry_delay_multiplier.toString();
    this.settingsAttributes[
      `${ATTRIBUTE_SETTINGS_PREFIX}.rpc_timeout_multiplier`
    ] =
      customRetrySettings?.rpc_timeout_multiplier.toString() ??
      defaultRetrySettings.rpc_timeout_multiplier.toString();
  }

  recordProjectIdAndResourceName(projectId: string, databaseId: string): void {
    this.settingsAttributes[`${ATTRIBUTE_SETTINGS_PREFIX}.project_id`] =
      projectId;
    this.settingsAttributes[ATTRIBUTE_GCP_RESOURCE_NAME] =
      `//firestore.googleapis.com/projects/${projectId}/databases/${databaseId}`;
    this.currentSpan().setAttributes(this.settingsAttributes);
  }

  private millisToSecondString(millis: number): string {
    return `${millis / 1000}s`;
  }

  private endSpan(otelSpan: OpenTelemetrySpan, error: Error): void {
    otelSpan.setStatus({
      code: SpanStatusCode.ERROR,
      message: error.message,
    });
    otelSpan.recordException(error);
    otelSpan.end();
  }

  startActiveSpan<F extends (span: Span) => unknown>(
    name: string,
    fn: F,
    attributes?: Attributes,
  ): ReturnType<F> {
    return this.tracer.startActiveSpan(
      name,
      {
        attributes: attributes,
      },
      (otelSpan: OpenTelemetrySpan) => {
        this.addCommonAttributes(otelSpan);

        // Note that if `fn` returns a `Promise`, we want the otelSpan to end
        // after the `Promise` has resolved, NOT after the `fn` has returned.
        // Therefore, we should not use a `finally` clause to end the otelSpan.
        try {
          let result = fn(new Span(otelSpan));
          if (result instanceof Promise) {
            result = result
              .then(value => {
                otelSpan.end();
                return value;
              })
              .catch(error => {
                this.endSpan(otelSpan, error);
                // Returns a Promise.reject the same as the underlying function.
                return Promise.reject(error);
              });
          } else {
            otelSpan.end();
          }
          return result as ReturnType<F>;
        } catch (error) {
          this.endSpan(otelSpan, error);
          // Re-throw the exception to maintain normal error handling.
          throw error;
        }
      },
    );
  }

  startSpan(name: string): Span {
    const otelSpan = this.tracer.startSpan(name, undefined, context.active());
    this.addCommonAttributes(otelSpan);
    return new Span(otelSpan);
  }

  currentSpan(): Span {
    return new Span(trace.getActiveSpan());
  }

  addCommonAttributes(otelSpan: OpenTelemetrySpan): void {
    otelSpan.setAttributes(this.settingsAttributes);
  }
}
