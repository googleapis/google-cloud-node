# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/nodejs-storage?activeTab=versions

### [3.0.2](https://www.github.com/googleapis/nodejs-storage/compare/v3.0.1...v3.0.2) (2019-07-01)


### Bug Fixes

* **docs:** fix sample code in docs ([#759](https://www.github.com/googleapis/nodejs-storage/issues/759)) ([f9e5fd8](https://www.github.com/googleapis/nodejs-storage/commit/f9e5fd8))
* **docs:** link to reference docs section on googleapis.dev ([#753](https://www.github.com/googleapis/nodejs-storage/issues/753)) ([5e3a96b](https://www.github.com/googleapis/nodejs-storage/commit/5e3a96b))

### [3.0.1](https://www.github.com/googleapis/nodejs-storage/compare/v3.0.0...v3.0.1) (2019-06-14)


### Bug Fixes

* async should be dependency ([#743](https://www.github.com/googleapis/nodejs-storage/issues/743)) ([e542b8b](https://www.github.com/googleapis/nodejs-storage/commit/e542b8b))

## [3.0.0](https://www.github.com/googleapis/nodejs-storage/compare/v2.5.0...v3.0.0) (2019-06-14)


### ⚠ BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#688)

### Bug Fixes

* **deps:** update dependency @google-cloud/common to v1 ([#705](https://www.github.com/googleapis/nodejs-storage/issues/705)) ([72a9f51](https://www.github.com/googleapis/nodejs-storage/commit/72a9f51))
* **deps:** update dependency @google-cloud/paginator to v1 ([#695](https://www.github.com/googleapis/nodejs-storage/issues/695)) ([ada995e](https://www.github.com/googleapis/nodejs-storage/commit/ada995e))
* **deps:** update dependency @google-cloud/promisify to v1 ([#693](https://www.github.com/googleapis/nodejs-storage/issues/693)) ([5df2f83](https://www.github.com/googleapis/nodejs-storage/commit/5df2f83))
* **deps:** update dependency @google-cloud/pubsub to ^0.29.0 ([#714](https://www.github.com/googleapis/nodejs-storage/issues/714)) ([3ee1a2c](https://www.github.com/googleapis/nodejs-storage/commit/3ee1a2c))
* **deps:** update dependency arrify to v2 ([#667](https://www.github.com/googleapis/nodejs-storage/issues/667)) ([ce02c27](https://www.github.com/googleapis/nodejs-storage/commit/ce02c27))
* validate action of getSignedUrl() function ([#684](https://www.github.com/googleapis/nodejs-storage/issues/684)) ([1b09d24](https://www.github.com/googleapis/nodejs-storage/commit/1b09d24))
* **deps:** update dependency date-and-time to ^0.7.0 ([#736](https://www.github.com/googleapis/nodejs-storage/issues/736)) ([7071f26](https://www.github.com/googleapis/nodejs-storage/commit/7071f26))
* **deps:** update dependency xdg-basedir to v4 ([#681](https://www.github.com/googleapis/nodejs-storage/issues/681)) ([8b40e6a](https://www.github.com/googleapis/nodejs-storage/commit/8b40e6a))
* **docs:** move to new client docs URL ([#738](https://www.github.com/googleapis/nodejs-storage/issues/738)) ([a637f99](https://www.github.com/googleapis/nodejs-storage/commit/a637f99))
* **ts:** improve return types for response metadata ([#666](https://www.github.com/googleapis/nodejs-storage/issues/666)) ([da42bed](https://www.github.com/googleapis/nodejs-storage/commit/da42bed))
* **types:** fix signatures of listing methods ([#703](https://www.github.com/googleapis/nodejs-storage/issues/703)) ([42937a8](https://www.github.com/googleapis/nodejs-storage/commit/42937a8))


### Build System

* upgrade engines field to >=8.10.0 ([#688](https://www.github.com/googleapis/nodejs-storage/issues/688)) ([6a1fa0f](https://www.github.com/googleapis/nodejs-storage/commit/6a1fa0f))


### Features

* add file.isPublic() function ([#708](https://www.github.com/googleapis/nodejs-storage/issues/708)) ([f86cadb](https://www.github.com/googleapis/nodejs-storage/commit/f86cadb))
* support apiEndpoint override ([#728](https://www.github.com/googleapis/nodejs-storage/issues/728)) ([61eeb64](https://www.github.com/googleapis/nodejs-storage/commit/61eeb64))

## v2.5.0

04-04-2019 12:27 PDT

This release brings an option to file#getSignedURL to create a version 4 Signed URL.

```javascript
file.getSignedUrl({
  version: 'v4', // optional, defaults to v2 (existing version)
  action: 'read',
  expires: FUTURE_DATE,
})
```

### New Features
- feat: introduce v4 signed url ([#637](https://github.com/googleapis/nodejs-storage/pull/637))

### Dependencies
- chore(deps): update dependency @types/node to v11.13.0 ([#662](https://github.com/googleapis/nodejs-storage/pull/662))
- chore(deps): update dependency @types/tmp to v0.1.0
- chore(deps): upgrade to newest version of @google-cloud/common ([#657](https://github.com/googleapis/nodejs-storage/pull/657))
- chore(deps): update dependency typescript to ~3.4.0
- chore(deps): update dependency tmp to ^0.1.0 ([#641](https://github.com/googleapis/nodejs-storage/pull/641))

### Documentation
- docs: regenerate the samples/README.md ([#649](https://github.com/googleapis/nodejs-storage/pull/649))
- docs: slight difference in how nightly synthtool run generated README ([#650](https://github.com/googleapis/nodejs-storage/pull/650))
- docs: new synthtool generated README ([#645](https://github.com/googleapis/nodejs-storage/pull/645))
- docs(samples): refactor the quickstart to match the new rubric ([#647](https://github.com/googleapis/nodejs-storage/pull/647))
- docs: update README format
- docs: add requires_billing, retire .cloud-repo-tools.json ([#644](https://github.com/googleapis/nodejs-storage/pull/644))
- docs: add additional api_id field ([#640](https://github.com/googleapis/nodejs-storage/pull/640))
- docs: document destination option ([#633](https://github.com/googleapis/nodejs-storage/pull/633))
- docs: clarify in docs, the meaning of ASIA and coldline ([#632](https://github.com/googleapis/nodejs-storage/pull/632))
- docs: add a .repo-metadata.json ([#639](https://github.com/googleapis/nodejs-storage/pull/639))

### Internal / Testing Changes
- test(v2-sign): add multi-valued headers system-test ([#646](https://github.com/googleapis/nodejs-storage/pull/646))
- refactor: replace once with onetime ([#660](https://github.com/googleapis/nodejs-storage/pull/660))
- fix: do not download cached files ([#643](https://github.com/googleapis/nodejs-storage/pull/643))
- chore: publish to npm using wombat ([#634](https://github.com/googleapis/nodejs-storage/pull/634))
- build: use per-repo npm publish token ([#630](https://github.com/googleapis/nodejs-storage/pull/630))

## v2.4.3

03-13-2019 17:10 PDT

### Bug Fixes / Implementation Changes
- fix: getSigned(Policy|Url) throws if expiration is invalid Date ([#614](https://github.com/googleapis/nodejs-storage/pull/614))
- fix: handle errors from file#createReadStream ([#615](https://github.com/googleapis/nodejs-storage/pull/615))

### Dependencies
- fix(deps): update dependency @google-cloud/paginator to ^0.2.0
- fix(deps): update dependency gcs-resumable-upload to v1 ([#619](https://github.com/googleapis/nodejs-storage/pull/619))
- fix(deps): update dependency @google-cloud/pubsub to ^0.27.0 ([#620](https://github.com/googleapis/nodejs-storage/pull/620))
- fix(deps): update dependency @google-cloud/pubsub to ^0.26.0 ([#618](https://github.com/googleapis/nodejs-storage/pull/618))
- fix(deps): update dependency @google-cloud/pubsub to ^0.25.0 ([#616](https://github.com/googleapis/nodejs-storage/pull/616))
- chore(deps): update dependency mocha to v6 ([#611](https://github.com/googleapis/nodejs-storage/pull/611))
- fix(deps): update dependency @google-cloud/promisify to ^0.4.0 ([#609](https://github.com/googleapis/nodejs-storage/pull/609))
- chore(deps): update dependency @types/tmp to v0.0.34 ([#608](https://github.com/googleapis/nodejs-storage/pull/608))
- fix(deps): update dependency yargs to v13 ([#606](https://github.com/googleapis/nodejs-storage/pull/606))

### Documentation
- docs: update links in contrib guide ([#610](https://github.com/googleapis/nodejs-storage/pull/610))
- docs: update contributing path in README ([#603](https://github.com/googleapis/nodejs-storage/pull/603))
- chore: move CONTRIBUTING.md to root ([#601](https://github.com/googleapis/nodejs-storage/pull/601))

### Internal / Testing Changes
- build: Add docuploader credentials to node publish jobs ([#624](https://github.com/googleapis/nodejs-storage/pull/624))
- build: use node10 to run samples-test, system-test etc ([#623](https://github.com/googleapis/nodejs-storage/pull/623))
- build: update release configuration
- build: use linkinator for docs test ([#607](https://github.com/googleapis/nodejs-storage/pull/607))
- build: create docs test npm scripts ([#605](https://github.com/googleapis/nodejs-storage/pull/605))
- build: test using @grpc/grpc-js in CI ([#604](https://github.com/googleapis/nodejs-storage/pull/604))
- chore: remove console.log in system test ([#599](https://github.com/googleapis/nodejs-storage/pull/599))

## v2.4.2

02-05-2019 16:55 PST
  
### Dependencies

- deps: update @google-cloud/common ([#596](https://github.com/googleapis/nodejs-storage/pull/596))
- chore(deps): update dependency typescript to ~3.3.0 ([#591](https://github.com/googleapis/nodejs-storage/pull/591))

### Documentation

- docs: add lint/fix example to contributing guide ([#594](https://github.com/googleapis/nodejs-storage/pull/594))

### Internal / Testing Changes

- test: skip public bucket system tests running under VPCSC ([#595](https://github.com/googleapis/nodejs-storage/pull/595))

## v2.4.1

01-29-2019 13:05 PST

### Implementation Changes
- fix(ts): fix Storage.createBucket overloaded signature ([#589](https://github.com/googleapis/nodejs-storage/pull/589))

### Dependencies
- fix(deps): update dependency @google-cloud/pubsub to ^0.24.0 ([#588](https://github.com/googleapis/nodejs-storage/pull/588))

## v2.4.0

01-28-2019 12:13 PST

### New Features
- fix: `expires` can be a Date, string, or number ([#548](https://github.com/googleapis/nodejs-storage/pull/548))

### Dependencies
- deps: upgrade nodejs-common ([#582](https://github.com/googleapis/nodejs-storage/pull/582))
- chore(deps): update dependency eslint-config-prettier to v4 ([#586](https://github.com/googleapis/nodejs-storage/pull/586))
- fix(deps): update dependency @google-cloud/pubsub to ^0.23.0 ([#583](https://github.com/googleapis/nodejs-storage/pull/583))
- fix(deps): update dependency concat-stream to v2 ([#563](https://github.com/googleapis/nodejs-storage/pull/563))

### Documentation
- docs(samples): Bucket Policy Only Samples ([#557](https://github.com/googleapis/nodejs-storage/pull/557))
- fix(docs): move jsdoc away from interface ([#565](https://github.com/googleapis/nodejs-storage/pull/565))

### Internal / Testing Changes
- test: Bucket Policy Only related system test ([#579](https://github.com/googleapis/nodejs-storage/pull/579))
- build: check broken links in generated docs ([#567](https://github.com/googleapis/nodejs-storage/pull/567))
- build: include only build/src in compiled source ([#572](https://github.com/googleapis/nodejs-storage/pull/572))

## v2.3.4

12-19-2018 14:21 PST

### Implementation Changes
- fix(types): file.getMetadata should resolves to Metadata, not File ([#560](https://github.com/googleapis/nodejs-storage/pull/560))

### Internal / Testing Changes
- refactor: modernize the sample tests ([#558](https://github.com/googleapis/nodejs-storage/pull/558))
- chore(build): inject yoshi automation key ([#555](https://github.com/googleapis/nodejs-storage/pull/555))
- chore: update nyc and eslint configs ([#554](https://github.com/googleapis/nodejs-storage/pull/554))
- chore: fix publish.sh permission +x ([#552](https://github.com/googleapis/nodejs-storage/pull/552))
- fix(build): fix Kokoro release script ([#551](https://github.com/googleapis/nodejs-storage/pull/551))
- build: add Kokoro configs for autorelease ([#550](https://github.com/googleapis/nodejs-storage/pull/550))

## v2.3.3

12-06-2018 17:09 PST

### Dependencies
- chore(deps): update dependency @types/configstore to v4 ([#537](https://github.com/googleapis/nodejs-storage/pull/537))
- chore(deps): update dependency @google-cloud/pubsub to ^0.22.0 ([#535](https://github.com/googleapis/nodejs-storage/pull/535))

### Documentation
- fix(docs): place doc comment above the last overload ([#544](https://github.com/googleapis/nodejs-storage/pull/544))
- docs: update readme badges ([#536](https://github.com/googleapis/nodejs-storage/pull/536))

### Internal / Testing Changes
- chore: always nyc report before calling codecov ([#543](https://github.com/googleapis/nodejs-storage/pull/543))
- chore: nyc ignore build/test by default ([#542](https://github.com/googleapis/nodejs-storage/pull/542))
- chore: update license file ([#539](https://github.com/googleapis/nodejs-storage/pull/539))

## v2.3.2

This patch release fixed an issue affecting reading from a file on GCS ([#528](https://github.com/googleapis/nodejs-storage/issues/528)).

### Dependencies
- fix(dep): upgrade teeny-request to v3.11.3 ([#529](https://github.com/googleapis/nodejs-storage/pull/529))
- fix(deps): update dependency @google-cloud/common to ^0.27.0 ([#525](https://github.com/googleapis/nodejs-storage/pull/525))

### Internal / Testing Changes
- refactor: convert sample tests from ava to mocha ([#523](https://github.com/googleapis/nodejs-storage/pull/523))
- docs(samples): updated samples code to use async await ([#521](https://github.com/googleapis/nodejs-storage/pull/521))
- chore: add synth.metadata
- fix(ts): Update bucket options types ([#518](https://github.com/googleapis/nodejs-storage/pull/518))

## v2.3.1

11-14-2018 22:15 PST

### Bug fixes
- fix: fix TypeScript and system tests ([#515](https://github.com/googleapis/nodejs-storage/pull/515))
- fix(deps): update dependency through2 to v3 ([#507](https://github.com/googleapis/nodejs-storage/pull/507))
- docs: File#setMetadata in parallel results in unpredictable state ([#504](https://github.com/googleapis/nodejs-storage/pull/504))

### Internal / Testing Changes
- chore(deps): update dependency gts to ^0.9.0 ([#514](https://github.com/googleapis/nodejs-storage/pull/514))
- chore: update eslintignore config ([#513](https://github.com/googleapis/nodejs-storage/pull/513))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#512](https://github.com/googleapis/nodejs-storage/pull/512))
- refactor: use object.assign where possible ([#510](https://github.com/googleapis/nodejs-storage/pull/510))
- chore: drop contributors from multiple places ([#511](https://github.com/googleapis/nodejs-storage/pull/511))
- chore: use latest npm on Windows ([#509](https://github.com/googleapis/nodejs-storage/pull/509))

## v2.3.0

### Implementation Changes
- fix(types): Fixes getSignedUrl Return Type ([#496](https://github.com/googleapis/nodejs-storage/pull/496))
-
### New Features
- Introduce Object Lifecycle Management ([#471](https://github.com/googleapis/nodejs-storage/pull/471))

### Dependencies
- chore(deps): update dependency eslint-plugin-node to v8 ([#490](https://github.com/googleapis/nodejs-storage/pull/490))

### Internal / Testing Changes
- chore: update issue templates ([#488](https://github.com/googleapis/nodejs-storage/pull/488))

## v2.2.0

### Bug Fixes
- fix: re-enable typescript types ([#484](https://github.com/googleapis/nodejs-storage/pull/484))

### Dependencies
- fix(deps): update dependency @google-cloud/common to ^0.26.0 (edited) ([#480](https://github.com/googleapis/nodejs-storage/pull/480))
- chore: Remove 'is' dependency ([#462](https://github.com/googleapis/nodejs-storage/pull/462))
- chore: upgrade teeny-request to 3.11.0 with type definitions ([#457](https://github.com/googleapis/nodejs-storage/pull/457))
- feat: use small HTTP dependency ([#416](https://github.com/googleapis/nodejs-storage/pull/416))

### Documentation
- docs: Minor docs correction ([#465](https://github.com/googleapis/nodejs-storage/pull/465))

### Internal / Testing Changes
- chore: remove old issue template ([#485](https://github.com/googleapis/nodejs-storage/pull/485))
- chore(typescript): enable noImplicitAny ([#483](https://github.com/googleapis/nodejs-storage/pull/483))
- chore(typescript): improve typescript types and update tests ([#482](https://github.com/googleapis/nodejs-storage/pull/482))
- build: run tests on node11 ([#481](https://github.com/googleapis/nodejs-storage/pull/481))
- chores(build): do not collect sponge.xml from windows builds ([#478](https://github.com/googleapis/nodejs-storage/pull/478))
- chores(build): run codecov on continuous builds ([#476](https://github.com/googleapis/nodejs-storage/pull/476))
- chore: update new issue template ([#475](https://github.com/googleapis/nodejs-storage/pull/475))
- fix: enable noImplicitAny for src/bucket.ts ([#472](https://github.com/googleapis/nodejs-storage/pull/472))
- fix(tests): use unique prefix for system tests to avoid collision with another run ([#468](https://github.com/googleapis/nodejs-storage/pull/468))
- fix: improve the types ([#467](https://github.com/googleapis/nodejs-storage/pull/467))
- chore: move class Storage to storage.ts, create index.ts that contains all exports ([#464](https://github.com/googleapis/nodejs-storage/pull/464))
- chore: add types to many unit tests ([#463](https://github.com/googleapis/nodejs-storage/pull/463))
- fix: Annotate Iam types ([#461](https://github.com/googleapis/nodejs-storage/pull/461))
- fix: complete bucket.ts noImplicitAny ([#460](https://github.com/googleapis/nodejs-storage/pull/460))
- fix: improve the types on acl.ts ([#459](https://github.com/googleapis/nodejs-storage/pull/459))
- fix: improve types (7) ([#458](https://github.com/googleapis/nodejs-storage/pull/458))
- fix: improve the types ([#453](https://github.com/googleapis/nodejs-storage/pull/453))
- chore: update build config ([#455](https://github.com/googleapis/nodejs-storage/pull/455))
- fix: improve typescript types in src/file.ts ([#450](https://github.com/googleapis/nodejs-storage/pull/450))
- build: fix codecov uploading on Kokoro ([#451](https://github.com/googleapis/nodejs-storage/pull/451))
- test: Attempt to re-enable iam#testPermissions ([#429](https://github.com/googleapis/nodejs-storage/pull/429))
- chore(deps): update dependency sinon to v7 ([#449](https://github.com/googleapis/nodejs-storage/pull/449))
- Re-generate library using /synth.py ([#448](https://github.com/googleapis/nodejs-storage/pull/448))
- Correct parameter name. ([#446](https://github.com/googleapis/nodejs-storage/pull/446))

## v2.1.0

This release brings support for Bucket/Object lock operations, as well as disable TypeScript as we continue to annotate the project with types.

### New Features
- feat: Support Bucket/Object lock operations ([#374](https://github.com/googleapis/nodejs-storage/pull/374))

### Implementation Changes
- disable types for now ([#392](https://github.com/googleapis/nodejs-storage/pull/392))
- Don't publish sourcemaps ([#412](https://github.com/googleapis/nodejs-storage/pull/412))
#### TypeScript support (in progress)
- fix: add better types for file.ts ([#436](https://github.com/googleapis/nodejs-storage/pull/436))
- fix: use ~ for typescript (and fix compile errors) ([#426](https://github.com/googleapis/nodejs-storage/pull/426))
- fix: Add typing for File#download() ([#409](https://github.com/googleapis/nodejs-storage/pull/409))
- chore: convert system tests to typescript ([#424](https://github.com/googleapis/nodejs-storage/pull/424))
- Improve TypeScript types (part 4) ([#402](https://github.com/googleapis/nodejs-storage/pull/402))
- ts: convert jsdoc types to typescript interfaces (1) ([#383](https://github.com/googleapis/nodejs-storage/pull/383))
- fix: TS definition ([#387](https://github.com/googleapis/nodejs-storage/pull/387))
- Annotate types [#3](https://github.com/googleapis/nodejs-storage/pull/3) ([#391](https://github.com/googleapis/nodejs-storage/pull/391))
- Annotate types (2) ([#388](https://github.com/googleapis/nodejs-storage/pull/388))

### Dependencies
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#419](https://github.com/googleapis/nodejs-storage/pull/419))

### Documentation
- docs: Modify source location for templates ([#410](https://github.com/googleapis/nodejs-storage/pull/410))
- docs: Explain `Bucket#upload()` still exists ([#421](https://github.com/googleapis/nodejs-storage/pull/421))

### Internal / Testing Changes
- fix(tests): fix system tests on CircleCI ([#431](https://github.com/googleapis/nodejs-storage/pull/431))
- fix(tests): system-test compiles to ./build, fix relative path ([#428](https://github.com/googleapis/nodejs-storage/pull/428))
- Update kokoro config ([#425](https://github.com/googleapis/nodejs-storage/pull/425))
- chore(samples): convert samples to async/await ([#422](https://github.com/googleapis/nodejs-storage/pull/422))
- build: samples test by adding approprate test variables ([#423](https://github.com/googleapis/nodejs-storage/pull/423))
- build: bring in latest kokoro cfgs to run System tests on PRs ([#413](https://github.com/googleapis/nodejs-storage/pull/413))
- test: remove appveyor config ([#411](https://github.com/googleapis/nodejs-storage/pull/411))
- Enable prefer-const in the eslint config ([#404](https://github.com/googleapis/nodejs-storage/pull/404))
- fix(test): instantiate PubSub using new ([#403](https://github.com/googleapis/nodejs-storage/pull/403))
- fix: optionsOrCallback could be undefined if not given, check before assign ([#401](https://github.com/googleapis/nodejs-storage/pull/401))
- Fix the requesterPays methods ([#400](https://github.com/googleapis/nodejs-storage/pull/400))
- Enable no-var in eslint ([#398](https://github.com/googleapis/nodejs-storage/pull/398))
- samples: don't use USA formatted dates for expiry ([#396](https://github.com/googleapis/nodejs-storage/pull/396))
- fix: copy(): Use correct destination file name in URI ([#389](https://github.com/googleapis/nodejs-storage/pull/389))

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

### `bucket.upload` no longer accepts URLs
To better support a variety of HTTP clients, the remote fetching functionality of `bucket.upload` has been removed. It can be replaced with your favorite HTTP client.

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
