#!/bin/bash

PWD="/usr/src/nanny/backend"

cd $PWD

DATE=`date +"%Y%m%d"`
python crawler.py nanny_$DATE.sqlite
cp nanny_$DATE.sqlite nanny.sqlite

