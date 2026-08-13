// Copyright 2026 Google LLC
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

import {Connection, Pool, Rows, SpannerLibError} from 'spannerlib-node';

// 1. Target Production Platform & Architecture Package Loading:
// In production, prebuilt native binaries will be distributed as optional dependencies:
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
// export const NativeBridge = require(`@google-cloud/spannerlib-node-${process.platform}-${process.arch}`);

export {Connection, Pool, Rows, SpannerLibError};
