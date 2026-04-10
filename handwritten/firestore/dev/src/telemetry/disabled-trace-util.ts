/**
 * Copyright 2024 Google LLC. All Rights Reserved.
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
import {Attributes, TraceUtil} from './trace-util';
import {Span} from './span';

/**
 * @private
 * @internal
 */
export class DisabledTraceUtil implements TraceUtil {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  startSpan(name: string): Span {
    return new Span();
  }

  startActiveSpan<F extends (span: Span) => unknown>(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    name: string,
    fn: F,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    attributes?: Attributes,
  ): ReturnType<F> {
    const emptySpan = new Span();
    return fn(emptySpan) as ReturnType<F>;
  }

  currentSpan(): Span {
    return new Span();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  recordProjectIdAndResourceName(projectId: string, databaseId: string): void {}
}
