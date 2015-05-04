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

/*!
 * @module storage/file
 */

'use strict';

var bufferEqual = require('buffer-equal');
var ConfigStore = require('configstore');
var crc = require('sse4_crc32');
var crypto = require('crypto');
var duplexify = require('duplexify');
var fs = require('fs');
var once = require('once');
var request = require('request');
var streamEvents = require('stream-events');
var through = require('through2');

/**
 * @type {module:storage/acl}
 * @private
 */
var Acl = require('./acl.js');

/**
 * @type {module:common/util}
 * @private
 */
var util = require('../common/util.js');

/**
 * @const {string}
 * @private
 */
var STORAGE_UPLOAD_BASE_URL = 'https://www.googleapis.com/upload/storage/v1/b';

/*! Developer Documentation
 *
 * @param {module:storage/bucket} bucket - The Bucket instance this file is
 *     attached to.
 * @param {string} name - The name of the remote file.
 * @param {object=} options - Configuration object.
 * @param {number} options.generation - Generation to scope the file to.
 */
/**
 * A File object is created from your Bucket object using
 * {module:storage/bucket#file}.
 *
 * @alias module:storage/file
 * @constructor
 */
function File(bucket, name, options) {
  if (!name) {
    throw Error('A file name must be specified.');
  }

  options = options || {};

  this.bucket = bucket;
  this.generation = parseInt(options.generation, 10);
  this.makeReq_ = bucket.makeReq_.bind(bucket);
  this.metadata = {};

  Object.defineProperty(this, 'name', {
    enumerable: true,
    value: name
  });

  /**
   * Google Cloud Storage uses access control lists (ACLs) to manage object and
   * bucket access. ACLs are the mechanism you use to share objects with other
   * users and allow other users to access your buckets and objects.
   *
   * An ACL consists of one or more entries, where each entry grants permissions
   * to a scope. Permissions define the actions that can be performed against an
   * object or bucket (for example, `READ` or `WRITE`); the scope defines who
   * the permission applies to (for example, a specific user or group of users).
   *
   * For more detailed information, see
   * [About Access Control Lists](http://goo.gl/6qBBPO).
   *
   * The `acl` object on a File instance provides methods to get you a list of
   * the ACLs defined on your bucket, as well as set, update, and delete them.
   *
   * @mixes module:storage/acl
   *
   * @example
   * //-
   * // Make a file publicly readable.
   * //-
   * myFile.acl.add({
   *   scope: 'allUsers',
   *   permission: storage.acl.READER_ROLE
   * }, function(err, aclObject) {});
   */
  this.acl = new Acl({
    makeReq: this.makeReq_,
    pathPrefix: '/o/' + encodeURIComponent(this.name) + '/acl'
  });
}

/**
 * Copy this file to another file. By default, this will copy the file to the
 * same bucket, but you can choose to copy it to another Bucket by providing
 * either a Bucket or File object.
 *
 * @throws {Error} If the destination file is not provided.
 *
 * @param {string|module:storage/bucket|module:storage/file} destination -
 *     Destination file.
 * @param {function=} callback - The callback function.
 *
 * @example
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
 */
