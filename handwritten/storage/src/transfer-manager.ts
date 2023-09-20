/*!
 * Copyright 2022 Google LLC. All Rights Reserved.
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

import {Bucket, UploadOptions, UploadResponse} from './bucket';
import {DownloadOptions, DownloadResponse, File} from './file';
import * as pLimit from 'p-limit';
import * as path from 'path';
import {createReadStream, promises as fsp} from 'fs';
import {CRC32C} from './crc32c';
import {GoogleAuth} from 'google-auth-library';
import {XMLParser, XMLBuilder} from 'fast-xml-parser';
import * as retry from 'async-retry';
import {ApiError} from './nodejs-common';
import {GaxiosResponse, Headers} from 'gaxios';
import {createHash} from 'crypto';

/**
 * Default number of concurrently executing promises to use when calling uploadManyFiles.
 * @experimental
 */
const DEFAULT_PARALLEL_UPLOAD_LIMIT = 2;
/**
 * Default number of concurrently executing promises to use when calling downloadManyFiles.
 * @experimental
 */
const DEFAULT_PARALLEL_DOWNLOAD_LIMIT = 2;
/**
 * Default number of concurrently executing promises to use when calling downloadFileInChunks.
 * @experimental
 */
const DEFAULT_PARALLEL_CHUNKED_DOWNLOAD_LIMIT = 2;
/**
 * The minimum size threshold in bytes at which to apply a chunked download strategy when calling downloadFileInChunks.
 * @experimental
 */
const DOWNLOAD_IN_CHUNKS_FILE_SIZE_THRESHOLD = 32 * 1024 * 1024;
/**
 * The chunk size in bytes to use when calling downloadFileInChunks.
 * @experimental
 */
const DOWNLOAD_IN_CHUNKS_DEFAULT_CHUNK_SIZE = 10 * 1024 * 1024;
/**
 * The chunk size in bytes to use when calling uploadFileInChunks.
 * @experimental
 */
const UPLOAD_IN_CHUNKS_DEFAULT_CHUNK_SIZE = 32 * 1024 * 1024;
/**
 * Default number of concurrently executing promises to use when calling uploadFileInChunks.
 * @experimental
 */
const DEFAULT_PARALLEL_CHUNKED_UPLOAD_LIMIT = 2;

const EMPTY_REGEX = '(?:)';
export interface UploadManyFilesOptions {
  concurrencyLimit?: number;
  skipIfExists?: boolean;
  prefix?: string;
  passthroughOptions?: Omit<UploadOptions, 'destination'>;
}

export interface DownloadManyFilesOptions {
  concurrencyLimit?: number;
  prefix?: string;
  stripPrefix?: string;
  passthroughOptions?: DownloadOptions;
}

export interface DownloadFileInChunksOptions {
  concurrencyLimit?: number;
  chunkSizeBytes?: number;
  destination?: string;
  validation?: 'crc32c' | false;
}

export interface UploadFileInChunksOptions {
  concurrencyLimit?: number;
  chunkSizeBytes?: number;
  uploadName?: string;
  maxQueueSize?: number;
  uploadId?: string;
  partsMap?: Map<number, string>;
  validation?: 'md5' | false;
}

export interface MultiPartUploadHelper {
  bucket: Bucket;
  fileName: string;
  uploadId?: string;
  partsMap?: Map<number, string>;
  initiateUpload(): Promise<void>;
  uploadPart(
    partNumber: number,
    chunk: Buffer,
    validation?: 'md5' | false
  ): Promise<void>;
  completeUpload(): Promise<GaxiosResponse | undefined>;
}

export type MultiPartHelperGenerator = (
  bucket: Bucket,
  fileName: string,
  uploadId?: string,
  partsMap?: Map<number, string>
) => MultiPartUploadHelper;

const defaultMultiPartGenerator: MultiPartHelperGenerator = (
  bucket,
  fileName,
  uploadId,
  partsMap
) => {
  return new XMLMultiPartUploadHelper(bucket, fileName, uploadId, partsMap);
};

