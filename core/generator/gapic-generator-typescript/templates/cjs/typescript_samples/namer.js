// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* This helper file must export two functions that will be passed to
 * the template engine.  The purpose of these functions is to perform
 * name conflicts resolution that cannot be handled in the generator
 * TypeScript code (since the generator does not know anything about
 * the generated names), so the only place where this can happen is
 * the template engine.
 */

/**
 * Initialize local names storage.
 */
function initialize() {
  if (typeof get.names === 'undefined') {
    get.names = new Set();
  }
}

/**
 * Generate a valid method name based on the given requested name.
 *
 * @param {string} name The original name to base on.
 * @returns A generated name that should not have conflicts with known
 * predefined names.
 */
function get(name) {
  initialize();

  let counter = 0;
  let newName = name;
  while (get.names.has(newName)) {
    ++counter;
    newName = `${name}${counter}`;
  }

  return newName;
}

/**
 * Register the given reserved name.
 *
 * @param {string} name Reserved name that should not be used.
 * @returns {string} Empty string (so it can be safely used in templates).
 */
function register(name) {
  initialize();

  get.names.add(name);
  return '';
}

// eslint-disable-next-line no-undef
module.exports = {register, get};
