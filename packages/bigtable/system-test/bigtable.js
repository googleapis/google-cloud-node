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
var uuid = require('node-uuid');

var env = require('../../../system-test/env.js');
var Bigtable = require('../');
var Instance = require('../src/instance.js');
var Cluster = require('../src/cluster.js');
var Table = require('../src/table.js');
var Family = require('../src/family.js');
var Row = require('../src/row.js');

var PREFIX = 'gcloud-tests-';

describe('Bigtable', function() {
  var bigtable = new Bigtable(env);

  var INSTANCE = bigtable.instance(generateName('instance'));
  var TABLE = INSTANCE.table(generateName('table'));
  var CLUSTER_NAME = generateName('cluster');

  before(function(done) {
    INSTANCE.create({
      clusters: [
        {
          name: CLUSTER_NAME,
          location: 'us-central1-b',
          nodes: 3
        }
      ]
    }, function(err, instance, operation) {
      if (err) {
        done(err);
        return;
      }

      operation
        .on('error', done)
        .on('complete', function() {
          TABLE.create({
            families: ['follows', 'traits']
          }, done);
        });
    });
  });

  after(function(done) {
    bigtable.getInstances(function(err, instances) {
      if (err) {
        done(err);
        return;
      }

      var testInstances = instances.filter(function(instance) {
        return instance.id.match(PREFIX);
      });

      async.eachLimit(testInstances, 5, function(instance, next) {
        instance.delete(next);
      }, done);
    });
  });

  describe('instances', function() {
    it('should get a list of instances', function(done) {
      bigtable.getInstances(function(err, instances) {
        assert.ifError(err);
        assert(instances.length > 0);
        done();
      });
    });

    it('should get a list of instances in stream mode', function(done) {
      var instances = [];

      bigtable.getInstancesStream()
        .on('error', done)
        .on('data', function(instance) {
          assert(instance instanceof Instance);
          instances.push(instance);
        })
        .on('end', function() {
          assert(instances.length > 0);
          done();
        });
    });

    it('should check if an instance exists', function(done) {
      INSTANCE.exists(function(err, exists) {
        assert.ifError(err);
        assert.strictEqual(exists, true);
        done();
      });
    });

    it('should check if an instance does not exist', function(done) {
      var instance = bigtable.instance('fake-instance');

      instance.exists(function(err, exists) {
        assert.ifError(err);
        assert.strictEqual(exists, false);
        done();
      });
    });

    it('should get a single instance', function(done) {
      INSTANCE.get(done);
    });

    it('should update an instance', function(done) {
      var metadata = {
        displayName: 'metadata-test'
      };

      INSTANCE.setMetadata(metadata, function(err) {
        assert.ifError(err);

        INSTANCE.getMetadata(function(err, metadata_) {
          assert.ifError(err);
          assert.strictEqual(metadata.displayName, metadata_.displayName);
          done();
        });
      });
    });
  });

  describe('clusters', function() {
    var CLUSTER;

    beforeEach(function() {
      CLUSTER = INSTANCE.cluster(CLUSTER_NAME);
    });

    it('should retrieve a list of clusters', function(done) {
      INSTANCE.getClusters(function(err, clusters) {
        assert.ifError(err);
        assert(clusters[0] instanceof Cluster);
        done();
      });
    });

    it('should retrieve a list of clusters in stream mode', function(done) {
      var clusters = [];

      INSTANCE.getClustersStream()
        .on('error', done)
        .on('data', function(cluster) {
          assert(cluster instanceof Cluster);
          clusters.push(cluster);
        })
        .on('end', function() {
          assert(clusters.length > 0);
          done();
        });
    });

    it('should check if a cluster exists', function(done) {
      CLUSTER.exists(function(err, exists) {
        assert.ifError(err);
        assert.strictEqual(exists, true);
        done();
      });
    });

    it('should check if a cluster does not exist', function(done) {
      var cluster = INSTANCE.cluster('fake-cluster');

      cluster.exists(function(err, exists) {
        assert.ifError(err);
        assert.strictEqual(exists, false);
        done();
      });
    });

    it('should get a cluster', function(done) {
      CLUSTER.get(done);
    });

    it('should update a cluster', function(done) {
      var metadata = {
        nodes: 4
      };

      CLUSTER.setMetadata(metadata, function(err, operation) {
        assert.ifError(err);

        operation
          .on('error', done)
          .on('complete', function() {
            CLUSTER.getMetadata(function(err, _metadata) {
              assert.ifError(err);
              assert.strictEqual(metadata.nodes, _metadata.serveNodes);
              done();
            });
          });
      });
    });

  });

  describe('tables', function() {

    it('should retrieve a list of tables', function(done) {
      INSTANCE.getTables(function(err, tables) {
        assert.ifError(err);
        assert(tables[0] instanceof Table);
        done();
      });
    });

    it('should retrieve a list of tables in stream mode', function(done) {
      var tables = [];

      INSTANCE.getTablesStream()
        .on('error', done)
        .on('data', function(table) {
          assert(table instanceof Table);
          tables.push(table);
        })
        .on('end', function() {
          assert(tables.length > 0);
          done();
        });
    });

    it('should check if a table exists', function(done) {
      TABLE.exists(function(err, exists) {
        assert.ifError(err);
        assert.strictEqual(exists, true);
        done();
      });
    });

    it('should check if a table does not exist', function(done) {
      var table = INSTANCE.table('should-not-exist');

      table.exists(function(err, exists) {
        assert.ifError(err);
        assert.strictEqual(exists, false);
        done();
      });
    });

    it('should get a table', function(done) {
      TABLE.get(done);
    });

    it('should delete a table', function(done) {
      var table = INSTANCE.table(generateName('table'));

      async.series([
        table.create.bind(table),
        table.delete.bind(table)
      ], done);
    });

    it('should get the tables metadata', function(done) {
      TABLE.getMetadata(function(err, metadata) {
        assert.strictEqual(metadata.name, TABLE.id);
        done();
      });
    });

    it('should create a table with column family data', function(done) {
      var name = generateName('table');
      var options = {
        families: ['test']
      };

      INSTANCE.createTable(name, options, function(err, table) {
        assert.ifError(err);
        assert(table.metadata.columnFamilies.test);
        done();
      });
    });

  });

  describe('column families', function() {
    var FAMILY_NAME = 'presidents';
    var FAMILY;

    before(function(done) {
      FAMILY = TABLE.family(FAMILY_NAME);
      FAMILY.create(done);
    });

    it('should get a list of families', function(done) {
      TABLE.getFamilies(function(err, families) {
        assert.ifError(err);
        assert.strictEqual(families.length, 3);
        assert(families[0] instanceof Family);
        assert.strictEqual(families[0].name, FAMILY.name);
        done();
      });
    });

    it('should get a family', function(done) {
      var family = TABLE.family(FAMILY_NAME);

      family.get(function(err, family) {
        assert.ifError(err);
        assert(family instanceof Family);
        assert.strictEqual(family.name, FAMILY.name);
        done();
      });
    });

    it('should check if a family exists', function(done) {
      FAMILY.exists(function(err, exists) {
        assert.ifError(err);
        assert.strictEqual(exists, true);
        done();
      });
    });

    it('should check if a family does not exist', function(done) {
      var family = TABLE.family('prezzies');

      family.exists(function(err, exists) {
        assert.ifError(err);
        assert.strictEqual(exists, false);
        done();
      });
    });

    it('should get the column family metadata', function(done) {
      FAMILY.getMetadata(function(err, metadata) {
        assert.ifError(err);
        assert.strictEqual(FAMILY.metadata, metadata);
        done();
      });
    });

    it('should update a column family', function(done) {
      var rule = {
        age: {
          seconds: 10000,
          nanos: 10000
        },
        union: true
      };

      FAMILY.setMetadata({ rule: rule }, function(err, metadata) {
        assert.ifError(err);
        var maxAge = metadata.gcRule.maxAge;

        assert.equal(maxAge.seconds, rule.age.seconds);
        assert.strictEqual(maxAge.nanas, rule.age.nanas);
        done();
      });
    });

    it('should delete a column family', function(done) {
      FAMILY.delete(done);
    });

  });

  describe('rows', function() {

    describe('inserting data', function() {

      it('should insert rows', function(done) {
        var rows = [{
          key: 'gwashington',
          data: {
            follows: {
              jadams: 1
            }
          }
        }, {
          key: 'tjefferson',
          data: {
            follows: {
              gwashington: 1,
              jadams: 1
            }
          }
        }, {
          key: 'jadams',
          data: {
            follows: {
              gwashington: 1,
              tjefferson: 1
            }
          }
        }];

        TABLE.insert(rows, done);
      });

      it('should create an individual row', function(done) {
        var row = TABLE.row('alincoln');
        var rowData = {
          follows: {
            gwashington: 1,
            jadams: 1,
            tjefferson: 1
          }
        };

        row.create(rowData, done);
      });

      it('should insert individual cells', function(done) {
        var row = TABLE.row('gwashington');

        var rowData = {
          follows: {
            jadams: 1
          }
        };

        row.save(rowData, done);
      });

      it('should allow for user specified timestamps', function(done) {
        var row = TABLE.row('gwashington');

        var rowData = {
          follows: {
            jadams: {
              value: 1,
              timestamp: new Date('March 22, 1986')
            }
          }
        };

        row.save(rowData, done);
      });

      it('should increment a column value', function(done) {
        var row = TABLE.row('gwashington');
        var increment = 5;

        row.increment('follows:increment', increment, function(err, value) {
          assert.ifError(err);
          assert.strictEqual(value, increment);
          done();
        });
      });

      it('should apply read/modify/write rules to a row', function(done) {
        var row = TABLE.row('gwashington');
        var rule = {
          column: 'traits:teeth',
          append: '-wood'
        };

        row.save('traits:teeth', 'shiny', function(err) {
          assert.ifError(err);

          row.createRules(rule, function(err) {
            assert.ifError(err);

            row.get(['traits:teeth'], function(err, data) {
              assert.ifError(err);
              assert.strictEqual(data.traits.teeth[0].value, 'shiny-wood');
              done();
            });
          });
        });
      });

      it('should check and mutate a row', function(done) {
        var row = TABLE.row('gwashington');
        var filter = {
          family: 'follows',
          value: 'alincoln'
        };

        var mutations = [{
          method: 'delete',
          data: ['follows:alincoln']
        }];

        row.filter(filter, mutations, function(err, matched) {
          assert.ifError(err);
          assert(matched);
          done();
        });
      });

    });

    describe('fetching data', function() {

      it('should get rows', function(done) {
        TABLE.getRows(function(err, rows) {
          assert.ifError(err);
          assert.strictEqual(rows.length, 4);
          assert(rows[0] instanceof Row);
          done();
        });
      });

      it('should get rows via stream', function(done) {
        var rows = [];

        TABLE.createReadStream()
          .on('error', done)
          .on('data', function(row) {
            assert(row instanceof Row);
            rows.push(row);
          })
          .on('end', function() {
            assert.strictEqual(rows.length, 4);
            done();
          });
      });

      it('should fetch an individual row', function(done) {
        var row = TABLE.row('alincoln');

        row.get(function(err, row_) {
          assert.ifError(err);
          assert.strictEqual(row, row_);
          done();
        });
      });

      it('should limit the number of rows', function(done) {
        var options = {
          limit: 1
        };

        TABLE.getRows(options, function(err, rows) {
          assert.ifError(err);
          assert.strictEqual(rows.length, 1);
          done();
        });
      });

      it('should fetch a range of rows', function(done) {
        var options = {
          start: 'alincoln',
          end: 'jadams'
        };

        TABLE.getRows(options, function(err, rows) {
          assert.ifError(err);
          assert.strictEqual(rows.length, 3);
          done();
        });
      });

      it('should fetch a range of rows via prefix', function(done) {
        var options = {
          prefix: 'g'
        };

        TABLE.getRows(options, function(err, rows) {
          assert.ifError(err);
          assert.strictEqual(rows.length, 1);
          assert.strictEqual(rows[0].id, 'gwashington');
          done();
        });
      });

      it('should fetch individual cells of a row', function(done) {
        var row = TABLE.row('alincoln');

        row.get(['follows:gwashington'], function(err, data) {
          assert.ifError(err);
          assert.strictEqual(data.follows.gwashington[0].value, 1);
          done();
        });
      });

      it('should not decode the values', function(done) {
        var row = TABLE.row('gwashington');
        var options = {
          decode: false
        };

        row.get(options, function(err) {
          assert.ifError(err);

          var teeth = row.data.traits.teeth;
          var value = teeth[0].value;

          assert(value instanceof Buffer);
          assert.strictEqual(value.toString(), 'shiny-wood');

          done();
        });
      });

      it('should get sample row keys', function(done) {
        TABLE.sampleRowKeys(function(err, keys) {
          assert.ifError(err);
          assert(keys.length > 0);
          done();
        });
      });

      it('should get sample row keys via stream', function(done) {
        var keys = [];

        TABLE.sampleRowKeysStream()
          .on('error', done)
          .on('data', function(rowKey) {
            keys.push(rowKey);
          })
          .on('end', function() {
            assert(keys.length > 0);
            done();
          });
      });

      describe('filters', function() {

        it('should get rows via column data', function(done) {
          var filter = {
            column: 'gwashington'
          };

          TABLE.getRows({ filter: filter }, function(err, rows) {
            assert.ifError(err);
            assert.strictEqual(rows.length, 3);

            var keys = rows.map(function(row) {
              return row.id;
            }).sort();

            assert.deepEqual(keys, [
              'alincoln',
              'jadams',
              'tjefferson'
            ]);

            done();
          });
        });

        it('should get rows that satisfy the cell limit', function(done) {
          var entry = {
            key: 'alincoln',
            data: {
              follows: {
                tjefferson: 1
              }
            }
          };

          var filter = [{
            row: 'alincoln'
          }, {
            column: {
              name: 'tjefferson',
              cellLimit: 1
            }
          }];

          TABLE.insert(entry, function(err) {
            assert.ifError(err);

            TABLE.getRows({ filter: filter }, function(err, rows) {
              assert.ifError(err);
              var rowData = rows[0].data;
              assert(rowData.follows.tjefferson.length, 1);
              done();
            });
          });
        });

        it('should get a range of columns', function(done) {
          var filter = [{
            row: 'tjefferson'
          }, {
            column: {
              family: 'follows',
              start: 'gwashington',
              end: 'jadams'
            }
          }];

          TABLE.getRows({ filter: filter }, function(err, rows) {
            assert.ifError(err);

            rows.forEach(function(row) {
              var keys = Object.keys(row.data.follows).sort();

              assert.deepEqual(keys, [
                'gwashington',
                'jadams'
              ]);
            });

            done();
          });
        });

        it('should run a conditional filter', function(done) {
          var filter = {
            condition: {
              test: [{
                row: 'gwashington'
              }, {
                family: 'follows'
              }, {
                column: 'tjefferson'
              }],
              pass: {
                row: 'gwashington'
              },
              fail: {
                row: 'tjefferson'
              }
            }
          };

          TABLE.getRows({ filter: filter }, function(err, rows) {
            assert.ifError(err);
            assert.strictEqual(rows.length, 1);
            assert.strictEqual(rows[0].id, 'tjefferson');
            done();
          });
        });

        it('should run a conditional filter with pass only', function(done) {
          var filter = {
            condition: {
              test: [{
                row: 'gwashington'
              }],
              pass: [{
                all: true
              }]
            }
          };

          TABLE.getRows({ filter: filter }, function(err, rows) {
            assert.ifError(err);
            assert(rows.length > 0);
            done();
          });
        });

        it('should only get cells for a specific family', function(done) {
          var entries = [{
            key: 'gwashington',
            data: {
              traits: {
                teeth: 'wood'
              }
            }
          }];

          var filter = {
            family: 'traits'
          };

          TABLE.insert(entries, function(err) {
            assert.ifError(err);

            TABLE.getRows({ filter: filter }, function(err, rows) {
              assert.ifError(err);
              assert(rows.length > 0);

              var families = Object.keys(rows[0].data);
              assert.deepEqual(families, ['traits']);
              done();
            });
          });
        });

        it('should interleave filters', function(done) {
          var filter = [{
            interleave: [
              [{
                row: 'gwashington'
              }], [{
                row: 'tjefferson'
              }]
            ]
          }];

          TABLE.getRows({ filter: filter }, function(err, rows) {
            assert.ifError(err);
            assert.strictEqual(rows.length, 2);

            var ids = rows.map(function(row) {
              return row.id;
            }).sort();

            assert.deepEqual(ids, [
              'gwashington',
              'tjefferson'
            ]);

            done();
          });
        });

        it('should apply labels to the results', function(done) {
          var filter = {
            label: 'test-label'
          };

          TABLE.getRows({ filter: filter }, function(err, rows) {
            assert.ifError(err);

            rows.forEach(function(row) {
              var follows = row.data.follows;

              Object.keys(follows).forEach(function(column) {
                follows[column].forEach(function(cell) {
                  assert.deepEqual(cell.labels, [filter.label]);
                });
              });
            });

            done();
          });
        });

        it('should run a regex against the row id', function(done) {
          var filter = {
            row: /[a-z]+on$/
          };

          TABLE.getRows({ filter: filter }, function(err, rows) {
            assert.ifError(err);

            var keys = rows.map(function(row) {
              return row.id;
            }).sort();

            assert.deepEqual(keys, [
              'gwashington',
              'tjefferson'
            ]);

            done();
          });
        });

        it('should run a sink filter', function(done) {
          var filter = [{
            row: 'alincoln'
          }, {
            family: 'follows'
          }, {
            interleave: [
              [{
                all: true
              }], [{
                label: 'prezzy'
              }, {
                sink: true
              }]
            ]
          }, {
            column: 'gwashington'
          }];

          TABLE.getRows({ filter: filter }, function(err, rows) {
            assert.ifError(err);

            var columns = Object.keys(rows[0].data.follows).sort();

            assert.deepEqual(columns, [
              'gwashington',
              'jadams',
              'tjefferson'
            ]);

            done();
          });
        });

        it('should accept a date range', function(done) {
          var filter = {
            time: {
              start: new Date('March 21, 1986'),
              end: new Date('March 23, 1986')
            }
          };

          TABLE.getRows({ filter: filter }, function(err, rows) {
            assert.ifError(err);
            assert(rows.length > 0);
            done();
          });
        });

      });

    });

    describe('deleting rows', function() {

      it('should delete specific cells', function(done) {
        var row = TABLE.row('alincoln');

        row.deleteCells(['follows:gwashington'], done);
      });

      it('should delete a family', function(done) {
        var row = TABLE.row('gwashington');

        row.deleteCells(['traits'], done);
      });

      it('should delete all the cells', function(done) {
        var row = TABLE.row('alincoln');

        row.delete(done);
      });

      it('should delete all the rows', function(done) {
        TABLE.deleteRows(function(err) {
          assert.ifError(err);

          TABLE.getRows(function(err, rows) {
            assert.ifError(err);
            assert.strictEqual(rows.length, 0);
            done();
          });
        });
      });

    });

  });

});

function generateName(resourceType) {
  return PREFIX + resourceType + '-' + uuid.v1().substr(0, 8);
}
