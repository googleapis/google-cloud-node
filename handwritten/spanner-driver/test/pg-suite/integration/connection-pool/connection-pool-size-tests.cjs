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

const suite = new helper.Suite()

const testPoolSize = function (max) {
  suite.test(`test ${max} queries executed on a pool rapidly`, async () => {
    const pool = new helper.pg.Pool({ max: 10 })

    let count = 0

    return new Promise((resolve) => {
      for (let i = 0; i < max; i++) {
        pool.connect(function (err, client, release) {
          assert(!err)
          client.query('SELECT CURRENT_TIMESTAMP AS now')
          client.query('SELECT 1 AS num', function (err, result) {
            assert(!err)
            assert.strictEqual(result.rows.length, 1)
          })
          client.query('SELECT CURRENT_TIMESTAMP AS now', (err) => {
            assert(!err)
            release()
            if (++count === max) {
              resolve()
              pool.end()
            }
          })
        })
      }
    })
  })
}

testPoolSize(1)

testPoolSize(2)

testPoolSize(40)

testPoolSize(200)
