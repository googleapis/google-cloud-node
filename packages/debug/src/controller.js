/**
 * Copyright 2014, 2015 Google Inc. All Rights Reserved.
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

/*!
 * @module debug/controller
 */

var assert = require('assert');
var common = require('@google-cloud/common');
var qs = require('querystring');
var util = require('util');

/** @const {string} Cloud Debug API endpoint */
var API = 'https://clouddebugger.googleapis.com/v2/controller';

/**
 * @constructor
 */
function Controller(debug) {
  common.ServiceObject.call(this, {
    parent: debug,
    baseUrl: '/controller'
  });

  /** @private {string} */
  this.nextWaitToken_ = null;
}

util.inherits(Controller, common.ServiceObject);

/**
 * Register to the API (implementation)
 *
 * @param {!function(?Error,Object=)} callback
 * @private
 */
Controller.prototype.register = function(debuggee, callback) {
  var options = {
    uri: API + '/debuggees/register',
    method: 'POST',
    json: true,
    body: {debuggee: debuggee}
  };
  this.request(options, function(err, body, response) {
    if (err) {
      callback(err);
    } else if (response.statusCode !== 200) {
      callback(
          new Error('unable to register, statusCode ' + response.statusCode));
    } else if (!body.debuggee) {
      callback(new Error('invalid response body from server'));
    } else {
      debuggee.id = body.debuggee.id;
      callback(null, body);
    }
  });
};


/**
 * Fetch the list of breakpoints from the server. Assumes we have registered.
 * @param {!function(?Error,Object=,Object=)} callback accepting (err, response,
 * body)
 */
Controller.prototype.listBreakpoints = function(debuggee, callback) {
  var that = this;
  assert(debuggee.id, 'should have a registered debuggee');
  var query = {success_on_timeout: true};
  if (that.nextWaitToken_) {
    query.waitToken = that.nextWaitToken_;
  }

  var uri = API + '/debuggees/' + encodeURIComponent(debuggee.id) +
            '/breakpoints?' + qs.stringify(query);
  that.request({uri: uri, json: true}, function(err, body, response) {
    if (!response) {
      callback(err || new Error('unknown error - request response missing'));
      return;
    } else if (response.statusCode === 404) {
      // The v2 API returns 404 (google.rpc.Code.NOT_FOUND) when the agent
      // registration expires. We should re-register.
      callback(null, response);
      return;
    } else if (response.statusCode !== 200) {
      callback(new Error('unable to list breakpoints, status code ' +
                         response.statusCode));
      return;
    } else {
      body = body || {};
      that.nextWaitToken_ = body.nextWaitToken;
      callback(null, response, body);
    }
  });
};

/**
 * Update the server about breakpoint state
 * @param {!Debuggee} debuggee
 * @param {!Breakpoint} breakpoint
 * @param {!Function} callback accepting (err, body)
 */
Controller.prototype.updateBreakpoint = function(debuggee, breakpoint, callback) {
  assert(debuggee.id, 'should have a registered debuggee');

  breakpoint.action = 'capture';
  breakpoint.isFinalState = true;
  var options = {
    uri: API + '/debuggees/' + encodeURIComponent(debuggee.id) +
             '/breakpoints/' + encodeURIComponent(breakpoint.id),
    json: true,
    method: 'PUT',
    body: {debuggeeId: debuggee.id, breakpoint: breakpoint}
  };

  // We need to have a try/catch here because a JSON.stringify will be done
  // by request. Some V8 debug mirror objects get a throw when we attempt to
  // stringify them. The try-catch keeps it resilient and avoids crashing the
  // user's app.
  try {
    this.request(options,
                        function(err, body, response) { callback(err, body); });
  } catch (error) {
    callback(error);
  }
};

module.exports = Controller;
