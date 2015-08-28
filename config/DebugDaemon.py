#!/usr/local/bin/python

import signal
import os
import subprocess
import re

_PIPE = subprocess.PIPE

def restart():
    p = subprocess.Popen("kill -9 `ps -ef |grep 'nsapi' |grep -v grep |awk {'print $2'}`", stdin=_PIPE, stdout=_PIPE, stderr=_PIPE, shell=True)
    (stdout, stderr) = p.communicate()
    print "<%s>  [%s]" % (stdout, stderr)
    p = subprocess.Popen("/usr/local/bin/python /Users/kuster/workspace/NannyBackend/backend/nsapi.py", stdin=_PIPE, shell=True)

def signal_handler(signal, frame):
    print('Got signal')
    restart()

signal.signal(signal.SIGHUP, signal_handler)
print os.getpid()
restart()
while True:
    signal.pause()