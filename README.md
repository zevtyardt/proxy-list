
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

> Scraper found **5432** proxies at the latest update. Usable proxies are below.

## Usage

Click the file format that you want and copy the URL.

|File|Content|Count|
|----|-------|-----|
|[data.txt](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data.txt)|`ip_address:port` combined (seperated new line)|407|
|[data.json](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data.json)|`ip, port`|407|
|[data-with-geolocation.json](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data-with-geolocation.json)|`ip, port, geolocation`|407|

## Sources

|Source|Found Proxies|Succeed|
|------|-------------|-------|
|[free-proxy-list.net](https://free-proxy-list.net)|300|✅|
|[us-proxy.org](https://www.us-proxy.org)|200|✅|
|[proxydb.net](http://proxydb.net)|15|✅|
|[free-proxy-list.com](https://free-proxy-list.com/?page=&port=&type%5B%5D=http&type%5B%5D=https&up_time=0&search=Search)|10|✅|
|[proxy-list.download](https://www.proxy-list.download/HTTP)|26|✅|
|[vpnoverview.com](https://vpnoverview.com/privacy/anonymous-browsing/free-proxy-servers)|32|✅|
|[proxyscan.io](https://www.proxyscan.io)|100|✅|
|[proxylist.geonode.com](https://proxylist.geonode.com/api/proxy-list?limit=300&page=1&sort_by=lastChecked&sort_type=desc&protocols=http,https)|300|✅|
|[proxyscrape.com](https://api.proxyscrape.com/v2/?request=displayproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all)|1044|✅|
|[github.com/clarketm/proxy-list](https://raw.githubusercontent.com/clarketm/proxy-list/master/proxy-list-raw.txt)|400|✅|
|[github.com/monosans/proxy-list](https://raw.githubusercontent.com/monosans/proxy-list/main/proxies/http.txt)|464|✅|
|[github.com/TheSpeedX/PROXY-List](https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt)|2541|✅|


## Sample Proxies With Geolocation Info

|#|Ip|Port|Country|City|Internet Service Provider|
|-|--|----|-------|----|-------------------------|
|1|145.40.99.247|3128|United States|Dallas|Packet Host, Inc.|
|2|104.223.135.178|10000|United States|Los Angeles|LayerHost|
|3|155.248.197.241|9898|United States|San Jose|Oracle Corporation|
|4|45.131.66.221|3128|Germany|Frankfurt am Main|Dominic Scholz trading as ITP-Solutions GmbH & Co. KG|
|5|54.215.187.121|3128|United States|San Jose|Amazon.com, Inc.|
|6|147.28.184.73|3128|Germany|Frankfurt am Main|Packet Host, Inc.|
|7|145.40.99.247|3128|United States|Dallas|Packet Host, Inc.|
|8|104.223.135.178|10000|United States|Los Angeles|LayerHost|
|9|31.186.239.245|8080|Netherlands|Amsterdam|NetSkope Inc|
|10|155.248.197.241|9898|United States|San Jose|Oracle Corporation|
|11|54.215.187.121|3128|United States|San Jose|Amazon.com, Inc.|
|12|103.154.185.10|8080|India|Mandla|Qtime Businesses Private Limited|
|13|68.183.237.189|8080|Singapore|Singapore|DigitalOcean, LLC|
|14|113.53.231.133|3129|Thailand|Ban Pho|TOT Public Company Limited|
|15|117.251.103.186|8080|India|Hazratpur|BSNL Internet|
|16|116.98.224.19|10003|Vietnam|Hanoi|Viettel Corporation|
|17|200.76.42.194|999|Mexico|San Pedro|Alestra, S. de R.L. de C.V.|
|18|150.129.82.138|80|Hong Kong|Sham Shui Po|Cloudie Limited|
|19|187.130.139.197|8080|Mexico|Mazatlán|Uninet S.A. de C.V.|
|20|36.90.105.114|3128|Indonesia|Samarinda|PT. Telekomunikasi Indonesia|



## Contributing

Contributions are welcome, and they are greatly appreciated! Every
little bit helps, and credit will always be given.

