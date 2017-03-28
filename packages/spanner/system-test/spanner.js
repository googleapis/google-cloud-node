/*!
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var assert = require('assert');
var async = require('async');
var concat = require('concat-stream');
var exec = require('methmeth');
var extend = require('extend');
var multiline = require('multiline');
var uuid = require('uuid');

var env = require('../../../system-test/env.js');
var Spanner = require('../');

var PREFIX = 'gcloud-tests-';
var spanner = new Spanner(env);

(env.projectId ? describe : describe.skip)('Spanner', function() {
  var instance = spanner.instance(generateName('instance'));

  before(function(done) {
    async.series([
      deleteTestResources,

      function(next) {
        instance.create({
          config: 'regional-us-central1',
          nodes: 1,
          labels: {
            'gcloud-tests': 'true'
          }
        }, execAfterOperationComplete(next));
      }
    ], done);
  });

  after(deleteTestResources);

  describe('types', function() {
    var database = instance.database(generateName('database'));
    var table = database.table('TypeCheck');

    function insert(insertData, callback) {
      var id = generateName('id');

      insertData.SingerId = id;

      table.insert(insertData, function(err) {
        if (err) {
          callback(err);
          return;
        }

        database.run({
          sql: 'SELECT * FROM `' + table.name + '` WHERE SingerId = @id',
          params: {
            id: id
          }
        }, function(err, rows) {
          if (err) {
            callback(err);
            return;
          }

          callback(null, rows.shift());
        });
      });
    }

    before(function(done) {
      database.create({
        schema: multiline.stripIndent(function() {/*
          CREATE TABLE TypeCheck (
            SingerId STRING(1024) NOT NULL,
            Int INT64,
            Float FLOAT64,
          ) PRIMARY KEY(SingerId)
        */})
      }, execAfterOperationComplete(done));
    });

    it('should correctly decode structs', function(done) {
      var query = 'SELECT ARRAY(SELECT as struct 1, "hello")';

      database.run(query, function(err, rows) {
        assert.ifError(err);
        assert.deepEqual(rows[0], [
          {
            name: '',
            value: [
              [
                {
                  name: '',
                  value: {
                    value: '1'
                  }
                },
                {
                  name: '',
                  value: 'hello'
                }
              ]
            ]
          }
        ]);
        done();
      });
    });

    it('should correctly decode structs', function(done) {
      var query =
        'SELECT 1 as id, ARRAY(select as struct 2 as id, "hello" as name)';

      database.run(query, function(err, rows) {
        assert.ifError(err);
        assert.deepEqual(rows[0], [
          {
            name: 'id',
            value: {
              value: '1'
            }
          },
          {
            name: '',
            value: [
              [
                {
                  name: 'id',
                  value: {
                    value: '2'
                  }
                },
                {
                  name: 'name',
                  value: 'hello'
                }
              ]
            ]
          }
        ]);
        done();
      });
    });

    it('should accept a Float object with an Int-like value', function(done) {
      insert({ Float: spanner.float(8) }, function(err, row) {
        assert.ifError(err);
        assert.deepEqual(row.toJSON().Float, spanner.float(8));
        done();
      });
    });

    it('should handle Infinity', function(done) {
      insert({ Float: Infinity }, function(err, row) {
        assert.ifError(err);
        assert.deepEqual(row.toJSON().Float, spanner.float(Infinity));
        done();
      });
    });

    it('should handled -Infinity', function(done) {
      insert({ Float: -Infinity }, function(err, row) {
        assert.ifError(err);
        assert.deepEqual(row.toJSON().Float, spanner.float(-Infinity));
        done();
      });
    });

    it('should handle NaN', function(done) {
      insert({ Float: NaN }, function(err, row) {
        assert.ifError(err);
        assert(isNaN(row.toJSON().Float));
        done();
      });
    });

    it('should handle out of bounds integers', function(done) {
      var value = '9223372036854775807';

      insert({ Int: value }, function(err, row) {
        assert.ifError(err);
        assert.strictEqual(row.toJSON().Int.value, value);
        done();
      });
    });
  });

  describe('Instances', function() {
    it('should have created the instance', function(done) {
      instance.getMetadata(function(err, metadata) {
        assert.ifError(err);
        assert.strictEqual(metadata.name, instance.formattedName_);
        done();
      });
    });

    it('should list the instances', function(done) {
      spanner.getInstances(function(err, instances) {
        assert.ifError(err);
        assert(instances.length > 0);
        done();
      });
    });

    it('should list the instances in promise mode', function(done) {
      spanner.getInstances()
        .then(function(data) {
          var instances = data[0];
          assert(instances.length > 0);
          done();
        })
        .catch(done);
    });

    it('should list the instances in stream mode', function(done) {
      spanner.getInstancesStream()
        .on('error', done)
        .pipe(concat(function(instances) {
          assert(instances.length > 0);
          done();
        }));
    });

    it('should update the metadata', function(done) {
      var newData = {
        displayName: 'new-display-name'
      };

      instance.setMetadata(newData, execAfterOperationComplete(function(err) {
        assert.ifError(err);

        instance.getMetadata(function(err, metadata) {
          assert.ifError(err);
          assert.strictEqual(metadata.displayName, newData.displayName);
          done();
        });
      }));
    });
  });

  describe('instanceConfigs', function() {
    it('should list the available instanceConfigs', function(done) {
      spanner.getInstanceConfigs(function(err, instanceConfigs) {
        assert.ifError(err);
        assert(instanceConfigs.length > 0);
        done();
      });
    });

    it('should list the instanceConfigs in promise mode', function(done) {
      spanner.getInstanceConfigs()
        .then(function(data) {
          var instanceConfigs = data[0];
          assert(instanceConfigs.length > 0);
          done();
        })
        .catch(done);
    });

    it('should list the instanceConfigs in stream mode', function(done) {
      spanner.getInstanceConfigsStream()
        .on('error', done)
        .pipe(concat(function(instanceConfigs) {
          assert(instanceConfigs.length > 0);
          done();
        }));
    });
  });

  describe('Databases', function() {
    var database = instance.database(generateName('database'));

    before(function(done) {
      database.create(execAfterOperationComplete(done));
    });

    after(function(done) {
      database.close(function(err) {
        if (err) {
          return done(err);
        }

        database.delete(done);
      });
    });

    it('should have created the database', function(done) {
      database.getMetadata(function(err, metadata) {
        assert.ifError(err);
        assert.strictEqual(metadata.name, database.formattedName_);
        assert.strictEqual(metadata.state, 'READY');
        done();
      });
    });

    it('should list the databases from an instance', function(done) {
      instance.getDatabases(function(err, databases) {
        assert.ifError(err);
        assert(databases.length > 0);
        done();
      });
    });

    it('should list the databases in promise mode', function(done) {
      instance.getDatabases()
        .then(function(data) {
          var databases = data[0];
          assert(databases.length > 0);
          done();
        })
        .catch(done);
    });

    it('should list the databases in stream mode', function(done) {
      instance.getDatabasesStream()
        .on('error', done)
        .pipe(concat(function(databases) {
          assert(databases.length > 0);
          done();
        }));
    });

    it('should create a table', function(done) {
      var createTableStatement = multiline.stripIndent(function() {/*
        CREATE TABLE Singers (
          SingerId INT64 NOT NULL,
          FirstName STRING(1024),
          LastName STRING(1024),
          SingerInfo BYTES(MAX),
        ) PRIMARY KEY(SingerId)
      */});

      database.updateSchema([
        createTableStatement
      ], execAfterOperationComplete(function(err) {
        assert.ifError(err);

        database.getSchema(function(err, statements) {
          assert.ifError(err);
          assert.deepEqual(statements, [createTableStatement]);
          done();
        });
      }));
    });
  });

  describe('Sessions', function() {
    var database = instance.database(generateName('database'));
    var session = database.session_();

    before(function(done) {
      async.series([
        function(next) {
          database.create({
            schema: multiline.stripIndent(function() {/*
              CREATE TABLE Singers (
                SingerId STRING(1024) NOT NULL,
                Name STRING(1024),
              ) PRIMARY KEY(SingerId)
            */})
          }, execAfterOperationComplete(next));
        },
        function(next) {
          session.create(next);
        },
      ], done);
    });

    after(function(done) {
      session.delete(done);
    });

    it('should have created the session', function(done) {
      session.getMetadata(function(err, metadata) {
        assert.ifError(err);
        assert.strictEqual(session.formattedName_, metadata.name);
        done();
      });
    });

    it('should get a session by name', function(done) {
      var shortName = session.formattedName_.split('/').pop();
      var sessionByShortName = database.session_(shortName);

      sessionByShortName.getMetadata(function(err, metadata) {
        assert.ifError(err);
        assert.strictEqual(metadata.name, session.metadata.name);
        done();
      });
    });

    it('should keep the session alive', function(done) {
      session.keepAlive(done);
    });
  });

  describe('Tables', function() {
    var database = instance.database(generateName('database'));
    var table = database.table('Singers');

    before(function() {
      return database.create()
        .then(onPromiseOperationComplete)
        .then(function() {
          return table.create(multiline.stripIndent(function() {/*
            CREATE TABLE Singers (
              SingerId STRING(1024) NOT NULL,
              Name STRING(1024),
              Float FLOAT64,
              Int INT64,
              Info BYTES(MAX),
              Created TIMESTAMP,
              DOB DATE,
              Accents ARRAY<STRING(1024)>,
              PhoneNumbers ARRAY<INT64>,
              HasGear BOOL,
            ) PRIMARY KEY(SingerId)
          */}));
        })
        .then(onPromiseOperationComplete);
    });

    after(function() {
      return table.delete()
        .then(onPromiseOperationComplete)
        .then(function() {
          return database.delete();
        });
    });

    it('should read rows as a stream', function(done) {
      var id = generateName('id');
      var name = generateName('name');

      table.insert({
        SingerId: id,
        Name: name
      }, function(err) {
        assert.ifError(err);

        var rows = [];

        table
          .createReadStream({
            keys: [id],
            columns: ['SingerId', 'name']
          })
          .on('error', done)
          .on('data', function(row) {
            rows.push(row);
          })
          .on('end', function() {
            rows = rows.map(exec('toJSON'));

            assert.deepEqual(rows, [
              {
                SingerId: id,
                Name: name
              }
            ]);

            done();
          });
      });
    });

    it('should insert and delete a row', function(done) {
      var id = generateName('id');
      var name = generateName('name');

      table.insert({
        SingerId: id,
        Name: name
      }, function(err) {
        assert.ifError(err);

        table.deleteRows([id], function(err) {
          assert.ifError(err);

          var rows = [];

          table
            .createReadStream({
              keys: [id],
              columns: ['SingerId']
            })
            .on('error', done)
            .on('data', function(row) {
              rows.push(row);
            })
            .on('end', function() {
              assert.strictEqual(rows.length, 0);
              done();
            });
        });
      });
    });

    it('should insert and query multiple rows', function(done) {
      var id1 = generateName('id');
      var name1 = generateName('name');

      var id2 = generateName('id');
      var name2 = generateName('name');

      table.insert([
        {
          SingerId: id1,
          Name: name1
        },
        {
          SingerId: id2,
          Name: name2
        }
      ], function(err) {
        assert.ifError(err);

        database.run('SELECT * FROM Singers', function(err, rows) {
          assert.ifError(err);

          // We just want the two most recent ones.
          rows.splice(0, rows.length - 2);

          rows = rows.map(exec('toJSON'));

          assert.strictEqual(rows[0].SingerId, id1);
          assert.strictEqual(rows[0].Name, name1);

          assert.strictEqual(rows[1].SingerId, id2);
          assert.strictEqual(rows[1].Name, name2);

          done();
        });
      });
    });

    it('should insert then replace a row', function(done) {
      var originalRow = {
        SingerId: generateName('id'),
        Name: generateName('name')
      };

      var replacedRow = {
        SingerId: originalRow.SingerId
      };

      table.insert(originalRow, function(err) {
        assert.ifError(err);

        table.replace(replacedRow, function(err) {
          assert.ifError(err);

          table.read({
            keys: [originalRow.SingerId],
            columns: Object.keys(originalRow)
          }, function(err, rows) {
            assert.ifError(err);

            var row = rows[0].toJSON();

            assert.strictEqual(row.SingerId, replacedRow.SingerId);
            assert.strictEqual(row.Name, null);

            done();
          });
        });
      });
    });

    it('should insert then update a row', function(done) {
      var originalRow = {
        SingerId: generateName('id'),
        Name: generateName('name')
      };

      var updatedRow = {
        SingerId: originalRow.SingerId,
        Name: generateName('name')
      };

      table.insert(originalRow, function(err) {
        assert.ifError(err);

        table.update(updatedRow, function(err) {
          assert.ifError(err);

          table.read({
            keys: [originalRow.SingerId],
            columns: Object.keys(originalRow)
          }, function(err, rows) {
            assert.ifError(err);

            var row = rows[0].toJSON();

            assert.strictEqual(row.SingerId, updatedRow.SingerId);
            assert.strictEqual(row.Name, updatedRow.Name);

            done();
          });
        });
      });
    });

    describe('insert & query', function() {
      var DATE = new Date('1969-08-20');

      var ID = generateName('id');
      var NAME = generateName('name');
      var FLOAT = 8.2;
      var INT = 2;
      var INFO = new Buffer(generateName('info'));
      var CREATED = new Date();
      var DOB = Spanner.date(DATE);
      var ACCENTS = ['jamaican'];
      var PHONE_NUMBERS = [123123123,234234234];
      var HAS_GEAR = true;

      var INSERT_ROW = {
        SingerId: ID,
        Name: NAME,
        Float: FLOAT,
        Int: INT,
        Info: INFO,
        Created: CREATED,
        DOB: DOB,
        Accents: ACCENTS,
        PhoneNumbers: PHONE_NUMBERS,
        HasGear: HAS_GEAR
      };

      var EXPECTED_ROW = extend(true, {}, INSERT_ROW);
      EXPECTED_ROW.DOB = DATE;
      EXPECTED_ROW.Float = Spanner.float(FLOAT);
      EXPECTED_ROW.Int = Spanner.int(INT);
      EXPECTED_ROW.PhoneNumbers = [
        Spanner.int(PHONE_NUMBERS[0]),
        Spanner.int(PHONE_NUMBERS[1])
      ];

      before(function() {
        return table.insert(INSERT_ROW);
      });

      it('should query in callback mode', function(done) {
        database.run('SELECT * FROM Singers', function(err, rows) {
          assert.ifError(err);
          assert.deepEqual(rows.shift().toJSON(), EXPECTED_ROW);
          done();
        });
      });

      it('should query in promise mode', function(done) {
        database.run('SELECT * FROM Singers')
          .then(function(data) {
            var rows = data[0];
            assert.deepEqual(rows.shift().toJSON(), EXPECTED_ROW);
            done();
          })
          .catch(done);
      });

      it('should query in stream mode', function(done) {
        var row;

        database.runStream('SELECT * FROM Singers')
          .on('error', done)
          .once('data', function(row_) {
            row = row_;
            this.end();
          })
          .on('end', function() {
            assert.deepEqual(row.toJSON(), EXPECTED_ROW);
            done();
          });
      });

      it('should query with query parameters', function(done) {
        database.run({
          sql: 'SELECT * FROM Singers WHERE Float > @float AND Int > @int',
          params: {
            float: FLOAT - 1,
            int: INT - 1
          }
        }, function(err, rows) {
          assert.ifError(err);
          assert.deepEqual(rows.shift().toJSON(), EXPECTED_ROW);
          done();
        });
      });
    });

    describe('upsert', function() {
      var ROW = {
        SingerId: generateName('id'),
        Name: generateName('name')
      };

      it('should update a row', function(done) {
        var row = {
          SingerId: ROW.SingerId,
          Name: generateName('name')
        };

        table.insert(row, function(err) {
          assert.ifError(err);

          table.upsert(ROW, function(err) {
            assert.ifError(err);

            table.read({
              keys: [ROW.SingerId],
              columns: Object.keys(ROW)
            }, function(err, rows) {
              assert.ifError(err);
              assert.deepEqual(rows[0].toJSON(), ROW);
              done();
            });
          });
        });
      });

      it('should insert a row', function(done) {
        table.upsert(ROW, function(err) {
          assert.ifError(err);

          table.read({
            keys: [ROW.SingerId],
            columns: Object.keys(ROW)
          }, function(err, rows) {
            assert.ifError(err);
            assert.deepEqual(rows[0].toJSON(), ROW);
            done();
          });
        });
      });
    });
  });

  describe('SessionPool', function() {
    var database = instance.database(generateName('database'));
    var table = database.table('Singers');

    before(function(done) {
      async.series([
        function(next) {
          database.create({
            schema: multiline.stripIndent(function() {/*
              CREATE TABLE Singers (
                SingerId STRING(1024) NOT NULL,
                Name STRING(1024),
              ) PRIMARY KEY(SingerId)
            */})
          }, execAfterOperationComplete(next));
        }
      ], done);
    });

    it('should insert and query a row', function(done) {
      var id = generateName('id');
      var name = generateName('name');

      table.insert({
        SingerId: id,
        Name: name
      }, function(err) {
        assert.ifError(err);

        database.run('SELECT * FROM Singers', function(err, rows) {
          assert.ifError(err);
          assert.deepEqual(rows.pop().toJSON(), {
            SingerId: id,
            Name: name
          });
          done();
        });
      });
    });

    it('should insert and query multiple rows', function(done) {
      var id1 = generateName('id');
      var name1 = generateName('name');

      var id2 = generateName('id');
      var name2 = generateName('name');

      table.insert([
        {
          SingerId: id1,
          Name: name1
        },
        {
          SingerId: id2,
          Name: name2
        }
      ], function(err) {
        assert.ifError(err);

        database.run('SELECT * FROM Singers', function(err, rows) {
          assert.ifError(err);

          // We just want the two most recent ones.
          rows.splice(0, rows.length - 2);

          rows = rows.map(exec('toJSON'));

          assert.deepEqual(rows, [
            {
              SingerId: id1,
              Name: name1
            },
            {
              SingerId: id2,
              Name: name2
            }
          ]);

          done();
        });
      });
    });

    it('should read rows as a stream', function(done) {
      var id = generateName('id');
      var name = generateName('name');

      table.insert({
        SingerId: id,
        Name: name
      }, function(err) {
        assert.ifError(err);

        var rows = [];

        table
          .createReadStream({
            keys: [id],
            columns: ['SingerId', 'name']
          })
          .on('error', done)
          .on('data', function(row) {
            rows.push(row);
          })
          .on('end', function() {
            rows = rows.map(exec('toJSON'));

            assert.deepEqual(rows, [
              {
                SingerId: id,
                Name: name
              }
            ]);

            done();
          });
      });
    });

    it('should read rows', function(done) {
      var id = generateName('id');
      var name = generateName('name');

      table.insert({
        SingerId: id,
        Name: name
      }, function(err) {
        assert.ifError(err);

        table.read({
          keys: [id],
          columns: ['SingerId', 'Name']
        }, function(err, rows) {
          assert.ifError(err);

          rows = rows.map(exec('toJSON'));

          assert.deepEqual(rows, [
            {
              SingerId: id,
              Name: name
            }
          ]);

          done();
        });
      });
    });
  });

  describe('Transactions', function() {
    var database = instance.database(generateName('database'), {
      max: 2
    });

    var session = database.session_();
    var transaction = session.transaction();

    before(function(done) {
      async.series([
        function(next) {
          database.create({
            schema: multiline.stripIndent(function() {/*
              CREATE TABLE Singers (
                SingerId STRING(1024) NOT NULL,
                Name STRING(1024),
              ) PRIMARY KEY(SingerId)
            */})
          }, execAfterOperationComplete(next));
        },
        session.create.bind(session)
      ], done);
    });

    after(function(done) {
      session.delete(done);
    });

    it('should commit a transaction', function(done) {
      var id = generateName('id');
      var name = generateName('name');

      transaction.begin(function(err) {
        assert.ifError(err);

        transaction.insert('Singers', {
          SingerId: id,
          Name: name
        });

        transaction.commit(done);
      });
    });

    it('should rollback a transaction', function(done) {
      transaction.begin(function(err) {
        assert.ifError(err);

        transaction.run('SELECT * FROM Singers', function(err) {
          assert.ifError(err);
          transaction.rollback(done);
        });
      });
    });

    it('should run a transaction', function(done) {
      var id = generateName('id');
      var name = generateName('name');

      database.runTransaction(function(err, transaction) {
        assert.ifError(err);

        transaction.insert('Singers', {
          SingerId: id,
          Name: name
        });

        transaction.commit(done);
      });
    });

    it('should run a transaction in promise mode', function() {
      var id = generateName('id');
      var name = generateName('name');

      return database.runTransaction(function(err, transaction) {
        if (err) {
          return Promise.reject(err);
        }

        transaction.insert('Singers', {
          SingerId: id,
          Name: name
        });

        return transaction.commit();
      });
    });

    it('should retry an aborted transaction', function(done) {
      var id = generateName('id');
      var name = generateName('name');
      var attempts = 0;

      database.runTransaction(function(err, transaction) {
        assert.ifError(err);

        attempts++;

        transaction.run('SELECT * FROM Singers', function(err) {
          assert.ifError(err);

          transaction.insert('Singers', {
            SingerId: id,
            Name: name
          });

          if (attempts < 2) {
            runOtherTransaction(transaction);
            return;
          }

          transaction.commit(function(err) {
            assert.ifError(err);
            assert.strictEqual(attempts, 2);
            done();
          });
        });
      });

      function runOtherTransaction(firstTransaction) {
        database.runTransaction(function(err, transaction) {
          assert.ifError(err);

          transaction.run('SELECT * FROM Singers', function(err) {
            assert.ifError(err);

            transaction.insert('Singers', {
              SingerId: generateName('id'),
              Name: generateName('name')
            });

            transaction.commit(function(err) {
              assert.ifError(err);
              firstTransaction.commit(assert.ifError);
            });
          });
        });
      }
    });

    it('should retry an aborted transaction in promise mode', function() {
      var id = generateName('id');
      var name = generateName('name');
      var attempts = 0;

      return database.runTransaction(function(err, transaction) {
        if (err) {
          return Promise.reject(err);
        }

        attempts += 1;

        return transaction.run('SELECT * FROM Singers').then(function() {
          transaction.insert('Singers', {
            SingerId: id,
            Name: name
          });

          if (attempts < 2) {
            return runOtherTransaction(transaction);
          }

          return transaction.commit();
        });
      }).then(function(data) {
        assert.strictEqual(attempts, 2);
      });

      function runOtherTransaction(firstTransaction) {
        return database.runTransaction(function(err, transaction) {
          if (err) {
            return Promise.reject(err);
          }

          return transaction.run('SELECT * FROM Singers').then(function() {
            transaction.insert('Singers', {
              SingerId: generateName('id'),
              Name: generateName('name')
            });

            return transaction.commit();
          }).then(function() {
            return firstTransaction.commit();
          });
        });
      }
    });

    it('should run a read only transaction', function(done) {
      var options = {
        readOnly: true
      };

      database.runTransaction(options, function(err, transaction) {
        assert.ifError(err);

        transaction.run('SELECT * FROM Singers', function(err) {
          assert.ifError(err);
          transaction.end();
          done();
        });
      });
    });

    it('should run a read only transaction in promise mode', function() {
      var options = {
        readOnly: true
      };

      return database.runTransaction(options, function(err, transaction) {
        if (err) {
          return Promise.reject(err);
        }

        return transaction.run('SELECT * FROM Singers')
          .then(transaction.end.bind(transaction));
      });
    });
  });
});

function generateName(resourceType) {
  return PREFIX + resourceType + '-' + uuid.v1().split('-').shift();
}

function onPromiseOperationComplete(data) {
  var operation = data[data.length - 2];
  return operation.promise();
}

function execAfterOperationComplete(callback) {
  return function(err) {
    // arguments = [..., op, apiResponse]
    var operation = arguments[arguments.length - 2];
    var apiResponse = arguments[arguments.length - 1];

    if (err) {
      callback(err, apiResponse);
      return;
    }

    operation
      .on('error', callback)
      .on('complete', function(metadata) {
        callback(null, metadata);
      });
  };
}

function deleteTestInstances(callback) {
  spanner.getInstances({
    filter: 'labels.gcloud-tests:true'
  }, function(err, instances) {
    if (err) {
      callback(err);
      return;
    }

    async.eachLimit(instances, 5, function(instance, callback) {
      setTimeout(function() {
        instance.delete(callback);
      }, 500); // Delay allows the instance and its databases to fully clear.
    }, callback);
  });
}

function deleteTestResources(callback) {
  async.series([
    deleteTestInstances
  ], callback);
}
