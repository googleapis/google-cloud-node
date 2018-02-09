/*!
 * Copyright 2014 Google Inc. All Rights Reserved.
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

'use strict';

var Buffer = require('safe-buffer').Buffer;
var common = require('@google-cloud/common');
var compressible = require('compressible');
var concat = require('concat-stream');
var createErrorClass = require('create-error-class');
var crypto = require('crypto');
var duplexify = require('duplexify');
var extend = require('extend');
var format = require('string-format-obj');
var fs = require('fs');
var hashStreamValidation = require('hash-stream-validation');
var is = require('is');
var mime = require('mime');
var once = require('once');
var pumpify = require('pumpify');
var resumableUpload = require('gcs-resumable-upload');
var streamEvents = require('stream-events');
var through = require('through2');
var util = require('util');
var zlib = require('zlib');

var Acl = require('./acl.js');

/**
 * Custom error type for errors related to getting signed errors and policies.
 *
 * @private
 *
 * @param {string} message - Custom error message.
 * @returns {Error}
 */
var SigningError = createErrorClass('SigningError', function(message) {
  this.message = message;
});

/**
 * @const {string}
 * @private
 */
var STORAGE_DOWNLOAD_BASE_URL = 'https://storage.googleapis.com';

/**
 * @const {string}
 * @private
 */
var STORAGE_UPLOAD_BASE_URL = 'https://www.googleapis.com/upload/storage/v1/b';

/**
 * @const {RegExp}
 * @private
 */
var GS_URL_REGEXP = /^gs:\/\/([a-z0-9_.-]+)\/(.+)$/;

/**
 * A File object is created from your {@link Bucket} object using
 * {@link Bucket#file}.
 *
 * @class
 * @param {Bucket} bucket The Bucket instance this file is
 *     attached to.
 * @param {string} name The name of the remote file.
 * @param {object} [options] Configuration options.
 * @param {string} [options.encryptionKey] A custom encryption key.
 * @param {number} [options.generation] Generation to scope the file to.
 * @param {string} [options.userProject] The ID of the project which will be
 *     billed for all requests made from File object.
 * @example
 * var storage = require('@google-cloud/storage')();
 * var myBucket = storage.bucket('my-bucket');
 *
 * var file = myBucket.file('my-file');
 */
function File(bucket, name, options) {
  options = options || {};

  this.bucket = bucket;
  this.storage = bucket.parent;
  this.userProject = options.userProject || bucket.userProject;

  Object.defineProperty(this, 'name', {
    enumerable: true,
    value: name.replace(/^\/+/, ''), // Remove leading slashes.
  });

  var generation = parseInt(options.generation, 10);

  if (!isNaN(generation)) {
    this.generation = generation;
    this.requestQueryObject = {
      generation: this.generation,
    };
  }

  common.ServiceObject.call(this, {
    parent: bucket,
    baseUrl: '/o',
    id: encodeURIComponent(this.name),
  });

  if (options.encryptionKey) {
    this.setEncryptionKey(options.encryptionKey);
  }

  /**
   * Cloud Storage uses access control lists (ACLs) to manage object and
   * bucket access. ACLs are the mechanism you use to share objects with other
   * users and allow other users to access your buckets and objects.
   *
   * An ACL consists of one or more entries, where each entry grants permissions
   * to an entity. Permissions define the actions that can be performed against
   * an object or bucket (for example, `READ` or `WRITE`); the entity defines
   * who the permission applies to (for example, a specific user or group of
   * users).
   *
   * The `acl` object on a File instance provides methods to get you a list of
   * the ACLs defined on your bucket, as well as set, update, and delete them.
   *
   * @see [About Access Control lists]{@link http://goo.gl/6qBBPO}
   *
   * @name File#acl
   * @mixes Acl
   *
   * @example
   * var storage = require('@google-cloud/storage')();
   * var myBucket = storage.bucket('my-bucket');
   *
   * var file = myBucket.file('my-file');
   * //-
   * // Make a file publicly readable.
   * //-
   * var options = {
   *   entity: 'allUsers',
   *   role: storage.acl.READER_ROLE
   * };
   *
   * file.acl.add(options, function(err, aclObject) {});
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * file.acl.add(options).then(function(data) {
   *   var aclObject = data[0];
   *   var apiResponse = data[1];
   * });
   */
  this.acl = new Acl({
    request: this.request.bind(this),
    pathPrefix: '/acl',
  });
}

util.inherits(File, common.ServiceObject);

/**
 * @typedef {array} CopyResponse
 * @property {File} 0 The copied {@link File}.
 * @property {object} 1 The full API response.
 */
/**
 * @callback CopyCallback
 * @param {?Error} err Request error, if any.
 * @param {File} copiedFile The copied {@link File}.
 * @param {object} apiResponse The full API response.
 */
/**
 * Copy this file to another file. By default, this will copy the file to the
 * same bucket, but you can choose to copy it to another Bucket by providing
 * a Bucket or File object or a URL starting with "gs://".
 *
 * @see [Objects: copy API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/objects/copy}
 *
 * @throws {Error} If the destination file is not provided.
 *
 * @param {string|Bucket|File} destination Destination file.
 * @param {object} [options] Configuration options. See an
 *     [Object resource](https://cloud.google.com/storage/docs/json_api/v1/objects#resource).
 * @param {string} [options.token] A previously-returned `rewriteToken` from an
 *     unfinished rewrite request.
 * @param {string} [options.userProject] The ID of the project which will be
 *     billed for the request.
 * @param {CopyCallback} [callback] Callback function.
 * @returns {Promise<CopyResponse>}
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 *
 * //-
 * // You can pass in a variety of types for the destination.
 * //
 * // For all of the below examples, assume we are working with the following
 * // Bucket and File objects.
 * //-
 * var bucket = storage.bucket('my-bucket');
 * var file = bucket.file('my-image.png');
 *
 * //-
 * // If you pass in a string for the destination, the file is copied to its
 * // current bucket, under the new name provided.
 * //-
 * file.copy('my-image-copy.png', function(err, copiedFile, apiResponse) {
 *   // `my-bucket` now contains:
 *   // - "my-image.png"
 *   // - "my-image-copy.png"
 *
 *   // `copiedFile` is an instance of a File object that refers to your new
 *   // file.
 * });
 *
 * //-
 * // If you pass in a string starting with "gs://" for the destination, the
 * // file is copied to the other bucket and under the new name provided.
 * //-
 * var newLocation = 'gs://another-bucket/my-image-copy.png';
 * file.copy(newLocation, function(err, copiedFile, apiResponse) {
 *   // `my-bucket` still contains:
 *   // - "my-image.png"
 *   //
 *   // `another-bucket` now contains:
 *   // - "my-image-copy.png"
 *
 *   // `copiedFile` is an instance of a File object that refers to your new
 *   // file.
 * });
 *
 * //-
 * // If you pass in a Bucket object, the file will be copied to that bucket
 * // using the same name.
 * //-
 * var anotherBucket = storage.bucket('another-bucket');
 * file.copy(anotherBucket, function(err, copiedFile, apiResponse) {
 *   // `my-bucket` still contains:
 *   // - "my-image.png"
 *   //
 *   // `another-bucket` now contains:
 *   // - "my-image.png"
 *
 *   // `copiedFile` is an instance of a File object that refers to your new
 *   // file.
 * });
 *
 * //-
 * // If you pass in a File object, you have complete control over the new
 * // bucket and filename.
 * //-
 * var anotherFile = anotherBucket.file('my-awesome-image.png');
 * file.copy(anotherFile, function(err, copiedFile, apiResponse) {
 *   // `my-bucket` still contains:
 *   // - "my-image.png"
 *   //
 *   // `another-bucket` now contains:
 *   // - "my-awesome-image.png"
 *
 *   // Note:
 *   // The `copiedFile` parameter is equal to `anotherFile`.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * file.copy(newLocation).then(function(data) {
 *   var newFile = data[0];
 *   var apiResponse = data[1];
 * });
 *
 * @example <caption>include:samples/files.js</caption>
 * region_tag:storage_copy_file
 * Another example:
 */
