/*!
 * Copyright 2026 Google LLC. All Rights Reserved.
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

import {Storage, File, Bucket, Notification, HmacKey} from '../src/index.js';
import {performance} from 'perf_hooks';
import * as path from 'path';
import * as fs from 'fs';
import {execSync} from 'child_process';
import * as os from 'os';
import yargs from 'yargs';
import {randomBytes} from 'crypto';

interface Args {
  projectId: string;
  bucket: string;
  iterations: number;
  concurrency: number;
  baseline?: string;
  fileSize: number;
  resumable?: boolean;
}

const argv = yargs(process.argv.slice(2))
  .option('projectId', {
    type: 'string',
    alias: 'projectid',
    demandOption: true,
    description: 'Google Cloud Project ID',
  })
  .option('bucket', {
    type: 'string',
    demandOption: true,
    description: 'Cloud Storage Bucket Name',
  })
  .option('iterations', {
    type: 'number',
    default: 100,
    description: 'Number of iterations for each test',
  })
  .option('concurrency', {
    type: 'number',
    alias: 'c',
    default: 1,
    description:
      'Number of concurrent operations to run in parallel (default: 1)',
  })
  .option('baseline', {
    type: 'string',
    description:
      'Baseline version of @google-cloud/storage to compare against (e.g., 7.19.0)',
  })
  .option('fileSize', {
    type: 'number',
    default: 1024,
    description: 'File size in bytes for benchmark uploads',
  })
  .option('resumable', {
    type: 'boolean',
    description: 'Force resumable upload for the upload scenario',
  })
  .parseSync() as unknown as Args;

let tempDirToDelete: string | undefined;

async function loadBaseline(version: string) {
  const semverRegex = /^\d+\.\d+\.\d+(-[a-zA-Z0-9.]+)?$/;
  if (!semverRegex.test(version)) {
    throw new Error(
      `Invalid baseline version format: "${version}". Must be a valid semver string (e.g. 7.19.0).`,
    );
  }

  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'storage-benchmark-'));
  tempDirToDelete = tempDir; // Track for cleanup

  console.log(`Installing baseline version ${version} in ${tempDir}...`);
  fs.writeFileSync(
    path.join(tempDir, 'package.json'),
    JSON.stringify({name: 'bench-temp'}),
  );
  execSync(`npm install @google-cloud/storage@${version} --silent`, {
    cwd: tempDir,
  });
  const baselinePath = path.join(
    tempDir,
    'node_modules',
    '@google-cloud/storage',
  );

  const pkgJson = JSON.parse(
    fs.readFileSync(path.join(baselinePath, 'package.json'), 'utf8'),
  );
  const main = pkgJson.main || './build/src/index.js';
  const entry = path.join(baselinePath, main);

  console.log(`Loading baseline from ${entry}`);
  const pkg = await import(entry);
  return pkg.Storage || pkg.default?.Storage || pkg.default;
}

const logMemory = (prefix: string) => {
  const mem = process.memoryUsage();
  console.log(
    `${prefix} - Heap Used: ${(mem.heapUsed / 1024 / 1024).toFixed(2)} MB / Heap Total: ${(mem.heapTotal / 1024 / 1024).toFixed(2)} MB`,
  );
};

async function cleanupResources(
  resources: Array<{delete(): Promise<unknown>}>,
  concurrency = 32,
) {
  for (let i = 0; i < resources.length; i += concurrency) {
    const chunk = resources.slice(i, i + concurrency);
    await Promise.all(chunk.map(r => r.delete().catch(() => {})));
  }
}

/**
 * Generic concurrency worker pool executor.
 * Runs `total` operations with at most `concurrency` in-flight promises simultaneously.
 */
async function runConcurrent<T>(
  total: number,
  concurrency: number,
  workerFn: (index: number) => Promise<T>,
  onProgress?: (completedCount: number) => void,
): Promise<T[]> {
  const results: T[] = new Array(total);
  let nextIndex = 0;
  let completed = 0;

  const poolSize = Math.max(1, Math.min(concurrency, total));
  const workers = Array.from({length: poolSize}, async () => {
    while (nextIndex < total) {
      const idx = nextIndex++;
      if (idx >= total) break;
      results[idx] = await workerFn(idx);
      completed++;
      if (onProgress && (completed % 10 === 0 || completed === total)) {
        onProgress(completed);
      }
    }
  });

  await Promise.all(workers);
  return results.filter(r => r !== undefined);
}

