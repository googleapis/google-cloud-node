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

import * as assert from 'assert';
import {afterEach, describe, it} from 'mocha';
import * as sinon from 'sinon';
import {AuthPlus} from '../src/authplus';

describe(__filename, () => {
  afterEach(() => {
    sinon.restore();
  });

  it('should expose auth classes', () => {
    const auth = new AuthPlus();
    assert.ok(auth.JWT);
    assert.ok(auth.Compute);
    assert.ok(auth.OAuth2);
    assert.ok(auth.GoogleAuth);
    assert.ok(auth.AwsClient);
    assert.ok(auth.IdentityPoolClient);
    assert.ok(auth.ExternalAccountClient);
  });

  it('should get a new client', async () => {
    const auth = new AuthPlus();
    const getClientStub = sinon
      .stub(auth.GoogleAuth.prototype, 'getClient')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .resolves({} as any);
    const client = await auth.getClient();
    assert.deepStrictEqual(client, {});
    assert.strictEqual(getClientStub.calledOnce, true);
  });
});
