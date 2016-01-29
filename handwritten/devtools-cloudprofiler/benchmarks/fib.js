/**
 * Copyright 2015 Google Inc. All Rights Reserved.
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

function fib(n) {
  if (n < 2) {
    return n;
  } else {
    var t1 = fib(n - 1);
    var t2 = fib(n - 2);
    return t1 + t2;
  }
}

// called from top level
fib(30);

// should show up with a different stack depth
(function() { fib(30); })();
