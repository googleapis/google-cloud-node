/**
 *
 * Copyright 2015 Google Inc. All Rights Reserved.
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

/**
 * Status Message to be sent to the server
 * @constructor
 */
function StatusMessage(refersTo, description, isError) {
  this.refersTo = refersTo;
  this.description = { format: description };
  this.isError = isError;
}

// These status messages come from a proto definition.
// New status messages cannot be added here.
/** @const */ StatusMessage.UNSPECIFIED = 'UNSPECIFIED';
/** @const */ StatusMessage.BREAKPOINT_SOURCE_LOCATION =
                'BREAKPOINT_SOURCE_LOCATION';
/** @const */ StatusMessage.BREAKPOINT_CONDITION = 'BREAKPOINT_CONDITION';
/** @const */ StatusMessage.BREAKPOINT_EXPRESSION = 'BREAKPOINT_EXPRESSION';
/** @const */ StatusMessage.VARIABLE_NAME = 'VARIABLE_NAME';
/** @const */ StatusMessage.VARIABLE_VALUE = 'VARIABLE_VALUE';

module.exports = StatusMessage;
