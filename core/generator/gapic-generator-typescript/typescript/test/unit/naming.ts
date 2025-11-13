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

import assert from 'assert';
import {describe, it} from 'mocha';
import type * as protos from '../../../protos/index.js';
import {Naming, Options} from '../../src/schema/naming.js';

describe('src/schema/naming.ts', () => {
  it('parses name correctly', () => {
    const descriptor1 = {} as protos.google.protobuf.FileDescriptorProto;
    const descriptor2 = {} as protos.google.protobuf.FileDescriptorProto;
    descriptor1.package = 'google.namespace.service.v1beta1';
    descriptor1.service = [{} as protos.google.protobuf.ServiceDescriptorProto];
    descriptor2.package = 'google.namespace.service.v1beta1';
    descriptor2.service = [{} as protos.google.protobuf.ServiceDescriptorProto];
    const naming = new Naming([descriptor1, descriptor2]);
    assert.strictEqual(naming.name, 'Service');
    assert.strictEqual(naming.productName, 'Service');
    assert.deepStrictEqual(naming.namespace, ['google', 'namespace']);
    assert.strictEqual(naming.version, 'v1beta1');
    assert.strictEqual(naming.protoPackage, 'google.namespace.service.v1beta1');
  });

  it('parses name correctly 2', () => {
    const descriptor1 = {} as protos.google.protobuf.FileDescriptorProto;
    descriptor1.package = 'service.v1beta1';
    descriptor1.service = [{} as protos.google.protobuf.ServiceDescriptorProto];
    const naming = new Naming([descriptor1]);
    assert.strictEqual(naming.name, 'Service');
    assert.strictEqual(naming.productName, 'Service');
    assert.deepStrictEqual(naming.namespace, ['']);
    assert.strictEqual(naming.version, 'v1beta1');
    assert.strictEqual(naming.protoPackage, 'service.v1beta1');
  });

  it('parses name correctly 3', () => {
    const descriptor1 = {} as protos.google.protobuf.FileDescriptorProto;
    descriptor1.package = 'company.service.v1beta1';
    descriptor1.service = [{} as protos.google.protobuf.ServiceDescriptorProto];
    const naming = new Naming([descriptor1]);
    assert.strictEqual(naming.name, 'Service');
    assert.strictEqual(naming.productName, 'Service');
    assert.deepStrictEqual(naming.namespace, ['company']);
    assert.strictEqual(naming.version, 'v1beta1');
    assert.strictEqual(naming.protoPackage, 'company.service.v1beta1');
  });

  it('ignores everything after the version', () => {
    const descriptor1 = {} as protos.google.protobuf.FileDescriptorProto;
    descriptor1.package = 'company.service.v1beta1.unexpected';
    descriptor1.service = [{} as protos.google.protobuf.ServiceDescriptorProto];
    const naming = new Naming([descriptor1]);
    assert.strictEqual(naming.name, 'Service');
    assert.strictEqual(naming.productName, 'Service');
    assert.deepStrictEqual(naming.namespace, ['company']);
    assert.strictEqual(naming.version, 'v1beta1');
    assert.strictEqual(
      naming.protoPackage,
      'company.service.v1beta1.unexpected',
    );
  });

  it('ignores files with no services when determining package name', () => {
    const descriptor1 = {} as protos.google.protobuf.FileDescriptorProto;
    const descriptor2 = {} as protos.google.protobuf.FileDescriptorProto;
    descriptor1.package = 'google.namespace.service.v1beta1';
    descriptor1.service = [{} as protos.google.protobuf.ServiceDescriptorProto];
    descriptor2.package = 'google.namespace.service.v1beta2';
    const naming = new Naming([descriptor1, descriptor2]);
    assert.strictEqual(naming.name, 'Service');
    assert.strictEqual(naming.productName, 'Service');
    assert.deepStrictEqual(naming.namespace, ['google', 'namespace']);
    assert.strictEqual(naming.version, 'v1beta1');
    assert.strictEqual(naming.protoPackage, 'google.namespace.service.v1beta1');
  });

  it('ignores LRO files when determining package name', () => {
    const descriptor1 = {} as protos.google.protobuf.FileDescriptorProto;
    const descriptor2 = {} as protos.google.protobuf.FileDescriptorProto;
    descriptor1.package = 'google.namespace.service.v1beta1';
    descriptor1.service = [{} as protos.google.protobuf.ServiceDescriptorProto];
    descriptor2.package = 'google.longrunning';
    descriptor2.service = [{} as protos.google.protobuf.ServiceDescriptorProto];
    const naming = new Naming([descriptor1, descriptor2]);
    assert.strictEqual(naming.name, 'Service');
    assert.strictEqual(naming.productName, 'Service');
    assert.deepStrictEqual(naming.namespace, ['google', 'namespace']);
    assert.strictEqual(naming.version, 'v1beta1');
    assert.strictEqual(naming.protoPackage, 'google.namespace.service.v1beta1');
  });

  it('ignores IAM files when determining package name', () => {
    const descriptor1 = {} as protos.google.protobuf.FileDescriptorProto;
    const descriptor2 = {} as protos.google.protobuf.FileDescriptorProto;
    descriptor1.package = 'google.namespace.service.v1beta1';
    descriptor1.service = [{} as protos.google.protobuf.ServiceDescriptorProto];
    descriptor2.package = 'google.iam.v1';
    descriptor2.service = [{} as protos.google.protobuf.ServiceDescriptorProto];
    const naming = new Naming([descriptor1, descriptor2]);
    assert.strictEqual(naming.name, 'Service');
    assert.strictEqual(naming.productName, 'Service');
    assert.deepStrictEqual(naming.namespace, ['google', 'namespace']);
    assert.strictEqual(naming.version, 'v1beta1');
    assert.strictEqual(naming.protoPackage, 'google.namespace.service.v1beta1');
  });

  it('determines package name for IAM alone', () => {
    const descriptor = {} as protos.google.protobuf.FileDescriptorProto;
    descriptor.package = 'google.iam.v1';
    descriptor.service = [{} as protos.google.protobuf.ServiceDescriptorProto];
    const naming = new Naming([descriptor]);
    assert.strictEqual(naming.name, 'Iam');
    assert.strictEqual(naming.productName, 'Iam');
    assert.deepStrictEqual(naming.namespace, ['google']);
    assert.strictEqual(naming.version, 'v1');
    assert.strictEqual(naming.protoPackage, 'google.iam.v1');
  });

  it('fails on bad package name 1', () => {
    const descriptor = {} as protos.google.protobuf.FileDescriptorProto;
    descriptor.package = 'nonamespace';
    descriptor.service = [{} as protos.google.protobuf.ServiceDescriptorProto];
    assert.throws(() => {
      const naming = new Naming([descriptor]);
      assert(naming);
    });
  });

  it('fails on bad package name 2', () => {
    const descriptor = {} as protos.google.protobuf.FileDescriptorProto;
    descriptor.package = '---';
    descriptor.service = [{} as protos.google.protobuf.ServiceDescriptorProto];
    assert.throws(() => {
      const naming = new Naming([descriptor]);
      assert(naming);
    });
  });

  it('fails on no package name', () => {
    const descriptor = {} as protos.google.protobuf.FileDescriptorProto;
    descriptor.package = '';
    descriptor.service = [{} as protos.google.protobuf.ServiceDescriptorProto];
    assert.throws(() => {
      const naming = new Naming([descriptor]);
      assert(naming);
    });
  });

  it('fails if no common package, no service-name', () => {
    const descriptor1 = {} as protos.google.protobuf.FileDescriptorProto;
    const descriptor2 = {} as protos.google.protobuf.FileDescriptorProto;
    descriptor1.package = 'namespace1.service.v1beta1';
    descriptor1.service = [{} as protos.google.protobuf.ServiceDescriptorProto];
    descriptor2.package = 'namespace2.service.v1beta1';
    descriptor2.service = [{} as protos.google.protobuf.ServiceDescriptorProto];
    assert.throws(() => {
      const naming = new Naming([descriptor1, descriptor2]);
      assert(naming);
    });
  });

  it('parse name correctly if no common package, but service-name specified', () => {
    const descriptor1 = {} as protos.google.protobuf.FileDescriptorProto;
    const descriptor2 = {} as protos.google.protobuf.FileDescriptorProto;
    descriptor1.package = 'namespace1.service1.v1beta1';
    descriptor1.service = [{} as protos.google.protobuf.ServiceDescriptorProto];
    descriptor2.package = 'namespace2.service2.v1beta1';
    descriptor2.service = [{} as protos.google.protobuf.ServiceDescriptorProto];
    const serviceConfig = {} as protos.grpc.service_config.ServiceConfig;
    const options: Options = {
      grpcServiceConfig: serviceConfig,
      mainServiceName: 'service1',
    };
    assert.throws(() => {
      const naming = new Naming([descriptor1, descriptor2], options);
      assert.strictEqual(naming.name, 'service1');
      assert.strictEqual(naming.productName, 'service1');
      assert.strictEqual(naming.version, 'v1beta1');
      assert.strictEqual(naming.namespace, 'namespace1');
      assert.strictEqual(naming.protoPackage, 'namespace1.service1.v1beta1');
    });
  });

  it('fails if different versions', () => {
    const descriptor1 = {} as protos.google.protobuf.FileDescriptorProto;
    const descriptor2 = {} as protos.google.protobuf.FileDescriptorProto;
    descriptor1.package = 'namespace.service.v1beta1';
    descriptor1.service = [{} as protos.google.protobuf.ServiceDescriptorProto];
    descriptor2.package = 'namespace.service.v1beta2';
    descriptor2.service = [{} as protos.google.protobuf.ServiceDescriptorProto];
    assert.throws(() => {
      const naming = new Naming([descriptor1, descriptor2]);
      assert(naming);
    });
  });

  it('fails if not all packages have versions', () => {
    const descriptor1 = {} as protos.google.protobuf.FileDescriptorProto;
    const descriptor2 = {} as protos.google.protobuf.FileDescriptorProto;
    descriptor1.package = 'namespace.service.v1beta1';
    descriptor1.service = [{} as protos.google.protobuf.ServiceDescriptorProto];
    descriptor2.package = 'namespace.service';
    descriptor2.service = [{} as protos.google.protobuf.ServiceDescriptorProto];
    assert.throws(() => {
      const naming = new Naming([descriptor1, descriptor2]);
      assert(naming);
    });
  });
});
