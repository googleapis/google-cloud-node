/**
 * Copyright 2014 Google Inc. All Rights Reserved.
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

import * as assert from 'assert';
import * as async from 'async';
import * as extend from 'extend';
import * as proxyquire from 'proxyquire';
import {util} from '@google-cloud/common';

// tslint:disable-next-line:variable-name
let Acl;
// tslint:disable-next-line:variable-name
let AclRoleAccessorMethods;
describe('storage/acl', () => {
  let promisified = false;
  const fakePromisify = {
    // tslint:disable-next-line:variable-name
    promisifyAll(Class) {
      if (Class.name === 'Acl') {
        promisified = true;
      }
    },
  };

  // tslint:disable-next-line:variable-name
  const {Storage} = require('../src');
  let acl;

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
      acl.request = reqOpts => {
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

      acl.request = reqOpts => {
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

      acl.request = reqOpts => {
        assert.strictEqual(reqOpts.qs.userProject, options.userProject);
        done();
      };

      acl.add(options, assert.ifError);
    });

    it('should execute the callback with an ACL object', done => {
      const apiResponse = {entity: ENTITY, role: ROLE};
      const expectedAclObject = {entity: ENTITY, role: ROLE};

      acl.makeAclObject_ = (obj) => {
        assert.deepStrictEqual(obj, apiResponse);
        return expectedAclObject;
      };

      acl.request = (reqOpts, callback) => {
        callback(null, apiResponse);
      };

      acl.add({entity: ENTITY, role: ROLE}, (err, aclObject) => {
        assert.ifError(err);
        assert.deepStrictEqual(aclObject, expectedAclObject);
        done();
      });
    });

    it('should execute the callback with an error', done => {
      acl.request = (reqOpts, callback) => {
        callback(ERROR);
      };

      acl.add({entity: ENTITY, role: ROLE}, (err) => {
        assert.deepStrictEqual(err, ERROR);
        done();
      });
    });

    it('should execute the callback with apiResponse', done => {
      const resp = {success: true};

      acl.request = (reqOpts, callback) => {
        callback(null, resp);
      };

      acl.add({entity: ENTITY, role: ROLE}, (err, acls, apiResponse) => {
        assert.deepStrictEqual(resp, apiResponse);
        done();
      });
    });
  });

  describe('delete', () => {
    it('should make the correct api request', done => {
      acl.request = reqOpts => {
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

      acl.request = reqOpts => {
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

      acl.request = reqOpts => {
        assert.strictEqual(reqOpts.qs.userProject, options.userProject);
        done();
      };

      acl.delete(options, assert.ifError);
    });

    it('should execute the callback with an error', done => {
      acl.request = (reqOpts, callback) => {
        callback(ERROR);
      };

      acl.delete({entity: ENTITY}, (err) => {
        assert.deepStrictEqual(err, ERROR);
        done();
      });
    });

    it('should execute the callback with apiResponse', done => {
      const resp = {success: true};

      acl.request = (reqOpts, callback) => {
        callback(null, resp);
      };

      acl.delete({entity: ENTITY}, (err, apiResponse) => {
        assert.deepStrictEqual(resp, apiResponse);
        done();
      });
    });
  });

  describe('get', () => {
    describe('all ACL objects', () => {
      it('should make the correct API request', done => {
        acl.request = reqOpts => {
          assert.strictEqual(reqOpts.uri, '');

          done();
        };

        acl.get(assert.ifError);
      });

      it('should accept a configuration object', done => {
        const generation = 1;

        acl.request = reqOpts => {
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

        acl.makeAclObject_ = (obj, index) => {
          return expectedAclObjects[index];
        };

        acl.request = (reqOpts, callback) => {
          callback(null, apiResponse);
        };

        acl.get((err, aclObjects) => {
          assert.ifError(err);
          assert.deepStrictEqual(aclObjects, expectedAclObjects);
          done();
        });
      });
    });

    describe('ACL object for an entity', () => {
      it('should get a specific ACL object', done => {
        acl.request = reqOpts => {
          assert.strictEqual(reqOpts.uri, '/' + encodeURIComponent(ENTITY));

          done();
        };

        acl.get({entity: ENTITY}, assert.ifError);
      });

      it('should accept a configuration object', done => {
        const generation = 1;

        acl.request = reqOpts => {
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

        acl.request = reqOpts => {
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

        acl.request = (reqOpts, callback) => {
          callback(null, apiResponse);
        };

        acl.get({entity: ENTITY}, (err, aclObject) => {
          assert.ifError(err);
          assert.deepStrictEqual(aclObject, expectedAclObject);
          done();
        });
      });
    });

    it('should execute the callback with an error', done => {
      acl.request = (reqOpts, callback) => {
        callback(ERROR);
      };

      acl.get((err) => {
        assert.deepStrictEqual(err, ERROR);
        done();
      });
    });

    it('should execute the callback with apiResponse', done => {
      const resp = {success: true};

      acl.request = (reqOpts, callback) => {
        callback(null, resp);
      };

      acl.get((err, acls, apiResponse) => {
        assert.deepStrictEqual(resp, apiResponse);
        done();
      });
    });
  });

  describe('update', () => {
    it('should make the correct API request', done => {
      acl.request = reqOpts => {
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

      acl.request = reqOpts => {
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

      acl.request = reqOpts => {
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

      acl.request = (reqOpts, callback) => {
        callback(null, apiResponse);
      };

      acl.update({entity: ENTITY, role: ROLE}, (err, aclObject) => {
        assert.ifError(err);
        assert.deepStrictEqual(aclObject, expectedAclObject);
        done();
      });
    });

    it('should execute the callback with an error', done => {
      acl.request = (reqOpts, callback) => {
        callback(ERROR);
      };

      acl.update({entity: ENTITY, role: ROLE}, (err) => {
        assert.deepStrictEqual(err, ERROR);
        done();
      });
    });

    it('should execute the callback with apiResponse', done => {
      const resp = {success: true};

      acl.request = (reqOpts, callback) => {
        callback(null, resp);
      };

      const config = {entity: ENTITY, role: ROLE};
      acl.update(config, (err, acls, apiResponse) => {
        assert.deepStrictEqual(resp, apiResponse);
        done();
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

  describe('request', () => {
    it('should make the correct request', done => {
      const uri = '/uri';

      const reqOpts = {
        uri,
      };

      acl.request_ = (reqOpts_, callback) => {
        assert.strictEqual(reqOpts_, reqOpts);
        assert.strictEqual(reqOpts_.uri, PATH_PREFIX + uri);
        callback();  // done()
      };

      acl.request(reqOpts, done);
    });
  });
});

describe('storage/AclRoleAccessorMethods', () => {
  let aclEntity;

  beforeEach(() => {
    aclEntity = new AclRoleAccessorMethods();
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
    it('should call parent method', done => {
      const userName = 'email@example.com';
      const role = 'fakerole';

      aclEntity.add = (options, callback) => {
        assert.deepStrictEqual(options, {
          entity: 'user-' + userName,
          role,
        });

        callback();
      };

      aclEntity.delete = (options, callback) => {
        assert.deepStrictEqual(options, {
          entity: 'allUsers',
          role,
        });

        callback();
      };

      aclEntity._assignAccessMethods(role);

      async.parallel(
          [
            next => {
              // The method name should be in plural form. (fakeroles vs
              // fakerole)
              aclEntity.fakeroles.addUser(userName, next);
            },
            next => {
              aclEntity.fakeroles.deleteAllUsers(next);
            },
          ],
          done);
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
      aclEntity.add = (...args) => {
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

      const expectedOptions = extend(
          {
            entity: 'user-' + fakeUser,
            role: fakeRole,
          },
          fakeOptions);

      aclEntity.add = (options) => {
        assert.deepStrictEqual(options, expectedOptions);
        done();
      };

      aclEntity._assignAccessMethods(fakeRole);
      aclEntity.fakeroles.addUser(fakeUser, fakeOptions, assert.ifError);
    });
  });
});
