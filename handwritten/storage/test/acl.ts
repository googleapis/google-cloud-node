/**
 * Copyright 2019 Google LLC
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

import {DecorateRequestOptions, Metadata, util} from '@google-cloud/common';
import * as assert from 'assert';
import * as proxyquire from 'proxyquire';

// tslint:disable-next-line:variable-name no-any
let Acl: any;
// tslint:disable-next-line:variable-name
let AclRoleAccessorMethods: Function;
describe('storage/acl', () => {
  let promisified = false;
  const fakePromisify = {
    // tslint:disable-next-line:variable-name
    promisifyAll(Class: Function) {
      if (Class.name === 'Acl') {
        promisified = true;
      }
    },
  };

  // tslint:disable-next-line:variable-name
  const {Storage} = require('../src');
  // tslint:disable-next-line: no-any
  let acl: any;

  const ERROR = new Error('Error.');
  const MAKE_REQ = util.noop;
  const PATH_PREFIX = '/acl';
  const ROLE = Storage.acl.OWNER_ROLE;
  const ENTITY = 'user-user@example.com';

  before(() => {
    const aclModule = proxyquire('../src/acl.js', {
      '@google-cloud/promisify': fakePromisify,
    });
    Acl = aclModule.Acl;
    AclRoleAccessorMethods = aclModule.AclRoleAccessorMethods;
  });

  beforeEach(() => {
    acl = new Acl({request: MAKE_REQ, pathPrefix: PATH_PREFIX});
  });

  describe('initialization', () => {
    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should assign makeReq and pathPrefix', () => {
      assert.strictEqual(acl.pathPrefix, PATH_PREFIX);
      assert.strictEqual(acl.request_, MAKE_REQ);
    });
  });

  describe('add', () => {
    it('should make the correct api request', done => {
      acl.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '');
        assert.deepStrictEqual(reqOpts.json, {entity: ENTITY, role: ROLE});
        done();
      };

      acl.add({entity: ENTITY, role: ROLE}, assert.ifError);
    });

    it('should set the generation', done => {
      const options = {
        entity: ENTITY,
        role: ROLE,
        generation: 8,
      };

      acl.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.qs.generation, options.generation);
        done();
      };

      acl.add(options, assert.ifError);
    });

    it('should set the userProject', done => {
      const options = {
        entity: ENTITY,
        role: ROLE,
        userProject: 'grape-spaceship-123',
      };

      acl.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.qs.userProject, options.userProject);
        done();
      };

      acl.add(options, assert.ifError);
    });

    it('should execute the callback with an ACL object', done => {
      const apiResponse = {entity: ENTITY, role: ROLE};
      const expectedAclObject = {entity: ENTITY, role: ROLE};

      acl.makeAclObject_ = (obj: {}) => {
        assert.deepStrictEqual(obj, apiResponse);
        return expectedAclObject;
      };

      acl.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(null, apiResponse);
      };

      acl.add({entity: ENTITY, role: ROLE}, (err: Error, aclObject: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(aclObject, expectedAclObject);
        done();
      });
    });

    it('should execute the callback with an error', done => {
      acl.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(ERROR);
      };

      acl.add({entity: ENTITY, role: ROLE}, (err: Error) => {
        assert.deepStrictEqual(err, ERROR);
        done();
      });
    });

    it('should execute the callback with apiResponse', done => {
      const resp = {success: true};

      acl.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(null, resp);
      };

      acl.add(
        {entity: ENTITY, role: ROLE},
        (err: Error, acls: {}, apiResponse: Metadata) => {
          assert.deepStrictEqual(resp, apiResponse);
          done();
        }
      );
    });
  });

  describe('delete', () => {
    it('should make the correct api request', done => {
      acl.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.method, 'DELETE');
        assert.strictEqual(reqOpts.uri, '/' + encodeURIComponent(ENTITY));

        done();
      };

      acl.delete({entity: ENTITY}, assert.ifError);
    });

    it('should set the generation', done => {
      const options = {
        entity: ENTITY,
        generation: 8,
      };

      acl.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.qs.generation, options.generation);
        done();
      };

      acl.delete(options, assert.ifError);
    });

    it('should set the userProject', done => {
      const options = {
        entity: ENTITY,
        role: ROLE,
        userProject: 'grape-spaceship-123',
      };

      acl.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.qs.userProject, options.userProject);
        done();
      };

      acl.delete(options, assert.ifError);
    });

    it('should execute the callback with an error', done => {
      acl.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(ERROR);
      };

      acl.delete({entity: ENTITY}, (err: Error) => {
        assert.deepStrictEqual(err, ERROR);
        done();
      });
    });

    it('should execute the callback with apiResponse', done => {
      const resp = {success: true};

      acl.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(null, resp);
      };

      acl.delete({entity: ENTITY}, (err: Error, apiResponse: Metadata) => {
        assert.deepStrictEqual(resp, apiResponse);
        done();
      });
    });
  });

  describe('get', () => {
    describe('all ACL objects', () => {
      it('should make the correct API request', done => {
        acl.request = (reqOpts: DecorateRequestOptions) => {
          assert.strictEqual(reqOpts.uri, '');

          done();
        };

        acl.get(assert.ifError);
      });

      it('should accept a configuration object', done => {
        const generation = 1;

        acl.request = (reqOpts: DecorateRequestOptions) => {
          assert.strictEqual(reqOpts.qs.generation, generation);

          done();
        };

        acl.get({generation}, assert.ifError);
      });

      it('should pass an array of acl objects to the callback', done => {
        const apiResponse = {
          items: [
            {entity: ENTITY, role: ROLE},
            {entity: ENTITY, role: ROLE},
            {entity: ENTITY, role: ROLE},
          ],
        };

        const expectedAclObjects = [
          {entity: ENTITY, role: ROLE},
          {entity: ENTITY, role: ROLE},
          {entity: ENTITY, role: ROLE},
        ];

        acl.makeAclObject_ = (obj: {}, index: number) => {
          return expectedAclObjects[index];
        };

        acl.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
          callback(null, apiResponse);
        };

        acl.get((err: Error, aclObjects: Array<{}>) => {
          assert.ifError(err);
          assert.deepStrictEqual(aclObjects, expectedAclObjects);
          done();
        });
      });
    });

    describe('ACL object for an entity', () => {
      it('should get a specific ACL object', done => {
        acl.request = (reqOpts: DecorateRequestOptions) => {
          assert.strictEqual(reqOpts.uri, '/' + encodeURIComponent(ENTITY));

          done();
        };

        acl.get({entity: ENTITY}, assert.ifError);
      });

      it('should accept a configuration object', done => {
        const generation = 1;

        acl.request = (reqOpts: DecorateRequestOptions) => {
          assert.strictEqual(reqOpts.qs.generation, generation);

          done();
        };

        acl.get({entity: ENTITY, generation}, assert.ifError);
      });

      it('should set the userProject', done => {
        const options = {
          entity: ENTITY,
          userProject: 'grape-spaceship-123',
        };

        acl.request = (reqOpts: DecorateRequestOptions) => {
          assert.strictEqual(reqOpts.qs.userProject, options.userProject);
          done();
        };

        acl.get(options, assert.ifError);
      });

      it('should pass an acl object to the callback', done => {
        const apiResponse = {entity: ENTITY, role: ROLE};
        const expectedAclObject = {entity: ENTITY, role: ROLE};

        acl.makeAclObject_ = () => {
          return expectedAclObject;
        };

        acl.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
          callback(null, apiResponse);
        };

        acl.get({entity: ENTITY}, (err: Error, aclObject: {}) => {
          assert.ifError(err);
          assert.deepStrictEqual(aclObject, expectedAclObject);
          done();
        });
      });
    });

    it('should execute the callback with an error', done => {
      acl.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(ERROR);
      };

      acl.get((err: Error) => {
        assert.deepStrictEqual(err, ERROR);
        done();
      });
    });

    it('should execute the callback with apiResponse', done => {
      const resp = {success: true};

      acl.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(null, resp);
      };

      acl.get((err: Error, acls: Array<{}>, apiResponse: Metadata) => {
        assert.deepStrictEqual(resp, apiResponse);
        done();
      });
    });
  });

  describe('update', () => {
    it('should make the correct API request', done => {
      acl.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.method, 'PUT');
        assert.strictEqual(reqOpts.uri, '/' + encodeURIComponent(ENTITY));
        assert.deepStrictEqual(reqOpts.json, {role: ROLE});

        done();
      };

      acl.update({entity: ENTITY, role: ROLE}, assert.ifError);
    });

    it('should set the generation', done => {
      const options = {
        entity: ENTITY,
        role: ROLE,
        generation: 8,
      };

      acl.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.qs.generation, options.generation);
        done();
      };

      acl.update(options, assert.ifError);
    });

    it('should set the userProject', done => {
      const options = {
        entity: ENTITY,
        role: ROLE,
        userProject: 'grape-spaceship-123',
      };

      acl.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.qs.userProject, options.userProject);
        done();
      };

      acl.update(options, assert.ifError);
    });

    it('should pass an acl object to the callback', done => {
      const apiResponse = {entity: ENTITY, role: ROLE};
      const expectedAclObject = {entity: ENTITY, role: ROLE};

      acl.makeAclObject_ = () => {
        return expectedAclObject;
      };

      acl.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(null, apiResponse);
      };

      acl.update({entity: ENTITY, role: ROLE}, (err: Error, aclObject: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(aclObject, expectedAclObject);
        done();
      });
    });

    it('should execute the callback with an error', done => {
      acl.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(ERROR);
      };

      acl.update({entity: ENTITY, role: ROLE}, (err: Error) => {
        assert.deepStrictEqual(err, ERROR);
        done();
      });
    });

    it('should execute the callback with apiResponse', done => {
      const resp = {success: true};

      acl.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(null, resp);
      };

      const config = {entity: ENTITY, role: ROLE};
      acl.update(
        config,
        (err: Error, acls: Array<{}>, apiResponse: Metadata) => {
          assert.deepStrictEqual(resp, apiResponse);
          done();
        }
      );
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

  describe('request', () => {
    it('should make the correct request', done => {
      const uri = '/uri';

      const reqOpts = {
        uri,
      };

      acl.request_ = (reqOpts_: DecorateRequestOptions, callback: Function) => {
        assert.strictEqual(reqOpts_, reqOpts);
        assert.strictEqual(reqOpts_.uri, PATH_PREFIX + uri);
        callback(); // done()
      };

      acl.request(reqOpts, done);
    });
  });
});

describe('storage/AclRoleAccessorMethods', () => {
  // tslint:disable-next-line: no-any
  let aclEntity: any;

  beforeEach(() => {
    // tslint:disable-next-line: no-any
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
        fakeOptions
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
