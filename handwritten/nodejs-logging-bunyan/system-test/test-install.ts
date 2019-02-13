/**
 * Copyright 2018 Google LLC. All Rights Reserved.
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
    code: `import * as lb from '@google-cloud/logging-bunyan';
import * as bunyan from 'bunyan';

const loggingBunyan = new lb.LoggingBunyan();

bunyan.createLogger({
  name: 'my-service',
  level: 'info',
  streams: [
    {stream: process.stdout},
    loggingBunyan.stream('info'),
  ],
});`,
    description: 'imports the module using * syntax',
    dependencies: ['bunyan'],
    devDependencies: ['@types/bunyan']
  },
  {
    code: `import {LoggingBunyan} from '@google-cloud/logging-bunyan';
import * as bunyan from 'bunyan';

const loggingBunyan = new LoggingBunyan();

bunyan.createLogger({
  name: 'my-service',
  level: 'info',
  streams: [
    {stream: process.stdout},
    loggingBunyan.stream('info'),
  ],
});`,
    description: 'imports the module with {} syntax',
    dependencies: ['bunyan'],
    devDependencies: ['@types/bunyan']
  },
  {
    code: `import {LoggingBunyan} from '@google-cloud/logging-bunyan';
import * as bunyan from 'bunyan';

const loggingBunyan = new LoggingBunyan({
  serviceContext: {
    service: 'some service'
  }
});

bunyan.createLogger({
  name: 'my-service',
  level: 'info',
  streams: [
    {stream: process.stdout},
    loggingBunyan.stream('info'),
  ],
});`,
    description:
        'imports the module and starts with a partial `serviceContext`',
    dependencies: ['bunyan'],
    devDependencies: ['@types/bunyan']
  },
  {
    code: `import {LoggingBunyan} from '@google-cloud/logging-bunyan';
import * as bunyan from 'bunyan';

const loggingBunyan = new LoggingBunyan({
  projectId: 'some-project',
  serviceContext: {
    service: 'Some service',
    version: 'Some version'
  }
});

bunyan.createLogger({
  name: 'my-service',
  level: 'info',
  streams: [
    {stream: process.stdout},
    loggingBunyan.stream('info'),
  ],
});`,
    description:
        'imports the module and starts with a complete `serviceContext`',
    dependencies: ['bunyan'],
    devDependencies: ['@types/bunyan']
  },
  {
    code: `import * as lb from '@google-cloud/logging-bunyan';
import * as express from 'express';

async function main() {
  const {logger, mw} = await lb.express.middleware();
  const app = express();
  app.use(mw);
}`,
    description: 'can be used with express',
    dependencies: ['express', 'bunyan'],
    devDependencies: ['@types/bunyan', '@types/express']
  }
];

const JS_CODE_ARRAY: check.CodeSample[] = [
  {
    code:
        `const LoggingBunyan = require('@google-cloud/logging-bunyan').LoggingBunyan;
const bunyan = require('bunyan');

const loggingBunyan = new LoggingBunyan();

bunyan.createLogger({
  name: 'my-service',
  level: 'info',
  streams: [
    {stream: process.stdout},
    loggingBunyan.stream('info'),
  ],
});`,
    description: 'requires the module using Node 4+ syntax',
    dependencies: ['bunyan'],
    devDependencies: []
  },
  {
    code:
        `const LoggingBunyan = require('@google-cloud/logging-bunyan').LoggingBunyan;
const bunyan = require('bunyan');

const loggingBunyan = new LoggingBunyan({
  serviceContext: {
    service: 'some service'
  }
});

bunyan.createLogger({
  name: 'my-service',
  level: 'info',
  streams: [
    {stream: process.stdout},
    loggingBunyan.stream('info'),
  ],
});`,
    description:
        'requires the module and starts with a partial `serviceContext`',
    dependencies: ['bunyan'],
    devDependencies: []
  },
  {
    code:
        `const LoggingBunyan = require('@google-cloud/logging-bunyan').LoggingBunyan;
const bunyan = require('bunyan');

const loggingBunyan = new LoggingBunyan({
  projectId: 'some-project',
  serviceContext: {
    service: 'Some service',
    version: 'Some version'
  }
});

bunyan.createLogger({
  name: 'my-service',
  level: 'info',
  streams: [
    {stream: process.stdout},
    loggingBunyan.stream('info'),
  ],
});`,
    description:
        'requires the module and starts with a complete `serviceContext`',
    dependencies: ['bunyan'],
    devDependencies: []
  },
  {
    code: `const lb = require('@google-cloud/logging-bunyan');
const express = require('express');

async function main() {
  lb.express.middleware().then(result => {
    const app = express();
    app.use(result.mw);
  }).catch((err) => {
    console.error(err);
    process.exit(1);
  });
}`,
    description: 'can be used with express',
    dependencies: ['express', 'bunyan'],
    devDependencies: []
  }
];

check.testInstallation(TS_CODE_ARRAY, JS_CODE_ARRAY, {timeout: 2 * 60 * 1000});
