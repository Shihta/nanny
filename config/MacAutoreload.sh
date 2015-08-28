#!/bin/bash

PWD=/Users/kuster/workspace/NannyBackend/backend
PYTHON=/usr/local/bin/python
PID=$(ps -ef |grep 'nsapi' |grep -v grep |awk {'print $2'})
echo $PID
kill $PID
$PYTHON $PWD/nsapi.py > /dev/null 2>&1 &
#$PYTHON $PWD/nsapi.py &
sleep 0.5
