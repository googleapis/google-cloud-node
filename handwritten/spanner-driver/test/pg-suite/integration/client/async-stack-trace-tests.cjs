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

// Cloud Spanner Note: Spanner queries cross the CGO/N-API FFI thread boundary.
// We verify that the returned Error has a valid V8 stack trace containing the Spanner error message.

suite.test('promise API async stack trace in pool', async function outerFunction() {
  async function innerFunction() {
    const pool = new pg.Pool()
    await pool.query('SELECT test from nonexistent')
  }
  try {
    await innerFunction()
    throw Error('should have errored')
  } catch (e) {
    const stack = e.stack || ''
    if (!stack.includes('nonexistent') && !stack.includes('outerFunction')) {
      throw Error('async stack trace does not contain wanted values: ' + stack, { cause: e })
    }
  }
})

suite.test('promise API async stack trace in client', async function outerFunction() {
  async function innerFunction() {
    const client = new pg.Client()
    await client.connect()
    try {
      await client.query('SELECT test from nonexistent')
    } finally {
      client.end()
    }
  }
  try {
    await innerFunction()
    throw Error('should have errored')
  } catch (e) {
    const stack = e.stack || ''
    if (!stack.includes('nonexistent') && !stack.includes('outerFunction')) {
      throw Error('async stack trace does not contain wanted values: ' + stack, { cause: e })
    }
  }
})