export class MultiPartUploadError extends Error {
  private uploadId: string;
  private partsMap: Map<number, string>;

  constructor(
    message: string,
    uploadId: string,
    partsMap: Map<number, string>
  ) {
    super(message);
    this.uploadId = uploadId;
    this.partsMap = partsMap;
  }
}
/**
 * Class representing an implementation of MPU in the XML API. This class is not meant for public usage.
 *
 * @private
 * @experimental
 */
class XMLMultiPartUploadHelper implements MultiPartUploadHelper {
  public partsMap;
  public uploadId;
  public bucket;
  public fileName;

  private authClient;
  private xmlParser;
  private xmlBuilder;
  private baseUrl;
  private retryOptions;

  constructor(
    bucket: Bucket,
    fileName: string,
    uploadId?: string,
    partsMap?: Map<number, string>
  ) {
    this.authClient = bucket.storage.authClient || new GoogleAuth();
    this.uploadId = uploadId || '';
    this.bucket = bucket;
    this.fileName = fileName;
    // eslint-disable-next-line prettier/prettier
    this.baseUrl = `https://${bucket.name}.${new URL(this.bucket.storage.apiEndpoint).hostname}/${fileName}`;
    this.xmlBuilder = new XMLBuilder({arrayNodeName: 'Part'});
    this.xmlParser = new XMLParser();
    this.partsMap = partsMap || new Map<number, string>();
    this.retryOptions = {
      retries: this.bucket.storage.retryOptions.maxRetries,
      factor: this.bucket.storage.retryOptions.retryDelayMultiplier,
      maxTimeout: this.bucket.storage.retryOptions.maxRetryDelay! * 1000,
      maxRetryTime: this.bucket.storage.retryOptions.totalTimeout! * 1000,
    };
  }

  /**
   * Initiates a multipart upload (MPU) to the XML API and stores the resultant upload id.
   *
   * @returns {Promise<void>}
   */
  async initiateUpload(): Promise<void> {
    const url = `${this.baseUrl}?uploads`;
    return retry(async bail => {
      try {
        const res = await this.authClient.request({
          method: 'POST',
          url,
        });
        if (res.data && res.data.error) {
          throw res.data.error;
        }
        const parsedXML = this.xmlParser.parse<{
          InitiateMultipartUploadResult: {
            UploadId: string;
          };
        }>(res.data);
        this.uploadId = parsedXML.InitiateMultipartUploadResult.UploadId;
      } catch (e) {
        this.#handleErrorResponse(e as Error, bail);
      }
    }, this.retryOptions);
  }

  /**
   * Uploads the provided chunk of data to the XML API using the previously created upload id.
   *
   * @param {number} partNumber the sequence number of this chunk.
   * @param {Buffer} chunk the chunk of data to be uploaded.
   * @param {string | false} validation whether or not to include the md5 hash in the headers to cause the server
   * to validate the chunk was not corrupted.
   * @returns {Promise<void>}
   */
  async uploadPart(
    partNumber: number,
    chunk: Buffer,
    validation?: 'md5' | false
  ): Promise<void> {
    const url = `${this.baseUrl}?partNumber=${partNumber}&uploadId=${this.uploadId}`;
    let headers: Headers = {};

    if (validation === 'md5') {
      const hash = createHash('md5').update(chunk).digest('base64');
      headers = {
        'Content-MD5': hash,
      };
    }

    return retry(async bail => {
      try {
        const res = await this.authClient.request({
          url,
          method: 'PUT',
          body: chunk,
          headers,
        });
        if (res.data && res.data.error) {
          throw res.data.error;
        }
        this.partsMap.set(partNumber, res.headers['etag']);
      } catch (e) {
        this.#handleErrorResponse(e as Error, bail);
      }
    }, this.retryOptions);
  }

