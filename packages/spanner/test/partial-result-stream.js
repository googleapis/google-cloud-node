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

'use strict';

var assert = require('assert');
var checkpointStream = require('checkpoint-stream');
var concat = require('concat-stream');
var extend = require('extend');
var proxyquire = require('proxyquire');
var through = require('through2');
var util = require('@google-cloud/common').util;

var codec = require('../src/codec.js');

var decodeValueOverride;
var fakeCodec = extend({}, codec);
fakeCodec.decode = function() {
  return (decodeValueOverride || codec.decode).apply(null, arguments);
};

var checkpointStreamOverride;
function fakeCheckpointStream() {}
fakeCheckpointStream.obj = function() {
  return (checkpointStreamOverride || checkpointStream.obj)
    .apply(null, arguments);
};

var FakeRowBuilderOverrides = {};
function FakeRowBuilder() {
  this.calledWith_ = arguments;
}

FakeRowBuilder.prototype.build = function() {
  if (!FakeRowBuilderOverrides.build) {
    return this;
  }
  return FakeRowBuilderOverrides.build.apply(this, arguments);
};

FakeRowBuilder.prototype.toJSON = function() {
  if (!FakeRowBuilderOverrides.toJSON) {
    return this;
  }
  return FakeRowBuilderOverrides.toJSON.apply(this, arguments);
};