async function runUploadScenario(
  bucket: Bucket,
  content: Buffer,
  name: string,
  uploadedFiles: File[],
): Promise<number[]> {
  console.log(
    `Starting Scenario: Upload (${argv.fileSize} bytes, concurrency: ${argv.concurrency})...`,
  );
  const options =
    argv.resumable !== undefined ? {resumable: argv.resumable} : {};

  return runConcurrent(
    argv.iterations,
    argv.concurrency,
    async i => {
      const iterFilename = `bench-${name}-${Date.now()}-${i}.bin`;
      const iterFile = bucket.file(iterFilename);
      const start = performance.now();
      await iterFile.save(content, options);
      const duration = performance.now() - start;
      uploadedFiles.push(iterFile);
      return duration;
    },
    completed =>
      logMemory(`  Upload completed ${completed}/${argv.iterations}`),
  );
}

async function runStreamUploadScenario(
  bucket: Bucket,
  content: Buffer,
  name: string,
  uploadedFiles: File[],
): Promise<number[]> {
  console.log(
    `Starting Scenario: Stream Upload (${argv.fileSize} bytes, concurrency: ${argv.concurrency})...`,
  );
  const options =
    argv.resumable !== undefined ? {resumable: argv.resumable} : {};

  return runConcurrent(
    argv.iterations,
    argv.concurrency,
    async i => {
      const iterFilename = `bench-stream-${name}-${Date.now()}-${i}.bin`;
      const iterFile = bucket.file(iterFilename);
      const start = performance.now();
      await new Promise<void>((resolve, reject) => {
        const writeStream = iterFile.createWriteStream(options);
        writeStream.on('finish', () => resolve());
        writeStream.on('error', err => reject(err));
        writeStream.end(content);
      });
      const duration = performance.now() - start;
      uploadedFiles.push(iterFile);
      return duration;
    },
    completed =>
      logMemory(`  Stream Upload completed ${completed}/${argv.iterations}`),
  );
}

async function runLocalFileUploadScenario(
  bucket: Bucket,
  content: Buffer,
  name: string,
  uploadedFiles: File[],
): Promise<{resumableTimes: number[]; multipartTimes: number[]}> {
  console.log(
    `Starting Scenario: Local bucket.upload() (${argv.fileSize} bytes, concurrency: ${argv.concurrency})...`,
  );

  const localFilePath = path.join(
    os.tmpdir(),
    `bench-local-${name}-${Date.now()}.bin`,
  );
  fs.writeFileSync(localFilePath, content);

  try {
    const resumableTimes = await runConcurrent(
      argv.iterations,
      argv.concurrency,
      async i => {
        const resName = `bench-upload-res-${name}-${Date.now()}-${i}.bin`;
        const start = performance.now();
        const [resFile] = await bucket.upload(localFilePath, {
          destination: resName,
          resumable: true,
        });
        const duration = performance.now() - start;
        uploadedFiles.push(resFile);
        return duration;
      },
      completed =>
        logMemory(
          `  Local Resumable Upload completed ${completed}/${argv.iterations}`,
        ),
    );

    const multipartTimes = await runConcurrent(
      argv.iterations,
      argv.concurrency,
      async i => {
        const multiName = `bench-upload-multi-${name}-${Date.now()}-${i}.bin`;
        const start = performance.now();
        const [multiFile] = await bucket.upload(localFilePath, {
          destination: multiName,
          resumable: false,
        });
        const duration = performance.now() - start;
        uploadedFiles.push(multiFile);
        return duration;
      },
      completed =>
        logMemory(
          `  Local Multipart Upload completed ${completed}/${argv.iterations}`,
        ),
    );

    return {resumableTimes, multipartTimes};
  } finally {
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }
  }
}

async function runMetadataScenario(mainFile: File): Promise<number[]> {
  console.log(
    `Starting Scenario: Get Metadata (concurrency: ${argv.concurrency})...`,
  );
  return runConcurrent(
    argv.iterations,
    argv.concurrency,
    async () => {
      const start = performance.now();
      await mainFile.getMetadata();
      return performance.now() - start;
    },
    completed =>
      logMemory(`  Metadata completed ${completed}/${argv.iterations}`),
  );
}

