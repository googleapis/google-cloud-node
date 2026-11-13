'use strict'
const helper = require('./test-helper.cjs')
const suite = new helper.Suite()
const assert = require('assert')

// Cloud Spanner Note: Cloud Spanner's ExecuteSql / ExecuteStreamingSql gRPC API requires a non-empty
// SQL query string. Empty query wire messages ('') are a PostgreSQL TCP protocol specific behavior.

suite.skip('empty query message handling', function (done) {
  const client = helper.client()
  assert.emits(client, 'drain', function () {
    client.end(done)
  })
  client.query({ text: '' })
})

suite.skip('callback supported', function (done) {
  const client = helper.client()
  client.query('', function (err, result) {
    assert(!err)
    assert.empty(result.rows)
    client.end(done)
  })
})