File.prototype.copy = function(destination, options, callback) {
  var self = this;

  var noDestinationError = new Error('Destination file should have a name.');

  if (!destination) {
    throw noDestinationError;
  }

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = extend(true, {}, options);
  callback = callback || common.util.noop;

  var destBucket;
  var destName;
  var newFile;

  if (is.string(destination)) {
    var parsedDestination = GS_URL_REGEXP.exec(destination);
    if (parsedDestination !== null && parsedDestination.length === 3) {
      destBucket = this.storage.bucket(parsedDestination[1]);
      destName = parsedDestination[2];
    } else {
      destBucket = this.bucket;
      destName = destination;
    }
  } else if (
    destination.constructor &&
    destination.constructor.name === 'Bucket'
  ) {
    destBucket = destination;
    destName = this.name;
  } else if (destination instanceof File) {
    destBucket = destination.bucket;
    destName = destination.name;
    newFile = destination;
  } else {
    throw noDestinationError;
  }

  var query = {};
  if (is.defined(this.generation)) {
    query.sourceGeneration = this.generation;
  }
  if (is.defined(options.token)) {
    query.rewriteToken = options.token;
  }
  if (is.defined(options.userProject)) {
    query.userProject = options.userProject;
    delete options.userProject;
  }

  newFile = newFile || destBucket.file(destName);

  var headers = {};
  if (is.defined(newFile.encryptionKey)) {
    headers['x-goog-copy-source-encryption-algorithm'] = 'AES256';
    headers['x-goog-copy-source-encryption-key'] = this.encryptionKeyBase64;
    headers[
      'x-goog-copy-source-encryption-key-sha256'
    ] = this.encryptionKeyHash;

    this.setEncryptionKey(newFile.encryptionKey);
  }

  this.request(
    {
      method: 'POST',
      uri: format('/rewriteTo/b/{bucketName}/o/{fileName}', {
        bucketName: destBucket.name,
        fileName: encodeURIComponent(destName),
      }),
      qs: query,
      json: options,
      headers: headers,
    },
    function(err, resp) {
      if (err) {
        callback(err, null, resp);
        return;
      }

      if (resp.rewriteToken) {
        var options = {
          token: resp.rewriteToken,
        };

        if (query.userProject) {
          options.userProject = query.userProject;
        }

        self.copy(newFile, options, callback);
        return;
      }

      callback(null, newFile, resp);
    }
  );
};

/**
 * Create a readable stream to read the contents of the remote file. It can be
 * piped to a writable stream or listened to for 'data' events to read a file's
 * contents.
 *
 * In the unlikely event there is a mismatch between what you downloaded and the
 * version in your Bucket, your error handler will receive an error with code
 * "CONTENT_DOWNLOAD_MISMATCH". If you receive this error, the best recourse is
 * to try downloading the file again.
 *
 * For faster crc32c computation, you must manually install
 * [`fast-crc32c`](http://www.gitnpm.com/fast-crc32c):
 *
 *     $ npm install --save fast-crc32c
 *
 * NOTE: Readable streams will emit the `end` event when the file is fully
 * downloaded.
 *
 * @param {object} [options] Configuration options.
 * @param {string} [options.userProject] The ID of the project which will be
 *     billed for the request.
 * @param {string|boolean} [options.validation] Possible values: `"md5"`,
 *     `"crc32c"`, or `false`. By default, data integrity is validated with a
 *     CRC32c checksum. You may use MD5 if preferred, but that hash is not
 *     supported for composite objects. An error will be raised if MD5 is
 *     specified but is not available. You may also choose to skip validation
 *     completely, however this is **not recommended**.
 * @param {number} [options.start] A byte offset to begin the file's download
 *     from. Default is 0. NOTE: Byte ranges are inclusive; that is,
 *     `options.start = 0` and `options.end = 999` represent the first 1000
 *     bytes in a file or object. NOTE: when specifying a byte range, data
 *     integrity is not available.
 * @param {number} [options.end] A byte offset to stop reading the file at.
 *     NOTE: Byte ranges are inclusive; that is, `options.start = 0` and
 *     `options.end = 999` represent the first 1000 bytes in a file or object.
 *     NOTE: when specifying a byte range, data integrity is not available.
 * @returns {ReadableStream}
 *
 * @example
 * //-
 * // <h4>Downloading a File</h4>
 * //
 * // The example below demonstrates how we can reference a remote file, then
 * // pipe its contents to a local file. This is effectively creating a local
 * // backup of your remote data.
 * //-
 * var storage = require('@google-cloud/storage')();
 * var bucket = storage.bucket('my-bucket');
 *
 * var fs = require('fs');
 * var remoteFile = bucket.file('image.png');
 * var localFilename = '/Users/stephen/Photos/image.png';
 *
 * remoteFile.createReadStream()
 *   .on('error', function(err) {})
 *   .on('response', function(response) {
 *     // Server connected and responded with the specified status and headers.
 *    })
 *   .on('end', function() {
 *     // The file is fully downloaded.
 *   })
 *   .pipe(fs.createWriteStream(localFilename));
 *
 * //-
 * // To limit the downloaded data to only a byte range, pass an options object.
 * //-
 * var logFile = myBucket.file('access_log');
 * logFile.createReadStream({
 *     start: 10000,
 *     end: 20000
 *   })
 *   .on('error', function(err) {})
 *   .pipe(fs.createWriteStream('/Users/stephen/logfile.txt'));
 *
 * //-
 * // To read a tail byte range, specify only `options.end` as a negative
 * // number.
 * //-
 * var logFile = myBucket.file('access_log');
 * logFile.createReadStream({
 *     end: -100
 *   })
 *   .on('error', function(err) {})
 *   .pipe(fs.createWriteStream('/Users/stephen/logfile.txt'));
 */
File.prototype.createReadStream = function(options) {
  options = options || {};

  var self = this;
  var rangeRequest = is.number(options.start) || is.number(options.end);
  var tailRequest = options.end < 0;

  var validateStream; // Created later, if necessary.
  var throughStream = streamEvents(through());

  var crc32c = true;
  var md5 = false;

  var refreshedMetadata = false;

  if (is.string(options.validation)) {
    options.validation = options.validation.toLowerCase();
    crc32c = options.validation === 'crc32c';
    md5 = options.validation === 'md5';
  } else if (options.validation === false) {
    crc32c = false;
  }

  if (rangeRequest) {
    if (is.string(options.validation) || options.validation === true) {
      throw new Error('Cannot use validation with file ranges (start/end).');
    }
    // Range requests can't receive data integrity checks.
    crc32c = false;
    md5 = false;
  }

  // Authenticate the request, then pipe the remote API request to the stream
  // returned to the user.
  function makeRequest() {
    var reqOpts = {
      forever: false,
      uri: '',
      headers: {
        'Accept-Encoding': 'gzip',
      },
      qs: {
        alt: 'media',
      },
    };

    if (self.generation) {
      reqOpts.qs.generation = self.generation;
    }

    if (options.userProject) {
      reqOpts.qs.userProject = options.userProject;
    }

    if (rangeRequest) {
      var start = is.number(options.start) ? options.start : '0';
      var end = is.number(options.end) ? options.end : '';

      reqOpts.headers.Range = `bytes=${tailRequest ? end : `${start}-${end}`}`;
    }

    self
      .requestStream(reqOpts)
      .on('error', err => {
        throughStream.destroy(err);
      })
      .on('response', res => {
        throughStream.emit('response', res);
        common.util.handleResp(null, res, null, onResponse);
      })
      .resume();

    // We listen to the response event from the request stream so that we can...
    //
    //   1) Intercept any data from going to the user if an error occurred.
    //   2) Calculate the hashes from the http.IncomingMessage response stream,
    //      which will return the bytes from the source without decompressing
    //      gzip'd content. We then send it through decompressed, if applicable,
    //      to the user.
    function onResponse(err, body, rawResponseStream) {
      if (err) {
        // Get error message from the body.
        rawResponseStream.pipe(
          concat(function(body) {
            err.message = body.toString();
            throughStream.destroy(err);
          })
        );

        return;
      }

      var headers = rawResponseStream.toJSON().headers;
      var isCompressed = headers['content-encoding'] === 'gzip';

      var shouldRunValidation = !rangeRequest && (crc32c || md5);

      var throughStreams = [];

      if (shouldRunValidation) {
        validateStream = hashStreamValidation({crc32c, md5});
        throughStreams.push(validateStream);
      }

      if (isCompressed) {
        throughStreams.push(zlib.createGunzip());
      }

      if (throughStreams.length === 1) {
        rawResponseStream = rawResponseStream.pipe(throughStreams[0]);
      } else if (throughStreams.length > 1) {
        rawResponseStream = rawResponseStream.pipe(pumpify.obj(throughStreams));
      }

      rawResponseStream.on('end', onComplete).pipe(throughStream, {end: false});
    }

    // This is hooked to the `complete` event from the request stream. This is
    // our chance to validate the data and let the user know if anything went
    // wrong.
    function onComplete(err) {
      if (err) {
        throughStream.destroy(err);
        return;
      }

      if (rangeRequest) {
        throughStream.end();
        return;
      }

      if (!refreshedMetadata) {
        refreshedMetadata = true;
        self.getMetadata({userProject: options.userProject}, onComplete);
        return;
      }

      var hashes = {
        crc32c: self.metadata.crc32c,
        md5: self.metadata.md5Hash,
      };

      // If we're doing validation, assume the worst-- a data integrity
      // mismatch. If not, these tests won't be performed, and we can assume the
      // best.
      var failed = crc32c || md5;

      if (crc32c && hashes.crc32c) {
        // We must remove the first four bytes from the returned checksum.
        // http://stackoverflow.com/questions/25096737/
        //   base64-encoding-of-crc32c-long-value
        failed = !validateStream.test('crc32c', hashes.crc32c.substr(4));
      }

      if (md5 && hashes.md5) {
        failed = !validateStream.test('md5', hashes.md5);
      }

      if (md5 && !hashes.md5) {
        var hashError = new Error(
          [
            'MD5 verification was specified, but is not available for the',
            'requested object. MD5 is not available for composite objects.',
          ].join(' ')
        );
        hashError.code = 'MD5_NOT_AVAILABLE';

        throughStream.destroy(hashError);
      } else if (failed) {
        var mismatchError = new Error(
          [
            'The downloaded data did not match the data from the server.',
            'To be sure the content is the same, you should download the',
            'file again.',
          ].join(' ')
        );
        mismatchError.code = 'CONTENT_DOWNLOAD_MISMATCH';

        throughStream.destroy(mismatchError);
      } else {
        throughStream.end();
      }
    }
  }

  throughStream.on('reading', makeRequest);

  return throughStream;
};