async function runDownloadScenario(mainFile: File): Promise<number[]> {
  console.log(
    `Starting Scenario: Download (${argv.fileSize} bytes, concurrency: ${argv.concurrency})...`,
  );
  return runConcurrent(
    argv.iterations,
    argv.concurrency,
    async () => {
      const start = performance.now();
      await mainFile.download();
      return performance.now() - start;
    },
    completed =>
      logMemory(`  Download completed ${completed}/${argv.iterations}`),
  );
}

async function runStreamDownloadScenario(mainFile: File): Promise<number[]> {
  console.log(
    `Starting Scenario: Stream Download (${argv.fileSize} bytes, concurrency: ${argv.concurrency})...`,
  );
  return runConcurrent(
    argv.iterations,
    argv.concurrency,
    async () => {
      const start = performance.now();
      await new Promise<void>((resolve, reject) => {
        const readStream = mainFile.createReadStream();
        readStream.on('data', () => {});
        readStream.on('end', () => resolve());
        readStream.on('error', err => reject(err));
      });
      return performance.now() - start;
    },
    completed =>
      logMemory(`  Stream Download completed ${completed}/${argv.iterations}`),
  );
}

async function runFileGetSaveAndResumableCreateScenario(
  bucket: Bucket,
  mainFile: File,
  content: Buffer,
): Promise<{
  getTimes: number[];
  createResumableTimes: number[];
  saveMultipartTimes: number[];
}> {
  console.log(
    `Starting Scenario: File .get(), save(multipart), and createResumableUpload() (concurrency: ${argv.concurrency})...`,
  );

  const tempFiles: File[] = [];

  try {
    const results = await runConcurrent(
      argv.iterations,
      argv.concurrency,
      async i => {
        // 1. file.get()
        let start = performance.now();
        await mainFile.get();
        const getTime = performance.now() - start;

        // 2. Explicit multipart save
        const multiFile = bucket.file(
          `bench-save-multi-${Date.now()}-${i}.bin`,
        );
        tempFiles.push(multiFile);
        start = performance.now();
        await multiFile.save(content, {resumable: false});
        const saveMultipartTime = performance.now() - start;

        // 3. createResumableUpload explicitly
        const resFile = bucket.file(`bench-createres-${Date.now()}-${i}.bin`);
        tempFiles.push(resFile);
        start = performance.now();
        await resFile.createResumableUpload();
        const createResumableTime = performance.now() - start;

        return {getTime, saveMultipartTime, createResumableTime};
      },
      completed =>
        logMemory(
          `  Missing Methods completed ${completed}/${argv.iterations}`,
        ),
    );

    return {
      getTimes: results.map(r => r.getTime),
      saveMultipartTimes: results.map(r => r.saveMultipartTime),
      createResumableTimes: results.map(r => r.createResumableTime),
    };
  } finally {
    await cleanupResources(tempFiles);
  }
}

async function runListFilesScenario(
  bucket: Bucket,
  prefix: string,
): Promise<number[]> {
  console.log(
    `Starting Scenario: List Files (getFiles & getFilesStream, concurrency: ${argv.concurrency})...`,
  );
  return runConcurrent(
    argv.iterations,
    argv.concurrency,
    async () => {
      const start = performance.now();
      await bucket.getFiles({prefix, maxResults: 100});

      // getFilesStream
      await new Promise<void>((resolve, reject) => {
        const stream = bucket.getFilesStream({prefix, maxResults: 100});
        stream.on('data', () => {});
        stream.on('end', () => resolve());
        stream.on('error', err => reject(err));
      });

      return performance.now() - start;
    },
    completed =>
      logMemory(`  List Files completed ${completed}/${argv.iterations}`),
  );
}

async function runExistsScenario(mainFile: File): Promise<number[]> {
  console.log(
    `Starting Scenario: Exists (concurrency: ${argv.concurrency})...`,
  );
  return runConcurrent(
    argv.iterations,
    argv.concurrency,
    async () => {
      const start = performance.now();
      await mainFile.exists();
      return performance.now() - start;
    },
    completed =>
      logMemory(`  Exists completed ${completed}/${argv.iterations}`),
  );
}

