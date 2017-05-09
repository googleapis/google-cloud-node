/*!
 * Copyright 2016 Google Inc. All Rights Reserved.
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

/*!
 * @module spanner/sessionPool
 */

'use strict';

var events = require('events');
var exec = require('methmeth');
var extend = require('extend');
var genericPool = require('generic-pool');
var is = require('is');
var streamEvents = require('stream-events');
var through = require('through2');
var util = require('util');

/**
 * @constructor
 * @alias module:spanner/sessionPool
 *
 * @param {module:spanner/database} database - The DB instance.
 * @param {object=} options - Configuration options.
 * @param {number} options.acquireTimeout - Time in milliseconds before giving
 *     up trying to acquire a session. If the specified value is `0`, a timeout
 *     will not occur. (Default: `0`)
 * @param {boolean} options.fail - If set to true, an error will be thrown when
 *     there are no available sessions for a request. (Default: `false`)
 * @param {number} options.max - Maximum number of resources to create at any
 *     given time. (Default: 100)
 * @param {number} options.maxIdle - Maximum number of idle resources to keep
 *     in the pool at any given time.
 * @param {number} options.min - Minimum number of resources to keep in the pool
 *     at any given time. (Default: `0`)
 * @param {number} options.keepAlive - How often to ping idle sessions, in
 *     minutes. Must be less than 1 hour.
 * @param {number} options.writes - Pre-allocate transactions for the number of
 *     sessions specified.
 */
function SessionPool(database, options) {
  var self = this;

  events.EventEmitter.call(this);

  options = options || {};

  this.database = database;
  this.maxIdle = options.maxIdle || 1;
  this.fail = !!options.fail;

  this.pendingAcquires = [];
  this.acquireTimeout = options.acquireTimeout || 0;

  var poolOptions = SessionPool.getPoolOptions_(options);
  var writePoolOptions;

  if (options.writes) {
    writePoolOptions = extend({}, poolOptions, {
      max: options.writes,
      min: Math.ceil(poolOptions.min / 2)
    });

    poolOptions.max -= options.writes;
    poolOptions.min = Math.floor(poolOptions.min / 2);

    this.writePool = SessionPool.createPool_(writePoolOptions, {
      create: function() {
        return self.createWriteSession_.apply(self, arguments);
      },
      destroy: function(transaction) {
        return transaction.session.delete();
      },
      validate: SessionPool.isSessionActive_
    });
  }

  this.pool = SessionPool.createPool_(poolOptions, {
    create: function() {
      return self.createSession_.apply(self, arguments);
    },
    destroy: exec('delete'),
    validate: SessionPool.isSessionActive_
  });

  Object.defineProperty(this, 'available', {
    get: function() {
      var availableReads = this.pool.available;
      var availableWrites = this.writePool && this.writePool.available || 0;

      return availableReads + availableWrites;
    }
  });
}

util.inherits(SessionPool, events.EventEmitter);

/**
 * A convenience method to create `genericPool`s.
 *
 * @private
 *
 * @param {object} poolOptions - genericPool options.
 * @param {object} factory - genericPool factory.
 * @return {Pool}
 */
SessionPool.createPool_ = function(poolOptions, factory) {
  var pool = new genericPool.Pool(
    SessionEvictor,
    genericPool.Deque,
    genericPool.PriorityQueue,
    factory,
    poolOptions
  );

  Object.defineProperty(pool, 'free', {
    get: function() {
      return pool.max - pool.borrowed;
    }
  });

  return pool;
};

/**
 * Build `genericPool` options from the user's options.
 *
 * @private
 *
 * @param {object} userOptions - The user's options.
 * @return {object} poolOptions
 */
SessionPool.getPoolOptions_ = function(userOptions) {
  var poolOptions = {
    idleTimeoutMillis: 59 * 60000,
    testOnBorrow: true,
    max: userOptions.max || 100,
    min: userOptions.min || 0,
    numTestsPerRun: Number.MAX_SAFE_INTEGER
  };

  poolOptions.numTestsPerRun = poolOptions.max;

  if (userOptions.fail) {
    poolOptions.maxWaitingClients = 0;
  }

  if (userOptions.keepAlive) {
    poolOptions.idleTimeoutMillis = userOptions.keepAlive * 60000;
    poolOptions.evictionRunIntervalMillis = poolOptions.idleTimeoutMillis;
  }

  return poolOptions;
};

/**
 * This method is used by `genericPool` to know if a session has been evicted.
 *
 * @private
 *
 * @param {module:spanner/session} session - The session to check.
 * @return {promise}
 */
SessionPool.isSessionActive_ = function(session) {
  // `evicted_` is set by `SessionEvictor`
  return Promise.resolve(!session.evicted_);
};

