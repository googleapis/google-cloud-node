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
import babel, {GeneratorOptions, ParserOptions} from '@babel/core';

export async function toArray<T>(iterable: AsyncIterable<T>): Promise<T[]> {
  const output: T[] = [];
  for await (const i of iterable) {
    output.push(i);
  }

  return output;
}

export async function* findSamples(rootDir: string, matcher?: RegExp): AsyncIterable<string> {
  for await (const fn of treeWalk(rootDir)) {
    if (matcher && !matcher.test(fn)) {
      continue;
    }
    yield fn;
  }
}

const sampleChecker = /\[START .*\]/;

export interface Sample {
  filename: string;
  contents: string;
}

export async function* filterByContents(filenames: AsyncIterable<string>): AsyncIterable<Sample> {
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

const babelConfig = {
  presets: [
    [
      '@babel/preset-typescript',
      {
      },
    ],
  ],
  plugins: [
    [
      './build/src/import-to-require',
    ],
  ],
  parserOpts: {
  } as ParserOptions,
  generatorOpts: {
    retainLines: true,
  } as GeneratorOptions,
};

export async function* transformSamples(samples: AsyncIterable<Sample>): AsyncIterable<Sample> {
  for await (const s of samples) {
    const config = Object.assign({}, babelConfig, {filename: s.filename});
    const transformed = await babel.transformAsync(s.contents, config);
    yield {
      filename: s.filename.replace(/\.ts$/g, '.js'),
      contents: transformed?.code || '',
    };
  }
}

export async function* writeSamples(samples: AsyncIterable<Sample>): AsyncIterable<Sample> {
  for await (const s of samples) {
    loggers.step('writing new sample', s.filename);
    await writeFile(s.filename, s.contents);
    yield s;
  }
}

export async function waitForAllSamples(samples: AsyncIterable<Sample>): Promise<void> {
  for await (const s of samples) {
    loggers.step('Generated', s.filename);
  }
}
