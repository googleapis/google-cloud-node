/**
 * Copyright 2015 Google Inc. All Rights Reserved.
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

import * as arrify from 'arrify';
import * as assert from 'assert';
import * as extend from 'extend';
import * as proxyquire from 'proxyquire';
import {Service, ServiceConfig, ServiceOptions} from '@google-cloud/common';
import {util} from '@google-cloud/common';
import * as promisify from '@google-cloud/promisify';
import {RequestOptions} from 'http';
import {CoreOptions, OptionsWithUri, Response} from 'request';
import {Zone} from '../src';

let extended = false;
const fakePaginator = {
  paginator: {
    extend(esClass: Function, methods: string[]) {
      if (esClass.name !== 'DNS') {
        return;
      }
      extended = true;
      methods = arrify(methods);
      assert.strictEqual(esClass.name, 'DNS');
      assert.deepStrictEqual(methods, ['getZones']);
    },
    streamify(methodName: string) {
      return methodName;
    },
  },
};

class FakeService extends Service {
  calledWith_: IArguments;
  constructor(config: ServiceConfig, options?: ServiceOptions) {
    super(config, options);
    this.calledWith_ = arguments;
  }
}

const fakeUtil = extend({}, util, {
  makeAuthenticatedRequestFactory() {},
});
const originalFakeUtil = extend(true, {}, fakeUtil);

let promisified = false;
const fakePromisify = extend({}, promisify, {
  // tslint:disable-next-line:variable-name
  promisifyAll(esClass: Function, options: promisify.PromisifyAllOptions) {
    if (esClass.name !== 'DNS') {
      return;
    }
    promisified = true;
    assert.deepStrictEqual(options.exclude, ['zone']);
  },
});

class FakeZone {
  calledWith_: IArguments;
  constructor() {
    this.calledWith_ = arguments;
  }
}

describe('DNS', () => {
  // tslint:disable-next-line: no-any
  let DNS: any;
  // tslint:disable-next-line: no-any
  let dns: any;

  const PROJECT_ID = 'project-id';

  before(() => {
    DNS = proxyquire('../src', {
            '@google-cloud/common': {
              Service: FakeService,
            },
            '@google-cloud/paginator': fakePaginator,
            '@google-cloud/promisify': fakePromisify,
            './zone': {
              Zone: FakeZone,
            }
          }).DNS;
  });

  beforeEach(() => {
    extend(fakeUtil, originalFakeUtil);
    dns = new DNS({
      projectId: PROJECT_ID,
    });
  });

  describe('instantiation', () => {
    it('should extend the correct methods', () => {
      assert(extended);  // See `fakePaginator.extend`
    });

    it('should streamify the correct methods', () => {
      assert.strictEqual(dns.getZonesStream, 'getZones');
    });

    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should inherit from Service', () => {
      assert(dns instanceof Service);

      const calledWith = dns.calledWith_[0];

      const baseUrl = 'https://www.googleapis.com/dns/v1';
      assert.strictEqual(calledWith.baseUrl, baseUrl);
      assert.deepStrictEqual(calledWith.scopes, [
        'https://www.googleapis.com/auth/ndev.clouddns.readwrite',
        'https://www.googleapis.com/auth/cloud-platform',
      ]);
      assert.deepStrictEqual(
          calledWith.packageJson, require('../../package.json'));
    });
  });

  describe('createZone', () => {
    const zoneName = 'zone-name';
    const config = {dnsName: 'dns-name'};

    it('should throw if a zone name is not provided', () => {
      assert.throws(() => {
        dns.createZone();
      }, /A zone name is required/);
    });

    it('should throw if a zone dnsname is not provided', () => {
      assert.throws(() => {
        dns.createZone(zoneName);
      }, /A zone dnsName is required/);

      assert.throws(() => {
        dns.createZone(zoneName, {});
      }, /A zone dnsName is required/);
    });

    it('should use a provided description', done => {
      const cfg = extend({}, config, {description: 'description'});

      dns.request = (reqOpts: CoreOptions) => {
        assert.strictEqual(reqOpts.json.description, cfg.description);
        done();
      };

      dns.createZone(zoneName, cfg, assert.ifError);
    });

    it('should default a description to ""', done => {
      dns.request = (reqOpts: CoreOptions) => {
        assert.strictEqual(reqOpts.json.description, '');
        done();
      };

      dns.createZone(zoneName, config, assert.ifError);
    });

    it('should make the correct API request', done => {
      dns.request = (reqOpts: OptionsWithUri) => {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/managedZones');
        const expectedBody = extend({}, config, {
          name: zoneName,
          description: '',
        });
        assert.deepStrictEqual(reqOpts.json, expectedBody);

        done();
      };

      dns.createZone(zoneName, config, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        dns.request = (reqOpts: {}, callback: Function) => {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error and API response', done => {
        dns.createZone(
            zoneName, config,
            (err: Error, zone: Zone, apiResponse_: Response) => {
              assert.strictEqual(err, error);
              assert.strictEqual(zone, null);
              assert.strictEqual(apiResponse_, apiResponse);
              done();
            });
      });
    });

    describe('success', () => {
      const apiResponse = {name: zoneName};
      const zone = {};

      beforeEach(() => {
        dns.request = (reqOpts: {}, callback: Function) => {
          callback(null, apiResponse);
        };

        dns.zone = () => {
          return zone;
        };
      });

      it('should create a zone from the response', done => {
        dns.zone = (name: string) => {
          assert.strictEqual(name, apiResponse.name);
          setImmediate(done);
          return zone;
        };

        dns.createZone(zoneName, config, assert.ifError);
      });

      it('should execute callback with zone and API response', done => {
        dns.createZone(
            zoneName, config,
            (err: Error, zone_: Zone, apiResponse_: Response) => {
              assert.ifError(err);
              assert.strictEqual(zone_, zone);
              assert.strictEqual(apiResponse_, apiResponse);

              done();
            });
      });

      it('should set the metadata to the response', done => {
        dns.createZone(zoneName, config, (err: Error, zone: Zone) => {
          assert.strictEqual(zone.metadata, apiResponse);
          done();
        });
      });
    });
  });

  describe('getZones', () => {
    it('should make the correct request', done => {
      const query = {a: 'b', c: 'd'};

      dns.request = (reqOpts: OptionsWithUri) => {
        assert.strictEqual(reqOpts.uri, '/managedZones');
        assert.strictEqual(reqOpts.qs, query);

        done();
      };

      dns.getZones(query, assert.ifError);
    });

    it('should use an empty query if one was not provided', done => {
      dns.request = (reqOpts: CoreOptions) => {
        assert.strictEqual(Object.keys(reqOpts.qs).length, 0);
        done();
      };

      dns.getZones(assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        dns.request = (reqOpts: {}, callback: Function) => {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error and API response', done => {
        dns.getZones(
            {},
            (err: Error, zones: Zone[], nextQuery: {},
             apiResponse_: Response) => {
              assert.strictEqual(err, error);
              assert.strictEqual(zones, null);
              assert.strictEqual(nextQuery, null);
              assert.strictEqual(apiResponse_, apiResponse);

              done();
            });
      });
    });

    describe('success', () => {
      const zone = {name: 'zone-1', a: 'b', c: 'd'};
      const apiResponse = {managedZones: [zone]};

      beforeEach(() => {
        dns.request = (reqOpts: {}, callback: Function) => {
          callback(null, apiResponse);
        };

        dns.zone = () => {
          return zone;
        };
      });

      it('should create zones from the response', done => {
        dns.zone = (zoneName: string) => {
          assert.strictEqual(zoneName, zone.name);
          setImmediate(done);
          return zone;
        };

        dns.getZones({}, assert.ifError);
      });

      it('should set a nextQuery if necessary', done => {
        const apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token',
        });

        const query = {a: 'b', c: 'd'};
        const originalQuery = extend({}, query);

        dns.request = (reqOpts: {}, callback: Function) => {
          callback(null, apiResponseWithNextPageToken);
        };

        dns.getZones(query, (err: Error, zones: Zone[], nextQuery: {}) => {
          assert.ifError(err);

          // Check the original query wasn't modified.
          assert.deepStrictEqual(query, originalQuery);

          assert.deepStrictEqual(
              nextQuery, extend({}, query, {
                pageToken: apiResponseWithNextPageToken.nextPageToken,
              }));

          done();
        });
      });

      it('should execute callback with zones and API response', done => {
        dns.getZones(
            {},
            (err: Error, zones: Zone[], nextQuery: {},
             apiResponse_: Response) => {
              assert.ifError(err);
              assert.strictEqual(zones[0], zone);
              assert.strictEqual(nextQuery, null);
              assert.strictEqual(apiResponse_, apiResponse);

              done();
            });
      });

      it('should assign metadata to zones', done => {
        dns.getZones({}, (err: Error, zones: Zone[]) => {
          assert.ifError(err);
          assert.strictEqual(zones[0].metadata, zone);
          done();
        });
      });
    });
  });

  describe('zone', () => {
    it('should throw if a name is not provided', () => {
      assert.throws(() => {
        dns.zone();
      }, /A zone name is required/);
    });

    it('should return a Zone', () => {
      const newZoneName = 'new-zone-name';
      const newZone = dns.zone(newZoneName);
      assert(newZone instanceof FakeZone);
      assert.strictEqual(newZone.calledWith_[0], dns);
      assert.strictEqual(newZone.calledWith_[1], newZoneName);
    });
  });
});
