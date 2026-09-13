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

import {MetricsTracerFactory} from '../../src/metrics/metrics-tracer-factory';
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
      assert.strictEqual(fakeAttemptCounter.add.called, false);
    });

    it('should do nothing when currentOperation is null on recordAttemptStart', () => {
      tracer.currentOperation = null;
      assert.doesNotThrow(() => {
        tracer.recordAttemptStart();
      });
      assert.strictEqual(tracer.currentOperation, null);
    });

    it('should do nothing when currentOperation is null on recordAttemptCompletion', () => {
      tracer.currentOperation = null;
      assert.doesNotThrow(() => {
        tracer.recordAttemptCompletion(Status.OK);
      });
      assert.strictEqual(fakeAttemptLatency.record.called, false);
      assert.strictEqual(fakeAttemptCounter.add.called, false);
    });

    it('should do nothing when currentAttempt is null on recordAttemptCompletion', () => {
      tracer.recordOperationStart();
      assert.strictEqual(tracer.currentOperation!.currentAttempt, null);
      assert.doesNotThrow(() => {
        tracer.recordAttemptCompletion(Status.OK);
      });
      assert.strictEqual(fakeAttemptLatency.record.called, false);
      assert.strictEqual(fakeAttemptCounter.add.called, false);
    });
  });

  describe('recordOperationCompletion', () => {
    it('should record operation and attempt metrics when enabled', () => {
      sandbox.stub(MetricsTracerFactory, 'getInstance').returns({
        clearCurrentTracer: sinon.spy(),
      } as any);
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

      sandbox.stub(MetricsTracerFactory, 'getInstance').returns({
        clearCurrentTracer: sinon.spy(),
      } as any);

      tracer.recordOperationStart();
      tracer.recordAttemptStart();
      tracer.recordAttemptCompletion(Status.OK);
      tracer.recordOperationCompletion();

      assert.strictEqual(fakeOperationLatency.record.calledOnce, true);
      const [[latency]] = fakeOperationLatency.record.args;
      assert.strictEqual(latency, 9.75); // 110.25 - 100.5
    });

    it('should do nothing if disabled', () => {
      tracer.enabled = false;
      tracer.recordOperationCompletion();
      assert.strictEqual(fakeOperationCounter.add.called, false);
      assert.strictEqual(fakeOperationLatency.record.called, false);
    });

    it('should do nothing when currentOperation is null', () => {
      tracer.currentOperation = null;
      assert.doesNotThrow(() => {
        tracer.recordOperationCompletion();
      });
      assert.strictEqual(fakeOperationCounter.add.called, false);
      assert.strictEqual(fakeOperationLatency.record.called, false);
    });

    it('should handle getInstance returning null when clearing current tracer', () => {
      sandbox.stub(MetricsTracerFactory, 'getInstance').returns(null);
      tracer.recordOperationStart();
      tracer.recordAttemptStart();
      tracer.recordAttemptCompletion(Status.OK);
      assert.doesNotThrow(() => {
        tracer.recordOperationCompletion();
      });
      assert.strictEqual(fakeOperationCounter.add.calledOnce, true);
      assert.strictEqual(fakeOperationLatency.record.calledOnce, true);
    });
  });

  describe('recordGfeLatency', () => {
    it('should record GFE latency if enabled', () => {
      tracer.enabled = true;
      tracer.gfeLatency = 123;
      tracer.recordGfeLatency(Status.OK);
      assert.strictEqual(fakeGfeLatency.record.calledOnce, true);
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

  describe('recordGfeConnectivityErrorCount', () => {
    afterEach(() => {
      Spanner._resetAFEServerTimingForTest();
      process.env['SPANNER_DISABLE_AFE_SERVER_TIMING'] = 'false';
    });

    it('should increment AFE error counter if enabled', () => {
      tracer.enabled = true;
      tracer.recordAfeConnectivityErrorCount(Status.OK);
      assert.strictEqual(fakeAfeCounter.add.calledOnce, true);
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

  describe('OTel attributes caching', () => {
    it('should reuse cached attribute objects across metric recording methods for the same status', () => {
      sandbox.stub(MetricsTracerFactory, 'getInstance').returns({
        clearCurrentTracer: sinon.spy(),
      } as any);

      tracer.enabled = true;
      tracer.gfeLatency = 120;
      tracer.afeLatency = 45;

      tracer.recordOperationStart();
      tracer.recordAttemptStart();
      tracer.recordAttemptCompletion(Status.OK);
      tracer.recordGfeLatency(Status.OK);
      tracer.recordAfeLatency(Status.OK);
      tracer.recordOperationCompletion();

      const [[, attemptAttributes]] = fakeAttemptLatency.record.args;
      const [[, attemptCounterAttributes]] = fakeAttemptCounter.add.args;
      const [[, gfeAttributes]] = fakeGfeLatency.record.args;
      const [[, afeAttributes]] = fakeAfeLatency.record.args;
      const [[, operationAttributes]] = fakeOperationLatency.record.args;
      const [[, operationCounterAttributes]] = fakeOperationCounter.add.args;

      assert.strictEqual(attemptAttributes, attemptCounterAttributes);
      assert.strictEqual(attemptAttributes, gfeAttributes);
      assert.strictEqual(attemptAttributes, afeAttributes);
      assert.strictEqual(attemptAttributes, operationAttributes);
      assert.strictEqual(attemptAttributes, operationCounterAttributes);

      assert.deepStrictEqual(attemptAttributes, {
        [Constants.METRIC_LABEL_KEY_DATABASE]: DATABASE,
        [Constants.METRIC_LABEL_KEY_METHOD]: METHOD,
        [Constants.MONITORED_RES_LABEL_KEY_INSTANCE]: INSTANCE,
        [Constants.METRIC_LABEL_KEY_STATUS]: 'OK',
      });
    });

    it('should cache distinct attribute objects for different status codes', () => {
      tracer.enabled = true;
      tracer.recordGfeConnectivityErrorCount(Status.OK);
      tracer.recordGfeConnectivityErrorCount(Status.UNAVAILABLE);

      const [[, okAttributes]] = fakeGfeCounter.add.args;
      const [[, unavailableAttributes]] = fakeGfeCounter.add.args.slice(1);

      assert.notStrictEqual(okAttributes, unavailableAttributes);
      assert.strictEqual(okAttributes[Constants.METRIC_LABEL_KEY_STATUS], 'OK');
      assert.strictEqual(
        unavailableAttributes[Constants.METRIC_LABEL_KEY_STATUS],
        'UNAVAILABLE',
      );
    });

    it('should handle undefined status without status label', () => {
      const attributes = (tracer as any)._getAttributesForStatus();
      assert.strictEqual(
        attributes[Constants.METRIC_LABEL_KEY_STATUS],
        undefined,
      );
      assert.strictEqual(
        attributes[Constants.METRIC_LABEL_KEY_DATABASE],
        DATABASE,
      );
      assert.strictEqual(
        attributes[Constants.MONITORED_RES_LABEL_KEY_INSTANCE],
        INSTANCE,
      );
      assert.strictEqual(attributes[Constants.METRIC_LABEL_KEY_METHOD], METHOD);
    });

    it('should handle null status without status label', () => {
      const attributes = (tracer as any)._getAttributesForStatus(null);
      assert.strictEqual(
        attributes[Constants.METRIC_LABEL_KEY_STATUS],
        undefined,
      );
      assert.strictEqual(
        attributes[Constants.METRIC_LABEL_KEY_DATABASE],
        DATABASE,
      );
    });

    it('should fallback to UNKNOWN for unrecognized numeric status code', () => {
      const attributes = (tracer as any)._getAttributesForStatus(999);
      assert.strictEqual(
        attributes[Constants.METRIC_LABEL_KEY_STATUS],
        'UNKNOWN',
      );
    });

    it('should use external attributes cache map when supplied', () => {
      const sharedCache = new Map<string, Record<string, string>>();
      const customTracer = new MetricsTracer(
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
        sharedCache,
      );

      const attributes = (customTracer as any)._getAttributesForStatus(
        Status.OK,
      );
      assert.strictEqual(sharedCache.get('OK'), attributes);
    });

    it('should freeze cached attribute objects to ensure immutability', () => {
      const attributes = (tracer as any)._getAttributesForStatus(Status.OK);
      assert.ok(Object.isFrozen(attributes));
    });

    it('should handle missing currentOperation or currentAttempt in _createAttemptOtelAttributes', () => {
      tracer.currentOperation = null;
      const attributesWithoutOperation = (
        tracer as any
      )._createAttemptOtelAttributes();
      assert.strictEqual(
        attributesWithoutOperation[Constants.METRIC_LABEL_KEY_STATUS],
        undefined,
      );

      tracer.recordOperationStart();
      const attributesWithoutAttempt = (
        tracer as any
      )._createAttemptOtelAttributes();
      assert.strictEqual(
        attributesWithoutAttempt[Constants.METRIC_LABEL_KEY_STATUS],
        undefined,
      );
    });

    it('should handle missing currentOperation or currentAttempt in _createOperationOtelAttributes', () => {
      tracer.currentOperation = null;
      const attributesWithoutOperation = (
        tracer as any
      )._createOperationOtelAttributes();
      assert.strictEqual(
        attributesWithoutOperation[Constants.METRIC_LABEL_KEY_STATUS],
        'UNKNOWN',
      );

      tracer.recordOperationStart();
      const attributesWithoutAttempt = (
        tracer as any
      )._createOperationOtelAttributes();
      assert.strictEqual(
        attributesWithoutAttempt[Constants.METRIC_LABEL_KEY_STATUS],
        'UNKNOWN',
      );
    });

    it('should record attempt and operation completion with UNKNOWN status for unrecognized status code', () => {
      sandbox.stub(MetricsTracerFactory, 'getInstance').returns({
        clearCurrentTracer: sinon.spy(),
      } as any);

      tracer.enabled = true;
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
      assert.strictEqual(attemptAttributes, operationAttributes);
    });
  });
});
