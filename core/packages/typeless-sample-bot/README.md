# typeless-sample-bot

This bot will automatically convert sample snippets written in TypeScript into JavaScript
sample snippets. This lets you focus on writing TypeScript samples instead of having to
do only JavaScript, or having to maintain both.

## Installation

You will want to install this library as a globally-available, standalone binary.

`npm i @google-cloud/typeless-sample-bot -g`

## Usage

The bot can convert single files or an entire tree of files. In the latter case, it
will attempt to guess which files are actually snippets before doing anything with them.

For individual files, you can specify them as targets:

```bash
typeless-sample-bot --targets file1.ts,file2.ts,etc
```

The output will be written with the same filename stem, but a js extension.

You can also ask for recursive processing:

```bash
typeless-sample-bot --targets samples --recursive
```

Note that -t may be an array, still, for processing multiple recursive trees.

Various utility flags are also available:

```bash
# turn on verbose output
typeless-sample-bot --verbose

# turn on full debug output
typeless-sample-bot --debug

# turn off ANSI colour/emojis
typeless-sample-bot --no-art
```

### Options

| Option | Description | Default |
| ------ | ----------- | ------- |
| targets | List of target files or directory trees | *Required* |
| recursive | If set, targets will be directory trees processed recursively | False |
| verbose | If set, verbose output will be enabled | False |
| debug | If set, full debug output will be enabled | False |
| art | If set, ANSI colour and emojis will be used in the command output | True, use --no-art to cancel |

## Running tests:

`npm test`

## Contributing

If you have suggestions for how `typeless-sample-bot` could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the Contributing Guide.

License: Apache 2.0

© 2022 Google LLC.
