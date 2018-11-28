/**
 * Copyright 2015 Google Inc. All Rights Reserved.
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

import * as crypto from 'crypto';
import * as events from 'events';
import * as fs from 'fs';
import * as path from 'path';
import pickBy = require('lodash.pickby');

// TODO: Make this more precise.
const findit: (dir: string) => events.EventEmitter = require('findit2');

// TODO: Make this more precise.
const split: () => fs.WriteStream = require('split');

export interface FileStats {
  // TODO: Verify that this member should actually be optional.
  hash?: string;
  lines: number;
}

// TODO: Update the code so that `undefined  is not a possible property value
export interface ScanStats {
  [filename: string]: FileStats|undefined;
}

export interface ScanResults {
  errors(): Map<string, Error>;
  all(): ScanStats;
  selectStats(regex: RegExp): ScanStats;
  selectFiles(regex: RegExp, baseDir: string): string[];
  hash?: string;
}

class ScanResultsImpl implements ScanResults {
  /**
   * Encapsulates the results of a filesystem scan with methods
   * to easily select scan information or filenames for a
   * specific subset of the files listed in the scan results.
   *
   * @param stats An object that contains filenames
   *  as keys where each key maps to an object containing the
   *  hash and number of lines for the specified file.  This
   *  information is accessed via the `hash` and `lines`
   *  attributes respectively
   * @param hash A hashcode computed from the contents of all the files.
   */
  constructor(
      private readonly stats: ScanStats, readonly errorMap: Map<string, Error>,
      readonly hash?: string) {}

  errors(): Map<string, Error> {
    return this.errorMap;
  }

  /**
   * Used to get all of the file scan results.
   */
  all(): ScanStats {
    return this.stats;
  }

  /**
   * Used to get the file scan results for only the files
   * whose filenames match the specified regex.
   *
   * @param {regex} regex The regex that tests a filename
   *  to determine if the scan results for that filename
   *  should be included in the returned results.
   */
  selectStats(regex: RegExp): ScanStats|{} {
    return pickBy(this.stats, (_, key) => regex.test(key));
  }

  /**
   * Used to get the only the file paths in the scan results
   * where the filenames match the specified regex and are
   * returned with the each relative to the specified base
   * directory.
   *
   * @param {regex} regex The regex that tests a filename to
   *  determine if the scan results for that filename should
   *  be included in the returned results.
   * @param {string} baseDir The absolute path to the directory
   *  from which all of the returned paths should be relative
   *  to.
   */
  selectFiles(regex: RegExp, baseDir: string): string[] {
    // ensure the base directory has only a single trailing path separator
    baseDir = path.normalize(baseDir + path.sep);
    return Object.keys(this.stats)
        .filter((file) => {
          return file && regex.test(file);
        })
        .map((file) => {
          return path.normalize(file).replace(baseDir, '');
        });
  }
}

export async function scan(
    shouldHash: boolean, baseDir: string, regex: RegExp): Promise<ScanResults> {
  const fileList = await findFiles(baseDir, regex);
  return await computeStats(fileList, shouldHash);
}

/**
 * This function accept an array of filenames and computes a unique hash-code
 * based on the contents.
 *
 * @param {!Array<string>} fileList array of filenames
 * @param {Boolean} shouldHash whether a hash should be computed
 * @param {!function(?Error, ?string, Object)} callback error-back style callback
 *    returning the hash-code and an object containing file statistics.
 */
// TODO: Typescript: Fix the docs associated with this function to match the
// call signature
function computeStats(
    fileList: string[], shouldHash: boolean): Promise<ScanResults> {
  return new Promise<ScanResults>(async (resolve, reject) => {
    // return a valid, if fake, result when there are no js files to hash.
    if (fileList.length === 0) {
      resolve(new ScanResultsImpl({}, new Map(), 'EMPTY-no-js-files'));
      return;
    }

    // TODO: Address the case where the array contains `undefined`.
    const hashes: Array<string|undefined> = [];
    const statistics: ScanStats = {};
    const errors: Map<string, Error> = new Map<string, Error>();

    for (const filename of fileList) {
      try {
        const fileStats = await statsForFile(filename, shouldHash);
        if (shouldHash) {
          hashes.push(fileStats.hash);
        }
        statistics[filename] = fileStats;
      } catch (err) {
        errors.set(filename, err);
      }
    }

    let hash;
    if (shouldHash) {
      // Sort the hashes to get a deterministic order as the files may
      // not be in the same order each time we scan the disk.
      const buffer = hashes.sort().join();
      const sha1 = crypto.createHash('sha1').update(buffer).digest('hex');
      hash = 'SHA1-' + sha1;
    }
    resolve(new ScanResultsImpl(statistics, errors, hash));
  });
}


/**
 * Given a base-directory, this function scans the subtree and finds all the js
 * files. .git and node_module subdirectories are ignored.
 * @param {!string} baseDir top-level directory to scan
 * @param {!regex} regex the regular expression that specifies the types of
 *  files to find based on their filename
 * @param {!function(?Error, Array<string>)} callback error-back callback
 */
function findFiles(baseDir: string, regex: RegExp): Promise<string[]> {
  return new Promise<string[]>((resolve, reject) => {
    let error: Error|undefined;

    if (!baseDir) {
      reject(new Error('hasher.findJSFiles requires a baseDir argument'));
      return;
    }

    const find = findit(baseDir);
    const fileList: string[] = [];

    find.on('error', (err: Error) => {
      error = err;
      return;
    });

    find.on('directory', (dir: string, ignore: fs.Stats, stop: () => void) => {
      const base = path.basename(dir);
      if (base === '.git' || base === 'node_modules') {
        stop();  // do not descend
      }
    });

    find.on('file', (file: string) => {
      if (regex.test(file)) {
        fileList.push(file);
      }
    });

    find.on('end', () => {
      // Note: the `end` event fires even after an error
      if (error) {
        reject(error);
      } else {
        resolve(fileList);
      }
    });
  });
}

/**
 * Compute a sha hash for the given file and record line counts along the way.
 * @param {string} filename
 * @param {Boolean} shouldHash whether a hash should be computed
 * @param {function} cb errorback style callback which returns the sha string
 * @private
 */
function statsForFile(
    filename: string, shouldHash: boolean): Promise<FileStats> {
  return new Promise<FileStats>((resolve, reject) => {
    const reader = fs.createReadStream(filename);
    reader.on('error', (err) => {
      reject(err);
    });
    reader.on('open', () => {
      let shasum: crypto.Hash;
      if (shouldHash) {
        shasum = crypto.createHash('sha1');
      }

      let lines = 0;
      let error: Error|undefined;
      const byLine = reader!.pipe(split());
      byLine.on('error', (e: Error) => {
        error = e;
      });
      byLine.on('data', (d: string) => {
        if (shouldHash) {
          shasum.update(d);
        }
        lines++;
      });
      byLine.on('end', () => {
        if (error) {
          reject(error);
        } else {
          const hash = shouldHash ? shasum.digest('hex') : undefined;
          resolve({hash, lines});
        }
      });
    });
  });
}
