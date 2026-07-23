// Copyright 2021 Google LLC
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
  Bucket,
  File,
  Notification,
  Storage,
  HmacKey,
  Policy,
  GaxiosError,
} from '../src';
import * as path from 'path';
import {
  createTestBuffer,
  createTestFileFromBuffer,
  deleteTestFile,
} from './testBenchUtil';
import * as crypto from 'crypto';
import {getDirName} from '../src/util.js';
import {StorageRequestOptions, StorageTransport} from '../src/storage-transport';

const FILE_SIZE_BYTES = 9 * 1024 * 1024;

export interface ConformanceTestOptions {
  bucket?: Bucket;
  file?: File;
  notification?: Notification;
  storage?: Storage;
  hmacKey?: HmacKey;
  preconditionRequired?: boolean;
  storageTransport?: StorageTransport;
  projectId?: string;
  retryTestId?: string;
}

/////////////////////////////////////////////////
//////////////////// BUCKET /////////////////////
/////////////////////////////////////////////////

export async function addLifecycleRuleInstancePrecondition(
  options: ConformanceTestOptions,
) {
  return await addLifecycleRule(options);
}

export async function addLifecycleRule(options: ConformanceTestOptions) {
  const requestOptions: StorageRequestOptions = {
    method: 'PATCH',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}`,
    body: JSON.stringify({
      lifecycle: {
        rule: [
          {
            action: {type: 'Delete'},
            condition: {age: 1095}, // Specified in days.
          },
        ],
      },
    }),
    queryParameters: {},
  };

  if (options.preconditionRequired) {
    requestOptions.queryParameters!.ifMetagenerationMatch = 2;
  }

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function combineInstancePrecondition(
  options: ConformanceTestOptions,
) {
  return await combine(options);
}

export async function combine(options: ConformanceTestOptions) {
  const file1 = options.bucket!.file('file1.txt');
  const file2 = options.bucket!.file('file2.txt');
  await file1.save('file1 contents');
  await file2.save('file2 contents');

  const combineOptions: any = {};
  if (options.preconditionRequired) {
    combineOptions.ifGenerationMatch = 0;
  }

  return await options.bucket!.combine(
    ['file1.txt', 'file2.txt'],
    'all-files.txt',
    combineOptions,
  );
}

export async function create(options: ConformanceTestOptions) {
  if (!options.storageTransport || !options.projectId || !options.bucket) {
    throw new Error(
      'storageTransport, projectId, and bucket are required for the create test.',
    );
  }
  const bucketName = options.bucket.name;
  let bucketExists = false;
  const existsReq: StorageRequestOptions = {
    method: 'GET',
    url: `storage/v1/b/${bucketName}`,
  };
  try {
    await options.storageTransport.makeRequest(existsReq);
    bucketExists = true;
  } catch (e) {
    const err = e as GaxiosError;
    if (err.response?.status !== 404) {
      throw e;
    }
  }

  if (bucketExists) {
    let pageToken: string | undefined = undefined;
    do {
      const listReq: StorageRequestOptions = {
        method: 'GET',
        url: `storage/v1/b/${bucketName}/o`,
        queryParameters: pageToken ? {pageToken} : undefined,
      };
      const listResult = await options.storageTransport.makeRequest(listReq);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const objects = (listResult as any)?.data?.items || [];

      for (const obj of objects) {
        const deleteObjReq: StorageRequestOptions = {
          method: 'DELETE',
          url: `storage/v1/b/${bucketName}/o/${obj.name}`,
        };
        await options.storageTransport.makeRequest(deleteObjReq);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      pageToken = (listResult as any)?.nextPageToken;
    } while (pageToken);

    const deleteBucketReq: StorageRequestOptions = {
      method: 'DELETE',
      url: `storage/v1/b/${bucketName}`,
    };
    await options.storageTransport.makeRequest(deleteBucketReq);
  }

  const createRequest: StorageRequestOptions = {
    method: 'POST',
    url: `storage/v1/b?project=${options.projectId}`,
    body: JSON.stringify({name: bucketName}),
    headers: {'Content-Type': 'application/json'},
  };
  await options.storageTransport.makeRequest(createRequest);
}

export async function createNotification(options: ConformanceTestOptions) {
  const requestOptions: StorageRequestOptions = {
    method: 'POST',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}/notificationConfigs`,
    body: JSON.stringify({
      topic: 'my-topic',
    }),
    headers: {'Content-Type': 'application/json'},
  };

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function deleteBucket(options: ConformanceTestOptions) {
  try {
    await options.bucket!.deleteFiles();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    const message = err.message || '';
    if (!message.includes('does not exist') && err.code !== 404) {
      throw err;
    }
  }
  const requestOptions: StorageRequestOptions = {
    method: 'DELETE',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}`,
    queryParameters: {},
  };

  if (options.preconditionRequired) {
    requestOptions.queryParameters!.ifMetagenerationMatch = 1;
  }
  return await options.storageTransport!.makeRequest(requestOptions);
}

// Note: bucket.deleteFiles is missing from these tests
// Preconditions cannot be implemented with current setup.

export async function deleteLabelsInstancePrecondition(
  options: ConformanceTestOptions,
) {
  return await deleteLabels(options);
}

export async function deleteLabels(options: ConformanceTestOptions) {
  const requestOptions: StorageRequestOptions = {
    method: 'PATCH',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}`,
    body: JSON.stringify({labels: null}),
    queryParameters: {},
  };

  if (options.preconditionRequired) {
    requestOptions.queryParameters!.ifMetagenerationMatch = 2;
  }

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function disableRequesterPaysInstancePrecondition(
  options: ConformanceTestOptions,
) {
  return await disableRequesterPays(options);
}

