# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/nodejs-storage?activeTab=versions

## v2.0.3

### Implementation Changes
- Improve TypeScript types ([#381](https://github.com/googleapis/nodejs-storage/pull/381))
- Make some parameters optional ([#380](https://github.com/googleapis/nodejs-storage/pull/380))

## v2.0.2

### Implementation Changes
- Improve the types (#377)

## v2.0.1

**This fixes types declaration issues with projects using TypeScript.**

### Implementation Changes
- Enable noImplicitThis in the tsconfig ([#370](https://github.com/googleapis/nodejs-storage/pull/370))
- Fix the path to the d.ts ([#364](https://github.com/googleapis/nodejs-storage/pull/364))
- fix: make dependency on request explicit ([#361](https://github.com/googleapis/nodejs-storage/pull/361))
- fix: remove trailing slashes from bucket name. ([#266](https://github.com/googleapis/nodejs-storage/pull/266))

### Dependencies
- fix(deps): update dependency @google-cloud/common to ^0.24.0 ([#367](https://github.com/googleapis/nodejs-storage/pull/367))
- fix(deps): update dependency gcs-resumable-upload to ^0.13.0 ([#368](https://github.com/googleapis/nodejs-storage/pull/368))
- Remove unused dependencies ([#363](https://github.com/googleapis/nodejs-storage/pull/363))
- Remove safe-buffer ([#359](https://github.com/googleapis/nodejs-storage/pull/359))
- samples: update dependency @google-cloud/storage to v2 ([#350](https://github.com/googleapis/nodejs-storage/pull/350))

### Internal / Testing Changes
- Update CI config ([#371](https://github.com/googleapis/nodejs-storage/pull/371))
- build(kokoro): run docker as user node ([#358](https://github.com/googleapis/nodejs-storage/pull/358))
- build: fix multiline in circle.yml ([#357](https://github.com/googleapis/nodejs-storage/pull/357))
- fix executable modes on .sh's; add pre-system-test.sh hook ([#356](https://github.com/googleapis/nodejs-storage/pull/356))
- decrypt both service account keys ([#353](https://github.com/googleapis/nodejs-storage/pull/353))
- Retry npm install in CI ([#352](https://github.com/googleapis/nodejs-storage/pull/352))
- Add synth script and run it ([#351](https://github.com/googleapis/nodejs-storage/pull/351))

## v2.0.0

**This release has breaking changes**.  This release has a few notable breaking changes.  Please take care when upgrading!

### require syntax changes
The import style of this library has been changed to support [es module](https://nodejs.org/api/esm.html) syntax.  This provides both forward compatibility with es modules, and better supports the TypeScript and Babel ecosystems.  As a result, the import syntax has changed:

#### Old Code
```js
const storage = require('@google-cloud/storage')();
// or...
const Storage = require('@google-cloud/storage');
const storage = new Storage({
  // config...
});
```

#### New Code
```js
const {Storage} = require('@google-cloud/storage');
const storage = new Storage({
  // config...
});
```

### `bucket.upload` method removed
To better support a variety of HTTP clients, the `bucket.upload` method has been removed. It can be replaced with your favorite HTTP client.

#### Old Code
```js
bucket.upload('https://example.com/images/image.png', function(err, file, res) {
  // handle upload...
});
```

#### New Code

```js
const request = require('request');
const file = bucket.file(name);
const writeStream = file.createWriteStream();
request(url).pipe(writeStream);
```

### Breaking changes
- semver: do not support upload() from url (#337)
- fix: drop support for node.js 4.x and 9.x (#282)

### Features
- refactor(ts): merge initial TypeScript conversion (#334)
- feat: Add Storage#getServiceAccount(). (#331)
- Kms sample (#209)

### Bug fixes
- fix: gzip and Cache-Control headers in upload sample (#225)
- fix: move this.[ROLE]s initialization from Acl to AclAccessorRoleMethods (#252)
- fix: signedURL cname (#210) (#234)

### Internal / Testing Changes
- chore(deps): update dependency nyc to v13 (#341)
- fix(deps): update dependency @google-cloud/common to ^0.23.0 (#340)
- test: throw on deprecation (#319)
- chore(deps): update dependency eslint-config-prettier to v3 (#336)
- fix(deps): update dependency gcs-resumable-upload to ^0.12.0 (#317)
- Fix system tests for string comparisons (#328)
- chore: ignore package-lock.json (#326)
- chore: update renovate config (#322)
- chore: regen lock files (#318)
- chore(deps): lock file maintenance (#313)
- chore: move mocha options to mocha.opts (#311)
- chore(deps): lock file maintenance (#309)
- test: use strictEqual in tests (#306)
- chore(deps): update dependency eslint-plugin-node to v7 (#305)
- chore(deps): lock file maintenance (#303)
- chore(deps): lock file maintenance (#285)
- fix: test meant to assert err msg exists (#280)
- fix(deps): update dependency yargs to v12 (#270)
- fix(deps): update dependency uuid to v3.3.2 (#269)
- chore: update gcs-resumable-upload to 0.11.1 (#265)
- fix(deps): update dependency uuid to v3.3.0 (#262)
- chore(deps): update dependency sinon to v6 (#263)
- Configure Renovate (#250)
- refactor: drop repo-tool as an exec wrapper (#258)
- chore: update sample lockfiles (#256)
- fix: update linking for samples (#254)
- chore(package): update eslint to version 5.0.0 (#253)
- refactor(es6): Refactor constructor pattern as ES6 class (#246)
- Update @google-cloud/common to the latest version 🚀 (#226)
- system-tests: fix channel test. (#243)
- refactor: Update to the latest version of nodejs-common and gcs-resumable-upload (#202)
- Fix permission of bash script for Kokoro (#223)
- chore(package): update nyc to version 12.0.2 (#216)
- chore: fix prettier incompatibility (#211)

