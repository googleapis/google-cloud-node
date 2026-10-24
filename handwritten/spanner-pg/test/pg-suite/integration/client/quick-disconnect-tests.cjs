'use strict'
// test for issue #320
//
const helper = require('./test-helper.cjs')
const assert = require('assert')
const suite = new helper.Suite()

suite.test('quick disconnect (connect and end immediately)', async function () {
  const client = new helper.pg.Client(helper.config)
  await client.connect()
  await client.end()
})
