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
const assertRejects = require('assert-rejects');

describe('Datastore', () => {
  const testKinds: string[] = [];
  const datastore = new Datastore({
    namespace: `${Date.now()}`,
  });
  // Override the Key method so we can track what keys are created during the
  // tests. They are then deleted in the `after` hook.
  const key = datastore.key;
  // tslint:disable-next-line no-any
  datastore.key = function(options: any) {
    const keyObject = key.call(this, options);
    testKinds.push(keyObject.kind);
    return keyObject;
  };

  after(async () => {
    async function deleteEntities(kind: string) {
      const query = datastore.createQuery(kind).select('__key__');
      const [entities] = await datastore.runQuery(query);
      const keys = entities.map(entity => {
        return entity[datastore.KEY];
      });
      await datastore.delete(keys);
    }
    await Promise.all(testKinds.map(kind => deleteEntities(kind)));
  });

  it('should allocate IDs', async () => {
    const keys = await datastore.allocateIds(datastore.key('Kind'), 10);
    assert.ok(keys);
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

    it('should excludeFromIndexes correctly', async () => {
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

      await datastore.save({
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
      });
      const [entity] = await datastore.get(postKey);
      assert.deepStrictEqual(entity[datastore.KEY], postKey);
      delete entity[datastore.KEY];
      assert.deepStrictEqual(entity, data);
      await datastore.delete(postKey);
    });

    it('should remove index with using wildcard in excludeFromIndexes', async () => {
      const longString = Buffer.alloc(1501, '.').toString();
      const postKey = datastore.key(['Post', 'post3']);
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

      const excludeFromIndexes = [
        'longString',
        'longStringArray[]',
        'metadata.longString',
        'metadata.obj.*',
        'metadata.longStringArray[].*',
      ];

      await datastore.save({
        key: postKey,
        data,
        excludeFromIndexes,
      });
      const [entity] = await datastore.get(postKey);
      assert.deepStrictEqual(entity[datastore.KEY], postKey);
      delete entity[datastore.KEY];
      assert.deepStrictEqual(entity, data);
      await datastore.delete(postKey);
    });

    it('should save/get/delete with a key name', async () => {
      const postKey = datastore.key(['Post', 'post1']);
      await datastore.save({key: postKey, data: post});
      const [entity] = await datastore.get(postKey);
      assert.deepStrictEqual(entity[datastore.KEY], postKey);
      delete entity[datastore.KEY];
      assert.deepStrictEqual(entity, post);
      await datastore.delete(postKey);
    });

    it('should save/get/delete with a numeric key id', async () => {
      const postKey = datastore.key(['Post', 123456789]);
      await datastore.save({key: postKey, data: post});
      const [entity] = await datastore.get(postKey);
      delete entity[datastore.KEY];
      assert.deepStrictEqual(entity, post);
      await datastore.delete(postKey);
    });

    it('should save/get/delete a buffer', async () => {
      const postKey = datastore.key(['Post']);
      const data = {
        buf: Buffer.from('010100000000000000000059400000000000006940', 'hex'),
      };
      await datastore.save({key: postKey, data});
      const assignedId = postKey.id;
      assert(assignedId);
      const [entity] = await datastore.get(postKey);
      delete entity[datastore.KEY];
      assert.deepStrictEqual(entity, data);
      await datastore.delete(datastore.key(['Post', assignedId as string]));
    });

    it('should save/get/delete with a generated key id', async () => {
      const postKey = datastore.key('Post');
      await datastore.save({key: postKey, data: post});

      // The key's path should now be complete.
      assert(postKey.id);

      const [entity] = await datastore.get(postKey);
      delete entity[datastore.KEY];
      assert.deepStrictEqual(entity, post);
      await datastore.delete(postKey);
    });

    it('should save/get/update', async () => {
      const postKey = datastore.key('Post');
      await datastore.save({key: postKey, data: post});
      const [entity] = await datastore.get(postKey);
      assert.strictEqual(entity.title, post.title);
      entity.title = 'Updated';
      await datastore.save(entity);
      const [entity2] = await datastore.get(postKey);
      assert.strictEqual(entity2.title, 'Updated');
      await datastore.delete(postKey);
    });

    it('should save and get with a string ID', async () => {
      const longIdKey = datastore.key([
        'Post',
        datastore.int('100000000000001234'),
      ]);
      await datastore.save({
        key: longIdKey,
        data: {
          test: true,
        },
      });
      const [entity] = await datastore.get(longIdKey);
      assert.strictEqual(entity.test, true);
    });

    it('should fail explicitly set second insert on save', async () => {
      const postKey = datastore.key('Post');
      await datastore.save({key: postKey, data: post});

      // The key's path should now be complete.
      assert(postKey.id);
      await assertRejects(
        datastore.save({
          key: postKey,
          method: 'insert',
          data: post,
        })
      );
      const [entity] = await datastore.get(postKey);
      delete entity[datastore.KEY];
      assert.deepStrictEqual(entity, post);
      await datastore.delete(postKey);
    });

    it('should fail explicitly set first update on save', async () => {
      const postKey = datastore.key('Post');
      await assertRejects(
        datastore.save({
          key: postKey,
          method: 'update',
          data: post,
        })
      );
    });

    it('should save/get/delete multiple entities at once', async () => {
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
      await datastore.save([{key: key1, data: post}, {key: key2, data: post2}]);
      const [entities] = await datastore.get([key1, key2]);
      assert.strictEqual(entities.length, 2);
      await datastore.delete([key1, key2]);
    });

    it('should get multiple entities in a stream', done => {
      const key1 = datastore.key('Post');
      const key2 = datastore.key('Post');

      datastore.save(
        [{key: key1, data: post}, {key: key2, data: post}],
        err => {
          assert.ifError(err);

          let numEntitiesEmitted = 0;

          datastore
            .createReadStream([key1, key2])
            .on('error', done)
            .on('data', () => {
              numEntitiesEmitted++;
            })
            .on('end', () => {
              assert.strictEqual(numEntitiesEmitted, 2);
              datastore.delete([key1, key2], done);
            });
        }
      );
    });

    it('should save keys as a part of entity and query by key', async () => {
      const personKey = datastore.key(['People', 'US', 'Person', 'name']);
      await datastore.save({
        key: personKey,
        data: {
          fullName: 'Full name',
          linkedTo: personKey, // himself
        },
      });
      const query = datastore
        .createQuery('Person')
        .hasAncestor(datastore.key(['People', 'US']))
        .filter('linkedTo', personKey);
      const [results] = await datastore.runQuery(query);
      assert.strictEqual(results![0].fullName, 'Full name');
      assert.deepStrictEqual(results![0].linkedTo, personKey);
      await datastore.delete(personKey);
    });

    describe('entity types', () => {
      it('should save and decode an int', async () => {
        const integerValue = 2015;
        const integerType = Datastore.int(integerValue);
        const key = datastore.key('Person');
        await datastore.save({
          key,
          data: {
            year: integerType,
          },
        });
        const [entity] = await datastore.get(key);
        assert.strictEqual(entity.year, integerValue);
      });

      it('should save and decode a double', async () => {
        const doubleValue = 99.99;
        const doubleType = Datastore.double(doubleValue);
        const key = datastore.key('Person');
        await datastore.save({
          key,
          data: {
            nines: doubleType,
          },
        });
        const [entity] = await datastore.get(key);
        assert.strictEqual(entity.nines, doubleValue);
      });

      it('should save and decode a geo point', async () => {
        const geoPointValue = {
          latitude: 40.6894,
          longitude: -74.0447,
        };
        const geoPointType = Datastore.geoPoint(geoPointValue);
        const key = datastore.key('Person');
        await datastore.save({
          key,
          data: {
            location: geoPointType,
          },
        });
        const [entity] = await datastore.get(key);
        assert.deepStrictEqual(entity.location, geoPointValue);
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

    before(async () => {
      const keysToSave = keys.map((key, index) => {
        return {
          key,
          data: characters[index],
        };
      });
      await datastore.save(keysToSave);
    });

    after(async () => {
      await datastore.delete(keys);
    });

    it('should limit queries', async () => {
      const q = datastore
        .createQuery('Character')
        .hasAncestor(ancestor)
        .limit(5);
      const [firstEntities, info] = await datastore.runQuery(q);
      assert.strictEqual(firstEntities!.length, 5);
      const secondQ = datastore
        .createQuery('Character')
        .hasAncestor(ancestor)
        .start(info!.endCursor!);
      const [secondEntities] = await datastore.runQuery(secondQ);
      assert.strictEqual(secondEntities!.length, 3);
    });

    it('should not go over a limit', async () => {
      const limit = 3;
      const q = datastore
        .createQuery('Character')
        .hasAncestor(ancestor)
        .limit(limit);
      const [results] = await datastore.runQuery(q);
      assert.strictEqual(results!.length, limit);
    });

    it('should run a query as a stream', done => {
      const q = datastore.createQuery('Character').hasAncestor(ancestor);
      let resultsReturned = 0;
      datastore
        .runQueryStream(q)
        .on('error', done)
        .on('data', () => resultsReturned++)
        .on('end', () => {
          assert.strictEqual(resultsReturned, characters.length);
          done();
        });
    });

    it('should not go over a limit with a stream', done => {
      const limit = 3;
      const q = datastore
        .createQuery('Character')
        .hasAncestor(ancestor)
        .limit(limit);
      let resultsReturned = 0;
      datastore
        .runQueryStream(q)
        .on('error', done)
        .on('data', () => resultsReturned++)
        .on('end', () => {
          assert.strictEqual(resultsReturned, limit);
          done();
        });
    });

    it('should filter queries with simple indexes', async () => {
      const q = datastore
        .createQuery('Character')
        .hasAncestor(ancestor)
        .filter('appearances', '>=', 20);
      const [entities] = await datastore.runQuery(q);
      assert.strictEqual(entities!.length, 6);
    });

    it('should filter queries with defined indexes', async () => {
      const q = datastore
        .createQuery('Character')
        .hasAncestor(ancestor)
        .filter('family', 'Stark')
        .filter('appearances', '>=', 20);
      const [entities] = await datastore.runQuery(q);
      assert.strictEqual(entities!.length, 6);
    });

    it('should filter by ancestor', async () => {
      const q = datastore.createQuery('Character').hasAncestor(ancestor);
      const [entities] = await datastore.runQuery(q);
      assert.strictEqual(entities.length, characters.length);
    });

    it('should filter by key', async () => {
      const key = datastore.key(['Book', 'GoT', 'Character', 'Rickard']);
      const q = datastore
        .createQuery('Character')
        .hasAncestor(ancestor)
        .filter('__key__', key);
      const [entities] = await datastore.runQuery(q);
      assert.strictEqual(entities!.length, 1);
    });

    it('should order queries', async () => {
      const q = datastore
        .createQuery('Character')
        .hasAncestor(ancestor)
        .order('appearances');

      const [entities] = await datastore.runQuery(q);
      assert.strictEqual(entities![0].name, characters[0].name);
      assert.strictEqual(entities![7].name, characters[3].name);
    });

    it('should select projections', async () => {
      const q = datastore
        .createQuery('Character')
        .hasAncestor(ancestor)
        .select(['name', 'family']);

      const [entities] = await datastore.runQuery(q);
      delete entities[0][datastore.KEY];
      assert.deepStrictEqual(entities![0], {
        name: 'Arya',
        family: 'Stark',
      });
      delete entities[8][datastore.KEY];
      assert.deepStrictEqual(entities![8], {
        name: 'Sansa',
        family: 'Stark',
      });
    });

    it('should paginate with offset and limit', async () => {
      const q = datastore
        .createQuery('Character')
        .hasAncestor(ancestor)
        .offset(2)
        .limit(3)
        .order('appearances');

      const [entities, info] = await datastore.runQuery(q);
      assert.strictEqual(entities!.length, 3);
      assert.strictEqual(entities![0].name, 'Robb');
      assert.strictEqual(entities![2].name, 'Catelyn');
      const secondQ = datastore
        .createQuery('Character')
        .hasAncestor(ancestor)
        .order('appearances')
        .start(info!.endCursor!);
      const [secondEntities] = await datastore.runQuery(secondQ);
      assert.strictEqual(secondEntities!.length, 3);
      assert.strictEqual(secondEntities![0].name, 'Sansa');
      assert.strictEqual(secondEntities![2].name, 'Arya');
    });

    it('should resume from a start cursor', async () => {
      const q = datastore
        .createQuery('Character')
        .hasAncestor(ancestor)
        .offset(2)
        .limit(2)
        .order('appearances');
      const [, info] = await datastore.runQuery(q);
      const secondQ = datastore
        .createQuery('Character')
        .hasAncestor(ancestor)
        .order('appearances')
        .start(info!.endCursor!);
      const [secondEntities] = await datastore.runQuery(secondQ);
      assert.strictEqual(secondEntities!.length, 4);
      assert.strictEqual(secondEntities![0].name, 'Catelyn');
      assert.strictEqual(secondEntities![3].name, 'Arya');
    });

    it('should group queries', async () => {
      const q = datastore
        .createQuery('Character')
        .hasAncestor(ancestor)
        .groupBy('appearances');
      const [entities] = await datastore.runQuery(q);
      assert.strictEqual(entities!.length, characters.length - 1);
    });

    it('should query from the Query object', async () => {
      await datastore.createQuery('Character').run();
    });
  });

  describe('transactions', () => {
    it('should run in a transaction', async () => {
      const key = datastore.key(['Company', 'Google']);
      const obj = {
        url: 'www.google.com',
      };
      const transaction = datastore.transaction();
      await transaction.run();
      await transaction.get(key);
      transaction.save({key, data: obj});
      await transaction.commit();
      const [entity] = await datastore.get(key);
      delete entity[datastore.KEY];
      assert.deepStrictEqual(entity, obj);
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
        datastore.get(key),
      ]);
      assert.strictEqual(typeof deletedEntity, 'undefined');
      assert.strictEqual(fetchedEntity.rating, 10);
    });

    it('should use the last modification to a key', async () => {
      const incompleteKey = datastore.key('Company');
      const key = datastore.key(['Company', 'Google']);
      const transaction = datastore.transaction();
      await transaction.run();
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
      await transaction.commit();

      // Should not return a result.
      const [entity] = await datastore.get(key);
      assert.strictEqual(entity, undefined);

      // Incomplete key should have been given an id.
      assert.strictEqual(incompleteKey.path.length, 2);
    });

    it('should query within a transaction', async () => {
      const transaction = datastore.transaction();
      await transaction.run();
      const query = transaction.createQuery('Company');
      let entities;
      try {
        [entities] = await query.run();
      } catch (e) {
        await transaction.rollback();
        return;
      }
      assert(entities!.length > 0);
      await transaction.commit();
    });

    it('should read in a readOnly transaction', async () => {
      const transaction = datastore.transaction({readOnly: true});
      const key = datastore.key(['Company', 'Google']);
      await transaction.run();
      await transaction.get(key);
    });

    it('should not write in a readOnly transaction', async () => {
      const transaction = datastore.transaction({readOnly: true});
      const key = datastore.key(['Company', 'Google']);
      await transaction.run();
      await transaction.get(key);
      transaction.save({key, data: {}});
      await assertRejects(transaction.commit());
    });
  });
});
