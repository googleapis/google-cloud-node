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
const testArr = [];

/**
 * Fills several arrays, then calls itself with setImmediate.
 * It continues to do this until durationSeconds after the startTime.
 */
function busyLoop(durationSeconds) {
  for (let i = 0; i < testArr.length; i++) {
    for (let j = 0; j < testArr[i].length; j++) {
      testArr[i][j] = Math.sqrt(j * testArr[i][j]);
    }
  }
  if (Date.now() - startTime < 1000 * durationSeconds) {
    setTimeout(() => busyLoop(durationSeconds), 5);
  }
}

function benchmark(durationSeconds) {
  // Allocate 16 MiB in 64 KiB chunks.
  for (let i = 0; i < 16*16; i++) {
    testArr[i] = new Array(64 * 1024);
  }
  busyLoop(durationSeconds)
}

const durationSeconds = process.argv.length > 2 ? process.argv[2] : 600; 
setTimeout(()=>benchmark(durationSeconds), 1000);