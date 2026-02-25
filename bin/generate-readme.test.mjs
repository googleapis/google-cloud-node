import test from 'node:test';
import assert from 'node:assert/strict';

import { getRepos, processMetadata } from './generate-readme.mjs';

test('processMetadata falls back to product docs when support URL is 404', async () => {
  const repoMetadata = {
    sample: {
      api_id: 'sample.googleapis.com',
      release_level: 'stable',
      name_pretty: 'Sample API',
      product_documentation: 'https://cloud.google.com/sample/docs',
      distribution_name: '@google-cloud/sample',
      linkToRepoHomepage: 'https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-sample'
    }
  };

  const requestImpl = async () => ({ status: 404 });
  const libraries = await processMetadata(repoMetadata, requestImpl, false);

  assert.equal(libraries.length, 1);
  assert.equal(
    libraries[0].support_documentation,
    'https://cloud.google.com/sample/docs'
  );
});

test('getRepos does not throw when Link header parser returns null', async () => {
  let requests = 0;
  const githubClient = {
    request: async () => {
      requests += 1;
      return {
        data: [
          {
            language: 'TypeScript',
            archived: false,
            private: false,
            full_name: 'googleapis/ts-repo'
          },
          {
            language: 'JavaScript',
            archived: true,
            private: false,
            full_name: 'googleapis/archived-repo'
          },
          {
            language: 'Go',
            archived: false,
            private: false,
            full_name: 'googleapis/go-repo'
          }
        ],
        headers: {
          link: 'not-a-parseable-link-header'
        }
      };
    }
  };

  const parseLinkHeaderImpl = () => null;
  const repos = await getRepos(githubClient, parseLinkHeaderImpl);

  assert.equal(requests, 1);
  assert.deepEqual(repos, ['googleapis/ts-repo']);
});