async function runSetMetadataScenario(
  bucket: Bucket,
  name: string,
): Promise<number[]> {
  console.log(
    `Starting Scenario: Set Metadata (concurrency: ${argv.concurrency})...`,
  );
  const tempFiles: File[] = [];
  try {
    await runConcurrent(argv.iterations, argv.concurrency, async i => {
      const filename = `bench-setmeta-${name}-${Date.now()}-${i}.bin`;
      const file = bucket.file(filename);
      await file.save(Buffer.alloc(64));
      tempFiles.push(file);
    });

    return await runConcurrent(
      argv.iterations,
      argv.concurrency,
      async i => {
        const file = tempFiles[i];
        const start = performance.now();
        try {
          await file.setMetadata({
            metadata: {
              benchmarkedAt: new Date().toISOString(),
              iteration: i.toString(),
            },
          });
          return performance.now() - start;
        } catch (err) {
          console.warn('    [Warning] Set Metadata iteration failed:', err);
          return 0;
        }
      },
      completed =>
        logMemory(`  Set Metadata completed ${completed}/${argv.iterations}`),
    );
  } finally {
    await cleanupResources(tempFiles);
  }
}

async function runDeleteScenario(
  bucket: Bucket,
  name: string,
  content: Buffer,
): Promise<number[]> {
  console.log(
    `Starting Scenario: Delete (concurrency: ${argv.concurrency})...`,
  );
  const filesToDelete: File[] = [];

  await runConcurrent(argv.iterations, argv.concurrency, async i => {
    const filename = `bench-delete-target-${name}-${Date.now()}-${i}.bin`;
    const file = bucket.file(filename);
    await file.save(content);
    filesToDelete.push(file);
  });

  return runConcurrent(
    argv.iterations,
    argv.concurrency,
    async i => {
      const file = filesToDelete[i];
      const start = performance.now();
      await file.delete();
      return performance.now() - start;
    },
    completed =>
      logMemory(`  Delete completed ${completed}/${argv.iterations}`),
  );
}

async function runBucketLifecycleScenario(
  storage: Storage,
  name: string,
): Promise<number[]> {
  console.log(
    `Starting Scenario: Bucket Lifecycle (Create, Get, Exists, Delete, concurrency: ${Math.min(argv.concurrency, 8)})...`,
  );
  const safeName = name
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  // Bounded concurrency for bucket creation to avoid GCP project-level rate limit spikes
  const bucketConcurrency = Math.min(argv.concurrency, 8);

  return runConcurrent(
    argv.iterations,
    bucketConcurrency,
    async i => {
      const bucketName = `bench-lifecycle-${safeName}-${Date.now()}-${i}`;
      const bucket = storage.bucket(bucketName);

      const start = performance.now();
      await storage.createBucket(bucketName);
      await bucket.get();
      await bucket.exists();
      await bucket.getMetadata();
      await bucket.delete();
      return performance.now() - start;
    },
    completed =>
      logMemory(`  Bucket Lifecycle completed ${completed}/${argv.iterations}`),
  );
}

async function runBucketPatchScenario(
  storage: Storage,
  name: string,
): Promise<number[]> {
  const safeName = name
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  const bucketName = `bench-patch-${safeName}-${Date.now()}`;
  const bucket = storage.bucket(bucketName);
  await bucket.create();

  try {
    return await runConcurrent(
      argv.iterations,
      argv.concurrency,
      async i => {
        const start = performance.now();
        await bucket.setMetadata({
          metadata: {
            customLabel: i.toString(),
          },
        });
        await bucket.setLabels({testlabel: 'val'});
        await bucket.getLabels();
        await bucket.deleteLabels('testlabel');
        await bucket.addLifecycleRule({
          action: {type: 'Delete'},
          condition: {age: 365},
        });
        await bucket.enableRequesterPays();
        await bucket.disableRequesterPays();
        await bucket.enableLogging({
          bucket: bucketName,
          prefix: 'log',
        });
        await bucket.setCorsConfiguration([
          {
            maxAgeSeconds: 3600,
            method: ['GET'],
            origin: ['*'],
          },
        ]);
        await bucket.setRetentionPeriod(1000);
        await bucket.removeRetentionPeriod();
        await bucket.setStorageClass('nearline');
        await bucket.makePublic();
        await bucket.makePrivate();
        return performance.now() - start;
      },
      completed =>
        logMemory(`  Bucket Patch completed ${completed}/${argv.iterations}`),
    );
  } finally {
    await bucket.delete().catch(() => {});
  }
}

