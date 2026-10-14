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
const assert = require('assert')

// Cloud Spanner Note: Cloud Spanner requires a non-empty SQL query string.
// spanner-driver enforces this client-side and returns/rejects with 'Query text must be a non-empty string'.

suite.test('callback receives error for empty query', async function () {
  const client = new helper.Client()
  await client.connect()
  return new Promise((resolve) => {
    client.query('', function (err, result) {
      assert(err, 'expected error for empty query string')
      assert(err.message.includes('Query text must be a non-empty string'))
      assert.strictEqual(result, undefined)
      client.end(resolve)
    })
  })
})

suite.test('promise rejects for empty query', async function () {
  const client = new helper.Client()
  await client.connect()
  await assert.rejects(
    () => client.query(''),
    /Query text must be a non-empty string/
  )
  await client.end()
})