/**
 * Destroys all sessions within the pool.
 *
 * @return {promise}
 */
SessionPool.prototype.clear = function() {
  var self = this;

  var readClear = this.pool.drain().then(function() {
    return self.pool.clear();
  });

  if (!this.writePool) {
    return readClear;
  }

  return readClear.then(function() {
    return self.writePool.drain();
  }).then(function() {
    return self.writePool.clear();
  });
};

/**
 * Retrieve a read session.
 *
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error occured trying to retrieve the
 *     session.
 * @param {module:spanner/session} callback.session - The session object.
 */
SessionPool.prototype.getSession = function(callback) {
  var pool = this.pool;

  if (!pool.free) {
    this.getNextAvailableSession_(callback);
    return;
  }

  pool.acquire()
    .then(function(session) {
      // because of the way generic-pool handles creation errors, we need to
      // resolve our create calls with any errors that occur. That being said,
      // it is possible that this instance of `session` will actually be an
      // error of some kind.
      // re: https://github.com/coopernurse/node-pool/issues/175
      if (session instanceof Error) {
        pool.destroy(session);
        callback(session);
        return;
      }

      callback(null, session);
    }, callback);
};

/**
 * Retrieve the write session.
 *
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error occured trying to retrieve the
 *     session.
 * @param {module:spanner/session} callback.session - The session object.
 * @param {module:spanner/transaction} callback.transaction - The transaction
 *     object.
 */
SessionPool.prototype.getWriteSession = function(callback) {
  var pool = this.writePool;

  if (!pool || !pool.free) {
    this.getNextAvailableSession_({
      write: true
    }, callback);
    return;
  }

  pool.acquire()
    .then(function(session) {
      // because of the way generic-pool handles creation errors, we need to
      // resolve our create calls with any errors that occur. That being said,
      // it is possible that this instance of `session` will actually be an
      // error of some kind.
      // re: https://github.com/coopernurse/node-pool/issues/175
      if (session instanceof Error) {
        pool.destroy(session);
        callback(session);
        return;
      }

      callback(null, session, session.transaction_);
    })
    .then(null, callback);
};

/**
 * Release a session back into the pool.
 *
 * @param {module:spanner/session} session - The session to be released.
 */
SessionPool.prototype.release = function(session) {
  if (this.available >= this.maxIdle) {
    var pool = session.isWriteSession_ ? this.writePool : this.pool;
    return pool.destroy(session);
  }

  if (session.isWriteSession_) {
    return this.releaseWriteSession_(session);
  }

  return this.pool.release(session);
};

/**
 * Make an API request, first assuring an active session is used.
 */
SessionPool.prototype.request = function(config, callback) {
  if (global.GCLOUD_SANDBOX_ENV) {
    return;
  }

  var self = this;

  this.getSession(function(err, session) {
    if (err) {
      callback(err);
      return;
    }

    config.reqOpts.session = session.formattedName_;

    config.method(config.reqOpts, function() {
      self.release(session);
      callback.apply(null, arguments);
    });
  });
};

/**
 * Make an API request as a stream, first assuring an active session is used.
 */
SessionPool.prototype.requestStream = function(config) {
  if (global.GCLOUD_SANDBOX_ENV) {
    return through.obj();
  }

  var self = this;

  var requestStream;
  var session;

  var waitForSessionStream = streamEvents(through.obj());
  waitForSessionStream.abort = function() {
    releaseSession();

    if (requestStream) {
      requestStream.cancel();
    }
  };

  function releaseSession() {
    if (session) {
      self.release(session);
      session = null;
    }
  }

  waitForSessionStream.on('reading', function() {
    self.getSession(function(err, session_) {
      if (err) {
        waitForSessionStream.destroy(err);
        return;
      }

      session = session_;

      config.reqOpts.session = session_.formattedName_;

      requestStream = config.method(config.reqOpts);

      requestStream
        .on('error', releaseSession)
        .on('error', function(err) {
          waitForSessionStream.destroy(err);
        })
        .on('end', releaseSession)
        .pipe(waitForSessionStream);
    });
  });

  return waitForSessionStream;
};

/**
 * Create a session.
 *
 * @private
 *
 * @return {Promise} - Resolves to {module:spanner/session}.
 */
SessionPool.prototype.createSession_ = function() {
  var session = this.database.session_();

  return session.create().then(function() {
    return session;
  }, function(err) {
    return err;
  });
};

/**
 * Creates a Transaction, stubs a destroy method to return the transaction
 * back into the pool.
 *
 * @private
 *
 * @return {module:spanner/transaction}
 */
