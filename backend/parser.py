#!/usr/bin/python
# -*- coding: utf-8 -*-

from pyquery import PyQuery as pq
import re
# import lxml.html.HtmlElement

_np = "下一頁".decode("utf-8")

def parseNannyDetails(html):
    d = pq(html)
    detail = []
    try:
        blocks = d('div.mother').items()
        detail += [re.sub('\s', '', j('td:last').text()) for j in blocks.next()('tr').items()]
        detail += [re.sub('\s', '', j('td:last').text()) for j in blocks.next()('tr').items()]
    #     for i in blocks[0]('tr').items():
    #         print re.sub('\s', '', i('td:last').text())
        del(blocks)
    
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
    print len(detail), detail

    with open('testdata/d.html') as f:
        html = f.read()
    detail = parseNannyLinkPage(html)
    print detail, type(detail)

    with open('testdata/e.html') as f:
        html = f.read()
    detail = parseNannyLinkPage(html)
    print detail, type(detail)








