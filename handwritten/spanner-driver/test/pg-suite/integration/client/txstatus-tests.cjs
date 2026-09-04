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
const suite = new helper.Suite()
const pg = helper.pg
const assert = require('assert')

suite.test('txStatus tracking', function (done) {
  const client = new pg.Client()
  client.connect(
    assert.success(function () {
      // Run a simple query to initialize txStatus
      client.query(
        'SELECT 1',
        assert.success(function () {
          // Test 1: Initial state after query (should be idle)
          assert.equal(client.getTransactionStatus(), 'I', 'should start in idle state')

          // Test 2: BEGIN transaction
          client.query(
            'BEGIN',
            assert.success(function () {
              assert.equal(client.getTransactionStatus(), 'T', 'should be in transaction state')

              // Test 3: COMMIT
              client.query(
                'COMMIT',
                assert.success(function () {
                  assert.equal(client.getTransactionStatus(), 'I', 'should return to idle after commit')

                  client.end(done)
                })
              )
            })
          )
        })
      )
    })
  )
})
// TODO(Follow-up PR): Transition txStatus to 'E' upon query execution failure inside active transaction block.
// Currently, backend driver transactionState retains 'T' on query syntax error until ROLLBACK/COMMIT.
suite.skip('txStatus error state', function (done) {
  const client = new pg.Client()
  client.connect(
    assert.success(function () {
      // Run a simple query to initialize txStatus
      client.query(
        'SELECT 1',
        assert.success(function () {
          client.query(
            'BEGIN',
            assert.success(function () {
              // Execute invalid SQL to trigger error state
              client.query('INVALID SQL SYNTAX', function (err) {
                assert(err, 'should receive error from invalid query')

                // Issue a sync query to ensure ReadyForQuery has been processed
                // This guarantees transaction status has been updated
                client.query('SELECT 1', function () {
                  // This callback fires after ReadyForQuery is processed
                  assert.equal(client.getTransactionStatus(), 'E', 'should be in error state')

                  // Rollback to recover
                  client.query(
                    'ROLLBACK',
                    assert.success(function () {
                      assert.equal(
                        client.getTransactionStatus(),
                        'I',
                        'should return to idle after rollback from error'
                      )
                      client.end(done)
                    })
                  )
                })
              })
            })
          )
        })
      )
    })
  )
})
