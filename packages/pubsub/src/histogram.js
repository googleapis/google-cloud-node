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

/*!
 * @module pubsub/histogram
 */

'use strict';

var MIN_VALUE = 10000;
var MAX_VALUE = 600000;

/**
 *
 */
function Histogram() {
  this.data = new Map();
  this.length = 0;
}

/**
 *
 */
Histogram.prototype.add = function(value) {
  value = Math.max(value, MIN_VALUE);
  value = Math.min(value, MAX_VALUE);
  value = Math.ceil(value / 1000) * 1000;

  if (!this.data.has(value)) {
    this.data.set(value, 0);
  }

  var count = this.data.get(value);
  this.data.set(value, count + 1);
  this.length += 1;
};

/**
 *
 */
Histogram.prototype.percentile = function(percent) {
  percent = Math.min(percent, 100);

  var target = this.length - (this.length * (percent / 100));
  var keys = Array.from(this.data.keys());
  var key;

  for (var i = keys.length - 1; i > -1; i--) {
    key = keys[i];
    target -= this.data.get(key);

    if (target <= 0) {
      return key;
    }
  }

  return MIN_VALUE;
};

module.exports = Histogram;
