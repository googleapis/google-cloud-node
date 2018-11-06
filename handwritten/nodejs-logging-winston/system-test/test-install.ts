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

const TS_CODE_SAMPLES: check.CodeSample[] = [
  {
    code: `import * as loggingWinston from '@google-cloud/logging-winston';
new loggingWinston.LoggingWinston();`,
    description: 'imports the module using * syntax',
    dependencies: ['winston@2'],
    devDependencies: ['@types/winston@2', 'typescript@3']
  },
  {
    code: `import {LoggingWinston} from '@google-cloud/logging-winston';
new LoggingWinston();`,
    description: 'imports the module with {} syntax',
    dependencies: ['winston@2'],
    devDependencies: ['@types/winston@2', 'typescript@3']
  },
  {
    code: `import {LoggingWinston} from '@google-cloud/logging-winston';
new LoggingWinston({
  serviceContext: {
    service: 'some service'
  }
});`,
    description:
        'imports the module and starts with a partial `serviceContext`',
    dependencies: ['winston@2'],
    devDependencies: ['@types/winston@2', 'typescript@3']
  },
  {
    code: `import {LoggingWinston} from '@google-cloud/logging-winston';
new LoggingWinston({
  projectId: 'some-project',
  serviceContext: {
    service: 'Some service',
    version: 'Some version'
  }
});`,
    description:
        'imports the module and starts with a complete `serviceContext`',
    dependencies: ['winston@2'],
    devDependencies: ['@types/winston@2', 'typescript@3']
  },

  {
    code: `import {LoggingWinston} from '@google-cloud/logging-winston';
import * as winston from 'winston';
const loggingWinston = new LoggingWinston({
  prefix: 'some-prefix',
  labels: {
    env: 'local',
    name: 'some-name',
    version: 'some-version'
  }
});

new winston.Logger({transports:[loggingWinston]})
`,
    description: 'imports the module with a prefix and labels specified',
    dependencies: ['winston@2'],
    devDependencies: ['@types/winston@2', 'typescript@3']
  },
  {
    code: `import {LoggingWinston} from '@google-cloud/logging-winston';
    import * as winston from 'winston';
const loggingWinston = new LoggingWinston({
  prefix: 'some-prefix',
  labels: {
    env: 'local',
    name: 'some-name',
    version: 'some-version'
  }
});

winston.createLogger({transports:[loggingWinston]})
`,
    description:
        'winston3: imports the module with a prefix and labels specified',
    dependencies: ['winston@3'],
    devDependencies: ['typescript@3']
  }
];

const JS_CODE_SAMPLES: check.CodeSample[] = [
  {
    code:
        `const LoggingWinston = require('@google-cloud/logging-winston').LoggingWinston;
new LoggingWinston();`,
    description: 'requires the module using Node 4+ syntax',
    dependencies: ['winston@2'],
    devDependencies: []
  },
  {
    code:
        `const LoggingWinston = require('@google-cloud/logging-winston').LoggingWinston;
new LoggingWinston({
  serviceContext: {
    service: 'some service'
  }
});`,
    description:
        'requires the module and starts with a partial `serviceContext`',
    dependencies: ['winston@2'],
    devDependencies: []
  },
  {
    code:
        `const LoggingWinston = require('@google-cloud/logging-winston').LoggingWinston;
new LoggingWinston({
  projectId: 'some-project',
  serviceContext: {
    service: 'Some service',
    version: 'Some version'
  }
});`,
    description:
        'requires the module and starts with a complete `serviceContext`',
    dependencies: ['winston@2'],
    devDependencies: []
  },
  {
    code:
        `const LoggingWinston = require('@google-cloud/logging-winston').LoggingWinston;
new LoggingWinston({
  prefix: 'some-prefix',
  labels: {
    env: 'local',
    name: 'some-name',
    version: 'some-version'
  }
});`,
    description: 'imports the module with a prefix and labels specified',
    dependencies: ['winston@2'],
    devDependencies: []
  },
  {
    code:
        `const LoggingWinston = require('@google-cloud/logging-winston').LoggingWinston;
new LoggingWinston({
  prefix: 'some-prefix',
  labels: {
    env: 'local',
    name: 'some-name',
    version: 'some-version'
  }
});`,
    description:
        'winston3: imports the module with a prefix and labels specified',
    dependencies: ['winston@3'],
    devDependencies: []
  }
];

check.testInstallation(
    TS_CODE_SAMPLES, JS_CODE_SAMPLES, {timeout: 2 * 60 * 1000});
