import {traverseDirectory, generateFinalDirectoryPath, combineLibraries} from '../src/combine-libraries';
import {describe, it, beforeEach} from 'mocha';
import * as path from 'path';
import * as fs from 'fs/promises';
import { extractClients, generateIndexTs } from '../src/generate-index';
import { getSamplesMetadata } from '../src/generate-readme';
// import { generateReadMe } from '../src/generate-readme';
const TEST_FIXTURES_PATH = path.resolve('test/fixtures/combined-library');
describe('generate index.ts', () => {
    // beforeEach( async() => {
    //     try{
    //         fs.rm(path.join(TEST_FIXTURES_PATH, 'google-cloud-speech'), {recursive: true})
    //     } catch (err) {

    //     }
    // })
    it('should extract versions', async () => {
        let accumulator: Object[] = [];
        // const speechV1NodejsPaths = await traverseDirectory(path.join(TEST_FIXTURES_PATH, 'speech-v1-nodejs'), accumulator);
    });

     it('should extract clients', async () => {
        let accumulator: string[] = [];
        console.log(await generateFinalDirectoryPath(path.join(TEST_FIXTURES_PATH, 'google-cloud-speech-nodejs')));
        // console.log(paths)
        // console.log((new Set(paths)));
        // console.log(speechV1NodejsPaths);
        // console.log(speechV1P1Beta1NodejsPaths);
        // console.log(speechV2NodejsPaths);
    });

    it('should generate index file', async () => {
        // let accumulator: string[] = [];
        console.log(await generateIndexTs(path.resolve(TEST_FIXTURES_PATH, 'google-cloud-speech')))
        // console.log(paths)
        // console.log((new Set(paths)));
        // console.log(speechV1NodejsPaths);
        // console.log(speechV1P1Beta1NodejsPaths);
        // console.log(speechV2NodejsPaths);
    });


    it('should get highest version with precedence', async () => {
        // let accumulator: string[] = [];
        console.log(await generateIndexTs(path.resolve(TEST_FIXTURES_PATH, 'google-cloud-speech')))
        // console.log(paths)
        // console.log((new Set(paths)));
        // console.log(speechV1NodejsPaths);
        // console.log(speechV1P1Beta1NodejsPaths);
        // console.log(speechV2NodejsPaths);
    });

})