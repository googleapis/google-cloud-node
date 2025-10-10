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

import {ensureDirectoryExists, traverseDirectory} from './combine-libraries';
import * as nj from 'nunjucks';
import {POST_PROCESSING_TEMPLATES_PATH} from './generate-index';

const fs = require('fs/promises'); // For async file system operations
const path = require('path');
const README_PATH = 'README.md';
export const SAMPLES_TEMPLATE_PATH = 'sample.njk';
export const SAMPLES_PATH = 'samples/generated';

export const RELEASE_LEVEL_STABLE = `This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority`;

export const RELEASE_LEVEL_PREVIEW = `This library is considered to be in **preview**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.`;

interface SampleMetadata {
  filePath: string;
  content: string;
  title: string;
}

const DEFAULT_RELEASE_LEVEL = 'preview';

/**
 * Retrieves metadata for all generated samples within a given library path.
 *
 * This function traverses the `samples/generated` directory within a specified library,
 * processes each sample to get its title, and returns a list of objects containing
 * the file path, content, and title for each sample.
 *
 * @param {string} currentLibrary - The path to the library's root directory.
 * @returns {Promise<SampleMetadata[]>} A promise that resolves to an array of sample metadata objects.
 */
export async function getSamplesMetadata(
  currentLibrary: string,
): Promise<SampleMetadata[]> {
  // Let's separate out the absolute path so that we
  // can later remove it from the filePath (so that it
  // is relative to the working directory).
  // For example for CURRENT LIBRARY: google-cloud-node/packages/gapic-node-processing/test/fixtures/combined-library/google-cloud-speech
  // we would produce stringToRemove: /Users/sofialeon/gcp/google-cloud-node/packages/gapic-node-processing/test/fixtures/combined-library
  // which we then use to remove from the absolute filePath (so
  // /google-cloud-node/packages/gapic-node-processing/test/fixtures/combined-library/google-cloud-speech/samples/generated/v1/adaptation.create_custom_class.js
  // becomes just google-cloud-speech/samples/generated/v1/adaptation.create_custom_class.js (the relative path to the new directory)
  const stringToRemove = currentLibrary
    .split('/')
    .slice(0, currentLibrary.split('/').length - 1)
    .join('/');

  const samples = await traverseDirectory(
    path.join(currentLibrary, SAMPLES_PATH),
    [],
  );
  samples.map(sample => {
    sample.filePath = sample.filePath
      .replace(stringToRemove, '')
      .replace('-nodejs', '');
    Object.assign(sample, {title: getSampleName(sample)});
  });
  console.log(samples);
  // Since we later assign the title property, we can coerce it into
  // this type
  return samples as unknown as SampleMetadata[];
}

/**
 * Extracts and formats a human-readable name from a sample's file path.
 *
 * The function takes a sample object and attempts to derive a clean name by
 * stripping the file extension, API version, and replacing underscores with spaces.
 * If the path is not in the expected format, it logs an error and returns the original path.
 *
 * @param {FilePaths} sample - The sample object containing the file path.
 * @returns {string} The formatted name of the sample.
 */
export function getSampleName(sample: {filePath: string}): string {
  // Get just the sample name from the path
  let sampleName = sample.filePath;
  try {
    sampleName = sampleName.split('/')[sample.filePath.split('/').length - 1];
    // Remove the API name
    sampleName = sampleName.split('.')[1];
    // Remove the .js
    sampleName = sampleName.replace('.js', '');
    // Remove the underscores
    sampleName = sampleName.replace(/_/g, ' ');
  } catch (err) {
    console.log(
      `${sample.filePath} was not in correct format; transformations could not be completed`,
    );
    // Reset if there was an error
    sampleName = sample.filePath;
  }
  return sampleName;
}

