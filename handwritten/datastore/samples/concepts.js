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

// By default, the client will authenticate using the service account file
// specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable and use
// the project specified by the GCLOUD_PROJECT environment variable. See
// https://googlecloudplatform.github.io/gcloud-node/#/docs/google-cloud/latest/guides/authentication
const Datastore = require('@google-cloud/datastore');

function makeStub () {
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
  save: makeStub()
};

class TestHelper {
  constructor (projectId) {
    const options = {
      projectId: projectId
    };
    this.datastore = Datastore(options);
  }
}

class Entity extends TestHelper {
  constructor (projectId) {
    super(projectId);
    // To create the keys, we have to use this instance of Datastore.
    datastore.key = this.datastore.key;

    this.incompleteKey = this.getIncompleteKey();
    this.namedKey = this.getNamedKey();
    this.keyWithParent = this.getKeyWithParent();
    this.keyWithMultiLevelParent = this.getKeyWithMultiLevelParent();
  }

  getIncompleteKey () {
    // [START incomplete_key]
    const taskKey = datastore.key('Task');
    // [END incomplete_key]

    return taskKey;
  }

  getNamedKey () {
    // [START named_key]
    const taskKey = datastore.key([
      'Task',
      'sampleTask'
    ]);
    // [END named_key]

    return taskKey;
  }

  getKeyWithParent () {
    // [START key_with_parent]
    const taskKey = datastore.key([
      'TaskList',
      'default',
      'Task',
      'sampleTask'
    ]);
    // [END key_with_parent]

    return taskKey;
  }

  getKeyWithMultiLevelParent () {
    // [START key_with_multilevel_parent]
    const taskKey = datastore.key([
      'User',
      'alice',
      'TaskList',
      'default',
      'Task',
      'sampleTask'
    ]);
    // [END key_with_multilevel_parent]

    return taskKey;
  }

  getTask () {
    // [START basic_entity]
    const task = {
      category: 'Personal',
      done: false,
      priority: 4,
      description: 'Learn Cloud Datastore'
    };
    // [END basic_entity]

    return task;
  }

  testIncompleteKey () {
    return this.datastore.save({
      key: this.incompleteKey,
      data: {}
    });
  }

  testNamedKey () {
    return this.datastore.save({
      key: this.namedKey,
      data: {}
    });
  }

  testKeyWithParent () {
    return this.datastore.save({
      key: this.keyWithParent,
      data: {}
    });
  }

  testKeyWithMultiLevelParent () {
    return this.datastore.save({
      key: this.keyWithMultiLevelParent,
      data: {}
    });
  }

  testEntityWithParent () {
    const taskKey = this.keyWithParent;

    // [START entity_with_parent]
    const task = {
      key: taskKey,
      data: {
        category: 'Personal',
        done: false,
        priority: 4,
        description: 'Learn Cloud Datastore'
      }
    };
    // [END entity_with_parent]

    return this.datastore.save(task);
  }

  testProperties () {
    // [START properties]
    const task = [
      {
        name: 'category',
        value: 'Personal'
      },
      {
        name: 'created',
        value: new Date()
      },
      {
        name: 'done',
        value: false
      },
      {
        name: 'priority',
        value: 4
      },
      {
        name: 'percent_complete',
        value: 10.0
      },
      {
        name: 'description',
        value: 'Learn Cloud Datastore',
        excludeFromIndexes: true
      }
    ];
    // [END properties]

    return this.datastore.save({
      key: this.incompleteKey,
      data: task
    });
  }

  testArrayValue () {
    // [START array_value]
    const task = {
      tags: [
        'fun',
        'programming'
      ],
      collaborators: [
        'alice',
        'bob'
      ]
    };
    // [END array_value]

    return this.datastore.save({
      key: this.incompleteKey,
      data: task
    });
  }

  testBasicEntity () {
    return this.datastore.save({
      key: this.getIncompleteKey(),
      data: this.getTask()
    });
  }

