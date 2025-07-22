import {traverseDirectory, generateFinalDirectoryPath, createDirectory} from '../src/combine-libraries';
import {describe, it, beforeEach} from 'mocha';
import * as path from 'path';
import * as fs from 'fs/promises';

const TEST_FIXTURES_PATH = path.resolve('test/fixtures/combined-library');
describe('combine libraries', () => {
    beforeEach( async() => {
        try{
            fs.rm(path.join(TEST_FIXTURES_PATH, 'google-cloud-speech'), {recursive: true})
        } catch (err) {

        }
    })
    it('should traverse the directory', async () => {
        let accumulator: Object[] = [];
        // const speechV1NodejsPaths = await traverseDirectory(path.join(TEST_FIXTURES_PATH, 'speech-v1-nodejs'), accumulator);
    });

     it('should traverse the directory', async () => {
        let accumulator: string[] = [];
        console.log(await generateFinalDirectoryPath(path.join(TEST_FIXTURES_PATH, 'google-cloud-speech-nodejs')));
        // console.log(paths)
        // console.log((new Set(paths)));
        // console.log(speechV1NodejsPaths);
        // console.log(speechV1P1Beta1NodejsPaths);
        // console.log(speechV2NodejsPaths);
    });

    it.only('should traverse the directory', async () => {
        // let accumulator: string[] = [];
        console.log(await createDirectory(path.join(TEST_FIXTURES_PATH, 'google-cloud-speech-nodejs'), path.resolve(TEST_FIXTURES_PATH, 'google-cloud-speech')));
        // console.log(paths)
        // console.log((new Set(paths)));
        // console.log(speechV1NodejsPaths);
        // console.log(speechV1P1Beta1NodejsPaths);
        // console.log(speechV2NodejsPaths);
    });
})