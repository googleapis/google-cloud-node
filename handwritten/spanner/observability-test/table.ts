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

import * as pfy from '@google-cloud/promisify';
import * as assert from 'assert';
import {before, beforeEach, afterEach, describe, it} from 'mocha';
import * as extend from 'extend';
import * as proxyquire from 'proxyquire';
import * as sinon from 'sinon';
import * as through from 'through2';

const {
  AlwaysOnSampler,
  NodeTracerProvider,
  InMemorySpanExporter,
} = require('@opentelemetry/sdk-trace-node');
import {SpanStatusCode} from '@opentelemetry/api';

// eslint-disable-next-line n/no-extraneous-require
const {SimpleSpanProcessor} = require('@opentelemetry/sdk-trace-base');

const fakePfy = extend({}, pfy, {
  promisifyAll(klass, options) {
    if (klass.name !== 'Table') {
      return;
    }
    assert.deepStrictEqual(options.exclude, ['delete', 'drop']);
  },
});

class FakeTransaction {
  commit(gaxOptions, callback) {
    callback(null, {});
  }
  createReadStream() {
    return through.obj();
  }
  deleteRows() {}
  end() {}
  insert() {}
  replace() {}
  upsert() {}
  update() {}
}

describe('Table', () => {
  const sandbox = sinon.createSandbox();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let Table: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let TableCached: any;
  let table;
  let transaction: FakeTransaction;

  const DATABASE = {
    formattedName_: 'formatted-db-name',
    runTransaction: (opts, callback) => callback(null, transaction),
    getSnapshot: (options, callback) => callback(null, transaction),
  };

  const traceExporter = new InMemorySpanExporter();
  const sampler = new AlwaysOnSampler();
  const provider = new NodeTracerProvider({
    sampler: sampler,
    exporter: traceExporter,
    spanProcessors: [new SimpleSpanProcessor(traceExporter)],
  });

  const NAME = 'table-name';

  const ROW = {};

  const mutateRowsOptions = {
    requestOptions: {transactionTag: 'transaction-tag'},
  };

  before(() => {
    Table = proxyquire('../src/table.js', {
      '@google-cloud/promisify': fakePfy,
    }).Table;
    TableCached = extend({}, Table);
  });

  beforeEach(() => {
    extend(Table, TableCached);
    table = new Table(DATABASE, NAME);
    transaction = new FakeTransaction();
    table._observabilityOptions = {tracerProvider: provider};
  });

  afterEach(() => {
    sandbox.restore();
    traceExporter.reset();
  });

  function getExportedSpans(minCount: number) {
    traceExporter.forceFlush();
    const spans = traceExporter.getFinishedSpans();
    assert.strictEqual(
      spans.length >= minCount,
      true,
      `at least ${minCount} spans expected`,
    );

    // Sort the spans by duration.
    spans.sort((spanA, spanB) => {
      spanA.duration < spanB.duration;
    });

    return spans;
  }

  function spanNames(spans) {
    const actualSpanNames: string[] = [];
    spans.forEach(span => {
      actualSpanNames.push(span.name);
    });
    return actualSpanNames;
  }

  function verifySpanAttributes(span) {
    const attributes = span.attributes;
    assert.strictEqual(attributes['transaction.tag'], 'transaction-tag');
    assert.strictEqual(attributes['db.sql.table'], 'table-name');
    assert.strictEqual(attributes['db.name'], 'formatted-db-name');
  }

  it('deleteRows', done => {
    const KEYS = ['key'];
    const stub = (
      sandbox.stub(transaction, 'deleteRows') as sinon.SinonStub
    ).withArgs(table.name, KEYS);

    sandbox.stub(transaction, 'commit').callsFake((opts, callback) => {
      callback();
    });

    table.deleteRows(KEYS, mutateRowsOptions, err => {
      assert.ifError(err);
      assert.strictEqual(stub.callCount, 1);
      const spans = getExportedSpans(1);
      const actualSpanNames = spanNames(spans);
      const expectedSpanNames = ['CloudSpanner.Table.deleteRows'];
      assert.deepStrictEqual(
        actualSpanNames,
        expectedSpanNames,
        `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
      );
      verifySpanAttributes(spans[0]);
      done();
    });
  });

  it('insert', done => {
    const stub = (
      sandbox.stub(transaction, 'insert') as sinon.SinonStub
    ).withArgs(table.name, ROW);

    table.insert(ROW, mutateRowsOptions, err => {
      assert.ifError(err);
      assert.strictEqual(stub.callCount, 1);
      const spans = getExportedSpans(1);
      const actualSpanNames = spanNames(spans);
      const expectedSpanNames = ['CloudSpanner.Table.insert'];
      assert.deepStrictEqual(
        actualSpanNames,
        expectedSpanNames,
        `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
      );
      verifySpanAttributes(spans[0]);
      done();
    });
  });

  it('insert with an error', done => {
    const fakeError = new Error('err');
    sandbox
      .stub(DATABASE, 'runTransaction')
      .callsFake((opts, callback) => callback(fakeError));

    table.insert(ROW, mutateRowsOptions, err => {
      assert.strictEqual(err, fakeError);

      const gotSpans = getExportedSpans(1);
      const gotSpanStatus = gotSpans[0].status;
      const wantSpanStatus = {
        code: SpanStatusCode.ERROR,
        message: fakeError.message,
      };
      assert.deepStrictEqual(
        gotSpanStatus,
        wantSpanStatus,
        `mismatch in span status:\n\tGot:  ${JSON.stringify(gotSpanStatus)}\n\tWant: ${JSON.stringify(wantSpanStatus)}`,
      );

      const actualSpanNames = spanNames(gotSpans);
      const expectedSpanNames = ['CloudSpanner.Table.insert'];

      assert.deepStrictEqual(
        actualSpanNames,
        expectedSpanNames,
        `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
      );
      verifySpanAttributes(gotSpans[0]);
      done();
    });
  });

  it('upsert', done => {
    const stub = (
      sandbox.stub(transaction, 'upsert') as sinon.SinonStub
    ).withArgs(table.name, ROW);

    table.upsert(ROW, mutateRowsOptions, err => {
      assert.ifError(err);
      assert.strictEqual(stub.callCount, 1);

      const gotSpans = getExportedSpans(1);

      const actualSpanNames = spanNames(gotSpans);
      const expectedSpanNames = ['CloudSpanner.Table.upsert'];

      assert.deepStrictEqual(
        actualSpanNames,
        expectedSpanNames,
        `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
      );
      verifySpanAttributes(gotSpans[0]);
      done();
    });
  });

  it('upsert with an error', done => {
    const fakeError = new Error('err');
    sandbox
      .stub(DATABASE, 'runTransaction')
      .callsFake((opts, callback) => callback(fakeError));

    table.upsert(ROW, mutateRowsOptions, err => {
      assert.strictEqual(err, fakeError);

      const gotSpans = getExportedSpans(1);

      const gotSpanStatus = gotSpans[0].status;
      const wantSpanStatus = {
        code: SpanStatusCode.ERROR,
        message: fakeError.message,
      };
      assert.deepStrictEqual(
        gotSpanStatus,
        wantSpanStatus,
        `mismatch in span status:\n\tGot:  ${JSON.stringify(gotSpanStatus)}\n\tWant: ${JSON.stringify(wantSpanStatus)}`,
      );

      const actualSpanNames = spanNames(gotSpans);
      const expectedSpanNames = ['CloudSpanner.Table.upsert'];
      assert.deepStrictEqual(
        actualSpanNames,
        expectedSpanNames,
        `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
      );

      verifySpanAttributes[gotSpans[0]];
      done();
    });
  });

  it('replace', done => {
    const stub = (
      sandbox.stub(transaction, 'replace') as sinon.SinonStub
    ).withArgs(table.name, ROW);

    table.replace(ROW, mutateRowsOptions, err => {
      assert.ifError(err);
      assert.strictEqual(stub.callCount, 1);

      const gotSpans = getExportedSpans(1);

      const actualSpanNames = spanNames(gotSpans);
      const expectedSpanNames = ['CloudSpanner.Table.replace'];
      assert.deepStrictEqual(
        actualSpanNames,
        expectedSpanNames,
        `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
      );

      verifySpanAttributes(gotSpans[0]);
      done();
    });
  });

  it('replace with an error', done => {
    const fakeError = new Error('err');
    sandbox
      .stub(DATABASE, 'runTransaction')
      .callsFake((opts, callback) => callback(fakeError));

    table.replace(ROW, mutateRowsOptions, err => {
      assert.strictEqual(err, fakeError);
      const gotSpans = getExportedSpans(1);
      const gotSpanStatus = gotSpans[0].status;
      const wantSpanStatus = {
        code: SpanStatusCode.ERROR,
        message: fakeError.message,
      };
      assert.deepStrictEqual(
        gotSpanStatus,
        wantSpanStatus,
        `mismatch in span status:\n\tGot:  ${JSON.stringify(gotSpanStatus)}\n\tWant: ${JSON.stringify(wantSpanStatus)}`,
      );

      const actualSpanNames = spanNames(gotSpans);
      const expectedSpanNames = ['CloudSpanner.Table.replace'];
      assert.deepStrictEqual(
        actualSpanNames,
        expectedSpanNames,
        `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
      );
      verifySpanAttributes(gotSpans[0]);

      done();
    });
  });
});
