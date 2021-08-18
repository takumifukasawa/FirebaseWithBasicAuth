#!/bin/sh

set -e

cp -rf ./static ./firebase/dist/

cd ./firebase/
npm run deploy
