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

import {traverseDirectory} from './combine-libraries';
import * as nj from 'nunjucks';
import {POST_PROCESSING_TEMPLATES_PATH} from './generate-index';
import { release } from 'os';

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

const DEFAULT_RELEASE_LEVEL = 'preview';

export async function getSamplesMetadata(currentLibrary: string): Promise<{ filePath: string; content: string; title: string; }[]> {
  // Let's remove the main library from the samples paths
  const stringToRemove = currentLibrary.split('/').slice(0, currentLibrary.split('/').length-1).join('/');
  let samples = await traverseDirectory(
    path.join(currentLibrary, SAMPLES_PATH),
    [],
    new RegExp(stringToRemove),
  );
  samples.map(sample => {
    // Here, the 'getSampleName' refers to the exported function
    Object.assign(sample, {title: getSampleName(sample)});
  });
  samples = cleanNodejsFromLibraryPath(samples);
  // Since we later assign the title property, it should exist
  return samples as unknown as { filePath: string; content: string; title: string; }[];
}

// This function is somewhat of a hacky helper. Essentially, while we are still using
// bazel-bot, we still need to name our library api-id-with-dashes-nodejs,
// so we can search for it using bazel bot. However that means our
// file paths won't match what exists in google-cloud-node, i.e.,
// https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data-nodejs/samples/generated/v1alpha/alpha_analytics_data.create_audience_list.js
// does not exist, we need to remove the *-nodejs from the path. This does that.
function cleanNodejsFromLibraryPath(samples: {filePath: string, content: string}[]) {
  samples.forEach(sample => {
    sample.filePath = sample.filePath.replace('-nodejs', '');
  })
  return samples;
}

export function getSampleName(sample: { filePath: string; content: string; }): string {
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
    console.log(`${sample.filePath} was not in correct format; transformations could not be completed`)
    // Reset if there was an error
    sampleName = sample.filePath;
  }
  return sampleName;
}

// We have two readme generations because the initial generation step
// will be a little different than what's available during post-processing
export async function initialGenerateReadMe(args: {currentLibrary: string, stringToReplaceForSampleTable: string, stringToReplaceForReleaseLevel: string, writeLibrary: string, releaseLevel?: string}) {
  const samplesMetadata = await getSamplesMetadata(args.currentLibrary);
  const releaseLevel = args.releaseLevel || DEFAULT_RELEASE_LEVEL;
  const releaseLevelMessage = (/stable/i).test(releaseLevel) ? RELEASE_LEVEL_STABLE : RELEASE_LEVEL_PREVIEW;

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
  await readAndWriteToReadme(args.currentLibrary, args.stringToReplaceForSampleTable, compiledTemplate, args.writeLibrary);
  await readAndWriteToReadme(args.currentLibrary, args.stringToReplaceForReleaseLevel, releaseLevelMessage, args.writeLibrary)
  console.log('Nunjucks template rendered successfully.');
}

// Gets the current README contents
// Searches for the string to replace
// Replaces with replacement string
// Writes to a README in a new folder
export async function readAndWriteToReadme(currentLibrary: string, stringToReplace: string, replacementString: string, writeLibrary: string) {
  const readmePath = path.join(currentLibrary, README_PATH);
  const writeFilePath = path.join(writeLibrary, README_PATH);
  let contents;
  try {
    contents = await fs.readFile(
      readmePath,
      'utf8',
    );
  } catch (err) {
    throw new Error(`${readmePath} does not exist; cannot write to ${writeFilePath}`)
  }
  contents = contents.replace(stringToReplace, replacementString);
  await fs.writeFile(writeFilePath, contents);
}