  testUpsert () {
    const taskKey = this.getIncompleteKey();
    const task = this.getTask();

    // [START upsert]
    const entity = {
      key: taskKey,
      data: task
    };

    datastore.upsert(entity)
      .then(() => {
        // Task inserted successfully.
      });
    // [END upsert]

    return this.datastore.upsert({
      key: this.datastore.key(['Task', 1]),
      data: task
    });
  }

  testInsert () {
    const taskKey = this.getIncompleteKey();
    const task = this.getTask();

    // [START insert]
    const entity = {
      key: taskKey,
      data: task
    };

    datastore.insert(entity)
      .then(() => {
        // Task inserted successfully.
      });
    // [END insert]

    return this.datastore.save({
      method: 'insert',
      key: taskKey,
      data: task
    });
  }

  testLookup () {
    const taskKey = this.getIncompleteKey();

    // [START lookup]
    datastore.get(taskKey)
      .then((results) => {
        // Task found.
        const entity = results[0];

        // entity = {
        //   category: 'Personal',
        //   done: false,
        //   priority: 4,
        //   description: 'Learn Cloud Datastore'
        // };
        console.log(entity);
      });
    // [END lookup]

    return this.datastore.save({
      method: 'insert',
      key: taskKey,
      data: {}
    }).then(() => this.datastore.get(taskKey));
  }

  testUpdate () {
    const taskKey = this.getIncompleteKey();
    const task = this.getTask();

    // [START update]
    const entity = {
      key: taskKey,
      data: task
    };

    datastore.update(entity)
      .then(() => {
        // Task updated successfully.
      });
    // [END update]

    return this.datastore.save({
      method: 'insert',
      key: taskKey,
      data: {}
    }).then(() => this.datastore.update({ key: taskKey, data: task }));
  }

  testDelete () {
    const taskKey = this.getIncompleteKey();

    // [START delete]
    datastore.delete(taskKey)
      .then(() => {
        // Task deleted successfully.
      });
    // [END delete]

    return this.datastore.save({
      method: 'insert',
      key: taskKey,
      data: {}
    }).then(() => this.datastore.delete(taskKey));
  }

  testBatchUpsert () {
    const taskKey1 = this.datastore.key(['Task', 1]);
    const taskKey2 = this.datastore.key(['Task', 2]);

    const task1 = {
      category: 'Personal',
      done: false,
      priority: 4,
      description: 'Learn Cloud Datastore'
    };

    const task2 = {
      category: 'Work',
      done: false,
      priority: 8,
      description: 'Integrate Cloud Datastore'
    };

    // [START batch_upsert]
    const entities = [
      {
        key: taskKey1,
        data: task1
      },
      {
        key: taskKey2,
        data: task2
      }
    ];

    datastore.upsert(entities)
      .then(() => {
        // Tasks inserted successfully.
      });
    // [END batch_upsert]

    return this.datastore.upsert([
      {
        key: taskKey1,
        data: task1
      },
      {
        key: taskKey2,
        data: task2
      }
    ]);
  }

  testBatchLookup () {
    const taskKey1 = this.datastore.key(['Task', 1]);
    const taskKey2 = this.datastore.key(['Task', 2]);

    // [START batch_lookup]
    const keys = [taskKey1, taskKey2];

    datastore.get(keys)
      .then((results) => {
        // Tasks retrieved successfully.
        const tasks = results[0];

        console.log(tasks);
      });
    // [END batch_lookup]

    return this.datastore.get([taskKey1, taskKey2]);
  }

  testBatchDelete () {
    const taskKey1 = this.datastore.key(['Task', 1]);
    const taskKey2 = this.datastore.key(['Task', 2]);

    // [START batch_delete]
    const keys = [taskKey1, taskKey2];

    datastore.delete(keys)
      .then(() => {
        // Tasks deleted successfully.
      });
    // [END batch_delete]

    return this.datastore.delete([taskKey1, taskKey2]);
  }
}