/**
 * @typedef {array} CreateResumableUploadResponse
 * @property {string} 0 The resumable upload's unique session URI.
 */
/**
 * @callback CreateResumableUploadCallback
 * @param {?Error} err Request error, if any.
 * @param {string} uri The resumable upload's unique session URI.
 */
/**
 * Create a unique resumable upload session URI. This is the first step when
 * performing a resumable upload.
 *
 * See the [Resumable upload guide](https://cloud.google.com/storage/docs/json_api/v1/how-tos/resumable-upload)
 * for more on how the entire process works.
 *
 * <h4>Note</h4>
 *
 * If you are just looking to perform a resumable upload without worrying about
 * any of the details, see {@link File#createWriteStream}. Resumable uploads
 * are performed by default.
 *
 * @see [Resumable upload guide]{@link https://cloud.google.com/storage/docs/json_api/v1/how-tos/resumable-upload}
 *
 * @param {object} [options] Configuration options.
 * @param {object} [options.metadata] Metadata to set on the file.
 * @param {string} [options.origin] Origin header to set for the upload.
 * @param {string} [options.predefinedAcl] Apply a predefined set of access
 *     controls to this object.
 *
 *     Acceptable values are:
 *     - **`authenticatedRead`** - Object owner gets `OWNER` access, and
 *       `allAuthenticatedUsers` get `READER` access.
 *
 *     - **`bucketOwnerFullControl`** - Object owner gets `OWNER` access, and
 *       project team owners get `OWNER` access.
 *
 *     - **`bucketOwnerRead`** - Object owner gets `OWNER` access, and project
 *       team owners get `READER` access.
 *
 *     - **`private`** - Object owner gets `OWNER` access.
 *
 *     - **`projectPrivate`** - Object owner gets `OWNER` access, and project
 *       team members get access according to their roles.
 *
 *     - **`publicRead`** - Object owner gets `OWNER` access, and `allUsers` get
 *       `READER` access.
 * @param {boolean} [options.private] Make the uploaded file private. (Alias for
 *     `options.predefinedAcl = 'private'`)
 * @param {boolean} [options.public] Make the uploaded file public. (Alias for
 *     `options.predefinedAcl = 'publicRead'`)
 * @param {string} [options.userProject] The ID of the project which will be
 *     billed for the request.
 * @param {CreateResumableUploadCallback} [callback] Callback function.
 * @returns {Promise<CreateResumableUploadResponse>}
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var myBucket = storage.bucket('my-bucket');
 *
 * var file = myBucket.file('my-file');
 * file.createResumableUpload(function(err, uri) {
 *   if (!err) {
 *     // `uri` can be used to PUT data to.
 *   }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * file.createResumableUpload().then(function(data) {
 *   var uri = data[0];
 * });
 */
File.prototype.createResumableUpload = function(options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  resumableUpload.createURI(
    {
      authClient: this.bucket.storage.authClient,
      bucket: this.bucket.name,
      file: this.name,
      generation: this.generation,
      metadata: options.metadata,
      origin: options.origin,
      predefinedAcl: options.predefinedAcl,
      private: options.private,
      public: options.public,
      userProject: options.userProject,
    },
    callback
  );
};

/**
 * Create a writable stream to overwrite the contents of the file in your
 * bucket.
 *
 * A File object can also be used to create files for the first time.
 *
 * Resumable uploads are automatically enabled and must be shut off explicitly
 * by setting `options.resumable` to `false`.
 *
 * <p class="notice">
 *   There is some overhead when using a resumable upload that can cause
 *   noticeable performance degradation while uploading a series of small files.
 *   When uploading files less than 10MB, it is recommended that the resumable
 *   feature is disabled.
 * </p>
 *
 * For faster crc32c computation, you must manually install
 * [`fast-crc32c`](http://www.gitnpm.com/fast-crc32c):
 *
 *     $ npm install --save fast-crc32c
 *
 * NOTE: Writable streams will emit the `finish` event when the file is fully
 * uploaded.
 *
 * @see [Upload Options (Simple or Resumable)]{@link https://cloud.google.com/storage/docs/json_api/v1/how-tos/upload}
 * @see [Objects: insert API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/objects/insert}
 *
 * @param {object} [options] Configuration options.
 * @param {string} [options.contentType] Alias for
 *     `options.metadata.contentType`. If set to `auto`, the file name is used
 *     to determine the contentType.
 * @param {string|boolean} [options.gzip] If true, automatically gzip the file.
 *     If set to `auto`, the contentType is used to determine if the file should
 *     be gzipped. This will set `options.metadata.contentEncoding` to `gzip` if
 *     necessary.
 * @param {object} [options.metadata] See the examples below or
 *     [Objects: insert request body](https://cloud.google.com/storage/docs/json_api/v1/objects/insert#request_properties_JSON)
 *     for more details.
 * @param {string} [options.offset] The starting byte of the upload stream, for
 *     resuming an interrupted upload. Defaults to 0.
 * @param {string} [options.predefinedAcl] Apply a predefined set of access
 *     controls to this object.
 *
 *     Acceptable values are:
 *     - **`authenticatedRead`** - Object owner gets `OWNER` access, and
 *       `allAuthenticatedUsers` get `READER` access.
 *
 *     - **`bucketOwnerFullControl`** - Object owner gets `OWNER` access, and
 *       project team owners get `OWNER` access.
 *
 *     - **`bucketOwnerRead`** - Object owner gets `OWNER` access, and project
 *       team owners get `READER` access.
 *
 *     - **`private`** - Object owner gets `OWNER` access.
 *
 *     - **`projectPrivate`** - Object owner gets `OWNER` access, and project
 *       team members get access according to their roles.
 *
 *     - **`publicRead`** - Object owner gets `OWNER` access, and `allUsers` get
 *       `READER` access.
 * @param {boolean} [options.private] Make the uploaded file private. (Alias for
 *     `options.predefinedAcl = 'private'`)
 * @param {boolean} [options.public] Make the uploaded file public. (Alias for
 *     `options.predefinedAcl = 'publicRead'`)
 * @param {boolean} [options.resumable] Force a resumable upload. NOTE: When
 *     working with streams, the file format and size is unknown until it's
 *     completely consumed. Because of this, it's best for you to be explicit
 *     for what makes sense given your input.
 * @param {string} [options.uri] The URI for an already-created resumable
 *     upload. See {@link File#createResumableUpload}.
 * @param {string} [options.userProject] The ID of the project which will be
 *     billed for the request.
 * @param {string|boolean} [options.validation] Possible values: `"md5"`,
 *     `"crc32c"`, or `false`. By default, data integrity is validated with a
 *     CRC32c checksum. You may use MD5 if preferred, but that hash is not
 *     supported for composite objects. An error will be raised if MD5 is
 *     specified but is not available. You may also choose to skip validation
 *     completely, however this is **not recommended**.
 * @returns {WritableStream}
 *
 * @example
 * var fs = require('fs');
 * var storage = require('@google-cloud/storage')();
 * var myBucket = storage.bucket('my-bucket');
 *
 * var file = myBucket.file('my-file');
 *
 * //-
 * // <h4>Uploading a File</h4>
 * //
 * // Now, consider a case where we want to upload a file to your bucket. You
 * // have the option of using {@link Bucket#upload}, but that is just
 * // a convenience method which will do the following.
 * //-
 * fs.createReadStream('/Users/stephen/Photos/birthday-at-the-zoo/panda.jpg')
 *   .pipe(file.createWriteStream())
 *   .on('error', function(err) {})
 *   .on('finish', function() {
 *     // The file upload is complete.
 *   });
 *
 * //-
 * // <h4>Uploading a File with gzip compression</h4>
 * //-
 * fs.createReadStream('/Users/stephen/site/index.html')
 *   .pipe(file.createWriteStream({ gzip: true }))
 *   .on('error', function(err) {})
 *   .on('finish', function() {
 *     // The file upload is complete.
 *   });
 *
 * //-
 * // Downloading the file with `createReadStream` will automatically decode the
 * // file.
 * //-
 *
 * //-
 * // <h4>Uploading a File with Metadata</h4>
 * //
 * // One last case you may run into is when you want to upload a file to your
 * // bucket and set its metadata at the same time. Like above, you can use
 * // {@link Bucket#upload} to do this, which is just a wrapper around
 * // the following.
 * //-
 * fs.createReadStream('/Users/stephen/Photos/birthday-at-the-zoo/panda.jpg')
 *   .pipe(file.createWriteStream({
 *     metadata: {
 *       contentType: 'image/jpeg',
 *       metadata: {
 *         custom: 'metadata'
 *       }
 *     }
 *   }))
 *   .on('error', function(err) {})
 *   .on('finish', function() {
 *     // The file upload is complete.
 *   });
 */
