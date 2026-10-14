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
const Client = helper.Client
const assert = require('assert')

const suite = new helper.Suite()

// Cloud Spanner Note: The idle_in_transaction_session_timeout GUC configuration parameter
// is not supported by Cloud Spanner.

function getIdleTransactionSessionTimeout(conf, cb) {
  const client = new Client()
  client.connect(
    assert.success(function () {
      const setVal = conf && conf.idle_in_transaction_session_timeout
      const runQuery = () => {
        client.query(
          'SHOW idle_in_transaction_session_timeout',
          assert.success(function (res) {
            const timeout = res.rows[0].idle_in_transaction_session_timeout
            cb(timeout)
            client.end()
          })
        )
      }
      if (setVal !== undefined) {
        client.query(`SET idle_in_transaction_session_timeout = '${setVal}'`, assert.success(runQuery))
      } else {
        runQuery()
      }
    })
  )
}

suite.skip('No default idle_in_transaction_session_timeout', function (done) {
  getIdleTransactionSessionTimeout({}, function (res) {
    assert.strictEqual(res, '0')
    done()
  })
})

suite.skip('idle_in_transaction_session_timeout integer is used', function (done) {
  const conf = {
    idle_in_transaction_session_timeout: 3000,
  }
  getIdleTransactionSessionTimeout(conf, function (res) {
    assert.strictEqual(res, '3s')
    done()
  })
})

suite.skip('idle_in_transaction_session_timeout float is used', function (done) {
  const conf = {
    idle_in_transaction_session_timeout: 3000.7,
  }
  getIdleTransactionSessionTimeout(conf, function (res) {
    assert.strictEqual(res, '3s')
    done()
  })
})

suite.skip('idle_in_transaction_session_timeout string is used', function (done) {
  const conf = {
    idle_in_transaction_session_timeout: '3000',
  }
  getIdleTransactionSessionTimeout(conf, function (res) {
    assert.strictEqual(res, '3s')
    done()
  })
})
