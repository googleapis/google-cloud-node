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

const conInfo = helper.config

function getConInfo(override) {
  return Object.assign({}, conInfo, override)
}

function getStatementTimeout(conf, cb) {
  const client = new Client()
  client.connect(
    assert.success(function () {
      const setVal = conf && conf.statement_timeout
      const runQuery = () => {
        client.query(
          'SHOW statement_timeout',
          assert.success(function (res) {
            const statementTimeout = res.rows[0].statement_timeout
            cb(statementTimeout)
            client.end()
          })
        )
      }
      if (setVal !== undefined) {
        let valStr = typeof setVal === 'number' || (typeof setVal === 'string' && !isNaN(Number(setVal))) ? `${Math.floor(Number(setVal))}ms` : setVal
        client.query(`SET statement_timeout = '${valStr}'`, assert.success(runQuery))
      } else {
        runQuery()
      }
    })
  )
}

if (!helper.args.native) {
  // statement_timeout is not supported with the native client
  suite.test('No default statement_timeout ', function (done) {
    getConInfo()
    getStatementTimeout({}, function (res) {
      assert.ok(res === '0' || res === '' || res === '0s', `Expected default statement_timeout, got: ${res}`)
      done()
    })
  })

  suite.test('statement_timeout integer is used', function (done) {
    const conf = getConInfo({
      statement_timeout: 3000,
    })
    getStatementTimeout(conf, function (res) {
      assert.strictEqual(res, '3s')
      done()
    })
  })

  suite.test('statement_timeout float is used', function (done) {
    const conf = getConInfo({
      statement_timeout: 3000.7,
    })
    getStatementTimeout(conf, function (res) {
      assert.strictEqual(res, '3s')
      done()
    })
  })

  suite.test('statement_timeout string is used', function (done) {
    const conf = getConInfo({
      statement_timeout: '3000',
    })
    getStatementTimeout(conf, function (res) {
      assert.strictEqual(res, '3s')
      done()
    })
  })

  // pg_sleep not supported
  suite.skip('statement_timeout actually cancels long running queries', function (done) {
    const conf = getConInfo({
      statement_timeout: '10', // 10ms to keep tests running fast
    })
    const client = new Client(conf)
    client.connect(
      assert.success(function () {
        client.query('SELECT pg_sleep( 1 )', function (error) {
          client.end()
          assert.strictEqual(error.code, '57014') // query_cancelled
    done()
        })
      })
    )
  })
}
