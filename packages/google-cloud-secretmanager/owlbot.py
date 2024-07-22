# Copyright 2024 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""This script is used to synthesize generated parts of this library."""

import synthtool as s
import synthtool.languages.node_mono_repo as node
import pathlib


node.owlbot_main(relative_dir="packages/google-cloud-secretmanager",
    staging_excludes=["README.md", "package.json"]
)

s.replace('packages/google-cloud-secretmanager/src/v1/secret_manager_service_client.ts',
  r"return\sPromise\.resolve\(\);\s+}\s+}",
  r"""return Promise.resolve();
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
}
""")

s.replace('packages/google-cloud-secretmanager/src/v1/secret_manager_service_client.ts',
  r"topicPathTemplate:\s+new\s+this\._gaxModule\.PathTemplate\(\s+'projects\/{project}\/topics\/{topic}'\s+\),\s+};",
  r"""topicPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/topics/{topic}'
      ),
      secretPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/secrets/{secret}'
      ),
      secretVersionPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/secrets/{secret}/versions/{secret_version}'
      ),
    };
""")