File.prototype.copy = function(destination, callback) {
  var noDestinationError = new Error('Destination file should have a name.');

  if (!destination) {
    throw noDestinationError;
  }

  callback = callback || util.noop;

  var destBucket;
  var destName;
  var newFile;

  if (util.is(destination, 'string')) {
    destBucket = this.bucket;
    destName = destination;
  } else if (destination.constructor &&
        destination.constructor.name === 'Bucket') {
    destBucket = destination;
    destName = this.name;
  } else if (destination instanceof File) {
    destBucket = destination.bucket;
    destName = destination.name;
    newFile = destination;
  } else {
    throw noDestinationError;
  }

  var path = util.format('/o/{srcName}/copyTo/b/{destBucket}/o/{destName}', {
    srcName: encodeURIComponent(this.name),
    destBucket: destBucket.name,
    destName: encodeURIComponent(destName)
  });

  var query = {};

  if (this.generation) {
    query.sourceGeneration = this.generation;
  }

  this.makeReq_('POST', path, query, null, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    callback(null, newFile || destBucket.file(destName), resp);
  });
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
 * NOTE: Readable streams will emit the `complete` event when the file is fully
 * downloaded.
 *
 * @param {object=} options - Configuration object.
 * @param {string|boolean} options.validation - Possible values: `"md5"`,
 *     `"crc32c"`, or `false`. By default, data integrity is validated with an
 *     MD5 checksum for maximum reliability, falling back to CRC32c when an MD5
 *     hash wasn't returned from the API. CRC32c will provide better performance
 *     with less reliability. You may also choose to skip validation completely,
 *     however this is **not recommended**.
 * @param {number} options.start - A byte offset to begin the file's download
 *     from. Default is 0. NOTE: Byte ranges are inclusive; that is,
 *     `options.start = 0` and `options.end = 999` represent the first 1000
 *     bytes in a file or object. NOTE: when specifying a byte range, data
 *     integrity is not available.
 * @param {number} options.end - A byte offset to stop reading the file at.
 *     NOTE: Byte ranges are inclusive; that is, `options.start = 0` and
 *     `options.end = 999` represent the first 1000 bytes in a file or object.
 *     NOTE: when specifying a byte range, data integrity is not available.
 *
 * @example
 * //-
 * // <h4>Downloading a File</h4>
 * //
 * // The example below demonstrates how we can reference a remote file, then
 * // pipe its contents to a local file. This is effectively creating a local
 * // backup of your remote data.
 * //-
 * var fs = require('fs');
 * var image = myBucket.file('image.png');
 *
 * image.createReadStream()
 *   .pipe(fs.createWriteStream('/Users/stephen/Photos/image.png'))
 *   .on('error', function(err) {})
 *   .on('complete', function() {
 *     // The file is fully downloaded.
 *   });
 *
 * //-
 * // To limit the downloaded data to only a byte range, pass an options object.
 * //-
 * var logFile = myBucket.file('access_log');
 * logFile.createReadStream({
 *     start: 10000,
 *     end: 20000
 *   })
 *   .pipe(fs.createWriteStream('/Users/stephen/logfile.txt'))
 *   .on('error', function(err) {});
 */
File.prototype.createReadStream = function(options) {
  options = options || {};

  var that = this;
  var rangeRequest =
    util.is(options.start, 'number') || util.is(options.end, 'number');
  var throughStream = streamEvents(through());

  var validations = ['crc32c', 'md5'];
  var validation;

  if (util.is(options.validation, 'string')) {
    options.validation = options.validation.toLowerCase();

    if (validations.indexOf(options.validation) > -1) {
      validation = options.validation;
    } else {
      validation = 'all';
    }
  }

  if (util.is(options.validation, 'undefined')) {
    validation = 'all';
  }

  if (rangeRequest) {
    validation = false;
  }

  var crc32c = validation === 'crc32c' || validation === 'all';
  var md5 = validation === 'md5' || validation === 'all';

  var remoteFilePath = util.format('https://{b}.storage.googleapis.com/{o}', {
    b: this.bucket.name,
    o: encodeURIComponent(this.name)
  });

  createAuthorizedReq(remoteFilePath);

  return throughStream;

  // Authenticate the request, then pipe the remote API request to the stream
  // returned to the user.
  function createAuthorizedReq(uri) {
    var reqOpts = {
      uri: uri
    };

    if (that.generation) {
      reqOpts.qs = {
        generation: that.generation
      };
    }

    if (rangeRequest) {
      var start = util.is(options.start, 'number') ? options.start : '0';
      var end = util.is(options.end, 'number') ? options.end : '';
      reqOpts.headers = {
        Range: 'bytes=' + start + '-' + end
      };
    }

    that.bucket.storage.makeAuthorizedRequest_(reqOpts, {
      onAuthorized: function(err, authorizedReqOpts) {
        if (err) {
          done(err, null);
          return;
        }

        // For data integrity, hash the contents of the stream as we receive it
        // from the server.
        var localCrcHash;
        var localMd5Hash = crypto.createHash('md5');

        request(authorizedReqOpts)
          .on('error', done)

          .on('data', function(chunk) {
            if (crc32c) {
              localCrcHash = crc.calculate(chunk, localCrcHash);
            }

            if (md5) {
              localMd5Hash.update(chunk);
            }
          })

          .on('complete', function(res) {
            util.handleResp(null, res, res.body, function(err, resp) {
              if (err) {
                done(err, resp);
                return;
              }

              if (rangeRequest) {
                // Range requests can't receive data integrity checks.
                done(null, resp);
                return;
              }

              var failed = false;
              var crcFail = true;
              var md5Fail = true;

              var hashes = {};
              res.headers['x-goog-hash'].split(',').forEach(function(hash) {
                var hashType = hash.split('=')[0];
                hashes[hashType] = hash.substr(hash.indexOf('=') + 1);
              });

              var remoteMd5 = hashes.md5;
              var remoteCrc = hashes.crc32c && hashes.crc32c.substr(4);

              if (crc32c) {
                crcFail =
                  new Buffer([localCrcHash]).toString('base64') !== remoteCrc;
                failed = crcFail;
              }

              if (md5) {
                md5Fail = localMd5Hash.digest('base64') !== remoteMd5;
                failed = md5Fail;
              }

              if (validation === 'all') {
                failed = remoteMd5 ? md5Fail : crcFail;
              }

              if (failed) {
                var mismatchError = new Error([
                  'The downloaded data did not match the data from the server.',
                  'To be sure the content is the same, you should download the',
                  'file again.'
                ].join(' '));
                mismatchError.code = 'CONTENT_DOWNLOAD_MISMATCH';

                done(mismatchError, resp);
              } else {
                done(null, resp);
              }
            });
          })

          .pipe(throughStream);
      }
    });
  }

  // End the stream, first emitting an error or complete event.
  function done(err) {
    if (err) {
      throughStream.emit('error', err);
    } else {
      throughStream.emit('complete');
    }

    throughStream.end();
  }
};

