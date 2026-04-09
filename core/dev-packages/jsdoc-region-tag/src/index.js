/*!
 * Copyright 2019 Google LLC.
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

const glob = require('glob');
const {readFileSync, statSync} = require('fs');
const {resolve} = require('path');

const SAMPLES_DIRECTORY =
  process.env.SAMPLES_DIRECTORY || resolve(process.cwd(), './samples');
const REGION_START_REGEX = /\[START\s+([^\]]+)/;
const REGION_END_REGEX = /\[END/;

const sampleCache = new Map();
exports.loadSampleCache = function () {
  const sampleCandidates = glob.sync(`${SAMPLES_DIRECTORY}/**/*.{js,ts}`, {
    ignore: ['node_modules'],
  });
  for (const candidate of sampleCandidates) {
    const stat = statSync(candidate);
    if (!stat.isFile()) continue;
    const content = readFileSync(candidate, 'utf8');
    if (REGION_START_REGEX.test(content)) {
      parseSamples(content);
    }
  }
  return sampleCache;
};

function parseSamples(content) {
  let key;
  let sample;
  let inTag = false;
  for (const line of content.split(/\r?\n/)) {
    if (inTag && REGION_END_REGEX.test(line)) {
      sampleCache.set(key, sample);
      inTag = false;
    } else if (inTag) {
      sample += `${line}\n`;
    } else {
      const match = line.match(REGION_START_REGEX);
      if (match) {
        key = match[1];
        sample = '';
        inTag = true;
      }
    }
  }
}

const BASE_URL = 'https://cloud.google.com/';
function replaceRelativeLinks(description) {
  return description.replace(/href="\//g, `href="${BASE_URL}`);
}

exports.handlers = {
  newDoclet: e => {
    if (sampleCache.size === 0) {
      exports.loadSampleCache();
    }

    // Any relative links we observe, e.g., /iam, should be assumed to be
    // relative to cloud.google.com:
    if (e.doclet.description) {
      e.doclet.description = replaceRelativeLinks(e.doclet.description);
    }
    if (e.doclet.classdesc) {
      e.doclet.classdesc = replaceRelativeLinks(e.doclet.classdesc);
    }

    const examples = e.doclet.examples;

    if (!examples) {
      return;
    }

    for (const [i, example] of examples.entries()) {
      if (example.includes('region_tag')) {
        const [, tag, intro] = example.split(/\r|\n/);
        const key = tag.replace('region_tag:', '').trim();
        const sample = sampleCache.get(key);
        if (!sample) {
          console.warn(`could not find sample ${key}`);
        } else {
          examples[i] = intro
            ? `<caption>${intro}</caption>\n${sample}`
            : sample;
        }
      }
    }
  },
};
