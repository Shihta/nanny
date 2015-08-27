#!/usr/bin/python
# -*- coding: utf-8 -*-

from flask import Flask
application = Flask(__name__)

@application.route("/")
def hello():
    return "<h1 style='color:blue'>Hello There!</h1>"

@application.route("/api/api2")
def api2():
    return "<h1 style='color:blue'>Enter API 2222</h1>\n"

@application.route("/api/")
def api():
    return "<h1 style='color:blue'>Enter API</h1>"

if __name__ == "__main__":
    application.run(host='0.0.0.0')
