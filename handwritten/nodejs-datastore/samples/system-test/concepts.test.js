/**
 * Copyright 2018, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const concepts = require('../concepts');
const assert = require('assert');
const tools = require('@google-cloud/nodejs-repo-tools');

let transaction;
let metadata;
let index;
let query;
let entity;

const Transaction = concepts.Transaction;
const Metadata = concepts.Metadata;
const Index = concepts.Index;
const Entity = concepts.Entity;
const Query = concepts.Query;

before(() => {
  tools.checkCredentials();
  const projectId = process.env.GCLOUD_PROJECT;
  assert.ok(projectId, 'You must set the GCLOUD_PROJECT env var!');
  transaction = new Transaction(projectId);
  metadata = new Metadata(projectId);
  index = new Index(projectId);
  entity = new Entity(projectId);
  query = new Query(projectId);
});

after(async () => {
  const datastore = transaction.datastore;
  const query = datastore.createQuery('Task').select('__key__');
  const [entities] = await datastore.runQuery(query);
  await datastore.delete(entities.map(entity => entity[datastore.KEY]));
});

beforeEach(tools.stubConsole);
afterEach(tools.restoreConsole);

// Transactions
it('performs a transactional update', () =>
  transaction.testTransactionalUpdate());
it('performs retries if necessary', () => transaction.testTransactionalRetry());
it('performs a get or create', () =>
  transaction.testTransactionalGetOrCreate());
it('gets a snapshot of task list entities', () =>
  transaction.testSingleEntityGroupReadOnly());

// Metadata
it('performs a namespace query', () => metadata.testNamespaceRunQuery());
it('performs a kind query', () => metadata.testKindRunQuery());
it('performs a property query', () => metadata.testPropertyRunQuery());
it('performs a property by kind query', () =>
  metadata.testPropertyByKindRunQuery());

// Indexes
it('performs a query with a filter on an unindexed property', () =>
  index.testUnindexedPropertyQuery());
it('inserts arrays of data', () => index.testExplodingProperties());

// Queries
it('performs a basic query', async () => await query.testRunQuery());
it('performs a query with a property filter', () => query.testPropertyFilter());
it('performs a query with a composite filter', () =>
  query.testCompositeFilter());
it('performs a query with a key filter', () => query.testKeyFilter());
it('performs a query with ascending sort', () => query.testAscendingSort());
it('performs a query with descending sort', () => query.testDescendingSort());
it('performs a query with multi sort', () => query.testMultiSort());
it('performs a kindless query', () => query.testKindlessQuery());
it('performs a projection query', () => {
  return entity
    .testProperties()
    .then(() => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          query.testRunQueryProjection().then(resolve, reject);
        }, 1000);
      });
    })
    .then(results => {
      assert.deepStrictEqual(results, {
        priorities: [4],
        percentCompletes: [10],
      });
    });
});
it('performs a keys only query', () => query.testKeysOnlyQuery());
it('performs a distinct on query', () => query.testDistinctOnQuery());
it('performs an array value inequality query', () =>
  query.testArrayValueInequalityRange());
it('performs an array value equality query', () =>
  query.testArrayValueEquality());
it('performs an inequality range query', () => query.testInequalityRange());
it('returns an error from an invalid query', async () => {
  await assert.throws(query.testInequalityInvalid);
});
it('performs an equal and inequality range query', () =>
  query.testEqualAndInequalityRange());
it('performs an equality sort query', () => query.testInequalitySort());
it('returns an error when not sorted on filtered property', async () => {
  await assert.throws(query.testInequalitySortInvalidNotSame);
});
it('returns an error when not sorted on first filter prop', async () => {
  await assert.throws(query.testInequalitySortInvalidNotFirst);
});
it('performs a query with a limit', () => query.testLimit());
it('allows manual pagination through results', () => {
  return entity.testBatchUpsert().then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        query.testCursorPaging().then(resolve, reject);
      }, 1000);
    });
  });
});
it('performs an ancestor query', () => query.testEventualConsistentQuery());

// Entities
it('saves with an incomplete key', () => entity.testIncompleteKey());
it('saves with a named key', () => entity.testNamedKey());
it('saves a key with a parent', () => entity.testKeyWithParent());
it('saves a key with multiple parents', () =>
  entity.testKeyWithMultiLevelParent());
it('saves an entity with a parent', () => entity.testEntityWithParent());
it('saves an entity with properties', () => {
  return entity.testProperties();
});
it('saves an entity with arrays', () => entity.testArrayValue());
it('saves a basic entity', () => entity.testBasicEntity());
it('saves with an upsert', () => entity.testUpsert());
it('saves with an insert', () => entity.testInsert());
it('performs a lookup', () => entity.testLookup());
it('saves with an update', () => entity.testUpdate());
it('deletes an entity', () => entity.testDelete());
it('performs a batch upsert', () => {
  return entity.testBatchUpsert();
});
it('performs a batch lookup', () => entity.testBatchLookup());
it('performs a batch delete', () => entity.testBatchDelete());
