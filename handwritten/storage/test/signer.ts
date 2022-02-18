// Copyright 2020 Google LLC
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
import * as assert from 'assert';
import * as dateFormat from 'date-and-time';
import * as crypto from 'crypto';
import * as sinon from 'sinon';
import {describe, it, beforeEach, afterEach} from 'mocha';

import {
  URLSigner,
  SigningError,
  AuthClient,
  BucketI,
  FileI,
  SignerGetSignedUrlConfig,
  PATH_STYLED_HOST,
  GetSignedUrlConfigInternal,
  Query,
  SignerExceptionMessages,
} from '../src/signer';
import {encodeURI, qsStringify} from '../src/util';
import {ExceptionMessages} from '../src/storage';

describe('signer', () => {
  const BUCKET_NAME = 'bucket-name';
  const FILE_NAME = 'file-name.png';
  const CLIENT_EMAIL = 'client-email';

  let sandbox: sinon.SinonSandbox;
  beforeEach(() => (sandbox = sinon.createSandbox()));
  afterEach(() => sandbox.restore());

  describe('URLSigner', () => {
    let authClient: AuthClient;
    let bucket: BucketI;
    let file: FileI;

    const NOW = new Date('2019-03-18T00:00:00Z');
    let fakeTimers: sinon.SinonFakeTimers;

    beforeEach(() => (fakeTimers = sinon.useFakeTimers(NOW)));
    afterEach(() => fakeTimers.restore());

    beforeEach(() => {
      authClient = {
        sign: async () => 'signature',
        getCredentials: async () => ({client_email: CLIENT_EMAIL}),
      };
      bucket = {name: BUCKET_NAME};
      file = {name: FILE_NAME};
    });

    describe('URLSigner constructor', () => {
      let signer: URLSigner;
      beforeEach(() => {
        signer = new URLSigner(authClient, bucket, file);
      });

      it('should localize authClient', () => {
        assert.strictEqual(signer['authClient'], authClient);
      });

      it('should localize bucket', () => {
        assert.strictEqual(signer['bucket'], bucket);
      });

      it('should localize file', () => {
        assert.strictEqual(signer['file'], file);
      });
    });

    describe('getSignedUrl', () => {
      let signer: URLSigner;
      let CONFIG: SignerGetSignedUrlConfig;
      beforeEach(() => {
        signer = new URLSigner(authClient, bucket, file);

        CONFIG = {
          method: 'GET',
          expires: new Date().valueOf() + 2000,
        };
      });

      describe('version', () => {
        it('should default to v2 if version is not given', async () => {
          const v2 = sandbox
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .stub<any, any>(signer, 'getSignedUrlV2')
            .resolves({});

          await signer.getSignedUrl(CONFIG);
          assert(v2.calledOnce);
        });

        it('should use v2 if set', async () => {
          CONFIG = {
            version: 'v2',
            contentMd5: 'md5',
            contentType: 'application/json',
            extensionHeaders: {
              key: 'value',
            },
            ...CONFIG,
          };
          const v2 = sandbox
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .stub<any, any>(signer, 'getSignedUrlV2')
            .resolves({});

          await signer.getSignedUrl(CONFIG);
          assert(v2.calledOnce);
          const v2arg = v2.getCall(0).args[0];
          assert.strictEqual(v2arg.bucket, bucket.name);
          assert.strictEqual(v2arg.method, CONFIG.method);
          assert.strictEqual(v2arg.contentMd5, CONFIG.contentMd5);
          assert.strictEqual(v2arg.contentType, CONFIG.contentType);
          assert.deepStrictEqual(
            v2arg.extensionHeaders,
            CONFIG.extensionHeaders
          );
        });

        it('should use v4 if set', async () => {
          CONFIG = {
            version: 'v4',
            contentMd5: 'md5',
            contentType: 'application/json',
            extensionHeaders: {
              key: 'value',
            },
            ...CONFIG,
          };
          const v4 = sandbox
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .stub<any, any>(signer, 'getSignedUrlV4')
            .resolves({});

          await signer.getSignedUrl(CONFIG);
          assert(v4.calledOnce);
          const v4arg = v4.getCall(0).args[0];
          assert.strictEqual(v4arg.bucket, bucket.name);
          assert.strictEqual(v4arg.method, CONFIG.method);
          assert.strictEqual(v4arg.contentMd5, CONFIG.contentMd5);
          assert.strictEqual(v4arg.contentType, CONFIG.contentType);
          assert.deepStrictEqual(
            v4arg.extensionHeaders,
            CONFIG.extensionHeaders
          );
        });

        it('should error for an invalid version', () => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          CONFIG.version = 'v42' as any;

          assert.throws(
            () => signer.getSignedUrl(CONFIG),
            /Invalid signed URL version: v42\. Supported versions are 'v2' and 'v4'\./
          );
        });
      });

      describe('accessibleAt', () => {
        const accessibleAtNumber = 1581984000000; //2020-02-17T16:00:00-08:00
        const expiresNumber = accessibleAtNumber + 86400000; //2020-02-18T16:00:00-08:00

        it('should set correct settings if accessibleAt provided', async () => {
          const authClientSign: sinon.SinonStub<
            [string],
            Promise<string>
          > = sandbox.stub(authClient, 'sign').resolves('signature');
          const accessibleAt = new Date(accessibleAtNumber);
          await signer.getSignedUrl({
            version: 'v4',
            method: 'GET',
            accessibleAt,
            expires: expiresNumber,
          });
          const blobToSign = authClientSign.getCall(0).args[0];
          assert(
            blobToSign.includes(
              dateFormat.format(accessibleAt, 'YYYYMMDD[T]HHmmss[Z]', true)
            )
          );
        });

        it('should throw if an expiration date from the before accessibleAt date is given', () => {
          const accessibleAt = accessibleAtNumber;
          const expires = accessibleAt - 86400000;

          assert.throws(() => {
            signer.getSignedUrl({
              version: 'v4',
              method: 'GET',
              accessibleAt,
              expires,
            }),
              SignerExceptionMessages.EXPIRATION_BEFORE_ACCESSIBLE_DATE;
          });
        });

        describe('checkInputTypes', () => {
          const query = {
            'X-Goog-Date': dateFormat.format(
              new Date(accessibleAtNumber),
              'YYYYMMDD[T]HHmmss[Z]',
              true
            ),
          };

          it('should accept Date objects', async () => {
            const accessibleAt = new Date(accessibleAtNumber);
            const signedUrl = await signer.getSignedUrl({
              version: 'v4',
              method: 'GET',
              accessibleAt,
              expires: expiresNumber,
            });
            assert(signedUrl.includes(qsStringify(query)));
          });

          it('should accept numbers', async () => {
            const accessibleAt = accessibleAtNumber;
            const signedUrl = await signer.getSignedUrl({
              version: 'v4',
              method: 'GET',
              accessibleAt,
              expires: expiresNumber,
            });
            assert(signedUrl.includes(qsStringify(query)));
          });

          it('should accept strings', async () => {
            const accessibleAt = '2020-02-17T16:00:00-08:00';
            const signedUrl = await signer.getSignedUrl({
              version: 'v4',
              method: 'GET',
              accessibleAt,
              expires: expiresNumber,
            });
            assert(signedUrl.includes(qsStringify(query)));
          });

          it('should throw if a date is invalid', () => {
            const accessibleAt = new Date('31-12-2019');

            assert.throws(() => {
              signer.getSignedUrl({
                version: 'v4',
                method: 'GET',
                accessibleAt,
                expires: expiresNumber,
              }),
                SignerExceptionMessages.ACCESSIBLE_DATE_INVALID;
            });
          });
        });
      });

      describe('expires', () => {
        it('should parse Date object into expiration seconds', async () => {
          const parseExpires = sandbox
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .spy<any, any>(signer, 'parseExpires');

          const v2 = sandbox
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .stub<any, any>(signer, 'getSignedUrlV2')
            .resolves({});

          await signer.getSignedUrl(CONFIG);
          assert(parseExpires.calledOnceWith(CONFIG.expires));
          const expiresInSeconds = parseExpires.getCall(0).lastArg;

          assert(v2.getCall(0).args[0].expiration, expiresInSeconds);
        });
      });

      describe('URL style', () => {
        let v2: sinon.SinonStub;
        beforeEach(() => {
          v2 = sandbox
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .stub<any, any>(signer, 'getSignedUrlV2')
            .resolves({});
        });

        it('should pass cname', async () => {
          CONFIG.cname = 'http://www.example.com';

          const url = await signer.getSignedUrl(CONFIG);
          const v2arg = v2.getCall(0).args[0];
          assert.strictEqual(v2arg.cname, CONFIG.cname);
          assert(url.startsWith(CONFIG.cname));
        });

        it('should pass virtual host to cname', async () => {
          CONFIG.virtualHostedStyle = true;
          const expectedCname = `https://${bucket.name}.storage.googleapis.com`;

          await signer.getSignedUrl(CONFIG);
          const v2arg = v2.getCall(0).args[0];
          assert.strictEqual(v2arg.cname, expectedCname);
        });

        it('should take precedence in cname if both passed', async () => {
          CONFIG = {
            virtualHostedStyle: true,
            cname: 'http://www.example.com',
            ...CONFIG,
          };

          await signer.getSignedUrl(CONFIG);
          const v2arg = v2.getCall(0).args[0];
          assert.strictEqual(v2arg.cname, CONFIG.cname);
        });

        it('should not pass cname parameter', async () => {
          CONFIG = {
            virtualHostedStyle: false,
            cname: undefined,
            ...CONFIG,
          };

          await signer.getSignedUrl(CONFIG);
          const v2arg = v2.getCall(0).args[0];
          assert.strictEqual(v2arg.cname, undefined);
        });
      });

      describe('composing signed URL', () => {
        const query = {
          GoogleAccessId: CLIENT_EMAIL,
          Expires: NOW.valueOf() + 2000,
          Signature: 'signature',
        };

        beforeEach(() => {
          sandbox
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .stub<any, any>(signer, 'getSignedUrlV2')
            .resolves(query) as sinon.SinonStub;
        });

        it('shuold insert user-provided queryParams', async () => {
          CONFIG.queryParams = {key: 'AZ!*()*%/f'};

          const url = await signer.getSignedUrl(CONFIG);
          assert(
            url.includes(
              qsStringify({
                ...query,
                ...CONFIG.queryParams,
              })
            )
          );
        });
      });

      it('should URI encode file name with special characters', async () => {
        file.name = "special/azAZ!*'()*%/file.jpg";
        const encoded = encodeURI(file.name, false);
        const signedUrl = await signer.getSignedUrl(CONFIG);

        const v2 = sandbox
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .stub<any, any>(signer, 'getSignedUrlV2')
          .resolves({});

        await signer.getSignedUrl(CONFIG);
        const v2arg = v2.getCall(0).args[0];
        assert.strictEqual(v2arg.file, encoded);
        assert(signedUrl.includes(encoded));
      });

      it('should generate URL with given cname', async () => {
        CONFIG.cname = 'http://www.example.com';
        const signedUrl = await signer.getSignedUrl(CONFIG);
        assert(signedUrl.startsWith(CONFIG.cname));
      });

      it('should remove trailing slashes from cname', async () => {
        CONFIG.cname = 'http://www.example.com//';
        const signedUrl = await signer.getSignedUrl(CONFIG);
        assert(signedUrl.startsWith(`http://www.example.com/${file.name}`));
      });

      it('should generate virtual hosted style URL', async () => {
        CONFIG.virtualHostedStyle = true;
        const signedUrl = await signer.getSignedUrl(CONFIG);
        assert(
          signedUrl.startsWith(
            `https://${bucket.name}.storage.googleapis.com/${file.name}`
          )
        );
      });

      it('should generate path styled URL', async () => {
        CONFIG.virtualHostedStyle = false;
        const signedUrl = await signer.getSignedUrl(CONFIG);
        assert(signedUrl.startsWith(PATH_STYLED_HOST));
      });

      it('should generate URL with returned query params appended', async () => {
        const query = {
          'X-Goog-Foo': 'value',
          'X-Goog-Bar': 'azAZ!*()*%',
        };
        sandbox
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .stub<any, any>(signer, 'getSignedUrlV2')
          .resolves(query);

        const signedUrl = await signer.getSignedUrl(CONFIG);
        assert(signedUrl.includes(qsStringify(query)));
      });
    });

    describe('getSignedUrlV2', () => {
      let signer: URLSigner;
      let CONFIG: GetSignedUrlConfigInternal;

      beforeEach(() => {
        signer = new URLSigner(authClient, bucket, file);
        CONFIG = {
          method: 'GET',
          expiration: Math.floor((NOW.valueOf() + 2000) / 1000),
          bucket: bucket.name,
          file: file.name,
        };
      });

      describe('blobToSign', () => {
        let authClientSign: sinon.SinonStub<[string], Promise<string>>;
        beforeEach(() => {
          authClientSign = sandbox
            .stub(authClient, 'sign')
            .resolves('signature');
        });

        it('should sign method', async () => {
          await signer['getSignedUrlV2'](CONFIG);

          const blobToSign = authClientSign.getCall(0).args[0];
          assert(blobToSign.startsWith('GET'));
        });

        it('should sign contentMd5 if given', async () => {
          CONFIG.contentMd5 = 'md5-hash';

          await signer['getSignedUrlV2'](CONFIG);

          const blobToSign = authClientSign.getCall(0).args[0];
          assert(blobToSign.includes(CONFIG.contentMd5));
        });

        it('should sign contentType if given', async () => {
          CONFIG.contentType = 'application/octet-stream';

          await signer['getSignedUrlV2'](CONFIG);

          const blobToSign = authClientSign.getCall(0).args[0];
          assert(blobToSign.includes(CONFIG.contentType));
        });

        it('should sign expiration', async () => {
          await signer['getSignedUrlV2'](CONFIG);

          const blobToSign = authClientSign.getCall(0).args[0];
          assert(blobToSign.includes(CONFIG.expiration.toString(10)));
        });

        it('should sign canonical headers', async () => {
          sandbox
            .stub(signer, 'getCanonicalHeaders')
            .returns('canonical-headers');
          await signer['getSignedUrlV2'](CONFIG);

          const blobToSign = authClientSign.getCall(0).args[0];
          assert(blobToSign.includes('canonical-headers'));
        });

        it('should sign resource path', async () => {
          sandbox.stub(signer, 'getResourcePath').returns('/resource/path');
          await signer['getSignedUrlV2'](CONFIG);

          const blobToSign = authClientSign.getCall(0).args[0];
          assert(blobToSign.endsWith('/resource/path'));
        });

        it('should compose blobToSign without contentMd5 and contentType', async () => {
          sandbox
            .stub(signer, 'getCanonicalHeaders')
            .returns('canonical-headers');
          sandbox.stub(signer, 'getResourcePath').returns('/resource/path');
          await signer['getSignedUrlV2'](CONFIG);

          const blobToSign = authClientSign.getCall(0).args[0];
          assert.strictEqual(
            blobToSign,
            [
              'GET',
              '',
              '',
              CONFIG.expiration,
              'canonical-headers' + '/resource/path',
            ].join('\n')
          );
        });
      });

      it('should return v2 query', async () => {
        const query = (await signer['getSignedUrlV2'](CONFIG)) as Query;
        assert.deepStrictEqual(query, {
          GoogleAccessId: CLIENT_EMAIL,
          Expires: CONFIG.expiration,
          Signature: 'signature',
        });
      });

      it('rejects with SigningError on signing Error', () => {
        const err = new Error('my-err');
        err.stack = 'some-stack-trace';
        sandbox.stub(authClient, 'sign').rejects(err);

        assert.rejects(() => signer['getSignedUrlV2'](CONFIG), {
          name: 'SigningError',
          message: 'my-err',
          stack: 'some-stack-trace',
        });
      });
    });

    describe('getSignedUrlV4', () => {
      let signer: URLSigner;
      let CONFIG: GetSignedUrlConfigInternal;

      beforeEach(() => {
        signer = new URLSigner(authClient, bucket, file);
        CONFIG = {
          method: 'GET',
          expiration: Math.floor((NOW.valueOf() + 2000) / 1000),
          bucket: bucket.name,
        };
      });

      it('should fail for expirations beyond 7 days', () => {
        CONFIG.expiration = NOW.valueOf() + 7.1 * 24 * 60 * 60;
        const SEVEN_DAYS = 7 * 24 * 60 * 60;

        assert.throws(
          () => {
            signer['getSignedUrlV4'](CONFIG);
          },
          {
            message: `Max allowed expiration is seven days (${SEVEN_DAYS} seconds).`,
          }
        );
      });

      describe('headers', () => {
        it('should add path-styled host header', async () => {
          const getCanonicalHeaders = sandbox
            .stub(signer, 'getCanonicalHeaders')
            .returns('');

          await signer['getSignedUrlV4'](CONFIG);
          const arg = getCanonicalHeaders.getCall(0).args[0];
          assert.strictEqual(
            arg.host,
            PATH_STYLED_HOST.replace('https://', '')
          );
        });

        it('should add cname as host header', async () => {
          CONFIG.cname = 'http://www.example.com';
          const getCanonicalHeaders = sandbox
            .stub(signer, 'getCanonicalHeaders')
            .returns('');

          await signer['getSignedUrlV4'](CONFIG);
          const arg = getCanonicalHeaders.getCall(0).args[0];
          assert.strictEqual(arg.host, 'www.example.com');
        });

        it('should strip trailing slashes from host', async () => {
          CONFIG.cname = 'http://www.example.com//';
          const getCanonicalHeaders = sandbox
            .stub(signer, 'getCanonicalHeaders')
            .returns('');

          await signer['getSignedUrlV4'](CONFIG);
          const arg = getCanonicalHeaders.getCall(0).args[0];
          assert.strictEqual(arg.host, 'www.example.com');
        });

        it('should add Content-MD5 to header', async () => {
          CONFIG.contentMd5 = 'md5-hash';
          const getCanonicalHeaders = sandbox
            .stub(signer, 'getCanonicalHeaders')
            .returns('');

          await signer['getSignedUrlV4'](CONFIG);
          const arg = getCanonicalHeaders.getCall(0).args[0];
          assert.strictEqual(arg['content-md5'], CONFIG.contentMd5);
        });

        it('should add Content-Type to header', async () => {
          CONFIG.contentType = 'application/octet-stream';
          const getCanonicalHeaders = sandbox
            .stub(signer, 'getCanonicalHeaders')
            .returns('');

          await signer['getSignedUrlV4'](CONFIG);
          const arg = getCanonicalHeaders.getCall(0).args[0];
          assert.strictEqual(arg['content-type'], CONFIG.contentType);
        });

        it('should merge extensionHeaders', async () => {
          CONFIG = {
            extensionHeaders: {
              'x-goog-content-sha256':
                '76af7efae0d034d1e3335ed1b90f24b6cadf2bf1',
            },
            cname: 'http://www.example.com',
            contentMd5: 'md5-hash',
            contentType: 'application/octet-stream',
            ...CONFIG,
          };

          const getCanonicalHeaders = sandbox
            .stub(signer, 'getCanonicalHeaders')
            .returns('');

          await signer['getSignedUrlV4'](CONFIG);
          const arg = getCanonicalHeaders.getCall(0).args[0];

          assert.deepStrictEqual(arg, {
            ...CONFIG.extensionHeaders,
            host: CONFIG.cname!.replace('http://', ''),
            'content-md5': CONFIG.contentMd5,
            'content-type': CONFIG.contentType,
          });
        });

        it('should throw if x-goog-content-sha256 header is not a hash', () => {
          CONFIG = {
            extensionHeaders: {
              'x-goog-content-sha256': 'not-a-hash',
            },
            ...CONFIG,
          };

          assert.throws(() => {
            signer['getSignedUrlV4'](CONFIG),
              SignerExceptionMessages.X_GOOG_CONTENT_SHA256;
          });
        });
      });

      describe('query parameters', () => {
        let getCanonicalQueryParams: sinon.SinonStub<[Query]>;
        beforeEach(() => {
          getCanonicalQueryParams = sandbox
            .stub(signer, 'getCanonicalQueryParams')
            .returns('');
        });

        it('should populate X-Goog-Algorithm', async () => {
          const query = (await signer['getSignedUrlV4'](CONFIG)) as Query;
          const arg = getCanonicalQueryParams.getCall(0).args[0];

          assert.strictEqual(arg['X-Goog-Algorithm'], 'GOOG4-RSA-SHA256');
          assert.strictEqual(query['X-Goog-Algorithm'], 'GOOG4-RSA-SHA256');
        });

        it('should populate X-Goog-Credential', async () => {
          const query = (await signer['getSignedUrlV4'](CONFIG)) as Query;
          const arg = getCanonicalQueryParams.getCall(0).args[0];

          const datestamp = dateFormat.format(NOW, 'YYYYMMDD', true);
          const credentialScope = `${datestamp}/auto/storage/goog4_request`;
          const EXPECTED_CREDENTIAL = `${CLIENT_EMAIL}/${credentialScope}`;

          assert.strictEqual(arg['X-Goog-Credential'], EXPECTED_CREDENTIAL);
          assert.strictEqual(query['X-Goog-Credential'], EXPECTED_CREDENTIAL);
        });

        it('should populate X-Goog-Date', async () => {
          const dateISO = dateFormat.format(NOW, 'YYYYMMDD[T]HHmmss[Z]', true);

          const query = (await signer['getSignedUrlV4'](CONFIG)) as Query;
          const arg = getCanonicalQueryParams.getCall(0).args[0];

          assert.strictEqual(arg['X-Goog-Date'], dateISO);
          assert.strictEqual(query['X-Goog-Date'], dateISO);
        });

        it('should populate X-Goog-Expires', async () => {
          const query = (await signer['getSignedUrlV4'](CONFIG)) as Query;
          const arg = getCanonicalQueryParams.getCall(0).args[0];

          assert.strictEqual(arg['X-Goog-Expires'], '2');
          assert.strictEqual(query['X-Goog-Expires'], '2');
        });

        it('should lowercase and sort signed headers, and populate X-Goog-SignedHeaders', async () => {
          CONFIG.extensionHeaders = {
            'x-foo': 'bar',
            'X-Goog-acl': 'public-read',
          };

          const query = (await signer['getSignedUrlV4'](CONFIG)) as Query;
          const arg = getCanonicalQueryParams.getCall(0).args[0];

          assert.strictEqual(
            arg['X-Goog-SignedHeaders'],
            'host;x-foo;x-goog-acl'
          );
          assert.strictEqual(
            query['X-Goog-SignedHeaders'],
            'host;x-foo;x-goog-acl'
          );
        });

        it('should merge user-provided queryParams', async () => {
          CONFIG.queryParams = {
            foo: 'bar',
          };

          const query = (await signer['getSignedUrlV4'](CONFIG)) as Query;
          const arg = getCanonicalQueryParams.getCall(0).args[0];

          assert.strictEqual(arg['foo'], 'bar');
          assert.strictEqual(query['foo'], 'bar');
        });
      });

      it('should build canonical request', async () => {
        CONFIG.extensionHeaders = {
          'x-foo': 'bar',
          'x-goog-content-sha256': '76af7efae0d034d1e3335ed1b90f24b6cadf2bf1',
        };
        CONFIG.file = 'file-name.png';
        sinon.stub(signer, 'getCanonicalHeaders').returns('canonical-headers');
        sinon
          .stub(signer, 'getCanonicalQueryParams')
          .returns('canonical-query');
        const getCanonicalRequest = sinon.spy(signer, 'getCanonicalRequest');

        await signer['getSignedUrlV4'](CONFIG);
        const args = getCanonicalRequest.getCall(0).args;

        assert.strictEqual(args[0], CONFIG.method);
        assert.strictEqual(args[1], '/bucket-name/file-name.png');
        assert.strictEqual(args[2], 'canonical-query');
        assert.strictEqual(args[3], 'canonical-headers');
        assert.strictEqual(args[4], 'host;x-foo;x-goog-content-sha256');
        assert.strictEqual(args[5], '76af7efae0d034d1e3335ed1b90f24b6cadf2bf1');
      });

      it('should compute SHA256 digest in hex on canonical request', async () => {
        sinon.stub(signer, 'getCanonicalRequest').returns('canonical-request');
        const authClientSign = sinon
          .stub(authClient, 'sign')
          .resolves('signature');

        await signer['getSignedUrlV4'](CONFIG);
        const blobToSign = authClientSign.getCall(0).args[0];

        const canonicalRequestHash = crypto
          .createHash('sha256')
          .update('canonical-request')
          .digest('hex');

        assert(blobToSign.endsWith(canonicalRequestHash));
      });

      it('should compose blobToSign', async () => {
        const datestamp = dateFormat.format(NOW, 'YYYYMMDD', true);
        const credentialScope = `${datestamp}/auto/storage/goog4_request`;
        const dateISO = dateFormat.format(NOW, 'YYYYMMDD[T]HHmmss[Z]', true);

        const authClientSign = sinon
          .stub(authClient, 'sign')
          .resolves('signature');

        await signer['getSignedUrlV4'](CONFIG);
        const blobToSign = authClientSign.getCall(0).args[0];

        assert(
          blobToSign.startsWith(
            ['GOOG4-RSA-SHA256', dateISO, credentialScope].join('\n')
          )
        );
      });

      it('rejects with SigningError on signing Error', () => {
        const err = new Error('my-err');
        err.stack = 'some-stack-trace';
        sinon.stub(authClient, 'sign').rejects(err);

        assert.rejects(() => signer['getSignedUrlV4'](CONFIG), {
          name: 'SigningError',
          message: 'my-err',
          stack: 'some-stack-trace',
        });
      });

      it('should returns query params with signature', async () => {
        CONFIG.queryParams = {
          foo: 'bar',
        };

        const query = (await signer['getSignedUrlV4'](CONFIG)) as Query;
        const signatureInHex = Buffer.from('signature', 'base64').toString(
          'hex'
        );
        assert.strictEqual(query['X-Goog-Signature'], signatureInHex);
      });
    });

    describe('getCanonicalHeaders', () => {
      const signer = new URLSigner(authClient, bucket, file);

      it('should accept multi-valued header as an array', () => {
        const headers = {
          foo: ['bar', 'pub'],
        };

        const canonical = signer.getCanonicalHeaders(headers);
        assert.strictEqual(canonical, 'foo:bar,pub\n');
      });

      it('should lowercase and then sort header names', () => {
        const headers = {
          B: 'foo',
          a: 'bar',
        };

        const canonical = signer.getCanonicalHeaders(headers);
        assert.strictEqual(canonical, 'a:bar\nb:foo\n');
      });

      it('should trim leading and trailing space', () => {
        const headers = {
          foo: '  bar   ',
          my: '\t  header  ',
        };

        const canonical = signer.getCanonicalHeaders(headers);
        assert.strictEqual(canonical, 'foo:bar\nmy:header\n');
      });

      it('should convert sequential spaces into single space', () => {
        const headers = {
          foo: 'a\t\t\tbar   pub',
        };

        const canonical = signer.getCanonicalHeaders(headers);
        assert.strictEqual(canonical, 'foo:a bar pub\n');
      });
    });

    describe('getCanonicalRequest', () => {
      const signer = new URLSigner(authClient, bucket, file);

      it('should return canonical request string with unsigned-payload', () => {
        const args: [string, string, string, string, string] = [
          'DELETE',
          'path',
          'query',
          'headers',
          'signedHeaders',
        ];

        const canonical = signer.getCanonicalRequest(...args);

        const EXPECTED = [...args, 'UNSIGNED-PAYLOAD'].join('\n');
        assert.strictEqual(canonical, EXPECTED);
      });

      it('should include contentSha256 value if not undefined', () => {
        const SHA = '76af7efae0d034d1e3335ed1b90f24b6cadf2bf1';
        const canonical = signer.getCanonicalRequest(
          'DELETE',
          'path',
          'query',
          'headers',
          'signedHeaders',
          SHA
        );

        const EXPECTED = [
          'DELETE',
          'path',
          'query',
          'headers',
          'signedHeaders',
          SHA,
        ].join('\n');
        assert.strictEqual(canonical, EXPECTED);
      });
    });

    describe('getCanonicalQueryParams', () => {
      const signer = new URLSigner(authClient, bucket, file);

      it('should encode key', () => {
        const key = 'AZ!*()*%/f';
        const query: Query = {};
        query[key] = 'value';
        const canonical = signer.getCanonicalQueryParams(query);

        const EXPECTED = `${encodeURI(key, true)}=value`;
        assert.strictEqual(canonical, EXPECTED);
      });

      it('should encode value', () => {
        const value = 'AZ!*()*%/f';
        const query = {key: value};
        const canonical = signer.getCanonicalQueryParams(query);

        const EXPECTED = `key=${encodeURI(value, true)}`;
        assert.strictEqual(canonical, EXPECTED);
      });

      it('should sort by key', () => {
        const query = {
          B: 'bar',
          A: 'foo',
        };

        const canonical = signer.getCanonicalQueryParams(query);
        const EXPECTED = 'A=foo&B=bar';
        assert.strictEqual(canonical, EXPECTED);
      });
    });

    describe('getResourcePath', () => {
      const signer = new URLSigner(authClient, bucket, file);

      it('should not include bucket with cname', () => {
        const path = signer.getResourcePath(true, bucket.name, file.name);
        assert.strictEqual(path, `/${file.name}`);
      });

      it('should include file name', () => {
        const path = signer.getResourcePath(false, bucket.name, file.name);
        assert.strictEqual(path, `/${bucket.name}/${file.name}`);
      });

      it('should return path with no file name', () => {
        const path = signer.getResourcePath(false, bucket.name);
        assert.strictEqual(path, `/${bucket.name}`);
      });
    });

    describe('parseExpires', () => {
      const signer = new URLSigner(authClient, bucket, file);

      it('throws invalid date', () => {
        assert.throws(() => signer.parseExpires('2019-31-12T25:60:60Z'), {
          message: ExceptionMessages.EXPIRATION_DATE_INVALID,
        });
      });

      it('throws if expiration is in the past', () => {
        assert.throws(() => signer.parseExpires(NOW.valueOf() - 1, NOW), {
          message: ExceptionMessages.EXPIRATION_DATE_PAST,
        });
      });

      it('returns expiration date in seconds', () => {
        const expires = signer.parseExpires(NOW);
        assert.strictEqual(expires, Math.round(NOW.valueOf() / 1000));
      });
    });
  });

  describe('SigningError', () => {
    it('should extend from Error', () => {
      const err = new SigningError();
      assert(err instanceof Error);
      assert.strictEqual(err.name, 'SigningError');
    });
  });
});