/**
 * Create a writable stream to overwrite the contents of the file in your
 * bucket.
 *
 * A File object can also be used to create files for the first time.
 *
 * NOTE: Writable streams will emit the `complete` event when the file is fully
 * uploaded.
 *
 * @param {object=} options - Configuration object.
 * @param {object=} options.metadata - Set the metadata for this file.
 * @param {boolean=} options.resumable - Force a resumable upload. NOTE: When
 *     working with streams, the file format and size is unknown until it's
 *     completely consumed. Because of this, it's best for you to be explicit
 *     for what makes sense given your input. Read more about resumable uploads
 *     [here](http://goo.gl/1JWqCF).
 * @param {string|boolean} options.validation - Possible values: `"md5"`,
 *     `"crc32c"`, or `false`. By default, data integrity is validated with an
 *     MD5 checksum for maximum reliability. CRC32c will provide better
 *     performance with less reliability. You may also choose to skip validation
 *     completely, however this is **not recommended**.
 *
 * @example
 * //-
 * // <h4>Uploading a File</h4>
 * //
 * // Now, consider a case where we want to upload a file to your bucket. You
 * // have the option of using {module:storage/bucket#upload}, but that is just
 * // a convenience method which will do the following.
 * //-
 * var fs = require('fs');
 * var image = myBucket.file('image.png');
 *
 * fs.createReadStream('/Users/stephen/Photos/birthday-at-the-zoo/panda.jpg')
 *   .pipe(image.createWriteStream())
 *   .on('error', function(err) {})
 *   .on('complete', function(metadata) {
 *     // The file upload is complete.
 *   });
 *
 * //-
 * // <h4>Uploading a File with Metadata</h4>
 * //
 * // One last case you may run into is when you want to upload a file to your
 * // bucket and set its metadata at the same time. Like above, you can use
 * // {module:storage/bucket#upload} to do this, which is just a wrapper around
 * // the following.
 * //-
 * var fs = require('fs');
 * var image = myBucket.file('image.png');
 *
 * fs.createReadStream('/Users/stephen/Photos/birthday-at-the-zoo/panda.jpg')
 *   .pipe(image.createWriteStream({
 *     metadata: {
 *       contentType: 'image/jpeg',
 *       metadata: {
 *         custom: 'metadata'
 *       }
 *     }
 *   }))
 *   .on('error', function(err) {});
 */
