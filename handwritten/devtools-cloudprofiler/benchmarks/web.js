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

var http = require('http');
var cp = require('child_process');

var server = http.createServer(function handler(req, res) {
  res.end(new Array(100).join(','));
});

server.listen(8080, function listened() {
  cp.spawn('ab', [ '-n', '110000', '-c', '10', 'http://127.0.0.1:8080/' ])
      .on('close', function closer() { server.close(); });
});
