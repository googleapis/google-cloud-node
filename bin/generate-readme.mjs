#!/usr/bin/env node
// Copyright 2019 Google LLC
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
import { request, Gaxios } from 'gaxios';
import figures from 'figures';
import { readFileSync, writeFileSync } from 'fs';
import parseLinkHeader from 'parse-link-header';

const token = process.env.GITHUB_TOKEN;
const smokeTest = !!process.env.SMOKE_TEST;

const headers = {};
if (token) {
  headers.authorization = `token ${token}`;
} else {
  console.warn('Please provide GITHUB_TOKEN env var for increased quota.');
}
const baseUrl = 'https://api.github.com';
const github = new Gaxios({
  headers,
  retryConfig: {
    retries: 3
  }
});

function checkpoint (message, success = true) {
  const prefix = success ? chalk.green(figures.tick) : chalk.red(figures.cross);
  console.info(`${prefix} ${message}`);
}

/**
 * For each JavaScript or TypeScript repository in the `googleapis`
 * org, attempt to download the `.repo-metadata.json` file if present.
 * Write the combined metadata to `libraries.json` in this repository.
 */
async function downloadRepoMetadata () {
  const repos = await getRepos();
  checkpoint(`Discovered ${repos.length} node.js repos with metadata`);
  const repoMetadata = {};
  for (const repo of repos) {
    // download the .repo-metadata.json
    let meta;
    try {
      const url = `${baseUrl}/repos/${repo}/contents/.repo-metadata.json`;
      const res = await github.request({ url });
      meta = JSON.parse(
        Buffer.from(res.data.content, 'base64').toString('utf8')
      );
    } catch (err) {
      if (!err.response || err.response.status !== 404) {
        throw err;
      }
      checkpoint(`${repo} had no .repo-metadata.json`, false);
      continue;
    }

    // validate that the package has been published
    const packageName = meta.distribution_name;
    if (!packageName) {
      checkpoint(`${repo} had no distribution_name in repo-metadata.json`, false);
      continue;
    }
    try {
      await github.request({
        url: `https://registry.npmjs.org/${packageName}`,
        method: 'HEAD'
      });
    } catch (err) {
      if (!err.response || err.response.status !== 404) {
        throw err;
      }
      checkpoint(`${repo} had no published package "${packageName}"`, false);
      continue;
    }

    // we have metadata, and the package is published!
    repoMetadata[repo] = meta;
    checkpoint(`${repo} found .repo-metadata.json`);
    // on smoke test, just confirm that we can generate README with a single library:
    if (smokeTest) break;
  }
  const libraries = await processMetadata(repoMetadata);
  return libraries;
}

/**
 * Filter the aggregated repo metadata to only include cloud
 * APIs, and to use the appropriate product support url.
 * Write the resulting file to disk.
 */
