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

var crypto = require('crypto');
var fs = require('fs');
var path = require('path');
var EventEmitter = require('events').EventEmitter;
var extend = require('extend');
var util = require('util');
var semver = require('semver');
var _ = require('lodash');
var metadata = require('gcp-metadata');
var common = require('@google-cloud/common');

var v8debugapi = require('./v8debugapi.js');
var Debuggee = require('../debuggee.js');
var DebugletApi = require('../controller.js');
var defaultConfig = require('./config.js');
var scanner = require('./scanner.js');
var StatusMessage = require('../status-message.js');
var SourceMapper = require('./sourcemapper.js');
var pjson = require('../../package.json');

var assert = require('assert');

var NODE_VERSION_MESSAGE = 'Node.js version not supported. Node.js 5.2.0 and ' +
  ' versions older than 0.12 are not supported.';
var BREAKPOINT_ACTION_MESSAGE = 'The only currently supported breakpoint actions' +
  ' are CAPTURE and LOG.';

/**
 * Formats a breakpoint object prefixed with a provided message as a string
 * intended for logging.
 * @param {string} msg The message that prefixes the formatted breakpoint.
 * @param {Breakpoint} breakpoint The breakpoint to format.
 * @return {string} A formatted string.
 */
var formatBreakpoint = function(msg, breakpoint) {
  var text = msg + util.format('breakpoint id: %s,\n\tlocation: %s',
    breakpoint.id, util.inspect(breakpoint.location));
  if (breakpoint.createdTime) {
    var unixTime = parseInt(breakpoint.createdTime.seconds, 10);
    var date = new Date(unixTime * 1000); // to milliseconds.
    text += '\n\tcreatedTime: ' + date.toString();
  }
  if (breakpoint.condition) {
    text += '\n\tcondition: ' + util.inspect(breakpoint.condition);
  }
  if (breakpoint.expressions) {
    text += '\n\texpressions: ' + util.inspect(breakpoint.expressions);
  }
  return text;
};

/**
 * Formats a map of breakpoint objects prefixed with a provided message as a
 * string intended for logging.
 * @param {string} msg The message that prefixes the formatted breakpoint.
 * @param {Object.<string, Breakpoint>} breakpoints A map of breakpoints.
 * @return {string} A formatted string.
 */
var formatBreakpoints = function(msg, breakpoints) {
  return msg + Object.keys(breakpoints).map(function (b) {
    formatBreakpoint('', b);
  }).join('\n');
};

module.exports = Debuglet;

/**
 * @param {Debug} debug - A Debug instance.
 * @param {object=} config - The option parameters for the Debuglet.
 * @event 'started' once the startup tasks are completed. Only called once.
 * @event 'stopped' if the agent stops due to a fatal error after starting. Only
 *     called once.
 * @event 'registered' once successfully registered to the debug api. May be
 *     emitted multiple times.
 * @event 'remotelyDisabled' if the debuggee is disabled by the server. May be
 *    called multiple times.
 * @constructor
 */
function Debuglet(debug, config) {
  /** @private {object} */
  this.config_ = this.normalizeConfig_(config);

  /** @private {Debug} */
  this.debug_ = debug;

  /**
   * @private {object} V8 Debug API. This can be null if the Node.js version
   *     is out of date.
   */
  this.v8debug_ = null;

  /** @private {boolean} */
  this.running_ = false;

  /** @private {string} */
  this.project_ = null;

  /** @private {boolean} */
  this.fetcherActive_ = false;

  /** @private {common.logger} */
  this.logger_ = new common.logger({
    level: common.logger.LEVELS[this.config_.logLevel],
    tag: '@google-cloud/debug'
  });

  /** @private {DebugletApi} */
  this.debugletApi_ = new DebugletApi(this.debug_);

  /** @private {Debuggee} */
  this.debuggee_ = null;

  /** @private {Object.<string, Breakpoint>} */
  this.activeBreakpointMap_ = {};

  /** @private {Object.<string, Boolean>} */
  this.completedBreakpointMap_ = {};

  EventEmitter.call(this);
}

util.inherits(Debuglet, EventEmitter);

