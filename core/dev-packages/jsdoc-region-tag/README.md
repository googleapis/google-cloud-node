# Region Tag JSDoc Plugin

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)


Reads a samples directory, extracting samples between `[START]`/`[STOP]` tags,
allowing these samples to be placed in JSDoc comments, like so:

```js
/*
  * @example <caption>include:samples/document-snippets/cluster.js</caption>
  * region_tag:bigtable_delete_cluster
  */
```

## Usage

1. `npm i jsdoc-region-tag`.
2. add the plugin to your `.jsdoc.js`.

    ```js
    module.exports = {
      plugins: [
        'jsdoc-region-tag'
      ]
    }
    ```

## Configuration

The environment varaible `SAMPLES_DIRECTORY` can be set, to set a samples
directory other than `./samples`.

## License

Apache-2.0