export async function disableRequesterPays(options: ConformanceTestOptions) {
  const requestOptions: StorageRequestOptions = {
    method: 'PATCH',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}`,
    body: JSON.stringify({billing: {requesterPays: false}}),
    queryParameters: {},
  };

  if (options.preconditionRequired) {
    requestOptions.queryParameters!.ifMetagenerationMatch = 2;
  }

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function enableLoggingInstancePrecondition(
  options: ConformanceTestOptions,
) {
  return await enableLogging(options);
}

export async function enableLogging(options: ConformanceTestOptions) {
  const requestOptions: StorageRequestOptions = {
    method: 'PATCH',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}`,
    body: JSON.stringify({
      logging: {
        logBucket: options.bucket!.name,
        logObjectPrefix: 'log',
      },
    }),
    queryParameters: {},
  };

  if (options.preconditionRequired) {
    requestOptions.queryParameters!.ifMetagenerationMatch = 2;
  }

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function enableRequesterPaysInstancePrecondition(
  options: ConformanceTestOptions,
) {
  return await enableRequesterPays(options);
}

export async function enableRequesterPays(options: ConformanceTestOptions) {
  const requestOptions: StorageRequestOptions = {
    method: 'PATCH',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}`,
    body: JSON.stringify({billing: {requesterPays: true}}),
    queryParameters: {},
  };

  if (options.preconditionRequired) {
    requestOptions.queryParameters!.ifMetagenerationMatch = 2;
  }

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function bucketExists(options: ConformanceTestOptions) {
  const requestOptions: StorageRequestOptions = {
    method: 'GET',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}`,
  };

  try {
    await options.storageTransport!.makeRequest(requestOptions);
    return true;
  } catch (err: unknown) {
    const gaxiosError = err as GaxiosError;
    if (gaxiosError.response?.status === 404) {
      return false;
    }
    throw err;
  }
}

export async function bucketGet(options: ConformanceTestOptions) {
  const requestOptions: StorageRequestOptions = {
    method: 'GET',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}`,
  };

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function getFilesStream(options: ConformanceTestOptions) {
  const requestOptions: StorageRequestOptions = {
    method: 'GET',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}/o`,
  };

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function getLabels(options: ConformanceTestOptions) {
  const requestOptions: StorageRequestOptions = {
    method: 'GET',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}`,
    queryParameters: {
      fields: 'labels',
    },
  };

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function bucketGetMetadata(options: ConformanceTestOptions) {
  const requestOptions: StorageRequestOptions = {
    method: 'GET',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}`,
    queryParameters: {
      projection: 'full',
    },
  };

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function getNotifications(options: ConformanceTestOptions) {
  const requestOptions: StorageRequestOptions = {
    method: 'GET',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}/notificationConfigs`,
  };

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function lock(options: ConformanceTestOptions) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const retryId = (options as any).headers?.['x-retry-test-id'];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const metadata: any = await options.storageTransport!.makeRequest({
    method: 'GET',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}`,
    headers: {...(retryId ? {'x-retry-test-id': retryId} : {})},
  });
  const currentMetageneration = metadata.metageneration;

  const requestOptions: StorageRequestOptions = {
    method: 'POST',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}/lockRetentionPolicy`,
    queryParameters: {
      ifMetagenerationMatch: currentMetageneration,
    },
    headers: {
      ...(retryId ? {'x-retry-test-id': retryId} : {}),
    },
  };

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function bucketMakePrivateInstancePrecondition(
  options: ConformanceTestOptions,
) {
  return await bucketMakePrivate(options);
}

export async function bucketMakePrivate(options: ConformanceTestOptions) {
  const requestOptions: StorageRequestOptions = {
    method: 'PATCH',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}`,
    body: JSON.stringify({acl: []}),
    queryParameters: {},
  };

  if (options.preconditionRequired) {
    requestOptions.queryParameters!.ifMetagenerationMatch = 2;
  }

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function bucketMakePublic(options: ConformanceTestOptions) {
  const requestOptions: StorageRequestOptions = {
    method: 'POST',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}`,
  };

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function removeRetentionPeriodInstancePrecondition(
  options: ConformanceTestOptions,
) {
  return await removeRetentionPeriod(options);
}

export async function removeRetentionPeriod(options: ConformanceTestOptions) {
  const requestOptions: StorageRequestOptions = {
    method: 'PATCH',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}`,
    body: JSON.stringify({retentionPolicy: null}),
    queryParameters: {},
  };

  if (options.preconditionRequired) {
    requestOptions.queryParameters!.ifMetagenerationMatch = 2;
  }

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function setCorsConfigurationInstancePrecondition(
  options: ConformanceTestOptions,
) {
  return await setCorsConfiguration(options);
}

