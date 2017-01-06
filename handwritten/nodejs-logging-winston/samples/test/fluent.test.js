// Copyright 2015-2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

require(`../../test/_setup`);

const proxyquire = require(`proxyquire`).noPreserveCache();
const request = require(`supertest`);

test.cb(`should log error`, (t) => {
  let loggerCalled = false;

  const structuredLogger = {
    emit: (name) => {
      loggerCalled = true;
      t.is(name, `errors`);
    }
  };

  const app = proxyquire(`../fluent`, {
    'fluent-logger': {
      createFluentSender: (name, options) => {
        t.is(name, `myapp`);
        t.deepEqual(options, {
          host: `localhost`,
          port: 24224,
          timeout: 3.0
        });
        return structuredLogger;
      }
    }
  });

  request(app)
    .get(`/`)
    .expect(500)
    .expect(() => {
      t.true(loggerCalled, `structuredLogger.emit should have been called`);
    })
    .end(t.end);
});
