#!/bin/bash

PWD="/usr/src/nanny/backend"
export PYTHONIOENCODING=utf-8

cd $PWD

DATE=`date +"%Y%m%d"`
python crawler.py nanny_$DATE.sqlite > log_$DATE.txt
if [ $? = "0" ]; then
    cp nanny_$DATE.sqlite nanny.sqlite
fi

