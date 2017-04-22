#!/bin/bash

read -p "Press enter to bump to version $1 and push to $2" -n 1 -r
git checkout master || exit 1
git fetch -v "$2" || exit 1
git rebase "$2/master" || exit 1
npm version "$1" || exit 1
git push "$2" master --tags || exit 1
npm publish
