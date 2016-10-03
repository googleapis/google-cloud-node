/**
 * Copyright 2016, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const proxyquire = require(`proxyquire`).noCallThru();

describe(`dns:quickstart`, () => {
  let dnsMock, DNSMock;
  const error = new Error(`error`);

  before(() => {
    dnsMock = {
      getZones: sinon.stub().yields(error)
    };
    DNSMock = sinon.stub().returns(dnsMock);
  });

  it(`should handle error`, () => {
    proxyquire(`../quickstart`, {
      '@google-cloud/dns': DNSMock
    });

    assert.equal(DNSMock.calledOnce, true);
    assert.deepEqual(DNSMock.firstCall.args, [{ projectId: 'YOUR_PROJECT_ID' }]);
    assert.equal(dnsMock.getZones.calledOnce, true);
    assert.deepEqual(dnsMock.getZones.firstCall.args.slice(0, -1), []);
    assert.equal(console.error.calledOnce, true);
    assert.deepEqual(console.error.firstCall.args, [error]);
  });
});