File.prototype.createWriteStream = function(options) {
  options = options || {};

  var that = this;
  var metadata = options.metadata || {};
  var validations = ['crc32c', 'md5'];
  var validation;

  if (util.is(options.validation, 'string')) {
    options.validation = options.validation.toLowerCase();

    if (validations.indexOf(options.validation) > -1) {
      validation = options.validation;
    } else {
      validation = 'all';
    }
  }

  if (util.is(options.validation, 'undefined')) {
    validation = 'all';
  }

  var crc32c = validation === 'crc32c' || validation === 'all';
  var md5 = validation === 'md5' || validation === 'all';

  // Collect data as it comes in to store in a hash. This is compared to the
  // checksum value on the returned metadata from the API.
  var localCrc32cHash;
  var localMd5Hash = crypto.createHash('md5');

  var dup = streamEvents(duplexify());

  var throughStream = through(function(chunk, enc, next) {
    if (crc32c) {
      localCrc32cHash = crc.calculate(chunk, localCrc32cHash);
    }

    if (md5) {
      localMd5Hash.update(chunk);
    }

    this.push(chunk);
    next();
  });

  throughStream
    .on('end', function() {
      if (crc32c) {
        localCrc32cHash = new Buffer([localCrc32cHash]).toString('base64');
      }

      if (md5) {
        localMd5Hash = localMd5Hash.digest('base64');
      }
    })

    .pipe(dup)

    // Wait until we've received data to determine what upload technique to use.
    .once('writing', function() {
      if (util.is(options.resumable, 'boolean') && !options.resumable) {
        that.startSimpleUpload_(dup, metadata);
      } else {
        that.startResumableUpload_(dup, metadata);
      }
    })

    // Catch any errors from the writable stream and patch them upstream.
    .on('error', function(err) {
      throughStream.emit('error', err);
      throughStream.end();
    })

    // Compare our hashed version vs the completed upload's version.
    .on('complete', function(metadata) {
      var failed = false;

      // We must remove the first four bytes from the returned checksum.
      // http://stackoverflow.com/questions/25096737/
      //   base64-encoding-of-crc32c-long-value

      if (validation === 'all') {
        if (metadata.md5Hash) {
          failed = localMd5Hash !== metadata.md5Hash;
        } else if (metadata.crc32c) {
          failed = localCrc32cHash !== metadata.crc32c.substr(4);
        }
      } else if (md5) {
        failed = localMd5Hash !== metadata.md5Hash;
      } else if (crc32c) {
        failed = localCrc32cHash !== metadata.crc32c.substr(4);
      }

      if (failed) {
        that.delete(function(err) {
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
              '\n\n  ' + err.message
            ].join(' ');
          } else {
            code = 'FILE_NO_UPLOAD';
            message = [
              'The uploaded data did not match the data from the server. As a',
              'precaution, the file has been deleted. To be sure the content',
              'is the same, you should try uploading the file again.'
            ].join(' ');
          }

          var error = new Error(message);
          error.code = code;
          error.errors = [err];

          throughStream.emit('error', error);
        });
      } else {
        throughStream.emit('complete', metadata);
      }

      throughStream.end();
    });

  return throughStream;
};

/**
 * Delete the file.
 *
 * @param {function=} callback - The callback function.
 *
 * @example
 * file.delete(function(err, apiResponse) {});
 */
File.prototype.delete = function(callback) {
  callback = callback || util.noop;

  var path = '/o/' + encodeURIComponent(this.name);

  var query = {};

  if (this.generation) {
    query.generation = this.generation;
  }

  this.makeReq_('DELETE', path, query, null, function(err, resp) {
    if (err) {
      callback(err, resp);
      return;
    }

    callback(null, resp);
  });
};

/**
 * Convenience method to download a file into memory or to a local destination.
 *
 * @param {object=} options - Optional configuration. The arguments match those
 *     passed to {module:storage/file#createReadStream}.
 * @param {string} options.destination - Local file path to write the file's
 *     contents to.
 * @param {function} callback - The callback function.
 *
 * @example
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
 *   destination: '/Users/stephen/Desktop/file-backup.txt'
 * }, function(err) {});
 */
File.prototype.download = function(options, callback) {
  if (util.is(options, 'function')) {
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
    var fileContents = new Buffer('');

    fileStream
      .on('error', callback)
      .on('data', function(chunk) {
        fileContents = Buffer.concat([fileContents, chunk]);
      })
      .on('complete', function() {
        callback(null, fileContents);
      });
  }
};

/**
 * Get the file's metadata.
 *
 * @param {function=} callback - The callback function.
 *
 * @example
 * file.getMetadata(function(err, metadata, apiResponse) {});
 */
File.prototype.getMetadata = function(callback) {
  var self = this;
  callback = callback || util.noop;

  var path = '/o/' + encodeURIComponent(this.name);

  var query = {};

  if (this.generation) {
    query.generation = this.generation;
  }

  this.makeReq_('GET', path, query, null, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    self.metadata = resp;
    callback(null, self.metadata, resp);
  });
};

