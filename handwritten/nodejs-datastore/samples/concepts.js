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

var asyncUtil = require('async');
// By default, the client will authenticate using the service account file
// specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable and use
// the project specified by the GCLOUD_PROJECT environment variable. See
// https://googlecloudplatform.github.io/gcloud-node/#/docs/google-cloud/latest/guides/authentication
var Datastore = require('@google-cloud/datastore');

module.exports = {
  Entity: Entity,
  Index: Index,
  Metadata: Metadata,
  Query: Query,
  Transaction: Transaction
};

// This mock is used in the documentation snippets.
var datastore = {
  delete: function () {},
  get: function () {},
  insert: function () {},
  key: function () {},
  update: function () {},
  upsert: function () {},
  runQuery: function () {},
  save: function () {}
};

function Entity (projectId) {
  var options = {
    projectId: projectId
  };

  this.datastore = Datastore(options);

  // To create the keys, we have to use this instance of Datastore.
  datastore.key = this.datastore.key;

  this.incompleteKey = this.getIncompleteKey();
  this.namedKey = this.getNamedKey();
  this.keyWithParent = this.getKeyWithParent();
  this.keyWithMultiLevelParent = this.getKeyWithMultiLevelParent();
}

Entity.prototype.getIncompleteKey = function () {
  // [START incomplete_key]
  var taskKey = datastore.key('Task');
  // [END incomplete_key]

  return taskKey;
};

Entity.prototype.getNamedKey = function () {
  // [START named_key]
  var taskKey = datastore.key([
    'Task',
    'sampleTask'
  ]);
  // [END named_key]

  return taskKey;
};

Entity.prototype.getKeyWithParent = function () {
  // [START key_with_parent]
  var taskKey = datastore.key([
    'TaskList',
    'default',
    'Task',
    'sampleTask'
  ]);
  // [END key_with_parent]

  return taskKey;
};

Entity.prototype.getKeyWithMultiLevelParent = function () {
  // [START key_with_multilevel_parent]
  var taskKey = datastore.key([
    'User',
    'alice',
    'TaskList',
    'default',
    'Task',
    'sampleTask'
  ]);
  // [END key_with_multilevel_parent]

  return taskKey;
};

Entity.prototype.getTask = function () {
  // [START basic_entity]
  var task = {
    category: 'Personal',
    done: false,
    priority: 4,
    description: 'Learn Cloud Datastore'
  };
  // [END basic_entity]

  return task;
};

Entity.prototype.testIncompleteKey = function (callback) {
  this.datastore.save({
    key: this.incompleteKey,
    data: {}
  }, callback);
};

Entity.prototype.testNamedKey = function (callback) {
  this.datastore.save({
    key: this.namedKey,
    data: {}
  }, callback);
};

Entity.prototype.testKeyWithParent = function (callback) {
  this.datastore.save({
    key: this.keyWithParent,
    data: {}
  }, callback);
};

Entity.prototype.testKeyWithMultiLevelParent = function (callback) {
  this.datastore.save({
    key: this.keyWithMultiLevelParent,
    data: {}
  }, callback);
};

Entity.prototype.testEntityWithParent = function (callback) {
  var taskKey = this.keyWithParent;

  // [START entity_with_parent]
  var task = {
    key: taskKey,
    data: {
      category: 'Personal',
      done: false,
      priority: 4,
      description: 'Learn Cloud Datastore'
    }
  };
  // [END entity_with_parent]

  this.datastore.save(task, callback);
};

