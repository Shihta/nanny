#!/usr/bin/python
# -*- coding: utf-8 -*-

import data
import sys
import json
# from flask_jsonp import jsonpify

def showtable():
    db = data.storage()
    with db:
        districts = db.execute('select * from districts')
        for d in districts:
            print '<ul><li>%s</li>' % d[0]
            for ns in db.execute('select * from nannysystems where district_no = "%s"' % d[1]):
                print '<ul><li>%s</li><ul>' % ns[1]
                for n in db.execute('select * from nannies where nannysystem_no = "%s" limit 10' % ns[2]):
                    print u'<li>姓名：%s，登記證編號：%s，已收托幼兒數：%s</li>' % (n[2], n[3], n[13])
                print '</ul></ul>'
            print '</ul>'

def showjson():
    db = data.storage()
    with db:
        districts = [i for i in db.execute('select * from districts')]
        js = json.dumps(districts, encoding="utf-8")
        print js
        nannysystems = {}
        for d in districts:
            tmp = [i for i in db.execute('select name, no from nannysystems where district_no = "%s"' % d[1])]
#             print tmp
            nannysystems[d[1]] = tmp
#         for k, v in nannysystems.iteritems():
#             print k, v
        print json.dumps(nannysystems, encoding="utf-8")


if __name__ == "__main__":
    print 'hihi misc'
#     showtable()
    showjson()