/**
 * Get a signed policy document to allow a user to upload data with a POST
 * request.
 *
 * *[Reference](http://goo.gl/JWJEkG).*
 *
 * @throws {Error} If an expiration timestamp from the past is given.
 * @throws {Error} If options.equals has an array with less or more than two
 *     members.
 * @throws {Error} If options.startsWith has an array with less or more than two
 *     members.
 *
 * @param {object} options - Configuration object.
 * @param {object} options.expiration - Timestamp (seconds since epoch) when
 *     this policy will expire.
 * @param {array|array[]=} options.equals - Array of request parameters and
 *     their expected value (e.g. [['$<field>', '<value>']]). Values are
 *     translated into equality constraints in the conditions field of the
 *     policy document (e.g. ['eq', '$<field>', '<value>']). If only one
 *     equality condition is to be specified, options.equals can be a one-
 *     dimensional array (e.g. ['$<field>', '<value>']).
 * @param {array|array[]=} options.startsWith - Array of request parameters and
 *     their expected prefixes (e.g. [['$<field>', '<value>']). Values are
 *     translated into starts-with constraints in the conditions field of the
 *     policy document (e.g. ['starts-with', '$<field>', '<value>']). If only
 *     one prefix condition is to be specified, options.startsWith can be a one-
 *     dimensional array (e.g. ['$<field>', '<value>']).
 * @param {string=} options.acl - ACL for the object from possibly predefined
 *     ACLs.
 * @param {string=} options.successRedirect - The URL to which the user client
 *     is redirected if the upload is successful.
 * @param {string=} options.successStatus - The status of the Google Storage
 *     response if the upload is successful (must be string).
 * @param {object=} options.contentLengthRange
 * @param {number} options.contentLengthRange.min - Minimum value for the
 *     request's content length.
 * @param {number} options.contentLengthRange.max - Maximum value for the
 *     request's content length.
 *
 * @example
 * file.getSignedPolicy({
 *   equals: ['$Content-Type', 'image/jpeg'],
 *   contentLengthRange: { min: 0, max: 1024 },
 *   expiration: Math.round(Date.now() / 1000) + (60 * 60 * 24 * 14) // 2 weeks.
 * }, function(err, policy) {
 *   // policy.string: the policy document in plain text.
 *   // policy.base64: the policy document in base64.
 *   // policy.signature: the policy signature in base64.
 * });
 */
File.prototype.getSignedPolicy = function(options, callback) {
  if (options.expiration < Math.floor(Date.now() / 1000)) {
    throw new Error('An expiration date cannot be in the past.');
  }

  var expirationString = new Date(options.expiration).toISOString();
  var conditions = [
    ['eq', '$key', this.name],
    {
      bucket: this.bucket.name
    }
  ];

  if (util.is(options.equals, 'array')) {
    if (!util.is(options.equals[0], 'array')) {
      options.equals = [options.equals];
    }
    options.equals.forEach(function(condition) {
      if (!util.is(condition, 'array') || condition.length !== 2) {
        throw new Error('Equals condition must be an array of 2 elements.');
      }
      conditions.push(['eq', condition[0], condition[1]]);
    });
  }

  if (util.is(options.startsWith, 'array')) {
    if (!util.is(options.startsWith[0], 'array')) {
      options.startsWith = [options.startsWith];
    }
    options.startsWith.forEach(function(condition) {
      if (!util.is(condition, 'array') || condition.length !== 2) {
        throw new Error('StartsWith condition must be an array of 2 elements.');
      }
      conditions.push(['starts-with', condition[0], condition[1]]);
    });
  }

  if (options.acl) {
    conditions.push({
      acl: options.acl
    });
  }

  if (options.successRedirect) {
    conditions.push({
      success_action_redirect: options.successRedirect
    });
  }

  if (options.successStatus) {
    conditions.push({
      success_action_status: options.successStatus
    });
  }

  if (options.contentLengthRange) {
    var min = options.contentLengthRange.min;
    var max = options.contentLengthRange.max;
    if (!util.is(min, 'number') || !util.is(max, 'number')) {
      throw new Error('ContentLengthRange must have numeric min & max fields.');
    }
    conditions.push(['content-length-range', min, max]);
  }

  var policy = {
    expiration: expirationString,
    conditions: conditions
  };

  var makeAuthorizedRequest_ = this.bucket.storage.makeAuthorizedRequest_;

  makeAuthorizedRequest_.getCredentials(function(err, credentials) {
    if (err) {
      callback(err);
      return;
    }

    var sign = crypto.createSign('RSA-SHA256');
    var policyString = JSON.stringify(policy);
    var policyBase64 = new Buffer(policyString).toString('base64');

    sign.update(policyBase64);

    var signature = sign.sign(credentials.private_key, 'base64');

    callback(null, {
      string: policyString,
      base64: policyBase64,
      signature: signature
    });
  });
};

