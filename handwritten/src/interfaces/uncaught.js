/**
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

'use strict';
var errorHandlerRouter = require('../error-router.js');
var ErrorMessage = require('../classes/error-message.js');

/**
 * Exits the process with exit code `1` which indicates that an unhandled error
 * occurred. !! Invocation of this function will terminate the process !!
 * @function handleProcessExit
 * @return {Undefined} - does not return a value
 */
function handleProcessExit() { process.exit(1); }

/**
 * If the configuraiton allows, install an uncaught exception handler that will
 * report the uncaught error to the API and then terminate the process.
 * @function handlerSetup
 * @param {AuthClient} client - the API client for communication with the
 *  Stackdriver Error API
 * @param {Configuration} config - the init configuration
 * @returns {Null|process} - Returns null if the config demands ignoring
 * uncaught
 *  exceptions, otherwise return the process instance
 */
function handlerSetup(client, config) {
  /**
   * The actual exception handler creates a new instance of `ErrorMessage`,
   * extracts infomation from the propagated `Error` and marshals it into the
   * `ErrorMessage` instance, attempts to send this `ErrorMessage` instance to
   * the Stackdriver Error Reporting API. Subsequently the process is
   * terminated.
   * @function uncaughtExceptionHandler
   * @listens module:process~event:uncaughtException
   * @param {Error} err - The error that has been uncaught to this point
   * @returns {Undefined} - does not return a value
   */
  function uncaughtExceptionHandler(err) {
    var em = new ErrorMessage();
    errorHandlerRouter(err, em);
    client.sendError(em, handleProcessExit);
    setTimeout(handleProcessExit, 2000);
  }

  if (!config.getReportUncaughtExceptions() || config.lacksCredentials()) {
    // Do not attach a listener to the process
    return null;
  }

  return process.on('uncaughtException', uncaughtExceptionHandler);
}

module.exports = handlerSetup;