class Index extends TestHelper {
  testUnindexedPropertyQuery () {
    const datastore = this.datastore;

    // [START unindexed_property_query]
    const query = datastore.createQuery('Task')
      .filter('description', '=', 'A task description.');
    // [END unindexed_property_query]

    return this.datastore.runQuery(query);
  }

  testExplodingProperties (t) {
    const original = datastore.key;
    datastore.key = this.datastore.key;

    // [START exploding_properties]
    const task = {
      method: 'insert',
      key: datastore.key('Task'),
      data: {
        tags: [
          'fun',
          'programming',
          'learn'
        ],
        collaborators: [
          'alice',
          'bob',
          'charlie'
        ],
        created: new Date()
      }
    };
    // [END exploding_properties]

    datastore.key = original;

    return this.datastore.save(task)
      .then(() => {
        t.truthy(task.key);
        t.truthy(task.key.id);
      });
  }
}

class Metadata extends TestHelper {
  testNamespaceRunQuery (t) {
    const datastore = this.datastore;

    const startNamespace = 'Animals';
    const endNamespace = 'Zoos';

    return datastore.save({
      key: datastore.key({
        namespace: 'Animals',
        path: ['Ant', 1]
      }),
      data: {}
    })
      .then(() => {
        // [START namespace_run_query]
        function runNamespaceQuery (startNamespace, endNamespace) {
          const startKey = datastore.key(['__namespace__', startNamespace]);
          const endKey = datastore.key(['__namespace__', endNamespace]);

          const query = datastore.createQuery('__namespace__')
            .select('__key__')
            .filter('__key__', '>=', startKey)
            .filter('__key__', '<', endKey);

          return datastore.runQuery(query)
            .then((results) => {
              const entities = results[0];
              const namespaces = entities.map((entity) => entity[datastore.KEY].name);

              console.log('Namespaces:');
              namespaces.forEach((namespace) => console.log(namespace));

              return namespaces;
            });
        }
        // [END namespace_run_query]

        return runNamespaceQuery(startNamespace, endNamespace);
      })
      .then((namespaces) => {
        t.deepEqual(namespaces, ['Animals']);
      });
  }

  testKindRunQuery (t) {
    const datastore = this.datastore;

    // [START kind_run_query]
    function runKindQuery () {
      const query = datastore.createQuery('__kind__')
        .select('__key__');

      return datastore.runQuery(query)
        .then((results) => {
          const entities = results[0];
          const kinds = entities.map((entity) => entity[datastore.KEY].name);

          console.log('Kinds:');
          kinds.forEach((kind) => console.log(kind));

          return kinds;
        });
    }
    // [END kind_run_query]

    return runKindQuery()
      .then((kinds) => {
        t.true(kinds.includes('Account'));
      });
  }

  testPropertyRunQuery (t) {
    const datastore = this.datastore;

    // [START property_run_query]
    function runPropertyQuery () {
      const query = datastore.createQuery('__property__')
        .select('__key__');

      return datastore.runQuery(query)
        .then((results) => {
          const entities = results[0];
          const propertiesByKind = {};

          entities.forEach((entity) => {
            const key = entity[datastore.KEY];
            const kind = key.path[1];
            const property = key.path[3];

            propertiesByKind[kind] = propertiesByKind[kind] || [];
            propertiesByKind[kind].push(property);
          });

          console.log('Properties by Kind:');
          for (let key in propertiesByKind) {
            console.log(key, propertiesByKind[key]);
          }

          return propertiesByKind;
        });
    }
    // [END property_run_query]

    return runPropertyQuery()
      .then((propertiesByKind) => {
        t.deepEqual(propertiesByKind.Account, ['balance']);
      });
  }