Entity.prototype.testProperties = function (callback) {
  // jshint camelcase:false
  // [START properties]
  var task = [
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

  this.datastore.save({
    key: this.incompleteKey,
    data: task
  }, callback);
};

Entity.prototype.testArrayValue = function (callback) {
  // [START array_value]
  var task = {
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

  this.datastore.save({
    key: this.incompleteKey,
    data: task
  }, callback);
};

Entity.prototype.testBasicEntity = function (callback) {
  this.datastore.save({
    key: this.getIncompleteKey(),
    data: this.getTask()
  }, callback);
};

Entity.prototype.testUpsert = function (callback) {
  var taskKey = this.getIncompleteKey();
  var task = this.getTask();

  // [START upsert]
  datastore.upsert({
    key: taskKey,
    data: task
  }, function (err) {
    if (!err) {
      // Task inserted successfully.
    }
  });
  // [END upsert]

  this.datastore.upsert({
    key: this.datastore.key(['Task', 1]),
    data: task
  }, callback);
};

Entity.prototype.testInsert = function (callback) {
  var taskKey = this.getIncompleteKey();
  var task = this.getTask();

  // [START insert]
  datastore.insert({
    key: taskKey,
    data: task
  }, function (err) {
    if (!err) {
      // Task inserted successfully.
    }
  });
  // [END insert]

  this.datastore.save({
    method: 'insert',
    key: taskKey,
    data: task
  }, callback);
};

Entity.prototype.testLookup = function (callback) {
  var self = this;
  var taskKey = this.getIncompleteKey();

  // jshint unused:false
  // [START lookup]
  datastore.get(taskKey, function (err, entity) {
    if (!err) {
      // Task found.

      // entity.data = {
      //   category: 'Personal',
      //   done: false,
      //   priority: 4,
      //   description: 'Learn Cloud Datastore'
      // };
    }
  });
  // [END lookup]

  this.datastore.save({
    method: 'insert',
    key: taskKey,
    data: {}
  }, function (err) {
    if (err) {
      callback(err);
      return;
    }

    self.datastore.get(taskKey, callback);
  });
};

Entity.prototype.testUpdate = function (callback) {
  var self = this;
  var taskKey = this.getIncompleteKey();
  var task = this.getTask();

  // [START update]
  datastore.update({
    key: taskKey,
    data: task
  }, function (err) {
    if (!err) {
      // Task updated successfully.
    }
  });
  // [END update]

  this.datastore.save({
    method: 'insert',
    key: taskKey,
    data: {}
  }, function (err) {
    if (err) {
      callback(err);
      return;
    }

    self.datastore.update({
      key: taskKey,
      data: task
    }, callback);
  });
};

Entity.prototype.testDelete = function (callback) {
  var self = this;
  var taskKey = this.getIncompleteKey();

  // [START delete]
  datastore.delete(taskKey, function (err) {
    if (!err) {
      // Task deleted successfully.
    }
  });
  // [END delete]

  this.datastore.save({
    method: 'insert',
    key: taskKey,
    data: {}
  }, function (err) {
    if (err) {
      callback(err);
      return;
    }

    self.datastore.delete(taskKey, callback);
  });
};

Entity.prototype.testBatchUpsert = function (callback) {
  var taskKey1 = this.datastore.key(['Task', 1]);
  var taskKey2 = this.datastore.key(['Task', 2]);

  var task1 = {
    category: 'Personal',
    done: false,
    priority: 4,
    description: 'Learn Cloud Datastore'
  };

  var task2 = {
    category: 'Work',
    done: false,
    priority: 8,
    description: 'Integrate Cloud Datastore'
  };

  // [START batch_upsert]
  datastore.upsert([
    {
      key: taskKey1,
      data: task1
    },
    {
      key: taskKey2,
      data: task2
    }
  ], function (err) {
    if (!err) {
      // Tasks inserted successfully.
    }
  });
  // [END batch_upsert]

  this.datastore.upsert([
    {
      key: taskKey1,
      data: task1
    },
    {
      key: taskKey2,
      data: task2
    }
  ], callback);
};

Entity.prototype.testBatchLookup = function (callback) {
  var taskKey1 = this.datastore.key(['Task', 1]);
  var taskKey2 = this.datastore.key(['Task', 2]);

  // jshint unused:false
  // [START batch_lookup]
  datastore.get([
    taskKey1,
    taskKey2
  ], function (err, tasks) {
    if (!err) {
      // Tasks retrieved successfully.
    }
  });
  // [END batch_lookup]

  this.datastore.get([
    taskKey1,
    taskKey2
  ], callback);
};

Entity.prototype.testBatchDelete = function (callback) {
  var taskKey1 = this.datastore.key(['Task', 1]);
  var taskKey2 = this.datastore.key(['Task', 2]);

  // [START batch_delete]
  datastore.delete([
    taskKey1,
    taskKey2
  ], function (err) {
    if (!err) {
      // Tasks deleted successfully.
    }
  });
  // [END batch_delete]

  this.datastore.delete([
    taskKey1,
    taskKey2
  ], callback);
};

function Index (projectId) {
  var options = {
    projectId: projectId
  };

  this.datastore = Datastore(options);
}

Index.prototype.testUnindexedPropertyQuery = function (callback) {
  var datastore = this.datastore;

  // [START unindexed_property_query]
  var query = datastore.createQuery('Task')
    .filter('description', '=', 'A task description.');
  // [END unindexed_property_query]

  this.datastore.runQuery(query, callback);
};

Index.prototype.testExplodingProperties = function (callback) {
  var original = datastore.key;
  datastore.key = this.datastore.key;

  // [START exploding_properties]
  var task = {
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

  this.datastore.save(task, callback);
};

function Metadata (projectId) {
  var options = {
    projectId: projectId
  };

  this.datastore = Datastore(options);
}

Metadata.prototype.testNamespaceRunQuery = function (callback) {
  var self = this;

  datastore.createQuery = this.datastore.createQuery;
  datastore.key = this.datastore.key;

  var startNamespace = 'Animals';
  var endNamespace = 'Zoos';

  this.datastore.save([
    {
      key: datastore.key({
        namespace: 'Animals',
        path: ['Ant', 1]
      }),
      data: {}
    }
  ], function (err) {
    if (err) {
      callback(err);
      return;
    }

    // jshint unused:false
    // [START namespace_run_query]
    var query = datastore.createQuery('__namespace__')
      .select('__key__')
      .filter('__key__', '>=', datastore.key(['__namespace__', startNamespace]))
      .filter('__key__', '<', datastore.key(['__namespace__', endNamespace]));

    datastore.runQuery(query, function (err, entities) {
      if (err) {
        // An error occurred while running the query.
        return;
      }

      var namespaces = entities.map(function (entity) {
        return entity.key.path.pop();
      });
      console.log('namespaces', namespaces);
    });
    // [END namespace_run_query]

    self.datastore.runQuery(query, callback);
  });
};

Metadata.prototype.testKindRunQuery = function (callback) {
  datastore.createQuery = this.datastore.createQuery;

  // jshint unused:false
  // [START kind_run_query]
  var query = datastore.createQuery('__kind__')
    .select('__key__');

  datastore.runQuery(query, function (err, entities) {
    if (err) {
      // An error occurred while running the query.
      return;
    }

    var kinds = entities.map(function (entity) {
      return entity.key.path.pop();
    });
    console.log('kinds', kinds);
  });
  // [END kind_run_query]

  this.datastore.runQuery(query, callback);
};

Metadata.prototype.testPropertyRunQuery = function (callback) {
  datastore.createQuery = this.datastore.createQuery;

  // [START property_run_query]
  var query = datastore.createQuery('__property__')
    .select('__key__');

  datastore.runQuery(query, function (err, entities) {
    if (err) {
      // An error occurred while running the query.
      return;
    }

    var propertiesByKind = {};

    entities.forEach(function (entity) {
      var kind = entity.key.path[1];
      var propertyName = entity.key.path[3];

      propertiesByKind[kind] = propertiesByKind[kind] || [];
      propertiesByKind[kind].push(propertyName);
    });
  });
  // [END property_run_query]

  this.datastore.runQuery(query, callback);
};

Metadata.prototype.testPropertyByKindRunQuery = function (callback) {
  var datastore = this.datastore;

  // jshint camelcase:false
  // [START property_by_kind_run_query]
  var ancestorKey = datastore.key(['__kind__', 'Task']);

  var query = datastore.createQuery('__property__')
    .hasAncestor(ancestorKey);

  datastore.runQuery(query, function (err, entities) {
    if (err) {
      // An error occurred while running the query.
      return;
    }

    var representationsByProperty = {};

    entities.forEach(function (entity) {
      var propertyName = entity.key.path.pop();
      var propertyType = entity.data.property_representation;

      representationsByProperty[propertyName] = propertyType;
    });
  });
  // [END property_by_kind_run_query]

  this.datastore.runQuery(query, callback);
};

function Query (projectId) {
  var options = {
    projectId: projectId
  };

  this.datastore = Datastore(options);

  this.basicQuery = this.getBasicQuery();
  this.projectionQuery = this.getProjectionQuery();
  this.ancestorQuery = this.getAncestorQuery();
}

Query.prototype.getBasicQuery = function () {
  var datastore = this.datastore;

  // [START basic_query]
  var query = datastore.createQuery('Task')
    .filter('done', '=', false)
    .filter('priority', '>=', 4)
    .order('priority', {
      descending: true
    });
  // [END basic_query]

  return query;
};

Query.prototype.getProjectionQuery = function () {
  var datastore = this.datastore;

  // [START projection_query]
  var query = datastore.createQuery('Task')
    .select(['priority', 'percent_complete']);
  // [END projection_query]

  return query;
};

Query.prototype.getAncestorQuery = function () {
  var datastore = this.datastore;

  // [START ancestor_query]
  var ancestorKey = datastore.key(['TaskList', 'default']);

  var query = datastore.createQuery('Task')
    .hasAncestor(ancestorKey);
  // [END ancestor_query]

  return query;
};

Query.prototype.testRunQuery = function (callback) {
  var query = this.basicQuery;

  // jshint unused:false
  // [START run_query]
  datastore.runQuery(query, function (err, tasks) {
    if (!err) {
      // Task entities found.
    }
  });
  // [END run_query]

  this.datastore.runQuery(query, callback);
};

Query.prototype.testPropertyFilter = function (callback) {
  var datastore = this.datastore;

  // [START property_filter]
  var query = datastore.createQuery('Task')
    .filter('done', '=', false);
  // [END property_filter]

  this.datastore.runQuery(query, callback);
};

Query.prototype.testCompositeFilter = function (callback) {
  var datastore = this.datastore;

  // [START composite_filter]
  var query = datastore.createQuery('Task')
    .filter('done', '=', false)
    .filter('priority', '=', 4);
  // [END composite_filter]

  this.datastore.runQuery(query, callback);
};

Query.prototype.testKeyFilter = function (callback) {
  var datastore = this.datastore;

  // [START key_filter]
  var query = datastore.createQuery('Task')
    .filter('__key__', '>', datastore.key(['Task', 'someTask']));
  // [END key_filter]

  this.datastore.runQuery(query, callback);
};

Query.prototype.testAscendingSort = function (callback) {
  var datastore = this.datastore;

  // [START ascending_sort]
  var query = datastore.createQuery('Task')
    .order('created');
  // [END ascending_sort]

  this.datastore.runQuery(query, callback);
};

Query.prototype.testDescendingSort = function (callback) {
  var datastore = this.datastore;

  // [START descending_sort]
  var query = datastore.createQuery('Task')
    .order('created', {
      descending: true
    });
  // [END descending_sort]

  this.datastore.runQuery(query, callback);
};

Query.prototype.testMultiSort = function (callback) {
  var datastore = this.datastore;

  // [START multi_sort]
  var query = datastore.createQuery('Task')
    .order('priority', {
      descending: true
    })
    .order('created');
  // [END multi_sort]

  this.datastore.runQuery(query, callback);
};

Query.prototype.testKindlessQuery = function (callback) {
  var datastore = this.datastore;
  var lastSeenKey = this.datastore.key(['Task', Date.now()]);

  // [START kindless_query]
  var query = datastore.createQuery()
    .filter('__key__', '>', lastSeenKey)
    .limit(1);
  // [END kindless_query]

  this.datastore.runQuery(query, callback);
};

Query.prototype.testRunQueryProjection = function (callback) {
  var self = this;
  var query = this.projectionQuery;

  // Overwrite the mock to actually run the query.
  datastore.runQuery = function (query, queryCallback) {
    // Restore the mock.
    datastore.runQuery = function () {};

    self.datastore.runQuery(query, function (err) {
      if (err) {
        return callback(err);
      }

      queryCallback.apply(null, arguments);

      if (priorities.length === 0 || percentCompletes.length === 0) {
        callback(new Error('Projection lists did not build up.'));
      } else {
        callback();
      }
    });
  };

  // jshint unused:false, camelcase:false
  // [START run_query_projection]
  var priorities = [];
  var percentCompletes = [];

  datastore.runQuery(query, function (err, tasks) {
    if (err) {
      // An error occurred while running the query.
      return;
    }

    tasks.forEach(function (task) {
      priorities.push(task.data.priority);
      percentCompletes.push(task.data.percent_complete);
    });
  });
  // [END run_query_projection]
};

Query.prototype.testKeysOnlyQuery = function (callback) {
  var datastore = this.datastore;

  // [START keys_only_query]
  var query = datastore.createQuery()
    .select('__key__')
    .limit(1);
  // [END keys_only_query]

  this.datastore.runQuery(query, callback);
};

Query.prototype.testDistinctQuery = function (callback) {
  var datastore = this.datastore;

  // [START distinct_query]
  var query = datastore.createQuery('Task')
    .groupBy(['category', 'priority'])
    .order('category')
    .order('priority');
  // [END distinct_query]

  this.datastore.runQuery(query, callback);
};

Query.prototype.testDistinctOnQuery = function (callback) {
  var datastore = this.datastore;

  // [START distinct_on_query]
  var query = datastore.createQuery('Task')
    .groupBy('category')
    .order('category')
    .order('priority');
  // [END distinct_on_query]

  this.datastore.runQuery(query, callback);
};

Query.prototype.testArrayValueInequalityRange = function (callback) {
  var datastore = this.datastore;

  // [START array_value_inequality_range]
  var query = datastore.createQuery('Task')
    .filter('tag', '>', 'learn')
    .filter('tag', '<', 'math');
  // [END array_value_inequality_range]

  this.datastore.runQuery(query, callback);
};

Query.prototype.testArrayValueEquality = function (callback) {
  var datastore = this.datastore;

  // [START array_value_equality]
  var query = datastore.createQuery('Task')
    .filter('tag', '=', 'fun')
    .filter('tag', '=', 'programming');
  // [END array_value_equality]

  this.datastore.runQuery(query, callback);
};

Query.prototype.testInequalityRange = function (callback) {
  var datastore = this.datastore;

  // [START inequality_range]
  var query = datastore.createQuery('Task')
    .filter('created', '>', new Date('1990-01-01T00:00:00z'))
    .filter('created', '<', new Date('2000-12-31T23:59:59z'));
  // [END inequality_range]

  this.datastore.runQuery(query, callback);
};

Query.prototype.testInequalityInvalid = function (callback) {
  var datastore = this.datastore;

  // [START inequality_invalid]
  var query = datastore.createQuery('Task')
    .filter('priority', '>', 3)
    .filter('created', '>', new Date('1990-01-01T00:00:00z'));
  // [END inequality_invalid]

  this.datastore.runQuery(query, callback);
};

Query.prototype.testEqualAndInequalityRange = function (callback) {
  var datastore = this.datastore;

  // [START equal_and_inequality_range]
  var query = datastore.createQuery('Task')
    .filter('priority', '=', 4)
    .filter('done', '=', false)
    .filter('created', '>', new Date('1990-01-01T00:00:00z'))
    .filter('created', '<', new Date('2000-12-31T23:59:59z'));
  // [END equal_and_inequality_range]

  this.datastore.runQuery(query, callback);
};

Query.prototype.testInequalitySort = function (callback) {
  var datastore = this.datastore;

  // [START inequality_sort]
  var query = datastore.createQuery('Task')
    .filter('priority', '>', 3)
    .order('priority')
    .order('created');
  // [END inequality_sort]

  this.datastore.runQuery(query, callback);
};

Query.prototype.testInequalitySortInvalidNotSame = function (callback) {
  var datastore = this.datastore;

  // [START inequality_sort_invalid_not_same]
  var query = datastore.createQuery('Task')
    .filter('priority', '>', 3)
    .order('created');
  // [END inequality_sort_invalid_not_same]

  this.datastore.runQuery(query, callback);
};

Query.prototype.testInequalitySortInvalidNotFirst = function (callback) {
  var datastore = this.datastore;

  // [START inequality_sort_invalid_not_first]
  var query = datastore.createQuery('Task')
    .filter('priority', '>', 3)
    .order('created')
    .order('priority');
  // [END inequality_sort_invalid_not_first]

  this.datastore.runQuery(query, callback);
};

Query.prototype.testLimit = function (callback) {
  var datastore = this.datastore;

  // [START limit]
  var query = datastore.createQuery('Task')
    .limit(5);
  // [END limit]

  this.datastore.runQuery(query, callback);
};

Query.prototype.testCursorPaging = function (callback) {
  var pageSize = 1;
  var pageCursor = '';

  datastore.createQuery = this.datastore.createQuery;

  // [START cursor_paging]
  // By default, gcloud-node will automatically paginate through all of the
  // results that match a query. However, this sample implements manual
  // pagination using limits and cursor tokens.
  var query = datastore.createQuery('Task')
    .limit(pageSize)
    .start(pageCursor);

  this.datastore.runQuery(query, function (err, results, info) {
    if (err) {
      // An error occurred while running the query.
      return;
    }

    var nextPageCursor;

    if (info.moreResults !== Datastore.NO_MORE_RESULTS) {
      // If there are more results to retrieve, the end cursor is
      // automatically set on `info`. To get this value directly, access
      // the `endCursor` property.
      nextPageCursor = info.endCursor;
    } else {
      // No more results exist.
    }
    console.log('nextPageCursor', nextPageCursor);
  });
  // [END cursor_paging]

  delete datastore.createQuery;
  this.datastore.runQuery(query, function (err, results, info) {
    if (err) {
      callback(err);
      return;
    }

    if (!info || !info.endCursor) {
      callback(new Error('An `info` with an `endCursor` is not present.'));
    } else {
      callback();
    }
  });
};

Query.prototype.testEventualConsistentQuery = function () {
  // [START eventual_consistent_query]
  // Read consistency cannot be specified in gcloud-node.
  // [END eventual_consistent_query]
};

// [START transactional_update]
function transferFunds (fromKey, toKey, amount, callback) {
  var transaction = datastore.transaction();

  transaction.run(function (err) {
    if (err) {
      return callback(err);
    }

    transaction.get([
      fromKey,
      toKey
    ], function (err, accounts) {
      if (err) {
        return transaction.rollback(function (_err) {
          return callback(_err || err);
        });
      }

      accounts[0].data.balance -= amount;
      accounts[1].data.balance += amount;

      transaction.save(accounts);

      transaction.commit(function (err) {
        if (err) {
          return callback(err);
        }

        // The transaction completed successfully.
        callback();
      });
    });
  });
}
// [END transactional_update]

function Transaction (projectId) {
  var options = {
    projectId: projectId
  };

  this.datastore = Datastore(options);

  this.fromKey = this.datastore.key(['Bank', 1, 'Account', 1]);
  this.toKey = this.datastore.key(['Bank', 1, 'Account', 2]);

  this.originalBalance = 100;
  this.amountToTransfer = 10;
}

Transaction.prototype.restoreBankAccountBalances = function (config, callback) {
  var saveArray = config.keys.map(function (key) {
    return {
      key: key,
      data: {
        balance: config.balance
      }
    };
  });

  this.datastore.save(saveArray, callback);
};

Transaction.prototype.testTransactionalUpdate = function (callback) {
  var self = this;

  var fromKey = this.fromKey;
  var toKey = this.toKey;
  var originalBalance = this.originalBalance;
  var amountToTransfer = this.amountToTransfer;

  this.restoreBankAccountBalances({
    keys: [fromKey, toKey],
    balance: originalBalance
  }, function (err) {
    if (err) {
      callback(err);
      return;
    }

    // Overwrite so the real Datastore instance is used in `transferFunds`.
    var datastoreMock = datastore;
    datastore = self.datastore;

    transferFunds(fromKey, toKey, amountToTransfer, function (err) {
      // Restore `datastore` to the mock API.
      datastore = datastoreMock;

      if (err) {
        callback(err);
        return;
      }

      self.datastore.get([
        fromKey,
        toKey
      ], function (err, accounts) {
        if (err) {
          callback(err);
          return;
        }

        var transactionWasSuccessful =
          accounts[0].data.balance === originalBalance - amountToTransfer &&
          accounts[1].data.balance === originalBalance + amountToTransfer;

        if (!transactionWasSuccessful) {
          callback(new Error('Accounts were not updated successfully.'));
        } else {
          callback();
        }
      });
    });
  });
};

Transaction.prototype.testTransactionalRetry = function (callback) {
  // Overwrite so the real Datastore instance is used in `transferFunds`.
  var datastoreMock = datastore;
  datastore = this.datastore;

  var originalCallback = callback;
  callback = function () {
    // Restore `datastore` to the mock API.
    datastore = datastoreMock;
    originalCallback.apply(null, arguments);
  };

  var fromKey = this.fromKey;
  var toKey = this.toKey;

  this.restoreBankAccountBalances({
    keys: [fromKey, toKey],
    balance: this.originalBalance
  }, function (err) {
    if (err) {
      callback(err);
      return;
    }

    // [START transactional_retry]
    var async = require('async');

    function attemptTransfer (callback) {
      transferFunds(fromKey, toKey, 10, callback);
    }

    async.retry(5, attemptTransfer, callback);
    // [END transactional_retry]
  });
};

Transaction.prototype.testTransactionalGetOrCreate = function (callback) {
  var taskKey = this.datastore.key(['Task', Date.now()]);

  // Overwrite so the real Datastore instance is used in `transferFunds`.
  var datastoreMock = datastore;
  datastore = this.datastore;

  var originalCallback = callback;
  callback = function () {
    // Restore `datastore` to the mock API.
    datastore = datastoreMock;
    originalCallback.apply(null, arguments);
  };

  // [START transactional_get_or_create]
  function getOrCreate (taskKey, taskData, callback) {
    var taskEntity = {
      key: taskKey,
      data: taskData
    };

    var transaction = datastore.transaction();

    transaction.run(function (err) {
      if (err) {
        return callback(err);
      }

      transaction.get(taskKey, function (err, task) {
        if (err) {
          // An error occurred while getting the values.
          return transaction.rollback(function (_err) {
            return callback(_err || err);
          });
        }

        if (task) {
          // The task entity already exists.
          transaction.rollback(callback);
        } else {
          // Create the task entity.
          transaction.save(taskEntity);
          transaction.commit(function (err) {
            if (err) {
              return callback(err);
            }
            // The transaction completed successfully.
            callback(null, taskEntity);
          });
        }
      });
    });
  }
  // [END transactional_get_or_create]

  asyncUtil.series([
    // Create:
    testWithCreateBehavior,
    // Then try to get it:
    testWithGetBehavior
  ], callback);

  function testWithCreateBehavior (callback) {
    getOrCreate(taskKey, {}, function (err, task) {
      if (err) {
        callback(err);
        return;
      }

      if (!task) {
        return callback(new Error('Entity was not created successfully.'));
      }
      callback();
    });
  }

  function testWithGetBehavior (callback) {
    getOrCreate(taskKey, {}, function (err, task) {
      if (err) {
        callback(err);
        return;
      }

      if (!task) {
        return callback(new Error('Entity was not retrieved successfully.'));
      }
      callback();
    });
  }
};

Transaction.prototype.testSingleEntityGroupReadOnly = function (callback) {
  // Overwrite so the real Datastore instance is used in `transferFunds`.
  var datastoreMock = datastore;
  datastore = this.datastore;

  var originalCallback = callback;
  callback = function () {
    // Restore `datastore` to the mock API.
    datastore = datastoreMock;
    originalCallback.apply(null, arguments);
  };

  // [START transactional_single_entity_group_read_only]
  function getTaskListEntities (callback) {
    var taskListEntities;

    var transaction = datastore.transaction();

    transaction.run(function (err) {
      if (err) {
        return callback(err);
      }

      var taskListKey = datastore.key(['TaskList', 'default']);

      datastore.get(taskListKey, function (err) {
        if (err) {
          return transaction.rollback(function (_err) {
            return callback(_err || err);
          });
        }

        var query = datastore.createQuery('Task')
          .hasAncestor(taskListKey);

        datastore.runQuery(query, function (err, entities) {
          if (err) {
            // An error occurred while running the query.
            return transaction.rollback(function (_err) {
              return callback(_err || err);
            });
          }

          taskListEntities = entities;
          transaction.commit(function (err) {
            if (err) {
              return callback(err);
            }

            // The transaction completed successfully.
            callback(null, taskListEntities);
          });
        });
      });
    });
  }
  // [END transactional_single_entity_group_read_only]

  getTaskListEntities(function (err, entities) {
    if (err) {
      callback(err);
      return;
    }

    if (!entities) {
      return callback(new Error('Entities were not retrieved successfully.'));
    }
    callback();
  });
};
