// Copyright 2018 Google LLC
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

import * as assert from 'assert';
import {describe, it, before, beforeEach, afterEach} from 'mocha';
import * as Long from 'long';
import * as proxyquire from 'proxyquire';
import * as sn from 'sinon';

import {RowStateEnum} from '../src/chunktransformer.js';
import {Mutation} from '../src/mutation.js';
import {Row} from '../src/row.js';

const ROW_ID = 'my-row';
const CONVERTED_ROW_ID = 'my-converted-row';
const sinon = sn.createSandbox();

const FakeMutation = {
  methods: Mutation.methods,
  convertToBytes: sinon.spy(value => {
    if (value === ROW_ID) {
      return CONVERTED_ROW_ID;
    }
    return value;
  }),
  convertFromBytes: sinon.spy(value => {
    return value;
  }),
};

describe('Bigtable/ChunkTransformer', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let ChunkTransformer: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let chunkTransformer: any;
  let rows: Row[];
  before(() => {
    ChunkTransformer = proxyquire('../src/chunktransformer.js', {
      './mutation.js': {Mutation: FakeMutation},
    }).ChunkTransformer;
  });
  beforeEach(() => {
    chunkTransformer = new ChunkTransformer();
    rows = [];
    chunkTransformer.push = (row: Row) => {
      rows.push(row);
    };
  });
  afterEach(() => {
    sinon.restore();
  });
  describe('instantiation', () => {
    it('should have initial state', () => {
      assert(chunkTransformer instanceof ChunkTransformer);
      //chunkTransformer.lastRowKey = '';
      //chunkTransformer.family = {};
      //chunkTransformer.qualifiers = [];
      //chunkTransformer.qualifier = {};
      //chunkTransformer.row = {};
      //chunkTransformer.state = RowStateEnum.NEW_ROW;
      assert.deepStrictEqual(chunkTransformer.row, {}, 'invalid initial state');
      assert.deepStrictEqual(
        chunkTransformer.lastRowKey,
        undefined,
        'invalid initial state',
      );
      assert.deepStrictEqual(
        chunkTransformer.family,
        {},
        'invalid initial state',
      );
      assert.deepStrictEqual(
        chunkTransformer.qualifiers,
        [],
        'invalid initial state',
      );
      assert.deepStrictEqual(
        chunkTransformer.qualifier,
        {},
        'invalid initial state',
      );
      assert.deepStrictEqual(
        chunkTransformer.state,
        RowStateEnum.NEW_ROW,
        'invalid initial state',
      );
    });
  });
  describe('processNewRow', () => {
    let processNewRowSpy: sn.SinonSpy;
    let resetSpy: sn.SinonSpy;
    let commitSpy: sn.SinonSpy;
    let destroySpy: sn.SinonSpy;
    beforeEach(() => {
      processNewRowSpy = sinon.spy(chunkTransformer, 'processNewRow');
      resetSpy = sinon.spy(chunkTransformer, 'reset');
      commitSpy = sinon.spy(chunkTransformer, 'commit');
      destroySpy = sinon.spy(chunkTransformer, 'destroy');
    });
    it('should destroy when row key is defined ', done => {
      chunkTransformer.on('error', () => {
        assert(destroySpy.called);
        done();
      });
      chunkTransformer.row = {key: 'abc'};
      processNewRowSpy.call(chunkTransformer, {});
    });
    it('should destroy when chunk key is undefined ', done => {
      chunkTransformer.on('error', () => {
        assert(destroySpy.called);
        done();
      });
      processNewRowSpy.call(chunkTransformer, {});
    });
    it('should destroy when resetRow is true ', done => {
      chunkTransformer.on('error', () => {
        assert(destroySpy.called);
        done();
      });
      processNewRowSpy.call(chunkTransformer, {
        rowKey: 'key',
        resetRow: true,
      });
    });
    it('should destroy when resetRow ', done => {
      chunkTransformer.on('error', () => {
        assert(destroySpy.called);
        done();
      });
      processNewRowSpy.call(chunkTransformer, {resetRow: true});
    });
    it('should destroy when row key is equal to previous row key ', done => {
      chunkTransformer.on('error', () => {
        assert(destroySpy.called);
        done();
      });
      chunkTransformer.lastRowKey = 'key';

      processNewRowSpy.call(chunkTransformer, {
        rowKey: 'key',
        resetRow: false,
      });
    });
    it('should destroy when family name is undefined ', done => {
      chunkTransformer.on('error', () => {
        assert(destroySpy.called);
        done();
      });
      processNewRowSpy.call(chunkTransformer, {rowKey: 'key'});
    });
    it('should destroy when qualifier is undefined ', done => {
      chunkTransformer.on('error', () => {
        assert(destroySpy.called);
        done();
      });
      processNewRowSpy.call(chunkTransformer, {
        rowKey: 'key',
        familyName: 'family',
      });
    });
    it('should destroy when valueSize>0 and commitRow=true ', done => {
      chunkTransformer.on('error', () => {
        assert(destroySpy.called);
        done();
      });
      processNewRowSpy.call(chunkTransformer, {
        rowKey: 'key',
        familyName: 'family',
        qualifier: 'qualifier',
        valueSize: 10,
        commitRow: true,
      });
    });
    it('should commit 1 row ', () => {
      const chunk = {
        rowKey: 'key',
        familyName: {value: 'family'},
        qualifier: {value: 'qualifier'},
        valueSize: 0,
        timestampMicros: 0,
        labels: [],
        commitRow: true,
        value: 'value',
      };
      chunkTransformer.processNewRow(chunk);
      assert(resetSpy.called, 'reset state failed');
      assert(commitSpy.called, 'commit row failed');
      assert.strictEqual(
        chunkTransformer.lastRowKey,
        chunk.rowKey,
        'wrong state lastRowKey',
      );
      const expectedRow = {
        key: chunk.rowKey,
        data: {
          family: {
            qualifier: [
              {
                value: chunk.value,
                timestamp: chunk.timestampMicros,
                labels: chunk.labels,
              },
            ],
          },
        },
      };
      assert.deepStrictEqual(rows[0], expectedRow);
    });
    it('partial row  ', () => {
      const chunk = {
        rowKey: 'key',
        familyName: {value: 'family'},
        qualifier: {value: 'qualifier'},
        valueSize: 0,
        timestampMicros: 0,
        labels: [],
        commitRow: false,
        value: 'value',
      };
      chunkTransformer.processNewRow(chunk);
      assert(!resetSpy.called, 'invalid call to reset');
      assert(!commitSpy.called, 'inavlid call to commit');
      assert.strictEqual(rows.length, 0, 'wrong call to push');
      const partialRow = {
        key: chunk.rowKey,
        data: {
          family: {
            qualifier: [
              {
                value: chunk.value,
                timestamp: chunk.timestampMicros,
                labels: chunk.labels,
              },
            ],
          },
        },
      };
      assert.deepStrictEqual(chunkTransformer.row, partialRow);
      assert.strictEqual(
        chunkTransformer.state,
        RowStateEnum.ROW_IN_PROGRESS,
        'wrong state',
      );
    });
    it('partial cell  ', () => {
      const chunk = {
        rowKey: 'key',
        familyName: {value: 'family'},
        qualifier: {value: 'qualifier'},
        valueSize: 10,
        timestampMicros: 0,
        labels: [],
        commitRow: false,
        value: 'value',
      };
      chunkTransformer.processNewRow(chunk);
      assert(!resetSpy.called, 'invalid call to reset');
      assert(!commitSpy.called, 'inavlid call to commit');
      assert.strictEqual(rows.length, 0, 'wrong call to push');
      const partialRow = {
        key: chunk.rowKey,
        data: {
          family: {
            qualifier: [
              {
                value: chunk.value,
                timestamp: chunk.timestampMicros,
                labels: chunk.labels,
              },
            ],
          },
        },
      };
      assert.deepStrictEqual(chunkTransformer.row, partialRow);
      assert.strictEqual(
        chunkTransformer.state,
        RowStateEnum.CELL_IN_PROGRESS,
        'wrong state',
      );
    });
  });
  describe('processRowInProgress', () => {
    let processRowInProgressSpy: sn.SinonSpy;
    let resetSpy: sn.SinonSpy;
    let commitSpy: sn.SinonSpy;
    let destroySpy: sn.SinonSpy;
    beforeEach(() => {
      processRowInProgressSpy = sinon.spy(
        chunkTransformer,
        'processRowInProgress',
      );
      resetSpy = sinon.spy(chunkTransformer, 'reset');
      commitSpy = sinon.spy(chunkTransformer, 'commit');
      destroySpy = sinon.spy(chunkTransformer, 'destroy');
    });
    it('should destroy when resetRow and rowkey', done => {
      chunkTransformer.on('error', () => {
        assert(destroySpy.called);
        done();
      });
      processRowInProgressSpy.call(chunkTransformer, {
        resetRow: true,
        rowKey: 'key',
      });
    });
    it('should destroy when resetRow and familyName', done => {
      chunkTransformer.on('error', () => {
        assert(destroySpy.called);
        done();
      });
      processRowInProgressSpy.call(chunkTransformer, {
        resetRow: true,
        familyName: 'family',
      });
    });
    it('should destroy when resetRow and qualifier', done => {
      chunkTransformer.on('error', () => {
        assert(destroySpy.called);
        done();
      });
      processRowInProgressSpy.call(chunkTransformer, {
        resetRow: true,
        qualifier: 'qualifier',
      });
    });
    it('should destroy when resetRow and value', done => {
      chunkTransformer.on('error', () => {
        assert(destroySpy.called);
        done();
      });
      processRowInProgressSpy.call(chunkTransformer, {
        resetRow: true,
        value: 'value',
      });
    });
    it('should destroy when resetRow and timestampMicros', done => {
      chunkTransformer.on('error', () => {
        assert(destroySpy.called);
        done();
      });
      processRowInProgressSpy.call(chunkTransformer, {
        resetRow: true,
        timestampMicros: 10,
      });
    });
    it('should destroy when rowKey not equal to lastRowKey', done => {
      chunkTransformer.on('error', () => {
        assert(destroySpy.called);
        done();
      });
      chunkTransformer.row = {key: 'key1'};
      processRowInProgressSpy.call(chunkTransformer, {rowKey: 'key'});
    });
    it('should destroy when valueSize>0 and commitRow=true ', done => {
      chunkTransformer.on('error', () => {
        assert(destroySpy.called);
        done();
      });
      processRowInProgressSpy.call(chunkTransformer, {
        valueSize: 10,
        commitRow: true,
      });
    });
    it('should destroy when familyName without qualifier ', done => {
      chunkTransformer.on('error', () => {
        assert(destroySpy.called);
        done();
      });
      processRowInProgressSpy.call(chunkTransformer, {
        familyName: 'family',
      });
    });
    it('should reset on resetRow ', () => {
      const chunk = {resetRow: true};
      chunkTransformer.processRowInProgress(chunk);
      assert(resetSpy.called, 'Did not reset');
      assert.strictEqual(rows.length, 0, 'wrong call to push');
      assert(!commitSpy.called, 'unexpected commit');
    });
    it('bare commitRow should produce qualifer ', () => {
      chunkTransformer.qualifiers = [];
      chunkTransformer.row = {
        key: 'key',
        data: {
          family: {
            qualifier: chunkTransformer.qualifiers,
          },
        },
      };
      const chunk = {commitRow: true};
      chunkTransformer.processRowInProgress(chunk);
      assert(commitSpy.called, 'did not call commit');
      assert(resetSpy.called, 'did not call reset');
      assert.strictEqual(rows.length, 1, 'wrong call to push');
      const expectedRow = {
        key: 'key',
        data: {
          family: {
            qualifier: [
              {
                value: undefined,
                timestamp: undefined,
                labels: undefined,
              },
            ],
          },
        },
      };
      const row = rows[0];
      assert.deepStrictEqual(row, expectedRow, 'row mismatch');
      assert.strictEqual(
        chunkTransformer.state,
        RowStateEnum.NEW_ROW,
        'state mismatch',
      );
    });
    it('chunk with qualifier and commit should produce row ', () => {
      chunkTransformer.qualifiers = [];
      chunkTransformer.family = {
        qualifier: chunkTransformer.qualifiers,
      };
      chunkTransformer.row = {
        key: 'key',
        data: {
          family: chunkTransformer.family,
        },
      };
      const chunk = {
        commitRow: true,
        qualifier: {value: 'qualifier2'},
        value: 'value',
        timestampMicros: 0,
        labels: [],
        valueSize: 0,
      };
      chunkTransformer.processRowInProgress(chunk);
      assert(commitSpy.called, 'did not call commit');
      assert(resetSpy.called, 'did not call reset');
      assert.strictEqual(rows.length, 1, 'wrong call to push');
      const expectedRow = {
        key: 'key',
        data: {
          family: {
            qualifier: [],
            qualifier2: [
              {
                value: 'value',
                timestamp: 0,
                labels: [],
              },
            ],
          },
        },
      };
      const row = rows[0];
      assert.deepStrictEqual(row, expectedRow, 'row mismatch');
      assert.strictEqual(
        chunkTransformer.state,
        RowStateEnum.NEW_ROW,
        'state mismatch',
      );
    });
    it('chunk with familyName and empty qualifier should produce row', () => {
      chunkTransformer.qualifiers = [];
      chunkTransformer.family = {
        qualifier: chunkTransformer.qualifiers,
      };
      chunkTransformer.row = {
        key: 'key',
        data: {
          family: chunkTransformer.family,
        },
      };
      const chunk = {
        commitRow: true,
        familyName: {value: 'family2'},
        qualifier: '',
        value: 'value',
        timestampMicros: 0,
        labels: [],
        valueSize: 0,
      };
      chunkTransformer.processRowInProgress(chunk);
      assert(commitSpy.called, 'did not call commit');
      assert(resetSpy.called, 'did not call reset');
      assert.strictEqual(rows.length, 1, 'wrong call to push');
      const expectedRow = {
        key: 'key',
        data: {
          family: {
            qualifier: [
              {
                value: 'value',
                timestamp: 0,
                labels: [],
              },
            ],
          },
          family2: {},
        },
      };
      const row = rows[0];
      assert.deepStrictEqual(row, expectedRow, 'row mismatch');
      assert.strictEqual(
        chunkTransformer.state,
        RowStateEnum.NEW_ROW,
        'state mismatch',
      );
    });
    it('chunk with new family and commitRow should produce row', () => {
      chunkTransformer.qualifiers = [];
      chunkTransformer.family = {
        qualifier: chunkTransformer.qualifiers,
      };
      chunkTransformer.row = {
        key: 'key',
        data: {
          family: chunkTransformer.family,
        },
      };
      const chunk = {
        commitRow: true,
        familyName: {value: 'family2'},
        qualifier: {value: 'qualifier2'},
        value: 'value',
        timestampMicros: 0,
        labels: [],
        valueSize: 0,
      };
      chunkTransformer.processRowInProgress(chunk);
      assert(commitSpy.called, 'did not call commit');
      assert(resetSpy.called, 'did not call reset');
      assert.strictEqual(rows.length, 1, 'wrong call to push');
      const expectedRow = {
        key: 'key',
        data: {
          family: {
            qualifier: [],
          },
          family2: {
            qualifier2: [
              {
                value: 'value',
                timestamp: 0,
                labels: [],
              },
            ],
          },
        },
      };
      const row = rows[0];
      assert.deepStrictEqual(row, expectedRow, 'row mismatch');
      assert.strictEqual(
        chunkTransformer.state,
        RowStateEnum.NEW_ROW,
        'state mismatch',
      );
    });
    it('partial cell ', () => {
      chunkTransformer.qualifiers = [];
      chunkTransformer.row = {
        key: 'key',
        data: {
          family: {
            qualifier: chunkTransformer.qualifiers,
          },
        },
      };
      const chunk = {
        commitRow: false,
        value: 'value2',
        valueSize: 10,
        timestampMicros: 0,
        labels: [],
      };
      chunkTransformer.processRowInProgress(chunk);
      assert(!commitSpy.called, 'invalid call to commit');
      assert(!resetSpy.called, 'invalid call to reset');
      assert.strictEqual(rows.length, 0, 'wrong call to push');
      const expectedState = {
        key: 'key',
        data: {
          family: {
            qualifier: [
              {
                value: 'value2',
                timestamp: 0,
                labels: [],
              },
            ],
          },
        },
      };
      assert.deepStrictEqual(
        chunkTransformer.row,
        expectedState,
        'row state mismatch',
      );
      assert.strictEqual(
        chunkTransformer.state,
        RowStateEnum.CELL_IN_PROGRESS,
        'state mismatch',
      );
    });
    it('should decode numbers', () => {
      const RealChunkTransformer =
        require('../src/chunktransformer.js').ChunkTransformer;
      chunkTransformer = new RealChunkTransformer({decode: true});
      resetSpy = sinon.spy(chunkTransformer, 'reset');
      commitSpy = sinon.spy(chunkTransformer, 'commit');
      destroySpy = sinon.spy(chunkTransformer, 'destroy');

      chunkTransformer.qualifiers = [];
      chunkTransformer.row = {
        key: 'key',
        data: {
          family: {
            qualifier: chunkTransformer.qualifiers,
          },
        },
      };
      const chunk = {
        commitRow: false,
        value: Buffer.from(Long.fromNumber(10).toBytesBE()).toString('base64'),
        valueSize: 0,
        timestampMicros: 0,
        labels: [],
      };
      chunkTransformer.processRowInProgress(chunk);
      assert(!resetSpy.called, 'invalid call to reset');
      assert(!commitSpy.called, 'invalid call to commit');
      assert.strictEqual(rows.length, 0, 'wrong call to push');
      const expectedState = {
        key: 'key',
        data: {
          family: {
            qualifier: [
              {
                value: 10,
                timestamp: 0,
                labels: [],
              },
            ],
          },
        },
      };
      assert.deepStrictEqual(
        chunkTransformer.row,
        expectedState,
        'row mismatch',
      );
      assert.strictEqual(
        chunkTransformer.state,
        RowStateEnum.ROW_IN_PROGRESS,
        'state mismatch',
      );
    });
  });
  describe('processCellInProgress', () => {
    let processCellInProgressSpy: sn.SinonSpy;
    let resetSpy: sn.SinonSpy;
    let commitSpy: sn.SinonSpy;
    let destroySpy: sn.SinonSpy;
    beforeEach(() => {
      processCellInProgressSpy = sinon.spy(
        chunkTransformer,
        'processCellInProgress',
      );
      resetSpy = sinon.spy(chunkTransformer, 'reset');
      commitSpy = sinon.spy(chunkTransformer, 'commit');
      destroySpy = sinon.spy(chunkTransformer, 'destroy');
    });
    it('should destroy when resetRow and rowkey', done => {
      chunkTransformer.on('error', () => {
        assert(destroySpy.called);
        done();
      });
      processCellInProgressSpy.call(chunkTransformer, {
        resetRow: true,
        rowKey: 'key',
      });
    });
    it('should destroy when resetRow and familyName', done => {
      chunkTransformer.on('error', () => {
        assert(destroySpy.called);
        done();
      });
      processCellInProgressSpy.call(chunkTransformer, {
        resetRow: true,
        familyName: 'family',
      });
    });
    it('should destroy when resetRow and qualifier', done => {
      chunkTransformer.on('error', () => {
        assert(destroySpy.called);
        done();
      });
      processCellInProgressSpy.call(chunkTransformer, {
        resetRow: true,
        qualifier: 'qualifier',
      });
    });
    it('should destroy when resetRow and value', done => {
      chunkTransformer.on('error', () => {
        assert(destroySpy.called);
        done();
      });
      processCellInProgressSpy.call(chunkTransformer, {
        resetRow: true,
        value: 'value',
      });
    });
    it('should destroy when resetRow and timestampMicros', done => {
      chunkTransformer.on('error', () => {
        assert(destroySpy.called);
        done();
      });
      processCellInProgressSpy.call(chunkTransformer, {
        resetRow: true,
        timestampMicros: 10,
      });
    });
    it('should destroy when valueSize>0 and commitRow=true ', done => {
      chunkTransformer.on('error', () => {
        assert(destroySpy.called);
        done();
      });
      processCellInProgressSpy.call(chunkTransformer, {
        valueSize: 10,
        commitRow: true,
      });
    });
    it('should reset on resetRow ', () => {
      const chunk = {resetRow: true};
      chunkTransformer.processCellInProgress(chunk);
      assert(resetSpy.called, 'did not call reset');
      assert(!commitSpy.called, 'unexpected call to commit');
      assert.strictEqual(rows.length, 0, 'wrong call to push');
    });
    it('should produce row on commitRow', () => {
      chunkTransformer.qualifier = {
        value: 'value',
        size: 0,
        timestamp: 0,
        labels: [],
      };
      chunkTransformer.qualifiers = [chunkTransformer.qualifier];
      chunkTransformer.family = {
        qualifier: chunkTransformer.qualifiers,
      };
      chunkTransformer.row = {
        key: 'key',
        data: {
          family: chunkTransformer.family,
        },
      };
      const chunk = {
        commitRow: true,
        value: '2',
        valueSize: 0,
      };
      chunkTransformer.processCellInProgress(chunk);
      assert(commitSpy.called, 'did not call commit');
      assert(resetSpy.called, 'did not call reste');
      assert.strictEqual(rows.length, 1, 'wrong call to push');
      const expectedRow = {
        key: 'key',
        data: {
          family: {
            qualifier: [
              {
                value: 'value2',
                size: 0,
                timestamp: 0,
                labels: [],
              },
            ],
          },
        },
      };
      const row = rows[0];
      assert.deepStrictEqual(row, expectedRow, 'row mismatch');
      assert.strictEqual(
        chunkTransformer.state,
        RowStateEnum.NEW_ROW,
        'state mismatch',
      );
    });
    it('without commitRow should change state to processRowInProgress', () => {
      chunkTransformer.qualifier = {
        value: 'value',
        size: 0,
        timestamp: 0,
        labels: [],
      };
      chunkTransformer.qualifiers = [chunkTransformer.qualifier];
      chunkTransformer.family = {
        qualifier: chunkTransformer.qualifiers,
      };
      chunkTransformer.row = {
        key: 'key',
        data: {
          family: chunkTransformer.family,
        },
      };
      const chunk = {
        commitRow: false,
        value: '2',
        valueSize: 0,
      };
      chunkTransformer.processCellInProgress(chunk);
      assert(!resetSpy.called, 'invalid call to reset');
      assert(!commitSpy.called, 'invalid call to commit');
      assert.strictEqual(rows.length, 0, 'wrong call to push');
      const expectedState = {
        key: 'key',
        data: {
          family: {
            qualifier: [
              {
                value: 'value2',
                size: 0,
                timestamp: 0,
                labels: [],
              },
            ],
          },
        },
      };
      assert.deepStrictEqual(
        chunkTransformer.row,
        expectedState,
        'row mismatch',
      );
      assert.strictEqual(
        chunkTransformer.state,
        RowStateEnum.ROW_IN_PROGRESS,
        'state mismatch',
      );
    });
    it('should concat buffer when decode option is false', () => {
      chunkTransformer = new ChunkTransformer({decode: false});
      processCellInProgressSpy = sinon.spy(
        chunkTransformer,
        'processCellInProgress',
      );
      resetSpy = sinon.spy(chunkTransformer, 'reset');
      commitSpy = sinon.spy(chunkTransformer, 'commit');
      destroySpy = sinon.spy(chunkTransformer, 'destroy');
      chunkTransformer.qualifier = {
        value: Buffer.from('value', 'base64'),
        size: 0,
        timestamp: 0,
        labels: [],
      };
      chunkTransformer.qualifiers = [chunkTransformer.qualifier];
      chunkTransformer.family = {
        qualifier: chunkTransformer.qualifiers,
      };
      chunkTransformer.row = {
        key: 'key',
        data: {
          family: chunkTransformer.family,
        },
      };
      const chunk = {
        commitRow: false,
        value: Buffer.from('value', 'base64'),
        valueSize: 0,
      };
      chunkTransformer.processCellInProgress(chunk);
      assert(!resetSpy.called, 'invalid call to reset');
      assert(!commitSpy.called, 'invalid call to commit');
      assert.strictEqual(rows.length, 0, 'wrong call to push');
      const expectedState = {
        key: 'key',
        data: {
          family: {
            qualifier: [
              {
                value: Buffer.concat([
                  Buffer.from('value', 'base64'),
                  Buffer.from('value', 'base64'),
                ]),
                size: 0,
                timestamp: 0,
                labels: [],
              },
            ],
          },
        },
      };
      assert.deepStrictEqual(
        chunkTransformer.row,
        expectedState,
        'row mismatch',
      );
      assert.strictEqual(
        chunkTransformer.state,
        RowStateEnum.ROW_IN_PROGRESS,
        'state mismatch',
      );
    });
  });
  describe('_flush', () => {
    let _flushSpy: sn.SinonSpy;
    let callback: sn.SinonSpy;
    let destroySpy: sn.SinonSpy;
    beforeEach(() => {
      _flushSpy = sinon.spy(chunkTransformer, '_flush');
      callback = sinon.spy();
      destroySpy = sinon.spy(chunkTransformer, 'destroy');
    });
    it('completed row should complete successfully', () => {
      chunkTransformer.row = {};
      _flushSpy.call(chunkTransformer, callback);
      assert(callback.called, 'did not call callback');
      const err = callback.getCall(0).args[0];
      assert(!err, 'did not expect error');
    });
    it('should call destroy when there is uncommitted row', done => {
      chunkTransformer.on('error', () => {
        assert(destroySpy.called, 'did not destroyed');
        done();
      });
      chunkTransformer.row = {key: 'abc'};
      _flushSpy.call(chunkTransformer, callback);
    });
  });
  describe('_transform', () => {
    let callback: sn.SinonSpy;
    let processNewRowSpy: sn.SinonSpy;
    let processRowInProgressSpy: sn.SinonSpy;
    let processCellInProgressSpy: sn.SinonSpy;
    beforeEach(() => {
      callback = sinon.spy();
      processNewRowSpy = sinon.spy(chunkTransformer, 'processNewRow');
      processRowInProgressSpy = sinon.spy(
        chunkTransformer,
        'processRowInProgress',
      );
      processCellInProgressSpy = sinon.spy(
        chunkTransformer,
        'processCellInProgress',
      );
    });
    it('when current state is NEW_ROW should call processNewRow', () => {
      const chunk = {
        rowKey: 'key',
        familyName: {value: 'family'},
        qualifier: {value: 'qualifier'},
        valueSize: 0,
        timestampMicros: 0,
        labels: [],
        commitRow: true,
        value: 'value',
      };
      chunkTransformer.state = RowStateEnum.NEW_ROW;
      const chunks = [chunk];
      chunkTransformer._transform({chunks}, {}, callback);
      assert(processNewRowSpy.called, 'did not call processNewRow');
      const err = callback.getCall(0).args[0];
      assert(!err, 'did not expect error');
    });
    it('when current state is ROW_IN_PROGRESS should call processRowInProgress', () => {
      chunkTransformer.row = {key: 'key'};
      chunkTransformer.state = RowStateEnum.ROW_IN_PROGRESS;
      const chunks = [{key: 'key'}];
      chunkTransformer._transform({chunks}, {}, callback);
      assert(
        processRowInProgressSpy.called,
        'did not call processRowInProgress',
      );
      const err = callback.getCall(0).args[0];
      assert(!err, 'did not expect error');
    });
    it('when current state is CELL_IN_PROGRESS should call processCellInProgress', () => {
      chunkTransformer.row = {key: 'key'};
      chunkTransformer.state = RowStateEnum.CELL_IN_PROGRESS;
      const chunks = [{key: 'key'}];
      chunkTransformer._transform({chunks}, {}, callback);
      assert(
        processCellInProgressSpy.called,
        'did not call processCellInProgress',
      );
      const err = callback.getCall(0).args[0];
      assert(!err, 'did not expect error');
    });
    it('should change the `lastRowKey` value for `data.lastScannedRowKey`', () => {
      chunkTransformer._transform(
        {chunks: [], lastScannedRowKey: 'foo'},
        {},
        callback,
      );
      assert.deepStrictEqual(chunkTransformer.lastRowKey, 'foo');
    });
  });
  describe('reset', () => {
    it('should reset initial state', () => {
      chunkTransformer.lastRowKey = 'prevkey';
      chunkTransformer.qualifier = {
        value: 'value',
        size: 0,
        timestamp: 0,
        labels: [],
      };
      chunkTransformer.qualifiers = [chunkTransformer.qualifier];
      chunkTransformer.family = {
        qualifier: chunkTransformer.qualifiers,
      };
      chunkTransformer.row = {
        key: 'key',
        data: {
          family: chunkTransformer.family,
        },
      };
      chunkTransformer.state = RowStateEnum.CELL_IN_PROGRESS;
      chunkTransformer.reset();
      assert.deepStrictEqual(chunkTransformer.row, {}, 'invalid initial state');
      assert.deepStrictEqual(
        chunkTransformer.lastRowKey,
        'prevkey',
        'invalid initial state',
      );
      assert.deepStrictEqual(
        chunkTransformer.family,
        {},
        'invalid initial state',
      );
      assert.deepStrictEqual(
        chunkTransformer.qualifiers,
        [],
        'invalid initial state',
      );
      assert.deepStrictEqual(
        chunkTransformer.qualifier,
        {},
        'invalid initial state',
      );
      assert.deepStrictEqual(
        chunkTransformer.state,
        RowStateEnum.NEW_ROW,
        'invalid initial state',
      );
    });
  });
  describe('commit', () => {
    let resetSpy: sn.SinonSpy;
    beforeEach(() => {
      resetSpy = sinon.spy(chunkTransformer, 'reset');
    });
    it('should reset to initial state and set lastRowKey', () => {
      chunkTransformer.lastRowKey = '';
      chunkTransformer.qualifier = {
        value: 'value',
        size: 0,
        timestamp: 0,
        labels: [],
      };
      chunkTransformer.qualifiers = [chunkTransformer.qualifier];
      chunkTransformer.family = {
        qualifier: chunkTransformer.qualifiers,
      };
      chunkTransformer.row = {
        key: 'key',
        data: {
          family: chunkTransformer.family,
        },
      };
      chunkTransformer.state = RowStateEnum.CELL_IN_PROGRESS;
      chunkTransformer.commit();
      assert(resetSpy.called, 'did not call reset');
      assert.deepStrictEqual(chunkTransformer.row, {}, 'invalid initial state');
      assert.deepStrictEqual(
        chunkTransformer.lastRowKey,
        'key',
        'invalid initial state',
      );
      assert.deepStrictEqual(
        chunkTransformer.family,
        {},
        'invalid initial state',
      );
      assert.deepStrictEqual(
        chunkTransformer.qualifiers,
        [],
        'invalid initial state',
      );
      assert.deepStrictEqual(
        chunkTransformer.qualifier,
        {},
        'invalid initial state',
      );
      assert.deepStrictEqual(
        chunkTransformer.state,
        RowStateEnum.NEW_ROW,
        'invalid initial state',
      );
    });
  });
  describe('moveToNextState', () => {
    let commitSpy: sn.SinonSpy;
    beforeEach(() => {
      commitSpy = sinon.spy(chunkTransformer, 'commit');
    });
    it('chunk with commit row should call callback with row and call commit state', () => {
      chunkTransformer.qualifier = {
        value: 'value',
        size: 0,
        timestamp: 0,
        labels: [],
      };
      chunkTransformer.qualifiers = [chunkTransformer.qualifier];
      chunkTransformer.family = {
        qualifier: chunkTransformer.qualifiers,
      };
      chunkTransformer.row = {
        key: 'key',
        data: {
          family: chunkTransformer.family,
        },
      };
      const chunk = {
        commitRow: true,
      };
      chunkTransformer.moveToNextState(chunk);
      assert(commitSpy.called, 'did not call commit');
      assert.strictEqual(rows.length, 1, 'did not call push');
      const expectedRow = {
        key: 'key',
        data: {
          family: {
            qualifier: [
              {
                value: 'value',
                size: 0,
                timestamp: 0,
                labels: [],
              },
            ],
          },
        },
      };
      const row = rows[0];
      assert.deepStrictEqual(row, expectedRow, 'row mismatch');
      assert.strictEqual(
        chunkTransformer.state,
        RowStateEnum.NEW_ROW,
        'state mismatch',
      );
    });
    it('chunk without commitRow and value size>0 should move to CELL_IN_PROGRESS', () => {
      const chunk = {
        commitRow: false,
        valueSize: 10,
      };
      chunkTransformer.state = RowStateEnum.NEW_ROW;
      chunkTransformer.moveToNextState(chunk);
      assert(!commitSpy.called, 'did not call commit');
      assert.strictEqual(rows.length, 0, 'unexpected call to push');
      assert.strictEqual(
        chunkTransformer.state,
        RowStateEnum.CELL_IN_PROGRESS,
        'wrong state',
      );
    });
    it('chunk without commitRow and value size==0 should move to ROW_IN_PROGRESS', () => {
      const chunk = {
        commitRow: false,
        valueSize: 0,
      };
      chunkTransformer.state = RowStateEnum.CELL_IN_PROGRESS;
      chunkTransformer.moveToNextState(chunk);
      assert(!commitSpy.called, 'did not call commit');
      assert.strictEqual(rows.length, 0, 'unexpected call to push');
      assert.strictEqual(
        chunkTransformer.state,
        RowStateEnum.ROW_IN_PROGRESS,
        'wrong state',
      );
    });
  });
  describe('destroy', () => {
    it('should emit error when destroy is called with error', done => {
      const error = new Error('destroy error');
      chunkTransformer.on('error', (err: Error) => {
        assert.strictEqual(err, error, 'did not emit error');
        done();
      });
      chunkTransformer.destroy(error);
    });
    it('should not emit if transform is already destroyed', done => {
      chunkTransformer.on('close', () => {
        done();
      });
      chunkTransformer.destroy();
      chunkTransformer.destroy();
    });
  });
});
