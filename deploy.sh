#!/usr/bin/env sh

# abort on errors
set -e

# build static version
npm run generate

# run tests
# npm run start-static
# npm run e2e

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:popcorn-nantes/popcorn-nantes.github.io master

cd -
