
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

> Scraper found **6004** proxies at the latest update. Usable proxies are below.

## Usage

Click the file format that you want and copy the URL.

|File|Content|Count|
|----|-------|-----|
|[data.txt](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data.txt)|`ip_address:port` combined (seperated new line)|321|
|[data.json](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data.json)|`ip, port`|321|
|[data-with-geolocation.json](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data-with-geolocation.json)|`ip, port, geolocation`|321|

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
|[proxylist.geonode.com](https://proxylist.geonode.com/api/proxy-list?limit=300&page=1&sort_by=lastChecked&sort_type=desc&protocols=http,https)|300|✅|
|[proxyscrape.com](https://api.proxyscrape.com/v2/?request=displayproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all)|1004|✅|
|[github.com/clarketm/proxy-list](https://raw.githubusercontent.com/clarketm/proxy-list/master/proxy-list-raw.txt)|400|✅|
|[github.com/monosans/proxy-list](https://raw.githubusercontent.com/monosans/proxy-list/main/proxies/http.txt)|507|✅|
|[github.com/TheSpeedX/PROXY-List](https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt)|3242|✅|


## Sample Proxies With Geolocation Info

|#|Ip|Port|Country|City|Internet Service Provider|
|-|--|----|-------|----|-------------------------|
|1|35.193.113.186|80|United States|Council Bluffs|Google LLC|
|2|85.195.104.71|80|Germany|Frankfurt am Main|Host Europe GmbH|
|3|75.126.253.8|8080|United States|Dallas|SoftLayer|
|4|35.193.113.186|80|United States|Council Bluffs|Google LLC|
|5|187.130.139.197|8080|Mexico|Mazatlán|Uninet S.A. de C.V.|
|6|54.151.6.61|3128|United States|San Jose|Amazon.com, Inc.|
|7|82.65.249.238|8080|France|Paris|Proxad / Free SAS|
|8|134.238.252.143|8080|India|Mumbai|Google LLC|
|9|200.105.215.22|33630|Bolivia|La Paz|AXS Bolivia S. A.|
|10|8.219.97.248|80|Singapore|Singapore|Alibaba (US) Technology Co., Ltd.|
|11|103.23.236.197|8080|India|Anupgarh|Kappa Internet Services Private Limited|
|12|103.16.160.70|10000|Vietnam|Chúc Sơn|ANH|
|13|124.122.2.114|8080|Thailand|Nakhon Pathom|True Internet Co., Ltd.|
|14|103.10.69.126|10000|Vietnam|Hanoi|Httvserver Technology Company Limited|
|15|201.77.108.196|999|Mexico|Valle de Allende|Nidix Networks S.a. De C.V.|
|16|192.155.95.228|10755|United States|Atlanta|Linode, LLC|
|17|50.192.195.69|52018|United States|Salt Lake City|Comcast Cable Communications, LLC|
|18|45.15.19.194|8118|United Kingdom|London|Blix Solutions|
|19|45.167.125.97|9992|Colombia|Popayán|Sepcom Comunicaciones SAS|
|20|178.209.51.218|7829|Switzerland|Zurich|Nine Internet Solutions AG|



## Contributing

Contributions are welcome, and they are greatly appreciated! Every
little bit helps, and credit will always be given.

