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

'use strict';

require('shelljs/global');

var git = require('../helpers').git;

var SUBMODULE_NAME = 'gh-pages';

// submodule data might have gotten wiped out when switching branches
if (test('-e', '.gitmodules')) {
  git.deinit({ alias: SUBMODULE_NAME });
  git.remove('-rf', '.gitmodules');
}

if (test('-d', SUBMODULE_NAME)) {
  git.remove('-rf', '--cached', SUBMODULE_NAME);
}

// rm('-rf', '.git/modules/gh-pages');
