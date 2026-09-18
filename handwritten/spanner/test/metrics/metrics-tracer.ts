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

import {status as Status} from '@grpc/grpc-js';
import * as assert from 'assert';
import * as sinon from 'sinon';
import * as Constants from '../../src/metrics/constants';
import {MetricsTracer} from '../../src/metrics/metrics-tracer';
import {Spanner} from '../../src';

const DATABASE = 'test-db';
const INSTANCE = 'instance';
const PROJECT_ID = 'project_id';
const METHOD = 'test-method';
const REQUEST = 'test-request';

describe('MetricsTracer', () => {
  let tracer: MetricsTracer;
  let fakeAttemptCounter: any;
  let fakeAttemptLatency: any;
  let fakeOperationCounter: any;
  let fakeOperationLatency: any;
  let fakeGfeCounter: any;
  let fakeGfeLatency: any;
  let fakeAfeCounter: any;
  let fakeAfeLatency: any;
  let sandbox: sinon.SinonSandbox;
  beforeEach(() => {
    sandbox = sinon.createSandbox();
    fakeAttemptCounter = {
      add: sinon.spy(),
    };

    fakeAttemptLatency = {
      record: sinon.spy(),
    };

    fakeOperationCounter = {
      add: sinon.spy(),
    };

    fakeOperationLatency = {
      record: sinon.spy(),
    };

    fakeGfeCounter = {
      add: sinon.spy(),
    };

    fakeGfeLatency = {
      record: sinon.spy(),
    };

    fakeAfeCounter = {
      add: sinon.spy(),
    };

    fakeAfeLatency = {
      record: sinon.spy(),
    };

    tracer = new MetricsTracer(
      fakeAttemptCounter,
      fakeAttemptLatency,
      fakeOperationCounter,
      fakeOperationLatency,
      fakeGfeCounter,
      fakeGfeLatency,
      fakeAfeCounter,
      fakeAfeLatency,
      true, // enabled,
      DATABASE,
      INSTANCE,
      PROJECT_ID,
      METHOD,
      REQUEST,
    );
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('recordAttemptCompletion', () => {
    it('should record attempt latency when enabled', () => {
      tracer.recordOperationStart();
      tracer.recordAttemptStart();
      assert.ok(tracer.currentOperation!.currentAttempt);
      assert.ok(tracer.currentOperation!.currentAttempt.startTime);
      assert.strictEqual(tracer.currentOperation!.attemptCount, 1);

      tracer.recordAttemptCompletion(Status.OK);

      assert.strictEqual(fakeAttemptLatency.record.calledOnce, true);
      const [[latency, otelAttrs]] = fakeAttemptLatency.record.args;
      assert.strictEqual(typeof latency, 'number');
      assert.strictEqual(
        otelAttrs[Constants.METRIC_LABEL_KEY_STATUS],
        Status[Status.OK],
      );
    });

    it('should record fractional latency with sub-millisecond precision', () => {
      const nowStub = sandbox.stub(performance, 'now');
      nowStub.onCall(0).returns(100.0); // op start
      nowStub.onCall(1).returns(200.5); // attempt start
      nowStub.onCall(2).returns(202.75); // attempt end

      tracer.recordOperationStart();
      tracer.recordAttemptStart();
      tracer.recordAttemptCompletion(Status.OK);

      assert.strictEqual(fakeAttemptLatency.record.calledOnce, true);
      const [[latency]] = fakeAttemptLatency.record.args;
      assert.strictEqual(latency, 2.25); // 202.75 - 200.5
    });

    it('should do nothing if disabled', () => {
      tracer.enabled = false;
      tracer.recordAttemptStart();
      tracer.recordAttemptCompletion(Status.OK);
      assert.strictEqual(fakeAttemptLatency.record.called, false);
    });

    it('should record attempt error status when status is not OK', () => {
      tracer.recordOperationStart();
      tracer.recordAttemptStart();
      tracer.recordAttemptCompletion(Status.PERMISSION_DENIED);

      assert.strictEqual(fakeAttemptLatency.record.calledOnce, true);
      assert.strictEqual(fakeAttemptCounter.add.calledOnce, true);
      const [[latency, latencyAttributes]] = fakeAttemptLatency.record.args;
      const [[count, countAttributes]] = fakeAttemptCounter.add.args;
      assert.strictEqual(typeof latency, 'number');
      assert.strictEqual(count, 1);
      assert.strictEqual(
        latencyAttributes[Constants.METRIC_LABEL_KEY_STATUS],
        'PERMISSION_DENIED',
      );
      assert.strictEqual(
        countAttributes[Constants.METRIC_LABEL_KEY_STATUS],
        'PERMISSION_DENIED',
      );
    });

    it('should safely do nothing if recordAttemptStart is called without active operation', () => {
      // currentOperation is null
      assert.doesNotThrow(() => {
        tracer.recordAttemptStart();
      });
      assert.strictEqual(tracer.currentOperation, null);
    });

    it('should safely do nothing if recordAttemptCompletion is called without active attempt', () => {
      // No attempt started
      assert.doesNotThrow(() => {
        tracer.recordAttemptCompletion(Status.OK);
      });
      assert.strictEqual(fakeAttemptLatency.record.called, false);
      assert.strictEqual(fakeAttemptCounter.add.called, false);
    });

    it('should safely do nothing if recordAttemptCompletion is called without active operation', () => {
      tracer.currentOperation = null;
      assert.doesNotThrow(() => {
        tracer.recordAttemptCompletion(Status.OK);
      });
      assert.strictEqual(fakeAttemptLatency.record.called, false);
      assert.strictEqual(fakeAttemptCounter.add.called, false);
    });
  });

  describe('recordOperationCompletion', () => {
    it('should record operation and attempt metrics when enabled', () => {
      tracer.recordOperationStart();
      assert.ok(tracer.currentOperation!.startTime);
      tracer.recordAttemptStart();
      tracer.recordAttemptCompletion(Status.OK);
      tracer.recordOperationCompletion();

      assert.strictEqual(fakeOperationCounter.add.calledOnce, true);
      assert.strictEqual(fakeAttemptCounter.add.calledOnce, true);
      assert.strictEqual(fakeOperationLatency.record.calledOnce, true);

      const [[, operationAttributes]] = fakeOperationLatency.record.args;
      assert.strictEqual(
        operationAttributes[Constants.METRIC_LABEL_KEY_STATUS],
        'OK',
      );
    });

    it('should record fractional operation latency with sub-millisecond precision', () => {
      const nowStub = sandbox.stub(performance, 'now');
      nowStub.onCall(0).returns(100.5); // op start
      nowStub.onCall(1).returns(105.0); // attempt start
      nowStub.onCall(2).returns(108.0); // attempt end
      nowStub.onCall(3).returns(110.25); // op end

      tracer.recordOperationStart();
      tracer.recordAttemptStart();
      tracer.recordAttemptCompletion(Status.OK);
      tracer.recordOperationCompletion();

      assert.strictEqual(fakeOperationLatency.record.calledOnce, true);
      const [[latency]] = fakeOperationLatency.record.args;
      assert.strictEqual(latency, 9.75); // 110.25 - 100.5
    });

    it('should record operation error status matching the failed attempt status', () => {
      tracer.recordOperationStart();
      tracer.recordAttemptStart();
      tracer.recordAttemptCompletion(Status.UNAVAILABLE);
      tracer.recordOperationCompletion();

      assert.strictEqual(fakeOperationCounter.add.calledOnce, true);
      assert.strictEqual(fakeOperationLatency.record.calledOnce, true);

      const [[, operationCounterAttributes]] = fakeOperationCounter.add.args;
      const [[, operationLatencyAttributes]] = fakeOperationLatency.record.args;
      assert.strictEqual(
        operationCounterAttributes[Constants.METRIC_LABEL_KEY_STATUS],
        'UNAVAILABLE',
      );
      assert.strictEqual(
        operationLatencyAttributes[Constants.METRIC_LABEL_KEY_STATUS],
        'UNAVAILABLE',
      );
    });

    it('should record UNKNOWN status when operation completes without any attempts', () => {
      tracer.recordOperationStart();
      // Operation completed before any attempt was started (e.g. client-side error before RPC)
      tracer.recordOperationCompletion();

      assert.strictEqual(fakeOperationCounter.add.calledOnce, true);
      assert.strictEqual(fakeOperationLatency.record.calledOnce, true);

      const [[, operationCounterAttributes]] = fakeOperationCounter.add.args;
      assert.strictEqual(
        operationCounterAttributes[Constants.METRIC_LABEL_KEY_STATUS],
        'UNKNOWN',
      );
    });

    it('should safely do nothing if recordOperationCompletion is called without active operation', () => {
      tracer.currentOperation = null;
      assert.doesNotThrow(() => {
        tracer.recordOperationCompletion();
      });
      assert.strictEqual(fakeOperationLatency.record.called, false);
      assert.strictEqual(fakeOperationCounter.add.called, false);
    });

    it('should handle missing currentOperation in _createOperationOtelAttributes', () => {
      tracer.currentOperation = null;
      const attributes = (tracer as any)._createOperationOtelAttributes();
      assert.strictEqual(
        attributes[Constants.METRIC_LABEL_KEY_STATUS],
        'UNKNOWN',
      );
    });

    it('should handle missing currentOperation in _createAttemptOtelAttributes', () => {
      tracer.currentOperation = null;
      const attributes = (tracer as any)._createAttemptOtelAttributes();
      assert.strictEqual(
        attributes[Constants.METRIC_LABEL_KEY_STATUS],
        'UNKNOWN',
      );
    });

    it('should fallback to UNKNOWN status when attempt completes with unrecognized status code', () => {
      tracer.recordOperationStart();
      tracer.recordAttemptStart();
      tracer.recordAttemptCompletion(999 as any);
      tracer.recordOperationCompletion();

      const [[, attemptAttributes]] = fakeAttemptLatency.record.args;
      const [[, operationAttributes]] = fakeOperationLatency.record.args;

      assert.strictEqual(
        attemptAttributes[Constants.METRIC_LABEL_KEY_STATUS],
        'UNKNOWN',
      );
      assert.strictEqual(
        operationAttributes[Constants.METRIC_LABEL_KEY_STATUS],
        'UNKNOWN',
      );
    });

    it('should not overwrite existing operation when recordOperationStart is called repeatedly', () => {
      tracer.recordOperationStart();
      const initialOperation = tracer.currentOperation;
      assert.ok(initialOperation);

      tracer.recordOperationStart();
      assert.strictEqual(tracer.currentOperation, initialOperation);
    });

    it('should be idempotent and not double-record if recordOperationCompletion is called multiple times', () => {
      tracer.recordOperationStart();
      tracer.recordAttemptStart();
      tracer.recordAttemptCompletion(Status.OK);
      tracer.recordOperationCompletion();

      assert.strictEqual(fakeOperationCounter.add.callCount, 1);
      assert.strictEqual(fakeOperationLatency.record.callCount, 1);
      assert.strictEqual(tracer.currentOperation, null);

      // Subsequent call should be a no-op
      tracer.recordOperationCompletion();
      assert.strictEqual(fakeOperationCounter.add.callCount, 1);
      assert.strictEqual(fakeOperationLatency.record.callCount, 1);
    });

    it('should do nothing if disabled', () => {
      tracer.enabled = false;
      tracer.recordOperationCompletion();
      assert.strictEqual(fakeOperationCounter.add.called, false);
      assert.strictEqual(fakeOperationLatency.record.called, false);
    });
  });

  describe('recordGfeLatency', () => {
    it('should record GFE latency if enabled', () => {
      tracer.enabled = true;
      tracer.gfeLatency = 123;
      tracer.recordGfeLatency(Status.OK);
      assert.strictEqual(fakeGfeLatency.record.calledOnce, true);
    });

    it('should record GFE latency when latency is 0ms', () => {
      tracer.enabled = true;
      tracer.gfeLatency = 0;
      tracer.recordGfeLatency(Status.OK);
      assert.strictEqual(fakeGfeLatency.record.calledOnce, true);
      assert.strictEqual(fakeGfeLatency.record.getCall(0).args[0], 0);
      assert.strictEqual(tracer.gfeLatency, null);
    });

    it('should not record and log error when gfeLatency is null', () => {
      tracer.enabled = true;
      tracer.gfeLatency = null;
      const errorStub = sandbox.stub(console, 'error');
      tracer.recordGfeLatency(Status.OK);
      assert.strictEqual(fakeGfeLatency.record.called, false);
      assert.strictEqual(errorStub.calledOnce, true);
    });

    it('should not record and log error when gfeLatency is NaN or negative', () => {
      tracer.enabled = true;
      tracer.gfeLatency = NaN;
      const errorStub = sandbox.stub(console, 'error');
      tracer.recordGfeLatency(Status.OK);
      assert.strictEqual(fakeGfeLatency.record.called, false);

      tracer.gfeLatency = -1;
      tracer.recordGfeLatency(Status.OK);
      assert.strictEqual(fakeGfeLatency.record.called, false);
      assert.strictEqual(errorStub.calledTwice, true);
    });

    it('should fallback to UNKNOWN status when called with unrecognized status code', () => {
      tracer.enabled = true;
      tracer.gfeLatency = 123;
      tracer.recordGfeLatency(999 as any);
      assert.strictEqual(fakeGfeLatency.record.calledOnce, true);
      assert.strictEqual(
        fakeGfeLatency.record.getCall(0).args[1][
          Constants.METRIC_LABEL_KEY_STATUS
        ],
        'UNKNOWN',
      );
    });

    it('should not record if disabled', () => {
      tracer.enabled = false;
      tracer.gfeLatency = 123;
      tracer.recordGfeLatency(Status.OK);
      assert.strictEqual(fakeGfeLatency.record.called, false);
    });
  });

  describe('recordGfeConnectivityErrorCount', () => {
    it('should increment GFE error counter if enabled', () => {
      tracer.recordGfeConnectivityErrorCount(Status.OK);
      assert.strictEqual(fakeGfeCounter.add.calledOnce, true);
    });

    it('should fallback to UNKNOWN status when called with unrecognized status code', () => {
      tracer.enabled = true;
      tracer.recordGfeConnectivityErrorCount(999 as any);
      assert.strictEqual(fakeGfeCounter.add.calledOnce, true);
      assert.strictEqual(
        fakeGfeCounter.add.getCall(0).args[1][
          Constants.METRIC_LABEL_KEY_STATUS
        ],
        'UNKNOWN',
      );
    });

    it('should not increment if disabled', () => {
      tracer.enabled = false;
      tracer.recordGfeConnectivityErrorCount(Status.OK);
      assert.strictEqual(fakeGfeCounter.add.called, false);
    });
  });

  describe('recordAfeLatency', () => {
    afterEach(() => {
      Spanner._resetAFEServerTimingForTest();
      process.env['SPANNER_DISABLE_AFE_SERVER_TIMING'] = 'false';
    });

    it('should record AFE latency if enabled', () => {
      tracer.enabled = true;
      tracer.afeLatency = 123;
      tracer.recordAfeLatency(Status.OK);
      assert.strictEqual(fakeAfeLatency.record.calledOnce, true);
    });

    it('should fallback to UNKNOWN status when called with unrecognized status code', () => {
      tracer.enabled = true;
      tracer.afeLatency = 123;
      tracer.recordAfeLatency(999 as any);
      assert.strictEqual(fakeAfeLatency.record.calledOnce, true);
      assert.strictEqual(
        fakeAfeLatency.record.getCall(0).args[1][
          Constants.METRIC_LABEL_KEY_STATUS
        ],
        'UNKNOWN',
      );
    });

    it('should record AFE latency when latency is 0ms', () => {
      tracer.enabled = true;
      tracer.afeLatency = 0;
      tracer.recordAfeLatency(Status.OK);
      assert.strictEqual(fakeAfeLatency.record.calledOnce, true);
      assert.strictEqual(fakeAfeLatency.record.getCall(0).args[0], 0);
      assert.strictEqual(tracer.afeLatency, null);
    });

    it('should not record and log error when afeLatency is null', () => {
      tracer.enabled = true;
      tracer.afeLatency = null;
      const errorStub = sandbox.stub(console, 'error');
      tracer.recordAfeLatency(Status.OK);
      assert.strictEqual(fakeAfeLatency.record.called, false);
      assert.strictEqual(errorStub.calledOnce, true);
    });

    it('should not record and log error when afeLatency is NaN or negative', () => {
      tracer.enabled = true;
      tracer.afeLatency = NaN;
      const errorStub = sandbox.stub(console, 'error');
      tracer.recordAfeLatency(Status.OK);
      assert.strictEqual(fakeAfeLatency.record.called, false);

      tracer.afeLatency = -1;
      tracer.recordAfeLatency(Status.OK);
      assert.strictEqual(fakeAfeLatency.record.called, false);
      assert.strictEqual(errorStub.calledTwice, true);
    });

    it('should not record if AFE server timing is disabled', () => {
      tracer.enabled = true;
      Spanner._resetAFEServerTimingForTest();
      process.env['SPANNER_DISABLE_AFE_SERVER_TIMING'] = 'true';
      tracer.afeLatency = 123;
      tracer.recordAfeLatency(Status.OK);
      assert.strictEqual(fakeAfeLatency.record.called, false);
    });

    it('should not record if metrics are disabled', () => {
      tracer.enabled = false;
      tracer.afeLatency = 123;
      tracer.recordAfeLatency(Status.OK);
      assert.strictEqual(fakeAfeLatency.record.called, false);
    });
  });

  describe('recordAfeConnectivityErrorCount', () => {
    afterEach(() => {
      Spanner._resetAFEServerTimingForTest();
      process.env['SPANNER_DISABLE_AFE_SERVER_TIMING'] = 'false';
    });

    it('should increment AFE error counter if enabled', () => {
      tracer.enabled = true;
      tracer.recordAfeConnectivityErrorCount(Status.OK);
      assert.strictEqual(fakeAfeCounter.add.calledOnce, true);
    });

    it('should fallback to UNKNOWN status when called with unrecognized status code', () => {
      tracer.enabled = true;
      tracer.recordAfeConnectivityErrorCount(999 as any);
      assert.strictEqual(fakeAfeCounter.add.calledOnce, true);
      assert.strictEqual(
        fakeAfeCounter.add.getCall(0).args[1][
          Constants.METRIC_LABEL_KEY_STATUS
        ],
        'UNKNOWN',
      );
    });

    it('should not increment if metrics are disabled', () => {
      tracer.enabled = false;
      tracer.recordAfeConnectivityErrorCount(Status.OK);
      assert.strictEqual(fakeAfeCounter.add.called, false);
    });

    it('should not increment if AFE server timing is disabled', () => {
      tracer.enabled = true;
      Spanner._resetAFEServerTimingForTest();
      process.env['SPANNER_DISABLE_AFE_SERVER_TIMING'] = 'true';
      tracer.recordAfeConnectivityErrorCount(Status.OK);
      assert.strictEqual(fakeAfeCounter.add.called, false);
    });
  });

  describe('extractGfeLatency & extractAfeLatency', () => {
    let tracer: MetricsTracer;
    beforeEach(() => {
      tracer = new MetricsTracer(
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        true,
        DATABASE,
        INSTANCE,
        PROJECT_ID,
        METHOD,
        REQUEST,
      );
    });

    it('should extract afe and gfe latency from a valid server-timing header', () => {
      const header = 'gfet4t7; dur=123, afe; dur=30, other=value';
      const gfeLatency = tracer.extractGfeLatency(header);
      assert.strictEqual(gfeLatency, 123);
      const afeLatency = tracer.extractAfeLatency(header);
      assert.strictEqual(afeLatency, 30);
    });

    it('should extract 0ms latency when dur=0 in server-timing header', () => {
      const header = 'gfet4t7; dur=0, afe; dur=0';
      const gfeLatency = tracer.extractGfeLatency(header);
      assert.strictEqual(gfeLatency, 0);
      const afeLatency = tracer.extractAfeLatency(header);
      assert.strictEqual(afeLatency, 0);
    });

    it('should return null if header is undefined', () => {
      const gfeLatency = tracer.extractGfeLatency(undefined as any);
      assert.strictEqual(gfeLatency, null);
      const afeLatency = tracer.extractAfeLatency(undefined as any);
      assert.strictEqual(afeLatency, null);
    });

    it('should return null if header does not match expected format', () => {
      const header = 'some-other-header';
      const gfeLatency = tracer.extractGfeLatency(header);
      assert.strictEqual(gfeLatency, null);
      const afeLatency = tracer.extractAfeLatency(header);
      assert.strictEqual(afeLatency, null);
    });

    it('should extract only the gfe latency if extra data is present', () => {
      const header = 'gfet4t7; dur=456; other=value';
      const gfeLatency = tracer.extractGfeLatency(header);
      assert.strictEqual(gfeLatency, 456);
      const afeLatency = tracer.extractAfeLatency(header);
      assert.strictEqual(afeLatency, null);
    });

    it('should extract only the afe latency if extra data is present', () => {
      const header = 'other=value, afe; dur=30; ';
      const gfeLatency = tracer.extractGfeLatency(header);
      assert.strictEqual(gfeLatency, null);
      const afeLatency = tracer.extractAfeLatency(header);
      assert.strictEqual(afeLatency, 30);
    });
  });
});
