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
var exec = require('methmeth');
var extend = require('extend');

var Table = require('../src/table.js');
var Family = require('../src/family.js');
var Row = require('../src/row.js');

var env = require('../../../system-test/env.js');
var Bigtable = require('../');

var clusterName = process.env.GCLOUD_TESTS_BIGTABLE_CLUSTER;
var zoneName = process.env.GCLOUD_TESTS_BIGTABLE_ZONE;

var isTestable = clusterName && zoneName;

function generateTableName() {
  return 'test-table-' + uuid.v4();
}

(isTestable ? describe : describe.skip)('Bigtable', function() {
  var bigtable = new Bigtable(extend({}, env, {
    cluster: clusterName,
    zone: zoneName
  }));

  var TABLE_NAME = generateTableName();
  var TABLE = bigtable.table(TABLE_NAME);

  before(function(done) {
    bigtable.getTables(function(err, tables) {
      if (err) {
        done(err);
        return;
      }

      async.each(tables, exec('delete'), function(err) {
        if (err) {
          done(err);
          return;
        }

        TABLE.create(done);
      });
    });
  });

  after(function() {
    TABLE.delete();
  });

  describe('tables', function() {

    it('should retrieve a list of tables', function(done) {
      bigtable.getTables(function(err, tables) {
        assert.ifError(err);
        assert(tables[0] instanceof Table);
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
      var table = bigtable.table('should-not-exist');

      table.exists(function(err, exists) {
        assert.ifError(err);
        assert.strictEqual(exists, false);
        done();
      });
    });

    it('should get a table', function(done) {
      var table = bigtable.table(TABLE_NAME);

      table.get(function(err, table_) {
        assert.ifError(err);
        assert.strictEqual(table, table_);
        done();
      });
    });

    it('should delete a table', function(done) {
      var table = bigtable.table(generateTableName());

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

  });

  describe('column families', function() {
    var FAMILY_NAME = 'presidents';
    var FAMILY = TABLE.family(FAMILY_NAME);

    before(function(done) {
      FAMILY.create(done);
    });

    it('should get a list of families', function(done) {
      TABLE.getFamilies(function(err, families) {
        assert.ifError(err);
        assert.strictEqual(families.length, 1);
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

      FAMILY.setMetadata({ rule: rule }, function(err, metadata_) {
        assert.ifError(err);

        var maxAge_ = metadata_.gcRule.maxAge;

        assert.equal(maxAge_.seconds, rule.age.seconds);
        assert.strictEqual(maxAge_.nanas, rule.age.nanas);
        done();
      });
    });

    it('should delete a column family', function(done) {
      FAMILY.delete(done);
    });

  });

  describe('rows', function() {

    before(function(done) {
      async.each(['follows', 'traits'], function(family, callback) {
        TABLE.createFamily(family, callback);
      }, done);
    });

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

        TABLE.insert(rows, function(err) {
          assert.ifError(err);
          done();
        });
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

        row.createRules(rule, function(err) {
          assert.ifError(err);

          row.save('traits:teeth', 'shiny', function(err) {
            assert.ifError(err);

            row.get(['traits:teeth'], function(err, data) {
              assert.ifError(err);
              assert(data.traits.teeth[0].value, 'shiny-wood');
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

        var batch = [{
          method: 'delete',
          data: ['follows:lincoln']
        }];

        row.filter(filter, null, batch, function(err, matched) {
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

        TABLE.getRows()
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

      it('should fetch individual cells of a row', function(done) {
        var row = TABLE.row('alincoln');

        row.get(['follows:gwashington'], function(err, data) {
          assert.ifError(err);
          assert.strictEqual(data.follows.gwashington[0].value, 1);
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

        TABLE.sampleRowKeys()
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
