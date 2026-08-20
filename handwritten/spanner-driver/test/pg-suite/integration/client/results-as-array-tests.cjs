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

const Client = helper.Client

const conInfo = helper.config

suite.test('returns results as array', function () {
  const client = new Client(conInfo)
  const checkRow = function (row) {
    assert(Array.isArray(row), 'row should be an array')
    assert.equal(row.length, 4)
    assert.equal(row[0].getFullYear(), new Date().getFullYear())
    assert.strictEqual(row[1], 1)
    assert.strictEqual(row[2], 'hai')
    assert.strictEqual(row[3], null)
  }
  client.connect(
    assert.success(function () {
      const config = {
        text: 'SELECT NOW(), 1::int, $1::text, null',
        values: ['hai'],
        rowMode: 'array',
      }
      client.query(
        config,
        assert.success(function (result) {
          assert.equal(result.rows.length, 1)
          checkRow(result.rows[0])
          client.end()
        })
      )
    })
  )
})