File.prototype.createWriteStream = function(options) {
  options = options || {};

  var self = this;

  options = extend({metadata: {}}, options);

  if (options.contentType) {
    options.metadata.contentType = options.contentType;

    if (options.metadata.contentType === 'auto') {
      options.metadata.contentType = mime.getType(this.name);
    }
  }

  var gzip = options.gzip;

  if (gzip === 'auto') {
    gzip = compressible(options.metadata.contentType);
  }

  if (gzip) {
    options.metadata.contentEncoding = 'gzip';
  }

  var crc32c = true;
  var md5 = false;

  if (is.string(options.validation)) {
    options.validation = options.validation.toLowerCase();
    crc32c = options.validation === 'crc32c';
    md5 = options.validation === 'md5';
  } else if (options.validation === false) {
    crc32c = false;
  }

  // Collect data as it comes in to store in a hash. This is compared to the
  // checksum value on the returned metadata from the API.
  var validateStream = hashStreamValidation({
    crc32c: crc32c,
    md5: md5,
  });

  var fileWriteStream = duplexify();

  var stream = streamEvents(
    pumpify([
      gzip ? zlib.createGzip() : through(),
      validateStream,
      fileWriteStream,
    ])
  );

  // Wait until we've received data to determine what upload technique to use.
  stream.on('writing', function() {
    if (options.resumable === false) {
      self.startSimpleUpload_(fileWriteStream, options);
    } else {
      self.startResumableUpload_(fileWriteStream, options);
    }
  });

  fileWriteStream.on('response', stream.emit.bind(stream, 'response'));

  // This is to preserve the `finish` event. We wait until the request stream
  // emits "complete", as that is when we do validation of the data. After that
  // is successful, we can allow the stream to naturally finish.
  //
  // Reference for tracking when we can use a non-hack solution:
  // https://github.com/nodejs/node/pull/2314
  fileWriteStream.on('prefinish', function() {
    stream.cork();
  });

  // Compare our hashed version vs the completed upload's version.
  fileWriteStream.on('complete', function() {
    var metadata = self.metadata;

    // If we're doing validation, assume the worst-- a data integrity mismatch.
    // If not, these tests won't be performed, and we can assume the best.
    var failed = crc32c || md5;

    if (crc32c && metadata.crc32c) {
      // We must remove the first four bytes from the returned checksum.
      // http://stackoverflow.com/questions/25096737/
      //   base64-encoding-of-crc32c-long-value
      failed = !validateStream.test('crc32c', metadata.crc32c.substr(4));
    }

    if (md5 && metadata.md5Hash) {
      failed = !validateStream.test('md5', metadata.md5Hash);
    }

    if (failed) {
      self.delete(function(err) {
        var code;
        var message;

        if (err) {
          code = 'FILE_NO_UPLOAD_DELETE';
          message = [
            'The uploaded data did not match the data from the server. As a',
            'precaution, we attempted to delete the file, but it was not',
            'successful. To be sure the content is the same, you should try',
            'removing the file manually, then uploading the file again.',
            '\n\nThe delete attempt failed with this message:',
            '\n\n  ' + err.message,
          ].join(' ');
        } else if (md5 && !metadata.md5Hash) {
          code = 'MD5_NOT_AVAILABLE';
          message = [
            'MD5 verification was specified, but is not available for the',
            'requested object. MD5 is not available for composite objects.',
          ].join(' ');
        } else {
          code = 'FILE_NO_UPLOAD';
          message = [
            'The uploaded data did not match the data from the server. As a',
            'precaution, the file has been deleted. To be sure the content',
            'is the same, you should try uploading the file again.',
          ].join(' ');
        }

        var error = new Error(message);
        error.code = code;
        error.errors = [err];

        fileWriteStream.destroy(error);
      });

      return;
    }

    stream.uncork();
  });

  return stream;
};

/**
 * @typedef {array} DeleteFileResponse
 * @property {object} 0 The full API response.
 */
/**
 * @callback DeleteFileCallback
 * @param {?Error} err Request error, if any.
 * @param {object} apiResponse The full API response.
 */
/**
 * Delete the file.
 *
 * @see [Objects: delete API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/objects/delete}
 *
 * @param {object} [options] Configuration options.
 * @param {string} [options.userProject] The ID of the project which will be
 *     billed for the request.
 * @param {DeleteFileCallback} [callback] Callback function.
 * @returns {Promise<DeleteFileResponse>}
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var myBucket = storage.bucket('my-bucket');
 *
 * var file = myBucket.file('my-file');
 * file.delete(function(err, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * file.delete().then(function(data) {
 *   var apiResponse = data[0];
 * });
 *
 * @example <caption>include:samples/files.js</caption>
 * region_tag:storage_delete_file
 * Another example:
 */
File.prototype.delete = function(options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = extend({}, this.requestQueryObject, options);

  this.parent.delete.call(this, options, callback);
};

/**
 * @typedef {array} DownloadResponse
 * @property {object} [0] The contents of a File.
 */
/**
 * @callback DownloadCallback
 * @param {?Error} err Request error, if any.
 * @param {buffer} [contents] The contents of a File.
 */
/**
 * Convenience method to download a file into memory or to a local destination.
 *
 * @param {object} [options] Configuration options. The arguments match those
 *     passed to {@link File#createReadStream}.
 * @param {string} [options.destination] Local file path to write the file's
 *     contents to.
 * @param {string} [options.userProject] The ID of the project which will be
 *     billed for the request.
 * @param {DownloadCallback} [callback] Callback function.
 * @returns {Promise<DownloadResponse>}
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var myBucket = storage.bucket('my-bucket');
 *
 * var file = myBucket.file('my-file');
 *
 * //-
 * // Download a file into memory. The contents will be available as the second
 * // argument in the demonstration below, `contents`.
 * //-
 * file.download(function(err, contents) {});
 *
 * //-
 * // Download a file to a local destination.
 * //-
 * file.download({
 *   destination: '/Users/me/Desktop/file-backup.txt'
 * }, function(err) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * file.download().then(function(data) {
 *   var contents = data[0];
 * });
 *
 * @example <caption>include:samples/files.js</caption>
 * region_tag:storage_download_file
 * Another example:
 *
 * @example <caption>include:samples/encryption.js</caption>
 * region_tag:storage_download_encrypted_file
 * Example of downloading an encrypted file:
 *
 * @example <caption>include:samples/requesterPays.js</caption>
 * region_tag:storage_download_file_requester_pays
 * Example of downloading a file where the requester pays:
 */