async function runBucketLockScenario(
  storage: Storage,
  name: string,
): Promise<number[]> {
  const safeName = name
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  const bucketName = `bench-lock-${safeName}-${Date.now()}`;
  const bucket = storage.bucket(bucketName);
  await bucket.create();

  try {
    return await runConcurrent(
      argv.iterations,
      argv.concurrency,
      async () => {
        await bucket.setRetentionPeriod(1000);
        const [metadata] = await bucket.getMetadata();
        const metageneration = metadata.metageneration;

        const start = performance.now();
        await bucket.lock(metageneration!);
        return performance.now() - start;
      },
      completed =>
        logMemory(`  Bucket Lock completed ${completed}/${argv.iterations}`),
    );
  } finally {
    await bucket.delete().catch(() => {});
  }
}

async function runStorageListAndAccountScenario(
  storage: Storage,
): Promise<number[]> {
  console.log(
    `Starting Scenario: Storage List and Service Account (concurrency: ${argv.concurrency})...`,
  );
  return runConcurrent(
    argv.iterations,
    argv.concurrency,
    async () => {
      const start = performance.now();
      await storage.getBuckets({maxResults: 10});

      await new Promise<void>((resolve, reject) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const stream = (storage as any).getBucketsStream({maxResults: 10});
        stream.on('data', () => {});
        stream.on('end', () => resolve());
        stream.on('error', (err: unknown) => reject(err));
      });

      await storage.getServiceAccount();
      return performance.now() - start;
    },
    completed =>
      logMemory(
        `  Storage List/Account completed ${completed}/${argv.iterations}`,
      ),
  );
}

async function runFilePatchAndAclScenario(
  bucket: Bucket,
  file: File,
): Promise<number[]> {
  console.log(
    `Starting Scenario: File Patch, Get, and ACL (concurrency: ${argv.concurrency})...`,
  );
  return runConcurrent(argv.iterations, argv.concurrency, async i => {
    const start = performance.now();
    try {
      await file.makePublic();
      await file.isPublic();
      await file.makePrivate();
      await file.getExpirationDate();
      return performance.now() - start;
    } catch {
      if (i === 0) {
        console.warn(
          '    [Skip] Bucket likely has Uniform Bucket-Level Access enabled. Skipping ACL benchmark.',
        );
      }
      return 0;
    }
  });
}

async function runFileCopyMoveComposeScenario(
  bucket: Bucket,
  mainFile: File,
  name: string,
): Promise<number[]> {
  console.log(
    `Starting Scenario: File Copy, Move, Rename, Rotate Key, Storage Class and Compose (concurrency: ${argv.concurrency})...`,
  );
  const tempFiles: File[] = [];

  try {
    return await runConcurrent(
      argv.iterations,
      argv.concurrency,
      async i => {
        const destFilename = `bench-copy-dest-${name}-${Date.now()}-${i}.bin`;
        const movedFilename = `bench-moved-${name}-${Date.now()}-${i}.bin`;
        const composedFilename = `bench-composed-${name}-${Date.now()}-${i}.bin`;

        const destFile = bucket.file(destFilename);
        const movedFile = bucket.file(movedFilename);
        const composedFile = bucket.file(composedFilename);

        const start = performance.now();
        await mainFile.copy(destFile);
        await destFile.setStorageClass('nearline');

        try {
          const encFilename = `bench-enc-${name}-${Date.now()}-${i}.bin`;
          const key1 = randomBytes(32);
          const encFile = bucket.file(encFilename, {encryptionKey: key1});
          const content = Buffer.alloc(1024, 'a');
          await encFile.save(content);
          const key2 = randomBytes(32);
          await encFile.rotateEncryptionKey({encryptionKey: key2});
          await encFile.delete();
        } catch (encErr) {
          // ignore optional encryption rotation errors
        }

        await destFile.move(movedFile);
        await bucket.combine([mainFile, movedFile], composedFile);

        tempFiles.push(movedFile, composedFile);
        return performance.now() - start;
      },
      completed =>
        logMemory(
          `  File Copy/Move/Compose completed ${completed}/${argv.iterations}`,
        ),
    );
  } finally {
    await cleanupResources(tempFiles);
  }
}

