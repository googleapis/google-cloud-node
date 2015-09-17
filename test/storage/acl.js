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

var Acl = require('../../lib/storage/acl.js');
var assert = require('assert');
var async = require('async');
var Storage = require('../../lib/storage/index.js');
var util = require('../../lib/common/util.js');

describe('storage/acl', function() {
  var acl;
  var ERROR = new Error('Error.');
  var MAKE_REQ = util.noop;
  var PATH_PREFIX = '/acl';
  var ROLE = Storage.acl.OWNER_ROLE;
  var ENTITY = 'user-user@example.com';

  beforeEach(function() {
    acl = new Acl({ makeReq: MAKE_REQ, pathPrefix: PATH_PREFIX });
  });

  describe('initialization', function() {
    it('should assign makeReq and pathPrefix', function() {
      assert.equal(acl.makeReq, MAKE_REQ);
      assert.equal(acl.pathPrefix, PATH_PREFIX);
    });
  });

  describe('add', function() {
    it('makes the correct api request', function(done) {
      acl.makeReq_ = function(method, path, query, body) {
        assert.equal(method, 'POST');
        assert.equal(path, '');
        assert.strictEqual(query, null);
        assert.deepEqual(body, { entity: ENTITY, role: ROLE });
        done();
      };

      acl.add({ entity: ENTITY, role: ROLE }, assert.ifError);
    });

    it('executes the callback with an ACL object', function(done) {
      var apiResponse = { entity: ENTITY, role: ROLE };
      var expectedAclObject = { entity: ENTITY, role: ROLE };

      acl.makeAclObject_ = function(obj) {
        assert.deepEqual(obj, apiResponse);
        return expectedAclObject;
      };

      acl.makeReq_ = function(method, path, query, body, callback) {
        callback(null, apiResponse);
      };

      acl.add({ entity: ENTITY, role: ROLE }, function(err, aclObject) {
        assert.ifError(err);
        assert.deepEqual(aclObject, expectedAclObject);
        done();
      });
    });

    it('executes the callback with an error', function(done) {
      acl.makeReq_ = function(method, path, query, body, callback) {
        callback(ERROR);
      };

      acl.add({ entity: ENTITY, role: ROLE }, function(err) {
        assert.deepEqual(err, ERROR);
        done();
      });
    });

    it('executes the callback with apiResponse', function(done) {
      var resp = { success: true };
      acl.makeReq_ = function(method, path, query, body, callback) {
        callback(null, resp);
      };

      acl.add({ entity: ENTITY, role: ROLE }, function(err, acls, apiResponse) {
        assert.deepEqual(resp, apiResponse);
        done();
      });
    });
  });

  describe('delete', function() {
    it('makes the correct api request', function(done) {
      acl.makeReq_ = function(method, path, query, body) {
        assert.equal(method, 'DELETE');
        assert.equal(path, '/' + encodeURIComponent(ENTITY));
        assert.strictEqual(query, null);
        assert.strictEqual(body, null);

        done();
      };

      acl.delete({ entity: ENTITY }, assert.ifError);
    });

    it('should execute the callback with an error', function(done) {
      acl.makeReq_ = function(method, path, query, body, callback) {
        callback(ERROR);
      };

      acl.delete({ entity: ENTITY }, function(err) {
        assert.deepEqual(err, ERROR);
        done();
      });
    });

    it('should execute the callback with apiResponse', function(done) {
      var resp = { success: true };
      acl.makeReq_ = function(method, path, query, body, callback) {
        callback(null, resp);
      };

      acl.delete({ entity: ENTITY }, function(err, apiResponse) {
        assert.deepEqual(resp, apiResponse);
        done();
      });
    });
  });

  describe('get', function() {
    describe('all ACL objects', function() {
      it('should make the correct API request', function(done) {
        acl.makeReq_ = function(method, path, query, body) {
          assert.equal(method, 'GET');
          assert.equal(path, '');
          assert.strictEqual(query, null);
          assert.strictEqual(body, null);

          done();
        };

        acl.get(assert.ifError);
      });

      it('should accept a configuration object', function(done) {
        var generation = 1;

        acl.makeReq_ = function(method, path, query) {
          assert.equal(query.generation, generation);

          done();
        };

        acl.get({ generation: generation }, assert.ifError);
      });

      it('should pass an array of acl objects to the callback', function(done) {
        var apiResponse = {
          items: [
            { entity: ENTITY, role: ROLE },
            { entity: ENTITY, role: ROLE },
            { entity: ENTITY, role: ROLE }
          ]
        };

        var expectedAclObjects = [
          { entity: ENTITY, role: ROLE },
          { entity: ENTITY, role: ROLE },
          { entity: ENTITY, role: ROLE }
        ];

        acl.makeAclObject_ = function(obj, index) {
          return expectedAclObjects[index];
        };

        acl.makeReq_ = function(method, path, query, body, callback) {
          callback(null, apiResponse);
        };

        acl.get(function(err, aclObjects) {
          assert.ifError(err);
          assert.deepEqual(aclObjects, expectedAclObjects);
          done();
        });
      });
    });

    describe('ACL object for an entity', function() {
      it('should get a specific ACL object', function(done) {
        acl.makeReq_ = function(method, path, query, body) {
          assert.equal(method, 'GET');
          assert.equal(path, '/' + encodeURIComponent(ENTITY));
          assert.strictEqual(query, null);
          assert.strictEqual(body, null);

          done();
        };

        acl.get({ entity: ENTITY }, assert.ifError);
      });

      it('should accept a configuration object', function(done) {
        var generation = 1;

        acl.makeReq_ = function(method, path, query) {
          assert.equal(query.generation, generation);

          done();
        };

        acl.get({ entity: ENTITY, generation: generation }, assert.ifError);
      });

      it('should pass an acl object to the callback', function(done) {
        var apiResponse = { entity: ENTITY, role: ROLE };
        var expectedAclObject = { entity: ENTITY, role: ROLE };

        acl.makeAclObject_ = function() {
          return expectedAclObject;
        };

        acl.makeReq_ = function(method, path, query, body, callback) {
          callback(null, apiResponse);
        };

        acl.get({ entity: ENTITY }, function(err, aclObject) {
          assert.ifError(err);
          assert.deepEqual(aclObject, expectedAclObject);
          done();
        });
      });
    });

    it('should execute the callback with an error', function(done) {
      acl.makeReq_ = function(method, path, query, body, callback) {
        callback(ERROR);
      };

      acl.get(function(err) {
        assert.deepEqual(err, ERROR);
        done();
      });
    });

    it('should execute the callback with apiResponse', function(done) {
      var resp = { success: true };
      acl.makeReq_ = function(method, path, query, body, callback) {
        callback(null, resp);
      };

      acl.get(function(err, acls, apiResponse) {
        assert.deepEqual(resp, apiResponse);
        done();
      });
    });
  });

  describe('update', function() {
    it('should make the correct API request', function(done) {
      acl.makeReq_ = function(method, path, query, body) {
        assert.equal(method, 'PUT');
        assert.equal(path, '/' + encodeURIComponent(ENTITY));
        assert.strictEqual(query, null);
        assert.deepEqual(body, { role: ROLE });

        done();
      };

      acl.update({ entity: ENTITY, role: ROLE }, assert.ifError);
    });

    it('should pass an acl object to the callback', function(done) {
      var apiResponse = { entity: ENTITY, role: ROLE };
      var expectedAclObject = { entity: ENTITY, role: ROLE };

      acl.makeAclObject_ = function() {
        return expectedAclObject;
      };

      acl.makeReq_ = function(method, path, query, body, callback) {
        callback(null, apiResponse);
      };

      acl.update({ entity: ENTITY, role: ROLE }, function(err, aclObject) {
        assert.ifError(err);
        assert.deepEqual(aclObject, expectedAclObject);
        done();
      });
    });

    it('should execute the callback with an error', function(done) {
      acl.makeReq_ = function(method, path, query, body, callback) {
        callback(ERROR);
      };

      acl.update({ entity: ENTITY, role: ROLE }, function(err) {
        assert.deepEqual(err, ERROR);
        done();
      });
    });

    it('should execute the callback with apiResponse', function(done) {
      var resp = { success: true };
      acl.makeReq_ = function(method, path, query, body, callback) {
        callback(null, resp);
      };

      var config = { entity: ENTITY, role: ROLE };
      acl.update(config, function(err, acls, apiResponse) {
        assert.deepEqual(resp, apiResponse);
        done();
      });
    });
  });

  describe('makeAclObject_', function() {
    it('should return an ACL object from an API response', function() {
      var projectTeam = {
        projectNumber: '283748374',
        team: 'awesome'
      };

      var apiResponse = {
        entity: ENTITY,
        role: ROLE,
        projectTeam: projectTeam,
        extra: 'ignored',
        things: true
      };

      assert.deepEqual(acl.makeAclObject_(apiResponse), {
        entity: ENTITY,
        role: ROLE,
        projectTeam: projectTeam
      });
    });
  });

  describe('makeReq_', function() {
    it('patches requests through to the makeReq function', function(done) {
      var method = 'POST';
      var path = '/path';
      var query = { a: 'b', c: 'd' };
      var body = { a: 'b', c: 'd' };
      var callback = util.noop;

      // This is overriding the method we passed on instantiation.
      acl.makeReq = function(m, p, q, b, c) {
        assert.equal(m, method);
        assert.equal(p, PATH_PREFIX + path);
        assert.deepEqual(q, query);
        assert.deepEqual(b, body);
        assert.equal(c, callback);

        done();
      };

      acl.makeReq_(method, path, query, body, callback);
    });
  });
});

