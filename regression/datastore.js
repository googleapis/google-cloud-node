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

/*global describe, it, after, before */

'use strict';

var env = require('./env.js');

var assert = require('assert');
var datastore = require('../lib/datastore');
var ds = new datastore.Dataset(env);
var entity = require('../lib/datastore/entity.js');

describe('datastore', function() {

  it('should allocate IDs', function(done) {
    ds.allocateIds(ds.key('Kind', null), 10, function(err, keys) {
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
      var postKey = ds.key('Post', 'post1');
      ds.save({ key: postKey, data: post }, function(err, key) {
        assert.ifError(err);
        assert.equal(key.path_[1], 'post1');
        ds.get(key, function(err, entity) {
          assert.ifError(err);
          assert.deepEqual(entity.data, post);
          ds.delete(key, function(err) {
            assert.ifError(err);
            done();
          });
        });
      });
    });

    it('should save/get/delete with a numeric key id', function(done) {
      var postKey = ds.key('Post', 123456789);
      ds.save({
        key: postKey,
        data: post
      }, function(err, key) {
        assert.ifError(err);
        assert.equal(key.path_[1], 123456789);
        ds.get(key, function(err, entity) {
          assert.ifError(err);
          assert.deepEqual(entity.data, post);
          ds.delete(key, function(err) {
            assert.ifError(err);
            done();
          });
        });
      });
    });

    it('should save/get/delete with a generated key id', function(done) {
      ds.save({
        key: ds.key('Post', null),
        data: post
      }, function(err, key) {
        assert.ifError(err);
        var assignedId = key.path_[1];
        assert(assignedId);
        ds.get(ds.key('Post', assignedId), function(err, entity) {
          assert.ifError(err);
          assert.deepEqual(entity.data, post);
          ds.delete(ds.key('Post', assignedId), function(err) {
            assert.ifError(err);
            done();
          });
        });
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
      var key = ds.key('Post', null);
      ds.save([
        { key: key, data: post },
        { key: key, data: post2 }
      ], function(err, keys) {
        assert.ifError(err);
        assert.equal(keys.length,2);
        var firstKey = ds.key('Post', keys[0].path_[1]);
        var secondKey = ds.key('Post', keys[1].path_[1]);
        ds.get([firstKey, secondKey], function(err, entities) {
          assert.ifError(err);
          assert.equal(entities.length, 2);
          ds.delete([firstKey, secondKey], function(err) {
            assert.ifError(err);
            done();
          });
        });
      });
    });

  });

  it('should be able to save keys as a part of entity and query by key',
      function(done) {
    var personKey = ds.key('Person', 'name');
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

    var keys = [
      ds.key('Character', 'Rickard'),
      ds.key('Character', 'Rickard', 'Character', 'Eddard'),
      ds.key('Character', 'Catelyn'),
      ds.key('Character', 'Eddard', 'Character', 'Arya'),
      ds.key('Character', 'Eddard', 'Character', 'Sansa'),
      ds.key('Character', 'Eddard', 'Character', 'Robb'),
      ds.key('Character', 'Eddard', 'Character', 'Bran'),
      ds.key('Character', 'Eddard', 'Character', 'Jon Snow')
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
      var q = ds.createQuery('Character').limit(5);
      ds.runQuery(q, function(err, firstEntities, secondQuery) {
        assert.ifError(err);
        assert.equal(firstEntities.length, 5);
        assert(secondQuery);
        ds.runQuery(secondQuery, function(err, secondEntities, thirdQuery) {
          assert.ifError(err);
          assert.equal(secondEntities.length, 3);
          // TODO(silvano): it currently requires an additional request that
          // brings an empty page and a null query
          //assert.equal(thirdQuery, null)
          ds.runQuery(thirdQuery, function(err, thirdEntities, fourthQuery) {
            assert.ifError(err);
            assert.equal(fourthQuery, null);
            done();
          });
        });
      });
    });

    it('should filter queries with simple indexes', function(done) {
      var q = ds.createQuery('Character').filter('appearances >=', 20);
      ds.runQuery(q, function(err, entities) {
        assert.ifError(err);
        assert.equal(entities.length, 6);
        done();
      });
    });

    it('should filter queries with defined indexes', function(done) {
      var q = ds.createQuery('Character')
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
          .hasAncestor(ds.key('Character', 'Eddard'));
      ds.runQuery(q, function(err, entities) {
        assert.ifError(err);
        assert.equal(entities.length, 5);
        done();
      });
    });

    it('should filter by key', function(done) {
      var q = ds.createQuery('Character')
          .filter('__key__ =', ds.key('Character', 'Rickard'));
      ds.runQuery(q, function(err, entities) {
        assert.ifError(err);
        assert.equal(entities.length, 1);
        done();
      });
    });

    it('should order queries', function(done) {
      var q = ds.createQuery('Character').order('appearances');
      ds.runQuery(q, function(err, entities) {
        assert.ifError(err);
        assert.equal(entities[0].data.name, characters[0].name);
        assert.equal(entities[7].data.name, characters[3].name);
        done();
      });
    });

    it('should select projections', function(done) {
      var q = ds.createQuery('Character').select(['name', 'family']);
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
          .offset(2)
          .limit(3)
          .order('appearances');
      ds.runQuery(q, function(err, entities, secondQuery) {
        assert.ifError(err);
        assert.equal(entities.length, 3);
        assert.equal(entities[0].data.name, 'Robb');
        assert.equal(entities[2].data.name, 'Catelyn');
        ds.runQuery(secondQuery, function(err, secondEntities) {
          assert.equal(secondEntities.length, 3);
          assert.equal(secondEntities[0].data.name, 'Sansa');
          assert.equal(secondEntities[2].data.name, 'Arya');
          done();
        });
      });
    });

    it('should resume from a start cursor', function(done) {
      var q = ds.createQuery('Character')
          .offset(2)
          .limit(2)
          .order('appearances');
      ds.runQuery(q, function(err, entities, nextQuery) {
        assert.ifError(err);
        var startCursor = nextQuery.startVal;
        var cursorQuery =
            ds.createQuery('Character')
              .order('appearances')
              .start(startCursor);
        ds.runQuery(cursorQuery, function(err, secondEntities) {
          assert.ifError(err);
          assert.equal(secondEntities.length, 4);
          assert.equal(secondEntities[0].data.name, 'Catelyn');
          assert.equal(secondEntities[3].data.name, 'Arya');
          done();
        });
      });
    });

    it('should group queries', function(done) {
      var q = ds.createQuery('Character').groupBy('alive');
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
      var key = ds.key('Company', 'Google');
      var obj = {
        url: 'www.google.com'
      };
      ds.runInTransaction(function(t, tDone) {
        ds.get(key, function(err, entity) {
          assert.ifError(err);
          if (entity) {
            tDone();
            return;
          } else {
            ds.save({ key: key, data: obj }, function(err) {
              assert.ifError(err);
              tDone();
              return;
            });
          }
        });
      }, function(err) {
        assert.ifError(err);
        ds.get(key, function(err, entity) {
          assert.ifError(err);
          assert.deepEqual(entity.data, obj);
          ds.delete(entity.key, function(err) {
            assert.ifError(err);
            done();
          });
        });
      });
    });
  });
});
