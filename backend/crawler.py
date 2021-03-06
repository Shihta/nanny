#!/usr/bin/python
# -*- coding: utf-8 -*-

import requests
import json
import parser
import data
import sys
import traceback
import logging, logging.handlers

from config import _DEBUG_LESSGET
from config import _INIT_DB

LOG_FILENAME = 'NCrawler.log'

def recordTraceBack(logger):
    try:
        formatted_lines = traceback.format_exc().splitlines()
        for i in formatted_lines:
            logger.error(i)
    except:
        pass

if __name__ == "__main__":
    print 'crawler has started!'
    logger = logging.getLogger('NCrawler')
    logger.setLevel(logging.DEBUG)
    handler = logging.handlers.RotatingFileHandler(
            LOG_FILENAME, maxBytes=1048576, backupCount=5, encoding = "utf-8")
    formatter = logging.Formatter("%(asctime)s %(levelname)s-%(name)s %(message)s")
    handler.setFormatter(formatter)
    logger.addHandler(handler)
    logger.info('Program started!')

    # Get all countries
    res = requests.post('http://cwisweb.sfaa.gov.tw/js_molde/address_json_db.jsp?keyNames=00000&p=0')
    # print res.status_code
    # print res.headers
    districts = json.loads(res.text.strip())[1:]
    if len(sys.argv) > 1:
        db = data.storage(sys.argv[1])
    else:
        db = data.storage()
    with db:
        if _INIT_DB:
            db.initialize()
        db.insert_districts(districts)
    count4 = 2

    # Foreach district
    for district in districts:
        print district['name'], district['no']
    
        # Get administrative district
#         print '   ------'
#         res = requests.post('http://cwisweb.sfaa.gov.tw/js_molde/address_json_db.jsp?keyNames=%s&p=1' % district['no'])
#         data2 = json.loads(res.text.strip())[1:]
#         for n in data2:
#             print '  ', n['name'], n['no']
    
        # Get Nanny Systems
        retryc = 5
        while True:
            try:
                res = requests.post('http://cwisweb.sfaa.gov.tw/js_molde/cwsys_json_db.jsp?keyNames=%s' % district['no'])
            except Exception as e:
                recordTraceBack(logger)
                retryc -= 1
                if retryc >= 0:
                    continue
                else:
                    sys.exit(2)
            break
        nannysystems = json.loads(res.text.strip())[1:]
        with db:
            db.insert_nannysystems(district['no'], nannysystems)
        if _DEBUG_LESSGET:
            count3 = 2

        # Foreach nanny system
        ss = requests.session()
        for nannysystem in nannysystems:
            print '  %s %s' % (nannysystem['name'], nannysystem['no'])
    
            payload = {
                'MEM_CITY':'',
                'MEM_REGION':'%s' % district['no'], #6300000000
                'd11':'', 'd12':'', 'd21':'', 'd22':'', 'd31':'', 'd32':'', 'd41':'',
                'd51':'', 'd52':'', 'd61':'', 'd62':'', 'd71':'', 'd72':'',
                'imageField2.x':'', #47
                'imageField2.y':'', #23
                'nums':'',
                'syst':'%s' % nannysystem['no'], #CW10107060
            }
            retryc = 5
            while True:
                try:
                    res = ss.post('http://cwisweb.sfaa.gov.tw/04nanny/02map.jsp', data=payload)
                except Exception as e:
                    recordTraceBack(logger)
                    retryc -= 1
                    if retryc >= 0:
                        continue
                    else:
                        sys.exit(2)
                break
            listurl = 'http://cwisweb.sfaa.gov.tw/04nanny/03list.jsp'
            listparameter = ""
            if _DEBUG_LESSGET:
                count2 = 2

            # Foreach page of nanny list
            while True:
                print '    listpage %s' % listparameter
                retryc = 5
                while True:
                    try:
                        res = ss.get(listurl+listparameter)
                    except Exception as e:
                        recordTraceBack(logger)
                        retryc -= 1
                        if retryc >= 0:
                            continue
                        else:
                            sys.exit(2)
                    break
                sns = parser.parseNannyLink(res.text)
                nextpage = parser.parseNannyLinkPage(res.text)
                if _DEBUG_LESSGET:
                    count = 3

                # Foreach nanny on the page
                nannies = []
                for sn in sns:
                    print '      sn=%s' % sn
                    retryc = 5
                    while True:
                        try:
                            res = ss.post('http://cwisweb.sfaa.gov.tw/04nanny/03view.jsp', data={'sn':sn})
                        except Exception as e:
                            recordTraceBack(logger)
                            retryc -= 1
                            if retryc >= 0:
                                continue
                            else:
                                sys.exit(2)
                        break
                    detail = parser.parseNannyDetails(res.text)
                    nannies.append(detail)
    #                 for dd in detail:
    #                     print '<%s>' % dd
    #                 print '---------------------'
                    if _DEBUG_LESSGET:
                        count -= 1
                        if count == 0:
                            print '      >> count break'
                            break
                if len(nannies) > 0:
                    with db:
                        db.insert_nannies(nannysystem['no'], nannies)
                # Foreach nanny on the page END

                if nextpage == None:
                    break
                else:
                    listparameter = '?offset=' + nextpage
                    if _DEBUG_LESSGET:
                        count2 -= 1
                        if count2 == 0:
                            print '    >> count2 break'
                            break
            # Foreach page of nanny list

            if _DEBUG_LESSGET:
                count3 -= 1
                if count3 == 0:
                    print '  >> count3 break'
                    break
        # Foreach nanny system END

        if _DEBUG_LESSGET:
            count4 -= 1
            if count4 == 0:
                print '>> count4 break'
                break
    # Foreach district END





