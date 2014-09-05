/**
 * Copyright 2014 Google Inc. All Rights Reserved.
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

var stream = require('stream');
var nodeutil = require('util');

/**
 * Readable stream implementation to stream the given buffer.
 *
 * @constructor
 *
 * @param {buffer} buffer - The buffer to stream.
 *
 * @private
 */
function BufferStream(buffer) {
  stream.Readable.call(this);
  this.data = buffer;
}

nodeutil.inherits(BufferStream, stream.Readable);

/**
 * Push the provided buffer to the stream.
 * @private
 */
BufferStream.prototype._read = function() {
  this.push(this.data);
  this.push(null);
};

module.exports = BufferStream;