describe('PartialResultStream', function() {
  var partialResultStreamModule;
  var partialResultStreamCached;

  var fakeRequestStream;
  var partialResultStream;

  var RESULT_WITH_TOKEN = {
    resumeToken: '...',
    values: [
      {}
    ]
  };
  var RESULT_WITHOUT_TOKEN = {
    values: [
      {}
    ]
  };
  var RESULT_WITHOUT_VALUE = {
    resumeToken: '...',
    values: []
  };

  before(function() {
    partialResultStreamModule = proxyquire('../src/partial-result-stream.js', {
      'checkpoint-stream': fakeCheckpointStream,
      './codec.js': fakeCodec,
      './row-builder.js': FakeRowBuilder
    });
    partialResultStreamCached = extend({}, partialResultStreamModule);
  });

  beforeEach(function() {
    FakeRowBuilderOverrides = {};
    checkpointStreamOverride = null;
    decodeValueOverride = null;
    fakeRequestStream = through.obj();

    extend(partialResultStreamModule, partialResultStreamCached);

    partialResultStream = partialResultStreamModule(function() {
      return fakeRequestStream;
    });
  });

  describe('stream', function() {
    beforeEach(function() {
      partialResultStreamModule.formatRow_ = function(row) {
        return row;
      };
    });

    it('should only push rows when there is a token', function(done) {
      var eventsEmitted = 0;

      function assertDoesNotEmit() {
        done(); // will cause test to fail
      }

      function assertDoesEmit(row) {
        eventsEmitted++;

        if (eventsEmitted < 3) {
          assert.strictEqual(row, RESULT_WITHOUT_TOKEN);
        } else {
          assert.strictEqual(row, RESULT_WITH_TOKEN);
          done();
        }
      }

      partialResultStream.on('data', assertDoesNotEmit);
      fakeRequestStream.push(RESULT_WITHOUT_TOKEN);
      fakeRequestStream.push(RESULT_WITHOUT_TOKEN);
      partialResultStream.removeListener('data', assertDoesNotEmit);

      partialResultStream.on('data', assertDoesEmit);
      fakeRequestStream.push(RESULT_WITH_TOKEN);
      fakeRequestStream.push(null);
    });

    it('should effectively skip rows without values', function(done) {
      fakeRequestStream.push(RESULT_WITHOUT_VALUE);
      fakeRequestStream.push(null);

      partialResultStream
        .on('error', done)
        .pipe(concat(function(rows) {
          assert.strictEqual(rows.length, 0);
          done();
        }));
    });

    it('should not queue more than 10 results', function(done) {
      for (var i = 0; i < 11; i += 1) {
        fakeRequestStream.push(RESULT_WITHOUT_TOKEN);
      }
      fakeRequestStream.push(null);

      partialResultStream
        .on('error', done)
        .pipe(concat(function(rows) {
          assert.strictEqual(rows.length, 11);
          done();
        }));
    });

    it('should run chunks through RowBuilder', function(done) {
      var chunks = [
        extend({ chunkedValue: true }, RESULT_WITHOUT_TOKEN),
        RESULT_WITH_TOKEN
      ];

      var builtRow = {};

      FakeRowBuilderOverrides.toJSON = function() {
        assert.deepEqual(this.calledWith_[0], chunks);
        return builtRow;
      };

      fakeRequestStream.push(chunks[0]);
      fakeRequestStream.push(chunks[1]);
      fakeRequestStream.push(null);

      partialResultStream
        .on('error', done)
        .pipe(concat(function(rows) {
          assert.strictEqual(rows[0], builtRow);
          done();
        }));
    });

    it('should return the formatted row', function(done) {
      var formattedRow = {};

      partialResultStreamModule.formatRow_ = function(row) {
        assert.strictEqual(row, RESULT_WITH_TOKEN);
        return formattedRow;
      };

      fakeRequestStream.push(RESULT_WITH_TOKEN);
      fakeRequestStream.push(null);

      partialResultStream
        .on('error', done)
        .pipe(concat(function(rows) {
          assert.strictEqual(rows[0], formattedRow);
          done();
        }));
    });

    it('should separately emit formatted rows', function(done) {
      var formattedRows = [
        {},
        {}
      ];

      partialResultStreamModule.formatRow_ = function() {
        return formattedRows;
      };

      fakeRequestStream.push(RESULT_WITH_TOKEN);
      fakeRequestStream.push(null);

      partialResultStream
        .on('error', done)
        .pipe(concat(function(rows) {
          assert.strictEqual(rows[0], formattedRows[0]);
          assert.strictEqual(rows[1], formattedRows[1]);
          done();
        }));
    });

    it('should correctly handle multiple rows', function(done) {
      var formattedRows = [[
        {},
        {}
      ]];

      partialResultStreamModule.formatRow_ = function() {
        return formattedRows;
      };

      fakeRequestStream.push(RESULT_WITH_TOKEN);
      fakeRequestStream.push(null);

      partialResultStream
        .on('error', done)
        .pipe(concat(function(rows) {
          assert.strictEqual(rows[0], formattedRows[0][0]);
          assert.strictEqual(rows[1], formattedRows[0][1]);
          done();
        }));
    });

    it('should resume if there was an error', function(done) {
      // This test will emit four rows total:
      // - Two rows
      // - Error event (should retry)
      // - Two rows
      // - Confirm all rows were received.

      var fakeCheckpointStream = through.obj();
      fakeCheckpointStream.reset = util.noop;
      checkpointStreamOverride = function() {
        return fakeCheckpointStream;
      };

      var firstFakeRequestStream = through.obj();
      var secondFakeRequestStream = through.obj();

      var numTimesRequestFnCalled = 0;

      function requestFn(resumeToken) {
        numTimesRequestFnCalled++;

        if (numTimesRequestFnCalled === 1) {
          setTimeout(function() {
            firstFakeRequestStream.push(RESULT_WITH_TOKEN);
            fakeCheckpointStream.emit('checkpoint', RESULT_WITH_TOKEN);
            firstFakeRequestStream.push(RESULT_WITH_TOKEN);
            fakeCheckpointStream.emit('checkpoint', RESULT_WITH_TOKEN);

            setTimeout(function() {
              // This causes a new request stream to be created.
              firstFakeRequestStream.emit('error', new Error('Error.'));
              firstFakeRequestStream.end();
            }, 50);
          }, 50);

          return firstFakeRequestStream;
        }

        if (numTimesRequestFnCalled === 2) {
          assert.strictEqual(resumeToken, RESULT_WITH_TOKEN.resumeToken);

          setTimeout(function() {
            secondFakeRequestStream.push(RESULT_WITH_TOKEN);
            fakeCheckpointStream.emit('checkpoint', RESULT_WITH_TOKEN);
            secondFakeRequestStream.push(RESULT_WITH_TOKEN);
            fakeCheckpointStream.emit('checkpoint', RESULT_WITH_TOKEN);

            secondFakeRequestStream.end();
          }, 500);

          return secondFakeRequestStream;
        }
      }

      partialResultStreamModule(requestFn)
        .on('error', done)
        .pipe(concat(function(rows) {
          assert.strictEqual(rows.length, 4);
          done();
        }));
    });

    it('should emit rows and error when there is no token', function(done) {
      var error = new Error('Error.');

      var eventsEmitted = 0;

      partialResultStream
        .on('data', function(row) {
          eventsEmitted++;
          assert.strictEqual(row, RESULT_WITHOUT_TOKEN);
        })
        .on('error', function(err) {
          assert.strictEqual(eventsEmitted, 3);
          assert.strictEqual(err, error);
          done();
        });

      // No rows with tokens were emitted, so this should destroy the stream.
      fakeRequestStream.push(RESULT_WITHOUT_TOKEN);
      fakeRequestStream.push(RESULT_WITHOUT_TOKEN);
      fakeRequestStream.push(RESULT_WITHOUT_TOKEN);
      fakeRequestStream.destroy(error);
    });

    it('should let user abort request', function(done) {
      fakeRequestStream.abort = function() {
        done();
      };

      var partialResultStream = partialResultStreamModule(function() {
        return fakeRequestStream;
      });

      partialResultStream.emit('reading');
      partialResultStream.abort();
    });

    it('should silently no-op abort if no active request', function(done) {
      // If no request is ever made, then there should be no active
      // stream to be aborted.
      fakeRequestStream.abort = function() {
        done(new Error('No request ever made; nothing to abort.'));
      };

      // Create a partial result stream and then abort it, without
      // ever sending a request.
      var partialResultStream = partialResultStreamModule(function() {
        return fakeRequestStream;
      });
      partialResultStream.abort();
      done();
    });

    it('should let user abort the most recent request', function(done) {
      fakeRequestStream.abort = function() {
        done(new Error('Wrong stream was aborted.'));
      };

      var secondFakeRequestStream = through.obj();
      secondFakeRequestStream.abort = function() {
        done(); // this is the one we want to call
      };

      var numTimesRequestFnCalled = 0;

      var partialResultStream = partialResultStreamModule(function() {
        numTimesRequestFnCalled++;

        if (numTimesRequestFnCalled === 1) {
          return fakeRequestStream;
        }

        if (numTimesRequestFnCalled === 2) {
          setImmediate(function() {
            partialResultStream.abort();
          });
          return secondFakeRequestStream;
        }
      });

      partialResultStream.emit('reading');

      // Destroy the stream to trigger a new request stream to be created.
      partialResultStream.on('error', util.noop);
      fakeRequestStream.push(RESULT_WITH_TOKEN);
      fakeRequestStream.destroy(new Error('Error.'));
    });
  });


  describe('formatRow_', function() {
    var FIELDS = [
      {
        name: 'field-1'
      },
      {
        name: 'field-2'
      }
    ];

    var VALUES = [
      'value-1',
      'value-2'
    ];

    var ROW = {
      metadata: {
        rowType: {
          fields: FIELDS
        }
      },
      values: VALUES
    };

    it('should omit rows from JSON representation with no name', function() {
      // Define the second field to have no name.
      var row = {
        metadata: {rowType: {fields: [
          {name: 'field-1'}, {}
        ]}},
        values: ['value-1', 'value-2'],
      };
      // Override our `decode` function to pass through the value.
      decodeValueOverride = function(value) {
        return value;
      };

      // Format the row.
      var formattedRows = partialResultStreamModule.formatRow_(row);

      // Both fields should exist in the formattedRows array.
      assert.strictEqual(formattedRows.length, 2);
      assert.strictEqual(formattedRows[0].value, 'value-1');
      assert.strictEqual(formattedRows[1].value, 'value-2');

      // Only the field with a name should exist in the JSON serialization.
      assert.deepEqual(formattedRows.toJSON(), {'field-1': 'value-1'});
    });

    it('should chunk rows with more values than fields', function() {
      decodeValueOverride = function(value) {
        return value;
      };

      var row = extend({}, ROW);
      row.values = row.values.concat(row.values);

      var formattedRows = partialResultStreamModule.formatRow_(row);

      assert.deepEqual(formattedRows[0], [
        {
          name: 'field-1',
          value: 'value-1'
        },
        {
          name: 'field-2',
          value: 'value-2'
        }
      ]);

      assert.deepEqual(formattedRows[1], [
        {
          name: 'field-1',
          value: 'value-1'
        },
        {
          name: 'field-2',
          value: 'value-2'
        }
      ]);
    });

    it('should decode values and return a formatted object', function() {
      var decodedValues = [
        'decoded-value-1',
        'decoded-value-2'
      ];

      var numTimesDecodeValueCalled = 0;
      decodeValueOverride = function(value) {
        numTimesDecodeValueCalled++;

        if (numTimesDecodeValueCalled === 1) {
          assert.strictEqual(value, VALUES[0]);
          return decodedValues[0];
        }

        if (numTimesDecodeValueCalled === 2) {
          assert.strictEqual(value, VALUES[1]);
          return decodedValues[1];
        }
      };

      var formattedRow = partialResultStreamModule.formatRow_(ROW);

      assert.deepEqual(formattedRow, [
        {
          name: 'field-1',
          value: decodedValues[0]
        },
        {
          name: 'field-2',
          value: decodedValues[1]
        }
      ]);

      assert.deepEqual(formattedRow.toJSON(), {
        'field-1': decodedValues[0],
        'field-2': decodedValues[1]
      });
    });
  });
});
