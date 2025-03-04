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

import assert from 'assert';
import {describe, it, before, beforeEach} from 'mocha';
import {Storage} from '../src/storage.js';
import {AccessControlObject, Acl, AclRoleAccessorMethods} from '../src/acl.js';
import {StorageTransport} from '../src/storage-transport.js';
import * as sinon from 'sinon';
import {Bucket} from '../src/bucket.js';
import {GaxiosError, GaxiosResponse} from 'gaxios';

describe('storage/acl', () => {
  let acl: Acl;
  let storageTransport: StorageTransport;
  let bucket: Bucket;
  let sandbox: sinon.SinonSandbox;

  const ERROR = new Error('Error.');
  const PATH_PREFIX = '/acl';
  const ROLE = Storage.acl.OWNER_ROLE;
  const PROJECT_TEAM = {
    projectNumber: '1234',
    team: 'editors',
  };
  const ENTITY = 'user-user@example.com';

  before(() => {
    sandbox = sinon.createSandbox();
    storageTransport = sandbox.createStubInstance(StorageTransport);
    bucket = sandbox.createStubInstance(Bucket);
    bucket.baseUrl = '';
    bucket.name = 'bucket';
  });

  beforeEach(() => {
    acl = new Acl({pathPrefix: PATH_PREFIX, storageTransport, parent: bucket});
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('initialization', () => {
    it('should assign makeReq and pathPrefix', () => {
      assert.strictEqual(acl.pathPrefix, PATH_PREFIX);
    });
  });

  describe('add', () => {
    it('should make the correct api request', () => {
      acl.storageTransport.makeRequest = sandbox.stub().callsFake(reqOpts => {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.url, '/bucket/acl');
        assert.deepStrictEqual(reqOpts.body, {entity: ENTITY, role: ROLE});
        return Promise.resolve();
      });

      acl.add({entity: ENTITY, role: ROLE}, assert.ifError);
    });

    it('should set the generation', () => {
      const options = {
        entity: ENTITY,
        role: ROLE,
        generation: 8,
      };

      acl.storageTransport.makeRequest = sandbox.stub().callsFake(reqOpts => {
        assert.strictEqual(
          reqOpts.queryParameters!.generation,
          options.generation,
        );
        return Promise.resolve();
      });

      acl.add(options, assert.ifError);
    });

    it('should set the userProject', () => {
      const options = {
        entity: ENTITY,
        role: ROLE,
        userProject: 'grape-spaceship-123',
      };

      acl.storageTransport.makeRequest = sandbox.stub().callsFake(reqOpts => {
        assert.strictEqual(
          reqOpts.queryParameters!.userProject,
          options.userProject,
        );
        return Promise.resolve();
      });

      acl.add(options, assert.ifError);
    });

    it('should execute the callback with an ACL object', () => {
      const apiResponse = {
        entity: ENTITY,
        role: ROLE,
        projectTeam: PROJECT_TEAM,
      };
      const expectedAclObject: AccessControlObject = {
        entity: ENTITY,
        role: ROLE,
        projectTeam: PROJECT_TEAM,
      };

      acl.makeAclObject_ = obj => {
        assert.deepStrictEqual(obj, apiResponse);
        return expectedAclObject;
      };

      acl.storageTransport.makeRequest = sandbox.stub().resolves(apiResponse);

      acl.add({entity: ENTITY, role: ROLE}, (err, aclObject) => {
        assert.ifError(err);
        assert.deepStrictEqual(aclObject, expectedAclObject);
      });
    });

    it('should execute the callback with an error', () => {
      acl.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          callback(ERROR as GaxiosError);
          return Promise.resolve();
        });

      acl.add({entity: ENTITY, role: ROLE}, err => {
        assert.deepStrictEqual(err, ERROR);
      });
    });

    it('should execute the callback with apiResponse', () => {
      const resp = {success: true};
      acl.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((resOpts, callback) => {
          callback(null, resp);
          return Promise.resolve();
        });

      acl.add({entity: ENTITY, role: ROLE}, (err, acls, apiResponse) => {
        assert.deepStrictEqual(resp, apiResponse);
      });
    });
  });

  describe('delete', () => {
    it('should make the correct api request', () => {
      acl.storageTransport.makeRequest = sandbox.stub().callsFake(reqOpts => {
        assert.strictEqual(reqOpts.method, 'DELETE');
        assert.strictEqual(reqOpts.url, `/bucket/acl/${ENTITY}`);
        return Promise.resolve();
      });

      acl.delete({entity: ENTITY}, assert.ifError);
    });

    it('should set the generation', () => {
      const options = {
        entity: ENTITY,
        generation: 8,
      };
      acl.storageTransport.makeRequest = sandbox.stub().callsFake(reqOpts => {
        assert.strictEqual(
          reqOpts.queryParameters!.generation,
          options.generation,
        );
        return Promise.resolve();
      });

      acl.delete(options, assert.ifError);
    });

    it('should set the userProject', () => {
      const options = {
        entity: ENTITY,
        role: ROLE,
        userProject: 'grape-spaceship-123',
      };

      acl.storageTransport.makeRequest = sandbox.stub().callsFake(reqOpts => {
        assert.strictEqual(
          reqOpts.queryParameters!.userProject,
          options.userProject,
        );
        return Promise.resolve();
      });

      acl.delete(options, assert.ifError);
    });

    it('should execute the callback with an error', () => {
      acl.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          callback(ERROR as GaxiosError);
          return Promise.resolve();
        });

      acl.delete({entity: ENTITY}, err => {
        assert.deepStrictEqual(err, ERROR);
      });
    });

    it('should execute the callback with apiResponse', () => {
      const resp = {success: true};

      acl.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          callback(null, resp);
          return Promise.resolve();
        });

      acl.delete({entity: ENTITY}, (err, apiResponse) => {
        assert.deepStrictEqual(resp, apiResponse);
      });
    });
  });

  describe('get', () => {
    describe('all ACL objects', () => {
      it('should make the correct API request', () => {
        acl.storageTransport.makeRequest = sandbox.stub().callsFake(reqOpts => {
          assert.strictEqual(reqOpts.url, '/bucket/acl');

          return Promise.resolve();
        });
        acl.get(assert.ifError);
      });

      it('should accept a configuration object', () => {
        const generation = 1;

        acl.storageTransport.makeRequest = sandbox.stub().callsFake(reqOpts => {
          assert.strictEqual(reqOpts.queryParameters!.generation, generation);
          return Promise.resolve();
        });

        acl.get({generation, entity: ENTITY}, assert.ifError);
      });

      it('should pass an array of acl objects to the callback', () => {
        const apiResponse = {
          items: [
            {entity: ENTITY, role: ROLE, projectTeam: PROJECT_TEAM},
            {entity: ENTITY, role: ROLE, projectTeam: PROJECT_TEAM},
            {entity: ENTITY, role: ROLE, projectTeam: PROJECT_TEAM},
          ],
        };

        const expectedAclObjects = [
          {entity: ENTITY, role: ROLE, projectTeam: PROJECT_TEAM},
          {entity: ENTITY, role: ROLE, projectTeam: PROJECT_TEAM},
          {entity: ENTITY, role: ROLE, projectTeam: PROJECT_TEAM},
        ];

        let index = 0;
        acl.makeAclObject_ = () => {
          return expectedAclObjects[index++];
        };

        acl.storageTransport.makeRequest = sandbox
          .stub()
          .callsFake((reqOpts, callback) => {
            callback(null, apiResponse);
            return Promise.resolve();
          });

        acl.get((err, aclObjects) => {
          assert.ifError(err);
          assert.deepStrictEqual(aclObjects, expectedAclObjects);
        });
      });
    });

    describe('ACL object for an entity', () => {
      it('should get a specific ACL object', () => {
        acl.storageTransport.makeRequest = sandbox.stub().callsFake(reqOpts => {
          assert.strictEqual(reqOpts.url, `/bucket/acl/${ENTITY}`);
          return Promise.resolve();
        });

        acl.get({entity: ENTITY}, assert.ifError);
      });

      it('should accept a configuration object', () => {
        const generation = 1;

        acl.storageTransport.makeRequest = sandbox.stub().callsFake(reqOpts => {
          assert.strictEqual(reqOpts.queryParameters!.generation, generation);
          return Promise.resolve();
        });

        acl.get({entity: ENTITY, generation}, assert.ifError);
      });

      it('should set the userProject', () => {
        const options = {
          entity: ENTITY,
          userProject: 'grape-spaceship-123',
        };

        acl.storageTransport.makeRequest = sandbox.stub().callsFake(reqOpts => {
          assert.strictEqual(
            reqOpts.queryParameters!.userProject,
            options.userProject,
          );
          return Promise.resolve();
        });

        acl.get(options, assert.ifError);
      });

      it('should pass an acl object to the callback', () => {
        const apiResponse = {entity: ENTITY, role: ROLE, projectTeam: ROLE};
        const expectedAclObject = {
          entity: ENTITY,
          role: ROLE,
          projectTeam: PROJECT_TEAM,
        };

        acl.makeAclObject_ = () => {
          return expectedAclObject;
        };

        acl.storageTransport.makeRequest = sandbox
          .stub()
          .callsFake((reqOpts, callback) => {
            callback(null, apiResponse);
            return Promise.resolve();
          });

        acl.get({entity: ENTITY}, (err, aclObject) => {
          assert.ifError(err);
          assert.deepStrictEqual(aclObject, expectedAclObject);
        });
      });
    });

    it('should execute the callback with an error', () => {
      acl.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          callback(ERROR as GaxiosError);
          return Promise.resolve();
        });

      acl.get(err => {
        assert.deepStrictEqual(err, ERROR);
      });
    });

    it('should execute the callback with apiResponse', () => {
      const resp = {success: true};
      const gaxiosResponse: GaxiosResponse = {
        config: {},
        data: resp,
        status: 0,
        statusText: '',
        headers: [],
        request: {
          responseURL: '',
        },
      };

      acl.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          callback(null, resp, gaxiosResponse);
          return Promise.resolve();
        });

      acl.get((err, acls, apiResponse) => {
        assert.deepStrictEqual(resp, apiResponse!.data);
      });
    });
  });

  describe('update', () => {
    it('should make the correct API request', () => {
      acl.storageTransport.makeRequest = sandbox.stub().callsFake(reqOpts => {
        assert.strictEqual(reqOpts.method, 'PUT');
        assert.strictEqual(reqOpts.url, `/bucket/acl/${ENTITY}`);
        assert.deepStrictEqual(reqOpts.body, {role: ROLE});
        return Promise.resolve();
      });

      acl.update({entity: ENTITY, role: ROLE}, assert.ifError);
    });

    it('should set the generation', () => {
      const options = {
        entity: ENTITY,
        role: ROLE,
        generation: 8,
      };

      acl.storageTransport.makeRequest = sandbox.stub().callsFake(reqOpts => {
        assert.strictEqual(
          reqOpts.queryParameters!.generation,
          options.generation,
        );
        return Promise.resolve();
      });

      acl.update(options, assert.ifError);
    });

    it('should set the userProject', () => {
      const options = {
        entity: ENTITY,
        role: ROLE,
        userProject: 'grape-spaceship-123',
      };

      acl.storageTransport.makeRequest = sandbox.stub().callsFake(reqOpts => {
        assert.strictEqual(
          reqOpts.queryParameters!.userProject,
          options.userProject,
        );
        return Promise.resolve();
      });

      acl.update(options, assert.ifError);
    });

    it('should pass with an acl object to the callback', () => {
      const apiResponse = {
        entity: ENTITY,
        role: ROLE,
        projectTeam: PROJECT_TEAM,
      };
      const expectedAclObject = {
        entity: ENTITY,
        role: ROLE,
        projectTeam: PROJECT_TEAM,
      };

      acl.makeAclObject_ = () => {
        return expectedAclObject;
      };

      acl.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          callback(null, apiResponse);
          return Promise.resolve();
        });

      acl.update({entity: ENTITY, role: ROLE}, (err, aclObject) => {
        assert.ifError(err);
        assert.deepStrictEqual(aclObject, expectedAclObject);
      });
    });

    it('should execute the callback with an error', () => {
      acl.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          callback(ERROR as GaxiosError);
          return Promise.resolve();
        });

      acl.update({entity: ENTITY, role: ROLE}, err => {
        assert.deepStrictEqual(err, ERROR);
      });
    });

    it('should execute the callback with apiResponse', () => {
      const resp = {success: true};

      acl.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          callback(null, resp);
          return Promise.resolve();
        });

      const config = {entity: ENTITY, role: ROLE};
      acl.update(config, (err, acls, apiResponse) => {
        assert.deepStrictEqual(resp, apiResponse);
      });
    });
  });

  describe('makeAclObject_', () => {
    it('should return an ACL object from an API response', () => {
      const projectTeam = {
        projectNumber: '283748374',
        team: 'awesome',
      };

      const apiResponse = {
        entity: ENTITY,
        role: ROLE,
        projectTeam,
        extra: 'ignored',
        things: true,
      };

      assert.deepStrictEqual(acl.makeAclObject_(apiResponse), {
        entity: ENTITY,
        role: ROLE,
        projectTeam,
      });
    });
  });
});

