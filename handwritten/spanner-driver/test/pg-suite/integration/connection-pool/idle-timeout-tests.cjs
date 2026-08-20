// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict'
const helper = require('../../test-helper.cjs')
const assert = require('assert')

new helper.Suite().test('idle timeout', function () {
  const config = Object.assign({}, helper.config, { idleTimeoutMillis: 50 })
  const pool = new helper.pg.Pool(config)
  pool.connect(
    assert.calls(function (err, client, done) {
      assert(!err)
      client.query('SELECT NOW()')
      done()
    })
  )
})
