'use strict'

const helper = require('./test-helper.cjs')

const pg = helper.pg
const assert = require('assert')
const Client = pg.Client
const DatabaseError = pg.DatabaseError

const createErorrClient = function () {
  const client = helper.client()
  client.once('error', function (err) {
    assert.fail('Client shoud not throw error during query execution')
  })
  client.on('drain', client.end.bind(client))
  return client
}

const suite = new helper.Suite('error handling')

suite.test('sending non-array argument as values causes an error callback', (done) => {
  const client = new Client()
  client.connect((err) => {
    if (err) {
      return done(err)
    }
    client.query('select $1::text as name', 'foo', (err) => {
      assert(err instanceof Error)
      client.query('SELECT $1::text as name', ['foo'], (err, res) => {
        assert.ifError(err)
        assert.equal(res.rows[0].name, 'foo')
        client.end(done)
      })
    })
  })
})

suite.test('re-using connections results in error callback', (done) => {
  const client = new Client()
  client.connect((err) => {
    if (err) {
      return done(err)
    }
    client.connect((err) => {
      assert(err instanceof Error)
      client.end(done)
    })
  })
})

suite.test('re-using connections results in promise rejection', async () => {
  const client = new Client()
  await client.connect()
  await assert.rejects(client.connect(), Error)
  await client.end()
})

suite.test('using a client after closing it results in error', (done) => {
  const client = new Client()
  client.connect((err) => {
    if (err) {
      return done(err)
    }
    client.end(
      assert.calls(() => {
        client.query(
          'SELECT 1',
          assert.calls((err) => {
            assert.equal(err.message, 'Client was closed and is not queryable')
            done()
          })
        )
      })
    )
  })
})

// Cloud Spanner Note: pg_sleep() is unsupported in Cloud Spanner PostgreSQL dialect.
suite.skip('query receives error on client shutdown', function (done) {
  const client = new Client()
  client.connect(
    assert.success(function () {
      const config = {
        text: 'select pg_sleep(5)',
        name: 'foobar',
      }
      let queryError
      client.query(
        new pg.Query(config),
        assert.calls(function (err, res) {
          assert(err instanceof Error)
          queryError = err
        })
      )
      setTimeout(() => client.end(), 50)
      client.once('end', () => {
        assert(queryError instanceof Error)
        done()
      })
    })
  )
})

const ensureFuture = function (testClient, done) {
  const goodQuery = testClient.query(new pg.Query('select age from boom'))
  assert.emits(goodQuery, 'row', function (row) {
    assert.equal(row.age, 28)
    done()
  })
}

suite.test('when query is parsing', (done) => {
  const client = new Client()
  client.connect((err) => {
    assert.ifError(err)
    const query = client.query(
      new pg.Query({
        text: 'select * from yodas_dsflsd',
      })
    )

    query.on('error', function (err) {
      try {
        assert(err instanceof Error)
      } catch (assertionErr) {
        client.end(() => done(assertionErr))
        return
      }
      client.end(done)
    })
  })
})

suite.test('when a query is binding', function (done) {
  const client = new Client()
  client.connect((err) => {
    assert.ifError(err)
    const query = client.query(
      new pg.Query({
        text: 'select * from yodas_dsflsd',
      })
    )

    query.on('error', function (err) {
      try {
        if (!helper.config.native) {
          assert(err instanceof DatabaseError)
        }
        assert.equal(err.severity, 'ERROR')
      } catch (assertionErr) {
        client.end(() => done(assertionErr))
        return
      }
      client.end(done)
    })
  })
})

suite.test('non-query error with callback', function (done) {
  const invalidDsn = 'projects/span-cloud-testing/instances/gargsurbhi-testing1/databases/invalid-db-xyz-99999'
  const client = new Client({ connectionString: invalidDsn })
  client.connect(
    assert.calls(function (error) {
      assert(error instanceof Error)
      done()
    })
  )
})

suite.test('non-error calls supplied callback', function (done) {
  const client = new Client()

  client.connect(
    assert.calls(function (err) {
      assert.ifError(err)
      client.end(done)
    })
  )
})

suite.test('when connecting to an invalid host with callback', function (done) {
  const invalidDsn = 'projects/span-cloud-testing/instances/gargsurbhi-testing1/databases/invalid-db-xyz-99999'
  const client = new Client({ connectionString: invalidDsn })
  client.on('error', () => {
    assert.fail('unexpected error event when connecting')
  })
  client.connect(function (error) {
    assert(error instanceof Error)
    done()
  })
})

suite.test('when connecting to invalid host with promise', function (done) {
  const invalidDsn = 'projects/span-cloud-testing/instances/gargsurbhi-testing1/databases/invalid-db-xyz-99999'
  const client = new Client({ connectionString: invalidDsn })
  client.on('error', () => {
    assert.fail('unexpected error event when connecting')
  })
  client.connect().catch((e) => {
    assert(e instanceof Error)
    done()
  })
})

suite.test('non-query error', function (done) {
  const invalidDsn = 'projects/span-cloud-testing/instances/gargsurbhi-testing1/databases/invalid-db-xyz-99999'
  const client = new Client({ connectionString: invalidDsn })
  client.connect().catch((e) => {
    assert(e instanceof Error)
    done()
  })
})

suite.test('within a simple query', (done) => {
  const client = new Client()
  client.connect((err) => {
    assert.ifError(err)
    const query = client.query(new pg.Query("select eeeee from yodas_dsflsd where pixistix = 'zoiks!!!'"))

    query.on('error', function (error) {
      if (!helper.config.native) {
        assert(error instanceof DatabaseError)
      }
      assert.equal(error.severity, 'ERROR')
      client.end(done)
    })
  })
})

// Cloud Spanner Note: Emitting mock error events directly on internal connection objects is TCP socket specific.
suite.skip('connected, idle client error', (done) => {
  const client = new Client()
  client.connect((err) => {
    if (err) {
      throw new Error('Should not receive error callback after connection')
    }
    setImmediate(() => {
      ;(client.connection || client.native).emit('error', new Error('expected'))
    })
  })
  client.on('error', (err) => {
    assert.equal(err.message, 'expected')
    client.end(done)
  })
})

suite.test('cannot pass non-string values to query as text', (done) => {
  const client = new Client()
  client.connect((err) => {
    if (err) {
      return done(err)
    }
    client.query({ text: {} }, (err) => {
      assert(err)
      client.query({}, (err) => {
        client.on('drain', () => {
        client.end(done)
        })
      })
    })
  })
})