describe('storage/AclRoleAccessorMethods', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let aclEntity: any;

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    aclEntity = new (AclRoleAccessorMethods as any)();
  });

  describe('initialization', () => {
    it('should assign access methods for every role object', () => {
      const expectedApi = [
        'addAllAuthenticatedUsers',
        'deleteAllAuthenticatedUsers',

        'addAllUsers',
        'deleteAllUsers',

        'addDomain',
        'deleteDomain',

        'addGroup',
        'deleteGroup',

        'addProject',
        'deleteProject',

        'addUser',
        'deleteUser',
      ];

      const actualOwnersApi = Object.keys(aclEntity.owners);
      assert.deepStrictEqual(actualOwnersApi, expectedApi);

      const actualReadersApi = Object.keys(aclEntity.readers);
      assert.deepStrictEqual(actualReadersApi, expectedApi);

      const actualWritersApi = Object.keys(aclEntity.writers);
      assert.deepStrictEqual(actualWritersApi, expectedApi);
    });
  });

  describe('_assignAccessMethods', () => {
    it('should call parent method', async () => {
      const userName = 'email@example.com';
      const role = 'fakerole';

      aclEntity.add = async (options: {}) => {
        assert.deepStrictEqual(options, {
          entity: 'user-' + userName,
          role,
        });
      };

      aclEntity.delete = async (options: {}) => {
        assert.deepStrictEqual(options, {
          entity: 'allUsers',
          role,
        });
      };

      aclEntity._assignAccessMethods(role);

      await Promise.all([
        aclEntity.fakeroles.addUser(userName),
        aclEntity.fakeroles.deleteAllUsers(),
      ]);
    });

    it('should return the parent methods return value', () => {
      const fakeReturn = {};

      aclEntity.add = () => {
        return fakeReturn;
      };

      aclEntity._assignAccessMethods('fakerole');

      const value = aclEntity.fakeroles.addUser('email@example.com');
      assert.strictEqual(value, fakeReturn);
    });

    it('should not pass in the callback if undefined', done => {
      aclEntity.add = (...args: Array<{}>) => {
        assert.strictEqual(args.length, 1);
        done();
      };

      aclEntity._assignAccessMethods('fakerole');
      aclEntity.fakeroles.addUser('email@example.com', undefined);
    });

    it('should optionally accept options', done => {
      const fakeRole = 'fakerole';
      const fakeUser = 'email@example.com';
      const fakeOptions = {
        userProject: 'grape-spaceship-123',
      };

      const expectedOptions = Object.assign(
        {
          entity: 'user-' + fakeUser,
          role: fakeRole,
        },
        fakeOptions,
      );

      aclEntity.add = (options: {}) => {
        assert.deepStrictEqual(options, expectedOptions);
        done();
      };

      aclEntity._assignAccessMethods(fakeRole);
      aclEntity.fakeroles.addUser(fakeUser, fakeOptions, assert.ifError);
    });
  });
});
