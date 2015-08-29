#!/bin/bash

LOGDIR="/var/log/uwsgi"
sourcelogpath="${LOGDIR}/uwsgi.log"
touchfile="${LOGDIR}/.touchforlogrotate"

cd $LOGDIR

# equal to `date -d "2 days ago" +"%Y%m%d"`
DATE=`date -d "yesterday" +"%Y%m%d"`
destlogpath="${LOGDIR}/uwsgi-${DATE}.log"
if [ -f $destlogpath ]; then
    gzip $destlogpath
fi

DATE=`date +"%Y%m%d"`
destlogpath="${LOGDIR}/uwsgi-${DATE}.log"
mv $sourcelogpath $destlogpath

touch $touchfile
