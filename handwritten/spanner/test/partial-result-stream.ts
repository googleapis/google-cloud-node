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
        assert.deepStrictEqual(row, EXPECTED_ROW);
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
