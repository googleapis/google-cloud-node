/**
 * Copyright 2020 Google LLC
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

import assert from 'assert';
import {describe, it, afterEach} from 'mocha';
import * as protobuf from 'protobufjs';
import * as path from 'path';
import * as sinon from 'sinon';
import * as stream from 'stream';
import echoProtoJson = require('../fixtures/echo.json');
import {GrpcClient} from '../../src/fallback';
import * as transcoding from '../../src/transcoding';
import {PassThroughClient} from 'google-auth-library';
import {StreamArrayParser} from '../../src/streamArrayParser';
import {setMockFallbackResponse} from './utils';

let authClient = new PassThroughClient();
let opts = {
  authClient,
};

beforeEach(() => {
  authClient = new PassThroughClient();
  opts = {
    authClient,
  };
});

describe('REGAPIC', () => {
  let gaxGrpc: GrpcClient,
    gaxGrpcNumericEnums: GrpcClient,
    gaxGrpcMinifyJson: GrpcClient,
    protos: protobuf.NamespaceBase,
    libProtos: protobuf.NamespaceBase,
    echoService: protobuf.Service,
    libraryService: protobuf.Service,
    stubOptions: {};

  beforeEach(() => {
    stubOptions = {
      servicePath: 'foo.example.com',
      port: 443,
    };

    gaxGrpc = new GrpcClient(opts);
    gaxGrpcNumericEnums = new GrpcClient({
      ...opts,
      numericEnums: true,
    });
    gaxGrpcMinifyJson = new GrpcClient({
      ...opts,
      minifyJson: true,
    });
    protos = gaxGrpc.loadProto(echoProtoJson);
    echoService = protos.lookupService('Echo');
    const TEST_JSON = path.resolve(
      __dirname,
      '..',
      '..',
      'test',
      'fixtures',
      'library.json',
    );
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    libProtos = gaxGrpc.loadProtoJSON(require(TEST_JSON));
    libraryService = libProtos.lookupService('LibraryService');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should make a request', done => {
    const requestObject = {content: 'test-content'};

    setMockFallbackResponse(
      gaxGrpc,
      new Response(Buffer.from(JSON.stringify(requestObject))),
    );
    void gaxGrpc.createStub(echoService, stubOptions).then(echoStub => {
      echoStub.echo(requestObject, {}, {}, (err?: {}, result?: {}) => {
        try {
          assert.strictEqual(err, null);
          assert.strictEqual(
            requestObject.content,
            (result as {content: string}).content,
          );
          done();
        } catch (err) {
          done(err);
        }
      });
    });
  });

  it('should make a streaming request', done => {
    const requestObject = {content: 'test content'};
    const responseObject = [{content: 'test'}, {content: 'content'}];
    const responseObjectJson = JSON.stringify(responseObject, null, '  ');
    const responseStream = new stream.Readable();
    responseStream.push(responseObjectJson.slice(0, 10));
    responseStream.push(responseObjectJson.slice(10));
    responseStream.push(null);

    setMockFallbackResponse(
      gaxGrpc,
      new Response(responseStream as unknown as BodyInit),
    );
    void gaxGrpc.createStub(echoService, stubOptions).then(echoStub => {
      const stream = echoStub.expand(
        requestObject,
        {},
        {},
        () => {},
      ) as StreamArrayParser;
      const results: {}[] = [];
      stream.on('data', data => {
        results.push(data);
      });
      stream.on('error', done);
      stream.on('end', () => {
        try {
          assert.deepStrictEqual(results, responseObject);
          done();
        } catch (err) {
          done(err);
        }
      });
    });
  });

  it('should handle fetch failure', done => {
    const requestObject = {content: 'test-content'};

    setMockFallbackResponse(
      gaxGrpc,
      new Response(JSON.stringify({error: {message: 'Fetch error'}}), {
        status: 500,
      }),
    );
    void gaxGrpc.createStub(echoService, stubOptions).then(echoStub => {
      echoStub.echo(requestObject, {}, {}, (err?: {}) => {
        try {
          assert.strictEqual((err as Error).message, 'Fetch error');
          done();
        } catch (err) {
          done(err);
        }
      });
    });
  });

  it('should handle streaming request failure', done => {
    const requestObject = {content: 'test content'};

    setMockFallbackResponse(
      gaxGrpc,
      new Response(JSON.stringify({error: {message: 'Fetch error'}}), {
        status: 500,
      }),
    );
    void gaxGrpc.createStub(echoService, stubOptions).then(echoStub => {
      const stream = echoStub.expand(requestObject) as StreamArrayParser;
      stream.on('error', err => {
        try {
          assert.strictEqual((err as Error).message, 'Fetch error');
          done();
        } catch (err) {
          done(err);
        }
      });
    });
  });

  describe('should support enum conversion in proto message', () => {
    it('should support enum conversion in proto message response', done => {
      const requestObject = {name: 'shelves/shelf-name'};
      const responseObject = {
        name: 'shelf-name',
        theme: 'shelf-theme',
        type: 1,
      };
      const spy = sinon.spy(transcoding, 'transcode');

      setMockFallbackResponse(
        gaxGrpc,
        new Response(Buffer.from(JSON.stringify(responseObject))),
      );

      gaxGrpc.createStub(libraryService, stubOptions).then(libStub => {
        libStub.getShelf(requestObject, {}, {}, (err?: {}, result?: {}) => {
          assert.strictEqual(spy.getCall(0).returnValue?.queryString, '');
          assert.strictEqual(err, null);
          assert.strictEqual(
            'shelf-name',
            (result as {name: {}; theme: {}; type: {}}).name,
          );
          assert.strictEqual(
            'TYPEONE',
            (result as {name: {}; theme: {}; type: {}}).type,
          );
          done();
        });
      }, /* catch: */ done);
    });

    it('should support enum conversion in proto message request using symbolic name', done => {
      const shelf = {
        name: 'shelf-name',
        theme: 'shelf-theme',
        type: 'TYPEONE',
      };
      const requestObject = {shelf: shelf};
      const spy = sinon.spy(transcoding, 'transcode');

      setMockFallbackResponse(
        gaxGrpc,
        new Response(Buffer.from(JSON.stringify(shelf))),
      );

      gaxGrpc.createStub(libraryService, stubOptions).then(libStub => {
        libStub.createShelf(requestObject, {}, {}, (err?: {}) => {
          assert.strictEqual(spy.getCall(0).returnValue?.queryString, '');
          assert.strictEqual(err, null);
          done();
        });
      }, /* catch: */ done);
    });

    it('should support enum conversion in proto message request using type value', done => {
      const shelf = {
        name: 'shelf-name',
        theme: 'shelf-theme',
        type: 1,
      };
      const requestObject = {shelf: shelf};
      const spy = sinon.spy(transcoding, 'transcode');

      setMockFallbackResponse(
        gaxGrpc,
        new Response(Buffer.from(JSON.stringify(shelf))),
      );

      gaxGrpc.createStub(libraryService, stubOptions).then(libStub => {
        libStub.createShelf(requestObject, {}, {}, (err?: {}) => {
          assert.strictEqual(spy.getCall(0).returnValue?.queryString, '');
          assert.strictEqual(err, null);
          done();
        });
      }, /* catch: */ done);
    });
  });

  describe('should support enum conversion in proto message with numeric enums enabled', () => {
    it('should support enum conversion in proto message response', done => {
      const requestObject = {name: 'shelves/shelf-name'};
      const responseObject = {
        name: 'shelf-name',
        theme: 'shelf-theme',
        type: 100, // unknown enum value
      };
      const spy = sinon.spy(transcoding, 'transcode');

      setMockFallbackResponse(
        gaxGrpcNumericEnums,
        new Response(Buffer.from(JSON.stringify(responseObject))),
      );

      gaxGrpcNumericEnums
        .createStub(libraryService, stubOptions)
        .then(libStub => {
          libStub.getShelf(requestObject, {}, {}, (err?: {}, result?: {}) => {
            assert.strictEqual(
              spy.getCall(0).returnValue?.queryString,
              '$alt=json%3Benum-encoding=int',
            );
            assert.strictEqual(err, null);
            assert.strictEqual(
              'shelf-name',
              (result as {name: {}; theme: {}; type: {}}).name,
            );
            assert.strictEqual(
              100,
              (result as {name: {}; theme: {}; type: {}}).type,
            );
            done();
          });
        }, done);
    });

    it('should request numeric enums if passed as symbolic name', done => {
      const shelf = {
        name: 'shelf-name',
        theme: 'shelf-theme',
        type: 'TYPEONE',
      };
      const requestObject = {shelf: shelf};
      const spy = sinon.spy(transcoding, 'transcode');

      setMockFallbackResponse(
        gaxGrpcNumericEnums,
        new Response(Buffer.from(JSON.stringify(shelf))),
      );

      gaxGrpcNumericEnums
        .createStub(libraryService, stubOptions)
        .then(libStub => {
          libStub.createShelf(requestObject, {}, {}, (err?: {}) => {
            assert.strictEqual(
              'string',
              typeof spy.getCall(0).returnValue?.queryString,
            );
            assert.match(
              <string>spy.getCall(0).returnValue?.queryString,
              /\$alt=json%3Benum-encoding=int(&.*)?$/,
            );
            assert.strictEqual(err, null);
            done();
          });
        }, /* catch: */ done);
    });

    it('should preserve query string when appending numeric enums parameter', done => {
      const shelf = {
        name: 'shelf-name',
        theme: 'shelf-theme',
        type: 'TYPEONE',
      };
      const requestObject = {
        shelf: shelf,
        queryStringParameter: 'must-be-preserved',
      };
      const spy = sinon.spy(transcoding, 'transcode');

      setMockFallbackResponse(
        gaxGrpcNumericEnums,
        new Response(Buffer.from(JSON.stringify(shelf))),
      );

      gaxGrpcNumericEnums
        .createStub(libraryService, stubOptions)
        .then(libStub => {
          libStub.createShelf(requestObject, {}, {}, (err?: {}) => {
            assert.strictEqual(
              spy.getCall(0).returnValue?.queryString,
              'queryStringParameter=must-be-preserved&$alt=json%3Benum-encoding=int',
            );
            assert.strictEqual(err, null);
            done();
          });
        }, done);
    });

    it('should request numeric enums if passed as an unknown number', done => {
      const shelf = {
        name: 'shelf-name',
        theme: 'shelf-theme',
        type: 100,
      };
      const requestObject = {shelf: shelf};
      const spy = sinon.spy(transcoding, 'transcode');

      setMockFallbackResponse(
        gaxGrpcNumericEnums,
        new Response(Buffer.from(JSON.stringify(shelf))),
      );

      gaxGrpcNumericEnums
        .createStub(libraryService, stubOptions)
        .then(libStub => {
          libStub.createShelf(requestObject, {}, {}, (err?: {}) => {
            assert.strictEqual(
              spy.getCall(0).returnValue?.queryString,
              '$alt=json%3Benum-encoding=int',
            );
            assert.strictEqual(err, null);
            done();
          });
        }, done);
    });
  });

  describe('should support long data type conversion in proto message', () => {
    it('large number long data type conversion in proto message response', done => {
      const requestObject = {name: 'shelves/shelf-name/books/book-name'};
      const responseObject = {
        name: 'book-name',
        author: 'book-author',
        title: 'book-title',
        read: true,
        bookId: 9007199254740992,
      };

      setMockFallbackResponse(
        gaxGrpc,
        new Response(Buffer.from(JSON.stringify(responseObject))),
      );

      gaxGrpc.createStub(libraryService, stubOptions).then(libStub => {
        libStub.getBook(requestObject, {}, {}, (err?: {}, result?: {}) => {
          assert.strictEqual(err, null);
          assert.strictEqual(
            'book-name',
            (
              result as {
                name: {};
                author: {};
                title: {};
                read: false;
                bookId: {};
              }
            ).name,
          );
          assert.strictEqual(
            '9007199254740992',
            (
              result as {
                name: {};
                author: {};
                title: {};
                read: false;
                bookId: {};
              }
            ).bookId,
          );
          done();
        });
      }, /* catch: */ done);
    });

    it('small number long data type conversion in proto message response', done => {
      const requestObject = {name: 'shelves/shelf-name/books/book-name'};
      const responseObject = {
        name: 'book-name',
        author: 'book-author',
        title: 'book-title',
        read: true,
        bookId: 42,
      };

      setMockFallbackResponse(
        gaxGrpc,
        new Response(Buffer.from(JSON.stringify(responseObject))),
      );

      gaxGrpc.createStub(libraryService, stubOptions).then(libStub => {
        libStub.getBook(requestObject, {}, {}, (err?: {}, result?: {}) => {
          assert.strictEqual(err, null);
          assert.strictEqual(
            'book-name',
            (
              result as {
                name: {};
                author: {};
                title: {};
                read: false;
                bookId: {};
              }
            ).name,
          );
          assert.strictEqual(
            '42',
            (
              result as {
                name: {};
                author: {};
                title: {};
                read: false;
                bookId: {};
              }
            ).bookId,
          );
          done();
        });
      }, done);
    });

    it('long data type conversion in proto message request', done => {
      const bookId = 9007199254740992;
      const requestObject = {name: `shelves/shelf-name/book_id/${bookId}`};
      const responseObject = {
        name: 'book-name',
        author: 'book-author',
        title: 'book-title',
        read: true,
        bookId: bookId,
      };

      setMockFallbackResponse(
        gaxGrpc,
        new Response(Buffer.from(JSON.stringify(responseObject))),
      );

      gaxGrpc.createStub(libraryService, stubOptions).then(libStub => {
        libStub.getBook(requestObject, {}, {}, (err?: {}, result?: {}) => {
          assert.strictEqual(err, null);
          assert.strictEqual(
            'book-name',
            (
              result as {
                name: {};
                author: {};
                title: {};
                read: false;
                bookId: {};
              }
            ).name,
          );
          assert.strictEqual(
            bookId.toString(),
            (
              result as {
                name: {};
                author: {};
                title: {};
                read: false;
                bookId: {};
              }
            ).bookId,
          );
          done();
        });
      }, done);
    });
  });
  describe('should support json minification', () => {
    it('should send prettyPrint=0 when json minification is requested', done => {
      const requestObject = {name: 'shelves/shelf-name'};
      const responseObject = {
        name: 'shelf-name',
        theme: 'shelf-theme',
        type: 100, // unknown enum value
      };
      const spy = sinon.spy(transcoding, 'transcode');

      setMockFallbackResponse(
        gaxGrpcMinifyJson,
        new Response(Buffer.from(JSON.stringify(responseObject))),
      );

      gaxGrpcMinifyJson
        .createStub(libraryService, stubOptions)
        .then(libStub => {
          libStub.getShelf(requestObject, {}, {}, (err?: {}, result?: {}) => {
            assert.strictEqual(
              'string',
              typeof spy.getCall(0).returnValue?.queryString,
            );
            assert.match(
              <string>spy.getCall(0).returnValue?.queryString,
              /\$prettyPrint=0(&.*)?$/,
            );
            assert.strictEqual(err, null);
            assert.strictEqual(
              'shelf-name',
              (result as {name: {}; theme: {}; type: {}}).name,
            );
            assert.strictEqual(
              100,
              (result as {name: {}; theme: {}; type: {}}).type,
            );
            done();
          });
        }, /* catch: */ done);
    });
    it('should not send prettyPrint setting when json minification is not requested', done => {
      const requestObject = {name: 'shelves/shelf-name'};
      const responseObject = {
        name: 'shelf-name',
        theme: 'shelf-theme',
        type: 100, // unknown enum value
      };
      const spy = sinon.spy(transcoding, 'transcode');

      setMockFallbackResponse(
        gaxGrpc,
        new Response(Buffer.from(JSON.stringify(responseObject))),
      );

      gaxGrpc.createStub(libraryService, stubOptions).then(libStub => {
        libStub.getShelf(requestObject, {}, {}, (err?: {}, result?: {}) => {
          assert.strictEqual(
            'string',
            typeof spy.getCall(0).returnValue?.queryString,
          );
          assert.doesNotMatch(
            <string>spy.getCall(0).returnValue?.queryString,
            /prettyPrint/,
          );
          assert.strictEqual(err, null);
          assert.strictEqual(
            'shelf-name',
            (result as {name: {}; theme: {}; type: {}}).name,
          );
          assert.strictEqual(
            100,
            (result as {name: {}; theme: {}; type: {}}).type,
          );
          done();
        });
      }, /* catch: */ done);
    });
  });
});
