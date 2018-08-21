# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/PACKAGE NAME?activeTab=versions

## v0.9.0

### New Features
- Bring in new feature:
    - StoredInfoTypes

### Dependencies
- chore(deps): update dependency eslint-config-prettier to v3 (#110)
- chore(deps): lock file maintenance (#104)
- chore(deps): lock file maintenance (#103)
- fix(deps): update dependency google-gax to ^0.18.0 (#100)
- chore(deps): lock file maintenance (#99)
- chore(deps): lock file maintenance (#94)
- chore(deps): update dependency eslint-plugin-node to v7 (#91)
- chore(deps): lock file maintenance (#90)

### Documentation
- doc: add missing namespace (#108)
- DLP sample: Add autoPopulateTimespan option for creating job triggers. (#64)
- feat: Add code samples for DLP text redaction (#61)

### Internal / Testing Changes
- Update synth.py (#112)
- test: use strictEqual in tests (#92)
- chore: do not use npm ci (#107)
- chore: ignore package-lock.json (#105)
- chore: update renovate config (#102)
- remove that whitespace (#101)
- chore: move mocha options to mocha.opts (#97)
- chore: add node templates to synth.py (#95)
- fix: requiring samples/ node engine >7.6 because async/await was used (#93)

## v0.8.0

### BREAKING CHANGE
- fix: drop support for node.js 4.x and 9.x (#81)

### Documentation
- docs: export google.privacy.* namespace instead of google.cloud.* so rpc doc links work (#80)

### Internal / Testing Changes
- chore(build): use `npm ci` instead of `npm install` (#86)
- chore: really delete node4 and node9 (#83)

