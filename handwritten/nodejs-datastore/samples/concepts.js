/**
 * Copyright 2017, Google, Inc.
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

const sinon = require('sinon');
const assert = require('assert');

// By default, the client will authenticate using the service account file
// specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable and use
// the project specified by the GCLOUD_PROJECT environment variable. See
// https://googlecloudplatform.github.io/gcloud-node/#/docs/google-cloud/latest/guides/authentication
const {Datastore} = require('@google-cloud/datastore');

function makeStub() {
  return sinon.stub().returns(Promise.resolve([]));
}

// This mock is used in the documentation snippets.
let datastore = {
  delete: makeStub(),
  get: makeStub(),
  insert: makeStub(),
  key: makeStub(),
  update: makeStub(),
  upsert: makeStub(),
  runQuery: sinon.stub().returns(Promise.resolve([[]])),
  save: makeStub(),
};

class TestHelper {
  constructor(projectId) {
    const options = {
      projectId: projectId,
    };
    this.datastore = new Datastore(options);
  }
}

class Entity extends TestHelper {
  constructor(projectId) {
    super(projectId);
    // To create the keys, we have to use this instance of Datastore.
    datastore.key = this.datastore.key;

    this.incompleteKey = this.getIncompleteKey();
    this.namedKey = this.getNamedKey();
    this.keyWithParent = this.getKeyWithParent();
    this.keyWithMultiLevelParent = this.getKeyWithMultiLevelParent();
  }

  getIncompleteKey() {
    // [START datastore_incomplete_key]
    const taskKey = datastore.key('Task');
    // [END datastore_incomplete_key]

    return taskKey;
  }

  getNamedKey() {
    // [START datastore_named_key]
    const taskKey = datastore.key(['Task', 'sampleTask']);
    // [END datastore_named_key]

    return taskKey;
  }

  getKeyWithParent() {
    // [START datastore_key_with_parent]
    const taskKey = datastore.key([
      'TaskList',
      'default',
      'Task',
      'sampleTask',
    ]);
    // [END datastore_key_with_parent]

    return taskKey;
  }

  getKeyWithMultiLevelParent() {
    // [START datastore_key_with_multilevel_parent]
    const taskKey = datastore.key([
      'User',
      'alice',
      'TaskList',
      'default',
      'Task',
      'sampleTask',
    ]);
    // [END datastore_key_with_multilevel_parent]

    return taskKey;
  }

  getTask() {
    // [START datastore_basic_entity]
    const task = {
      category: 'Personal',
      done: false,
      priority: 4,
      description: 'Learn Cloud Datastore',
    };
    // [END datastore_basic_entity]

    return task;
  }

  testIncompleteKey() {
    return this.datastore.save({
      key: this.incompleteKey,
      data: {},
    });
  }

  testNamedKey() {
    return this.datastore.save({
      key: this.namedKey,
      data: {},
    });
  }

  testKeyWithParent() {
    return this.datastore.save({
      key: this.keyWithParent,
      data: {},
    });
  }

  testKeyWithMultiLevelParent() {
    return this.datastore.save({
      key: this.keyWithMultiLevelParent,
      data: {},
    });
  }

  testEntityWithParent() {
    const taskKey = this.keyWithParent;

    // [START datastore_entity_with_parent]
    const task = {
      key: taskKey,
      data: {
        category: 'Personal',
        done: false,
        priority: 4,
        description: 'Learn Cloud Datastore',
      },
    };
    // [END datastore_entity_with_parent]

    return this.datastore.save(task);
  }

  testProperties() {
    // [START datastore_properties]
    const task = [
      {
        name: 'category',
        value: 'Personal',
      },
      {
        name: 'created',
        value: new Date(),
      },
      {
        name: 'done',
        value: false,
      },
      {
        name: 'priority',
        value: 4,
      },
      {
        name: 'percent_complete',
        value: 10.0,
      },
      {
        name: 'description',
        value: 'Learn Cloud Datastore',
        excludeFromIndexes: true,
      },
    ];
    // [END datastore_properties]

    return this.datastore.save({
      key: this.incompleteKey,
      data: task,
    });
  }

  testArrayValue() {
    // [START datastore_array_value]
    const task = {
      tags: ['fun', 'programming'],
      collaborators: ['alice', 'bob'],
    };
    // [END datastore_array_value]

    return this.datastore.save({
      key: this.incompleteKey,
      data: task,
    });
  }

  testBasicEntity() {
    return this.datastore.save({
      key: this.getIncompleteKey(),
      data: this.getTask(),
    });
  }

  async testUpsert() {
    const taskKey = this.getIncompleteKey();
    const task = this.getTask();

    // [START datastore_upsert]
    const entity = {
      key: taskKey,
      data: task,
    };

    await datastore.upsert(entity);
    // Task inserted successfully.
    // [END datastore_upsert]

    return this.datastore.upsert({
      key: this.datastore.key(['Task', 1]),
      data: task,
    });
  }

  testInsert() {
    const taskKey = this.getIncompleteKey();
    const task = this.getTask();

    // [START datastore_insert]
    const entity = {
      key: taskKey,
      data: task,
    };

    datastore.insert(entity).then(() => {
      // Task inserted successfully.
    });
    // [END datastore_insert]

    return this.datastore.save({
      method: 'insert',
      key: taskKey,
      data: task,
    });
  }

  async testLookup() {
    const taskKey = this.getIncompleteKey();

    // [START datastore_lookup]
    const [entity] = await datastore.get(taskKey);
    // entity = {
    //   category: 'Personal',
    //   done: false,
    //   priority: 4,
    //   description: 'Learn Cloud Datastore',
    //   [Symbol(KEY)]:
    //    Key {
    //      namespace: undefined,
    //      id: '...',
    //      kind: 'Task',
    //      path: [Getter]
    //    }
    //   }
    // };
    console.log(entity);
    // [END datastore_lookup]
    await this.datastore.save({
      method: 'insert',
      key: taskKey,
      data: {},
    });

    return this.datastore.get(taskKey);
  }

  async testUpdate() {
    const taskKey = this.getIncompleteKey();
    const task = this.getTask();

    // [START datastore_update]
    const entity = {
      key: taskKey,
      data: task,
    };

    await datastore.update(entity);
    // Task updated successfully.
    // [END datastore_update]

    await this.datastore.save({
      method: 'insert',
      key: taskKey,
      data: {},
    });
    return this.datastore.update({key: taskKey, data: task});
  }

  async testDelete() {
    const taskKey = this.getIncompleteKey();

    // [START datastore_delete]
    await datastore.delete(taskKey);
    // Task deleted successfully.
    // [END datastore_delete]
    await this.datastore.save({
      method: 'insert',
      key: taskKey,
      data: {},
    });
    return this.datastore.delete(taskKey);
  }

  async testBatchUpsert() {
    const taskKey1 = this.datastore.key(['Task', 1]);
    const taskKey2 = this.datastore.key(['Task', 2]);

    const task1 = {
      category: 'Personal',
      done: false,
      priority: 4,
      description: 'Learn Cloud Datastore',
    };

    const task2 = {
      category: 'Work',
      done: false,
      priority: 8,
      description: 'Integrate Cloud Datastore',
    };

    // [START datastore_batch_upsert]
    const entities = [
      {
        key: taskKey1,
        data: task1,
      },
      {
        key: taskKey2,
        data: task2,
      },
    ];

    await datastore.upsert(entities);
    // Tasks inserted successfully.
    // [END datastore_batch_upsert]

    return this.datastore.upsert([
      {
        key: taskKey1,
        data: task1,
      },
      {
        key: taskKey2,
        data: task2,
      },
    ]);
  }

  async testBatchLookup() {
    const taskKey1 = this.datastore.key(['Task', 1]);
    const taskKey2 = this.datastore.key(['Task', 2]);

    // [START datastore_batch_lookup]
    const keys = [taskKey1, taskKey2];

    const [tasks] = await datastore.get(keys);
    // Tasks retrieved successfully.
    console.log(tasks);
    // [END datastore_batch_lookup]

    return this.datastore.get([taskKey1, taskKey2]);
  }

  async testBatchDelete() {
    const taskKey1 = this.datastore.key(['Task', 1]);
    const taskKey2 = this.datastore.key(['Task', 2]);

    // [START datastore_batch_delete]
    const keys = [taskKey1, taskKey2];

    await datastore.delete(keys);
    // Tasks deleted successfully.
    // [END datastore_batch_delete]

    return this.datastore.delete([taskKey1, taskKey2]);
  }
}

class Index extends TestHelper {
  testUnindexedPropertyQuery() {
    const datastore = this.datastore;

    // [START datastore_unindexed_property_query]
    const query = datastore
      .createQuery('Task')
      .filter('description', '=', 'A task description.');
    // [END datastore_unindexed_property_query]

    return this.datastore.runQuery(query);
  }

  async testExplodingProperties() {
    const original = datastore.key;
    datastore.key = this.datastore.key;

    // [START datastore_exploding_properties]
    const task = {
      method: 'insert',
      key: datastore.key('Task'),
      data: {
        tags: ['fun', 'programming', 'learn'],
        collaborators: ['alice', 'bob', 'charlie'],
        created: new Date(),
      },
    };
    // [END datastore_exploding_properties]

    datastore.key = original;

    await this.datastore.save(task);
    assert.ok(task.key);
    assert.ok(task.key.id);
  }
}

class Metadata extends TestHelper {
  async testNamespaceRunQuery() {
    const datastore = this.datastore;

    const startNamespace = 'Animals';
    const endNamespace = 'Zoos';

    await datastore.save({
      key: datastore.key({
        namespace: 'Animals',
        path: ['Ant', 1],
      }),
      data: {},
    });

    // [START datastore_namespace_run_query]
    async function runNamespaceQuery(startNamespace, endNamespace) {
      const startKey = datastore.key(['__namespace__', startNamespace]);
      const endKey = datastore.key(['__namespace__', endNamespace]);

      const query = datastore
        .createQuery('__namespace__')
        .select('__key__')
        .filter('__key__', '>=', startKey)
        .filter('__key__', '<', endKey);

      const [entities] = await datastore.runQuery(query);
      const namespaces = entities.map(entity => entity[datastore.KEY].name);

      console.log('Namespaces:');
      namespaces.forEach(namespace => console.log(namespace));

      return namespaces;
    }
    // [END datastore_namespace_run_query]

    const namespaces = await runNamespaceQuery(startNamespace, endNamespace);
    assert.strictEqual(namespaces.includes('Animals'), true);
  }

  async testKindRunQuery() {
    const datastore = this.datastore;

    // [START datastore_kind_run_query]
    async function runKindQuery() {
      const query = datastore.createQuery('__kind__').select('__key__');

      const [entities] = await datastore.runQuery(query);
      const kinds = entities.map(entity => entity[datastore.KEY].name);

      console.log('Kinds:');
      kinds.forEach(kind => console.log(kind));

      return kinds;
    }
    // [END datastore_kind_run_query]
    const kinds = await runKindQuery();
    assert.strictEqual(kinds.includes('Account'), true);
  }

  async testPropertyRunQuery() {
    const datastore = this.datastore;

    // [START datastore_property_run_query]
    async function runPropertyQuery() {
      const query = datastore.createQuery('__property__').select('__key__');
      const [entities] = await datastore.runQuery(query);
      // @TODO convert below object to map
      const propertiesByKind = {};

      entities.forEach(entity => {
        const key = entity[datastore.KEY];
        const kind = key.path[1];
        const property = key.path[3];

        propertiesByKind[kind] = propertiesByKind[kind] || [];
        propertiesByKind[kind].push(property);
      });

      console.log('Properties by Kind:');
      for (const key in propertiesByKind) {
        console.log(key, propertiesByKind[key]);
      }

      return propertiesByKind;
    }
    // [END datastore_property_run_query]
    const propertiesByKind = await runPropertyQuery();
    assert.deepStrictEqual(propertiesByKind.Account, ['balance']);
  }

  async testPropertyByKindRunQuery() {
    const datastore = this.datastore;

    // [START datastore_property_by_kind_run_query]
    async function runPropertyByKindQuery() {
      const ancestorKey = datastore.key(['__kind__', 'Account']);

      const query = datastore
        .createQuery('__property__')
        .hasAncestor(ancestorKey);
      const [entities] = await datastore.runQuery(query);

      const representationsByProperty = {};

      entities.forEach(entity => {
        const key = entity[datastore.KEY];
        const propertyName = key.name;
        const propertyType = entity.property_representation;

        representationsByProperty[propertyName] = propertyType;
      });

      console.log('Task property representations:');
      for (const key in representationsByProperty) {
        console.log(key, representationsByProperty[key]);
      }

      return representationsByProperty;
    }
    // [END datastore_property_by_kind_run_query]

    const propertiesByKind = await runPropertyByKindQuery();
    assert.deepStrictEqual(propertiesByKind, {
      balance: ['INT64'],
    });
  }
}

class Query extends TestHelper {
  constructor(projectId) {
    super(projectId);

    this.basicQuery = this.getBasicQuery();
    this.projectionQuery = this.getProjectionQuery();
    this.ancestorQuery = this.getAncestorQuery();
  }

  getBasicQuery() {
    const datastore = this.datastore;

    // [START datastore_basic_query]
    const query = datastore
      .createQuery('Task')
      .filter('done', '=', false)
      .filter('priority', '>=', 4)
      .order('priority', {
        descending: true,
      });
    // [END datastore_basic_query]

    return query;
  }

  getProjectionQuery() {
    const datastore = this.datastore;

    // [START datastore_projection_query]
    const query = datastore
      .createQuery('Task')
      .select(['priority', 'percent_complete']);
    // [END datastore_projection_query]

    return query;
  }

  getAncestorQuery() {
    const datastore = this.datastore;

    // [START datastore_ancestor_query]
    const ancestorKey = datastore.key(['TaskList', 'default']);

    const query = datastore.createQuery('Task').hasAncestor(ancestorKey);
    // [END datastore_ancestor_query]

    return query;
  }

  async testRunQuery() {
    const query = this.basicQuery;

    // [START datastore_run_query]
    const [tasks] = await datastore.runQuery(query);
    console.log('Tasks:');
    tasks.forEach(task => console.log(task));
    // [END datastore_run_query]

    return this.datastore.runQuery(query);
  }

  testPropertyFilter() {
    const datastore = this.datastore;

    // [START datastore_property_filter]
    const query = datastore.createQuery('Task').filter('done', '=', false);
    // [END datastore_property_filter]

    return this.datastore.runQuery(query);
  }

  testCompositeFilter() {
    const datastore = this.datastore;

    // [START datastore_composite_filter]
    const query = datastore
      .createQuery('Task')
      .filter('done', '=', false)
      .filter('priority', '=', 4);
    // [END datastore_composite_filter]

    return this.datastore.runQuery(query);
  }

  testKeyFilter() {
    const datastore = this.datastore;

    // [START datastore_key_filter]
    const query = datastore
      .createQuery('Task')
      .filter('__key__', '>', datastore.key(['Task', 'someTask']));
    // [END datastore_key_filter]

    return this.datastore.runQuery(query);
  }

  testAscendingSort() {
    const datastore = this.datastore;

    // [START datastore_ascending_sort]
    const query = datastore.createQuery('Task').order('created');
    // [END datastore_ascending_sort]

    return this.datastore.runQuery(query);
  }

  testDescendingSort() {
    const datastore = this.datastore;

    // [START datastore_descending_sort]
    const query = datastore.createQuery('Task').order('created', {
      descending: true,
    });
    // [END datastore_descending_sort]

    return this.datastore.runQuery(query);
  }

  testMultiSort() {
    const datastore = this.datastore;

    // [START datastore_multi_sort]
    const query = datastore
      .createQuery('Task')
      .order('priority', {
        descending: true,
      })
      .order('created');
    // [END datastore_multi_sort]

    return this.datastore.runQuery(query);
  }

  testKindlessQuery() {
    const datastore = this.datastore;
    const lastSeenKey = this.datastore.key(['Task', Date.now()]);

    // [START datastore_kindless_query]
    const query = datastore
      .createQuery()
      .filter('__key__', '>', lastSeenKey)
      .limit(1);
    // [END datastore_kindless_query]

    return this.datastore.runQuery(query);
  }

  async testRunQueryProjection() {
    const datastore = this.datastore;
    const query = this.projectionQuery;

    // [START datastore_run_query_projection]
    async function runProjectionQuery() {
      const priorities = [];
      const percentCompletes = [];
      const [tasks] = await datastore.runQuery(query);
      tasks.forEach(task => {
        priorities.push(task.priority);
        percentCompletes.push(task.percent_complete);
      });

      return {
        priorities: priorities,
        percentCompletes: percentCompletes,
      };
    }
    // [END datastore_run_query_projection]

    return await runProjectionQuery();
  }

  testKeysOnlyQuery() {
    const datastore = this.datastore;

    // [START datastore_keys_only_query]
    const query = datastore
      .createQuery()
      .select('__key__')
      .limit(1);
    // [END datastore_keys_only_query]

    return this.datastore.runQuery(query);
  }

  testDistinctOnQuery() {
    const datastore = this.datastore;

    // [START datastore_distinct_on_query]
    const query = datastore
      .createQuery('Task')
      .groupBy('category')
      .order('category')
      .order('priority');
    // [END datastore_distinct_on_query]

    return this.datastore.runQuery(query);
  }

  testArrayValueInequalityRange() {
    const datastore = this.datastore;

    // [START datastore_array_value_inequality_range]
    const query = datastore
      .createQuery('Task')
      .filter('tag', '>', 'learn')
      .filter('tag', '<', 'math');
    // [END datastore_array_value_inequality_range]

    return this.datastore.runQuery(query);
  }

  testArrayValueEquality() {
    const datastore = this.datastore;

    // [START datastore_array_value_equality]
    const query = datastore
      .createQuery('Task')
      .filter('tag', '=', 'fun')
      .filter('tag', '=', 'programming');
    // [END datastore_array_value_equality]

    return this.datastore.runQuery(query);
  }

  testInequalityRange() {
    const datastore = this.datastore;

    // [START datastore_inequality_range]
    const query = datastore
      .createQuery('Task')
      .filter('created', '>', new Date('1990-01-01T00:00:00z'))
      .filter('created', '<', new Date('2000-12-31T23:59:59z'));
    // [END datastore_inequality_range]

    return this.datastore.runQuery(query);
  }

  testInequalityInvalid() {
    const datastore = this.datastore;

    // [START datastore_inequality_invalid]
    const query = datastore
      .createQuery('Task')
      .filter('priority', '>', 3)
      .filter('created', '>', new Date('1990-01-01T00:00:00z'));
    // [END datastore_inequality_invalid]

    return this.datastore.runQuery(query);
  }

  testEqualAndInequalityRange() {
    const datastore = this.datastore;

    // [START datastore_equal_and_inequality_range]
    const query = datastore
      .createQuery('Task')
      .filter('priority', '=', 4)
      .filter('done', '=', false)
      .filter('created', '>', new Date('1990-01-01T00:00:00z'))
      .filter('created', '<', new Date('2000-12-31T23:59:59z'));
    // [END datastore_equal_and_inequality_range]

    return this.datastore.runQuery(query);
  }

  testInequalitySort() {
    const datastore = this.datastore;

    // [START datastore_inequality_sort]
    const query = datastore
      .createQuery('Task')
      .filter('priority', '>', 3)
      .order('priority')
      .order('created');
    // [END datastore_inequality_sort]

    return this.datastore.runQuery(query);
  }

  testInequalitySortInvalidNotSame() {
    const datastore = this.datastore;

    // [START datastore_inequality_sort_invalid_not_same]
    const query = datastore
      .createQuery('Task')
      .filter('priority', '>', 3)
      .order('created');
    // [END datastore_inequality_sort_invalid_not_same]

    return this.datastore.runQuery(query);
  }

  testInequalitySortInvalidNotFirst() {
    const datastore = this.datastore;

    // [START datastore_inequality_sort_invalid_not_first]
    const query = datastore
      .createQuery('Task')
      .filter('priority', '>', 3)
      .order('created')
      .order('priority');
    // [END datastore_inequality_sort_invalid_not_first]

    return this.datastore.runQuery(query);
  }

  testLimit() {
    const datastore = this.datastore;

    // [START datastore_limit]
    const query = datastore.createQuery('Task').limit(5);
    // [END datastore_limit]

    return this.datastore.runQuery(query);
  }

  async testCursorPaging() {
    const datastore = this.datastore;
    const pageSize = 1;

    // [START datastore_cursor_paging]
    // By default, google-cloud-node will automatically paginate through all of
    // the results that match a query. However, this sample implements manual
    // pagination using limits and cursor tokens.
    async function runPageQuery(pageCursor) {
      let query = datastore.createQuery('Task').limit(pageSize);

      if (pageCursor) {
        query = query.start(pageCursor);
      }
      const results = await datastore.runQuery(query);
      const entities = results[0];
      const info = results[1];

      if (info.moreResults !== Datastore.NO_MORE_RESULTS) {
        // If there are more results to retrieve, the end cursor is
        // automatically set on `info`. To get this value directly, access
        // the `endCursor` property.
        const results = await runPageQuery(info.endCursor);

        // Concatenate entities
        results[0] = entities.concat(results[0]);
        return results;
      }

      return [entities, info];
    }
    // [END datastore_cursor_paging]
    const [entities, info] = await runPageQuery();
    assert.strictEqual(Array.isArray(entities), true);
    if (!info || !info.endCursor) {
      throw new Error('An `info` with an `endCursor` is not present.');
    }
  }

  async testEventualConsistentQuery() {
    const datastoreMock = datastore;
    datastore = this.datastore;
    // [START datastore_eventual_consistent_query]
    const ancestorKey = datastore.key(['TaskList', 'default']);
    const query = datastore.createQuery('Task').hasAncestor(ancestorKey);

    query.run({consistency: 'eventual'});
    // [END datastore_eventual_consistent_query]
    const [entities] = await query.run({consistency: 'eventual'});
    datastore = datastoreMock;
    return entities;
  }
}

// [START datastore_transactional_update]
async function transferFunds(fromKey, toKey, amount) {
  const transaction = datastore.transaction();
  await transaction.run();
  const results = await Promise.all([
    transaction.get(fromKey),
    transaction.get(toKey),
  ]);
  const accounts = results.map(result => result[0]);

  accounts[0].balance -= amount;
  accounts[1].balance += amount;

  transaction.save([
    {
      key: fromKey,
      data: accounts[0],
    },
    {
      key: toKey,
      data: accounts[1],
    },
  ]);

  return transaction.commit();
}
// [END datastore_transactional_update]

class Transaction extends TestHelper {
  constructor(projectId) {
    super(projectId);
    this.fromKey = this.datastore.key(['Bank', 1, 'Account', 1]);
    this.toKey = this.datastore.key(['Bank', 1, 'Account', 2]);

    this.originalBalance = 100;
    this.amountToTransfer = 10;
  }

  restoreBankAccountBalances(config) {
    const entities = config.keys.map(key => {
      return {
        key: key,
        data: {
          balance: config.balance,
        },
      };
    });

    return this.datastore.save(entities);
  }

  async testTransactionalUpdate() {
    const fromKey = this.fromKey;
    const toKey = this.toKey;
    const originalBalance = this.originalBalance;
    const amountToTransfer = this.amountToTransfer;
    const datastoreMock = datastore;

    // Overwrite so the real Datastore instance is used in `transferFunds`.
    datastore = this.datastore;
    try {
      await this.restoreBankAccountBalances({
        keys: [fromKey, toKey],
        balance: originalBalance,
      });
      await transferFunds(fromKey, toKey, amountToTransfer);
      const results = await Promise.all([
        this.datastore.get(fromKey),
        this.datastore.get(toKey),
      ]);
      const accounts = results.map(result => result[0]);
      // Restore `datastore` to the mock API.
      datastore = datastoreMock;
      assert.strictEqual(
        accounts[0].balance,
        originalBalance - amountToTransfer
      );
      assert.strictEqual(
        accounts[1].balance,
        originalBalance + amountToTransfer
      );
    } catch (err) {
      datastore = datastoreMock;
      throw err;
    }
  }

  async testTransactionalRetry() {
    // Overwrite so the real Datastore instance is used in `transferFunds`.
    const datastoreMock = datastore;
    datastore = this.datastore;

    const fromKey = this.fromKey;
    const toKey = this.toKey;
    await this.restoreBankAccountBalances({
      keys: [fromKey, toKey],
      balance: this.originalBalance,
    });

    // [START datastore_transactional_retry]
    async function transferFundsWithRetry() {
      const maxTries = 5;
      let currentAttempt = 1;
      let delay = 100;

      async function tryRequest() {
        try {
          await transferFunds(fromKey, toKey, 10);
        } catch (err) {
          if (currentAttempt <= maxTries) {
            // Use exponential backoff
            setTimeout(async () => {
              currentAttempt++;
              delay *= 2;
              await tryRequest();
            }, delay);
          }
          throw err;
        }
      }

      await tryRequest(1, 5);
    }
    // [END datastore_transactional_retry]
    await transferFundsWithRetry();
    // Restore `datastore` to the mock API.
    datastore = datastoreMock;
  }

  async testTransactionalGetOrCreate() {
    const taskKey = this.datastore.key(['Task', Date.now()]);

    // Overwrite so the real Datastore instance is used in `transferFunds`.
    const datastoreMock = datastore;
    datastore = this.datastore;

    // [START datastore_transactional_get_or_create]
    async function getOrCreate(taskKey, taskData) {
      const taskEntity = {
        key: taskKey,
        data: taskData,
      };
      const transaction = datastore.transaction();

      try {
        await transaction.run();
        const [task] = await transaction.get(taskKey);
        if (task) {
          // The task entity already exists.
          transaction.rollback();
        } else {
          // Create the task entity.
          transaction.save(taskEntity);
          transaction.commit();
        }
        return taskEntity;
      } catch (err) {
        transaction.rollback();
      }
    }
    // [END datastore_transactional_get_or_create]
    try {
      let task = await getOrCreate(taskKey, {});
      assert.ok(task, 'Should have a task.');
      task = await getOrCreate(taskKey, {});
      assert.ok(task, 'Should have a task.');
      // Restore `datastore` to the mock API.
      datastore = datastoreMock;
    } catch (err) {
      // Restore `datastore` to the mock API.
      datastore = datastoreMock;
      throw err;
    }
  }

  async testSingleEntityGroupReadOnly() {
    // Overwrite so the real Datastore instance is used in `transferFunds`.
    const datastoreMock = datastore;
    datastore = this.datastore;

    // [START datastore_transactional_single_entity_group_read_only]
    async function getTaskListEntities() {
      const transaction = datastore.transaction();
      try {
        const taskListKey = datastore.key(['TaskList', 'default']);

        await transaction.run();
        const [taskList] = await datastore.get(taskListKey);
        const query = datastore.createQuery('Task').hasAncestor(taskListKey);
        const [taskListEntities] = await datastore.runQuery(query);
        await transaction.commit();
        return [taskList, taskListEntities];
      } catch (err) {
        transaction.rollback();
      }
    }
    // [END datastore_transactional_single_entity_group_read_only]

    return getTaskListEntities().then(
      results => {
        // Restore `datastore` to the mock API.
        datastore = datastoreMock;
        assert.strictEqual(results.length, 2);
        assert.strictEqual(Array.isArray(results[1]), true);
      },
      err => {
        // Restore `datastore` to the mock API.
        datastore = datastoreMock;
        return Promise.reject(err);
      }
    );
  }
}

module.exports = {
  Entity: Entity,
  Index: Index,
  Metadata: Metadata,
  Query: Query,
  Transaction: Transaction,
};
