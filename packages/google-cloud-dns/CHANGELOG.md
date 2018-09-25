# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/dns?activeTab=versions

## v0.8.0

**THIS RELEASE HAS BREAKING CHANGES**.  It also has a few new great features like TypeScript support.  Enjoy 🎉

#### Support for node.js 4.x and 9.x has ended
Please upgrade to an LTS version of node.

#### es-style imports
This module now supports es module style imports.  This provides forward compatibility with TypeScript, Babel, and the new es module spec.

#### Old code
```js
const DNS = require('@google-cloud/dns');
const dns = new DNS();
// OR...
const dns = require('@google-cloud/dns')();
```

#### New code
```js
const {DNS} = require('@google-cloud/dns');
const dns = new DNS();
```

### Bug fixes
- fix: improve the types ([#114](https://github.com/googleapis/nodejs-dns/pull/114))
- fix(DNS): Refine type of getZonesStream ([#113](https://github.com/googleapis/nodejs-dns/pull/113))
- fix(DNS): Add post-promisify type overloads to DNS methods ([#112](https://github.com/googleapis/nodejs-dns/pull/112))
- fix: Improve typescript types ([#109](https://github.com/googleapis/nodejs-dns/pull/109))
- fix: drop support for node.js 4.x and 9.x ([#68](https://github.com/googleapis/nodejs-dns/pull/68))
- fix: update all dependencies ([#43](https://github.com/googleapis/nodejs-dns/pull/43))

### New Features
- feat: use small HTTP dependency ([#93](https://github.com/googleapis/nodejs-dns/pull/93))
- feat: Convert to TypeScript ([#97](https://github.com/googleapis/nodejs-dns/pull/97))

### Dependencies
- fix(deps): update dependency @google-cloud/common to ^0.25.0 ([#107](https://github.com/googleapis/nodejs-dns/pull/107))
- chore(deps): update dependency @google-cloud/common to ^0.23.0 ([#92](https://github.com/googleapis/nodejs-dns/pull/92))
- fix(deps): update dependency @google-cloud/common to ^0.22.0 ([#87](https://github.com/googleapis/nodejs-dns/pull/87))
- fix(deps): update dependency @google-cloud/common to ^0.21.0 ([#82](https://github.com/googleapis/nodejs-dns/pull/82))
- fix(package): update @google-cloud/common to version 0.20.0 ([#52](https://github.com/googleapis/nodejs-dns/pull/52))
- Update @google-cloud/common to the latest version 🚀 ([#31](https://github.com/googleapis/nodejs-dns/pull/31))

### Documentation
- docs(DNS): Remove extra space in "high- performance" ([#111](https://github.com/googleapis/nodejs-dns/pull/111))

### Internal / Testing Changes
- fix: Remove "prettier" from "npm run fix" ([#116](https://github.com/googleapis/nodejs-dns/pull/116))
- Update kokoro config ([#117](https://github.com/googleapis/nodejs-dns/pull/117))
- test: remove appveyor config ([#115](https://github.com/googleapis/nodejs-dns/pull/115))
- Update kokoro config ([#110](https://github.com/googleapis/nodejs-dns/pull/110))
- Enable prefer-const in the eslint config ([#108](https://github.com/googleapis/nodejs-dns/pull/108))
- Enable no-var in eslint ([#106](https://github.com/googleapis/nodejs-dns/pull/106))
- Enable noImplicitAny ([#105](https://github.com/googleapis/nodejs-dns/pull/105))
- Improve the types ([#103](https://github.com/googleapis/nodejs-dns/pull/103))
- Update CI config ([#104](https://github.com/googleapis/nodejs-dns/pull/104))
- Enable noImplicitThis ([#102](https://github.com/googleapis/nodejs-dns/pull/102))
- chore(deps): update dependency typescript to v3 ([#101](https://github.com/googleapis/nodejs-dns/pull/101))
- Enable gts fix ([#98](https://github.com/googleapis/nodejs-dns/pull/98))
- Add synth script and update CI ([#96](https://github.com/googleapis/nodejs-dns/pull/96))
- Retry npm install in CI ([#95](https://github.com/googleapis/nodejs-dns/pull/95))
- chore(deps): update dependency nyc to v13 ([#90](https://github.com/googleapis/nodejs-dns/pull/90))
- chore: use es classes ([#88](https://github.com/googleapis/nodejs-dns/pull/88))
- test: fail when system-tests do not run ([#86](https://github.com/googleapis/nodejs-dns/pull/86))
- chore(deps): update dependency eslint-config-prettier to v3 ([#85](https://github.com/googleapis/nodejs-dns/pull/85))
- chore: split the usage of common ([#84](https://github.com/googleapis/nodejs-dns/pull/84))
- chore: ignore package-lock.json ([#83](https://github.com/googleapis/nodejs-dns/pull/83))
- chore(deps): lock file maintenance ([#81](https://github.com/googleapis/nodejs-dns/pull/81))
- chore: update renovate config ([#80](https://github.com/googleapis/nodejs-dns/pull/80))
- remove that whitespace ([#79](https://github.com/googleapis/nodejs-dns/pull/79))
- chore(deps): lock file maintenance ([#78](https://github.com/googleapis/nodejs-dns/pull/78))
- chore: assert.deelEqual => assert.deepStrictEqual ([#77](https://github.com/googleapis/nodejs-dns/pull/77))
- chore: move mocha options to mocha.opts ([#75](https://github.com/googleapis/nodejs-dns/pull/75))
- chore: require node 8 for samples ([#76](https://github.com/googleapis/nodejs-dns/pull/76))
- chore(deps): lock file maintenance ([#74](https://github.com/googleapis/nodejs-dns/pull/74))
- chore(deps): update dependency eslint-plugin-node to v7 ([#72](https://github.com/googleapis/nodejs-dns/pull/72))
- test: use strictEqual in tests ([#73](https://github.com/googleapis/nodejs-dns/pull/73))
- chore(deps): lock file maintenance ([#71](https://github.com/googleapis/nodejs-dns/pull/71))
- chore(deps): lock file maintenance ([#70](https://github.com/googleapis/nodejs-dns/pull/70))
- chore(deps): lock file maintenance ([#69](https://github.com/googleapis/nodejs-dns/pull/69))
- chore(deps): lock file maintenance ([#67](https://github.com/googleapis/nodejs-dns/pull/67))
- chore(deps): lock file maintenance ([#66](https://github.com/googleapis/nodejs-dns/pull/66))
- chore(deps): lock file maintenance ([#65](https://github.com/googleapis/nodejs-dns/pull/65))
- chore(deps): lock file maintenance ([#64](https://github.com/googleapis/nodejs-dns/pull/64))
- fix(deps): update dependency yargs to v12 ([#63](https://github.com/googleapis/nodejs-dns/pull/63))
- chore(deps): update dependency uuid to v3.3.0 ([#59](https://github.com/googleapis/nodejs-dns/pull/59))
- chore(deps): update dependency sinon to v6 ([#60](https://github.com/googleapis/nodejs-dns/pull/60))
- Configure Renovate ([#54](https://github.com/googleapis/nodejs-dns/pull/54))
- refactor: drop repo-tool as an exec wrapper ([#58](https://github.com/googleapis/nodejs-dns/pull/58))
- chore: update sample lockfiles ([#57](https://github.com/googleapis/nodejs-dns/pull/57))
- fix: update linking for samples ([#56](https://github.com/googleapis/nodejs-dns/pull/56))
- chore(package): update eslint to version 5.0.0 ([#55](https://github.com/googleapis/nodejs-dns/pull/55))
- refactor: switch from var => let/const ([#53](https://github.com/googleapis/nodejs-dns/pull/53))
- chore(package): update nyc to version 12.0.2 ([#42](https://github.com/googleapis/nodejs-dns/pull/42))
- chore: lock files maintenance ([#40](https://github.com/googleapis/nodejs-dns/pull/40))
- chore: timeout for system test ([#38](https://github.com/googleapis/nodejs-dns/pull/38))
- chore: lock files maintenance ([#37](https://github.com/googleapis/nodejs-dns/pull/37))
- chore: test on node10 ([#36](https://github.com/googleapis/nodejs-dns/pull/36))
- chore: lock files maintenance ([#35](https://github.com/googleapis/nodejs-dns/pull/35))
- chore: one more workaround for repo-tools EPERM ([#33](https://github.com/googleapis/nodejs-dns/pull/33))
- chore: workaround for repo-tools EPERM ([#32](https://github.com/googleapis/nodejs-dns/pull/32))
- chore: setup nighty build in CircleCI ([#30](https://github.com/googleapis/nodejs-dns/pull/30))
- Upgrade repo-tools and regenerate scaffolding. ([#29](https://github.com/googleapis/nodejs-dns/pull/29))

