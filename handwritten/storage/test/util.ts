// Copyright 2026 Google LLC
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

import assert from 'assert';
import {describe, it, before, after, beforeEach, afterEach} from 'mocha';
import Module from 'module';
import * as sinon from 'sinon';
import {
  Compute,
  DEFAULT_UNIVERSE,
  GoogleAuth,
  JWTInput,
  OAuth2Client,
  PassThroughClient,
} from 'google-auth-library';
import {assertUniverseDomain, signBlob} from '../src/util.js';

const utilPath = require.resolve('../src/util.js');

function loadFreshUtil(): typeof import('../src/util.js') {
  delete require.cache[utilPath];
  return module.require(utilPath);
}

describe('util lazy imports', () => {
  let originalRequire: typeof Module.prototype.require;
  let originalUtilCacheEntry: NodeModule | undefined;

  before(() => {
    originalUtilCacheEntry = require.cache[utilPath];
  });

  after(() => {
    if (originalUtilCacheEntry) {
      require.cache[utilPath] = originalUtilCacheEntry;
    } else {
      delete require.cache[utilPath];
    }
  });

  beforeEach(() => {
    originalRequire = Module.prototype.require;
  });

  afterEach(() => {
    Module.prototype.require = originalRequire;
  });

  describe('getMime', () => {
    describe('Promise caching', () => {
      it('should return the identical promise instance for concurrent calls', async () => {
        const util = loadFreshUtil();
        const p1 = util.getMime();
        const p2 = util.getMime();
        assert.strictEqual(p1, p2);

        const [mime1, mime2] = await Promise.all([p1, p2]);
        assert.strictEqual(mime1, mime2);
      });

      it('should return the identical promise instance for sequential calls after resolution', async () => {
        const util = loadFreshUtil();
        const p1 = util.getMime();
        const mime1 = await p1;

        const p2 = util.getMime();
        assert.strictEqual(p2, p1);

        const mime2 = await p2;
        assert.strictEqual(mime2, mime1);
      });

      it('should resolve to a functional mime module with expected methods', async () => {
        const util = loadFreshUtil();
        const mime = await util.getMime();

        assert.ok(mime);
        assert.strictEqual(typeof mime.getType, 'function');
        assert.strictEqual(mime.getType('file.txt'), 'text/plain');
        assert.strictEqual(mime.getType('photo.png'), 'image/png');
        assert.strictEqual(mime.getType('archive.zip'), 'application/zip');
        assert.strictEqual(
          mime.getType('unknown.nonexistentextension123'),
          null,
        );
      });
    });

    describe('Error recovery', () => {
      it('should reset the cached promise and allow recovery on subsequent call if import fails', async () => {
        const util = loadFreshUtil();
        let shouldFail = true;

        Module.prototype.require = Object.assign(function (
          this: NodeModule,
          request: string,
        ) {
          if (request === 'mime' && shouldFail) {
            throw new Error('Simulated mime import failure');
          }
          return originalRequire.call(this, request);
        }, originalRequire);

        await assert.rejects(
          async () => {
            await util.getMime();
          },
          {
            message: 'Simulated mime import failure',
          },
        );

        // Verify recovery: after error is resolved, next call creates a new promise and succeeds
        shouldFail = false;
        const pRecovered = util.getMime();
        const mimeRecovered = await pRecovered;

        assert.ok(mimeRecovered);
        assert.strictEqual(typeof mimeRecovered.getType, 'function');
        assert.strictEqual(
          mimeRecovered.getType('test.json'),
          'application/json',
        );

        // Subsequent call should now cache and return the recovered promise
        assert.strictEqual(util.getMime(), pRecovered);
      });
    });
  });

  describe('getPLimit', () => {
    describe('Promise caching', () => {
      it('should return the identical promise instance for concurrent calls', async () => {
        const util = loadFreshUtil();
        const p1 = util.getPLimit();
        const p2 = util.getPLimit();
        assert.strictEqual(p1, p2);

        const [pLimit1, pLimit2] = await Promise.all([p1, p2]);
        assert.strictEqual(pLimit1, pLimit2);
      });

      it('should return the identical promise instance for sequential calls after resolution', async () => {
        const util = loadFreshUtil();
        const p1 = util.getPLimit();
        const pLimit1 = await p1;

        const p2 = util.getPLimit();
        assert.strictEqual(p2, p1);

        const pLimit2 = await p2;
        assert.strictEqual(pLimit2, pLimit1);
      });

      it('should resolve to a functional p-limit function that throttles concurrency', async () => {
        const util = loadFreshUtil();
        const pLimit = await util.getPLimit();

        assert.ok(pLimit);
        assert.strictEqual(typeof pLimit, 'function');

        const concurrency = 2;
        const limit = pLimit(concurrency);
        let active = 0;
        let maxActive = 0;

        const runTask = async (durationMs: number) => {
          return limit(async () => {
            active++;
            maxActive = Math.max(maxActive, active);
            await new Promise(resolve => setTimeout(resolve, durationMs));
            active--;
          });
        };

        await Promise.all([
          runTask(20),
          runTask(20),
          runTask(20),
          runTask(20),
          runTask(20),
        ]);

        assert.strictEqual(maxActive, concurrency);
      });
    });

    describe('Error recovery', () => {
      it('should reset the cached promise and allow recovery on subsequent call if import fails', async () => {
        const util = loadFreshUtil();
        let shouldFail = true;

        Module.prototype.require = Object.assign(function (
          this: NodeModule,
          request: string,
        ) {
          if (request === 'p-limit' && shouldFail) {
            throw new Error('Simulated p-limit import failure');
          }
          return originalRequire.call(this, request);
        }, originalRequire);

        await assert.rejects(
          async () => {
            await util.getPLimit();
          },
          {
            message: 'Simulated p-limit import failure',
          },
        );

        // Verify recovery: after error is resolved, next call creates a new promise and succeeds
        shouldFail = false;
        const pRecovered = util.getPLimit();
        const pLimitRecovered = await pRecovered;

        assert.ok(pLimitRecovered);
        assert.strictEqual(typeof pLimitRecovered, 'function');

        const limit = pLimitRecovered(1);
        const result = await limit(() => Promise.resolve('recovered'));
        assert.strictEqual(result, 'recovered');

        // Subsequent call should now cache and return the recovered promise
        assert.strictEqual(util.getPLimit(), pRecovered);
      });
    });
  });
});

