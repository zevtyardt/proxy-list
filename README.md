
# Free HTTP Proxy List 🌍

[![Every 10 Minutes Update](https://github.com/mertguvencli/http-proxy-list/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/mertguvencli/http-proxy-list/actions/workflows/main.yml)
![GitHub](https://img.shields.io/github/license/mertguvencli/http-proxy-list)
![GitHub last commit](https://img.shields.io/github/last-commit/mertguvencli/http-proxy-list)
[![zevtyardt - proxy-list](https://img.shields.io/static/v1?label=zevtyardt&message=proxy-list&color=blue&logo=github)](https://github.com/zevtyardt/proxy-list "Go to GitHub repo")
[![stars - proxy-list](https://img.shields.io/github/stars/zevtyardt/proxy-list?style=social)](https://github.com/zevtyardt/proxy-list)
[![forks - proxy-list](https://img.shields.io/github/forks/zevtyardt/proxy-list?style=social)](https://github.com/zevtyardt/proxy-list)
[![Proxy Updater](https://github.com/zevtyardt/proxy-list/workflows/Proxy%20Updater/badge.svg)](https://github.com/zevtyardt/proxy-list/actions?query=workflow:"Proxy+Updater")
![GitHub repo size](https://img.shields.io/github/repo-size/zevtyardt/proxy-list)
[![GitHub commit activity](https://img.shields.io/github/commit-activity/m/zevtyardt/proxy-list?logo=commits)](https://github.com/zevtyardt/proxy-list/commits/main)

It is a lightweight project that, every 10 minutes, scrapes lots of free-proxy sites, validates if it works, and serves a clean proxy list.

> Scraper found **5080** proxies at the latest update. Usable proxies are below.

## Usage

Click the file format that you want and copy the URL.

|File|Content|Count|
|----|-------|-----|
|[data.txt](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data.txt)|`ip_address:port` combined (seperated new line)|401|
|[data.json](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data.json)|`ip, port`|401|
|[data-with-geolocation.json](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data-with-geolocation.json)|`ip, port, geolocation`|401|

## Sources

|Source|Found Proxies|Succeed|
|------|-------------|-------|
|[free-proxy-list.net](https://free-proxy-list.net)|300|✅|
|[us-proxy.org](https://www.us-proxy.org)|200|✅|
|[proxydb.net](http://proxydb.net)|15|✅|
|[free-proxy-list.com](https://free-proxy-list.com/?page=&port=&type%5B%5D=http&type%5B%5D=https&up_time=0&search=Search)|10|✅|
|[proxy-list.download](https://www.proxy-list.download/HTTP)|26|✅|
|[vpnoverview.com](https://vpnoverview.com/privacy/anonymous-browsing/free-proxy-servers)|0|🚫|
|[proxyscan.io](https://www.proxyscan.io)|0|🚫|
|[proxylist.geonode.com](https://proxylist.geonode.com/api/proxy-list?limit=300&page=1&sort_by=lastChecked&sort_type=desc&protocols=http,https)|0|🚫|
|[proxyscrape.com](https://api.proxyscrape.com/v2/?request=displayproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all)|1033|✅|
|[github.com/clarketm/proxy-list](https://raw.githubusercontent.com/clarketm/proxy-list/master/proxy-list-raw.txt)|400|✅|
|[github.com/monosans/proxy-list](https://raw.githubusercontent.com/monosans/proxy-list/main/proxies/http.txt)|547|✅|
|[github.com/TheSpeedX/PROXY-List](https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt)|2549|✅|


## Sample Proxies With Geolocation Info

|#|Ip|Port|Country|City|Internet Service Provider|
|-|--|----|-------|----|-------------------------|
|1|75.126.253.8|8080|United States|Dallas|SoftLayer|
|2|198.59.191.234|8080|United States|Carlsbad|TDS TELECOM|
|3|62.192.226.217|3128|Russia|Arkhangelsk|Arkhangelsk Television Company Ltd|
|4|75.126.253.8|8080|United States|Dallas|SoftLayer|
|5|51.159.115.233|3128|France|Paris|SCALEWAY|
|6|132.147.34.22|8111|United States|Miami|Breezeline|
|7|134.238.252.143|8080|India|Mumbai|Google LLC|
|8|112.217.162.5|3128|South Korea|Yangsan|LG DACOM Corporation|
|9|195.178.197.20|8080|Russia|Podolsk|IIP|
|10|177.141.99.50|8080|Brazil|São Paulo|Claro NXT Telecomunicacoes Ltda|
|11|47.244.2.19|3128|Hong Kong|Central|Alibaba.com LLC|
|12|147.139.191.249|3128|Indonesia|Jakarta|Alibaba.com LLC|
|13|203.150.113.254|8080|Thailand|Watthana|Internet Thailand Company Ltd.|
|14|103.180.138.114|10003|Vietnam|Ho Chi Minh City|TANHOANGVINA|
|15|147.139.190.169|3128|Indonesia|Jakarta|Alibaba.com LLC|
|16|149.129.213.92|3128|Indonesia|Jakarta|Alibaba.com Singapore E-Commerce Private Limited|
|17|181.129.49.214|999|Colombia|Medellín|EPM Telecomunicaciones S.A. E.S.P.|
|18|1.2.252.65|8080|Thailand|Khwaeng Thung Song Hong|TOT Public Company Limited|
|19|45.164.12.98|999|Dominican Republic|Bayahibe|GUESTCHOICE TV RD, S.R.L|
|20|200.105.215.22|33630|Bolivia|La Paz|AXS Bolivia S. A.|



## Contributing

Contributions are welcome, and they are greatly appreciated! Every
little bit helps, and credit will always be given.

