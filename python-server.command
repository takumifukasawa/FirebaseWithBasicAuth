#!/bin/sh

set -e

PYTHON_MAJOR_VERSION=`python -c 'import sys; print(sys.version_info.major)'`
ABSPATH=$(cd "$(dirname "$0")"; pwd -P)

echo $ABSPATH

if [ "$PYTHON_MAJOR_VERSION" = "3" ]; then
  cd $ABSPATH
  cd ./static/
  python -m http.server 8000
elif [ "$PYTHON_MAJOR_VERSION" = "2" ]; then
  cd $ABSPATH
  cd ./static/
  python -m SimpleHTTPServer 8000
else
  echo "please use python version 2 or 3."
  exit 1
fi