/**
 * Get a signed URL to allow limited time access to the file.
 *
 * *[Reference](http://goo.gl/LcqhjU).*
 *
 * @throws {Error} if an expiration timestamp from the past is given.
 *
 * @param {object} options - Configuration object.
 * @param {string} options.action - "read", "write", or "delete"
 * @param {string=} options.contentMd5 - The MD5 digest value in base64. If you
 *     provide this, the client must provide this HTTP header with this same
 *     value in its request.
 * @param {string=} options.contentType - If you provide this value, the client
 *     must provide this HTTP header set to the same value.
 * @param {number} options.expires - Timestamp (seconds since epoch) when this
 *     link will expire.
 * @param {string=} options.extensionHeaders - If these headers are used, the
 *     server will check to make sure that the client provides matching values.
 * @param {function=} callback - The callback function.
 *
 * @example
 * file.getSignedUrl({
 *   action: 'read',
 *   expires: Math.round(Date.now() / 1000) + (60 * 60 * 24 * 14) // 2 weeks.
 * }, function(err, url) {});
 */
File.prototype.getSignedUrl = function(options, callback) {
  if (options.expires < Math.floor(Date.now() / 1000)) {
    throw new Error('An expiration date cannot be in the past.');
  }

  options.action = {
    read: 'GET',
    write: 'PUT',
    delete: 'DELETE'
  }[options.action];

  var name = encodeURIComponent(this.name);

  options.resource = '/' + this.bucket.name + '/' + name;

  var makeAuthorizedRequest_ = this.bucket.storage.makeAuthorizedRequest_;

  makeAuthorizedRequest_.getCredentials(function(err, credentials) {
    if (err) {
      callback(err);
      return;
    }

    var sign = crypto.createSign('RSA-SHA256');
    sign.update([
      options.action,
      (options.contentMd5 || ''),
      (options.contentType || ''),
      options.expires,
      (options.extensionHeaders || '') + options.resource
    ].join('\n'));
    var signature = sign.sign(credentials.private_key, 'base64');

    callback(null, [
      'https://storage.googleapis.com' + options.resource,
      '?GoogleAccessId=' + credentials.client_email,
      '&Expires=' + options.expires,
      '&Signature=' + encodeURIComponent(signature)
    ].join(''));
  });
};

/**
 * Set the file's metadata.
 *
 * @param {object} metadata - The metadata you wish to set.
 * @param {function=} callback - The callback function.
 *
 * @example
 * file.setMetadata({
 *   contentType: 'application/x-font-ttf',
 *   metadata: {
 *     my: 'custom',
 *     properties: 'go here'
 *   }
 * }, function(err, metadata, apiResponse) {});
 */
File.prototype.setMetadata = function(metadata, callback) {
  callback = callback || util.noop;

  var that = this;
  var path = '/o/' + encodeURIComponent(this.name);
  var query = {};

  if (this.generation) {
    query.generation = this.generation;
  }

  this.makeReq_('PATCH', path, query, metadata, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    that.metadata = resp;

    callback(null, that.metadata, resp);
  });
};

/**
 * Make a file private to the project and remove all other permissions.
 * Set `options.strict` to true to make the file private to only the owner.
 *
 * @param {object=} options - The configuration object.
 * @param {boolean=} options.strict - If true, set the file to be private to
 *     only the owner user. Otherwise, it will be private to the project.
 * @param {function=} callback - The callback function.
 *
 * @example
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
 */
File.prototype.makePrivate = function(options, callback) {
  var that = this;
  if (util.is(options, 'function')) {
      callback = options;
      options = {};
  }
  var path = '/o/' + encodeURIComponent(this.name);
  var query = { predefinedAcl: options.strict ? 'private' : 'projectPrivate' };

  // You aren't allowed to set both predefinedAcl & acl properties on a file, so
  // acl must explicitly be nullified, destroying all previous acls on the file.
  var metadata = { acl: null };

  callback = callback || util.noop;

  this.makeReq_('PATCH', path, query, metadata, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }

    that.metadata = resp;

    callback(null);
  });
};

