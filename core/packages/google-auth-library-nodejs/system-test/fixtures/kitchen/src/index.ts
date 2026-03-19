// Copyright 2020 Google LLC
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

import {GoogleAuth, JWT} from 'google-auth-library';
// uncomment the line below during development
// import {GoogleAuth} from '../../../../build/src/index';
const jwt = new JWT();
const auth = new GoogleAuth();
async function getToken() {
  const token = await jwt.getToken('token');
  await auth.getProjectId();
  await auth.getApplicationDefault();
  return token;
}
getToken();
