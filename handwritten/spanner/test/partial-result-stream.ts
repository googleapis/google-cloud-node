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
const checkpointStream = require('checkpoint-stream');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const concat = require('concat-stream');
import * as proxyquire from 'proxyquire';
import * as sinon from 'sinon';
import {Transform} from 'stream';
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
      'checkpoint-stream': checkpointStream,
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
        assert.deepStrictEqual(row, EXPECTED_ROW);
        done();
      });

      stream.write(RESULT);
    });

    it('should emit rows as JSON', done => {
      const jsonOptions = {};
      const stream = new PartialResultStream({json: true, jsonOptions});

      const fakeJson = {};
      const stub = sandbox.stub(codec, 'convertFieldsToJson').returns(fakeJson);

      stream.on('error', done).on('data', json => {
        assert.deepStrictEqual(json, fakeJson);

        const [row, options] = stub.lastCall.args;
        assert.deepStrictEqual(row, EXPECTED_ROW);
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
      // - Confirm all rows were received.
      const fakeCheckpointStream = through.obj();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (fakeCheckpointStream as any).reset = () => {};

      sandbox.stub(checkpointStream, 'obj').returns(fakeCheckpointStream);

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
          fakeCheckpointStream.emit('checkpoint', RESULT_WITH_TOKEN);
          secondFakeRequestStream.push(RESULT_WITH_TOKEN);
          fakeCheckpointStream.emit('checkpoint', RESULT_WITH_TOKEN);

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
      const fakeCheckpointStream = through.obj();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (fakeCheckpointStream as any).reset = () => {};

      sandbox.stub(checkpointStream, 'obj').returns(fakeCheckpointStream);

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
      const fakeCheckpointStream = through.obj();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (fakeCheckpointStream as any).reset = () => {};
      sandbox.stub(checkpointStream, 'obj').returns(fakeCheckpointStream);

      const firstFakeRequestStream = through.obj();
      const secondFakeRequestStream = through.obj();

      const requestFnStub = sandbox.stub();

      requestFnStub.onCall(0).callsFake(() => {
        setTimeout(() => {
          firstFakeRequestStream.push(RESULT_WITH_TOKEN);
          fakeCheckpointStream.emit('checkpoint', RESULT_WITH_TOKEN);
          firstFakeRequestStream.push(RESULT_WITH_TOKEN);
          fakeCheckpointStream.emit('checkpoint', RESULT_WITH_TOKEN);

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
          fakeCheckpointStream.emit('checkpoint', RESULT_WITH_TOKEN);
          secondFakeRequestStream.push(RESULT_WITH_TOKEN);
          fakeCheckpointStream.emit('checkpoint', RESULT_WITH_TOKEN);

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

    it('should emit non-retryable error', done => {
      // This test will emit two rows and then an error.
      const fakeCheckpointStream = through.obj();
      sandbox.stub(checkpointStream, 'obj').returns(fakeCheckpointStream);

      const fakeRequestStream = through.obj();

      const requestFnStub = sandbox.stub();

      requestFnStub.onCall(0).callsFake(() => {
        setTimeout(() => {
          fakeRequestStream.push(RESULT_WITH_TOKEN);
          fakeCheckpointStream.emit('checkpoint', RESULT_WITH_TOKEN);
          fakeRequestStream.push(RESULT_WITH_TOKEN);
          fakeCheckpointStream.emit('checkpoint', RESULT_WITH_TOKEN);

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
  });
});

function convertToIValue(value) {
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
