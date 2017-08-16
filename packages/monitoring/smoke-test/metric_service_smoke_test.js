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

describe('MetricServiceSmokeTest', function() {
  if (!process.env.SMOKE_TEST_PROJECT) {
    throw new Error("Usage: SMOKE_TEST_PROJECT=<project_id> node #{$0}");
  }
  var projectId = process.env.SMOKE_TEST_PROJECT;

  it('successfully makes a call to the service using promises', function(done) {
    var monitoring = require('../src');

    var client = monitoring.v3.metric({
      // optional auth parameters.
    });

    // Iterate over all elements.
    var formattedName = client.projectPath(projectId);

    client.listMonitoredResourceDescriptors({name: formattedName}).then(function(responses) {
        var resources = responses[0];
        for (var i = 0; i < resources.length; ++i) {
            console.log(resources[i]);
        }
    })
    .then(done)
    .catch(done);
  });

  it('successfully makes a call to the service using callbacks', function(done) {
    var monitoring = require('../src');

    var client = monitoring.v3.metric({
      // optional auth parameters.
    });

    // Or obtain the paged response.
    var formattedName = client.projectPath(projectId);


    var options = {autoPaginate: false};
    function callback(responses) {
        // The actual resources in a response.
        var resources = responses[0];
        // The next request if the response shows there's more responses.
        var nextRequest = responses[1];
        // The actual response object, if necessary.
        // var rawResponse = responses[2];
        for (var i = 0; i < resources.length; ++i) {
            console.log(resources[i])
        }
        if (nextRequest) {
            // Fetch the next page.
            return client.listMonitoredResourceDescriptors(nextRequest, options).then(callback);
        }
    }
    client.listMonitoredResourceDescriptors({name: formattedName}, options)
        .then(callback)
        .then(done)
        .catch(done);
  });

  it('successfully makes a call to the service using streaming', function(done) {
    var monitoring = require('../src');

    var client = monitoring.v3.metric({
      // optional auth parameters.
    });

    var formattedName = client.projectPath(projectId);
    client.listMonitoredResourceDescriptorsStream({name: formattedName})
    .on('data', function(element) {
        console.log(element);
    })
    .on('error', done)
    .on('end', done);
  });
});