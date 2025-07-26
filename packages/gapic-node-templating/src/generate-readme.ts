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

import { traverseDirectory } from "./combine-libraries";
import * as nj from 'nunjucks';
import { POST_PROCESSING_TEMPLATES_PATH } from "./generate-index";

const fs = require('fs/promises'); // For async file system operations
const path = require('path');
const README_PATH = 'README.md';
const SAMPLES_TEMPLATE_PATH = 'sample.njk';
const SAMPLES_PATH = 'samples/generated'

export async function getSamplesMetadata(currentLibrary: string) {
    const samples = await traverseDirectory(path.join(currentLibrary, SAMPLES_PATH), [], new RegExp(currentLibrary))
    samples.map(sample => {
        // Here, the 'getSampleName' refers to the exported function
        Object.assign(sample, {title: getSampleName(sample)});
    });
    console.log(samples);
    return samples;
}

export function getSampleName(sample: {filePath: string}): string {
    // Get just the sample name from the path
    let sampleName = sample.filePath.split('/')[sample.filePath.split('/').length - 1];
    // Remove the API name
    sampleName = sampleName.split('.')[1];
    // Remove the .js
    sampleName = sampleName.replace('.js', '')
    // Remove the underscores
    sampleName = sampleName.replace(/_/g, ' ')
    return sampleName;
}
export async function generateReadMe(currentLibrary: string) {
    let samplesMetadata = await getSamplesMetadata(currentLibrary);
    let contents = await fs.readFile(path.join(currentLibrary, README_PATH), 'utf8');
    console.log(`Configuring Nunjucks with FileSystemLoader for directory: ${POST_PROCESSING_TEMPLATES_PATH}`);
    // Create a new Nunjucks environment configured to load from the templateDirectory
    const env = new nj.Environment(
        new nj.FileSystemLoader(POST_PROCESSING_TEMPLATES_PATH),
        { autoescape: false } // Disable autoescaping for code generation
    );
    
    // Now, render using the template's filename, and Nunjucks will find it
    // within the configured templateDirectory.
    let compiledTemplate = env.render(SAMPLES_TEMPLATE_PATH, {samplesMetadata: samplesMetadata}); // <-- RENDER BY FILENAME
    console.log(compiledTemplate);
    contents = contents.replace('[//]: # "samples"', compiledTemplate)
    console.log(contents);
    await fs.writeFile(path.join(currentLibrary, README_PATH), contents)
    console.log('Nunjucks template rendered successfully.');
}