Debuglet.prototype.normalizeConfig_ = function(config) {
  var envConfig = {
    logLevel: process.env.GCLOUD_DEBUG_LOGLEVEL,
    serviceContext: {
      service: process.env.GAE_SERVICE || process.env.GAE_MODULE_NAME,
      version: process.env.GAE_VERSION || process.env.GAE_MODULE_VERSION
    }
  };

  config = extend({}, defaultConfig, config, envConfig);

  if (config.keyFilename || config.credentials || config.projectId) {
    throw new Error('keyFilename, projectId or credentials should be provided' +
                    ' to the Debug module constructor rather than startAgent');
  }

  return config;
};

/**
 * Starts the Debuglet. It is important that this is as quick as possible
 * as it is on the critical path of application startup.
 * @private
 */
Debuglet.prototype.start = function() {
  var that = this;
  fs.stat(path.join(that.config_.workingDirectory, 'package.json'), function(err) {
    if (err && err.code === 'ENOENT') {
      that.logger_.error('No package.json located in working directory.');
      that.emit('initError', new Error('No package.json found.'));
      return;
    }
    var id;
    if (process.env.GAE_MINOR_VERSION) {
      id = 'GAE-' + process.env.GAE_MINOR_VERSION;
    }
    scanner.scan(!id, that.config_.workingDirectory, /.js$|.map$/,
        function(err, fileStats, hash) {
      if (err) {
        that.logger_.error('Error scanning the filesystem.', err);
        that.emit('initError', err);
        return;
      }

      var jsStats = fileStats.selectStats(/.js$/);
      var mapFiles = fileStats.selectFiles(/.map$/, process.cwd());
      SourceMapper.create(mapFiles, function(err, mapper) {
        if (err) {
          that.logger_.error('Error processing the sourcemaps.', err);
          that.emit('initError', err);
          return;
        }

        that.v8debug_ = v8debugapi.create(that.logger_, that.config_, jsStats, mapper);

        id = id || hash;

        that.logger_.info('Unique ID for this Application: ' + id);

        that.getProjectId_(function(err, project, onGCP) {
          if (err) {
            that.logger_.error('Unable to discover projectId. Please provide ' +
                               'the projectId to be able to use the Debuglet',
                               err);
            that.emit('initError', err);
            return;
          }

          that.getSourceContext_(function(err, sourceContext) {
            if (err) {
              that.logger_.warn('Unable to discover source context', err);
              // This is ignorable.
            }

            if (semver.satisfies(process.version, '5.2 || <0.12')) {
              // Using an unsupported version. We report an error message about the
              // Node.js version, but we keep on running. The idea is that the user
              // may miss the error message on the console. This way we can report the
              // error when the user tries to set a breakpoint.
              that.logger_.error(NODE_VERSION_MESSAGE);
            }

            // We can register as a debuggee now.
            that.logger_.debug('Starting debuggee, project', project);
            that.running_ = true;
            that.project_ = project;
            that.debuggee_ = Debuglet.createDebuggee(
                project, id, that.config_.serviceContext, sourceContext,
                that.config_.description, null, onGCP);
            that.scheduleRegistration_(0 /* immediately */);
            that.emit('started');
          });
        });
      });
    });
  });
};

/**
 * @private
 */
Debuglet.createDebuggee =
    function(projectId, uid, serviceContext, sourceContext, description,
             errorMessage, onGCP) {
  var cwd = process.cwd();
  var mainScript = path.relative(cwd, process.argv[1]);

  var version = 'google.com/node-' + (onGCP ? 'gcp' : 'standalone') + '/v' +
                pjson.version;
  var desc = process.title + ' ' + mainScript;

  var labels = {
    'main script': mainScript,
    'process.title': process.title,
    'node version': process.versions.node,
    'V8 version': process.versions.v8,
    'agent.name': pjson.name,
    'agent.version': pjson.version,
    'projectid': projectId
  };

  if (serviceContext) {
    if (_.isString(serviceContext.service) &&
        serviceContext.service !== 'default') {
      // As per app-engine-ids, the module label is not reported
      // when it happens to be 'default'.
      labels.module = serviceContext.service;
      desc += ' module:' + serviceContext.service;
    }

    if (_.isString(serviceContext.version)) {
      labels.version = serviceContext.version;
      desc += ' version:' + serviceContext.version;
    }
  }

  if (description) {
    desc += ' description:' + description;
  }

  var uniquifier =
      desc + version + uid + sourceContext + JSON.stringify(labels);
  uniquifier = crypto.createHash('sha1').update(uniquifier).digest('hex');

  var statusMessage =
      errorMessage ?
          new StatusMessage(StatusMessage.UNSPECIFIED, errorMessage, true) :
          null;

  var properties = {
    project: projectId,
    uniquifier: uniquifier,
    description: desc,
    agentVersion: version,
    labels: labels,
    statusMessage: statusMessage,
    sourceContexts: [sourceContext]
  };
  return new Debuggee(properties);
};