export async function setCorsConfiguration(options: ConformanceTestOptions) {
  const requestOptions: StorageRequestOptions = {
    method: 'PATCH',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}`,
    body: JSON.stringify({cors: [{maxAgeSeconds: 3600}]}),
    queryParameters: {},
  };

  if (options.preconditionRequired) {
    requestOptions.queryParameters!.ifMetagenerationMatch = 2;
  }

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function setLabelsInstancePrecondition(
  options: ConformanceTestOptions,
) {
  return await setLabels(options);
}

export async function setLabels(options: ConformanceTestOptions) {
  const requestOptions: StorageRequestOptions = {
    method: 'PATCH',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}`,
    body: JSON.stringify({
      labels: {labelone: 'labelonevalue', labeltwo: 'labeltwovalue'},
    }),
    queryParameters: {},
  };

  if (options.preconditionRequired) {
    requestOptions.queryParameters!.ifMetagenerationMatch = 2;
  }

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function bucketSetMetadataInstancePrecondition(
  options: ConformanceTestOptions,
) {
  return await bucketSetMetadata(options);
}

export async function bucketSetMetadata(options: ConformanceTestOptions) {
  const requestOptions: StorageRequestOptions = {
    method: 'PATCH',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}`,
    body: JSON.stringify({
      website: {
        mainPageSuffix: 'http://example.com',
        notFoundPage: 'http://example.com/404.html',
      },
    }),
    queryParameters: {},
  };

  if (options.preconditionRequired) {
    requestOptions.queryParameters!.ifMetagenerationMatch = 2;
  }

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function setRetentionPeriodInstancePrecondition(
  options: ConformanceTestOptions,
) {
  return await setRetentionPeriod(options);
}

export async function setRetentionPeriod(options: ConformanceTestOptions) {
  const DURATION_SECONDS = 15780000;
  const requestOptions: StorageRequestOptions = {
    method: 'PATCH',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}`,
    body: JSON.stringify({
      retentionPolicy: {retentionPeriod: DURATION_SECONDS.toString()},
    }),
    queryParameters: {},
  };

  if (options.preconditionRequired) {
    requestOptions.queryParameters!.ifMetagenerationMatch = 2;
  }

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function bucketSetStorageClassInstancePrecondition(
  options: ConformanceTestOptions,
) {
  return await bucketSetStorageClass(options);
}

