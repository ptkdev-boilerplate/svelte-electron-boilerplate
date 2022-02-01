#!/bin/bash
CHANGELOG=$(cat ./CHANGELOG_RELEASE.txt)
CHANGELOG="${CHANGELOG//'%'/'%25'}"
CHANGELOG="${CHANGELOG//$'\n'/'%0A'}"
CHANGELOG="${CHANGELOG//$'\r'/'%0D'}"
echo ::set-output name=changelog::$CHANGELOG