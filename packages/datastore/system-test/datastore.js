/**
 * Copyright 2014 Google Inc. All Rights Reserved.
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

var Datastore = require('../');
var entity = require('../src/entity.js');
var env = require('../../../system-test/env.js');

describe('Datastore', function() {
  var testKinds = [];
  var datastore = new Datastore(env);
  // Override the Key method so we can track what keys are created during the
  // tests. They are then deleted in the `after` hook.
  var key = datastore.key;
  datastore.key = function() {
    var keyObject = key.apply(this, arguments);
    testKinds.push(keyObject.kind);
    return keyObject;
  };

  after(function(done) {
    function deleteEntities(kind, callback) {
      var query = datastore.createQuery(kind)
        .select('__key__');

      datastore.runQuery(query, function(err, entities) {
        if (err) {
          callback(err);
          return;
        }

        var keys = entities.map(function(entity) {
          return entity[datastore.KEY];
        });

        datastore.delete(keys, callback);
      });
    }

    async.each(testKinds, deleteEntities, done);
  });

  it('should allocate IDs', function(done) {
    datastore.allocateIds(datastore.key('Kind'), 10, function(err, keys) {
      assert.ifError(err);
      assert.strictEqual(keys.length, 10);
      assert.strictEqual(entity.isKeyComplete(keys[0]), true);
      done();
    });
  });

  describe('create, retrieve and delete', function() {
    var post = {
      title: 'How to make the perfect pizza in your grill',
      tags: ['pizza', 'grill'],
      publishedAt: new Date(),
      author: 'Silvano',
      isDraft: false,
      wordCount: 400,
      rating: 5.0,
      likes: null,
      metadata: {
        views: 100
      }
    };

    it('should save/get/delete with a key name', function(done) {
      var postKey = datastore.key(['Post', 'post1']);

      datastore.save({ key: postKey, data: post }, function(err) {
        assert.ifError(err);

        datastore.get(postKey, function(err, entity) {
          assert.ifError(err);

          assert.deepEqual(entity, post);
          assert.deepEqual(entity[datastore.KEY], postKey);

          datastore.delete(postKey, done);
        });
      });
    });

    it('should save/get/delete with a numeric key id', function(done) {
      var postKey = datastore.key(['Post', 123456789]);

      datastore.save({ key: postKey, data: post }, function(err) {
        assert.ifError(err);

        datastore.get(postKey, function(err, entity) {
          assert.ifError(err);

          assert.deepEqual(entity, post);

          datastore.delete(postKey, done);
        });
      });
    });

    it('should save/get/delete a buffer', function(done) {
      var postKey = datastore.key(['Post']);
      var data = {
        buf: new Buffer('010100000000000000000059400000000000006940', 'hex')
      };

      datastore.save({ key: postKey, data: data }, function(err) {
        assert.ifError(err);

        var assignedId = postKey.id;
        assert(assignedId);

        datastore.get(postKey, function(err, entity) {
          assert.ifError(err);

          assert.deepEqual(entity, data);

          datastore.delete(datastore.key(['Post', assignedId]), done);
        });
      });
    });

    it('should save/get/delete with a generated key id', function(done) {
      var postKey = datastore.key('Post');

      datastore.save({ key: postKey, data: post }, function(err) {
        assert.ifError(err);

        // The key's path should now be complete.
        assert(postKey.id);

        datastore.get(postKey, function(err, entity) {
          assert.ifError(err);

          assert.deepEqual(entity, post);

          datastore.delete(postKey, done);
        });
      });
    });

    it('should save/get/update', function(done) {
      var postKey = datastore.key('Post');

      datastore.save({ key: postKey, data: post }, function(err) {
        assert.ifError(err);

        datastore.get(postKey, function(err, entity) {
          assert.ifError(err);

          assert.strictEqual(entity.title, post.title);

          entity.title = 'Updated';

          datastore.save(entity, function(err) {
            assert.ifError(err);

            datastore.get(postKey, function(err, entity) {
              assert.ifError(err);
              assert.strictEqual(entity.title, 'Updated');
              datastore.delete(postKey, done);
            });
          });
        });
      });
    });

    it('should save and get with a string ID', function(done) {
      var longIdKey = datastore.key([
        'Post',
        datastore.int('100000000000001234')
      ]);

      datastore.save({
        key: longIdKey,
        data: {
          test: true
        }
      }, function(err) {
        assert.ifError(err);

        datastore.get(longIdKey, function(err, entity) {
          assert.ifError(err);
          assert.strictEqual(entity.test, true);
          done();
        });
      });
    });

    it('should fail explicitly set second insert on save', function(done) {
      var postKey = datastore.key('Post');

      datastore.save({ key: postKey, data: post }, function(err) {
        assert.ifError(err);

        // The key's path should now be complete.
        assert(postKey.id);

        datastore.save({
          key: postKey,
          method: 'insert',
          data: post
        }, function(err) {
          assert.notStrictEqual(err, null); // should fail insert

          datastore.get(postKey, function(err, entity) {
            assert.ifError(err);

            assert.deepEqual(entity, post);

            datastore.delete(postKey, done);
          });
        });
      });
    });

    it('should fail explicitly set first update on save', function(done) {
      var postKey = datastore.key('Post');

      datastore.save({
        key: postKey,
        method: 'update',
        data: post
      }, function(err) {
        assert.notStrictEqual(err, null);
        done();
      });
    });

    it('should save/get/delete multiple entities at once', function(done) {
      var post2 = {
        title: 'How to make the perfect homemade pasta',
        tags: ['pasta', 'homemade'],
        publishedAt: Date('2001-01-01T00:00:00.000Z'),
        author: 'Silvano',
        isDraft: false,
        wordCount: 450,
        rating: 4.5,
      };

      var key1 = datastore.key('Post');
      var key2 = datastore.key('Post');

      datastore.save([
        { key: key1, data: post },
        { key: key2, data: post2 }
      ], function(err) {
        assert.ifError(err);

        datastore.get([key1, key2], function(err, entities) {
          assert.ifError(err);
          assert.strictEqual(entities.length, 2);

          datastore.delete([key1, key2], done);
        });
      });
    });

    it('should get multiple entities in a stream', function(done) {
      var key1 = datastore.key('Post');
      var key2 = datastore.key('Post');

      datastore.save([
        { key: key1, data: post },
        { key: key2, data: post }
      ], function(err) {
        assert.ifError(err);

        var numEntitiesEmitted = 0;

        datastore.createReadStream([key1, key2])
          .on('error', done)
          .on('data', function() {
            numEntitiesEmitted++;
          })
          .on('end', function() {
            assert.strictEqual(numEntitiesEmitted, 2);

            datastore.delete([key1, key2], done);
          });
      });
    });

    it('should save keys as a part of entity and query by key', function(done) {
      var personKey = datastore.key(['People', 'US', 'Person', 'name']);

      datastore.save({
        key: personKey,
        data: {
          fullName: 'Full name',
          linkedTo: personKey // himself
        }
      }, function(err) {
        assert.ifError(err);

        var query = datastore.createQuery('Person')
          .hasAncestor(datastore.key(['People', 'US']))
          .filter('linkedTo', personKey);

        datastore.runQuery(query, function(err, results) {
          assert.ifError(err);

          assert.strictEqual(results[0].fullName, 'Full name');
          assert.deepEqual(results[0].linkedTo, personKey);

          datastore.delete(personKey, done);
        });
      });
    });

    describe('entity types', function() {
      it('should save and decode an int', function(done) {
        var integerValue = 2015;
        var integerType = Datastore.int(integerValue);

        var key = datastore.key('Person');

        datastore.save({
          key: key,
          data: {
            year: integerType
          }
        }, function(err) {
          assert.ifError(err);

          datastore.get(key, function(err, entity) {
            assert.ifError(err);
            assert.strictEqual(entity.year, integerValue);
            done();
          });
        });
      });

      it('should save and decode a double', function(done) {
        var doubleValue = 99.99;
        var doubleType = Datastore.double(doubleValue);

        var key = datastore.key('Person');

        datastore.save({
          key: key,
          data: {
            nines: doubleType
          }
        }, function(err) {
          assert.ifError(err);

          datastore.get(key, function(err, entity) {
            assert.ifError(err);
            assert.strictEqual(entity.nines, doubleValue);
            done();
          });
        });
      });

      it('should save and decode a geo point', function(done) {
        var geoPointValue = {
          latitude: 40.6894,
          longitude: -74.0447
        };
        var geoPointType = Datastore.geoPoint(geoPointValue);

        var key = datastore.key('Person');

        datastore.save({
          key: key,
          data: {
            location: geoPointType
          }
        }, function(err) {
          assert.ifError(err);

          datastore.get(key, function(err, entity) {
            assert.ifError(err);
            assert.deepEqual(entity.location, geoPointValue);
            done();
          });
        });
      });
    });
  });

  describe('querying the datastore', function() {
    var ancestor = datastore.key(['Book', 'GoT']);

    var keys = [
      // Paths:
      ['Rickard'],
      ['Rickard', 'Character', 'Eddard'],
      ['Catelyn'],
      ['Rickard', 'Character', 'Eddard', 'Character', 'Arya'],
      ['Rickard', 'Character', 'Eddard', 'Character', 'Sansa'],
      ['Rickard', 'Character', 'Eddard', 'Character', 'Robb'],
      ['Rickard', 'Character', 'Eddard', 'Character', 'Bran'],
      ['Rickard', 'Character', 'Eddard', 'Character', 'Jon Snow']
    ].map(function(path) {
      return datastore.key(['Book', 'GoT', 'Character'].concat(path));
    });

    var characters = [
      {
        name: 'Rickard',
        family: 'Stark',
        appearances: 9,
        alive: false
      },
      {
        name: 'Eddard',
        family: 'Stark',
        appearances: 9,
        alive: false
      },
      {
        name: 'Catelyn',
        family: ['Stark', 'Tully'],
        appearances: 26,
        alive: false
      },
      {
        name: 'Arya',
        family: 'Stark',
        appearances: 33,
        alive: true
      },
      {
        name: 'Sansa',
        family: 'Stark',
        appearances: 31,
        alive: true
      },
      {
        name: 'Robb',
        family: 'Stark',
        appearances: 22,
        alive: false
      },
      {
        name: 'Bran',
        family: 'Stark',
        appearances: 25,
        alive: true
      },
      {
        name: 'Jon Snow',
        family: 'Stark',
        appearances: 32,
        alive: true
      }
    ];

    before(function(done) {
      var keysToSave = keys.map(function(key, index) {
        return {
          key: key,
          data: characters[index]
        };
      });

      datastore.save(keysToSave, done);
    });

    after(function(done) {
      datastore.delete(keys, done);
    });

    it('should limit queries', function(done) {
      var q = datastore.createQuery('Character')
        .hasAncestor(ancestor)
        .limit(5);

      datastore.runQuery(q, function(err, firstEntities, info) {
        assert.ifError(err);
        assert.strictEqual(firstEntities.length, 5);

        var secondQ = datastore.createQuery('Character')
          .hasAncestor(ancestor)
          .start(info.endCursor);

        datastore.runQuery(secondQ, function(err, secondEntities) {
          assert.ifError(err);
          assert.strictEqual(secondEntities.length, 3);
          done();
        });
      });
    });

    it('should not go over a limit', function(done) {
      var limit = 3;

      var q = datastore.createQuery('Character')
        .hasAncestor(ancestor).limit(limit);

      datastore.runQuery(q, function(err, results) {
        assert.ifError(err);
        assert.strictEqual(results.length, limit);
        done();
      });
    });

    it('should run a query as a stream', function(done) {
      var q = datastore.createQuery('Character').hasAncestor(ancestor);

      var resultsReturned = 0;

      datastore.runQueryStream(q)
        .on('error', done)
        .on('data', function() { resultsReturned++; })
        .on('end', function() {
          assert.strictEqual(resultsReturned, characters.length);
          done();
        });
    });

    it('should not go over a limit with a stream', function(done) {
      var limit = 3;
      var q = datastore.createQuery('Character')
        .hasAncestor(ancestor)
        .limit(limit);

      var resultsReturned = 0;

      datastore.runQueryStream(q)
        .on('error', done)
        .on('data', function() { resultsReturned++; })
        .on('end', function() {
          assert.strictEqual(resultsReturned, limit);
          done();
        });
    });

    it('should filter queries with simple indexes', function(done) {
      var q = datastore.createQuery('Character')
        .hasAncestor(ancestor)
        .filter('appearances', '>=', 20);

      datastore.runQuery(q, function(err, entities) {
        assert.ifError(err);
        assert.strictEqual(entities.length, 6);
        done();
      });
    });

    it('should filter queries with defined indexes', function(done) {
      var q = datastore.createQuery('Character')
        .hasAncestor(ancestor)
        .filter('family', 'Stark')
        .filter('appearances', '>=', 20);

      datastore.runQuery(q, function(err, entities) {
        assert.ifError(err);
        assert.strictEqual(entities.length, 6);
        done();
      });
    });

    it('should filter by ancestor', function(done) {
      var q = datastore.createQuery('Character').hasAncestor(ancestor);

      datastore.runQuery(q, function(err, entities) {
        assert.ifError(err);
        assert.strictEqual(entities.length, characters.length);
        done();
      });
    });

    it('should filter by key', function(done) {
      var key = datastore.key(['Book', 'GoT', 'Character', 'Rickard']);

      var q = datastore.createQuery('Character')
        .hasAncestor(ancestor)
        .filter('__key__', key);

      datastore.runQuery(q, function(err, entities) {
        assert.ifError(err);
        assert.strictEqual(entities.length, 1);
        done();
      });
    });

    it('should order queries', function(done) {
      var q = datastore.createQuery('Character')
        .hasAncestor(ancestor)
        .order('appearances');

      datastore.runQuery(q, function(err, entities) {
        assert.ifError(err);

        assert.strictEqual(entities[0].name, characters[0].name);
        assert.strictEqual(entities[7].name, characters[3].name);

        done();
      });
    });

    it('should select projections', function(done) {
      var q = datastore.createQuery('Character')
        .hasAncestor(ancestor)
        .select(['name', 'family']);

      datastore.runQuery(q, function(err, entities) {
        assert.ifError(err);

        assert.deepEqual(entities[0], {
          name: 'Arya',
          family: 'Stark'
        });

        assert.deepEqual(entities[8], {
          name: 'Sansa',
          family: 'Stark'
        });

        done();
      });
    });

    it('should paginate with offset and limit', function(done) {
      var q = datastore.createQuery('Character')
        .hasAncestor(ancestor)
        .offset(2)
        .limit(3)
        .order('appearances');

      datastore.runQuery(q, function(err, entities, info) {
        assert.ifError(err);

        assert.strictEqual(entities.length, 3);
        assert.strictEqual(entities[0].name, 'Robb');
        assert.strictEqual(entities[2].name, 'Catelyn');

        var secondQ = datastore.createQuery('Character')
          .hasAncestor(ancestor)
          .order('appearances')
          .start(info.endCursor);

        datastore.runQuery(secondQ, function(err, secondEntities) {
          assert.ifError(err);

          assert.strictEqual(secondEntities.length, 3);
          assert.strictEqual(secondEntities[0].name, 'Sansa');
          assert.strictEqual(secondEntities[2].name, 'Arya');

          done();
        });
      });
    });

    it('should resume from a start cursor', function(done) {
      var q = datastore.createQuery('Character')
        .hasAncestor(ancestor)
        .offset(2)
        .limit(2)
        .order('appearances');

      datastore.runQuery(q, function(err, entities, info) {
        assert.ifError(err);

        var secondQ = datastore.createQuery('Character')
          .hasAncestor(ancestor)
          .order('appearances')
          .start(info.endCursor);

        datastore.runQuery(secondQ, function(err, secondEntities) {
          assert.ifError(err);

          assert.strictEqual(secondEntities.length, 4);
          assert.strictEqual(secondEntities[0].name, 'Catelyn');
          assert.strictEqual(secondEntities[3].name, 'Arya');

          done();
        });
      });
    });

    it('should group queries', function(done) {
      var q = datastore.createQuery('Character')
        .hasAncestor(ancestor)
        .groupBy('appearances');

      datastore.runQuery(q, function(err, entities) {
        assert.ifError(err);
        assert.strictEqual(entities.length, characters.length - 1);
        done();
      });
    });

    it('should query from the Query object', function(done) {
      var q = datastore.createQuery('Character');

      q.run(done);
    });
  });

  describe('transactions', function() {
    it('should run in a transaction', function(done) {
      var key = datastore.key(['Company', 'Google']);
      var obj = {
        url: 'www.google.com'
      };

      var transaction = datastore.transaction();

      transaction.run(function(err) {
        assert.ifError(err);

        transaction.get(key, function(err) {
          assert.ifError(err);

          transaction.save({ key: key, data: obj });

          transaction.commit(function(err) {
            assert.ifError(err);

            datastore.get(key, function(err, entity) {
              assert.ifError(err);
              assert.deepEqual(entity, obj);
              done();
            });
          });
        });
      });
    });

    it('should commit all saves and deletes at the end', function(done) {
      var deleteKey = datastore.key(['Company', 'Subway']);
      var key = datastore.key(['Company', 'Google']);
      var incompleteKey = datastore.key('Company');

      datastore.save({
        key: deleteKey,
        data: {}
      }, function(err) {
        assert.ifError(err);

        var transaction = datastore.transaction();

        transaction.run(function(err) {
          assert.ifError(err);

          transaction.delete(deleteKey);

          transaction.save([
            {
              key: key,
              data: { rating: 10 }
            },
            {
              key: incompleteKey,
              data: { rating: 100 }
            }
          ]);

          transaction.commit(function(err) {
            assert.ifError(err);

            // Incomplete key should have been given an ID.
            assert.strictEqual(incompleteKey.path.length, 2);

            async.parallel([
              // The key queued for deletion should have been deleted.
              function(callback) {
                datastore.get(deleteKey, function(err, entity) {
                  assert.ifError(err);
                  assert.strictEqual(typeof entity, 'undefined');
                  callback();
                });
              },

              // Data should have been updated on the key.
              function(callback) {
                datastore.get(key, function(err, entity) {
                  assert.ifError(err);
                  assert.strictEqual(entity.rating, 10);
                  callback();
                });
              }
            ], done);
          });
        });
      });
    });

    it('should use the last modification to a key', function(done) {
      var incompleteKey = datastore.key('Company');
      var key = datastore.key(['Company', 'Google']);

      var transaction = datastore.transaction();

      transaction.run(function(err) {
        assert.ifError(err);

        transaction.save([
          {
            key: key,
            data: {
              rating: 10
            }
          },
          {
            key: incompleteKey,
            data: {
              rating: 100
            }
          }
        ]);

        transaction.delete(key);

        transaction.commit(function(err) {
          assert.ifError(err);

          // Should not return a result.
          datastore.get(key, function(err, entity) {
            assert.ifError(err);
            assert.strictEqual(entity, undefined);

            // Incomplete key should have been given an id.
            assert.strictEqual(incompleteKey.path.length, 2);
            done();
          });
        });
      });
    });

    it('should query within a transaction', function(done) {
      var transaction = datastore.transaction();

      transaction.run(function(err) {
        assert.ifError(err);

        var query = transaction.createQuery('Company');

        query.run(function(err, entities) {
          if (err) {
            transaction.rollback(done);
            return;
          }

          assert(entities.length > 0);

          transaction.commit(done);
        });
      });
    });
  });
});