export async function bucketSetStorageClass(options: ConformanceTestOptions) {
  const requestOptions: StorageRequestOptions = {
    method: 'PATCH',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}`,
    body: JSON.stringify({storageClass: 'NEARLINE'}),
    queryParameters: {},
  };

  if (options.preconditionRequired) {
    requestOptions.queryParameters!.ifMetagenerationMatch = 2;
  }

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function bucketUploadResumableInstancePrecondition(
  options: ConformanceTestOptions,
) {
  return await bucketUploadResumable(options);
}

export async function bucketUploadResumable(options: ConformanceTestOptions) {
  const fileName = `resumable-file-${crypto.randomUUID()}.txt`;
  const dataBuffer = Buffer.alloc(FILE_SIZE_BYTES, 'a');

  const initiateOptions: StorageRequestOptions = {
    method: 'POST',
    url: `upload/storage/v1/b/${encodeURIComponent(options.bucket!.name)}/o`,
    queryParameters: {
      uploadType: 'resumable',
      name: fileName,
    },
    headers: {
      'X-Upload-Content-Type': 'text/plain',
      'X-Upload-Content-Length': FILE_SIZE_BYTES.toString(),
    },
    body: JSON.stringify({name: fileName}),
  };

  if (options.preconditionRequired) {
    initiateOptions.queryParameters = initiateOptions.queryParameters || {};
    initiateOptions.queryParameters.ifGenerationMatch = 0;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const response: any =
    await options.storageTransport!.makeRequest(initiateOptions);

  let sessionUri: string | null = null;

  if (response.headers) {
    if (typeof response.headers.get === 'function') {
      sessionUri = response.headers.get('location');
    }
    if (!sessionUri) {
      sessionUri = response.headers.location || response.headers.Location;
    }
  }

  if (!sessionUri && response.data && typeof response.data === 'object') {
    sessionUri = response.data.location;
  }

  if (!sessionUri) {
    throw new Error(
      'Failed to get session URI from resumable upload initiation.',
    );
  }

  return await options.storageTransport!.makeRequest({
    method: 'PUT',
    url: sessionUri,
    body: dataBuffer,
    queryParameters: undefined,
    headers: {
      'Content-Length': FILE_SIZE_BYTES.toString(),
      'Content-Range': `bytes 0-${FILE_SIZE_BYTES - 1}/${FILE_SIZE_BYTES}`,
    },
  });
}

export async function bucketUploadMultipartInstancePrecondition(
  options: ConformanceTestOptions,
) {
  return await bucketUploadMultipart(options);
}

export async function bucketUploadMultipart(options: ConformanceTestOptions) {
  const fileName = 'retryStrategyTestData.json';
  const boundary = 'foo_bar_baz';

  const metadata = JSON.stringify({
    name: fileName,
    contentType: 'application/json',
  });
  const media = JSON.stringify({some: 'data'});
  const body =
    `--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${metadata}\r\n` +
    `--${boundary}\r\nContent-Type: application/json\r\n\r\n${media}\r\n` +
    `--${boundary}--`;

  const requestOptions: StorageRequestOptions = {
    method: 'POST',
    url: `upload/storage/v1/b/${encodeURIComponent(options.bucket!.name)}/o`,
    queryParameters: {
      uploadType: 'multipart',
      name: fileName,
    },
    headers: {'Content-Type': `multipart/related; boundary=${boundary}`},
    body: body,
  };

  if (options.preconditionRequired) {
    requestOptions.queryParameters!.ifGenerationMatch = 0;
  }

  return await options.storageTransport!.makeRequest(requestOptions);
}

/////////////////////////////////////////////////
//////////////////// FILE /////////////////////
/////////////////////////////////////////////////

export async function copy(options: ConformanceTestOptions) {
  const sourceBucket = options.bucket!.name;
  const sourceFile = encodeURIComponent(options.file!.name);
  const destinationFile = encodeURIComponent('a-different-file.png');

  const requestOptions: StorageRequestOptions = {
    method: 'POST',
    url: `storage/v1/b/${sourceBucket}/o/${sourceFile}/rewriteTo/b/${sourceBucket}/o/${destinationFile}`,
    queryParameters: {},
  };

  if (options.preconditionRequired) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const instanceOpts = (options.file as any)?.instancePreconditionOpts;
    const generation =
      instanceOpts?.ifGenerationMatch || options.file?.metadata?.generation;
    requestOptions.queryParameters!.ifSourceGenerationMatch = generation;
  }

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function createReadStream(options: ConformanceTestOptions) {
  return await download(options);
}

export async function createResumableUploadInstancePrecondition(
  options: ConformanceTestOptions,
) {
  return await createResumableUpload(options);
}

export async function createResumableUpload(options: ConformanceTestOptions) {
  const requestOptions: StorageRequestOptions = {
    method: 'POST',
    url: `upload/storage/v1/b/${encodeURIComponent(options.bucket!.name)}/o`,
    queryParameters: {
      uploadType: 'resumable',
      name: options.file!.name,
    },
  };

  if (options.preconditionRequired) {
    requestOptions.queryParameters!.ifGenerationMatch = 0;
  }

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function fileDeleteInstancePrecondition(
  options: ConformanceTestOptions,
) {
  const requestOptions: StorageRequestOptions = {
    method: 'DELETE',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}/o/${encodeURIComponent(options.file!.name)}`,
    queryParameters: {},
    headers: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      'x-retry-test-id': (options as any).retryTestId,
    },
  };
  if (options.preconditionRequired) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const instanceOpts = (options.file as any)?.instancePreconditionOpts;
    const generation =
      instanceOpts?.ifGenerationMatch || options.file?.metadata?.generation;
    requestOptions.queryParameters!.ifGenerationMatch = generation;
  }

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function fileDelete(options: ConformanceTestOptions) {
  const requestOptions: StorageRequestOptions = {
    method: 'DELETE',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}/o/${encodeURIComponent(options.file!.name)}`,
    queryParameters: {},
    headers: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      'x-retry-test-id': (options as any).retryTestId,
    },
  };

  if (options.preconditionRequired) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const instanceOpts = (options.file as any)?.instancePreconditionOpts;
    const generation =
      instanceOpts?.ifGenerationMatch || options.file?.metadata?.generation;
    requestOptions.queryParameters!.ifGenerationMatch = generation;
  }

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function download(options: ConformanceTestOptions) {
  const requestOptions: StorageRequestOptions = {
    method: 'GET',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}/o/${encodeURIComponent(options.file!.name)}`,
    queryParameters: {alt: 'media'},
    responseType: 'stream',
    headers: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ...(options as any).headers,
    },
  };
  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function exists(options: ConformanceTestOptions) {
  const requestOptions: StorageRequestOptions = {
    method: 'GET',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}/o/${encodeURIComponent(options.file!.name)}`,
  };

  try {
    await options.storageTransport!.makeRequest(requestOptions);
    return true;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    if (err.code === 404) return false;
    throw err;
  }
}

export async function get(options: ConformanceTestOptions) {
  const requestOptions: StorageRequestOptions = {
    method: 'GET',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}/o/${encodeURIComponent(options.file!.name)}`,
  };

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function getExpirationDate(options: ConformanceTestOptions) {
  return await get(options);
}

