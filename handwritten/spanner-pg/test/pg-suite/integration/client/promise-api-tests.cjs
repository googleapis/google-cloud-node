'use strict'

const helper = require('./test-helper.cjs')
const pg = helper.pg
const assert = require('assert')

const suite = new helper.Suite()

suite.test('valid connection completes promise', () => {
  const client = new pg.Client()
  return client.connect().then(() => {
    return client.end().then(() => {})
  })
})

suite.test('valid connection returns the client in a promise', () => {
  const client = new pg.Client()
  return client.connect().then((clientInside) => {
    assert.equal(client, clientInside)
    return client.end().then(() => {})
  })
})

suite.test('invalid connection rejects promise', async () => {
  const client = new pg.Client({ database: 'non_existent_db_12345' })
  await assert.rejects(async () => {
    await client.connect()
    await client.query('SELECT 1')
  }, Error)
})
