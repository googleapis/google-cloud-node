/**
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

var Histogram = require('../src/histogram.js');

describe('Histogram', function() {
  var histogram;

  var MIN_VALUE = 10000;
  var MAX_VALUE = 600000;

  beforeEach(function() {
    histogram = new Histogram();
  });

  describe('initialization', function() {
    it('should create a data map', function() {
      assert(histogram.data instanceof Map);
    });

    it('should set the initial length to 0', function() {
      assert.strictEqual(histogram.length, 0);
    });
  });

  describe('add', function() {
    it('increment a value', function() {
      histogram.data.set(MIN_VALUE, 1);
      histogram.add(MIN_VALUE);

      assert.strictEqual(histogram.data.get(MIN_VALUE), 2);
    });

    it('should initialize a value if absent', function() {
      histogram.add(MIN_VALUE);

      assert.strictEqual(histogram.data.get(MIN_VALUE), 1);
    });

    it('should adjust the length for each item added', function() {
      histogram.add(MIN_VALUE);
      histogram.add(MIN_VALUE);
      histogram.add(MIN_VALUE * 2);

      assert.strictEqual(histogram.length, 3);
    });

    it('should cap the value', function() {
      var outOfBounds = MAX_VALUE + MIN_VALUE;

      histogram.add(outOfBounds);

      assert.strictEqual(histogram.data.get(outOfBounds), undefined);
      assert.strictEqual(histogram.data.get(MAX_VALUE), 1);
    });

    it('should apply a minimum', function() {
      var outOfBounds = MIN_VALUE - 1000;

      histogram.add(outOfBounds);

      assert.strictEqual(histogram.data.get(outOfBounds), undefined);
      assert.strictEqual(histogram.data.get(MIN_VALUE), 1);
    });

    it('should use seconds level precision', function() {
      var ms = 303823;
      var expected = 304000;

      histogram.add(ms);

      assert.strictEqual(histogram.data.get(ms), undefined);
      assert.strictEqual(histogram.data.get(expected), 1);
    });
  });

  describe('percentile', function() {
    function range(a, b) {
      var result = [];

      for (; a < b; a++) {
        result.push(a);
      }

      return result;
    }

    it('should return the nth percentile', function() {
      range(100, 201).forEach(function(value) {
        histogram.add(value * 1000);
      });

      assert.strictEqual(histogram.percentile(100), 200000);
      assert.strictEqual(histogram.percentile(101), 200000);
      assert.strictEqual(histogram.percentile(99), 199000);
      assert.strictEqual(histogram.percentile(1), 101000);
    });

    it('should return the min value if unable to determine', function() {
      assert.strictEqual(histogram.percentile(99), MIN_VALUE);
    });
  });
});