  /**
   * Sends the final request of the MPU to tell GCS the upload is now complete.
   *
   * @returns {Promise<void>}
   */
  async completeUpload(): Promise<GaxiosResponse | undefined> {
    const url = `${this.baseUrl}?uploadId=${this.uploadId}`;
    const sortedMap = new Map(
      [...this.partsMap.entries()].sort((a, b) => a[0] - b[0])
    );
    const parts: {}[] = [];
    for (const entry of sortedMap.entries()) {
      parts.push({PartNumber: entry[0], ETag: entry[1]});
    }
    const body = `<CompleteMultipartUpload>${this.xmlBuilder.build(
      parts
    )}</CompleteMultipartUpload>`;
    return retry(async bail => {
      try {
        const res = await this.authClient.request({
          url,
          method: 'POST',
          body,
        });
        if (res.data && res.data.error) {
          throw res.data.error;
        }
        return res;
      } catch (e) {
        this.#handleErrorResponse(e as Error, bail);
        return;
      }
    }, this.retryOptions);
  }

  /**
   * Handles error responses and calls the bail function if the error should not be retried.
   *
   * @param {Error} err the thrown error
   * @param {Function} bail if the error can not be retried, the function to be called.
   */
  #handleErrorResponse(err: Error, bail: Function) {
    if (
      this.bucket.storage.retryOptions.autoRetry &&
      this.bucket.storage.retryOptions.retryableErrorFn!(err as ApiError)
    ) {
      throw err;
    } else {
      bail(err as Error);
    }
  }
}

/**
 * Create a TransferManager object to perform parallel transfer operations on a Cloud Storage bucket.
 *
 * @class
 * @hideconstructor
 *
 * @param {Bucket} bucket A {@link Bucket} instance
 * @experimental
 */
export class TransferManager {
  bucket: Bucket;
  constructor(bucket: Bucket) {
    this.bucket = bucket;
  }

  /**
   * @typedef {object} UploadManyFilesOptions
   * @property {number} [concurrencyLimit] The number of concurrently executing promises
   * to use when uploading the files.
   * @property {boolean} [skipIfExists] Do not upload the file if it already exists in
   * the bucket. This will set the precondition ifGenerationMatch = 0.
   * @property {string} [prefix] A prefix to append to all of the uploaded files.
   * @property {object} [passthroughOptions] {@link UploadOptions} Options to be passed through
   * to each individual upload operation.
   * @experimental
   */
  /**
   * Upload multiple files in parallel to the bucket. This is a convenience method
   * that utilizes {@link Bucket#upload} to perform the upload.
   *
   * @param {array | string} [filePathsOrDirectory] An array of fully qualified paths to the files or a directory name.
   * If a directory name is provided, the directory will be recursively walked and all files will be added to the upload list.
   * to be uploaded to the bucket
   * @param {UploadManyFilesOptions} [options] Configuration options.
   * @returns {Promise<UploadResponse[]>}
   *
   * @example
   * ```
   * const {Storage} = require('@google-cloud/storage');
   * const storage = new Storage();
   * const bucket = storage.bucket('my-bucket');
   * const transferManager = new TransferManager(bucket);
   *
   * //-
   * // Upload multiple files in parallel.
   * //-
   * const response = await transferManager.uploadManyFiles(['/local/path/file1.txt, 'local/path/file2.txt']);
   * // Your bucket now contains:
   * // - "local/path/file1.txt" (with the contents of '/local/path/file1.txt')
   * // - "local/path/file2.txt" (with the contents of '/local/path/file2.txt')
   * const response = await transferManager.uploadManyFiles('/local/directory');
   * // Your bucket will now contain all files contained in '/local/directory' maintaining the subdirectory structure.
   * ```
   * @experimental
   */
  async uploadManyFiles(
    filePathsOrDirectory: string[] | string,
    options: UploadManyFilesOptions = {}
  ): Promise<UploadResponse[]> {
    if (options.skipIfExists && options.passthroughOptions?.preconditionOpts) {
      options.passthroughOptions.preconditionOpts.ifGenerationMatch = 0;
    } else if (
      options.skipIfExists &&
      options.passthroughOptions === undefined
    ) {
      options.passthroughOptions = {
        preconditionOpts: {
          ifGenerationMatch: 0,
        },
      };
    }

    const limit = pLimit(
      options.concurrencyLimit || DEFAULT_PARALLEL_UPLOAD_LIMIT
    );
    const promises: Promise<UploadResponse>[] = [];
    let allPaths: string[] = [];
    if (!Array.isArray(filePathsOrDirectory)) {
      for await (const curPath of this.getPathsFromDirectory(
        filePathsOrDirectory
      )) {
        allPaths.push(curPath);
      }
    } else {
      allPaths = filePathsOrDirectory;
    }

    for (const filePath of allPaths) {
      const stat = await fsp.lstat(filePath);
      if (stat.isDirectory()) {
        continue;
      }

      const passThroughOptionsCopy: UploadOptions = {
        ...options.passthroughOptions,
      };

      passThroughOptionsCopy.destination = filePath;
      if (options.prefix) {
        passThroughOptionsCopy.destination = path.join(
          options.prefix,
          passThroughOptionsCopy.destination
        );
      }
      promises.push(
        limit(() =>
          this.bucket.upload(filePath, passThroughOptionsCopy as UploadOptions)
        )
      );
    }

    return Promise.all(promises);
  }