File.prototype.download = function(options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  callback = once(callback);

  var destination = options.destination;
  delete options.destination;

  var fileStream = this.createReadStream(options);

  if (destination) {
    fileStream
      .on('error', callback)
      .pipe(fs.createWriteStream(destination))
      .on('error', callback)
      .on('finish', callback);
  } else {
    fileStream.on('error', callback).pipe(concat(callback.bind(null, null)));
  }
};

/**
 * @typedef {array} FileExistsResponse
 * @property {boolean} 0 Whether the {@link File} exists.
 */
/**
 * @callback FileExistsCallback
 * @param {?Error} err Request error, if any.
 * @param {boolean} exists Whether the {@link File} exists.
 */
/**
 * Check if the file exists.
 *
 * @param {options} [options] Configuration options.
 * @param {string} [options.userProject] The ID of the project which will be
 *     billed for the request.
 * @param {FileExistsCallback} [callback] Callback function.
 * @returns {Promise<FileExistsResponse>}
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var myBucket = storage.bucket('my-bucket');
 *
 * var file = myBucket.file('my-file');
 *
 * file.exists(function(err, exists) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * file.exists().then(function(data) {
 *   var exists = data[0];
 * });
 */
File.prototype.exists = function(options, callback) {
  this.parent.exists.call(this, options, callback);
};

/**
 * The Storage API allows you to use a custom key for server-side encryption.
 *
 * @see [Customer-supplied Encryption Keys]{@link https://cloud.google.com/storage/docs/encryption#customer-supplied}
 *
 * @param {string|buffer} encryptionKey An AES-256 encryption key.
 * @returns {File}
 *
 * @example
 * var crypto = require('crypto');
 * var storage = require('@google-cloud/storage')();
 * var myBucket = storage.bucket('my-bucket');
 *
 * var encryptionKey = crypto.randomBytes(32);
 *
 * var fileWithCustomEncryption = myBucket.file('my-file');
 * fileWithCustomEncryption.setEncryptionKey(encryptionKey);
 *
 * var fileWithoutCustomEncryption = myBucket.file('my-file');
 *
 * fileWithCustomEncryption.save('data', function(err) {
 *   // Try to download with the File object that hasn't had
 *   // `setEncryptionKey()` called:
 *   fileWithoutCustomEncryption.download(function(err) {
 *     // We will receive an error:
 *     //   err.message === 'Bad Request'
 *
 *     // Try again with the File object we called `setEncryptionKey()` on:
 *     fileWithCustomEncryption.download(function(err, contents) {
 *       // contents.toString() === 'data'
 *     });
 *   });
 * });
 *
 * @example <caption>include:samples/encryption.js</caption>
 * region_tag:storage_upload_encrypted_file
 * Example of uploading an encrypted file:
 *
 * @example <caption>include:samples/encryption.js</caption>
 * region_tag:storage_download_encrypted_file
 * Example of downloading an encrypted file:
 */
File.prototype.setEncryptionKey = function(encryptionKey) {
  var self = this;

  this.encryptionKey = encryptionKey;
  this.encryptionKeyBase64 = Buffer.from(encryptionKey).toString('base64');

  this.encryptionKeyHash = crypto
    .createHash('sha256')
    .update(this.encryptionKeyBase64, 'base64')
    .digest('base64');

  this.interceptors.push({
    request: function(reqOpts) {
      reqOpts.headers = reqOpts.headers || {};
      reqOpts.headers['x-goog-encryption-algorithm'] = 'AES256';
      reqOpts.headers['x-goog-encryption-key'] = self.encryptionKeyBase64;
      reqOpts.headers['x-goog-encryption-key-sha256'] = self.encryptionKeyHash;
      return reqOpts;
    },
  });

  return this;
};

/**
 * @typedef {array} GetFileResponse
 * @property {File} 0 The {@link File}.
 * @property {object} 1 The full API response.
 */
/**
 * @callback GetFileCallback
 * @param {?Error} err Request error, if any.
 * @param {File} file The {@link File}.
 * @param {object} apiResponse The full API response.
 */
/**
 * Get a file object and its metadata if it exists.
 *
 * @param {options} [options] Configuration options.
 * @param {string} [options.userProject] The ID of the project which will be
 *     billed for the request.
 * @param {GetFileCallback} [callback] Callback function.
 * @returns {Promise<GetFileResponse>}
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var myBucket = storage.bucket('my-bucket');
 *
 * var file = myBucket.file('my-file');
 *
 * file.get(function(err, file, apiResponse) {
 *   // file.metadata` has been populated.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * file.get().then(function(data) {
 *   var file = data[0];
 *   var apiResponse = data[1];
 * });
 */
File.prototype.get = function(options, callback) {
  this.parent.get.call(this, options, callback);
};

/**
 * @typedef {array} GetFileMetadataResponse
 * @property {object} 0 The {@link File} metadata.
 * @property {object} 1 The full API response.
 */
/**
 * @callback GetFileMetadataCallback
 * @param {?Error} err Request error, if any.
 * @param {object} metadata The {@link File} metadata.
 * @param {object} apiResponse The full API response.
 */
/**
 * Get the file's metadata.
 *
 * @see [Objects: get API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/objects/get}
 *
 * @param {object} [options] Configuration options.
 * @param {string} [options.userProject] The ID of the project which will be
 *     billed for the request.
 * @param {GetFileMetadataCallback} [callback] Callback function.
 * @returns {Promise<GetFileMetadataResponse>}
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var myBucket = storage.bucket('my-bucket');
 *
 * var file = myBucket.file('my-file');
 *
 * file.getMetadata(function(err, metadata, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * file.getMetadata().then(function(data) {
 *   var metadata = data[0];
 *   var apiResponse = data[1];
 * });
 *
 * @example <caption>include:samples/files.js</caption>
 * region_tag:storage_get_metadata
 * Another example:
 */
File.prototype.getMetadata = function(options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = extend({}, this.requestQueryObject, options);

  this.parent.getMetadata.call(this, options, callback);
};

/**
 * @typedef {array} GetSignedPolicyResponse
 * @property {object} 0 The document policy.
 */
/**
 * @callback GetSignedPolicyCallback
 * @param {?Error} err Request error, if any.
 * @param {object} policy The document policy.
 */
/**
 * Get a signed policy document to allow a user to upload data with a POST
 * request.
 *
 * In Google Cloud Platform environments, such as Cloud Functions and App
 * Engine, you usually don't provide a `keyFilename` or `credentials` during
 * instantiation. In those environments, we call the
 * [signBlob API](https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/signBlob#authorization-scopes)
 * to create a signed policy. That API requires either the
 * `https://www.googleapis.com/auth/iam` or
 * `https://www.googleapis.com/auth/cloud-platform` scope, so be sure they are
 * enabled.
 *
 * @see [Policy Document Reference]{@link https://cloud.google.com/storage/docs/xml-api/post-object#policydocument}
 *
 * @throws {Error} If an expiration timestamp from the past is given.
 * @throws {Error} If options.equals has an array with less or more than two
 *     members.
 * @throws {Error} If options.startsWith has an array with less or more than two
 *     members.
 *
 * @param {object} options Configuration options.
 * @param {array|array[]} [options.equals] Array of request parameters and
 *     their expected value (e.g. [['$<field>', '<value>']]). Values are
 *     translated into equality constraints in the conditions field of the
 *     policy document (e.g. ['eq', '$<field>', '<value>']). If only one
 *     equality condition is to be specified, options.equals can be a one-
 *     dimensional array (e.g. ['$<field>', '<value>']).
 * @param {*} options.expires - A timestamp when this policy will expire. Any
 *     value given is passed to `new Date()`.
 * @param {array|array[]} [options.startsWith] Array of request parameters and
 *     their expected prefixes (e.g. [['$<field>', '<value>']). Values are
 *     translated into starts-with constraints in the conditions field of the
 *     policy document (e.g. ['starts-with', '$<field>', '<value>']). If only
 *     one prefix condition is to be specified, options.startsWith can be a one-
 *     dimensional array (e.g. ['$<field>', '<value>']).
 * @param {string} [options.acl] ACL for the object from possibly predefined
 *     ACLs.
 * @param {string} [options.successRedirect] The URL to which the user client
 *     is redirected if the upload is successful.
 * @param {string} [options.successStatus] - The status of the Google Storage
 *     response if the upload is successful (must be string).
 * @param {object} [options.contentLengthRange]
 * @param {number} [options.contentLengthRange.min] Minimum value for the
 *     request's content length.
 * @param {number} [options.contentLengthRange.max] Maximum value for the
 *     request's content length.
 * @param {GetSignedPolicyCallback} [callback] Callback function.
 * @returns {Promise<GetSignedPolicyResponse>}
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var myBucket = storage.bucket('my-bucket');
 *
 * var file = myBucket.file('my-file');
 * var options = {
 *   equals: ['$Content-Type', 'image/jpeg'],
 *   expires: '10-25-2022',
 *   contentLengthRange: {
 *     min: 0,
 *     max: 1024
 *   }
 * };
 *
 * file.getSignedPolicy(options, function(err, policy) {
 *   // policy.string: the policy document in plain text.
 *   // policy.base64: the policy document in base64.
 *   // policy.signature: the policy signature in base64.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * file.getSignedPolicy(options).then(function(data) {
 *   var policy = data[0];
 * });
 */
