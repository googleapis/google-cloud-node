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

'use strict';

var assert = require('assert');
var async = require('async');
var Subscription = require('../src/subscription.js');
var uuid = require('uuid');

var env = require('../../../system-test/env.js');
var pubsub = require('../')(env);

describe('pubsub', function() {
  var TOPIC_NAMES = [
    generateTopicName(),
    generateTopicName(),
    generateTopicName()
  ];

  var TOPICS = [
    pubsub.topic(TOPIC_NAMES[0]),
    pubsub.topic(TOPIC_NAMES[1]),
    pubsub.topic(TOPIC_NAMES[2])
  ];

  var TOPIC_FULL_NAMES = [
    TOPICS[0].name,
    TOPICS[1].name,
    TOPICS[2].name
  ];

  function generateSnapshotName() {
    return 'test-snapshot-' + uuid.v4();
  }

  function generateSubName() {
    return 'test-subscription-' + uuid.v4();
  }

  function generateTopicName() {
    return 'test-topic-' + uuid.v4();
  }

  function publishPop(message, options, callback) {
    if (!callback) {
      callback = options;
      options = {};
    }

    options = options || {};

    var topic = pubsub.topic(generateTopicName());
    var publisher = topic.publisher();
    var subscription = topic.subscription(generateSubName());

    async.series([
      topic.create.bind(topic),
      subscription.create.bind(subscription),
      function(callback) {
        async.times(6, function(_, callback) {
          publisher.publish(new Buffer(message), options, callback);
        }, callback);
      }
    ], function(err) {
      if (err) {
        callback(err);
        return;
      }

      subscription.on('error', callback);

      subscription.once('message', function(message) {
        callback(null, message);
      });
    });
  }

  before(function(done) {
    // create all needed topics
    async.each(TOPICS, function(topic, cb) {
      topic.create(cb);
    }, function(err) {
      if (err) {
        done(err);
        return;
      }

      setTimeout(done, 5000);
    });
  });

  after(function(done) {
    // Delete topics
    async.each(TOPICS, function(topic, callback) {
      topic.delete(callback);
    }, done);
  });

  describe('Topic', function() {
    it('should be listed', function(done) {
      pubsub.getTopics(function(err, topics) {
        assert.ifError(err);

        var results = topics.filter(function(topic) {
          return TOPIC_FULL_NAMES.indexOf(topic.name) !== -1;
        });

        // get all topics in list of known names
        assert.equal(results.length, TOPIC_NAMES.length);
        done();
      });
    });

    it('should list topics in a stream', function(done) {
      var topicsEmitted = [];

      pubsub.getTopicsStream()
        .on('error', done)
        .on('data', function(topic) {
          topicsEmitted.push(topic);
        })
        .on('end', function() {
          var results = topicsEmitted.filter(function(topic) {
            return TOPIC_FULL_NAMES.indexOf(topic.name) !== -1;
          });

          assert.equal(results.length, TOPIC_NAMES.length);
          done();
        });
    });

    it('should allow manual paging', function(done) {
      pubsub.getTopics({
        pageSize: TOPIC_NAMES.length - 1,
        gaxOpts: { autoPaginate: false }
      }, function(err, topics) {
        assert.ifError(err);
        assert(topics.length, TOPIC_NAMES.length - 1);
        done();
      });
    });

    it('should be created and deleted', function(done) {
      var TOPIC_NAME = generateTopicName();
      pubsub.createTopic(TOPIC_NAME, function(err) {
        assert.ifError(err);
        pubsub.topic(TOPIC_NAME).delete(done);
      });
    });

    it('should honor the autoCreate option', function(done) {
      var topic = pubsub.topic(generateTopicName());

      topic.get({ autoCreate: true }, done);
    });

    it('should confirm if a topic exists', function(done) {
      var topic = pubsub.topic(TOPIC_NAMES[0]);

      topic.exists(function(err, exists) {
        assert.ifError(err);
        assert.strictEqual(exists, true);
        done();
      });
    });

    it('should confirm if a topic does not exist', function(done) {
      var topic = pubsub.topic('should-not-exist');

      topic.exists(function(err, exists) {
        assert.ifError(err);
        assert.strictEqual(exists, false);
        done();
      });
    });

    it('should publish a message', function(done) {
      var topic = pubsub.topic(TOPIC_NAMES[0]);
      var publisher = topic.publisher();
      var message = new Buffer('message from me');

      publisher.publish(message, function(err, messageId) {
        assert.ifError(err);
        assert.strictEqual(typeof messageId, 'string');
        done();
      });
    });

    it('should publish a message with attributes', function(done) {
      var data = new Buffer('raw message data');
      var attrs = {
        customAttribute: 'value'
      };

      publishPop(data, attrs, function(err, message) {
        assert.ifError(err);

        assert.deepEqual(message.data, data);
        assert.deepEqual(message.attributes, attrs);

        done();
      });
    });

    it('should get the metadata of a topic', function(done) {
      var topic = pubsub.topic(TOPIC_NAMES[0]);
      topic.getMetadata(function(err, metadata) {
        assert.ifError(err);
        assert.strictEqual(metadata.name, topic.name);
        done();
      });
    });
  });

  describe('Subscription', function() {
    var TOPIC_NAME = generateTopicName();
    var topic = pubsub.topic(TOPIC_NAME);
    var publisher = topic.publisher();

    var SUB_NAMES = [
      generateSubName(),
      generateSubName()
    ];

    var SUBSCRIPTIONS = [
      topic.subscription(SUB_NAMES[0], { ackDeadline: 30000 }),
      topic.subscription(SUB_NAMES[1], { ackDeadline: 60000 })
    ];

    before(function(done) {
      topic.create(function(err) {
        assert.ifError(err);

        function createSubscription(subscription, callback) {
          subscription.create(callback);
        }

        async.each(SUBSCRIPTIONS, createSubscription, function(err) {
          if (err) {
            done(err);
            return;
          }

          async.times(10, function(_, next) {
            publisher.publish(new Buffer('hello'), next);
          }, function(err) {
            if (err) {
              done(err);
              return;
            }

            // Consistency delay for subscriptions to be returned via
            // `topic.getSubscriptions`.
            setTimeout(done, 2500);
          });
        });
      });
    });

    after(function(done) {
      // Delete subscriptions
      async.each(SUBSCRIPTIONS, function(sub, callback) {
        sub.delete(callback);
      }, function(err) {
        assert.ifError(err);
        topic.delete(done);
      });
    });

    it('should list all subscriptions registered to the topic', function(done) {
      topic.getSubscriptions(function(err, subs) {
        assert.ifError(err);
        assert.equal(subs.length, SUBSCRIPTIONS.length);
        assert(subs[0] instanceof Subscription);
        done();
      });
    });

    it('should list all topic subscriptions as a stream', function(done) {
      var subscriptionsEmitted = [];

      topic.getSubscriptionsStream()
        .on('error', done)
        .on('data', function(subscription) {
          subscriptionsEmitted.push(subscription);
        })
        .on('end', function() {
          assert.equal(subscriptionsEmitted.length, SUBSCRIPTIONS.length);
          done();
        });
    });

    it('should list all subscriptions regardless of topic', function(done) {
      pubsub.getSubscriptions(function(err, subscriptions) {
        assert.ifError(err);
        assert(subscriptions instanceof Array);
        done();
      });
    });

    it('should list all subscriptions as a stream', function(done) {
      var subscriptionEmitted = false;

      pubsub.getSubscriptionsStream()
        .on('error', done)
        .on('data', function(subscription) {
          subscriptionEmitted = subscription instanceof Subscription;
        })
        .on('end', function() {
          assert.strictEqual(subscriptionEmitted, true);
          done();
        });
    });

    it('should allow creation and deletion of a subscription', function(done) {
      var subName = generateSubName();
      topic.createSubscription(subName, function(err, sub) {
        assert.ifError(err);
        assert(sub instanceof Subscription);
        sub.delete(done);
      });
    });

    it('should honor the autoCreate option', function(done) {
      var sub = topic.subscription(generateSubName());

      sub.get({ autoCreate: true }, done);
    });

    it('should confirm if a sub exists', function(done) {
      var sub = topic.subscription(SUB_NAMES[0]);

      sub.exists(function(err, exists) {
        assert.ifError(err);
        assert.strictEqual(exists, true);
        done();
      });
    });

    it('should confirm if a sub does not exist', function(done) {
      var sub = topic.subscription('should-not-exist');

      sub.exists(function(err, exists) {
        assert.ifError(err);
        assert.strictEqual(exists, false);
        done();
      });
    });

    it('should create a subscription with message retention', function(done) {
      var subName = generateSubName();
      var threeDaysInSeconds = 3 * 24 * 60 * 60;

      topic.createSubscription(subName, {
        messageRetentionDuration: threeDaysInSeconds
      }, function(err, sub) {
        assert.ifError(err);

        sub.getMetadata(function(err, metadata) {
          assert.ifError(err);

          assert.strictEqual(metadata.retainAckedMessages, true);
          assert.strictEqual(
            parseInt(metadata.messageRetentionDuration.seconds, 10),
            threeDaysInSeconds
          );
          assert.strictEqual(
            parseInt(metadata.messageRetentionDuration.nanos, 10),
            0
          );

          sub.delete(done);
        });
      });
    });

    it('should set metadata for a subscription', function() {
      var subscription = topic.subscription(generateSubName());
      var threeDaysInSeconds = 3 * 24 * 60 * 60;

      return subscription.create()
        .then(function() {
          return subscription.setMetadata({
            messageRetentionDuration: threeDaysInSeconds
          });
        })
        .then(function() {
          return subscription.getMetadata();
        })
        .then(function(data) {
          var metadata = data[0];

          assert.strictEqual(metadata.retainAckedMessages, true);
          assert.strictEqual(
            parseInt(metadata.messageRetentionDuration.seconds, 10),
            threeDaysInSeconds
          );
          assert.strictEqual(
            parseInt(metadata.messageRetentionDuration.nanos, 10),
            0
          );
        });
    });

    it('should re-use an existing subscription', function(done) {
      pubsub.createSubscription(topic, SUB_NAMES[0], done);
    });

    it('should error when using a non-existent subscription', function(done) {
      var subscription = topic.subscription(generateSubName(), {
        maxConnections: 1
      });

      subscription.once('error', function(err) {
        assert.strictEqual(err.code, 5);
        subscription.close(done);
      });

      subscription.on('message', function() {
        done(new Error('Should not have been called.'));
      });
    });

    it('should receive the published messages', function(done) {
      var messageCount = 0;
      var subscription = topic.subscription(SUB_NAMES[1]);

      subscription.on('error', done);

      subscription.on('message', function(message) {
        assert.deepEqual(message.data, new Buffer('hello'));

        if (++messageCount === 10) {
          subscription.close(done);
        }
      });
    });

    it('should ack the message', function(done) {
      var subscription = topic.subscription(SUB_NAMES[1]);

      subscription.on('error', done);
      subscription.on('message', ack);

      function ack(message) {
        // remove listener to we only ack first message
        subscription.removeListener('message', ack);

        message.ack();
        setTimeout(() => subscription.close(done), 2500);
      }
    });

    it('should nack the message', function(done) {
      var subscription = topic.subscription(SUB_NAMES[1]);

      subscription.on('error', done);
      subscription.on('message', nack);

      function nack(message) {
        // remove listener to we only ack first message
        subscription.removeListener('message', nack);

        message.nack();
        setTimeout(() => subscription.close(done), 2500);
      }
    });

    it('should respect flow control limits', function(done) {
      var maxMessages = 3;
      var messageCount = 0;

      var subscription = topic.subscription(SUB_NAMES[0], {
        flowControl: {
          maxMessages: maxMessages
        }
      });

      subscription.on('error', done);
      subscription.on('message', onMessage);

      function onMessage() {
        if (++messageCount < maxMessages) {
          return;
        }

        setImmediate(function() {
          subscription.close(done);
        });
      }
    });
  });

  describe('IAM', function() {
    it('should get a policy', function(done) {
      var topic = pubsub.topic(TOPIC_NAMES[0]);

      topic.iam.getPolicy(function(err, policy) {
        assert.ifError(err);

        assert.deepEqual(policy.bindings, []);
        assert.strictEqual(policy.version, 0);

        done();
      });
    });

    it('should set a policy', function(done) {
      var topic = pubsub.topic(TOPIC_NAMES[0]);
      var policy = {
        bindings: [{
          role: 'roles/pubsub.publisher',
          members: ['serviceAccount:gmail-api-push@system.gserviceaccount.com']
        }]
      };

      topic.iam.setPolicy(policy, function(err, newPolicy) {
        assert.ifError(err);
        assert.deepEqual(newPolicy.bindings, policy.bindings);
        done();
      });
    });

    it('should test the iam permissions', function(done) {
      var topic = pubsub.topic(TOPIC_NAMES[0]);
      var testPermissions = [
        'pubsub.topics.get',
        'pubsub.topics.update'
      ];

      topic.iam.testPermissions(testPermissions, function(err, permissions) {
        assert.ifError(err);
        assert.deepEqual(permissions, {
          'pubsub.topics.get': true,
          'pubsub.topics.update': true
        });
        done();
      });
    });
  });

  describe('Snapshot', function() {
    var SNAPSHOT_NAME = generateSnapshotName();

    var topic;
    var publisher;
    var subscription;
    var snapshot;

    function deleteAllSnapshots() {
      return pubsub.getSnapshots().then(function(data) {
        return Promise.all(data[0].map(function(snapshot) {
          return snapshot.delete();
        }));
      });
    }

    function wait(milliseconds) {
      return function() {
        return new Promise(function(resolve) {
          setTimeout(resolve, milliseconds);
        });
      };
    }

    before(function() {
      topic = pubsub.topic(TOPIC_NAMES[0]);
      publisher = topic.publisher();
      subscription = topic.subscription(generateSubName());
      snapshot = subscription.snapshot(SNAPSHOT_NAME);

      return deleteAllSnapshots()
        .then(wait(2500))
        .then(subscription.create.bind(subscription))
        .then(wait(2500))
        .then(snapshot.create.bind(snapshot))
        .then(wait(2500));
    });

    after(function() {
      return deleteAllSnapshots();
    });

    it('should get a list of snapshots', function(done) {
      pubsub.getSnapshots(function(err, snapshots) {
        assert.ifError(err);
        assert.strictEqual(snapshots.length, 1);
        assert.strictEqual(snapshots[0].name.split('/').pop(), SNAPSHOT_NAME);
        done();
      });
    });

    it('should get a list of snapshots as a stream', function(done) {
      var snapshots = [];

      pubsub.getSnapshotsStream()
        .on('error', done)
        .on('data', function(snapshot) {
          snapshots.push(snapshot);
        })
        .on('end', function() {
          assert.strictEqual(snapshots.length, 1);
          assert.strictEqual(snapshots[0].name.split('/').pop(), SNAPSHOT_NAME);
          done();
        });
    });

    describe('seeking', function() {
      var subscription;
      var messageId;

      beforeEach(function() {
        subscription = topic.subscription(generateSubName());

        return subscription.create().then(function() {
          return publisher.publish(new Buffer('Hello, world!'));
        }).then(function(_messageId) {
          messageId = _messageId;
        });
      });

      it('should seek to a snapshot', function(done) {
        var snapshotName = generateSnapshotName();

        subscription.createSnapshot(snapshotName, function(err, snapshot) {
          assert.ifError(err);

          var messageCount = 0;

          subscription.on('error', done);
          subscription.on('message', function(message) {
            if (message.id !== messageId) {
              return;
            }

            message.ack();

            if (++messageCount === 1) {
              snapshot.seek(function(err) {
                assert.ifError(err);
              });
              return;
            }

            assert.strictEqual(messageCount, 2);
            subscription.close(done);
          });
        });
      });

      it('should seek to a date', function(done) {
        var messageCount = 0;

        subscription.on('error', done);
        subscription.on('message', function(message) {
          if (message.id !== messageId) {
            return;
          }

          message.ack();

          if (++messageCount === 1) {
            subscription.seek(message.publishTime, function(err) {
              assert.ifError(err);
            });
            return;
          }

          assert.strictEqual(messageCount, 2);
          subscription.close(done);
        });
      });
    });
  });
});
