<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Google Cloud DNS: Node.js Samples

[![Open in Cloud Shell][shell_img]][shell_link]

[Cloud DNS](https://cloud.google.com/dns/docs/) allows you to publish your domain names using Google&#x27;s infrastructure for production-quality, high-volume DNS services. Google&#x27;s global network of anycast name servers provide reliable, low-latency authoritative name lookups for your domains from anywhere in the world.

## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Zones](#zones)

## Before you begin

Before running the samples, make sure you've followed the steps in the
[Before you begin section](../README.md#before-you-begin) of the client
library's README.

## Samples

### Zones

View the [source code][zones_0_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dns&page=editor&open_in_editor=samples/zones.js,samples/README.md)

__Usage:__ `node zones.js --help`

```
zones.js <command>

Commands:
  zones.js list  Lists all zones in the current project.

Options:
  --version  Show version number                                                                               [boolean]
  --help     Show help                                                                                         [boolean]

Examples:
  node zones.js list  Lists all zones in the current project.

For more information, see https://cloud.google.com/dns/docs
```

[zones_0_docs]: https://cloud.google.com/dns/docs
[zones_0_code]: zones.js

[shell_img]: //gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dns&page=editor&open_in_editor=samples/README.md
