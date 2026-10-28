/**
 * Copyright 2026 Google LLC
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
import * as vm from 'vm';
import {describe, it} from 'mocha';
import * as grpc from '@grpc/grpc-js';
import {Span} from '@opentelemetry/api';
import {GoogleError} from '../../src/googleError';
import {Status} from '../../src/status';
import {
  connectionCodes,
  requestCodes,
  requestBodyCodes,
  decodeCodes,
  redirectCodes,
  genericClasses,
  preConnectionCodes,
  DEPTH_TO_CHECK,
  resolveErrorInfoReason,
  resolveServerErrorCode,
  isServerSideError,
  resolveClientNetworkOrOperationalError,
  resolveLanguageSpecificErrorType,
  resolveErrorType,
  resolveExceptionType,
  resolveSystemErrorCode,
  resolveRpcStatusName,
  resolveHttpStatusCode,
  resolveErrorMessage,
  resolveExceptionMessage,
  resolveResponseStatusCode,
  resolveServerExceptionDetails,
  recordExceptionEvent,
  isPreConnectionFailure,
  safeJsonStringify,
} from '../../src/observability/errorUtil';

describe('errorUtil', () => {
  describe('error code and class constants', () => {
    it('defines connectionCodes containing common network errors', () => {
      assert(Array.isArray(connectionCodes));
      assert(connectionCodes.includes('ECONNREFUSED'));
      assert(connectionCodes.includes('ENOTFOUND'));
    });

    it('defines requestCodes containing request error codes', () => {
      assert(Array.isArray(requestCodes));
      assert(requestCodes.includes('ERR_INVALID_ARG_TYPE'));
      assert(requestCodes.includes('ERR_INVALID_URL'));
    });

    it('defines requestBodyCodes containing stream error codes', () => {
      assert(Array.isArray(requestBodyCodes));
      assert(requestBodyCodes.includes('ERR_STREAM_WRITE_AFTER_END'));
    });

    it('defines decodeCodes containing buffer error codes', () => {
      assert(Array.isArray(decodeCodes));
      assert(decodeCodes.includes('ERR_BUFFER_OUT_OF_BOUNDS'));
    });

    it('defines redirectCodes containing redirect error codes', () => {
      assert(Array.isArray(redirectCodes));
      assert(redirectCodes.includes('ERR_TOO_MANY_REDIRECTS'));
    });

    it('defines genericClasses containing standard base error types', () => {
      assert(Array.isArray(genericClasses));
      assert(genericClasses.includes('Error'));
      assert(genericClasses.includes('GoogleError'));
      assert(genericClasses.includes('Object'));
      assert(genericClasses.includes('DOMException'));
    });

    it('defines preConnectionCodes containing pre-connection error codes', () => {
      assert(Array.isArray(preConnectionCodes));
      assert(preConnectionCodes.includes('ECONNREFUSED'));
      assert(preConnectionCodes.includes('ENOTFOUND'));
      assert(preConnectionCodes.includes('ERR_INVALID_URL'));
    });

    it('defines DEPTH_TO_CHECK constant as 10', () => {
      assert.strictEqual(DEPTH_TO_CHECK, 10);
    });
  });

  describe('error classification and resolution helpers', () => {
    it('resolveErrorInfoReason handles direct reason, statusDetails, and cause', () => {
      assert.strictEqual(
        resolveErrorInfoReason({reason: 'RATE_LIMIT_EXCEEDED'}),
        'RATE_LIMIT_EXCEEDED',
      );
      assert.strictEqual(
        resolveErrorInfoReason({
          statusDetails: [{reason: 'SERVICE_DISABLED'}],
        }),
        'SERVICE_DISABLED',
      );
      assert.strictEqual(
        resolveErrorInfoReason({
          statusDetails: [{errorInfo: {reason: 'QUOTA_EXCEEDED'}}],
        }),
        'QUOTA_EXCEEDED',
      );
      assert.strictEqual(
        resolveErrorInfoReason({
          statusDetails: [
            {errorInfo: {reason: ''}},
            {errorInfo: {reason: 'VALID_REASON'}},
          ],
        }),
        'VALID_REASON',
      );
      assert.strictEqual(
        resolveErrorInfoReason({
          statusDetails: [{errorInfo: {reason: ''}}],
        }),
        undefined,
      );
      assert.strictEqual(
        resolveErrorInfoReason({
          cause: {reason: 'ACCESS_TOKEN_EXPIRED'},
        }),
        'ACCESS_TOKEN_EXPIRED',
      );
      assert.strictEqual(resolveErrorInfoReason(new Error('none')), undefined);
    });

    it('resolveServerErrorCode handles http and grpc', () => {
      const httpErr = Object.assign(new Error('Not Found'), {
        httpStatusCode: 404,
      });
      const grpcErr = Object.assign(new Error('Not Found'), {
        code: Status.NOT_FOUND,
      });
      assert.strictEqual(resolveServerErrorCode(httpErr, 'http'), '404');
      assert.strictEqual(resolveServerErrorCode(grpcErr, 'grpc'), 'NOT_FOUND');
      assert.strictEqual(resolveServerErrorCode(grpcErr, 'http'), undefined);
      assert.strictEqual(resolveServerErrorCode(httpErr, 'grpc'), undefined);
    });

    it('resolveServerErrorCode handles plain error objects without stack property', () => {
      assert.strictEqual(
        resolveServerErrorCode({httpStatusCode: 500}, 'http'),
        '500',
      );
      assert.strictEqual(
        resolveServerErrorCode({code: Status.NOT_FOUND}, 'grpc'),
        'NOT_FOUND',
      );
      assert.strictEqual(
        resolveServerErrorCode({code: 5}, 'grpc'),
        'NOT_FOUND',
      );
      assert.strictEqual(
        resolveServerErrorCode({httpStatusCode: 500}, 'grpc'),
        undefined,
      );
      assert.strictEqual(resolveServerErrorCode({code: 5}, 'http'), undefined);
    });

    it('isServerSideError recognizes plain error objects with valid status codes', () => {
      assert.strictEqual(
        isServerSideError({httpStatusCode: 500}, 'http'),
        true,
      );
      assert.strictEqual(
        isServerSideError({code: Status.NOT_FOUND}, 'grpc'),
        true,
      );
      assert.strictEqual(isServerSideError({code: 5}, 'grpc'), true);
      assert.strictEqual(
        isServerSideError({httpStatusCode: 500}, 'grpc'),
        false,
      );
      assert.strictEqual(isServerSideError({code: 5}, 'http'), false);
      assert.strictEqual(
        isServerSideError({message: 'no code'}, 'grpc'),
        false,
      );
      assert.strictEqual(
        isServerSideError({message: 'no code'}, 'http'),
        false,
      );
    });

    it('resolveClientNetworkOrOperationalError maps timeout, connection, request, body, decode, redirect, and auth errors', () => {
      // CLIENT_TIMEOUT
      assert.strictEqual(
        resolveClientNetworkOrOperationalError(
          new DOMException('timed out', 'TimeoutError'),
        ),
        'CLIENT_TIMEOUT',
      );
      assert.strictEqual(
        resolveClientNetworkOrOperationalError({code: 'ETIMEDOUT'}),
        'CLIENT_TIMEOUT',
      );
      assert.strictEqual(
        resolveClientNetworkOrOperationalError({code: 'ESOCKETTIMEDOUT'}),
        'CLIENT_TIMEOUT',
      );
      assert.strictEqual(
        resolveClientNetworkOrOperationalError(
          new GoogleError('Total timeout of API exceeded before completion'),
        ),
        'CLIENT_TIMEOUT',
      );

      // CLIENT_CONNECTION_ERROR
      for (const code of [
        'ENOTFOUND',
        'EAI_AGAIN',
        'ECONNREFUSED',
        'ECONNRESET',
        'EHOSTUNREACH',
        'ENETUNREACH',
        'CERT_HAS_EXPIRED',
        'UNABLE_TO_VERIFY_LEAF_SIGNATURE',
        'ERR_TLS_CERT_ALTNAME_INVALID',
        'ERR_SSL_PROTOCOL_ERROR',
      ]) {
        assert.strictEqual(
          resolveClientNetworkOrOperationalError({code}),
          'CLIENT_CONNECTION_ERROR',
          `Expected ${code} to resolve to CLIENT_CONNECTION_ERROR`,
        );
      }

      // CLIENT_REQUEST_ERROR
      assert.strictEqual(
        resolveClientNetworkOrOperationalError({
          code: 'ERR_INVALID_ARG_TYPE',
        }),
        'CLIENT_REQUEST_ERROR',
      );
      assert.strictEqual(
        resolveClientNetworkOrOperationalError({code: 'ERR_INVALID_URL'}),
        'CLIENT_REQUEST_ERROR',
      );
      assert.strictEqual(
        resolveClientNetworkOrOperationalError(
          new URIError('malformed URI sequence'),
        ),
        'CLIENT_REQUEST_ERROR',
      );

      // CLIENT_REQUEST_BODY_ERROR
      assert.strictEqual(
        resolveClientNetworkOrOperationalError({
          code: 'ERR_STREAM_WRITE_AFTER_END',
        }),
        'CLIENT_REQUEST_BODY_ERROR',
      );

      // CLIENT_RESPONSE_DECODE_ERROR
      class DecodeError extends Error {}
      assert.strictEqual(
        resolveClientNetworkOrOperationalError(
          new DecodeError('failed to decode response'),
        ),
        'CLIENT_RESPONSE_DECODE_ERROR',
      );
      assert.strictEqual(
        resolveClientNetworkOrOperationalError(
          new SyntaxError('Unexpected token < in JSON'),
        ),
        'CLIENT_RESPONSE_DECODE_ERROR',
      );

      // CLIENT_REDIRECT_ERROR
      assert.strictEqual(
        resolveClientNetworkOrOperationalError({
          code: 'ERR_TOO_MANY_REDIRECTS',
        }),
        'CLIENT_REDIRECT_ERROR',
      );

      // CLIENT_AUTHENTICATION_ERROR
      class GoogleAuthError extends Error {}
      assert.strictEqual(
        resolveClientNetworkOrOperationalError(
          new GoogleAuthError('Missing credentials'),
        ),
        'CLIENT_AUTHENTICATION_ERROR',
      );
      assert.strictEqual(
        resolveClientNetworkOrOperationalError({code: 'ERR_NO_CREDENTIALS'}),
        'CLIENT_AUTHENTICATION_ERROR',
      );

      assert.strictEqual(
        resolveClientNetworkOrOperationalError(new Error('normal error')),
        undefined,
      );
    });

    it('resolveLanguageSpecificErrorType excludes generic classes and unwraps cause', () => {
      class CustomRpcError extends Error {}
      assert.strictEqual(
        resolveLanguageSpecificErrorType(
          new DOMException('Operation aborted', 'AbortError'),
        ),
        'AbortError',
      );
      assert.strictEqual(
        resolveLanguageSpecificErrorType(new RangeError('out of bounds')),
        'RangeError',
      );
      assert.strictEqual(
        resolveLanguageSpecificErrorType(new CustomRpcError('custom')),
        'CustomRpcError',
      );
      assert.strictEqual(
        resolveLanguageSpecificErrorType(new Error('generic')),
        undefined,
      );
      const intermediate = new GoogleError('intermediate');
      intermediate.cause = new TypeError('inner');
      const outer = new GoogleError('outer');
      outer.cause = intermediate;
      assert.strictEqual(resolveLanguageSpecificErrorType(outer), 'TypeError');
    });

    describe('resolveErrorType', () => {
      it('implements the 5-tier precedence hierarchy', () => {
        // Tier 1 beats Tier 2 (gRPC and HTTP)
        const t1Grpc = Object.assign(new GoogleError('foo'), {
          reason: 'MY_REASON',
          code: Status.INVALID_ARGUMENT,
        });
        assert.strictEqual(resolveErrorType(t1Grpc, 'grpc'), 'MY_REASON');

        const t1Http = Object.assign(new GoogleError('service disabled'), {
          reason: 'SERVICE_DISABLED',
          httpStatusCode: 403,
        });
        assert.strictEqual(
          resolveErrorType(t1Http, 'http'),
          'SERVICE_DISABLED',
        );

        // Tier 2 beats Tier 3
        const t2 = Object.assign(new GoogleError('foo'), {
          code: Status.PERMISSION_DENIED,
        });
        assert.strictEqual(resolveErrorType(t2, 'grpc'), 'PERMISSION_DENIED');

        // Tier 3 beats Tier 4
        const t3 = Object.assign(new TypeError('invalid type'), {
          code: 'ERR_INVALID_ARG_TYPE',
        });
        assert.strictEqual(
          resolveErrorType(t3, 'grpc'),
          'CLIENT_REQUEST_ERROR',
        );

        // Tier 4 beats Tier 5
        const t4 = new TypeError('normal type error');
        assert.strictEqual(resolveErrorType(t4, 'grpc'), 'TypeError');

        // Tier 5 fallback
        assert.strictEqual(
          resolveErrorType(new Error('generic'), 'grpc'),
          'INTERNAL',
        );
        assert.strictEqual(
          resolveErrorType(new GoogleError('unexpected'), 'grpc'),
          'INTERNAL',
        );
        assert.strictEqual(resolveErrorType('string', 'grpc'), 'INTERNAL');
      });

      it('resolves error.type by transport and unwraps client-side causes appropriately', () => {
        // Unmapped HTTP status is preserved rather than collapsed to mapped gRPC status
        const teapot = Object.assign(new GoogleError('teapot'), {
          code: Status.FAILED_PRECONDITION,
          httpStatusCode: 418,
        });
        assert.strictEqual(resolveErrorType(teapot, 'http'), '418');
        assert.strictEqual(
          resolveErrorType(teapot, 'grpc'),
          'FAILED_PRECONDITION',
        );

        // HTTP call without HTTP response falls through to Tier 3 client error
        const deadlineErr = Object.assign(
          new GoogleError('Deadline exceeded'),
          {
            code: Status.DEADLINE_EXCEEDED,
          },
        );
        assert.strictEqual(
          resolveErrorType(deadlineErr, 'http'),
          'CLIENT_TIMEOUT',
        );

        // Wrapped cause takes precedence when outer GoogleError only has mapped gRPC code
        const connCause = Object.assign(new Error('connect ECONNREFUSED'), {
          code: 'ECONNREFUSED',
        });
        const wrappedConn = Object.assign(new GoogleError(connCause.message), {
          code: Status.UNAVAILABLE,
          cause: connCause,
        });
        assert.strictEqual(
          resolveErrorType(wrappedConn, 'http'),
          'CLIENT_CONNECTION_ERROR',
        );
        assert.strictEqual(
          resolveErrorType(wrappedConn, 'grpc'),
          'CLIENT_CONNECTION_ERROR',
        );

        const abortCause = new DOMException('Operation aborted', 'AbortError');
        const wrappedAbort = Object.assign(new GoogleError('aborted'), {
          code: Status.CANCELLED,
          cause: abortCause,
        });
        assert.strictEqual(
          resolveErrorType(wrappedAbort, 'grpc'),
          'AbortError',
        );

        // Outer HTTP response status takes precedence over inner cause exception type
        const httpWithCause = Object.assign(
          new GoogleError('service unavailable'),
          {
            code: Status.UNAVAILABLE,
            httpStatusCode: 503,
            cause: new TypeError('inner'),
          },
        );
        assert.strictEqual(resolveErrorType(httpWithCause, 'http'), '503');
      });

      it('falls back to INTERNAL for zero, out-of-range, or empty string status codes', () => {
        assert.strictEqual(
          resolveErrorType(
            Object.assign(new Error('unset'), {code: 0}),
            'grpc',
          ),
          'INTERNAL',
        );
        assert.strictEqual(
          resolveErrorType(
            Object.assign(new Error('bogus'), {code: 4242}),
            'grpc',
          ),
          'INTERNAL',
        );
        assert.strictEqual(
          resolveErrorType(
            Object.assign(new Error('empty'), {code: ''}),
            'grpc',
          ),
          'INTERNAL',
        );
      });
    });

    describe('resolveExceptionType', () => {
      it('names the class rather than the status code or mutated name', () => {
        const errorWithCode = Object.assign(new GoogleError('not found'), {
          code: Status.NOT_FOUND,
          name: 'CustomRpcError',
        });
        assert.strictEqual(resolveExceptionType(errorWithCode), 'GoogleError');

        class RetryError extends GoogleError {}
        const subclassErr = new RetryError('retries exhausted');
        assert.strictEqual(subclassErr.name, 'Error');
        assert.strictEqual(resolveExceptionType(subclassErr), 'RetryError');
      });

      it('resolves built-in classes, falls back to name on bare Error, and reports Error when unset', () => {
        assert.strictEqual(
          resolveExceptionType(new TypeError('bad type')),
          'TypeError',
        );
        const namedErr = new Error('aborted');
        namedErr.name = 'AbortError';
        assert.strictEqual(resolveExceptionType(namedErr), 'AbortError');
        assert.strictEqual(resolveExceptionType(new Error('generic')), 'Error');
      });
    });

    it('resolveSystemErrorCode, resolveRpcStatusName, resolveHttpStatusCode, and resolveErrorMessage inspect errors and causes', () => {
      const wrappedSys = new GoogleError('wrapped');
      wrappedSys.cause = {code: 'ECONNREFUSED'};
      assert.strictEqual(resolveSystemErrorCode(wrappedSys), 'ECONNREFUSED');

      assert.strictEqual(
        resolveRpcStatusName({code: Status.UNAVAILABLE}),
        'UNAVAILABLE',
      );
      assert.strictEqual(resolveRpcStatusName({code: Status.OK}), undefined);

      assert.strictEqual(resolveHttpStatusCode({httpStatusCode: 503}), 503);

      // resolveErrorMessage cases: Error, error-shaped object, cross-realm Error, non-string message, empty message, primitive
      assert.strictEqual(resolveErrorMessage({message: 'msg'}), 'msg');
      const crossRealm = vm.runInNewContext(
        "new Error('cross realm boom')",
      ) as Error;
      assert.strictEqual(crossRealm instanceof Error, false);
      assert.strictEqual(resolveErrorMessage(crossRealm), 'cross realm boom');
      assert.strictEqual(
        resolveErrorMessage({message: {nested: 'object'}}),
        '[object Object]',
      );
      assert.strictEqual(resolveErrorMessage(new Error()), '');
      assert.strictEqual(resolveErrorMessage('raw'), 'raw');
    });

    it('resolveResponseStatusCode defaults successful calls to OK / 200 and resolves failed calls from the error', () => {
      assert.deepStrictEqual(resolveResponseStatusCode('grpc', false), {
        rpcStatusName: 'OK',
      });
      assert.deepStrictEqual(resolveResponseStatusCode('http', false), {
        httpStatusCode: 200,
      });

      // Failed calls resolve only the status for the call's transport.
      const err = Object.assign(new GoogleError('unavailable'), {
        code: Status.UNAVAILABLE,
        httpStatusCode: 503,
      });
      assert.deepStrictEqual(resolveResponseStatusCode('grpc', true, err), {
        rpcStatusName: 'UNAVAILABLE',
      });
      assert.deepStrictEqual(resolveResponseStatusCode('http', true, err), {
        httpStatusCode: 503,
      });
    });

    it('resolveExceptionMessage prefers server error details for server-side errors', () => {
      const grpcErr = Object.assign(new GoogleError('Wrapper message'), {
        code: Status.INVALID_ARGUMENT,
        details: 'Detailed backend message',
      });
      assert.strictEqual(
        resolveExceptionMessage(grpcErr, 'grpc'),
        'Detailed backend message',
      );
      // A gRPC status is not a server response on the HTTP transport.
      assert.strictEqual(
        resolveExceptionMessage(grpcErr, 'http'),
        'Wrapper message',
      );

      const httpErr = Object.assign(new GoogleError('HTTP wrapper'), {
        httpStatusCode: 400,
        details: 'Bad HTTP Request',
      });
      assert.strictEqual(
        resolveExceptionMessage(httpErr, 'http'),
        'Bad HTTP Request',
      );

      // Server-side errors without details and client-side errors use e.message.
      const noDetailsErr = Object.assign(new GoogleError('No details'), {
        code: Status.UNAVAILABLE,
      });
      assert.strictEqual(
        resolveExceptionMessage(noDetailsErr, 'grpc'),
        'No details',
      );
      assert.strictEqual(
        resolveExceptionMessage(new TypeError('bad type'), 'grpc'),
        'bad type',
      );
    });

    it('resolveExceptionMessage returns a string for non-Error throws', () => {
      assert.strictEqual(
        resolveExceptionMessage('raw failure', 'grpc'),
        'raw failure',
      );
      assert.strictEqual(resolveExceptionMessage(null, 'grpc'), 'null');
      assert.strictEqual(
        resolveExceptionMessage(undefined, 'http'),
        'undefined',
      );
    });

    it('recordExceptionEvent records exception.type and optionally exception.message', () => {
      const events: Array<{
        name: string;
        attributes?: Record<string, unknown>;
      }> = [];
      const fakeSpan = {
        addEvent(name: string, attributes?: Record<string, unknown>) {
          events.push({name, attributes});
        },
      } as unknown as Span;

      const serverErr = Object.assign(new GoogleError('Wrapper message'), {
        code: Status.INVALID_ARGUMENT,
        details: 'Detailed backend message',
      });

      recordExceptionEvent(fakeSpan, serverErr, 'grpc', false);
      assert.deepStrictEqual(events[0], {
        name: 'exception',
        attributes: {
          'exception.type': 'GoogleError',
        },
      });

      recordExceptionEvent(fakeSpan, serverErr, 'grpc', true);
      assert.deepStrictEqual(events[1], {
        name: 'exception',
        attributes: {
          'exception.type': 'GoogleError',
          'exception.message': 'Detailed backend message',
        },
      });
    });
  });

  describe('safeJsonStringify', () => {
    it('returns undefined for undefined and serializes primitives', () => {
      assert.strictEqual(safeJsonStringify(undefined), undefined);
      assert.strictEqual(safeJsonStringify(null), 'null');
      assert.strictEqual(safeJsonStringify(123), '123');
      assert.strictEqual(safeJsonStringify('abc'), '"abc"');
      assert.strictEqual(safeJsonStringify(true), 'true');
    });

    it('serializes BigInt values as strings', () => {
      const obj = {big: 9007199254740993n, list: [1n, 2n]};
      assert.strictEqual(
        safeJsonStringify(obj),
        '{"big":"9007199254740993","list":["1","2"]}',
      );
    });

    it('handles circular references in objects', () => {
      const circular: Record<string, unknown> = {name: 'test'};
      circular.self = circular;
      assert.strictEqual(
        safeJsonStringify(circular),
        '{"name":"test","self":"[Circular]"}',
      );
    });

    it('handles circular references in arrays', () => {
      const arr: unknown[] = [1, 2];
      arr.push(arr);
      assert.strictEqual(safeJsonStringify(arr), '[1,2,"[Circular]"]');
    });

    it('handles deep circular references', () => {
      const root: Record<string, unknown> = {
        a: {
          b: {
            c: {},
          },
        },
      };
      (root.a as Record<string, unknown>).b = root;
      assert.strictEqual(safeJsonStringify(root), '{"a":{"b":"[Circular]"}}');
    });

    it('does not falsely mark shared references in DAGs as circular', () => {
      const shared = {sharedKey: 'sharedValue'};
      const dag = {first: shared, second: shared};
      assert.strictEqual(
        safeJsonStringify(dag),
        '{"first":{"sharedKey":"sharedValue"},"second":{"sharedKey":"sharedValue"}}',
      );
    });

    it('safely handles non-serializable objects and throwing getters without throwing', () => {
      const badObj = {
        get throwingProp() {
          throw new Error('getter threw');
        },
      };
      const result = safeJsonStringify(badObj);
      assert.strictEqual(result, '[object Object]');
    });

    it('safely handles objects with throwing toString without throwing', () => {
      const badObj = {
        get throwingProp() {
          throw new Error('getter threw');
        },
        toString() {
          throw new Error('toString threw');
        },
      };
      assert.strictEqual(safeJsonStringify(badObj), undefined);
    });
  });

  describe('isPreConnectionFailure', () => {
    it('handles circular references in cause without infinite recursion', () => {
      const circularError = new GoogleError('circular error');
      circularError.cause = circularError;
      assert.strictEqual(isPreConnectionFailure(circularError), false);

      const errA = new GoogleError('errA');
      const errB = new GoogleError('errB');
      errA.cause = errB;
      errB.cause = errA;
      assert.strictEqual(isPreConnectionFailure(errA), false);
    });

    it('handles deep cause chains (> DEPTH_TO_CHECK depth) without stack overflow', () => {
      const root = new GoogleError('root');
      let current = root;
      for (let i = 0; i < 20; i++) {
        const next = new GoogleError(`level-${i}`);
        current.cause = next;
        current = next;
      }
      assert.strictEqual(isPreConnectionFailure(root), false);
    });

    it('respects DEPTH_TO_CHECK limit when unwrapping cause chain', () => {
      // Error within DEPTH_TO_CHECK levels is detected
      const rootWithin = new GoogleError('root');
      let currWithin = rootWithin;
      for (let i = 0; i < DEPTH_TO_CHECK - 2; i++) {
        const next = new GoogleError(`level-${i}`);
        currWithin.cause = next;
        currWithin = next;
      }
      currWithin.cause = new TypeError('client validation failure');
      assert.strictEqual(isPreConnectionFailure(rootWithin), true);

      // Error deeper than DEPTH_TO_CHECK levels is not reached
      const rootDeeper = new GoogleError('root');
      let currDeeper = rootDeeper;
      for (let i = 0; i < DEPTH_TO_CHECK + 5; i++) {
        const next = new GoogleError(`level-${i}`);
        currDeeper.cause = next;
        currDeeper = next;
      }
      currDeeper.cause = new TypeError('too deep to find');
      assert.strictEqual(isPreConnectionFailure(rootDeeper), false);
    });

    it('identifies pre-connection errors directly and wrapped in GoogleError', () => {
      assert.strictEqual(
        isPreConnectionFailure(new TypeError('type err')),
        true,
      );
      assert.strictEqual(
        isPreConnectionFailure(new RangeError('range err')),
        true,
      );
      assert.strictEqual(isPreConnectionFailure(new URIError('uri err')), true);

      const wrappedType = new GoogleError('wrapped');
      wrappedType.cause = new TypeError('inner');
      assert.strictEqual(isPreConnectionFailure(wrappedType), true);

      const netErr = Object.assign(new Error('connect ECONNREFUSED'), {
        code: 'ECONNREFUSED',
      });
      const wrappedNet = new GoogleError('wrapped connection');
      wrappedNet.cause = netErr;
      assert.strictEqual(isPreConnectionFailure(wrappedNet), true);
    });

    it('returns false for server-side errors', () => {
      const grpcErr = Object.assign(new GoogleError('grpc err'), {
        code: Status.UNAVAILABLE,
      });
      assert.strictEqual(isPreConnectionFailure(grpcErr), false);

      const httpErr = Object.assign(new GoogleError('http err'), {
        httpStatusCode: 503,
      });
      assert.strictEqual(isPreConnectionFailure(httpErr), false);
    });

    it('returns true for non-Errors and primitives', () => {
      assert.strictEqual(isPreConnectionFailure(null), true);
      assert.strictEqual(isPreConnectionFailure('string throw'), true);
      assert.strictEqual(isPreConnectionFailure(123), true);
    });
  });

  describe('resolveServerExceptionDetails', () => {
    it('formats status details and metadata in resolveServerExceptionDetails for gRPC server errors', () => {
      const metadata = new grpc.Metadata();
      metadata.set('x-goog-request-id', 'req-123');
      const error = Object.assign(new GoogleError('Detailed server failure'), {
        code: Status.INVALID_ARGUMENT,
        details: 'Field name is invalid',
        statusDetails: [{field: 'name', description: 'must be non-empty'}],
        metadata,
        reason: 'INVALID_FIELD',
        domain: 'googleapis.com',
        errorInfoMetadata: {consumer: 'projects/123'},
      });

      const details = resolveServerExceptionDetails(error);
      assert.strictEqual(details.message, 'Field name is invalid');
      assert.strictEqual(
        details.stacktrace,
        'status_details: [{"field":"name","description":"must be non-empty"}]\n' +
          'metadata: {"x-goog-request-id":"req-123"}',
      );
    });

    it('formats status details and metadata in resolveServerExceptionDetails for HTTP fallback server errors', () => {
      const error = Object.assign(new GoogleError('HTTP server error'), {
        httpStatusCode: 400,
        details: 'Bad HTTP Request',
        statusDetails: 'Quota exceeded',
        metadata: {'content-type': 'application/json'},
      });

      const details = resolveServerExceptionDetails(error);
      assert.strictEqual(details.message, 'Bad HTTP Request');
      assert.strictEqual(
        details.stacktrace,
        'status_details: Quota exceeded\n' +
          'metadata: {"content-type":"application/json"}',
      );
    });

    it('encodes Buffer and Array of Buffers in metadata as base64', () => {
      const error = Object.assign(new GoogleError('Buffer error'), {
        metadata: {
          'bin-key': Buffer.from('hello'),
          'bin-array': [Buffer.from('foo'), 'bar', Buffer.from('baz')],
          'regular-key': 'value',
        },
      });
      const {stacktrace} = resolveServerExceptionDetails(error);
      assert.strictEqual(
        stacktrace,
        'metadata: {"bin-key":"aGVsbG8=","bin-array":["Zm9v","bar","YmF6"],"regular-key":"value"}',
      );
    });

    it('formats metadata safely without ReferenceError when Buffer is not defined', () => {
      const originalBuffer = (globalThis as Record<string, unknown>).Buffer;
      try {
        delete (globalThis as Record<string, unknown>).Buffer;
        const error = Object.assign(new GoogleError('Browser error'), {
          metadata: {
            'content-type': 'application/json',
            headers: ['x-goog-request-id', 'req-456'],
          },
        });
        const {stacktrace} = resolveServerExceptionDetails(error);
        assert.strictEqual(
          stacktrace,
          'metadata: {"content-type":"application/json","headers":["x-goog-request-id","req-456"]}',
        );
      } finally {
        (globalThis as Record<string, unknown>).Buffer = originalBuffer;
      }
    });

    it('safely formats statusDetails containing circular references', () => {
      const detail: Record<string, unknown> = {
        reason: 'RATE_LIMIT_EXCEEDED',
      };
      detail.self = detail;
      const error = Object.assign(
        new GoogleError('Circular statusDetails error'),
        {
          statusDetails: [detail],
        },
      );
      const {stacktrace} = resolveServerExceptionDetails(error);
      assert.strictEqual(
        stacktrace,
        'status_details: [{"reason":"RATE_LIMIT_EXCEEDED","self":"[Circular]"}]',
      );
    });

    it('safely formats statusDetails containing BigInt values', () => {
      const error = Object.assign(
        new GoogleError('BigInt statusDetails error'),
        {
          statusDetails: [{retryDelayNanos: 5000000000n}],
        },
      );
      const {stacktrace} = resolveServerExceptionDetails(error);
      assert.strictEqual(
        stacktrace,
        'status_details: [{"retryDelayNanos":"5000000000"}]',
      );
    });

    it('safely formats metadata containing circular references', () => {
      const meta: Record<string, unknown> = {'x-request-id': 'req-123'};
      meta.self = meta;
      const error = Object.assign(new GoogleError('Circular metadata error'), {
        metadata: meta,
      });
      const {stacktrace} = resolveServerExceptionDetails(error);
      assert.strictEqual(
        stacktrace,
        'metadata: {"x-request-id":"req-123","self":{"x-request-id":"req-123","self":"[Circular]"}}',
      );
    });

    it('safely formats metadata containing BigInt values', () => {
      const error = Object.assign(new GoogleError('BigInt metadata error'), {
        metadata: {'quota-consumed': 1000000000000n},
      });
      const {stacktrace} = resolveServerExceptionDetails(error);
      assert.strictEqual(
        stacktrace,
        'metadata: {"quota-consumed":"1000000000000"}',
      );
    });

    it('safely handles non-serializable throwing properties in metadata without throwing', () => {
      const badMeta = {
        get bad() {
          throw new Error('boom');
        },
      };
      const error = Object.assign(new GoogleError('Throwing metadata error'), {
        metadata: badMeta,
      });
      const {stacktrace} = resolveServerExceptionDetails(error);
      assert.strictEqual(stacktrace, 'metadata: [object Object]');
    });
  });

  describe('cause traversal circular reference protection in helpers', () => {
    it('resolveErrorInfoReason terminates cleanly with circular cause', () => {
      const err: Record<string, unknown> = {message: 'test'};
      err.cause = err;
      assert.strictEqual(resolveErrorInfoReason(err), undefined);
    });

    it('resolveClientNetworkOrOperationalError terminates cleanly with circular cause', () => {
      const err: Record<string, unknown> = {message: 'test'};
      err.cause = err;
      assert.strictEqual(
        resolveClientNetworkOrOperationalError(err),
        undefined,
      );
    });

    it('resolveLanguageSpecificErrorType terminates cleanly with circular cause', () => {
      const err = new GoogleError('test');
      err.cause = err;
      assert.strictEqual(resolveLanguageSpecificErrorType(err), undefined);
    });

    it('isServerSideError terminates cleanly with circular cause', () => {
      const err = new GoogleError('test');
      err.cause = err;
      assert.strictEqual(isServerSideError(err, 'grpc'), false);
      assert.strictEqual(isServerSideError(err, 'http'), false);
    });
  });
});
