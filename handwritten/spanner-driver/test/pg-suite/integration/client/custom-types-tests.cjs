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
const Client = helper.pg.Client
const suite = new helper.Suite()
const assert = require('assert')

const customTypes = {
  getTypeParser: () => () => 'okay!',
}

suite.test('custom type parser in client config', (done) => {
  const client = new Client({ types: customTypes })

  client.connect().then(() => {
    client.query(
      'SELECT CURRENT_TIMESTAMP as val',
      assert.success(function (res) {
        assert.equal(res.rows[0].val, 'okay!')
        client.end().then(done)
      })
    )
  })
})

suite.test('custom type parser in client config with multiple results', (done) => {
  const client = new Client({ types: customTypes })

  client.connect().then(() => {
    client.query(
      `SELECT 'foo'::text as name; SELECT 'bar'::text as baz`,
      assert.success(function (res) {
        assert.equal(res[0].rows[0].name, 'okay!')
        assert.equal(res[1].rows[0].baz, 'okay!')
        client.end().then(done)
      })
    )
  })
})

// Custom type-parsers per query are not supported in native
if (!helper.args.native) {
  suite.test('custom type parser in query', (done) => {
    const client = new Client()

    client.connect().then(() => {
      client.query(
        {
          text: 'SELECT CURRENT_TIMESTAMP as val',
          types: customTypes,
        },
        assert.success(function (res) {
          assert.equal(res.rows[0].val, 'okay!')
          client.end().then(done)
        })
      )
    })
  })
}
