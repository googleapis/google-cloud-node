import {traverseDirectory, generateFinalDirectoryPath, createDirectory} from '../src/combine-libraries';
import {describe, it} from 'mocha';
import * as path from 'path';

const TEST_FIXTURES_PATH = path.resolve('test/fixtures/combined-library');
describe('combine libraries', () => {
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
        console.log(await createDirectory(TEST_FIXTURES_PATH, path.resolve(TEST_FIXTURES_PATH, 'google-cloud-speech')));
        // console.log(paths)
        // console.log((new Set(paths)));
        // console.log(speechV1NodejsPaths);
        // console.log(speechV1P1Beta1NodejsPaths);
        // console.log(speechV2NodejsPaths);
    });
})