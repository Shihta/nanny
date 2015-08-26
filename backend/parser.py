#!/usr/bin/python
# -*- coding: utf-8 -*-

from pyquery import PyQuery as pq
import re
# import lxml.html.HtmlElement

_np = "下一頁".decode("utf-8")
_detail_idx = (u"保母姓名：", u"登記證編號：", u"技術證號：", u"保母編號：", u"性別：", u"連絡電話：", u"托育服務地址：", u"年　　齡：", u"教育程度：", u"收托對象：",)

def parseNannyDetails(html):
    d = pq(html)
    detail = []
    try:
        blocks = [i for i in d('div.mother').items()]
#         detail += [re.sub('\s', '', j('td:last').text()) for j in blocks[0]('tr').items()]
        idx = 0
        for curtr in blocks[0]('tr').items():
            tdval = curtr('td:last')
            tdidx = tdval.prev()
            if _detail_idx[idx] == tdidx.text():
                detail.append(re.sub('\s', '', tdval.text()))
                idx += 1
            else:
                while _detail_idx[idx] != tdidx.text() and idx < 10:
                    detail.append(u"")
                    idx += 1
                detail.append(re.sub('\s', '', tdval.text()))
                idx += 1
        i = len(detail)
        while i < 10:
            detail.append("")
            i += 1
        detail += [re.sub('\s', '', j('td:last').text()) for j in blocks[1]('tr').items()]

        strclasses = None
        for i in d('div.classes tr').items():
            if strclasses == None:
                strclasses = ""
                continue
            a = i('td:last')
            strclasses += a.prev().text() + "年" + a.text() + "小時，"
        if strclasses == None:
            detail.append("")
        else:
            strclasses = strclasses[:-3]
            detail.append(strclasses)
    except Exception as e:
        pass
    for i in range(len(detail)):
        if type(detail[i]) == str:
            detail[i] = detail[i].decode('utf-8')
    return detail

def parseNannyLinkPage(html):
    d = pq(html)
    ret = None
    a = d('div.page a:last')
    cur = a.text() if type(a.text()) == unicode else a.text().decode("utf-8")
    if cur == _np:
        b = a.attr('href')
        ret = b[b.find('=')+1:]
    return ret

def parseNannyLink(html):
    d = pq(html)
    ret = []
    for i in d('div.box td a'):
        a = i.attrib['onclick']
        ret.append(a[a.find("'")+1:a.rfind("'")])
    return ret

if __name__ == "__main__":
    print 'hihi pyquery'
    with open('testdata/a.html') as f:
        html = f.read()
    soup = parseNannyLink(html)
    print soup

    with open('testdata/b.html') as f:
        html = f.read()
    detail = parseNannyDetails(html)
    print len(detail)
    for d in detail:
        print d

    with open('testdata/f.html') as f:
        html = f.read()
    detail = parseNannyDetails(html)
    print len(detail)
    for d in detail:
        print d
    import sys
    sys.exit(0)

    with open('testdata/d.html') as f:
        html = f.read()
    detail = parseNannyLinkPage(html)
    print detail, type(detail)

    with open('testdata/e.html') as f:
        html = f.read()
    detail = parseNannyLinkPage(html)
    print detail, type(detail)








