#!/usr/bin/python
# -*- coding: utf-8 -*-

import requests
import json
import parser

print 'hihi'
res = requests.post('http://cwisweb.sfaa.gov.tw/js_molde/address_json_db.jsp?keyNames=00000&p=0')
print res.status_code
print res.headers
data0 = json.loads(res.text.strip())[1:]
# json.loads(data0)
ss = requests.session()
for l in data0:
    print l['name'], l['no']
    res = requests.post('http://cwisweb.sfaa.gov.tw/js_molde/cwsys_json_db.jsp?keyNames=%s' % l['no'])
    data1 = json.loads(res.text.strip())[1:]
    for m in data1:
        print '  ', m['name'], m['no']

    # Get administrative district
#     print '   ------'
#     res = requests.post('http://cwisweb.sfaa.gov.tw/js_molde/address_json_db.jsp?keyNames=%s&p=1' % l['no'])
#     data2 = json.loads(res.text.strip())[1:]
#     for n in data2:
#         print '  ', n['name'], n['no']

    payload = {
        'MEM_CITY':'',
        'MEM_REGION':'%s' % l['no'], #6300000000
        'd11':'',
        'd12':'',
        'd21':'',
        'd22':'',
        'd31':'',
        'd32':'',
        'd41':'',
        'd51':'',
        'd52':'',
        'd61':'',
        'd62':'',
        'd71':'',
        'd72':'',
        'imageField2.x':'', #47
        'imageField2.y':'', #23
        'nums':'',
        'syst':'%s' % data1[0]['no'], #CW10107060
    }
#     print payload
    res = ss.post('http://cwisweb.sfaa.gov.tw/04nanny/02map.jsp', data=payload)
    res = ss.get('http://cwisweb.sfaa.gov.tw/04nanny/03list.jsp')
#     print res.status_code
#     print res.headers
    sns = parser.parseNannyLink(res.text)
    count = 5
    for sn in sns:
        print 'sn=%s' % sn
        res = ss.post('http://cwisweb.sfaa.gov.tw/04nanny/03view.jsp', data={'sn':sn})
        detail = parser.parseNannyDetails(res.text)
        for dd in detail:
            print '<%s>' % dd
        print '---------------------'
        count -= 1
        if count == 0:
            break
    
    break