File.prototype.getSignedPolicy = function(options, callback) {
  var expires = new Date(options.expires);

  if (expires < Date.now()) {
    throw new Error('An expiration date cannot be in the past.');
  }

  options = extend({}, options);

  var conditions = [
    ['eq', '$key', this.name],
    {
      bucket: this.bucket.name,
    },
  ];

  if (is.array(options.equals)) {
    if (!is.array(options.equals[0])) {
      options.equals = [options.equals];
    }
    options.equals.forEach(function(condition) {
      if (!is.array(condition) || condition.length !== 2) {
        throw new Error('Equals condition must be an array of 2 elements.');
      }
      conditions.push(['eq', condition[0], condition[1]]);
    });
  }

  if (is.array(options.startsWith)) {
    if (!is.array(options.startsWith[0])) {
      options.startsWith = [options.startsWith];
    }
    options.startsWith.forEach(function(condition) {
      if (!is.array(condition) || condition.length !== 2) {
        throw new Error('StartsWith condition must be an array of 2 elements.');
      }
      conditions.push(['starts-with', condition[0], condition[1]]);
    });
  }

  if (options.acl) {
    conditions.push({
      acl: options.acl,
    });
  }

  if (options.successRedirect) {
    conditions.push({
      success_action_redirect: options.successRedirect,
    });
  }

  if (options.successStatus) {
    conditions.push({
      success_action_status: options.successStatus,
    });
  }

  if (options.contentLengthRange) {
    var min = options.contentLengthRange.min;
    var max = options.contentLengthRange.max;
    if (!is.number(min) || !is.number(max)) {
      throw new Error('ContentLengthRange must have numeric min & max fields.');
    }
    conditions.push(['content-length-range', min, max]);
  }

  var policy = {
    expiration: expires.toISOString(),
    conditions: conditions,
  };

  var policyString = JSON.stringify(policy);
  var policyBase64 = Buffer.from(policyString).toString('base64');

  this.storage.authClient.sign(policyBase64, function(err, signature) {
    if (err) {
      callback(new SigningError(err.message));
      return;
    }

    callback(null, {
      string: policyString,
      base64: policyBase64,
      signature: signature,
    });
  });
};

/**
 * @typedef {array} GetSignedUrlResponse
 * @property {object} 0 The signed URL.
 */
/**
 * @callback GetSignedUrlCallback
 * @param {?Error} err Request error, if any.
 * @param {object} url The signed URL.
 */
/**
 * Get a signed URL to allow limited time access to the file.
 *
 * In Google Cloud Platform environments, such as Cloud Functions and App
 * Engine, you usually don't provide a `keyFilename` or `credentials` during
 * instantiation. In those environments, we call the
 * [signBlob API](https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/signBlob#authorization-scopes)
 * to create a signed URL. That API requires either the
 * `https://www.googleapis.com/auth/iam` or
 * `https://www.googleapis.com/auth/cloud-platform` scope, so be sure they are
 * enabled.
 *
 * @see [Signed URLs Reference]{@link https://cloud.google.com/storage/docs/access-control/signed-urls}
 *
 * @throws {Error} if an expiration timestamp from the past is given.
 *
 * @param {object} config Configuration object.
 * @param {string} config.action "read" (HTTP: GET), "write" (HTTP: PUT), or
 *     "delete" (HTTP: DELETE), "resumable" (HTTP: POST).
 * @param {string} [config.cname] The cname for this bucket, i.e.,
 *     "https://cdn.example.com".
 * @param {string} [config.contentMd5] The MD5 digest value in base64. If you
 *     provide this, the client must provide this HTTP header with this same
 *     value in its request.
 * @param {string} [config.contentType] If you provide this value, the client
 *     must provide this HTTP header set to the same value.
 * @param {*} config.expires A timestamp when this link will expire. Any value
 *     given is passed to `new Date()`.
 * @param {object} [config.extensionHeaders] If these headers are used, the
 *     server will check to make sure that the client provides matching values.
 *     See [Canonical extension headers](https://cloud.google.com/storage/docs/access-control/signed-urls#about-canonical-extension-headers)
 *     for the requirements of this feature, most notably:
 *       - The header name must be prefixed with `x-goog-`
 *       - The header name must be all lowercase
 * @param {string} [config.promptSaveAs] The filename to prompt the user to
 *     save the file as when the signed url is accessed. This is ignored if
 *     `config.responseDisposition` is set.
 * @param {string} [config.responseDisposition] The
 *     [response-content-disposition parameter](http://goo.gl/yMWxQV) of the
 *     signed url.
 * @param {string} [config.responseType] The response-content-type parameter
 *     of the signed url.
 * @param {GetSignedUrlCallback} [callback] Callback function.
 * @returns {Promise<GetSignedUrlResponse>}
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var myBucket = storage.bucket('my-bucket');
 *
 * var file = myBucket.file('my-file');
 *
 * //-
 * // Generate a URL that allows temporary access to download your file.
 * //-
 * var request = require('request');
 *
 * var config = {
 *   action: 'read',
 *   expires: '03-17-2025'
 * };
 *
 * file.getSignedUrl(config, function(err, url) {
 *   if (err) {
 *     console.error(err);
 *     return;
 *   }
 *
 *   // The file is now available to read from this URL.
 *   request(url, function(err, resp) {
 *     // resp.statusCode = 200
 *   });
 * });
 *
 * //-
 * // Generate a URL to allow write permissions. This means anyone with this URL
 * // can send a POST request with new data that will overwrite the file.
 * //-
 * file.getSignedUrl({
 *   action: 'write',
 *   expires: '03-17-2025'
 * }, function(err, url) {
 *   if (err) {
 *     console.error(err);
 *     return;
 *   }
 *
 *   // The file is now available to be written to.
 *   var writeStream = request.put(url);
 *   writeStream.end('New data');
 *
 *   writeStream.on('complete', function(resp) {
 *     // Confirm the new content was saved.
 *     file.download(function(err, fileContents) {
 *       console.log('Contents:', fileContents.toString());
 *       // Contents: New data
 *     });
 *   });
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * file.getSignedUrl(config).then(function(data) {
 *   var url = data[0];
 * });
 *
 * @example <caption>include:samples/files.js</caption>
 * region_tag:storage_generate_signed_url
 * Another example:
 */
File.prototype.getSignedUrl = function(config, callback) {
  var self = this;
  var expires = new Date(config.expires);
  var expiresInSeconds = Math.round(expires / 1000); // The API expects seconds.

  if (expires < Date.now()) {
    throw new Error('An expiration date cannot be in the past.');
  }

  config = extend({}, config);

  config.action = {
    read: 'GET',
    write: 'PUT',
    delete: 'DELETE',
    resumable: 'POST',
  }[config.action];

  var name = encodeURIComponent(this.name);
  var host = config.cname || STORAGE_DOWNLOAD_BASE_URL + '/' + self.bucket.name;
  config.resource = '/' + this.bucket.name + '/' + name;

  var extensionHeadersString = '';

  if (config.action === 'POST') {
    config.extensionHeaders = extend({}, config.extensionHeaders, {
      'x-goog-resumable': 'start',
    });
  }

  if (config.extensionHeaders) {
    for (var headerName in config.extensionHeaders) {
      extensionHeadersString += format('{name}:{value}\n', {
        name: headerName,
        value: config.extensionHeaders[headerName],
      });
    }
  }

  var blobToSign = [
    config.action,
    config.contentMd5 || '',
    config.contentType || '',
    expiresInSeconds,
    extensionHeadersString + config.resource,
  ].join('\n');

  var authClient = this.storage.authClient;

  authClient.sign(blobToSign, function(err, signature) {
    if (err) {
      callback(new SigningError(err.message));
      return;
    }

    var responseContentType;
    if (is.string(config.responseType)) {
      responseContentType =
        '&response-content-type=' + encodeURIComponent(config.responseType);
    }

    var responseContentDisposition;
    if (is.string(config.promptSaveAs)) {
      responseContentDisposition =
        '&response-content-disposition=attachment; filename="' +
        encodeURIComponent(config.promptSaveAs) +
        '"';
    }
    if (is.string(config.responseDisposition)) {
      responseContentDisposition =
        '&response-content-disposition=' +
        encodeURIComponent(config.responseDisposition);
    }

    var signedUrl = format('{host}/{name}{id}{exp}{sig}{type}{disp}{gen}', {
      host: host.replace(/[/]*$/, ''), // Remove trailing slashes.
      name: name,
      id: '?GoogleAccessId=' + authClient.credentials.client_email,
      exp: '&Expires=' + expiresInSeconds,
      sig: '&Signature=' + encodeURIComponent(signature),
      type: responseContentType || '',
      disp: responseContentDisposition || '',
      gen: self.generation ? '&generation=' + self.generation : '',
    });

    callback(null, signedUrl);
  });
};

