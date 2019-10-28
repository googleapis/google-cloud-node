/*!
 * Copyright 2015 Google Inc. All Rights Reserved.
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

import * as assert from 'assert';
import {TranslationServiceClient} from '../src';

const API_KEY = process.env.TRANSLATE_API_KEY;

describe('translate', () => {
  const translate = new TranslationServiceClient();

  describe('detecting language from input', () => {
    const INPUT = [
      {
        content: 'Hello!',
        expectedLanguage: 'en',
      },
      {
        content: '¡Hola!',
        expectedLanguage: 'es',
      },
    ];

    it('should detect a langauge', async () => {
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
  });
});
