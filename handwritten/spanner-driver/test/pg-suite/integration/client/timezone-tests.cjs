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

const oldTz = process.env.TZ
process.env.TZ = 'Europe/Berlin'

const date = new Date()

const pool = new helper.pg.Pool()
const suite = new helper.Suite()

pool.connect(function (err, client, done) {
  assert(!err)

  // Cloud Spanner PostgreSQL dialect only supports TIMESTAMPTZ (TIMESTAMP WITH TIME ZONE).
  // TIMESTAMP WITHOUT TIME ZONE is explicitly unsupported by Cloud Spanner.
  suite.skip('timestamp without time zone', function (cb) {
    client.query('SELECT CAST($1 AS TIMESTAMP WITHOUT TIME ZONE) AS "val"', [date], function (err, result) {
      assert(!err)
      assert.equal(result.rows[0].val.getTime(), date.getTime())
      cb()
    })
  })

  suite.test('timestamp with time zone', function (cb) {
    client.query('SELECT CAST($1 AS TIMESTAMP WITH TIME ZONE) AS "val"', [date], function (err, result) {
      assert(!err)
      assert.equal(result.rows[0].val.getTime(), date.getTime())
      cb()
    })
  })

  suite.test('date comes out as a date', async function () {
    const { rows } = await client.query('SELECT CURRENT_DATE AS date')
    assert(rows[0].date)
  })

  suite.test('timestamp with time zone end', function (cb) {
    client.query('SELECT CAST($1 AS TIMESTAMP WITH TIME ZONE) AS "val"', [date], function (err, result) {
      assert(!err)
      assert.equal(result.rows[0].val.getTime(), date.getTime())

      done()
      pool.end(cb)
      process.env.TZ = oldTz
    })
  })
})
