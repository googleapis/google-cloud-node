// Copyright 2021 Google LLC
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

'use strict';

const assert = require('assert');
const expect = require('chai').expect;
const uuid = require('uuid');
const compute = require('../');

const DiskType = compute.protos.google.cloud.compute.v1.AttachedDisk.Type;

describe('Compute', () => {
  const region = 'us-central1';
  const zone = 'us-central1-a';
  let client = null;
  let project = null;
  let dirty = false;
  let operationsClient = null;

  before(async () => {
    operationsClient = new compute.ZoneOperationsClient({fallback: 'rest'});
    project = await operationsClient.getProjectId();
  });

  describe('Addresses', () => {
    let ADDRESS_NAME = null;

    before(async () => {
      client = new compute.AddressesClient({fallback: 'rest'});
      ADDRESS_NAME = generateName('address');
    });

    after(async () => {
      if (dirty) {
        await client.delete({
          project,
          region,
          address: ADDRESS_NAME,
        });
      }
    });

    it('addresses create, get', async () => {
      const addressResource = {
        name: ADDRESS_NAME,
        description: 'тест',
      };

      await client.insert({
        project,
        region,
        addressResource,
      });
      dirty = true;

      const [getResponse] = await client.get({
        project,
        region,
        address: addressResource.name,
      });

      assert.strictEqual(getResponse.name, ADDRESS_NAME);
    });

    it('addresses list, aggregated_list', async () => {
      const [listResponse] = await client.list({
        project,
        region,
      });
      let presented = false;
      for (const item of listResponse) {
        if (item.name === ADDRESS_NAME) {
          presented = true;
        }
      }
      assert.strictEqual(
        presented,
        true,
        'address was not found in list response.'
      );

      const iterable = client.aggregatedListAsync({
        project,
      });
      presented = false;
      for await (const [location, addressesObject] of iterable) {
        if (location === 'regions/' + region) {
          const addresses = addressesObject.addresses;
          addresses.forEach(address => {
            if (address.name === ADDRESS_NAME) {
              presented = true;
            }
          });
        }
      }
      assert.strictEqual(
        presented,
        true,
        'address was not found in aggregated list response.'
      );
    });

    it('addresses delete', async () => {
      await client.delete({
        project,
        region,
        address: ADDRESS_NAME,
      });
      dirty = false;
    });
  });

  describe('Instances', () => {
    let INSTANCE_NAME = null;

    before(async () => {
      client = new compute.InstancesClient({fallback: 'rest'});
      INSTANCE_NAME = generateName('instance');
    });

    after(async function () {
      this.timeout(10 * 60 * 1000);
      if (dirty) {
        await client.delete({
          project,
          zone,
          instance: INSTANCE_NAME,
        });
      }
    });

    it('instance create and fetch', async function () {
      this.timeout(10 * 60 * 1000);
      const instanceResource = {
        name: INSTANCE_NAME,
        description: 'test',
        machineType: `zones/${zone}/machineTypes/n1-standard-1`,
        disks: [
          {
            boot: true,
            initializeParams: {
              sourceImage:
                'projects/debian-cloud/global/images/family/debian-10',
            },
            autoDelete: true,
            type: DiskType.PERSISTENT,
          },
        ],
        networkInterfaces: [
          {
            name: 'default',
          },
        ],
      };
      const [insertResponse] = await client.insert({
        project,
        zone,
        instanceResource,
      });
      dirty = true;

      await waitZonalOperation(insertResponse);

      const [getResponse] = await client.get({
        project,
        zone,
        instance: INSTANCE_NAME,
      });

      assert.strictEqual(getResponse.name, INSTANCE_NAME);
      assert.strictEqual(
        getResponse.shieldedInstanceConfig.enableSecureBoot,
        false
      );
    });

    it('instances patch', async function () {
      this.timeout(10 * 60 * 1000);
      const [stopResponse] = await client.stop({
        project,
        zone,
        instance: INSTANCE_NAME,
      });

      await waitZonalOperation(stopResponse);

      const [patchResponse] = await client.updateShieldedInstanceConfig({
        project,
        zone,
        shieldedInstanceConfigResource: {
          enableSecureBoot: true,
        },
        instance: INSTANCE_NAME,
      });

      await waitZonalOperation(patchResponse);

      const [fetched] = await client.get({
        project,
        zone,
        instance: INSTANCE_NAME,
      });
      assert.strictEqual(fetched.shieldedInstanceConfig.enableSecureBoot, true);
    });

    it('API errors propagated', async () => {
      let error = null;
      try {
        await client.get({
          project,
          zone,
          instance: 'notexist555',
        });
      } catch (err) {
        error = err;
      }
      expect(error).to.be.an('Error');
      expect(error.message).to.contain('was not found');
      expect(error.code).to.equal(404);
    });

    it('instances update desc to an empty string', async function () {
      this.timeout(10 * 60 * 1000);
      const [instance] = await client.get({
        project,
        zone,
        instance: INSTANCE_NAME,
      });
      assert.strictEqual(instance.description, 'test');
      instance.description = '';
      const [updateOp] = await client.update({
        project: project,
        zone: zone,
        instance: INSTANCE_NAME,
        instanceResource: instance,
      });
      await waitZonalOperation(updateOp);
      const [fetched] = await client.get({
        project,
        zone,
        instance: INSTANCE_NAME,
      });
      assert.strictEqual(fetched.description, '');
    });
  });

  describe('InstancesGroup Manager', () => {
    let clientTemplates = null;
    let clientInstanceGroups = null;
    let instanceGroupName = null;
    let instanceTemplateName = null;

    before(async () => {
      clientTemplates = new compute.InstanceTemplatesClient({fallback: 'rest'});
      clientInstanceGroups = new compute.InstanceGroupManagersClient({
        fallback: 'rest',
      });
      instanceGroupName = generateName('instance-group');
      instanceTemplateName = generateName('instance-group');
    });

    after(async function () {
      this.timeout(10 * 60 * 1000);
      const [deleteIgm] = await clientInstanceGroups.delete({
        project,
        zone,
        instanceGroupManager: instanceGroupName,
      });
      await waitZonalOperation(deleteIgm);

      await clientTemplates.delete({
        project,
        instanceTemplate: instanceTemplateName,
      });
    });

    it('create instance group manager with size 0', async function () {
      //  we want to test that body field can be set to 0
      this.timeout(10 * 60 * 1000);
      const instanceTemplate = {
        name: instanceTemplateName,
        properties: {
          disks: [
            {
              boot: true,
              initializeParams: {
                sourceImage:
                  'projects/debian-cloud/global/images/family/debian-10',
              },
              autoDelete: true,
              type: DiskType.PERSISTENT,
            },
          ],
          networkInterfaces: [
            {
              name: 'default',
            },
          ],
          machineType: 'n1-standard-1',
        },
      };
      const [insertOp] = await clientTemplates.insert({
        instanceTemplateResource: instanceTemplate,
        project: project,
      });
      await waitGlobalOperation(insertOp);
      const instanceGroupManager = {
        baseInstanceName: 'tsgapic',
        instanceTemplate: insertOp.targetLink,
        name: instanceGroupName,
        targetSize: 0,
      };
      const [insertGroup] = await clientInstanceGroups.insert({
        project,
        zone,
        instanceGroupManagerResource: instanceGroupManager,
      });
      await waitZonalOperation(insertGroup);

      const [fetch] = await clientInstanceGroups.get({
        project,
        zone,
        instanceGroupManager: instanceGroupName,
      });
      assert.strictEqual(fetch.targetSize, 0);
    });

    it('Resize group to 1 and then back to 0.', async function () {
      //  we want to test that query param field can be set to 0
      this.timeout(10 * 60 * 1000);
      const [resize] = await clientInstanceGroups.resize({
        project,
        zone,
        instanceGroupManager: instanceGroupName,
        size: 1,
      });
      await waitZonalOperation(resize);

      const [fetch] = await clientInstanceGroups.get({
        project,
        zone,
        instanceGroupManager: instanceGroupName,
      });
      assert.strictEqual(fetch.targetSize, 1);

      const [resizeBack] = await clientInstanceGroups.resize({
        project,
        zone,
        instanceGroupManager: instanceGroupName,
        size: 0,
      });
      await waitZonalOperation(resizeBack);

      const [resized] = await clientInstanceGroups.get({
        project,
        zone,
        instanceGroupManager: instanceGroupName,
      });
      assert.strictEqual(resized.targetSize, 0);
    });
  });

  async function waitZonalOperation(operation) {
    for (;;) {
      const [getResp] = await operationsClient.wait({
        project,
        zone,
        operation: operation.name,
      });
      if (getResp.status === 'DONE') {
        //  b/191191972
        break;
      } else {
        await new Promise(resolve => setTimeout(resolve, 4000));
      }
    }
  }

  describe('Pagination', () => {
    let client = null;

    before(async () => {
      client = new compute.AcceleratorTypesClient({fallback: 'rest'});
    });

    it('Pagination in list response', async () => {
      const [listResponse] = await client.list({
        project,
        zone,
        maxResults: 1,
      });
      let presented = false;
      for (const item of listResponse) {
        if (item.name === 'nvidia-tesla-t4') {
          presented = true;
        }
      }
      assert.strictEqual(
        presented,
        true,
        'accelerator type nvidia-tesla-t4 was not found in list response.'
      );
    });

    it('Pagination in map responses', async function () {
      this.timeout(10 * 60 * 1000);
      const iterable = client.aggregatedListAsync({
        project,
        maxResults: 2,
      });
      let presented = false;
      for await (const [location, acceleratorTypesObj] of iterable) {
        if (location === 'zones/' + zone) {
          const acceleratorTypes = acceleratorTypesObj.acceleratorTypes;
          acceleratorTypes.forEach(acceleratorType => {
            if (acceleratorType.name === 'nvidia-tesla-t4') {
              presented = true;
            }
          });
        }
      }
      assert.strictEqual(
        presented,
        true,
        'accelerator type nvidia-tesla-t4 was not found in map response.'
      );
    });
  });

  async function waitGlobalOperation(operation) {
    const globalClient = new compute.GlobalOperationsClient({fallback: 'rest'});
    for (;;) {
      const [getResp] = await globalClient.get({
        project,
        operation: operation.name,
      });
      if (getResp.status === 'DONE') {
        //  b/191191972
        break;
      } else {
        await new Promise(resolve => setTimeout(resolve, 4000));
      }
    }
  }

  function generateName(customPrefix) {
    const TESTS_PREFIX = 'tsgapic';
    const resourceId = uuid.v4().split('-')[0];
    return `${TESTS_PREFIX}-${customPrefix}-${resourceId}`;
  }
});
