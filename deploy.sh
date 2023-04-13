#!/usr/bin/env sh

set -e

npm run build

cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:maomincoding/strve-doc-zh.git master:pages

cd -