/*!
 * Copyright 2016 Google Inc. All Rights Reserved.
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
// eslint-disable-next-line @typescript-eslint/no-var-requires
// eslint-disable-next-line @typescript-eslint/no-var-requires
const concat = require('concat-stream');
import * as proxyquire from 'proxyquire';
import * as sinon from 'sinon';
import {Transform, finished} from 'stream';
import * as through from 'through2';

import {codec} from '../src/codec';
import {PreciseDate} from '@google-cloud/precise-date';
import * as prs from '../src/partial-result-stream';
import {grpc} from 'google-gax';
import {Row} from '../src/partial-result-stream';

function toRawValue(value: any): any {
  if (value === null || value === undefined) {
    return null;
  }
  if (value instanceof Buffer) {
    return value.toString('base64');
  }
  if (value instanceof codec.SpannerDate) {
    return value.toJSON();
  }
  if (value instanceof PreciseDate) {
    return value.toISOString();
  }
  if (value instanceof codec.Struct) {
    return Array.from(value).map((field: any) => toRawValue(field.value));
  }
  if (value instanceof codec.Int) {
    return value.value;
  }
  if (value instanceof codec.Float) {
    const num = value.valueOf();
    if (Number.isNaN(num) || num === Infinity || num === -Infinity) {
      return String(num);
    }
    return num;
  }
  if (value instanceof codec.Numeric) {
    return value.value;
  }
  if (value instanceof codec.PGNumeric) {
    return value.value;
  }
  if (value instanceof codec.PGOid) {
    return value.value;
  }
  if (Array.isArray(value)) {
    return value.map(toRawValue);
  }
  return value;
}

describe('PartialResultStream', () => {
  const sandbox = sinon.createSandbox();

  // tslint:disable-next-line variable-name
  let PartialResultStream: typeof prs.PartialResultStream;
  let partialResultStream;

  const NAME = 'f1';
  const VALUE = 'abc';
  const STATS = {rowCountExact: 1};

  const EXPECTED_ROW = [{name: NAME, value: VALUE}];

  const RESULT = {
    metadata: {
      rowType: {
        fields: [
          {
            name: NAME,
            type: {code: 'STRING'},
          },
        ],
      },
    },
    stats: STATS,
    values: [convertToIValue(VALUE)],
  };

  before(() => {
    const prsExports = proxyquire('../src/partial-result-stream.js', {
      stream: {Transform},
      './codec': {codec},
    });

    PartialResultStream = prsExports.PartialResultStream;
    partialResultStream = prsExports.partialResultStream;
  });

  afterEach(() => sandbox.restore());

  describe('acceptance tests', () => {
    const TESTS =
      require('../../test/data/streaming-read-acceptance-test.json').tests;

    TESTS.forEach(test => {
      it(`should pass acceptance test: ${test.name}`, done => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const values: any[] = [];
        const stream = new PartialResultStream({});

        stream
          .on('error', done)
          .on('data', row => {
            values.push(row.map(({value}) => toRawValue(value)));
          })
          .on('end', () => {
            assert.deepStrictEqual(values, test.result.value);
            done();
          });

        test.chunks.forEach(chunk => {
          const parsed = JSON.parse(chunk);
          // for whatever reason the acceptance test values come as raw values
          // where as grpc gives them to us as google.protobuf.Value objects
          parsed.values = parsed.values.map(convertToIValue);
          stream.write(parsed);
        });

        stream.end();
      });
    });
  });

  // use this block to test anything the acceptance tests don't cover
  describe('PartialResultStream', () => {
    let stream: prs.PartialResultStream;

    beforeEach(() => {
      stream = new PartialResultStream({});
    });

    afterEach(() => stream.destroy());

    it('should emit the response', done => {
      const stream = new PartialResultStream({});

      stream.on('error', done).on('response', response => {
        assert.strictEqual(response, RESULT);
        done();
      });

      stream.write(RESULT);
    });

    it('should emit the result stats', done => {
      stream.on('error', done).on('stats', stats => {
        assert.strictEqual(stats, STATS);
        done();
      });

      stream.write(RESULT);
    });

    it('should "skip" responses with empty values', done => {
      const fakeResponse = Object.assign({}, RESULT, {values: []});
      const shouldNotBeCalled = () => {
        done(new Error('Should not be called.'));
      };

      stream
        .on('error', done)
        .on('data', shouldNotBeCalled)
        .on('response', response => {
          assert.strictEqual(response, fakeResponse);
          done();
        });

      stream.write(fakeResponse);
    });

    it('should emit rows', done => {
      stream.on('error', done).on('data', row => {
        // Node 18's assert.deepStrictEqual strictly requires prototype equality,
        // which fails when comparing RowImpl (an Array subclass) with a plain Array literal.
        // Node 20+ relaxed this for Array subclasses with constructor = Array.
        if (parseInt(process.versions.node.split('.')[0], 10) < 20) {
          assert.deepStrictEqual([...row], EXPECTED_ROW);
        } else {
          assert.deepStrictEqual(row, EXPECTED_ROW);
        }
        done();
      });

      stream.write(RESULT);
    });

    it('should create rows with shared prototype and non-enumerable toJSON', done => {
      const rows: prs.Row[] = [];
      stream.on('error', done).on('data', row => {
        rows.push(row);
        if (rows.length === 2) {
          try {
            const [row1, row2] = rows;
            assert.strictEqual(Array.isArray(row1), true);
            assert.strictEqual(row1 instanceof Array, true);
            assert.strictEqual(row1.constructor, Array);
            assert.strictEqual(Array.isArray(row2), true);
            assert.strictEqual(row2 instanceof Array, true);
            assert.strictEqual(row2.constructor, Array);

            // toJSON must be non-enumerable
            assert.strictEqual(Object.keys(row1).includes('toJSON'), false);
            assert.strictEqual(
              Object.prototype.propertyIsEnumerable.call(row1, 'toJSON'),
              false,
            );

            // toJSON must be shared on the prototype, not created as a per-row closure
            assert.strictEqual(row1.toJSON, row2.toJSON);

            // toJSON should correctly serialize the row
            const json1 = row1.toJSON();
            const expectedJson = codec.convertFieldsToJson(row1);
            assert.deepStrictEqual(json1, expectedJson);
            done();
          } catch (error) {
            done(error);
          }
        }
      });

      stream.write(RESULT);
      stream.write({values: [convertToIValue(VALUE)]});
    });

    it('should emit rows as JSON', done => {
      const jsonOptions = {};
      const stream = new PartialResultStream({json: true, jsonOptions});

      const fakeJson = {};
      const stub = sandbox.stub(codec, 'convertFieldsToJson').returns(fakeJson);

      stream.on('error', done).on('data', json => {
        assert.deepStrictEqual(json, fakeJson);

        const [row, options] = stub.lastCall.args;
        // Node 18's assert.deepStrictEqual strictly requires prototype equality,
        // which fails when comparing RowImpl (an Array subclass) with a plain Array literal.
        // Node 20+ relaxed this for Array subclasses with constructor = Array.
        if (parseInt(process.versions.node.split('.')[0], 10) < 20) {
          assert.deepStrictEqual([...row], EXPECTED_ROW);
        } else {
          assert.deepStrictEqual(row, EXPECTED_ROW);
        }
        assert.strictEqual(options, jsonOptions);
        done();
      });

      stream.write(RESULT);
    });

    describe('JSON mode with options', () => {
      const complexResult = {
        metadata: {
          rowType: {
            fields: [
              {
                name: 'id',
                type: {code: 'INT64'},
              },
              {
                name: 'info',
                type: {
                  code: 'STRUCT',
                  structType: {
                    fields: [
                      {
                        name: 'age',
                        type: {code: 'INT64'},
                      },
                      {
                        name: 'name',
                        type: {code: 'STRING'},
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
        values: [convertToIValue('123'), convertToIValue(['30', 'Alice'])],
      };

      it('should return native values when wrapNumbers/wrapStructs are false', done => {
        const stream = new PartialResultStream({
          json: true,
          jsonOptions: {wrapNumbers: false, wrapStructs: false},
        });

        stream.on('error', done).on('data', json => {
          assert.deepStrictEqual(json, {
            id: 123,
            info: {
              age: 30,
              name: 'Alice',
            },
          });
          done();
        });

        stream.write(complexResult);
        stream.end();
      });

      it('should wrap numbers and structs when wrapNumbers/wrapStructs are true', done => {
        const stream = new PartialResultStream({
          json: true,
          jsonOptions: {wrapNumbers: true, wrapStructs: true},
        });

        stream.on('error', done).on('data', json => {
          assert.deepStrictEqual(json, {
            id: new codec.Int('123'),
            info: new codec.Struct(
              {name: 'age', value: new codec.Int('30')},
              {name: 'name', value: 'Alice'},
            ),
          });
          done();
        });

        stream.write(complexResult);
        stream.end();
      });

      it('should safely handle prototype properties like "toString" in columnsMetadata and not pollute resolution', done => {
        const type = {
          code: 'PROTO',
          protoTypeFqn: 'examples.spanner.music.SingerInfo',
        };

        const mockMetadata = Object.create({
          toString: 'mocked_metadata_value',
        });

        // The column name matches the prototype property name
        const resultWithProto = {
          metadata: {
            rowType: {
              fields: [
                {
                  name: 'toString',
                  type: type,
                },
              ],
            },
          },
          values: [convertToIValue('bytes_base64')],
        };

        const stream = new PartialResultStream({
          columnsMetadata: mockMetadata,
        });

        const getDecoderSpy = sandbox.spy(codec, 'getDecoder');

        stream.on('error', done).on('data', () => {
          const [, columnMetadataArg] = getDecoderSpy.lastCall.args;
          // columnMetadata should be undefined because "toString" was on prototype, not own property
          assert.strictEqual(columnMetadataArg, undefined);
          done();
        });

        stream.write(resultWithProto);
        stream.end();
      });

      it('should wrap decoding errors with column-specific diagnostic context', done => {
        const stream = new PartialResultStream({
          json: true,
          jsonOptions: {wrapNumbers: false},
        });

        const unsafeResult = {
          metadata: {
            rowType: {
              fields: [
                {
                  name: 'large_id',
                  type: {code: 'INT64'},
                },
              ],
            },
          },
          values: [convertToIValue('9223372036854775807')],
        };

        stream
          .on('error', err => {
            assert(
              err.message.includes(
                'Serializing column "large_id" encountered an error:',
              ),
            );
            assert(
              err.message.includes(
                'Integer 9223372036854775807 is out of bounds.',
              ),
            );
            assert(
              err.message.includes(
                'Call row.toJSON({ wrapNumbers: true }) to receive a custom type.',
              ),
            );
            done();
          })
          .on('data', () => {
            done(new Error('Should have failed.'));
          });

        stream.write(unsafeResult);
        stream.end();
      });

      it('should name nameless fields using the actual loop index consistently in both JSON mode and standard toJSON', done => {
        const streamJson = new PartialResultStream({
          json: true,
          jsonOptions: {includeNameless: true},
        });
        const streamStandard = new PartialResultStream({
          json: false,
        });

        const mixedResult = {
          metadata: {
            rowType: {
              fields: [
                {name: 'first_col', type: {code: 'STRING'}},
                {name: '', type: {code: 'STRING'}}, // Nameless at index 1
                {name: 'second_col', type: {code: 'STRING'}},
                {name: '', type: {code: 'STRING'}}, // Nameless at index 3
              ],
            },
          },
          values: [
            convertToIValue('val1'),
            convertToIValue('val2'),
            convertToIValue('val3'),
            convertToIValue('val4'),
          ],
        };

        const jsonRows: any[] = [];
        const standardRows: any[] = [];

        let jsonDone = false;
        let standardDone = false;

        const checkCompletion = () => {
          if (jsonDone && standardDone) {
            // Assert JSON mode names nameless fields using the actual index
            assert.deepStrictEqual(jsonRows[0], {
              first_col: 'val1',
              _1: 'val2',
              second_col: 'val3',
              _3: 'val4',
            });

            // Assert Standard mode row.toJSON() names nameless fields using the actual index
            const serializedStandard = standardRows[0].toJSON({
              includeNameless: true,
            });
            assert.deepStrictEqual(serializedStandard, {
              first_col: 'val1',
              _1: 'val2',
              second_col: 'val3',
              _3: 'val4',
            });

            done();
          }
        };

        streamJson
          .on('error', done)
          .on('data', row => jsonRows.push(row))
          .on('end', () => {
            jsonDone = true;
            checkCompletion();
          });

        streamStandard
          .on('error', done)
          .on('data', row => standardRows.push(row))
          .on('end', () => {
            standardDone = true;
            checkCompletion();
          });

        streamJson.write(mixedResult);
        streamJson.end();

        streamStandard.write(mixedResult);
        streamStandard.end();
      });
    });

    describe('Multiple metadata chunks', () => {
      it('should respect the first metadata chunk and ignore subsequent ones', done => {
        const stream = new PartialResultStream({json: true});
        const rows: any[] = [];

        stream
          .on('error', done)
          .on('data', row => {
            rows.push(row);
          })
          .on('end', () => {
            assert.deepStrictEqual(rows, [
              {first_col: 'hello'},
              {first_col: '123'},
            ]);
            done();
          });

        stream.write({
          metadata: {
            rowType: {
              fields: [
                {
                  name: 'first_col',
                  type: {code: 'STRING'},
                },
              ],
            },
          },
          values: [convertToIValue('hello')],
        });

        stream.write({
          metadata: {
            rowType: {
              fields: [
                {
                  name: 'second_col',
                  type: {code: 'INT64'},
                },
              ],
            },
          },
          values: [convertToIValue('123')],
        });

        stream.end();
      });
    });

    describe('destroy', () => {
      it('should ponyfill the destroy method', done => {
        const fakeError = new Error('err');

        const errorStub = sandbox.stub().withArgs(fakeError);
        const closeStub = sandbox.stub();

        stream.on('error', errorStub).on('close', closeStub);
        stream.destroy(fakeError);

        setImmediate(() => {
          assert.strictEqual(errorStub.callCount, 1);
          assert.strictEqual(closeStub.callCount, 1);
          done();
        });
      });
    });

    it('should not lose data if paused when last chunk is received', done => {
      const stream = new PartialResultStream({});
      // Pause the stream initially to force buffering
      stream.pause();

      const rows: any[] = [];
      stream.on('data', row => rows.push(row));
      stream.on('end', () => {
        try {
          // We expect 2 rows.
          assert.strictEqual(rows.length, 2);
          done();
        } catch (e) {
          done(e);
        }
      });

      const fields = [{name: NAME, type: {code: 'STRING'}}];

      // Write a normal chunk
      stream.write({
        metadata: {rowType: {fields}},
        values: [convertToIValue('row1')],
        resumeToken: 't1',
      });

      // Write the last chunk immediately
      stream.write({
        values: [convertToIValue('row2')],
        resumeToken: 't2',
        last: true,
      });

      // Resume after a tick.
      // If emit('end') was called synchronously during write, the 'end' event might fire
      // and close the stream before we consume the buffered 'row1' and 'row2'.
      // With push(null), it waits for buffer to drain.
      process.nextTick(() => {
        stream.resume();
      });
    });

    it('should emit paused event when downstream backpressure is triggered during single-chunk decode', done => {
      const stream = new PartialResultStream({});
      let pausedEmitted = false;
      stream.on('paused', () => {
        pausedEmitted = true;
      });

      sandbox.stub(stream, 'push').callsFake(data => {
        if (data === undefined || data === null) {
          return true;
        }
        return false;
      });

      const fields = [{name: NAME, type: {code: 'STRING'}}];
      stream.write({
        metadata: {rowType: {fields}},
        values: [convertToIValue('row1')],
        last: true,
      });

      assert.strictEqual(pausedEmitted, true);
      done();
    });

    it('should emit paused event exactly once when downstream backpressure is triggered during multi-chunk streaming', done => {
      const stream = new PartialResultStream({});
      let pausedCount = 0;
      stream.on('paused', () => {
        pausedCount++;
      });

      sandbox.stub(stream, 'push').callsFake(data => {
        if (data === undefined || data === null) {
          return true;
        }
        return false;
      });

      const fields = [
        {name: 'col1', type: {code: 'STRING'}},
        {name: 'col2', type: {code: 'STRING'}},
      ];
      // First chunk establishes stream and metadata, not last
      stream.write({
        metadata: {rowType: {fields}},
        values: [convertToIValue('val1'), convertToIValue('val2')],
      });
      // Second chunk emits multiple rows while push() returns false
      stream.write({
        values: [
          convertToIValue('val3'),
          convertToIValue('val4'),
          convertToIValue('val5'),
          convertToIValue('val6'),
        ],
        last: true,
      });

      assert.strictEqual(pausedCount, 1);
      done();
    });

    it('should handle multi-chunk streaming where an intermediate chunk has a single value that remains chunked', done => {
      const stream = new PartialResultStream({});
      const rows: prs.Row[] = [];
      stream
        .on('data', row => rows.push(row))
        .on('end', () => {
          try {
            assert.strictEqual(rows.length, 2);
            assert.deepStrictEqual(rows[0].toJSON(), {
              id: 'id1',
              text: 'hello-world-again',
            });
            assert.deepStrictEqual(rows[1].toJSON(), {
              id: 'id2',
              text: 'text2',
            });
            done();
          } catch (err) {
            done(err);
          }
        })
        .on('error', done);

      const fields = [
        {name: 'id', type: {code: 'STRING'}},
        {name: 'text', type: {code: 'STRING'}},
      ];
      // Chunk 1: starts row 1, ends with partial text 'hello-'
      stream.write({
        metadata: {rowType: {fields}},
        values: [convertToIValue('id1'), convertToIValue('hello-')],
        chunkedValue: true,
      });
      // Chunk 2: only has 1 value, and is still chunked ('world-')
      stream.write({
        values: [convertToIValue('world-')],
        chunkedValue: true,
      });
      // Chunk 3: completes row 1 and provides complete row 2
      stream.write({
        values: [
          convertToIValue('again'),
          convertToIValue('id2'),
          convertToIValue('text2'),
        ],
        last: true,
      });
      stream.end();
    });

    it('should reuse pre-allocated row buffer across multiple rows and chunks without cross-row contamination', done => {
      const stream = new PartialResultStream({});
      const rows: prs.Row[] = [];
      stream
        .on('data', row => rows.push(row))
        .on('end', () => {
          try {
            assert.strictEqual(rows.length, 3);
            assert.deepStrictEqual(
              rows.map(row => row.toJSON()),
              [
                {a: '1', b: '2', c: '3'},
                {a: '4', b: '5', c: '6'},
                {a: '7', b: '8', c: '9'},
              ],
            );
            done();
          } catch (err) {
            done(err);
          }
        })
        .on('error', done);

      const fields = [
        {name: 'a', type: {code: 'STRING'}},
        {name: 'b', type: {code: 'STRING'}},
        {name: 'c', type: {code: 'STRING'}},
      ];
      // Chunk 1: completes row 1, starts row 2
      stream.write({
        metadata: {rowType: {fields}},
        values: [
          convertToIValue('1'),
          convertToIValue('2'),
          convertToIValue('3'),
          convertToIValue('4'),
        ],
      });
      // Chunk 2: completes row 2, completes row 3
      stream.write({
        values: [
          convertToIValue('5'),
          convertToIValue('6'),
          convertToIValue('7'),
          convertToIValue('8'),
          convertToIValue('9'),
        ],
        last: true,
      });
      stream.end();
    });

    it('should route first chunk with last=true to _addSingleChunk', done => {
      const stream = new PartialResultStream({});
      const addSingleChunkSpy = sandbox.spy(stream as any, '_addSingleChunk');
      const rows: any[] = [];
      stream
        .on('data', row => rows.push(row))
        .on('end', () => {
          try {
            assert.strictEqual(addSingleChunkSpy.calledOnce, true);
            assert.strictEqual(rows.length, 1);
            done();
          } catch (err) {
            done(err);
          }
        })
        .on('error', done);

      const fields = [{name: NAME, type: {code: 'STRING'}}];
      stream.write({
        metadata: {rowType: {fields}},
        values: [convertToIValue('row1')],
        last: true,
      });
      stream.end();
    });

    it('should not route subsequent chunks to _addSingleChunk even if last=true', done => {
      const stream = new PartialResultStream({});
      const addSingleChunkSpy = sandbox.spy(stream as any, '_addSingleChunk');
      const rows: any[] = [];
      stream
        .on('data', row => rows.push(row))
        .on('end', () => {
          try {
            assert.strictEqual(addSingleChunkSpy.called, false);
            assert.strictEqual(rows.length, 2);
            done();
          } catch (err) {
            done(err);
          }
        })
        .on('error', done);

      const fields = [{name: NAME, type: {code: 'STRING'}}];
      // First chunk: not last
      stream.write({
        metadata: {rowType: {fields}},
        values: [convertToIValue('row1')],
        last: false,
      });
      // Second chunk: last
      stream.write({
        values: [convertToIValue('row2')],
        last: true,
      });
      stream.end();
    });

    describe('event-driven backpressure', () => {
      it('should hold completion callback and emit paused when downstream push returns false', done => {
        const stream = new PartialResultStream({});
        let pausedEmitted = false;
        stream.on('paused', () => {
          pausedEmitted = true;
        });

        // Stub push to simulate downstream backpressure on rows.
        const pushStub = sandbox.stub(stream, 'push');
        // Accept first row, reject second row to trigger backpressure.
        pushStub.onFirstCall().returns(true);
        pushStub.onSecondCall().returns(false);

        const fields = [{name: NAME, type: {code: 'STRING'}}];
        let writeCallbackCalled = false;

        stream.write(
          {
            metadata: {rowType: {fields}},
            values: [convertToIValue('row1'), convertToIValue('row2')],
          },
          () => {
            writeCallbackCalled = true;
          },
        );

        // The write callback should NOT have been called because the stream is paused.
        assert.strictEqual(writeCallbackCalled, false);
        assert.strictEqual(pausedEmitted, true);
        assert.strictEqual(
          typeof (stream as unknown as {_resumeCallback?: Function})
            ._resumeCallback,
          'function',
        );
        done();
      });

      it('should resume and invoke held callback when _read is called', done => {
        const stream = new PartialResultStream({});
        let resumedEmitted = false;
        stream.on('resumed', () => {
          resumedEmitted = true;
        });

        const pushStub = sandbox.stub(stream, 'push');
        pushStub.returns(false);

        const fields = [{name: NAME, type: {code: 'STRING'}}];
        let writeCallbackCalled = false;

        stream.write(
          {
            metadata: {rowType: {fields}},
            values: [convertToIValue('row1')],
          },
          () => {
            writeCallbackCalled = true;
          },
        );

        assert.strictEqual(writeCallbackCalled, false);

        // Simulate Node readable machinery calling _read when readable buffer drains.
        (stream as unknown as {_read: (size: number) => void})._read(1);

        assert.strictEqual(writeCallbackCalled, true);
        assert.strictEqual(resumedEmitted, true);
        assert.strictEqual(
          (stream as unknown as {_resumeCallback?: Function})._resumeCallback,
          undefined,
        );
        done();
      });

      it('should clear _resumeCallback when stream is destroyed while paused', done => {
        const stream = new PartialResultStream({});
        const pushStub = sandbox.stub(stream, 'push');
        pushStub.returns(false);

        const fields = [{name: NAME, type: {code: 'STRING'}}];
        stream.write({
          metadata: {rowType: {fields}},
          values: [convertToIValue('row1')],
        });

        assert.strictEqual(
          typeof (stream as unknown as {_resumeCallback?: Function})
            ._resumeCallback,
          'function',
        );

        stream.destroy();

        assert.strictEqual(
          (stream as unknown as {_resumeCallback?: Function})._resumeCallback,
          undefined,
        );
        done();
      });

      it('should stream all rows to a slow writable stream with backpressure', done => {
        const stream = new PartialResultStream({});
        const rows: Row[] = [];
        let pausedCount = 0;
        let resumedCount = 0;

        stream.on('paused', () => {
          pausedCount++;
        });
        stream.on('resumed', () => {
          resumedCount++;
        });

        const slowSink = new Transform({
          objectMode: true,
          highWaterMark: 1,
          transform(chunk, encoding, callback) {
            rows.push(chunk);
            setImmediate(callback);
          },
        });

        stream.pipe(slowSink);

        const totalRows = 25;
        slowSink.on('finish', () => {
          try {
            assert.strictEqual(rows.length, totalRows);
            assert.ok(pausedCount > 0, 'should have paused at least once');
            assert.ok(resumedCount > 0, 'should have resumed at least once');
            done();
          } catch (err) {
            done(err);
          }
        });

        const fields = [{name: NAME, type: {code: 'STRING'}}];
        const values1: Array<ReturnType<typeof convertToIValue>> = [];
        for (let i = 0; i < 20; i++) {
          values1.push(convertToIValue(`row${i}`));
        }
        const values2: Array<ReturnType<typeof convertToIValue>> = [];
        for (let i = 20; i < totalRows; i++) {
          values2.push(convertToIValue(`row${i}`));
        }

        stream.write({
          metadata: {rowType: {fields}},
          values: values1,
          last: false,
        });
        stream.write({
          values: values2,
          last: true,
        });
        stream.end();
      });

      it('should emit paused only once per transition even with multiple unaccepted rows in a chunk', done => {
        const stream = new PartialResultStream({});
        let pausedCount = 0;
        stream.on('paused', () => {
          pausedCount++;
        });

        const pushStub = sandbox.stub(stream, 'push');
        // Accept first row, reject all subsequent rows
        pushStub.onFirstCall().returns(true);
        pushStub.returns(false);

        const fields = [{name: NAME, type: {code: 'STRING'}}];
        const values = [
          convertToIValue('row1'),
          convertToIValue('row2'),
          convertToIValue('row3'),
          convertToIValue('row4'),
          convertToIValue('row5'),
        ];

        stream.write(
          {
            metadata: {rowType: {fields}},
            values,
          },
          () => {},
        );

        // Even though rows 2..5 were rejected by push(), paused should only be emitted ONCE
        assert.strictEqual(pausedCount, 1);
        done();
      });

      it('should handle backpressure cleanly during single-chunk optimization', done => {
        const stream = new PartialResultStream({});
        let pausedCount = 0;
        stream.on('paused', () => pausedCount++);

        const rows: Row[] = [];
        const slowSink = new Transform({
          objectMode: true,
          highWaterMark: 1,
          transform(chunk, encoding, callback) {
            rows.push(chunk);
            setImmediate(callback);
          },
        });

        stream.pipe(slowSink);

        const totalRows = 25;
        slowSink.on('finish', () => {
          try {
            assert.strictEqual(rows.length, totalRows);
            assert.ok(pausedCount > 0, 'should emit paused on backpressure');
            done();
          } catch (err) {
            done(err);
          }
        });

        const fields = [{name: NAME, type: {code: 'STRING'}}];
        const values: Array<ReturnType<typeof convertToIValue>> = [];
        for (let i = 0; i < totalRows; i++) {
          values.push(convertToIValue(`single_chunk_row_${i}`));
        }

        // First chunk with last=true triggers _addSingleChunk
        stream.write({
          metadata: {rowType: {fields}},
          values,
          last: true,
        });
        stream.end();
      });

      it('should handle multiple sequential pause and resume cycles across chunks', done => {
        const stream = new PartialResultStream({});
        let pausedCount = 0;
        let resumedCount = 0;
        stream.on('paused', () => pausedCount++);
        stream.on('resumed', () => resumedCount++);

        const rows: Row[] = [];
        const slowSink = new Transform({
          objectMode: true,
          highWaterMark: 1,
          transform(chunk, encoding, callback) {
            rows.push(chunk);
            setImmediate(callback);
          },
        });

        stream.pipe(slowSink);

        const totalRows = 45;
        slowSink.on('finish', () => {
          try {
            assert.strictEqual(rows.length, totalRows);
            for (let i = 0; i < totalRows; i++) {
              assert.strictEqual(rows[i][0].value, `val_${i}`);
            }
            assert.ok(
              pausedCount >= 2,
              `expected at least 2 pauses, got ${pausedCount}`,
            );
            assert.ok(
              resumedCount >= 2,
              `expected at least 2 resumes, got ${resumedCount}`,
            );
            done();
          } catch (err) {
            done(err);
          }
        });

        const fields = [{name: NAME, type: {code: 'STRING'}}];
        const chunkSizes = [20, 20, 5];
        let offset = 0;
        for (let chunkIndex = 0; chunkIndex < chunkSizes.length; chunkIndex++) {
          const count = chunkSizes[chunkIndex];
          const values: Array<ReturnType<typeof convertToIValue>> = [];
          for (let i = 0; i < count; i++) {
            values.push(convertToIValue(`val_${offset + i}`));
          }
          offset += count;
          stream.write({
            ...(chunkIndex === 0 ? {metadata: {rowType: {fields}}} : {}),
            values,
            last: chunkIndex === chunkSizes.length - 1,
          });
        }
        stream.end();
      });

      it('should preserve row assembly when backpressure occurs across chunked values', done => {
        const stream = new PartialResultStream({});
        const rows: Row[] = [];

        const slowSink = new Transform({
          objectMode: true,
          highWaterMark: 1,
          transform(chunk, encoding, callback) {
            rows.push(chunk);
            setImmediate(callback);
          },
        });

        stream.pipe(slowSink);

        slowSink.on('finish', () => {
          try {
            assert.strictEqual(rows.length, 2);
            assert.strictEqual(rows[0][0].value, 'first_row');
            assert.strictEqual(rows[1][0].value, 'chunked_part1_part2');
            done();
          } catch (err) {
            done(err);
          }
        });

        const fields = [{name: NAME, type: {code: 'STRING'}}];

        // Chunk 1: first complete row + start of chunked row
        stream.write({
          metadata: {rowType: {fields}},
          values: [
            convertToIValue('first_row'),
            convertToIValue('chunked_part1_'),
          ],
          chunkedValue: true,
          last: false,
        });

        // Chunk 2: continuation of chunked row
        stream.write({
          values: [convertToIValue('part2')],
          chunkedValue: false,
          last: true,
        });
        stream.end();
      });

      it('should propagate error and clean up held callback when destroyed with error while paused', done => {
        const stream = new PartialResultStream({});
        const pushStub = sandbox.stub(stream, 'push');
        pushStub.returns(false);

        const fields = [{name: NAME, type: {code: 'STRING'}}];
        stream.write({
          metadata: {rowType: {fields}},
          values: [convertToIValue('row1')],
        });

        assert.strictEqual(
          typeof (stream as unknown as {_resumeCallback?: Function})
            ._resumeCallback,
          'function',
        );

        const testError = new Error('simulated failure');
        stream.on('error', err => {
          try {
            assert.strictEqual(err, testError);
            assert.strictEqual(
              (stream as unknown as {_resumeCallback?: Function})
                ._resumeCallback,
              undefined,
            );
            done();
          } catch (assertionErr) {
            done(assertionErr);
          }
        });

        stream.destroy(testError);
      });

      it('should not emit paused or resumed when consumer is fast', done => {
        const stream = new PartialResultStream({});
        let pausedEmitted = false;
        let resumedEmitted = false;

        stream.on('paused', () => {
          pausedEmitted = true;
        });
        stream.on('resumed', () => {
          resumedEmitted = true;
        });

        const rows: Row[] = [];
        stream.on('data', row => rows.push(row));
        stream.on('end', () => {
          try {
            assert.strictEqual(rows.length, 10);
            assert.strictEqual(pausedEmitted, false);
            assert.strictEqual(resumedEmitted, false);
            done();
          } catch (err) {
            done(err);
          }
        });

        const fields = [{name: NAME, type: {code: 'STRING'}}];
        const values: Array<ReturnType<typeof convertToIValue>> = [];
        for (let i = 0; i < 10; i++) {
          values.push(convertToIValue(`row_${i}`));
        }

        stream.write({
          metadata: {rowType: {fields}},
          values,
          last: true,
        });
        stream.end();
      });
    });
  });

  describe('partialResultStream', () => {
    let stream: prs.PartialResultStream;
    let fakeRequestStream;

    const RESULT_WITH_TOKEN = Object.assign({}, RESULT, {
      resumeToken: '...',
    });

    beforeEach(() => {
      fakeRequestStream = through.obj();
      stream = partialResultStream(() => fakeRequestStream);
    });

    it('should only push rows when there is a token', done => {
      const expectedRow = sinon.match(EXPECTED_ROW);
      const stub = sandbox
        .stub()
        .withArgs(expectedRow)
        .callsFake(() => {
          if (stub.callCount === 3) {
            done();
          }
        });

      function assertDoesNotEmit() {
        done(new Error('Should not be called.'));
      }

      stream.on('data', assertDoesNotEmit);
      fakeRequestStream.push(RESULT);
      fakeRequestStream.push(RESULT);
      stream.removeListener('data', assertDoesNotEmit);

      stream.on('data', stub);
      fakeRequestStream.push(RESULT_WITH_TOKEN);
      fakeRequestStream.push(null);
    });

    it('should not queue more than 10 results', done => {
      for (let i = 0; i < 11; i += 1) {
        fakeRequestStream.push(RESULT);
      }

      fakeRequestStream.push(null);

      stream.on('error', done).pipe(
        concat(rows => {
          assert.strictEqual(rows.length, 11);
          done();
        }),
      );
    });

    it('should retry if the initial call returned a retryable error', done => {
      // This test will emit two rows total:
      // - UNAVAILABLE error (should retry)
      // - Two rows
      // eslint-disable-next-line @typescript-eslint/no-explicit-any

      const firstFakeRequestStream = through.obj();
      const secondFakeRequestStream = through.obj();

      const requestFnStub = sandbox.stub();

      requestFnStub.onCall(0).callsFake(() => {
        setTimeout(() => {
          // This causes a new request stream to be created.
          firstFakeRequestStream.emit('error', {
            code: grpc.status.UNAVAILABLE,
            message: 'Error.',
          } as grpc.ServiceError);
        }, 50);

        return firstFakeRequestStream;
      });

      requestFnStub.onCall(1).callsFake(resumeToken => {
        assert.ok(
          !resumeToken,
          'Retry should be called with empty resume token',
        );

        setTimeout(() => {
          secondFakeRequestStream.push(RESULT_WITH_TOKEN);
          secondFakeRequestStream.push(RESULT_WITH_TOKEN);

          secondFakeRequestStream.end();
        }, 500);

        return secondFakeRequestStream;
      });

      partialResultStream(requestFnStub)
        .on('error', done)
        .pipe(
          concat(rows => {
            assert.strictEqual(rows.length, 2);
            done();
          }),
        );
    });

    it('should get Deadline exceeded error if timeout has reached', done => {
      const firstFakeRequestStream = through.obj();

      const requestFnStub = sandbox.stub();

      requestFnStub.onCall(0).callsFake(() => {
        setTimeout(() => {
          // This causes a new request stream to be created.
          firstFakeRequestStream.emit('error', {
            code: grpc.status.UNAVAILABLE,
            message: 'Error.',
          } as grpc.ServiceError);
        }, 50);

        return firstFakeRequestStream;
      });

      partialResultStream(requestFnStub, {gaxOptions: {timeout: 0}})
        .on('data', () => {})
        .on('error', err => {
          assert.strictEqual(err.code, grpc.status.DEADLINE_EXCEEDED);
          assert.strictEqual(requestFnStub.callCount, 1);
          done();
        });
    });

    it('should resume if there was a retryable error', done => {
      // This test will emit four rows total:
      // - Two rows
      // - Error event (should retry)
      // - Two rows
      // - Confirm all rows were received.
      const firstFakeRequestStream = through.obj();
      const secondFakeRequestStream = through.obj();

      const requestFnStub = sandbox.stub();

      requestFnStub.onCall(0).callsFake(() => {
        setTimeout(() => {
          firstFakeRequestStream.push(RESULT_WITH_TOKEN);
          firstFakeRequestStream.push(RESULT_WITH_TOKEN);

          setTimeout(() => {
            // This causes a new request stream to be created.
            firstFakeRequestStream.emit('error', {
              code: grpc.status.UNAVAILABLE,
              message: 'Error.',
            } as grpc.ServiceError);
          }, 50);
        }, 50);

        return firstFakeRequestStream;
      });

      requestFnStub.onCall(1).callsFake(resumeToken => {
        assert.strictEqual(resumeToken, RESULT_WITH_TOKEN.resumeToken);

        setTimeout(() => {
          secondFakeRequestStream.push(RESULT_WITH_TOKEN);
          secondFakeRequestStream.push(RESULT_WITH_TOKEN);

          secondFakeRequestStream.end();
        }, 500);

        return secondFakeRequestStream;
      });

      partialResultStream(requestFnStub)
        .on('error', done)
        .pipe(
          concat(rows => {
            assert.strictEqual(rows.length, 4);
            done();
          }),
        );
    });

    it('should correctly resume and preserve incomplete row state when resumed stream first chunk contains metadata', done => {
      const firstStream = through.obj();
      const secondStream = through.obj();
      const requestFnStub = sandbox.stub();

      const metadata = {
        rowType: {
          fields: [
            {name: 'col1', type: {code: 'STRING'}},
            {name: 'col2', type: {code: 'STRING'}},
          ],
        },
      };

      requestFnStub.onCall(0).callsFake(() => {
        setImmediate(() => {
          firstStream.push({
            metadata,
            values: [convertToIValue('val1')],
            resumeToken: 'checkpoint-token',
          });

          setImmediate(() => {
            firstStream.emit('error', {
              code: grpc.status.UNAVAILABLE,
              message: 'Unavailable',
            } as grpc.ServiceError);
          });
        });

        return firstStream;
      });

      requestFnStub.onCall(1).callsFake(resumeToken => {
        assert.strictEqual(resumeToken, 'checkpoint-token');

        setImmediate(() => {
          secondStream.push({
            metadata,
            values: [convertToIValue('val2')],
            last: true,
          });
          secondStream.end();
        });

        return secondStream;
      });

      const rows: Row[] = [];
      partialResultStream(requestFnStub)
        .on('data', row => rows.push(row))
        .on('end', () => {
          try {
            assert.strictEqual(rows.length, 1);
            assert.deepStrictEqual(rows[0].toJSON(), {
              col1: 'val1',
              col2: 'val2',
            });
            done();
          } catch (err) {
            done(err);
          }
        })
        .on('error', done);
    });

    it('should emit non-retryable error', done => {
      // This test will emit two rows and then an error.
      const fakeRequestStream = through.obj();

      const requestFnStub = sandbox.stub();

      requestFnStub.onCall(0).callsFake(() => {
        setTimeout(() => {
          fakeRequestStream.push(RESULT_WITH_TOKEN);
          fakeRequestStream.push(RESULT_WITH_TOKEN);

          setTimeout(() => {
            fakeRequestStream.emit('error', {
              code: grpc.status.DATA_LOSS,
              message: 'Non-retryable error.',
            } as grpc.ServiceError);
          }, 50);
        }, 50);

        return fakeRequestStream;
      });

      const receivedRows: Row[] = [];
      partialResultStream(requestFnStub)
        .on('data', row => {
          receivedRows.push(row);
        })
        .on('error', err => {
          // We should receive two rows before we get an error.
          assert.strictEqual(receivedRows.length, 2);
          assert.strictEqual(err.code, grpc.status.DATA_LOSS);
          assert.strictEqual(requestFnStub.callCount, 1);
          done();
        });
    });

    it('should emit rows and error when there is no token', done => {
      const expectedRow = sinon.match(EXPECTED_ROW);
      const error = new Error('Error.');

      const dataStub = sandbox.stub().withArgs(expectedRow);

      stream.on('data', dataStub).on('error', err => {
        assert.strictEqual(err, error);
        assert.strictEqual(dataStub.callCount, 3);
        done();
      });

      // No rows with tokens were emitted, so this should destroy the stream.
      fakeRequestStream.push(RESULT);
      fakeRequestStream.push(RESULT);
      fakeRequestStream.push(RESULT);
      fakeRequestStream.destroy(error);
    });

    it('should successfully retry when the failed stream emits an error followed by end', done => {
      const firstStream = through.obj();
      const secondStream = through.obj();
      const requestFnStub = sandbox.stub();

      // First request fails with UNAVAILABLE and immediately ends
      requestFnStub.onCall(0).callsFake(() => {
        setImmediate(() => {
          firstStream.emit('error', {
            code: grpc.status.UNAVAILABLE,
            message: 'Unavailable',
          } as grpc.ServiceError);
          firstStream.end();
        });
        return firstStream;
      });

      // Retried request succeeds and delivers data
      requestFnStub.onCall(1).callsFake(() => {
        setImmediate(() => {
          secondStream.push(RESULT_WITH_TOKEN);
          secondStream.end();
        });
        return secondStream;
      });

      const receivedRows: Row[] = [];
      partialResultStream(requestFnStub)
        .on('data', row => receivedRows.push(row))
        .on('error', done)
        .on('end', () => {
          try {
            assert.strictEqual(
              requestFnStub.callCount,
              2,
              'Should have retried once',
            );
            assert.strictEqual(
              receivedRows.length,
              1,
              'Should receive data from retried stream',
            );
            done();
          } catch (e) {
            done(e);
          }
        });
    });

    it('should only spawn a single retry when multiple errors are emitted in rapid succession', done => {
      const firstStream = through.obj();
      const secondStream = through.obj();
      const requestFnStub = sandbox.stub();

      firstStream.on('error', () => {}); // Prevent unhandled exception in test runner

      // First request emits two error events synchronously
      requestFnStub.onCall(0).callsFake(() => {
        setImmediate(() => {
          const err = {
            code: grpc.status.UNAVAILABLE,
            message: 'Unavailable',
          } as grpc.ServiceError;
          firstStream.emit('error', err);
          firstStream.emit('error', err);
        });
        return firstStream;
      });

      // Second request succeeds
      requestFnStub.onCall(1).callsFake(() => {
        setImmediate(() => {
          secondStream.push(RESULT_WITH_TOKEN);
          secondStream.end();
        });
        return secondStream;
      });

      partialResultStream(requestFnStub)
        .on('error', done)
        .pipe(
          concat(rows => {
            try {
              assert.strictEqual(
                requestFnStub.callCount,
                2,
                'Should only trigger one retry request',
              );
              assert.strictEqual(rows.length, 1);
              done();
            } catch (e) {
              done(e);
            }
          }),
        );
    });

    it('should destroy the request stream and detach listeners on non-retryable errors', done => {
      const fakeStream = through.obj();
      const destroySpy = sandbox.spy(fakeStream, 'destroy');

      const requestFnStub = sandbox.stub().callsFake(() => {
        setImmediate(() => {
          fakeStream.emit('error', {
            code: grpc.status.INVALID_ARGUMENT,
            message: 'Invalid query argument.',
          } as grpc.ServiceError);
        });
        return fakeStream;
      });

      partialResultStream(requestFnStub)
        .on('data', () => {})
        .on('error', err => {
          try {
            assert.strictEqual(err.code, grpc.status.INVALID_ARGUMENT);
            assert.strictEqual(
              destroySpy.called,
              true,
              'Request stream should be destroyed on non-retryable error',
            );
            assert.strictEqual(
              fakeStream.listenerCount('end'),
              0,
              'endListener should be removed',
            );
            assert.strictEqual(
              fakeStream.listenerCount('error'),
              1,
              'Should have 1 dummy listener to swallow late errors',
            );
            done();
          } catch (e) {
            done(e);
          }
        });
    });

    it('should not attempt to write queued chunks in flushAndDestroy if userStream is already destroyed or not writable', done => {
      const fakeStream = through.obj();
      fakeStream.on('error', () => {}); // Prevent unhandled error on underlying emitter
      const requestFnStub = sandbox.stub().returns(fakeStream);

      const stream = partialResultStream(requestFnStub);
      stream.on('data', () => {});
      stream.on('error', () => {});

      // Trigger reading so makeRequest initializes lastRequestStream
      stream.resume();
      stream.pause();

      fakeStream.push(RESULT_WITH_TOKEN);

      // End userStream so writable becomes false
      stream.end();

      setImmediate(() => {
        // Emit non-retryable error to invoke flushAndDestroy
        fakeStream.emit('error', {
          code: grpc.status.PERMISSION_DENIED,
          message: 'Permission denied',
        } as grpc.ServiceError);

        setImmediate(() => {
          assert.strictEqual(stream.writable, false);
          done();
        });
      });
    });

    it('should destroy the underlying request stream when the user destroys the returned stream', done => {
      const fakeStream = through.obj();
      const destroySpy = sandbox.spy(fakeStream, 'destroy');

      const requestFnStub = sandbox.stub().returns(fakeStream);

      const stream = partialResultStream(requestFnStub);

      // Read first row and immediately destroy stream
      stream.on('data', () => {
        stream.destroy();
      });

      stream.on('close', () => {
        setImmediate(() => {
          try {
            assert.strictEqual(
              destroySpy.called,
              true,
              'Underlying request stream must be destroyed when user cancels the stream',
            );
            done();
          } catch (e) {
            done(e);
          }
        });
      });

      fakeStream.push(RESULT_WITH_TOKEN);
    });

    it('should not drop buffered checkpointed chunks when a retry occurs during flush', done => {
      const firstStream = through.obj();
      const secondStream = through.obj();
      const requestFnStub = sandbox.stub();

      const token1 = 'token1';
      // Chunks 1 to 3 have no token; Chunk 4 has token1
      const chunk1 = Object.assign({}, RESULT, {resumeToken: ''});
      const chunk2 = Object.assign({}, RESULT, {resumeToken: ''});
      const chunk3 = Object.assign({}, RESULT, {resumeToken: ''});
      const chunk4 = Object.assign({}, RESULT, {resumeToken: token1});
      // Chunk 5 is returned after retry
      const chunk5 = Object.assign({}, RESULT, {resumeToken: 'token2'});

      requestFnStub.onCall(0).callsFake(() => {
        setImmediate(() => {
          firstStream.push(chunk1);
          firstStream.push(chunk2);
          firstStream.push(chunk3);
          firstStream.push(chunk4); // Checkpoint hit: queue has 4 items
          // Simulate network blip immediately after sending chunk4
          firstStream.emit('error', {
            code: grpc.status.UNAVAILABLE,
            message: 'Unavailable',
          } as grpc.ServiceError);
        });
        return firstStream;
      });

      requestFnStub.onCall(1).callsFake(resumeToken => {
        try {
          assert.strictEqual(resumeToken, token1, 'Must resume from token1');
        } catch (e) {
          done(e);
        }
        setImmediate(() => {
          secondStream.push(chunk5);
          secondStream.end();
        });
        return secondStream;
      });

      const receivedRows: Row[] = [];
      partialResultStream(requestFnStub)
        .on('data', (row: any) => receivedRows.push(row))
        .on('error', done)
        .on('end', () => {
          try {
            // Must receive all 4 rows from the checkpointed batch + 1 from retry = 5 total
            assert.strictEqual(
              receivedRows.length,
              5,
              'All checkpointed rows must be delivered without being dropped by retry reset()',
            );
            done();
          } catch (e) {
            done(e);
          }
        });
    });

    it('should immediately flush rows and emit end when chunk.last is true without waiting for gRPC stream end', done => {
      let dataEmitted = false;

      stream
        .on('data', () => {
          dataEmitted = true;
        })
        .on('end', () => {
          try {
            assert.strictEqual(dataEmitted, true);
            // Underlying fakeRequestStream has NOT received null/end yet (simulating pending trailers)
            // and MUST NOT be destroyed!
            assert.strictEqual(fakeRequestStream.destroyed, false);
            // Now simulate trailers arriving asynchronously
            fakeRequestStream.push(null);
            done();
          } catch (error) {
            done(error);
          }
        })
        .on('error', done);

      // Push chunk with last: true but NO resumeToken and without ending fakeRequestStream
      fakeRequestStream.push(
        Object.assign({}, RESULT, {
          last: true,
        }),
      );
    });

    it('should not destroy request stream when user stream closes after chunk.last is true', done => {
      stream
        .on('data', () => {})
        .on('end', () => {
          stream.destroy();
        })
        .on('close', () => {
          setImmediate(() => {
            try {
              // The request stream must remain open to drain trailers asynchronously
              assert.strictEqual(
                fakeRequestStream.destroyed,
                false,
                'Request stream should not be destroyed when chunk.last is true',
              );
              fakeRequestStream.push(null);
              done();
            } catch (error) {
              done(error);
            }
          });
        })
        .on('error', done);

      fakeRequestStream.push(
        Object.assign({}, RESULT, {
          last: true,
        }),
      );
    });

    it('should clean up request stream when error occurs after chunk.last without retrying', done => {
      let dataEmitted = false;

      stream
        .on('data', () => {
          dataEmitted = true;
        })
        .on('end', () => {
          try {
            assert.strictEqual(dataEmitted, true);
            // Simulate transport error occurring while trailers were in flight
            fakeRequestStream.emit('error', new Error('Late transport error'));
            setImmediate(() => {
              // Should not throw unhandled error and should have detached listeners
              done();
            });
          } catch (error) {
            done(error);
          }
        })
        .on('error', err => {
          done(
            new Error(
              `Stream should not emit error after chunk.last: ${err.message}`,
            ),
          );
        });

      fakeRequestStream.push(
        Object.assign({}, RESULT, {
          last: true,
        }),
      );
    });

    it('should automatically clean up request stream on stream end without explicit destroy()', done => {
      const resumeSpy = sandbox.spy(fakeRequestStream, 'resume');

      stream
        .on('data', () => {})
        .on('end', () => {
          setImmediate(() => {
            try {
              // resume() must be called to drain background trailers without requiring stream.destroy()
              assert.strictEqual(
                resumeSpy.called,
                true,
                'resume() should be called on fakeRequestStream',
              );
              fakeRequestStream.push(null);
              done();
            } catch (error) {
              done(error);
            }
          });
        })
        .on('error', done);

      fakeRequestStream.push(
        Object.assign({}, RESULT, {
          last: true,
        }),
      );
    });

    it('should emit finish and close, and resolve stream.finished() naturally on chunk.last without manual destroy', done => {
      let finishedCalled = false;
      let closeEmitted = false;
      let finishEmitted = false;

      finished(stream, err => {
        try {
          assert.ifError(err);
          finishedCalled = true;
          if (closeEmitted && finishEmitted) {
            done();
          }
        } catch (error) {
          done(error);
        }
      });

      stream
        .on('data', () => {})
        .on('finish', () => {
          finishEmitted = true;
        })
        .on('close', () => {
          closeEmitted = true;
          if (finishedCalled && finishEmitted) {
            done();
          }
        })
        .on('error', done);

      fakeRequestStream.push(
        Object.assign({}, RESULT, {
          last: true,
        }),
      );
    });

    it('should correctly handle zero-row result set with chunk.last', done => {
      let dataEmitted = false;

      stream
        .on('data', () => {
          dataEmitted = true;
        })
        .on('end', () => {
          try {
            assert.strictEqual(
              dataEmitted,
              false,
              'No rows should be emitted for empty result set',
            );
            done();
          } catch (error) {
            done(error);
          }
        })
        .on('error', done);

      fakeRequestStream.push({
        metadata: {
          rowType: {
            fields: [{name: 'col1', type: {code: 'STRING'}}],
          },
        },
        values: [],
        last: true,
      });
    });

    it('should handle multi-chunk stream ending with chunk.last', done => {
      const receivedRows: Row[] = [];

      stream
        .on('data', (row: Row) => {
          receivedRows.push(row);
        })
        .on('end', () => {
          try {
            assert.strictEqual(receivedRows.length, 2);
            done();
          } catch (error) {
            done(error);
          }
        })
        .on('error', done);

      fakeRequestStream.push(
        Object.assign({}, RESULT, {
          last: false,
          resumeToken: 'token1',
        }),
      );
      fakeRequestStream.push(
        Object.assign({}, RESULT, {
          last: true,
        }),
      );
    });

    it('should emit stats event before end when chunk.last contains stats', done => {
      let statsEmitted = false;
      let endEmitted = false;
      const fakeStats = {queryStats: {rowsReturned: '1'}};

      stream
        .on('data', () => {})
        .on('stats', (stats: any) => {
          statsEmitted = true;
          assert.strictEqual(
            endEmitted,
            false,
            'stats must be emitted before end',
          );
          assert.deepStrictEqual(stats, fakeStats);
        })
        .on('end', () => {
          endEmitted = true;
          try {
            assert.strictEqual(statsEmitted, true);
            done();
          } catch (error) {
            done(error);
          }
        })
        .on('error', done);

      fakeRequestStream.push(
        Object.assign({}, RESULT, {
          stats: fakeStats,
          last: true,
        }),
      );
    });

    it('should clean up request stream when error occurs on request stream while receivedLast is true before stream ends', done => {
      let dataEmitted = false;

      stream
        .on('data', () => {
          dataEmitted = true;
          // Emit error on the request stream while receivedLast is true and before stream ends
          fakeRequestStream.emit(
            'error',
            new Error('Immediate transport error'),
          );
        })
        .on('end', () => {
          try {
            assert.strictEqual(dataEmitted, true);
            done();
          } catch (error) {
            done(error);
          }
        })
        .on('error', err => {
          done(
            new Error(
              `Stream should not emit error after chunk.last: ${err.message}`,
            ),
          );
        });

      fakeRequestStream.push(
        Object.assign({}, RESULT, {
          last: true,
        }),
      );
    });

    it('should flush all uncheckpointed chunks queued in CheckpointStream when chunk.last is true', done => {
      const receivedRows: Row[] = [];

      stream
        .on('data', (row: Row) => {
          receivedRows.push(row);
        })
        .on('end', () => {
          try {
            assert.strictEqual(receivedRows.length, 2);
            done();
          } catch (error) {
            done(error);
          }
        })
        .on('error', done);

      // Chunk 1 has NO resumeToken and last: false (gets buffered in CheckpointStream)
      fakeRequestStream.push(
        Object.assign({}, RESULT, {
          last: false,
          resumeToken: undefined,
        }),
      );
      // Chunk 2 has last: true and NO resumeToken (must trigger flush of chunk 1 and chunk 2)
      fakeRequestStream.push(
        Object.assign({}, RESULT, {
          last: true,
          resumeToken: undefined,
        }),
      );
    });

    it('should successfully retry on retryable error and complete on chunk.last', done => {
      const unavailableError = new Error('Unavailable') as grpc.ServiceError;
      unavailableError.code = grpc.status.UNAVAILABLE;

      let attempts = 0;
      const retryRequestFunction = () => {
        const requestStream = through.obj();
        attempts++;
        if (attempts === 1) {
          setImmediate(() => requestStream.emit('error', unavailableError));
        } else {
          setImmediate(() => {
            requestStream.push(Object.assign({}, RESULT, {last: true}));
          });
        }
        return requestStream;
      };

      const retryStream = partialResultStream(retryRequestFunction);
      let rowsCount = 0;
      retryStream
        .on('data', () => rowsCount++)
        .on('end', () => {
          try {
            assert.strictEqual(attempts, 2);
            assert.strictEqual(rowsCount, 1);
            done();
          } catch (error) {
            done(error);
          }
        })
        .on('error', done);
    });

    it('should emit error when decoding fails on chunk.last', done => {
      const failingStream = partialResultStream(() => fakeRequestStream, {
        json: true,
        jsonOptions: {wrapNumbers: false},
      });

      failingStream
        .on('data', () => {})
        .on('end', () => {
          done(new Error('Stream should not emit end when decoding fails'));
        })
        .on('error', error => {
          try {
            assert(
              error.message.includes(
                'Serializing column "large_id" encountered an error:',
              ),
            );
            done();
          } catch (assertionError) {
            done(assertionError);
          }
        });

      fakeRequestStream.push({
        metadata: {
          rowType: {
            fields: [
              {
                name: 'large_id',
                type: {code: 'INT64'},
              },
            ],
          },
        },
        values: [convertToIValue('9223372036854775807')],
        last: true,
      });
    });

    it('should handle downstream backpressure through the full pipeline without dropping rows', done => {
      const rows: Row[] = [];
      let pausedCount = 0;
      let resumedCount = 0;

      stream.on('paused', () => pausedCount++);
      stream.on('resumed', () => resumedCount++);

      const slowSink = new Transform({
        objectMode: true,
        highWaterMark: 1,
        transform(chunk, encoding, callback) {
          rows.push(chunk);
          setImmediate(callback);
        },
      });

      stream.pipe(slowSink);

      const totalRows = 25;
      slowSink.on('finish', () => {
        try {
          assert.strictEqual(rows.length, totalRows);
          assert.ok(pausedCount > 0, 'pipeline should pause on backpressure');
          assert.ok(resumedCount > 0, 'pipeline should resume on drain');
          done();
        } catch (err) {
          done(err);
        }
      });

      const fields = [{name: NAME, type: {code: 'STRING'}}];
      const values1: Array<ReturnType<typeof convertToIValue>> = [];
      for (let i = 0; i < 20; i++) {
        values1.push(convertToIValue(`pipeline_row_${i}`));
      }
      const values2: Array<ReturnType<typeof convertToIValue>> = [];
      for (let i = 20; i < totalRows; i++) {
        values2.push(convertToIValue(`pipeline_row_${i}`));
      }

      fakeRequestStream.push({
        metadata: {rowType: {fields}},
        values: values1,
        resumeToken: 'token1',
        last: false,
      });
      fakeRequestStream.push({
        values: values2,
        resumeToken: 'token2',
        last: true,
      });
      fakeRequestStream.push(null);
    });

    it('should not suffer from column shift or row loss when retrying under backpressure', done => {
      const firstStream = through.obj();
      const secondStream = through.obj();
      const requestFnStub = sandbox.stub();

      const fields = [
        {name: 'a', type: {code: 'STRING'}},
        {name: 'b', type: {code: 'STRING'}},
        {name: 'c', type: {code: 'STRING'}},
      ];
      const rowValues = (i: number) => [`a${i}`, `b${i}`, `c${i}`];
      const middleRows: Array<ReturnType<typeof convertToIValue>> = [];
      for (let i = 2; i <= 21; i++) {
        middleRows.push(...rowValues(i).map(convertToIValue));
      }

      requestFnStub.onCall(0).callsFake(() => {
        setImmediate(() => {
          firstStream.push({
            metadata: {rowType: {fields}},
            values: [convertToIValue('a1')],
            resumeToken: 'token-1',
          });
          setImmediate(() => {
            firstStream.push({
              values: middleRows,
            });
            setImmediate(() => {
              firstStream.emit('error', {
                code: grpc.status.UNAVAILABLE,
                message: 'Unavailable',
              } as grpc.ServiceError);
            });
          });
        });
        return firstStream;
      });

      requestFnStub.onCall(1).callsFake(resumeToken => {
        assert.strictEqual(resumeToken, 'token-1');
        setImmediate(() => {
          secondStream.push({
            metadata: {rowType: {fields}},
            values: [
              convertToIValue('b1'),
              convertToIValue('c1'),
              ...middleRows,
              ...rowValues(22).map(convertToIValue),
            ],
            last: true,
          });
          secondStream.end();
        });
        return secondStream;
      });

      const rows: Row[] = [];
      const slowSink = new Transform({
        objectMode: true,
        highWaterMark: 1,
        transform(chunk, encoding, callback) {
          rows.push(chunk);
          setImmediate(callback);
        },
      });

      const resultStream = partialResultStream(requestFnStub);
      resultStream.pipe(slowSink);

      slowSink.on('finish', () => {
        try {
          assert.strictEqual(rows.length, 22);
          for (let i = 0; i < 22; i++) {
            const rowIndex = i + 1;
            assert.deepStrictEqual(rows[i].toJSON(), {
              a: `a${rowIndex}`,
              b: `b${rowIndex}`,
              c: `c${rowIndex}`,
            });
          }
          done();
        } catch (err) {
          done(err);
        }
      });
      resultStream.on('error', done);
    });

    it('should preserve incomplete chunked value across backpressured retry', done => {
      const firstStream = through.obj();
      const secondStream = through.obj();
      const requestFnStub = sandbox.stub();

      const fields = [
        {name: 'id', type: {code: 'STRING'}},
        {name: 'text', type: {code: 'STRING'}},
      ];

      requestFnStub.onCall(0).callsFake(() => {
        setImmediate(() => {
          firstStream.push({
            metadata: {rowType: {fields}},
            values: [convertToIValue('row1'), convertToIValue('part1-')],
            chunkedValue: true,
            resumeToken: 'token-1',
          });
          setImmediate(() => {
            firstStream.push({
              values: [convertToIValue('part2-tentative')],
              chunkedValue: true,
            });
            setImmediate(() => {
              firstStream.emit('error', {
                code: grpc.status.UNAVAILABLE,
                message: 'Unavailable',
              } as grpc.ServiceError);
            });
          });
        });
        return firstStream;
      });

      requestFnStub.onCall(1).callsFake(resumeToken => {
        assert.strictEqual(resumeToken, 'token-1');
        setImmediate(() => {
          secondStream.push({
            values: [
              convertToIValue('part2-actual'),
              convertToIValue('row2'),
              convertToIValue('text2'),
            ],
            last: true,
          });
          secondStream.end();
        });
        return secondStream;
      });

      const rows: Row[] = [];
      const slowSink = new Transform({
        objectMode: true,
        highWaterMark: 1,
        transform(chunk, encoding, callback) {
          rows.push(chunk);
          setImmediate(callback);
        },
      });

      const resultStream = partialResultStream(requestFnStub);
      resultStream.pipe(slowSink);

      slowSink.on('finish', () => {
        try {
          assert.strictEqual(rows.length, 2);
          assert.deepStrictEqual(rows[0].toJSON(), {
            id: 'row1',
            text: 'part1-part2-actual',
          });
          assert.deepStrictEqual(rows[1].toJSON(), {
            id: 'row2',
            text: 'text2',
          });
          done();
        } catch (err) {
          done(err);
        }
      });
      resultStream.on('error', done);
    });

    it('should not produce duplicate rows when retrying under backpressure', done => {
      const firstStream = through.obj();
      const secondStream = through.obj();
      const requestFnStub = sandbox.stub();

      const fields = [{name: 'id', type: {code: 'STRING'}}];
      const middleRows: Array<ReturnType<typeof convertToIValue>> = [];
      for (let i = 2; i <= 21; i++) {
        middleRows.push(convertToIValue(`row-${i}`));
      }

      requestFnStub.onCall(0).callsFake(() => {
        setImmediate(() => {
          firstStream.push({
            metadata: {rowType: {fields}},
            values: [convertToIValue('row-1')],
            resumeToken: 'token-1',
          });
          setImmediate(() => {
            firstStream.push({
              values: middleRows,
            });
            setImmediate(() => {
              firstStream.emit('error', {
                code: grpc.status.UNAVAILABLE,
                message: 'Unavailable',
              } as grpc.ServiceError);
            });
          });
        });
        return firstStream;
      });

      requestFnStub.onCall(1).callsFake(resumeToken => {
        assert.strictEqual(resumeToken, 'token-1');
        setImmediate(() => {
          secondStream.push({
            metadata: {rowType: {fields}},
            values: middleRows,
            last: true,
          });
          secondStream.end();
        });
        return secondStream;
      });

      const rows: Row[] = [];
      const slowSink = new Transform({
        objectMode: true,
        highWaterMark: 1,
        transform(chunk, encoding, callback) {
          rows.push(chunk);
          setImmediate(callback);
        },
      });

      const resultStream = partialResultStream(requestFnStub);
      resultStream.pipe(slowSink);

      slowSink.on('finish', () => {
        try {
          assert.strictEqual(rows.length, 21);
          for (let i = 0; i < 21; i++) {
            assert.deepStrictEqual(rows[i].toJSON(), {
              id: `row-${i + 1}`,
            });
          }
          done();
        } catch (err) {
          done(err);
        }
      });
      resultStream.on('error', done);
    });

    it('should hold back uncheckpointed chunks and truncate them on retry (Java: restartWithHoldBack)', done => {
      const firstStream = through.obj();
      const secondStream = through.obj();
      const requestFnStub = sandbox.stub();

      const fields = [{name: 'val', type: {code: 'STRING'}}];

      requestFnStub.onCall(0).callsFake(() => {
        setImmediate(() => {
          firstStream.push({
            metadata: {rowType: {fields}},
            values: [convertToIValue('a')],
            resumeToken: 'r1',
          });
          firstStream.push({
            values: [convertToIValue('b')],
            resumeToken: 'r2',
          });
          firstStream.push({
            values: [convertToIValue('X1')],
          });
          firstStream.push({
            values: [convertToIValue('X2')],
          });
          setImmediate(() => {
            firstStream.emit('error', {
              code: grpc.status.UNAVAILABLE,
              message: 'Unavailable',
            } as grpc.ServiceError);
          });
        });
        return firstStream;
      });

      requestFnStub.onCall(1).callsFake(resumeToken => {
        assert.strictEqual(resumeToken, 'r2');
        setImmediate(() => {
          secondStream.push({
            values: [convertToIValue('c')],
            resumeToken: 'r3',
          });
          secondStream.push({
            values: [convertToIValue('d')],
            resumeToken: 'r4',
            last: true,
          });
          secondStream.end();
        });
        return secondStream;
      });

      const rows: Row[] = [];
      partialResultStream(requestFnStub)
        .on('data', row => rows.push(row))
        .on('error', done)
        .on('end', () => {
          try {
            assert.strictEqual(rows.length, 4);
            assert.deepStrictEqual(
              rows.map(row => row.toJSON()),
              [{val: 'a'}, {val: 'b'}, {val: 'c'}, {val: 'd'}],
            );
            done();
          } catch (err) {
            done(err);
          }
        });
    });

    it('should hold back chunks mid-stream and resume cleanly across tokens (Java: restartWithHoldBackMidStream)', done => {
      const firstStream = through.obj();
      const secondStream = through.obj();
      const requestFnStub = sandbox.stub();

      const fields = [{name: 'val', type: {code: 'STRING'}}];

      requestFnStub.onCall(0).callsFake(() => {
        setImmediate(() => {
          firstStream.push({
            metadata: {rowType: {fields}},
            values: [convertToIValue('a')],
            resumeToken: 'r1',
          });
          firstStream.push({
            values: [convertToIValue('b')],
          });
          firstStream.push({
            values: [convertToIValue('c')],
          });
          firstStream.push({
            values: [convertToIValue('d')],
            resumeToken: 'r2',
          });
          setImmediate(() => {
            firstStream.emit('error', {
              code: grpc.status.UNAVAILABLE,
              message: 'Unavailable',
            } as grpc.ServiceError);
          });
        });
        return firstStream;
      });

      requestFnStub.onCall(1).callsFake(resumeToken => {
        assert.strictEqual(resumeToken, 'r2');
        setImmediate(() => {
          secondStream.push({
            values: [convertToIValue('e')],
            resumeToken: 'r3',
          });
          secondStream.push({
            values: [convertToIValue('f')],
            last: true,
          });
          secondStream.end();
        });
        return secondStream;
      });

      const rows: Row[] = [];
      partialResultStream(requestFnStub)
        .on('data', row => rows.push(row))
        .on('error', done)
        .on('end', () => {
          try {
            assert.strictEqual(rows.length, 6);
            assert.deepStrictEqual(
              rows.map(row => row.toJSON()),
              [
                {val: 'a'},
                {val: 'b'},
                {val: 'c'},
                {val: 'd'},
                {val: 'e'},
                {val: 'f'},
              ],
            );
            done();
          } catch (err) {
            done(err);
          }
        });
    });

    it('should treat error as unsafe to retry when buffer limit is exceeded without resume tokens (Java: bufferLimitMissingTokensUnsafeToRetry)', done => {
      const firstStream = through.obj();
      const requestFnStub = sandbox.stub();

      const fields = [{name: 'val', type: {code: 'STRING'}}];

      requestFnStub.onCall(0).callsFake(() => {
        setImmediate(() => {
          firstStream.push({
            metadata: {rowType: {fields}},
            values: [convertToIValue('a')],
            resumeToken: 'r1',
          });
          // Push 11 chunks without resume token (exceeding maxQueued of 10)
          for (let i = 1; i <= 11; i++) {
            firstStream.push({
              values: [convertToIValue(`row_${i}`)],
            });
          }
          setImmediate(() => {
            firstStream.emit('error', {
              code: grpc.status.UNAVAILABLE,
              message: 'Unavailable after buffer overflow',
            } as grpc.ServiceError);
          });
        });
        return firstStream;
      });

      const rows: Row[] = [];
      partialResultStream(requestFnStub)
        .on('data', row => rows.push(row))
        .on('error', err => {
          try {
            assert.strictEqual(
              requestFnStub.callCount,
              1,
              'Must not retry after buffer limit without token is exceeded',
            );
            assert.strictEqual(err.code, grpc.status.UNAVAILABLE);
            assert.strictEqual(rows.length, 12);
            done();
          } catch (assertionErr) {
            done(assertionErr);
          }
        })
        .on('end', () => {
          done(new Error('Stream should have failed with error'));
        });
    });

    it('should safely recover retryability when a new resume token arrives after buffer limit was exceeded (Java: bufferLimitMissingTokensSafeToRetry)', done => {
      const firstStream = through.obj();
      const secondStream = through.obj();
      const requestFnStub = sandbox.stub();

      const fields = [{name: 'val', type: {code: 'STRING'}}];

      requestFnStub.onCall(0).callsFake(() => {
        setImmediate(() => {
          firstStream.push({
            metadata: {rowType: {fields}},
            values: [convertToIValue('a')],
            resumeToken: 'r1',
          });
          // Push 11 chunks without resume token (exceeding maxQueued of 10 so safeToRetry becomes false)
          for (let i = 1; i <= 11; i++) {
            firstStream.push({
              values: [convertToIValue(`b${i}`)],
            });
          }
          // Now push a chunk with a resume token, recovering safeToRetry = true
          firstStream.push({
            values: [convertToIValue('c')],
            resumeToken: 'r3',
          });
          setImmediate(() => {
            firstStream.emit('error', {
              code: grpc.status.UNAVAILABLE,
              message: 'Unavailable',
            } as grpc.ServiceError);
          });
        });
        return firstStream;
      });

      requestFnStub.onCall(1).callsFake(resumeToken => {
        assert.strictEqual(resumeToken, 'r3');
        setImmediate(() => {
          secondStream.push({
            values: [convertToIValue('d')],
            last: true,
          });
          secondStream.end();
        });
        return secondStream;
      });

      const rows: Row[] = [];
      partialResultStream(requestFnStub)
        .on('data', row => rows.push(row))
        .on('error', done)
        .on('end', () => {
          try {
            assert.strictEqual(rows.length, 14);
            const expected = [
              {val: 'a'},
              ...Array.from({length: 11}, (_, index) => ({
                val: `b${index + 1}`,
              })),
              {val: 'c'},
              {val: 'd'},
            ];
            assert.deepStrictEqual(
              rows.map(row => row.toJSON()),
              expected,
            );
            done();
          } catch (err) {
            done(err);
          }
        });
    });

    it('should handle multiple consecutive retries with progressive resume tokens (Go: read_test.go)', done => {
      const stream1 = through.obj();
      const stream2 = through.obj();
      const stream3 = through.obj();
      const requestFnStub = sandbox.stub();

      const fields = [{name: 'id', type: {code: 'STRING'}}];

      // Call 1: delivers row 1 with token1, then fails
      requestFnStub.onCall(0).callsFake(() => {
        setImmediate(() => {
          stream1.push({
            metadata: {rowType: {fields}},
            values: [convertToIValue('row1')],
            resumeToken: 'token1',
          });
          setImmediate(() => {
            stream1.emit('error', {
              code: grpc.status.UNAVAILABLE,
              message: 'First blip',
            } as grpc.ServiceError);
          });
        });
        return stream1;
      });

      // Call 2: resumes from token1, delivers row 2 with token2, then fails
      requestFnStub.onCall(1).callsFake(resumeToken => {
        assert.strictEqual(resumeToken, 'token1');
        setImmediate(() => {
          stream2.push({
            values: [convertToIValue('row2')],
            resumeToken: 'token2',
          });
          setImmediate(() => {
            stream2.emit('error', {
              code: grpc.status.UNAVAILABLE,
              message: 'Second blip',
            } as grpc.ServiceError);
          });
        });
        return stream2;
      });

      // Call 3: resumes from token2, delivers row 3 with last: true
      requestFnStub.onCall(2).callsFake(resumeToken => {
        assert.strictEqual(resumeToken, 'token2');
        setImmediate(() => {
          stream3.push({
            values: [convertToIValue('row3')],
            last: true,
          });
          stream3.end();
        });
        return stream3;
      });

      const rows: Row[] = [];
      partialResultStream(requestFnStub)
        .on('data', row => rows.push(row))
        .on('error', done)
        .on('end', () => {
          try {
            assert.strictEqual(requestFnStub.callCount, 3);
            assert.strictEqual(rows.length, 3);
            assert.deepStrictEqual(
              rows.map(row => row.toJSON()),
              [{id: 'row1'}, {id: 'row2'}, {id: 'row3'}],
            );
            done();
          } catch (err) {
            done(err);
          }
        });
    });

    it('should retry after chunked value with resume token and merge continuation correctly (Go: read_test.go)', done => {
      const stream1 = through.obj();
      const stream2 = through.obj();
      const requestFnStub = sandbox.stub();

      const fields = [
        {name: 'id', type: {code: 'STRING'}},
        {name: 'data', type: {code: 'STRING'}},
      ];

      requestFnStub.onCall(0).callsFake(() => {
        setImmediate(() => {
          stream1.push({
            metadata: {rowType: {fields}},
            values: [convertToIValue('id1'), convertToIValue('chunk-head-')],
            chunkedValue: true,
            resumeToken: 'token-chunked',
          });
          setImmediate(() => {
            stream1.emit('error', {
              code: grpc.status.UNAVAILABLE,
              message: 'Unavailable during chunking',
            } as grpc.ServiceError);
          });
        });
        return stream1;
      });

      requestFnStub.onCall(1).callsFake(resumeToken => {
        assert.strictEqual(resumeToken, 'token-chunked');
        setImmediate(() => {
          stream2.push({
            values: [convertToIValue('chunk-tail')],
            last: true,
          });
          stream2.end();
        });
        return stream2;
      });

      const rows: Row[] = [];
      partialResultStream(requestFnStub)
        .on('data', row => rows.push(row))
        .on('error', done)
        .on('end', () => {
          try {
            assert.strictEqual(requestFnStub.callCount, 2);
            assert.strictEqual(rows.length, 1);
            assert.deepStrictEqual(rows[0].toJSON(), {
              id: 'id1',
              data: 'chunk-head-chunk-tail',
            });
            done();
          } catch (err) {
            done(err);
          }
        });
    });

    it('should handle value chunked across multiple consecutive PartialResultSets with intermediate chunks, pause, and retry', done => {
      const stream1 = through.obj();
      const stream2 = through.obj();
      const requestFnStub = sandbox.stub();

      const fields = [
        {name: 'id', type: {code: 'STRING'}},
        {name: 'data', type: {code: 'STRING'}},
      ];

      // Stream 1 delivers chunk 1 (token-1), chunk 2 (still chunked, no token), then blips
      requestFnStub.onCall(0).callsFake(() => {
        setImmediate(() => {
          stream1.push({
            metadata: {rowType: {fields}},
            values: [convertToIValue('id1'), convertToIValue('part1-')],
            chunkedValue: true,
            resumeToken: 'token-1',
          });
          setImmediate(() => {
            stream1.push({
              values: [convertToIValue('part2-tentative-')],
              chunkedValue: true,
            });
            setImmediate(() => {
              stream1.emit('error', {
                code: grpc.status.UNAVAILABLE,
                message: 'Unavailable during multi-chunk',
              } as grpc.ServiceError);
            });
          });
        });
        return stream1;
      });

      // Stream 2 resumes from token-1, sends part2 with token-2, part3 (intermediate chunked), and part4 (completion)
      requestFnStub.onCall(1).callsFake(resumeToken => {
        assert.strictEqual(resumeToken, 'token-1');
        setImmediate(() => {
          stream2.push({
            metadata: {rowType: {fields}},
            values: [convertToIValue('part2-actual-')],
            chunkedValue: true,
            resumeToken: 'token-2',
          });
          setImmediate(() => {
            // Intermediate chunk with single value, still chunked
            stream2.push({
              values: [convertToIValue('part3-')],
              chunkedValue: true,
            });
            setImmediate(() => {
              stream2.push({
                values: [
                  convertToIValue('part4'),
                  convertToIValue('id2'),
                  convertToIValue('data2'),
                ],
                last: true,
              });
              stream2.end();
            });
          });
        });
        return stream2;
      });

      const rows: Row[] = [];
      const slowSink = new Transform({
        objectMode: true,
        highWaterMark: 1,
        transform(chunk, encoding, callback) {
          rows.push(chunk);
          setImmediate(callback);
        },
      });

      const resultStream = partialResultStream(requestFnStub);
      resultStream.pipe(slowSink);

      slowSink.on('finish', () => {
        try {
          assert.strictEqual(requestFnStub.callCount, 2);
          assert.strictEqual(rows.length, 2);
          assert.deepStrictEqual(rows[0].toJSON(), {
            id: 'id1',
            data: 'part1-part2-actual-part3-part4',
          });
          assert.deepStrictEqual(rows[1].toJSON(), {
            id: 'id2',
            data: 'data2',
          });
          done();
        } catch (err) {
          done(err);
        }
      });
      resultStream.on('error', done);
    });

    it('should retry after chunked array value with resume token and merge continuation correctly', done => {
      const stream1 = through.obj();
      const stream2 = through.obj();
      const requestFnStub = sandbox.stub();

      const fields = [
        {name: 'id', type: {code: 'STRING'}},
        {
          name: 'tags',
          type: {
            code: 'ARRAY',
            arrayElementType: {code: 'STRING'},
          },
        },
      ];

      requestFnStub.onCall(0).callsFake(() => {
        setImmediate(() => {
          stream1.push({
            metadata: {rowType: {fields}},
            values: [
              convertToIValue('id1'),
              convertToIValue(['tag1', 'tag2-']),
            ],
            chunkedValue: true,
            resumeToken: 'token-array',
          });
          setImmediate(() => {
            stream1.emit('error', {
              code: grpc.status.UNAVAILABLE,
              message: 'Unavailable during array chunk',
            } as grpc.ServiceError);
          });
        });
        return stream1;
      });

      requestFnStub.onCall(1).callsFake(resumeToken => {
        assert.strictEqual(resumeToken, 'token-array');
        setImmediate(() => {
          stream2.push({
            values: [convertToIValue(['tag2-tail', 'tag3'])],
            last: true,
          });
          stream2.end();
        });
        return stream2;
      });

      const rows: Row[] = [];
      partialResultStream(requestFnStub)
        .on('data', row => rows.push(row))
        .on('error', done)
        .on('end', () => {
          try {
            assert.strictEqual(requestFnStub.callCount, 2);
            assert.strictEqual(rows.length, 1);
            assert.deepStrictEqual(rows[0].toJSON(), {
              id: 'id1',
              tags: ['tag1', 'tag2-tag2-tail', 'tag3'],
            });
            done();
          } catch (err) {
            done(err);
          }
        });
    });

    it('should restart from beginning when initial stream fails before any resume token is received (Java: bufferLimitRestartWithinLimitAtStartOfResults)', done => {
      const stream1 = through.obj();
      const stream2 = through.obj();
      const requestFnStub = sandbox.stub();

      const fields = [{name: 'id', type: {code: 'STRING'}}];

      // Stream 1 delivers a chunk without token, then fails
      requestFnStub.onCall(0).callsFake(resumeToken => {
        assert.strictEqual(resumeToken, undefined);
        setImmediate(() => {
          stream1.push({
            metadata: {rowType: {fields}},
            values: [convertToIValue('tentative-row')],
          });
          setImmediate(() => {
            stream1.emit('error', {
              code: grpc.status.UNAVAILABLE,
              message: 'Initial failure',
            } as grpc.ServiceError);
          });
        });
        return stream1;
      });

      // Stream 2 must restart with undefined resumeToken
      requestFnStub.onCall(1).callsFake(resumeToken => {
        assert.strictEqual(
          resumeToken,
          undefined,
          'Must restart from beginning with undefined resumeToken',
        );
        setImmediate(() => {
          stream2.push({
            metadata: {rowType: {fields}},
            values: [convertToIValue('actual-row-1')],
            resumeToken: 'token-1',
          });
          stream2.push({
            values: [convertToIValue('actual-row-2')],
            last: true,
          });
          stream2.end();
        });
        return stream2;
      });

      const rows: Row[] = [];
      partialResultStream(requestFnStub)
        .on('data', row => rows.push(row))
        .on('error', done)
        .on('end', () => {
          try {
            assert.strictEqual(requestFnStub.callCount, 2);
            assert.strictEqual(rows.length, 2);
            assert.deepStrictEqual(
              rows.map(row => row.toJSON()),
              [{id: 'actual-row-1'}, {id: 'actual-row-2'}],
            );
            done();
          } catch (err) {
            done(err);
          }
        });
    });

    it('should correctly preserve all buffered checkpointed chunks when multiple tokens arrive while paused before error', done => {
      const stream1 = through.obj();
      const stream2 = through.obj();
      const requestFnStub = sandbox.stub();
      const resultStream = partialResultStream(requestFnStub);

      const fields = [{name: 'id', type: {code: 'STRING'}}];

      requestFnStub.onCall(0).callsFake(() => {
        setImmediate(() => {
          stream1.push({
            metadata: {rowType: {fields}},
            values: [convertToIValue('row-1')],
            resumeToken: 'token-1',
          });
        });
        return stream1;
      });

      requestFnStub.onCall(1).callsFake(resumeToken => {
        assert.strictEqual(
          resumeToken,
          'token-3',
          'Must resume from latest valid token token-3',
        );
        setImmediate(() => {
          stream2.push({
            values: [
              convertToIValue('row-4-resumed'),
              convertToIValue('row-5'),
            ],
            last: true,
          });
          stream2.end();
          resultStream.resume();
        });
        return stream2;
      });

      const rows: Row[] = [];
      resultStream
        .on('data', row => {
          rows.push(row);
          if (rows.length === 1) {
            resultStream.pause();
            setImmediate(() => {
              // Push chunk 2 and 3 with tokens, chunk 4 without token, then fail
              stream1.push({
                values: [convertToIValue('row-2')],
                resumeToken: 'token-2',
              });
              stream1.push({
                values: [convertToIValue('row-3')],
                resumeToken: 'token-3',
              });
              stream1.push({
                values: [convertToIValue('row-4-discarded')],
              });
              setImmediate(() => {
                stream1.emit('error', {
                  code: grpc.status.UNAVAILABLE,
                  message: 'Unavailable',
                } as grpc.ServiceError);
              });
            });
          }
        })
        .on('end', () => {
          try {
            assert.strictEqual(requestFnStub.callCount, 2);
            assert.strictEqual(rows.length, 5);
            assert.deepStrictEqual(
              rows.map(row => row.toJSON()),
              [
                {id: 'row-1'},
                {id: 'row-2'},
                {id: 'row-3'},
                {id: 'row-4-resumed'},
                {id: 'row-5'},
              ],
            );
            done();
          } catch (err) {
            done(err);
          }
        })
        .on('error', done);
    });

    it('should not shift row values when retrying while the stream is paused by backpressure and a checkpointed chunk is still queued', done => {
      const firstStream = through.obj();
      const secondStream = through.obj();
      const requestFnStub = sandbox.stub();

      const fields = [
        {name: 'a', type: {code: 'STRING'}},
        {name: 'b', type: {code: 'STRING'}},
        {name: 'c', type: {code: 'STRING'}},
      ];
      const rowValues = (index: number) => [
        `a${index}`,
        `b${index}`,
        `c${index}`,
      ];
      const middleRows: Array<ReturnType<typeof convertToIValue>> = [];
      for (let i = 2; i <= 21; i++) {
        middleRows.push(...rowValues(i).map(convertToIValue));
      }

      requestFnStub.onCall(0).callsFake(() => {
        setImmediate(() => {
          firstStream.push({
            metadata: {rowType: {fields}},
            values: [convertToIValue('a1')],
            resumeToken: 'token-1',
          });
          firstStream.push({
            values: [
              convertToIValue('b1'),
              convertToIValue('c1'),
              ...middleRows,
              convertToIValue('a22'),
              convertToIValue('b22'),
            ],
          });
          firstStream.push({
            values: [convertToIValue('c22'), convertToIValue('a23')],
            resumeToken: 'token-2',
          });
        });
        return firstStream;
      });

      const resultStream = partialResultStream(requestFnStub);
      const rows: Row[] = [];

      requestFnStub.onCall(1).callsFake(resumeToken => {
        assert.strictEqual(resumeToken, 'token-2');
        setImmediate(() => {
          resultStream.resume();
          secondStream.push({
            metadata: {rowType: {fields}},
            values: [convertToIValue('b23'), convertToIValue('c23')],
            last: true,
          });
          secondStream.end();
        });
        return secondStream;
      });

      resultStream.once('paused', () => {
        firstStream.emit('error', {
          code: grpc.status.UNAVAILABLE,
          message: 'Unavailable',
        } as grpc.ServiceError);
      });

      resultStream
        .on('data', row => {
          rows.push(row);
          if (rows.length === 1) {
            resultStream.pause();
          }
        })
        .on('error', done)
        .on('end', () => {
          try {
            assert.strictEqual(rows.length, 23);
            for (let i = 1; i <= 23; i++) {
              assert.deepStrictEqual(rows[i - 1].toJSON(), {
                a: `a${i}`,
                b: `b${i}`,
                c: `c${i}`,
              });
            }
            done();
          } catch (err) {
            done(err);
          }
        });
    });

    it('should not lose a chunked value when retrying while the stream is paused by backpressure and a checkpointed chunked value is queued', done => {
      const firstStream = through.obj();
      const secondStream = through.obj();
      const requestFnStub = sandbox.stub();

      const fields = [
        {name: 'id', type: {code: 'STRING'}},
        {name: 'text', type: {code: 'STRING'}},
      ];
      const middleRows: Array<ReturnType<typeof convertToIValue>> = [];
      for (let i = 2; i <= 21; i++) {
        middleRows.push(
          convertToIValue(`row-${i}`),
          convertToIValue(`text-${i}`),
        );
      }

      requestFnStub.onCall(0).callsFake(() => {
        setImmediate(() => {
          firstStream.push({
            metadata: {rowType: {fields}},
            values: [convertToIValue('row-1'), convertToIValue('head-1-')],
            chunkedValue: true,
            resumeToken: 'token-1',
          });
          firstStream.push({
            values: [convertToIValue('tail-1'), ...middleRows],
          });
          firstStream.push({
            values: [convertToIValue('row-22'), convertToIValue('head-22-')],
            chunkedValue: true,
            resumeToken: 'token-2',
          });
        });
        return firstStream;
      });

      const resultStream = partialResultStream(requestFnStub);
      const rows: Row[] = [];

      requestFnStub.onCall(1).callsFake(resumeToken => {
        assert.strictEqual(resumeToken, 'token-2');
        setImmediate(() => {
          resultStream.resume();
          secondStream.push({
            metadata: {rowType: {fields}},
            values: [convertToIValue('tail-22')],
            last: true,
          });
          secondStream.end();
        });
        return secondStream;
      });

      resultStream.once('paused', () => {
        firstStream.emit('error', {
          code: grpc.status.UNAVAILABLE,
          message: 'Unavailable',
        } as grpc.ServiceError);
      });

      resultStream
        .on('data', row => {
          rows.push(row);
          if (rows.length === 1) {
            resultStream.pause();
          }
        })
        .on('error', done)
        .on('end', () => {
          try {
            assert.strictEqual(rows.length, 22);
            assert.deepStrictEqual(rows[0].toJSON(), {
              id: 'row-1',
              text: 'head-1-tail-1',
            });
            for (let i = 2; i <= 21; i++) {
              assert.deepStrictEqual(rows[i - 1].toJSON(), {
                id: `row-${i}`,
                text: `text-${i}`,
              });
            }
            assert.deepStrictEqual(rows[21].toJSON(), {
              id: 'row-22',
              text: 'head-22-tail-22',
            });
            done();
          } catch (err) {
            done(err);
          }
        });
    });

    it('should not return rows twice when retrying while explicitly paused via pause() and once(paused)', done => {
      const firstStream = through.obj();
      const secondStream = through.obj();
      const requestFnStub = sandbox.stub();

      const fields = [{name: 'id', type: {code: 'STRING'}}];
      const middleRows: Array<ReturnType<typeof convertToIValue>> = [];
      for (let i = 2; i <= 21; i++) {
        middleRows.push(convertToIValue(`row-${i}`));
      }

      requestFnStub.onCall(0).callsFake(() => {
        setImmediate(() => {
          firstStream.push({
            metadata: {rowType: {fields}},
            values: [convertToIValue('row-1'), ...middleRows],
            resumeToken: 'token-1',
          });
        });
        return firstStream;
      });

      const resultStream = partialResultStream(requestFnStub);
      const rows: Row[] = [];

      requestFnStub.onCall(1).callsFake(resumeToken => {
        assert.strictEqual(resumeToken, 'token-1');
        setImmediate(() => {
          resultStream.resume();
          secondStream.push({
            metadata: {rowType: {fields}},
            values: [convertToIValue('row-22')],
            last: true,
          });
          secondStream.end();
        });
        return secondStream;
      });

      resultStream.once('paused', () => {
        firstStream.emit('error', {
          code: grpc.status.UNAVAILABLE,
          message: 'Unavailable',
        } as grpc.ServiceError);
      });

      resultStream
        .on('data', row => {
          rows.push(row);
          if (rows.length === 1) {
            resultStream.pause();
          }
        })
        .on('error', done)
        .on('end', () => {
          try {
            assert.strictEqual(rows.length, 22);
            for (let i = 1; i <= 22; i++) {
              assert.deepStrictEqual(rows[i - 1].toJSON(), {
                id: `row-${i}`,
              });
            }
            done();
          } catch (err) {
            done(err);
          }
        });
    });

    it('should not return rows twice when retrying while paused and a second resume token arrives while paused', done => {
      const firstStream = through.obj();
      const secondStream = through.obj();
      const requestFnStub = sandbox.stub();
      const resultStream = prs.partialResultStream(requestFnStub);
      const fields = [
        {name: 'a', type: {code: 'STRING'}},
        {name: 'b', type: {code: 'STRING'}},
        {name: 'c', type: {code: 'STRING'}},
      ];
      const rowValues = (from: number, to: number) => {
        const values: Array<ReturnType<typeof convertToIValue>> = [];
        for (let i = from; i <= to; i++) {
          values.push(
            convertToIValue(`a${i}`),
            convertToIValue(`b${i}`),
            convertToIValue(`c${i}`),
          );
        }
        return values;
      };
      requestFnStub.onCall(0).callsFake(() => {
        setImmediate(() => {
          firstStream.push({
            metadata: {rowType: {fields}},
            values: rowValues(1, 20),
            resumeToken: 'token-1',
          });
        });
        return firstStream;
      });
      const valuesAfterToken: Record<
        string,
        Array<ReturnType<typeof convertToIValue>>
      > = {
        'token-1': rowValues(21, 22),
        'token-2': rowValues(22, 22),
      };
      requestFnStub.onCall(1).callsFake(resumeToken => {
        assert.ok(
          valuesAfterToken[resumeToken],
          `Unexpected resume token: ${resumeToken}`,
        );
        setImmediate(() => {
          secondStream.push({
            values: valuesAfterToken[resumeToken],
            last: true,
          });
          secondStream.end();
          resultStream.resume();
        });
        return secondStream;
      });
      const rows: Array<Record<string, string>> = [];
      resultStream
        .once('paused', () => {
          setImmediate(() => {
            firstStream.push({
              values: rowValues(21, 21),
              resumeToken: 'token-2',
            });
            setImmediate(() =>
              firstStream.emit('error', {
                code: grpc.status.UNAVAILABLE,
                message: 'Unavailable',
              } as grpc.ServiceError),
            );
          });
        })
        .on('data', row => {
          if (row === undefined || row === null) return;
          rows.push(row.toJSON());
          if (rows.length === 1) resultStream.pause();
        })
        .on('end', () => {
          try {
            assert.strictEqual(requestFnStub.callCount, 2);
            assert.deepStrictEqual(
              rows,
              Array.from({length: 22}, (_, index) => {
                const i = index + 1;
                return {a: `a${i}`, b: `b${i}`, c: `c${i}`};
              }),
            );
            done();
          } catch (err) {
            done(err);
          }
        })
        .on('error', done);
    });

    it('should error when stream ends in the middle of a row (Java/Go parity)', done => {
      const s = through.obj();
      const rows: any[] = [];
      const fields = [
        {name: 'a', type: {code: 'STRING'}},
        {name: 'b', type: {code: 'STRING'}},
      ];
      prs
        .partialResultStream(() => s)
        .on('data', r => rows.push(r.toJSON()))
        .on('error', (err: Error) => {
          try {
            assert.strictEqual(
              err.message,
              'Stream ended prematurely before row or chunked value was complete.',
            );
            done();
          } catch (e) {
            done(e);
          }
        })
        .on('end', () =>
          done(new Error(`ended silently with rows=${JSON.stringify(rows)}`)),
        );
      s.push({
        metadata: {rowType: {fields}},
        values: ['a1', 'b1', 'a2'].map(convertToIValue),
        resumeToken: 't1',
      });
      s.push(null);
    });

    it('should error when stream ends in the middle of a chunked value (Java parity)', done => {
      const s = through.obj();
      const rows: any[] = [];
      const fields = [
        {name: 'a', type: {code: 'STRING'}},
        {name: 'b', type: {code: 'STRING'}},
      ];
      prs
        .partialResultStream(() => s)
        .on('data', r => rows.push(r.toJSON()))
        .on('error', (err: Error) => {
          try {
            assert.strictEqual(
              err.message,
              'Stream ended prematurely before row or chunked value was complete.',
            );
            done();
          } catch (e) {
            done(e);
          }
        })
        .on('end', () =>
          done(new Error(`ended silently with rows=${JSON.stringify(rows)}`)),
        );
      s.push({
        metadata: {rowType: {fields}},
        values: ['a1', 'b1-head'].map(convertToIValue),
        chunkedValue: true,
        resumeToken: 't1',
      });
      s.push(null);
    });

    it('should error when a single-chunk response with last=true contains a partial row', done => {
      const s = through.obj();
      const rows: any[] = [];
      const fields = [
        {name: 'a', type: {code: 'STRING'}},
        {name: 'b', type: {code: 'STRING'}},
      ];
      prs
        .partialResultStream(() => s)
        .on('data', r => rows.push(r.toJSON()))
        .on('error', (err: Error) => {
          try {
            assert.strictEqual(
              err.message,
              'Stream received chunk.last=true before row or chunked value was complete.',
            );
            done();
          } catch (e) {
            done(e);
          }
        })
        .on('end', () =>
          done(new Error(`ended silently with rows=${JSON.stringify(rows)}`)),
        );
      s.push({
        metadata: {rowType: {fields}},
        values: ['a1', 'b1', 'a2'].map(convertToIValue),
        last: true,
      });
    });

    it('should error when a subsequent chunk with last=true contains a partial row in multi-chunk mode', done => {
      const s = through.obj();
      const rows: any[] = [];
      const fields = [
        {name: 'a', type: {code: 'STRING'}},
        {name: 'b', type: {code: 'STRING'}},
      ];
      prs
        .partialResultStream(() => s)
        .on('data', r => rows.push(r.toJSON()))
        .on('error', (err: Error) => {
          try {
            assert.strictEqual(
              err.message,
              'Stream received chunk.last=true before row or chunked value was complete.',
            );
            done();
          } catch (e) {
            done(e);
          }
        })
        .on('end', () =>
          done(new Error(`ended silently with rows=${JSON.stringify(rows)}`)),
        );
      s.push({
        metadata: {rowType: {fields}},
        values: ['a1', 'b1'].map(convertToIValue),
      });
      s.push({
        values: ['a2'].map(convertToIValue),
        last: true,
      });
    });

    it('should not emit rows after destroy() is called', done => {
      const s = through.obj();
      const rows: any[] = [];
      const fields = [
        {name: 'a', type: {code: 'STRING'}},
        {name: 'b', type: {code: 'STRING'}},
      ];
      const stream = prs.partialResultStream(() => s);
      stream.on('data', r => {
        rows.push(r.toJSON());
        if (rows.length === 1) stream.destroy();
      });
      stream.on('close', () => {
        setImmediate(() => {
          try {
            assert.strictEqual(
              rows.length,
              1,
              `rows after destroy: ${rows.length}`,
            );
            done();
          } catch (e) {
            done(e);
          }
        });
      });
      const values: Array<ReturnType<typeof convertToIValue>> = [];
      for (let i = 0; i < 10; i++) {
        values.push(convertToIValue(`a${i}`), convertToIValue(`b${i}`));
      }
      s.push({
        metadata: {rowType: {fields}},
        values,
        resumeToken: 't1',
      });
    });

    it('should correctly merge falsy pending values (empty string) across chunk boundaries', done => {
      const streamInstance = new PartialResultStream({});
      const rows: Row[] = [];
      const fields = [
        {name: 'col1', type: {code: 'STRING'}},
        {name: 'col2', type: {code: 'STRING'}},
      ];

      streamInstance
        .on('data', row => rows.push(row))
        .on('error', done)
        .on('end', () => {
          try {
            assert.strictEqual(rows.length, 2);
            assert.deepStrictEqual(rows[0].toJSON(), {
              col1: 'tail-after-empty',
              col2: 'val2',
            });
            assert.deepStrictEqual(rows[1].toJSON(), {
              col1: 'val3',
              col2: 'tail-2',
            });
            done();
          } catch (err) {
            done(err);
          }
        });

      // Row 1: col1 starts with empty string "" (falsy) and chunkedValue: true
      streamInstance.write({
        metadata: {rowType: {fields}},
        values: [convertToIValue('')],
        chunkedValue: true,
      });
      // Continuation of Row 1 col1 + Row 1 col2 + Row 2 col1 + Row 2 col2 (starts with "")
      streamInstance.write({
        values: [
          convertToIValue('tail-after-empty'),
          convertToIValue('val2'),
          convertToIValue('val3'),
          convertToIValue(''),
        ],
        chunkedValue: true,
      });
      // Continuation of Row 2 col2
      streamInstance.write({
        values: [convertToIValue('tail-2')],
        last: true,
      });
      streamInstance.end();
    });

    it('should correctly merge chunked ARRAY and STRUCT values when head or tail list is empty (Java/Go/Rust parity)', done => {
      const streamInstance = new PartialResultStream({});
      const rows: Row[] = [];
      const fields = [
        {
          name: 'arr',
          type: {
            code: 'ARRAY',
            arrayElementType: {code: 'STRING'},
          },
        },
        {
          name: 'structCol',
          type: {
            code: 'STRUCT',
            structType: {
              fields: [
                {name: 's1', type: {code: 'STRING'}},
                {name: 's2', type: {code: 'STRING'}},
              ],
            },
          },
        },
      ];

      streamInstance
        .on('data', row => rows.push(row))
        .on('error', done)
        .on('end', () => {
          try {
            assert.strictEqual(rows.length, 3);
            assert.deepStrictEqual(rows[0].toJSON(), {
              arr: ['a', 'b'],
              structCol: {s1: 'v1', s2: 'v2'},
            });
            assert.deepStrictEqual(rows[1].toJSON(), {
              arr: ['x', 'y'],
              structCol: {s1: 'w1', s2: 'w2'},
            });
            assert.deepStrictEqual(rows[2].toJSON(), {
              arr: [],
              structCol: {s1: 'z1', s2: 'z2'},
            });
            done();
          } catch (err) {
            done(err);
          }
        });

      // Row 1: arr starts with empty array [] and chunkedValue: true
      streamInstance.write({
        metadata: {rowType: {fields}},
        values: [convertToIValue([])],
        chunkedValue: true,
      });
      // Row 1: arr continues with ['a', 'b'], structCol starts with [] and chunkedValue: true
      streamInstance.write({
        values: [convertToIValue(['a', 'b']), convertToIValue([])],
        chunkedValue: true,
      });
      // Row 1: structCol continues with ['v1', 'v2']; Row 2: arr starts with ['x', 'y'] and chunkedValue: true
      streamInstance.write({
        values: [convertToIValue(['v1', 'v2']), convertToIValue(['x', 'y'])],
        chunkedValue: true,
      });
      // Row 2: arr continues with [], structCol starts with ['w1', 'w2'] and chunkedValue: true
      streamInstance.write({
        values: [convertToIValue([]), convertToIValue(['w1', 'w2'])],
        chunkedValue: true,
      });
      // Row 2: structCol continues with []; Row 3: arr starts with [] and chunkedValue: true
      streamInstance.write({
        values: [convertToIValue([]), convertToIValue([])],
        chunkedValue: true,
      });
      // Row 3: arr continues with [], structCol is ['z1', 'z2']
      streamInstance.write({
        values: [convertToIValue([]), convertToIValue(['z1', 'z2'])],
        last: true,
      });
      streamInstance.end();
    });

    it('should correctly merge chunked BYTES and ARRAY<BYTES> across multiple PartialResultSets (Java: multiResponseChunkingBytesArray)', done => {
      const streamInstance = new PartialResultStream({});
      const rows: Row[] = [];
      const fields = [
        {name: 'rawBytes', type: {code: 'BYTES'}},
        {
          name: 'bytesArray',
          type: {
            code: 'ARRAY',
            arrayElementType: {code: 'BYTES'},
          },
        },
      ];

      const fullBytes = Buffer.from('hello-chunked-bytes-world');
      const fullBase64 = fullBytes.toString('base64');
      const base64Part1 = fullBase64.slice(0, 10);
      const base64Part2 = fullBase64.slice(10);

      const elem1 = Buffer.from('first-elem');
      const elem2 = Buffer.from('second-chunked-element');
      const elem2Base64 = elem2.toString('base64');
      const elem2Part1 = elem2Base64.slice(0, 8);
      const elem2Part2 = elem2Base64.slice(8);
      const elem3 = Buffer.from('third-elem');

      streamInstance
        .on('data', row => rows.push(row))
        .on('error', done)
        .on('end', () => {
          try {
            assert.strictEqual(rows.length, 1);
            const json = rows[0].toJSON();
            assert.deepStrictEqual(json.rawBytes, fullBytes);
            assert.deepStrictEqual(json.bytesArray, [
              elem1,
              null,
              elem2,
              elem3,
            ]);
            done();
          } catch (err) {
            done(err);
          }
        });

      streamInstance.write({
        metadata: {rowType: {fields}},
        values: [convertToIValue(base64Part1)],
        chunkedValue: true,
      });
      streamInstance.write({
        values: [
          convertToIValue(base64Part2),
          convertToIValue([elem1.toString('base64'), null, elem2Part1]),
        ],
        chunkedValue: true,
      });
      streamInstance.write({
        values: [convertToIValue([elem2Part2, elem3.toString('base64')])],
        last: true,
      });
      streamInstance.end();
    });

    it('should handle empty heartbeat PartialResultSets with resume tokens mid-row and mid-chunked-value (Rust: empty_partial_result_sets_with_resume_tokens)', done => {
      const stream1 = through.obj();
      const stream2 = through.obj();
      const requestFnStub = sandbox.stub();

      const fields = [
        {name: 'id', type: {code: 'STRING'}},
        {name: 'payload', type: {code: 'STRING'}},
      ];

      requestFnStub.onCall(0).callsFake(() => {
        setImmediate(() => {
          // Chunk 1: partial row + chunked value, NO resume token
          stream1.push({
            metadata: {rowType: {fields}},
            values: [convertToIValue('row-1'), convertToIValue('part1-')],
            chunkedValue: true,
          });
          // Chunk 2: empty heartbeat PartialResultSet with resume token
          stream1.push({
            values: [],
            resumeToken: 'heartbeat-token-1',
          });
          // Chunk 3: uncheckpointed continuation that will be discarded on error
          stream1.push({
            values: [convertToIValue('discarded-tail')],
          });
          setImmediate(() => {
            stream1.emit('error', {
              code: grpc.status.UNAVAILABLE,
              message: 'Unavailable after heartbeat',
            } as grpc.ServiceError);
          });
        });
        return stream1;
      });

      requestFnStub.onCall(1).callsFake(resumeToken => {
        assert.strictEqual(resumeToken, 'heartbeat-token-1');
        setImmediate(() => {
          stream2.push({
            values: [convertToIValue('actual-tail')],
            last: true,
          });
          stream2.end();
        });
        return stream2;
      });

      const rows: Row[] = [];
      partialResultStream(requestFnStub)
        .on('data', row => rows.push(row))
        .on('error', done)
        .on('end', () => {
          try {
            assert.strictEqual(requestFnStub.callCount, 2);
            assert.strictEqual(rows.length, 1);
            assert.deepStrictEqual(rows[0].toJSON(), {
              id: 'row-1',
              payload: 'part1-actual-tail',
            });
            done();
          } catch (err) {
            done(err);
          }
        });
    });

    it('should retry on retryable INTERNAL RST_STREAM error and reset withoutCheckpointCount across multiple retries', done => {
      const stream1 = through.obj();
      const stream2 = through.obj();
      const stream3 = through.obj();
      const requestFnStub = sandbox.stub();

      const fields = [{name: 'val', type: {code: 'STRING'}}];

      // Attempt 1: 1 checkpointed chunk + 6 uncheckpointed chunks, then INTERNAL RST_STREAM
      requestFnStub.onCall(0).callsFake(() => {
        setImmediate(() => {
          stream1.push({
            metadata: {rowType: {fields}},
            values: [convertToIValue('committed-1')],
            resumeToken: 'token-1',
          });
          for (let i = 1; i <= 6; i++) {
            stream1.push({
              values: [convertToIValue(`attempt1-discarded-${i}`)],
            });
          }
          setImmediate(() => {
            stream1.emit('error', {
              code: grpc.status.INTERNAL,
              message: 'INTERNAL: HTTP/2 error code: NO_ERROR\nRST_STREAM',
            } as grpc.ServiceError);
          });
        });
        return stream1;
      });

      // Attempt 2: 6 more uncheckpointed chunks (total 12 > maxQueued across attempts, but only 6 in this attempt), then UNAVAILABLE
      requestFnStub.onCall(1).callsFake(resumeToken => {
        assert.strictEqual(resumeToken, 'token-1');
        setImmediate(() => {
          for (let i = 1; i <= 6; i++) {
            stream2.push({
              values: [convertToIValue(`attempt2-discarded-${i}`)],
            });
          }
          setImmediate(() => {
            stream2.emit('error', {
              code: grpc.status.UNAVAILABLE,
              message: 'Unavailable on second attempt',
            } as grpc.ServiceError);
          });
        });
        return stream2;
      });

      // Attempt 3: succeeds from token-1
      requestFnStub.onCall(2).callsFake(resumeToken => {
        assert.strictEqual(resumeToken, 'token-1');
        setImmediate(() => {
          stream3.push({
            values: [convertToIValue('committed-2')],
            last: true,
          });
          stream3.end();
        });
        return stream3;
      });

      const rows: Row[] = [];
      partialResultStream(requestFnStub)
        .on('data', row => rows.push(row))
        .on('error', done)
        .on('end', () => {
          try {
            assert.strictEqual(requestFnStub.callCount, 3);
            assert.strictEqual(rows.length, 2);
            assert.deepStrictEqual(
              rows.map(row => row.toJSON()),
              [{val: 'committed-1'}, {val: 'committed-2'}],
            );
            done();
          } catch (err) {
            done(err);
          }
        });
    });

    it('should remain safe to retry when > maxQueued uncheckpointed chunks arrive while stream is paused by backpressure and have not been emitted', done => {
      const firstStream = through.obj();
      const secondStream = through.obj();
      const requestFnStub = sandbox.stub();

      const fields = [{name: 'id', type: {code: 'STRING'}}];
      const initialRows: Array<ReturnType<typeof convertToIValue>> = [];
      for (let i = 1; i <= 20; i++) {
        initialRows.push(convertToIValue(`row-${i}`));
      }

      requestFnStub.onCall(0).callsFake(() => {
        setImmediate(() => {
          // Chunk 1 has 20 rows and token-1, triggering backpressure pause
          firstStream.push({
            metadata: {rowType: {fields}},
            values: initialRows,
            resumeToken: 'token-1',
          });
          // Push 12 uncheckpointed chunks (> maxQueued) while userStream is paused
          for (let i = 1; i <= 12; i++) {
            firstStream.push({
              values: [convertToIValue(`uncheckpointed-${i}`)],
            });
          }
          setImmediate(() => {
            firstStream.emit('error', {
              code: grpc.status.UNAVAILABLE,
              message:
                'Unavailable while paused with queued uncheckpointed chunks',
            } as grpc.ServiceError);
          });
        });
        return firstStream;
      });

      const resultStream = partialResultStream(requestFnStub);
      const rows: Row[] = [];

      requestFnStub.onCall(1).callsFake(resumeToken => {
        assert.strictEqual(resumeToken, 'token-1');
        setImmediate(() => {
          resultStream.resume();
          secondStream.push({
            values: [convertToIValue('row-21')],
            last: true,
          });
          secondStream.end();
        });
        return secondStream;
      });

      resultStream
        .on('data', row => {
          rows.push(row);
          if (rows.length === 1) {
            resultStream.pause();
          }
        })
        .on('error', done)
        .on('end', () => {
          try {
            assert.strictEqual(requestFnStub.callCount, 2);
            assert.strictEqual(rows.length, 21);
            for (let i = 1; i <= 21; i++) {
              assert.deepStrictEqual(rows[i - 1].toJSON(), {
                id: `row-${i}`,
              });
            }
            done();
          } catch (err) {
            done(err);
          }
        });
    });

    describe('randomized chunking, resumption, and backpressure stress tests', function () {
      this.timeout(10000);

      function mulberry32(a: number) {
        return function () {
          a |= 0;
          a = (a + 0x6d2b79f5) | 0;
          let t = Math.imul(a ^ (a >>> 15), 1 | a);
          t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
          return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        };
      }

      function stringValue(s: string) {
        return {kind: 'stringValue', stringValue: s};
      }
      function listValue(items: string[]) {
        return {kind: 'listValue', listValue: {values: items.map(stringValue)}};
      }

      function split(
        value: {type: string; v: any},
        random: () => number,
      ): Array<{type: string; v: any}> {
        if (value.type === 'STRING') {
          const at = 1 + Math.floor(random() * (value.v.length - 1));
          return [
            {type: 'STRING', v: value.v.slice(0, at)},
            {type: 'STRING', v: value.v.slice(at)},
          ];
        }
        const arr = value.v;
        const at = Math.floor(random() * arr.length);
        const head = arr.slice(0, at + 1);
        const rest = arr.slice(at + 1);
        const boundary = head[head.length - 1];
        const cut = Math.floor(random() * (boundary.length + 1));
        head[head.length - 1] = boundary.slice(0, cut);
        rest.unshift(boundary.slice(cut));
        return [
          {type: 'ARRAY', v: head},
          {type: 'ARRAY', v: rest},
        ];
      }

      function encode(value: {type: string; v: any}) {
        return value.type === 'ARRAY'
          ? listValue(value.v)
          : stringValue(value.v);
      }

      function generate(seed: number) {
        const random = mulberry32(seed);
        const int = (lo: number, hi: number) =>
          lo + Math.floor(random() * (hi - lo + 1));
        const numColumns = int(1, 4);
        const columnTypes: string[] = [];
        for (let c = 0; c < numColumns; c++) {
          columnTypes.push(random() < 0.3 ? 'ARRAY' : 'STRING');
        }
        const fields = columnTypes.map((t, i) => ({
          name: `c${i}`,
          type:
            t === 'ARRAY'
              ? {code: 'ARRAY', arrayElementType: {code: 'STRING'}}
              : {code: 'STRING'},
        }));
        const numRows = int(0, 40);
        const rows: Array<Record<string, any>> = [];
        for (let r = 0; r < numRows; r++) {
          const row: Record<string, any> = {};
          for (let c = 0; c < numColumns; c++) {
            if (columnTypes[c] === 'ARRAY') {
              const n = int(0, 4);
              const arr: string[] = [];
              for (let k = 0; k < n; k++) {
                arr.push(`r${r}c${c}e${k}-` + 'x'.repeat(int(0, 6)));
              }
              row[`c${c}`] = arr;
            } else {
              row[`c${c}`] = `r${r}c${c}-` + 'y'.repeat(int(0, 10));
            }
          }
          rows.push(row);
        }
        const values: Array<{type: string; v: any}> = [];
        for (const row of rows) {
          for (let c = 0; c < numColumns; c++) {
            const v = row[`c${c}`];
            values.push(
              columnTypes[c] === 'ARRAY'
                ? {type: 'ARRAY', v: (v as string[]).slice()}
                : {type: 'STRING', v},
            );
          }
        }
        const sets: any[] = [];
        let pendingTail: {type: string; v: any} | null = null;
        let i = 0;
        let sinceToken = 0;
        const finish = (set: any) => {
          sinceToken++;
          if (random() < 0.35 || sinceToken >= 9) {
            set.resumeToken = Buffer.from(`t${sets.length}`);
            sinceToken = 0;
          }
          sets.push(set);
        };
        while (i < values.length || pendingTail) {
          const set: any = {values: []};
          if (random() < 0.08) {
            sets.push({
              values: [],
              resumeToken: Buffer.from(`t${sets.length}`),
            });
            sinceToken = 0;
            continue;
          }
          if (pendingTail) {
            const tail = pendingTail;
            pendingTail = null;
            const splittable =
              tail.type === 'STRING' ? tail.v.length >= 2 : tail.v.length >= 1;
            if (splittable && random() < 0.3) {
              const [head, rest] = split(tail, random);
              set.values.push(encode(head));
              set.chunkedValue = true;
              pendingTail = rest;
              finish(set);
              continue;
            }
            set.values.push(encode(tail));
          }
          const count = int(0, 8);
          for (let k = 0; k < count && i < values.length; k++) {
            set.values.push(encode(values[i++]));
          }
          if (i < values.length && random() < 0.4) {
            const value = values[i];
            const splittable =
              value.type === 'STRING'
                ? value.v.length >= 2
                : value.v.length >= 1;
            if (splittable) {
              i++;
              const [head, rest] = split(value, random);
              set.values.push(encode(head));
              set.chunkedValue = true;
              pendingTail = rest;
            }
          }
          finish(set);
        }
        if (sets.length === 0) {
          sets.push({values: []});
        }
        sets[0].metadata = {rowType: {fields}};
        const endWithLast = random() < 0.6;
        if (endWithLast) {
          sets[sets.length - 1].last = true;
        }
        return {fields, rows, sets, random, int};
      }

      function runScenario(seed: number): Promise<void> {
        return new Promise((resolve, reject) => {
          const {fields, rows, sets, random, int} = generate(seed);
          let attempts = 0;
          const maxErrors = int(0, 3);
          let errorsInjected = 0;
          const requestFn = (resumeToken?: prs.ResumeToken) => {
            attempts++;
            const stream = through.obj();
            let start = 0;
            if (resumeToken) {
              const tokenBuffer = Buffer.isBuffer(resumeToken)
                ? resumeToken
                : Buffer.from(resumeToken);
              const idx = sets.findIndex(
                s =>
                  s.resumeToken &&
                  tokenBuffer.equals(Buffer.from(s.resumeToken)),
              );
              if (idx < 0) {
                reject(
                  new Error(
                    `seed ${seed}: unknown resume token ${resumeToken}`,
                  ),
                );
                return stream;
              }
              start = idx + 1;
            }
            let failAt = -1;
            if (errorsInjected < maxErrors && random() < 0.7) {
              failAt = int(start, sets.length);
              errorsInjected++;
            }
            let index = start;
            const pump = () => {
              while (index < sets.length) {
                if (index === failAt) {
                  setImmediate(() =>
                    stream.emit('error', {
                      code: grpc.status.UNAVAILABLE,
                      message: `injected ${seed}`,
                    } as grpc.ServiceError),
                  );
                  return;
                }
                const set = sets[index++];
                const toSend = Object.assign({}, set);
                if (index - 1 === start && start > 0) {
                  toSend.metadata = {rowType: {fields}};
                }
                stream.push(toSend);
                if (random() < 0.5) {
                  setImmediate(pump);
                  return;
                }
              }
              if (failAt === sets.length) {
                setImmediate(() =>
                  stream.emit('error', {
                    code: grpc.status.UNAVAILABLE,
                    message: `injected ${seed}`,
                  } as grpc.ServiceError),
                );
                return;
              }
              stream.push(null);
            };
            setImmediate(pump);
            return stream;
          };

          const received: any[] = [];
          const resultStream = prs.partialResultStream(requestFn);
          const consumerMode = int(0, 2);
          const finishCheck = () => {
            try {
              assert.deepStrictEqual(
                received,
                rows,
                `seed ${seed}: rows mismatch (attempts=${attempts})`,
              );
              resolve();
            } catch (e) {
              reject(e);
            }
          };

          resultStream.on('error', err => {
            reject(new Error(`seed ${seed}: unexpected error ${err.message}`));
          });

          if (consumerMode === 0) {
            const sink = new Transform({
              objectMode: true,
              highWaterMark: 1,
              transform(row, _enc, cb) {
                if (row !== null && row !== undefined) {
                  received.push(row.toJSON());
                }
                let n = int(0, 2);
                const next = () => (n-- > 0 ? setImmediate(next) : cb());
                next();
              },
            });
            resultStream.pipe(sink);
            sink.resume();
            sink.on('finish', finishCheck);
          } else if (consumerMode === 1) {
            resultStream.on('data', row => {
              if (row !== null && row !== undefined) {
                received.push(row.toJSON());
              }
              if (random() < 0.2) {
                resultStream.pause();
                let n = int(1, 3);
                const next = () =>
                  n-- > 0 ? setImmediate(next) : resultStream.resume();
                next();
              }
            });
            resultStream.on('end', finishCheck);
          } else {
            resultStream.on('readable', () => {
              let row;
              while ((row = resultStream.read()) !== null) {
                if (row !== undefined) {
                  received.push(row.toJSON());
                }
              }
            });
            resultStream.on('end', finishCheck);
          }
        });
      }

      it('should return all rows exactly once for 50 random scenarios', async () => {
        for (let seed = 1; seed <= 50; seed++) {
          await runScenario(seed);
        }
      });
    });
  });

  describe('decodeRowsDirect & createFieldDecoders', () => {
    it('should return empty array if fields or values are empty', () => {
      assert.deepStrictEqual(prs.decodeRowsDirect({values: []} as any), []);
      assert.deepStrictEqual(
        prs.decodeRowsDirect({
          metadata: {rowType: {fields: []}},
          values: [convertToIValue('test')],
        } as any),
        [],
      );
    });

    it('should decode basic rows in standard RowImpl mode', () => {
      const chunk: any = {
        metadata: {
          rowType: {
            fields: [
              {name: 'id', type: {code: 'INT64'}},
              {name: 'name', type: {code: 'STRING'}},
            ],
          },
        },
        values: [convertToIValue('101'), convertToIValue('Alice')],
      };

      const rows = prs.decodeRowsDirect(chunk);
      assert.strictEqual(rows.length, 1);
      assert.strictEqual(Array.isArray(rows[0]), true);
      assert.strictEqual(rows[0][0].name, 'id');
      assert.strictEqual(rows[0][0].value.value, '101');
      assert.strictEqual(rows[0][1].name, 'name');
      assert.strictEqual(rows[0][1].value, 'Alice');
      assert.deepStrictEqual(rows[0].toJSON(), {id: 101, name: 'Alice'});
    });

    it('should decode rows in JSON mode directly', () => {
      const chunk: any = {
        metadata: {
          rowType: {
            fields: [
              {name: 'id', type: {code: 'INT64'}},
              {name: 'name', type: {code: 'STRING'}},
            ],
          },
        },
        values: [convertToIValue('101'), convertToIValue('Alice')],
      };

      const rows = prs.decodeRowsDirect(chunk, {json: true});
      assert.strictEqual(rows.length, 1);
      assert.deepStrictEqual(rows[0], {id: 101, name: 'Alice'});
    });

    it('should handle nameless columns in JSON mode', () => {
      const chunk: any = {
        metadata: {
          rowType: {
            fields: [
              {name: '', type: {code: 'INT64'}},
              {name: 'name', type: {code: 'STRING'}},
            ],
          },
        },
        values: [convertToIValue('101'), convertToIValue('Alice')],
      };

      // Default: omit nameless columns
      const rowsOmitted = prs.decodeRowsDirect(chunk, {json: true});
      assert.deepStrictEqual(rowsOmitted[0], {name: 'Alice'});

      // With includeNameless: true
      const rowsIncluded = prs.decodeRowsDirect(chunk, {
        json: true,
        jsonOptions: {includeNameless: true},
      });
      assert.deepStrictEqual(rowsIncluded[0], {_0: 101, name: 'Alice'});
    });

    it('should wrap serialization errors in JSON mode with actionable error message', () => {
      const chunk: any = {
        metadata: {
          rowType: {
            fields: [{name: 'large_num', type: {code: 'INT64'}}],
          },
        },
        values: [convertToIValue('9223372036854775807')],
      };

      assert.throws(
        () => {
          prs.decodeRowsDirect(chunk, {
            json: true,
            jsonOptions: {wrapNumbers: false},
          });
        },
        (err: Error) => {
          assert(
            err.message.includes(
              'Serializing column "large_num" encountered an error',
            ),
          );
          assert(
            err.message.includes(
              'Call row.toJSON({ wrapNumbers: true }) to receive a custom type.',
            ),
          );
          return true;
        },
      );
    });

    it('should respect custom columnsMetadata in decoders', () => {
      const getDecoderSpy = sandbox.spy(codec, 'getDecoder');
      const mockProtoType = {decode: () => {}, toObject: () => {}};
      const chunk: any = {
        metadata: {
          rowType: {
            fields: [{name: 'protoCol', type: {code: 'PROTO'}}],
          },
        },
        values: [convertToIValue(Buffer.from('test').toString('base64'))],
      };

      const columnsMetadata = {
        protoCol: mockProtoType,
      };

      prs.decodeRowsDirect(chunk, {
        columnsMetadata,
      });
      assert.strictEqual(getDecoderSpy.called, true);
      const [, columnMetadataArg] = getDecoderSpy.lastCall.args;
      assert.strictEqual(columnMetadataArg, mockProtoType);
    });

    it('should call custom codec.decode when codec.decode is stubbed', () => {
      const stub = sandbox.stub(codec, 'decode').returns('custom_decoded');
      const fields = [{name: 'col', type: {code: 'STRING'}}] as any;
      const decoders = prs.createFieldDecoders(fields);

      const result = decoders[0]('raw');
      assert.strictEqual(result, 'custom_decoded');
      assert.strictEqual(stub.callCount, 1);
    });

    it('should fall back to RowImpl toJSON when codec.convertFieldsToJson is stubbed in JSON mode', () => {
      const stub = sandbox
        .stub(codec, 'convertFieldsToJson')
        .returns({mocked: true} as any);

      const chunk: any = {
        metadata: {
          rowType: {
            fields: [{name: 'id', type: {code: 'INT64'}}],
          },
        },
        values: [convertToIValue('101')],
      };

      const rows = prs.decodeRowsDirect(chunk, {json: true});
      assert.deepStrictEqual(rows[0], {mocked: true});
      assert.strictEqual(stub.callCount, 1);
    });
  });
});

export function convertToIValue(value) {
  let kind: string;

  if (typeof value === 'number') {
    kind = 'numberValue';
  } else if (typeof value === 'string') {
    kind = 'stringValue';
  } else if (typeof value === 'boolean') {
    kind = 'boolValue';
  } else if (Array.isArray(value)) {
    const values = value.map(convertToIValue);
    kind = 'listValue';
    value = {values};
  } else {
    kind = 'nullValue';
    value = null;
  }

  return {kind, [kind]: value};
}