  testPropertyByKindRunQuery (t) {
    const datastore = this.datastore;

    // [START property_by_kind_run_query]
    function runPropertyByKindQuery () {
      const ancestorKey = datastore.key(['__kind__', 'Account']);

      const query = datastore.createQuery('__property__')
        .hasAncestor(ancestorKey);

      return datastore.runQuery(query)
        .then((results) => {
          const entities = results[0];

          const representationsByProperty = {};

          entities.forEach((entity) => {
            const key = entity[datastore.KEY];
            const propertyName = key.name;
            const propertyType = entity.property_representation;

            representationsByProperty[propertyName] = propertyType;
          });

          console.log('Task property representations:');
          for (let key in representationsByProperty) {
            console.log(key, representationsByProperty[key]);
          }

          return representationsByProperty;
        });
    }
    // [END property_by_kind_run_query]

    return runPropertyByKindQuery()
      .then((propertiesByKind) => {
        t.deepEqual(propertiesByKind, {
          balance: ['INT64']
        });
      });
  }
}

class Query extends TestHelper {
  constructor (projectId) {
    super(projectId);

    this.basicQuery = this.getBasicQuery();
    this.projectionQuery = this.getProjectionQuery();
    this.ancestorQuery = this.getAncestorQuery();
  }

  getBasicQuery () {
    const datastore = this.datastore;

    // [START basic_query]
    const query = datastore.createQuery('Task')
      .filter('done', '=', false)
      .filter('priority', '>=', 4)
      .order('priority', {
        descending: true
      });
    // [END basic_query]

    return query;
  }

  getProjectionQuery () {
    const datastore = this.datastore;

    // [START projection_query]
    const query = datastore.createQuery('Task')
      .select(['priority', 'percent_complete']);
    // [END projection_query]

    return query;
  }

  getAncestorQuery () {
    const datastore = this.datastore;

    // [START ancestor_query]
    const ancestorKey = datastore.key(['TaskList', 'default']);

    const query = datastore.createQuery('Task')
      .hasAncestor(ancestorKey);
    // [END ancestor_query]

    return query;
  }

  testRunQuery () {
    const query = this.basicQuery;

    // [START run_query]
    datastore.runQuery(query)
      .then((results) => {
        // Task entities found.
        const tasks = results[0];

        console.log('Tasks:');
        tasks.forEach((task) => console.log(task));
      });
    // [END run_query]

    return this.datastore.runQuery(query);
  }

  testPropertyFilter () {
    const datastore = this.datastore;

    // [START property_filter]
    const query = datastore.createQuery('Task')
      .filter('done', '=', false);
    // [END property_filter]

    return this.datastore.runQuery(query);
  }

  testCompositeFilter () {
    const datastore = this.datastore;

    // [START composite_filter]
    const query = datastore.createQuery('Task')
      .filter('done', '=', false)
      .filter('priority', '=', 4);
    // [END composite_filter]

    return this.datastore.runQuery(query);
  }

  testKeyFilter () {
    const datastore = this.datastore;

    // [START key_filter]
    const query = datastore.createQuery('Task')
      .filter('__key__', '>', datastore.key(['Task', 'someTask']));
    // [END key_filter]

    return this.datastore.runQuery(query);
  }

  testAscendingSort () {
    const datastore = this.datastore;

    // [START ascending_sort]
    const query = datastore.createQuery('Task')
      .order('created');
    // [END ascending_sort]

    return this.datastore.runQuery(query);
  }

  testDescendingSort () {
    const datastore = this.datastore;

    // [START descending_sort]
    const query = datastore.createQuery('Task')
      .order('created', {
        descending: true
      });
    // [END descending_sort]

    return this.datastore.runQuery(query);
  }

  testMultiSort () {
    const datastore = this.datastore;

    // [START multi_sort]
    const query = datastore.createQuery('Task')
      .order('priority', {
        descending: true
      })
      .order('created');
    // [END multi_sort]

    return this.datastore.runQuery(query);
  }

  testKindlessQuery () {
    const datastore = this.datastore;
    const lastSeenKey = this.datastore.key(['Task', Date.now()]);

    // [START kindless_query]
    const query = datastore.createQuery()
      .filter('__key__', '>', lastSeenKey)
      .limit(1);
    // [END kindless_query]

    return this.datastore.runQuery(query);
  }