/**
 * @private
 */
Debuglet.prototype.getProjectId_ = function(callback) {
  var that = this;

  // We need to figure out whether we are running on GCP. We can use our ability
  // to access the metadata service as a test for that.
  // TODO: change this to getProjectId in the future.
  metadata.project(
      'project-id', function(err, response, metadataProject) {
        // We should get an error if we are not on GCP.
        var onGCP = !err;

        // We perfer to use the locally available projectId as that is least
        // surprising to users.
        var project = that.debug_.options.projectId ||
                      process.env.GCLOUD_PROJECT || metadataProject;

        // We if don't have a projectId by now, we fail with an error.
        if (!project) {
          return callback(err);
        }
        return callback(null, project, onGCP);
      });
};

Debuglet.prototype.getSourceContext_ =
    function(callback) {
  fs.readFile('source-context.json', 'utf8', function(err, data) {
    // TODO: deal with err here
    var sourceContext;
    try {
      sourceContext = JSON.parse(data);
    } catch (e) {
      err = 'Malformed source-context.json file:' + e;
      // But we keep on going.
    }
    return callback(err, sourceContext);
  });
};

/**
 * @param {number} seconds
 * @private
 */
Debuglet.prototype.scheduleRegistration_ = function(seconds) {
  var that = this;

  function onError(err) {
    that.logger_.error('Failed to re-register debuggee ' +
      that.project_ + ': ' + err);
    that.scheduleRegistration_(Math.min((seconds + 1) * 2,
      that.config_.internal.maxRegistrationRetryDelay));
  }

  setTimeout(function() {
    if (!that.running_) {
      onError(new Error('Debuglet not running'));
      return;
    }

    that.debugletApi_.register(that.debuggee_, function(err, result) {
      if (err) {
        onError(err);
        return;
      }

      if (result.debuggee.isDisabled) {
        // Server has disabled this debuggee / debug agent.
        onError(new Error('Disabled by the server'));
        that.emit('remotelyDisabled');
        return;
      }

      that.logger_.info('Registered as debuggee:', result.debuggee.id);
      that.debuggee_.id = result.debuggee.id;
      that.emit('registered', result.debuggee.id);
      if (!that.fetcherActive_) {
        that.scheduleBreakpointFetch_(0);
      }
    });
  }, seconds * 1000).unref();
};

/**
 * @param {number} seconds
 * @private
 */
Debuglet.prototype.scheduleBreakpointFetch_ = function(seconds) {
  var that = this;

  that.fetcherActive_ = true;
  setTimeout(function() {
    if (!that.running_) {
      return;
    }
    assert(that.fetcherActive_);

    that.logger_.info('Fetching breakpoints');
    that.debugletApi_.listBreakpoints(that.debuggee_, function(err, response,
                                                               body) {
      if (err) {
        that.logger_.error('Unable to fetch breakpoints – stopping fetcher',
                           err);
        that.fetcherActive_ = false;
        // We back-off from fetching breakpoints, and try to register again
        // after a while. Successful registration will restart the breakpoint
        // fetcher.
        that.scheduleRegistration_(
            that.config_.internal.registerDelayOnFetcherErrorSec);
        return;
      }

      switch (response.statusCode) {
        case 404:
          // Registration expired. Deactivate the fetcher and queue
          // re-registration, which will re-active breakpoint fetching.
          that.logger_.info('\t404 Registration expired.');
          that.fetcherActive_ = false;
          that.scheduleRegistration_(0 /*immediately*/);
          return;

        default:
          that.logger_.info('\t' + response.statusCode + ' completed.');
          if (body.wait_expired) {
            that.logger_.info('\tLong poll completed.');
            that.scheduleBreakpointFetch_(0/*immediately*/);
            return;
          }
          var bps = (body.breakpoints || []).filter(function(bp) {
            var action = bp.action || 'CAPTURE';
            if (action !== 'CAPTURE' && action !== 'LOG') {
              that.logger_.warn('Found breakpoint with invalid action:', action);
              bp.status = new StatusMessage(StatusMessage.UNSPECIFIED,
                BREAKPOINT_ACTION_MESSAGE, true);
              that.rejectBreakpoint_(bp);
              return false;
            }
            return true;
          });
          that.updateActiveBreakpoints_(bps);
          if (Object.keys(that.activeBreakpointMap_).length) {
            that.logger_.info(formatBreakpoint('Active Breakpoints: ',
              that.activeBreakpointMap_));
          }
          that.scheduleBreakpointFetch_(that.config_.breakpointUpdateIntervalSec);
          return;
      }
    });
  }, seconds * 1000).unref();
};

