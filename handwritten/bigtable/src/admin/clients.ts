// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {Bigtable} from '../';
import {TableAdminClient} from './table';
import {InstanceAdminClient} from './instance';
import * as gax from 'google-gax';

/**
 * Bigtable admin client accessor. These methods let you instantiate the
 * admin client classes more easily, if you already have a `Bigtable` object.
 * You can still create them directly, but this saves you some trouble with
 * figuring out auth and other configuration.
 */
export class BigtableAdmin {
  private clientOptions?: gax.ClientOptions;

  constructor(clientOptions?: gax.ClientOptions) {
    this.clientOptions = clientOptions;
  }

  /**
   * Creates a BigtableAdmin using the values derived by `Bigtable`.
   *
   * @param bigtable Bigtable The Bigtable object to read settings from
   * @returns A configured BigtableAdmin
   */
  static fromBigtable(bigtable: Bigtable) {
    // The Bigtable object has separate values for table and instance clients,
    // but they should functionally be the same.
    return new BigtableAdmin(bigtable.options.BigtableTableAdminClient);
  }

  /**
   * Creates a client for table administration.
   *
   * @returns The admin client
   */
  getTableAdminClient(options?: gax.ClientOptions) {
    return new TableAdminClient(options ?? this.clientOptions);
  }

  /**
   * Creates a client for instance administration.
   *
   * @returns The admin client
   */
  getInstanceAdminClient(options?: gax.ClientOptions) {
    return new InstanceAdminClient(options ?? this.clientOptions);
  }
}
