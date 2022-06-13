# gapic-node-templating
gapic-node-templating is a CLI tool that generates Node client library templates.
It is responsible for grabbing information from DRIFT and github, and using that info as inputs into the templates. This templating tool is intended to run in the Docker container under containers/node-bootstrap-container. In production, that
Docker container runs in the context of the git clone of google-cloud-node in a new branch.

## Using the CLI
To use the CLI, first link the command, like so:

```
cd  $MONO_REPO_NAME/packages/gapic-node-templating
npm ci
npm run compile
npm link .
```

Then, you can call the CLI with the following arguments:

* api-id: The api ID of the library you wish to generate, i.e., google.cloud.kms.v1
* destination-foler: the absolute path of where the generated templates should land (should not be created beforehand)
* mono-repo-name: The name of the mono-repo in which the Docker container will be creating a new file (assume it's google-cloud-node), in the form `git@github.com:googleapis/google-cloud-node.git`
* github-token: The string of a github token to authenticate an Octokit instance, in the form of `ghs_1234`

Then, you can run the command like so:

`bootstrap-library --api-id $API_ID --destination-folder $DEST_FOLDER --mono-repo-name $MONO_REPO_NAME --github-token $GITHUB_TOKEN`