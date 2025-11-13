// Copyright 2021 Google LLC
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

import type * as protos from '../../protos/index.js';

export interface Http {
  rules: protos.google.api.IHttpRule[];
}

export interface ServiceYaml {
  title: string;
  apis: string[];
  // TODO (alicejli): Dynamic routing headers will eventually be part of the ServiceYaml
  // Refactor reading the annotation from the proto to the serviceYaml file once that is implemented.
  http: Http;
  publishing?: {
    new_issue_uri?: string;
    documentation_uri?: string;
    library_settings?: LibrarySettings[];
    method_settings?: MethodSettings[];
  };
}

export interface LibrarySettings {
  version?: string;
  node_settings?: NodeSettings;
}

export interface MethodSettings {
  selector: string;
  auto_populated_fields?: string[];
}

export interface NodeSettings {
  common: {
    selective_gapic_generation?: {
      methods: string[];
      generate_omitted_as_internal?: boolean;
    };
    destinations?: string;
  };
}
