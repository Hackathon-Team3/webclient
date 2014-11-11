#!/bin/bash -e

function missing_req() {
  echo "You need awscli. See http://aws.amazon.com/cli/"
  exit 1
}


which aws > /dev/null || missing_req

aws s3 sync . s3://marsbook --exclude ".*" --acl=public-read
