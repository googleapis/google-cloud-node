// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const mkdirp = require('mkdirp');

// We have to manually add the directory here because the docker image that
// runs CI does not have this directory. We also can't use `mkdir -p` in the
// package.json file because CI is also run on Windows, which does not support
// the `-p` flag.
mkdirp.sync('build/conformance/conformance-tests');
