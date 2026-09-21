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

function getAppName(conf, cb) {
  const client = new Client(conf)
  client.connect(
    assert.success(function () {
      client.query(
        'SHOW application_name',
        assert.success(function (res) {
          const appName = res.rows[0].application_name
          cb(appName)
          client.end()
        })
      )
    })
  )
}

// Cloud Spanner Note: application_name is a libpq-specific GUC session property.
// In Cloud Spanner (go-sql-spanner), application_name is a static no-op property,
// as telemetry and client tracking are managed via Google Cloud IAM credentials and SDK User-Agents.

suite.test('No default appliation_name ', function (done) {
  getAppName({}, function (res) {
    assert.strictEqual(res, '')
    done()
  })
})

suite.skip('fallback_application_name is used', function (done) {
  const fbAppName = 'this is my app'
  const conf = getConInfo({
    fallback_application_name: fbAppName,
  })
  getAppName(conf, function (res) {
    assert.strictEqual(res, fbAppName)
    done()
  })
})

suite.skip('application_name is used', function (done) {
  const appName = 'some wired !@#$% application_name'
  const conf = getConInfo({
    application_name: appName,
  })
  getAppName(conf, function (res) {
    assert.strictEqual(res, appName)
    done()
  })
})

suite.skip('application_name has precedence over fallback_application_name', function (done) {
  const appName = 'some wired !@#$% application_name'
  const fbAppName = 'some other strange $$test$$ appname'
  const conf = getConInfo({
    application_name: appName,
    fallback_application_name: fbAppName,
  })
  getAppName(conf, function (res) {
    assert.strictEqual(res, appName)
    done()
  })
})

suite.skip('application_name from connection string', function (done) {
  const appName = 'my app'
  // const conParams = require('../../../lib/connection-parameters')
  let conf = 'postgres://?application_name=' + appName
  getAppName(conf, function (res) {
    assert.strictEqual(res, appName)
    done()
  })
})

// TODO: make the test work for native client too
if (!helper.args.native) {
  suite.skip('application_name is read from the env', function (done) {
    const appName = (process.env.PGAPPNAME = 'testest')
    getAppName({}, function (res) {
      delete process.env.PGAPPNAME
      assert.strictEqual(res, appName)
      done()
    })
  })
}
