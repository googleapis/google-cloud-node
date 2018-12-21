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

import * as assert from 'assert';
import {Datastore} from '../src';
import {entity} from '../src/entity';

describe('Datastore', () => {
  const testKinds: Array<{}> = [];
  const datastore = new Datastore();
  // Override the Key method so we can track what keys are created during the
  // tests. They are then deleted in the `after` hook.
  const key = datastore.key;
  datastore.key = function(options) {
    const keyObject = key.call(this, options);
    testKinds.push(keyObject.kind);
    return keyObject;
  };

  after(async () => {
    async function deleteEntities(kind) {
      const query = datastore.createQuery(kind).select('__key__');

      const [entities] = await datastore.runQuery(query);
      const keys = entities.map(entity => {
        return entity[datastore.KEY];
      });

      await datastore.delete(keys);
    }

    await Promise.all(testKinds.map(kind => deleteEntities(kind)));
  });

  it('should allocate IDs', done => {
    datastore.allocateIds(datastore.key('Kind'), 10, (err, keys) => {
      assert.ifError(err);
      assert.strictEqual(keys.length, 10);
      assert.strictEqual(entity.isKeyComplete(keys[0]), true);
      done();
    });
  });

  describe('create, retrieve and delete', () => {
    const post = {
      title: 'How to make the perfect pizza in your grill',
      tags: ['pizza', 'grill'],
      publishedAt: new Date(),
      author: 'Silvano',
      isDraft: false,
      wordCount: 400,
      rating: 5.0,
      likes: null,
      metadata: {
        views: 100,
      },
    };

    it('should excludeFromIndexes correctly', done => {
      const longString = Buffer.alloc(1501, '.').toString();
      const postKey = datastore.key(['Post', 'post1']);

      const data = {
        longString,
        notMetadata: true,
        longStringArray: [longString],
        metadata: {
          longString,
          otherProperty: 'value',
          obj: {
            longStringArray: [
              {
                longString,
                nestedLongStringArray: [
                  {
                    longString,
                    nestedProperty: true,
                  },
                  {
                    longString,
                  },
                ],
              },
            ],
          },
          longStringArray: [
            {
              longString,
              nestedLongStringArray: [
                {
                  longString,
                  nestedProperty: true,
                },
                {
                  longString,
                },
              ],
            },
          ],
        },
      };

      datastore.save(
          {
            key: postKey,
            data,
            excludeFromIndexes: [
              'longString',
              'longStringArray[]',
              'metadata.obj.longString',
              'metadata.obj.longStringArray[].longString',
              'metadata.obj.longStringArray[].nestedLongStringArray[].longString',
              'metadata.longString',
              'metadata.longStringArray[].longString',
              'metadata.longStringArray[].nestedLongStringArray[].longString',
            ],
          },
          err => {
            assert.ifError(err);

            datastore.get(postKey, (err, entity) => {
              assert.ifError(err);

              assert.deepStrictEqual(entity, data);
              assert.deepStrictEqual(entity[datastore.KEY], postKey);

              datastore.delete(postKey, done);
            });
          });
    });

    it('should save/get/delete with a key name', done => {
      const postKey = datastore.key(['Post', 'post1']);

      datastore.save({key: postKey, data: post}, err => {
        assert.ifError(err);

        datastore.get(postKey, (err, entity) => {
          assert.ifError(err);

          assert.deepStrictEqual(entity, post);
          assert.deepStrictEqual(entity[datastore.KEY], postKey);

          datastore.delete(postKey, done);
        });
      });
    });

    it('should save/get/delete with a numeric key id', done => {
      const postKey = datastore.key(['Post', 123456789]);

      datastore.save({key: postKey, data: post}, err => {
        assert.ifError(err);

        datastore.get(postKey, (err, entity) => {
          assert.ifError(err);

          assert.deepStrictEqual(entity, post);

          datastore.delete(postKey, done);
        });
      });
    });

    it('should save/get/delete a buffer', done => {
      const postKey = datastore.key(['Post']);
      const data = {
        buf: Buffer.from('010100000000000000000059400000000000006940', 'hex'),
      };

      datastore.save({key: postKey, data}, err => {
        assert.ifError(err);

        const assignedId = postKey.id;
        assert(assignedId);

        datastore.get(postKey, (err, entity) => {
          assert.ifError(err);
          assert.deepStrictEqual(entity, data);
          datastore.delete(datastore.key(['Post', assignedId]), done);
        });
      });
    });

    it('should save/get/delete with a generated key id', done => {
      const postKey = datastore.key('Post');

      datastore.save({key: postKey, data: post}, err => {
        assert.ifError(err);

        // The key's path should now be complete.
        assert(postKey.id);

        datastore.get(postKey, (err, entity) => {
          assert.ifError(err);

          assert.deepStrictEqual(entity, post);

          datastore.delete(postKey, done);
        });
      });
    });

    it('should save/get/update', done => {
      const postKey = datastore.key('Post');

      datastore.save({key: postKey, data: post}, err => {
        assert.ifError(err);

        datastore.get(postKey, (err, entity) => {
          assert.ifError(err);

          assert.strictEqual(entity.title, post.title);

          entity.title = 'Updated';

          datastore.save(entity, err => {
            assert.ifError(err);

            datastore.get(postKey, (err, entity) => {
              assert.ifError(err);
              assert.strictEqual(entity.title, 'Updated');
              datastore.delete(postKey, done);
            });
          });
        });
      });
    });

    it('should save and get with a string ID', done => {
      const longIdKey = datastore.key([
        'Post',
        datastore.int('100000000000001234'),
      ]);

      datastore.save(
          {
            key: longIdKey,
            data: {
              test: true,
            },
          },
          err => {
            assert.ifError(err);

            datastore.get(longIdKey, (err, entity) => {
              assert.ifError(err);
              assert.strictEqual(entity.test, true);
              done();
            });
          });
    });

    it('should fail explicitly set second insert on save', done => {
      const postKey = datastore.key('Post');

      datastore.save({key: postKey, data: post}, err => {
        assert.ifError(err);

        // The key's path should now be complete.
        assert(postKey.id);

        datastore.save(
            {
              key: postKey,
              method: 'insert',
              data: post,
            },
            err => {
              assert.notStrictEqual(err, null);  // should fail insert.
              datastore.get(postKey, (err, entity) => {
                assert.ifError(err);
                assert.deepStrictEqual(entity, post);
                datastore.delete(postKey, done);
              });
            });
      });
    });

    it('should fail explicitly set first update on save', done => {
      const postKey = datastore.key('Post');

      datastore.save(
          {
            key: postKey,
            method: 'update',
            data: post,
          },
          err => {
            assert.notStrictEqual(err, null);
            done();
          });
    });

    it('should save/get/delete multiple entities at once', done => {
      const post2 = {
        title: 'How to make the perfect homemade pasta',
        tags: ['pasta', 'homemade'],
        publishedAt: new Date('2001-01-01T00:00:00.000Z'),
        author: 'Silvano',
        isDraft: false,
        wordCount: 450,
        rating: 4.5,
      };

      const key1 = datastore.key('Post');
      const key2 = datastore.key('Post');

      datastore.save(
          [{key: key1, data: post}, {key: key2, data: post2}], err => {
            assert.ifError(err);
            datastore.get([key1, key2], (err, entities) => {
              assert.ifError(err);
              assert.strictEqual(entities.length, 2);
              datastore.delete([key1, key2], done);
            });
          });
    });

    it('should get multiple entities in a stream', done => {
      const key1 = datastore.key('Post');
      const key2 = datastore.key('Post');

      datastore.save(
          [{key: key1, data: post}, {key: key2, data: post}], err => {
            assert.ifError(err);

            let numEntitiesEmitted = 0;

            datastore.createReadStream([key1, key2])
                .on('error', done)
                .on('data',
                    () => {
                      numEntitiesEmitted++;
                    })
                .on('end', () => {
                  assert.strictEqual(numEntitiesEmitted, 2);
                  datastore.delete([key1, key2], done);
                });
          });
    });

    it('should save keys as a part of entity and query by key', done => {
      const personKey = datastore.key(['People', 'US', 'Person', 'name']);

      datastore.save(
          {
            key: personKey,
            data: {
              fullName: 'Full name',
              linkedTo: personKey,  // himself
            },
          },
          err => {
            assert.ifError(err);

            const query = datastore.createQuery('Person')
                              .hasAncestor(datastore.key(['People', 'US']))
                              .filter('linkedTo', personKey);

            datastore.runQuery(query, (err, results) => {
              assert.ifError(err);
              assert.strictEqual(results[0].fullName, 'Full name');
              assert.deepStrictEqual(results[0].linkedTo, personKey);
              datastore.delete(personKey, done);
            });
          });
    });

    describe('entity types', () => {
      it('should save and decode an int', done => {
        const integerValue = 2015;
        const integerType = Datastore.int(integerValue);

        const key = datastore.key('Person');

        datastore.save(
            {
              key,
              data: {
                year: integerType,
              },
            },
            err => {
              assert.ifError(err);

              datastore.get(key, (err, entity) => {
                assert.ifError(err);
                assert.strictEqual(entity.year, integerValue);
                done();
              });
            });
      });

      it('should save and decode a double', done => {
        const doubleValue = 99.99;
        const doubleType = Datastore.double(doubleValue);

        const key = datastore.key('Person');

        datastore.save(
            {
              key,
              data: {
                nines: doubleType,
              },
            },
            err => {
              assert.ifError(err);

              datastore.get(key, (err, entity) => {
                assert.ifError(err);
                assert.strictEqual(entity.nines, doubleValue);
                done();
              });
            });
      });

      it('should save and decode a geo point', done => {
        const geoPointValue = {
          latitude: 40.6894,
          longitude: -74.0447,
        };
        const geoPointType = Datastore.geoPoint(geoPointValue);

        const key = datastore.key('Person');

        datastore.save(
            {
              key,
              data: {
                location: geoPointType,
              },
            },
            err => {
              assert.ifError(err);

              datastore.get(key, (err, entity) => {
                assert.ifError(err);
                assert.deepStrictEqual(entity.location, geoPointValue);
                done();
              });
            });
      });
    });
  });

  describe('querying the datastore', () => {
    const ancestor = datastore.key(['Book', 'GoT']);

    const keys = [
      // Paths:
      ['Rickard'],
      ['Rickard', 'Character', 'Eddard'],
      ['Catelyn'],
      ['Rickard', 'Character', 'Eddard', 'Character', 'Arya'],
      ['Rickard', 'Character', 'Eddard', 'Character', 'Sansa'],
      ['Rickard', 'Character', 'Eddard', 'Character', 'Robb'],
      ['Rickard', 'Character', 'Eddard', 'Character', 'Bran'],
      ['Rickard', 'Character', 'Eddard', 'Character', 'Jon Snow'],
    ].map(path => {
      return datastore.key(['Book', 'GoT', 'Character'].concat(path));
    });

    const characters = [
      {
        name: 'Rickard',
        family: 'Stark',
        appearances: 9,
        alive: false,
      },
      {
        name: 'Eddard',
        family: 'Stark',
        appearances: 9,
        alive: false,
      },
      {
        name: 'Catelyn',
        family: ['Stark', 'Tully'],
        appearances: 26,
        alive: false,
      },
      {
        name: 'Arya',
        family: 'Stark',
        appearances: 33,
        alive: true,
      },
      {
        name: 'Sansa',
        family: 'Stark',
        appearances: 31,
        alive: true,
      },
      {
        name: 'Robb',
        family: 'Stark',
        appearances: 22,
        alive: false,
      },
      {
        name: 'Bran',
        family: 'Stark',
        appearances: 25,
        alive: true,
      },
      {
        name: 'Jon Snow',
        family: 'Stark',
        appearances: 32,
        alive: true,
      },
    ];

    before(done => {
      const keysToSave = keys.map((key, index) => {
        return {
          key,
          data: characters[index],
        };
      });

      datastore.save(keysToSave, done);
    });

    after(done => {
      datastore.delete(keys, done);
    });

    it('should limit queries', done => {
      const q =
          datastore.createQuery('Character').hasAncestor(ancestor).limit(5);

      datastore.runQuery(q, (err, firstEntities, info) => {
        assert.ifError(err);
        assert.strictEqual(firstEntities.length, 5);

        const secondQ = datastore.createQuery('Character')
                            .hasAncestor(ancestor)
                            .start(info.endCursor);

        datastore.runQuery(secondQ, (err, secondEntities) => {
          assert.ifError(err);
          assert.strictEqual(secondEntities.length, 3);
          done();
        });
      });
    });

    it('should not go over a limit', done => {
      const limit = 3;

      const q =
          datastore.createQuery('Character').hasAncestor(ancestor).limit(limit);

      datastore.runQuery(q, (err, results) => {
        assert.ifError(err);
        assert.strictEqual(results.length, limit);
        done();
      });
    });

    it('should run a query as a stream', done => {
      const q = datastore.createQuery('Character').hasAncestor(ancestor);
      let resultsReturned = 0;
      datastore.runQueryStream(q)
          .on('error', done)
          .on('data',
              () => {
                resultsReturned++;
              })
          .on('end', () => {
            assert.strictEqual(resultsReturned, characters.length);
            done();
          });
    });

    it('should not go over a limit with a stream', done => {
      const limit = 3;
      const q =
          datastore.createQuery('Character').hasAncestor(ancestor).limit(limit);

      let resultsReturned = 0;

      datastore.runQueryStream(q)
          .on('error', done)
          .on('data',
              () => {
                resultsReturned++;
              })
          .on('end', () => {
            assert.strictEqual(resultsReturned, limit);
            done();
          });
    });

    it('should filter queries with simple indexes', done => {
      const q = datastore.createQuery('Character')
                    .hasAncestor(ancestor)
                    .filter('appearances', '>=', 20);

      datastore.runQuery(q, (err, entities) => {
        assert.ifError(err);
        assert.strictEqual(entities.length, 6);
        done();
      });
    });

    it('should filter queries with defined indexes', done => {
      const q = datastore.createQuery('Character')
                    .hasAncestor(ancestor)
                    .filter('family', 'Stark')
                    .filter('appearances', '>=', 20);

      datastore.runQuery(q, (err, entities) => {
        assert.ifError(err);
        assert.strictEqual(entities.length, 6);
        done();
      });
    });

    it('should filter by ancestor', done => {
      const q = datastore.createQuery('Character').hasAncestor(ancestor);

      datastore.runQuery(q, (err, entities) => {
        assert.ifError(err);
        assert.strictEqual(entities.length, characters.length);
        done();
      });
    });

    it('should filter by key', done => {
      const key = datastore.key(['Book', 'GoT', 'Character', 'Rickard']);

      const q = datastore.createQuery('Character')
                    .hasAncestor(ancestor)
                    .filter('__key__', key);

      datastore.runQuery(q, (err, entities) => {
        assert.ifError(err);
        assert.strictEqual(entities.length, 1);
        done();
      });
    });

    it('should order queries', done => {
      const q = datastore.createQuery('Character')
                    .hasAncestor(ancestor)
                    .order('appearances');

      datastore.runQuery(q, (err, entities) => {
        assert.ifError(err);

        assert.strictEqual(entities[0].name, characters[0].name);
        assert.strictEqual(entities[7].name, characters[3].name);

        done();
      });
    });

    it('should select projections', done => {
      const q =
          datastore.createQuery('Character').hasAncestor(ancestor).select([
            'name', 'family'
          ]);

      datastore.runQuery(q, (err, entities) => {
        assert.ifError(err);

        assert.deepStrictEqual(entities[0], {
          name: 'Arya',
          family: 'Stark',
        });

        assert.deepStrictEqual(entities[8], {
          name: 'Sansa',
          family: 'Stark',
        });

        done();
      });
    });

    it('should paginate with offset and limit', done => {
      const q = datastore.createQuery('Character')
                    .hasAncestor(ancestor)
                    .offset(2)
                    .limit(3)
                    .order('appearances');

      datastore.runQuery(q, (err, entities, info) => {
        assert.ifError(err);

        assert.strictEqual(entities.length, 3);
        assert.strictEqual(entities[0].name, 'Robb');
        assert.strictEqual(entities[2].name, 'Catelyn');

        const secondQ = datastore.createQuery('Character')
                            .hasAncestor(ancestor)
                            .order('appearances')
                            .start(info.endCursor);

        datastore.runQuery(secondQ, (err, secondEntities) => {
          assert.ifError(err);
          assert.strictEqual(secondEntities.length, 3);
          assert.strictEqual(secondEntities[0].name, 'Sansa');
          assert.strictEqual(secondEntities[2].name, 'Arya');
          done();
        });
      });
    });

    it('should resume from a start cursor', done => {
      const q = datastore.createQuery('Character')
                    .hasAncestor(ancestor)
                    .offset(2)
                    .limit(2)
                    .order('appearances');

      datastore.runQuery(q, (err, entities, info) => {
        assert.ifError(err);

        const secondQ = datastore.createQuery('Character')
                            .hasAncestor(ancestor)
                            .order('appearances')
                            .start(info.endCursor);

        datastore.runQuery(secondQ, (err, secondEntities) => {
          assert.ifError(err);

          assert.strictEqual(secondEntities.length, 4);
          assert.strictEqual(secondEntities[0].name, 'Catelyn');
          assert.strictEqual(secondEntities[3].name, 'Arya');

          done();
        });
      });
    });

    it('should group queries', done => {
      const q = datastore.createQuery('Character')
                    .hasAncestor(ancestor)
                    .groupBy('appearances');

      datastore.runQuery(q, (err, entities) => {
        assert.ifError(err);
        assert.strictEqual(entities.length, characters.length - 1);
        done();
      });
    });

    it('should query from the Query object', done => {
      const q = datastore.createQuery('Character');
      q.run(done);
    });
  });

  describe('transactions', () => {
    it('should run in a transaction', done => {
      const key = datastore.key(['Company', 'Google']);
      const obj = {
        url: 'www.google.com',
      };

      const transaction = datastore.transaction();
      transaction.run(err => {
        assert.ifError(err);
        transaction.get(key, err => {
          assert.ifError(err);
          transaction.save({key, data: obj});
          transaction.commit(err => {
            assert.ifError(err);
            datastore.get(key, (err, entity) => {
              assert.ifError(err);
              assert.deepStrictEqual(entity, obj);
              done();
            });
          });
        });
      });
    });

    it('should commit all saves and deletes at the end', async () => {
      const deleteKey = datastore.key(['Company', 'Subway']);
      const key = datastore.key(['Company', 'Google']);
      const incompleteKey = datastore.key('Company');

      await datastore.save({
        key: deleteKey,
        data: {},
      });
      const transaction = datastore.transaction();

      await transaction.run();
      transaction.delete(deleteKey);

      await transaction.save([
        {
          key,
          data: {rating: 10},
        },
        {
          key: incompleteKey,
          data: {rating: 100},
        },
      ]);

      await transaction.commit();

      // Incomplete key should have been given an ID.
      assert.strictEqual(incompleteKey.path.length, 2);

      const [[deletedEntity], [fetchedEntity]] = await Promise.all([
        // Deletes the key that is in the deletion queue.
        datastore.get(deleteKey),
        // Updates data on the key.
        datastore.get(key)
      ]);
      assert.strictEqual(typeof deletedEntity, 'undefined');
      assert.strictEqual(fetchedEntity.rating, 10);
    });

    it('should use the last modification to a key', done => {
      const incompleteKey = datastore.key('Company');
      const key = datastore.key(['Company', 'Google']);

      const transaction = datastore.transaction();

      transaction.run(err => {
        assert.ifError(err);

        transaction.save([
          {
            key,
            data: {
              rating: 10,
            },
          },
          {
            key: incompleteKey,
            data: {
              rating: 100,
            },
          },
        ]);

        transaction.delete(key);

        transaction.commit(err => {
          assert.ifError(err);

          // Should not return a result.
          datastore.get(key, (err, entity) => {
            assert.ifError(err);
            assert.strictEqual(entity, undefined);

            // Incomplete key should have been given an id.
            assert.strictEqual(incompleteKey.path.length, 2);
            done();
          });
        });
      });
    });

    it('should query within a transaction', done => {
      const transaction = datastore.transaction();
      transaction.run(err => {
        assert.ifError(err);
        const query = transaction.createQuery('Company');
        query.run((err, entities) => {
          if (err) {
            transaction.rollback(done);
            return;
          }
          assert(entities.length > 0);
          transaction.commit(done);
        });
      });
    });

    it('should read in a readOnly transaction', done => {
      const transaction = datastore.transaction({readOnly: true});
      const key = datastore.key(['Company', 'Google']);
      transaction.run(err => {
        assert.ifError(err);
        transaction.get(key, done);
      });
    });

    it('should not write in a readOnly transaction', done => {
      const transaction = datastore.transaction({readOnly: true});
      const key = datastore.key(['Company', 'Google']);
      transaction.run(err => {
        assert.ifError(err);
        transaction.get(key, err => {
          assert.ifError(err);
          transaction.save({key, data: {}});
          transaction.commit(err => {
            assert(err instanceof Error);
            done();
          });
        });
      });
    });
  });
});
