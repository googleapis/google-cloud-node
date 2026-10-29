// Copyright 2016 Google LLC
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

import * as fs from 'fs';
import * as path from 'path';
import * as sourceMap from 'source-map';

const MAP_EXT = '.map';

export interface MapInfoCompiled {
  mapFileDir: string;
  mapConsumer: sourceMap.SourceMapConsumer;
}

export interface GeneratedLocation {
  file: string;
  name?: string;
  line: number;
  column: number;
}

export interface SourceLocation {
  file?: string;
  name?: string;
  line?: number;
  column?: number;
}

/**
 * @param infoMap The map that maps input source files to SourceMapConsumer
 *  objects that are used to calculate mapping information
 * @param mapPath The path to the source map file to process. The path should
 *  be relative to the process's current working directory.
 */
async function processSourceMap(
  infoMap: Map<string, MapInfoCompiled>,
  mapPath: string
): Promise<void> {
  if (!mapPath || !mapPath.endsWith(MAP_EXT)) {
    throw new Error(`The path "${mapPath}" does not specify a source map file`);
  }
  mapPath = path.normalize(mapPath);

  let contents: string;
  try {
    contents = await fs.promises.readFile(mapPath, 'utf8');
  } catch (e) {
    throw new Error('Could not read source map file ' + mapPath + ': ' + e);
  }

  let consumer: sourceMap.SourceMapConsumer;
  try {
    const rawSourceMap = JSON.parse(contents) as sourceMap.RawSourceMap;
    consumer = await new sourceMap.SourceMapConsumer(rawSourceMap);
  } catch (e) {
    throw new Error(
      'An error occurred while reading the sourceMap file ' + mapPath + ': ' + e
    );
  }

  const dir = path.dirname(mapPath);
  const rawConsumer = consumer as unknown as {file?: string};
  const generatedBase = rawConsumer.file
    ? rawConsumer.file
    : path.basename(mapPath, MAP_EXT);
  const generatedPath = path.resolve(dir, generatedBase);

  infoMap.set(generatedPath, {mapFileDir: dir, mapConsumer: consumer});
}

export class SourceMapper {
  infoMap: Map<string, MapInfoCompiled>;

  static async create(searchDirs: string[]): Promise<SourceMapper> {
    const mapFiles: string[] = [];
    for (const dir of searchDirs) {
      try {
        const mf = await getMapFiles(dir);
        mapFiles.push(...mf);
      } catch (e) {
        throw new Error(`failed to get source maps from ${dir}: ${e}`);
      }
    }
    return createFromMapFiles(mapFiles);
  }

  constructor() {
    this.infoMap = new Map();
  }

  /**
   * Used to get the information about the transpiled file from a given input
   * source file provided there isn't any ambiguity with associating the input
   * path to exactly one output transpiled file.
   */
  getMappingInfo(inputPath: string): MapInfoCompiled | null {
    const normalized = path.normalize(inputPath);
    if (this.infoMap.has(normalized)) {
      return this.infoMap.get(normalized) as MapInfoCompiled;
    }
    return null;
  }

  /**
   * Used to determine if the source file specified by the given path has
   * a .map file and an output file associated with it.
   */
  hasMappingInfo(inputPath: string): boolean {
    return this.getMappingInfo(inputPath) !== null;
  }

  /**
   * Maps a location from generated code back to original source code using
   * configured source maps.
   */
  mappingInfo(location: GeneratedLocation): SourceLocation {
    const inputPath = path.normalize(location.file);
    const entry = this.getMappingInfo(inputPath);
    if (entry === null) {
      return location;
    }

    const generatedPos = {line: location.line, column: location.column};
    const consumer = entry.mapConsumer;
    const pos = consumer.originalPositionFor(generatedPos);
    if (pos.source === null) {
      return location;
    }
    return {
      file: path.resolve(entry.mapFileDir, pos.source),
      line: pos.line || undefined,
      name: pos.name || location.name,
      column: pos.column || undefined,
    };
  }
}

export async function create(searchDirs: string[]): Promise<SourceMapper> {
  return SourceMapper.create(searchDirs);
}

async function createFromMapFiles(mapFiles: string[]): Promise<SourceMapper> {
  const mapper = new SourceMapper();
  try {
    for (const mapPath of mapFiles) {
      await processSourceMap(mapper.infoMap, mapPath);
    }
  } catch (err) {
    throw new Error(
      'An error occurred while processing the source map files' + err
    );
  }
  return mapper;
}

async function getMapFiles(baseDir: string): Promise<string[]> {
  if (!baseDir) {
    throw new Error('hasher.findJSFiles requires a baseDir argument');
  }
  const fileList: string[] = [];

  async function walk(currentDir: string): Promise<void> {
    const entries = await fs.promises.readdir(currentDir, {
      withFileTypes: true,
    });
    for (const entry of entries) {
      if (entry.name === '.git' || entry.name === 'node_modules') {
        continue;
      }
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        await walk(fullPath);
      } else if (entry.isFile() && /\.js\.map$/.test(fullPath)) {
        fileList.push(fullPath);
      }
    }
  }

  const stat = await fs.promises.stat(baseDir);
  if (stat.isDirectory()) {
    await walk(baseDir);
  } else if (stat.isFile() && /\.js\.map$/.test(baseDir)) {
    fileList.push(baseDir);
  }
  return fileList.map(file => path.resolve(file));
}