  /**
   * @typedef {object} DownloadManyFilesOptions
   * @property {number} [concurrencyLimit] The number of concurrently executing promises
   * to use when downloading the files.
   * @property {string} [prefix] A prefix to append to all of the downloaded files.
   * @property {string} [stripPrefix] A prefix to remove from all of the downloaded files.
   * @property {object} [passthroughOptions] {@link DownloadOptions} Options to be passed through
   * to each individual download operation.
   * @experimental
   */
  /**
   * Download multiple files in parallel to the local filesystem. This is a convenience method
   * that utilizes {@link File#download} to perform the download.
   *
   * @param {array | string} [filesOrFolder] An array of file name strings or file objects to be downloaded. If
   * a string is provided this will be treated as a GCS prefix and all files with that prefix will be downloaded.
   * @param {DownloadManyFilesOptions} [options] Configuration options.
   * @returns {Promise<DownloadResponse[]>}
   *
   * @example
   * ```
   * const {Storage} = require('@google-cloud/storage');
   * const storage = new Storage();
   * const bucket = storage.bucket('my-bucket');
   * const transferManager = new TransferManager(bucket);
   *
   * //-
   * // Download multiple files in parallel.
   * //-
   * const response = await transferManager.downloadManyFiles(['file1.txt', 'file2.txt']);
   * // The following files have been downloaded:
   * // - "file1.txt" (with the contents from my-bucket.file1.txt)
   * // - "file2.txt" (with the contents from my-bucket.file2.txt)
   * const response = await transferManager.downloadManyFiles([bucket.File('file1.txt'), bucket.File('file2.txt')]);
   * // The following files have been downloaded:
   * // - "file1.txt" (with the contents from my-bucket.file1.txt)
   * // - "file2.txt" (with the contents from my-bucket.file2.txt)
   * const response = await transferManager.downloadManyFiles('test-folder');
   * // All files with GCS prefix of 'test-folder' have been downloaded.
   * ```
   * @experimental
   */
  async downloadManyFiles(
    filesOrFolder: File[] | string[] | string,
    options: DownloadManyFilesOptions = {}
  ): Promise<void | DownloadResponse[]> {
    const limit = pLimit(
      options.concurrencyLimit || DEFAULT_PARALLEL_DOWNLOAD_LIMIT
    );
    const promises: Promise<DownloadResponse>[] = [];
    let files: File[] = [];

    if (!Array.isArray(filesOrFolder)) {
      const directoryFiles = await this.bucket.getFiles({
        prefix: filesOrFolder,
      });
      files = directoryFiles[0];
    } else {
      files = filesOrFolder.map(curFile => {
        if (typeof curFile === 'string') {
          return this.bucket.file(curFile);
        }
        return curFile;
      });
    }

    const stripRegexString = options.stripPrefix
      ? `^${options.stripPrefix}`
      : EMPTY_REGEX;
    const regex = new RegExp(stripRegexString, 'g');

    for (const file of files) {
      const passThroughOptionsCopy = {
        ...options.passthroughOptions,
      };

      if (options.prefix) {
        passThroughOptionsCopy.destination = path.join(
          options.prefix || '',
          passThroughOptionsCopy.destination || '',
          file.name
        );
      }
      if (options.stripPrefix) {
        passThroughOptionsCopy.destination = file.name.replace(regex, '');
      }
      promises.push(limit(() => file.download(passThroughOptionsCopy)));
    }

    return Promise.all(promises);
  }

