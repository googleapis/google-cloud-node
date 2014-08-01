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

var env = require('./env.js');

var assert = require('assert'),
  datastore = require('../lib/datastore'),
  ds = new datastore.Dataset(env);

describe('datastore', function() {

  describe('create, retrieve and delete using the datastore service', function() {

    it('should save/get/delete with a key name', function(done) {
      var post = {
        title: "How to make the perfect pizza in your grill",
        tags: ['pizza', 'grill'],
        publishedAt: Date("2001-01-01T00:00:00.000Z"),
        author: "Silvano",
        isDraft: false,
        wordCount: 400,
        rating: 5.0,
      };
      var postKeyName = 'post1';

      ds.save(['Post', postKeyName], post, function(err, key) {
        if (err) return done(err);
        assert.equal(key[1], postKeyName);
        ds.get(['Post', postKeyName], function(err, entity) {
          if (err) return done(err);
          assert.deepEqual(entity.data, post);
          ds.del(['Post', postKeyName], function(err) {
            if (err) return done(err);
            done();
          });
        });
      });
    });

    it('should save/get/delete with a numeric key id', function(done) {
      var post = {
        title: "How to make the perfect pizza in your grill",
        tags: ['pizza', 'grill'],
        publishedAt: Date("2001-01-01T00:00:00.000Z"),
        author: "Silvano",
        isDraft: false,
        wordCount: 400,
        rating: 5.0,
      };
      var postKeyId = '123456789';

      ds.save(['Post', postKeyId], post, function(err, key) {
        if (err) return done(err);
        assert.equal(key[1], postKeyId);
        ds.get(['Post', postKeyId], function(err, entity) {
          if (err) return done(err);
          assert.deepEqual(entity.data, post);
          ds.del(['Post', postKeyId], function(err) {
            if (err) return done(err);
            done();
          });
        });
      });
    });

    it('should save/get/delete with an automatically generated key id', function(done) {
      var post = {
        title: "How to make the perfect pizza in your grill",
        tags: ['pizza', 'grill'],
        publishedAt: Date("2001-01-01T00:00:00.000Z"),
        author: "Silvano",
        isDraft: false,
        wordCount: 400,
        rating: 5.0,
      };
      ds.save(['Post', null], post, function(err, key) {
        if (err) return done(err);
        assert(key[1]);
        var assignedId = key[1];
        ds.get(['Post', assignedId], function(err, entity) {
          if (err) return done(err);
          assert.deepEqual(entity.data, post);
          ds.del(['Post', assignedId], function(err) {
            if (err) return done(err);
            done();
          });
        });
      });
    });

    it('should save/get/delete multiple entities at once', function(done) {
      var post1 = {
        title: "How to make the perfect pizza in your grill",
        tags: ['pizza', 'grill'],
        publishedAt: Date("2001-01-01T00:00:00.000Z"),
        author: "Silvano",
        isDraft: false,
        wordCount: 400,
        rating: 5.0,
      };
      var post2 = {
        title: "How to make the perfect homemade pasta",
        tags: ['pasta', 'homemade'],
        publishedAt: Date("2001-01-01T00:00:00.000Z"),
        author: "Silvano",
        isDraft: false,
        wordCount: 450,
        rating: 4.5,
      };
      var key = ['Post', null];
      ds.saveAll([key, key], [post1, post2], function(err, keys) {
        if (err) return done(err);
        assert.equal(keys.length,2);
        var firstKey = ['Post', keys[0][1]],
            secondKey = ['Post', keys[1][1]];
        ds.getAll([firstKey, secondKey], function(err, entities) {
          if (err) return done(err);
          assert.equal(entities.length, 2);
          ds.delAll([firstKey, secondKey], function(err) {
            if (err) return done(err);
            done();
          });
        });
      })
    });

  });

  describe('querying the datastore', function() {

    var keys = [
      ['Character', 'Rickard'],
      ['Character', 'Rickard', 'Character', 'Eddard'],
      ['Character', 'Catelyn'],
      ['Character', 'Eddard', 'Character', 'Arya'],
      ['Character', 'Eddard', 'Character', 'Sansa'],
      ['Character', 'Eddard', 'Character', 'Robb'],
      ['Character', 'Eddard', 'Character', 'Bran'],
      ['Character', 'Eddard', 'Character', 'Jon Snow']
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

      ds.saveAll(keys, characters, function(err, keys) {
        if (err) return done(err);
        done();
      });

    });

    it('should limit queries', function(done) {
      var q = ds.createQuery('Character').limit(5);
      ds.runQuery(q, function(err, firstEntities, secondQuery) {
        if (err) return done(err);
        assert.equal(firstEntities.length, 5);
        assert(secondQuery);
        ds.runQuery(secondQuery, function(err, secondEntities, thirdQuery) {
          if (err) return done(err);
          assert.equal(secondEntities.length, 3);
          // TODO(silvano): it currently requires an additional request that brings
          // an empty page and a null query
          //assert.equal(thirdQuery, null)
          ds.runQuery(thirdQuery, function(err, thirdEntities, fourthQuery) {
            if (err) return done(err);
            assert.equal(fourthQuery, null);
            done();
          });
        });
      });
    });

    it('should filter queries with simple indexes', function(done) {
      var q = ds.createQuery('Character')
        .filter('appearances >=', 20);
      ds.runQuery(q, function(err, entities, nextQuery) {
        if (err) return done(err);
        assert.equal(entities.length, 6);
        done();
      });
    });

    it('should filter queries with defined indexes', function(done) {
      var q = ds.createQuery('Character')
        .filter('family =', 'Stark')
        .filter('appearances >=', 20);
      ds.runQuery(q, function(err, entities, nextQuery) {
        if (err) return done(err);
        assert.equal(entities.length, 6);
        done();
      });
    });

    it('should filter by ancestor', function(done) {
      var q = ds.createQuery('Character').hasAncestor(['Character', 'Eddard']);
      ds.runQuery(q, function(err, entities, nextQuery) {
        if (err) return done(err);
        assert.equal(entities.length, 5);
        done();
      });
    });

    it('should filter by key', function(done) {
      var q = ds.createQuery('Character')
          .filter('__key__ =', ['Character', 'Rickard']);
      ds.runQuery(q, function(err, entities, nextQuery) {
        if (err) return done(err);
        assert.equal(entities.length, 1);
        done();
      });
    });

    it('should order queries', function(done) {
      var q = ds.createQuery('Character').order('+appearances');
      ds.runQuery(q, function(err, entities, nextQuery) {
        if (err) return done(err);
        assert.equal(entities[0].data.name, characters[0].name);
        assert.equal(entities[7].data.name, characters[3].name);
        done();
      });
    });

    it('should select projections', function(done) {
      var q = ds.createQuery('Character')
        .select(['name', 'family']);
      ds.runQuery(q, function(err, entities, nextQuery) {
        if (err) return done(err);
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
        .order('+appearances');
      ds.runQuery(q, function(err, entities, secondQuery) {
        if (err) return done(err);
        assert.equal(entities.length, 3);
        assert.equal(entities[0].data.name, 'Robb');
        assert.equal(entities[2].data.name, 'Catelyn');
        ds.runQuery(secondQuery, function(err, secondEntities, thirdQuery) {
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
        .order('+appearances');
      ds.runQuery(q, function(err, entities, nextQuery) {
        if (err) return done(err);
        var startCursor = nextQuery.startVal;
        var cursorQuery = ds.createQuery('Character')
          .order('+appearances')
          .start(startCursor);
        ds.runQuery(cursorQuery, function(err, secondEntities, nextQuery) {
          if (err) return done(err);
          assert.equal(secondEntities.length, 4);
          assert.equal(secondEntities[0].data.name, 'Catelyn');
          assert.equal(secondEntities[3].data.name, 'Arya');
          done();
        });
      });
    });

    it('should group queries', function(done) {
      var q = ds.createQuery('Character')
        .groupBy('alive');
      ds.runQuery(q, function(err, entities, nextQuery) {
        if (err) return done(err);
        assert.equal(entities.length, 2);
        done();
      });
    })

    after(function(done) {

      ds.delAll(keys, function(err) {
        if (err) return done(err);
        done();
      });

    });

  });

  describe('transactions', function() {

    it('should run in a transaction', function(done) {
      var key = ['Company', 'Google'],
        obj = {
          'url': 'www.google.com'
        };
      ds.runInTransaction(function(t, tDone) {
        ds.get(key, function(err, entity) {
          if (err) return done(err);
          if (entity) {
            tDone();
            return;
          } else {
            ds.save(key, obj, function(err, keyRes) {
              if (err) console.log(err);
              tDone();
              return;
            });
          }
        });
      }, function(err) {
        if (err) throw (err);
        ds.get(key, function(err, entity) {
          if (err) return done(err);
          assert.deepEqual(entity.data, obj);
          ds.del(entity.key, function(err) {
            if (err) return done(err);
            done();
          })
        });
      });
    });

  });

});