describe('storage/AclRoleAccessorMethods', function() {
  var aclEntity;

  beforeEach(function() {
    aclEntity = new Acl.AclRoleAccessorMethods();
  });

  describe('initialization', function() {
    it('should assign access methods for every role object', function() {
      var expectedApi = [
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
        'deleteUser'
      ];

      var actualOwnersApi = Object.keys(aclEntity.owners);
      assert.deepEqual(actualOwnersApi, expectedApi);

      var actualReadersApi = Object.keys(aclEntity.readers);
      assert.deepEqual(actualReadersApi, expectedApi);

      var actualWritersApi = Object.keys(aclEntity.writers);
      assert.deepEqual(actualWritersApi, expectedApi);
    });
  });

  describe('_assignAccessMethods', function() {
    it('should call parent method', function(done) {
      var userName = 'email@example.com';
      var role = 'fakerole';

      aclEntity.add = function(options, callback) {
        assert.deepEqual(options, {
          entity: 'user-' + userName,
          role: role
        });

        callback();
      };

      aclEntity.delete = function(options, callback) {
        assert.deepEqual(options, {
          entity: 'allUsers',
          role: role
        });

        callback();
      };

      aclEntity._assignAccessMethods(role);

      async.parallel([
        function(next) {
          // The method name should be in plural form. (fakeroles vs fakerole)
          aclEntity.fakeroles.addUser(userName, next);
        },
        function(next) {
          aclEntity.fakeroles.deleteAllUsers(next);
        }
      ], done);
    });
  });
});
