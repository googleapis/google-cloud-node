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
const { Client } = helper

const suite = new helper.Suite()

// clear process.env
const realEnv = {}
for (const key in process.env) {
  realEnv[key] = process.env[key]
  if (!key.indexOf('PG')) delete process.env[key]
}

// Cloud Spanner Note: libpq defaults (e.g. pg.defaults.user = process.env.USER) and dynamic property copying
// onto Client instance fields are PostgreSQL libpq specific.
// Cloud Spanner manages database connection options via GCP credentials, project, instance, and database parameters.

suite.skip('default values are used in new clients', function () {
  assert.same(pg.defaults, {
    user: process.env.USER,
    database: undefined,
    password: null,
    port: 5432,
    rows: 0,
    max: 10,
    binary: false,
    idleTimeoutMillis: 30000,
    client_encoding: '',
    ssl: false,
    application_name: undefined,
    fallback_application_name: undefined,
    parseInputDatesAsUTC: false,
  })

  const client = new pg.Client()
  assert.same(client, {
    user: process.env.USER,
    password: null,
    port: 5432,
    database: process.env.USER,
  })
})

suite.skip('modified values are passed to created clients', function () {
  pg.defaults.user = 'boom'
  pg.defaults.password = 'zap'
  pg.defaults.host = 'blam'
  pg.defaults.port = 1234
  pg.defaults.database = 'pow'

  const client = new Client()
  assert.same(client, {
    user: 'boom',
    password: 'zap',
    host: 'blam',
    port: 1234,
    database: 'pow',
  })
})

suite.skip('database defaults to user when user is non-default', () => {
  {
    pg.defaults.database = undefined

    const client = new Client({
      user: 'foo',
    })

    assert.strictEqual(client.database, 'foo')
  }

  {
    pg.defaults.database = 'bar'

    const client = new Client({
      user: 'foo',
    })

    assert.strictEqual(client.database, 'bar')
  }
})

suite.test('cleanup', () => {
  // restore process.env
  for (const key in realEnv) {
    process.env[key] = realEnv[key]
  }
})
