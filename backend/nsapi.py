#!/usr/bin/python
# -*- coding: utf-8 -*-

from flask import Flask, escape
from flask_jsonp import jsonpify
import data
import json
application = Flask(__name__)

@application.route("/")
def hello():
    return "<h1 style='color:blue'>Hello There!</h1>\n"

@application.route("/api/api2")
def api2():
    return "<h1 style='color:blue'>Enter API 2222</h1>\n"

@application.route("/api/")
def api():
    return "<h1 style='color:blue'>Enter API</h1>\n"

@application.route("/api/getnannies/<nannysystem>", methods=['GET'])
def getnannies(nannysystem):
    nannysystem = escape(nannysystem)
    db = data.storage()
    with db:
        ret = [n for n in db._CONN.execute('select %s from nannies where nannysystem_no = ?' % ",".join(db._NANNIES_COL[1:]), (nannysystem, ))]
#     print request.args['a'], type(request.args['a'])
#     print request.args['b'], type(request.args['b'])
    return jsonpify(ret)

if __name__ == "__main__":
    application.run(host='0.0.0.0', debug=True)
#     db = data.storage()
#     with db:
#         for n in db._CONN.execute('select * from nannies where nannysystem_no = ?', ('ge',)):
#             print n
#         print 'end'