  /**
   * @typedef {object} DownloadFileInChunksOptions
   * @property {number} [concurrencyLimit] The number of concurrently executing promises
   * to use when downloading the file.
   * @property {number} [chunkSizeBytes] The size in bytes of each chunk to be downloaded.
   * @property {string | boolean} [validation] Whether or not to perform a CRC32C validation check when download is complete.
   * @experimental
   */
  /**
   * Download a large file in chunks utilizing parallel download operations. This is a convenience method
   * that utilizes {@link File#download} to perform the download.
   *
   * @param {object} [file | string] {@link File} to download.
   * @param {DownloadFileInChunksOptions} [options] Configuration options.
   * @returns {Promise<DownloadResponse>}
   *
   * @example
   * ```
   * const {Storage} = require('@google-cloud/storage');
   * const storage = new Storage();
   * const bucket = storage.bucket('my-bucket');
   * const transferManager = new TransferManager(bucket);
   *
   * //-
   * // Download a large file in chunks utilizing parallel operations.
   * //-
   * const response = await transferManager.downloadFileInChunks(bucket.file('large-file.txt');
   * // Your local directory now contains:
   * // - "large-file.txt" (with the contents from my-bucket.large-file.txt)
   * ```
   * @experimental
   */
  async downloadFileInChunks(
    fileOrName: File | string,
    options: DownloadFileInChunksOptions = {}
  ): Promise<void | DownloadResponse> {
    let chunkSize =
      options.chunkSizeBytes || DOWNLOAD_IN_CHUNKS_DEFAULT_CHUNK_SIZE;
    let limit = pLimit(
      options.concurrencyLimit || DEFAULT_PARALLEL_CHUNKED_DOWNLOAD_LIMIT
    );
    const promises: Promise<{bytesWritten: number; buffer: Buffer}>[] = [];
    const file: File =
      typeof fileOrName === 'string'
        ? this.bucket.file(fileOrName)
        : fileOrName;

    const fileInfo = await file.get();
    const size = parseInt(fileInfo[0].metadata.size!.toString());
    // If the file size does not meet the threshold download it as a single chunk.
    if (size < DOWNLOAD_IN_CHUNKS_FILE_SIZE_THRESHOLD) {
      limit = pLimit(1);
      chunkSize = size;
    }

    let start = 0;
    const filePath = options.destination || path.basename(file.name);
    const fileToWrite = await fsp.open(filePath, 'w+');
    while (start < size) {
      const chunkStart = start;
      let chunkEnd = start + chunkSize - 1;
      chunkEnd = chunkEnd > size ? size : chunkEnd;
      promises.push(
        limit(() =>
          file.download({start: chunkStart, end: chunkEnd}).then(resp => {
            return fileToWrite.write(resp[0], 0, resp[0].length, chunkStart);
          })
        )
      );

      start += chunkSize;
    }

    return new Promise((resolve, reject) => {
      let results: DownloadResponse;
      Promise.all(promises)
        .then(data => {
          results = data.map(result => result.buffer) as DownloadResponse;
          if (options.validation === 'crc32c') {
            return CRC32C.fromFile(filePath);
          }
          return;
        })
        .then(() => {
          resolve(results);
        })
        .catch(e => {
          reject(e);
        })
        .finally(() => {
          fileToWrite.close();
        });
    });
  }

