// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const fs = require('fs');
const path = require('path');

/**
 * Replaces all occurrences of a pattern in a file with a specified replacement string.
 * @param {string} filePath The path to the file.
 * @param {RegExp} pattern The regular expression to search for.
 * @param {string} replacement The string to replace the pattern with.
 */
function replaceInFile(filePath, pattern, replacement) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const result = data.replace(pattern, replacement);
    fs.writeFileSync(filePath, result, 'utf8');
    console.log(`Successfully updated: ${filePath}`);
  } catch (err) {
    console.error(`Error processing file ${filePath}:`, err);
  }
}

const filePath = 'packages/google-cloud-secretmanager/src/v1/secret_manager_service_client.ts';

const replacement1 = `return Promise.resolve();
  }

  /**
   * Return a fully-qualified project resource name string.
   *
   * @param {string} project
   * @returns {string} Resource name string.
   */
  secretPath(project: string, secret: string) {
    return this.pathTemplates.secretPathTemplate.render({
      project: project,
      secret: secret,
    });
  }

  /**
   * Parse the project from Secret resource.
   *
   * @param {string} secretName
   *   A fully-qualified path representing Secret resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromSecretName(secretName: string) {
    return this.pathTemplates.secretPathTemplate.match(secretName).project;
  }

  /**
   * Parse the secret from Secret resource.
   *
   * @param {string} secretName
   *   A fully-qualified path representing Secret resource.
   * @returns {string} A string representing the secret.
   */
  matchSecretFromSecretName(secretName: string) {
    return this.pathTemplates.secretPathTemplate.match(secretName).secret;
  }

  /**
   * Return a fully-qualified secretVersion resource name string.
   *
   * @param {string} project
   * @param {string} secret
   * @param {string} secret_version
   * @returns {string} Resource name string.
   */
  secretVersionPath(project: string, secret: string, secretVersion: string) {
    return this.pathTemplates.secretVersionPathTemplate.render({
      project: project,
      secret: secret,
      secret_version: secretVersion,
    });
  }

  /**
   * Parse the project from SecretVersion resource.
   *
   * @param {string} secretVersionName
   *   A fully-qualified path representing SecretVersion resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromSecretVersionName(secretVersionName: string) {
    return this.pathTemplates.secretVersionPathTemplate.match(secretVersionName)
      .project;
  }
  /**
   * Parse the secret from SecretVersion resource.
   *
   * @param {string} secretVersionName
   *   A fully-qualified path representing SecretVersion resource.
   * @returns {string} A string representing the secret.
   */
    matchSecretFromSecretVersionName(secretVersionName: string) {
    return this.pathTemplates.secretVersionPathTemplate.match(secretVersionName)
      .secret;
  }

  /**
   * Parse the secret_version from SecretVersion resource.
   *
   * @param {string} secretVersionName
   *   A fully-qualified path representing SecretVersion resource.
   * @returns {string} A string representing the secret_version.
   */
  matchSecretVersionFromSecretVersionName(secretVersionName: string) {
    return this.pathTemplates.secretVersionPathTemplate.match(secretVersionName)
      .secret_version;
  }
}`;

const replacement2 = `topicPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/topics/{topic}'
      ),
      secretPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/secrets/{secret}'
      ),
      secretVersionPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/secrets/{secret}/versions/{secret_version}'
      ),
    };`;

replaceInFile(path.resolve(filePath), /return\sPromise\.resolve\(\);\s+}\s+}/g, replacement1);
replaceInFile(path.resolve(filePath), /topicPathTemplate:\s+new\s+this\._gaxModule\.PathTemplate\(\s+'projects\/{project}\/topics\/{topic}'\s+\),\s+};/g, replacement2);