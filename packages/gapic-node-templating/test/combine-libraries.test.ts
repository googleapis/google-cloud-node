import {traverseDirectory, generateFinalDirectoryPath, combineLibraries} from '../src/combine-libraries';
import {describe, it, beforeEach} from 'mocha';
import * as path from 'path';
import * as fs from 'fs/promises';
import { extractClients, generateIndexTs } from '../src/generate-index';
import { getSamplesMetadata } from '../src/generate-readme';
import * as assert from 'assert';
// import { generateReadMe } from '../src/generate-readme';
const TEST_FIXTURES_PATH = path.resolve('test/fixtures/combined-library');
const LIB_PRE_COMBINATION = 'google-cloud-speech-nodejs';
const LIB_POST_COMBINATION = 'google-cloud-speech';
describe('combine libraries', () => {
    // Even though the combine libraries module removes and creates
    // anything given in its write place, removing what's in place
    // allows us to assert proper behavior
    beforeEach(async() => {
        try {
            fs.rm(path.join(TEST_FIXTURES_PATH, LIB_PRE_COMBINATION), {recursive: true})
        } catch (err) {
            console.log(`Could not delete ${LIB_POST_COMBINATION} directory`);
        }
    });

    it('should traverse the directory', async () => {
        let accumulator: Object[] = [];
        // const speechV1NodejsPaths = await traverseDirectory(path.join(TEST_FIXTURES_PATH, 'speech-v1-nodejs'), accumulator);
    });

     it('should generate unique final directory paths', async () => {
        let accumulator: string[] = [];
        console.log(await generateFinalDirectoryPath(path.join(TEST_FIXTURES_PATH, LIB_PRE_COMBINATION)));
        // console.log(paths)
        // console.log((new Set(paths)));
        // console.log(speechV1NodejsPaths);
        // console.log(speechV1P1Beta1NodejsPaths);
        // console.log(speechV2NodejsPaths);
    });

    it('should generate index file', async () => {
        // let accumulator: string[] = [];
        console.log(await generateIndexTs(path.resolve(TEST_FIXTURES_PATH, LIB_POST_COMBINATION)))
        // console.log(paths)
        // console.log((new Set(paths)));
        // console.log(speechV1NodejsPaths);
        // console.log(speechV1P1Beta1NodejsPaths);
        // console.log(speechV2NodejsPaths);
    });


    it.only('should create a combined library', async () => {
        const library = await combineLibraries(path.resolve(TEST_FIXTURES_PATH, LIB_PRE_COMBINATION), path.resolve(TEST_FIXTURES_PATH, LIB_POST_COMBINATION))
        
        assert.ok(fs.stat(path.resolve(TEST_FIXTURES_PATH, LIB_POST_COMBINATION)));
        // We won't assert very specific library structure, but we will assert
        // the top-level folders
        assert.ok(fs.stat(path.resolve(TEST_FIXTURES_PATH, LIB_POST_COMBINATION, 'protos')));
        assert.ok(fs.stat(path.resolve(TEST_FIXTURES_PATH, LIB_POST_COMBINATION, 'samples')));
        assert.ok(fs.stat(path.resolve(TEST_FIXTURES_PATH, LIB_POST_COMBINATION, 'src')));
        assert.ok(fs.stat(path.resolve(TEST_FIXTURES_PATH, LIB_POST_COMBINATION, 'system-test')));
        assert.ok(fs.stat(path.resolve(TEST_FIXTURES_PATH, LIB_POST_COMBINATION, 'test')));

        // // let accumulator: string[] = [];
        // console.log(await generateIndexTs(path.resolve(TEST_FIXTURES_PATH, 'google-cloud-speech')))
        // // console.log(paths)
        // // console.log((new Set(paths)));
        // // console.log(speechV1NodejsPaths);
        // // console.log(speechV1P1Beta1NodejsPaths);
        // // console.log(speechV2NodejsPaths);
    });

    it('should create a directory and write files', async () => {
        // let accumulator: string[] = [];
        console.log(await generateIndexTs(path.resolve(TEST_FIXTURES_PATH, LIB_POST_COMBINATION)))
        // console.log(paths)
        // console.log((new Set(paths)));
        // console.log(speechV1NodejsPaths);
        // console.log(speechV1P1Beta1NodejsPaths);
        // console.log(speechV2NodejsPaths);
    });


})