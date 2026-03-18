// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {describe, it} from 'mocha';
import {createInstance} from './util/helpers';
import {expect} from 'chai';
import {DisabledTraceUtil} from '../src/telemetry/disabled-trace-util';
import {EnabledTraceUtil} from '../src/telemetry/enabled-trace-util';
import {NodeTracerProvider} from '@opentelemetry/sdk-trace-node';
import {ProxyTracerProvider, trace} from '@opentelemetry/api';

describe('Firestore Tracing Controls', () => {
  let originalEnvVarValue: string | undefined;

  beforeEach(() => {
    // Remove any prior global OpenTelemetry registrations.
    trace.disable();
    originalEnvVarValue = process.env.FIRESTORE_ENABLE_TRACING;
  });

  afterEach(() => {
    if (originalEnvVarValue === undefined) {
      delete process.env.FIRESTORE_ENABLE_TRACING;
    } else {
      process.env.FIRESTORE_ENABLE_TRACING = originalEnvVarValue;
    }
  });

  it('default firestore settings, no env var', async () => {
    const firestore = await createInstance();
    expect(firestore._traceUtil instanceof EnabledTraceUtil).to.be.true;
  });

  /// Tests to make sure environment variable can override settings.

  it('default firestore settings, env var disabled', async () => {
    process.env.FIRESTORE_ENABLE_TRACING = 'OFF';
    const firestore = await createInstance();
    expect(firestore._traceUtil instanceof DisabledTraceUtil).to.be.true;
  });

  it('default firestore settings, env var enabled', async () => {
    process.env.FIRESTORE_ENABLE_TRACING = 'ON';
    const firestore = await createInstance();
    expect(firestore._traceUtil instanceof EnabledTraceUtil).to.be.true;
  });

  it('no openTelemetry settings, no env var', async () => {
    const firestore = await createInstance(undefined, {
      openTelemetry: undefined,
    });
    expect(firestore._traceUtil instanceof EnabledTraceUtil).to.be.true;

    const firestore2 = await createInstance(undefined, {
      openTelemetry: {
        tracerProvider: undefined,
      },
    });
    expect(firestore2._traceUtil instanceof EnabledTraceUtil).to.be.true;
  });

  it('no openTelemetry settings, env var disabled', async () => {
    process.env.FIRESTORE_ENABLE_TRACING = 'OFF';
    const firestore = await createInstance(undefined, {
      openTelemetry: undefined,
    });
    expect(firestore._traceUtil instanceof DisabledTraceUtil).to.be.true;

    const firestore2 = await createInstance(undefined, {
      openTelemetry: {
        tracerProvider: undefined,
      },
    });
    expect(firestore2._traceUtil instanceof DisabledTraceUtil).to.be.true;
  });

  it('no openTelemetry settings, env var enabled', async () => {
    process.env.FIRESTORE_ENABLE_TRACING = 'ON';
    const firestore = await createInstance(undefined, {
      openTelemetry: undefined,
    });
    expect(firestore._traceUtil instanceof EnabledTraceUtil).to.be.true;

    const firestore2 = await createInstance(undefined, {
      openTelemetry: {
        tracerProvider: undefined,
      },
    });
    expect(firestore2._traceUtil instanceof EnabledTraceUtil).to.be.true;
  });

  it('valid tracerProvider, no env var', async () => {
    const firestore = await createInstance(undefined, {
      openTelemetry: {
        tracerProvider: new NodeTracerProvider(),
      },
    });
    expect(firestore._traceUtil instanceof EnabledTraceUtil).to.be.true;
  });

  it('valid tracerProvider, env var disabled', async () => {
    process.env.FIRESTORE_ENABLE_TRACING = 'OFF';
    const firestore = await createInstance(undefined, {
      openTelemetry: {
        tracerProvider: new NodeTracerProvider(),
      },
    });
    expect(firestore._traceUtil instanceof DisabledTraceUtil).to.be.true;
  });

  it('valid tracerProvider, env var enabled', async () => {
    process.env.FIRESTORE_ENABLE_TRACING = 'ON';
    const firestore = await createInstance(undefined, {
      openTelemetry: {
        tracerProvider: new NodeTracerProvider(),
      },
    });
    expect(firestore._traceUtil instanceof EnabledTraceUtil).to.be.true;
  });

  it('uses the tracerProvider passed to it', async () => {
    const myTracerProvider = new NodeTracerProvider();

    // Make another tracer provider the global tracer provider.
    const globalTracerProvider = new NodeTracerProvider();
    globalTracerProvider.register();

    const firestore = await createInstance(undefined, {
      openTelemetry: {
        tracerProvider: myTracerProvider,
      },
    });

    expect(firestore._traceUtil instanceof EnabledTraceUtil).to.be.true;
    // Make sure the SDK uses the one that was given to it, not the global one.
    expect(
      (firestore._traceUtil as EnabledTraceUtil).tracerProvider ===
        myTracerProvider,
    ).to.be.true;
    expect(
      (firestore._traceUtil as EnabledTraceUtil).tracerProvider !==
        globalTracerProvider,
    ).to.be.true;
  });

  it('uses the global tracerProvider if nothing was passed to it', async () => {
    // Make another tracer provider the global tracer provider.
    const globalTracerProvider = new NodeTracerProvider();
    globalTracerProvider.register();

    const firestore = await createInstance();

    expect(firestore._traceUtil instanceof EnabledTraceUtil).to.be.true;
    const enabledTraceUtil: EnabledTraceUtil =
      firestore._traceUtil as EnabledTraceUtil;
    // Since a TracerProvider is not provided to the SDK directly, the SDK obtains
    // the tracer provider from the global `TraceAPI`. The `TraceAPI` returns a
    // `ProxyTracerProvider` instance. To check equality, we need to compare our
    // `globalTracerProvider` with the proxy's delegate.
    const tracerProviderUsed = enabledTraceUtil.tracerProvider;
    const actual = (tracerProviderUsed as ProxyTracerProvider).getDelegate();
    expect(actual === globalTracerProvider).to.be.true;
  });

  it('Generates an error if the given tracerProvider is not valid', async () => {
    try {
      await createInstance(undefined, {
        openTelemetry: {tracerProvider: 123},
      });
    } catch (e) {
      expect(
        e.toString() ===
          "The object provided for 'tracerProvider' does not conform to the TracerProvider interface.",
      );
    }
  });
});
