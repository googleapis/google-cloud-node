/**
 * Copyright 2018 Google Inc. All Rights Reserved.
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

import * as check from 'post-install-check';

const TS_CODE_ARRAY: check.CodeSample[] = [
  {
    code: `import * as errorReporting from '@google-cloud/error-reporting';
new errorReporting.ErrorReporting();`,
    description: 'imports the module using * syntax',
    dependencies: [],
    devDependencies: []
  },
  {
    code: `import {ErrorReporting} from '@google-cloud/error-reporting';
new ErrorReporting();`,
    description: 'imports the module with {} syntax',
    dependencies: [],
    devDependencies: []
  },
  {
    code: `import {ErrorReporting} from '@google-cloud/error-reporting';
new ErrorReporting({
  serviceContext: {
    service: 'some service'
  }
});`,
    description:
        'imports the module and starts with a partial `serviceContext`',
    dependencies: [],
    devDependencies: []
  },
  {
    code: `import {ErrorReporting} from '@google-cloud/error-reporting';
new ErrorReporting({
  projectId: 'some-project',
  serviceContext: {
    service: 'Some service',
    version: 'Some version'
  }
});`,
    description:
        'imports the module and starts with a complete `serviceContext`',
    dependencies: [],
    devDependencies: []
  },
  {
    code: `import * as express from 'express';

import {ErrorReporting} from '@google-cloud/error-reporting';
const errors = new ErrorReporting();

const app = express();

app.get('/error', (req, res, next) => {
  res.send('Something broke!');
  next!(new Error('Custom error message'));
});

app.get('/exception', () => {
  JSON.parse('{\"malformedJson\": true');
});

app.use(errors.express);
`,
    description: 'uses express',
    dependencies: ['express'],
    devDependencies: ['@types/express']
  },
  {
    code: `import * as hapi from 'hapi';

import {ErrorReporting} from '@google-cloud/error-reporting';
const errors = new ErrorReporting();

const server = new hapi.Server();
server.connection({ port: 3000 });

server.route({
  method: 'GET',
  path: '/error',
  handler: (request, reply) => {
    reply('Something broke!');
    throw new Error('Custom error message');
  }
});

server.register(errors.hapi);
`,
    description: 'uses hapi16',
    dependencies: ['hapi@16.x.x'],
    devDependencies: ['@types/hapi@16.x.x']
  },
  {
    code: `import * as hapi from 'hapi';

import {ErrorReporting} from '@google-cloud/error-reporting';
const errors = new ErrorReporting();

async function start() {
  const server = new hapi.Server({
    host: '0.0.0.0',
    port: 3000
  });

  server.route({
    method: 'GET',
    path: '/error',
    handler: async (request, h) => {
      throw new Error(\`You requested an error at ${new Date()}\`);
    }
  });

  await server.register(errors.hapi);
}

start().catch(console.error);
`,
    description: 'uses hapi17',
    dependencies: ['hapi@17.x.x'],
    devDependencies: ['@types/hapi@17.x.x']
  },
  {
    code: `import * as Koa from 'koa';

import {ErrorReporting} from '@google-cloud/error-reporting';
const errors = new ErrorReporting();

const app = new Koa();

app.use(errors.koa);

app.use(function *(this: any): IterableIterator<any> {
  //This will set status and message
  this.throw('Error Message', 500);
});

// response
app.use(function *(this: any): IterableIterator<any> {
  this.body = 'Hello World';
});
`,
    description: 'uses koa',
    dependencies: ['koa'],
    devDependencies: ['@types/koa']
  },
  {
    code: `import * as restify from 'restify';

import {ErrorReporting} from '@google-cloud/error-reporting';
const errors = new ErrorReporting();

function respond(req: {}, res: {}, next: Function) {
  next(new Error('this is a restify error'));
}

const server = restify.createServer();

server.use(errors.restify(server));
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);
`,
    description: 'uses restify',
    dependencies: ['restify'],
    devDependencies: ['@types/restify']
  }
];

const JS_CODE_ARRAY: check.CodeSample[] = [
  {
    code:
        `const ErrorReporting = require('@google-cloud/error-reporting').ErrorReporting;
new ErrorReporting();`,
    description: 'requires the module using Node 4+ syntax',
    dependencies: [],
    devDependencies: []
  },
  {
    code:
        `const ErrorReporting = require('@google-cloud/error-reporting').ErrorReporting;
new ErrorReporting({
  serviceContext: {
    service: 'some service'
  }
});`,
    description:
        'requires the module and starts with a partial `serviceContext`',
    dependencies: [],
    devDependencies: []
  },
  {
    code:
        `const ErrorReporting = require('@google-cloud/error-reporting').ErrorReporting;
new ErrorReporting({
  projectId: 'some-project',
  serviceContext: {
    service: 'Some service',
    version: 'Some version'
  }
});`,
    description:
        'requires the module and starts with a complete `serviceContext`',
    dependencies: [],
    devDependencies: []
  },
  {
    code: `const express = require('express');

const ErrorReporting = require('@google-cloud/error-reporting').ErrorReporting;
const errors = ErrorReporting();

const app = express();

app.get('/error', (req, res, next) => {
  res.send('Something broke!');
  next(new Error('Custom error message'));
});

app.get('/exception', () => {
  JSON.parse('{\"malformedJson\": true');
});

// Note that express error handling middleware should be attached after all
// the other routes and use() calls. See [express docs][express-error-docs].
app.use(errors.express);
`,
    description: 'uses express',
    dependencies: ['express'],
    devDependencies: []
  },
  {
    code: `const hapi = require('hapi');

const ErrorReporting = require('@google-cloud/error-reporting').ErrorReporting;
const errors = new ErrorReporting();

const server = new hapi.Server();
server.connection({ port: 3000 });

server.route({
  method: 'GET',
  path: '/error',
  handler: (request, reply) => {
    reply('Something broke!');
    throw new Error('Custom error message');
  }
});

server.register(errors.hapi);
`,
    description: 'uses hapi16',
    dependencies: ['hapi@16.x.x'],
    devDependencies: []
  },
  {
    code: `const hapi = require('hapi');

const ErrorReporting = require('@google-cloud/error-reporting').ErrorReporting;
const errors = new ErrorReporting();

async function start() {
  const server = new hapi.Server({
    host: '0.0.0.0',
    port: 3000
  });

  server.route({
    method: 'GET',
    path: '/error',
    handler: async (request, h) => {
      throw new Error(\`You requested an error at ${new Date()}\`);
    }
  });

  await server.register(errors.hapi);
}

start().catch(console.error);
`,
    description: 'uses hapi17',
    dependencies: ['hapi@17.x.x'],
    devDependencies: []
  },
  {
    code: `const Koa = require('koa');

const ErrorReporting = require('@google-cloud/error-reporting').ErrorReporting;
const errors = new ErrorReporting();

const app = new Koa();

app.use(errors.koa);

app.use(function *(next) {
  //This will set status and message
  this.throw('Error Message', 500);
});

// response
app.use(function *(){
  this.body = 'Hello World';
});
`,
    description: 'uses koa',
    dependencies: ['koa'],
    devDependencies: []
  },
  {
    code: `const restify = require('restify');

const ErrorReporting = require('@google-cloud/error-reporting').ErrorReporting;
const errors = new ErrorReporting();

function respond(req, res, next) {
  next(new Error('this is a restify error'));
}

const server = restify.createServer();

server.use(errors.restify(server));
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);
`,
    description: 'uses restify',
    dependencies: ['restify'],
    devDependencies: []
  }
];

check.testInstallation(TS_CODE_ARRAY, JS_CODE_ARRAY, {timeout: 2 * 60 * 1000});