/**
 * @typedef {array} MakeFilePrivateResponse
 * @property {object} 0 The full API response.
 */
/**
 * @callback MakeFilePrivateCallback
 * @param {?Error} err Request error, if any.
 * @param {object} apiResponse The full API response.
 */
/**
 * Make a file private to the project and remove all other permissions.
 * Set `options.strict` to true to make the file private to only the owner.
 *
 * @see [Objects: patch API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/objects/patch}
 *
 * @param {object} [options] Configuration options.
 * @param {boolean} [options.strict] If true, set the file to be private to
 *     only the owner user. Otherwise, it will be private to the project.
 * @param {string} [options.userProject] The ID of the project which will be
 *     billed for the request.
 * @param {MakeFilePrivateCallback} [callback] Callback function.
 * @returns {Promise<MakeFilePrivateResponse>}
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var myBucket = storage.bucket('my-bucket');
 *
 * var file = myBucket.file('my-file');
 *
 * //-
 * // Set the file private so only project maintainers can see and modify it.
 * //-
 * file.makePrivate(function(err) {});
 *
 * //-
 * // Set the file private so only the owner can see and modify it.
 * //-
 * file.makePrivate({ strict: true }, function(err) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * file.makePrivate().then(function(data) {
 *   var apiResponse = data[0];
 * });
 */
File.prototype.makePrivate = function(options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  var query = {
    predefinedAcl: options.strict ? 'private' : 'projectPrivate',
  };

  if (options.userProject) {
    query.userProject = options.userProject;
  }

  this.setMetadata(
    {
      // You aren't allowed to set both predefinedAcl & acl properties on a file,
      // so acl must explicitly be nullified, destroying all previous acls on the
      // file.
      acl: null,
    },
    query,
    callback
  );
};

/**
 * @typedef {array} MakeFilePublicResponse
 * @property {object} 0 The full API response.
 */
/**
 * @callback MakeFilePublicCallback
 * @param {?Error} err Request error, if any.
 * @param {object} apiResponse The full API response.
 */
/**
 * Set a file to be publicly readable and maintain all previous permissions.
 *
 * @see [ObjectAccessControls: insert API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/objectAccessControls/insert}
 *
 * @param {MakeFilePublicCallback} [callback] Callback function.
 * @returns {Promise<MakeFilePublicResponse>}
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var myBucket = storage.bucket('my-bucket');
 *
 * var file = myBucket.file('my-file');
 *
 * file.makePublic(function(err, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * file.makePublic().then(function(data) {
 *   var apiResponse = data[0];
 * });
 *
 * @example <caption>include:samples/files.js</caption>
 * region_tag:storage_make_public
 * Another example:
 */
File.prototype.makePublic = function(callback) {
  callback = callback || common.util.noop;

  this.acl.add(
    {
      entity: 'allUsers',
      role: 'READER',
    },
    function(err, resp) {
      callback(err, resp);
    }
  );
};

/**
 * @typedef {array} MoveResponse
 * @property {File} 0 The destination File.
 * @property {object} 1 The full API response.
 */
/**
 * @callback MoveCallback
 * @param {?Error} err Request error, if any.
 * @param {File} destinationFile The destination File.
 * @param {object} apiResponse The full API response.
 */
/**
 * Move this file to another location. By default, this will rename the file
 * and keep it in the same bucket, but you can choose to move it to another
 * Bucket by providing a Bucket or File object or a URL beginning with "gs://".
 *
 * **Warning**:
 * There is currently no atomic `move` method in the Cloud Storage API,
 * so this method is a composition of {@link File#copy} (to the new
 * location) and {@link File#delete} (from the old location). While
 * unlikely, it is possible that an error returned to your callback could be
 * triggered from either one of these API calls failing, which could leave a
 * duplicate file lingering.
 *
 * @see [Objects: copy API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/objects/copy}
 *
 * @throws {Error} If the destination file is not provided.
 *
 * @param {string|Bucket|File} destination Destination file.
 * @param {object} [options] Configuration options. See an
 *     [Object resource](https://cloud.google.com/storage/docs/json_api/v1/objects#resource).
 * @param {string} [options.userProject] The ID of the project which will be
 *     billed for the request.
 * @param {MoveCallback} [callback] Callback function.
 * @returns {Promise<MoveResponse>}
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * //-
 * // You can pass in a variety of types for the destination.
 * //
 * // For all of the below examples, assume we are working with the following
 * // Bucket and File objects.
 * //-
 * var bucket = storage.bucket('my-bucket');
 * var file = bucket.file('my-image.png');
 *
 * //-
 * // If you pass in a string for the destination, the file is moved to its
 * // current bucket, under the new name provided.
 * //-
 * file.move('my-image-new.png', function(err, destinationFile, apiResponse) {
 *   // `my-bucket` no longer contains:
 *   // - "my-image.png"
 *   // but contains instead:
 *   // - "my-image-new.png"
 *
 *   // `destinationFile` is an instance of a File object that refers to your
 *   // new file.
 * });
 *
 * //-
 * // If you pass in a string starting with "gs://" for the destination, the
 * // file is copied to the other bucket and under the new name provided.
 * //-
 * var newLocation = 'gs://another-bucket/my-image-new.png';
 * file.move(newLocation, function(err, destinationFile, apiResponse) {
 *   // `my-bucket` no longer contains:
 *   // - "my-image.png"
 *   //
 *   // `another-bucket` now contains:
 *   // - "my-image-new.png"
 *
 *   // `destinationFile` is an instance of a File object that refers to your
 *   // new file.
 * });
 *
 * //-
 * // If you pass in a Bucket object, the file will be moved to that bucket
 * // using the same name.
 * //-
 * var anotherBucket = gcs.bucket('another-bucket');
 *
 * file.move(anotherBucket, function(err, destinationFile, apiResponse) {
 *   // `my-bucket` no longer contains:
 *   // - "my-image.png"
 *   //
 *   // `another-bucket` now contains:
 *   // - "my-image.png"
 *
 *   // `destinationFile` is an instance of a File object that refers to your
 *   // new file.
 * });
 *
 * //-
 * // If you pass in a File object, you have complete control over the new
 * // bucket and filename.
 * //-
 * var anotherFile = anotherBucket.file('my-awesome-image.png');
 *
 * file.move(anotherFile, function(err, destinationFile, apiResponse) {
 *   // `my-bucket` no longer contains:
 *   // - "my-image.png"
 *   //
 *   // `another-bucket` now contains:
 *   // - "my-awesome-image.png"
 *
 *   // Note:
 *   // The `destinationFile` parameter is equal to `anotherFile`.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * file.move('my-image-new.png').then(function(data) {
 *   var destinationFile = data[0];
 *   var apiResponse = data[1];
 * });
 *
 * @example <caption>include:samples/files.js</caption>
 * region_tag:storage_move_file
 * Another example:
 */
File.prototype.move = function(destination, options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  callback = callback || common.util.noop;

  this.copy(destination, options, function(err, destinationFile, apiResponse) {
    if (err) {
      callback(err, null, apiResponse);
      return;
    }

    self.delete(options, function(err, apiResponse) {
      callback(err, destinationFile, apiResponse);
    });
  });
};

/**
 * Makes request and applies userProject query parameter if necessary.
 *
 * @private
 *
 * @param {object} reqOpts - The request options.
 * @param {function} callback - The callback function.
 */
File.prototype.request = function(reqOpts, callback) {
  if (this.userProject && (!reqOpts.qs || !reqOpts.qs.userProject)) {
    reqOpts.qs = extend(reqOpts.qs, {userProject: this.userProject});
  }

  return common.ServiceObject.prototype.request.call(this, reqOpts, callback);
};