/**
 * Given a list of server breakpoints, update our internal list of breakpoints
 * @param {Array.<Breakpoint>} breakpoints
 * @private
 */
Debuglet.prototype.updateActiveBreakpoints_ = function(breakpoints) {
  var that = this;
  var updatedBreakpointMap = this.convertBreakpointListToMap_(breakpoints);

  if (breakpoints.length) {
    that.logger_.info(formatBreakpoints('Server breakpoints: ',
      updatedBreakpointMap));
  }

  breakpoints.forEach(function(breakpoint) {

    if (!that.completedBreakpointMap_[breakpoint.id] &&
        !that.activeBreakpointMap_[breakpoint.id]) {

      // New breakpoint
      that.addBreakpoint_(breakpoint, function(err) {
        if (err) {
          that.completeBreakpoint_(breakpoint);
        }
      });

      // Schedule the expiry of server breakpoints.
      that.scheduleBreakpointExpiry_(breakpoint);
    }
  });

  // Remove completed breakpoints that the server no longer cares about.
  Debuglet.mapSubtract(this.completedBreakpointMap_, updatedBreakpointMap)
    .forEach(function(breakpoint){
      delete this.completedBreakpointMap_[breakpoint.id];
    }, this);

  // Remove active breakpoints that the server no longer care about.
  Debuglet.mapSubtract(this.activeBreakpointMap_, updatedBreakpointMap)
    .forEach(this.removeBreakpoint_, this);
};

/**
 * Array of breakpints get converted to Map of breakpoints, indexed by id
 * @param {Array.<Breakpoint>} breakpointList
 * @return {Object.<string, Breakpoint>} A map of breakpoint IDs to breakpoints.
 * @private
 */
Debuglet.prototype.convertBreakpointListToMap_ = function(breakpointList) {
  var map = {};
  breakpointList.forEach(function(breakpoint) {
    map[breakpoint.id] = breakpoint;
  });
  return map;
};

/**
 * @param {Breakpoint} breakpoint
 * @private
 */
Debuglet.prototype.removeBreakpoint_ = function(breakpoint) {
  this.logger_.info('\tdeleted breakpoint', breakpoint.id);
  delete this.activeBreakpointMap_[breakpoint.id];
  if (this.v8debug_) {
    this.v8debug_.clear(breakpoint);
  }
};

/**
 * @param {Breakpoint} breakpoint
 * @return {boolean} false on error
 * @private
 */
Debuglet.prototype.addBreakpoint_ = function(breakpoint, cb) {
  var that = this;

  if (semver.satisfies(process.version, '5.2 || <0.12')) {
    var message = NODE_VERSION_MESSAGE;
    that.logger_.error(message);
    breakpoint.status = new StatusMessage(StatusMessage.UNSPECIFIED,
      message, true);
    setImmediate(function() { cb(message); });
    return;
  }

  that.v8debug_.set(breakpoint, function(err) {
    if (err) {
      cb(err);
      return;
    }

    that.logger_.info('\tsuccessfully added breakpoint  ' + breakpoint.id);
    that.activeBreakpointMap_[breakpoint.id] = breakpoint;

    if (breakpoint.action === 'LOG') {
      that.v8debug_.log(breakpoint,
        function(fmt, exprs) {
          console.log('LOGPOINT:', Debuglet.format(fmt, exprs));
        },
        function() {
          return that.completedBreakpointMap_[breakpoint.id];
        });
    } else {
      that.v8debug_.wait(breakpoint, function(err) {
        if (err) {
          that.logger_.error(err);
          cb(err);
          return;
        }

        that.logger_.info('Breakpoint hit!: ' + breakpoint.id);
        that.completeBreakpoint_(breakpoint);
      });
    }
  });
};

