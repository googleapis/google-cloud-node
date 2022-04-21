// Copyright 2015 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as assert from 'assert';
import {describe, it} from 'mocha';
import {TranslationServiceClient} from '../src';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const http2spy = require('http2spy');

describe('translate', () => {
  const translate = new TranslationServiceClient();

  describe('detecting language from input', () => {
    const INPUT = [
      {
        content: 'Hello!',
        expectedLanguage: 'en',
      },
      {
        content: 'Esto es una prueba.',
        expectedLanguage: 'es',
      },
    ];

    it('should detect a language', async () => {
      const projectId = await translate.getProjectId();
      for (const input of INPUT) {
        const [result] = await translate.detectLanguage({
          content: input.content,
          parent: `projects/${projectId}`,
        });
        assert.strictEqual(
          result.languages![0].languageCode,
          input.expectedLanguage
        );
      }
    });
  });

  describe('translations', () => {
    const INPUT = [
      {
        content: 'Hello!',
        expectedTranslation: 'Hola',
      },
      {
        content: 'How are you today?',
        expectedTranslation: 'Cómo estás hoy',
      },
    ];

    function removeSymbols(input: string) {
      // Remove the leading and trailing ! or ? symbols. The API has been known
      // to switch back and forth between returning "Cómo estás hoy" and
      // "¿Cómo estás hoy?", so let's just not depend on that.
      return input.replace(/^\W|\W*$/g, '');
    }

    it('should translate input', async () => {
      const projectId = await translate.getProjectId();
      const [results] = await translate.translateText({
        contents: INPUT.map(intput => intput.content),
        sourceLanguageCode: 'en',
        targetLanguageCode: 'es',
        parent: `projects/${projectId}`,
      });
      const translations = results.translations!.map(translation =>
        removeSymbols(translation.translatedText as string)
      );
      assert.strictEqual(translations[0], INPUT[0].expectedTranslation);
      assert.strictEqual(translations[1], INPUT[1].expectedTranslation);
    });

    it('should autodetect HTML', async () => {
      const input = '<body>' + INPUT[0].content + '</body>';
      const projectId = await translate.getProjectId();
      const [results] = await translate.translateText({
        contents: [input],
        sourceLanguageCode: 'en',
        targetLanguageCode: 'es',
        parent: `projects/${projectId}`,
      });
      const translation = (results.translations![0].translatedText as string)
        .split(/<\/*body>/g)[1]
        .trim();
      assert.strictEqual(
        removeSymbols(translation),
        INPUT[0].expectedTranslation
      );
    });
  });

  describe('supported languages', () => {
    it('should get a list of supported languages', async () => {
      const projectId = await translate.getProjectId();
      const [result] = await translate.getSupportedLanguages({
        parent: `projects/${projectId}`,
      });
      const englishResult = result.languages!.filter(
        l => l.languageCode === 'en'
      )[0];
      assert.deepStrictEqual(englishResult, {
        languageCode: 'en',
        displayName: '',
        supportSource: true,
        supportTarget: true,
      });
    });

    it('should accept displayLanguageCode, and show appropriate displayName', async () => {
      const projectId = await translate.getProjectId();
      const [result] = await translate.getSupportedLanguages({
        parent: `projects/${projectId}`,
        displayLanguageCode: 'es',
      });
      const englishResult = result.languages!.filter(
        l => l.languageCode === 'en'
      )[0];
      assert.deepStrictEqual(englishResult, {
        languageCode: 'en',
        displayName: 'inglés',
        supportSource: true,
        supportTarget: true,
      });
    });

    it('should populate x-goog-user-project header, and succeed if valid project', async () => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const {GoogleAuth} = require('google-auth-library');
      const auth = new GoogleAuth({
        credentials: Object.assign(
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          require(process.env.GOOGLE_APPLICATION_CREDENTIALS || ''),
          {
            quota_project_id: process.env.GCLOUD_PROJECT,
          }
        ),
      });
      const {TranslationServiceClient} = http2spy.require(
        require.resolve('../src')
      );
      const translate = new TranslationServiceClient({
        auth,
      });

      // We run the same test as "list of supported languages", but with an
      // alternate "quota_project_id" set; Given that GCLOUD_PROJECT
      // references a valid project, we expect success:
      const projectId = await translate.getProjectId();
      // This should not hrow an exception:
      await translate.getSupportedLanguages({
        parent: `projects/${projectId}`,
      });
      // Ensure we actually populated the header:
      assert.strictEqual(
        process.env.GCLOUD_PROJECT,
        http2spy.requests[http2spy.requests.length - 1][
          'x-goog-user-project'
        ][0]
      );
    });

    it('should populate x-goog-user-project header, and fail if invalid project', async () => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const {GoogleAuth} = require('google-auth-library');
      const auth = new GoogleAuth({
        credentials: Object.assign(
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          require(process.env.GOOGLE_APPLICATION_CREDENTIALS || ''),
          {
            quota_project_id: 'my-fake-billing-project',
          }
        ),
      });
      const {TranslationServiceClient} = http2spy.require(
        require.resolve('../src')
      );
      const translate = new TranslationServiceClient({
        auth,
      });

      // We set a quota project "my-fake-billing-project" that does not exist,
      // this should result in an error.
      let err: Error | null = null;
      try {
        const projectId = await translate.getProjectId();
        await translate.getSupportedLanguages({
          parent: `projects/${projectId}`,
        });
      } catch (_err) {
        err = _err;
      }
      assert(err);
      assert(
        err!.message.includes(
          // make sure the error included our fake project name, we shouldn't
          // be too specific about the error incase it changes upstream.
          'my-fake-billing-project'
        ),
        err!.message
      );
      assert.strictEqual(
        'my-fake-billing-project',
        http2spy.requests[http2spy.requests.length - 1][
          'x-goog-user-project'
        ][0]
      );
    });
  });
});