/**
 * The Storage API allows you to use a custom key for server-side encryption.
 * This method allows you to update the encryption key associated with this
 * file.
 *
 * @see [Customer-supplied Encryption Keys]{@link https://cloud.google.com/storage/docs/encryption#customer-supplied}
 *
 * @param {string|buffer} encryptionKey An AES-256 encryption key.
 * @returns {File}
 *
 * @example <caption>include:samples/encryption.js</caption>
 * region_tag:storage_rotate_encryption_key
 * Example of rotating the encryption key for this file:
 */
File.prototype.rotateEncryptionKey = function(encryptionKey, callback) {
  var newFile = this.bucket.file(this.id, {encryptionKey});

  this.copy(newFile, callback);
};

/**
 * @callback SaveCallback
 * @param {?Error} err Request error, if any.
 */
/**
 * Write arbitrary data to a file.
 *
 * *This is a convenience method which wraps {@link File#createWriteStream}.*
 *
 * @param {*} data The data to write to a file.
 * @param {object} [options] See {@link File#createWriteStream}'s `options`
 *     parameter.
 * @param {SaveCallback} [callback] Callback function.
 * @returns {Promise}
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var myBucket = storage.bucket('my-bucket');
 *
 * var file = myBucket.file('my-file');
 * var contents = 'This is the contents of the file.';
 *
 * file.save(contents, function(err) {
 *   if (!err) {
 *     // File written successfully.
 *   }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * file.save(contents).then(function() {});
 */
File.prototype.save = function(data, options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  this.createWriteStream(options)
    .on('error', callback)
    .on('finish', callback)
    .end(data);
};

/**
 * @typedef {array} SetFileMetadataResponse
 * @property {object} 0 The full API response.
 */
/**
 * @callback SetFileMetadataCallback
 * @param {?Error} err Request error, if any.
 * @param {object} apiResponse The full API response.
 */
/**
 * Merge the given metadata with the current remote file's metadata. This
 * will set metadata if it was previously unset or update previously set
 * metadata. To unset previously set metadata, set its value to null.
 *
 * You can set custom key/value pairs in the metadata key of the given
 * object, however the other properties outside of this object must adhere
 * to the [official API documentation](https://goo.gl/BOnnCK).
 *
 * See the examples below for more information.
 *
 * @see [Objects: patch API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/objects/patch}
 *
 * @param {object} [metadata] The metadata you wish to update.
 * @param {object} [options] Configuration options.
 * @param {string} [options.userProject] The ID of the project which will be
 *     billed for the request.
 * @param {SetFileMetadataCallback} [callback] Callback function.
 * @returns {Promise<SetFileMetadataResponse>}
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var myBucket = storage.bucket('my-bucket');
 *
 * var file = myBucket.file('my-file');
 *
 * var metadata = {
 *   contentType: 'application/x-font-ttf',
 *   metadata: {
 *     my: 'custom',
 *     properties: 'go here'
 *   }
 * };
 *
 * file.setMetadata(metadata, function(err, apiResponse) {});
 *
 * // Assuming current metadata = { hello: 'world', unsetMe: 'will do' }
 * file.setMetadata({
 *   metadata: {
 *     abc: '123', // will be set.
 *     unsetMe: null, // will be unset (deleted).
 *     hello: 'goodbye' // will be updated from 'hello' to 'goodbye'.
 *   }
 * }, function(err, apiResponse) {
 *   // metadata should now be { abc: '123', hello: 'goodbye' }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * file.setMetadata(metadata).then(function(data) {
 *   var apiResponse = data[0];
 * });
 */
File.prototype.setMetadata = function(metadata, options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = extend({}, this.requestQueryObject, options);

  this.parent.setMetadata.call(this, metadata, options, callback);
};

/**
 * @typedef {array} SetStorageClassResponse
 * @property {object} 0 The full API response.
 */
/**
 * @callback SetStorageClassCallback
 * @param {?Error} err Request error, if any.
 * @param {object} apiResponse The full API response.
 */
/**
 * Set the storage class for this file.
 *
 * @see [Per-Object Storage Class]{@link https://cloud.google.com/storage/docs/per-object-storage-class}
 * @see [Storage Classes]{@link https://cloud.google.com/storage/docs/storage-classes}
 *
 * @param {string} storageClass The new storage class. (`multi_regional`,
 *     `regional`, `nearline`, `coldline`)
 * @param {object} [options] Configuration options.
 * @param {string} [options.userProject] The ID of the project which will be
 *     billed for the request.
 * @param {SetStorageClassCallback} [callback] Callback function.
 * @returns {Promise<SetStorageClassResponse>}
 *
 * @example
 * file.setStorageClass('regional', function(err, apiResponse) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // The storage class was updated successfully.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * file.setStorageClass('regional').then(function() {});
 */
File.prototype.setStorageClass = function(storageClass, options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = extend(true, {}, options);

  // In case we get input like `storageClass`, convert to `storage_class`.
  options.storageClass = storageClass
    .replace(/-/g, '_')
    .replace(/([a-z])([A-Z])/g, function(_, low, up) {
      return low + '_' + up;
    })
    .toUpperCase();

  this.copy(this, options, function(err, file, apiResponse) {
    if (err) {
      callback(err, apiResponse);
      return;
    }

    self.metadata = file.metadata;

    callback(null, apiResponse);
  });
};

/**
 * Set a user project to be billed for all requests made from this File object.
 *
 * @param {string} userProject The user project.
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var bucket = storage.bucket('albums');
 * var file = bucket.file('my-file');
 *
 * file.setUserProject('grape-spaceship-123');
 */
File.prototype.setUserProject = function(userProject) {
  this.userProject = userProject;
};

/**
 * This creates a gcs-resumable-upload upload stream.
 *
 * @see [gcs-resumable-upload]{@link https://github.com/stephenplusplus/gcs-resumable-upload}
 *
 * @param {Duplexify} stream - Duplexify stream of data to pipe to the file.
 * @param {object=} options - Configuration object.
 *
 * @private
 */
File.prototype.startResumableUpload_ = function(dup, options) {
  var self = this;

  options = extend(
    {
      metadata: {},
    },
    options
  );

  var uploadStream = resumableUpload({
    authClient: this.storage.authClient,
    bucket: this.bucket.name,
    file: this.name,
    generation: this.generation,
    key: this.encryptionKey,
    metadata: options.metadata,
    offset: options.offset,
    predefinedAcl: options.predefinedAcl,
    private: options.private,
    public: options.public,
    uri: options.uri,
    userProject: options.userProject,
  });

  uploadStream
    .on('response', function(resp) {
      dup.emit('response', resp);
    })
    .on('metadata', function(metadata) {
      self.metadata = metadata;
    })
    .on('finish', function() {
      dup.emit('complete');
    });

  dup.setWritable(uploadStream);
};

/**
 * Takes a readable stream and pipes it to a remote file. Unlike
 * `startResumableUpload_`, which uses the resumable upload technique, this
 * method uses a simple upload (all or nothing).
 *
 * @param {Duplexify} dup - Duplexify stream of data to pipe to the file.
 * @param {object=} options - Configuration object.
 *
 * @private
 */
File.prototype.startSimpleUpload_ = function(dup, options) {
  var self = this;

  options = extend(
    {
      metadata: {},
    },
    options
  );

  var reqOpts = {
    qs: {
      name: self.name,
    },
    uri: format('{uploadBaseUrl}/{bucket}/o', {
      uploadBaseUrl: STORAGE_UPLOAD_BASE_URL,
      bucket: self.bucket.name,
    }),
  };

  if (is.defined(this.generation)) {
    reqOpts.qs.ifGenerationMatch = this.generation;
  }

  if (options.userProject) {
    reqOpts.qs.userProject = options.userProject;
  }

  if (options.predefinedAcl) {
    reqOpts.qs.predefinedAcl = options.predefinedAcl;
  } else if (options.private) {
    reqOpts.qs.predefinedAcl = 'private';
  } else if (options.public) {
    reqOpts.qs.predefinedAcl = 'publicRead';
  }

  common.util.makeWritableStream(dup, {
    makeAuthenticatedRequest: function(reqOpts) {
      self.request(reqOpts, function(err, body, resp) {
        if (err) {
          dup.destroy(err);
          return;
        }

        self.metadata = body;
        dup.emit('response', resp);
        dup.emit('complete');
      });
    },
    metadata: options.metadata,
    request: reqOpts,
  });
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(File, {
  exclude: ['setEncryptionKey'],
});

/**
 * Reference to the {@link File} class.
 * @name module:@google-cloud/storage.File
 * @see File
 */
module.exports = File;
