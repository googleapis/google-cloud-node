// Copyright 2024 Google LLC
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

import {
  SubjectTokenFormatType,
  SubjectTokenJsonResponse,
  SubjectTokenSupplier,
} from './identitypoolclient';
import {promisify} from 'util';
import * as fs from 'fs';

// fs.readfile is undefined in browser karma tests causing
// `npm run browser-test` to fail as test.oauth2.ts imports this file via
// src/index.ts.
// Fallback to void function to avoid promisify throwing a TypeError.
const readFile = promisify(fs.readFile ?? (() => {}));
const realpath = promisify(fs.realpath ?? (() => {}));
const lstat = promisify(fs.lstat ?? (() => {}));

/**
 * Interface that defines options used to build a {@link FileSubjectTokenSupplier}
 */
export interface FileSubjectTokenSupplierOptions {
  /**
   * The file path where the external credential is located.
   */
  filePath: string;
  /**
   * The token file or URL response type (JSON or text).
   */
  formatType: SubjectTokenFormatType;
  /**
   * For JSON response types, this is the subject_token field name. For Azure,
   * this is access_token. For text response types, this is ignored.
   */
  subjectTokenFieldName?: string;
}

/**
 * Internal subject token supplier implementation used when a file location
 * is configured in the credential configuration used to build an {@link IdentityPoolClient}
 */
export class FileSubjectTokenSupplier implements SubjectTokenSupplier {
  private readonly filePath: string;
  private readonly formatType: SubjectTokenFormatType;
  private readonly subjectTokenFieldName?: string;

  /**
   * Instantiates a new file based subject token supplier.
   * @param opts The file subject token supplier options to build the supplier
   *   with.
   */
  constructor(opts: FileSubjectTokenSupplierOptions) {
    this.filePath = opts.filePath;
    this.formatType = opts.formatType;
    this.subjectTokenFieldName = opts.subjectTokenFieldName;
  }

  /**
   * Returns the subject token stored at the file specified in the constructor.
   * @param context {@link ExternalAccountSupplierContext} from the calling
   *   {@link IdentityPoolClient}, contains the requested audience and subject
   *   token type for the external account identity. Not used.
   */
  async getSubjectToken(): Promise<string> {
    // Make sure there is a file at the path. lstatSync will throw if there is
    // nothing there.
    let parsedFilePath = this.filePath;
    try {
      // Resolve path to actual file in case of symlink. Expect a thrown error
      // if not resolvable.
      parsedFilePath = await realpath(parsedFilePath);

      if (!(await lstat(parsedFilePath)).isFile()) {
        throw new Error();
      }
    } catch (err) {
      if (err instanceof Error) {
        err.message = `The file at ${parsedFilePath} does not exist, or it is not a file. ${err.message}`;
      }

      throw err;
    }

    let subjectToken: string | undefined;
    const rawText = await readFile(parsedFilePath, {encoding: 'utf8'});
    if (this.formatType === 'text') {
      subjectToken = rawText;
    } else if (this.formatType === 'json' && this.subjectTokenFieldName) {
      const json = JSON.parse(rawText) as SubjectTokenJsonResponse;
      subjectToken = json[this.subjectTokenFieldName];
    }
    if (!subjectToken) {
      throw new Error(
        'Unable to parse the subject_token from the credential_source file',
      );
    }
    return subjectToken;
  }
}
