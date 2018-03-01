/**
 * Copyright 2018 Google Inc. All Rights Reserved.
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

const startTime = Date.now();

/**
 * Repeatedly fills a buffer, then calls itself with setImmediate.
 * It continues to do this until durationSeconds after the startTime.
 */
function benchmark(durationSeconds) {
  var buffer = new Buffer(1e4);
  for (var k = 0; k < 1e4; k++) {
    buffer.fill(0);
  }
  if (Date.now() - startTime < 1000 * durationSeconds) {
    setImmediate(() => benchmark(durationSeconds));
  }
}

const durationSeconds = process.argv.length > 2 ? process.argv[2] : 600; 
benchmark(durationSeconds);
