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
const assert = require('assert')
const suite = new helper.Suite()

// Cloud Spanner Note: LISTEN / NOTIFY asynchronous pub/sub channels and PL/pgSQL RAISE NOTICE
// are PostgreSQL server-specific features not supported in Cloud Spanner.

suite.skip('emits notify message', function (done) {
  const client = helper.client()
  client.query(
    'LISTEN boom',
    assert.calls(function () {
      const otherClient = helper.client()
      let bothEmitted = -1
      otherClient.query(
        'LISTEN boom',
        assert.calls(function () {
          assert.emits(client, 'notification', function (msg) {
            setTimeout(function () {
              assert.equal(msg.channel, 'boom')
              assert.ok(
                msg.payload == 'omg!' || msg.payload == '',
                'expected blank payload or correct payload but got ' + msg.message
              )
              client.end(++bothEmitted ? done : undefined)
            }, 100)
          })
          assert.emits(otherClient, 'notification', function (msg) {
            assert.equal(msg.channel, 'boom')
            otherClient.end(++bothEmitted ? done : undefined)
          })

          client.query("NOTIFY boom, 'omg!'", function (err, q) {
            if (err) {
              client.query('NOTIFY boom')
            }
          })
        })
      )
    })
  )
})

suite.skip('emits notice message', function (done) {
  const client = helper.client()
  const text = `
DO language plpgsql $$
BEGIN
  RAISE NOTICE 'hello, world!' USING ERRCODE = '23505', DETAIL = 'this is a test';
END
$$;
  `
  client.query('SET SESSION client_min_messages=notice', (err) => {
    assert.ifError(err)
    client.query(text, () => {
      client.end()
    })
  })
  assert.emits(client, 'notice', function (notice) {
    assert.ok(notice != null)
    assert(notice instanceof Error === false)
    assert.strictEqual(notice.name, 'notice')
    assert.strictEqual(notice.message, 'hello, world!')
    assert.strictEqual(notice.detail, 'this is a test')
    assert.strictEqual(notice.code, '23505')
    done()
  })
})
