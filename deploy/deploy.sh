#!/usr/bin/env sh

set -e

pnpm run build

cd dist

git init
git checkout -b main
git add -A
git commit -m 'deploy'

git push -f git@github.com:FuZhouJohn/mangosteen-fe.git main:gh-pages

cd -