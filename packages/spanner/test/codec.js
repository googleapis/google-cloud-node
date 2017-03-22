/*!
 * Copyright 2017 Google Inc. All Rights Reserved.
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
var extend = require('extend');
var proxyquire = require('proxyquire');
var util = require('@google-cloud/common').util;

function FakeGrpcService() {}

describe('codec', function() {
  var codecCached;
  var codec;

  before(function() {
    codec = proxyquire('../src/codec.js', {
      '@google-cloud/common-grpc': {
        Service: FakeGrpcService
      }
    });
    codecCached = extend({}, codec);
  });

  beforeEach(function() {
    extend(codec, codecCached);
    FakeGrpcService.encodeValue_ = util.noop;
    FakeGrpcService.decodeValue_ = util.noop;
  });

  describe('SpannerDate', function() {
    it('should choke on multiple arguments', function() {
      var expectedErrorMessage = [
        'The spanner.date function accepts a Date object or a',
        'single argument parseable by Date\'s constructor.'
      ].join(' ');

      assert.throws(function() {
        new codec.SpannerDate(2012, 3, 21);
      }, new RegExp(expectedErrorMessage));
    });

    it('should create an instance from a string', function() {
      var spannerDate = new codec.SpannerDate('08-20-1969');
      assert.strictEqual(spannerDate.value, '1969-08-20');
    });

    it('should create an instance from a Date object', function() {
      var date = new Date();
      var spannerDate = new codec.SpannerDate(date);
      assert.strictEqual(spannerDate.value, date.toJSON().replace(/T.+/, ''));
    });
  });

  describe('Float', function() {
    it('should store the value', function() {
      var value = 8;
      var float = new codec.Float(value);

      assert.strictEqual(float.value, value);
    });

    it('should return as a float', function() {
      var value = '8.2';
      var float = new codec.Float(value);

      assert.strictEqual(float.valueOf(), parseFloat(value));
      assert.strictEqual(float + 2, parseFloat(value) + 2);
    });
  });

  describe('Int', function() {
    it('should stringify the value', function() {
      var value = 8;
      var int = new codec.Int(value);

      assert.strictEqual(int.value, '8');
    });

    it('should return as a number', function() {
      var value = 8;
      var int = new codec.Int(value);

      assert.strictEqual(int.valueOf(), 8);
      assert.strictEqual(int + 2, 10);
    });

    it('should throw if number is out of bounds', function() {
      var value = '9223372036854775807';
      var int = new codec.Int(value);

      assert.throws(function() {
        int.valueOf();
      }, new RegExp('Integer ' + value + ' is out of bounds.'));
    });
  });

  describe('decode', function() {
    // Does not require any special decoding.
    var BYPASS_FIELD = {
      type: {
        code: 'not-real-code'
      }
    };

    beforeEach(function() {
      FakeGrpcService.decodeValue_ = function(value) {
        return value;
      };
    });

    it('should return the value from the common decoder', function() {
      var value = {};
      var defaultDecodedValue = {};

      FakeGrpcService.decodeValue_ = function(value_) {
        assert.strictEqual(value_, value);
        return defaultDecodedValue;
      };

      var decoded = codec.decode(value, BYPASS_FIELD);
      assert.strictEqual(decoded, defaultDecodedValue);
    });

    it('should return null values as null', function() {
      FakeGrpcService.decodeValue_ = function() {
        return null;
      };

      var decoded = codec.decode(null, BYPASS_FIELD);
      assert.strictEqual(decoded, null);
    });

    it('should decode BYTES', function() {
      var value = new Buffer('bytes value');

      var decoded = codec.decode(value.toString('base64'), {
        type: {
          code: 'BYTES'
        }
      });

      assert.deepEqual(decoded, new Buffer(value, 'base64'));
    });

    it('should decode FLOAT64', function() {
      var value = 'Infinity';

      var decoded = codec.decode(value, {
        type: {
          code: 'FLOAT64'
        }
      });

      assert(decoded instanceof codec.Float);
      assert.strictEqual(decoded.value, value);
    });

    it('should decode INT64', function() {
      var value = '64';

      var decoded = codec.decode(value, {
        type: {
          code: 'INT64'
        }
      });

      assert(decoded instanceof codec.Int);
      assert.strictEqual(decoded.value, value);
    });

    it('should decode TIMESTAMP', function() {
      var value = new Date();

      var decoded = codec.decode(value.toJSON(), {
        type: {
          code: 'TIMESTAMP'
        }
      });

      assert.deepEqual(decoded, value);
    });

    it('should decode DATE', function() {
      var value = new Date();

      var decoded = codec.decode(value.toJSON(), {
        type: {
          code: 'DATE'
        }
      });

      assert.deepEqual(decoded, value);
    });

    it('should decode ARRAY and inner members', function() {
      var value = ['1'];

      var decoded = codec.decode(value, {
        type: {
          code: 'ARRAY',
          arrayElementType: {
            code: 'INT64'
          }
        }
      });

      assert(decoded[0] instanceof codec.Int);
    });

    it('should decode STRUCT and inner members', function() {
      var value = {
        fieldName: '1'
      };

      var int = { int: true };
      codec.Int = function(value_) {
        assert.strictEqual(value_, value.fieldName);
        return int;
      };

      var decoded = codec.decode(value, {
        type: {
          code: 'STRUCT',
          structType: {
            fields: [
              {
                name: 'fieldName',
                type: {
                  code: 'INT64'
                }
              }
            ]
          }
        }
      });

      assert.deepEqual(decoded, [
        {
          name: 'fieldName',
          value: int
        }
      ]);

      assert.deepEqual(decoded.toJSON(), {
        fieldName: int
      });
    });

    it('should decode STRUCT and inner members by index', function() {
      var value = [
        '1'
      ];

      var int = { int: true };
      codec.Int = function(value_) {
        assert.strictEqual(value_, value[0]);
        return int;
      };

      var decoded = codec.decode(value, {
        type: {
          code: 'STRUCT',
          structType: {
            fields: [
              {
                name: 'fieldName',
                type: {
                  code: 'INT64'
                }
              }
            ]
          }
        }
      });

      assert.deepEqual(decoded, [
        {
          name: 'fieldName',
          value: int
        }
      ]);

      assert.deepEqual(decoded.toJSON(), {
        fieldName: int
      });
    });
  });

  describe('encode', function() {
    beforeEach(function() {
      FakeGrpcService.encodeValue_ = function(value) {
        return value;
      };
    });

    it('should return the value from the common encoder', function() {
      var value = {};
      var defaultEncodedValue = {};

      FakeGrpcService.encodeValue_ = function(value_) {
        assert.strictEqual(value_, value);
        return defaultEncodedValue;
      };

      var encoded = codec.encode(value);
      assert.strictEqual(encoded, defaultEncodedValue);
    });

    it('should encode BYTES', function() {
      var value = new Buffer('bytes value');

      var encoded = codec.encode(value);

      assert.strictEqual(encoded, value.toString('base64'));
    });

    it('should stringify Infinity', function() {
      var value = Infinity;

      var encoded = codec.encode(value);

      assert.strictEqual(encoded, value.toString());
    });

    it('should stringify -Infinity', function() {
      var value = -Infinity;

      var encoded = codec.encode(value);

      assert.strictEqual(encoded, value.toString());
    });

    it('should stringify NaN', function() {
      var value = NaN;

      var encoded = codec.encode(value);

      assert.strictEqual(encoded, value.toString());
    });

    it('should stringify INT64', function() {
      var value = 5;

      var encoded = codec.encode(value);

      assert.strictEqual(encoded, value.toString());
    });

    it('should encode ARRAY and inner members', function() {
      var value = [
        5
      ];

      var encoded = codec.encode(value);

      assert.deepEqual(encoded, [
        value.toString() // (tests that it is stringified)
      ]);
    });

    it('should encode TIMESTAMP', function() {
      var value = new Date();

      var encoded = codec.encode(value);

      assert.strictEqual(encoded, value.toJSON());
    });

    it('should encode DATE', function() {
      var value = new codec.SpannerDate();

      var encoded = codec.encode(value);

      assert.strictEqual(encoded, value.value);
    });

    it('should encode INT64', function() {
      var value = new codec.Int(10);

      var encoded = codec.encode(value);

      assert.strictEqual(encoded, '10');
    });

    it('should encode FLOAT64', function() {
      var value = new codec.Float(10);

      var encoded = codec.encode(value);

      assert.strictEqual(encoded, 10);
    });
  });
});
