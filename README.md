
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

> Scraper found **5043** proxies at the latest update. Usable proxies are below.

## Usage

Click the file format that you want and copy the URL.

|File|Content|Count|
|----|-------|-----|
|[data.txt](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data.txt)|`ip_address:port` combined (seperated new line)|271|
|[data.json](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data.json)|`ip, port`|271|
|[data-with-geolocation.json](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data-with-geolocation.json)|`ip, port, geolocation`|271|

## Sources

|Source|Found Proxies|Succeed|
|------|-------------|-------|
|[free-proxy-list.net](https://free-proxy-list.net)|300|✅|
|[us-proxy.org](https://www.us-proxy.org)|200|✅|
|[proxydb.net](http://proxydb.net)|15|✅|
|[free-proxy-list.com](https://free-proxy-list.com/?page=&port=&type%5B%5D=http&type%5B%5D=https&up_time=0&search=Search)|10|✅|
|[proxy-list.download](https://www.proxy-list.download/HTTP)|26|✅|
|[vpnoverview.com](https://vpnoverview.com/privacy/anonymous-browsing/free-proxy-servers)|0|🚫|
|[proxyscan.io](https://www.proxyscan.io)|100|✅|
|[proxylist.geonode.com](https://proxylist.geonode.com/api/proxy-list?limit=300&page=1&sort_by=lastChecked&sort_type=desc&protocols=http,https)|300|✅|
|[proxyscrape.com](https://api.proxyscrape.com/v2/?request=displayproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all)|892|✅|
|[github.com/clarketm/proxy-list](https://raw.githubusercontent.com/clarketm/proxy-list/master/proxy-list-raw.txt)|400|✅|
|[github.com/monosans/proxy-list](https://raw.githubusercontent.com/monosans/proxy-list/main/proxies/http.txt)|286|✅|
|[github.com/TheSpeedX/PROXY-List](https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt)|2514|✅|


## Sample Proxies With Geolocation Info

|#|Ip|Port|Country|City|Internet Service Provider|
|-|--|----|-------|----|-------------------------|
|1|128.14.140.2|11772|United States|Los Angeles|Zenlayer Inc|
|2|20.210.26.214|3128|Japan|Tokyo|Microsoft Corporation|
|3|80.74.54.147|3128|Germany|Kevelaer|Deutsche Glasfaser Wholesale GmbH|
|4|34.66.5.144|8888|United States|Council Bluffs|Google LLC|
|5|104.223.135.178|10000|United States|Los Angeles|LayerHost|
|6|47.243.55.21|8080|Hong Kong|Central|Alibaba (US) Technology Co., Ltd.|
|7|34.66.5.144|8888|United States|Council Bluffs|Google LLC|
|8|45.158.171.3|999|Venezuela|Valencia|NETCOM PLUS, C.A|
|9|45.130.141.205|8080|United Kingdom|London|Bangmod Enterprise Co., Ltd.|
|10|8.219.97.248|80|Singapore|Singapore|Alibaba (US) Technology Co., Ltd.|
|11|66.42.53.233|8000|Singapore|Singapore|The Constant Company|
|12|128.14.140.2|11772|United States|Los Angeles|Zenlayer Inc|
|13|141.147.158.11|8080|Japan|Osaka|Oracle Corporation|
|14|45.158.171.3|999|Venezuela|Valencia|NETCOM PLUS, C.A|
|15|104.223.135.178|10000|United States|Los Angeles|LayerHost|
|16|212.80.213.94|8080|Thailand|Nonthaburi|Siamdata Communication Co.|
|17|192.210.196.65|9090|United States|San Jose|ColoCrossing|
|18|162.223.88.61|8080|United States|Buffalo|ColoUp|
|19|202.131.159.202|80|India|Powai|Karuturi Telecom Pvt Ltd|
|20|178.159.126.93|8080|Ukraine|Simferopol|FOP Sinev Maksim Viktorovich|



## Contributing

Contributions are welcome, and they are greatly appreciated! Every
little bit helps, and credit will always be given.

