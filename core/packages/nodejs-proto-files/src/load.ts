// Copyright 2020 Google LLC
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

import * as path from 'path';
import * as protobuf from 'protobufjs';
import * as walk from 'walkdir';

let COMMON_PROTO_FILES: string[];

export interface GoogleProtoFilesRootOptions {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [index: string]: any;
}

export class GoogleProtoFilesRoot extends protobuf.Root {
  constructor(options?: GoogleProtoFilesRootOptions) {
    super(options);
  }

  // Caches and returns an array of the local common/google core proto files
  // exist on disk.
  static getCommonProtoFiles() {
    const commonProtoDirs = [
      // This list of directories is defined here:
      // https://github.com/googleapis/googleapis/blob/master/gapic/packaging/common_protos.yaml
      'api',
      path.join('logging', 'type'),
      path.join('cloud', 'speech', 'v1'),
      'longrunning',
      'protobuf', // This is an additional path that the common protos depend
      // on.
      'rpc',
      'type',
    ].map(dir => path.join(__dirname, '..', '..', 'google', dir));

    if (!COMMON_PROTO_FILES) {
      COMMON_PROTO_FILES = commonProtoDirs
        .map(dir => {
          return (walk.sync(dir) as string[])
            .filter(f => path.extname(f) === '.proto')
            .map(path.normalize);
        })
        .reduce((a, c) => a.concat(c), []);
    }

    return COMMON_PROTO_FILES;
  }

  // Causes the loading of an included proto to check if it is a common
  // proto. If it is a common proto, use the google-proto-files proto.
  resolvePath(_: string, includePath: string, alreadyNormalized?: boolean) {
    includePath = path.normalize(includePath);

    // Fully qualified paths don't need to be resolved.
    if (path.isAbsolute(includePath)) {
      return includePath;
    }

    const fullIncludePath = path.join(__dirname, '..', '..', includePath);
    const commonProtoFiles = GoogleProtoFilesRoot.getCommonProtoFiles();

    if (commonProtoFiles.indexOf(fullIncludePath) > -1) {
      return fullIncludePath;
    }

    return protobuf.util.path.resolve(_, includePath, alreadyNormalized);
  }
}

export function loadSync(filename: string, options?: protobuf.IParseOptions) {
  const root = new GoogleProtoFilesRoot();
  return root.loadSync(filename, options);
}

export function load(filename: string, options?: protobuf.IParseOptions) {
  const root = new GoogleProtoFilesRoot();
  return root.load(filename, options);
}
