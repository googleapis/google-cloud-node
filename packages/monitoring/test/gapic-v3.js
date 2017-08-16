/*
 * Copyright 2017, Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

var assert = require('assert');
var monitoring = require('../src');

var FAKE_STATUS_CODE = 1;
var error = new Error();
error.code = FAKE_STATUS_CODE;

describe('GroupServiceClient', function() {
  describe('listGroups', function() {
    it('invokes listGroups without error', function(done) {
      var client = monitoring.v3.group();

      // Mock request
      var formattedName = client.projectPath("[PROJECT]");
      var request = {
          name : formattedName
      };

      // Mock response
      var nextPageToken = '';
      var groupElement = {};
      var group = [groupElement];
      var expectedResponse = {
          nextPageToken : nextPageToken,
          group : group
      };

      // Mock Grpc layer
      client._listGroups = function(actualRequest, options, callback) {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.group);
      };

      client.listGroups(request, function(err, response) {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.group);
        done();
      });
    });

    it('invokes listGroups with error', function(done) {
      var client = monitoring.v3.group();

      // Mock request
      var formattedName = client.projectPath("[PROJECT]");
      var request = {
          name : formattedName
      };

      // Mock Grpc layer
      client._listGroups = mockSimpleGrpcMethod(request, null, error);

      client.listGroups(request, function(err, response) {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('getGroup', function() {
    it('invokes getGroup without error', function(done) {
      var client = monitoring.v3.group();

      // Mock request
      var formattedName = client.groupPath("[PROJECT]", "[GROUP]");
      var request = {
          name : formattedName
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var displayName = 'displayName1615086568';
      var parentName = 'parentName1015022848';
      var filter = 'filter-1274492040';
      var isCluster = false;
      var expectedResponse = {
          name : name2,
          displayName : displayName,
          parentName : parentName,
          filter : filter,
          isCluster : isCluster
      };

      // Mock Grpc layer
      client._getGroup = mockSimpleGrpcMethod(request, expectedResponse);

      client.getGroup(request, function(err, response) {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getGroup with error', function(done) {
      var client = monitoring.v3.group();

      // Mock request
      var formattedName = client.groupPath("[PROJECT]", "[GROUP]");
      var request = {
          name : formattedName
      };

      // Mock Grpc layer
      client._getGroup = mockSimpleGrpcMethod(request, null, error);

      client.getGroup(request, function(err, response) {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('createGroup', function() {
    it('invokes createGroup without error', function(done) {
      var client = monitoring.v3.group();

      // Mock request
      var formattedName = client.projectPath("[PROJECT]");
      var group = {};
      var request = {
          name : formattedName,
          group : group
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var displayName = 'displayName1615086568';
      var parentName = 'parentName1015022848';
      var filter = 'filter-1274492040';
      var isCluster = false;
      var expectedResponse = {
          name : name2,
          displayName : displayName,
          parentName : parentName,
          filter : filter,
          isCluster : isCluster
      };

      // Mock Grpc layer
      client._createGroup = mockSimpleGrpcMethod(request, expectedResponse);

      client.createGroup(request, function(err, response) {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createGroup with error', function(done) {
      var client = monitoring.v3.group();

      // Mock request
      var formattedName = client.projectPath("[PROJECT]");
      var group = {};
      var request = {
          name : formattedName,
          group : group
      };

      // Mock Grpc layer
      client._createGroup = mockSimpleGrpcMethod(request, null, error);

      client.createGroup(request, function(err, response) {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('updateGroup', function() {
    it('invokes updateGroup without error', function(done) {
      var client = monitoring.v3.group();

      // Mock request
      var group = {};
      var request = {
          group : group
      };

      // Mock response
      var name = 'name3373707';
      var displayName = 'displayName1615086568';
      var parentName = 'parentName1015022848';
      var filter = 'filter-1274492040';
      var isCluster = false;
      var expectedResponse = {
          name : name,
          displayName : displayName,
          parentName : parentName,
          filter : filter,
          isCluster : isCluster
      };

      // Mock Grpc layer
      client._updateGroup = mockSimpleGrpcMethod(request, expectedResponse);

      client.updateGroup(request, function(err, response) {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateGroup with error', function(done) {
      var client = monitoring.v3.group();

      // Mock request
      var group = {};
      var request = {
          group : group
      };

      // Mock Grpc layer
      client._updateGroup = mockSimpleGrpcMethod(request, null, error);

      client.updateGroup(request, function(err, response) {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('deleteGroup', function() {
    it('invokes deleteGroup without error', function(done) {
      var client = monitoring.v3.group();

      // Mock request
      var formattedName = client.groupPath("[PROJECT]", "[GROUP]");
      var request = {
          name : formattedName
      };

      // Mock Grpc layer
      client._deleteGroup = mockSimpleGrpcMethod(request);

      client.deleteGroup(request, function(err) {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteGroup with error', function(done) {
      var client = monitoring.v3.group();

      // Mock request
      var formattedName = client.groupPath("[PROJECT]", "[GROUP]");
      var request = {
          name : formattedName
      };

      // Mock Grpc layer
      client._deleteGroup = mockSimpleGrpcMethod(request, null, error);

      client.deleteGroup(request, function(err) {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('listGroupMembers', function() {
    it('invokes listGroupMembers without error', function(done) {
      var client = monitoring.v3.group();

      // Mock request
      var formattedName = client.groupPath("[PROJECT]", "[GROUP]");
      var request = {
          name : formattedName
      };

      // Mock response
      var nextPageToken = '';
      var totalSize = -705419236;
      var membersElement = {};
      var members = [membersElement];
      var expectedResponse = {
          nextPageToken : nextPageToken,
          totalSize : totalSize,
          members : members
      };

      // Mock Grpc layer
      client._listGroupMembers = function(actualRequest, options, callback) {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.members);
      };

      client.listGroupMembers(request, function(err, response) {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.members);
        done();
      });
    });

    it('invokes listGroupMembers with error', function(done) {
      var client = monitoring.v3.group();

      // Mock request
      var formattedName = client.groupPath("[PROJECT]", "[GROUP]");
      var request = {
          name : formattedName
      };

      // Mock Grpc layer
      client._listGroupMembers = mockSimpleGrpcMethod(request, null, error);

      client.listGroupMembers(request, function(err, response) {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

});
describe('MetricServiceClient', function() {
  describe('listMonitoredResourceDescriptors', function() {
    it('invokes listMonitoredResourceDescriptors without error', function(done) {
      var client = monitoring.v3.metric();

      // Mock request
      var formattedName = client.projectPath("[PROJECT]");
      var request = {
          name : formattedName
      };

      // Mock response
      var nextPageToken = '';
      var resourceDescriptorsElement = {};
      var resourceDescriptors = [resourceDescriptorsElement];
      var expectedResponse = {
          nextPageToken : nextPageToken,
          resourceDescriptors : resourceDescriptors
      };

      // Mock Grpc layer
      client._listMonitoredResourceDescriptors = function(actualRequest, options, callback) {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.resourceDescriptors);
      };

      client.listMonitoredResourceDescriptors(request, function(err, response) {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.resourceDescriptors);
        done();
      });
    });

    it('invokes listMonitoredResourceDescriptors with error', function(done) {
      var client = monitoring.v3.metric();

      // Mock request
      var formattedName = client.projectPath("[PROJECT]");
      var request = {
          name : formattedName
      };

      // Mock Grpc layer
      client._listMonitoredResourceDescriptors = mockSimpleGrpcMethod(request, null, error);

      client.listMonitoredResourceDescriptors(request, function(err, response) {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('getMonitoredResourceDescriptor', function() {
    it('invokes getMonitoredResourceDescriptor without error', function(done) {
      var client = monitoring.v3.metric();

      // Mock request
      var formattedName = client.monitoredResourceDescriptorPath("[PROJECT]", "[MONITORED_RESOURCE_DESCRIPTOR]");
      var request = {
          name : formattedName
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var type = 'type3575610';
      var displayName = 'displayName1615086568';
      var description = 'description-1724546052';
      var expectedResponse = {
          name : name2,
          type : type,
          displayName : displayName,
          description : description
      };

      // Mock Grpc layer
      client._getMonitoredResourceDescriptor = mockSimpleGrpcMethod(request, expectedResponse);

      client.getMonitoredResourceDescriptor(request, function(err, response) {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getMonitoredResourceDescriptor with error', function(done) {
      var client = monitoring.v3.metric();

      // Mock request
      var formattedName = client.monitoredResourceDescriptorPath("[PROJECT]", "[MONITORED_RESOURCE_DESCRIPTOR]");
      var request = {
          name : formattedName
      };

      // Mock Grpc layer
      client._getMonitoredResourceDescriptor = mockSimpleGrpcMethod(request, null, error);

      client.getMonitoredResourceDescriptor(request, function(err, response) {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('listMetricDescriptors', function() {
    it('invokes listMetricDescriptors without error', function(done) {
      var client = monitoring.v3.metric();

      // Mock request
      var formattedName = client.projectPath("[PROJECT]");
      var request = {
          name : formattedName
      };

      // Mock response
      var nextPageToken = '';
      var metricDescriptorsElement = {};
      var metricDescriptors = [metricDescriptorsElement];
      var expectedResponse = {
          nextPageToken : nextPageToken,
          metricDescriptors : metricDescriptors
      };

      // Mock Grpc layer
      client._listMetricDescriptors = function(actualRequest, options, callback) {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.metricDescriptors);
      };

      client.listMetricDescriptors(request, function(err, response) {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.metricDescriptors);
        done();
      });
    });

    it('invokes listMetricDescriptors with error', function(done) {
      var client = monitoring.v3.metric();

      // Mock request
      var formattedName = client.projectPath("[PROJECT]");
      var request = {
          name : formattedName
      };

      // Mock Grpc layer
      client._listMetricDescriptors = mockSimpleGrpcMethod(request, null, error);

      client.listMetricDescriptors(request, function(err, response) {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('getMetricDescriptor', function() {
    it('invokes getMetricDescriptor without error', function(done) {
      var client = monitoring.v3.metric();

      // Mock request
      var formattedName = client.metricDescriptorPath("[PROJECT]", "[METRIC_DESCRIPTOR]");
      var request = {
          name : formattedName
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var type = 'type3575610';
      var unit = 'unit3594628';
      var description = 'description-1724546052';
      var displayName = 'displayName1615086568';
      var expectedResponse = {
          name : name2,
          type : type,
          unit : unit,
          description : description,
          displayName : displayName
      };

      // Mock Grpc layer
      client._getMetricDescriptor = mockSimpleGrpcMethod(request, expectedResponse);

      client.getMetricDescriptor(request, function(err, response) {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getMetricDescriptor with error', function(done) {
      var client = monitoring.v3.metric();

      // Mock request
      var formattedName = client.metricDescriptorPath("[PROJECT]", "[METRIC_DESCRIPTOR]");
      var request = {
          name : formattedName
      };

      // Mock Grpc layer
      client._getMetricDescriptor = mockSimpleGrpcMethod(request, null, error);

      client.getMetricDescriptor(request, function(err, response) {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('createMetricDescriptor', function() {
    it('invokes createMetricDescriptor without error', function(done) {
      var client = monitoring.v3.metric();

      // Mock request
      var formattedName = client.projectPath("[PROJECT]");
      var metricDescriptor = {};
      var request = {
          name : formattedName,
          metricDescriptor : metricDescriptor
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var type = 'type3575610';
      var unit = 'unit3594628';
      var description = 'description-1724546052';
      var displayName = 'displayName1615086568';
      var expectedResponse = {
          name : name2,
          type : type,
          unit : unit,
          description : description,
          displayName : displayName
      };

      // Mock Grpc layer
      client._createMetricDescriptor = mockSimpleGrpcMethod(request, expectedResponse);

      client.createMetricDescriptor(request, function(err, response) {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createMetricDescriptor with error', function(done) {
      var client = monitoring.v3.metric();

      // Mock request
      var formattedName = client.projectPath("[PROJECT]");
      var metricDescriptor = {};
      var request = {
          name : formattedName,
          metricDescriptor : metricDescriptor
      };

      // Mock Grpc layer
      client._createMetricDescriptor = mockSimpleGrpcMethod(request, null, error);

      client.createMetricDescriptor(request, function(err, response) {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('deleteMetricDescriptor', function() {
    it('invokes deleteMetricDescriptor without error', function(done) {
      var client = monitoring.v3.metric();

      // Mock request
      var formattedName = client.metricDescriptorPath("[PROJECT]", "[METRIC_DESCRIPTOR]");
      var request = {
          name : formattedName
      };

      // Mock Grpc layer
      client._deleteMetricDescriptor = mockSimpleGrpcMethod(request);

      client.deleteMetricDescriptor(request, function(err) {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteMetricDescriptor with error', function(done) {
      var client = monitoring.v3.metric();

      // Mock request
      var formattedName = client.metricDescriptorPath("[PROJECT]", "[METRIC_DESCRIPTOR]");
      var request = {
          name : formattedName
      };

      // Mock Grpc layer
      client._deleteMetricDescriptor = mockSimpleGrpcMethod(request, null, error);

      client.deleteMetricDescriptor(request, function(err) {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('listTimeSeries', function() {
    it('invokes listTimeSeries without error', function(done) {
      var client = monitoring.v3.metric();

      // Mock request
      var formattedName = client.projectPath("[PROJECT]");
      var filter = 'filter-1274492040';
      var interval = {};
      var view = monitoring.v3.types.ListTimeSeriesRequest.TimeSeriesView.FULL;
      var request = {
          name : formattedName,
          filter : filter,
          interval : interval,
          view : view
      };

      // Mock response
      var nextPageToken = '';
      var timeSeriesElement = {};
      var timeSeries = [timeSeriesElement];
      var expectedResponse = {
          nextPageToken : nextPageToken,
          timeSeries : timeSeries
      };

      // Mock Grpc layer
      client._listTimeSeries = function(actualRequest, options, callback) {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.timeSeries);
      };

      client.listTimeSeries(request, function(err, response) {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.timeSeries);
        done();
      });
    });

    it('invokes listTimeSeries with error', function(done) {
      var client = monitoring.v3.metric();

      // Mock request
      var formattedName = client.projectPath("[PROJECT]");
      var filter = 'filter-1274492040';
      var interval = {};
      var view = monitoring.v3.types.ListTimeSeriesRequest.TimeSeriesView.FULL;
      var request = {
          name : formattedName,
          filter : filter,
          interval : interval,
          view : view
      };

      // Mock Grpc layer
      client._listTimeSeries = mockSimpleGrpcMethod(request, null, error);

      client.listTimeSeries(request, function(err, response) {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('createTimeSeries', function() {
    it('invokes createTimeSeries without error', function(done) {
      var client = monitoring.v3.metric();

      // Mock request
      var formattedName = client.projectPath("[PROJECT]");
      var timeSeries = [];
      var request = {
          name : formattedName,
          timeSeries : timeSeries
      };

      // Mock Grpc layer
      client._createTimeSeries = mockSimpleGrpcMethod(request);

      client.createTimeSeries(request, function(err) {
        assert.ifError(err);
        done();
      });
    });

    it('invokes createTimeSeries with error', function(done) {
      var client = monitoring.v3.metric();

      // Mock request
      var formattedName = client.projectPath("[PROJECT]");
      var timeSeries = [];
      var request = {
          name : formattedName,
          timeSeries : timeSeries
      };

      // Mock Grpc layer
      client._createTimeSeries = mockSimpleGrpcMethod(request, null, error);

      client.createTimeSeries(request, function(err) {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

});

function mockSimpleGrpcMethod(expectedRequest, response, error) {
  return function(actualRequest, options, callback) {
    assert.deepStrictEqual(actualRequest, expectedRequest);
    if (error) {
      callback(error);
    } else if (response) {
      callback(null, response);
    } else {
      callback(null);
    }
  };
}
