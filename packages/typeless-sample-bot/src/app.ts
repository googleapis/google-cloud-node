#!/usr/bin/env node
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
import loggers from './loggers.js';
import {createLoggers} from './loggers.js';
import util from 'node:util';
import {symbols} from './symbols.js';
import {
  filterByContents,
  findSamples,
  transformSamples,
  writeSamples,
  waitForAllSamples,
  fromArray,
} from './samples.js';

let returnValue = 0;

// Converts an array of unknown-type items into a string suitable for
// printing to the console.
export function consolize(args: unknown[]): string {
  const strings = args.map(a => {
    if (typeof a === 'string') {
      return a;
    } else if (typeof a === 'number') {
      return `${a}`;
    } else {
      return util.inspect(a, false, 2, true);
    }
  });
  return strings.join(' ');
}

async function processArgs(args: string[]) {
  const argv = await yargs(args)
    .options({
      targets: {
        demandOption: true,
        type: 'array',
        describe: 'one or more items to process',
        alias: ['t'],
      },
      recursive: {
        demandOption: false,
        boolean: true,
        describe: 'process the target(s) as directories, recursively',
        alias: ['r'],
      },
      outputpath: {
        demandOption: false,
        type: 'string',
        describe:
          'outputs default to being next to the original; if set, this option will specify the output for all files',
        alias: ['o'],
      },
      verbose: {
        demandOption: false,
        default: false,
        boolean: true,
        describe:
          'set flag to get verbose output about actions (GCP_DEBUG=verbose)',
        alias: ['v'],
      },
      debug: {
        demandOption: false,
        default: false,
        boolean: true,
        describe: 'same as using GCP_DEBUG=*',
        alias: ['d'],
      },
      art: {
        demandOption: false,
        boolean: true,
        default: true,
        describe: 'allow ASCII/ANSI art/colours',
        alias: ['c'],
      },
    })
    .help().argv;

  if (argv.mode === 'help') {
    return undefined;
  }

  symbols.art = argv.art;

  return argv;
}

let loggersSetUp = false;
async function setupLoggers(verbose: boolean) {
  // This may be needed on subsequent testing runs.
  returnValue = 0;

  // Don't double-create or .on() anything. This can happen
  // during testing.
  if (loggersSetUp) {
    return;
  }

  await createLoggers();

  // Set up our log outputs as needed
  if (verbose) {
    loggers.verbose.on('log', (args: unknown[]) =>
      console.debug(symbols.grey(consolize([symbols.bug, ...args])))
    );
  }
  loggers.step.on('log', (args: unknown[]) =>
    console.log(consolize([symbols.step, ...args]))
  );
  loggers.error.on('log', (args: unknown[]) => {
    console.error(symbols.red(consolize([symbols.failure, ...args])));

    // Also cause main() to return a failure.
    returnValue = 1;
  });

  loggersSetUp = true;
}

export async function main(args: string[]): Promise<number> {
  console.log(
    symbols.green('Typeless sample bot, converts TS to JS sample snippets')
  );

  // Process command line args and get loggers configured.
  const argv = await processArgs(args);
  if (!argv) {
    return 0;
  }
  await setupLoggers(argv.verbose);

  // Find all of the samples we're interested in working on.
  let sampleFns: AsyncIterable<string>;
  if (argv.recursive) {
    sampleFns = findSamples(
      argv.targets.map(i => i.toString()),
      /(?!node_modules).*\.ts$/
    );
  } else {
    sampleFns = fromArray(argv.targets.map(i => i.toString()));
  }

  // Filter down to samples that have a snippet tag.
  const filtered = filterByContents(sampleFns);

  // Transform those samples using Babel.
  const transformed = transformSamples(filtered);

  // Write out all of the output samples.
  const written = writeSamples(transformed, argv.outputpath);

  try {
    // Wait for the pipeline to complete.
    const count = await waitForAllSamples(written);

    if (!count) {
      // Should this be considred a failure?
      loggers.error('No samples were selected.');
    }
  } catch (e) {
    loggers.error('Exception during processing:', e);
  }

  if (!returnValue) {
    console.log(symbols.success, symbols.green('Generation complete!'));
  } else {
    console.log(
      symbols.failure,
      symbols.redBright(
        'Something failed. (Maybe not everything, check the log above.)'
      )
    );
  }

  return returnValue;
}
