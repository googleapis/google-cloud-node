<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Google Cloud Resource Manager API: Node.js Samples

[![Open in Cloud Shell][shell_img]][shell_link]

Google Cloud Platform provides container resources such as Organizations and Projects, that allow you to group and hierarchically organize other Cloud Platform resources. This hierarchical organization lets you easily manage common aspects of your resources such as access control and configuration settings. The [Cloud Resource Manager API](https://cloud.google.com/resource-manager/docs/) enables you to programmatically manage these container resources.

## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Projects](#projects)

## Before you begin

Before running the samples, make sure you've followed the steps in the
[Before you begin section](../README.md#before-you-begin) of the client
library's README.

## Samples

### Projects

View the [source code][projects_0_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-resource&page=editor&open_in_editor=samples/projects.js,samples/README.md)

__Usage:__ `node projects.js --help`

```
projects.js <command>

Commands:
  projects.js list  List all current projects.

Options:
  --version  Show version number                                                                               [boolean]
  --help     Show help                                                                                         [boolean]

Examples:
  node projects.js list  Lists all current projects.

For more information, see https://cloud.google.com/resource-manager/docs
```

[projects_0_docs]: https://cloud.google.com/resource-manager/docs
[projects_0_code]: projects.js

[shell_img]: //gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-resource&page=editor&open_in_editor=samples/README.md
