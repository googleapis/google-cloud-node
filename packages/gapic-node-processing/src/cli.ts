#!/usr/bin/env node
// Copyright 2025 Google LLC
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

import yargs = require('yargs');
import {bootstrapLibrary} from './commands/bootstrap-library';
import {generateCombinedLibraries} from './commands/generate-combined-library';
import {generateReadme} from './commands/generate-readme';

/**
 * Cli main caller; routes commands to either bootstrap a library, generate combined
 * libraries, or generate readme. If any other commands are added to this tool, add them
 * here.
 */
void yargs(process.argv.slice(2))
  .command(bootstrapLibrary)
  .command(generateCombinedLibraries) // Add the new command here
  .command(generateReadme) // Add the new command here
  .demandCommand(1, 'You need at least one command before moving on') // Ensure at least one command is provided
  .help() // Enable the --help option
  .alias('h', 'help') // Alias -h to --help
  .parse();
