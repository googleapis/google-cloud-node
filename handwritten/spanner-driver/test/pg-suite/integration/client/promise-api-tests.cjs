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

suite.test('valid connection completes promise', () => {
  const client = new pg.Client()
  return client.connect().then(() => {
    return client.end().then(() => {})
  })
})

suite.test('valid connection returns the client in a promise', () => {
  const client = new pg.Client()
  return client.connect().then((clientInside) => {
    assert.equal(client, clientInside)
    return client.end().then(() => {})
  })
})

suite.test('invalid connection rejects promise', async () => {
  const client = new pg.Client({ database: 'non_existent_db_12345' })
  await assert.rejects(async () => {
    await client.connect()
    await client.query('SELECT 1')
  }, Error)
})
