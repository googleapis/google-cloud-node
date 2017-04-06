/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

var hapi = require('hapi');
var errorHandler = require('../../src/index.js')();

var server = new hapi.Server();
server.connection({ port: 3000 });

server.start(
  (err) => {
    if (err) {
      throw err;
    }
    console.log(
      'Server running at', server.info.uri);
  }
);

server.route({
  method: 'GET', path: '/get', handler: function(request, reply) {
    console.log('Got a GET');
    throw new Error('an error');
  }
});

server.route({
  method: 'POST', path: '/post', handler: function(request, reply) {
    console.log('Got a POST', request.payload);
    throw new Error('An error on the hapi post route');
  }
});


server.register(
  { register: errorHandler.hapi }, (err) => {
    if (err) {
      console.error('There was an error in registering the plugin', err);
    }
  }
);
