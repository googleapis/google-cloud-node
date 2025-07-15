# Take an example like speech, this would be the process
# to create a library, and merge it into google-cloud-node

# First, run the generator on all of the versions of a given API
# In the docker image this would assume we have bazel
bazelisk build //google/cloud/speech/v1:speech-v1-nodejs
bazelisk build //google/cloud/speech/v2:speech-v2-nodejs
bazelisk build //google/cloud/speech/v1p1beta1:speech-v1p1beta1-nodejs

# These get outputed into the corresponding libraries:
# speech-v1-nodejs
# speech-v2-nodejs
# speech-v1p1beta1-nodejs
# So then, we need to bundle these into a staging directory 
# (basically, following this part of owlbot: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/.OwlBot.yaml)
mkdir "owl-bot-staging/google-cloud-speech"
mv speech-v1-nodejs owl-bot-staging/google-cloud-speech/v1
mv speech-v2-nodejs owl-bot-staging/google-cloud-speech/v2
mv speech-v1p1beta1-nodejs owl-bot-staging/google-cloud-speech/v1p1beta1

# Now, let's assume we have a clone of google-cloud-node. If it exists, comment the following
# out. Also assumes we will have git in the docker image
git clone git@github.com:googleapis/google-cloud-node.git

mv owl-bot-staging/google-cloud-speech google-cloud-node

# Then, in its current state, just run the post-processor:
docker pull gcr.io/cloud-devrel-public-resources/owlbot-nodejs-mono-repo
docker run  --user $(id -u):$(id -g) --env DEFAULT_BRANCH="main" --rm -v $(pwd):/repo -w /repo gcr.io/cloud-devrel-public-resources/owlbot-nodejs-mono-repo

# Then we should be able to just commit these changes
git add .
git commit -m 'chore: run the generator'
git push