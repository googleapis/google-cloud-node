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

import {ChildProcess, fork, ForkOptions, spawn, SpawnOptions} from 'child_process';
import {mkdir, readFile, stat, Stats, writeFile} from 'fs';
import * as glob from 'glob';
import {ncp} from 'ncp';
import * as once from 'once';
import * as path from 'path';
import * as pify from 'pify';
import * as rimraf from 'rimraf';
import * as tmp from 'tmp';

export const BUILD_DIRECTORY = 'build';

export const globP: (pattern: string) => Promise<string[]> = pify(glob);
export const ncpP: (src: string, dest: string) => Promise<void> = pify(ncp);
export const readFileP: (path: string, encoding?: string) =>
    Promise<Buffer|string> = pify(readFile);
export const writeFileP: (path: string, data: string, encoding?: string) =>
    Promise<void> = pify(writeFile);
export const statP: (path: string) => Promise<Stats> = pify(stat);
export const tmpDirP: () => Promise<string> = pify(tmp.dir);
export const rimrafP: (f: string) => Promise<void> = pify(rimraf);
export const mkdirP: (path: string, mode?: number) => Promise<void> =
    pify(mkdir);

export function nodule(nodule: string) {
  return path.relative(BUILD_DIRECTORY, `node_modules/${nodule}`);
}

export function existsP(path: string): Promise<boolean> {
  return statP(path).then(
      () => Promise.resolve(true), () => Promise.resolve(false));
}

function promisifyChildProcess(childProcess: ChildProcess): Promise<void> {
  return new Promise((resolve, reject) => {
    const exit = (err?: Error) => once(() => err ? reject(err) : resolve())();
    childProcess.on('error', exit);
    childProcess.on('close', (code) => {
      if (code === 0) {
        exit();
      } else {
        exit(
            new Error(`Process ${childProcess.pid} exited with code ${code}.`));
      }
    });
  });
}

export function spawnP(
    command: string, args?: string[], options?: SpawnOptions,
    log?: (text: string) => void): Promise<void> {
  const stringifiedCommand =
      `\`${command}${args ? (' ' + args.join(' ')) : ''}\``;
  if (log) {
    log(`> Running: ${stringifiedCommand}`);
  }
  return promisifyChildProcess(spawn(
      command, args, Object.assign({stdio: 'inherit', shell: true}, options)));
}

export function forkP(
    moduleName: string, args?: string[], options?: ForkOptions,
    log?: (text: string) => void): Promise<void> {
  const stringifiedCommand =
      `\`${moduleName}${args ? (' ' + args.join(' ')) : ''}\``;
  if (log) {
    log(`> Running: ${stringifiedCommand}`);
  }
  return promisifyChildProcess(
      fork(moduleName, args, Object.assign({stdio: 'inherit'}, options)));
}
