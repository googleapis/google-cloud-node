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

suite.test('promise API', (cb) => {
  const pool = new pg.Pool()
  pool.connect().then((client) => {
    client
      .query('SELECT $1::text as name', ['foo'])
      .then(function (result) {
        assert.equal(result.rows[0].name, 'foo')
        return client
      })
      .then(function (client) {
        client.query('ALKJSDF').catch(function (e) {
          assert(e instanceof Error)
          client.query('SELECT 1 as num').then(function (result) {
            assert.equal(result.rows[0].num, 1)
            client.release()
            pool.end(cb)
          })
        })
      })
  })
})

// Legacy custom Promise library (e.g. bluebird) is unsupported in modern native ES6 Promise environments
suite.skip('promise API with configurable promise type', null)