/**
 * Update the server that the breakpoint has been completed (captured, or
 * expired).
 * @param {Breakpoint} breakpoint
 * @private
 */
Debuglet.prototype.completeBreakpoint_ = function(breakpoint) {
  var that = this;

  that.logger_.info('\tupdating breakpoint data on server', breakpoint.id);
  that.debugletApi_.updateBreakpoint(
      that.debuggee_, breakpoint, function(err /*, body*/) {
        if (err) {
          that.logger_.error('Unable to complete breakpoint on server', err);
        } else {
          that.completedBreakpointMap_[breakpoint.id] = true;
          that.removeBreakpoint_(breakpoint);
        }
      });
};

/**
 * Update the server that the breakpoint cannot be handled.
 * @param {Breakpoint} breakpoint
 * @private
 */
Debuglet.prototype.rejectBreakpoint_ = function(breakpoint) {
  var that = this;

  that.debugletApi_.updateBreakpoint(
      that.debuggee_, breakpoint, function(err /*, body*/) {
        if (err) {
          that.logger_.error('Unable to complete breakpoint on server', err);
        }
      });
};

/**
 * This schedules a delayed operation that will delete the breakpoint from the
 * server after the expiry period.
 * FIXME: we should cancel the timer when the breakpoint completes. Otherwise
 * we hold onto the closure memory until the breapointExpirateion timeout.
 * @param {Breakpoint} breakpoint Server breakpoint object
 * @private
 */
Debuglet.prototype.scheduleBreakpointExpiry_ = function(breakpoint) {
  var that = this;

  var now = Date.now() / 1000;
  var createdTime = breakpoint.createdTime ?
    parseInt(breakpoint.createdTime.seconds) : now;
  var expiryTime = createdTime + that.config_.breakpointExpirationSec;

  setTimeout(function() {
    that.logger_.info('Expiring breakpoint ' + breakpoint.id);
    breakpoint.status = {
      description: {
        format: 'The snapshot has expired'
      },
      isError: true,
      refersTo: 'unspecified'
    };
    that.completeBreakpoint_(breakpoint);
  }, (expiryTime - now) * 1000).unref();
};

/**
 * Stops the Debuglet. This is for testing purposes only. Stop should only be
 * called on a agent that has started (i.e. emitted the 'started' event).
 * Calling this while the agent is initializing may not necessarily stop all
 * pending operations.
 */
Debuglet.prototype.stop = function() {
  assert.ok(this.running_, 'stop can only be called on a running agent');
  this.logger_.debug('Stopping Debuglet');
  this.running_ = false;
  this.emit('stopped');
};


/**
 * Performs a set subtract. Returns A - B given maps A, B.
 * @return {Array.<Breakpoint>} A array containing elements from A that are not
 *     in B.
 */
Debuglet.mapSubtract = function mapSubtract(A, B) {
  var removed = [];
  for (var key in A) {
    if (!B[key]) {
      removed.push(A[key]);
    }
  }
  return removed;
};

/**
 * Formats the message base with placeholders `$0`, `$1`, etc
 * by substituting the provided expressions. If more expressions
 * are given than placeholders extra expressions are dropped.
 */
Debuglet.format = function(base, exprs) {
  var tokens = Debuglet._tokenize(base, exprs.length);
  for (var i = 0; i < tokens.length; i++) {
    if (!tokens[i].v) {
      continue;
    }
    if (tokens[i].v === '$$') {
      tokens[i] = '$';
      continue;
    }
    for (var j = 0; j < exprs.length; j++) {
      if (tokens[i].v === '$' + j) {
        tokens[i] = exprs[j];
        break;
      }
    }
  }
  return tokens.join('');
};

Debuglet._tokenize = function(base, exprLength) {
  var acc = Debuglet._delimit(base, '$$');
  for (var i = exprLength - 1; i >= 0; i--) {
    var newAcc = [];
    for (var j = 0; j < acc.length; j++) {
      if (acc[j].v) {
        newAcc.push(acc[j]);
      } else {
        newAcc.push.apply(newAcc, Debuglet._delimit(acc[j], '$' + i));
      }
    }
    acc = newAcc;
  }
  return acc;
};

Debuglet._delimit = function(source, delim) {
  var pieces = source.split(delim);
  var dest = [];
  dest.push(pieces[0]);
  for (var i = 1; i < pieces.length; i++) {
    dest.push({ v: delim }, pieces[i]);
  }
  return dest;
};
