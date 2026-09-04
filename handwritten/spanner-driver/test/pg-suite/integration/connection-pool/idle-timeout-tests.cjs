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

new helper.Suite().test('idle timeout', async function () {
  const pool = new helper.pg.Pool({ idleTimeoutMillis: 50 })
  const client = await pool.connect()
  const res = await client.query('SELECT CURRENT_TIMESTAMP AS now')
  assert.ok(res.rows.length > 0)
  assert.strictEqual(pool.totalCount, 1)

  // Listen for client eviction when idle timer fires
  const removedPromise = new Promise((resolve) => {
    pool.once('remove', (removedClient) => {
      resolve(removedClient)
    })
  })

  // Return client to pool
  client.release()
  assert.strictEqual(pool.idleCount, 1)

  // Wait for idleTimeoutMillis (50ms) to evict the client
  const removedClient = await removedPromise
  assert.strictEqual(removedClient, client)
  assert.strictEqual(pool.totalCount, 0)
  assert.strictEqual(pool.idleCount, 0)

  await pool.end()
})
