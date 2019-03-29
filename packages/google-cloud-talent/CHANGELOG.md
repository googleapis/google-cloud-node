# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/talent?activeTab=versions

## v0.2.0

03-29-2019 13:05 PDT

### Implementation Changes

**🚨 BREAKING CHANGE 🚨**

This release includes several breaking changes since v0.1.0:

- Removes `ResumeServiceClient`.
- Removes support for any string template paths relating to `projectPath` and `companyPath`, it now supports `tenantPath` and `companyOldPath` instead. 

### New Features
- feat: v4beta1 application support and proto sync ([#29](https://github.com/googleapis/nodejs-talent/pull/29))
    - Adds `ApplicationServiceClient`

### Documentation
- docs: fix broken urls in proto comments ([#22](https://github.com/googleapis/nodejs-talent/pull/22))

### Internal / Testing Changes
- chore: publish to npm using wombat ([#25](https://github.com/googleapis/nodejs-talent/pull/25))
- build: use per-repo npm publish token ([#23](https://github.com/googleapis/nodejs-talent/pull/23))

## v0.1.0

03-12-2019 21:57 PDT

First release!