async function runNotificationScenario(bucket: Bucket): Promise<number[]> {
  console.log(
    `Starting Scenario: Notifications (concurrency: ${argv.concurrency})...`,
  );
  const dummyTopic = `projects/${argv.projectId}/topics/bench-topic-${Date.now()}`;
  const createdNotifications: Notification[] = [];

  try {
    return await runConcurrent(
      argv.iterations,
      argv.concurrency,
      async () => {
        const start = performance.now();
        try {
          const [notification] = await bucket.createNotification(dummyTopic);
          createdNotifications.push(notification);

          await notification.getMetadata();
          await notification.get();
          await notification.exists();
          await bucket.getNotifications();
          await notification.delete();
        } catch (err) {
          // skip
        }
        return performance.now() - start;
      },
      completed =>
        logMemory(`  Notification completed ${completed}/${argv.iterations}`),
    );
  } finally {
    await cleanupResources(createdNotifications);
  }
}

async function runHmacKeyScenario(storage: Storage): Promise<number[]> {
  console.log(
    `Starting Scenario: HMAC Key Management (concurrency: ${argv.concurrency})...`,
  );
  const keysToDelete: HmacKey[] = [];

  try {
    const [serviceAccount] = await storage.getServiceAccount();
    const email = serviceAccount.email_address;
    if (!email) {
      throw new Error('Service account email is required');
    }

    return await runConcurrent(
      argv.iterations,
      argv.concurrency,
      async () => {
        const start = performance.now();
        try {
          const [hmacKey] = await storage.createHmacKey(email);
          keysToDelete.push(hmacKey);

          await hmacKey.getMetadata();
          await hmacKey.get();

          await new Promise<void>((resolve, reject) => {
            const stream = storage.getHmacKeysStream();
            stream.on('data', () => {});
            stream.on('end', () => resolve());
            stream.on('error', err => reject(err));
          });

          await hmacKey.setMetadata({state: 'INACTIVE'});
          await hmacKey.delete();
        } catch (err) {
          // skip
        }
        return performance.now() - start;
      },
      completed =>
        logMemory(`  HMAC Key completed ${completed}/${argv.iterations}`),
    );
  } catch (err) {
    console.warn(
      '    [Warning] HMAC Scenario initialization failed (could not fetch service account). Skipping.',
    );
    return [];
  } finally {
    for (const key of keysToDelete) {
      try {
        await key.setMetadata({state: 'INACTIVE'}).catch(() => {});
        await key.delete().catch(() => {});
      } catch {
        /* empty */
      }
    }
  }
}

async function runBucketIamScenario(bucket: Bucket): Promise<number[]> {
  console.log(
    `Starting Scenario: Bucket IAM (getIamPolicy, setIamPolicy, testIamPermissions)...`,
  );
  // IAM policy mutation on a single bucket must run serially to avoid optimistic concurrency (412) etag conflicts
  return runConcurrent(
    argv.iterations,
    1,
    async () => {
      const start = performance.now();
      try {
        const [policy] = await bucket.iam.getPolicy();
        await bucket.iam.setPolicy(policy);
        await bucket.iam.testPermissions(['storage.buckets.get']);
      } catch (err) {
        // skip
      }
      return performance.now() - start;
    },
    completed =>
      logMemory(`  Bucket IAM completed ${completed}/${argv.iterations}`),
  );
}

