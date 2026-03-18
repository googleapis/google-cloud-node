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

import {
  ExecutableResponse,
  ExecutableResponseError,
  ExecutableResponseJson,
} from './executable-response';
import * as childProcess from 'child_process';
import * as fs from 'fs';

/**
 * Error thrown from the executable run by PluggableAuthClient.
 */
export class ExecutableError extends Error {
  /**
   * The exit code returned by the executable.
   */
  readonly code: string;

  constructor(message: string, code: string) {
    super(
      `The executable failed with exit code: ${code} and error message: ${message}.`,
    );
    this.code = code;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

/**
 * Defines the options used for the PluggableAuthHandler class.
 */
export interface PluggableAuthHandlerOptions {
  /**
   * The command used to retrieve the third party token.
   */
  command: string;
  /**
   * The timeout in milliseconds for running executable,
   * set to default if none provided.
   */
  timeoutMillis: number;
  /**
   * The path to file to check for cached executable response.
   */
  outputFile?: string;
}

/**
 * A handler used to retrieve 3rd party token responses from user defined
 * executables and cached file output for the PluggableAuthClient class.
 */
export class PluggableAuthHandler {
  private readonly commandComponents: Array<string>;
  private readonly timeoutMillis: number;
  private readonly outputFile?: string;

  /**
   * Instantiates a PluggableAuthHandler instance using the provided
   * PluggableAuthHandlerOptions object.
   */
  constructor(options: PluggableAuthHandlerOptions) {
    if (!options.command) {
      throw new Error('No command provided.');
    }
    this.commandComponents = PluggableAuthHandler.parseCommand(
      options.command,
    ) as Array<string>;
    this.timeoutMillis = options.timeoutMillis;
    if (!this.timeoutMillis) {
      throw new Error('No timeoutMillis provided.');
    }
    this.outputFile = options.outputFile;
  }

  /**
   * Calls user provided executable to get a 3rd party subject token and
   * returns the response.
   * @param envMap a Map of additional Environment Variables required for
   *   the executable.
   * @return A promise that resolves with the executable response.
   */
  retrieveResponseFromExecutable(
    envMap: Map<string, string>,
  ): Promise<ExecutableResponse> {
    return new Promise((resolve, reject) => {
      // Spawn process to run executable using added environment variables.
      const child = childProcess.spawn(
        this.commandComponents[0],
        this.commandComponents.slice(1),
        {
          env: {...process.env, ...Object.fromEntries(envMap)},
        },
      );
      let output = '';
      // Append stdout to output as executable runs.
      child.stdout.on('data', (data: string) => {
        output += data;
      });
      // Append stderr as executable runs.
      child.stderr.on('data', (err: string) => {
        output += err;
      });

      // Set up a timeout to end the child process and throw an error.
      const timeout = setTimeout(() => {
        // Kill child process and remove listeners so 'close' event doesn't get
        // read after child process is killed.
        child.removeAllListeners();
        child.kill();
        return reject(
          new Error(
            'The executable failed to finish within the timeout specified.',
          ),
        );
      }, this.timeoutMillis);

      child.on('close', (code: number) => {
        // Cancel timeout if executable closes before timeout is reached.
        clearTimeout(timeout);
        if (code === 0) {
          // If the executable completed successfully, try to return the parsed response.
          try {
            const responseJson = JSON.parse(output) as ExecutableResponseJson;
            const response = new ExecutableResponse(responseJson);
            return resolve(response);
          } catch (error) {
            if (error instanceof ExecutableResponseError) {
              return reject(error);
            }
            return reject(
              new ExecutableResponseError(
                `The executable returned an invalid response: ${output}`,
              ),
            );
          }
        } else {
          return reject(new ExecutableError(output, code.toString()));
        }
      });
    });
  }

  /**
   * Checks user provided output file for response from previous run of
   * executable and return the response if it exists, is formatted correctly, and is not expired.
   */
  async retrieveCachedResponse(): Promise<ExecutableResponse | undefined> {
    if (!this.outputFile || this.outputFile.length === 0) {
      return undefined;
    }

    let filePath: fs.PathLike;
    try {
      filePath = await fs.promises.realpath(this.outputFile as string);
    } catch {
      // If file path cannot be resolved, return undefined.
      return undefined;
    }

    if (!(await fs.promises.lstat(filePath)).isFile()) {
      // If path does not lead to file, return undefined.
      return undefined;
    }

    const responseString = await fs.promises.readFile(filePath, {
      encoding: 'utf8',
    });

    if (responseString === '') {
      return undefined;
    }

    try {
      const responseJson = JSON.parse(responseString) as ExecutableResponseJson;
      const response = new ExecutableResponse(responseJson);

      // Check if response is successful and unexpired.
      if (response.isValid()) {
        return new ExecutableResponse(responseJson);
      }
      return undefined;
    } catch (error) {
      if (error instanceof ExecutableResponseError) {
        throw error;
      }
      throw new ExecutableResponseError(
        `The output file contained an invalid response: ${responseString}`,
      );
    }
  }

  /**
   * Parses given command string into component array, splitting on spaces unless
   * spaces are between quotation marks.
   */
  private static parseCommand(command: string): Array<string> {
    // Split the command into components by splitting on spaces,
    // unless spaces are contained in quotation marks.
    const components = command.match(/(?:[^\s"]+|"[^"]*")+/g);
    if (!components) {
      throw new Error(`Provided command: "${command}" could not be parsed.`);
    }

    // Remove quotation marks from the beginning and end of each component if they are present.
    for (let i = 0; i < components.length; i++) {
      if (components[i][0] === '"' && components[i].slice(-1) === '"') {
        components[i] = components[i].slice(1, -1);
      }
    }

    return components;
  }
}