/**
 * Set a file to be publicly readable and maintain all previous permissions.
 *
 * @param {function=} callback - The callback function.
 *
 * @example
 * file.makePublic(function(err, apiResponse) {});
 */
File.prototype.makePublic = function(callback) {
  callback = callback || util.noop;

  this.acl.add({
    entity: 'allUsers',
    role: 'READER'
  }, function(err, resp) {
    callback(err, resp);
  });
};

/**
 * `startResumableUpload_` uses the Resumable Upload API: http://goo.gl/jb0e9D.
 *
 * The process involves these steps:
 *
 *   1. POST the file's metadata. We get a resumable upload URI back, then cache
 *      it with ConfigStore.
 *   2. PUT data to that URI with a Content-Range header noting what position
 *      the data is beginning from. We also cache, at most, the first 16 bytes
 *      of the data being uploaded.
 *   3. Delete the ConfigStore cache after the upload completes.
 *
 * If the initial upload operation is interrupted, the next time the user
 * uploads the file, these steps occur:
 *
 *   1. Detect the presence of a cached URI in ConfigStore.
 *   2. Make an empty PUT request to that URI to get the last byte written to
 *      the remote file.
 *   3. PUT data to the URI starting from the first byte after the last byte
 *      returned from the call above.
 *
 * If the user tries to upload entirely different data to the remote file:
 *
 *   1. -- same as above --
 *   2. -- same as above --
 *   3. -- same as above --
 *   4. Compare the first chunk of the new data with the chunk in cache. If it's
 *      different, start a new resumable upload (Step 1 of the first example).
 *
 * @param {Duplexify} stream - Duplexify stream of data to pipe to the file.
 * @param {object=} metadata - Optional metadata to set on the file.
 *
 * @private
 */
