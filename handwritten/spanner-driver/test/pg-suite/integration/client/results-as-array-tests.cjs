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

suite.test('returns results as array', async function () {
  const client = new Client()
  await client.connect()

  const config = {
    text: 'SELECT CURRENT_TIMESTAMP, 1 as num, $1::text, null',
    values: ['hai'],
    rowMode: 'array',
  }
  const result = await client.query(config)
  assert.strictEqual(result.rows.length, 1)

  const row = result.rows[0]
  assert(Array.isArray(row), 'row should be an array')
  assert.strictEqual(row.length, 4)
  assert.strictEqual(row[0].getFullYear(), new Date().getFullYear())
  assert.strictEqual(row[1], '1')
  assert.strictEqual(row[2], 'hai')
  assert.strictEqual(row[3], null)

  await client.end()
})
