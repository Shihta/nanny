#!/usr/bin/python
# -*- coding: utf-8 -*-

import sqlite3
import os

class storage(object):
    _DB_NAME = 'nanny.sqlite'
    _CONN = None
    _NANNIES_COL = []

    def __init__(self, dbname=None):
        if dbname:
            print 'change dbname'
            self._DB_NAME = dbname

    def __enter__(self, *args, **kwargs):
        self._CONN = sqlite3.connect(self._DB_NAME)
        self._CONN.execute('PRAGMA encoding = "UTF-8";')
        self._parameter_init()
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        self._CONN.close()
        if exc_type:
            print "Exception", exc_type
            print "Exception Value", exc_value
            print "Traceback", traceback

    def _parameter_init(self):
        self._NANNIES_COL = []
        for row in self._CONN.execute('PRAGMA table_info(nannies)'):
            self._NANNIES_COL.append(row[1])

    def initialize(self, initfile=None):
        self._CONN.close()
        os.remove(self._DB_NAME)
        self._CONN = sqlite3.connect(self._DB_NAME)

        # DB init by file
        with open('initialize.sql') as f:
            sqls = f.read()
        for sql in sqls.split(';'):
            sql = sql.strip()
            if sql == "":
                break
            self._CONN.execute(sql)
        self._parameter_init()

    def execute(self, sql):
        return self._CONN.execute(sql)

    def insert_districts(self, districts):
        for district in districts:
            sql = 'INSERT INTO districts (name, no) VALUES ("%s", "%s");' % (district['name'], district['no'])
            self._CONN.execute(sql)
        self._CONN.commit()

    def insert_nannysystems(self, district, nannysystems):
        for nannysystem in nannysystems:
            sql = 'INSERT INTO nannysystems (district_no, name, no) VALUES ("%s", "%s", "%s");' % (district, nannysystem['name'], nannysystem['no'])
            self._CONN.execute(sql)
        self._CONN.commit()

if __name__ == "__main__":
    with storage() as ss:
        print dir(ss)
        print ss._CONN
        print ss.initialize()
        for row in ss.execute('PRAGMA table_info(nannies)'):
            print '>> ', row
        print ss._CONN















