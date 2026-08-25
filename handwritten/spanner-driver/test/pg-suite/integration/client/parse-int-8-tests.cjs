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
const pg = helper.pg
const suite = new helper.Suite()
const assert = require('assert')

const pool = new pg.Pool(helper.config)
suite.test('ability to turn on and off parser', async function () {
  const pool = new pg.Pool()
  const client = await pool.connect()

  // 1. By default, INT8 returns string
  const res1 = await client.query('SELECT 100::bigint as count, ARRAY[1, 2, 3]::bigint[] as array')
  assert.strictEqual(res1.rows[0].count, '100')
  assert.strictEqual(res1.rows[0].array[0], '1')
  assert.strictEqual(res1.rows[0].array[1], '2')
  assert.strictEqual(res1.rows[0].array[2], '3')

  // 2. Configure INT8 parser to return Number
  pg.types.setTypeParser(20, (val) => parseInt(val, 10))
  const res2 = await client.query('SELECT 100::bigint as count')
  assert.strictEqual(res2.rows[0].count, 100)

  // 3. Reset INT8 parser back to default string
  pg.types.setTypeParser(20, (val) => val)
  const res3 = await client.query('SELECT 100::bigint as count')
  assert.strictEqual(res3.rows[0].count, '100')

  client.release()
  await pool.end()
})
