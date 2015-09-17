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

var env = require('./env.js');

var assert = require('assert');
var async = require('async');
var datastore = require('../lib/datastore');
var ds = datastore.dataset(env);
var entity = require('../lib/datastore/entity.js');

describe('datastore', function() {
  it('should allocate IDs', function(done) {
    ds.allocateIds(ds.key('Kind'), 10, function(err, keys) {
      assert.ifError(err);
      assert.equal(keys.length, 10);
      assert.equal(entity.isKeyComplete(keys[0]), true);
      done();
    });
  });

  describe('create, retrieve and delete', function() {
    var post = {
      title: 'How to make the perfect pizza in your grill',
      tags: ['pizza', 'grill'],
      publishedAt: new Date(2001, 0, 1),
      author: 'Silvano',
      isDraft: false,
      wordCount: 400,
      rating: 5.0
    };

    it('should save/get/delete with a key name', function(done) {
      var postKey = ds.key(['Post', 'post1']);
      ds.save({ key: postKey, data: post }, function(err) {
        assert.ifError(err);

        ds.get(postKey, function(err, entity) {
          assert.ifError(err);

          assert.deepEqual(entity.data, post);

          ds.delete(postKey, done);
        });
      });
    });

    it('should save/get/delete with a numeric key id', function(done) {
      var postKey = ds.key(['Post', 123456789]);

      ds.save({ key: postKey, data: post }, function(err) {
        assert.ifError(err);

        ds.get(postKey, function(err, entity) {
          assert.ifError(err);

          assert.deepEqual(entity.data, post);

          ds.delete(postKey, done);
        });
      });
    });

    it('should save/get/delete a buffer', function(done) {
      var postKey = ds.key('Post');
      var data = {
        buf: new Buffer('010100000000000000000059400000000000006940', 'hex')
      };

      ds.save({ key: postKey, data: data }, function(err) {
        assert.ifError(err);

        var assignedId = postKey.path[1];
        assert(assignedId);

        ds.get(postKey, function(err, entity) {
          assert.ifError(err);

          assert.deepEqual(entity.data, data);

          ds.delete(ds.key(['Post', assignedId]), done);
        });
      });
    });

    it('should save/get/delete with a generated key id', function(done) {
      var postKey = ds.key('Post');

      ds.save({ key: postKey, data: post }, function(err) {
        assert.ifError(err);

        // The key's path should now be complete.
        assert(postKey.path[1]);

        ds.get(postKey, function(err, entity) {
          assert.ifError(err);

          assert.deepEqual(entity.data, post);

          ds.delete(postKey, done);
        });
      });
    });

    it('should fail explicitly set second insert on save', function(done) {
      var postKey = ds.key('Post');

      ds.save({ key: postKey, data: post }, function(err) {
        assert.ifError(err);

        // The key's path should now be complete.
        assert(postKey.path[1]);

        ds.save({ key: postKey, method: 'insert', data: post }, function(err) {
          assert.notEqual(err, null); // should fail insert

          ds.get(postKey, function(err, entity) {
            assert.ifError(err);

            assert.deepEqual(entity.data, post);

            ds.delete(postKey, done);
          });
        });
      });
    });

    it('should fail explicitly set first update on save', function(done) {
      var postKey = ds.key('Post');

      ds.save({ key: postKey, method: 'update', data: post }, function(err) {
        assert.notEqual(err, null);
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
      var key1 = ds.key('Post');
      var key2 = ds.key('Post');

      ds.save([
        { key: key1, data: post },
        { key: key2, data: post2 }
      ], function(err) {
        assert.ifError(err);

        var firstKey = ds.key(['Post', key1.path[1]]);
        var secondKey = ds.key(['Post', key2.path[1]]);

        ds.get([firstKey, secondKey], function(err, entities) {
          assert.ifError(err);

          assert.equal(entities.length, 2);

          ds.delete([firstKey, secondKey], done);
        });
      });
    });

    it('should get multiple entities in a stream', function(done) {
      var key1 = ds.key('Post');
      var key2 = ds.key('Post');

      ds.save([
        { key: key1, data: post },
        { key: key2, data: post }
      ], function(err) {
        assert.ifError(err);

        var firstKey = ds.key(['Post', key1.path[1]]);
        var secondKey = ds.key(['Post', key2.path[1]]);

        var numEntitiesEmitted = 0;

        ds.get([firstKey, secondKey])
          .on('error', done)
          .on('data', function() {
            numEntitiesEmitted++;
          })
          .on('end', function() {
            assert.strictEqual(numEntitiesEmitted, 2);

            ds.delete([firstKey, secondKey], done);
          });
      });
    });
  });

  it('should save keys as a part of entity and query by key', function(done) {
    var personKey = ds.key(['Person', 'name']);
    ds.save({
      key: personKey,
      data: {
        fullName: 'Full name',
        linkedTo: personKey // himself
      }
    }, function(err) {
      assert.ifError(err);
      var q = ds.createQuery('Person')
          .filter('linkedTo =', personKey);
      ds.runQuery(q, function(err, results) {
        assert.ifError(err);
        assert.strictEqual(results[0].data.fullName, 'Full name');
        assert.deepEqual(results[0].data.linkedTo, personKey);
        ds.delete(personKey, done);
      });
    });
  });

  describe('querying the datastore', function() {
    var ancestor = ds.key(['Book', 'GoT']);

    var keys = [
      ds.key(['Book', 'GoT', 'Character', 'Rickard']),
      ds.key(['Book', 'GoT', 'Character', 'Rickard', 'Character', 'Eddard']),
      ds.key(['Book', 'GoT', 'Character', 'Catelyn']),
      ds.key(['Book', 'GoT', 'Character', 'Rickard', 'Character', 'Eddard',
          'Character', 'Arya']),
      ds.key(['Book', 'GoT', 'Character', 'Rickard', 'Character', 'Eddard',
          'Character', 'Sansa']),
      ds.key(['Book', 'GoT', 'Character', 'Rickard', 'Character', 'Eddard',
          'Character', 'Robb']),
      ds.key(['Book', 'GoT', 'Character', 'Rickard', 'Character', 'Eddard',
          'Character', 'Bran']),
      ds.key(['Book', 'GoT', 'Character', 'Rickard', 'Character', 'Eddard',
          'Character', 'Jon Snow'])
    ];

    var characters = [{
      name: 'Rickard',
      family: 'Stark',
      appearances: 0,
      alive: false
    }, {
      name: 'Eddard',
      family: 'Stark',
      appearances: 9,
      alive: false
    }, {
      name: 'Catelyn',
      family: ['Stark', 'Tully'],
      appearances: 26,
      alive: false
    }, {
      name: 'Arya',
      family: 'Stark',
      appearances: 33,
      alive: true
    }, {
      name: 'Sansa',
      family: 'Stark',
      appearances: 31,
      alive: true
    }, {
      name: 'Robb',
      family: 'Stark',
      appearances: 22,
      alive: false
    }, {
      name: 'Bran',
      family: 'Stark',
      appearances: 25,
      alive: true
    }, {
      name: 'Jon Snow',
      family: 'Stark',
      appearances: 32,
      alive: true
    }];

    before(function(done) {
      ds.save(keys.map(function(key, index) {
        return {
          key: key,
          data: characters[index]
        };
      }), function(err) {
        assert.ifError(err);
        done();
      });
    });

    it('should limit queries', function(done) {
      var q = ds.createQuery('Character').hasAncestor(ancestor).limit(5)
          .autoPaginate(false);

      ds.runQuery(q, function(err, firstEntities, secondQuery) {
        assert.ifError(err);
        assert.equal(firstEntities.length, 5);

        ds.runQuery(secondQuery, function(err, secondEntities, thirdQuery) {
          assert.ifError(err);
          assert.equal(secondEntities.length, 3);

          ds.runQuery(thirdQuery, function(err, thirdEntities) {
            assert.ifError(err);
            assert.equal(thirdEntities.length, 0);
            done();
          });
        });
      });
    });

    it('should not go over a limit', function(done) {
      var limit = 3;

      var q = ds.createQuery('Character')
        .hasAncestor(ancestor)
        .limit(limit);

      ds.runQuery(q, function(err, results) {
        assert.ifError(err);
        assert.equal(results.length, limit);
        done();
      });
    });

    it('should run a query as a stream', function(done) {
      var q = ds.createQuery('Character').hasAncestor(ancestor);

      var resultsReturned = 0;

      ds.runQuery(q)
        .on('error', done)
        .on('data', function() { resultsReturned++; })
        .on('end', function() {
          assert.equal(resultsReturned, characters.length);
          done();
        });
    });

    it('should not go over a limit with a stream', function(done) {
      var limit = 3;
      var q = ds.createQuery('Character').hasAncestor(ancestor).limit(limit);

      var resultsReturned = 0;

      ds.runQuery(q)
        .on('error', done)
        .on('data', function() { resultsReturned++; })
        .on('end', function() {
          assert.equal(resultsReturned, limit);
          done();
        });
    });

    it('should filter queries with simple indexes', function(done) {
      var q = ds.createQuery('Character').hasAncestor(ancestor)
          .filter('appearances >=', 20);
      ds.runQuery(q, function(err, entities) {
        assert.ifError(err);
        assert.equal(entities.length, 6);
        done();
      });
    });

    it('should filter queries with defined indexes', function(done) {
      var q = ds.createQuery('Character').hasAncestor(ancestor)
          .filter('family =', 'Stark')
          .filter('appearances >=', 20);
      ds.runQuery(q, function(err, entities) {
        assert.ifError(err);
        assert.equal(entities.length, 6);
        done();
      });
    });

    it('should filter by ancestor', function(done) {
      var q = ds.createQuery('Character')
          .hasAncestor(ancestor);
      ds.runQuery(q, function(err, entities) {
        assert.ifError(err);
        assert.equal(entities.length, 8);
        done();
      });
    });

    it('should filter by key', function(done) {
      var q = ds.createQuery('Character').hasAncestor(ancestor)
          .filter('__key__ =', ds.key(['Book', 'GoT', 'Character', 'Rickard']));
      ds.runQuery(q, function(err, entities) {
        assert.ifError(err);
        assert.equal(entities.length, 1);
        done();
      });
    });

    it('should order queries', function(done) {
      var q = ds.createQuery('Character').hasAncestor(ancestor)
          .order('appearances');
      ds.runQuery(q, function(err, entities) {
        assert.ifError(err);
        assert.equal(entities[0].data.name, characters[0].name);
        assert.equal(entities[7].data.name, characters[3].name);
        done();
      });
    });

    it('should select projections', function(done) {
      var q = ds.createQuery('Character').hasAncestor(ancestor)
          .select(['name', 'family']);
      ds.runQuery(q, function(err, entities) {
        assert.ifError(err);
        assert.deepEqual(entities[0].data, {
          name: 'Arya',
          family: 'Stark'
        });
        assert.deepEqual(entities[8].data, {
          name: 'Sansa',
          family: 'Stark'
        });
        done();
      });
    });

    it('should paginate with offset and limit', function(done) {
      var q = ds.createQuery('Character')
        .hasAncestor(ancestor)
        .offset(2)
        .limit(3)
        .order('appearances')
        .autoPaginate(false);

      ds.runQuery(q, function(err, entities, secondQuery) {
        assert.ifError(err);

        assert.equal(entities.length, 3);
        assert.equal(entities[0].data.name, 'Robb');
        assert.equal(entities[2].data.name, 'Catelyn');

        ds.runQuery(secondQuery.offset(0), function(err, secondEntities) {
          assert.ifError(err);

          assert.equal(secondEntities.length, 3);
          assert.equal(secondEntities[0].data.name, 'Sansa');
          assert.equal(secondEntities[2].data.name, 'Arya');
          done();
        });
      });
    });

    it('should resume from a start cursor', function(done) {
      var q = ds.createQuery('Character')
        .hasAncestor(ancestor)
        .offset(2)
        .limit(2)
        .order('appearances')
        .autoPaginate(false);

      ds.runQuery(q, function(err, entities, nextQuery) {
        assert.ifError(err);

        ds.runQuery(nextQuery.limit(-1), function(err, secondEntities) {
          assert.ifError(err);
          assert.equal(secondEntities.length, 4);
          assert.equal(secondEntities[0].data.name, 'Catelyn');
          assert.equal(secondEntities[3].data.name, 'Arya');
          done();
        });
      });
    });

    it('should group queries', function(done) {
      var q = ds.createQuery('Character').hasAncestor(ancestor)
          .groupBy('alive');
      ds.runQuery(q, function(err, entities) {
        assert.ifError(err);
        assert.equal(entities.length, 2);
        done();
      });
    });

    after(function(done) {
      ds.delete(keys, function(err) {
        assert.ifError(err);
        done();
      });
    });
  });

  describe('transactions', function() {
    it('should run in a transaction', function(done) {
      var key = ds.key(['Company', 'Google']);
      var obj = {
        url: 'www.google.com'
      };

      ds.runInTransaction(function(t, tDone) {
        t.get(key, function(err) {
          assert.ifError(err);

          t.save({ key: key, data: obj });
          tDone();
        });
      }, function(err) {
        assert.ifError(err);

        ds.get(key, function(err, entity) {
          assert.ifError(err);

          assert.deepEqual(entity.data, obj);

          ds.delete(key, done);
        });
      });
    });

    it('should commit all saves and deletes at the end', function(done) {
      var deleteKey = ds.key(['Company', 'Subway']);
      var key = ds.key(['Company', 'Google']);
      var incompleteKey = ds.key('Company');

      ds.runInTransaction(function(t, tDone) {
        t.delete(deleteKey);

        t.save([
          {
            key: key,
            data: { rating: 10 }
          },
          {
            key: incompleteKey,
            data: { rating: 100 }
          }
        ]);

        tDone();
      }, function(err) {
        assert.ifError(err);

        // Incomplete key should have been given an ID.
        assert.equal(incompleteKey.path.length, 2);

        async.parallel([
          // The key queued for deletion should have been deleted.
          function(done) {
            ds.get(deleteKey, function(err, entity) {
              assert.ifError(err);
              assert.equal(typeof entity, 'undefined');
              done();
            });
          },

          // Data should have been updated on the key.
          function(done) {
            ds.get(key, function(err, entity) {
              assert.ifError(err);
              assert.equal(entity.data.rating, 10);
              done();
            });
          }
        ], done);
      });
    });

    it('should use the last modification to a key', function(done) {
      var incompleteKey = ds.key('Company');
      var key = ds.key(['Company', 'Google']);

      ds.runInTransaction(function(t, tDone) {
        t.save([
          {
            key: key,
            data: { rating: 10 }
          },
          {
            key: incompleteKey,
            data: { rating: 100 }
          }
        ]);

        t.delete(key);

        tDone();
      }, function(err) {
        assert.ifError(err);

        // Should not return a result.
        ds.get(key, function(err, entity) {
          assert.ifError(err);
          assert.strictEqual(entity, undefined);

          // Incomplete key should have been given an id.
          assert.equal(incompleteKey.path.length, 2);
          done();
        });
      });
    });
  });
});
