/**
 * Copyright 2016, Google, Inc.
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

require(`../../system-test/_setup`);

const concepts = require(`../concepts`);

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

test.before((t) => {
  const projectId = process.env.GCLOUD_PROJECT;
  t.truthy(projectId, `You must set the GCLOUD_PROJECT env var!`);
  transaction = new Transaction(projectId);
  metadata = new Metadata(projectId);
  index = new Index(projectId);
  entity = new Entity(projectId);
  query = new Query(projectId);
});

test.after.always(async () => {
  const datastore = transaction.datastore;
  const query = datastore.createQuery(`Task`).select(`__key__`);
  const [entities] = await datastore.runQuery(query);
  await datastore.delete(entities.map((entity) => entity[datastore.KEY]));
});

test.beforeEach(stubConsole);
test.afterEach.always(restoreConsole);

// Transactions
test.serial(`performs a transactional update`, (t) => transaction.testTransactionalUpdate(t));
test.serial(`performs retries if necessary`, (t) => transaction.testTransactionalRetry(t));
test.serial(`performs a get or create`, (t) => transaction.testTransactionalGetOrCreate(t));
test.serial(`gets a snapshot of task list entities`, (t) => transaction.testSingleEntityGroupReadOnly(t));

// Metadata
test.serial(`performs a namespace query`, (t) => metadata.testNamespaceRunQuery(t));
test.serial(`performs a kind query`, (t) => metadata.testKindRunQuery(t));
test.serial(`performs a property query`, (t) => metadata.testPropertyRunQuery(t));
test.serial(`performs a property by kind query`, (t) => metadata.testPropertyByKindRunQuery(t));

// Indexes
test.serial(`performs a query with a filter on an unindexed property`, (t) => index.testUnindexedPropertyQuery(t));
test.serial(`inserts arrays of data`, (t) => index.testExplodingProperties(t));

// Queries
test.serial(`performs a basic query`, (t) => query.testRunQuery(t));
test.serial(`performs a query with a property filter`, (t) => query.testPropertyFilter(t));
test.serial(`performs a query with a composite filter`, (t) => query.testCompositeFilter(t));
test.serial(`performs a query with a key filter`, (t) => query.testKeyFilter(t));
test.serial(`performs a query with ascending sort`, (t) => query.testAscendingSort(t));
test.serial(`performs a query with descending sort`, (t) => query.testDescendingSort(t));
test.serial(`performs a query with multi sort`, (t) => query.testMultiSort(t));
test.serial(`performs a kindless query`, (t) => query.testKindlessQuery(t));
test.serial('performs a projection query', (t) => {
  return entity.testProperties(t)
    .then(() => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          query.testRunQueryProjection(t).then(resolve, reject);
        }, 1000);
      });
    })
    .then((results) => {
      t.deepEqual(results, {
        priorities: [4],
        percentCompletes: [10]
      });
    });
});
test.serial(`performs a keys only query`, (t) => query.testKeysOnlyQuery(t));
test.serial(`performs a distinct query`, (t) => query.testDistinctQuery(t));
test.serial(`performs a distinct on query`, (t) => query.testDistinctOnQuery(t));
test.serial(`performs an array value inequality query`, (t) => query.testArrayValueInequalityRange(t));
test.serial(`performs an array value equality query`, (t) => query.testArrayValueEquality(t));
test.serial(`performs an inequality range query`, (t) => query.testInequalityRange(t));
test.serial(`returns an error from an invalid query`, async (t) => {
  await t.throws(query.testInequalityInvalid(t));
});
test.serial(`performs an equal and inequality range query`, (t) => query.testEqualAndInequalityRange(t));
test.serial(`performs an equality sort query`, (t) => query.testInequalitySort(t));
test.serial(`returns an error when not sorted on filtered property`, async (t) => {
  await t.throws(query.testInequalitySortInvalidNotSame(t));
});
test.serial(`returns an error when not sorted on first filter prop`, async (t) => {
  await t.throws(query.testInequalitySortInvalidNotFirst(t));
});
test.serial(`performs a query with a limit`, (t) => query.testLimit(t));
test.serial(`allows manual pagination through results`, (t) => {
  return entity.testBatchUpsert(t)
    .then(() => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          query.testCursorPaging(t).then(resolve, reject);
        }, 1000);
      });
    });
});
test.serial(`performs an ancestor query`, (t) => query.testEventualConsistentQuery(t));

// Entities
test.serial(`saves with an incomplete key`, (t) => entity.testIncompleteKey(t));
test.serial(`saves with a named key`, (t) => entity.testNamedKey(t));
test.serial(`saves a key with a parent`, (t) => entity.testKeyWithParent(t));
test.serial(`saves a key with multiple parents`, (t) => entity.testKeyWithMultiLevelParent(t));
test.serial(`saves an entity with a parent`, (t) => entity.testEntityWithParent(t));
test.serial(`saves an entity with properties`, (t) => entity.testProperties(t));
test.serial(`saves an entity with arrays`, (t) => entity.testArrayValue(t));
test.serial(`saves a basic entity`, (t) => entity.testBasicEntity(t));
test.serial(`saves with an upsert`, (t) => entity.testUpsert(t));
test.serial(`saves with an insert`, (t) => entity.testInsert(t));
test.serial(`performs a lookup`, (t) => entity.testLookup(t));
test.serial(`saves with an update`, (t) => entity.testUpdate(t));
test.serial(`deletes an entity`, (t) => entity.testDelete(t));
test.serial(`performs a batch upsert`, (t) => entity.testBatchUpsert(t));
test.serial(`performs a batch lookup`, (t) => entity.testBatchLookup(t));
test.serial(`performs a batch delete`, (t) => entity.testBatchDelete(t));
