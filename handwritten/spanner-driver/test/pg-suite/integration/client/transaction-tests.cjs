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
const suite = new helper.Suite()
const pg = helper.pg
const assert = require('assert')

suite.test('transactions', async function () {
  const client = new pg.Client()
  await client.connect()
  await helper.createPersonTable(client)

  await client.query('begin')

  const getZed = {
    text: 'SELECT * FROM person WHERE name = $1',
    values: ['Zed'],
  }

  // name should not exist
  const r1 = await client.query(getZed)
  assert.empty(r1.rows)

  // insert name
  await client.query('INSERT INTO person(name, age) VALUES($1, $2)', ['Zed', 270])

  // name should exist
  const r2 = await client.query(getZed)
  assert.equal(r2.rows[0].name, 'Zed')

  // rollback
  await client.query('rollback')

  // name should not exist after rollback
  const r3 = await client.query(getZed)
  assert.empty(r3.rows)

  await client.end()
})

suite.test('gh#36', function (cb) {
  const pool = new pg.Pool()
  pool.connect(
    assert.success(function (client, done) {
      client.query('BEGIN')
      client.query(
        {
          name: 'X',
          text: 'SELECT $1::INTEGER',
          values: [0],
        },
        assert.calls(function (err, result) {
          if (err) throw err
          assert.equal(result.rows.length, 1)
        })
      )
      client.query(
        {
          name: 'X',
          text: 'SELECT $1::INTEGER',
          values: [0],
        },
        assert.calls(function (err, result) {
          if (err) throw err
          assert.equal(result.rows.length, 1)
        })
      )
      client.query('COMMIT', function () {
        done()
        pool.end(cb)
      })
    })
  )
})
