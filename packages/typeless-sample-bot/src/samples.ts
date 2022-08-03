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

import loggers from './loggers.js';
import {treeWalk} from './tree-walk.js';
import {readFile, writeFile} from 'fs/promises';
import babel from '@babel/core';

// Converts an async iterable into an array of the same type.
export async function toArray<T>(iterable: AsyncIterable<T>): Promise<T[]> {
  const output: T[] = [];
  for await (const i of iterable) {
    output.push(i);
  }

  return output;
}

// Converts an array into an async iterable of the same type.
export async function* fromArray<T>(array: T[]): AsyncIterable<T> {
  for (const i of array) {
    yield i;
  }
}

// Given a set of starting paths, search down for anything that matches the regex.
export async function* findSamples(
  rootDirs: string[],
  matcher?: RegExp
): AsyncIterable<string> {
  for (const rootDir of rootDirs) {
    for await (const fn of treeWalk(rootDir)) {
      if (matcher && !matcher.test(fn)) {
        continue;
      }
      yield fn;
    }
  }
}

// Ironically, this triggers snippet-bot, so there's a nonce in the middle: ()?
const sampleChecker = /\[()?START .*\]/;

export interface Sample {
  filename: string;
  contents: string;
}

// Filter an async iterable by file conents. This also loads the file contents
// and caches them, since we'll be needing them anyway.
export async function* filterByContents(
  filenames: AsyncIterable<string>
): AsyncIterable<Sample> {
  for await (const fn of filenames) {
    const contents = (await readFile(fn)).toString();
    if (sampleChecker.test(contents)) {
      yield {
        filename: fn,
        contents,
      };
    }
  }
}

// Instead of a babelrc, this is used so that we can get more control over
// the transform process.
const babelConfig = {
  presets: [['@babel/preset-typescript', {}]],
  plugins: [['./build/src/import-to-require']],
  parserOpts: {} as babel.ParserOptions,
  generatorOpts: {
    // Ensures that Babel keeps newlines so that comments end up
    // on separate lines as before.
    retainLines: true,
  } as babel.GeneratorOptions,
};

// Transform all of the loaded samples from the async iterator,
// producing output samples that have been transformed, with a new filename.
export async function* transformSamples(
  samples: AsyncIterable<Sample>
): AsyncIterable<Sample> {
  for await (const s of samples) {
    const config = Object.assign({}, babelConfig, {filename: s.filename});
    const transformed = await babel.transformAsync(s.contents, config);
    yield {
      filename: s.filename.replace(/\.ts$/g, '.js'),
      contents: transformed?.code || '',
    };
  }
}

// Write out all samples to the file system.
export async function* writeSamples(
  samples: AsyncIterable<Sample>
): AsyncIterable<Sample> {
  for await (const s of samples) {
    loggers.verbose('writing new sample', s.filename);
    await writeFile(s.filename, s.contents);
    yield s;
  }
}

// Terminator function that waits for everything else to complete,
// and returns a count of how many we processed.
export async function waitForAllSamples(
  samples: AsyncIterable<Sample>
): Promise<number> {
  let count = 0;
  for await (const s of samples) {
    loggers.step('Generated', s.filename);
    count++;
  }

  return count;
}
