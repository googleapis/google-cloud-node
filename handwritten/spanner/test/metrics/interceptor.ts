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
import {MetricsTracer} from '../../src/metrics/metrics-tracer';
import {MetricInterceptor} from '../../src/metrics/interceptor';

describe('MetricInterceptor', () => {
  let sandbox: sinon.SinonSandbox;
  let mockMetricsTracer: sinon.SinonStubbedInstance<MetricsTracer>;
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

    // Mock GRPC call components
    mockInterceptingCall = {
      start: sinon.spy((metadata: grpc.Metadata, listener: grpc.Listener) => {
        capturedListener = listener;
      }),
      sendMessageWithContext: sandbox.stub(),
      sendMessage: sandbox.stub(),
      halfClose: sandbox.stub(),
      cancel: sandbox.stub(),
      cancelWithStatus: sandbox.stub(),
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
      metricsTracer: mockMetricsTracer,
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

    it('GFE and AFE Metrics - Latency when duration is 0ms', () => {
      const zeroLatencyMetadata = new grpc.Metadata();
      zeroLatencyMetadata.set('server-timing', 'gfet4t7; dur=0, afe; dur=0');
      (mockMetricsTracer.extractGfeLatency as sinon.SinonStub).returns(0);
      (mockMetricsTracer.extractAfeLatency as sinon.SinonStub).returns(0);

      const interceptingCall = MetricInterceptor(mockOptions, mockNextCall);
      interceptingCall.start(testMetadata, mockListener);

      capturedListener.onReceiveMetadata(zeroLatencyMetadata);
      capturedListener.onReceiveStatus(mockStatus);

      assert.strictEqual(mockMetricsTracer.recordGfeLatency.callCount, 1);
      assert.strictEqual(
        mockMetricsTracer.recordGfeLatency.getCall(0).args[0],
        Status.OK,
      );
      assert.strictEqual(
        mockMetricsTracer.recordGfeConnectivityErrorCount.callCount,
        0,
      );
      assert.strictEqual(mockMetricsTracer.recordAfeLatency.callCount, 1);
      assert.strictEqual(
        mockMetricsTracer.recordAfeLatency.getCall(0).args[0],
        Status.OK,
      );
      assert.strictEqual(
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

  describe('Tracer resolution', () => {
    it('should use options.metricsTracer when provided on call options', () => {
      const customTracer = sandbox.createStubInstance(MetricsTracer);
      customTracer.recordAttemptStart = sandbox.stub<[], void>();

      const optionsWithTracer = {
        ...mockOptions,
        metricsTracer: customTracer,
      };
      const interceptingCall = MetricInterceptor(
        optionsWithTracer,
        mockNextCall,
      );
      interceptingCall.start(testMetadata, mockListener);

      assert.strictEqual(customTracer.recordAttemptStart.callCount, 1);
      assert.strictEqual(mockMetricsTracer.recordAttemptStart.callCount, 0);
    });

    it('should safely proceed with null tracer if options.metricsTracer is not provided', () => {
      const optionsWithoutTracer = {
        method_definition: {
          path: '/google.spanner.v1.Spanner/ExecuteSql',
        },
      };
      const interceptingCall = MetricInterceptor(
        optionsWithoutTracer,
        mockNextCall,
      );
      interceptingCall.start(testMetadata, mockListener);

      assert.strictEqual(mockMetricsTracer.recordAttemptStart.callCount, 0);
    });
  });

  describe('Unhappy paths and error handling', () => {
    it('should handle undefined call options and proceed cleanly without tracer', () => {
      const interceptingCall = MetricInterceptor(
        undefined as any,
        mockNextCall,
      );
      const metadata = new grpc.Metadata();
      interceptingCall.start(metadata, mockListener);

      assert.strictEqual(mockMetricsTracer.recordAttemptStart.callCount, 0);

      assert.doesNotThrow(() => {
        capturedListener.onReceiveMetadata(serverTimingMetadata);
        capturedListener.onReceiveMessage({data: 'payload'});
        capturedListener.onReceiveStatus(mockStatus);
      });

      assert.strictEqual(mockListener.onReceiveMetadata.callCount, 1);
      assert.strictEqual(mockListener.onReceiveMessage.callCount, 1);
      assert.strictEqual(mockListener.onReceiveStatus.callCount, 1);
      assert.strictEqual(
        mockMetricsTracer.recordGfeConnectivityErrorCount.callCount,
        0,
      );
      assert.strictEqual(
        mockMetricsTracer.recordAfeConnectivityErrorCount.callCount,
        0,
      );
    });

    it('should record attempt completion before invoking downstream listener in onReceiveStatus', () => {
      let attemptCompletionRecorded = false;
      mockMetricsTracer.recordAttemptCompletion.callsFake(() => {
        attemptCompletionRecorded = true;
      });
      mockListener.onReceiveStatus.callsFake(() => {
        assert.strictEqual(
          attemptCompletionRecorded,
          true,
          'Attempt completion must be recorded before downstream next(status) is invoked',
        );
      });

      const interceptingCall = MetricInterceptor(mockOptions, mockNextCall);
      interceptingCall.start(testMetadata, mockListener);
      capturedListener.onReceiveStatus(mockStatus);

      assert.strictEqual(mockListener.onReceiveStatus.callCount, 1);
      assert.strictEqual(
        mockMetricsTracer.recordAttemptCompletion.callCount,
        1,
      );
    });

    it('should record non-OK status codes when status is PERMISSION_DENIED', () => {
      const errorStatus = {
        code: Status.PERMISSION_DENIED,
        details: 'Permission denied on table',
        metadata: new grpc.Metadata(),
      };
      const interceptingCall = MetricInterceptor(mockOptions, mockNextCall);
      interceptingCall.start(testMetadata, mockListener);

      capturedListener.onReceiveMetadata(emptyMetadata);
      capturedListener.onReceiveStatus(errorStatus);

      assert.strictEqual(
        mockMetricsTracer.recordAttemptCompletion.callCount,
        1,
      );
      assert.strictEqual(
        mockMetricsTracer.recordAttemptCompletion.getCall(0).args[0],
        Status.PERMISSION_DENIED,
      );
      assert.strictEqual(
        mockMetricsTracer.recordGfeConnectivityErrorCount.callCount,
        1,
      );
      assert.strictEqual(
        mockMetricsTracer.recordGfeConnectivityErrorCount.getCall(0).args[0],
        Status.PERMISSION_DENIED,
      );
      assert.strictEqual(
        mockMetricsTracer.recordAfeConnectivityErrorCount.callCount,
        1,
      );
      assert.strictEqual(
        mockMetricsTracer.recordAfeConnectivityErrorCount.getCall(0).args[0],
        Status.PERMISSION_DENIED,
      );
    });

    it('should record non-OK status codes with latency metrics when server-timing is present', () => {
      const errorStatus = {
        code: Status.UNAVAILABLE,
        details: 'Service unavailable',
        metadata: new grpc.Metadata(),
      };
      const interceptingCall = MetricInterceptor(mockOptions, mockNextCall);
      interceptingCall.start(testMetadata, mockListener);

      capturedListener.onReceiveMetadata(serverTimingMetadata);
      capturedListener.onReceiveStatus(errorStatus);

      assert.strictEqual(
        mockMetricsTracer.recordAttemptCompletion.callCount,
        1,
      );
      assert.strictEqual(
        mockMetricsTracer.recordAttemptCompletion.getCall(0).args[0],
        Status.UNAVAILABLE,
      );
      assert.strictEqual(mockMetricsTracer.recordGfeLatency.callCount, 1);
      assert.strictEqual(
        mockMetricsTracer.recordGfeLatency.getCall(0).args[0],
        Status.UNAVAILABLE,
      );
      assert.strictEqual(mockMetricsTracer.recordAfeLatency.callCount, 1);
      assert.strictEqual(
        mockMetricsTracer.recordAfeLatency.getCall(0).args[0],
        Status.UNAVAILABLE,
      );
    });

    it('should pass through sendMessage, halfClose, and cancel calls cleanly', () => {
      const interceptingCall = MetricInterceptor(mockOptions, mockNextCall);
      interceptingCall.sendMessage('test-payload');
      interceptingCall.halfClose();
      interceptingCall.cancelWithStatus(Status.CANCELLED, 'Cancelled');

      assert.strictEqual(
        mockInterceptingCall.sendMessageWithContext.callCount,
        1,
      );
      assert.strictEqual(
        mockInterceptingCall.sendMessageWithContext.getCall(0).args[1],
        'test-payload',
      );
      assert.strictEqual(mockInterceptingCall.halfClose.callCount, 1);
      assert.strictEqual(mockInterceptingCall.cancelWithStatus.callCount, 1);
    });
  });
});
