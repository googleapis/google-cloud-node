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

import * as assert from 'assert';
import {before, beforeEach, afterEach, describe, it} from 'mocha';
import {EventEmitter} from 'events';
import * as proxyquire from 'proxyquire';
import * as sinon from 'sinon';

import {codec} from '../src/codec';
const {
  AlwaysOnSampler,
  NodeTracerProvider,
  InMemorySpanExporter,
} = require('@opentelemetry/sdk-trace-node');
// eslint-disable-next-line n/no-extraneous-require
const {SpanStatusCode} = require('@opentelemetry/api');
const {
  ReadableSpan,
  SimpleSpanProcessor,
} = require('@opentelemetry/sdk-trace-base');
const {generateWithAllSpansHaveDBName} = require('./helper');
import {ExecuteSqlRequest, ReadRequest} from '../src/transaction';

describe('Transaction', () => {
  const sandbox = sinon.createSandbox();

  const REQUEST = sandbox.stub();
  const REQUEST_STREAM = sandbox.stub();
  const SESSION_NAME = 'session-123';

  const SPANNER = {
    routeToLeaderEnabled: true,
    directedReadOptions: {},
  };

  const INSTANCE = {
    parent: SPANNER,
  };

  const DATABASE = {
    formattedName_: 'formatted-database-name',
    parent: INSTANCE,
  };

  const withAllSpansHaveDBName = generateWithAllSpansHaveDBName(
    DATABASE.formattedName_,
  );

  const SESSION = {
    parent: DATABASE,
    formattedName_: SESSION_NAME,
    request: REQUEST,
    requestStream: REQUEST_STREAM,
    _observabilityOptions: {},
  };

  const PARTIAL_RESULT_STREAM = sandbox.stub();
  const PROMISIFY_ALL = sandbox.stub();

  let Snapshot;
  let Transaction;
  let transaction;
  let snapshot;

  before(() => {
    const txns = proxyquire('../src/transaction', {
      '@google-cloud/promisify': {promisifyAll: PROMISIFY_ALL},
      './codec': {codec},
      './partial-result-stream': {partialResultStream: PARTIAL_RESULT_STREAM},
    });

    Snapshot = txns.Snapshot;
    Transaction = txns.Transaction;
  });

  let traceExporter: typeof InMemorySpanExporter;
  let tracerProvider: typeof NodeTracerProvider;

  beforeEach(() => {
    traceExporter = new InMemorySpanExporter();
    const sampler = new AlwaysOnSampler();

    tracerProvider = new NodeTracerProvider({
      sampler: sampler,
      exporter: traceExporter,
      spanProcessors: [new SimpleSpanProcessor(traceExporter)],
    });

    const SNAPSHOT_OPTIONS = {a: 'b', c: 'd'};
    sandbox.stub(Snapshot, 'encodeTimestampBounds').returns(SNAPSHOT_OPTIONS);
    SESSION._observabilityOptions = {tracerProvider: tracerProvider};
    snapshot = new Snapshot(SESSION);
    snapshot._observabilityOptions = {tracerProvider: tracerProvider};

    transaction = new Transaction(SESSION);
  });

  afterEach(async () => {
    sandbox.restore();
    await tracerProvider.forceFlush();
    traceExporter.reset();
  });

  after(async () => {
    await tracerProvider.shutdown();
  });

  interface spanExportResults {
    spans: (typeof ReadableSpan)[];
    spanNames: string[];
    spanEventNames: string[];
  }

  function extractExportedSpans(): spanExportResults {
    traceExporter.forceFlush();
    const spans = traceExporter.getFinishedSpans();

    // Sort the spans by startTime.
    spans.sort((spanA, spanB) => {
      spanA.startTime < spanB.startTime;
    });

    const spanNames: string[] = [];
    const eventNames: string[] = [];
    spans.forEach(span => {
      spanNames.push(span.name);
      span.events.forEach(event => {
        eventNames.push(event.name);
      });
    });

    return {
      spans: spans,
      spanNames: spanNames,
      spanEventNames: eventNames,
    } as spanExportResults;
  }

  describe('Snapshot', () => {
    describe('begin', () => {
      const BEGIN_RESPONSE = {
        id: Buffer.from('transaction-id-123'),
      };

      it('without error', done => {
        REQUEST.callsFake((_, callback) => callback(null, BEGIN_RESPONSE));

        snapshot.begin((err, resp) => {
          assert.ifError(err);
          assert.strictEqual(resp, BEGIN_RESPONSE);

          const exportResults = extractExportedSpans();
          const actualSpanNames = exportResults.spanNames;
          const actualEventNames = exportResults.spanEventNames;

          const expectedSpanNames = ['CloudSpanner.Snapshot.begin'];
          assert.deepStrictEqual(
            actualSpanNames,
            expectedSpanNames,
            `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
          );

          const expectedEventNames = [
            'Begin Transaction',
            'Transaction Creation Done',
          ];
          assert.deepStrictEqual(
            actualEventNames,
            expectedEventNames,
            `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
          );

          done();
        });
      });

      it('with error', done => {
        const fakeError = new Error('begin.error');

        REQUEST.callsFake((_, callback) => callback(fakeError));

        snapshot.begin(err => {
          assert.strictEqual(err, fakeError);

          const exportResults = extractExportedSpans();
          const actualSpanNames = exportResults.spanNames;
          const actualEventNames = exportResults.spanEventNames;

          const expectedSpanNames = ['CloudSpanner.Snapshot.begin'];
          assert.deepStrictEqual(
            actualSpanNames,
            expectedSpanNames,
            `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
          );

          const expectedEventNames = ['Begin Transaction'];
          assert.deepStrictEqual(
            actualEventNames,
            expectedEventNames,
            `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
          );

          // Ensure that the final span that got retries did not error.
          const spans = exportResults.spans;
          const firstSpan = spans[0];
          assert.strictEqual(
            SpanStatusCode.ERROR,
            firstSpan.status.code,
            'Unexpected an span status code',
          );
          assert.strictEqual(
            'begin.error',
            firstSpan.status.message,
            'Unexpected span status message',
          );

          done();
        });
      });
    });

    describe('read', () => {
      const TABLE = 'my-table-123';

      let fakeStream;

      beforeEach(() => {
        fakeStream = new EventEmitter();
        sandbox.stub(snapshot, 'createReadStream').returns(fakeStream);
      });

      it('with error', done => {
        const fakeError = new Error('read.error');

        snapshot.read(TABLE, {}, err => {
          assert.strictEqual(err, fakeError);

          const exportResults = extractExportedSpans();
          const actualSpanNames = exportResults.spanNames;
          const actualEventNames = exportResults.spanEventNames;

          const expectedSpanNames = ['CloudSpanner.Snapshot.read'];
          assert.deepStrictEqual(
            actualSpanNames,
            expectedSpanNames,
            `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
          );

          const expectedEventNames = [];
          assert.deepStrictEqual(
            actualEventNames,
            expectedEventNames,
            `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
          );

          // Ensure that the final span that got retries did not error.
          const spans = exportResults.spans;
          const firstSpan = spans[0];
          assert.strictEqual(
            SpanStatusCode.ERROR,
            firstSpan.status.code,
            'Unexpected an span status code',
          );
          assert.strictEqual(
            'read.error',
            firstSpan.status.message,
            'Unexpected span status message',
          );

          done();
        });

        fakeStream.emit('error', fakeError);
      });

      it('without error', done => {
        const fakeRows = [{a: 'b'}, {c: 'd'}, {e: 'f'}];

        snapshot.read(TABLE, {}, (err, rows) => {
          assert.ifError(err);
          assert.deepStrictEqual(rows, fakeRows);

          const exportResults = extractExportedSpans();
          const actualSpanNames = exportResults.spanNames;
          const actualEventNames = exportResults.spanEventNames;

          const expectedSpanNames = ['CloudSpanner.Snapshot.read'];
          assert.deepStrictEqual(
            actualSpanNames,
            expectedSpanNames,
            `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
          );

          const expectedEventNames = [];
          assert.deepStrictEqual(
            actualEventNames,
            expectedEventNames,
            `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
          );

          // Ensure that the final span that got retries did not error.
          const spans = exportResults.spans;
          const firstSpan = spans[0];
          assert.strictEqual(
            SpanStatusCode.UNSET,
            firstSpan.status.code,
            'Unexpected an span status code',
          );
          assert.strictEqual(
            undefined,
            firstSpan.status.message,
            'Unexpected span status message',
          );

          done();
        });

        fakeRows.forEach(row => fakeStream.emit('data', row));
        fakeStream.emit('end');
      });
    });

    describe('run', () => {
      const QUERY = 'SELET * FROM `MyTable`';

      let fakeStream;

      beforeEach(() => {
        fakeStream = new EventEmitter();
        sandbox.stub(snapshot, 'runStream').returns(fakeStream);
      });

      it('without error', done => {
        const fakeRows = [{a: 'b'}, {c: 'd'}, {e: 'f'}];

        snapshot.run(QUERY, (err, rows) => {
          assert.ifError(err);
          assert.deepStrictEqual(rows, fakeRows);

          const exportResults = extractExportedSpans();
          const actualSpanNames = exportResults.spanNames;
          const actualEventNames = exportResults.spanEventNames;

          const expectedSpanNames = ['CloudSpanner.Snapshot.run'];
          assert.deepStrictEqual(
            actualSpanNames,
            expectedSpanNames,
            `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
          );

          const expectedEventNames = [];
          assert.deepStrictEqual(
            actualEventNames,
            expectedEventNames,
            `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
          );

          // Ensure that the final span that got retries did not error.
          const spans = exportResults.spans;
          const firstSpan = spans[0];
          assert.strictEqual(
            SpanStatusCode.UNSET,
            firstSpan.status.code,
            'Unexpected an span status code',
          );
          assert.strictEqual(
            undefined,
            firstSpan.status.message,
            'Unexpected span status message',
          );
          done();
        });

        fakeRows.forEach(row => fakeStream.emit('data', row));
        fakeStream.emit('end');
      });

      it('with errors', done => {
        const fakeError = new Error('run.error');

        snapshot.run(QUERY, err => {
          assert.strictEqual(err, fakeError);

          const exportResults = extractExportedSpans();
          const actualSpanNames = exportResults.spanNames;
          const actualEventNames = exportResults.spanEventNames;

          const expectedSpanNames = ['CloudSpanner.Snapshot.run'];
          assert.deepStrictEqual(
            actualSpanNames,
            expectedSpanNames,
            `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
          );

          const expectedEventNames = [];
          assert.deepStrictEqual(
            actualEventNames,
            expectedEventNames,
            `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
          );

          // Ensure that the final span that got retries did not error.
          const spans = exportResults.spans;
          const firstSpan = spans[0];
          assert.strictEqual(
            SpanStatusCode.ERROR,
            firstSpan.status.code,
            'Unexpected an span status code',
          );
          assert.strictEqual(
            'run.error',
            firstSpan.status.message,
            'Unexpected span status message',
          );

          done();
        });

        fakeStream.emit('error', fakeError);
      });
    });

    describe('runStream', () => {
      const QUERY = {
        sql: 'SELECT * FROM `MyTable`',
      };

      beforeEach(() => {
        PARTIAL_RESULT_STREAM.callsFake(makeRequest => makeRequest());
      });

      it('with error', done => {
        REQUEST_STREAM.resetHistory();

        const fakeQuery: ExecuteSqlRequest = Object.assign({}, QUERY, {
          params: {a: undefined},
          requestOptions: {requestTag: 'request-tag'},
        });

        snapshot.requestOptions = {transactionTag: 'transaction-tag'};
        const stream = snapshot.runStream(fakeQuery);
        stream.on('error', error => {
          assert.strictEqual(
            error.message,
            'Value of type undefined not recognized.',
          );

          const exportResults = extractExportedSpans();
          const actualSpanNames = exportResults.spanNames;
          const actualEventNames = exportResults.spanEventNames;

          const expectedSpanNames = ['CloudSpanner.Snapshot.runStream'];
          assert.deepStrictEqual(
            actualSpanNames,
            expectedSpanNames,
            `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
          );

          const expectedEventNames = ['Starting stream', 'exception'];
          assert.deepStrictEqual(
            actualEventNames,
            expectedEventNames,
            `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
          );

          // Ensure that the final span that got retries did not error.
          const spans = exportResults.spans;
          const firstSpan = spans[0];
          assert.strictEqual(
            SpanStatusCode.ERROR,
            firstSpan.status.code,
            'Unexpected an span status code',
          );
          assert.strictEqual(
            'Value of type undefined not recognized.',
            firstSpan.status.message,
            'Unexpected span status message',
          );

          const attributes = exportResults.spans[0].attributes;
          assert.strictEqual(attributes['transaction.tag'], 'transaction-tag');
          assert.strictEqual(attributes['db.name'], 'formatted-database-name');
          assert.strictEqual(attributes['request.tag'], 'request-tag');
          done();
        });
        assert.ok(!REQUEST_STREAM.called, 'No request should be made');
      });
    });

    describe('createReadStream', () => {
      const TABLE = 'my-table-123';

      beforeEach(() => {
        PARTIAL_RESULT_STREAM.callsFake(makeRequest => makeRequest());
      });

      it('without error', done => {
        const fakeStream = new EventEmitter();
        REQUEST_STREAM.returns(fakeStream);
        const request: ReadRequest = {
          requestOptions: {requestTag: 'request-tag'},
        };
        snapshot.requestOptions = {transactionTag: 'transaction-tag'};
        const stream = snapshot.createReadStream(TABLE, request);
        stream.on('end', () => {
          const exportResults = extractExportedSpans();
          const actualSpanNames = exportResults.spanNames;

          const expectedSpanNames = ['CloudSpanner.Snapshot.createReadStream'];
          assert.deepStrictEqual(
            actualSpanNames,
            expectedSpanNames,
            `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
          );

          const attributes = exportResults.spans[0].attributes;
          assert.strictEqual(attributes['transaction.tag'], 'transaction-tag');
          assert.strictEqual(attributes['db.sql.table'], TABLE);
          assert.strictEqual(attributes['db.name'], 'formatted-database-name');
          assert.strictEqual(attributes['request.tag'], 'request-tag');
          done();
        });
        fakeStream.emit('end');
      });
    });
  });

  describe('rollback', () => {
    const ID = 'transaction-id-0xdedabeef';

    beforeEach(() => {
      transaction.id = ID;
    });

    it('no error with unset `id`', done => {
      const expectedError = new Error(
        'Transaction ID is unknown, nothing to rollback.',
      );
      delete transaction.id;

      transaction.rollback(err => {
        assert.deepStrictEqual(err, null);

        const exportResults = extractExportedSpans();
        const actualSpanNames = exportResults.spanNames;
        const actualEventNames = exportResults.spanEventNames;

        const expectedSpanNames = ['CloudSpanner.Transaction.rollback'];
        assert.deepStrictEqual(
          actualSpanNames,
          expectedSpanNames,
          `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
        );

        const expectedEventNames = [
          'Transaction ID is unknown, nothing to rollback.',
        ];
        assert.deepStrictEqual(
          actualEventNames,
          expectedEventNames,
          `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
        );

        // Ensure that the final span that got retries did not error.
        const spans = exportResults.spans;
        const firstSpan = spans[0];
        assert.strictEqual(
          SpanStatusCode.UNSET,
          firstSpan.status.code,
          'Unexpected span status code',
        );
        assert.strictEqual(
          undefined,
          firstSpan.status.message,
          'Unexpected span status message',
        );

        done();
      });
    });

    it('with request error', done => {
      const fakeError = new Error('our request error');
      transaction.request = (config, callback) => {
        callback(fakeError);
      };

      transaction.rollback(err => {
        assert.deepStrictEqual(err, fakeError);

        const exportResults = extractExportedSpans();
        const actualSpanNames = exportResults.spanNames;
        const actualEventNames = exportResults.spanEventNames;

        const expectedSpanNames = ['CloudSpanner.Transaction.rollback'];
        assert.deepStrictEqual(
          actualSpanNames,
          expectedSpanNames,
          `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
        );

        const expectedEventNames = [];
        assert.deepStrictEqual(
          actualEventNames,
          expectedEventNames,
          `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
        );

        // Ensure that the final span that got retries did not error.
        const spans = exportResults.spans;
        const firstSpan = spans[0];
        assert.strictEqual(
          SpanStatusCode.ERROR,
          firstSpan.status.code,
          'Unexpected span status code',
        );
        assert.strictEqual(
          'our request error',
          firstSpan.status.message,
          'Unexpected span status message',
        );

        done();
      });
    });

    it('with no error', done => {
      transaction.request = (config, callback) => {
        callback(null);
      };

      transaction.rollback(err => {
        assert.ifError(err);

        const exportResults = extractExportedSpans();
        const actualSpanNames = exportResults.spanNames;
        const actualEventNames = exportResults.spanEventNames;

        const expectedSpanNames = ['CloudSpanner.Transaction.rollback'];
        assert.deepStrictEqual(
          actualSpanNames,
          expectedSpanNames,
          `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
        );

        const expectedEventNames = [];
        assert.deepStrictEqual(
          actualEventNames,
          expectedEventNames,
          `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
        );

        // Ensure that the final span that got retries did not error.
        const spans = exportResults.spans;
        const firstSpan = spans[0];
        assert.strictEqual(
          SpanStatusCode.UNSET,
          firstSpan.status.code,
          'Unexpected span status code',
        );
        assert.strictEqual(
          undefined,
          firstSpan.status.message,
          'Unexpected span status message',
        );

        done();
      });
    });
  });

  describe('commit', () => {
    it('without error', done => {
      const id = 'transaction-id-123';
      const transactionTag = 'bar';
      transaction.id = id;
      transaction.requestOptions = {transactionTag};

      transaction.request = (config, callback) => {
        callback(null, {});
      };

      transaction.commit(err => {
        assert.ifError(err);

        const exportResults = extractExportedSpans();
        const actualSpanNames = exportResults.spanNames;
        const actualEventNames = exportResults.spanEventNames;

        const expectedSpanNames = ['CloudSpanner.Transaction.commit'];
        assert.deepStrictEqual(
          actualSpanNames,
          expectedSpanNames,
          `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
        );

        const expectedEventNames = ['Starting Commit', 'Commit Done'];
        assert.deepStrictEqual(
          actualEventNames,
          expectedEventNames,
          `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
        );

        // Ensure that the final span that got retries did not error.
        const spans = exportResults.spans;
        const firstSpan = spans[0];
        assert.strictEqual(
          SpanStatusCode.UNSET,
          firstSpan.status.code,
          'Unexpected span status code',
        );
        assert.strictEqual(
          undefined,
          firstSpan.status.message,
          'Unexpected span status message',
        );

        done();
      });
    });

    it('with generic error', () => {
      const fakeError = new Error('commit.error');
      transaction.request = (config, callback) => {
        callback(fakeError, {});
      };

      transaction.commit(err => {
        assert.strictEqual(err, fakeError);

        const exportResults = extractExportedSpans();
        const actualSpanNames = exportResults.spanNames;
        const actualEventNames = exportResults.spanEventNames;

        const expectedSpanNames = ['CloudSpanner.Transaction.commit'];
        assert.deepStrictEqual(
          actualSpanNames,
          expectedSpanNames,
          `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
        );

        const expectedEventNames = ['Starting Commit', 'Commit failed'];
        assert.deepStrictEqual(
          actualEventNames,
          expectedEventNames,
          `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
        );

        // Ensure that the final span that got retries did not error.
        const spans = exportResults.spans;

        const firstSpan = spans[0];
        assert.strictEqual(
          SpanStatusCode.ERROR,
          firstSpan.status.code,
          'Unexpected span status code',
        );
        assert.strictEqual(
          fakeError.message,
          firstSpan.status.message,
          'Unexpected span status message',
        );

        withAllSpansHaveDBName(spans);
      });
    });
  });
});
