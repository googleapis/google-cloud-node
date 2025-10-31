// Copyright 2017 Google LLC
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
import * as assert from 'assert';
import {describe, it} from 'mocha';
import * as gal from '../src';

describe('index', () => {
  it('should publicly export GoogleAuth', () => {
    const cjs = require('../src/');
    assert.strictEqual(cjs.GoogleAuth, gal.GoogleAuth);
  });

  it('should export all the things', () => {
    assert(gal.CodeChallengeMethod);
    assert(gal.Compute);
    assert(gal.IAMAuth);
    assert(gal.JWT);
    assert(gal.JWTAccess);
    assert(gal.OAuth2Client);
    assert(gal.UserRefreshClient);
    assert(gal.GoogleAuth);
    assert(gal.ExternalAccountClient);
    assert(gal.IdentityPoolClient);
    assert(gal.AwsClient);
    assert(gal.BaseExternalAccountClient);
    assert(gal.DownscopedClient);
    assert(gal.Impersonated);

    assert(gal.gaxios);
    assert(gal.gcpMetadata);
  });
});