  testRunQueryProjection () {
    const datastore = this.datastore;
    const query = this.projectionQuery;

    // [START run_query_projection]
    function runProjectionQuery () {
      const priorities = [];
      const percentCompletes = [];

      return datastore.runQuery(query)
        .then((results) => {
          const tasks = results[0];

          tasks.forEach((task) => {
            priorities.push(task.priority);
            percentCompletes.push(task.percent_complete);
          });

          return {
            priorities: priorities,
            percentCompletes: percentCompletes
          };
        });
    }
    // [END run_query_projection]

    return runProjectionQuery();
  }

  testKeysOnlyQuery () {
    const datastore = this.datastore;

    // [START keys_only_query]
    const query = datastore.createQuery()
      .select('__key__')
      .limit(1);
    // [END keys_only_query]

    return this.datastore.runQuery(query);
  }

  testDistinctQuery () {
    const datastore = this.datastore;

    // [START distinct_query]
    const query = datastore.createQuery('Task')
      .groupBy(['category', 'priority'])
      .order('category')
      .order('priority');
    // [END distinct_query]

    return this.datastore.runQuery(query);
  }

  testDistinctOnQuery () {
    const datastore = this.datastore;

    // [START distinct_on_query]
    const query = datastore.createQuery('Task')
      .groupBy('category')
      .order('category')
      .order('priority');
    // [END distinct_on_query]

    return this.datastore.runQuery(query);
  }

  testArrayValueInequalityRange () {
    const datastore = this.datastore;

    // [START array_value_inequality_range]
    const query = datastore.createQuery('Task')
      .filter('tag', '>', 'learn')
      .filter('tag', '<', 'math');
    // [END array_value_inequality_range]

    return this.datastore.runQuery(query);
  }

  testArrayValueEquality () {
    const datastore = this.datastore;

    // [START array_value_equality]
    const query = datastore.createQuery('Task')
      .filter('tag', '=', 'fun')
      .filter('tag', '=', 'programming');
    // [END array_value_equality]

    return this.datastore.runQuery(query);
  }

  testInequalityRange () {
    const datastore = this.datastore;

    // [START inequality_range]
    const query = datastore.createQuery('Task')
      .filter('created', '>', new Date('1990-01-01T00:00:00z'))
      .filter('created', '<', new Date('2000-12-31T23:59:59z'));
    // [END inequality_range]

    return this.datastore.runQuery(query);
  }

  testInequalityInvalid () {
    const datastore = this.datastore;

    // [START inequality_invalid]
    const query = datastore.createQuery('Task')
      .filter('priority', '>', 3)
      .filter('created', '>', new Date('1990-01-01T00:00:00z'));
    // [END inequality_invalid]

    return this.datastore.runQuery(query);
  }

  testEqualAndInequalityRange () {
    const datastore = this.datastore;

    // [START equal_and_inequality_range]
    const query = datastore.createQuery('Task')
      .filter('priority', '=', 4)
      .filter('done', '=', false)
      .filter('created', '>', new Date('1990-01-01T00:00:00z'))
      .filter('created', '<', new Date('2000-12-31T23:59:59z'));
    // [END equal_and_inequality_range]

    return this.datastore.runQuery(query);
  }

  testInequalitySort () {
    const datastore = this.datastore;

    // [START inequality_sort]
    const query = datastore.createQuery('Task')
      .filter('priority', '>', 3)
      .order('priority')
      .order('created');
    // [END inequality_sort]

    return this.datastore.runQuery(query);
  }

  testInequalitySortInvalidNotSame () {
    const datastore = this.datastore;

    // [START inequality_sort_invalid_not_same]
    const query = datastore.createQuery('Task')
      .filter('priority', '>', 3)
      .order('created');
    // [END inequality_sort_invalid_not_same]

    return this.datastore.runQuery(query);
  }

  testInequalitySortInvalidNotFirst () {
    const datastore = this.datastore;

    // [START inequality_sort_invalid_not_first]
    const query = datastore.createQuery('Task')
      .filter('priority', '>', 3)
      .order('created')
      .order('priority');
    // [END inequality_sort_invalid_not_first]

    return this.datastore.runQuery(query);
  }

