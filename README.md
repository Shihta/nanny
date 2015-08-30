# Taiwan nannies

[Official web really suck]. Backend is for data collection and frontend is for display.

If you build this system in [RASPBIAN], you could refer to [Locust] for environment building.

## Python Virtual Environment

You can find most of environment configurations in [How To Serve Flask Applications with uWSGI and Nginx on Ubuntu 14.04]

There is a problem when you [install lxml by pip]
```sh
apt-get install libxml2-dev libxslt1-dev
pip install requests pyquery uwsgi flask
```

## PHP

If you get installation problem like [curl problem].

If you get blank page, please refer to [nginx File not found]


## Misc

[JavaScript Editor Plugin for Eclipse]

[uwsgi log rotate]


[install lxml by pip]:http://stackoverflow.com/questions/5178416/pip-install-lxml-error
[Official web really suck]:http://cwisweb.sfaa.gov.tw/04nanny/01search.jsp
[Locust]:https://github.com/Shihta/locustweb
[RASPBIAN]:https://www.raspberrypi.org/downloads/
[How To Serve Flask Applications with uWSGI and Nginx on Ubuntu 14.04]:https://www.digitalocean.com/community/tutorials/how-to-serve-flask-applications-with-uwsgi-and-nginx-on-ubuntu-14-04
[JavaScript Editor Plugin for Eclipse]:http://stackoverflow.com/questions/12269560/javascript-editor-plugin-for-eclipse
[uwsgi log rotate]:http://www.chenyudong.com/archives/uwsgi-log-rotate-by-date.html
[curl problem]:http://www.mitchyb.com/2015/05/installing-aws-sdk-for-php-onto-my.html
[nginx File not found]:http://www.nginx.cn/562.html
