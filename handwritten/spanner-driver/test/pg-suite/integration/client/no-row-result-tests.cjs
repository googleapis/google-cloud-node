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
const pool = new pg.Pool()
const assert = require('assert')

suite.test('can access results when no rows are returned', function (done) {
  const checkResult = function (result) {
    assert(result.fields, 'should have fields definition')
    assert.equal(result.fields.length, 1)
    assert.equal(result.fields[0].name, 'val')
    assert.equal(result.fields[0].dataTypeID, 25)
  }

  pool.connect(
    assert.success(function (client, release) {
      const q = new pg.Query('select $1::text as val limit 0', ['hi'])
      const query = client.query(
        q,
        assert.success(function (result) {
          checkResult(result)
          release()
          pool.end(done)
        })
      )

      assert.emits(query, 'end', checkResult)
    })
  )
})
