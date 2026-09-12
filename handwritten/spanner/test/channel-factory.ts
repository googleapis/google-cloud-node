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

import * as assert from 'assert';
import * as sinon from 'sinon';
import * as proxyquire from 'proxyquire';
import {grpc} from 'google-gax';
import {
  createChannelFactoryWithoutAffinity,
  spannerCallInvocationTransformer,
  spannerChannelFactoryOverride,
  ChannelFactoryWithWithoutAffinity,
} from '../src/channel-factory';

describe('ChannelFactory and Transformer', () => {
  let sandbox: sinon.SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('createChannelFactoryWithoutAffinity', () => {
    it('should create a prototype delegate that returns undefined for getAffinityConfig', () => {
      const originalFactory: {
        options: {foo: string};
        getAffinityConfig(path?: string): {command: string} | undefined;
      } = {
        options: {foo: 'bar'},
        getAffinityConfig() {
          return {command: 'BOUND'};
        },
      };

      const delegate = createChannelFactoryWithoutAffinity(
        originalFactory,
      ) as typeof originalFactory;

      assert.strictEqual(delegate.getAffinityConfig('/test.Method'), undefined);
      assert.strictEqual(
        originalFactory.getAffinityConfig('/test.Method')?.command,
        'BOUND',
      );
      assert.strictEqual(delegate.options, originalFactory.options);
      assert.strictEqual(Object.getPrototypeOf(delegate), originalFactory);
    });
  });

  describe('spannerChannelFactoryOverride', () => {
    it('should attach _withoutAffinity delegate to the created channel factory', () => {
      const channelFactory = spannerChannelFactoryOverride(
        'localhost:443',
        grpc.credentials.createInsecure(),
        {},
      ) as ChannelFactoryWithWithoutAffinity & {
        getAffinityConfig: (path: string) => unknown;
      };

      assert.ok(channelFactory);
      assert.ok(channelFactory._withoutAffinity);
      const withoutAffinity = channelFactory._withoutAffinity as {
        getAffinityConfig: (path: string) => unknown;
      };
      assert.strictEqual(typeof withoutAffinity.getAffinityConfig, 'function');
      assert.strictEqual(
        withoutAffinity.getAffinityConfig('/test.Method'),
        undefined,
      );
    });

    it('should return nullish channel factory when gcpChannelFactoryOverride returns nullish', () => {
      const proxiedModule = proxyquire('../src/channel-factory', {
        'grpc-gcp': () => ({
          gcpChannelFactoryOverride: () => null,
          gcpCallInvocationTransformer: (props: unknown) => props,
        }),
      });

      const channelFactory = proxiedModule.spannerChannelFactoryOverride(
        'localhost:443',
        grpc.credentials.createInsecure(),
        {},
      );

      assert.strictEqual(channelFactory, null);
    });
  });

  describe('spannerCallInvocationTransformer', () => {
    function createMockCallProperties(argument?: unknown, channel?: unknown) {
      return {
        argument,
        channel: channel ?? {
          _withoutAffinity: {name: 'withoutAffinityChannel'},
        },
      } as unknown as grpc.CallProperties<unknown, unknown>;
    }

    it('should route through _withoutAffinity for camelCase singleUse transaction', () => {
      const mockChannelFactory = {
        name: 'originalChannel',
        _withoutAffinity: {name: 'withoutAffinityChannel'},
      };
      const callProps = createMockCallProperties(
        {transaction: {singleUse: {readOnly: {}}}},
        mockChannelFactory,
      );

      const transformed = spannerCallInvocationTransformer(callProps);
      assert.strictEqual(
        transformed.channel,
        mockChannelFactory._withoutAffinity,
      );
    });

    it('should route through _withoutAffinity for snake_case single_use transaction', () => {
      const mockChannelFactory = {
        name: 'originalChannel',
        _withoutAffinity: {name: 'withoutAffinityChannel'},
      };
      const callProps = createMockCallProperties(
        {transaction: {single_use: {read_only: {}}}},
        mockChannelFactory,
      );

      const transformed = spannerCallInvocationTransformer(callProps);
      assert.strictEqual(
        transformed.channel,
        mockChannelFactory._withoutAffinity,
      );
    });

    it('should not change channel for multi-use transaction with id', () => {
      const mockChannelFactory = {
        name: 'originalChannel',
        _withoutAffinity: {name: 'withoutAffinityChannel'},
      };
      const callProps = createMockCallProperties(
        {transaction: {id: Buffer.from('tx-123')}},
        mockChannelFactory,
      );

      const transformed = spannerCallInvocationTransformer(callProps);
      assert.strictEqual(transformed.channel, mockChannelFactory);
    });

    it('should not change channel for read-write transaction with begin', () => {
      const mockChannelFactory = {
        name: 'originalChannel',
        _withoutAffinity: {name: 'withoutAffinityChannel'},
      };
      const callProps = createMockCallProperties(
        {transaction: {begin: {readWrite: {}}}},
        mockChannelFactory,
      );

      const transformed = spannerCallInvocationTransformer(callProps);
      assert.strictEqual(transformed.channel, mockChannelFactory);
    });

    it('should not change channel when argument is undefined', () => {
      const mockChannelFactory = {
        name: 'originalChannel',
        _withoutAffinity: {name: 'withoutAffinityChannel'},
      };
      const callProps = createMockCallProperties(undefined, mockChannelFactory);

      const transformed = spannerCallInvocationTransformer(callProps);
      assert.strictEqual(transformed.channel, mockChannelFactory);
    });

    it('should not change channel when argument is null', () => {
      const mockChannelFactory = {
        name: 'originalChannel',
        _withoutAffinity: {name: 'withoutAffinityChannel'},
      };
      const callProps = createMockCallProperties(null, mockChannelFactory);

      const transformed = spannerCallInvocationTransformer(callProps);
      assert.strictEqual(transformed.channel, mockChannelFactory);
    });

    it('should not change channel when argument has no transaction property', () => {
      const mockChannelFactory = {
        name: 'originalChannel',
        _withoutAffinity: {name: 'withoutAffinityChannel'},
      };
      const callProps = createMockCallProperties(
        {name: 'some-session'},
        mockChannelFactory,
      );

      const transformed = spannerCallInvocationTransformer(callProps);
      assert.strictEqual(transformed.channel, mockChannelFactory);
    });

    it('should fall back gracefully when _withoutAffinity is not present on channel', () => {
      const mockChannelFactory = {
        name: 'originalChannel',
      };
      const callProps = createMockCallProperties(
        {transaction: {singleUse: {readOnly: {}}}},
        mockChannelFactory,
      );

      const transformed = spannerCallInvocationTransformer(callProps);
      assert.strictEqual(transformed.channel, mockChannelFactory);
    });

    it('should return callProperties directly when callProperties is undefined or null', () => {
      assert.strictEqual(
        spannerCallInvocationTransformer(
          undefined as unknown as grpc.CallProperties<unknown, unknown>,
        ),
        undefined,
      );
      assert.strictEqual(
        spannerCallInvocationTransformer(
          null as unknown as grpc.CallProperties<unknown, unknown>,
        ),
        null,
      );
    });
  });
});
