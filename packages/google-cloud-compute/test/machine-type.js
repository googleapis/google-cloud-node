/**
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

const assert = require('assert');
const nodeutil = require('util');
const proxyquire = require('proxyquire');
const ServiceObject = require('@google-cloud/common').ServiceObject;

function FakeServiceObject() {
  this.calledWith_ = arguments;
  ServiceObject.apply(this, arguments);
}

nodeutil.inherits(FakeServiceObject, ServiceObject);

describe('MachineType', function() {
  let MachineType;
  let machineType;
  const ZONE_NAME = 'zone-1';
  const ZONE = {
    name: ZONE_NAME,
  };

  const MACHINE_TYPE_NAME = 'g1-small';

  before(function() {
    MachineType = proxyquire('../src/machine-type.js', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
      },
    });
  });

  beforeEach(function() {
    machineType = new MachineType(ZONE, MACHINE_TYPE_NAME);
  });

  describe('instantiation', function() {
    it('should localize the zone', function() {
      assert.strictEqual(machineType.zone, ZONE);
    });

    it('should localize the name', function() {
      assert.strictEqual(machineType.name, MACHINE_TYPE_NAME);
    });

    it('should inherit from ServiceObject', function() {
      assert(machineType instanceof ServiceObject);

      const calledWith = machineType.calledWith_[0];

      assert.strictEqual(calledWith.parent, ZONE);
      assert.strictEqual(calledWith.baseUrl, '/machineTypes');
      assert.strictEqual(calledWith.id, MACHINE_TYPE_NAME);
      assert.deepStrictEqual(calledWith.methods, {
        exists: true,
        get: true,
        getMetadata: true,
      });
    });
  });
});