export async function getMetadata(options: ConformanceTestOptions) {
  return await get(options);
}

export async function isPublic(options: ConformanceTestOptions) {
  const requestOptions: StorageRequestOptions = {
    method: 'GET',
    url: `storage/v1/b/${options.bucket!.name}/o/${encodeURIComponent(options.file!.name)}`,
  };
  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function fileMakePrivateInstancePrecondition(
  options: ConformanceTestOptions,
) {
  const requestOptions: StorageRequestOptions = {
    method: 'PATCH',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}/o/${encodeURIComponent(options.file!.name)}`,
    queryParameters: {},
    body: JSON.stringify({acl: []}),
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const instanceOpts = (options.file as any)?.instancePreconditionOpts;
  if (instanceOpts?.ifGenerationMatch !== undefined) {
    requestOptions.queryParameters!.ifGenerationMatch =
      instanceOpts.ifGenerationMatch;
  } else if (instanceOpts?.ifMetagenerationMatch !== undefined) {
    requestOptions.queryParameters!.ifMetagenerationMatch =
      instanceOpts.ifMetagenerationMatch;
  } else if (options.preconditionRequired) {
    requestOptions.queryParameters!.ifMetagenerationMatch =
      options.file?.metadata.metageneration;
  }

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function fileMakePrivate(options: ConformanceTestOptions) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const retryId = (options as any).headers?.['x-retry-test-id'];

  const requestOptions: StorageRequestOptions = {
    method: 'PATCH',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}/o/${encodeURIComponent(options.file!.name)}`,
    body: JSON.stringify({acl: []}),
    queryParameters: {},
    headers: {
      'Content-Type': 'application/json',
      ...(retryId ? {'x-retry-test-id': retryId} : {}),
    },
  };

  if (options.preconditionRequired) {
    requestOptions.queryParameters!.ifMetagenerationMatch =
      options.file!.metadata.metageneration ?? 1;
  }

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function fileMakePublic(options: ConformanceTestOptions) {
  const fileName = encodeURIComponent(options.file!.name);
  const requestOptions: StorageRequestOptions = {
    method: 'PATCH',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}/o/${fileName}/acl`,
  };

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function move(options: ConformanceTestOptions) {
  const sourceBucket = options.bucket!.name;
  const sourceFile = encodeURIComponent(options.file!.name);
  const destinationFile = encodeURIComponent('new-file');

  const requestOptions: StorageRequestOptions = {
    method: 'POST',
    url: `storage/v1/b/${sourceBucket}/o/${sourceFile}/rewriteTo/b/${sourceBucket}/o/${destinationFile}`,
    queryParameters: {},
  };

  if (options.preconditionRequired) {
    requestOptions.queryParameters!.ifGenerationMatch = 0;
  }

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function rename(options: ConformanceTestOptions) {
  const sourceBucket = options.bucket!.name;
  const sourceFile = encodeURIComponent(options.file!.name);
  const destinationFile = encodeURIComponent('new-name');

  const requestOptions: StorageRequestOptions = {
    method: 'POST',
    url: `storage/v1/b/${sourceBucket}/o/${sourceFile}/rewriteTo/b/${sourceBucket}/o/${destinationFile}`,
    queryParameters: {},
  };

  if (options.preconditionRequired) {
    requestOptions.queryParameters!.ifGenerationMatch = 0;
  }

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function rotateEncryptionKey(options: ConformanceTestOptions) {
  const bucketName = options.bucket!.name;
  const fileName = encodeURIComponent(options.file!.name);

  const requestOptions: StorageRequestOptions = {
    method: 'POST',
    url: `storage/v1/b/${bucketName}/o/${fileName}/rewriteTo/b/${bucketName}/o/${fileName}`,
    headers: {
      'x-goog-copy-source-encryption-algorithm': 'AES256',
    },
    queryParameters: {},
  };

  if (options.preconditionRequired) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const instanceOpts = (options.file as any)?.instancePreconditionOpts;
    const generation =
      instanceOpts?.ifGenerationMatch || options.file?.metadata?.generation;
    requestOptions.queryParameters!.ifGenerationMatch = generation;
  }

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function saveResumableInstancePrecondition(
  options: ConformanceTestOptions,
) {
  return await saveResumable(options);
}

export async function saveResumable(options: ConformanceTestOptions) {
  const data = createTestBuffer(FILE_SIZE_BYTES);
  const dataBuffer = Buffer.from(data);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const retryId = (options as any).headers?.['x-retry-test-id'];

  const initiateOptions: StorageRequestOptions = {
    method: 'POST',
    url: `upload/storage/v1/b/${encodeURIComponent(options.bucket!.name)}/o`,
    queryParameters: {
      uploadType: 'resumable',
      name: options.file!.name,
    },
    body: JSON.stringify({name: options.file!.name}),
    headers: {
      'Content-Type': 'application/json',
      ...(retryId ? {'x-retry-test-id': retryId} : {}),
    },
  };

  if (options.preconditionRequired) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const instanceOpts = (options.file as any)?.instancePreconditionOpts;
    const generation =
      instanceOpts?.ifGenerationMatch || options.file?.metadata?.generation;
    initiateOptions.queryParameters!.ifGenerationMatch = generation;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const response: any =
    await options.storageTransport!.makeRequest(initiateOptions);
  let sessionUri: string | null = null;
  if (response.headers) {
    if (typeof response.headers.get === 'function') {
      sessionUri = response.headers.get('location');
    }
    if (!sessionUri) {
      sessionUri = response.headers.location || response.headers.Location;
    }
  }

  if (!sessionUri && response.data && typeof response.data === 'object') {
    sessionUri = response.data.location;
  }

  if (!sessionUri) throw new Error('Failed to get session URI');

  return await options.storageTransport!.makeRequest({
    method: 'PUT',
    url: sessionUri,
    body: dataBuffer,
    queryParameters: undefined,
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Length': dataBuffer.length.toString(),
      'Content-Range': `bytes 0-${dataBuffer.length - 1}/${dataBuffer.length}`,
      'x-retry-test-id': retryId,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any,
  });
}

export async function saveMultipartInstancePrecondition(
  options: ConformanceTestOptions,
) {
  return await saveMultipart(options);
}

export async function saveMultipart(options: ConformanceTestOptions) {
  const boundary = 'conformance_test_boundary';
  const fileName = options.file!.name;

  const metadata = JSON.stringify({name: fileName});
  const media = 'testdata';

  const body =
    `--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${metadata}\r\n` +
    `--${boundary}\r\nContent-Type: text/plain\r\n\r\n${media}\r\n` +
    `--${boundary}--`;

  const requestOptions: StorageRequestOptions = {
    method: 'POST',
    url: `upload/storage/v1/b/${encodeURIComponent(options.bucket!.name)}/o`,
    queryParameters: {
      uploadType: 'multipart',
      name: options.file!.name,
    },
    headers: {'Content-Type': `multipart/related; boundary=${boundary}`},
    body: body,
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const instanceOpts = (options.file as any)?.instancePreconditionOpts;
  if (instanceOpts?.ifGenerationMatch !== undefined) {
    requestOptions.queryParameters!.ifGenerationMatch =
      instanceOpts.ifGenerationMatch;
  } else if (options.preconditionRequired) {
    const generation = options.file?.metadata?.generation ?? 0;
    requestOptions.queryParameters!.ifGenerationMatch = generation;
  }

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function setMetadataInstancePrecondition(
  options: ConformanceTestOptions,
) {
  const metadata = {
    contentType: 'application/x-font-ttf',
    metadata: {my: 'custom', properties: 'go here'},
  };
  const requestOptions: StorageRequestOptions = {
    method: 'PATCH',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}/o/${encodeURIComponent(options.file!.name)}`,
    queryParameters: {},
    body: JSON.stringify(metadata),
    headers: {'Content-Type': 'application/json'},
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const instanceOpts = (options.file as any)?.instancePreconditionOpts;

  if (instanceOpts?.ifGenerationMatch !== undefined) {
    requestOptions.queryParameters!.ifGenerationMatch =
      instanceOpts.ifGenerationMatch;
  } else if (instanceOpts?.ifMetagenerationMatch !== undefined) {
    requestOptions.queryParameters!.ifMetagenerationMatch =
      instanceOpts.ifMetagenerationMatch;
  } else if (options.preconditionRequired) {
    requestOptions.queryParameters!.ifMetagenerationMatch =
      options.file?.metadata.metageneration;
  }

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function setMetadata(options: ConformanceTestOptions) {
  const metadata = {
    contentType: 'application/x-font-ttf',
    metadata: {my: 'custom', properties: 'go here'},
  };

  const requestOptions: StorageRequestOptions = {
    method: 'PATCH',
    url: `storage/v1/b/${options.bucket!.name}/o/${encodeURIComponent(options.file!.name)}`,
    body: JSON.stringify(metadata),
    headers: {'Content-Type': 'application/json'},
    queryParameters: {},
  };

  if (options.preconditionRequired) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const instanceOpts = (options.file as any)?.instancePreconditionOpts;
    const generation =
      instanceOpts?.ifGenerationMatch || options.file?.metadata?.generation;

    requestOptions.queryParameters!.ifGenerationMatch = generation;
  }

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function setStorageClass(options: ConformanceTestOptions) {
  const bucketName = options.bucket!.name;
  const fileName = encodeURIComponent(options.file!.name);

  const requestOptions: StorageRequestOptions = {
    method: 'POST',
    url: `storage/v1/b/${bucketName}/o/${fileName}/rewriteTo/b/${bucketName}/o/${fileName}`,
    body: JSON.stringify({storageClass: 'NEARLINE'}),
    headers: {'Content-Type': 'application/json'},
    queryParameters: {},
  };

  if (options.preconditionRequired) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const instanceOpts = (options.file as any)?.instancePreconditionOpts;
    const generation =
      instanceOpts?.ifGenerationMatch || options.file?.metadata?.generation;
    requestOptions.queryParameters!.ifSourceGenerationMatch = generation;
  }

  return await options.storageTransport!.makeRequest(requestOptions);
}

// /////////////////////////////////////////////////
// /////////////////// HMAC KEY ////////////////////
// /////////////////////////////////////////////////

export async function deleteHMAC(options: ConformanceTestOptions) {
  await options.storageTransport!.makeRequest({
    method: 'PUT',
    url: `storage/v1/projects/${options.projectId}/hmacKeys/${options.hmacKey!.metadata.accessId}`,
    body: JSON.stringify({state: 'INACTIVE'}),
    headers: {'x-retry-test-id': ''},
  });
  return await options.storageTransport!.makeRequest({
    method: 'DELETE',
    url: `storage/v1/projects/${options.projectId}/hmacKeys/${options.hmacKey!.metadata.accessId}`,
  });
}

export async function getHMAC(options: ConformanceTestOptions) {
  return await options.storageTransport!.makeRequest({
    method: 'GET',
    url: `storage/v1/projects/${options.projectId}/hmacKeys/${options.hmacKey!.metadata.accessId}`,
  });
}

export async function getMetadataHMAC(options: ConformanceTestOptions) {
  const requestOptions: StorageRequestOptions = {
    method: 'GET',
    url: `storage/v1/projects/${options.projectId}/hmacKeys/${options.hmacKey!.metadata.accessId}`,
  };

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function setMetadataHMAC(options: ConformanceTestOptions) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const body: any = {
    state: 'INACTIVE',
  };

  if (options.preconditionRequired && options.hmacKey?.metadata?.etag) {
    body.etag = options.hmacKey.metadata.etag;
  }

  return await options.storageTransport!.makeRequest({
    method: 'PUT',
    url: `storage/v1/projects/${options.projectId}/hmacKeys/${options.hmacKey!.metadata.accessId}`,
    body: JSON.stringify(body),
  });
}

/////////////////////////////////////////////////
////////////////////// IAM //////////////////////
/////////////////////////////////////////////////

export async function iamGetPolicy(options: ConformanceTestOptions) {
  return await options.storageTransport!.makeRequest({
    method: 'GET',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}/iam`,
    queryParameters: {optionsRequestedPolicyVersion: 1},
  });
}

export async function iamSetPolicy(options: ConformanceTestOptions) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const retryId = (options as any).headers?.['x-retry-test-id'];
  const body: Policy = {
    bindings: [
      {
        role: 'roles/storage.admin',
        members: ['serviceAccount:myotherproject@appspot.gserviceaccount.com'],
      },
    ],
  };

  if (options.preconditionRequired) {
    const getResponse = await options.storageTransport!.makeRequest({
      method: 'GET',
      url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}/iam`,
      queryParameters: {optionsRequestedPolicyVersion: 1},
      headers: retryId ? {'x-retry-test-id': retryId} : {},
    });

    const currentPolicy = (getResponse as any).data as Policy;
    const fetchedEtag = currentPolicy.etag;

    if (fetchedEtag) {
      body.etag = fetchedEtag;
    }
  }

  return await options.storageTransport!.makeRequest({
    method: 'PUT',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}/iam`,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      ...(retryId ? {'x-retry-test-id': retryId} : {}),
    },
  });
}

export async function iamTestPermissions(options: ConformanceTestOptions) {
  return await options.storageTransport!.makeRequest({
    method: 'GET',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}/iam/testPermissions`,
    queryParameters: {permissions: 'storage.buckets.delete'},
  });
}