async function runBenchmark(
  StorageClass: typeof Storage,
  name: string,
  bucketName: string,
) {
  const storage = new StorageClass({projectId: argv.projectId});
  const bucket = storage.bucket(bucketName);
  const content = Buffer.alloc(argv.fileSize, 'a');
  const uploadedFiles: File[] = [];
  const safeName = name
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  console.log(
    `\n=== Running benchmark for ${name} (Concurrency: ${argv.concurrency}) ===`,
  );

  try {
    const uploadTimes = await runUploadScenario(
      bucket,
      content,
      safeName,
      uploadedFiles,
    );
    reportResults(`Upload (${argv.fileSize} bytes)`, uploadTimes, true);
    logMemory('After Upload');

    const streamUploadedFiles: File[] = [];
    const streamUploadTimes = await runStreamUploadScenario(
      bucket,
      content,
      safeName,
      streamUploadedFiles,
    );
    reportResults(
      `Stream Upload (${argv.fileSize} bytes)`,
      streamUploadTimes,
      true,
    );
    logMemory('After Stream Upload');
    uploadedFiles.push(...streamUploadedFiles);

    const localUploadResults = await runLocalFileUploadScenario(
      bucket,
      content,
      safeName,
      uploadedFiles,
    );
    reportResults(
      'Local bucket.upload() Resumable',
      localUploadResults.resumableTimes,
      true,
    );
    reportResults(
      'Local bucket.upload() Multipart',
      localUploadResults.multipartTimes,
      true,
    );
    logMemory('After Local Uploads');

    const mainFile = uploadedFiles[0];

    const metadataTimes = await runMetadataScenario(mainFile);
    reportResults('Get Metadata', metadataTimes);
    logMemory('After Metadata');

    const fileGetSaveCreateResults =
      await runFileGetSaveAndResumableCreateScenario(bucket, mainFile, content);
    reportResults('File .get()', fileGetSaveCreateResults.getTimes);
    reportResults(
      'File .save({ resumable: false })',
      fileGetSaveCreateResults.saveMultipartTimes,
      true,
    );
    reportResults(
      'File .createResumableUpload()',
      fileGetSaveCreateResults.createResumableTimes,
    );
    logMemory('After File Get, Save, and Resumable Create');

    const downloadTimes = await runDownloadScenario(mainFile);
    reportResults(`Download (${argv.fileSize} bytes)`, downloadTimes, true);
    logMemory('After Download');

    const streamDownloadTimes = await runStreamDownloadScenario(mainFile);
    reportResults(
      `Stream Download (${argv.fileSize} bytes)`,
      streamDownloadTimes,
      true,
    );
    logMemory('After Stream Download');

    const listTimes = await runListFilesScenario(bucket, `bench-${safeName}`);
    reportResults('List Files', listTimes);
    logMemory('After List Files');

    const existsTimes = await runExistsScenario(mainFile);
    reportResults('Exists', existsTimes);
    logMemory('After Exists');

    const setMetadataTimes = await runSetMetadataScenario(bucket, safeName);
    reportResults('Set Metadata', setMetadataTimes);
    logMemory('After Set Metadata');

    const deleteTimes = await runDeleteScenario(bucket, safeName, content);
    reportResults('Delete File', deleteTimes);
    logMemory('After Delete File');

    try {
      const bucketLifecycleTimes = await runBucketLifecycleScenario(
        storage,
        safeName,
      );
      reportResults('Bucket Lifecycle', bucketLifecycleTimes);
    } catch (err) {
      console.warn(
        '    [Warning] Bucket Lifecycle scenario failed (likely missing storage.buckets.create permissions). Skipping.',
      );
    }
    logMemory('After Bucket Lifecycle');

    try {
      const bucketPatchTimes = await runBucketPatchScenario(storage, safeName);
      reportResults('Bucket Patch / Settings', bucketPatchTimes);
    } catch (err) {
      console.warn(
        '    [Warning] Bucket Patch scenario failed (likely missing storage.buckets.create permissions). Skipping.',
      );
    }
    logMemory('After Bucket Patch');

    try {
      const bucketLockTimes = await runBucketLockScenario(storage, safeName);
      reportResults('Bucket Lock Retention Policy', bucketLockTimes);
    } catch (err) {
      console.warn(
        '    [Warning] Bucket Lock scenario failed (likely missing storage.buckets.create permissions). Skipping.',
      );
    }
    logMemory('After Bucket Lock');

    try {
      const storageListTimes = await runStorageListAndAccountScenario(storage);
      reportResults('Storage List & Service Account', storageListTimes);
    } catch (err) {
      console.warn(
        '    [Warning] Storage List & Service Account scenario failed (likely missing storage.buckets.list permissions). Skipping.',
        err,
      );
    }
    logMemory('After Storage List/Account');

    try {
      const filePatchAclTimes = await runFilePatchAndAclScenario(
        bucket,
        mainFile,
      );
      if (filePatchAclTimes.length > 0) {
        reportResults('File Patch, Get, and ACL', filePatchAclTimes);
      }
    } catch (err) {
      console.warn(
        '    [Warning] File Patch, Get, and ACL scenario failed. Skipping.',
      );
    }
    logMemory('After File Patch/ACL');

    try {
      const fileCopyMoveComposeTimes = await runFileCopyMoveComposeScenario(
        bucket,
        mainFile,
        safeName,
      );
      reportResults(
        'File Copy, Move, Compose & Storage Class',
        fileCopyMoveComposeTimes,
      );
    } catch (err) {
      console.warn(
        '    [Warning] File Copy, Move, Compose & Storage Class scenario failed. Skipping.',
        err,
      );
    }
    logMemory('After File Copy/Move/Compose');

    const notificationTimes = await runNotificationScenario(bucket);
    reportResults('Notifications', notificationTimes);
    logMemory('After Notifications');

    const hmacTimes = await runHmacKeyScenario(storage);
    reportResults('HMAC Key Management', hmacTimes);
    logMemory('After HMAC Key Management');

    try {
      const iamTimes = await runBucketIamScenario(bucket);
      reportResults('Bucket IAM', iamTimes);
    } catch (err) {
      console.warn('    [Warning] Bucket IAM scenario failed. Skipping.');
    }
    logMemory('After Bucket IAM');
  } finally {
    console.log('Cleaning up cloud files...');
    await cleanupResources(uploadedFiles);
    logMemory('After Cleanup');
  }
}

