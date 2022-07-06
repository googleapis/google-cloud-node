// Copyright 2022 Google LLC
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

import yargs from 'yargs';
import loggers from '../loggers.js';
import {createLoggers} from '../loggers.js';
import util from 'node:util';
import {symbols} from '../symbols.js';
import {filterByContents, findSamples, transformSamples, writeSamples, waitForAllSamples} from '../samples.js';

export function consolize(args: unknown[]): string {
  const strings = args.map(a => {
    if (typeof(a) === 'string') {
      return a;
    } else if (typeof(a) === 'number') {
      return `${a}`;
    } else {
      return util.inspect(a, false, 2, true);
    }
  });
  return strings.join(' ');
}

async function main(): Promise<number> {
  console.log(symbols.green('Typeless sample bot, converts TS to JS sample snippets'));

  const argv = await yargs(process.argv.slice(2)).options({
    recursive: {
      demandOption: false,
      boolean: true,
      describe: 'process the target as a directory, recursively',
      alias: [ 'r' ],
    },
    verbose: {
      demandOption: false,
      boolean: true,
      describe: 'set flag to get verbose output about actions (GCP_DEBUG=verbose)',
      alias: [ 'v' ],
    },
    debug: {
      demandOption: false,
      boolean: true,
      describe: 'same as using GCP_DEBUG=*',
      alias: [ 'd' ],
    },
    art: {
      demandOption: false,
      boolean: true,
      default: true,
      describe: 'allow ASCII/ANSI art/colours',
      alias: [ 'c' ],
    },
  }).help().argv;

  if (argv.mode === 'help') {
    return 0;
  }

  symbols.art = argv.art;
  await createLoggers();

  // Set up our log outputs as needed
  let returnValue = 0;
  if (argv.verbose) {
    loggers.verbose.on('log', (args: any[]) => console.debug(symbols.grey(consolize([symbols.bug, ...args]))));
  }
  loggers.step.on('log', (args: any[]) => console.log(consolize([symbols.step, ...args])));
  loggers.error.on('log', (args: any[]) => {
    console.error(symbols.red(consolize([symbols.failure, ...args])))
    returnValue = 1;
  });

  const sampleFns = findSamples('./samples', /.*samples\/(?!node_modules).*\.ts$/);
  const filtered = filterByContents(sampleFns);
  const transformed = transformSamples(filtered);
  const written = writeSamples(transformed);
  await waitForAllSamples(written);

  if (!returnValue) {
    console.log(symbols.success, symbols.green('Generation complete!'));
  } else {
    console.log(symbols.failure, symbols.redBright('Something failed. (Maybe not everything, check the log above.)'));
  }

  return returnValue;
}

main()
  .then(e => process.exit(e))
  .catch((e: Error) => {
    console.error(`Top level exception: ${e.toString()} ${e.stack?.toString()}`);
    process.exit(1);
  });
