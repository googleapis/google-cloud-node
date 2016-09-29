// Copyright 2015, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

var testUtil = require('./util');
var concepts = require('../concepts');

var transaction;
var metadata;
var index;
var query;
var entity;

var Transaction = concepts.Transaction;
var Metadata = concepts.Metadata;
var Index = concepts.Index;
var Entity = concepts.Entity;
var Query = concepts.Query;

describe('datastore:concepts', function () {
  before(function () {
    var projectId = process.env.GCLOUD_PROJECT || 'nodejs-docs-samples';
    transaction = new Transaction(projectId);
    metadata = new Metadata(projectId);
    index = new Index(projectId);
    entity = new Entity(projectId);
    query = new Query(projectId);
  });

  after(function (done) {
    var datastore = transaction.datastore;
    var query = datastore.createQuery('Task');

    testUtil.deleteEntities(datastore, query, done);
  });

  // Transactions

  it('performs a transactional update', function (done) {
    transaction.testTransactionalUpdate(done);
  });

  it('performs retries if necessary', function (done) {
    transaction.testTransactionalRetry(done);
  });

  it('performs a get or create', function (done) {
    transaction.testTransactionalGetOrCreate(done);
  });

  it('gets a snapshot of task list entities', function (done) {
    transaction.testSingleEntityGroupReadOnly(done);
  });

  // Metadata

  it('performs a namespace query', function (done) {
    metadata.testNamespaceRunQuery(done);
  });

  it('performs a kind query', function (done) {
    metadata.testKindRunQuery(done);
  });

  it('performs a property query', function (done) {
    metadata.testPropertyRunQuery(done);
  });

  it('performs a property by kind query', function (done) {
    metadata.testPropertyByKindRunQuery(done);
  });

  // Indexes

  it(
    'performs a query with a filter on an unindexed property',
    function (done) {
      index.testUnindexedPropertyQuery(done);
    }
  );

  it('inserts arrays of data', function (done) {
    index.testExplodingProperties(done);
  });

  // Queries

  it('performs a basic query', function (done) {
    query.testRunQuery(done);
  });

  it('performs a query with a property filter', function (done) {
    query.testPropertyFilter(done);
  });

  it('performs a query with a composite filter', function (done) {
    query.testCompositeFilter(done);
  });

  it('performs a query with a key filter', function (done) {
    query.testKeyFilter(done);
  });

  it('performs a query with ascending sort', function (done) {
    query.testAscendingSort(done);
  });

  it('performs a query with descending sort', function (done) {
    query.testDescendingSort(done);
  });

  it('performs a query with multi sort', function (done) {
    query.testMultiSort(done);
  });

  it('performs a kindless query', function (done) {
    query.testKindlessQuery(done);
  });

  it('performs a projection query', function (done) {
    entity.testProperties(function (err, tasks) {
      console.log(err, tasks);
      assert.ifError(err);
      setTimeout(function () {
        query.testRunQueryProjection(done);
      }, 1000);
    });
  });

  it('performs a keys only query', function (done) {
    query.testKeysOnlyQuery(done);
  });

  it('performs a distinct query', function (done) {
    query.testDistinctQuery(done);
  });

  it('performs a distinct on query', function (done) {
    query.testDistinctOnQuery(done);
  });

  it('performs an array value inequality query', function (done) {
    query.testArrayValueInequalityRange(done);
  });

  it('performs an array value equality query', function (done) {
    query.testArrayValueEquality(done);
  });

  it('performs an inequality range query', function (done) {
    query.testInequalityRange(done);
  });

  it('returns an error from an invalid query', function (done) {
    query.testInequalityInvalid(function (err) {
      assert(err);
      done();
    });
  });

  it('performs an equal and inequality range query', function (done) {
    query.testEqualAndInequalityRange(done);
  });

  it('performs an equality sort query', function (done) {
    query.testInequalitySort(done);
  });

  it(
    'returns an error when not sorted on filtered property',
    function (done) {
      query.testInequalitySortInvalidNotSame(function (err) {
        assert(err);
        done();
      });
    }
  );

  it(
    'returns an error when not sorted on first filter prop',
    function (done) {
      query.testInequalitySortInvalidNotFirst(function (err) {
        assert(err);
        done();
      });
    }
  );

  it('performs a query with a limit', function (done) {
    query.testLimit(done);
  });

  it('allows manual pagination through results', function (done) {
    entity.testBatchUpsert(function (err) {
      assert.ifError(err);
      setTimeout(function () {
        query.testCursorPaging(done);
      }, 1000);
    });
  });

  it.skip('performs an ancestor query', function (done) {
    query.testEventualConsistentQuery(done);
  });

  // Entities

  it('saves with an incomplete key', function (done) {
    entity.testIncompleteKey(done);
  });

  it('saves with a named key', function (done) {
    entity.testNamedKey(done);
  });

  it('saves a key with a parent', function (done) {
    entity.testKeyWithParent(done);
  });

  it('saves a key with multiple parents', function (done) {
    entity.testKeyWithMultiLevelParent(done);
  });

  it('saves an entity with a parent', function (done) {
    entity.testEntityWithParent(done);
  });

  it('saves an entity with properties', function (done) {
    entity.testProperties(done);
  });

  it('saves an entity with arrays', function (done) {
    entity.testArrayValue(done);
  });

  it('saves a basic entity', function (done) {
    entity.testBasicEntity(done);
  });

  it('saves with an upsert', function (done) {
    entity.testUpsert(done);
  });

  it('saves with an insert', function (done) {
    entity.testInsert(done);
  });

  it('performs a lookup', function (done) {
    entity.testLookup(done);
  });

  it('saves with an update', function (done) {
    entity.testUpdate(done);
  });

  it('deletes an entity', function (done) {
    entity.testDelete(done);
  });

  it('performs a batch upsert', function (done) {
    entity.testBatchUpsert(done);
  });

  it('performs a batch lookup', function (done) {
    entity.testBatchLookup(done);
  });

  it('performs a batch delete', function (done) {
    entity.testBatchDelete(done);
  });
});