  testLimit () {
    const datastore = this.datastore;

    // [START limit]
    const query = datastore.createQuery('Task')
      .limit(5);
    // [END limit]

    return this.datastore.runQuery(query);
  }

  testCursorPaging (t) {
    const datastore = this.datastore;
    const pageSize = 1;

    // [START cursor_paging]
    // By default, google-cloud-node will automatically paginate through all of
    // the results that match a query. However, this sample implements manual
    // pagination using limits and cursor tokens.
    function runPageQuery (pageCursor) {
      let query = datastore.createQuery('Task')
        .limit(pageSize);

      if (pageCursor) {
        query = query.start(pageCursor);
      }

      return datastore.runQuery(query)
        .then((results) => {
          const entities = results[0];
          const info = results[1];

          if (info.moreResults !== Datastore.NO_MORE_RESULTS) {
            // If there are more results to retrieve, the end cursor is
            // automatically set on `info`. To get this value directly, access
            // the `endCursor` property.
            return runPageQuery(info.endCursor)
              .then((results) => {
                // Concatenate entities
                results[0] = entities.concat(results[0]);
                return results;
              });
          }

          return [entities, info];
        });
    }
    // [END cursor_paging]

    return runPageQuery()
      .then((results) => {
        const entities = results[0];
        t.true(Array.isArray(entities));
        const info = results[1];
        if (!info || !info.endCursor) {
          throw new Error('An `info` with an `endCursor` is not present.');
        }
      });
  }

  testEventualConsistentQuery () {
    // [START eventual_consistent_query]
    // Read consistency cannot be specified in google-cloud-node.
    // [END eventual_consistent_query]
  }
}

// [START transactional_update]
function transferFunds (fromKey, toKey, amount) {
  const transaction = datastore.transaction();

  return transaction.run()
    .then(() => Promise.all([transaction.get(fromKey), transaction.get(toKey)]))
    .then((results) => {
      const accounts = results
        .map((result) => result[0]);

      accounts[0].balance -= amount;
      accounts[1].balance += amount;

      transaction.save([
        {
          key: fromKey,
          data: accounts[0]
        },
        {
          key: toKey,
          data: accounts[1]
        }
      ]);

      return transaction.commit();
    })
    .catch(() => transaction.rollback());
}
// [END transactional_update]

class Transaction extends TestHelper {
  constructor (projectId) {
    super(projectId);
    this.fromKey = this.datastore.key(['Bank', 1, 'Account', 1]);
    this.toKey = this.datastore.key(['Bank', 1, 'Account', 2]);

    this.originalBalance = 100;
    this.amountToTransfer = 10;
  }

  restoreBankAccountBalances (config) {
    const entities = config.keys.map((key) => {
      return {
        key: key,
        data: {
          balance: config.balance
        }
      };
    });

    return this.datastore.save(entities);
  }

  testTransactionalUpdate (t) {
    const fromKey = this.fromKey;
    const toKey = this.toKey;
    const originalBalance = this.originalBalance;
    const amountToTransfer = this.amountToTransfer;
    const datastoreMock = datastore;

    // Overwrite so the real Datastore instance is used in `transferFunds`.
    datastore = this.datastore;

    return this.restoreBankAccountBalances({
      keys: [fromKey, toKey],
      balance: originalBalance
    })
      .then(() => transferFunds(fromKey, toKey, amountToTransfer))
      .then(() => Promise.all([this.datastore.get(fromKey), this.datastore.get(toKey)]))
      .then((results) => {
        const accounts = results.map((result) => result[0]);
        // Restore `datastore` to the mock API.
        datastore = datastoreMock;
        t.is(accounts[0].balance, originalBalance - amountToTransfer);
        t.is(accounts[1].balance, originalBalance + amountToTransfer);
      })
      .catch((err) => {
        // Restore `datastore` to the mock API.
        datastore = datastoreMock;
        return Promise.reject(err);
      });
  }