/**
 * Generates the initial README file for a library by compiling templates and replacing placeholders.
 *
 * This function uses Nunjucks to render a sample table based on the found samples
 * and injects it along with the appropriate release level message into the README.md
 * template.
 *
 * @param {CliArgsReadme} args - An object containing the arguments for the function.
 * @param {string} args.currentLibrary - The path to the library's root directory.
 * @param {string} args.stringToReplaceForSampleTable - The placeholder string to be replaced with the samples table.
 * @param {string} args.stringToReplaceForReleaseLevel - The placeholder string to be replaced with the release level message.
 * @param {string} args.writeLibrary - The path where the final README.md will be written.
 * @param {string} [args.releaseLevel] - The release level of the library (e.g., 'stable', 'preview'). Defaults to 'preview'.
 */
export async function initialGenerateReadMe(args: {
  currentLibrary: string;
  stringToReplaceForSampleTable: string;
  stringToReplaceForReleaseLevel: string;
  writeLibrary: string;
  releaseLevel?: string;
}) {
  const samplesMetadata = await getSamplesMetadata(args.currentLibrary);
  const releaseLevel = args.releaseLevel || DEFAULT_RELEASE_LEVEL;
  const releaseLevelMessage = /stable/i.test(releaseLevel)
    ? RELEASE_LEVEL_STABLE
    : RELEASE_LEVEL_PREVIEW;

  console.log(
    `Configuring Nunjucks with FileSystemLoader for directory: ${POST_PROCESSING_TEMPLATES_PATH}`,
  );
  // Create a new Nunjucks environment configured to load from the templateDirectory
  const env = new nj.Environment(
    new nj.FileSystemLoader(POST_PROCESSING_TEMPLATES_PATH),
    {autoescape: false}, // Disable autoescaping for code generation
  );

  // Now, render using the template's filename, and Nunjucks will find it
  // within the configured templateDirectory.
  const compiledTemplate = env.render(SAMPLES_TEMPLATE_PATH, {
    samplesMetadata: samplesMetadata,
  });

  // Most of the README is generated at the inital library level
  // Except for the samples and the release level, which only the top-level
  // BUILD rule has access to. So we set comments that the
  // README will replace eventually.
  // stringToReplaceForSampleTable should be '[//]: # "samples"'
  // stringToReplaceForReleaseLevel should be '[//]: # "releaseLevel"'
  // Since this regex could change, we
  await readAndWriteToReadme(
    args.currentLibrary,
    args.stringToReplaceForSampleTable,
    compiledTemplate,
    args.writeLibrary,
  );
  // The first argument is the writeLibrary because we've already changed
  // it once, and we want the changes to be cummulative
  await readAndWriteToReadme(
    args.writeLibrary,
    args.stringToReplaceForReleaseLevel,
    releaseLevelMessage,
    args.writeLibrary,
  );
  console.log('Nunjucks template rendered successfully.');
}

/**
 * Reads the content of a README.md file, replaces a specified string, and writes the modified content to a new README.md file.
 *
 * @param {string} currentLibrary - The path to the current library.
 * @param {string} stringToReplace - The string to replace in the README.md file.
 * @param {string} replacementString - The string to replace with.
 * @param {string} writeLibrary - The path to the directory where the new README.md file will be written.
 */
export async function readAndWriteToReadme(
  currentLibrary: string,
  stringToReplace: string,
  replacementString: string,
  writeLibrary: string,
) {
  const readmePath = path.join(currentLibrary, README_PATH);
  const writeFilePath = path.join(writeLibrary, README_PATH);
  let contents;
  try {
    contents = await fs.readFile(readmePath, 'utf8');
  } catch (err) {
    throw new Error(
      `${readmePath} does not exist; cannot write to ${writeFilePath}`,
    );
  }
  contents = contents.replace(stringToReplace, replacementString);
  console.log(`Writing ${contents} to ${writeFilePath}`);
  await ensureDirectoryExists(writeFilePath);
  await fs.writeFile(writeFilePath, contents);
}
