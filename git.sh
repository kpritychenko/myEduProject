#!/bin/bash 
branch="gh-pages"
git checkout "$branch"
git fetch
git pull --rebase origin master
npm run build
git add .
git commit --amend -m build
git push --force origin "$branch"
git checkout master
exit 0