  testTransactionalRetry () {
    // Overwrite so the real Datastore instance is used in `transferFunds`.
    const datastoreMock = datastore;
    datastore = this.datastore;

    const fromKey = this.fromKey;
    const toKey = this.toKey;

    return this.restoreBankAccountBalances({
      keys: [fromKey, toKey],
      balance: this.originalBalance
    })
      .then(() => {
        // [START transactional_retry]
        function transferFundsWithRetry () {
          const maxTries = 5;
          let currentAttempt = 1;
          let delay = 100;

          function tryRequest () {
            return transferFunds(fromKey, toKey, 10)
              .catch((err) => {
                if (currentAttempt <= maxTries) {
                  // Use exponential backoff
                  return new Promise((resolve, reject) => {
                    setTimeout(() => {
                      currentAttempt++;
                      delay *= 2;
                      tryRequest().then(resolve, reject);
                    }, delay);
                  });
                }
                return Promise.reject(err);
              });
          }

          return tryRequest(1, 5);
        }
        // [END transactional_retry]
        return transferFundsWithRetry();
      })
      .then(() => {
        // Restore `datastore` to the mock API.
        datastore = datastoreMock;
      })
      .catch(() => {
        // Restore `datastore` to the mock API.
        datastore = datastoreMock;
      });
  }

  testTransactionalGetOrCreate (t) {
    const taskKey = this.datastore.key(['Task', Date.now()]);

    // Overwrite so the real Datastore instance is used in `transferFunds`.
    const datastoreMock = datastore;
    datastore = this.datastore;

    // [START transactional_get_or_create]
    function getOrCreate (taskKey, taskData) {
      const taskEntity = {
        key: taskKey,
        data: taskData
      };

      const transaction = datastore.transaction();

      return transaction.run()
        .then(() => transaction.get(taskKey))
        .then((results) => {
          const task = results[0];
          if (task) {
            // The task entity already exists.
            return transaction.rollback();
          } else {
            // Create the task entity.
            transaction.save(taskEntity);
            return transaction.commit();
          }
        })
        .then(() => taskEntity)
        .catch(() => transaction.rollback());
    }
    // [END transactional_get_or_create]

    return getOrCreate(taskKey, {})
      .then((task) => {
        t.truthy(task, 'Should have a task.');
        return getOrCreate(taskKey, {});
      })
      .then((task) => {
        t.truthy(task, 'Should have a task.');
        // Restore `datastore` to the mock API.
        datastore = datastoreMock;
      })
      .catch((err) => {
        // Restore `datastore` to the mock API.
        datastore = datastoreMock;
        return Promise.reject(err);
      });
  }

  testSingleEntityGroupReadOnly (t) {
    // Overwrite so the real Datastore instance is used in `transferFunds`.
    const datastoreMock = datastore;
    datastore = this.datastore;

    // [START transactional_single_entity_group_read_only]
    function getTaskListEntities () {
      let taskList, taskListEntities;

      const transaction = datastore.transaction();
      const taskListKey = datastore.key(['TaskList', 'default']);

      return transaction.run()
        .then(() => datastore.get(taskListKey))
        .then((results) => {
          taskList = results[0];
          const query = datastore.createQuery('Task')
            .hasAncestor(taskListKey);
          return datastore.runQuery(query);
        })
        .then((results) => {
          taskListEntities = results[0];
          return transaction.commit();
        })
        .then(() => [taskList, taskListEntities])
        .catch(() => transaction.rollback());
    }
    // [END transactional_single_entity_group_read_only]

    return getTaskListEntities()
      .then((results) => {
        // Restore `datastore` to the mock API.
        datastore = datastoreMock;
        t.is(results.length, 2);
        t.true(Array.isArray(results[1]));
      }, (err) => {
        // Restore `datastore` to the mock API.
        datastore = datastoreMock;
        return Promise.reject(err);
      });
  }
}

module.exports = {
  Entity: Entity,
  Index: Index,
  Metadata: Metadata,
  Query: Query,
  Transaction: Transaction
};