  /**
   * @typedef {object} UploadFileInChunksOptions
   * @property {number} [concurrencyLimit] The number of concurrently executing promises
   * to use when uploading the file.
   * @property {number} [chunkSizeBytes] The size in bytes of each chunk to be uploaded.
   * @property {string} [uploadName] Name of the file when saving to GCS. If ommitted the name is taken from the file path.
   * @property {number} [maxQueueSize] The number of chunks to be uploaded to hold in memory concurrently. If not specified
   * defaults to the specified concurrency limit.
   * @property {string} [uploadId] If specified attempts to resume a previous upload.
   * @property {Map} [partsMap] If specified alongside uploadId, attempts to resume a previous upload from the last chunk
   * specified in partsMap
   * @experimental
   */
  /**
   * Upload a large file in chunks utilizing parallel upload opertions. If the upload fails, an uploadId and
   * map containing all the successfully uploaded parts will be returned to the caller. These arguments can be used to
   * resume the upload.
   *
   * @param {string} [filePath] The path of the file to be uploaded
   * @param {UploadFileInChunksOptions} [options] Configuration options.
   * @param {MultiPartHelperGenerator} [generator] A function that will return a type that implements the MPU interface. Most users will not need to use this.
   * @returns {Promise<void>} If successful a promise resolving to void, otherwise a error containing the message, uploadid, and parts map.
   *
   * @example
   * ```
   * const {Storage} = require('@google-cloud/storage');
   * const storage = new Storage();
   * const bucket = storage.bucket('my-bucket');
   * const transferManager = new TransferManager(bucket);
   *
   * //-
   * // Upload a large file in chunks utilizing parallel operations.
   * //-
   * const response = await transferManager.uploadFileInChunks('large-file.txt');
   * // Your bucket now contains:
   * // - "large-file.txt"
   * ```
   *
   * @experimental
   */
  async uploadFileInChunks(
    filePath: string,
    options: UploadFileInChunksOptions = {},
    generator: MultiPartHelperGenerator = defaultMultiPartGenerator
  ): Promise<GaxiosResponse | undefined> {
    const chunkSize =
      options.chunkSizeBytes || UPLOAD_IN_CHUNKS_DEFAULT_CHUNK_SIZE;
    const limit = pLimit(
      options.concurrencyLimit || DEFAULT_PARALLEL_CHUNKED_UPLOAD_LIMIT
    );
    const maxQueueSize =
      options.maxQueueSize ||
      options.concurrencyLimit ||
      DEFAULT_PARALLEL_CHUNKED_UPLOAD_LIMIT;
    const fileName = options.uploadName || path.basename(filePath);
    const mpuHelper = generator(
      this.bucket,
      fileName,
      options.uploadId,
      options.partsMap
    );
    let partNumber = 1;
    let promises: Promise<void>[] = [];
    try {
      if (options.uploadId === undefined) {
        await mpuHelper.initiateUpload();
      }
      const startOrResumptionByte = mpuHelper.partsMap!.size * chunkSize;
      const readStream = createReadStream(filePath, {
        highWaterMark: chunkSize,
        start: startOrResumptionByte,
      });
      // p-limit only limits the number of running promises. We do not want to hold an entire
      // large file in memory at once so promises acts a queue that will hold only maxQueueSize in memory.
      for await (const curChunk of readStream) {
        if (promises.length >= maxQueueSize) {
          await Promise.all(promises);
          promises = [];
        }
        promises.push(
          limit(() =>
            mpuHelper.uploadPart(partNumber++, curChunk, options.validation)
          )
        );
      }
      await Promise.all(promises);
      return await mpuHelper.completeUpload();
    } catch (e) {
      throw new MultiPartUploadError(
        (e as Error).message,
        mpuHelper.uploadId!,
        mpuHelper.partsMap!
      );
    }
  }

  private async *getPathsFromDirectory(
    directory: string
  ): AsyncGenerator<string> {
    const filesAndSubdirectories = await fsp.readdir(directory, {
      withFileTypes: true,
    });
    for (const curFileOrDirectory of filesAndSubdirectories) {
      const fullPath = path.join(directory, curFileOrDirectory.name);
      curFileOrDirectory.isDirectory()
        ? yield* this.getPathsFromDirectory(fullPath)
        : yield fullPath;
    }
  }
}