describe('universe domain', () => {
  const OTHER_UNIVERSE = 'example-universe.test';
  const MISMATCH =
    /does not match the universe domain found in the credentials/;
  let sandbox: sinon.SinonSandbox;

  function serviceAccount(universeDomain?: string): JWTInput {
    return {
      type: 'service_account',
      client_email: 'test@example.iam.gserviceaccount.com',
      private_key: 'not-a-real-key',
      ...(universeDomain ? {universe_domain: universeDomain} : {}),
    };
  }

  function authFor(credentials: object) {
    return new GoogleAuth({credentials: credentials as JWTInput});
  }

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('assertUniverseDomain', () => {
    it('should accept credentials of the configured universe domain', async () => {
      await assertUniverseDomain(
        authFor(serviceAccount(OTHER_UNIVERSE)),
        OTHER_UNIVERSE,
      );
      await assertUniverseDomain(
        authFor(serviceAccount(DEFAULT_UNIVERSE)),
        DEFAULT_UNIVERSE,
      );
    });

    it('should reject credentials of another universe domain', async () => {
      await assert.rejects(
        assertUniverseDomain(
          authFor(serviceAccount(OTHER_UNIVERSE)),
          DEFAULT_UNIVERSE,
        ),
        MISMATCH,
      );
      await assert.rejects(
        assertUniverseDomain(
          authFor(serviceAccount(DEFAULT_UNIVERSE)),
          OTHER_UNIVERSE,
        ),
        MISMATCH,
      );
    });

    it('should treat a credential file without a universe domain as the default one', async () => {
      await assertUniverseDomain(authFor(serviceAccount()), DEFAULT_UNIVERSE);
      await assert.rejects(
        assertUniverseDomain(authFor(serviceAccount()), OTHER_UNIVERSE),
        MISMATCH,
      );
    });

    it('should use the source credentials of an impersonation file', async () => {
      const file = {
        type: 'impersonated_service_account',
        service_account_impersonation_url: `https://iamcredentials.${OTHER_UNIVERSE}/v1/projects/-/serviceAccounts/target@example.iam.gserviceaccount.com:generateAccessToken`,
        source_credentials: serviceAccount(OTHER_UNIVERSE),
      };

      await assertUniverseDomain(authFor(file), OTHER_UNIVERSE);
      await assert.rejects(
        assertUniverseDomain(authFor(file), DEFAULT_UNIVERSE),
        MISMATCH,
      );
    });

    it('should read a universe domain named in camel case', async () => {
      const credentials = {
        type: 'external_account',
        audience:
          '//iam.googleapis.com/projects/1/locations/global/workloadIdentityPools/pool/providers/provider',
        subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
        token_url: `https://sts.${OTHER_UNIVERSE}/v1/token`,
        credential_source: {file: '/path/to/token'},
        universeDomain: OTHER_UNIVERSE,
      };

      await assertUniverseDomain(authFor(credentials), OTHER_UNIVERSE);
      await assert.rejects(
        assertUniverseDomain(authFor(credentials), DEFAULT_UNIVERSE),
        MISMATCH,
      );
    });

    it('should use the universe domain reported by the auth client', async () => {
      const auth = new GoogleAuth({
        authClient: new OAuth2Client({universeDomain: OTHER_UNIVERSE}),
      });

      await assertUniverseDomain(auth, OTHER_UNIVERSE);
      await assert.rejects(
        assertUniverseDomain(auth, DEFAULT_UNIVERSE),
        MISMATCH,
      );
    });

    it('should use the universe domain of the client, not the one given to its auth object', async () => {
      const auth = new GoogleAuth({
        authClient: new OAuth2Client(),
        universeDomain: OTHER_UNIVERSE,
      });

      await assertUniverseDomain(auth, DEFAULT_UNIVERSE);
      await assert.rejects(
        assertUniverseDomain(auth, OTHER_UNIVERSE),
        MISMATCH,
      );
    });

    it('should verify a client used without an auth object', async () => {
      await assertUniverseDomain(new OAuth2Client(), DEFAULT_UNIVERSE);
      await assert.rejects(
        assertUniverseDomain(new OAuth2Client(), OTHER_UNIVERSE),
        MISMATCH,
      );
    });

    it('should verify an auth object held as the client of another one', async () => {
      const auth = {
        getClient: async () => authFor(serviceAccount(OTHER_UNIVERSE)),
      };

      await assertUniverseDomain(auth, OTHER_UNIVERSE);
      await assert.rejects(
        assertUniverseDomain(auth, DEFAULT_UNIVERSE),
        MISMATCH,
      );
    });

    it('should accept a custom object that does not report a universe domain', async () => {
      const client = {request: async () => ({})};

      await assertUniverseDomain(client, OTHER_UNIVERSE);
      await assertUniverseDomain(
        {getClient: async () => client},
        OTHER_UNIVERSE,
      );
      await assertUniverseDomain(undefined, OTHER_UNIVERSE);
    });

    it('should reject a custom object that reports another universe domain', async () => {
      const client = {
        request: async () => ({}),
        universeDomain: OTHER_UNIVERSE,
      };

      await assert.rejects(
        assertUniverseDomain(client, DEFAULT_UNIVERSE),
        MISMATCH,
      );
    });

    it('should accept a client that sends no credentials', async () => {
      const auth = new GoogleAuth({authClient: new PassThroughClient()});

      await assertUniverseDomain(auth, OTHER_UNIVERSE);
    });

    describe('credentials of a VM', () => {
      let lookup: sinon.SinonStub;

      beforeEach(() => {
        lookup = sandbox.stub(
          GoogleAuth.prototype,
          'getUniverseDomainFromMetadataServer',
        );
      });

      it('should use the universe domain reported by the metadata server', async () => {
        lookup.resolves(OTHER_UNIVERSE);

        await assertUniverseDomain(
          new GoogleAuth({authClient: new Compute()}),
          OTHER_UNIVERSE,
        );
        await assert.rejects(
          assertUniverseDomain(
            new GoogleAuth({authClient: new Compute()}),
            DEFAULT_UNIVERSE,
          ),
          MISMATCH,
        );
      });

      it('should not use the universe domain given to the credentials of the VM', async () => {
        lookup.resolves(DEFAULT_UNIVERSE);
        const auth = new GoogleAuth({
          authClient: new Compute({universeDomain: OTHER_UNIVERSE}),
          universeDomain: OTHER_UNIVERSE,
        });

        await assertUniverseDomain(auth, DEFAULT_UNIVERSE);
        await assert.rejects(
          assertUniverseDomain(auth, OTHER_UNIVERSE),
          MISMATCH,
        );
      });

      it('should recognise credentials of a VM created by another copy of the auth library', async () => {
        lookup.resolves(OTHER_UNIVERSE);
        // Has the name of the class, without being an instance of it.
        const client = new (class Compute {
          universeDomain = DEFAULT_UNIVERSE;
        })();
        const auth = {getClient: async () => client};

        await assertUniverseDomain(auth, OTHER_UNIVERSE);
        await assert.rejects(
          assertUniverseDomain(auth, DEFAULT_UNIVERSE),
          MISMATCH,
        );
      });

      it('should share one read of the universe domain for the same credentials', async () => {
        lookup.resolves(DEFAULT_UNIVERSE);
        const auth = new GoogleAuth({authClient: new Compute()});

        await Promise.all([
          assertUniverseDomain(auth, DEFAULT_UNIVERSE),
          assertUniverseDomain(auth, DEFAULT_UNIVERSE),
        ]);
        await assertUniverseDomain(auth, DEFAULT_UNIVERSE);

        assert.strictEqual(lookup.callCount, 1);
      });

      it('should reject when the metadata server cannot be read', async () => {
        lookup.rejects(new Error('unavailable'));
        const auth = new GoogleAuth({authClient: new Compute()});

        await assert.rejects(
          assertUniverseDomain(auth, DEFAULT_UNIVERSE),
          /Unable to read the universe domain from the metadata server: unavailable/,
        );

        // A failed read is not remembered.
        lookup.resolves(DEFAULT_UNIVERSE);
        await assertUniverseDomain(auth, DEFAULT_UNIVERSE);
      });
    });
  });

  describe('signBlob', () => {
    it('should sign with the IAM endpoint of the configured universe domain', async () => {
      const auth = authFor(serviceAccount(OTHER_UNIVERSE));
      const sign = sandbox.stub(auth, 'sign').resolves('signature');

      const signature = await signBlob(auth, OTHER_UNIVERSE, 'data');

      assert.strictEqual(signature, 'signature');
      assert.deepStrictEqual(sign.firstCall.args, [
        'data',
        `https://iamcredentials.${OTHER_UNIVERSE}/v1/projects/-/serviceAccounts/`,
      ]);
    });

    it('should sign with a custom endpoint when one is given', async () => {
      const auth = authFor(serviceAccount());
      const sign = sandbox.stub(auth, 'sign').resolves('signature');

      await signBlob(auth, DEFAULT_UNIVERSE, 'data', 'https://my-endpoint.com');

      assert.deepStrictEqual(sign.firstCall.args, [
        'data',
        'https://my-endpoint.com',
      ]);
    });

    it('should not sign with credentials of another universe domain', async () => {
      const auth = authFor(serviceAccount(OTHER_UNIVERSE));
      const sign = sandbox.stub(auth, 'sign').resolves('signature');

      await assert.rejects(signBlob(auth, DEFAULT_UNIVERSE, 'data'), MISMATCH);
      assert.strictEqual(sign.called, false);
    });
  });
});
