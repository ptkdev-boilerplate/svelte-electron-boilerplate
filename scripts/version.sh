#!/bin/bash
PACKAGE_VERSION=$(cat ./package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | tr -d '[[:space:]]')
echo ::set-output name=pkgversion::$PACKAGE_VERSION