// Copyright 2022 Google LLC
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

import chalk from 'chalk';

/**
 * Symbols is our switchboard for accessing things that we might
 * need to disable for accessibility or other reasons. This takes care
 * of getting back reasonable text for symbols, as well as coloration.
 */
class Symbols {
  private _art: boolean = true;

  get art() {
    return this._art;
  }

  set art(useArt: boolean) {
    this._art = useArt;
  }

  private get symbolSet(): string[] {
    if (this._art) {
      return emojiSymbols;
    } else {
      return plainSymbols;
    }
  }

  green(str: string): string {
    return this._art ? chalk.green(str) : str;
  }

  grey(str: string): string {
    return this._art ? chalk.grey(str) : str;
  }

  red(str: string): string {
    return this._art ? chalk.red(str) : str;
  }

  redBright(str: string): string {
    return this._art ? chalk.redBright(str) : str;
  }

  get bug(): string {
    return this.symbolSet[symbolEnum.bug];
  }

  get failure(): string {
    return this.symbolSet[symbolEnum.failure];
  }

  get success(): string {
    return this.symbolSet[symbolEnum.success];
  }

  get step(): string {
    return this.symbolSet[symbolEnum.step];
  }
};

export const symbols = new Symbols();

const symbolEnum = {
  bug: 0,
  failure: 1,
  success: 2,
  step: 3,
};

const emojiSymbols = [
  '🐞',
  '❌',
  '✅',
  '✨',
];

const plainSymbols = [
  '[bug]',
  '[error]',
  '[success]',
  '[step]',
];
