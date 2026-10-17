// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const assert = require('assert');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

let secretmanager;
try {
  // eslint-disable-next-line n/no-missing-require
  secretmanager = require('@google-cloud/secret-manager');
} catch (_err) {
  secretmanager = require(
    path.resolve(__dirname, '../../../packages/google-cloud-secretmanager'),
  );
}

const {SecretManagerServiceClient} = secretmanager.v1 || secretmanager;

/**
 * Small verification gist for running `@google-cloud/secret-manager` on the
 * Bun runtime without modifying generated files under `packages/`.
 *
 * Usage:
 *   bun samples/bun-quickstart.js [projects/<projectId>] \
 *     [--secret-version=projects/<p>/secrets/<s>/versions/<v>] \
 *     [--verify-file=/path/to/expected-secret]
 */
async function main(args) {
  if (typeof globalThis.Bun === 'undefined') {
    throw new Error(
      'Expected this script to be executed with the Bun runtime (e.g. `bun samples/bun-quickstart.js`).',
    );
  }
  console.log(
    `Running Secret Manager gist under Bun v${globalThis.Bun.version}`,
  );

  let parentArg;
  let secretVersionName = process.env.BUN_TEST_SECRET_VERSION;
  let verifyFilePath;

  for (const arg of args) {
    if (arg.startsWith('--secret-version=')) {
      secretVersionName = arg.slice('--secret-version='.length);
    } else if (arg.startsWith('--verify-file=')) {
      verifyFilePath = arg.slice('--verify-file='.length);
    } else if (!arg.startsWith('--') && !parentArg) {
      parentArg = arg;
    }
  }

  const client = new SecretManagerServiceClient();

  try {
    // 1. If a specific secret version resource name is provided, verify that
    //    accessing an existing secret version over gRPC works under Bun.
    if (secretVersionName) {
      console.log(`Accessing existing secret version: ${secretVersionName}`);
      const [accessResponse] = await client.accessSecretVersion({
        name: secretVersionName,
      });
      assert.ok(
        accessResponse &&
          accessResponse.payload &&
          accessResponse.payload.data &&
          accessResponse.payload.data.length > 0,
        'Expected non-empty payload from accessSecretVersion',
      );
      const actualBuffer = Buffer.from(accessResponse.payload.data);
      console.log(
        `Successfully accessed ${accessResponse.name} (${actualBuffer.length} bytes)`,
      );

      if (verifyFilePath) {
        const expectedBuffer = fs.readFileSync(verifyFilePath);
        assert.strictEqual(
          actualBuffer.equals(expectedBuffer),
          true,
          `Expected secret payload from ${secretVersionName} to match ${verifyFilePath}`,
        );
        console.log(
          `Verified secret payload matches ${verifyFilePath} (${expectedBuffer.length} bytes)`,
        );
      }

      if (!parentArg) {
        return;
      }
    }

    // 2. Resolve target project and run the Secret Manager lifecycle check.
    let parent = parentArg;
    if (!parent) {
      const projectId =
        process.env.GCLOUD_PROJECT ||
        process.env.GOOGLE_CLOUD_PROJECT ||
        (await client.getProjectId());
      parent = projectId.startsWith('projects/')
        ? projectId
        : `projects/${projectId}`;
    } else if (!parent.startsWith('projects/')) {
      parent = `projects/${parent}`;
    }

    console.log(`Listing secrets in ${parent}...`);
    let listedCount = 0;
    const iterable = client.listSecretsAsync({parent, pageSize: 5});
    for await (const secret of iterable) {
      assert.ok(secret.name, 'Expected secret resource name');
      listedCount++;
      if (listedCount >= 5) {
        break;
      }
    }
    console.log(`Listed ${listedCount} secret(s) in ${parent}`);

    const secretId = `bun-runtime-gist-${crypto.randomUUID()}`;
    const payloadText = `bun-secret-payload-${Date.now()}`;
    let createdSecretName;

    try {
      console.log(`Creating temporary secret ${secretId} in ${parent}...`);
      const [secret] = await client.createSecret({
        parent,
        secretId,
        secret: {
          replication: {
            automatic: {},
          },
        },
      });
      createdSecretName = secret.name;
      console.log(`Created secret: ${createdSecretName}`);

      const [version] = await client.addSecretVersion({
        parent: createdSecretName,
        payload: {
          data: Buffer.from(payloadText, 'utf8'),
        },
      });
      console.log(`Added secret version: ${version.name}`);

      const [metadata] = await client.getSecret({
        name: createdSecretName,
      });
      assert.strictEqual(metadata.name, createdSecretName);

      const [accessResponse] = await client.accessSecretVersion({
        name: version.name,
      });
      const decoded = Buffer.from(accessResponse.payload.data).toString('utf8');
      assert.strictEqual(decoded, payloadText);
      console.log(
        `Verified secret version payload matches expected value (${decoded.length} bytes)`,
      );
    } finally {
      if (createdSecretName) {
        await client.deleteSecret({name: createdSecretName});
        console.log(`Cleaned up temporary secret: ${createdSecretName}`);
      }
    }
  } finally {
    await client.close();
  }
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});

main(process.argv.slice(2));
