'use strict'
const helper = require('./test-helper.cjs')
const assert = require('assert')
const suite = new helper.Suite()

suite.test('field name escape', function (done) {
  const sql = 'SELECT 1 AS "\\\'/*", 2 AS "\\\'*/\n + process.exit(-1)] = null;\n//"'
  const client = helper.client()
  client.query(sql, function (err, res) {
    assert.ifError(err)
    const keys = Object.keys(res.rows[0])
    assert.equal(res.rows[0][keys[0]], 1)
    assert.equal(res.rows[0][keys[1]], 2)
    client.end(done)
  })
})
