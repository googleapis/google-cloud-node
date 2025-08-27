import {describe, it} from 'mocha';
import * as assert from 'assert';
import * as path from 'path';
import * as fs from 'fs/promises';
import {POST_PROCESSING_TEMPLATES_PATH} from '../src/generate-index';
import {LIB_POST_COMBINATION} from './combine-libraries.test';
import {
  getSampleName,
  getSamplesMetadata,
  initialGenerateReadMe,
  SAMPLES_TEMPLATE_PATH,
  readAndWriteToReadme,
} from '../src/generate-readme';
import * as nj from 'nunjucks';

const TEST_FIXTURES_PATH = path.resolve('test/fixtures');
const COMBINED_LIBRARY_PATH = path.resolve(
  TEST_FIXTURES_PATH,
  'combined-library',
);

async function copyAndRename(sourcePath: string, newName: string) {
  const temporaryPath = `${newName}.temp`; // Use a temporary name to avoid issues

  try {
    // Step 1: Copy the file to a temporary name
    await fs.copyFile(sourcePath, temporaryPath);
    console.log(`File copied from ${sourcePath} to ${temporaryPath}`);

    // Step 2: Rename the temporary file to the final name
    await fs.rename(temporaryPath, newName);
    console.log(`File renamed from ${temporaryPath} to ${newName}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

describe('generate readme.ts', () => {
  it('get all the samples metadata', async () => {
    const samples = await getSamplesMetadata(
      path.join(COMBINED_LIBRARY_PATH, LIB_POST_COMBINATION),
    );
    assert.deepStrictEqual(samples.length, 52);

    // Randomly check that some samples exist
    assert.ok(
      samples
        .map(x => x.filePath)
        .includes(
          '/google-cloud-speech/samples/generated/v1/adaptation.update_custom_class.js',
        ),
    );
    assert.ok(samples.map(x => x.title).includes('update custom class'));
    assert.ok(
      samples
        .map(x => x.filePath)
        .includes(
          '/google-cloud-speech/samples/generated/v2/speech.get_phrase_set.js',
        ),
    );
    assert.ok(samples.map(x => x.title).includes('get phrase set'));
    assert.ok(
      samples
        .map(x => x.filePath)
        .includes(
          '/google-cloud-speech/samples/generated/v2/speech.undelete_recognizer.js',
        ),
    );
    assert.ok(samples.map(x => x.title).includes('undelete recognizer'));

    // Assert content exists
    assert.ok(samples.map(x => x.content).length);
  });

  it('should NOT throw if the sample name is not in the correct format; just return the name', async () => {
    const sampleName = getSampleName({
      filePath: 'not-in-the-correct-format',
    });
    assert.deepStrictEqual(sampleName, 'not-in-the-correct-format');
  });

  it('should generate a README with initial values with a release level if provided', async () => {
    // A little helper to ensure that the README has the 'untemplated'
    // values before rendering
    await copyAndRename(
      path.join(TEST_FIXTURES_PATH, 'untemplated-README.md'),
      path.join(COMBINED_LIBRARY_PATH, LIB_POST_COMBINATION, 'README.md'),
    );
    const samples = await getSamplesMetadata(
      path.join(COMBINED_LIBRARY_PATH, LIB_POST_COMBINATION),
    );
    const currentLibrary = path.join(
      COMBINED_LIBRARY_PATH,
      LIB_POST_COMBINATION,
    );
    const stringToReplaceForSampleTable = '[//]: # "samples"';
    const stringToReplaceForReleaseLevel = '[//]: # "releaseLevel"';
    const releaseLevel = 'stable';
    const writeLibrary = path.join(COMBINED_LIBRARY_PATH, LIB_POST_COMBINATION);
    await initialGenerateReadMe({
      currentLibrary,
      stringToReplaceForReleaseLevel,
      stringToReplaceForSampleTable,
      releaseLevel,
      writeLibrary,
    });
    const readMeContents = await fs.readFile(
      path.join(COMBINED_LIBRARY_PATH, LIB_POST_COMBINATION, 'README.md'),
      'utf8',
    );
    const env = new nj.Environment(
      new nj.FileSystemLoader(POST_PROCESSING_TEMPLATES_PATH),
      {autoescape: false}, // Disable autoescaping for code generation
    );

    // Now, render using the template's filename, and Nunjucks will find it
    // within the configured templateDirectory.
    const compiledTemplate = env.render(SAMPLES_TEMPLATE_PATH, {
      samplesMetadata: samples,
    });
    assert.match(readMeContents, new RegExp(compiledTemplate));
    assert.match(readMeContents, /stable/);
  });

  it('should generate a README with initial values with a default release level if none is provided', async () => {
    // A little helper to ensure that the README has the 'untemplated'
    // values before rendering
    await copyAndRename(
      path.join(TEST_FIXTURES_PATH, 'untemplated-README.md'),
      path.join(COMBINED_LIBRARY_PATH, LIB_POST_COMBINATION, 'README.md'),
    );
    const samples = await getSamplesMetadata(
      path.join(COMBINED_LIBRARY_PATH, LIB_POST_COMBINATION),
    );
    const currentLibrary = path.join(
      COMBINED_LIBRARY_PATH,
      LIB_POST_COMBINATION,
    );
    const stringToReplaceForSampleTable = '[//]: # "samples"';
    const stringToReplaceForReleaseLevel = '[//]: # "releaseLevel"';
    const writeLibrary = path.join(COMBINED_LIBRARY_PATH, LIB_POST_COMBINATION);
    await initialGenerateReadMe({
      currentLibrary,
      stringToReplaceForReleaseLevel,
      stringToReplaceForSampleTable,
      writeLibrary,
    });
    const readMeContents = await fs.readFile(
      path.join(COMBINED_LIBRARY_PATH, LIB_POST_COMBINATION, 'README.md'),
      'utf8',
    );
    const env = new nj.Environment(
      new nj.FileSystemLoader(POST_PROCESSING_TEMPLATES_PATH),
      {autoescape: false}, // Disable autoescaping for code generation
    );

    // Now, render using the template's filename, and Nunjucks will find it
    // within the configured templateDirectory.
    const compiledTemplate = env.render(SAMPLES_TEMPLATE_PATH, {
      samplesMetadata: samples,
    });
    assert.match(readMeContents, new RegExp(compiledTemplate));
    assert.match(readMeContents, /preview/);
  });

  it('should write to any README file with any regex that you give it', async () => {
    const testDirRead = path.join(TEST_FIXTURES_PATH, 'test-input-readme');
    const testDirWrite = path.join(TEST_FIXTURES_PATH, 'test-output-readme');
    await readAndWriteToReadme(
      testDirRead,
      '[//]: # "GOODBYE"',
      'We generated correctly! Hooray!',
      testDirWrite,
    );
    const readMeContents = await fs.readFile(
      path.join(testDirWrite, 'README.md'),
      'utf8',
    );
    assert.match(readMeContents, /We generated correctly! Hooray!/);
  });

  it('if a README does not exist, it should throw a helfpul error', async () => {
    try {
      await fs.rm(
        path.join(TEST_FIXTURES_PATH, 'test-output-readme', 'README.md'),
      );
    } catch (err) {
      console.log(
        `No readme in ${path.join(TEST_FIXTURES_PATH, 'test-output-readme', 'README.md')} to delete`,
      );
    }
    const testDirRead = path.join(TEST_FIXTURES_PATH, 'test-output-readme');
    await assert.rejects(
      () =>
        readAndWriteToReadme(
          testDirRead,
          '[//]: # "GOODBYE"',
          'We generated correctly! Hooray!',
          testDirRead,
        ),
      /does not exist; cannot write to/,
    );
  });
});