File.prototype.startResumableUpload_ = function(stream, metadata) {
  metadata = metadata || {};

  var that = this;
  var configStore = new ConfigStore('gcloud-node');
  var config = configStore.get(that.name);
  var makeAuthorizedRequest = that.bucket.storage.makeAuthorizedRequest_;

  var numBytesWritten;
  var resumableUri;
  var RETRY_LIMIT = 5;
  var retries = 0;

  // This is used to hold all data coming in from the user's readable stream. If
  // we need to abort a resumable upload to start a new one, this will hold the
  // data until we're ready again.
  var bufferStream = through();

  if (config && config.uri) {
    resumableUri = config.uri;
    resumeUpload();
  } else {
    startUpload();
  }

  // Begin a new resumable upload. Send the metadata and cache the URI returned.
  function startUpload() {
    var headers = {};

    if (metadata.contentType) {
      headers['X-Upload-Content-Type'] = metadata.contentType;
    }

    var reqOpts = {
      method: 'POST',
      uri: util.format('{base}/{bucket}/o', {
        base: STORAGE_UPLOAD_BASE_URL,
        bucket: that.bucket.name
      }),
      qs: {
        name: that.name,
        uploadType: 'resumable'
      },
      headers: headers,
      json: metadata
    };

    if (that.generation) {
      reqOpts.qs.ifGenerationMatch = that.generation;
    }

    makeAuthorizedRequest(reqOpts, function(err, res, body) {
      if (err) {
        handleError(err);
        return;
      }

      numBytesWritten = -1;
      resumableUri = body.headers.location;

      configStore.set(that.name, {
        uri: resumableUri
      });

      resumeUpload();
    });
  }

  // Given a byte offset, create an authorized request to the resumable URI. If
  // resuming an upload, we first determine the last byte written, then create
  // the authorized request.
  function resumeUpload() {
    if (util.is(numBytesWritten, 'number')) {
      createUploadRequest(numBytesWritten);
    } else {
      getNumBytesWritten(createUploadRequest);
    }

    function createUploadRequest(offset) {
      makeAuthorizedRequest({
        method: 'PUT',
        uri: resumableUri
      }, {
        onAuthorized: function(err, reqOpts) {
          if (err) {
            handleError(err);
            return;
          }

          sendFile(reqOpts, offset + 1);
        }
      });
    }
  }

  // Given an authorized request and a byte offset, begin sending data to the
  // resumable URI from where the upload last left off.
  function sendFile(reqOpts, offset) {
    reqOpts.headers['Content-Range'] = 'bytes ' + offset + '-*/*';

    var bytesWritten = 0;

    var offsetStream = through(function(chunk, enc, next) {
      // Determine if this is the same content uploaded previously. We do this
      // by caching a slice of the first chunk, then comparing it with the first
      // byte of incoming data.
      if (bytesWritten === 0) {
        var cachedFirstChunk = config && config.firstChunk;
        var firstChunk = chunk.slice(0, 16);

        if (!cachedFirstChunk) {
          // This is a new upload. Cache the first chunk.
          configStore.set(that.name, {
            uri: reqOpts.uri,
            firstChunk: firstChunk
          });
        } else {
          // This is a continuation of an upload. Make sure the first bytes are
          // the same.
          cachedFirstChunk = new Buffer(cachedFirstChunk);
          firstChunk = new Buffer(firstChunk);

          if (!bufferEqual(cachedFirstChunk, firstChunk)) {
            // The data being uploaded now is different than the original data.
            // Give the chunk back to the stream and create a new upload stream.
            bufferStream.unshift(chunk);
            bufferStream.unpipe(this);

            configStore.del(that.name);

            startUpload();
            return;
          }
        }
      }

      var length = chunk.length;

      if (util.is(chunk, 'string')) {
        length = Buffer.byteLength(chunk, enc);
      }

      if (bytesWritten < offset) {
        chunk = chunk.slice(offset - bytesWritten);
      }

      bytesWritten += length;

      // Only push data to the request stream from the byte after the one we
      // left off on.
      if (bytesWritten > offset) {
        this.push(chunk);
      }

      next();
    });

    var writeStream = request(reqOpts);
    writeStream.callback = util.noop;

    writeStream.on('error', function(err) {
      handleError(err);
    });

    writeStream.on('complete', function(res) {
      util.handleResp(null, res, res.body, function(err, data) {
        if (err) {
          handleError(err);
          return;
        }

        that.metadata = data;

        stream.emit('complete', that.metadata);

        configStore.del(that.name);
      });
    });

    bufferStream.pipe(offsetStream).pipe(writeStream);
    stream.setWritable(bufferStream);
  }

  // If an upload to this file has previously started, this will return the last
  // byte written to it.
  function getNumBytesWritten(callback) {
    makeAuthorizedRequest({
      method: 'PUT',
      uri: resumableUri,
      headers: {
        'Content-Length': 0,
        'Content-Range': 'bytes */*'
      }
    }, function(err) {
      var RESUME_INCOMPLETE_STATUS = 308;

      if (err && err.code === RESUME_INCOMPLETE_STATUS) {
        // headers.range format: ##-## (e.g. 0-4915200)
        if (err.response.headers.range) {
          callback(parseInt(err.response.headers.range.split('-')[1]));
          return;
        }
      }

      // Start from the first byte.
      callback(-1);
    });
  }

  // Handle an error from API calls following the recommended best practices:
  // http://goo.gl/AajKku
  function handleError(err) {
    if (err.code === 404 && retries < RETRY_LIMIT) {
      retries++;
      startUpload();
      return;
    }

    if (err.code > 499 && err.code < 600 && retries < RETRY_LIMIT) {
      // Exponential backoff: http://goo.gl/CifIFy
      var randomMs = Math.round(Math.random() * 1000);
      var waitTime = Math.pow(2, retries) * 1000 + randomMs;

      retries++;

      // Reset `numBytesWritten` so we update this value by pinging the API.
      numBytesWritten = null;

      setTimeout(resumeUpload, waitTime);
      return;
    }

    stream.emit('error', err);
  }
};

/**
 * Takes a readable stream and pipes it to a remote file. Unlike
 * `startResumableUpload_`, which uses the resumable upload technique, this
 * method uses a simple upload (all or nothing).
 *
 * @param {Duplexify} stream - Duplexify stream of data to pipe to the file.
 * @param {object=} metadata - Optional metadata to set on the file.
 *
 * @private
 */
File.prototype.startSimpleUpload_ = function(stream, metadata) {
  var that = this;

  var reqOpts = {
    qs: {
      name: that.name
    },
    uri: util.format('{base}/{bucket}/o', {
      base: STORAGE_UPLOAD_BASE_URL,
      bucket: that.bucket.name
    })
  };

  if (this.generation) {
    reqOpts.qs.ifGenerationMatch = this.generation;
  }

  util.makeWritableStream(stream, {
    makeAuthorizedRequest: that.bucket.storage.makeAuthorizedRequest_,
    metadata: metadata,
    request: reqOpts
  }, function(data) {
    that.metadata = data;

    stream.emit('complete', data);
    stream.end();
  });
};

module.exports = File;
