/**
 * Copyright 2018 Google LLC
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

import assert from 'assert';

import {beforeEach, afterEach, describe, it} from 'mocha';
import nock from 'nock';
import {SinonSandbox, createSandbox} from 'sinon';

import * as gcp from '../src';
import {GCPResidencyUtil} from './utils/gcp-residency';
import {GaxiosError} from 'gaxios';

// the metadata IP entry:
const HOST = gcp.HOST_ADDRESS;
// the metadata DNS entry:
const SECONDARY_HOST = gcp.SECONDARY_HOST_ADDRESS;
const PATH = gcp.BASE_PATH;
const TYPE = 'instance';
const PROPERTY = 'property';

// NOTE: nodejs switches all incoming header names to lower case.
const HEADERS = {
  [gcp.HEADER_NAME.toLowerCase()]: gcp.HEADER_VALUE,
};

describe('unit test', () => {
  const originalGceMetadataIp = process.env.GCE_METADATA_HOST;
  let sandbox: SinonSandbox;
  let residency: GCPResidencyUtil;

  before(() => {
    nock.disableNetConnect();
    process.removeAllListeners('warning');
  });

  beforeEach(() => {
    // Clear this environment variable to ensure it does not affect
    // expected test outcome.
    delete process.env.GCE_METADATA_HOST;
    delete process.env.GCE_METADATA_IP;
    delete process.env.METADATA_SERVER_DETECTION;

    gcp.resetIsAvailableCache();

    sandbox = createSandbox();
    residency = new GCPResidencyUtil(sandbox);

    residency.setNonGCP();
  });

  afterEach(() => {
    // Restore environment variable if it previously existed.
    process.env.GCE_METADATA_HOST = originalGceMetadataIp;
    nock.cleanAll();
    sandbox.restore();
  });

  it('should create the correct accessors', async () => {
    assert(typeof gcp.instance, 'function');
    assert(typeof gcp.project, 'function');
  });

  it('should access all the metadata properly', async () => {
    const scope = nock(HOST)
      .get(`${PATH}/${TYPE}`, undefined, HEADERS)
      .reply(200, {}, HEADERS);
    await gcp.instance();
    scope.done();
  });

  it('should access a specific metadata property', async () => {
    const scope = nock(HOST)
      .get(`${PATH}/${TYPE}/${PROPERTY}`)
      .reply(200, {}, HEADERS);
    await gcp.instance(PROPERTY);
    scope.done();
  });

  it('should use GCE_METADATA_IP if available', async () => {
    process.env.GCE_METADATA_IP = '127.0.0.1:8080';
    const scope = nock(`http://${process.env.GCE_METADATA_IP}`)
      .get(`${PATH}/${TYPE}/${PROPERTY}`, undefined, HEADERS)
      .reply(200, {}, HEADERS);
    await gcp.instance(PROPERTY);
    scope.done();
  });

  it('should use GCE_METADATA_HOST if available', async () => {
    process.env.GCE_METADATA_HOST = '127.0.0.1:8080';
    const scope = nock(`http://${process.env.GCE_METADATA_HOST}`)
      .get(`${PATH}/${TYPE}/${PROPERTY}`, undefined, HEADERS)
      .reply(200, {}, HEADERS);
    await gcp.instance(PROPERTY);
    scope.done();
  });

  it('should set custom headers when supplied', async () => {
    const headers = {human: 'phone', monkey: 'banana'};
    const scope = nock(HOST, {reqheaders: headers})
      .get(`${PATH}/${TYPE}/${PROPERTY}`)
      .reply(200, {}, HEADERS);
    await gcp.instance({property: PROPERTY, headers});
    scope.done();
  });

  it('should throw a valuable error when headers do not match', async () => {
    const scope = nock(HOST)
      .get(`${PATH}/${TYPE}/${PROPERTY}`)
      .reply(
        200,
        {},
        {
          [gcp.HEADER_NAME.toLowerCase()]: 'wrongHeader',
        },
      );

    await assert.rejects(
      async () => {
        await gcp.instance({property: PROPERTY});
      },
      err => {
        assert(err instanceof Error);
        assert.strictEqual(
          err.message,
          "Invalid response from metadata service: incorrect Metadata-Flavor header. Expected 'Google', got 'wrongHeader'",
        );
        scope.done();
        return true;
      },
    );
  });

  it('should throw a valuable error when header does not exist', async () => {
    const scope = nock(HOST).get(`${PATH}/${TYPE}/${PROPERTY}`).reply(200, {});

    await assert.rejects(
      async () => {
        await gcp.instance({property: PROPERTY});
      },
      err => {
        assert(err instanceof Error);
        assert.strictEqual(
          err.message,
          "Invalid response from metadata service: incorrect Metadata-Flavor header. Expected 'Google', got no header",
        );
        scope.done();
        return true;
      },
    );
  });

  it('should return large numbers as BigNumber values', async () => {
    const BIG_NUMBER_STRING = '3279739563200103600';
    const scope = nock(HOST)
      .get(`${PATH}/${TYPE}/${PROPERTY}`)
      .reply(200, BIG_NUMBER_STRING, HEADERS);
    const property = await gcp.instance(PROPERTY);
    // property should be a BigNumber.
    assert.strictEqual(property.valueOf(), BIG_NUMBER_STRING);
    scope.done();
  });

  it('should return small numbers normally', async () => {
    const NUMBER = 32797;
    const scope = nock(HOST)
      .get(`${PATH}/${TYPE}/${PROPERTY}`)
      .reply(200, `${NUMBER}`, HEADERS);
    const property = await gcp.instance(PROPERTY);
    assert.strictEqual(typeof property, 'number');
    assert.strictEqual(property, NUMBER);
    scope.done();
  });

  it('should deal with nested large numbers', async () => {
    const BIG_NUMBER_STRING = '3279739563200103600';
    const RESPONSE = `{ "v1": true, "v2": ${BIG_NUMBER_STRING} }`;
    const scope = nock(HOST)
      .get(`${PATH}/${TYPE}/${PROPERTY}`)
      .reply(200, RESPONSE, HEADERS);
    const response = await gcp.instance(PROPERTY);
    assert.strictEqual(response.v2.valueOf(), BIG_NUMBER_STRING);
    scope.done();
  });

  it('should accept an object with property and query fields', async () => {
    const QUERY = {key: 'value'};
    const scope = nock(HOST)
      .get(`${PATH}/project/${PROPERTY}`)
      .query(QUERY)
      .reply(200, {}, HEADERS);
    await gcp.project({property: PROPERTY, params: QUERY});
    scope.done();
  });

  it('should query the `universe` type', async () => {
    const PROPERTY = 'universe-domain';
    const VALUE = 'my-domain.com';

    const scope = nock(HOST)
      .get(`${PATH}/universe/${PROPERTY}`)
      .reply(200, VALUE, HEADERS);

    assert(await gcp.universe(PROPERTY), VALUE);

    scope.done();
  });

  it('should return error when flavor header is incorrect', async () => {
    const scope = nock(HOST)
      .get(`${PATH}/${TYPE}`)
      .reply(200, {}, {[gcp.HEADER_NAME.toLowerCase()]: 'Hazelnut'});
    await assert.rejects(
      gcp.instance(),
      /Invalid response from metadata service: incorrect Metadata-Flavor header./,
    );
    scope.done();
  });

  it('should return the request error', async () => {
    const scope = nock(HOST)
      .get(`${PATH}/${TYPE}`)
      .reply(404, undefined, HEADERS);

    try {
      await gcp.instance();
    } catch (err) {
      assert(err instanceof GaxiosError);
      assert.strictEqual(err.status, 404);
    }

    scope.done();
  });

  it('should retry if the initial request fails', async () => {
    const scope = nock(HOST)
      .get(`${PATH}/${TYPE}`)
      .times(2)
      .reply(500)
      .get(`${PATH}/${TYPE}`)
      .reply(200, {}, HEADERS);
    await gcp.instance();
    scope.done();
  });

  it('should retry with GCE_METADATA_HOST if first request fails', async () => {
    process.env.GCE_METADATA_HOST = '127.0.0.1:8080';
    const scope = nock(`http://${process.env.GCE_METADATA_HOST}`)
      .get(`${PATH}/${TYPE}`)
      .times(2)
      .reply(500)
      .get(`${PATH}/${TYPE}`)
      .reply(200, {}, HEADERS);
    await gcp.instance();
    scope.done();
  });

  it('should throw if request options are passed', async () => {
    await assert.rejects(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      gcp.instance({qs: {one: 'two'}} as any),
      /'qs' is not a valid configuration option. Please use 'params' instead\./,
    );
  });

  it('should throw if invalid options are passed', async () => {
    await assert.rejects(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      gcp.instance({fake: 'news'} as any),
      /'fake' is not a valid/,
    );
  });

  it('should retry on DNS errors', async () => {
    const scope = nock(HOST)
      .get(`${PATH}/${TYPE}`)
      .reply(500, {code: 'ETIMEDOUT'})
      .get(`${PATH}/${TYPE}`)
      .reply(200, {}, HEADERS);
    const data = await gcp.instance();
    scope.done();
    assert(data);
  });

  async function secondaryHostRequest(
    delay: number,
    responseType = 'success',
  ): Promise<void> {
    let secondary: nock.Scope;
    if (responseType === 'success') {
      secondary = nock(SECONDARY_HOST)
        .get(`${PATH}/${TYPE}`)
        .delayConnection(delay)
        .reply(200, {}, HEADERS);
    } else {
      secondary = nock(SECONDARY_HOST)
        .get(`${PATH}/${TYPE}`)
        .delayConnection(delay)
        .reply(500, {code: responseType});
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          secondary.done();
          return resolve();
        } catch (err) {
          console.info(err);
          return reject(err);
        }
      }, delay + 50);
    });
  }

  it('should make requests in bulk', async () => {
    const INSTANCE_VALUE = {instance: 'data'};
    const UNIVERSE_DOMAIN = 'my-domain.com';

    const scopes = [
      nock(HOST)
        .get(`${PATH}/universe/universe-domain`)
        .reply(200, UNIVERSE_DOMAIN, HEADERS),
      nock(HOST).get(`${PATH}/instance`).reply(200, INSTANCE_VALUE, HEADERS),
    ];

    const data = await gcp.bulk([
      {
        metadataKey: 'instance',
      },
      {
        metadataKey: 'universe/universe-domain',
      },
    ] as const);

    assert.deepEqual(data.instance, INSTANCE_VALUE);
    assert.deepEqual(data['universe/universe-domain'], UNIVERSE_DOMAIN);

    scopes.map(scope => scope.done());
  });

  describe('METADATA_SERVER_DETECTION', () => {
    it('should respect `assume-present`', async () => {
      process.env.METADATA_SERVER_DETECTION = 'assume-present';

      // if this is called, this the test would fail.
      const scope = nock(HOST);

      const isGCE = await gcp.isAvailable();
      assert.strictEqual(isGCE, true);

      scope.done();
    });

    it('should respect `bios-only` (residency = true)', async () => {
      process.env.METADATA_SERVER_DETECTION = 'bios-only';

      // if this is called, this the test would fail.
      const scope = nock(HOST);

      gcp.setGCPResidency(true);
      const isGCE = await gcp.isAvailable();
      assert.strictEqual(isGCE, true);

      scope.done();
    });

    it('should respect `bios-only` (residency = false)', async () => {
      process.env.METADATA_SERVER_DETECTION = 'bios-only';

      // if either are called, this the test would fail.
      nock(HOST).get(`${PATH}/${TYPE}`).reply(200, {}, HEADERS);
      nock(SECONDARY_HOST).get(`${PATH}/${TYPE}`).reply(200, {}, HEADERS);

      gcp.setGCPResidency(false);
      const isGCE = await gcp.isAvailable();
      assert.strictEqual(isGCE, false);

      nock.cleanAll();
    });

    it('should respect `none`', async () => {
      process.env.METADATA_SERVER_DETECTION = 'none';

      // if either are called, this the test would fail.
      nock(HOST).get(`${PATH}/${TYPE}`).reply(200, {}, HEADERS);
      nock(SECONDARY_HOST).get(`${PATH}/${TYPE}`).reply(200, {}, HEADERS);

      // if this is referenced, this test would fail.
      gcp.setGCPResidency(true);

      const isGCE = await gcp.isAvailable();
      assert.strictEqual(isGCE, false);
    });

    it('should respect `ping-only`', async () => {
      process.env.METADATA_SERVER_DETECTION = 'ping-only';

      gcp.resetIsAvailableCache();
      nock(HOST).get(`${PATH}/${TYPE}`).reply(200, {}, HEADERS);
      nock(SECONDARY_HOST).get(`${PATH}/${TYPE}`).reply(200, {}, HEADERS);

      // if this is referenced, this test would fail.
      gcp.setGCPResidency(false);

      const isGCE = await gcp.isAvailable();
      assert.strictEqual(isGCE, true);

      nock.cleanAll();
    });

    it('should ignore spaces and capitalization', async () => {
      process.env.METADATA_SERVER_DETECTION = '   ASSUME-present\t';

      // if this is called, this the test would fail.
      const scope = nock(HOST);

      const isGCE = await gcp.isAvailable();
      assert.strictEqual(isGCE, true);

      scope.done();
    });

    it('should throw on unknown values', async () => {
      process.env.METADATA_SERVER_DETECTION = 'abc';

      await assert.rejects(gcp.isAvailable, RangeError);
    });
  });

  it('should report isGCE if primary server returns 500 followed by 200', async () => {
    const secondary = secondaryHostRequest(500);
    const primary = nock(HOST)
      .get(`${PATH}/${TYPE}`)
      .reply(500)
      .get(`${PATH}/${TYPE}`)
      .reply(200, {}, HEADERS);
    const isGCE = await gcp.isAvailable();
    await secondary;
    primary.done();
    assert.strictEqual(isGCE, true);
  });

  it('should log error if DEBUG_AUTH is set', async () => {
    process.env.DEBUG_AUTH = 'true';

    const info = console.info;
    let err: Error | null = null;
    console.info = (_err: Error) => {
      err = _err;
    };

    const secondary = secondaryHostRequest(500, 'ENOTFOUND');
    const primary = nock(HOST)
      .get(`${PATH}/${TYPE}`)
      .replyWithError({code: 'ENOTFOUND'});
    await gcp.isAvailable();
    await secondary;
    primary.done();
    console.info = info;
    delete process.env.DEBUG_AUTH;
    assert.strictEqual(/All promises were rejected/.test(err!.message), true);
  });

  [
    'EHOSTDOWN',
    'EHOSTUNREACH',
    'ENETUNREACH',
    'ENOENT',
    'ENOTFOUND',
    'ECONNREFUSED',
  ].forEach(errorCode => {
    it(`should fail on isAvailable if ${errorCode} is returned for primary and secondary requests`, async () => {
      const secondary = secondaryHostRequest(500, errorCode);
      const primary = nock(HOST)
        .get(`${PATH}/${TYPE}`)
        .replyWithError({code: errorCode});
      const isGCE = await gcp.isAvailable();
      await secondary;
      primary.done();
      assert.strictEqual(false, isGCE);
    });
  });

  it('should return first successful response', async () => {
    const secondary = secondaryHostRequest(500);
    const primary = nock(HOST).get(`${PATH}/${TYPE}`).reply(404);
    const isGCE = await gcp.isAvailable();
    await secondary;
    primary.done();
    assert.strictEqual(true, isGCE);
  });

  it('should fail fast with GCE_METADATA_HOST 404 on isAvailable', async () => {
    process.env.GCE_METADATA_HOST = '127.0.0.1:8080';
    const primary = nock(`http://${process.env.GCE_METADATA_HOST}`)
      .get(`${PATH}/${TYPE}`)
      .reply(404);
    const isGCE = await gcp.isAvailable();
    primary.done();
    assert.strictEqual(false, isGCE);
  });

  it('should fail on isAvailable if request times out', async () => {
    void secondaryHostRequest(5000);
    const primary = nock(HOST)
      .get(`${PATH}/${TYPE}`)
      .delayConnection(3500)
      // this should never get called, as the 3000 timeout will trigger.
      .reply(200, {}, HEADERS);
    const isGCE = await gcp.isAvailable();
    // secondary is allowed to simply timeout in the aether, to avoid
    // having a test that waits 5000 ms.
    primary.done();
    assert.strictEqual(false, isGCE);
  });

  it('should fail on isAvailable if GCE_METADATA_HOST times out', async () => {
    process.env.GCE_METADATA_HOST = '127.0.0.1:8080';
    void secondaryHostRequest(5000);
    const primary = nock(`http://${process.env.GCE_METADATA_HOST}`)
      .get(`${PATH}/${TYPE}`)
      .delayConnection(3500)
      // this should never get called, as the 3000 timeout will trigger.
      .reply(200, {}, HEADERS);
    const isGCE = await gcp.isAvailable();
    // secondary is allowed to simply timeout in the aether, to avoid
    // having a test that waits 5000 ms.
    primary.done();
    assert.strictEqual(false, isGCE);
  });

  it('should report isGCE if GCE_METADATA_HOST responds with 200', async () => {
    process.env.GCE_METADATA_HOST = '127.0.0.1:8080';
    const scope = nock(`http://${process.env.GCE_METADATA_HOST}`)
      .get(`${PATH}/${TYPE}`)
      .reply(200, {}, HEADERS);
    assert.strictEqual(await gcp.isAvailable(), true);
    scope.done();
  });

  it('should report isGCE if secondary responds before primary', async () => {
    const secondary = secondaryHostRequest(10);
    const primary = nock(HOST)
      .get(`${PATH}/${TYPE}`)
      .delayConnection(3500)
      // this should never get called, as the 3000 timeout will trigger.
      .reply(200, {}, HEADERS);
    const isGCE = await gcp.isAvailable();
    await secondary;
    primary.done();
    assert.strictEqual(isGCE, true);
  });

  it('should fail fast on isAvailable if ENOENT is returned by secondary', async () => {
    const secondary = secondaryHostRequest(10, 'ENOENT');
    const primary = nock(HOST)
      .get(`${PATH}/${TYPE}`)
      .delayConnection(250)
      .replyWithError({code: 'ENOENT'});
    const isGCE = await gcp.isAvailable();
    await secondary;
    primary.done();
    assert.strictEqual(false, isGCE);
  });

  it('should return false on unexpected errors and warn', async () => {
    const primary = nock(HOST)
      .get(`${PATH}/${TYPE}`)
      .replyWithError({code: '🤡'});
    const secondary = nock(SECONDARY_HOST)
      .get(`${PATH}/${TYPE}`)
      .replyWithError({code: '🤡'});
    const done = new Promise<void>(resolve => {
      process.on('warning', warning => {
        assert.strictEqual(
          warning.toString().includes('unexpected error'),
          true,
        );
        return resolve();
      });
    });
    assert.strictEqual(await gcp.isAvailable(), false);
    primary.done();
    secondary.done();
    return done;
  });

  it('should report isGCE if secondary succeeds before primary fails', async () => {
    const secondary = secondaryHostRequest(10);
    const primary = nock(HOST)
      .get(`${PATH}/${TYPE}`)
      .delayConnection(200)
      // this should never get called, as the 3000 timeout will trigger.
      .reply(500, {}, HEADERS);
    await gcp.isAvailable();
    await secondary;
    await new Promise<void>(resolve => {
      setTimeout(() => {
        primary.done();
        return resolve();
      }, 500);
    });
  });

  it('should retry environment detection if DETECT_GCP_RETRIES >= 2', async () => {
    process.env.DETECT_GCP_RETRIES = '2';
    const primary = nock(HOST)
      .get(`${PATH}/${TYPE}`)
      .reply(500, {code: 'ENETUNREACH'})
      .get(`${PATH}/${TYPE}`)
      .reply(200, {}, HEADERS);
    const isGCE = await gcp.isAvailable();
    primary.done();
    assert.strictEqual(true, isGCE);
    delete process.env.DETECT_GCP_RETRIES;
  });

  it('should cache response from first isAvailable() call', async () => {
    const secondary = secondaryHostRequest(500);
    const primary = nock(HOST).get(`${PATH}/${TYPE}`).reply(200, {}, HEADERS);
    await gcp.isAvailable();
    // because we haven't created additional mocks, we expect this to fail
    // if we were not caching the first isAvailable() call:
    const isGCE = await gcp.isAvailable();
    await secondary;
    primary.done();
    assert.strictEqual(isGCE, true);
  });

  it('should only make one outbound request, if isAvailable() called in rapid succession', async () => {
    const secondary = secondaryHostRequest(500);
    const primary = nock(HOST).get(`${PATH}/${TYPE}`).reply(200, {}, HEADERS);
    void gcp.isAvailable();
    // because we haven't created additional mocks, we expect this to fail
    // if we were not caching the first isAvailable() call:
    const isGCE = await gcp.isAvailable();
    await secondary;
    primary.done();
    assert.strictEqual(isGCE, true);
  });

  it('resets cache when resetIsAvailableCache() is called', async () => {
    // we will attempt to hit the secondary and primary server twice,
    // mock accordingly.
    const secondary = secondaryHostRequest(250, 'ENOENT');
    const secondary2 = secondaryHostRequest(500, 'ENOENT');
    const primary = nock(HOST)
      .get(`${PATH}/${TYPE}`)
      .reply(200, {}, HEADERS)
      .get(`${PATH}/${TYPE}`)
      .replyWithError({code: 'ENOENT'});

    // Check whether we're in a GCP environment twice, resetting the cache
    // inbetween:
    await gcp.isAvailable();
    gcp.resetIsAvailableCache();
    const isGCE = await gcp.isAvailable();

    await secondary;
    await secondary2;
    primary.done();
    assert.strictEqual(isGCE, false);
  });

  describe('getGCPResidency', () => {
    it('should set and use `gcpResidencyCache`', () => {
      gcp.setGCPResidency(false);
      assert.equal(gcp.getGCPResidency(), false);
      assert.equal(gcp.gcpResidencyCache, false);

      gcp.setGCPResidency(true);
      assert.equal(gcp.getGCPResidency(), true);
      assert.equal(gcp.gcpResidencyCache, true);

      gcp.setGCPResidency(null);
      assert.equal(gcp.getGCPResidency(), gcp.gcpResidencyCache);
    });
  });

  describe('setGCPResidency', () => {
    it('should set `gcpResidencyCache`', () => {
      gcp.setGCPResidency(true);
      assert.equal(gcp.gcpResidencyCache, true);

      gcp.setGCPResidency(false);
      assert.equal(gcp.gcpResidencyCache, false);
    });

    it('should match gcp residency results by default', () => {
      // Set as GCP
      residency.setGCENetworkInterface(true);
      gcp.setGCPResidency();
      assert.equal(gcp.gcpResidencyCache, true);

      // Set as non-GCP
      residency.setNonGCP();
      gcp.setGCPResidency();
      assert.equal(gcp.gcpResidencyCache, false);
    });
  });

  describe('requestTimeout', () => {
    it('should return a request timeout of `0` when running on GCP', () => {
      gcp.setGCPResidency(true);
      assert.strictEqual(gcp.requestTimeout(), 0);
    });

    it('should return a request timeout of `3000` when not running on GCP', () => {
      gcp.setGCPResidency(false);
      assert.strictEqual(gcp.requestTimeout(), 3000);
    });
  });
});