function reportResults(
  operation: string,
  times: number[],
  includeThroughput = false,
) {
  const validTimes = times.filter(t => t > 0);
  if (validTimes.length === 0) {
    console.log(`\n${operation}:`);
    console.log(`  Iterations: 0`);
    console.log(`  Average Latency: NaN ms`);
    console.log(`  Min Latency: Infinity ms`);
    console.log(`  Max Latency: -Infinity ms`);
    return;
  }
  const min = Math.min(...validTimes);
  const max = Math.max(...validTimes);
  const avg = validTimes.reduce((a, b) => a + b, 0) / validTimes.length;

  console.log(`\n${operation}:`);
  console.log(`  Iterations: ${validTimes.length}`);
  console.log(`  Average Latency: ${avg.toFixed(2)} ms`);
  console.log(`  Min Latency: ${min.toFixed(2)} ms`);
  console.log(`  Max Latency: ${max.toFixed(2)} ms`);
  if (includeThroughput) {
    const throughput = (argv.fileSize / 1024) * (1000 / avg); // KB/s
    console.log(`  Approx. Throughput: ${throughput.toFixed(2)} KB/s`);
  }
}

async function main() {
  try {
    if (argv.iterations < 1) {
      throw new Error(
        'Iterations parameter must be greater than or equal to 1',
      );
    }
    if (argv.concurrency < 1) {
      throw new Error(
        'Concurrency parameter must be greater than or equal to 1',
      );
    }
    if (argv.fileSize < 0) {
      throw new Error('fileSize parameter must be greater than or equal to 0');
    }

    // Run for local version
    await runBenchmark(Storage, 'Current (Gaxios)', argv.bucket);

    // Run for baseline if specified
    if (argv.baseline) {
      const BaselineStorage = await loadBaseline(argv.baseline);
      await runBenchmark(
        BaselineStorage,
        `Baseline (${argv.baseline})`,
        argv.bucket,
      );
    }
  } catch (error) {
    console.error('Error running benchmark:', error);
    process.exitCode = 1;
  } finally {
    if (tempDirToDelete) {
      console.log(`Cleaning up local temporary directory: ${tempDirToDelete}`);
      try {
        fs.rmSync(tempDirToDelete, {recursive: true, force: true});
      } catch (cleanupErr) {
        console.error(
          'Failed to clean up local temporary directory:',
          cleanupErr,
        );
      }
    }
  }
}

void main();
