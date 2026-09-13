// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as assert from 'assert';
import * as sinon from 'sinon';
import {grpc} from 'google-gax';
import {status as Status} from '@grpc/grpc-js';
import {MetricsTracerFactory} from '../../src/metrics/metrics-tracer-factory';
import {MetricsTracer} from '../../src/metrics/metrics-tracer';
import {MetricInterceptor} from '../../src/metrics/interceptor';

describe('MetricInterceptor', () => {
  let sandbox: sinon.SinonSandbox;
  let mockMetricsTracer: sinon.SinonStubbedInstance<MetricsTracer>;
  let mockFactory: sinon.SinonStubbedInstance<MetricsTracerFactory>;
  let mockNextCall: sinon.SinonStub;
  let mockInterceptingCall: any;
  let mockListener: any;
  let serverTimingMetadata: any;
  let emptyMetadata: any;
  let mockStatus: any;
  let mockOptions: any;
  let capturedListener: any;
  let testMetadata: grpc.Metadata;

  beforeEach(() => {
    sandbox = sinon.createSandbox();

    // Mock MetricsTracer
    mockMetricsTracer = sandbox.createStubInstance(MetricsTracer);
    mockMetricsTracer.recordAttemptStart = sandbox.stub<[], void>();
    mockMetricsTracer.recordAttemptCompletion = sandbox.stub<
      [status?: number],
      void
    >();
    mockMetricsTracer.extractGfeLatency = sandbox
      .stub()
      .callsFake((header: string) => {
        if (header === 'gfet4t7; dur=90, afe; dur=30') {
          return 90;
        }
        return null;
      }) as sinon.SinonStub<[string], number | null>;
    mockMetricsTracer.extractAfeLatency = sandbox
      .stub()
      .callsFake((header: string) => {
        if (header === 'gfet4t7; dur=90, afe; dur=30') {
          return 30;
        }
        return null;
      }) as sinon.SinonStub<[string], number | null>;
    mockMetricsTracer.recordGfeLatency = sandbox.stub<
      [latency: number],
      void
    >();
    mockMetricsTracer.recordGfeConnectivityErrorCount = sandbox.stub<
      [statusCode: number],
      void
    >();

    // Mock MetricsTracerFactory
    mockFactory = sandbox.createStubInstance(MetricsTracerFactory);
    mockFactory.getCurrentTracer = sandbox
      .stub()
      .returns(mockMetricsTracer) as sinon.SinonStub<
      [string],
      MetricsTracer | null
    >;
    sandbox.stub(MetricsTracerFactory, 'getInstance').returns(mockFactory);

    // Mock GRPC call components
    mockInterceptingCall = {
      start: sinon.spy((metadata: grpc.Metadata, listener: grpc.Listener) => {
        capturedListener = listener;
      }),
    };

    mockNextCall = sinon.stub().returns(mockInterceptingCall);

    mockListener = {
      onReceiveMetadata: sandbox.stub(),
      onReceiveMessage: sandbox.stub(),
      onReceiveStatus: sandbox.stub(),
    };

    serverTimingMetadata = new grpc.Metadata();
    serverTimingMetadata.set('content-type', 'application/grpc');
    serverTimingMetadata.set('date', 'Thu, 19 Jun 2020 00:01:02 GMT');
    serverTimingMetadata.set('server-timing', 'gfet4t7; dur=90, afe; dur=30');
    serverTimingMetadata.set(
      'alt-svc',
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000',
    );

    emptyMetadata = new grpc.Metadata();

    mockStatus = {
      code: Status.OK,
      details: 'OK',
      metadata: new grpc.Metadata(),
    };

    mockOptions = {
      method_definition: {
        path: '/google.spanner.v1.Spanner/ExecuteSql',
      },
    };
    testMetadata = new grpc.Metadata();
    testMetadata.set(
      'google-cloud-resource-prefix',
      'projects/test-project/instances/instance/databases/database-1',
    );
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('Metrics recorded from interceptor', () => {
    it('does not define redundant requester hooks and passes a direct InterceptingListener to next()', () => {
      const originalInterceptingCall = grpc.InterceptingCall;
      let capturedRequester: grpc.Requester | undefined;

      Object.defineProperty(grpc, 'InterceptingCall', {
        value: class extends originalInterceptingCall {
          constructor(nextCall: Function, requester: grpc.Requester) {
            super(nextCall as unknown as grpc.InterceptingCall, requester);
            capturedRequester = requester;
          }
        },
        configurable: true,
        writable: true,
      });

      try {
        const interceptingCall = MetricInterceptor(mockOptions, mockNextCall);

        // Verify that custom sendMessage, halfClose, or cancel hooks are NOT defined on the requester
        assert.strictEqual(capturedRequester?.sendMessage, undefined);
        assert.strictEqual(capturedRequester?.halfClose, undefined);
        assert.strictEqual(capturedRequester?.cancel, undefined);
        assert.strictEqual(typeof capturedRequester?.start, 'function');

        // Verify that the listener passed to next() conforms to InterceptingListener (methods take 1 argument)
        interceptingCall.start(testMetadata, mockListener);

        // capturedListener is what nextCall.start received; since it is an InterceptingListener,
        // @grpc/grpc-js bypasses InterceptingListenerImpl and forwards it directly
        assert.strictEqual(capturedListener.onReceiveMetadata.length, 1);
        assert.strictEqual(capturedListener.onReceiveMessage.length, 1);
        assert.strictEqual(capturedListener.onReceiveStatus.length, 1);

        // Verify that incoming messages forward directly to mockListener
        const message = {test: 'row-data'};
        capturedListener.onReceiveMessage(message);
        assert.strictEqual(mockListener.onReceiveMessage.callCount, 1);
        assert.strictEqual(
          mockListener.onReceiveMessage.firstCall.args[0],
          message,
        );
      } finally {
        Object.defineProperty(grpc, 'InterceptingCall', {
          value: originalInterceptingCall,
          configurable: true,
          writable: true,
        });
      }
    });

    it('transparently passes through messages, halfClose, and cancelWithStatus to the underlying call', () => {
      const mockUnderlyingCall = {
        start: sandbox.stub(),
        sendMessageWithContext: sandbox.stub(),
        halfClose: sandbox.stub(),
        cancelWithStatus: sandbox.stub(),
      };
      const mockNextCallFn = sandbox.stub().returns(mockUnderlyingCall);
      const interceptingCall = MetricInterceptor(mockOptions, mockNextCallFn);

      const message = {values: ['test-row']};
      interceptingCall.sendMessage(message);
      assert.strictEqual(
        mockUnderlyingCall.sendMessageWithContext.callCount,
        1,
      );
      assert.strictEqual(
        mockUnderlyingCall.sendMessageWithContext.firstCall.args[1],
        message,
      );

      interceptingCall.halfClose();
      assert.strictEqual(mockUnderlyingCall.halfClose.callCount, 1);

      interceptingCall.cancelWithStatus(Status.CANCELLED, 'cancelled');
      assert.strictEqual(mockUnderlyingCall.cancelWithStatus.callCount, 1);
      assert.strictEqual(
        mockUnderlyingCall.cancelWithStatus.firstCall.args[0],
        Status.CANCELLED,
      );
      assert.strictEqual(
        mockUnderlyingCall.cancelWithStatus.firstCall.args[1],
        'cancelled',
      );
    });

    it('AttemptMetrics', () => {
      const interceptingCall = MetricInterceptor(mockOptions, mockNextCall);

      // Start recording attempt metrics at the beginning of the gRPC call
      interceptingCall.start(testMetadata, mockListener);
      assert.equal(mockMetricsTracer.recordAttemptStart.callCount, 1);
      assert.equal(mockMetricsTracer.recordAttemptCompletion.callCount, 0);

      capturedListener.onReceiveStatus(mockStatus);

      // Complete attempt recording when status is received back from the call
      assert.equal(mockMetricsTracer.recordAttemptStart.callCount, 1);
      assert.equal(mockMetricsTracer.recordAttemptCompletion.callCount, 1);
    });

    it('GFE Metrics - Latency', () => {
      const interceptingCall = MetricInterceptor(mockOptions, mockNextCall);
      interceptingCall.start(testMetadata, mockListener);

      // duration value from the header's gfet4t7 value should be recorded as GFE latency
      capturedListener.onReceiveMetadata(serverTimingMetadata);
      capturedListener.onReceiveStatus(mockStatus);
      assert.equal(mockMetricsTracer.recordGfeLatency.callCount, 1);
      assert.equal(
        mockMetricsTracer.recordGfeLatency.getCall(0).args,
        Status.OK,
      );
      assert.equal(
        mockMetricsTracer.recordGfeConnectivityErrorCount.callCount,
        0,
      );
    });

    it('AFE Metrics - Latency', () => {
      const interceptingCall = MetricInterceptor(mockOptions, mockNextCall);
      interceptingCall.start(testMetadata, mockListener);

      // duration value from the header's afe value should be recorded as AFE latency
      capturedListener.onReceiveMetadata(serverTimingMetadata);
      capturedListener.onReceiveStatus(mockStatus);
      assert.equal(mockMetricsTracer.recordAfeLatency.callCount, 1);
      assert.equal(
        mockMetricsTracer.recordAfeLatency.getCall(0).args,
        Status.OK,
      );
      assert.equal(
        mockMetricsTracer.recordAfeConnectivityErrorCount.callCount,
        0,
      );
    });

    it('GFE Metrics - Connectivity Error Count', () => {
      const interceptingCall = MetricInterceptor(mockOptions, mockNextCall);
      interceptingCall.start(testMetadata, mockListener);

      // Calls received without latency values should increase connectivity error count
      capturedListener.onReceiveMetadata(emptyMetadata);
      capturedListener.onReceiveStatus(mockStatus);
      assert.equal(mockMetricsTracer.recordGfeLatency.callCount, 0);
      assert.equal(
        mockMetricsTracer.recordGfeConnectivityErrorCount.callCount,
        1,
      );
      assert.equal(
        mockMetricsTracer.recordGfeConnectivityErrorCount.getCall(0).args,
        Status.OK,
      );
    });

    it('AFE Metrics - Connectivity Error Count', () => {
      const interceptingCall = MetricInterceptor(mockOptions, mockNextCall);
      interceptingCall.start(testMetadata, mockListener);

      // Calls received without latency values should increase connectivity error count
      capturedListener.onReceiveMetadata(emptyMetadata);
      capturedListener.onReceiveStatus(mockStatus);
      assert.equal(mockMetricsTracer.recordAfeLatency.callCount, 0);
      assert.equal(
        mockMetricsTracer.recordAfeConnectivityErrorCount.callCount,
        1,
      );
      assert.equal(
        mockMetricsTracer.recordAfeConnectivityErrorCount.getCall(0).args,
        Status.OK,
      );
    });
  });
});