SessionPool.prototype.createTransaction_ = function(session, options) {
  var self = this;

  var transaction = session.transaction(options);
  var end = transaction.end.bind(transaction);

  transaction.end = function() {
    self.release(session);
    end();
  };

  return transaction;
};

/**
 * Create a session, then begin a new transaction.
 *
 * @private
 *
 * @return {Promise} - Resolves to {module:spanner/session}.
 */
SessionPool.prototype.createWriteSession_ = function() {
  var self = this;

  return this.createSession_().then(function(session) {
    if (session instanceof Error) {
      return Promise.resolve(session);
    }

    var transaction = self.createTransaction_(session);

    session.isWriteSession_ = true;
    session.transaction_ = transaction;

    return transaction.begin().then(function() {
      return session;
    });
  });
};

/**
 * Attempt to retrieve the next available session. If a write request is made,
 * but no write sessions are available, it will get a read session and begin a
 * new transaction.
 *
 * @private
 *
 * @param {object=} options - Session type options.
 * @param {boolean} options.write - Whether or not the requested session is a
 *     write session.
 * @param {function} callback - The callback function.
 */
SessionPool.prototype.getNextAvailableSession_ = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  // Write sessions can be used for reads and writes.
  if (this.writePool && this.writePool.free) {
    this.getWriteSession(callback);
    return;
  }

  // Use a read session by calling begin transaction on it.
  if (options.write && this.pool.free) {
    this.getSession(function(err, session) {
      if (err) {
        callback(err);
        return;
      }

      var transaction = self.createTransaction_(session);

      transaction.begin(function(err) {
        if (err) {
          callback(err);
          return;
        }

        callback(null, session, transaction);
      });
    });
    return;
  }

  // Use a regular read session.
  if (this.pool.free) {
    this.getSession(callback);
    return;
  }

  // If we should be failing, let's fail.
  if (this.fail) {
    setImmediate(function() {
      callback(new Error('No sessions available.'));
    });
    return;
  }

  this.pollForSession_(callback);
};

/**
 * Polls pools for first available session.
 *
 * @private
 *
 * @param {function} callback - The callback function to be executed when a
 *     session is available.
 */
SessionPool.prototype.pollForSession_ = function(callback) {
  this.pendingAcquires.push({
    callback: callback,
    timeout: this.acquireTimeout
  });

  if (this.acquireIntervalId) {
    return;
  }

  var self = this;
  var intervalSpeed = 30000;

  this.acquireIntervalId = setInterval(checkForSession, intervalSpeed);

  function checkForSession() {
    var hasFreeSession = self.pool.free ||
      self.writePool && self.writePool.free;

    if (hasFreeSession) {
      self.getNextAvailableSession_(self.pendingAcquires.shift().callback);
    }

    if (!self.pendingAcquires.length) {
      clearInterval(self.acquireIntervalId);
      self.acquireIntervalId = null;
    } else if (self.acquireTimeout) {
      var err = new Error('Unable to acquire Session, timeout occurred.');
      var acquire;

      for (var i = self.pendingAcquires.length - 1; i > -1; i--) {
        acquire = self.pendingAcquires[i];
        acquire.timeout -= intervalSpeed;

        if (acquire.timeout < 0) {
          self.pendingAcquires.splice(i, 1);
          acquire.callback(err);
        }
      }
    }
  }
};

/**
 * Release a write session. This will also begin a new transaction before
 * returning it to the pool.
 *
 * @private
 *
 * @param {module:spanner/session} session - The session to be released.
 * @return {Promise}
 */
SessionPool.prototype.releaseWriteSession_ = function(session) {
  var self = this;
  var transaction = self.createTransaction_(session);

  return transaction.begin()
    .then(function() {
      session.transaction_ = transaction;
      return self.writePool.release(session);
    })
    .then(null, function() {
      return self.writePool.destroy(session);
    });
};

/**
 * Check if a session is dead.
 *
 * @private
 *
 * @param {Pool} pool - genericPool instance.
 */
function SessionEvictor(pool) {
  this.pool = pool;
  this.evictor = new genericPool.DefaultEvictor();
}

/**
 * Check if the ping interval has been met. If so, attempt to run a dummy query.
 * If the query fails, we'll consider the session dead.
 *
 * @return {boolean}
 */
SessionEvictor.prototype.evict = function(config, resource, available) {
  var session = resource.obj;

  if (session.evicted_) {
    return true;
  }

  var needsKeepAlive = this.evictor.evict(config, resource, available);

  if (needsKeepAlive) {
    session.keepAlive(function(err) {
      session.evicted_ = !!err;
    });
  }

  return false;
};

module.exports = SessionPool;
module.exports.SessionEvictor = SessionEvictor;
