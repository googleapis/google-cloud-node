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
const assert = require('assert')

const suite = new helper.Suite()

suite.test('connecting to non-existent database rejects with error', async () => {
  const pool = new pg.Pool({ database: 'non_existent_db_12345' })
  await assert.rejects(
    () => pool.connect(),
    /Database not found|NOT_FOUND|was not found/i
  )
  await pool.end()
})

suite.test('errors emitted on checked-out clients', async () => {
  const pool = new pg.Pool({ max: 2 })

  // 1. Checkout a client
  const client = await pool.connect()
  assert.strictEqual(pool.totalCount, 1)

  // 2. Set up listener to capture client error event
  const errorPromise = new Promise((resolve) => {
    client.once('error', (err) => resolve(err))
  })

  // 3. Emit error on checked-out client
  const networkError = new Error('simulated network drop')
  client.emit('error', networkError)
  const caughtError = await errorPromise
  assert.strictEqual(caughtError.message, 'simulated network drop')

  // 4. Release client with error -> destroys client instead of returning to idle pool
  await client.release(caughtError)
  assert.strictEqual(pool.totalCount, 0)

  // 5. Subsequent acquisition creates a fresh healthy client
  const client2 = await pool.connect()
  assert.strictEqual(pool.totalCount, 1)
  const res = await client2.query('SELECT 1 AS num')
  assert.strictEqual(res.rows[0].num, '1')
  client2.release()

  await pool.end()
})

suite.test('connection-level errors cause queued queries to fail', async () => {
  const pool = new pg.Pool()
  const client = await pool.connect()

  // Dispatch multiple queries so subsequent ones are queued behind in-flight execution
  const p1 = client.query('SELECT 1 AS num')
  const p2 = client.query('SELECT 2 AS num')
  const p3 = client.query('SELECT 3 AS num')

  // Abruptly close client while queries are queued
  await client.end()

  // Verify in-flight and queued queries are rejected with error
  const results = await Promise.allSettled([p1, p2, p3])
  const rejected = results.filter((r) => r.status === 'rejected')
  assert.ok(rejected.length > 0, 'queued queries must be rejected when client is closed')
  for (const r of rejected) {
    assert.match(
      r.reason.message,
      /Client was closed and is not queryable|Cannot connect: Client was already closed|Connection terminated|context canceled|57014|Canceled|connection \d+ not found/i
    )
  }

  await pool.end()
})

suite.test('connection-level errors cause future queries to fail', async () => {
  const pool = new pg.Pool()
  const client = await pool.connect()

  // Close the client
  await client.end()

  // Future queries on the closed client must reject immediately
  await assert.rejects(
    async () => {
      await client.query('SELECT 1 AS num')
    },
    /Client was closed and is not queryable|Cannot connect: Client was already closed/i
  )

  await pool.end()
})

suite.test('handles query error during pool.query and retains pool health', async () => {
  const pool = new pg.Pool({ max: 1 })
  await assert.rejects(
    async () => {
      await pool.query('INVALID SQL STATEMENT')
    },
    /Syntax error|INVALID_ARGUMENT/i
  )
  // Subsequent query executes cleanly on healthy client
  const res = await pool.query('SELECT 1 AS num')
  assert.strictEqual(res.rows[0].num, '1')
  await pool.end()
})