async function processMetadata (repoMetadata) {
  const gaLibraries = [];
  const previewLibraries = [];

  // filter libraries to only contain those with Google Cloud api_id,
  // standardizing naming along the way.
  for (const repoMetadataKey in repoMetadata) {
    const metadata = repoMetadata[repoMetadataKey];

    if (!metadata.api_id) {
      continue;
    }

    metadata.release_level = (metadata.release_level || '').toLowerCase();

    // making naming more consistent, sometimes we've appended Cloud,
    // sometimes Google Cloud.
    metadata.name_pretty = metadata.name_pretty.replace(/^(Google )?Cloud /, '');

    if (metadata.product_documentation) {
      // add a link to the "Getting Support" page on the docs
      // examples:
      //     input: https://cloud.google.com/container-registry/docs/container-analysis
      //     output: https://cloud.google.com/container-registry/docs/getting-support
      //     input: https://cloud.google.com/natural-language/docs/
      //     output: https://cloud.google.com/natural-language/docs/getting-support
      let supportDocsUrl = metadata.product_documentation
        // guarantee trailing /
        .replace(/\/*$/, '/')
        // append "docs/getting-support" path, if not already there
        // this also strips anything else found after "docs/"
        .replace(/(docs\/(.+)*)*$/, 'docs/getting-support');

      // multiple product docs point to the same docs page
      if (metadata.name_pretty.toLowerCase().trim().startsWith('stackdriver')) {
        supportDocsUrl = 'https://cloud.google.com/stackdriver/docs/getting-support';
      }

      // if URL doesn't exist, fall back to the generic docs page
      const res = await request({
        url: supportDocsUrl,
        method: 'HEAD',
        validateStatus: () => true
      });
      const remoteUrlExists = res.status !== 404;
      if (!remoteUrlExists) {
        supportDocsUrl = metadata.product_documentation;
      }
      metadata.support_documentation = supportDocsUrl;
    }

    if (metadata.release_level === 'stable' || metadata.release_level === 'ga') {
      gaLibraries.push(metadata);
    } else {
      previewLibraries.push(metadata);
    }
  }

  [gaLibraries, previewLibraries].forEach(libraries => {
    libraries.sort((a, b) => {
      return a.name_pretty.localeCompare(b.name_pretty);
    });
  });
  const libraries = [...gaLibraries, ...previewLibraries];
  writeFileSync('./libraries.json', JSON.stringify(libraries, null, 2), 'utf8');
  return libraries;
}

// Fills in README.mustache with contents loaded from sloth/repos.json.
// Given the simplicity of the template, we do not actually use a templating
// engine, instead calling string.replace.
async function generateReadme (libraries) {
  const template = readFileSync('./bin/README.mustache', 'utf8');
  let partial = '';
  for (const lib of libraries) {
    let stability = '';
    switch (lib.release_level) {
      case 'stable':
      case 'ga':
        stability = '[![Stable][stable-stability]][launch-stages]';
        break;
      case 'alpha':
      case 'beta':
      case 'preview':
        stability = '[![Preview][preview-stability]][launch-stages]';
        break;
    }
    const npmBadge = `[![npm](https://img.shields.io/npm/v/${lib.distribution_name})](https://npm.im/${lib.distribution_name})`;
    partial += `| [${lib.name_pretty}](https://github.com/${lib.repo}) | ${stability} | ${npmBadge} |\n`;
  }
  writeFileSync('./README.md', template.replace('{{libraries}}', partial), 'utf8');
}

/**
 * Use the GitHub Search API to find all JavaScript and TypeScript repositories
 * in the `googleapis` GitHub organization.
 */
async function getRepos () {
  let url = new URL('/orgs/googleapis/repos', baseUrl);
  url.searchParams.set('type', 'public');
  url.searchParams.set('per_page', 100);
  const repos = [];
  while (url) {
    const res = await github.request({ url: url.href });
    repos.push(...res.data.filter(r => (r.language === 'TypeScript' || r.language === 'JavaScript') && r.archived === false && r.private === false).map(r => r.full_name));
    url = null;
    if (res.headers.link) {
      const link = parseLinkHeader(res.headers.link);
      if (link.next) {
        url = new URL(link.next.url);
      }
    }
  }
  return repos;
}

/**
 * Search for all Node.js and TypeScript repos in the `googelapis` org,
 * download all repo metadata, and make it fit for use.  Save the file to
 * libraries.json, and then use the results to generate a README.
 *
 * If the `--use-cache` flag is passed, skip the downloading of all metadata
 * and just regenerate the README using the local `libraries.json`.
 */
async function main () {
  const args = process.argv.slice(2);
  let libraries = [];
  if (args.includes('--use-cache')) {
    libraries = JSON.parse(readFileSync('./libraries.json', 'utf8'));
  } else {
    libraries = await downloadRepoMetadata();
  }
  await generateReadme(libraries);
}
main().catch((err) => {
  console.error(err.message);
  process.exitCode = 1;
});