/////////////////////////////////////////////////
///////////////// NOTIFICATION //////////////////
/////////////////////////////////////////////////

export async function notificationDelete(options: ConformanceTestOptions) {
  const requestOptions: StorageRequestOptions = {
    method: 'DELETE',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}/notificationConfigs/${options.notification!.id}`,
    queryParameters: {},
  };

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function notificationCreate(options: ConformanceTestOptions) {
  const requestOptions: StorageRequestOptions = {
    method: 'POST',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}/notificationConfigs`,
    body: JSON.stringify({
      topic: 'my-topic',
    }),
    headers: {'Content-Type': 'application/json'},
  };

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function notificationExists(options: ConformanceTestOptions) {
  const requestOptions: StorageRequestOptions = {
    method: 'GET',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}/notificationConfigs/${options.notification!.id}`,
  };

  try {
    await options.storageTransport!.makeRequest(requestOptions);
    return true;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    if (err.code === 404) return false;
    throw err;
  }
}

export async function notificationGet(options: ConformanceTestOptions) {
  const requestOptions: StorageRequestOptions = {
    method: 'GET',
    url: `storage/v1/b/${encodeURIComponent(options.bucket!.name)}/notificationConfigs/${options.notification!.id}`,
  };

  return await options.storageTransport!.makeRequest(requestOptions);
}

export async function notificationGetMetadata(options: ConformanceTestOptions) {
  return await notificationGet(options);
}

/////////////////////////////////////////////////
/////////////////// STORAGE /////////////////////
/////////////////////////////////////////////////

export async function createBucket(options: ConformanceTestOptions) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const retryId = (options as any).headers?.['x-retry-test-id'];
  const bucketName = options.bucket!.name;

  try {
    return await options.storageTransport!.makeRequest({
      method: 'POST',
      url: 'storage/v1/b',
      queryParameters: {project: options.projectId},
      body: JSON.stringify({name: bucketName}),
      headers: {
        'Content-Type': 'application/json',
        ...(retryId ? {'x-retry-test-id': retryId} : {}),
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    if (
      err.response?.status === 409 ||
      err.message?.includes('already exists')
    ) {
      return await options.storageTransport!.makeRequest({
        method: 'GET',
        url: `storage/v1/b/${encodeURIComponent(bucketName)}`,
        headers: {
          ...(retryId ? {'x-retry-test-id': retryId} : {}),
        },
      });
    }
    throw err;
  }
}

export async function createHMACKey(options: ConformanceTestOptions) {
  const serviceAccountEmail = 'my-service-account@appspot.gserviceaccount.com';
  return await options.storageTransport!.makeRequest({
    method: 'POST',
    url: `storage/v1/projects/${options.projectId}/hmacKeys`,
    queryParameters: {serviceAccountEmail},
  });
}

export async function getBuckets(options: ConformanceTestOptions) {
  return await options.storageTransport!.makeRequest({
    method: 'GET',
    url: 'storage/v1/b',
    queryParameters: {project: options.projectId},
  });
}

export async function getBucketsStream(options: ConformanceTestOptions) {
  return await getBuckets(options);
}

export async function getHMACKeyStream(options: ConformanceTestOptions) {
  const serviceAccountEmail = 'my-service-account@appspot.gserviceaccount.com';
  return await options.storageTransport!.makeRequest({
    method: 'GET',
    url: `storage/v1/projects/${options.projectId}/hmacKeys`,
    queryParameters: {serviceAccountEmail},
  });
}

export async function getServiceAccount(options: ConformanceTestOptions) {
  const requestOptions: StorageRequestOptions = {
    method: 'GET',
    url: `storage/v1/projects/${options.projectId}/serviceAccount`,
  };

  return await options.storageTransport!.makeRequest(requestOptions);
}
