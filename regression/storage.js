/**
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

var assert = require('assert'),
    fs = require('fs');

var env = require('./env.js'),
    gcloud = require('../lib'),
    bucket = new gcloud.storage.Bucket(env);

var pathToLogoFile = 'regression/data/CloudPlatform_128px_Retina.png';
var pathToReadFile = 'regression/data/readfile.txt';

describe('storage', function() {

  describe('write, read and remove files', function() {

    it('should write/remove from file', function(done) {
      var fileName = 'CloudLogo';
      bucket.write(fileName, { filename: pathToLogoFile }, function(err, fileObject, resp) {
        if (err) { return done(err); }
        assert(fileObject);
        bucket.remove(fileName, function(err) {
          if (err) { return done(err); }
          done();
        });
      });
    });

    it('should write/remove from stream', function(done) {
      var fileName = 'CloudLogo';
      bucket.write(fileName, { data: fs.createReadStream(pathToLogoFile) },
          function(err, fileObject) {
        if (err) { return done(err); }
        assert(fileObject);
        bucket.remove(fileName, function(err) {
          if (err) { return done(err); }
          done();
        });
      });
    });

    it('should write/read/remove from a buffer', function(done) {
      var fileName = 'MyBuffer',
          fileContent =  'Hello World';
      bucket.write(fileName, { data: fileContent }, function(err, fileObject) {
        if (err) { return done(err); }
        assert(fileObject);
        var content = '';
        bucket.createReadStream(fileName)
            .pipe(fs.createWriteStream(pathToReadFile))
            .on('error', done)
            .on('complete', function(content) {
              bucket.remove(fileName, function(err) {
                if (err) { return done(err); }
                fs.readFile(pathToReadFile, function(err, data) {
                  assert.equal(data, fileContent);
                  fs.unlink(pathToReadFile, function(err) {
                    if (err) { return done(err); }
                    done();
                  });
                });
              });
            });
      });
    });

    it('should write and read metadata', function(done) {
      var fileName = 'CloudLogo',
          myMetadata = { contentType: 'image/png'};
      bucket.write(fileName, { filename: pathToLogoFile, metadata: myMetadata },
          function(err, fileObject) {
        if (err) { return done(err); }
        bucket.stat(fileName, function(err, metadata) {
          if (err) { return done(err); }
          assert.equal(metadata['contentType'], myMetadata['contentType']);
          bucket.remove(fileName, function(err) {
            if (err) { return done(err); }
            done();
          });
        });
      });
    });

    it('should copy an existing file', function(done) {
      var fileName = 'CloudLogo',
          copyName = 'CloudLogoCopy';

      bucket.write(fileName, { filename: pathToLogoFile }, function(err, fileObject) {
        if (err) { return done(err); }
        bucket.copy(fileName, {  name: copyName }, function() {
          if (err) { return done(err); }
          bucket.remove(copyName, function(err) {
            if (err) { return done(err); }
            bucket.remove(fileName, function(err) {
              if (err) { return done(err); }
              done();
            });
          });
        });
      });
    });

  });

  describe('list files', function() {

    var filenames = ['CloudLogo1', 'CloudLogo2', 'CloudLogo3'];

    before(function(done) {
      bucket.write(filenames[0], { filename: pathToLogoFile }, function(err, fileObject) {
        if (err) { return done(err); }
        bucket.copy(filenames[0], {  name: filenames[1] }, function() {
          if (err) { return done(err); }
          bucket.copy(filenames[0], {  name: filenames[2] }, function() {
            if (err) { return done(err); }
            done();
          });
        });
      });
    });

    it('should list files', function(done) {
      bucket.list(function(err, files, nextQuery) {
        if (err) { return done(err); }
        assert.equal(files.length, 3);
        assert.equal(nextQuery, null);
        done();
      });
    });

    it('should paginate the list', function(done) {
      bucket.list({ maxResults: 2 }, function(err, files, nextQuery) {
        if (err) { return done(err); }
        assert.equal(files.length, 2);
        assert(nextQuery);
        bucket.list(nextQuery, function(err, files, nextQuery) {
          if (err) { return done(err); }
          assert(files);
          done();
        });
      });
    });

    after(function(done) {
      bucket.remove(filenames[0], function(err) {
        if (err) { return done(err); }
        bucket.remove(filenames[1], function(err) {
          if (err) { return done(err); }
          bucket.remove(filenames[2], function() {
            if (err) { return done(err); }
            done();
          });
        });
      });
    });

  });

});
